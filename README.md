# Noble Land Co. — Website

A modern, SEO-optimized website for Noble Land Co., built with Next.js, shadcn/ui, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **shadcn/ui** components
- **Tailwind CSS v4**
- **Web3Forms** for contact form (no server required)
- **TypeScript**

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 📬 Setting Up the Contact Form (Web3Forms)

The contact form uses **Web3Forms** — it's free, requires no server, and sends form submissions directly to your email.

### Steps to activate:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address (`info@noblelandcompany.com`) to get a free Access Key
3. Copy your Access Key
4. Open `src/components/contact-form.tsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:

```typescript
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
// Replace with your key, e.g.:
const WEB3FORMS_ACCESS_KEY = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
```

That's it — no server setup, no environment variables needed (though you can use one for production).

> **Optional:** For better security, store the key in an environment variable:
> 1. Create `.env.local` with: `NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here`
> 2. In `contact-form.tsx`, change the constant to: `const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy — Vercel auto-detects Next.js

### Deploy as Static Export (Netlify, S3, GitHub Pages)

1. In `next.config.ts`, uncomment `output: "export"`
2. Run `npm run build` — this generates a static `out/` directory
3. Deploy the `out/` folder to any static host

> **Note:** Static export disables server-side features. Since this site uses no API routes or SSR (only client components for the form), it works perfectly as a static site.

### Deploy to Netlify

1. Enable static export (see above)
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`

---

## 📁 Project Structure

```
noblelandcompany/
├── public/
│   └── robots.txt              # Search engine directives
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (nav + footer)
│   │   ├── page.tsx             # Home page
│   │   ├── about/page.tsx       # About page
│   │   ├── faq/page.tsx         # FAQ page (with JSON-LD schema)
│   │   ├── contact/page.tsx     # Contact / Received a Letter page
│   │   ├── sitemap.ts           # Auto-generated sitemap
│   │   └── globals.css          # Global styles + brand colors
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── header.tsx           # Sticky navigation header
│   │   ├── footer.tsx           # Site footer
│   │   ├── hero.tsx             # Home page hero section
│   │   ├── how-it-works.tsx     # 3-step process section
│   │   ├── why-us.tsx           # Trust signals section
│   │   ├── contact-form.tsx     # Web3Forms contact form
│   │   └── faq-accordion.tsx    # Accordion FAQ component
│   └── lib/
│       └── utils.ts             # Utility functions (shadcn)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Brand Colors

| Name          | Hex       | Usage                        |
|---------------|-----------|------------------------------|
| Brand Green   | `#2d5016` | Primary CTAs, headers        |
| Green Light   | `#3d6b1e` | Hover states                 |
| Green Dark    | `#1e3810` | Hero background, footer      |
| Brand Gold    | `#b8860b` | Accent, section labels       |
| Gold Light    | `#d4a017` | Gold hover, stats            |
| Cream         | `#faf8f3` | Page backgrounds             |
| Warm Gray     | `#6b6560` | Body text                    |

---

## 📈 SEO Features

- ✅ Per-page metadata (title, description, canonical)
- ✅ Open Graph tags on all pages
- ✅ Twitter Card tags
- ✅ LocalBusiness JSON-LD schema (homepage)
- ✅ FAQPage JSON-LD schema (FAQ page)
- ✅ Auto-generated sitemap (`/sitemap.xml`)
- ✅ robots.txt
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Alt text on all images
- ✅ Fast Core Web Vitals (minimal JS, static-friendly)

---

## 📝 Content Updates

All content is in the page files:
- `src/app/page.tsx` — Home page content
- `src/app/about/page.tsx` — About page content
- `src/app/faq/page.tsx` — FAQ items (update the `faqItems` array)
- `src/app/contact/page.tsx` — Contact page

---

Built with ❤️ for Noble Land Co.
