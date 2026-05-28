import { PanelLeftCloseIcon, PanelRightOpenIcon } from 'lucide-react'

export const SidebarToggle = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="text-muted-foreground border-t p-4 hover:text-primary cursor-pointer">
      {isOpen ? (
        <div className="flex items-center gap-2 ">
          <PanelLeftCloseIcon strokeWidth={1.5} />
          접기
        </div>
      ) : (
        <div>
          <PanelRightOpenIcon strokeWidth={1.5} />
        </div>
      )}
    </div>
  )
}
