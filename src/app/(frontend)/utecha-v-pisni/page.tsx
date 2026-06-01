import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'

export default async function UtechaVPisniPage() {
  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>Útěcha v písni</Title>
          <Text color="dimmed">Obsah stránky bude doplněn.</Text>
          <Text size="sm" color="dimmed">
            Source file: <Code>app/(frontend)/utecha-v-pisni/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
