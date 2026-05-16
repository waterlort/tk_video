# eval_2026_05_13_pet_extreme_kb_gate

## Evaluation Identity

- Evaluation ID: `eval_2026_05_13_pet_extreme_kb_gate`
- Multica issue: `ULT-145` / `0bbe28dd-b40f-4c06-9e76-e6cecd52ef3a`
- Judge: `tk-viral-judge`
- Date: 2026-05-13
- Evaluation type: knowledge-base update gate / generated pet concept preflight audit
- Prediction scoring: not run
- Live platform access: not performed
- Local root used: `/Users/airlort/Documents/tk_video`

## Inputs Audited

- `trends/us_pet_extreme_mechanics_2026-05-13.md`
- `case_library/2026-05-13_us_pet_extreme_case_packet.md`
- `playbooks/pet_specialness_gate_2026-05-13.md`
- `evaluation/eval_2026_05_13_pet_extreme_kb_gate.md`
- `tool_runs/tiktok_public_search/pet_extremes_2026-05-12/pet_public_search_candidates.json`
- `tool_runs/tiktok_public_search/pet_extremes_2026-05-12/top_links.tsv`
- `playbooks/visual_identity_lock_protocol_2026-05-10.md`
- `taxonomy/TAXONOMY_V0.md`
- `change_history/CHANGELOG.md`
- Current root `short-term-memory.md` and `long-term-memory.md`

## Sample Set And Leakage Check

This is not a blind prediction task.

- Sample source: 120 public TikTok/TK discovery/tag candidates collected by the local public search adapter on 2026-05-12T12:50:26Z.
- Known metrics present before analysis: views, likes, comments, shares, collects, proxy score, URLs, and captions.
- Outcome hiding: not applied.
- Prediction lock: not created.
- Valid scoring use: none. Directional accuracy, hot-video recall, false positives, calibration, and explainer-vs-outcome scoring are invalid for this batch.
- Valid current use: scout learning, creative preflight, search-noise controls, manual verification queue design, and classifier inputs.
- Leakage verdict: intentionally metric-exposed scout set. It must not be treated as a held-out sample set or proof that any pet mechanism predicts performance.

The update correctly labels its public metrics as scout proxies and repeatedly blocks durable virality, follower-gain, and conversion claims. That passes the leakage check for its stated use.

## Scorecard

| Dimension | Score | Judge note |
| --- | ---: | --- |
| Evidence separation | 4/5 | Public metrics, interpretation, caveats, AI rows, and off-topic rows are separated. The case packet still needs playback-backed fields before normal case confidence. |
| Search-noise controls | 5/5 | The radar preserves high-score off-topic rows and explicitly rejects broad tag heat as pet evidence. The raw run confirms 47 `unclear` label hits and multiple non-pet high-view rows. |
| AI-vs-real-pet separation | 4/5 | AI pet-story rows are separated and identity-lock risk is named. A formal taxonomy boundary still needs classifier review. |
| Visible first-2-second proof | 4/5 | The playbook makes visible proof a blocking concept gate. The evidence base cannot yet verify first-2-second playback for the scout cases. |
| Identity-lock compatibility | 5/5 | The specialness gate aligns with `visual_identity_lock_protocol_2026-05-10.md` by requiring persistent subject traits, continuity constraints, and no-identity-drift instructions. |
| Anti-overfit protection | 4/5 | The update avoids promoting one viral row into a durable rule and keeps noise/counterexamples. It still lacks mixed-outcome cold controls. |
| Production usefulness | 4/5 | Strong enough to gate the next generated pet concept before prompt/storyboard work. Final generated assets still require identity and visual review. |
| Classifier readiness | 3/5 | Candidate claims are scoped enough for classifier review, but not enough for accepted performance relations. |
| Modifier readiness | 2/5 | Only low-risk structural/process indexing is eligible now. No durable relation/performance claim should be modified from this scout batch. |
| Prediction readiness | 1/5 | Not blind, metric-exposed, no sealed manifest, no outcome window, no prediction lock. |

## Aggregate Verdict

Conditional go for the next generated pet concept gate only.

The update improves the workflow enough to screen the next pet concept before script, storyboard, static image, or motion generation. A pet concept should now be rejected unless it defines a persistent subject, selects exactly one primary specialness mechanism, proves that mechanism visually in the first 2 seconds, has a repeatable series premise, and creates a plausible comment reason.

This is not a go for durable virality claims, explainer accuracy scoring, relation-claim promotion, or final production acceptance. The next generated example may proceed only as a constrained creative test with:

- one fixed pet identity bible;
- one primary mechanism from `extreme_cute`, `stubborn_sassy`, `food_eating`, `surprise_reaction`, or `care_transformation`;
- visible first-2-second behavior proof;
- no `normal pet + text overlay` fallback;
- AI-story evidence kept separate from real-owner pet evidence;
- manual visual review of generated frames/video before accepting the output.

## Case-Level Failure Attribution

| Case or surface | Status | Failure attribution | Judge action |
| --- | --- | --- | --- |
| `case_2026_05_13_petext_001` AI Chihuahua food story | Useful boundary case, not real-pet evidence | classifier risk if merged with real-pet rows; production_chain risk for identity drift | Keep as AI pet-story boundary; do not use for real-owner pet claims. |
| Food/eating cases `002`, `006`, related raw-feeding rows | Useful high-interest scout evidence | sample_quality and safety risk; playback and safety context missing | Keep mechanism, add safety filter, avoid copying raw-feeding shock details. |
| Extreme cute cases `003`, `005` | Useful scout evidence | analyst/case_librarian uncertainty; first seconds not verified | Keep as candidate pattern; manually verify first frames before stronger use. |
| Stubborn/sassy cases `007`, `008` | Strongest repeatable-series candidates | sample_quality limitation; no mixed cold controls | Keep for concept gate; test against ordinary pet-attention controls. |
| Reaction cases `009`, `010` | Useful trigger-payoff scout evidence | extractor limitation; audio/shot timing missing | Keep trigger-to-payoff rule, but require visual/audio inspection before classifier confidence. |
| Grooming/transformation `011` | Useful commerce bridge candidate | case_librarian limitation; before/after not visually verified | Keep transformation-first rule, do not infer product conversion. |
| Noise control `012` and other high-view unclear rows | Correctly isolated | search-noise control, not a failure | Preserve as negative evidence against tag-heat-only reasoning. |
| Pet specialness gate | Strong process artifact | none; needs operational enforcement | Use as required preflight for generated pet concepts. |
| Existing taxonomy/relations | No pet-specialness label group found | classifier/modifier follow-up needed | Classifier should decide label scope before modifier changes taxonomy. |

## Baseline Comparison

No numeric baseline comparison can be run because this batch is not blind and contains known public metrics.

Qualitative baseline audit:

| Baseline | Result |
| --- | --- |
| Broad pet tag heat only | Fails. The raw run contains high-score off-topic or unclear rows under pet terms. |
| Public metric score only | Fails as a creative rule. It would over-rank AI story rows, raw-feeding shock, and non-pet search noise. |
| Pet topic only | Fails. The update correctly says `pet topic` is insufficient without visible specialness. |
| Specialness gate plus search-noise controls | Better workflow baseline. It does not prove performance lift, but it reduces obvious bad generated concepts and leakage-prone reasoning. |

## Anti-Overfit Notes

- Do not convert `visible extreme` into a performance claim until mixed-outcome, manually verified pet cases exist.
- Do not use the 236.2M-view AI pet-story row as evidence for real pet owner accounts.
- Keep cold and ordinary pet rows in the next evidence pass; the current batch is public-search top-heavy.
- Treat `unclear` rows as evidence of search noise unless manual visual inspection confirms pet relevance.
- Do not accept broad pet tags, cute captions, or public proxy score as substitutes for first-2-second behavior proof.
- Identity drift remains a severe production/evaluation bug. A strategically strong pet concept still fails if the generated animal changes breed, markings, age, collar, scale, or subject count across frames.

## What To Keep

- Keep `pet_specialness_gate_2026-05-13.md` as required preflight for pet scripts, storyboards, static prompts, and motion prompts.
- Keep the five mechanism buckets: `extreme_cute`, `stubborn_sassy`, `food_eating`, `surprise_reaction`, and `care_transformation`.
- Keep off-topic and `unclear` high-score rows as search-noise controls.
- Keep AI pet-story rows in a separate evidence bucket.
- Keep food/eating as a candidate mechanism with a safety and brand-fit filter.
- Keep the identity-lock dependency from `visual_identity_lock_protocol_2026-05-10.md`.

## What To Change

- Add a mandatory "first 2 seconds visible proof" field to any future pet concept handoff.
- Add a mandatory fixed-subject identity block to every pet concept before static or motion generation.
- For future case packets, manually inspect 8-12 candidates and record first 3 seconds, shot order, audio role, edit rhythm, and comment quality.
- Include ordinary/cold pet controls, not just high-proxy public winners.
- Ask classifier to review whether `pet_specialness_mechanism` belongs as a cross-cutting taxonomy label group.
- Ask modifier to avoid relation/performance mutation until classifier review and mixed-outcome evidence exist.

## What To Deprecate

- Deprecate any workflow that proposes `normal pet + text overlay` as a sufficient pet concept.
- Deprecate broad tag heat as standalone evidence for pet strategy.
- Deprecate using AI pet-story examples as real-pet account evidence.
- Deprecate any generated pet storyboard or video that lacks a subject identity bible and manual identity review.

Do not deprecate the pet vertical, food/eating mechanisms, or AI pet-story exploration. They remain valid scout areas when correctly separated and reviewed.

## Classifier And Modifier Follow-Up

Classifier follow-up is required.

Classifier should review:

- candidate claims `candidate_claim_pet_extreme_2026_05_13_001` through `005`;
- whether `pet_specialness_mechanism` should become a cross-cutting taxonomy label group;
- whether AI pet-story rows require a distinct subtype or only a source/evidence boundary;
- whether food/eating safety-sensitive rows need a separate risk label.

Modifier follow-up is conditional.

Modifier may index or backlink the specialness gate as a process playbook after classifier acceptance. Modifier should not promote durable relation, performance, conversion, or prediction claims from this scout batch alone.

## Manual Visual Verification Requirement

Manual visual verification is still required.

It is not required to use the playbook as a concept preflight, but it is required before:

- upgrading any case record above scout confidence;
- accepting first-2-second mechanism claims for specific public videos;
- changing taxonomy or relation claims based on these cases;
- using public examples as evidence for a generated prompt pack;
- accepting generated pet frames or video as production-ready.

Minimum next manual check: inspect 8-12 candidates across extreme cute, stubborn/sassy, food/eating, surprise/reaction, grooming/transformation, plus noisy/off-topic controls.

## Next Handoffs By Agent

- TK Case Librarian: manually inspect 8-12 candidates and upgrade only rows with verified first 3 seconds, audio, edit rhythm, comment signal, and pet relevance.
- TK Knowledge Classifier: classify the five candidate pet-extreme claims and decide whether `pet_specialness_mechanism` becomes a taxonomy label group.
- TK Knowledge Modifier: wait for classifier acceptance; only apply structural/process labels or backlinks, not performance relations.
- TK Content Explainer: use the specialness gate before proposing the next pet concept; reject concepts without visible first-2-second proof.
- Static image and motion agents: require a fixed subject identity bible and repeat identity anchors in every visible shot prompt.
- Reviewer/Judge: manually check generated output for identity drift and visible mechanism proof before marking it production-ready.

## short-term-memory.md

See `evaluation/eval_2026_05_13_pet_extreme_kb_gate_ult145_short-term-memory.md`.

## long-term-memory.md

See `evaluation/eval_2026_05_13_pet_extreme_kb_gate_ult145_long-term-memory.md`.
