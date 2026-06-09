import { cookies } from 'next/headers'
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from './constants'
import type { Locale } from './get-translations'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value

  if (isLocale(value)) {
    return value
  }

  return DEFAULT_LOCALE
}
