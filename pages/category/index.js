// pages/category/index.js
const {wallpaperUrl} = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_index: 0,
        wallList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.swiperchange();
     
       
        this.showWapaper()
       
    },
    //swiper索引
    swiperchange(e) {  
        
        this.setData({
            item_index:e.detail.current
        })
        this.setData({
            wallList:[]
        }),
        this.showWapaper()
    },
    //获取图片
  showWapaper:function(){
    var that = this
  
    const cateList = ['hot','anmial','view','girl','video','high']
    wx.request({
       
      url: wallpaperUrl + cateList[this.data.item_index],
    success(res){
        console.log(res.data)
        that.setData({
            wallList:res.data
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