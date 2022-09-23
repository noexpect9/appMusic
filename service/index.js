// 封装请求
const base_URL = 'http://123.207.32.32:9001'

class WxRequest {
	request(url, method, params) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: base_URL + url,
				method: method,
				data: params,
				success: function (res) {
					resolve(res)
				},
				fail: function (err) {
					reject(err)
				}
			})
		})
	}

	get(url, params) {
		return this.request(url, 'get', params)
	}

	post(url, data) {
		return this.request(url, 'post', data)
	}
}

const wxRequest = new WxRequest()

export default wxRequest