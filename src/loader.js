const loader = {
	imported: false,
	destroyed: false,
	promise: {},
	load ({apiKey}) {
		if (typeof window === 'undefined') {
			return
		}
		if (!this.imported && !window.longdo) {
			if (typeof apiKey !== 'string') {
                throw new Error('Invalid Longdo Map API key')
			}
			let url = `https://api.longdo.com/map/?key=${apiKey}`
			this._importLongdoMap(url)
		} else {
			this._onLongdoMapLoad()
			console.warn('Longdo Map is already loaded')
		}
	},
	initializeLongdoMap (init, apiKey = '') {
		let self = this
		if (this.imported) {
			if (this.destroyed) {
				init()
			}
			this._onLongdoMapLoad()
		} else {
			if (typeof this.promise.then !== 'function') {
				this.load({ apiKey: apiKey })
			}
			this.promise.then(() => {
				self._onLongdoMapLoad()
				init()
			}).catch(() => {
				throw new Error('Error loading Longdo Map API')
			})
		}
	},
	_onLongdoMapLoad () {
		this.imported = true
		this.destroyed = false
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
	}
}

export default loader
