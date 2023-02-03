<p align="center">
  <a href="https://map.longdo.com/products" target="_blank" rel="noopener noreferrer">
    <img src="https://map.longdo.com/themes/longdo/logo.png" alt="Longdo Map logo">
  </a>
</p>

<p align="center">
  <a href="https://map.longdo.com/" target="_blank" rel="noopener noreferrer">Longdo Map</a> component for Vue.js
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

## Installation
You can easily install by using `npm`
```cli
npm i longdo-map-vue
```

## Usage
First, you need to get a [Longdo Map API key](https://map.longdo.com/console/). Then, after you have Longdo Map API key and component installed, you need to register it to your Vue project.

There are two ways of registering component:

### Register component globally
This is a recommended way of registering component

In your `main.js` or similar file:
```js
import { createApp } from 'vue'
import App from './App.vue'
import LongdoMap from 'longdo-map-vue'

createApp(App)
  .use(LongdoMap, {
    load: {
      apiKey: 'YOUR_LONGDO_MAP_API_KEY',
    }
  })
  .mount('#app')

```
Then you can use `<longdo-map />` in your component template.
```html
<template>
  <longdo-map />
</template>
```

### Register component locally
In your component file, for example `Foo.vue`:
```html
<script setup>
import { LongdoMapLoad, LongdoMap } from 'longdo-map-vue'

LongdoMapLoad({
  apiKey: 'YOUR_LONGDO_MAP_API_KEY',
})
</script>

<template>
  <longdo-map />
</template>
```
You can import more components if you want, for example:

```js
import { LongdoMapLoad, LongdoMap, LongdoMapMarker, LongdoMapPolyline } from 'longdo-map-vue'
```

## Examples
Add a polygon to Longdo Map:

```html
<script setup>
const locationList = [
  { lon: 99, lat: 14 },
  { lon: 100, lat: 13 },
  { lon: 102, lat: 13 },
  { lon: 103, lat: 14 }
]
</script>

<template>
  <longdo-map>
    <longdo-map-polygon
      :location="locationList"
      :lineWidth="2"
      :lineColor="'rgba(0, 0, 0, 1)'"
      :fillColor="'rgba(255, 0, 0, 0.4)'"
    />
  </longdo-map>
</template>
```

Add multiple markers to Longdo Map:

```html
<template>
  <longdo-map :zoom="10" :last-view="false">
    <longdo-map-marker
      v-for="(item, i) in markers"
      :key="i"
      :location="item.location"
      :title="item.title"
      :detail="item.detail"
    />
  </longdo-map>
</template>
```

Using Longdo Map object:

```html
<script setup>
function loadMap(map) {
  map.Layers.setBase(longdo.Layers.NORMAL)
}
function addMarker(marker) {
  console.log(marker.location())
}
</script>

<template>
  <longdo-map @load="loadMap">
    <longdo-map-marker @add="addMarker" :location="{ lon: 99, lat: 14 }" />
  </longdo-map>
</template>
```

## Components
* [longdo-map](#map)
* [longdo-map-marker](#overlay)
* [longdo-map-dot](#geometry)
* [longdo-map-circle](#geometry)
* [longdo-map-rectangle](#geometry)
* [longdo-map-polyline](#geometry)
* [longdo-map-polycurve](#geometry)
* [longdo-map-polygon](#geometry)

### Map
- [Props](http://api.longdo.com/map/doc/ref.php#MapOptions)
- Event: `@load="Function(object)"`
```html
<longdo-map :zoom="10" :last-view="false" />
```

### Overlay
- [Props](http://api.longdo.com/map/doc/ref.php#MarkerOptions)
- Event: `@add="Function(object)"`
```html
<longdo-map>
  <longdo-map-marker :location="{ lon: 99, lat: 14 }" :title="'Home'" :detail="'My home'" />
</longdo-map>
```

### Geometry
`longdo-map-dot`, `longdo-map-circle`, `longdo-map-rectangle`, `longdo-map-polyline`, `longdo-map-polycurve`, `longdo-map-polygon`

- [Props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
- Event: `@add="Function(object)"`
```html
<longdo-map>
  <longdo-map-polygon
    :location="[{ lon: 100.123, lat: 13.579 }, ...]"
    :lineWidth="2"
    :lineColor="'rgba(0, 0, 0, 1)'"
    :fillColor="'rgba(255, 0, 0, 0.4)'"
  />
</longdo-map>
```

## Documentation
* [Longdo Map API Documentation](https://map.longdo.com/docs/)

## Community
* [Longdo Map API Community - แผนที่ออนไลน์ไทย](https://www.facebook.com/groups/708165893234850)

## Vue 2
```cli
npm i longdo-map-vue@v2
```
[สอนการใช้ Map API ร่วมกับ Vue.js](https://map.longdo.com/blog/2019/12/03/longdo-map-api-vue-js/)
