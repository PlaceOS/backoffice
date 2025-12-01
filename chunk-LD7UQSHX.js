import {
  Observable,
  randomInt,
  takeWhile
} from "./chunk-C25AKIFS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@placeos/cloud-uploads/dist/index.es.js
function P(s) {
  return typeof s == "function";
}
var it = function(s, e) {
  return it = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, it(s, e);
};
function L(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  it(s, e);
  function t() {
    this.constructor = s;
  }
  s.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function nt(s) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && s[e], r = 0;
  if (t) return t.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && r >= s.length && (s = void 0), { value: s && s[r++], done: !s };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ot(s, e) {
  var t = typeof Symbol == "function" && s[Symbol.iterator];
  if (!t) return s;
  var r = t.call(s), i, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) n.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}
function at(s, e, t) {
  if (t || arguments.length === 2) for (var r = 0, i = e.length, n; r < i; r++)
    (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return s.concat(n || Array.prototype.slice.call(e));
}
function _t(s) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = s(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var et = _t(function(s) {
  return function(t) {
    s(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function ht(s, e) {
  if (s) {
    var t = s.indexOf(e);
    0 <= t && s.splice(t, 1);
  }
}
var J = (function() {
  function s(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return s.prototype.unsubscribe = function() {
    var e, t, r, i, n;
    if (!this.closed) {
      this.closed = true;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = nt(o), h = a.next(); !h.done; h = a.next()) {
              var c = h.value;
              c.remove(this);
            }
          } catch (y) {
            e = { error: y };
          } finally {
            try {
              h && !h.done && (t = a.return) && t.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var m = this.initialTeardown;
      if (P(m))
        try {
          m();
        } catch (y) {
          n = y instanceof et ? y.errors : [y];
        }
      var A = this._finalizers;
      if (A) {
        this._finalizers = null;
        try {
          for (var g = nt(A), v = g.next(); !v.done; v = g.next()) {
            var Wt = v.value;
            try {
              bt(Wt);
            } catch (y) {
              n = n ?? [], y instanceof et ? n = at(at([], ot(n)), ot(y.errors)) : n.push(y);
            }
          }
        } catch (y) {
          r = { error: y };
        } finally {
          try {
            v && !v.done && (i = g.return) && i.call(g);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (n)
        throw new et(n);
    }
  }, s.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        bt(e);
      else {
        if (e instanceof s) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, s.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, s.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, s.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && ht(t, e);
  }, s.prototype.remove = function(e) {
    var t = this._finalizers;
    t && ht(t, e), e instanceof s && e._removeParent(this);
  }, s.EMPTY = (function() {
    var e = new s();
    return e.closed = true, e;
  })(), s;
})();
var xt = J.EMPTY;
function $t(s) {
  return s instanceof J || s && "closed" in s && P(s.remove) && P(s.add) && P(s.unsubscribe);
}
function bt(s) {
  P(s) ? s() : s.unsubscribe();
}
var Gt = {
  Promise: void 0
};
var Jt = {
  setTimeout: function(s, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    return setTimeout.apply(void 0, at([s, e], ot(t)));
  },
  clearTimeout: function(s) {
    return clearTimeout(s);
  },
  delegate: void 0
};
function Yt(s) {
  Jt.setTimeout(function() {
    throw s;
  });
}
function yt() {
}
function B(s) {
  s();
}
var pt = (function(s) {
  L(e, s);
  function e(t) {
    var r = s.call(this) || this;
    return r.isStopped = false, t ? (r.destination = t, $t(t) && t.add(r)) : r.destination = Zt, r;
  }
  return e.create = function(t, r, i) {
    return new ut(t, r, i);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = true, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, s.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
})(J);
var Xt = (function() {
  function s(e) {
    this.partialObserver = e;
  }
  return s.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        N(r);
      }
  }, s.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        N(r);
      }
    else
      N(e);
  }, s.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        N(t);
      }
  }, s;
})();
var ut = (function(s) {
  L(e, s);
  function e(t, r, i) {
    var n = s.call(this) || this, o;
    return P(t) || !t ? o = {
      next: t ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = t, n.destination = new Xt(o), n;
  }
  return e;
})(pt);
function N(s) {
  Yt(s);
}
function Qt(s) {
  throw s;
}
var Zt = {
  closed: true,
  next: yt,
  error: Qt,
  complete: yt
};
var te = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function At(s) {
  return s;
}
function ee(s) {
  return s.length === 0 ? At : s.length === 1 ? s[0] : function(t) {
    return s.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var lt = (function() {
  function s(e) {
    e && (this._subscribe = e);
  }
  return s.prototype.lift = function(e) {
    var t = new s();
    return t.source = this, t.operator = e, t;
  }, s.prototype.subscribe = function(e, t, r) {
    var i = this, n = se(e) ? e : new ut(e, t, r);
    return B(function() {
      var o = i, a = o.operator, h = o.source;
      n.add(a ? a.call(n, h) : h ? i._subscribe(n) : i._trySubscribe(n));
    }), n;
  }, s.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, s.prototype.forEach = function(e, t) {
    var r = this;
    return t = vt(t), new t(function(i, n) {
      var o = new ut({
        next: function(a) {
          try {
            e(a);
          } catch (h) {
            n(h), o.unsubscribe();
          }
        },
        error: n,
        complete: i
      });
      r.subscribe(o);
    });
  }, s.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, s.prototype[te] = function() {
    return this;
  }, s.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return ee(e)(this);
  }, s.prototype.toPromise = function(e) {
    var t = this;
    return e = vt(e), new e(function(r, i) {
      var n;
      t.subscribe(function(o) {
        return n = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(n);
      });
    });
  }, s.create = function(e) {
    return new s(e);
  }, s;
})();
function vt(s) {
  var e;
  return (e = s ?? Gt.Promise) !== null && e !== void 0 ? e : Promise;
}
function re(s) {
  return s && P(s.next) && P(s.error) && P(s.complete);
}
function se(s) {
  return s && s instanceof pt || re(s) && $t(s);
}
var ie = (function(s) {
  L(e, s);
  function e(t, r, i, n, o, a) {
    var h = s.call(this, t) || this;
    return h.onFinalize = o, h.shouldUnsubscribe = a, h._next = r ? function(c) {
      try {
        r(c);
      } catch (m) {
        t.error(m);
      }
    } : s.prototype._next, h._error = n ? function(c) {
      try {
        n(c);
      } catch (m) {
        t.error(m);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._error, h._complete = i ? function() {
      try {
        i();
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._complete, h;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      s.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
})(pt);
var ne = _t(function(s) {
  return function() {
    s(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var zt = (function(s) {
  L(e, s);
  function e() {
    var t = s.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new wt(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ne();
  }, e.prototype.next = function(t) {
    var r = this;
    B(function() {
      var i, n;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = nt(r.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var h = a.value;
            h.next(t);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    B(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = t;
        for (var i = r.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    B(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = true;
        for (var r = t.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), s.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var r = this, i = this, n = i.hasError, o = i.isStopped, a = i.observers;
    return n || o ? xt : (this.currentObservers = null, a.push(t), new J(function() {
      r.currentObservers = null, ht(a, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, i = r.hasError, n = r.thrownError, o = r.isStopped;
    i ? t.error(n) : o && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new lt();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new wt(t, r);
  }, e;
})(lt);
var wt = (function(s) {
  L(e, s);
  function e(t, r) {
    var i = s.call(this) || this;
    return i.destination = t, i.source = r, i;
  }
  return e.prototype.next = function(t) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, t);
  }, e.prototype.error = function(t) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, t);
  }, e.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, e.prototype._subscribe = function(t) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && i !== void 0 ? i : xt;
  }, e;
})(zt);
var ae = new lt(function(s) {
  return s.complete();
});
var Ot = _t(function(s) {
  return function() {
    s(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
var Lt = (function(s) {
  L(e, s);
  function e(t) {
    var r = s.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  }), e.prototype._subscribe = function(t) {
    var r = s.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, e.prototype.getValue = function() {
    var t = this, r = t.hasError, i = t.thrownError, n = t._value;
    if (r)
      throw i;
    return this._throwIfClosed(), n;
  }, e.prototype.next = function(t) {
    s.prototype.next.call(this, this._value = t);
  }, e;
})(zt);
var _e = new Int32Array(4);
var f = class _f {
  static hashStr(e, t = false) {
    return this.onePassHasher.start().appendStr(e).end(t);
  }
  static hashAsciiStr(e, t = false) {
    return this.onePassHasher.start().appendAsciiStr(e).end(t);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _f();
  static _hex(e) {
    const t = _f.hexChars, r = _f.hexOut;
    let i, n, o, a;
    for (a = 0; a < 4; a += 1)
      for (n = a * 8, i = e[a], o = 0; o < 8; o += 2)
        r[n + 1 + o] = t.charAt(i & 15), i >>>= 4, r[n + 0 + o] = t.charAt(i & 15), i >>>= 4;
    return r.join("");
  }
  static _md5cycle(e, t) {
    let r = e[0], i = e[1], n = e[2], o = e[3];
    r += (i & n | ~i & o) + t[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & n) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + r | 0, n += (o & r | ~o & i) + t[2] + 606105819 | 0, n = (n << 17 | n >>> 15) + o | 0, i += (n & o | ~n & r) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & o) + t[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & n) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + r | 0, n += (o & r | ~o & i) + t[6] - 1473231341 | 0, n = (n << 17 | n >>> 15) + o | 0, i += (n & o | ~n & r) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & o) + t[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & n) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + r | 0, n += (o & r | ~o & i) + t[10] - 42063 | 0, n = (n << 17 | n >>> 15) + o | 0, i += (n & o | ~n & r) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & o) + t[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & n) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + r | 0, n += (o & r | ~o & i) + t[14] - 1502002290 | 0, n = (n << 17 | n >>> 15) + o | 0, i += (n & o | ~n & r) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & o | n & ~o) + t[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & n | i & ~n) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + r | 0, n += (o & i | r & ~i) + t[11] + 643717713 | 0, n = (n << 14 | n >>> 18) + o | 0, i += (n & r | o & ~r) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & o | n & ~o) + t[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & n | i & ~n) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + r | 0, n += (o & i | r & ~i) + t[15] - 660478335 | 0, n = (n << 14 | n >>> 18) + o | 0, i += (n & r | o & ~r) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & o | n & ~o) + t[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & n | i & ~n) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + r | 0, n += (o & i | r & ~i) + t[3] - 187363961 | 0, n = (n << 14 | n >>> 18) + o | 0, i += (n & r | o & ~r) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & o | n & ~o) + t[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & n | i & ~n) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + r | 0, n += (o & i | r & ~i) + t[7] + 1735328473 | 0, n = (n << 14 | n >>> 18) + o | 0, i += (n & r | o & ~r) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i ^ n ^ o) + t[5] - 378558 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ n) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + r | 0, n += (o ^ r ^ i) + t[11] + 1839030562 | 0, n = (n << 16 | n >>> 16) + o | 0, i += (n ^ o ^ r) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ o) + t[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ n) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + r | 0, n += (o ^ r ^ i) + t[7] - 155497632 | 0, n = (n << 16 | n >>> 16) + o | 0, i += (n ^ o ^ r) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ o) + t[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ n) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + r | 0, n += (o ^ r ^ i) + t[3] - 722521979 | 0, n = (n << 16 | n >>> 16) + o | 0, i += (n ^ o ^ r) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ o) + t[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ n) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + r | 0, n += (o ^ r ^ i) + t[15] + 530742520 | 0, n = (n << 16 | n >>> 16) + o | 0, i += (n ^ o ^ r) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (n ^ (i | ~o)) + t[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~n)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + r | 0, n += (r ^ (o | ~i)) + t[14] - 1416354905 | 0, n = (n << 15 | n >>> 17) + o | 0, i += (o ^ (n | ~r)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~o)) + t[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~n)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + r | 0, n += (r ^ (o | ~i)) + t[10] - 1051523 | 0, n = (n << 15 | n >>> 17) + o | 0, i += (o ^ (n | ~r)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~o)) + t[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~n)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + r | 0, n += (r ^ (o | ~i)) + t[6] - 1560198380 | 0, n = (n << 15 | n >>> 17) + o | 0, i += (o ^ (n | ~r)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~o)) + t[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~n)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + r | 0, n += (r ^ (o | ~i)) + t[2] + 718787259 | 0, n = (n << 15 | n >>> 17) + o | 0, i += (o ^ (n | ~r)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + n | 0, e[0] = r + e[0] | 0, e[1] = i + e[1] | 0, e[2] = n + e[2] | 0, e[3] = o + e[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_f.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(e) {
    const t = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, n, o;
    for (o = 0; o < e.length; o += 1) {
      if (n = e.charCodeAt(o), n < 128)
        t[i++] = n;
      else if (n < 2048)
        t[i++] = (n >>> 6) + 192, t[i++] = n & 63 | 128;
      else if (n < 55296 || n > 56319)
        t[i++] = (n >>> 12) + 224, t[i++] = n >>> 6 & 63 | 128, t[i++] = n & 63 | 128;
      else {
        if (n = (n - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, n > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        t[i++] = (n >>> 18) + 240, t[i++] = n >>> 12 & 63 | 128, t[i++] = n >>> 6 & 63 | 128, t[i++] = n & 63 | 128;
      }
      i >= 64 && (this._dataLength += 64, _f._md5cycle(this._state, r), i -= 64, r[0] = r[16]);
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(e) {
    const t = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, n, o = 0;
    for (; ; ) {
      for (n = Math.min(e.length - o, 64 - i); n--; )
        t[i++] = e.charCodeAt(o++);
      if (i < 64)
        break;
      this._dataLength += 64, _f._md5cycle(this._state, r), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(e) {
    const t = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, n, o = 0;
    for (; ; ) {
      for (n = Math.min(e.length - o, 64 - i); n--; )
        t[i++] = e[o++];
      if (i < 64)
        break;
      this._dataLength += 64, _f._md5cycle(this._state, r), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const e = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [e[0], e[1], e[2], e[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(e) {
    const t = e.buffer, r = e.state, i = this._state;
    let n;
    for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], n = 0; n < t.length; n += 1)
      this._buffer8[n] = t.charCodeAt(n);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(e = false) {
    const t = this._bufferLength, r = this._buffer8, i = this._buffer32, n = (t >> 2) + 1;
    this._dataLength += t;
    const o = this._dataLength * 8;
    if (r[t] = 128, r[t + 1] = r[t + 2] = r[t + 3] = 0, i.set(_f.buffer32Identity.subarray(n), n), t > 55 && (_f._md5cycle(this._state, i), i.set(_f.buffer32Identity)), o <= 4294967295)
      i[14] = o;
    else {
      const a = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (a === null) return e ? _e : "";
      const h = parseInt(a[2], 16), c = parseInt(a[1], 16) || 0;
      i[14] = h, i[15] = c;
    }
    return _f._md5cycle(this._state, i), e ? this._state : _f._hex(this._state);
  }
};
if (f.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Ct = class {
  _queue = [];
  _hashWorker;
  _processing;
  _ready = true;
  constructor(e, t) {
    const r = this;
    Worker ? (r._hashWorker = new Worker(e, t), r._hashWorker.onmessage = r._recievedMessage.bind(r), r._hashWorker.onerror = (i) => {
      r._ready = false, console.error("Hash worker failure", i);
    }) : (r._ready = false, console.error("Web Workers are not supported in this browser"));
  }
  /**
   * Hash a blob of data in the worker
   * @param blob Data to hash
   * @returns Promise of the Hashed result
   */
  hash(e) {
    const t = this;
    let r;
    return r = new Promise((i, n) => {
      t._queue.push({
        blob: e,
        resolve: i,
        reject: n
      }), t._processNext();
    }), r;
  }
  /** Terminate any existing hash requests */
  terminate() {
    this._ready = false, this._hashWorker.terminate();
  }
  // Processes the next item in the queue
  _processNext() {
    this._ready && !this._processing && this._queue.length > 0 && (this._processing = this._queue.pop(), this._hashWorker.postMessage(this._processing.blob));
  }
  // Hash result is returned from the worker
  _recievedMessage(e) {
    const t = e.data;
    t.success ? this._processing?.resolve(t.result) : this._processing?.reject(t.result), this._processing = void 0, this._processNext();
  }
};
function Be(s, e = false) {
  const t = e ? 1e3 : 1024;
  if (s < t)
    return s + (e ? " iB" : " B");
  const r = Math.floor(Math.log(s) / Math.log(t)), i = (e ? "kMGTPE" : "KMGTPE").charAt(r - 1) + (e ? "iB" : "B");
  return (s / Math.pow(t, r)).toFixed(1) + " " + i;
}
var q = 1024 * 1024;
function Pe(s) {
  return s.toString().padStart(6, "0");
}
var Se = {
  name: "EMPTY",
  part_size: 5 * q,
  resume_id: () => "",
  finalise_body: () => ""
};
var St = {
  name: "AmazonS3",
  part_size: 5 * q,
  resume_id: (s) => new DOMParser().parseFromString(s, "application/xml").getElementsByTagName("UploadId")[0].textContent || "",
  finalise_body: (s, e) => {
    let t = "<CompleteMultipartUpload>";
    for (const r of e)
      t += `<Part><PartNumber>${r.part}</PartNumber><ETag>"${r.md5_hex}"</ETag></Part>`;
    return t += "</CompleteMultipartUpload>", t;
  }
};
var Et = {
  name: "GoogleCloudStorage",
  part_size: 5 * q,
  // Google's resumable upload ID comes from the Location header, not response body
  // The server extracts it from the header and provides it in the response
  resume_id: (s) => {
    try {
      const e = JSON.parse(s);
      return e.upload_id || e.resumable_id || "";
    } catch {
      return "";
    }
  },
  // Google uses resumable uploads - no manifest needed
  finalise_body: () => ""
};
var dt = {
  name: "AzureStorage",
  part_size: 2 * q,
  // Azure uses block IDs, not a resumable upload ID
  // Use a placeholder that identifies this upload session
  resume_id: (s) => s,
  finalise_body: (s, e) => {
    const t = Math.ceil(s.file.size / dt.part_size);
    let r = '<?xml version="1.0" encoding="utf-8"?><BlockList>';
    for (let i = 1; i <= t; i++)
      r += `<Latest>${window.btoa(Pe(i))}</Latest>`;
    return r += "</BlockList>", r;
  }
};
var Ut = {
  name: "OpenStackSwift",
  part_size: 2 * q,
  // OpenStack Swift doesn't use resumable IDs for static large objects
  resume_id: () => "n/a",
  // OpenStack manifest is typically generated server-side
  // If needed client-side, it requires path info from server responses
  finalise_body: () => ""
};
function Ee(s) {
  return s === St.name ? St : s === Et.name ? Et : s === dt.name ? dt : s === Ut.name ? Ut : (console.warn(`[UPLOADS] Unknown provider: "${s}", using EMPTY_PROVIDER`), Se);
}
var R = "/api/engine/v2/uploads";
var V;
var jt;
function Ue(s) {
  console.debug("[UPLOADS] Set a token"), V = s;
}
function ke(s) {
  console.debug("[UPLOADS] Set an API key"), V = "API_KEY", jt = s;
}
function xe() {
  return V === "API_KEY" ? { "x-api-key": jt } : { Authorization: `Bearer ${V}` };
}
function j() {
  return __spreadValues({ "Content-Type": "application/json" }, xe());
}
async function $e(s, e) {
  console.debug(`[UPLOADS] Creating upload for ${e.name}...`);
  const r = await (await fetch(`${R}`, {
    method: "POST",
    body: JSON.stringify(s),
    headers: __spreadValues({}, j())
  })).json(), i = Ee(r.residence);
  if (r.type === "direct_upload")
    return console.debug(`[UPLOADS] Direct upload for ${e.name}`), kt(
      r.upload_id,
      e,
      i,
      "",
      true,
      r.signature
    );
  console.debug(`[UPLOADS] Chunked upload for ${e.name}`);
  let n = "";
  if (r.signature.url) {
    const a = await (await fetch(r.signature.url, {
      method: r.signature.verb,
      headers: r.signature.headers
    })).text();
    n = i.resume_id(a);
  } else
    n = `${f.hashStr(`${Date.now()}|${e.name}`)}`;
  return console.debug(
    `[UPLOADS] Initialised upload for ${e.name} (${n})`
  ), kt(r.upload_id, e, i, n, false);
}
async function Ae(s, e, t, r) {
  return console.debug(
    `[UPLOADS] Starting upload ${s}, initialising part ${t}...`
  ), (await (await fetch(
    `${R}/${s}?part=${t}&file_id=${encodeURIComponent(r)}`,
    {
      method: "PATCH",
      body: JSON.stringify({ resumable_id: e }),
      headers: __spreadValues({}, j())
    }
  )).json()).signature;
}
async function ze(s, e, t, r) {
  return console.debug(
    `[UPLOADS] Finished parts for upload ${s}(${r.part_list?.join(", ")})`
  ), console.debug(`[UPLOADS] Initialising next part ${e}...`), (await (await fetch(
    `${R}/${s}?part=${e}&file_id=${encodeURIComponent(t)}`,
    {
      method: "PATCH",
      body: JSON.stringify(r),
      headers: __spreadValues({}, j())
    }
  )).json()).signature;
}
async function Oe(s, e) {
  console.debug(`[UPLOADS] Finalising upload ${s}...`);
  const r = await (await fetch(`${R}/${s}?`, {
    method: "PATCH",
    body: JSON.stringify(e),
    headers: __spreadValues({}, j())
  })).json();
  return __spreadProps(__spreadValues({}, r.signature), { body: r.body });
}
async function Nt(s) {
  console.debug(`[UPLOADS] Commiting upload ${s}...`), await fetch(`${R}/${s}`, {
    method: "PUT",
    headers: __spreadValues({}, j())
  });
}
var ft = 3;
var S = [];
var H = -1;
var T = /* @__PURE__ */ new Set();
var W = [];
var Ft = "/node_modules/ts-md5/dist/md5_worker.js";
function Le(s = Ft, e) {
  console.debug("[UPLOADS] Setting up hash workers..."), S?.length > 0 && S.forEach((t) => t.terminate()), S = [], T.clear(), W = [];
  for (let t = 0; t < ft; t += 1)
    S.push(new Ct(s, e));
}
function Ce() {
  return H += 1, H = H % ft, S[H];
}
function De() {
  return S.length || ft;
}
async function Ie() {
  for (let s = 0; s < S.length; s++)
    if (!T.has(s))
      return T.add(s), { worker: S[s], index: s };
  return new Promise((s) => {
    W.push((e) => {
      T.add(e), s({ worker: S[e], index: e });
    });
  });
}
function Te(s) {
  T.delete(s), W.length > 0 && W.shift()(s);
}
function Ht(s) {
  let e = "";
  s.length % 2 > 0 && (s = "0" + s);
  for (let t = 0, r = s.length; t < r; t += 2)
    e += String.fromCharCode(parseInt(s.slice(t, t + 2), 16));
  return e;
}
var K = [];
var w = [];
var st = 0;
var _ = 0;
var k = /* @__PURE__ */ new Set();
var x = [];
var O = /* @__PURE__ */ new Map();
var $ = /* @__PURE__ */ new Map();
var u = {
  simultaneous: 2,
  parallel: 3,
  retries: 3,
  auto_start: true,
  auto_remove: false,
  remove_after_ms: -1
};
function Me(s) {
  console.debug("[UPLOADS] Configured upload manager"), u = __spreadValues(__spreadValues({}, u), s);
}
async function qe(s) {
  const { worker: e, index: t } = await Ie();
  try {
    const n = (await e.hash(s)).replace(/[^0-9a-fA-F]/g, ""), o = window.btoa(Ht(n));
    return { hex: n, base64: o };
  } finally {
    Te(t);
  }
}
function E(s) {
  for (const e of $.keys())
    e.startsWith(`${s}:`) && $.delete(e);
}
function mt(s, e) {
  return Math.ceil(s.size / e);
}
function Bt(s, e, t) {
  const r = (e - 1) * t, i = Math.min(r + t, s.size);
  return s.slice(r, i);
}
function d(s, e) {
  const t = s.state.getValue();
  s.state.next(__spreadValues(__spreadValues({}, t), e));
}
async function Re(s, e) {
  let t;
  try {
    t = await fetch(s.url, {
      method: s.verb,
      headers: s.headers,
      body: e
    });
  } catch (r) {
    const i = r instanceof Error ? r.message : "Unknown network error";
    throw new Error(`Chunk upload failed: ${i}`);
  }
  if (!t.ok) {
    let r = "";
    try {
      r = await t.text();
    } catch {
    }
    throw new Error(
      `Chunk upload failed with status ${t.status}: ${r || t.statusText}`
    );
  }
  return t.headers.get("ETag") || await t.text();
}
async function Vt() {
  if (w.length === 0 || st >= u.parallel)
    return;
  const s = w.shift();
  if (!s) return;
  const e = Z(s.upload_id);
  if (!e || k.has(s.upload_id))
    return;
  st++;
  const t = e.state.getValue();
  d(e, {
    status: "UPLOADING",
    working: [...t.working, s.part]
  });
  try {
    const i = $.get(`${e.id}:${s.part}`)?.base64 ?? "", n = mt(
      e.file,
      e.provider.part_size
    ), o = e.state.getValue().completed;
    let a;
    if (o.length === 0)
      a = await Ae(
        e.id,
        e.resume_id,
        s.part,
        i
      );
    else {
      const g = {
        part_list: o,
        part_data: o.map((v) => ({
          part: v,
          md5: $.get(`${e.id}:${v}`)?.base64 ?? ""
        }))
      };
      a = await ze(
        e.id,
        s.part,
        i,
        g
      );
    }
    const h = Bt(
      e.file,
      s.part,
      e.provider.part_size
    );
    await Re(a, h);
    const c = e.state.getValue(), m = [...c.completed, s.part].sort(
      (g, v) => g - v
    ), A = c.working.filter((g) => g !== s.part);
    if (d(e, {
      completed: m,
      working: A,
      progress: Math.round(m.length / n * 100)
    }), m.length === n)
      try {
        await je(e);
      } catch (g) {
        E(e.id), d(e, { status: "FAILED" }), console.error(
          `[UPLOADS] Finalization failed for ${e.file.name}:`,
          g
        ), _--, z();
        return;
      }
  } catch (r) {
    const n = e.state.getValue().working.filter((o) => o !== s.part);
    s.retries < u.retries ? (console.warn(
      `Chunk upload failed for part ${s.part}, retrying (${s.retries + 1}/${u.retries})...`
    ), w.push(__spreadProps(__spreadValues({}, s), { retries: s.retries + 1 })), d(e, { working: n })) : (E(e.id), d(e, {
      status: "FAILED",
      working: n
    }), console.error(
      `Chunk upload failed for part ${s.part} after ${u.retries} retries:`,
      r
    ), w = w.filter(
      (o) => o.upload_id !== e.id
    ), _--, z());
  } finally {
    st -= 1, Vt();
  }
}
async function je(s) {
  const e = s.state.getValue(), t = [];
  for (const i of e.completed) {
    const n = $.get(`${s.id}:${i}`);
    t.push({
      part: i,
      md5: n?.base64 ?? "",
      md5_hex: n?.hex ?? ""
    });
  }
  const r = await Oe(s.id, {
    part_list: e.completed,
    part_data: t
  });
  if (r.url) {
    let i;
    try {
      i = await fetch(r.url, {
        method: r.verb,
        headers: r.headers,
        body: r.body || s.provider.finalise_body(s, t)
      });
    } catch (n) {
      const o = n instanceof Error ? n.message : "Unknown network error";
      throw new Error(`Finalization request failed: ${o}`);
    }
    if (!i.ok) {
      let n = "";
      try {
        n = await i.text();
      } catch {
      }
      throw new Error(
        `Finalization request failed with status ${i.status}: ${n || i.statusText}`
      );
    }
  }
  if (await Nt(s.id), E(s.id), d(s, {
    status: "COMPLETED",
    progress: 100
  }), _--, z(), u.auto_remove)
    if (u.remove_after_ms >= 0) {
      const i = setTimeout(() => {
        M(s.id), O.delete(s.id);
      }, u.remove_after_ms);
      O.set(s.id, i);
    } else
      M(s.id);
}
function z() {
  if (x.length === 0 || _ >= u.simultaneous)
    return;
  const s = x.shift();
  s && (_++, s.is_direct ? Q(s) : gt(s).catch((e) => {
    console.error("[UPLOADS] Failed to queue chunks:", e), E(s.id), d(s, { status: "FAILED" }), _--;
  }));
}
async function Q(s, e = 0) {
  if (!s.direct_signature) {
    console.error(`[UPLOADS] Direct upload ${s.id} missing signature`), d(s, { status: "FAILED" }), _--, z();
    return;
  }
  console.debug(
    `[UPLOADS] Processing direct upload for ${s.file.name}...`
  ), d(s, { status: "UPLOADING", progress: 0 });
  try {
    const t = await fetch(s.direct_signature.url, {
      method: s.direct_signature.verb,
      headers: s.direct_signature.headers,
      body: s.file
    });
    if (!t.ok)
      throw new Error(`Upload failed with status ${t.status}`);
    if (console.debug(
      `[UPLOADS] Direct upload complete for ${s.file.name}, committing...`
    ), await Nt(s.id), d(s, {
      status: "COMPLETED",
      progress: 100
    }), _--, z(), u.auto_remove)
      if (u.remove_after_ms >= 0) {
        const r = setTimeout(() => {
          M(s.id), O.delete(s.id);
        }, u.remove_after_ms);
        O.set(s.id, r);
      } else
        M(s.id);
  } catch (t) {
    e < u.retries ? (console.warn(
      `[UPLOADS] Direct upload failed for ${s.file.name}, retrying (${e + 1}/${u.retries})...`
    ), Q(s, e + 1)) : (console.error(
      `[UPLOADS] Direct upload failed for ${s.file.name} after ${u.retries} retries:`,
      t
    ), E(s.id), d(s, { status: "FAILED" }), _--, z());
  }
}
async function gt(s, e = 1) {
  if (!s.provider.part_size || s.provider.part_size <= 0)
    throw new Error(
      `Invalid provider part_size: ${s.provider.part_size}. Provider: ${s.provider.name}`
    );
  if (!s.resume_id)
    throw new Error(
      `Invalid resume_id: ${s.resume_id}. Upload: ${s.id}`
    );
  const t = mt(s.file, s.provider.part_size), r = s.state.getValue(), i = De();
  console.debug(
    `[UPLOADS] Queuing ${t} chunks for ${s.file.name} (part size: ${s.provider.part_size}, workers: ${i})`
  );
  const n = /* @__PURE__ */ new Set(), o = async (a) => {
    const h = `${s.id}:${a}`;
    if (!$.has(h)) {
      console.debug(
        `[UPLOADS] Computing hash for part ${a}/${t}...`
      );
      const A = Bt(
        s.file,
        a,
        s.provider.part_size
      ), g = await qe(A);
      $.set(h, g), console.debug(`[UPLOADS] Part ${a}/${t} hash cached`);
    }
    const c = (a - 1) * s.provider.part_size, m = Math.min(
      c + s.provider.part_size,
      s.file.size
    );
    w.push({
      upload_id: s.id,
      part: a,
      start: c,
      end: m,
      retries: 0
    }), Vt();
  };
  for (let a = e; a <= t; a++) {
    if (r.completed.includes(a)) continue;
    if (k.has(s.id) || !Z(s.id)) {
      console.debug(
        `[UPLOADS] Chunk queuing cancelled for ${s.file.name}`
      ), await Promise.all(n);
      return;
    }
    const h = o(a).finally(() => {
      n.delete(h);
    });
    n.add(h), n.size >= i && await Promise.race(n);
  }
  await Promise.all(n), console.debug(`[UPLOADS] All chunks queued for ${s.file.name}`);
}
function Ne(s, e = []) {
  if (console.debug(
    `[UPLOADS] Adding upload to manager (${s.file.name})...`
  ), K.push(s), k.delete(s.id), s.is_direct) {
    if (console.debug(`[UPLOADS] Upload is direct (${s.file.name})`), d(s, {
      status: u.auto_start ? "UPLOADING" : "PAUSED",
      completed: [],
      pending_complete: [],
      working: [],
      progress: 0
    }), !u.auto_start)
      return;
    if (_ >= u.simultaneous) {
      x.push(s), d(s, { status: "PAUSED" });
      return;
    }
    _++, Q(s);
    return;
  }
  console.debug(`[UPLOADS] Upload is chunked (${s.file.name})`);
  const t = mt(s.file, s.provider.part_size), r = [...e].sort((o, a) => o - a), i = Math.round(r.length / t * 100);
  if (d(s, {
    status: u.auto_start ? "UPLOADING" : "PAUSED",
    completed: r,
    pending_complete: [],
    working: [],
    progress: i
  }), !u.auto_start)
    return;
  if (console.debug(`[UPLOADS] Staring upload (${s.file.name})...`), _ >= u.simultaneous) {
    x.push(s), d(s, { status: "PAUSED" });
    return;
  }
  _++, console.debug(
    `[UPLOADS] Queuing chunks to upload (${s.file.name})...`
  );
  const n = r.length > 0 ? Math.max(...r) + 1 : 1;
  gt(s, n).catch((o) => {
    console.error("[UPLOADS] Failed to queue chunks:", o), E(s.id), d(s, { status: "FAILED" }), _--;
  });
}
function Z(s) {
  return K.find((e) => e.id === s);
}
function Fe(s) {
  const e = Z(s);
  e && (k.add(s), w = w.filter((t) => t.upload_id !== s), d(e, { status: "PAUSED" }));
}
function He(s) {
  const e = Z(s);
  if (e) {
    if (k.delete(s), _ >= u.simultaneous) {
      x.push(e);
      return;
    }
    if (_++, e.is_direct)
      Q(e);
    else {
      const t = e.state.getValue(), r = t.completed.length > 0 ? Math.max(...t.completed) + 1 : 1;
      gt(e, r).catch((i) => {
        console.error("[UPLOADS] Failed to queue chunks:", i), E(e.id), d(e, { status: "FAILED" }), _--;
      });
    }
  }
}
function M(s) {
  const e = O.get(s);
  e && (clearTimeout(e), O.delete(s)), E(s), k.add(s), w = w.filter((t) => t.upload_id !== s), x = x.filter((t) => t.id !== s), K = K.filter((t) => t.id !== s), k.delete(s);
}
function tr(s = {}) {
  const {
    token: e,
    api_key: t,
    worker_url: r = Ft,
    worker_options: i,
    simultaneous: n = 2,
    parallel: o = 3,
    retries: a = 3,
    auto_start: h = true,
    auto_remove: c = false,
    remove_after_ms: m = -1
  } = s;
  console.debug("[UPLOADS] Initialising..."), t ? ke(t) : e && Ue(e), Me({
    simultaneous: n,
    parallel: o,
    retries: a,
    auto_start: h,
    auto_remove: c,
    remove_after_ms: m
  }), Le(r, i);
}
function kt(s, e, t, r, i = false, n) {
  return {
    id: s,
    resume_id: r,
    file: e,
    provider: t,
    is_direct: i,
    direct_signature: n,
    state: new Lt({
      status: "PAUSED",
      completed: [],
      pending_complete: [],
      working: [],
      progress: 0
    }),
    pause: () => Fe(s),
    resume: () => He(s),
    remove: () => M(s)
  };
}
async function er(s, e = {}) {
  const { permissions: t = "none", public: r = false } = e, i = Ce();
  if (!i) throw new Error("No hash worker available");
  const o = (await i.hash(s.slice())).replace(/[^0-9a-fA-F]/g, ""), a = await $e(
    {
      file_size: s.size,
      file_name: s.name,
      file_mime: s.type,
      file_id: window.btoa(Ht(o)),
      permissions: t,
      public: r
    },
    s
  );
  return Ne(a), a;
}

// node_modules/blob-util/dist/blob-util.es.js
function createBlob(parts, properties) {
  parts = parts || [];
  properties = properties || {};
  if (typeof properties === "string") {
    properties = { type: properties };
  }
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }
    var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
}
function arrayBufferToBlob(buffer, type) {
  return createBlob([buffer], type);
}

// src/app/common/uploads.ts
function uploadURL(id) {
  return `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(id)}/url`;
}
function uploadFile(file, is_public = true, permissions = "none") {
  return new Observable((observer) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", async (e) => {
      const arrayBuffer = e.target.result;
      const blob = arrayBufferToBlob(arrayBuffer, file.type);
      const upload = await er(file, {
        permissions,
        public: is_public
      });
      const upload_details = {
        id: randomInt(999999999999),
        name: file.name,
        progress: 0,
        link: uploadURL(upload.id),
        formatted_size: Be(file.size),
        size: file.size,
        upload
      };
      upload.state.pipe(takeWhile((_2) => _2.status !== "COMPLETED", true)).subscribe((state) => {
        if (upload.access_url || state.progress >= 100) {
          upload_details.link = !is_public ? uploadURL(upload.id) : upload.access_url;
        }
        upload_details.progress = state.progress;
        observer.next(upload_details);
        if (state.status === "FAILED")
          observer.error(__spreadProps(__spreadValues({}, upload_details), {
            error: state.error || "Error"
          }));
        if (state.status === "COMPLETED")
          observer.complete();
      });
      observer.next(upload_details);
    });
    fileReader.readAsArrayBuffer(file);
  });
}

export {
  tr,
  uploadFile
};
//# sourceMappingURL=chunk-LD7UQSHX.js.map
