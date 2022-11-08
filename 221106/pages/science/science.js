// pages/science/science.js
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

  },
  nametxt: document.getElementById('name'),
  button: document.getElementById('button_text'),
        // 创建一个数组存储名字
        uname: ['阿阳热爱前端','郝嘉慧','冬灰条','蒸羊羔儿','蒸熊掌','蒸鹿尾儿',
				'烧花鸭','烧雏鸡','烧子鹅','炉猪','炉鸭','酱鸡','腊肉','松花',
				'小肚儿','晾肉','香肠儿','什锦苏盘儿','熏鸡白肚儿','清蒸八宝猪',
				'江米酿鸭子','罐儿野鸡','罐儿鹌鹑','卤什件儿','卤子鹅','山鸡','兔脯',
				'菜蟒','银鱼','清蒸哈什蚂','烩鸭腰儿','鸭条','清拌腰丝儿','黄心管儿'],
        // 创建一个函数生成随机数字
        getrandom:function (min,max){
            return Math.floor(Math.random()*(max-min-1)+min);
        },
        clock: function (){
            // 通过获取一个随机的数组下标实现随机获取一个名字，并将这个名字赋值给变量random
            var random = uname[getrandom(0,uname.length-1)];
            //将random塞到span里
            nametxt.innerHTML=random;
        },
})