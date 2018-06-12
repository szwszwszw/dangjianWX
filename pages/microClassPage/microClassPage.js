
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //滚动图片的地址
    imgUrls: [
      '../../images/swiper/ceshi1.jpg',
      '../../images/swiper/ceshi2.jpg',
      '../../images/swiper/ceshi3.jpg'
    ],
    //swiper属性值
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    jianjieList: [{ "title": "2018微课规划", "date": "2018-01-02", "author": "张三", "content": "欢迎参加微课学习", "id": 3, "imagePath": "../../images/swiper/swiper1.jpg" },{ "title": "本期微课调整", "date": "2018-02-12", "author": "张三", "content": "欢迎参加微课学习", "id": 2, "imagePath": "../../images/swiper/swiper1.jpg" },{ "title": "关于休假一天通知", "date": "2018-02-=21", "author": "张三", "content": "欢迎参加微课学习", "id": 1, "imagePath": "../../images/swiper/swiper1.jpg" }],
    publicList: [{ "title": "学习十九大精神（共三集）", "date": "2018-01-02", "author": "张三", "content": "欢迎参加微课学习", "id": 3, "imagePath": "../../images/swiper/swiper1.jpg" }, { "title": "中国一分钟（共20期）", "date": "2018-02-12", "author": "张三", "content": "欢迎参加微课学习", "id": 2, "imagePath": "../../images/swiper/swiper1.jpg" }, { "title": "家国天下（共十集）", "date": "2018-02-=21", "author": "张三", "content": "欢迎参加微课学习", "id": 1, "imagePath": "../../images/swiper/swiper1.jpg" }],
    privateList: [{ "title": "手绘党章（第一期）", "date": "2018-01-02", "author": "张三", "content": "欢迎参加微课学习", "id": 3, "imagePath": "../../images/swiper/swiper1.jpg" }, { "title": "深入解读十九大（第五期）", "date": "2018-02-12", "author": "张三", "content": "欢迎参加微课学习", "id": 2, "imagePath": "../../images/swiper/swiper1.jpg" }, { "title": "不忘初心跟党走（第三期）", "date": "2018-02-=21", "author": "张三", "content": "欢迎参加微课学习", "id": 1, "imagePath": "../../images/swiper/swiper1.jpg" }],
  
  },
  /**
   * 查看更多简介事件函数
   */
  morejianjie: function () {
    var that = this;
    //将简介数组数据缓存到本地
    wx.setStorageSync('moreList', that.data.jianjieList);
    wx.navigateTo({
      url: '../morePage/morePage',
    })
  },
  jianjieDetail: function (e) {
    var that = this;
    //将简介数组数据缓存到本地
    wx.setStorageSync('detailList', that.data.jianjieList);
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