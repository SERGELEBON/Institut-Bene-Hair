"use client";

import { useState } from "react";
import Reveal from "./reveal";
import { FaBell, FaEnvelope, FaGift, FaMagic } from "./icons";

const BENEFITS = [
  {
    icon: FaGift,
    title: "Offres Exclusives",
    text: "Recevez des réductions et promotions réservées aux abonnées",
  },
  {
    icon: FaMagic,
    title: "Tendances Beauté",
    text: "Découvrez les dernières tendances en coiffure africaine",
  },
  {
    icon: FaBell,
    title: "Nouveautés",
    text: "Soyez informée en avant-première de nos nouveaux services",
  },
];

const CORNER_SPANS = [
  "left-5 top-5 rounded-tl-[0.9rem] border-l-[3px] border-t-[3px]",
  "right-5 top-5 rounded-tr-[0.9rem] border-r-[3px] border-t-[3px]",
  "bottom-5 left-5 rounded-bl-[0.9rem] border-b-[3px] border-l-[3px]",
  "bottom-5 right-5 rounded-br-[0.9rem] border-b-[3px] border-r-[3px]",
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Veuillez entrer une adresse email valide");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setMessage(data?.error || "Une erreur est survenue. Veuillez réessayer.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setMessage("Merci de votre inscription.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-[4.5rem]">
      <div className="mx-auto max-w-[1440px]">
        {/* Encadré principal */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%),linear-gradient(180deg,#fefcf7_0%,#fcf7ec_58%,#f8edd8_100%)] px-5 py-10 sm:px-7 sm:py-12 lg:px-8 lg:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,transparent_0%,rgba(200,152,48,0.18)_18%,transparent_36%,transparent_64%,rgba(200,152,48,0.18)_82%,transparent_100%)]" />

            <div className="relative z-10 mx-auto max-w-[64rem] text-center">
              <div className="mx-auto flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
                <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
                  Newsletter
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
              </div>
              <h2 className="mt-7 font-serif text-[2.15rem] leading-[0.95] text-brown-900 sm:text-[3rem] lg:text-[4rem]">
                Restez <span className="text-gold-500">Connectée</span>
              </h2>
              <div className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent_0%,#d6ad54_50%,transparent_100%)]" />
              <p className="mx-auto mt-7 max-w-[56rem] text-[0.94rem] leading-[1.75] text-brown-700 sm:text-[1rem] lg:text-[1.08rem]">
                Inscrivez-vous à notre newsletter et recevez nos conseils beauté,
                offres exclusives et dernières tendances.
              </p>
            </div>

            {/* Avantages */}
            <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-3">
              {BENEFITS.map((b) => (
                <Reveal key={b.title}>
                  <div className="rounded-[1.45rem] border border-gold-500/18 bg-cream-50/92 px-5 py-7 text-center shadow-[0_14px_30px_rgba(58,40,14,0.08)] h-full">
                    <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/8 text-gold-500">
                      <b.icon className="text-[1.3rem]" />
                    </div>
                    <h3 className="font-serif text-[1.45rem] text-brown-900">{b.title}</h3>
                    <p className="mx-auto mt-4 max-w-[16rem] text-[0.9rem] leading-[1.6] text-brown-700">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Formulaire */}
            <Reveal className="relative z-10 mx-auto mt-14" y={24}>
              <div className="relative mx-auto max-w-[60rem] rounded-[1.75rem] border border-gold-500/18 bg-cream-50/92 px-5 py-7 shadow-[0_16px_38px_rgba(58,40,14,0.08)] sm:px-7 sm:py-8 lg:px-8 lg:py-9">
                {CORNER_SPANS.map((pos) => (
                  <span
                    key={pos}
                    aria-hidden="true"
                    className={`pointer-events-none absolute hidden h-10 w-10 border-gold-500/45 sm:block ${pos}`}
                  />
                ))}
                <div className="mx-auto max-w-[42rem] text-center">
                  <h3 className="font-serif text-[1.75rem] text-brown-900 sm:text-[2.1rem]">
                    Rejoignez notre communauté
                  </h3>
                  <p className="mt-3 text-[0.92rem] text-brown-700 sm:text-[1rem]">
                    Conseils beauté et offres pensés pour nos abonnées à Abidjan.
                  </p>
                </div>

                <form
                  className="mx-auto mt-7 flex max-w-[50rem] flex-col gap-3 md:flex-row"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="relative flex-1">
                    <FaEnvelope className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[1.05rem] text-brown-600" />
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      required
                      className="w-full rounded-[1.05rem] border border-gold-500/20 bg-white/88 px-14 py-4 text-[0.96rem] text-brown-900 placeholder:text-brown-500 focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-75"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      aria-label="Votre adresse email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-[3.7rem] items-center justify-center rounded-[1.05rem] border border-gold-400/70 bg-gold-300/80 px-7 py-3 text-[0.96rem] font-semibold text-brown-900 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-300 disabled:opacity-75 md:min-w-[11rem]"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Inscription..." : "S'inscrire"}
                  </button>
                </form>

                {message && (
                  <p
                    className={`mx-auto mt-4 max-w-[42rem] text-center text-[0.9rem] font-medium ${
                      status === "success" ? "text-brown-700" : "text-gold-700"
                    }`}
                    role="status"
                  >
                    {message}
                  </p>
                )}

                <p className="mx-auto mt-5 max-w-[42rem] text-center text-[0.86rem] leading-[1.6] text-brown-600">
                  Vous pouvez vous désinscrire de la newsletter à tout moment.
                </p>
              </div>
            </Reveal>

            <Reveal
              className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 lg:gap-10"
              y={18}
            >
              <div className="flex items-center gap-3 text-brown-700">
                <FaMagic className="text-gold-500" />
                <span className="text-[0.94rem] sm:text-[1rem]">
                  Contenu exclusif chaque semaine
                </span>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
