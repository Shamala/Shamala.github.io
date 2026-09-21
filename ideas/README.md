# Project ideas

A daily drop of five buildable portfolio ideas, written by the `idea-engineer`
agent and reviewed by hand.

## The loop

1. A Routine fires each morning and runs `idea-engineer`, which appends five
   ideas to `ideas/YYYY-MM-DD.md` and commits them.
2. Read them. Change the `Status` of anything worth building from `new` to
   `picked`. Delete or mark `rejected` whatever is not.
3. Run `project-builder` on a picked idea. It scaffolds, builds, verifies,
   deploys to GitHub Pages, and adds the demo card to the portfolio.
4. The idea's status becomes `built`, with its live URL recorded.

## Status values

| Status | Meaning |
| --- | --- |
| `new` | Proposed, not yet reviewed |
| `picked` | Approved to build |
| `built` | Shipped and linked from the portfolio |
| `rejected` | Considered and declined — kept so it is not re-proposed |

Nothing is built without an explicit `picked`. The agent proposes; you decide.
