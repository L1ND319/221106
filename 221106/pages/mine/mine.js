// pages/mine/mine.js

const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'//默认图片的链接
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
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

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    wx.setStorageSync('avatarurl', avatarUrl)
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
    let avatarUrl = wx.getStorageSync('avatarUrl')
    this.setData({
      avatarUrl: avatarUrl
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


