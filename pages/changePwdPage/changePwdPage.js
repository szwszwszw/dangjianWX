// pages/changePwdPage/changePwdPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //服务器请求地址
    changPwdUrl: '',
    uid: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //设置服务器请求地址、uid
    this.setData({
      changPwdUrl: app.globalData.urlPrefix + '/cpccs/wxchangePwd.action',
      uid: app.globalData.uid,
    })
  },
  /**
   * 请求服务器提交修改密码表单信息
   */
  formSubmit: function (e) {
    var that = this;
    //取出表单信息
    var oldPwd = e.detail.value.oldPwd;
    var newPwd = e.detail.value.newPwd;
    var rePwd = e.detail.value.rePwd;
    if (oldPwd == '' || oldPwd == null) {
      wx.showToast({
        title: '原密码不能为空！',
        icon: 'none'
      })
    }
    else if (newPwd == '' || newPwd == null) {
      wx.showToast({
        title: '新密码不能为空！',
        icon: 'none'
      })
    }
    else if (rePwd == '' || rePwd == null) {
      wx.showToast({
        title: '确认新密码不能为空！',
        icon: 'none'
      })
    }
    else if (newPwd != rePwd) {
      wx.showToast({
        title: '两次输入新密码不一致！',
        icon: 'none'
      })
    }
    else {
      //提交表单信息
      wx.request({
        url: that.data.changPwdUrl,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        data: {
          uid: that.data.uid,
          oldPwd: oldPwd,
          newPwd: newPwd
        },
        success: function (res) {
          console.log(res.data)
          if (!res.data.OK) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          }
          else {
            wx.showToast({
              title: res.data.msg,
            })
            wx.navigateTo({
              url: '../loginPage/loginPage',
            })
          }
        },
        fail: function (res) {
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