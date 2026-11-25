# 🚀 3D Developer Portfolio Website (React + TypeScript + Three.js)

A modern, high-performance **3D developer portfolio website** built with **React**, **TypeScript**, **Three.js**, **GSAP**, and **WebGL**.

If you’re a developer looking for a **portfolio template** that feels premium, interactive, and memorable—this repo is for you.

> Live preview: https://portfolio-mu-lemon-x7k0heogow.vercel.app/

---

## ✨ Highlights

- **3D / WebGL experience** powered by **Three.js**
- Smooth animations with **GSAP**
- Modern **React + TypeScript** codebase
- Fast, responsive UI (desktop + mobile)
- Designed for developers, engineers, programmers, and creators

---

## 🧰 Tech Stack

- **React**
- **TypeScript**
- **Three.js / WebGL**
- **GSAP**
- **HTML / CSS / JavaScript**

---

## 🚀 Getting Started

### 1) Clone

```bash
git clone https://github.com/ali04432/Main-portfolio-3D-.git
cd Main-portfolio-3D-
```

### 2) Install

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

### 4) Build

```bash
npm run build
```

---

## 🧩 Customize (Quick Guide)

Typical things you’ll want to update:

- **Your name + hero section text**
- **Projects list**
- **Social links** (GitHub, LinkedIn, email)
- **SEO meta title/description**

---

## ⭐ Support

If you found this useful:

- Please **star** the repository (it helps a lot)
- Share it with a friend who needs a portfolio template
- Sponsor via the **Sponsor** button on GitHub (if available in your region)

---

## 🤝 Connect

- GitHub: https://github.com/ali04432
- LinkedIn: https://www.linkedin.com/in/muhammad-ali-0aaa06371
- Email: maliarif157035@gmail.com

---

## 🏷️ Recommended GitHub Topics (add in repo settings)

Add these topics to improve GitHub search visibility:

`portfolio` `developer-portfolio` `portfolio-website` `portfolio-template` `3d-portfolio` `react` `typescript` `threejs` `webgl` `gsap` `frontend` `vite`

---

## 🪪 License

This project is open source and available under the **MIT License**. See [LICENSE](LICENSE).

---

## ☁️ Deployment (Vercel or Cloudflare)

The same repo deploys to either host with no code changes.

| | Vercel | Cloudflare |
|---|---|---|
| Build command | `npm run build` | `npm run build` |
| Output directory | `dist` | `dist` |
| Deploy command | – | `npx wrangler deploy` (Workers, uses `wrangler.jsonc`) |
| Chat API (`/api/chat`) | `api/chat.js` | `functions/api/chat.js` (via `worker/index.js` on Workers) |
| Headers / caching | `vercel.json` | `public/_headers` |
| SPA routing | `vercel.json` rewrites | `wrangler.jsonc` (`not_found_handling`) |
| Env variable | `GROQ_API_KEY` | `GROQ_API_KEY` (add as a **Secret** under Settings → Variables and Secrets) |

If you change the chat logic or the headers, update both files so the two hosts stay in sync.
