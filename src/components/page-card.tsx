import React from 'react'
import { Box, type BoxProps } from '@mantine/core'

type PageCardProps = {
  children: React.ReactNode
  boxProps?: BoxProps
}

export default function PageCard({ children, boxProps }: PageCardProps) {
  return (
    <Box component="article" {...boxProps}>
      {children}
    </Box>
  )
}
