Page({


  data: {
    xingming: '',//姓名
    mima: ''//密码
  },


  onLoad: function (options) {

  },

  //获取账号
  // getZhangHao(e) {
  //   console.log('获取输入管理员账号', e.detail.value)
  //   this.setData({
  //     zhanghao: e.detail.value
  //   })
  // },

  //获取密码
  getMiMa(e) {
    console.log('获取输入管理员密码', e.detail.value)
    this.setData({
      mima: e.detail.value
    })
  },
  //输入姓名
  getName(e) {
    wx.setStorageSync('nameInfoStorge',e.detail.value)
    console.log('获取输入管理员姓名', e.detail.value)

  },

  //登录
  login() {
    let AdminZhangHao = this.data.zhanghao
    let AdminMiMa = this.data.mima
    console.log('密码', AdminMiMa)
    //8位密码校验
    if (AdminMiMa.length < 8) {
      wx.showToast({
        icon: 'error',
        title: '密码至少8位',
      })
      return
    }
    //验证密码对不对
    wx.cloud.database().collection('admin').get({
      success(res) {
        console.log('获取数据成功', res)
        let user = res.data[0]

        if (AdminMiMa == user.AdminMiMa) {
          console.log('登陆成功', res)
          //将管理员登录结果保存
          let admin = 1
          wx.setStorageSync('adminInfoStorge', admin)
          //弹窗登陆成功
          wx.showToast({
            icon: 'success',
            title: '登陆成功',

            success: res => {
              setTimeout(function () {
                wx.switchTab({
                  url: '../mine/mine',
                })
              }, 500)
            }
          })


        } else {
          console.log('登陆失败', res)
          wx.showToast({
            icon: 'error',
            title: '登陆失败',
          })
          duration: 1000
        }
      },
      fail(res) {
        console.log('获取数据失败', res)
      }
    })


  },

  onShareAppMessage: function () {

  }
})