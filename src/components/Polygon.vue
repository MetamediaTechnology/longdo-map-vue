<script setup>
import { onUnmounted, inject } from 'vue'
import { useGeometryProps, useGeometryOptions } from '../composables/geometry.js'

let map = null
let overlay = null
const mapReady = inject('mapReady', null)
const emit = defineEmits(['add'])
const props = defineProps(useGeometryProps())

function addOverlay(location, options) {
  overlay = new window.longdo.Polygon(location, options)
  map?.Overlays.add(overlay)
  emit('add', overlay)
}

(() => {
  if (mapReady === null) {
    console.error('Longdo Map Vue: Longdo Map component is not ready')
    return
  }
  mapReady
  .then((obj) => {
    map = obj
    if (!props.location) {
      console.error('Longdo Map Vue: Invalid polygon location')
      return
    }
    addOverlay(props.location, useGeometryOptions(props))
  })
  .catch((reason) => {
    console.error(reason)
  })
})()

onUnmounted(() => {
  map?.Overlays.remove(overlay)
})
</script>
