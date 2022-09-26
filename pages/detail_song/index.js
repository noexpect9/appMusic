// pages/detail_song/index.js
import { getMusicList, getRanksList } from '../../service/music.api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotMusicList: [],
    newRanksList: [],
    upRanksList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    if (id == 'undefined') {
      getMusicList().then(res => {
        this.setData({ hotMusicList: res.data.songs })
      })
    } else {
      getRanksList(id).then(res => {
        this.setData({ newRanksList: res.data.songs })
      })
    }
  },
})