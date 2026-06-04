import { points, type PointType } from '@/pages/service/points/PointsPage'
import PointListCard from './PointListCard'

const PointList = ({
  selected,
  onSelectPoint,
}: {
  selected: PointType | null
  onSelectPoint: React.Dispatch<React.SetStateAction<PointType | null>>
}) => {
  return (
    <div className="overflow-auto min-h-0 flex-1 flex flex-col bg-background">
      {points.map((v, i) => (
        <PointListCard
          key={`point` + i}
          point={v}
          selected={selected}
          idx={i + 1}
          onClick={(value) => onSelectPoint(value)}
        />
      ))}
    </div>
  )
}

export default PointList
