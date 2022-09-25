import { HYEventStore } from 'hy-event-store'
import { getRankingData } from '../service/music.api'

const rankingStore = new HYEventStore({
	state: {
		hotRanking: {}
	},
	actions: {
		getRankingDataAction(context) {
			getRankingData(1).then(res => {
				context.hotRanking = res.data.playlist
			})
		}
	}
})

export {
	rankingStore
}