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

  //旅游攻略
  // a:function(e){
  //   //介绍
  //   var data = {
  //     name: "澳大利亚",//地名
  //     des: "澳大利亚是全球土地面积最大的国家，国土面积比整个西欧大一半，澳大利亚不仅国土辽阔，而且物产丰富。其领土面积7692024平方公里，四面环海，是世界上唯一国土覆盖一整个大陆的国家，因此也称“澳洲”。拥有很多独特的动植物和自然景观的澳大利亚，是一个奉行多元文化的移民国家。",//描述
  //     scores:4.5,//评分
  //     time:"每年十月到次年二月",//最佳旅游时间
  //     day:8,//建议游玩天数
  //     visa:"一般",//签证难度
  //   }
  //   //路线，推荐几天写几天
  //   var route = {
  //     day1:"皇家铸币厂 -格里芬湖 -澳洲国立美术馆 -澳大利亚国家图书馆 -堪培拉国家战争纪念馆 -澳大利亚",
  //     day2:"中国花园与中国城 -海德公园 -圣玛丽大教堂 -马丁广场 -悉尼塔 -Nando’s -喜来登公园酒店",
  //     day3:"悉尼歌剧院 -岩石区 -额尔古纳白桦林景区 -悉尼天文台 -环形码头 -情人港 -Nando’s",
  //   }
  //   //不可错过
  //   var recommend = {
  //     recommend1:{
  //       name:"墨尔本",//地名
  //       scores:4.6//评分
  //     },
  //     recommend2:{
  //       name:"悉尼",
  //       scores:4.5,
  //     },
  //     recommend3:{
  //       name:"布里斯班",
  //       scores:4.7
  //     }
  //   }
  //   let strData = JSON.stringify(data)
  //   let strRoute = JSON.stringify(route)
  //   let strRecommend = JSON.stringify(recommend)
  //   // console.log(data)
  //   wx.navigateTo({
  //     url: '../strategy/strategy?key=' + strData + '&route=' + strRoute + '&recommend=' + strRecommend,
  //   })
  // },

  // //相关景点推荐
  // b:function(e) {
  //   var data = {
  //     place1:{
  //       title:"澳洲：带你探寻不一样的澳洲之旅",//主题
  //       des:"澳大利亚联邦（英语：Commonwealth of Australia），简称“澳大利亚”（Australia）。其领土面积7692024平方公里，四面环海，是世界上唯一国土覆盖一整个大陆的国家，因此也称“澳洲”。拥有很多独特的动植物和自然景观的澳大利亚，是一个奉行多元文化的移民国家。",//介绍
  //       time:"每年10月到次年2月",//最佳时间
  //       scores:4.8,//评分
  //     },
  //     place2:{
  //       title:"日本：享受东京海景和日本料理",
  //       des: "位于东亚、国名意为“日出之国”，领土由北海道、本州、四国、九州四个大岛及7200多个小岛组成，总面积37.8万平方公里。主体民族为大和族，通用日语，总人口约1.26亿。3世纪中叶，其境内出现较大的国家大和国。645年，日本向中国唐朝学习，进行大化改新。12世纪后期，天皇皇权旁落，进入幕府统治时代。",
  //       time:"全年",
  //       scores:4.7,
  //     },
  //     place3:{
  //       title:"意大利：花式穿越意大利，玩遍古迹",
  //       des:"意大利共和国（意大利语：Repubblica Italiana），简称意大利（意大利语：Italia），是一个欧洲国家，主要由南欧的亚平宁半岛及两个位于地中海中的岛屿西西里岛与萨丁岛所组成。国土面积为301333平方公里，人口6002万。北方的阿尔卑斯山地区与法国、瑞士、奥地利以及斯洛文尼亚接壤，其领土还包围着两个微型国家——圣马力诺与梵蒂冈。",
  //       time:"5月到10月",
  //       scores:4.6,
  //     }
  //   }

  //   let strData = JSON.stringify(data)

  //   wx.navigateTo({
  //     url: '../analogy/analogy?key=' + strData,
  //   })
  // }
})
