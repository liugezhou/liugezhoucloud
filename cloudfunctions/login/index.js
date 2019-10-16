const cloud = require('wx-server-sdk')

exports.main = (event, context) => {
  
  let wxContext = cloud.getWXContext()
  
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
