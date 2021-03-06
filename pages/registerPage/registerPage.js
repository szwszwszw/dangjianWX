// pages/registerPage/registerPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //注册的服务器地址
    registerUrl: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置注册请求服务器地址
    this.setData({
      registerUrl: app.globalData.urlPrefix + ''
    })
  },
  /**
   * 提交表单注册信息
   */
  formSubmit: function (e) {
    var that = this;
    //console.log(e)
    //取出表单数据
    var uid = e.detail.value.uid;
    var pwd = e.detail.value.pwd;
    var repwd = e.detail.value.repwd;
    if (uid == '' || uid == null) {
      wx.showToast({
        title: '账号不能为空！',
        icon: 'none'
      })
    }
    else if (pwd == '' || pwd == null) {
      wx.showToast({
        title: '密码不能为空！',
        icon: 'none'
      })
    }
    else if (repwd == '' || repwd == null) {
      wx.showToast({
        title: '确认密码不能为空！',
        icon: 'none'
      })
    }
    else if (pwd != repwd) {
      wx.showToast({
        title: '两次输入密码不一致！',
        icon: 'none'
      })
    }
    //请求服务器将注册信息(uid,pwd,repwd)提交
    else {
      wx.showLoading({
        title: '注册中，请稍后...',
      })
      wx.request({
        url: that.data.registerUrl,
        method: 'POST',
        data: {
          uid: uid,
          pwd: pwd,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        //请求成功，服务器返回isOK判断是否已存在账号
        success: function (res) {
          wx.hideLoading();
          //console.log(res.data)
          if (!res.data.OK) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
          else {
            wx.showToast({
              title: res.data.msg
            })
            wx.redirectTo({
              url: '../loginPage/loginPage',
            })
          }
        },
        fail: function (res) {
          wx.hideLoading();
          console.log('请求服务器失败！')
        }
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