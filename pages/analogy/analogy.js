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
    var place1_title = obj.place1.title
    var place1_des = obj.place1.des
    var place1_time = obj.place1.time
    var place1_scores = obj.place1.scores

    var place2_title = obj.place2.title
    var place2_des = obj.place2.des
    var place2_time = obj.place2.time
    var place2_scores = obj.place2.scores

    var place3_title = obj.place3.title
    var place3_des = obj.place3.des
    var place3_time = obj.place3.time
    var place3_scores = obj.place3.scores

    this.setData({
      p1_title: place1_title,
      p1_d: place1_des,
      p1_time: place1_time,
      p1_s: place1_scores,

      p2_title: place2_title,
      p2_d: place2_des,
      p2_time: place2_time,
      p2_s: place2_scores,

      p3_title: place3_title,
      p3_d: place3_des,
      p3_time: place3_time,
      p3_s: place3_scores,
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