import {
    resquest
} from '../../utils/request'
import config from '../../utils/config'

Page({
    data: {
        btns: ['动漫', '美女', '风景', '其他'],
        active: 0,
        girlDataPic: ''

    },

    onLoad: async function () {

        //美女

        resquest({
                url: config.host + "/girl"
            })
            .then(res => {
                this.setData({
                    girlDataPic: res

                })
            })

        //动漫
        resquest({
                url: config.host + "/anime"
            })
            .then(res => {
                this.setData({
                    animeDataPic: res

                })
            })


        //风景
        resquest({
                url: config.host + "/scene"
            })
            .then(res => {
                this.setData({
                    sceneDataPic: res

                })
            })


        //其他
        resquest({
                url: config.host + "/other"
            })
            .then(res => {
                this.setData({
                    otherDataPic: res

                })
            })




    },


    change: function (e) {
        this.setData({
            active: e.currentTarget.dataset.index,
        })


    },
    //图片保存
    savePhoto: function (e) {
        var src = e.currentTarget.dataset.src; // 获取data-src
        var imgList = e.currentTarget.dataset.list; // 获取data-list
        console.log(src)
        console.log(imgList)
        for (var i = 0; i < imgList.length; i++) {
            imgList[i] = imgList[i].src
        }
        wx.previewImage({
            current: src, // 当前显示图片的http链接  
            urls: imgList, // 需要预览的图片http链接列表  
            success: function (res) {
                console.log('success');
            },
            fail: function (res) {
                console.log('fail');
            },
        })
    },



})