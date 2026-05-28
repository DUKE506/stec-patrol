import PointTopNav from '@/features/auth/components/location/points/PointTopNav'
import { useEffect, useState } from 'react'

import PointEmptyCard from '@/features/auth/components/location/points/PointEmptyCard'
import PointDetail from '@/features/auth/components/location/points/detail/PointDetail'
import PointList from '@/features/auth/components/location/points/PointList'

export interface PointType {
  id: string
  title: string
  description: string
  createdAt: Date
}

//FIXME: tanstack-query로 변경 예정
export const points: PointType[] = [
  {
    id: '1',
    title: '정문 입구',
    description: '정문 CCTV 앞, 출입 통제 구역',
    createdAt: new Date(2026, 2, 1),
  },
  {
    id: '2',
    title: '로비 1층',
    description: '안내 데스크 및 방문객 대기 공간',
    createdAt: new Date(2026, 2, 1),
  },
  {
    id: '3',
    title: '엘리베이터홀 A',
    description: 'A동 2~10층 엘리베이터 대기 공간',
    createdAt: new Date(2026, 2, 3),
  },
  {
    id: '4',
    title: '지하 주차장 B1',
    description: 'B1층 차량 출입 및 보안 구역',
    createdAt: new Date(2026, 2, 3),
  },
  {
    id: '5',
    title: '지하 주차장 B2',
    description: 'B2층 차량 출입 및 보안 구역',
    createdAt: new Date(2026, 2, 3),
  },
  {
    id: '6',
    title: 'B동 후문',
    description: 'B동 후측 출입문, 야간 잠금 구역',
    createdAt: new Date(2026, 2, 5),
  },
  {
    id: '7',
    title: 'B동 계단실',
    description: 'B동 비상계단 1~10층 입구',
    createdAt: new Date(2026, 2, 5),
  },
  {
    id: '8',
    title: '비상구 A',
    description: 'A구역 비상 탈출 통로 입구',
    createdAt: new Date(2026, 2, 7),
  },
  {
    id: '9',
    title: '비상구 B',
    description: 'B구역 비상 탈출 통로 입구',
    createdAt: new Date(2026, 2, 7),
  },
  {
    id: '10',
    title: '외벽 북측',
    description: '건물 북쪽 외벽 순찰 지점',
    createdAt: new Date(2026, 2, 10),
  },
  {
    id: '11',
    title: '외벽 남측',
    description: '건물 남쪽 외벽 순찰 지점',
    createdAt: new Date(2026, 2, 10),
  },
  {
    id: '12',
    title: '외벽 동측',
    description: '건물 동쪽 외벽 순찰 지점',
    createdAt: new Date(2026, 2, 10),
  },
  {
    id: '13',
    title: '옥상 출입구',
    description: '옥상 진입 출입문, 잠금 여부 확인',
    createdAt: new Date(2026, 2, 12),
  },
  {
    id: '14',
    title: '화재 비상구 A',
    description: '소방 비상구 A구역, 장애물 여부 확인',
    createdAt: new Date(2026, 2, 12),
  },
  {
    id: '15',
    title: '서버실 입구',
    description: '전산실 출입문, 출입 권한 확인 필요',
    createdAt: new Date(2026, 2, 15),
  },
]

const PointsPage = () => {
  // TODO: 선택지점관리를 여기서 할건지 상태로할건지 구분해야함
  const [selectedPoint, setSelectedPoint] = useState<PointType | null>(null)

  // 데이터 fetch 후 초기 선택지점 할당
  useEffect(() => {
    if (points.length <= 0) return
    setSelectedPoint(points[0])
  }, [])

  return (
    <div className="flex-1 w-full flex min-h-0  overflow-hidden ">
      {/* 지점목록 */}
      <div className="flex flex-col w-300 border-r min-h-0 overflow-hidden  ">
        {/* 헤더 */}
        <PointTopNav />
        {/* 바디 */}
        <PointList onSelectPoint={setSelectedPoint} selected={selectedPoint} />
      </div>
      {/* 선택한 지점정보 */}
      {selectedPoint ? <PointDetail point={selectedPoint} /> : <PointEmptyCard />}
    </div>
  )
}

export default PointsPage
