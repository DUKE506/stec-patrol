import type { PointType } from '@/pages/service/points/PointsPage'
// import { MapPinIcon } from 'lucide-react'

const PointListCard = ({
  point,
  idx,
  selected,
  onClick,
}: {
  point: PointType
  idx: number
  selected: PointType | null
  onClick: (value: PointType) => void
}) => {
  return (
    <div
      className={`relative
    flex items-center gap-4 p-4 not-last:border-b border-border/50 hover:bg-muted cursor-pointer
    ${point === selected ? 'bg-muted' : ''}
    `}
      onClick={() => onClick(point)}
    >
      {point === selected && <div className={`absolute left-0 top-0 w-1 h-full bg-primary`} />}

      {/* <MapPinIcon className="text-muted-foreground" size={20} strokeWidth={1.5} /> */}
      <div className="flex items-center justify-center w-8 h-8 aspect-square p-2 border rounded-full">
        {idx}
      </div>
      <div>{point.title}</div>
    </div>
  )
}

export default PointListCard
