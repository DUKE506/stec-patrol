import type { PointAuthenticationMethod } from '@/features/points/types'

export interface PatrolPoint {
  name: string
  patrolDt: Date // 순찰일시
  authenticationMethod: PointAuthenticationMethod
  user: string
}
