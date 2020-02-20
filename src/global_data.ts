const globalData = {
  userInfo: null,
  room: null,
  mode: null,
  postId: null,
  commentId: null
}

export function set(key: string, val: any) {
  globalData[key] = val
}

export function get(key: string) {
  return globalData[key]
}
