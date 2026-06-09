'use client'

import React, { useState } from 'react'
import AppSidebar from './sidebar'
import LanguageSwitcher from './language-switcher'
import type { Locale } from './locales/get-translations'
import {
  AppShell,
  AppShellNavbar,
  AppShellMain,
  AppShellHeader,
  Burger,
  Group,
  Text,
} from '@mantine/core'

type FrontendShellProps = {
  children: React.ReactNode
  locale: Locale
}

export default function FrontendShell({ children, locale }: FrontendShellProps) {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      className="min-h-screen bg-slate-50"
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShellHeader height={56} p="md">
        <Group justify="space-between">
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" />
          <Text fw={700}>ADALBERTI</Text>
          <LanguageSwitcher locale={locale} />
        </Group>
      </AppShellHeader>

      <AppShellNavbar p={0} className="flex flex-col">
        <AppSidebar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
