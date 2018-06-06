// pages/recordPage/recordPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: [],
    uid: '',
    //服务器请求地址
    recordUrl: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      uid: app.globalData.uid,
      recordUrl: app.globalData.urlPrefix + '/cpccs/wxerrorlist.action'
    });
    that.requestService()
  },

  /**
   * 请求服务器获取错题记录
   */
  requestService: function () {
    var that = this;
    wx.request({
      url: that.data.recordUrl,
      method: 'POST',
      data: {
        uid: that.data.uid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        console.log(res)
        if (!res.data.OK) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        else {
          that.setData({
            record: res.data.record
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