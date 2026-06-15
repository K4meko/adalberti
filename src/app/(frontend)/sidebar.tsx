'use client'

import { usePathname } from 'next/navigation'
import { Box, NavLink, ScrollArea } from '@mantine/core'
import ViceOAdsNavItem from './_components/vice-o-ads-nav-item'
import { useLocale } from './locale-context'
import { navItems } from './locales/nav-items'

export default function AppSidebar() {
  const pathname = usePathname()
  const { common } = useLocale()

  return (
    <Box className="h-full w-full flex flex-col" style={{ color: 'white' }}>
      <ScrollArea style={{ flex: 1 }} type="auto" offsetScrollbars>
        <Box component="nav" className="sidebar-nav space-y-1 px-2 py-3" style={{ overflow: 'visible' }}>
          {navItems.map((item) => {
            if (item.key === 'vice-o-ads') {
              return <ViceOAdsNavItem key={item.key} />
            }

            return (
              <NavLink
                key={item.key}
                href={item.href}
                label={common.nav[item.key]}
                active={pathname === item.href}
              />
            )
          })}
        </Box>
      </ScrollArea>
    </Box>
  )
}
