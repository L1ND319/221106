// pages/mine/mine.js

Page({
  data: {
     avatarUrl: "",
  }, 
  

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    wx.setStorage({
            
      key: 'userinfo',
      
      data: avatarUrl,
      
      })

    // wx.setStorageSync('avatarurl', avatarUrl)
    this.setData({
      avatarUrl,
     
    })
  },
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({

      key: 'userinfo',
      
      success: function(res) {
      
      that.setData({ avatarUrl: res.data })
      
      },
      
      })
    // let avatarUrl = wx.getStorageSync('avatarUrl')
    // this.setData({
    //   avatarUrl: avatarUrl
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
gotorecord(){
 wx.navigateTo({
   url: '/pages/mine/record',
 })
},
gotoset(){
  wx.navigateTo({
    url: '/pages/mine/set',
  })
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


