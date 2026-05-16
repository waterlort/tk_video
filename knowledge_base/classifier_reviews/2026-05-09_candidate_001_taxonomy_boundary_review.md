# ULT-93 classifier review: score/scan reveal and clipping economy

## Current Issue Objective

Review taxonomy and relation-boundary issues exposed by `blind_pilot_2026_05_09_candidate_001`, without treating candidate 001 as prediction evidence or durable causal evidence.

## Evidence Read

- Issue `ULT-93`.
- Empty issue comment history.
- Attachments:
  - `blind_pilot_2026-05-09_case_librarian_audit.md`
  - `blind_pilot_2026-05-09_feature_packets.md`
  - `TAXONOMY_V0.md`
  - `reviewed_claims_2026-05-09.md`
- Local memory:
  - `knowledge_base/taxonomy/TAXONOMY_V0.md`
  - `knowledge_base/relations/proposed_claims_2026-05-09.md`
  - `knowledge_base/classifier_reviews/2026-05-09_us_hot_taxonomy_claim_review.md`
  - `knowledge_base/short-term-memory.md`
  - `knowledge_base/long-term-memory.md`

Not used: judge-only sealed manifest, outcome buckets, row-level performance scoring.

## Observations

- Score/scan reveal appears across different viewer promises:
  - `blind_us_2026_05_09_002`, `006`: face or appearance rating plus glow-up/aesthetic reveal.
  - `blind_us_2026_05_09_005`: beauty/skin scan tied to improvement urgency.
  - `blind_us_2026_05_09_008`, `009`: grocery or ingredient scan tied to health/risk avoidance.
- Tool/app UGC appears as embedded use rather than abstract explanation:
  - task obstacle: `001`
  - AI prank-as-demo: `003`, `010`, `015`
  - generated output as entertainment object: `007`
  - routine-embedded learning: `011`
  - scan/score reveal: `002`, `005`, `006`, `008`, `009`
- Clipping economy rows mix several different viewer jobs:
  - actual clips/highlights: `019`, `020`, `021`, `022`, `023`, `024`, `025`, `029`
  - clipping tutorial or strategy: `016`, `018`
  - market/opinion advice: `017`
  - payout proof: `026`
  - marketplace/platform opportunity: `027`
  - mass templated product-distribution boundary case: `028`
  - recruiting hype / aspirational promise: `030`

## Category Assignment

### Score/scan reveal

Decision: classify as a cross-category mechanism tag, not a top-level category and not only a subtype of practical utility or entertainment wrapper.

- Practical utility when the score changes a viewer decision or diagnosis: `005`, `008`, `009`.
- Entertainment wrapper / product-adjacent demo when the score mainly creates curiosity, debate, identity comparison, or visual transformation: `002`, `006`.
- Product-adjacent demo when the app output is the visible proof of the product capability.
- Social proof / proof-based only when the score functions as evidence for a test, result, receipt, or benchmark, which is not the main pattern in candidate 001.

Boundary rule: primary category should be assigned by the viewer promise; `scan/score reveal` should be added as a hook/mechanism label that can attach to multiple categories.

### Clipping economy

Decision: split into subtypes under a `clipping economy` context tag. Do not promote `clipping economy` to a single content category.

- `actual clip/highlight`: viewer consumes the clipped moment itself; category usually entertainment wrapper, reaction/deconstruction, story/identity, or opinion/debate depending on the source moment. Linked IDs: `019`-`025`, `029`.
- `meta clipping tutorial/strategy`: viewer is learning how to clip, earn, or avoid mistakes. Category usually practical utility or opinion/debate. Linked IDs: `016`, `018`; `017` is a boundary case.
- `payout proof`: viewer is evaluating receipt/proof of earning. Category social proof/proof-based, possibly creator-economy utility. Linked ID: `026`.
- `marketplace/platform ad`: viewer is shown a platform/campaign opportunity. Category product-adjacent demo or practical utility if concrete actions are shown. Linked ID: `027`; `026` can be adjacent if platform signup is foregrounded.
- `recruiting hype / aspirational promise`: viewer is sold status, income aspiration, or vague opportunity. Category entertainment wrapper, story/identity, or product-adjacent recruiting depending on proof level. Linked ID: `030`.
- `templated beauty/product distribution`: keep as adjacent/boundary, not automatically clipping economy. Linked ID: `028`.

### Tool/app UGC

Decision: keep `AI/tool workflow demo` but add clearer embedded-demo subtypes. Candidate 001 supports a classifier hypothesis that tool UGC should be coded by the story job the tool performs, not by the tool vertical alone.

- `tool/app task challenge demo`: `001`
- `AI prank-as-demo`: `003`, `010`, `015`
- `AI output transformation`: `007`
- `routine-embedded education/tool demo`: `011`
- `scan/score reveal`: `002`, `005`, `006`, `008`, `009`

## Relation Applicability Notes

Applicable:

- `scan/score reveal` can be related to curiosity-gap hooks when the numerical/visual output is withheld, surprising, or socially debatable.
- It can be related to practical utility when the revealed score implies a concrete action, such as avoid, buy, improve, diagnose, or compare.
- It can be related to product-adjacent demo when app output is visible and legible without a long explanation.
- Tool/app UGC can be proposed as stronger for general traffic when the tool is embedded in a task, prank, routine, transformation, or score reveal and the payoff is understandable in the first few seconds.
- Actual clipping/highlight content should be evaluated as entertainment/source-discovery content, not as evidence for clipping-income tutorials.

Non-applicable:

- Do not infer that score/scan reveal causes better performance or conversion from candidate 001.
- Do not treat all score reveals as practical utility; face rating/glow-up variants may be entertainment or debate.
- Do not treat payout proof, platform ads, and actual highlight clips as one relation family.
- Do not treat AI prank-as-demo as evidence for serious AI workflow education.
- Do not apply the tool-embedded hypothesis to complex B2B tools, abstract tool explainers, high-stakes medical/financial claims, or pranks where harm/trust risk dominates the payoff.
- Do not treat recruiting hype as a healthy affiliate/conversion pattern without proof, comment-quality, and cold counterexamples.

## Taxonomy Impact Proposal

Low-risk label additions for TK Knowledge Modifier:

- Add cross-cutting mechanism tag: `scan/score reveal`.
- Add hook type: `score/scan reveal`.
- Add script structure: `subject/product/problem -> scan/score -> reveal/implication`.
- Add filming method or subtype note: `app overlay / scan overlay`.
- Add subtypes:
  - `tool/app task challenge demo`
  - `AI prank-as-demo`
  - `AI output transformation`
  - `routine-embedded education/tool demo`
  - `actual clip/highlight`
  - `meta clipping tutorial/strategy`
  - `payout proof`
  - `marketplace/platform opportunity`
  - `recruiting hype / aspirational promise`
  - `templated product-distribution creative` as adjacent/boundary, not a clipping subtype by default.

Wait for candidate 002 before adding or upgrading:

- Any performance claim that score/scan reveal outperforms non-score hooks.
- Any conversion claim that scan/score reveal drives app installs, affiliate clicks, product questions, or saves.
- Any claim that tool/app UGC embedded in tasks/pranks/routines outperforms abstract tool explanations.
- Any claim ranking clipping-economy subtypes by reach, trust, payout credibility, conversion, or follower growth.
- Any claim that recruiting hype or payout proof is effective rather than merely attention-grabbing.
- Any claim about mass templated beauty/product distribution.

Split / merge / rename / deprecation:

- Split `clipping economy` as above.
- Do not merge actual clips with clipping tutorials or creator-economy recruiting.
- Do not create a new top-level `score/scan reveal` category.
- Do not create a new top-level `clipping economy` category.
- No existing top-level category should be deprecated.
- Suggested naming: prefer `scan/score reveal` for the mechanism tag because it captures the input action plus output reveal; use `score reveal` as the shorter hook label.

## Candidate Claims For Modifier

### proposed: scan/score reveal as cross-category mechanism

- Claim: `scan/score reveal` is best modeled as a cross-category mechanism/hook tag. The primary content category should be determined by the viewer promise: utility, entertainment, product-adjacent demo, or proof.
- Supporting candidate IDs: `002`, `005`, `006`, `008`, `009`.
- Counterexamples needed: score overlays that do not create curiosity, actionability, comments, saves, or product interest.
- Confidence: medium for taxonomy boundary; low for any performance relation.
- Status: proposed taxonomy update / classifier accepted boundary, not a stable performance claim.
- Next validation test: compare scan/score videos to non-score videos in the same vertical.

### proposed: embedded tool/app demo hypothesis

- Claim: Tool/app UGC is more legible for general traffic when the tool is embedded into a visible task, prank, routine, transformation, or score reveal rather than explained abstractly.
- Supporting candidate IDs: `001`, `002`, `003`, `005`, `006`, `007`, `008`, `009`, `010`, `011`, `015`.
- Applies when: the output is visible, emotionally/socially useful, and understandable without heavy exposition.
- Does not apply when: the video needs complex instruction, regulatory caution, proof of accuracy, or serious buyer evaluation.
- Confidence: low.
- Status: proposed only.
- Next validation test: matched embedded-demo vs abstract-explainer set with cold/ordinary controls.

### proposed_split: clipping economy subtype split

- Claim: Clipping economy should be split by viewer job and conversion promise before relation claims are evaluated.
- Supporting candidate IDs: `016`-`030`.
- Applies when: content concerns clipping, clip distribution, creator marketplaces, payout proof, or recruitment into clipping/platform work.
- Does not apply when: the post is simply a product ad template or creator-distribution creative without clipping mechanics.
- Confidence: medium for split need; low for subtype performance.
- Status: proposed_split.
- Next validation test: collect mixed-outcome rows for each subtype.

## Candidate 002 Sampling Recommendation

Candidate 002 should include cold/ordinary counterexamples before any relation is upgraded.

Minimum needs:

- Score/scan reveal: at least 8 rows, split between entertainment rating, beauty/health scan, and shopping/ingredient scan; include at least 3 verified cold/ordinary examples and same-vertical non-score controls.
- Tool/app UGC: at least 8 rows, including task challenge, prank-as-demo, routine-embedded education, AI output transformation, and abstract explainer controls; include at least 3 cold/ordinary examples.
- Clipping economy: at least 12 rows, with actual clips/highlights, meta tutorials, payout proof, marketplace/platform ads, recruiting hype, and adjacent templated product-distribution creative; include at least one cold/ordinary example per subtype where possible.

Required fields before relation review:

- exact first 3 seconds
- caption/on-screen text
- raw comments or discussion-signal sample
- direct CTA
- current views/likes/comments/shares/saves where possible
- follower baseline or substitute
- independent source paths
- cold/ordinary/medium examples, not only winner-page rows

## General Traffic vs Future Affiliate/Conversion

- General traffic fit is strongest where the mechanism creates fast curiosity, social debate, prank payoff, identity comparison, or entertainment consumption.
- Future affiliate/conversion fit is stronger for practical utility scans, app overlays with visible value, store/product decision support, credible payout proof, and concrete marketplace walkthroughs.
- Recruiting hype may create attention but is high-risk for trust and should not be treated as a recommended conversion path without proof quality and cold examples.
- Actual clips/highlights may build attention and follower flow but have weak direct affiliate fit unless paired with source discovery, community, or platform conversion.

## Confidence

- Taxonomy boundary confidence: medium.
- Label-addition confidence: medium for structural labels, low for subtype performance.
- Relation/performance confidence: low.
- Candidate 001 evidence status: boundary-exposure evidence only, not durable causal evidence.

