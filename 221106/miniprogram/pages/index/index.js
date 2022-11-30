let that = this
var _openid
Page({
  data:{
      groupList:[]
  },
  
  
  godetail(e){
    console.log("点击了详情",e);
    console.log("点击详情",e.currentTarget.dataset.id);
    wx.navigateTo({
      url:'/pages/tip/index?id='+e.currentTarget.dataset.id,
    })
  },
  onLoad: function (options) {
    wx.startPullDownRefresh()     //页面加载的时候，开始页面刷新动画
    this.getList()
    wx.cloud.callFunction({
      name: "getopenid",
       success(res){
      // 授权用户的openid
      _openid = res.result.openid
      }
     })
  },
    //获取列表信息
    getList(){
      
      wx.cloud.callFunction({
        name: "getgrouplist"
       })
      .then(res=>{
        console.log("请求成功",res);
        wx.stopPullDownRefresh()      //数据请求成功后，停止页面刷新动画
        this.setData({
          list:res.result.data,
          groupList:res.result.data
        })
      })
      .catch(err=>{
        console.log("请求失败",err);
      })
    },
    
  
    //监听用户下拉动作
    onPullDownRefresh(){
      console.log("下拉刷新的监听");
      //下拉刷新的时候，调用getList获取列表信息
      this.getList()
    }
  
 

  
});