// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goBackToMine(){
    wx.switchTab({
      url: '../mine/mine',
    })
  },
})