import { cookies } from 'next/headers'
import { DEFAULT_PRAYER_LOCALE, isPrayerLocale, PRAYERS_LOCALE_COOKIE } from './constants'
import type { PrayerLocale } from './get-prayer-translations'

export function getDefaultPrayerLocale(): PrayerLocale {
  return DEFAULT_PRAYER_LOCALE
}

export async function getPrayerLocale(): Promise<PrayerLocale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(PRAYERS_LOCALE_COOKIE)?.value

  if (isPrayerLocale(value)) {
    return value
  }

  return getDefaultPrayerLocale()
}
