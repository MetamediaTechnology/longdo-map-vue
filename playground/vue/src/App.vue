<script setup lang="ts">
import {
  useLongdoMap,
  LongdoMap,
  LongdoMapMarker,
  LongdoMapPolyline,
  LongdoMapPolygon,
  LongdoMapCircle,
  LongdoMapDot,
  LongdoMapRectangle
} from 'longdo-map-vue'

const { status } = useLongdoMap({
  apiKey: import.meta.env.VITE_LONGDO_MAP_API_KEY,
})

const longdo = () => window.longdo
function onMapLoad(map: any) {
  console.log('Longdo Map loaded')
  console.log(map)
}
</script>

<template>
  <div>
    <div v-if="status === 'pending'">
      Please wait...
    </div>
    <LongdoMap
      v-else-if="status === 'success'"
      :options="{
        zoom: 7,
        lastView: false,
        location: { lat: 14, lon: 100.5 },
        layer: [longdo().Layers.GRAY],
      }"
      @load="onMapLoad"
      style="height: 100vh;"
    >
      <LongdoMapMarker :location="{ lat: 13.72264, lon: 100.52931 }" />
      <LongdoMapPolyline
        :location="[
          { lon: 100, lat: 14 },
          { lon: 101, lat: 15 },
          { lon: 102, lat: 14 }
        ]"
        :options="{
          title: 'Polyline',
          detail: '-',
          label: 'Polyline',
          lineWidth: 4,
          lineColor: 'rgba(255, 0, 0, 0.8)'
        }"
      />

      <LongdoMapPolyline
        :location="[
          { lon: 99, lat: 14 },
          { lon: 100, lat: 15 },
          { lon: 101, lat: 14 }
        ]"
        :options="{
          title: 'Dashline',
          detail: '-',
          label: 'Dashline',
          lineWidth: 4,
          lineColor: 'rgba(255, 0, 0, 0.8)',
          lineStyle: longdo().LineStyle.Dashed,
          pointer: true
        }"
      />

      <LongdoMapPolygon
        :location="[
          { lon: 99, lat: 14 },
          { lon: 100, lat: 13 },
          { lon: 102, lat: 13 },
          { lon: 103, lat: 14 }
        ]"
        :options="{
          title: 'Polygon',
          detail: '-',
          label: 'Polygon',
          lineWidth: 2,
          lineColor: 'rgba(0, 0, 0, 1)',
          fillColor: 'rgba(255, 0, 0, 0.4)',
          visibleRange: { min: 7, max: 18 },
          editable: true
        }"
      />

      <LongdoMapCircle
        :location="{ lon: 101, lat: 15 }"
        :radius="1"
        :options="{
          title: 'Geom 3',
          detail: '-',
          lineWidth: 2,
          lineColor: 'rgba(255, 0, 0, 0.8)',
          fillColor: 'rgba(255, 0, 0, 0.4)'
        }"
      />

      <LongdoMapDot
        :location="{ lon: 100.5, lat: 12.5 }"
        :options="{
          lineWidth: 20,
          draggable: true
        }"
      />

      <LongdoMapPolygon
        :location="[
          { lon: 101, lat: 15 },
          { lon: 105, lat: 15 },
          { lon: 103, lat: 12 },
          null,
          { lon: 103, lat: 14.9 },
          { lon: 102.1, lat: 13.5 },
          { lon: 103.9, lat: 13.5 }
        ]"
        :options="{
          label: true,
          clickable: true
        }"
      />

      <LongdoMapRectangle
        :location="{ lon: 97, lat: 17 }"
        :size="{ width: 2, height: 1 }"
        :options="{
          editable: true
        }"
      />
    </LongdoMap>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
