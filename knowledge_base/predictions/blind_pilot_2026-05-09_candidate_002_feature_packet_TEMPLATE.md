# Candidate 002 explainer feature packet template

This is the only surface that can be sent to TK Content Explainer after manual collection is complete and leakage checks pass.

## Excluded before prediction lock

Do not include:

- direct URL
- creator handle
- views, likes, comments, shares, saves
- follower baseline
- engagement rate
- collection target role
- outcome bucket
- source popularity wording
- screenshots with visible metrics

## Allowed before prediction lock

Allowed:

- Sample ID
- region/language
- source type
- visible or decoded post date only if not used as a performance proxy
- metric-scrubbed visual observations
- exact first three seconds
- caption and on-screen text with metric text removed
- audio/sound description without popularity ranking
- script structure
- filming method
- editing rhythm
- CTA text if it does not reveal performance
- raw comment themes only if counts and popularity cues are removed
- policy/risk notes
- knowledge snapshot
- missing field notes

## Packet template

```md
## feature_packet_C2_XXX

- Sample ID: `blind_us_2026_05_09_c2_XXX`
- Region/language:
- Source type:
- Visible/decoded post date:
- Knowledge snapshot:

### Observed fields

- First 3 seconds:
- Visual sequence:
- Caption/on-screen text:
- Audio/sound description:
- CTA:
- Comment/discussion themes, metric-scrubbed:
- Policy/risk notes:

### Interpretation fields

- Primary content category:
- Mechanism/context tags:
- Audience motive:
- Viewer tension or curiosity gap:
- Hook type:
- Script structure:
- Filming method:
- Editing rhythm:
- Music/audio role:
- Conversion path:
- Applicable provisional claims:
- Conflicting or missing knowledge:

### Prediction input quality

- Missing fields:
- Leakage check:
- Ready for explainer: yes / no
```

## Batch handoff checklist

Before sending packets to TK Content Explainer:

- Every row in the judge-only manifest has an outcome snapshot.
- Every packet has a matching sample ID.
- No packet contains URL, handle, metrics, follower baseline, outcome bucket, or collection target role.
- The knowledge snapshot is recorded.
- The prediction ledger exists and is ready for lock.
- TK Viral Judge owns the sealed manifest.
