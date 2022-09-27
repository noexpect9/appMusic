// pages/music_search/index.js
import { getSearchKeyWord, getSuggest, getSearchData } from '../../service/search_api'
import debounce from '../../utils/debounce'

// 防抖函数
const debounceGetSuggest = debounce(getSuggest)

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotKeys: [],
        suggestMusic: [],
        searchValue: "",
        resultSongs: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getPageData()
    },
    getPageData() {
        getSearchKeyWord().then(res => {
            this.setData({ hotKeys: res.data.result.hots })
        })
    },
    handleSearchChange(e) {
        const searchValue = e.detail
        this.setData({ searchValue })
        if (!searchValue.length) {
            this.setData({ suggestMusic: [] })
            this.setData({ resultSongs: [] })
            debounceGetSuggest.cancel() // 取消发送请求
            return
        }
        debounceGetSuggest(searchValue).then(res => {
            this.setData({ suggestMusic: res.data.result.allMatch })
        })
    },

    handleSearch() {
        const searchValue = this.data.searchValue
        getSearchData(searchValue).then(res => {
            this.setData({ resultSongs: res.data.result.songs })
        })
    },

    handleClick(e) {
        const index = e.currentTarget.dataset.index
        const keyword = this.data.suggestMusic[index].keyword
        // 设置searchValue
        this.setData({ searchValue: keyword })
        // 发送请求
        getSearchData(keyword).then(res => {
            this.setData({ resultSongs: res.data.result.songs })
        })
    },

    // 点击tag
    handleTagClick(e) {
        const keyword = e.currentTarget.dataset.item
        this.setData({ searchValue: keyword })
        getSearchData(keyword).then(res => {
            this.setData({ resultSongs: res.data.result.songs })
        })
    }
})