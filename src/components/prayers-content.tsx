'use client'

import { useState } from 'react'
import { Stack, Text, Title } from '@mantine/core'
import PrayerLanguageSwitcher from '@/components/prayer-language-switcher'
import {
  getPrayerTranslations,
  type PrayerLocale,
} from '@/app/(frontend)/locales/prayers/get-prayer-translations'

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
        <Text fw={500} c="forest.7">
          {content.subheading}
        </Text>
      </Stack>

      <Stack gap="md">
        <Title order={3} c="forest.8">
          {content.morning.title}
        </Title>
        <Text style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>{content.morning.text}</Text>
      </Stack>

      <Stack gap="xs">
        {content.invocations.map((invocation) => (
          <Stack key={invocation.time} gap={2}>
            <Text fw={700} size="sm" c="forest.7">
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

      <Stack gap="md">
        <Title order={3} c="forest.8">
          {content.evening.title}
        </Title>
        {content.evening.paragraphs.map((paragraph, index) => (
          <Text key={index} style={{ lineHeight: 1.7 }}>
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Stack>
  )
}
