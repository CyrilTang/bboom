/**
 * BBoom壁纸小程序
 * 作者：Cyril
 * 博客：https://www.cyrilstudio.top/
 * 微信公众号：梦溪博客
 */
// !function(){
//   var PageTmp = Page;
 
//   Page =function (pageConfig) {
     
//     // 设置全局默认分享
//     pageConfig = Object.assign({
//       onShareAppMessage:function () {
//         return {
//           title:'彼岸手机壁纸',
//           path:'/pages/index',
//           imageUrl:'https://love.mxbizhi.com/d/One/meinv/01/001.jpg',
//         };
//       }
//     },pageConfig);
 
//     PageTmp(pageConfig);
//   };
// }();

App({


  globalData: {
  
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
//分享功能调用
    this.overShare()
      
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //分享功能
  overShare: function () {
    //监听路由切换
    wx.onAppRoute(function (res) {
      let pages = getCurrentPages(),
        view = pages[pages.length - 1]  
        if (view) {
          wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
        }
    })
  },
  
  
 
 
})
