import childDefault from './../mixins/childDefault'
import geometryOptions from './../mixins/geometryOptions'

export default {
  name: 'LongdoPolygon',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      polygon: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addPolygon(self.location, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.polygon)
  },
  methods: {
    addPolygon (location, options) {
      this.polygon = new window.longdo.Polygon(location, options)
      this.$parent.map.Overlays.add(this.polygon)
      this.$emit('add', this.polygon)
    }
  }
}
