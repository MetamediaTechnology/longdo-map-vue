import manager from './manager'
import LongdoMap from './components/LongdoMap'
import LongdoMapMarker from './components/Marker'
import LongdoMapDot from './components/Dot'
import LongdoMapCircle from './components/Circle'
import LongdoMapRectangle from './components/Rectangle'
import LongdoMapPolygon from './components/Polygon'
import LongdoMapPolyline from './components/Polyline'
import LongdoMapPolycurve from './components/Polycurve'

export {
  LongdoMap,
  LongdoMapMarker,
  LongdoMapDot,
  LongdoMapCircle,
  LongdoMapRectangle,
  LongdoMapPolygon,
  LongdoMapPolyline,
  LongdoMapPolycurve
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
			Vue.component(`${prefix}longdo-map-dot`, LongdoMapDot)
			Vue.component(`${prefix}longdo-map-circle`, LongdoMapCircle)
			Vue.component(`${prefix}longdo-map-rectangle`, LongdoMapRectangle)
			Vue.component(`${prefix}longdo-map-polygon`, LongdoMapPolygon)
      Vue.component(`${prefix}longdo-map-polyline`, LongdoMapPolyline)
			Vue.component(`${prefix}longdo-map-polycurve`, LongdoMapPolycurve)
		}
	},
}

export default components
