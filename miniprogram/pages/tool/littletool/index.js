// miniprogram/pages/tool/littletool/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toollist:[{
      url:'/images/miaobiao.png',
      text:"生死钟"
    },
    {
      url: '/images/dalishi.png',
      text: "探索中"
    },
      {
      url: '/images/lubiao.png',
        text: "探索中"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tansuo:function(){
    wx.showToast({
      icon:'none',
      title: '敬请期待！',
      duration:2000
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})