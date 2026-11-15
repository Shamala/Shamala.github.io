// Featured demo videos play only while they are on screen, so a muted loop
// never downloads or decodes for a visitor who never scrolls to it.
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

for (const video of document.querySelectorAll("video[data-play-in-view]")) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    // No autoplay: the poster stays up and the visitor can start it.
    video.controls = true;
    continue;
  }
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {
          video.controls = true;
        });
      } else {
        video.pause();
      }
    },
    { threshold: 0.35 },
  ).observe(video);
}

for (const button of document.querySelectorAll("[data-sound-for]")) {
  const video = document.getElementById(button.dataset.soundFor);
  if (!video) continue;
  button.addEventListener("click", () => {
    video.muted = !video.muted;
    button.textContent = video.muted ? "Unmute" : "Mute";
    if (!video.muted && video.paused) video.play().catch(() => {});
  });
}
