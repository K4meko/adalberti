import cs from './cs.json'
import en from './en.json'
import la from './la.json'
import pl from './pl.json'
import ru from './ru.json'
import sk from './sk.json'

export const prayerLocales = {
  cs,
  sk,
  en,
  la,
  ru,
  pl,
} as const

export type PrayerLocale = keyof typeof prayerLocales
export type PrayerTranslations = (typeof prayerLocales)['cs']

export function getPrayerTranslations(locale: PrayerLocale): PrayerTranslations {
  return prayerLocales[locale]
}
