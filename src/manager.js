const manager = {
  _apiKey: '',
  promise: {},
	load ({ apiKey }) {
		if (typeof window === 'undefined') {
			return
		}
		if (!window.longdo) {
      this._validateApiKey(apiKey)
      let url = `https://api.longdo.com/map/?key=${apiKey}`
      this._apiKey = apiKey
			this._importLongdoMap(url)
		} else {
			console.warn('Longdo Map API is already loaded')
		}
	},
	initLongdoMap (init) {
		if (window.longdo) {
      init()
		} else {
      throw new Error('Longdo Map API is not found')
		}
	},
	_importLongdoMap (url) {
		this.promise = new Promise((resolve, reject) => {
			let script = document.createElement('script')
			script.onload = () => {
				resolve()
			}
			script.onerror = () => {
				reject()
			}
			script.async = true
			script.src = url
			document.body.appendChild(script)
		})
  },
  _validateApiKey (apiKey = '') {
    if (typeof apiKey !== 'string' || apiKey === '') {
      throw new Error('Invalid Longdo Map API key')
    }
  }
}

export default manager
