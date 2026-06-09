'use client'

import { usePathname } from 'next/navigation'
import { Box, Divider, NavLink, ScrollArea, Text, Title } from '@mantine/core'
import ViceOAdsNavItem from './_components/vice-o-ads-nav-item'
import { useLocale } from './locale-context'
import { navItems } from './locales/nav-items'

export default function AppSidebar() {
  const pathname = usePathname()
  const { common } = useLocale()

  return (
    <Box className="h-full w-full border-r border-zinc-200 bg-white flex flex-col">
      <Box p="md">
        <Title order={4}>{common.sidebar.title}</Title>
        <Text size="sm" color="dimmed" mt="xs">
          {common.sidebar.subtitle}
        </Text>
      </Box>

      <ScrollArea style={{ height: 'calc(100vh - 144px)' }} type="auto" offsetScrollbars>
        <Box component="nav" className="space-y-2 p-3 pb-4" style={{ overflow: 'visible' }}>
          {navItems.map((item) => {
            if (item.key === 'vice-o-ads') {
              return <ViceOAdsNavItem key={item.key} />
            }

            const active = pathname === item.href

            return (
              <NavLink
                key={item.key}
                href={item.href}
                label={common.nav[item.key]}
                active={active}
              />
            )
          })}
        </Box>
      </ScrollArea>

      <Box className="px-3 pb-4">
        <Divider my="sm" />
        <Text size="xs" color="dimmed">
          {common.sidebar.footer}
        </Text>
      </Box>
    </Box>
  )
}
