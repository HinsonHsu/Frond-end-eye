//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用eye',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  camera: function () {
    wx.chooseImage({
      count: 1, // 照片数量为1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 指定来源来自相机
      success:function(res){
        var tempFilePaths = res.tempFilePaths // 存储照片的存放位置
        wx.uploadFile({
          url: 'http://www.h1nson.cn/upload', //服务器地址
          filePath: tempFilePaths[0],
          name: 'photo',
          formData: {
            'user': 'test'
          },
          success: function (res) {          
            var data = res.data
            console.log(res)
            wx.showToast({
              title: "成功",
              icon: 'success',
              duration: 2000
            }) 
            wx.navigateTo({
              url:'../information/infor?key=' + data
            })
          }, 
          fail:function (res) {
            wx.showToast({
              title: '失败',
              icon: 'fail',
              duration: 2000
            })
          }
        })
      }
    })
  },

  // request: function(){
  //   wx.request({
  //     url: 'http://www.h1nson.cn/hello', //仅为示例，并非真实的接口地址
  //     success: function (res) {
  //       wx.showToast({
  //         title: '成功',
  //         icon: 'success',
  //         duration: 2000
  //       })
  //     },
  //     fail: function (res) {
  //       wx.showToast({
  //         title: '失败',
  //         icon: 'fail',
  //         duration: 2000
  //       })
  //     }
  //   })
  // }
})
