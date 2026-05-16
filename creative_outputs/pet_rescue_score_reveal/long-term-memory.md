# long-term-memory.md

## Step Summary

- Issue: `ULT-100`
- Owner: `cg-static-image`
- Result: replaced the rejected static storyboard generation path with an identity-locked subject bible and reference-gated static prompt pack.

## Stable Takeaway

- The pet comfort score concept remains usable, but the previous generated static frames are not production-ready visual evidence because the dog identity drifts.
- For this project, subject identity consistency is a blocking review requirement, not a cosmetic note.
- Future static or video generation must first lock `dog_01`, approve a first-frame reference, and reuse that reference for later frames.
- Do not use loose shorthand such as "same dog" or "small tan-and-white dog" as the only identity instruction in multi-shot prompts; repeat the visible `dog_01` anchors in every shot prompt.

## Files Produced Or Updated

- `subject_identity_bible.md`
- `identity_locked_static_storyboard_prompt_pack.md`
- `short-term-memory.md`
- `long-term-memory.md`
- `handoff.md`
- `pet_rescue_score_reveal_FINAL.md`
- `pet_rescue_score_reveal_motion_prompt_pack.md`
- `pet_video_plan_DRAFT.md`
- `static_storyboard_gallery.md`

## Durable Identity Contract

- `dog_01`: small adult 22-25 lb terrier-spaniel mix; warm caramel tan ears/head/back saddle/upper tail; white muzzle with centered blaze, white chest, white front paws; tiny tan freckle on left front paw; small caramel patch around right eye; dark brown eyes; black nose; right ear upright with folded tip; left ear half-flopped outward; matte blue collar with small round silver tag.
- `room_01`: modest US apartment living room with left entry doorway and back-right quiet corner; light oak floor, warm off-white walls, low neutral couch, side-table lamp, muted sage blanket, cream plush bone toy, pale blue-gray water bowl.
- `overlay_ui_01`: playful translucent score chip only; no medical scanner, no diagnostic claim, no TikTok UI.

## Durable Boundary

- Do not use the existing generated frames as approved references.
- Do not claim generated output is production-ready unless the same dog identity passes review across all frames.
- Do not use tools without reference/seed/character controls for final production unless the user explicitly accepts the identity drift risk.
- Do not frame the score as medical, diagnostic, or product-guaranteed.

## Next Best Step

Generate Frame 01 only with the identity-locked prompt, review it against `subject_identity_bible.md`, then use the approved Frame 01 as reference input for Frames 02-06 and the storyboard sheet.
