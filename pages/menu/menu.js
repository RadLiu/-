Page({
  data: {
    inputShowed: false,
    inputVal: "",
    adminInfo: '',
  },

  onLoad() {
    //获取adminrInfo缓存
    let admin = wx.getStorageSync('adminInfoStorge')
    console.log('获取管理员登录缓存', admin)
    this.setData({
      adminInfo: admin,

    })
  },
  //管理员登录
  adminlog() {
    wx.navigateTo({
      url: '../houtai/houtai',
    })
  },

  //退出登录
  adminlogout() {
    this.setData({
      adminInfo: '',
    })
    wx.setStorageSync('adminInfoStorge', 0)
    wx.setStorageSync('nameInfoStorge', null)

    wx.showToast({
      icon: 'success',
      title: '退出登录成功',
    })
  },
  //打开页面就刷新adminInfostorge
  onShow() {
    let admin = wx.getStorageSync('adminInfoStorge')
    console.log('获取管理员登录缓存', admin)
    this.setData({
      adminInfo: admin,

    })
  },
  //打开更新日志
  developlog() {
    wx.navigateTo({
      url: '../developlog/developlog',
    })

  },

  onShareAppMessage: function () {

  }
});