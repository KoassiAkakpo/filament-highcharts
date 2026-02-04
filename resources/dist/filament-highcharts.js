var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var $ = { exports: {} };
$.exports;
(function(l, A) {
  var w = 200, T = "__lodash_hash_undefined__", p = 800, K = 16, E = 9007199254740991, q = "[object Arguments]", M = "[object Array]", Q = "[object AsyncFunction]", V = "[object Boolean]", D = "[object Date]", z = "[object Error]", g = "[object Function]", Mt = "[object GeneratorFunction]", Dt = "[object Map]", zt = "[object Number]", Pt = "[object Null]", ot = "[object Object]", Rt = "[object Proxy]", Lt = "[object RegExp]", Ut = "[object Set]", Ft = "[object String]", Ht = "[object Undefined]", Gt = "[object WeakMap]", Nt = "[object ArrayBuffer]", Bt = "[object DataView]", $t = "[object Float32Array]", Kt = "[object Float64Array]", qt = "[object Int8Array]", Qt = "[object Int16Array]", Vt = "[object Int32Array]", Yt = "[object Uint8Array]", Wt = "[object Uint8ClampedArray]", Xt = "[object Uint16Array]", Zt = "[object Uint32Array]", Jt = /[\\^$.*+?()[\]{}|]/g, kt = /^\[object .+?Constructor\]$/, te = /^(?:0|[1-9]\d*)$/, s = {};
  s[$t] = s[Kt] = s[qt] = s[Qt] = s[Vt] = s[Yt] = s[Wt] = s[Xt] = s[Zt] = !0, s[q] = s[M] = s[Nt] = s[V] = s[Bt] = s[D] = s[z] = s[g] = s[Dt] = s[zt] = s[ot] = s[Lt] = s[Ut] = s[Ft] = s[Gt] = !1;
  var st = typeof B == "object" && B && B.Object === Object && B, ee = typeof self == "object" && self && self.Object === Object && self, C = st || ee || Function("return this")(), ut = A && !A.nodeType && A, S = ut && !0 && l && !l.nodeType && l, ft = S && S.exports === ut, Y = ft && st.process, ct = function() {
    try {
      var t = S && S.require && S.require("util").types;
      return t || Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), lt = ct && ct.isTypedArray;
  function re(t, e, r) {
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
  function ne(t, e) {
    for (var r = -1, n = Array(t); ++r < t; )
      n[r] = e(r);
    return n;
  }
  function ie(t) {
    return function(e) {
      return t(e);
    };
  }
  function ae(t, e) {
    return t == null ? void 0 : t[e];
  }
  function oe(t, e) {
    return function(r) {
      return t(e(r));
    };
  }
  var se = Array.prototype, ue = Function.prototype, P = Object.prototype, W = C["__core-js_shared__"], R = ue.toString, _ = P.hasOwnProperty, ht = function() {
    var t = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), dt = P.toString, fe = R.call(Object), ce = RegExp(
    "^" + R.call(_).replace(Jt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), L = ft ? C.Buffer : void 0, pt = C.Symbol, gt = C.Uint8Array;
  L && L.allocUnsafe;
  var _t = oe(Object.getPrototypeOf, Object), yt = Object.create, le = P.propertyIsEnumerable, he = se.splice, y = pt ? pt.toStringTag : void 0, U = function() {
    try {
      var t = J(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), de = L ? L.isBuffer : void 0, bt = Math.max, pe = Date.now, vt = J(C, "Map"), j = J(Object, "create"), ge = /* @__PURE__ */ function() {
    function t() {
    }
    return function(e) {
      if (!v(e))
        return {};
      if (yt)
        return yt(e);
      t.prototype = e;
      var r = new t();
      return t.prototype = void 0, r;
    };
  }();
  function b(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function _e() {
    this.__data__ = j ? j(null) : {}, this.size = 0;
  }
  function ye(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  function be(t) {
    var e = this.__data__;
    if (j) {
      var r = e[t];
      return r === T ? void 0 : r;
    }
    return _.call(e, t) ? e[t] : void 0;
  }
  function ve(t) {
    var e = this.__data__;
    return j ? e[t] !== void 0 : _.call(e, t);
  }
  function Te(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = j && e === void 0 ? T : e, this;
  }
  b.prototype.clear = _e, b.prototype.delete = ye, b.prototype.get = be, b.prototype.has = ve, b.prototype.set = Te;
  function d(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function me() {
    this.__data__ = [], this.size = 0;
  }
  function Oe(t) {
    var e = this.__data__, r = F(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : he.call(e, r, 1), --this.size, !0;
  }
  function Ae(t) {
    var e = this.__data__, r = F(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function we(t) {
    return F(this.__data__, t) > -1;
  }
  function Ce(t, e) {
    var r = this.__data__, n = F(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }
  d.prototype.clear = me, d.prototype.delete = Oe, d.prototype.get = Ae, d.prototype.has = we, d.prototype.set = Ce;
  function m(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Se() {
    this.size = 0, this.__data__ = {
      hash: new b(),
      map: new (vt || d)(),
      string: new b()
    };
  }
  function je(t) {
    var e = G(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function Ie(t) {
    return G(this, t).get(t);
  }
  function xe(t) {
    return G(this, t).has(t);
  }
  function Ee(t, e) {
    var r = G(this, t), n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }
  m.prototype.clear = Se, m.prototype.delete = je, m.prototype.get = Ie, m.prototype.has = xe, m.prototype.set = Ee;
  function O(t) {
    var e = this.__data__ = new d(t);
    this.size = e.size;
  }
  function Me() {
    this.__data__ = new d(), this.size = 0;
  }
  function De(t) {
    var e = this.__data__, r = e.delete(t);
    return this.size = e.size, r;
  }
  function ze(t) {
    return this.__data__.get(t);
  }
  function Pe(t) {
    return this.__data__.has(t);
  }
  function Re(t, e) {
    var r = this.__data__;
    if (r instanceof d) {
      var n = r.__data__;
      if (!vt || n.length < w - 1)
        return n.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new m(n);
    }
    return r.set(t, e), this.size = r.size, this;
  }
  O.prototype.clear = Me, O.prototype.delete = De, O.prototype.get = ze, O.prototype.has = Pe, O.prototype.set = Re;
  function Le(t, e) {
    var r = et(t), n = !r && tt(t), i = !r && !n && wt(t), o = !r && !n && !i && St(t), u = r || n || i || o, a = u ? ne(t.length, String) : [], f = a.length;
    for (var h in t)
      u && // Safari 9 has enumerable `arguments.length` in strict mode.
      (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
      Ot(h, f)) || a.push(h);
    return a;
  }
  function X(t, e, r) {
    (r !== void 0 && !N(t[e], r) || r === void 0 && !(e in t)) && Z(t, e, r);
  }
  function Ue(t, e, r) {
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
  var Fe = Ze();
  function H(t) {
    return t == null ? t === void 0 ? Ht : Pt : y && y in Object(t) ? Je(t) : ir(t);
  }
  function Tt(t) {
    return I(t) && H(t) == q;
  }
  function He(t) {
    if (!v(t) || rr(t))
      return !1;
    var e = nt(t) ? ce : kt;
    return e.test(ur(t));
  }
  function Ge(t) {
    return I(t) && Ct(t.length) && !!s[H(t)];
  }
  function Ne(t) {
    if (!v(t))
      return nr(t);
    var e = At(t), r = [];
    for (var n in t)
      n == "constructor" && (e || !_.call(t, n)) || r.push(n);
    return r;
  }
  function mt(t, e, r, n, i) {
    t !== e && Fe(e, function(o, u) {
      if (i || (i = new O()), v(o))
        Be(t, e, u, r, mt, n, i);
      else {
        var a = n ? n(k(t, u), o, u + "", t, e, i) : void 0;
        a === void 0 && (a = o), X(t, u, a);
      }
    }, jt);
  }
  function Be(t, e, r, n, i, o, u) {
    var a = k(t, r), f = k(e, r), h = u.get(f);
    if (h) {
      X(t, r, h);
      return;
    }
    var c = o ? o(a, f, r + "", t, e, u) : void 0, x = c === void 0;
    if (x) {
      var it = et(f), at = !it && wt(f), xt = !it && !at && St(f);
      c = f, it || at || xt ? et(a) ? c = a : fr(a) ? c = Ye(a) : at ? (x = !1, c = qe(f)) : xt ? (x = !1, c = Ve(f)) : c = [] : cr(f) || tt(f) ? (c = a, tt(a) ? c = lr(a) : (!v(a) || nt(a)) && (c = ke(f))) : x = !1;
    }
    x && (u.set(f, c), i(c, f, n, o, u), u.delete(f)), X(t, r, c);
  }
  function $e(t, e) {
    return or(ar(t, e, It), t + "");
  }
  var Ke = U ? function(t, e) {
    return U(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: dr(e),
      writable: !0
    });
  } : It;
  function qe(t, e) {
    return t.slice();
  }
  function Qe(t) {
    var e = new t.constructor(t.byteLength);
    return new gt(e).set(new gt(t)), e;
  }
  function Ve(t, e) {
    var r = Qe(t.buffer);
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function Ye(t, e) {
    var r = -1, n = t.length;
    for (e || (e = Array(n)); ++r < n; )
      e[r] = t[r];
    return e;
  }
  function We(t, e, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, u = e.length; ++o < u; ) {
      var a = e[o], f = void 0;
      f === void 0 && (f = t[a]), i ? Z(r, a, f) : Ue(r, a, f);
    }
    return r;
  }
  function Xe(t) {
    return $e(function(e, r) {
      var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
      for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, u && tr(r[0], r[1], u) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i; ) {
        var a = r[n];
        a && t(e, a, n, o);
      }
      return e;
    });
  }
  function Ze(t) {
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
    return er(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function J(t, e) {
    var r = ae(t, e);
    return He(r) ? r : void 0;
  }
  function Je(t) {
    var e = _.call(t, y), r = t[y];
    try {
      t[y] = void 0;
      var n = !0;
    } catch {
    }
    var i = dt.call(t);
    return n && (e ? t[y] = r : delete t[y]), i;
  }
  function ke(t) {
    return typeof t.constructor == "function" && !At(t) ? ge(_t(t)) : {};
  }
  function Ot(t, e) {
    var r = typeof t;
    return e = e ?? E, !!e && (r == "number" || r != "symbol" && te.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function tr(t, e, r) {
    if (!v(r))
      return !1;
    var n = typeof e;
    return (n == "number" ? rt(r) && Ot(e, r.length) : n == "string" && e in r) ? N(r[e], t) : !1;
  }
  function er(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function rr(t) {
    return !!ht && ht in t;
  }
  function At(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || P;
    return t === r;
  }
  function nr(t) {
    var e = [];
    if (t != null)
      for (var r in Object(t))
        e.push(r);
    return e;
  }
  function ir(t) {
    return dt.call(t);
  }
  function ar(t, e, r) {
    return e = bt(e === void 0 ? t.length - 1 : e, 0), function() {
      for (var n = arguments, i = -1, o = bt(n.length - e, 0), u = Array(o); ++i < o; )
        u[i] = n[e + i];
      i = -1;
      for (var a = Array(e + 1); ++i < e; )
        a[i] = n[i];
      return a[e] = r(u), re(t, this, a);
    };
  }
  function k(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
      return t[e];
  }
  var or = sr(Ke);
  function sr(t) {
    var e = 0, r = 0;
    return function() {
      var n = pe(), i = K - (n - r);
      if (r = n, i > 0) {
        if (++e >= p)
          return arguments[0];
      } else
        e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function ur(t) {
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
    return I(t) && _.call(t, "callee") && !le.call(t, "callee");
  }, et = Array.isArray;
  function rt(t) {
    return t != null && Ct(t.length) && !nt(t);
  }
  function fr(t) {
    return I(t) && rt(t);
  }
  var wt = de || pr;
  function nt(t) {
    if (!v(t))
      return !1;
    var e = H(t);
    return e == g || e == Mt || e == Q || e == Rt;
  }
  function Ct(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= E;
  }
  function v(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function I(t) {
    return t != null && typeof t == "object";
  }
  function cr(t) {
    if (!I(t) || H(t) != ot)
      return !1;
    var e = _t(t);
    if (e === null)
      return !0;
    var r = _.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && R.call(r) == fe;
  }
  var St = lt ? ie(lt) : Ge;
  function lr(t) {
    return We(t, jt(t));
  }
  function jt(t) {
    return rt(t) ? Le(t) : Ne(t);
  }
  var hr = Xe(function(t, e, r) {
    mt(t, e, r);
  });
  function dr(t) {
    return function() {
      return t;
    };
  }
  function It(t) {
    return t;
  }
  function pr() {
    return !1;
  }
  l.exports = hr;
})($, $.exports);
var _r = $.exports;
const Et = /* @__PURE__ */ gr(_r);
function yr({ chartOptions: l, chartId: A, extraJsOptions: w }) {
  let T = null;
  return {
    chartOptions: l,
    chartId: A,
    extraJsOptions: w,
    init() {
      this.$wire.$on("updateOptions", ({ options: p }) => {
        console.log("updateOptions", p), this.chartOptions = Et(
          {},
          this.chartOptions,
          w,
          p
        ), this.updateChart(this.chartOptions), this.highchartsDarkMode();
      }), Alpine.effect(() => {
        this.$nextTick(() => {
          T === null ? this.initChart() : this.updateChart(this.chartOptions);
        });
      });
    },
    initChart: function() {
      this.chartOptions = Et({}, this.chartOptions, w), T = Highcharts.chart(
        document.querySelector(this.chartId),
        this.chartOptions
      ), this.highchartsDarkMode();
    },
    updateChart(p) {
      T.update(p, !0, !0);
    },
    highchartsDarkMode() {
      const p = ".filament-highcharts-chart-container", K = "highcharts-dark", E = "highcharts-light", M = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null, Q = () => {
        try {
          return localStorage.getItem("theme") || "system";
        } catch {
          return "system";
        }
      }, V = (g) => g === "dark" ? !0 : g === "light" ? !1 : M ? M.matches : !1, D = document.querySelectorAll(p);
      if (!D.length) return;
      const z = V(Q());
      D.forEach((g) => {
        g.classList.toggle(K, z), g.classList.toggle(E, !z);
      });
    }
  };
}
export {
  yr as default
};
