# Build 1 verification

- Dependency installation completed; lockfile included.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed. Static output in dist; JS 243.12 kB / 76.62 kB gzip, CSS 15.61 kB / 4.44 kB gzip.
- Headless system Chromium: Home, Services, About, Gallery, Contact and Privacy rendered at viewport widths 390, 768 and 1440 pixels; one main h1 per view and no horizontal overflow.
- Mobile navigation opened and navigated to Contact.
- Enquiry submission disabled with unconfigured email, as intended.
- No page JavaScript errors observed.
- Desktop screenshot visually reviewed. Screenshots: desktop-preview.png and mobile-preview.png.
- Real iOS/Android devices and configured contact destinations were not tested. No delivery claims are made.
- No production deployment, DNS, database or other application changes performed.
