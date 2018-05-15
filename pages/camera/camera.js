// pages/photo/photo.js
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
    if (!getApp().globalData.cameraFlag){
      getApp().globalData.cameraFlag = true //标记相机已被打开
      this.camera()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //进行一次拍照后返回首页
    wx.switchTab({
      url: '../index/index',
      success: function(e){
        getApp().globalData.cameraFlag = false //相机已关闭
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

  //拍照操作
  camera:function(){
    wx.chooseImage({
      count: 1, // 照片数量为1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 指定来源来自相机
      success: function (res) {
        var tempFilePaths = res.tempFilePaths // 存储照片的存放位置
        // console.log(tempFilePaths[0])
        console.log("photo success")
        wx.showToast({
          title: "正在上传",
          icon: 'success',
          duration: 2000
        }),
        wx.uploadFile({
          url: getApp().globalData.server + '/upload', //服务器地址
          filePath: tempFilePaths[0],
          name: 'photo',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            console.log("upload success")
            var data = res.data
            // data = {
            //   name: "fuzinfs",
            //   des: "sdfsdf"
            // }
            console.log(res)
            wx.navigateTo({
              url: '../information/infor?key=' + data + '&path=' + tempFilePaths[0]
            })
          },
          fail: function (res) {
            console.log("upload fail")
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