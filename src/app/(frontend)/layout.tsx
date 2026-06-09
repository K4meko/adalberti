import React from 'react'
import './global.css'
import { Inter, Playfair_Display } from 'next/font/google'
import FrontendShell from './frontend-shell'
import { LocaleProvider } from './locale-context'
import { getCommonTranslations } from './locales/get-translations'
import { getLocale } from './locales/locale'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
import '@mantine/core/styles.css'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const locale = await getLocale()
  const common = getCommonTranslations(locale)

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <MantineProvider>
          <LocaleProvider locale={locale} common={common}>
            <FrontendShell locale={locale}>{children}</FrontendShell>
          </LocaleProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
