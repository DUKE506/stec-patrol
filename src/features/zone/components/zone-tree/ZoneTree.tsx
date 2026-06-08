import { ZoneTreeData } from '../../mocks/zoneData'
import type { ZoneType } from '../../types'
import { ZoneNode } from './ZoneNode'

export const ZoneTree = ({
  selected,
  onSelect,
}: {
  selected: ZoneType | null
  onSelect: React.Dispatch<React.SetStateAction<ZoneType | null>>
}) => {
  return (
    <div className="flex flex-col gap-2 p-2 h-full ">
      {ZoneTreeData.map((z, i) => (
        <ZoneNode key={`zonenode` + i} zone={z} selected={selected} onSelect={onSelect} />
      ))}
    </div>
  )
}
