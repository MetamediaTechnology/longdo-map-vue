import childDefault from '@/mixins/childDefault'
import markerClusterOptions from '@/mixins/markerClusterOptions'

export default {
  name: 'LongdoMarkerCluster',
  mixins: [childDefault, markerClusterOptions],
  data () {
    return {
      markerCluster: null
    }
  },
  mounted () {
    this.mapReady.then(() => {
      const MarkerCluster = require('@/assets/markercluster-longdo-map/MarkerCluster.js').default
      this.markerCluster = new MarkerCluster(this.$parent.map, this.getMarkerClusterOptions())
      this.$emit('add', this.markerCluster)
      this.renderMarkerCluster()
      if (this.defaultCss) require('@/assets/markercluster-longdo-map/MarkerCluster.Default.css')
    })
  },
  destroyed () {
    this.markerCluster.clearMarkers()
  },
  methods: {
    renderMarkerCluster () {
      if (this.markerCluster) this.markerCluster.clearMarkers()
      for (const marker of this.markerList) {
        const longdoMarker = new window.longdo.Marker(marker.location, marker.options)
        this.markerCluster.addMarkers(longdoMarker)
      }
      this.markerCluster.render()
    }
  },
  watch: {
    markerList () {
      this.renderMarkerCluster()
    }
  }
}
