# cg-reviewer verdict: pet_husky_manager_complaint

Date: 2026-05-10 15:36 CST, revised after late upstream file arrival
Issue: ULT-114 / 061f0df4-be3d-4d51-86b3-3fbdebbfcbcb
Reviewer: cg-reviewer

## Verdict

Status: changes requested before production acceptance.

The text identity bible and motion prompt package are usable. The generated contact sheet and six cropped static frames are acceptable only as rough visual identity references, not as production storyboard frames or direct 9:16 reference-frame sets. No final video asset is accepted because no video was generated.

The static imagery keeps the same single husky, red collar/tag, general coat pattern, kitchen corner, bowl, mat, and blue toy across panels. However, it misses production-readiness requirements: the source sheet is a landscape 1536x1024 3x2 contact sheet, the extracted frames are 512x512 square crops, overlay text is absent or placeholder-only, the same sheet exists under two filenames, and important story beats from the final 18-second plan are omitted or compressed.

## Review Inputs

- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/review_inputs/creative_request.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/review_inputs/subject_identity_bible.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/review_inputs/visual_identity_lock_protocol_2026-05-10.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/creative_plan.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/pet_husky_manager_complaint_motion_prompt_pack.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/storyboard-sheet/storyboard_sheet_prompt.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/storyboard-sheet/husky_complaint_contact_sheet.png`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/storyboard-sheet/miso_complaint_storyboard_sheet_v1.png`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/static-frames/miso_complaint_frame_01_v1.png` through `miso_complaint_frame_06_v1.png`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/identity_review.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/asset-manifest.md`

## Persistent Subject Identity Bible

Review locked these persistent subjects from the supplied bible:

- `dog_01` / Miso: one adult medium-large gray-and-white Siberian husky, symmetrical gray mask, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, red fabric collar, small round silver tag, fluffy curled tail when visible.
- `owner_01`: implied owner only; adult hands/legs with neutral gray sleeves; no face, no multiple owners.
- `room_01`: small clean apartment kitchen/living-room corner with light oak floor, off-white wall, white lower cabinet, stainless bowl on gray mat, one blue chew toy, warm evening light, low dog-height camera.
- `overlay_01`: simple translucent informal complaint-ticket/phone-note overlay; no TikTok UI, creator handle, engagement metrics, watermark, medical document, or legal-document realism.

## Accepted Items

- `subject_identity_bible.md`: accepted as the required text-only identity lock.
- `creative_plan.md`: accepted as content logic with the correct demo caveat, comment-first CTA, and no hard product sell.
- `pet_husky_manager_complaint_motion_prompt_pack.md`: accepted as a prompt-only motion package. It repeats Miso's dog and room anchors per shot, includes overlay timing, camera/edit rhythm, negative prompt, audio/SFX plan, production checklist, and states that no final video was generated.
- `storyboard-sheet/husky_complaint_contact_sheet.png`: accepted only as a rough visual identity reference.
- `static-frames/miso_complaint_frame_01_v1.png` through `miso_complaint_frame_06_v1.png`: accepted only as cropped visual-reference stills, not production 9:16 storyboard frames.

## Rejected Or Not Accepted

- `storyboard-sheet/miso_complaint_storyboard_sheet_v1.png`: duplicate of `husky_complaint_contact_sheet.png` by SHA-256. Do not maintain both as separate accepted assets.
- Contact sheet as final production storyboard: not accepted.
- Contact sheet as direct 9:16 frame reference: not accepted.
- Extracted 512x512 static frames as final production storyboard frames: not accepted.
- Final video: not accepted because no video file exists.

## Static Sheet Review

Accepted identity observations:

- Exactly one dog appears in each panel.
- Dog remains an adult husky with gray-and-white coat, recognizable mask/blaze, red collar, and small silver tag.
- Heterochromia is visible in face-forward panels and stays visually consistent as blue on viewer-left and amber on viewer-right.
- Room continuity is stable: light oak floor, off-white wall, white cabinet, stainless bowl, gray mat, blue chew toy, and warm indoor light.
- Owner visibility stays limited to hand/forearm with gray sleeve in the relevant panels.
- No logo, watermark, platform UI, extra dog, clothing, harness, cage, vet clinic, outdoor yard, or obvious anatomy break was found.

Blocking or revision findings:

1. Aspect and crop are wrong for direct production use.
   Both contact-sheet PNGs are 1536x1024 RGB sheets. The extracted static frames are 512x512 crops. This is acceptable for visual preview but not for direct vertical 9:16 video reference frames or final storyboard frames.

2. Overlay text is not production-readable.
   The sheet and cropped frames show blank ticket outlines and panel numbers, but not the requested text such as `Dinner was 3 minutes late.`, `Complaint filed.`, or `Case settled.` Text should be added in edit or regenerated as a labeled storyboard with readable overlays. The panel numbers should not ship in final story frames.

3. Story coverage is incomplete.
   The contact sheet has six panels while the current storyboard prompt requests eight panels and the motion package uses seven shots. It omits the final `Does your pet need a manager too?` CTA shot with Miso lying beside the blue toy and compresses/changes some beats.

4. Paw-stomp/evidence sequencing is muddled.
   Panel 2 combines a lifted paw with a phone/hand element, so the first-three-second behavior proof is less clear than the motion plan requires. A revised sheet should isolate the paw stomp as its own tight beat.

5. Eye-side orientation needs a canonical reference.
   The generated sheet preserves mismatched eyes, but the left/right eye instruction should be locked through an approved first reference frame before motion. If anatomical left/right is strict, do not rely on this sheet without a reference approval pass.

## Motion Prompt Pack Review

Accepted:

- Per-shot prompts repeat Miso's breed, mask, blaze, heterochromia, red collar, tag, and room anchors.
- It explicitly recommends reference image/seed/character reference support and shot-by-shot generation if full-video identity drifts.
- Overlay timing and editor-added overlay guidance are appropriate.
- Negative prompt covers breed drift, same-color eyes, missing collar/tag, extra dogs, platform UI, logos, official legal/medical framing, animal distress, and anatomy defects.
- Production checklist correctly says not to label the concept as viral evidence.

Remaining motion condition:

- The pack is approved as prompt-only. It does not approve any generated video until clips or final export are inspected frame-by-frame against the identity checklist.

## Required Fixes

- Keep one canonical contact sheet filename; remove or mark the duplicate as redundant.
- Produce either vertical 9:16 reference frames for each accepted beat or a revised contact sheet whose panels clearly represent the seven-shot motion plan.
- If cropped static frames are retained, regenerate or recrop them as 9:16 stills without panel-number badges for downstream video use.
- Add readable storyboard labels or explicitly deliver a clean no-text sheet plus separate overlay spec. Do not rely on generated blank ticket shapes.
- Add the missing final CTA beat: Miso lying beside the blue toy, staring at camera, with `Does your pet need a manager too?`.
- Isolate the paw stomp as the second beat so behavior proof is clear before second 3.
- Approve a first Miso reference frame before video generation. Use that reference for all generated clips when the tool supports it.
- Re-review any generated clips/video for breed, mask, blaze, eye colors, red collar, silver tag, subject count, room continuity, overlay readability, and animal-welfare tone.

## Residual Risks

- Heterochromia and the silver tag are small details and may disappear in wide shots.
- Generated text can be misspelled or unreadable; final overlays should be editor-added whenever possible.
- A single 18-second generation remains high-risk for identity drift; shot-by-shot generation with a shared reference is safer.
- The concept remains a process QA demo, not validated viral-performance evidence.
