<<<<<<< HEAD:221106/miniprogram/pages/month/explain.js
<<<<<<<< HEAD:221106/miniprogram/pages/month/explain.js
=======
>>>>>>> 9edb4a2d18727a37b293f219e4e1c7001029596e:221106/pages/month/explain.js
// pages/month/explain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
<<<<<<< HEAD:221106/miniprogram/pages/month/explain.js
})
========
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


>>>>>>>> 9edb4a2d18727a37b293f219e4e1c7001029596e:221106/pages/mine/mine.js
=======
})
>>>>>>> 9edb4a2d18727a37b293f219e4e1c7001029596e:221106/pages/month/explain.js
