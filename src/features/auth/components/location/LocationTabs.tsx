import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LayersIcon, MapPinIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LOCATION_TABS = ['zones', 'points']

/**
 *
 * 순찰이력 /patrol?type=zones, /patrol?type=
 *
 */

// FIXME : 삭제해도됨
const LocationTabs = () => {
  const [value, setValue] = useState<string>('zones')
  const navigate = useNavigate()
  const pathname = useLocation()

  useEffect(() => {
    const tab = LOCATION_TABS.find((tab) => pathname.pathname.startsWith(`/${tab}`))
    if (tab) setValue(tab)
  }, [pathname.pathname])

  return (
    <Tabs
      className="bg-background border-b "
      defaultValue={'zone'}
      value={value}
      onValueChange={(value) => navigate(value)}
    >
      <TabsList variant="line" className="h-auto">
        <TabsTrigger className="px-4 py-2 h-auto" value="zones">
          <LayersIcon strokeWidth={1.5} />
          구역
        </TabsTrigger>
        <TabsTrigger className="px-4 py-2 h-auto" value="points">
          <MapPinIcon strokeWidth={1.5} />
          지점
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default LocationTabs
