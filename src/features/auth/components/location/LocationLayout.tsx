import { Outlet } from 'react-router-dom'
import type { AppTabsProps } from '@/components/AppTabs'
import { LayersIcon, MapPinIcon } from 'lucide-react'
import AppTabs from '@/components/AppTabs'

const locationTabs: AppTabsProps = {
  mode: 'path',
  tabs: [
    {
      label: '구역',
      path: '/zones',
      icon: LayersIcon,
    },
    {
      label: '지점',
      path: '/points',
      icon: MapPinIcon,
    },
  ],
}

const LocationLayout = () => {
  return (
    <div className="flex flex-col flex-1 ">
      {/* Tabs */}
      {/* <LocationTabs /> */}
      <AppTabs tabs={locationTabs.tabs} />
      {/* Outlet */}
      <div className="flex flex-1  overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default LocationLayout
