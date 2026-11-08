# Bjorn’s Buds website

Independent, public-facing static React / TypeScript / Vite website for Louise’s dog-walking and pet-care business. Intended domain: `bjorns-buds.claydoncreative.com`.

## Development and checks

Requires Node 22.12+ (or a compatible supported Node version).

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

Output: `dist/`. No backend, database, authentication, API keys, analytics or environment variables. There is no automated test suite; lint, TypeScript, production build and browser checks are the initial verification.

## Editing

- `src/config.ts`: approved contact details, international WhatsApp digits, service area, services, prices, logo and image paths.
- `src/main.tsx`: six page views, accessible navigation, enquiry interface, privacy notice.
- `src/styles.css`: responsive styling, Tailwind import, reduced-motion support.
- `public/images/`: add approved local logo and photographs here; use `/images/filename.webp` in configuration.

Navigation uses hashes so static hosting needs no SPA rewrite. Enquiry form opens the visitor’s email application with their message. It does not submit to a server or guarantee delivery. With no configured email, sending is disabled. Telephone and WhatsApp actions appear as unavailable until real details are supplied; a floating WhatsApp button appears once configured. No contact details or business credentials have been invented.

## Logo and photography

Set `business.logo`, `business.louisePhoto`, and `business.bjornPhoto` to local image URLs. Until then the site uses a temporary text mark and clearly labelled portrait spaces. Replace `photos` entries with approved local photographs and accurate alt text. Current dog images are explicitly labelled illustrative Unsplash stock, not clients or actual business walks. Unsplash images are available under https://unsplash.com/license; keep a record of source/photographer and confirm suitability before publication. Prefer locally hosted, compressed WebP/AVIF photographs, with no location metadata. Do not publish identifiable people, client details or pet photographs without appropriate permission.

## Publication gates

Before publishing: confirm contact routes, service area, services/prices, Louise’s biography, photo permissions and privacy contact. Complete privacy notice with selected hosting provider, correspondence providers and retention period. Test actual configured email, telephone and WhatsApp links. Review layout on Android/iPhone and desktop. See DEPLOYMENT.md. Production deployment and DNS changes require owner approval.
