import wxRequest from './index'

export function getSwipe() {
	return wxRequest.get('/banner', {
		type: 2
	})
}

/**
 * 获取热门歌曲
 */
export function getRankingData(id) {
	return wxRequest.get('/playlist/detail', {
		id
	})
}

/**
 * 获取歌单
 * @param {*} cat 
 * @param {*} limit 
 * @param {*} offset 
 */
export function getMusicMenu(cat, limit = 6, offset = 0) {
	return wxRequest.get('/top/playlist', {
		cat, limit, offset
	})
}