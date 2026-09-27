# Daniel Hamilton Massage — demonstration site

A demonstration website and booking experience for Daniel Hamilton Massage,
an independent massage and wellness service in Mallorca.

Built with TanStack Start, React 19, Tailwind CSS v4 and `motion/react`.

## Demonstration content

Treatments, durations, prices, availability and imagery in this build are
**illustrative placeholders**, not confirmed information from the business.
They are deliberately kept in two files so they can be replaced in one pass:

- `src/lib/business.ts` — name, contact details, service area, footer notice
- `src/lib/services.ts` — the session menu, prices, people options, demo slots

Copy for all four languages (es / en / de / fr) lives in `src/lib/i18n.tsx`.

No street address is published yet: `LocationSection` is written to work
without one, and leads with the service area and direct contact instead.

## Booking

`src/components/site/BookingFlow.tsx` runs the request journey:

treatment → duration → number of people → date → time → details → send request

The confirmation screen reports **Solicitud enviada** and explains that the
appointment is confirmed over WhatsApp. `submitBooking()` at the bottom of that
file is the single integration point for a real diary or CRM — the loading
state, error state and booking reference already work around it.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
NITRO_PRESET=vercel npm run build
```

Nitro defaults to the `cloudflare-module` preset, so set `NITRO_PRESET=vercel`
when building for Vercel; the output lands in `.vercel/output`.
