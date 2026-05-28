import { NavLink, useLocation } from 'react-router-dom'
import type { MenuItemType } from './sidebar.config'

export const SidebarItem = ({ item }: { item: MenuItemType }) => {
  //현재 url 보고 active 처리

  const { icon: Icon, title, url, activeUrl } = item
  const pathname = useLocation()

  //현재 url이 구역과 지점이면 둘메뉴는 동일함
  const isActive = activeUrl
    ? activeUrl.find((url) => pathname.pathname.startsWith(url))
    : pathname.pathname.startsWith(url)

  return (
    <NavLink
      to={url}
      // className={ ({ isActive }) =>
      //   isActive
      //     ? 'flex gap-4 items-center px-4 py-2 border-l-2 border-primary bg-sidebar-accent text-sidebar-accent-foreground'
      //     : ' flex gap-4 items-center px-4 py-2 bg-sidebar text-muted-foreground hover:bg-sidebar-accent  hover:text-sidebar-accent-foreground'
      // }
      className={
        isActive
          ? 'flex gap-4 items-center px-4 py-2 border-l-2 border-primary bg-sidebar-accent text-sidebar-accent-foreground'
          : ' flex gap-4 items-center px-4 py-2 bg-sidebar text-muted-foreground hover:bg-sidebar-accent  hover:text-sidebar-accent-foreground'
      }
    >
      <Icon className="" strokeWidth={1.5} />
      <span className="">{title}</span>
    </NavLink>
  )
}
