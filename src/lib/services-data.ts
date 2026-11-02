/**
 * Données partagées des prestations — utilisées par la section Services
 * de l'accueil, la page Services et les pages détaillées de chaque service.
 */

export type ServiceSection = {
  title: string;
  text: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Accroche courte affichée sur la page du service */
  tagline: string;
  duration: string;
  /** Description courte (carte de la section Services) */
  description: string;
  /** Paragraphe d'ouverture de la page détaillée */
  intro: string;
  /** Blocs de description détaillée */
  sections: ServiceSection[];
  /** Prestations incluses (liste à puces) */
  prestations: string[];
  /** Image de la carte (accueil + page Services) */
  image: string;
  objectPosition: string;
  /** Images de la page détaillée (3 visuels) */
  gallery: ServiceImage[];
};

export const WHATSAPP_NUMBER = "2250707837795";

export const whatsappReservation = (title: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour, je souhaite réserver une prestation ${title}.`
  )}`;

export const SERVICES: Service[] = [
  {
    slug: "tresses-tissages-nattes",
    title: "Tresses, Tissages & Nattes",
    tagline: "L'art des tresses africaines, du classique à la création",
    duration: "2h - 6h",
    description:
      "Des coiffures protectrices et posées avec précision pour un rendu net, durable et adapté à votre style.",
    intro:
      "La tresse est un savoir-faire, une signature. Chez Bene Hair, chaque mèche est tendue avec justesse pour obtenir un rendu net, confortable et durable, qui respecte vos cheveux et votre cuir chevelu. Du classique intemporel à la création ajourée la plus sophistiquée, nous donnons vie à la coiffure que vous imaginez.",
    sections: [
      {
        title: "Tresses & nattes",
        text: "Box braids, knotless braids, nattes couchées, torsades ou tresses ajourées : nous maîtrisons toutes les techniques, des plus classiques aux plus créatives, avec une tension parfaitement contrôlée pour préserver vos cheveux.",
      },
      {
        title: "Tissages & poses",
        text: "Tissage cousu, collé ou à la méche, pose de closure et de lace frontal : nous travaillons avec rigueur pour un raccord invisible et une tenue impeccable dans le temps, quelle que soit la matière choisie.",
      },
      {
        title: "Entretien & retouches",
        text: "Pour garder une coiffure impeccable plus longtemps, nous proposons des rendez-vous d'entretien : rafraîchissement du pourtour, soin du cuir chevelu et retouches ciblées.",
      },
    ],
    prestations: [
      "Box braids & knotless braids",
      "Nattes couchées, ajourées & fantaisie",
      "Torsades, torrides & vanilles",
      "Tissage cousu, collé ou à la méche",
      "Pose de closure & lace frontal",
      "Rafraîchissement & retouches",
      "Conseils d'entretien personnalisés",
    ],
    image: "/images/services/tresses-bene.png",
    objectPosition: "center 35%",
    gallery: [
      {
        src: "/images/services/tresses-bene.png",
        alt: "Tresses africaines réalisées chez Institut Bene Hair",
      },
      {
        src: "/images/pages/tresses-1.png",
        alt: "Mains d'une tresseuse au travail, technique de tissage précise",
      },
      {
        src: "/images/pages/tresses-2.png",
        alt: "Résultat final : box braids élégantes et bien définies",
      },
    ],
  },
  {
    slug: "extensions-cheveux",
    title: "Extensions Cheveux",
    tagline: "Longueur et volume, avec un rendu parfaitement naturel",
    duration: "2h - 4h",
    description:
      "De la longueur, du volume et un rendu naturel grâce à des poses soignées et adaptées à votre base.",
    intro:
      "Envie de gagner en longueur ou en volume sans abîmer vos cheveux ? Nos extensions sont choisies selon votre nature capillaire, votre couleur et votre mode de vie, puis posées avec une précision d'orfèvre. Le résultat : une chevelure dense, souple et indiscernable de vos cheveux naturels.",
    sections: [
      {
        title: "Un diagnostic avant la pose",
        text: "Nous commençons toujours par analyser votre chevelure : densité, texture, état du cuir chevelu. C'est ce diagnostic qui oriente la technique de pose et la matière la plus adaptée à vos cheveux.",
      },
      {
        title: "Techniques de pose maîtrisées",
        text: "Sew-in, extensions à chaud, à froid ou en bandes : chaque technique a ses avantages. Nous vous guidons vers celle qui offrira le meilleur confort et la meilleure tenue pour votre quotidien.",
      },
      {
        title: "Matières & finitions",
        text: "Mèches naturelles ou high-température, lissage ou bouclé, nuances sur mesure : nous sélectionnons des matières de qualité, puis nous fondons les extensions à votre chevelure pour une finition invisible.",
      },
    ],
    prestations: [
      "Consultation & diagnostic capillaire",
      "Extensions à chaud, à froid & sew-in",
      "Tissage premium & full sew-in",
      "Lace closure & lace frontal",
      "Dégradé & raccord invisible",
      "Coupe & coiffage des extensions",
      "Entretien & repositionnement",
    ],
    image: "/images/services/extensions-bene.png",
    objectPosition: "center 44%",
    gallery: [
      {
        src: "/images/services/extensions-bene.png",
        alt: "Extensions de cheveux posées chez Institut Bene Hair",
      },
      {
        src: "/images/pages/extensions-1.png",
        alt: "Pose d'extensions au salon, geste précis de la coiffeuse",
      },
      {
        src: "/images/pages/extensions-2.png",
        alt: "Résultat final : chevelure longue, volumineuse et brillante",
      },
    ],
  },
  {
    slug: "coloration-mise-en-forme",
    title: "Coloration & Mise en forme",
    tagline: "Des nuances maîtrisées, une mise en forme sur mesure",
    duration: "1h30 - 4h",
    description:
      "Des nuances, des reflets et une mise en forme pensée pour sublimer votre chevelure avec harmonie.",
    intro:
      "Une belle couleur est une couleur qui vous ressemble et qui respecte votre chevelure. Nos coloristes travaillent les nuances en douceur — balayages caramels, ombrés, reflets chauds — et encadrent chaque décoloration avec des protocoles protecteurs. La mise en forme vient ensuite révéler le mouvement de votre couleur.",
    sections: [
      {
        title: "Coloration & nuances",
        text: "Balayage, ombré hair, tie & dye, coloration complète ou retouche de racines : nous composons avec vos tons naturels pour créer des reflets lumineux et harmonieux, sans effet artificiel.",
      },
      {
        title: "Décoloration encadrée",
        text: "Passer du foncé au clair demande méthode et patience. Nous privilégions les décolorations progressives, accompagnées de soins réparateurs, pour préserver la fibre à chaque étape.",
      },
      {
        title: "Mise en forme & coiffage",
        text: "Brushing, ondulations glamour, boucles defined, lissage temporaire : la mise en forme sublime la couleur et structure votre visage, pour un rendu qui tient du salon à la maison.",
      },
    ],
    prestations: [
      "Balayage & ombré hair",
      "Tie & dye & reflets personnalisés",
      "Coloration complète & retouche de racines",
      "Décoloration progressive encadrée",
      "Lissage temporaire & défrichage doux",
      "Brushing & ondulations glamour",
      "Soin pigmentaire post-coloration",
    ],
    image: "/images/services/coloration-bene.png",
    objectPosition: "center 35%",
    gallery: [
      {
        src: "/images/services/coloration-bene.png",
        alt: "Coloration et mise en forme réalisées chez Institut Bene Hair",
      },
      {
        src: "/images/pages/coloration-1.png",
        alt: "Application d'une coloration au pinceau au salon",
      },
      {
        src: "/images/pages/coloration-2.png",
        alt: "Résultat final : balayage caramel aux reflets dorés",
      },
    ],
  },
  {
    slug: "perruques-coupes-confection",
    title: "Perruques, Coupes & Confection",
    tagline: "Votre perruque sur mesure, ajustée et coiffée à la main",
    duration: "1h - 3h",
    description:
      "Pose, coupe, ajustement et confection de perruques pour un rendu net, confortable et bien structuré.",
    intro:
      "Une perruque réussie est une perruque que personne ne devine. Nous concevons des perruques sur mesure — bonnet cousu main, lace fondante, densité ajustée — puis nous les ajustons et les coiffons à votre tête. Coupes structurées, finitions nettes et conseils d'entretien complètent le service.",
    sections: [
      {
        title: "Confection sur mesure",
        text: "Choix de la matière, de la densité, de la taille du bonnet et du type de lace : chaque perruque est construite à la main selon vos mesures et vos envies, pour un tombé naturel.",
      },
      {
        title: "Pose & ajustement",
        text: "Préparation de la base, collage ou couture, réglage des élastiques, fondu de la lace : nous soignons chaque détail pour un maintien parfait et une hairline indécelable.",
      },
      {
        title: "Coupes & relooking",
        text: "Bob carré, layered cut, fringe effacée : nous sculptons la perruque au visage, et nous redonnons vie à vos perruques existantes grâce à un relooking complet — lavage, soin et recoupe.",
      },
    ],
    prestations: [
      "Confection de perruques sur mesure",
      "Bonnet cousu main & lace fondante",
      "Pose, collage & ajustement",
      "Coupe au visage & finitions",
      "Relooking de perruque",
      "Lavage, soin & remisage",
      "Conseils de rangement et d'entretien",
    ],
    image: "/images/services/perruques-bene.png",
    objectPosition: "center 38%",
    gallery: [
      {
        src: "/images/services/perruques-bene.png",
        alt: "Perruques et coupes réalisées chez Institut Bene Hair",
      },
      {
        src: "/images/pages/perruques-1.png",
        alt: "Confection d'une perruque lace sur tête de mannequin",
      },
      {
        src: "/images/pages/perruques-2.png",
        alt: "Résultat final : perruque bob lisse parfaitement ajustée",
      },
    ],
  },
  {
    slug: "soins-entretien-cheveux",
    title: "Soins & Entretien Cheveux",
    tagline: "Des cheveux nourris, forts et durablement sains",
    duration: "45min - 2h",
    description:
      "Des soins capillaires pensés pour nourrir, entretenir et préserver la beauté de vos cheveux au quotidien.",
    intro:
      "La beauté des cheveux commence par leur santé. Nos protocoles de soins — hydratation profonde, apport de protéines, massage stimulant du cuir chevelu — sont ajustés à votre nature capillaire et à vos habitudes. Après chaque soin, vous repartez avec des gestes simples pour prolonger les résultats à la maison.",
    sections: [
      {
        title: "Diagnostic capillaire",
        text: "Cheveux secs, cassants, poreux, cuir chevelu sensible : nous identifons précisément les besoins de votre chevelure avant de choisir les produits et les protocoles adaptés.",
      },
      {
        title: "Protocoles de soins",
        text: "Bains d'huile, masques hydratants et protéinés, vapeur pour ouvrir les écailles, traitements ciblés du cuir chevelu : chaque soin est dosé selon l'état de la fibre, ni trop, ni trop peu.",
      },
      {
        title: "Entretien à la maison",
        text: "Le secret d'une chevelure saine tient dans la régularité. Nous vous remettons une routine claire — produits, fréquences, gestes de nuit — pour garder les bénéfices du salon entre deux visites.",
      },
    ],
    prestations: [
      "Diagnostic capillaire personnalisé",
      "Bain d'huile & massage du cuir chevelu",
      "Soin hydratant profond & vapeur",
      "Soin protéiné & reconstruction",
      "Traitement ciblé du cuir chevelu",
      "Défrisage doux & hydratation",
      "Routine d'entretien sur mesure",
    ],
    image: "/images/services/soins-bene.png",
    objectPosition: "center 42%",
    gallery: [
      {
        src: "/images/services/soins-bene.png",
        alt: "Soins capillaires réalisés chez Institut Bene Hair",
      },
      {
        src: "/images/pages/soins-1.png",
        alt: "Soin nourrissant appliqué à l'espace lavage du salon",
      },
      {
        src: "/images/pages/soins-2.png",
        alt: "Résultat final : boucles hydratées, souples et brillantes",
      },
    ],
  },
  {
    slug: "onglerie",
    title: "Onglerie",
    tagline: "Des ongles impeccables, des finitions qui durent",
    duration: "45min - 2h",
    description:
      "Des mains et des pieds soignées avec des finitions nettes, durables et élégantes pour toutes les envies.",
    intro:
      "Mains et pieds méritent la même exigence que vos cheveux. Manucure russe, pose de gel, nail art délicat ou classique intemporel : notre prothésiste ongulaire travaille avec des produits professionnels et une hygiène irréprochable, pour des ongles élégants qui durent.",
    sections: [
      {
        title: "Manucure & pédicure",
        text: "Mise en forme, soin des cuticules, limage précis et massage nourrissant : la manucure classique comme la manucure russe sont réalisées dans le respect de l'ongle naturel.",
      },
      {
        title: "Poses & renforcements",
        text: "Gel de couleur, capsules, semi-permanent ou renforcement d'ongles naturels : nous choisissons la pose adaptée à votre vie quotidienne pour une tenue longue durée sans compromis.",
      },
      {
        title: "Nail art & finitions",
        text: "French revisitée, nudes dorés, motifs discrets ou créations audacieuses : le nail art est dessiné à la main, à votre image, avec des finitions brillantes et nettes.",
      },
    ],
    prestations: [
      "Manucure classique & manucure russe",
      "Pédicure complète",
      "Pose de gel & capsules",
      "Vernis semi-permanent",
      "Nail art dessiné à la main",
      "Réparation d'ongle",
      "Soins des cuticules & de la peau",
    ],
    image: "/images/services/onglerie-bene.png",
    objectPosition: "center 48%",
    gallery: [
      {
        src: "/images/services/onglerie-bene.png",
        alt: "Prestation d'onglerie réalisée chez Institut Bene Hair",
      },
      {
        src: "/images/pages/onglerie-1.png",
        alt: "Prothésiste ongulaire réalisant une manucure gel",
      },
      {
        src: "/images/pages/onglerie-2.png",
        alt: "Résultat final : manucure nude dorée aux finitions nettes",
      },
    ],
  },
];

export const ABOUT_IMAGES = {
  salon: {
    src: "/images/pages/apropos-1.png",
    alt: "Intérieur élégant de l'institut Bene Hair à Abidjan",
  },
  equipe: {
    src: "/images/pages/apropos-2.png",
    alt: "L'équipe de coiffeuses de l'institut Bene Hair au travail",
  },
};

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
