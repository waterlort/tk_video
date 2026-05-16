# JUDGE ONLY: candidate 002 manual outcome manifest template

Do not attach this file to TK Content Explainer issues.

## Manifest identity

- Manifest ID: `sealed_manifest_blind_pilot_2026_05_09_candidate_002`
- Source queue: `blind_pilot_2026_05_09_candidate_002_snapshot_queue`
- Status: template only
- Owner: TK Viral Judge / sample owner
- Primary outcome window: must be declared before prediction lock

## Threshold rule

Write the concrete hot/medium/cold thresholds before unblinding. Use comparable account size, post age, format family, and source context when possible.

Default draft buckets:

- `hot`: clearly above comparable rows or creator/account baseline.
- `medium`: ordinary, mixed, or comparable to baseline.
- `cold`: clearly below comparable rows or creator/account baseline.
- `unknown`: deleted, unavailable, boosted, non-comparable, or missing required metrics.

## Judge-only fields

These fields must stay out of explainer packets before prediction lock:

- direct URL
- creator handle
- views
- likes
- comments
- shares
- saves
- follower baseline
- engagement rate
- collection target role
- outcome bucket
- source popularity wording
- screenshots containing visible metrics

## Manual recording field destinations

Each filled sample has two linked records: this judge-only manifest row and a metric-scrubbed feature packet. Unknowns are allowed only when marked explicitly.

| Field | Destination before prediction lock | Required note |
| --- | --- | --- |
| direct URL | judge-only manifest | Never copy into feature packet. |
| creator handle | judge-only manifest | Use a stable internal sample ID in feature packet. |
| visible or decoded post date | judge-only manifest and feature packet if not performance-revealing | Mark decoded dates as decoded/proxy. |
| collection timestamp | judge-only manifest | Needed for outcome snapshot freshness. |
| views / likes / comments / shares / saves | judge-only manifest | Record unknown rather than infer. |
| follower baseline or documented substitute | judge-only manifest | Document substitute source if follower count is unavailable. |
| exact first 3 seconds | feature packet | Remove visible metrics, handles, and winner/source popularity wording. |
| caption/on-screen text | feature packet | Scrub metrics and handles. |
| audio/sound description | feature packet | Do not include popularity ranking. |
| CTA | feature packet | Allowed if it does not reveal outcome. |
| raw comment/discussion sample | judge-only source note; feature packet gets metric-scrubbed themes only | Remove counts, popularity cues, and handles from feature packet. |
| screenshot or archive note | judge-only manifest | Screenshots with metrics stay judge-only. |

## Manifest rows

| Slot | Sample ID | Direct URL | Creator judge-only | Visible/decoded post date | Collection timestamp | Views | Likes | Comments | Shares | Saves | Follower baseline/substitute | Screenshot/archive note | Collection target role | Outcome bucket | Comparable baseline | Completion status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 02 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 03 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 04 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 05 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 06 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 07 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 08 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 09 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 10 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 11 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 12 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 13 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 14 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 15 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 16 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 17 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 18 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 19 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 20 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 21 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 22 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 23 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 24 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 25 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 26 |  |  |  |  |  |  |  |  |  |  |  |  | hot_candidate |  |  | empty |  |
| 27 |  |  |  |  |  |  |  |  |  |  |  |  | ordinary_cold_control |  |  | empty |  |
| 28 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 29 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |
| 30 |  |  |  |  |  |  |  |  |  |  |  |  | open_comparator |  |  | empty |  |

## Evidence completeness formula

For each row, score one point for each completed field:

1. direct URL
2. visible or decoded post date
3. collection timestamp
4. views
5. likes
6. comments
7. shares
8. saves
9. follower baseline or documented substitute
10. exact first three seconds in feature packet
11. caption/on-screen text in feature packet
12. audio/sound description in feature packet
13. CTA or explicit no-CTA note
14. raw comment/discussion sample or explicit unavailable note
15. screenshot/archive note

Row completeness = completed points / 15. Set completeness = average row completeness. Prediction lock requires set completeness >= 0.85 and no required judge-only fields leaked to explainer.
