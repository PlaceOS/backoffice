import {
  randomInt
} from "./chunk-SXYVSUAR.js";
import {
  J
} from "./chunk-6NXCBA4X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DPH5AP7B.js";

// node_modules/@placeos/cloud-uploads/dist/index.es.js
function w(s) {
  return typeof s == "function";
}
var ut = function(s, e) {
  return ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, ut(s, e);
};
function L(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ut(s, e);
  function t() {
    this.constructor = s;
  }
  s.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function ht(s) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && s[e], r = 0;
  if (t) return t.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && r >= s.length && (s = void 0), { value: s && s[r++], done: !s };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function lt(s, e) {
  var t = typeof Symbol == "function" && s[Symbol.iterator];
  if (!t) return s;
  var r = t.call(s), i, n = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) n.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}
function ct(s, e, t) {
  if (t || arguments.length === 2) for (var r = 0, i = e.length, n; r < i; r++)
    (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return s.concat(n || Array.prototype.slice.call(e));
}
function yt(s) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = s(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var nt = yt(function(s) {
  return function(t) {
    s(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function dt(s, e) {
  if (s) {
    var t = s.indexOf(e);
    0 <= t && s.splice(t, 1);
  }
}
var tt = (function() {
  function s(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return s.prototype.unsubscribe = function() {
    var e, t, r, i, n;
    if (!this.closed) {
      this.closed = true;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var o = ht(a), u = o.next(); !u.done; u = o.next()) {
              var c = u.value;
              c.remove(this);
            }
          } catch (b) {
            e = { error: b };
          } finally {
            try {
              u && !u.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          a.remove(this);
      var p = this.initialTeardown;
      if (w(p))
        try {
          p();
        } catch (b) {
          n = b instanceof nt ? b.errors : [b];
        }
      var x = this._finalizers;
      if (x) {
        this._finalizers = null;
        try {
          for (var m = ht(x), y = m.next(); !y.done; y = m.next()) {
            var ae = y.value;
            try {
              xt(ae);
            } catch (b) {
              n = n ?? [], b instanceof nt ? n = ct(ct([], lt(n)), lt(b.errors)) : n.push(b);
            }
          }
        } catch (b) {
          r = { error: b };
        } finally {
          try {
            y && !y.done && (i = m.return) && i.call(m);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (n)
        throw new nt(n);
    }
  }, s.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        xt(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && dt(t, e);
  }, s.prototype.remove = function(e) {
    var t = this._finalizers;
    t && dt(t, e), e instanceof s && e._removeParent(this);
  }, s.EMPTY = (function() {
    var e = new s();
    return e.closed = true, e;
  })(), s;
})();
var Mt = tt.EMPTY;
function qt(s) {
  return s instanceof tt || s && "closed" in s && w(s.remove) && w(s.add) && w(s.unsubscribe);
}
function xt(s) {
  w(s) ? s() : s.unsubscribe();
}
var ue = {
  Promise: void 0
};
var he = {
  setTimeout: function(s, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    return setTimeout.apply(void 0, ct([s, e], lt(t)));
  },
  clearTimeout: function(s) {
    return clearTimeout(s);
  },
  delegate: void 0
};
function le(s) {
  he.setTimeout(function() {
    throw s;
  });
}
function At() {
}
function G(s) {
  s();
}
var wt = (function(s) {
  L(e, s);
  function e(t) {
    var r = s.call(this) || this;
    return r.isStopped = false, t ? (r.destination = t, qt(t) && t.add(r)) : r.destination = fe, r;
  }
  return e.create = function(t, r, i) {
    return new ft(t, r, i);
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
})(tt);
var ce = (function() {
  function s(e) {
    this.partialObserver = e;
  }
  return s.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        F(r);
      }
  }, s.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        F(r);
      }
    else
      F(e);
  }, s.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        F(t);
      }
  }, s;
})();
var ft = (function(s) {
  L(e, s);
  function e(t, r, i) {
    var n = s.call(this) || this, a;
    return w(t) || !t ? a = {
      next: t ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : a = t, n.destination = new ce(a), n;
  }
  return e;
})(wt);
function F(s) {
  le(s);
}
function de(s) {
  throw s;
}
var fe = {
  closed: true,
  next: At,
  error: de,
  complete: At
};
var _e = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Nt(s) {
  return s;
}
function pe(s) {
  return s.length === 0 ? Nt : s.length === 1 ? s[0] : function(t) {
    return s.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var _t = (function() {
  function s(e) {
    e && (this._subscribe = e);
  }
  return s.prototype.lift = function(e) {
    var t = new s();
    return t.source = this, t.operator = e, t;
  }, s.prototype.subscribe = function(e, t, r) {
    var i = this, n = ge(e) ? e : new ft(e, t, r);
    return G(function() {
      var a = i, o = a.operator, u = a.source;
      n.add(o ? o.call(n, u) : u ? i._subscribe(n) : i._trySubscribe(n));
    }), n;
  }, s.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, s.prototype.forEach = function(e, t) {
    var r = this;
    return t = zt(t), new t(function(i, n) {
      var a = new ft({
        next: function(o) {
          try {
            e(o);
          } catch (u) {
            n(u), a.unsubscribe();
          }
        },
        error: n,
        complete: i
      });
      r.subscribe(a);
    });
  }, s.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, s.prototype[_e] = function() {
    return this;
  }, s.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return pe(e)(this);
  }, s.prototype.toPromise = function(e) {
    var t = this;
    return e = zt(e), new e(function(r, i) {
      var n;
      t.subscribe(function(a) {
        return n = a;
      }, function(a) {
        return i(a);
      }, function() {
        return r(n);
      });
    });
  }, s.create = function(e) {
    return new s(e);
  }, s;
})();
function zt(s) {
  var e;
  return (e = s ?? ue.Promise) !== null && e !== void 0 ? e : Promise;
}
function me(s) {
  return s && w(s.next) && w(s.error) && w(s.complete);
}
function ge(s) {
  return s && s instanceof wt || me(s) && qt(s);
}
var be = (function(s) {
  L(e, s);
  function e(t, r, i, n, a, o) {
    var u = s.call(this, t) || this;
    return u.onFinalize = a, u.shouldUnsubscribe = o, u._next = r ? function(c) {
      try {
        r(c);
      } catch (p) {
        t.error(p);
      }
    } : s.prototype._next, u._error = n ? function(c) {
      try {
        n(c);
      } catch (p) {
        t.error(p);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._error, u._complete = i ? function() {
      try {
        i();
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      s.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
})(wt);
var ye = yt(function(s) {
  return function() {
    s(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var jt = (function(s) {
  L(e, s);
  function e() {
    var t = s.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new Ot(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ye();
  }, e.prototype.next = function(t) {
    var r = this;
    G(function() {
      var i, n;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var a = ht(r.currentObservers), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            u.next(t);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    G(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = t;
        for (var i = r.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    G(function() {
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
    var r = this, i = this, n = i.hasError, a = i.isStopped, o = i.observers;
    return n || a ? Mt : (this.currentObservers = null, o.push(t), new tt(function() {
      r.currentObservers = null, dt(o, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, i = r.hasError, n = r.thrownError, a = r.isStopped;
    i ? t.error(n) : a && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new _t();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new Ot(t, r);
  }, e;
})(_t);
var Ot = (function(s) {
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && i !== void 0 ? i : Mt;
  }, e;
})(jt);
var ve = new _t(function(s) {
  return s.complete();
});
var Ht = yt(function(s) {
  return function() {
    s(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
var Bt = (function(s) {
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
})(jt);
var ke = new Int32Array(4);
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
    let i, n, a, o;
    for (o = 0; o < 4; o += 1)
      for (n = o * 8, i = e[o], a = 0; a < 8; a += 2)
        r[n + 1 + a] = t.charAt(i & 15), i >>>= 4, r[n + 0 + a] = t.charAt(i & 15), i >>>= 4;
    return r.join("");
  }
  static _md5cycle(e, t) {
    let r = e[0], i = e[1], n = e[2], a = e[3];
    r += (i & n | ~i & a) + t[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + i | 0, a += (r & i | ~r & n) + t[1] - 389564586 | 0, a = (a << 12 | a >>> 20) + r | 0, n += (a & r | ~a & i) + t[2] + 606105819 | 0, n = (n << 17 | n >>> 15) + a | 0, i += (n & a | ~n & r) + t[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & a) + t[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + i | 0, a += (r & i | ~r & n) + t[5] + 1200080426 | 0, a = (a << 12 | a >>> 20) + r | 0, n += (a & r | ~a & i) + t[6] - 1473231341 | 0, n = (n << 17 | n >>> 15) + a | 0, i += (n & a | ~n & r) + t[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & a) + t[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + i | 0, a += (r & i | ~r & n) + t[9] - 1958414417 | 0, a = (a << 12 | a >>> 20) + r | 0, n += (a & r | ~a & i) + t[10] - 42063 | 0, n = (n << 17 | n >>> 15) + a | 0, i += (n & a | ~n & r) + t[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & n | ~i & a) + t[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + i | 0, a += (r & i | ~r & n) + t[13] - 40341101 | 0, a = (a << 12 | a >>> 20) + r | 0, n += (a & r | ~a & i) + t[14] - 1502002290 | 0, n = (n << 17 | n >>> 15) + a | 0, i += (n & a | ~n & r) + t[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + n | 0, r += (i & a | n & ~a) + t[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + i | 0, a += (r & n | i & ~n) + t[6] - 1069501632 | 0, a = (a << 9 | a >>> 23) + r | 0, n += (a & i | r & ~i) + t[11] + 643717713 | 0, n = (n << 14 | n >>> 18) + a | 0, i += (n & r | a & ~r) + t[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & a | n & ~a) + t[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + i | 0, a += (r & n | i & ~n) + t[10] + 38016083 | 0, a = (a << 9 | a >>> 23) + r | 0, n += (a & i | r & ~i) + t[15] - 660478335 | 0, n = (n << 14 | n >>> 18) + a | 0, i += (n & r | a & ~r) + t[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & a | n & ~a) + t[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + i | 0, a += (r & n | i & ~n) + t[14] - 1019803690 | 0, a = (a << 9 | a >>> 23) + r | 0, n += (a & i | r & ~i) + t[3] - 187363961 | 0, n = (n << 14 | n >>> 18) + a | 0, i += (n & r | a & ~r) + t[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i & a | n & ~a) + t[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + i | 0, a += (r & n | i & ~n) + t[2] - 51403784 | 0, a = (a << 9 | a >>> 23) + r | 0, n += (a & i | r & ~i) + t[7] + 1735328473 | 0, n = (n << 14 | n >>> 18) + a | 0, i += (n & r | a & ~r) + t[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + n | 0, r += (i ^ n ^ a) + t[5] - 378558 | 0, r = (r << 4 | r >>> 28) + i | 0, a += (r ^ i ^ n) + t[8] - 2022574463 | 0, a = (a << 11 | a >>> 21) + r | 0, n += (a ^ r ^ i) + t[11] + 1839030562 | 0, n = (n << 16 | n >>> 16) + a | 0, i += (n ^ a ^ r) + t[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ a) + t[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + i | 0, a += (r ^ i ^ n) + t[4] + 1272893353 | 0, a = (a << 11 | a >>> 21) + r | 0, n += (a ^ r ^ i) + t[7] - 155497632 | 0, n = (n << 16 | n >>> 16) + a | 0, i += (n ^ a ^ r) + t[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ a) + t[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + i | 0, a += (r ^ i ^ n) + t[0] - 358537222 | 0, a = (a << 11 | a >>> 21) + r | 0, n += (a ^ r ^ i) + t[3] - 722521979 | 0, n = (n << 16 | n >>> 16) + a | 0, i += (n ^ a ^ r) + t[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (i ^ n ^ a) + t[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + i | 0, a += (r ^ i ^ n) + t[12] - 421815835 | 0, a = (a << 11 | a >>> 21) + r | 0, n += (a ^ r ^ i) + t[15] + 530742520 | 0, n = (n << 16 | n >>> 16) + a | 0, i += (n ^ a ^ r) + t[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + n | 0, r += (n ^ (i | ~a)) + t[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + i | 0, a += (i ^ (r | ~n)) + t[7] + 1126891415 | 0, a = (a << 10 | a >>> 22) + r | 0, n += (r ^ (a | ~i)) + t[14] - 1416354905 | 0, n = (n << 15 | n >>> 17) + a | 0, i += (a ^ (n | ~r)) + t[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~a)) + t[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + i | 0, a += (i ^ (r | ~n)) + t[3] - 1894986606 | 0, a = (a << 10 | a >>> 22) + r | 0, n += (r ^ (a | ~i)) + t[10] - 1051523 | 0, n = (n << 15 | n >>> 17) + a | 0, i += (a ^ (n | ~r)) + t[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~a)) + t[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + i | 0, a += (i ^ (r | ~n)) + t[15] - 30611744 | 0, a = (a << 10 | a >>> 22) + r | 0, n += (r ^ (a | ~i)) + t[6] - 1560198380 | 0, n = (n << 15 | n >>> 17) + a | 0, i += (a ^ (n | ~r)) + t[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + n | 0, r += (n ^ (i | ~a)) + t[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + i | 0, a += (i ^ (r | ~n)) + t[11] - 1120210379 | 0, a = (a << 10 | a >>> 22) + r | 0, n += (r ^ (a | ~i)) + t[2] + 718787259 | 0, n = (n << 15 | n >>> 17) + a | 0, i += (a ^ (n | ~r)) + t[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + n | 0, e[0] = r + e[0] | 0, e[1] = i + e[1] | 0, e[2] = n + e[2] | 0, e[3] = a + e[3] | 0;
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
    let i = this._bufferLength, n, a;
    for (a = 0; a < e.length; a += 1) {
      if (n = e.charCodeAt(a), n < 128)
        t[i++] = n;
      else if (n < 2048)
        t[i++] = (n >>> 6) + 192, t[i++] = n & 63 | 128;
      else if (n < 55296 || n > 56319)
        t[i++] = (n >>> 12) + 224, t[i++] = n >>> 6 & 63 | 128, t[i++] = n & 63 | 128;
      else {
        if (n = (n - 55296) * 1024 + (e.charCodeAt(++a) - 56320) + 65536, n > 1114111)
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
    let i = this._bufferLength, n, a = 0;
    for (; ; ) {
      for (n = Math.min(e.length - a, 64 - i); n--; )
        t[i++] = e.charCodeAt(a++);
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
    let i = this._bufferLength, n, a = 0;
    for (; ; ) {
      for (n = Math.min(e.length - a, 64 - i); n--; )
        t[i++] = e[a++];
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
    const a = this._dataLength * 8;
    if (r[t] = 128, r[t + 1] = r[t + 2] = r[t + 3] = 0, i.set(_f.buffer32Identity.subarray(n), n), t > 55 && (_f._md5cycle(this._state, i), i.set(_f.buffer32Identity)), a <= 4294967295)
      i[14] = a;
    else {
      const o = a.toString(16).match(/(.*?)(.{0,8})$/);
      if (o === null) return e ? ke : "";
      const u = parseInt(o[2], 16), c = parseInt(o[1], 16) || 0;
      i[14] = u, i[15] = c;
    }
    return _f._md5cycle(this._state, i), e ? this._state : _f._hex(this._state);
  }
};
if (f.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Ft = class {
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
function hr(s, e = false) {
  const t = e ? 1e3 : 1024;
  if (s < t)
    return s + (e ? " iB" : " B");
  const r = Math.floor(Math.log(s) / Math.log(t)), i = (e ? "kMGTPE" : "KMGTPE").charAt(r - 1) + (e ? "iB" : "B");
  return (s / Math.pow(t, r)).toFixed(1) + " " + i;
}
var q = 1024 * 1024;
function Ie(s) {
  return s.toString().padStart(6, "0");
}
var Re = {
  name: "EMPTY",
  part_size: 5 * q,
  resume_id: () => "",
  finalise_body: () => ""
};
var Ct = {
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
var Dt = {
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
var mt = {
  name: "AzureStorage",
  part_size: 2 * q,
  // Azure uses block IDs, not a resumable upload ID
  // Use a placeholder that identifies this upload session
  resume_id: (s) => s,
  finalise_body: (s, e) => {
    const t = Math.ceil(s.file.size / mt.part_size);
    let r = '<?xml version="1.0" encoding="utf-8"?><BlockList>';
    for (let i = 1; i <= t; i++)
      r += `<Latest>${window.btoa(Ie(i))}</Latest>`;
    return r += "</BlockList>", r;
  }
};
var Tt = {
  name: "OpenStackSwift",
  part_size: 2 * q,
  // OpenStack Swift doesn't use resumable IDs for static large objects
  resume_id: () => "n/a",
  // OpenStack manifest is typically generated server-side
  // If needed client-side, it requires path info from server responses
  finalise_body: () => ""
};
function Me(s) {
  return s === Ct.name ? Ct : s === Dt.name ? Dt : s === mt.name ? mt : s === Tt.name ? Tt : (console.warn(`[UPLOADS] Unknown provider: "${s}", using EMPTY_PROVIDER`), Re);
}
var Y = [300, 900, 2700];
var J2 = [];
var v = [];
var ot = 0;
var I = /* @__PURE__ */ new Set();
var $ = /* @__PURE__ */ new Set();
var E = [];
var A = /* @__PURE__ */ new Map();
var k = /* @__PURE__ */ new Map();
var l = {
  simultaneous: 2,
  parallel: 3,
  retries: 3,
  auto_start: true,
  auto_remove: false,
  remove_after_ms: -1
};
function qe(s) {
  console.debug("[UPLOADS] Configured upload manager"), l = __spreadValues(__spreadValues({}, l), s);
}
async function Ne(s) {
  const { worker: e, index: t } = await or();
  try {
    const n = (await e.hash(s)).replace(/[^0-9a-fA-F]/g, ""), a = window.btoa(ne(n));
    return { hex: n, base64: a };
  } finally {
    ur(t);
  }
}
function vt(s) {
  for (const e of k.keys())
    e.startsWith(`${s}:`) && k.delete(e);
}
function N(s, e) {
  return Math.ceil(s.size / e);
}
function Xt(s, e, t) {
  const r = (e - 1) * t, i = Math.min(r + t, s.size);
  return s.slice(r, i);
}
function _(s, e) {
  const t = s.state.getValue();
  s.state.next(__spreadValues(__spreadValues({}, t), e));
}
function je(s) {
  return s instanceof Error && s.message ? s.message : typeof s == "string" && s ? s : "Unknown upload error";
}
function Qt(s) {
  return s instanceof P ? s.retryable : true;
}
function Zt(s) {
  return new Promise((e) => setTimeout(e, s));
}
function X(s) {
  return I.has(s.id) ? true : I.size >= l.simultaneous ? false : (I.add(s.id), true);
}
function j(s) {
  I.delete(s) && Fe();
}
function z(s, e, t) {
  console.error(`[UPLOADS] ${t} for ${s.file.name}:`, e), vt(s.id), v = v.filter((r) => r.upload_id !== s.id), _(s, {
    status: "FAILED",
    working: [],
    error: je(e)
  }), j(s.id);
}
function He(s) {
  const e = new Set(s.state.getValue().completed), t = N(s.file, s.provider.part_size);
  for (let r = 1; r <= t; r++)
    if (!e.has(r)) return r;
  return t + 1;
}
function Pt(s) {
  if (s.is_direct) {
    St(s);
    return;
  }
  const e = He(s), t = N(s.file, s.provider.part_size);
  if (e > t) {
    te(s).catch(
      (r) => z(s, r, "Finalisation failed")
    );
    return;
  }
  Ve(s, e).catch(
    (r) => z(s, r, "Failed to queue chunks")
  );
}
async function Be(s, e) {
  let t;
  try {
    t = await fetch(s.url, {
      method: s.verb,
      headers: s.headers,
      body: e
    });
  } catch (r) {
    const i = r instanceof Error ? r.message : "Unknown network error";
    throw new P(`Chunk upload failed: ${i}`);
  }
  if (!t.ok) {
    let r = "";
    try {
      r = await t.text();
    } catch {
    }
    throw new P(
      `Chunk upload failed with status ${t.status}: ${r || t.statusText}`,
      t.status,
      r
    );
  }
  return t.headers.get("ETag") || await t.text();
}
async function K() {
  if (v.length === 0 || ot >= l.parallel)
    return;
  const s = v.shift();
  if (!s) return;
  const e = O(s.upload_id);
  if (!e || $.has(s.upload_id)) {
    K();
    return;
  }
  ot++;
  const t = e.state.getValue();
  _(e, {
    status: "UPLOADING",
    working: [...t.working, s.part]
  });
  try {
    const i = k.get(`${e.id}:${s.part}`)?.base64 ?? "", n = N(
      e.file,
      e.provider.part_size
    ), a = e.state.getValue().completed;
    let o;
    if (a.length === 0)
      o = await er(
        e.id,
        e.resume_id,
        s.part,
        i
      );
    else {
      const m = {
        part_list: a,
        part_data: a.map((y) => ({
          part: y,
          md5: k.get(`${e.id}:${y}`)?.base64 ?? ""
        }))
      };
      o = await rr(
        e.id,
        s.part,
        i,
        m
      );
    }
    const u = Xt(
      e.file,
      s.part,
      e.provider.part_size
    );
    await Be(o, u);
    const c = e.state.getValue(), p = [...c.completed, s.part].sort(
      (m, y) => m - y
    ), x = c.working.filter((m) => m !== s.part);
    if (_(e, {
      completed: p,
      working: x,
      progress: Math.round(p.length / n * 100)
    }), p.length === n)
      try {
        await te(e);
      } catch (m) {
        z(e, m, "Finalisation failed");
        return;
      }
  } catch (r) {
    const n = e.state.getValue().working.filter((a) => a !== s.part);
    if (Qt(r) && s.retries < l.retries) {
      const a = Y[Math.min(s.retries, Y.length - 1)];
      console.warn(
        `Chunk upload failed for part ${s.part}, retrying in ${a}ms (${s.retries + 1}/${l.retries})...`,
        r
      ), _(e, { working: n }), Zt(a).then(() => {
        O(s.upload_id) && (v.push(__spreadProps(__spreadValues({}, s), { retries: s.retries + 1 })), K());
      });
    } else
      z(
        e,
        r,
        `Chunk ${s.part} failed after ${l.retries} retries`
      );
  } finally {
    ot -= 1, K();
  }
}
async function te(s) {
  const e = s.state.getValue(), t = [];
  for (const i of e.completed) {
    const n = k.get(`${s.id}:${i}`);
    t.push({
      part: i,
      md5: n?.base64 ?? "",
      md5_hex: n?.hex ?? ""
    });
  }
  const r = await sr(s.id, {
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
      const a = n instanceof Error ? n.message : "Unknown network error";
      throw new P(`Finalization request failed: ${a}`);
    }
    if (!i.ok) {
      let n = "";
      try {
        n = await i.text();
      } catch {
      }
      throw new P(
        `Finalization request failed with status ${i.status}: ${n || i.statusText}`,
        i.status,
        n
      );
    }
  }
  if (await se(s.id), vt(s.id), _(s, {
    status: "COMPLETED",
    progress: 100,
    error: void 0
  }), j(s.id), l.auto_remove)
    if (l.remove_after_ms >= 0) {
      const i = setTimeout(() => {
        M(s.id), A.delete(s.id);
      }, l.remove_after_ms);
      A.set(s.id, i);
    } else
      M(s.id);
}
function Fe() {
  if (E.length === 0 || I.size >= l.simultaneous)
    return;
  const s = E.shift();
  if (s) {
    if (!X(s)) {
      E.unshift(s);
      return;
    }
    _(s, { status: "UPLOADING" }), Pt(s);
  }
}
async function St(s, e = 0) {
  if (!s.direct_signature) {
    z(
      s,
      new Error(`Direct upload ${s.id} is missing its signature`),
      "Direct upload could not start"
    );
    return;
  }
  console.debug(
    `[UPLOADS] Processing direct upload for ${s.file.name}...`
  ), _(s, { status: "UPLOADING", progress: 0 });
  try {
    const t = await fetch(s.direct_signature.url, {
      method: s.direct_signature.verb,
      headers: s.direct_signature.headers,
      body: s.file
    });
    if (!t.ok) {
      let r = "";
      try {
        r = await t.text();
      } catch {
      }
      throw new P(
        `Upload failed with status ${t.status}: ${r || t.statusText}`,
        t.status,
        r
      );
    }
    if (console.debug(
      `[UPLOADS] Direct upload complete for ${s.file.name}, committing...`
    ), await se(s.id), _(s, {
      status: "COMPLETED",
      progress: 100,
      error: void 0
    }), j(s.id), l.auto_remove)
      if (l.remove_after_ms >= 0) {
        const r = setTimeout(() => {
          M(s.id), A.delete(s.id);
        }, l.remove_after_ms);
        A.set(s.id, r);
      } else
        M(s.id);
  } catch (t) {
    if (Qt(t) && e < l.retries) {
      const r = Y[Math.min(e, Y.length - 1)];
      if (console.warn(
        `[UPLOADS] Direct upload failed for ${s.file.name}, retrying in ${r}ms (${e + 1}/${l.retries})...`,
        t
      ), await Zt(r), !O(s.id) || $.has(s.id)) return;
      await St(s, e + 1);
    } else
      z(
        s,
        t,
        `Direct upload failed after ${l.retries} retries`
      );
  }
}
async function Ve(s, e = 1) {
  if (!s.provider.part_size || s.provider.part_size <= 0)
    throw new Error(
      `Invalid provider part_size: ${s.provider.part_size}. Provider: ${s.provider.name}`
    );
  if (!s.resume_id)
    throw new Error(
      `Invalid resume_id: ${s.resume_id}. Upload: ${s.id}`
    );
  const t = N(s.file, s.provider.part_size), r = s.state.getValue(), i = ar();
  console.debug(
    `[UPLOADS] Queuing ${t} chunks for ${s.file.name} (part size: ${s.provider.part_size}, workers: ${i})`
  );
  const n = /* @__PURE__ */ new Set(), a = async (o) => {
    const u = `${s.id}:${o}`;
    if (!k.has(u)) {
      console.debug(
        `[UPLOADS] Computing hash for part ${o}/${t}...`
      );
      const x = Xt(
        s.file,
        o,
        s.provider.part_size
      ), m = await Ne(x);
      k.set(u, m), console.debug(`[UPLOADS] Part ${o}/${t} hash cached`);
    }
    const c = (o - 1) * s.provider.part_size, p = Math.min(
      c + s.provider.part_size,
      s.file.size
    );
    v.push({
      upload_id: s.id,
      part: o,
      start: c,
      end: p,
      retries: 0
    }), K();
  };
  for (let o = e; o <= t; o++) {
    if (r.completed.includes(o)) continue;
    if ($.has(s.id) || !O(s.id)) {
      console.debug(
        `[UPLOADS] Chunk queuing cancelled for ${s.file.name}`
      ), await Promise.all(n);
      return;
    }
    const u = a(o).finally(() => {
      n.delete(u);
    });
    n.add(u), n.size >= i && await Promise.race(n);
  }
  await Promise.all(n), console.debug(`[UPLOADS] All chunks queued for ${s.file.name}`);
}
function We(s, e = []) {
  if (console.debug(
    `[UPLOADS] Adding upload to manager (${s.file.name})...`
  ), J2.push(s), $.delete(s.id), s.is_direct) {
    if (console.debug(`[UPLOADS] Upload is direct (${s.file.name})`), _(s, {
      status: l.auto_start ? "UPLOADING" : "PAUSED",
      completed: [],
      pending_complete: [],
      working: [],
      progress: 0
    }), !l.auto_start)
      return;
    if (!X(s)) {
      E.push(s), _(s, { status: "PAUSED" });
      return;
    }
    St(s);
    return;
  }
  console.debug(`[UPLOADS] Upload is chunked (${s.file.name})`);
  const t = N(s.file, s.provider.part_size), r = [...e].sort((n, a) => n - a), i = Math.round(r.length / t * 100);
  if (_(s, {
    status: l.auto_start ? "UPLOADING" : "PAUSED",
    completed: r,
    pending_complete: [],
    working: [],
    progress: i
  }), !!l.auto_start) {
    if (console.debug(`[UPLOADS] Staring upload (${s.file.name})...`), !X(s)) {
      E.push(s), _(s, { status: "PAUSED" });
      return;
    }
    console.debug(
      `[UPLOADS] Queuing chunks to upload (${s.file.name})...`
    ), Pt(s);
  }
}
function O(s) {
  return J2.find((e) => e.id === s);
}
function Ge(s) {
  const e = O(s);
  e && ($.add(s), v = v.filter((t) => t.upload_id !== s), _(e, { status: "PAUSED" }), j(s));
}
function Ke(s) {
  const e = O(s);
  if (e && e.state.getValue().status !== "UPLOADING") {
    if ($.delete(s), !X(e)) {
      E.some((t) => t.id === s) || E.push(e), _(e, { status: "PAUSED" });
      return;
    }
    _(e, { status: "UPLOADING", error: void 0 }), Pt(e);
  }
}
function M(s) {
  const e = A.get(s);
  e && (clearTimeout(e), A.delete(s)), vt(s), $.add(s), v = v.filter((t) => t.upload_id !== s), E = E.filter((t) => t.id !== s), J2 = J2.filter((t) => t.id !== s), $.delete(s), j(s);
}
function yr(s = {}) {
  const {
    token: e,
    api_key: t,
    worker_url: r = ie,
    worker_options: i,
    simultaneous: n = 2,
    parallel: a = 3,
    retries: o = 3,
    auto_start: u = true,
    auto_remove: c = false,
    remove_after_ms: p = -1
  } = s;
  console.debug("[UPLOADS] Initialising..."), t ? Je(t) : e && Ye(e), Xe(o), qe({
    simultaneous: n,
    parallel: a,
    retries: o,
    auto_start: u,
    auto_remove: c,
    remove_after_ms: p
  }), ir(r, i);
}
function It(s, e, t, r, i = false, n) {
  return {
    id: s,
    resume_id: r,
    file: e,
    provider: t,
    is_direct: i,
    direct_signature: n,
    state: new Bt({
      status: "PAUSED",
      completed: [],
      pending_complete: [],
      working: [],
      progress: 0
    }),
    pause: () => Ge(s),
    resume: () => Ke(s),
    remove: () => M(s)
  };
}
async function wr(s, e = {}) {
  const { permissions: t = "none", public: r = false } = e, i = nr();
  if (!i) throw new Error("No hash worker available");
  const a = (await i.hash(s.slice())).replace(/[^0-9a-fA-F]/g, ""), o = await tr(
    {
      file_size: s.size,
      file_name: s.name,
      file_mime: s.type,
      file_id: window.btoa(ne(a)),
      permissions: t,
      public: r
    },
    s
  );
  return We(o), o;
}
var H = "/api/engine/v2/uploads";
var gt = [300, 900, 2700];
var ee = "";
var re = "";
var Et = false;
var bt = gt.length;
var P = class extends Error {
  constructor(e, t = 0, r = "") {
    super(e), this.status = t, this.body = r, this.name = "UploadError";
  }
  /** Whether the failure is transient enough to be worth another attempt */
  get retryable() {
    return this.status === 0 || this.status === 401 || this.status === 408 || this.status === 429 ? true : this.status >= 500;
  }
};
function Ye(s) {
  console.debug("[UPLOADS] Set a token"), ee = s, Et = false;
}
function Je(s) {
  console.debug("[UPLOADS] Set an API key"), re = s, Et = true;
}
function Xe(s) {
  bt = Math.max(0, s);
}
function Rt(s) {
  return typeof s == "function" ? s() : s;
}
function Qe() {
  return Et ? { "x-api-key": Rt(re) } : { Authorization: `Bearer ${Rt(ee)}` };
}
function B() {
  return __spreadValues({ "Content-Type": "application/json" }, Qe());
}
function Ze(s) {
  return new Promise((e) => setTimeout(e, s));
}
async function $t(s, e, t) {
  let r;
  try {
    r = await fetch(s, e);
  } catch (i) {
    const n = i instanceof Error ? i.message : "Unknown network error";
    throw new P(`${t} failed: ${n}`);
  }
  if (!r.ok) {
    let i = "";
    try {
      i = await r.text();
    } catch {
    }
    throw new P(
      `${t} failed with status ${r.status}: ${i || r.statusText}`,
      r.status,
      i
    );
  }
  return r;
}
async function Ut(s, e) {
  let t;
  for (let r = 0; ; r++)
    try {
      return await s();
    } catch (i) {
      if (t = i, !(i instanceof P ? i.retryable : false) || r >= bt) break;
      const a = gt[Math.min(r, gt.length - 1)];
      console.warn(
        `[UPLOADS] ${e} failed, retrying in ${a}ms (${r + 1}/${bt})...`,
        i
      ), await Ze(a);
    }
  throw t;
}
async function st(s, e, t) {
  return Ut(async () => {
    const r = await $t(s, e, t);
    try {
      return await r.json();
    } catch {
      throw new P(
        `${t} returned a malformed response body`,
        r.status
      );
    }
  }, t);
}
async function tr(s, e) {
  console.debug(`[UPLOADS] Creating upload for ${e.name}...`);
  const t = await st(
    `${H}`,
    {
      method: "POST",
      body: JSON.stringify(s),
      headers: __spreadValues({}, B())
    },
    `Creating upload for ${e.name}`
  ), r = Me(t.residence);
  if (t.type === "direct_upload")
    return console.debug(`[UPLOADS] Direct upload for ${e.name}`), It(
      t.upload_id,
      e,
      r,
      "",
      true,
      t.signature
    );
  console.debug(`[UPLOADS] Chunked upload for ${e.name}`);
  let i = "";
  if (t.signature.url) {
    const a = await (await Ut(
      () => $t(
        t.signature.url,
        {
          method: t.signature.verb,
          headers: t.signature.headers
        },
        `Initialising blob storage for ${e.name}`
      ),
      `Initialising blob storage for ${e.name}`
    )).text();
    i = r.resume_id(a);
  } else
    i = `${f.hashStr(`${Date.now()}|${e.name}`)}`;
  return console.debug(
    `[UPLOADS] Initialised upload for ${e.name} (${i})`
  ), It(t.upload_id, e, r, i, false);
}
async function er(s, e, t, r) {
  return console.debug(
    `[UPLOADS] Starting upload ${s}, initialising part ${t}...`
  ), (await st(
    `${H}/${s}?part=${t}&file_id=${encodeURIComponent(r)}`,
    {
      method: "PATCH",
      body: JSON.stringify({ resumable_id: e }),
      headers: __spreadValues({}, B())
    },
    `Signing part ${t} of upload ${s}`
  )).signature;
}
async function rr(s, e, t, r) {
  return console.debug(
    `[UPLOADS] Finished parts for upload ${s}(${r.part_list?.join(", ")})`
  ), console.debug(`[UPLOADS] Initialising next part ${e}...`), (await st(
    `${H}/${s}?part=${e}&file_id=${encodeURIComponent(t)}`,
    {
      method: "PATCH",
      body: JSON.stringify(r),
      headers: __spreadValues({}, B())
    },
    `Signing part ${e} of upload ${s}`
  )).signature;
}
async function sr(s, e) {
  console.debug(`[UPLOADS] Finalising upload ${s}...`);
  const t = await st(
    `${H}/${s}?`,
    {
      method: "PATCH",
      body: JSON.stringify(e),
      headers: __spreadValues({}, B())
    },
    `Finalising upload ${s}`
  );
  return __spreadProps(__spreadValues({}, t.signature), { body: t.body });
}
async function se(s) {
  console.debug(`[UPLOADS] Commiting upload ${s}...`), await Ut(
    () => $t(
      `${H}/${s}`,
      { method: "PUT", headers: __spreadValues({}, B()) },
      `Committing upload ${s}`
    ),
    `Committing upload ${s}`
  );
}
var kt = 3;
var S = [];
var W = -1;
var R = /* @__PURE__ */ new Set();
var Q = [];
var ie = "/node_modules/ts-md5/dist/md5_worker.js";
function ir(s = ie, e) {
  console.debug("[UPLOADS] Setting up hash workers..."), S?.length > 0 && S.forEach((t) => t.terminate()), S = [], R.clear(), Q = [];
  for (let t = 0; t < kt; t += 1)
    S.push(new Ft(s, e));
}
function nr() {
  return W += 1, W = W % kt, S[W];
}
function ar() {
  return S.length || kt;
}
async function or() {
  for (let s = 0; s < S.length; s++)
    if (!R.has(s))
      return R.add(s), { worker: S[s], index: s };
  return new Promise((s) => {
    Q.push((e) => {
      R.add(e), s({ worker: S[e], index: e });
    });
  });
}
function ur(s) {
  R.delete(s), Q.length > 0 && Q.shift()(s);
}
function ne(s) {
  let e = "";
  s.length % 2 > 0 && (s = "0" + s);
  for (let t = 0, r = s.length; t < r; t += 2)
    e += String.fromCharCode(parseInt(s.slice(t, t + 2), 16));
  return e;
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
var upload_token = "";
function syncUploadToken() {
  const current_token = J();
  if (!current_token || current_token === upload_token)
    return;
  upload_token = current_token;
  yr({
    auto_start: true,
    token: current_token,
    endpoint: "/api/engine/v2/uploads",
    worker_url: "assets/md5_worker.js"
  });
}
function uploadURL(id) {
  return `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(id)}/url`;
}
function uploadFile(file, is_public = true, permissions = "none") {
  return {
    subscribe(next, error, complete) {
      let cancelled = false;
      let state_subscription = null;
      const fileReader = new FileReader();
      fileReader.addEventListener("loadend", async (e) => {
        if (cancelled)
          return;
        const arrayBuffer = e.target.result;
        const _blob = arrayBufferToBlob(arrayBuffer, file.type);
        syncUploadToken();
        const upload = await wr(file, {
          permissions,
          public: is_public
        });
        const upload_details = {
          id: randomInt(999999999999),
          name: file.name,
          progress: 0,
          link: uploadURL(upload.id),
          formatted_size: hr(file.size),
          size: file.size,
          upload
        };
        state_subscription = upload.state.subscribe((state) => {
          if (cancelled)
            return;
          upload_details.progress = state.progress;
          upload_details.link = uploadURL(upload.id);
          next(upload_details);
          if (state.status === "FAILED") {
            error?.(__spreadProps(__spreadValues({}, upload_details), {
              error: "Upload failed"
            }));
            state_subscription?.unsubscribe();
          }
          if (state.status === "COMPLETED") {
            complete?.();
            state_subscription?.unsubscribe();
          }
        });
        next(upload_details);
      });
      fileReader.readAsArrayBuffer(file);
      return {
        unsubscribe: () => {
          cancelled = true;
          state_subscription?.unsubscribe();
        }
      };
    }
  };
}

export {
  syncUploadToken,
  uploadFile
};
//# sourceMappingURL=chunk-PSJCUEDM.js.map
