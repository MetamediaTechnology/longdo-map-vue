import childDefault from '@/mixins/childDefault'
import geometryOptions from '@/mixins/geometryOptions'

export default {
  name: 'LongdoDot',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      dot: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addDot(self.location, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.dot)
  },
  methods: {
    addDot (location, options) {
      this.dot = new window.longdo.Dot(location, options)
      this.$parent.map.Overlays.add(this.dot)
      this.$emit('add', this.dot)
    }
  }
}
