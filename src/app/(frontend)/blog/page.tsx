import { getPayload } from 'payload'
import React from 'react'
import { Anchor, Container, Paper, Stack, Text, Title } from '@mantine/core'

import { MantineNextLink } from '../mantine-next-link'
import config from '@/payload.config'
import type { Post } from '@/payload-types'

export default async function BlogPage() {
  const payload = await getPayload({ config: await config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    draft: false,
    sort: '-createdAt',
    limit: 100,
  })

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Blog</Title>

        {posts.length === 0 ? (
          <Text c="dimmed">
            No published posts yet. Create one in the{' '}
            <Anchor href="/admin/collections/posts">admin panel</Anchor> and click Publish.
          </Text>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </Stack>
    </Container>
  )
}

function PostCard({ post }: { post: Post }) {
  const date = new Date(post.createdAt).toLocaleDateString('cs-CZ', {
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
          Read more
        </MantineNextLink>
      </Stack>
    </Paper>
  )
}
