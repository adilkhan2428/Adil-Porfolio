# Adil Khan — AI Automation & Agentic Systems Portfolio

A personal portfolio website engineered for an aspiring AI Engineer specializing in **E-commerce Automation**, **Agentic AI Systems**, **Shopify Workflows**, and intelligent business architectures.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 🌟 Brand & Engineering Positioning

- **Name:** Adil Khan
- **Location:** Landikotal, Khyber Pakhtunkhwa, Pakistan
- **Current Program:** SMIT Agentic AI Engineer Program (12-Month Intensive Curriculum)
- **Primary Market Focus:** Shopify merchants, Shopify Plus brands, and global online retailers (US & UK markets)
- **Headline:** *"Building Intelligent Automation for the Future of E-commerce."*
- **Engineering Values:** Engineering Mindset, Continuous Learning, Business Problem Solving

---

## 🧭 Website Architecture & Sections

1. **Navigation:** Sticky glassmorphic header with active section tracking, dark/light mode toggle, and mobile drawer.
2. **Hero Section:** Clear brand identity, 3 core focus pillars, social links, and an interactive abstract technical visual of an e-commerce agentic network.
3. **About Me ("The Engineer Behind the Systems"):** Authentic journey from FSc to SMIT, core values, and transparent disclosure of beginner/builder stage.
4. **Technical Skills Dashboard:** Filterable & searchable matrix across 4 categories with strict differentiation between *Currently Learning*, *Practicing Through Projects*, and *Future Learning*.
5. **Featured Projects:** Hands-on prototypes and blueprints covering all 7 categories (Python, Business Automation, Shopify Automation, AI Agents, RAG, Multi-Agent, and Production AI) with workflow inspection modals.
6. **E-commerce Solutions ("Engineering the Next Generation of E-commerce Operations"):** Master-detail explorer across 7 retail capability domains with future project slots.
7. **Learning Journey ("From Foundations to Agentic AI Engineering"):** Visual timeline of the 4 SMIT modules with topic-by-topic competency tracker.
8. **Engineering Philosophy:** 7 core engineering principles emphasizing reliability, security, and human oversight.
9. **Future Vision ("Beyond Automation: Toward Autonomous E-commerce"):** Conceptual 7-tier architecture diagram mapping the flow from Shopify to multi-agent reasoning, shared memory, and business outcomes.
10. **Contact Section:** Functional message form with validation, direct email client launcher (`adilkha2428@gmail.com`), phone/WhatsApp quick links (`03279158970`), and clipboard utilities.
11. **Config Helper Modal:** Built-in floating guide showing how to update data in `src/data/portfolioData.ts`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide Icons & Custom SVG Brand Icons
- **Theme:** Dark mode default with full light mode toggle and `localStorage` persistence

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## ✏️ How to Update & Maintain Your Content

All content is centralized in **`src/data/portfolioData.ts`**. You do not need to edit complex HTML/CSS to update your portfolio as your skills grow.

### To Add a New Project:
Open `src/data/portfolioData.ts` and add an entry to `featuredProjects`:

```typescript
{
  id: 'proj-new-id',
  name: 'Your Project Name',
  category: 'Shopify Automation',
  status: 'In Development',
  statusNote: 'Active sandbox test.',
  problem: 'Problem statement...',
  solutionArchitecture: 'Solution architecture...',
  technologies: ['Python', 'Shopify REST API', 'FastAPI'],
  workflowDiagramDescription: 'Step 1 -> Step 2 -> Step 3',
  workflowSteps: [
    { step: 1, title: 'Step 1', detail: 'Description...' }
  ],
  githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
  isDemonstrationOnly: false,
  keyFeatures: ['Feature 1', 'Feature 2']
}
```

### To Update a Skill's Status:
Change `status` in `technicalSkills` between:
- `'Currently Learning'`
- `'Practicing Through Projects'`
- `'Future Learning'`

### To Update Learning Module Progress:
Change `status` in `learningModules` between `'Not Started'`, `'In Progress'`, and `'Completed'`.

---

## 🌐 Free Deployment Options

### Deploy to Vercel
1. Push your repository to GitHub (`https://github.com/adilkhan2428/Adil-Porfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Connect your GitHub repository at [netlify.com](https://netlify.com).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Click **"Deploy Site"**.

---

## 📄 License & Attribution

Designed and built for **Adil Khan** as an evolving platform to scale alongside his engineering career.
