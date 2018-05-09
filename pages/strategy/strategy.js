// pages/strategy/strategy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var obj = JSON.parse(options.key)
    var route = JSON.parse(options.route)
    var recommend = JSON.parse(options.recommend)
    // console.log(obj)
    //相关介绍
    var place = obj.name
    var des = obj.des
    var scores = obj.scores
    var time = obj.time
    var day = obj.day
    var visa = obj.visa
    //路线介绍
    var day1 = route.day1
    var day2 = route.day2
    var day3 = route.day3
    //推荐
    console.log(recommend)
    var recommend1_name = recommend.recommend1.name
    var recommend1_scores = recommend.recommend1.scores
    var recommend2_name = recommend.recommend2.name
    var recommend2_scores = recommend.recommend2.scores
    var recommend3_name = recommend.recommend3.name
    var recommend3_scores = recommend.recommend3.scores
   
    this.setData({
      place: place,
      des: des,
      scores: scores,
      time: time,
      day: day,
      visa: visa,

      day1:day1,
      day2:day2,
      day3:day3,

      r1_n : recommend1_name,
      r1_s : recommend1_scores,
      r2_n : recommend2_name,
      r2_s : recommend2_scores,
      r3_n : recommend3_name,
      r3_s : recommend3_scores
    })
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

  imageLoad: function(e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 420,           //设置图片显示宽度，  
      viewHeight = 420 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  },  

  detail_des:function(e) {
    wx.navigateTo({
      url: '../des_detail/des_detail',
    })
  },

  route_all:function(e) {
    wx.navigateTo({
      url: '../route_all/route_all',
    })
  }
})