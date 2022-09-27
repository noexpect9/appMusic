import wxRequest from './index'

/**
 * 
 * @param {*} ids 
 */
export function getMusicDetail(ids) {
	return wxRequest.get(`/song/detail?ids=${ids}`)
}