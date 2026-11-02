"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./reveal";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
  breadcrumb: Crumb[];
  /** Position du fond (object-position) */
  imagePosition?: string;
};

/**
 * Bandeau d'en-tête des pages intérieures — reprend le langage visuel
 * du héros de l'accueil (voiles sombres, filets dorés, serif).
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumb,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-brown-950">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      {/* Voiles & dégradés — identiques au héros de l'accueil */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(19,18,9,0.62)] via-[rgba(19,18,9,0.24)] to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,29,16,0.5)_0%,rgba(30,29,16,0.6)_42%,rgba(30,29,16,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,21,10,0.26),transparent_42%),radial-gradient(circle_at_top,rgba(242,204,108,0.1),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(200,152,48,0.16),transparent_32%)]" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          {/* Fil d'Ariane */}
          <Reveal y={14}>
            <nav
              aria-label="Fil d'Ariane"
              className="mb-7 flex flex-wrap items-center justify-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-cream-100/70"
            >
              {breadcrumb.map((crumb, i) => (
                <span key={crumb.label} className="inline-flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-gold-300/60">
                      /
                    </span>
                  )}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="transition-colors duration-200 hover:text-gold-200"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span aria-current="page" className="text-gold-200">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>

          <Reveal y={18}>
            <div className="mx-auto mb-6 flex max-w-[32rem] items-center justify-center gap-3 text-gold-300/78 sm:gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-300/80" />
              <span className="whitespace-nowrap text-[10px] font-light uppercase tracking-[0.28em] text-gold-300/80 sm:text-xs sm:tracking-[0.34em]">
                {eyebrow}
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-300/80" />
            </div>
          </Reveal>

          <Reveal y={20}>
            <h1 className="mb-5 font-serif text-[2.6rem] font-bold leading-[0.92] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.34)] sm:mb-6 sm:text-[3.5rem] md:text-[4.1rem] lg:text-[4.7rem]">
              {title}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal y={22}>
              <p className="mx-auto max-w-[40rem] font-serif text-[1.35rem] font-medium italic leading-[1.12] text-gold-200 drop-shadow-[0_10px_26px_rgba(0,0,0,0.28)] sm:text-[1.75rem] md:text-[2.05rem]">
                {subtitle}
              </p>
            </Reveal>
          )}

          <Reveal y={24}>
            <div className="mt-8 flex flex-col items-center pt-1.5">
              <span
                aria-hidden="true"
                className="h-12 w-px bg-gradient-to-b from-gold-300/70 to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
