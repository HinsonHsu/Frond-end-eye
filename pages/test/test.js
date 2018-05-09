// pages/test/test.js

//判定信息页面接收到数据，可以添加到历史页面
var infor_f = getApp().globalData.inforFlag
// console.log(infor_f)

Page({
  data: {
    starScore:5
      // history_infor: [{
      //   text: 1111
      // }, {
      //   text: '2222'
      // }, {
      //   text: '2222'
      // }, {
      //   text: '2222'
      // }, {
      //   text: '2222'
      // }, {
      //   text: '2222'
      // }]
  },

  onLoad: function(options){

    // var obj = JSON.parse(options.key)
    

    // wx.getStorage({
    //   key: 'key',
    //   success: function (res) {
    //     //console.log(res)
    //     //console.log(res.data)

    //     //json 解析
    //     var obj = JSON.parse(res.data)
    //     console.log(obj.tags[0].value)
    //   }
    // })
  }
})