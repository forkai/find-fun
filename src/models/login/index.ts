import Taro from '@tarojs/taro'
import { login } from '../../services/user'

const namespace = 'login'
export { namespace }
export default {
  namespace,
  state: {},
  effects: {
    *login({ payload }, { select, call, put }) {
      const params = {
        userId: '18056', // Taro.getStorageSync('userId')
        shareId: payload.shareId,
        platform: Taro.getSystemInfoSync().platform,
        code: ''
      }
      if (!params.userId) {
        let res = yield call(Taro.login())
        console.log(res)
        // if (res && res.code) {
        //     console.log(res)
        //     params.code = res.code
        // }
      }
      const { res } = yield call(login, payload)
      console.log(res)
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
