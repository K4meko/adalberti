'use client'

import React from 'react'
import { MantineProvider } from '@mantine/core'
import { mantineCssVariablesResolver, mantineTheme } from './theme/mantine-theme'

type MantineProvidersProps = {
  children: React.ReactNode
}

export default function MantineProviders({ children }: MantineProvidersProps) {
  return (
    <MantineProvider theme={mantineTheme} cssVariablesResolver={mantineCssVariablesResolver}>
      {children}
    </MantineProvider>
  )
}
