module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "LongdoMap", function() { return /* reexport */ LongdoMap; });
__webpack_require__.d(__webpack_exports__, "LongdoMapMarker", function() { return /* reexport */ Marker; });
__webpack_require__.d(__webpack_exports__, "LongdoMapDot", function() { return /* reexport */ Dot; });
__webpack_require__.d(__webpack_exports__, "LongdoMapCircle", function() { return /* reexport */ Circle; });
__webpack_require__.d(__webpack_exports__, "LongdoMapRectangle", function() { return /* reexport */ Rectangle; });
__webpack_require__.d(__webpack_exports__, "LongdoMapPolygon", function() { return /* reexport */ Polygon; });
__webpack_require__.d(__webpack_exports__, "LongdoMapPolyline", function() { return /* reexport */ Polyline; });
__webpack_require__.d(__webpack_exports__, "LongdoMapPolycurve", function() { return /* reexport */ Polycurve; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/manager.js
var manager = {
  _apiKey: '',
  _src: 'https://api.longdo.com/map/',
  promise: {},
  load: function load(_ref) {
    var apiKey = _ref.apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? undefined : _ref$src,
        _ref$checkApiKey = _ref.checkApiKey,
        checkApiKey = _ref$checkApiKey === void 0 ? true : _ref$checkApiKey;

    if (typeof window === 'undefined') {
      return;
    }

    if (!window.longdo) {
      if (checkApiKey) {
        this._validateApiKey(apiKey);
      }

      var url = this._src;

      if (src) {
        url = src;
        this._src = src;
      }

      if (apiKey) {
        url += "?key=".concat(apiKey);
      }

      this._apiKey = apiKey;

      this._importLongdoMap(url);
    } else {
      console.warn('Longdo Map API is already loaded');
    }
  },
  initLongdoMap: function initLongdoMap(init) {
    if (window.longdo) {
      init();
    } else {
      throw new Error('Longdo Map API is not found');
    }
  },
  _importLongdoMap: function _importLongdoMap(url) {
    this.promise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');

      script.onload = function () {
        resolve();
      };

      script.onerror = function () {
        reject();
      };

      script.async = true;
      script.src = url;
      document.body.appendChild(script);
    });
  },
  _validateApiKey: function _validateApiKey() {
    var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (typeof apiKey !== 'string' || apiKey === '') {
      throw new Error('Invalid Longdo Map API key');
    }
  }
};
/* harmony default export */ var src_manager = (manager);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a00480de-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=template&id=43ab0db5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"map",staticStyle:{"width":"100%","height":"100%"}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=template&id=43ab0db5&scoped=true&

// CONCATENATED MODULE: ./src/mixins/mapOptions.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var props = {
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
};
/* harmony default export */ var mapOptions = ({
  props: props,
  methods: {
    getMapOptions: function getMapOptions() {
      var options = {};

      for (var key in props) {
        if (this[key] !== null) {
          if (key === 'projection') {
            options.projection = window.longdo.Projections[this.projection];
          } else if (key === 'layer') {
            options.layer = this.getLayers(this.layer);
          } else if (key === 'ui') {
            options.ui = window.longdo.UiComponent[this.ui];
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    },
    getLayers: function getLayers(layers) {
      var result = [];

      var _iterator = _createForOfIteratorHelper(layers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var layer = _step.value;
          result.push(window.longdo.Layers[layer]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var LongdoMapvue_type_script_lang_js_ = ({
  name: 'LongdoMap',
  mixins: [mapOptions],
  data: function data() {
    return {
      map: null,
      mapPromise: null
    };
  },
  created: function created() {
    var self = this;
    this.mapPromise = src_manager.promise;
    this.mapPromise.then(function () {
      src_manager.initLongdoMap(self.initLongdoMap);
    });
  },
  methods: {
    initLongdoMap: function initLongdoMap() {
      var options = this.getMapOptions();
      options.placeholder = this.$refs.map;
      this.map = new window.longdo.Map(options);
      this.$emit('load', this.map);
    }
  },
  init: function init(_ref) {
    var apiKey = _ref.apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? undefined : _ref$src,
        _ref$checkApiKey = _ref.checkApiKey,
        checkApiKey = _ref$checkApiKey === void 0 ? true : _ref$checkApiKey;
    src_manager.load({
      apiKey: apiKey,
      src: src,
      checkApiKey: checkApiKey
    });
  }
});
// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LongdoMapvue_type_script_lang_js_ = (LongdoMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/LongdoMap.vue





/* normalize component */

var component = normalizeComponent(
  components_LongdoMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "43ab0db5",
  null
  
)

/* harmony default export */ var LongdoMap = (component.exports);
// CONCATENATED MODULE: ./src/mixins/childDefault.js
/* harmony default export */ var childDefault = ({
  data: function data() {
    return {
      mapReady: this.$parent.mapPromise
    };
  },
  render: function render() {
    return '';
  }
});
// CONCATENATED MODULE: ./src/mixins/markerOptions.js
var markerOptions_props = {
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
  }
};
/* harmony default export */ var markerOptions = ({
  props: markerOptions_props,
  methods: {
    getMarkerOptions: function getMarkerOptions() {
      var options = {};

      for (var key in markerOptions_props) {
        if (this[key] !== null) {
          if (key === 'weight') {
            var weightVal = window.longdo.OverlayWeight[this.weight];

            if (weightVal) {
              options.weight = weightVal;
            }
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Marker.js


/* harmony default export */ var Marker = ({
  name: 'LongdoMarker',
  mixins: [childDefault, markerOptions],
  data: function data() {
    return {
      marker: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addMarker(self.location, self.getMarkerOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.marker);
  },
  methods: {
    addMarker: function addMarker(location, options) {
      this.marker = new window.longdo.Marker(location, options);
      this.$parent.map.Overlays.add(this.marker);
      this.$emit('add', this.marker);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/geometryOptions.js
var geometryOptions_props = {
  location: {
    type: Object | Array,
    default: null
  },
  radius: {
    type: Number,
    default: null
  },
  size: {
    type: Number | Object,
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
    type: String,
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
};
/* harmony default export */ var geometryOptions = ({
  props: geometryOptions_props,
  methods: {
    getGeometryOptions: function getGeometryOptions() {
      var options = {};

      for (var key in geometryOptions_props) {
        if (this[key] !== null) {
          if (key === 'weight') {
            var weightVal = window.longdo.OverlayWeight[this.weight];

            if (weightVal) {
              options.weight = weightVal;
            }
          } else if (key === 'lineStyle') {
            options.lineStyle = window.longdo.LineStyle[this.lineStyle];
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Dot.js


/* harmony default export */ var Dot = ({
  name: 'LongdoDot',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      dot: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addDot(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.dot);
  },
  methods: {
    addDot: function addDot(location, options) {
      this.dot = new window.longdo.Dot(location, options);
      this.$parent.map.Overlays.add(this.dot);
      this.$emit('add', this.dot);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Circle.js


/* harmony default export */ var Circle = ({
  name: 'LongdoCircle',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      circle: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addCircle(self.location, self.radius, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.circle);
  },
  methods: {
    addCircle: function addCircle(location, radius, options) {
      this.circle = new window.longdo.Circle(location, radius, options);
      this.$parent.map.Overlays.add(this.circle);
      this.$emit('add', this.circle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Rectangle.js


/* harmony default export */ var Rectangle = ({
  name: 'LongdoRectangle',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      rectangle: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addRectangle(self.location, self.size, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.rectangle);
  },
  methods: {
    addRectangle: function addRectangle(location, size, options) {
      this.rectangle = new window.longdo.Rectangle(location, size, options);
      this.$parent.map.Overlays.add(this.rectangle);
      this.$emit('add', this.rectangle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Polygon.js


/* harmony default export */ var Polygon = ({
  name: 'LongdoPolygon',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polygon: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolygon(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polygon);
  },
  methods: {
    addPolygon: function addPolygon(location, options) {
      this.polygon = new window.longdo.Polygon(location, options);
      this.$parent.map.Overlays.add(this.polygon);
      this.$emit('add', this.polygon);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Polyline.js


/* harmony default export */ var Polyline = ({
  name: 'LongdoPolyline',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polyline: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolyline(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polyline);
  },
  methods: {
    addPolyline: function addPolyline(location, options) {
      this.polyline = new window.longdo.Polyline(location, options);
      this.$parent.map.Overlays.add(this.polyline);
      this.$emit('add', this.polyline);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Polycurve.js


/* harmony default export */ var Polycurve = ({
  name: 'LongdoPolycurve',
  mixins: [childDefault, geometryOptions],
  data: function data() {
    return {
      polycurve: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addPolycurve(self.location, self.getGeometryOptions());
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Overlays.remove(this.polycurve);
  },
  methods: {
    addPolycurve: function addPolycurve(location, options) {
      this.polycurve = new window.longdo.Polycurve(location, options);
      this.$parent.map.Overlays.add(this.polycurve);
      this.$emit('add', this.polycurve);
    }
  }
});
// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var components = {
  install: function install(Vue, userOptions) {
    var options = _objectSpread({
      installComponents: true,
      tagPrefix: ''
    }, userOptions);

    if (options.load) {
      src_manager.load(options.load);
    }

    if (options.installComponents) {
      var prefix = options.tagPrefix !== '' ? "".concat(options.tagPrefix, "-") : options.tagPrefix;
      Vue.component("".concat(prefix, "longdo-map"), LongdoMap);
      Vue.component("".concat(prefix, "longdo-map-marker"), Marker);
      Vue.component("".concat(prefix, "longdo-map-dot"), Dot);
      Vue.component("".concat(prefix, "longdo-map-circle"), Circle);
      Vue.component("".concat(prefix, "longdo-map-rectangle"), Rectangle);
      Vue.component("".concat(prefix, "longdo-map-polygon"), Polygon);
      Vue.component("".concat(prefix, "longdo-map-polyline"), Polyline);
      Vue.component("".concat(prefix, "longdo-map-polycurve"), Polycurve);
    }
  }
};
/* harmony default export */ var src_0 = (components);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=longdo-map-vue.common.js.map