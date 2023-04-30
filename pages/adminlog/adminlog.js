Page({


  data: {
    zhanghao: '',
    mima: ''
  },


  onLoad: function (options) {

  },

  //获取账号
  getZhangHao(e) {
    console.log('获取输入管理员账号', e.detail.value)
    this.setData({
      zhanghao: e.detail.value
    })
  },

  //获取密码
  getMiMa(e) {
    console.log('获取输入管理员密码', e.detail.value)
    this.setData({
      mima: e.detail.value
    })
  },

  //登录
  login() {
    let AdminZhangHao = this.data.zhanghao
    let AdminMiMa = this.data.mima
    console.log('管理员账号', AdminZhangHao, '密码', AdminMiMa)

    if (AdminMiMa.length < 8) {
      wx.showToast({
        icon: 'error',
        title: '密码至少8位',
      })
      return
    } else {
      wx.cloud.database().collection('admin').where({
        AdminZhangHao: AdminZhangHao
      }).get({
        success(res) {

        },
        fail(res) {

        }
      })
    }

  },

  onShareAppMessage: function () {

  }
})