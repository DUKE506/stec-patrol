import { BellIcon } from 'lucide-react'

// 알림 시트
export const AlarmSheet = () => {
  return (
    <div>
      <div className="border rounded-sm p-2">
        <BellIcon size={20} className="text-gray-500" />
      </div>
    </div>
  )
}
