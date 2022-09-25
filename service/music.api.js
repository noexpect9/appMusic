import wxRequest from './index'

export function getSwipe(){
	return wxRequest.get('/banner',{
		type: 2
	})
}

/**
 * 获取热门歌曲
 */
export function getRankingData(id) {
	return wxRequest.get('/playlist/detail',{
		id
	})
}