import React from 'react'
import { Stack, Text, Title } from '@mantine/core'
import PageCard from '@/components/page-card'
import { getIntroductionTranslations } from '../locales/get-translations'
import { getLocale } from '../locales/locale'

export default async function IntroductionPage() {
  const locale = await getLocale()
  const t = getIntroductionTranslations(locale)

  return (
    <PageCard>
      <Stack gap="md">
        <Title order={1}>{t.title}</Title>
        <Text c="dimmed" fs="italic" style={{ lineHeight: 1.7 }}>
          {t.Hle_beranek}
        </Text>
        <Text fw={700} c="forest.7">
          {t.Mocne_zasahl}
        </Text>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.Snahy_o_zmenu}
        </Text>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.Kajicnosti}
        </Text>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.Kdo_zije}
        </Text>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.Po_tricet}
        </Text>
        <Text c="dimmed" fs="italic" style={{ lineHeight: 1.7 }}>
          {t.Az_udelate}
        </Text>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.Tento_postoj}
        </Text>
      </Stack>
    </PageCard>
  )
}
