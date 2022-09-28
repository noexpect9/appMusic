import wxRequest from './index'

/**
 * 
 * @param {*} ids 
 */
export function getMusicDetail(ids) {
	return wxRequest.get(`/song/detail?ids=${ids}`)
}

/**
 * 获取歌词
 */
export function getMusicLyric(id) {
	return wxRequest.get(`/lyric?id=${id}`)
}