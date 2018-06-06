// pages/detailPage/detailPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailId: 0,
    //服务器请求地址
    detailUrl: '',
    //新闻、公告详情（默认数据用于测试页面布局）
    detailList: [
      {
        id: '01',
        title: '新闻1',
        content: '新闻1的内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        date: '2018.1.1',
        imagePath: '../../images/swiper/swiper1.jpg'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //console.log(options)
    //接收上一页面穿过来的详情页对应的id参数赋给detailId，用于服务器请求对应的详情信息
    this.setData({
      detailId: options.id,
      detailUrl: app.globalData.urlPrefix + ''
    });
    that.requestService()
  },
  /**
   * 请求服务器
   */
  requestService: function () {
    var that = this;
    //请求服务器，将详情页id传给服务器，响应对应的详情信息
    wx.request({
      url: that.data.detailUrl,
      method: 'POST',
      data: {
        id: that.data.detailId,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (!res.data.OK) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        else {
          that.setData({
            detailList: res.data.detailList
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