<script>
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
      this.setTransition(this.marker)
      this.$emit('add', this.marker)
    },
    setTransition (marker) {
      if (this.transition) {
        let elm = marker.element()
        elm.classList.add('ldmap-vue-marker-transition-fade')
        setTimeout(() => {
          elm.classList.add('ldmap-vue-marker-transition-fade-start')
        }, 500)
      }
      
    }
  }
}
</script>

<style>
.ldmap-vue-marker-transition-fade {
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: linear;
  transition-duration: 200ms;
}
.ldmap-vue-marker-transition-fade-start {
  opacity: 1;
}
</style>
