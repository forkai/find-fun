import API from '@/services/api'
// 用户登录
export function login(params: any) {
  return API.get({
    url: '/login',
    data: {
      ...params
    }
  })
}
