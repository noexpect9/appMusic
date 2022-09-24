// pages/detail_video/index.js
import { getMvUrl, getMvDetail, getRelatedVideo } from '../../service/video_api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvUrlInfo: {},
        mvDetail: {},
        relatedVideos: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const id = options.id
        this.getPageData(id)
    },

    getPageData(id) {
        // 请求播放地址
        getMvUrl(id).then(res => {
            this.setData({ mvUrlInfo: res.data.data })
        })

        // 请求视频信息
        getMvDetail(id).then(res => {
            this.setData({ mvDetail: res.data.data })
        })

        // 请求相关视频
        getRelatedVideo(id).then(res => {
            this.setData({ relatedVideos: res.data.data })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})