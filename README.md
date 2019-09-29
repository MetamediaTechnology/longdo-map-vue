# longdo-map-vue
[Longdo Map](https://map.longdo.com/) component for Vue.js

## Getting started

### Requirements
- [Vue](https://github.com/vuejs/vue)

### Installation
You can easily install this by using `npm`
```cli
npm i longdo-map-vue
```

### Usage
[Get your Longdo Map API key](https://map.longdo.com/docs/javascript/getapi).

#### Import globally
```js
import Vue from 'vue'
import LongdoMap from 'longdo-map-vue'

Vue.use(LongdoMap, {
    load: {
        apiKey: [YOUR_LONGDO_MAP_API_KEY]
    }
})
```
and use in your Vue component template like this
```html
<template>
    <longdo-map/>
</template>
```

#### Import locally in your component
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
```js
# In your methods section
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

## Useful links
[Longdo Map](https://map.longdo.com/products)
[Longdo Map API Documentation](https://map.longdo.com/docs/)
