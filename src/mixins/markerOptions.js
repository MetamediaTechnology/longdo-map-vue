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
    type: Number,
    default: null
  },
  rotate: {
    type: Number,
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
            options.weight = window.longdo.OverlayWeight[this.weight]
          } else {
            options[key] = this[key]
          }
        }
      }
      return options
    }
  }
}
