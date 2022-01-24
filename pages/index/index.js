//index.js
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  

  onLoad: function () {
    // 轮播图
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../images/a1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../images/a2.jpg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
      var data = {
        "navdatas":[
          {
            "id":"动态壁纸",
            "navimgUrl":"../images/icon/射手座.svg",
            "appid":"wx776d9f6ced49c4fa"
          
          },
          {
            "id":"头像挂件",
            "navimgUrl":"../images/icon/巨蟹座.svg",
            "appid":"wx37da2c80f978c546"
          },
          {
            "id":"虎年拜年",
            "navimgUrl":"../images/icon/摩羯座.svg",
            "appid":"wxe9301cfb7787abd0"
          },
          {
            "id":"英语世界",
            "navimgUrl":"../images/icon/狮子座.svg",
            "appid":"wx4e81c1255483176a"
          },
      
        ]
      };
    that.setData({
      navData: data.navdatas,
    })
    
    wx.request({
      url: 'https://www.cyrilstudio.top/wallpaper/meinv.json', 
      success (res) {
        that.setData({ 
          userData:res.data
        });
        console.log(res.data)
      }
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
        current:src,   // 当前显示图片的http链接  
        urls:imgList ,  // 需要预览的图片http链接列表  
        success: function(res) {
            console.log('success');
        },
        fail: function(res) {
            console.log('fail');
        },
    })
},
  navTo:function(e){
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid,
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  }

})