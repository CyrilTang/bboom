import {
  resquest
} from '../../utils/request'
import config from '../../utils/config'

Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    lunboData: [],

  },
  onClickLeft() {
    wx.showToast({
      title: '点击返回',
      icon: 'none'
    });
  },
  onClickRight() {
    wx.showToast({
      title: '点击按钮',
      icon: 'none'
    });
  },

  onLoad: async function () {


    // 轮播图

    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "../images/a1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../images/a2.jpg"
        }
      ]
    };
    this.setData({
      lunboData: data.datas

    })

    var data = {
      "navdatas": [{
          "id": "动态壁纸",
          "navimgUrl": "../images/icon/射手座.svg",
          "appid": "wx776d9f6ced49c4fa"

        },
        {
          "id": "头像挂件",
          "navimgUrl": "../images/icon/巨蟹座.svg",
          "appid": "wx37da2c80f978c546"
        },
        {
          "id": "AI漫画脸",
          "navimgUrl": "../images/icon/摩羯座.svg",
          "appid": "wxe9301cfb7787abd0"
        },
        {
          "id": "英语世界",
          "navimgUrl": "../images/icon/狮子座.svg",
          "appid": "wx4e81c1255483176a"
        },

      ]
    };
    this.setData({
      navData: data.navdatas,
    })
    //获取本地数据
    const recommendDataPic = wx.getStorageSync('recommend')
    ///判断是否存在
    if (!recommendDataPic) {
      resquest({
          url: config.host + "/girl"
        })
        .then(res => {
          this.recommendDataPic = res
          wx.setStorageSync('recommend', {
            time: Date.now(),
            data: this.recommendDataPic
          })
          this.setData({
            recommendDataPic: res,
          })
        })

    }else {
      //有数据 定义过期时间 10s
   
      if(Date.now()-recommendDataPic.time>100000*10){
        //new 
        resquest({
          url: config.host + "/girl"
        })
        .then(res => {

          this.setData({
            recommendDataPic: res,
          })
        })
      }else{
        console.log('旧数据')
      
        this.setData({
          recommendDataPic:recommendDataPic.data,
        })
      }
    }

  },




  navTo: function (e) {
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
  },

  async onPullDownRefresh() {
    resquest({
        url: config.host + "/girl"
      })
      .then(res => {
        this.setData({
          recommendDataPic: res

        })
      })
  }

})