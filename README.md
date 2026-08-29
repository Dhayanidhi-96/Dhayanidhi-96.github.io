# Dhayanidhi Palani — AI/ML Engineer Portfolio

> Production-ready AI Engineer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Configured for free static hosting on **GitHub Pages** with custom domain **dhayanidhi.me**.

## 🚀 Live Site & Domain
- **Domain:** [https://dhayanidhi.me](https://dhayanidhi.me)
- **Positioning:** AI/ML Engineer building production AI systems across LLMs, RAG, Computer Vision, and AI Infrastructure.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js (App Router, Static Export SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Custom Dark/Light Design Tokens
- **Animations:** Framer Motion (restrained, scroll-triggered micro-interactions)
- **Theme:** `next-themes` (Dark-first with smooth light mode toggle)
- **Icons:** Lucide React + Custom SVG Brand Icons
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📂 Project Structure

```
d:\Portfolio\
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD workflow
├── public/
│   ├── CNAME                       # dhayanidhi.me
│   └── .nojekyll                   # Bypass Jekyll processing
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with SEO metadata & ThemeProvider
│   │   ├── page.tsx                # Single-page narrative homepage
│   │   ├── globals.css             # Design tokens & color system
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx        # Dynamic SSG project case study pages
│   ├── components/
│   │   ├── home/                   # Hero, SelectedWork, TechStack, etc.
│   │   ├── layout/                 # Navbar, Footer, Section
│   │   ├── projects/               # ArchitectureDiagram, TechDecisions, ResultsGrid
│   │   ├── shared/                 # AnimateOnScroll, CountUp, TechTag, Icons
│   │   └── ui/                     # ThemeProvider, ThemeToggle
│   └── data/
│       ├── projects.ts             # 3 detailed case studies with architecture flows
│       ├── experience.ts           # 3 internships data
│       ├── techStack.ts            # Capability-grouped tech stack
│       ├── achievements.ts         # Verified numbers
│       └── siteConfig.ts           # Metadata, URLs, SEO defaults
```

---

## 🌐 Deploying to GitHub Pages with `dhayanidhi.me`

### 1. Push to GitHub
```bash
git add .
git commit -m "feat: complete AI/ML engineer portfolio"
git remote add origin https://github.com/Dhayanidhi-96/dhayanidhi-96.github.io.git  # or your repo name
git push -u origin main
```

### 2. Configure GitHub Pages
In your repository on GitHub:
1. Go to **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter: `dhayanidhi.me`
4. Check **Enforce HTTPS**

### 3. Configure Namecheap DNS
In your Namecheap account:
1. Go to **Domain List** → Click **Manage** next to `dhayanidhi.me`
2. Go to the **Advanced DNS** tab
3. Add the following records:

| Type | Host | Value | TTL |
|---|---|---|---|
| **A Record** | `@` | `185.199.108.153` | Automatic |
| **A Record** | `@` | `185.199.109.153` | Automatic |
| **A Record** | `@` | `185.199.110.153` | Automatic |
| **A Record** | `@` | `185.199.111.153` | Automatic |
| **CNAME Record** | `www` | `dhayanidhi-96.github.io` | Automatic |

---

## 💻 Local Development

```bash
# Run development server
npm run dev

# Test static export build
npm run build
```
