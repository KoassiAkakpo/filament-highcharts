var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function br(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var H = { exports: {} };
H.exports;
(function(c, h) {
  var _ = 200, p = "__lodash_hash_undefined__", O = 800, It = 16, k = 9007199254740991, tt = "[object Arguments]", xt = "[object Array]", Et = "[object AsyncFunction]", zt = "[object Boolean]", Pt = "[object Date]", Mt = "[object Error]", et = "[object Function]", Dt = "[object GeneratorFunction]", Lt = "[object Map]", Rt = "[object Number]", Ft = "[object Null]", rt = "[object Object]", Nt = "[object Proxy]", Ht = "[object RegExp]", Ut = "[object Set]", Gt = "[object String]", Bt = "[object Undefined]", $t = "[object WeakMap]", Kt = "[object ArrayBuffer]", qt = "[object DataView]", Vt = "[object Float32Array]", Wt = "[object Float64Array]", Xt = "[object Int8Array]", Yt = "[object Int16Array]", Zt = "[object Int32Array]", Jt = "[object Uint8Array]", Qt = "[object Uint8ClampedArray]", kt = "[object Uint16Array]", te = "[object Uint32Array]", ee = /[\\^$.*+?()[\]{}|]/g, re = /^\[object .+?Constructor\]$/, ne = /^(?:0|[1-9]\d*)$/, s = {};
  s[Vt] = s[Wt] = s[Xt] = s[Yt] = s[Zt] = s[Jt] = s[Qt] = s[kt] = s[te] = !0, s[tt] = s[xt] = s[Kt] = s[zt] = s[qt] = s[Pt] = s[Mt] = s[et] = s[Lt] = s[Rt] = s[rt] = s[Ht] = s[Ut] = s[Gt] = s[$t] = !1;
  var nt = typeof N == "object" && N && N.Object === Object && N, ie = typeof self == "object" && self && self.Object === Object && self, w = nt || ie || Function("return this")(), it = h && !h.nodeType && h, C = it && !0 && c && !c.nodeType && c, at = C && C.exports === it, G = at && nt.process, ot = function() {
    try {
      var t = C && C.require && C.require("util").types;
      return t || G && G.binding && G.binding("util");
    } catch {
    }
  }(), st = ot && ot.isTypedArray;
  function ae(t, e, r) {
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
  function oe(t, e) {
    for (var r = -1, n = Array(t); ++r < t; )
      n[r] = e(r);
    return n;
  }
  function se(t) {
    return function(e) {
      return t(e);
    };
  }
  function ue(t, e) {
    return t == null ? void 0 : t[e];
  }
  function fe(t, e) {
    return function(r) {
      return t(e(r));
    };
  }
  var ce = Array.prototype, le = Function.prototype, E = Object.prototype, B = w["__core-js_shared__"], z = le.toString, y = E.hasOwnProperty, ut = function() {
    var t = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), ft = E.toString, he = z.call(Object), de = RegExp(
    "^" + z.call(y).replace(ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), P = at ? w.Buffer : void 0, ct = w.Symbol, lt = w.Uint8Array;
  P && P.allocUnsafe;
  var ht = fe(Object.getPrototypeOf, Object), dt = Object.create, pe = E.propertyIsEnumerable, ge = ce.splice, b = ct ? ct.toStringTag : void 0, M = function() {
    try {
      var t = q(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), _e = P ? P.isBuffer : void 0, pt = Math.max, ye = Date.now, gt = q(w, "Map"), S = q(Object, "create"), be = /* @__PURE__ */ function() {
    function t() {
    }
    return function(e) {
      if (!T(e))
        return {};
      if (dt)
        return dt(e);
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
  function ve() {
    this.__data__ = S ? S(null) : {}, this.size = 0;
  }
  function Te(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  function me(t) {
    var e = this.__data__;
    if (S) {
      var r = e[t];
      return r === p ? void 0 : r;
    }
    return y.call(e, t) ? e[t] : void 0;
  }
  function Ae(t) {
    var e = this.__data__;
    return S ? e[t] !== void 0 : y.call(e, t);
  }
  function Oe(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = S && e === void 0 ? p : e, this;
  }
  v.prototype.clear = ve, v.prototype.delete = Te, v.prototype.get = me, v.prototype.has = Ae, v.prototype.set = Oe;
  function g(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function we() {
    this.__data__ = [], this.size = 0;
  }
  function Ce(t) {
    var e = this.__data__, r = D(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : ge.call(e, r, 1), --this.size, !0;
  }
  function Se(t) {
    var e = this.__data__, r = D(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function je(t) {
    return D(this.__data__, t) > -1;
  }
  function Ie(t, e) {
    var r = this.__data__, n = D(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }
  g.prototype.clear = we, g.prototype.delete = Ce, g.prototype.get = Se, g.prototype.has = je, g.prototype.set = Ie;
  function m(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function xe() {
    this.size = 0, this.__data__ = {
      hash: new v(),
      map: new (gt || g)(),
      string: new v()
    };
  }
  function Ee(t) {
    var e = R(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function ze(t) {
    return R(this, t).get(t);
  }
  function Pe(t) {
    return R(this, t).has(t);
  }
  function Me(t, e) {
    var r = R(this, t), n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }
  m.prototype.clear = xe, m.prototype.delete = Ee, m.prototype.get = ze, m.prototype.has = Pe, m.prototype.set = Me;
  function A(t) {
    var e = this.__data__ = new g(t);
    this.size = e.size;
  }
  function De() {
    this.__data__ = new g(), this.size = 0;
  }
  function Le(t) {
    var e = this.__data__, r = e.delete(t);
    return this.size = e.size, r;
  }
  function Re(t) {
    return this.__data__.get(t);
  }
  function Fe(t) {
    return this.__data__.has(t);
  }
  function Ne(t, e) {
    var r = this.__data__;
    if (r instanceof g) {
      var n = r.__data__;
      if (!gt || n.length < _ - 1)
        return n.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new m(n);
    }
    return r.set(t, e), this.size = r.size, this;
  }
  A.prototype.clear = De, A.prototype.delete = Le, A.prototype.get = Re, A.prototype.has = Fe, A.prototype.set = Ne;
  function He(t, e) {
    var r = X(t), n = !r && W(t), i = !r && !n && Tt(t), o = !r && !n && !i && At(t), u = r || n || i || o, a = u ? oe(t.length, String) : [], f = a.length;
    for (var d in t)
      u && // Safari 9 has enumerable `arguments.length` in strict mode.
      (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
      bt(d, f)) || a.push(d);
    return a;
  }
  function $(t, e, r) {
    (r !== void 0 && !F(t[e], r) || r === void 0 && !(e in t)) && K(t, e, r);
  }
  function Ue(t, e, r) {
    var n = t[e];
    (!(y.call(t, e) && F(n, r)) || r === void 0 && !(e in t)) && K(t, e, r);
  }
  function D(t, e) {
    for (var r = t.length; r--; )
      if (F(t[r][0], e))
        return r;
    return -1;
  }
  function K(t, e, r) {
    e == "__proto__" && M ? M(t, e, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : t[e] = r;
  }
  var Ge = tr();
  function L(t) {
    return t == null ? t === void 0 ? Bt : Ft : b && b in Object(t) ? er(t) : sr(t);
  }
  function _t(t) {
    return j(t) && L(t) == tt;
  }
  function Be(t) {
    if (!T(t) || ar(t))
      return !1;
    var e = Z(t) ? de : re;
    return e.test(lr(t));
  }
  function $e(t) {
    return j(t) && mt(t.length) && !!s[L(t)];
  }
  function Ke(t) {
    if (!T(t))
      return or(t);
    var e = vt(t), r = [];
    for (var n in t)
      n == "constructor" && (e || !y.call(t, n)) || r.push(n);
    return r;
  }
  function yt(t, e, r, n, i) {
    t !== e && Ge(e, function(o, u) {
      if (i || (i = new A()), T(o))
        qe(t, e, u, r, yt, n, i);
      else {
        var a = n ? n(V(t, u), o, u + "", t, e, i) : void 0;
        a === void 0 && (a = o), $(t, u, a);
      }
    }, Ot);
  }
  function qe(t, e, r, n, i, o, u) {
    var a = V(t, r), f = V(e, r), d = u.get(f);
    if (d) {
      $(t, r, d);
      return;
    }
    var l = o ? o(a, f, r + "", t, e, u) : void 0, I = l === void 0;
    if (I) {
      var J = X(f), Q = !J && Tt(f), Ct = !J && !Q && At(f);
      l = f, J || Q || Ct ? X(a) ? l = a : hr(a) ? l = Je(a) : Q ? (I = !1, l = Xe(f)) : Ct ? (I = !1, l = Ze(f)) : l = [] : dr(f) || W(f) ? (l = a, W(a) ? l = pr(a) : (!T(a) || Z(a)) && (l = rr(f))) : I = !1;
    }
    I && (u.set(f, l), i(l, f, n, o, u), u.delete(f)), $(t, r, l);
  }
  function Ve(t, e) {
    return fr(ur(t, e, wt), t + "");
  }
  var We = M ? function(t, e) {
    return M(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: _r(e),
      writable: !0
    });
  } : wt;
  function Xe(t, e) {
    return t.slice();
  }
  function Ye(t) {
    var e = new t.constructor(t.byteLength);
    return new lt(e).set(new lt(t)), e;
  }
  function Ze(t, e) {
    var r = Ye(t.buffer);
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function Je(t, e) {
    var r = -1, n = t.length;
    for (e || (e = Array(n)); ++r < n; )
      e[r] = t[r];
    return e;
  }
  function Qe(t, e, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, u = e.length; ++o < u; ) {
      var a = e[o], f = void 0;
      f === void 0 && (f = t[a]), i ? K(r, a, f) : Ue(r, a, f);
    }
    return r;
  }
  function ke(t) {
    return Ve(function(e, r) {
      var n = -1, i = r.length, o = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
      for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, u && nr(r[0], r[1], u) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i; ) {
        var a = r[n];
        a && t(e, a, n, o);
      }
      return e;
    });
  }
  function tr(t) {
    return function(e, r, n) {
      for (var i = -1, o = Object(e), u = n(e), a = u.length; a--; ) {
        var f = u[++i];
        if (r(o[f], f, o) === !1)
          break;
      }
      return e;
    };
  }
  function R(t, e) {
    var r = t.__data__;
    return ir(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function q(t, e) {
    var r = ue(t, e);
    return Be(r) ? r : void 0;
  }
  function er(t) {
    var e = y.call(t, b), r = t[b];
    try {
      t[b] = void 0;
      var n = !0;
    } catch {
    }
    var i = ft.call(t);
    return n && (e ? t[b] = r : delete t[b]), i;
  }
  function rr(t) {
    return typeof t.constructor == "function" && !vt(t) ? be(ht(t)) : {};
  }
  function bt(t, e) {
    var r = typeof t;
    return e = e ?? k, !!e && (r == "number" || r != "symbol" && ne.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function nr(t, e, r) {
    if (!T(r))
      return !1;
    var n = typeof e;
    return (n == "number" ? Y(r) && bt(e, r.length) : n == "string" && e in r) ? F(r[e], t) : !1;
  }
  function ir(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function ar(t) {
    return !!ut && ut in t;
  }
  function vt(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || E;
    return t === r;
  }
  function or(t) {
    var e = [];
    if (t != null)
      for (var r in Object(t))
        e.push(r);
    return e;
  }
  function sr(t) {
    return ft.call(t);
  }
  function ur(t, e, r) {
    return e = pt(e === void 0 ? t.length - 1 : e, 0), function() {
      for (var n = arguments, i = -1, o = pt(n.length - e, 0), u = Array(o); ++i < o; )
        u[i] = n[e + i];
      i = -1;
      for (var a = Array(e + 1); ++i < e; )
        a[i] = n[i];
      return a[e] = r(u), ae(t, this, a);
    };
  }
  function V(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
      return t[e];
  }
  var fr = cr(We);
  function cr(t) {
    var e = 0, r = 0;
    return function() {
      var n = ye(), i = It - (n - r);
      if (r = n, i > 0) {
        if (++e >= O)
          return arguments[0];
      } else
        e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function lr(t) {
    if (t != null) {
      try {
        return z.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function F(t, e) {
    return t === e || t !== t && e !== e;
  }
  var W = _t(/* @__PURE__ */ function() {
    return arguments;
  }()) ? _t : function(t) {
    return j(t) && y.call(t, "callee") && !pe.call(t, "callee");
  }, X = Array.isArray;
  function Y(t) {
    return t != null && mt(t.length) && !Z(t);
  }
  function hr(t) {
    return j(t) && Y(t);
  }
  var Tt = _e || yr;
  function Z(t) {
    if (!T(t))
      return !1;
    var e = L(t);
    return e == et || e == Dt || e == Et || e == Nt;
  }
  function mt(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= k;
  }
  function T(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function j(t) {
    return t != null && typeof t == "object";
  }
  function dr(t) {
    if (!j(t) || L(t) != rt)
      return !1;
    var e = ht(t);
    if (e === null)
      return !0;
    var r = y.call(e, "constructor") && e.constructor;
    return typeof r == "function" && r instanceof r && z.call(r) == he;
  }
  var At = st ? se(st) : $e;
  function pr(t) {
    return Qe(t, Ot(t));
  }
  function Ot(t) {
    return Y(t) ? He(t) : Ke(t);
  }
  var gr = ke(function(t, e, r, n) {
    yt(t, e, r, n);
  });
  function _r(t) {
    return function() {
      return t;
    };
  }
  function wt(t) {
    return t;
  }
  function yr() {
    return !1;
  }
  c.exports = gr;
})(H, H.exports);
var vr = H.exports;
const St = /* @__PURE__ */ br(vr), jt = (c, h) => {
  if (Array.isArray(h))
    return h;
}, Tr = ".filament-highcharts-chart-container", mr = "highcharts-dark", Ar = "highcharts-light", x = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null, Or = () => {
  try {
    return localStorage.getItem("theme") || "system";
  } catch {
    return "system";
  }
}, wr = (c) => c === "dark" ? !0 : c === "light" ? !1 : x ? x.matches : !1, U = (c) => {
  const h = document.querySelectorAll(Tr);
  if (!h.length) return;
  const _ = wr(c ?? Or());
  h.forEach((p) => {
    p.classList.toggle(mr, _), p.classList.toggle(Ar, !_);
  });
};
document.addEventListener(
  "theme-changed",
  (c) => U(c == null ? void 0 : c.detail)
);
x == null || x.addEventListener("change", () => U("system"));
function Cr({ chartOptions: c, chartId: h, extraJsOptions: _ }) {
  let p = null;
  return {
    chartOptions: c,
    chartId: h,
    extraJsOptions: _,
    init() {
      this.$wire.$on("updateOptions", ({ options: O }) => {
        this.chartOptions = St(
          {},
          this.chartOptions,
          O,
          _,
          jt
        ), this.updateChart(this.chartOptions), U();
      }), Alpine.effect(() => {
        this.$nextTick(() => {
          p === null ? this.initChart() : this.updateChart(this.chartOptions);
        });
      });
    },
    initChart: function() {
      this.chartOptions = St(
        {},
        this.chartOptions,
        _,
        jt
      ), p = Highcharts.chart(
        document.querySelector(this.chartId),
        this.chartOptions
      ), U();
    },
    updateChart(O) {
      p.update(O, !0, !0);
    }
  };
}
export {
  Cr as default
};
