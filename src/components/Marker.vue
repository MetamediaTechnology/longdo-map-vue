<script setup lang="ts">
import { onUnmounted, inject } from 'vue'
import type { MarkerProps } from '../types'

let map: any = null
let marker: any = null
const mapReady = inject<Promise<any> | null>('mapReady', null)
const emit = defineEmits<{
  add: [marker: any]
}>()
const props = defineProps<MarkerProps>()

function addMarker(location: any, options: any): void {
  marker = new window.longdo.Marker(location, options)
  map?.Overlays.add(marker)
  emit('add', marker)
}

(() => {
  if (mapReady === null) {
    console.error('Longdo Map Vue: Longdo Map component is not ready')
    return
  }
  mapReady
  ?.then((obj: any) => {
    map = obj
    if (!props.location || isNaN(props.location.lat) || isNaN(props.location.lon)) {
      console.error('Longdo Map Vue: Invalid marker location')
      return
    }
    addMarker(props.location, props.options)
  })
  .catch((reason: any) => {
    console.error(reason)
  })
})()

onUnmounted(() => {
  map?.Overlays.remove(marker)
})
</script>
