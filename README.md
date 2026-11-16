# ..STUDY BUDDYYY.. (Sbeta) 📚

A **self-contained, offline-first study planner & doubt solver** in a *single HTML file* — no build step, no dependencies, no backend. Your data lives entirely in your browser's localStorage and never leaves your device.

**🔗 Live app (Vercel):** https://study-buddy-nu-dusky.vercel.app
**🔗 Live app (GitHub Pages):** https://niriksha660-maker.github.io/study-buddy/

## Features
- 📊 **Dashboard** — weekly study-time chart, streaks, exam countdowns with motivational boosters
- 📚 **Subjects & Syllabus** — topics with difficulty/weight, progress bars
- 🗓️ **AI Study Plan** — priority planner (urgency + weakness + weight) over a 14-day horizon
- ⏱️ **Focus Timer** — Pomodoro with ring animation, session logging, cycles
- 🃏 **Flashcards** — Leitner spaced-repetition with due scheduling
- 🙋 **Doubt Solver** — WhatsApp-style chat with personas, photos, emoji, reactions, polls, groups
- 🗂️ **Notes & Papers** — note library with photo/PDF attachments, PDF export & share
- 🤖 **AI Coach** — goal tracking and study advice
- 📲 **Installable PWA** — service worker + runtime-generated manifest, works offline after first visit
- 💾 **Backup/restore** — one-click JSON backup download & restore (with auto-backup rescue)
- 🔀 **Multi-tab safe** — edits in two open tabs are merged (revision stamps + three-way merge) instead of the last save silently overwriting the other
- 🧑‍🏫 **Role-based access** — accounts are created as Student or Mentor. A mentor gets a class code (`SB-XXXXX`); students join with it once and get the whole mentor portal: assignments, papers & important questions, the class doubt board and tests. Mentor-only areas (class hub, test authoring, flashcards) are blocked in the action handlers, not just hidden.
- 🧪 **Test portal** — mentors build tests (questions, options, correct answer, marks), publish them, and marks are graded automatically; students see their score, mentors see every submission and class average
- 📊 **Mentor dashboard** — class code, students, open work, subjects held, class average and a live activity feed of joins, assignment ticks, doubts and test submissions
- 👤 **Account page & auth pages** — dedicated Sign in / Create account / signed-out screens, plus an Account page with role, class code, Google sign-in status, backup/restore and sign out

## Files
| File | What it is |
|---|---|
| `index.html` | The entire app — open it anywhere, works offline |
| `sw.js` | Service worker (offline app shell) |
| `qr.html` | Scan-to-open QR code page (offline-viewable) |

## Console editions
Runnable offline cousins of this app:
- `exports/studybuddy.py` — Python console edition
- `exports/studybuddy.c` — C console edition

## Usage
Just open `index.html` in any browser — or visit the live URL and tap **📲 Install** to add it to your phone's home screen.
