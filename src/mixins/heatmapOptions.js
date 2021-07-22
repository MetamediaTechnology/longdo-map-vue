const props = {
  data: {
    type: Object,
    default: null
  },
  backgroundColor: {
    type: String,
    default: null
  },
  gradient: {
    type: Object,
    default: null
  },
  radius: {
    type: Number,
    default: null
  },
  opacity: {
    type: Number,
    default: null
  },
  maxOpacity: {
    type: Number,
    default: null
  },
  minOpacity: {
    type: Number,
    default: null
  },
  onExtremaChange: {
    type: Function,
    default: null
  },
  blur: {
    type: Number,
    default: null
  },
  xField: {
    type: String,
    default: null
  },
  yField: {
    type: String,
    default: null
  },
  valueField: {
    type: String,
    default: null
  },
  scaleRadius: {
    type: Boolean,
    default: null
  },
  useLocalExtrema: {
    type: Boolean,
    default: null
  }
}

export default {
  props: props,
  methods: {
    getHeatmapOptions () {
      let options = {}
      for (let key in props) {
        if (key === 'data') {
          continue
        } else if (this[key] !== null) {
          options[key] = this[key]
        }
      }
      return options
    }
  }
}
