// pages/selfPage/selfPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  /**
   * 点击头像栏bindSel事件函数
   */
  bindSelf: function () {
    wx.showActionSheet({
      itemList: ['修改密码', '切换账户'],
      itemColor: '#17FB12',
      //console.log(res.tapIndex)
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '../changePwdPage/changePwdPage',
          })
        }
        else if (res.tapIndex == 1) {
          wx.redirectTo({
            url: '../loginPage/loginPage',
          })
        }
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