//app.js

App({
  onLaunch: function() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
      // 调用云函数
      wx.cloud.callFunction({
        name: 'login',
        data: {
        },
        success: res => {
          const _res =res
          this.globalData.openid = _res.result.openid
          //首先查找数据库是否已经存储该登录人
          const db = wx.cloud.database()
          db.collection('user').where({
            openid: _res.result.openid
          })
            .get({
              success: function (res) {
                // res.data 是包含以上定义的两条记录的数组
                if (Object.is(res.data.length, 0)) {

                  db.collection('user').add({
                    data: {
                      openid: _res.result.openid,
                      appid: _res.result.appid,
                      time: new Date()
                    }
                  }).then(res=>{
                    console.log('用户第一次进入')
                  })
                }
              }
            })
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })
    }
   
  },
  globalData: {
    
  }
})