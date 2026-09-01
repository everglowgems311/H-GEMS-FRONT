# Everglow Gems (H-GEMS) — Fine Jewelry Web Platform

A luxury fine jewelry catalog, bespoke consultation, and lead-generation web platform built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 💎 Project Overview

Everglow Gems is an haute joaillerie atelier presenting curated collections of **18k Solid Gold**, **925 Sterling Silver**, and **Rare Certified Natural Gemstones & Diamonds**. The platform delivers a private salon experience with bespoke inquiry routing and WhatsApp concierge integration.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Frontend Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom luxury theme tokens & keyframes
* **Fonts:** Cormorant Garamond & Montserrat via `next/font/google`
* **Media & Hosting:** Next.js Image Optimization with Cloudinary & Unsplash support
* **Backend Integration:** Node.js / Express / MongoDB backend compatibility

---

## 🚀 Getting Started

### 1. Prerequisites

* Node.js 18.18+ or 20+
* npm or yarn or pnpm

### 2. Installation

```bash
# Clone the repository and navigate into the folder
cd H-GEMS-FRONTEND

# Install dependencies
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory (based on `.env.example`):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the salon.

### 5. Production Build

Build and run the production-optimized Next.js bundle:

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
├── app/                      # Next.js App Router routes & layouts
│   ├── layout.tsx            # Global layout, fonts, and SEO metadata
│   ├── page.tsx              # Homepage
│   ├── about/                # Atelier story & heritage
│   ├── contact/              # Private client concierge & contact
│   ├── collections/          # Collections overview & category routes
│   ├── gold/                 # 18k Solid Gold collection
│   ├── silver/               # 925 Sterling Silver collection
│   ├── gemstones/            # Rare Gemstones & Diamonds collection
│   ├── products/[id]/        # Dynamic product detail & inquiry modal
│   ├── privacy/              # Data protection & privacy policy
│   ├── terms/                # Terms & Conditions
│   ├── imprint/              # Impressum legal notice
│   ├── not-found.tsx         # Custom 404 page
│   ├── error.tsx             # Error boundary
│   └── globals.css           # Tailwind v4 theme tokens & animations
├── components/               # Reusable luxury UI components
│   ├── common/               # Universal Hero and shared banners
│   ├── layout/               # Header, Footer, MenuOverlay
│   ├── inquiry/              # Contact and Product Inquiry Forms, WhatsAppInput
│   ├── products/             # ProductCard, ProductGrid, Gallery, Filters
│   └── section/              # Homepage sections (Features, About, FAQ, Reviews)
├── data/                     # Typed jewelry catalogs & configurations
├── lib/                      # Centralized API utilities
├── services/                 # Customer & Product Inquiry services
├── types/                    # TypeScript interfaces
├── utils/                    # Validation & formatting utilities
└── public/                   # Static media (images, banners, logo)
```

---

## 📄 License

Private & Proprietary © Everglow Gems (H-GEMS). All rights reserved.
