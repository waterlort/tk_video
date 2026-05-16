# Classifier review: US hot sample taxonomy and claims 2026-05-09

## Review identity

- Review ID: `classifier_review_2026_05_09_us_hot_001`
- Multica issue: `ULT-86`
- Reviewer: `tk-knowledge-classifier`
- Evidence:
  - `us_hot_sample_set_2026-05-09.md`
  - `2026-05-09_us_hot_cases_batch_001.md`
  - `proposed_claims_2026-05-09.md`
  - `TAXONOMY_V0.md`
  - `us_trend_ledger_2026-05-09.md`
- Evidence status: retrospective hot sample, outcomes visible, not blind prediction evidence.

## Core boundary decision

Do not promote `cultural moment`, `dance`, or `fashion transition` to top-level content categories from this batch. Treat them as trend/context/subtype tags under existing top-level categories.

Detailed claim evidence exists for the full case records. Sample-only rows can inform trend context but should not carry claim-level weight until converted into full case records.

## Taxonomy updates recommended

Add context tags:

- cultural moment / trend participation
- celebrity-event spectacle
- cultural-event interpretation
- proximity reaction
- trend-performance / dance
- breakout creator
- future product/affiliate fit
- raw event spectacle

Add subtypes:

- cultural-event fashion/art comparison
- proximity reaction
- hyper-specific POV comedy
- AI/tech anxiety skit
- trend-performance dance
- new-dance/comedy-audio novelty
- object-triggered fashion reveal
- store-specific shopping curation
- AI/tool workflow demo
- raw celebrity-event spectacle

Add hook labels:

- hyper-specific POV
- rare access / proximity
- object-triggered reveal
- new dance alert

Add script structures:

- artifact -> reference/proximity -> interpretation/reaction
- POV setup -> enactment -> escalation
- context/store -> item list -> recommendation
- ordinary state -> trigger -> reveal
- claim -> demonstration -> implication

Add filming/audio labels:

- one-creator multi-role skit
- transition cut
- carousel/photo list
- sidewalk/event proximity footage
- ambient/source audio
- minimal support / secondary audio

No merge, rename, or deprecation of existing top-level categories is recommended.

## Claim decisions

### claim_2026_05_09_001

Decision: split before acceptance.

Split into:

- A: cultural-event interpretation/comparison.
- B: rare-access/proximity reaction.

Applicability:

- Applies to general traffic only when the creator adds a distinct angle: comparison, ranking, proximity, personal reaction, or niche expertise.
- Does not apply to institutional celebrity footage or pure reposted event spectacle.

Status: keep proposed until split and validated.

### claim_2026_05_09_002

Decision: provisionally accepted at low-medium confidence.

Scope: entertainment-wrapper skits and POV comedy.

Applicability:

- Applies when the situation is genuinely specific and viewers can tag a person or add variants.
- Does not apply to generic comedy, weak acting, utility content, or raw event clips.

General traffic value: high.
Direct affiliate value: low.

### claim_2026_05_09_003

Decision: keep proposed.

Applicability:

- Applies only to visible, beat-synced fashion/product reveals with identifiable purchasable details.
- Does not apply to unclear transitions or looks where items are not inspectable.

Future affiliate value: high.
Confidence: low until more cases and counterexamples exist.

### claim_2026_05_09_004

Decision: keep proposed.

Applicability:

- Applies to store-specific utility where concrete items answer immediate shopping questions.
- Does not apply to generic wellness advice or recommendations without evidence.

Future product/affiliate fit: strong.
Confidence: low-medium due to one detailed case.

### claim_2026_05_09_005

Decision: keep proposed.

Applicability:

- Applies to tool/workflow demos with a concrete before/after improvement.
- Does not apply to AI comedy skits or abstract hype.

Value: lead-gen/tool affiliate path more than raw entertainment growth.

### claim_2026_05_09_006

Decision: split before acceptance.

Split into:

- A: trend participation + location/identity context.
- B: new-dance/comedy-audio novelty.

Applicability:

- Does not apply to generic copies or official choreography.
- General traffic follower value is medium.
- Product conversion is low unless tied to fashion, fitness, music tutorial, or creator identity.

## Modifier handoff

- Write claim_2026_05_09_002 as accepted/provisional low-medium confidence with counterexamples pending.
- Rewrite claim_2026_05_09_001 and claim_2026_05_09_006 into split proposed claims before acceptance.
- Keep claim_2026_05_09_003, claim_2026_05_09_004, and claim_2026_05_09_005 in proposed status.
- Normalize case category fields to top-level TAXONOMY_V0 labels and preserve current labels as subtype/context tags.

## Next validation test

Build matched positive/negative sets:

- 10 cultural-moment derivative posts
- 10 hyper-specific POV comedy posts
- 10 fashion transitions
- 10 store-specific utility posts
- 10 AI/tool demos
- 20 low-follower dance/trend posts split between breakout and non-breakout copies

Code angle clarity, specificity, item visibility, comment type, save/source requests, and conversion-path fit.

