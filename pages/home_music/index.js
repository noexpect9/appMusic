// pages/home_music/index.js
import { getSwipe } from '../../service/music.api'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    swiperHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData()
  },

  getPageData() {
    getSwipe().then(res => {
      this.setData({ banners: res.data.banners })
    })
  },

  clickSearch() {
    wx.navigateTo({
      url: '/pages/music_search/index',
    })
  },

  // 获取图片高度
  swiperImageLoad() {
    throttleQueryRect('.image').then((res) => {
      const rect = res[0]
      // setData是同步还是异步的
      // setData在设置data数据上，是同步的
      // 通过最新的数据对wxml进行渲染，渲染的过程是异步的
      this.setData({ swiperHeight: rect.height })
    })
  }
})