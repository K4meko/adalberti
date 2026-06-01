'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { Anchor, type AnchorProps } from '@mantine/core'

type MantineNextLinkProps = Omit<AnchorProps, 'component' | 'href'> & {
  href: string
  children?: ReactNode
}

export function MantineNextLink({ href, children, ...props }: MantineNextLinkProps) {
  return (
    <Anchor component={Link} href={href} {...props}>
      {children}
    </Anchor>
  )
}
