Component({
  options: {
    addGlobalClass: false,
  },
  data: {
    engl: true,
    englishword: []
  },
	created: function(options) {
		const db = wx.cloud.database()
		db.collection('englishday').orderBy('month','desc').get().then(res =>{
			this.setData({
				englishword: res.data
			})
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