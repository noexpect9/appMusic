import { HYEventStore } from 'hy-event-store'
import { getRankingData, getRanks } from '../service/music.api'

const rankingStore = new HYEventStore({
	state: {
		hotRanking: {},
		newRanking: {},
		upRanking: {}
	},
	actions: {
		getRankingDataAction(context) {
			getRankingData(1).then(res => {
				context.hotRanking = res.data.playlist
			})
		},
		getRanksData(context) {
			getRanks().then(res => {
				const reslut = res.data.list.filter(item => item.name == '飙升榜')
				context.upRanking = reslut
				const reslut1 = res.data.list.filter(item => item.name == '新歌榜')
				context.newRanking = reslut1
			})
		}
	}
})

export {
	rankingStore
}