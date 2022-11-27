const cloud = require("wx-server-sdk");  
cloud.init({
  env: 'tmp-7gvoi4838e894fa1',
});
exports.main = async(event)=>{
  await cloud.database().collection("test-group")
  .doc(event.id)
  .remove()
}