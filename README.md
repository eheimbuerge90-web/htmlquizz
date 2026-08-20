# 🐧 Linux Drill — Terminal Mastery Quiz

A typing-based Linux terminal quiz. No multiple choice: every question shows a
real-world scenario and you type the actual command. Get it right or wrong,
you always see a full explanation, a usage note, a sample output, and
variations — so a wrong answer teaches as much as a right one.

Live companion: **[linuxdrill-mobile](https://github.com/eheimbuerge90-web/linuxdrill-mobile)**,
an Android build of the same app (via Capacitor) sharing the same question
bank and design system. See [Keeping the mobile app in sync](#keeping-the-mobile-app-in-sync)
below.

## ✨ Features

- **Type the command, no multiple choice.** Grading accepts equivalent
  phrasings (`apt` vs `apt-get`, `tar xzf` vs `tar -xzf`) via each question's
  `altAnswers`, and normalizes away a leading `sudo` and quote-style
  differences so you're graded on the command, not incidental syntax.
- **Deep answers, not just right/wrong.** Every question carries an
  explanation (what it does), a usage note (when to reach for it), one or
  more realistic example invocations, a sample terminal output, and a short
  memory hook.
- **Evolving avatar.** Tux gains a new piece of gear with every correct
  answer — 24 named evolutions (`chmod +sparkle` → `TUX PRIME`) — plus a
  progress ring, per-answer tick dots, and a hue that shifts with score.
  Pure visual feedback loop, no gameplay effect.
- **Reveal, when you're stuck.** Shows the answer without penalty beyond
  counting as a miss — better than being stuck on a question with no way
  forward.
- **Spaced repetition.** A question you get wrong is queued; there's a 40%
  chance each subsequent "Continue" re-inserts it 2–4 questions ahead,
  rather than only at the very end via "Retry missed" — reviewing a mistake
  while it's still fresh is what actually builds recall.
- **Progress saved locally**, per category, in `localStorage` — resume a
  run exactly where you left off, or see your best score/streak per
  category. Nothing leaves the browser; there's no backend.
- **Keyboard-first.** Enter submits an answer or advances past the
  explanation; every interactive element gets a visible focus ring.

## 🗂️ Question Bank

**432 questions across 26 categories**, grouped into 6 sections on the
category screen (insertion order in `categories` in
[`app/data/questions.ts`](app/data/questions.ts) defines the section order):

- **Foundations** (74) — Terminal Basics (16), Navigation (24), Editors (8),
  File Operations (26)
- **Text & Data** (70) — Viewing Text (24), Regex (8), Text Processing (17),
  JSON & Data (6), Archives & Compress (15)
- **The Shell** (77) — Shell Syntax (18), Pipes & Redirect (19), Exit Codes
  (6), Bash Scripting & Practice (28), Debugging Scripts (6)
- **System** (98) — Permissions (32), Processes (23), Services/systemd (12),
  System Info (24), Disks & Mounts (7)
- **Network & Security** (39) — Networking (24), Firewall (5), SSH & Keys
  (5), Checksums & Integrity (5)
- **Distro & Practice** (74) — Packages/Debian-Ubuntu (21), RHEL/Fedora (16),
  Daily Linux Tips (37, its own featured "Start here" card rather than a
  grid tile)

Every question was rebuilt from a three-way audit (see
[Question bank provenance](#question-bank-provenance)) checking that each
has exactly one deterministic correct answer, that sample outputs are
plausible against real command behavior, and that no two questions are
near-duplicates.

## 🎨 Design system

`app/globals.css` defines a small `--ld-*` custom-property design system —
four steps of surface elevation, one accent color spent only on interaction
(never on body text), and semantic color reserved for right/wrong feedback.
It's documented in-file and **mirrored verbatim in
`linuxdrill-mobile/src/index.css`** (mobile only diverges for the font stack
— no `next/font` there — and additive mobile-only rules for safe-area insets
and touch states). Changing the palette or any `.ld-*` class means editing
both files.

## 🚀 Getting started

```bash
npm install
npm run dev       # http://localhost:3000 (falls back to the next free port)
npm run build     # production build
npm run lint      # eslint
```

## 🛠️ Technical stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS 4 + the custom `--ld-*` design system above
- **State**: React hooks only. Progress persistence is a hand-rolled external
  store read via `useSyncExternalStore` (see the comment above `EMPTY_STORE`
  in `app/page.tsx`) rather than `useState` + an effect — needed because this
  page is server-prerendered, where `localStorage` doesn't exist yet.
- **Data**: Static TypeScript module (`app/data/questions.ts`), no database,
  no network calls. The whole app is three files: `page.tsx` (all UI and
  quiz logic), `globals.css` (design system), `data/questions.ts` (content).

## 📄 Code layout

| File | Contents |
|---|---|
| `app/layout.tsx` | Root HTML shell, fonts (Geist Sans/Mono via `next/font`), page metadata |
| `app/page.tsx` | Everything else: quiz state machine, the evolving-avatar SVG component, the category/quiz/completion screens |
| `app/globals.css` | The `--ld-*` design system, shared verbatim with the mobile app |
| `app/data/questions.ts` | The `Question`/`Category` types and all question + category data |

`app/page.tsx` is organized top-to-bottom as: pure helper functions (shuffle,
difficulty banding, answer normalization) → the progress store → the two SVG
avatar components → the `Home` component (category select / active quiz /
completion screen, chosen by `selectedCategory` and whether the current
question index still has a question) → two small presentational components
(`StatTile`, `CategoryMeta`) at the bottom.

## Keeping the mobile app in sync

`linuxdrill-mobile` is a **separate repository**, not a workspace package —
there's no shared build step, so staying in sync is a manual, deliberate
step, not something CI enforces:

- **Question bank**: `linuxdrill-mobile/src/data/questions.ts` is byte-for-byte
  copied from this repo's `app/data/questions.ts`. After editing questions
  here, run (from `linuxdrill-mobile/`):
  ```bash
  cp ../htmlquizz/app/data/questions.ts src/data/questions.ts
  ```
- **Design system**: `app/globals.css` here and
  `linuxdrill-mobile/src/index.css` there must stay identical except for the
  font-stack lines and the mobile-only block at the end of the mobile file
  (both files say so in their header comment).
- **Quiz logic**: `app/page.tsx` here and `linuxdrill-mobile/src/App.tsx`
  there implement the same state machine independently (Next.js App Router
  vs a plain Vite SPA are different enough that sharing the component
  directly isn't practical). As of 2026-08-20 both apps have full feature
  parity — evolving avatar, Reveal, spaced repetition, Fisher-Yates
  shuffling, the same answer-normalization rules. If you add or change
  behavior in one, port it to the other in the same session — this parity
  drifted once already (see git history) and silently: the mobile app can
  build and ship a working APK while missing features nobody who only looks
  at `npm run build` output would notice are gone.

## Question bank provenance

The 432-question bank was assembled by an offline audit pipeline (not part
of the app's runtime, and not checked into this repo) that:

1. Pulled every question from the prior ~442-question bank plus new
   candidate questions into a working set.
2. Ran a three-way cross-check per question — deduplication against
   near-identical questions, disambiguation of any question whose stem could
   plausibly admit more than one correct command, and a fact/output-accuracy
   pass verifying `outputExample` fields against real command behavior on a
   real system (coreutils/util-linux/systemd versions noted case-by-case)
   rather than plausible-looking invented output.
3. Assembled the final bank and category list from what survived.

A handful of dated example values inside `outputExample` fields (e.g. "May
17, 2026" needing to fall on the correct day of the week) get corrected
opportunistically when noticed — grep the bank for a specific date before
trusting it if you're ever unsure.

## 🤝 Contributing

- **New questions**: add to `app/data/questions.ts` following the existing
  `Question` shape — every field (`explanation`, `usage`, `examples`,
  `memoryTip`, `outputExample`) is required and rendered, so an empty one
  will show as a blank section in the UI, not get hidden automatically.
  Update the matching `Category.count` and copy the file to
  `linuxdrill-mobile` (see above).
- **Design changes**: edit the `--ld-*` tokens/classes in `globals.css`, then
  port to `linuxdrill-mobile/src/index.css`.
- Accessibility and localization improvements are welcome.

## 📄 License

MIT.
