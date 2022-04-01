// pages/details/index.js
var time = require('../../utils/util.js');
const {
    wallpaperUrl
} = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        backUrl: 'https://img1.doubanio.com/view/richtext/large/public/p241849757.jpg'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        //获取跳转图片链接
        const backUrl = wallpaperUrl + 'paper?id=' + options.id
        wx.request({
            url: backUrl,
            success(res) {
                console.log()
                that.setData({
                    backUrl: res.data[0].url,

                })

            }
        })


        setInterval(() => {
            this.timing()
        }, 1000);

    },
    //   时间设置
    timing: function () {
        var date_time = time.formatTime(new Date())
        var n = date_time.split("\n");

        var n_time = n[0]
        var n_date = n[1]

        //为页面中time赋值
        this.setData({
            current_date: n_date,
            current_time: n_time
        })
    },
    // 下载功能
    downWallpaper: function () {
       
        wx.downloadFile({
            url:this.data.backUrl,
            filePath: '',
            success(res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                if (res.statusCode === 200) {
                    const filePath = res.tempFilePath
                    wx.saveImageToPhotosAlbum({
                        filePath: filePath,
                        success(res) {
                            wx.showToast({
                                title: '保存成功',
                            })
                        },
                        fail(error) {
                            console.log(error)
                            if (error.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
                                wx.showModal({
                                    title: '提示',
                                    content: '需要您授权保存相册',
                                    showCancel: false,
                                    success: modalSuccess => {
                                        wx.openSetting({
                                            success(settingdata) {
                                                console.log("settingdata", settingdata)
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
                            } else {
                                wx.showToast({
                                    title: '保存失败',
                                })
                            }

                        }
                    })

                }
            },
            fail(error) {

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
        wx.showShareMenu({

            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
    }
})