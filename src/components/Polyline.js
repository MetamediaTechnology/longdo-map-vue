import childDefault from './../mixins/childDefault'
import geometryOptions from './../mixins/geometryOptions'

export default {
  name: 'LongdoPolyline',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      polyline: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addPolyline(self.location, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.polyline)
  },
  methods: {
    addPolyline (location, options) {
      this.polyline = new window.longdo.Polyline(location, options)
      this.$parent.map.Overlays.add(this.polyline)
      this.$emit('add', this.polyline)
    }
  }
}
