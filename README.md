# shamala.github.io

Personal portfolio — static HTML, CSS and ES modules, no build step.

```
index.html            page content
css/
  tokens.css          colours, fonts, spacing (light + dark)
  base.css            element defaults, .wrap, focus, reduced motion
  layout.css          header bar, hero, section shell, footer
  components.css      buttons, subheads, cards, chips, key/value lists
  sections.css        GitHub (repos, demos) and Experience pipeline
js/
  config.js           repo grid settings
  format.js           escaping and date helpers
  github-repos.js     fetches and renders the live repo grid
previews/             screenshots for the featured demo cards
```

Run it locally with a static server — ES modules do not load over `file://`:

```sh
python3 -m http.server 8000
```

## Featured demos

Each card in the `.demos` grid is an `<article class="demo" data-repo="<repo>">`.
The `data-repo` attribute also keeps that repo out of the live grid below, so
adding a card is the only step.

## Live repo grid

The **On GitHub** section reads the GitHub API from the browser, so the repo
grid stays current on its own. Settings live in `js/config.js`:

| Constant | Purpose |
| --- | --- |
| `GITHUB_USERNAME` | Account the grid reads from |
| `PINNED` | Repo names floated to the front, in order |
| `HIDDEN` | Extra repo names kept off the page (featured demos are excluded automatically) |
| `MAX_REPOS` | How many cards to render |

Forks and archived repos are filtered out; everything not pinned sorts by most
recent push. The static cards in `index.html` stay visible if the API call
fails.
