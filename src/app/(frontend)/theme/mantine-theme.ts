import { createTheme, type CSSVariablesResolver, type MantineColorsTuple } from '@mantine/core'

const ADALBERTI_BG = '#f4faf6'

const forest: MantineColorsTuple = [
  '#f0f7f4',
  '#d8ede3',
  '#b3d9c7',
  '#8cc5ab',
  '#5fa88a',
  '#40916c',
  '#2d6a4f',
  '#1b4332',
  '#143d2f',
  '#0d2818',
]

export const mantineTheme = createTheme({
  primaryColor: 'forest',
  colors: {
    forest,
  },
  fontFamily: 'var(--font-body), Inter, sans-serif',
  headings: {
    fontFamily: 'var(--font-heading), "Playfair Display", Georgia, serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
  components: {
    AppShell: {
      styles: {
        root: {
          backgroundColor: ADALBERTI_BG,
        },
        main: {
          backgroundColor: ADALBERTI_BG,
        },
      },
    },
    Paper: {
      defaultProps: {
        radius: 'lg',
        shadow: undefined,
        withBorder: false,
      },
      styles: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: 'var(--mantine-color-forest-8)',
        },
      },
    },
    NavLink: {
      styles: {
        root: {
          borderRadius: 'var(--mantine-radius-md)',
        },
      },
    },
    SegmentedControl: {
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-forest-0)',
        },
        indicator: {
          backgroundColor: 'var(--mantine-color-forest-6)',
        },
        label: {
          '&[data-active]': {
            color: 'white',
          },
        },
      },
    },
    Menu: {
      styles: {
        dropdown: {
          borderColor: 'var(--mantine-color-forest-2)',
        },
        item: {
          '&[data-hovered]': {
            backgroundColor: 'var(--mantine-color-forest-0)',
          },
        },
      },
    },
  },
})

export const mantineCssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-body': ADALBERTI_BG,
  },
  dark: {
    '--mantine-color-body': ADALBERTI_BG,
  },
})
