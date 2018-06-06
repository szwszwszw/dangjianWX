// pages/main/main.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //正确与错误提示图标
    rightA: true,
    rightB: true,
    rightC: true,
    rightD: true,
    wrongA: true,
    wrongB: true,
    wrongC: true,
    wrongD: true,
    studyList: [
      {
        "question": "要全面深化改革，完善和发展中国特色社会主义制度，推进国家_______现代化。",
        "answer": "C",
        "A": "A.治理体系",
        "B": "B.治理能力",
        "C": "C.治理体系和治理能力",
        "D": "D.治理体制和治理能力",
      },
      {
        "question": "哪个选项不属于文具？",
        "answer": "B",
        "A": "A.铅笔",
        "B": "B.手机",
        "C": "C.钢笔",
        "D": "D.圆珠笔",
      },
      {
        "question": "哪个选项不属于水果？",
        "answer": "C",
        "A": "A.苹果",
        "B": "B.桃子",
        "C": "C.汽车",
        "D": "D.梨子",
      }
    ],
    index: 0,
    colorA: '',
    colorB: '',
    colorC: '',
    colorD: '',
    colorRight: '#20E418',
    colorWrong: '#FA1D26',
    colordefault: '#FFFFFF',
    //服务器请求地址
    studyUrl: '',
  },

  /**
   * 选择选项按钮事件函数
   */
  btnOption: function (e) {
    var that = this;
    var select = e.currentTarget.id;
    var rightAnswer = that.data.studyList[that.data.index].answer;
    if (select == rightAnswer) {
      if (select == 'A')
        this.setData({ colorA: that.data.colorRight, rightA: false });
      else if (select == 'B')
        this.setData({ colorB: that.data.colorRight, rightB: false });
      else if (select == 'C')
        this.setData({ colorC: that.data.colorRight, rightC: false });
      else if (select == 'D')
        this.setData({ colorD: that.data.colorRight, rightD: false });
      this.setData({ score: that.data.score + 1 })
    }
    else {
      if (select == 'A')
        this.setData({ colorA: that.data.colorWrong, wrongA: false });
      else if (select == 'B')
        this.setData({ colorB: that.data.colorWrong, wrongB: false });
      else if (select == 'C')
        this.setData({ colorC: that.data.colorWrong, wrongC: false });
      else if (select == 'D')
        this.setData({ colorD: that.data.colorWrong, wrongD: false });
      //答错之后显示正确的答案
      if (rightAnswer == 'A')
        this.setData({ colorA: that.data.colorRight, rightA: false });
      else if (rightAnswer == 'B')
        this.setData({ colorB: that.data.colorRight, rightB: false });
      else if (rightAnswer == 'C')
        this.setData({ colorC: that.data.colorRight, rightC: false });
      else if (rightAnswer == 'D')
        this.setData({ colorD: that.data.colorRight, rightD: false });
    }
  },

  /**
   * 上一题
   */
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        colorA: that.data.colordefault,
        colorB: that.data.colordefault,
        colorC: that.data.colordefault,
        colorD: that.data.colordefault,
        rightA: true,
        rightB: true,
        rightC: true,
        rightD: true,
        wrongA: true,
        wrongB: true,
        wrongC: true,
        wrongD: true,
      });
    }
  },

  /**
   * 跳转下一题
   */
  nextQuestion: function () {
    var that = this;
    if (that.data.index < that.data.studyList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        colorA: that.data.colordefault,
        colorB: that.data.colordefault,
        colorC: that.data.colordefault,
        colorD: that.data.colordefault,
        rightA: true,
        rightB: true,
        rightC: true,
        rightD: true,
        wrongA: true,
        wrongB: true,
        wrongC: true,
        wrongD: true,
      })
    }
    else {
      wx.switchTab({
        url: '../selfPage/selfPage'
      })
      wx.showModal({
        title: '本次学习结束！'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //设置服务器请求地址
    this.setData({
      studyUrl: app.globalData.urlPrefix + '',
    })
    that.requestService();
  },

  /**
   * 请求服务器
   */
  requestService: function () {
    var that = this;
    //向服务器请求学习的题目列表
    wx.request({
      url: that.data.studyUrl,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      //请求成功得到题目列表
      success: function (res) {
        if (!res.data.OK) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        else {
          that.setData({
            studyList: res.data.studyList
          })
          wx.showToast({
            title: res.data.msg,
          })
        }
      },
      fail: function (res) {
        console.log('请求服务器失败！')
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