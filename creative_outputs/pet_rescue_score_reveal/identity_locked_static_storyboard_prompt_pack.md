# Identity-Locked Static Storyboard Prompt Pack

## Status

- Project: `pet_rescue_score_reveal`
- Issue: `ULT-100`
- Owner: `cg-static-image`
- Output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_rescue_score_reveal`
- Required identity bible: `subject_identity_bible.md`
- Deliverable type: production-ready prompt pack and storyboard spec, not newly generated image files.

## Production Guardrail

The previous generated static storyboard is rejected for production-ready use because the dog changes identity between frames. The corrected workflow is reference-gated:

1. Generate and approve Frame 01 first.
2. Use the approved Frame 01 as a character/image reference for every later frame and for video generation.
3. Repeat the visible `dog_01` anchors inside every per-frame prompt.
4. Reject any image where `dog_01`, `room_01`, or recurring props drift.

Because this runtime does not expose a reliable image-reference or character-reference control in the available image generation path, I am not claiming that new final images were generated. The prompts below are ready for a generation tool that supports references/seeds and for a reviewer identity pass.

## Locked Visual Identity Summary

`dog_01`: small adult 22-25 lb terrier-spaniel mix; short-to-medium soft coat; warm caramel tan ears/head/back saddle/upper tail; white muzzle with centered white blaze to forehead; white chest, belly, and front paws; left front paw has one tiny tan freckle near the knuckle; small caramel patch around the right eye; dark brown eyes; black nose; right ear mostly upright with folded tip; left ear half-flopped outward; simple matte blue fabric collar with small round silver tag, no logo.

`room_01`: modest US apartment living room; entry doorway on the left; quiet back-right corner with muted sage green fleece blanket; low neutral couch on right wall; light oak floor; warm off-white walls; small round side table with warm lamp; clean, lived-in, no brand logos.

`props`: muted sage green washable blanket, cream plush bone toy with simple stitched paw mark, pale blue-gray ceramic water bowl.

`overlay_ui_01`: translucent rounded comfort-score chip, warm white text, pale yellow progress ring, tiny paw icon, no TikTok UI, no medical scanner styling.

## Frame 01 - Doorway Score Hook

- Purpose: immediate emotional hook; viewers recognize a cautious new dog and a playful score premise.
- Visual description: `dog_01` stands just inside the left-side apartment doorway, looking into `room_01` toward the quiet corner. Body is still, cautious, not distressed.
- Camera: vertical 9:16, 1080x1920 target, low dog-height smartphone still, mild handheld realism, 28-35mm equivalent, slight foreground doorway crop.
- Composition: dog in lower-left third, quiet corner visible in upper-right depth, leave clean top-center overlay space.
- Subtitle/overlay position: top center, inside 80 percent title-safe width: `Day 1: he rated our home 2/10`.
- Pet expression: gentle dark eyes, ears asymmetrical with left half-flopped outward, closed mouth, cautious curiosity.
- Light: warm afternoon natural light from room side, soft shadows, no dramatic rescue lighting.
- Props: muted sage blanket visible in the distant corner; toy and bowl can be subtle but should not dominate.

Prompt:

```text
Vertical 9:16 realistic smartphone video still, low dog-height view inside a modest US apartment living room. Show dog_01 standing cautiously just inside the left-side doorway: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears and head and back saddle, white muzzle with centered white blaze up to the forehead, white chest, white front paws, one tiny tan freckle on the left front paw, small caramel patch around the right eye, dark brown eyes, black nose, right ear mostly upright with folded tip, left ear half-flopped outward, simple matte blue fabric collar with small round silver tag and no logo. The dog looks into the room toward a quiet back-right corner with a muted sage green folded fleece blanket, cream plush bone toy, and pale blue-gray ceramic water bowl. Warm afternoon natural light, light oak floor, warm off-white walls, low neutral couch on right wall, authentic UGC pet-parent mood, calm but unsure body language, no distress. Add playful translucent rounded comfort-score overlay at top center reading "Day 1: he rated our home 2/10", warm white text, pale yellow progress ring, tiny paw icon.
```

Negative prompt:

```text
different dog breed, puppy, large dog, golden retriever, corgi, beagle, husky, doodle, chihuahua, pit bull, shepherd, all-white dog, all-tan dog, black markings, merle, brindle, swapped floppy ear, missing blue collar, missing right-eye caramel patch, missing left-paw tan freckle when paw visible, injured animal, crying animal, shelter cage, clinic, medical device, forced handling, leash pulling, aggressive dog, unsafe clutter, brand logo, product ad, TikTok UI, creator handle, watermark, engagement metrics, diagnostic scanner UI, unreadable text, misspelled overlay, distorted paws, extra legs, cartoon, CGI
```

## Frame 02 - Quiet Corner Setup

- Purpose: show ethical owner action; the owner creates space instead of forcing contact.
- Visual description: `owner_hands_01` places `blanket_01` in the back-right quiet corner while `dog_01` watches from several feet away.
- Camera: vertical 9:16, low angle near floor, slight over-the-blanket perspective.
- Composition: blanket and owner hands in foreground lower third; dog in mid-background, same doorway-to-corner geography; leave top-center overlay space.
- Subtitle/overlay position: top center: `No forcing. Just a quiet corner.`
- Pet expression: curious but cautious, weight slightly back, collar and asymmetrical ears visible.
- Light: warm natural light; soft room shadows.
- Props: blanket foreground, toy and bowl placed nearby but not hero products.

Prompt:

```text
Vertical 9:16 realistic smartphone still, low floor-level view of the same modest apartment living room, same room_01 geography with entry doorway on the left and quiet corner on the back-right. Adult owner_hands_01 in a light neutral long-sleeve sweatshirt gently places a muted sage green washable fleece blanket in the quiet corner, then leaves open space. In the mid-background, show dog_01 watching from a few feet away: small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle, white muzzle with centered blaze, white chest, white front paws with tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Add cream plush bone toy and pale blue-gray ceramic water bowl beside the blanket. Authentic UGC pet-parent routine, calm and non-forceful. Top-center translucent rounded overlay reads "No forcing. Just a quiet corner."
```

Negative prompt:

```text
changed dog identity, different markings, missing blue collar, swapped ear shapes, owner grabbing dog, pulling dog, leash tension, hand holding dog down, scared cowering, crying animal, medical claim, branded product packaging, unsafe cords, hazardous room, overpolished commercial lighting, influencer face, distorted hands, unreadable overlay, TikTok interface, watermark
```

## Frame 03 - First Progress Sniff

- Purpose: show visible behavior change before the viewer scrolls away.
- Visual description: `dog_01` sniffs `toy_01` beside the blanket and bowl; the score rises to 4/10.
- Camera: vertical 9:16, low dog-height medium close shot, slight side angle so face markings and collar remain visible.
- Composition: dog face and toy in center-lower area; bowl and blanket create context; top-center score overlay safe from face.
- Subtitle/overlay position: top center: `Comfort score: 4/10`.
- Pet expression: curious sniffing, relaxed mouth, eyes softer than Frame 01.
- Light: warm afternoon light, slightly brighter on dog face.
- Props: cream plush bone toy with stitched paw mark, pale blue-gray bowl, sage blanket.

Prompt:

```text
Vertical 9:16 realistic smartphone still, low dog-height medium close shot in the same modest apartment living room quiet corner. Show dog_01 sniffing a small cream plush bone toy with one simple stitched paw mark beside the muted sage green fleece blanket and pale blue-gray ceramic water bowl. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze to forehead, white chest, white front paws, one tiny tan freckle on the left front paw, small caramel patch around the right eye, dark brown eyes, black nose, right ear mostly upright with folded tip, left ear half-flopped outward, matte blue fabric collar with small round silver tag. Curious calm posture, no distress, authentic handheld UGC still, warm afternoon natural light, light oak floor and off-white walls. Add top-center translucent rounded score chip reading "Comfort score: 4/10" with warm white text, pale yellow progress ring, tiny paw icon.
```

Negative prompt:

```text
breed drift, size drift, changed coat pattern, black patches, merle, brindle, both ears upright, both ears floppy, no collar, different collar color, aggressive behavior, fear staging, medical device, injury, product hero shot, visible brand labels, cartoon dog, impossible anatomy, extra limbs, heavy motion blur, unreadable text, watermark, diagnostic UI
```

## Frame 04 - He Chose It Himself

- Purpose: micro-payoff; the dog voluntarily steps onto the safe corner blanket.
- Visual description: close-up of `dog_01`'s white left front paw with tiny tan freckle stepping onto the sage blanket; nose and blue collar edge partially visible.
- Camera: vertical 9:16 close-up, shallow depth of field, phone held low and close.
- Composition: paw on lower-center third; blanket texture fills frame; partial nose/neck crop enters from upper side; overlay above action.
- Subtitle/overlay position: top center: `He chose it himself.`
- Pet expression: not full-face, but body language is calm and voluntary.
- Light: warm natural light, soft texture detail on blanket and paw.
- Props: blanket is the main prop; no owner hand touching the dog.

Prompt:

```text
Vertical 9:16 realistic smartphone close-up still, shallow depth of field, low floor-level view in the same quiet apartment corner. Show dog_01 voluntarily stepping onto the muted sage green fleece blanket with the white left front paw clearly visible, including the one tiny tan freckle near the knuckle. Preserve visible identity anchors: small adult terrier-spaniel mix, short-to-medium soft tan-and-white coat, black nose partially entering the upper frame, edge of matte blue fabric collar with small round silver tag partially visible, warm caramel fur at the edge of the muzzle, no human hand touching the dog. Cozy blanket texture, light oak floor, warm afternoon natural light, authentic intimate UGC pet video still. Top-center translucent rounded overlay reads "He chose it himself."
```

Negative prompt:

```text
different paw color, missing left-paw tan freckle, human forcing paw, hand holding paw down, leash pulling, dirty floor, medical cone, sad rescue dramatization, product label, distorted paw pads, extra toes, unreadable text, watermark, cartoon, CGI, diagnostic scanner UI
```

## Frame 05 - 7/10 Wait For It

- Purpose: hold attention before the reveal; the dog is nearly settled.
- Visual description: `dog_01` lies halfway on the blanket, toy near chin, `owner_hands_01` rests on the floor nearby without touching.
- Camera: vertical 9:16, low medium shot, gentle intimate framing.
- Composition: dog centered slightly right; owner hand lower-left as non-invasive context; toy near chin; bowl behind; overlay top center.
- Subtitle/overlay position: top center: `7/10... wait for it`.
- Pet expression: sleepy and soft, head lower, eyes half-lidded.
- Light: transition toward warm evening; side lamp begins to glow.
- Props: blanket slightly rumpled, toy near chin, water bowl visible.

Prompt:

```text
Vertical 9:16 realistic smartphone still, low medium shot in the same modest apartment living room quiet corner. Show dog_01 lying halfway on the muted sage green fleece blanket with the cream plush bone toy near the chin and the pale blue-gray ceramic water bowl nearby. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle, white muzzle with centered blaze to forehead, white chest, white front paws with tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown sleepy eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Adult owner_hands_01 rests calmly on the floor nearby without touching or crowding the dog. Warm evening light beginning, small lamp glow near side table, authentic understated UGC pet-parent mood. Top-center translucent score overlay reads "7/10... wait for it".
```

Negative prompt:

```text
tight hugging, holding dog down, hand on dog body, pet discomfort, changed breed, changed markings, missing right-eye patch, missing collar, different room layout, exaggerated crying, dark sad room, product advertisement layout, logo, distorted face, text covering dog, medical claim, diagnostic UI, TikTok UI, watermark
```

## Frame 06 - 9/10 Home Accepted

- Purpose: emotional release and comment prompt; loopable final image.
- Visual description: `dog_01` sleeps peacefully on the blanket in the quiet corner, toy tucked near chin, bowl nearby, score reveal says home accepted.
- Camera: vertical 9:16, low close-medium smartphone still, stable and loopable.
- Composition: sleeping dog fills lower-middle frame; lamp and couch give room continuity; top-center score, bottom-center question with clear safe area.
- Subtitle/overlay position: top center: `9/10: home accepted`; bottom center: `What would your pet rate your home?`
- Pet expression: sleeping, peaceful, no medical/recovery implication.
- Light: warm lamp light, cozy but not overly stylized.
- Props: sage blanket, cream plush bone toy, pale blue-gray bowl; no product hero setup.

Prompt:

```text
Vertical 9:16 realistic smartphone still, stable low close-medium shot in the same modest US apartment living room quiet corner at warm lamp-light evening. Show dog_01 sleeping peacefully on the muted sage green fleece blanket, cream plush bone toy tucked near the chin, pale blue-gray ceramic water bowl nearby, low neutral couch and small side-table lamp consistent with room_01. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze, white chest, white front paws, one tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown closed sleepy eyes, black nose, right ear mostly upright with folded tip relaxed, left ear half-flopped outward, matte blue fabric collar with small round silver tag visible. Peaceful chosen-rest mood, no distress, no medical scene, authentic cozy UGC pet-parent still. Add top-center translucent rounded score chip reading "9/10: home accepted" and bottom-center title-safe text reading "What would your pet rate your home?", warm white text, pale yellow progress ring, tiny paw icon, no app UI.
```

Negative prompt:

```text
medical recovery scene, injury, unsafe sleeping position, dead-looking pet, overdramatic sadness, changed dog breed, changed coat pattern, both ears same shape, no collar, different room, product ad style, heavy vignette, fake CGI fur, visible logos, TikTok interface, creator handle, watermark, unreadable text, misspelled text, diagnostic scanner UI
```

## Storyboard Sheet Prompt

Use after Frame 01 has been approved and used as a dog reference.

```text
Create a clean vertical-production storyboard sheet showing six 9:16 panels in a 2x3 grid for the TikTok/TK concept "The shelter dog scored our home." Use the approved Frame 01 reference for dog_01 in every panel. Preserve dog_01 exactly: small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze, white chest and front paws, tiny tan freckle on left front paw, small caramel patch around right eye, dark brown eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Preserve room_01: modest US apartment living room, left entry doorway, back-right quiet corner, light oak floor, warm off-white walls, low neutral couch, small side table lamp, muted sage blanket, cream plush bone toy, pale blue-gray water bowl. Panel 1 doorway hook with "Day 1: he rated our home 2/10"; Panel 2 owner places blanket with "No forcing. Just a quiet corner."; Panel 3 dog sniffs toy with "Comfort score: 4/10"; Panel 4 left front paw steps onto blanket with "He chose it himself."; Panel 5 dog lies halfway down with "7/10... wait for it"; Panel 6 dog sleeps peacefully with "9/10: home accepted" and "What would your pet rate your home?" Keep all panels realistic UGC smartphone stills, consistent lighting progression, consistent dog identity, no logos, no TikTok UI, no medical or product claim.
```

Storyboard sheet negative prompt:

```text
dog identity drift between panels, different breed, different size, different coat colors, swapped ear shape, missing collar, missing right-eye patch, missing left-paw freckle where paw visible, room layout drift, prop color drift, inconsistent blanket, shelter cage, clinic, medical scanner, product advertisement, visible brands, TikTok UI, watermark, unreadable captions, misspelled text, distorted anatomy, extra legs, inconsistent panel count
```

## Style Consistency Rules

- Format: every frame is vertical 9:16, intended for 1080x1920 TikTok/TK use.
- Camera: handheld smartphone realism, low dog-height perspective, gentle imperfect framing; no commercial product-shot polish.
- Identity: every prompt must repeat visible `dog_01` anchors rather than saying only "same dog."
- Reference: use approved Frame 01 as the character/image reference for all later frames whenever the tool allows it.
- Environment: maintain the same left-doorway to back-right-corner geography in all frames.
- Lighting arc: warm afternoon natural light in Frames 01-04; warmer lamp light in Frames 05-06.
- Overlay: add final text overlays in editing when possible. If generated in-image, keep them short, title-safe, and away from dog face/paws.
- Safety: no staged distress, no medical/behavioral diagnosis, no forced handling, no guarantee that a product fixes anxiety or trauma.
- Product boundary: props are routine context, not sales hero objects; no visible brand marks or packaging.
- Review gate: reject the entire set if `dog_01` appears to become a different dog in any single frame.

## Acceptance Checklist

- Six frames only, each vertical 9:16.
- Dog appears as the same small tan-and-white terrier-spaniel mix in every visible frame.
- Left half-flopped ear, right folded-tip upright ear, right-eye caramel patch, blue collar, and left-front-paw freckle are preserved whenever visible.
- Room geography stays stable.
- Blanket, toy, bowl, and overlay style remain stable.
- Story reads without implying medical diagnosis, rescue trauma, or product guarantee.
- Text is readable and does not cover the dog's face, eyes, or key paw action.
- No final generated images are marked production-ready until reference-based generation and visual review pass.
