# 30-video sample set template

Use this file to define a sampled video batch for blind or held-out prediction tests. The explainer must receive only the extracted feature packet, not this full judge/extractor control sheet, unless every outcome and creator-size field has been removed.

## Sample set identity

- Sample set ID: sample_set_YYYY_MM_DD_01
- Date created:
- Region/language:
- Niche/category focus:
- Source pool:
- Collection method: random / stratified / trend-focused / competitor-focused / own-account / mixed
- Sample size target: 30
- Diversity target: at least 10 creators, at least 3 categories or formats, no single trend above 30% of the set unless trend-specific
- Hidden balance target: judge/sample owner may balance hot/medium/cold outcomes in a sealed manifest; explainer must not see balance labels
- Knowledge snapshot:
- Assigned judge:
- Assigned extractor:
- Assigned explainer:

## Outcome hiding rules

Hidden before prediction lock:

- Views, likes, comments, shares, saves, bookmarks, watch/retention metrics, profile visits, follows, clicks, sales, creator follower count, post age-adjusted velocity, visible ranking labels, and any "viral", "low-performing", or similar outcome wording.
- Source URLs or creator handles if opening them exposes visible engagement metrics. Give the explainer a local clip, screenshots with metrics cropped, transcript, or structured feature packet instead.
- Hidden outcome strata used by the sample owner to balance the batch.

Allowed before prediction lock:

- Metric-scrubbed video content, transcript, on-screen text, rough date/context if needed for trend interpretation, region/language, content category guess, visible creative structure, audio description, CTA, production format, and policy-risk notes.
- Creator/account context only when the test explicitly permits a creator-size baseline. Otherwise use `unknown` or anonymized tier with no count.

Unblinding:

- Predictions are locked when the prediction ledger row has timestamp, prediction bucket, confidence, reasons, missing signals, and knowledge snapshot.
- Primary outcome window should be fixed before prediction. Default: T+7 days from posting for new posts, or a held-out archived outcome snapshot revealed only after lock.
- Optional early window: T+72h. Optional final window: T+14d. Do not change the primary window after seeing outcomes.
- Outcome buckets must be assigned relative to comparable account size, post age, category/niche, source pool, and region/language.

## Outcome bucket thresholds

Set concrete thresholds for this sample before unblinding:

- `hot`:
- `medium`:
- `cold`:
- `unknown`:

Example threshold rule: `hot` = top 20% of comparable sample or at least 2x comparable median view velocity; `cold` = bottom 20% or below 0.5x comparable median; `medium` = the remainder; `unknown` = missing, deleted, private, boosted, or otherwise not comparable.

## Explainer-visible feature packet checklist

Each sample sent to TK Content Explainer should include:

- Sample ID
- Region/language
- Source type without outcome implication
- Metric-scrubbed video artifact or transcript
- Content category guess
- Audience motive guess
- Viewer tension or curiosity gap
- Hook type and first 3 seconds
- Script structure and shot sequence
- Filming method and editing rhythm
- Music/audio role
- On-screen text/caption style
- CTA and conversion path
- Missing feature notes
- Knowledge snapshot ID

## 30 sample slots

| Sample ID | Judge/source ref | Source type | Date posted | Date collected | Creator/account judge-only | Explainer artifact ref | Category guess | Outcome hidden? | Baseline fields allowed? | Assigned extractor | Assigned explainer | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sample_YYYY_MM_DD_01 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_02 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_03 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_04 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_05 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_06 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_07 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_08 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_09 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_10 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_11 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_12 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_13 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_14 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_15 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_16 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_17 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_18 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_19 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_20 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_21 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_22 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_23 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_24 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_25 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_26 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_27 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_28 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_29 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |
| sample_YYYY_MM_DD_30 |  |  |  |  |  |  |  | yes | no / creator-size / trend-heat / category-prior |  |  |  |

## Sealed outcome manifest pointer

- Judge-only outcome manifest path or attachment:
- Outcome owner:
- Unblind date:
- Access notes:

Do not paste sealed metrics into this file if the file will be shared with the explainer.

## Guardrails

- Avoid samples from only one creator.
- Avoid samples from only one visible trend unless the test is explicitly trend-specific.
- Keep likely winners, ordinary videos, and weak/failed videos in the judge-only balance plan.
- Retain cold and failed samples after scoring; do not delete them to make the knowledge base look cleaner.
- Record missing data as `unknown` instead of guessing.
