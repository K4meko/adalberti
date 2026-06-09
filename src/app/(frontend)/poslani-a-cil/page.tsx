import React from 'react'
import { Container, Paper, Stack, Text, Title } from '@mantine/core'
import { getCommonTranslations, getPoslaniACilTranslations } from '../locales/get-translations'
import { getLocale } from '../locales/locale'

export default async function PoslaniACilPage() {
  const locale = await getLocale()
  const common = getCommonTranslations(locale)
  const t = getPoslaniACilTranslations(locale)

  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack gap="xl">
          <Title order={1}>{common.nav['poslani-a-cil']}</Title>

          <Stack gap="sm">
            <Text style={{ lineHeight: 1.7 }}>{t.gaudium.text}</Text>
            <Text ta="right" fs="italic" size="sm" c="dimmed">
              {t.gaudium.citation}
            </Text>
          </Stack>

          <Text style={{ lineHeight: 1.7 }}>{t.ads}</Text>

          <Stack gap="sm">
            <Text style={{ lineHeight: 1.7 }}>{t.firstCorinthians.text}</Text>
            <Text ta="right" fs="italic" size="sm" c="dimmed">
              {t.firstCorinthians.citation}
            </Text>
          </Stack>

          <Stack gap="xs" ta="center">
            {t.galatians.lines.map((line) => (
              <Text key={line} style={{ lineHeight: 1.7 }}>
                {line}
              </Text>
            ))}
            <Text fs="italic" size="sm" c="dimmed" mt="xs">
              ({t.galatians.citation})
            </Text>
          </Stack>

          <Text style={{ lineHeight: 1.7 }}>{t.closing}</Text>
        </Stack>
      </Paper>
    </Container>
  )
}
