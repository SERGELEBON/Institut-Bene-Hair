"use client";

import PageHero from "../page-hero";
import Gallery from "../gallery";

export default function GaleriePage() {
  return (
    <main>
      <PageHero
        eyebrow="Galerie"
        title="Nos Réalisations"
        subtitle="Un aperçu du travail de notre équipe, coiffure après coiffure"
        image="/images/pages/bandeau-galerie.png"
        imageAlt="Séance photo dans le salon de coiffure Bene Hair"
        breadcrumb={[
          { label: "Accueil", href: "#/" },
          { label: "Galerie" },
        ]}
      />

      {/* Galerie avec visionneuse — section d'origine, conservée à l'identique */}
      <Gallery />
    </main>
  );
}
