# Subject Identity Bible

## Status

- Project: `pet_rescue_score_reveal`
- Issue: `ULT-100`
- Owner: `cg-static-image`
- Status: required identity lock for all future static storyboard, storyboard sheet, and video prompts.
- Output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_rescue_score_reveal`
- Source guardrail: `knowledge_base/playbooks/visual_identity_lock_protocol_2026-05-10.md`

The existing generated storyboard frames are rejected for production use because the dog does not remain visually consistent. This file defines the locked subjects that must be repeated in every frame prompt before any further generation.

## Reference Policy

- Current approved reference image: none.
- Rejected image set: `static-frames/generated_frame_01.png` through `static-frames/generated_frame_07.png` and the current contact sheets. These may be used only as rejected-context examples, not as identity references.
- Required production workflow:
  1. Generate Frame 01 using the `dog_01` anchors below.
  2. Human/reviewer approves Frame 01 only if `dog_01` matches every required trait.
  3. Use the approved Frame 01 as image/character/reference input for Frames 02-06 and the storyboard sheet.
  4. Reject and regenerate any frame where the dog changes breed, size, markings, ear shape, eye color, collar, or unique identifiers.
- If a generation tool cannot use image references, character references, fixed seed controls, or frame references, outputs should be treated as prompt previews only, not production-ready visual evidence.

## Persistent Subjects

### `dog_01`

- Role: protagonist; newly adopted dog whose comfort score rises as he chooses a safe corner.
- Reference source: text-only identity spec until Frame 01 is approved.
- Species and apparent breed/mix: domestic dog, small adult terrier-spaniel mix.
- Size: about 22-25 lb, 13-15 inches at the shoulder; small enough to curl on a folded blanket but not toy-sized.
- Body type: compact, slightly long body, slim legs, medium-length tail with a white tip.
- Coat length and texture: short-to-medium soft coat, natural fur texture, no fluffy doodle coat, no shaved coat.
- Exact coat color distribution:
  - Warm caramel tan covers both ears, top of head, back saddle, and upper tail.
  - White muzzle with a centered white blaze running from nose bridge to forehead.
  - White chest and belly.
  - White front paws; the left front paw has one tiny tan freckle near the knuckle.
  - White tail tip.
  - Small caramel patch around the dog's right eye; left eye sits inside the white blaze area.
- Ear shape: right ear mostly upright with a folded tip; left ear half-flopped outward.
- Eyes: dark brown, gentle, almond-shaped.
- Nose and mouth: black nose, closed relaxed mouth except slight sniffing in exploration frames.
- Collar/accessory: simple matte blue fabric collar with a small round silver tag, no logo, visible whenever the neck is visible.
- Unique visible identifiers:
  - One half-flopped left ear plus folded-tip right ear.
  - Small caramel patch around right eye.
  - Tiny tan freckle on white left front paw.
  - Matte blue collar with round silver tag.
- Allowed variations: posture, distance from camera, cautious-to-curious-to-sleepy expression, tail position, paw placement, lighting temperature, partial crop in close-ups.
- Forbidden drift:
  - Do not change to a golden retriever, corgi, beagle, husky, doodle, chihuahua, pit bull, shepherd, or puppy.
  - Do not change to long fluffy fur, all-white fur, all-tan fur, black markings, merle markings, brindle markings, or different eye colors.
  - Do not swap which ear flops.
  - Do not remove or recolor the blue collar.
  - Do not remove the right-eye caramel patch or left-front-paw tan freckle when those areas are visible.
  - Do not change scale from small dog to medium/large dog.

### `owner_hands_01`

- Role: secondary human presence; demonstrates calm routine without forcing the dog.
- Reference source: text-only identity spec.
- Must-stay traits: adult hands only, light neutral long-sleeve sweatshirt, no visible face, no jewelry or brand marks, calm open hand posture.
- Allowed variations: placing blanket, resting hand on floor nearby, withdrawing from the dog's space.
- Forbidden drift: grabbing, pulling, hugging tightly, holding the dog's paw down, leash tension, medical handling, full influencer face reveal.

### `room_01`

- Role: recurring home environment and safe corner.
- Reference source: text-only identity spec.
- Layout:
  - Modest US apartment living room.
  - Entry doorway on the left side of the geography.
  - Quiet corner on the back-right side with a washable blanket.
  - Low neutral couch partly visible along the right wall.
  - Small round side table with a warm lamp near the corner.
  - Light oak floor, warm off-white walls, clean but lived-in.
- Lighting: warm afternoon natural light for Frames 01-04, warmer lamp light for Frames 05-06.
- Allowed variations: camera distance, low dog-height angle, mild handheld framing, shallow depth of field.
- Forbidden drift: room swaps, shelter cage, clinic room, outdoor scene, luxury product set, unsafe cords, cluttered hazardous floor, visible logos or brand packaging.

### `blanket_01`

- Role: recurring safe-corner prop.
- Reference source: text-only identity spec.
- Must-stay traits: soft washable fleece blanket, muted sage green, folded into a rectangle, rounded rumpled edges.
- Allowed variations: folded in Frame 02, slightly rumpled as the dog steps and lies down.
- Forbidden drift: changing to a bed, crate mat, bright branded blanket, medical pad, or different color.

### `toy_01`

- Role: small exploration prop.
- Reference source: text-only identity spec.
- Must-stay traits: small plush bone toy, muted cream fabric, one simple stitched paw mark, no brand text.
- Allowed variations: placed beside blanket, near dog's chin in final frames.
- Forbidden drift: squeaky product package, branded toy, food treat, large toy that changes scale.

### `bowl_01`

- Role: quiet-care prop.
- Reference source: text-only identity spec.
- Must-stay traits: small matte ceramic water bowl, pale blue-gray, placed near blanket but never dominating the frame.
- Allowed variations: visible in middle and final frames; partially cropped if composition needs it.
- Forbidden drift: food bowl full of kibble as product focus, plastic branded bowl, medical water dispenser.

### `overlay_ui_01`

- Role: playful comfort score and caption overlay.
- Reference source: text-only identity spec.
- Must-stay traits: translucent rounded score chip, warm white text, pale yellow progress ring, tiny paw icon, no app chrome, no TikTok UI, no handle, no engagement metrics.
- Placement rules: top-center for hook and score updates; bottom-center only for the final question. Keep text inside 80 percent title-safe width and away from the dog's face, eyes, paws, and key action.
- Allowed variations: score values and short text copy.
- Forbidden drift: medical scanner UI, diagnostic meter, fake expert dashboard, product-rating badge, unreadable or misspelled text.
