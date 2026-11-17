# SwiftUI

## How the look applies on Apple platforms

System components come first: `List`, `Form`, `NavigationStack`, `TabView`, `.sheet`, `Menu`, `Toggle`, `Button` styles, `.searchable`, SF Symbols, semantic fonts and colors. They carry Dynamic Type, dark mode, accessibility and platform behaviour for free.

From the floor, these carry over whole:
- the decision order (`README.md`): one next step, the least data, placement, then component
- hierarchy from ink steps and size; hue and weight in the roles the direction gives them
- amount of data, worst-case data, empty and failed-load layouts (`layout.md`)
- figures, tables and charts (`data.md`), copy and fixtures (`content.md`)
- the motion gate and duration classes: the more often it is seen, the less it moves; exits faster than entrances (`motion.md`)
- phone type, lists, navigation and sheet anatomy (`mobile.md`), through the native components that already draw them

The direction's type, palette, density and signatures apply through the system's own hooks: `.fontDesign`, a custom `Font` for the display or readout face, `.tint`, asset-catalog colours, `listRowBackground`, `ButtonStyle`. Its surface and button recipes apply to custom surfaces the system has no component for, such as a custom card in a `ScrollView`. Express them as `ShapeStyle`, `ButtonStyle` and colour assets, never literals in views.

## Rules

Mined from the UI Skills catalog; tags name the source.

- Semantic fonts (`.body`, `.headline`) for Dynamic Type; custom fonts via `.font(.custom(name, size:, relativeTo: .body))`. [wshobson/mobile-ios-design]
- Semantic colors (`.primary`, `.secondary`, `.background`) or asset-catalog colors with light and dark values. [mobile-ios-design]
- SF Symbols for icons, one rendering mode and weight per surface. [mobile-ios-design]
- Respect safe areas; extra chrome goes in `safeAreaInset`, never hard-coded edge padding. [mobile-ios-design]
- `NavigationStack(path:)` with value-based `NavigationLink(value:)` and `navigationDestination(for:)`; values are `Hashable`; one history per tab; routes as an enum. [mobile-ios-design, dimillian/swiftui-ui-patterns]
- Mutually exclusive sheets, alerts and destinations come from one enum, not several booleans. [swiftui-ui-patterns]
- `.sheet(item:)` when the sheet shows a selected model; the sheet calls `dismiss()` itself instead of taking `onCancel`/`onConfirm`. [swiftui-ui-patterns]
- Load with `.task` or `.task(id:)` and explicit loading and error states; service calls stay out of `body`. [swiftui-ui-patterns]
- State ownership: `@State` local, `@Binding` for parent-owned values, `@State` holding an `@Observable` at the root, init injection for feature models, `@Environment` for app-wide services. [swiftui-ui-patterns]
- Split a large `body` into separate `View` structs, not computed properties: a computed property shares the parent's invalidation, so every state change re-evaluates every section. [pond: v_pradeilles]
- `LazyVStack`/`LazyHStack` for long lists; stable identity in `ForEach`. [mobile-ios-design, swiftui-ui-patterns]
- Previews for every state from the plan (empty, loading, failed, full, worst case), each fed by a fixture. [swiftui-ui-patterns]
- `.accessibilityLabel` on icon-only controls; section titles get `.accessibilityAddTraits(.isHeader)`. [mobile-ios-design]
- `@SceneStorage` for state restoration; iPad split view works. [mobile-ios-design]
- Scroll-driven reveals derive one normalized progress value from the scroll offset. [swiftui-ui-patterns]
- Springs: dampingFraction 0.85 to 1.0, response 0.3 to 0.4 for controls, about 0.45 for sheets (est.); hand the release velocity to the spring (`motion.md` §2). [emilkowalski/apple-design]
- One translucent material per stack; a light material never sits on another. [apple-design]
- Haptics fire on the same frame as the visual, only for success, error, commit or snap. [apple-design]
- Touch targets 44x44pt; a small visual keeps its look and gets `.contentShape` or padding for the hit area. [`mobile.md`]

## Dynamic Type

Every screen works at `accessibilityExtraLarge` (ax3). At accessibility sizes, rows that hold a label and a value stack vertically instead of squeezing both:

```swift
@Environment(\.dynamicTypeSize) private var typeSize

var body: some View {
    let layout = typeSize.isAccessibilitySize ? AnyLayout(VStackLayout(alignment: .leading)) : AnyLayout(HStackLayout())
    layout {
        Text(invoice.customer)
        Spacer(minLength: 8)
        Text(invoice.amount, format: .currency(code: invoice.currency)).monospacedDigit().fixedSize()
    }
}
```

Amounts, dates and identifiers never break mid-value: `.fixedSize()` with the stacked layout above (tested: fixes "$1,240.0 / 0" at ax3 on 375pt), or `ViewThatFits` with a shorter form.

## Gate

`swiftui/SnapshotMatrix.swift` renders a view at 3 widths (375, 402, 440pt) x 3 text sizes (default, xxxLarge, ax3) x light and dark, writes each cell as a PNG and one `sheet.png` contact sheet.

1. Copy `~/.claude/skills/build-ui/swiftui/SnapshotMatrix.swift` into the project's unit test target (or a package test target) once.
2. Add one test per screen and state, fed by fixtures:

   ```swift
   import Testing
   import Foundation
   @testable import App

   @MainActor
   struct SnapshotTests {
       let out = URL(fileURLWithPath: ProcessInfo.processInfo.environment["SNAPSHOT_DIR"] ?? NSTemporaryDirectory()).appending(path: "snapshots")

       @Test func invoicesWorstCase() throws {
           try SnapshotMatrix.render("Invoices-worst", to: out) { InvoiceList(invoices: .worstCase) }
       }
   }
   ```
3. Run with the output directory on the host (the `TEST_RUNNER_` prefix passes the variable into the test process):

   ```sh
   TEST_RUNNER_SNAPSHOT_DIR=$PWD/.snapshots xcodebuild test -scheme <Scheme> \
     -destination 'platform=iOS Simulator,name=iPhone 17' -only-testing:<TestTarget>/SnapshotTests
   ```
4. Read `.snapshots/snapshots/<name>/sheet.png`, then any cell that looks wrong at full size. Look for: wrapped or broken values, cut labels, text colliding at ax3, dark-mode contrast, rows of uneven height, empty bands. Add `.snapshots/` to `.gitignore`.

One screen of 18 cells took 31s on this machine, build excluded.

What the matrix cannot show: it renders the layer tree without a window scene, so there is no status bar or safe-area inset, and blur materials and some tint colors render flat or faint. Interaction, keyboard, sheet presentation, scrolling and haptics need the simulator: open it with the T3 device tools (`device_list`, `device_open`, then the returned `agent-device` command for taps, typing and screenshots), and confirm feel on a real device.
