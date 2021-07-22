<template>
  <div class="ldmap-vue-panorama" ref="panorama" />
</template>

<script>
import panoramaOptions from '@/mixins/panoramaOptions'

export default {
  name: 'LongdoPanorama',
  mixins: [panoramaOptions],
  data () {
    return {
      src: '//api.longdo.com/pano/pano-api.min.js',
      isInit: false,
      panorama: null
    }
  },
  mounted () {
    this.panoramaReady().then(() => {
      this.initPano()
    })
  },
  destroyed () {
    this.destroyPano()
  },
  methods: {
    initPano () {
      if (typeof window.longdo === 'undefined' || !this.map || this.isInit) return
      if (typeof window.longdo.PanoramaViewer === 'undefined') return
      if (!(this.map instanceof window.longdo.Map)) {
        console.error('Longdo Map Vue: Incorrect Longdo Map object')
        return
      }
      let options = this.getPanoramaOptions()
      options.placeholder = this.$refs.panorama
      this.panorama = new window.longdo.PanoramaViewer(options)
      this.$emit('load', this.panorama)
      this.isInit = true
    },
    panoramaReady () {
      const id = 'ldmapVuePanorama'
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve()
          return
        }
        let script = document.createElement('script')
        script.onload = () => {
          resolve()
        }
        script.onerror = () => {
          reject()
        }
        script.id = id
        script.async = true
        script.src = this.src
        document.body.appendChild(script)
      })
    },
    destroyPano () {
      this.map.Overlays.remove(this.panorama.currentLocationMarker())
      const naviPointer = document.getElementById('pano-current-location-pointer')
      if (naviPointer) {
        this.map.placeholder().removeChild(naviPointer)
      }
      this.panorama.hidePath()
      this.map.Overlays.list().forEach((e) => {
        if (e.isPanoPoint || e.isPanoLine) {
          this.map.Overlays.remove(e)
        }
      })
    }
  },
  watch: {
    map () {
      if (this.isInit) return
      this.panoramaReady().then(() => {
        this.initPano()
      })
    }
  }
}
</script>

<style>
.ldmap-vue-panorama {
  width: 100%;
  height: 100%;
}
</style>
