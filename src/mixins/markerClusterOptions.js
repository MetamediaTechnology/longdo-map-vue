const props = {
  markerList: {
    type: Array,
    default: []
  },
  maxZoom: {
    type: Number,
    default: null
  },
  minClusterSize: {
    type: Number,
    default: null
  },
  textColor: {
    type: String,
    default: null
  },
  customOuterClusterCSS: {
    type: Object,
    default: null
  },
  customInnerClusterCSS: {
    type: Object,
    default: null
  },
  customTextClusterCSS: {
    type: Object,
    default: null
  },
  gridSize: {
    type: Number,
    default: null
  },
  clusterRadius: {
    type: Number,
    default: null
  },
  averageCenter: {
    type: Boolean,
    default: null
  },
  drawMarkerArea: {
    type: Boolean,
    default: null
  },
  swarmModeEnabled: {
    type: Boolean,
    default: null
  },
  swarmAlg: {
    type: Number,
    default: null
  },
  styles: {
    type: Array,
    default: null
  },
  swarmGridLength: {
    type: Number,
    default: null
  },
  swarmMarkersMaxLimit: {
    type: Number,
    default: null
  },
  swarmMarkersAmountAdjust: {
    type: Boolean,
    default: null
  },
  swarmMarkersMaxAmountPerTile: {
    type: Number,
    default: null
  },
  swarmMarkersConstPerGrid: {
    type: Number,
    default: null
  },
  // custom options
  defaultCss: {
    type: Boolean,
    default: true
  }
}

export default {
  props: props,
  methods: {
    getMarkerClusterOptions () {
      let options = {}
      for (let key in props) {
        if (key === 'markerList') {
          continue
        } else if (this[key] !== null) {
          options[key] = this[key]
        }
      }
      return options
    }
  }
}
