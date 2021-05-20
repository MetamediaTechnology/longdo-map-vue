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

/***/ "1735":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2de2");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("acc14f86", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "228f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_b2f2270c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8dbd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_b2f2270c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_style_index_0_id_b2f2270c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ "2de2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-container[data-v-12c258e4]{width:100%;height:100%;position:relative;font-family:Tahoma,sans-serif}.ldmap-vue-placeholder[data-v-12c258e4]{width:inherit;height:inherit}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3c5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_12c258e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1735");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_12c258e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LongdoMap_vue_vue_type_style_index_0_id_12c258e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "8dbd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c3ff");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("56bebb03", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a214":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-marker-transition-fade{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.2s;transition-duration:.2s}.ldmap-vue-marker-transition-fade-start{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c078":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc6d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c3ff":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ldmap-vue-lock-screen[data-v-b2f2270c]{position:absolute;top:0;left:0;width:100%;height:100%}.ldmap-vue-lock-screen-unlock[data-v-b2f2270c]{pointer-events:none}.ldmap-vue-lock-screen-button-container[data-v-b2f2270c]{display:inline-block;pointer-events:auto}.ldmap-vue-lock-screen-button[data-v-b2f2270c]{position:absolute;bottom:0;left:0;color:#fff;background-color:#2a5082;font-size:.875rem;line-height:1.25rem;font-weight:700;border:0;border-radius:.25rem;margin:0 0 1rem 1rem;padding:.5rem 1rem .5rem 1rem;cursor:pointer;opacity:.05;-webkit-box-shadow:2px 3px 4px rgba(0,0,0,.2);box-shadow:2px 3px 4px rgba(0,0,0,.2);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.5s;transition-duration:.5s}.ldmap-vue-lock-screen:hover .ldmap-vue-lock-screen-button[data-v-b2f2270c]{opacity:1}.ldmap-vue-lock-screen-touch[data-v-b2f2270c]{height:100%;width:100%;overflow:hidden;opacity:0;background-color:rgba(0,0,0,.5);-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.5s;transition-duration:.5s}.ldmap-vue-lock-screen-touch-message[data-v-b2f2270c]{top:50%;position:relative;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);text-align:center;font-size:1.5rem;line-height:2rem;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ldmap-vue-lock-screen-touch-active[data-v-b2f2270c]{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cc6d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a214");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c7f8f344", content, true, {"sourceMap":false,"shadowMode":false});

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
  load: function load(_ref) {
    var _ref$apiKey = _ref.apiKey,
        apiKey = _ref$apiKey === void 0 ? null : _ref$apiKey,
        _ref$src = _ref.src,
        src = _ref$src === void 0 ? null : _ref$src;

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

    if (apiKey) {
      url += "?key=".concat(apiKey);
      this.apiKey = apiKey;
    }

    this.importLongdoMap(url);
  },
  initLongdoMap: function initLongdoMap(init) {
    if (window.longdo) {
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"013355ee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=template&id=12c258e4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ldmap-vue-container"},[_c('div',{ref:"map",staticClass:"ldmap-vue-placeholder"}),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LongdoMap.vue?vue&type=template&id=12c258e4&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LongdoMap.vue?vue&type=script&lang=js&
//
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
// EXTERNAL MODULE: ./src/components/LongdoMap.vue?vue&type=style&index=0&id=12c258e4&scoped=true&lang=css&
var LongdoMapvue_type_style_index_0_id_12c258e4_scoped_true_lang_css_ = __webpack_require__("3c5d");

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
  "12c258e4",
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
  },
  transition: {
    type: Boolean,
    default: false
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
          } else if (key === 'transition') {
            continue;
          } else {
            options[key] = this[key];
          }
        }
      }

      return options;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Marker.vue?vue&type=script&lang=js&


/* harmony default export */ var Markervue_type_script_lang_js_ = ({
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
      this.setTransition(this.marker);
      this.$emit('add', this.marker);
    },
    setTransition: function setTransition(marker) {
      if (this.transition) {
        var elm = marker.element();
        elm.classList.add('ldmap-vue-marker-transition-fade');
        setTimeout(function () {
          elm.classList.add('ldmap-vue-marker-transition-fade-start');
        }, 500);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Marker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Markervue_type_script_lang_js_ = (Markervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Marker.vue?vue&type=style&index=0&lang=css&
var Markervue_type_style_index_0_lang_css_ = __webpack_require__("c078");

// CONCATENATED MODULE: ./src/components/Marker.vue
var Marker_render, Marker_staticRenderFns





/* normalize component */

var Marker_component = normalizeComponent(
  components_Markervue_type_script_lang_js_,
  Marker_render,
  Marker_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Marker = (Marker_component.exports);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"013355ee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockScreen.vue?vue&type=template&id=b2f2270c&scoped=true&
var LockScreenvue_type_template_id_b2f2270c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.lockScreenReady),expression:"lockScreenReady"}],class:['ldmap-vue-lock-screen', { 'ldmap-vue-lock-screen-unlock': !_vm.value }]},[(_vm.mode === 'button' && !_vm.hideButton)?[_c('div',{staticClass:"ldmap-vue-lock-screen-button-container"},[(_vm.hasButtonSlot)?_vm._t("button"):_c('button',{staticClass:"ldmap-vue-lock-screen-button",on:{"click":function($event){return _vm.lockMap(!_vm.value)}}},[_vm._v(" "+_vm._s(_vm.value ? _vm.unlockMessageText : _vm.lockMessage)+" ")])],2)]:(_vm.mode === 'touch')?_c('div',{ref:"touchArea",staticClass:"ldmap-vue-lock-screen-touch",on:{"wheel":_vm.wheelEvent,"touchstart":_vm.touchStartEvent,"touchmove":_vm.touchMoveEvent,"touchend":_vm.touchEndEvent,"click":_vm.clickEvent}},[_c('div',{staticClass:"ldmap-vue-lock-screen-touch-message"},[_vm._v(" "+_vm._s(_vm.unlockMessageText)+" ")])]):_vm._e()],2)}
var LockScreenvue_type_template_id_b2f2270c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LockScreen.vue?vue&type=template&id=b2f2270c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
      default: undefined
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
      touchModeReady: false,
      unlockMessageText: '',
      wheelTimeout: undefined
    };
  },
  computed: {
    hasButtonSlot: function hasButtonSlot() {
      return this.$slots.button;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      _this.lockScreenReady = true;

      switch (_this.mode) {
        case 'button':
          _this.setButtonMode();

          break;

        case 'touch':
          _this.setTouchMode();

          break;
      }
    });
  },
  // destroyed () {
  //   this.$parent.map.Overlays.remove(this.marker)
  // },
  methods: {
    setButtonMode: function setButtonMode() {
      this.unlockMessageText = this.unlockMessage === undefined ? 'Unlock' : this.unlockMessage;
    },
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

      if (this.mode !== 'touch') return;
      this.unlockMessageText = this.unlockMessageKeyboard;

      if (!this.wheelTimeout && this.$refs.touchArea) {
        this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active');
        this.wheelTimeout = setTimeout(function () {
          _this2.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active');

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

      if (this.mode !== 'touch') return;
      this.unlockMessageText = this.unlockMessageKeyboard;

      if (!this.wheelTimeout && this.$refs.touchArea) {
        this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active');
        this.wheelTimeout = setTimeout(function () {
          _this3.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active');

          _this3.wheelTimeout = undefined;
        }, 1000);
      }
    },
    touchStartEvent: function touchStartEvent(e) {
      this.unlockMessageText = this.unlockMessage === undefined ? 'Use two fingers to move the map' : this.unlockMessage;

      if (e.touches.length > 0) {
        this.lockMap(false);
        this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active');
      }
    },
    touchMoveEvent: function touchMoveEvent(e) {
      if (e.touches.length > 1) {
        this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active');
      }
    },
    touchEndEvent: function touchEndEvent() {
      this.lockMap(true);
      this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active');
    },
    setTouchMode: function setTouchMode() {
      this.setKeyboardMode();
      this.touchModeReady = true;
    },
    clearTouchModeEvent: function clearTouchModeEvent() {
      window.removeEventListener('keydown', this.keyDownEvent);
      window.removeEventListener('keyup', this.keyUpEvent);
      this.touchModeReady = false;
    },
    lockMap: function lockMap(lock) {
      this.$emit('input', lock);
    }
  },
  watch: {
    mode: function mode(n) {
      var _this4 = this;

      this.unlockMessageText = '';

      if (n === 'touch' && !this.touchModeReady) {
        this.$nextTick(function () {
          _this4.setTouchMode();
        });
      } else if (n === 'button') {
        this.clearTouchModeEvent();
        this.setButtonMode();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/LockScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LockScreenvue_type_script_lang_js_ = (LockScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LockScreen.vue?vue&type=style&index=0&id=b2f2270c&scoped=true&lang=css&
var LockScreenvue_type_style_index_0_id_b2f2270c_scoped_true_lang_css_ = __webpack_require__("228f");

// CONCATENATED MODULE: ./src/components/LockScreen.vue






/* normalize component */

var LockScreen_component = normalizeComponent(
  components_LockScreenvue_type_script_lang_js_,
  LockScreenvue_type_template_id_b2f2270c_scoped_true_render,
  LockScreenvue_type_template_id_b2f2270c_scoped_true_staticRenderFns,
  false,
  null,
  "b2f2270c",
  null
  
)

/* harmony default export */ var LockScreen = (LockScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"013355ee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockMap.vue?vue&type=template&id=085fe007&
var LockMapvue_type_template_id_085fe007_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.display)?_c('div',[_vm._t("button")],2):_vm._e()}
var LockMapvue_type_template_id_085fe007_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LockMap.vue?vue&type=template&id=085fe007&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LockMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var LockMapvue_type_script_lang_js_ = ({
  name: 'LockMap',
  mixins: [childDefault],
  props: {
    lock: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      display: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mapReady.then(function () {
      _this.$parent.map.Ui.lockMap();

      if (_this.$slots.button && _this.$slots.button[0] && _this.$slots.button[0].elm) {
        var newButton = _this.$slots.button[0].elm;
        var oldButton = document.getElementsByClassName('ldmap_lock_button')[0];

        if (oldButton) {
          oldButton.parentNode.replaceChild(newButton, oldButton);
        } else {
          _this.display = false;
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
  LockMapvue_type_template_id_085fe007_render,
  LockMapvue_type_template_id_085fe007_staticRenderFns,
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
// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
      Vue.component("".concat(prefix, "longdo-map-lock-screen"), LockScreen);
      Vue.component("".concat(prefix, "longdo-map-lock-map"), LockMap);
      Vue.component("".concat(prefix, "longdo-map-menu-bar"), MenuBar);
      Vue.component("".concat(prefix, "longdo-map-tag-panel"), TagPanel);
      Vue.component("".concat(prefix, "longdo-map-custom-control"), CustomControl);
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