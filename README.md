# Dr. Keerthana Kota – Single Page Website

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis smooth scroll.
Built from the Figma design "DR. KEERTHANA WEBSITE". Deployed on AWS Amplify Hosting (Next.js SSR platform).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in ./.next
```

## Structure

- `app/` – layout, global styles (design tokens in `@theme`), the single page
- `components/` – one component per section (Hero, About, Conditions, Treatments, WhyChoose, WhenConsult, Journey, Faq, Contact, Footer)
- `lib/data.ts` – all copy, phone numbers, nav items and FAQ content
- `public/images`, `public/icons` – assets exported from Figma

## Deploy on AWS Amplify Hosting

1. Amplify Console → **Create new app** → **GitHub** → select this repo and branch.
2. Amplify picks up `amplify.yml` (build: `npm ci && npm run build`, artifacts: `.next/`).
3. Amplify auto-detects Next.js and uses the SSR platform. Node 20 build image.
4. Add a custom domain under **Domain management** if needed.

The appointment form has no backend: on submit it opens WhatsApp with the
details pre-filled for +91 70130 48272. To store submissions instead, point the form at an
API Gateway/Lambda endpoint or a form service.
