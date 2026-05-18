'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Divider, NavLink, ScrollArea, Text, Title } from '@mantine/core'

const navItems = [
  { label: 'Introduction', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { label: 'Blog', href: '/blog', file: 'app/(frontend)/blog/page.tsx' },
  { label: 'Dashboard', href: '/dashboard', file: 'app/(frontend)/dashboard/layout.tsx' },
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
