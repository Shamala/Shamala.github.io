// Featured projects. Order here is the order on the page.
// kind: "feature" (video card) | "demo" (screenshot card)
// wip: true shows a WIP tag. shot: previews/ filename, omit for a placeholder.
const gh = (n) => `https://github.com/Shamala/${n}`;
const pages = (n) => `https://shamala.github.io/${n}/`;

export const DEMOS = [
  {
    kind: "feature", repo: "DailyLight", title: "Daily Light",
    eyebrow: "Live on Google Play · Android",
    video: { id: "dailylight-video", base: "dailylight", label: "Daily Light promo video, 24 seconds" },
    body: "A home-screen widget rather than an app to open. Unlock the phone and it shows the date, how far along the year is, an affirmation and a short thought to sit with. The words hold still all day, then turn to a closing voice in the evening, and the colours follow the light from indigo at dawn to rose at dusk.",
    facts: ["No account", "No network requests", "No tracking or ads"],
    stack: "Kotlin · Android App Widgets · RemoteViews · promo video in Remotion",
    links: [
      { label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.shamala.dailylight", primary: true },
      { label: "Source", href: gh("DailyLight") },
    ],
  },
  {
    kind: "feature", repo: "kolam-a-day", title: "Kolam a Day", eyebrow: "Android", paper: true,
    video: { id: "kolam-video", base: "kolam-a-day", label: "Kolam a Day promo video, 20 seconds" },
    body: "Teaches kolam, the looping line drawings made at doorsteps across South India each morning. Every day brings a new design to trace with your finger: one unbroken line that curves around every dot and returns to where it began. Watch it drawn first, keep a streak, then draw it on the floor for real.",
    facts: ["Works offline", "No ads or accounts", "No data collected"],
    stack: "Kotlin · Jetpack Compose · Room · DataStore · seeded kolam generator · Roborazzi screenshot tests · promo video in Remotion",
    private: true,
    links: [{ label: "Privacy policy", href: "kolam-a-day/privacy/", same: true }],
  },
  {
    kind: "feature", repo: "ClassUpdates-Vibgyor", title: "ClassUpdates-Vibgyor", eyebrow: "Web app · live", paper: true,
    video: { id: "classupdates-video", base: "class-updates", label: "ClassUpdates-Vibgyor promo video, 42 seconds" },
    body: "Parent-first dashboard and timetable intelligence pipeline for VIBGYOR High school updates — tracking daily diary, homework, surprise dictation words, and circulars. Created this app to reduce the overhead of following up the pdfs sent regularly.",
    facts: ["Daily diary and homework", "Surprise dictation words", "Circulars in one place"],
    stack: "Vanilla JS · CSS3 · Python · FastAPI",
    links: [{ label: "Live demo", href: pages("ClassUpdates-Vibgyor"), primary: true }, { label: "Source", href: gh("ClassUpdates-Vibgyor") }],
  },
  {
    kind: "demo", repo: "konkani-meal-planner", title: "Konkani Meal Planner", wip: true, shot: "konkani-meal-planner.jpg",
    review: { text: "Finally an answer to what to cook today, straight from the book on my shelf.", by: "Sample review" },
    body: "Tells you what to cook each day, from a Konkani cookbook you already own, without repeating itself. Offline-first PWA with today, week, dish and search views, and seasonal dishes shown only in season.",
    stack: "React 19 · Vite · TypeScript · Dexie (IndexedDB)",
    links: [{ label: "Live demo", href: pages("konkani-meal-planner"), primary: true }, { label: "Source", href: gh("konkani-meal-planner") }],
  },
  {
    kind: "demo", repo: "sparkys-snap-lab", title: "Sparky's Snap Lab", wip: true, shot: "sparkys-snap-lab.jpg",
    review: { text: "My 6-year-old followed along with Sparky and built a working circuit.", by: "Sample review" },
    body: "A follow-along app for kids aged 5 and up. Sparky the dog walks a child through 25 snap-together electronics projects, one step at a time, with pre-recorded voice. Works offline once loaded.",
    stack: "TypeScript · PWA · offline-first",
    links: [{ label: "Live demo", href: pages("sparkys-snap-lab"), primary: true }, { label: "Source", href: gh("sparkys-snap-lab") }],
  },
  {
    kind: "demo", repo: "ColorDetector", shot: "colordetector.jpg", title: "ColorDetector",
    body: "Type a CSS colour name and the swatch resolves live to its hex value, with a debounce hook throttling the lookup and a control to flip the label between light and dark.",
    stack: "React 19 · Vite · custom hooks",
    links: [{ label: "Live demo", href: pages("ColorDetector"), primary: true }, { label: "Source", href: gh("ColorDetector") }],
  },
  {
    kind: "demo", repo: "Tailwindcss-Project", shot: "tailwindcss-project.jpg", title: "Tailwindcss-Project",
    body: "Acme Rockets — a responsive marketing page built on Tailwind, with a sticky nav, product sections, testimonials and a contact form.",
    stack: "Tailwind CSS · static build",
    links: [{ label: "Live demo", href: pages("Tailwindcss-Project"), primary: true }, { label: "Source", href: gh("Tailwindcss-Project") }],
  },
  {
    kind: "demo", repo: "background-generator", shot: "background-generator.jpg", title: "background-generator",
    body: "Two colour inputs drive a live CSS gradient across the page, and the generated linear-gradient rule is printed underneath ready to copy.",
    stack: "Vanilla JS · Browserify",
    links: [{ label: "Live demo", href: pages("background-generator"), primary: true }, { label: "Source", href: gh("background-generator") }],
  },
];
