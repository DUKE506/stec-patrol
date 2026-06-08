import { MapPinIcon } from 'lucide-react'
import type { PointType } from '../../types'

export const PointNode = ({ point }: { point: PointType }) => {
  return (
    <div className="flex items-center gap-2 px-8 py-2 hover:bg-muted">
      <MapPinIcon className="text-muted-foreground" size={16} strokeWidth={1.5} />
      {point.title}
    </div>
  )
}
