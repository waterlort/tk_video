# long-term-memory.md

## Step Summary

- Issue: ULT-114 / 061f0df4-be3d-4d51-86b3-3fbdebbfcbcb
- Node type: visual asset review
- Owner: cg-reviewer

## Method Used

- Broad approach: verified issue and comment context, downloaded official attachments, enumerated persistent identity subjects, inventoried local outputs, checked upstream issue states, inspected prompt files, opened generated storyboard PNGs, and compared outputs against the identity lock protocol.
- Why it was appropriate: the review gate was identity consistency and production readiness, so both text contracts and visible assets had to be checked.

## Result Achieved

- Outcome: changes requested before production acceptance.
- Completion status: reviewer work complete for the current asset state.
- Accepted: identity bible, content plan, and motion prompt pack as prompt-only.
- Partially accepted: static contact sheet and six extracted static frames as rough visual identity references only.
- Not accepted: duplicate sheet PNG as a separate asset, contact sheet as final production storyboard, extracted 512x512 frames as final storyboard frames, contact sheet/static frames as direct 9:16 frame references, and final video.

## Stable Contracts

- `dog_01` / Miso must stay one adult gray-and-white Siberian husky with symmetrical gray mask, narrow white blaze, left icy-blue eye, right amber-brown eye, red collar, and small round silver tag.
- `room_01` must stay the same clean apartment kitchen/living-room corner with bowl, gray mat, white cabinet, oak floor, blue chew toy, and warm evening light.
- `overlay_01` must remain an informal complaint-ticket/phone-note overlay, not platform UI, watermark, legal document, medical document, or engagement UI.
- Production-ready motion prompts must repeat dog and room anchors in every visible shot or use an approved reference frame/seed/character reference.
- Static visual references must be vertical 9:16 per beat or explicitly labeled as a contact sheet, with readable storyboard labels supplied separately if the image is clean/no-text.

## Diagnostic Index

- Where to look first if this node fails: `review/reviewer_verdict.md`, then the storyboard PNG and `pet_husky_manager_complaint_motion_prompt_pack.md`.
- When to read short-term-memory.md: when reconstructing which late-arriving files were inspected or why the contact sheet was not accepted as production-ready.

## Parent-Level Signal

- What the parent planner or reviewer should remember: Miso identity is mostly stable in the contact sheet, and the motion prompt pack is strong, but production should not proceed until static reference frames/storyboard coverage are revised and a canonical first Miso reference frame is approved.
- What can be ignored going forward: the earlier no-assets state was superseded by late upstream file arrival before the final reviewer comment was posted.
