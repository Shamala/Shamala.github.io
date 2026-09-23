// Replaces the placeholder repo cards with live data from the GitHub API.
// The static placeholders in index.html stay visible if the call fails.

import {
  GITHUB_USERNAME,
  PINNED,
  HIDDEN,
  MAX_REPOS,
  REPO_DESCRIPTIONS,
  LANG_COLORS,
} from "./config.js";
import { esc, since, monthYear } from "./format.js";

const reposEl = document.getElementById("repos");
const noteEl = document.getElementById("gh-note");
const noteText = document.getElementById("gh-note-text");
const countEl = document.getElementById("repo-count");
const profileLink = document.getElementById("gh-profile-link");

// Featured demo cards already cover these repos.
const featured = [...document.querySelectorAll(".demo[data-repo]")].map(
  (el) => el.dataset.repo,
);
const excluded = new Set([...featured, ...HIDDEN]);

function repoCard(r) {
  const desc =
    r.description || REPO_DESCRIPTIONS[r.name] || "No description yet.";
  const topics = (r.topics || [])
    .slice(0, 4)
    .map((t) => `<span class="topic">${esc(t)}</span>`)
    .join("");
  const lang = r.language
    ? `<span class="lang"><i style="background:${LANG_COLORS[r.language] || "var(--ink-3)"}"></i>${esc(r.language)}</span>`
    : "";

  return `<a class="repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
    <span class="repo-name">${esc(r.name)}</span>
    <p class="repo-desc">${esc(desc)}</p>
    ${topics ? `<div class="topics">${topics}</div>` : ""}
    <div class="repo-meta">
      ${lang}
      <span>created ${monthYear(r.created_at)}</span>
      <span>updated ${since(r.pushed_at)}</span>
    </div>
  </a>`;
}

function setNote(html) {
  noteEl.hidden = !html;
  if (html) noteText.innerHTML = html;
}

// Pinned repos first in PINNED order, then everything else by latest push.
function byPinThenPush(a, b) {
  const rank = (r) => {
    const i = PINNED.indexOf(r.name);
    return i < 0 ? Infinity : i;
  };
  const diff = rank(a) - rank(b);
  if (diff) return diff;
  return new Date(b.pushed_at) - new Date(a.pushed_at);
}

async function fetchRepos(user) {
  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated`,
  );
  if (res.status === 404) throw new Error(`No GitHub user called “${user}”.`);
  if (res.status === 403)
    throw new Error(
      "GitHub rate-limited this browser. Try again in a few minutes.",
    );
  if (!res.ok) throw new Error(`GitHub returned ${res.status}.`);
  return res.json();
}

async function load(user) {
  profileLink.href = `https://github.com/${encodeURIComponent(user)}`;
  setNote(`Loading repositories for <code>${esc(user)}</code>…`);

  try {
    const repos = (await fetchRepos(user))
      .filter((r) => !r.fork && !r.archived && !excluded.has(r.name))
      .sort(byPinThenPush);

    if (!repos.length) {
      setNote(
        `<code>${esc(user)}</code> has no public, non-forked repositories yet.`,
      );
      return;
    }

    reposEl.innerHTML = repos.slice(0, MAX_REPOS).map(repoCard).join("");
    countEl.textContent = `${repos.length} public repositories`;
    setNote(null);
  } catch (err) {
    setNote(
      `<strong>Showing placeholders.</strong> ${esc(err.message)} ` +
        "The live grid works once this page is hosted (GitHub Pages, Netlify, your own domain) — " +
        "preview sandboxes block calls to the GitHub API.",
    );
  }
}

if (GITHUB_USERNAME) load(GITHUB_USERNAME);
