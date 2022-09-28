
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
	const lyricInfos = []
	const lyricStrings = lyricString.split('\n')

	for (const lineString of lyricStrings) {
		const timeRes = timeRegExp.exec(lineString)
		if (!timeRes) continue
		// 获取时间
		const minute = timeRes[1] * 60 * 1000
		const second = timeRes[2] * 1000
		const millsecond = timeRes[3].length === 2 ? timeRes[3] * 10 : timeRes[3] * 1
		const time = minute + second + millsecond

		// 获取歌词
		const lyricText = lineString.replace(timeRegExp, "")
		lyricInfos.push({ time, lyricText })
	}


	return lyricInfos
}