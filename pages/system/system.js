// ['浩苑', '润苑','鸿苑','澈苑','溪苑','涓苑','清苑','瀚苑','淳苑',]
//['桔园', '榴园', '桂园', '杏园', '桃园','李园','梅园']

var util = require('../../utils/util.js');

let name1 = ''
let phonenumber1 = ''
let WXnumber1 = ''
let Contact1 = ''
let QQnumber1 = ''
let sushe1 = ''
let xueyuan1 = ''
let nianji1 = ''
let xinghao1 = 'null'
let xiangqing1 = ''
let zhuangtai1 = 0
let jiedanren1 = ''
let jdtime = ''
let finishtime = ''
let finishren = ''
//定义宏观全局变量

Page({
  data: {
    arraySS: ['请选择园区', '——以下为北区——', '橙园', '桔园', '榴园', '桂园', '杏园', '桃园', '李园', '梅园', '兰园', '竹园', '——以下为南区——', '浩苑', '润苑', '鸿苑', '澈苑', '溪苑', '涓苑', '清苑', '瀚苑', '淳苑', ],

    objectArray: [{
        id: 0,
        name: '请选择宿舍园区'
      },
      {
        id: 1,
        name: '——以下为北区——'
      },
      {
        id: 2,
        name: '橙园'
      },
      {
        id: 3,
        name: '桔园'
      },
      {
        id: 4,
        name: '榴园'
      },
      {
        id: 5,
        name: '桂园'
      },
      {
        id: 6,
        name: '杏园'
      },
      {
        id: 7,
        name: '桃园'
      },
      {
        id: 8,
        name: '李园'
      },
      {
        id: 9,
        name: '梅园'
      },
      {
        id: 10,
        name: '兰园'
      },
      {
        id: 11,
        name: '竹园'
      },
      {
        id: 12,
        name: '——以下为南区——'
      },
      {
        id: 13,
        name: '浩苑'
      },
      {
        id: 14,
        name: '润苑'
      },
      {
        id: 15,
        name: '鸿苑'
      },
      {
        id: 16,
        name: '澈苑'
      },
      {
        id: 17,
        name: '溪苑'
      },
      {
        id: 18,
        name: '涓苑'
      },
      {
        id: 19,
        name: '清苑'
      },
      {
        id: 20,
        name: '瀚苑'
      },
      {
        id: 21,
        name: '淳苑'
      },

    ],
    indexSS: 0,

    arrayXY: ['请选择学院', '食品学院', '生物工程学院', '纺织科学与工程学院', '化学与材料工程学院', '物联网工程学院', '环境与土木工程学院', '商学院', '理学院', '机械工程学院、 君远学院', '设计学院', '生命科学与健康工程学院', '无锡医学院', '马克思主义学院', '人文学院、教育学院', '外国语学院', '法学院', '人工智能与计算机学院', '体育部'],
    objectArray: [{
        id: 0,
        name: '请选择学院'
      },
      {
        id: 1,
        name: '食品学院'
      },
      {
        id: 2,
        name: '生物工程学院'
      },
      {
        id: 3,
        name: '纺织科学与工程学院'
      },
      {
        id: 4,
        name: '化学与材料工程学院'
      },
      {
        id: 5,
        name: '物联网工程学院'
      },
      {
        id: 6,
        name: '环境与土木工程学院'
      },
      {
        id: 7,
        name: '商学院'
      },
      {
        id: 8,
        name: '理学院'
      },
      {
        id: 9,
        name: '机械工程学院、君远学院'
      },
      {
        id: 10,
        name: '设计学院'
      },
      {
        id: 11,
        name: '生命科学与健康工程学院'
      },
      {
        id: 12,
        name: '无锡医学院'
      },
      {
        id: 13,
        name: '马克思主义学院'
      },
      {
        id: 14,
        name: '人文学院、教育学院'
      },
      {
        id: 15,
        name: '外国语学院'
      },
      {
        id: 16,
        name: '法学院'
      },
      {
        id: 17,
        name: '人工智能与计算机学院'
      },
      {
        id: 18,
        name: '体育部'
      },

    ],
    indexXY: 0,

    arrayNJ: ['请选择年级', '大一', '大二', '大三', '大四', '研究生', '博士', '其他'],
    objectArray: [{
        id: 0,
        name: '请选择年级'
      },
      {
        id: 1,
        name: '大一'
      },
      {
        id: 2,
        name: '大二'
      },
      {
        id: 3,
        name: '大三'
      },
      {
        id: 4,
        name: '大四'
      },
      {
        id: 5,
        name: '研究生'
      },
      {
        id: 6,
        name: '博士'
      },
      {
        id: 7,
        name: '其他'
      },
    ],
    indexNJ: 0,



    files: [{
      url: '',
    }, {
      loading: false
    }, {
      error: false
    }],

    images: [], //临时图片地址

    btn_disabled: true,

    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],


  },


  getName(e) {

    name1 = e.detail.value

    console.log("用户姓名为：", e.detail.value)

  },

  // getPhoneNumber(e) {

  //   phonenumber1 = e.detail.value

  //   console.log("用户手机号码为：", e.detail.value)

  // },

  getContact(e) {
    Contact1 = e.detail.value

    console.log("用户微联系方式为：", e.detail.value)
  },

  // getQQNumber(e) {

  //   QQnumber1 = e.detail.value

  //   console.log("用户QQ号码为：", e.detail.value)

  // },

  bindPickerChangeSS: function (e) {

    this.setData({
        indexSS: e.detail.value
      }),
      sushe1 = this.data.arraySS[e.detail.value]
    console.log('宿舍园区为', this.data.arraySS[e.detail.value])

  },

  bindPickerChangeXY: function (e) {

    this.setData({
        indexXY: e.detail.value
      }),
      xueyuan1 = this.data.arrayXY[e.detail.value]
    console.log('所属学院为', this.data.arrayXY[e.detail.value])
  },

  bindPickerChangeNJ: function (e) {

    this.setData({
        indexNJ: e.detail.value
      }),
      nianji1 = this.data.arrayNJ[e.detail.value]
    console.log('所在年级为', this.data.arrayNJ[e.detail.value])
  },

  getDeviceModel(e) {

    xinghao1 = e.detail.value
    console.log("用户电脑型号为：", e.detail.value)

  },

  getDetail(e) {
    xiangqing1 = e.detail.value
    console.log("用户详情描述为：", e.detail.value)

  },

  radioOK(e) {


    this.setData({
      btn_disabled: false
    })

  },



  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        this.uploadImg(res.tempFilePaths)
        // console.log(res);
        // var tempFilePaths = res.tempFilePaths
        // that.setData({
        //   images: that.data.images.concat(tempFilePaths)
        // })

      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.images // 需要预览的图片http链接列表
    })
  },

  uploadImg(temFile) {

    var that = this;
    wx.showModal({
      title: '提示',

      content: '确认上传这些图片吗？',

      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定上传图片')
          wx.cloud.uploadFile({
            cloudPath: '.jpg',
            filePath: temFile
          })

          //原有服务器模板（已弃用）
          // var tempFilePaths = wx.getStorageSync('tempFilePaths')

          // var sources = [];

          // //循环将添加的图片上传到服务器

          // for (var i = 0; i < tempFilePaths.length; i++) {
          //   wx.showToast({
          //     title: '正在上传中',

          //     icon: 'loading',

          //     duration: 15000

          //   })

          //   wx.uploadFile({
          //     url: 'http://nas.fengrui.cc:5543/img',

          //     filePath: tempFilePaths[i],

          //     name: 'file',

          //     success: function (res) {
          //       wx.hideToast();

          //       console.log(res.data)

          //       if (res.data !== "上传错误") {
          //         sources.push(res.data)

          //         //前台显示
          //         that.setData({
          //           sources: sources
          //         })
          //         console.log(sources)
          //       }
          //     }
          //   })
          // }
        } else if (res.cancel) {
          console.log('用户点击取消上传图片')

          that.setData({
            sourcess: "",
          })
        }
      }
    })

  },


  completeBaoXiu: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
    if (e.detail.index == 1) {
      console.log('用户点击提交报修按钮', '')
      //获取当前时间
      var time = util.formatTime(new Date())

      //获取用户openid


      //上传数据到微信云数据库

      wx.cloud.database().collection('task')
        .add({
          data: {
            Name: name1,
            PhoneNumber: phonenumber1,
            WXnumber: WXnumber1,
            QQnumber: QQnumber1,
            Contact: Contact1,
            SuShe: sushe1,
            XueYuan: xueyuan1,
            NianJi: nianji1,
            XingHao: xinghao1,
            XiangQing: xiangqing1,
            ZhuangTai: zhuangtai1,
            JieDanRen: jiedanren1,
            Time: time,
            JieDanTime: jdtime,
            FinishTime: finishtime,
            FinishRen: finishren,

          }

        })
        .then(res => {
          console.log('上传成功', res)
        })
        .catch(res => {
          console.log('上传失败', res)
        })

      wx.redirectTo({
        url: '../result_OK/result_OK',
      })
    } else {
      console.log('用户点击取消提交报修按钮点', '')
    }
  },










})