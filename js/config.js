// ── Repo grid configuration ────────────────────────────────────────────────
// Repos shown as featured demos are hidden from the grid automatically — any
// `.demo[data-repo]` card in index.html is excluded, so there is no list to
// keep in sync here.

export const GITHUB_USERNAME = "Shamala";

// Repos to float to the front, in this order. Everything else follows by
// most-recent push. Reorder freely.
export const PINNED = [
  "Shamala.github.io",
  "DailyLight",
  "LearningLangChain",
  "NestJs",
  "techNotes-project-frontend",
  "image-recognition-app",
];

// Repo names to keep off the page entirely, beyond the featured demos.
export const HIDDEN = [];

export const MAX_REPOS = 12;

// Fallback descriptions for repositories that do not have one set on GitHub.
export const REPO_DESCRIPTIONS = {
  "Shamala.github.io":
    "Personal portfolio website showcasing engineering experience, featured projects, and live demos.",
};

// GitHub linguist colours for the language dot.
export const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  "C#": "#178600",
  Java: "#b07219",
  Shell: "#89e051",
  Vue: "#41b883",
  SCSS: "#c6538c",
  Go: "#00ADD8",
  Ruby: "#701516",
  Rust: "#dea584",
};
