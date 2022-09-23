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