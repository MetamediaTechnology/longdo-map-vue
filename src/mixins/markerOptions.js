const props = {
  location: {
    type: Object,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  icon: {
    type: Object,
    default: null
  },
  detail: {
    type: String,
    default: null
  },
  popup: {
    type: Object,
    default: null
  },
  visibleRange: {
    type: Object,
    default: null
  },
  clickable: {
    type: Boolean,
    default: null
  },
  draggable: {
    type: Boolean,
    default: null
  },
  weight: {
    type: String,
    default: null
  },
  rotate: {
    type: Number,
    default: null
  },
  iconStyle: {
    type: String,
    default: null
  }
}

export default {
  props: props,
  methods: {
    getMarkerOptions () {
      let options = {}
      for (let key in props) {
        if (this[key] !== null) {
          if (key === 'weight') {
            let weightVal = window.longdo.OverlayWeight[this.weight]
            if (weightVal) {
              options.weight = weightVal
            }
          } else if (key === 'iconStyle') {
            options.style = this[key]
          } else {
            options[key] = this[key]
          }
        }
      }
      return options
    }
  }
}
