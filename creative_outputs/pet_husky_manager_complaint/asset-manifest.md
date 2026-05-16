# asset-manifest.md

## Package

- Issue: ULT-113 / 972723ed-cce5-4201-8c14-dc7982b117c9
- Owner: cg-static-image
- Output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint`
- Generation mode: built-in image generation, single contact sheet to reduce independent-frame identity drift.
- Source generated image: `/Users/airlort/multica_workspaces_desktop-api.multica.ai/71476fd4-63f3-431d-bdb9-2488d8270db2/ed690739/codex-home/generated_images/019e10c9-852e-7ce1-ad7c-748eaeeeaf5d/ig_0a444706ff6e82aa016a0034aa42348198baed733cac88d5ea.png`

## Identity Lock

- `dog_01` / Miso: one adult gray-and-white Siberian husky, symmetrical gray mask, narrow white forehead-to-nose blaze, left eye icy blue, right eye amber-brown, plain red fabric collar, small round silver tag.
- `owner_01`: hands only, neutral gray sleeve, no face.
- `room_01`: same clean apartment kitchen corner, oak floor, off-white wall, white lower cabinet, stainless bowl on gray mat, one blue chew toy.
- `overlay_01`: blank/simple complaint-ticket overlay only; no TikTok UI, creator handle, watermark, or official document look.

## Assets

| assetId | category | purpose | target path | size/aspect | alpha | status | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| miso-complaint-storyboard-sheet-v1 | storyboard-sheet | 6-panel static storyboard contact sheet | `storyboard-sheet/miso_complaint_storyboard_sheet_v1.png` | 1536x1024, 3:2 sheet | no | generated, self-check pass | Same dog/contact-sheet approach used to reduce drift. |
| miso-complaint-frame-01-v1 | static-frames | Empty bowl hook frame | `static-frames/miso_complaint_frame_01_v1.png` | 512x512 | no | cropped from sheet, self-check pass | Miso faces camera; heterochromia and red collar/tag visible. |
| miso-complaint-frame-02-v1 | static-frames | Paw-stomp/timer frame | `static-frames/miso_complaint_frame_02_v1.png` | 512x512 | no | cropped from sheet, self-check pass | Owner hand and phone visible; one dog only. |
| miso-complaint-frame-03-v1 | static-frames | Husky complaint howl frame | `static-frames/miso_complaint_frame_03_v1.png` | 512x512 | no | cropped from sheet, self-check pass | Same room and collar; side angle makes one eye dominant. |
| miso-complaint-frame-04-v1 | static-frames | Side-eye beside bowl frame | `static-frames/miso_complaint_frame_04_v1.png` | 512x512 | no | cropped from sheet, self-check pass | Bowl, mat, cabinet, and toy remain stable. |
| miso-complaint-frame-05-v1 | static-frames | Food-pour settlement frame | `static-frames/miso_complaint_frame_05_v1.png` | 512x512 | no | cropped from sheet, self-check pass | Owner hand only; dog identity remains close to sheet. |
| miso-complaint-frame-06-v1 | static-frames | Eating/payoff frame | `static-frames/miso_complaint_frame_06_v1.png` | 512x512 | no | cropped from sheet, self-check pass with note | Head-down pose hides some collar detail, but markings and heterochromia are still readable. |

## Review Gate

- Reject or regenerate if a reviewer sees a breed change, extra dog, lost heterochromia in visible front-facing shots, changed red collar/tag in visible collar shots, changed room geography, watermark, brand logo, or official/legal-document style overlay.
- Text overlays inside the generated image were intentionally kept blank/minimal. Final readable captions should be added in edit for spelling control.
- For video generation, use the contact sheet or the best close-up panel as a reference image if the downstream tool supports references. If not, label identity drift as a production risk.
