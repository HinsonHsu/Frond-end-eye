// pages/information/infor.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   * 接收处理结果
   */
  onLoad: function (options) {
    //获取json
    this.setData({
      key:options.key,
      path:options.path,
    })
    //console.log(options.key)
    //console.log("路径" + options.path)
    getApp().globalData.cameraFlag = false //相机已关闭
    getApp().globalData.albumFlag = false //图片库已关闭
    getApp().globalData.inforFlag = true  //信息已接收

    //json解析
    var obj = JSON.parse(options.key)
    var place = obj.data.value
    var des = obj.data.description
    //console.log("地点:" + obj.data.value)
    //console.log("描述：" + obj.data.description)

    this.setData({
      place: place,
      des: des,
    })
    //console.log(obj.tags[0].value)

    // //信息编号
    // var keyNum = String(getApp().globalData.inforNum)
    // getApp().globalData.inforNum++
    // console.log(keyNum)

    // //信息缓存
    // wx.setStorage({
    //   key: keyNum,
    //   data: options.key,
    //   success: function (res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //图片缩放
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 500,           //设置图片显示宽度，  
      viewHeight = 500 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },  

})