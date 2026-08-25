# Demo-Dental.com (dental-clone)

Client-demo clone of dental.com. All branding says **Demo-Dental.com** — never revert to Dental.com.

## Stack & Run

- React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + motion + react-router-dom v7
- Install: `npm install`
- Dev server: port 3000 is usually taken by another app → use `npx vite --port=3001 --host=0.0.0.0`
- Tailscale access: http://100.78.185.52:3001 (IP from `tailscale ip -4`)
- Typecheck: `npx tsc --noEmit` (there's no test suite; lint = typecheck)
- Vite HMR picks up edits live — no server restart needed

## Deployment (GitHub Pages)

- Live site: https://rajveer-adpaikar.github.io/demo-dental-v2/ — repo `Rajveer-Adpaikar/demo-dental-v2`, Pages serves the `gh-pages` branch root
- Redeploy after changes: `npm run build && npx gh-pages -d dist --dotfiles`, then push source to `main`
- CDN lag is real: right after publishing, Pages can serve a stale bundle for a couple minutes even when the build API reports success — poll for the new hashed asset name in `curl`ed HTML before concluding a deploy failed; force with `gh api repos/:owner/:repo/pages/builds -X POST`
- `vite.config.ts` hardcodes `base: '/demo-dental-v2/'` and `App.tsx` passes it to `<BrowserRouter basename={import.meta.env.BASE_URL}>` — these two must stay in sync. If the repo/site name ever changes, change BOTH or you get either broken assets or "No routes matched" (router renders only header/footer)
- Never use root-absolute hrefs (`/#services`) anywhere — they escape the `/demo-dental-v2/` base on Pages. Use page-relative (`#services`). This bit Header/Footer nav once already
- Deep links like `/privacy-policy` 404 on refresh (no SPA fallback on Pages); client-side navigation works fine. Add the `404.html` redirect trick if direct legal-page links are ever needed

## Architecture

- `src/config.ts` — single source of truth: `CAL_COM_URL` (Cal.com event slug, currently `"envoyc/demo-dental"`; if emptied again the booking modal shows a "coming soon" panel), contact emails, emergency phone
- `src/booking.tsx` — `BookingProvider` wraps the app in `App.tsx`; components call `useBooking()` → opens `BookingModal`
- Booking buttons across Header/Hero/SmartScan/Footer all route through `openBooking()` — don't wire them to links directly
- `src/components/BookingModal.tsx` — Cal.com **inline embed** (official loader IIFE injected once per page load, calendar mounts into a container div on every modal open). Do NOT swap back to a plain `<iframe src>` — the client chose the inline embed
- Legal pages at `/privacy-policy`, `/terms-of-service`, `/hipaa`

## Cal.com Embed Gotchas

- Modal must stay ≥ ~900px wide (`max-w-5xl`). At `max-w-3xl` (768px) Cal's month_view collapses everything into one narrow left column — this bit us once already
- Use the official loader IIFE verbatim from Cal.com's embed snippet. A hand-simplified version breaks `Cal.ns["demo-dental"]` ("not a function") because namespace queueing lives in that IIFE
- The embed re-mounts on each modal open via `Cal.ns[...]("inline", ...)` — idempotent, safe to call repeatedly; don't add key-based remounting on top
- Verify embed renders by checking for `cal-inline` custom element + inner iframe in Playwright (`browser_evaluate`), not screenshots

## Gotchas

- Phone numbers must be dummy values (`+91 12345 67890`) — a realistic-looking number turned out to be someone's real number once already
- Footer/nav anchors: only `#services` and `#smart-scan` exist. There is NO `#providers` section — link provider items to `#services`
- Mobile QA method that works here: Playwright `browser_resize` + `browser_evaluate` measuring `getBoundingClientRect()` against `window.innerWidth` (skip elements under `pointer-events-none`). Screenshot reading is unreliable in this environment — DOM measurement via `browser_evaluate` is the reliable check (screenshots saved but unreadable)
- Floating hero cards ("Health Score", "AI Analysis") use negative offsets — keep `-right-*` / `-left-*` ≥ -3 on mobile or they go off-screen; AI Analysis card is `hidden sm:block` deliberately
- Touch targets: footer links use `py-2`+ padding to stay ≥40px tall — preserve when editing
- The impeccable design hook flags SmartScan's `border-[8px] border-slate-800` as side-tab/border-accent — false positive, it's the phone mockup bezel
