"use client";

import PageHero from "../page-hero";
import Services from "../services";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nos Prestations"
        title="Nos Services"
        subtitle="Chaque prestation a sa page — découvrez le détail de notre savoir-faire"
        image="/images/pages/bandeau-services.png"
        imageAlt="Poste de coiffure élégant de l'institut Bene Hair"
        breadcrumb={[
          { label: "Accueil", href: "#/" },
          { label: "Services" },
        ]}
      />

      {/* Catalogue complet — chaque carte mène à sa page détaillée */}
      <Services />
    </main>
  );
}
