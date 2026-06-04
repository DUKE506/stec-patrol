export interface PointType {
  id: string
  description: string
  order: number
  title: string
  timeLimit: number //분
  authenticationMethod: PointAuthenticationMethod
  isActive: boolean //지점 활성화여부
}

export type PointAuthenticationMethod = 'QR' | 'NFC'
