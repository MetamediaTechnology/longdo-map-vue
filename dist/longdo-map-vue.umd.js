(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["longdo-map-vue"] = factory();
	else
		root["longdo-map-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "0384":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-custom-ui[data-v-ec61ad9c]{position:absolute}.ldmap-vue-custom-ui-top[data-v-ec61ad9c]{top:0}.ldmap-vue-custom-ui-bottom[data-v-ec61ad9c]{bottom:0}.ldmap-vue-custom-ui-right[data-v-ec61ad9c]{right:0}.ldmap-vue-custom-ui-left[data-v-ec61ad9c]{left:0}.ldmap-vue-custom-ui-center-x[data-v-ec61ad9c]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ldmap-vue-custom-ui-center-y[data-v-ec61ad9c]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ldmap-vue-custom-ui-center[data-v-ec61ad9c]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0fa1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("23f7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("9b0f5784", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "117a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_f7d580b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0fa1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_f7d580b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_f7d580b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "21be":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-container[data-v-b3574a18]{position:relative;font-family:Tahoma,sans-serif}.ldmap-vue-container[data-v-b3574a18],.ldmap-vue-placeholder[data-v-b3574a18]{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "23f7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-lock-screen[data-v-f7d580b0]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.ldmap-vue-lock-screen-unlock[data-v-f7d580b0]{pointer-events:none}.ldmap-vue-lock-screen-button-container[data-v-f7d580b0]{display:inline-block;pointer-events:auto}.ldmap-vue-lock-screen-button[data-v-f7d580b0]{position:absolute;bottom:0;left:0;color:#fff;background-color:#2a5082;font-size:.875rem;line-height:1.25rem;font-weight:700;border:0;border-radius:.25rem;margin:0 0 1rem 1rem;padding:.5rem 1rem .5rem 1rem;cursor:pointer;opacity:.05;-webkit-box-shadow:2px 3px 4px rgba(0,0,0,.2);box-shadow:2px 3px 4px rgba(0,0,0,.2);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.5s;transition-duration:.5s}.ldmap-vue-lock-screen:hover .ldmap-vue-lock-screen-button[data-v-f7d580b0]{opacity:1}.ldmap-vue-lock-screen-area[data-v-f7d580b0]{height:100%;width:100%;overflow:hidden;opacity:0;background-color:rgba(0,0,0,.5);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.5s;transition-duration:.5s}.ldmap-vue-lock-screen-area-message[data-v-f7d580b0]{top:50%;position:relative;padding:0 .5rem;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);text-align:center;font-size:1.5rem;line-height:2rem;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ldmap-vue-lock-screen-area-active[data-v-f7d580b0]{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "33be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panorama_vue_vue_type_style_index_0_id_ae93e2c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77e7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panorama_vue_vue_type_style_index_0_id_ae93e2c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panorama_vue_vue_type_style_index_0_id_ae93e2c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3515":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_b3574a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e887");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_b3574a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_b3574a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3c6a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e6b4");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("675c9ed0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4544":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUi_vue_vue_type_style_index_0_id_ec61ad9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f84");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUi_vue_vue_type_style_index_0_id_ec61ad9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomUi_vue_vue_type_style_index_0_id_ec61ad9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "60cc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-panorama{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6f84":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0384");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7f9adbbc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7397":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * heatmap.js v2.0.5 | JavaScript Heatmap Library
 *
 * Copyright 2008-2016 Patrick Wied <heatmapjs@patrick-wied.at> - All rights reserved.
 * Dual licensed under MIT and Beerware license 
 *
 * :: 2019-08-29 15:19
 */
(function (t, a, e) {
  if ( true && module.exports) {
    module.exports = e();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})("h337", this, function () {
  var n = {
    defaultRadius: 40,
    defaultRenderer: "canvas2d",
    defaultGradient: {
      .25: "rgb(0,0,255)",
      .55: "rgb(0,255,0)",
      .85: "yellow",
      1: "rgb(255,0,0)"
    },
    defaultMaxOpacity: 1,
    defaultMinOpacity: 0,
    defaultBlur: .85,
    defaultXField: "x",
    defaultYField: "y",
    defaultValueField: "value",
    plugins: {}
  };

  var s = function t() {
    var a = function t(a) {
      this._coordinator = {};
      this._data = [];
      this._radi = [];
      this._min = 10;
      this._max = 1;
      this._xField = a["xField"] || a.defaultXField;
      this._yField = a["yField"] || a.defaultYField;
      this._valueField = a["valueField"] || a.defaultValueField;

      if (a["radius"]) {
        this._cfgRadius = a["radius"];
      }
    };

    var u = n.defaultRadius;
    a.prototype = {
      _organiseData: function _organiseData(t, a) {
        var e = t[this._xField];
        var i = t[this._yField];
        var r = this._radi;
        var n = this._data;
        var s = this._max;
        var h = this._min;
        var o = t[this._valueField] || 1;
        var d = t.radius || this._cfgRadius || u;

        if (!n[e]) {
          n[e] = [];
          r[e] = [];
        }

        if (!n[e][i]) {
          n[e][i] = o;
          r[e][i] = d;
        } else {
          n[e][i] += o;
        }

        var l = n[e][i];

        if (l > s) {
          if (!a) {
            this._max = l;
          } else {
            this.setDataMax(l);
          }

          return false;
        } else if (l < h) {
          if (!a) {
            this._min = l;
          } else {
            this.setDataMin(l);
          }

          return false;
        } else {
          return {
            x: e,
            y: i,
            value: o,
            radius: d,
            min: h,
            max: s
          };
        }
      },
      _unOrganizeData: function _unOrganizeData() {
        var t = [];
        var a = this._data;
        var e = this._radi;

        for (var i in a) {
          for (var r in a[i]) {
            t.push({
              x: i,
              y: r,
              radius: e[i][r],
              value: a[i][r]
            });
          }
        }

        return {
          min: this._min,
          max: this._max,
          data: t
        };
      },
      _onExtremaChange: function _onExtremaChange() {
        this._coordinator.emit("extremachange", {
          min: this._min,
          max: this._max
        });
      },
      addData: function addData() {
        if (arguments[0].length > 0) {
          var t = arguments[0];
          var a = t.length;

          while (a--) {
            this.addData.call(this, t[a]);
          }
        } else {
          var e = this._organiseData(arguments[0], true);

          if (e) {
            if (this._data.length === 0) {
              this._min = this._max = e.value;
            }

            this._coordinator.emit("renderpartial", {
              min: this._min,
              max: this._max,
              data: [e]
            });
          }
        }

        return this;
      },
      setData: function setData(t) {
        var a = t.data;
        var e = a.length;
        this._data = [];
        this._radi = [];

        for (var i = 0; i < e; i++) {
          this._organiseData(a[i], false);
        }

        this._max = t.max;
        this._min = t.min || 0;

        this._onExtremaChange();

        this._coordinator.emit("renderall", this._getInternalData());

        return this;
      },
      removeData: function removeData() {},
      setDataMax: function setDataMax(t) {
        this._max = t;

        this._onExtremaChange();

        this._coordinator.emit("renderall", this._getInternalData());

        return this;
      },
      setDataMin: function setDataMin(t) {
        this._min = t;

        this._onExtremaChange();

        this._coordinator.emit("renderall", this._getInternalData());

        return this;
      },
      setCoordinator: function setCoordinator(t) {
        this._coordinator = t;
      },
      _getInternalData: function _getInternalData() {
        return {
          max: this._max,
          min: this._min,
          data: this._data,
          radi: this._radi
        };
      },
      getData: function getData() {
        return this._unOrganizeData();
      }
    };
    return a;
  }();

  var e = function t() {
    var s = function s(t) {
      var a = t.gradient || t.defaultGradient;
      var e = document.createElement("canvas");
      var i = e.getContext("2d");
      e.width = 256;
      e.height = 1;
      var r = i.createLinearGradient(0, 0, 256, 1);

      for (var n in a) {
        r.addColorStop(n, a[n]);
      }

      i.fillStyle = r;
      i.fillRect(0, 0, 256, 1);
      return i.getImageData(0, 0, 256, 1).data;
    };

    var f = function f(t, a) {
      var e = document.createElement("canvas");
      var i = e.getContext("2d");
      var r = t;
      var n = t;
      e.width = e.height = t * 2;

      if (a == 1) {
        i.beginPath();
        i.arc(r, n, t, 0, 2 * Math.PI, false);
        i.fillStyle = "rgba(0,0,0,1)";
        i.fill();
      } else {
        var s = i.createRadialGradient(r, n, t * a, r, n, t);
        s.addColorStop(0, "rgba(0,0,0,1)");
        s.addColorStop(1, "rgba(0,0,0,0)");
        i.fillStyle = s;
        i.fillRect(0, 0, 2 * t, 2 * t);
      }

      return e;
    };

    var a = function a(t) {
      var a = [];
      var e = t.min;
      var i = t.max;
      var r = t.radi;
      var t = t.data;
      var n = Object.keys(t);
      var s = n.length;

      while (s--) {
        var h = n[s];
        var o = Object.keys(t[h]);
        var d = o.length;

        while (d--) {
          var l = o[d];
          var u = t[h][l];
          var _ = r[h][l];
          a.push({
            x: h,
            y: l,
            value: u,
            radius: _
          });
        }
      }

      return {
        min: e,
        max: i,
        data: a
      };
    };

    function e(t) {
      var a = t.container;
      var e = this.shadowCanvas = document.createElement("canvas");
      var i = this.canvas = t.canvas || document.createElement("canvas");
      var r = this._renderBoundaries = [1e4, 1e4, 0, 0];
      var n = getComputedStyle(t.container) || {};
      i.className = "heatmap-canvas";
      this._width = i.width = e.width = t.width || +n.width.replace(/px/, "");
      this._height = i.height = e.height = t.height || +n.height.replace(/px/, "");
      this.shadowCtx = e.getContext("2d");
      this.ctx = i.getContext("2d");
      i.style.cssText = e.style.cssText = "position:absolute;left:0;top:0;";
      a.style.position = "relative";
      a.appendChild(i);
      this._palette = s(t);
      this._templates = {};

      this._setStyles(t);
    }

    e.prototype = {
      renderPartial: function renderPartial(t) {
        if (t.data.length > 0) {
          this._drawAlpha(t);

          this._colorize();
        }
      },
      renderAll: function renderAll(t) {
        this._clear();

        if (t.data.length > 0) {
          this._drawAlpha(a(t));

          this._colorize();
        }
      },
      _updateGradient: function _updateGradient(t) {
        this._palette = s(t);
      },
      updateConfig: function updateConfig(t) {
        if (t["gradient"]) {
          this._updateGradient(t);
        }

        this._setStyles(t);
      },
      setDimensions: function setDimensions(t, a) {
        this._width = t;
        this._height = a;
        this.canvas.width = this.shadowCanvas.width = t;
        this.canvas.height = this.shadowCanvas.height = a;
      },
      _clear: function _clear() {
        this.shadowCtx.clearRect(0, 0, this._width, this._height);
        this.ctx.clearRect(0, 0, this._width, this._height);
      },
      _setStyles: function _setStyles(t) {
        this._blur = t.blur == 0 ? 0 : t.blur || t.defaultBlur;

        if (t.backgroundColor) {
          this.canvas.style.backgroundColor = t.backgroundColor;
        }

        this._width = this.canvas.width = this.shadowCanvas.width = t.width || this._width;
        this._height = this.canvas.height = this.shadowCanvas.height = t.height || this._height;
        this._opacity = (t.opacity || 0) * 255;
        this._maxOpacity = (t.maxOpacity || t.defaultMaxOpacity) * 255;
        this._minOpacity = (t.minOpacity || t.defaultMinOpacity) * 255;
        this._useGradientOpacity = !!t.useGradientOpacity;
      },
      _drawAlpha: function _drawAlpha(t) {
        var a = this._min = t.min;
        var e = this._max = t.max;
        var t = t.data || [];
        var i = t.length;
        var r = 1 - this._blur;

        while (i--) {
          var n = t[i];
          var s = n.x;
          var h = n.y;
          var o = n.radius;
          var d = Math.min(n.value, e);
          var l = s - o;
          var u = h - o;
          var _ = this.shadowCtx;
          var c;

          if (!this._templates[o]) {
            this._templates[o] = c = f(o, r);
          } else {
            c = this._templates[o];
          }

          var v = (d - a) / (e - a);
          _.globalAlpha = v < .01 ? .01 : v;

          _.drawImage(c, l, u);

          if (l < this._renderBoundaries[0]) {
            this._renderBoundaries[0] = l;
          }

          if (u < this._renderBoundaries[1]) {
            this._renderBoundaries[1] = u;
          }

          if (l + 2 * o > this._renderBoundaries[2]) {
            this._renderBoundaries[2] = l + 2 * o;
          }

          if (u + 2 * o > this._renderBoundaries[3]) {
            this._renderBoundaries[3] = u + 2 * o;
          }
        }
      },
      _colorize: function _colorize() {
        var t = this._renderBoundaries[0];
        var a = this._renderBoundaries[1];
        var e = this._renderBoundaries[2] - t;
        var i = this._renderBoundaries[3] - a;
        var r = this._width;
        var n = this._height;
        var s = this._opacity;
        var h = this._maxOpacity;
        var o = this._minOpacity;
        var d = this._useGradientOpacity;

        if (t < 0) {
          t = 0;
        }

        if (a < 0) {
          a = 0;
        }

        if (t + e > r) {
          e = r - t;
        }

        if (a + i > n) {
          i = n - a;
        }

        var l = this.shadowCtx.getImageData(t, a, e, i);
        var u = l.data;
        var _ = u.length;
        var c = this._palette;

        for (var v = 3; v < _; v += 4) {
          var f = u[v];
          var g = f * 4;

          if (!g) {
            continue;
          }

          var m;

          if (s > 0) {
            m = s;
          } else {
            if (f < h) {
              if (f < o) {
                m = o;
              } else {
                m = f;
              }
            } else {
              m = h;
            }
          }

          u[v - 3] = c[g];
          u[v - 2] = c[g + 1];
          u[v - 1] = c[g + 2];
          u[v] = d ? c[g + 3] : m;
        }

        l.data = u;
        this.ctx.putImageData(l, t, a);
        this._renderBoundaries = [1e3, 1e3, 0, 0];
      },
      getValueAt: function getValueAt(t) {
        var a;
        var e = this.shadowCtx;
        var i = e.getImageData(t.x, t.y, 1, 1);
        var r = i.data[3];
        var n = this._max;
        var s = this._min;
        a = Math.abs(n - s) * (r / 255) >> 0;
        return a;
      },
      getDataURL: function getDataURL() {
        return this.canvas.toDataURL();
      }
    };
    return e;
  }();

  var h = function t() {
    var a = false;

    if (n["defaultRenderer"] === "canvas2d") {
      a = e;
    }

    return a;
  }();

  var o = {
    merge: function merge() {
      var t = {};
      var a = arguments.length;

      for (var e = 0; e < a; e++) {
        var i = arguments[e];

        for (var r in i) {
          t[r] = i[r];
        }
      }

      return t;
    }
  };

  var a = function t() {
    var i = function t() {
      function a() {
        this.cStore = {};
      }

      a.prototype = {
        on: function on(t, a, e) {
          var i = this.cStore;

          if (!i[t]) {
            i[t] = [];
          }

          i[t].push(function (t) {
            return a.call(e, t);
          });
        },
        emit: function emit(t, a) {
          var e = this.cStore;

          if (e[t]) {
            var i = e[t].length;

            for (var r = 0; r < i; r++) {
              var n = e[t][r];
              n(a);
            }
          }
        }
      };
      return a;
    }();

    var r = function r(a) {
      var t = a._renderer;
      var e = a._coordinator;
      var i = a._store;
      e.on("renderpartial", t.renderPartial, t);
      e.on("renderall", t.renderAll, t);
      e.on("extremachange", function (t) {
        a._config.onExtremaChange && a._config.onExtremaChange({
          min: t.min,
          max: t.max,
          gradient: a._config["gradient"] || a._config["defaultGradient"]
        });
      });
      i.setCoordinator(e);
    };

    function a() {
      var t = this._config = o.merge(n, arguments[0] || {});
      this._coordinator = new i();

      if (t["plugin"]) {
        var a = t["plugin"];

        if (!n.plugins[a]) {
          throw new Error("Plugin '" + a + "' not found. Maybe it was not registered.");
        } else {
          var e = n.plugins[a];
          this._renderer = new e.renderer(t);
          this._store = new e.store(t);
        }
      } else {
        this._renderer = new h(t);
        this._store = new s(t);
      }

      r(this);
    }

    a.prototype = {
      addData: function addData() {
        this._store.addData.apply(this._store, arguments);

        return this;
      },
      removeData: function removeData() {
        this._store.removeData && this._store.removeData.apply(this._store, arguments);
        return this;
      },
      setData: function setData() {
        this._store.setData.apply(this._store, arguments);

        return this;
      },
      setDataMax: function setDataMax() {
        this._store.setDataMax.apply(this._store, arguments);

        return this;
      },
      setDataMin: function setDataMin() {
        this._store.setDataMin.apply(this._store, arguments);

        return this;
      },
      configure: function configure(t) {
        this._config = o.merge(this._config, t);

        this._renderer.updateConfig(this._config);

        this._coordinator.emit("renderall", this._store._getInternalData());

        return this;
      },
      repaint: function repaint() {
        this._coordinator.emit("renderall", this._store._getInternalData());

        return this;
      },
      getData: function getData() {
        return this._store.getData();
      },
      getDataURL: function getDataURL() {
        return this._renderer.getDataURL();
      },
      getValueAt: function getValueAt(t) {
        if (this._store.getValueAt) {
          return this._store.getValueAt(t);
        } else if (this._renderer.getValueAt) {
          return this._renderer.getValueAt(t);
        } else {
          return null;
        }
      }
    };
    return a;
  }();

  var t = {
    create: function create(t) {
      return new a(t);
    },
    register: function register(t, a) {
      n.plugins[t] = a;
    }
  };
  return t;
});

/***/ }),

/***/ "77e7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("60cc");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("431352b1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

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

/***/ "e6b4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.marker-cluster{background-clip:padding-box;border-radius:20px;cursor:pointer}.marker-cluster div{width:34px;height:34px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px Helvetica Neue,Arial,Helvetica,sans-serif}.marker-cluster span{line-height:34px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e887":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("21be");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("39623eab", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e8ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MarkerCluster_MarkerCluster; });

// CONCATENATED MODULE: ./src/assets/markercluster-longdo-map/LLBBox.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var longdo = window.longdo;
/**
 * class for carrying bound information
 * @export LLBBox
 * @class LLBBox
 */

var LLBBox = /*#__PURE__*/function () {
  /**
   *Creates an instance of LLBBox.
   * @param {Array<longdo.Location>} locations array of locations to create bound
   * @memberof LLBBox
   */
  function LLBBox(locations) {
    _classCallCheck(this, LLBBox);

    this._projection = longdo.Projections.EPSG3857;
    this._locationList = locations.slice();
    this._originalLocationList = this._locationList.slice();

    if (locations.length > 0) {
      this._bounds = longdo.Util.locationBound(this._locationList);
    }
  }
  /**
   * generate the instance set up bound
   * @static
   * @param {longdo.Bound} bound bound to be set up
   * @returns {LLBBox} instance of this class
   * @memberof LLBBox
   */


  _createClass(LLBBox, [{
    key: "getBounds",
    value:
    /**
     * returns bound
     * @returns {longdo.Bound} bound
     * @memberof LLBBox
     */
    function getBounds() {
      return {
        'minLon': this._bounds.minLon,
        'minLat': this._bounds.minLat,
        'maxLon': this._bounds.maxLon,
        'maxLat': this._bounds.maxLat
      };
    }
    /**
     * returns Left-Top of the bound
     * @returns {longdo.Location} left-top vertex of the bound
     * @memberof LLBBox
     */

  }, {
    key: "LT",
    value: function LT() {
      return {
        "lon": this._bounds.minLon,
        "lat": this._bounds.maxLat
      };
    }
    /**
     * returns Right-Top of the bound
     * @returns {londgo.Location} right-top vertex of the bound
     * @memberof LLBBox
     */

  }, {
    key: "RT",
    value: function RT() {
      return {
        "lon": this._bounds.maxLon,
        "lat": this._bounds.maxLat
      };
    }
    /**
     * returns Left-Bottom of the bound
     * @returns {longdo.Location} left-bottom vertex of the bound
     * @memberof LLBBox
     */

  }, {
    key: "LB",
    value: function LB() {
      return {
        "lon": this._bounds.minLon,
        "lat": this._bounds.minLat
      };
    }
    /**
     * returns right-bottom of the bound
     * @returns {longdo.Locaton} right-bottom vertex of the bound
     * @memberof LLBBox
     */

  }, {
    key: "RB",
    value: function RB() {
      return {
        "lon": this._bounds.maxLon,
        "lat": this._bounds.minLat
      };
    }
  }, {
    key: "getMinimumBounds",
    value: function getMinimumBounds() {
      var b = longdo.Util.locationBound(this._originalLocationList);
      return b;
    }
    /**
     * add location to bound and extend bound in order to include added location
     * @param {longdo.Location} location location to be added
     * @memberof LLBBox
     * @returns {undefined}
     */

  }, {
    key: "add",
    value: function add(location) {
      this._locationList.push(location);

      this._originalLocationList.push(location);

      this._bounds = longdo.Util.locationBound(this._locationList);
    }
    /**
     * remove location from the bound
     * @param {longdo.Location} location location to be removed
     * @memberof LLBBox
     * @returns {undefined}
     */

  }, {
    key: "remove",
    value: function remove(location) {
      this._locationList = this._locationList.filter(function (e) {
        return e !== location;
      });
      this._originalLocationList = this._originalLocationList.filter(function (e) {
        return e !== location;
      });
      this._bounds = this.empty() ? null : longdo.Util.locationBound(this._locationList);
    }
    /**
     * return whether including no locations or not
     * @returns {boolean} return true if containing no location
     * @memberof LLBBox
     */

  }, {
    key: "empty",
    value: function empty() {
      return this._locationList.length === 0;
    }
    /**
     * returns array of locations included itself
     * @returns {Array<longdo.Location>} array of locations included in itself
     * @memberof LLBBox
     */

  }, {
    key: "getLocations",
    value: function getLocations() {
      return this._locationList.slice();
    }
    /**
     * returns whether given location is within its bound
     * @param {longdo.Location} loc location to be checked
     * @returns {boolaen} returns true if location is in bound
     * @memberof LLBBox
     */

  }, {
    key: "isLocInBounds",
    value: function isLocInBounds(loc) {
      var result = longdo.Util.contains(loc, this.getRectVertex());
      return result === null ? true : result;
    }
    /**
     * extend bound size
     * @param {number} diff size to extends
     * @returns {LLBBox} itself
     * @memberof LLBBox
     */

  }, {
    key: "extendSize",
    value: function extendSize(diff) {
      var b = this._bounds;
      var maxy = this._projection.latToNorm(b.maxLat) + diff;
      var miny = this._projection.latToNorm(b.minLat) - diff;

      this._locationList.push({
        "lon": b.minLon - diff,
        "lat": this._projection.normToLat(miny)
      });

      this._locationList.push({
        "lon": b.minLon - diff,
        "lat": this._projection.normToLat(maxy)
      });

      this._locationList.push({
        "lon": b.minLon + diff,
        "lat": this._projection.normToLat(miny)
      });

      this._locationList.push({
        "lon": b.maxLon + diff,
        "lat": this._projection.normToLat(maxy)
      });

      this._bounds = longdo.Util.locationBound(this._locationList);
      return this;
    }
    /**
     * returns array of vertex by order of drawing rect
     * @returns {Array<longdo.Location>} array of vertex locations
     * @memberof LLBBox
     */

  }, {
    key: "getRectVertex",
    value: function getRectVertex() {
      return [{
        "lon": this._bounds.minLon,
        "lat": this._bounds.minLat
      }, {
        "lon": this._bounds.minLon,
        "lat": this._bounds.maxLat
      }, {
        "lon": this._bounds.maxLon,
        "lat": this._bounds.maxLat
      }, {
        "lon": this._bounds.maxLon,
        "lat": this._bounds.minLat
      }];
    }
    /**
     * draw polygon to show bound
     * @param {longdo.Map} map map for polygon to show
     * @memberof LLBBox
     * @returns {undefined}
     */

  }, {
    key: "drawArea",
    value: function drawArea(map) {
      this._poly = new longdo.Polygon(this.getRectVertex());
      map.Overlays.add(this._poly);
    }
    /**
     * remove polygon from map
     * @param {longdo.Map} map map where the polygon will be removed
     * @memberof LLBBox
     * @returns {undefined}
     */

  }, {
    key: "removeArea",
    value: function removeArea(map) {
      if (this._poly && this._poly.active()) {
        map.Overlays.remove(this._poly);
        delete this._poly;
      }
    }
    /**
     * returns relative coordinates in given N x N grid
     * @param {longdo.Location} loc location to be checked
     * @param {number} n size of width,height of the grid
     * @returns {longdo.Tile} coordinates(Tile)
     * @memberof LLBBox
     */

  }, {
    key: "getNxNGridCord",
    value: function getNxNGridCord(loc, n) {
      if (!this.isLocInBounds(loc)) {
        return null;
      }

      var xlen = (this._bounds.maxLon - this._bounds.minLon) / n;
      var ylen = (this._lat2y(this._bounds.maxLat) - this._lat2y(this._bounds.minLat)) / n;
      var lonoffset = loc.lon - this._bounds.minLon;

      var yoffset = -this._lat2y(loc.lat) + this._lat2y(this._bounds.maxLat);

      var xid = Math.floor(lonoffset / xlen),
          yid = Math.floor(yoffset / ylen);
      return {
        "u": xid,
        "v": yid
      };
    }
    /*
    Adapted from https://wiki.openstreetmap.org/wiki/Mercator
    */

    /**
     * convert y pixel coordinate into latitude
     * @param {number} y pixel coordinate
     * @returns {number} latitude
     * @memberof LLBBox
     */

  }, {
    key: "_y2lat",
    value: function _y2lat(y) {
      return (Math.atan(Math.exp(y / (180 / Math.PI))) / (Math.PI / 4) - 1) * 90;
    }
    /**
     * convert latitude into y pixel coordinate
     * @param {number} lat latitude
     * @returns {number} y pixel coordinate
     * @memberof LLBBox
     */

  }, {
    key: "_lat2y",
    value: function _lat2y(lat) {
      return Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
    }
  }], [{
    key: "generateFrom",
    value: function generateFrom(bound) {
      return new LLBBox([{
        "lon": bound.minLon,
        "lat": bound.minLat
      }, {
        'lon': bound.maxLon,
        'lat': bound.maxLat
      }]);
    }
    /**
     * generate the instance set up rect bound from 1 or 2 vertex
     * @static
     * @param {longdo.Location} loc1 1st vertex
     * @param {longdo.Location} [loc2] 2nd vertex, if not provided, it will be as the same as loc1
     * @returns {LLBBox} instance of this class
     * @memberof LLBBox
     */

  }, {
    key: "generateRect",
    value: function generateRect(loc1, loc2) {
      if (!loc2) {
        loc2 = loc1;
      }

      return new LLBBox([loc1, loc2]);
    }
  }]);

  return LLBBox;
}();
var LLCircle = /*#__PURE__*/_createClass(function LLCircle(center, radius) {
  _classCallCheck(this, LLCircle);

  this.center = center;
  this.sqrad = radius * radius;
});
// CONCATENATED MODULE: ./src/assets/markercluster-longdo-map/ConfigHandler.js
function ConfigHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ConfigHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) ConfigHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) ConfigHandler_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ConfigHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * class for carrying config/option values
 * @export ConfigHandler
 * @class ConfigHandler
 */
var ConfigHandler_default = /*#__PURE__*/ConfigHandler_createClass(function _default(options) {
  ConfigHandler_classCallCheck(this, _default);

  this.maxZoom = options.maxZoom || null;
  this.minClusterSize = options.minClusterSize || 2;
  this.textColor = options.textColor || 'black';
  this.customOuterClusterCSS = options.customOuterClusterCSS || {};
  this.customInnerClusterCSS = options.customInnerClusterCSS || {};
  this.customTextClusterCSS = options.customTextClusterCSS || {};
  this.gridSize = options.gridSize || 120;
  this.clusterRadius = options.clusterRadius || this.gridSize;
  this.averageCenter = options.averageCenter;
  this.drawMarkerArea = options.drawMarkerArea;
  this.swarmModeEnabled = options.swarmModeEnabled;
  this.swarmAlg = options.swarmAlg ? parseInt(options.swarmAlg, 10) : null;
  this.styles = options.styles || null;
  this.swarmGridLength = options.swarmGridLength ? parseInt(options.swarmGridLength, 10) : null;
  this.swarmMarkersMaxLimit = options.swarmMarkersMaxLimit ? parseInt(options.swarmMarkersMaxLimit, 10) : null;
  this.swarmMarkersAmountAdjust = options.swarmMarkersAmountAdjust;
  this.swarmMarkersMaxAmountPerTile = options.swarmMarkersMaxAmountPerTile ? parseInt(options.swarmMarkersMaxAmountPerTile, 10) : null;
  this.swarmMarkersConstPerGrid = options.swarmMarkersConstPerGrid ? parseInt(options.swarmMarkersConstPerGrid, 10) : null;
});


// CONCATENATED MODULE: ./src/assets/markercluster-longdo-map/Icon.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Icon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Icon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Icon_createClass(Constructor, protoProps, staticProps) { if (protoProps) Icon_defineProperties(Constructor.prototype, protoProps); if (staticProps) Icon_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** @module Icon */
var Icon_longdo = window.longdo;
/**
 * Class for managing cluster's icon & children markers' icons
 * @export ClusterIcon
 * @class ClusterIcon
 */

var ClusterIcon = /*#__PURE__*/function () {
  /**
   *Creates an instance of ClusterIcon.
   * @param {Cluster} cluster cluster in charge of this
   * @param {ConfigHandler} config config variables
   * @param {IconLoader} iloader cluster icon carrier
   * @memberof ClusterIcon
   */
  function ClusterIcon(cluster, config, iloader) {
    Icon_classCallCheck(this, ClusterIcon);

    this._cluster = cluster;
    this._config = config;
    this._iloader = iloader;
    this._center = null;
    this._map = cluster._map;
    this._sums = null;
    this._clusterMarker = new Icon_longdo.Marker({
      "lat": 0,
      "lon": 0
    }, {
      "icon": this._cluster._markerCluster._iloader.getIcon(0),
      "weight": Icon_longdo.OverlayWeight.Top
    });
  }
  /**
   * show cluster icons & marker icons if needed
   * @returns {undefined}
   * @memberof ClusterIcon
   */


  Icon_createClass(ClusterIcon, [{
    key: "show",
    value: function show() {
      var len = this._cluster._markers.length;

      if (!this._config.swarmModeEnabled) {
        var pos = this._center;

        if (this._cluster._markers.length < this._config.minClusterSize) {
          var marker = this._cluster._markers[0];

          if (!marker.active()) {
            this._map.Overlays.add(marker);
          }

          return;
        }

        var zoom = this._map.zoom();

        var mz = this._config.maxZoom;

        if (mz && zoom > mz || zoom === 20) {
          while (len--) {
            var _marker = this._cluster._markers[len];

            if (!_marker.active()) {
              this._cluster._map.Overlays.add(_marker);
            }
          }

          return;
        }

        if (this._clusterMarker.active()) {
          this._map.Overlays.move(this._clusterMarker, pos);
        } else {
          this._clusterMarker.setLocation(pos);

          this._map.Overlays.add(this._clusterMarker);

          if (this._poly) {
            this._map.Overlays.remove(this._poly);
          }

          if (this._config.drawMarkerArea) {
            this._poly = new Icon_longdo.Polygon(this._cluster._bounds.getRectVertex(), {
              "fillColor": "rgba(0,0,0,0.3)"
            });

            this._map.Overlays.add(this._poly);
          }
        }
      } else if (this._config.swarmAlg === 1) {
        //TODO
        var amounts = new Array(this._config.swarmGridLength * this._config.swarmGridLength).fill(0);
        var sum = 0;

        while (len--) {
          if (sum >= this._config.swarmMarkersMaxAmountPerTile) {
            break;
          }

          var m = this._cluster._markers[len];
          var tile = this._cluster._gridids[len];
          var idx = tile.u * this._config.swarmGridLength + tile.v;

          if (amounts[idx] % this._config.swarmMarkersConstPerGrid === 0) {
            if (!m.active()) {
              this._map.Overlays.add(m);
            }

            sum++;
          }

          amounts[idx]++;
        }
      } else if (this._config.swarmAlg === 2) {
        this._calculateMarkersDispAmount();

        var amount = 0;

        while (len--) {
          if (amount > this._config.swarmMarkersMaxLimit) {
            break;
          }

          var _m = this._cluster._markers[len];

          if (this.swarmAlg2Decider(amount, this._cluster._markers.length - len - 1)) {
            if (!_m.active()) {
              this._map.Overlays.add(_m);
            }

            amount++;
          }
        }

        return;
      }
    }
  }, {
    key: "_calculateMarkersDispAmount",
    value: function _calculateMarkersDispAmount() {
      var modsig = function modsig(n, inmax, outmax) {
        if (n === 0) {
          return 0;
        }

        var z = n / inmax * 49 - 13;
        var result = Math.round(outmax * (1 / (1 + Math.exp(-z))));
        return result === 0 ? 1 : result;
      };

      this._maxDispAmount = modsig(this._cluster._markers.length, this._cluster._markerCluster._maxClusterSize, this._config.swarmMarkersMaxLimit);
    }
  }, {
    key: "swarmAlg2Decider",
    value: function swarmAlg2Decider(amount, num) {
      if (this._config.swarmMarkersAmountAdjust) {
        return this._maxDispAmount > amount;
      }

      return amount <= 5 || num % 10 === 0;
    }
    /**
     * remove cluster icon from the map
     * @memberof ClusterIcon
     * @returns {undefined}
     */

  }, {
    key: "remove",
    value: function remove() {
      this._map.Overlays.remove(this._clusterMarker);

      if (this._poly) {
        this._map.Overlays.remove(this._poly);

        this._poly = null;
      }
    }
    /**
     * set position where cluster icon will be rendered
     * @param {longdo.Location} center position for cluster icon to be rendered
     * @memberof ClusterIcon
     * @returns {undefined}
     */

  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this._center = center;
    }
    /**
     * set number displaying in cluster
     * @param {number} sums numbers to change to
     * @returns {undefined}
     * @memberof ClusterIcon
     */

  }, {
    key: "setSums",
    value: function setSums(sums) {
      if (this._sums && sums === this._sums) {
        return;
      }

      this._sums = sums;

      if (this._clusterMarker && this._clusterMarker.element()) {
        this._iloader.changeNumber(this._clusterMarker.element(), this._sums);
      }
    }
  }]);

  return ClusterIcon;
}();
/**
 * class for loading cluser icons & carrying them
 * @export IconLoader
 * @class IconLoader
 */

var IconLoader = /*#__PURE__*/function () {
  /**
   *Creates an instance of IconLoader.
   * @param {MarkerCluster} markercluster MarkerCluster instance
   * @param {ConfigHandler} config config variables
   * @memberof IconLoader
   */
  function IconLoader(markercluster, config) {
    Icon_classCallCheck(this, IconLoader);

    this._markerCluster = markercluster;
    this._config = config;
    this._images = new Map();
    this.ready = true;
    this.useDefault = true;

    if (this._config.styles) {
      this.loadStyles(this._config.styles);
    }
  }
  /**
   * load style of icons
   * @param {string} url url of icon image
   * @param {number} width width of the image
   * @param {number} height height of the image
   * @param {number} minThreshold minimum threshold of size of cluster
   * @param {Function} [callback] callback function to be called on finishing loading
   * @returns {number} index of loaded style
   * @memberof IconLoader
   */


  Icon_createClass(IconLoader, [{
    key: "load",
    value: function load(url, width, height, minThreshold, callback) {
      this.ready = false;
      this.useDefault = false;
      var img = new Image(width, height);

      this._images.set(img, {
        "ready": false,
        "minThreshold": minThreshold
      });

      var that = this;

      img.onload = function () {
        that._images.get(img).ready = true;

        if (_toConsumableArray(that._images.values()).every(function (elm) {
          return elm.ready;
        })) {
          that.ready = true;

          that._markerCluster.resetViewport();

          that._markerCluster._createClusters();
        }

        if (callback) {
          callback();
        }
      };

      img.src = url;
      return this._images.keys.length - 1;
    }
    /**
     * load styles config value
     * @param {Array<Object>} styles styles to be loaded
     * @memberof IconLoader
     * @returns {undefined}
     */

  }, {
    key: "loadStyles",
    value: function loadStyles(styles) {
      styles.sort(function (elm1, elm2) {
        return elm1.minThreshold < elm2.minThreshold ? 1 : elm1.minThreshold === elm2.minThreshold ? 0 : -1;
      });
      var len = styles.length;
      var that = this;

      while (len--) {
        var style = styles[len];
        this.load(style.url, style.width, style.height, style.minThreshold, len === 0 ? function () {
          return that.ready = true;
        } : null);
      }
    }
    /**
     * returns icon config object according to longdo Marker icon syntax
     * @param {number} index index number to get icon style
     * @returns {Object} icon config values object 
     * @memberof IconLoader
     */

  }, {
    key: "getIcon",
    value: function getIcon(index) {
      var result = {
        "offset": {
          "x": 0,
          "y": 0
        }
      };

      if (this.useDefault || typeof index === 'undefined') {
        var elm = document.createElement("div");
        var elm2 = document.createElement('div');
        var elm3 = document.createElement('span');
        elm.appendChild(elm2);
        elm2.appendChild(elm3);
        elm.style.width = '44px';
        elm.style.height = '44px';
        elm.style.marginLeft = '-22px';
        elm.style.marginTop = '-22px';
        elm.style.overflow = 'hidden';
        elm.style.color = "".concat(this._config.textColor);
        elm.className = 'marker-cluster marker-cluster-small leaflet-marker-icon';

        if (this._config.customOuterClusterCSS) {
          for (var key in this._config.customOuterClusterCSS) {
            if (Object.hasOwnProperty.call(this._config.customOuterClusterCSS, key)) {
              var styleOuterClusterObj = this._config.customOuterClusterCSS[key];
              elm.style[key] = styleOuterClusterObj;
            }
          }
        }

        if (this._config.customInnerClusterCSS) {
          for (var _key in this._config.customInnerClusterCSS) {
            if (Object.hasOwnProperty.call(this._config.customInnerClusterCSS, _key)) {
              var styleInnerClusterObj = this._config.customInnerClusterCSS[_key];
              elm2.style[_key] = styleInnerClusterObj;
            }
          }
        }

        if (this._config.customTextClusterCSS) {
          for (var _key2 in this._config.customTextClusterCSS) {
            if (Object.hasOwnProperty.call(this._config.customTextClusterCSS, _key2)) {
              var styleTextObj = this._config.customTextClusterCSS[_key2];
              elm3.style[_key2] = styleTextObj;
            }
          }
        }

        result.html = elm.outerHTML;
        result.size = {
          "width": 44,
          "height": 44
        };
      } else {
        var img = _toConsumableArray(this._images.keys())[index];

        var _elm = document.createElement("div");

        _elm.style.width = "".concat(img.width, "px");
        _elm.style.height = "".concat(img.height, "px");
        _elm.style.marginLeft = "-".concat(img.width / 2, "px");
        _elm.style.marginTop = "-".concat(img.height / 2, "px");
        _elm.style.background = "url('".concat(encodeURI(img.src), "') no-repeat center top");
        _elm.style.lineHeight = _elm.style.height;
        _elm.style.color = "".concat(this._config.textColor);
        _elm.style.fontWeight = 'bold';
        _elm.style.textAlign = 'center';

        if (this._config.customTextClusterCSS) {
          for (var _key3 in this._config.customTextClusterCSS) {
            if (Object.hasOwnProperty.call(this._config.customTextClusterCSS, _key3)) {
              var _styleTextObj = this._config.customTextClusterCSS[_key3];
              _elm.style[_key3] = _styleTextObj;
            }
          }
        }

        result.html = _elm.outerHTML;
        result.size = {
          "width": img.width,
          "height": img.height
        };
      }

      return result;
    }
    /**
     * change displaying number in cluster
     * @param {HTMLElement} element element of cluster needing to be made changes
     * @param {number} num number to change to 
     * @memberof IconLoader
     * @returns {undefined}
     */

  }, {
    key: "changeNumber",
    value: function changeNumber(element, num) {
      if (this.useDefault) {
        element.children[0].children[0].children[0].innerText = "".concat(num.toLocaleString());

        if (num < 10) {
          element.children[0].className = 'marker-cluster marker-cluster-small';
        } else if (num < 100) {
          element.children[0].className = 'marker-cluster marker-cluster-medium';
        } else {
          element.children[0].className = 'marker-cluster marker-cluster-large';
        }
      } else {
        element.children[0].innerText = "".concat(num.toLocaleString());

        var list = _toConsumableArray(this._images.keys());

        var len = list.length;

        while (len--) {
          var img = list[len];

          if (num >= this._images.get(img).minThreshold) {
            var elm = element;
            elm.style.width = "".concat(img.width, "px");
            elm.style.height = "".concat(img.height, "px");
            elm = elm.children[0];
            elm.style.background = "url('".concat(encodeURI(img.src), "') no-repeat center top");
            elm.style.width = "".concat(img.width, "px");
            elm.style.height = "".concat(img.height, "px");
            elm.style.lineHeight = elm.style.height;
            break;
          }
        }
      }
    }
  }]);

  return IconLoader;
}();
// CONCATENATED MODULE: ./src/assets/markercluster-longdo-map/Cluster.js
function Cluster_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cluster_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cluster_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cluster_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cluster_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Cluster_longdo = window.longdo;
/**
 * class for cluster
 * @export Cluster
 * @class Cluster
 */

var Cluster_default = /*#__PURE__*/function () {
  /**
   * Creates an isntance of Cluster
   * @param {MarkerCluster} markerCluster MarkerCluster instance
   * @param {ConfigHandler} config config variables
   * @param {IconLoader} iloader IconLoader instance
   */
  function _default(markerCluster, config, iloader) {
    Cluster_classCallCheck(this, _default);

    this._markerCluster = markerCluster;
    this._config = config;
    this._map = markerCluster._map;
    this._center = null;
    this._markers = [];
    this._bounds = null;
    this._clusterIcon = new ClusterIcon(this, this._config, iloader);
  }
  /**
   * add marker to the cluster
   * @param {longdo.Marker} marker marker to be added
   * @param {longdo.Tile} [tile] tile including marker(optional), needed only in swarm mode 1.
   * @returns {undefined}
   */


  Cluster_createClass(_default, [{
    key: "addMarker",
    value: function addMarker(marker, tile) {
      if (!this._center) {
        this._center = marker.location();

        this._calculateBounds();
      } else {
        if (this._config.averageCenter) {
          this._center = Cluster_longdo.Util.averageLocation(Cluster_longdo.Projections.EPSG3857, this._center, marker.location());

          this._calculateBounds();
        }
      }

      marker.isAdded = true;

      this._markers.push(marker);

      if (this._config.drawMarkerArea) {
        this._bounds.drawArea(this._map);
      }

      if (this._config.swarmModeEnabled && this._config.swarmAlg === 1) {
        if (!this._gridids) {
          this._gridids = [];
        }

        this._gridids.push(LLBBox.generateFrom(Cluster_longdo.Util.boundOfTile(Cluster_longdo.Projections.EPSG3857, tile)).getNxNGridCord(marker.location(), this._config.swarmGridSize));
      }

      return true;
    }
    /**
     * remove icon & itself
     * @returns {undefined}
     */

  }, {
    key: "remove",
    value: function remove() {
      this._clusterIcon.remove();

      this._markers.length = 0;
      delete this._markers;

      this._bounds.removeArea(this._map);
    }
    /**
     * calculate cluster bound
     * @returns {undefined}
     */

  }, {
    key: "_calculateBounds",
    value: function _calculateBounds() {
      this._bounds = LLBBox.generateRect(this._center).extendSize(this._config.gridSize * Math.pow(2, -this._map.zoom()));
    }
    /**
     * returns whether marker is inside cluster bounds
     * @param {longdo.Marker} marker marker to be checked
     * @returns {boolean} If marker is inside cluster bound, returns true
     */

  }, {
    key: "isMarkerInClusterBounds",
    value: function isMarkerInClusterBounds(marker) {
      return this._bounds.isLocInBounds(marker.location());
    }
    /**
     * update icon's style and position and then show on map
     * @returns {undefined}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this._clusterIcon.setSums(this._markers.length);

      this._clusterIcon.setCenter(this._center);

      this._clusterIcon.show();
    }
  }]);

  return _default;
}();


// CONCATENATED MODULE: ./src/assets/markercluster-longdo-map/MarkerCluster.js
function MarkerCluster_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarkerCluster_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarkerCluster_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarkerCluster_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarkerCluster_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** @module MarkerCluster*/
if (typeof window.longdo === 'undefined') {
  throw new Error('longdo API must be loaded before the longdomap markercluster plugin');
}

var MarkerCluster_longdo = window.longdo;




/**
 * Class for MarkerCluster
 *
 * @export MarkerCluser
 * @class MarkerCluster
 */

var MarkerCluster_MarkerCluster = /*#__PURE__*/function () {
  /**
   *Creates an instance of MarkerCluster.
   * @param {longdo.Map} map Longdo Map instance
   * @param {Object} options Options for MarkerCluster
   * @memberof MarkerCluster
   */
  function MarkerCluster(map, options) {
    MarkerCluster_classCallCheck(this, MarkerCluster);

    this._map = map;
    this._markers = [];
    this._clusters = [];
    this._prevZoom = 2;
    this._ready = false;
    this.overlay = [];
    this.config = new ConfigHandler_default(options);
    this._iloader = new IconLoader(this, this.config);
    var that = this;

    this._map.Event.bind('ready', function () {
      if (!that._ready || !that._iloader.ready) {
        return;
      }

      that._prevZoom = that._map.zoom;
      that.resetViewport();

      that._createClusters();
    });

    this._map.Event.bind('zoom', function
      /*pivot*/
    () {
      if (!that._ready || !that._iloader.ready) {
        return;
      }

      that.resetViewport(); // that._createClusters();
    }); // this._map.Event.bind('drop',function() {
    //     if(!that._ready || !that._iloader.ready){return;}
    //     that.resetViewport();
    //     that._createClusters();
    // });


    this._map.Event.bind('overlayClick', function (overlay) {
      that.setSelectedMarker(overlay);

      if (!that._ready || !that._iloader.ready) {
        return;
      }

      var len = that._clusters.length;

      while (len--) {
        var cl = that._clusters[len];

        if (overlay === cl._clusterIcon._clusterMarker) {
          var l = [];
          var len2 = cl._markers.length;

          while (len2--) {
            l.push(cl._markers[len2].location());
          }

          that._map.bound(MarkerCluster_longdo.Util.locationBound(l)); // setTimeout(function(){
          //     that.resetViewport();
          //     that._createClusters();
          // },10);


          return;
        }
      }
    });

    this._map.Event.bind('loadTile', function (s) {
      if (s === 'start' || !that._ready || !that._iloader.ready) {
        return;
      }

      that.resetViewport();

      that._createClusters();
    });
  }
  /**
   * add marker(s) to plugins's management
   * @param {longdo.Marker| Array<longdo.Marker>} markers marker(s) to add
   * @memberof MarkerCluster
   * @returns {undefined}
   */


  MarkerCluster_createClass(MarkerCluster, [{
    key: "addMarkers",
    value: function addMarkers(markers) {
      if (markers instanceof MarkerCluster_longdo.Marker) {
        markers = [markers];
      }

      var len = markers.length;

      while (len--) {
        var m = markers[len];

        this._markers.push(m);
      }

      if (this.config.swarmModeEnabled) {
        this.shuffle();
      }
    }
    /**
     * randomize elements order in {@link MarkerCluster._markers}
     * using Fisher-Yates Algorithm
     * @memberof MarkerCluster
     * @returns {undefined}
     */

  }, {
    key: "shuffle",
    value: function shuffle() {
      for (var i = this._markers.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var temp = this._markers[i];
        this._markers[i] = this._markers[r];
        this._markers[r] = temp;
      }
    }
  }, {
    key: "getSelectedMarker",
    value: function getSelectedMarker() {
      if (this.overlay) {
        return this.overlay;
      }

      return null;
    }
  }, {
    key: "setSelectedMarker",
    value: function setSelectedMarker(_overlay) {
      if (_overlay && _overlay.element() && _overlay.element().classList.contains('ldmap_clickable')) {
        this.overlay = _overlay;
      }
    }
    /**
     * start rendering if icons-loading finished
     * @memberof MarkerCluster
     * @returns {undefined}
     */

  }, {
    key: "render",
    value: function render() {
      this._ready = true;

      if (this._iloader.ready) {
        this.resetViewport();

        this._createClusters();
      }
    }
    /**
     * choose markers in Map bound & add to clusters
     * @memberof MarkerCluster
     * @returns {undefined}
     */

  }, {
    key: "_createClusters",
    value: function _createClusters() {
      var mapBounds = LLBBox.generateFrom(this._map.bound());
      var bounds = mapBounds.extendSize(this.config.gridSize * Math.pow(2, -this._map.zoom()));
      var len = this._markers.length;

      while (len--) {
        var m = this._markers[len];
        var loc = m.location();

        if (!m.isAdded && bounds.isLocInBounds(loc)) {
          if (!this.config.swarmModeEnabled) {
            this._addToClosestCluster(m);
          } else {
            if (this.config.swarmAlg === 2) {
              this._addToClosestCluster(m);
            } else {
              this._addToTiledCluster(m);
            }
          }
        }
      }

      len = this._clusters.length;

      while (len--) {
        var cl = this._clusters[len];
        cl.finalize();
      }
    }
    /**
     * add marker to the closest cluster if it is within cluster's grid. If not, create new one.
     * @param {longdo.Marker} marker marker to be added
     * @memberof MarkerCluster
     * @returns {undefined}
     */

  }, {
    key: "_addToClosestCluster",
    value: function _addToClosestCluster(marker) {
      var distance = Number.POSITIVE_INFINITY;
      var clusterToAddTo = null;
      var len = this._clusters.length;

      while (len--) {
        var cluster = this._clusters[len];
        var cen = cluster._center;

        if (cen) {
          var d = MarkerCluster_longdo.Util.distance([cen, marker.location()]);

          if (d < distance) {
            distance = d;
            clusterToAddTo = cluster;
          }
        }
      }

      if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);

        if (this._maxClusterSize && this._maxClusterSize < clusterToAddTo._markers.length) {
          this._maxClusterSize = clusterToAddTo._markers.length;
        } else {
          this._maxClusterSize = clusterToAddTo._markers.length;
        }
      } else {
        var _cluster = new Cluster_default(this, this.config, this._iloader);

        _cluster.addMarker(marker);

        this._clusters.push(_cluster);

        if (this._maxClusterSize && this._maxClusterSize < _cluster._markers.length) {
          this._maxClusterSize = _cluster._markers.length;
        } else {
          this._maxClusterSize = _cluster._markers.length;
        }
      }
    }
    /**
     * add marker to clusters in charge of its tile
     * @param {longdo.Marker} marker marker to be added
     * @returns {undefined}
     * @memberof MarkerCluster
     */

  }, {
    key: "_addToTiledCluster",
    value: function _addToTiledCluster(marker) {
      var that = this;

      var locationToTile = function locationToTile(loc) {
        var point = MarkerCluster_longdo.Util.locationToPoint(MarkerCluster_longdo.Projections.EPSG3857, loc);
        point.z = 20 - that._map.zoom();
        return MarkerCluster_longdo.Util.pointToTile(point);
      };

      var tile = locationToTile(marker.location());
      var len = this._clusters.length;

      while (len--) {
        var _cluster2 = this._clusters[len];

        if (_cluster2.u === tile.u && _cluster2.v === tile.v) {
          _cluster2.addMarker(marker, tile);

          return;
        }
      }

      var cluster = new Cluster_default(this, this.config, this._iloader);
      cluster.u = tile.u;
      cluster.v = tile.v;
      cluster.addMarker(marker, tile);

      this._clusters.push(cluster);
    }
  }, {
    key: "_removeMarker",
    value: function _removeMarker(marker) {
      var index = this._markers.indexOf(marker);

      if (index === -1) {
        return false;
      }

      this._map.Overlays.remove(marker);

      this._markers.splice(index, 1);

      return true;
    }
  }, {
    key: "removeMarker",
    value: function removeMarker(marker) {
      var removed = this._removeMarker(marker);

      if (removed) {
        this.resetViewport();

        this._createClusters();

        return true;
      }

      return false;
    }
  }, {
    key: "removeMarkers",
    value: function removeMarkers(markers) {
      var markersCopy = markers === this._markers ? this._markers.slice() : markers;
      var removed = false;
      var len = markersCopy.length;

      while (len--) {
        var r = this._removeMarker(markersCopy[len]);

        removed = removed || r;
      }

      if (removed) {
        this.resetViewport();

        this._createClusters();

        return true;
      }

      return false;
    }
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      this.resetViewport();
      var len = this._markers.length;

      while (len--) {
        var marker = this._markers[len];

        this._map.Overlays.remove(marker);
      }

      this._markers = [];
    }
    /**
     * remove clusters & markers from the map, then clear clusters
     * @memberof MarkerCluster
     * @returns {undefined}
     */

  }, {
    key: "resetViewport",
    value: function resetViewport() {
      var len = this._clusters.length;

      while (len--) {
        this._clusters[len].remove();
      }

      len = this._markers.length;

      while (len--) {
        var marker = this._markers[len];
        marker.isAdded = false;

        this._map.Overlays.remove(marker);
      }

      this._clusters = [];
    }
  }]);

  return MarkerCluster;
}();



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
__webpack_require__.d(__webpack_exports__, "LongdoMapLockScreen", function() { return /* reexport */ LockScreen; });
__webpack_require__.d(__webpack_exports__, "LongdoMapLockMap", function() { return /* reexport */ LockMap; });
__webpack_require__.d(__webpack_exports__, "LongdoMapMenuBar", function() { return /* reexport */ MenuBar; });
__webpack_require__.d(__webpack_exports__, "LongdoMapTagPanel", function() { return /* reexport */ TagPanel; });
__webpack_require__.d(__webpack_exports__, "LongdoMapCustomControl", function() { return /* reexport */ CustomControl; });
__webpack_require__.d(__webpack_exports__, "LongdoMapCustomUi", function() { return /* reexport */ CustomUi; });
__webpack_require__.d(__webpack_exports__, "LongdoMapMarkerCluster", function() { return /* reexport */ MarkerCluster; });
__webpack_require__.d(__webpack_exports__, "LongdoMapHeatmap", function() { return /* reexport */ Heatmap; });
__webpack_require__.d(__webpack_exports__, "LongdoMapPanorama", function() { return /* reexport */ Panorama; });

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
  apiKey: null,
  src: 'https://api.longdo.com/map/',
  promise: null,
  beforeInit: null,
  debug: false,
  load: function load(_ref) {
    var _ref$apiKey = _ref.apiKey,
        apiKey = _ref$apiKey === void 0 ? null : _ref$apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? null : _ref$src,
        _ref$beforeInit = _ref.beforeInit,
        beforeInit = _ref$beforeInit === void 0 ? null : _ref$beforeInit,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug;

    if (typeof window === 'undefined') {
      return;
    }

    if (window.longdo) {
      console.warn('Longdo Map Vue: Longdo Map API is already loaded');
      return;
    }

    var url = this.src;

    if (src) {
      url = src;
      this.src = src;
    }

    var params = {};

    if (apiKey) {
      params['key'] = apiKey;
      this.apiKey = apiKey;
    }

    if (debug) {
      params['debug'] = true;
      this.debug = true;
    }

    var query = new URLSearchParams(params);

    if (query) {
      url += "?".concat(query);
    }

    if (beforeInit) {
      this.beforeInit = beforeInit;
    }

    this.importLongdoMap(url);
  },
  initLongdoMap: function initLongdoMap(init) {
    if (window.longdo) {
      if (this.beforeInit) {
        this.beforeInit(window.longdo);
      }

      init();
    } else {
      throw new Error('Longdo Map Vue: Longdo Map API is not found');
    }
  },
  importLongdoMap: function importLongdoMap(url) {
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
  }
};
/* harmony default export */ var src_manager = (manager);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cfbd48d6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=template&id=b3574a18&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ldmap-vue-container"
  }, [_c('div', {
    ref: "map",
    staticClass: "ldmap-vue-placeholder"
  }), _vm._t("default")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=template&id=b3574a18&scoped=true&

// CONCATENATED MODULE: ./src/mixins/mapOptions.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=script&lang=js&


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
      var _this = this;

      var options = this.getMapOptions();
      options.placeholder = this.$refs.map;
      this.map = new window.longdo.Map(options);
      this.$emit('load', this.map);
      this.map.Event.bind("ready", function () {
        _this.$emit("mapReady");

        if (options.zoomRange) {
          _this.map.zoomRange(options.zoomRange);
        }
      });
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
// EXTERNAL MODULE: ./src/components/LongdoMap.vue?vue&type=style&index=0&id=b3574a18&prod&scoped=true&lang=css&
var LongdoMapvue_type_style_index_0_id_b3574a18_prod_scoped_true_lang_css_ = __webpack_require__("3515");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
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
  "b3574a18",
  null
  
)

/* harmony default export */ var LongdoMap = (component.exports);
// CONCATENATED MODULE: ./src/mixins/childDefault.js
/* harmony default export */ var childDefault = ({
  data: function data() {
    var _this = this;

    return {
      mapReady: new Promise(function (resolve) {
        _this.$parent.$on('mapReady', function () {
          resolve();
        });
      })
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
  },
  iconStyle: {
    type: String,
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
          } else if (key === 'iconStyle') {
            options.style = this[key];
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
    var _this = this;

    this.mapReady.then(function () {
      _this.addMarker(_this.location, _this.getMarkerOptions());
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cfbd48d6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockScreen.vue?vue&type=template&id=f7d580b0&scoped=true&
var LockScreenvue_type_template_id_f7d580b0_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lockScreenReady,
      expression: "lockScreenReady"
    }],
    class: ['ldmap-vue-lock-screen', {
      'ldmap-vue-lock-screen-unlock': !_vm.value
    }]
  }, [_vm.mode === 'touch' ? _c('div', {
    ref: "areaTouchMode",
    staticClass: "ldmap-vue-lock-screen-area",
    on: {
      "touchstart": _vm.touchStartEvent,
      "touchmove": _vm.touchMoveEvent,
      "touchend": _vm.touchEndEvent
    }
  }, [_c('div', {
    staticClass: "ldmap-vue-lock-screen-area-message"
  }, [_vm._v(" " + _vm._s(_vm.unlockMessageTouch) + " ")])]) : _vm.mode === 'keyboard' ? _c('div', {
    ref: "areaKeyboardMode",
    staticClass: "ldmap-vue-lock-screen-area",
    on: {
      "wheel": _vm.wheelEvent,
      "click": _vm.clickEvent
    }
  }, [_c('div', {
    staticClass: "ldmap-vue-lock-screen-area-message"
  }, [_vm._v(" " + _vm._s(_vm.unlockMessageKeyboard) + " ")])]) : !_vm.hideButton ? _c('div', {
    staticClass: "ldmap-vue-lock-screen-button-container"
  }, [_vm._t("button", function () {
    return [_c('button', {
      staticClass: "ldmap-vue-lock-screen-button",
      on: {
        "click": function click($event) {
          return _vm.lockMap(!_vm.value);
        }
      }
    }, [_vm._v(" " + _vm._s(_vm.value ? _vm.unlockMessage : _vm.lockMessage) + " ")])];
  })], 2) : _vm._e()]);
};

var LockScreenvue_type_template_id_f7d580b0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LockScreen.vue?vue&type=template&id=f7d580b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockScreen.vue?vue&type=script&lang=js&

/* harmony default export */ var LockScreenvue_type_script_lang_js_ = ({
  name: 'LockScreen',
  mixins: [childDefault],
  props: {
    value: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'button'
    },
    lockMessage: {
      type: String,
      default: 'Lock'
    },
    unlockMessage: {
      type: String,
      default: 'Unlock'
    },
    unlockMessageTouch: {
      type: String,
      default: 'Use two fingers to move the map'
    },
    unlockMessageKeyboard: {
      type: String,
      default: "Press and hold ".concat(navigator.appVersion.indexOf('Mac') != -1 ? '⌘' : 'Ctrl', " to move the map")
    },
    hideButton: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      lockScreenReady: false,
      wheelTimeout: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      _this.lockScreenReady = true;

      if (_this.mode === 'keyboard') {
        _this.setKeyboardMode();
      }
    });
  },
  methods: {
    keyDownEvent: function keyDownEvent(e) {
      if (e.key === 'Meta' || e.key === 'Control') {
        this.lockMap(false);
      }
    },
    keyUpEvent: function keyUpEvent(e) {
      if (e.key === 'Meta' || e.key === 'Control') {
        this.lockMap(true);
      }
    },
    wheelEvent: function wheelEvent() {
      var _this2 = this;

      if (this.mode !== 'keyboard') return;

      if (!this.wheelTimeout && this.$refs.areaKeyboardMode) {
        this.$refs.areaKeyboardMode.classList.add('ldmap-vue-lock-screen-area-active');
        this.wheelTimeout = setTimeout(function () {
          _this2.$refs.areaKeyboardMode.classList.remove('ldmap-vue-lock-screen-area-active');

          _this2.wheelTimeout = undefined;
        }, 1000);
      }
    },
    setKeyboardMode: function setKeyboardMode() {
      window.addEventListener('keydown', this.keyDownEvent);
      window.addEventListener('keyup', this.keyUpEvent);
    },
    clickEvent: function clickEvent() {
      var _this3 = this;

      if (this.mode !== 'keyboard') return;

      if (!this.wheelTimeout && this.$refs.areaKeyboardMode) {
        this.$refs.areaKeyboardMode.classList.add('ldmap-vue-lock-screen-area-active');
        this.wheelTimeout = setTimeout(function () {
          _this3.$refs.areaKeyboardMode.classList.remove('ldmap-vue-lock-screen-area-active');

          _this3.wheelTimeout = undefined;
        }, 1000);
      }
    },
    touchStartEvent: function touchStartEvent(e) {
      if (this.mode !== 'touch') return;

      if (e.touches.length > 0) {
        this.lockMap(false);
        this.$refs.areaTouchMode.classList.add('ldmap-vue-lock-screen-area-active');
      }
    },
    touchMoveEvent: function touchMoveEvent(e) {
      if (this.mode !== 'touch') return;

      if (e.touches.length > 1) {
        this.$refs.areaTouchMode.classList.remove('ldmap-vue-lock-screen-area-active');
      }
    },
    touchEndEvent: function touchEndEvent() {
      if (this.mode !== 'touch') return;
      this.lockMap(true);
      this.$refs.areaTouchMode.classList.remove('ldmap-vue-lock-screen-area-active');
    },
    clearKeyboardModeEvent: function clearKeyboardModeEvent() {
      window.removeEventListener('keydown', this.keyDownEvent);
      window.removeEventListener('keyup', this.keyUpEvent);
    },
    lockMap: function lockMap(lock) {
      this.$emit('input', lock);
    }
  },
  watch: {
    mode: function mode(n) {
      this.clearKeyboardModeEvent();

      if (n === 'keyboard') {
        this.setKeyboardMode();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/LockScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LockScreenvue_type_script_lang_js_ = (LockScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LockScreen.vue?vue&type=style&index=0&id=f7d580b0&prod&scoped=true&lang=css&
var LockScreenvue_type_style_index_0_id_f7d580b0_prod_scoped_true_lang_css_ = __webpack_require__("117a");

// CONCATENATED MODULE: ./src/components/LockScreen.vue






/* normalize component */

var LockScreen_component = normalizeComponent(
  components_LockScreenvue_type_script_lang_js_,
  LockScreenvue_type_template_id_f7d580b0_scoped_true_render,
  LockScreenvue_type_template_id_f7d580b0_scoped_true_staticRenderFns,
  false,
  null,
  "f7d580b0",
  null
  
)

/* harmony default export */ var LockScreen = (LockScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cfbd48d6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockMap.vue?vue&type=template&id=85791a84&
var LockMapvue_type_template_id_85791a84_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    ref: "container",
    staticClass: "ldmap-vue-lock-map"
  }, [_vm._t("default")], 2);
};

var LockMapvue_type_template_id_85791a84_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LockMap.vue?vue&type=template&id=85791a84&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockMap.vue?vue&type=script&lang=js&

/* harmony default export */ var LockMapvue_type_script_lang_js_ = ({
  name: 'LockMap',
  mixins: [childDefault],
  props: {
    lock: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      _this.$parent.map.Ui.lockMap();

      if (_this.$slots.default) {
        var slotContainer = _this.$refs.container;
        var oldButton = document.getElementsByClassName('ldmap_lock_button')[0];

        if (oldButton) {
          oldButton.parentNode.replaceChild(slotContainer, oldButton);
        } else {
          console.warn('Longdo Map Vue: lockMap can be called only once');
        }
      }
    });
  },
  methods: {
    lockOverlay: function lockOverlay(lock) {
      var lockOverlay = document.getElementsByClassName('ldmap_lock_overlay')[0];

      if (lockOverlay) {
        lockOverlay.style.display = lock ? 'block' : 'none';
      }
    }
  },
  watch: {
    lock: function lock(n) {
      this.lockOverlay(n);
    }
  }
});
// CONCATENATED MODULE: ./src/components/LockMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LockMapvue_type_script_lang_js_ = (LockMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/LockMap.vue





/* normalize component */

var LockMap_component = normalizeComponent(
  components_LockMapvue_type_script_lang_js_,
  LockMapvue_type_template_id_85791a84_render,
  LockMapvue_type_template_id_85791a84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LockMap = (LockMap_component.exports);
// CONCATENATED MODULE: ./src/components/MenuBar.js

/* harmony default export */ var MenuBar = ({
  name: 'MenuBar',
  mixins: [childDefault],
  data: function data() {
    return {
      menuBar: null
    };
  },
  props: {
    button: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dropdown: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dropdownLabel: {
      type: String,
      default: null
    },
    change: {
      type: Function,
      default: null
    }
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addMenuBar();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Ui.remove(this.menuBar);
  },
  methods: {
    addMenuBar: function addMenuBar() {
      var options = {};

      if (this.button.length) {
        options.button = this.button;
      }

      if (this.dropdown.length) {
        options.dropdown = this.dropdown;
      }

      if (this.dropdownLabel) {
        options.dropdownLabel = this.dropdownLabel;
      }

      if (this.change) {
        options.change = this.change;
      }

      this.menuBar = new window.longdo.MenuBar(options);
      this.$parent.map.Ui.add(this.menuBar);
      this.$emit('add', this.menuBar);
    }
  }
});
// CONCATENATED MODULE: ./src/components/TagPanel.js

/* harmony default export */ var TagPanel = ({
  name: 'TagPanel',
  mixins: [childDefault],
  data: function data() {
    return {
      tagPanel: null
    };
  },
  props: {
    tag: {
      type: Array,
      default: null
    }
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addTagPanel();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Ui.remove(this.tagPanel);
  },
  methods: {
    addTagPanel: function addTagPanel() {
      this.tagPanel = this.tag ? new window.longdo.TagPanel({
        tag: this.tag
      }) : new window.longdo.TagPanel();
      this.$parent.map.Ui.add(this.tagPanel);
      this.$emit('add', this.tagPanel);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CustomControl.js

/* harmony default export */ var CustomControl = ({
  name: 'CustomControl',
  mixins: [childDefault],
  data: function data() {
    return {
      customControl: null
    };
  },
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    var self = this;
    this.mapReady.then(function () {
      self.addCustomControl();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Ui.remove(this.customControl);
  },
  methods: {
    addCustomControl: function addCustomControl() {
      this.customControl = new window.longdo.CustomControl({
        html: this.html
      });
      this.$parent.map.Ui.add(this.customControl);
      this.$emit('add', this.customControl);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cfbd48d6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomUi.vue?vue&type=template&id=ec61ad9c&scoped=true&
var CustomUivue_type_template_id_ec61ad9c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    class: _vm.position
  }, [_vm._t("default")], 2);
};

var CustomUivue_type_template_id_ec61ad9c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CustomUi.vue?vue&type=template&id=ec61ad9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomUi.vue?vue&type=script&lang=js&

/* harmony default export */ var CustomUivue_type_script_lang_js_ = ({
  name: 'CustomUi',
  mixins: [childDefault],
  props: {
    vertical: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    position: function position() {
      if (this.custom) {
        return;
      }

      var center = this.vertical === 'center' && this.horizontal === 'center';
      var defaultV = this.vertical !== 'top' && this.vertical !== 'center' && this.vertical !== 'bottom';
      return {
        'ldmap-vue-custom-ui': true,
        'ldmap-vue-custom-ui-top': this.vertical === 'top' || defaultV,
        'ldmap-vue-custom-ui-bottom': this.vertical === 'bottom',
        'ldmap-vue-custom-ui-right': this.horizontal === 'right',
        'ldmap-vue-custom-ui-left': this.horizontal === 'left',
        'ldmap-vue-custom-ui-center-y': this.vertical === 'center' && !center,
        'ldmap-vue-custom-ui-center-x': this.horizontal === 'center' && !center,
        'ldmap-vue-custom-ui-center': center
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/CustomUi.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CustomUivue_type_script_lang_js_ = (CustomUivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CustomUi.vue?vue&type=style&index=0&id=ec61ad9c&prod&scoped=true&lang=css&
var CustomUivue_type_style_index_0_id_ec61ad9c_prod_scoped_true_lang_css_ = __webpack_require__("4544");

// CONCATENATED MODULE: ./src/components/CustomUi.vue






/* normalize component */

var CustomUi_component = normalizeComponent(
  components_CustomUivue_type_script_lang_js_,
  CustomUivue_type_template_id_ec61ad9c_scoped_true_render,
  CustomUivue_type_template_id_ec61ad9c_scoped_true_staticRenderFns,
  false,
  null,
  "ec61ad9c",
  null
  
)

/* harmony default export */ var CustomUi = (CustomUi_component.exports);
// CONCATENATED MODULE: ./src/mixins/markerClusterOptions.js
var markerClusterOptions_props = {
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
};
/* harmony default export */ var markerClusterOptions = ({
  props: markerClusterOptions_props,
  methods: {
    getMarkerClusterOptions: function getMarkerClusterOptions() {
      var options = {};

      for (var key in markerClusterOptions_props) {
        if (key === 'markerList') {
          continue;
        } else if (this[key] !== null) {
          options[key] = this[key];
        }
      }

      return options;
    }
  }
});
// CONCATENATED MODULE: ./src/components/MarkerCluster.js
function MarkerCluster_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MarkerCluster_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function MarkerCluster_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MarkerCluster_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MarkerCluster_arrayLikeToArray(o, minLen); }

function MarkerCluster_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ var MarkerCluster = ({
  name: 'LongdoMarkerCluster',
  mixins: [childDefault, markerClusterOptions],
  data: function data() {
    return {
      markerCluster: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      var MarkerCluster = __webpack_require__("e8ba").default;

      _this.markerCluster = new MarkerCluster(_this.$parent.map, _this.getMarkerClusterOptions());

      _this.$emit('add', _this.markerCluster);

      _this.renderMarkerCluster();

      if (_this.defaultCss) __webpack_require__("3c6a");
    });
  },
  destroyed: function destroyed() {
    this.markerCluster.clearMarkers();
  },
  methods: {
    renderMarkerCluster: function renderMarkerCluster() {
      if (this.markerCluster) this.markerCluster.clearMarkers();

      var _iterator = MarkerCluster_createForOfIteratorHelper(this.markerList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var marker = _step.value;
          var longdoMarker = new window.longdo.Marker(marker.location, marker.options);
          this.markerCluster.addMarkers(longdoMarker);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.markerCluster.render();
    }
  },
  watch: {
    markerList: function markerList() {
      this.renderMarkerCluster();
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/heatmapOptions.js
var heatmapOptions_props = {
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
};
/* harmony default export */ var heatmapOptions = ({
  props: heatmapOptions_props,
  methods: {
    getHeatmapOptions: function getHeatmapOptions() {
      var options = {};

      for (var key in heatmapOptions_props) {
        if (key === 'data') {
          continue;
        } else if (this[key] !== null) {
          options[key] = this[key];
        }
      }

      return options;
    }
  }
});
// EXTERNAL MODULE: ./src/assets/heatmap-longdo-map/heatmap.js
var heatmap = __webpack_require__("7397");

// CONCATENATED MODULE: ./src/assets/heatmap-longdo-map/longdomap-heatmap.js
/* eslint-disable no-redeclare */

/* eslint-disable no-undef */

/*
 * heatmap.js Longdo Map Overlay
 *
 * Copyright (c) 2008-2016, Patrick Wied (https://www.patrick-wied.at)
 * Dual-licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and the Beerware (http://en.wikipedia.org/wiki/Beerware) license.
 */
/* harmony default export */ var longdomap_heatmap = ({
  heatmap: function heatmap(h337) {
    "use strict";
    /**
     * class stands for HeatmapLayer
     *
     * @param {*} cfg configuraton settings see: https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-register
     */

    var HeatmapOverlay = function HeatmapOverlay(cfg) {
      this._initialize(cfg);

      var instance = this;
      longdo.Layer.call(this, "heatmaplayer", {
        type: longdo.LayerType.Custom,
        defer: function defer(element, projection, tile, zoom) {
          setTimeout(function () {
            var url = instance._getURL(projection, tile, zoom);

            element.src = url;
          }, 0);
        }
      });
    };

    HeatmapOverlay.prototype = Object.create(longdo.Layer.prototype);
    HeatmapOverlay.prototype.constructor = HeatmapOverlay;

    HeatmapOverlay.prototype._initialize = function (cfg) {
      this.cfg = cfg;
      this._data = [];
      this._max = 1; // this.defer = true;

      this._min = 0;
      this.Cache = [];
      this.tileNumSqrtX = this.tileNumSqrtY = 2 << 1;
      this.tileResSqrt = 256;
      this.cfg.container = document.createElement("div");
      this.cfg.container.style.cssText = "width:" + this.tileResSqrt + "px;height:" + this.tileResSqrt + "px";
      this.cfg.width = this.cfg.height = this.tileResSqrt;
      this._heatmap = h337.create(this.cfg);
    };
    /**
     * returns base64 encoded image URL
     *
     * @param {*} projection map projection
     * @param {*} tile requested map tile
     * @param {*} zoom zoom level
     * @returns {String} base64 encoded image scheme URL
     */


    HeatmapOverlay.prototype._getURL = function (projection, tile, zoom) {
      //The number of tiles in x/y-axis
      this.tileNumSqrtX = 2 << zoom - 1;
      this.tileNumSqrtY = projection == longdo.Projections.EPSG4326 ? this.tileNumSqrtX / 2 : this.tileNumSqrtX;
      var len = this._data.length;
      var generatedData = {
        data: [],
        max: this._max,
        min: this._min
      }; // If all points are outside of the tile or not

      var Alloutside = false;

      if (this._data.length == 0) {
        if (this._heatmap) this._heatmap.setData(generatedData);
        return "";
      }

      var localMax = 0,
          localMin = 0;

      while (len--) {
        var entry = this._data[len]; //The tile including the point

        var inctile = this._getTileIncludeLatlon(entry, projection);

        var scale = 2 << zoom - 1;
        var radiusMultiplier = this.cfg.scaleRadius ? scale : 1;
        var radius = entry.radius ? entry.radius * radiusMultiplier : (this.cfg.radius || 2) * radiusMultiplier; // distance between the tile & the tile including the point in tile-scale

        var distance = 1 + radius / this.tileResSqrt;

        if (Math.abs(inctile.u - tile.u) <= Math.ceil(distance) && Math.abs(inctile.v - tile.v) <= Math.ceil(distance)) {
          // each value start to count from left-top vertex
          var elon = 360 / this.tileNumSqrtX;
          var offsetlon = entry.lon + 180 - tile.u * elon;
          var elat = 180 / this.tileNumSqrtY;
          var offsetlat = projection == longdo.Projections.EPSG4326 ? 90 - entry.lat - elat * tile.v : 90 - this._lat2y(entry.lat) / 2 - elat * tile.v;
          var x = Math.floor(offsetlon * (this.tileResSqrt / elon));
          var y = Math.floor(offsetlat * (this.tileResSqrt / elat)); // If the point is outside of the tile, this bool is no longer false

          Alloutside = Alloutside || x < 0 || x > this.tileResSqrt || y < 0 || y > this.tileResSqrt;
          generatedData.data.push({
            x: x,
            y: y,
            value: entry.value,
            radius: radius
          });
        }

        localMax = Math.max(entry.value, localMax);
        localMin = Math.min(entry.value, localMin);
      } // Keep the result of tile help reduce load time.


      if (this.Cache[tile.u + "-" + tile.v + "-" + tile.w]) {
        return this.Cache[tile.u + "-" + tile.v + "-" + tile.w];
      } else {
        if (this.cfg.useLocalExtrema) {
          generatedData.max = localMax;
          generatedData.min = localMin;
        } //If all points are outside of the tile...


        if (Alloutside) {
          generatedData.data.push({
            x: 1,
            y: 1,
            value: -Number.EPSILON,
            radius: 0
          }); //note: inserting dummy point to avoid rendering bug
        } // uncomment below if 'canvas height is 0' error occurs
        // this._heatmap._renderer.setDimensions(this.tileResSqrt, this.tileResSqrt);


        this._heatmap.setData(generatedData);

        this.Cache[tile.u + "-" + tile.v + "-" + tile.w] = this._heatmap.getDataURL();
        return this._heatmap.getDataURL();
      }
    };
    /**
     * accepts points & values data
     *
     * @param {*} data points & values data. For syntax, see: https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-register
     */


    HeatmapOverlay.prototype.setData = function (data) {
      this._max = data.max || this._max;
      this._min = data.min || this._min;
      this._data = [];
      var data = data.data,
          len = data.length;

      while (len--) {
        var entry = data[len];
        var d = {
          lat: entry.lat,
          lon: entry.lon,
          value: entry.value
        };
        if (entry.radius) d.radius = entry.radius;

        this._data.push(d);
      }
    };

    HeatmapOverlay.prototype._getTileIncludeLatlon = function (latlon, projection) {
      var tx = latlon.lon + 180;
      var y = projection == longdo.Projections.EPSG4326 ? 90 - latlon.lat : 180 - this._lat2y(latlon.lat);
      var ex = 360 / this.tileNumSqrtX;
      var ey = projection == longdo.Projections.EPSG4326 ? 180 / this.tileNumSqrtY : 360 / this.tileNumSqrtY;
      return {
        u: Math.floor(tx / ex),
        v: Math.floor(y / ey)
      };
    };

    HeatmapOverlay.prototype._clearCache = function () {
      this.Cache = [];
    };
    /*
        Adapted from https://wiki.openstreetmap.org/wiki/Mercator
        */


    HeatmapOverlay.prototype._y2lat = function (y) {
      return (Math.atan(Math.exp(y / (180 / Math.PI))) / (Math.PI / 4) - 1) * 90;
    };

    HeatmapOverlay.prototype._lat2y = function (lat) {
      return Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
    };

    return HeatmapOverlay;
  }
});
// CONCATENATED MODULE: ./src/components/Heatmap.js




/* harmony default export */ var Heatmap = ({
  name: 'LongdoHeatmap',
  mixins: [childDefault, heatmapOptions],
  data: function data() {
    return {
      heatmapLayer: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      var LongdoMapHeatMap = longdomap_heatmap.heatmap(heatmap);
      _this.heatmapLayer = new LongdoMapHeatMap(_this.getHeatmapOptions());

      _this.$emit('add', _this.heatmapLayer);

      _this.setHeatmapLayer();
    });
  },
  destroyed: function destroyed() {
    this.$parent.map.Layers.remove(this.heatmapLayer);
  },
  methods: {
    setHeatmapLayer: function setHeatmapLayer() {
      this.$parent.map.Layers.remove(this.heatmapLayer);

      this.heatmapLayer._clearCache();

      this.heatmapLayer.setData(this.data);
      this.$parent.map.Layers.add(this.heatmapLayer);
    }
  },
  watch: {
    data: function data() {
      this.setHeatmapLayer();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cfbd48d6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Panorama.vue?vue&type=template&id=ae93e2c4&
var Panoramavue_type_template_id_ae93e2c4_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    ref: "panorama",
    staticClass: "ldmap-vue-panorama"
  });
};

var Panoramavue_type_template_id_ae93e2c4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Panorama.vue?vue&type=template&id=ae93e2c4&

// CONCATENATED MODULE: ./src/mixins/panoramaOptions.js
var panoramaOptions_props = {
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
};
/* harmony default export */ var panoramaOptions = ({
  props: panoramaOptions_props,
  methods: {
    getPanoramaOptions: function getPanoramaOptions() {
      var options = {};

      for (var key in panoramaOptions_props) {
        if (this[key] !== null) {
          options[key] = this[key];
        }
      }

      return options;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Panorama.vue?vue&type=script&lang=js&

/* harmony default export */ var Panoramavue_type_script_lang_js_ = ({
  name: 'LongdoPanorama',
  mixins: [panoramaOptions],
  data: function data() {
    return {
      src: '//api.longdo.com/pano/pano-api.min.js',
      isInit: false,
      panorama: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.panoramaReady().then(function () {
      _this.initPano();
    });
  },
  destroyed: function destroyed() {
    this.destroyPano();
  },
  methods: {
    initPano: function initPano() {
      if (typeof window.longdo === 'undefined' || !this.map || this.isInit) return;
      if (typeof window.longdo.PanoramaViewer === 'undefined') return;

      if (!(this.map instanceof window.longdo.Map)) {
        console.error('Longdo Map Vue: Incorrect Longdo Map object');
        return;
      }

      var options = this.getPanoramaOptions();
      options.placeholder = this.$refs.panorama;
      this.panorama = new window.longdo.PanoramaViewer(options);
      this.$emit('load', this.panorama);
      this.isInit = true;
    },
    panoramaReady: function panoramaReady() {
      var _this2 = this;

      var id = 'ldmapVuePanorama';
      return new Promise(function (resolve, reject) {
        if (document.getElementById(id)) {
          resolve();
          return;
        }

        var script = document.createElement('script');

        script.onload = function () {
          resolve();
        };

        script.onerror = function () {
          reject();
        };

        script.id = id;
        script.async = true;
        script.src = _this2.src;
        document.body.appendChild(script);
      });
    },
    destroyPano: function destroyPano() {
      var _this3 = this;

      this.map.Overlays.remove(this.panorama.currentLocationMarker());
      var naviPointer = document.getElementById('pano-current-location-pointer');

      if (naviPointer) {
        this.map.placeholder().removeChild(naviPointer);
      }

      this.panorama.hidePath();
      this.map.Overlays.list().forEach(function (e) {
        if (e.isPanoPoint || e.isPanoLine) {
          _this3.map.Overlays.remove(e);
        }
      });
    }
  },
  watch: {
    map: function map() {
      var _this4 = this;

      if (this.isInit) return;
      this.panoramaReady().then(function () {
        _this4.initPano();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Panorama.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Panoramavue_type_script_lang_js_ = (Panoramavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Panorama.vue?vue&type=style&index=0&id=ae93e2c4&prod&lang=css&
var Panoramavue_type_style_index_0_id_ae93e2c4_prod_lang_css_ = __webpack_require__("33be");

// CONCATENATED MODULE: ./src/components/Panorama.vue






/* normalize component */

var Panorama_component = normalizeComponent(
  components_Panoramavue_type_script_lang_js_,
  Panoramavue_type_template_id_ae93e2c4_render,
  Panoramavue_type_template_id_ae93e2c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Panorama = (Panorama_component.exports);
// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      Vue.component("".concat(prefix, "longdo-map-lock-screen"), LockScreen);
      Vue.component("".concat(prefix, "longdo-map-lock-map"), LockMap);
      Vue.component("".concat(prefix, "longdo-map-menu-bar"), MenuBar);
      Vue.component("".concat(prefix, "longdo-map-tag-panel"), TagPanel);
      Vue.component("".concat(prefix, "longdo-map-custom-control"), CustomControl);
      Vue.component("".concat(prefix, "longdo-map-custom-ui"), CustomUi);
      Vue.component("".concat(prefix, "longdo-map-marker-cluster"), MarkerCluster);
      Vue.component("".concat(prefix, "longdo-map-heatmap"), Heatmap);
      Vue.component("".concat(prefix, "longdo-map-panorama"), Panorama);
    }
  }
};
/* harmony default export */ var src_0 = (components);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=longdo-map-vue.umd.js.map