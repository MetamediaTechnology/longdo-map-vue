import loader from './loader'
import LongdoMap from './components/LongdoMap'

export {
    LongdoMap
}

const components = {
	install (Vue, userOptions) {
		const options = {
			installComponents: true,
			tagPrefix: '',
            ...userOptions
        }
        if (options.load) {
			loader.load(options.load)
		}
		if (options.installComponents) {
			let prefix = options.tagPrefix !== '' ? `${options.tagPrefix}-` : options.tagPrefix
			Vue.component(`${prefix}longdo-map`, LongdoMap)
		}
	},
}

export default components
