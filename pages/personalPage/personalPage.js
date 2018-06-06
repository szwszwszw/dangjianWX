// pages/personalPage/personalPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,
    name: '',
    sex: '',
    college: '',
    tel: '',
    email: '',
    qq: '',
    birthday: '',
    hometown: '',
    //服务器地址
    personalUrl: '',

    array: ['男', '女'],
    index: 0,

    date: '2000-01-01',

    region: ['湖北省', '武汉市', '武昌区'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //设置服务器地址、个人资料
    this.setData({
      personalUrl: app.globalData.urlPrefix + '/cpccs/wxchangeuserinfo.action',
      name: app.globalData.name,
      sex: app.globalData.sex,
      college: app.globalData.college,
      tel: app.globalData.tel,
      email: app.globalData.email,
      qq: app.globalData.qq,
      birthday: app.globalData.birthday,
      hometown: app.globalData.hometown,
    })

  },

  //性别选择器
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择器
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  //地区选择器
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 编辑资料按钮
   */
  bindEdit: function () {
    this.setData({
      isEdit: true
    })
  },
  /**
   * 提交修改信息
   */
  formSubmit: function (e) {
    var that = this;
    //取出表单数据
    var uid = app.globalData.uid;
    var name = app.globalData.name;
    var college = app.globalData.college;
    var tel = e.detail.value.tel;
    var email = e.detail.value.email;
    var qq = e.detail.value.qq;
    var sex = that.data.array[that.data.index];
    var birthday = that.data.date;
    var hometown = that.data.region;

    if (tel == '' || tel == null) {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none'
      })
    }
    else if (email == '' || email == null) {
      wx.showToast({
        title: '邮箱不能为空！',
        icon: 'none'
      })
    }
    else if (qq == '' || qq == null) {
      wx.showToast({
        title: 'QQ不能为空！',
        icon: 'none'
      })
    }
    else {
      wx.request({
        url: that.data.personalUrl,
        method: 'POST',
        data: {
          uid: uid,
          name: name,
          sex: sex,
          college: college,
          tel: tel,
          email: email,
          qq: qq,
          birthday: birthday,
          hometown: hometown,
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
            //给全局变量赋值
            app.globalData.uid = res.data.uid;
            app.globalData.name = res.data.name;
            app.globalData.sex = res.data.sex;
            app.globalData.college = res.data.college;
            app.globalData.tel = res.data.tel;
            app.globalData.email = res.data.email;
            app.globalData.qq = res.data.qq;
            app.globalData.birthday = res.data.birthday;
            app.globalData.hometown = res.data.hometown;
            wx.showToast({
              title: res.data.msg
            })
            wx.navigateBack({

            })
          }
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