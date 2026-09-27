import type { Lang } from "./i18n";

/**
 * ILLUSTRATIVE DEMO MENU.
 *
 * The treatments, durations and prices below are placeholder content for the
 * demonstration only — they are NOT confirmed information from the business.
 * Replace this array with the real menu when it is supplied; nothing else in
 * the app needs to change.
 *
 * price kinds:
 *  - "duration" one price per session length (the normal case for massage)
 *  - "fixed"    a single price, session length confirmed on booking
 *  - "range"    a price band, e.g. for packages
 */
export type Price =
  | { kind: "fixed"; amount: number }
  | { kind: "range"; from: number; to: number }
  | { kind: "duration"; options: { minutes: number; amount: number }[] };

export type CategoryId = "deep" | "relax" | "mobility" | "ritual";

export type Service = {
  id: string;
  category: CategoryId;
  name: Record<Lang, string>;
  price: Price;
};

export const CATEGORY_ORDER: CategoryId[] = ["deep", "relax", "mobility", "ritual"];

export const SERVICES: Service[] = [
  {
    id: "descontracturante",
    category: "deep",
    name: {
      es: "Masaje descontracturante",
      en: "Deep tissue massage",
      de: "Verspannungsmassage",
      fr: "Massage décontracturant",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 45, amount: 55 },
        { minutes: 60, amount: 70 },
        { minutes: 90, amount: 95 },
      ],
    },
  },
  {
    id: "deportivo",
    category: "deep",
    name: {
      es: "Masaje deportivo",
      en: "Sports massage",
      de: "Sportmassage",
      fr: "Massage sportif",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 45, amount: 55 },
        { minutes: 60, amount: 70 },
        { minutes: 90, amount: 95 },
      ],
    },
  },
  {
    id: "espalda-cuello",
    category: "deep",
    name: {
      es: "Espalda, cuello y hombros",
      en: "Back, neck and shoulders",
      de: "Rücken, Nacken und Schultern",
      fr: "Dos, nuque et épaules",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 30, amount: 40 },
        { minutes: 45, amount: 55 },
      ],
    },
  },
  {
    id: "tejido-profundo",
    category: "deep",
    name: {
      es: "Trabajo de tejido profundo",
      en: "Deep tissue focus work",
      de: "Tiefengewebs-Arbeit",
      fr: "Travail en profondeur",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 60, amount: 75 },
        { minutes: 90, amount: 100 },
      ],
    },
  },

  {
    id: "relajante",
    category: "relax",
    name: {
      es: "Masaje relajante",
      en: "Relaxing massage",
      de: "Entspannungsmassage",
      fr: "Massage relaxant",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 60, amount: 65 },
        { minutes: 90, amount: 90 },
      ],
    },
  },
  {
    id: "aromaterapia",
    category: "relax",
    name: {
      es: "Masaje con aromaterapia",
      en: "Aromatherapy massage",
      de: "Aromatherapie-Massage",
      fr: "Massage à l'aromathérapie",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 60, amount: 70 },
        { minutes: 90, amount: 95 },
      ],
    },
  },
  {
    id: "piedras",
    category: "relax",
    name: {
      es: "Masaje con piedras calientes",
      en: "Hot stone massage",
      de: "Hot-Stone-Massage",
      fr: "Massage aux pierres chaudes",
    },
    price: { kind: "duration", options: [{ minutes: 75, amount: 85 }] },
  },
  {
    id: "craneofacial",
    category: "relax",
    name: {
      es: "Craneofacial y cervical",
      en: "Head, face and neck",
      de: "Kopf, Gesicht und Nacken",
      fr: "Crânien, visage et nuque",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 30, amount: 40 },
        { minutes: 45, amount: 50 },
      ],
    },
  },

  {
    id: "estiramientos",
    category: "mobility",
    name: {
      es: "Masaje con estiramientos",
      en: "Massage with assisted stretching",
      de: "Massage mit Dehnung",
      fr: "Massage avec étirements",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 60, amount: 70 },
        { minutes: 90, amount: 95 },
      ],
    },
  },
  {
    id: "piernas",
    category: "mobility",
    name: {
      es: "Piernas cansadas",
      en: "Tired legs",
      de: "Müde Beine",
      fr: "Jambes lourdes",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 45, amount: 55 },
        { minutes: 60, amount: 70 },
      ],
    },
  },
  {
    id: "ventosas",
    category: "mobility",
    name: {
      es: "Masaje con ventosas",
      en: "Cupping massage",
      de: "Schröpfmassage",
      fr: "Massage aux ventouses",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 45, amount: 60 },
        { minutes: 60, amount: 75 },
      ],
    },
  },
  {
    id: "recuperacion",
    category: "mobility",
    name: {
      es: "Recuperación post-esfuerzo",
      en: "Post-training recovery",
      de: "Regeneration nach dem Sport",
      fr: "Récupération après l'effort",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 30, amount: 40 },
        { minutes: 60, amount: 70 },
      ],
    },
  },

  {
    id: "ritual-cuerpo",
    category: "ritual",
    name: {
      es: "Ritual completo de cuerpo",
      en: "Full body ritual",
      de: "Ganzkörper-Ritual",
      fr: "Rituel corps complet",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 90, amount: 110 },
        { minutes: 120, amount: 140 },
      ],
    },
  },
  {
    id: "reset",
    category: "ritual",
    name: {
      es: "Sesión reset",
      en: "Reset session",
      de: "Reset-Session",
      fr: "Séance reset",
    },
    price: {
      kind: "duration",
      options: [
        { minutes: 60, amount: 70 },
        { minutes: 90, amount: 95 },
      ],
    },
  },
  {
    id: "express",
    category: "ritual",
    name: {
      es: "Sesión express",
      en: "Express session",
      de: "Express-Session",
      fr: "Séance express",
    },
    price: { kind: "duration", options: [{ minutes: 30, amount: 40 }] },
  },
];

// A range with identical ends is really a single price — normalise it.
for (const s of SERVICES) {
  if (s.price.kind === "range" && s.price.from === s.price.to) {
    s.price = { kind: "fixed", amount: s.price.from };
  }
}

export function servicesByCategory(category: CategoryId) {
  return SERVICES.filter((s) => s.category === category);
}

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}

export function euro(amount: number) {
  return `€${amount}`;
}

export function priceLabel(price: Price) {
  if (price.kind === "fixed") return euro(price.amount);
  if (price.kind === "range") return `${euro(price.from)}–${euro(price.to)}`;
  const first = price.options[0]!;
  const last = price.options[price.options.length - 1]!;
  if (price.options.length === 1) return euro(first.amount);
  return `${euro(first.amount)}–${euro(last.amount)}`;
}

/** How many people one request can cover. */
export const PEOPLE_OPTIONS = [1, 2, 3, 4];

/** Booking record shape — ready for a database / calendar integration later. */
export type BookingDraft = {
  service_id: string;
  service_name: string;
  duration: number | null;
  people: number;
  price: number | null;
  total: number | null;
  date: string | null;
  start_time: string | null;
  end_time: string | null;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  notes: string;
  status: "draft" | "requested";
};

export function emptyBooking(): BookingDraft {
  return {
    service_id: "",
    service_name: "",
    duration: null,
    people: 1,
    price: null,
    total: null,
    date: null,
    start_time: null,
    end_time: null,
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    notes: "",
    status: "draft",
  };
}

/** Demo availability only — not synchronised with a real diary. */
export const DEMO_SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30"];

export function addMinutes(time: string, minutes: number | null) {
  if (!minutes) return null;
  const [h = 0, m = 0] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const hh = String(Math.floor(total / 60) % 24).padStart(2, "0");
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}
