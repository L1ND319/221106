var page={
  mainPage:"../main/main",
  writePage:"../write_note/write_note"
}
/**
 * 
 * @param {页面地址} url 
 * @param {参数} param 
 * @param {1 nativeTo 2 redirectTo 3 switchTab} startType 
 */
function startPage(url, param, startType) {
  if (param == {}||param==null) {
    if (startType == 1) {
      return wx.navigateTo({
        url: url,
      })
    } else if (startType == 2) {
      return wx.redirectTo({
        url: url,
      })
    } else if (startType == 3) {
      return wx.switchTab({
        url: url,
      })
    }
  } else {
    let paramStr = '?'

    // for (let index = 0; index < param.length; index++) {
    //   paramStr = "&" + paramStr + Object.keys(param)[index] + "=" + param[index]
    // }
    for (var key in param) {
      if (paramStr.length!=1) {
        paramStr+="&"
      }
      paramStr+= key + "=" + param[key]
    }
    let urlStr = url + paramStr
    if (startType == 1) {
      return wx.navigateTo({
        url: urlStr,
      })
    } else if (startType == 2) {
      return wx.redirectTo({
        url: urlStr,
      })
    } else if (startType == 3) {
      return wx.switchTab({
        url: urlStr,
      })
    }
  }

}
module.exports = {
  startPage: startPage,
  page: page,
}