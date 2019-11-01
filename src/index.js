import manager from './manager'
import LongdoMap from './components/LongdoMap'
import LongdoMapMarker from './components/Marker'

export {
  LongdoMap,
  LongdoMapMarker
}

const components = {
	install (Vue, userOptions) {
		const options = {
      installComponents: true,
      tagPrefix: '',
      ...userOptions
    }
    if (options.load) {
		manager.load(options.load)
		}
		if (options.installComponents) {
			let prefix = options.tagPrefix !== '' ? `${options.tagPrefix}-` : options.tagPrefix
			Vue.component(`${prefix}longdo-map`, LongdoMap)
			Vue.component(`${prefix}longdo-map-marker`, LongdoMapMarker)
		}
	},
}

export default components
