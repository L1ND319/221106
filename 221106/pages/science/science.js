// pages/science/science.js
const texts = ['正常月经总量是5mL~80mL，大多数人在20mL~60mL。','红糖水对于缓解痛经的效果主要取决于热水。','月经周期并不都是28天，只要间隔时间稳定就可认为是规律的。','单次月经总量少于5mL则为月经过少，需注意原发病。','单次月经总量多于80mL则为月经过多，需警惕贫血及原发病。','月经流出体外后颜色发黑并且结块是正常的。','痛经分为原发性痛经和继发性痛经，后者需要进一步检查原发病。','原发性痛经的产生跟前列腺素相关，有办法缓解，不用硬扛。','缓解原发性痛经的方法有：非甾体抗炎药、短效避孕药、热量传导。','月经期间体重增加可能跟水钠潴留相关。','使用药物可以推迟月经，但需要至少提前2周遵医嘱用药。']
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
    this.setData({text:texts[0]})
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

  },
  flash: function(){
    function getrandom(min,max){
      return Math.floor(Math.random()*(max-min-1)+min);
  }
  this.setData({text:texts[getrandom(0,texts.length-1)]})
  }
  
})