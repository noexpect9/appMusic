import wxRequest from './index'

/**
 * 获取热门关键字
 */
export function getSearchKeyWord() {
	return wxRequest.get('/search/hot')
}

/**
 * 
 * @param {*} keywords 
 */
export function getSuggest(keywords) {
	return wxRequest.get('/search/suggest', {
		keywords,
		type: "mobile"
	})
}