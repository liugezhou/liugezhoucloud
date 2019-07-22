Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    engl:true,
    englishword:[{
      english:'If you really love someone,\n the whole life will not be enough.\nYou need time to know,\nto forgive and to love.\nAll this needs a very big mind.',
      chiness:'爱的次数不需多，\n只需真爱。\n真爱需要时间去经营，\n需要用心去了解，\n需要胸襟去包容。',
      time:'July 22,2019'
    },
      {
        english: 'Strength alone knows conflict,\n weakness is below even defeat,\n and is born vanquished.',
        chiness: '只有强者才懂得争斗；\n弱者甚至失败都不够资格，\n而是生来就是被征服的。',
        time: 'July 21,2019'
      },
      {
        english: 'Fear not that the life \nshall come to an end, \nbut rather fear \nthat it shall never have a beginning.',
        chiness: '不要害怕你的生活将要结束，\n应该担心你的生活永远还未真正开始。',
        time: 'July 20,2019'
      }
    ]
   
  },
  methods: {
    viewchia (e) {
      console.log(e)
        this.setData({
          engl: !(this.data.engl)
        })
      }
  }
})
