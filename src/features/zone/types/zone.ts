import type { ZonePointType } from './point'

export interface ZoneType {
  id: string
  title: string
  description: string
  isRotation: boolean
  isActive: boolean
  createdAt: Date
  points: ZonePointType[]
}
