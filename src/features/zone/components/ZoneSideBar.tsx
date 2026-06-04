import { ChevronDownIcon, MapPinIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'
import type { PointType, ZoneType } from '../types'
import { ZoneTreeData } from '../mocks/zoneData'

const ZoneSideBar = ({
  selected,
  onSelect,
}: {
  selected: ZoneType | null
  onSelect: React.Dispatch<React.SetStateAction<ZoneType | null>>
}) => {
  return (
    <div className="bg-background  border-r w-60">
      <div className="flex items-center justify-between border-b p-4">
        <span>구역목록</span>
        <PlusIcon size={20} strokeWidth={1.5} />
      </div>
      <ZoneTree selected={selected} onSelect={onSelect} />
    </div>
  )
}

export default ZoneSideBar

const ZoneTree = ({
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

const ZoneNode = ({
  selected,
  zone,
  onSelect,
}: {
  selected: ZoneType | null
  zone: ZoneType
  onSelect: (zone: ZoneType) => void
}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="">
      {/* 트리거 */}
      <button
        className={`flex items-center justify-between w-full px-4 py-2 rounded-sm hover:bg-sidebar-accent cursor-pointer
          ${selected === zone ? 'bg-sidebar-accent' : ''}
          `}
        onClick={() => {
          setShow(!show)
          onSelect(zone)
        }}
      >
        <div className="flex items-center gap-2">
          {/* <ChevronDownIcon
            className={`duration-150 ${show ? 'rotate-180' : 'rotate-0 '}`}
            size={16}
            strokeWidth={1}
          /> */}
          <span className="">{zone.title}</span>
        </div>

        <div
          className={`
        text-primary text-xs font-medium flex items-center justify-center w-6 h-6 aspect-square rounded-sm
        ${selected === zone ? 'bg-point-bg text-point-foreground' : 'bg-muted text-muted-foreground'}
          `}
        >
          {zone.points.length}
        </div>
      </button>
      {/* 하위 포인트 */}
      {/* {show && (
        <div className="flex flex-col gap-2 pb-2">
          {zone.points.map((p, i) => (
            <PointNode key={`pointnode` + i} point={p} />
          ))}
        </div>
      )} */}
    </div>
  )
}

const PointNode = ({ point }: { point: PointType }) => {
  return (
    <div className="flex items-center gap-2 px-8 py-2 hover:bg-muted">
      <MapPinIcon className="text-muted-foreground" size={16} strokeWidth={1.5} />
      {point.title}
    </div>
  )
}
