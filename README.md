# Have You Tried Turning It Off?

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ngockhanh973/u-motasimfuad-have-you-tried-turning-it-off-154a938b-v1-local/rank.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ngockhanh973/u-motasimfuad-have-you-tried-turning-it-off-154a938b-v1-local/reward.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

One funny line from a hopeless tech support agent to a desperate
customer, written for the make.fun bounty
[Have You Tried Turning It Off?](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b).

## The joke

The reboot has two halves and only one of them cooperates. The OFF
half did its job perfectly. The ON half, though, has formally gone
away on annual leave, like a colleague who is simply not at their
desk any more. The agent reports this as a staffing problem —
cheerfully, matter-of-factly, as if the power button were a member
of the team. The customer's desperation is felt, never mocked;
the agent's own system is the butt of the joke.

## How it works

`main.ts` holds the single line, checks it against the gate
(1 to 199 characters, not only whitespace), and writes it to
`entry.txt` inside the output directory. No trailing newline
is written, so the file holds exactly the line.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22 or later runs the TypeScript directly. The output lands
in `out/entry.txt`, byte-identical to the `entry.txt` kept at
the root of this repository.

## Files

- `main.ts` — the entry program: validates the line, writes it out.
- `entry.txt` — the exact line, kept at the repo root for checks.
- `LICENSE` — MIT.
