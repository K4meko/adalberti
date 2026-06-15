import { getPayload } from 'payload'
import React from 'react'
import { Anchor, Divider, Stack, Text, Title } from '@mantine/core'

import PageCard from '@/components/page-card'
import { MantineNextLink } from '../mantine-next-link'
import { getCommonTranslations } from '../locales/get-translations'
import { getLocale } from '../locales/locale'
import config from '@/payload.config'
import type { Post } from '@/payload-types'

export default async function BlogPage() {
  const locale = await getLocale()
  const t = getCommonTranslations(locale)
  const payload = await getPayload({ config: await config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    draft: false,
    sort: '-createdAt',
    limit: 100,
  })

  const dateLocale = locale === 'cs' ? 'cs-CZ' : 'en-GB'

  return (
    <PageCard>
      <Stack gap="lg">
        <Title order={1}>{t.nav.blog}</Title>

        {posts.length === 0 ? (
          <Text c="dimmed">
            {t.blog.empty}{' '}
            <Anchor href="/admin/collections/posts" c="forest.7">
              {t.blog.emptyAdmin}
            </Anchor>{' '}
            {t.blog.emptySuffix}
          </Text>
        ) : (
          posts.map((post, index) => (
            <React.Fragment key={post.id}>
              {index > 0 && <Divider />}
              <PostCard post={post} dateLocale={dateLocale} readMore={t.blog.readMore} />
            </React.Fragment>
          ))
        )}
      </Stack>
    </PageCard>
  )
}

function PostCard({
  post,
  dateLocale,
  readMore,
}: {
  post: Post
  dateLocale: string
  readMore: string
}) {
  const date = new Date(post.createdAt).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Stack component="article" gap="xs">
      <Title order={2}>
        <MantineNextLink href={`/blog/${post.slug}`} underline="hover" c="forest.8">
          {post.title}
        </MantineNextLink>
      </Title>
      <Text size="sm" c="forest.6">
        {date}
      </Text>
      {post.excerpt && <Text c="dimmed">{post.excerpt}</Text>}
      <MantineNextLink href={`/blog/${post.slug}`} size="sm" c="forest.7" fw={600}>
        {readMore}
      </MantineNextLink>
    </Stack>
  )
}
