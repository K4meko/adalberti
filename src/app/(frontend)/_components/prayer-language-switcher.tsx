'use client'

import { SegmentedControl } from '@mantine/core'
import { PRAYER_LOCALE_OPTIONS, PRAYERS_LOCALE_COOKIE } from '../locales/prayers/constants'
import type { PrayerLocale } from '../locales/prayers/get-prayer-translations'

type PrayerLanguageSwitcherProps = {
  locale: PrayerLocale
  onChange: (locale: PrayerLocale) => void
}

export default function PrayerLanguageSwitcher({ locale, onChange }: PrayerLanguageSwitcherProps) {
  const handleChange = (value: string) => {
    const nextLocale = value as PrayerLocale
    document.cookie = `${PRAYERS_LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`
    onChange(nextLocale)
  }

  return (
    <SegmentedControl
      size="xs"
      value={locale}
      onChange={handleChange}
      data={PRAYER_LOCALE_OPTIONS}
    />
  )
}
