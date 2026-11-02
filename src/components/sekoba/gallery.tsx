"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./reveal";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
} from "./icons";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  blurPosition: string;
  objectPosition: string;
  span: string;
  width: number;
  height: number;
};

const ITEMS: GalleryItem[] = [
  {
    id: "boucles-volume-glamour",
    title: "Boucles volume glamour",
    category: "Mise en forme",
    image: "/images/galerie/3-bene.png",
    alt: "Boucles volume glamour — Mise en forme réalisé chez Institut Bene Hair",
    blurPosition: "center top",
    objectPosition: "center top",
    span: "md:col-span-2 md:row-span-2",
    width: 768,
    height: 1344,
  },
  {
    id: "balayage-caramel-ondule",
    title: "Balayage caramel ondulé",
    category: "Coloration",
    image: "/images/galerie/4-bene.png",
    alt: "Balayage caramel ondulé — Coloration réalisé chez Institut Bene Hair",
    blurPosition: "center 54%",
    objectPosition: "center 54%",
    span: "md:row-span-2",
    width: 768,
    height: 1344,
  },
  {
    id: "box-braids-blond-miel",
    title: "Box braids blond miel",
    category: "Tresses",
    image: "/images/galerie/2-bene.png",
    alt: "Box braids blond miel — Tresses réalisé chez Institut Bene Hair",
    blurPosition: "center 26%",
    objectPosition: "center 26%",
    span: "",
    width: 768,
    height: 1344,
  },
  {
    id: "nattes-couchees-ajourees",
    title: "Nattes couchées ajourées",
    category: "Tresses",
    image: "/images/galerie/1-bene.png",
    alt: "Nattes couchées ajourées — Tresses réalisé chez Institut Bene Hair",
    blurPosition: "center center",
    objectPosition: "center center",
    span: "",
    width: 768,
    height: 1344,
  },
];

const GALLERY_BTN =
  "group relative overflow-hidden rounded-[1.9rem] border border-gold-500/12 bg-[rgba(255,249,241,0.74)] shadow-[0_20px_50px_rgba(44,43,19,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setIndex(null);
  }, []);

  const step = useCallback((dir: number) => {
    setIndex((prev) =>
      prev === null ? prev : (prev + dir + ITEMS.length) % ITEMS.length
    );
  }, []);

  // Navigation clavier
  useEffect(() => {
    if (!isOpen || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, close, step]);

  // Bloque le scroll de fond
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const current = index !== null ? ITEMS[index] : null;

  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_56%,#ede7d5_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
      </div>

      {/* En-tête */}
      <Reveal className="relative z-10 mx-auto mb-9 max-w-[46rem] px-4 text-center sm:mb-11">
        <div className="mx-auto mb-7 flex max-w-[31rem] items-center justify-center gap-5 text-gold-500">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.4em] sm:text-[11px]">
            Galerie
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
        </div>
        <h2 className="font-serif text-[2rem] font-bold leading-[0.94] text-brown-900 sm:text-[2.7rem] lg:text-[3.1rem]">
          Nos Réalisations
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-[0.95rem] leading-[1.7] text-brown-700 sm:text-[1rem]">
          Tresses, colorations et mises en forme pensées pour sublimer chaque texture.
        </p>
      </Reveal>

      {/* Grille */}
      <Reveal className="relative z-10 mx-auto max-w-[1880px]" y={18}>
        <div className="grid auto-rows-[12rem] gap-4 sm:auto-rows-[14rem] sm:gap-5 md:grid-cols-4 lg:auto-rows-[15rem] xl:auto-rows-[17rem]">
          {ITEMS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`${GALLERY_BTN} ${item.span}`}
              aria-label={`Agrandir : ${item.title} (${item.category})`}
              onClick={() => {
                setIndex(i);
                setIsOpen(true);
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-[1.06] bg-cover bg-center blur-2xl opacity-70"
                style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.blurPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,248,236,0.18)_100%)]" />
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 24vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: item.objectPosition }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start bg-[linear-gradient(180deg,transparent_0%,rgba(18,17,9,0.24)_46%,rgba(18,17,9,0.82)_100%)] px-4 pb-4 pt-16 text-left transition-all duration-300 sm:px-5 sm:pb-5">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-gold-300/95 sm:text-[0.6rem]">
                  {item.category}
                </span>
                <p className="mt-0.5 font-serif text-[0.98rem] leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-[1.06rem]">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal
        className="relative z-10 mx-auto mt-10 flex max-w-[46rem] flex-col items-center gap-4 px-4 text-center sm:mt-12 sm:flex-row sm:justify-center"
        y={18}
      >
        <a
          href={`https://wa.me/2250707837795?text=${encodeURIComponent(
            "Bonjour, j'ai vu votre galerie et je souhaite réserver une prestation."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-gold-400/70 bg-gold-300/80 px-7 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_10px_25px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:shadow-[0_16px_34px_rgba(168,124,34,0.24),inset_0_1px_0_rgba(255,245,221,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto"
        >
          <FaWhatsapp className="text-[1.05rem]" />
          Réserver ma prestation
        </a>
        <a
          href="https://www.instagram.com/benehair1/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full border border-gold-500/22 bg-cream-50/90 px-7 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_7px_18px_rgba(44,43,19,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white hover:shadow-[0_12px_24px_rgba(44,43,19,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto"
        >
          <FaInstagram className="text-[1.05rem] text-gold-600" />
          Voir plus sur Instagram
        </a>
      </Reveal>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && current && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(19,18,9,0.86)] px-3 py-4 backdrop-blur-[18px] sm:px-6 sm:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cream-50 backdrop-blur-md transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-900 sm:right-6 sm:top-6"
              aria-label="Fermer la galerie"
            >
              <FaTimes className="text-[0.95rem]" />
            </button>

            <motion.div
              key={current.id}
              className="relative flex w-auto max-w-[86vw] flex-col items-center sm:max-w-[58rem]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label={`${current.title} — ${current.category}`}
            >
              <div className="relative flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-0 top-1/2 z-30 inline-flex h-10 w-10 -translate-x-[calc(100%+0.5rem)] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brown-900/45 text-cream-50 backdrop-blur-md transition-colors duration-200 hover:bg-brown-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-900 sm:h-12 sm:w-12 sm:-translate-x-[calc(100%+1rem)]"
                  aria-label="Image précédente"
                >
                  <FaChevronLeft className="text-[0.95rem]" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-0 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 translate-x-[calc(100%+0.5rem)] items-center justify-center rounded-full border border-white/20 bg-brown-900/45 text-cream-50 backdrop-blur-md transition-colors duration-200 hover:bg-brown-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-900 sm:h-12 sm:w-12 sm:translate-x-[calc(100%+1rem)]"
                  aria-label="Image suivante"
                >
                  <FaChevronRight className="text-[0.95rem]" />
                </button>

                <div className="overflow-hidden rounded-[1.4rem] border border-white/15 shadow-[0_36px_110px_rgba(0,0,0,0.55)]">
                  <Image
                    src={current.image}
                    alt={`${current.title} — ${current.category} réalisé chez Institut Bene Hair`}
                    width={current.width}
                    height={current.height}
                    priority
                    sizes="(max-width: 640px) 92vw, 58rem"
                    className="block h-auto max-h-[80vh] w-auto max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-gold-300 sm:text-[0.62rem]">
                  {current.category}
                </span>
                <p className="mt-1 font-serif text-[1.2rem] leading-tight text-cream-50 sm:text-[1.35rem]">
                  {current.title}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-2">
                {ITEMS.map((item, i) => (
                  <button
                    key={`dot-${item.id}`}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      i === index ? "w-7 bg-gold-300" : "w-2 bg-white/30 hover:bg-white/55"
                    }`}
                    aria-label={`Afficher la photo ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
