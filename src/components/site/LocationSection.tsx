import { BUSINESS, whatsappUrl } from "@/lib/business";
import { useI18n } from "@/lib/i18n";
import { CtaAnchor } from "./Cta";
import studioImg from "@/assets/studio.jpg";

/**
 * Contact block. No street address is published yet, so the left column leads
 * with the service area and the direct contact routes instead; drop an
 * `<address>` back in here once the business confirms one.
 */
export function LocationSection() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border bg-ivory px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="display text-[clamp(2.75rem,8vw,6rem)] uppercase">
            {t.location.title}
            <br />
            <span className="text-warmgrey">{t.location.titleTwo}</span>
          </h2>

          <dl className="mt-10 space-y-4 text-lg leading-relaxed text-charcoal">
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3">
              <dt className="eyebrow text-warmgrey">{t.location.area}</dt>
              <dd>
                {BUSINESS.region} · {BUSINESS.area}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3">
              <dt className="eyebrow text-warmgrey">{t.location.call}</dt>
              <dd>
                <a href={`tel:${BUSINESS.phoneDial}`} className="line-hover">
                  {BUSINESS.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3">
              <dt className="eyebrow text-warmgrey">{t.location.whatsapp}</dt>
              <dd>
                <a
                  href={whatsappUrl(t.location.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="line-hover"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-border pt-6">
            <p className="eyebrow text-clay">{t.location.openEvery}</p>
            <p className="display mt-2 text-4xl">{t.location.byAppointment}</p>
            <ul className="mt-6 grid gap-1 text-sm text-warmgrey sm:grid-cols-2">
              {t.location.days.map((d) => (
                <li key={d} className="flex justify-between gap-4 border-b border-border/60 py-1">
                  <span>{d}</span>
                  <span>{t.location.byAppointment}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-warmgrey">
              {t.location.availabilityNote}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaAnchor href={whatsappUrl(t.location.whatsappMessage)} variant="solid">
              {t.location.directions}
            </CtaAnchor>
            <CtaAnchor href={`tel:${BUSINESS.phoneDial}`} external={false} variant="outline">
              {t.location.call} · {BUSINESS.phoneDisplay}
            </CtaAnchor>
          </div>
        </div>

        <div className="h-[420px] w-full overflow-hidden bg-cream md:h-full md:min-h-[540px]">
          <img
            src={studioImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
