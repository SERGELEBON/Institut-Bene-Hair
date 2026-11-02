import Image from "next/image";
import Reveal from "./reveal";

export default function About() {
  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f3_0%,#f5f1e6_60%,#ede7d5_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20 xl:py-24"
    >
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,152,48,0.12),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(44,43,19,0.9)_0.7px,transparent_0.7px)] bg-[length:18px_18px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          {/* Visuel */}
          <Reveal className="order-1" y={26}>
            <div className="relative pt-5 sm:pt-7">
              <div className="absolute left-0 top-0 h-[calc(100%-4.5rem)] w-[calc(100%-2rem)] rounded-[2rem] border border-gold-500/25 sm:w-[calc(100%-2.5rem)]" />
              <div className="group relative overflow-hidden rounded-[2rem] border border-gold-500/15 bg-cream-50/80 shadow-[0_28px_75px_rgba(44,43,19,0.11)]">
                <div className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/4.7]">
                  <Image
                    src="/images/about-bene.png"
                    alt="Cliente dans l'institut Bene Hair après une coiffure premium"
                    width={1024}
                    height={1280}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,43,19,0.03)_0%,rgba(44,43,19,0.16)_100%)]" />
              </div>

              {/* Badge "Depuis 2009" */}
              <div className="absolute bottom-4 left-4 right-4 -translate-y-2 sm:bottom-6 sm:left-6 sm:right-auto lg:bottom-7 lg:left-7">
                <div className="flex w-full max-w-[18rem] items-center gap-3 rounded-[1.25rem] border border-gold-500/20 bg-[#12110a]/92 px-[18px] py-3 shadow-[0_14px_30px_rgba(44,43,19,0.16)] backdrop-blur-sm sm:min-w-[13rem] sm:w-auto">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0a0a05]">
                    <Image
                      src="/images/logo-bene-hair.png"
                      alt="Logo Institut Bene Hair"
                      fill
                      sizes="48px"
                      className="scale-[0.74] object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-[1.24rem] leading-none text-[#f2f1e7] sm:text-[1.36rem]">
                      Bene Hair
                    </p>
                    <p className="mt-2 text-[0.82rem] text-[#98946f] sm:text-[0.88rem]">
                      Référence à Abidjan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal className="order-2 pt-8 sm:pt-12 lg:pl-2 lg:pt-10" y={26}>
            <div className="mb-7 flex max-w-[30rem] items-center justify-start gap-4 text-gold-500">
              <div
                aria-hidden="true"
                className="h-[2px] w-16 shrink-0 rounded-full bg-gold-500 sm:w-20"
              />
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.36em] text-gold-500 sm:text-xs">
                NOTRE HISTOIRE
              </span>
            </div>

            <h2 className="max-w-[16ch] font-serif text-[2.45rem] leading-[0.94] text-brown-900 sm:text-[2.95rem] md:text-[3.45rem] lg:text-[4rem]">
              <span className="block sm:whitespace-nowrap">L’Excellence de la</span>
              <span className="block sm:whitespace-nowrap">Coiffure Africaine</span>
            </h2>

            <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" />

            <p className="mt-8 mb-4 max-w-[32.5rem] text-[1rem] leading-[1.8] text-brown-700 sm:text-[1.08rem]">
              Chez Bene Hair, chaque prestation est pensée comme une expérience de
              mise en beauté haut de gamme, où l&apos;élégance, la maîtrise du geste et le
              respect de votre identité se rencontrent.
            </p>
            <p className="max-w-[32.5rem] text-[0.98rem] leading-[1.8] text-brown-600 sm:text-[1.03rem]">
              Dans un univers chaleureux et raffiné, notre équipe sublime chaque texture
              avec exigence, précision et sens du détail pour révéler une beauté
              pleinement assumée.
            </p>

            <div className="mt-5 h-px w-[60px] bg-gold-500/50" />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-gold-400/70 bg-gold-300/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_10px_25px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:text-brown-900 hover:shadow-[0_16px_34px_rgba(168,124,34,0.24),inset_0_1px_0_rgba(255,245,221,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200 sm:w-auto"
                href="#/services"
              >
                Découvrir nos prestations
              </a>
              <a
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-gold-500/20 bg-cream-50/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_8px_20px_rgba(58,40,14,0.05),inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white hover:shadow-[0_14px_28px_rgba(58,40,14,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-200 sm:w-auto"
                href="#/contact"
              >
                Nous contacter
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
