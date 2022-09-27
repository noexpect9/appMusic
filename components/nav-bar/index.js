// components/nav-bar/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    leftWidth: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: "默认Biaoti"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: getApp().globalData.statusBarHeight
  },

  lifetimes: {
    ready() {
      const info = wx.getSystemInfoSync()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
