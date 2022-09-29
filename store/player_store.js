import { HYEventStore } from 'hy-event-store'
const audioContext = wx.createInnerAudioContext()
const playStore = new HYEventStore({
	state: {
		// 共享播放模式
		playModeIndex: 0,
		isPlaying: false
	},
	actions: {
		playMusicWithSongIdAction(context, { id, isRefresh = false }) {
			context.isPlaying = true
		},
		changeMusicPlayStatus(ctx) {
			ctx.isPlaying = !ctx.isPlaying
			if(ctx.isPlaying) {
				audioContext.pause()
			} else {
				audioContext.play()
			}
		}
	}
})
export {
	audioContext,
	playStore
}