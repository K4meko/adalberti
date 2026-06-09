import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'
import { getCommonTranslations, getIntroductionTranslations } from '../locales/get-translations'
import { getLocale } from '../locales/locale'

export default async function IntroductionPage() {
  const locale = await getLocale()
  const t = getIntroductionTranslations(locale)
  const common = getCommonTranslations(locale)

  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>{t.title}</Title>
          <Text color="dimmed" fs="italic">
            {t.Hle_beranek}
          </Text>
          <Text fw={700}>{t.Mocne_zasahl}</Text>
          <Text color="dimmed">{t.Snahy_o_zmenu}</Text>
          <Text color="dimmed">{t.Kajicnosti}</Text>
          <Text color="dimmed">{t.Kdo_zije}</Text>
          <Text color="dimmed">{t.Po_tricet}</Text>
          <Text color="dimmed" fs="italic">
            {t.Az_udelate}
          </Text>
          <Text color="dimmed">{t.Tento_postoj}</Text>
          <Text size="sm" color="dimmed">
            {common.sourceFile} <Code>app/(frontend)/introduction/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
