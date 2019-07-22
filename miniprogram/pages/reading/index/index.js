const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
      title: '每周分享第五期',
      img: 'http://img.liugezhou.online/20190722lake.jpg',
      url: 'https://mp.weixin.qq.com/s/O7hg0-kQdNdBMXM3Ki-rAw'
    },
    {
      title: '每周分享第四期',
      img: 'http://img.liugezhou.online/20190722hu.jpg',
      url: 'https://mp.weixin.qq.com/s/bGICPk0fpr0EXhdeI3JRXA'
    },
    {
      title: '每周分享第三期',
      img: 'http://img.liugezhou.online/20190722moutain.jpg',
      url: 'https://mp.weixin.qq.com/s/toOGs-ZTPXgMU9QiungGSQ'
    },
    {
      title: '每周分享第二期',
      img: 'http://img.liugezhou.online/20190722water.jpg',
      url: 'https://mp.weixin.qq.com/s/reL_seHSHROehTXV2aYA-g'
    },
      {
        title: '每周分享第一期',
        img: 'http://img.liugezhou.online/20190722night.jpg',
        url: 'https://mp.weixin.qq.com/s/a-hZTLAKMR9E-m6utzhG0A'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/reading/article/index?url=' + e.currentTarget.dataset.url
      })
    },
  }
})