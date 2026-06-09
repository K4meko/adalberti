import commonCs from './cs/common.json'
import commonEn from './en/common.json'
import introductionCs from './cs/introduction.json'
import introductionEn from './en/introduction.json'
import poslaniACilCs from './cs/poslani-a-cil.json'
import poslaniACilEn from './en/poslani-a-cil.json'
import viceOAdsCs from './cs/vice-o-ads.json'
import viceOAdsEn from './en/vice-o-ads.json'

const locales = {
  cs: {
    common: commonCs,
    introduction: introductionCs,
    'poslani-a-cil': poslaniACilCs,
    'vice-o-ads': viceOAdsCs,
  },
  en: {
    common: commonEn,
    introduction: introductionEn,
    'poslani-a-cil': poslaniACilEn,
    'vice-o-ads': viceOAdsEn,
  },
} as const

export type Locale = keyof typeof locales
export type CommonTranslations = (typeof locales)['en']['common']
export type IntroductionTranslations = (typeof locales)['en']['introduction']
export type PoslaniACilTranslations = (typeof locales)['en']['poslani-a-cil']
export type ViceOAdsTranslations = (typeof locales)['en']['vice-o-ads']

export function getCommonTranslations(locale: Locale): CommonTranslations {
  return locales[locale].common
}

export function getIntroductionTranslations(locale: Locale): IntroductionTranslations {
  return locales[locale].introduction
}

export function getPoslaniACilTranslations(locale: Locale): PoslaniACilTranslations {
  return locales[locale]['poslani-a-cil']
}

export function getViceOAdsTranslations(locale: Locale): ViceOAdsTranslations {
  return locales[locale]['vice-o-ads']
}
