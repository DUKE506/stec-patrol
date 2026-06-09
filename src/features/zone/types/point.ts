import type { PointType } from '@/features/points/types'

export interface ZonePointType extends PointType {
  order: number
  timeLimit: number //분
  isActive: boolean //지점 활성화여부
}
