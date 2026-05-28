import type { MenuGroupType } from './sidebar.config'
import { SidebarItem } from './SdebarItem'

export const SidebarGroup = ({ group }: { group: MenuGroupType }) => {
  return (
    <div>
      <div className="text-gray-500 px-4">{group.title}</div>
      <div className="flex flex-col gap-2 my-2">
        {group.groups.map((v, i) => (
          <SidebarItem key={i} item={v} />
        ))}
      </div>
    </div>
  )
}
