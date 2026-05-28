import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'
import { TopNav } from './topnav'

const AppLayout = () => {
  /**
   * 구조
   * SideBar | TopNav
   *
   * SideBar | Contents
   */
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="flex flex-col min-h-0 flex-1">
        <TopNav />
        <div className="flex flex-1  bg-contents-background overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
