import wxRequest from './index'

/**
 * 获取mv
 * @param {*} offset 
 * @param {*} limit 
 */
export function getMv(offset, limit = 10) {
	return wxRequest.get('/top/mv', {
		offset,
		limit
	})
}

/**
 * 获取播放地址
 */
export function getMvUrl(id) {
	return wxRequest.get('/mv/url', {
		id
	})
}

/**
 * 获取详情
 * @param {*} mvId 
 */
export function getMvDetail(mvId) {
	return wxRequest.get('/mv/detail', {
		mvId
	})
}

/**
 * 获取推荐视频
 * @param {*} id 
 */
export function getRelatedVideo(id) {
	return wxRequest.get('/related/allvideo', {
		id
	})
}