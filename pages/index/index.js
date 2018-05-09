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

 
  a:function(e){
    var data = {
      name: "澳大利亚",
      des: "澳大利亚是全球土地面积最大的国家，国土面积比整个西欧大一半，澳大利亚不仅国土辽阔，而且物产丰富。其领土面积7692024平方公里，四面环海，是世界上唯一国土覆盖一整个大陆的国家，因此也称“澳洲”。拥有很多独特的动植物和自然景观的澳大利亚，是一个奉行多元文化的移民国家。",
      scores:4.5,
      time:"每年十月到次年二月",
      day:8,
      visa:"一般",
    }
    var route = {
      day1:"皇家铸币厂 -格里芬湖 -澳洲国立美术馆 -澳大利亚国家图书馆 -堪培拉国家战争纪念馆 -澳大利亚",
      day2:"中国花园与中国城 -海德公园 -圣玛丽大教堂 -马丁广场 -悉尼塔 -Nando’s -喜来登公园酒店",
      day3:"悉尼歌剧院 -岩石区 -额尔古纳白桦林景区 -悉尼天文台 -环形码头 -情人港 -Nando’s",
    }
    var recommend = {
      recommend1:{
        name:"墨尔本",
        scores:4.6
      },
      recommend2:{
        name:"悉尼",
        scores:4.5,
      },
      recommend3:{
        name:"布里斯班",
        scores:4.7
      }
    }
    let strData = JSON.stringify(data)
    let strRoute = JSON.stringify(route)
    let strRecommend = JSON.stringify(recommend)
    // console.log(data)
    wx.navigateTo({
      url: '../strategy/strategy?key=' + strData + '&route=' + strRoute + '&recommend=' + strRecommend,
    })
  }
})
