import childDefault from '@/mixins/childDefault'
import geometryOptions from '@/mixins/geometryOptions'

export default {
  name: 'LongdoCircle',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      circle: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addCircle(self.location, self.radius, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.circle)
  },
  methods: {
    addCircle (location, radius, options) {
      this.circle = new window.longdo.Circle(location, radius, options)
      this.$parent.map.Overlays.add(this.circle)
      this.$emit('add', this.circle)
    }
  }
}
