// pages/morePage/morePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //查看更多数组
    moreList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取缓存的新闻或公告数组的数据
    var moreList = wx.getStorageSync('moreList');
    this.setData({
      moreList: moreList
    })
    //console.log(that.data.moreList);
  },
  /**
   * 点击对应列表对应新闻/公告
   */
  bindDetail: function (e) {
    var that = this;
    //将新闻数组数据缓存到本地
    wx.setStorageSync('detailList', that.data.moreList);
    //console.log(e.currentTarget)
    //将页面绑定的数据detailId赋值后传入新的页面
    var detailId = e.currentTarget.dataset.detailId
    wx.navigateTo({
      url: '../detailPage/detailPage?id=' + detailId
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