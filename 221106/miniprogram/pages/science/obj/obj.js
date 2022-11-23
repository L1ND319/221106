// // pages/science/obj/obj.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
    
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   },

//   gotojin(){
//     // wx.showModal({
//     //   title:'卫生巾',
//     //   content:'',
//     //   confirmText: '返回',
//     //   showCancel: false,
//     // })
//   },
//   gototiao(){
//     // wx.showModal({
//     //   title:'卫生棉条',
//     //   content:'',
//     //   confirmText: '返回',
//     //   showCancel: false,
//     // })
//   },
//   gotobei(){
//   //   wx.showModal({
//   //     title:'月经杯',
//   //     content:'',
//   //     confirmText: '返回',
//   //     showCancel: false,
//   //   })
//   }
// })

// index.js
Page({
  data:{
    isExpand:false
  },
  jin:function(){
    const self = this;
    self.setData({
      isExpand:!self.data.isExpand
    });
  }
})
