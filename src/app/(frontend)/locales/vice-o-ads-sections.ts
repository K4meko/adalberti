export const viceOAdsSections = [
  { slug: 'jak-dosla-ads-k-nazvu', key: 'jak-dosla-ads-k-nazvu' },
  { slug: 'odkaz-sv-vojtecha-a-johanky-z-aru', key: 'odkaz-sv-vojtecha-a-johanky-z-aru' },
  { slug: 'aeropag', key: 'aeropag' },
  { slug: 'prokazal-silu-svym-ramenem', key: 'prokazal-silu-svym-ramenem' },
  { slug: 'evangelijni-antropocentrismus-poslani', key: 'evangelijni-antropocentrismus-poslani' },
  { slug: 'teologie-poustevnictvi', key: 'teologie-poustevnictvi' },
  { slug: 'historie-vzniku', key: 'historie-vzniku' },
  { slug: 'teologie-ads', key: 'teologie-ads' },
] as const

export type ViceOAdsSectionSlug = (typeof viceOAdsSections)[number]['slug']
export type ViceOAdsSectionKey = (typeof viceOAdsSections)[number]['key']

export function isViceOAdsSectionSlug(value: string): value is ViceOAdsSectionSlug {
  return viceOAdsSections.some((section) => section.slug === value)
}

export const defaultViceOAdsSection = viceOAdsSections[0].slug
