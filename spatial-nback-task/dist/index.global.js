var jsPsychTimelineSpatialNbackTask = (function (exports) {
  'use strict';

  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../../../node_modules/auto-bind/index.js
  var require_auto_bind = __commonJS({
    "../../../node_modules/auto-bind/index.js"(exports, module) {
      var getAllProperties = (object) => {
        const properties = /* @__PURE__ */ new Set();
        do {
          for (const key of Reflect.ownKeys(object)) {
            properties.add([object, key]);
          }
        } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
        return properties;
      };
      module.exports = (self2, { include, exclude } = {}) => {
        const filter = (key) => {
          const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
          if (include) {
            return include.some(match);
          }
          if (exclude) {
            return !exclude.some(match);
          }
          return true;
        };
        for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
          if (key === "constructor" || !filter(key)) {
            continue;
          }
          const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
          if (descriptor && typeof descriptor.value === "function") {
            self2[key] = self2[key].bind(self2);
          }
        }
        return self2;
      };
    }
  });

  // ../../../node_modules/seedrandom/lib/alea.js
  var require_alea = __commonJS({
    "../../../node_modules/seedrandom/lib/alea.js"(exports, module) {
      (function(global, module2, define2) {
        function Alea(seed) {
          var me = this, mash = Mash();
          me.next = function() {
            var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
          };
          me.c = 1;
          me.s0 = mash(" ");
          me.s1 = mash(" ");
          me.s2 = mash(" ");
          me.s0 -= mash(seed);
          if (me.s0 < 0) {
            me.s0 += 1;
          }
          me.s1 -= mash(seed);
          if (me.s1 < 0) {
            me.s1 += 1;
          }
          me.s2 -= mash(seed);
          if (me.s2 < 0) {
            me.s2 += 1;
          }
          mash = null;
        }
        function copy(f, t) {
          t.c = f.c;
          t.s0 = f.s0;
          t.s1 = f.s1;
          t.s2 = f.s2;
          return t;
        }
        function impl(seed, opts) {
          var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
          prng.int32 = function() {
            return xg.next() * 4294967296 | 0;
          };
          prng.double = function() {
            return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
          };
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        function Mash() {
          var n = 4022871197;
          var mash = function(data) {
            data = String(data);
            for (var i = 0; i < data.length; i++) {
              n += data.charCodeAt(i);
              var h = 0.02519603282416938 * n;
              n = h >>> 0;
              h -= n;
              h *= n;
              n = h >>> 0;
              h -= n;
              n += h * 4294967296;
            }
            return (n >>> 0) * 23283064365386963e-26;
          };
          return mash;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.alea = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/lib/xor128.js
  var require_xor128 = __commonJS({
    "../../../node_modules/seedrandom/lib/xor128.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.x = 0;
          me.y = 0;
          me.z = 0;
          me.w = 0;
          me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
          };
          if (seed === (seed | 0)) {
            me.x = seed;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 64; k++) {
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
          }
        }
        function copy(f, t) {
          t.x = f.x;
          t.y = f.y;
          t.z = f.z;
          t.w = f.w;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xor128 = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/lib/xorwow.js
  var require_xorwow = __commonJS({
    "../../../node_modules/seedrandom/lib/xorwow.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
          };
          me.x = 0;
          me.y = 0;
          me.z = 0;
          me.w = 0;
          me.v = 0;
          if (seed === (seed | 0)) {
            me.x = seed;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 64; k++) {
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) {
              me.d = me.x << 10 ^ me.x >>> 4;
            }
            me.next();
          }
        }
        function copy(f, t) {
          t.x = f.x;
          t.y = f.y;
          t.z = f.z;
          t.w = f.w;
          t.v = f.v;
          t.d = f.d;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xorwow = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/lib/xorshift7.js
  var require_xorshift7 = __commonJS({
    "../../../node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this;
          me.next = function() {
            var X = me.x, i = me.i, t, v;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me.i = i + 1 & 7;
            return v;
          };
          function init(me2, seed2) {
            var j, X = [];
            if (seed2 === (seed2 | 0)) {
              X[0] = seed2;
            } else {
              seed2 = "" + seed2;
              for (j = 0; j < seed2.length; ++j) {
                X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
              }
            }
            while (X.length < 8)
              X.push(0);
            for (j = 0; j < 8 && X[j] === 0; ++j)
              ;
            if (j == 8)
              X[7] = -1;
            else
              X[j];
            me2.x = X;
            me2.i = 0;
            for (j = 256; j > 0; --j) {
              me2.next();
            }
          }
          init(me, seed);
        }
        function copy(f, t) {
          t.x = f.x.slice();
          t.i = f.i;
          return t;
        }
        function impl(seed, opts) {
          if (seed == null)
            seed = +/* @__PURE__ */ new Date();
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (state.x)
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xorshift7 = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/lib/xor4096.js
  var require_xor4096 = __commonJS({
    "../../../node_modules/seedrandom/lib/xor4096.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this;
          me.next = function() {
            var w = me.w, X = me.X, i = me.i, t, v;
            me.w = w = w + 1640531527 | 0;
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            v = X[i] = v ^ t;
            me.i = i;
            return v + (w ^ w >>> 16) | 0;
          };
          function init(me2, seed2) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed2 === (seed2 | 0)) {
              v = seed2;
              seed2 = null;
            } else {
              seed2 = seed2 + "\0";
              v = 0;
              limit = Math.max(limit, seed2.length);
            }
            for (i = 0, j = -32; j < limit; ++j) {
              if (seed2)
                v ^= seed2.charCodeAt((j + 32) % seed2.length);
              if (j === 0)
                w = v;
              v ^= v << 10;
              v ^= v >>> 15;
              v ^= v << 4;
              v ^= v >>> 13;
              if (j >= 0) {
                w = w + 1640531527 | 0;
                t = X[j & 127] ^= v + w;
                i = 0 == t ? i + 1 : 0;
              }
            }
            if (i >= 128) {
              X[(seed2 && seed2.length || 0) & 127] = -1;
            }
            i = 127;
            for (j = 4 * 128; j > 0; --j) {
              v = X[i + 34 & 127];
              t = X[i = i + 1 & 127];
              v ^= v << 13;
              t ^= t << 17;
              v ^= v >>> 15;
              t ^= t >>> 12;
              X[i] = v ^ t;
            }
            me2.w = w;
            me2.X = X;
            me2.i = i;
          }
          init(me, seed);
        }
        function copy(f, t) {
          t.i = f.i;
          t.w = f.w;
          t.X = f.X.slice();
          return t;
        }
        function impl(seed, opts) {
          if (seed == null)
            seed = +/* @__PURE__ */ new Date();
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (state.X)
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xor4096 = impl;
        }
      })(
        exports,
        // window object or global
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/lib/tychei.js
  var require_tychei = __commonJS({
    "../../../node_modules/seedrandom/lib/tychei.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
          };
          me.a = 0;
          me.b = 0;
          me.c = 2654435769 | 0;
          me.d = 1367130551;
          if (seed === Math.floor(seed)) {
            me.a = seed / 4294967296 | 0;
            me.b = seed | 0;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 20; k++) {
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
          }
        }
        function copy(f, t) {
          t.a = f.a;
          t.b = f.b;
          t.c = f.c;
          t.d = f.d;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.tychei = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // ../../../node_modules/seedrandom/seedrandom.js
  var require_seedrandom = __commonJS({
    "../../../node_modules/seedrandom/seedrandom.js"(exports, module) {
      (function(global, pool, math) {
        var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
        function seedrandom2(seed, options, callback) {
          var key = [];
          options = options == true ? { entropy: true } : options || {};
          var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
            3
          ), key);
          var arc4 = new ARC4(key);
          var prng = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0;
            while (n < significance) {
              n = (n + x) * width;
              d *= width;
              x = arc4.g(1);
            }
            while (n >= overflow) {
              n /= 2;
              d /= 2;
              x >>>= 1;
            }
            return (n + x) / d;
          };
          prng.int32 = function() {
            return arc4.g(4) | 0;
          };
          prng.quick = function() {
            return arc4.g(4) / 4294967296;
          };
          prng.double = prng;
          mixkey(tostring(arc4.S), pool);
          return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
            if (state) {
              if (state.S) {
                copy(state, arc4);
              }
              prng2.state = function() {
                return copy(arc4, {});
              };
            }
            if (is_math_call) {
              math[rngname] = prng2;
              return seed2;
            } else
              return prng2;
          })(
            prng,
            shortseed,
            "global" in options ? options.global : this == math,
            options.state
          );
        }
        function ARC4(key) {
          var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
          if (!keylen) {
            key = [keylen++];
          }
          while (i < width) {
            s[i] = i++;
          }
          for (i = 0; i < width; i++) {
            s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
            s[j] = t;
          }
          (me.g = function(count) {
            var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
            while (count--) {
              t2 = s2[i2 = mask & i2 + 1];
              r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
            }
            me.i = i2;
            me.j = j2;
            return r;
          })(width);
        }
        function copy(f, t) {
          t.i = f.i;
          t.j = f.j;
          t.S = f.S.slice();
          return t;
        }
        function flatten(obj, depth) {
          var result = [], typ = typeof obj, prop;
          if (depth && typ == "object") {
            for (prop in obj) {
              try {
                result.push(flatten(obj[prop], depth - 1));
              } catch (e) {
              }
            }
          }
          return result.length ? result : typ == "string" ? obj : obj + "\0";
        }
        function mixkey(seed, key) {
          var stringseed = seed + "", smear, j = 0;
          while (j < stringseed.length) {
            key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
          }
          return tostring(key);
        }
        function autoseed() {
          try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) {
              out = out(width);
            } else {
              out = new Uint8Array(width);
              (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
          } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
          }
        }
        function tostring(a) {
          return String.fromCharCode.apply(0, a);
        }
        mixkey(math.random(), pool);
        if (typeof module == "object" && module.exports) {
          module.exports = seedrandom2;
          try {
            nodecrypto = __require("crypto");
          } catch (ex) {
          }
        } else if (typeof define == "function" && define.amd) {
          define(function() {
            return seedrandom2;
          });
        } else {
          math["seed" + rngname] = seedrandom2;
        }
      })(
        // global: `self` in browsers (including strict mode and web workers),
        // otherwise `this` in Node and other environments
        typeof self !== "undefined" ? self : exports,
        [],
        // pool: entropy pool starts empty
        Math
        // math: package containing random, pow, and seedrandom
      );
    }
  });

  // ../../../node_modules/seedrandom/index.js
  var require_seedrandom2 = __commonJS({
    "../../../node_modules/seedrandom/index.js"(exports, module) {
      var alea = require_alea();
      var xor128 = require_xor128();
      var xorwow = require_xorwow();
      var xorshift7 = require_xorshift7();
      var xor4096 = require_xor4096();
      var tychei = require_tychei();
      var sr = require_seedrandom();
      sr.alea = alea;
      sr.xor128 = xor128;
      sr.xorwow = xorwow;
      sr.xorshift7 = xorshift7;
      sr.xor4096 = xor4096;
      sr.tychei = tychei;
      module.exports = sr;
    }
  });

  // ../../../node_modules/random-words/index.js
  var require_random_words = __commonJS({
    "../../../node_modules/random-words/index.js"(exports, module) {
      var seedrandom2 = require_seedrandom2();
      var wordList = [
        // Borrowed from xkcd password generator which borrowed it from wherever
        "ability",
        "able",
        "aboard",
        "about",
        "above",
        "accept",
        "accident",
        "according",
        "account",
        "accurate",
        "acres",
        "across",
        "act",
        "action",
        "active",
        "activity",
        "actual",
        "actually",
        "add",
        "addition",
        "additional",
        "adjective",
        "adult",
        "adventure",
        "advice",
        "affect",
        "afraid",
        "after",
        "afternoon",
        "again",
        "against",
        "age",
        "ago",
        "agree",
        "ahead",
        "aid",
        "air",
        "airplane",
        "alike",
        "alive",
        "all",
        "allow",
        "almost",
        "alone",
        "along",
        "aloud",
        "alphabet",
        "already",
        "also",
        "although",
        "am",
        "among",
        "amount",
        "ancient",
        "angle",
        "angry",
        "animal",
        "announced",
        "another",
        "answer",
        "ants",
        "any",
        "anybody",
        "anyone",
        "anything",
        "anyway",
        "anywhere",
        "apart",
        "apartment",
        "appearance",
        "apple",
        "applied",
        "appropriate",
        "are",
        "area",
        "arm",
        "army",
        "around",
        "arrange",
        "arrangement",
        "arrive",
        "arrow",
        "art",
        "article",
        "as",
        "aside",
        "ask",
        "asleep",
        "at",
        "ate",
        "atmosphere",
        "atom",
        "atomic",
        "attached",
        "attack",
        "attempt",
        "attention",
        "audience",
        "author",
        "automobile",
        "available",
        "average",
        "avoid",
        "aware",
        "away",
        "baby",
        "back",
        "bad",
        "badly",
        "bag",
        "balance",
        "ball",
        "balloon",
        "band",
        "bank",
        "bar",
        "bare",
        "bark",
        "barn",
        "base",
        "baseball",
        "basic",
        "basis",
        "basket",
        "bat",
        "battle",
        "be",
        "bean",
        "bear",
        "beat",
        "beautiful",
        "beauty",
        "became",
        "because",
        "become",
        "becoming",
        "bee",
        "been",
        "before",
        "began",
        "beginning",
        "begun",
        "behavior",
        "behind",
        "being",
        "believed",
        "bell",
        "belong",
        "below",
        "belt",
        "bend",
        "beneath",
        "bent",
        "beside",
        "best",
        "bet",
        "better",
        "between",
        "beyond",
        "bicycle",
        "bigger",
        "biggest",
        "bill",
        "birds",
        "birth",
        "birthday",
        "bit",
        "bite",
        "black",
        "blank",
        "blanket",
        "blew",
        "blind",
        "block",
        "blood",
        "blow",
        "blue",
        "board",
        "boat",
        "body",
        "bone",
        "book",
        "border",
        "born",
        "both",
        "bottle",
        "bottom",
        "bound",
        "bow",
        "bowl",
        "box",
        "boy",
        "brain",
        "branch",
        "brass",
        "brave",
        "bread",
        "break",
        "breakfast",
        "breath",
        "breathe",
        "breathing",
        "breeze",
        "brick",
        "bridge",
        "brief",
        "bright",
        "bring",
        "broad",
        "broke",
        "broken",
        "brother",
        "brought",
        "brown",
        "brush",
        "buffalo",
        "build",
        "building",
        "built",
        "buried",
        "burn",
        "burst",
        "bus",
        "bush",
        "business",
        "busy",
        "but",
        "butter",
        "buy",
        "by",
        "cabin",
        "cage",
        "cake",
        "call",
        "calm",
        "came",
        "camera",
        "camp",
        "can",
        "canal",
        "cannot",
        "cap",
        "capital",
        "captain",
        "captured",
        "car",
        "carbon",
        "card",
        "care",
        "careful",
        "carefully",
        "carried",
        "carry",
        "case",
        "cast",
        "castle",
        "cat",
        "catch",
        "cattle",
        "caught",
        "cause",
        "cave",
        "cell",
        "cent",
        "center",
        "central",
        "century",
        "certain",
        "certainly",
        "chain",
        "chair",
        "chamber",
        "chance",
        "change",
        "changing",
        "chapter",
        "character",
        "characteristic",
        "charge",
        "chart",
        "check",
        "cheese",
        "chemical",
        "chest",
        "chicken",
        "chief",
        "child",
        "children",
        "choice",
        "choose",
        "chose",
        "chosen",
        "church",
        "circle",
        "circus",
        "citizen",
        "city",
        "class",
        "classroom",
        "claws",
        "clay",
        "clean",
        "clear",
        "clearly",
        "climate",
        "climb",
        "clock",
        "close",
        "closely",
        "closer",
        "cloth",
        "clothes",
        "clothing",
        "cloud",
        "club",
        "coach",
        "coal",
        "coast",
        "coat",
        "coffee",
        "cold",
        "collect",
        "college",
        "colony",
        "color",
        "column",
        "combination",
        "combine",
        "come",
        "comfortable",
        "coming",
        "command",
        "common",
        "community",
        "company",
        "compare",
        "compass",
        "complete",
        "completely",
        "complex",
        "composed",
        "composition",
        "compound",
        "concerned",
        "condition",
        "congress",
        "connected",
        "consider",
        "consist",
        "consonant",
        "constantly",
        "construction",
        "contain",
        "continent",
        "continued",
        "contrast",
        "control",
        "conversation",
        "cook",
        "cookies",
        "cool",
        "copper",
        "copy",
        "corn",
        "corner",
        "correct",
        "correctly",
        "cost",
        "cotton",
        "could",
        "count",
        "country",
        "couple",
        "courage",
        "course",
        "court",
        "cover",
        "cow",
        "cowboy",
        "crack",
        "cream",
        "create",
        "creature",
        "crew",
        "crop",
        "cross",
        "crowd",
        "cry",
        "cup",
        "curious",
        "current",
        "curve",
        "customs",
        "cut",
        "cutting",
        "daily",
        "damage",
        "dance",
        "danger",
        "dangerous",
        "dark",
        "darkness",
        "date",
        "daughter",
        "dawn",
        "day",
        "dead",
        "deal",
        "dear",
        "death",
        "decide",
        "declared",
        "deep",
        "deeply",
        "deer",
        "definition",
        "degree",
        "depend",
        "depth",
        "describe",
        "desert",
        "design",
        "desk",
        "detail",
        "determine",
        "develop",
        "development",
        "diagram",
        "diameter",
        "did",
        "die",
        "differ",
        "difference",
        "different",
        "difficult",
        "difficulty",
        "dig",
        "dinner",
        "direct",
        "direction",
        "directly",
        "dirt",
        "dirty",
        "disappear",
        "discover",
        "discovery",
        "discuss",
        "discussion",
        "disease",
        "dish",
        "distance",
        "distant",
        "divide",
        "division",
        "do",
        "doctor",
        "does",
        "dog",
        "doing",
        "doll",
        "dollar",
        "done",
        "donkey",
        "door",
        "dot",
        "double",
        "doubt",
        "down",
        "dozen",
        "draw",
        "drawn",
        "dream",
        "dress",
        "drew",
        "dried",
        "drink",
        "drive",
        "driven",
        "driver",
        "driving",
        "drop",
        "dropped",
        "drove",
        "dry",
        "duck",
        "due",
        "dug",
        "dull",
        "during",
        "dust",
        "duty",
        "each",
        "eager",
        "ear",
        "earlier",
        "early",
        "earn",
        "earth",
        "easier",
        "easily",
        "east",
        "easy",
        "eat",
        "eaten",
        "edge",
        "education",
        "effect",
        "effort",
        "egg",
        "eight",
        "either",
        "electric",
        "electricity",
        "element",
        "elephant",
        "eleven",
        "else",
        "empty",
        "end",
        "enemy",
        "energy",
        "engine",
        "engineer",
        "enjoy",
        "enough",
        "enter",
        "entire",
        "entirely",
        "environment",
        "equal",
        "equally",
        "equator",
        "equipment",
        "escape",
        "especially",
        "essential",
        "establish",
        "even",
        "evening",
        "event",
        "eventually",
        "ever",
        "every",
        "everybody",
        "everyone",
        "everything",
        "everywhere",
        "evidence",
        "exact",
        "exactly",
        "examine",
        "example",
        "excellent",
        "except",
        "exchange",
        "excited",
        "excitement",
        "exciting",
        "exclaimed",
        "exercise",
        "exist",
        "expect",
        "experience",
        "experiment",
        "explain",
        "explanation",
        "explore",
        "express",
        "expression",
        "extra",
        "eye",
        "face",
        "facing",
        "fact",
        "factor",
        "factory",
        "failed",
        "fair",
        "fairly",
        "fall",
        "fallen",
        "familiar",
        "family",
        "famous",
        "far",
        "farm",
        "farmer",
        "farther",
        "fast",
        "fastened",
        "faster",
        "fat",
        "father",
        "favorite",
        "fear",
        "feathers",
        "feature",
        "fed",
        "feed",
        "feel",
        "feet",
        "fell",
        "fellow",
        "felt",
        "fence",
        "few",
        "fewer",
        "field",
        "fierce",
        "fifteen",
        "fifth",
        "fifty",
        "fight",
        "fighting",
        "figure",
        "fill",
        "film",
        "final",
        "finally",
        "find",
        "fine",
        "finest",
        "finger",
        "finish",
        "fire",
        "fireplace",
        "firm",
        "first",
        "fish",
        "five",
        "fix",
        "flag",
        "flame",
        "flat",
        "flew",
        "flies",
        "flight",
        "floating",
        "floor",
        "flow",
        "flower",
        "fly",
        "fog",
        "folks",
        "follow",
        "food",
        "foot",
        "football",
        "for",
        "force",
        "foreign",
        "forest",
        "forget",
        "forgot",
        "forgotten",
        "form",
        "former",
        "fort",
        "forth",
        "forty",
        "forward",
        "fought",
        "found",
        "four",
        "fourth",
        "fox",
        "frame",
        "free",
        "freedom",
        "frequently",
        "fresh",
        "friend",
        "friendly",
        "frighten",
        "frog",
        "from",
        "front",
        "frozen",
        "fruit",
        "fuel",
        "full",
        "fully",
        "fun",
        "function",
        "funny",
        "fur",
        "furniture",
        "further",
        "future",
        "gain",
        "game",
        "garage",
        "garden",
        "gas",
        "gasoline",
        "gate",
        "gather",
        "gave",
        "general",
        "generally",
        "gentle",
        "gently",
        "get",
        "getting",
        "giant",
        "gift",
        "girl",
        "give",
        "given",
        "giving",
        "glad",
        "glass",
        "globe",
        "go",
        "goes",
        "gold",
        "golden",
        "gone",
        "good",
        "goose",
        "got",
        "government",
        "grabbed",
        "grade",
        "gradually",
        "grain",
        "grandfather",
        "grandmother",
        "graph",
        "grass",
        "gravity",
        "gray",
        "great",
        "greater",
        "greatest",
        "greatly",
        "green",
        "grew",
        "ground",
        "group",
        "grow",
        "grown",
        "growth",
        "guard",
        "guess",
        "guide",
        "gulf",
        "gun",
        "habit",
        "had",
        "hair",
        "half",
        "halfway",
        "hall",
        "hand",
        "handle",
        "handsome",
        "hang",
        "happen",
        "happened",
        "happily",
        "happy",
        "harbor",
        "hard",
        "harder",
        "hardly",
        "has",
        "hat",
        "have",
        "having",
        "hay",
        "he",
        "headed",
        "heading",
        "health",
        "heard",
        "hearing",
        "heart",
        "heat",
        "heavy",
        "height",
        "held",
        "hello",
        "help",
        "helpful",
        "her",
        "herd",
        "here",
        "herself",
        "hidden",
        "hide",
        "high",
        "higher",
        "highest",
        "highway",
        "hill",
        "him",
        "himself",
        "his",
        "history",
        "hit",
        "hold",
        "hole",
        "hollow",
        "home",
        "honor",
        "hope",
        "horn",
        "horse",
        "hospital",
        "hot",
        "hour",
        "house",
        "how",
        "however",
        "huge",
        "human",
        "hundred",
        "hung",
        "hungry",
        "hunt",
        "hunter",
        "hurried",
        "hurry",
        "hurt",
        "husband",
        "ice",
        "idea",
        "identity",
        "if",
        "ill",
        "image",
        "imagine",
        "immediately",
        "importance",
        "important",
        "impossible",
        "improve",
        "in",
        "inch",
        "include",
        "including",
        "income",
        "increase",
        "indeed",
        "independent",
        "indicate",
        "individual",
        "industrial",
        "industry",
        "influence",
        "information",
        "inside",
        "instance",
        "instant",
        "instead",
        "instrument",
        "interest",
        "interior",
        "into",
        "introduced",
        "invented",
        "involved",
        "iron",
        "is",
        "island",
        "it",
        "its",
        "itself",
        "jack",
        "jar",
        "jet",
        "job",
        "join",
        "joined",
        "journey",
        "joy",
        "judge",
        "jump",
        "jungle",
        "just",
        "keep",
        "kept",
        "key",
        "kids",
        "kill",
        "kind",
        "kitchen",
        "knew",
        "knife",
        "know",
        "knowledge",
        "known",
        "label",
        "labor",
        "lack",
        "lady",
        "laid",
        "lake",
        "lamp",
        "land",
        "language",
        "large",
        "larger",
        "largest",
        "last",
        "late",
        "later",
        "laugh",
        "law",
        "lay",
        "layers",
        "lead",
        "leader",
        "leaf",
        "learn",
        "least",
        "leather",
        "leave",
        "leaving",
        "led",
        "left",
        "leg",
        "length",
        "lesson",
        "let",
        "letter",
        "level",
        "library",
        "lie",
        "life",
        "lift",
        "light",
        "like",
        "likely",
        "limited",
        "line",
        "lion",
        "lips",
        "liquid",
        "list",
        "listen",
        "little",
        "live",
        "living",
        "load",
        "local",
        "locate",
        "location",
        "log",
        "lonely",
        "long",
        "longer",
        "look",
        "loose",
        "lose",
        "loss",
        "lost",
        "lot",
        "loud",
        "love",
        "lovely",
        "low",
        "lower",
        "luck",
        "lucky",
        "lunch",
        "lungs",
        "lying",
        "machine",
        "machinery",
        "mad",
        "made",
        "magic",
        "magnet",
        "mail",
        "main",
        "mainly",
        "major",
        "make",
        "making",
        "man",
        "managed",
        "manner",
        "manufacturing",
        "many",
        "map",
        "mark",
        "market",
        "married",
        "mass",
        "massage",
        "master",
        "material",
        "mathematics",
        "matter",
        "may",
        "maybe",
        "me",
        "meal",
        "mean",
        "means",
        "meant",
        "measure",
        "meat",
        "medicine",
        "meet",
        "melted",
        "member",
        "memory",
        "men",
        "mental",
        "merely",
        "met",
        "metal",
        "method",
        "mice",
        "middle",
        "might",
        "mighty",
        "mile",
        "military",
        "milk",
        "mill",
        "mind",
        "mine",
        "minerals",
        "minute",
        "mirror",
        "missing",
        "mission",
        "mistake",
        "mix",
        "mixture",
        "model",
        "modern",
        "molecular",
        "moment",
        "money",
        "monkey",
        "month",
        "mood",
        "moon",
        "more",
        "morning",
        "most",
        "mostly",
        "mother",
        "motion",
        "motor",
        "mountain",
        "mouse",
        "mouth",
        "move",
        "movement",
        "movie",
        "moving",
        "mud",
        "muscle",
        "music",
        "musical",
        "must",
        "my",
        "myself",
        "mysterious",
        "nails",
        "name",
        "nation",
        "national",
        "native",
        "natural",
        "naturally",
        "nature",
        "near",
        "nearby",
        "nearer",
        "nearest",
        "nearly",
        "necessary",
        "neck",
        "needed",
        "needle",
        "needs",
        "negative",
        "neighbor",
        "neighborhood",
        "nervous",
        "nest",
        "never",
        "new",
        "news",
        "newspaper",
        "next",
        "nice",
        "night",
        "nine",
        "no",
        "nobody",
        "nodded",
        "noise",
        "none",
        "noon",
        "nor",
        "north",
        "nose",
        "not",
        "note",
        "noted",
        "nothing",
        "notice",
        "noun",
        "now",
        "number",
        "numeral",
        "nuts",
        "object",
        "observe",
        "obtain",
        "occasionally",
        "occur",
        "ocean",
        "of",
        "off",
        "offer",
        "office",
        "officer",
        "official",
        "oil",
        "old",
        "older",
        "oldest",
        "on",
        "once",
        "one",
        "only",
        "onto",
        "open",
        "operation",
        "opinion",
        "opportunity",
        "opposite",
        "or",
        "orange",
        "orbit",
        "order",
        "ordinary",
        "organization",
        "organized",
        "origin",
        "original",
        "other",
        "ought",
        "our",
        "ourselves",
        "out",
        "outer",
        "outline",
        "outside",
        "over",
        "own",
        "owner",
        "oxygen",
        "pack",
        "package",
        "page",
        "paid",
        "pain",
        "paint",
        "pair",
        "palace",
        "pale",
        "pan",
        "paper",
        "paragraph",
        "parallel",
        "parent",
        "park",
        "part",
        "particles",
        "particular",
        "particularly",
        "partly",
        "parts",
        "party",
        "pass",
        "passage",
        "past",
        "path",
        "pattern",
        "pay",
        "peace",
        "pen",
        "pencil",
        "people",
        "per",
        "percent",
        "perfect",
        "perfectly",
        "perhaps",
        "period",
        "person",
        "personal",
        "pet",
        "phrase",
        "physical",
        "piano",
        "pick",
        "picture",
        "pictured",
        "pie",
        "piece",
        "pig",
        "pile",
        "pilot",
        "pine",
        "pink",
        "pipe",
        "pitch",
        "place",
        "plain",
        "plan",
        "plane",
        "planet",
        "planned",
        "planning",
        "plant",
        "plastic",
        "plate",
        "plates",
        "play",
        "pleasant",
        "please",
        "pleasure",
        "plenty",
        "plural",
        "plus",
        "pocket",
        "poem",
        "poet",
        "poetry",
        "point",
        "pole",
        "police",
        "policeman",
        "political",
        "pond",
        "pony",
        "pool",
        "poor",
        "popular",
        "population",
        "porch",
        "port",
        "position",
        "positive",
        "possible",
        "possibly",
        "post",
        "pot",
        "potatoes",
        "pound",
        "pour",
        "powder",
        "power",
        "powerful",
        "practical",
        "practice",
        "prepare",
        "present",
        "president",
        "press",
        "pressure",
        "pretty",
        "prevent",
        "previous",
        "price",
        "pride",
        "primitive",
        "principal",
        "principle",
        "printed",
        "private",
        "prize",
        "probably",
        "problem",
        "process",
        "produce",
        "product",
        "production",
        "program",
        "progress",
        "promised",
        "proper",
        "properly",
        "property",
        "protection",
        "proud",
        "prove",
        "provide",
        "public",
        "pull",
        "pupil",
        "pure",
        "purple",
        "purpose",
        "push",
        "put",
        "putting",
        "quarter",
        "queen",
        "question",
        "quick",
        "quickly",
        "quiet",
        "quietly",
        "quite",
        "rabbit",
        "race",
        "radio",
        "railroad",
        "rain",
        "raise",
        "ran",
        "ranch",
        "range",
        "rapidly",
        "rate",
        "rather",
        "raw",
        "rays",
        "reach",
        "read",
        "reader",
        "ready",
        "real",
        "realize",
        "rear",
        "reason",
        "recall",
        "receive",
        "recent",
        "recently",
        "recognize",
        "record",
        "red",
        "refer",
        "refused",
        "region",
        "regular",
        "related",
        "relationship",
        "religious",
        "remain",
        "remarkable",
        "remember",
        "remove",
        "repeat",
        "replace",
        "replied",
        "report",
        "represent",
        "require",
        "research",
        "respect",
        "rest",
        "result",
        "return",
        "review",
        "rhyme",
        "rhythm",
        "rice",
        "rich",
        "ride",
        "riding",
        "right",
        "ring",
        "rise",
        "rising",
        "river",
        "road",
        "roar",
        "rock",
        "rocket",
        "rocky",
        "rod",
        "roll",
        "roof",
        "room",
        "root",
        "rope",
        "rose",
        "rough",
        "round",
        "route",
        "row",
        "rubbed",
        "rubber",
        "rule",
        "ruler",
        "run",
        "running",
        "rush",
        "sad",
        "saddle",
        "safe",
        "safety",
        "said",
        "sail",
        "sale",
        "salmon",
        "salt",
        "same",
        "sand",
        "sang",
        "sat",
        "satellites",
        "satisfied",
        "save",
        "saved",
        "saw",
        "say",
        "scale",
        "scared",
        "scene",
        "school",
        "science",
        "scientific",
        "scientist",
        "score",
        "screen",
        "sea",
        "search",
        "season",
        "seat",
        "second",
        "secret",
        "section",
        "see",
        "seed",
        "seeing",
        "seems",
        "seen",
        "seldom",
        "select",
        "selection",
        "sell",
        "send",
        "sense",
        "sent",
        "sentence",
        "separate",
        "series",
        "serious",
        "serve",
        "service",
        "sets",
        "setting",
        "settle",
        "settlers",
        "seven",
        "several",
        "shade",
        "shadow",
        "shake",
        "shaking",
        "shall",
        "shallow",
        "shape",
        "share",
        "sharp",
        "she",
        "sheep",
        "sheet",
        "shelf",
        "shells",
        "shelter",
        "shine",
        "shinning",
        "ship",
        "shirt",
        "shoe",
        "shoot",
        "shop",
        "shore",
        "short",
        "shorter",
        "shot",
        "should",
        "shoulder",
        "shout",
        "show",
        "shown",
        "shut",
        "sick",
        "sides",
        "sight",
        "sign",
        "signal",
        "silence",
        "silent",
        "silk",
        "silly",
        "silver",
        "similar",
        "simple",
        "simplest",
        "simply",
        "since",
        "sing",
        "single",
        "sink",
        "sister",
        "sit",
        "sitting",
        "situation",
        "six",
        "size",
        "skill",
        "skin",
        "sky",
        "slabs",
        "slave",
        "sleep",
        "slept",
        "slide",
        "slight",
        "slightly",
        "slip",
        "slipped",
        "slope",
        "slow",
        "slowly",
        "small",
        "smaller",
        "smallest",
        "smell",
        "smile",
        "smoke",
        "smooth",
        "snake",
        "snow",
        "so",
        "soap",
        "social",
        "society",
        "soft",
        "softly",
        "soil",
        "solar",
        "sold",
        "soldier",
        "solid",
        "solution",
        "solve",
        "some",
        "somebody",
        "somehow",
        "someone",
        "something",
        "sometime",
        "somewhere",
        "son",
        "song",
        "soon",
        "sort",
        "sound",
        "source",
        "south",
        "southern",
        "space",
        "speak",
        "special",
        "species",
        "specific",
        "speech",
        "speed",
        "spell",
        "spend",
        "spent",
        "spider",
        "spin",
        "spirit",
        "spite",
        "split",
        "spoken",
        "sport",
        "spread",
        "spring",
        "square",
        "stage",
        "stairs",
        "stand",
        "standard",
        "star",
        "stared",
        "start",
        "state",
        "statement",
        "station",
        "stay",
        "steady",
        "steam",
        "steel",
        "steep",
        "stems",
        "step",
        "stepped",
        "stick",
        "stiff",
        "still",
        "stock",
        "stomach",
        "stone",
        "stood",
        "stop",
        "stopped",
        "store",
        "storm",
        "story",
        "stove",
        "straight",
        "strange",
        "stranger",
        "straw",
        "stream",
        "street",
        "strength",
        "stretch",
        "strike",
        "string",
        "strip",
        "strong",
        "stronger",
        "struck",
        "structure",
        "struggle",
        "stuck",
        "student",
        "studied",
        "studying",
        "subject",
        "substance",
        "success",
        "successful",
        "such",
        "sudden",
        "suddenly",
        "sugar",
        "suggest",
        "suit",
        "sum",
        "summer",
        "sun",
        "sunlight",
        "supper",
        "supply",
        "support",
        "suppose",
        "sure",
        "surface",
        "surprise",
        "surrounded",
        "swam",
        "sweet",
        "swept",
        "swim",
        "swimming",
        "swing",
        "swung",
        "syllable",
        "symbol",
        "system",
        "table",
        "tail",
        "take",
        "taken",
        "tales",
        "talk",
        "tall",
        "tank",
        "tape",
        "task",
        "taste",
        "taught",
        "tax",
        "tea",
        "teach",
        "teacher",
        "team",
        "tears",
        "teeth",
        "telephone",
        "television",
        "tell",
        "temperature",
        "ten",
        "tent",
        "term",
        "terrible",
        "test",
        "than",
        "thank",
        "that",
        "thee",
        "them",
        "themselves",
        "then",
        "theory",
        "there",
        "therefore",
        "these",
        "they",
        "thick",
        "thin",
        "thing",
        "think",
        "third",
        "thirty",
        "this",
        "those",
        "thou",
        "though",
        "thought",
        "thousand",
        "thread",
        "three",
        "threw",
        "throat",
        "through",
        "throughout",
        "throw",
        "thrown",
        "thumb",
        "thus",
        "thy",
        "tide",
        "tie",
        "tight",
        "tightly",
        "till",
        "time",
        "tin",
        "tiny",
        "tip",
        "tired",
        "title",
        "to",
        "tobacco",
        "today",
        "together",
        "told",
        "tomorrow",
        "tone",
        "tongue",
        "tonight",
        "too",
        "took",
        "tool",
        "top",
        "topic",
        "torn",
        "total",
        "touch",
        "toward",
        "tower",
        "town",
        "toy",
        "trace",
        "track",
        "trade",
        "traffic",
        "trail",
        "train",
        "transportation",
        "trap",
        "travel",
        "treated",
        "tree",
        "triangle",
        "tribe",
        "trick",
        "tried",
        "trip",
        "troops",
        "tropical",
        "trouble",
        "truck",
        "trunk",
        "truth",
        "try",
        "tube",
        "tune",
        "turn",
        "twelve",
        "twenty",
        "twice",
        "two",
        "type",
        "typical",
        "uncle",
        "under",
        "underline",
        "understanding",
        "unhappy",
        "union",
        "unit",
        "universe",
        "unknown",
        "unless",
        "until",
        "unusual",
        "up",
        "upon",
        "upper",
        "upward",
        "us",
        "use",
        "useful",
        "using",
        "usual",
        "usually",
        "valley",
        "valuable",
        "value",
        "vapor",
        "variety",
        "various",
        "vast",
        "vegetable",
        "verb",
        "vertical",
        "very",
        "vessels",
        "victory",
        "view",
        "village",
        "visit",
        "visitor",
        "voice",
        "volume",
        "vote",
        "vowel",
        "voyage",
        "wagon",
        "wait",
        "walk",
        "wall",
        "want",
        "war",
        "warm",
        "warn",
        "was",
        "wash",
        "waste",
        "watch",
        "water",
        "wave",
        "way",
        "we",
        "weak",
        "wealth",
        "wear",
        "weather",
        "week",
        "weigh",
        "weight",
        "welcome",
        "well",
        "went",
        "were",
        "west",
        "western",
        "wet",
        "whale",
        "what",
        "whatever",
        "wheat",
        "wheel",
        "when",
        "whenever",
        "where",
        "wherever",
        "whether",
        "which",
        "while",
        "whispered",
        "whistle",
        "white",
        "who",
        "whole",
        "whom",
        "whose",
        "why",
        "wide",
        "widely",
        "wife",
        "wild",
        "will",
        "willing",
        "win",
        "wind",
        "window",
        "wing",
        "winter",
        "wire",
        "wise",
        "wish",
        "with",
        "within",
        "without",
        "wolf",
        "women",
        "won",
        "wonder",
        "wonderful",
        "wood",
        "wooden",
        "wool",
        "word",
        "wore",
        "work",
        "worker",
        "world",
        "worried",
        "worry",
        "worse",
        "worth",
        "would",
        "wrapped",
        "write",
        "writer",
        "writing",
        "written",
        "wrong",
        "wrote",
        "yard",
        "year",
        "yellow",
        "yes",
        "yesterday",
        "yet",
        "you",
        "young",
        "younger",
        "your",
        "yourself",
        "youth",
        "zero",
        "zebra",
        "zipper",
        "zoo",
        "zulu"
      ];
      function words(options) {
        const random = (options == null ? void 0 : options.seed) ? new seedrandom2(options.seed) : null;
        function word() {
          if (options && options.maxLength > 1) {
            return generateWordWithMaxLength();
          } else {
            return generateRandomWord();
          }
        }
        function generateWordWithMaxLength() {
          var rightSize = false;
          var wordUsed;
          while (!rightSize) {
            wordUsed = generateRandomWord();
            if (wordUsed.length <= options.maxLength) {
              rightSize = true;
            }
          }
          return wordUsed;
        }
        function generateRandomWord() {
          return wordList[randInt(wordList.length)];
        }
        function randInt(lessThan) {
          const r = random ? random() : Math.random();
          return Math.floor(r * lessThan);
        }
        if (typeof options === "undefined") {
          return word();
        }
        if (typeof options === "number") {
          options = { exactly: options };
        }
        if (options.exactly) {
          options.min = options.exactly;
          options.max = options.exactly;
        }
        if (typeof options.wordsPerString !== "number") {
          options.wordsPerString = 1;
        }
        if (typeof options.formatter !== "function") {
          options.formatter = (word2) => word2;
        }
        if (typeof options.separator !== "string") {
          options.separator = " ";
        }
        var total = options.min + randInt(options.max + 1 - options.min);
        var results = [];
        var token = "";
        var relativeIndex = 0;
        for (var i = 0; i < total * options.wordsPerString; i++) {
          if (relativeIndex === options.wordsPerString - 1) {
            token += options.formatter(word(), relativeIndex);
          } else {
            token += options.formatter(word(), relativeIndex) + options.separator;
          }
          relativeIndex++;
          if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = "";
            relativeIndex = 0;
          }
        }
        if (typeof options.join === "string") {
          results = results.join(options.join);
        }
        return results;
      }
      module.exports = words;
      words.wordList = wordList;
    }
  });

  // ../../../node_modules/jspsych/dist/index.cjs
  var require_dist = __commonJS({
    "../../../node_modules/jspsych/dist/index.cjs"(exports) {
      var autoBind2 = require_auto_bind();
      var rw2 = require_random_words();
      var seedrandom2 = require_alea();
      var version2 = "8.2.1";
      var ExtensionManager = class {
        constructor(dependencies, extensionsConfiguration) {
          this.dependencies = dependencies;
          this.extensionsConfiguration = extensionsConfiguration;
          this.extensions = Object.fromEntries(
            extensionsConfiguration.map((extension) => [
              ExtensionManager.getExtensionNameByClass(extension.type),
              this.dependencies.instantiateExtension(extension.type)
            ])
          );
        }
        static getExtensionNameByClass(extensionClass) {
          return extensionClass["info"].name;
        }
        getExtensionInstanceByClass(extensionClass) {
          return this.extensions[ExtensionManager.getExtensionNameByClass(extensionClass)];
        }
        initializeExtensions() {
          return __async(this, null, function* () {
            yield Promise.all(
              this.extensionsConfiguration.map(({ type, params = {} }) => {
                this.getExtensionInstanceByClass(type).initialize(params);
                const extensionInfo = type["info"];
                if (!("version" in extensionInfo) && !("data" in extensionInfo)) {
                  console.warn(
                    extensionInfo["name"],
                    "is missing the 'version' and 'data' fields. Please update extension as 'version' and 'data' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details."
                  );
                } else if (!("version" in extensionInfo)) {
                  console.warn(
                    extensionInfo["name"],
                    "is missing the 'version' field. Please update extension as 'version' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details."
                  );
                } else if (!("data" in extensionInfo)) {
                  console.warn(
                    extensionInfo["name"],
                    "is missing the 'data' field. Please update extension as 'data' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details."
                  );
                }
              })
            );
          });
        }
        onStart(trialExtensionsConfiguration = []) {
          var _a;
          for (const { type, params } of trialExtensionsConfiguration) {
            (_a = this.getExtensionInstanceByClass(type)) == null ? void 0 : _a.on_start(params);
          }
        }
        onLoad(trialExtensionsConfiguration = []) {
          var _a;
          for (const { type, params } of trialExtensionsConfiguration) {
            (_a = this.getExtensionInstanceByClass(type)) == null ? void 0 : _a.on_load(params);
          }
        }
        onFinish() {
          return __async(this, arguments, function* (trialExtensionsConfiguration = []) {
            const results = yield Promise.all(
              trialExtensionsConfiguration.map(
                ({ type, params }) => {
                  var _a;
                  return Promise.resolve((_a = this.getExtensionInstanceByClass(type)) == null ? void 0 : _a.on_finish(params));
                }
              )
            );
            const extensionInfos = trialExtensionsConfiguration.length ? {
              extension_type: trialExtensionsConfiguration.map(({ type }) => type["info"].name),
              extension_version: trialExtensionsConfiguration.map(({ type }) => type["info"].version)
            } : {};
            results.unshift(extensionInfos);
            return Object.assign({}, ...results);
          });
        }
      };
      function unique(arr) {
        return [...new Set(arr)];
      }
      function deepCopy(obj) {
        if (!obj)
          return obj;
        let out;
        if (Array.isArray(obj)) {
          out = [];
          for (const x of obj) {
            out.push(deepCopy(x));
          }
          return out;
        } else if (typeof obj === "object" && obj !== null) {
          out = {};
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              out[key] = deepCopy(obj[key]);
            }
          }
          return out;
        } else {
          return obj;
        }
      }
      function deepMerge(obj1, obj2) {
        let merged = {};
        for (const key in obj1) {
          if (obj1.hasOwnProperty(key)) {
            if (typeof obj1[key] === "object" && obj2.hasOwnProperty(key)) {
              merged[key] = deepMerge(obj1[key], obj2[key]);
            } else {
              merged[key] = obj1[key];
            }
          }
        }
        for (const key in obj2) {
          if (obj2.hasOwnProperty(key)) {
            if (!merged.hasOwnProperty(key)) {
              merged[key] = obj2[key];
            } else if (typeof obj2[key] === "object") {
              merged[key] = deepMerge(merged[key], obj2[key]);
            } else {
              merged[key] = obj2[key];
            }
          }
        }
        return merged;
      }
      var utils2 = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        deepCopy,
        deepMerge,
        unique
      });
      var DataColumn = class {
        constructor(values = []) {
          this.values = values;
        }
        sum() {
          let s = 0;
          for (const v of this.values) {
            s += v;
          }
          return s;
        }
        mean() {
          let sum = 0;
          let count = 0;
          for (const value of this.values) {
            if (typeof value !== "undefined" && value !== null) {
              sum += value;
              count++;
            }
          }
          if (count === 0) {
            return void 0;
          }
          return sum / count;
        }
        median() {
          if (this.values.length === 0) {
            return void 0;
          }
          const numbers = this.values.slice(0).sort(function(a, b) {
            return a - b;
          });
          const middle = Math.floor(numbers.length / 2);
          const isEven = numbers.length % 2 === 0;
          return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
        }
        min() {
          return Math.min.apply(null, this.values);
        }
        max() {
          return Math.max.apply(null, this.values);
        }
        count() {
          return this.values.length;
        }
        variance() {
          const mean = this.mean();
          let sum_square_error = 0;
          for (const x of this.values) {
            sum_square_error += Math.pow(x - mean, 2);
          }
          const mse = sum_square_error / (this.values.length - 1);
          return mse;
        }
        sd() {
          const mse = this.variance();
          const rmse = Math.sqrt(mse);
          return rmse;
        }
        frequencies() {
          const unique2 = {};
          for (const x of this.values) {
            if (typeof unique2[x] === "undefined") {
              unique2[x] = 1;
            } else {
              unique2[x]++;
            }
          }
          return unique2;
        }
        all(eval_fn) {
          for (const x of this.values) {
            if (!eval_fn(x)) {
              return false;
            }
          }
          return true;
        }
        subset(eval_fn) {
          const out = [];
          for (const x of this.values) {
            if (eval_fn(x)) {
              out.push(x);
            }
          }
          return new DataColumn(out);
        }
      };
      function saveTextToFile(textstr, filename) {
        const blobToSave = new Blob([textstr], {
          type: "text/plain"
        });
        let blobURL = "";
        if (typeof window.webkitURL !== "undefined") {
          blobURL = window.webkitURL.createObjectURL(blobToSave);
        } else {
          blobURL = window.URL.createObjectURL(blobToSave);
        }
        const link = document.createElement("a");
        link.id = "jspsych-download-as-text-link";
        link.style.display = "none";
        link.download = filename;
        link.href = blobURL;
        link.click();
      }
      function JSON2CSV(objArray) {
        const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        let line = "";
        let result = "";
        const columns = [];
        for (const row of array) {
          for (const key in row) {
            let keyString = key + "";
            keyString = '"' + keyString.replace(/"/g, '""') + '",';
            if (!columns.includes(key)) {
              columns.push(key);
              line += keyString;
            }
          }
        }
        line = line.slice(0, -1);
        result += line + "\r\n";
        for (const row of array) {
          line = "";
          for (const col of columns) {
            let value = typeof row[col] === "undefined" ? "" : row[col];
            if (typeof value == "object") {
              value = JSON.stringify(value);
            }
            const valueString = value + "";
            line += '"' + valueString.replace(/"/g, '""') + '",';
          }
          line = line.slice(0, -1);
          result += line + "\r\n";
        }
        return result;
      }
      function getQueryString() {
        const a = window.location.search.substr(1).split("&");
        const b = {};
        for (let i = 0; i < a.length; ++i) {
          const p = a[i].split("=", 2);
          if (p.length == 1)
            b[p[0]] = "";
          else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
      }
      var DataCollection = class {
        constructor(data = []) {
          this.trials = data;
        }
        push(new_data) {
          this.trials.push(new_data);
          return this;
        }
        join(other_data_collection) {
          this.trials = this.trials.concat(other_data_collection.values());
          return this;
        }
        top() {
          if (this.trials.length <= 1) {
            return this;
          } else {
            return new DataCollection([this.trials[this.trials.length - 1]]);
          }
        }
        /**
         * Queries the first n elements in a collection of trials.
         *
         * @param n A positive integer of elements to return. A value of
         *          n that is less than 1 will throw an error.
         *
         * @return First n objects of a collection of trials. If fewer than
         *         n trials are available, the trials.length elements will
         *         be returned.
         *
         */
        first(n = 1) {
          if (n < 1) {
            throw `You must query with a positive nonzero integer. Please use a
               different value for n.`;
          }
          if (this.trials.length === 0)
            return new DataCollection();
          if (n > this.trials.length)
            n = this.trials.length;
          return new DataCollection(this.trials.slice(0, n));
        }
        /**
         * Queries the last n elements in a collection of trials.
         *
         * @param n A positive integer of elements to return. A value of
         *          n that is less than 1 will throw an error.
         *
         * @return Last n objects of a collection of trials. If fewer than
         *         n trials are available, the trials.length elements will
         *         be returned.
         *
         */
        last(n = 1) {
          if (n < 1) {
            throw `You must query with a positive nonzero integer. Please use a
               different value for n.`;
          }
          if (this.trials.length === 0)
            return new DataCollection();
          if (n > this.trials.length)
            n = this.trials.length;
          return new DataCollection(this.trials.slice(this.trials.length - n, this.trials.length));
        }
        values() {
          return this.trials;
        }
        count() {
          return this.trials.length;
        }
        readOnly() {
          return new DataCollection(deepCopy(this.trials));
        }
        addToAll(properties) {
          for (const trial of this.trials) {
            Object.assign(trial, properties);
          }
          return this;
        }
        addToLast(properties) {
          if (this.trials.length > 0) {
            Object.assign(this.trials[this.trials.length - 1], properties);
          }
          return this;
        }
        filter(filters) {
          let f;
          if (!Array.isArray(filters)) {
            f = deepCopy([filters]);
          } else {
            f = deepCopy(filters);
          }
          const filtered_data = [];
          for (const trial of this.trials) {
            let keep = false;
            for (const filter of f) {
              let match = true;
              for (const key of Object.keys(filter)) {
                if (typeof trial[key] !== "undefined" && trial[key] === filter[key])
                  ;
                else {
                  match = false;
                }
              }
              if (match) {
                keep = true;
                break;
              }
            }
            if (keep) {
              filtered_data.push(trial);
            }
          }
          return new DataCollection(filtered_data);
        }
        filterCustom(fn) {
          return new DataCollection(this.trials.filter(fn));
        }
        filterColumns(columns) {
          return new DataCollection(
            this.trials.map(
              (trial) => Object.fromEntries(columns.filter((key) => key in trial).map((key) => [key, trial[key]]))
            )
          );
        }
        select(column) {
          const values = [];
          for (const trial of this.trials) {
            if (typeof trial[column] !== "undefined") {
              values.push(trial[column]);
            }
          }
          return new DataColumn(values);
        }
        ignore(columns) {
          if (!Array.isArray(columns)) {
            columns = [columns];
          }
          const o = deepCopy(this.trials);
          for (const trial of o) {
            for (const delete_key of columns) {
              delete trial[delete_key];
            }
          }
          return new DataCollection(o);
        }
        uniqueNames() {
          const names = [];
          for (const trial of this.trials) {
            for (const key of Object.keys(trial)) {
              if (!names.includes(key)) {
                names.push(key);
              }
            }
          }
          return names;
        }
        csv() {
          return JSON2CSV(this.trials);
        }
        json(pretty = false) {
          if (pretty) {
            return JSON.stringify(this.trials, null, "	");
          }
          return JSON.stringify(this.trials);
        }
        localSave(format, filename) {
          format = format.toLowerCase();
          let data_string;
          if (format === "json") {
            data_string = this.json();
          } else if (format === "csv") {
            data_string = this.csv();
          } else {
            throw new Error('Invalid format specified for localSave. Must be "json" or "csv".');
          }
          saveTextToFile(data_string, filename);
        }
      };
      var JsPsychData = class {
        constructor(dependencies) {
          this.dependencies = dependencies;
          this.dataProperties = {};
          this.interactionListeners = {
            blur: () => {
              this.addInteractionRecord("blur");
            },
            focus: () => {
              this.addInteractionRecord("focus");
            },
            fullscreenchange: () => {
              this.addInteractionRecord(
                // @ts-expect-error
                document.isFullScreen || // @ts-expect-error
                document.webkitIsFullScreen || // @ts-expect-error
                document.mozIsFullScreen || document.fullscreenElement ? "fullscreenenter" : "fullscreenexit"
              );
            }
          };
          this.reset();
        }
        reset() {
          this.results = new DataCollection();
          this.resultToTrialMap = /* @__PURE__ */ new WeakMap();
          this.interactionRecords = new DataCollection();
        }
        get() {
          return this.results;
        }
        getInteractionData() {
          return this.interactionRecords;
        }
        write(trial) {
          const result = trial.getResult();
          Object.assign(result, this.dataProperties);
          this.results.push(result);
          this.resultToTrialMap.set(result, trial);
        }
        addProperties(properties) {
          this.results.addToAll(properties);
          this.dataProperties = Object.assign({}, this.dataProperties, properties);
        }
        addDataToLastTrial(data) {
          this.results.addToLast(data);
        }
        getLastTrialData() {
          return this.results.top();
        }
        getLastTimelineData() {
          const lastResult = this.getLastTrialData().values()[0];
          return new DataCollection(
            lastResult ? this.resultToTrialMap.get(lastResult).parent.getResults() : []
          );
        }
        displayData(format = "json") {
          format = format.toLowerCase();
          if (format !== "json" && format !== "csv") {
            console.log("Invalid format declared for displayData function. Using json as default.");
            format = "json";
          }
          const dataContainer = document.createElement("pre");
          dataContainer.id = "jspsych-data-display";
          dataContainer.textContent = format === "json" ? this.results.json(true) : this.results.csv();
          this.dependencies.getDisplayElement().replaceChildren(dataContainer);
        }
        urlVariables() {
          if (typeof this.query_string == "undefined") {
            this.query_string = getQueryString();
          }
          return this.query_string;
        }
        getURLVariable(whichvar) {
          return this.urlVariables()[whichvar];
        }
        addInteractionRecord(event) {
          const record = __spreadValues({ event }, this.dependencies.getProgress());
          this.interactionRecords.push(record);
          this.dependencies.onInteractionRecordAdded(record);
        }
        createInteractionListeners() {
          window.addEventListener("blur", this.interactionListeners.blur);
          window.addEventListener("focus", this.interactionListeners.focus);
          document.addEventListener("fullscreenchange", this.interactionListeners.fullscreenchange);
          document.addEventListener("mozfullscreenchange", this.interactionListeners.fullscreenchange);
          document.addEventListener("webkitfullscreenchange", this.interactionListeners.fullscreenchange);
        }
        removeInteractionListeners() {
          window.removeEventListener("blur", this.interactionListeners.blur);
          window.removeEventListener("focus", this.interactionListeners.focus);
          document.removeEventListener("fullscreenchange", this.interactionListeners.fullscreenchange);
          document.removeEventListener("mozfullscreenchange", this.interactionListeners.fullscreenchange);
          document.removeEventListener(
            "webkitfullscreenchange",
            this.interactionListeners.fullscreenchange
          );
        }
      };
      var KeyboardListenerAPI = class {
        constructor(getRootElement, areResponsesCaseSensitive = false, minimumValidRt = 0) {
          this.getRootElement = getRootElement;
          this.areResponsesCaseSensitive = areResponsesCaseSensitive;
          this.minimumValidRt = minimumValidRt;
          this.listeners = /* @__PURE__ */ new Set();
          this.heldKeys = /* @__PURE__ */ new Set();
          this.areRootListenersRegistered = false;
          autoBind2(this);
          this.registerRootListeners();
        }
        /**
         * If not previously done and `this.getRootElement()` returns an element, adds the root key
         * listeners to that element.
         */
        registerRootListeners() {
          if (!this.areRootListenersRegistered) {
            const rootElement = this.getRootElement();
            if (rootElement) {
              rootElement.addEventListener("keydown", this.rootKeydownListener);
              rootElement.addEventListener("keyup", this.rootKeyupListener);
              this.areRootListenersRegistered = true;
            }
          }
        }
        rootKeydownListener(e) {
          for (const listener of [...this.listeners]) {
            listener(e);
          }
          this.heldKeys.add(this.toLowerCaseIfInsensitive(e.key));
        }
        toLowerCaseIfInsensitive(string) {
          return this.areResponsesCaseSensitive ? string : string.toLowerCase();
        }
        rootKeyupListener(e) {
          this.heldKeys.delete(this.toLowerCaseIfInsensitive(e.key));
        }
        isResponseValid(validResponses, allowHeldKey, key) {
          if (!allowHeldKey && this.heldKeys.has(key)) {
            return false;
          }
          if (validResponses === "ALL_KEYS") {
            return true;
          }
          if (validResponses === "NO_KEYS") {
            return false;
          }
          return validResponses.includes(key);
        }
        getKeyboardResponse({
          callback_function,
          valid_responses = "ALL_KEYS",
          rt_method = "performance",
          persist,
          audio_context,
          audio_context_start_time,
          allow_held_key = false,
          minimum_valid_rt = this.minimumValidRt
        }) {
          if (rt_method !== "performance" && rt_method !== "audio") {
            console.log(
              'Invalid RT method specified in getKeyboardResponse. Defaulting to "performance" method.'
            );
            rt_method = "performance";
          }
          const usePerformanceRt = rt_method === "performance";
          const startTime = usePerformanceRt ? performance.now() : audio_context_start_time * 1e3;
          this.registerRootListeners();
          if (!this.areResponsesCaseSensitive && typeof valid_responses !== "string") {
            valid_responses = valid_responses.map((r) => r.toLowerCase());
          }
          const listener = (e) => {
            const rt = Math.round(
              (rt_method == "performance" ? performance.now() : audio_context.currentTime * 1e3) - startTime
            );
            if (rt < minimum_valid_rt) {
              return;
            }
            const key = this.toLowerCaseIfInsensitive(e.key);
            if (this.isResponseValid(valid_responses, allow_held_key, key)) {
              e.preventDefault();
              if (!persist) {
                this.cancelKeyboardResponse(listener);
              }
              callback_function({ key: e.key, rt });
            }
          };
          this.listeners.add(listener);
          return listener;
        }
        cancelKeyboardResponse(listener) {
          this.listeners.delete(listener);
        }
        cancelAllKeyboardResponses() {
          this.listeners.clear();
        }
        compareKeys(key1, key2) {
          if (typeof key1 !== "string" && key1 !== null || typeof key2 !== "string" && key2 !== null) {
            console.error(
              "Error in jsPsych.pluginAPI.compareKeys: arguments must be key strings or null."
            );
            return void 0;
          }
          if (typeof key1 === "string" && typeof key2 === "string") {
            return this.areResponsesCaseSensitive ? key1 === key2 : key1.toLowerCase() === key2.toLowerCase();
          }
          return key1 === null && key2 === null;
        }
      };
      var ParameterType2 = /* @__PURE__ */ ((ParameterType22) => {
        ParameterType22[ParameterType22["BOOL"] = 0] = "BOOL";
        ParameterType22[ParameterType22["STRING"] = 1] = "STRING";
        ParameterType22[ParameterType22["INT"] = 2] = "INT";
        ParameterType22[ParameterType22["FLOAT"] = 3] = "FLOAT";
        ParameterType22[ParameterType22["FUNCTION"] = 4] = "FUNCTION";
        ParameterType22[ParameterType22["KEY"] = 5] = "KEY";
        ParameterType22[ParameterType22["KEYS"] = 6] = "KEYS";
        ParameterType22[ParameterType22["SELECT"] = 7] = "SELECT";
        ParameterType22[ParameterType22["HTML_STRING"] = 8] = "HTML_STRING";
        ParameterType22[ParameterType22["IMAGE"] = 9] = "IMAGE";
        ParameterType22[ParameterType22["AUDIO"] = 10] = "AUDIO";
        ParameterType22[ParameterType22["VIDEO"] = 11] = "VIDEO";
        ParameterType22[ParameterType22["OBJECT"] = 12] = "OBJECT";
        ParameterType22[ParameterType22["COMPLEX"] = 13] = "COMPLEX";
        ParameterType22[ParameterType22["TIMELINE"] = 14] = "TIMELINE";
        return ParameterType22;
      })(ParameterType2 || {});
      var AudioPlayer = class {
        constructor(src, options = { useWebAudio: false }) {
          this.src = src;
          this.useWebAudio = options.useWebAudio;
          this.audioContext = options.audioContext || null;
        }
        load() {
          return __async(this, null, function* () {
            if (this.useWebAudio) {
              this.webAudioBuffer = yield this.preloadWebAudio(this.src);
            } else {
              this.audio = yield this.preloadHTMLAudio(this.src);
            }
          });
        }
        play() {
          if (this.audio instanceof HTMLAudioElement) {
            this.audio.play();
          } else {
            if (!this.audio)
              this.audio = this.getAudioSourceNode(this.webAudioBuffer);
            this.audio.start();
          }
        }
        stop() {
          if (this.audio instanceof HTMLAudioElement) {
            this.audio.pause();
            this.audio.currentTime = 0;
          } else {
            this.audio.stop();
            this.audio = this.getAudioSourceNode(this.webAudioBuffer);
          }
        }
        addEventListener(eventName, callback) {
          if (!this.audio && this.webAudioBuffer)
            this.audio = this.getAudioSourceNode(this.webAudioBuffer);
          this.audio.addEventListener(eventName, callback);
        }
        removeEventListener(eventName, callback) {
          if (!this.audio && this.webAudioBuffer)
            this.audio = this.getAudioSourceNode(this.webAudioBuffer);
          this.audio.removeEventListener(eventName, callback);
        }
        getAudioSourceNode(audioBuffer) {
          const source = this.audioContext.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(this.audioContext.destination);
          return source;
        }
        preloadWebAudio(src) {
          return __async(this, null, function* () {
            const buffer = yield fetch(src);
            const arrayBuffer = yield buffer.arrayBuffer();
            const audioBuffer = yield this.audioContext.decodeAudioData(arrayBuffer);
            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);
            return audioBuffer;
          });
        }
        preloadHTMLAudio(src) {
          return __async(this, null, function* () {
            return new Promise((resolve, reject) => {
              const audio = new Audio(src);
              audio.addEventListener("canplaythrough", () => {
                resolve(audio);
              });
              audio.addEventListener("error", (err) => {
                reject(err);
              });
              audio.addEventListener("abort", (err) => {
                reject(err);
              });
            });
          });
        }
      };
      var preloadParameterTypes2 = [
        ParameterType2.AUDIO,
        ParameterType2.IMAGE,
        ParameterType2.VIDEO
      ];
      var MediaAPI = class {
        constructor(useWebaudio) {
          this.useWebaudio = useWebaudio;
          this.video_buffers = {};
          this.context = null;
          this.audio_buffers = [];
          this.preload_requests = [];
          this.img_cache = {};
          this.preloadMap = /* @__PURE__ */ new Map();
          this.microphone_recorder = null;
          this.camera_stream = null;
          this.camera_recorder = null;
          if (this.useWebaudio && typeof window !== "undefined" && typeof window.AudioContext !== "undefined") {
            this.context = new AudioContext();
          }
        }
        getVideoBuffer(videoID) {
          if (videoID.startsWith("blob:")) {
            this.video_buffers[videoID] = videoID;
          }
          return this.video_buffers[videoID];
        }
        audioContext() {
          if (this.context && this.context.state !== "running") {
            this.context.resume();
          }
          return this.context;
        }
        getAudioPlayer(audioID) {
          return __async(this, null, function* () {
            if (this.audio_buffers[audioID] instanceof AudioPlayer) {
              return this.audio_buffers[audioID];
            } else {
              this.audio_buffers[audioID] = new AudioPlayer(audioID, {
                useWebAudio: this.useWebaudio,
                audioContext: this.context
              });
              yield this.audio_buffers[audioID].load();
              return this.audio_buffers[audioID];
            }
          });
        }
        preloadAudio(files, callback_complete = () => {
        }, callback_load = (filepath) => {
        }, callback_error = (error) => {
        }) {
          files = unique(files.flat());
          let n_loaded = 0;
          if (files.length == 0) {
            callback_complete();
            return;
          }
          for (const file of files) {
            if (this.audio_buffers[file] instanceof AudioPlayer) {
              n_loaded++;
              callback_load(file);
              if (n_loaded == files.length) {
                callback_complete();
              }
            } else {
              this.audio_buffers[file] = new AudioPlayer(file, {
                useWebAudio: this.useWebaudio,
                audioContext: this.context
              });
              this.audio_buffers[file].load().then(() => {
                n_loaded++;
                callback_load(file);
                if (n_loaded == files.length) {
                  callback_complete();
                }
              }).catch((e) => {
                callback_error(e);
              });
            }
          }
        }
        preloadImages(images, callback_complete = () => {
        }, callback_load = (filepath) => {
        }, callback_error = (error_msg) => {
        }) {
          images = unique(images.flat());
          var n_loaded = 0;
          if (images.length === 0) {
            callback_complete();
            return;
          }
          for (let i = 0; i < images.length; i++) {
            const img = new Image();
            const src = images[i];
            img.onload = () => {
              n_loaded++;
              callback_load(src);
              if (n_loaded === images.length) {
                callback_complete();
              }
            };
            img.onerror = (e) => {
              callback_error({ source: src, error: e });
            };
            img.src = src;
            this.img_cache[src] = img;
            this.preload_requests.push(img);
          }
        }
        preloadVideo(videos, callback_complete = () => {
        }, callback_load = (filepath) => {
        }, callback_error = (error_msg) => {
        }) {
          videos = unique(videos.flat());
          let n_loaded = 0;
          if (videos.length === 0) {
            callback_complete();
            return;
          }
          for (const video of videos) {
            const video_buffers = this.video_buffers;
            const request = new XMLHttpRequest();
            request.open("GET", video, true);
            request.responseType = "blob";
            request.onload = () => {
              if (request.status === 200 || request.status === 0) {
                const videoBlob = request.response;
                video_buffers[video] = URL.createObjectURL(videoBlob);
                n_loaded++;
                callback_load(video);
                if (n_loaded === videos.length) {
                  callback_complete();
                }
              }
            };
            request.onerror = (e) => {
              let err = e;
              if (request.status == 404) {
                err = "404";
              }
              callback_error({ source: video, error: err });
            };
            request.onloadend = (e) => {
              if (request.status == 404) {
                callback_error({ source: video, error: "404" });
              }
            };
            request.send();
            this.preload_requests.push(request);
          }
        }
        getAutoPreloadList(timeline_description) {
          const preloadPaths = Object.fromEntries(
            preloadParameterTypes2.map((type) => [type, /* @__PURE__ */ new Set()])
          );
          const traverseTimeline = (node, inheritedTrialType) => {
            var _a, _b, _c, _d;
            const isTimeline = typeof node.timeline !== "undefined";
            if (isTimeline) {
              for (const childNode of node.timeline) {
                traverseTimeline(childNode, (_a = node.type) != null ? _a : inheritedTrialType);
              }
            } else if ((_c = (_b = node.type) != null ? _b : inheritedTrialType) == null ? void 0 : _c.info) {
              const { name: pluginName, parameters } = ((_d = node.type) != null ? _d : inheritedTrialType).info;
              if (!this.preloadMap.has(pluginName)) {
                this.preloadMap.set(
                  pluginName,
                  Object.fromEntries(
                    Object.entries(parameters).filter(
                      ([_name, { type, preload }]) => preloadParameterTypes2.includes(type) && (preload != null ? preload : true)
                    ).map(([name, { type }]) => [name, type])
                  )
                );
              }
              for (const [parameterName, parameterType] of Object.entries(
                this.preloadMap.get(pluginName)
              )) {
                const parameterValue = node[parameterName];
                const elements = preloadPaths[parameterType];
                if (typeof parameterValue === "string") {
                  elements.add(parameterValue);
                } else if (Array.isArray(parameterValue)) {
                  for (const element of parameterValue.flat()) {
                    if (typeof element === "string") {
                      elements.add(element);
                    }
                  }
                }
              }
            }
          };
          traverseTimeline({ timeline: timeline_description });
          return {
            images: [...preloadPaths[ParameterType2.IMAGE]],
            audio: [...preloadPaths[ParameterType2.AUDIO]],
            video: [...preloadPaths[ParameterType2.VIDEO]]
          };
        }
        cancelPreloads() {
          for (const request of this.preload_requests) {
            request.onload = () => {
            };
            request.onerror = () => {
            };
            request.oncanplaythrough = () => {
            };
            request.onabort = () => {
            };
          }
          this.preload_requests = [];
        }
        initializeMicrophoneRecorder(stream) {
          const recorder = new MediaRecorder(stream);
          this.microphone_recorder = recorder;
        }
        getMicrophoneRecorder() {
          return this.microphone_recorder;
        }
        initializeCameraRecorder(stream, opts) {
          this.camera_stream = stream;
          const recorder = new MediaRecorder(stream, opts);
          this.camera_recorder = recorder;
        }
        getCameraStream() {
          return this.camera_stream;
        }
        getCameraRecorder() {
          return this.camera_recorder;
        }
      };
      var SimulationAPI = class {
        constructor(getDisplayContainerElement, setJsPsychTimeout) {
          this.getDisplayContainerElement = getDisplayContainerElement;
          this.setJsPsychTimeout = setJsPsychTimeout;
        }
        dispatchEvent(event) {
          this.getDisplayContainerElement().dispatchEvent(event);
        }
        /**
         * Dispatches a `keydown` event for the specified key
         * @param key Character code (`.key` property) for the key to press.
         */
        keyDown(key) {
          this.dispatchEvent(new KeyboardEvent("keydown", { key }));
        }
        /**
         * Dispatches a `keyup` event for the specified key
         * @param key Character code (`.key` property) for the key to press.
         */
        keyUp(key) {
          this.dispatchEvent(new KeyboardEvent("keyup", { key }));
        }
        /**
         * Dispatches a `keydown` and `keyup` event in sequence to simulate pressing a key.
         * @param key Character code (`.key` property) for the key to press.
         * @param delay Length of time to wait (ms) before executing action
         */
        pressKey(key, delay2 = 0) {
          if (delay2 > 0) {
            this.setJsPsychTimeout(() => {
              this.keyDown(key);
              this.keyUp(key);
            }, delay2);
          } else {
            this.keyDown(key);
            this.keyUp(key);
          }
        }
        /**
         * Dispatches `mousedown`, `mouseup`, and `click` events on the target element
         * @param target The element to click
         * @param delay Length of time to wait (ms) before executing action
         */
        clickTarget(target, delay2 = 0) {
          if (delay2 > 0) {
            this.setJsPsychTimeout(() => {
              target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
              target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
              target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }, delay2);
          } else {
            target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
            target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
            target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }
        }
        /**
         * Sets the value of a target text input
         * @param target A text input element to fill in
         * @param text Text to input
         * @param delay Length of time to wait (ms) before executing action
         */
        fillTextInput(target, text, delay2 = 0) {
          if (delay2 > 0) {
            this.setJsPsychTimeout(() => {
              target.value = text;
            }, delay2);
          } else {
            target.value = text;
          }
        }
        /**
         * Picks a valid key from `choices`, taking into account jsPsych-specific
         * identifiers like "NO_KEYS" and "ALL_KEYS".
         * @param choices Which keys are valid.
         * @returns A key selected at random from the valid keys.
         */
        getValidKey(choices) {
          const possible_keys = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            " "
          ];
          let key;
          if (choices == "NO_KEYS") {
            key = null;
          } else if (choices == "ALL_KEYS") {
            key = possible_keys[Math.floor(Math.random() * possible_keys.length)];
          } else {
            const flat_choices = choices.flat();
            key = flat_choices[Math.floor(Math.random() * flat_choices.length)];
          }
          return key;
        }
        mergeSimulationData(default_data, simulation_options) {
          return __spreadValues(__spreadValues({}, default_data), simulation_options == null ? void 0 : simulation_options.data);
        }
        ensureSimulationDataConsistency(trial, data) {
          if (data.rt) {
            data.rt = Math.round(data.rt);
          }
          if (trial.trial_duration && data.rt && data.rt > trial.trial_duration) {
            data.rt = null;
            if (data.response) {
              data.response = null;
            }
            if (data.correct) {
              data.correct = false;
            }
          }
          if (trial.choices && trial.choices == "NO_KEYS") {
            if (data.rt) {
              data.rt = null;
            }
            if (data.response) {
              data.response = null;
            }
          }
          if (trial.allow_response_before_complete) {
            if (trial.sequence_reps && trial.frame_time) {
              const min_time = trial.sequence_reps * trial.frame_time * trial.stimuli.length;
              if (data.rt < min_time) {
                data.rt = null;
                data.response = null;
              }
            }
          }
        }
      };
      var TimeoutAPI = class {
        constructor() {
          this.timeout_handlers = [];
        }
        /**
         * Calls a function after a specified delay, in milliseconds.
         * @param callback The function to call after the delay.
         * @param delay The number of milliseconds to wait before calling the function.
         * @returns A handle that can be used to clear the timeout with clearTimeout.
         */
        setTimeout(callback, delay2) {
          const handle = window.setTimeout(callback, delay2);
          this.timeout_handlers.push(handle);
          return handle;
        }
        /**
         * Clears all timeouts that have been created with setTimeout.
         */
        clearAllTimeouts() {
          for (const handler of this.timeout_handlers) {
            clearTimeout(handler);
          }
          this.timeout_handlers = [];
        }
      };
      function createJointPluginAPIObject(jsPsych2) {
        const settings = jsPsych2.getInitSettings();
        const keyboardListenerAPI = new KeyboardListenerAPI(
          jsPsych2.getDisplayContainerElement,
          settings.case_sensitive_responses,
          settings.minimum_valid_rt
        );
        const timeoutAPI = new TimeoutAPI();
        const mediaAPI = new MediaAPI(settings.use_webaudio);
        const simulationAPI = new SimulationAPI(
          jsPsych2.getDisplayContainerElement,
          timeoutAPI.setTimeout.bind(timeoutAPI)
        );
        return Object.assign(
          {},
          ...[keyboardListenerAPI, timeoutAPI, mediaAPI, simulationAPI].map((object) => autoBind2(object))
        );
      }
      function setSeed(seed = Math.random().toString()) {
        Math.random = seedrandom2(seed);
        return seed;
      }
      function repeat(array, repetitions, unpack = false) {
        const arr_isArray = Array.isArray(array);
        const rep_isArray = Array.isArray(repetitions);
        if (!arr_isArray) {
          if (!rep_isArray) {
            array = [array];
            repetitions = [repetitions];
          } else {
            repetitions = [repetitions[0]];
            console.log(
              "Unclear parameters given to randomization.repeat. Multiple set sizes specified, but only one item exists to sample. Proceeding using the first set size."
            );
          }
        } else {
          if (!rep_isArray) {
            let reps = [];
            for (let i = 0; i < array.length; i++) {
              reps.push(repetitions);
            }
            repetitions = reps;
          } else {
            if (array.length != repetitions.length) {
              console.warn(
                "Unclear parameters given to randomization.repeat. Items and repetitions are unequal lengths. Behavior may not be as expected."
              );
              if (repetitions.length < array.length) {
                let reps = [];
                for (let i = 0; i < array.length; i++) {
                  reps.push(repetitions);
                }
                repetitions = reps;
              } else {
                repetitions = repetitions.slice(0, array.length);
              }
            }
          }
        }
        let allsamples = [];
        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < repetitions[i]; j++) {
            if (array[i] == null || typeof array[i] != "object") {
              allsamples.push(array[i]);
            } else {
              allsamples.push(Object.assign({}, array[i]));
            }
          }
        }
        let out = shuffle(allsamples);
        if (unpack) {
          out = unpackArray(out);
        }
        return out;
      }
      function shuffle(array) {
        if (!Array.isArray(array)) {
          console.error("Argument to shuffle() must be an array.");
        }
        const copy_array = array.slice(0);
        let m = copy_array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = copy_array[m];
          copy_array[m] = copy_array[i];
          copy_array[i] = t;
        }
        return copy_array;
      }
      function shuffleNoRepeats(arr, equalityTest) {
        if (!Array.isArray(arr)) {
          console.error("First argument to shuffleNoRepeats() must be an array.");
        }
        if (typeof equalityTest !== "undefined" && typeof equalityTest !== "function") {
          console.error("Second argument to shuffleNoRepeats() must be a function.");
        }
        if (typeof equalityTest == "undefined") {
          equalityTest = function(a, b) {
            if (a === b) {
              return true;
            } else {
              return false;
            }
          };
        }
        const random_shuffle = shuffle(arr);
        for (let i = 0; i < random_shuffle.length - 1; i++) {
          if (equalityTest(random_shuffle[i], random_shuffle[i + 1])) {
            let random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
            while (equalityTest(random_shuffle[i + 1], random_shuffle[random_pick]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick + 1]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick - 1]) || equalityTest(random_shuffle[i], random_shuffle[random_pick])) {
              random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
            }
            const new_neighbor = random_shuffle[random_pick];
            random_shuffle[random_pick] = random_shuffle[i + 1];
            random_shuffle[i + 1] = new_neighbor;
          }
        }
        return random_shuffle;
      }
      function shuffleAlternateGroups(arr_groups, random_group_order = false) {
        const n_groups = arr_groups.length;
        if (n_groups == 1) {
          console.warn(
            "shuffleAlternateGroups() was called with only one group. Defaulting to simple shuffle."
          );
          return shuffle(arr_groups[0]);
        }
        let group_order = [];
        for (let i = 0; i < n_groups; i++) {
          group_order.push(i);
        }
        if (random_group_order) {
          group_order = shuffle(group_order);
        }
        const randomized_groups = [];
        let min_length = null;
        for (let i = 0; i < n_groups; i++) {
          min_length = min_length === null ? arr_groups[i].length : Math.min(min_length, arr_groups[i].length);
          randomized_groups.push(shuffle(arr_groups[i]));
        }
        const out = [];
        for (let i = 0; i < min_length; i++) {
          for (let j = 0; j < group_order.length; j++) {
            out.push(randomized_groups[group_order[j]][i]);
          }
        }
        return out;
      }
      function sampleWithoutReplacement(arr, size) {
        if (!Array.isArray(arr)) {
          console.error("First argument to sampleWithoutReplacement() must be an array");
        }
        if (size > arr.length) {
          console.error("Cannot take a sample larger than the size of the set of items to sample.");
        }
        return shuffle(arr).slice(0, size);
      }
      function sampleWithReplacement(arr, size, weights) {
        if (!Array.isArray(arr)) {
          console.error("First argument to sampleWithReplacement() must be an array");
        }
        const normalized_weights = [];
        if (typeof weights !== "undefined") {
          if (weights.length !== arr.length) {
            console.error(
              "The length of the weights array must equal the length of the array to be sampled from."
            );
          }
          let weight_sum = 0;
          for (const weight of weights) {
            weight_sum += weight;
          }
          for (const weight of weights) {
            normalized_weights.push(weight / weight_sum);
          }
        } else {
          for (let i = 0; i < arr.length; i++) {
            normalized_weights.push(1 / arr.length);
          }
        }
        const cumulative_weights = [normalized_weights[0]];
        for (let i = 1; i < normalized_weights.length; i++) {
          cumulative_weights.push(normalized_weights[i] + cumulative_weights[i - 1]);
        }
        const samp = [];
        for (let i = 0; i < size; i++) {
          const rnd = Math.random();
          let index = 0;
          while (rnd > cumulative_weights[index]) {
            index++;
          }
          samp.push(arr[index]);
        }
        return samp;
      }
      function factorial(factors, repetitions = 1, unpack = false) {
        let design = [{}];
        for (const [factorName, factor] of Object.entries(factors)) {
          const new_design = [];
          for (const level of factor) {
            for (const cell of design) {
              new_design.push(__spreadProps(__spreadValues({}, cell), { [factorName]: level }));
            }
          }
          design = new_design;
        }
        return repeat(design, repetitions, unpack);
      }
      function randomID(length = 32) {
        let result = "";
        const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
        for (let i = 0; i < length; i++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
      }
      function randomInt(lower, upper) {
        if (upper < lower) {
          throw new Error("Upper boundary must be greater than or equal to lower boundary");
        }
        return lower + Math.floor(Math.random() * (upper - lower + 1));
      }
      function sampleBernoulli(p) {
        return Math.random() <= p ? 1 : 0;
      }
      function sampleNormal(mean, standard_deviation) {
        return randn_bm() * standard_deviation + mean;
      }
      function sampleExponential(rate) {
        return -Math.log(Math.random()) / rate;
      }
      function sampleExGaussian(mean, standard_deviation, rate, positive = false) {
        let s = sampleNormal(mean, standard_deviation) + sampleExponential(rate);
        if (positive) {
          while (s <= 0) {
            s = sampleNormal(mean, standard_deviation) + sampleExponential(rate);
          }
        }
        return s;
      }
      function randomWords(opts) {
        return rw2(opts);
      }
      function randn_bm() {
        var u = 0, v = 0;
        while (u === 0)
          u = Math.random();
        while (v === 0)
          v = Math.random();
        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
      }
      function unpackArray(array) {
        const out = {};
        for (const x of array) {
          for (const key of Object.keys(x)) {
            if (typeof out[key] === "undefined") {
              out[key] = [];
            }
            out[key].push(x[key]);
          }
        }
        return out;
      }
      var randomization = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        factorial,
        randomID,
        randomInt,
        randomWords,
        repeat,
        sampleBernoulli,
        sampleExGaussian,
        sampleExponential,
        sampleNormal,
        sampleWithReplacement,
        sampleWithoutReplacement,
        setSeed,
        shuffle,
        shuffleAlternateGroups,
        shuffleNoRepeats
      });
      function turkInfo() {
        const turk2 = {
          previewMode: false,
          outsideTurk: false,
          hitId: "INVALID_URL_PARAMETER",
          assignmentId: "INVALID_URL_PARAMETER",
          workerId: "INVALID_URL_PARAMETER",
          turkSubmitTo: "INVALID_URL_PARAMETER"
        };
        const param = function(url, name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          const regexS = "[\\?&]" + name + "=([^&#]*)";
          const regex = new RegExp(regexS);
          const results = regex.exec(url);
          return results == null ? "" : results[1];
        };
        const src = param(window.location.href, "assignmentId") ? window.location.href : document.referrer;
        const keys = ["assignmentId", "hitId", "workerId", "turkSubmitTo"];
        keys.map(function(key) {
          turk2[key] = unescape(param(src, key));
        });
        turk2.previewMode = turk2.assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE";
        turk2.outsideTurk = !turk2.previewMode && turk2.hitId === "" && turk2.assignmentId == "" && turk2.workerId == "";
        return turk2;
      }
      function submitToTurk(data) {
        const turk2 = turkInfo();
        const assignmentId = turk2.assignmentId;
        const turkSubmitTo = turk2.turkSubmitTo;
        if (!assignmentId || !turkSubmitTo)
          return;
        const form = document.createElement("form");
        form.method = "POST";
        form.action = turkSubmitTo + "/mturk/externalSubmit?assignmentId=" + assignmentId;
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const hiddenField = document.createElement("input");
            hiddenField.type = "hidden";
            hiddenField.name = key;
            hiddenField.id = key;
            hiddenField.value = data[key];
            form.appendChild(hiddenField);
          }
        }
        document.body.appendChild(form);
        form.submit();
      }
      var turk = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        submitToTurk,
        turkInfo
      });
      var ProgressBar = class {
        constructor(containerElement, message) {
          this.containerElement = containerElement;
          this.message = message;
          this._progress = 0;
          this.setupElements();
        }
        /** Adds the progress bar HTML code into `this.containerElement` */
        setupElements() {
          this.messageSpan = document.createElement("span");
          this.innerDiv = document.createElement("div");
          this.innerDiv.id = "jspsych-progressbar-inner";
          this.update();
          const outerDiv = document.createElement("div");
          outerDiv.id = "jspsych-progressbar-outer";
          outerDiv.appendChild(this.innerDiv);
          this.containerElement.appendChild(this.messageSpan);
          this.containerElement.appendChild(outerDiv);
        }
        /** Updates the progress bar according to `this.progress` */
        update() {
          this.innerDiv.style.width = this._progress * 100 + "%";
          if (typeof this.message === "function") {
            this.messageSpan.innerHTML = this.message(this._progress);
          } else {
            this.messageSpan.innerHTML = this.message;
          }
        }
        /**
         * The bar's current position as a number in the closed interval [0, 1]. Set this to update the
         * progress bar accordingly.
         */
        set progress(progress) {
          if (typeof progress !== "number" || progress < 0 || progress > 1) {
            throw new Error("jsPsych.progressBar.progress must be a number between 0 and 1");
          }
          this._progress = progress;
          this.update();
        }
        get progress() {
          return this._progress;
        }
      };
      var TimelineVariable = class {
        constructor(name) {
          this.name = name;
        }
      };
      var timelineDescriptionKeys = [
        "timeline",
        "timeline_variables",
        "name",
        "repetitions",
        "loop_function",
        "conditional_function",
        "randomize_order",
        "sample",
        "on_timeline_start",
        "on_timeline_finish"
      ];
      function isTrialDescription(description) {
        return !isTimelineDescription(description);
      }
      function isTimelineDescription(description) {
        return Boolean(description.timeline) || Array.isArray(description);
      }
      var TimelineNodeStatus = /* @__PURE__ */ ((TimelineNodeStatus2) => {
        TimelineNodeStatus2[TimelineNodeStatus2["PENDING"] = 0] = "PENDING";
        TimelineNodeStatus2[TimelineNodeStatus2["RUNNING"] = 1] = "RUNNING";
        TimelineNodeStatus2[TimelineNodeStatus2["PAUSED"] = 2] = "PAUSED";
        TimelineNodeStatus2[TimelineNodeStatus2["COMPLETED"] = 3] = "COMPLETED";
        TimelineNodeStatus2[TimelineNodeStatus2["ABORTED"] = 4] = "ABORTED";
        return TimelineNodeStatus2;
      })(TimelineNodeStatus || {});
      var PromiseWrapper = class {
        constructor() {
          this.reset();
        }
        reset() {
          this.promise = new Promise((resolve) => {
            this.resolvePromise = resolve;
          });
        }
        get() {
          return this.promise;
        }
        resolve(value) {
          this.resolvePromise(value);
          this.reset();
        }
      };
      function isPromise(value) {
        return value && typeof value["then"] === "function";
      }
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      function parameterPathArrayToString([firstPathElement, ...remainingPathElements]) {
        let pathString = firstPathElement != null ? firstPathElement : "";
        for (const pathElement of remainingPathElements) {
          pathString += Number.isNaN(Number.parseInt(pathElement)) ? `.${pathElement}` : `[${pathElement}]`;
        }
        return pathString;
      }
      function isObjectOrArray(value) {
        return typeof value === "object" && value !== null;
      }
      var ParameterObjectPathCache = class {
        constructor() {
          this.cache = /* @__PURE__ */ new Map();
        }
        static lookupChild(objectOrArray, childName) {
          let doesPathExist = false;
          let childValue;
          if (Number.isNaN(Number.parseInt(childName))) {
            if (Object.hasOwn(objectOrArray, childName)) {
              doesPathExist = true;
              childValue = objectOrArray[childName];
            }
          } else {
            if (Number.parseInt(childName) < objectOrArray.length) {
              doesPathExist = true;
              childValue = objectOrArray[childName];
            }
          }
          return { doesPathExist, value: childValue };
        }
        get(path) {
          return this.cache.get(path.join("."));
        }
        has(path) {
          return this.cache.has(path.join("."));
        }
        initialize(rootObject) {
          this.rootObject = rootObject;
          this.cache.set("", rootObject);
        }
        reset() {
          this.cache.clear();
          this.cache.set("", this.rootObject);
        }
        set(path, value) {
          this.cache.set(path.join("."), value);
        }
        lookup(path) {
          if (this.has(path)) {
            return { doesPathExist: true, value: this.get(path) };
          }
          const lookupPath = (path2) => {
            const parentPath = path2.slice(0, -1);
            const childName = path2[path2.length - 1];
            if (!this.has(parentPath) && parentPath.length > 0) {
              if (!lookupPath(parentPath).doesPathExist) {
                return { doesPathExist: false };
              }
            }
            const parentValue = this.get(parentPath);
            if (!isObjectOrArray(parentValue)) {
              return { doesPathExist: false };
            }
            const lookupResult = ParameterObjectPathCache.lookupChild(parentValue, childName);
            if (lookupResult.doesPathExist) {
              this.set(path2, lookupResult.value);
            }
            return lookupResult;
          };
          return lookupPath(path);
        }
      };
      var TimelineNode = class {
        constructor(dependencies) {
          this.dependencies = dependencies;
          this.status = TimelineNodeStatus.PENDING;
          this.parameterValueCache = new ParameterObjectPathCache();
        }
        getStatus() {
          return this.status;
        }
        /**
         * Initializes the parameter value cache with `this.description`. To be called by subclass
         * constructors after setting `this.description`.
         */
        initializeParameterValueCache() {
          this.parameterValueCache.initialize(this.description);
        }
        /**
         * Resets all cached parameter values in this timeline node and all of its parents. This is
         * necessary to re-evaluate function parameters and timeline variables at each new trial.
         */
        resetParameterValueCache() {
          var _a;
          this.parameterValueCache.reset();
          (_a = this.parent) == null ? void 0 : _a.resetParameterValueCache();
        }
        /**
         * Retrieves a parameter value from the description of this timeline node, recursively falling
         * back to the description of each parent timeline node unless `recursive` is set to `false`. If
         * the parameter...
         *
         * * is a timeline variable, evaluates the variable and returns the result.
         * * is not specified, returns `undefined`.
         * * is a function and `evaluateFunctions` is not set to `false`, invokes the function and returns
         *   its return value
         * * has previously been looked up, return the cached result of the previous lookup
         *
         * @param parameterPath The path of the respective parameter in the timeline node description. If
         * the path is an array, nested object properties or array items will be looked up.
         * @param options See {@link GetParameterValueOptions}
         */
        getParameterValue(parameterPath, options = {}) {
          const {
            evaluateFunctions = true,
            recursive = true,
            cacheResult = true,
            replaceResult
          } = options;
          if (typeof parameterPath === "string") {
            parameterPath = [parameterPath];
          }
          let { doesPathExist, value: result } = this.parameterValueCache.lookup(parameterPath);
          if (!doesPathExist && recursive && this.parent) {
            result = this.parent.getParameterValue(parameterPath, options);
          }
          if (typeof result === "function" && evaluateFunctions) {
            result = result();
          }
          if (result instanceof TimelineVariable) {
            result = this.evaluateTimelineVariable(result);
          }
          if (typeof replaceResult === "function") {
            result = replaceResult(result);
          }
          if (cacheResult) {
            this.parameterValueCache.set(parameterPath, result);
          }
          return result;
        }
        /**
         * Retrieves and evaluates the `data` parameter. It is different from other parameters in that
         * it's properties may be functions that have to be evaluated, and parent nodes' data parameter
         * properties are merged into the result.
         */
        getDataParameter() {
          var _a;
          const data = this.getParameterValue("data", { recursive: false });
          return __spreadValues(__spreadValues({}, Object.fromEntries(
            typeof data === "object" ? Object.keys(data).map((key) => [key, this.getParameterValue(["data", key])]) : []
          )), (_a = this.parent) == null ? void 0 : _a.getDataParameter());
        }
      };
      var Trial = class extends TimelineNode {
        constructor(dependencies, description, parent) {
          var _a;
          super(dependencies);
          this.description = description;
          this.parent = parent;
          this.onLoad = () => {
            this.runParameterCallback("on_load");
            this.dependencies.runOnLoadExtensionCallbacks(this.getParameterValue("extensions"));
          };
          this.initializeParameterValueCache();
          this.trialObject = deepCopy(description);
          this.pluginClass = this.getParameterValue("type", { evaluateFunctions: false });
          this.pluginInfo = (_a = this.pluginClass) == null ? void 0 : _a["info"];
          if (!this.pluginInfo) {
            throw new Error(
              "Plugin not recognized. Please provide a valid plugin using the 'type' parameter."
            );
          }
          if (!("version" in this.pluginInfo) && !("data" in this.pluginInfo)) {
            console.warn(
              this.pluginInfo["name"],
              "is missing the 'version' and 'data' fields. Please update plugin as 'version' and 'data' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details."
            );
          } else if (!("version" in this.pluginInfo)) {
            console.warn(
              this.pluginInfo["name"],
              "is missing the 'version' field. Please update plugin as 'version' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details."
            );
          } else if (!("data" in this.pluginInfo)) {
            console.warn(
              this.pluginInfo["name"],
              "is missing the 'data' field. Please update plugin as 'data' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details."
            );
          }
        }
        run() {
          return __async(this, null, function* () {
            var _a;
            this.status = TimelineNodeStatus.RUNNING;
            this.processParameters();
            this.onStart();
            this.addCssClasses();
            this.pluginInstance = this.dependencies.instantiatePlugin(this.pluginClass);
            this.result = this.processResult(yield this.executeTrial());
            this.dependencies.onTrialResultAvailable(this);
            this.status = TimelineNodeStatus.COMPLETED;
            yield this.onFinish();
            this.removeCssClasses();
            const gap = (_a = this.getParameterValue("post_trial_gap")) != null ? _a : this.dependencies.getDefaultIti();
            if (gap !== 0 && this.dependencies.getSimulationMode() !== "data-only") {
              yield delay(gap);
            }
            this.resetParameterValueCache();
          });
        }
        executeTrial() {
          return __async(this, null, function* () {
            const trialPromise = this.dependencies.finishTrialPromise.get();
            let hasTrialPromiseBeenResolved = false;
            trialPromise.then(() => {
              hasTrialPromiseBeenResolved = true;
            });
            const { trialReturnValue, hasTrialBeenSimulated } = this.invokeTrialMethod();
            let result;
            if (isPromise(trialReturnValue)) {
              result = yield Promise.race([trialReturnValue, trialPromise]);
              if (hasTrialPromiseBeenResolved) {
                result = yield trialPromise;
              }
            } else {
              if (!hasTrialBeenSimulated) {
                this.onLoad();
              }
              result = yield trialPromise;
            }
            this.cleanupTrial();
            return result;
          });
        }
        invokeTrialMethod() {
          var _a;
          const globalSimulationMode = this.dependencies.getSimulationMode();
          if (globalSimulationMode && typeof this.pluginInstance.simulate === "function") {
            const simulationOptions = this.getSimulationOptions();
            if (simulationOptions.simulate !== false) {
              return {
                hasTrialBeenSimulated: true,
                trialReturnValue: this.pluginInstance.simulate(
                  this.trialObject,
                  (_a = simulationOptions.mode) != null ? _a : globalSimulationMode,
                  simulationOptions,
                  this.onLoad
                )
              };
            }
          }
          return {
            hasTrialBeenSimulated: false,
            trialReturnValue: this.pluginInstance.trial(
              this.dependencies.getDisplayElement(),
              this.trialObject,
              this.onLoad
            )
          };
        }
        /**
         * Cleanup the trial by removing the display element and removing event listeners
         */
        cleanupTrial() {
          this.dependencies.clearAllTimeouts();
          this.dependencies.getDisplayElement().innerHTML = "";
        }
        /**
         * Add the CSS classes from the `css_classes` parameter to the display element
         */
        addCssClasses() {
          const classes = this.getParameterValue("css_classes");
          const classList = this.dependencies.getDisplayElement().classList;
          if (typeof classes === "string") {
            classList.add(classes);
          } else if (Array.isArray(classes)) {
            classList.add(...classes);
          }
        }
        /**
         * Removes the provided css classes from the display element
         */
        removeCssClasses() {
          const classes = this.getParameterValue("css_classes");
          if (classes) {
            this.dependencies.getDisplayElement().classList.remove(...typeof classes === "string" ? [classes] : classes);
          }
        }
        processResult(result) {
          var _a;
          if (!result) {
            result = {};
          }
          for (const [parameterName, shouldParameterBeIncluded] of Object.entries(
            (_a = this.getParameterValue("save_trial_parameters")) != null ? _a : {}
          )) {
            if (this.pluginInfo.parameters[parameterName]) {
              if (shouldParameterBeIncluded && !Object.hasOwn(result, parameterName)) {
                let parameterValue = this.trialObject[parameterName];
                if (typeof parameterValue === "function") {
                  parameterValue = parameterValue.toString();
                }
                result[parameterName] = parameterValue;
              } else if (!shouldParameterBeIncluded && Object.hasOwn(result, parameterName)) {
                delete result[parameterName];
              }
            } else {
              console.warn(
                `Non-existent parameter "${parameterName}" specified in save_trial_parameters.`
              );
            }
          }
          result = __spreadProps(__spreadValues(__spreadValues({}, this.getDataParameter()), result), {
            trial_type: this.pluginInfo.name,
            trial_index: this.index,
            plugin_version: this.pluginInfo["version"] ? this.pluginInfo["version"] : null
          });
          const saveTimelineVariables = this.getParameterValue("save_timeline_variables");
          if (saveTimelineVariables === true) {
            result.timeline_variables = __spreadValues({}, this.parent.getAllTimelineVariables());
          } else if (Array.isArray(saveTimelineVariables)) {
            result.timeline_variables = Object.fromEntries(
              Object.entries(this.parent.getAllTimelineVariables()).filter(
                ([key, _]) => saveTimelineVariables.includes(key)
              )
            );
          }
          return result;
        }
        /**
         * Runs a callback function retrieved from a parameter value and returns its result.
         *
         * @param parameterName The name of the parameter to retrieve the callback function from.
         * @param callbackParameters The parameters (if any) to be passed to the callback function
         */
        runParameterCallback(parameterName, ...callbackParameters) {
          const callback = this.getParameterValue(parameterName, { evaluateFunctions: false });
          if (callback) {
            return callback(...callbackParameters);
          }
        }
        onStart() {
          this.dependencies.onTrialStart(this);
          this.runParameterCallback("on_start", this.trialObject);
          this.dependencies.runOnStartExtensionCallbacks(this.getParameterValue("extensions"));
        }
        onFinish() {
          return __async(this, null, function* () {
            const extensionResults = yield this.dependencies.runOnFinishExtensionCallbacks(
              this.getParameterValue("extensions")
            );
            Object.assign(this.result, extensionResults);
            yield Promise.resolve(this.runParameterCallback("on_finish", this.getResult()));
            this.dependencies.onTrialFinished(this);
          });
        }
        evaluateTimelineVariable(variable) {
          var _a;
          return (_a = this.parent) == null ? void 0 : _a.evaluateTimelineVariable(variable);
        }
        getParameterValue(parameterPath, options = {}) {
          if (timelineDescriptionKeys.includes(
            typeof parameterPath === "string" ? parameterPath : parameterPath[0]
          )) {
            options.recursive = false;
          }
          return super.getParameterValue(parameterPath, options);
        }
        /**
         * Retrieves and evaluates the `simulation_options` parameter, considering nested properties and
         * global simulation options.
         */
        getSimulationOptions() {
          const simulationOptions = this.getParameterValue("simulation_options", {
            replaceResult: (result = {}) => {
              var _a, _b;
              if (typeof result === "string") {
                const globalSimulationOptions = this.dependencies.getGlobalSimulationOptions();
                result = (_b = (_a = globalSimulationOptions[result]) != null ? _a : globalSimulationOptions["default"]) != null ? _b : {};
              }
              return deepMerge(
                deepCopy(this.dependencies.getGlobalSimulationOptions().default),
                deepCopy(result)
              );
            }
          });
          if (typeof simulationOptions === "undefined") {
            return {};
          }
          simulationOptions.mode = this.getParameterValue(["simulation_options", "mode"]);
          simulationOptions.simulate = this.getParameterValue(["simulation_options", "simulate"]);
          simulationOptions.data = this.getParameterValue(["simulation_options", "data"]);
          if (typeof simulationOptions.data === "object") {
            simulationOptions.data = Object.fromEntries(
              Object.keys(simulationOptions.data).map((key) => [
                key,
                this.getParameterValue(["simulation_options", "data", key])
              ])
            );
          }
          return simulationOptions;
        }
        /**
         * Returns the result object of this trial or `undefined` if the result is not yet known or the
         * `record_data` trial parameter is `false`.
         */
        getResult() {
          return this.getParameterValue("record_data") === false ? void 0 : this.result;
        }
        getResults() {
          const result = this.getResult();
          return result ? [result] : [];
        }
        /**
         * Checks that the parameters provided in the trial description align with the plugin's info
         * object, resolves missing parameter values from the parent timeline, resolves timeline variable
         * parameters, evaluates parameter functions if the expected parameter type is not `FUNCTION`, and
         * sets default values for optional parameters.
         */
        processParameters() {
          const assignParameterValues = (parameterObject, parameterInfos, parentParameterPath = []) => {
            for (const [parameterName, parameterConfig] of Object.entries(parameterInfos)) {
              const parameterPath = [...parentParameterPath, parameterName];
              let parameterValue = this.getParameterValue(parameterPath, {
                evaluateFunctions: parameterConfig.type !== ParameterType2.FUNCTION,
                replaceResult: (originalResult) => {
                  if (typeof originalResult === "undefined") {
                    if (typeof parameterConfig.default === "undefined") {
                      throw new Error(
                        `You must specify a value for the "${parameterPathArrayToString(
                        parameterPath
                      )}" parameter in the "${this.pluginInfo.name}" plugin.`
                      );
                    } else {
                      return parameterConfig.default;
                    }
                  } else {
                    return originalResult;
                  }
                }
              });
              if (parameterConfig.array && !Array.isArray(parameterValue)) {
                const parameterPathString = parameterPathArrayToString(parameterPath);
                throw new Error(
                  `A non-array value (\`${parameterValue}\`) was provided for the array parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin. Please make sure that "${parameterPathString}" is an array.`
                );
              }
              if (parameterConfig.type === ParameterType2.COMPLEX && parameterConfig.nested) {
                if (parameterConfig.array) {
                  parameterValue = parameterValue.map((_, arrayIndex) => {
                    const arrayElementPath = [...parameterPath, arrayIndex.toString()];
                    const arrayElementValue = this.getParameterValue(arrayElementPath);
                    assignParameterValues(arrayElementValue, parameterConfig.nested, arrayElementPath);
                    return arrayElementValue;
                  });
                } else {
                  assignParameterValues(parameterValue, parameterConfig.nested, parameterPath);
                }
              }
              parameterObject[parameterName] = parameterValue;
            }
          };
          const trialObject = deepCopy(this.description);
          assignParameterValues(trialObject, this.pluginInfo.parameters);
          this.trialObject = trialObject;
        }
        getLatestNode() {
          return this;
        }
        getActiveTimelineByName(name) {
          return void 0;
        }
      };
      var Timeline = class extends TimelineNode {
        constructor(dependencies, description, parent) {
          super(dependencies);
          this.parent = parent;
          this.children = [];
          this.shouldAbort = false;
          this.resumePromise = new PromiseWrapper();
          this.description = Array.isArray(description) ? { timeline: description } : description;
          this.initializeParameterValueCache();
        }
        run() {
          return __async(this, null, function* () {
            if (typeof this.index === "undefined") {
              this.index = 0;
            }
            this.status = TimelineNodeStatus.RUNNING;
            const { conditional_function, loop_function, repetitions = 1 } = this.description;
            let timelineVariableOrder = this.generateTimelineVariableOrder();
            this.setCurrentTimelineVariablesByIndex(timelineVariableOrder[0]);
            let isInitialTimelineVariableOrder = true;
            let currentLoopIterationResults;
            if (!conditional_function || conditional_function()) {
              this.onStart();
              for (let repetition = 0; repetition < repetitions; repetition++) {
                do {
                  currentLoopIterationResults = [];
                  if (isInitialTimelineVariableOrder) {
                    isInitialTimelineVariableOrder = false;
                  } else {
                    timelineVariableOrder = this.generateTimelineVariableOrder();
                  }
                  for (const timelineVariableIndex of timelineVariableOrder) {
                    this.setCurrentTimelineVariablesByIndex(timelineVariableIndex);
                    for (const childNodeDescription of this.description.timeline) {
                      const childNode = this.instantiateChildNode(childNodeDescription);
                      const previousChild = this.currentChild;
                      this.currentChild = childNode;
                      childNode.index = previousChild ? previousChild.getLatestNode().index + 1 : this.index;
                      yield childNode.run();
                      if (this.status === TimelineNodeStatus.PAUSED) {
                        yield this.resumePromise.get();
                      }
                      if (this.shouldAbort) {
                        this.status = TimelineNodeStatus.ABORTED;
                        return;
                      }
                      currentLoopIterationResults.push(...this.currentChild.getResults());
                    }
                  }
                } while (loop_function && loop_function(new DataCollection(currentLoopIterationResults)));
              }
              this.onFinish();
            }
            this.status = TimelineNodeStatus.COMPLETED;
          });
        }
        onStart() {
          if (this.description.on_timeline_start) {
            this.description.on_timeline_start();
          }
        }
        onFinish() {
          if (this.description.on_timeline_finish) {
            this.description.on_timeline_finish();
          }
        }
        pause() {
          if (this.currentChild instanceof Timeline) {
            this.currentChild.pause();
          }
          this.status = TimelineNodeStatus.PAUSED;
        }
        resume() {
          if (this.status == TimelineNodeStatus.PAUSED) {
            if (this.currentChild instanceof Timeline) {
              this.currentChild.resume();
            }
            this.status = TimelineNodeStatus.RUNNING;
            this.resumePromise.resolve();
          }
        }
        /**
         * If the timeline is running or paused, aborts the timeline after the current trial has completed
         */
        abort() {
          if (this.status === TimelineNodeStatus.RUNNING || this.status === TimelineNodeStatus.PAUSED) {
            if (this.currentChild instanceof Timeline) {
              this.currentChild.abort();
            }
            this.shouldAbort = true;
            if (this.status === TimelineNodeStatus.PAUSED) {
              this.resume();
            }
          }
        }
        instantiateChildNode(childDescription) {
          const newChildNode = isTimelineDescription(childDescription) ? new Timeline(this.dependencies, childDescription, this) : new Trial(this.dependencies, childDescription, this);
          this.children.push(newChildNode);
          return newChildNode;
        }
        setCurrentTimelineVariablesByIndex(index) {
          var _a;
          this.currentTimelineVariables = __spreadValues(__spreadValues({}, (_a = this.parent) == null ? void 0 : _a.getAllTimelineVariables()), index === null ? void 0 : this.description.timeline_variables[index]);
        }
        /**
         * If the timeline has timeline variables, returns the order of `timeline_variables` array indices
         * to be used, according to the timeline's `sample` setting. If the timeline has no timeline
         * variables, returns `[null]`.
         */
        generateTimelineVariableOrder() {
          var _a;
          const timelineVariableLength = (_a = this.description.timeline_variables) == null ? void 0 : _a.length;
          if (!timelineVariableLength) {
            return [null];
          }
          let order = [...Array(timelineVariableLength).keys()];
          const sample = this.description.sample;
          if (sample) {
            switch (sample.type) {
              case "custom":
                order = sample.fn(order);
                break;
              case "with-replacement":
                order = sampleWithReplacement(order, sample.size, sample.weights);
                break;
              case "without-replacement":
                order = sampleWithoutReplacement(order, sample.size);
                break;
              case "fixed-repetitions":
                order = repeat(order, sample.size);
                break;
              case "alternate-groups":
                order = shuffleAlternateGroups(sample.groups, sample.randomize_group_order);
                break;
              default:
                throw new Error(
                  `Invalid type "${// @ts-expect-error TS doesn't have a type for `sample` in this case
                sample.type}" in timeline sample parameters. Valid options for type are "custom", "with-replacement", "without-replacement", "fixed-repetitions", and "alternate-groups"`
                );
            }
          }
          if (this.description.randomize_order) {
            order = shuffle(order);
          }
          return order;
        }
        /**
         * Returns the current values of all timeline variables, including those from parent timelines
         */
        getAllTimelineVariables() {
          return this.currentTimelineVariables;
        }
        evaluateTimelineVariable(variable) {
          var _a;
          if ((_a = this.currentTimelineVariables) == null ? void 0 : _a.hasOwnProperty(variable.name)) {
            return this.currentTimelineVariables[variable.name];
          }
          throw new Error(`Timeline variable ${variable.name} not found.`);
        }
        getResults() {
          const results = [];
          for (const child of this.children) {
            if (child instanceof Trial) {
              const childResult = child.getResult();
              if (childResult) {
                results.push(childResult);
              }
            } else if (child instanceof Timeline) {
              results.push(...child.getResults());
            }
          }
          return results;
        }
        /**
         * Returns the naive progress of the timeline (as a fraction), without considering conditional or
         * loop functions.
         */
        getNaiveProgress() {
          if (this.status === TimelineNodeStatus.PENDING) {
            return 0;
          }
          const activeNode = this.getLatestNode();
          if (!activeNode) {
            return 1;
          }
          let completedTrials = activeNode.index;
          if (activeNode.getStatus() === TimelineNodeStatus.COMPLETED) {
            completedTrials++;
          }
          return Math.min(completedTrials / this.getNaiveTrialCount(), 1);
        }
        /**
         * Recursively computes the naive number of trials in the timeline, without considering
         * conditional or loop functions.
         */
        getNaiveTrialCount() {
          const getTrialCount = (description) => {
            var _a, _b, _c;
            const getTimelineArrayTrialCount = (description2) => description2.map((childDescription) => getTrialCount(childDescription)).reduce((a, b) => a + b);
            if (Array.isArray(description)) {
              return getTimelineArrayTrialCount(description);
            }
            if (isTrialDescription(description)) {
              return 1;
            }
            if (isTimelineDescription(description)) {
              let conditionCount = ((_a = description.timeline_variables) == null ? void 0 : _a.length) || 1;
              switch ((_b = description.sample) == null ? void 0 : _b.type) {
                case "with-replacement":
                case "without-replacement":
                  conditionCount = description.sample.size;
                  break;
                case "fixed-repetitions":
                  conditionCount *= description.sample.size;
                  break;
                case "alternate-groups":
                  conditionCount = description.sample.groups.map((group) => group.length).reduce((a, b) => a + b, 0);
                  break;
              }
              return getTimelineArrayTrialCount(description.timeline) * ((_c = description.repetitions) != null ? _c : 1) * conditionCount;
            }
            return 0;
          };
          return getTrialCount(this.description);
        }
        getLatestNode() {
          var _a, _b;
          return (_b = (_a = this.currentChild) == null ? void 0 : _a.getLatestNode()) != null ? _b : this;
        }
        getActiveTimelineByName(name) {
          var _a;
          if (this.description.name === name) {
            return this;
          }
          return (_a = this.currentChild) == null ? void 0 : _a.getActiveTimelineByName(name);
        }
      };
      var JsPsych = class {
        constructor(options) {
          this.turk = turk;
          this.randomization = randomization;
          this.utils = utils2;
          this.citation = {
            "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
            "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
          };
          this.options = {};
          this.isFileProtocolUsed = false;
          this.finishTrialPromise = new PromiseWrapper();
          this.timelineDependencies = {
            onTrialStart: (trial) => {
              this.options.on_trial_start(trial.trialObject);
              this.getDisplayContainerElement().focus();
              this.getDisplayElement().scrollTop = 0;
            },
            onTrialResultAvailable: (trial) => {
              const result = trial.getResult();
              if (result) {
                result.time_elapsed = this.getTotalTime();
                this.data.write(trial);
              }
            },
            onTrialFinished: (trial) => {
              const result = trial.getResult();
              this.options.on_trial_finish(result);
              if (result) {
                this.options.on_data_update(result);
              }
              if (this.progressBar && this.options.auto_update_progress_bar) {
                this.progressBar.progress = this.timeline.getNaiveProgress();
              }
            },
            runOnStartExtensionCallbacks: (extensionsConfiguration) => this.extensionManager.onStart(extensionsConfiguration),
            runOnLoadExtensionCallbacks: (extensionsConfiguration) => this.extensionManager.onLoad(extensionsConfiguration),
            runOnFinishExtensionCallbacks: (extensionsConfiguration) => this.extensionManager.onFinish(extensionsConfiguration),
            getSimulationMode: () => this.simulationMode,
            getGlobalSimulationOptions: () => this.simulationOptions,
            instantiatePlugin: (pluginClass) => new pluginClass(this),
            getDisplayElement: () => this.getDisplayElement(),
            getDefaultIti: () => this.getInitSettings().default_iti,
            finishTrialPromise: this.finishTrialPromise,
            clearAllTimeouts: () => this.pluginAPI.clearAllTimeouts()
          };
          this.extensionManagerDependencies = {
            instantiateExtension: (extensionClass) => new extensionClass(this)
          };
          this.dataDependencies = {
            getProgress: () => {
              var _a, _b;
              return {
                time: this.getTotalTime(),
                trial: (_b = (_a = this.timeline) == null ? void 0 : _a.getLatestNode().index) != null ? _b : 0
              };
            },
            onInteractionRecordAdded: (record) => {
              this.options.on_interaction_data_update(record);
            },
            getDisplayElement: () => this.getDisplayElement()
          };
          options = __spreadValues({
            display_element: void 0,
            on_finish: () => {
            },
            on_trial_start: () => {
            },
            on_trial_finish: () => {
            },
            on_data_update: () => {
            },
            on_interaction_data_update: () => {
            },
            on_close: () => {
            },
            use_webaudio: true,
            show_progress_bar: false,
            message_progress_bar: "Completion Progress",
            auto_update_progress_bar: true,
            default_iti: 0,
            minimum_valid_rt: 0,
            experiment_width: null,
            override_safe_mode: false,
            case_sensitive_responses: false,
            extensions: []
          }, options);
          this.options = options;
          autoBind2(this);
          if (window.location.protocol == "file:" && (options.override_safe_mode === false || typeof options.override_safe_mode === "undefined")) {
            options.use_webaudio = false;
            this.isFileProtocolUsed = true;
            console.warn(
              "jsPsych detected that it is running via the file:// protocol and not on a web server. To prevent issues with cross-origin requests, Web Audio and video preloading have been disabled. If you would like to override this setting, you can set 'override_safe_mode' to 'true' in initJsPsych. For more information, see: https://www.jspsych.org/overview/running-experiments"
            );
          }
          this.data = new JsPsychData(this.dataDependencies);
          this.pluginAPI = createJointPluginAPIObject(this);
          this.extensionManager = new ExtensionManager(
            this.extensionManagerDependencies,
            options.extensions
          );
        }
        version() {
          return version2;
        }
        /**
         * Starts an experiment using the provided timeline and returns a promise that is resolved when
         * the experiment is finished.
         *
         * @param timeline The timeline to be run
         */
        run(timeline) {
          return __async(this, null, function* () {
            if (typeof timeline === "undefined") {
              console.error("No timeline declared in jsPsych.run(). Cannot start experiment.");
            }
            if (timeline.length === 0) {
              console.error(
                "No trials have been added to the timeline (the timeline is an empty array). Cannot start experiment."
              );
            }
            this.timeline = new Timeline(this.timelineDependencies, timeline);
            yield this.prepareDom();
            yield this.extensionManager.initializeExtensions();
            document.documentElement.setAttribute("jspsych", "present");
            this.experimentStartTime = /* @__PURE__ */ new Date();
            yield this.timeline.run();
            yield Promise.resolve(this.options.on_finish(this.data.get()));
            if (this.endMessage) {
              this.getDisplayElement().innerHTML = this.endMessage;
            }
            this.data.removeInteractionListeners();
          });
        }
        simulate(_0) {
          return __async(this, arguments, function* (timeline, simulation_mode = "data-only", simulation_options = {}) {
            this.simulationMode = simulation_mode;
            this.simulationOptions = simulation_options;
            yield this.run(timeline);
          });
        }
        getProgress() {
          var _a, _b, _c, _d;
          return {
            total_trials: (_a = this.timeline) == null ? void 0 : _a.getNaiveTrialCount(),
            current_trial_global: (_c = (_b = this.timeline) == null ? void 0 : _b.getLatestNode().index) != null ? _c : 0,
            percent_complete: ((_d = this.timeline) == null ? void 0 : _d.getNaiveProgress()) * 100
          };
        }
        getStartTime() {
          return this.experimentStartTime;
        }
        getTotalTime() {
          if (!this.experimentStartTime) {
            return 0;
          }
          return (/* @__PURE__ */ new Date()).getTime() - this.experimentStartTime.getTime();
        }
        getDisplayElement() {
          return this.displayElement;
        }
        getDisplayContainerElement() {
          return this.displayContainerElement;
        }
        abortExperiment(endMessage, data = {}) {
          this.endMessage = endMessage;
          this.timeline.abort();
          this.pluginAPI.cancelAllKeyboardResponses();
          this.pluginAPI.clearAllTimeouts();
          this.finishTrial(data);
        }
        abortCurrentTimeline() {
          var _a;
          let currentTimeline = (_a = this.timeline) == null ? void 0 : _a.getLatestNode();
          if (currentTimeline instanceof Trial) {
            currentTimeline = currentTimeline.parent;
          }
          if (currentTimeline instanceof Timeline) {
            currentTimeline.abort();
          }
        }
        /**
         * Aborts a named timeline. The timeline must be currently running in order to abort it.
         *
         * @param name The name of the timeline to abort. Timelines can be given names by setting the `name` parameter in the description of the timeline.
         */
        abortTimelineByName(name) {
          var _a;
          const timeline = (_a = this.timeline) == null ? void 0 : _a.getActiveTimelineByName(name);
          if (timeline) {
            timeline.abort();
          }
        }
        getCurrentTrial() {
          var _a;
          const activeNode = (_a = this.timeline) == null ? void 0 : _a.getLatestNode();
          if (activeNode instanceof Trial) {
            return activeNode.description;
          }
          return void 0;
        }
        getInitSettings() {
          return this.options;
        }
        timelineVariable(variableName) {
          return new TimelineVariable(variableName);
        }
        evaluateTimelineVariable(variableName) {
          var _a, _b;
          return (_b = (_a = this.timeline) == null ? void 0 : _a.getLatestNode()) == null ? void 0 : _b.evaluateTimelineVariable(new TimelineVariable(variableName));
        }
        pauseExperiment() {
          var _a;
          (_a = this.timeline) == null ? void 0 : _a.pause();
        }
        resumeExperiment() {
          var _a;
          (_a = this.timeline) == null ? void 0 : _a.resume();
        }
        getSafeModeStatus() {
          return this.isFileProtocolUsed;
        }
        getTimeline() {
          var _a;
          return (_a = this.timeline) == null ? void 0 : _a.description.timeline;
        }
        /**
         * Prints out a string containing citations for the jsPsych library and all input plugins/extensions in the specified format.
         * If called without input, prints citation for jsPsych library.
         *
         * @param plugins The plugins/extensions to generate citations for. Always prints the citation for the jsPsych library at the top.
         * @param format The desired output citation format. Currently supports "apa" and "bibtex".
         * @returns String containing citations separated with newline character.
         */
        getCitations(plugins = [], format = "apa") {
          const formatOptions = ["apa", "bibtex"];
          format = format.toLowerCase();
          if (!Array.isArray(plugins)) {
            throw new Error("Expected array of plugins/extensions");
          } else if (!formatOptions.includes(format)) {
            throw new Error("Unsupported citation format");
          } else {
            const jsPsychCitation = this.citation[format];
            const citationSet = /* @__PURE__ */ new Set([jsPsychCitation]);
            for (const plugin of plugins) {
              try {
                const pluginCitation = plugin["info"].citations[format];
                citationSet.add(pluginCitation);
              } catch (e) {
                console.error(`${plugin} does not have citation in ${format} format.`);
              }
            }
            const citationList = Array.from(citationSet).join("\n");
            return citationList;
          }
        }
        get extensions() {
          var _a, _b;
          return (_b = (_a = this.extensionManager) == null ? void 0 : _a.extensions) != null ? _b : {};
        }
        prepareDom() {
          return __async(this, null, function* () {
            if (document.readyState !== "complete") {
              yield new Promise((resolve) => {
                window.addEventListener("load", resolve);
              });
            }
            const options = this.options;
            if (typeof options.display_element === "undefined") {
              let body = document.body;
              if (!body) {
                body = document.createElement("body");
                document.documentElement.appendChild(body);
              }
              document.querySelector("html").style.height = "100%";
              body.style.margin = "0px";
              body.style.height = "100%";
              body.style.width = "100%";
              options.display_element = body;
            } else {
              const display = options.display_element instanceof Element ? options.display_element : document.querySelector("#" + options.display_element);
              if (display === null) {
                console.error("The display_element specified in initJsPsych() does not exist in the DOM.");
              } else {
                options.display_element = display;
              }
            }
            const contentElement = document.createElement("div");
            contentElement.id = "jspsych-content";
            const contentWrapperElement = document.createElement("div");
            contentWrapperElement.className = "jspsych-content-wrapper";
            contentWrapperElement.appendChild(contentElement);
            this.displayContainerElement = options.display_element;
            this.displayContainerElement.appendChild(contentWrapperElement);
            this.displayElement = contentElement;
            if (options.experiment_width !== null) {
              this.displayElement.style.width = options.experiment_width + "px";
            }
            options.display_element.tabIndex = 0;
            this.displayContainerElement.classList.add("jspsych-display-element");
            this.displayElement.classList.add("jspsych-content");
            this.data.createInteractionListeners();
            window.addEventListener("beforeunload", options.on_close);
            if (this.options.show_progress_bar) {
              const progressBarContainer = document.createElement("div");
              progressBarContainer.id = "jspsych-progressbar-container";
              this.progressBar = new ProgressBar(progressBarContainer, this.options.message_progress_bar);
              this.getDisplayContainerElement().insertAdjacentElement("afterbegin", progressBarContainer);
            }
          });
        }
        finishTrial(data) {
          this.finishTrialPromise.resolve(data);
        }
      };
      var MigrationError2 = class extends Error {
        constructor(message = "The global `jsPsych` variable is no longer available in jsPsych v7.") {
          super(
            `${message} Please follow the migration guide at https://www.jspsych.org/7.0/support/migration-v7/ to update your experiment.`
          );
          this.name = "MigrationError";
        }
      };
      window.jsPsych = {
        get init() {
          throw new MigrationError2("`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.");
        },
        get data() {
          throw new MigrationError2();
        },
        get randomization() {
          throw new MigrationError2();
        },
        get turk() {
          throw new MigrationError2();
        },
        get pluginAPI() {
          throw new MigrationError2();
        },
        get ALL_KEYS() {
          throw new MigrationError2(
            'jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.'
          );
        },
        get NO_KEYS() {
          throw new MigrationError2('jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.');
        }
      };
      if (typeof window !== "undefined" && window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
        window.AudioContext = webkitAudioContext;
      }
      function initJsPsych(options) {
        const jsPsych2 = new JsPsych(options);
        const migrationMessages = {
          init: "`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.",
          ALL_KEYS: 'jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.',
          NO_KEYS: 'jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.',
          // Getter functions that were renamed
          currentTimelineNodeID: "`currentTimelineNodeID()` was renamed to `getCurrentTimelineNodeID()` in jsPsych v7.",
          progress: "`progress()` was renamed to `getProgress()` in jsPsych v7.",
          startTime: "`startTime()` was renamed to `getStartTime()` in jsPsych v7.",
          totalTime: "`totalTime()` was renamed to `getTotalTime()` in jsPsych v7.",
          currentTrial: "`currentTrial()` was renamed to `getCurrentTrial()` in jsPsych v7.",
          initSettings: "`initSettings()` was renamed to `getInitSettings()` in jsPsych v7.",
          allTimelineVariables: "`allTimelineVariables()` was renamed to `getAllTimelineVariables()` in jsPsych v7."
        };
        Object.defineProperties(
          jsPsych2,
          Object.fromEntries(
            Object.entries(migrationMessages).map(([key, message]) => [
              key,
              {
                get() {
                  throw new MigrationError2(message);
                }
              }
            ])
          )
        );
        return jsPsych2;
      }
      exports.DataCollection = DataCollection;
      exports.JsPsych = JsPsych;
      exports.ParameterType = ParameterType2;
      exports.initJsPsych = initJsPsych;
    }
  });

  // ../plugin-spatial-nback-ts/dist/index.cjs
  var require_dist2 = __commonJS({
    "../plugin-spatial-nback-ts/dist/index.cjs"(exports, module) {
      var jspsych = require_dist();
      var version2 = "0.0.1";
      var info2 = {
        name: "plugin-spatial-nback-ts",
        version: version2,
        parameters: {
          /** Number of rows in the spatial grid */
          rows: {
            type: jspsych.ParameterType.INT,
            default: 3
          },
          /** Number of columns in the spatial grid */
          cols: {
            type: jspsych.ParameterType.INT,
            default: 3
          },
          /** Size of each cell in pixels, this will affect size of whole grid also */
          cell_size: {
            type: jspsych.ParameterType.INT,
            default: 100
          },
          /** Row position of the stimulus (0-indexed) */
          stimulus_row: {
            type: jspsych.ParameterType.INT,
            default: 0
          },
          /** Column position of the stimulus (0-indexed) */
          stimulus_col: {
            type: jspsych.ParameterType.INT,
            default: 0
          },
          /** Whether this trial is a target trial */
          is_target: {
            type: jspsych.ParameterType.BOOL,
            default: false
          },
          /** Duration the stimulus is displayed (ms) */
          stimulus_duration: {
            type: jspsych.ParameterType.INT,
            default: 500
          },
          /** Inter-stimulus interval (ms) */
          // I recommend using feedback_duration as ISI if you have any type of feedback showing
          isi_duration: {
            type: jspsych.ParameterType.INT,
            default: 1e3
          },
          /** Duration of feedback display (ms) */
          feedback_duration: {
            type: jspsych.ParameterType.INT,
            default: 500
          },
          /** Whether to show feedback "Incorrect! (231ms)" after response */
          show_feedback_time: {
            type: jspsych.ParameterType.BOOL,
            default: true
          },
          /** Whether to show feedback border around the grid */
          show_feedback_border: {
            type: jspsych.ParameterType.BOOL,
            default: true
          },
          /** Whether to show feedback when there is no response */
          showFeedbackNoResponse: {
            type: jspsych.ParameterType.BOOL,
            default: true
          },
          /** Whether to wait for feedback duration before ending trial when no response */
          /** if using feedback_duration as interstimulus response, keep this true */
          feedbackWaitNoResponse: {
            type: jspsych.ParameterType.BOOL,
            default: true
          },
          /** Text for the response button */
          button_text: {
            type: jspsych.ParameterType.STRING,
            default: ""
          },
          /** Color of the stimulus square */
          stimulus_color: {
            type: jspsych.ParameterType.STRING,
            default: "#0066cc"
          },
          /** Color of correct feedback border */
          correct_color: {
            type: jspsych.ParameterType.STRING,
            default: "#00cc00"
          },
          /** Color of incorrect feedback border */
          incorrect_color: {
            type: jspsych.ParameterType.STRING,
            default: "#cc0000"
          },
          /** Instructions to display above the grid */
          instructions: {
            type: jspsych.ParameterType.STRING,
            default: "Click MATCH when this is a target trial."
          }
        },
        data: {
          /** Row position of the stimulus */
          stimulus_row: {
            type: jspsych.ParameterType.INT
          },
          /** Column position of the stimulus */
          stimulus_col: {
            type: jspsych.ParameterType.INT
          },
          /** Whether this trial was a target */
          is_target: {
            type: jspsych.ParameterType.BOOL
          },
          /** Whether participant responded */
          response: {
            type: jspsych.ParameterType.BOOL
          },
          /** Response time in milliseconds */
          response_time: {
            type: jspsych.ParameterType.INT
          },
          /** Whether the response was correct */
          correct: {
            type: jspsych.ParameterType.BOOL
          }
        },
        citations: {
          "apa": "A. Hunter Farhat A. Hunter Farhat, A. H. F. (2023). {title}. Journal for Open Source Software, 1(1), 1. https://doi.org/10.21105/joss.12345 ",
          "bibtex": "@article{Hunter2023title, 	author = {A. Hunter Farhat A. Hunter Farhat, A. Hunter Farhat}, 	journal = {Journal for Open Source Software}, 	doi = {10.21105/joss.12345}, 	issn = {1234-5678}, 	number = {1}, 	year = {2023}, 	month = {may 11}, 	pages = {1}, 	publisher = {Open Journals}, 	title = {\\textbraceleft{}title\\textbraceright{}}, 	url = {{linkToPublicationInJournal}}, 	volume = {1}, }  "
        }
      };
      var _SpatialNbackTsPlugin = class {
        constructor(jsPsych2) {
          this.jsPsych = jsPsych2;
        }
        trial(display_element, trial) {
          var _a, _b;
          let trial_start_time;
          let response_allowed = false;
          let response_given = false;
          let stimulus_timeout;
          let isi_timeout;
          let stimulus_hidden = false;
          const stimulus_row = (_a = trial.stimulus_row) != null ? _a : Math.floor(Math.random() * trial.rows);
          const stimulus_col = (_b = trial.stimulus_col) != null ? _b : Math.floor(Math.random() * trial.cols);
          const createDisplay = () => {
            let html = `
        <div id="nback-container" style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
          padding: 20px;
        ">`;
            html += `<div id="nback-instructions" style="
        position: absolute;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 520px;
        text-align: center;
        font-size: clamp(14px, 2vmin, 18px);
        z-index: 10;
      ">${trial.instructions}</div>`;
            const grid_size = Math.min(50, 80 / Math.max(trial.rows, trial.cols));
            const cell_size = `${grid_size / Math.max(trial.rows, trial.cols)}vmin`;
            html += `<div id="nback-grid" style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #000;
        box-sizing: border-box;
        display: inline-block;
        z-index: 5;
      ">`;
            for (let row = 0; row < trial.rows; row++) {
              html += '<div style="display: flex;">';
              for (let col = 0; col < trial.cols; col++) {
                html += `<div id="cell-${row}-${col}" style="
            width: ${cell_size};
            height: ${cell_size};
            border: 1px solid #ccc;
            background-color: white;
            box-sizing: border-box;
            min-width: ${Math.max(40, trial.cell_size * 0.5)}px;
            min-height: ${Math.max(40, trial.cell_size * 0.5)}px;
          "></div>`;
              }
              html += "</div>";
            }
            html += "</div>";
            html += `<div id="nback-button-container" style="
        position: absolute;
        bottom: 15vh;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      ">`;
            html += `<button id="nback-response-btn" style="
        font-size: clamp(18px, 3vmin, 26px);
        padding: clamp(18px, 2.5vmin, 30px) clamp(35px, 5vmin, 60px);
        background-color: #2196F3;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.2s;
      " disabled>${trial.button_text}</button>`;
            html += "</div>";
            html += `<div id="nback-feedback" style="
        position: absolute;
        bottom: 8vh;
        left: 50%;
        transform: translateX(-50%);
        height: 40px;
        font-size: clamp(14px, 2vmin, 20px);
        font-weight: bold;
        text-align: center;
        z-index: 10;
        width: 80%;
      "></div>`;
            html += "</div>";
            display_element.innerHTML = html;
            const button = document.getElementById("nback-response-btn");
            button.addEventListener("mouseenter", () => {
              if (!button.disabled) {
                button.style.backgroundColor = "#1976D2";
                button.style.transform = "translateY(-2px)";
              }
            });
            button.addEventListener("mouseleave", () => {
              button.style.backgroundColor = "#2196F3";
              button.style.transform = "translateY(0)";
            });
            button.addEventListener("click", handleResponse);
          };
          const startTrial = () => {
            const cell = document.getElementById(`cell-${stimulus_row}-${stimulus_col}`);
            cell.style.backgroundColor = trial.stimulus_color;
            response_allowed = true;
            trial_start_time = performance.now();
            stimulus_hidden = false;
            const responseButton = document.getElementById("nback-response-btn");
            responseButton.disabled = false;
            stimulus_timeout = window.setTimeout(() => {
              cell.style.backgroundColor = "white";
              stimulus_hidden = true;
              isi_timeout = window.setTimeout(() => {
                if (response_allowed && !response_given) {
                  handleNoResponse();
                }
              }, trial.isi_duration);
            }, trial.stimulus_duration);
          };
          const handleResponse = () => {
            if (!response_allowed || response_given)
              return;
            response_allowed = false;
            response_given = true;
            const response_time = performance.now() - trial_start_time;
            const is_correct = trial.is_target;
            clearTimeout(stimulus_timeout);
            clearTimeout(isi_timeout);
            showFeedback(is_correct, response_time, true);
          };
          const handleNoResponse = () => {
            if (!response_allowed || response_given)
              return;
            response_allowed = false;
            response_given = true;
            const is_correct = !trial.is_target;
            showFeedback(is_correct, null, false);
          };
          const showFeedback = (is_correct, response_time, made_response) => {
            if (!trial.show_feedback_time && !trial.show_feedback_border) {
              if (made_response && !stimulus_hidden) {
                const elapsed_time = performance.now() - trial_start_time;
                const remaining_stimulus_time = Math.max(0, trial.stimulus_duration - elapsed_time);
                const feedback_wait_time = remaining_stimulus_time + trial.feedback_duration;
                setTimeout(() => {
                  const cell = document.getElementById(`cell-${stimulus_row}-${stimulus_col}`);
                  cell.style.backgroundColor = "white";
                  setTimeout(() => {
                    endTrial(is_correct, response_time, made_response);
                  }, trial.isi_duration);
                }, feedback_wait_time);
              } else {
                endTrial(is_correct, response_time, made_response);
              }
              return;
            }
            const button = document.getElementById("nback-response-btn");
            button.disabled = true;
            button.style.opacity = "0.6";
            let total_feedback_duration;
            if (made_response && !stimulus_hidden) {
              const elapsed_time = performance.now() - trial_start_time;
              const remaining_stimulus_time = Math.max(0, trial.stimulus_duration - elapsed_time);
              total_feedback_duration = remaining_stimulus_time + trial.feedback_duration;
            } else if (made_response && stimulus_hidden) {
              const elapsed_time = performance.now() - trial_start_time;
              const isi_start_time = trial.stimulus_duration;
              const elapsed_isi_time = elapsed_time - isi_start_time;
              const remaining_isi_time = Math.max(0, trial.isi_duration - elapsed_isi_time);
              total_feedback_duration = remaining_isi_time + trial.feedback_duration;
            } else {
              if (trial.feedbackWaitNoResponse) {
                total_feedback_duration = trial.feedback_duration;
              } else {
                endTrial(is_correct, response_time, made_response);
                return;
              }
            }
            if (response_time === null && !trial.showFeedbackNoResponse) {
              if (trial.feedbackWaitNoResponse) {
                setTimeout(() => {
                  endTrial(is_correct, response_time, made_response);
                }, total_feedback_duration);
              } else {
                endTrial(is_correct, response_time, made_response);
              }
              return;
            }
            const grid = document.getElementById("nback-grid");
            const feedback_div = document.getElementById("nback-feedback");
            const stimulus_cell = document.getElementById(`cell-${stimulus_row}-${stimulus_col}`);
            if (trial.show_feedback_border) {
              grid.style.border = `6px solid ${is_correct ? trial.correct_color : trial.incorrect_color}`;
            }
            if (trial.show_feedback_time) {
              let feedback_text = is_correct ? "Correct!" : "Incorrect!";
              if (response_time !== null) {
                feedback_text += ` (${Math.round(response_time)}ms)`;
              }
              feedback_div.textContent = feedback_text;
              feedback_div.style.color = is_correct ? trial.correct_color : trial.incorrect_color;
            }
            if (made_response && !stimulus_hidden) {
              const elapsed_time = performance.now() - trial_start_time;
              const remaining_stimulus_time = Math.max(0, trial.stimulus_duration - elapsed_time);
              setTimeout(() => {
                stimulus_cell.style.backgroundColor = "white";
                setTimeout(() => {
                  endTrial(is_correct, response_time, made_response);
                }, trial.feedback_duration + trial.isi_duration);
              }, remaining_stimulus_time);
            } else if (made_response && stimulus_hidden) {
              const elapsed_time = performance.now() - trial_start_time;
              const isi_start_time = trial.stimulus_duration;
              const elapsed_isi_time = elapsed_time - isi_start_time;
              const remaining_isi_time = Math.max(0, trial.isi_duration - elapsed_isi_time);
              setTimeout(() => {
                endTrial(is_correct, response_time, made_response);
              }, remaining_isi_time + trial.feedback_duration);
            } else {
              setTimeout(() => {
                endTrial(is_correct, response_time, made_response);
              }, total_feedback_duration);
            }
          };
          const endTrial = (is_correct, response_time, made_response) => {
            const trial_data = {
              stimulus_row,
              stimulus_col,
              is_target: trial.is_target,
              response: made_response,
              response_time,
              correct: is_correct
            };
            display_element.innerHTML = "";
            this.jsPsych.finishTrial(trial_data);
          };
          createDisplay();
          startTrial();
        }
      };
      var SpatialNbackTsPlugin = _SpatialNbackTsPlugin;
      (() => {
        _SpatialNbackTsPlugin.info = info2;
      })();
      module.exports = SpatialNbackTsPlugin;
    }
  });

  // node_modules/auto-bind/index.js
  var require_auto_bind2 = __commonJS({
    "node_modules/auto-bind/index.js"(exports, module) {
      var getAllProperties = (object) => {
        const properties = /* @__PURE__ */ new Set();
        do {
          for (const key of Reflect.ownKeys(object)) {
            properties.add([object, key]);
          }
        } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
        return properties;
      };
      module.exports = (self2, { include, exclude } = {}) => {
        const filter = (key) => {
          const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
          if (include) {
            return include.some(match);
          }
          if (exclude) {
            return !exclude.some(match);
          }
          return true;
        };
        for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
          if (key === "constructor" || !filter(key)) {
            continue;
          }
          const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
          if (descriptor && typeof descriptor.value === "function") {
            self2[key] = self2[key].bind(self2);
          }
        }
        return self2;
      };
    }
  });

  // node_modules/seedrandom/lib/alea.js
  var require_alea2 = __commonJS({
    "node_modules/seedrandom/lib/alea.js"(exports, module) {
      (function(global, module2, define2) {
        function Alea(seed) {
          var me = this, mash = Mash();
          me.next = function() {
            var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
          };
          me.c = 1;
          me.s0 = mash(" ");
          me.s1 = mash(" ");
          me.s2 = mash(" ");
          me.s0 -= mash(seed);
          if (me.s0 < 0) {
            me.s0 += 1;
          }
          me.s1 -= mash(seed);
          if (me.s1 < 0) {
            me.s1 += 1;
          }
          me.s2 -= mash(seed);
          if (me.s2 < 0) {
            me.s2 += 1;
          }
          mash = null;
        }
        function copy(f, t) {
          t.c = f.c;
          t.s0 = f.s0;
          t.s1 = f.s1;
          t.s2 = f.s2;
          return t;
        }
        function impl(seed, opts) {
          var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
          prng.int32 = function() {
            return xg.next() * 4294967296 | 0;
          };
          prng.double = function() {
            return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
          };
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        function Mash() {
          var n = 4022871197;
          var mash = function(data) {
            data = String(data);
            for (var i = 0; i < data.length; i++) {
              n += data.charCodeAt(i);
              var h = 0.02519603282416938 * n;
              n = h >>> 0;
              h -= n;
              h *= n;
              n = h >>> 0;
              h -= n;
              n += h * 4294967296;
            }
            return (n >>> 0) * 23283064365386963e-26;
          };
          return mash;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.alea = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/lib/xor128.js
  var require_xor1282 = __commonJS({
    "node_modules/seedrandom/lib/xor128.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.x = 0;
          me.y = 0;
          me.z = 0;
          me.w = 0;
          me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
          };
          if (seed === (seed | 0)) {
            me.x = seed;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 64; k++) {
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
          }
        }
        function copy(f, t) {
          t.x = f.x;
          t.y = f.y;
          t.z = f.z;
          t.w = f.w;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xor128 = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/lib/xorwow.js
  var require_xorwow2 = __commonJS({
    "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
          };
          me.x = 0;
          me.y = 0;
          me.z = 0;
          me.w = 0;
          me.v = 0;
          if (seed === (seed | 0)) {
            me.x = seed;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 64; k++) {
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) {
              me.d = me.x << 10 ^ me.x >>> 4;
            }
            me.next();
          }
        }
        function copy(f, t) {
          t.x = f.x;
          t.y = f.y;
          t.z = f.z;
          t.w = f.w;
          t.v = f.v;
          t.d = f.d;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xorwow = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/lib/xorshift7.js
  var require_xorshift72 = __commonJS({
    "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this;
          me.next = function() {
            var X = me.x, i = me.i, t, v;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me.i = i + 1 & 7;
            return v;
          };
          function init(me2, seed2) {
            var j, X = [];
            if (seed2 === (seed2 | 0)) {
              X[0] = seed2;
            } else {
              seed2 = "" + seed2;
              for (j = 0; j < seed2.length; ++j) {
                X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
              }
            }
            while (X.length < 8)
              X.push(0);
            for (j = 0; j < 8 && X[j] === 0; ++j)
              ;
            if (j == 8)
              X[7] = -1;
            else
              X[j];
            me2.x = X;
            me2.i = 0;
            for (j = 256; j > 0; --j) {
              me2.next();
            }
          }
          init(me, seed);
        }
        function copy(f, t) {
          t.x = f.x.slice();
          t.i = f.i;
          return t;
        }
        function impl(seed, opts) {
          if (seed == null)
            seed = +/* @__PURE__ */ new Date();
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (state.x)
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xorshift7 = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/lib/xor4096.js
  var require_xor40962 = __commonJS({
    "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this;
          me.next = function() {
            var w = me.w, X = me.X, i = me.i, t, v;
            me.w = w = w + 1640531527 | 0;
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            v = X[i] = v ^ t;
            me.i = i;
            return v + (w ^ w >>> 16) | 0;
          };
          function init(me2, seed2) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed2 === (seed2 | 0)) {
              v = seed2;
              seed2 = null;
            } else {
              seed2 = seed2 + "\0";
              v = 0;
              limit = Math.max(limit, seed2.length);
            }
            for (i = 0, j = -32; j < limit; ++j) {
              if (seed2)
                v ^= seed2.charCodeAt((j + 32) % seed2.length);
              if (j === 0)
                w = v;
              v ^= v << 10;
              v ^= v >>> 15;
              v ^= v << 4;
              v ^= v >>> 13;
              if (j >= 0) {
                w = w + 1640531527 | 0;
                t = X[j & 127] ^= v + w;
                i = 0 == t ? i + 1 : 0;
              }
            }
            if (i >= 128) {
              X[(seed2 && seed2.length || 0) & 127] = -1;
            }
            i = 127;
            for (j = 4 * 128; j > 0; --j) {
              v = X[i + 34 & 127];
              t = X[i = i + 1 & 127];
              v ^= v << 13;
              t ^= t << 17;
              v ^= v >>> 15;
              t ^= t >>> 12;
              X[i] = v ^ t;
            }
            me2.w = w;
            me2.X = X;
            me2.i = i;
          }
          init(me, seed);
        }
        function copy(f, t) {
          t.i = f.i;
          t.w = f.w;
          t.X = f.X.slice();
          return t;
        }
        function impl(seed, opts) {
          if (seed == null)
            seed = +/* @__PURE__ */ new Date();
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (state.X)
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.xor4096 = impl;
        }
      })(
        exports,
        // window object or global
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/lib/tychei.js
  var require_tychei2 = __commonJS({
    "node_modules/seedrandom/lib/tychei.js"(exports, module) {
      (function(global, module2, define2) {
        function XorGen(seed) {
          var me = this, strseed = "";
          me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
          };
          me.a = 0;
          me.b = 0;
          me.c = 2654435769 | 0;
          me.d = 1367130551;
          if (seed === Math.floor(seed)) {
            me.a = seed / 4294967296 | 0;
            me.b = seed | 0;
          } else {
            strseed += seed;
          }
          for (var k = 0; k < strseed.length + 20; k++) {
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
          }
        }
        function copy(f, t) {
          t.a = f.a;
          t.b = f.b;
          t.c = f.c;
          t.d = f.d;
          return t;
        }
        function impl(seed, opts) {
          var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
          };
          prng.double = function() {
            do {
              var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
            } while (result === 0);
            return result;
          };
          prng.int32 = xg.next;
          prng.quick = prng;
          if (state) {
            if (typeof state == "object")
              copy(state, xg);
            prng.state = function() {
              return copy(xg, {});
            };
          }
          return prng;
        }
        if (module2 && module2.exports) {
          module2.exports = impl;
        } else if (define2 && define2.amd) {
          define2(function() {
            return impl;
          });
        } else {
          this.tychei = impl;
        }
      })(
        exports,
        typeof module == "object" && module,
        // present in node.js
        typeof define == "function" && define
        // present with an AMD loader
      );
    }
  });

  // node_modules/seedrandom/seedrandom.js
  var require_seedrandom3 = __commonJS({
    "node_modules/seedrandom/seedrandom.js"(exports, module) {
      (function(global, pool, math) {
        var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
        function seedrandom2(seed, options, callback) {
          var key = [];
          options = options == true ? { entropy: true } : options || {};
          var shortseed = mixkey(flatten(
            options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
            3
          ), key);
          var arc4 = new ARC4(key);
          var prng = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0;
            while (n < significance) {
              n = (n + x) * width;
              d *= width;
              x = arc4.g(1);
            }
            while (n >= overflow) {
              n /= 2;
              d /= 2;
              x >>>= 1;
            }
            return (n + x) / d;
          };
          prng.int32 = function() {
            return arc4.g(4) | 0;
          };
          prng.quick = function() {
            return arc4.g(4) / 4294967296;
          };
          prng.double = prng;
          mixkey(tostring(arc4.S), pool);
          return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
            if (state) {
              if (state.S) {
                copy(state, arc4);
              }
              prng2.state = function() {
                return copy(arc4, {});
              };
            }
            if (is_math_call) {
              math[rngname] = prng2;
              return seed2;
            } else
              return prng2;
          })(
            prng,
            shortseed,
            "global" in options ? options.global : this == math,
            options.state
          );
        }
        function ARC4(key) {
          var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
          if (!keylen) {
            key = [keylen++];
          }
          while (i < width) {
            s[i] = i++;
          }
          for (i = 0; i < width; i++) {
            s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
            s[j] = t;
          }
          (me.g = function(count) {
            var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
            while (count--) {
              t2 = s2[i2 = mask & i2 + 1];
              r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
            }
            me.i = i2;
            me.j = j2;
            return r;
          })(width);
        }
        function copy(f, t) {
          t.i = f.i;
          t.j = f.j;
          t.S = f.S.slice();
          return t;
        }
        function flatten(obj, depth) {
          var result = [], typ = typeof obj, prop;
          if (depth && typ == "object") {
            for (prop in obj) {
              try {
                result.push(flatten(obj[prop], depth - 1));
              } catch (e) {
              }
            }
          }
          return result.length ? result : typ == "string" ? obj : obj + "\0";
        }
        function mixkey(seed, key) {
          var stringseed = seed + "", smear, j = 0;
          while (j < stringseed.length) {
            key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
          }
          return tostring(key);
        }
        function autoseed() {
          try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) {
              out = out(width);
            } else {
              out = new Uint8Array(width);
              (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
          } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
          }
        }
        function tostring(a) {
          return String.fromCharCode.apply(0, a);
        }
        mixkey(math.random(), pool);
        if (typeof module == "object" && module.exports) {
          module.exports = seedrandom2;
          try {
            nodecrypto = __require("crypto");
          } catch (ex) {
          }
        } else if (typeof define == "function" && define.amd) {
          define(function() {
            return seedrandom2;
          });
        } else {
          math["seed" + rngname] = seedrandom2;
        }
      })(
        // global: `self` in browsers (including strict mode and web workers),
        // otherwise `this` in Node and other environments
        typeof self !== "undefined" ? self : exports,
        [],
        // pool: entropy pool starts empty
        Math
        // math: package containing random, pow, and seedrandom
      );
    }
  });

  // node_modules/seedrandom/index.js
  var require_seedrandom4 = __commonJS({
    "node_modules/seedrandom/index.js"(exports, module) {
      var alea = require_alea2();
      var xor128 = require_xor1282();
      var xorwow = require_xorwow2();
      var xorshift7 = require_xorshift72();
      var xor4096 = require_xor40962();
      var tychei = require_tychei2();
      var sr = require_seedrandom3();
      sr.alea = alea;
      sr.xor128 = xor128;
      sr.xorwow = xorwow;
      sr.xorshift7 = xorshift7;
      sr.xor4096 = xor4096;
      sr.tychei = tychei;
      module.exports = sr;
    }
  });

  // node_modules/random-words/index.js
  var require_random_words2 = __commonJS({
    "node_modules/random-words/index.js"(exports, module) {
      var seedrandom2 = require_seedrandom4();
      var wordList = [
        // Borrowed from xkcd password generator which borrowed it from wherever
        "ability",
        "able",
        "aboard",
        "about",
        "above",
        "accept",
        "accident",
        "according",
        "account",
        "accurate",
        "acres",
        "across",
        "act",
        "action",
        "active",
        "activity",
        "actual",
        "actually",
        "add",
        "addition",
        "additional",
        "adjective",
        "adult",
        "adventure",
        "advice",
        "affect",
        "afraid",
        "after",
        "afternoon",
        "again",
        "against",
        "age",
        "ago",
        "agree",
        "ahead",
        "aid",
        "air",
        "airplane",
        "alike",
        "alive",
        "all",
        "allow",
        "almost",
        "alone",
        "along",
        "aloud",
        "alphabet",
        "already",
        "also",
        "although",
        "am",
        "among",
        "amount",
        "ancient",
        "angle",
        "angry",
        "animal",
        "announced",
        "another",
        "answer",
        "ants",
        "any",
        "anybody",
        "anyone",
        "anything",
        "anyway",
        "anywhere",
        "apart",
        "apartment",
        "appearance",
        "apple",
        "applied",
        "appropriate",
        "are",
        "area",
        "arm",
        "army",
        "around",
        "arrange",
        "arrangement",
        "arrive",
        "arrow",
        "art",
        "article",
        "as",
        "aside",
        "ask",
        "asleep",
        "at",
        "ate",
        "atmosphere",
        "atom",
        "atomic",
        "attached",
        "attack",
        "attempt",
        "attention",
        "audience",
        "author",
        "automobile",
        "available",
        "average",
        "avoid",
        "aware",
        "away",
        "baby",
        "back",
        "bad",
        "badly",
        "bag",
        "balance",
        "ball",
        "balloon",
        "band",
        "bank",
        "bar",
        "bare",
        "bark",
        "barn",
        "base",
        "baseball",
        "basic",
        "basis",
        "basket",
        "bat",
        "battle",
        "be",
        "bean",
        "bear",
        "beat",
        "beautiful",
        "beauty",
        "became",
        "because",
        "become",
        "becoming",
        "bee",
        "been",
        "before",
        "began",
        "beginning",
        "begun",
        "behavior",
        "behind",
        "being",
        "believed",
        "bell",
        "belong",
        "below",
        "belt",
        "bend",
        "beneath",
        "bent",
        "beside",
        "best",
        "bet",
        "better",
        "between",
        "beyond",
        "bicycle",
        "bigger",
        "biggest",
        "bill",
        "birds",
        "birth",
        "birthday",
        "bit",
        "bite",
        "black",
        "blank",
        "blanket",
        "blew",
        "blind",
        "block",
        "blood",
        "blow",
        "blue",
        "board",
        "boat",
        "body",
        "bone",
        "book",
        "border",
        "born",
        "both",
        "bottle",
        "bottom",
        "bound",
        "bow",
        "bowl",
        "box",
        "boy",
        "brain",
        "branch",
        "brass",
        "brave",
        "bread",
        "break",
        "breakfast",
        "breath",
        "breathe",
        "breathing",
        "breeze",
        "brick",
        "bridge",
        "brief",
        "bright",
        "bring",
        "broad",
        "broke",
        "broken",
        "brother",
        "brought",
        "brown",
        "brush",
        "buffalo",
        "build",
        "building",
        "built",
        "buried",
        "burn",
        "burst",
        "bus",
        "bush",
        "business",
        "busy",
        "but",
        "butter",
        "buy",
        "by",
        "cabin",
        "cage",
        "cake",
        "call",
        "calm",
        "came",
        "camera",
        "camp",
        "can",
        "canal",
        "cannot",
        "cap",
        "capital",
        "captain",
        "captured",
        "car",
        "carbon",
        "card",
        "care",
        "careful",
        "carefully",
        "carried",
        "carry",
        "case",
        "cast",
        "castle",
        "cat",
        "catch",
        "cattle",
        "caught",
        "cause",
        "cave",
        "cell",
        "cent",
        "center",
        "central",
        "century",
        "certain",
        "certainly",
        "chain",
        "chair",
        "chamber",
        "chance",
        "change",
        "changing",
        "chapter",
        "character",
        "characteristic",
        "charge",
        "chart",
        "check",
        "cheese",
        "chemical",
        "chest",
        "chicken",
        "chief",
        "child",
        "children",
        "choice",
        "choose",
        "chose",
        "chosen",
        "church",
        "circle",
        "circus",
        "citizen",
        "city",
        "class",
        "classroom",
        "claws",
        "clay",
        "clean",
        "clear",
        "clearly",
        "climate",
        "climb",
        "clock",
        "close",
        "closely",
        "closer",
        "cloth",
        "clothes",
        "clothing",
        "cloud",
        "club",
        "coach",
        "coal",
        "coast",
        "coat",
        "coffee",
        "cold",
        "collect",
        "college",
        "colony",
        "color",
        "column",
        "combination",
        "combine",
        "come",
        "comfortable",
        "coming",
        "command",
        "common",
        "community",
        "company",
        "compare",
        "compass",
        "complete",
        "completely",
        "complex",
        "composed",
        "composition",
        "compound",
        "concerned",
        "condition",
        "congress",
        "connected",
        "consider",
        "consist",
        "consonant",
        "constantly",
        "construction",
        "contain",
        "continent",
        "continued",
        "contrast",
        "control",
        "conversation",
        "cook",
        "cookies",
        "cool",
        "copper",
        "copy",
        "corn",
        "corner",
        "correct",
        "correctly",
        "cost",
        "cotton",
        "could",
        "count",
        "country",
        "couple",
        "courage",
        "course",
        "court",
        "cover",
        "cow",
        "cowboy",
        "crack",
        "cream",
        "create",
        "creature",
        "crew",
        "crop",
        "cross",
        "crowd",
        "cry",
        "cup",
        "curious",
        "current",
        "curve",
        "customs",
        "cut",
        "cutting",
        "daily",
        "damage",
        "dance",
        "danger",
        "dangerous",
        "dark",
        "darkness",
        "date",
        "daughter",
        "dawn",
        "day",
        "dead",
        "deal",
        "dear",
        "death",
        "decide",
        "declared",
        "deep",
        "deeply",
        "deer",
        "definition",
        "degree",
        "depend",
        "depth",
        "describe",
        "desert",
        "design",
        "desk",
        "detail",
        "determine",
        "develop",
        "development",
        "diagram",
        "diameter",
        "did",
        "die",
        "differ",
        "difference",
        "different",
        "difficult",
        "difficulty",
        "dig",
        "dinner",
        "direct",
        "direction",
        "directly",
        "dirt",
        "dirty",
        "disappear",
        "discover",
        "discovery",
        "discuss",
        "discussion",
        "disease",
        "dish",
        "distance",
        "distant",
        "divide",
        "division",
        "do",
        "doctor",
        "does",
        "dog",
        "doing",
        "doll",
        "dollar",
        "done",
        "donkey",
        "door",
        "dot",
        "double",
        "doubt",
        "down",
        "dozen",
        "draw",
        "drawn",
        "dream",
        "dress",
        "drew",
        "dried",
        "drink",
        "drive",
        "driven",
        "driver",
        "driving",
        "drop",
        "dropped",
        "drove",
        "dry",
        "duck",
        "due",
        "dug",
        "dull",
        "during",
        "dust",
        "duty",
        "each",
        "eager",
        "ear",
        "earlier",
        "early",
        "earn",
        "earth",
        "easier",
        "easily",
        "east",
        "easy",
        "eat",
        "eaten",
        "edge",
        "education",
        "effect",
        "effort",
        "egg",
        "eight",
        "either",
        "electric",
        "electricity",
        "element",
        "elephant",
        "eleven",
        "else",
        "empty",
        "end",
        "enemy",
        "energy",
        "engine",
        "engineer",
        "enjoy",
        "enough",
        "enter",
        "entire",
        "entirely",
        "environment",
        "equal",
        "equally",
        "equator",
        "equipment",
        "escape",
        "especially",
        "essential",
        "establish",
        "even",
        "evening",
        "event",
        "eventually",
        "ever",
        "every",
        "everybody",
        "everyone",
        "everything",
        "everywhere",
        "evidence",
        "exact",
        "exactly",
        "examine",
        "example",
        "excellent",
        "except",
        "exchange",
        "excited",
        "excitement",
        "exciting",
        "exclaimed",
        "exercise",
        "exist",
        "expect",
        "experience",
        "experiment",
        "explain",
        "explanation",
        "explore",
        "express",
        "expression",
        "extra",
        "eye",
        "face",
        "facing",
        "fact",
        "factor",
        "factory",
        "failed",
        "fair",
        "fairly",
        "fall",
        "fallen",
        "familiar",
        "family",
        "famous",
        "far",
        "farm",
        "farmer",
        "farther",
        "fast",
        "fastened",
        "faster",
        "fat",
        "father",
        "favorite",
        "fear",
        "feathers",
        "feature",
        "fed",
        "feed",
        "feel",
        "feet",
        "fell",
        "fellow",
        "felt",
        "fence",
        "few",
        "fewer",
        "field",
        "fierce",
        "fifteen",
        "fifth",
        "fifty",
        "fight",
        "fighting",
        "figure",
        "fill",
        "film",
        "final",
        "finally",
        "find",
        "fine",
        "finest",
        "finger",
        "finish",
        "fire",
        "fireplace",
        "firm",
        "first",
        "fish",
        "five",
        "fix",
        "flag",
        "flame",
        "flat",
        "flew",
        "flies",
        "flight",
        "floating",
        "floor",
        "flow",
        "flower",
        "fly",
        "fog",
        "folks",
        "follow",
        "food",
        "foot",
        "football",
        "for",
        "force",
        "foreign",
        "forest",
        "forget",
        "forgot",
        "forgotten",
        "form",
        "former",
        "fort",
        "forth",
        "forty",
        "forward",
        "fought",
        "found",
        "four",
        "fourth",
        "fox",
        "frame",
        "free",
        "freedom",
        "frequently",
        "fresh",
        "friend",
        "friendly",
        "frighten",
        "frog",
        "from",
        "front",
        "frozen",
        "fruit",
        "fuel",
        "full",
        "fully",
        "fun",
        "function",
        "funny",
        "fur",
        "furniture",
        "further",
        "future",
        "gain",
        "game",
        "garage",
        "garden",
        "gas",
        "gasoline",
        "gate",
        "gather",
        "gave",
        "general",
        "generally",
        "gentle",
        "gently",
        "get",
        "getting",
        "giant",
        "gift",
        "girl",
        "give",
        "given",
        "giving",
        "glad",
        "glass",
        "globe",
        "go",
        "goes",
        "gold",
        "golden",
        "gone",
        "good",
        "goose",
        "got",
        "government",
        "grabbed",
        "grade",
        "gradually",
        "grain",
        "grandfather",
        "grandmother",
        "graph",
        "grass",
        "gravity",
        "gray",
        "great",
        "greater",
        "greatest",
        "greatly",
        "green",
        "grew",
        "ground",
        "group",
        "grow",
        "grown",
        "growth",
        "guard",
        "guess",
        "guide",
        "gulf",
        "gun",
        "habit",
        "had",
        "hair",
        "half",
        "halfway",
        "hall",
        "hand",
        "handle",
        "handsome",
        "hang",
        "happen",
        "happened",
        "happily",
        "happy",
        "harbor",
        "hard",
        "harder",
        "hardly",
        "has",
        "hat",
        "have",
        "having",
        "hay",
        "he",
        "headed",
        "heading",
        "health",
        "heard",
        "hearing",
        "heart",
        "heat",
        "heavy",
        "height",
        "held",
        "hello",
        "help",
        "helpful",
        "her",
        "herd",
        "here",
        "herself",
        "hidden",
        "hide",
        "high",
        "higher",
        "highest",
        "highway",
        "hill",
        "him",
        "himself",
        "his",
        "history",
        "hit",
        "hold",
        "hole",
        "hollow",
        "home",
        "honor",
        "hope",
        "horn",
        "horse",
        "hospital",
        "hot",
        "hour",
        "house",
        "how",
        "however",
        "huge",
        "human",
        "hundred",
        "hung",
        "hungry",
        "hunt",
        "hunter",
        "hurried",
        "hurry",
        "hurt",
        "husband",
        "ice",
        "idea",
        "identity",
        "if",
        "ill",
        "image",
        "imagine",
        "immediately",
        "importance",
        "important",
        "impossible",
        "improve",
        "in",
        "inch",
        "include",
        "including",
        "income",
        "increase",
        "indeed",
        "independent",
        "indicate",
        "individual",
        "industrial",
        "industry",
        "influence",
        "information",
        "inside",
        "instance",
        "instant",
        "instead",
        "instrument",
        "interest",
        "interior",
        "into",
        "introduced",
        "invented",
        "involved",
        "iron",
        "is",
        "island",
        "it",
        "its",
        "itself",
        "jack",
        "jar",
        "jet",
        "job",
        "join",
        "joined",
        "journey",
        "joy",
        "judge",
        "jump",
        "jungle",
        "just",
        "keep",
        "kept",
        "key",
        "kids",
        "kill",
        "kind",
        "kitchen",
        "knew",
        "knife",
        "know",
        "knowledge",
        "known",
        "label",
        "labor",
        "lack",
        "lady",
        "laid",
        "lake",
        "lamp",
        "land",
        "language",
        "large",
        "larger",
        "largest",
        "last",
        "late",
        "later",
        "laugh",
        "law",
        "lay",
        "layers",
        "lead",
        "leader",
        "leaf",
        "learn",
        "least",
        "leather",
        "leave",
        "leaving",
        "led",
        "left",
        "leg",
        "length",
        "lesson",
        "let",
        "letter",
        "level",
        "library",
        "lie",
        "life",
        "lift",
        "light",
        "like",
        "likely",
        "limited",
        "line",
        "lion",
        "lips",
        "liquid",
        "list",
        "listen",
        "little",
        "live",
        "living",
        "load",
        "local",
        "locate",
        "location",
        "log",
        "lonely",
        "long",
        "longer",
        "look",
        "loose",
        "lose",
        "loss",
        "lost",
        "lot",
        "loud",
        "love",
        "lovely",
        "low",
        "lower",
        "luck",
        "lucky",
        "lunch",
        "lungs",
        "lying",
        "machine",
        "machinery",
        "mad",
        "made",
        "magic",
        "magnet",
        "mail",
        "main",
        "mainly",
        "major",
        "make",
        "making",
        "man",
        "managed",
        "manner",
        "manufacturing",
        "many",
        "map",
        "mark",
        "market",
        "married",
        "mass",
        "massage",
        "master",
        "material",
        "mathematics",
        "matter",
        "may",
        "maybe",
        "me",
        "meal",
        "mean",
        "means",
        "meant",
        "measure",
        "meat",
        "medicine",
        "meet",
        "melted",
        "member",
        "memory",
        "men",
        "mental",
        "merely",
        "met",
        "metal",
        "method",
        "mice",
        "middle",
        "might",
        "mighty",
        "mile",
        "military",
        "milk",
        "mill",
        "mind",
        "mine",
        "minerals",
        "minute",
        "mirror",
        "missing",
        "mission",
        "mistake",
        "mix",
        "mixture",
        "model",
        "modern",
        "molecular",
        "moment",
        "money",
        "monkey",
        "month",
        "mood",
        "moon",
        "more",
        "morning",
        "most",
        "mostly",
        "mother",
        "motion",
        "motor",
        "mountain",
        "mouse",
        "mouth",
        "move",
        "movement",
        "movie",
        "moving",
        "mud",
        "muscle",
        "music",
        "musical",
        "must",
        "my",
        "myself",
        "mysterious",
        "nails",
        "name",
        "nation",
        "national",
        "native",
        "natural",
        "naturally",
        "nature",
        "near",
        "nearby",
        "nearer",
        "nearest",
        "nearly",
        "necessary",
        "neck",
        "needed",
        "needle",
        "needs",
        "negative",
        "neighbor",
        "neighborhood",
        "nervous",
        "nest",
        "never",
        "new",
        "news",
        "newspaper",
        "next",
        "nice",
        "night",
        "nine",
        "no",
        "nobody",
        "nodded",
        "noise",
        "none",
        "noon",
        "nor",
        "north",
        "nose",
        "not",
        "note",
        "noted",
        "nothing",
        "notice",
        "noun",
        "now",
        "number",
        "numeral",
        "nuts",
        "object",
        "observe",
        "obtain",
        "occasionally",
        "occur",
        "ocean",
        "of",
        "off",
        "offer",
        "office",
        "officer",
        "official",
        "oil",
        "old",
        "older",
        "oldest",
        "on",
        "once",
        "one",
        "only",
        "onto",
        "open",
        "operation",
        "opinion",
        "opportunity",
        "opposite",
        "or",
        "orange",
        "orbit",
        "order",
        "ordinary",
        "organization",
        "organized",
        "origin",
        "original",
        "other",
        "ought",
        "our",
        "ourselves",
        "out",
        "outer",
        "outline",
        "outside",
        "over",
        "own",
        "owner",
        "oxygen",
        "pack",
        "package",
        "page",
        "paid",
        "pain",
        "paint",
        "pair",
        "palace",
        "pale",
        "pan",
        "paper",
        "paragraph",
        "parallel",
        "parent",
        "park",
        "part",
        "particles",
        "particular",
        "particularly",
        "partly",
        "parts",
        "party",
        "pass",
        "passage",
        "past",
        "path",
        "pattern",
        "pay",
        "peace",
        "pen",
        "pencil",
        "people",
        "per",
        "percent",
        "perfect",
        "perfectly",
        "perhaps",
        "period",
        "person",
        "personal",
        "pet",
        "phrase",
        "physical",
        "piano",
        "pick",
        "picture",
        "pictured",
        "pie",
        "piece",
        "pig",
        "pile",
        "pilot",
        "pine",
        "pink",
        "pipe",
        "pitch",
        "place",
        "plain",
        "plan",
        "plane",
        "planet",
        "planned",
        "planning",
        "plant",
        "plastic",
        "plate",
        "plates",
        "play",
        "pleasant",
        "please",
        "pleasure",
        "plenty",
        "plural",
        "plus",
        "pocket",
        "poem",
        "poet",
        "poetry",
        "point",
        "pole",
        "police",
        "policeman",
        "political",
        "pond",
        "pony",
        "pool",
        "poor",
        "popular",
        "population",
        "porch",
        "port",
        "position",
        "positive",
        "possible",
        "possibly",
        "post",
        "pot",
        "potatoes",
        "pound",
        "pour",
        "powder",
        "power",
        "powerful",
        "practical",
        "practice",
        "prepare",
        "present",
        "president",
        "press",
        "pressure",
        "pretty",
        "prevent",
        "previous",
        "price",
        "pride",
        "primitive",
        "principal",
        "principle",
        "printed",
        "private",
        "prize",
        "probably",
        "problem",
        "process",
        "produce",
        "product",
        "production",
        "program",
        "progress",
        "promised",
        "proper",
        "properly",
        "property",
        "protection",
        "proud",
        "prove",
        "provide",
        "public",
        "pull",
        "pupil",
        "pure",
        "purple",
        "purpose",
        "push",
        "put",
        "putting",
        "quarter",
        "queen",
        "question",
        "quick",
        "quickly",
        "quiet",
        "quietly",
        "quite",
        "rabbit",
        "race",
        "radio",
        "railroad",
        "rain",
        "raise",
        "ran",
        "ranch",
        "range",
        "rapidly",
        "rate",
        "rather",
        "raw",
        "rays",
        "reach",
        "read",
        "reader",
        "ready",
        "real",
        "realize",
        "rear",
        "reason",
        "recall",
        "receive",
        "recent",
        "recently",
        "recognize",
        "record",
        "red",
        "refer",
        "refused",
        "region",
        "regular",
        "related",
        "relationship",
        "religious",
        "remain",
        "remarkable",
        "remember",
        "remove",
        "repeat",
        "replace",
        "replied",
        "report",
        "represent",
        "require",
        "research",
        "respect",
        "rest",
        "result",
        "return",
        "review",
        "rhyme",
        "rhythm",
        "rice",
        "rich",
        "ride",
        "riding",
        "right",
        "ring",
        "rise",
        "rising",
        "river",
        "road",
        "roar",
        "rock",
        "rocket",
        "rocky",
        "rod",
        "roll",
        "roof",
        "room",
        "root",
        "rope",
        "rose",
        "rough",
        "round",
        "route",
        "row",
        "rubbed",
        "rubber",
        "rule",
        "ruler",
        "run",
        "running",
        "rush",
        "sad",
        "saddle",
        "safe",
        "safety",
        "said",
        "sail",
        "sale",
        "salmon",
        "salt",
        "same",
        "sand",
        "sang",
        "sat",
        "satellites",
        "satisfied",
        "save",
        "saved",
        "saw",
        "say",
        "scale",
        "scared",
        "scene",
        "school",
        "science",
        "scientific",
        "scientist",
        "score",
        "screen",
        "sea",
        "search",
        "season",
        "seat",
        "second",
        "secret",
        "section",
        "see",
        "seed",
        "seeing",
        "seems",
        "seen",
        "seldom",
        "select",
        "selection",
        "sell",
        "send",
        "sense",
        "sent",
        "sentence",
        "separate",
        "series",
        "serious",
        "serve",
        "service",
        "sets",
        "setting",
        "settle",
        "settlers",
        "seven",
        "several",
        "shade",
        "shadow",
        "shake",
        "shaking",
        "shall",
        "shallow",
        "shape",
        "share",
        "sharp",
        "she",
        "sheep",
        "sheet",
        "shelf",
        "shells",
        "shelter",
        "shine",
        "shinning",
        "ship",
        "shirt",
        "shoe",
        "shoot",
        "shop",
        "shore",
        "short",
        "shorter",
        "shot",
        "should",
        "shoulder",
        "shout",
        "show",
        "shown",
        "shut",
        "sick",
        "sides",
        "sight",
        "sign",
        "signal",
        "silence",
        "silent",
        "silk",
        "silly",
        "silver",
        "similar",
        "simple",
        "simplest",
        "simply",
        "since",
        "sing",
        "single",
        "sink",
        "sister",
        "sit",
        "sitting",
        "situation",
        "six",
        "size",
        "skill",
        "skin",
        "sky",
        "slabs",
        "slave",
        "sleep",
        "slept",
        "slide",
        "slight",
        "slightly",
        "slip",
        "slipped",
        "slope",
        "slow",
        "slowly",
        "small",
        "smaller",
        "smallest",
        "smell",
        "smile",
        "smoke",
        "smooth",
        "snake",
        "snow",
        "so",
        "soap",
        "social",
        "society",
        "soft",
        "softly",
        "soil",
        "solar",
        "sold",
        "soldier",
        "solid",
        "solution",
        "solve",
        "some",
        "somebody",
        "somehow",
        "someone",
        "something",
        "sometime",
        "somewhere",
        "son",
        "song",
        "soon",
        "sort",
        "sound",
        "source",
        "south",
        "southern",
        "space",
        "speak",
        "special",
        "species",
        "specific",
        "speech",
        "speed",
        "spell",
        "spend",
        "spent",
        "spider",
        "spin",
        "spirit",
        "spite",
        "split",
        "spoken",
        "sport",
        "spread",
        "spring",
        "square",
        "stage",
        "stairs",
        "stand",
        "standard",
        "star",
        "stared",
        "start",
        "state",
        "statement",
        "station",
        "stay",
        "steady",
        "steam",
        "steel",
        "steep",
        "stems",
        "step",
        "stepped",
        "stick",
        "stiff",
        "still",
        "stock",
        "stomach",
        "stone",
        "stood",
        "stop",
        "stopped",
        "store",
        "storm",
        "story",
        "stove",
        "straight",
        "strange",
        "stranger",
        "straw",
        "stream",
        "street",
        "strength",
        "stretch",
        "strike",
        "string",
        "strip",
        "strong",
        "stronger",
        "struck",
        "structure",
        "struggle",
        "stuck",
        "student",
        "studied",
        "studying",
        "subject",
        "substance",
        "success",
        "successful",
        "such",
        "sudden",
        "suddenly",
        "sugar",
        "suggest",
        "suit",
        "sum",
        "summer",
        "sun",
        "sunlight",
        "supper",
        "supply",
        "support",
        "suppose",
        "sure",
        "surface",
        "surprise",
        "surrounded",
        "swam",
        "sweet",
        "swept",
        "swim",
        "swimming",
        "swing",
        "swung",
        "syllable",
        "symbol",
        "system",
        "table",
        "tail",
        "take",
        "taken",
        "tales",
        "talk",
        "tall",
        "tank",
        "tape",
        "task",
        "taste",
        "taught",
        "tax",
        "tea",
        "teach",
        "teacher",
        "team",
        "tears",
        "teeth",
        "telephone",
        "television",
        "tell",
        "temperature",
        "ten",
        "tent",
        "term",
        "terrible",
        "test",
        "than",
        "thank",
        "that",
        "thee",
        "them",
        "themselves",
        "then",
        "theory",
        "there",
        "therefore",
        "these",
        "they",
        "thick",
        "thin",
        "thing",
        "think",
        "third",
        "thirty",
        "this",
        "those",
        "thou",
        "though",
        "thought",
        "thousand",
        "thread",
        "three",
        "threw",
        "throat",
        "through",
        "throughout",
        "throw",
        "thrown",
        "thumb",
        "thus",
        "thy",
        "tide",
        "tie",
        "tight",
        "tightly",
        "till",
        "time",
        "tin",
        "tiny",
        "tip",
        "tired",
        "title",
        "to",
        "tobacco",
        "today",
        "together",
        "told",
        "tomorrow",
        "tone",
        "tongue",
        "tonight",
        "too",
        "took",
        "tool",
        "top",
        "topic",
        "torn",
        "total",
        "touch",
        "toward",
        "tower",
        "town",
        "toy",
        "trace",
        "track",
        "trade",
        "traffic",
        "trail",
        "train",
        "transportation",
        "trap",
        "travel",
        "treated",
        "tree",
        "triangle",
        "tribe",
        "trick",
        "tried",
        "trip",
        "troops",
        "tropical",
        "trouble",
        "truck",
        "trunk",
        "truth",
        "try",
        "tube",
        "tune",
        "turn",
        "twelve",
        "twenty",
        "twice",
        "two",
        "type",
        "typical",
        "uncle",
        "under",
        "underline",
        "understanding",
        "unhappy",
        "union",
        "unit",
        "universe",
        "unknown",
        "unless",
        "until",
        "unusual",
        "up",
        "upon",
        "upper",
        "upward",
        "us",
        "use",
        "useful",
        "using",
        "usual",
        "usually",
        "valley",
        "valuable",
        "value",
        "vapor",
        "variety",
        "various",
        "vast",
        "vegetable",
        "verb",
        "vertical",
        "very",
        "vessels",
        "victory",
        "view",
        "village",
        "visit",
        "visitor",
        "voice",
        "volume",
        "vote",
        "vowel",
        "voyage",
        "wagon",
        "wait",
        "walk",
        "wall",
        "want",
        "war",
        "warm",
        "warn",
        "was",
        "wash",
        "waste",
        "watch",
        "water",
        "wave",
        "way",
        "we",
        "weak",
        "wealth",
        "wear",
        "weather",
        "week",
        "weigh",
        "weight",
        "welcome",
        "well",
        "went",
        "were",
        "west",
        "western",
        "wet",
        "whale",
        "what",
        "whatever",
        "wheat",
        "wheel",
        "when",
        "whenever",
        "where",
        "wherever",
        "whether",
        "which",
        "while",
        "whispered",
        "whistle",
        "white",
        "who",
        "whole",
        "whom",
        "whose",
        "why",
        "wide",
        "widely",
        "wife",
        "wild",
        "will",
        "willing",
        "win",
        "wind",
        "window",
        "wing",
        "winter",
        "wire",
        "wise",
        "wish",
        "with",
        "within",
        "without",
        "wolf",
        "women",
        "won",
        "wonder",
        "wonderful",
        "wood",
        "wooden",
        "wool",
        "word",
        "wore",
        "work",
        "worker",
        "world",
        "worried",
        "worry",
        "worse",
        "worth",
        "would",
        "wrapped",
        "write",
        "writer",
        "writing",
        "written",
        "wrong",
        "wrote",
        "yard",
        "year",
        "yellow",
        "yes",
        "yesterday",
        "yet",
        "you",
        "young",
        "younger",
        "your",
        "yourself",
        "youth",
        "zero",
        "zebra",
        "zipper",
        "zoo",
        "zulu"
      ];
      function words(options) {
        const random = (options == null ? void 0 : options.seed) ? new seedrandom2(options.seed) : null;
        function word() {
          if (options && options.maxLength > 1) {
            return generateWordWithMaxLength();
          } else {
            return generateRandomWord();
          }
        }
        function generateWordWithMaxLength() {
          var rightSize = false;
          var wordUsed;
          while (!rightSize) {
            wordUsed = generateRandomWord();
            if (wordUsed.length <= options.maxLength) {
              rightSize = true;
            }
          }
          return wordUsed;
        }
        function generateRandomWord() {
          return wordList[randInt(wordList.length)];
        }
        function randInt(lessThan) {
          const r = random ? random() : Math.random();
          return Math.floor(r * lessThan);
        }
        if (typeof options === "undefined") {
          return word();
        }
        if (typeof options === "number") {
          options = { exactly: options };
        }
        if (options.exactly) {
          options.min = options.exactly;
          options.max = options.exactly;
        }
        if (typeof options.wordsPerString !== "number") {
          options.wordsPerString = 1;
        }
        if (typeof options.formatter !== "function") {
          options.formatter = (word2) => word2;
        }
        if (typeof options.separator !== "string") {
          options.separator = " ";
        }
        var total = options.min + randInt(options.max + 1 - options.min);
        var results = [];
        var token = "";
        var relativeIndex = 0;
        for (var i = 0; i < total * options.wordsPerString; i++) {
          if (relativeIndex === options.wordsPerString - 1) {
            token += options.formatter(word(), relativeIndex);
          } else {
            token += options.formatter(word(), relativeIndex) + options.separator;
          }
          relativeIndex++;
          if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = "";
            relativeIndex = 0;
          }
        }
        if (typeof options.join === "string") {
          results = results.join(options.join);
        }
        return results;
      }
      module.exports = words;
      words.wordList = wordList;
    }
  });

  // src/index.ts
  var import_plugin_spatial_nback_ts = __toESM(require_dist2(), 1);

  // node_modules/jspsych/dist/index.js
  __toESM(require_auto_bind2(), 1);
  __toESM(require_random_words2(), 1);
  __toESM(require_alea2(), 1);
  var ParameterType = /* @__PURE__ */ ((ParameterType2) => {
    ParameterType2[ParameterType2["BOOL"] = 0] = "BOOL";
    ParameterType2[ParameterType2["STRING"] = 1] = "STRING";
    ParameterType2[ParameterType2["INT"] = 2] = "INT";
    ParameterType2[ParameterType2["FLOAT"] = 3] = "FLOAT";
    ParameterType2[ParameterType2["FUNCTION"] = 4] = "FUNCTION";
    ParameterType2[ParameterType2["KEY"] = 5] = "KEY";
    ParameterType2[ParameterType2["KEYS"] = 6] = "KEYS";
    ParameterType2[ParameterType2["SELECT"] = 7] = "SELECT";
    ParameterType2[ParameterType2["HTML_STRING"] = 8] = "HTML_STRING";
    ParameterType2[ParameterType2["IMAGE"] = 9] = "IMAGE";
    ParameterType2[ParameterType2["AUDIO"] = 10] = "AUDIO";
    ParameterType2[ParameterType2["VIDEO"] = 11] = "VIDEO";
    ParameterType2[ParameterType2["OBJECT"] = 12] = "OBJECT";
    ParameterType2[ParameterType2["COMPLEX"] = 13] = "COMPLEX";
    ParameterType2[ParameterType2["TIMELINE"] = 14] = "TIMELINE";
    return ParameterType2;
  })(ParameterType || {});
  [
    ParameterType.AUDIO,
    ParameterType.IMAGE,
    ParameterType.VIDEO
  ];
  var MigrationError = class extends Error {
    constructor(message = "The global `jsPsych` variable is no longer available in jsPsych v7.") {
      super(
        `${message} Please follow the migration guide at https://www.jspsych.org/7.0/support/migration-v7/ to update your experiment.`
      );
      this.name = "MigrationError";
    }
  };
  window.jsPsych = {
    get init() {
      throw new MigrationError("`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.");
    },
    get data() {
      throw new MigrationError();
    },
    get randomization() {
      throw new MigrationError();
    },
    get turk() {
      throw new MigrationError();
    },
    get pluginAPI() {
      throw new MigrationError();
    },
    get ALL_KEYS() {
      throw new MigrationError(
        'jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.'
      );
    },
    get NO_KEYS() {
      throw new MigrationError('jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.');
    }
  };
  if (typeof window !== "undefined" && window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
    window.AudioContext = webkitAudioContext;
  }

  // node_modules/@jspsych/plugin-html-keyboard-response/dist/index.js
  var version = "2.1.0";
  var info = {
    name: "html-keyboard-response",
    version,
    parameters: {
      /**
       * The string to be displayed.
       */
      stimulus: {
        type: ParameterType.HTML_STRING,
        default: void 0
      },
      /**
       * This array contains the key(s) that the participant is allowed to press in order to respond
       * to the stimulus. Keys should be specified as characters (e.g., `'a'`, `'q'`, `' '`, `'Enter'`, `'ArrowDown'`) - see
       * {@link https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values this page}
       * and
       * {@link https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/ this page (event.key column)}
       * for more examples. Any key presses that are not listed in the
       * array will be ignored. The default value of `"ALL_KEYS"` means that all keys will be accepted as valid responses.
       * Specifying `"NO_KEYS"` will mean that no responses are allowed.
       */
      choices: {
        type: ParameterType.KEYS,
        default: "ALL_KEYS"
      },
      /**
       * This string can contain HTML markup. Any content here will be displayed below the stimulus.
       * The intention is that it can be used to provide a reminder about the action the participant
       * is supposed to take (e.g., which key to press).
       */
      prompt: {
        type: ParameterType.HTML_STRING,
        default: null
      },
      /**
       * How long to display the stimulus in milliseconds. The visibility CSS property of the stimulus
       * will be set to `hidden` after this time has elapsed. If this is null, then the stimulus will
       * remain visible until the trial ends.
       */
      stimulus_duration: {
        type: ParameterType.INT,
        default: null
      },
      /**
       * How long to wait for the participant to make a response before ending the trial in milliseconds.
       * If the participant fails to make a response before this timer is reached, the participant's response
       * will be recorded as null for the trial and the trial will end. If the value of this parameter is null,
       * then the trial will wait for a response indefinitely.
       */
      trial_duration: {
        type: ParameterType.INT,
        default: null
      },
      /**
       * If true, then the trial will end whenever the participant makes a response (assuming they make their
       * response before the cutoff specified by the trial_duration parameter). If false, then the trial will
       * continue until the value for trial_duration is reached. You can set this parameter to false to force
       * the participant to view a stimulus for a fixed amount of time, even if they respond before the time is complete.
       */
      response_ends_trial: {
        type: ParameterType.BOOL,
        default: true
      }
    },
    data: {
      /** Indicates which key the participant pressed. */
      response: {
        type: ParameterType.STRING
      },
      /** The response time in milliseconds for the participant to make a response. The time is measured from when the stimulus first appears on the screen until the participant's response. */
      rt: {
        type: ParameterType.INT
      },
      /** The HTML content that was displayed on the screen. */
      stimulus: {
        type: ParameterType.STRING
      }
    },
    // prettier-ignore
    citations: {
      "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
      "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
  };
  var _HtmlKeyboardResponsePlugin = class {
    constructor(jsPsych2) {
      this.jsPsych = jsPsych2;
    }
    trial(display_element, trial) {
      var new_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + "</div>";
      if (trial.prompt !== null) {
        new_html += trial.prompt;
      }
      display_element.innerHTML = new_html;
      var response = {
        rt: null,
        key: null
      };
      const end_trial = () => {
        if (typeof keyboardListener !== "undefined") {
          this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        }
        var trial_data = {
          rt: response.rt,
          stimulus: trial.stimulus,
          response: response.key
        };
        this.jsPsych.finishTrial(trial_data);
      };
      var after_response = (info2) => {
        display_element.querySelector("#jspsych-html-keyboard-response-stimulus").className += " responded";
        if (response.key == null) {
          response = info2;
        }
        if (trial.response_ends_trial) {
          end_trial();
        }
      };
      if (trial.choices != "NO_KEYS") {
        var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: "performance",
          persist: false,
          allow_held_key: false
        });
      }
      if (trial.stimulus_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          display_element.querySelector(
            "#jspsych-html-keyboard-response-stimulus"
          ).style.visibility = "hidden";
        }, trial.stimulus_duration);
      }
      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      }
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }
    create_simulation_data(trial, simulation_options) {
      const default_data = {
        stimulus: trial.stimulus,
        rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
        response: this.jsPsych.pluginAPI.getValidKey(trial.choices)
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }
    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      if (data.rt !== null) {
        this.jsPsych.pluginAPI.pressKey(data.response, data.rt);
      }
    }
  };
  var HtmlKeyboardResponsePlugin = _HtmlKeyboardResponsePlugin;
  (() => {
    _HtmlKeyboardResponsePlugin.info = info;
  })();

  // src/index.ts
  var task_instructions = {
    type: HtmlKeyboardResponsePlugin,
    response_ends_trial: true,
    on_load: function() {
      document.body.addEventListener("pointerdown", function endTrialOnClick() {
        jsPsych.finishTrial();
        document.body.removeEventListener("pointerdown", endTrialOnClick);
      });
    },
    stimulus: `
        <div style="text-align: center; font-size: clamp(16px, 4vw, 20px); line-height: 1.5; padding: 10px; max-width: 90vw; margin: 0 auto;">
            <h2 style="font-size: clamp(20px, 5vw, 28px); margin-bottom: 20px;">Spatial N-Back Task</h2>
            <p style="margin-bottom: 15px;">In this task, you will see a grid with blue squares appearing in different positions.</p>
            <p style="margin-bottom: 15px;">Your job is to click the MATCH button whenever the current position is the same as the position from <strong>1 trial ago</strong>.</p>
            <p style="margin-bottom: 15px;">Try to respond as quickly and accurately as possible.</p>
            <p style="font-weight: bold; color: #2196F3;">Press any key or tap anywhere to begin the task.</p>
        </div>
    `,
    choices: "ALL_KEYS"
  };
  function generateNBackSequence(total_trials, n_back_level, target_percentage, rows, cols) {
    const positions = [];
    const is_target = [];
    for (let i = 0; i < n_back_level; i++) {
      positions.push({
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * cols)
      });
      is_target.push(false);
    }
    const n_targets = Math.round(target_percentage / 100 * (total_trials - n_back_level));
    let targets_placed = 0;
    for (let i = n_back_level; i < total_trials; i++) {
      const can_be_target = targets_placed < n_targets;
      const should_be_target = can_be_target && Math.random() < 0.5;
      if (should_be_target) {
        positions.push({
          row: positions[i - n_back_level].row,
          col: positions[i - n_back_level].col
        });
        is_target.push(true);
        targets_placed++;
      } else {
        let new_position;
        do {
          new_position = {
            row: Math.floor(Math.random() * rows),
            col: Math.floor(Math.random() * cols)
          };
        } while (new_position.row === positions[i - n_back_level].row && new_position.col === positions[i - n_back_level].col);
        positions.push(new_position);
        is_target.push(false);
      }
    }
    return { positions, is_target };
  }
  function createSpatialNBackTimeline({
    rows = 3,
    cols = 3,
    n_back_level = 1,
    total_trials = 20,
    target_percentage = 25,
    stimulus_duration = 750,
    isi_duration = 250,
    feedback_duration = 1e3,
    show_feedback = false,
    show_feedback_border = false,
    showFeedbackNoResponse = false,
    feedbackWaitNoResponse = true,
    cell_size = 150,
    instructions_template = "Click the button when the position matches the one from {n} trial(s) ago",
    button_text = "MATCH",
    stimulus_color = "#2196F3",
    correct_color = "#4CAF50",
    incorrect_color = "#F44336",
    include_instructions = false,
    randomize_trials = false
  } = {}) {
    const sequence = generateNBackSequence(total_trials, n_back_level, target_percentage, rows, cols);
    const trials = [];
    for (let i = 0; i < total_trials; i++) {
      const trial_instructions = instructions_template.replace("{n}", n_back_level.toString()).replace("{trial}", (i + 1).toString()).replace("{total}", total_trials.toString());
      trials.push({
        type: import_plugin_spatial_nback_ts.default,
        rows,
        cols,
        stimulus_row: sequence.positions[i].row,
        stimulus_col: sequence.positions[i].col,
        is_target: sequence.is_target[i],
        stimulus_duration,
        isi_duration,
        feedback_duration,
        show_feedback,
        show_feedback_border,
        showFeedbackNoResponse,
        feedbackWaitNoResponse,
        cell_size,
        instructions: trial_instructions,
        button_text,
        stimulus_color,
        correct_color,
        incorrect_color,
        data: {
          trial_number: i + 1,
          n_back_level,
          total_trials,
          task: "spatial-nback"
        }
      });
    }
    const task_timeline = {
      timeline: trials,
      randomize_order: randomize_trials
    };
    if (include_instructions) {
      const custom_instructions = __spreadProps(__spreadValues({}, task_instructions), {
        stimulus: task_instructions.stimulus.replace(
          "<strong>1 trial ago</strong>",
          `<strong>${n_back_level} trial${n_back_level > 1 ? "s" : ""} ago</strong>`
        )
      });
      return {
        timeline: [custom_instructions, task_timeline]
      };
    } else {
      return task_timeline;
    }
  }
  function createPracticeTimeline(options = {}) {
    return createSpatialNBackTimeline(__spreadProps(__spreadValues({}, options), {
      total_trials: 6,
      target_percentage: 33,
      show_feedback: true,
      show_feedback_border: true,
      include_instructions: true
    }));
  }
  function createMultiLevelNBackTimeline(_a = {}) {
    var _b = _a, {
      n_back_levels = [1, 2],
      trials_per_level = 20,
      randomize_levels = false
    } = _b, sharedOptions = __objRest(_b, [
      "n_back_levels",
      "trials_per_level",
      "randomize_levels"
    ]);
    const level_timelines = n_back_levels.map((level) => {
      return createSpatialNBackTimeline(__spreadProps(__spreadValues({}, sharedOptions), {
        n_back_level: level,
        total_trials: trials_per_level,
        include_instructions: false
      }));
    });
    return {
      timeline: level_timelines,
      randomize_order: randomize_levels
    };
  }
  var presetConfigurations = {
    easy: () => createSpatialNBackTimeline({
      n_back_level: 1,
      total_trials: 20,
      target_percentage: 30,
      show_feedback: true
    }),
    medium: () => createSpatialNBackTimeline({
      n_back_level: 2,
      total_trials: 30,
      target_percentage: 25,
      show_feedback: false
    }),
    hard: () => createSpatialNBackTimeline({
      n_back_level: 3,
      total_trials: 40,
      target_percentage: 20,
      show_feedback: false,
      rows: 4,
      cols: 4
    }),
    research: () => createMultiLevelNBackTimeline({
      n_back_levels: [1, 2, 3],
      trials_per_level: 50,
      target_percentage: 25,
      show_feedback: false,
      randomize_levels: true
    })
  };
  var src_default = createSpatialNBackTimeline;
  var timelineUnits = {
    createPracticeTimeline,
    createSpatialNBackTimeline,
    createMultiLevelNBackTimeline
  };
  var utils = {
    presetConfigurations,
    generateNBackSequence,
    task_instructions
  };

  exports.createMultiLevelNBackTimeline = createMultiLevelNBackTimeline;
  exports.createPracticeTimeline = createPracticeTimeline;
  exports.createSpatialNBackTimeline = createSpatialNBackTimeline;
  exports.default = src_default;
  exports.generateNBackSequence = generateNBackSequence;
  exports.presetConfigurations = presetConfigurations;
  exports.task_instructions = task_instructions;
  exports.timelineUnits = timelineUnits;
  exports.utils = utils;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.global.js.map