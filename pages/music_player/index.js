// pages/music_player/index.js
import { getMusicDetail } from '../../service/player_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    currentMusic: {},
    currentPage: 0,
    swiperHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取id
    const id = options.id
    this.setData({ id })
    // 根据id获取歌曲信息
    this.getPageData(id)

    // 获取歌曲轮播图高度
    const globalData = getApp().globalData
    const screenHeight = globalData.screenHeight
    const statusBarHeight = globalData.statusBarHeight
    const swiperHeight = screenHeight - statusBarHeight - 44
    this.setData({ swiperHeight })


    // 创建播放器
    const audioContext = wx.createInnerAudioContext()
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    audioContext.play = true
  },

  getPageData(id) {
    getMusicDetail(id).then(res => {
      this.setData({ currentMusic: res.data.songs })
    })
  },

  // 事件处理
  swiperChange(e) {
    const current = e.detail.current
    this.setData({ currentPage: current })
  }
})