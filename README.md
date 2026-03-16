# Krithik US — Portfolio

> MERN Stack & Backend Developer Portfolio built with React + Vite + Tailwind CSS

---

## Tech Stack

- **React 18** — UI components
- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS v3** — utility-first styling
- **Lucide React** — icon library
- **Google Fonts** — Orbitron, Rajdhani, Share Tech Mono

---

## Project Structure

```
krithik-portfolio/
│
├── index.html                  # Entry HTML (Vite root)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme & custom tokens
├── postcss.config.js           # PostCSS (required by Tailwind)
├── package.json                # Dependencies & scripts
│
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Root component — wires all sections
    ├── index.css               # Global styles (Tailwind layers + custom CSS)
    │
    ├── data/
    │   └── portfolio.js        # ★ ALL your content lives here
    │                              (name, bio, skills, projects, experience)
    │
    ├── hooks/
    │   ├── useScrollReveal.js  # IntersectionObserver reveal animation
    │   └── useTyping.js        # Typing / deleting animation hook
    │
    └── components/
        ├── MatrixRain.jsx      # Canvas matrix rain background
        ├── Navbar.jsx          # Fixed top navigation with mobile drawer
        ├── Hero.jsx            # Landing screen with glitch name + typing
        ├── About.jsx           # Bio, education & stat cards
        ├── Skills.jsx          # Animated skill progress bars (4 categories)
        ├── Projects.jsx        # 3-column project grid with hover effects
        ├── Experience.jsx      # Timeline-style internship block
        ├── Contact.jsx         # Contact cards + CTA email button
        └── Footer.jsx          # Bottom bar
```

---

## Getting Started

### 1. Clone / copy the project

```bash
# If you received this as a zip, extract it first
cd krithik-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
# Open http://localhost:5173
```

### 4. Build for production

```bash
npm run build
# Output goes to /dist — ready to deploy
```

### 5. Preview the production build locally

```bash
npm run preview
```

---

## Customizing Your Content

**All your personal data is in one place:**

```
src/data/portfolio.js
```

Open that file and update:

| Field | What to change |
|---|---|
| `personalInfo.linkedin` | Your real LinkedIn URL |
| `personalInfo.github` | Your real GitHub URL |
| `projects[*].liveUrl` | Live demo links for each project |
| `projects[*].githubUrl` | GitHub repo links for each project |
| `experience[*].cert` | Your Hope Foundation certificate URL |

---

## Deployment

### Deploy to Netlify (recommended — free)

```bash
npm run build
# Drag & drop the /dist folder at netlify.com/drop
```

Or connect your GitHub repo to Netlify for automatic deploys on every push.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Render (same as your current site)

1. Push to a GitHub repo
2. Create a new **Static Site** on Render
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## Adding a New Project

Open `src/data/portfolio.js` and add an entry to the `projects` array:

```js
{
  id: '04',
  title: 'Your Project Name',
  short: 'One line description.',
  description: 'Full paragraph description.',
  tags: ['React', 'Node.js', 'MongoDB'],
  liveUrl: 'https://yourproject.com',
  githubUrl: 'https://github.com/krithikus/yourproject',
  highlights: [
    'Feature one',
    'Feature two',
    'Feature three',
    'Feature four',
  ],
},
```

The Projects grid automatically picks it up — no other changes needed.

---

## Notes

- The **matrix cursor** is a custom SVG set in `src/index.css` — green for default, cyan for hover/links
- **Scroll reveal** animations are handled by `useScrollReveal` hook using `IntersectionObserver`
- **Skill bars** animate when their section scrolls into view via a separate observer in `Skills.jsx`
- The **matrix rain canvas** runs at low opacity (4.5%) so it doesn't distract from content
- All URLs marked `#` in `portfolio.js` are placeholders — replace them with your real links
