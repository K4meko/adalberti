import type { PrayerLocale } from './get-prayer-translations'

export const PRAYERS_LOCALE_COOKIE = 'adalberti-prayers-locale'
export const DEFAULT_PRAYER_LOCALE: PrayerLocale = 'cs'

export const PRAYER_LOCALE_OPTIONS: { label: string; value: PrayerLocale }[] = [
  { label: 'CS', value: 'cs' },
  { label: 'SK', value: 'sk' },
  { label: 'EN', value: 'en' },
  { label: 'LA', value: 'la' },
  { label: 'RU', value: 'ru' },
  { label: 'PL', value: 'pl' },
]

export function isPrayerLocale(value: string | undefined): value is PrayerLocale {
  return PRAYER_LOCALE_OPTIONS.some((option) => option.value === value)
}
