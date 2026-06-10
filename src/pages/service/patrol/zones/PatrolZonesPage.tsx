import AppEmpty from '@/components/app/AppEmpty'
import AppTable from '@/components/AppTable'
import { PatrolContentBody } from '@/features/patrol-zones/components/PatrolSheet'

import { zoneColumns } from '@/features/patrol-zones/components/ZoneColumn'
import { LayersIcon } from 'lucide-react'
import { useState } from 'react'

const PATROL_RESULT = {
  COMPLETE: 'COMPLETE',
  INCOMPLETE: 'INCOMPLETE',
  IN_PROGRESS: 'IN_COMPLETE',
} as const

export type PatrolResultType = (typeof PATROL_RESULT)[keyof typeof PATROL_RESULT]

// 구역 순찰이력 테이블 객체
export interface ZonePatrolType {
  name: string
  startedAt: Date
  endedAt: Date
  result: PatrolResultType
  points: PointPatrolType[]
}

export interface PointPatrolType {
  name: string // 지점명
  status: boolean // true 이상없음, false 이상
  completedAt: Date // 지점 완료시간
  note: string // 특이사항
}

const PatrolZonesPage = () => {
  const [selectedPatrol, setSelectedPatrol] = useState<ZonePatrolType | null>(null)
  /**
   * 순찰이력 UI 구조 설계
   * 1. 구역 / 지점 탭
   * 2. 테이블 형태 이력 / 필터링은 존재 ( Search, 있으면 추가)
   * 3. 구역 -> 이력 클릭 시 Sheet 나와서 정보 표시 수직으로 순서도 보여주면 될듯. (1안)
   * 4. 지점 -> 디테일 페이지가 필요한지 아직 모르겠음 일단 없이.
   * ※ 이력은 생성, 수정, 삭제 불가. ONLY 조회
   */

  const handleRowClick = (data: ZonePatrolType) => {
    setSelectedPatrol(data)
  }

  return (
    <div className="flex-1 flex overflow-auto">
      <div className="flex-7 flex flex-col items-center p-8 gap-6">
        <AppTable columns={zoneColumns} data={zonePatrols} searchable onRowClick={handleRowClick} />
      </div>

      <div className="flex-3 flex flex-col gap-8  border-l bg-background">
        {selectedPatrol ? (
          <div className="flex flex-col gap-8 px-4 py-8 overflow-auto">
            <div className="px-4 ">
              <span className="text-xl font-semibold ">순찰이력</span>
            </div>
            <PatrolContentBody patrol={selectedPatrol} />
          </div>
        ) : (
          <AppEmpty
            title="순찰이력을 선택해주세요"
            description="왼쪽 목록에서 이력을 선택하면 상세내용이 표시됩니다."
            icon={LayersIcon}
          />
        )}
      </div>
    </div>
  )
}

export default PatrolZonesPage

const zonePatrols: ZonePatrolType[] = [
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 1, 9, 0),
    endedAt: new Date(2026, 4, 1, 9, 30),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 1, 9, 7), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 1, 9, 13), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 1, 9, 20), note: '' },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 1, 9, 28), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 1, 10, 0),
    endedAt: new Date(2026, 4, 1, 10, 45),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 1, 10, 10), note: '' },
      {
        name: 'B동 계단실',
        status: false,
        completedAt: new Date(2026, 4, 1, 10, 25),
        note: '비상구 잠금 해제 상태 확인됨',
      },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 1, 10, 40), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 1, 11, 0),
    endedAt: new Date(2026, 4, 1, 11, 20),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 1, 11, 8), note: '' },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 1, 11, 17), note: '' },
    ],
  },
  {
    name: '공용 구역',
    startedAt: new Date(2026, 4, 1, 13, 0),
    endedAt: new Date(2026, 4, 1, 13, 40),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '옥상 출입구', status: true, completedAt: new Date(2026, 4, 1, 13, 15), note: '' },
      { name: '화재 비상구 A', status: true, completedAt: new Date(2026, 4, 1, 13, 35), note: '' },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 2, 9, 0),
    endedAt: new Date(2026, 4, 2, 9, 35),
    result: PATROL_RESULT.IN_PROGRESS,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 2, 9, 8), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 2, 9, 16), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 2, 9, 25), note: '' },
      {
        name: '지하 주차장',
        status: false,
        completedAt: new Date(2026, 4, 2, 9, 33),
        note: '차량 불법 주차 발견',
      },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 2, 10, 0),
    endedAt: new Date(2026, 4, 2, 10, 50),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 2, 10, 15), note: '' },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 2, 10, 30), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 2, 10, 45), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 2, 11, 30),
    endedAt: new Date(2026, 4, 2, 12, 0),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      {
        name: '외벽 북측',
        status: false,
        completedAt: new Date(2026, 4, 2, 11, 42),
        note: '외벽 균열 발견',
      },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 2, 11, 55), note: '' },
    ],
  },
  {
    name: '외곽 순찰로',
    startedAt: new Date(2026, 4, 2, 14, 0),
    endedAt: new Date(2026, 4, 2, 14, 30),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '외벽 동측', status: true, completedAt: new Date(2026, 4, 2, 14, 10), note: '' },
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 2, 14, 20), note: '' },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 2, 14, 28), note: '' },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 3, 9, 0),
    endedAt: new Date(2026, 4, 3, 9, 25),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 3, 9, 6), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 3, 9, 12), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 3, 9, 18), note: '' },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 3, 9, 23), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 3, 10, 0),
    endedAt: new Date(2026, 4, 3, 10, 40),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 3, 10, 12), note: '' },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 3, 10, 25), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 3, 10, 37), note: '' },
    ],
  },
  {
    name: '공용 구역',
    startedAt: new Date(2026, 4, 3, 11, 0),
    endedAt: new Date(2026, 4, 3, 11, 30),
    result: PATROL_RESULT.IN_PROGRESS,
    points: [
      { name: '옥상 출입구', status: true, completedAt: new Date(2026, 4, 3, 11, 14), note: '' },
      {
        name: '화재 비상구 A',
        status: false,
        completedAt: new Date(2026, 4, 3, 11, 27),
        note: '소화기 위치 이탈 확인',
      },
    ],
  },
  {
    name: '외곽 순찰로',
    startedAt: new Date(2026, 4, 3, 13, 0),
    endedAt: new Date(2026, 4, 3, 13, 45),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '외벽 동측', status: true, completedAt: new Date(2026, 4, 3, 13, 15), note: '' },
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 3, 13, 28), note: '' },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 3, 13, 42), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 4, 9, 30),
    endedAt: new Date(2026, 4, 4, 10, 0),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 4, 9, 43), note: '' },
      {
        name: '외벽 남측',
        status: false,
        completedAt: new Date(2026, 4, 4, 9, 56),
        note: '외부인 접근 흔적 발견',
      },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 4, 10, 30),
    endedAt: new Date(2026, 4, 4, 11, 0),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 4, 10, 38), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 4, 10, 45), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 4, 10, 52), note: '' },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 4, 10, 58), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 4, 13, 0),
    endedAt: new Date(2026, 4, 4, 13, 30),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 4, 13, 10), note: '' },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 4, 13, 20), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 4, 13, 28), note: '' },
    ],
  },
  {
    name: '공용 구역',
    startedAt: new Date(2026, 4, 5, 9, 0),
    endedAt: new Date(2026, 4, 5, 9, 40),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '옥상 출입구', status: true, completedAt: new Date(2026, 4, 5, 9, 18), note: '' },
      { name: '화재 비상구 A', status: true, completedAt: new Date(2026, 4, 5, 9, 36), note: '' },
    ],
  },
  {
    name: '외곽 순찰로',
    startedAt: new Date(2026, 4, 5, 10, 0),
    endedAt: new Date(2026, 4, 5, 10, 50),
    result: PATROL_RESULT.IN_PROGRESS,
    points: [
      { name: '외벽 동측', status: true, completedAt: new Date(2026, 4, 5, 10, 16), note: '' },
      {
        name: '외벽 북측',
        status: false,
        completedAt: new Date(2026, 4, 5, 10, 32),
        note: 'CCTV 화각 이탈 확인 필요',
      },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 5, 10, 46), note: '' },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 5, 11, 0),
    endedAt: new Date(2026, 4, 5, 11, 25),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 5, 11, 6), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 5, 11, 12), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 5, 11, 18), note: '' },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 5, 11, 23), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 6, 9, 0),
    endedAt: new Date(2026, 4, 6, 9, 45),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      {
        name: 'B동 후문',
        status: false,
        completedAt: new Date(2026, 4, 6, 9, 15),
        note: '후문 잠금장치 고장',
      },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 6, 9, 30), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 6, 9, 42), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 6, 10, 30),
    endedAt: new Date(2026, 4, 6, 11, 0),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 6, 10, 43), note: '' },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 6, 10, 56), note: '' },
    ],
  },
  {
    name: '공용 구역',
    startedAt: new Date(2026, 4, 6, 13, 0),
    endedAt: new Date(2026, 4, 6, 13, 20),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '옥상 출입구', status: true, completedAt: new Date(2026, 4, 6, 13, 8), note: '' },
      { name: '화재 비상구 A', status: true, completedAt: new Date(2026, 4, 6, 13, 17), note: '' },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 7, 9, 0),
    endedAt: new Date(2026, 4, 7, 9, 30),
    result: PATROL_RESULT.IN_PROGRESS,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 7, 9, 7), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 7, 9, 14), note: '' },
      {
        name: '엘리베이터홀',
        status: false,
        completedAt: new Date(2026, 4, 7, 9, 22),
        note: '엘리베이터 오작동 발생',
      },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 7, 9, 28), note: '' },
    ],
  },
  {
    name: '외곽 순찰로',
    startedAt: new Date(2026, 4, 7, 10, 0),
    endedAt: new Date(2026, 4, 7, 10, 35),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '외벽 동측', status: true, completedAt: new Date(2026, 4, 7, 10, 11), note: '' },
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 7, 10, 23), note: '' },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 7, 10, 33), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 7, 11, 0),
    endedAt: new Date(2026, 4, 7, 11, 40),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 7, 11, 13), note: '' },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 7, 11, 26), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 7, 11, 38), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 8, 9, 30),
    endedAt: new Date(2026, 4, 8, 10, 0),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      {
        name: '외벽 북측',
        status: false,
        completedAt: new Date(2026, 4, 8, 9, 44),
        note: '낙서 및 훼손 흔적 발견',
      },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 8, 9, 57), note: '' },
    ],
  },
  {
    name: 'A동 순찰구역',
    startedAt: new Date(2026, 4, 8, 10, 0),
    endedAt: new Date(2026, 4, 8, 10, 30),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '정문 입구', status: true, completedAt: new Date(2026, 4, 8, 10, 7), note: '' },
      { name: '로비 1층', status: true, completedAt: new Date(2026, 4, 8, 10, 14), note: '' },
      { name: '엘리베이터홀', status: true, completedAt: new Date(2026, 4, 8, 10, 21), note: '' },
      { name: '지하 주차장', status: true, completedAt: new Date(2026, 4, 8, 10, 28), note: '' },
    ],
  },
  {
    name: '공용 구역',
    startedAt: new Date(2026, 4, 8, 11, 0),
    endedAt: new Date(2026, 4, 8, 11, 45),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: '옥상 출입구', status: true, completedAt: new Date(2026, 4, 8, 11, 20), note: '' },
      { name: '화재 비상구 A', status: true, completedAt: new Date(2026, 4, 8, 11, 42), note: '' },
    ],
  },
  {
    name: '외곽 순찰로',
    startedAt: new Date(2026, 4, 9, 9, 0),
    endedAt: new Date(2026, 4, 9, 9, 50),
    result: PATROL_RESULT.IN_PROGRESS,
    points: [
      { name: '외벽 동측', status: true, completedAt: new Date(2026, 4, 9, 9, 16), note: '' },
      {
        name: '외벽 북측',
        status: false,
        completedAt: new Date(2026, 4, 9, 9, 33),
        note: '외벽 조명 고장 확인',
      },
      { name: '외벽 남측', status: true, completedAt: new Date(2026, 4, 9, 9, 47), note: '' },
    ],
  },
  {
    name: 'B동 순찰구역',
    startedAt: new Date(2026, 4, 9, 10, 30),
    endedAt: new Date(2026, 4, 9, 11, 0),
    result: PATROL_RESULT.COMPLETE,
    points: [
      { name: 'B동 후문', status: true, completedAt: new Date(2026, 4, 9, 10, 40), note: '' },
      { name: 'B동 계단실', status: true, completedAt: new Date(2026, 4, 9, 10, 50), note: '' },
      { name: '비상구', status: true, completedAt: new Date(2026, 4, 9, 10, 58), note: '' },
    ],
  },
  {
    name: 'C동 순찰구역',
    startedAt: new Date(2026, 4, 9, 13, 0),
    endedAt: new Date(2026, 4, 9, 13, 35),
    result: PATROL_RESULT.INCOMPLETE,
    points: [
      { name: '외벽 북측', status: true, completedAt: new Date(2026, 4, 9, 13, 14), note: '' },
      {
        name: '외벽 남측',
        status: false,
        completedAt: new Date(2026, 4, 9, 13, 30),
        note: '배수구 막힘 발견',
      },
    ],
  },
]
