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
var Qn = [
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
function xt(t) {
  if (t >= Qn.length)
    throw new Error("Unable to parse base64 string.");
  const e = Qn[t];
  if (e === 255)
    throw new Error("Unable to parse base64 string.");
  return e;
}
function is(t) {
  let e = "", n, s = t.length;
  for (n = 2; n < s; n += 3)
    e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2 | t[n] >> 6], e += le[t[n] & 63];
  return n === s + 1 && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4], e += "=="), n === s && (e += le[t[n - 2] >> 2], e += le[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += le[(t[n - 1] & 15) << 2], e += "="), e;
}
function Ks(t) {
  if (t.length % 4 !== 0)
    throw new Error("Unable to parse base64 string.");
  const e = t.indexOf("=");
  if (e !== -1 && e < t.length - 2)
    throw new Error("Unable to parse base64 string.");
  let n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0, s = t.length, i = new Uint8Array(3 * (s / 4)), r;
  for (let o = 0, h = 0; o < s; o += 4, h += 3)
    r = xt(t.charCodeAt(o)) << 18 | xt(t.charCodeAt(o + 1)) << 12 | xt(t.charCodeAt(o + 2)) << 6 | xt(t.charCodeAt(o + 3)), i[h] = r >> 16, i[h + 1] = r >> 8 & 255, i[h + 2] = r & 255;
  return i.subarray(0, i.length - n);
}
function Zs(t, e = new TextEncoder()) {
  return is(e.encode(t));
}
var qt = { exports: {} };
var Js = qt.exports;
var Kn;
function Vs() {
  return Kn || (Kn = 1, (function(t) {
    (function(e, n) {
      var s = {};
      n(s);
      var i = s.default;
      for (var r in s)
        i[r] = s[r];
      t.exports = i;
    })(Js, function(e) {
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
      function s(k, c, l, d, O) {
        for (var P, I, S, Q, D, E, re, H, j, z, Qe, Ke, At; O >= 64; ) {
          for (P = c[0], I = c[1], S = c[2], Q = c[3], D = c[4], E = c[5], re = c[6], H = c[7], z = 0; z < 16; z++)
            Qe = d + z * 4, k[z] = (l[Qe] & 255) << 24 | (l[Qe + 1] & 255) << 16 | (l[Qe + 2] & 255) << 8 | l[Qe + 3] & 255;
          for (z = 16; z < 64; z++)
            j = k[z - 2], Ke = (j >>> 17 | j << 15) ^ (j >>> 19 | j << 13) ^ j >>> 10, j = k[z - 15], At = (j >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3, k[z] = (Ke + k[z - 7] | 0) + (At + k[z - 16] | 0);
          for (z = 0; z < 64; z++)
            Ke = (((D >>> 6 | D << 26) ^ (D >>> 11 | D << 21) ^ (D >>> 25 | D << 7)) + (D & E ^ ~D & re) | 0) + (H + (n[z] + k[z] | 0) | 0) | 0, At = ((P >>> 2 | P << 30) ^ (P >>> 13 | P << 19) ^ (P >>> 22 | P << 10)) + (P & I ^ P & S ^ I & S) | 0, H = re, re = E, E = D, D = Q + Ke | 0, Q = S, S = I, I = P, P = Ke + At | 0;
          c[0] += P, c[1] += I, c[2] += S, c[3] += Q, c[4] += D, c[5] += E, c[6] += re, c[7] += H, d += 64, O -= 64;
        }
        return d;
      }
      var i = (
        /** @class */
        (function() {
          function k() {
            this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this.reset();
          }
          return k.prototype.reset = function() {
            return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
          }, k.prototype.clean = function() {
            for (var c = 0; c < this.buffer.length; c++)
              this.buffer[c] = 0;
            for (var c = 0; c < this.temp.length; c++)
              this.temp[c] = 0;
            this.reset();
          }, k.prototype.update = function(c, l) {
            if (l === void 0 && (l = c.length), this.finished)
              throw new Error("SHA256: can't update because hash was finished.");
            var d = 0;
            if (this.bytesHashed += l, this.bufferLength > 0) {
              for (; this.bufferLength < 64 && l > 0; )
                this.buffer[this.bufferLength++] = c[d++], l--;
              this.bufferLength === 64 && (s(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
            }
            for (l >= 64 && (d = s(this.temp, this.state, c, d, l), l %= 64); l > 0; )
              this.buffer[this.bufferLength++] = c[d++], l--;
            return this;
          }, k.prototype.finish = function(c) {
            if (!this.finished) {
              var l = this.bytesHashed, d = this.bufferLength, O = l / 536870912 | 0, P = l << 3, I = l % 64 < 56 ? 64 : 128;
              this.buffer[d] = 128;
              for (var S = d + 1; S < I - 8; S++)
                this.buffer[S] = 0;
              this.buffer[I - 8] = O >>> 24 & 255, this.buffer[I - 7] = O >>> 16 & 255, this.buffer[I - 6] = O >>> 8 & 255, this.buffer[I - 5] = O >>> 0 & 255, this.buffer[I - 4] = P >>> 24 & 255, this.buffer[I - 3] = P >>> 16 & 255, this.buffer[I - 2] = P >>> 8 & 255, this.buffer[I - 1] = P >>> 0 & 255, s(this.temp, this.state, this.buffer, 0, I), this.finished = true;
            }
            for (var S = 0; S < 8; S++)
              c[S * 4 + 0] = this.state[S] >>> 24 & 255, c[S * 4 + 1] = this.state[S] >>> 16 & 255, c[S * 4 + 2] = this.state[S] >>> 8 & 255, c[S * 4 + 3] = this.state[S] >>> 0 & 255;
            return this;
          }, k.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, k.prototype._saveState = function(c) {
            for (var l = 0; l < this.state.length; l++)
              c[l] = this.state[l];
          }, k.prototype._restoreState = function(c, l) {
            for (var d = 0; d < this.state.length; d++)
              this.state[d] = c[d];
            this.bytesHashed = l, this.finished = false, this.bufferLength = 0;
          }, k;
        })()
      );
      e.Hash = i;
      var r = (
        /** @class */
        (function() {
          function k(c) {
            this.inner = new i(), this.outer = new i(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
            var l = new Uint8Array(this.blockSize);
            if (c.length > this.blockSize)
              new i().update(c).finish(l).clean();
            else
              for (var d = 0; d < c.length; d++)
                l[d] = c[d];
            for (var d = 0; d < l.length; d++)
              l[d] ^= 54;
            this.inner.update(l);
            for (var d = 0; d < l.length; d++)
              l[d] ^= 106;
            this.outer.update(l), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
            for (var d = 0; d < l.length; d++)
              l[d] = 0;
          }
          return k.prototype.reset = function() {
            return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
          }, k.prototype.clean = function() {
            for (var c = 0; c < this.istate.length; c++)
              this.ostate[c] = this.istate[c] = 0;
            this.inner.clean(), this.outer.clean();
          }, k.prototype.update = function(c) {
            return this.inner.update(c), this;
          }, k.prototype.finish = function(c) {
            return this.outer.finished ? this.outer.finish(c) : (this.inner.finish(c), this.outer.update(c, this.digestLength).finish(c)), this;
          }, k.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c), c;
          }, k;
        })()
      );
      e.HMAC = r;
      function o(k) {
        var c = new i().update(k), l = c.digest();
        return c.clean(), l;
      }
      e.hash = o, e.default = o;
      function h(k, c) {
        var l = new r(k).update(c), d = l.digest();
        return l.clean(), d;
      }
      e.hmac = h;
      function b(k, c, l, d) {
        var O = d[0];
        if (O === 0)
          throw new Error("hkdf: cannot expand more");
        c.reset(), O > 1 && c.update(k), l && c.update(l), c.update(d), c.finish(k), d[0]++;
      }
      var L = new Uint8Array(e.digestLength);
      function R(k, c, l, d) {
        c === void 0 && (c = L), d === void 0 && (d = 32);
        for (var O = new Uint8Array([1]), P = h(c, k), I = new r(P), S = new Uint8Array(I.digestLength), Q = S.length, D = new Uint8Array(d), E = 0; E < d; E++)
          Q === S.length && (b(S, I, l, O), Q = 0), D[E] = S[Q++];
        return I.clean(), S.fill(0), O.fill(0), D;
      }
      e.hkdf = R;
      function W(k, c, l, d) {
        for (var O = new r(k), P = O.digestLength, I = new Uint8Array(4), S = new Uint8Array(P), Q = new Uint8Array(P), D = new Uint8Array(d), E = 0; E * P < d; E++) {
          var re = E + 1;
          I[0] = re >>> 24 & 255, I[1] = re >>> 16 & 255, I[2] = re >>> 8 & 255, I[3] = re >>> 0 & 255, O.reset(), O.update(c), O.update(I), O.finish(Q);
          for (var H = 0; H < P; H++)
            S[H] = Q[H];
          for (var H = 2; H <= l; H++) {
            O.reset(), O.update(Q).finish(Q);
            for (var j = 0; j < P; j++)
              S[j] ^= Q[j];
          }
          for (var H = 0; H < P && E * P + H < d; H++)
            D[E * P + H] = S[H];
        }
        for (var E = 0; E < P; E++)
          S[E] = Q[E] = 0;
        for (var E = 0; E < 4; E++)
          I[E] = 0;
        return O.clean(), D;
      }
      e.pbkdf2 = W;
    });
  })(qt)), qt.exports;
}
var Ys = Vs();
var Xs = new Int32Array(4);
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
      if (h === null) return e ? Xs : "";
      const b = parseInt(h[2], 16), L = parseInt(h[1], 16) || 0;
      i[14] = b, i[15] = L;
    }
    return _K._md5cycle(this._state, i), e ? this._state : _K._hex(this._state);
  }
};
if (K.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Zn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Tt(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Zn in t ? t[Zn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function Ve(t, e) {
  return Tt(t, t);
}
function rs(t, e, n) {
  return Tt(t, +Ve(t) + e);
}
function si(t, e, n) {
  return rs(t, e * 1e3);
}
function xn(t) {
  return Math.trunc(+Ve(t) / 1e3);
}
function os(t, e) {
  return +Ve(t) < +Ve(e);
}
function Rt(t, e, n, s = "debug", i) {
  if (window.debug) {
    const o = ["color: #0288D1", `color:${i || "#009688"}`, "color: default"];
    n ? Jn() ? console[s](
      `%c[PlaceOS]%c[${t}] %c${e}`,
      ...o,
      n
    ) : console[s](`[PlaceOS][${t}] ${e}`, n) : Jn() ? console[s](`%c[PlaceOS]%c[${t}] %c${e}`, ...o) : console[s](`[PlaceOS][${t}] ${e}`);
  }
}
function Ft(t) {
  const e = (i) => i.length <= 0 ? void 0 : i.length === 1 ? i[0] : i, n = (i, r, o) => Rt(t, r, e(o), i), s = (i, ...r) => n("debug", i, r);
  return s.debug = (i, ...r) => n("debug", i, r), s.info = (i, ...r) => n("info", i, r), s.error = (i, ...r) => n("error", i, r), s.warn = (i, ...r) => n("warn", i, r), s.log = (i, ...r) => n("log", i, r), s.group = (i, ...r) => n("group", i, r), s.groupCollapsed = (i, ...r) => n("groupCollapsed", i, r), s.groupEnd = (i, ...r) => n("groupEnd", i, r), s;
}
function Jn() {
  return !(document.documentMode || /Edge/.test(navigator.userAgent));
}
function us() {
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
function cs(t = 40) {
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
function It(t, e = false) {
  const n = e ? 1e3 : 1024;
  if (t < n)
    return t + (e ? " iB" : " B");
  const s = Math.floor(Math.log(t) / Math.log(n)), i = (e ? "kMGTPE" : "KMGTPE").charAt(s - 1) + (e ? "iB" : "B");
  return (t / Math.pow(n, s)).toFixed(2) + " " + i;
}
function ri(t) {
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
function oi(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e.indexOf(t[n]) >= 0 && delete t[n];
  return t;
}
function ui() {
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
function ci() {
  return window.location !== window.parent.location;
}
function ai(t = Date.now(), e = 60 * 1e3) {
  return Math.floor(t / e);
}
var hi = class {
  abort() {
    Rt("Stub", "Aborted");
  }
};
function g(t) {
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
function fi(t) {
  return new Promise((e) => setTimeout(e, t));
}
var _i = {
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
var y = Ft("Auth");
var m = {};
var T = localStorage;
var w;
var _ = {};
var U = "";
var be = "";
var ve = se("");
var Ye = se("");
var Pn = "/api/engine/v2";
var ye = se(false);
var Tn = se(false);
var Ut = 0;
function as() {
  if (m.mock) return true;
  if (!T) return false;
  if (Xe() && !m.ignore_api_key) return true;
  const t = T.getItem(`${U}_expires_at`) || "";
  return os(+t, /* @__PURE__ */ new Date()) ? false : !!(ve.value || T.getItem(`${U}_access_token`));
}
function Ne() {
  Tn.set(as());
}
function hs(t) {
  if (!t || t.startsWith("http://") || t.startsWith("https://"))
    return t;
  const e = w?.domain;
  return e ? `${m.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${e}${t}` : t;
}
function u() {
  return `${`${m.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${m.host || window.location?.host}`}${ls()}`;
}
function ls() {
  return m.version === "ACA Engine" ? "/control/api" : Pn;
}
function mi() {
  return !!m.token_header;
}
function gi() {
  return U;
}
function Xe() {
  return Ct("x-api-key", false) || "";
}
function J(t = true) {
  if (m.mock) return "mock-token";
  if (!T) return "";
  if (Xe() && !m.ignore_api_key) return "x-api-key";
  const e = T.getItem(`${U}_expires_at`) || "", n = ve.value;
  return os(+e, /* @__PURE__ */ new Date()) && (y("Token expired. Requesting new token..."), En(), _.load_authority || (Ut += 1, ue(
    "re-authorise",
    async () => {
      delete _.authorise, await Lt().catch(
        (s) => y.error("Failed to get token:", s)
      );
    },
    200 * Math.min(20, Ut)
  )), !t) ? "" : n || T.getItem(`${U}_access_token`) || "";
}
function Et() {
  return Ye.value || T.getItem(`${U}_refresh_token`) || "";
}
function qn() {
  return m.host || window.location?.host;
}
function $i() {
  return Ne(), Tn.asReadonly();
}
function Mt() {
  return w;
}
function Xr() {
  return ye.value;
}
function Rn() {
  return !!m.mock;
}
function bi() {
  return !!m.secure;
}
function eo() {
  return ye.asReadonly();
}
function In() {
  return Ct("trust") === "true" || Ct("trusted") === "true";
}
function ps() {
  return !!Xe() && !m.ignore_api_key || Ct("fixed_device") === "true";
}
function Ct(t, e = true) {
  let s = us()[t];
  if (T) {
    const i = `${gi()}_${t}`;
    s = s || T.getItem(i) || T.getItem(t) || "", e && T.setItem(i, `${s}`);
  }
  return s;
}
async function to(t) {
  return m = t || m, m.token_header = m.token_header ?? ci(), window.AbortController || (window.AbortController = hi), T = m.storage === "session" ? sessionStorage : localStorage, U = K.hashStr(m.redirect_uri, false), vi(), m.delay && m.delay > 0 && await fi(m.delay), Mn();
}
var Ot = false;
function vi() {
  Ot || (Ot = true, window.addEventListener("focus", wt), document.addEventListener("visibilitychange", wt));
}
async function wt() {
  if (document.visibilityState === "hidden" || m.mock || !w || w.session || as()) return;
  if (delete _.check_params, await fs().catch(() => false) || be || Et()) {
    y("Application focused with new credentials. Authorising..."), we = false, delete _.authorise, await Lt().catch(
      (e) => y.error("Failed to authorise on focus:", e)
    );
    return;
  }
  y("Application focused without a session. Reloading authority..."), we = false, Un().catch(
    (e) => y.error("Failed to refresh authority:", e)
  );
}
function Un() {
  return y("Refreshing authorty."), w = void 0, Mn();
}
function En() {
  y("Invalidating tokens."), T.removeItem(`${U}_access_token`), T.removeItem(`${U}_expires_at`), ve.value && ve.set(""), Ne();
}
function Lt(t, e = w) {
  return !_.authorise && !e ? Promise.reject("Authority is not loaded") : (_.authorise || (_.authorise = new Promise((n, s) => {
    y("Authorising user...");
    const i = () => {
      if (J(false))
        y("Valid token found."), delete _.authorise, n(J());
      else {
        const r = [
          () => {
            y("Successfully generated token."), n(J()), delete _.authorise;
          },
          () => {
            y.error("Failed to generate token."), s("Failed to generate token"), setTimeout(() => delete _.authorise, 200);
          }
        ];
        if (m && m.auth_type === "password")
          y("Logging in with credentials."), Ii(m).then(
            ...r
          ), Ut = 0;
        else if (be || Et())
          y(
            `Generating token with ${be ? "code" : "refresh token"}`
          ), _s().then(...r), Ut = 0;
        else if (e.session)
          y(
            "Users has session. Authorising application..."
          ), Si(t).then(...r);
        else {
          y("No user session"), s("No user session"), setTimeout(() => delete _.authorise, 200);
          try {
            ds(e);
          } catch {
          }
        }
      }
    };
    xi().then(i, i);
  })), _.authorise);
}
function ro() {
  const t = hs(
    w ? w.logout_url : "/logout"
  );
  fetch(t, {
    method: "GET",
    redirect: "manual",
    headers: {
      Authorization: "Bearer " + J()
    }
  }).then(
    (e) => {
      const n = e.headers.get("Location") || t;
      Vn(), window.location?.assign(n);
    },
    (e) => {
      y.error("Error logging out:", e), Vn(), window.location?.assign(t);
    }
  );
}
function Vn() {
  const t = [];
  for (let e = 0; e < T.length; e++) {
    const n = T.key(e);
    n && n.indexOf(U) >= 0 && t.push(n);
  }
  for (const e of t)
    T.removeItem(e);
  ve.set(""), Ye.set(""), Ne();
}
function Mn(t = 0) {
  return _.load_authority || (_.load_authority = new Promise((e) => {
    if (ye.set(false), m.mock) {
      w = _i, y("System in mock mode"), ye.set(true), e();
      return;
    }
    y(`Fixed: ${ps()} | Trusted: ${In()}`), y("Loading authority...");
    const n = m.secure || window.location?.protocol.indexOf("https") >= 0, s = (i) => {
      y.error(`Failed to load authority(${i})`), ye.set(false), ue(
        "load_authority",
        () => {
          delete _.load_authority, Mn(t).then((r) => e());
        },
        300 * Math.min(20, ++t)
      );
    };
    fetch(`${n ? "https:" : "http:"}//${qn()}/auth/authority`, {
      credentials: "same-origin"
    }).then(async (i) => {
      if (!i.ok)
        return s(await i.text().catch((o) => o));
      w = await i.json(), Pn = /[2-9]\.[0-9]+\.[0-9]+/g.test(
        w.version || ""
      ) ? "/api/engine/v2" : "/control/api", y.group("Loaded authority."), w && (y(`Name: ${w.name}`), y(`Version: ${w.version}`), y(`Domain: ${w.domain}`), y(`Session: ${w.session}`), y(`Production: ${w.production}`), y(
        `Config Keys: ${Object.keys(w.config || {}).length}`
      )), y.groupEnd("");
      const r = () => {
        ye.set(true), y("Application set online."), e();
      };
      delete _.load_authority, Lt("").then(r, r);
    }, s);
  })), _.load_authority;
}
async function Si(t) {
  if (m.use_iframe && _.iframe_auth)
    return _.iframe_auth;
  const e = qi(t);
  if (m.use_iframe)
    return Ai(e);
  window.location?.assign(e);
}
function Ai(t) {
  return _.iframe_auth || (_.iframe_auth = new Promise((e, n) => {
    y("Authorizing in an iFrame...");
    const s = document.createElement("iframe");
    s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.height = "1px", s.style.width = "1px", s.style.zIndex = "-1", s.id = "place-authorize", s.src = `${t}`;
    const i = (o) => {
      if (o.origin === window.location?.origin && o.data.type === "place-os") {
        const h = o.data;
        if (y("Received credentials from iFrame..."), document.body.removeChild(s), $e("iframe_auth"), window.removeEventListener("message", i), delete _.iframe_auth, h.token)
          return e(), Cn(__spreadValues({
            access_token: h.token
          }, h));
        be = h.code || "", _s().then(
          (b) => e(b),
          (b) => n(b)
        );
      }
    }, r = () => {
      window.removeEventListener("message", i), s.parentNode && s.parentNode.removeChild(s), delete _.iframe_auth;
    };
    ue(
      "iframe_auth",
      () => {
        y.error("Unable to resolve iFrame after 15 seconds..."), r(), n();
      },
      15 * 1e3
    ), window.addEventListener("message", i), s.onerror = (o) => {
      y.error("iFrame error.", o), $e("iframe_auth"), r(), n();
    }, document.body.appendChild(s);
  })), _.iframe_auth;
}
var we = false;
function ds(t) {
  if (m.handle_login !== false && !we) {
    y("Redirecting to login page...");
    const e = hs(
      t.login_url?.replace(
        "{{url}}",
        encodeURIComponent(window.location?.href)
      )
    );
    throw setTimeout(() => window.location?.assign(e), 300), we = true, new Error("Redirecting to login page...");
  } else
    y("Login being handled locally.");
  delete _.authorise;
}
function xi() {
  return _.check_token || (_.check_token = new Promise(async (t, e) => {
    J() ? (y("Valid token found."), t(J())) : (y("No token. Checking URL for auth credentials..."), await fs() ? t(true) : e()), delete _.check_token;
  })), _.check_token;
}
function fs() {
  return _.check_params || (_.check_params = new Promise((t) => {
    y("Checking for auth parameters...");
    let e = us();
    if ((!e || Object.keys(e).length <= 0) && sessionStorage && (e = JSON.parse(
      sessionStorage.getItem("ENGINE.auth.params") || "{}"
    ), sessionStorage.removeItem("ENGINE.auth.params")), e && (e.code || e.access_token || e.refresh_token)) {
      const n = T.getItem(`${U}_nonce`) || "", s = (e.state || "").split(";");
      oe("state"), oe("token_type");
      const i = s[0];
      n === i ? (e.code && (be = e.code, oe("code")), e.refresh_token && (T.setItem(
        `${U}_refresh_token`,
        e.refresh_token
      ), oe("refresh_token")), Cn(e), t(!!e.access_token)) : (oe("code"), oe("access_token"), oe("refresh_token"), t(false));
    } else
      t(false);
    ue(
      "check_params_promise",
      () => delete _.check_params,
      50
    );
  })), _.check_params;
}
function qi(t) {
  const e = Ui();
  t = t ? `${e};${t}` : e;
  const n = m ? (m.auth_uri || "").indexOf("?") >= 0 : false, s = (m ? m.auth_uri : null) || "/auth/oauth/authorize", i = In() || m.auth_type === "auth_code" ? "code" : "token";
  let r = `${s}${n ? "&" : "?"}response_type=${encodeURIComponent(i)}&client_id=${encodeURIComponent(U)}&state=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent(m.redirect_uri)}&scope=${encodeURIComponent(m.scope)}`;
  if (m.auth_type === "auth_code") {
    const { challenge: o, verify: h } = Pi();
    sessionStorage.setItem(`${U}_challenge`, o), r += "&code_challenge_method=S256", r += `&code_challenge=${h}`;
  }
  return r;
}
function Pi(t = 43) {
  const e = cs(t), n = Ks(Zs(e)), s = is(Ys.hash(n)).split("=")[0].replace(/\//g, "_").replace(/\+/g, "-");
  return { challenge: e, verify: s };
}
function Ti() {
  let e = (m.token_uri || "/auth/token") + `?client_id=${encodeURIComponent(U)}`, n = "";
  if (e += `&redirect_uri=${encodeURIComponent(m.redirect_uri)}`, Et()) {
    e += `&refresh_token=${encodeURIComponent(Et())}`, e += "&grant_type=refresh_token";
    const s = e.indexOf("?");
    n = e.slice(s + 1), e = e.slice(0, s);
  } else {
    e += `&code=${encodeURIComponent(be)}`, e += "&grant_type=authorization_code";
    const s = sessionStorage.getItem(`${U}_challenge`);
    s && (e += `&code_verifier=${s}`, sessionStorage.removeItem(`${U}_challenge`)), be = "";
  }
  return [e, n];
}
function Ri(t) {
  const e = t.token_uri || "/auth/token", n = g({
    grant_type: "password",
    client_id: U,
    client_secret: t.client_secret,
    redirect_uri: t.redirect_uri,
    authority: w?.id,
    scope: t.scope,
    username: t.username,
    password: t.password
  });
  return `${e}?${n}`;
}
function _s() {
  return ms(...Ti());
}
function Ii(t) {
  return ms(Ri(t));
}
function ms(t, e = "") {
  return _.generate_tokens || (_.generate_tokens = new Promise((n, s) => {
    y("Generating new token...");
    const i = (r) => {
      y.error("Error generating new tokens:", r), r && r.status >= 400 && r.status < 500 && (T.removeItem(`${U}_refresh_token`), Ye.set("")), Ne(), s(), delete _.generate_tokens;
    };
    fetch(t, {
      method: "POST",
      body: e,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(async (r) => {
      if (!r.ok) return i(r);
      const o = await r.json();
      Cn(o), n(), delete _.generate_tokens;
    }, i);
  })), _.generate_tokens;
}
function Cn(t) {
  const e = si(
    /* @__PURE__ */ new Date(),
    Math.max(60, parseInt(t.expires_in, 10) - 300)
  );
  y("Tokens generated storing..."), In() && (t.access_token && (T.setItem(
    `${U}_access_token`,
    t.access_token
  ), oe("access_token")), t.refresh_token && (T.setItem(
    `${U}_refresh_token`,
    t.refresh_token
  ), oe("refresh_token"))), t.expires_in && (T.setItem(`${U}_expires_at`, `${e.valueOf()}`), oe("expires_in")), ye.set(true), ve.set(t.access_token || ""), Ye.set(t.refresh_token || ""), Ne();
}
function Ui() {
  const t = cs();
  return T.setItem(`${U}_nonce`, t), t;
}
var qe = Ft("HTTP(M)");
var jt = {};
var gs = (t, e) => {
  const n = new Error(`Mock endpoint not found: ${t} ${e}`);
  return n.status = 404, qe(`404 ${t}:`, e), Promise.reject(n);
};
function uo(t, e = jt) {
  Ei(t.method, t.path, e);
  const n = `${t.method}|${t.path}`, s = t.path.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("/"), i = __spreadProps(__spreadValues({}, t), {
    path_parts: s,
    path_structure: s.map(
      (r) => r[0] === ":" ? r.replace(":", "") : ""
    )
  });
  e[n] = i, qe(`+ ${t.method} ${t.path}`);
}
function Ei(t, e, n = jt) {
  const s = `${t}|${e}`;
  n[s] && (delete n[s], qe(`- ${t} ${e}`));
}
function Mi(t, e, n, s = jt) {
  const i = Ci(t, e, s);
  if (i) {
    const r = Oi(e, i, n);
    return wi(i, r);
  }
  try {
    return gs(t, e);
  } catch (r) {
    return qe.error(`ERROR ${t}:`, [e, r]), Promise.reject(r);
  }
}
function Ci(t, e, n = jt) {
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
function Oi(t, e, n) {
  const s = t.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").split("?"), i = s[0].replace(/^\//, ""), r = s[1] || "", o = Ce(r), h = i.split("/"), b = {};
  for (let R = 0; R < e.path_structure.length; R++) {
    const W = e.path_structure[R];
    W && (b[W] = h[R]);
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
function wi(t, e) {
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
var Ni = Ft("HTTP");
var Di = 3e4;
async function Hi() {
  J(false);
  const t = $i();
  t.value || await new Promise((e, n) => {
    const s = setTimeout(() => {
      i(), n(new Error("Timed out waiting for authentication."));
    }, Di), i = t.subscribe(
      (r) => {
        r && (clearTimeout(s), i(), e());
      },
      { emitCurrent: false }
    );
  });
}
var ys = {};
function zi(t, e = ys) {
  return e[t] || {};
}
function f(t, e, n = et) {
  return e || (e = { response_type: "json" }), n("GET", t, __spreadValues({ response_type: "json" }, e));
}
function v(t, e, n, s = et) {
  return n || (n = { response_type: "json" }), s("POST", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function ce(t, e, n, s = et) {
  return n || (n = { response_type: "json" }), s("PUT", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function te(t, e, n, s = et) {
  return n || (n = { response_type: "json" }), s("PATCH", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function V(t, e, n = et) {
  return e || (e = { response_type: "void" }), n("DELETE", t, __spreadValues({ response_type: "void" }, e));
}
async function Fi(t, e, n = ys) {
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
var $s = () => (En(), Un().then(
  () => Promise.resolve(),
  () => new Promise((t) => {
    setTimeout(() => {
      $s().then(() => t());
    }, 1e3);
  })
));
function et(t, e, n, s = Rn, i = Mi, r = Fi) {
  if (s()) {
    const R = i(t, e, n?.body);
    if (R) return R;
  }
  n.headers = n.headers || {}, !n.headers["Content-Type"] && !n.headers["content-type"] && (n.headers["Content-Type"] = "application/json");
  const o = () => {
    const R = __spreadProps(__spreadValues({}, n), {
      method: t,
      credentials: "same-origin"
    });
    return delete R.response_type, delete R.skip_auth, delete R.skip_auth_flow, ["POST", "PUT", "PATCH"].includes(t) && n.body !== void 0 && (R.body = typeof n.body == "string" ? n.body : JSON.stringify(n.body)), fetch(e, R);
  }, h = async () => {
    n.skip_auth || (await Hi(), J() === "x-api-key" ? n.headers["X-API-Key"] = Xe() : n.headers.Authorization = `Bearer ${J()}`);
    const R = await o();
    if (R.ok) return r(R, n.response_type);
    throw R;
  }, b = 4, L = async (R) => {
    try {
      return await h();
    } catch (W) {
      if (R >= b) throw W || {};
      if (n.skip_auth || n.skip_auth_flow) throw W || {};
      if (W.status === 511)
        throw ds(Mt()), W;
      if (W.status !== 401) throw W || {};
      return Ni.warn("Auth error:", W), await $s().catch(() => {
        throw W;
      }), L(R + 1);
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
    return e.version = this.version, delete e.created_at, oi(e, [void 0, null, ""]);
  }
};
var Gi = class extends F {
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
var bs = {};
var vs = {};
var Yn = "";
var Bt = (t) => t;
var Bi = 300;
var Me = {};
function $(t) {
  const { query_params: e, fn: n, path: s, endpoint: i } = t, r = g(e), o = `${i || u()}${s ? "/" + s : ""}${r ? "?" + r : ""}`;
  if (Me[o]) return Me[o].promise;
  const h = f(o).then((b) => {
    const L = Wi(o, r, s);
    return {
      total: L.total || 0,
      next: L.next ? () => $({
        query_params: L.next,
        fn: n,
        endpoint: i,
        path: s
      }) : null,
      data: b && b instanceof Array ? b.map((R) => (n || Bt)(R)) : b && !(b instanceof Array) && b.results ? b.results.map((R) => R) : []
    };
  });
  return Me[o] = {
    promise: h,
    timeout: setTimeout(() => delete Me[o], Bi)
  }, h.catch(() => {
    clearTimeout(Me[o]?.timeout), delete Me[o];
  }), h;
}
function p(t) {
  const { query_params: e, id: n, path: s, fn: i, options: r } = t, o = g(e), h = `${u()}/${s}/${n}${o ? "?" + o : ""}`;
  return f(h, r).then((b) => (i || Bt)(b));
}
function x(t) {
  const { query_params: e, form_data: n, path: s, fn: i } = t, r = g(e), o = `${u()}/${s}${r ? "?" + r : ""}`;
  return v(o, n).then((h) => (i || Bt)(h));
}
function a(t) {
  const { id: e, task_name: n, form_data: s, method: i, path: r, callback: o } = t, h = g(s), b = `${u()}/${r}/${e}/${n}`;
  return (i === "post" || i === "put" || !i ? (i === "put" ? ce : v)(b, s) : (i === "del" ? V : f)(
    `${b}${h ? "?" + h : ""}`,
    {
      response_type: "json"
    }
  )).then((R) => (o || ((W) => W))(R));
}
function q(t) {
  const { id: e, query_params: n, form_data: s, method: i, path: r, fn: o } = t, h = g(__spreadProps(__spreadValues({}, n), {
    version: s.version || 0
  })), b = `${u()}/${r}/${e}${h ? "?" + h : ""}`;
  return (i === "put" ? ce : te)(b, s).then(
    (L) => (o || Bt)(L)
  );
}
function A(t) {
  const { id: e, query_params: n, path: s } = t, i = g(n), r = `${u()}/${s}/${e}${i ? "?" + i : ""}`;
  return V(r);
}
function Wi(t, e, n) {
  const s = zi(
    t[0] === "/" ? `${location.origin}${t}` : t
  ), i = {
    total: 0,
    next: null
  };
  if (s && s["x-total-count"]) {
    const r = +(s["x-total-count"] || 0);
    (e.length < 2 || e.length < 12 && e.indexOf("offset=") >= 0) && (bs[n] = r), vs[n] = r, i.total = r;
  }
  return s && s.link && (Yn = ri(s.link || "").next, i.next = Ce(Yn.split("?")[1])), i;
}
var st = "oauth_apps";
function Wt(t) {
  return new Gi(t);
}
function ko(t = {}) {
  return $({ query_params: t, fn: Wt, path: st });
}
function Ao(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Wt,
    path: st
  });
}
function xo(t) {
  return x({ form_data: t, query_params: {}, fn: Wt, path: st });
}
function qo(t) {
  return A({ id: t, query_params: {}, path: st });
}
var On = class extends F {
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
var Ki = /* @__PURE__ */ ((t) => (t[t.Certificate = 0] = "Certificate", t[t.NoAuth = 1] = "NoAuth", t[t.UserPassword = 2] = "UserPassword", t))(Ki || {});
var Zi = class extends F {
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
var it = "brokers";
function Kt(t) {
  return new Zi(t);
}
function Mo(t = {}) {
  return $({ query_params: t, fn: Kt, path: it });
}
function Oo(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Kt,
    path: it
  });
}
function wo(t) {
  return x({ form_data: t, query_params: {}, fn: Kt, path: it });
}
function No(t, e = {}) {
  return A({ id: t, query_params: e, path: it });
}
var Ji = class {
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
    this.id = e.id || e.core_id || "", this.compiled_drivers = e.compiled_drivers || [], this.available_repositories = e.available_repositories || e.status?.available_repositories || [], this.running_drivers = e.running_drivers || e.status?.running_drivers || 0, this.module_instances = e.module_instances || e.status?.module_instances || 0, this.unavailable_repositories = e.unavailable_repositories || e.status?.unavailable_repositories || [], this.unavailable_drivers = e.unavailable_drivers || e.status?.unavailable_drivers || [], this.hostname = e.hostname || e.load?.local.hostname || "", this.cpu_count = e.cpu_count || e.load?.local.cpu_count || 0, this.core_cpu = e.core_cpu || e.load?.local.core_cpu || 0, this.total_cpu = e.total_cpu || e.load?.local.total_cpu || 0, this.memory_total = e.memory_total || e.load?.local.memory_total || 0, this.memory_usage = e.memory_usage || e.load?.local.memory_usage || 0, this.core_memory = e.core_memory || e.load?.local.core_memory || 0, this.run_counts = e.run_counts || e.status?.run_counts?.local || { modules: 0, drivers: 0 }, this.memory_percentage = +(this.memory_usage / this.memory_total * 100).toFixed(4), this.used_memory = It(this.memory_usage * 1024), this.total_memory = It(this.memory_total * 1024);
    const n = e.load?.edge || {};
    this.edge_nodes = e.edge_nodes || Object.keys(n).map((s) => __spreadProps(__spreadValues({
      id: s
    }, n[s]), {
      run_count: e.status?.run_count?.edge[s] || {}
    })) || [];
  }
};
var Vi = class {
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
    this.cluster_id = e, this.id = n.id || n.driver || "", this.modules = n.modules || [], this.running = n.running || false, this.module_instances = n.module_instances || n.edge?.status?.module_instances || n.local?.status?.module_instances || 0, this.last_exit_code = n.last_exit_code || n.edge?.status?.last_exit_code || n.local?.status?.last_exit_code || 0, this.launch_count = n.launch_count || n.edge?.status?.launch_count || n.local?.status?.launch_count || 0, this.launch_time = n.launch_time || n.edge?.status?.launch_time || n.local?.status?.launch_time || 0, this.cpu_usage = n.cpu_usage || n.percentage_cpu || n.edge?.status?.percentage_cpu || n.local?.status?.percentage_cpu || 0, this.memory_total = n.memory_total || n.edge?.status?.memory_total || n.local?.status?.memory_total || 0, this.memory_usage = n.memory_usage || n.edge?.status?.memory_usage || n.local?.status?.memory_usage || 0, this.used_memory = It(this.memory_usage * 1024), this.total_memory = It(this.memory_total * 1024);
  }
};
var ze = "cluster";
function Ss(t) {
  return new Ji(t);
}
function zo(t = {}) {
  return $({ query_params: t, fn: Ss, path: ze });
}
function Lo(t, e = {}) {
  return p({
    id: t,
    query_params: e,
    fn: (n) => n.map(
      (s) => new Vi(t, s)
    ),
    path: ze
  });
}
function jo(t, e) {
  return A({ id: t, query_params: e, path: ze });
}
var Yi = class extends F {
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
function Zt(t) {
  return new Yi(t);
}
function Wo(t = {}) {
  return $({ query_params: t, fn: Zt, path: Fe });
}
function Qo(t) {
  return p({ id: t, query_params: {}, fn: Zt, path: Fe });
}
function Ko(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Zt,
    path: Fe
  });
}
function Zo(t) {
  return x({ form_data: t, query_params: {}, fn: Zt, path: Fe });
}
function Jo(t) {
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
var As = class extends F {
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
function Jt(t) {
  return new As(t);
}
function Yo(t = {}) {
  return $({ query_params: t, fn: Jt, path: pe });
}
function Xo(t, e = {}) {
  return p({ id: t, query_params: e, fn: Jt, path: pe });
}
function eu(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Jt,
    path: pe
  });
}
function tu(t) {
  return x({ form_data: t, query_params: {}, fn: Jt, path: pe });
}
function nu(t) {
  return A({ id: t, query_params: {}, path: pe });
}
function su(t) {
  return a({ id: t, task_name: "recompile", path: pe });
}
function iu(t) {
  return a({ id: t, task_name: "reload", path: pe });
}
function ou(t) {
  return a({ id: t, task_name: "readme", method: "get", path: pe });
}
var Xi = class extends F {
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
function Vt(t) {
  return new Xi(t);
}
function uu(t = {}) {
  return $({ query_params: t, fn: Vt, path: N });
}
function cu(t) {
  return p({ id: t, query_params: {}, fn: Vt, path: N });
}
function au(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Vt,
    path: N
  });
}
function hu(t) {
  return x({ form_data: t, query_params: {}, fn: Vt, path: N });
}
function lu(t) {
  return A({ id: t, query_params: {}, path: N });
}
var wn = class {
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
var xs = class {
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
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.user_id = e.user_id || "", this.group_id = e.group_id || "", this.permissions = e.permissions || 0, this.auto_assigned = e.auto_assigned || "", this.group = e.group ? new wn(e.group) : void 0, this.user = e.user ? new On(e.user) : void 0;
  }
};
var Te = "groups";
function ot(t) {
  return new wn(t);
}
function Tu(t = {}) {
  return $({ query_params: t, fn: ot, path: Te });
}
function Ru(t) {
  const e = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return f(e).then((n) => ot(n));
}
function Iu(t = {}) {
  const e = g(t), n = `${u()}/${Te}/current${e ? "?" + e : ""}`;
  return f(n).then(
    (s) => (s || []).map((i) => ({
      group: ot(i.group || {}),
      permissions: i.permissions || 0
    }))
  );
}
function Eu(t) {
  const e = `${u()}/${Te}`;
  return v(e, t).then((n) => ot(n));
}
function Mu(t, e, n = "patch") {
  const s = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return (n === "put" ? ce : te)(s, e).then(
    (i) => ot(i)
  );
}
function Cu(t) {
  const e = `${u()}/${Te}/${encodeURIComponent(t)}`;
  return V(e, { response_type: "void" });
}
var Dn = "group_users";
function Yt(t) {
  return new xs(t);
}
function Hn(t, e) {
  return `${Dn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function Lu(t = {}) {
  return $({ query_params: t, fn: Yt, path: Dn });
}
function Gu(t) {
  const e = `${u()}/${Dn}`;
  return v(e, t).then((n) => Yt(n));
}
function Bu(t, e, n, s = "patch") {
  const i = `${u()}/${Hn(t, e)}`;
  return (s === "put" ? ce : te)(i, n).then(
    (r) => Yt(r)
  );
}
function Wu(t, e) {
  const n = `${u()}/${Hn(t, e)}`;
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
var Xt = class extends F {
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
var nr = class {
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
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.group_id = e.group_id || "", this.zone_id = e.zone_id || "", this.permissions = e.permissions || 0, this.deny = !!e.deny, this.group = e.group ? new wn(e.group) : void 0, this.zone = e.zone ? new Xt(e.zone) : void 0;
  }
};
var zn = "group_zones";
function en(t) {
  return new nr(t);
}
function Fn(t, e) {
  return `${zn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function Qu(t = {}) {
  return $({ query_params: t, fn: en, path: zn });
}
function Zu(t) {
  const e = `${u()}/${zn}`;
  return v(e, t).then((n) => en(n));
}
function Ju(t, e, n, s = "patch") {
  const i = `${u()}/${Fn(t, e)}`;
  return (s === "put" ? ce : te)(i, n).then(
    (r) => en(r)
  );
}
function Vu(t, e) {
  const n = `${u()}/${Fn(t, e)}`;
  return V(n, { response_type: "void" });
}
var sr = class extends F {
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
var ut = "ldap_auths";
function tn(t) {
  return new sr(t);
}
function Yu(t = {}) {
  return $({ query_params: t, fn: tn, path: ut });
}
function ec(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: tn,
    path: ut
  });
}
function tc(t) {
  return x({ form_data: t, query_params: {}, fn: tn, path: ut });
}
function nc(t) {
  return A({ id: t, query_params: {}, path: ut });
}
var Ts = class {
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
  return new Ts(t);
}
function sc(t, e = {}) {
  return p({
    id: t,
    query_params: e,
    fn: (n) => Object.keys(n).map((s) => Re(n[s])),
    path: fe
  });
}
function rr(t) {
  const e = [...t], n = [];
  for (; e.length; ) {
    const s = e.pop();
    Array.isArray(s) ? e.push(...s) : n.push(s);
  }
  return n.reverse();
}
function ic(t, e = {}) {
  return a({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => rr(
      Object.keys(n).map(
        (s) => n[s].map((i) => Re(i))
      )
    ),
    path: fe
  });
}
function rc(t, e) {
  return p({
    id: t,
    query_params: { name: e },
    fn: (n) => Re(n[e]),
    path: fe
  });
}
function oc(t, e, n = "put") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Re,
    path: fe
  });
}
function cc(t, e) {
  return A({ id: t, query_params: e, path: fe });
}
var Rs = class extends F {
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
    super(e), this.display_name = e.display_name || "", this.description = e.description || "", this.email = e.email || "", this.code = e.code || "", this.capacity = e.capacity || 0, this.features = e.features || [], this.bookable = e.bookable || false, this.public = e.public ?? false, this.installed_ui_devices = e.installed_ui_devices || 0, this.support_url = e.support_url || "", this.camera_snapshot_url = e.camera_snapshot_url || "", this.camera_snapshot_urls = e.camera_snapshot_urls || [], this.camera_url = e.camera_url || "", this.timetable_url = e.timetable_url || "", this.room_booking_url = e.room_booking_url || "", this.map_id = e.map_id || "", this.modules = e.modules || [], this.images = e.images || [], this.zones = e.zones || [], this.settings = e.settings || [null, null, null, null], this.timezone = e.timezone || "", this.signage = e.signage || false, this.playlists = e.playlists || [], this.security_groups = e.security_groups || [], this.orientation = e.orientation || "unspecified", this.approval = e.approval || false, this.signage_last_seen = e.signage_last_seen || xn(Date.now()), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Le)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Pe({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.module_data && e.module_data instanceof Array && (this.module_list = e.module_data.map(
      (n) => new Is(n)
    ));
  }
};
var Is = class extends F {
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
    super(e), this.driver_id = e.driver_id || e.dependency_id || "", this.control_system_id = e.control_system_id || "", this.edge_id = e.edge_id || "", this.ip = e.ip || "", this.tls = e.tls || false, this.udp = e.udp || false, this.port = e.port || 1, this.makebreak = e.makebreak || false, this.uri = e.uri || "", this.custom_name = e.custom_name || "", this.role = e.role ?? Nt.Logic, this.notes = e.notes || "", this.ignore_connected = e.ignore_connected || false, this.connected = e.connected, this.running = e.running || false, this.updated_at = e.updated_at || 0, this.system = new Rs(
      e.control_system || e.system
    ), this.has_runtime_error = e.has_runtime_error || false, this.error_timestamp = e.error_timestamp || 0, this.driver = new As(e.dependency || e.driver), this.settings = e.settings || [null, null, null, null], this.alert_level = e.alert_level || "medium", typeof this.settings != "object" && (this.settings = [null, null, null, null]);
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
function nn(t) {
  return new Is(t);
}
function pc(t = {}) {
  return $({ query_params: t, fn: nn, path: Y });
}
function dc(t, e = {}) {
  return p({ id: t, query_params: e, fn: nn, path: Y });
}
function fc(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: nn,
    path: Y
  });
}
function _c(t) {
  return x({ form_data: t, query_params: {}, fn: nn, path: Y });
}
function mc(t) {
  return A({ id: t, query_params: {}, path: Y });
}
function gc(t) {
  return a({ id: t, task_name: "start", path: Y });
}
function yc(t) {
  return a({ id: t, task_name: "stop", path: Y });
}
function vc(t) {
  return a({ id: t, task_name: "load", method: "post", path: Y });
}
function kc(t) {
  return a({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Pe(n)),
    path: Y
  });
}
function Sc(t) {
  return a({
    id: t,
    task_name: "error",
    method: "get",
    path: Y
  });
}
var or = class extends F {
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
var ct = "oauth_auths";
function sn(t) {
  return new or(t);
}
function xc(t = {}) {
  return $({ query_params: t, fn: sn, path: ct });
}
function Pc(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: sn,
    path: ct
  });
}
function Tc(t) {
  return x({ form_data: t, query_params: {}, fn: sn, path: ct });
}
function Rc(t) {
  return A({ id: t, query_params: {}, path: ct });
}
var Ms = /* @__PURE__ */ ((t) => (t.Driver = "driver", t.Interface = "interface", t))(Ms || {});
var ur = class extends F {
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
    super(e), this.folder_name = e.folder_name || "", this.description = e.description || "", this.uri = e.uri || "", this.branch = e.branch || "", this.commit_hash = e.commit_hash || "", this.repo_type = e.repo_type || Ms.Driver, this.username = e.username || "", this.password = e.password || "", this.root_path = e.root_path || "";
  }
};
var G = "repositories";
function rn(t) {
  return new ur(t);
}
function Nc(t = {}) {
  return $({ query_params: t, fn: rn, path: G });
}
function Dc(t) {
  return p({ id: t, query_params: {}, fn: rn, path: G });
}
function Hc(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: rn,
    path: G
  });
}
function zc(t) {
  return x({ form_data: t, query_params: {}, fn: rn, path: G });
}
function Fc(t) {
  return A({ id: t, query_params: {}, path: G });
}
function Lc() {
  return p({
    id: "interfaces",
    query_params: {},
    path: G
  });
}
function jc(t) {
  return p({
    id: "remote_default_branch",
    query_params: t,
    path: G
  });
}
function Gc(t) {
  return p({
    id: "remote_branches",
    query_params: t,
    path: G
  });
}
function Bc(t) {
  return p({
    id: "remote_commits",
    query_params: t,
    path: G
  });
}
function Wc(t, e) {
  return a({
    id: t,
    task_name: "drivers",
    form_data: e,
    method: "get",
    path: G
  });
}
function Qc(t, e) {
  return a({
    id: t,
    task_name: "commits",
    form_data: e,
    method: "get",
    path: G
  });
}
function Kc(t) {
  return a({
    id: t,
    task_name: "branches",
    method: "get",
    path: G
  });
}
function Zc(t) {
  return a({
    id: t,
    task_name: "default_branch",
    method: "get",
    path: G
  });
}
function Jc(t, e) {
  return a({
    id: t,
    task_name: "details",
    form_data: e,
    method: "get",
    path: G
  });
}
function Vc(t, e) {
  return a({
    id: t,
    task_name: "pull",
    form_data: e,
    method: "post",
    path: G
  });
}
function Xc(t, e) {
  return a({
    id: t,
    task_name: "files",
    form_data: e,
    method: "get",
    path: G
  });
}
var cr = class extends F {
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
var at = "saml_auths";
function on(t) {
  return new cr(t);
}
function ca(t = {}) {
  return $({ query_params: t, fn: on, path: at });
}
function ha(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: on,
    path: at
  });
}
function la(t) {
  return x({ form_data: t, query_params: {}, fn: on, path: at });
}
function pa(t) {
  return A({ id: t, query_params: {}, path: at });
}
var je = "settings";
function ht(t) {
  return new Pe(t);
}
function da(t = {}) {
  return $({ query_params: t, fn: ht, path: je });
}
function _a(t, e, n = {}, s = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: n,
    method: s,
    fn: ht,
    path: je
  });
}
function ma(t, e = {}) {
  return x({ form_data: t, query_params: e, fn: ht, path: je });
}
function ya(t, e = {}) {
  return a({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => n.map((s) => ht(s)),
    path: je
  });
}
var M = "systems";
function Ie(t) {
  return new Rs(t);
}
function $a(t = {}) {
  return $({ query_params: t, fn: Ie, path: M });
}
function ba(t) {
  return $({ query_params: t, fn: Ie, path: `${M}/with_emails` });
}
function va(t, e = {}) {
  return p({ id: t, query_params: e, fn: Ie, path: M });
}
function ka(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ie,
    path: M
  });
}
function Sa(t) {
  return x({ form_data: t, query_params: {}, fn: Ie, path: M });
}
function Aa(t) {
  return A({ id: t, query_params: {}, path: M });
}
function xa(t, e, n = {}) {
  return a({
    id: t,
    task_name: `module/${e}`,
    form_data: n,
    method: "put",
    callback: (s) => Ie(s),
    path: M
  });
}
function qa(t, e) {
  return a({
    id: t,
    task_name: `module/${e}`,
    form_data: {},
    method: "del",
    callback: (n) => Ie(n),
    path: M
  });
}
function Pa(t, e = {}) {
  return a({
    id: t,
    task_name: "start",
    form_data: e,
    path: M
  });
}
function Ta(t, e = {}) {
  return a({
    id: t,
    task_name: "stop",
    form_data: e,
    path: M
  });
}
function Ra(t, e, n, s = 1, i = []) {
  return a({
    id: t,
    task_name: `${n}_${s}/${encodeURIComponent(e)}`,
    form_data: i,
    path: M
  });
}
function Ia(t, e, n = 1) {
  return a({
    id: t,
    task_name: `${e}_${n}`,
    method: "get",
    path: M
  });
}
function Ea(t, e, n = 1) {
  return a({
    id: t,
    task_name: `functions/${e}_${n}`,
    method: "get",
    path: M
  });
}
function Ca(t) {
  return $({
    query_params: {},
    fn: (e) => new Xt(e),
    path: `${M}/${t}/zones`
  });
}
function Oa(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${M}/${t}/triggers`
  });
}
function wa(t, e) {
  return a({
    id: t,
    task_name: "triggers",
    form_data: e,
    method: "post",
    callback: (n) => new de(n),
    path: M
  });
}
function Na(t, e) {
  return a({
    id: t,
    task_name: `triggers/${e}`,
    method: "del",
    path: M
  });
}
function Da(t) {
  return a({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Pe(n)),
    path: M
  });
}
var Ge = "triggers";
function un(t) {
  return new de(t);
}
function ja(t = {}) {
  return $({ query_params: t, fn: un, path: Ge });
}
function Ga(t, e = {}) {
  return p({ id: t, query_params: e, fn: un, path: Ge });
}
function Ba(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: un,
    path: Ge
  });
}
function Wa(t) {
  return x({ form_data: t, query_params: {}, fn: un, path: Ge });
}
function Qa(t) {
  return A({ id: t, query_params: {}, path: Ge });
}
function Ka(t) {
  return a({
    id: t,
    task_name: "instances",
    form_data: {},
    method: "get",
    callback: (e) => e.map((n) => new de(n)),
    path: Ge
  });
}
var ar = /* @__PURE__ */ ((t) => (t.EQ = "equal", t.NEQ = "not_equal", t.GT = "greater_than", t.GTE = "greater_than_or_equal", t.LT = "less_than", t.LTE = "less_than_or_equal", t.AND = "and", t.OR = "or", t.XOR = "exclusive_or", t))(ar || {});
var hr = /* @__PURE__ */ ((t) => (t.AT = "at", t.CRON = "cron", t))(hr || {});
var X = "users";
function Ue(t) {
  return new On(t);
}
function Ja(t = {}) {
  return $({ query_params: t, fn: Ue, path: X });
}
function Va(t, e = {}) {
  return p({ id: t, query_params: e, fn: Ue, path: X });
}
function Ya(t = {}) {
  return p({ id: "current", query_params: t, fn: Ue, path: X });
}
function Xa(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ue,
    path: X
  });
}
function eh(t) {
  return x({ form_data: t, query_params: {}, fn: Ue, path: X });
}
function th(t, e = {}) {
  return A({ id: t, query_params: e, path: X });
}
function ch(t) {
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
function cn(t) {
  return new Xt(t);
}
function ah(t = {}) {
  return $({ query_params: t, fn: cn, path: _e });
}
function hh(t = {}) {
  return p({
    id: "tags",
    query_params: t,
    fn: (e) => e,
    path: _e
  });
}
function lh(t, e = {}) {
  return p({ id: t, query_params: e, fn: cn, path: _e });
}
function ph(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: cn,
    path: _e
  });
}
function dh(t) {
  return x({ form_data: t, query_params: {}, fn: cn, path: _e });
}
function fh(t) {
  return A({ id: t, query_params: {}, path: _e });
}
function _h(t, e = {}) {
  return $({
    query_params: e,
    fn: (n) => new de(n),
    path: `${_e}/${t}/triggers`
  });
}
function mh(t, e, n, s = 1, i = []) {
  return a({
    id: t,
    task_name: `exec/${encodeURIComponent(
      n + "_" + s
    )}/${encodeURIComponent(e)}`,
    form_data: i,
    path: _e
  });
}
var Os = /* @__PURE__ */ ((t) => (t.Default = "default", t.Cut = "cut", t.CrossFade = "cross_fade", t.SlideTop = "slide_top", t.SlideLeft = "slide_left", t.SlideRight = "slide_right", t.SlideBottom = "slide_bottom", t))(Os || {});
var _r = class {
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
    this.id = e.id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.name = e.name || "", this.description = e.description || "", this.authority_id = e.authority_id || "", this.orientation = e.orientation || "", this.play_count = e.play_count || 0, this.play_through_count = e.play_through_count || 0, this.default_animation = e.default_animation || Os.Cut, this.random = e.random || false, this.enabled = e.enabled ?? true, this.distribution = e.distribution || false, this.default_duration = e.default_duration ?? 15 * 1e3, this.valid_from = e.valid_from, this.valid_until = e.valid_until, this.schedules = e.schedules || [], this.shared_with = e.shared_with || [];
  }
};
var mr = class {
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
function hn(t) {
  return new _r(t);
}
function Wh(t = {}) {
  return $({ query_params: t, fn: hn, path: Z });
}
function Qh(t, e = {}) {
  return p({
    id: t,
    query_params: e,
    fn: hn,
    path: Z
  });
}
var pt = "signage/plugins";
function pn(t) {
  return new mr(t);
}
function ol(t = {}) {
  return $({ query_params: t, fn: pn, path: pt });
}
function cl(t, e, n = "patch") {
  return q({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: pn,
    path: pt
  });
}
function al(t) {
  return x({
    form_data: t,
    query_params: {},
    fn: pn,
    path: pt
  });
}
function hl(t, e = {}) {
  return A({ id: t, query_params: e, path: pt });
}
var zs = class {
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
var qr = class extends zs {
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
function Pr(t) {
  return new qr(
    typeof t == "string" ? { url: t } : t
  );
}
var ne = /* @__PURE__ */ ((t) => (t[t.PARSE_ERROR = 0] = "PARSE_ERROR", t[t.BAD_REQUEST = 1] = "BAD_REQUEST", t[t.ACCESS_DENIED = 2] = "ACCESS_DENIED", t[t.REQUEST_FAILED = 3] = "REQUEST_FAILED", t[t.UNKNOWN_CMD = 4] = "UNKNOWN_CMD", t[t.SYS_NOT_FOUND = 5] = "SYS_NOT_FOUND", t[t.MOD_NOT_FOUND = 6] = "MOD_NOT_FOUND", t[t.UNEXPECTED_FAILURE = 7] = "UNEXPECTED_FAILURE", t))(ne || {});
var Fs = /* @__PURE__ */ ((t) => (t.Info = "info", t.Debug = "debug", t.Warning = "warn", t.Error = "error", t.Fatal = "fatal", t.Trace = "trace", t))(Fs || {});
var Dt = {};
function Ir(t) {
  return Dt[t];
}
var C = Ft("WS");
var Ls = 15;
var kt = 0;
var ee;
var js = 0;
var B = {};
var Gn = {};
var Ur = {};
var Ae = se(false);
var Gs = se([0, 0]);
var Bs = Date.now();
var Oe;
var Ht = 0;
var me = null;
var Pt;
var Bn = 0;
var St = 10 * 1e3;
var Er = se(null);
function kn() {
  return u().indexOf("/control/") >= 0 ? "/control/websocket" : `${ls()}/systems/control`;
}
function Ws() {
  return Ae.value;
}
function Mr() {
  return Ae.asReadonly();
}
function Cr(t, e = Gn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  return e[n] || (e[n] = se(void 0)), e[n].asReadonly();
}
function Or(t, e = Gn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  if (e[n])
    return e[n].value;
}
function Xn(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++kt,
    cmd: "bind"
  }, t);
  return n(s, e);
}
function wr(t, e = 0, n = We) {
  const s = __spreadValues({
    id: ++kt,
    cmd: "unbind"
  }, t);
  return n(s, e);
}
function Nr(t, e = St, n = We) {
  const s = __spreadValues({
    id: ++kt,
    cmd: "exec"
  }, t);
  return n(s, e);
}
function Dp(t, e = St, n = We) {
  const s = __spreadValues({
    id: ++kt,
    cmd: "debug"
  }, t);
  return n(s, e);
}
function Hp(t, e = St, n = We) {
  const s = __spreadValues({
    id: ++kt,
    cmd: "ignore"
  }, t);
  return n(s, e);
}
function We(t, e = St, n = 0) {
  const s = `${t.cmd}|${t.sys}|${t.mod}${t.index}|${t.name}|${t.args}|${ai()}`;
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
      if (ee && Ws()) {
        Rn() && Gr(t, ee, Ur), i.resolve = r, i.reject = o;
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
      } else me ? setTimeout(() => h(), 1e3) : Wn().then(() => h());
    }), B[s] = i;
  }
  return B[s].promise;
}
function Qs(t) {
  if (t !== "pong" && t instanceof Object) {
    if (t.type === "notify" && t.meta)
      zr(t.meta, t.value);
    else if (t.type === "success")
      Dr(t);
    else if (t.type === "debug") {
      C(`[DEBUG] ${t.mod}${t.klass || ""} \u2192`, t.msg);
      const e = t.meta || { mod: "", index: "" };
      Er.set({
        mod_id: t.mod || "<empty>",
        module: `${e.mod}_${e.index}`,
        class_name: t.klass || "<empty>",
        message: t.msg || "<empty>",
        level: t.level || Fs.Debug,
        time: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)
      });
    } else t.type === "error" ? Hr(t) : t.cmd || C.error("Invalid websocket message", t);
    $e(`${t.id}`);
  } else t === "pong" && (Bn = Date.now(), C("Pong!"));
}
function Dr(t) {
  const e = Object.keys(B).map((n) => B[n]).find((n) => n?.id === t.id);
  C(`[SUCCESS](${t.id})`), e && e.resolve && (e.resolve(t.value), delete B[e.key]);
}
function Hr(t) {
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
function zr(t, e, n = Gn) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  n[s] || (n[s] = se(null));
  const i = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
  C(`[NOTIFY] ${i} changed`, [
    n[s].value,
    "\u2192",
    e
  ]), n[s].set(e);
}
function Wn(t = 0) {
  return me == null && (me = new Promise((e) => {
    if (t > 40)
      return location.reload();
    Ht++, Bs = Date.now(), ee = Rn() ? jr() : Fr(), ee ? (C.debug("Authority:", Mt()), C("Connecting to websocket..."), ee.subscribe(
      (n) => {
        Ae.value || (C("Connection established."), e()), Ae.set(true), Ht = 0, Sn(), Qs(n);
      },
      (n) => {
        ee = void 0, me = null, ns(), Sn(), Lr(n);
      },
      () => {
        ee = void 0, me = null, ns(), C("Connection closed by browser."), Ae.set(false), zt();
      }
    ), Oe && clearInterval(Oe), Bn = Date.now(), es(), Oe = setInterval(
      () => es(),
      Ls * 1e3
    ), Sn(), js += 1, Pt = setTimeout(() => {
      C("Unhealthy connection. Reconnecting..."), Ae.set(false), me = null, zt();
    }, 30 * 1e3)) : (ee ? C(
      `Waiting on auth(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      [!!J(), !!Mt()],
      "info"
    ) : C.error(
      `Failed to create websocket(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`
    ), setTimeout(
      () => {
        me = null, Wn(t).then((n) => e(n));
      },
      1e3 * Math.min(10, ++t)
    ));
  })), me;
}
function Fr() {
  if (!Mt() || !J()) return null;
  const t = bi() || location.protocol.indexOf("https") >= 0;
  let e = `ws${t ? "s" : ""}://${qn()}${kn()}${ps() ? "?fixed_device=true" : ""}`;
  const n = J();
  let s = n === "x-api-key" ? `api-key=${Xe()}` : `bearer_token=${n}`;
  return !mi() && !ui() ? (C("Authenticating through cookie..."), s += `;max-age=120;path=${kn()};`, s += `${t ? "secure;" : ""}samesite=strict`, document.cookie = s, C("Cookies:", [document.cookie, s])) : (C("Authenticating through URL query parameter..."), e += `${e.indexOf("?") >= 0 ? "&" : "?"}${s}`), C(
    `Creating websocket connection to ws${t ? "s" : ""}://${qn()}${kn()}`
  ), Pr({
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
  Gs.set([js, Date.now() - Bs]), ee && Ws() && (ee.complete(), Oe && (clearInterval(Oe), Oe = void 0)), C(
    `Reconnecting in ${Math.min(
      5e3,
      Ht * 300 || 1e3
    )}ms...`
  ), ue(
    "reconnect",
    () => Wn(),
    Math.min(5e3, (Ht + 1) * 300 || 1e3)
  );
}
function es() {
  if (Date.now() - Bn > 4 * Ls * 1e3)
    return zt();
  ee?.next("ping");
}
function Lr(t) {
  Ae.set(false), C.error("Websocket error:", t), t.status === 401 && En(), Un(), zt();
}
function Sn() {
  Pt && (clearTimeout(Pt), Pt = void 0);
}
function jr() {
  const t = new zs();
  return t.subscribe(
    (e) => Qs(e)
  ), t;
}
function ts(t, e) {
  const n = typeof e == "string" ? e : e?.message || e?.msg || "Mock realtime callback failed";
  return {
    id: t.id,
    type: "error",
    code: e?.code || ne.UNEXPECTED_FAILURE,
    msg: n
  };
}
function Gr(t, e, n) {
  const s = `${t.sys}|${t.mod}_${t.index}|${t.name}`, i = Ir(t.sys), r = i && i[t.mod] ? i[t.mod][t.index - 1 || 0] : null;
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
        () => e.next(ts(t, o)),
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
          ), e.next(ts(t, o));
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
function ns() {
  for (const t in B)
    B[t] && delete B[t];
}
var ss = class {
  constructor(e, n) {
    this._module = e, this.name = n, Mr().subscribe((s, i) => {
      s !== i && (s && (this._stale_bindings || this._pending === 1) ? (Rt("VAR", "Re-binding to status variable", this.binding()), this.rebind()) : s || ($e(`rebind:${JSON.stringify(this.binding())}`), Rt(
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
    return Or(this.binding());
  }
  /**
   * Get a signal that emits the current value of the binding
   */
  listen() {
    return Cr(this.binding());
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
    return (this._binding_count <= 0 && this._stale_bindings <= 0 || this._pending === 2) && (this._pending = 1, Xn(this.binding()).then(() => {
      this._binding_count++, this._pending = 0;
    }).catch(() => null)), () => this.unbind();
  }
  /**
   * Unbind from status variable
   */
  unbind() {
    this._binding_count === 1 && this._pending === 0 ? (this._pending = 2, wr(this.binding()).then(() => {
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
        await Xn(this.binding()), this._binding_count = this._stale_bindings || 1, this._stale_bindings = 0;
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
var Br = class {
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
    return this._bindings[e] || (this._bindings[e] = new ss(this, e)), this._bindings[e];
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   */
  variable(e) {
    return this._bindings[e] || (this._bindings[e] = new ss(this, e)), this._bindings[e];
  }
  /**
   * Execute method on the engine module
   * @param method Name of the method
   * @param args Array of arguments to pass to the method
   */
  execute(e, n, s = St) {
    return Nr(
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
var Wr = class {
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
        new Br(
          this,
          `${i}_${this._module_list[i].length + 1}`
        )
      );
    return this._module_list[i][n - 1];
  }
};
var An = {};
function Qr(t) {
  return An[t] || (An[t] = new Wr(t)), An[t];
}
function zp(t, e, n = 1) {
  return Qr(t).module(e, n);
}

export {
  It,
  oi,
  u,
  Xe,
  J,
  Mt,
  Xr,
  Rn,
  eo,
  to,
  En,
  ro,
  uo,
  f,
  v,
  ce,
  te,
  V,
  Gi,
  $,
  x,
  q,
  A,
  ko,
  Ao,
  xo,
  qo,
  On,
  Ki,
  Zi,
  Mo,
  Oo,
  wo,
  No,
  zo,
  Lo,
  jo,
  Yi,
  Wo,
  Qo,
  Ko,
  Zo,
  Jo,
  Le,
  Pe,
  Nt,
  As,
  Yo,
  Xo,
  eu,
  tu,
  nu,
  su,
  iu,
  ou,
  uu,
  cu,
  au,
  hu,
  lu,
  wn,
  Tu,
  Ru,
  Iu,
  Eu,
  Mu,
  Cu,
  Lu,
  Gu,
  Bu,
  Wu,
  de,
  Xt,
  Qu,
  Zu,
  Ju,
  Vu,
  sr,
  Yu,
  ec,
  tc,
  nc,
  sc,
  ic,
  rc,
  oc,
  cc,
  Rs,
  Is,
  pc,
  dc,
  fc,
  _c,
  mc,
  gc,
  yc,
  vc,
  kc,
  Sc,
  or,
  xc,
  Pc,
  Tc,
  Rc,
  Ms,
  ur,
  Nc,
  Dc,
  Hc,
  zc,
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
  Xc,
  cr,
  ca,
  ha,
  la,
  pa,
  da,
  _a,
  ma,
  ya,
  $a,
  ba,
  va,
  ka,
  Sa,
  Aa,
  xa,
  qa,
  Pa,
  Ta,
  Ra,
  Ia,
  Ea,
  Ca,
  Oa,
  wa,
  Na,
  Da,
  ja,
  Ga,
  Ba,
  Wa,
  Qa,
  Ka,
  ar,
  hr,
  Ja,
  Va,
  Ya,
  Xa,
  eh,
  th,
  ch,
  ah,
  hh,
  lh,
  ph,
  dh,
  fh,
  _h,
  mh,
  mr,
  Wh,
  Qh,
  ol,
  cl,
  al,
  hl,
  Er,
  Dp,
  Hp,
  zp
};
//# sourceMappingURL=chunk-P3FA5CPP.js.map
