let id = ''
let zhuangtai = ''
let jiedanren = ''
let searchinput = ''
let searchinput_1 = ''
let finishren = ''

//获取时间
var util = require('../../utils/util.js');
Page({


  data: {
    detail: [],
    zhuangtai: '',
    xiugai: '',
    searchinput: '',
    searchinput_1: '',

    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
  },


  onLoad(options) {
    id = options.id

    //查询数据
    this.GetList()
  },

  //接单人数据
  getJieDanName(e) {

    jiedanren = e.detail.value
    console.log("接单人姓名为：", e.detail.value)

  },

  //维修人员数据
  getFinishName(e) {
    finishren = e.detail.value
    console.log("维修人员姓名为：", e.detail.value)
  },

  //请求数据函数
  GetList() {


    wx.cloud.database().collection('task')
      .doc(id)
      .get()
      .then(res => {
        console.log('查询成功', res)
        this.setData({
          detail: res.data,
          zhuangtai: res.data.ZhuangTai,

        })

      })
      .catch(res => {
        console.log('查询失败', res)

      })
  },

  //修改信息==1
  Modify() {
    wx.cloud.database().collection('task')
      .doc(id)
      .update({
        data: {
          JieDanRen: jiedanren,
          FinishRen: finishren,
        }

      })
      .then(res => {
        console.log('上传成功', res)
        this.GetList()

        wx.showToast({
          icon: 'success',
          title: '修改成功',
        })
      })
      .catch(res => {
        console.log('上传失败', res)
      })
  },


  //接单按钮
  Catch(e) {

    var jdtime = util.formatTime(new Date())
    var jiedanren = wx.getStorageSync('nameInfoStorge')
    wx.cloud.database().collection('task')
      .doc(id)
      .update({
        data: {
          ZhuangTai: 1,
          JieDanTime: jdtime,
          JieDanRen: jiedanren,
        }
      })
      .then(res => {
        console.log('更新状态为处理中', res)
        this.GetList()
        wx.showToast({
          icon: 'success',
          title: '接单成功',
        })
      })


      .catch(res => {
        console.log('更新状态失败', res)
        wx.showToast({
          icon: 'error',
          title: '接单失败，请重试',
        })
      })


  },

  //完成报修弹窗
  completeFixing: function () {
    this.setData({
      dialogShow: true
    })
  },

  Fixing(f) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
    //获取当前时间
    var finishtime = util.formatTime(new Date())
    var finishren = wx.getStorageSync('nameInfoStorge')
    if (f.detail.index == 1) {
      wx.cloud.database().collection('task')
        .doc(id)
        .update({
          data: {
            ZhuangTai: 2,
            FinishTime: finishtime,
            FinishRen: finishren,
          }
        })
        .then(res => {
          console.log('更新状态为已完成', res)
          this.GetList()

          wx.showToast({
            icon: 'success',
            title: '提交成功',
          })
        })

        .catch(res => {
          console.log('更新状态失败', res)
          wx.showToast({
            icon: 'error',
            title: '提交失败，请重试',
          })
        })

    } else {
      console.log('用户点击取消完成提交按钮', '')
    }
  },


  onShareAppMessage: function () {

  },


})