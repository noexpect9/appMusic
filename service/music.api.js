import wxRequest from './index'

export function getSwipe(){
	return wxRequest.get('/banner',{
		type: 2
	})
}