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
    console.log(obj)
    //相关介绍
    var place = obj.place.name
    var des = obj.place.des
    var scores = obj.place.scores
    var time = obj.place.time
    var day = obj.place.day
    var visa = obj.place.visa
    var image_url = obj.place.image_url
    //路线介绍
    var day_url = obj.routes[0].image_url
    var day1 = obj.routes[0].route
    var day2 = obj.routes[1].route
    var day3 = obj.routes[2].route
    //推荐
    var recommend1_name = obj.recommend[0].name
    var recommend1_scores = obj.recommend[0].score
    var recommend1_url = obj.recommend[0].image_url
    var recommend2_name = obj.recommend[1].name
    var recommend2_scores = obj.recommend[1].score
    var recommend2_url = obj.recommend[1].image_url
    var recommend3_name = obj.recommend[2].name
    var recommend3_scores = obj.recommend[2].score
    var recommend3_url = obj.recommend[2].image_url

    this.setData({
      place: place,
      des: des,
      scores: scores,
      time: time,
      day: day,
      visa: visa,
      image_url: image_url,

      day1: day1,
      day2: day2,
      day3: day3,
      day_url: day_url,

      r1_n: recommend1_name,
      r1_s: recommend1_scores,
      r1_u: recommend1_url,
      r2_n: recommend2_name,
      r2_s: recommend2_scores,
      r2_u: recommend2_url,
      r3_n: recommend3_name,
      r3_s: recommend3_scores,
      r3_u: recommend3_url
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

  // imageLoad: function(e) {
  //   var _this = this;
  //   var $width = e.detail.width,    //获取图片真实宽度  
  //     $height = e.detail.height,
  //     ratio = $width / $height;   //图片的真实宽高比例  
  //   var viewWidth = 420,           //设置图片显示宽度，  
  //     viewHeight = 420 / ratio;    //计算的高度值     
  //   this.setData({
  //     imgwidth: viewWidth,
  //     imgheight: viewHeight
  //   })
  // },  

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