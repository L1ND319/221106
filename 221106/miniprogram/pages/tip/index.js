var id=""
Page({
  data:{
      group:{}
  },
 onLoad(options){
   console.log("列表携带的值",options);
   id=options.id
   wx.cloud.database().collection("test-group")
   .doc(id)
   .get()
   .then(res=>{
     console.log("详情请求成功",res);
     this.setData({
       group:res.data
     })
   })
   .catch(ree=>{
     console.log("详情请求失败",err);
   })
 },
  
  
  delete(){
    wx.showModal({
      title:"提示",
      content:"确定要删除吗？",
      success:function(sm){
        if(sm.confirm){
          
          wx.cloud.callFunction({
            name:"removegroup",
                data:{
                  id:id
                },
        })

         
          .then(res=>{
            console.log("删除成功",res);
            wx.showToast({
              title:"删除成功",
              icon:"success",
              duration:1000
            })
            setTimeout(function(){
              wx.switchTab({
                url:'../index/index'
              })
            },1000)
          })
          .catch(err=>{
            console.log("删除失败",err);
          })
        }else if (sm.cancel){
          console.log('用户点击取消')
        }
      }
    })
  }
  
});