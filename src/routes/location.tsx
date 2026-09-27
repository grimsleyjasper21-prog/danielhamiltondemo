import { createFileRoute } from "@tanstack/react-router";
import { LocationSection } from "@/components/site/LocationSection";
import { useI18n } from "@/lib/i18n";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Contact · Daniel Hamilton Massage, Mallorca" },
      {
        name: "description",
        content:
          "Contact Daniel Hamilton Massage in Mallorca. Call or message on WhatsApp to arrange a session, or book online in under a minute.",
      },
      { property: "og:title", content: "Contact · Daniel Hamilton Massage, Mallorca" },
      {
        property: "og:description",
        content: "Massage and wellness in Mallorca, by appointment. Call or message on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  const { t } = useI18n();
  return (
    <div className="pb-24 pt-28 md:pt-36">
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="eyebrow text-clay">
          {BUSINESS.region} · {BUSINESS.area}
        </p>
        <h1 className="display mt-4 text-[clamp(3rem,10vw,8rem)] uppercase">{t.nav.location}</h1>
      </header>
      <LocationSection />
    </div>
  );
}
