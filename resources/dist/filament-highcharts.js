var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var B = { exports: {} };
B.exports;
(function(l, A) {
  var $ = 200, T = "__lodash_hash_undefined__", h = 800, q = 16, I = 9007199254740991, K = "[object Arguments]", E = "[object Array]", J = "[object AsyncFunction]", Q = "[object Boolean]", M = "[object Date]", D = "[object Error]", g = "[object Function]", Mt = "[object GeneratorFunction]", Dt = "[object Map]", zt = "[object Number]", Pt = "[object Null]", ot = "[object Object]", Rt = "[object Proxy]", Lt = "[object RegExp]", Ut = "[object Set]", Ft = "[object String]", Ht = "[object Undefined]", Gt = "[object WeakMap]", Nt = "[object ArrayBuffer]", Bt = "[object DataView]", $t = "[object Float32Array]", qt = "[object Float64Array]", Kt = "[object Int8Array]", Jt = "[object Int16Array]", Qt = "[object Int32Array]", Vt = "[object Uint8Array]", Yt = "[object Uint8ClampedArray]", Wt = "[object Uint16Array]", Xt = "[object Uint32Array]", Zt = /[\\^$.*+?()[\]{}|]/g, kt = /^\[object .+?Constructor\]$/, te = /^(?:0|[1-9]\d*)$/, s = {};
  s[$t] = s[qt] = s[Kt] = s[Jt] = s[Qt] = s[Vt] = s[Yt] = s[Wt] = s[Xt] = !0, s[K] = s[E] = s[Nt] = s[Q] = s[Bt] = s[M] = s[D] = s[g] = s[Dt] = s[zt] = s[ot] = s[Lt] = s[Ut] = s[Ft] = s[Gt] = !1;
  var st = typeof N == "object" && N && N.Object === Object && N, ee = typeof self == "object" && self && self.Object === Object && self, w = st || ee || Function("return this")(), ut = A && !A.nodeType && A, C = ut && !0 && l && !l.nodeType && l, ft = C && C.exports === ut, V = ft && st.process, ct = function() {
    try {
      var t = C && C.require && C.require("util").types;
      return t || V && V.binding && V.binding("util");
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
  var se = Array.prototype, ue = Function.prototype, z = Object.prototype, Y = w["__core-js_shared__"], P = ue.toString, _ = z.hasOwnProperty, ht = function() {
    var t = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), dt = z.toString, fe = P.call(Object), ce = RegExp(
    "^" + P.call(_).replace(Zt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), R = ft ? w.Buffer : void 0, pt = w.Symbol, gt = w.Uint8Array;
  R && R.allocUnsafe;
  var _t = oe(Object.getPrototypeOf, Object), yt = Object.create, le = z.propertyIsEnumerable, he = se.splice, y = pt ? pt.toStringTag : void 0, L = function() {
    try {
      var t = Z(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), de = R ? R.isBuffer : void 0, bt = Math.max, pe = Date.now, vt = Z(w, "Map"), S = Z(Object, "create"), ge = /* @__PURE__ */ function() {
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
    this.__data__ = S ? S(null) : {}, this.size = 0;
  }
  function ye(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  function be(t) {
    var e = this.__data__;
    if (S) {
      var r = e[t];
      return r === T ? void 0 : r;
    }
    return _.call(e, t) ? e[t] : void 0;
  }
  function ve(t) {
    var e = this.__data__;
    return S ? e[t] !== void 0 : _.call(e, t);
  }
  function Te(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = S && e === void 0 ? T : e, this;
  }
  b.prototype.clear = _e, b.prototype.delete = ye, b.prototype.get = be, b.prototype.has = ve, b.prototype.set = Te;
  function p(t) {
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
    var e = this.__data__, r = U(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : he.call(e, r, 1), --this.size, !0;
  }
  function Ae(t) {
    var e = this.__data__, r = U(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function we(t) {
    return U(this.__data__, t) > -1;
  }
  function Ce(t, e) {
    var r = this.__data__, n = U(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }
  p.prototype.clear = me, p.prototype.delete = Oe, p.prototype.get = Ae, p.prototype.has = we, p.prototype.set = Ce;
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
      map: new (vt || p)(),
      string: new b()
    };
  }
  function je(t) {
    var e = H(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function xe(t) {
    return H(this, t).get(t);
  }
  function Ie(t) {
    return H(this, t).has(t);
  }
  function Ee(t, e) {
    var r = H(this, t), n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }
  m.prototype.clear = Se, m.prototype.delete = je, m.prototype.get = xe, m.prototype.has = Ie, m.prototype.set = Ee;
  function O(t) {
    var e = this.__data__ = new p(t);
    this.size = e.size;
  }
  function Me() {
    this.__data__ = new p(), this.size = 0;
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
    if (r instanceof p) {
      var n = r.__data__;
      if (!vt || n.length < $ - 1)
        return n.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new m(n);
    }
    return r.set(t, e), this.size = r.size, this;
  }
  O.prototype.clear = Me, O.prototype.delete = De, O.prototype.get = ze, O.prototype.has = Pe, O.prototype.set = Re;
  function Le(t, e) {
    var r = et(t), n = !r && tt(t), i = !r && !n && wt(t), o = !r && !n && !i && St(t), u = r || n || i || o, a = u ? ne(t.length, String) : [], f = a.length;
    for (var d in t)
      u && // Safari 9 has enumerable `arguments.length` in strict mode.
      (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
      Ot(d, f)) || a.push(d);
    return a;
  }
  function W(t, e, r) {
    (r !== void 0 && !G(t[e], r) || r === void 0 && !(e in t)) && X(t, e, r);
  }
  function Ue(t, e, r) {
    var n = t[e];
    (!(_.call(t, e) && G(n, r)) || r === void 0 && !(e in t)) && X(t, e, r);
  }
  function U(t, e) {
    for (var r = t.length; r--; )
      if (G(t[r][0], e))
        return r;
    return -1;
  }
  function X(t, e, r) {
    e == "__proto__" && L ? L(t, e, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : t[e] = r;
  }
  var Fe = Xe();
  function F(t) {
    return t == null ? t === void 0 ? Ht : Pt : y && y in Object(t) ? Ze(t) : ir(t);
  }
  function Tt(t) {
    return j(t) && F(t) == K;
  }
  function He(t) {
    if (!v(t) || rr(t))
      return !1;
    var e = nt(t) ? ce : kt;
    return e.test(ur(t));
  }
  function Ge(t) {
    return j(t) && Ct(t.length) && !!s[F(t)];
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
        a === void 0 && (a = o), W(t, u, a);
      }
    }, jt);
  }
  function Be(t, e, r, n, i, o, u) {
    var a = k(t, r), f = k(e, r), d = u.get(f);
    if (d) {
      W(t, r, d);
      return;
    }
    var c = o ? o(a, f, r + "", t, e, u) : void 0, x = c === void 0;
    if (x) {
      var it = et(f), at = !it && wt(f), It = !it && !at && St(f);
      c = f, it || at || It ? et(a) ? c = a : fr(a) ? c = Ve(a) : at ? (x = !1, c = Ke(f)) : It ? (x = !1, c = Qe(f)) : c = [] : cr(f) || tt(f) ? (c = a, tt(a) ? c = lr(a) : (!v(a) || nt(a)) && (c = ke(f))) : x = !1;
    }
    x && (u.set(f, c), i(c, f, n, o, u), u.delete(f)), W(t, r, c);
  }
  function $e(t, e) {
    return or(ar(t, e, xt), t + "");
  }
  var qe = L ? function(t, e) {
    return L(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: dr(e),
      writable: !0
    });
  } : xt;
  function Ke(t, e) {
    return t.slice();
  }
  function Je(t) {
    var e = new t.constructor(t.byteLength);
    return new gt(e).set(new gt(t)), e;
  }
  function Qe(t, e) {
    var r = Je(t.buffer);
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function Ve(t, e) {
    var r = -1, n = t.length;
    for (e || (e = Array(n)); ++r < n; )
      e[r] = t[r];
    return e;
  }
  function Ye(t, e, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, u = e.length; ++o < u; ) {
      var a = e[o], f = void 0;
      f === void 0 && (f = t[a]), i ? X(r, a, f) : Ue(r, a, f);
    }
    return r;
  }
  function We(t) {
    return $e(function(e, r) {
      var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
      for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, u && tr(r[0], r[1], u) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i; ) {
        var a = r[n];
        a && t(e, a, n, o);
      }
      return e;
    });
  }
  function Xe(t) {
    return function(e, r, n) {
      for (var i = -1, o = Object(e), u = n(e), a = u.length; a--; ) {
        var f = u[++i];
        if (r(o[f], f, o) === !1)
          break;
      }
      return e;
    };
  }
  function H(t, e) {
    var r = t.__data__;
    return er(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function Z(t, e) {
    var r = ae(t, e);
    return He(r) ? r : void 0;
  }
  function Ze(t) {
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
    return e = e ?? I, !!e && (r == "number" || r != "symbol" && te.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function tr(t, e, r) {
    if (!v(r))
      return !1;
    var n = typeof e;
    return (n == "number" ? rt(r) && Ot(e, r.length) : n == "string" && e in r) ? G(r[e], t) : !1;
  }
  function er(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function rr(t) {
    return !!ht && ht in t;
  }
  function At(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || z;
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
  var or = sr(qe);
  function sr(t) {
    var e = 0, r = 0;
    return function() {
      var n = pe(), i = q - (n - r);
      if (r = n, i > 0) {
        if (++e >= h)
          return arguments[0];
      } else
        e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function ur(t) {
    if (t != null) {
      try {
        return P.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function G(t, e) {
    return t === e || t !== t && e !== e;
  }
  var tt = Tt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Tt : function(t) {
    return j(t) && _.call(t, "callee") && !le.call(t, "callee");
  }, et = Array.isArray;
  function rt(t) {
    return t != null && Ct(t.length) && !nt(t);
  }
  function fr(t) {
    return j(t) && rt(t);
  }
  var wt = de || pr;
  function nt(t) {
    if (!v(t))
      return !1;
    var e = F(t);
    return e == g || e == Mt || e == J || e == Rt;
  }
  function Ct(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= I;
  }
  function v(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function j(t) {
    return t != null && typeof t == "object";
  }
  function cr(t) {
    if (!j(t) || F(t) != ot)
      return !1;
    var e = _t(t);
    if (e === null)
      return !0;
    var r = _.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && P.call(r) == fe;
  }
  var St = lt ? ie(lt) : Ge;
  function lr(t) {
    return Ye(t, jt(t));
  }
  function jt(t) {
    return rt(t) ? Le(t) : Ne(t);
  }
  var hr = We(function(t, e, r) {
    mt(t, e, r);
  });
  function dr(t) {
    return function() {
      return t;
    };
  }
  function xt(t) {
    return t;
  }
  function pr() {
    return !1;
  }
  l.exports = hr;
})(B, B.exports);
var _r = B.exports;
const Et = /* @__PURE__ */ gr(_r);
function yr({ chartOptions: l, chartId: A, extraJsOptions: $ }) {
  let T = null;
  return {
    chartOptions: l,
    chartId: A,
    extraJsOptions: $,
    init() {
      this.$wire.$on("updateOptions", ({ options: h }) => {
        this.chartOptions = Et(
          {},
          this.chartOptions,
          this.extraJsOptions,
          h
        ), this.updateChart(this.chartOptions), this.highchartsDarkMode();
      }), Alpine.effect(() => {
        this.$nextTick(() => {
          T === null ? this.initChart() : this.updateChart(this.chartOptions);
        });
      }), document.querySelectorAll(".fi-wi-chart-filter > .fi-dropdown-panel").forEach((h) => {
        h.style.zIndex = "20";
      });
    },
    initChart: function() {
      const h = Et({}, this.chartOptions, this.extraJsOptions);
      T = Highcharts.chart(document.querySelector(this.chartId), h), this.highchartsDarkMode();
    },
    updateChart(h) {
      T.update(h, !0, !0);
    },
    highchartsDarkMode() {
      const h = ".filament-highcharts-chart-container", q = "highcharts-dark", I = "highcharts-light", E = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null, J = () => {
        try {
          return localStorage.getItem("theme") || "system";
        } catch {
          return "system";
        }
      }, Q = (g) => g === "dark" ? !0 : g === "light" ? !1 : E ? E.matches : !1, M = document.querySelectorAll(h);
      if (!M.length) return;
      const D = Q(J());
      M.forEach((g) => {
        g.classList.toggle(q, D), g.classList.toggle(I, !D);
      });
    }
  };
}
export {
  yr as default
};
