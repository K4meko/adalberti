import React from 'react'
import { Code, Container, Paper, Stack, Text, Title } from '@mantine/core'

// 💡 Ensure the page component uses standard default exporting:
export default async function IntroductionPage() {
  return (
    <Container size="md" py="xl">
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <Title order={1}>ADALBERTI (lidově)</Title>
          <Text color="dimmed">
            „HLE, BERÁNEK BOŽÍ, KTERÝ SNÍMÁ HŘÍCHY SVĚTA. – ECCE AGNUS DEI, QUI TOLLIT PECCATA
            MUNDI.“
          </Text>
          <Text color="dimmed">
            Snahy o změnu církve jsou jen tehdy úspěšné, pokud si reformátoři uchovají věrnost
            církvi. Ti, kteří věrnost pozbyli, dříve zakládali nové denominace. Dnes podléhají
            sekularizaci. Těžko soudit, zda je horší získávat stoupence pro svůj odklon, nebo se
            utopit v prázdnotě individualismu. Kudy z toho cesta?
          </Text>
          <Text size="sm" color="dimmed">
            Source file: <Code>app/(frontend)/introduction/page.tsx</Code>
          </Text>
        </Stack>
      </Paper>
    </Container>
  )
}
