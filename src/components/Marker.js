import childDefault from './../mixins/childDefault'
import markerOptions from './../mixins/markerOptions'

export default {
  name: 'LongdoMarker',
  mixins: [childDefault, markerOptions],
  data () {
    return {
      marker: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addMarker(self.location, self.getMarkerOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.marker)
  },
  methods: {
    addMarker (location, options) {
      this.marker = new window.longdo.Marker(location, options)
      this.$parent.map.Overlays.add(this.marker)
      this.$emit('add', this.marker)
    }
  }
}
