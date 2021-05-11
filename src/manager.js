const manager = {
  _apiKey: '',
  _src: 'https://api.longdo.com/map/',
  _beforeInit: null,
  promise: {},
	load({ apiKey, src = undefined, checkApiKey = true, beforeInit = null }) {
		if (typeof window === 'undefined') {
			return
		}
		if (!window.longdo) {
      if (checkApiKey) {
        this._validateApiKey(apiKey)
      }

      let url = this._src

      if (src) {
        url = src
        this._src = src
      }

      if (apiKey) {
        url += `?key=${apiKey}`
      }
      this._apiKey = apiKey

      if (beforeInit) {
        this._beforeInit = beforeInit
      }
      
			this._importLongdoMap(url)
		} else {
			console.warn('Longdo Map API is already loaded')
		}
	},
	initLongdoMap (init) {
		if (window.longdo) {
      if (this._beforeInit) {
        this._beforeInit(window.longdo)
      }
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
