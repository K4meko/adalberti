'use client'

import { useRouter } from 'next/navigation'
import { SegmentedControl } from '@mantine/core'
import { LOCALE_COOKIE } from './locales/constants'
import type { Locale } from './locales/get-translations'

type LanguageSwitcherProps = {
  locale: Locale
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()

  const handleChange = (value: string) => {
    document.cookie = `${LOCALE_COOKIE}=${value};path=/;max-age=31536000;SameSite=Lax`
    router.refresh()
  }

  return (
    <SegmentedControl
      size="xs"
      value={locale}
      onChange={handleChange}
      data={[
        { label: 'CZ', value: 'cs' },
        { label: 'EN', value: 'en' },
      ]}
    />
  )
}
