'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Menu, NavLink } from '@mantine/core'
import { useLocale } from '../locale-context'
import { getViceOAdsTranslations } from '../locales/get-translations'
import { viceOAdsSections } from '../locales/vice-o-ads-sections'

export default function ViceOAdsNavItem() {
  const pathname = usePathname()
  const { locale, common } = useLocale()
  const viceOAds = getViceOAdsTranslations(locale)

  const isActive = pathname === '/vice-o-ads' || pathname.startsWith('/vice-o-ads/')

  return (
    <Menu
      trigger="hover"
      position="right-start"
      offset={12}
      openDelay={80}
      closeDelay={150}
      withinPortal
      zIndex={1000}
    >
      <Menu.Target>
        <Box>
          <NavLink
            component={Link}
            href={`/vice-o-ads/${viceOAdsSections[0].slug}`}
            label={common.nav['vice-o-ads']}
            active={isActive}
          />
        </Box>
      </Menu.Target>

      <Menu.Dropdown miw={320} maw={360}>
        {viceOAdsSections.map((section) => {
          const href = `/vice-o-ads/${section.slug}`
          const active = pathname === href

          return (
            <Menu.Item
              key={section.slug}
              component={Link}
              href={href}
              fw={active ? 600 : 400}
              styles={{
                item: {
                  whiteSpace: 'normal',
                  lineHeight: 1.4,
                  height: 'auto',
                  paddingTop: 8,
                  paddingBottom: 8,
                },
              }}
            >
              {viceOAds.sections[section.key].title}
            </Menu.Item>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}
