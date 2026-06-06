import en from "../i18n/ui/en";
import zhTW from "../i18n/ui/zh-TW";

const dictionaries: Record<string, Record<string, string>> = {
  en: en as unknown as Record<string, string>,
  "zh-TW": zhTW,
};

export function useT(locale: string) {
  const dict = dictionaries[locale] ?? en;
  return (key: string, vars?: Record<string, string>): string => {
    let str = dict[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, v);
      }
    }
    return str;
  };
}

export interface AnnotationTranslation {
  body: string;
}

export interface SongTranslation {
  album?: string;
  genre?: string;
  lyricSectionLabels?: Record<string, string>;
  story?: {
    title?: string;
    body?: string;
  };
  annotations?: Record<string, AnnotationTranslation>;
  themes?: string[];
  moods?: string[];
  credits?: string[];
}

export function localizedPath(locale: string, path: string): string {
  if (locale === "en") return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  if (locale === "zh-TW") {
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
