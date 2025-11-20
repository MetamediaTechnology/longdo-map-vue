<script setup lang="ts">
import { onUnmounted, inject } from 'vue'
import type { CircleProps } from '../types'

let map: any = null
let overlay: any = null
const mapReady = inject<Promise<any> | null>('mapReady', null)
const props = defineProps<CircleProps>()
const emit = defineEmits<{
  add: [overlay: any]
}>()

function addOverlay(location: any, radius: any, options: any): void {
  overlay = new window.longdo.Circle(location, radius, options)
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
      console.error('Longdo Map Vue: Invalid circle location')
      return
    }
    if (!props.radius || isNaN(props.radius)) {
      console.error('Longdo Map Vue: Invalid circle radius')
      return
    }
    addOverlay(props.location, props.radius, props.options)
  })
  .catch((reason: any) => {
    console.error(reason)
  })
})()

onUnmounted(() => {
  map?.Overlays.remove(overlay)
})
</script>
