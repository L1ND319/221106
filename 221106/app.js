// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
    /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function () {
 
},
onPullDownRefresh: function () {
  var that = this;
  that.setData({
    currentTab: 0 //当前页的一些初始数据
  })
  this.onLoad(); //重新加载onLoad()
},  /**
* 生命周期函数--监听页面加载
*/
onLoad: function (options) {
 wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
}

})
