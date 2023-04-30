Page({


  data: {
    userInfo: '', //用户基本信息
    openid: '', //用户openID
    adminInfo: '',
    username:'',
  },


  onLoad() {
    //获取userInfo缓存
    let user = wx.getStorageSync('userInfoStorge')
    let admin = wx.getStorageSync('adminInfoStorge')
    let name = wx.getStorageSync('nameInfoStorge')
    console.log('登录获取缓存', user)
    this.setData({
      userInfo: user,
      adminInfo: admin,
      username: name,

    })



  },
  //普通用户授权登录
  login_user() {
    wx.getUserProfile({
      desc: '用于完善报修资料与进度', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        let user = res.userInfo
        this.setData({
          userInfo: user,
        })
        //缓存用户信息为userInfo
        wx.setStorageSync('userInfoStorge', user)
        console.log('授权成功', res.userInfo)
      }
    })

    //云函数获取OpenID
    wx.cloud.callFunction({
      name: 'getData',
      success(res) {
        console.log('云函数请求成功', res)
        wx.setStorageSync('useropenid', res.result.openid)

      },
      fail(err) {
        console.log('云函数请求失败', err)
      }
    })
  },


  //退出登录
  logout() {
    this.setData({
      userInfo: '',
    })
    wx.setStorageSync('userInfoStorge', null)
    wx.setStorageSync('adminInfoStorge', null)
    wx.setStorageSync('useropenid', null)
    wx.setStorageSync('nameInfoStroge', null)
  },
  //跳转后台界面
  HouTai() {
    wx.navigateTo({
      url: '../houtai/houtai',
    })
  },

  JieDan() {
    wx.navigateTo({
      url: '../task_3/task_3',
    })
  },

  onShareAppMessage: function () {

  },

  onShow() {
    //获取userInfo缓存
    let user = wx.getStorageSync('userInfoStorge')
    let admin = wx.getStorageSync('adminInfoStorge')
    let name = wx.getStorageSync('nameInfoStorge')
    console.log('登录获取缓存', user)
    this.setData({
      userInfo: user,
      adminInfo: admin,
      username: name,
    })
  },

})