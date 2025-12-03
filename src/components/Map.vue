<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import type { MapProps } from '../types'
import { Map } from 'longdomap-type';

const props = defineProps<MapProps>()

let map: Map | any = null
let isMapReady = false
const placeholder = ref<HTMLDivElement | null>(null)
const mapReady = new Promise<any>((resolve, reject) => {
  (function check(times = 0) {
    if (isMapReady) {
      resolve(map)
      return
    } else if (times === 30000) {
      reject('Longdo Map Vue: Cannot create Longdo Map instance')
      return
    }
    setTimeout(() => {
      check(times)
    }, 10)
    times += 10
  })()
})
const emit = defineEmits<{
  load: [map: Map]
}>()
provide('mapReady', mapReady)

function initLongdoMap(): void {
  if (typeof window.longdo !== 'object') {
    console.error('Longdo Map Vue: Longdo Map API is not found')
    return
  }
  const options: any = props.options
  options.placeholder = placeholder.value
  map = new window.longdo.Map(options)
  map.Event.bind('ready', () => {
    isMapReady = true
    emit('load', map)
  })
}

onMounted(() => {
  initLongdoMap()
})
</script>

<template>
  <div>
    <div style="width: 100%; height: 100%;" ref="placeholder"></div>
    <slot></slot>
  </div>
</template>
