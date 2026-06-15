'use client'

import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Group, UnstyledButton } from '@mantine/core'
import { setLocale } from './locales/set-locale'
import type { Locale } from './locales/get-translations'

type LanguageSwitcherProps = {
  locale: Locale
}

const options: { label: string; value: Locale }[] = [
  { label: 'CZ', value: 'cs' },
  { label: 'EN', value: 'en' },
]

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState(locale)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    setCurrentLocale(locale)
  }, [locale])

  const handleSelect = (nextLocale: Locale) => {
    if (nextLocale === currentLocale || isPending) {
      return
    }

    setCurrentLocale(nextLocale)

    startTransition(async () => {
      await setLocale(nextLocale)
      router.refresh()
    })
  }

  return (
    <Group gap={4} className="lang-switch" role="group" aria-label="Language">
      {options.map((option) => {
        const active = currentLocale === option.value

        return (
          <UnstyledButton
            key={option.value}
            type="button"
            className={`lang-switch__btn${active ? ' lang-switch__btn--active' : ''}`}
            aria-pressed={active}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </UnstyledButton>
        )
      })}
    </Group>
  )
}
