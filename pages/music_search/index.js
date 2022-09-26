// pages/music_search/index.js
import { getSearchKeyWord, getSuggest } from '../../service/search_api'
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
        searchValue: ""
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
        if (!searchValue.length) return
        debounceGetSuggest(searchValue).then(res => {
            this.setData({ suggestMusic: res.data.result.allMatch })
        })
    }

})