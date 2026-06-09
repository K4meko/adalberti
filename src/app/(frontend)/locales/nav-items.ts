export const navItems = [
  { key: 'introduction', href: '/introduction', file: 'app/(frontend)/introduction/page.tsx' },
  { key: 'modlitby', href: '/modlitby', file: 'app/(frontend)/modlitby/page.tsx' },
  { key: 'poslani-a-cil', href: '/poslani-a-cil', file: 'app/(frontend)/poslani-a-cil/page.tsx' },
  { key: 'vice-o-ads', href: '/vice-o-ads', file: 'app/(frontend)/vice-o-ads/page.tsx' },
  {
    key: 'farnost-jako-rodina',
    href: '/farnost-jako-rodina',
    file: 'app/(frontend)/farnost-jako-rodina/page.tsx',
  },
  {
    key: 'ezechielova-vize',
    href: '/ezechielova-vize',
    file: 'app/(frontend)/ezechielova-vize/page.tsx',
  },
  { key: 'blog', href: '/blog', file: 'app/(frontend)/blog/page.tsx' },
  { key: 'kazani', href: '/kazani', file: 'app/(frontend)/kazani/page.tsx' },
  { key: 'kontakt', href: '/kontakt', file: 'app/(frontend)/kontakt/page.tsx' },
  {
    key: 'kralovska-cesta',
    href: '/kralovska-cesta',
    file: 'app/(frontend)/kralovska-cesta/page.tsx',
  },
  {
    key: 'utecha-v-pisni',
    href: '/utecha-v-pisni',
    file: 'app/(frontend)/utecha-v-pisni/page.tsx',
  },
] as const

export type NavKey = (typeof navItems)[number]['key']
