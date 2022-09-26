// pages/detail_song/index.js
import { getMusicList, getRanksList, getSongDetail } from '../../service/music.api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotMusicList: [],
    newRanksList: [],
    upRanksList: [],
    ranksInfo: {},
    type: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type
    const id = options.id
    this.setData({ type })

    if (type === 'menu') {
      getSongDetail(id).then(res => {
        console.log(res);
        this.setData({ ranksInfo: res.data.playlist })
      })
    } else {
      if (id == 'undefined') {
        getMusicList().then(res => {
          this.setData({ hotMusicList: res.data.songs })
        })
      } else {
        getRanksList(id).then(res => {
          this.setData({ newRanksList: res.data.songs })
        })
      }
    }



  },
})