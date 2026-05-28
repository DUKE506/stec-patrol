import { ChevronDownIcon, MapPinIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

const ZoneSideBar = () => {
  return (
    <div className="bg-background  border-r w-60">
      <div className="flex items-center justify-between border-b p-4">
        <span>구역목록</span>
        <PlusIcon size={20} strokeWidth={1.5} />
      </div>
      <ZoneTree />
    </div>
  )
}

export default ZoneSideBar

// 구역 N : 지점 M
// 구역 타입
interface ZoneType {
  id: string
  title: string
  points: PointType[]
}

// 지점 관리
interface PointType {
  id: string
  order: number
  title: string
  createdAt: Date
}

const ZoneTreeData: ZoneType[] = [
  {
    id: '1',
    title: 'A동 순찰 구역',
    points: [
      { id: '1', order: 1, title: '정문 입구', createdAt: new Date(2026, 2, 1) },
      { id: '2', order: 2, title: '로비 1층', createdAt: new Date(2026, 2, 1) },
      { id: '3', order: 3, title: '엘리베이터홀', createdAt: new Date(2026, 2, 1) },
      { id: '4', order: 4, title: '지하 주차장', createdAt: new Date(2026, 2, 1) },
    ],
  },
  {
    id: '2',
    title: 'B동 순찰 구역',
    points: [
      { id: '5', order: 1, title: 'B동 후문', createdAt: new Date(2026, 2, 5) },
      { id: '6', order: 2, title: 'B동 계단실', createdAt: new Date(2026, 2, 5) },
      { id: '7', order: 3, title: '비상구', createdAt: new Date(2026, 2, 5) },
    ],
  },
  {
    id: '3',
    title: 'C동 순찰 구역',
    points: [
      { id: '8', order: 1, title: '외벽 북측', createdAt: new Date(2026, 2, 10) },
      { id: '9', order: 2, title: '외벽 남측', createdAt: new Date(2026, 2, 10) },
    ],
  },
  {
    id: '4',
    title: '공용 구역',
    points: [
      { id: '10', order: 1, title: '옥상 출입구', createdAt: new Date(2026, 2, 15) },
      { id: '11', order: 2, title: '화재 비상구 A', createdAt: new Date(2026, 2, 15) },
    ],
  },
]

const ZoneTree = () => {
  return (
    <div className="h-full ">
      {ZoneTreeData.map((z, i) => (
        <ZoneNode key={`zonenode` + i} zone={z} />
      ))}
    </div>
  )
}

const ZoneNode = ({ zone }: { zone: ZoneType }) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      {/* 트리거 */}
      <button
        className="flex items-center justify-between w-full px-4 py-2 hover:bg-muted cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center gap-2">
          <ChevronDownIcon
            className={`duration-150 ${show ? 'rotate-180' : 'rotate-0 '}`}
            size={16}
            strokeWidth={1}
          />
          <span className="">{zone.title}</span>
        </div>

        <div className="text-primary text-xs font-medium flex items-center justify-center bg-amber-500/30 w-6 h-6 aspect-square rounded-sm">
          {zone.points.length}
        </div>
      </button>
      {/* 하위 포인트 */}
      {show && (
        <div className="flex flex-col gap-2 pb-2">
          {zone.points.map((p, i) => (
            <PointNode key={`pointnode` + i} point={p} />
          ))}
        </div>
      )}
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
