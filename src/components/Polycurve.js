import childDefault from './../mixins/childDefault'
import geometryOptions from './../mixins/geometryOptions'

export default {
  name: 'LongdoPolycurve',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      polycurve: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addPolycurve(self.location, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.polycurve)
  },
  methods: {
    addPolycurve (location, options) {
      this.polycurve = new window.longdo.Polycurve(location, options)
      this.$parent.map.Overlays.add(this.polycurve)
      this.$emit('add', this.polycurve)
    }
  }
}
