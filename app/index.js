/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _dbindRouter = __webpack_require__(23);

	var _route = __webpack_require__(29);

	var _route2 = _interopRequireDefault(_route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(64);

	var App = _dbind2.default.createClass({
	  data: {
	    RouteConfig: _route2.default
	  },
	  willMount: function willMount() {},

	  template: '\n    <router\n      route-config="{{ RouteConfig }}"\n      root-path="/view"\n    ></router>\n  ',
	  components: {
	    'router': _dbindRouter.Router
	  }
	});

	_dbind2.default.registerComponent('app', App);
	_dbind2.default.watch(document.body);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Component = __webpack_require__(4);

	var _Component2 = _interopRequireDefault(_Component);

	var _watch2 = __webpack_require__(6);

	var _watch3 = _interopRequireDefault(_watch2);

	var _registerComponent2 = __webpack_require__(22);

	var _registerComponent3 = _interopRequireDefault(_registerComponent2);

	var _ComponentManager = __webpack_require__(15);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  createClass: function createClass(componentInf) {
	    return (0, _ComponentManager.createComponentManager)(componentInf);
	  },
	  registerComponent: function registerComponent(key, component) {
	    return (0, _registerComponent3.default)(key, component);
	  },
	  watch: function watch(element, data) {
	    return new (Function.prototype.bind.apply(_watch3.default, [null].concat(Array.prototype.slice.call(arguments))))();
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ComponentLifecycle = undefined;

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _utilityFunc = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var ComponentLifecycle = exports.ComponentLifecycle = ['didMount', 'willMount', 'willUpdate', 'shouldUpdate'];

	var Component = function () {
	  function Component() {
	    _classCallCheck(this, Component);

	    this.watcher = null;
	    this.element = null;
	    this.refs = null;
	    this.template = null;
	    this.props = null;
	    this.data = null;
	    this.propTypes = null;
	  }

	  _createClass(Component, [{
	    key: 'init',
	    value: function init(watcher, props) {
	      this.watcher = watcher;
	      this.props = props;
	    }
	  }, {
	    key: 'setDOMElement',
	    value: function setDOMElement(element) {
	      this.element = element;
	      this.__setRefs();
	    }
	  }, {
	    key: 'trackingUpdate',
	    value: function trackingUpdate(data) {
	      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      var prevData = (0, _utilityFunc.objectAssign)({}, this.data);
	      for (var key in data) {
	        this.data[key] = data[key];
	      }
	      this.watcher.obwatcher.reset(cb, prevData, this.data);
	    }
	  }, {
	    key: 'setProps',
	    value: function setProps(props) {
	      this.props = props;
	    }
	  }, {
	    key: '__setRefs',
	    value: function __setRefs() {
	      var refs = {};
	      (0, _utilityFunc.walkElement)(this.element, function (element) {
	        var ref = element.getAttribute && element.getAttribute('ref');
	        ref && (refs[ref] = element);
	      });
	      this.refs = refs;
	    }
	  }, {
	    key: 'didMount',
	    value: function didMount() {}
	  }, {
	    key: 'willMount',
	    value: function willMount() {}
	  }, {
	    key: 'willUpdate',
	    value: function willUpdate() {}
	  }, {
	    key: 'shouldUpdate',
	    value: function shouldUpdate() {
	      return true;
	    }
	  }]);

	  return Component;
	}();

	exports.default = Component;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	exports.delay = delay;
	exports.clearDelay = clearDelay;
	exports.is = is;
	exports.deepClone = deepClone;
	exports.randomId = randomId;
	exports.objectAssign = objectAssign;
	exports.walkElement = walkElement;
	exports.toHump = toHump;
	exports.toHumpBack = toHumpBack;
	function toArray(arrayLike) {
	  return [].slice.call(arrayLike);
	}
	function delay(fn) {
	  var t = Date.now();
	  return setTimeout(function () {
	    fn(Date.now() - t);
	  });
	}
	function clearDelay(delay) {
	  clearTimeout(delay);
	}
	function is(target, type) {
	  return Object.prototype.toString.call(target).toLowerCase() === '[object ' + type.toLowerCase() + ']';
	}
	function deepClone(t) {
	  if (is(t, 'array')) {
	    return t.map(function (item) {
	      return deepClone(item);
	    });
	  } else if (is(t, 'object')) {
	    var nt = {};
	    for (var key in t) {
	      if (t.hasOwnProperty(key)) nt[key] = deepClone(t[key]);
	    }
	    nt.__proto__ = t.__proto__;
	    return nt;
	  } else {
	    return t;
	  }
	}
	function randomId() {
	  return Date.now() + Math.random();
	}
	function objectAssign() {
	  var arg = [].slice.call(arguments, 1);
	  var target = arguments[0];
	  arg.forEach(function (item) {
	    for (var key in item) {
	      target[key] = item[key];
	    }
	  });
	  return target;
	}
	function walkElement(dom, cb) {
	  if (is(dom, 'array')) {
	    dom.forEach(function (item) {
	      while (item) {
	        cb(item);
	        walkElement(item.firstElementChild, cb);
	        item = item.nextElementSibling;
	      }
	    });
	  } else {
	    while (dom) {
	      cb(dom);
	      walkElement(dom.firstElementChild, cb);
	      dom = dom.nextElementSibling;
	    }
	  }
	}
	function toHump(str) {
	  return str.replace(/-(.)/g, function (a, b) {
	    return String.fromCharCode(b.charCodeAt(0) - 32);
	  });
	}

	function toHumpBack(str) {
	  var strArr = str.split('');
	  strArr = strArr.map(function (item) {
	    var code = item.charCodeAt(0);
	    if (code >= 65 && code <= 90) {
	      return '-' + String.fromCharCode(code + 32);
	    }
	    return item;
	  });
	  return strArr.join('');
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _BaseWatcher = __webpack_require__(7);

	var _BaseWatcher2 = _interopRequireDefault(_BaseWatcher);

	var _utilityFunc = __webpack_require__(5);

	var _modelSettlement = __webpack_require__(9);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var Watch = function () {
	  function Watch(DOM, data) {
	    _classCallCheck(this, Watch);

	    this.DOM = DOM;
	    this.data = data;
	    this.modelId = (0, _utilityFunc.randomId)();
	    this.init();
	  }

	  _createClass(Watch, [{
	    key: 'init',
	    value: function init() {
	      this.watcher = new _BaseWatcher2.default(this.DOM, this.data, null, null, this.modelId);
	    }
	  }]);

	  return Watch;
	}();

	exports.default = Watch;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _utilityFunc = __webpack_require__(5);

	var _ManagerWatcher = __webpack_require__(8);

	var _ManagerWatcher2 = _interopRequireDefault(_ManagerWatcher);

	var _ElementWatcher = __webpack_require__(11);

	var _ElementWatcher2 = _interopRequireDefault(_ElementWatcher);

	var _ComponentWatcher = __webpack_require__(14);

	var _ComponentWatcher2 = _interopRequireDefault(_ComponentWatcher);

	var _TextWatcher = __webpack_require__(18);

	var _TextWatcher2 = _interopRequireDefault(_TextWatcher);

	var _modelExtract2 = __webpack_require__(20);

	var _modelExtract3 = _interopRequireDefault(_modelExtract2);

	var _runResetWatcher2 = __webpack_require__(21);

	var _runResetWatcher3 = _interopRequireDefault(_runResetWatcher2);

	var _statementExtract2 = __webpack_require__(13);

	var _statementExtract3 = _interopRequireDefault(_statementExtract2);

	var _modelSettlement = __webpack_require__(9);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var BaseWatcher = function () {
	  function BaseWatcher(element, obdata) {
	    var previous = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var forceWatcherType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	    var modelExtractId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	    var components = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
	    var parentWatcher = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
	    var obId = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

	    _classCallCheck(this, BaseWatcher);

	    this.obId = obId;
	    this.element = element;
	    this.components = components;
	    this.parentWatcher = parentWatcher;
	    this.obdata = obdata;
	    this.previous = previous;
	    this.rendering = null;
	    this.hasDelete = false;
	    this.modelExtractId = modelExtractId;
	    this.pastDOMInformation = this.__getPastDOMInformation();
	    this.obtype = this.__getType(forceWatcherType);
	    this.obwatcher = this.__getWatcher();
	    this.__hangonModel(this.modelExtractId);

	    this.render();
	  }

	  _createClass(BaseWatcher, [{
	    key: 'destructor',
	    value: function destructor() {
	      this.hasDelete = true;
	      this.obwatcher.destructor();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.obwatcher.render();
	    }
	  }, {
	    key: 'reset',
	    value: function reset(data) {
	      var _this = this;

	      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      if (this.rendering !== null) {
	        clearTimeout(this.rendering);
	      }
	      var prevData = (0, _utilityFunc.objectAssign)({}, this.obdata);
	      var nextData = (0, _utilityFunc.objectAssign)({}, this.obdata);
	      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	        throw new TypeError('data is not a object');
	      } else {
	        for (var key in data) {
	          nextData[key] = data[key];
	        }
	      }
	      this.obdata = nextData;
	      this.rendering = (0, _utilityFunc.delay)(function (time) {
	        if (!_this.hasDelete) {
	          _this.obwatcher.reset(cb, prevData, nextData);
	        }
	        _this.rendering = null;
	        cb();
	      });
	    }
	  }, {
	    key: 'trackingUpdate',
	    value: function trackingUpdate(data) {
	      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	      var resetWatcherList = [];
	      for (var key in data) {
	        if (data.hasOwnProperty(key)) {
	          resetWatcherList.push((0, _modelSettlement.get)(this.modelExtractId, key));
	        }
	      }
	      this.runResetWatcher(resetWatcherList, data, cb);
	    }
	  }, {
	    key: 'runResetWatcher',
	    value: function runResetWatcher(resetWatcherList, data, cb) {
	      (0, _runResetWatcher3.default)(resetWatcherList, data, cb);
	    }
	  }, {
	    key: '__getWatcher',
	    value: function __getWatcher() {
	      var watcherClass = null;
	      switch (this.obtype) {
	        case BaseWatcher.ManagerWatcher:
	          watcherClass = _ManagerWatcher2.default;
	          break;
	        case BaseWatcher.ElementWatcher:
	          watcherClass = _ElementWatcher2.default;
	          break;
	        case BaseWatcher.TextWatcher:
	          watcherClass = _TextWatcher2.default;
	          break;
	        case BaseWatcher.ComponentWatcher:
	          watcherClass = _ComponentWatcher2.default;
	          break;
	      }
	      return new watcherClass(this, BaseWatcher);
	    }
	  }, {
	    key: '__getType',
	    value: function __getType(forceWatcherType) {
	      if (forceWatcherType !== null) {
	        return forceWatcherType;
	      }
	      var NODE_TYPE = this.element.nodeType,
	          NODE_NAME = this.element.nodeName.toLowerCase();
	      if (NODE_TYPE === 3) {
	        return BaseWatcher.TextWatcher;
	      } else if (NODE_TYPE === 1) {
	        var attr = this.pastDOMInformation.attr;
	        var isManagerWatcher = false;
	        for (var i = 0, len = attr.length; i < len; i++) {
	          if (attr[i].name === _ManagerWatcher2.default.instructions[0]) {
	            isManagerWatcher = true;
	            break;
	          }
	        }
	        if (isManagerWatcher) {
	          return BaseWatcher.ManagerWatcher;
	        } else if (_ComponentWatcher2.default.nodeName === NODE_NAME || _ComponentWatcher2.default.components[NODE_NAME] || this.components && this.components[NODE_NAME]) {
	          return BaseWatcher.ComponentWatcher;
	        } else {
	          return BaseWatcher.ElementWatcher;
	        }
	      } else {
	        throw 'watcher只能接受元素节点或者文本节点';
	      }
	    }
	  }, {
	    key: '__getPastDOMInformation',
	    value: function __getPastDOMInformation() {
	      return {
	        parentNode: this.element.parentNode,
	        nextSibling: this.element.nextSibling,
	        textContent: this.element.textContent,
	        innerHTML: this.element.innerHTML,
	        nodeType: this.element.nodeType,
	        nodeName: this.element.nodeName,
	        attr: this.__getAttr(),
	        display: this.__getDisplay()
	      };
	    }
	  }, {
	    key: '__getDisplay',
	    value: function __getDisplay() {
	      return this.element.nodeType !== BaseWatcher.TextWatcher && getComputedStyle(this.element).display;
	    }
	  }, {
	    key: '__getAttr',
	    value: function __getAttr() {
	      return this.element.attributes ? (0, _utilityFunc.toArray)(this.element.attributes) : [];
	    }
	  }, {
	    key: '__getWatcherType',
	    value: function __getWatcherType(watcher) {
	      return watcher.type;
	    }
	  }, {
	    key: '__filterAttr',
	    value: function __filterAttr() {
	      var keeplist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      return this.pastDOMInformation.attr.filter(function (item) {
	        return type ? keeplist.indexOf(item.name) > -1 : keeplist.indexOf(item.name) === -1;
	      });
	    }
	  }, {
	    key: '__hangonModel',
	    value: function __hangonModel() {
	      var _this2 = this;

	      var model = this.obwatcher.model;
	      if (model) {
	        model.forEach(function (item) {
	          (0, _modelSettlement.set)(_this2.modelExtractId, item, _this2);
	        });
	      }
	    }
	  }, {
	    key: 'getChildId',
	    value: function getChildId(i) {
	      return this.obId + '.' + i;
	    }
	  }, {
	    key: 'removeAttr',
	    value: function removeAttr(name) {
	      this.element.removeAttribute(name);
	    }
	  }, {
	    key: 'modelExtract',
	    value: function modelExtract(str) {
	      return (0, _modelExtract3.default)(str);
	    }
	  }, {
	    key: 'traversalPrevious',
	    value: function traversalPrevious(cb) {
	      var previousWatcher = this.previous;
	      while (previousWatcher) {
	        if (cb(previousWatcher) === false) break;
	        previousWatcher = previousWatcher.previous;
	      }
	    }
	  }, {
	    key: 'statementExtract',
	    value: function statementExtract(str) {
	      return (0, _statementExtract3.default)(str);
	    }
	  }, {
	    key: 'execStatement',
	    value: function execStatement(statement) {
	      return new Function('data', 'with(data) { return ' + statement + ';}')(this.obdata);
	    }
	  }]);

	  return BaseWatcher;
	}();

	BaseWatcher.ManagerWatcher = 1;
	BaseWatcher.ElementWatcher = 2;
	BaseWatcher.TextWatcher = 3;
	BaseWatcher.ComponentWatcher = 4;
	exports.default = BaseWatcher;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _utilityFunc = __webpack_require__(5);

	var _modelSettlement = __webpack_require__(9);

	var _traversalVector = __webpack_require__(10);

	var _traversalVector2 = _interopRequireDefault(_traversalVector);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var ManagerWatcher = function () {
	  function ManagerWatcher(base, BaseWatcher) {
	    _classCallCheck(this, ManagerWatcher);

	    this.base = base;
	    this.BaseWatcher = BaseWatcher;
	    this.instruction = this.__getInstruction();
	    this.vector = null;
	    this.model = this.__getModel();
	    this.parameter = this.__getParameter();
	    this.childWacther = null;
	    this.__check();
	    this.__removeRootElement();
	  }

	  _createClass(ManagerWatcher, [{
	    key: 'destructor',
	    value: function destructor() {
	      this.childWacther.forEach(function (item) {
	        return item.destructor();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var childIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      this.__setChildWatcher(childIndex);
	      this.__appendChildWatcherToDOM(childIndex);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	      var prevData = arguments[1];
	      var nextData = arguments[2];

	      var prevLen = prevData[this.vector].length;
	      var nextLen = nextData[this.vector].length;
	      if (prevLen < nextLen) {
	        this.render(prevLen);
	      } else if (prevLen > nextLen) {
	        for (var i = nextLen; i < prevLen; i++) {
	          this.childWacther[i].destructor();
	        }
	        this.childWacther = this.childWacther.slice(0, nextLen);
	      }
	    }
	  }, {
	    key: '__appendChildWatcherToDOM',
	    value: function __appendChildWatcherToDOM(childIndex) {
	      var frg = document.createDocumentFragment(),
	          next = this.base.pastDOMInformation.nextSibling;
	      for (var i = childIndex, len = this.childWacther.length; i < len; i++) {
	        frg.appendChild(this.childWacther[i][0]);
	      }
	      if (next) {
	        next.parentNode.insertBefore(frg, next);
	      } else {
	        this.base.pastDOMInformation.parentNode.appendChild(frg);
	      }
	      for (var _i = childIndex, _len = this.childWacther.length; _i < _len; _i++) {
	        this.childWacther[_i] = new (Function.prototype.bind.apply(this.BaseWatcher, [null].concat(_toConsumableArray(this.childWacther[_i]))))();
	      }
	    }
	  }, {
	    key: '__check',
	    value: function __check() {
	      var res = /[a-zA-Z_$][a-zA-Z_$0-9]*(\s*,\s*[a-zA-Z_$][a-zA-Z_$0-9]*){0,2}\s*in\s*/.test(this.instruction.value);
	      if (!res) {
	        throw '';
	      }
	    }
	  }, {
	    key: '__setChildWatcher',
	    value: function __setChildWatcher(childIndex) {
	      var _this = this;

	      var vector = new Function('data', 'with(data) { return ' + this.vector + ' }')(this.base.obdata).slice(childIndex);
	      var child = [];
	      (0, _traversalVector2.default)(vector, function (key, count) {
	        if ((0, _utilityFunc.is)(vector, 'array')) {
	          key += childIndex;
	        }
	        count += childIndex;
	        var obdata = (0, _utilityFunc.objectAssign)({}, _this.base.obdata);
	        obdata[_this.parameter[0]] = key;
	        _this.parameter[1] && (obdata[_this.parameter[1]] = count);
	        child.push([_this.__cloneElement(_this.base.element.innerHTML), obdata, _this.base.previous, null, _this.base.modelExtractId, _this.base.components, _this.base, _this.base.getChildId(count)]);
	      });
	      if (childIndex > 0) {
	        for (var i = 0, len = child.length; i < len; i++) {
	          this.childWacther.push(child[i]);
	        }
	      } else {
	        this.childWacther = child;
	      }
	    }
	  }, {
	    key: '__removeRootElement',
	    value: function __removeRootElement() {
	      var element = this.base.element;
	      element.parentNode.removeChild(element);
	    }
	  }, {
	    key: '__cloneElement',
	    value: function __cloneElement() {
	      var innerHTML = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      var cloneNode = this.base.element.cloneNode();
	      cloneNode.innerHTML = innerHTML;
	      cloneNode.removeAttribute(ManagerWatcher.instructions[0]);
	      return cloneNode;
	    }
	  }, {
	    key: '__getModel',
	    value: function __getModel() {
	      var _this2 = this;

	      var res = [];
	      var flag = false;
	      this.base.modelExtract(this.instruction.value).forEach(function (item) {
	        flag && res.push(item.value);
	        if (item.value === ManagerWatcher.eachSplitInstructionChar) {
	          flag = true;
	          _this2.vector = _this2.instruction.value.slice(item.index + ManagerWatcher.eachSplitInstructionChar.length).replace(/\s/g, '');
	        };
	      });
	      return res.length > 0 ? res : null;
	    }
	  }, {
	    key: '__getParameter',
	    value: function __getParameter() {
	      var res = [];
	      var flag = false;
	      this.base.modelExtract(this.instruction.value).forEach(function (item) {
	        if (item.value === ManagerWatcher.eachSplitInstructionChar) flag = true;
	        !flag && res.push(item.value);
	      });
	      return res;
	    }
	  }, {
	    key: '__getInstruction',
	    value: function __getInstruction() {
	      return this.base.__filterAttr(ManagerWatcher.instructions, true)[0];
	    }
	  }]);

	  return ManagerWatcher;
	}();

	ManagerWatcher.instructions = ['data-each'];
	ManagerWatcher.eachSplitInstructionChar = 'in';
	exports.default = ManagerWatcher;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.set = set;
	exports.get = get;
	exports.all = all;
	exports.deleteOne = deleteOne;
	exports.deleteAll = deleteAll;

	var _BaseWatcher = __webpack_require__(7);

	var _BaseWatcher2 = _interopRequireDefault(_BaseWatcher);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var modelSettlement = {};

	function set(modelExtractId, key, watcher) {
	  if (!(watcher instanceof _BaseWatcher2.default)) throw new TypeError('watcher must extends from BaseWatcher');
	  if (!modelSettlement[modelExtractId]) {
	    modelSettlement[modelExtractId] = {};
	  }
	  var target = modelSettlement[modelExtractId];
	  if (target[key]) {
	    target[key][watcher.obId] = watcher;
	  } else {
	    target[key] = _defineProperty({}, watcher.obId, watcher);
	  }
	}
	function get(modelExtractId, key) {
	  return modelSettlement[modelExtractId] && modelSettlement[modelExtractId][key] || null;
	}
	function all(modelExtractId) {
	  return modelSettlement[modelExtractId];
	}
	function deleteOne(modelExtractId, key) {
	  delete modelSettlement[modelExtractId][key];
	}
	function deleteAll(modelExtractId) {
	  modelSettlement[modelExtractId] = null;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = traversalVector;

	var _utilityFunc = __webpack_require__(5);

	function traversalVector(vector, cb) {
	  if (!(0, _utilityFunc.is)(cb, 'function')) {
	    throw new TypeError('cb is not a function');
	  }
	  if ((0, _utilityFunc.is)(vector, 'array')) {
	    vector.forEach(function (item, index) {
	      cb(index, index);
	    });
	  } else if ((0, _utilityFunc.is)(vector, 'object')) {
	    var count = 0;
	    for (var key in vector) {
	      if (vector.hasOwnProperty(key)) {
	        cb(key, count++);
	      }
	    }
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ElementWatcher$instr;

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _Event = __webpack_require__(12);

	var _utilityFunc = __webpack_require__(5);

	var _statementExtract = __webpack_require__(13);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var ElementWatcher = function () {
	  function ElementWatcher(base, BaseWatcher) {
	    _classCallCheck(this, ElementWatcher);

	    this.base = base;
	    this.BaseWatcher = BaseWatcher;
	    this.__setObIdAttr();
	    this.instructions = this.__getInstructions();
	    this.instructionsList = this.instructions.map(function (item) {
	      return item.name;
	    });
	    this.instructionsModel = null;
	    this.events = this.__getEvents();
	    this.attrs = this.__getAttrs();
	    this.model = this.__getModel();

	    this.renderCount = 0;

	    this.rendering = false;
	    this.resolvedInstructions = null;
	    this.renderInf = null;
	    this.childWatchers = null;
	  }

	  _createClass(ElementWatcher, [{
	    key: 'destructor',
	    value: function destructor() {
	      var node = this.base.element;
	      node.parentNode.removeChild(node);
	      this.__destructorChild();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      this.resolvedInstructions = this.__execInstructions();
	      this.renderInf = this.__handleResolvedInstructions();
	      if (this.renderInf.shouldRender || this.renderInf.shouldRender === null) {
	        if (this.renderInf.shouldRender) {
	          this.__setBaseElementDisplay(this.base.pastDOMInformation.display);
	        }
	        this.__bindAttrs();
	        if (this.renderInf.shouldInit) {
	          this.__bindEvents();
	        }
	        if (!this.childWatchers) {
	          this.__setChildWatcher();
	        }
	      } else {
	        if (this.childWatchers) {
	          this.__destructorChild();
	          this.base.element.innerHTML = this.base.pastDOMInformation.innerHTML;
	        }
	        this.__setBaseElementDisplay('none');
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	      var prevData = arguments[1];
	      var nextData = arguments[2];

	      if (prevData !== nextData) {
	        this.render(cb);
	      }
	    }
	  }, {
	    key: '__destructorChild',
	    value: function __destructorChild() {
	      this.childWatchers && this.childWatchers.forEach(function (item) {
	        return item.destructor();
	      });
	      this.childWatchers = null;
	    }
	  }, {
	    key: '__setChildWatcher',
	    value: function __setChildWatcher() {
	      var _this = this;

	      if (ElementWatcher.escapeNode.indexOf(this.base.pastDOMInformation.nodeName.toLowerCase()) > -1) return;
	      if (this.renderInf.shouldRenderHtml) {
	        this.childWatchers = [new this.BaseWatcher(this.base.element, (0, _utilityFunc.objectAssign)({}, this.base.obdata), null, this.BaseWatcher.TextWatcher, this.base.modelExtractId, this.base.components, this.base)];
	      } else {
	        (function () {
	          var previousWatcher = null;
	          _this.childWatchers = (0, _utilityFunc.toArray)(_this.base.element.childNodes).map(function (item, index) {
	            var childWatcher = new _this.BaseWatcher(item, (0, _utilityFunc.objectAssign)({}, _this.base.obdata), previousWatcher, null, _this.base.modelExtractId, _this.base.components, _this.base, _this.base.getChildId(index));
	            previousWatcher = childWatcher;
	            return childWatcher;
	          });
	        })();
	      }
	    }
	  }, {
	    key: '__setBaseElementDisplay',
	    value: function __setBaseElementDisplay(display) {
	      this.base.element.style.display = display;
	    }
	  }, {
	    key: '__setObIdAttr',
	    value: function __setObIdAttr() {
	      this.base.element.setAttribute('data-ob-id', this.base.obId);
	    }
	  }, {
	    key: '__getInstructionsModel',
	    value: function __getInstructionsModel() {
	      var _this2 = this;

	      var res = [];
	      this.instructionsModel = {};
	      this.instructions.forEach(function (instruction) {
	        _this2.base.modelExtract(instruction.value).forEach(function (item) {
	          res.push(item.value);
	          _this2.instructionsModel[instruction.name] = item.value;
	        });
	      });
	      if (this.hasElseInstruction()) {
	        res = res.concat(this.__getPrevIfInstructionModel());
	      }
	      return res;
	    }
	  }, {
	    key: '__getPrevIfInstructionModel',
	    value: function __getPrevIfInstructionModel() {
	      var _this3 = this;

	      var model = null;
	      this.base.traversalPrevious(function (previousWatcher) {
	        if (previousWatcher.obtype === _this3.BaseWatcher.TextWatcher) return true;
	        if (previousWatcher.obtype === _this3.BaseWatcher.ManagerWatcher) return false;
	        if (previousWatcher.obwatcher.hasElseIfInstruction()) {
	          model = previousWatcher.obwatcher.instructionsModel[ElementWatcher.instructions[2]];
	          return false;
	        }
	        if (previousWatcher.obwatcher.hasIfInstruction()) {
	          model = previousWatcher.obwatcher.instructionsModel[ElementWatcher.instructions[1]];
	          return false;
	        }
	      });
	      return model;
	    }
	  }, {
	    key: '__getModel',
	    value: function __getModel() {
	      var instructionsModel = this.__getInstructionsModel(),
	          attrsModel = this.__getAttrsModel();
	      return instructionsModel.concat(attrsModel);
	    }
	  }, {
	    key: '__getAttrsModel',
	    value: function __getAttrsModel() {
	      var _this4 = this;

	      var res = [];
	      this.attrs.obattrs.forEach(function (attr) {
	        attr.value.forEach(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE) {
	            _this4.base.modelExtract(item.value).forEach(function (model) {
	              res.push(model.value);
	            });
	          }
	        });
	      });
	      return res;
	    }
	  }, {
	    key: 'hasIfInstruction',
	    value: function hasIfInstruction() {
	      return this.instructionsList.indexOf(ElementWatcher.instructions[0]) > -1;
	    }
	  }, {
	    key: 'hasElseInstruction',
	    value: function hasElseInstruction() {
	      return this.instructionsList.indexOf(ElementWatcher.instructions[1]) > -1;
	    }
	  }, {
	    key: 'hasElseIfInstruction',
	    value: function hasElseIfInstruction() {
	      return this.instructionsList.indexOf(ElementWatcher.instructions[2]) > -1;
	    }
	  }, {
	    key: 'hasHtmlInstruction',
	    value: function hasHtmlInstruction() {
	      return this.instructionsList.indexOf(ElementWatcher.instructions[3]) > -1;
	    }
	  }, {
	    key: '__getInstructions',
	    value: function __getInstructions() {
	      var _this5 = this;

	      return this.base.__filterAttr(ElementWatcher.instructions, true).map(function (item) {
	        _this5.base.removeAttr(item.name);
	        return { name: item.name, value: item.value };
	      });
	    }
	  }, {
	    key: '__getAttrs',
	    value: function __getAttrs() {
	      var _this6 = this;

	      var attrs = this.base.__filterAttr(_Event.events.concat(ElementWatcher.instructions), false);
	      var obattrs = [],
	          normalAttrs = [];
	      attrs.forEach(function (attr) {
	        var parsed = _this6.base.statementExtract(attr.value);
	        var type = null,
	            ob = false;
	        var obj = {};
	        obj.name = attr.name;
	        obj.value = parsed.map(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE || item.type === _statementExtract.ONCE_STATEMENT_TYPE) {
	            ob = true;
	          }
	          return item;
	        });
	        if (ob === true) {
	          obattrs.push(obj);
	        } else {
	          normalAttrs.push(obj);
	        }
	      });
	      return { obattrs: obattrs, normalAttrs: normalAttrs };
	    }
	  }, {
	    key: '__getEvents',
	    value: function __getEvents() {
	      var _this7 = this;

	      var eventAttrs = this.base.__filterAttr(_Event.events);
	      var obEvents = [],
	          onceEvents = [],
	          normalEvents = [];
	      eventAttrs.forEach(function (item) {
	        var parsed = _this7.base.statementExtract(item.value);
	        var obj = {};
	        obj.name = item.name;
	        obj.value = parsed[0].value;
	        if (parsed.length > 1) {
	          throw '';
	        } else {
	          if (parsed[0].type === _statementExtract.NOR_STATEMENT_TYPE) {
	            obEvents.push(obj);
	          } else if (parsed[0].type === _statementExtract.ONCE_STATEMENT_TYPE) {
	            onceEvents.push(obj);
	          } else {
	            normalEvents.push(obj);
	          }
	        }
	      });
	      return { obEvents: obEvents, onceEvents: onceEvents, normalEvents: normalEvents };
	    }
	  }, {
	    key: '__bindEvents',
	    value: function __bindEvents() {
	      var _this8 = this;

	      var events = [this.events.obEvents, this.events.onceEvents];
	      events.forEach(function (item, index) {
	        if (item.length === 0) return;
	        var obdata = index === 1 ? (0, _utilityFunc.deepClone)(_this8.base.obdata) : _this8.base.obdata;
	        item.forEach(function (item) {
	          _this8.base.element[item.name] = null;
	          _this8.base.removeAttr(item.name);
	          (0, _Event.on)(_this8.base.element, item.name.substring(2), function ($event) {
	            new Function('data, $event', 'with(data) { ' + item.value + ' }')(obdata, $event);
	          });
	        });
	      });
	    }
	  }, {
	    key: '__bindAttrs',
	    value: function __bindAttrs() {
	      var _this9 = this;

	      this.attrs.obattrs.forEach(function (attr) {
	        var str = '';
	        attr.value.forEach(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE || item.type === _statementExtract.ONCE_STATEMENT_TYPE) {
	            str += _this9.__toString(_this9.base.execStatement(item.value));
	          } else {
	            str += item.value;
	          }
	        });
	        _this9.base.element.setAttribute(attr.name, str);
	      });
	    }
	  }, {
	    key: '__toString',
	    value: function __toString(val) {
	      if ((0, _utilityFunc.is)(val, 'object')) {
	        var str = '';
	        for (var key in val) {
	          str += (0, _utilityFunc.toHumpBack)(key) + ':' + val[key] + ';';
	        }
	        return str;
	      } else {
	        return val;
	      }
	    }
	  }, {
	    key: '__execInstructions',
	    value: function __execInstructions() {
	      var _this10 = this;

	      var resolved = {};
	      this.instructions.forEach(function (item) {
	        resolved[item.name] = _this10.base.execStatement(item.value);
	      });
	      return resolved;
	    }
	  }, {
	    key: '__handleResolvedInstructions',
	    value: function __handleResolvedInstructions() {
	      var renderInf = {
	        shouldRender: null,
	        shouldRenderHtml: false,
	        shouldInit: null
	      };
	      for (var key in this.resolvedInstructions) {
	        var resolvedInstruction = this.resolvedInstructions[key];
	        this[ElementWatcher.instructionsHandle[key]](resolvedInstruction, renderInf);
	      }
	      renderInf.shouldInit = (renderInf.shouldRender === true || renderInf.shouldRender === null) && this.renderCount === 0;
	      if (this.renderCount === 0 && renderInf.shouldRender === false) {
	        this.renderCount--;
	      };
	      this.renderCount++;
	      return renderInf;
	    }
	  }, {
	    key: '__handleIfInstruction',
	    value: function __handleIfInstruction(resolvedInstruction, renderInf) {
	      return renderInf.shouldRender = !!resolvedInstruction;
	    }
	  }, {
	    key: '__handleElseIfInstruction',
	    value: function __handleElseIfInstruction(resolvedInstruction, renderInf) {
	      var ifFlag = this.__handleIfInstruction(resolvedInstruction, renderInf),
	          elseFlag = this.__handleElseInstruction(resolvedInstruction, renderInf);
	      return renderInf.shouldRender = ifFlag && elseFlag;
	    }
	  }, {
	    key: '__handleElseInstruction',
	    value: function __handleElseInstruction(resolvedInstruction, renderInf) {
	      var _this11 = this;

	      var noError = false,
	          shouldRender = true;
	      this.base.traversalPrevious(function (previousWatcher) {
	        if (previousWatcher.obtype === _this11.BaseWatcher.TextWatcher) return true;
	        if (previousWatcher.obtype === _this11.BaseWatcher.ManagerWatcher) return false;
	        if (previousWatcher.obwatcher.hasElseInstruction()) return false;
	        if (previousWatcher.obwatcher.renderInf.shouldRender === null) return false;
	        if (previousWatcher.obwatcher.renderInf.shouldRender === true) shouldRender = false;
	        if (previousWatcher.obwatcher.hasIfInstruction()) {
	          noError = true;
	          return false;
	        }
	      });
	      if (!noError) throw new SyntaxError('Unexpected else');
	      renderInf.shouldRender = shouldRender;
	      return shouldRender;
	    }
	  }, {
	    key: '__handleHtmlInstruction',
	    value: function __handleHtmlInstruction(resolvedInstruction, renderInf) {
	      renderInf.shouldRenderHtml = true;
	    }
	  }]);

	  return ElementWatcher;
	}();

	ElementWatcher.instructions = ['data-if', 'data-else', 'data-else-if', 'data-html'];
	ElementWatcher.escapeNode = ['script'];
	ElementWatcher.instructionsHandle = (_ElementWatcher$instr = {}, _defineProperty(_ElementWatcher$instr, ElementWatcher.instructions[0], '__handleIfInstruction'), _defineProperty(_ElementWatcher$instr, ElementWatcher.instructions[1], '__handleElseInstruction'), _defineProperty(_ElementWatcher$instr, ElementWatcher.instructions[2], '__handleElseIfInstruction'), _defineProperty(_ElementWatcher$instr, ElementWatcher.instructions[3], '__handleHtmlInstruction'), _ElementWatcher$instr);
	exports.default = ElementWatcher;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.on = on;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var events = exports.events = ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onerror', 'onhaschange', 'onload', 'onmessage', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onredo', 'onresize', 'onstorage', 'onundo', 'onunload', 'onblur', 'onchange', 'oncontextmenu', 'onfocus', 'onformchange', 'onforminput', 'oninvalid', 'onreset', 'onselect', 'onsubmit', 'onkeydown', 'onkeypress', 'onkeyup', 'onclick', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onscroll', 'onabort', 'oncanplay', 'oncanplaythrough', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreadystatechange', 'onseeked', 'onseeking', 'onstalled', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'onwaiting'];

	var noBubblesEvents = exports.noBubblesEvents = ['abort', 'blur'];

	var eventPool = {};

	var _loop = function _loop(i, len) {
	  var eventName = events[i].slice(2);
	  bindEvent(document, eventName, function (event) {
	    var dom = event.target;
	    var obId = getObId(dom);
	    var eventHandles = eventPool[obId] && eventPool[obId][eventName];
	    eventHandles && eventHandles.map(function (eventHandle) {
	      return eventHandle(event);
	    });
	  });
	};

	for (var i = 0, len = events.length; i < len; i++) {
	  _loop(i, len);
	}

	function bindEvent(dom, eventType, eventHandle) {
	  if (dom.addEventListener) {
	    dom.addEventListener(eventType, eventHandle);
	  } else if (dom.attachEvent) {
	    dom.attachEvent('on' + eventType, eventHandle);
	  } else {
	    dom['on' + eventType] = eventHandle;
	  }
	}

	function getObId(dom) {
	  return dom.dataset && dom.dataset.obId;;
	}

	function on(dom, eventType, eventHandle) {
	  var obId = getObId(dom);
	  if (!eventPool[obId]) {
	    eventPool[obId] = _defineProperty({}, eventType, [eventHandle]);
	  } else {
	    if (eventPool[obId][eventType]) {
	      eventPool[obId][eventType].push(eventHandle);
	    } else {
	      eventPool[obId][eventType] = [eventHandle];
	    }
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetStatementSyb = resetStatementSyb;
	exports.default = statementExtract;
	var NOR_STATEMENT = {
	  start: '{{',
	  end: '}}'
	};
	var ONCE_STATEMENT = {
	  start: '{{{',
	  end: '}}}'
	};
	var MARKS = /['"]/;

	var NOR_STATEMENT_TYPE = exports.NOR_STATEMENT_TYPE = 'normalStatement';
	var ONCE_STATEMENT_TYPE = exports.ONCE_STATEMENT_TYPE = 'onceStatement';
	var CONST_STRING = exports.CONST_STRING = 'constString';

	var checkNorStart = checkStatement(NOR_STATEMENT.start);
	var checkNorEnd = checkStatement(NOR_STATEMENT.end);
	var checkOnceStart = checkStatement(ONCE_STATEMENT.start);
	var checkOnceEnd = checkStatement(ONCE_STATEMENT.end);

	function checkStatement(statementSyb) {
	  return function (str, index) {
	    var i = 0,
	        len = statementSyb.length;
	    for (; i < len; i++, index++) {
	      if (str[index] !== statementSyb[i]) return -1;
	    }
	    return i - 1;
	  };
	}

	function resetStatementSyb(type, sybObj) {
	  if (type === NOR_STATEMENT_TYPE) {
	    target = NOR_STATEMENT;
	  } else if (type === ONCE_STATEMENT_TYPE) {
	    target = ONCE_STATEMENT;
	  } else {
	    throw new TypeError('type need to be normalStatement or onceStatement');
	  }
	  target.start = sybObj.start;
	  target.end = sybObj.end;
	}

	function statementExtract(str) {
	  var len = str.length;
	  var res = [];
	  var stmStack = [];
	  var mrkStack = [];

	  var i = -1,
	      p = 0;

	  while (++i < len) {
	    var char = str[i];
	    var mrkLen = mrkStack.length;
	    var stmLen = stmStack.length;
	    if (mrkLen === 0) {
	      var norStart = checkNorStart(str, i);
	      var onceStart = checkOnceStart(str, i);
	      var norEnd = checkNorEnd(str, i);
	      var onceEnd = checkOnceEnd(str, i);

	      if (norStart > -1 && onceStart === -1) {
	        stmStack.push(NOR_STATEMENT_TYPE);
	        if (stmLen === 0) i += norStart;
	      } else if (onceStart > -1) {
	        stmStack.push(ONCE_STATEMENT_TYPE);
	        if (stmLen === 0) i += onceStart;
	      }
	      if (norStart > -1 || onceStart > -1) {
	        if (stmLen === 0) {
	          res[p] && p++;
	        } else {
	          res[p].value += str.slice(i, i += norStart > -1 ? norStart : onceStart);
	        }
	        continue;
	      }

	      if (norEnd > -1 && stmStack[stmLen - 1] === NOR_STATEMENT_TYPE || onceEnd > -1 && stmStack[stmLen - 1] === ONCE_STATEMENT_TYPE) {
	        stmStack.pop();
	        if (stmLen === 1) {
	          if (onceEnd > -1) {
	            i += onceEnd;
	          } else if (norEnd > -1) {
	            i += norEnd;
	          }
	          p++;
	        } else {
	          res[p].value += str.slice(i, i += norEnd > -1 ? norEnd : onceEnd);
	        }
	        continue;
	      }
	    }

	    if (!res[p]) {
	      res[p] = {
	        type: stmLen === 0 ? CONST_STRING : stmStack[0],
	        value: ''
	      };
	    }
	    if (MARKS.test(char) && stmLen.length > 0) {
	      if (mrkLen > 0) {
	        if (str[i - 1] !== '\\') {
	          mrkStack.pop();
	        }
	      } else {
	        mrkStack.push(char);
	      }
	    }
	    res[p].value += char;
	  }

	  if (mrkStack.length !== 0) {
	    throw new SyntaxError('Unexpected ' + mrkStack.pop());
	  }
	  return res;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _Component = __webpack_require__(4);

	var _Component2 = _interopRequireDefault(_Component);

	var _ComponentManager = __webpack_require__(15);

	var _Dbind = __webpack_require__(3);

	var _Dbind2 = _interopRequireDefault(_Dbind);

	var _utilityFunc = __webpack_require__(5);

	var _htmlParser = __webpack_require__(17);

	var _htmlParser2 = _interopRequireDefault(_htmlParser);

	var _statementExtract = __webpack_require__(13);

	var _modelSettlement = __webpack_require__(9);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var ComponentWatcher = function () {
	  function ComponentWatcher(base, BaseWatcher) {
	    _classCallCheck(this, ComponentWatcher);

	    this.base = base;
	    this.BaseWatcher = BaseWatcher;
	    this.modelExtractId = (0, _utilityFunc.randomId)();
	    this.instructions = this.__getInstructions();
	    this.props = this.__getProps();
	    this.model = this.__getModel();
	    this.componentManager = this.__getComponentManager();
	    this.component = this.componentManager && this.componentManager.createComponent();
	    this.__removeRootNode();
	  }

	  _createClass(ComponentWatcher, [{
	    key: 'destructor',
	    value: function destructor() {
	      this.childWatcher && this.childWatcher.forEach(function (item) {
	        item.destructor();
	      });
	      (0, _modelSettlement.deleteAll)(this.modelExtractId);
	      this.childWatcher = [];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      if (!this.componentManager) return;
	      this.resolvedProps = this.__bindProps();
	      this.component.init(this.base, this.resolvedProps);
	      this.child = this.__renderComponent();
	      this.component.setDOMElement(this.child);
	      this.component.willMount();
	      this.data = (0, _utilityFunc.objectAssign)({}, this.component.props, this.component.data);
	      this.childWatcher = this.__setChildWatcher();
	      this.component.didMount();
	      cb();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	      var prevData = arguments[1];
	      var nextData = arguments[2];

	      var componentManager = this.__getComponentManager();
	      if (componentManager && (!this.componentManager || componentManager.id !== this.componentManager.id)) {
	        this.componentManager = componentManager;
	        this.component = this.componentManager.createComponent();
	        this.destructor();
	        this.render(cb);
	      } else if (!componentManager) {
	        this.destructor();
	      } else {
	        var oldProps = this.resolvedProps;
	        var resetWatcherList = [];
	        this.resolvedProps = this.__bindProps();
	        if (!this.component.shouldUpdate(oldProps, this.resolvedProps)) {
	          return;
	        }
	        this.component.setProps(this.resolvedProps);
	        this.component.willUpdate(oldProps, this.resolvedProps);
	        for (var key in oldProps) {
	          if (oldProps[key] !== this.component.props[key]) {
	            var _cb = (0, _modelSettlement.get)(this.modelExtractId, key);
	            this.data[key] = this.component.props[key];
	            _cb && resetWatcherList.push(_cb);
	          }
	        }
	        for (var _key in this.component.data) {
	          if (this.component.data[_key] !== this.data[_key]) {
	            var _cb2 = (0, _modelSettlement.get)(this.modelExtractId, _key);
	            this.data[_key] = this.component.data[_key];
	            _cb2 && resetWatcherList.push(_cb2);
	          }
	        }
	        this.base.runResetWatcher(resetWatcherList, this.data, cb);
	      }
	    }
	  }, {
	    key: '__removeRootNode',
	    value: function __removeRootNode() {
	      var element = this.base.element;
	      element.parentNode.removeChild(element);
	    }
	  }, {
	    key: '__setChildWatcher',
	    value: function __setChildWatcher() {
	      var _this = this;

	      var previous = null;
	      return this.child.map(function (item, index) {
	        if (item.dataset && item.dataset.from && item.dataset.from.replace && item.dataset.from.replace(/(^\s+)|(\s+$)/, '') === 'children') {
	          return new _this.BaseWatcher(item, (0, _utilityFunc.objectAssign)({}, _this.data), null, null, _this.base.modelExtractId, _this.base.parentWatcher.components, _this.base, _this.base.getChildId(index));
	        }
	        return new _this.BaseWatcher(item, (0, _utilityFunc.objectAssign)({}, _this.data), previous, null, _this.modelExtractId, _this.component.components, _this.base, _this.base.getChildId(index));
	        previous = item;
	      });
	    }
	  }, {
	    key: '__bindProps',
	    value: function __bindProps() {
	      var _this2 = this;

	      var props = {};
	      this.props.normalProps.forEach(function (item) {
	        props[item.name] = item.value[0].value;
	      });
	      this.props.obProps.forEach(function (prop) {
	        var str = null;
	        prop.value.forEach(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE || item.type === _statementExtract.ONCE_STATEMENT_TYPE) {
	            var val = _this2.base.execStatement(item.value);
	            if (str === null) {
	              str = val;
	            } else {
	              str += val;
	            }
	          } else {
	            if (str === null) {
	              str = item.value;
	            } else {
	              str += item.value;
	            }
	          }
	        });
	        props[prop.name] = str;
	      });
	      this.__bindChildrenProps(props);
	      return props;
	    }
	  }, {
	    key: '__bindChildrenProps',
	    value: function __bindChildrenProps(props) {
	      var children = this.base.element.innerHTML;
	      if (children.replace(/\s/g, '')) {
	        this.base.element.innerHTML = '';
	        var childrenComponent = _Dbind2.default.createClass({
	          data: this.base.parentWatcher.obdata,
	          template: children
	        });
	        if (props.children) {
	          throw new TypeError('You should not use children props');
	        }
	        props.children = childrenComponent;
	      }
	    }
	  }, {
	    key: '__renderComponent',
	    value: function __renderComponent() {
	      if (!this.component) return;
	      var frg = document.createDocumentFragment();
	      var template = document.createElement('div');
	      var parent = this.base.pastDOMInformation.parentNode;
	      if (typeof this.component.template === 'string') {
	        template.innerHTML = (0, _htmlParser2.default)(this.component.template);
	      } else if (typeof this.component.template === 'function') {
	        template.innerHTML = (0, _htmlParser2.default)(this.component.template());
	      }
	      var child = (0, _utilityFunc.toArray)(template.childNodes);
	      while (template.childNodes[0]) {
	        frg.appendChild(template.childNodes[0]);
	      }
	      parent.insertBefore(frg, this.base.pastDOMInformation.nextSibling);
	      return child;
	    }
	  }, {
	    key: '__getComponentManager',
	    value: function __getComponentManager() {
	      var componentDataFrom = this.base.execStatement(this.instructions[ComponentWatcher.instructions[0]]);
	      var componentName = this.base.pastDOMInformation.nodeName.toLowerCase();
	      var componentManager = null;

	      if (componentName === ComponentWatcher.nodeName) {
	        if (typeof componentDataFrom === 'string') {
	          if (this.base.components && this.base.components[componentDataFrom]) {
	            componentManager = this.base.components[componentDataFrom];
	          } else if (ComponentWatcher.components[componentDataFrom]) {
	            componentManager = ComponentWatcher.components[componentDataFrom];
	          }
	        } else if (componentDataFrom instanceof _ComponentManager.ComponentManager) {
	          componentManager = componentDataFrom;
	        }
	      } else {
	        if (this.base.components && this.base.components[componentName]) {
	          componentManager = this.base.components[componentName];
	        } else if (ComponentWatcher.components[componentName]) {
	          componentManager = ComponentWatcher.components[componentName];
	        }
	      }

	      return componentManager;
	    }
	  }, {
	    key: '__getInstructions',
	    value: function __getInstructions() {
	      var ins = {};
	      this.base.__filterAttr(ComponentWatcher.instructions, true).forEach(function (item) {
	        ins[item.name] = item.value;
	      });
	      return ins;
	    }
	  }, {
	    key: '__getProps',
	    value: function __getProps() {
	      var _this3 = this;

	      var props = this.base.__filterAttr(ComponentWatcher.instructions, false);
	      var obProps = [],
	          normalProps = [];
	      props.forEach(function (prop) {
	        var parsed = _this3.base.statementExtract(prop.value);
	        var type = null,
	            ob = false;
	        var obj = {};
	        obj.name = (0, _utilityFunc.toHump)(prop.name);
	        obj.value = parsed.map(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE || item.type === _statementExtract.ONCE_STATEMENT_TYPE) {
	            ob = true;
	          }
	          return item;
	        });
	        if (ob === true) {
	          obProps.push(obj);
	        } else {
	          normalProps.push(obj);
	        }
	      });
	      return { obProps: obProps, normalProps: normalProps };
	    }
	  }, {
	    key: '__getModel',
	    value: function __getModel() {
	      var instructionModel = this.__getInstructionsModel(),
	          propsModel = this.__getPropsModel();
	      return instructionModel.concat(propsModel);
	    }
	  }, {
	    key: '__getInstructionsModel',
	    value: function __getInstructionsModel() {
	      var res = [];
	      for (var key in this.instructions) {
	        this.base.modelExtract(this.instructions[key]).forEach(function (item) {
	          res.push(item.value);
	        });
	      }
	      return res;
	    }
	  }, {
	    key: '__getPropsModel',
	    value: function __getPropsModel() {
	      var _this4 = this;

	      var res = [];
	      this.props.obProps.forEach(function (prop) {
	        prop.value.forEach(function (item) {
	          if (item.type === _statementExtract.NOR_STATEMENT_TYPE) {
	            _this4.base.modelExtract(item.value).forEach(function (model) {
	              res.push(model.value);
	            });
	          }
	        });
	      });
	      return res;
	    }
	  }]);

	  return ComponentWatcher;
	}();

	ComponentWatcher.nodeName = 'component';
	ComponentWatcher.instructions = ['data-from', 'data-props'];
	ComponentWatcher.components = {};
	exports.default = ComponentWatcher;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ComponentManager = undefined;

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	exports.createComponentManager = createComponentManager;

	var _Component = __webpack_require__(4);

	var _Component2 = _interopRequireDefault(_Component);

	var _checkComponentName = __webpack_require__(16);

	var _checkComponentName2 = _interopRequireDefault(_checkComponentName);

	var _utilityFunc = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var ComponentManager = exports.ComponentManager = function () {
	  function ComponentManager(id, componentInf) {
	    _classCallCheck(this, ComponentManager);

	    this.id = id;
	    this.componentInf = componentInf;
	    this.trackingUpdate = null;
	  }

	  _createClass(ComponentManager, [{
	    key: 'createComponent',
	    value: function createComponent() {
	      var component = new _Component2.default();
	      component = (0, _utilityFunc.objectAssign)(component, (0, _utilityFunc.deepClone)(this.componentInf));
	      component.components = this.componentInf.components;
	      var scope = createScope(component);
	      bindComponentFunc(component.data, scope);
	      checkComponentsName(component.components);
	      return component;
	    }
	  }]);

	  return ComponentManager;
	}();

	function createScope(component) {
	  return {
	    data: component.data,
	    trackingUpdate: component.trackingUpdate.bind(component)
	  };
	}

	function bindComponentFunc(data, scope) {
	  for (var key in data) {
	    if ((0, _utilityFunc.is)(data[key], 'function')) {
	      data[key] = data[key].bind(scope);
	    }
	  }
	}

	function checkComponentsName(components) {
	  for (var key in components) {
	    (0, _checkComponentName2.default)(key);
	  }
	}

	function createComponentManager(componentInf) {
	  return new ComponentManager((0, _utilityFunc.randomId)(), componentInf);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkComponentName;

	var _utilityFunc = __webpack_require__(5);

	function checkComponentName(componentName) {
	  for (var i = 0, len = componentName.length; i < len; i++) {
	    var code = componentName.charCodeAt(i);
	    if (code >= 65 && code <= 90) throw new SyntaxError('Unexpected token ' + componentName + ', You should not use an uppercase component name');
	  }
	  var dom = document.createElement(componentName);
	  // if(!is(dom, 'HTMLUnknownElement')) {
	  //   throw new SyntaxError(`Unexpected token ${componentName}, You should not use the tag name that already exists in HTML`);
	  // }
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (str) {
	  var resStr = '';

	  for (var i = 0, len = str.length; i < len; i++) {
	    var char = str[i];
	    var nextChar = str[i + 1];

	    if (char === TAG_START) {
	      var start = i;
	      var tagName = '';
	      var col = null;
	      var repeat = false;
	      var tagStr = '';

	      for (; i < len; i++) {
	        var _char = str[i];
	        if (!col && ATTR_NAME_REPLACE.test(_char)) {
	          tagStr += ATTR_NAME_REPLACE_AFTER + _char.toLowerCase();
	        } else {
	          tagStr += _char;
	          if (SYB_REG.test(_char)) {
	            if (!col) {
	              col = _char;
	            } else {
	              if (col === _char) {
	                col = null;
	              }
	            }
	          }
	        }
	        if (!col && _char === TAG_END) {
	          if (str[i - 1] === TAG_CLOSE) {
	            repeat = true;
	          }
	          break;
	        }
	      }
	      resStr += tagStr;
	      continue;
	    }
	    resStr += char;
	  }
	  return resStr;
	};

	var TAG_START = '<';
	var TAG_END = '>';
	var TAG_CLOSE = '/';

	var SYB_REG = /['"]/;

	var ATTR_NAME_REPLACE = /[A-Z]/;
	var ATTR_NAME_REPLACE_AFTER = '-';

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _statementToString = __webpack_require__(19);

	var _statementToString2 = _interopRequireDefault(_statementToString);

	var _statementExtract = __webpack_require__(13);

	var _utilityFunc = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var TextWatcher = function () {
	  function TextWatcher(base) {
	    _classCallCheck(this, TextWatcher);

	    this.base = base;
	    this.watcherType = this.base.pastDOMInformation.nodeType;
	    this.vm = this.__getViewModel();
	    this.model = this.__parseModel();
	    this.view = null;
	  }

	  _createClass(TextWatcher, [{
	    key: 'destructor',
	    value: function destructor() {
	      var node = this.base.element;
	      node.parentNode.removeChild(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

	      this.view = this.__parseView();
	      if (this.watcherType === TextWatcher.textNodeWatcher) {
	        this.base.element.textContent = this.view;
	      } else {
	        this.base.element.innerHTML = this.view;
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	      var prevData = arguments[1];
	      var nextData = arguments[2];

	      if (prevData !== nextData) {
	        this.render(cb);
	      }
	    }
	  }, {
	    key: '__getViewModel',
	    value: function __getViewModel() {
	      var isTextNode = this.watcherType === TextWatcher.textNodeWatcher;
	      var content = isTextNode ? this.base.pastDOMInformation.textContent : this.base.pastDOMInformation.innerHTML;
	      return this.__replaceOnceStatement(this.base.statementExtract(content));
	    }
	  }, {
	    key: '__replaceOnceStatement',
	    value: function __replaceOnceStatement(statementList) {
	      var _this = this;

	      return statementList.map(function (item) {
	        if (item.type === _statementExtract.ONCE_STATEMENT_TYPE) {
	          item.type = _statementExtract.CONST_STRING;
	          item.value = _this.base.execStatement(item.value);
	        }
	        return item;
	      });
	    }
	  }, {
	    key: '__parseView',
	    value: function __parseView() {
	      var _this2 = this;

	      var view = '';
	      this.vm.forEach(function (item) {
	        if (item.type === _statementExtract.NOR_STATEMENT_TYPE) {
	          view += _this2.__toString(_this2.base.execStatement(item.value));
	        } else {
	          view += _this2.__toString(item.value);
	        }
	      });
	      return view;
	    }
	  }, {
	    key: '__toString',
	    value: function __toString(val) {
	      return (0, _statementToString2.default)(val);
	    }
	  }, {
	    key: '__parseModel',
	    value: function __parseModel() {
	      var _this3 = this;

	      var res = [];
	      this.vm.forEach(function (item) {
	        if (item.type === _statementExtract.NOR_STATEMENT_TYPE) {
	          _this3.base.modelExtract(item.value).forEach(function (model) {
	            res.push(model.value);
	          });
	        }
	      });
	      return res;
	    }
	  }]);

	  return TextWatcher;
	}();

	TextWatcher.textNodeWatcher = 3;
	TextWatcher.innerHTMLWatcher = 1;
	exports.default = TextWatcher;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (val) {
	    if (val instanceof HTMLElement) {
	        return handleDOMValue(val);
	    } else {
	        return handleTextValue(val);
	    }
	};

	function handleDOMValue(DOM) {
	    var nodeName = DOM.nodeName.toLowerCase();
	    var attrs = toArray(DOM.attributes).map(function (item) {
	        return item.name + '=\'' + item.value + '\'';
	    }).join('\s');
	    return '<' + nodeName + ' ' + attrs + '>' + DOM.innerHTML + '</' + nodeName + '>';
	}
	function handleTextValue(text) {
	    return text;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VAR_START = /[a-zA-Z_$]/;
	var VAR_AFTER = /[a-zA-Z_$0-9]/;

	var MARKS = /['"]/;
	var POINT = /\./;
	var BRK_START = /\[/;
	var BRK_END = /\]/;
	var BRC_START = /\{/;
	var BRC_END = /\}/;
	var TH_START = /\(/;
	var TH_END = /\)/;
	var COMMA = /,/;
	var COLON = /:/;
	var SPACE = /\s/;
	var BAK_SLANT = /\\/;

	var UN_EXPECT_CHAR = {
	  'function': true
	};

	/**
	 * 
	 * 
	 * @param {string} str
	 * @returns {array}
	 * 该函数返回javascript表达式之中所使用的变量
	 * 表达式之中不能含有函数作用域
	 */
	function modelExtract(str) {
	  var len = str.length;
	  var res = [];
	  var sybStk = [];
	  var brkStk = [];
	  var modelHashTable = {};

	  var i = -1,
	      p = -1;
	  while (++i < len) {
	    var char = str[i];
	    var brkTop = brkStk[brkStk.length - 1];
	    var sybTop = sybStk[sybStk.length - 1];

	    if (SPACE.test(char)) continue;
	    /**
	     * 捕获变量
	     */
	    if (char.match(VAR_START)) {
	      if (sybTop && POINT.test(sybTop) || brkTop && BRC_START.test(brkTop) && !COLON.test(sybTop)) {
	        while (++i < len && VAR_AFTER.test(str[i])) {}
	      } else {
	        res[++p] = { index: i, value: char };
	        while (++i < len && VAR_AFTER.test(str[i])) {
	          res[p].value += str[i];
	        }
	        if (modelHashTable[res[p].value]) {
	          p--;
	          res.pop();
	        } else {
	          modelHashTable[res[p].value] = true;
	        }
	        if (UN_EXPECT_CHAR[res[p].value] === true) {
	          throw new SyntaxError('Unexpected function, in Observer statement you can\'t use function');
	        }
	      }
	      i--;sybStk.pop();
	    } else if (MARKS.test(char)) {
	      while (++i < len && (str[i] !== char || BAK_SLANT.test(str[i - 1]))) {}
	      sybStk.pop();
	    } else if (BRC_START.test(char) || BRK_START.test(char) || TH_START.test(char)) {
	      sybStk.pop();
	      brkStk.push(char);
	    } else if (BRC_END.test(char) || BRK_END.test(char) || TH_END.test(char)) {
	      brkStk.pop();
	    } else if (COLON.test(char) || POINT.test(char)) {
	      sybStk.push(char);
	    } else {
	      sybStk.pop();
	    }
	  }
	  return res;
	}
	exports.default = modelExtract;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (resetWatcherList, data, cb) {
	  var count = 0,
	      len = 0;
	  resetWatcherList.forEach(function (watcherPool) {
	    if (watcherPool) {
	      for (var id in watcherPool) {
	        len++;
	        watcherPool[id].reset(data, function () {
	          count++;
	          count === len && cb();
	        });
	      }
	    }
	  });
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = registerComponent;

	var _ComponentWatcher = __webpack_require__(14);

	var _ComponentWatcher2 = _interopRequireDefault(_ComponentWatcher);

	var _checkComponentName = __webpack_require__(16);

	var _checkComponentName2 = _interopRequireDefault(_checkComponentName);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function registerComponent(key, componentWatcher) {
	  (0, _checkComponentName2.default)(key);
	  _ComponentWatcher2.default.components[key] = componentWatcher;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Router = __webpack_require__(24);
	var LazyBox = __webpack_require__(27);
	var Link = __webpack_require__(28);

	module.exports = {
		Router: Router.default,
		LazyBox: LazyBox.default,
		Link: Link.default
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _dbindRouterBase = __webpack_require__(25);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _dbind2.default.createClass({
	  keepProps: ['rootPath', 'routeConfig'],
	  willMount: function willMount() {
	    var routeConfig = this.props.routeConfig;
	    var rootPath = this.props.rootPath;
	    if (!routeConfig) throw new TypeError('You should hava a routeConfig props for router to control route');
	    if (!rootPath) throw new TypeError('');

	    (0, _dbindRouterBase.setRootLocation)(rootPath);
	    var Route = new _dbindRouterBase.Router();
	    this.handlePath(routeConfig, Route, [], 0);
	  },
	  getPropsStr: function getPropsStr(props) {
	    var propsStr = '';
	    for (var key in props) {
	      if (this.keepProps.indexOf(key) === -1) propsStr += key + '="' + props[key] + '" ';
	    }
	    return propsStr;
	  },
	  handlePath: function handlePath(routeConfig, Route, target, index) {
	    var _this = this;

	    var component = routeConfig.component;
	    var path = routeConfig.path;
	    var redirect = routeConfig.redirect;
	    var enterCb = routeConfig.enter;
	    var leaveCb = routeConfig.leave;
	    Route = Route.route(routeConfig.path, function (next) {
	      if (redirect) {
	        redirect({}, redirect);
	      } else {
	        target[index] = component;
	        component.enter = enterCb;
	        if (!next()) {
	          this.trackingUpdate({
	            componentInf: this.arrayToTree(target, index)
	          });
	        }
	      }
	    }.bind(this));

	    if (routeConfig.children) {
	      routeConfig.children.forEach(function (children) {
	        _this.handlePath(children, Route, target, index + 1);
	      });
	    }
	  },
	  arrayToTree: function arrayToTree(array, end) {
	    var tree = {};
	    var p = tree;
	    for (var i = 0; i <= end; i++) {
	      p.component = array[i];
	      p.children = i !== end && array[i + 1] || null;
	      p = p.children;
	    }
	    return tree;
	  },

	  data: {
	    componentInf: {}
	  },
	  template: function template() {
	    var propsStr = this.getPropsStr(this.props);
	    return '\n      <component ' + propsStr + ' data-from="componentInf.component" children="{{ componentInf.children || {} }}"></component>\n    ';
	  }
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	;(function () {
	    //  根路径 (必须有)
	    var rootLocation = setRootLocation('');
	    var prvLocation = null;
	    var nowLocation = window.location.href;
	    var contextMiddleware = [];

	    var variables = {};

	    /*
	    *   context 中间件
	    */
	    function use(middleware) {
	        contextMiddleware.push(middleware);
	    }
	    /*
	    *   set设置相关的变量将挂载到app上作为变量
	    */
	    function set(key, val) {
	        variables[key] = val;
	    }
	    /*
	    *   get获取set设置的变量
	    */
	    function get(key) {
	        return variables[key];
	    }
	    // 获取跟路径
	    function getRootLocation() {
	        return rootLocation;
	    }
	    // 设置跟路径
	    function setRootLocation(location) {
	        rootLocation = window.location.protocol + '//' + window.location.host + resolveLocationPath(location);
	        return rootLocation;
	    }
	    /*
	    *   兼容Promise   
	    */
	    if (typeof Promise != 'function') {
	        var resolve = function resolve(data) {
	            var fn;
	            while (fn = this.callbackArr.shift()) {
	                try {
	                    data = fn(data);
	                } catch (e) {
	                    this.catchFn && this.catchFn(e);
	                    continue;
	                }
	                if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data.constructor === _Promise) {
	                    var timer = setInterval(function () {
	                        if (data.PromiseStatus === 'resolved') {
	                            clearInterval(timer);
	                            resolve.call(this, data.PromiseValue);
	                        }
	                    }.bind(this));
	                    return;
	                }
	            }
	            this.PromiseStatus = 'resolved';
	            this.PromiseValue = data;
	        };
	        var reject = function reject(err) {
	            throw err;
	        };
	        var _Promise = function _Promise(fn) {
	            this.callbackArr = [];
	            this.catchFn = null;
	            this.PromiseStatus = 'pending';
	            fn(resolve.bind(this), reject.bind(this));
	        };
	        _Promise.prototype.then = function (fn) {
	            this.callbackArr.push(fn);
	            return this;
	        };
	        _Promise.prototype.catch = function (fn) {
	            this.catchFn = fn;
	        };
	    }
	    /*
	    *   Object.assign 兼容
	    */
	    function assign(target, obj) {
	        if (Object.assign) return Object.assign(target, obj);
	        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || (typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
	            throw 'arguments should be object';
	        }
	        for (var key in obj) {
	            if (!target[key]) {
	                target[key] = obj[key];
	            }
	        }
	        return target;
	    }
	    /*
	    *   此函数将路径做一个强制转化
	    *   最后是此形式 /index
	    *   将会在开头填上 / 结尾去掉 / 并且字符串中不允许带有 .
	    */
	    function resolveRoutePath(path) {
	        if (typeof path !== 'string') throw 'path should be a string';
	        if (path.indexOf('.') !== -1) throw 'path should not have .';
	        if (path.replace(/\//g) === '') return '';
	        if (path[0] !== '/') path = '/' + path;
	        if (path[path.length - 1] === '/') path = path.slice(0, -1);
	        return path;
	    }
	    function resolveLocationPath(path) {
	        if (path[path.length - 1] === '/') {
	            path = path.slice(0, -1);
	        }
	        if (path === '/') path = '/';
	        return path;
	    }
	    function toArray(target) {
	        return [].slice.call(target);
	    }
	    /*
	    *   Router 路由核心类
	    *   此类可以接受一个 (前置路径)
	    *   此类有一个route方法用于添加路由
	    */
	    function Router(previousPath) {
	        if (previousPath instanceof Router) {
	            previousPath = previousPath.getRoutePath();
	        }
	        this.previousPath = previousPath ? resolveRoutePath(previousPath) : null;
	        this.routePath;
	    }
	    Router.prototype.route = function (path, callback) {
	        path = resolveRoutePath(path);
	        this.routePath = (this.previousPath || '') + path;
	        controllers.add(this.previousPath, this.routePath, callback);
	        return new Router(this.routePath);
	    };
	    Router.prototype.getRoutePath = function () {
	        return this.routePath;
	    };
	    /*
	    *   History类 提供基本页面操控
	    */
	    function History(historyType, isExtends) {
	        this.routePoor = {};
	        this.nowMatchRoute = null;
	        this.callbackArr = [];
	        this.isRunningCallback = false;
	        if (isExtends) return this;
	        if (historyType === 'hash') {} else {
	            return new BrowserHistory();
	        }
	    }
	    History.prototype._createRouteObj = function (routePath, callback, previousRouteObj) {
	        return {
	            routePath: routePath,
	            previousRouteObj: previousRouteObj,
	            routeExp: this._routePath2routeExp(routePath),
	            callback: callback
	        };
	    };
	    History.prototype._routePath2routeExp = function (routePath) {
	        if (!rootLocation) throw 'rootLocation is undefined';
	        var exp = rootLocation + routePath;
	        exp = '/^' + exp.replace(/\//g, '\\/') + '(\\?.+?=.+?)?(\\/)?$/';
	        return eval(exp);
	    };
	    History.prototype._createContext = function (routeObj) {
	        var context = new Context({
	            nowLocation: window.location.href,
	            routeObj: routeObj
	        });
	        contextMiddleware.forEach(function (item) {
	            item(context);
	        });
	        return context;
	    };
	    History.prototype._findSameRoute = function (prv, nex) {
	        var i = 0;
	        var str = '';
	        while (prv[i] || nex[i]) {
	            if (prv[i] !== nex[i]) break;
	            str += prv[i] || nex[i];
	            i++;
	        }
	        return str.replace(/(.+\/)(.+)$/, function ($1, $2) {
	            return $2;
	        });
	    };
	    History.prototype._next = function () {
	        var routeObj = this.callbackArr.pop();
	        var context = this._createContext(routeObj);
	        if ((typeof routeObj === 'undefined' ? 'undefined' : _typeof(routeObj)) === 'object' && typeof routeObj.callback === 'function') {
	            this.isRunningCallback = true;
	            routeObj.callback.call(context, this._next.bind(this));
	            return true;
	        } else {
	            this.isRunningCallback = false;
	            return false;
	        }
	    };
	    History.prototype._match = function (previousLocation) {
	        var location = window.location.href;
	        var callbackArr = [];
	        var prvMatchRoute = this.nowMatchRoute;
	        var shouldCallDesFn = true;
	        var same = this._findSameRoute(location, previousLocation || '');
	        var temp;
	        var matchFlag;
	        for (var key in this.routePoor) {
	            temp = this.routePoor[key];
	            if (temp.routeExp.test(location)) {
	                matchFlag = true;
	                this.nowMatchRoute = temp;
	                callbackArr.push(temp);
	                while (temp = temp.previousRouteObj) {
	                    if (temp === prvMatchRoute) shouldCallDesFn = false;
	                    if (!temp.routeExp.test(same) && temp.callback) {
	                        callbackArr.push(temp);
	                    } else {
	                        break;
	                    }
	                }
	            }
	        }
	        if (!matchFlag) {
	            this.nowMatchRoute = null;
	        }
	        if (shouldCallDesFn && prvMatchRoute && prvMatchRoute.shouldDoDesFn) {
	            prvMatchRoute.desFn && prvMatchRoute.desFn();
	        }
	        this.callbackArr = callbackArr;
	        !this.isRunningCallback && this._next(previousLocation);
	    };
	    History.prototype.add = function (previousPath, routePath, callback) {
	        if (this.routePoor[routePath]) {
	            this.routePoor[routePath].callback = callback;
	        }
	        this.routePoor[routePath] = this._createRouteObj(routePath, callback, this.routePoor[previousPath]);
	    };
	    /*
	    *   BrowserHistory继承History类
	    *   提供详细的页面操控(基于html5)
	    */
	    function BrowserHistory() {
	        this.history = window.history;
	    }
	    BrowserHistory.prototype = new History('', 1);
	    BrowserHistory.prototype.push = function (data, href) {
	        href = rootLocation.replace(/^https?:\/\/.+?\//, '/') + resolveRoutePath(href);
	        prvLocation = window.location.href;
	        if (nowLocation.replace(/^https?:\/\/.+?\//, '/') === href) return;
	        this.history.pushState(data, '', href);
	        this._match(prvLocation);
	        nowLocation = window.location.href;
	    };
	    BrowserHistory.prototype.addClickEvent = function (target, fn) {
	        var push = this.push.bind(this);
	        target.addEventListener('click', function (e) {
	            e.preventDefault();
	            if (!fn || fn.call(this, e)) {
	                push(target.getAttribute('data-history-json'), target.getAttribute('href'));
	            }
	        });
	    };
	    BrowserHistory.prototype.capture = function () {
	        if (arguments[0].nodeName) {
	            this.addClickEvent(arguments[0], arguments[1]);
	        } else if (arguments[0].length) {
	            for (var i = 0, len = arguments[0].length; i < len; i++) {
	                this.addClickEvent(arguments[0][i], arguments[1]);
	            }
	        }
	    };
	    /*
	    *   上下文对象 context
	    *   此对象主要包含了一些能在路由下执行方法
	    */
	    function Context(conf) {
	        this.previousLocation = conf.previousLocation;
	        this.nowLocation = conf.nowLocation;
	        this.routeObj = conf.routeObj;
	        this.rootLocation = rootLocation;
	    }
	    Context.prototype.isFrom = function (location) {
	        if (location instanceof Router) location = location.getRoutePath();
	        location = rootLocation + resolveRoutePath(location);
	        return prvLocation === location;
	    };
	    Context.prototype.set = set;
	    Context.prototype.get = get;
	    /*
	    *   Loader 类 包含加载方法
	    */
	    function Loader() {}
	    Loader.prototype.loadCache = {};
	    Loader.prototype.load = function (path) {
	        var that = this;
	        if (that.loadCache[path]) return new Promise(function (resolve, reject) {
	            resolve(that.loadCache[path]);
	        });
	        var xhr = new XMLHttpRequest();
	        var xhrPromise;
	        xhr.open('GET', path, true);
	        xhr.send(null);
	        xhrPromise = new Promise(function (resolve, reject) {
	            xhr.onload = function () {
	                if (xhr.status >= 200 && xhr.status <= 304) {
	                    that.loadCache[path] = xhr.responseText;
	                    resolve(xhr.responseText);
	                }
	            };
	        });
	        return xhrPromise;
	    };

	    Loader.prototype._getHead = function (html, path) {
	        var frag = document.createDocumentFragment();
	        var childNodes = toArray(html.getElementsByTagName('head')[0].children);
	        childNodes = childNodes.map(function (item) {
	            return this._normalizeTag(item, path);
	        }.bind(this));
	        return childNodes;
	    };
	    Loader.prototype._getCompont = function (html, path) {
	        var compont = html.getElementsByTagName('Compont')[0];
	        if (!compont) compont = html.getElementsByTagName('body')[0];
	        var childNodes = toArray(compont.childNodes);
	        childNodes = childNodes.map(function (item) {
	            return this._normalizeTag(item, path);
	        }.bind(this));
	        return childNodes;
	    };
	    /*
	    *   保持script标签的活性
	    */
	    Loader.prototype._normalizeTag = function (tag, path) {
	        var src, href;
	        if (tag.nodeType === 1) {
	            if (tag.nodeName === 'SCRIPT' && !tag.src) {
	                var scriptTag = document.createElement('script');
	                var scriptData = tag.innerHTML;
	                scriptTag.innerHTML = scriptData;
	                return scriptTag;
	            }
	            src = this._normalizeUri(tag.getAttribute('src') || '', path), href = this._normalizeUri(tag.getAttribute('href') || '', path);
	            if (tag.src) tag.src = src;
	            if (tag.href) tag.href = href;
	        }
	        return tag;
	    };
	    Loader.prototype._normalizeUri = function (uri, path) {
	        if (path[path.length - 1] !== '/') path += '/';
	        if (uri[0] === '.') uri = path + uri;
	        return uri;
	    };
	    /*
	    *   整合Context原型
	    */
	    assign(Context.prototype, Loader.prototype);
	    /*
	    *   此对象为路由池
	    *   以及一些相关的操作
	    */
	    var controllers = new History('', 0);
	    var timer = setTimeout(function () {
	        controllers._match();
	    });
	    /*
	    *   监听历史记录的修改
	    *   并且执行回调函数
	    */
	    window.onpopstate = function () {
	        controllers._match(nowLocation);
	        nowLocation = window.location.href;
	    };
	    // 设置不可访问
	    function setRestrictingAccess(obj, key, val) {
	        Object.defineProperty(obj, key, {
	            value: val,
	            writeable: false,
	            enumerable: false,
	            configurable: false
	        });
	    }
	    /*
	    *   判断当前环境 如果是amd环境的话 暴露接口
	    */
	    (function (factory) {
	        var app = {
	            Router: Router,
	            use: use,
	            capture: controllers.capture.bind(controllers),
	            redirect: controllers.push.bind(controllers),
	            getRootLocation: getRootLocation,
	            setRootLocation: setRootLocation
	        };
	        for (var key in app) {
	            setRestrictingAccess(app, key, app[key]);
	        }
	        factory(app);
	    })(function (app) {
	        if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports && exports) {
	            module.exports = app;
	        } else {
	            window.app = app;
	        }
	    });
	})(window);
	// console.log(indexRouter);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// import fetch from 'fetch';

	var LazyBox = _dbind2.default.createClass({
	  keepProps: ['loadingComponent', 'loadPath'],
	  didMount: function didMount() {
	    var loadPath = props.loadPath;
	    if (!loadPath) throw new TypeError('You should set load-path props for this component');
	    fetch(loadPath).then(function (res) {});
	  },
	  getPropsStr: function getPropsStr(props) {
	    var propsStr = '';
	    for (var key in props) {
	      if (this.keepProps.indexOf(key) === -1) propsStr += key + '="' + props[key] + '" ';
	    }
	    return propsStr;
	  },

	  data: {
	    component: null,
	    props: null
	  },
	  template: function template() {
	    var props = this.props;

	    var loadingComponent = props.loadingComponent || null;

	    this.data.component = loadingComponent;

	    var propsStr = this.getPropsStr(props);

	    return '<component data-from="component" ' + propsStr + '></component>';
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _dbindRouterBase = __webpack_require__(25);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _dbind2.default.createClass({
	  didMount: function didMount() {
	    (0, _dbindRouterBase.capture)(this.refs.link);
	  },

	  template: '\n    <a ref="link" href="{{ to }}">\n      {{ value }}\n    </a>\n  '
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stu = __webpack_require__(30);

	var _stu2 = _interopRequireDefault(_stu);

	var _index = __webpack_require__(47);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(56);

	var _index4 = _interopRequireDefault(_index3);

	var _unfinish = __webpack_require__(59);

	var _unfinish2 = _interopRequireDefault(_unfinish);

	var _finish = __webpack_require__(63);

	var _finish2 = _interopRequireDefault(_finish);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  path: '/stu',
	  component: _stu2.default,
	  children: [{
	    path: 'index',
	    component: _index2.default
	  }, {
	    path: 'work',
	    component: _index4.default,
	    children: [{
	      path: 'unfinish',
	      component: _unfinish2.default
	    }, {
	      path: 'finish',
	      component: _finish2.default
	    }]
	  }]
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _global = __webpack_require__(31);

	var _global2 = _interopRequireDefault(_global);

	var _index = __webpack_require__(35);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(38);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  willUpdate: function willUpdate() {
	    console.log(this.props);
	  },

	  data: {
	    leftRowActive: 0,
	    rightContentTitle: 0,
	    changeActive: function changeActive(index) {
	      this.trackingUpdate({
	        leftRowActive: index,
	        rightContentTitle: index
	      });
	    }
	  },
	  template: '\n    <app-header></app-header>\n    <app-body \n      children="{{ children }}"\n      rightContentTitle="{{ rightContentTitle }}" \n      changeActive="{{ changeActive }}"\n      leftRowActive="{{ leftRowActive }}"\n    ></app-body>\n  ',
	  components: {
	    'app-header': _index2.default,
	    'app-body': _index4.default
	  }
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js?modules!./global.css", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js?modules!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "body, h1, p, ul {\n  padding: 0;\n  margin: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\nbody {\n  font-size: 18px;\n}", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(36);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  template: '\n    <nav class="' + _index2.default['navbar'] + '">\n      <h1>\n        <strong>REDROCK</strong>\n        <span>ADMIN</span>\n      </h1>\n      <div>\n        <svg class="icon ' + _index2.default['user-icon'] + '" aria-hidden="true">\n          <use xlink:href="#icon-user"></use>\n        </svg>\n        <span>\n          \u7528\u6237\n        </span>\n      </div>\n    </nav>\n  '
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._27-YAO2wAibZIDZD9zF-Xd {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  overflow: hidden;\n  background: #222;\n  color: #fff;\n}\n._27-YAO2wAibZIDZD9zF-Xd h1 {\n  font-weight: bold;\n  font-size: 16px;\n  float: left;\n  margin-left: 20px;\n}\n._27-YAO2wAibZIDZD9zF-Xd strong {\n  color: #cf4646;\n}\n._27-YAO2wAibZIDZD9zF-Xd div {\n  font-size: 14px;\n  float: right;\n  margin-right: 30px;\n  cursor: pointer;\n}\n._2FmaSJm6E2yHUtYTz0cGsR {\n  font-size: 18px;\n}", ""]);

	// exports
	exports.locals = {
		"navbar": "_27-YAO2wAibZIDZD9zF-Xd",
		"user-icon": "_2FmaSJm6E2yHUtYTz0cGsR"
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(39);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(41);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(44);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  willMount: function willMount() {},

	  template: '\n    <left-row \n      leftRowActive="{{ leftRowActive }}"\n    ></left-row>\n    <right-content \n      children="{{ children }}" \n      changeActive="{{ changeActive }}"\n      rightContentTitle="{{ rightContentTitle }}"\n    ></right-content>\n  ',
	  components: {
	    'left-row': _index4.default,
	    'right-content': _index6.default
	  }
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._29cvdkqwHfU3U9kIAJjN-v {\n  width: 100%;\n  overflow: hidden;\n}", ""]);

	// exports
	exports.locals = {
		"body-content": "_29cvdkqwHfU3U9kIAJjN-v"
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(42);

	var _index2 = _interopRequireDefault(_index);

	var _dbindRouter = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var list = [{
	  href: '/stu/index',
	  icon: '#icon-user',
	  val: '我的信息'
	}, {
	  href: '/stu/work',
	  icon: '#icon-homework',
	  val: '作业任务'
	}, {
	  href: '/stu/courware',
	  icon: '#icon-data',
	  val: '课件资料'
	}];
	var activeClass = _index2.default['active'];

	exports.default = _dbind2.default.createClass({
	  data: {
	    list: list,
	    activeClass: activeClass
	  },
	  template: '\n    <section ref="left-row" class="' + _index2.default['left-row'] + '">\n      <ul>\n        <li data-each="i in list" class="{{ i == leftRowActive ? activeClass : \'\' }}">\n          <svg class="icon ' + _index2.default['icon'] + '" aria-hidden="true">\n            <use xlink:href="{{ list[i].icon }}"></use>\n          </svg>\n          <route-link to="{{ list[i].href }}" value="{{ list[i].val }}"></route-link>\n        </li>\n      </ul>\n    </section>\n  ',
	  components: {
	    'route-link': _dbindRouter.Link
	  }
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._1zBBX_H_DS-U4QNzGJ4rVC {\n  width: 180px;\n  height: 100%;\n  position: fixed;\n  background: #222;\n}\n._1zBBX_H_DS-U4QNzGJ4rVC ul .sN0lamykR7Nioz86U0bHe {\n  background: #cf4646 !important;\n}\n._1zBBX_H_DS-U4QNzGJ4rVC ul li{\n  width: 160px;\n  padding-left: 20px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 12px;\n  color: #f1f1f1;\n  cursor: pointer;\n  position: relative;\n}\n._1zBBX_H_DS-U4QNzGJ4rVC ul li:hover {\n  background: rgb(26, 26, 26);\n} \n._1zBBX_H_DS-U4QNzGJ4rVC ul li > a{\n  display: inline-block;\n  color: #f1f1f1;\n  width: 136px;\n  padding-left: 24px;\n  position: absolute;\n  right: 0;\n}\n._1WJmvmJWikC0teYGEedU7I {\n  font-size: 18px;\n}", ""]);

	// exports
	exports.locals = {
		"left-row": "_1zBBX_H_DS-U4QNzGJ4rVC",
		"active": "sN0lamykR7Nioz86U0bHe",
		"icon": "_1WJmvmJWikC0teYGEedU7I"
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(45);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(47);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var title = ['我的信息', '作业任务', '课件资料'];

	exports.default = _dbind2.default.createClass({
	  data: {
	    getTitle: function getTitle(index) {
	      return title[index];
	    }
	  },
	  template: '\n    <section class="' + _index2.default['right-content'] + '">\n      <div class="' + _index2.default['title'] + '">\n        <svg class="icon ' + _index2.default['icon'] + '" aria-hidden="true">\n          <use xlink:href="#icon-home"></use>\n        </svg>\n        <span class="' + _index2.default['home'] + '">\n          {{ getTitle(rightContentTitle) }}\n        </span>\n      </div>\n      <div class="' + _index2.default['container'] + '">\n        <component \n          data-from="children.component" \n          children="{{ children.children }}" \n          changeActive="{{ changeActive }}"\n        ></component>\n      </div>\n    </section>\n  ',
	  components: {
	    'user-inf': _index4.default
	  }
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._6xupiQ1yPq7X5R0peHeOv {\n  margin-left: 180px;\n  background: rgb(250, 250, 250);\n}\n._2pLU9zz4aLTAo_8s7KrkEt {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  color: #5f6468;\n  background: #e9ecf2;\n  font-size: 14px;\n}\n._32Ui7-jZv7aO-L0SHfh7WC {\n  color: #cf4646;\n  font-size: 16px;\n  margin-left: 20px;\n}\n._2C8XM1ht8L8RdK-rkYKsDe::before {\n  content: '/';\n  color: #ccc;\n  margin-right: 4px;\n  font-size: 12px;\n}\n._3QbDxQmZQjcyqqxSSfmZ_q {\n  padding: 16px 16px;\n}", ""]);

	// exports
	exports.locals = {
		"right-content": "_6xupiQ1yPq7X5R0peHeOv",
		"title": "_2pLU9zz4aLTAo_8s7KrkEt",
		"icon": "_32Ui7-jZv7aO-L0SHfh7WC",
		"home": "_2C8XM1ht8L8RdK-rkYKsDe",
		"container": "_3QbDxQmZQjcyqqxSSfmZ_q"
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(48);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(50);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(53);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var list = [{
	  href: '',
	  val: '部门公告'
	}, {
	  href: '',
	  val: '最近提交'
	}, {
	  href: '',
	  val: '我的动态'
	}];

	var active = _index2.default['active'];

	exports.default = _dbind2.default.createClass({
	  willMount: function willMount() {
	    this.props.changeActive(0);
	  },

	  data: {
	    list: list,
	    active: active
	  },
	  template: '\n    <section class="' + _index2.default['user'] + '">\n      <section class="' + _index2.default['base-inf'] + '">\n        <user-head img-src="https://avatars1.githubusercontent.com/u/10389599?v=3&s=460"></user-head>\n          <h2 class="' + _index2.default['user-name'] + '">\n            YiKeYaTu\n          </h2>\n          <p class="' + _index2.default['user-num'] + '">\n            2014214054\n          </p>\n          <div class="' + _index2.default['departments'] + '">\n            <svg class="icon ' + _index2.default['icon'] + '" aria-hidden="true">\n              <use xlink:href="#icon-ico13"></use>\n            </svg>\n            <svg class="icon ' + _index2.default['icon'] + '" aria-hidden="true">\n              <use xlink:href="#icon-design"></use>\n            </svg>\n          </div>\n      </section>\n      <section class="' + _index2.default['recent-inf'] + '">\n        <recent-canvas></recent-canvas>\n      </section>\n    </section>\n  ',
	  components: {
	    'user-head': _index4.default,
	    'recent-canvas': _index6.default
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._1z_j4xMEcosAazMjZx1Azo {\n  color: #5f6468;\n  overflow: hidden;\n}\n._1zxQa3_vJInrhX8b3JMhuc {\n  margin-left: 240px;\n}\n._1o5CMzCUixs4R9iPRNiwdu {\n  float: left;\n  width: 220px;\n}\n._1MOt05U5SIO7NejXpsdyWY{\n  margin-left: 20px;\n}\n._3ritkgMpPOXvCio4m3kPtq {\n  width: 200px;\n  padding: 0 0 20px 20px;\n  margin-top: -10px;\n  font-size: 14px;\n  border-bottom: 1px solid rgb(220, 220, 220);\n}\n._1N9TgbiWYNWAl78BlnheKL {\n  width: 220px;\n  padding: 10px 10px;\n}\n.tNTYs800vBTu4I_maD_uB {\n  font-size: 40px;\n  margin-right: 4px;\n  cursor: pointer;\n  color: #5f6468;\n}\n.tNTYs800vBTu4I_maD_uB:hover {\n  color: #cf4646;\n}", ""]);

	// exports
	exports.locals = {
		"user": "_1z_j4xMEcosAazMjZx1Azo",
		"recent-inf": "_1zxQa3_vJInrhX8b3JMhuc",
		"base-inf": "_1o5CMzCUixs4R9iPRNiwdu",
		"user-name": "_1MOt05U5SIO7NejXpsdyWY",
		"user-num": "_3ritkgMpPOXvCio4m3kPtq",
		"departments": "_1N9TgbiWYNWAl78BlnheKL",
		"icon": "tNTYs800vBTu4I_maD_uB"
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(51);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  data: {
	    handleSrc: function handleSrc(src) {
	      return 'url(' + src + ')';
	    }
	  },
	  template: '\n    <div \n      class="' + _index2.default['img'] + '" \n      style="{{ {\n        backgroundImage: handleSrc(imgSrc) \n      } \n    }}"\n    ></div>\n  '
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._3zp6hv8qs3kg1D3unE6CVR {\n  width: 220px;\n  height: 220px;\n  border-radius: 6px;\n  background: #e9ecf2; \n  background-size: cover;\n}", ""]);

	// exports
	exports.locals = {
		"img": "_3zp6hv8qs3kg1D3unE6CVR"
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _index = __webpack_require__(54);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  didMount: function didMount() {
	    var ctx = this.refs.canvas.getContext('2d');
	  },

	  template: '\n    <canvas class="' + _index2.default['cvs'] + '" ref="canvas">\n    </canvas>\n  '
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._3f1tvT92BPv9e6GiTQDWkl {\n  width: 800px;\n  height: 300px;\n  background: #e9ecf2;\n  border-radius: 6px;\n}", ""]);

	// exports
	exports.locals = {
		"cvs": "_3f1tvT92BPv9e6GiTQDWkl"
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _dbindRouter = __webpack_require__(23);

	var _index = __webpack_require__(57);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  data: {
	    thead: ['所属部门', '作业标题', '作业说明', '发布日期', '截止日期', '操作']
	  },
	  willUpdate: function willUpdate() {
	    console.log(11);
	  },
	  willMount: function willMount() {
	    this.props.changeActive(1);
	  },

	  template: '\n    <div class="' + _index2.default['button-grp'] + '">\n      <router-link to="/stu/work/unfinish" value="\u672A\u5B8C\u6210"></router-link>\n      <router-link to="/stu/work/unfinish" value="\u5DF2\u8FC7\u671F"></router-link>\n      <router-link to="/stu/work/finish" value="\u5DF2\u5B8C\u6210"></router-link>\n    </div>\n    <component \n      data-from="children && children.component" \n      children="{{ children && children.children }}"\n      thead="{{ thead }}"\n    ></component>\n  ',
	  components: {
	    'router-link': _dbindRouter.Link
	  }
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css", function() {
				var newContent = require("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._3amnY9TM_pQlDpsaEp3j2c > a {\n  width: 100px;\n  height: 30px;\n  background: #e9ecf2;\n  cursor: pointer;\n  border: none;\n}\n._3amnY9TM_pQlDpsaEp3j2c> a {\n}\n.vNGh4gyIBkyP2BQWdhLJV:hover {\n  background: #ddd;\n}\n._27WZxHTD8b3ALiTV2qJkBf {\n  background: #cf4646 !important;\n}\n._27WZxHTD8b3ALiTV2qJkBf > a {\n  color: #f1f1f1;\n}\n._1w0rZaXAGVwAR4Uioa1XYY {\n  font-size: 12px;\n  text-align: left;\n  border-collapse: collapse;\n}\n._1w0rZaXAGVwAR4Uioa1XYY th {\n  color: #222;\n  min-width: 100px;\n  height: 50px;\n  padding: 0 10px;\n  border-bottom: 1px solid #ddd;\n}\n._1w0rZaXAGVwAR4Uioa1XYY td {\n  color: #5f6468;\n  background: #fcf8e3;\n  padding: 0 10px;\n  height: 40px;\n}", ""]);

	// exports
	exports.locals = {
		"button-grp": "_3amnY9TM_pQlDpsaEp3j2c",
		"work-type": "vNGh4gyIBkyP2BQWdhLJV",
		"choose-work": "_27WZxHTD8b3ALiTV2qJkBf",
		"work-list": "_1w0rZaXAGVwAR4Uioa1XYY"
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _workList = __webpack_require__(60);

	var _workList2 = _interopRequireDefault(_workList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  willMount: function willMount() {
	    console.log(this.props);
	  },

	  template: '\n    <work-list\n      thead="{{ thead }}"\n      tbody="{{ [[\n        \'WEB\u7814\u53D1\u90E8\',\n        \'\u5199\u4E2A\u9A9A\u4E1C\u897F\',\n        \'\u7528html\uFF0Ccss\u5199\u4E2A\u9524\u5B50\u51FA\u6765\',\n        \'2014.02.03\',\n        \'2016.02.03\',\n        \'\u4E0A\u4F20\'\n      ]] }}"\n      bg="#fcf8e3"\n    ></work-list>\n  ',
	  components: {
	    'work-list': _workList2.default
	  }
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _workList = __webpack_require__(61);

	var _workList2 = _interopRequireDefault(_workList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  willMount: function willMount() {},

	  template: '\n    <table class="' + _workList2.default['work-list'] + '">\n        <thead>\n          <tr>\n            <th data-each="i in thead">\n              {{ thead[i] }}\n            </th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr data-each="i in tbody" style="background: {{ bg }}">\n          <td data-each="j in tbody[i]">\n              {{ tbody[i][j] }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  ',
	  components: {}
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./work-list.css", function() {
				var newContent = require("!!./../../../../../node_modules/.0.26.1@css-loader/index.js?modules!./work-list.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, "._3gK4RZWG6yhH8yWurnP4if {\n  font-size: 12px;\n  text-align: left;\n  border-collapse: collapse;\n}\n._3gK4RZWG6yhH8yWurnP4if th {\n  color: #222;\n  min-width: 100px;\n  height: 50px;\n  padding: 0 10px;\n  border-bottom: 1px solid #ddd;\n}\n._3gK4RZWG6yhH8yWurnP4if td {\n  color: #5f6468;\n  padding: 0 10px;\n  height: 40px;\n}", ""]);

	// exports
	exports.locals = {
		"work-list": "_3gK4RZWG6yhH8yWurnP4if"
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dbind = __webpack_require__(2);

	var _dbind2 = _interopRequireDefault(_dbind);

	var _workList = __webpack_require__(60);

	var _workList2 = _interopRequireDefault(_workList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _dbind2.default.createClass({
	  willMount: function willMount() {
	    console.log(this.props);
	  },

	  template: '\n    <work-list\n      thead="{{ thead }}"\n      tbody="{{ [[\n        \'WEB\u7814\u53D1\u90E8\',\n        \'\u5199\u4E2A\u9A9A\u4E1C\u897F\',\n        \'\u7528html\uFF0Ccss\u5199\u4E2A\u9524\u5B50\u51FA\u6765\',\n        \'2014.02.03\',\n        \'2016.02.03\',\n        \'\u4E0A\u4F20\'\n      ]] }}"\n      bg="red"\n    ></work-list>\n  ',
	  components: {
	    'work-list': _workList2.default
	  }
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	;(function (window) {

	  var svgSprite = '<svg>' + '' + '<symbol id="icon-user" viewBox="0 0 1024 1024">' + '' + '<path d="M638.8081 555.9101c77.3161-46.1599 129.4592-131.2492 129.4592-228.6469 0-146.3532-117.3975-265.4321-261.7129-265.4321-144.3144 0-261.7149 119.0789-261.7149 265.4321 0 99.1324 53.9494 185.5949 133.5624 231.1721-158.0411 51.5707-275.3853 191.999-291.1396 366.6842-1.7142 19.0474 12.33 35.884 31.3764 37.5962 19.0904 1.7592 35.8707-12.3279 37.5962-31.3754 16.7137-185.3942 169.7956-325.2091 356.0909-325.2091 186.2963 0 339.3772 139.8149 356.0909 325.2091 1.622 17.9866 16.725 31.5116 34.4412 31.5116 1.0465 0 2.0951-0.0451 3.156-0.1372 19.0464-1.7121 33.0885-18.5487 31.3754-37.5962C921.386 747.6613 800.6257 605.4318 638.8081 555.9101zM314.0833 327.2632c0-108.1702 86.3416-196.1902 192.471-196.1902 106.1315 0 192.468 88.02 192.468 196.1902 0 108.1713-86.3365 196.1892-192.468 196.1892C400.425 523.4524 314.0833 435.4345 314.0833 327.2632z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-home" viewBox="0 0 1024 1024">' + '' + '<path d="M957.725929 523.872399c-10.998946 11.491729-11.76134 10.558473-45.118396 10.558473l-65.871896 0.010233 0 344.488869c0 52.571333-27.796182 83.272565-78.636117 83.272565l-92.083935 0-35.70564-0.671289L640.309947 663.85864c0-35.786041-18.545115-44.781926-39.779588-44.781926L437.096546 619.076714c-23.844011 0-42.709434 9.958816-42.709434 43.092447l0 299.748898-47.406602 0.282433-80.302128 0c-48.269284 0-78.616673-27.386744-78.616673-88.283696L188.061709 534.587438l-67.837747 0.010233c-35.786484 0-37.893558-5.52483-46.424188-15.925714-16.919015-20.551058-15.956044-46.155203 27.034811-81.543178l377.084341-350.779132c11.160635-8.483208 22.400067-25.007557 36.649166-25.007557l5.962026 0c14.249099 0 25.507975 13.116739 36.666563 21.588691l373.473969 354.029152C966.638267 460.899158 980.125996 500.470409 957.725929 523.872399z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-android" viewBox="0 0 1024 1024">' + '' + '<path d="M770.094796 321.244468C757.520905 193.225793 647.725774 93.074815 514.045675 93.074815c-133.636095 0-243.431226 100.150978-256.005117 228.169653L770.094796 321.244468z"  ></path>' + '' + '<path d="M375.135238 212.06486c0-12.742209 10.337873-23.102161 23.123597-23.102161 12.742744 0 23.082663 10.359952 23.082663 23.102161 0 12.765745-10.33992 23.102161-23.082663 23.102161C385.473111 235.167021 375.135238 224.829582 375.135238 212.06486"  ></path>' + '' + '<path d="M606.120491 212.06486c0-12.742209 10.33685-23.102161 23.080617-23.102161 12.742744 0 23.123597 10.359952 23.123597 23.102161 0 12.765745-10.380854 23.102161-23.123597 23.102161C616.458364 235.167021 606.120491 224.829582 606.120491 212.06486"  ></path>' + '' + '<path d="M405.053874 117.381407l-42.238736-74.623581c-2.280022-4.051269-7.384487-5.484921-11.435927-3.164063-4.049393 2.257413-5.486175 7.385201-3.164196 11.43647l41.733202 73.756841C393.913695 122.758881 399.652637 119.891578 405.053874 117.381407"  ></path>' + '' + '<path d="M622.535012 117.381407l42.238736-74.623581c2.277975-4.051269 7.426445-5.484921 11.43388-3.164063 4.051439 2.257413 5.486175 7.385201 3.2082 11.43647l-41.774136 73.756841C633.674167 122.758881 627.935225 119.891578 622.535012 117.381407"  ></path>' + '' + '<path d="M237.953238 627.096365c0 32.764218-25.867196 59.511395-57.387374 59.511395-31.605115 0-57.407841-26.747177-57.407841-59.511395L123.158023 396.181181c0-32.741705 25.802725-59.536978 57.407841-59.536978 31.521201 0 57.387374 26.795273 57.387374 59.536978L237.953238 627.096365z"  ></path>' + '' + '<path d="M902.887651 627.096365c0 32.764218-25.823192 59.511395-57.387374 59.511395-31.561111 0-57.428308-26.747177-57.428308-59.511395L788.07197 396.181181c0-32.741705 25.866173-59.536978 57.428308-59.536978 31.564181 0 57.387374 26.795273 57.387374 59.536978L902.887651 627.096365z"  ></path>' + '' + '<path d="M260.31751 346.434174l0 369.542474c0 32.743752 26.838355 59.516512 59.539477 59.516512l41.267578 0L361.124565 901.443733c0 32.764218 25.825239 59.516512 57.430354 59.516512 31.521201 0 57.387374-26.752294 57.387374-59.516512L475.942293 775.494183l74.855944 0L550.798236 901.443733c0 32.764218 25.867196 59.516512 57.387374 59.516512 31.608185 0 57.430354-26.752294 57.430354-59.516512L665.615964 775.494183l41.941965 0c32.745126 0 59.539477-26.77276 59.539477-59.516512L767.097406 346.434174 260.31751 346.434174z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-shejidinggao241" viewBox="0 0 1024 1024">' + '' + '<path d="M489.7792 756.0192l-0.6912-232.576 308.9152 1.408 0 277.6832L489.7792 756.0192zM489.088 267.9808l308.9152-46.5152 0 256.8704L489.088 478.336 489.088 267.9808 489.088 267.9808zM225.9712 522.752l220.7744 0.6912 0 228.4032-220.7744-35.4048L225.9712 522.752 225.9712 522.752zM225.9712 478.336l0-170.8032 220.7744-35.4048 0 206.1824L225.9712 478.336 225.9712 478.336zM225.9712 478.336"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-ico13" viewBox="0 0 1024 1024">' + '' + '<path d="M512 0C229.23264 0 0 229.25312 0 512s229.23264 512 512 512 512-229.25312 512-512S794.76736 0 512 0zM512 973.86496C256.91136 973.86496 50.13504 767.08864 50.13504 512S256.91136 50.13504 512 50.13504 973.86496 256.91136 973.86496 512 767.08864 973.86496 512 973.86496zM791.01952 531.84512l0.16384-9.46176 170.91584 0c0.22528-3.42016 0.44032-6.87104 0.44032-10.37312s-0.21504-6.912-0.44032-10.37312L791.18336 501.63712l-0.16384-9.4208c-1.36192-73.8304-10.26048-144.34304-26.48064-209.53088l-2.10944-8.6016 8.33536-2.83648c40.86784-13.95712 71.76192-29.00992 92.50816-40.58112-4.48512-5.55008-9.09312-10.98752-13.80352-16.34304-24.75008 13.57824-52.70528 25.72288-83.16928 36.3008l-9.44128 3.24608-2.9184-9.55392c-17.2032-56.58624-39.50592-105.984-66.38592-146.76992-12.04224-5.14048-24.38144-9.70752-36.88448-13.79328 33.36192 42.51648 61.55264 99.56352 82.3808 167.09632l2.9184 9.46176-9.55392 2.63168c-59.3408 16.384-124.672 25.43616-194.21184 26.96192l-9.86112 0.2048L522.3424 61.94176C518.94272 61.696 515.50208 61.45024 512 61.45024s-6.92224 0.24576-10.36288 0.49152l0 228.17792-9.86112-0.2048c-69.33504-1.51552-134.656-10.65984-194.16064-27.11552l-9.56416-2.63168 2.9184-9.472c20.84864-67.50208 49.03936-124.45696 82.33984-166.89152-12.52352 4.0448-24.84224 8.6016-36.90496 13.75232-26.81856 40.704-49.1008 90.0096-66.304 146.56512l-2.93888 9.59488-9.43104-3.29728c-30.37184-10.52672-58.28608-22.71232-83.11808-36.25984-4.75136 5.4272-9.41056 10.9056-13.90592 16.50688 20.736 11.56096 51.64032 26.624 92.49792 40.58112l8.33536 2.83648-2.0992 8.6016c-16.19968 65.14688-25.11872 135.65952-26.50112 209.53088l-0.18432 9.4208L61.9008 501.63712C61.66528 505.088 61.46048 508.49792 61.46048 512s0.21504 6.95296 0.44032 10.37312l170.88512 0 0.18432 9.46176c1.40288 74.52672 10.45504 145.65376 26.90048 211.34336l2.18112 8.6016-8.3968 2.83648c-40.3968 13.78304-71.12704 28.64128-91.79136 40.0896 4.48512 5.56032 9.1136 10.98752 13.84448 16.34304 24.59648-13.33248 52.34688-25.3952 82.55488-35.84l9.43104-3.25632 2.89792 9.50272c17.152 55.88992 39.2704 104.67328 65.8432 144.9984 12.06272 5.09952 24.38144 9.70752 36.9152 13.75232-33.05472-42.06592-61.0304-98.44736-81.79712-165.21216l-2.97984-9.50272 9.61536-2.63168c59.15648-16.25088 124.30336-25.27232 193.59744-26.79808l9.86112-0.2048 0 226.24256c3.44064 0.21504 6.8608 0.41984 10.36288 0.41984s6.94272-0.2048 10.36288-0.41984L522.37312 735.85664l9.86112 0.2048c69.07904 1.51552 134.1952 10.57792 193.55648 26.96192l9.5744 2.63168-2.95936 9.50272c-20.76672 66.67264-48.75264 123.02336-81.72544 165.04832 12.52352-4.0448 24.86272-8.6528 36.9152-13.75232 26.53184-40.32512 48.65024-89.02656 65.78176-144.7936l2.9184-9.55392 9.43104 3.28704c30.13632 10.41408 57.82528 22.4256 82.45248 35.76832 4.82304-5.38624 9.472-10.86464 13.96736-16.45568-20.64384-11.44832-51.33312-26.29632-91.77088-40.0896l-8.38656-2.83648 2.1504-8.6016C780.58496 677.49888 789.63712 606.37184 791.01952 531.84512zM501.63712 715.1104l-9.44128 0.21504C420.53632 716.8 353.32096 726.016 292.4032 742.68672l-9.48224 2.63168-2.39616-9.50272c-16.35328-64.4096-25.36448-132.89472-26.81856-203.60192l-0.18432-9.8304 248.1152 0L501.63712 715.1104zM501.63712 501.62688l-248.1152 0 0.18432-9.8304c1.46432-70.0416 10.32192-137.91232 26.33728-201.75872l2.39616-9.50272 9.48224 2.59072c61.07136 16.83456 128.45056 26.10176 200.28416 27.53536l9.44128 0.24576L501.64736 501.62688zM522.36288 310.90688l9.44128-0.24576c71.8336-1.44384 139.2128-10.7008 200.28416-27.53536l9.48224-2.59072 2.39616 9.50272c16.0256 63.83616 24.89344 131.70688 26.30656 201.75872l0.21504 9.8304-248.1152 0L522.37312 310.90688zM743.4752 735.81568l-2.41664 9.50272-9.46176-2.63168C670.67904 726.016 603.46368 716.8 531.80416 715.3152l-9.44128-0.21504L522.36288 522.37312l248.1152 0-0.21504 9.8304C768.80896 602.95168 759.808 671.488 743.4752 735.81568z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-homework" viewBox="0 0 1024 1024">' + '' + '<path d="M883.35637 285.814543l-24.125654-24.006515c-26.568005-26.568005-69.636766-26.568005-96.20477 0L499.013845 525.879697l-72.555672 192.052123 192.826527-71.721699 264.131239-264.131239C909.924375 355.451309 909.924375 312.382548 883.35637 285.814543zM576.871204 619.522978l-82.920768 30.85701 31.095288-82.444212 4.646422-4.646422 51.706341 51.706341L576.871204 619.522978zM606.238976 590.155207l-51.706341-51.587202 200.034439-200.034439 51.706341 51.706341L606.238976 590.155207zM845.589296 350.804887l-17.453869 17.453869-51.587202-51.706341 17.453869-17.453869c9.471553-9.471553 24.959628-9.471553 34.431181 0l17.27516 17.27516C855.179988 325.845259 855.179988 341.214194 845.589296 350.804887z"  ></path>' + '' + '<path d="M239.767307 741.938336 389.584642 741.938336 407.038511 694.282723 239.767307 694.282723Z"  ></path>' + '' + '<path d="M445.579988 563.706341 239.767307 563.706341 239.767307 611.361955 427.530425 611.361955Z"  ></path>' + '' + '<path d="M239.767307 433.129959l208.850727 0 0 47.655614-208.850727 0 0-47.655614Z"  ></path>' + '' + '<path d="M448.618034 742.831879 613.983013 742.831879 613.983013 683.262362Z"  ></path>' + '' + '<path d="M710.902618 837.606981c0 18.764398-15.249796 34.073764-34.073764 34.073764L207.182781 871.680745c-18.764398 0-34.073764-15.249796-34.073764-34.073764L173.109017 186.393019c0-18.764398 15.249796-34.073764 34.073764-34.073764l287.720768 0 0 153.03409c0 37.588365 36.396975 58.556835 85.899244 58.556835l53.850844-53.01687-52.778592 0c-18.764398 0-34.073764-15.249796-34.073764-34.073764L547.80128 171.143223l118.900756 107.761257 36.813962-36.813962L546.609889 101.804305 188.71623 101.804305c-37.588365 0-68.028389 30.440023-68.028389 68.028389l0 684.275044c0 37.588365 30.440023 68.028389 68.028389 68.028389l514.263642 0c37.588365 0 68.028389-30.440023 68.028389-68.028389L771.008261 554.294357l-60.105643 60.105643L710.902618 837.606981z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-design" viewBox="0 0 1024 1024">' + '' + '<path d="M780.969894 298.500465c-31.590486 40.395012-118.300336 151.917992-187.153494 240.537332l-87.406722-93.25901c79.091336-73.943083 176.960341-165.379585 212.328873-198.12743 62.941518-58.274218 118.121258-92.959182 130.110313-78.784344C856.341512 176.738283 836.417741 227.63958 780.969894 298.500465L780.969894 298.500465zM578.556858 558.676066c-26.66429 34.319643-49.608861 63.859423-63.664995 81.954547l-103.497189-105.993033c16.773012-15.699564 44.704155-41.819454 77.079516-72.091922L578.556858 558.676066 578.556858 558.676066zM499.463476 660.502196l0-0.316202c-60.090587 242.288209-327.068104 103.012142-327.068104 103.012142s112.016213 14.835893 112.016213-94.974072c0-106.454544 102.953813-116.060319 109.269659-116.54639l105.993033 108.548228C499.660974 660.244322 499.463476 660.502196 499.463476 660.502196L499.463476 660.502196zM499.463476 660.502196"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-data" viewBox="0 0 1024 1024">' + '' + '<path d="M457.084785 372.777145 288.105209 372.777145l0 55.883775 168.979576 0L457.084785 372.777145zM457.084785 261.015735 288.105209 261.015735l0 55.883775 168.979576 0L457.084785 261.015735zM288.105209 652.189879l450.624141 0 0-55.883775L288.105209 596.306104 288.105209 652.189879zM654.238027 65.431222 203.607746 65.431222c-46.659693 0-84.48723 37.523615-84.48723 83.821057l0 726.46349c0 46.292326 37.82856 83.820034 84.48723 83.820034L823.222719 959.535803c46.660716 0 84.48723-37.527708 84.48723-83.820034L907.709949 316.89951 654.238027 65.431222zM654.238027 149.252279 823.222719 316.89951 710.561823 316.89951c-31.105439 0-56.323796-25.019837-56.323796-55.883775L654.238027 149.252279zM851.385129 847.779509c0 30.852682-25.220405 55.873542-56.33096 55.873542l-563.278897 0c-31.106462 0-56.32482-25.019837-56.32482-55.873542L175.450453 177.189561c0-30.859845 25.218358-55.878658 56.32482-55.878658l366.131795 0 0 167.641091c0 46.298466 37.827537 83.826174 84.492346 83.826174l168.984692 0L851.384106 847.779509zM288.105209 540.42233l450.624141 0 0-55.880705L288.105209 484.541625 288.105209 540.42233zM288.105209 763.948219l450.624141 0 0-55.883775L288.105209 708.064444 288.105209 763.948219z"  ></path>' + '' + '</symbol>' + '' + '<symbol id="icon-ios" viewBox="0 0 1024 1024">' + '' + '<path d="M517.392097 360.456569 428.783963 331.810276C428.783963 331.810276 296.493731 280.356061 197.448509 389.075727 96.176766 500.18901 103.92032 637.19364 148.226529 761.237601 192.528454 885.310126 276.884917 1021.919152 369.716158 1023.681517 441.443288 1025.042566 447.060292 984.825216 546.909575 985.522165 546.909575 985.522165 582.770998 990.275124 635.517709 1009.355515 688.265848 1028.467325 733.036214 1031.753551 788.109419 975.949121 866.85459 896.21137 906.240744 775.59788 906.240744 775.59788 906.240744 775.59788 774.748861 727.168536 778.273592 584.713997 781.766903 442.259459 881.610473 408.156117 881.610473 408.156117 881.610473 408.156117 806.391461 280.027582 635.517709 322.270081L517.392097 360.456569ZM512.372069 235.352904C512.372069 235.352904 493.325954 29.14901 748.556169 0 748.556169 0 765.013006 218.900351 512.372069 235.352904L512.372069 235.352904Z"  ></path>' + '' + '</symbol>' + '' + '</svg>';
	  var script = function () {
	    var scripts = document.getElementsByTagName('script');
	    return scripts[scripts.length - 1];
	  }();
	  var shouldInjectCss = script.getAttribute("data-injectcss");

	  /**
	   * document ready
	   */
	  var ready = function ready(fn) {
	    if (document.addEventListener) {
	      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
	        setTimeout(fn, 0);
	      } else {
	        var loadFn = function loadFn() {
	          document.removeEventListener("DOMContentLoaded", loadFn, false);
	          fn();
	        };
	        document.addEventListener("DOMContentLoaded", loadFn, false);
	      }
	    } else if (document.attachEvent) {
	      IEContentLoaded(window, fn);
	    }

	    function IEContentLoaded(w, fn) {
	      var d = w.document,
	          done = false,

	      // only fire once
	      init = function init() {
	        if (!done) {
	          done = true;
	          fn();
	        }
	      };
	      // polling for no errors
	      var polling = function polling() {
	        try {
	          // throws errors until after ondocumentready
	          d.documentElement.doScroll('left');
	        } catch (e) {
	          setTimeout(polling, 50);
	          return;
	        }
	        // no errors, fire

	        init();
	      };

	      polling();
	      // trying to always fire before onload
	      d.onreadystatechange = function () {
	        if (d.readyState == 'complete') {
	          d.onreadystatechange = null;
	          init();
	        }
	      };
	    }
	  };

	  /**
	   * Insert el before target
	   *
	   * @param {Element} el
	   * @param {Element} target
	   */

	  var before = function before(el, target) {
	    target.parentNode.insertBefore(el, target);
	  };

	  /**
	   * Prepend el to target
	   *
	   * @param {Element} el
	   * @param {Element} target
	   */

	  var prepend = function prepend(el, target) {
	    if (target.firstChild) {
	      before(el, target.firstChild);
	    } else {
	      target.appendChild(el);
	    }
	  };

	  function appendSvg() {
	    var div, svg;

	    div = document.createElement('div');
	    div.innerHTML = svgSprite;
	    svgSprite = null;
	    svg = div.getElementsByTagName('svg')[0];
	    if (svg) {
	      svg.setAttribute('aria-hidden', 'true');
	      svg.style.position = 'absolute';
	      svg.style.width = 0;
	      svg.style.height = 0;
	      svg.style.overflow = 'hidden';
	      prepend(svg, document.body);
	    }
	  }

	  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
	    window.__iconfont__svg__cssinject__ = true;
	    try {
	      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
	    } catch (e) {
	      console && console.log(e);
	    }
	  }

	  ready(appendSvg);
	})(window);

/***/ }
/******/ ]);