const {wallpaperUrl} = require('../../utils/util')
Page({
    data: {
        hotList:[],
        current: 1,

        imageList: [{
                url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/1.png',
                mode: "widthFix"
            },
            {
                url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/2.png',
                mode: "widthFix"
            },
            {
                url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/3.png',
                mode: "widthFix"
            },
            {
                url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/4.png',
                mode: "widthFix"
            },
            {
                url: 'https://activity.vtuzx.com/doc/vtuUI/weapp/swiper/5.png',
                mode: "widthFix"
            }

        ],
 
       
     
        windowWidth: wx.getSystemInfoSync().windowWidth
    },
    onLoad() {
     this.hotWallpaper()
   
    },
    navBarLoad: function (e) {
        this.setData({
            navBarHeight: e.detail.navBarHeight
        })
    },
    hotWallpaper:function(){
        var that = this
        wx.request({
            url: wallpaperUrl + 'hot', //仅为示例，并非真实的接口地址
            success(res) {
                console.log(res.data)
                that.setData({
                    hotList:res.data
                   
                })
            }
          })
        
    }

  
    

   
   
  
    
    
});