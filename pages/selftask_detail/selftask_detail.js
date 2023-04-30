let id = ''
let zhuangtai = ''

//获取时间
var util = require('../../utils/util.js');
Page({


  data: {
    detail: [],
    zhuangtai: '',

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

  //请求数据函数
  GetList() {


    wx.cloud.database().collection('task')
      .doc(id)
      .get()
      .then(res => {
        console.log('查询成功', res)
        this.setData({
          detail: res.data,
          zhuangtai: res.data.ZhuangTai
        })

      })
      .catch(res => {
        console.log('查询失败', res)

      })
  },



  //接单弹窗


  


})