import Reveal from "./reveal";
import {
  FaCheckCircle,
  FaGoogle,
  FaQuoteRight,
  FaSmile,
  FaStar,
} from "./icons";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sa=X&sca_esv=630f4fbcc449dd86&sxsrf=APpeQntl9ek0fmeHkf9rBa1m_LqSybgOtQ:1784487013853&q=Sekoba+Coiffure+-+Gen%C3%A8ve+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2tDAzNzS3MAcBS0NzUwsDgw2MjK8Y5YJTs_OTEhWc8zPT0kqLUhV0FdxT8w6vKEtVcCzLLF7ESkABACOKMbhcAAAA&rldimm=9867178777779175800&tbm=lcl&hl=fr-FR&ved=2ahUKEwioksSUtN-VAxUC2wIHHZvBJm0Q9fQKegQIRRAG&biw=1280&bih=678&dpr=2#lkt=LocalPoiReviews";

const TESTIMONIALS = [
  {
    initials: "LO",
    name: "Lida Ortiz",
    quote:
      "« Excellent salon pour les tresses africaines, les coupes et le coiffage. Très professionnel et respectueux de votre temps. Je le recommande vivement. »",
  },
  {
    initials: "SG",
    name: "Sandrine Guinnard",
    quote:
      "« Très satisfaite ! Merci beaucoup pour cette coupe de cheveux impeccable ! Je recommande. »",
  },
  {
    initials: "SD",
    name: "Sammie Dalipi",
    quote:
      "« J'ai été super bien reçue, la coupe est incroyable. J'ai passé un excellent moment ! »",
  },
];

const STATS = [
  { icon: FaStar, value: "5/5", label: "Note moyenne des avis" },
  { icon: FaSmile, value: "100%", label: "Clientes qui recommandent" },
  { icon: FaGoogle, value: "Google", label: "Avis vérifiés · Maison Genève" },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="bg-[linear-gradient(180deg,#fcf7ec_0%,#f8edd8_58%,#f4e0c0_100%)] px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-[4.5rem]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* En-tête */}
        <Reveal className="px-4 pb-10 text-center sm:px-8 lg:pb-12">
          <div className="mx-auto mb-6 flex max-w-[28rem] items-center justify-center gap-5 text-gold-500">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px]">
              Temoignages
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="mx-auto max-w-[13ch] font-serif text-[2.05rem] font-bold leading-[0.95] text-brown-900 sm:text-[2.75rem] lg:max-w-none lg:text-[3.7rem]">
            Avis de Nos Clientes
          </h2>
          <p className="mx-auto mt-6 max-w-[52rem] text-[0.92rem] leading-[1.75] text-brown-700 sm:text-[1rem] lg:text-[1.06rem]">
            Avis vérifiés de notre maison sœur à Genève — le même savoir-faire,
            désormais à Abidjan.
          </p>
        </Reveal>

        {/* Cartes d'avis */}
        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.initials}>
              <div className="relative flex h-full flex-col rounded-[1.35rem] border border-gold-500/18 bg-cream-50/92 px-6 py-7 shadow-[0_18px_40px_rgba(58,40,14,0.1)] sm:px-7 sm:py-8">
                <FaQuoteRight className="absolute right-6 top-6 text-[1.8rem] text-gold-500/20" />
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-cream-100 font-serif text-[1.15rem] font-bold text-brown-800 shadow-[0_10px_18px_rgba(58,40,14,0.12)]">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-bold leading-none text-brown-900">
                      {t.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1 text-gold-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className="text-[0.78rem]" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-[1.7] text-brown-800">
                  {t.quote}
                </blockquote>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start text-[0.8rem] font-medium text-gold-600 transition-colors hover:text-gold-700"
                >
                  <FaCheckCircle className="text-[0.82rem]" aria-hidden="true" />
                  Avis vérifié
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Statistiques */}
        <Reveal className="mt-10">
          <div className="grid gap-5 md:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.55rem] border border-gold-500/18 bg-cream-50/92 px-5 py-7 text-center shadow-[0_16px_38px_rgba(58,40,14,0.08)]"
              >
                <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/8 text-gold-500">
                  <stat.icon className="text-[1.3rem]" />
                </div>
                <div className="text-[1.9rem] font-semibold leading-none tracking-[-0.02em] text-brown-900 sm:text-[2.05rem]">
                  {stat.value}
                </div>
                <p className="mt-3 text-[0.9rem] tracking-[0.01em] text-brown-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
