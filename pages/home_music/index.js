// pages/home_music/index.js
import { rankingStore } from '../../store/ranking_store'
import { getSwipe, getMusicMenu, getRanksList } from '../../service/music.api'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    swiperHeight: 0,
    recommendSongs: [],
    hotMusicMenu: [],
    recommendSongMenu: [],
    upRanks: [],
    newRanks: [],
    RanksList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData()

    // 发起共享数据请求
    rankingStore.dispatch('getRankingDataAction')
    // 获取共享数据
    rankingStore.onState('hotRanking', (res) => {
      if (!res.tracks) return
      const recommendSongs = res.tracks.slice(0, 6)
      this.setData({ recommendSongs })
    })

    rankingStore.dispatch('getRanksData')
    rankingStore.onState('upRanking', (res) => {
      const upRanks = res
      this.setData({ upRanks })
    })
    rankingStore.onState('newRanking', (res) => {
      const newRanks = res
      this.setData({ newRanks })
    })
  },

  getPageData() {
    getSwipe().then(res => {
      this.setData({ banners: res.data.banners })
    }),

      getMusicMenu().then(res => {
        this.setData({ hotMusicMenu: res.data.playlists })
      }),

      getMusicMenu("华语").then(res => {
        this.setData({ recommendSongMenu: res.data.playlists })
      })
  },


  clickSearch() {
    wx.navigateTo({
      url: '/pages/music_search/index',
    })
  },

  handleMoreClick() {
    this.navigateToDetailSongPage()
  },

  handleNewRanksClick(e) {
    const id = e.currentTarget.dataset.idx
    this.navigateToDetailSongPage(id)

  },

  handleUpRanksClick(e) {
    const id = e.currentTarget.dataset.idx
    this.navigateToDetailSongPage(id)
  },

  navigateToDetailSongPage(id) {
    wx.navigateTo({
      url: `/pages/detail_song/index?id=${id}&type=rank`,
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