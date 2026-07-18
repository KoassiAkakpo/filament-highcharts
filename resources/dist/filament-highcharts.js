var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _r(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var $ = { exports: {} };
$.exports;
(function(c, p) {
  var w = 200, m = "__lodash_hash_undefined__", y = 800, K = 16, E = 9007199254740991, q = "[object Arguments]", M = "[object Array]", Q = "[object AsyncFunction]", V = "[object Boolean]", D = "[object Date]", z = "[object Error]", g = "[object Function]", Dt = "[object GeneratorFunction]", zt = "[object Map]", Pt = "[object Number]", Rt = "[object Null]", ot = "[object Object]", Lt = "[object Proxy]", Ut = "[object RegExp]", Ft = "[object Set]", Ht = "[object String]", Gt = "[object Undefined]", Nt = "[object WeakMap]", Bt = "[object ArrayBuffer]", $t = "[object DataView]", Kt = "[object Float32Array]", qt = "[object Float64Array]", Qt = "[object Int8Array]", Vt = "[object Int16Array]", Wt = "[object Int32Array]", Yt = "[object Uint8Array]", Xt = "[object Uint8ClampedArray]", Zt = "[object Uint16Array]", Jt = "[object Uint32Array]", kt = /[\\^$.*+?()[\]{}|]/g, te = /^\[object .+?Constructor\]$/, ee = /^(?:0|[1-9]\d*)$/, s = {};
  s[Kt] = s[qt] = s[Qt] = s[Vt] = s[Wt] = s[Yt] = s[Xt] = s[Zt] = s[Jt] = !0, s[q] = s[M] = s[Bt] = s[V] = s[$t] = s[D] = s[z] = s[g] = s[zt] = s[Pt] = s[ot] = s[Ut] = s[Ft] = s[Ht] = s[Nt] = !1;
  var st = typeof B == "object" && B && B.Object === Object && B, re = typeof self == "object" && self && self.Object === Object && self, C = st || re || Function("return this")(), ut = p && !p.nodeType && p, S = ut && !0 && c && !c.nodeType && c, ft = S && S.exports === ut, W = ft && st.process, ct = function() {
    try {
      var t = S && S.require && S.require("util").types;
      return t || W && W.binding && W.binding("util");
    } catch {
    }
  }(), lt = ct && ct.isTypedArray;
  function ne(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  function ie(t, e) {
    for (var r = -1, n = Array(t); ++r < t; )
      n[r] = e(r);
    return n;
  }
  function ae(t) {
    return function(e) {
      return t(e);
    };
  }
  function oe(t, e) {
    return t == null ? void 0 : t[e];
  }
  function se(t, e) {
    return function(r) {
      return t(e(r));
    };
  }
  var ue = Array.prototype, fe = Function.prototype, P = Object.prototype, Y = C["__core-js_shared__"], R = fe.toString, _ = P.hasOwnProperty, ht = function() {
    var t = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), dt = P.toString, ce = R.call(Object), le = RegExp(
    "^" + R.call(_).replace(kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), L = ft ? C.Buffer : void 0, pt = C.Symbol, gt = C.Uint8Array;
  L && L.allocUnsafe;
  var _t = se(Object.getPrototypeOf, Object), yt = Object.create, he = P.propertyIsEnumerable, de = ue.splice, b = pt ? pt.toStringTag : void 0, U = function() {
    try {
      var t = J(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), pe = L ? L.isBuffer : void 0, bt = Math.max, ge = Date.now, vt = J(C, "Map"), j = J(Object, "create"), _e = /* @__PURE__ */ function() {
    function t() {
    }
    return function(e) {
      if (!T(e))
        return {};
      if (yt)
        return yt(e);
      t.prototype = e;
      var r = new t();
      return t.prototype = void 0, r;
    };
  }();
  function v(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function ye() {
    this.__data__ = j ? j(null) : {}, this.size = 0;
  }
  function be(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  function ve(t) {
    var e = this.__data__;
    if (j) {
      var r = e[t];
      return r === m ? void 0 : r;
    }
    return _.call(e, t) ? e[t] : void 0;
  }
  function Te(t) {
    var e = this.__data__;
    return j ? e[t] !== void 0 : _.call(e, t);
  }
  function me(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = j && e === void 0 ? m : e, this;
  }
  v.prototype.clear = ye, v.prototype.delete = be, v.prototype.get = ve, v.prototype.has = Te, v.prototype.set = me;
  function d(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Ae() {
    this.__data__ = [], this.size = 0;
  }
  function Oe(t) {
    var e = this.__data__, r = F(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : de.call(e, r, 1), --this.size, !0;
  }
  function we(t) {
    var e = this.__data__, r = F(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function Ce(t) {
    return F(this.__data__, t) > -1;
  }
  function Se(t, e) {
    var r = this.__data__, n = F(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }
  d.prototype.clear = Ae, d.prototype.delete = Oe, d.prototype.get = we, d.prototype.has = Ce, d.prototype.set = Se;
  function A(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function je() {
    this.size = 0, this.__data__ = {
      hash: new v(),
      map: new (vt || d)(),
      string: new v()
    };
  }
  function Ie(t) {
    var e = G(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function xe(t) {
    return G(this, t).get(t);
  }
  function Ee(t) {
    return G(this, t).has(t);
  }
  function Me(t, e) {
    var r = G(this, t), n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }
  A.prototype.clear = je, A.prototype.delete = Ie, A.prototype.get = xe, A.prototype.has = Ee, A.prototype.set = Me;
  function O(t) {
    var e = this.__data__ = new d(t);
    this.size = e.size;
  }
  function De() {
    this.__data__ = new d(), this.size = 0;
  }
  function ze(t) {
    var e = this.__data__, r = e.delete(t);
    return this.size = e.size, r;
  }
  function Pe(t) {
    return this.__data__.get(t);
  }
  function Re(t) {
    return this.__data__.has(t);
  }
  function Le(t, e) {
    var r = this.__data__;
    if (r instanceof d) {
      var n = r.__data__;
      if (!vt || n.length < w - 1)
        return n.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new A(n);
    }
    return r.set(t, e), this.size = r.size, this;
  }
  O.prototype.clear = De, O.prototype.delete = ze, O.prototype.get = Pe, O.prototype.has = Re, O.prototype.set = Le;
  function Ue(t, e) {
    var r = et(t), n = !r && tt(t), i = !r && !n && wt(t), o = !r && !n && !i && St(t), u = r || n || i || o, a = u ? ie(t.length, String) : [], f = a.length;
    for (var h in t)
      u && // Safari 9 has enumerable `arguments.length` in strict mode.
      (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
      At(h, f)) || a.push(h);
    return a;
  }
  function X(t, e, r) {
    (r !== void 0 && !N(t[e], r) || r === void 0 && !(e in t)) && Z(t, e, r);
  }
  function Fe(t, e, r) {
    var n = t[e];
    (!(_.call(t, e) && N(n, r)) || r === void 0 && !(e in t)) && Z(t, e, r);
  }
  function F(t, e) {
    for (var r = t.length; r--; )
      if (N(t[r][0], e))
        return r;
    return -1;
  }
  function Z(t, e, r) {
    e == "__proto__" && U ? U(t, e, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : t[e] = r;
  }
  var He = Je();
  function H(t) {
    return t == null ? t === void 0 ? Gt : Rt : b && b in Object(t) ? ke(t) : ar(t);
  }
  function Tt(t) {
    return I(t) && H(t) == q;
  }
  function Ge(t) {
    if (!T(t) || nr(t))
      return !1;
    var e = nt(t) ? le : te;
    return e.test(fr(t));
  }
  function Ne(t) {
    return I(t) && Ct(t.length) && !!s[H(t)];
  }
  function Be(t) {
    if (!T(t))
      return ir(t);
    var e = Ot(t), r = [];
    for (var n in t)
      n == "constructor" && (e || !_.call(t, n)) || r.push(n);
    return r;
  }
  function mt(t, e, r, n, i) {
    t !== e && He(e, function(o, u) {
      if (i || (i = new O()), T(o))
        $e(t, e, u, r, mt, n, i);
      else {
        var a = n ? n(k(t, u), o, u + "", t, e, i) : void 0;
        a === void 0 && (a = o), X(t, u, a);
      }
    }, jt);
  }
  function $e(t, e, r, n, i, o, u) {
    var a = k(t, r), f = k(e, r), h = u.get(f);
    if (h) {
      X(t, r, h);
      return;
    }
    var l = o ? o(a, f, r + "", t, e, u) : void 0, x = l === void 0;
    if (x) {
      var it = et(f), at = !it && wt(f), xt = !it && !at && St(f);
      l = f, it || at || xt ? et(a) ? l = a : cr(a) ? l = Ye(a) : at ? (x = !1, l = Qe(f)) : xt ? (x = !1, l = We(f)) : l = [] : lr(f) || tt(f) ? (l = a, tt(a) ? l = hr(a) : (!T(a) || nt(a)) && (l = tr(f))) : x = !1;
    }
    x && (u.set(f, l), i(l, f, n, o, u), u.delete(f)), X(t, r, l);
  }
  function Ke(t, e) {
    return sr(or(t, e, It), t + "");
  }
  var qe = U ? function(t, e) {
    return U(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: pr(e),
      writable: !0
    });
  } : It;
  function Qe(t, e) {
    return t.slice();
  }
  function Ve(t) {
    var e = new t.constructor(t.byteLength);
    return new gt(e).set(new gt(t)), e;
  }
  function We(t, e) {
    var r = Ve(t.buffer);
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function Ye(t, e) {
    var r = -1, n = t.length;
    for (e || (e = Array(n)); ++r < n; )
      e[r] = t[r];
    return e;
  }
  function Xe(t, e, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, u = e.length; ++o < u; ) {
      var a = e[o], f = void 0;
      f === void 0 && (f = t[a]), i ? Z(r, a, f) : Fe(r, a, f);
    }
    return r;
  }
  function Ze(t) {
    return Ke(function(e, r) {
      var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
      for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, u && er(r[0], r[1], u) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i; ) {
        var a = r[n];
        a && t(e, a, n, o);
      }
      return e;
    });
  }
  function Je(t) {
    return function(e, r, n) {
      for (var i = -1, o = Object(e), u = n(e), a = u.length; a--; ) {
        var f = u[++i];
        if (r(o[f], f, o) === !1)
          break;
      }
      return e;
    };
  }
  function G(t, e) {
    var r = t.__data__;
    return rr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function J(t, e) {
    var r = oe(t, e);
    return Ge(r) ? r : void 0;
  }
  function ke(t) {
    var e = _.call(t, b), r = t[b];
    try {
      t[b] = void 0;
      var n = !0;
    } catch {
    }
    var i = dt.call(t);
    return n && (e ? t[b] = r : delete t[b]), i;
  }
  function tr(t) {
    return typeof t.constructor == "function" && !Ot(t) ? _e(_t(t)) : {};
  }
  function At(t, e) {
    var r = typeof t;
    return e = e ?? E, !!e && (r == "number" || r != "symbol" && ee.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function er(t, e, r) {
    if (!T(r))
      return !1;
    var n = typeof e;
    return (n == "number" ? rt(r) && At(e, r.length) : n == "string" && e in r) ? N(r[e], t) : !1;
  }
  function rr(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function nr(t) {
    return !!ht && ht in t;
  }
  function Ot(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || P;
    return t === r;
  }
  function ir(t) {
    var e = [];
    if (t != null)
      for (var r in Object(t))
        e.push(r);
    return e;
  }
  function ar(t) {
    return dt.call(t);
  }
  function or(t, e, r) {
    return e = bt(e === void 0 ? t.length - 1 : e, 0), function() {
      for (var n = arguments, i = -1, o = bt(n.length - e, 0), u = Array(o); ++i < o; )
        u[i] = n[e + i];
      i = -1;
      for (var a = Array(e + 1); ++i < e; )
        a[i] = n[i];
      return a[e] = r(u), ne(t, this, a);
    };
  }
  function k(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
      return t[e];
  }
  var sr = ur(qe);
  function ur(t) {
    var e = 0, r = 0;
    return function() {
      var n = ge(), i = K - (n - r);
      if (r = n, i > 0) {
        if (++e >= y)
          return arguments[0];
      } else
        e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function fr(t) {
    if (t != null) {
      try {
        return R.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function N(t, e) {
    return t === e || t !== t && e !== e;
  }
  var tt = Tt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Tt : function(t) {
    return I(t) && _.call(t, "callee") && !he.call(t, "callee");
  }, et = Array.isArray;
  function rt(t) {
    return t != null && Ct(t.length) && !nt(t);
  }
  function cr(t) {
    return I(t) && rt(t);
  }
  var wt = pe || gr;
  function nt(t) {
    if (!T(t))
      return !1;
    var e = H(t);
    return e == g || e == Dt || e == Q || e == Lt;
  }
  function Ct(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= E;
  }
  function T(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function I(t) {
    return t != null && typeof t == "object";
  }
  function lr(t) {
    if (!I(t) || H(t) != ot)
      return !1;
    var e = _t(t);
    if (e === null)
      return !0;
    var r = _.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && R.call(r) == ce;
  }
  var St = lt ? ae(lt) : Ne;
  function hr(t) {
    return Xe(t, jt(t));
  }
  function jt(t) {
    return rt(t) ? Ue(t) : Be(t);
  }
  var dr = Ze(function(t, e, r, n) {
    mt(t, e, r, n);
  });
  function pr(t) {
    return function() {
      return t;
    };
  }
  function It(t) {
    return t;
  }
  function gr() {
    return !1;
  }
  c.exports = dr;
})($, $.exports);
var yr = $.exports;
const Et = /* @__PURE__ */ _r(yr), Mt = (c, p) => {
  if (Array.isArray(p))
    return p;
};
function br({ chartOptions: c, chartId: p, extraJsOptions: w }) {
  let m = null;
  return {
    chartOptions: c,
    chartId: p,
    extraJsOptions: w,
    init() {
      this.$wire.$on("updateOptions", ({ options: y }) => {
        this.chartOptions = Et(
          {},
          this.chartOptions,
          y,
          w,
          Mt
        ), this.updateChart(this.chartOptions), this.highchartsDarkMode();
      }), Alpine.effect(() => {
        this.$nextTick(() => {
          m === null ? this.initChart() : this.updateChart(this.chartOptions);
        });
      });
    },
    initChart: function() {
      this.chartOptions = Et(
        {},
        this.chartOptions,
        w,
        Mt
      ), m = Highcharts.chart(
        document.querySelector(this.chartId),
        this.chartOptions
      ), this.highchartsDarkMode();
    },
    updateChart(y) {
      m.update(y, !0, !0);
    },
    highchartsDarkMode() {
      const y = ".filament-highcharts-chart-container", K = "highcharts-dark", E = "highcharts-light", M = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null, Q = () => {
        try {
          return localStorage.getItem("theme") || "system";
        } catch {
          return "system";
        }
      }, V = (g) => g === "dark" ? !0 : g === "light" ? !1 : M ? M.matches : !1, D = document.querySelectorAll(y);
      if (!D.length) return;
      const z = V(Q());
      D.forEach((g) => {
        g.classList.toggle(K, z), g.classList.toggle(E, !z);
      });
    }
  };
}
export {
  br as default
};
