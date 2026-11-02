"use client";

import Image from "next/image";
import Reveal from "./reveal";
import { FaRegClock } from "./icons";

const DETAIL_LINK =
  "inline-flex min-h-[3.35rem] items-center justify-center gap-2 rounded-full border border-gold-400/70 bg-gold-300/80 px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_9px_21px_rgba(200,152,48,0.18),inset_0_1px_0_rgba(255,245,221,0.45)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:shadow-[0_13px_28px_rgba(168,124,34,0.22),inset_0_1px_0_rgba(255,245,221,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";

type WigCard = {
  image: string;
  alt: string;
  badge: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  /** Position de recadrage de l'image */
  position: string;
  /** Décalage vertical décoratif sur desktop */
  offset?: boolean;
};

const WIG_CARDS: WigCard[] = [
  {
    image: "/images/bene-wigs-showcase.jpg",
    alt: "Vitrine Bene Hair : mannequins de perruques premium autour de la fondatrice, décor or et crème",
    badge: "Collection signature",
    title: "Luxury Wigs Bene Hair",
    text: "Notre vitrine de perruques premium : lace fondante, densités sur mesure et finitions haute couture. Beauty, Confidence, You.",
    cta: "Découvrir la collection",
    href: "#/services/perruques-coupes-confection",
    position: "center 30%",
  },
  {
    image: "/images/bene-afro-wig.jpg",
    alt: "Perruque afro bouclée volumineuse sur mannequin, signée Bene Hair",
    badge: "Prêtes à porter",
    title: "Perruques Afro & Bouclées",
    text: "Des textures afro volumineuses et naturelles, ajustées et coiffées à la main pour un rendu impeccable dès la pose.",
    cta: "Voir les perruques",
    href: "#/services/perruques-coupes-confection",
    position: "center 22%",
    offset: true,
  },
];

export default function WigCards() {
  return (
    <section
      id="boutique"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ede7d5_0%,#f5f1e6_42%,#fbf9f3_100%)] px-5 py-12 sm:px-7 sm:py-14 lg:px-8 lg:py-16"
    >
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,251,244,0.06)_55%,rgba(255,255,255,0.22)_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* En-tête */}
        <Reveal className="px-4 pb-9 text-center sm:px-8 sm:pb-11">
          <div className="mx-auto mb-6 flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
              Bene Hair Boutique
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="mx-auto max-w-[16ch] font-serif text-[2rem] font-bold leading-[0.94] text-brown-900 sm:text-[2.6rem] lg:max-w-none lg:text-[3.1rem]">
            Nos Perruques en Vedette
          </h2>
          <p className="mx-auto mt-5 max-w-[44rem] text-[0.92rem] leading-[1.75] text-brown-700 sm:text-[0.98rem]">
            Luxury wigs, beauty lives here — découvrez nos créations phares,
            confectionnées et coiffées à la main dans notre institut.
          </p>
        </Reveal>

        {/* Cartes */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {WIG_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <a
                href={card.href}
                aria-label={`${card.title} — découvrir la prestation perruques`}
                className={`group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-gold-500/16 bg-[linear-gradient(180deg,rgba(255,251,244,0.98)_0%,rgba(251,245,232,0.95)_100%)] shadow-[0_18px_44px_rgba(44,43,19,0.1)] transition-transform duration-300 ease-out hover:-translate-y-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 ${
                  card.offset ? "md:mt-10" : ""
                }`}
              >
                {/* Visuel */}
                <div className="relative overflow-hidden bg-cream-200">
                  <div className="relative aspect-[4/5] sm:aspect-[5/4.4]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: card.position }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0)_55%,rgba(44,43,19,0.24)_100%)]" />
                  </div>
                  {/* Badge */}
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-gold-400/60 bg-[rgba(255,252,245,0.92)] px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-brown-900 shadow-[0_8px_18px_rgba(44,43,19,0.14)]">
                    {card.badge}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-8">
                  <h3 className="font-serif text-[1.45rem] font-bold leading-[1.05] text-brown-900 sm:text-[1.7rem]">
                    {card.title}
                  </h3>
                  <div className="mt-3 h-px w-20 bg-gradient-to-r from-gold-500/65 to-transparent" />
                  <p className="mt-4 flex-1 text-[0.92rem] leading-[1.7] text-brown-700">
                    {card.text}
                  </p>
                  <span className="mt-6 inline-flex min-h-[3.35rem] w-full items-center justify-center gap-2 rounded-[0.9rem] border border-gold-500/20 bg-cream-50/90 px-3 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-brown-900 shadow-[0_7px_18px_rgba(44,43,19,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out group-hover:border-gold-500/40 group-hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100">
                    {card.cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Lien secondaire */}
        <Reveal className="mt-9 flex flex-col items-center gap-3 text-center">
          <a href="#/services/perruques-coupes-confection" className={DETAIL_LINK}>
            <FaRegClock className="text-[0.8rem] text-[#d6ad54]" aria-hidden="true" />
            Confection & pose sur mesure
          </a>
          <p className="text-[0.8rem] leading-[1.6] text-brown-600">
            Chaque perruque est ajustée à votre tête — durée indicative :
            1h - 3h.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
