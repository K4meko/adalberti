import type { Locale } from './get-translations'

export const LOCALE_COOKIE = 'adalberti-locale'
export const DEFAULT_LOCALE: Locale = 'cs'

export function isLocale(value: string | undefined): value is Locale {
  return value === 'cs' || value === 'en'
}
