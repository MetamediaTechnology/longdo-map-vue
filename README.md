![Longdo Map Logo](https://map.longdo.com/themes/longdo/logo.png)

# longdo-map-vue
> [Longdo Map](https://map.longdo.com/) component for Vue.js
![npm](https://img.shields.io/npm/v/longdo-map-vue)
![npm](https://img.shields.io/npm/dt/longdo-map-vue)
![npm](https://img.shields.io/npm/l/longdo-map-vue)

## Getting started

### Requirement
- [Vue](https://github.com/vuejs/vue)

### Installation
Easily install by using `npm`
```cli
npm i longdo-map-vue
```

### Usage
[Get your Longdo Map API key](https://map.longdo.com/docs/javascript/getapi).

Register component globally
```js
import Vue from 'vue'
import LongdoMap from 'longdo-map-vue'

Vue.use(LongdoMap, {
    load: {
        apiKey: [YOUR_LONGDO_MAP_API_KEY]
    }
})
```
```html
<template>
    <longdo-map/>
</template>
```
or register locally in your component
```js
import {LongdoMap} from 'longdo-map-vue'

export default {
  name: 'foo',
  components: {
    'longdo-map': LongdoMap
  }
}
```
```html
<template>
    <longdo-map :apiKey="[YOUR_LONGDO_MAP_API_KEY]"/>
</template>
```

### Example

```html
<template>
    <longdo-map @onload="addMarker"/>
</template>
```
`@onload` will call once Longdo Map object is loaded.
```js
// In your methods section
methods: {
    addMarker (map) {
        // set Longdo Map object for later use
        this.map = map

        // add a marker to Longdo Map
        let marker = new longdo.Marker({ lon: 100.56, lat: 13.74 })
        this.map.Overlays.add(marker)
    }
}
```

## Incoming features
* Marker component
* Geometry component (such as polyline, polygon and more.)

## Useful links
* [Longdo Map](https://map.longdo.com/products)
* [Longdo Map API Documentation](https://map.longdo.com/docs/)
