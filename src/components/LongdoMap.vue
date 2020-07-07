<template>
<div ref="map" style="width: 100%; height: 100%;">
  <slot></slot>
</div>
</template>

<script>
import mapOptions from './../mixins/mapOptions'
import manager from './../manager'

export default {
  name: 'LongdoMap',
  mixins: [mapOptions],
  data () {
    return {
      map: null,
      mapPromise: null
    }
  },
  created () {
    let self = this
    this.mapPromise = manager.promise
    this.mapPromise.then(() => {
      manager.initLongdoMap(self.initLongdoMap)
    })
  },
  methods: {
    initLongdoMap () {
      let options = this.getMapOptions()
      options.placeholder = this.$refs.map
      this.map = new window.longdo.Map(options)
      this.$emit('load', this.map)
    }
  },
  init (apiKey, checkApiKey = true) {
    manager.load({
      apiKey: apiKey,
      checkApiKey: checkApiKey
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
