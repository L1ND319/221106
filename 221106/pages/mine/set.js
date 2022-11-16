
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
        span1: '',
        span2: '',
     
      },
     
      showToast(){
            wx.showToast({
              title: '更改成功',
              icon: 'success',
              duration: 800//持续的时间
            })
          },
          formSubmit:function(e){

            console.log(e.detail.value);
            
            //表单数据
            
            var objData = e.detail.value;
            
            if (objData.span1 && objData.span2){
            
            //异步方式储存表单数据
            
            wx.setStorage({
            
            key: 'span1',
            
            data: objData.span1,
            
            })
            
            wx.setStorage({
            
            key: 'span2',
            
            data: objData.span2,
            
            })
            
            }
            
            },
// formSubmit:function (e) {
//         console.log('form发生了submit事件，携带数据为：',e.detail.value)
//        var objdata=e.detail.value
//         wx.setStorageSync('span1',objdata.span1)
//         wx.setStorageSync('span2',objdata.span2)
              
//         },
  
  /*
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // let span1 = wx.getStorageSync('span1')
    // let span2 =wx.getStorageSync('span2')
    // this.setData({
    //  span1:span1
    // })
    // this.setData({
    //   span2:span2
    //  })
    var that = this

wx.getStorage({

key: 'span1',

success: function(res) {

that.setData({ span1: res.data })

},

})

wx.getStorage({

key: 'span2',

success: function (res) {

console.log(res.data)

that.setData({ span2: res.data })

},

})
  },
 
  
  /** 生命周期函数--监听页面初次渲染完成
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