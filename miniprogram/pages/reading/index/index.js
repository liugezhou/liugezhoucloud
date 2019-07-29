const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
      title: '六个周的个人博客',
      img: 'http://img.liugezhou.online/20190722lake.jpg',
      url: 'https://www.liugezhou.online'
    },
    {
      title: 'CSS',
      img: 'http://img.liugezhou.online/20190722hu.jpg',
      url: 'https://mp.weixin.qq.com/s/bGICPk0fpr0EXhdeI3JRXA'
    },
    {
      title: 'JavaScript',
      img: 'http://img.liugezhou.online/20190722moutain.jpg',
      url: 'https://mp.weixin.qq.com/s/toOGs-ZTPXgMU9QiungGSQ'
    },
    {
      title: 'Vue.js',
      img: 'http://img.liugezhou.online/20190722water.jpg',
      url: 'https://mp.weixin.qq.com/s/reL_seHSHROehTXV2aYA-g'
    },
      {
        title: 'Node.js',
        img: 'http://img.liugezhou.online/20190722night.jpg',
        url: 'https://mp.weixin.qq.com/s/a-hZTLAKMR9E-m6utzhG0A'
      }
    ]
  },
  methods: {
    toChild(e) {
      if (e.currentTarget.dataset.url =="https://www.liugezhou.online"){
          wx.showModal({
            title: '六个周的博客地址',
            content: 'https://www.liugezhou.online',
            showCancel:false
          })
      }else{
        wx.showToast({
          icon: 'none',
          title: '这个模块在思考中……',
          duration: 2000
        })
      }
      
    },
  }
})