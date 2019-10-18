const app =getApp()
Page({
  data: {
    toollist:[{
      url:'/images/miaobiao.png',
      text:"生死钟",
      name:'miaobiao'
    },
    {
      url: '/images/dalishi.png',
      text: "探索中",
      name: 'other'
    },
      {
      url: '/images/lubiao.png',
        text: "探索中",
        name: 'other'
    }
    ]
  },
  onLoad(){
  },
  tansuo(e){
		wx.getSetting({
			success(res) {
				const result = res.authSetting['scope.userInfo']
				if (result){
					const toolname = e.currentTarget.dataset.index
					const db = wx.cloud.database()
					db.collection("userbaseinfo").where({
						_openid: app.globalData.openid
					}).get().then(res => {
						if (res.data.length > 0) {
							if (Object.is(toolname, 'miaobiao')) {
								wx.navigateTo({
									url: '/pages/tool/littletool/miaobiao/index',
								})
							} else {
								wx.showToast({
									icon: 'none',
									title: '敬请期待！',
									duration: 2000
								})
							}
						} else {
							wx.getUserInfo({
								success: function (res) {
									console.log("获取头像信息")
									var userInfo = res.userInfo
									var nickName = userInfo.nickName
									var avatarUrl = userInfo.avatarUrl
									var gender = userInfo.gender //性别 0：未知、1：男、2：女
									var province = userInfo.province
									var city = userInfo.city
									var country = userInfo.country
									var birth = new Date()
									//将信息传到数据库中去
									db.collection("userbaseinfo").add({
										data: {
											nickName: nickName,
											avatarUrl: avatarUrl,
											gender: gender,
											province: province,
											city: city,
											country: country,
											birth: birth
										}
									})
									const name = e.currentTarget.dataset.index
									if (Object.is(toolname, 'miaobiao')) {
										wx.navigateTo({
											url: '/pages/tool/littletool/miaobiao/index',
										})
									} else {
										wx.showToast({
											icon: 'none',
											title: '敬请期待！',
											duration: 2000
										})
									}
								}
							})
						}
					})
				}
			}
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