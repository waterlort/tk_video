# handoff.md

## Node Status

- Status: complete
- Owner: `cg-motion`
- Next owner: `cg-reviewer`

## Completed Work

- Created a production-ready motion/video prompt package for the `pet_husky_manager_complaint` demo.
- Included persistent subject identity bible, static reference frame prompts, 18-second structure, per-shot video prompts, overall video prompt, negative prompt, overlay timing, camera/edit rhythm, music/SFX plan, caption/CTA options, conversion bridge, identity consistency checklist, and production checklist.
- Integrated the cg-motion spec into the local package's canonical motion filename after the contact-sheet package became available.
- Produced motion-specific short-term and long-term memory artifacts under `handoff/` to avoid overwriting the root content-planning memory files now present in the integration package.

## Files

- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/husky_complaint_motion_prompt_pack.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/pet_husky_manager_complaint_motion_prompt_pack.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/handoff/motion_short-term-memory.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/handoff/motion_long-term-memory.md`
- `/Users/airlort/Documents/tk_video/creative_outputs/pet_husky_manager_complaint/handoff.md`

## Validation

- Verified coverage against the issue checklist.
- Verified per-shot prompts repeat the required `dog_01` / Miso identity anchors.
- Verified the copied contact sheet exists at `storyboard-sheet/husky_complaint_contact_sheet.png` and remains only a conditional static identity pass.
- No final video was generated because the runtime did not provide a suitable video generation tool.
- No durable tk_video knowledge base files were modified.

## Outputs For Other Nodes

- cg-reviewer should validate prompt completeness, identity-lock compliance, safety constraints, and downstream usability.
- If generation proceeds, use the contact sheet or best approved Miso frame as a reference image when supported. If unavailable, generate shot-by-shot and reject any clip where Miso's breed, mask, eye colors, collar, tag, or room identity drifts.

## Remaining Risks

- Generated text overlays may be unreliable if produced directly by a video model. Prefer editor-added overlays.
- Without an approved reference frame or character reference, Miso may drift across generated shots. This is a blocking review issue, not a cosmetic issue.
- The source evidence is scout-level and should not be described as a proven viral pattern.

## Requests

- Review the prompt pack before any video-generation attempt.
- If approved, generate or approve a first Miso reference frame before producing final motion clips.
