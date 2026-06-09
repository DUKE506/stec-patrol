import type { LucideIcon } from 'lucide-react'
import { InboxIcon } from 'lucide-react'

interface AppEmptyProps {
  icon?: LucideIcon
  title?: string
  description?: string
  action?: React.ReactNode
}

const AppEmpty = ({
  icon: Icon = InboxIcon,
  title = '데이터가 없습니다',
  description,
  action,
}: AppEmptyProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shadow-sm">
        <Icon className="text-muted-foreground" size={28} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-text-primary">{title}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}

export default AppEmpty
