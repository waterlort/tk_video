# Husky Complaint Motion Prompt Pack

## Status

- Issue: `ULT-112`
- Owner: `cg-motion`
- Output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint`
- Integrated package status: production-ready prompt/spec draft for a creative demo and identity-lock process QA.
- Runtime result: no final video generated. Use this file with a video generation or editing tool.
- Target format: vertical 9:16 TikTok/TK video, 1080x1920, 18.0 seconds, 24 or 30 fps.
- Output form: shot-by-shot video prompts plus editor overlay/audio spec. No alpha required for final export.
- Suggested generated clip path: `generated-clips/`
- Suggested final video path: `video/pet_husky_manager_complaint_final.mp4`
- Use boundary: do not call this viral evidence or a proven performance template.

## Reference Assets

- Contact sheet: `storyboard-sheet/husky_complaint_contact_sheet.png`
- Equivalent contact-sheet copy: `storyboard-sheet/miso_complaint_storyboard_sheet_v1.png`
- Cropped storyboard stills: `static-frames/miso_complaint_frame_01_v1.png` through `static-frames/miso_complaint_frame_06_v1.png`
- Static identity review: `identity_review.md`
- Subject bible: `subject_identity_bible.md`

Use the contact sheet or the strongest front-facing Miso frame as a visual reference if the downstream video tool supports image, seed, frame, or character references. If reference support is unavailable, generate shot-by-shot and treat identity drift as a blocking production risk.

## Persistent Identity Anchors

Repeat the relevant anchors in every prompt where the subject is visible.

### `dog_01` / Miso

`Miso, one adult gray-and-white Siberian husky, symmetrical gray mask around both eyes, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, fluffy curled tail when visible.`

Allowed variations: sitting, standing, paw raised, paw stomping, mouth open in husky-talking expression, head tilt, brief eating, lying beside toy, small ear shifts, mild camera angle changes.

Forbidden drift: different dog, extra dog, puppy, different breed, changed mask, missing white blaze, both eyes same color, missing red collar, changed collar, harness, clothes, hat, logo, malformed paws, extra legs, warped face.

### `owner_01`

Adult owner hand or forearm only, neutral gray sweatshirt sleeve, no face, no influencer framing. Owner may point at a phone/clock, point at a scoop, or pour food.

### `room_01`

Same small apartment kitchen corner: light oak floor, off-white wall, white lower cabinet, stainless steel dog bowl on a small gray mat, one blue chew toy near the bowl, warm evening indoor light, low handheld smartphone angle at dog height.

### `overlay_01`

Informal translucent phone-note or complaint-ticket overlay, warm-white background, black text, rounded corners, simple sans-serif, playful stamp/check accent. No TikTok UI, creator handle, engagement metrics, watermark, official legal form, or medical document style.

## 18-Second Structure

| Time | Shot | Visual | Overlay | Purpose |
| --- | --- | --- | --- | --- |
| 0.0-1.3 | 01 | Miso sits beside an empty stainless bowl on the gray mat. | `Dinner was 3 minutes late.` | Immediate pet-owner recognition. |
| 1.3-3.2 | 02 | Tight crop: Miso lifts one front paw and stomps once. | `Complaint filed.` | Behavior proof before scroll-away. |
| 3.2-5.8 | 03 | Miso faces camera and makes a husky talking/howling mouth shape. | `Reason: emotional damages.` | Breed-personality payoff. |
| 5.8-8.3 | 04 | Owner hand in gray sleeve points at phone/clock showing `6:03`, then food scoop. | `It is 6:03.` | Grounds the joke. |
| 8.3-11.6 | 05 | Miso sits dramatically in front of bowl, head tilted. | `Requested compensation: 2 extra treats.` | Commentable escalation. |
| 11.6-15.4 | 06 | Food is poured; Miso pauses one beat, then eats calmly. | `Case settled.` | Resolution. |
| 15.4-18.0 | 07 | Miso lies beside blue toy, still staring at camera. | `Does your pet need a manager too?` | Comment CTA and loop. |

## Per-Shot Video Prompts

Generate separate clips if the tool cannot maintain identity across the full 18 seconds. Reuse the same reference image or character reference for every shot whenever possible.

### Shot 01 - Dinner Late Hook, 0.0-1.3s

```text
Create a 1.3-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, one adult gray-and-white Siberian husky with a symmetrical gray mask around both eyes, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, and fluffy curled tail when visible. Miso sits beside an empty stainless steel dog bowl on a small gray mat in the same small apartment kitchen corner with light oak floor, off-white wall, white lower cabinet, one blue chew toy near the bowl, warm evening indoor light. Low dog-height handheld camera, tiny natural sway, slight push-in. Overlay: "Dinner was 3 minutes late." No intro card, no extra dog, no watermark.
```

### Shot 02 - Paw Stomp, 1.3-3.2s

```text
Create a 1.9-second vertical 9:16 realistic UGC smartphone close-up. One persistent dog only: Miso, the adult gray-and-white Siberian husky with the same symmetrical gray eye mask, narrow white forehead-to-nose blaze, left icy blue eye and right amber-brown eye if face is visible, plain red fabric collar with small round silver tag if collar enters frame, white paws, charcoal-gray-and-white coat. In the same kitchen corner, Miso lifts one front paw and stomps once on the light oak floor beside the gray mat and stainless bowl. Camera is low and tight on paw action with a tiny handheld jolt synced to the stomp. Overlay: "Complaint filed." Small stamp SFX at stomp. Keep paw anatomy realistic, one dog only, no aggressive body language.
```

### Shot 03 - Husky Talking, 3.2-5.8s

```text
Create a 2.6-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, adult gray-and-white Siberian husky with symmetrical gray mask around both eyes, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, and fluffy curled tail when visible. Same kitchen corner: light oak floor, off-white wall, white lower cabinet, stainless bowl on gray mat, blue chew toy nearby, warm evening indoor light. Miso faces the camera and makes a husky talking/howling mouth shape, expressive and comedic but not distressed. Low dog-height medium close-up with a subtle tilt as if the owner is listening. Overlay: "Reason: emotional damages." Preserve eye colors, mask, collar, and tag.
```

### Shot 04 - 6:03 Evidence, 5.8-8.3s

```text
Create a 2.5-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, adult gray-and-white Siberian husky with symmetrical gray eye mask, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, plain red fabric collar, small round silver tag, sitting or watching beside the bowl. Owner appears only as one adult hand/forearm in a neutral gray sweatshirt sleeve, no face. Same kitchen corner with light oak floor, off-white wall, white lower cabinet, stainless bowl on gray mat, blue chew toy near bowl, warm evening indoor light. Owner hand points at a phone or wall clock clearly showing 6:03, then points at a food scoop. Camera pans slightly from the time display to Miso's unimpressed face. Overlay: "It is 6:03." Avoid brand packaging and unreadable time display.
```

### Shot 05 - Compensation Request, 8.3-11.6s

```text
Create a 3.3-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, adult gray-and-white Siberian husky with symmetrical gray mask around both eyes, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, fluffy curled tail if visible. Miso sits dramatically in front of the empty stainless bowl on the gray mat in the same kitchen corner with light oak floor, off-white wall, white lower cabinet, blue chew toy near bowl, warm evening indoor light. Miso tilts his head once and holds a serious manager-like stare at camera. Camera slowly eases closer from low dog height. Overlay: "Requested compensation: 2 extra treats." Keep text title-safe and do not cover the dog's face, collar, or tag.
```

### Shot 06 - Case Settled, 11.6-15.4s

```text
Create a 3.8-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, adult gray-and-white Siberian husky with symmetrical gray eye mask, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, plain red fabric collar, small round silver tag. Owner appears only as an adult hand/forearm in a neutral gray sweatshirt sleeve. Same kitchen corner: light oak floor, off-white wall, white lower cabinet, stainless bowl on a small gray mat, blue chew toy near bowl, warm evening indoor light. Owner pours generic dog food into the bowl without showing packaging. Miso pauses one dignified beat, glances toward camera, then begins eating calmly. Overlay: "Case settled." Tiny ding as the overlay lands. No brand logos, no overeating gag, no aggressive behavior.
```

### Shot 07 - Comment CTA Loop, 15.4-18.0s

```text
Create a 2.6-second vertical 9:16 realistic UGC smartphone clip. One persistent dog only: Miso, adult gray-and-white Siberian husky with symmetrical gray mask around both eyes, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, fluffy curled tail when visible. Same kitchen corner with light oak floor, off-white wall, white lower cabinet, stainless bowl on gray mat, blue chew toy near bowl, warm evening indoor light. Miso lies beside the blue chew toy and stares at the camera with a serious, satisfied manager-like expression. Camera holds steady for a loopable ending with only slight handheld sway. Bottom overlay: "Does your pet need a manager too?" Final frame should loop cleanly back to Shot 01.
```

## Overall Video Prompt

Use this only with a tool that can preserve character identity across multiple shots. Otherwise use the per-shot prompts.

```text
Create an 18-second vertical 9:16 realistic UGC-style TikTok/TK pet comedy video in a small apartment kitchen corner. The protagonist is one persistent dog only: Miso, an adult medium-large gray-and-white Siberian husky with a symmetrical gray mask around both eyes, a narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, upright triangular ears, black nose, plain red fabric collar, small round silver tag, and fluffy curled tail when visible. Preserve this exact dog identity across every shot: same breed, same coat distribution, same facial mask, same mismatched eyes, same red collar and silver tag.

Use the same room in every shot: light oak floor, off-white wall, white lower cabinet, stainless steel dog bowl on a small gray mat, one blue chew toy near the bowl, warm evening indoor light. Camera is handheld smartphone footage at dog height. Owner appears only as an adult hand/forearm in a neutral gray sweatshirt sleeve, no face.

Story: dinner is three minutes late, and Miso acts like he is filing a complaint with management. Start with Miso sitting beside an empty bowl and overlay "Dinner was 3 minutes late." Cut to a close-up paw stomp with overlay "Complaint filed." Show Miso doing a husky talking/howling mouth shape with overlay "Reason: emotional damages." Show the owner hand pointing at a phone or clock showing 6:03 and a food scoop with overlay "It is 6:03." Show Miso sitting dramatically in front of the bowl, head tilted, red collar and silver tag visible, with overlay "Requested compensation: 2 extra treats." Then food is poured, Miso pauses one beat, starts eating with dignity, and overlay reads "Case settled." End with Miso lying beside the blue chew toy, staring at camera, with text "Does your pet need a manager too?"

Tone: dry pet-owner comedy, affectionate, realistic, not cruel, not medical, not an ad. Edit rhythm: fast first 3 seconds, then clean 2-4 second beats. Audio: light deadpan comedy pizzicato or dry marimba at low volume, tiny stamp sound on "Complaint filed," soft paper rustle for complaint-ticket overlays, tiny ding on "Case settled." No TikTok UI, no creator handle, no watermark, no brand packaging.
```

## Negative Prompt

```text
different dog, extra dog, puppy, different breed, malamute, shepherd, wolf hybrid, brown dog, black dog, golden dog, changed coat distribution, changed facial mask, missing narrow white blaze, missing mismatched eyes, both eyes blue, both eyes brown, missing red collar, changed collar color, harness, clothes, hat, bow, logo, brand packaging, product ad, TikTok UI, creator handle, watermark, engagement metrics, official legal document, medical document, vet clinic, cage, outdoor yard, messy room, aggressive handling, distressed animal, cruel feeding gag, forced posing, chaotic barking, distorted paws, extra legs, malformed face, warped eyes, unreadable text, flickering overlay, heavy motion blur, cartoon CGI look, glossy commercial lighting
```

## Overlay Timing

Add overlays in the edit whenever possible. Video-generated text can flicker or misspell.

| Time | Text | Placement | Motion | SFX |
| --- | --- | --- | --- | --- |
| 0.0-1.3 | `Dinner was 3 minutes late.` | Top center | Ticket card fades in over 4 frames. | Soft paper tick optional. |
| 1.3-3.2 | `Complaint filed.` | Upper third | Stamp pop on paw stomp. | Tiny stamp at stomp. |
| 3.2-5.8 | `Reason: emotional damages.` | Top center | Slide in 8 px and settle. | Soft paper rustle. |
| 5.8-8.3 | `It is 6:03.` | Near time display | Evidence label points from time display to scoop. | Small dry click. |
| 8.3-11.6 | `Requested compensation: 2 extra treats.` | Top center | Ticket expands from 96% to 100%. | Form-stamp tick. |
| 11.6-15.4 | `Case settled.` | Top center | Checkmark/stamp lands as food hits bowl. | Tiny ding. |
| 15.4-18.0 | `Does your pet need a manager too?` | Bottom center above UI-safe zone | Fade in at 15.5s and hold. | Music resolves. |

Overlay rules: keep all text high-contrast, title-safe, and away from Miso's face, eyes, collar, tag, paw stomp, bowl, and food pour. Keep the overlay informal; it must not look like a real legal, medical, or platform document.

## Camera And Edit Rhythm

- Shot 01: low dog-height medium shot, tiny handheld sway, slight push-in to Miso and empty bowl.
- Shot 02: tight paw close-up, low angle, tiny jolt synced to stomp.
- Shot 03: low medium close-up on face and mouth, subtle handheld tilt.
- Shot 04: small pan from phone/clock at 6:03 to Miso's unimpressed face, then food scoop.
- Shot 05: slow low push-in as Miso tilts head and holds eye contact.
- Shot 06: low three-quarter bowl shot, hold food pour, then small reframing as Miso starts eating.
- Shot 07: steady low hold beside blue toy, slight handheld sway for a loopable CTA.

Timing beats:

- 0.0s: open directly on Miso and empty bowl.
- 0.3s: hook overlay visible.
- 1.8s: paw stomp lands.
- 3.4s: Miso mouth opens for husky-talking beat.
- 5.9s: 6:03 evidence enters frame.
- 8.5s: head tilt starts.
- 11.8s: food pour begins.
- 12.4s: `Case settled.` lands.
- 15.5s: CTA fades in.
- 17.6-18.0s: hold stable final image for loop.

Use straight cuts. Avoid whip pans, glitch cuts, hard zoom punches, heavy speed ramps, and platform UI transitions.

## Music And SFX Plan

- Music mood: dry, deadpan, affectionate pet-owner comedy.
- Music type: light pizzicato strings, muted marimba, or dry plucked mallets.
- BPM: 90-105.
- Mix: low-volume bed, duck under any husky talking/howling sound.
- 0.0-3.2s: sparse pizzicato ticks for comedic tension.
- 3.2-8.3s: add light marimba pulse under "emotional damages" and 6:03.
- 8.3-11.6s: small held comedic pause during compensation request.
- 11.6-15.4s: warm resolve as food is poured.
- 15.4-18.0s: simple cadence under the comment CTA.
- SFX: tiny stamp at 1.8s, soft paper rustle at 3.3s, dry click at 5.9s, form-paper tick at 8.5s, tiny ding at 12.4s, optional natural bowl-food sound during pour.

Avoid aggressive barking loops, distress sounds, chaotic meme audio, product-ad sound beds, dramatic rescue music, or legal-document sound design that makes the overlay feel official.

## Caption And Comment CTA

Primary caption:

```text
Dinner was 3 minutes late and Miso opened a case. Does your pet do this too?
```

Short caption:

```text
Miso filed a dinner complaint at 6:03.
```

Pinned comment:

```text
What would your pet write in their complaint form?
```

Additional comment prompts:

- `What is your pet's most unreasonable complaint?`
- `Would your dog ask for extra treats or a written apology?`
- `Husky owners, is the paw stomp real in your house too?`

Do not use a product CTA in this first version. First-post CTA should be comments, shares to other husky owners, and recurring-character recall for Miso.

## Identity Consistency Checklist

Blocking checks before accepting any generated video:

- Exactly one dog appears in every dog shot.
- Dog remains an adult Siberian husky, not a puppy or different breed.
- Coat remains gray-and-white with white muzzle, cheeks, chest, inner legs, and paws.
- Facial pattern remains a symmetrical gray mask around both eyes with a narrow white forehead-to-nose blaze.
- Eye colors remain left icy blue and right amber-brown whenever eyes are visible.
- Collar remains plain red fabric with a small round silver tag whenever collar is visible.
- Tail remains fluffy and curled when visible.
- Room remains the same kitchen corner: light oak floor, off-white wall, white lower cabinet, stainless bowl, gray mat, blue chew toy, warm evening light.
- Owner remains hands/forearm only in neutral gray sweatshirt sleeve.
- Overlay remains playful informal complaint-ticket style, not legal, medical, platform UI, or branded.
- Text is readable, correctly spelled, and not covering the dog's face, collar, tag, paw stomp, bowl, or food pour.
- Food pour uses generic food with no visible packaging or brand.
- No distress, forced handling, cruelty, or aggressive behavior is introduced.

If any blocking check fails, reject or regenerate the affected shot before editing.

## Production Checklist

- Use the contact sheet or best Miso close-up as a reference image if supported.
- Generate shots separately if a full 18-second generation changes dog identity.
- Keep clean no-text versions of clips for editor-added overlays and localization.
- Add final overlays in editing whenever possible.
- Validate final export at 1080x1920 for title-safe overlays and visible identity anchors.
- Export 18.0s final at 1080x1920, 24 or 30 fps, H.264 or HEVC, -14 to -16 LUFS integrated audio.
- Run a final identity review before approval. The current `identity_review.md` is only a static contact-sheet review, not final-video approval.
