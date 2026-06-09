import { getPayload } from 'payload'
import React from 'react'
import { Anchor, Container, Paper, Stack, Text, Title } from '@mantine/core'

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
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>{t.nav.blog}</Title>

        {posts.length === 0 ? (
          <Text c="dimmed">
            {t.blog.empty}{' '}
            <Anchor href="/admin/collections/posts">{t.blog.emptyAdmin}</Anchor> {t.blog.emptySuffix}
          </Text>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} dateLocale={dateLocale} readMore={t.blog.readMore} />
          ))
        )}
      </Stack>
    </Container>
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
    <Paper component="article" radius="md" p="xl" withBorder>
      <Stack gap="xs">
        <Title order={2}>
          <MantineNextLink href={`/blog/${post.slug}`} underline="hover">
            {post.title}
          </MantineNextLink>
        </Title>
        <Text size="sm" c="dimmed">
          {date}
        </Text>
        {post.excerpt && <Text c="dimmed">{post.excerpt}</Text>}
        <MantineNextLink href={`/blog/${post.slug}`} size="sm">
          {readMore}
        </MantineNextLink>
      </Stack>
    </Paper>
  )
}
