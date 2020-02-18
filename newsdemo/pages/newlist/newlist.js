//text.js
var util = require('../../utils/util.js')
var root = getApp()

Page({
  data: {
    imgUrls: [{
      "url": "http://pic.cnr.cn/pic/nativepic/20161018/W020161018329430142633.jpg"
    }, {
      "url": "http://hbimg.b0.upaiyun.com/a6993a00efc308741bafa8f5815366134d3ea9d9da70-vtwzDw_fw658"
    }, {
      "url": "http://img0.imgtn.bdimg.com/it/u=2760770836,2447307048&fm=26&gp=0.jpg"
    }, {
      "url": "http://www.xuexili.com/uploads/allimg/2002/3-2002091553224c.jpg"
    }],
    data: root.globalData.news.data,
    icontype: ["info_circle", "info"],
    modalHidden: true,
    modalContent: {},
  },

  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  onLoad: function () {
    var self = this, tmpObjData = root.globalData.news.data
    console.log("onLoad news")

    this.setData({
      data: {
        hotwords: tmpObjData.hotwords.concat(tmpObjData.topwords),
        hotnews: tmpObjData.hotnews1.concat(tmpObjData.hotnews2),
        topnews: tmpObjData.topnews,
        fakeUrl: "http://mp.weixin.qq.com/s?_biz="
      }
    })
  },
  modalTap: function (e) {
    var self = this
    console.log(e.currentTarget.dataset)

    this.setData({
      modalContent: self.data.data.hotnews[Number(e.currentTarget.dataset.index)],
      modalHidden: false
    })
  },
  modalHide: function (e) {
    this.setData({
      modalHidden: true
    })
  }
  // contentLimit: function(content) {
  //   return content.substr(20)
  // }
})
