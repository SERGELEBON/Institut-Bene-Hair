"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "./icons";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Institut%20Bene%20Hair%20Abidjan";

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";

const reveal = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_62%,#ede7d5_100%)] text-brown-900">
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(200,152,48,0.42)_50%,transparent_100%)]" />

      <div className="mx-auto max-w-[1180px] px-5 py-8 sm:px-7 sm:py-9 lg:px-8 lg:py-10">
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8">
          {/* Marque */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="min-w-0 text-center lg:border-r lg:border-gold-500/12 lg:px-8"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-[clamp(2.25rem,9vw,2.75rem)] w-[clamp(2.25rem,9vw,2.75rem)] shrink-0 sm:h-12 sm:w-12">
                <Image
                  src="/images/logo-bene-hair.png"
                  alt="Logo Institut Bene Hair"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-[clamp(1.5rem,7vw,1.85rem)] leading-none text-gold-600 sm:text-[2rem]">
                  BENE HAIR
                </h3>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-gold-500">
                  Institut
                </p>
              </div>
            </div>
            <p className="mx-auto mt-3 max-w-[15rem] text-[0.84rem] leading-[1.65] text-brown-700 sm:mt-4">
              L&apos;excellence de la coiffure africaine à Abidjan.
            </p>
            <a
              href="/#services"
              className={`mt-2.5 inline-flex items-center gap-2 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-gold-600 transition-colors duration-200 hover:text-gold-700 sm:py-0 ${FOCUS_RING}`}
            >
              Nos prestations <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="min-w-0 border-t border-gold-500/14 pt-5 sm:border-t-0 sm:pt-0 lg:border-r lg:border-gold-500/12 lg:px-8"
          >
            <div className="flex items-center justify-center gap-4 text-gold-500">
              <div className="h-[2px] w-12 rounded-full bg-gold-500" />
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs">
                Contact
              </h4>
            </div>
            <ul className="mx-auto mt-4 w-fit space-y-0 text-left text-[0.82rem] leading-[1.45] text-brown-700 sm:space-y-2.5 sm:text-[0.86rem]">
              <li>
                <a
                  href="tel:+225707837795"
                  className={`flex min-w-0 items-center gap-2.5 py-3 transition-colors duration-200 hover:text-brown-900 sm:py-0 ${FOCUS_RING}`}
                >
                  <FaPhoneAlt
                    className="shrink-0 text-[0.76rem] text-gold-500"
                    aria-hidden="true"
                  />
                  07 07 83 77 95 / 01 01 22 09 61
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/benehair1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-0 items-center gap-2.5 py-3 transition-colors duration-200 hover:text-brown-900 sm:py-0 ${FOCUS_RING}`}
                >
                  <FaInstagram
                    className="shrink-0 text-[0.76rem] text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    @benehair1
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-0 items-center gap-2.5 py-3 transition-colors duration-200 hover:text-brown-900 sm:py-0 ${FOCUS_RING}`}
                >
                  <FaMapMarkerAlt
                    className="shrink-0 text-[0.76rem] text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    Abidjan, Côte d&apos;Ivoire
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2250707837795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-0 items-center gap-2.5 py-3 transition-colors duration-200 hover:text-brown-900 sm:py-0 ${FOCUS_RING}`}
                >
                  <FaWhatsapp
                    className="shrink-0 text-[0.76rem] text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    WhatsApp : 07 07 83 77 95
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Horaires */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="min-w-0 border-t border-gold-500/14 pt-5 text-center sm:col-span-2 sm:pt-6 lg:col-span-1 lg:border-t-0 lg:px-8 lg:pt-0"
          >
            <div className="flex items-center justify-center gap-4 text-gold-500">
              <div className="h-[2px] w-12 rounded-full bg-gold-500" />
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs">
                Horaires
              </h4>
            </div>
            <ul className="mx-auto mt-4 w-fit space-y-1.5 text-left text-[0.82rem] leading-[1.5] text-brown-700 sm:text-[0.86rem]">
              <li>Lun – Jeu : 09:00 - 18:00</li>
              <li>Ven : 09:00 - 19:00</li>
              <li>Sam : 08:00 - 19:00</li>
              <li>Dim : Fermé</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-gold-500/14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-2.5 text-[clamp(0.66rem,2.6vw,0.72rem)] text-brown-500 sm:px-7 sm:text-[0.72rem] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {year} Institut Bene Hair. Tous droits réservés.</p>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <a
              className={`py-2 transition-colors duration-200 hover:text-gold-600 sm:py-0 ${FOCUS_RING}`}
              href="#contact"
            >
              Mentions légales
            </a>
            <a
              className={`py-2 transition-colors duration-200 hover:text-gold-600 sm:py-0 ${FOCUS_RING}`}
              href="#contact"
            >
              Politique de confidentialité
            </a>
            <a
              className={`py-2 transition-colors duration-200 hover:text-gold-600 sm:py-0 ${FOCUS_RING}`}
              href="#contact"
            >
              CGV
            </a>
            <button
              type="button"
              aria-label="Retour en haut de la page"
              onClick={scrollToTop}
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/22 bg-cream-50/35 text-gold-600 transition-colors duration-200 hover:border-gold-500/42 hover:bg-cream-50/60 hover:text-gold-700 ${FOCUS_RING}`}
            >
              <FaArrowUp className="text-[0.8rem]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
