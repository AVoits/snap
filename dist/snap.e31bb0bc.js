// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils/coordinates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCustomTree = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCartesian(p, angle) {
  var f = getRad(angle);
  var posX = Math.round(p * Math.cos(f));
  var posY = Math.round(p * Math.sin(f));
  return {
    posX: posX,
    posY: posY
  };
}

function getRad(ang) {
  return ang * Math.PI / 180;
} // подумать, как рассчитывать, пока на глаз


var p = 150;
var paddings = 2;

var mapCustomTree = function mapCustomTree(data) {
  var level1 = data.children;
  var level2 = level1.map(function (item) {
    return item.children;
  });
  var lev1 = level1.flat().length;
  var lev2 = level2.flat().length;
  var steps = lev2 + lev1 * 2;
  var angle1 = Math.round(360 / steps);
  var angle = 2 * Math.PI / 360;
  console.log('steps', steps);
  console.log('angle', angle);
  var groups = level1.reduce(function (acc, item) {
    var elementsOnLevel = item.children.flat().length;
    var itemsOnLevel = elementsOnLevel + paddings;
    var nextCount = acc.prev + elementsOnLevel + 2;
    var start = acc.prev * angle;
    var end = itemsOnLevel * angle + start;
    var center = (end - start) / 2 + start;

    var _getCartesian = getCartesian(p, center),
        posX = _getCartesian.posX,
        posY = _getCartesian.posY;

    var startFirstChild = start + angle;
    var children = item.children.map(function (el, index) {
      var startChild = startFirstChild + index * angle;
      var endChild = startChild + angle;
      var center = (endChild - startChild) / 2 + startChild;

      var _getCartesian2 = getCartesian(p * 2, center),
          posX = _getCartesian2.posX,
          posY = _getCartesian2.posY;

      return _objectSpread(_objectSpread({}, el), {}, {
        start: startChild,
        end: endChild,
        center: center,
        posX: posX,
        posY: posY
      });
    });

    var el = _objectSpread(_objectSpread({}, item), {}, {
      children: children,
      start: start,
      end: end,
      center: center,
      posX: posX,
      posY: posY
    });

    return {
      prev: nextCount,
      list: [].concat(_toConsumableArray(acc.list), [el])
    };
  }, {
    prev: 0,
    list: []
  });
  return groups.list;
};

exports.mapCustomTree = mapCustomTree;
},{}],"utils/dataGenerate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.src = void 0;

var _coordinates = require("./coordinates");

var data = {
  name: '1',
  level: 1,
  children: []
};
var levels = 3;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var getChildren = function getChildren(level) {
  if (level < levels) {
    var items1 = Math.round(getRandomArbitrary(2, 5));
    var items = 6;
    var ch = new Array(items).fill('0');
    return ch.map(function (item, index) {
      return {
        name: "".concat(level + 1, "-").concat(index + 1),
        children: getChildren(level + 1),
        level: level + 1
      };
    });
  }

  return [];
};

data.children = getChildren(1);
console.log(data);
var src = (0, _coordinates.mapCustomTree)(data);
exports.src = src;
},{"./coordinates":"utils/coordinates.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _dataGenerate = require("./utils/dataGenerate");

var s = Snap("#svg");

function cr() {
  s.attr({
    width: 800,
    height: 800
  });
  s.attr({
    viewBox: "-400 -400 800 800"
  });
  var radius = 20;
  var styleCircle = {
    stroke: '#929292',
    'strokeWidth': 1,
    fill: '#ffffff'
  };
  var styleLine = {
    stroke: '#929292',
    'strokeWidth': 1,
    fill: 'none'
  };

  var circleR = function circleR(x, y) {
    s.circle(x, y, radius).attr(styleCircle);
  };

  s.circle(0, 0, 150).attr({
    stroke: '#a91ea3',
    'strokeWidth': 1,
    fill: 'transparent'
  });
  s.circle(0, 0, 300).attr({
    stroke: '#a91ea3',
    'strokeWidth': 1,
    fill: 'transparent'
  });
  var elem = document.getElementById('elem');

  var makeInfo = function makeInfo(item) {
    var name = "".concat(item.name);
    var start = "start-end: ".concat(item.start, " - ").concat(item.end);
    var center = "center: ".concat(item.center);
    var pos = "posX-posY: ".concat(item.posX, " - ").concat(item.posY);
    var data = "<div class=\"info\"><div>".concat(name, "</div><div>").concat(start, "</div><div>").concat(center, "</div><div>").concat(pos, "</div></div>");
    elem.insertAdjacentHTML('beforeend', data);
  };

  var makeSVG = function makeSVG(item, lineStartX, lineStartY) {
    s.line(lineStartX, lineStartY, item.posX, item.posY).attr(styleLine);
    circleR(item.posX, item.posY);
    s.text(item.posX, item.posY, item.center);
  };

  var makeTriangle = function makeTriangle(item, topX, topY) {
    s.polygon(topX, topY, item.posX, item.posX, 100, 100).attr(styleCircle);
  };

  _dataGenerate.src.map(function (item) {
    item.children.map(function (el) {
      // makeInfo(el)
      makeTriangle(el, item.posX, item.posY); // makeSVG(el, item.posX, item.posY)
    }); // makeInfo(item)
    // makeSVG(item, 0, 0)

    makeTriangle(item, 0, 0);
  });
}

cr();
},{"./utils/dataGenerate":"utils/dataGenerate.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57125" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/snap.e31bb0bc.js.map