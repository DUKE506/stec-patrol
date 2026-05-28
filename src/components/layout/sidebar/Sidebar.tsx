import { ShieldBanIcon } from 'lucide-react'

import { SidebarGroup } from './SidebarGroup'
import { SidebarToggle } from './SidebarToggle'
import { ServiceMenus } from './sidebar.config'

// 사이드바
export const Sidebar = () => {
  //서비스, 관리자 VIEW 구분해서 데이터 전달
  return (
    <div className="w-70 h-full border-r flex flex-col">
      {/* 헤더 */}
      <div className="flex items-center gap-2 p-4 border-b">
        <div className="w-fit aspect-square p-1 rounded-sm bg-primary">
          <ShieldBanIcon className="text-primary-foreground" size={24} />
        </div>
        <span className="text-base font-semibold">PATROL</span>
      </div>

      {/* 메뉴 */}
      <div className="flex-1 flex flex-col gap-2 py-4">
        {ServiceMenus.map((v, i) => (
          <SidebarGroup key={i} group={v} />
        ))}
      </div>
      {/* 푸터 */}
      <SidebarToggle isOpen={true} />
    </div>
  )
}
