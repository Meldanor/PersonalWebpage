import type { CollectionEntry, CollectionKey } from "astro:content";
import { defaultLang, showDefaultLang, ui } from "./ui";

export function useTranslations(lang: string | undefined) {
  // To avoid strange typing with Astro.currentLocale
  const internalLang = lang as keyof typeof ui;
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[internalLang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: string | undefined) {
  // To avoid strange typing with Astro.currentLocale
  const internalLang = lang as keyof typeof ui;
  return function translatePath(path: string, l: string = internalLang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function useFilterCollection(lang: string | undefined) {
  // To avoid strange typing with Astro.currentLocale
  return function filter<C extends CollectionKey>(entry: CollectionEntry<C>) {
    const entryLang = entry.id.split("/")[0];
    return entryLang === lang;
  };
}

export function useTranslatedId(lang: string | undefined) {
  return function filter<C extends CollectionKey>(entry: CollectionEntry<C>) {
    const slug = entry.id.split("/")[1];
    return lang === defaultLang ? slug : entry.id;
  };
}
