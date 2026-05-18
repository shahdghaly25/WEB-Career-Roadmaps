# WEB-Career-Roadmaps
# 🟣 Skill Path

> Structured tech career roadmaps and free learning resources — built for university students, by students.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-purple)
![No Paywalls](https://img.shields.io/badge/paywalls-0-brightgreen)

---

## What is Skill Path?

Skill Path is a free, no-login-required web app that helps university students figure out where to start in tech. Pick a career path, get a structured beginner-to-advanced roadmap, and find hand-picked free resources — all in one place.

No paid courses. No affiliate links. No BS.

---

## Features

- **5 career roadmaps** — Web Dev, AI, Data Science, Cybersecurity, Mobile Dev
- **30+ free resources** — courses, videos, docs, and practice platforms
- **Search & filter** — by field and difficulty level
- **Bookmarks** — save resources to your browser (no account needed)
- **Auth system** — optional login/register stored locally
- **Dark / light mode** — remembers your preference
- **Fully responsive** — works on mobile too

---

## Pages

| Page | What's on it |
|------|-------------|
| Home | Hero section with stats and quick nav |
| Roadmaps | 5 career path cards — click any to see the full phase breakdown |
| Resources | Searchable, filterable grid of 30+ free learning links |
| Bookmarks | Your saved resources, stored in `localStorage` |

---

## Tech Stack

Just vanilla web — no frameworks, no build tools, no dependencies.

```
index.html   — structure and all page layouts
style.css    — theming with CSS variables, dark/light mode, responsive
script.js    — all logic: routing, auth, filtering, bookmarks, modals
```

---

## Getting Started

No install needed. Just open it.

```bash
git clone https://github.com/shahdghaly25/skill-path.git
cd skill-path
```

Then open `index.html` in your browser. That's it.

Or use a local server if you prefer:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

---

## Project Structure

```
skill-path/
├── index.html      # All pages (home, roadmaps, resources, bookmarks)
├── style.css       # Styles and theming
├── script.js       # Data + all app logic
└── README.md
```

---

## Roadmaps Included

| Path | Phases |
|------|--------|
| 🌐 Web Development | HTML/CSS/JS → React/Node → Next.js/Docker |
| 🤖 Artificial Intelligence | Python/NumPy → TensorFlow → PyTorch/LLMs |
| 📊 Data Science | Pandas/SQL → Tableau/A-B Testing → Spark/dbt |
| 🔐 Cybersecurity | Networking/Linux → Ethical Hacking → Red Teaming |
| 📱 Mobile Development | React Native/Flutter → Firebase → App Store/CI-CD |

---

## Contributing

Contributions are welcome — especially new resources or roadmap improvements.

1. Fork the repo
2. Create a branch: `git checkout -b add-new-resource`
3. Add your resource to the `RESOURCES` array in `script.js`
4. Open a pull request

Every resource must be **completely free** — no trials, no freemium paywalls.

---

## Local Storage

Skill Path stores three things in your browser's `localStorage`:

| Key | What it stores |
|-----|---------------|
| `sp_bookmarks` | Array of bookmarked resource IDs |
| `sp_theme` | `"dark"` or `"light"` |
| `sp_users` / `sp_user` | Optional local auth (no server involved) |

Nothing is sent anywhere. Everything stays on your machine.

---

## License

MIT — use it, fork it, build on it.

---

<p align="center">Built for students who don't want to pay to learn how to code.</p>
