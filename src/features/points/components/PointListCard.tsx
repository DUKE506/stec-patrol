// import { MapPinIcon } from 'lucide-react'

import type { PointType } from '../types'

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
  const isSelected = point === selected
  return (
    <div
      className={`relative
    flex items-center gap-4 py-4 px-7.5 not-last:border-b border-border/50 hover:bg-muted cursor-pointer
    ${isSelected ? 'bg-muted' : ''}
    `}
      onClick={() => onClick(point)}
    >
      {isSelected && <div className={`absolute left-0 top-0 w-1 h-full bg-primary`} />}

      {/* <MapPinIcon className="text-muted-foreground" size={20} strokeWidth={1.5} /> */}
      <div
        className={` flex items-center justify-center 
        w-8 h-8 aspect-square bg-background
        p-2 border rounded-full
        font-semibold text-muted-foreground
        
        `}
      >
        {idx}
      </div>
      <div>{point.title}</div>
    </div>
  )
}

export default PointListCard
