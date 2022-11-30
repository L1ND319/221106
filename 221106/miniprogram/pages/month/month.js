// // pages/month/month.js
// var flag="0"
// var ymlength="0"
// var cyclelength="0"
var N = 31;
var day;
var month;
var leapOrMean = 0;
var lastMonth = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thisMonth = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
Page({
  data: {
      tomonth: '',
      
      monthly:false,
      
      list:[],
      ymd:"",
      selected_ymd:"",
      // selected_action:"",
  },
  onLoad: function (options) {
      var that = this
      this.title = options.title
      var tomonth = this.this_month()
      that.setData({
          tomonth:tomonth
      })
      that.draw_calendar(tomonth);
//judge 判断上个月的平闰
      if (lastMonth[N] === -1) leapOrMean = 0;
      else leapOrMean = 1;
//change
      for (var i = 0; i <= N; i ++ ) {
          lastMonth[i] = thisMonth[i];
          thisMonth[i] = 0;
      }
      if (leapOrMean) thisMonth[N] = 0;
      else thisMonth[N] = -1;
  },
  prev:function(e){
      var that = this
      var now = that.data.tomonth;
      var arr = now.split('-');
      var year,month
      if (arr[1]-1 == 0) {//如果是1月份，则取上一年的12月份
          year = arr[0] - 1;
          month = 12;
      }else{
          year = arr[0];
          month = arr[1]-1;
      }
      month =(month<10 ? "0"+month:month); 
      var tomonth = year+"-"+month;
      that.setData({
          tomonth:tomonth
      })
      that.draw_calendar(tomonth);
      
  },
  next:function(e){
      var that = this
      var now = that.data.tomonth;
      var arr = now.split('-');
      var year,month
      if (arr[1]-0+1 == 13) {//如果是1月份，则取上一年的12月份
          year = arr[0]-0+1;
          month = 1;
      }else{
          year = arr[0];
          month = arr[1]-0+1;
      }
      month =(month<10 ? "0"+month:month); 
      var tomonth = year+"-"+month;
      that.setData({
          tomonth:tomonth
      })
      that.draw_calendar(tomonth);
  },
  this_month:function(e){
      var that = this;
      var date=new Date;
      var month=date.getMonth()+1;
      month =(month<10 ? "0"+month:month); 
      var year=date.getFullYear(); 
      var tomonth = year+"-"+month;
      /*console.log(tomonth);*/
      return tomonth;
  },
  draw_calendar: function (now) {
      var arr = now.split('-');
      var year = arr[0];
      var month = arr[1];
      var that = this;
      var list = [];
      var d = new Date(year,month-1,1,1,1,1);
      /*console.log(d);*/
      var firstDay = d.getDay();
      var allDate = new Date(d.getFullYear(), (d.getMonth()+1), 0).getDate();
      var ymd;
      for(var i=0; i<firstDay;i++){
          list.push({
              ymd : "",
              date : "",
              
              monthly : false,
              today : false,
          })
      }
      var j = 1;
      var k = i;
      for(i;i<allDate+k;i++){
          var dd = new Date(); 
          var y = dd.getFullYear(); 
          var m = dd.getMonth()+1;//获取当前月份的日期 
          var d = dd.getDate(); 
          var ymd = year+"-"+month+"-"+j;
          var today = ''
          if(year==y && month==m && d==j){
              today = true;
              that.setData({
                  ymd:ymd
              })
          }else{
              today = false;
          }
          
          var action = wx.getStorageSync(ymd);
          list.push({
              ymd :ymd,
              date : j,
              monthly : action=="monthly"?true:false,
              today : today
          })
          j++;
      }
      
      var lastDay = new Date(year,month-1,allDate,1,1,1).getDay();
      /*console.log(lastDay);*/
      var k = i;
      for(i; i<(6-lastDay+k);i++){
          list.push({
              ymd : "",
              date : "",
              
              monthly : false,
              today : 0,
          })
      }
      that.setData({
          list:list
      })
  },
 
  monthly: function(e){
      var action = wx.getStorageSync(this.data.ymd);
     
      var selected = e.currentTarget.dataset.selected
      if(selected==1){
          this.setData({
              monthly:false,
          })
          wx.setStorageSync(this.data.ymd,"")
          
      }else{
          this.setData({
              monthly:true,
          })
          wx.setStorageSync(this.data.ymd,"monthly")
          wx.cloud.callFunction({
            name:"addstartday",
                data:{
                  day:this.data.ymd,
                },
        }).then(console.log)
    //getDay 获取int日期
    var ymd = this.data.ymd;
    var len = ymd.length;
    if (len === 10) {
        //日期十位数
        if (ymd[len - 2] === '1') day = 10;
        else if (ymd[len - 2] === '2') day = 20;
        else day = 30;
        day += ymd[len - 1] - '0';
    } else {
        //日期个位数
        day = ymd[len - 1] - '0';
    }
    // getMonth 获取int月份
    if (ymd[5] === '1') month = 10;
    else month = 0;
    month += ymd[5] - '0';

    //在这里获取周期
    this.getCycle();
      }
      this.draw_calendar(this.data.tomonth)
      
  },
  selected_day: function(e){
      var ymd = e.currentTarget.dataset.ymd;
       this.setData({
          ymd:ymd
      })
      var action = wx.getStorageSync(ymd);
      if(action=="monthly"){
        this.setData({
          monthly:true, 
          })
          }
      else{
           this.setData({
              monthly:false,
          })
      }
      
  },
  
   getCycle:function(e) {
    //参数 day : int，表示当前的日期
    var lastDay = -1;
    for (var i = day - 1; i >= 1; i -- ) {
        if (thisMonth[i] === 1 && thisMonth[i - 1] === 0) {
            lastDay = i;
            break;
        }
    }
    var cycle = -1;
    var lastMonthStart = -1;
    if (lastDay === -1) {
        if (leapOrMean) lastMonthStart = 31;
        else lastMonthStart = 30;
        if (lastMonth[lastMonthStart] === 0) {
            lastDay = 1;
            cycle = day;
        } else {
            for (var i = lastMonthStart; i; i -- ) {
                if (lastMonth[i] === 1 && lastMonth[i - 1] === 0) {
                    lastDay = i;
                    break;
                }
            }
        }
        cycle = day + 31 - lastDay;
        if (lastMonthStart === 31) cycle ++;
    } else {
        cycle = day - lastDay + 1;
    }
    console.log(day);
    console.log(lastDay);
    console.log(cycle);
},

    goTo:function(){
    wx.navigateTo({
      url: '../month/explain',
    })
  },
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {
  //   this.initCalendar();
  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }



})
