/**
 * Central business configuration — the single source of truth for the site.
 *
 * Only information supplied by the business is stored here. No street address
 * is published yet, so every block that used to render one is written to work
 * without it; add `street`, `postal`, `city` and a maps query here later and
 * the location section can be extended in one place.
 */
export const BUSINESS = {
  name: "Daniel Hamilton Massage",
  shortName: "Daniel Hamilton",
  wordmark: "DANIEL HAMILTON",
  region: "Mallorca",
  area: "Illes Balears",
  country: "ES",
  phoneDisplay: "689 57 85 12",
  phoneDial: "+34689578512",
  whatsapp: "34689578512",
} as const;

/**
 * Demo notice shown in the footer. Fixed wording, shown in every language on
 * purpose, so it cannot drift between translations.
 */
export const DEMO_DISCLAIMER =
  "Web de demostración. Algunos servicios, precios, imágenes y contenidos son orientativos y pueden adaptarse a la información definitiva del negocio.";

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
