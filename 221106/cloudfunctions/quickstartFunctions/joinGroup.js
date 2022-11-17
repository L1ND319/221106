const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

module.exports = async (event) => {
  try {
    let u = event.data;
    let wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID;
    //let res=await db.collection("test-group").get();
    let groupId=parseInt(res.total)+1;


    await db.collection("test-group").add({
      data: {
        nickname: u.nickname,
        gender: u.gender,
        code: u.code,
        info: u.info,
        merber: 1,
        openId,
        groupId,
      },
    });
    // 有可能在填写时就加满了，要先查一下
    let res = await db
      .collection("test-group")
      .where({
        groupId: u.groupId,
      })
      .get();

    // 更新小组成员数量
    await db
      .collection("test-group")
      .where({
        groupId: u.groupId,
      })
      .update({
        data: {
          merber: _.inc(1),
        },
      });
    await db.collection("test-form").add({
      data: {
        nickname: u.nickname,
        gender: u.gender === "nv",
        code: u.code,
        info: u.info,
        isLeader: false,
        openId,
        groupId: u.groupId,
      },
    });
    return {
      success: true,
      code: res.data[0].code,
      groupId: u.groupId,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      errorMessage: error.message,
    };
  }
};