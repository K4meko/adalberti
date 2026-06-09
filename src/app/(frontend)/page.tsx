import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Button, Code, Container, Flex, Group, Paper, Stack, Text, Title } from '@mantine/core'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <Flex direction="row" align="center" justify="center" className="min-h-screen p-4">
      <Stack gap="xl">
        <Group align="center" gap="md">
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
          <div>
            {!user && <Title order={1}>Welcome to your new project.</Title>}
            {user && <Title order={1}>Welcome back, {user.email}</Title>}
            <Text color="dimmed" mt="xs">
              A Mantine-powered page shell with your current frontend routes.
            </Text>
          </div>
        </Group>

        <Group gap={'xl'}>
          <Button component="a" href={payloadConfig.routes.admin} target="_blank" rel="noreferrer">
            Go to admin panel
          </Button>
          <Button
            component="a"
            href="https://payloadcms.com/docs"
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            Documentation
          </Button>
        </Group>

        <Text color="dimmed">
          Update this page by editing <Code>app/(frontend)/page.tsx</Code>
        </Text>

        <Text size="sm" color="dimmed">
          Open this file directly in your editor:
          <Button component="a" variant="subtle" size="xs" href={fileURL}>
            app/(frontend)/page.tsx
          </Button>
        </Text>
      </Stack>
    </Flex>
  )
}
