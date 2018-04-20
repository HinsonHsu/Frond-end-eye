// pages/mine/mine.js
var url_go //记录跳转页面
var app = getApp()
Page({
  data: {
    list:[{
      name:'历史信息',
      id:1,
      icon:'../../images/箭头.png'
    },{
      name:'设置',
      id:2,
      icon: '../../images/箭头.png'
    }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })
  },
  gotableinfor:function(e){
    var index = e.currentTarget.dataset.id
    //console.log(index)
    
    switch(index){
      case 1: 
        url_go = '../history_infor/history_infor?id' + index
        break;
      case 2:
        url_go = '../setting/setting?id' + index
        break
    }

    console.log(url_go)
    wx.navigateTo({
      url: url_go,
    })
  }
})  