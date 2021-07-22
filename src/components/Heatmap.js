import childDefault from '@/mixins/childDefault'
import heatmapOptions from '@/mixins/heatmapOptions'
import * as h337 from '@/assets/heatmap-longdo-map/heatmap.js'
import longdoMapHeatmap from '@/assets/heatmap-longdo-map/longdomap-heatmap.js'

export default {
  name: 'LongdoHeatmap',
  mixins: [childDefault, heatmapOptions],
  data () {
    return {
      heatmapLayer: null
    }
  },
  mounted () {
    this.mapReady.then(() => {
      const LongdoMapHeatMap = longdoMapHeatmap.heatmap(h337)
      this.heatmapLayer = new LongdoMapHeatMap(this.getHeatmapOptions())
      this.$emit('add', this.heatmapLayer)
      this.setHeatmapLayer()
    })
  },
  destroyed () {
    this.$parent.map.Layers.remove(this.heatmapLayer)
  },
  methods: {
    setHeatmapLayer () {
      this.$parent.map.Layers.remove(this.heatmapLayer)
      this.heatmapLayer._clearCache()
      this.heatmapLayer.setData(this.data)
      this.$parent.map.Layers.add(this.heatmapLayer)
    }
  },
  watch: {
    data () {
      this.setHeatmapLayer()
    }
  }
}
