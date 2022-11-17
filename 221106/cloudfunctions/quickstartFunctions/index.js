const getOpenId = require('./getOpenId/index');
const getManyGroup = require('./getManyGroup.js');
const createGroup = require('./createGroup.js');
const joinGroup = require('./joinGroup.js');



// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'joinGroup':
      return await joinGroup(event, context);
    case 'getManyGroup':
      return await getManyGroup(event, context);
  
    case 'createGroup':
      return await createGroup(event, context);
    
  }
};
