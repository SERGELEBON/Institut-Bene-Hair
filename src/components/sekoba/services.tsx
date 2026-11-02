import Image from "next/image";
import Reveal from "./reveal";
import { FaPhoneAlt, FaRegClock, FaWhatsapp } from "./icons";
import { SERVICES, whatsappReservation, type Service } from "@/lib/services-data";

const WHATSAPP_BASE = "https://wa.me/2250707837795";

const DETAIL_BTN =
  "inline-flex min-h-[3.35rem] w-full items-center justify-center rounded-[0.9rem] border border-gold-500/20 bg-cream-50/90 px-3 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-brown-900 shadow-[0_7px_18px_rgba(44,43,19,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white hover:shadow-[0_12px_24px_rgba(44,43,19,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200";

const RESA_BTN =
  "inline-flex min-h-[3.35rem] w-full items-center justify-center rounded-[0.9rem] border border-gold-400/70 bg-gold-300/80 px-3 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-brown-900 shadow-[0_9px_21px_rgba(200,152,48,0.18),inset_0_1px_0_rgba(255,245,221,0.45)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:text-brown-900 hover:shadow-[0_13px_28px_rgba(168,124,34,0.22),inset_0_1px_0_rgba(255,245,221,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_58%,#ede7d5_100%)] px-5 py-11 sm:px-7 sm:py-12 lg:px-8 lg:py-14"
    >
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,251,244,0.08)_48%,rgba(200,152,48,0.08)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1680px]">
        {/* En-tête */}
        <Reveal className="px-4 py-8 text-center sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto mb-7 flex max-w-[31rem] items-center justify-center gap-5 text-gold-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.4em] sm:text-[11px]">
              Nos prestations
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="mx-auto max-w-[18ch] font-serif text-[2rem] font-bold leading-[0.92] text-brown-900 sm:text-[2.7rem] lg:max-w-none lg:text-[3.35rem]">
            L&apos;Excellence à Votre Service
          </h2>
        </Reveal>

        {/* Cartes */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-gold-500/16 bg-[linear-gradient(180deg,rgba(255,251,244,0.98)_0%,rgba(251,245,232,0.95)_100%)] shadow-[0_18px_44px_rgba(44,43,19,0.1)] transition-transform duration-300 ease-out hover:-translate-y-[3px]">
                <div className="relative overflow-hidden bg-cream-200">
                  <div className="relative aspect-[1.08/1] overflow-hidden sm:aspect-[1.14/1]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ objectPosition: service.objectPosition }}
                    />
                    {/* Toute l'image mène à la page du service */}
                    <a
                      href={`#/services/${service.slug}`}
                      className="absolute inset-0 z-10"
                      aria-label={`Découvrir la prestation ${service.title}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0)_0%,rgba(44,43,19,0.08)_100%)]" />
                </div>

                <div className="flex flex-1 flex-col px-7 pb-7 pt-7 sm:px-8">
                  <div className="flex items-center gap-2 text-brown-600">
                    <FaRegClock className="text-[0.72rem] text-[#d6ad54]" />
                    <span className="text-[0.86rem] font-medium">{service.duration}</span>
                  </div>
                  <div className="mt-4 h-px w-24 bg-gradient-to-r from-gold-500/65 to-transparent" />
                  <h3 className="mt-6 min-h-[1.1em] font-serif text-[1.2rem] leading-[1.05] text-brown-900 sm:text-[2.05rem] md:text-[1.2rem] lg:text-[1.6rem] xl:text-[1.4rem]">
                    {service.title}
                  </h3>
                  <p className="mt-5 flex-1 text-[0.95rem] leading-[1.68] text-brown-700">
                    {service.description}
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                    <a
                      className={DETAIL_BTN}
                      href={`#/services/${service.slug}`}
                      aria-label={`Voir le détail de la prestation ${service.title}`}
                    >
                      <span className="leading-tight">Voir le détail</span>
                    </a>
                    <a
                      href={whatsappReservation(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={RESA_BTN}
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bannière sur-mesure */}
        <Reveal className="mt-10">
          <div className="rounded-[1.85rem] border border-gold-500/16 bg-[rgba(255,251,244,0.86)] px-6 py-7 shadow-[0_20px_56px_rgba(44,43,19,0.09)] sm:px-8 sm:py-8 lg:px-10 lg:py-9">
            <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:items-center xl:gap-8">
              <div className="max-w-[46rem]">
                <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-500">
                  Conseil personnalisé
                </p>
                <h3 className="font-serif text-[1.76rem] font-bold leading-[0.92] text-brown-900 sm:text-[2.15rem] lg:text-[2.35rem] lg:whitespace-nowrap">
                  Une Prestation Sur-Mesure ?
                </h3>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />
                <p className="mt-3 max-w-[30rem] text-[0.86rem] leading-[1.55] text-brown-700 sm:text-[0.92rem]">
                  Contactez-nous pour créer votre coiffure idéale.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row xl:justify-self-end xl:w-auto">
                <a
                  href="tel:+225707837795"
                  className="group inline-flex min-h-[74px] w-full items-center gap-3 rounded-[1rem] border border-gold-500/28 bg-cream-50 px-5 py-3 text-brown-900 transition-all duration-200 hover:border-gold-500 hover:bg-white hover:shadow-[0_12px_28px_rgba(44,43,19,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:flex-1 xl:w-auto xl:flex-none"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-[0.95rem] text-gold-600 transition-colors duration-200 group-hover:bg-gold-500/16">
                    <FaPhoneAlt />
                  </span>
                  <span className="min-w-0 flex flex-col text-left">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brown-600">
                      Reservation
                    </span>
                    <span className="mt-1 whitespace-nowrap text-[0.9rem] font-semibold leading-none text-brown-900 sm:text-[0.96rem]">
                      07 07 83 77 95
                    </span>
                  </span>
                </a>

                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    "Bonjour, je souhaite reserver une prestation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[74px] w-full items-center gap-3 rounded-[1rem] border border-gold-400/70 bg-gold-300/80 px-5 py-3 text-brown-900 transition-all duration-200 hover:border-gold-400 hover:bg-gold-300 hover:shadow-[0_12px_28px_rgba(44,43,19,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:flex-1 xl:w-auto xl:flex-none"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brown-900/8 text-[0.95rem] transition-colors duration-200 group-hover:bg-brown-900/14">
                    <FaWhatsapp />
                  </span>
                  <span className="min-w-0 flex flex-col text-left">
                    <span className="whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brown-700/70">
                      Message rapide
                    </span>
                    <span className="mt-1 whitespace-nowrap text-[0.9rem] font-semibold leading-none sm:text-[0.96rem]">
                      WhatsApp
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
