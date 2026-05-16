# Pet Rescue Score Reveal Motion Prompt Pack

## Status

- Issue: ULT-101
- Owner: cg-motion
- Output path: `/Users/airlort/Documents/tk_video/creative_outputs/pet_rescue_score_reveal`
- Runtime result: no video file generated. This package is an identity-locked prompt, storyboard, edit, overlay, and audio spec for a video generation or editing tool.
- Target format: vertical 9:16 TikTok/TK video, 1080x1920, 18 seconds, 24 or 30 fps.
- Core safety rule: keep the dog calm, do not stage distress, do not imply medical diagnosis or a guaranteed transformation.

## Creative North Star

Working title: "The shelter dog scored our home."

Public-facing wording should avoid unverified rescue claims. Use "new dog" or "Day 1 in our home" unless the footage owner can truthfully say the dog is from a shelter.

The video should feel like a real pet-parent moment: a cautious newly adopted dog explores a quiet corner, then a playful "comfort score" overlay rises as the dog chooses the corner and falls asleep.

## Subject Identity Lock

Use `subject_identity_bible.md` before any static image, storyboard sheet, motion prompt, or video generation. Generate and approve Frame 01 first, then use that approved Frame 01 as the required `dog_01` image/character reference for every later frame and shot.

`dog_01` must remain: small adult 22-25 lb terrier-spaniel mix; short-to-medium soft coat; warm caramel tan ears/head/back saddle/upper tail; white muzzle with centered white blaze to forehead; white chest, belly, and front paws; one tiny tan freckle near the knuckle on the left front paw; small caramel patch around the right eye; dark brown eyes; black nose; right ear mostly upright with folded tip; left ear half-flopped outward; simple matte blue fabric collar with small round silver tag and no logo. Calm body language: cautious at first, then curious, then relaxed. Reject any output where the breed, scale, coat distribution, markings, ear orientation, eye color, collar, or unique identifiers drift.

Use the same home environment:

- Modest US apartment living room, clean but lived-in.
- Warm afternoon natural light at first, warmer lamp light near the end.
- Quiet corner with soft washable blanket, small plush toy, water bowl.
- No logos, readable packaging, unsafe cords, or product hero composition.

## 18-Second Final Structure

| Time | Shot | Visual | Overlay | Edit Purpose |
| --- | --- | --- | --- | --- |
| 0.0-1.4 | 1 | Dog pauses just inside doorway, looking into room. | `Day 1: he rated our home 2/10` | Instant emotional hook and score curiosity. |
| 1.4-3.4 | 2 | Owner places blanket in quiet corner, then backs away. | `No forcing. Just a quiet corner.` | Signals safety and owner restraint. |
| 3.4-5.3 | 3 | Dog sniffs toy and water bowl near blanket. | `Comfort score: 4/10` | Visible behavior change by second 5. |
| 5.3-8.1 | 4 | Close-up: paw steps onto blanket, nose enters frame. | `He chose it himself.` | First micro-payoff. |
| 8.1-12.5 | 5 | Dog lies down halfway on blanket; owner hand rests nearby, not touching. | `7/10... wait for it` | Retention bridge to reveal. |
| 12.5-16.5 | 6 | Dog sleeps in corner, toy beside chin, score UI rises. | `9/10: home accepted` | Emotional release. |
| 16.5-18.0 | 7 | Hold same sleeping frame; gentle score glow. | `What would your pet rate your home?` | Comment prompt and loopable end. |

## Static Storyboard Frame Prompts

Use these prompts for static image generation, storyboard thumbnails, or first-frame controls.

### Frame 01 - Doorway Hook

Prompt:

```text
Vertical 9:16 realistic smartphone video still, low dog-height view inside a modest US apartment living room. Show dog_01 standing cautiously just inside the left-side doorway: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears and head and back saddle, white muzzle with centered white blaze up to the forehead, white chest, white front paws, one tiny tan freckle on the left front paw, small caramel patch around the right eye, dark brown eyes, black nose, right ear mostly upright with folded tip, left ear half-flopped outward, simple matte blue fabric collar with small round silver tag and no logo. The dog looks into the room toward a quiet back-right corner with a muted sage green folded fleece blanket, cream plush bone toy, and pale blue-gray ceramic water bowl. Warm afternoon natural light, light oak floor, warm off-white walls, low neutral couch on right wall, authentic UGC pet-parent mood, calm but unsure body language, no distress. Add playful translucent rounded comfort-score overlay at top center reading "Day 1: he rated our home 2/10", warm white text, pale yellow progress ring, tiny paw icon.
```

Negative prompt:

```text
different dog breed, puppy, large dog, golden retriever, corgi, beagle, husky, doodle, chihuahua, pit bull, shepherd, all-white dog, all-tan dog, black markings, merle, brindle, swapped floppy ear, missing blue collar, missing right-eye caramel patch, missing left-paw tan freckle when paw visible, injured animal, crying animal, shelter cage, medical device, forced handling, owner grabbing dog, aggressive dog, unsafe clutter, brand logo, product ad, watermark, TikTok UI, distorted paws, extra legs, unreadable text, cartoon, CGI
```

### Frame 02 - Safe Corner Setup

Prompt:

```text
Vertical 9:16 realistic smartphone still, low floor-level view of the same modest apartment living room, same room_01 geography with entry doorway on the left and quiet corner on the back-right. Adult owner_hands_01 in a light neutral long-sleeve sweatshirt gently places a muted sage green washable fleece blanket in the quiet corner, then leaves open space. In the mid-background, show dog_01 watching from a few feet away: small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle, white muzzle with centered blaze, white chest, white front paws with tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Add cream plush bone toy and pale blue-gray ceramic water bowl beside the blanket. Authentic UGC pet-parent routine, calm and non-forceful. Top-center translucent rounded overlay reads "No forcing. Just a quiet corner."
```

Negative prompt:

```text
changed dog identity, different markings, missing blue collar, swapped ear shapes, owner grabbing dog, pulling dog, leash tension, forced pet handling, scared cowering, medical claim, branded product packaging, unsafe cords, messy hazardous room, overpolished commercial lighting, distorted hands, unreadable overlay
```

### Frame 03 - First Progress

Prompt:

```text
Vertical 9:16 realistic smartphone still, low dog-height medium close shot in the same modest apartment living room quiet corner. Show dog_01 sniffing a small cream plush bone toy with one simple stitched paw mark beside the muted sage green fleece blanket and pale blue-gray ceramic water bowl. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze to forehead, white chest, white front paws, one tiny tan freckle on the left front paw, small caramel patch around the right eye, dark brown eyes, black nose, right ear mostly upright with folded tip, left ear half-flopped outward, matte blue fabric collar with small round silver tag. Curious calm posture, no distress, authentic handheld UGC still, warm afternoon natural light, light oak floor and off-white walls. Add top-center translucent rounded score chip reading "Comfort score: 4/10" with warm white text, pale yellow progress ring, tiny paw icon.
```

Negative prompt:

```text
breed drift, size drift, changed coat pattern, black patches, merle, brindle, both ears upright, both ears floppy, no collar, different collar color, aggressive behavior, fear staging, medical device, injury, product hero shot, visible brand labels, cartoon dog, impossible anatomy, extra limbs, heavy motion blur, unreadable text, watermark
```

### Frame 04 - Chose It Himself

Prompt:

```text
Vertical 9:16 realistic smartphone close-up still, shallow depth of field, low floor-level view in the same quiet apartment corner. Show dog_01 voluntarily stepping onto the muted sage green fleece blanket with the white left front paw clearly visible, including the one tiny tan freckle near the knuckle. Preserve visible identity anchors: small adult terrier-spaniel mix, short-to-medium soft tan-and-white coat, black nose partially entering the upper frame, edge of matte blue fabric collar with small round silver tag partially visible, warm caramel fur at the edge of the muzzle, no human hand touching the dog. Cozy blanket texture, light oak floor, warm afternoon natural light, authentic intimate UGC pet video still. Top-center translucent rounded overlay reads "He chose it himself."
```

Negative prompt:

```text
different paw color, missing left-paw tan freckle, human forcing paw, hand holding paw down, leash pulling, dirty floor, medical cone, sad rescue dramatization, product label, distorted paw pads, extra toes, unreadable text, watermark
```

### Frame 05 - Wait For It

Prompt:

```text
Vertical 9:16 realistic smartphone still, low medium shot in the same modest apartment living room quiet corner. Show dog_01 lying halfway on the muted sage green fleece blanket with the cream plush bone toy near the chin and the pale blue-gray ceramic water bowl nearby. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle, white muzzle with centered blaze to forehead, white chest, white front paws with tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown sleepy eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Adult owner_hands_01 rests calmly on the floor nearby without touching or crowding the dog. Warm evening light beginning, small lamp glow near side table, authentic understated UGC pet-parent mood. Top-center translucent score overlay reads "7/10... wait for it".
```

Negative prompt:

```text
tight hugging, holding dog down, pet discomfort, changed breed, changed markings, missing right-eye patch, missing collar, different room layout, exaggerated crying, dark sad room, product advertisement layout, logo, distorted face, text covering dog, medical claim
```

### Frame 06 - Home Accepted

Prompt:

```text
Vertical 9:16 realistic smartphone still, stable low close-medium shot in the same modest US apartment living room quiet corner at warm lamp-light evening. Show dog_01 sleeping peacefully on the muted sage green fleece blanket, cream plush bone toy tucked near the chin, pale blue-gray ceramic water bowl nearby, low neutral couch and small side-table lamp consistent with room_01. Preserve exact dog identity: small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze, white chest, white front paws, one tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown closed sleepy eyes, black nose, right ear mostly upright with folded tip relaxed, left ear half-flopped outward, matte blue fabric collar with small round silver tag visible. Peaceful chosen-rest mood, no distress, no medical scene, authentic cozy UGC pet-parent still. Add top-center translucent rounded score chip reading "9/10: home accepted" and bottom-center title-safe text reading "What would your pet rate your home?", warm white text, pale yellow progress ring, tiny paw icon, no app UI.
```

Negative prompt:

```text
medical recovery scene, injury, unsafe sleeping position, dead-looking pet, overdramatic sadness, changed dog breed, changed coat pattern, both ears same shape, no collar, different room, product ad style, heavy vignette, fake CGI fur, visible logos, TikTok interface, watermark, unreadable text
```

## Per-Shot Video Generation Prompts

These can be generated as separate clips and edited together. Use the approved Frame 01 reference for `dog_01` whenever the tool supports image, character, frame, or seed references; if it does not, treat generated clips as prompt previews only.

### Shot 01 - Doorway Hook, 0.0-1.4s

```text
Create a 1.4-second vertical 9:16 realistic UGC smartphone clip using the approved Frame 01 reference for dog_01. Show dog_01 pausing just inside the left-side apartment doorway: small adult 22-25 lb terrier-spaniel mix; short-to-medium soft coat; warm caramel tan ears/head/back saddle; white muzzle with centered blaze to forehead; white chest and white front paws; tiny tan freckle on left front paw when visible; small caramel patch around right eye; dark brown eyes; black nose; right ear mostly upright with folded tip; left ear half-flopped outward; matte blue collar with small round silver tag. Dog body language is calm but unsure, not distressed. Camera is handheld at dog height with tiny natural sway and a slow 3 percent push-in. Add playful translucent text overlay: "Day 1: he rated our home 2/10". Warm afternoon natural light, modest cozy apartment, no logos, no medical or shelter imagery.
```

### Shot 02 - Quiet Corner, 1.4-3.4s

```text
Create a 2.0-second vertical 9:16 realistic UGC smartphone clip using the approved Frame 01 reference for dog_01. Owner_hands_01 place a muted sage green washable fleece blanket in the back-right quiet corner, then move back out of the dog's space. Dog_01 watches from a few feet away and must remain the locked small adult 22-25 lb terrier-spaniel mix with warm caramel tan ears/head/back saddle, white blaze and muzzle, white chest and front paws, tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with round silver tag. Camera stays low and slightly off-center, gentle tilt down to blanket. Overlay: "No forcing. Just a quiet corner." Mood is patient and safe, no grabbing, no leash tension, no product hero shot.
```

### Shot 03 - First Score Rise, 3.4-5.3s

```text
Create a 1.9-second vertical 9:16 realistic UGC smartphone clip using the approved Frame 01 reference for dog_01. Dog_01 steps closer and sniffs a small cream plush bone toy beside the muted sage blanket and pale blue-gray water bowl. Preserve the locked small adult 22-25 lb terrier-spaniel mix, short-to-medium tan-and-white coat, centered white facial blaze, right-eye caramel patch, dark brown eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with silver tag, white front paws with the tiny tan freckle on the left front paw if visible. Tail gives one small curious movement. Camera is handheld, low, with a mild pan following the dog's nose. Add translucent playful score UI that ticks from 2/10 to 4/10 and settles on "Comfort score: 4/10". Include a tiny visual beep pulse on the score. Keep the dog calm and natural.
```

### Shot 04 - Paw Chooses Blanket, 5.3-8.1s

```text
Create a 2.8-second vertical 9:16 realistic UGC smartphone close-up using the approved Frame 01 reference for dog_01. Dog_01's white left front paw steps onto the muted sage green soft blanket, clearly preserving the one tiny tan freckle near the knuckle; the black nose and edge of the matte blue collar with small round silver tag enter frame to sniff the blanket edge; warm caramel muzzle fur is partially visible. Camera is close, low, and steady with shallow depth of field. Overlay: "He chose it himself." Add a soft score-chip glow but keep focus on paw and blanket texture. No human hand touches the dog, no forced movement.
```

### Shot 05 - Nearly Settled, 8.1-12.5s

```text
Create a 4.4-second vertical 9:16 realistic UGC smartphone clip using the approved Frame 01 reference for dog_01. Dog_01 lies halfway on the muted sage green blanket with the cream plush bone toy near its chin and the pale blue-gray water bowl nearby. Preserve the locked small adult 22-25 lb terrier-spaniel mix, warm caramel tan ears/head/back saddle, white muzzle with centered blaze, white chest and front paws, tiny tan freckle on left front paw if visible, right-eye caramel patch, dark brown sleepy eyes, black nose, right ear upright with folded tip, left ear half-flopped outward, matte blue collar with small round silver tag. Owner_hands_01 rests on the floor nearby without touching or crowding the dog. The dog blinks slowly and lowers its head. Camera begins as a medium low angle and slowly eases closer. Overlay: "7/10... wait for it". The score UI rises gently to 7/10 around second 10. Warm evening light, quiet emotional tone, no hard sell.
```

### Shot 06 - Final Reveal, 12.5-18.0s

```text
Create a 5.5-second vertical 9:16 realistic UGC smartphone clip using the approved Frame 01 reference for dog_01. Dog_01 sleeps peacefully on the muted sage green blanket in the same quiet corner, cream plush bone toy near chin, pale blue-gray water bowl nearby. Preserve the locked small adult 22-25 lb terrier-spaniel mix, short-to-medium soft coat, warm caramel tan ears/head/back saddle/upper tail, white muzzle with centered blaze, white chest and front paws, tiny tan freckle on left front paw if visible, small caramel patch around right eye, dark brown closed sleepy eyes, black nose, right ear upright with folded tip relaxed, left ear half-flopped outward, matte blue collar with small round silver tag visible. Warm lamp light replaces afternoon light. Camera makes a very slow push-in, then holds for a loopable ending. Playful translucent score UI rises from 7/10 to 9/10 and displays "9/10: home accepted". At 16.5 seconds, add bottom text: "What would your pet rate your home?" Keep the final frame stable and reusable as the opening frame for a loop.
```

## Overall Video Generation Prompt

```text
Create an 18-second vertical 9:16 realistic UGC-style TikTok/TK video about dog_01, a newly adopted small adult 22-25 lb terrier-spaniel mix learning to feel safe in a new home. Use the approved Frame 01 reference as the required dog_01 image/character reference for every shot. Preserve dog_01 across every shot: short-to-medium soft coat; warm caramel tan ears/head/back saddle/upper tail; white muzzle with centered white blaze to forehead; white chest, belly, and front paws; one tiny tan freckle near the knuckle on the left front paw; small caramel patch around the right eye; dark brown eyes; black nose; right ear mostly upright with folded tip; left ear half-flopped outward; simple matte blue fabric collar with small round silver tag and no logo. Use the same modest apartment living room and quiet corner with a muted sage green blanket, cream plush bone toy, and pale blue-gray water bowl.

The story uses a playful translucent "comfort score" overlay. It is not medical, diagnostic, or a product claim. Start with the dog cautiously standing at a doorway and overlay "Day 1: he rated our home 2/10." Show gentle owner actions: placing a blanket in a quiet corner, leaving a toy and water bowl, then giving the dog space. Show visible progress by second 5: the dog sniffs the toy and the score rises to 4/10. Continue with a paw stepping onto the blanket, the dog lying down, then sleeping peacefully. The score rises from 2/10 to 4/10 to 7/10 to 9/10. End with the sleeping dog and text "What would your pet rate your home?"

Camera style: handheld smartphone, low dog-height angles, small natural sway, warm natural light shifting to warm lamp light, soft realistic fur, clean cozy room, no visible brands. Editing style: gentle cuts every 1.4 to 4.4 seconds, no chaotic montage, no hard sell. Audio mood: soft piano or warm acoustic bed, small UI beeps when score changes, gentle chime at final 9/10.
```

## Overall Negative Prompt

```text
dog identity drift, different dog breed, size drift, changed coat distribution, missing white blaze, missing right-eye caramel patch, missing left-paw tan freckle when paw visible, swapped ear shapes, missing blue collar, injured pet, sick pet, crying animal, visible suffering, shelter cage, medical diagnosis, medical devices, guaranteed anxiety cure, forced handling, owner grabbing dog, leash pulling, unsafe room, aggressive behavior, horror mood, overly dramatic rescue scene, sad exploitative music video style, product advertisement, brand logos, readable packaging, TikTok UI, creator handle, watermark, engagement metrics, cartoon style, CGI look, distorted anatomy, extra legs, malformed paws, unreadable text, flickering overlay, heavy motion blur, jump cuts, loud chaotic meme edit
```

## Camera, Motion, Transition, And Editing Spec

### Camera Motion

- Shot 01: low dog-height frame, tiny handheld sway, subtle push-in to the dog's face.
- Shot 02: low angle, slight tilt down from dog to blanket, then a small pull-back as owner gives space.
- Shot 03: gentle pan following the dog's nose from toy to bowl, score pulse timed to sniff.
- Shot 04: close-up locked on paw, minimal movement, shallow focus on blanket texture.
- Shot 05: slow creep-in as the dog lowers its head, owner hand remains still and non-invasive.
- Shot 06: slow push-in for 3 seconds, then locked final frame for the CTA and loop.

### Transitions

- Use clean straight cuts for authenticity.
- Add one 3-frame score-card pop on score updates only.
- Avoid whip pans, zoom punches, glitch cuts, and dramatic fades.
- Use a soft 4-frame cross-dissolve only between Shot 05 and Shot 06 if generated clips do not match lighting.

### Overlay System

- Style: translucent rounded score chip, soft white text, warm pale yellow progress ring, small heart/paw icon.
- Placement: top center for hook and score updates; bottom center for final question.
- Keep all text inside 80 percent title-safe width and above the lower UI-safe zone.
- Font direction: clean sans-serif, medium weight, high contrast, no decorative script.
- Text should be large enough for muted viewing but never cover the dog's face or paw action.

### Subtitle And Copy Timing

| Time | Text | Notes |
| --- | --- | --- |
| 0.0-1.4 | `Day 1: he rated our home 2/10` | Hook appears immediately, no intro card. |
| 1.4-3.4 | `No forcing. Just a quiet corner.` | Reinforces ethical handling. |
| 3.4-5.3 | `Comfort score: 4/10` | Score tick lands on sniff. |
| 5.3-8.1 | `He chose it himself.` | Holds through paw step. |
| 8.1-12.5 | `7/10... wait for it` | Retention bridge. |
| 12.5-16.5 | `9/10: home accepted` | Emotional reveal. |
| 16.5-18.0 | `What would your pet rate your home?` | Comment prompt and loop. |

### Rhythm Points

- 0.0s: open directly on dog, no title screen.
- 0.4s: score chip appears.
- 3.8s: first small score beep.
- 5.0s: visible sniff or tail movement must land before the viewer can scroll away.
- 8.4s: music lift begins.
- 12.8s: final score rise begins.
- 15.0s: chime resolves with sleeping frame.
- 17.5s: hold final image stable for loop.

## Music And SFX Plan

### Primary Music

- Mood: tender, warm, hopeful, not sad.
- Type: soft piano with light acoustic guitar or felt piano with warm pad.
- BPM: 76-86 BPM.
- Structure:
  - 0.0-3.4s: sparse notes, gentle curiosity.
  - 3.4-8.1s: add soft pulse as the dog explores.
  - 8.1-12.5s: small harmonic lift, no big cinematic swell.
  - 12.5-18.0s: resolve into warm chord, let final CTA breathe.

### SFX

- 0.4s: very soft UI blip when `2/10` appears.
- 3.8s: tiny beep when score changes to `4/10`.
- 8.7s: soft two-note tick when `7/10` appears.
- 13.2s: light ascending score tick from `7/10` to `9/10`.
- 15.0s: gentle chime, low volume, no sparkle overload.
- Room tone should remain subtle and cozy. Avoid barking, whining, or sad ambience.

### Alternative Music Directions

- Practical checklist variant: light acoustic pluck, 90-100 BPM, cleaner beat, more tutorial feel.
- Comedy-lite variant: gentle pizzicato or muted ukulele, 92 BPM, tiny record scratch at `2/10`, then warm lift.
- More emotional variant: felt piano and low cello pad, 68-74 BPM, but avoid "rescue tragedy" cues.

## Caption, CTA, And Comment Bait

Primary caption:

```text
We thought he needed a perfect setup. Turns out he just needed one quiet corner. What would your pet rate your home?
```

Short caption:

```text
Day 1 in our home: comfort score reveal.
```

Comment prompts:

- `What would your pet rate your home?`
- `What got your pet from 2/10 to 9/10?`
- `Team blanket corner or team couch corner?`

Do not use purchase CTA in the first version. First-post CTA should be comments, saves, follows, and story replies.

## Conversion Bridge For Later

Once the account has trust and repeatable pet routines, the same format can become product-adjacent without hard selling:

- Washable blanket: "the corner setup we can actually clean."
- Calming bed: frame as routine comfort, not anxiety treatment.
- Enrichment toy: score rises when dog chooses toy independently.
- Pet camera: "what the comfort score looked like when we left the room."
- Odor cleaner or grooming brush: routine utility variant, not emotional rescue claim.
- Lead magnet: `comment SAFE for the 5-step first-week comfort checklist.`

## Risk Notes

- Do not imply a medical or behavioral diagnosis.
- Do not claim a product treats anxiety, fear, trauma, or behavior.
- Do not say "rescued from a shelter" unless that is true for the specific dog.
- Do not stage fear, crying, cowering, shaking, or confinement.
- Do not physically force the dog onto the blanket.
- Do not use a cage, medical cone, clinic setting, or sadness-heavy music.
- Do not make the score look like an expert assessment. It should feel like a playful owner overlay.

## Anti-Overfit Notes

- This is a creative seed, not proof of performance.
- Test against at least one practical checklist edit using the same footage.
- If retention drops before second 5, open closer on the dog's face and move the first score tick earlier.
- If comments debate the score as fake science, make the overlay more obviously playful in the next version.
- If the emotional version feels too staged, reduce owner presence and use more observational pet behavior.

## Production Checklist

- Generate static frames first to lock dog identity and room layout.
- Use approved Frame 01 as the required `dog_01` reference control for video generation; use Frame 06 only after it has passed identity review.
- Generate per-shot clips separately if full 18-second identity consistency is weak.
- Add final overlays in the edit when possible instead of relying on generated text.
- Keep a clean no-text version of each clip for localization and A/B captions.
- Export final as 1080x1920 H.264 or HEVC, 18 seconds, -14 to -16 LUFS integrated audio for social delivery.
