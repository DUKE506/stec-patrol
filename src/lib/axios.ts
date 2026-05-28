import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL, // 엔드포인트 url
  timeout: 5000, // 시간 설정
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 초큰 조회
  config.headers.set('Authorization', `Bearer ${'* 여기 Access Token 넣기 *'}`)
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  //에러처리는 좀더 고도화 해야함.
  (error) => Promise.reject(error)
)

export default api
