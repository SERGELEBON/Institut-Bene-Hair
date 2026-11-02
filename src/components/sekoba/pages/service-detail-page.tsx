"use client";

import Image from "next/image";
import PageHero from "../page-hero";
import Reveal from "../reveal";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaMagic,
  FaPhoneAlt,
  FaRegClock,
  FaSmile,
  FaStar,
  FaWhatsapp,
} from "../icons";
import {
  SERVICES,
  getServiceBySlug,
  whatsappReservation,
  type Service,
} from "@/lib/services-data";

const CTA_PRIMARY =
  "inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-gold-400/70 bg-gold-300/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_10px_25px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:shadow-[0_16px_34px_rgba(168,124,34,0.24),inset_0_1px_0_rgba(255,245,221,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";

const CTA_SECONDARY =
  "inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-gold-500/22 bg-cream-50/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_7px_18px_rgba(44,43,19,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white hover:shadow-[0_12px_24px_rgba(44,43,19,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";

const BON_A_SAVOIR = [
  {
    icon: FaMagic,
    title: "Consultation offerte",
    text: "Avant chaque prestation, nous échangeons avec vous pour définir le résultat idéal et la technique adaptée.",
  },
  {
    icon: FaStar,
    title: "Produits professionnels",
    text: "Nous travaillons exclusivement avec des produits de qualité, sélectionnés pour respecter votre chevelure.",
  },
  {
    icon: FaSmile,
    title: "Accueil soigné",
    text: "Boissons offertes, ambiance apaisante et équipe à l'écoute : votre confort fait partie de la prestation.",
  },
];

function ServiceNotFound() {
  return (
    <main className="bg-cream-100">
      <section className="mx-auto flex min-h-[70svh] max-w-[42rem] flex-col items-center justify-center px-5 py-28 text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-600">
          Page introuvable
        </p>
        <h1 className="mt-4 font-serif text-[2.4rem] font-bold leading-[0.95] text-brown-900 sm:text-[3rem]">
          Cette prestation n&apos;existe pas
        </h1>
        <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.75] text-brown-700">
          Le service que vous cherchez a peut-être été renommé. Découvrez
          l&apos;ensemble de nos prestations pour retrouver votre bonheur.
        </p>
        <a href="#/services" className={`${CTA_PRIMARY} mt-9 sm:w-auto`}>
          <FaChevronLeft className="rotate-180 text-[0.9rem]" aria-hidden="true" />
          Voir tous les services
        </a>
      </section>
    </main>
  );
}

function AutreServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={`#/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-gold-500/16 bg-[linear-gradient(180deg,rgba(255,251,244,0.98)_0%,rgba(251,245,232,0.95)_100%)] shadow-[0_18px_44px_rgba(44,43,19,0.1)] transition-transform duration-300 ease-out hover:-translate-y-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
      aria-label={`Découvrir la prestation ${service.title}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
        <Image
          src={service.image}
          alt={service.title}
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 46vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: service.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0)_0%,rgba(44,43,19,0.08)_100%)]" />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="flex items-center gap-2 text-brown-600">
          <FaRegClock className="text-[0.7rem] text-[#d6ad54]" aria-hidden="true" />
          <span className="text-[0.8rem] font-medium">{service.duration}</span>
        </div>
        <h4 className="mt-3 font-serif text-[1.15rem] font-bold leading-tight text-brown-900 sm:text-[1.25rem]">
          {service.title}
        </h4>
        <span className="mt-4 inline-flex items-center gap-2 self-start text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold-600 transition-colors duration-200 group-hover:text-gold-700">
          Découvrir
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return <ServiceNotFound />;

  const heroImage = service.gallery[0];
  const gallery = service.gallery;
  const autres = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <PageHero
        eyebrow="Nos Prestations"
        title={service.title}
        subtitle={service.tagline}
        image={heroImage.src}
        imageAlt={heroImage.alt}
        imagePosition="center 30%"
        breadcrumb={[
          { label: "Accueil", href: "#/" },
          { label: "Services", href: "#/services" },
          { label: service.title },
        ]}
      />

      {/* Description détaillée */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_60%,#ede7d5_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-16">
            {/* Texte principal */}
            <Reveal>
              <div className="mb-7 flex max-w-[30rem] items-center justify-start gap-4 text-gold-500">
                <div aria-hidden="true" className="h-[2px] w-16 shrink-0 rounded-full bg-gold-500 sm:w-20" />
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.36em] text-gold-500 sm:text-xs">
                  La prestation
                </span>
              </div>

              <h2 className="max-w-[18ch] font-serif text-[2.2rem] leading-[0.94] text-brown-900 sm:text-[2.6rem] lg:text-[3rem]">
                {service.title} chez Bene Hair
              </h2>

              <div className="mt-7 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />

              <p className="mt-8 max-w-[36rem] text-[1.02rem] leading-[1.8] text-brown-700 sm:text-[1.06rem]">
                {service.intro}
              </p>

              <div className="mt-10 space-y-8">
                {service.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="flex items-center gap-3 font-serif text-[1.45rem] font-bold leading-tight text-brown-900 sm:text-[1.6rem]">
                      <span aria-hidden="true" className="h-[2px] w-8 shrink-0 rounded-full bg-gold-500" />
                      {section.title}
                    </h3>
                    <p className="mt-3 max-w-[36rem] pl-11 text-[0.96rem] leading-[1.75] text-brown-600 sm:text-[1rem]">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Prestations incluses */}
              <div className="mt-11 rounded-[1.55rem] border border-gold-500/18 bg-[rgba(255,251,244,0.86)] p-6 shadow-[0_16px_40px_rgba(44,43,19,0.08)] sm:p-8">
                <h3 className="font-serif text-[1.45rem] font-bold text-brown-900 sm:text-[1.6rem]">
                  Ce que comprend notre prestation
                </h3>
                <div className="mt-2 h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.prestations.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.93rem] leading-[1.55] text-brown-700"
                    >
                      <FaCheckCircle
                        className="mt-[0.2rem] shrink-0 text-[0.85rem] text-gold-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Carte réservation latérale */}
            <Reveal className="lg:pl-2" y={26}>
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[1.85rem] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(252,247,236,0.85))] shadow-[0_24px_60px_rgba(44,43,19,0.12),inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <div className="relative aspect-[16/11] overflow-hidden bg-cream-200">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: "center 32%" }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0)_52%,rgba(44,43,19,0.22)_100%)]" />
                  </div>

                  <div className="px-6 py-7 sm:px-8">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-brown-700">
                        <FaRegClock className="text-[0.85rem] text-[#d6ad54]" aria-hidden="true" />
                        <span className="text-[0.9rem] font-semibold">Durée indicative</span>
                      </div>
                      <span className="rounded-full border border-gold-500/25 bg-gold-500/8 px-3 py-1 text-[0.78rem] font-semibold text-brown-900">
                        {service.duration}
                      </span>
                    </div>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-gold-500/35 via-gold-500/14 to-transparent" />

                    <p className="mt-5 text-[0.9rem] leading-[1.65] text-brown-600">
                      Le tarif dépend de la longueur, de la matière et de la
                      complexité de la prestation. Écrivez-nous pour un devis
                      rapide et personnalisé.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={whatsappReservation(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={CTA_PRIMARY}
                      >
                        <FaWhatsapp className="text-[1.1rem]" aria-hidden="true" />
                        Réserver cette prestation
                      </a>
                      <a href="tel:+225707837795" className={CTA_SECONDARY}>
                        <FaPhoneAlt className="text-[0.85rem]" aria-hidden="true" />
                        07 07 83 77 95
                      </a>
                    </div>

                    <p className="mt-5 text-center text-[0.8rem] leading-[1.6] text-brown-500">
                      Ou passez nous voir : Abidjan, Côte d&apos;Ivoire — du lundi
                      au samedi.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galerie de la prestation */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-[4.5rem]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="px-4 pb-10 text-center sm:px-8 lg:pb-12">
            <div className="mx-auto mb-6 flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
                En images
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            <h2 className="mx-auto max-w-[16ch] font-serif text-[2.05rem] font-bold leading-[0.95] text-brown-900 sm:text-[2.7rem] lg:max-w-none lg:text-[3.4rem]">
              La Prestation en Images
            </h2>
            <p className="mx-auto mt-6 max-w-[46rem] text-[0.92rem] leading-[1.75] text-brown-700 sm:text-[1rem] lg:text-[1.06rem]">
              Du geste de l&apos;atelier au résultat final : un aperçu de ce qui
              vous attend au fauteuil.
            </p>
          </Reveal>

          <Reveal y={18}>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`group overflow-hidden rounded-[1.6rem] border border-gold-500/15 bg-cream-50/80 shadow-[0_20px_50px_rgba(44,43,19,0.1)] ${
                    i === 0 ? "md:row-span-1" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0)_62%,rgba(44,43,19,0.18)_100%)]" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bon à savoir */}
      <section className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 pb-14 pt-2 sm:px-7 sm:pb-16 lg:px-8 lg:pb-[4.5rem]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-5 md:grid-cols-3">
            {BON_A_SAVOIR.map((item) => (
              <Reveal key={item.title}>
                <div className="h-full rounded-[1.45rem] border border-gold-500/18 bg-cream-50/92 px-6 py-7 text-center shadow-[0_14px_30px_rgba(58,40,14,0.08)]">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/8 text-gold-500">
                    <item.icon className="text-[1.2rem]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-[1.3rem] text-brown-900">{item.title}</h3>
                  <p className="mx-auto mt-3 max-w-[17rem] text-[0.88rem] leading-[1.65] text-brown-700">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Autres prestations */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_58%,#ede7d5_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-[4.5rem]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
        <div className="relative z-10 mx-auto max-w-[1680px]">
          <Reveal className="px-4 pb-9 text-center sm:px-8">
            <div className="mx-auto mb-6 flex max-w-[31rem] items-center justify-center gap-5 text-gold-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.4em] sm:text-[11px]">
                Poursuivre la découverte
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            <h2 className="mx-auto max-w-[18ch] font-serif text-[1.95rem] font-bold leading-[0.94] text-brown-900 sm:text-[2.5rem] lg:max-w-none lg:text-[3rem]">
              Nos Autres Prestations
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
            {autres.map((s) => (
              <Reveal key={s.slug}>
                <AutreServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a href="#/services" className={`${CTA_SECONDARY} sm:w-auto`}>
              <FaChevronLeft className="text-[0.85rem]" aria-hidden="true" />
              Retour aux services
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8">
        <Reveal className="mx-auto max-w-[60rem]">
          <div className="rounded-[1.85rem] border border-gold-500/16 bg-[rgba(255,251,244,0.9)] px-6 py-9 text-center shadow-[0_20px_56px_rgba(44,43,19,0.09)] sm:px-10 sm:py-11">
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-500">
              {service.title}
            </p>
            <h2 className="mx-auto max-w-[18ch] font-serif text-[1.9rem] font-bold leading-[0.95] text-brown-900 sm:text-[2.4rem] lg:text-[2.8rem]">
              Prête à Réserver Votre Créneau ?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <p className="mx-auto mt-4 max-w-[34rem] text-[0.92rem] leading-[1.7] text-brown-700">
              Envoyez-nous un message avec la prestation souhaitée : nous vous
              confirmons un rendez-vous rapidement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappReservation(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CTA_PRIMARY} sm:w-auto`}
              >
                <FaWhatsapp className="text-[1.1rem]" aria-hidden="true" />
                Réserver sur WhatsApp
              </a>
              <a href="#/contact" className={`${CTA_SECONDARY} sm:w-auto`}>
                Via le formulaire
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
