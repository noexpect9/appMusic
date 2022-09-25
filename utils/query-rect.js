// 适配机型 --轮播图比列 createSelectorQuery()
export default function (selector) {
	return new Promise((resolve) => {
		const query = wx.createSelectorQuery()
		query.select(selector).boundingClientRect()
		// query.selectViewport().scrollOffset()
		// query.exex(resolve)
		query.exec((res) => {
			resolve(res)
		})
	})
}