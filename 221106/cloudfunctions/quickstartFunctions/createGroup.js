const cloud = require("wx-server-sdk");  

cloud.init({
    env:cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

module.exports = async(event) =>{
    let u = event.data;

        let wxContext = cloud.getWXContext();
        let openId = wxContext.OPENID;

        let res = await db.collection("test-group").count();
        let groupId = parseInt(res.total)+1;


    await db.collection("test-group").add({
        data:{
            leader: u.nickname,
            num: u.num,
            code_a: u.code_a,
            code_b: u.code_b,
            code_c: u.code_c,
            info: u.info,
            merber:1,
            openId,
            groupId,
        },
    });
    await db.collection("test-form").add({
        data:{
            nickname: u.nickname,
            gender: u.gender === "nv",
            num: u.num,
            code_a: u.code_a,
            code_b: u.code_b,
            code_c: u.code_c,
            info: u.info,
            isLeader:true,
            openId,
            groupId,
        },
    });
    return{
        success :true,
    };
};