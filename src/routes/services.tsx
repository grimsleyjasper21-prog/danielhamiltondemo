import { createFileRoute } from "@tanstack/react-router";
import { ServiceMenu } from "@/components/site/ServiceMenu";
import { CtaLink } from "@/components/site/Cta";
import { useI18n } from "@/lib/i18n";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Sessions & prices · Daniel Hamilton Massage, Mallorca" },
      {
        name: "description",
        content:
          "Massage session menu in Mallorca: deep tissue and sports work, relaxation, mobility and recovery, and full-body rituals, with indicative durations and prices.",
      },
      { property: "og:title", content: "Sessions & prices · Daniel Hamilton Massage, Mallorca" },
      {
        property: "og:description",
        content:
          "Deep, relaxing, mobility and ritual massage sessions in Mallorca — the full menu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="px-5 pb-32 pt-28 md:px-10 md:pt-36">
      <header className="mx-auto max-w-[1600px] pb-12">
        <p className="eyebrow text-clay">
          {BUSINESS.region} · {BUSINESS.area}
        </p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,10rem)] uppercase">{t.services.title}</h1>
        <p className="body-copy mt-6 max-w-lg">{t.services.lead}</p>
      </header>

      <ServiceMenu />

      <div className="mx-auto mt-20 flex max-w-[1600px] flex-wrap gap-3">
        <CtaLink to="/book">{t.hero.book}</CtaLink>
      </div>
    </div>
  );
}
