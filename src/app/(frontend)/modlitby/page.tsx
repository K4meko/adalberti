import React from 'react'
import PageCard from '@/components/page-card'
import PrayersContent from '@/components/prayers-content'
import { getCommonTranslations } from '@/app/(frontend)/locales/get-translations'
import { getLocale } from '@/app/(frontend)/locales/locale'
import { getPrayerLocale } from '@/app/(frontend)/locales/prayers/locale'

export default async function ModlitbyPage() {
  const siteLocale = await getLocale()
  const common = getCommonTranslations(siteLocale)
  const prayerLocale = await getPrayerLocale()

  return (
    <PageCard>
      <PrayersContent pageTitle={common.nav.modlitby} initialLocale={prayerLocale} />
    </PageCard>
  )
}
