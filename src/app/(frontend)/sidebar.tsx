'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Divider, NavLink, ScrollArea, Text, Title } from '@mantine/core'

const navItems = [
  { label: 'Úvod', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Modlitby', href: '/modlitby', file: 'app/(frontend)/modlitby/page.tsx' },
  { label: 'Poslání a cíl', href: '/poslani-a-cil', file: 'app/(frontend)/poslani-a-cil/page.tsx' },
  { label: 'Více o ADS', href: '/vice-o-ads', file: 'app/(frontend)/vice-o-ads/page.tsx' },
  {
    label: 'Farnost jako rodina',
    href: '/farnost-jako-rodina',
    file: 'app/(frontend)/farnost-jako-rodina/page.tsx',
  },
  {
    label: 'Ezechielova vize',
    href: '/ezechielova-vize',
    file: 'app/(frontend)/ezechielova-vize/page.tsx',
  },
  { label: 'Čtenářský koutek', href: '/blog', file: 'app/(frontend)/blog/page.tsx' },
  { label: 'Kázání', href: '/kazani', file: 'app/(frontend)/kazani/page.tsx' },
  { label: 'Kontakt', href: '/kontakt', file: 'app/(frontend)/kontakt/page.tsx' },
  {
    label: 'Královská cesta',
    href: '/kralovska-cesta',
    file: 'app/(frontend)/kralovska-cesta/page.tsx',
  },
  {
    label: 'Útěcha v písni',
    href: '/utecha-v-pisni',
    file: 'app/(frontend)/utecha-v-pisni/page.tsx',
  },
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

            return <NavLink key={item.label} href={item.href} label={item.label} active={active} />
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
