import type { LucideIcon } from 'lucide-react'
import { InboxIcon } from 'lucide-react'

interface AppEmptyProps {
  icon?: LucideIcon
  title?: string
  description?: string
  action?: React.ReactNode
}

const AppEmpty = ({
  icon: Icon = InboxIcon,
  title = '데이터가 없습니다',
  description,
  action,
}: AppEmptyProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 p-10 text-center">
      {/* 레이어드 아이콘 배지 */}
      <div className="bounce-anim relative grid h-[116px] w-[116px] place-items-center">
        {/* 점선 링(halo) */}
        <span className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[oklch(0.86_0.04_260)] opacity-70" />

        {/* 그라데이션 배지 — 원본과 동일한 oklch 값 */}
        <span
          className="relative grid h-[72px] w-[72px] place-items-center rounded-[22px] text-[oklch(0.623_0.214_260)]"
          style={{
            background: 'linear-gradient(150deg, oklch(0.94 0.03 260), oklch(0.97 0.012 260))',
            boxShadow:
              '0 10px 22px oklch(0.62 0.21 260 / 0.13), inset 0 0 0 1px oklch(0.88 0.05 260 / 0.6)',
          }}
        >
          <Icon size={30} strokeWidth={1.75} />
        </span>

        {/* 장식 도트 */}
        <span className="absolute right-3.5 top-2 h-[7px] w-[7px] rounded-full bg-[oklch(0.623_0.214_260)] opacity-35" />
        <span className="absolute bottom-4 left-2.5 h-[5px] w-[5px] rounded-full bg-[oklch(0.623_0.214_260)] opacity-50" />
        <span className="absolute bottom-1.5 right-7 h-1 w-1 rounded-full bg-[oklch(0.623_0.214_260)] opacity-25" />
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[15px] font-bold text-text-primary">{title}</p>
        {description && (
          <p className="max-w-[230px] text-[13px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {/* 액션 */}
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}

export default AppEmpty
