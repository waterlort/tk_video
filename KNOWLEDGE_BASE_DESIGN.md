# TK video knowledge base design

## Strategic direction

The first account direction is a general traffic account. The near-term goal is audience growth, repeatable attention capture, and follower accumulation. The medium-term goal is to evolve toward TikTok Shop, affiliate, or product-led conversion, with conversion rate becoming a core optimization target after the account proves stable traffic.

This means the knowledge base should not only record "what is hot". It must explain why a topic, format, filming method, script shape, audio choice, and discussion context work together, and when they stop working.

## Adapted classifier / modifier pattern

The existing QCResearcher `classifier` and `modifier` agents provide a useful architecture pattern:

- Classifier owns category boundaries, membership decisions, split/merge proposals, and relation applicability.
- Modifier applies approved long-term-memory changes, maintains indices/backlinks, and records change history.
- A new case should not become a general rule until it has been classified, linked to evidence, and given a confidence level.

For this project, we should create TK-specific versions rather than reuse the QC-specific agents directly:

1. TK Knowledge Classifier
   - Owns the taxonomy of content categories, audience motives, hook types, script structures, filming techniques, edit rhythms, audio/music roles, trend signals, discussion signals, and conversion paths.
   - Decides whether a new viral case is inside an existing category, a boundary case, a new subtype, a counterexample, or noise.
   - Checks relation applicability before allowing a claim such as "this hook works for this category".

2. TK Knowledge Modifier
   - Applies approved knowledge-base updates.
   - Maintains concept pages, relation claims, trend ledger, case library, indices, backlinks, confidence levels, and change history.
   - Deprecates stale claims when trends decay or new evidence contradicts old assumptions.

3. TK Case Librarian
   - Creates evidence records for every important video, trend, experiment, or account observation.
   - Ensures each knowledge claim points back to cases, metrics, source links, dates, and observed outcomes.

4. TK Content Explainer
   - Reads a structured video sample against the current knowledge base.
   - Explains which categories, motives, hooks, filming methods, editing rhythms, audio roles, and discussion signals appear active.
   - Predicts likely hotness before outcome metrics are revealed, then records uncertainty, missing evidence, and candidate knowledge gaps.
   - Does not mutate durable memory directly.

5. TK Viral Judge
   - Owns evaluation of the whole knowledge workflow.
   - Builds blind or held-out video prediction tests from sampled videos.
   - Compares predicted hotness with later or hidden observed outcomes.
   - Diagnoses whether failures came from sample choice, feature extraction, video analysis, knowledge-base gaps, classifier boundaries, stale modifier claims, explainer reasoning, or metric confounds.
   - Protects against overfitting: the goal is to understand most sampled videos well enough, not to perfectly explain every video or memorize known viral examples.

## Knowledge surfaces

Use these long-term memory surfaces:

1. Taxonomy registry
   - Content categories
   - Audience intents and pain points
   - Hook types
   - Script structures
   - Filming methods
   - Editing rhythms
   - Music/audio roles
   - Trend signal types
   - Discussion signal types
   - Conversion paths and product affinity

2. Relation claim registry
   - Category -> audience tension
   - Audience tension -> hook type
   - Hook type + script structure -> expected retention behavior
   - Filming method -> trust / novelty / clarity effect
   - Music/audio role -> emotional frame and pacing
   - Heat + discussion -> priority score
   - Content category -> product/affiliate conversion fit
   - Case evidence -> claim confidence

3. Trend ledger
   - Date observed
   - Region/language
   - Niche/category
   - Source URL
   - Trend type: topic, format, sound, creator behavior, edit style, comment meme, search keyword
   - Heat signal
   - Discussion signal
   - Decay risk
   - Recommended action: test, watch, ignore, adapt, archive

4. Case library
   - Reference viral videos
   - Own account experiments
   - Competitor/account examples
   - Failed tests and counterexamples
   - Conversion examples when available

5. Playbook library
   - Reusable script templates
   - Shot templates
   - Edit templates
   - Caption/keyword templates
   - CTA templates
   - Product-transition templates

6. Change history
   - What changed
   - Why it changed
   - Which cases support it
   - Which claims were deprecated
   - What to test next

7. Prediction ledger
   - Sample set
   - Feature extraction date
   - Hidden outcome fields
   - Explainer prediction
   - Confidence
   - Outcome after unblinding
   - Judge score
   - Failure attribution
   - Process update recommendation

## Core entities

Each analyzed video or experiment should be normalized into these fields:

- Case ID
- Source type: viral reference, competitor, own post, ad, trend sample
- Source URL or local file
- Date collected
- Region/language
- Account/niche
- Content category
- Audience motive
- Viewer tension or curiosity gap
- Hook type
- First 3 seconds
- Script structure
- Filming method
- Shot sequence
- Editing rhythm
- Music/audio role
- On-screen text/caption style
- Comment/discussion signals
- Heat signals
- CTA and conversion path
- Metrics observed
- Repeatable pattern
- Persistent subject identity requirements
- Visual continuity pass/fail
- Risks and policy notes
- Linked knowledge claims
- Confidence level
- Next test idea

## Knowledge claim template

Every durable claim should use this shape:

```text
Claim:
Scope:
Applies when:
Does not apply when:
Supporting cases:
Counterexamples:
Observed metrics:
Confidence:
Last reviewed:
Next validation test:
```

Example:

```text
Claim: In general traffic accounts, "unexpected result first" hooks often outperform explanatory openings for curiosity-led product-adjacent content.
Scope: Short videos under 20 seconds, broad consumer curiosity, low required prior knowledge.
Applies when: The visual result is immediately legible and creates a clear question.
Does not apply when: The product or topic requires trust, credentials, or step-by-step education first.
Supporting cases: case_2026_05_001, case_2026_05_014.
Counterexamples: case_2026_05_021.
Observed metrics: Higher 3-second hold and comments asking "how".
Confidence: medium.
Last reviewed: 2026-05-09.
Next validation test: Produce 3 variants using result-first, problem-first, and story-first hooks.
```

## Update loop

Daily:

- TK Trend Scout collects 10-20 trend signals.
- TK Knowledge Classifier labels them and filters noise.
- Viral Video Analyst creates case records for the strongest examples.
- TK Content Explainer may predict selected samples when outcome metrics are hidden or held out.

Weekly:

- TK Knowledge Modifier updates relation claims and playbooks from accepted cases.
- Growth Analyst compares own post metrics against the knowledge base.
- Niche Strategy Planner chooses next week's test map.
- TK Viral Judge reviews a sampled prediction set and diagnoses workflow failures.

Monthly:

- Deprecate stale trends.
- Split or merge categories.
- Promote repeated winners into playbooks.
- Re-score conversion potential for categories and formats.
- Review prediction calibration and update anti-overfit guardrails.

## Prediction and judge loop

The judge loop tests whether the system is learning real transferable structure.

1. Sample videos from a current source set.
2. Hide outcome metrics where possible: views, likes, shares, comments, saves, follower delta, and post age-adjusted velocity.
3. Let the extraction/analysis agents produce structured video features.
4. Let TK Content Explainer read those features plus the current knowledge base and predict hotness bucket: likely_hot, maybe_hot, likely_not_hot, or inconclusive.
5. Unblind outcomes after a fixed window or from a held-out dataset.
6. Let TK Viral Judge score the prediction and diagnose failure causes.
7. Route concrete follow-ups to the responsible layer.

Judge scoring should emphasize:

- Directional accuracy across many samples, not perfect accuracy.
- Calibration: high-confidence predictions should be more reliable than low-confidence predictions.
- Recall of likely hot videos without turning every video into "maybe hot".
- Explanation usefulness: whether the predicted reason matches the actual discussion/retention/conversion signal.
- Process value: whether failures produce better taxonomy, better extraction, better case records, or better claims.

Anti-overfit rules:

- Do not train the system to one creator, one category, one format, one sound, or one sample batch.
- Do not let visible engagement metrics leak into blind predictions.
- Compare against simple baselines such as trend heat only, creator size only, or category popularity only.
- Keep failed predictions and weak examples as first-class evidence.
- Change agent skills only after repeated evidence or one high-severity process failure.

## Priority scoring

Each content idea should be scored before production:

- Heat: current platform momentum.
- Discussion: comment depth, controversy, question volume, remixability.
- Fit: alignment with account direction and future products.
- Production effort: time, assets, filming difficulty.
- Repeatability: can become a series or template.
- Conversion potential: ability to later point to product, shop, affiliate, email, DM, or service.
- Risk: copyright, misinformation, claims, platform safety.

## First implementation issues

1. Create TK knowledge taxonomy v0.
2. Create case record template and first 20 reference-video slots.
3. Create relation claim template and trend ledger template.
4. Adapt classifier/modifier instructions into TK-specific agents.
5. Adapt explainer/judge instructions into TK-specific agents.
6. Ingest 20 reference cases and produce the first 5 relation claims.
7. Build a 30-video prediction test set and score explainer predictions.
8. Use accepted claims and judge findings to generate the first 30 video ideas for a general traffic account.
