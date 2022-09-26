// components/songs_menu/index.js
const app = getApp()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        songMenu: {
            type: Array,
            value: []
        },
        title: {
            type: String,
            value: "默认"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        screenWidth: app.globalData.screenWidth,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleMenuClick(e) {
            const item = e.currentTarget.dataset.item
            wx.navigateTo({
                url: `/pages/detail_song/index?id=${item.id}&type=menu`,
            })
        }
    }
})
