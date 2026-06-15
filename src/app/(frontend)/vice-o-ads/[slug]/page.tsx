import { notFound } from 'next/navigation'
import React from 'react'
import { Stack, Text, Title } from '@mantine/core'
import PageCard from '@/components/page-card'
import { getCommonTranslations, getViceOAdsTranslations } from '../../locales/get-translations'
import { getLocale } from '../../locales/locale'
import {
  isViceOAdsSectionSlug,
  type ViceOAdsSectionSlug,
  viceOAdsSections,
} from '../../locales/vice-o-ads-sections'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return viceOAdsSections.map((section) => ({ slug: section.slug }))
}

export default async function ViceOAdsSectionPage({ params }: Props) {
  const { slug } = await params

  if (!isViceOAdsSectionSlug(slug)) {
    notFound()
  }

  const locale = await getLocale()
  const common = getCommonTranslations(locale)
  const viceOAds = getViceOAdsTranslations(locale)
  const section = viceOAds.sections[slug as ViceOAdsSectionSlug]

  return (
    <PageCard>
      <Stack gap="md">
        <Text size="sm" c="forest.6" tt="uppercase" fw={600} style={{ letterSpacing: '0.06em' }}>
          {common.nav['vice-o-ads']}
        </Text>
        <Title order={1}>{section.title}</Title>
        <Text style={{ lineHeight: 1.7 }} c="dimmed">
          {section.content}
        </Text>
      </Stack>
    </PageCard>
  )
}
