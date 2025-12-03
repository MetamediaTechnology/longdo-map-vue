import type { App } from 'vue'
import { useLongdoMap } from './composables/script'

import LongdoMap from './components/Map.vue'
import LongdoMapMarker from './components/Marker.vue'
import LongdoMapPolyline from './components/Polyline.vue'
import LongdoMapPolygon from './components/Polygon.vue'
import LongdoMapCircle from './components/Circle.vue'
import LongdoMapPolycurve from './components/Polycurve.vue'
import LongdoMapDot from './components/Dot.vue'
import LongdoMapRectangle from './components/Rectangle.vue'

export default {
  install: async (app: App) => {
    app.component('LongdoMap', LongdoMap)
    app.component('LongdoMapMarker', LongdoMapMarker)
    app.component('LongdoMapPolyline', LongdoMapPolyline)
    app.component('LongdoMapPolygon', LongdoMapPolygon)
    app.component('LongdoMapCircle', LongdoMapCircle)
    app.component('LongdoMapPolycurve', LongdoMapPolycurve)
    app.component('LongdoMapDot', LongdoMapDot)
    app.component('LongdoMapRectangle', LongdoMapRectangle)
  },
}

export { 
  useLongdoMap,
  LongdoMap,
  LongdoMapMarker,
  LongdoMapPolyline,
  LongdoMapPolygon,
  LongdoMapCircle,
  LongdoMapPolycurve,
  LongdoMapDot,
  LongdoMapRectangle,
}

// longdomap type definitions
export type {
  Map,
  EventName,
  LongdoLayers
} from 'longdomap-type'