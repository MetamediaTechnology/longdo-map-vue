const manager = {
  apiKey: null,
  src: 'https://api.longdo.com/map/',
  promise: null,
	load({ apiKey = null, src = null }) {

		if (typeof window === 'undefined') {
			return
		}

    if (window.longdo) {
      console.warn('Longdo Map Vue: Longdo Map API is already loaded')
      return
    }

    let url = this.src
    if (src) {
      url = src
      this.src = src
    }

    if (apiKey) {
      url += `?key=${apiKey}`
      this.apiKey = apiKey
    }
    
    this.importLongdoMap(url)
	},
	initLongdoMap (init) {
		if (window.longdo) {
      init()
		} else {
      throw new Error('Longdo Map Vue: Longdo Map API is not found')
		}
	},
	importLongdoMap (url) {
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

export default manager
