import { Icon, type LucideIcon } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export interface AppTabsProps {
  tabs: TabItems[]
  mode?: 'path' | 'query'
  queryKey?: string
}

export interface TabItems {
  label: string
  path: string
  icon: LucideIcon
}

const AppTabs = ({ tabs, mode = 'path', queryKey = 'tab' }: AppTabsProps) => {
  const [value, setValue] = useState<string>('')
  const navigate = useNavigate()
  const pathname = useLocation()

  useEffect(() => {
    if (mode === 'path') {
      /**
       * url이 동일한 게 있는가 그럼 담는다
       */
      const tab = tabs.find((t) => pathname.pathname.startsWith(t.path))
      if (tab) setValue(tab.path)
    }
  }, [pathname.pathname])

  const handleClick = (path: string) => {
    navigate(path)
  }

  return (
    <Tabs
      className="bg-background border-b "
      value={value}
      onValueChange={(value) => handleClick(value)}
    >
      <TabsList variant="line" className="h-auto">
        {tabs.map((t, i) => {
          const { label, path, icon: Icon } = t
          return (
            <TabsTrigger key={'tab' + i} className="px-4 py-2 h-auto" value={path}>
              <Icon strokeWidth={1.5} />
              {label}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}

export default AppTabs
