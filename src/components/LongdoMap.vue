<template>
<div ref="map" style="width: 100%; height: 100%;"></div>
</template>

<script>
import loader from './../loader'

export default {
  name: 'LongdoMap',
  data () {
    return {
      map: {}
    }
  },
  props: {
    apiKey: {
      type: String,
      default: ''
    },
    mapOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  mounted () {
    loader.initializeLongdoMap(this.initLongdoMap, this.apiKey)
  },
  destroyed () {
    loader.destroyed = true
  },
  methods: {
    initLongdoMap () {
      let options = {
        ...this.mapOptions,
        placeholder: this.$refs.map
      }
      this.map = new window.longdo.Map(options)
      this.$emit('onload', this.map)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
