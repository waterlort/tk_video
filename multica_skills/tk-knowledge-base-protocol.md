# tk-knowledge-base-protocol

Use this skill for TikTok/TK content knowledge-base work: taxonomy, relation claims, trend ledger, case library, playbooks, confidence levels, stale-claim deprecation, and change history.

## Core principle

Do not turn a viral example into a general rule too early. A durable claim must have:

- clear scope
- evidence cases
- counterexample handling
- confidence level
- last-reviewed date
- next validation test

## Memory surfaces

Primary local memory folder:

`/Users/airlort/Documents/tk_video/knowledge_base`

Surfaces:

- `taxonomy/TAXONOMY_V0.md`
- `case_library/CASE_TEMPLATE.md`
- `relations/CLAIM_TEMPLATE.md`
- `trends/TREND_LEDGER_TEMPLATE.md`
- `change_history/CHANGELOG.md`

## Classifier responsibilities

- Own taxonomy boundaries.
- Decide whether a new case belongs inside an existing content category, is a boundary case, is a new subtype, is a counterexample, or is noise.
- Decide whether a relation claim is applicable to a category before recommending it.
- Propose split, merge, rename, or deprecation actions for taxonomy entries.
- Do not directly mutate long-term memory unless the assigned issue explicitly authorizes that work.

## Modifier responsibilities

- Apply accepted knowledge-base updates atomically across affected surfaces.
- Maintain indices, backlinks, confidence levels, stale-claim notes, and change history.
- Deprecate old claims when trends decay or new evidence contradicts them.
- Do not invent substantive knowledge without case evidence or an accepted proposal.

## Case librarian responsibilities

- Normalize reference videos, competitor posts, own experiments, failed tests, and conversion examples into case records.
- Ensure every case includes source, date, region/language, category, hook, script, filming method, audio/music role, heat signal, discussion signal, metrics, risks, and next test idea.
- Link cases to claims and claims back to cases.

## Output protocol

Every handoff should include:

- current issue objective
- evidence read
- classification or mutation decision
- affected taxonomy entries
- affected relation claims
- linked cases
- confidence
- next validation test
- short-term-memory.md
- long-term-memory.md

