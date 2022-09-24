// pages/home_video/index.js
import { getMv } from '../../service/video_api'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        topMv: [],
        hasMore: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const { data: res } = await getMv(0)
        this.setData({ topMv: res.data })
        // this.getMvData(0)
    },

    async onPullDownRefresh() {
        const { data: res } = await getMv(0)
        this.setData({ topMv: res.data })
        wx.stopPullDownRefresh()
        // this.getMvData(0)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    async onReachBottom() {
        if (!this.data.hasMore) return
        const res = await getMv(this.data.topMv.length)
        this.setData({ topMv: this.data.topMv.concat(res.data.data) })
        this.setData({ hasMore: res.data.hasMore })
        // this.getMvData(this.data.topMv.length)
        // console.log(this.data.topMv);
    },

    async getMvData(offset) {
        // 判断是否请求
        if (!this.data.hasMore) return
        // 封装请求
        const { data: res } = await getMv(offset)
        let newData = this.data.topMv
        if (offset === 0) {
            newData = res.data
        } else {
            newData = newData.concat(res.data)
        }
        this.setData({ topMv: res.data })
        this.setData({ hasMore: res.hasMore })
    },

    clickItem(e) {
        const id = e.currentTarget.dataset.item.id
        wx.navigateTo({
          url: '/pages/detail_video/index?id=' + id,
        })
    }
})