![Longdo Map Logo](https://map.longdo.com/themes/longdo/logo.png)
test
# longdo-map-vue
> [Longdo Map](https://map.longdo.com/) component for Vue.js

![npm](https://img.shields.io/npm/v/longdo-map-vue)
![npm](https://img.shields.io/npm/dt/longdo-map-vue)
![npm](https://img.shields.io/npm/l/longdo-map-vue)

## Table of Contents
- [Getting Started](#getting-started)
  - [Requirement](#requirement)
  - [Installation](#installation)
  - [Usage](#usage)
- [Examples](#examples)
- [Components](#components)
- [Documentation](#documentation)
- [References](#references)

## Getting Started

### Requirement
- [Vue](https://vuejs.org/)
> The current version of Longdo Map Vue does not support Vue 3.

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

## Examples
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

Using Longdo Map object:

```html
<template>
    <longdo-map @load="loadMap">
        <longdo-map-marker @add="addMarker" :location="{ lon: 99, lat: 14 }" />
    </longdo-map>
</template>
```
```js
export default {
    methods: {
        loadMap (map) {
            map.Layers.setBase(longdo.Layers.NORMAL)
        },
        addMarker (marker) {
            console.log(marker.location())
        }
    }
}
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
* [longdo-map-menu-bar](#menu-bar)
* [longdo-map-tag-panel](#tag-panel)
* [longdo-map-custom-control](#custom-control)
* [longdo-map-lock-map](#lock-map)
* [longdo-map-lock-screen](#lock-screen)
* [longdo-map-custom-ui](#custom-ui)
* [longdo-map-marker-cluster](#marker-cluster)
* [longdo-map-heatmap](#heatmap)
* [longdo-map-panorama](#panorama)

### Map
- [Props](http://api.longdo.com/map/doc/ref.php#MapOptions)
- Event: `@load="Function(object)"`
```html
<longdo-map :zoom="10" :lastView="false" />
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
`longdo-map-dot`, `longdo-map-circle`, `longdo-map-rectangle`,

`longdo-map-polyline`, `longdo-map-polycurve`, `longdo-map-polygon`

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

### Menu Bar
- [Props](http://api.longdo.com/map/doc/ref.php#MenuBarOptions)
```html
<longdo-map>
    <longdo-map-menu-bar :button="[{ label: 'first', value: 1 }]" :dropdown="[{ label: 'Normal' }]" :dropdownLabel="'more'" :change="handlerFunction" />
</longdo-map>
```
Handler function(currentMenuItem: Object, lastMenuItem: Object): void when user change menu

### Tag Panel
- [Props](http://api.longdo.com/map/doc/ref.php#TagPanelOptions)
```html
<longdo-map>
    <longdo-map-tag-panel :tag="['temple', 'sizzler']" />
</longdo-map>
```

### Custom Control
- [Props](http://api.longdo.com/map/doc/ref.php#CustomControlOptions)
```html
<longdo-map>
    <longdo-map-custom-control :html="'<button>button</button>'" />
</longdo-map>
```

### Lock Map
```html
<longdo-map>
    <longdo-map-lock-map :lock="Boolean" />
</longdo-map>
```

### Lock Screen
```html
<longdo-map>
    <longdo-map-lock-screen v-model="Boolean" />
</longdo-map>
```

### Custom UI
- Props: `vertical`, `horizontal` ('top', 'right', 'bottom', 'left', 'center')
```html
<longdo-map>
    <longdo-map-custom-ui :vertical="'bottom'" :horizontal="'center'">
        <div>Longdo Map</div>
    </longdo-map-custom-ui>
</longdo-map>
```

### Marker Cluster
```html
<longdo-map>
    <longdo-map-marker-cluster :markerList="[{ location: { lat: 13.745026, lon: 100.523041 }, options: { icon: {} } }, ... ]" />
</longdo-map>
```
[More](https://github.com/MetamediaTechnology/markercluster-longdo-map)

### Heatmap
```html
<longdo-map>
    <longdo-map-heatmap
        :data="{ max: 10, data:[{ lat:60.087195, lon:84.767761, value:8 }, ...] }"
        :radius="2"
        :maxOpacity="0.5"
        :scaleRadius="true"
        :userLocalExtrema="true"
    />
</longdo-map>
```
[More](https://github.com/MetamediaTechnology/heatmap-longdo-map)

### Panorama
- Event: `@load="Function(object)"`
```html
<longdo-map-panorama
    :map="map"
    :showPath="true"
/>
<longdo-map @load="obj => map = obj" />
```

## Documentation
* [สอนการใช้ Map API ร่วมกับ Vue.js](https://map.longdo.com/blog/2019/12/03/longdo-map-api-vue-js/)

## References
* [Longdo Map](https://map.longdo.com/products)
* [Longdo Map API Documentation](https://map.longdo.com/docs/)
