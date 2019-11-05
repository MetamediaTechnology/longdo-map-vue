import childDefault from './../mixins/childDefault'
import geometryOptions from './../mixins/geometryOptions'

export default {
  name: 'LongdoRectangle',
  mixins: [childDefault, geometryOptions],
  data () {
    return {
      rectangle: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addRectangle(self.location, self.size, self.getGeometryOptions())
    })
  },
  destroyed () {
    this.$parent.map.Overlays.remove(this.rectangle)
  },
  methods: {
    addRectangle (location, size, options) {
      this.rectangle = new window.longdo.Rectangle(location, size, options)
      this.$parent.map.Overlays.add(this.rectangle)
      this.$emit('add', this.rectangle)
    }
  }
}
