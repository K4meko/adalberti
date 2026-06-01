import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'

export default async function EzechielovaVizePage() {
  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>Ezechielova vize</Title>
          <Text color="dimmed">Obsah stránky bude doplněn.</Text>
          <Text size="sm" color="dimmed">
            Source file: <Code>app/(frontend)/ezechielova-vize/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
