import type { PointType } from './point'

export interface ZoneType {
  id: string
  title: string
  description: string
  isRotation: boolean
  isActive: boolean
  createdAt: Date
  points: PointType[]
}
