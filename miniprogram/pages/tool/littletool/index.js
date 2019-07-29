Page({
  data: {
    toollist:[{
      url:'/images/miaobiao.png',
      text:"生死钟",
      name:'miaobiao'
    },
    // {
    //   url: '/images/dalishi.png',
    //   text: "探索中",
    //   name: 'other'
    // },
    //   {
    //   url: '/images/lubiao.png',
    //     text: "探索中",
    //     name: 'other'
    // }
    ]
  },

  
  onLoad: function (options) {

  },
  tansuo:function(e){
    const name = e.currentTarget.dataset.index
    if(Object.is(name,'miaobiao')){
      wx.navigateTo({
        url: '/pages/tool/littletool/miaobiao/index',
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '敬请期待！',
        duration: 2000
      })
    }
    
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