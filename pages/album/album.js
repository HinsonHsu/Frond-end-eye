// pages/album/album.js
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
    if (!getApp().globalData.albumFlag) {
      getApp().globalData.albumFlag = true //标记图片库已被打开
      this.album()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //打开一次相片库后返回首页
    wx.switchTab({
      url: '../index/index',
      success: function(e){
        getApp().globalData.albumFlag = false //图片库已关闭
      }
    })
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


  //上传操作
  album:function(){  
    wx.chooseImage({
      count: 1, // 照片数量为1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], // 指定来源来自相册
      success: function (res) {
        var tempFilePaths = res.tempFilePaths // 存储照片的存放位置
        wx.uploadFile({
          url: getApp().globalData.server + '/upload', //服务器地址
          filePath: tempFilePaths[0],
          name: 'photo',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            console.log(res)
            wx.showToast({
              title: "正在上传",
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '../information/infor?key=' + data + '&path=' + tempFilePaths[0]
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '失败',
              icon: 'fail',
              duration: 2000
            })
          }
        })
      }
    })
  }
})