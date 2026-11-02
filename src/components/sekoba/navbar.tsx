"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "./icons";

const WHATSAPP_URL = "https://wa.me/2250707716957";

const LINKS = [
  { href: "/#apropos", label: "À propos" },
  { href: "/#services", label: "Services" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#contact", label: "Contact" },
];

const NAV_LINK_CLASS =
  "group relative inline-flex items-center justify-center py-2 font-sans text-[0.9rem] font-medium tracking-[0.08em] text-gold-200 transition-all duration-200 hover:text-gold-200";

const UNDERLINE_SPAN = (
  <span className="pointer-events-none absolute -bottom-[0.18rem] left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-200/80 to-transparent opacity-0 transition-all duration-200 group-hover:w-[112%] group-hover:opacity-100" />
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const leftLinks = LINKS.slice(0, 2);
  const rightLinks = LINKS.slice(2);

  return (
    <nav className="fixed top-0 w-full z-50 transition-smooth md:absolute bg-[linear-gradient(180deg,rgba(28,18,8,0.68)_0%,rgba(28,18,8,0.38)_58%,rgba(28,18,8,0)_100%)] md:bg-[linear-gradient(180deg,rgba(28,18,8,0.42)_0%,rgba(28,18,8,0.18)_58%,rgba(28,18,8,0)_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[4.75rem] items-center justify-between gap-4">
          {/* Liens gauche + logo central — desktop */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-8 lg:gap-10">
              {leftLinks.map((link) => (
                <a key={link.href} href={link.href} className={NAV_LINK_CLASS}>
                  <span>{link.label}</span>
                  {UNDERLINE_SPAN}
                </a>
              ))}
            </div>
            <motion.div
              className="mx-9 flex shrink-0 items-center lg:mx-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/"
                className="flex items-center justify-center px-1 py-1 transition-smooth drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
              >
                <div className="relative h-[3.55rem] w-[3.55rem] lg:h-[3.9rem] lg:w-[3.9rem]">
                  <Image
                    src="/images/logo-sekoba.png"
                    alt="Logo Sekoba Coiffure"
                    fill
                    priority
                    sizes="(min-width: 1024px) 62px, 57px"
                    className="scale-[1.12] object-contain brightness-[1.06] contrast-[1.08] transition-smooth"
                  />
                </div>
              </a>
            </motion.div>
            <div className="flex items-center gap-8 lg:gap-10">
              {rightLinks.map((link) => (
                <a key={link.href} href={link.href} className={NAV_LINK_CLASS}>
                  <span>{link.label}</span>
                  {UNDERLINE_SPAN}
                </a>
              ))}
            </div>
          </div>

          {/* Bouton Réserver — desktop */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/70 bg-gold-300/80 px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_8px_18px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[calc(50%+1px)] hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:inline-flex"
          >
            Réserver
          </a>

          {/* Burger — mobile */}
          <motion.button
            type="button"
            className="relative z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-black/12 text-white shadow-[0_8px_22px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[6px] transition-smooth md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            whileTap={{ scale: 0.95 }}
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>

          {/* Logo centré — mobile */}
          <motion.div
            className="absolute left-1/2 z-10 flex -translate-x-1/2 shrink-0 items-center md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              className="flex items-center justify-center px-1 py-1 transition-smooth drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
            >
              <div className="relative h-[3rem] w-[3rem]">
                <Image
                  src="/images/logo-sekoba.png"
                  alt="Logo Sekoba Coiffure"
                  fill
                  priority
                  sizes="48px"
                  className="scale-[1.1] object-contain brightness-[1.06] contrast-[1.08] transition-smooth"
                />
              </div>
            </a>
          </motion.div>

          {/* Spacer symétrique — mobile */}
          <div className="h-11 w-11 md:hidden" aria-hidden="true" />
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              className="rounded-[1.6rem] border border-gold-200/45 bg-[rgba(255,252,245,0.96)] shadow-[0_18px_48px_rgba(22,14,6,0.22)] backdrop-blur-md md:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="px-3 pb-4 pt-3">
                <div className="mb-3 flex items-center justify-center">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/70" />
                  <span className="px-3 text-[10px] uppercase tracking-[0.28em] text-brown-500">
                    Navigation
                  </span>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/70" />
                </div>
                <div className="space-y-1.5">
                  {LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <a
                        href={link.href}
                        className="block rounded-[1rem] px-4 py-3 text-center text-[0.98rem] font-medium tracking-[0.04em] text-brown-800 transition-smooth hover:bg-brown-50"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-[1rem] border border-gold-400/70 bg-gold-300/80 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_14px_28px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,244,214,0.32)]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ delay: 0.04 * LINKS.length }}
                  onClick={() => setOpen(false)}
                >
                  Rendez-vous
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filet doré sous la barre */}
      <div className="pointer-events-none mx-auto h-px w-[min(92%,1220px)] bg-gradient-to-r from-transparent to-transparent transition-smooth via-gold-300/30" />
    </nav>
  );
}
