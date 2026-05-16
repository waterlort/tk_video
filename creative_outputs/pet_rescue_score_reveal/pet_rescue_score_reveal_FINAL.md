# Pet rescue score reveal final package

## Status

- Topic: pet / newly adopted dog.
- Concept: `The shelter dog scored our home`.
- Status: generated static storyboard remains rejected as production-ready visual output because the dog identity drifts across frames. A corrected identity-locked prompt package is now available, but no replacement final images are claimed yet.
- Multica agents called:
  - `tk-content-explainer` via ULT-99: content logic, concept prediction, script, risk boundaries.
  - `cg-static-image` via ULT-100: generated static storyboard previews in its run workspace; copied into this output folder.
  - `cg-motion` via ULT-101: video prompt pack, camera/edit/audio specs, music/SFX plan.
- Local output root: `/Users/airlort/Documents/tk_video/creative_outputs/pet_rescue_score_reveal`

## Production erratum

The generated image set should not be used as final storyboard evidence. The dog's appearance drifts across frames, so the visual generation chain failed subject identity consistency.

Required fix before regenerating:

- Define a subject identity bible before image/video generation.
- Lock `dog_01` with exact coat color distribution, markings, ear shape, size, collar, and unique identifier.
- Use an approved first frame or reference image for later frames when the tool supports references.
- Reject any frame where `dog_01` appears to become a different dog.

See `knowledge_base/playbooks/visual_identity_lock_protocol_2026-05-10.md`.

Current corrected prompt artifacts:

- `subject_identity_bible.md`
- `identity_locked_static_storyboard_prompt_pack.md`

Production status after correction: prompt pack ready for reference-gated generation. Replacement images are not production-ready until Frame 01 is approved as a reference and Frames 02-06 pass identity review.

## Knowledge used

- Pet seed playbook: `knowledge_base/playbooks/pet_vertical_seed_2026-05-10.md`
- TK taxonomy: `knowledge_base/taxonomy/TAXONOMY_V0.md`
- Reviewed claims: `knowledge_base/relations/reviewed_claims_2026-05-09.md`
- Prior judge boundary: current evidence is useful for ideation, not prediction proof.

The pet playbook was created because the existing KB only had a weak pet-adjacent trace. It is deliberately marked low-confidence seed knowledge.

## Core viral logic

- Primary content category: `story and identity`.
- Secondary category: `product-adjacent demo` / light `practical utility`.
- Context tag: `scan/score reveal`.
- Audience motive: emotional payoff, curiosity, pet-parent recognition, problem relief.
- Hook: the dog appears to "rate" the home 2/10, then the score rises only when the owner stops forcing interaction.
- Non-blind concept prediction from `tk-content-explainer`: `maybe_hot`, medium confidence.

Why not `likely_hot`: no pet-specific mixed-outcome case library exists yet; no actual footage, retention, comments, saves, shares, creator baseline, or cold controls exist.

## 18-second edit

| Time | Shot | Overlay | Purpose |
| --- | --- | --- | --- |
| 0.0-1.4 | Dog pauses just inside doorway. | `Day 1: he rated our home 2/10` | Immediate emotional hook. |
| 1.4-3.4 | Owner places blanket, then backs away. | `No forcing. Just a quiet corner.` | Safety and trust. |
| 3.4-5.3 | Dog sniffs toy and water bowl. | `Comfort score: 4/10` | Visible progress before scroll-away. |
| 5.3-8.1 | Close-up paw steps onto blanket. | `He chose it himself.` | Micro-payoff. |
| 8.1-12.5 | Dog lies halfway down. | `7/10... wait for it` | Retention bridge. |
| 12.5-16.5 | Dog sleeps in corner. | `9/10: home accepted` | Emotional release. |
| 16.5-18.0 | Hold sleeping frame. | `What would your pet rate your home?` | Comment prompt and loop. |

## Caption and CTA

Caption:

```text
First week with a new dog: comfort is built, not forced. What would your pet rate your home?
```

Pinned comment:

```text
Be honest: would your pet give your home a 10/10?
```

Follow-up CTA after comments show intent:

```text
Comment SAFE if you want the first-week comfort checklist.
```

## Music plan

- Primary music: soft piano or warm acoustic bed, 76-86 BPM.
- Emotional curve: sparse first 3 seconds, gentle pulse during exploration, warm lift after second 8, soft resolve at 9/10.
- SFX: tiny UI beep at 2/10, 4/10, 7/10; soft chime at 9/10.
- Avoid: sad rescue melodrama, medical scanner sounds, loud meme audio, dramatic suffering music.

## Overall video-generation prompt

```text
Create an 18-second vertical 9:16 realistic UGC-style TikTok/TK video about dog_01, a newly adopted small adult 22-25 lb terrier-spaniel mix learning to feel safe in a new home. Use `subject_identity_bible.md` first, generate and approve Frame 01 as the dog_01 reference, then use that approved Frame 01 as the required dog image/character reference for every later shot. Preserve dog_01 across every shot: short-to-medium soft coat; warm caramel tan ears/head/back saddle/upper tail; white muzzle with centered white blaze to forehead; white chest, belly, and front paws; one tiny tan freckle near the knuckle on the left front paw; small caramel patch around the right eye; dark brown eyes; black nose; right ear mostly upright with folded tip; left ear half-flopped outward; simple matte blue fabric collar with small round silver tag and no logo. Use the same modest apartment living room and quiet corner with a muted sage green blanket, cream plush bone toy, and pale blue-gray water bowl.

The story uses a playful translucent "comfort score" overlay. It is not medical, diagnostic, or a product claim. Start with the dog cautiously standing at a doorway and overlay "Day 1: he rated our home 2/10." Show gentle owner actions: placing a blanket in a quiet corner, leaving a toy and water bowl, then giving the dog space. Show visible progress by second 5: the dog sniffs the toy and the score rises to 4/10. Continue with a paw stepping onto the blanket, the dog lying down, then sleeping peacefully. The score rises from 2/10 to 4/10 to 7/10 to 9/10. End with the sleeping dog and text "What would your pet rate your home?"

Camera style: handheld smartphone, low dog-height angles, small natural sway, warm natural light shifting to warm lamp light, soft realistic fur, clean cozy room, no visible brands. Editing style: gentle cuts every 1.4 to 4.4 seconds, no chaotic montage, no hard sell. Audio mood: soft piano or warm acoustic bed, small UI beeps when score changes, gentle chime at final 9/10.
```

Negative prompt:

```text
dog identity drift, different dog breed, size drift, changed coat distribution, missing white blaze, missing right-eye caramel patch, missing left-paw tan freckle when paw visible, swapped ear shapes, missing blue collar, injured pet, sick pet, crying animal, visible suffering, shelter cage, medical diagnosis, medical devices, guaranteed anxiety cure, forced handling, owner grabbing dog, leash pulling, unsafe room, aggressive behavior, horror mood, overly dramatic rescue scene, sad exploitative music video style, product advertisement, brand logos, readable packaging, TikTok UI, creator handle, watermark, engagement metrics, cartoon style, CGI look, distorted anatomy, extra legs, malformed paws, unreadable text, flickering overlay, heavy motion blur, jump cuts, loud chaotic meme edit
```

## Static storyboard

- Current generated storyboard status: rejected for production use due to dog identity drift.
- Corrected static prompt pack: `identity_locked_static_storyboard_prompt_pack.md`
- Subject identity bible: `subject_identity_bible.md`
- Contact sheet: `storyboard-sheet/generated_contact_sheet.png`
- Gallery: `static_storyboard_gallery.md`
- Generated frames: `static-frames/generated_frame_01.png` through `static-frames/generated_frame_07.png`

## Full prompt pack

See `pet_rescue_score_reveal_motion_prompt_pack.md` for:

- per-shot video prompts,
- per-frame image prompts,
- negative prompts,
- camera movement,
- transition rules,
- overlay timing,
- music and SFX timing,
- risk and anti-overfit notes.

## Conversion bridge

First video should optimize for comments/follows, not sales. Later account/product paths:

- first-week pet comfort checklist,
- washable blanket / calming corner setup,
- enrichment toy,
- pet camera POV follow-up,
- odor cleaner / grooming brush only after trust is built.

## Validation plan

Make two variants from the same footage:

- A: emotional score-reveal story.
- B: practical first-week comfort checklist.

Track:

- retention to first score reveal,
- retention to 9/10 reveal,
- comments with pet rating stories,
- tags,
- saves,
- follows,
- product/source questions.

Do not upgrade this to durable pet-viral knowledge until mixed-outcome pet rows and cold/ordinary counterexamples exist.
