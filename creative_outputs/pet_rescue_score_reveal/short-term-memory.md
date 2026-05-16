# short-term-memory.md

## Step Identity

- Issue: `ULT-100` / `f3c916b3-dfbe-4944-8673-7fa286dd80bc`
- Node type: static image prompt revision
- Owner: `cg-static-image`
- Time: 2026-05-10 Asia/Shanghai

## Condensed Local Context

- Triggering comment: user review rejected the current generated dog storyboard because the dog did not look like the same dog across frames.
- Required guardrail: future storyboard/image generation must create and follow a subject identity bible.
- Project root now in use: `/Users/airlort/Documents/tk_video`
- Output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_rescue_score_reveal`
- Do not use the old moved project root, do not use the board-game asset path, do not access live TikTok/TK, and do not modify the tk_video knowledge base.

## Inputs Used

- Issue description and triggering comment.
- Existing local creative request and pet vertical seed files under the output root.
- Existing final package and motion prompt pack for context.
- Required playbook: `/Users/airlort/Documents/tk_video/knowledge_base/playbooks/visual_identity_lock_protocol_2026-05-10.md`

## Key Decisions And Rationale

- Treated the existing generated frames as rejected production output, not as reference images.
- Created a text-only identity bible for all persistent subjects before revising prompts.
- Made `dog_01` highly specific with breed/mix, size, coat distribution, markings, ears, eyes, collar, and unique visible identifiers.
- Did not generate or claim new final images because the available image-generation path here does not expose reliable image-reference or character-reference controls.
- Wrote reference-gated prompts that require an approved Frame 01 to be reused as a reference for later frames.

## Work Trace

- Read issue and comments through the `multica` CLI.
- Read the identity-lock playbook and existing output files.
- Added `subject_identity_bible.md`.
- Added `identity_locked_static_storyboard_prompt_pack.md`.
- Updated `handoff.md`, `short-term-memory.md`, and `long-term-memory.md` for the current ULT-100 correction.
- Updated the final package and gallery notes to point to the corrected identity-locked prompt pack and keep the generated frames marked rejected.
- Tightened `pet_rescue_score_reveal_motion_prompt_pack.md` and `pet_rescue_score_reveal_FINAL.md` so motion/video prompts repeat the locked `dog_01` anchors and require approved Frame 01 as a reference.
- Marked `pet_video_plan_DRAFT.md` as superseded for visual generation unless the identity bible/reference workflow is followed.

## Validation Performed

- Confirmed the revised pack contains six vertical 9:16 storyboard frames.
- Confirmed every visible dog prompt repeats relevant identity anchors.
- Confirmed the package includes per-frame visual description, camera, composition, subtitle placement, pet expression, lighting, props, prompt, and negative prompt.
- Confirmed the package includes a storyboard sheet prompt, style consistency rules, and an acceptance checklist.
- Confirmed adjacent motion/final prompt documents no longer depend on vague "same dog" shorthand for future visual generation.
- Confirmed no live TK/TikTok or web access was used.
- Confirmed no tk_video knowledge base file was modified.

## Open Threads

- A production image set still requires a generator that can use Frame 01 as a reference image or character reference.
- Reviewer/human approval of Frame 01 is required before generating Frames 02-06.
- If a tool cannot reference-lock the dog, generated frames should remain prompt previews only.
