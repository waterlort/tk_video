# static_image_long-term-memory.md

## Step Summary

- Issue: ULT-113 / 972723ed-cce5-4201-8c14-dc7982b117c9
- Node type: static image generation leaf
- Owner: cg-static-image

## Method Used

- Generated one 6-panel contact sheet with all beats in a single image, then cropped derived per-panel frames.
- This was appropriate because the issue made identity consistency blocking and explicitly preferred a single storyboard contact sheet when independent frames could drift.

## Result Achieved

- Outcome: contact sheet and six derived frames are present under the requested output root.
- Completion status: complete, ready for cg-reviewer.

## Stable Contracts

- Contact sheet path: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/storyboard-sheet/miso_complaint_storyboard_sheet_v1.png`.
- Frame path pattern: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/static-frames/miso_complaint_frame_0N_v1.png`.
- Prompt record: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/source-prompts/static_storyboard_sheet_v1_prompt.md`.
- Manifest: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/asset-manifest.md`.

## Diagnostic Index

- Look first at the contact sheet if identity consistency is disputed.
- Read `static_image_short-term-memory.md` only when needing detailed context about prompt choice, crop process, or validation.

## Parent-Level Signal

- Miso now has a usable static storyboard reference for the husky complaint concept.
- Future motion/video work should use the contact sheet or an approved close-up frame as a reference image when possible; without reference support, identity drift remains a production risk.
