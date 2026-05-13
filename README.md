# Gurmehak Kaur — Portfolio

Personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Three.js** (`@react-three/fiber`), **GSAP**, and **Framer Motion**. Sections include hero, about, featured projects (with live demos + GitHub), embedded resume, work experience, and a contact form (EmailJS).

## Prerequisites

- Node.js 18+ recommended
- npm

## Local setup

```bash
git clone https://github.com/gurmehakk20/My-portfolio.git
cd My-portfolio
npm install
```

### Environment variables

Create a `.env` file in the project root (same folder as `package.json`). Values are read by Vite as `import.meta.env.VITE_*`.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form in `src/sections/Contact.jsx` uses these variables. Do not commit real secrets; `.env` is listed in `.gitignore`.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start dev server (Vite)  |
| `npm run build` | Production build     |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint           |

## Deploy

The repo includes `vercel.json` for [Vercel](https://vercel.com/) deployment. Add the same `VITE_*` variables in the project’s Environment Variables settings before shipping.

## Project structure (high level)

- `src/sections/` — page sections (Hero, About, Projects, etc.)
- `src/constants/index.js` — navigation links, projects, experience, testimonials
- `public/` — static assets, resume PDF, project media

## License

All rights reserved unless you choose to add an open-source license.
