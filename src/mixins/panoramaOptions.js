const props = {
  map: {
    required: true
  },
  showPath: {
    type: Boolean,
    default: null
  },
  getLength: {
    type: Boolean,
    default: null
  },
  showPathDetail: {
    type: Boolean,
    default: null
  },
  location: {
    type: Object,
    default: null
  },
  tilt: {
    type: Number,
    default: null
  },
  rhead: {
    type: Number,
    default: null
  },
  fixDirection: {
    type: Boolean,
    default: null
  },
  messageBox: {
    type: Boolean,
    default: null
  },
  debug: {
    type: Boolean,
    default: null
  },
  callBack: {
    type: Object,
    default: null
  },
  sphere: {
    type: Boolean,
    default: null
  },
  seekStep: {
    type: Number,
    default: null
  },
  seekPlayStep: {
    type: Number,
    default: null
  },
  server: {
    type: String,
    default: null
  },
  wsURL: {
    type: String,
    default: null
  },
  roadPathURL: {
    type: String,
    default: null
  },
  imageURL: {
    type: String,
    default: null
  },
  imageHDURL: {
    type: String,
    default: null
  },
  isHD: {
    type: Boolean,
    default: null
  },
  autoStart: {
    type: Boolean,
    default: null
  },
  lang: {
    type: String,
    default: null
  },
  mmsLayer: {
    type: Object,
    default: null
  },
  forceWebgl1: {
    type: Boolean,
    default: null
  },
  loadingUi: {
    type: Boolean,
    default: null
  },
  panoControlUi: {
    type: Boolean,
    default: null
  },
  panoWidgetUi: {
    type: Boolean,
    default: null
  },
  panoRenderUi: {
    type: Boolean,
    default: null
  },
  panoDirectionUi: {
    type: Boolean,
    default: null
  },
  hasLaser: {
    type: Boolean,
    default: null
  },
  alwaysDrawLaserUsingUV: {
    type: Boolean,
    default: null
  },
  measureLineVerticalAngle: {
    type: Boolean,
    default: null
  },
  showSurveyPath: {
    type: Boolean,
    default: null
  },
  alwaysShowPath: {
    type: Boolean,
    default: null
  }
}

export default {
  props: props,
  methods: {
    getPanoramaOptions () {
      let options = {}
      for (let key in props) {
        if (this[key] !== null) {
          options[key] = this[key]
        }
      }
      return options
    },
  }
}
