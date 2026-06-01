import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'

export default async function KralovskaCestaPage() {
  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>Královská cesta</Title>
          <Text color="dimmed">Obsah stránky bude doplněn.</Text>
          <Text size="sm" color="dimmed">
            Source file: <Code>app/(frontend)/kralovska-cesta/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
