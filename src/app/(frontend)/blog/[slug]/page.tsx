import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Container, Paper, Stack, Text, Title } from '@mantine/core'

import { MantineNextLink } from '../../mantine-next-link'
import config from '@/payload.config'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config: await config })

  const { docs } = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1,
    where: {
      slug: { equals: slug },
    },
  })

  const post = docs[0]
  if (!post) notFound()

  const date = new Date(post.createdAt).toLocaleDateString('cs-CZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack gap="md">
          <MantineNextLink href="/blog" size="sm">
            ← Back to blog
          </MantineNextLink>
          <Title order={1}>{post.title}</Title>
          <Text size="sm" c="dimmed">
            {date}
          </Text>
          {post.excerpt && (
            <Text size="lg" c="dimmed">
              {post.excerpt}
            </Text>
          )}
          <RichText data={post.content} />
        </Stack>
      </Paper>
    </Container>
  )
}
