import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { set as setGlobalData } from '../../global_data'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      btntext: '开始体验',
      loading: false,
      disabled: false,
      shareId: ''
    }
  }
  componentWillMount() {
    const params = this.$router.params
    console.log(params)
    // const scene = decodeURIComponent(q.scene);
    // const { room, mode, id, postId, commentId } = q;
    // if (room) {
    //   setGlobalData('room',room)
    //   // this.$app.$options.globalData.room = room;
    // }
    // if (mode) {
    //   setGlobalData('mode',mode)
    //   // this.$app.$options.globalData.mode = mode;
    // }
    // if (scene) {
    //   const obj = {};
    //   const params = scene.split('&');
    //   for (const p of params) {
    //     const arr = p.split('=');
    //     if (arr.length === 2) {
    //       obj[arr[0]] = arr[1];
    //     }
    //   }
    //   console.log(obj);

    //   this.shareId = obj.id || id;
    //   let postID = obj.postId || postId;
    //   let commentID = obj.commentId || commentId;
    //   setGlobalData('postId',postID)
    //   setGlobalData('commentId',commentID)
    // }
    // const user = Taro.getStorageSync('user');
    // if (user) {
    //   await this.login();
    // }
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    )
  }
}
