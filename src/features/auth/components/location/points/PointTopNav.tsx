import Button from '@/components/Button'
import { PlusIcon } from 'lucide-react'

const PointTopNav = () => {
  return (
    <div className=" flex gap-2 p-4 bg-background border-b ">
      <input className="w-full  border rounded-sm p-2 text-base bg-muted" placeholder="검색어" />
      <Button icon={PlusIcon} iconSize={20} iconStrokeWidth={2}>
        지점 추가
      </Button>
    </div>
  )
}

export default PointTopNav
