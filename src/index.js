import manager from './manager'

import LongdoMap from './components/Map.vue'
import LongdoMapMarker from './components/Marker.vue'
import LongdoMapPolyline from './components/Polyline.vue'
import LongdoMapPolygon from './components/Polygon.vue'
import LongdoMapCircle from './components/Circle.vue'
import LongdoMapPolycurve from './components/Polycurve.vue'
import LongdoMapDot from './components/Dot.vue'
import LongdoMapRectangle from './components/Rectangle.vue'

const LongdoMapLoad = function(load) {
  manager.prepare(load)
}

export default {
  install (Vue, options) {
    if (options.load) {
      LongdoMapLoad(options.load)
		}
    Vue.component('LongdoMap', LongdoMap)
    Vue.component('LongdoMapMarker', LongdoMapMarker)
    Vue.component('LongdoMapPolyline', LongdoMapPolyline)
    Vue.component('LongdoMapPolygon', LongdoMapPolygon)
    Vue.component('LongdoMapCircle', LongdoMapCircle)
    Vue.component('LongdoMapPolycurve', LongdoMapPolycurve)
    Vue.component('LongdoMapDot', LongdoMapDot)
    Vue.component('LongdoMapRectangle', LongdoMapRectangle)
  },
}

export {
  LongdoMapLoad,
  LongdoMap,
  LongdoMapMarker,
  LongdoMapPolyline,
  LongdoMapPolygon,
  LongdoMapCircle,
  LongdoMapPolycurve,
  LongdoMapDot,
  LongdoMapRectangle,
}
