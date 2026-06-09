'use client'

import { useState } from 'react'
import { Paper, Stack, Text, Title } from '@mantine/core'
import PrayerLanguageSwitcher from './prayer-language-switcher'
import {
  getPrayerTranslations,
  type PrayerLocale,
} from '../locales/prayers/get-prayer-translations'

type PrayersContentProps = {
  pageTitle: string
  initialLocale: PrayerLocale
}

export default function PrayersContent({ pageTitle, initialLocale }: PrayersContentProps) {
  const [locale, setLocale] = useState(initialLocale)
  const content = getPrayerTranslations(locale)

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Title order={1}>{pageTitle}</Title>
        <PrayerLanguageSwitcher locale={locale} onChange={setLocale} />
      </Stack>

      <Stack gap="xs" ta="center">
        <Title order={2}>{content.heading}</Title>
        <Text fw={500}>{content.subheading}</Text>
      </Stack>

      <Paper radius="md" p="lg" withBorder>
        <Stack gap="md">
          <Title order={3}>{content.morning.title}</Title>
          <Text style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>{content.morning.text}</Text>
        </Stack>
      </Paper>

      <Paper radius="md" p="md" withBorder>
        <Stack gap="xs">
          {content.invocations.map((invocation) => (
            <Stack key={invocation.time} gap={2}>
              <Text fw={700} size="sm">
                {invocation.time}
              </Text>
              <Text size="sm" style={{ lineHeight: 1.6 }}>
                {invocation.text}
                <br />
                {content.invocationClosing}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Paper>

      <Paper radius="md" p="lg" withBorder>
        <Stack gap="md">
          <Title order={3}>{content.evening.title}</Title>
          {content.evening.paragraphs.map((paragraph, index) => (
            <Text key={index} style={{ lineHeight: 1.7 }}>
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Paper>
    </Stack>
  )
}
