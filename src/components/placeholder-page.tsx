import React from 'react'
import { Stack, Text, Title } from '@mantine/core'
import PageCard from '@/components/page-card'
import { getCommonTranslations } from '@/app/(frontend)/locales/get-translations'
import type { NavKey } from '@/app/(frontend)/locales/nav-items'
import { getLocale } from '@/app/(frontend)/locales/locale'

type PlaceholderPageProps = {
  navKey: NavKey
}

export default async function PlaceholderPage({ navKey }: PlaceholderPageProps) {
  const locale = await getLocale()
  const t = getCommonTranslations(locale)

  return (
    <PageCard>
      <Stack gap="md">
        <Title order={1}>{t.nav[navKey]}</Title>
        <Text c="dimmed" style={{ lineHeight: 1.7 }}>
          {t.placeholder}
        </Text>
      </Stack>
    </PageCard>
  )
}
