import { ClockAlertIcon, MapPinIcon, MegaphoneIcon, type LucideIcon } from 'lucide-react'

// 서비스 메뉴, 타입
export interface MenuItemType {
  icon: LucideIcon
  title: string
  url: string
  activeUrl?: string[]
}

export interface MenuGroupType {
  title: string
  groups: MenuItemType[]
}

export const ServiceMenus: MenuGroupType[] = [
  {
    title: '관리',
    groups: [
      {
        icon: ClockAlertIcon,
        title: '순찰이력',
        url: '/patrol/zones',
        activeUrl: ['/patrol/zones', '/patrol/points'],
      },
      {
        icon: MapPinIcon,
        title: '구역/지점',
        url: '/zones',
        activeUrl: ['/zones', '/points'],
      },
    ],
  },
  {
    title: '알림',
    groups: [
      {
        icon: MegaphoneIcon,
        title: '공지사항',
        url: '/notice',
      },
    ],
  },
]
