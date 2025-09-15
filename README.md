# vikas yadav Portfolio (Next.js 14 + Tailwind)

A sleek, animated, dark‑mode portfolio ready to deploy.

## Quick start

```bash
npm install
npm run dev
```

## Customize

- Edit content in `content/site.ts` (name, links, skills, projects).
- Design tokens live in `tailwind.config.ts` (brand color, shadows).
- Components are in `components/`.
- Hero/About/Projects/Experience/Contact live in `app/page.tsx`.
- Email form posts to `/api/contact`. Copy `.env.example` → `.env.local` and fill SMTP creds (e.g., Gmail app password or any SMTP provider).

## Deploy

- Vercel: push to a repo and import.
- Standalone: `npm run build && npm start`.

## Notes
- App Router (Next 14), TypeScript, Tailwind 3, Framer Motion, dark mode via `next-themes`.
