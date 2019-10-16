Component({
  options: {
    addGlobalClass: false,
  },
  data: {
    engl: true,
    englishword: []
  },
	created: function(options) {
		wx.cloud.callFunction({
			name: 'queryenglish',
			data: {},
			success: res => {
				this.setData({
					englishword:res.result.data.reverse()
				})
			}
		})
  },
  methods: {
    viewchia(e) {
      this.setData({
        engl: !(this.data.engl)
      })
    }
  }
})