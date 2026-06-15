import React from 'react'
import { Stack, Text, Title } from '@mantine/core'
import PageCard from '@/components/page-card'
import { getCommonTranslations, getPoslaniACilTranslations } from '../locales/get-translations'
import { getLocale } from '../locales/locale'

export default async function PoslaniACilPage() {
  const locale = await getLocale()
  const common = getCommonTranslations(locale)
  const t = getPoslaniACilTranslations(locale)

  return (
    <PageCard>
      <Stack gap="xl">
        <Title order={1}>{common.nav['poslani-a-cil']}</Title>

        <Stack gap="sm">
          <Text style={{ lineHeight: 1.7 }}>{t.gaudium.text}</Text>
          <Text ta="right" fs="italic" size="sm" c="forest.6">
            {t.gaudium.citation}
          </Text>
        </Stack>

        <Text style={{ lineHeight: 1.7 }}>{t.ads}</Text>

        <Stack gap="sm">
          <Text style={{ lineHeight: 1.7 }}>{t.firstCorinthians.text}</Text>
          <Text ta="right" fs="italic" size="sm" c="forest.6">
            {t.firstCorinthians.citation}
          </Text>
        </Stack>

        <Stack gap="xs" ta="center">
          {t.galatians.lines.map((line) => (
            <Text key={line} style={{ lineHeight: 1.7 }} fw={500}>
              {line}
            </Text>
          ))}
          <Text fs="italic" size="sm" c="forest.6" mt="xs">
            ({t.galatians.citation})
          </Text>
        </Stack>

        <Text style={{ lineHeight: 1.7 }}>{t.closing}</Text>
      </Stack>
    </PageCard>
  )
}
