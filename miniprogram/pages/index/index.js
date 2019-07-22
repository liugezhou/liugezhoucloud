const db = wx.cloud.database()
const user = db.collection('user')
Page({
  data: {
    PageCur: 'daily'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '六个周--Just Do It!',
      imageUrl: '/images/time.png',
      path: '/pages/index/index'
    }
  },
})