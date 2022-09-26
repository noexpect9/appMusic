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

/**
 * 获取排行榜
 * @param {*} type: 地区
 * 华语：1；欧美：2；韩国：3；日本：4 
 */
export function getRanks(type) {
	return wxRequest.get('/toplist/detail', {
		type
	})
}

/**
 * 
 * @param {*} id 
 * @param {*} limit 
 * @param {*} offset 
 */
export function getMusicList(id = 1, limit, offset) {
	return wxRequest.get('/playlist/track/all', {
		id, limit, offset
	})
}

export function getRanksList(id) {
	return wxRequest.get('/playlist/track/all', {
		id
	})
}