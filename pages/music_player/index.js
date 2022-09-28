// pages/music_player/index.js
import { getMusicDetail } from '../../service/player_api'
import { audioContext } from '../../store/player_store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    currentMusic: {},
    currentPage: 0,
    swiperHeight: 0,
    // 歌曲时长
    durationTime: 0,
    currentTime: 0,
    sliderTime: 0,
    sliderValue: 0,
    isSliderChanging: false
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
    audioContext.stop()
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    // audioContext.autoplay = true
    audioContext.onCanplay(() => {
      // audioContext.play()
    })

    // 获取音乐播放时间
    audioContext.onTimeUpdate(() => {
      const currentTime = audioContext.currentTime * 1000
      if (!this.data.isSliderChanging) {
        const sliderValue = currentTime / this.data.durationTime * 100
        this.setData({ sliderValue, currentTime })
      }
    })
  },

  // 获取歌曲
  getPageData(id) {
    getMusicDetail(id).then(res => {
      this.setData({ currentMusic: res.data.songs, durationTime: res.data.songs[0].dt })
    })
  },

  // 事件处理
  swiperChange(e) {
    const current = e.detail.current
    this.setData({ currentPage: current })
  },

  handleSliderChanging(e) {
    const value = e.detail.value
    const currentTime = this.data.durationTime * value / 100
    this.setData({ isSliderChanging: true, currentTime })
  },

  // 歌曲进度条
  handleSliderChange(e) {
    // console.log(this.data.durationTime);
    const value = e.detail.value
    const currentTime = this.data.durationTime * value / 100
    audioContext.pause()
    audioContext.seek(currentTime / 1000)
    this.setData({ sliderTime: value, isSliderChanging: false })
  }
})