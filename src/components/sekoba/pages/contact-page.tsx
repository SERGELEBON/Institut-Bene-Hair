"use client";

import PageHero from "../page-hero";
import Contact from "../contact";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contactez-nous"
        title="Prenez Rendez-vous"
        subtitle="Une question, une envie ? Écrivez-nous, on vous répond"
        image="/images/pages/bandeau-contact.png"
        imageAlt="Accueil de l'institut Bene Hair, téléphone et agenda du salon"
        breadcrumb={[
          { label: "Accueil", href: "#/" },
          { label: "Contact" },
        ]}
      />

      {/* Coordonnées, carte et formulaire — section d'origine, conservée à l'identique */}
      <Contact />
    </main>
  );
}
