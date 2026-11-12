# CAMX – Web Experience

Next.js website for CAMX with animated UI, SEO and visual product/brand content.

## Stack
Next.js 16, React 19, Tailwind CSS 4, Framer Motion, GSAP, Three.js and next-sitemap.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` for a production build and `npm run start` to serve it.

## Structure

- `src/` — application source
- `public/` — static images and media
- `next-sitemap.config.js` — sitemap configuration
- `next-seo.config.js` may not exist in this repository; verify metadata using the current App Router code.

## Related repositories

- [CAMX frontend](https://github.com/Kelumsameera/camxfrontend)
- [CAMX backend](https://github.com/Kelumsameera/camx-backend)
- [Previous CAMX frontend repository](https://github.com/Kelumsameera/camx_frontend)

These repositories may represent different phases of work. Confirm the deployed canonical frontend before archiving or consolidating anything.

## Checks before deployment

Run build/lint, inspect SEO metadata and generated sitemap, verify responsive assets, and confirm any required environment variables are configured on the host. This documentation update does not verify production status.
