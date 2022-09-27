// pages/music_player/index.js
import { getMusicDetail } from '../../service/player_api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    currentMusic: {}
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
  },

  getPageData(id) {
    getMusicDetail(id).then(res=> {
      this.setData({currentMusic:res.data.songs})
    })
  }
})