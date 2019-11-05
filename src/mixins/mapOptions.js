const props = {
  projection: {
    type: String,
    default: null
  },
  layer: {
    type: Array,
    default: null
  },
  zoom: {
    type: Number,
    default: null
  },
  zoomRange: {
    type: Object,
    default: null
  },
  location: {
    type: Object,
    default: null
  },
  ui: {
    type: String,
    default: null
  },
  input: {
    type: Boolean,
    default: null
  },
  autoResize: {
    type: Boolean,
    default: null
  },
  lastView: {
    type: Boolean,
    default: null
  },
  smoothZoom: {
    type: Boolean,
    default: null
  },
  language: {
    type: String,
    default: null
  }
}

export default {
  props: props,
  methods: {
    getMapOptions () {
      let options = {}
      for (let key in props) {
        if (this[key] !== null) {
          if (key === 'projection') {
            options.projection = window.longdo.Projections[this.projection]
          } else if (key === 'layer') {
            options.layer = this.getLayers(this.layer)
          } else if (key === 'ui') {
            options.ui = window.longdo.UiComponent[this.ui]
          } else {
            options[key] = this[key]
          }
        }
      }
      return options
    },
    getLayers (layers) {
      let result = []
      for (let layer of layers) {
        result.push(window.longdo.Layers[layer])
      }
      return result
    }
  }
}
