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
      this.setData({ swiperHeight: rect.height })
    })
  }
})