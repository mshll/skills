# Imagery

Pictures in product UI carry content, entities or state. A picture that carries none of these belongs on a marketing page, if anywhere.

## Content as hero

- **Encodes**: the thing the user came for (a place, a track, a listing, their own photo).
- **Earned when**: the product's content is visual: media, travel, food, social, real estate.
- **Build**: full-bleed image; UI floats over it on a bottom scrim; chrome colour can be sampled from the image (`colour-and-surface.md`, Sampled). Data drawn on the image when it is about the place (`data-marks.md`, Data on the world).
- **Gold**: `content-as-hero`, `sampled-from-art`.

## Text on images you do not control

Bottom scrim from black to clear under the title, or a tint sampled from the image region behind it, plus a 1pt inner stroke so light images keep an edge. A pill on a photo is a legibility scrim, and allowed there.

## Photography of people and places

- **Earned when**: the product is about people or places and the photo carries emotion the UI cannot (a health profile, a team, a home).
- **Build**: one photo tile or header; keep photos out of data views. Real or licensed photography; generated surreal landscapes read as AI.
- **Gold**: `photo-tile`.

## Illustration per entity

- **Encodes**: identity of each room, device, project or person, consistent across the product.
- **Earned when**: the product has a set of recurring entities users tell apart.
- **Build**: one style for all (grain or stipple scenes, engraved objects with a sticker outline, flat shapes); entity colours in lists match the illustration's. Engraved cut-outs work as icons for real entity types on a map or list, with chrome kept flat around them.
- **Costume when**: illustrations appear only in empty states and never identify anything.
- **Gold**: `grain-illustration`, `engraved-objects`.

## Generated per record

- **Encodes**: a unique, stable identity for each record without a photo (avatars, project thumbnails).
- **Build**: canvas or SVG with an RNG seeded from the record id, so a record always draws the same. rough.js for a hand-drawn line.
- **Costume when**: art changes on reload or has no tie to a record.

## Domain object as container

- **Encodes**: what a thing is, in the form people know it by: film presets as canisters, a share allotment as an engraved certificate, a boarding-pass scanner as a device with an LCD state readout, stamps in a binder with a loupe.
- **Earned when**: for one surface (a picker, a success state, a detail panel), and the object is the product's real metaphor.
- **Build**: the object holds real fields; the rest of the screen stays plain.
- **Costume when**: the whole app is skinned as the object, or the object is the operator's own work tool on a working screen.
- **Gold**: `domain-object-picker`, `domain-artefact-success`, `device-readout`, `hobby-kit`.

## Mascot with states

- **Encodes**: an agent or a single voice; its expressions map to system states (idle, thinking, done, error, overdue). The frog that eats the invoice performs the product's action.
- **Build**: one SVG with swappable eye and mouth groups, paths with equal point counts so expressions morph; silhouette legible at 16px.
- **Costume when**: the mascot never reacts to state.
- **Gold**: `mascot-states`.

## Empty state as diagram

- **Encodes**: what the feature will do once set up, drawn as an annotated sketch of the real object with callouts.
- **Earned when**: configuration and infrastructure features the user has not set up yet.
- **Gold**: `annotated-empty`.

## Dither and halftone imagery

A photo rendered as a dot field in one ink, carried through the page (hero, pictograms, figures in the same dot grid). Earned for print, hardware, security or data products with that heritage. **Gold**: `dither-photo`.

## Marketing-only

3D material renders, painterly backgrounds, engravings as texture, iridescent and refractive glass: brand heroes only, and only when they depict the namesake. Never in product chrome.
