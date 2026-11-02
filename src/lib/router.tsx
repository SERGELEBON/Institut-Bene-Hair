"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Routeur SPA — chaque onglet et chaque service dispose de sa propre "page"
 * sans quitter la route "/" : la navigation passe par le hash d'URL.
 *
 * Conventions :
 *  - `#/…`            → page (ex : #/services, #/services/onglerie)
 *  - `#section`       → ancre de section sur la page d'accueil (ex : #apropos)
 *
 * Les boutons précédent / suivant du navigateur fonctionnent,
 * et les liens profonds (ex : #/services/onglerie) sont partageables.
 */

type Route = { path: string; section: string | null };

type SiteRouterValue = Route & {
  /** Navigue vers une page, ex : navigate("/services/onglerie") */
  navigate: (to: string) => void;
};

const SiteRouterContext = createContext<SiteRouterValue>({
  path: "/",
  section: null,
  navigate: () => {},
});

const EMPTY_HASH = "#";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSnapshot(): string {
  return window.location.hash || EMPTY_HASH;
}

function getServerSnapshot(): string {
  return EMPTY_HASH;
}

function parseHash(hash: string): Route {
  if (hash.startsWith("#/")) {
    return { path: hash.slice(1) || "/", section: null };
  }
  return { path: "/", section: hash.replace(/^#/, "") || null };
}

export function SiteRouterProvider({ children }: { children: ReactNode }) {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const route = useMemo(() => parseHash(hash), [hash]);

  // Retour en haut après un changement de page
  useEffect(() => {
    if (route.section) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [route.path, route.section]);

  // Ancre de section (ex : #contact) → défilement doux après rendu
  useEffect(() => {
    if (route.path !== "/" || !route.section) return;
    const id = route.section;
    const timer = window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 90);
    return () => window.clearTimeout(timer);
  }, [route.path, route.section]);

  const navigate = (to: string) => {
    const next = `#${to}`;
    if ((window.location.hash || EMPTY_HASH) === next) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = next;
  };

  return (
    <SiteRouterContext.Provider
      value={{ path: route.path, section: route.section, navigate }}
    >
      {children}
    </SiteRouterContext.Provider>
  );
}

export function useSiteRouter() {
  return useContext(SiteRouterContext);
}
