export function useGeometryProps() {
  return {
    location: {
      type: [Object, Array],
      default: null
    },
    radius: {
      type: Number,
      default: null
    },
    size: {
      type: [Number, Object],
      default: null
    },
    title: {
      type: String,
      default: null
    },
    detail: {
      type: String,
      default: null
    },
    label: {
      type: [String, Boolean],
      default: null
    },
    labelOptions: {
      type: Object,
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
    lineWidth: {
      type: Number,
      default: null
    },
    lineColor: {
      type: String,
      default: null
    },
    fillColor: {
      type: String,
      default: null
    },
    lineStyle: {
      type: String,
      default: null
    },
    pivot: {
      type: Object,
      default: null
    },
    clickable: {
      type: Boolean,
      default: null
    },
    editable: {
      type: Boolean,
      default: null
    },
    pointer: {
      type: Boolean,
      default: null
    },
    draggable: {
      type: Boolean,
      default: null
    },
    rotatable: {
      type: Boolean,
      default: null
    },
    weight: {
      type: String,
      default: null
    },
    texture: {
      type: String,
      default: null
    },
    textureAlpha: {
      type: Number,
      default: null
    },
    linePattern: {
      type: String,
      default: null
    }
  }
}

export function useGeometryOptions(props) {
  const options = {}
  for (let key in props) {
    if (props[key] !== null) {
      if (key === 'weight') {
        let weightVal = window.longdo.OverlayWeight[props.weight]
        if (weightVal) {
          options.weight = weightVal
        }
      } else if (key === 'lineStyle') {
        options.lineStyle = window.longdo.LineStyle[props.lineStyle]
      } else {
        options[key] = props[key]
      }
    }
  }
  return options
}

