/**
 * BBoom壁纸小程序
 * 作者：Cyril
 * 博客：https://www.cyrilstudio.top/
 * 微信公众号：梦溪博客
 */
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
