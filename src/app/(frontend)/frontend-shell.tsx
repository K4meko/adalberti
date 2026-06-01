'use client'

import React, { useState } from 'react'
import AppSidebar from './sidebar'
import {
  AppShell,
  AppShellNavbar,
  AppShellMain,
  AppShellHeader,
  Burger,
  Group,
  Text,
} from '@mantine/core'

export default function FrontendShell({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      className="min-h-screen bg-slate-50"
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShellHeader height={56} p="md">
        <Group position="apart">
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" />
          <Text fw={700}>ADALBERTI</Text>
        </Group>
      </AppShellHeader>

      <AppShellNavbar p={0} className="flex flex-col">
        <AppSidebar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
