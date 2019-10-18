//钟表画图借鉴：https://blog.csdn.net/weixin_36185028/article/details/53856528
const now = new Date()
const app = getApp()
Page({
  data: {
    width: 0,
    height: 0,
    startDate:"1900-01-01",
    endDate:"2100-12-31",
    showdatapicker:'请选择你的出手日期',
    showchoosepicker:true,
    yearoldrinfo:{
      year:0,
      month:0,
      weeks:0,
      days:0,
      hours:0,
      minutes:0
    }
  },
  
  onLoad: function () {
		console.log(getCurrentPages())
    //将全局变量Index保存在that中，里面函数调用
    var that = this
    //获取系统信息
    wx.getSystemInfo({
      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高
      success: function (res) {
        that.width = res.windowWidth
        that.height = res.windowHeight
      }
    })
    var yearoldrinfo =wx.getStorageSync("birthday")
    if (yearoldrinfo){
      that.setData({
        yearoldrinfo: {
          year: yearoldrinfo.year,
          month: yearoldrinfo.month,
          weeks: yearoldrinfo.weeks,
          days: yearoldrinfo.days,
          hours: yearoldrinfo.hours,
          minutes: yearoldrinfo.minutes
        },
        showdatapicker: '重新选择',
        showchoosepicker: !this.data.showchoosepicker
      })
    }
  },
  //onReady生命周期函数，监听页面初次渲染完成
  onReady: function () {
    //调用canvasClock函数
    this.canvasClock()
    //对canvasClock函数循环调用
    this.interval = setInterval(this.canvasClock, 1000)
  },
  canvasClock: function () {
    var context = wx.createContext()//创建并返回绘图上下文（获取画笔）
    //设置宽高
    var width = this.width/1.5
    var height = this.height/1.5
    //设置文字距离时钟中心点距离
    var R = width / 3.3 ;
    //重置画布函数
    function reSet() {
      context.height = context.height;//每次清除画布，然后变化后的时间补上
      //设置坐标轴原点
      context.translate(width/1.3, height/3.8);
      context.save();//保存中点坐标1
    }
    //绘制中心圆和外面大圆
    function circle() {
      //外面大圆
      context.setLineWidth(2);
      context.beginPath();
      context.arc(0, 0, width / 2 - 30, 0, 2 * Math.PI, true);
      context.closePath();
      context.stroke();
      //中心圆
      context.beginPath();
      context.arc(0, 0, 8, 0, 2 * Math.PI, true);
      context.closePath();
      context.stroke();
    }
    //绘制字体
    function num() {
      // var R = width/2-60;//设置文字距离时钟中心点距离
      context.setFontSize(20)//设置字体样式
      context.textBaseline = "middle";//字体上下居中，绘制时间
      for (var i = 1; i < 13; i++) {
        //利用三角函数计算字体坐标表达式
        var x = R * Math.cos(i * Math.PI / 6 - Math.PI / 2);
        var y = R * Math.sin(i * Math.PI / 6 - Math.PI / 2);
        if (i == 11 || i == 12) {//调整数字11和12的位置
          context.fillText(i, x - 12, y + 9);
        } else {
          context.fillText(i, x - 6, y + 9);
        }
      }
    }
    //绘制小格
    function smallGrid() {
      context.setLineWidth(1);
      context.rotate(-Math.PI / 2);
      for (var i = 0; i < 60; i++) {
        context.beginPath();
        context.rotate(Math.PI / 30);
        context.moveTo(width / 2 - 30, 0);
        context.lineTo(width / 2 - 40, 0);
        context.stroke();
      }
    }
    //绘制大格
    function bigGrid() {
      context.setLineWidth(5);
      for (var i = 0; i < 12; i++) {
        context.beginPath();
        context.rotate(Math.PI / 6);
        context.moveTo(width / 2 - 30, 0);
        context.lineTo(width / 2 - 45, 0);
        context.stroke();
      }
    }
    //指针运动函数
    function move() {
      var t = new Date();//获取当前时间
      var h = t.getHours();//获取小时
      h = h > 12 ? (h - 12) : h;//将24小时制转化为12小时制
      var m = t.getMinutes();//获取分针
      var s = t.getSeconds();//获取秒针
      context.save();//再次保存2
      context.setLineWidth(7);
      //旋转角度=30度*（h+m/60+s/3600）
      //分针旋转角度=6度*（m+s/60）
      //秒针旋转角度=6度*s
      context.beginPath();
      //绘制时针
      context.rotate((Math.PI / 6) * (h + m / 60 + s / 3600));
      context.moveTo(-20, 0);
      context.lineTo(width / 4.5 - 20, 0);
      context.stroke();
      context.restore();//恢复到2,（最初未旋转状态）避免旋转叠加
      context.save();//3
      //画分针
      context.setLineWidth(5);
      context.beginPath();
      context.rotate((Math.PI / 30) * (m + s / 60));
      context.moveTo(-20, 0);
      context.lineTo(width / 3.5 - 20, 0);
      context.stroke();
      context.restore();//恢复到3，（最初未旋转状态）避免旋转叠加
      context.save();
      //绘制秒针
      context.setLineWidth(2);
      context.beginPath();
      context.rotate((Math.PI / 30) * s);
      context.moveTo(-20, 0);
      context.lineTo(width / 3 - 20, 0);
      context.stroke();
    }
    //调用
    function drawClock() {
      reSet();
      circle();
      num();
      smallGrid();
      bigGrid();
      move();
    }
    drawClock()//调用运动函数
    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'myCanvas',
      actions: context.getActions()
    })
  },
  //选择完出生日期后
  bindDateChange: function(e){
    var d1 = new Date(e.detail.value);
    var d2 = new Date();
		//将出生日期更新至数据库中
		const db = wx.cloud.database()
		db.collection('userbaseinfo').where({
			_openid: app.globalData.openid
		}).get().then( res=> {
			console.log(res.data)
			db.collection('userbaseinfo').doc(res.data[0]._id).update({
				data:{
					birth:d1
				}
			})
		})
    var birthminus = parseInt(parseInt(d2 - d1) / 1000 / 60)
    var birthhour = parseInt(parseInt(d2 - d1) / 1000 / 3600)
    var birthday = parseInt(parseInt(d2 - d1) / 1000 / 3600 / 24)
    var birthweek = parseInt(parseInt(d2 - d1) / 1000 / 3600 / 24 / 7)
    var birthmonth = parseInt(parseInt(d2 - d1) / 1000 / 3600 / 24 / 30)
    var birthyear = parseInt(parseInt(d2 - d1) / 1000 / 3600 / 24 / 365)
    this.setData({
      yearoldrinfo:{
        year: birthyear,
        month: birthmonth,
        weeks: birthweek,
        days: birthday,
        hours: birthhour,
        minutes: birthminus
      },
      showdatapicker:'重新选择',
      showchoosepicker: !this.data.showchoosepicker
    })
    wx.setStorageSync("birthday", this.data.yearoldrinfo)
  },
  resetchoose: function(){
    this.setData({
      showchoosepicker: !this.data.showchoosepicker
    })
    wx.removeStorage({
      key: 'birthday'
    })
    wx.removeStorage({
      key: 'deadday'
    })
  },
  deadButtonurl:function(e){
    const birthage = parseInt(e.currentTarget.dataset.birthage)
    wx.navigateTo({
      url: '/pages/tool/littletool/miaobiao/night/index?birthage=' + birthage,
    })
  },
  //页面卸载，清除画布绘制计时器
  onUnload: function () {
    clearInterval(this.interval)
  },
  onHide: function () {
    clearInterval(this.interval)
  }
})