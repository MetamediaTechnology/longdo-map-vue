<template>
<div class="ldmap-vue-container" >
  <div class="ldmap-vue-placeholder" ref="map" />
  <slot />
</div>
</template>

<script>
import mapOptions from '@/mixins/mapOptions'
import manager from '@/manager'

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
      
      this.map.Event.bind("ready", () => {
        this.$emit("mapReady");
        if (options.zoomRange) {
          this.map.zoomRange(options.zoomRange);
        } 
      });
    }
  },
  init ({ apiKey, src = undefined, checkApiKey = true }) {
    manager.load({
      apiKey: apiKey,
      src: src,
      checkApiKey: checkApiKey
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ldmap-vue-container {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: Tahoma,sans-serif;
}
.ldmap-vue-placeholder {
  width: 100%;
  height: 100%;
}
</style>
