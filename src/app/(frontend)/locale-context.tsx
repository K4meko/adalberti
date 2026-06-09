'use client'

import { createContext, useContext } from 'react'
import type { CommonTranslations, Locale } from './locales/get-translations'

type LocaleContextValue = {
  locale: Locale
  common: CommonTranslations
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

type LocaleProviderProps = {
  children: React.ReactNode
  locale: Locale
  common: CommonTranslations
}

export function LocaleProvider({ children, locale, common }: LocaleProviderProps) {
  return <LocaleContext.Provider value={{ locale, common }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
