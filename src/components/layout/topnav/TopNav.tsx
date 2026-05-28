import { AlarmSheet } from './AlarmSheet'
import { ProfileBadge } from './ProfileBadge'

export const TopNav = () => {
  /**
   * 구성
   *
   * 서비스 UI
   * ┌─────────────────────────────────────────────────────┐
   * │ 현재 메뉴명                         알림 | 프로필뱃지   │
   * └─────────────────────────────────────────────────────┘
   * 관리자 UI
   */
  return (
    <div className="w-full flex border-b py-2 px-4 items-center justify-between">
      <span className="font-medium">현재 선택 메뉴명</span>
      <div className="flex items-center gap-4">
        {/* 아이콘 */}
        <AlarmSheet />
        {/* 뱃지 */}
        <ProfileBadge />
      </div>
    </div>
  )
}
