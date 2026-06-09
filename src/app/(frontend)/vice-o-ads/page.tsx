import { redirect } from 'next/navigation'
import { defaultViceOAdsSection } from '../locales/vice-o-ads-sections'

export default function ViceOAdsPage() {
  redirect(`/vice-o-ads/${defaultViceOAdsSection}`)
}
