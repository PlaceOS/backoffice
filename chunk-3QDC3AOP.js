import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@placeos/ts-client/dist/index.es.js
var le = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "+",
  "/"
];
var Jn = [
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  62,
  255,
  255,
  255,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  255,
  255,
  255,
  0,
  255,
  255,
  255,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  255,
  255,
  255,
  255,
  255,
  255,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51
];
function qt(t) {
  if (t >= Jn.length)
    throw new Error("Unable to parse base64 string.");
  const e = Jn[t];
  if (e === 255)
    throw new Error("Unable to parse base64 string.");
  return e;
}
function us(t) {
  let e = "", n, s = t.length;
  for (n = 2; n < s; n += 3)
    e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2 | t[n] >> 6], e += le[t[n] & 63];
  return n === s + 1 && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4], e += "=="), n === s && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2], e += "="), e;
}
function Js(t) {
  if (t.length % 4 !== 0)
    throw new Error("Unable to parse base64 string.");
  const e = t.indexOf("=");
  if (e !== -1 && e < t.length - 2)
    throw new Error("Unable to parse base64 string.");
  let n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0, s = t.length, i = new Uint8Array(3 * (s / 4)), r;
  for (let o = 0, h = 0; o < s; o += 4, h += 3)
    r = qt(t.charCodeAt(o)) << 18 | qt(t.charCodeAt(o + 1)) << 12 | qt(t.charCodeAt(o + 2)) << 6 | qt(t.charCodeAt(o + 3)), i[h] = r >> 16, i[h + 1] = r >> 8 & 255, i[h + 2] = r & 255;
  return i.subarray(0, i.length - n);
}
function Vs(t, e = new TextEncoder()) {
  return us(e.encode(t));
}
var Pt = { exports: {} };
var Ys = Pt.exports;
var Vn;
function Xs() {
  return Vn || (Vn = 1, (function(t) {
    (function(e, n) {
      var s = {};
      n(s);
      var i = s.default;
      for (var r in s)
        i[r] = s[r];
      t.exports = i;
    })(Ys, function(e) {
      e.__esModule = true, e.digestLength = 32, e.blockSize = 64;
      var n = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function s(v, c, l, f, O) {
        for (var T, U, S, Q, D, E, re, H, j, z, Qe, Ke, xt; O >= 64; ) {
          for (T = c[0], U = c[1], S = c[2], Q = c[3], D = c[4], E = c[5], re = c[6], H = c[7], z = 0; z < 16; z++)
            Qe = f + z * 4, v[z] = (l[Qe] & 255) << 24 | (l[Qe + 1] & 255) << 16 | (l[Qe + 2] & 255) << 8 | l[Qe + 3] & 255;
          for (z = 16; z < 64; z++)
            j = v[z - 2], Ke = (j >>> 17 | j << 15) ^ (j >>> 19 | j << 13) ^ j >>> 10, j = v[z - 15], xt = (j >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3, v[z] = (Ke + v[z - 7] | 0) + (xt + v[z - 16] | 0);
          for (z = 0; z < 64; z++)
            Ke = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & E ^ ~D & re) | 0) + (H + (n[z] + v[z] | 0) | 0) | 0, xt = ((T >>> 2 | T << 30) ^ (T >>> 13 | T << 19) ^ (T >>> 22 | T << 10)) + (T & U ^ T & S ^ U & S) | 0, H = re, re = E, E = D, D = Q + Ke | 0, Q = S, S = U, U = T, T = Ke + xt | 0;
          c[0] += T, c[1] += U, c[2] += S, c[3] += Q, c[4] += D, c[5] += E, c[6] += re, c[7] += H, f += 64, O -= 64;
        }
        return f;
      }
      var i = (
        /** @class */
        (function() {
          function v() {
            this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this.reset();
          }
          return v.prototype.reset = function() {
            return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
          }, v.prototype.clean = function() {
            for (var c = 0; c < this.buffer.length; c++)
              this.buffer[c] = 0;
            for (var c = 0; c < this.temp.length; c++)
              this.temp[c] = 0;
            this.reset();
          }, v.prototype.update = function(c, l) {
            if (l === void 0 && (l = c.length), this.finished)
              throw new Error("SHA256: can't update because hash was finished.");
            var f = 0;
            if (this.bytesHashed += l, this.bufferLength > 0) {
              for (; this.bufferLength < 64 && l > 0; )
                this.buffer[this.bufferLength++] = c[f++], l--;
              this.bufferLength === 64 && (s(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
            }
            for (l >= 64 && (f = s(this.temp, this.state, c, f, l), l %= 64); l > 0; )
              this.buffer[this.bufferLength++] = c[f++], l--;
            return this;
          }, v.prototype.finish = function(c) {
            if (!this.finished) {
              var l = this.bytesHashed, f = this.bufferLength, O = l / 536870912 | 0, T = l << 3, U = l % 64 < 56 ? 64 : 128;
              this.buffer[f] = 128;
              for (var S = f + 1; S < U - 8; S++)
                this.buffer[S] = 0;
              this.buffer[U - 8] = O >>> 24 & 255, this.buffer[U - 7] = O >>> 16 & 255, this.buffer[U - 6] = O >>> 8 & 255, this.buffer[U - 5] = O >>> 0 & 255, this.buffer[U - 4] = T >>> 24 & 255, this.buffer[U - 3] = T >>> 16 & 255, this.buffer[U - 2] = T >>> 8 & 255, this.buffer[U - 1] = T >>> 0 & 255, s(this.temp, this.state, this.buffer, 0, U), this.finished = true;
            }
            for (var S = 0; S < 8; S++)
              c[S * 4 + 0] = this.state[S] >>> 24 & 255, c[S * 4 + 1] = this.state[S] >>> 16 & 255, c[S * 4 + 2] = this.state[S] >>> 8 & 255, c[S * 4 + 3] = this.state[S] >>> 0 & 255;
            return this;
          }, v.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, v.prototype._saveState = function(c) {
            for (var l = 0; l < this.state.length; l++)
              c[l] = this.state[l];
          }, v.prototype._restoreState = function(c, l) {
            for (var f = 0; f < this.state.length; f++)
              this.state[f] = c[f];
            this.bytesHashed = l, this.finished = false, this.bufferLength = 0;
          }, v;
        })()
      );
      e.Hash = i;
      var r = (
        /** @class */
        (function() {
          function v(c) {
            this.inner = new i(), this.outer = new i(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
            var l = new Uint8Array(this.blockSize);
            if (c.length > this.blockSize)
              new i().update(c).finish(l).clean();
            else
              for (var f = 0; f < c.length; f++)
                l[f] = c[f];
            for (var f = 0; f < l.length; f++)
              l[f] ^= 54;
            this.inner.update(l);
            for (var f = 0; f < l.length; f++)
              l[f] ^= 106;
            this.outer.update(l), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
            for (var f = 0; f < l.length; f++)
              l[f] = 0;
          }
          return v.prototype.reset = function() {
            return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
          }, v.prototype.clean = function() {
            for (var c = 0; c < this.istate.length; c++)
              this.ostate[c] = this.istate[c] = 0;
            this.inner.clean(), this.outer.clean();
          }, v.prototype.update = function(c) {
            return this.inner.update(c), this;
          }, v.prototype.finish = function(c) {
            return this.outer.finished ? this.outer.finish(c) : (this.inner.finish(c), this.outer.update(c, this.digestLength).finish(c)), this;
          }, v.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, v;
        })()
      );
      e.HMAC = r;
      function o(v) {
        var c = new i().update(v), l = c.digest();
        return c.clean(), l;
      }
      e.hash = o, e.default = o;
      function h(v, c) {
        var l = new r(v).update(c), f = l.digest();
        return l.clean(), f;
      }
      e.hmac = h;
      function b(v, c, l, f) {
        var O = f[0];
        if (O === 0)
          throw new Error("hkdf: cannot expand more");
        c.reset(), O > 1 && c.update(v), l && c.update(l), c.update(f), c.finish(v), f[0]++;
      }
      var L = new Uint8Array(e.digestLength);
      function I(v, c, l, f) {
        c === void 0 && (c = L), f === void 0 && (f = 32);
        for (var O = new Uint8Array([1]), T = h(c, v), U = new r(T), S = new Uint8Array(U.digestLength), Q = S.length, D = new Uint8Array(f), E = 0; E < f; E++)
          Q === S.length && (b(S, U, l, O), Q = 0), D[E] = S[Q++];
        return U.clean(), S.fill(0), O.fill(0), D;
      }
      e.hkdf = I;
      function W(v, c, l, f) {
        for (var O = new r(v), T = O.digestLength, U = new Uint8Array(4), S = new Uint8Array(T), Q = new Uint8Array(T), D = new Uint8Array(f), E = 0; E * T < f; E++) {
          var re = E + 1;
          U[0] = re >>> 24 & 255, U[1] = re >>> 16 & 255, U[2] = re >>> 8 & 255, U[3] = re >>> 0 & 255, O.reset(), O.update(c), O.update(U), O.finish(Q);
          for (var H = 0; H < T; H++)
            S[H] = Q[H];
          for (var H = 2; H <= l; H++) {
            O.reset(), O.update(Q).finish(Q);
            for (var j = 0; j < T; j++)
              S[j] ^= Q[j];
          }
          for (var H = 0; H < T && E * T + H < f; H++)
            D[E * T + H] = S[H];
        }
        for (var E = 0; E < T; E++)
          S[E] = Q[E] = 0;
        for (var E = 0; E < 4; E++)
          U[E] = 0;
        return O.clean(), D;
      }
      e.pbkdf2 = W;
    });
  })(Pt)), Pt.exports;
}
var ei = Xs();
var ti = new Int32Array(4);
var K = class _K {
  static hashStr(e, n = false) {
    return this.onePassHasher.start().appendStr(e).end(n);
  }
  static hashAsciiStr(e, n = false) {
    return this.onePassHasher.start().appendAsciiStr(e).end(n);
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
  static onePassHasher = new _K();
  static _hex(e) {
    const n = _K.hexChars, s = _K.hexOut;
    let i, r, o, h;
    for (h = 0; h < 4; h += 1)
      for (r = h * 8, i = e[h], o = 0; o < 8; o += 2)
        s[r + 1 + o] = n.charAt(i & 15), i >>>= 4, s[r + 0 + o] = n.charAt(i & 15), i >>>= 4;
    return s.join("");
  }
  static _md5cycle(e, n) {
    let s = e[0], i = e[1], r = e[2], o = e[3];
    s += (i & r | ~i & o) + n[0] - 680876936 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[2] + 606105819 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[4] - 176418897 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[6] - 1473231341 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[8] + 1770035416 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[10] - 42063 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & r | ~i & o) + n[12] + 1804603682 | 0, s = (s << 7 | s >>> 25) + i | 0, o += (s & i | ~s & r) + n[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + s | 0, r += (o & s | ~o & i) + n[14] - 1502002290 | 0, r = (r << 17 | r >>> 15) + o | 0, i += (r & o | ~r & s) + n[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + r | 0, s += (i & o | r & ~o) + n[1] - 165796510 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[11] + 643717713 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[5] - 701558691 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[15] - 660478335 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[9] + 568446438 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[3] - 187363961 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i & o | r & ~o) + n[13] - 1444681467 | 0, s = (s << 5 | s >>> 27) + i | 0, o += (s & r | i & ~r) + n[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + s | 0, r += (o & i | s & ~i) + n[7] + 1735328473 | 0, r = (r << 14 | r >>> 18) + o | 0, i += (r & s | o & ~s) + n[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + r | 0, s += (i ^ r ^ o) + n[5] - 378558 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[11] + 1839030562 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[1] - 1530992060 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[7] - 155497632 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[13] + 681279174 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[3] - 722521979 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (i ^ r ^ o) + n[9] - 640364487 | 0, s = (s << 4 | s >>> 28) + i | 0, o += (s ^ i ^ r) + n[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + s | 0, r += (o ^ s ^ i) + n[15] + 530742520 | 0, r = (r << 16 | r >>> 16) + o | 0, i += (r ^ o ^ s) + n[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + r | 0, s += (r ^ (i | ~o)) + n[0] - 198630844 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[14] - 1416354905 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[12] + 1700485571 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[10] - 1051523 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[8] + 1873313359 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[6] - 1560198380 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + r | 0, s += (r ^ (i | ~o)) + n[4] - 145523070 | 0, s = (s << 6 | s >>> 26) + i | 0, o += (i ^ (s | ~r)) + n[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + s | 0, r += (s ^ (o | ~i)) + n[2] + 718787259 | 0, r = (r << 15 | r >>> 17) + o | 0, i += (o ^ (r | ~s)) + n[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + r | 0, e[0] = s + e[0] | 0, e[1] = i + e[1] | 0, e[2] = r + e[2] | 0, e[3] = o + e[3] | 0;
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
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_K.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o;
    for (o = 0; o < e.length; o += 1) {
      if (r = e.charCodeAt(o), r < 128)
        n[i++] = r;
      else if (r < 2048)
        n[i++] = (r >>> 6) + 192, n[i++] = r & 63 | 128;
      else if (r < 55296 || r > 56319)
        n[i++] = (r >>> 12) + 224, n[i++] = r >>> 6 & 63 | 128, n[i++] = r & 63 | 128;
      else {
        if (r = (r - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, r > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        n[i++] = (r >>> 18) + 240, n[i++] = r >>> 12 & 63 | 128, n[i++] = r >>> 6 & 63 | 128, n[i++] = r & 63 | 128;
      }
      i >= 64 && (this._dataLength += 64, _K._md5cycle(this._state, s), i -= 64, s[0] = s[16]);
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o = 0;
    for (; ; ) {
      for (r = Math.min(e.length - o, 64 - i); r--; )
        n[i++] = e.charCodeAt(o++);
      if (i < 64)
        break;
      this._dataLength += 64, _K._md5cycle(this._state, s), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(e) {
    const n = this._buffer8, s = this._buffer32;
    let i = this._bufferLength, r, o = 0;
    for (; ; ) {
      for (r = Math.min(e.length - o, 64 - i); r--; )
        n[i++] = e[o++];
      if (i < 64)
        break;
      this._dataLength += 64, _K._md5cycle(this._state, s), i = 0;
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
    const n = e.buffer, s = e.state, i = this._state;
    let r;
    for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = s[0], i[1] = s[1], i[2] = s[2], i[3] = s[3], r = 0; r < n.length; r += 1)
      this._buffer8[r] = n.charCodeAt(r);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(e = false) {
    const n = this._bufferLength, s = this._buffer8, i = this._buffer32, r = (n >> 2) + 1;
    this._dataLength += n;
    const o = this._dataLength * 8;
    if (s[n] = 128, s[n + 1] = s[n + 2] = s[n + 3] = 0, i.set(_K.buffer32Identity.subarray(r), r), n > 55 && (_K._md5cycle(this._state, i), i.set(_K.buffer32Identity)), o <= 4294967295)
      i[14] = o;
    else {
      const h = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (h === null) return e ? ti : "";
      const b = parseInt(h[2], 16), L = parseInt(h[1], 16) || 0;
      i[14] = b, i[15] = L;
    }
    return _K._md5cycle(this._state, i), e ? this._state : _K._hex(this._state);
  }
};
if (K.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Yn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Rt(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Yn in t ? t[Yn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function Ye(t, e) {
  return Rt(t, t);
}
function cs(t, e, n) {
  return Rt(t, +Ye(t) + e);
}
function ri(t, e, n) {
  return cs(t, e * 1e3);
}
function qn(t) {
  return Math.trunc(+Ye(t) / 1e3);
}
function as(t, e) {
  return +Ye(t) < +Ye(e);
}
function It(t, e, n, s = "debug", i) {
  if (window.debug) {
    const o = ["color: #0288D1", `color:${i || "#009688"}`, "color: default"];
    n ? Xn() ? console[s](
      `%c[PlaceOS]%c[${t}] %c${e}`,
      ...o,
      n
    ) : console[s](`[PlaceOS][${t}] ${e}`, n) : Xn() ? console[s](`%c[PlaceOS]%c[${t}] %c${e}`, ...o) : console[s](`[PlaceOS][${t}] ${e}`);
  }
}
function Ft(t) {
  const e = (i) => i.length <= 0 ? void 0 : i.length === 1 ? i[0] : i, n = (i, r, o) => It(t, r, e(o), i), s = (i, ...r) => n("debug", i, r);
  return s.debug = (i, ...r) => n("debug", i, r), s.info = (i, ...r) => n("info", i, r), s.error = (i, ...r) => n("error", i, r), s.warn = (i, ...r) => n("warn", i, r), s.log = (i, ...r) => n("log", i, r), s.group = (i, ...r) => n("group", i, r), s.groupCollapsed = (i, ...r) => n("groupCollapsed", i, r), s.groupEnd = (i, ...r) => n("groupEnd", i, r), s;
}
function Xn() {
  return !(document.documentMode || /Edge/.test(navigator.userAgent));
}
function hs() {
  const t = window.location?.hash ? window.location?.hash.slice(1) : window.location?.href.split("#")[1] || "";
  let e = window.location?.search ? window.location?.search.slice(1) : window.location?.href.split("?")[1] || "", n = {};
  if (t)
    if (t.indexOf("?") >= 0) {
      const i = t.split("?");
      n = Ce(i[0]), e || (e = i[1]);
    } else
      n = Ce(t);
  let s = {};
  return e && (s = Ce(e)), __spreadValues(__spreadValues({}, n), s);
}
function Ce(t) {
  const e = {}, n = t.split("&");
  for (const s of n) {
    const i = s.split("=");
    i[1] && (e[decodeURIComponent(i[0])] = decodeURIComponent(
      i[1]
    ));
  }
  return e;
}
var Ze = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function ls(t = 40) {
  let e = "";
  const n = window?.crypto;
  if (n?.getRandomValues) {
    const s = 256 - 256 % Ze.length, i = new Uint8Array(t * 2);
    for (; e.length < t; ) {
      n.getRandomValues(i);
      for (const r of i)
        r < s && e.length < t && (e += Ze.charAt(r % Ze.length));
    }
    return e;
  }
  for (let s = 0; s < t; s++)
    e += Ze.charAt(
      Math.floor(Math.random() * Ze.length)
    );
  return e;
}
function oe(t) {
  const e = (window.location?.hash || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/#&/g, "#").replace(/&$/g, "#"), n = (window.location?.search || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/\?&/g, "#").replace(/&$/g, "#");
  window.history?.replaceState && window.history?.replaceState(
    null,
    "",
    `${window.location?.pathname}${e}${n}`
  );
}
function Ut(t, e = false) {
  const n = e ? 1e3 : 1024;
  if (t < n)
    return t + (e ? " iB" : " B");
  const s = Math.floor(Math.log(t) / Math.log(n)), i = (e ? "kMGTPE" : "KMGTPE").charAt(s - 1) + (e ? "iB" : "B");
  return (t / Math.pow(n, s)).toFixed(2) + " " + i;
}
function ui(t) {
  if (t.length === 0)
    throw new Error("Input must not be of zero length");
  const e = t.split(","), n = {};
  for (const s of e) {
    const i = s.split(";");
    if (i.length !== 2)
      throw new Error("Section could not be split on ';'");
    const r = i[0].replace(/<(.*)>/, "$1").trim(), o = i[1].replace(/rel="(.*)"/, "$1").trim();
    n[o] = r;
  }
  return n;
}
function ci(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e.indexOf(t[n]) >= 0 && delete t[n];
  return t;
}
function ai() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function hi() {
  return window.location !== window.parent.location;
}
function li(t = Date.now(), e = 60 * 1e3) {
  return Math.floor(t / e);
}
var pi = class {
  abort() {
    It("Stub", "Aborted");
  }
};
function y(t) {
  let e = "";
  if (t)
    for (const n in t)
      t.hasOwnProperty(n) && t[n] !== void 0 && t[n] !== null && (e += `${e ? "&" : ""}${n}=${encodeURIComponent(
        t[n]
      )}`);
  return e;
}
var xe = {};
function ue(t, e, n = 300) {
  if (t && e && e instanceof Function)
    $e(t), xe[t] = setTimeout(() => {
      e(), delete xe[t];
    }, n);
  else
    throw new Error(
      t ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function $e(t) {
  xe[t] && (clearTimeout(xe[t]), delete xe[t]);
}
function se(t) {
  let e = t;
  const n = /* @__PURE__ */ new Set(), s = () => e;
  return Object.defineProperty(s, "value", {
    get: () => e,
    enumerable: true
  }), s.subscribe = (i, r = {}) => (n.add(i), r.emitCurrent !== false && i(e, e), () => n.delete(i)), s.set = (i) => {
    if (Object.is(i, e)) return;
    const r = e;
    e = i;
    for (const o of [...n])
      o(e, r);
  }, s.update = (i) => s.set(i(e)), s.asReadonly = () => s, s;
}
function mi(t) {
  return new Promise((e) => setTimeout(e, t));
}
var gi = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0"
};
var g = Ft("Auth");
var p = {};
var R = localStorage;
var w;
var m = {};
var x = "";
var Tn = {};
var be = "";
var ve = se("");
var Xe = se("");
var Rn = "/api/engine/v2";
var ye = se(false);
var In = se(false);
var Ve = 0;
function ps() {
  if (p.mock) return true;
  if (!R) return false;
  if (et() && !p.ignore_api_key) return true;
  const t = R.getItem(`${x}_expires_at`) || "";
  return as(+t, /* @__PURE__ */ new Date()) ? false : !!(ve.value || R.getItem(`${x}_access_token`));
}
function Ne() {
  In.set(ps());
}
function ds(t) {
  if (!t || t.startsWith("http://") || t.startsWith("https://"))
    return t;
  const e = w?.domain;
  return e ? `${p.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${e}${t}` : t;
}
function u() {
  return `${`${p.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${p.host || window.location?.host}`}${fs()}`;
}
function fs() {
  return p.version === "ACA Engine" ? "/control/api" : Rn;
}
function yi() {
  return !!p.token_header;
}
function $i() {
  return x;
}
function Lt() {
  return __spreadValues(__spreadValues({}, x ? { "X-App-Id": x } : {}), Tn);
}
function et() {
  return Ct("x-api-key", false) || "";
}
function J(t = true) {
  if (p.mock) return "mock-token";
  if (!R) return "";
  if (et() && !p.ignore_api_key) return "x-api-key";
  const e = R.getItem(`${x}_expires_at`) || "", n = ve.value;
  return as(+e, /* @__PURE__ */ new Date()) && (g("Token expired. Requesting new token..."), Cn(), m.load_authority || (Ve += 1, ue(
    "re-authorise",
    async () => {
      delete m.authorise, await jt().catch(
        (s) => g.error("Failed to get token:", s)
      );
    },
    200 * Math.min(20, Ve)
  )), !t) ? "" : n || R.getItem(`${x}_access_token`) || "";
}
function Et() {
  return Xe.value || R.getItem(`${x}_refresh_token`) || "";
}
function Pn() {
  return p.host || window.location?.host;
}
function vi() {
  return Ne(), In.asReadonly();
}
function Mt() {
  return w;
}
function so() {
  return ye.value;
}
function Un() {
  return !!p.mock;
}
function ki() {
  return !!p.secure;
}
function io() {
  return ye.asReadonly();
}
function En() {
  return Ct("trust") === "true" || Ct("trusted") === "true";
}
function _s() {
  return !!et() && !p.ignore_api_key || Ct("fixed_device") === "true";
}
function Ct(t, e = true) {
  let s = hs()[t];
  if (R) {
    const i = `${$i()}_${t}`;
    s = s || R.getItem(i) || R.getItem(t) || "", e && R.setItem(i, `${s}`);
  }
  return s;
}
async function ro(t) {
  return p = t || p, p.token_header = p.token_header ?? hi(), window.AbortController || (window.AbortController = pi), R = p.storage === "session" ? sessionStorage : localStorage, x = K.hashStr(p.redirect_uri, false), Si(), p.delay && p.delay > 0 && await mi(p.delay), On();
}
var Ot = false;
function Si() {
  Ot || (Ot = true, window.addEventListener("focus", wt), document.addEventListener("visibilitychange", wt));
}
async function wt() {
  if (document.visibilityState === "hidden" || p.mock || !w || w.session || ps()) return;
  if (delete m.check_params, await gs().catch(() => false) || be || Et()) {
    g("Application focused with new credentials. Authorising..."), we = false, delete m.authorise, await jt().catch(
      (e) => g.error("Failed to authorise on focus:", e)
    );
    return;
  }
  g("Application focused without a session. Reloading authority..."), we = false, Mn().catch(
    (e) => g.error("Failed to refresh authority:", e)
  );
}
function Mn() {
  return g("Refreshing authorty."), w = void 0, On();
}
function Cn() {
  g("Invalidating tokens."), R.removeItem(`${x}_access_token`), R.removeItem(`${x}_expires_at`), ve.value && ve.set(""), Ne();
}
function jt(t, e = w) {
  return !m.authorise && !e ? Promise.reject("Authority is not loaded") : (m.authorise || (m.authorise = new Promise((n, s) => {
    g("Authorising user...");
    const i = () => {
      if (J(false))
        g("Valid token found."), delete m.authorise, n(J());
      else {
        const r = [
          () => {
            g("Successfully generated token."), n(J()), delete m.authorise;
          },
          () => {
            g.error("Failed to generate token."), s("Failed to generate token"), setTimeout(() => delete m.authorise, 200);
          }
        ];
        if (p && p.auth_type === "password")
          g("Logging in with credentials."), Ei(p).then(
            ...r
          ), Ve = 0;
        else if (be || Et())
          g(
            `Generating token with ${be ? "code" : "refresh token"}`
          ), ys().then(...r), Ve = 0;
        else if (p.entra_token)
          g("Exchanging Entra token..."), p.entra_token().then(Mi).then(...r), Ve = 0;
        else if (e.session)
          g(
            "Users has session. Authorising application..."
          ), xi(t).then(...r);
        else {
          g("No user session"), s("No user session"), setTimeout(() => delete m.authorise, 200);
          try {
            ms(e);
          } catch {
          }
        }
      }
    };
    Pi().then(i, i);
  })), m.authorise);
}
function ao() {
  const t = ds(
    w ? w.logout_url : "/logout"
  );
  fetch(t, {
    method: "GET",
    redirect: "manual",
    headers: __spreadProps(__spreadValues({}, Lt()), {
      Authorization: "Bearer " + J()
    })
  }).then(
    (e) => {
      const n = e.headers.get("Location") || t;
      es(), window.location?.assign(n);
    },
    (e) => {
      g.error("Error logging out:", e), es(), window.location?.assign(t);
    }
  );
}
function es() {
  const t = [];
  for (let e = 0; e < R.length; e++) {
    const n = R.key(e);
    n && n.indexOf(x) >= 0 && t.push(n);
  }
  for (const e of t)
    R.removeItem(e);
  ve.set(""), Xe.set(""), Ne();
}
function On(t = 0) {
  return m.load_authority || (m.load_authority = new Promise((e) => {
    if (ye.set(false), p.mock) {
      w = gi, g("System in mock mode"), ye.set(true), e();
      return;
    }
    g(`Fixed: ${_s()} | Trusted: ${En()}`), g("Loading authority...");
    const n = p.secure || window.location?.protocol.indexOf("https") >= 0, s = (i) => {
      g.error(`Failed to load authority(${i})`), ye.set(false), ue(
        "load_authority",
        () => {
          delete m.load_authority, On(t).then((r) => e());
        },
        300 * Math.min(20, ++t)
      );
    };
    fetch(`${n ? "https:" : "http:"}//${Pn()}/auth/authority`, {
      credentials: "same-origin",
      headers: Lt()
    }).then(async (i) => {
      if (!i.ok)
        return s(await i.text().catch((o) => o));
      w = await i.json(), Rn = /[2-9]\.[0-9]+\.[0-9]+/g.test(
        w.version || ""
      ) ? "/api/engine/v2" : "/control/api", g.group("Loaded authority."), w && (g(`Name: ${w.name}`), g(`Version: ${w.version}`), g(`Domain: ${w.domain}`), g(`Session: ${w.session}`), g(`Production: ${w.production}`), g(
        `Config Keys: ${Object.keys(w.config || {}).length}`
      )), g.groupEnd("");
      const r = () => {
        ye.set(true), g("Application set online."), e();
      };
      delete m.load_authority, jt("").then(r, r);
    }, s);
  })), m.load_authority;
}
async function xi(t) {
  if (p.use_iframe && m.iframe_auth)
    return m.iframe_auth;
  const e = Ti(t);
  if (p.use_iframe)
    return qi(e);
  window.location?.assign(e);
}
function qi(t) {
  return m.iframe_auth || (m.iframe_auth = new Promise((e, n) => {
    g("Authorizing in an iFrame...");
    const s = document.createElement("iframe");
    s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.height = "1px", s.style.width = "1px", s.style.zIndex = "-1", s.id = "place-authorize", s.src = `${t}`;
    const i = (o) => {
      if (o.origin === window.location?.origin && o.data.type === "place-os") {
        const h = o.data;
        if (g("Received credentials from iFrame..."), document.body.removeChild(s), $e("iframe_auth"), window.removeEventListener("message", i), delete m.iframe_auth, h.token)
          return e(), Nn(__spreadValues({
            access_token: h.token
          }, h));
        be = h.code || "", ys().then(
          (b) => e(b),
          (b) => n(b)
        );
      }
    }, r = () => {
      window.removeEventListener("message", i), s.parentNode && s.parentNode.removeChild(s), delete m.iframe_auth;
    };
    ue(
      "iframe_auth",
      () => {
        g.error("Unable to resolve iFrame after 15 seconds..."), r(), n();
      },
      15 * 1e3
    ), window.addEventListener("message", i), s.onerror = (o) => {
      g.error("iFrame error.", o), $e("iframe_auth"), r(), n();
    }, document.body.appendChild(s);
  })), m.iframe_auth;
}
var we = false;
function ms(t) {
  if (p.handle_login !== false && !we) {
    g("Redirecting to login page...");
    const e = ds(
      t.login_url?.replace(
        "{{url}}",
        encodeURIComponent(window.location?.href)
      )
    );
    throw setTimeout(() => window.location?.assign(e), 300), we = true, new Error("Redirecting to login page...");
  } else
    g("Login being handled locally.");
  delete m.authorise;
}
function Pi() {
  return m.check_token || (m.check_token = new Promise(async (t, e) => {
    J() ? (g("Valid token found."), t(J())) : (g("No token. Checking URL for auth credentials..."), await gs() ? t(true) : e()), delete m.check_token;
  })), m.check_token;
}
function gs() {
  return m.check_params || (m.check_params = new Promise((t) => {
    g("Checking for auth parameters...");
    let e = hs();
    if ((!e || Object.keys(e).length <= 0) && sessionStorage && (e = JSON.parse(
      sessionStorage.getItem("ENGINE.auth.params") || "{}"
    ), sessionStorage.removeItem("ENGINE.auth.params")), e && (e.code || e.access_token || e.refresh_token)) {
      const n = R.getItem(`${x}_nonce`) || "", s = (e.state || "").split(";");
      oe("state"), oe("token_type");
      const i = s[0];
      n === i ? (e.code && (be = e.code, oe("code")), e.refresh_token && (R.setItem(
        `${x}_refresh_token`,
        e.refresh_token
      ), oe("refresh_token")), Nn(e), t(!!e.access_token)) : (oe("code"), oe("access_token"), oe("refresh_token"), t(false));
    } else
      t(false);
    ue(
      "check_params_promise",
      () => delete m.check_params,
      50
    );
  })), m.check_params;
}
function Ti(t) {
  const e = Ci();
  t = t ? `${e};${t}` : e;
  const n = p ? (p.auth_uri || "").indexOf("?") >= 0 : false, s = (p ? p.auth_uri : null) || "/auth/oauth/authorize", i = En() || p.auth_type === "auth_code" ? "code" : "token";
  let r = `${s}${n ? "&" : "?"}response_type=${encodeURIComponent(i)}&client_id=${encodeURIComponent(x)}&state=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent(p.redirect_uri)}&scope=${encodeURIComponent(p.scope)}`;
  if (p.auth_type === "auth_code") {
    const { challenge: o, verify: h } = Ri();
    sessionStorage.setItem(`${x}_challenge`, o), r += "&code_challenge_method=S256", r += `&code_challenge=${h}`;
  }
  return r;
}
function Ri(t = 43) {
  const e = ls(t), n = Js(Vs(e)), s = us(ei.hash(n)).split("=")[0].replace(/\//g, "_").replace(/\+/g, "-");
  return { challenge: e, verify: s };
}
function Ii() {
  let e = (p.token_uri || "/auth/token") + `?client_id=${encodeURIComponent(x)}`, n = "";
  if (e += `&redirect_uri=${encodeURIComponent(p.redirect_uri)}`, Et()) {
    e += `&refresh_token=${encodeURIComponent(Et())}`, e += "&grant_type=refresh_token";
    const s = e.indexOf("?");
    n = e.slice(s + 1), e = e.slice(0, s);
  } else {
    e += `&code=${encodeURIComponent(be)}`, e += "&grant_type=authorization_code";
    const s = sessionStorage.getItem(`${x}_challenge`);
    s && (e += `&code_verifier=${s}`, sessionStorage.removeItem(`${x}_challenge`)), be = "";
  }
  return [e, n];
}
function Ui(t) {
  const e = t.token_uri || "/auth/token", n = y({
    grant_type: "password",
    client_id: x,
    client_secret: t.client_secret,
    redirect_uri: t.redirect_uri,
    authority: w?.id,
    scope: t.scope,
    username: t.username,
    password: t.password
  });
  return `${e}?${n}`;
}
function ys() {
  return wn(...Ii());
}
function Ei(t) {
  return wn(Ui(t));
}
function Mi(t) {
  const e = y({
    grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
    client_id: x,
    client_secret: p.client_secret,
    subject_token: t,
    subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
    scope: p.scope
  });
  return wn(p.token_uri || "/auth/token", e);
}
function wn(t, e = "") {
  return m.generate_tokens || (m.generate_tokens = new Promise((n, s) => {
    g("Generating new token...");
    const i = (r) => {
      g.error("Error generating new tokens:", r), r && r.status >= 400 && r.status < 500 && (R.removeItem(`${x}_refresh_token`), Xe.set("")), Ne(), s(), delete m.generate_tokens;
    };
    fetch(t, {
      method: "POST",
      body: e,
      headers: __spreadProps(__spreadValues({}, Lt()), {
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }).then(async (r) => {
      if (!r.ok) return i(r);
      const o = await r.json();
      Nn(o), n(), delete m.generate_tokens;
    }, i);
  })), m.generate_tokens;
}
function Nn(t) {
  const e = ri(
    /* @__PURE__ */ new Date(),
    Math.max(60, parseInt(t.expires_in, 10) - 300)
  );
  g("Tokens generated storing..."), En() && (t.access_token && (R.setItem(
    `${x}_access_token`,
    t.access_token
  ), oe("access_token")), t.refresh_token && (R.setItem(
    `${x}_refresh_token`,
    t.refresh_token
  ), oe("refresh_token"))), t.expires_in && (R.setItem(`${x}_expires_at`, `${e.valueOf()}`), oe("expires_in")), ye.set(true), ve.set(t.access_token || ""), Xe.set(t.refresh_token || ""), Ne();
}
function Ci() {
  const t = ls();
  return R.setItem(`${x}_nonce`, t), t;
}
var qe = Ft("HTTP(M)");
var Gt = {};
var $s = (t, e) => {
  const n = new Error(`Mock endpoint not found: ${t} ${e}`);
  return n.status = 404, qe(`404 ${t}:`, e), Promise.reject(n);
};
function lo(t, e = Gt) {
  Oi(t.method, t.path, e);
  const n = `${t.method}|${t.path}`, s = t.path.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("/"), i = __spreadProps(__spreadValues({}, t), {
    path_parts: s,
    path_structure: s.map(
      (r) => r[0] === ":" ? r.replace(":", "") : ""
    )
  });
  e[n] = i, qe(`+ ${t.method} ${t.path}`);
}
function Oi(t, e, n = Gt) {
  const s = `${t}|${e}`;
  n[s] && (delete n[s], qe(`- ${t} ${e}`));
}
function wi(t, e, n, s = Gt) {
  const i = Ni(t, e, s);
  if (i) {
    const r = Di(e, i, n);
    return Hi(i, r);
  }
  try {
    return $s(t, e);
  } catch (r) {
    return qe.error(`ERROR ${t}:`, [e, r]), Promise.reject(r);
  }
}
function Ni(t, e, n = Gt) {
  const i = e.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("?")[0].split("/"), r = Object.keys(
    n
  ).reduce((o, h) => (h.indexOf(`${t}|`) === 0 && o.push(n[h]), o), []);
  for (const o of r)
    if (o.path_structure.length === i.length) {
      let h = true;
      for (let b = 0; b < o.path_structure.length; b++)
        if (!o.path_structure[b] && o.path_parts[b] !== i[b]) {
          h = false;
          break;
        }
      if (h)
        return o;
    }
  return null;
}
function Di(t, e, n) {
  const s = t.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").split("?"), i = s[0].replace(/^\//, ""), r = s[1] || "", o = Ce(r), h = i.split("/"), b = {};
  for (let I = 0; I < e.path_structure.length; I++) {
    const W = e.path_structure[I];
    W && (b[W] = h[I]);
  }
  const L = {
    url: t,
    path: e.path,
    method: e.method,
    metadata: e.metadata,
    route_params: b,
    query_params: o,
    body: n
  };
  return qe(`MATCHED ${L.method}:`, L), L;
}
function Hi(t, e) {
  let n;
  try {
    n = t.callback ? t.callback(e) : t.metadata;
  } catch (o) {
    return qe.error(`ERROR ${e.method}:`, e.url, o), Promise.reject(o);
  }
  const s = t.delay_variance || 100, i = t.delay || 300, r = Math.floor(Math.random() * s - s / 2) + i;
  return qe(`RESP ${e.method}:`, e.url, n), new Promise((o) => {
    setTimeout(() => o(n), Math.max(200, r));
  });
}
var zi = Ft("HTTP");
var Fi = 3e4;
async function Li() {
  J(false);
  const t = vi();
  t.value || await new Promise((e, n) => {
    const s = setTimeout(() => {
      i(), n(new Error("Timed out waiting for authentication."));
    }, Fi), i = t.subscribe(
      (r) => {
        r && (clearTimeout(s), i(), e());
      },
      { emitCurrent: false }
    );
  });
}
var bs = {};
function ji(t, e = bs) {
  return e[t] || {};
}
function _(t, e, n = tt) {
  return e || (e = { response_type: "json" }), n("GET", t, __spreadValues({ response_type: "json" }, e));
}
function k(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("POST", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function ce(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("PUT", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function te(t, e, n, s = tt) {
  return n || (n = { response_type: "json" }), s("PATCH", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function V(t, e, n = tt) {
  return e || (e = { response_type: "void" }), n("DELETE", t, __spreadValues({ response_type: "void" }, e));
}
async function Gi(t, e, n = bs) {
  if (t.headers) {
    const s = {};
    t.headers.forEach ? t.headers.forEach((i, r) => s[r.toLowerCase()] = i) : Object.keys(t.headers).forEach(
      (i) => s[i.toLowerCase()] = t.headers[i]
    ), n[t.url || ""] = s;
  }
  switch (e) {
    case "blob":
      return await t.blob();
    case "json":
      return await t.json().catch(() => ({}));
    case "text":
      return await t.text();
    case "void":
      return;
    default:
      return await t.json().catch(() => ({}));
  }
}
var vs = () => (Cn(), Mn().then(
  () => Promise.resolve(),
  () => new Promise((t) => {
    setTimeout(() => {
      vs().then(() => t());
    }, 1e3);
  })
));
function tt(t, e, n, s = Un, i = wi, r = Gi) {
  if (s()) {
    const I = i(t, e, n?.body);
    if (I) return I;
  }
  n.headers = __spreadValues(__spreadValues({}, Lt()), n.headers), !n.headers["Content-Type"] && !n.headers["content-type"] && (n.headers["Content-Type"] = "application/json");
  const o = () => {
    const I = __spreadProps(__spreadValues({}, n), {
      method: t,
      credentials: "same-origin"
    });
    return delete I.response_type, delete I.skip_auth, delete I.skip_auth_flow, ["POST", "PUT", "PATCH"].includes(t) && n.body !== void 0 && (I.body = typeof n.body == "string" ? n.body : JSON.stringify(n.body)), fetch(e, I);
  }, h = async () => {
    n.skip_auth || (await Li(), J() === "x-api-key" ? n.headers["X-API-Key"] = et() : n.headers.Authorization = `Bearer ${J()}`);
    const I = await o();
    if (I.ok) return r(I, n.response_type);
    throw I;
  }, b = 4, L = async (I) => {
    try {
      return await h();
    } catch (W) {
      if (I >= b) throw W || {};
      if (n.skip_auth || n.skip_auth_flow) throw W || {};
      if (W.status === 511)
        throw ms(Mt()), W;
      if (W.status !== 401) throw W || {};
      return zi.warn("Auth error:", W), await vs().catch(() => {
        throw W;
      }), L(I + 1);
    }
  };
  return L(0);
}
var F = class {
  /** Unique Identifier of the object */
  id;
  /** Human readable name of the object */
  name;
  /** Unix epoch in seconds of the creation time of the object */
  created_at;
  /** Unix epoch in seconds of the creation time of the object */
  updated_at;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.id = e.id || "", this.name = e.name || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.version = e.version || 0;
  }
  /**
   * Convert object into plain object
   */
  toJSON() {
    const e = __spreadValues({}, this);
    return e.version = this.version, delete e.created_at, ci(e, [void 0, null, ""]);
  }
};
var Qi = class extends F {
  /** Unique identifier of the application */
  uid;
  /** Secret associated with the application */
  secret;
  /** ID of the domain that owns this application */
  owner_id;
  /** Access scopes required by users to access the application */
  scopes;
  /** Authentication redirect URI */
  redirect_uri;
  /** Whether the application uses a confidential client secret */
  confidential;
  /** Skip authorization checks for the application */
  skip_authorization;
  /** Subsystems the application has access to */
  subsystems;
  /** Whether Client ID should be updated on changes */
  preserve_client_id;
  constructor(e = {}) {
    super(e), this.uid = e.uid || "", this.secret = e.secret || "", this.owner_id = e.owner_id || "", this.scopes = e.scopes || "", this.redirect_uri = e.redirect_uri || "", this.confidential = e.confidential || false, this.skip_authorization = e.skip_authorization || false, this.subsystems = e.subsystems || [], this.preserve_client_id = e.preserve_client_id || false;
  }
};
var ks = {};
var Ss = {};
var ts = "";
var Wt = (t) => t;
var Ki = 300;
var Me = {};
function $(t) {
  const { query_params: e, fn: n, path: s, endpoint: i } = t, r = y(e), o = `${i || u()}${s ? "/" + s : ""}${r ? "?" + r : ""}`;
  if (Me[o]) return Me[o].promise;
  const h = _(o).then((b) => {
    const L = Zi(o, r, s);
    return {
      total: L.total || 0,
      next: L.next ? () => $({
        query_params: L.next,
        fn: n,
        endpoint: i,
        path: s
      }) : null,
      data: b && b instanceof Array ? b.map((I) => (n || Wt)(I)) : b && !(b instanceof Array) && b.results ? b.results.map((I) => I) : []
    };
  });
  return Me[o] = {
    promise: h,
    timeout: setTimeout(() => delete Me[o], Ki)
  }, h.catch(() => {
    clearTimeout(Me[o]?.timeout), delete Me[o];
  }), h;
}
function d(t) {
  const { query_params: e, id: n, path: s, fn: i, options: r } = t, o = y(e), h = `${u()}/${s}/${n}${o ? "?" + o : ""}`;
  return _(h, r).then((b) => (i || Wt)(b));
}
function q(t) {
  const { query_params: e, form_data: n, path: s, fn: i } = t, r = y(e), o = `${u()}/${s}${r ? "?" + r : ""}`;
  return k(o, n).then((h) => (i || Wt)(h));
}
function a(t) {
  const { id: e, task_name: n, form_data: s, method: i, path: r, callback: o } = t, h = y(s), b = `${u()}/${r}/${e}/${n}`;
  return (i === "post" || i === "put" || !i ? (i === "put" ? ce : k)(b, s) : (i === "del" ? V : _)(
    `${b}${h ? "?" + h : ""}`,
    {
      response_type: "json"
    }
  )).then((I) => (o || ((W) => W))(I));
}
function P(t) {
  const { id: e, query_params: n, form_data: s, method: i, path: r, fn: o } = t, h = y(__spreadProps(__spreadValues({}, n), {
    version: s.version || 0
  })), b = `${u()}/${r}/${e}${h ? "?" + h : ""}`;
  return (i === "put" ? ce : te)(b, s).then(
    (L) => (o || Wt)(L)
  );
}
function A(t) {
  const { id: e, query_params: n, path: s } = t, i = y(n), r = `${u()}/${s}/${e}${i ? "?" + i : ""}`;
  return V(r);
}
function Zi(t, e, n) {
  const s = ji(
    t[0] === "/" ? `${location.origin}${t}` : t
  ), i = {
    total: 0,
    next: null
  };
  if (s && s["x-total-count"]) {
    const r = +(s["x-total-count"] || 0);
    (e.length < 2 || e.length < 12 && e.indexOf("offset=") >= 0) && (ks[n] = r), Ss[n] = r, i.total = r;
  }
  return s && s.link && (ts = ui(s.link || "").next, i.next = Ce(ts.split("?")[1])), i;
}
var it = "oauth_apps";
function Qt(t) {
  return new Qi(t);
}
function qo(t = {}) {
  return $({ query_params: t, fn: Qt, path: it });
}
function To(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Qt,
    path: it
  });
}
function Ro(t) {
  return q({ form_data: t, query_params: {}, fn: Qt, path: it });
}
function Io(t) {
  return A({ id: t, query_params: {}, path: it });
}
var Dn = class extends F {
  /** Hash of the email address of the user */
  email_digest;
  /** ID of the authority associated with the user */
  authority_id;
  /** Email address of the user */
  email;
  /** Phone number of the user */
  phone;
  /** Display nickname of the user */
  nickname;
  /** Country that the user resides in */
  country;
  /** Office building the user is associated */
  building;
  /** Access control groups that user is associated */
  groups;
  /** Avatar image for the user */
  image;
  /** Additional metadata associated with the user */
  metadata;
  /** Miscellaneous user data */
  misc;
  /** Username credential of the user */
  login_name;
  /** Organisation ID of the user */
  staff_id;
  /** First name of the user */
  first_name;
  /** Last name of the user */
  last_name;
  /** Whether user is a support role */
  support;
  /** Whether user is a system admin role */
  sys_admin;
  /** Name of the active theme on the displayed UI */
  ui_theme;
  /** Preferred language of the user */
  preferred_language;
  /** Card Number associated with the user */
  card_number;
  /** Organisational department the user belongs */
  department;
  /** Default worktime preferences for the user */
  work_preferences;
  /** Overrides of the worktime preferences for the user */
  work_overrides;
  /** ID of the user's photo in the PlaceOS uploads service */
  photo_upload_id;
  /** Whether the user has opted in to location tracking */
  locatable;
  /** Password */
  password = "";
  /** Password */
  confirm_password = "";
  deleted;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.email = e.email || "", this.email_digest = e.email_digest || "", this.phone = e.phone || "", this.nickname = e.nickname || "", this.country = e.country || "", this.building = e.building || "", this.image = e.image || "", this.metadata = e.metadata || "", this.misc = e.misc || "", this.login_name = e.login_name || "", this.staff_id = e.staff_id || "", this.first_name = e.first_name || "", this.last_name = e.last_name || "", this.support = !!e.support, this.sys_admin = !!e.sys_admin, this.ui_theme = e.ui_theme || "", this.preferred_language = e.preferred_language || "", this.card_number = e.card_number || "", this.groups = e.groups || [], this.department = e.department || "", this.photo_upload_id = e.photo_upload_id || "", this.work_preferences = e.work_preferences || [], this.work_overrides = e.work_overrides || {}, this.locatable = e.locatable ?? true, this.deleted = e.deleted ?? false;
  }
};
var Vi = /* @__PURE__ */ ((t) => (t[t.Certificate = 0] = "Certificate", t[t.NoAuth = 1] = "NoAuth", t[t.UserPassword = 2] = "UserPassword", t))(Vi || {});
var Yi = class extends F {
  /** Unique identifier for the Broker */
  id;
  /** Name of the Broker */
  name;
  /** Type of authentication used for connecting to the Broker */
  auth_type;
  /** Details of the Broker */
  description;
  /** Host name of the Broker endpoint */
  host;
  /** Port number of the Broker endpoint */
  port;
  /** Whether connection to the Broker endpoint has TLS */
  tls;
  /** Username to use for connecting to Broker */
  username;
  /** Password to use for connecting to Broker */
  password;
  /** Certificate details */
  certificate;
  /** User secret */
  secret;
  /**  */
  filters;
  constructor(e = {}) {
    super(), this.id = e.id || "", this.name = e.name || "", this.auth_type = e.auth_type || 2, this.description = e.description || "", this.host = e.host || "", this.port = e.port || 1883, this.tls = e.tls || false, this.username = e.username || "", this.password = e.password || "", this.certificate = e.certificate || "", this.secret = e.secret || "", this.filters = e.filters || [];
  }
};
var rt = "brokers";
function Zt(t) {
  return new Yi(t);
}
function No(t = {}) {
  return $({ query_params: t, fn: Zt, path: rt });
}
function Ho(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Zt,
    path: rt
  });
}
function zo(t) {
  return q({ form_data: t, query_params: {}, fn: Zt, path: rt });
}
function Fo(t, e = {}) {
  return A({ id: t, query_params: e, path: rt });
}
var Xi = class {
  /** Unique identifier of the application */
  id;
  /** List of running drivers */
  compiled_drivers;
  /** List of running drivers */
  available_repositories;
  /** Number of actively running drivers */
  running_drivers;
  /** Number of actively running drivers */
  module_instances;
  /** List of repositories that are unavailable to the cluster */
  unavailable_repositories;
  /** List of drivers that are unavailable to the cluster */
  unavailable_drivers;
  /** Name of the cluster */
  hostname;
  /** Number of CPUs available on the host */
  cpu_count;
  /** Percentage of CPU usage by the cluster's root process */
  core_cpu;
  /** Percentage of CPU usage by the whole cluster */
  total_cpu;
  /** Total amount of available memory on the host in KB */
  memory_total;
  /** Total amount of memory used by the whole cluster in KB */
  memory_usage;
  /** Total amount of memory used by the cluster root process in KB */
  core_memory;
  /** Percentage of memory used by the cluster */
  memory_percentage;
  /** Display string for the memory usage */
  used_memory;
  /** Display string for the memory total */
  total_memory;
  /** List of edge nodes within the cluster */
  edge_nodes;
  run_counts;
  constructor(e = {}) {
    this.id = e.id || e.core_id || "", this.compiled_drivers = e.compiled_drivers || [], this.available_repositories = e.available_repositories || e.status?.available_repositories || [], this.running_drivers = e.running_drivers || e.status?.running_drivers || 0, this.module_instances = e.module_instances || e.status?.module_instances || 0, this.unavailable_repositories = e.unavailable_repositories || e.status?.unavailable_repositories || [], this.unavailable_drivers = e.unavailable_drivers || e.status?.unavailable_drivers || [], this.hostname = e.hostname || e.load?.local.hostname || "", this.cpu_count = e.cpu_count || e.load?.local.cpu_count || 0, this.core_cpu = e.core_cpu || e.load?.local.core_cpu || 0, this.total_cpu = e.total_cpu || e.load?.local.total_cpu || 0, this.memory_total = e.memory_total || e.load?.local.memory_total || 0, this.memory_usage = e.memory_usage || e.load?.local.memory_usage || 0, this.core_memory = e.core_memory || e.load?.local.core_memory || 0, this.run_counts = e.run_counts || e.status?.run_counts?.local || { modules: 0, drivers: 0 }, this.memory_percentage = +(this.memory_usage / this.memory_total * 100).toFixed(4), this.used_memory = Ut(this.memory_usage * 1024), this.total_memory = Ut(this.memory_total * 1024);
    const n = e.load?.edge || {};
    this.edge_nodes = e.edge_nodes || Object.keys(n).map((s) => __spreadProps(__spreadValues({
      id: s
    }, n[s]), {
      run_count: e.status?.run_count?.edge[s] || {}
    })) || [];
  }
};
var er = class {
  /** ID of the cluster associated with the process */
  cluster_id;
  /** Unique identifier of the application */
  id;
  /** List of module IDs that are running in this process */
  modules;
  /** Whether the process is running */
  running;
  /** Number if modules instances running in this process */
  module_instances;
  /** Last exit code of the process */
  last_exit_code;
  /** Number of times this process has been launched */
  launch_count;
  /** Time that the latest instance of the process launched */
  launch_time;
  /** Current CPU usage of the process */
  cpu_usage;
  /** Total amount of available memory on the host in KB */
  memory_total;
  /** Total amount of memory used by the process in KB */
  memory_usage;
  /** Display string for the memory usage */
  used_memory;
  /** Display string for the memory total */
  total_memory;
  constructor(e, n = {}) {
    this.cluster_id = e, this.id = n.id || n.driver || "", this.modules = n.modules || [], this.running = n.running || false, this.module_instances = n.module_instances || n.edge?.status?.module_instances || n.local?.status?.module_instances || 0, this.last_exit_code = n.last_exit_code || n.edge?.status?.last_exit_code || n.local?.status?.last_exit_code || 0, this.launch_count = n.launch_count || n.edge?.status?.launch_count || n.local?.status?.launch_count || 0, this.launch_time = n.launch_time || n.edge?.status?.launch_time || n.local?.status?.launch_time || 0, this.cpu_usage = n.cpu_usage || n.percentage_cpu || n.edge?.status?.percentage_cpu || n.local?.status?.percentage_cpu || 0, this.memory_total = n.memory_total || n.edge?.status?.memory_total || n.local?.status?.memory_total || 0, this.memory_usage = n.memory_usage || n.edge?.status?.memory_usage || n.local?.status?.memory_usage || 0, this.used_memory = Ut(this.memory_usage * 1024), this.total_memory = Ut(this.memory_total * 1024);
  }
};
var ze = "cluster";
function xs(t) {
  return new Xi(t);
}
function Go(t = {}) {
  return $({ query_params: t, fn: xs, path: ze });
}
function Wo(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: (n) => n.map(
      (s) => new er(t, s)
    ),
    path: ze
  });
}
function Qo(t, e) {
  return A({ id: t, query_params: e, path: ze });
}
var tr = class extends F {
  /** Domain name */
  domain;
  /** Login URL for the domain */
  login_url;
  /** Logout URL for the domain */
  logout_url;
  /** Description of the domain domain */
  description;
  /** Local configuration for the domain */
  config;
  /** Internal settings for the domain */
  internals;
  /** List of email domains associated with the domain */
  email_domains;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.domain = e.domain || "", this.login_url = e.login_url || "", this.logout_url = e.logout_url || "", this.config = e.config || {}, this.internals = e.internals || {}, this.email_domains = e.email_domains || [];
  }
};
var Fe = "domains";
function Jt(t) {
  return new tr(t);
}
function Jo(t = {}) {
  return $({ query_params: t, fn: Jt, path: Fe });
}
function Vo(t) {
  return d({ id: t, query_params: {}, fn: Jt, path: Fe });
}
function Yo(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Jt,
    path: Fe
  });
}
function Xo(t) {
  return q({ form_data: t, query_params: {}, fn: Jt, path: Fe });
}
function eu(t) {
  return A({ id: t, query_params: {}, path: Fe });
}
var Le = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.Support = 1] = "Support", t[t.Admin = 2] = "Admin", t[t.NeverDisplay = 3] = "NeverDisplay", t))(Le || {});
var Pe = class extends F {
  /** ID of the parent zone/system/module/driver */
  parent_id;
  /** Unix timestamp in seconds of when the settings where last updated */
  updated_at;
  /** Access level for the settings data */
  encryption_level;
  /** Contents of the settings */
  settings_string;
  /** Top level keys for the parsed settings */
  keys;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Contents of the settings */
  get value() {
    return this.settings_string;
  }
  constructor(e = {}) {
    super(e), this.parent_id = e.parent_id || "", this.updated_at = e.updated_at || Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), this.settings_string = e.settings_string || "", this.encryption_level = e.encryption_level || Le.None, this.keys = e.keys || [], this.modified_by_id = e.modified_by_id || "";
  }
};
var Nt = /* @__PURE__ */ ((t) => (t[t.SSH = 0] = "SSH", t[t.Device = 1] = "Device", t[t.Service = 2] = "Service", t[t.Websocket = 3] = "Websocket", t[t.Logic = 99] = "Logic", t))(Nt || {});
var qs = class extends F {
  /** Place class name of the driver */
  class_name;
  /** Description of the driver functionality */
  description;
  /** Name to use for modules that inherit this driver */
  module_name;
  /** Role of the driver in engine */
  role;
  /** Default URI for the driver */
  default_uri;
  /** Default port number for the driver */
  default_port;
  /** ID of the repository the driver is from */
  repository_id;
  /** Name of the file from the repository to load the driver logic from */
  file_name;
  /** Version of the driver logic to use */
  commit;
  /** Ignore connection issues */
  ignore_connected;
  /** Whether newer version of driver is available */
  update_available;
  update_info;
  /**  */
  alert_level;
  /** Tuple of user settings of differring encryption levels for the driver */
  settings;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.module_name = e.module_name || "", this.role = e.role ?? Nt.Logic, this.default_uri = e.default_uri || "", this.default_port = e.default_port || 1, this.ignore_connected = e.ignore_connected || false, this.class_name = e.class_name || "", this.repository_id = e.repository_id || "", this.file_name = e.file_name || "", this.commit = e.commit || "", this.update_available = e.update_available || false, this.update_info = e.update_info, this.alert_level = e.alert_level || "medium", this.settings = e.settings || [null, null, null, null], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
};
var pe = "drivers";
function Vt(t) {
  return new qs(t);
}
function nu(t = {}) {
  return $({ query_params: t, fn: Vt, path: pe });
}
function su(t, e = {}) {
  return d({ id: t, query_params: e, fn: Vt, path: pe });
}
function iu(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Vt,
    path: pe
  });
}
function ru(t) {
  return q({ form_data: t, query_params: {}, fn: Vt, path: pe });
}
function ou(t) {
  return A({ id: t, query_params: {}, path: pe });
}
function uu(t) {
  return a({ id: t, task_name: "recompile", path: pe });
}
function cu(t) {
  return a({ id: t, task_name: "reload", path: pe });
}
function hu(t) {
  return a({ id: t, task_name: "readme", method: "get", path: pe });
}
var nr = class extends F {
  description;
  secret;
  x_api_key;
  online;
  last_seen;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.secret = e.secret || "", this.x_api_key = e.x_api_key || "", this.last_seen = (e.last_seen || 0) * 1e3 || Date.now(), this.online = e.online || false;
  }
  toJSON() {
    const e = super.toJSON();
    return delete e.last_seen, e;
  }
};
var N = "edges";
function Yt(t) {
  return new nr(t);
}
function lu(t = {}) {
  return $({ query_params: t, fn: Yt, path: N });
}
function pu(t) {
  return d({ id: t, query_params: {}, fn: Yt, path: N });
}
function du(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Yt,
    path: N
  });
}
function fu(t) {
  return q({ form_data: t, query_params: {}, fn: Yt, path: N });
}
function _u(t) {
  return A({ id: t, query_params: {}, path: N });
}
var Hn = class {
  /** ISO8601 timestamp of the creation time of the group */
  created_at;
  /** ISO8601 timestamp of the last update time of the group */
  updated_at;
  /** Unique identifier of the group */
  id;
  /** Human readable name of the group */
  name;
  /** Description of the group's purpose */
  description;
  /** Subsystems this group participates in */
  subsystems;
  /** ID of the authority associated with the group */
  authority_id;
  /** ID of the parent group */
  parent_id;
  /**
   * Feature flags per subsystem, i.e. `{ signage: { templates: true } }`.
   * Child groups inherit and can override ancestor keys
   */
  features;
  /** Permission bitmask given to users added without explicit permissions */
  default_permissions;
  /** AD group ID mapped to its display name and permission bitmask */
  ad_group_mappings;
  /** Count of child groups for this group */
  children_count;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.id = e.id || "", this.name = e.name || "", this.description = e.description || "", this.subsystems = e.subsystems || [], this.authority_id = e.authority_id || "", this.parent_id = e.parent_id || "", this.features = e.features || {}, this.default_permissions = e.default_permissions || 0, this.ad_group_mappings = e.ad_group_mappings || {}, isFinite(Number(e.children_count)) && (this.children_count = e.children_count);
  }
};
var Ps = class {
  /** ISO8601 timestamp of the creation time of the association */
  created_at;
  /** ISO8601 timestamp of the last update time of the association */
  updated_at;
  /** ID of the user associated with the group */
  user_id;
  /** ID of the group associated with the user */
  group_id;
  /** Permission bitmask granted by this association */
  permissions;
  /** AD group ID that added this membership. Empty when added manually */
  auto_assigned;
  /** Group details included by the API when available */
  group;
  /** User details included by the API when available */
  user;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.user_id = e.user_id || "", this.group_id = e.group_id || "", this.permissions = e.permissions || 0, this.auto_assigned = e.auto_assigned || "", this.group = e.group ? new Hn(e.group) : void 0, this.user = e.user ? new Dn(e.user) : void 0;
  }
};
var Te = "groups";
function ut(t) {
  return new Hn(t);
}
function Eu(t = {}) {
  return $({ query_params: t, fn: ut, path: Te });
}
function Mu(t) {
  const e = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return _(e).then((n) => ut(n));
}
function Cu(t = {}) {
  const e = y(t), n = `${u()}/${Te}/current${e ? "?" + e : ""}`;
  return _(n).then(
    (s) => (s || []).map((i) => ({
      group: ut(i.group || {}),
      permissions: i.permissions || 0
    }))
  );
}
function wu(t) {
  const e = `${u()}/${Te}`;
  return k(e, t).then((n) => ut(n));
}
function Nu(t, e, n = "patch") {
  const s = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return (n === "put" ? ce : te)(s, e).then(
    (i) => ut(i)
  );
}
function Du(t) {
  const e = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return V(e, { response_type: "void" });
}
var Fn = "group_users";
function Xt(t) {
  return new Ps(t);
}
function Ln(t, e) {
  return `${Fn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function Wu(t = {}) {
  return $({ query_params: t, fn: Xt, path: Fn });
}
function Ku(t) {
  const e = `${u()}/${Fn}`;
  return k(e, t).then((n) => Xt(n));
}
function Zu(t, e, n, s = "patch") {
  const i = `${u()}/${Ln(t, e)}`;
  return (s === "put" ? ce : te)(i, n).then(
    (r) => Xt(r)
  );
}
function Ju(t, e) {
  const n = `${u()}/${Ln(t, e)}`;
  return V(n, { response_type: "void" });
}
var de = class extends F {
  /** Name of the system assocaited with the trigger */
  system_name;
  /** Number of times the trigger has been activated/triggered */
  activated_count;
  /** Description of the trigger */
  description;
  /** Duration with which to ignore sequential activations of the trigger */
  debounce_period;
  /** Whether the trigger should take priority */
  important;
  /** Whether trigger is enabled on the associated zone or system */
  enabled;
  /** Whether the trigger can call webhooks */
  enable_webhook;
  /** Whether the trigger instance can execute methods */
  exec_enabled;
  /** Auth key for trigger's webhook */
  webhook_secret;
  /** HTTP verbs supported by the webhook */
  supported_methods;
  /** ID of the system associated with the trigger */
  control_system_id;
  /** ID of the zone associated with the trigger */
  zone_id;
  /** ID of the Parent trigger */
  trigger_id;
  /** List of playlist IDs associated with the system */
  playlists;
  // Whether condition checks should match any single condition to pass or all of them
  any_match;
  /** ID of the system associated with the trigger */
  get system_id() {
    return this.control_system_id;
  }
  /** Actions to perform when the trigger is activated */
  get actions() {
    const e = this._actions, n = (e.functions || []).map((i) => __spreadProps(__spreadValues({}, i), {
      args: __spreadValues({}, i.args)
    })), s = (e.mailers || []).map((i) => __spreadProps(__spreadValues({}, i), {
      emails: [...i.emails]
    }));
    return { functions: n, mailers: s };
  }
  /** Conditions for activating the trigger */
  get conditions() {
    const e = this._conditions, n = (e.comparisons || []).map((i) => __spreadProps(__spreadValues({}, i), {
      left: typeof i.left == "object" ? __spreadValues({}, i.left) : i.left,
      right: typeof i.right == "object" ? __spreadValues({}, i.right) : i.right
    })), s = (e.time_dependents || []).map((i) => __spreadValues({}, i));
    return { comparisons: n, time_dependents: s };
  }
  /** Actions to perform when the trigger is activated */
  _actions;
  /** Conditions for activating the trigger */
  _conditions;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this._actions = e.actions || { functions: [], mailers: [] }, this._conditions = e.conditions || {
      comparisons: [],
      time_dependents: []
    }, this.debounce_period = e.debounce_period || 0, this.important = e.important || false, this.enabled = e.enabled || false, this.webhook_secret = e.webhook_secret || "", this.control_system_id = e.system_id || e.control_system_id || "", this.zone_id = e.zone_id || "", this.system_name = e.system_name || (e.control_system ? e.control_system.name : ""), this.enable_webhook = e.enable_webhook || false, this.exec_enabled = e.exec_enabled || false, this.supported_methods = e.supported_methods || ["POST"], this.activated_count = e.activated_count || e.trigger_count || 0, this.playlists = e.playlists || [], this.trigger_id = e.trigger_id || "", this.any_match = e.any_match || false;
  }
};
var en = class extends F {
  /** Tuple of user settings of differring encryption levels for the zone */
  settings = [null, null, null, null];
  /** Description of the zone's purpose */
  description;
  /** ID of the parent zone */
  parent_id;
  /** List of triggers associated with the zone */
  triggers;
  /** List of tags associated with the zone */
  tags;
  /** Geo-location details associated with the zone */
  location;
  /** Custom display name for the zone */
  display_name;
  /** Organisational code associated with the zone */
  code;
  /** Organisational categorisation of the zone */
  type;
  /** Count of resources associated with the zone */
  count;
  /** Count of child zones for this zone */
  children_count;
  /** Amount of physical capacity associated with the zone */
  capacity;
  /** ID or URL of or in a map associated with the zone */
  map_id;
  /** List of image URLs */
  images;
  /** Timezone of the associated real world location */
  timezone;
  /** List of playlist IDs associated with the system */
  playlists;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  trigger_list = [];
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.tags = e.tags || [], this.triggers = e.triggers || [], this.settings = e.settings || [null, null, null, null], this.parent_id = e.parent_id || "", this.location = e.location || "", this.display_name = e.display_name || "", this.code = e.code || "", this.type = e.type || "", this.count = e.count || 0, this.capacity = e.capacity || 0, this.map_id = e.map_id || "", this.timezone = e.timezone || "", this.images = e.images || [], this.playlists = e.playlists || [], isFinite(Number(e.children_count)) && (this.children_count = e.children_count), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.trigger_data && e.trigger_data instanceof Array && (this.trigger_list = e.trigger_data.map(
      (n) => new de(n)
    ));
  }
};
var rr = class {
  /** ISO8601 timestamp of the creation time of the association */
  created_at;
  /** ISO8601 timestamp of the last update time of the association */
  updated_at;
  /** ID of the group associated with the zone */
  group_id;
  /** ID of the zone associated with the group */
  zone_id;
  /** Permission bitmask granted by this association */
  permissions;
  /** Whether this association denies the permission bitmask */
  deny;
  /** Group details included by the API when available */
  group;
  /** Zone details included by the API when available */
  zone;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.group_id = e.group_id || "", this.zone_id = e.zone_id || "", this.permissions = e.permissions || 0, this.deny = !!e.deny, this.group = e.group ? new Hn(e.group) : void 0, this.zone = e.zone ? new en(e.zone) : void 0;
  }
};
var jn = "group_zones";
function tn(t) {
  return new rr(t);
}
function Gn(t, e) {
  return `${jn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function Vu(t = {}) {
  return $({ query_params: t, fn: tn, path: jn });
}
function Xu(t) {
  const e = `${u()}/${jn}`;
  return k(e, t).then((n) => tn(n));
}
function ec(t, e, n, s = "patch") {
  const i = `${u()}/${Gn(t, e)}`;
  return (s === "put" ? ce : te)(i, n).then(
    (r) => tn(r)
  );
}
function tc(t, e) {
  const n = `${u()}/${Gn(t, e)}`;
  return V(n, { response_type: "void" });
}
var or = class extends F {
  /** Type of auth source */
  type = "ldap";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** HTTP URL of the SSO provider */
  host;
  /** Application ID from the SSO provider providing the Ldap services */
  port;
  /** Application secret from the SSO provider providing the Ldap services */
  auth_method;
  /** Mapping of engine values to SSO provider values */
  uid;
  /** URL from the SSO provider for authorisation */
  base;
  /** Default DN to user when performing a user lookup */
  bind_dn;
  /** Password to access LDAP service */
  password;
  /**
   * LDAP Filter. Can be used instead of `uid`.
   * e.g. (&(uid=%{username})(memberOf=cn=myapp-users,ou=groups,dc=example,dc=com))
   */
  filter;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.host = e.host || "", this.port = e.port || 636, this.auth_method = e.auth_method || "ssl", this.uid = e.uid || "", this.base = e.base || "", this.bind_dn = e.bind_dn || "", this.password = e.password || "", this.filter = e.filter || "";
  }
};
var ct = "ldap_auths";
function nn(t) {
  return new or(t);
}
function nc(t = {}) {
  return $({ query_params: t, fn: nn, path: ct });
}
function ic(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: nn,
    path: ct
  });
}
function rc(t) {
  return q({ form_data: t, query_params: {}, fn: nn, path: ct });
}
function oc(t) {
  return A({ id: t, query_params: {}, path: ct });
}
var Is = class {
  /** ID of the parent resource associated with the metadata */
  id;
  /** ID of the parent resource associated with the metadata */
  parent_id;
  /** Name/ID of the zone metadata */
  name;
  /** Description of what this metadata represents */
  description;
  /** Metadata associated with this key. */
  details;
  /** List user groups allowed to edit the metadata */
  editors;
  /** JSON schema associated with the metadata details */
  schema;
  /** ID of the schema associated with the metadata details */
  schema_id;
  /** Unix timestamp that the metadata was created at */
  created_at;
  /** Unix timestamp that the metadata was last modified at */
  updated_at;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.parent_id = e.parent_id || e.id || "", this.id = this.parent_id, this.name = e.name || "", this.description = e.description || "";
    try {
      this.details = (typeof e.details == "string" ? JSON.parse(e.details) : e.details) || {};
    } catch {
      this.details = e.details || {};
    }
    this.editors = e.editors || [], this.schema_id = e.schema_id || e.schema || "", this.schema = this.schema_id, this.created_at = (e.created_at || 0) * 1e3 || Date.now(), this.updated_at = (e.updated_at || 0) * 1e3 || Date.now(), this.modified_by_id = e.modified_by_id || "", this.version = e.version || 0;
  }
};
var fe = "metadata";
function Re(t) {
  return new Is(t);
}
function uc(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: (n) => Object.keys(n).map((s) => Re(n[s])),
    path: fe
  });
}
function cr(t) {
  const e = [...t], n = [];
  for (; e.length; ) {
    const s = e.pop();
    Array.isArray(s) ? e.push(...s) : n.push(s);
  }
  return n.reverse();
}
function cc(t, e = {}) {
  return a({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => cr(
      Object.keys(n).map(
        (s) => n[s].map((i) => Re(i))
      )
    ),
    path: fe
  });
}
function ac(t, e) {
  return d({
    id: t,
    query_params: { name: e },
    fn: (n) => Re(n[e]),
    path: fe
  });
}
function hc(t, e, n = "put") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Re,
    path: fe
  });
}
function pc(t, e) {
  return A({ id: t, query_params: e, path: fe });
}
var Us = class extends F {
  /** Tuple of user settings of differring encryption levels for the system */
  settings = [null, null, null, null];
  /** Display name of the system */
  display_name;
  /** Description of the system */
  description;
  /** Email address associated with the system */
  email;
  /** Email address associated with the system */
  code;
  /** Capacity of the space associated with the system */
  capacity;
  /** Features associated with the system */
  features;
  /** Whether system is bookable by end users */
  bookable;
  /** Whether system is public accessible */
  public;
  /** Count of UI devices attached to the system */
  installed_ui_devices;
  /** Support URL for the system */
  support_url;
  /** URL for the timetable UI linked to the system */
  timetable_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_urls;
  /** URL for managing the attached camera */
  camera_url;
  /** External booking URL for the system */
  room_booking_url;
  /** ID on the SVG Map associated with this system */
  map_id;
  /** List of module IDs that belong to the system */
  modules;
  /** List of images associated with the system */
  images;
  /** List of the zone IDs that the system belongs */
  zones;
  /** Timezone of the associated real world space */
  timezone;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  module_list = [];
  /** Whether the system has signage capabilities */
  signage;
  /** List of playlist IDs associated with the system */
  playlists;
  /** List of security groups with access to the system */
  security_groups;
  /** Unix timestamp of the last ping from the signage player UI */
  signage_last_seen;
  approval;
  /** Orientation of the signage system */
  orientation;
  constructor(e = {}) {
    super(e), this.display_name = e.display_name || "", this.description = e.description || "", this.email = e.email || "", this.code = e.code || "", this.capacity = e.capacity || 0, this.features = e.features || [], this.bookable = e.bookable || false, this.public = e.public ?? false, this.installed_ui_devices = e.installed_ui_devices || 0, this.support_url = e.support_url || "", this.camera_snapshot_url = e.camera_snapshot_url || "", this.camera_snapshot_urls = e.camera_snapshot_urls || [], this.camera_url = e.camera_url || "", this.timetable_url = e.timetable_url || "", this.room_booking_url = e.room_booking_url || "", this.map_id = e.map_id || "", this.modules = e.modules || [], this.images = e.images || [], this.zones = e.zones || [], this.settings = e.settings || [null, null, null, null], this.timezone = e.timezone || "", this.signage = e.signage || false, this.playlists = e.playlists || [], this.security_groups = e.security_groups || [], this.orientation = e.orientation || "unspecified", this.approval = e.approval || false, this.signage_last_seen = e.signage_last_seen || qn(Date.now()), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.module_data && e.module_data instanceof Array && (this.module_list = e.module_data.map(
      (n) => new Es(n)
    ));
  }
};
var Es = class extends F {
  /** Whether the associated hardware is connected */
  connected;
  /** Whether the module driver is running */
  running;
  /** Timestamp of last update in ms since UTC epoch */
  updated_at;
  /** ID of the edge associated with the module */
  edge_id;
  /** ID of the driver associated with the module */
  driver_id;
  /** Driver/dependancy associated with the module */
  driver;
  /** ID of the system associated with the module */
  control_system_id;
  /** System associated with the module */
  system;
  /** IP address of the hardware associated with the module */
  ip;
  /** Whether the hardware connection requires TLS */
  tls;
  /** Whether the hardware connection is over UDP */
  udp;
  /** Port number connections to the hardware are made on */
  port;
  /**  */
  makebreak;
  /** URI associated with the module */
  uri;
  /** Custom name of the module */
  custom_name;
  /** Type of module */
  role;
  /** Notes associated with the module */
  notes;
  /** Ignore connection issues */
  ignore_connected;
  /** Tuple of user settings of differring encryption levels for the module */
  settings = [null, null, null, null];
  /** Whether the module has a runtime error */
  has_runtime_error;
  /** Timestamp of the last runtime error in ms since UTC epoch */
  error_timestamp;
  /**  */
  alert_level;
  /** ID of the system associated with the module */
  get system_id() {
    return this.control_system_id;
  }
  constructor(e = {}) {
    super(e), this.driver_id = e.driver_id || e.dependency_id || "", this.control_system_id = e.control_system_id || "", this.edge_id = e.edge_id || "", this.ip = e.ip || "", this.tls = e.tls || false, this.udp = e.udp || false, this.port = e.port || 1, this.makebreak = e.makebreak || false, this.uri = e.uri || "", this.custom_name = e.custom_name || "", this.role = e.role ?? Nt.Logic, this.notes = e.notes || "", this.ignore_connected = e.ignore_connected || false, this.connected = e.connected, this.running = e.running || false, this.updated_at = e.updated_at || 0, this.system = new Us(
      e.control_system || e.system
    ), this.has_runtime_error = e.has_runtime_error || false, this.error_timestamp = e.error_timestamp || 0, this.driver = new qs(e.dependency || e.driver), this.settings = e.settings || [null, null, null, null], this.alert_level = e.alert_level || "medium", typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
  /**
   * Convert object into plain object
   */
  toJSON(e = false) {
    const n = super.toJSON();
    return (n.role !== Nt.Logic && !e || !n.control_system_id) && delete n.control_system_id, delete n.driver, delete n.system, delete n.error_timestamp, delete n.has_runtime_error, n;
  }
};
var Y = "modules";
function sn(t) {
  return new Es(t);
}
function mc(t = {}) {
  return $({ query_params: t, fn: sn, path: Y });
}
function gc(t, e = {}) {
  return d({ id: t, query_params: e, fn: sn, path: Y });
}
function yc(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: sn,
    path: Y
  });
}
function $c(t) {
  return q({ form_data: t, query_params: {}, fn: sn, path: Y });
}
function bc(t) {
  return A({ id: t, query_params: {}, path: Y });
}
function vc(t) {
  return a({ id: t, task_name: "start", path: Y });
}
function kc(t) {
  return a({ id: t, task_name: "stop", path: Y });
}
function xc(t) {
  return a({ id: t, task_name: "load", method: "post", path: Y });
}
function qc(t) {
  return a({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Pe(n)),
    path: Y
  });
}
function Pc(t) {
  return a({
    id: t,
    task_name: "error",
    method: "get",
    path: Y
  });
}
var ar = class extends F {
  /** Type of auth source */
  type = "oauth";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** Application ID from the SSO provider providing the OAuth services */
  client_id;
  /** Application secret from the SSO provider providing the OAuth services */
  client_secret;
  /** Mapping of engine values to SSO provider values */
  info_mappings;
  /** HTTP URL of the SSO provider */
  site;
  /** URL from the SSO provider for authorisation */
  authorize_url;
  /** HTTP Method used to generating tokens */
  token_method;
  /** URL for generating user tokens */
  token_url;
  /** Scheme used to authenticate the user */
  auth_scheme;
  /** Space seperated access scopes for the user */
  scope;
  /** URL to grab user's profile details with a valid token */
  raw_info_url;
  /** Additional params to be sent as part of the authorization reqest */
  authorize_params;
  /** Security checks to be made on the returned data */
  ensure_matching;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.client_id = e.client_id || "", this.client_secret = e.client_secret || "", this.info_mappings = e.info_mappings || {}, this.authorize_params = e.authorize_params || {}, this.ensure_matching = e.ensure_matching || {}, this.site = e.site || "", this.authorize_url = e.authorize_url || "oauth/authorize", this.token_method = e.token_method || "post", this.token_url = e.token_url || "oauth/token", this.auth_scheme = e.auth_scheme || "request_body", this.scope = e.scope || "", this.raw_info_url = e.raw_info_url || "", this.authorize_params = e.authorize_params || {}, this.ensure_matching = e.ensure_matching || {};
  }
};
var at = "oauth_auths";
function rn(t) {
  return new ar(t);
}
function Rc(t = {}) {
  return $({ query_params: t, fn: rn, path: at });
}
function Uc(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: rn,
    path: at
  });
}
function Ec(t) {
  return q({ form_data: t, query_params: {}, fn: rn, path: at });
}
function Mc(t) {
  return A({ id: t, query_params: {}, path: at });
}
var Os = /* @__PURE__ */ ((t) => (t.Driver = "driver", t.Interface = "interface", t))(Os || {});
var hr = class extends F {
  /** Name of the folder on the server to pull the repository */
  folder_name;
  /** Description of the contents of the repository */
  description;
  /** URI that the repository can be pulled from */
  uri;
  /** Working branch for the repository */
  branch;
  /** Hash of the commit at the head of the repository */
  commit_hash;
  /** Repository type */
  repo_type;
  /** Username to connect to repository with */
  username;
  /** Password to connect to repository with */
  password;
  /** Root path of the repository to serve at the `folder_name` path */
  root_path;
  /** Repository type */
  get type() {
    return this.repo_type;
  }
  constructor(e = {}) {
    super(e), this.folder_name = e.folder_name || "", this.description = e.description || "", this.uri = e.uri || "", this.branch = e.branch || "", this.commit_hash = e.commit_hash || "", this.repo_type = e.repo_type || Os.Driver, this.username = e.username || "", this.password = e.password || "", this.root_path = e.root_path || "";
  }
};
var G = "repositories";
function on(t) {
  return new hr(t);
}
function Fc(t = {}) {
  return $({ query_params: t, fn: on, path: G });
}
function Lc(t) {
  return d({ id: t, query_params: {}, fn: on, path: G });
}
function jc(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: on,
    path: G
  });
}
function Gc(t) {
  return q({ form_data: t, query_params: {}, fn: on, path: G });
}
function Bc(t) {
  return A({ id: t, query_params: {}, path: G });
}
function Wc() {
  return d({
    id: "interfaces",
    query_params: {},
    path: G
  });
}
function Qc(t) {
  return d({
    id: "remote_default_branch",
    query_params: t,
    path: G
  });
}
function Kc(t) {
  return d({
    id: "remote_branches",
    query_params: t,
    path: G
  });
}
function Zc(t) {
  return d({
    id: "remote_commits",
    query_params: t,
    path: G
  });
}
function Jc(t, e) {
  return a({
    id: t,
    task_name: "drivers",
    form_data: e,
    method: "get",
    path: G
  });
}
function Vc(t, e) {
  return a({
    id: t,
    task_name: "commits",
    form_data: e,
    method: "get",
    path: G
  });
}
function Yc(t) {
  return a({
    id: t,
    task_name: "branches",
    method: "get",
    path: G
  });
}
function Xc(t) {
  return a({
    id: t,
    task_name: "default_branch",
    method: "get",
    path: G
  });
}
function ea(t, e) {
  return a({
    id: t,
    task_name: "details",
    form_data: e,
    method: "get",
    path: G
  });
}
function ta(t, e) {
  return a({
    id: t,
    task_name: "pull",
    form_data: e,
    method: "post",
    path: G
  });
}
function sa(t, e) {
  return a({
    id: t,
    task_name: "files",
    form_data: e,
    method: "get",
    path: G
  });
}
function aa(t = false) {
  return k(`${u()}/source/resync?clear=${t}`, {});
}
function ha() {
  return _(`${u()}/source/resync`);
}
var lr = class extends F {
  /** Type of auth source */
  type = "saml";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** Name of the application requesting auth */
  issuer;
  /**
   * Mapping of request params that exist during the request
   * phase of OmniAuth that should to be sent to the IdP
   */
  idp_sso_target_url_runtime_params;
  /** Describes the format of the username required by this application */
  name_identifier_format;
  /** Attribute that uniquely identifies the user */
  uid_attribute;
  /** URL at which the SAML assertion should be received (SSO Service => Place URL) */
  assertion_consumer_service_url;
  /** URL to which the authentication request should be sent (Place => SSO Service) */
  idp_sso_target_url;
  /** Identity provider's certificate in PEM format (this or fingerprint is required) */
  idp_cert;
  /** SHA1 fingerprint of the certificate */
  idp_cert_fingerprint;
  /** Name for the attribute service */
  attribute_service_name;
  /** Mapping of Attribute Names in a SAMLResponse to entries in the OmniAuth info hash */
  attribute_statements;
  /** Mapping of Attribute Names in a SAMLResponse to entries in the OmniAuth info hash */
  request_attributes;
  /** URL to which the single logout request and response should be sent */
  idp_slo_target_url;
  /** Value to use as default RelayState for single log outs */
  slo_default_relay_state;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.issuer = e.issuer || "", this.idp_sso_target_url_runtime_params = e.idp_sso_target_url_runtime_params || {}, this.name_identifier_format = e.name_identifier_format || "", this.uid_attribute = e.uid_attribute || "", this.assertion_consumer_service_url = e.assertion_consumer_service_url || "", this.idp_sso_target_url = e.idp_sso_target_url || "", this.idp_cert = e.idp_cert || "", this.idp_cert_fingerprint = e.idp_cert_fingerprint || "", this.attribute_service_name = e.attribute_service_name || "", this.attribute_statements = e.attribute_statements || {}, this.request_attributes = e.request_attributes || [], this.idp_slo_target_url = e.idp_slo_target_url || "", this.slo_default_relay_state = e.slo_default_relay_state || "";
  }
};
var ht = "saml_auths";
function un(t) {
  return new lr(t);
}
function pa(t = {}) {
  return $({ query_params: t, fn: un, path: ht });
}
function fa(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: un,
    path: ht
  });
}
function _a(t) {
  return q({ form_data: t, query_params: {}, fn: un, path: ht });
}
function ma(t) {
  return A({ id: t, query_params: {}, path: ht });
}
var je = "settings";
function lt(t) {
  return new Pe(t);
}
function ga(t = {}) {
  return $({ query_params: t, fn: lt, path: je });
}
function $a(t, e, n = {}, s = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: n,
    method: s,
    fn: lt,
    path: je
  });
}
function ba(t, e = {}) {
  return q({ form_data: t, query_params: e, fn: lt, path: je });
}
function ka(t, e = {}) {
  return a({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => n.map((s) => lt(s)),
    path: je
  });
}
var M = "systems";
function Ie(t) {
  return new Us(t);
}
function Sa(t = {}) {
  return $({ query_params: t, fn: Ie, path: M });
}
function Aa(t) {
  return $({ query_params: t, fn: Ie, path: `${M}/with_emails` });
}
function xa(t, e = {}) {
  return d({ id: t, query_params: e, fn: Ie, path: M });
}
function qa(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ie,
    path: M
  });
}
function Pa(t) {
  return q({ form_data: t, query_params: {}, fn: Ie, path: M });
}
function Ta(t) {
  return A({ id: t, query_params: {}, path: M });
}
function Ra(t, e, n = {}) {
  return a({
    id: t,
    task_name: `module/${e}`,
    form_data: n,
    method: "put",
    callback: (s) => Ie(s),
    path: M
  });
}
function Ia(t, e) {
  return a({
    id: t,
    task_name: `module/${e}`,
    form_data: {},
    method: "del",
    callback: (n) => Ie(n),
    path: M
  });
}
function Ua(t, e = {}) {
  return a({
    id: t,
    task_name: "start",
    form_data: e,
    path: M
  });
}
function Ea(t, e = {}) {
  return a({
    id: t,
    task_name: "stop",
    form_data: e,
    path: M
  });
}
function Ma(t, e, n, s = 1, i = []) {
  return a({
    id: t,
    task_name: `${n}_${s}/${encodeURIComponent(e)}`,
    form_data: i,
    path: M
  });
}
function Ca(t, e, n = 1) {
  return a({
    id: t,
    task_name: `${e}_${n}`,
    method: "get",
    path: M
  });
}
function wa(t, e, n = 1) {
  return a({
    id: t,
    task_name: `functions/${e}_${n}`,
    method: "get",
    path: M
  });
}
function Da(t) {
  return $({
    query_params: {},
    fn: (e) => new en(e),
    path: `${M}/${t}/zones`
  });
}
function Ha(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${M}/${t}/triggers`
  });
}
function za(t, e) {
  return a({
    id: t,
    task_name: "triggers",
    form_data: e,
    method: "post",
    callback: (n) => new de(n),
    path: M
  });
}
function Fa(t, e) {
  return a({
    id: t,
    task_name: `triggers/${e}`,
    method: "del",
    path: M
  });
}
function La(t) {
  return a({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Pe(n)),
    path: M
  });
}
var Ge = "triggers";
function cn(t) {
  return new de(t);
}
function Qa(t = {}) {
  return $({ query_params: t, fn: cn, path: Ge });
}
function Ka(t, e = {}) {
  return d({ id: t, query_params: e, fn: cn, path: Ge });
}
function Za(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: cn,
    path: Ge
  });
}
function Ja(t) {
  return q({ form_data: t, query_params: {}, fn: cn, path: Ge });
}
function Va(t) {
  return A({ id: t, query_params: {}, path: Ge });
}
function Ya(t) {
  return a({
    id: t,
    task_name: "instances",
    form_data: {},
    method: "get",
    callback: (e) => e.map((n) => new de(n)),
    path: Ge
  });
}
var pr = /* @__PURE__ */ ((t) => (t.EQ = "equal", t.NEQ = "not_equal", t.GT = "greater_than", t.GTE = "greater_than_or_equal", t.LT = "less_than", t.LTE = "less_than_or_equal", t.AND = "and", t.OR = "or", t.XOR = "exclusive_or", t))(pr || {});
var dr = /* @__PURE__ */ ((t) => (t.AT = "at", t.CRON = "cron", t))(dr || {});
var X = "users";
function Ue(t) {
  return new Dn(t);
}
function eh(t = {}) {
  return $({ query_params: t, fn: Ue, path: X });
}
function th(t, e = {}) {
  return d({ id: t, query_params: e, fn: Ue, path: X });
}
function nh(t = {}) {
  return d({ id: "current", query_params: t, fn: Ue, path: X });
}
function sh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ue,
    path: X
  });
}
function ih(t) {
  return q({ form_data: t, query_params: {}, fn: Ue, path: X });
}
function rh(t, e = {}) {
  return A({ id: t, query_params: e, path: X });
}
function ph(t) {
  return a({
    id: t,
    task_name: "revive",
    form_data: {},
    method: "post",
    callback: (e) => Ue(e),
    path: X
  });
}
var _e = "zones";
function an(t) {
  return new en(t);
}
function dh(t = {}) {
  return $({ query_params: t, fn: an, path: _e });
}
function fh(t = {}) {
  return d({
    id: "tags",
    query_params: t,
    fn: (e) => e,
    path: _e
  });
}
function _h(t, e = {}) {
  return d({ id: t, query_params: e, fn: an, path: _e });
}
function mh(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: an,
    path: _e
  });
}
function gh(t) {
  return q({ form_data: t, query_params: {}, fn: an, path: _e });
}
function yh(t) {
  return A({ id: t, query_params: {}, path: _e });
}
function $h(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${_e}/${t}/triggers`
  });
}
function bh(t, e, n, s = 1, i = []) {
  return a({
    id: t,
    task_name: `exec/${encodeURIComponent(
      n + "_" + s
    )}/${encodeURIComponent(e)}`,
    form_data: i,
    path: _e
  });
}
var Ns = /* @__PURE__ */ ((t) => (t.Default = "default", t.Cut = "cut", t.CrossFade = "cross_fade", t.SlideTop = "slide_top", t.SlideLeft = "slide_left", t.SlideRight = "slide_right", t.SlideBottom = "slide_bottom", t))(Ns || {});
var yr = class {
  id;
  created_at;
  updated_at;
  name;
  description;
  authority_id;
  orientation;
  play_count;
  play_through_count;
  default_animation;
  random;
  enabled;
  distribution;
  default_duration;
  schedules;
  valid_from;
  valid_until;
  shared_with;
  constructor(e) {
    this.id = e.id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.name = e.name || "", this.description = e.description || "", this.authority_id = e.authority_id || "", this.orientation = e.orientation || "", this.play_count = e.play_count || 0, this.play_through_count = e.play_through_count || 0, this.default_animation = e.default_animation || Ns.Cut, this.random = e.random || false, this.enabled = e.enabled ?? true, this.distribution = e.distribution || false, this.default_duration = e.default_duration ?? 15 * 1e3, this.valid_from = e.valid_from, this.valid_until = e.valid_until, this.schedules = e.schedules || [], this.shared_with = e.shared_with || [];
  }
};
var $r = class {
  id;
  created_at;
  updated_at;
  name;
  description;
  uri;
  playback_type;
  plugin_type;
  authority_id;
  enabled;
  params;
  defaults;
  constructor(e = {}) {
    this.id = e.id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.name = e.name || "", this.description = e.description || "", this.uri = e.uri || "", this.playback_type = e.playback_type || "static", this.plugin_type = e.plugin_type || "plugin", this.authority_id = e.authority_id || "", this.enabled = e.enabled ?? true, this.params = e.params || {}, this.defaults = e.defaults || {};
  }
};
var Z = "signage/playlists";
function ln(t) {
  return new yr(t);
}
function Jh(t = {}) {
  return $({ query_params: t, fn: ln, path: Z });
}
function Vh(t, e = {}) {
  return d({
    id: t,
    query_params: e,
    fn: ln,
    path: Z
  });
}
var dt = "signage/plugins";
function dn(t) {
  return new $r(t);
}
function hl(t = {}) {
  return $({ query_params: t, fn: dn, path: dt });
}
function pl(t, e, n = "patch") {
  return P({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: dn,
    path: dt
  });
}
function dl(t) {
  return q({
    form_data: t,
    query_params: {},
    fn: dn,
    path: dt
  });
}
function fl(t, e = {}) {
  return A({ id: t, query_params: e, path: dt });
}
var Ls = class {
  _listeners = /* @__PURE__ */ new Set();
  _error_listeners = /* @__PURE__ */ new Set();
  _complete_listeners = /* @__PURE__ */ new Set();
  _closed = false;
  next(e) {
    if (!this._closed)
      for (const n of [...this._listeners]) n(e);
  }
  error(e) {
    if (!this._closed) {
      for (const n of [...this._error_listeners]) n(e);
      this._closed = true, this._clear();
    }
  }
  complete() {
    if (!this._closed) {
      for (const e of [...this._complete_listeners]) e();
      this._closed = true, this._clear();
    }
  }
  subscribe(e, n, s) {
    return this._closed ? (s?.(), () => null) : (this._listeners.add(e), n && this._error_listeners.add(n), s && this._complete_listeners.add(s), () => {
      this._listeners.delete(e), n && this._error_listeners.delete(n), s && this._complete_listeners.delete(s);
    });
  }
  _clear() {
    this._listeners.clear(), this._error_listeners.clear(), this._complete_listeners.clear();
  }
};
var Rr = class extends Ls {
  constructor(e) {
    super(), this._config = e, this._socket = new WebSocket(e.url), this._socket.onopen = () => {
      const n = [...this._queue];
      this._queue = [];
      for (const s of n) this.next(s);
    }, this._socket.onmessage = (n) => {
      super.next(this._deserialize(n));
    }, this._socket.onerror = (n) => this.error(n), this._socket.onclose = () => super.complete();
  }
  _socket;
  _queue = [];
  next(e) {
    this._socket.readyState === WebSocket.OPEN ? this._socket.send(this._serialize(e)) : this._queue.push(e);
  }
  complete() {
    this._socket.close(), super.complete();
  }
  _serialize(e) {
    return this._config.serializer ? this._config.serializer(e) : `${e}`;
  }
  _deserialize(e) {
    return this._config.deserializer ? this._config.deserializer(e) : e.data;
  }
};
function Ir(t) {
  return new Rr(
    typeof t == "string" ? { url: t } : t
  );
}
var ne = /* @__PURE__ */ ((t) => (t[t.PARSE_ERROR = 0] = "PARSE_ERROR", t[t.BAD_REQUEST = 1] = "BAD_REQUEST", t[t.ACCESS_DENIED = 2] = "ACCESS_DENIED", t[t.REQUEST_FAILED = 3] = "REQUEST_FAILED", t[t.UNKNOWN_CMD = 4] = "UNKNOWN_CMD", t[t.SYS_NOT_FOUND = 5] = "SYS_NOT_FOUND", t[t.MOD_NOT_FOUND = 6] = "MOD_NOT_FOUND", t[t.UNEXPECTED_FAILURE = 7] = "UNEXPECTED_FAILURE", t))(ne || {});
var js = /* @__PURE__ */ ((t) => (t.Info = "info", t.Debug = "debug", t.Warning = "warn", t.Error = "error", t.Fatal = "fatal", t.Trace = "trace", t))(js || {});
var Dt = {};
function Mr(t) {
  return Dt[t];
}
var C = Ft("WS");
var Gs = 15;
var St = 0;
var ee;
var Bs = 0;
var B = {};
var Qn = {};
var Cr = {};
var Ae = se(false);
var Ws = se([0, 0]);
var Qs = Date.now();
var Oe;
var Ht = 0;
var me = null;
var Tt;
var Kn = 0;
var At = 10 * 1e3;
var Or = se(null);
function Sn() {
  return u().indexOf("/control/") >= 0 ? "/control/websocket" : `${fs()}/systems/control`;
}
function Ks() {
  return Ae.value;
}
function wr() {
  return Ae.asReadonly();
}
function Nr(t, e = Qn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  return e[n] || (e[n] = se(void 0)), e[n].asReadonly();
}
function Dr(t, e = Qn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  if (e[n])
    return e[n].value;
}
function ns(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "bind"
  }, t);
  return n(s, e);
}
function Hr(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "unbind"
  }, t);
  return n(s, e);
}
function zr(t, e = At, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "exec"
  }, t);
  return n(s, e);
}
function Lp(t, e = At, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "debug"
  }, t);
  return n(s, e);
}
function jp(t, e = At, n = We) {
  const s = __spreadValues({
    id: ++St,
    cmd: "ignore"
  }, t);
  return n(s, e);
}
function We(t, e = At, n = 0) {
  const s = `${t.cmd}|${t.sys}|${t.mod}${t.index}|${t.name}|${t.args}|${li()}`;
  if (B[s])
    C("Request already in progress. Waiting...", t);
  else {
    const i = __spreadProps(__spreadValues({}, t), { key: s });
    i.promise = new Promise((r, o) => {
      const h = () => {
        delete B[s], B[s] = null, We(t, e, n).then(
          (b) => r(b),
          (b) => o(b)
        );
      };
      if (ee && Ks()) {
        Un() && Qr(t, ee, Cr), i.resolve = r, i.reject = o;
        const b = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
        C(
          `[${t.cmd.toUpperCase()}](${t.id}) ${b}`,
          t.args
        ), ee.next(t), e > 0 && ue(
          `${s}`,
          () => {
            o("Request timed out."), delete B[s], B[s] = null;
          },
          e
        );
      } else me ? setTimeout(() => h(), 1e3) : Zn().then(() => h());
    }), B[s] = i;
  }
  return B[s].promise;
}
function Zs(t) {
  if (t !== "pong" && t instanceof Object) {
    if (t.type === "notify" && t.meta)
      jr(t.meta, t.value);
    else if (t.type === "success")
      Fr(t);
    else if (t.type === "debug") {
      C(`[DEBUG] ${t.mod}${t.klass || ""} \u2192`, t.msg);
      const e = t.meta || { mod: "", index: "" };
      Or.set({
        mod_id: t.mod || "<empty>",
        module: `${e.mod}_${e.index}`,
        class_name: t.klass || "<empty>",
        message: t.msg || "<empty>",
        level: t.level || js.Debug,
        time: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)
      });
    } else t.type === "error" ? Lr(t) : t.cmd || C.error("Invalid websocket message", t);
    $e(`${t.id}`);
  } else t === "pong" && (Kn = Date.now(), C("Pong!"));
}
function Fr(t) {
  const e = Object.keys(B).map((n) => B[n]).find((n) => n?.id === t.id);
  C(`[SUCCESS](${t.id})`), e && e.resolve && (e.resolve(t.value), delete B[e.key]);
}
function Lr(t) {
  let e = "UNEXPECTED FAILURE";
  switch (t.code) {
    case ne.ACCESS_DENIED:
      e = "ACCESS DENIED";
      break;
    case ne.BAD_REQUEST:
      e = "BAD REQUEST";
      break;
    case ne.MOD_NOT_FOUND:
      e = "MODULE NOT FOUND";
      break;
    case ne.SYS_NOT_FOUND:
      e = "SYSTEM NOT FOUND";
      break;
    case ne.PARSE_ERROR:
      e = "PARSE ERROR";
      break;
    case ne.REQUEST_FAILED:
      e = "REQUEST FAILED";
      break;
    case ne.UNKNOWN_CMD:
      e = "UNKNOWN COMMAND";
      break;
  }
  C.error(`[ERROR] ${e}(${t.id}): ${t.msg}`);
  const n = Object.keys(B).map((s) => B[s]).filter((s) => s).find((s) => s.id === t.id);
  n && n.reject && (n.reject(t), $e(`${n.key}`), delete B[n.key]);
}
function jr(t, e, n = Qn) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  n[s] || (n[s] = se(null));
  const i = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
  C(`[NOTIFY] ${i} changed`, [
    n[s].value,
    "\u2192",
    e
  ]), n[s].set(e);
}
function Zn(t = 0) {
  return me == null && (me = new Promise((e) => {
    if (t > 40)
      return location.reload();
    Ht++, Qs = Date.now(), ee = Un() ? Wr() : Gr(), ee ? (C.debug("Authority:", Mt()), C("Connecting to websocket..."), ee.subscribe(
      (n) => {
        Ae.value || (C("Connection established."), e()), Ae.set(true), Ht = 0, An(), Zs(n);
      },
      (n) => {
        ee = void 0, me = null, rs(), An(), Br(n);
      },
      () => {
        ee = void 0, me = null, rs(), C("Connection closed by browser."), Ae.set(false), zt();
      }
    ), Oe && clearInterval(Oe), Kn = Date.now(), ss(), Oe = setInterval(
      () => ss(),
      Gs * 1e3
    ), An(), Bs += 1, Tt = setTimeout(() => {
      C("Unhealthy connection. Reconnecting..."), Ae.set(false), me = null, zt();
    }, 30 * 1e3)) : (ee ? C(
      `Waiting on auth(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      [!!J(), !!Mt()],
      "info"
    ) : C.error(
      `Failed to create websocket(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`
    ), setTimeout(
      () => {
        me = null, Zn(t).then((n) => e(n));
      },
      1e3 * Math.min(10, ++t)
    ));
  })), me;
}
function Gr() {
  if (!Mt() || !J()) return null;
  const t = ki() || location.protocol.indexOf("https") >= 0;
  let e = `ws${t ? "s" : ""}://${Pn()}${Sn()}${_s() ? "?fixed_device=true" : ""}`;
  const n = J();
  let s = n === "x-api-key" ? `api-key=${et()}` : `bearer_token=${n}`;
  return !yi() && !ai() ? (C("Authenticating through cookie..."), s += `;max-age=120;path=${Sn()};`, s += `${t ? "secure;" : ""}samesite=strict`, document.cookie = s, C("Cookies:", [document.cookie, s])) : (C("Authenticating through URL query parameter..."), e += `${e.indexOf("?") >= 0 ? "&" : "?"}${s}`), C(
    `Creating websocket connection to ws${t ? "s" : ""}://${Pn()}${Sn()}`
  ), Ir({
    url: e,
    serializer: (i) => typeof i == "object" ? JSON.stringify(i) : i,
    deserializer: (i) => {
      let r = i.data;
      if (r === "pong") return r;
      try {
        return JSON.parse(i.data);
      } catch {
        return r;
      }
    }
  });
}
function zt() {
  Ws.set([Bs, Date.now() - Qs]), ee && Ks() && (ee.complete(), Oe && (clearInterval(Oe), Oe = void 0)), C(
    `Reconnecting in ${Math.min(
      5e3,
      Ht * 300 || 1e3
    )}ms...`
  ), ue(
    "reconnect",
    () => Zn(),
    Math.min(5e3, (Ht + 1) * 300 || 1e3)
  );
}
function ss() {
  if (Date.now() - Kn > 4 * Gs * 1e3)
    return zt();
  ee?.next("ping");
}
function Br(t) {
  Ae.set(false), C.error("Websocket error:", t), t.status === 401 && Cn(), Mn(), zt();
}
function An() {
  Tt && (clearTimeout(Tt), Tt = void 0);
}
function Wr() {
  const t = new Ls();
  return t.subscribe(
    (e) => Zs(e)
  ), t;
}
function is(t, e) {
  const n = typeof e == "string" ? e : e?.message || e?.msg || "Mock realtime callback failed";
  return {
    id: t.id,
    type: "error",
    code: e?.code || ne.UNEXPECTED_FAILURE,
    msg: n
  };
}
function Qr(t, e, n) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`, i = Mr(t.sys), r = i && i[t.mod] ? i[t.mod][t.index - 1 || 0] : null;
  if (r) {
    try {
      switch (t.cmd) {
        case "bind":
          n[s] = r.listen(t.name).subscribe((o) => {
            setTimeout(
              () => {
                e.next({
                  type: "notify",
                  value: o,
                  meta: t
                });
              },
              Math.floor(Math.random() * 100 + 50)
              // Add natural delay before response
            );
          });
          break;
        case "unbind":
          n[s] && (n[s](), delete n[s], $e(`${s}`));
          break;
      }
    } catch (o) {
      C.error(`[MOCK ERROR](${t.id}) request failed`, o), ue(
        `${t.id}-error`,
        () => e.next(is(t, o)),
        10
      );
      return;
    }
    ue(
      `${t.id}-response`,
      () => {
        try {
          const o = {
            id: t.id,
            type: "success",
            value: t.cmd === "exec" ? r.call(t.name, t.args) : null
          };
          e.next(o);
        } catch (o) {
          C.error(
            `[MOCK ERROR](${t.id}) execute failed`,
            o
          ), e.next(is(t, o));
        }
      },
      10
    );
  } else
    ue(
      `${t.id}-error`,
      () => e.next({
        id: t.id,
        type: "error",
        code: i ? ne.SYS_NOT_FOUND : ne.MOD_NOT_FOUND
      }),
      10
    );
}
function rs() {
  for (const t in B)
    B[t] && delete B[t];
}
var os = class {
  constructor(e, n) {
    this._module = e, this.name = n, wr().subscribe((s, i) => {
      s !== i && (s && (this._stale_bindings || this._pending === 1) ? (It("VAR", "Re-binding to status variable", this.binding()), this.rebind()) : s || ($e(`rebind:${JSON.stringify(this.binding())}`), It(
        "VAR",
        "Binding dropped due to disconnection, re-binding when possible.",
        this.binding()
      ), this._stale_bindings = this._binding_count || this._stale_bindings, this._binding_count = 0));
    });
  }
  /** Status variable name */
  name;
  /** Active pending state of the variable binding */
  _pending = 0;
  /** Number of active bindings to this variable */
  _binding_count = 0;
  /** Number of bindings to restore on reconnection */
  _stale_bindings = 0;
  /** Number of bindings to this status variable */
  get count() {
    return this._binding_count;
  }
  /** Current value of the binding */
  get value() {
    return Dr(this.binding());
  }
  /**
   * Get a signal that emits the current value of the binding
   */
  listen() {
    return Nr(this.binding());
  }
  /**
   * Subscribe to changes of the variable's binding value.
   * Note: Initial value emitted may be `undefined`
   * @param next Callback for changes to the bindings value
   */
  subscribe(e) {
    return this.listen().subscribe(e);
  }
  bindThenSubscribe(e) {
    const n = this.bind(), s = this.listen().subscribe((i) => {
      try {
        e(i);
      } catch (r) {
        console.error(r);
      }
    });
    return () => {
      try {
        s();
      } finally {
        try {
          n();
        } catch {
        }
      }
    };
  }
  /**
   * Bind to the status variable's value
   */
  bind() {
    return (this._binding_count <= 0 && this._stale_bindings <= 0 || this._pending === 2) && (this._pending = 1, ns(this.binding()).then(() => {
      this._binding_count++, this._pending = 0;
    }).catch(() => null)), () => this.unbind();
  }
  /**
   * Unbind from status variable
   */
  unbind() {
    this._binding_count === 1 && this._pending === 0 ? (this._pending = 2, Hr(this.binding()).then(() => {
      this._pending === 2 && (this._pending = 0), this._binding_count--;
    })) : this._binding_count = Math.max(this._binding_count - 1, 0);
  }
  /**
   * Rebind to the status variable
   */
  async rebind() {
    !this._stale_bindings && this._pending !== 1 || ue(
      `rebind:${JSON.stringify(this.binding())}`,
      async () => {
        await ns(this.binding()), this._binding_count = this._stale_bindings || 1, this._stale_bindings = 0;
      },
      100
    );
  }
  /**
   * Generate binding details for the status variable
   */
  binding() {
    return {
      sys: this._module.system.id,
      mod: this._module.name,
      index: this._module.index,
      name: this.name
    };
  }
};
var Kr = class {
  constructor(e, n) {
    this._system = e, this._id = n;
  }
  /** Mapping of module bindings */
  _bindings = {};
  get id() {
    return `${this.name}_${this.index}`;
  }
  /** Parent system of the module */
  get system() {
    return this._system;
  }
  /** Module index */
  get index() {
    const n = this._id.split("_").pop();
    return parseInt(n || "", 10) || 1;
  }
  /** Module name */
  get name() {
    const e = this._id.split("_");
    return e.pop(), e.join("_");
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   * @deprecated Use `variable` instead
   */
  binding(e) {
    return this._bindings[e] || (this._bindings[e] = new os(this, e)), this._bindings[e];
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   */
  variable(e) {
    return this._bindings[e] || (this._bindings[e] = new os(this, e)), this._bindings[e];
  }
  /**
   * Execute method on the engine module
   * @param method Name of the method
   * @param args Array of arguments to pass to the method
   */
  execute(e, n, s = At) {
    return zr(
      {
        sys: this._system.id,
        mod: this.name,
        index: this.index,
        name: e,
        args: n
      },
      s
    );
  }
};
var Zr = class {
  /** Unique idetifier of the system */
  id;
  /** Mapping of engine modules within the system */
  _module_list = {};
  constructor(e) {
    this.id = e;
  }
  /**
   * Get binding interface for the given module
   * @param module_id ID of the module
   * @param index Index of the module within the system
   */
  module(e, n = 1) {
    if (!e)
      throw new Error("Invalid module ID");
    const s = e.split("_");
    s.length > 1 && Number.isInteger(+s[s.length - 1]) && (n = +s[s.length - 1], s.pop()), n < 1 && (n = 1);
    const i = s.join("_");
    for (this._module_list[i] || (this._module_list[i] = []); this._module_list[i].length < n; )
      this._module_list[i].push(
        new Kr(
          this,
          `${i}_${this._module_list[i].length + 1}`
        )
      );
    return this._module_list[i][n - 1];
  }
};
var xn = {};
function Jr(t) {
  return xn[t] || (xn[t] = new Zr(t)), xn[t];
}
function Gp(t, e, n = 1) {
  return Jr(t).module(e, n);
}

export {
  Ut,
  ci,
  u,
  et,
  J,
  Mt,
  so,
  Un,
  io,
  ro,
  Cn,
  ao,
  lo,
  _,
  k,
  ce,
  te,
  V,
  Qi,
  $,
  q,
  P,
  A,
  qo,
  To,
  Ro,
  Io,
  Dn,
  Vi,
  Yi,
  No,
  Ho,
  zo,
  Fo,
  Go,
  Wo,
  Qo,
  tr,
  Jo,
  Vo,
  Yo,
  Xo,
  eu,
  Le,
  Pe,
  Nt,
  qs,
  nu,
  su,
  iu,
  ru,
  ou,
  uu,
  cu,
  hu,
  lu,
  pu,
  du,
  fu,
  _u,
  Hn,
  Eu,
  Mu,
  Cu,
  wu,
  Nu,
  Du,
  Wu,
  Ku,
  Zu,
  Ju,
  de,
  en,
  Vu,
  Xu,
  ec,
  tc,
  or,
  nc,
  ic,
  rc,
  oc,
  uc,
  cc,
  ac,
  hc,
  pc,
  Us,
  Es,
  mc,
  gc,
  yc,
  $c,
  bc,
  vc,
  kc,
  xc,
  qc,
  Pc,
  ar,
  Rc,
  Uc,
  Ec,
  Mc,
  Os,
  hr,
  Fc,
  Lc,
  jc,
  Gc,
  Bc,
  Wc,
  Qc,
  Kc,
  Zc,
  Jc,
  Vc,
  Yc,
  Xc,
  ea,
  ta,
  sa,
  aa,
  ha,
  lr,
  pa,
  fa,
  _a,
  ma,
  ga,
  $a,
  ba,
  ka,
  Sa,
  Aa,
  xa,
  qa,
  Pa,
  Ta,
  Ra,
  Ia,
  Ua,
  Ea,
  Ma,
  Ca,
  wa,
  Da,
  Ha,
  za,
  Fa,
  La,
  Qa,
  Ka,
  Za,
  Ja,
  Va,
  Ya,
  pr,
  dr,
  eh,
  th,
  nh,
  sh,
  ih,
  rh,
  ph,
  dh,
  fh,
  _h,
  mh,
  gh,
  yh,
  $h,
  bh,
  $r,
  Jh,
  Vh,
  hl,
  pl,
  dl,
  fl,
  Or,
  Lp,
  jp,
  Gp
};
//# debugId=798cb634-1f1e-51a7-8117-8da4a6ef38fa
//# sourceMappingURL=chunk-3QDC3AOP.js.map
