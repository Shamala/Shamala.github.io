const ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ENTITIES[c]);

const DAY_MS = 86_400_000;

// "today", "12d ago", "3mo ago", "2y ago"
export function since(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  const days = Math.floor((Date.now() - d) / DAY_MS);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

// "Sep 2026"
export function monthYear(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}
