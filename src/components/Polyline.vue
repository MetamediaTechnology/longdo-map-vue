<script setup lang="ts">
import { onUnmounted, inject } from 'vue'
import type { GeometryProps } from '../types'

let map: any = null
let overlay: any = null
const mapReady = inject<Promise<any> | null>('mapReady', null)
const emit = defineEmits<{
  add: [overlay: any]
}>()
const props = defineProps<GeometryProps>()

function addOverlay(location: any, options: any): void {
  overlay = new window.longdo.Polyline(location, options)
  map?.Overlays.add(overlay)
  emit('add', overlay)
}

(() => {
  if (mapReady === null) {
    console.error('Longdo Map Vue: Longdo Map component is not ready')
    return
  }
  mapReady
  ?.then((obj: any) => {
    map = obj
    if (!props.location) {
      console.error('Longdo Map Vue: Invalid polyline location')
      return
    }
    addOverlay(props.location, props.options)
  })
  .catch((reason: any) => {
    console.error(reason)
  })
})()

onUnmounted(() => {
  map?.Overlays.remove(overlay)
})
</script>
