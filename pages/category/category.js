

Page({
    data: {
       btns:['集原美','动漫','美女','风景','苹果'],
       active:0
    },
    onLoad: function() {
        var that = this
        //4k
        wx.request({
            url: 'https://www.cyrilstudio.top/wallpaper/jiyuanmei.json', 
            success (res) {
              that.setData({ 
                wall_jym_Data:res.data
              });
             // console.log(res.data)
            }
          }),
        //动漫
          wx.request({
            url: 'https://www.cyrilstudio.top/wallpaper/dongman.json', 
            success (res) {
              that.setData({ 
                wall_dongman_Data:res.data
              });
            //  console.log(res.data)
            }
          }),
           //美女
           wx.request({
            url: 'https://www.cyrilstudio.top/wallpaper/meinv.json', 
            success (res) {
              that.setData({ 
                wall_girl_Data: res.data
              });
             // console.log(res.data)
            },
          }),
          //风景
          wx.request({
            url: 'https://www.cyrilstudio.top/wallpaper/fengjing.json', 
            success (res) {
              that.setData({ 
                wall_view_Data: res.data
              });
             // console.log(res.data)
            },
          }),
          //苹果
          wx.request({
            url: 'https://www.cyrilstudio.top/wallpaper/apple.json', 
            success (res) {
              that.setData({ 
                wall_text_Data: res.data
              });
              //console.log(res.data)
            },
          })
    },

    change:function(e){
        this.setData({
            active:e.currentTarget.dataset.index,
        })
    },
             //图片保存
    savePhoto:function(e){
        var src = e.currentTarget.dataset.src; // 获取data-src
        var imgList = e.currentTarget.dataset.list; // 获取data-list
        console.log(src)
        console.log(imgList)
        for (var i = 0; i<imgList.length;i++) {
        imgList[i]=imgList[i].src
        }
        wx.previewImage({
            current: src,   // 当前显示图片的http链接  
            urls:imgList ,  // 需要预览的图片http链接列表  
            success: function(res) {
                console.log('success');
            },
            fail: function(res) {
                console.log('fail');
            },
        })
    },
})