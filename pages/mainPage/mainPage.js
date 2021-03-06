// pages/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //滚动图片的地址
    imgUrls: [
      '../../images/swiper/swiper1.jpg',
      '../../images/swiper/swiper2.jpg',
      '../../images/swiper/swiper3.jpg'
    ],
    //swiper属性值
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    //主页请求服务器地址
    mainUrl: '',
    //新闻数组
    newsList: [],
    //公告数组
    informList: [],
  },
  /**
   * 查看更多新闻事件函数
   */
  moreNews: function () {
    var that = this;
    //将新闻数组数据缓存到本地
    wx.setStorageSync('moreList', that.data.newsList);
    wx.navigateTo({
      url: '../morePage/morePage',
    })
  },
  /**
   * 查看更多公告事件函数
   */
  moreInform: function () {
    var that = this;
    //将公告数组数据缓存到本地
    wx.setStorageSync('moreList', that.data.informList)
    wx.navigateTo({
      url: '../morePage/morePage',
    })
  },

  /**
   * 点击对应列表对应新闻详情
   */
  newsDetail: function (e) {
    var that = this;
    //将新闻数组数据缓存到本地
    wx.setStorageSync('detailList', that.data.newsList);
    //console.log(e.currentTarget)
    //将页面绑定的数据detailId传入新的页面
    var detailId = e.currentTarget.dataset.detailId
    wx.navigateTo({
      url: '../detailPage/detailPage?id=' + detailId
    })
  },

  /**
   * 点击对应列表对应公告详情
   */
  informDetail: function (e) {
    var that = this;
    //将公告数组数据缓存到本地
    wx.setStorageSync('detailList', that.data.informList);
    //console.log(e.currentTarget)
    //将页面绑定的数据detailId传入新的页面
    var detailId = e.currentTarget.dataset.detailId
    wx.navigateTo({
      url: '../detailPage/detailPage?id=' + detailId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //设置主页的服务器请求地址
    this.setData({
      mainUrl: app.globalData.urlPrefix + '/cpccs/wxmainpageload.action'
    });
    wx.showLoading({
      title: '正在加载，请稍后...',
    })
    that.requestService();
  },
  /**
   * 请求服务器
   */
  requestService: function () {
    var that = this;
    //向服务器请求新闻和公告列表
    wx.request({
      url: that.data.mainUrl,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res)
        if (!res.data.OK) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
        else {
          //console.log(res.data)
          that.setData({
            //请求的数据包括新闻、公告
            newsList: res.data.newsList,
            informList: res.data.informList,
          })
          wx.showToast({
            title: res.data.msg,
          })
        }
      },
      fail: function (res) {
        wx.hideLoading();
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