<p align="center">
  <a href="https://map.longdo.com/products" target="_blank" rel="noopener noreferrer">
    <img src="https://map.longdo.com/themes/longdo/logo.png" alt="Longdo Map logo">
  </a>
</p>

<p align="center">
  Official <a href="https://map.longdo.com/" target="_blank" rel="noopener noreferrer">Longdo Map</a> component for Vue.js
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/longdo-map-vue">
    <img src="https://img.shields.io/npm/v/longdo-map-vue?color=3894ee" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/longdo-map-vue">
    <img src="https://img.shields.io/npm/dt/longdo-map-vue?color=3894ee" alt="Downloads">
  </a>
  <a href="https://github.com/MetamediaTechnology/longdo-map-vue/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/longdo-map-vue?color=3894ee" alt="License">
  </a>
</p>
<p align="center">
  <a href="https://www.facebook.com/groups/708165893234850">
    <img src="https://img.shields.io/badge/Community-3894ee?logo=facebook" alt="Facebook">
  </a>
</p>

## Requirements

- Vue 3.2+

## Installation

Install the package using npm:

```bash
npm i longdo-map-vue
```

## Usage

First, get your [Longdo Map API key](https://map.longdo.com/console/). You can register the components in two ways:

### Local Registration
Import and use the component directly in your Vue file (e.g., `App.vue`):
```html
<script setup>
import { useLongdoMap, LongdoMap } from 'longdo-map-vue'

const { status } = useLongdoMap({
  apiKey: 'YOUR_LONGDO_MAP_API_KEY',
})
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Loading...</div>
    <LongdoMap
      v-else-if="status === 'success'"
      :options="{ zoom: 10, lastView: false }"
    />
  </div>
</template>
```

### Global Registration

Register the plugin in your `main.js` or `main.ts`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import LongdoMap from 'longdo-map-vue'

createApp(App)
  .use(LongdoMap, {
    apiKey: 'YOUR_LONGDO_MAP_API_KEY',
  })
  .mount('#app')
```

Now you can use the component anywhere in your app without importing:

```html
<template>
  <LongdoMap :options="{ zoom: 10 }" />
</template>
```

## Components

- [LongdoMap](#longdomap)
- [LongdoMapMarker](#longdomapmarker)
- [LongdoMapDot](#longdomapdot)
- [LongdoMapCircle](#longdomapcircle)
- [LongdoMapRectangle](#longdomaprectangle)
- [LongdoMapPolyline](#longdomappolyline)
- [LongdoMapPolygon](#longdomappolygon)

### LongdoMap

**Props:**
- `:options` - [MapOptions](http://api.longdo.com/map/doc/ref.php#MapOptions)

**Events:**
- `@load="Function(object)"` - Fired when map is loaded

**Examples:**

Basic map:
```html
<LongdoMap :options="{ zoom: 10, lastView: false }" />
```

Accessing map object:
```html
<script setup>
import { LongdoMap, LongdoMapMarker } from 'longdo-map-vue'

function onMapLoad(map) {
  map.Layers.setBase(longdo.Layers.NORMAL)
}
</script>

<template>
  <LongdoMap @load="onMapLoad">
    <LongdoMapMarker :location="{ lon: 99, lat: 14 }" />
  </LongdoMap>
</template>
```

Using custom map source (Longdo Map v2 or Longdo Box server):
```html
<script setup>
import { useLongdoMap, LongdoMap } from 'longdo-map-vue'

const { status } = useLongdoMap({
  apiKey: 'YOUR_LONGDO_MAP_API_KEY',
  src: 'https://api.longdo.com/map/', // For Longdo Map v2
  // or specify your Longdo Box server URL
})
</script>

<template>
  <div>
    <LongdoMap v-if="status === 'success'" />
  </div>
</template>
```

### LongdoMapMarker

**Props:**
- `:location` - Location object `{ lon: number, lat: number }`
- `:options` - [MarkerOptions](http://api.longdo.com/map/doc/ref.php#MarkerOptions)

**Events:**
- `@add="Function(object)"` - Fired when marker is added to map

**Example:**
```html
<script setup>
import { LongdoMap, LongdoMapMarker } from 'longdo-map-vue'

const markers = [
  { location: { lon: 100, lat: 13 }, title: 'Marker 1', detail: 'Detail 1' },
  { location: { lon: 101, lat: 14 }, title: 'Marker 2', detail: 'Detail 2' },
]
</script>

<template>
  <LongdoMap :options="{ zoom: 10, lastView: false }">
    <LongdoMapMarker
      v-for="(item, i) in markers"
      :key="i"
      :location="item.location"
      :options="{ title: item.title, detail: item.detail }"
    />
  </LongdoMap>
</template>
```

### LongdoMapPolyline

**Props:**
- `:location` - Array of location objects
- `:options` - [GeometryOptions](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

**Events:**
- `@add="Function(object)"` - Fired when polyline is added to map

**Examples:**

Solid line:
```html
<script setup>
import { LongdoMap, LongdoMapPolyline } from 'longdo-map-vue'
</script>

<template>
  <LongdoMap>
    <LongdoMapPolyline
      :location="[
        { lon: 100, lat: 14 },
        { lon: 101, lat: 15 },
        { lon: 102, lat: 14 }
      ]"
      :options="{
        title: 'Polyline',
        detail: 'A line path',
        label: 'Polyline',
        lineWidth: 4,
        lineColor: 'rgba(255, 0, 0, 0.8)'
      }"
    />
  </LongdoMap>
</template>
```

Dashed line:
```html
<script setup>
import { LongdoMap, LongdoMapPolyline } from 'longdo-map-vue'

const longdo = () => window.longdo
</script>

<template>
  <LongdoMap>
    <LongdoMapPolyline
      :location="[
        { lon: 99, lat: 14 },
        { lon: 100, lat: 15 },
        { lon: 101, lat: 14 }
      ]"
      :options="{
        title: 'Dashline',
        lineWidth: 4,
        lineColor: 'rgba(255, 0, 0, 0.8)',
        lineStyle: longdo().LineStyle.Dashed,
        pointer: true
      }"
    />
  </LongdoMap>
</template>
```

### LongdoMapPolygon

**Props:**
- `:location` - Array of location objects (use `null` to separate outer and inner rings for donut polygons)
- `:options` - [GeometryOptions](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

**Events:**
- `@add="Function(object)"` - Fired when polygon is added to map

**Examples:**

Basic polygon:
```html
<script setup>
import { LongdoMap, LongdoMapPolygon } from 'longdo-map-vue'

const locationList = [
  { lon: 99, lat: 14 },
  { lon: 100, lat: 13 },
  { lon: 102, lat: 13 },
  { lon: 103, lat: 14 }
]
</script>

<template>
  <LongdoMap>
    <LongdoMapPolygon
      :location="locationList"
      :options="{
        lineWidth: 2,
        lineColor: 'rgba(0, 0, 0, 1)',
        fillColor: 'rgba(255, 0, 0, 0.4)'
      }"
    />
  </LongdoMap>
</template>
```

Donut polygon (polygon with hole):
```html
<script setup>
import { LongdoMap, LongdoMapPolygon } from 'longdo-map-vue'
</script>

<template>
  <LongdoMap>
    <!-- Donut polygon (use null to separate outer and inner rings) -->
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
  </LongdoMap>
</template>
```

### LongdoMapCircle

**Props:**
- `:location` - Location object `{ lon: number, lat: number }`
- `:radius` - Radius in degrees
- `:options` - [GeometryOptions](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

**Events:**
- `@add="Function(object)"` - Fired when circle is added to map

**Example:**
```html
<script setup>
import { LongdoMap, LongdoMapCircle } from 'longdo-map-vue'
</script>

<template>
  <LongdoMap>
    <LongdoMapCircle
      :location="{ lon: 101, lat: 15 }"
      :radius="1"
      :options="{
        title: 'Circle',
        detail: 'A circle overlay',
        lineWidth: 2,
        lineColor: 'rgba(255, 0, 0, 0.8)',
        fillColor: 'rgba(255, 0, 0, 0.4)'
      }"
    />
  </LongdoMap>
</template>
```

### LongdoMapDot

**Props:**
- `:location` - Location object `{ lon: number, lat: number }`
- `:options` - [GeometryOptions](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

**Events:**
- `@add="Function(object)"` - Fired when dot is added to map

**Example:**
```html
<script setup>
import { LongdoMap, LongdoMapDot } from 'longdo-map-vue'
</script>

<template>
  <LongdoMap>
    <LongdoMapDot
      :location="{ lon: 100.5, lat: 12.5 }"
      :options="{
        lineWidth: 20,
        draggable: true
      }"
    />
  </LongdoMap>
</template>
```

### LongdoMapRectangle

**Props:**
- `:location` - Top-left location object `{ lon: number, lat: number }`
- `:size` - Size object `{ width: number, height: number }` in degrees, or bottom-right location object
- `:options` - [GeometryOptions](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

**Events:**
- `@add="Function(object)"` - Fired when rectangle is added to map

**Example:**
```html
<script setup>
import { LongdoMap, LongdoMapRectangle } from 'longdo-map-vue'
</script>

<template>
  <LongdoMap>
    <LongdoMapRectangle
      :location="{ lon: 97, lat: 17 }"
      :size="{ width: 2, height: 1 }"
      :options="{
        editable: true
      }"
    />
  </LongdoMap>
</template>
```

## Documentation

- [Longdo Map API Documentation](https://map.longdo.com/docs/)
- [สอนการใช้ Map API ร่วมกับ Vue.js](https://map.longdo.com/blog/2019/12/03/longdo-map-api-vue-js/)

## Community

- [Longdo Map API Community - แผนที่ออนไลน์ไทย](https://www.facebook.com/groups/708165893234850)
