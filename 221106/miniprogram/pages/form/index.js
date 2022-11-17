Page({
    data:{
      
      currtab: 0,
  
        region:"",
        groupId:""
    },
    jumpPage:function(){
    var pages = getCurrentPages(); //当前页面
    var beforePage = pages[pages.length - 2]; //前一页
    beforePage.onLoad(); // 执行前一个页面的onLoad方法
    wx.navigateBack({
    delta: 1
    })
    },
    onLoad:function(e){
        if(e.groupId){
            this.setData({
                groupId: e.groupId,
            });
        }
    },
    submit: function(e){
        let u=e.detail.value;
        if(this.data.groupId){
            wx.cloud.callFunction({
                name:"quickstartFunctions",
                data:{
                    type:"joinGroup",
                    data:{
                        ...u,
                        region:this.data.region,
                        groupId:Number(this.data.groupId),
                    },
                },
            })
            
        }
        else{
        wx.cloud.callFunction({
            name:"quickstartFunctions",
            data:{
                type:"createGroup",
                data:{
                    ...u,
                    region:this.data.region,
                },
            },
        })
        .then((res) => {
            console.log(res);
        });
    }
    },

    bindDateChange(e) {
      let that = this;
      console.log(e.detail.value)
      that.setData({
        date: e.detail.value,
      })
    },
   
   


});