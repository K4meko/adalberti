'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Divider, NavLink, ScrollArea, Text, Title } from '@mantine/core'

const navItems = [
  { label: 'Úvod', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Modlitby', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Poslání a cíl', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Více o ADS', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Farnost jako rodina', href: '/blog', file: 'app/(frontend)/blog/page.tsx' },
  {
    label: 'Ezechielova vize',
    href: '/introduction',
    file: 'app/(frontend)/introduction/page.tsx',
  },
  { label: 'Čtenářský koutek', href: '/dashboard', file: 'app/(frontend)/dashboard/layout.tsx' },
  { label: 'Kázání', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Kontakt', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Královská cesta', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Útěcha v písni', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Box className="hidden md:block md:w-72 border-r border-zinc-200 bg-white">
      <Box p="md">
        <Title order={4}>Frontend pages</Title>
        <Text size="sm" color="dimmed" mt="xs">
          Reflects current files and routes.
        </Text>
      </Box>

      <ScrollArea style={{ height: 'calc(100vh - 144px)' }}>
        <Box component="nav" className="space-y-2 p-3 pb-4">
          {navItems.map((item) => {
            const active = pathname === item.href

            return <NavLink key={item.href} href={item.href} label={item.label}></NavLink>
          })}
        </Box>
      </ScrollArea>

      <Box className="px-3 pb-4">
        <Divider my="sm" />
        <Text size="xs" color="dimmed">
          Built with Mantine and Next.js App Router.
        </Text>
      </Box>
    </Box>
  )
}
