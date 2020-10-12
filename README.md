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
LongdoMap.init({ apiKey: 'YOUR_LONGDO_MAP_API_KEY' })

export default {
  name: 'Foo',
  components: {
      LongdoMap
  }
}
```
You can import more components if you want, for example:

`import { LongdoMap, LongdoMapMarker } from 'longdo-map-vue'`

### Examples
Add a polygon to Longdo Map:

```html
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
```js
export default {
    data() {
        return {
            locationList: [
                { lon: 99, lat: 14 },
                { lon: 100, lat: 13 },
                { lon: 102, lat: 13 },
                { lon: 103, lat: 14 }
            ]
        }
    }
}
```

Add multiple markers to Longdo Map:

```html
<template>
    <longdo-map :zoom="10" :lastView="false">
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

### Components
* longdo-map [props](http://api.longdo.com/map/doc/ref.php#MapOptions)
* longdo-map-marker [props](http://api.longdo.com/map/doc/ref.php#MarkerOptions)
* longdo-map-dot [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
* longdo-map-circle [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
* longdo-map-rectangle [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
* longdo-map-polyline [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
* longdo-map-polycurve [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)
* longdo-map-polygon [props](http://api.longdo.com/map/doc/ref.php#GeometryOptions)

## Documentation
* [สอนการใช้ Map API ร่วมกับ Vue.js](https://map.longdo.com/blog/2019/12/03/longdo-map-api-vue-js/)

## References
* [Longdo Map](https://map.longdo.com/products)
* [Longdo Map API Documentation](https://map.longdo.com/docs/)
