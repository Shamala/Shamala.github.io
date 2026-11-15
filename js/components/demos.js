// Renders the featured cards from js/data/demos.js into #demos.
import { DEMOS } from "../data/demos.js";
import { esc } from "../lib/format.js";

const LOCK = `<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M4.5 7V5.2a3.5 3.5 0 0 1 7 0V7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="7" width="10" height="7" rx="1.6" fill="currentColor"/></svg>`;

const wipTag = (d) => (d.wip ? `<span class="wip-tag">WIP</span>` : "");

const linkBtn = (l) =>
  `<a class="btn small${l.primary ? " primary" : ""}" href="${esc(l.href)}"${l.same ? "" : ' target="_blank" rel="noopener"'}>${esc(l.label)}</a>`;

const review = (d) =>
  d.review ? `<figure class="review"><blockquote>“${esc(d.review.text)}”</blockquote><figcaption>${esc(d.review.by)}</figcaption></figure>` : "";

const links = (d) =>
  `<div class="demo-links">${d.private ? `<span class="private-mark" title="The source code is in a private repository">${LOCK}Private repository</span>` : ""}${d.links.map(linkBtn).join("")}</div>`;

function featureCard(d) {
  const v = d.video;
  return `<article class="demo feature" data-repo="${esc(d.repo)}">
    <div class="feature-media${d.paper ? " paper" : ""}">
      <video id="${v.id}" class="feature-video" poster="previews/${v.base}-poster.jpg" width="540" height="960" muted loop playsinline preload="none" data-play-in-view aria-label="${esc(v.label)}">
        <source src="previews/${v.base}-promo.mp4" type="video/mp4" />
        <source src="previews/${v.base}-promo.webm" type="video/webm" />
      </video>
      <button class="video-sound" type="button" data-sound-for="${v.id}">Unmute</button>
    </div>
    <div class="demo-body">
      <p class="feature-eyebrow">${esc(d.eyebrow)}</p>
      <h3>${esc(d.title)}${wipTag(d)}</h3>
      <p>${esc(d.body)}</p>
      <ul class="feature-facts">${d.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <p class="demo-stack">${esc(d.stack)}</p>
      ${links(d)}
    </div>
  </article>`;
}

function demoCard(d) {
  const href = d.shotHref || d.links[0].href;
  const shot = d.shot
    ? `<a class="demo-shot" href="${esc(href)}" target="_blank" rel="noopener"><img src="previews/${d.shot}" alt="Screenshot of the ${esc(d.title)} app running" loading="lazy" width="900" height="562" /></a>`
    : `<a class="demo-shot none" href="${esc(href)}" target="_blank" rel="noopener">${esc(d.shotLabel || "Preview not captured")}<br />open the live demo</a>`;
  return `<article class="demo" data-repo="${esc(d.repo)}">
    ${shot}
    <div class="demo-body">
      <h3>${esc(d.title)}${wipTag(d)}</h3>
      <p>${esc(d.body)}</p>
      <p class="demo-stack">${esc(d.stack)}</p>
      ${review(d)}
      ${links(d)}
    </div>
  </article>`;
}

document.getElementById("demos").innerHTML = DEMOS.map((d) =>
  d.kind === "feature" ? featureCard(d) : demoCard(d),
).join("");
