export const LANGS = ["th", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** A piece of copy in both site languages. */
export type L = { th: string; en: string };

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function t(copy: L, lang: Lang): string {
  return copy[lang];
}

/** Build a locale-prefixed path, e.g. href("th", "/about") → "/th/about". */
export function href(lang: Lang, path = ""): string {
  return `/${lang}${path}`;
}

export type PageParams<T extends Record<string, string> = Record<string, never>> = {
  params: Promise<{ lang: string } & T>;
};
