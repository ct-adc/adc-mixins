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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(29)('wks')
  , uid        = __webpack_require__(33)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(28);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author rubyisapm
 */
!(module.exports = {
    /**
     * 将字符串的首字母大写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    upperCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[a-z]/, function (firstLetter) {
            return firstLetter.toUpperCase();
        })
    },
    /**
     * 将字符串的首字母小写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    lowerCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[A-Z]/, function (firstLetter) {
            return firstLetter.toLowerCase();
        })
    },
    /**
     * 判断一个值是不是window对象
     * @param obj
     * @returns {boolean}
     */
    isWindow: function (obj) {
        return obj != null && obj === obj.window;
    },
    /**
     * 判断一个值是不是数组
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isArray: function (val) {
        return Array.isArray(val);
    },
    /**
     * 判断一个值是不是对象
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isObject: function (val) {
        return typeof val === 'object' && !this.isArray(val);
    },
    /**
     * 判断一个值是不是纯文本对象
     * 即其属性不是对象/dom节点/window
     * @param obj
     * @returns {boolean}
     */
    isPlainObject: function (obj) {
        if (!this.isObject(obj) || obj.nodeType || this.isWindow(obj)) {
            return false;
        }
        if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
            return false;
        }
        return true;
    },
    /**
     * 判断一个值是不是JSON
     * @param val
     * @returns {boolean}
     */
    isJSON: function (val) {
        try {
            var result = JSON.parse(val);
            return typeof result === 'object';
        } catch (e) {
            return false;
        }
    },
    /**
     * 判断一个值是不是函数
     * @param val
     * @returns {boolean}
     */
    isFunction: function (val) {
        return typeof val === 'function';
    },
    /**
     * 判断一个值是不是正则表达式
     * @param obj
     * @returns {boolean}
     */
    isRegExp: function (obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
    },

    extend: function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (!this.isObject(target) && !this.isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if (( options = arguments[i] ) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && ( this.isPlainObject(copy) ||
                        ( copyIsArray = this.isArray(copy) ) )) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];

                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = this.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    },

    /**
     * 检测对象是否为空对象
     * @param {?Object} obj 要检测的对象，null会被检测为空对象
     * @returns {boolean}
     */
    isEmptyObject: function (obj) {
        for (var i in obj) {
            return false;
        }
        return true;
    },

    getObjValByKey: function (obj, key) {
        key = key.split('.');
        var result = obj;
        key.map(function (item) {
            result = result[item];
        });
        return result;
    },
    /**
     * 判断浏览器是否支持storage
     * @param {string} type 'localStorage'/'sessionStorage'
     * @returns {boolean}
     */
    isStorageAvailable: function (type) {
        try {
            var x = '__storage_test__',
                storage = window[type];
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }
})
;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(13);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(46)
  , toPrimitive    = __webpack_require__(66)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(9)
  , hide      = __webpack_require__(4)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys')
  , uid    = __webpack_require__(33);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48)
  , defined = __webpack_require__(14);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(8)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(61)
  , hide           = __webpack_require__(4)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(6)
  , $iterCreate    = __webpack_require__(51)
  , setToStringTag = __webpack_require__(18)
  , getPrototypeOf = __webpack_require__(57)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(58)
  , enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(9)
  , invoke             = __webpack_require__(47)
  , html               = __webpack_require__(24)
  , cel                = __webpack_require__(15)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(8)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by wx-wangxiang on 17/01/03.
 */
!(module.exports = {
	//将字符串转化为数字
	toInt: function(str){
	    return parseInt(str, 10) || 0;
	},
	/**
	 * 补零操作
	 * @param  {int} num    需要进行补零操作的参数
	 * @param  {int} digits 想要拓展的位数
	 * @return {string}     补零操作后的数字
	 */
	zeroFill: function(num, digits) {
		var num = '' + num; //将数字转为字符串的简便方法，同样的如果将数字字符串转为数字可以在其前面加上"+"号
		while(num.length < digits) {
			num = '0' + num;
		}
		return num;
	}
})

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ct_utility__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ct_utility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ct_utility__);




function getInputs(ops) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(ops);
}

function getFormTouched(ops) {
    var formTouched = {};
    var inputs = getInputs(ops);
    inputs.map(function (input) {
        formTouched[input] = false;
    });
    return formTouched;
}
function Mixin(ops) {
    var formTouched = getFormTouched(ops);
    var defaultData = {
        formTouched: formTouched,
        checkTransfer: {}
    };
    return {
        data: function data() {
            return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(defaultData));
        },

        computed: {
            validation: function validation() {
                var that = this;
                var result = {};
                var inputs = getInputs(ops);
                inputs.map(function (input) {
                    if (that.formTouched[input]) {
                        result[input] = that.validate(input);
                    }
                });
                if (that.formAllTouched) {
                    result._pass = inputs.filter(function (input) {
                        var rules = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(result[input]);
                        var notAllOk = rules.filter(function (rule) {
                            return !result[input][rule];
                        }).length > 0;
                        return notAllOk;
                    }).length === 0;
                } else {
                    result._pass = false;
                }
                return result;
            },
            formAllTouched: function formAllTouched() {
                var inputs = getInputs(ops);
                var that = this;
                return inputs.filter(function (input) {
                    return !that.formTouched[input];
                }).length === 0;
            }
        },
        methods: {
            validate: function validate(input) {
                var _this = this;

                var result = {};
                var rules = ops[input].rules;
                var ruleKeys = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(rules);
                var data = __WEBPACK_IMPORTED_MODULE_3_ct_utility___default.a.base.getObjValByKey(this, ops[input].form);
                ruleKeys.map(function (ruleKey) {
                    var rule = rules[ruleKey].rule;
                    if (rules[ruleKey].async) {
                        result[ruleKey] = _this.checkTransfer[input];
                    } else {
                        if (__WEBPACK_IMPORTED_MODULE_3_ct_utility___default.a.base.isRegExp(rule)) {
                            result[ruleKey] = rule.test(data);
                        } else if (typeof rule === 'function') {
                            result[ruleKey] = rule(data);
                        }
                    }
                });
                return result;
            },
            validateAsync: function validateAsync(input) {
                var _this2 = this;

                var data = __WEBPACK_IMPORTED_MODULE_3_ct_utility___default.a.base.getObjValByKey(this, ops[input].form);
                var rules = ops[input].rules;
                var ruleKeys = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(ops[input].rules);
                var firstRule = rules[ruleKeys[0]].rule;

                return firstRule(data).then(function (res) {
                    _this2.$set(_this2.checkTransfer, input, true);
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
                }).catch(function (err) {
                    _this2.$set(_this2.checkTransfer, input, false);
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(err);
                });
            },
            touch: function touch(input) {
                this.formTouched[input] = true;
            },
            touchAll: function touchAll() {
                var that = this;
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(that.formTouched).map(function (item) {
                    that.formTouched[item] = true;
                });
            },
            resetMixin: function resetMixin() {
                __WEBPACK_IMPORTED_MODULE_3_ct_utility___default.a.base.extend(true, this.$data, defaultData);
            }
        }
    };
}

/* harmony default export */ __webpack_exports__["a"] = Mixin;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(71);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21)
  , toLength  = __webpack_require__(31)
  , toIndex   = __webpack_require__(65);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(9)
  , call        = __webpack_require__(50)
  , isArrayIter = __webpack_require__(49)
  , anObject    = __webpack_require__(3)
  , toLength    = __webpack_require__(31)
  , getIterFn   = __webpack_require__(67)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(17)(function(){
  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(6)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(55)
  , descriptor     = __webpack_require__(28)
  , setToStringTag = __webpack_require__(18)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(30).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(8)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(3)
  , dPs         = __webpack_require__(56)
  , enumBugKeys = __webpack_require__(23)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(15)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(24).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(12)
  , anObject = __webpack_require__(3)
  , getKeys  = __webpack_require__(27);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(21)
  , arrayIndexOf = __webpack_require__(44)(false)
  , IE_PROTO     = __webpack_require__(19)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(17);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(12)
  , DESCRIPTORS = __webpack_require__(5)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(3)
  , aFunction = __webpack_require__(13)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20)
  , defined   = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(22)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(6);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(42)
  , step             = __webpack_require__(53)
  , Iterators        = __webpack_require__(6)
  , toIObject        = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(25)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(27);

__webpack_require__(59)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(9)
  , classof            = __webpack_require__(22)
  , $export            = __webpack_require__(16)
  , isObject           = __webpack_require__(11)
  , aFunction          = __webpack_require__(13)
  , anInstance         = __webpack_require__(43)
  , forOf              = __webpack_require__(45)
  , speciesConstructor = __webpack_require__(63)
  , task               = __webpack_require__(30).set
  , microtask          = __webpack_require__(54)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(60)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(18)($Promise, PROMISE);
__webpack_require__(62)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(52)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(64)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(25)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(4)
  , Iterators     = __webpack_require__(6)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var base = __webpack_require__(7),
        objTransfer = __webpack_require__(79),
        cookie = __webpack_require__(76),
        localStorage = __webpack_require__(78),
        sessionStorage = __webpack_require__(80),
        URIParser = __webpack_require__(75),
        numberFormat=__webpack_require__(34),
        dateFilter=__webpack_require__(77);

    return {
        base: base,
        objTransfer: objTransfer,
        cookie: cookie,
        localStorage: localStorage,
        sessionStorage: sessionStorage,
        URIParser:URIParser,
        numberFormat:numberFormat,
        dateFilter:dateFilter
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
    var base=__webpack_require__(7);
    /**
     * 将查询字符串解析为查询参数数组
     * @param {string} search
     */
    function searchToParamGroup(search){
        var paramGroup={};
        if(search!==''){
            search.replace(/(\?|&|\b)(([^=?&]+)=([^=&]*))/g,function(_,_,$1,$2,$3){
                paramGroup[$2]=$3;
            });
        }
        return paramGroup;
    }

    /**
     * URL解析并返回对应的参数
     * @param {string} uri uri
     * @returns {{protocol: *, hostname: *, port: *, pathname: *, search: *, hash: *, host: *}}
     */
    function uriParser(uri){
        var parser = document.createElement('a');
        parser.href = uri;
        return {
            protocol:parser.protocol,
            hostname:parser.hostname,
            port:parser.port,
            pathname:parser.pathname,
            search:parser.search,
            hash:parser.hash,
            host:parser.host
        };
    }

    /**
     * 获取url中指定参数的值
     * @param {string} uri 要解析的url
     * @param {string} param 要获取的查询参数的key值
     * @returns {undefined | string}
     */
    function getParam(uri,param){
        var paramGroup=searchToParamGroup(uriParser(uri).search);
        if(!base.isEmptyObject(paramGroup)){
            return paramGroup[param];
        }
    }

    /**
     * 获取url中的参数集合
     * @param {string} uri 要解析的url
     * @returns {object}
     */
    function getParamGroup(uri){
        return searchToParamGroup(uriParser(uri).search);
    }


    return{
        uriParser:uriParser,
        getParamGroup:getParamGroup,
        getParam:getParam,
        searchToParamGroup:searchToParamGroup
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	/**
	 * 获取 cookie
	 * @param  {String} sKey 键名
	 * @return {String}      键名
	 */
	function get(sKey) {
		return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
	}

	/**
	 * 设置 cookie
	 * @param {String} sKey    键名
	 * @param {String} sValue  键值
	 * @param {[type]} vEnd    过期时间
	 * @param {String} sPath   路径
	 * @param {String} sDomain 域名
	 * @param {Boolean} bSecure 安全
	 */
	function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		var sExpires = '';

		if ( !sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey) ) {
			return false;
		}

		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;

				case String:
					sExpires = '; expires=' + vEnd;
					break;
					
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}

		document.cookie = encodeURIComponent( sKey ) + '=' + encodeURIComponent( sValue ) +
			sExpires +
			(sDomain ? '; domain=' + sDomain : '') +
			(sPath ? '; path=' + sPath : '') +
			(bSecure ? '; secure' : '');

		return true;
	}

	/**
	 * 移除某个 cookie
	 * @param  {String} sKey    键名
	 * @param  {String} sPath   路径
	 * @param  {String} sDomain 域名
	 * @return {Boolean}        true-删除成功，false-删除失败
	 */
	function remove(sKey, sPath, sDomain) {
		if ( !sKey || !has(sKey) ) {
			return false;
		}

		document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
							(sDomain ? '; domain=' + sDomain : '') +
								(sPath ? '; path=' + sPath : '');
		
		return true;
	}

	/**
	 * 判断是否拥有某个 key
	 * @param  {String}  sKey 键名
	 * @return {Boolean}
	 */
	function has(sKey) {
		var patt = new RegExp( '(?:^|;\\s*)' + encodeURIComponent( sKey ).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=' );

		return patt.test( document.cookie );
	}

	/**
	 * 获取
	 * @return {Object} 所有的 cookie 键值对
	 */
	function keys() {
		var map     = {},
			allKeys = document.cookie.
						replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').
							split( /\s*(?:\=[^;]*)?;\s*/ );


		allKeys.forEach(function( key ) {
			map[ decodeURIComponent(key) ] = get( key );
		});

		return map;
	}

	return {
		get    : get,
		set    : set,
		remove : remove,
		has    : has,
		keys   : keys
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author wangxiang
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	var numberFormat = __webpack_require__(34),
		rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    	raspnetjson = /^\/Date\((\d+)\)\/$/, //匹配 /Date(12345)/ 类型的字符串
		DATE_FORMATS = {
		yyyy: dateGetter("FullYear", 4), //对年份进行四位数的显示 如：2017/01/06
		yy: dateGetter("FullYear", 2, 0, true), //对年份进行两位数的显示 如：17/01/06
		y: dateGetter("FullYear", 1), //年份的一般的显示 如：2017/01/06
		MM: dateGetter("Month", 2, 1), //对于月份的单个数字会进行补零, 如：2017/01/06
	  	M: dateGetter("Month", 1, 1), //对于月份的单个数字不会进行补零, 如：2017/1/06
	  	dd: dateGetter("Date", 2), //对于日期的单个数字会进行补零, 如：2017/01/06
	  	d: dateGetter("Date", 1), //对于日期的单个数字不会补零, 如：2017/01/6
	  	HH: dateGetter("Hours", 2), //对于小时的单个数字会进行补零,并且是24小时制 如：2017/01/06 08:01
	  	H: dateGetter("Hours", 1), //对于小时的单个数字不会进行补零,并且是24小时制 如：2017/01/06 8:01
	  	hh: dateGetter("Hours", 2, -12), //对于小时的单个数字会进行补零,并且是12小时制 如：2017/01/06 08:01
	  	h: dateGetter("Hours", 1, -12), //对于小时的单个数字不会进行补零,并且是12小时制 如：2017/01/06 8:01
	  	mm: dateGetter("Minutes", 2), //对于分钟的单个数字会进行补零 如：2017/03/06 08:01
	  	m: dateGetter("Minutes", 1), //对于分钟的单个数字不会进行补零 如：2017/03/06 08:1
	  	ss: dateGetter("Seconds", 2), //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:09
	  	s: dateGetter("Seconds", 1), //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:9
	};
	/**
	 * 根据不同的日期format,获取相应的年，月，日，时，分，秒的显示格式
	 * @param  {string} name   函数通过该参数执行不同的时间操作的方法
	 * @param  {int} size   日期显示的位数
	 * @param  {int} offset 时间显示的格式，12小时制还是24小时制(用于小时的显示)
	 * @param  {boolean} trim   用于年份的两位数的显示
	 * @return {Function}        返回数字格式化方法
	 */
	function dateGetter(name, size, offset, trim) {
	    return function (date) {
		    var value = date["get" + name]();
		    if (offset > 0 || value > -offset){
		      	value += offset;
		    }
		    if (value === 0 && offset === -12) {
		      	value = 12;
		    }
		    return padNumber(value, size, trim);
		}
	}
	/**
	 * 数字格式化
	 * @param  {int} num    获得的日期
	 * @param  {[type]} digits 日期要显示的位数
	 * @param  {boolean} trim   年份是否是两位数显示
	 * @return {string}        返回格式化后的数字
	 */
	function padNumber(num, digits, trim) {
		var neg = '';
		if (num < 0) {
		    neg = '-';
		    num = -num;
		}
		num = numberFormat.zeroFill(num, digits); //补零操作
		if (trim){
		    num = num.substr(num.length - digits);
		}
		return neg + num;
	}
	/**
	 * 日期格式化
	 * @param  {obj} date   日期对象
	 * @param  {string} format 格式化的方式
	 * @return {string}        格式化后的日期
	 */
	function dateFilter(date, format) {
		var text = "",
		    parts = [],
		    fn, match;
		format = format || "yyyy-M-d";
		if (typeof date === "string") {
		    if (/^\d+$/.test(date)) {
		      	date = numberFormat.toInt(date);
		    } else if (raspnetjson.test(date)) { //匹配 '/Date(1483410908227)/' 类型的字符串
		      	date = +RegExp.$1; //RegExp.$1 表示前面raspnetjson.test()匹配到的第一个括号中的内容
		    } else {
		      	console.error('请输入合法的日期');
		      	return;
		    }
		};
		if (typeof date === 'number') {
		    date = new Date(date);
		}
		while (format) {
		    match = rdateFormat.exec(format);
		    /* istanbul ignore else */
		    if (match) {
		      	parts = parts.concat(match.slice(1));
		      	format = parts.pop();
		    } else {
		      	parts.push(format);
		      	format = null;
		    }
		}
		parts.forEach(function (value) {
		    fn = DATE_FORMATS[value];
		    text += fn ? fn(date) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
		});
		return text;
	}

	return dateFilter
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(7);

	var IS_LOCAL_STORAGE_AVAILABLE = base.isStorageAvailable( 'localStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {
			localStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			return localStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
  var base=__webpack_require__(7);

  /**
   * 按照给定的规则转换原对象中的key的格式
   * @param {Function} transfer 转换函数
   * @param {?Object} obj 原对象
   * @returns {?Object} obj 转换后的对象
   */
  function transferKeyInObj(transfer,obj,jsonTransfer){
    if(obj===null){
      return obj;
    }
    var newObj={},
      keys=Object.keys(obj);
    if(keys.length===0){
      return obj;
    }
    keys.map(function(key){
      var val=obj[key],
        newKey=transfer(key);
      if(base.isObject(val)){
        newObj[newKey]=transferKeyInObj(transfer,val,jsonTransfer);
      }else if(base.isArray(val)){
        newObj[newKey]=transferKeyInArray(transfer,val,jsonTransfer);
      }else if(base.isJSON(val) && jsonTransfer){
        newObj[newKey]=JSON.stringify(transferKeyInJSON(transfer,val,jsonTransfer));
      }else{
        newObj[newKey]=val;
      }
    });
    return newObj;
  }

  /**
   * 按照给定的规则转换原数组中的对象中的key的格式
   * @param {Function} transfer 转换函数
   * @param {Array} arr 原对象
   * @returns {?Object} obj 转换后的对象
   */
  function transferKeyInArray(transfer,arr,jsonTransfer){
    if(arr.length==0){
      return arr;
    }
    var newArray=[];
    arr.map(function(item,index){
      if(base.isArray(item)){
        newArray[index]=transferKeyInArray(transfer,item,jsonTransfer);
      }else if(base.isObject(item)){
        newArray[index]=transferKeyInObj(transfer,item,jsonTransfer);
      }else if(base.isJSON(item) && jsonTransfer){
        newArray[index]=JSON.stringify(transferKeyInJSON(transfer,item,jsonTransfer));
      }else{
        newArray[index]=item;
      }
    });
    return newArray;
  }

  /**
   * 按照给定的规则转换原json字符串中的key的格式
   * @param {Function} transfer
   * @param {String} json
   */
  function transferKeyInJSON(transfer,json){
    var jsonObj=JSON.parse(json);
    if(base.isArray(jsonObj)){
      return transferKeyInArray(transfer,jsonObj,true);
    }else if(base.isObject(jsonObj)){
      return transferKeyInObj(transfer,jsonObj,true);
    }else if(base.isJSON(jsonObj)){
      return transferKeyInJSON(transfer,jsonObj,true)
    }

  }

  /**
   * 去除对象中某些属性值的前后空格
   * @param {object} obj 原对象
   * @param {array} keys 要修改的key，支持以.分隔的串联属性如app.id
   * @returns {*} 处理后的对象
   */
  function trimSome(obj,keys){
    var objClone=JSON.parse(JSON.stringify(obj));
    keys.map(function(key){
      if(/\./.test(key)){
        var target=objClone;
        keys=key.split('.');
        keys.map(function(key,index,arr){
          if(index===arr.length-1){
            target[key]=target[key].replace(/(^\s*|\s*$)/g,'')
          }else{
            target=target[key];
          }
        });
      }else{
        objClone[key]=objClone[key].replace(/(^\s*|\s*$)/g,'');
      }
    });
    return objClone;
  }


  return {
    /**
     * 将原对象中的key的首字母大写
     * @param {?Object} obj 原对象
     * @returns {?Object} 转换后的对象
     */
    upperKey:function(obj,jsonTransfer){
      return transferKeyInObj(base.upperCaseFirst,obj,jsonTransfer);
    },
    /**
     * 将原对象中的key的首字母小写
     * @param {?Object} obj 原对象
     * @returns {?Object} 转换后的对象
     */
    lowerKey:function(obj,jsonTransfer){
      return transferKeyInObj(base.lowerCaseFirst,obj,jsonTransfer);
    },
    trimSome:trimSome
  }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(7);

	var IS_SESSION_STORAGE_AVAILABLE = base.isStorageAvailable( 'sessionStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			return sessionStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {
			
			sessionStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_mixins_validator_js__ = __webpack_require__(35);

/* harmony default export */ __webpack_exports__["default"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__src_js_mixins_validator_js__["a" /* default */]
};

/***/ })
/******/ ]);