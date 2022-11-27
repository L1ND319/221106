Page({
  data:{
      groupList:[]
  },
  
  onLoad(){
      wx.cloud.database().collection("test-group")
      .get()
      .then(res=>{
        console.log("查询成功",res);
        this.setData({
          groupList:res.data
        })
      })
      .catch(err=>{
        console.log("查询失败",err);
      })
  },
  godetail(e){
    console.log("点击了详情",e);
    console.log("点击详情",e.currentTarget.dataset.id);
    wx.navigateTo({
      url:'/pages/tip/index?id='+e.currentTarget.dataset.id,
    })
  },
  
});