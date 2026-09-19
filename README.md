# shamala.github.io

Personal portfolio — a single self-contained `index.html`, no build step.

The **On GitHub** section reads the GitHub API from the browser, so the repo
grid stays current on its own. Configuration lives in the `<script>` block at
the bottom of `index.html`:

| Constant | Purpose |
| --- | --- |
| `GITHUB_USERNAME` | Account the grid reads from |
| `PINNED` | Repo names floated to the front, in order |
| `HIDDEN` | Repo names kept off the page |
| `MAX_REPOS` | How many cards to render |

Forks and archived repos are filtered out; everything not pinned sorts by most
recent push.
