# Storyboard logic contract: Mochi doorway baguette

## Purpose

This file fixes the storyboard-logic failure from the first generated storyboard sheet. The prior sheet preserved a recognizable dog and prop, but it did not clearly show the causal sequence or the correct outside-to-inside direction. Panels 1-3 repeated a similar front-facing dog pose instead of showing approach, collision, and reset. The toy also appeared already inside the doorway when it should have started outside with Mochi.

Any future static storyboard, prompt pack, or generated sheet for this concept must follow this contract.

## Core Cause-Effect Sentence

Mochi starts outside in the hallway and wants to bring a long plush baguette into the room; the horizontal toy starts outside with Mochi, hits both sides of the doorframe, Mochi refuses to drop it, backs up, rotates the toy diagonally, squeezes through into the room, and looks back proudly from inside.

## Direction Contract

- Starting side: outside / hallway side.
- Destination side: inside / room side.
- Panel 1 must show Mochi and the entire plush baguette on the outside/hallway side, before the toy enters the room.
- Panel 2 must show the toy blocked at the threshold, with both ends contacting the doorway trim from the outside side.
- Panel 5 must show crossing from hallway into room.
- Panel 6 must show Mochi fully inside the room, looking back toward the doorway/hallway.
- Reject any sheet where the toy begins inside the room or where the action direction flips across panels.

## Required Six-State Grammar

| Panel | State | Required visual evidence | Reject if |
| --- | --- | --- | --- |
| 1 | Approach before contact | Mochi is outside on the hallway side, moving toward the room; the entire plush baguette is still outside, horizontal, and obviously wider than the opening; no collision yet. | Mochi or the toy is already inside the room, or Mochi is already centered in the doorway with no approach motion. |
| 2 | Collision/contact | From the outside side, both plush baguette ends visibly touch or compress against the white doorway trim; Mochi pauses but keeps holding it. | The toy floats in front of the doorway, starts inside the room, or only one side touches. |
| 3 | Failed attempt/reset | Mochi has backed up or shifted paws away from the outside face of the trim; toy remains horizontal and outside; failure is readable. | Panel repeats the same pose as panel 2, or the toy has already entered the room. |
| 4 | Strategy change | Mochi tilts the toy diagonally; toy angle is clearly different from panels 1-3. | Toy is still horizontal or the panel only changes camera angle. |
| 5 | Crossing | Mochi is moving from hallway into room; diagonal toy clears the trim; body and prop visibly cross the doorway into the room. | Mochi is still blocked, already fully finished, or moving the wrong direction. |
| 6 | Aftermath/lookback | Mochi is fully inside the room, toy still in mouth, looking back proudly toward the doorway/hallway. | Mochi remains in the doorway, the toy disappears, or Mochi ends outside. |

## Spatial Continuity

- The same narrow white doorway must stay fixed across all panels.
- The outside/hallway side and inside/room side must be readable and must not swap between panels.
- The sage mat and light oak floor may help orient the viewer, but must not distract.
- The toy must not shrink to make the passage easy.
- The final panel must prove Mochi has entered the room.

## Identity Continuity

Use `subject_identity_bible.md`.

Mochi must remain:

- small adult tan-and-white corgi mix;
- white lightning blaze;
- right ear upright, left ear folded tip;
- aqua collar with brass tag;
- playful and calm, not distressed.

The toy must remain:

- oversized plush baguette;
- pale golden fabric;
- soft rounded ends;
- three darker stitched diagonal crust marks;
- not real bread, not a stick, not a bone.

## Prompting Rule

Any image prompt for a 6-panel sheet must say:

```text
Do not repeat the same front-facing dog pose across panels. Keep a consistent outside-to-inside direction: Mochi and the toy start outside in the hallway and end inside the room. Each panel must show a different action state and a different toy-doorway relationship: outside approach, outside collision, outside reset, diagonal strategy, crossing into room, inside aftermath.
```

## Review Rule

Reject the sheet if:

- the first 2-second proof is unclear;
- panel 1 does not start with Mochi and the whole toy outside/on the hallway side;
- panel 2 does not show both toy ends hitting the doorway;
- panel 3 does not show a real reset/back-up;
- panel 4 does not change toy angle;
- panel 5 does not show threshold crossing from hallway into room;
- panel 6 does not show aftermath inside the room;
- the direction flips or the toy begins already inside;
- dog identity, toy identity, or doorway geography drifts.
