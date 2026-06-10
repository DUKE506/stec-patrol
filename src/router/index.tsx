import LoginPage from '@/pages/auth/LoginPage'
import { createBrowserRouter } from 'react-router-dom'
import AuthGuard from './guards/AuthGuard'

import PointsPage from '@/pages/service/points/PointsPage'
import ZonesPage from '@/pages/service/zones/ZonesPage'
import LocationLayout from '@/features/auth/components/location/LocationLayout'
import PatrolLayout from '@/features/patrol-zones/components/PatrolLayout'
import PatrolZonesPage from '@/pages/service/patrol/zones/PatrolZonesPage'
import PatrolPointsPage from '@/pages/service/patrol/points/PatrolPointsPage'

export const router = createBrowserRouter([
  //비인증 전용
  {
    path: '/login',
    element: <LoginPage />,
  },

  //슈퍼관리자

  //일반 서비스
  {
    element: <AuthGuard />,
    children: [
      //순찰 관리
      {
        path: '/patrol',
        element: <PatrolLayout />,
        children: [
          //지점 관리
          {
            path: 'points',
            element: <PatrolPointsPage />,
          },
          //구역관리
          {
            path: 'zones',
            element: <PatrolZonesPage />,
          },
        ],
      },
      {
        element: <LocationLayout />,
        children: [
          //지점 관리
          {
            path: '/points',
            element: <PointsPage />,
          },
          //구역관리
          {
            path: '/zones',
            element: <ZonesPage />,
          },
        ],
      },
    ],
  },
])
