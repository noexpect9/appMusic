// components/songs_list_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 0
    },
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickPlayer(e) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        // url: `/pages/music_player/index?id=${id}`,
        url: '/pages/music_player/index?id=' + id,
      })
    }
  }
})
