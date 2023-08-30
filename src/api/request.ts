import type { RequestFunctionParams } from 'yapi-to-typescript'
import axios from 'axios'

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: 'prod' | 'dev' | 'mock'
}

const service = axios.create({})
const prefix = 'api'
service.interceptors.request.use((config: any) => {
  config.headers['token'] =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHJ1ZU5hbWUiOiLlqIHlu4ku5biD6bKB5pavIiwidXNlckRlcElkIjoxLCJ1c2VyUGhvbmUiOiIxNTM1NjEyOTI1MyIsInVzZXJSb2xlSWQiOlsyLDFdLCJ0ZXJtaW5hbCI6InBjIiwidXNlck5hbWUiOiJibHVzIiwiZXhwIjoxNjkyNjA1MzE4LCJ1c2VySWQiOjYzfQ.dr4opY2rOfIm1_4gbMjWYyaXJBQeWHRAnepnaBuaSlo'
  return config
})

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: 'prod',
  }
): Promise<TResponseData> {
  return new Promise<TResponseData>((resolve, reject) => {
    // 基本地址
    const baseUrl = 
      options.server === 'mock'
        ? payload.mockUrl
        : options.server === 'dev'
        ? payload.devUrl
        : payload.prodUrl

    // 请求地址
    const url = `${baseUrl}${payload.path}`

    // 具体请求逻辑
    resolve(
      service({
        url: `/${prefix}${url}`,
        method: payload.method,
        data: payload.data,
      })
    )
  })
}
