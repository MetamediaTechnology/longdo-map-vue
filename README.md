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
You can easily install by using `npm`
```cli
npm i longdo-map-vue
```

### Usage
First, you need to get a [Longdo Map API key](https://map.longdo.com/docs/javascript/getapi). 

Then, after you have Longdo Map API key and component installed, you need to register it to your Vue project.

There are two ways of registering component:

#### Register component globally
This is a recommended way of registering component

In your `main.js` or similar file:
```js
import Vue from 'vue'
import LongdoMap from 'longdo-map-vue'

Vue.use(LongdoMap, {
    load: {
        apiKey: 'YOUR_LONGDO_MAP_API_KEY'
    }
})
```
Then you can use `<longdo-map/>` in your component template.
```html
<template>
    <longdo-map/>
</template>
```

#### Register locally in your component
In your component file, for example `Foo.vue`:
```html
<template>
    <longdo-map/>
</template>
```
```js
import { LongdoMap } from 'longdo-map-vue'
LongdoMap.init('YOUR_LONGDO_MAP_API_KEY')

export default {
  name: 'Foo',
  components: {
    'longdo-map': LongdoMap
  }
}
```

### Example
Here is an example of how to add a marker to Longdo Map:

```html
<template>
    <longdo-map :mapOptions="{ zoom: 10, lastView: false }" @load="addMarker"/>
</template>
```
`@load` will call once Longdo Map object is loaded.
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

## References
* [Longdo Map](https://map.longdo.com/products)
* [Longdo Map API Documentation](https://map.longdo.com/docs/)
