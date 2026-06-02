import Button from '@/components/Button'
import { Switch } from '@/components/ui/switch'
import { SquarePenIcon } from 'lucide-react'

const ZoneTopNav = () => {
  // 구역에서 선택한 목록 넘겨받을예정

  return (
    <div className="flex items-center justify-between w-full bg-background border-b p-4">
      <div className="flex items-center gap-4 ">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-medium">A동 순찰구역</span>
            <span className="text-xs p-1 bg-blue-400/20 rounded-sm">4개 지점</span>
          </div>
          <span className="text-muted-foreground text-xs">지점생성 2026.02.02</span>
        </div>
        <div className="w-0.5 self-stretch bg-border" />
        <div className="flex items-center gap-2 text-point">
          <div className="h-2 w-2 rounded-full bg-point " />
          순찰중
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-muted-foreground">교대 허용</label>
          <Switch />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-muted-foreground">구역 활성화</label>
          <Switch />
        </div>

        {/* NOTE: 일단 모달로 선택하는 방식 / 순서는 드래그 */}
        <Button variant="sub" icon={SquarePenIcon} iconSize={16} iconStrokeWidth={2}>
          수정
        </Button>
      </div>
    </div>
  )
}

export default ZoneTopNav
