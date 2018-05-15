// pages/analogy/analogy.js
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
    var obj = JSON.parse(options.key)
    console.log(obj)
    var place1_title = obj.places[0].title
    var place1_des = obj.places[0].des
    var place1_time = obj.places[0].time
    var place1_scores = obj.places[0].scores
    var place1_url = obj.places[0].image_url

    var place2_title = obj.places[1].title
    var place2_des = obj.places[1].des
    var place2_time = obj.places[1].time
    var place2_scores = obj.places[1].scores
    var place2_url = obj.places[1].image_url

    var place3_title = obj.places[2].title
    var place3_des = obj.places[2].des
    var place3_time = obj.places[2].time
    var place3_scores = obj.places[2].scores
    var place3_url = obj.places[2].image_url

    this.setData({
      p1_title: place1_title,
      p1_d: place1_des,
      p1_time: place1_time,
      p1_s: place1_scores,
      p1_u: place1_url,

      p2_title: place2_title,
      p2_d: place2_des,
      p2_time: place2_time,
      p2_s: place2_scores,
      p2_u: place2_url,

      p3_title: place3_title,
      p3_d: place3_des,
      p3_time: place3_time,
      p3_s: place3_scores,
      p3_u: place3_url,
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
  
  }
})