# tk-trend-research-protocol

Use this skill for current TikTok/TK trend and candidate-video research, especially before generating examples.

## Local search tool

The tk_video project has a lightweight adapter for the local TikTok insights tool:

`/Users/airlort/Documents/tk_video/tools/tiktok_public_search/search_tiktok_public.mjs`

It reuses Playwright from:

`/Users/airlort/Documents/工具`

Command pattern:

```bash
node /Users/airlort/Documents/tk_video/tools/tiktok_public_search/search_tiktok_public.mjs \
  --terms "dogreaction,catreaction,dogmom,catsoftiktok,dogsoftiktok,petparent,puppytiktok,petsoftiktok,petgadgets,doggrooming" \
  --days 45 \
  --max 80 \
  --out-dir "/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/<run_name>"
```

Outputs:

- `pet_public_search_candidates.json`
- `top_links.tsv`

## Research workflow

1. Use official/public trend sources and the local search adapter.
2. Keep raw candidate output under `knowledge_base/tool_runs/`.
3. Convert only useful candidates into trend radar, case packet, or classifier handoff.
4. Separate observed public metadata from interpretation.
5. Mark metrics as public proxies, not true follower gain or conversion.
6. For pet content, explicitly classify the "specialness" mechanism:
   - extreme cuteness,
   - stubborn/sassy behavior,
   - eating/food obsession,
   - surprising reversal,
   - impossible-looking trick,
   - sensory satisfaction,
   - owner/pet identity recognition.
7. Do not generate a new example from broad tag heat alone. Require either inspected cases or a clearly labeled process demo.

## Tool-use protocol

Use the local adapter before pet ideation when current public examples are needed:

```bash
node /Users/airlort/Documents/tk_video/tools/tiktok_public_search/search_tiktok_public.mjs \
  --terms "dogreaction,catreaction,dogmom,catsoftiktok,dogsoftiktok,petparent,puppytiktok,petsoftiktok,petgadgets,doggrooming,dogtantrum,sassydog,hungrydog,dogeating,catzoomies,dogzoomies,petsurprise" \
  --days 60 \
  --max 120 \
  --out-dir "/Users/airlort/Documents/tk_video/knowledge_base/tool_runs/tiktok_public_search/<run_name>"
```

After each run:

- summarize candidate counts by term and by `petShapeLabels`;
- list top candidates by specialness mechanism, not just by score;
- preserve high-score off-topic rows as noise controls;
- never treat `unclear` rows as pet evidence without manual visual inspection;
- create a trend radar or case packet when the run changes the working knowledge.

## Pet specialness gate

Before creating a pet script, storyboard, static image prompt, or video prompt, read:

`/Users/airlort/Documents/tk_video/knowledge_base/playbooks/pet_specialness_gate_2026-05-13.md`

Also read the user-feedback quality axes:

`/Users/airlort/Documents/tk_video/knowledge_base/playbooks/pet_idea_quality_axes_2026-05-13.md`

Required preflight:

- define every persistent subject and visual identity anchor;
- choose exactly one primary specialness mechanism;
- prove the mechanism in the first 2 seconds;
- state the repeatable series premise;
- reject "normal pet plus text overlay";
- reject common twists, weak reversals, unclear object logic, human-like roles without behavior proof, and concepts that require prior account lore;
- separate AI pet-story evidence from real-owner pet evidence.

## Pet-specific search terms

Default terms:

- `dogreaction`
- `catreaction`
- `dogmom`
- `catsoftiktok`
- `dogsoftiktok`
- `petparent`
- `puppytiktok`
- `petsoftiktok`
- `petgadgets`
- `doggrooming`

Add behavior terms when needed:

- `dogtantrum`
- `sassydog`
- `hungrydog`
- `cattreats`
- `dogeating`
- `catzoomies`
- `dogzoomies`
- `petsurprise`

## Quality gates

A pet candidate is more useful when it has at least one visible extreme:

- visually overwhelming cuteness,
- unusually stubborn or dramatic behavior,
- unusually intense eating/food reaction,
- a fast surprise or reversal,
- a trick or timing moment that feels hard to stage,
- a clear recurring character.

Reject or down-rank concepts that are merely "normal pet plus text."

## Handoff format

Every trend handoff should include:

- source/tool run path,
- date and region,
- terms used,
- top candidate links,
- observed signals,
- specialness classification,
- missing visual checks,
- candidate knowledge claims,
- counterexamples/noise,
- next collection or production test.
