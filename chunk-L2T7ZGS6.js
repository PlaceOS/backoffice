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
function f(n) {
  return typeof n == "function";
}
function ht(n) {
  return f(n?.lift);
}
function U(n) {
  return function(r) {
    if (ht(r))
      return r.lift(function(t) {
        try {
          return n(t, this);
        } catch (e) {
          this.error(e);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
var R = function(n, r) {
  return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
    t.__proto__ = e;
  } || function(t, e) {
    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
  }, R(n, r);
};
function g(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  R(n, r);
  function t() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function L(n) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && n[r], e = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && e >= n.length && (n = void 0), { value: n && n[e++], done: !n };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function T(n, r) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var e = t.call(n), s, i = [], o;
  try {
    for (; (r === void 0 || r-- > 0) && !(s = e.next()).done; ) i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (t = e.return) && t.call(e);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function M(n, r, t) {
  if (t || arguments.length === 2) for (var e = 0, s = r.length, i; e < s; e++)
    (i || !(e in r)) && (i || (i = Array.prototype.slice.call(r, 0, e)), i[e] = r[e]);
  return n.concat(i || Array.prototype.slice.call(r));
}
function W(n) {
  var r = function(e) {
    Error.call(e), e.stack = new Error().stack;
  }, t = n(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var C = W(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(e, s) {
      return s + 1 + ") " + e.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function $(n, r) {
  if (n) {
    var t = n.indexOf(r);
    0 <= t && n.splice(t, 1);
  }
}
var k = (function() {
  function n(r) {
    this.initialTeardown = r, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var r, t, e, s, i;
    if (!this.closed) {
      this.closed = true;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = L(o), h = a.next(); !h.done; h = a.next()) {
              var p = h.value;
              p.remove(this);
            }
          } catch (d) {
            r = { error: d };
          } finally {
            try {
              h && !h.done && (t = a.return) && t.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          o.remove(this);
      var b = this.initialTeardown;
      if (f(b))
        try {
          b();
        } catch (d) {
          i = d instanceof C ? d.errors : [d];
        }
      var H = this._finalizers;
      if (H) {
        this._finalizers = null;
        try {
          for (var E = L(H), y = E.next(); !y.done; y = E.next()) {
            var at = y.value;
            try {
              N(at);
            } catch (d) {
              i = i ?? [], d instanceof C ? i = M(M([], T(i)), T(d.errors)) : i.push(d);
            }
          }
        } catch (d) {
          e = { error: d };
        } finally {
          try {
            y && !y.done && (s = E.return) && s.call(E);
          } finally {
            if (e) throw e.error;
          }
        }
      }
      if (i)
        throw new C(i);
    }
  }, n.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        N(r);
      else {
        if (r instanceof n) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, n.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, n.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, n.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && $(t, r);
  }, n.prototype.remove = function(r) {
    var t = this._finalizers;
    t && $(t, r), r instanceof n && r._removeParent(this);
  }, n.EMPTY = (function() {
    var r = new n();
    return r.closed = true, r;
  })(), n;
})();
var J = k.EMPTY;
function Y(n) {
  return n instanceof k || n && "closed" in n && f(n.remove) && f(n.add) && f(n.unsubscribe);
}
function N(n) {
  f(n) ? n() : n.unsubscribe();
}
var ut = {
  Promise: void 0
};
var lt = {
  setTimeout: function(n, r) {
    for (var t = [], e = 2; e < arguments.length; e++)
      t[e - 2] = arguments[e];
    return setTimeout.apply(void 0, M([n, r], T(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function ct(n) {
  lt.setTimeout(function() {
    throw n;
  });
}
function D() {
}
function z(n) {
  n();
}
var F = (function(n) {
  g(r, n);
  function r(t) {
    var e = n.call(this) || this;
    return e.isStopped = false, t ? (e.destination = t, Y(t) && t.add(e)) : e.destination = dt, e;
  }
  return r.create = function(t, e, s) {
    return new j(t, e, s);
  }, r.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped || (this.isStopped = true, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, n.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
})(k);
var _t = (function() {
  function n(r) {
    this.partialObserver = r;
  }
  return n.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (e) {
        S(e);
      }
  }, n.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (e) {
        S(e);
      }
    else
      S(r);
  }, n.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        S(t);
      }
  }, n;
})();
var j = (function(n) {
  g(r, n);
  function r(t, e, s) {
    var i = n.call(this) || this, o;
    return f(t) || !t ? o = {
      next: t ?? void 0,
      error: e ?? void 0,
      complete: s ?? void 0
    } : o = t, i.destination = new _t(o), i;
  }
  return r;
})(F);
function S(n) {
  ct(n);
}
function pt(n) {
  throw n;
}
var dt = {
  closed: true,
  next: D,
  error: pt,
  complete: D
};
var ft = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Q(n) {
  return n;
}
function mt(n) {
  return n.length === 0 ? Q : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(e, s) {
      return s(e);
    }, t);
  };
}
var B = (function() {
  function n(r) {
    r && (this._subscribe = r);
  }
  return n.prototype.lift = function(r) {
    var t = new n();
    return t.source = this, t.operator = r, t;
  }, n.prototype.subscribe = function(r, t, e) {
    var s = this, i = gt(r) ? r : new j(r, t, e);
    return z(function() {
      var o = s, a = o.operator, h = o.source;
      i.add(a ? a.call(i, h) : h ? s._subscribe(i) : s._trySubscribe(i));
    }), i;
  }, n.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, n.prototype.forEach = function(r, t) {
    var e = this;
    return t = K(t), new t(function(s, i) {
      var o = new j({
        next: function(a) {
          try {
            r(a);
          } catch (h) {
            i(h), o.unsubscribe();
          }
        },
        error: i,
        complete: s
      });
      e.subscribe(o);
    });
  }, n.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, n.prototype[ft] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return mt(r)(this);
  }, n.prototype.toPromise = function(r) {
    var t = this;
    return r = K(r), new r(function(e, s) {
      var i;
      t.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return s(o);
      }, function() {
        return e(i);
      });
    });
  }, n.create = function(r) {
    return new n(r);
  }, n;
})();
function K(n) {
  var r;
  return (r = n ?? ut.Promise) !== null && r !== void 0 ? r : Promise;
}
function bt(n) {
  return n && f(n.next) && f(n.error) && f(n.complete);
}
function gt(n) {
  return n && n instanceof F || bt(n) && Y(n);
}
function A(n, r, t, e, s) {
  return new yt(n, r, t, e, s);
}
var yt = (function(n) {
  g(r, n);
  function r(t, e, s, i, o, a) {
    var h = n.call(this, t) || this;
    return h.onFinalize = o, h.shouldUnsubscribe = a, h._next = e ? function(p) {
      try {
        e(p);
      } catch (b) {
        t.error(b);
      }
    } : n.prototype._next, h._error = i ? function(p) {
      try {
        i(p);
      } catch (b) {
        t.error(b);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, h._complete = s ? function() {
      try {
        s();
      } catch (p) {
        t.error(p);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, h;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var e = this.closed;
      n.prototype.unsubscribe.call(this), !e && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
})(F);
var vt = W(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var Z = (function(n) {
  g(r, n);
  function r() {
    var t = n.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var e = new X(this, this);
    return e.operator = t, e;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new vt();
  }, r.prototype.next = function(t) {
    var e = this;
    z(function() {
      var s, i;
      if (e._throwIfClosed(), !e.isStopped) {
        e.currentObservers || (e.currentObservers = Array.from(e.observers));
        try {
          for (var o = L(e.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var h = a.value;
            h.next(t);
          }
        } catch (p) {
          s = { error: p };
        } finally {
          try {
            a && !a.done && (i = o.return) && i.call(o);
          } finally {
            if (s) throw s.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var e = this;
    z(function() {
      if (e._throwIfClosed(), !e.isStopped) {
        e.hasError = e.isStopped = true, e.thrownError = t;
        for (var s = e.observers; s.length; )
          s.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    z(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = true;
        for (var e = t.observers; e.length; )
          e.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var e = this, s = this, i = s.hasError, o = s.isStopped, a = s.observers;
    return i || o ? J : (this.currentObservers = null, a.push(t), new k(function() {
      e.currentObservers = null, $(a, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var e = this, s = e.hasError, i = e.thrownError, o = e.isStopped;
    s ? t.error(i) : o && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new B();
    return t.source = this, t;
  }, r.create = function(t, e) {
    return new X(t, e);
  }, r;
})(B);
var X = (function(n) {
  g(r, n);
  function r(t, e) {
    var s = n.call(this) || this;
    return s.destination = t, s.source = e, s;
  }
  return r.prototype.next = function(t) {
    var e, s;
    (s = (e = this.destination) === null || e === void 0 ? void 0 : e.next) === null || s === void 0 || s.call(e, t);
  }, r.prototype.error = function(t) {
    var e, s;
    (s = (e = this.destination) === null || e === void 0 ? void 0 : e.error) === null || s === void 0 || s.call(e, t);
  }, r.prototype.complete = function() {
    var t, e;
    (e = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || e === void 0 || e.call(t);
  }, r.prototype._subscribe = function(t) {
    var e, s;
    return (s = (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t)) !== null && s !== void 0 ? s : J;
  }, r;
})(Z);
function wt(n) {
  return U(function(r, t) {
    var e = false;
    r.subscribe(A(t, function(s) {
      e = true, t.next(s);
    }, function() {
      e || t.next(n), t.complete();
    }));
  });
}
var Pt = new B(function(n) {
  return n.complete();
});
function Et(n) {
  return n <= 0 ? function() {
    return Pt;
  } : U(function(r, t) {
    var e = 0;
    r.subscribe(A(t, function(s) {
      ++e <= n && (t.next(s), n <= e && t.complete());
    }));
  });
}
function St(n, r) {
  return U(function(t, e) {
    var s = 0;
    t.subscribe(A(e, function(i) {
      return n.call(r, i, s++) && e.next(i);
    }));
  });
}
var tt = W(function(n) {
  return function() {
    n(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function xt(n) {
  return n === void 0 && (n = zt), U(function(r, t) {
    var e = false;
    r.subscribe(A(t, function(s) {
      e = true, t.next(s);
    }, function() {
      return e ? t.complete() : t.error(n());
    }));
  });
}
function zt() {
  return new tt();
}
function Ut(n, r) {
  var t = arguments.length >= 2;
  return function(e) {
    return e.pipe(n ? St(function(s, i) {
      return n(s, i, e);
    }) : Q, Et(1), t ? wt(r) : xt(function() {
      return new tt();
    }));
  };
}
var kt = (function(n) {
  g(r, n);
  function r(t) {
    var e = n.call(this) || this;
    return e._value = t, e;
  }
  return Object.defineProperty(r.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  }), r.prototype._subscribe = function(t) {
    var e = n.prototype._subscribe.call(this, t);
    return !e.closed && t.next(this._value), e;
  }, r.prototype.getValue = function() {
    var t = this, e = t.hasError, s = t.thrownError, i = t._value;
    if (e)
      throw s;
    return this._throwIfClosed(), i;
  }, r.prototype.next = function(t) {
    n.prototype.next.call(this, this._value = t);
  }, r;
})(Z);
var At = new Int32Array(4);
var c = class _c {
  static hashStr(r, t = false) {
    return this.onePassHasher.start().appendStr(r).end(t);
  }
  static hashAsciiStr(r, t = false) {
    return this.onePassHasher.start().appendAsciiStr(r).end(t);
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
  static onePassHasher = new _c();
  static _hex(r) {
    const t = _c.hexChars, e = _c.hexOut;
    let s, i, o, a;
    for (a = 0; a < 4; a += 1)
      for (i = a * 8, s = r[a], o = 0; o < 8; o += 2)
        e[i + 1 + o] = t.charAt(s & 15), s >>>= 4, e[i + 0 + o] = t.charAt(s & 15), s >>>= 4;
    return e.join("");
  }
  static _md5cycle(r, t) {
    let e = r[0], s = r[1], i = r[2], o = r[3];
    e += (s & i | ~s & o) + t[0] - 680876936 | 0, e = (e << 7 | e >>> 25) + s | 0, o += (e & s | ~e & i) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + e | 0, i += (o & e | ~o & s) + t[2] + 606105819 | 0, i = (i << 17 | i >>> 15) + o | 0, s += (i & o | ~i & e) + t[3] - 1044525330 | 0, s = (s << 22 | s >>> 10) + i | 0, e += (s & i | ~s & o) + t[4] - 176418897 | 0, e = (e << 7 | e >>> 25) + s | 0, o += (e & s | ~e & i) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + e | 0, i += (o & e | ~o & s) + t[6] - 1473231341 | 0, i = (i << 17 | i >>> 15) + o | 0, s += (i & o | ~i & e) + t[7] - 45705983 | 0, s = (s << 22 | s >>> 10) + i | 0, e += (s & i | ~s & o) + t[8] + 1770035416 | 0, e = (e << 7 | e >>> 25) + s | 0, o += (e & s | ~e & i) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + e | 0, i += (o & e | ~o & s) + t[10] - 42063 | 0, i = (i << 17 | i >>> 15) + o | 0, s += (i & o | ~i & e) + t[11] - 1990404162 | 0, s = (s << 22 | s >>> 10) + i | 0, e += (s & i | ~s & o) + t[12] + 1804603682 | 0, e = (e << 7 | e >>> 25) + s | 0, o += (e & s | ~e & i) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + e | 0, i += (o & e | ~o & s) + t[14] - 1502002290 | 0, i = (i << 17 | i >>> 15) + o | 0, s += (i & o | ~i & e) + t[15] + 1236535329 | 0, s = (s << 22 | s >>> 10) + i | 0, e += (s & o | i & ~o) + t[1] - 165796510 | 0, e = (e << 5 | e >>> 27) + s | 0, o += (e & i | s & ~i) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + e | 0, i += (o & s | e & ~s) + t[11] + 643717713 | 0, i = (i << 14 | i >>> 18) + o | 0, s += (i & e | o & ~e) + t[0] - 373897302 | 0, s = (s << 20 | s >>> 12) + i | 0, e += (s & o | i & ~o) + t[5] - 701558691 | 0, e = (e << 5 | e >>> 27) + s | 0, o += (e & i | s & ~i) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + e | 0, i += (o & s | e & ~s) + t[15] - 660478335 | 0, i = (i << 14 | i >>> 18) + o | 0, s += (i & e | o & ~e) + t[4] - 405537848 | 0, s = (s << 20 | s >>> 12) + i | 0, e += (s & o | i & ~o) + t[9] + 568446438 | 0, e = (e << 5 | e >>> 27) + s | 0, o += (e & i | s & ~i) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + e | 0, i += (o & s | e & ~s) + t[3] - 187363961 | 0, i = (i << 14 | i >>> 18) + o | 0, s += (i & e | o & ~e) + t[8] + 1163531501 | 0, s = (s << 20 | s >>> 12) + i | 0, e += (s & o | i & ~o) + t[13] - 1444681467 | 0, e = (e << 5 | e >>> 27) + s | 0, o += (e & i | s & ~i) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + e | 0, i += (o & s | e & ~s) + t[7] + 1735328473 | 0, i = (i << 14 | i >>> 18) + o | 0, s += (i & e | o & ~e) + t[12] - 1926607734 | 0, s = (s << 20 | s >>> 12) + i | 0, e += (s ^ i ^ o) + t[5] - 378558 | 0, e = (e << 4 | e >>> 28) + s | 0, o += (e ^ s ^ i) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + e | 0, i += (o ^ e ^ s) + t[11] + 1839030562 | 0, i = (i << 16 | i >>> 16) + o | 0, s += (i ^ o ^ e) + t[14] - 35309556 | 0, s = (s << 23 | s >>> 9) + i | 0, e += (s ^ i ^ o) + t[1] - 1530992060 | 0, e = (e << 4 | e >>> 28) + s | 0, o += (e ^ s ^ i) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + e | 0, i += (o ^ e ^ s) + t[7] - 155497632 | 0, i = (i << 16 | i >>> 16) + o | 0, s += (i ^ o ^ e) + t[10] - 1094730640 | 0, s = (s << 23 | s >>> 9) + i | 0, e += (s ^ i ^ o) + t[13] + 681279174 | 0, e = (e << 4 | e >>> 28) + s | 0, o += (e ^ s ^ i) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + e | 0, i += (o ^ e ^ s) + t[3] - 722521979 | 0, i = (i << 16 | i >>> 16) + o | 0, s += (i ^ o ^ e) + t[6] + 76029189 | 0, s = (s << 23 | s >>> 9) + i | 0, e += (s ^ i ^ o) + t[9] - 640364487 | 0, e = (e << 4 | e >>> 28) + s | 0, o += (e ^ s ^ i) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + e | 0, i += (o ^ e ^ s) + t[15] + 530742520 | 0, i = (i << 16 | i >>> 16) + o | 0, s += (i ^ o ^ e) + t[2] - 995338651 | 0, s = (s << 23 | s >>> 9) + i | 0, e += (i ^ (s | ~o)) + t[0] - 198630844 | 0, e = (e << 6 | e >>> 26) + s | 0, o += (s ^ (e | ~i)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + e | 0, i += (e ^ (o | ~s)) + t[14] - 1416354905 | 0, i = (i << 15 | i >>> 17) + o | 0, s += (o ^ (i | ~e)) + t[5] - 57434055 | 0, s = (s << 21 | s >>> 11) + i | 0, e += (i ^ (s | ~o)) + t[12] + 1700485571 | 0, e = (e << 6 | e >>> 26) + s | 0, o += (s ^ (e | ~i)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + e | 0, i += (e ^ (o | ~s)) + t[10] - 1051523 | 0, i = (i << 15 | i >>> 17) + o | 0, s += (o ^ (i | ~e)) + t[1] - 2054922799 | 0, s = (s << 21 | s >>> 11) + i | 0, e += (i ^ (s | ~o)) + t[8] + 1873313359 | 0, e = (e << 6 | e >>> 26) + s | 0, o += (s ^ (e | ~i)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + e | 0, i += (e ^ (o | ~s)) + t[6] - 1560198380 | 0, i = (i << 15 | i >>> 17) + o | 0, s += (o ^ (i | ~e)) + t[13] + 1309151649 | 0, s = (s << 21 | s >>> 11) + i | 0, e += (i ^ (s | ~o)) + t[4] - 145523070 | 0, e = (e << 6 | e >>> 26) + s | 0, o += (s ^ (e | ~i)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + e | 0, i += (e ^ (o | ~s)) + t[2] + 718787259 | 0, i = (i << 15 | i >>> 17) + o | 0, s += (o ^ (i | ~e)) + t[9] - 343485551 | 0, s = (s << 21 | s >>> 11) + i | 0, r[0] = e + r[0] | 0, r[1] = s + r[1] | 0, r[2] = i + r[2] | 0, r[3] = o + r[3] | 0;
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
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_c.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(r) {
    const t = this._buffer8, e = this._buffer32;
    let s = this._bufferLength, i, o;
    for (o = 0; o < r.length; o += 1) {
      if (i = r.charCodeAt(o), i < 128)
        t[s++] = i;
      else if (i < 2048)
        t[s++] = (i >>> 6) + 192, t[s++] = i & 63 | 128;
      else if (i < 55296 || i > 56319)
        t[s++] = (i >>> 12) + 224, t[s++] = i >>> 6 & 63 | 128, t[s++] = i & 63 | 128;
      else {
        if (i = (i - 55296) * 1024 + (r.charCodeAt(++o) - 56320) + 65536, i > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        t[s++] = (i >>> 18) + 240, t[s++] = i >>> 12 & 63 | 128, t[s++] = i >>> 6 & 63 | 128, t[s++] = i & 63 | 128;
      }
      s >= 64 && (this._dataLength += 64, _c._md5cycle(this._state, e), s -= 64, e[0] = e[16]);
    }
    return this._bufferLength = s, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(r) {
    const t = this._buffer8, e = this._buffer32;
    let s = this._bufferLength, i, o = 0;
    for (; ; ) {
      for (i = Math.min(r.length - o, 64 - s); i--; )
        t[s++] = r.charCodeAt(o++);
      if (s < 64)
        break;
      this._dataLength += 64, _c._md5cycle(this._state, e), s = 0;
    }
    return this._bufferLength = s, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(r) {
    const t = this._buffer8, e = this._buffer32;
    let s = this._bufferLength, i, o = 0;
    for (; ; ) {
      for (i = Math.min(r.length - o, 64 - s); i--; )
        t[s++] = r[o++];
      if (s < 64)
        break;
      this._dataLength += 64, _c._md5cycle(this._state, e), s = 0;
    }
    return this._bufferLength = s, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const r = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [r[0], r[1], r[2], r[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(r) {
    const t = r.buffer, e = r.state, s = this._state;
    let i;
    for (this._dataLength = r.length, this._bufferLength = r.buflen, s[0] = e[0], s[1] = e[1], s[2] = e[2], s[3] = e[3], i = 0; i < t.length; i += 1)
      this._buffer8[i] = t.charCodeAt(i);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(r = false) {
    const t = this._bufferLength, e = this._buffer8, s = this._buffer32, i = (t >> 2) + 1;
    this._dataLength += t;
    const o = this._dataLength * 8;
    if (e[t] = 128, e[t + 1] = e[t + 2] = e[t + 3] = 0, s.set(_c.buffer32Identity.subarray(i), i), t > 55 && (_c._md5cycle(this._state, s), s.set(_c.buffer32Identity)), o <= 4294967295)
      s[14] = o;
    else {
      const a = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (a === null) return r ? At : "";
      const h = parseInt(a[2], 16), p = parseInt(a[1], 16) || 0;
      s[14] = h, s[15] = p;
    }
    return _c._md5cycle(this._state, s), r ? this._state : _c._hex(this._state);
  }
};
if (c.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Ot = class {
  _queue = [];
  _hashWorker;
  _processing;
  _ready = true;
  constructor(r, t) {
    const e = this;
    Worker ? (e._hashWorker = new Worker(r, t), e._hashWorker.onmessage = e._recievedMessage.bind(e), e._hashWorker.onerror = (s) => {
      e._ready = false, console.error("Hash worker failure", s);
    }) : (e._ready = false, console.error("Web Workers are not supported in this browser"));
  }
  /**
   * Hash a blob of data in the worker
   * @param blob Data to hash
   * @returns Promise of the Hashed result
   */
  hash(r) {
    const t = this;
    let e;
    return e = new Promise((s, i) => {
      t._queue.push({
        blob: r,
        resolve: s,
        reject: i
      }), t._processNext();
    }), e;
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
  _recievedMessage(r) {
    const t = r.data;
    t.success ? this._processing?.resolve(t.result) : this._processing?.reject(t.result), this._processing = void 0, this._processNext();
  }
};
var P = [];
var et = 3;
var x = -1;
var qt = "/node_modules/ts-md5/dist/md5_worker.js";
function Ct(n = qt, r) {
  P?.length > 0 && P.forEach((t) => t.terminate()), P = [];
  for (let t = 0; t < et; t += 1)
    P.push(new Ot(n, r));
}
function O() {
  return x += 1, x = x % et, P[x];
}
var rt = {};
function It(n, r) {
  rt[n] = r;
}
function Rt(n) {
  return rt[n] || null;
}
var st = "/api/engine/v2/uploads";
function it() {
  return st;
}
function Lt(n) {
  st = n;
}
function jt(n, r = false) {
  const t = r ? 1e3 : 1024;
  if (n < t)
    return n + (r ? " iB" : " B");
  const e = Math.floor(Math.log(n) / Math.log(t)), s = (r ? "kMGTPE" : "KMGTPE").charAt(e - 1) + (r ? "iB" : "B");
  return (n / Math.pow(t, e)).toFixed(1) + " " + s;
}
function m(n) {
  let r = "";
  n.length % 2 > 0 && (n = "0" + n);
  for (let t = 0, e = n.length; t < e; t += 2)
    r += String.fromCharCode(parseInt(n.slice(t, t + 2), 16));
  return r;
}
function I(n) {
  let r = "";
  if (n)
    for (const t in n)
      n.hasOwnProperty(t) && n[t] !== void 0 && n[t] !== null && (r += `${r ? "&" : ""}${t}=${encodeURIComponent(n[t])}`);
  return r;
}
var v = "";
var w = "";
var V = class {
  constructor(r, t) {
    this._upload = r, this._endpoint = t, this._abort_ctrl.signal.addEventListener(
      "abort",
      () => this._dispose ? this._dispose() : ""
    );
  }
  upload_id = "";
  _params = {};
  _abort_ctrl = new AbortController();
  _dispose;
  static setToken(r) {
    v = r;
  }
  static setApiKey(r) {
    w = r;
  }
  get encoded_id() {
    return encodeURIComponent(`${this.upload_id || ""}`);
  }
  async initialise() {
    const { signal: r } = this._abort_ctrl, { file: t, mime_type: e } = this._upload;
    this._params.file_size = `${t.size}`, this._params.file_name = t.name, e && e !== "binary/octet-stream" && (this._params.file_mime = e), this._params = __spreadValues(__spreadValues({}, this._params), this._upload.params), t.dir_path?.length > 0 && (this._params.file_path = t.dir_path);
    const s = this.base_request_headers, i = I(this._params);
    return (await fetch(
      `${this._endpoint}/new${i ? "?" + i : ""}`,
      {
        headers: s,
        signal: r
      }
    )).json();
  }
  async create(r) {
    const { signal: t } = this._abort_ctrl, e = this.base_request_headers;
    r.file_id && (this._params.file_id = r.file_id), this._upload.mime_type && (this._params.file_mime = r.mime_type), r.parameters && (this._params.parameters = r.parameters), r.permissions && (this._params.permissions = r.permissions), r.public && (this._params.public = r.public), r.expires && (this._params.expires = r.expires || 0);
    const i = await (await fetch(`${this._endpoint}`, {
      body: JSON.stringify(this._params),
      method: "POST",
      headers: e,
      signal: t
    })).json();
    return this.upload_id = i.upload_id, i;
  }
  async sign(r, t = "") {
    if (!this.upload_id) throw new Error("Upload resource not initialised");
    const { signal: e } = this._abort_ctrl, s = this.base_request_headers, i = new URLSearchParams();
    return i.set("part", r.toString()), t && i.set("file_id", encodeURIComponent(t)), await (await fetch(
      `${this._endpoint}/${this.encoded_id}/edit?${i.toString()}`,
      {
        method: "GET",
        headers: s,
        signal: e
      }
    )).json();
  }
  async update(r = {}) {
    if (!this.upload_id) throw new Error("Upload resource not initialised");
    const { signal: t } = this._abort_ctrl, e = this.base_request_headers;
    return await (await fetch(`${this._endpoint}/${this.encoded_id}`, {
      body: JSON.stringify(r),
      method: "PUT",
      headers: e,
      signal: t
    })).json();
  }
  async signedRequest(r) {
    const e = { body: await (await fetch(r.signature.url, {
      body: r.data,
      method: r.signature.verb,
      headers: r.signature.headers
    })).text(), responseXML: null };
    try {
      e.responseXML = new window.DOMParser().parseFromString(
        e.body,
        "text/xml"
      );
    } catch {
    }
    return e;
  }
  async signNextChunk(r, t, e, s = null) {
    if (!this.upload_id) throw new Error("Upload resource not initialised");
    const { signal: i } = this._abort_ctrl, o = { part_list: e };
    s && (o.part_data = s);
    const a = this.base_request_headers, h = I({
      part: `${r}`,
      file_id: t,
      file_mime: this._upload.mime_type
    });
    return await (await fetch(
      `${this._endpoint}/${this.encoded_id}${h ? "?" + h : ""}`,
      {
        body: JSON.stringify(o),
        method: "PUT",
        headers: a,
        signal: i
      }
    )).json();
  }
  async signChunk(r, t = null) {
    const { signal: e } = this._abort_ctrl, s = this.base_request_headers, i = I({
      part: `${r}`,
      file_id: t
    });
    return await (await fetch(
      `${this._endpoint}/${this.encoded_id}/edit${i ? "?" + i : ""}`,
      {
        headers: s,
        signal: e
      }
    )).json();
  }
  async updateStatus(r = {}, t = false) {
    if (!this.upload_id) throw new Error("Upload resource not initialised");
    const { signal: e } = this._abort_ctrl, s = this.base_request_headers;
    return await (await fetch(`${this._endpoint}/${this.encoded_id}`, {
      headers: s,
      method: t ? "PUT" : "PATCH",
      body: JSON.stringify(r),
      signal: e
    })).json();
  }
  abort() {
    this._abort_ctrl.abort();
  }
  get base_request_headers() {
    const r = new Headers();
    return r.append("Accept", "application/json"), r.append("Content-Type", "application/json"), v ? r.append("Authorization", `Bearer ${v}`) : w && r.append("X-API-Key", `${w}`), r;
  }
  destroy() {
    this.abort();
    const r = new Headers();
    if (r.append("Accept", "application/json"), v ? r.append("Authorization", `Bearer ${v}`) : w && r.append("X-API-Key", `${w}`), this.upload_id)
      return fetch(`${this._endpoint}/${this.encoded_id}`, {
        headers: r,
        method: "DELETE"
      });
  }
  performSignedRequest(r, t = () => {
  }) {
    return new Promise((e, s) => {
      const i = new XMLHttpRequest();
      i.upload.addEventListener(
        "progress",
        (h) => t(h)
      ), i.addEventListener("load", (h) => {
        t(h), i.status >= 200 && i.status < 300 || i.status === r.expected ? e(i) : s(`${i.status}: ${i.statusText}`);
      });
      const o = (h) => {
        this._upload.onError(h), s(h);
      };
      i.addEventListener(
        "error",
        () => o(`${i.status}: ${i.statusText || "unknown error"}`)
      ), i.addEventListener(
        "abort",
        () => o(i.statusText || "browser aborted")
      ), i.open(
        r.signature.verb,
        r.signature.url,
        true
        // async
      );
      const a = r.signature.headers;
      for (const h in a)
        h in a && i.setRequestHeader(h, a[h]);
      this._dispose = () => {
        i.abort(), s("user aborted");
      }, i.send(r.data || null);
    });
  }
};
var Tt = class {
  constructor(r, t, e, s = {}, i = it()) {
    this.file = r, this.retries = t, this.parallel = e, this.params = s, this._endpoint = i, this.mime_type = r?.type || this.mime_type;
  }
  _state = new kt({
    status: "waiting",
    progress: 0,
    uploaded: 0
  });
  _request;
  _provider;
  _access_url = "";
  /** Size of the uploaded file in bytes */
  size = 0;
  /** Observer for the status of the upload */
  status = this._state.asObservable();
  mime_type = "binary/octet-stream";
  metadata;
  get id() {
    return this._request?.upload_id;
  }
  /** URL of the uploaded resource */
  get access_url() {
    return this._access_url;
  }
  /** Whether resource is waiting to be uploaded */
  get waiting() {
    return this._state.getValue()?.status === "waiting";
  }
  /** Whether resource is currently being uploaded */
  get in_progress() {
    return this._state.getValue()?.status === "uploading";
  }
  /** Whether resource has been uploaded to the provider */
  get completed() {
    return this._state.getValue()?.status === "complete";
  }
  /** @hidden */
  setAccessUrl(r) {
    this._access_url = r;
  }
  /** @hidden */
  onProgress(r) {
    const t = this._state.getValue();
    this._state.next(__spreadProps(__spreadValues({}, t), {
      status: "uploading",
      uploaded: r,
      progress: Math.floor(r / this.file.size * 1e3) / 10
    }));
  }
  /** @hidden */
  onComplete() {
    const r = this._state.getValue();
    this._state.next(__spreadProps(__spreadValues({}, r), { status: "complete", progress: 100 }));
  }
  /** @hidden */
  onError(r) {
    const t = this._state.getValue();
    this._state.next(__spreadProps(__spreadValues({}, t), { status: "error", error: r }));
  }
  /** Resume uploading the resource */
  async resume(r) {
    const t = this._state.getValue();
    if (!["complete", "uploading", "cancelled"].includes(t.status)) {
      if (r && (this.parallel = r), !this._provider) {
        this._request = new V(this, this._endpoint);
        const { residence: e } = await this._request.initialise(), s = Rt(e);
        s ? (this._provider = new s(this._request, this), this._state.next(__spreadProps(__spreadValues({}, t), { status: "uploading" }))) : this.onError("No provider available to upload to");
      }
      this._provider?.start();
    }
  }
  /** Pause the uploading of the resource */
  pause() {
    const r = this._state.getValue();
    r.status === "uploading" && (this._provider?.pause(), this._state.next(__spreadProps(__spreadValues({}, r), { status: "paused" })));
  }
  /** Cancel the upload of the resource */
  cancel() {
    const r = this._state.getValue();
    ["complete", "cancelled"].includes(r.status) || (r.status === "uploading" && this._provider?.destroy(), this._state.next(__spreadProps(__spreadValues({}, r), { status: "cancelled" })));
  }
};
var nt = {
  auto_start: true,
  auto_remove: false,
  remove_after: 0,
  simultaneous: 2,
  parallel: 3,
  retries: 4,
  providers: []
};
var u = nt;
var _ = [];
function Bt(n = {}) {
  u = __spreadValues(__spreadValues({}, nt), n), u.endpoint && Lt(u.endpoint), Ct(u.worker_url, u.worker_options), u.token && V.setToken(u.token), u.api_key && V.setApiKey(u.api_key), Mt(u.providers);
}
function Mt(n) {
  n.forEach((r) => It(r.lookup, r));
}
function Vt(n, r = {}) {
  if (!it())
    throw "No API endpoint set";
  const t = [];
  return n.forEach((e) => {
    const s = new Tt(
      e,
      u.retries,
      u.parallel,
      r
    );
    t.push(s), _.push(s), s.metadata = u.metadata, s.status.pipe(Ut(({ status: i }) => i === "complete")).subscribe((i) => $t(s)), u.auto_start && ot() && s.resume(u.parallel);
  }), t;
}
function G(n) {
  n.cancel(), _ = _.filter((r) => r !== n);
}
function ot() {
  return _.filter((r) => r.in_progress).length < u.simultaneous;
}
function $t(n) {
  const { auto_start: r, auto_remove: t, remove_after: e } = u;
  t && (e ? setTimeout(() => G(n), e) : G(n));
  const s = _.filter((i) => i.waiting);
  r && s.length && ot() && s[0].resume(u.parallel);
}
var l = /* @__PURE__ */ ((n) => (n[n.Paused = 0] = "Paused", n[n.Uploading = 1] = "Uploading", n[n.Completed = 2] = "Completed", n[n.Aborted = 3] = "Aborted", n))(l || {});
var q = class {
  constructor(r, t) {
    this._request = r, this._upload = t, this._file = this._upload.file, this.size = this._file.size;
  }
  state = 0;
  size;
  progress = 0;
  _file;
  // Strategy is used to indicate progress
  // * undefined == not started
  // * null      == we have made a call to create
  // * string    == upload in progress
  _strategy = void 0;
  _finalising = false;
  _direct_upload = false;
  _progress = {};
  _current_parts = [];
  _pending_parts = [];
  _last_part = 0;
  _memoization = {};
  _finishing = false;
  start() {
    this.state < 1 && (this._finalising ? this._finalise() : this._start());
  }
  pause() {
    this._strategy && this.state === 1 && !this._direct_upload ? (this.state = 0, this._request.abort(), this._pending_parts = this._currentParts(), this._current_parts = []) : (!this._strategy || this._direct_upload) && (this.state = 0, this._request.abort(), this._restart());
    for (const r in this._progress)
      this._progress[r].loaded !== this._progress[r].total && (this._progress[r].loaded = 0);
    this._updateProgress();
  }
  destroy() {
    this._strategy !== void 0 && this.state < 2 && (this._request.destroy(), this._restart(), this.state = 3);
  }
  _restart() {
    this._strategy = void 0, this._current_parts = [], this._pending_parts = [];
  }
  /* istanbul ignore next */
  _makeRequest(r, t) {
    return t.data = r.data, this._request.performSignedRequest(
      t,
      (e) => this._onProgress(r.part, e)
    );
  }
  /* istanbul ignore next */
  _nextPartIndex() {
    return this._pending_parts.length > 0 ? this._last_part = this._pending_parts.shift() : this._last_part += 1, this._current_parts.push(this._last_part), this._last_part;
  }
  /* istanbul ignore next */
  _currentParts() {
    return this._current_parts.concat(this._pending_parts);
  }
  /* istanbul ignore next */
  _completePart(r) {
    this._current_parts = this._current_parts.filter((t) => t !== r);
  }
  /* istanbul ignore next */
  _isComplete(r) {
    console.log("Complete:", r);
    const { loaded: t, total: e } = this._progress[r] || {};
    return t && t === e;
  }
  /* istanbul ignore next */
  _onProgress(r, t) {
    !t?.loaded || !t?.total || (this._progress[r] = { loaded: t.loaded, total: t.total }, this._updateProgress());
  }
  /* istanbul ignore next */
  _onError(r) {
    console.error("Error:", r), this.pause(), this._upload.onError(r);
  }
  _updateProgress() {
    let r = 0;
    for (const t in this._progress)
      r += this._progress[t].loaded || 0;
    this._upload.onProgress(
      Object.keys(this._progress).reduce(
        (t, e) => t + this._progress[e].loaded || 0,
        0
      )
    );
  }
  /* istanbul ignore next */
  async _finalise() {
    this._request.updateStatus({}, true).then(
      () => this._upload.onComplete(),
      (r) => this._onError(r)
    );
  }
  /* istanbul ignore next */
  async _hashPart(r, t, e) {
    const s = this._memoization[r], i = t();
    return s ? {
      data: i,
      md5: s.md5,
      part: s.part
    } : e(i).then((o) => (this._memoization[r] = o, {
      data: i,
      md5: o.md5,
      part: o.part
    }));
  }
  /* istanbul ignore next */
  _getPartData() {
    const r = this._currentParts().filter((e) => typeof e == "number"), t = [];
    return r.forEach((e) => {
      const s = this._memoization[`${e}`];
      s && t.push(s);
    }), {
      part_list: r,
      part_data: t
    };
  }
};
var Gt = class extends q {
  static lookup = "AmazonS3";
  // 5MiB part size
  _part_size = 5242880;
  async _start() {
    if (this._strategy === void 0) {
      if (this.state = l.Uploading, this._strategy = null, this._part_size * 9999 < this.size && (this._part_size = Math.floor(this.size / 9999), this._part_size > 5 * 1024 * 1024 * 1024)) {
        this._upload.cancel(), this._onError("file exceeds maximum size");
        return;
      }
      const r = await this._processPart(1).catch(
        (e) => this._onError(e)
      );
      if (!r || this.state !== l.Uploading) return;
      const t = await this._request.create({
        file_id: window.btoa(m(r.md5))
      }).catch((e) => this._onError(e));
      if (!t) return;
      this._strategy = t.type, t.signature && this._upload.setAccessUrl(
        (t.signature.url || "").split("?")[0]
      ), t.type === "direct_upload" ? this._direct(t, r) : this._resume(t, r);
    } else this.state === l.Paused && this._resume();
  }
  // Calculates the MD5 of the part of the file we are uploading
  _processPart(r) {
    return this._hashPart(
      r.toString(),
      () => {
        let t, e;
        return this.size > this._part_size ? (e = r * this._part_size, e > this.size && (e = this.size), t = this._file.slice(
          (r - 1) * this._part_size,
          e
        )) : t = this._file, t;
      },
      (t) => O().hash(t).then((s) => ({
        md5: s,
        part: r
      }))
    );
  }
  async _resume(r = null, t = null) {
    let e;
    if (r)
      if (r.type === "parts")
        for (this._pending_parts = r.part_list, r.part_data && (this._memoization = r.part_data), e = 0; e < this._upload.parallel; e += 1)
          this._nextPart();
      else {
        const s = await this._request.signedRequest(r).catch((a) => {
          this._restart(), this._onError(a);
        });
        if (!s) return;
        const i = s.responseXML.getElementsByTagName("UploadId")[0].textContent;
        if (!await this._request.updateStatus({
          resumable_id: i,
          file_id: window.btoa(m(t.md5)),
          part: 1
        }).catch((a) => {
          this._restart(), this._onError(a);
        })) return;
        for (e = 1; e < this._upload.parallel; e += 1)
          this._nextPart();
      }
    else
      for (e = 0; e < this._upload.parallel; e += 1)
        this._nextPart();
  }
  _generatePartManifest() {
    let r = "<CompleteMultipartUpload>", t, e;
    for (t = 1; t < 1e4 && (e = this._memoization[t], e); t += 1)
      r += "<Part><PartNumber>" + t + '</PartNumber><ETag>"' + e.md5 + '"</ETag></Part>';
    return r += "</CompleteMultipartUpload>", r;
  }
  _nextPart() {
    const r = this._nextPartIndex();
    let t;
    (r - 1) * this._part_size < this.size ? this._processPart(r).then(
      (e) => {
        this.state === l.Uploading && (t = this._getPartData(), this._request.signNextChunk(
          r,
          window.btoa(m(e.md5)),
          t.part_list,
          t.part_data
        ).then(
          () => this._request.signChunk(
            r,
            window.btoa(m(e.md5))
          ).then(
            (s) => this._setPart(s, e),
            (s) => this._onError(s)
          ),
          (s) => this._onError(s)
        ));
      },
      (e) => this._onError(e)
    ) : this._currentParts().length === 1 && this._currentParts()[0] === r ? (this._finishing = true, this._request.sign("finish").then(
      (e) => {
        e.data = this._generatePartManifest(), this._request.signedRequest(e).then(
          () => this._finalise(),
          (s) => this._onError(s)
        );
      },
      (e) => this._onError(e)
    )) : this._finishing || (this._completePart(r), t = this._getPartData(), t.part_update = true, this._request.updateStatus(t));
  }
  _setPart(r, t) {
    this._makeRequest(t, r).then(
      () => {
        this._completePart(t?.part), this._nextPart();
      },
      (s) => this._onError(s)
    );
  }
  _direct(r, t) {
    const e = this._makeRequest(t, r);
    this._direct_upload = true, e.then(
      () => this._finalise(),
      (s) => this._onError(s)
    );
  }
};
var Jt = class extends q {
  static lookup = "AzureStorage";
  // 2MB part size
  _part_size = 2097152;
  _start() {
    if (this._strategy === void 0) {
      if (this.state = l.Uploading, this._strategy = null, this._part_size * 5e4 < this.size && (this._part_size = Math.floor(this.size / 5e4), this._part_size > 4 * 1024 * 1024)) {
        this._upload.cancel(), this._onError("file exceeds maximum size of 195GB");
        return;
      }
      this._processPart(1).then((r) => {
        this.state === l.Uploading && this._request.create({ file_id: r.md5 }).then((t) => {
          this._strategy = t.type, t.type === "direct_upload" ? this._direct(t, r) : this._resume(t, r);
        }, this._onError.bind(this));
      }, this._onError.bind(this));
    } else this.state === l.Paused && this._resume();
  }
  // Calculates the MD5 of the part of the file we are uploading
  _processPart(r) {
    return this._hashPart(
      r.toString(),
      () => {
        let t, e;
        return this.size > this._part_size ? (e = r * this._part_size, e > this.size && (e = this.size), t = this._file.slice(
          (r - 1) * this._part_size,
          e
        )) : t = this._file, t;
      },
      (t) => O().hash(t).then((s) => ({
        md5: window.btoa(m(s)),
        part: r
      }))
    );
  }
  async _resume(r = null, t = null) {
    let e;
    if (r)
      if (r.type === "parts")
        for (this._pending_parts = r.part_list, r.part_data && (this._memoization = r.part_data), e = 0; e < this._upload.parallel; e += 1)
          this._nextPart();
      else {
        const s = await this._request.signedRequest(r).catch((a) => {
          this._restart(), this._onError(a);
        });
        if (!s) return;
        const i = s.responseXML.getElementsByTagName("UploadId")[0].textContent;
        if (!await this._request.updateStatus({
          resumable_id: i,
          file_id: window.btoa(m(t.md5)),
          part: 1
        }).catch((a) => {
          this._restart(), this._onError(a);
        })) return;
        for (e = 1; e < this._upload.parallel; e += 1)
          this._nextPart();
      }
    else
      for (e = 0; e < this._upload.parallel; e += 1)
        this._nextPart();
  }
  _generatePartManifest() {
    let r = '<?xml version="1.0" encoding="utf-8"?><BlockList>';
    for (let t = 0; t < 5e4 && t * this._part_size < this.size; t += 1)
      r += `<Latest>${window.btoa(this._pad(t + 1))}</Latest>`;
    return r += "</BlockList>", r;
  }
  _pad(r) {
    let t = r.toString();
    for (; t.length < 6; ) t = "0" + t;
    return t;
  }
  _nextPart() {
    const r = this._nextPartIndex();
    let t;
    (r - 1) * this._part_size < this.size ? this._processPart(r).then(
      (e) => {
        this.state === l.Uploading && (t = this._getPartData(), this._request.signNextChunk(
          r,
          e.md5,
          t.part_list,
          t.part_data
        ).then(
          () => this._request.signChunk(r, e.md5).then(
            (s) => this._setPart(s, e),
            (s) => this._onError(s)
          ),
          (s) => this._onError(s)
        ));
      },
      (e) => this._onError(e)
    ) : this._currentParts().length === 1 && this._currentParts()[0] === r ? (this._finishing = true, this._request.sign("finish").then(
      (e) => {
        e.data = this._generatePartManifest(), this._request.signedRequest(e).then(
          () => this._finalise(),
          (s) => this._onError(s)
        );
      },
      (e) => this._onError(e)
    )) : this._finishing || (this._completePart(r), t = this._getPartData(), t.part_update = true, this._request.updateStatus(t));
  }
  _setPart(r, t) {
    this._makeRequest(t, r).then(() => {
      this._completePart(t.part), this._nextPart();
    }, this._onError.bind(this));
  }
  _direct(r, t) {
    const e = this._makeRequest(t, r);
    this._direct_upload = true, e.then(() => this._finalise(), this._onError.bind(this));
  }
};
var Yt = class extends q {
  static lookup = "GoogleCloudStorage";
  _start() {
    (this._strategy === void 0 || this.state === l.Paused) && (this.state = l.Uploading, this._strategy = null, this._processPart(this._file).then((r) => {
      this.state === l.Uploading && this._request.create({ file_id: r.md5 }).then((t) => {
        this._strategy = t.type, t.type === "direct_upload" ? this._direct(t, r) : this._resume(t, r);
      }, this._onError.bind(this));
    }, this._onError.bind(this)));
  }
  // Calculates the MD5 of the part of the file we are uploading
  _processPart(r, t = 0) {
    return this._hashPart(
      t.toString(),
      () => r,
      (e) => O().hash(e).then((i) => ({
        md5: window.btoa(m(i)),
        part: t
      }))
    );
  }
  _resume(r, t) {
    this._request.signedRequest(r).then((e) => {
      if (r.type === "status")
        if (e.status === r.expected) {
          const s = parseInt(
            e.getResponseHeader("Range").split("-")[1],
            10
          ) + 1;
          this._processPart(
            this._file.slice(s),
            s
          ).then((i) => {
            this.state === l.Uploading && this._request.signChunk(s, i.md5).then((o) => {
              this._performUpload(o, i);
            }, this._onError.bind(this));
          }, this._onError.bind(this));
        } else
          this._finalise();
      else
        this._request.updateStatus({
          // grab the upload_id from the Location header
          resumable_id: this._getQueryParams(
            e.getResponseHeader("Location").split("?")[1]
          ).upload_id,
          file_id: t.md5,
          part: 0
        }).then(
          (s) => this._performUpload(s, t),
          (s) => {
            this._restart(), this._onError(s);
          }
        );
    }, this._onError.bind(this));
  }
  _performUpload(r, t) {
    this._makeRequest(t, r).then(() => this._finalise(), this._onError.bind(this));
  }
  _direct(r, t) {
    const e = this._makeRequest(t, r);
    this._direct_upload = true, e.then(() => {
      this._finalise();
    }, this._onError.bind(this));
  }
  _getQueryParams(r) {
    r = r.split("+").join(" ");
    const t = {};
    let e;
    const s = /[?&]?([^=]+)=([^&]*)/g;
    for (; e = s.exec(r); )
      t[decodeURIComponent(e[1])] = decodeURIComponent(
        e[2]
      );
    return t;
  }
};
var Qt = class extends q {
  static lookup = "OpenStackSwift";
  // 2MB part size
  _partSize = 2097152;
  _start() {
    if (this._strategy === void 0) {
      if (this.state = l.Uploading, this._strategy = null, this._partSize * 1e3 < this.size && (this._partSize = Math.floor(this.size / 1e3), this._partSize > 5 * 1024 * 1024 * 1024)) {
        this._upload.cancel(), this._onError("file exceeds maximum size");
        return;
      }
      this._processPart(1).then((r) => {
        this.state === l.Uploading && this._request.create({ file_id: r.md5 }).then((t) => {
          this._strategy = t.type, t.type === "direct_upload" ? this._direct(t, r) : this._resume(t, r);
        }, this._onError.bind(this));
      }, this._onError.bind(this));
    } else this.state === l.Paused && this._resume();
  }
  // Calculates the MD5 of the part of the file we are uploading
  _processPart(r) {
    return this._hashPart(
      r.toString(),
      () => {
        let t, e;
        return this.size > this._partSize ? (e = r * this._partSize, e > this.size && (e = this.size), t = this._file.slice(
          (r - 1) * this._partSize,
          e
        )) : t = this._file, t;
      },
      (t) => O().hash(t).then((s) => ({
        md5: s,
        part: r,
        size_bytes: t.size
      }))
    );
  }
  _resume(r = null, t = null) {
    let e;
    if (r)
      if (r.type === "parts") {
        if (this._pending_parts = r.part_list, r.part_data) {
          let s;
          this._memoization = r.part_data;
          for (const i in this._memoization)
            this._memoization.hasOwnProperty(i) && (s = this._memoization[i], s.path || this._pending_parts.push(s.part));
          this._pending_parts = this._pending_parts.sort().filter((i, o, a) => !o || i !== a[o - 1]);
        }
        for (e = 0; e < this._upload.parallel; e += 1)
          this._nextPart();
      } else
        this._request.updateStatus({
          resumable_id: "n/a",
          file_id: t.md5,
          part: 1
        }).then(
          (s) => {
            for (this._nextPartIndex(), this._memoization[1].path = s.path, this._setPart(s, t), e = 1; e < this._upload.parallel; e += 1)
              this._nextPart();
          },
          (s) => {
            this._restart(), this._onError(s);
          }
        );
    else
      for (e = 0; e < this._upload.parallel; e += 1)
        this._nextPart();
  }
  _generatePartManifest() {
    const r = [];
    let t;
    for (let e = 1; e < 1e4 && (t = this._memoization[e], t); e += 1)
      r.push({
        path: t.path,
        etag: t.md5,
        size_bytes: t.size_bytes
      });
    return JSON.stringify(r);
  }
  _nextPart() {
    const r = this._nextPartIndex();
    let t;
    (r - 1) * this._partSize < this.size ? this._processPart(r).then((e) => {
      this.state === l.Uploading && (t = this._getPartData(), this._request.signNextChunk(
        r,
        e.md5,
        t.part_list,
        t.part_data
      ).then((s) => {
        this._memoization[r].path = s.path, this._setPart(s, e);
      }, this._onError.bind(this)));
    }, this._onError.bind(this)) : this._currentParts().length === 1 && this._currentParts()[0] === r ? (this._finishing = true, this._request.sign("finish").then((e) => {
      e.signature ? (e.data = this._generatePartManifest(), this._request.signedRequest(e).then(
        this._finalise.bind(this),
        this._onError.bind(this)
      )) : this._finalise();
    }, this._onError.bind(this))) : this._finishing || (this._completePart(r), t = this._getPartData(), t.part_update = true, this._request.updateStatus(t));
  }
  _setPart(r, t) {
    this._makeRequest(t, r).then(() => {
      this._completePart(t.part), this._nextPart();
    }, this._onError.bind(this));
  }
  _direct(r, t) {
    const e = this._makeRequest(t, r);
    this._direct_upload = true, e.then(() => this._finalise(), this._onError.bind(this));
  }
};

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
    fileReader.addEventListener("loadend", (e) => {
      const arrayBuffer = e.target.result;
      const blob = arrayBufferToBlob(arrayBuffer, file.type);
      const upload_list = Vt([blob], {
        file_name: file.name,
        permissions,
        public: is_public
      });
      const upload = upload_list[0];
      const upload_details = {
        id: randomInt(999999999999),
        name: file.name,
        progress: 0,
        link: uploadURL(upload.id),
        formatted_size: jt(file.size),
        size: file.size,
        upload
      };
      upload.status.pipe(takeWhile((_2) => _2.status !== "complete", true)).subscribe((state) => {
        if (upload.access_url) {
          upload_details.link = !is_public ? uploadURL(upload.id) : upload.access_url;
        }
        upload_details.progress = state.progress;
        observer.next(upload_details);
        if (state.status === "error")
          observer.error(__spreadProps(__spreadValues({}, upload_details), {
            error: state.error
          }));
        if (state.status === "complete")
          observer.complete();
      });
      observer.next(upload_details);
    });
    fileReader.readAsArrayBuffer(file);
  });
}

export {
  Bt,
  Gt,
  Jt,
  Yt,
  Qt,
  uploadFile
};
//# sourceMappingURL=chunk-L2T7ZGS6.js.map
