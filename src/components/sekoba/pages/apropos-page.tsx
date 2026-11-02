"use client";

import Image from "next/image";
import PageHero from "../page-hero";
import About from "../about";
import Reveal from "../reveal";
import { FaCheckCircle, FaMagic, FaSmile, FaStar, FaWhatsapp } from "../icons";
import { ABOUT_IMAGES } from "@/lib/services-data";

const VALEURS = [
  {
    icon: FaStar,
    title: "Excellence",
    text: "Des gestes maîtrisés, des produits professionnels et une exigence de finition sur chaque prestation, sans exception.",
  },
  {
    icon: FaSmile,
    title: "Bien-être",
    text: "Un accueil chaleureux, une écoute attentive et un espace apaisant : votre moment au salon est aussi un moment pour vous.",
  },
  {
    icon: FaMagic,
    title: "Authenticité",
    text: "Nous célébrons la beauté africaine dans toute sa diversité, en respectant votre identité et la nature de vos cheveux.",
  },
];

const ATOUTS = [
  "Équipe de coiffeuses et tresseuses expérimentées",
  "Consultation personnalisée avant chaque prestation",
  "Produits professionnels adaptés à chaque texture",
  "Hygiène et propreté irréprochables",
  "Rendez-vous respectés, dans un salon convivial",
  "Conseils d'entretien pour la maison",
];

export default function AproposPage() {
  return (
    <main>
      <PageHero
        eyebrow="Institut de Beauté"
        title="À Propos de Bene Hair"
        subtitle="L'art de la beauté africaine, depuis le cœur d'Abidjan"
        image="/images/pages/bandeau-apropos.png"
        imageAlt="Intérieur élégant et doré de l'institut Bene Hair"
        breadcrumb={[
          { label: "Accueil", href: "#/" },
          { label: "À propos" },
        ]}
      />

      {/* Notre histoire — section d'origine, conservée à l'identique */}
      <About />

      {/* Nos valeurs */}
      <section className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-[4.5rem]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="px-4 pb-10 text-center sm:px-8 lg:pb-12">
            <div className="mx-auto mb-6 flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
                Nos valeurs
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            <h2 className="mx-auto max-w-[14ch] font-serif text-[2.05rem] font-bold leading-[0.95] text-brown-900 sm:text-[2.75rem] lg:max-w-none lg:text-[3.5rem]">
              Ce Qui Nous Anime
            </h2>
            <p className="mx-auto mt-6 max-w-[52rem] text-[0.92rem] leading-[1.75] text-brown-700 sm:text-[1rem] lg:text-[1.06rem]">
              Trois convictions guident chacune de nos prestations, de la
              première consultation jusqu&apos;au dernier geste.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {VALEURS.map((v) => (
              <Reveal key={v.title}>
                <div className="h-full rounded-[1.45rem] border border-gold-500/18 bg-cream-50/92 px-6 py-8 text-center shadow-[0_14px_30px_rgba(58,40,14,0.08)]">
                  <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/8 text-gold-500">
                    <v.icon className="text-[1.3rem]" />
                  </div>
                  <h3 className="font-serif text-[1.5rem] text-brown-900">{v.title}</h3>
                  <p className="mx-auto mt-4 max-w-[17rem] text-[0.9rem] leading-[1.65] text-brown-700">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Le salon en images */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_60%,#ede7d5_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Images */}
            <Reveal className="order-2 lg:order-1" y={26}>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="overflow-hidden rounded-[1.6rem] border border-gold-500/15 bg-cream-50/80 shadow-[0_24px_60px_rgba(44,43,19,0.11)]">
                  <div className="aspect-[3/4]">
                    <Image
                      src={ABOUT_IMAGES.salon.src}
                      alt={ABOUT_IMAGES.salon.alt}
                      width={864}
                      height={1152}
                      loading="lazy"
                      sizes="(min-width: 1024px) 22vw, 46vw"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-gold-500/15 bg-cream-50/80 shadow-[0_24px_60px_rgba(44,43,19,0.11)] sm:mt-12">
                  <div className="aspect-[3/4]">
                    <Image
                      src={ABOUT_IMAGES.equipe.src}
                      alt={ABOUT_IMAGES.equipe.alt}
                      width={864}
                      height={1152}
                      loading="lazy"
                      sizes="(min-width: 1024px) 22vw, 46vw"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Texte */}
            <Reveal className="order-1 lg:order-2" y={26}>
              <div className="mb-7 flex max-w-[30rem] items-center justify-start gap-4 text-gold-500">
                <div aria-hidden="true" className="h-[2px] w-16 shrink-0 rounded-full bg-gold-500 sm:w-20" />
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.36em] text-gold-500 sm:text-xs">
                  Notre institut
                </span>
              </div>

              <h2 className="max-w-[16ch] font-serif text-[2.2rem] leading-[0.94] text-brown-900 sm:text-[2.7rem] md:text-[3.1rem] lg:text-[3.4rem]">
                <span className="block">Un Éspace Pensé</span>
                <span className="block">Pour Vous Sublimer</span>
              </h2>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />

              <p className="mt-8 mb-4 max-w-[34rem] text-[1rem] leading-[1.8] text-brown-700 sm:text-[1.05rem]">
                Situé à Abidjan, l&apos;institut Bene Hair vous accueille dans un
                écrin chaleureux aux tons crème et doré, où chaque détail — de
                l&apos;éclairage aux fauteuils — a été pensé pour votre confort.
              </p>
              <p className="max-w-[34rem] text-[0.98rem] leading-[1.8] text-brown-600 sm:text-[1rem]">
                Notre équipe réunit des coiffeuses, tresseuses et coloristes
                passionnées, formées aux techniques classiques comme aux
                tendances actuelles de la beauté africaine.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ATOUTS.map((atout) => (
                  <li key={atout} className="flex items-start gap-2.5 text-[0.92rem] leading-[1.55] text-brown-700">
                    <FaCheckCircle
                      className="mt-[0.22rem] shrink-0 text-[0.85rem] text-gold-500"
                      aria-hidden="true"
                    />
                    <span>{atout}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8">
        <Reveal className="mx-auto max-w-[60rem]">
          <div className="rounded-[1.85rem] border border-gold-500/16 bg-[rgba(255,251,244,0.9)] px-6 py-9 text-center shadow-[0_20px_56px_rgba(44,43,19,0.09)] sm:px-10 sm:py-11">
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-500">
              Venez nous rencontrer
            </p>
            <h2 className="mx-auto max-w-[16ch] font-serif text-[1.9rem] font-bold leading-[0.95] text-brown-900 sm:text-[2.4rem] lg:text-[2.8rem]">
              Prête à Vivre l&apos;Expérience Bene Hair ?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#/contact"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-gold-400/70 bg-gold-300/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_10px_25px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:shadow-[0_16px_34px_rgba(168,124,34,0.24),inset_0_1px_0_rgba(255,245,221,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto"
              >
                Prendre rendez-vous
              </a>
              <a
                href="https://wa.me/2250707837795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-gold-500/22 bg-cream-50/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_7px_18px_rgba(44,43,19,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white hover:shadow-[0_12px_24px_rgba(44,43,19,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto"
              >
                <FaWhatsapp className="text-[1.05rem] text-gold-600" />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
