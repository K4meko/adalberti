import React from 'react'
import { Container, Paper } from '@mantine/core'
import PrayersContent from '@/app/(frontend)/_components/prayers-content'
import { getCommonTranslations } from '@/app/(frontend)/locales/get-translations'
import { getLocale } from '@/app/(frontend)/locales/locale'
import { getPrayerLocale } from '@/app/(frontend)/locales/prayers/locale'

export default async function ModlitbyPage() {
  const siteLocale = await getLocale()
  const common = getCommonTranslations(siteLocale)
  const prayerLocale = await getPrayerLocale()

  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <PrayersContent pageTitle={common.nav.modlitby} initialLocale={prayerLocale} />
      </Paper>
    </Container>
  )
}
