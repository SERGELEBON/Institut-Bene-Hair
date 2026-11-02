"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import WigCards from "./wig-cards";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import Contact from "./contact";
import { SiteRouterProvider, useSiteRouter } from "@/lib/router";
import AproposPage from "./pages/apropos-page";
import ServicesPage from "./pages/services-page";
import ServiceDetailPage from "./pages/service-detail-page";
import GaleriePage from "./pages/galerie-page";
import ContactPage from "./pages/contact-page";

function CurrentView() {
  const { path } = useSiteRouter();

  let key = "/";
  let view = (
    <main>
      <Hero />
      <WigCards />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <Contact />
    </main>
  );

  if (path === "/apropos") {
    key = path;
    view = <AproposPage />;
  } else if (path === "/services") {
    key = path;
    view = <ServicesPage />;
  } else if (path.startsWith("/services/")) {
    key = path;
    view = <ServiceDetailPage slug={path.slice("/services/".length)} />;
  } else if (path === "/galerie") {
    key = path;
    view = <GaleriePage />;
  } else if (path === "/contact") {
    key = path;
    view = <ContactPage />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      >
        {view}
      </motion.div>
    </AnimatePresence>
  );
}

export default function SiteShell() {
  return (
    <SiteRouterProvider>
      <div className="flex min-h-screen flex-col bg-cream-100">
        <Navbar />
        <CurrentView />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </SiteRouterProvider>
  );
}
