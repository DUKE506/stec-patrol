import AppTabs, { type AppTabsProps } from '@/components/AppTabs'
import { LayersIcon, MapPinIcon } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const patrolTabs: AppTabsProps = {
  mode: 'path',
  tabs: [
    {
      label: '구역',
      path: '/patrol/zones',
      icon: LayersIcon,
    },
    {
      label: '지점',
      path: '/patrol/points',
      icon: MapPinIcon,
    },
  ],
}

const PatrolLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
      <AppTabs tabs={patrolTabs.tabs} />
      <div className="flex flex-1  overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default PatrolLayout
