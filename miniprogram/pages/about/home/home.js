Component({
  options: {
    addGlobalClass: true,
  },
  data: {
  },
  methods: {
    
    showQrcode() {
      wx.previewImage({
        urls: ['http://img.liugezhou.online/liuegezhouZ.jpg','http://img.liugezhou.online/liuyilanZ.jpg'],
        current: 'http://img.liugezhou.online/liuegezhouZ.jpg' // 当前显示图片的http链接      
      })
    },
  }
})