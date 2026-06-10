import type { PatrolZoneResult } from './PatrolZoneResult'

export interface PatrolZone {
  name: string
  startedDt: Date
  endedDt: Date
  totalTime: string
  result: PatrolZoneResult
}
