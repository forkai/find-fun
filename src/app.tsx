import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './dva/index'
import models from './models/index'
import { set as setGlobalData } from './global_data'
import Index from './pages/index'
import './app.less'
import './assets/font.wxss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models
})
const store = dvaApp.getStore()

class App extends Component {
  componentDidMount() {
    const scene = decodeURIComponent(this.$router.params.scene)
    // console.log(scene)
    Taro.setStorageSync('scene', scene)
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ['pages/index/index', 'pages/home/index', 'pages/notice/index', 'pages/me/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      backgroundColor: '#ffffff',
      navigationBarTitleText: '职淘趣',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#13100e',
      selectedColor: '#13100e',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/home/index',
          text: '社区',
          iconPath: 'assets/images/ic_community_line.png',
          selectedIconPath: 'assets/images/ic_community_full.png'
        },
        {
          pagePath: 'pages/notice/index',
          text: '消息',
          iconPath: 'assets/images/ic_notice_line.png',
          selectedIconPath: 'assets/images/ic_notice_full.png'
        },
        {
          pagePath: 'pages/me/index',
          text: '我的',
          iconPath: 'assets/images/ic_me_line.png',
          selectedIconPath: 'assets/images/ic_me_full.png'
        }
      ]
    },
    // groupIdList: ['1006532345'],
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于动弹位置显示'
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
