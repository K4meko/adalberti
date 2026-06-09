import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'
import { getCommonTranslations } from '../locales/get-translations'
import type { NavKey } from '../locales/nav-items'
import { getLocale } from '../locales/locale'

type PlaceholderPageProps = {
  navKey: NavKey
  sourceFile: string
}

export default async function PlaceholderPage({ navKey, sourceFile }: PlaceholderPageProps) {
  const locale = await getLocale()
  const t = getCommonTranslations(locale)

  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>{t.nav[navKey]}</Title>
          <Text color="dimmed">{t.placeholder}</Text>
          <Text size="sm" color="dimmed">
            {t.sourceFile} <Code>{sourceFile}</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
