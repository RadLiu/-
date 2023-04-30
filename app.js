// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    

    console.log('云开发开始初始化了')
    wx.cloud.init({
      env: 'cloud1-1g4c6hjqb56260fb'//云开发环境ID
    })
  },
  globalData: {
    userInfo: null
  },
  onShareAppMessage: function () {
    
  }

 
})
