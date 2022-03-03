// pages/detail/detail.js

import {resquest} from '../../utils/request'
import config from '../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDataPic: "",
    imgSaveMsg: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
    //解析id 访问单张页面
    var dataUrl = options.id.split('/');
    
    const picUrl = dataUrl[1]
    const picId=dataUrl[2];
    const picUrlId = picId.substr(1);
    console.log(dataUrl[1],picUrlId)
    //请求图片链接
    resquest({url:config.host+'/'+picUrl+'/?id='+picUrlId})
    .then(res =>{
      this.setData({
        currentDataPic: res
        
        })
    })



  },
  //点击预览
  preImg:function(e){
    
    wx.previewImage({
      showmenu:"false",
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表
    })
  },
  goBack: function () {
    wx.navigateBack({
      delta: 1
    })

  },
  downloadImg: function (e) {

    console.log('click')

    wx.downloadFile({
      url: e.currentTarget.dataset.image, //图片地址
      success: function (res) {
        //图片保存到本地
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (data) {
            wx.hideLoading()
            wx.showModal({
              title: '提示',
              content: '壁纸保存成功',
              showCancel: false,
            })
          },
          fail: function (err) {
            if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
              // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
              wx.showModal({
                title: '提示',
                content: '需要您授权保存相册',
                showCancel: false,
                success: modalSuccess => {
                  wx.openSetting({
                    success(settingdata) {
                      console.log("settingdata", settingdata)
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                        wx.showModal({
                          title: '提示',
                          content: '获取权限成功,再次点击图片即可保存',
                          showCancel: false,
                        })
                      } else {
                        wx.showModal({
                          title: '提示',
                          content: '获取权限失败，将无法保存到相册哦~',
                          showCancel: false,
                        })
                      }
                    },
                    fail(failData) {
                      console.log("failData", failData)
                    },
                    complete(finishData) {
                      console.log("finishData", finishData)
                    }
                  })
                }
              })
            }
          },
          complete(res) {
            wx.hideLoading()
          }
        })
      }
    })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})