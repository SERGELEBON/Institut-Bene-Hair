export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-brown-50 to-gold-200 pt-[4.5rem]"
      style={{ minHeight: "100svh" }}
    >
      {/* Vidéo de fond */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero-sekoba.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      {/* Voiles & dégradés */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(19,12,5,0.62)] via-[rgba(19,12,5,0.24)] to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,24,10,0.38)_0%,rgba(34,24,10,0.58)_34%,rgba(34,24,10,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,16,6,0.26),transparent_42%),radial-gradient(circle_at_top,rgba(242,204,108,0.1),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(200,152,48,0.16),transparent_32%)]" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[58rem] text-center">
          <div className="mx-auto mb-6 flex max-w-[32rem] items-center justify-center gap-3 text-gold-300/78 sm:gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-300/80" />
            <span className="whitespace-nowrap text-[10px] font-light uppercase tracking-[0.28em] text-gold-300/80 sm:text-xs sm:tracking-[0.34em]">
              Salon Premium
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-300/80" />
          </div>

          <h1 className="mb-6 font-serif text-[2.95rem] font-bold leading-[0.9] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.34)] sm:mb-7 sm:text-[3.85rem] md:text-[4.55rem] lg:text-[5.45rem]">
            Sekoba Coiffure
          </h1>

          <p className="mx-auto mb-6 max-w-[26ch] font-serif text-[1.45rem] font-medium italic leading-[1.02] text-gold-200 drop-shadow-[0_10px_26px_rgba(0,0,0,0.28)] sm:mb-7 sm:text-[1.95rem] md:text-[2.35rem] lg:text-[2.7rem]">
            L&apos;Art de la Beauté Africaine
          </p>

          <p className="mx-auto mb-10 max-w-[44rem] text-[0.94rem] font-light leading-[1.7] text-white sm:mb-12 sm:text-[0.98rem] md:text-[1.08rem]">
            Découvrez un univers où tradition et modernité se rencontrent.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 pt-1">
            <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
              <a
                href="#contact"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-gold-400/70 bg-gold-300/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brown-900 shadow-[0_10px_25px_rgba(200,152,48,0.2),inset_0_1px_0_rgba(255,245,221,0.4)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-gold-400 hover:bg-gold-300 hover:text-brown-900 hover:shadow-[0_16px_34px_rgba(168,124,34,0.24),inset_0_1px_0_rgba(255,245,221,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto sm:min-w-[13.25rem]"
              >
                Réserver Maintenant
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/90 bg-white px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-brown-900 shadow-[0_18px_34px_rgba(58,40,14,0.12),inset_0_1px_0_rgba(255,255,255,0.92)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-white hover:bg-white hover:shadow-[0_18px_34px_rgba(58,40,14,0.12),inset_0_1px_0_rgba(255,255,255,0.92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:w-auto sm:min-w-[13.25rem] sm:text-[0.86rem]"
              >
                Nos Prestations
              </a>
            </div>
            <div className="flex flex-col items-center pt-1.5 text-cream-100/45">
              <span className="h-12 w-px bg-gradient-to-b from-gold-300/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
