import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import { set as setGlobalData, get as getGlobalData } from '../../global_data'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      btntext: '开始体验',
      loading: false,
      disabled: false,
      shareId: '',
      indicator_dots: true,
      showFooter: false
    }
  }
  componentWillMount() {}

  async componentDidMount() {
    // console.log(this.$router.params)
    const scene = Taro.getStorageSync('scene')
    const { room, mode, id, postId, commentId } = this.$router.params
    if (room) {
      setGlobalData('room', room)
      // this.$app.$options.globalData.room = room;
    }
    if (mode) {
      setGlobalData('mode', mode)
      // this.$app.$options.globalData.mode = mode;
    }
    if (scene) {
      console.log(scene)
      const obj = {}
      const params = scene.split('&')
      for (const p of params) {
        const arr = p.split('=')
        if (arr.length === 2) {
          obj[arr[0]] = arr[1]
        }
      }
      console.log(obj)
      const shareID = obj.id || id
      let postID = obj.postId || postId
      let commentID = obj.commentId || commentId
      setGlobalData('postId', postID)
      setGlobalData('commentId', commentID)
      this.setState({
        shareId: shareID
      })
    }
    const user = Taro.getStorageSync('user')
    if (user) {
      await this.login()
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  login = () => {
    console.log('login...')
    this.setState({
      loading: true,
      disabled: true,
      btntext: '开启中..'
    })
    // TODO: 用户登录，若为-1，则登录失败
    this.code = 1
    if (this.code === -1) {
      Taro.showToast({
        title: '登陆失败请重试',
        icon: 'none',
        duration: 2000
      })
      this.setState({
        btntext: '重试',
        showFooter: true
      })
    } else {
      Taro.switchTab({
        url: '/pages/home/index'
      })
    }
    this.setState({
      loading: false,
      disabled: false
    })
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '职淘趣'
  }

  render() {
    const { btntext, loading, disabled, indicator_dots } = this.state
    return (
      <View>
        <View className="container">
          <Swiper
            style="height: calc(100vh - 56px);"
            indicator-dots={indicator_dots}
            indicator-color="#fae37c"
            indicator-active-color="rgba(250, 227, 124, 0.2)"
          >
            <SwiperItem>
              <View className="item">
                <Image src="http://img.wutuobangxinyougou.com/guide_1.svg" />
                <View className="title">记录职场</View>
                <View className="des">记录职场生活，分享职场故事</View>
                <Button
                  className="btn"
                  hover-className="btn-hover"
                  loading={loading}
                  disabled={disabled}
                  onClick={this.login}
                >
                  {btntext}
                </Button>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="item">
                <Image src="http://img.wutuobangxinyougou.com/guide_2.svg" />
                <View className="title">真实的TA</View>
                <View className="des">企业真实职场人士，全部实名认证</View>
                <Button
                  className="btn"
                  hover-className="btn-hover"
                  loadin={loading}
                  disabled={disabled}
                  onClick={this.login}
                >
                  {btntext}
                </Button>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="item">
                <Image src="http://img.wutuobangxinyougou.com/guide_3.svg" />
                <View className="title">拓展圈子</View>
                <View className="des">认识志趣相同的朋友,拓展人脉</View>
                <Button
                  className="btn"
                  hover-className="btn-hover"
                  loadin={loading}
                  disabled={disabled}
                  onClick={this.login}
                >
                  {btntext}
                </Button>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="item">
                <Image src="http://img.wutuobangxinyougou.com/guide_4.svg" />
                <View className="title">职场网红</View>
                <View className="des">施展你的才华,成为职场中最耀眼的星</View>
                <Button
                  className="btn"
                  hover-className="btn-hover"
                  loadin={loading}
                  disabled={disabled}
                  onClick={this.login}
                >
                  {btntext}
                </Button>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    )
  }
}
