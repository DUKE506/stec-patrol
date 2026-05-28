import { UserIcon } from 'lucide-react'

// 사용자 뱃지
export const ProfileBadge = () => {
  return (
    <div className="aspect-square border rounded-full p-2 bg-gradient-to-r from-pink-400 to-blue-800">
      <UserIcon size={20} className="text-white " />
    </div>
  )
}
