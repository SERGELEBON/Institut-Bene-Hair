"use client";

import { useState } from "react";
import Reveal from "./reveal";
import {
  FaClock,
  FaComments,
  FaEnvelope,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
  FaWhatsapp,
} from "./icons";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Marcory%20Zone%204%20Abidjan%20pr%C3%A8s%20h%C3%B4tel%20Ibis";
const WHATSAPP_URL = "https://wa.me/2250707716957";

const HOURS = [
  { label: "Lun–Jeu", time: "09:00 - 18:00", closed: false },
  { label: "Ven", time: "09:00 - 19:00", closed: false },
  { label: "Sam", time: "08:00 - 19:00", closed: false },
  { label: "Dim", time: "Fermé", closed: true },
];

const INFO_CARD =
  "group rounded-[1.4rem] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(252,247,236,0.82))] p-3 shadow-[0_10px_24px_rgba(58,40,14,0.07),inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-200 sm:p-3.5 hover:border-gold-500/32 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500";

const INFO_ICON_BOX =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.7rem] border border-gold-500/20 bg-[linear-gradient(145deg,rgba(254,250,238,0.96),rgba(242,204,108,0.18))] text-gold-600 shadow-[0_8px_18px_rgba(200,152,48,0.12),inset_0_1px_0_rgba(255,255,255,0.82)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setStatusMessage(
          data?.error || "Erreur lors de l'envoi du message."
        );
        return;
      }
      setStatus("success");
      setStatusMessage(
        "Message envoyé avec succès. Nous revenons vers vous rapidement."
      );
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%),linear-gradient(180deg,#fcf7ec_0%,#f8edd8_60%,#f4e0c0_100%)] px-4 py-10 sm:px-6 sm:py-12 md:px-7 md:py-14 lg:px-8 lg:py-[4.5rem] xl:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* En-tête */}
        <Reveal className="mx-auto max-w-[64rem] px-4 text-center sm:px-8">
          <div className="mx-auto flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
              Contactez-nous
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="mt-4 text-balance font-serif text-[clamp(1.9rem,4vw+1.3rem,3rem)] leading-[0.95] text-brown-900 lg:mt-6 lg:text-[4.35rem]">
            Prenez <span className="text-gold-500">Rendez-vous</span>
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent_0%,#d6ad54_50%,transparent_100%)] lg:mt-4" />
          <p className="mx-auto mt-4 max-w-[54rem] text-balance text-[0.95rem] leading-[1.75] text-brown-700 sm:text-[1rem] lg:mt-5 lg:text-[1.08rem]">
            Une question ou une demande ? Écrivez-nous, on vous répond.
          </p>
        </Reveal>

        <div className="mx-auto mt-7 grid grid-cols-1 max-w-[82rem] items-stretch gap-5 sm:mt-8 sm:gap-6 lg:mt-9 lg:gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] xl:gap-7">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-3.5 sm:gap-4 lg:gap-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-3.5 lg:gap-3.5">
              {/* Adresse */}
              <Reveal y={20}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir l'itinéraire vers Marcory, quartier Zone 4, Abidjan sur Google Maps"
                  className={`${INFO_CARD} block`}
                >
                  <div className={INFO_ICON_BOX}>
                    <FaMapMarkerAlt className="text-[0.8rem]" />
                  </div>
                  <div className="mt-2 min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">
                      Adresse
                    </p>
                    <div className="mt-0.5">
                      <p className="break-words text-[0.98rem] font-semibold leading-snug text-brown-900">
                        Marcory, Zone 4
                      </p>
                      <p className="break-words text-[0.74rem] leading-snug tracking-tight text-brown-500">
                        À proximité de l&apos;hôtel Ibis et de l&apos;hôtel Getellemane
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>

              {/* Téléphone */}
              <Reveal y={20}>
                <a
                  href="tel:+2252722507000"
                  aria-label="Appeler le +225 27 22 50 70 00"
                  className={`${INFO_CARD} block`}
                >
                  <div className={INFO_ICON_BOX}>
                    <FaPhoneAlt className="text-[0.8rem]" />
                  </div>
                  <div className="mt-2 min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">
                      Téléphone
                    </p>
                    <div className="mt-0.5">
                      <p className="break-words text-[0.98rem] font-semibold leading-snug text-brown-900">
                        +225 27 22 50 70 00
                      </p>
                      <p className="text-[0.78rem] leading-snug text-brown-500">
                        Du lundi au samedi
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>

              {/* Email */}
              <Reveal y={20}>
                <a
                  href="mailto:contact@sekoba-coiffure.ci"
                  aria-label="Envoyer un email à contact@sekoba-coiffure.ci"
                  className={`${INFO_CARD} block`}
                >
                  <div className={INFO_ICON_BOX}>
                    <FaEnvelope className="text-[0.8rem]" />
                  </div>
                  <div className="mt-2 min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">
                      Email
                    </p>
                    <div className="mt-0.5">
                      <p className="[overflow-wrap:anywhere] [word-break:break-word] text-[0.98rem] font-semibold leading-snug text-brown-900">
                        contact@sekoba-coiffure.ci
                      </p>
                      <p className="text-[0.78rem] leading-snug text-brown-500">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>

              {/* Horaires */}
              <Reveal y={20}>
                <div className={`${INFO_CARD} h-full`}>
                  <div className={INFO_ICON_BOX}>
                    <FaClock className="text-[0.8rem]" />
                  </div>
                  <div className="mt-2 min-w-0">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">
                      Horaires
                    </p>
                    <div className="mt-0.5">
                      <dl className="space-y-0.5">
                        {HOURS.map((h) => (
                          <div
                            key={h.label}
                            className="flex items-baseline justify-between gap-2 leading-tight"
                          >
                            <dt className="text-[0.72rem] text-brown-600">{h.label}</dt>
                            <dd
                              className={`shrink-0 text-[0.78rem] font-semibold tabular-nums ${
                                h.closed ? "text-brown-400" : "text-brown-900"
                              }`}
                            >
                              {h.time}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Carte Google Maps */}
            <Reveal y={24}>
              <div className="flex min-h-[240px] flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(252,247,236,0.82))] shadow-[0_18px_40px_rgba(58,40,14,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[320px]">
                <span className="pointer-events-none block h-px shrink-0 bg-[linear-gradient(90deg,transparent,rgba(232,176,64,0.6),transparent)]" />
                <div className="flex shrink-0 items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 lg:px-5 lg:py-3.5">
                  <div className="flex min-w-0 items-start gap-2 sm:items-center sm:gap-2.5">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[0.85rem] text-gold-600 sm:mt-0" />
                    <p className="text-[0.85rem] font-semibold leading-snug text-brown-900 lg:truncate">
                      Marcory, Zone 4, Abidjan
                    </p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir l'itinéraire vers Marcory, quartier Zone 4, Abidjan sur Google Maps"
                    className="inline-flex min-h-[2.75rem] shrink-0 items-center gap-2 rounded-full border border-gold-400/70 bg-gold-300/80 px-3.5 py-1.5 text-[0.78rem] font-semibold text-brown-900 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 lg:min-h-0"
                  >
                    <FaLocationArrow className="text-[0.68rem]" />
                    <span>Itinéraire</span>
                  </a>
                </div>
                <div className="relative min-h-0 flex-1 border-t border-gold-500/12">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?ll=5.2912282,-3.9735415&z=17&output=embed"
                    allowFullScreen
                    title="Carte de localisation de Sekoba Coiffure — Marcory, Zone 4, Abidjan"
                  />
                </div>
              </div>
            </Reveal>

            {/* WhatsApp */}
            <Reveal y={20}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.6rem] w-full shrink-0 items-center justify-center gap-2.5 rounded-full border border-brown-900/10 bg-brown-900 px-6 py-3.5 text-[0.95rem] font-semibold text-cream-50 shadow-[0_12px_26px_rgba(58,40,14,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brown-800 hover:shadow-[0_16px_32px_rgba(58,40,14,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 active:translate-y-0"
              >
                <FaWhatsapp className="text-[1.1rem] text-[#c7f0d0]" />
                Réserver sur WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal className="self-start">
            <form
              className="relative isolate overflow-hidden rounded-[1.75rem] border border-gold-500/18 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(252,247,236,0.82))] p-5 shadow-[0_20px_46px_rgba(58,40,14,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-6 lg:p-7"
              onSubmit={handleSubmit}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(232,176,64,0.6),transparent)]" />

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.85rem] border border-gold-500/20 bg-[linear-gradient(145deg,rgba(254,250,238,0.96),rgba(242,204,108,0.18))] text-gold-600 shadow-[0_10px_22px_rgba(200,152,48,0.12),inset_0_1px_0_rgba(255,255,255,0.82)]">
                  <FaPaperPlane className="text-[0.95rem]" />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-700">
                    Formulaire de contact
                  </p>
                  <h3 className="mt-0.5 font-serif text-[1.7rem] leading-tight text-brown-900 sm:text-[2rem]">
                    Envoyez-nous un message
                  </h3>
                </div>
              </div>

              <p className="mt-3 max-w-[34rem] text-[0.96rem] leading-[1.7] text-brown-700">
                Remplissez le formulaire, nous vous répondons rapidement.
              </p>

              <div className="mt-6 grid gap-3.5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[0.9rem] font-medium text-brown-800"
                  >
                    Nom complet <span className="text-gold-500">*</span>
                  </label>
                  <div className="group relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/70 transition-colors duration-200 group-focus-within:text-gold-600">
                      <FaUser className="text-[0.9rem]" />
                    </span>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="min-h-[3.6rem] w-full rounded-[1rem] border border-gold-500/20 bg-white/85 pl-11 pr-4 text-base text-brown-900 placeholder:text-brown-400 transition-all duration-200 hover:border-gold-500/35 focus:border-gold-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/35 lg:text-[0.98rem]"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[0.9rem] font-medium text-brown-800"
                  >
                    Email <span className="text-gold-500">*</span>
                  </label>
                  <div className="group relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/70 transition-colors duration-200 group-focus-within:text-gold-600">
                      <FaEnvelope className="text-[0.9rem]" />
                    </span>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      className="min-h-[3.6rem] w-full rounded-[1rem] border border-gold-500/20 bg-white/85 pl-11 pr-4 text-base text-brown-900 placeholder:text-brown-400 transition-all duration-200 hover:border-gold-500/35 focus:border-gold-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/35 lg:text-[0.98rem]"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-[0.9rem] font-medium text-brown-800"
                  >
                    Téléphone <span className="text-gold-500">*</span>
                  </label>
                  <div className="group relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/70 transition-colors duration-200 group-focus-within:text-gold-600">
                      <FaPhoneAlt className="text-[0.9rem]" />
                    </span>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+225 00 00 00 00 00"
                      className="min-h-[3.6rem] w-full rounded-[1rem] border border-gold-500/20 bg-white/85 pl-11 pr-4 text-base text-brown-900 placeholder:text-brown-400 transition-all duration-200 hover:border-gold-500/35 focus:border-gold-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/35 lg:text-[0.98rem]"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[0.9rem] font-medium text-brown-800"
                >
                  Votre message <span className="text-gold-500">*</span>
                </label>
                <div className="group relative">
                  <span className="pointer-events-none absolute left-4 top-[1.15rem] text-gold-500/70 transition-colors duration-200 group-focus-within:text-gold-600">
                    <FaComments className="text-[0.9rem]" />
                  </span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Décrivez votre demande ou posez-nous vos questions..."
                    className="min-h-[160px] w-full resize-none rounded-[1rem] border border-gold-500/20 bg-white/85 py-3.5 pl-11 pr-4 text-base text-brown-900 placeholder:text-brown-400 transition-all duration-200 hover:border-gold-500/35 focus:border-gold-500/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/35 lg:min-h-[165px] lg:text-[0.98rem] xl:min-h-[185px] min-[1440px]:min-h-[193px]"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {statusMessage && (
                <p
                  className={`mt-4 rounded-[0.9rem] border px-4 py-3 text-[0.9rem] font-medium ${
                    status === "success"
                      ? "border-gold-500/30 bg-gold-500/8 text-brown-800"
                      : "border-gold-500/40 bg-white/70 text-gold-700"
                  }`}
                  role="status"
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 inline-flex min-h-[4.35rem] w-full items-center justify-center gap-3 rounded-[1.2rem] border border-gold-400/70 bg-[linear-gradient(145deg,#f7d789,#eec063)] px-7 py-4 text-[1rem] font-semibold text-brown-900 shadow-[0_14px_30px_rgba(92,60,16,0.20),inset_0_1px_0_rgba(255,248,231,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-[0_18px_36px_rgba(92,60,16,0.26),inset_0_1px_0_rgba(255,248,231,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                disabled={sending}
              >
                <span>{sending ? "Envoi en cours..." : "Envoyer le message"}</span>
                <FaPaperPlane className="text-[1rem]" />
              </button>

              <p className="mt-3 text-sm leading-6 text-brown-600">
                En soumettant ce formulaire, vous acceptez notre{" "}
                <a
                  href="#contact"
                  className="text-gold-600 underline decoration-transparent transition-colors duration-200 hover:decoration-current"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
