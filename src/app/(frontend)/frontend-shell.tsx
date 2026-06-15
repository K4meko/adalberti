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
  Box,
  Burger,
  Group,
  Text,
} from '@mantine/core'

type FrontendShellProps = {
  children: React.ReactNode
  locale: Locale
}

const sidebarColor = 'var(--adalberti-sidebar)'

export default function FrontendShell({ children, locale }: FrontendShellProps) {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      withBorder={false}
      header={{ height: 60 }}
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      styles={{
        root: {
          backgroundColor: 'var(--adalberti-bg)',
        },
        navbar: {
          backgroundColor: sidebarColor,
          borderRight: 'none',
        },
        header: {
          backgroundColor: sidebarColor,
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        },
      }}
    >
      <AppShellHeader p="md" className="app-header">
        <Group justify="space-between" h="100%">
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" hiddenFrom="sm" color="white" />
          <Text fw={700} size="lg" className="app-brand">
            ADALBERTI
          </Text>
          <LanguageSwitcher locale={locale} />
        </Group>
      </AppShellHeader>

      <AppShellNavbar p={0} className="flex flex-col">
        <AppSidebar />
      </AppShellNavbar>

      <AppShellMain className="app-main">
        <Box py="sm" bg="#f4faf6" mih="100%">
          {children}
        </Box>
      </AppShellMain>
    </AppShell>
  )
}
