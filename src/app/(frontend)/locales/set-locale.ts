'use server'

import { cookies } from 'next/headers'
import { LOCALE_COOKIE, isLocale } from './constants'
import type { Locale } from './get-translations'

export async function setLocale(locale: string): Promise<Locale | null> {
  if (!isLocale(locale)) {
    return null
  }

  const cookieStore = await cookies()
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  return locale
}
