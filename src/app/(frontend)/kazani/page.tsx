import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'

export default async function KazaniPage() {
  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>Kázání</Title>
          <Text color="dimmed">Obsah stránky bude doplněn.</Text>
          <Text size="sm" color="dimmed">
            Source file: <Code>app/(frontend)/kazani/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
