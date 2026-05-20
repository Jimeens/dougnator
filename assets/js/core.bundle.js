var appconsent;
!function() {
    "use strict";
    var e, t, n, r, o = {
        7954: function(e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            e.exports = function() {
                for (var e, n, r = [], o = window, s = o; s; ) {
                    try {
                        if (s.frames.__tcfapiLocator) {
                            e = s;
                            break
                        }
                    } catch (e) {}
                    if (s === o.top)
                        break;
                    s = s.parent
                }
                e || (function e() {
                    var t = o.document
                      , n = !!o.frames.__tcfapiLocator;
                    if (!n)
                        if (t.body) {
                            var r = t.createElement("iframe");
                            r.style.cssText = "display:none",
                            r.name = "__tcfapiLocator",
                            t.body.appendChild(r)
                        } else
                            setTimeout(e, 5);
                    return !n
                }(),
                o.__tcfapi = function() {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                        t[o] = arguments[o];
                    if (!t.length)
                        return r;
                    "setGdprApplies" === t[0] ? t.length > 3 && 2 === parseInt(t[1], 10) && "boolean" == typeof t[3] && (n = t[3],
                    "function" == typeof t[2] && t[2]("set", !0)) : "ping" === t[0] ? "function" == typeof t[2] && t[2]({
                        gdprApplies: n,
                        cmpLoaded: !1,
                        cmpStatus: "stub"
                    }) : r.push(t)
                }
                ,
                o.addEventListener("message", (function(e) {
                    var n = "string" == typeof e.data
                      , r = {};
                    if (n)
                        try {
                            r = JSON.parse(e.data)
                        } catch (e) {}
                    else
                        r = e.data;
                    var o = "object" === t(r) && null !== r ? r.__tcfapiCall : null;
                    if (o) {
                        var s = null == e ? void 0 : e.source;
                        window.__tcfapi(o.command, o.version, (function(e, t) {
                            var r = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: t,
                                    callId: o.callId
                                }
                            };
                            s && s.postMessage && s.postMessage(n ? JSON.stringify(r) : r, "*")
                        }
                        ), o.parameter),
                        s = null
                    }
                }
                ), !1))
            }
        },
        6559: function(e) {
            e.exports = function(e, t) {
                var n = new Array(arguments.length - 1)
                  , r = 0
                  , o = 2
                  , s = !0;
                for (; o < arguments.length; )
                    n[r++] = arguments[o++];
                return new Promise((function(o, i) {
                    n[r] = function(e) {
                        if (s)
                            if (s = !1,
                            e)
                                i(e);
                            else {
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; )
                                    t[n++] = arguments[n];
                                o.apply(null, t)
                            }
                    }
                    ;
                    try {
                        e.apply(t || null, n)
                    } catch (e) {
                        s && (s = !1,
                        i(e))
                    }
                }
                ))
            }
        },
        3081: function(e, t) {
            var n = t;
            n.length = function(e) {
                var t = e.length;
                if (!t)
                    return 0;
                for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t); )
                    ++n;
                return Math.ceil(3 * e.length) / 4 - n
            }
            ;
            for (var r = new Array(64), o = new Array(123), s = 0; s < 64; )
                o[r[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
            n.encode = function(e, t, n) {
                for (var o, s = null, i = [], a = 0, c = 0; t < n; ) {
                    var l = e[t++];
                    switch (c) {
                    case 0:
                        i[a++] = r[l >> 2],
                        o = (3 & l) << 4,
                        c = 1;
                        break;
                    case 1:
                        i[a++] = r[o | l >> 4],
                        o = (15 & l) << 2,
                        c = 2;
                        break;
                    case 2:
                        i[a++] = r[o | l >> 6],
                        i[a++] = r[63 & l],
                        c = 0
                    }
                    a > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, i)),
                    a = 0)
                }
                return c && (i[a++] = r[o],
                i[a++] = 61,
                1 === c && (i[a++] = 61)),
                s ? (a && s.push(String.fromCharCode.apply(String, i.slice(0, a))),
                s.join("")) : String.fromCharCode.apply(String, i.slice(0, a))
            }
            ;
            var i = "invalid encoding";
            n.decode = function(e, t, n) {
                for (var r, s = n, a = 0, c = 0; c < e.length; ) {
                    var l = e.charCodeAt(c++);
                    if (61 === l && a > 1)
                        break;
                    if (void 0 === (l = o[l]))
                        throw Error(i);
                    switch (a) {
                    case 0:
                        r = l,
                        a = 1;
                        break;
                    case 1:
                        t[n++] = r << 2 | (48 & l) >> 4,
                        r = l,
                        a = 2;
                        break;
                    case 2:
                        t[n++] = (15 & r) << 4 | (60 & l) >> 2,
                        r = l,
                        a = 3;
                        break;
                    case 3:
                        t[n++] = (3 & r) << 6 | l,
                        a = 0
                    }
                }
                if (1 === a)
                    throw Error(i);
                return n - s
            }
            ,
            n.test = function(e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
            }
        },
        4344: function(e) {
            function t() {
                this._listeners = {}
            }
            e.exports = t,
            t.prototype.on = function(e, t, n) {
                return (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: n || this
                }),
                this
            }
            ,
            t.prototype.off = function(e, t) {
                if (void 0 === e)
                    this._listeners = {};
                else if (void 0 === t)
                    this._listeners[e] = [];
                else
                    for (var n = this._listeners[e], r = 0; r < n.length; )
                        n[r].fn === t ? n.splice(r, 1) : ++r;
                return this
            }
            ,
            t.prototype.emit = function(e) {
                var t = this._listeners[e];
                if (t) {
                    for (var n = [], r = 1; r < arguments.length; )
                        n.push(arguments[r++]);
                    for (r = 0; r < t.length; )
                        t[r].fn.apply(t[r++].ctx, n)
                }
                return this
            }
        },
        6964: function(e) {
            function t(e) {
                return "undefined" != typeof Float32Array ? function() {
                    var t = new Float32Array([-0])
                      , n = new Uint8Array(t.buffer)
                      , r = 128 === n[3];
                    function o(e, r, o) {
                        t[0] = e,
                        r[o] = n[0],
                        r[o + 1] = n[1],
                        r[o + 2] = n[2],
                        r[o + 3] = n[3]
                    }
                    function s(e, r, o) {
                        t[0] = e,
                        r[o] = n[3],
                        r[o + 1] = n[2],
                        r[o + 2] = n[1],
                        r[o + 3] = n[0]
                    }
                    function i(e, r) {
                        return n[0] = e[r],
                        n[1] = e[r + 1],
                        n[2] = e[r + 2],
                        n[3] = e[r + 3],
                        t[0]
                    }
                    function a(e, r) {
                        return n[3] = e[r],
                        n[2] = e[r + 1],
                        n[1] = e[r + 2],
                        n[0] = e[r + 3],
                        t[0]
                    }
                    e.writeFloatLE = r ? o : s,
                    e.writeFloatBE = r ? s : o,
                    e.readFloatLE = r ? i : a,
                    e.readFloatBE = r ? a : i
                }() : function() {
                    function t(e, t, n, r) {
                        var o = t < 0 ? 1 : 0;
                        if (o && (t = -t),
                        0 === t)
                            e(1 / t > 0 ? 0 : 2147483648, n, r);
                        else if (isNaN(t))
                            e(2143289344, n, r);
                        else if (t > 34028234663852886e22)
                            e((o << 31 | 2139095040) >>> 0, n, r);
                        else if (t < 11754943508222875e-54)
                            e((o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                        else {
                            var s = Math.floor(Math.log(t) / Math.LN2);
                            e((o << 31 | s + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -s) * 8388608)) >>> 0, n, r)
                        }
                    }
                    function i(e, t, n) {
                        var r = e(t, n)
                          , o = 2 * (r >> 31) + 1
                          , s = r >>> 23 & 255
                          , i = 8388607 & r;
                        return 255 === s ? i ? NaN : o * (1 / 0) : 0 === s ? 1401298464324817e-60 * o * i : o * Math.pow(2, s - 150) * (i + 8388608)
                    }
                    e.writeFloatLE = t.bind(null, n),
                    e.writeFloatBE = t.bind(null, r),
                    e.readFloatLE = i.bind(null, o),
                    e.readFloatBE = i.bind(null, s)
                }(),
                "undefined" != typeof Float64Array ? function() {
                    var t = new Float64Array([-0])
                      , n = new Uint8Array(t.buffer)
                      , r = 128 === n[7];
                    function o(e, r, o) {
                        t[0] = e,
                        r[o] = n[0],
                        r[o + 1] = n[1],
                        r[o + 2] = n[2],
                        r[o + 3] = n[3],
                        r[o + 4] = n[4],
                        r[o + 5] = n[5],
                        r[o + 6] = n[6],
                        r[o + 7] = n[7]
                    }
                    function s(e, r, o) {
                        t[0] = e,
                        r[o] = n[7],
                        r[o + 1] = n[6],
                        r[o + 2] = n[5],
                        r[o + 3] = n[4],
                        r[o + 4] = n[3],
                        r[o + 5] = n[2],
                        r[o + 6] = n[1],
                        r[o + 7] = n[0]
                    }
                    function i(e, r) {
                        return n[0] = e[r],
                        n[1] = e[r + 1],
                        n[2] = e[r + 2],
                        n[3] = e[r + 3],
                        n[4] = e[r + 4],
                        n[5] = e[r + 5],
                        n[6] = e[r + 6],
                        n[7] = e[r + 7],
                        t[0]
                    }
                    function a(e, r) {
                        return n[7] = e[r],
                        n[6] = e[r + 1],
                        n[5] = e[r + 2],
                        n[4] = e[r + 3],
                        n[3] = e[r + 4],
                        n[2] = e[r + 5],
                        n[1] = e[r + 6],
                        n[0] = e[r + 7],
                        t[0]
                    }
                    e.writeDoubleLE = r ? o : s,
                    e.writeDoubleBE = r ? s : o,
                    e.readDoubleLE = r ? i : a,
                    e.readDoubleBE = r ? a : i
                }() : function() {
                    function t(e, t, n, r, o, s) {
                        var i = r < 0 ? 1 : 0;
                        if (i && (r = -r),
                        0 === r)
                            e(0, o, s + t),
                            e(1 / r > 0 ? 0 : 2147483648, o, s + n);
                        else if (isNaN(r))
                            e(0, o, s + t),
                            e(2146959360, o, s + n);
                        else if (r > 17976931348623157e292)
                            e(0, o, s + t),
                            e((i << 31 | 2146435072) >>> 0, o, s + n);
                        else {
                            var a;
                            if (r < 22250738585072014e-324)
                                e((a = r / 5e-324) >>> 0, o, s + t),
                                e((i << 31 | a / 4294967296) >>> 0, o, s + n);
                            else {
                                var c = Math.floor(Math.log(r) / Math.LN2);
                                1024 === c && (c = 1023),
                                e(4503599627370496 * (a = r * Math.pow(2, -c)) >>> 0, o, s + t),
                                e((i << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, s + n)
                            }
                        }
                    }
                    function i(e, t, n, r, o) {
                        var s = e(r, o + t)
                          , i = e(r, o + n)
                          , a = 2 * (i >> 31) + 1
                          , c = i >>> 20 & 2047
                          , l = 4294967296 * (1048575 & i) + s;
                        return 2047 === c ? l ? NaN : a * (1 / 0) : 0 === c ? 5e-324 * a * l : a * Math.pow(2, c - 1075) * (l + 4503599627370496)
                    }
                    e.writeDoubleLE = t.bind(null, n, 0, 4),
                    e.writeDoubleBE = t.bind(null, r, 4, 0),
                    e.readDoubleLE = i.bind(null, o, 0, 4),
                    e.readDoubleBE = i.bind(null, s, 4, 0)
                }(),
                e
            }
            function n(e, t, n) {
                t[n] = 255 & e,
                t[n + 1] = e >>> 8 & 255,
                t[n + 2] = e >>> 16 & 255,
                t[n + 3] = e >>> 24
            }
            function r(e, t, n) {
                t[n] = e >>> 24,
                t[n + 1] = e >>> 16 & 255,
                t[n + 2] = e >>> 8 & 255,
                t[n + 3] = 255 & e
            }
            function o(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            }
            function s(e, t) {
                return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }
            e.exports = t(t)
        },
        3396: function(e) {
            e.exports = function(e, t, n) {
                var r = n || 8192
                  , o = r >>> 1
                  , s = null
                  , i = r;
                return function(n) {
                    if (n < 1 || n > o)
                        return e(n);
                    i + n > r && (s = e(r),
                    i = 0);
                    var a = t.call(s, i, i += n);
                    return 7 & i && (i = 1 + (7 | i)),
                    a
                }
            }
        },
        65: function(e, t) {
            var n = t;
            n.length = function(e) {
                for (var t = 0, n = 0, r = 0; r < e.length; ++r)
                    (n = e.charCodeAt(r)) < 128 ? t += 1 : n < 2048 ? t += 2 : 55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r,
                    t += 4) : t += 3;
                return t
            }
            ,
            n.read = function(e, t, n) {
                if (n - t < 1)
                    return "";
                for (var r, o = null, s = [], i = 0; t < n; )
                    (r = e[t++]) < 128 ? s[i++] = r : r > 191 && r < 224 ? s[i++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536,
                    s[i++] = 55296 + (r >> 10),
                    s[i++] = 56320 + (1023 & r)) : s[i++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++],
                    i > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
                    i = 0);
                return o ? (i && o.push(String.fromCharCode.apply(String, s.slice(0, i))),
                o.join("")) : String.fromCharCode.apply(String, s.slice(0, i))
            }
            ,
            n.write = function(e, t, n) {
                for (var r, o, s = n, i = 0; i < e.length; ++i)
                    (r = e.charCodeAt(i)) < 128 ? t[n++] = r : r < 2048 ? (t[n++] = r >> 6 | 192,
                    t[n++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (o = e.charCodeAt(i + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & o),
                    ++i,
                    t[n++] = r >> 18 | 240,
                    t[n++] = r >> 12 & 63 | 128,
                    t[n++] = r >> 6 & 63 | 128,
                    t[n++] = 63 & r | 128) : (t[n++] = r >> 12 | 224,
                    t[n++] = r >> 6 & 63 | 128,
                    t[n++] = 63 & r | 128);
                return n - s
            }
        },
        3292: function(e, t, n) {
            e.exports = n(9488)
        },
        9488: function(e, t, n) {
            var r = t;
            function o() {
                r.util._configure(),
                r.Writer._configure(r.BufferWriter),
                r.Reader._configure(r.BufferReader)
            }
            r.build = "minimal",
            r.Writer = n(2391),
            r.BufferWriter = n(5280),
            r.Reader = n(2583),
            r.BufferReader = n(6640),
            r.util = n(4812),
            r.rpc = n(2909),
            r.roots = n(4751),
            r.configure = o,
            o()
        },
        2583: function(e, t, n) {
            e.exports = c;
            var r, o = n(4812), s = o.LongBits, i = o.utf8;
            function a(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
            }
            function c(e) {
                this.buf = e,
                this.pos = 0,
                this.len = e.length
            }
            var l, u = "undefined" != typeof Uint8Array ? function(e) {
                if (e instanceof Uint8Array || Array.isArray(e))
                    return new c(e);
                throw Error("illegal buffer")
            }
            : function(e) {
                if (Array.isArray(e))
                    return new c(e);
                throw Error("illegal buffer")
            }
            , p = function() {
                return o.Buffer ? function(e) {
                    return (c.create = function(e) {
                        return o.Buffer.isBuffer(e) ? new r(e) : u(e)
                    }
                    )(e)
                }
                : u
            };
            function d() {
                var e = new s(0,0)
                  , t = 0;
                if (!(this.len - this.pos > 4)) {
                    for (; t < 3; ++t) {
                        if (this.pos >= this.len)
                            throw a(this);
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                    }
                    return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0,
                    e
                }
                for (; t < 4; ++t)
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                    this.buf[this.pos++] < 128)
                        return e;
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0,
                e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
                this.buf[this.pos++] < 128)
                    return e;
                if (t = 0,
                this.len - this.pos > 4) {
                    for (; t < 5; ++t)
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                } else
                    for (; t < 5; ++t) {
                        if (this.pos >= this.len)
                            throw a(this);
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                        this.buf[this.pos++] < 128)
                            return e
                    }
                throw Error("invalid varint encoding")
            }
            function h(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
            }
            function _() {
                if (this.pos + 8 > this.len)
                    throw a(this, 8);
                return new s(h(this.buf, this.pos += 4),h(this.buf, this.pos += 4))
            }
            c.create = p(),
            c.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice,
            c.prototype.uint32 = (l = 4294967295,
            function() {
                if (l = (127 & this.buf[this.pos]) >>> 0,
                this.buf[this.pos++] < 128)
                    return l;
                if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0,
                this.buf[this.pos++] < 128)
                    return l;
                if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0,
                this.buf[this.pos++] < 128)
                    return l;
                if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0,
                this.buf[this.pos++] < 128)
                    return l;
                if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0,
                this.buf[this.pos++] < 128)
                    return l;
                if ((this.pos += 5) > this.len)
                    throw this.pos = this.len,
                    a(this, 10);
                return l
            }
            ),
            c.prototype.int32 = function() {
                return 0 | this.uint32()
            }
            ,
            c.prototype.sint32 = function() {
                var e = this.uint32();
                return e >>> 1 ^ -(1 & e) | 0
            }
            ,
            c.prototype.bool = function() {
                return 0 !== this.uint32()
            }
            ,
            c.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len)
                    throw a(this, 4);
                return h(this.buf, this.pos += 4)
            }
            ,
            c.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len)
                    throw a(this, 4);
                return 0 | h(this.buf, this.pos += 4)
            }
            ,
            c.prototype.float = function() {
                if (this.pos + 4 > this.len)
                    throw a(this, 4);
                var e = o.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4,
                e
            }
            ,
            c.prototype.double = function() {
                if (this.pos + 8 > this.len)
                    throw a(this, 4);
                var e = o.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8,
                e
            }
            ,
            c.prototype.bytes = function() {
                var e = this.uint32()
                  , t = this.pos
                  , n = this.pos + e;
                if (n > this.len)
                    throw a(this, e);
                return this.pos += e,
                Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
            }
            ,
            c.prototype.string = function() {
                var e = this.bytes();
                return i.read(e, 0, e.length)
            }
            ,
            c.prototype.skip = function(e) {
                if ("number" == typeof e) {
                    if (this.pos + e > this.len)
                        throw a(this, e);
                    this.pos += e
                } else
                    do {
                        if (this.pos >= this.len)
                            throw a(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }
            ,
            c.prototype.skipType = function(e) {
                switch (e) {
                case 0:
                    this.skip();
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    for (; 4 != (e = 7 & this.uint32()); )
                        this.skipType(e);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + e + " at offset " + this.pos)
                }
                return this
            }
            ,
            c._configure = function(e) {
                r = e,
                c.create = p(),
                r._configure();
                var t = o.Long ? "toLong" : "toNumber";
                o.merge(c.prototype, {
                    int64: function() {
                        return d.call(this)[t](!1)
                    },
                    uint64: function() {
                        return d.call(this)[t](!0)
                    },
                    sint64: function() {
                        return d.call(this).zzDecode()[t](!1)
                    },
                    fixed64: function() {
                        return _.call(this)[t](!0)
                    },
                    sfixed64: function() {
                        return _.call(this)[t](!1)
                    }
                })
            }
        },
        6640: function(e, t, n) {
            e.exports = s;
            var r = n(2583);
            (s.prototype = Object.create(r.prototype)).constructor = s;
            var o = n(4812);
            function s(e) {
                r.call(this, e)
            }
            s._configure = function() {
                o.Buffer && (s.prototype._slice = o.Buffer.prototype.slice)
            }
            ,
            s.prototype.string = function() {
                var e = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
            }
            ,
            s._configure()
        },
        4751: function(e) {
            e.exports = {}
        },
        2909: function(e, t, n) {
            t.Service = n(8197)
        },
        8197: function(e, t, n) {
            e.exports = o;
            var r = n(4812);
            function o(e, t, n) {
                if ("function" != typeof e)
                    throw TypeError("rpcImpl must be a function");
                r.EventEmitter.call(this),
                this.rpcImpl = e,
                this.requestDelimited = Boolean(t),
                this.responseDelimited = Boolean(n)
            }
            (o.prototype = Object.create(r.EventEmitter.prototype)).constructor = o,
            o.prototype.rpcCall = function e(t, n, o, s, i) {
                if (!s)
                    throw TypeError("request must be specified");
                var a = this;
                if (!i)
                    return r.asPromise(e, a, t, n, o, s);
                if (a.rpcImpl)
                    try {
                        return a.rpcImpl(t, n[a.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), (function(e, n) {
                            if (e)
                                return a.emit("error", e, t),
                                i(e);
                            if (null !== n) {
                                if (!(n instanceof o))
                                    try {
                                        n = o[a.responseDelimited ? "decodeDelimited" : "decode"](n)
                                    } catch (e) {
                                        return a.emit("error", e, t),
                                        i(e)
                                    }
                                return a.emit("data", n, t),
                                i(null, n)
                            }
                            a.end(!0)
                        }
                        ))
                    } catch (e) {
                        return a.emit("error", e, t),
                        void setTimeout((function() {
                            i(e)
                        }
                        ), 0)
                    }
                else
                    setTimeout((function() {
                        i(Error("already ended"))
                    }
                    ), 0)
            }
            ,
            o.prototype.end = function(e) {
                return this.rpcImpl && (e || this.rpcImpl(null, null, null),
                this.rpcImpl = null,
                this.emit("end").off()),
                this
            }
        },
        8773: function(e, t, n) {
            e.exports = o;
            var r = n(4812);
            function o(e, t) {
                this.lo = e >>> 0,
                this.hi = t >>> 0
            }
            var s = o.zero = new o(0,0);
            s.toNumber = function() {
                return 0
            }
            ,
            s.zzEncode = s.zzDecode = function() {
                return this
            }
            ,
            s.length = function() {
                return 1
            }
            ;
            var i = o.zeroHash = "\0\0\0\0\0\0\0\0";
            o.fromNumber = function(e) {
                if (0 === e)
                    return s;
                var t = e < 0;
                t && (e = -e);
                var n = e >>> 0
                  , r = (e - n) / 4294967296 >>> 0;
                return t && (r = ~r >>> 0,
                n = ~n >>> 0,
                ++n > 4294967295 && (n = 0,
                ++r > 4294967295 && (r = 0))),
                new o(n,r)
            }
            ,
            o.from = function(e) {
                if ("number" == typeof e)
                    return o.fromNumber(e);
                if (r.isString(e)) {
                    if (!r.Long)
                        return o.fromNumber(parseInt(e, 10));
                    e = r.Long.fromString(e)
                }
                return e.low || e.high ? new o(e.low >>> 0,e.high >>> 0) : s
            }
            ,
            o.prototype.toNumber = function(e) {
                if (!e && this.hi >>> 31) {
                    var t = 1 + ~this.lo >>> 0
                      , n = ~this.hi >>> 0;
                    return t || (n = n + 1 >>> 0),
                    -(t + 4294967296 * n)
                }
                return this.lo + 4294967296 * this.hi
            }
            ,
            o.prototype.toLong = function(e) {
                return r.Long ? new r.Long(0 | this.lo,0 | this.hi,Boolean(e)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(e)
                }
            }
            ;
            var a = String.prototype.charCodeAt;
            o.fromHash = function(e) {
                return e === i ? s : new o((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0,(a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0)
            }
            ,
            o.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }
            ,
            o.prototype.zzEncode = function() {
                var e = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
                this.lo = (this.lo << 1 ^ e) >>> 0,
                this
            }
            ,
            o.prototype.zzDecode = function() {
                var e = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
                this.hi = (this.hi >>> 1 ^ e) >>> 0,
                this
            }
            ,
            o.prototype.length = function() {
                var e = this.lo
                  , t = (this.lo >>> 28 | this.hi << 4) >>> 0
                  , n = this.hi >>> 24;
                return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
        },
        4812: function(e, t, n) {
            var r = t;
            function o(e, t, n) {
                for (var r = Object.keys(t), o = 0; o < r.length; ++o)
                    void 0 !== e[r[o]] && n || (e[r[o]] = t[r[o]]);
                return e
            }
            function s(e) {
                function t(e, n) {
                    if (!(this instanceof t))
                        return new t(e,n);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return e
                        }
                    }),
                    Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                        value: (new Error).stack || ""
                    }),
                    n && o(this, n)
                }
                return (t.prototype = Object.create(Error.prototype)).constructor = t,
                Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return e
                    }
                }),
                t.prototype.toString = function() {
                    return this.name + ": " + this.message
                }
                ,
                t
            }
            r.asPromise = n(6559),
            r.base64 = n(3081),
            r.EventEmitter = n(4344),
            r.float = n(6964),
            r.utf8 = n(65),
            r.pool = n(3396),
            r.LongBits = n(8773),
            r.global = "undefined" != typeof window && window || void 0 !== n.g && n.g || "undefined" != typeof self && self || this,
            r.emptyArray = Object.freeze ? Object.freeze([]) : [],
            r.emptyObject = Object.freeze ? Object.freeze({}) : {},
            r.isNode = Boolean(r.global.process && r.global.process.versions && r.global.process.versions.node),
            r.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }
            ,
            r.isString = function(e) {
                return "string" == typeof e || e instanceof String
            }
            ,
            r.isObject = function(e) {
                return e && "object" == typeof e
            }
            ,
            r.isset = r.isSet = function(e, t) {
                var n = e[t];
                return !(null == n || !e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
            }
            ,
            r.Buffer = null,
            r._Buffer_from = null,
            r._Buffer_allocUnsafe = null,
            r.newBuffer = function(e) {
                return "number" == typeof e ? r.Buffer ? r._Buffer_allocUnsafe(e) : new r.Array(e) : r.Buffer ? r._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
            }
            ,
            r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long,
            r.key2Re = /^true|false|0|1$/,
            r.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
            r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
            r.longToHash = function(e) {
                return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash
            }
            ,
            r.longFromHash = function(e, t) {
                var n = r.LongBits.fromHash(e);
                return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t))
            }
            ,
            r.merge = o,
            r.lcFirst = function(e) {
                return e.charAt(0).toLowerCase() + e.substring(1)
            }
            ,
            r.newError = s,
            r.ProtocolError = s("ProtocolError"),
            r.oneOfGetter = function(e) {
                for (var t = {}, n = 0; n < e.length; ++n)
                    t[e[n]] = 1;
                return function() {
                    for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
                        if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]])
                            return e[n]
                }
            }
            ,
            r.oneOfSetter = function(e) {
                return function(t) {
                    for (var n = 0; n < e.length; ++n)
                        e[n] !== t && delete this[e[n]]
                }
            }
            ,
            r.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            },
            r._configure = function() {
                var e = r.Buffer;
                e ? (r._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
                    return new e(t,n)
                }
                ,
                r._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                    return new e(t)
                }
                ) : r._Buffer_from = r._Buffer_allocUnsafe = null
            }
        },
        2391: function(e, t, n) {
            e.exports = p;
            var r, o = n(4812), s = o.LongBits, i = o.base64, a = o.utf8;
            function c(e, t, n) {
                this.fn = e,
                this.len = t,
                this.next = void 0,
                this.val = n
            }
            function l() {}
            function u(e) {
                this.head = e.head,
                this.tail = e.tail,
                this.len = e.len,
                this.next = e.states
            }
            function p() {
                this.len = 0,
                this.head = new c(l,0,0),
                this.tail = this.head,
                this.states = null
            }
            var d = function() {
                return o.Buffer ? function() {
                    return (p.create = function() {
                        return new r
                    }
                    )()
                }
                : function() {
                    return new p
                }
            };
            function h(e, t, n) {
                t[n] = 255 & e
            }
            function _(e, t) {
                this.len = e,
                this.next = void 0,
                this.val = t
            }
            function f(e, t, n) {
                for (; e.hi; )
                    t[n++] = 127 & e.lo | 128,
                    e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0,
                    e.hi >>>= 7;
                for (; e.lo > 127; )
                    t[n++] = 127 & e.lo | 128,
                    e.lo = e.lo >>> 7;
                t[n++] = e.lo
            }
            function g(e, t, n) {
                t[n] = 255 & e,
                t[n + 1] = e >>> 8 & 255,
                t[n + 2] = e >>> 16 & 255,
                t[n + 3] = e >>> 24
            }
            p.create = d(),
            p.alloc = function(e) {
                return new o.Array(e)
            }
            ,
            o.Array !== Array && (p.alloc = o.pool(p.alloc, o.Array.prototype.subarray)),
            p.prototype._push = function(e, t, n) {
                return this.tail = this.tail.next = new c(e,t,n),
                this.len += t,
                this
            }
            ,
            _.prototype = Object.create(c.prototype),
            _.prototype.fn = function(e, t, n) {
                for (; e > 127; )
                    t[n++] = 127 & e | 128,
                    e >>>= 7;
                t[n] = e
            }
            ,
            p.prototype.uint32 = function(e) {
                return this.len += (this.tail = this.tail.next = new _((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5,e)).len,
                this
            }
            ,
            p.prototype.int32 = function(e) {
                return e < 0 ? this._push(f, 10, s.fromNumber(e)) : this.uint32(e)
            }
            ,
            p.prototype.sint32 = function(e) {
                return this.uint32((e << 1 ^ e >> 31) >>> 0)
            }
            ,
            p.prototype.uint64 = function(e) {
                var t = s.from(e);
                return this._push(f, t.length(), t)
            }
            ,
            p.prototype.int64 = p.prototype.uint64,
            p.prototype.sint64 = function(e) {
                var t = s.from(e).zzEncode();
                return this._push(f, t.length(), t)
            }
            ,
            p.prototype.bool = function(e) {
                return this._push(h, 1, e ? 1 : 0)
            }
            ,
            p.prototype.fixed32 = function(e) {
                return this._push(g, 4, e >>> 0)
            }
            ,
            p.prototype.sfixed32 = p.prototype.fixed32,
            p.prototype.fixed64 = function(e) {
                var t = s.from(e);
                return this._push(g, 4, t.lo)._push(g, 4, t.hi)
            }
            ,
            p.prototype.sfixed64 = p.prototype.fixed64,
            p.prototype.float = function(e) {
                return this._push(o.float.writeFloatLE, 4, e)
            }
            ,
            p.prototype.double = function(e) {
                return this._push(o.float.writeDoubleLE, 8, e)
            }
            ;
            var y = o.Array.prototype.set ? function(e, t, n) {
                t.set(e, n)
            }
            : function(e, t, n) {
                for (var r = 0; r < e.length; ++r)
                    t[n + r] = e[r]
            }
            ;
            p.prototype.bytes = function(e) {
                var t = e.length >>> 0;
                if (!t)
                    return this._push(h, 1, 0);
                if (o.isString(e)) {
                    var n = p.alloc(t = i.length(e));
                    i.decode(e, n, 0),
                    e = n
                }
                return this.uint32(t)._push(y, t, e)
            }
            ,
            p.prototype.string = function(e) {
                var t = a.length(e);
                return t ? this.uint32(t)._push(a.write, t, e) : this._push(h, 1, 0)
            }
            ,
            p.prototype.fork = function() {
                return this.states = new u(this),
                this.head = this.tail = new c(l,0,0),
                this.len = 0,
                this
            }
            ,
            p.prototype.reset = function() {
                return this.states ? (this.head = this.states.head,
                this.tail = this.states.tail,
                this.len = this.states.len,
                this.states = this.states.next) : (this.head = this.tail = new c(l,0,0),
                this.len = 0),
                this
            }
            ,
            p.prototype.ldelim = function() {
                var e = this.head
                  , t = this.tail
                  , n = this.len;
                return this.reset().uint32(n),
                n && (this.tail.next = e.next,
                this.tail = t,
                this.len += n),
                this
            }
            ,
            p.prototype.finish = function() {
                for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e; )
                    e.fn(e.val, t, n),
                    n += e.len,
                    e = e.next;
                return t
            }
            ,
            p._configure = function(e) {
                r = e,
                p.create = d(),
                r._configure()
            }
        },
        5280: function(e, t, n) {
            e.exports = s;
            var r = n(2391);
            (s.prototype = Object.create(r.prototype)).constructor = s;
            var o = n(4812);
            function s() {
                r.call(this)
            }
            function i(e, t, n) {
                e.length < 40 ? o.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n)
            }
            s._configure = function() {
                s.alloc = o._Buffer_allocUnsafe,
                s.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(e, t, n) {
                    t.set(e, n)
                }
                : function(e, t, n) {
                    if (e.copy)
                        e.copy(t, n, 0, e.length);
                    else
                        for (var r = 0; r < e.length; )
                            t[n++] = e[r++]
                }
            }
            ,
            s.prototype.bytes = function(e) {
                o.isString(e) && (e = o._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return this.uint32(t),
                t && this._push(s.writeBytesBuffer, t, e),
                this
            }
            ,
            s.prototype.string = function(e) {
                var t = o.Buffer.byteLength(e);
                return this.uint32(t),
                t && this._push(i, t, e),
                this
            }
            ,
            s._configure()
        },
        1176: function(e, t, n) {
            var r = n(2221).Zz;
            t.tY = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length)
                    return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
            }
            ,
            "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
        },
        2221: function(e, t, n) {
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function i(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            n.d(t, {
                Tw: function() {
                    return _
                },
                HY: function() {
                    return d
                },
                Zz: function() {
                    return h
                },
                y$: function() {
                    return p
                }
            });
            var a = "function" == typeof Symbol && Symbol.observable || "@@observable"
              , c = function() {
                return Math.random().toString(36).substring(7).split("").join(".")
            }
              , l = {
                INIT: "@@redux/INIT" + c(),
                REPLACE: "@@redux/REPLACE" + c(),
                PROBE_UNKNOWN_ACTION: function() {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + c()
                }
            };
            function u(e) {
                if ("object" != typeof e || null === e)
                    return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }
            function p(e, t, n) {
                var r;
                if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3])
                    throw new Error(i(0));
                if ("function" == typeof t && void 0 === n && (n = t,
                t = void 0),
                void 0 !== n) {
                    if ("function" != typeof n)
                        throw new Error(i(1));
                    return n(p)(e, t)
                }
                if ("function" != typeof e)
                    throw new Error(i(2));
                var o = e
                  , s = t
                  , c = []
                  , d = c
                  , h = !1;
                function _() {
                    d === c && (d = c.slice())
                }
                function f() {
                    if (h)
                        throw new Error(i(3));
                    return s
                }
                function g(e) {
                    if ("function" != typeof e)
                        throw new Error(i(4));
                    if (h)
                        throw new Error(i(5));
                    var t = !0;
                    return _(),
                    d.push(e),
                    function() {
                        if (t) {
                            if (h)
                                throw new Error(i(6));
                            t = !1,
                            _();
                            var n = d.indexOf(e);
                            d.splice(n, 1),
                            c = null
                        }
                    }
                }
                function y(e) {
                    if (!u(e))
                        throw new Error(i(7));
                    if (void 0 === e.type)
                        throw new Error(i(8));
                    if (h)
                        throw new Error(i(9));
                    try {
                        h = !0,
                        s = o(s, e)
                    } finally {
                        h = !1
                    }
                    for (var t = c = d, n = 0; n < t.length; n++) {
                        (0,
                        t[n])()
                    }
                    return e
                }
                function b(e) {
                    if ("function" != typeof e)
                        throw new Error(i(10));
                    o = e,
                    y({
                        type: l.REPLACE
                    })
                }
                function m() {
                    var e, t = g;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" != typeof e || null === e)
                                throw new Error(i(11));
                            function n() {
                                e.next && e.next(f())
                            }
                            return n(),
                            {
                                unsubscribe: t(n)
                            }
                        }
                    })[a] = function() {
                        return this
                    }
                    ,
                    e
                }
                return y({
                    type: l.INIT
                }),
                (r = {
                    dispatch: y,
                    subscribe: g,
                    getState: f,
                    replaceReducer: b
                })[a] = m,
                r
            }
            function d(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    0,
                    "function" == typeof e[o] && (n[o] = e[o])
                }
                var s, a = Object.keys(n);
                try {
                    !function(e) {
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            if (void 0 === n(void 0, {
                                type: l.INIT
                            }))
                                throw new Error(i(12));
                            if (void 0 === n(void 0, {
                                type: l.PROBE_UNKNOWN_ACTION()
                            }))
                                throw new Error(i(13))
                        }
                        ))
                    }(n)
                } catch (e) {
                    s = e
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}),
                    s)
                        throw s;
                    for (var r = !1, o = {}, c = 0; c < a.length; c++) {
                        var l = a[c]
                          , u = n[l]
                          , p = e[l]
                          , d = u(p, t);
                        if (void 0 === d) {
                            t && t.type;
                            throw new Error(i(14))
                        }
                        o[l] = d,
                        r = r || d !== p
                    }
                    return (r = r || a.length !== Object.keys(e).length) ? o : e
                }
            }
            function h() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                }
                : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }
                ))
            }
            function _() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments)
                          , r = function() {
                            throw new Error(i(15))
                        }
                          , o = {
                            getState: n.getState,
                            dispatch: function() {
                                return r.apply(void 0, arguments)
                            }
                        }
                          , a = t.map((function(e) {
                            return e(o)
                        }
                        ));
                        return r = h.apply(void 0, a)(n.dispatch),
                        s(s({}, n), {}, {
                            dispatch: r
                        })
                    }
                }
            }
        },
        7183: function(e, t, n) {
            n.d(t, {
                Ax: function() {
                    return a
                },
                BA: function() {
                    return c
                },
                BH: function() {
                    return d
                },
                Ez: function() {
                    return o
                },
                Fs: function() {
                    return l
                },
                Gj: function() {
                    return j
                },
                Gm: function() {
                    return b
                },
                Md: function() {
                    return v
                },
                OQ: function() {
                    return s
                },
                PI: function() {
                    return p
                },
                U3: function() {
                    return i
                },
                UN: function() {
                    return y
                },
                WV: function() {
                    return g
                },
                Xp: function() {
                    return w
                },
                YF: function() {
                    return O
                },
                Yo: function() {
                    return _
                },
                av: function() {
                    return h
                },
                b$: function() {
                    return f
                },
                nW: function() {
                    return m
                },
                uK: function() {
                    return x
                },
                zh: function() {
                    return u
                }
            });
            var r = n(8580);
            const o = "https://collector.appconsent.io"
              , s = "https://cdn.appconsent.io"
              , i = "refuseAll"
              , a = "acceptAll"
              , c = "continueWithoutAccepting"
              , l = "openPrivacyCenter"
              , u = "sfbx_uuid"
              , p = {
                MIXED: 2,
                ALLOWED: 1,
                PENDING: 0,
                DISALLOWED: -1
            }
              , d = {
                UNKNOWN: 0,
                ACCEPT: 1,
                DENY: 2
            }
              , h = r.ac.Consent.EnumConsentType
              , _ = r.ac.Vendorlist.Consentable.EnumConsentableType
              , f = {
                purpose: 1,
                extraPurpose: 2,
                specialFeature: 3,
                iabVendor: 4,
                extraVendor: 5
            }
              , g = {
                [f.purpose]: _.PURPOSE,
                [f.extraPurpose]: _.PURPOSE,
                [f.specialFeature]: _.SPECIAL_FEATURE
            }
              , y = {
                BANNER: "banner",
                CONSENTABLE: "consentable",
                MANDATORY: "mandatory",
                MANDATORIES: "mandatories",
                PRIVACY: "privacy",
                SUCCESS: "success",
                VENDOR: "vendor",
                VENDORS: "vendors",
                VENDORS_INTRO: "vendorsIntro",
                STACK: "stack",
                PROMPT: "prompt",
                PRIVACY_POLICY: "privacyPolicy"
            }
              , b = {
                BOTTOM: 0,
                MODAL: 1
            }
              , m = 755
              , O = {
                ctaLayout: {
                    0: [a, l],
                    1: [l, a],
                    2: [i, a, l],
                    3: [a, i, l],
                    4: [l, i, a],
                    5: [l, a, i],
                    6: [i, l, a],
                    7: [a, l, i]
                }
            }
              , v = {
                ctaLayout: 0,
                useBanner: !1,
                useSuccessScreen: !1,
                not_banner_display_purposes_list: !1,
                colors: {},
                images: {}
            }
              , w = () => {
                const e = e => 1 === e ? "on" : "off"
                  , t = (e=!0) => {
                    const t = r.ac.Vendorlist.Consentable.EnumConsentableType;
                    return {
                        [t.PURPOSE]: "p",
                        [t.SPECIAL_FEATURE]: "f"
                    }[e]
                }
                ;
                return {
                    NEW_IMPLEMENTATION: "new_implementation",
                    LOADER_USED: "loader_used",
                    DISPLAY_CMP: "cmp_display",
                    CLASSIC_BANNER: "classic_banner",
                    CLEAR_BANNER: "clear_banner",
                    DISPLAY_WIDGET: "privacy_center_display",
                    SEE_PARTNERS: "layer1_click_partners",
                    SEE_PRIVACY_POLICY: "layer1_click_privacy_policy",
                    SKIP: "layer1_click_skip",
                    SEE_MANDATORY_PURPOSES: "layer2_click_mp",
                    SEE_MANDATORY_FEATURES: "layer2_click_mf",
                    REFINE_BY_PARTNER: "layer2_click_rbp",
                    SAVE: "layer2_click_save",
                    GO_TO_SETTINGS: "layer1_click_settings",
                    GO_BACK: "layer2_click_back",
                    CALL_SETTER_ACCEPT: "api_aa",
                    CALL_SETTER_DENY: "api_da",
                    CALL_SETTER_FAKE_DENY: "api_fda",
                    CALL_SETTER_UPDATE_P12348: "api_us_p12348",
                    CALL_SETTER_UPDATE_ACCEPTED: "api_us_aa",
                    CALL_SETTER_UPDATE_DENIED: "api_us_da",
                    REACQUIRE_CONSENT: "reacquired_consent",
                    WITHDRAW_CONSENT: "withdraw_consent",
                    goBackFromStack: e => `layer2_s${e}_click_back`,
                    denyAll: (e=1) => `layer${e}_click_da`,
                    acceptAll: (e=1) => `layer${e}_click_aa`,
                    seeMoreOnConsentable: (e, n) => `layer2_click_${t(e)}${n}_mi`,
                    seeMoreOnStack: e => `layer2_click_s${e}_mi`,
                    seeMoreOnStackConsentable: (e, n, r) => `layer2_s${e}_click_${t(n)}${r}_mi`,
                    openConsentableModal: (e, n) => `layer2_${t(n)}${e}_click_sm`,
                    toggleConsentable: (n, r, o) => `layer2_switch_${t(n)}${r}_${e(o)}`,
                    toggleStack: (t, n) => `layer2_switch_s${t}_${e(n)}`,
                    toggleStackConsentable: (n, r, o, s) => `layer2_s${n}_switch_${t(r)}${o}_${e(s)}`,
                    objectLegint: (n, r, o) => `layer2_${t(n)}${r}_object_${e(o)}`
                }
            }
              , x = {
                NO_SHOW: "no_show",
                DEBUG: "debug"
            }
              , j = {
                DISALLOW_ALL: "disallowAll",
                ALLOW_ALL: "allowAll"
            }
        },
        8580: function(e, t, n) {
            n.d(t, {
                ac: function() {
                    return a
                }
            });
            var r = n(3292);
            const o = r.Writer
              , s = r.util
              , i = r.roots.default || (r.roots.default = {})
              , a = i.ac = ( () => {
                const e = {};
                return e.AppConsent = function() {
                    function e(e, t, n) {
                        r.rpc.Service.call(this, e, t, n)
                    }
                    return (e.prototype = Object.create(r.rpc.Service.prototype)).constructor = e,
                    e.create = function(e, t, n) {
                        return new this(e,t,n)
                    }
                    ,
                    Object.defineProperty(e.prototype.hello = function e(t, n) {
                        return this.rpcCall(e, i.ac.HelloRequest, i.ac.HelloReply, t, n)
                    }
                    , "name", {
                        value: "Hello"
                    }),
                    Object.defineProperty(e.prototype.save = function e(t, n) {
                        return this.rpcCall(e, i.ac.SaveRequest, i.ac.SaveReply, t, n)
                    }
                    , "name", {
                        value: "Save"
                    }),
                    Object.defineProperty(e.prototype.history = function e(t, n) {
                        return this.rpcCall(e, i.ac.HistoryRequest, i.ac.HistoryReply, t, n)
                    }
                    , "name", {
                        value: "History"
                    }),
                    Object.defineProperty(e.prototype.externalToUuid = function e(t, n) {
                        return this.rpcCall(e, i.ac.ExternalToUuidRequest, i.ac.ExternalToUuidReply, t, n)
                    }
                    , "name", {
                        value: "ExternalToUuid"
                    }),
                    Object.defineProperty(e.prototype.uuidToExternal = function e(t, n) {
                        return this.rpcCall(e, i.ac.UuidToExternalRequest, i.ac.UuidToExternalReply, t, n)
                    }
                    , "name", {
                        value: "UuidToExternal"
                    }),
                    Object.defineProperty(e.prototype.ship2 = function e(t, n) {
                        return this.rpcCall(e, i.ac.ShipRequest, i.ac.ShipReply, t, n)
                    }
                    , "name", {
                        value: "Ship2"
                    }),
                    Object.defineProperty(e.prototype.saveExternal = function e(t, n) {
                        return this.rpcCall(e, i.ac.SaveExternalRequest, i.ac.SaveExternalReply, t, n)
                    }
                    , "name", {
                        value: "SaveExternal"
                    }),
                    Object.defineProperty(e.prototype.saveFloatingFloatingExtraPurpose = function e(t, n) {
                        return this.rpcCall(e, i.ac.SaveFloatingExtraPurposeRequest, i.ac.SaveFloatingExtraPurposeReply, t, n)
                    }
                    , "name", {
                        value: "SaveFloatingFloatingExtraPurpose"
                    }),
                    Object.defineProperty(e.prototype.translateVendorCookieRetention = function e(t, n) {
                        return this.rpcCall(e, i.ac.TranslateVendorCookieRetentionRequest, i.ac.TranslateVendorCookieRetentionReply, t, n)
                    }
                    , "name", {
                        value: "TranslateVendorCookieRetention"
                    }),
                    Object.defineProperty(e.prototype.cfu = function e(t, n) {
                        return this.rpcCall(e, i.ac.CfuRequest, i.ac.CfuReply, t, n)
                    }
                    , "name", {
                        value: "Cfu"
                    }),
                    e
                }(),
                e.HelloRequest = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.uuid = "",
                    e.prototype.language = "",
                    e.prototype.external_ids = s.emptyObject,
                    e.prototype.noConfiguration = !1,
                    e.prototype.noVendorList = !1,
                    e.prototype.noConsent = !1,
                    e.prototype.noScriptInjector = !1,
                    e.prototype.noCookie = !1,
                    e.prototype.cmp_hash = "",
                    e.prototype.cmp_hash_version = 0,
                    e.prototype.agent = "",
                    e.prototype.source = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(26).string(e.language),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(34).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return null != e.noConfiguration && Object.hasOwnProperty.call(e, "noConfiguration") && t.uint32(40).bool(e.noConfiguration),
                        null != e.noVendorList && Object.hasOwnProperty.call(e, "noVendorList") && t.uint32(48).bool(e.noVendorList),
                        null != e.noConsent && Object.hasOwnProperty.call(e, "noConsent") && t.uint32(56).bool(e.noConsent),
                        null != e.cmp_hash && Object.hasOwnProperty.call(e, "cmp_hash") && t.uint32(66).string(e.cmp_hash),
                        null != e.cmp_hash_version && Object.hasOwnProperty.call(e, "cmp_hash_version") && t.uint32(72).uint32(e.cmp_hash_version),
                        null != e.noScriptInjector && Object.hasOwnProperty.call(e, "noScriptInjector") && t.uint32(80).bool(e.noScriptInjector),
                        null != e.noCookie && Object.hasOwnProperty.call(e, "noCookie") && t.uint32(96).bool(e.noCookie),
                        null != e.agent && Object.hasOwnProperty.call(e, "agent") && t.uint32(722).string(e.agent),
                        null != e.source && Object.hasOwnProperty.call(e, "source") && t.uint32(730).string(e.source),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.HelloRequest)
                            return e;
                        var t = new i.ac.HelloRequest;
                        if (null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.language && (t.language = String(e.language)),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.HelloRequest.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        return null != e.noConfiguration && (t.noConfiguration = Boolean(e.noConfiguration)),
                        null != e.noVendorList && (t.noVendorList = Boolean(e.noVendorList)),
                        null != e.noConsent && (t.noConsent = Boolean(e.noConsent)),
                        null != e.noScriptInjector && (t.noScriptInjector = Boolean(e.noScriptInjector)),
                        null != e.noCookie && (t.noCookie = Boolean(e.noCookie)),
                        null != e.cmp_hash && (t.cmp_hash = String(e.cmp_hash)),
                        null != e.cmp_hash_version && (t.cmp_hash_version = e.cmp_hash_version >>> 0),
                        null != e.agent && (t.agent = String(e.agent)),
                        null != e.source && (t.source = String(e.source)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.app_key = "",
                        r.uuid = "",
                        r.language = "",
                        r.noConfiguration = !1,
                        r.noVendorList = !1,
                        r.noConsent = !1,
                        r.cmp_hash = "",
                        r.cmp_hash_version = 0,
                        r.noScriptInjector = !1,
                        r.noCookie = !1,
                        r.agent = "",
                        r.source = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.language && e.hasOwnProperty("language") && (r.language = e.language),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return null != e.noConfiguration && e.hasOwnProperty("noConfiguration") && (r.noConfiguration = e.noConfiguration),
                        null != e.noVendorList && e.hasOwnProperty("noVendorList") && (r.noVendorList = e.noVendorList),
                        null != e.noConsent && e.hasOwnProperty("noConsent") && (r.noConsent = e.noConsent),
                        null != e.cmp_hash && e.hasOwnProperty("cmp_hash") && (r.cmp_hash = e.cmp_hash),
                        null != e.cmp_hash_version && e.hasOwnProperty("cmp_hash_version") && (r.cmp_hash_version = e.cmp_hash_version),
                        null != e.noScriptInjector && e.hasOwnProperty("noScriptInjector") && (r.noScriptInjector = e.noScriptInjector),
                        null != e.noCookie && e.hasOwnProperty("noCookie") && (r.noCookie = e.noCookie),
                        null != e.agent && e.hasOwnProperty("agent") && (r.agent = e.agent),
                        null != e.source && e.hasOwnProperty("source") && (r.source = e.source),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.HelloReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.uuid = "",
                    e.prototype.configuration = null,
                    e.prototype.consent = null,
                    e.prototype.consent_floating_extra_purpose = null,
                    e.prototype.vendorlist = null,
                    e.prototype.cmp_hash_version = 0,
                    e.prototype.cmp_hash = "",
                    e.prototype.floating_extra_id = "",
                    e.prototype.floating_version = 0,
                    e.prototype.country = null,
                    e.prototype.script_injector = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.configuration && Object.hasOwnProperty.call(e, "configuration") && i.ac.Configuration.encode(e.configuration, t.uint32(26).fork()).ldelim(),
                        null != e.consent && Object.hasOwnProperty.call(e, "consent") && i.ac.Consent.encode(e.consent, t.uint32(34).fork()).ldelim(),
                        null != e.vendorlist && Object.hasOwnProperty.call(e, "vendorlist") && i.ac.Vendorlist.encode(e.vendorlist, t.uint32(42).fork()).ldelim(),
                        null != e.cmp_hash_version && Object.hasOwnProperty.call(e, "cmp_hash_version") && t.uint32(48).uint32(e.cmp_hash_version),
                        null != e.cmp_hash && Object.hasOwnProperty.call(e, "cmp_hash") && t.uint32(58).string(e.cmp_hash),
                        null != e.consent_floating_extra_purpose && Object.hasOwnProperty.call(e, "consent_floating_extra_purpose") && i.ac.ConsentFloatingExtraPurpose.encode(e.consent_floating_extra_purpose, t.uint32(66).fork()).ldelim(),
                        null != e.floating_extra_id && Object.hasOwnProperty.call(e, "floating_extra_id") && t.uint32(74).string(e.floating_extra_id),
                        null != e.floating_version && Object.hasOwnProperty.call(e, "floating_version") && t.uint32(80).uint32(e.floating_version),
                        null != e.country && Object.hasOwnProperty.call(e, "country") && i.ac.Country.encode(e.country, t.uint32(90).fork()).ldelim(),
                        null != e.script_injector && Object.hasOwnProperty.call(e, "script_injector") && i.ac.ScriptsInjector.encode(e.script_injector, t.uint32(98).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.HelloReply)
                            return e;
                        var t = new i.ac.HelloReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.HelloReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.configuration) {
                            if ("object" != typeof e.configuration)
                                throw TypeError(".ac.HelloReply.configuration: object expected");
                            t.configuration = i.ac.Configuration.fromObject(e.configuration)
                        }
                        if (null != e.consent) {
                            if ("object" != typeof e.consent)
                                throw TypeError(".ac.HelloReply.consent: object expected");
                            t.consent = i.ac.Consent.fromObject(e.consent)
                        }
                        if (null != e.consent_floating_extra_purpose) {
                            if ("object" != typeof e.consent_floating_extra_purpose)
                                throw TypeError(".ac.HelloReply.consent_floating_extra_purpose: object expected");
                            t.consent_floating_extra_purpose = i.ac.ConsentFloatingExtraPurpose.fromObject(e.consent_floating_extra_purpose)
                        }
                        if (null != e.vendorlist) {
                            if ("object" != typeof e.vendorlist)
                                throw TypeError(".ac.HelloReply.vendorlist: object expected");
                            t.vendorlist = i.ac.Vendorlist.fromObject(e.vendorlist)
                        }
                        if (null != e.cmp_hash_version && (t.cmp_hash_version = e.cmp_hash_version >>> 0),
                        null != e.cmp_hash && (t.cmp_hash = String(e.cmp_hash)),
                        null != e.floating_extra_id && (t.floating_extra_id = String(e.floating_extra_id)),
                        null != e.floating_version && (t.floating_version = e.floating_version >>> 0),
                        null != e.country) {
                            if ("object" != typeof e.country)
                                throw TypeError(".ac.HelloReply.country: object expected");
                            t.country = i.ac.Country.fromObject(e.country)
                        }
                        if (null != e.script_injector) {
                            if ("object" != typeof e.script_injector)
                                throw TypeError(".ac.HelloReply.script_injector: object expected");
                            t.script_injector = i.ac.ScriptsInjector.fromObject(e.script_injector)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null,
                        n.uuid = "",
                        n.configuration = null,
                        n.consent = null,
                        n.vendorlist = null,
                        n.cmp_hash_version = 0,
                        n.cmp_hash = "",
                        n.consent_floating_extra_purpose = null,
                        n.floating_extra_id = "",
                        n.floating_version = 0,
                        n.country = null,
                        n.script_injector = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.configuration && e.hasOwnProperty("configuration") && (n.configuration = i.ac.Configuration.toObject(e.configuration, t)),
                        null != e.consent && e.hasOwnProperty("consent") && (n.consent = i.ac.Consent.toObject(e.consent, t)),
                        null != e.vendorlist && e.hasOwnProperty("vendorlist") && (n.vendorlist = i.ac.Vendorlist.toObject(e.vendorlist, t)),
                        null != e.cmp_hash_version && e.hasOwnProperty("cmp_hash_version") && (n.cmp_hash_version = e.cmp_hash_version),
                        null != e.cmp_hash && e.hasOwnProperty("cmp_hash") && (n.cmp_hash = e.cmp_hash),
                        null != e.consent_floating_extra_purpose && e.hasOwnProperty("consent_floating_extra_purpose") && (n.consent_floating_extra_purpose = i.ac.ConsentFloatingExtraPurpose.toObject(e.consent_floating_extra_purpose, t)),
                        null != e.floating_extra_id && e.hasOwnProperty("floating_extra_id") && (n.floating_extra_id = e.floating_extra_id),
                        null != e.floating_version && e.hasOwnProperty("floating_version") && (n.floating_version = e.floating_version),
                        null != e.country && e.hasOwnProperty("country") && (n.country = i.ac.Country.toObject(e.country, t)),
                        null != e.script_injector && e.hasOwnProperty("script_injector") && (n.script_injector = i.ac.ScriptsInjector.toObject(e.script_injector, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveRequest = function() {
                    function e(e) {
                        if (this.events = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.uuid = "",
                    e.prototype.consent = null,
                    e.prototype.events = s.emptyArray,
                    e.prototype.agent = "",
                    e.prototype.source = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.consent && Object.hasOwnProperty.call(e, "consent") && i.ac.Consent.encode(e.consent, t.uint32(26).fork()).ldelim(),
                        null != e.events && e.events.length)
                            for (var n = 0; n < e.events.length; ++n)
                                i.metric.Event.encode(e.events[n], t.uint32(34).fork()).ldelim();
                        return null != e.agent && Object.hasOwnProperty.call(e, "agent") && t.uint32(722).string(e.agent),
                        null != e.source && Object.hasOwnProperty.call(e, "source") && t.uint32(730).string(e.source),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveRequest)
                            return e;
                        var t = new i.ac.SaveRequest;
                        if (null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.consent) {
                            if ("object" != typeof e.consent)
                                throw TypeError(".ac.SaveRequest.consent: object expected");
                            t.consent = i.ac.Consent.fromObject(e.consent)
                        }
                        if (e.events) {
                            if (!Array.isArray(e.events))
                                throw TypeError(".ac.SaveRequest.events: array expected");
                            t.events = [];
                            for (var n = 0; n < e.events.length; ++n) {
                                if ("object" != typeof e.events[n])
                                    throw TypeError(".ac.SaveRequest.events: object expected");
                                t.events[n] = i.metric.Event.fromObject(e.events[n])
                            }
                        }
                        return null != e.agent && (t.agent = String(e.agent)),
                        null != e.source && (t.source = String(e.source)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        if ((t.arrays || t.defaults) && (n.events = []),
                        t.defaults && (n.app_key = "",
                        n.uuid = "",
                        n.consent = null,
                        n.agent = "",
                        n.source = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.consent && e.hasOwnProperty("consent") && (n.consent = i.ac.Consent.toObject(e.consent, t)),
                        e.events && e.events.length) {
                            n.events = [];
                            for (var r = 0; r < e.events.length; ++r)
                                n.events[r] = i.metric.Event.toObject(e.events[r], t)
                        }
                        return null != e.agent && e.hasOwnProperty("agent") && (n.agent = e.agent),
                        null != e.source && e.hasOwnProperty("source") && (n.source = e.source),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.consent_expiration = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.consent_expiration && Object.hasOwnProperty.call(e, "consent_expiration") && i.google.protobuf.Duration.encode(e.consent_expiration, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveReply)
                            return e;
                        var t = new i.ac.SaveReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.SaveReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        if (null != e.consent_expiration) {
                            if ("object" != typeof e.consent_expiration)
                                throw TypeError(".ac.SaveReply.consent_expiration: object expected");
                            t.consent_expiration = i.google.protobuf.Duration.fromObject(e.consent_expiration)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null,
                        n.consent_expiration = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        null != e.consent_expiration && e.hasOwnProperty("consent_expiration") && (n.consent_expiration = i.google.protobuf.Duration.toObject(e.consent_expiration, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.HistoryRequest = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.uuid = "",
                    e.prototype.with_transaction_id = !1,
                    e.prototype.uuid_hash = "",
                    e.prototype.language = "",
                    e.prototype.external_ids = s.emptyObject,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.with_transaction_id && Object.hasOwnProperty.call(e, "with_transaction_id") && t.uint32(24).bool(e.with_transaction_id),
                        null != e.uuid_hash && Object.hasOwnProperty.call(e, "uuid_hash") && t.uint32(34).string(e.uuid_hash),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(42).string(e.language),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(50).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.HistoryRequest)
                            return e;
                        var t = new i.ac.HistoryRequest;
                        if (null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.with_transaction_id && (t.with_transaction_id = Boolean(e.with_transaction_id)),
                        null != e.uuid_hash && (t.uuid_hash = String(e.uuid_hash)),
                        null != e.language && (t.language = String(e.language)),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.HistoryRequest.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.app_key = "",
                        r.uuid = "",
                        r.with_transaction_id = !1,
                        r.uuid_hash = "",
                        r.language = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.with_transaction_id && e.hasOwnProperty("with_transaction_id") && (r.with_transaction_id = e.with_transaction_id),
                        null != e.uuid_hash && e.hasOwnProperty("uuid_hash") && (r.uuid_hash = e.uuid_hash),
                        null != e.language && e.hasOwnProperty("language") && (r.language = e.language),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.HistoryReply = function() {
                    function e(e) {
                        if (this.consents = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.uuid = "",
                    e.prototype.consents = s.emptyArray,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.consents && e.consents.length)
                            for (var n = 0; n < e.consents.length; ++n)
                                i.ac.Consent.encode(e.consents[n], t.uint32(26).fork()).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.HistoryReply)
                            return e;
                        var t = new i.ac.HistoryReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.HistoryReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        e.consents) {
                            if (!Array.isArray(e.consents))
                                throw TypeError(".ac.HistoryReply.consents: array expected");
                            t.consents = [];
                            for (var n = 0; n < e.consents.length; ++n) {
                                if ("object" != typeof e.consents[n])
                                    throw TypeError(".ac.HistoryReply.consents: object expected");
                                t.consents[n] = i.ac.Consent.fromObject(e.consents[n])
                            }
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        if ((t.arrays || t.defaults) && (n.consents = []),
                        t.defaults && (n.error = null,
                        n.uuid = ""),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        e.consents && e.consents.length) {
                            n.consents = [];
                            for (var r = 0; r < e.consents.length; ++r)
                                n.consents[r] = i.ac.Consent.toObject(e.consents[r], t)
                        }
                        return n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ExternalToUuidRequest = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.external_id = "",
                    e.prototype.external_id_key = "",
                    e.prototype.language = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.external_id && Object.hasOwnProperty.call(e, "external_id") && t.uint32(18).string(e.external_id),
                        null != e.external_id_key && Object.hasOwnProperty.call(e, "external_id_key") && t.uint32(26).string(e.external_id_key),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(34).string(e.language),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ExternalToUuidRequest)
                            return e;
                        var t = new i.ac.ExternalToUuidRequest;
                        return null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.external_id && (t.external_id = String(e.external_id)),
                        null != e.external_id_key && (t.external_id_key = String(e.external_id_key)),
                        null != e.language && (t.language = String(e.language)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.app_key = "",
                        n.external_id = "",
                        n.external_id_key = "",
                        n.language = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.external_id && e.hasOwnProperty("external_id") && (n.external_id = e.external_id),
                        null != e.external_id_key && e.hasOwnProperty("external_id_key") && (n.external_id_key = e.external_id_key),
                        null != e.language && e.hasOwnProperty("language") && (n.language = e.language),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.UuidToExternalRequest = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.uuid = "",
                    e.prototype.language = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.language && Object.hasOwnProperty.call(e, "language") && t.uint32(26).string(e.language),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.UuidToExternalRequest)
                            return e;
                        var t = new i.ac.UuidToExternalRequest;
                        return null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.language && (t.language = String(e.language)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.app_key = "",
                        n.uuid = "",
                        n.language = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.language && e.hasOwnProperty("language") && (n.language = e.language),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.UuidToExternalReply = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.external_ids = s.emptyObject,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(18).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.UuidToExternalReply)
                            return e;
                        var t = new i.ac.UuidToExternalReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.UuidToExternalReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        if (e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.UuidToExternalReply.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.error = null),
                        null != e.error && e.hasOwnProperty("error") && (r.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ExternalToUuidReply = function() {
                    function e(e) {
                        if (this.uuids = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.uuids = s.emptyArray,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.uuids && e.uuids.length)
                            for (var n = 0; n < e.uuids.length; ++n)
                                t.uint32(18).string(e.uuids[n]);
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ExternalToUuidReply)
                            return e;
                        var t = new i.ac.ExternalToUuidReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.ExternalToUuidReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        if (e.uuids) {
                            if (!Array.isArray(e.uuids))
                                throw TypeError(".ac.ExternalToUuidReply.uuids: array expected");
                            t.uuids = [];
                            for (var n = 0; n < e.uuids.length; ++n)
                                t.uuids[n] = String(e.uuids[n])
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        if ((t.arrays || t.defaults) && (n.uuids = []),
                        t.defaults && (n.error = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        e.uuids && e.uuids.length) {
                            n.uuids = [];
                            for (var r = 0; r < e.uuids.length; ++r)
                                n.uuids[r] = e.uuids[r]
                        }
                        return n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveExternalRequest = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.external_ids = s.emptyObject,
                    e.prototype.given_at = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return null != e.given_at && Object.hasOwnProperty.call(e, "given_at") && i.google.protobuf.Timestamp.encode(e.given_at, t.uint32(34).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveExternalRequest)
                            return e;
                        var t = new i.ac.SaveExternalRequest;
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.SaveExternalRequest.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        if (null != e.given_at) {
                            if ("object" != typeof e.given_at)
                                throw TypeError(".ac.SaveExternalRequest.given_at: object expected");
                            t.given_at = i.google.protobuf.Timestamp.fromObject(e.given_at)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.uuid = "",
                        r.app_key = "",
                        r.given_at = null),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return null != e.given_at && e.hasOwnProperty("given_at") && (r.given_at = i.google.protobuf.Timestamp.toObject(e.given_at, t)),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveExternalReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveExternalReply)
                            return e;
                        var t = new i.ac.SaveExternalReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.SaveExternalReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveFloatingExtraPurposeRequest = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.consent_floating_extra_purpose = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.consent_floating_extra_purpose && Object.hasOwnProperty.call(e, "consent_floating_extra_purpose") && i.ac.ConsentFloatingExtraPurpose.encode(e.consent_floating_extra_purpose, t.uint32(26).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveFloatingExtraPurposeRequest)
                            return e;
                        var t = new i.ac.SaveFloatingExtraPurposeRequest;
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.consent_floating_extra_purpose) {
                            if ("object" != typeof e.consent_floating_extra_purpose)
                                throw TypeError(".ac.SaveFloatingExtraPurposeRequest.consent_floating_extra_purpose: object expected");
                            t.consent_floating_extra_purpose = i.ac.ConsentFloatingExtraPurpose.fromObject(e.consent_floating_extra_purpose)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.uuid = "",
                        n.app_key = "",
                        n.consent_floating_extra_purpose = null),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.consent_floating_extra_purpose && e.hasOwnProperty("consent_floating_extra_purpose") && (n.consent_floating_extra_purpose = i.ac.ConsentFloatingExtraPurpose.toObject(e.consent_floating_extra_purpose, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.SaveFloatingExtraPurposeReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.SaveFloatingExtraPurposeReply)
                            return e;
                        var t = new i.ac.SaveFloatingExtraPurposeReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.SaveFloatingExtraPurposeReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.TranslateVendorCookieRetentionRequest = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.lang = "",
                    e.prototype.uses_non_cookie_access = !1,
                    e.prototype.cookie_max_age_seconds = 0,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.lang && Object.hasOwnProperty.call(e, "lang") && t.uint32(26).string(e.lang),
                        null != e.uses_non_cookie_access && Object.hasOwnProperty.call(e, "uses_non_cookie_access") && t.uint32(32).bool(e.uses_non_cookie_access),
                        null != e.cookie_max_age_seconds && Object.hasOwnProperty.call(e, "cookie_max_age_seconds") && t.uint32(40).int64(e.cookie_max_age_seconds),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.TranslateVendorCookieRetentionRequest)
                            return e;
                        var t = new i.ac.TranslateVendorCookieRetentionRequest;
                        return null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.lang && (t.lang = String(e.lang)),
                        null != e.uses_non_cookie_access && (t.uses_non_cookie_access = Boolean(e.uses_non_cookie_access)),
                        null != e.cookie_max_age_seconds && (s.Long ? (t.cookie_max_age_seconds = s.Long.fromValue(e.cookie_max_age_seconds)).unsigned = !1 : "string" == typeof e.cookie_max_age_seconds ? t.cookie_max_age_seconds = parseInt(e.cookie_max_age_seconds, 10) : "number" == typeof e.cookie_max_age_seconds ? t.cookie_max_age_seconds = e.cookie_max_age_seconds : "object" == typeof e.cookie_max_age_seconds && (t.cookie_max_age_seconds = new s.LongBits(e.cookie_max_age_seconds.low >>> 0,e.cookie_max_age_seconds.high >>> 0).toNumber())),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.uuid = "",
                        n.app_key = "",
                        n.lang = "",
                        n.uses_non_cookie_access = !1,
                        n.cookie_max_age_seconds = 0),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.lang && e.hasOwnProperty("lang") && (n.lang = e.lang),
                        null != e.uses_non_cookie_access && e.hasOwnProperty("uses_non_cookie_access") && (n.uses_non_cookie_access = e.uses_non_cookie_access),
                        null != e.cookie_max_age_seconds && e.hasOwnProperty("cookie_max_age_seconds") && ("number" == typeof e.cookie_max_age_seconds ? n.cookie_max_age_seconds = t.longs === String ? String(e.cookie_max_age_seconds) : e.cookie_max_age_seconds : n.cookie_max_age_seconds = t.longs === String ? s.Long.prototype.toString.call(e.cookie_max_age_seconds) : t.longs === Number ? new s.LongBits(e.cookie_max_age_seconds.low >>> 0,e.cookie_max_age_seconds.high >>> 0).toNumber() : e.cookie_max_age_seconds),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.TranslateVendorCookieRetentionReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.translation = "",
                    e.prototype.error = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.translation && Object.hasOwnProperty.call(e, "translation") && t.uint32(10).string(e.translation),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.TranslateVendorCookieRetentionReply)
                            return e;
                        var t = new i.ac.TranslateVendorCookieRetentionReply;
                        if (null != e.translation && (t.translation = String(e.translation)),
                        null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.TranslateVendorCookieRetentionReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.translation = "",
                        n.error = null),
                        null != e.translation && e.hasOwnProperty("translation") && (n.translation = e.translation),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.CfuRequest = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.app_key = "",
                    e.prototype.uuid = "",
                    e.prototype.payload = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(10).string(e.app_key),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(18).string(e.uuid),
                        null != e.payload && Object.hasOwnProperty.call(e, "payload") && t.uint32(26).string(e.payload),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.CfuRequest)
                            return e;
                        var t = new i.ac.CfuRequest;
                        return null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.payload && (t.payload = String(e.payload)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.app_key = "",
                        n.uuid = "",
                        n.payload = ""),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.payload && e.hasOwnProperty("payload") && (n.payload = e.payload),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.CfuReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.prototype.update = !1,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        null != e.update && Object.hasOwnProperty.call(e, "update") && t.uint32(16).bool(e.update),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.CfuReply)
                            return e;
                        var t = new i.ac.CfuReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.CfuReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        return null != e.update && (t.update = Boolean(e.update)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null,
                        n.update = !1),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        null != e.update && e.hasOwnProperty("update") && (n.update = e.update),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ErrorCode = function() {
                    const e = {}
                      , t = Object.create(e);
                    return t[e[0] = "UNKNOWN"] = 0,
                    t
                }(),
                e.ErrorResponse = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.code = 0,
                    e.prototype.description = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).int32(e.code),
                        null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(18).string(e.description),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ErrorResponse)
                            return e;
                        var t = new i.ac.ErrorResponse;
                        switch (e.code) {
                        case "UNKNOWN":
                        case 0:
                            t.code = 0
                        }
                        return null != e.description && (t.description = String(e.description)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.code = t.enums === String ? "UNKNOWN" : 0,
                        n.description = ""),
                        null != e.code && e.hasOwnProperty("code") && (n.code = t.enums === String ? i.ac.ErrorCode[e.code] : e.code),
                        null != e.description && e.hasOwnProperty("description") && (n.description = e.description),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Configuration = function() {
                    function e(e) {
                        if (this.xchange_vendors = [],
                        this.texts = {},
                        this.images = {},
                        this.actions = {},
                        this.colors = {},
                        this.configs = {},
                        this.countries_excluded_for_gcm = [],
                        this.target_countries = [],
                        this.gdpr_extra_countries = [],
                        this.excluded_urls_for_display = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.fallback_language = "",
                    e.prototype.xchange_vendors = s.emptyArray,
                    e.prototype.texts = s.emptyObject,
                    e.prototype.custom_css = "",
                    e.prototype.useBanner = !1,
                    e.prototype.ctaLayout = 0,
                    e.prototype.useSuccessScreen = !1,
                    e.prototype.images = s.emptyObject,
                    e.prototype.actions = s.emptyObject,
                    e.prototype.colors = s.emptyObject,
                    e.prototype.configs = s.emptyObject,
                    e.prototype.custom_js = "",
                    e.prototype.continue_without_accepting = !1,
                    e.prototype.xchange = !1,
                    e.prototype.bannerMode = 0,
                    e.prototype.use_ios_att = !1,
                    e.prototype.enableLegintOnRefuseAll = !1,
                    e.prototype.custom_css_amp = "",
                    e.prototype.cmp_display_mode = 0,
                    e.prototype.consent_expirations = null,
                    e.prototype.highlight_accept_all_button = !1,
                    e.prototype.enable_illustrations = !1,
                    e.prototype.gcm_url_passthrough = !1,
                    e.prototype.gcm_ads_data_redaction = !1,
                    e.prototype.not_banner_display_purposes_list = !1,
                    e.prototype.enable_gcm = !1,
                    e.prototype.countries_excluded_for_gcm = s.emptyArray,
                    e.prototype.target_countries = s.emptyArray,
                    e.prototype.google_enable_basic_consent_mode = !1,
                    e.prototype.google_enable_advertiser_consent_mode = !1,
                    e.prototype.force_gdpr_applies = !1,
                    e.prototype.url_redirect = null,
                    e.prototype.privacy_widget = null,
                    e.prototype.gdpr_extra_countries = s.emptyArray,
                    e.prototype.enable_remove_cookies_on_withdrawal_consent = !1,
                    e.prototype.keep_cookies_list_on_withdrawal_consent = "",
                    e.prototype.is_vertical_buttons_modal_banner = !1,
                    e.prototype.excluded_urls_for_display = s.emptyArray,
                    e.prototype.enable_first_party_user_uuid = !1,
                    e.prototype.first_party_uuid_cookie_domain = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.fallback_language && Object.hasOwnProperty.call(e, "fallback_language") && t.uint32(10).string(e.fallback_language),
                        null != e.xchange_vendors && e.xchange_vendors.length)
                            for (var n = 0; n < e.xchange_vendors.length; ++n)
                                t.uint32(16).uint32(e.xchange_vendors[n]);
                        if (null != e.texts && Object.hasOwnProperty.call(e, "texts")) {
                            var r = Object.keys(e.texts);
                            for (n = 0; n < r.length; ++n)
                                t.uint32(26).fork().uint32(10).string(r[n]),
                                i.ac.I18NString.encode(e.texts[r[n]], t.uint32(18).fork()).ldelim().ldelim()
                        }
                        if (null != e.custom_css && Object.hasOwnProperty.call(e, "custom_css") && t.uint32(34).string(e.custom_css),
                        null != e.useBanner && Object.hasOwnProperty.call(e, "useBanner") && t.uint32(72).bool(e.useBanner),
                        null != e.ctaLayout && Object.hasOwnProperty.call(e, "ctaLayout") && t.uint32(80).uint32(e.ctaLayout),
                        null != e.useSuccessScreen && Object.hasOwnProperty.call(e, "useSuccessScreen") && t.uint32(88).bool(e.useSuccessScreen),
                        null != e.images && Object.hasOwnProperty.call(e, "images"))
                            for (r = Object.keys(e.images),
                            n = 0; n < r.length; ++n)
                                t.uint32(98).fork().uint32(10).string(r[n]).uint32(18).string(e.images[r[n]]).ldelim();
                        if (null != e.actions && Object.hasOwnProperty.call(e, "actions"))
                            for (r = Object.keys(e.actions),
                            n = 0; n < r.length; ++n)
                                t.uint32(106).fork().uint32(10).string(r[n]).uint32(16).int32(e.actions[r[n]]).ldelim();
                        if (null != e.colors && Object.hasOwnProperty.call(e, "colors"))
                            for (r = Object.keys(e.colors),
                            n = 0; n < r.length; ++n)
                                t.uint32(114).fork().uint32(10).string(r[n]).uint32(18).string(e.colors[r[n]]).ldelim();
                        if (null != e.configs && Object.hasOwnProperty.call(e, "configs"))
                            for (r = Object.keys(e.configs),
                            n = 0; n < r.length; ++n)
                                t.uint32(122).fork().uint32(10).string(r[n]).uint32(16).bool(e.configs[r[n]]).ldelim();
                        if (null != e.custom_js && Object.hasOwnProperty.call(e, "custom_js") && t.uint32(130).string(e.custom_js),
                        null != e.xchange && Object.hasOwnProperty.call(e, "xchange") && t.uint32(136).bool(e.xchange),
                        null != e.bannerMode && Object.hasOwnProperty.call(e, "bannerMode") && t.uint32(144).int32(e.bannerMode),
                        null != e.continue_without_accepting && Object.hasOwnProperty.call(e, "continue_without_accepting") && t.uint32(152).bool(e.continue_without_accepting),
                        null != e.use_ios_att && Object.hasOwnProperty.call(e, "use_ios_att") && t.uint32(160).bool(e.use_ios_att),
                        null != e.enableLegintOnRefuseAll && Object.hasOwnProperty.call(e, "enableLegintOnRefuseAll") && t.uint32(168).bool(e.enableLegintOnRefuseAll),
                        null != e.custom_css_amp && Object.hasOwnProperty.call(e, "custom_css_amp") && t.uint32(178).string(e.custom_css_amp),
                        null != e.cmp_display_mode && Object.hasOwnProperty.call(e, "cmp_display_mode") && t.uint32(184).int32(e.cmp_display_mode),
                        null != e.consent_expirations && Object.hasOwnProperty.call(e, "consent_expirations") && i.ac.ConsentExpirations.encode(e.consent_expirations, t.uint32(194).fork()).ldelim(),
                        null != e.highlight_accept_all_button && Object.hasOwnProperty.call(e, "highlight_accept_all_button") && t.uint32(200).bool(e.highlight_accept_all_button),
                        null != e.enable_illustrations && Object.hasOwnProperty.call(e, "enable_illustrations") && t.uint32(208).bool(e.enable_illustrations),
                        null != e.gcm_url_passthrough && Object.hasOwnProperty.call(e, "gcm_url_passthrough") && t.uint32(216).bool(e.gcm_url_passthrough),
                        null != e.gcm_ads_data_redaction && Object.hasOwnProperty.call(e, "gcm_ads_data_redaction") && t.uint32(224).bool(e.gcm_ads_data_redaction),
                        null != e.not_banner_display_purposes_list && Object.hasOwnProperty.call(e, "not_banner_display_purposes_list") && t.uint32(232).bool(e.not_banner_display_purposes_list),
                        null != e.enable_gcm && Object.hasOwnProperty.call(e, "enable_gcm") && t.uint32(240).bool(e.enable_gcm),
                        null != e.countries_excluded_for_gcm && e.countries_excluded_for_gcm.length)
                            for (n = 0; n < e.countries_excluded_for_gcm.length; ++n)
                                t.uint32(250).string(e.countries_excluded_for_gcm[n]);
                        if (null != e.target_countries && e.target_countries.length)
                            for (n = 0; n < e.target_countries.length; ++n)
                                t.uint32(258).string(e.target_countries[n]);
                        if (null != e.google_enable_basic_consent_mode && Object.hasOwnProperty.call(e, "google_enable_basic_consent_mode") && t.uint32(264).bool(e.google_enable_basic_consent_mode),
                        null != e.google_enable_advertiser_consent_mode && Object.hasOwnProperty.call(e, "google_enable_advertiser_consent_mode") && t.uint32(272).bool(e.google_enable_advertiser_consent_mode),
                        null != e.force_gdpr_applies && Object.hasOwnProperty.call(e, "force_gdpr_applies") && t.uint32(280).bool(e.force_gdpr_applies),
                        null != e.url_redirect && Object.hasOwnProperty.call(e, "url_redirect") && i.ac.RedirectionView.encode(e.url_redirect, t.uint32(290).fork()).ldelim(),
                        null != e.privacy_widget && Object.hasOwnProperty.call(e, "privacy_widget") && i.ac.PrivacyWidget.encode(e.privacy_widget, t.uint32(298).fork()).ldelim(),
                        null != e.gdpr_extra_countries && e.gdpr_extra_countries.length)
                            for (n = 0; n < e.gdpr_extra_countries.length; ++n)
                                t.uint32(306).string(e.gdpr_extra_countries[n]);
                        if (null != e.enable_remove_cookies_on_withdrawal_consent && Object.hasOwnProperty.call(e, "enable_remove_cookies_on_withdrawal_consent") && t.uint32(312).bool(e.enable_remove_cookies_on_withdrawal_consent),
                        null != e.keep_cookies_list_on_withdrawal_consent && Object.hasOwnProperty.call(e, "keep_cookies_list_on_withdrawal_consent") && t.uint32(322).string(e.keep_cookies_list_on_withdrawal_consent),
                        null != e.is_vertical_buttons_modal_banner && Object.hasOwnProperty.call(e, "is_vertical_buttons_modal_banner") && t.uint32(328).bool(e.is_vertical_buttons_modal_banner),
                        null != e.excluded_urls_for_display && e.excluded_urls_for_display.length)
                            for (n = 0; n < e.excluded_urls_for_display.length; ++n)
                                t.uint32(338).string(e.excluded_urls_for_display[n]);
                        return null != e.enable_first_party_user_uuid && Object.hasOwnProperty.call(e, "enable_first_party_user_uuid") && t.uint32(344).bool(e.enable_first_party_user_uuid),
                        null != e.first_party_uuid_cookie_domain && Object.hasOwnProperty.call(e, "first_party_uuid_cookie_domain") && t.uint32(354).string(e.first_party_uuid_cookie_domain),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Configuration)
                            return e;
                        var t = new i.ac.Configuration;
                        if (null != e.fallback_language && (t.fallback_language = String(e.fallback_language)),
                        e.xchange_vendors) {
                            if (!Array.isArray(e.xchange_vendors))
                                throw TypeError(".ac.Configuration.xchange_vendors: array expected");
                            t.xchange_vendors = [];
                            for (var n = 0; n < e.xchange_vendors.length; ++n)
                                t.xchange_vendors[n] = e.xchange_vendors[n] >>> 0
                        }
                        if (e.texts) {
                            if ("object" != typeof e.texts)
                                throw TypeError(".ac.Configuration.texts: object expected");
                            t.texts = {};
                            var r = Object.keys(e.texts);
                            for (n = 0; n < r.length; ++n) {
                                if ("object" != typeof e.texts[r[n]])
                                    throw TypeError(".ac.Configuration.texts: object expected");
                                t.texts[r[n]] = i.ac.I18NString.fromObject(e.texts[r[n]])
                            }
                        }
                        if (null != e.custom_css && (t.custom_css = String(e.custom_css)),
                        null != e.useBanner && (t.useBanner = Boolean(e.useBanner)),
                        null != e.ctaLayout && (t.ctaLayout = e.ctaLayout >>> 0),
                        null != e.useSuccessScreen && (t.useSuccessScreen = Boolean(e.useSuccessScreen)),
                        e.images) {
                            if ("object" != typeof e.images)
                                throw TypeError(".ac.Configuration.images: object expected");
                            t.images = {};
                            for (r = Object.keys(e.images),
                            n = 0; n < r.length; ++n)
                                t.images[r[n]] = String(e.images[r[n]])
                        }
                        if (e.actions) {
                            if ("object" != typeof e.actions)
                                throw TypeError(".ac.Configuration.actions: object expected");
                            t.actions = {};
                            for (r = Object.keys(e.actions),
                            n = 0; n < r.length; ++n)
                                t.actions[r[n]] = 0 | e.actions[r[n]]
                        }
                        if (e.colors) {
                            if ("object" != typeof e.colors)
                                throw TypeError(".ac.Configuration.colors: object expected");
                            t.colors = {};
                            for (r = Object.keys(e.colors),
                            n = 0; n < r.length; ++n)
                                t.colors[r[n]] = String(e.colors[r[n]])
                        }
                        if (e.configs) {
                            if ("object" != typeof e.configs)
                                throw TypeError(".ac.Configuration.configs: object expected");
                            t.configs = {};
                            for (r = Object.keys(e.configs),
                            n = 0; n < r.length; ++n)
                                t.configs[r[n]] = Boolean(e.configs[r[n]])
                        }
                        switch (null != e.custom_js && (t.custom_js = String(e.custom_js)),
                        null != e.continue_without_accepting && (t.continue_without_accepting = Boolean(e.continue_without_accepting)),
                        null != e.xchange && (t.xchange = Boolean(e.xchange)),
                        e.bannerMode) {
                        case "BANNER":
                        case 0:
                            t.bannerMode = 0;
                            break;
                        case "MODAL":
                        case 1:
                            t.bannerMode = 1
                        }
                        switch (null != e.use_ios_att && (t.use_ios_att = Boolean(e.use_ios_att)),
                        null != e.enableLegintOnRefuseAll && (t.enableLegintOnRefuseAll = Boolean(e.enableLegintOnRefuseAll)),
                        null != e.custom_css_amp && (t.custom_css_amp = String(e.custom_css_amp)),
                        e.cmp_display_mode) {
                        case "NEW_VISITOR":
                        case 0:
                            t.cmp_display_mode = 0;
                            break;
                        case "ALL_VISITOR":
                        case 1:
                            t.cmp_display_mode = 1
                        }
                        if (null != e.consent_expirations) {
                            if ("object" != typeof e.consent_expirations)
                                throw TypeError(".ac.Configuration.consent_expirations: object expected");
                            t.consent_expirations = i.ac.ConsentExpirations.fromObject(e.consent_expirations)
                        }
                        if (null != e.highlight_accept_all_button && (t.highlight_accept_all_button = Boolean(e.highlight_accept_all_button)),
                        null != e.enable_illustrations && (t.enable_illustrations = Boolean(e.enable_illustrations)),
                        null != e.gcm_url_passthrough && (t.gcm_url_passthrough = Boolean(e.gcm_url_passthrough)),
                        null != e.gcm_ads_data_redaction && (t.gcm_ads_data_redaction = Boolean(e.gcm_ads_data_redaction)),
                        null != e.not_banner_display_purposes_list && (t.not_banner_display_purposes_list = Boolean(e.not_banner_display_purposes_list)),
                        null != e.enable_gcm && (t.enable_gcm = Boolean(e.enable_gcm)),
                        e.countries_excluded_for_gcm) {
                            if (!Array.isArray(e.countries_excluded_for_gcm))
                                throw TypeError(".ac.Configuration.countries_excluded_for_gcm: array expected");
                            t.countries_excluded_for_gcm = [];
                            for (n = 0; n < e.countries_excluded_for_gcm.length; ++n)
                                t.countries_excluded_for_gcm[n] = String(e.countries_excluded_for_gcm[n])
                        }
                        if (e.target_countries) {
                            if (!Array.isArray(e.target_countries))
                                throw TypeError(".ac.Configuration.target_countries: array expected");
                            t.target_countries = [];
                            for (n = 0; n < e.target_countries.length; ++n)
                                t.target_countries[n] = String(e.target_countries[n])
                        }
                        if (null != e.google_enable_basic_consent_mode && (t.google_enable_basic_consent_mode = Boolean(e.google_enable_basic_consent_mode)),
                        null != e.google_enable_advertiser_consent_mode && (t.google_enable_advertiser_consent_mode = Boolean(e.google_enable_advertiser_consent_mode)),
                        null != e.force_gdpr_applies && (t.force_gdpr_applies = Boolean(e.force_gdpr_applies)),
                        null != e.url_redirect) {
                            if ("object" != typeof e.url_redirect)
                                throw TypeError(".ac.Configuration.url_redirect: object expected");
                            t.url_redirect = i.ac.RedirectionView.fromObject(e.url_redirect)
                        }
                        if (null != e.privacy_widget) {
                            if ("object" != typeof e.privacy_widget)
                                throw TypeError(".ac.Configuration.privacy_widget: object expected");
                            t.privacy_widget = i.ac.PrivacyWidget.fromObject(e.privacy_widget)
                        }
                        if (e.gdpr_extra_countries) {
                            if (!Array.isArray(e.gdpr_extra_countries))
                                throw TypeError(".ac.Configuration.gdpr_extra_countries: array expected");
                            t.gdpr_extra_countries = [];
                            for (n = 0; n < e.gdpr_extra_countries.length; ++n)
                                t.gdpr_extra_countries[n] = String(e.gdpr_extra_countries[n])
                        }
                        if (null != e.enable_remove_cookies_on_withdrawal_consent && (t.enable_remove_cookies_on_withdrawal_consent = Boolean(e.enable_remove_cookies_on_withdrawal_consent)),
                        null != e.keep_cookies_list_on_withdrawal_consent && (t.keep_cookies_list_on_withdrawal_consent = String(e.keep_cookies_list_on_withdrawal_consent)),
                        null != e.is_vertical_buttons_modal_banner && (t.is_vertical_buttons_modal_banner = Boolean(e.is_vertical_buttons_modal_banner)),
                        e.excluded_urls_for_display) {
                            if (!Array.isArray(e.excluded_urls_for_display))
                                throw TypeError(".ac.Configuration.excluded_urls_for_display: array expected");
                            t.excluded_urls_for_display = [];
                            for (n = 0; n < e.excluded_urls_for_display.length; ++n)
                                t.excluded_urls_for_display[n] = String(e.excluded_urls_for_display[n])
                        }
                        return null != e.enable_first_party_user_uuid && (t.enable_first_party_user_uuid = Boolean(e.enable_first_party_user_uuid)),
                        null != e.first_party_uuid_cookie_domain && (t.first_party_uuid_cookie_domain = String(e.first_party_uuid_cookie_domain)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.arrays || t.defaults) && (r.xchange_vendors = [],
                        r.countries_excluded_for_gcm = [],
                        r.target_countries = [],
                        r.gdpr_extra_countries = [],
                        r.excluded_urls_for_display = []),
                        (t.objects || t.defaults) && (r.texts = {},
                        r.images = {},
                        r.actions = {},
                        r.colors = {},
                        r.configs = {}),
                        t.defaults && (r.fallback_language = "",
                        r.custom_css = "",
                        r.useBanner = !1,
                        r.ctaLayout = 0,
                        r.useSuccessScreen = !1,
                        r.custom_js = "",
                        r.xchange = !1,
                        r.bannerMode = t.enums === String ? "BANNER" : 0,
                        r.continue_without_accepting = !1,
                        r.use_ios_att = !1,
                        r.enableLegintOnRefuseAll = !1,
                        r.custom_css_amp = "",
                        r.cmp_display_mode = t.enums === String ? "NEW_VISITOR" : 0,
                        r.consent_expirations = null,
                        r.highlight_accept_all_button = !1,
                        r.enable_illustrations = !1,
                        r.gcm_url_passthrough = !1,
                        r.gcm_ads_data_redaction = !1,
                        r.not_banner_display_purposes_list = !1,
                        r.enable_gcm = !1,
                        r.google_enable_basic_consent_mode = !1,
                        r.google_enable_advertiser_consent_mode = !1,
                        r.force_gdpr_applies = !1,
                        r.url_redirect = null,
                        r.privacy_widget = null,
                        r.enable_remove_cookies_on_withdrawal_consent = !1,
                        r.keep_cookies_list_on_withdrawal_consent = "",
                        r.is_vertical_buttons_modal_banner = !1,
                        r.enable_first_party_user_uuid = !1,
                        r.first_party_uuid_cookie_domain = ""),
                        null != e.fallback_language && e.hasOwnProperty("fallback_language") && (r.fallback_language = e.fallback_language),
                        e.xchange_vendors && e.xchange_vendors.length) {
                            r.xchange_vendors = [];
                            for (var o = 0; o < e.xchange_vendors.length; ++o)
                                r.xchange_vendors[o] = e.xchange_vendors[o]
                        }
                        if (e.texts && (n = Object.keys(e.texts)).length) {
                            r.texts = {};
                            for (o = 0; o < n.length; ++o)
                                r.texts[n[o]] = i.ac.I18NString.toObject(e.texts[n[o]], t)
                        }
                        if (null != e.custom_css && e.hasOwnProperty("custom_css") && (r.custom_css = e.custom_css),
                        null != e.useBanner && e.hasOwnProperty("useBanner") && (r.useBanner = e.useBanner),
                        null != e.ctaLayout && e.hasOwnProperty("ctaLayout") && (r.ctaLayout = e.ctaLayout),
                        null != e.useSuccessScreen && e.hasOwnProperty("useSuccessScreen") && (r.useSuccessScreen = e.useSuccessScreen),
                        e.images && (n = Object.keys(e.images)).length) {
                            r.images = {};
                            for (o = 0; o < n.length; ++o)
                                r.images[n[o]] = e.images[n[o]]
                        }
                        if (e.actions && (n = Object.keys(e.actions)).length) {
                            r.actions = {};
                            for (o = 0; o < n.length; ++o)
                                r.actions[n[o]] = e.actions[n[o]]
                        }
                        if (e.colors && (n = Object.keys(e.colors)).length) {
                            r.colors = {};
                            for (o = 0; o < n.length; ++o)
                                r.colors[n[o]] = e.colors[n[o]]
                        }
                        if (e.configs && (n = Object.keys(e.configs)).length) {
                            r.configs = {};
                            for (o = 0; o < n.length; ++o)
                                r.configs[n[o]] = e.configs[n[o]]
                        }
                        if (null != e.custom_js && e.hasOwnProperty("custom_js") && (r.custom_js = e.custom_js),
                        null != e.xchange && e.hasOwnProperty("xchange") && (r.xchange = e.xchange),
                        null != e.bannerMode && e.hasOwnProperty("bannerMode") && (r.bannerMode = t.enums === String ? i.ac.Configuration.EnumBannerMode[e.bannerMode] : e.bannerMode),
                        null != e.continue_without_accepting && e.hasOwnProperty("continue_without_accepting") && (r.continue_without_accepting = e.continue_without_accepting),
                        null != e.use_ios_att && e.hasOwnProperty("use_ios_att") && (r.use_ios_att = e.use_ios_att),
                        null != e.enableLegintOnRefuseAll && e.hasOwnProperty("enableLegintOnRefuseAll") && (r.enableLegintOnRefuseAll = e.enableLegintOnRefuseAll),
                        null != e.custom_css_amp && e.hasOwnProperty("custom_css_amp") && (r.custom_css_amp = e.custom_css_amp),
                        null != e.cmp_display_mode && e.hasOwnProperty("cmp_display_mode") && (r.cmp_display_mode = t.enums === String ? i.ac.Configuration.CmpDisplayMode[e.cmp_display_mode] : e.cmp_display_mode),
                        null != e.consent_expirations && e.hasOwnProperty("consent_expirations") && (r.consent_expirations = i.ac.ConsentExpirations.toObject(e.consent_expirations, t)),
                        null != e.highlight_accept_all_button && e.hasOwnProperty("highlight_accept_all_button") && (r.highlight_accept_all_button = e.highlight_accept_all_button),
                        null != e.enable_illustrations && e.hasOwnProperty("enable_illustrations") && (r.enable_illustrations = e.enable_illustrations),
                        null != e.gcm_url_passthrough && e.hasOwnProperty("gcm_url_passthrough") && (r.gcm_url_passthrough = e.gcm_url_passthrough),
                        null != e.gcm_ads_data_redaction && e.hasOwnProperty("gcm_ads_data_redaction") && (r.gcm_ads_data_redaction = e.gcm_ads_data_redaction),
                        null != e.not_banner_display_purposes_list && e.hasOwnProperty("not_banner_display_purposes_list") && (r.not_banner_display_purposes_list = e.not_banner_display_purposes_list),
                        null != e.enable_gcm && e.hasOwnProperty("enable_gcm") && (r.enable_gcm = e.enable_gcm),
                        e.countries_excluded_for_gcm && e.countries_excluded_for_gcm.length) {
                            r.countries_excluded_for_gcm = [];
                            for (o = 0; o < e.countries_excluded_for_gcm.length; ++o)
                                r.countries_excluded_for_gcm[o] = e.countries_excluded_for_gcm[o]
                        }
                        if (e.target_countries && e.target_countries.length) {
                            r.target_countries = [];
                            for (o = 0; o < e.target_countries.length; ++o)
                                r.target_countries[o] = e.target_countries[o]
                        }
                        if (null != e.google_enable_basic_consent_mode && e.hasOwnProperty("google_enable_basic_consent_mode") && (r.google_enable_basic_consent_mode = e.google_enable_basic_consent_mode),
                        null != e.google_enable_advertiser_consent_mode && e.hasOwnProperty("google_enable_advertiser_consent_mode") && (r.google_enable_advertiser_consent_mode = e.google_enable_advertiser_consent_mode),
                        null != e.force_gdpr_applies && e.hasOwnProperty("force_gdpr_applies") && (r.force_gdpr_applies = e.force_gdpr_applies),
                        null != e.url_redirect && e.hasOwnProperty("url_redirect") && (r.url_redirect = i.ac.RedirectionView.toObject(e.url_redirect, t)),
                        null != e.privacy_widget && e.hasOwnProperty("privacy_widget") && (r.privacy_widget = i.ac.PrivacyWidget.toObject(e.privacy_widget, t)),
                        e.gdpr_extra_countries && e.gdpr_extra_countries.length) {
                            r.gdpr_extra_countries = [];
                            for (o = 0; o < e.gdpr_extra_countries.length; ++o)
                                r.gdpr_extra_countries[o] = e.gdpr_extra_countries[o]
                        }
                        if (null != e.enable_remove_cookies_on_withdrawal_consent && e.hasOwnProperty("enable_remove_cookies_on_withdrawal_consent") && (r.enable_remove_cookies_on_withdrawal_consent = e.enable_remove_cookies_on_withdrawal_consent),
                        null != e.keep_cookies_list_on_withdrawal_consent && e.hasOwnProperty("keep_cookies_list_on_withdrawal_consent") && (r.keep_cookies_list_on_withdrawal_consent = e.keep_cookies_list_on_withdrawal_consent),
                        null != e.is_vertical_buttons_modal_banner && e.hasOwnProperty("is_vertical_buttons_modal_banner") && (r.is_vertical_buttons_modal_banner = e.is_vertical_buttons_modal_banner),
                        e.excluded_urls_for_display && e.excluded_urls_for_display.length) {
                            r.excluded_urls_for_display = [];
                            for (o = 0; o < e.excluded_urls_for_display.length; ++o)
                                r.excluded_urls_for_display[o] = e.excluded_urls_for_display[o]
                        }
                        return null != e.enable_first_party_user_uuid && e.hasOwnProperty("enable_first_party_user_uuid") && (r.enable_first_party_user_uuid = e.enable_first_party_user_uuid),
                        null != e.first_party_uuid_cookie_domain && e.hasOwnProperty("first_party_uuid_cookie_domain") && (r.first_party_uuid_cookie_domain = e.first_party_uuid_cookie_domain),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e.EnumBannerMode = function() {
                        const e = {}
                          , t = Object.create(e);
                        return t[e[0] = "BANNER"] = 0,
                        t[e[1] = "MODAL"] = 1,
                        t
                    }(),
                    e.CmpDisplayMode = function() {
                        const e = {}
                          , t = Object.create(e);
                        return t[e[0] = "NEW_VISITOR"] = 0,
                        t[e[1] = "ALL_VISITOR"] = 1,
                        t
                    }(),
                    e
                }(),
                e.RedirectionUrls = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.deny_all = "",
                    e.prototype.accept_all = "",
                    e.prototype.continue_without_accepting = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.deny_all && Object.hasOwnProperty.call(e, "deny_all") && t.uint32(10).string(e.deny_all),
                        null != e.accept_all && Object.hasOwnProperty.call(e, "accept_all") && t.uint32(18).string(e.accept_all),
                        null != e.continue_without_accepting && Object.hasOwnProperty.call(e, "continue_without_accepting") && t.uint32(26).string(e.continue_without_accepting),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.RedirectionUrls)
                            return e;
                        var t = new i.ac.RedirectionUrls;
                        return null != e.deny_all && (t.deny_all = String(e.deny_all)),
                        null != e.accept_all && (t.accept_all = String(e.accept_all)),
                        null != e.continue_without_accepting && (t.continue_without_accepting = String(e.continue_without_accepting)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.deny_all = "",
                        n.accept_all = "",
                        n.continue_without_accepting = ""),
                        null != e.deny_all && e.hasOwnProperty("deny_all") && (n.deny_all = e.deny_all),
                        null != e.accept_all && e.hasOwnProperty("accept_all") && (n.accept_all = e.accept_all),
                        null != e.continue_without_accepting && e.hasOwnProperty("continue_without_accepting") && (n.continue_without_accepting = e.continue_without_accepting),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.RedirectionView = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.main = null,
                    e.prototype.settings = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.main && Object.hasOwnProperty.call(e, "main") && i.ac.RedirectionUrls.encode(e.main, t.uint32(10).fork()).ldelim(),
                        null != e.settings && Object.hasOwnProperty.call(e, "settings") && i.ac.RedirectionUrls.encode(e.settings, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.RedirectionView)
                            return e;
                        var t = new i.ac.RedirectionView;
                        if (null != e.main) {
                            if ("object" != typeof e.main)
                                throw TypeError(".ac.RedirectionView.main: object expected");
                            t.main = i.ac.RedirectionUrls.fromObject(e.main)
                        }
                        if (null != e.settings) {
                            if ("object" != typeof e.settings)
                                throw TypeError(".ac.RedirectionView.settings: object expected");
                            t.settings = i.ac.RedirectionUrls.fromObject(e.settings)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.main = null,
                        n.settings = null),
                        null != e.main && e.hasOwnProperty("main") && (n.main = i.ac.RedirectionUrls.toObject(e.main, t)),
                        null != e.settings && e.hasOwnProperty("settings") && (n.settings = i.ac.RedirectionUrls.toObject(e.settings, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.PrivacyWidget = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.color = "",
                    e.prototype.position = "",
                    e.prototype.text = "",
                    e.prototype.target = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.color && Object.hasOwnProperty.call(e, "color") && t.uint32(10).string(e.color),
                        null != e.position && Object.hasOwnProperty.call(e, "position") && t.uint32(18).string(e.position),
                        null != e.text && Object.hasOwnProperty.call(e, "text") && t.uint32(26).string(e.text),
                        null != e.target && Object.hasOwnProperty.call(e, "target") && t.uint32(34).string(e.target),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.PrivacyWidget)
                            return e;
                        var t = new i.ac.PrivacyWidget;
                        return null != e.color && (t.color = String(e.color)),
                        null != e.position && (t.position = String(e.position)),
                        null != e.text && (t.text = String(e.text)),
                        null != e.target && (t.target = String(e.target)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.color = "",
                        n.position = "",
                        n.text = "",
                        n.target = ""),
                        null != e.color && e.hasOwnProperty("color") && (n.color = e.color),
                        null != e.position && e.hasOwnProperty("position") && (n.position = e.position),
                        null != e.text && e.hasOwnProperty("text") && (n.text = e.text),
                        null != e.target && e.hasOwnProperty("target") && (n.target = e.target),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ConsentExpirations = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.expiration_accept_all = null,
                    e.prototype.expiration_refuse_all = null,
                    e.prototype.expiration_mixed = null,
                    e.prototype.expiration_continue_without_accepting = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.expiration_accept_all && Object.hasOwnProperty.call(e, "expiration_accept_all") && i.google.protobuf.Duration.encode(e.expiration_accept_all, t.uint32(10).fork()).ldelim(),
                        null != e.expiration_refuse_all && Object.hasOwnProperty.call(e, "expiration_refuse_all") && i.google.protobuf.Duration.encode(e.expiration_refuse_all, t.uint32(18).fork()).ldelim(),
                        null != e.expiration_mixed && Object.hasOwnProperty.call(e, "expiration_mixed") && i.google.protobuf.Duration.encode(e.expiration_mixed, t.uint32(26).fork()).ldelim(),
                        null != e.expiration_continue_without_accepting && Object.hasOwnProperty.call(e, "expiration_continue_without_accepting") && i.google.protobuf.Duration.encode(e.expiration_continue_without_accepting, t.uint32(34).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ConsentExpirations)
                            return e;
                        var t = new i.ac.ConsentExpirations;
                        if (null != e.expiration_accept_all) {
                            if ("object" != typeof e.expiration_accept_all)
                                throw TypeError(".ac.ConsentExpirations.expiration_accept_all: object expected");
                            t.expiration_accept_all = i.google.protobuf.Duration.fromObject(e.expiration_accept_all)
                        }
                        if (null != e.expiration_refuse_all) {
                            if ("object" != typeof e.expiration_refuse_all)
                                throw TypeError(".ac.ConsentExpirations.expiration_refuse_all: object expected");
                            t.expiration_refuse_all = i.google.protobuf.Duration.fromObject(e.expiration_refuse_all)
                        }
                        if (null != e.expiration_mixed) {
                            if ("object" != typeof e.expiration_mixed)
                                throw TypeError(".ac.ConsentExpirations.expiration_mixed: object expected");
                            t.expiration_mixed = i.google.protobuf.Duration.fromObject(e.expiration_mixed)
                        }
                        if (null != e.expiration_continue_without_accepting) {
                            if ("object" != typeof e.expiration_continue_without_accepting)
                                throw TypeError(".ac.ConsentExpirations.expiration_continue_without_accepting: object expected");
                            t.expiration_continue_without_accepting = i.google.protobuf.Duration.fromObject(e.expiration_continue_without_accepting)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.expiration_accept_all = null,
                        n.expiration_refuse_all = null,
                        n.expiration_mixed = null,
                        n.expiration_continue_without_accepting = null),
                        null != e.expiration_accept_all && e.hasOwnProperty("expiration_accept_all") && (n.expiration_accept_all = i.google.protobuf.Duration.toObject(e.expiration_accept_all, t)),
                        null != e.expiration_refuse_all && e.hasOwnProperty("expiration_refuse_all") && (n.expiration_refuse_all = i.google.protobuf.Duration.toObject(e.expiration_refuse_all, t)),
                        null != e.expiration_mixed && e.hasOwnProperty("expiration_mixed") && (n.expiration_mixed = i.google.protobuf.Duration.toObject(e.expiration_mixed, t)),
                        null != e.expiration_continue_without_accepting && e.hasOwnProperty("expiration_continue_without_accepting") && (n.expiration_continue_without_accepting = i.google.protobuf.Duration.toObject(e.expiration_continue_without_accepting, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Consent = function() {
                    function e(e) {
                        if (this.special_features = [],
                        this.purposes = [],
                        this.purposes_legint = [],
                        this.purposes_names = {},
                        this.purposes_denied = [],
                        this.purposes_listed = [],
                        this.purposes_mandatory = [],
                        this.vendors = [],
                        this.vendors_legint = [],
                        this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.iab_cs = "",
                    e.prototype.special_features = s.emptyArray,
                    e.prototype.purposes = s.emptyArray,
                    e.prototype.purposes_legint = s.emptyArray,
                    e.prototype.purposes_names = s.emptyObject,
                    e.prototype.purposes_denied = s.emptyArray,
                    e.prototype.purposes_listed = s.emptyArray,
                    e.prototype.purposes_mandatory = s.emptyArray,
                    e.prototype.vendors = s.emptyArray,
                    e.prototype.vendors_legint = s.emptyArray,
                    e.prototype.cmp_version = 0,
                    e.prototype.uuid = "",
                    e.prototype.given_at = null,
                    e.prototype.type = 0,
                    e.prototype.cmp_hash = "",
                    e.prototype.cmp_hash_version = 0,
                    e.prototype.external_ids = s.emptyObject,
                    e.prototype.transaction_id = "",
                    e.prototype.block_id = "",
                    e.prototype.consent_expiration = null,
                    e.prototype.origin = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.iab_cs && Object.hasOwnProperty.call(e, "iab_cs") && t.uint32(10).string(e.iab_cs),
                        null != e.special_features && e.special_features.length)
                            for (var n = 0; n < e.special_features.length; ++n)
                                t.uint32(16).uint32(e.special_features[n]);
                        if (null != e.purposes && e.purposes.length)
                            for (n = 0; n < e.purposes.length; ++n)
                                t.uint32(24).uint32(e.purposes[n]);
                        if (null != e.purposes_legint && e.purposes_legint.length)
                            for (n = 0; n < e.purposes_legint.length; ++n)
                                t.uint32(32).uint32(e.purposes_legint[n]);
                        if (null != e.vendors && e.vendors.length)
                            for (n = 0; n < e.vendors.length; ++n)
                                t.uint32(40).uint32(e.vendors[n]);
                        if (null != e.vendors_legint && e.vendors_legint.length)
                            for (n = 0; n < e.vendors_legint.length; ++n)
                                t.uint32(48).uint32(e.vendors_legint[n]);
                        if (null != e.cmp_version && Object.hasOwnProperty.call(e, "cmp_version") && t.uint32(80).uint32(e.cmp_version),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(90).string(e.uuid),
                        null != e.given_at && Object.hasOwnProperty.call(e, "given_at") && i.google.protobuf.Timestamp.encode(e.given_at, t.uint32(98).fork()).ldelim(),
                        null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(104).int32(e.type),
                        null != e.cmp_hash && Object.hasOwnProperty.call(e, "cmp_hash") && t.uint32(114).string(e.cmp_hash),
                        null != e.cmp_hash_version && Object.hasOwnProperty.call(e, "cmp_hash_version") && t.uint32(120).uint32(e.cmp_hash_version),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids")) {
                            var r = Object.keys(e.external_ids);
                            for (n = 0; n < r.length; ++n)
                                t.uint32(130).fork().uint32(10).string(r[n]).uint32(18).string(e.external_ids[r[n]]).ldelim()
                        }
                        if (null != e.transaction_id && Object.hasOwnProperty.call(e, "transaction_id") && t.uint32(138).string(e.transaction_id),
                        null != e.block_id && Object.hasOwnProperty.call(e, "block_id") && t.uint32(146).string(e.block_id),
                        null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(162).string(e.origin),
                        null != e.consent_expiration && Object.hasOwnProperty.call(e, "consent_expiration") && i.google.protobuf.Duration.encode(e.consent_expiration, t.uint32(170).fork()).ldelim(),
                        null != e.purposes_names && Object.hasOwnProperty.call(e, "purposes_names"))
                            for (r = Object.keys(e.purposes_names),
                            n = 0; n < r.length; ++n)
                                t.uint32(178).fork().uint32(8).uint32(r[n]),
                                i.ac.I18NString.encode(e.purposes_names[r[n]], t.uint32(18).fork()).ldelim().ldelim();
                        if (null != e.purposes_denied && e.purposes_denied.length)
                            for (n = 0; n < e.purposes_denied.length; ++n)
                                t.uint32(184).uint32(e.purposes_denied[n]);
                        if (null != e.purposes_listed && e.purposes_listed.length)
                            for (n = 0; n < e.purposes_listed.length; ++n)
                                t.uint32(192).uint32(e.purposes_listed[n]);
                        if (null != e.purposes_mandatory && e.purposes_mandatory.length)
                            for (n = 0; n < e.purposes_mandatory.length; ++n)
                                t.uint32(200).uint32(e.purposes_mandatory[n]);
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Consent)
                            return e;
                        var t = new i.ac.Consent;
                        if (null != e.iab_cs && (t.iab_cs = String(e.iab_cs)),
                        e.special_features) {
                            if (!Array.isArray(e.special_features))
                                throw TypeError(".ac.Consent.special_features: array expected");
                            t.special_features = [];
                            for (var n = 0; n < e.special_features.length; ++n)
                                t.special_features[n] = e.special_features[n] >>> 0
                        }
                        if (e.purposes) {
                            if (!Array.isArray(e.purposes))
                                throw TypeError(".ac.Consent.purposes: array expected");
                            t.purposes = [];
                            for (n = 0; n < e.purposes.length; ++n)
                                t.purposes[n] = e.purposes[n] >>> 0
                        }
                        if (e.purposes_legint) {
                            if (!Array.isArray(e.purposes_legint))
                                throw TypeError(".ac.Consent.purposes_legint: array expected");
                            t.purposes_legint = [];
                            for (n = 0; n < e.purposes_legint.length; ++n)
                                t.purposes_legint[n] = e.purposes_legint[n] >>> 0
                        }
                        if (e.purposes_names) {
                            if ("object" != typeof e.purposes_names)
                                throw TypeError(".ac.Consent.purposes_names: object expected");
                            t.purposes_names = {};
                            var r = Object.keys(e.purposes_names);
                            for (n = 0; n < r.length; ++n) {
                                if ("object" != typeof e.purposes_names[r[n]])
                                    throw TypeError(".ac.Consent.purposes_names: object expected");
                                t.purposes_names[r[n]] = i.ac.I18NString.fromObject(e.purposes_names[r[n]])
                            }
                        }
                        if (e.purposes_denied) {
                            if (!Array.isArray(e.purposes_denied))
                                throw TypeError(".ac.Consent.purposes_denied: array expected");
                            t.purposes_denied = [];
                            for (n = 0; n < e.purposes_denied.length; ++n)
                                t.purposes_denied[n] = e.purposes_denied[n] >>> 0
                        }
                        if (e.purposes_listed) {
                            if (!Array.isArray(e.purposes_listed))
                                throw TypeError(".ac.Consent.purposes_listed: array expected");
                            t.purposes_listed = [];
                            for (n = 0; n < e.purposes_listed.length; ++n)
                                t.purposes_listed[n] = e.purposes_listed[n] >>> 0
                        }
                        if (e.purposes_mandatory) {
                            if (!Array.isArray(e.purposes_mandatory))
                                throw TypeError(".ac.Consent.purposes_mandatory: array expected");
                            t.purposes_mandatory = [];
                            for (n = 0; n < e.purposes_mandatory.length; ++n)
                                t.purposes_mandatory[n] = e.purposes_mandatory[n] >>> 0
                        }
                        if (e.vendors) {
                            if (!Array.isArray(e.vendors))
                                throw TypeError(".ac.Consent.vendors: array expected");
                            t.vendors = [];
                            for (n = 0; n < e.vendors.length; ++n)
                                t.vendors[n] = e.vendors[n] >>> 0
                        }
                        if (e.vendors_legint) {
                            if (!Array.isArray(e.vendors_legint))
                                throw TypeError(".ac.Consent.vendors_legint: array expected");
                            t.vendors_legint = [];
                            for (n = 0; n < e.vendors_legint.length; ++n)
                                t.vendors_legint[n] = e.vendors_legint[n] >>> 0
                        }
                        if (null != e.cmp_version && (t.cmp_version = e.cmp_version >>> 0),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.given_at) {
                            if ("object" != typeof e.given_at)
                                throw TypeError(".ac.Consent.given_at: object expected");
                            t.given_at = i.google.protobuf.Timestamp.fromObject(e.given_at)
                        }
                        switch (e.type) {
                        case "ACCEPT_ALL":
                        case 0:
                            t.type = 0;
                            break;
                        case "DENY_ALL":
                        case 1:
                            t.type = 1;
                            break;
                        case "MIXED":
                        case 2:
                            t.type = 2;
                            break;
                        case "CONTINUE_WITHOUT_ACCEPTING":
                        case 3:
                            t.type = 3
                        }
                        if (null != e.cmp_hash && (t.cmp_hash = String(e.cmp_hash)),
                        null != e.cmp_hash_version && (t.cmp_hash_version = e.cmp_hash_version >>> 0),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.Consent.external_ids: object expected");
                            t.external_ids = {};
                            for (r = Object.keys(e.external_ids),
                            n = 0; n < r.length; ++n)
                                t.external_ids[r[n]] = String(e.external_ids[r[n]])
                        }
                        if (null != e.transaction_id && (t.transaction_id = String(e.transaction_id)),
                        null != e.block_id && (t.block_id = String(e.block_id)),
                        null != e.consent_expiration) {
                            if ("object" != typeof e.consent_expiration)
                                throw TypeError(".ac.Consent.consent_expiration: object expected");
                            t.consent_expiration = i.google.protobuf.Duration.fromObject(e.consent_expiration)
                        }
                        return null != e.origin && (t.origin = String(e.origin)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.arrays || t.defaults) && (r.special_features = [],
                        r.purposes = [],
                        r.purposes_legint = [],
                        r.vendors = [],
                        r.vendors_legint = [],
                        r.purposes_denied = [],
                        r.purposes_listed = [],
                        r.purposes_mandatory = []),
                        (t.objects || t.defaults) && (r.external_ids = {},
                        r.purposes_names = {}),
                        t.defaults && (r.iab_cs = "",
                        r.cmp_version = 0,
                        r.uuid = "",
                        r.given_at = null,
                        r.type = t.enums === String ? "ACCEPT_ALL" : 0,
                        r.cmp_hash = "",
                        r.cmp_hash_version = 0,
                        r.transaction_id = "",
                        r.block_id = "",
                        r.origin = "",
                        r.consent_expiration = null),
                        null != e.iab_cs && e.hasOwnProperty("iab_cs") && (r.iab_cs = e.iab_cs),
                        e.special_features && e.special_features.length) {
                            r.special_features = [];
                            for (var o = 0; o < e.special_features.length; ++o)
                                r.special_features[o] = e.special_features[o]
                        }
                        if (e.purposes && e.purposes.length) {
                            r.purposes = [];
                            for (o = 0; o < e.purposes.length; ++o)
                                r.purposes[o] = e.purposes[o]
                        }
                        if (e.purposes_legint && e.purposes_legint.length) {
                            r.purposes_legint = [];
                            for (o = 0; o < e.purposes_legint.length; ++o)
                                r.purposes_legint[o] = e.purposes_legint[o]
                        }
                        if (e.vendors && e.vendors.length) {
                            r.vendors = [];
                            for (o = 0; o < e.vendors.length; ++o)
                                r.vendors[o] = e.vendors[o]
                        }
                        if (e.vendors_legint && e.vendors_legint.length) {
                            r.vendors_legint = [];
                            for (o = 0; o < e.vendors_legint.length; ++o)
                                r.vendors_legint[o] = e.vendors_legint[o]
                        }
                        if (null != e.cmp_version && e.hasOwnProperty("cmp_version") && (r.cmp_version = e.cmp_version),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.given_at && e.hasOwnProperty("given_at") && (r.given_at = i.google.protobuf.Timestamp.toObject(e.given_at, t)),
                        null != e.type && e.hasOwnProperty("type") && (r.type = t.enums === String ? i.ac.Consent.EnumConsentType[e.type] : e.type),
                        null != e.cmp_hash && e.hasOwnProperty("cmp_hash") && (r.cmp_hash = e.cmp_hash),
                        null != e.cmp_hash_version && e.hasOwnProperty("cmp_hash_version") && (r.cmp_hash_version = e.cmp_hash_version),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        if (null != e.transaction_id && e.hasOwnProperty("transaction_id") && (r.transaction_id = e.transaction_id),
                        null != e.block_id && e.hasOwnProperty("block_id") && (r.block_id = e.block_id),
                        null != e.origin && e.hasOwnProperty("origin") && (r.origin = e.origin),
                        null != e.consent_expiration && e.hasOwnProperty("consent_expiration") && (r.consent_expiration = i.google.protobuf.Duration.toObject(e.consent_expiration, t)),
                        e.purposes_names && (n = Object.keys(e.purposes_names)).length) {
                            r.purposes_names = {};
                            for (o = 0; o < n.length; ++o)
                                r.purposes_names[n[o]] = i.ac.I18NString.toObject(e.purposes_names[n[o]], t)
                        }
                        if (e.purposes_denied && e.purposes_denied.length) {
                            r.purposes_denied = [];
                            for (o = 0; o < e.purposes_denied.length; ++o)
                                r.purposes_denied[o] = e.purposes_denied[o]
                        }
                        if (e.purposes_listed && e.purposes_listed.length) {
                            r.purposes_listed = [];
                            for (o = 0; o < e.purposes_listed.length; ++o)
                                r.purposes_listed[o] = e.purposes_listed[o]
                        }
                        if (e.purposes_mandatory && e.purposes_mandatory.length) {
                            r.purposes_mandatory = [];
                            for (o = 0; o < e.purposes_mandatory.length; ++o)
                                r.purposes_mandatory[o] = e.purposes_mandatory[o]
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e.EnumConsentType = function() {
                        const e = {}
                          , t = Object.create(e);
                        return t[e[0] = "ACCEPT_ALL"] = 0,
                        t[e[1] = "DENY_ALL"] = 1,
                        t[e[2] = "MIXED"] = 2,
                        t[e[3] = "CONTINUE_WITHOUT_ACCEPTING"] = 3,
                        t
                    }(),
                    e
                }(),
                e.ConsentFloatingExtraPurpose = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.extra_id = "",
                    e.prototype.external_ids = s.emptyObject,
                    e.prototype.version = 0,
                    e.prototype.given_at = null,
                    e.prototype.uuid = "",
                    e.prototype.type = 0,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.extra_id && Object.hasOwnProperty.call(e, "extra_id") && t.uint32(10).string(e.extra_id),
                        null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(32).uint32(e.version),
                        null != e.given_at && Object.hasOwnProperty.call(e, "given_at") && i.google.protobuf.Timestamp.encode(e.given_at, t.uint32(50).fork()).ldelim(),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(58).string(e.uuid),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ConsentFloatingExtraPurpose)
                            return e;
                        var t = new i.ac.ConsentFloatingExtraPurpose;
                        if (null != e.extra_id && (t.extra_id = String(e.extra_id)),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.ConsentFloatingExtraPurpose.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        if (null != e.version && (t.version = e.version >>> 0),
                        null != e.given_at) {
                            if ("object" != typeof e.given_at)
                                throw TypeError(".ac.ConsentFloatingExtraPurpose.given_at: object expected");
                            t.given_at = i.google.protobuf.Timestamp.fromObject(e.given_at)
                        }
                        switch (null != e.uuid && (t.uuid = String(e.uuid)),
                        e.type) {
                        case "ConsentFloatingExtraPurposeType_UNKNOWN":
                        case 0:
                            t.type = 0;
                            break;
                        case "ConsentFloatingExtraPurposeType_ACCEPT":
                        case 1:
                            t.type = 1;
                            break;
                        case "ConsentFloatingExtraPurposeType_DENY":
                        case 2:
                            t.type = 2
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.extra_id = "",
                        r.type = t.enums === String ? "ConsentFloatingExtraPurposeType_UNKNOWN" : 0,
                        r.version = 0,
                        r.given_at = null,
                        r.uuid = ""),
                        null != e.extra_id && e.hasOwnProperty("extra_id") && (r.extra_id = e.extra_id),
                        null != e.type && e.hasOwnProperty("type") && (r.type = t.enums === String ? i.ac.ConsentFloatingExtraPurposeType[e.type] : e.type),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return null != e.version && e.hasOwnProperty("version") && (r.version = e.version),
                        null != e.given_at && e.hasOwnProperty("given_at") && (r.given_at = i.google.protobuf.Timestamp.toObject(e.given_at, t)),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ConsentFloatingExtraPurposeType = function() {
                    const e = {}
                      , t = Object.create(e);
                    return t[e[0] = "ConsentFloatingExtraPurposeType_UNKNOWN"] = 0,
                    t[e[1] = "ConsentFloatingExtraPurposeType_ACCEPT"] = 1,
                    t[e[2] = "ConsentFloatingExtraPurposeType_DENY"] = 2,
                    t
                }(),
                e.Vendorlist = function() {
                    function e(e) {
                        if (this.consentables = [],
                        this.vendors = [],
                        this.stacks = [],
                        this.geoloc_ad = [],
                        this.geoloc_market = [],
                        this.data_categories = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.iab_gvl = 0,
                    e.prototype.consentables = s.emptyArray,
                    e.prototype.vendors = s.emptyArray,
                    e.prototype.stacks = s.emptyArray,
                    e.prototype.tcf_policy_version = 0,
                    e.prototype.publisher_cc = "",
                    e.prototype.publisher_restrictions = "",
                    e.prototype.geoloc_ad = s.emptyArray,
                    e.prototype.geoloc_market = s.emptyArray,
                    e.prototype.google_providers = "",
                    e.prototype.consent_lifetime = 0,
                    e.prototype.remove_legintables = !1,
                    e.prototype.data_categories = s.emptyObject,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.iab_gvl && Object.hasOwnProperty.call(e, "iab_gvl") && t.uint32(8).uint32(e.iab_gvl),
                        null != e.consentables && e.consentables.length)
                            for (var n = 0; n < e.consentables.length; ++n)
                                i.ac.Vendorlist.Consentable.encode(e.consentables[n], t.uint32(18).fork()).ldelim();
                        if (null != e.vendors && e.vendors.length)
                            for (n = 0; n < e.vendors.length; ++n)
                                i.ac.Vendorlist.Vendor.encode(e.vendors[n], t.uint32(26).fork()).ldelim();
                        if (null != e.stacks && e.stacks.length)
                            for (n = 0; n < e.stacks.length; ++n)
                                i.ac.Vendorlist.Stack.encode(e.stacks[n], t.uint32(50).fork()).ldelim();
                        if (null != e.tcf_policy_version && Object.hasOwnProperty.call(e, "tcf_policy_version") && t.uint32(88).uint32(e.tcf_policy_version),
                        null != e.publisher_cc && Object.hasOwnProperty.call(e, "publisher_cc") && t.uint32(98).string(e.publisher_cc),
                        null != e.publisher_restrictions && Object.hasOwnProperty.call(e, "publisher_restrictions") && t.uint32(106).string(e.publisher_restrictions),
                        null != e.geoloc_ad && e.geoloc_ad.length)
                            for (n = 0; n < e.geoloc_ad.length; ++n)
                                t.uint32(112).uint32(e.geoloc_ad[n]);
                        if (null != e.geoloc_market && e.geoloc_market.length)
                            for (n = 0; n < e.geoloc_market.length; ++n)
                                t.uint32(120).uint32(e.geoloc_market[n]);
                        if (null != e.google_providers && Object.hasOwnProperty.call(e, "google_providers") && t.uint32(130).string(e.google_providers),
                        null != e.consent_lifetime && Object.hasOwnProperty.call(e, "consent_lifetime") && t.uint32(136).uint32(e.consent_lifetime),
                        null != e.remove_legintables && Object.hasOwnProperty.call(e, "remove_legintables") && t.uint32(144).bool(e.remove_legintables),
                        null != e.data_categories && Object.hasOwnProperty.call(e, "data_categories")) {
                            var r = Object.keys(e.data_categories);
                            for (n = 0; n < r.length; ++n)
                                t.uint32(154).fork().uint32(8).uint32(r[n]),
                                i.ac.Vendorlist.DataCategory.encode(e.data_categories[r[n]], t.uint32(18).fork()).ldelim().ldelim()
                        }
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Vendorlist)
                            return e;
                        var t = new i.ac.Vendorlist;
                        if (null != e.iab_gvl && (t.iab_gvl = e.iab_gvl >>> 0),
                        e.consentables) {
                            if (!Array.isArray(e.consentables))
                                throw TypeError(".ac.Vendorlist.consentables: array expected");
                            t.consentables = [];
                            for (var n = 0; n < e.consentables.length; ++n) {
                                if ("object" != typeof e.consentables[n])
                                    throw TypeError(".ac.Vendorlist.consentables: object expected");
                                t.consentables[n] = i.ac.Vendorlist.Consentable.fromObject(e.consentables[n])
                            }
                        }
                        if (e.vendors) {
                            if (!Array.isArray(e.vendors))
                                throw TypeError(".ac.Vendorlist.vendors: array expected");
                            t.vendors = [];
                            for (n = 0; n < e.vendors.length; ++n) {
                                if ("object" != typeof e.vendors[n])
                                    throw TypeError(".ac.Vendorlist.vendors: object expected");
                                t.vendors[n] = i.ac.Vendorlist.Vendor.fromObject(e.vendors[n])
                            }
                        }
                        if (e.stacks) {
                            if (!Array.isArray(e.stacks))
                                throw TypeError(".ac.Vendorlist.stacks: array expected");
                            t.stacks = [];
                            for (n = 0; n < e.stacks.length; ++n) {
                                if ("object" != typeof e.stacks[n])
                                    throw TypeError(".ac.Vendorlist.stacks: object expected");
                                t.stacks[n] = i.ac.Vendorlist.Stack.fromObject(e.stacks[n])
                            }
                        }
                        if (null != e.tcf_policy_version && (t.tcf_policy_version = e.tcf_policy_version >>> 0),
                        null != e.publisher_cc && (t.publisher_cc = String(e.publisher_cc)),
                        null != e.publisher_restrictions && (t.publisher_restrictions = String(e.publisher_restrictions)),
                        e.geoloc_ad) {
                            if (!Array.isArray(e.geoloc_ad))
                                throw TypeError(".ac.Vendorlist.geoloc_ad: array expected");
                            t.geoloc_ad = [];
                            for (n = 0; n < e.geoloc_ad.length; ++n)
                                t.geoloc_ad[n] = e.geoloc_ad[n] >>> 0
                        }
                        if (e.geoloc_market) {
                            if (!Array.isArray(e.geoloc_market))
                                throw TypeError(".ac.Vendorlist.geoloc_market: array expected");
                            t.geoloc_market = [];
                            for (n = 0; n < e.geoloc_market.length; ++n)
                                t.geoloc_market[n] = e.geoloc_market[n] >>> 0
                        }
                        if (null != e.google_providers && (t.google_providers = String(e.google_providers)),
                        null != e.consent_lifetime && (t.consent_lifetime = e.consent_lifetime >>> 0),
                        null != e.remove_legintables && (t.remove_legintables = Boolean(e.remove_legintables)),
                        e.data_categories) {
                            if ("object" != typeof e.data_categories)
                                throw TypeError(".ac.Vendorlist.data_categories: object expected");
                            t.data_categories = {};
                            var r = Object.keys(e.data_categories);
                            for (n = 0; n < r.length; ++n) {
                                if ("object" != typeof e.data_categories[r[n]])
                                    throw TypeError(".ac.Vendorlist.data_categories: object expected");
                                t.data_categories[r[n]] = i.ac.Vendorlist.DataCategory.fromObject(e.data_categories[r[n]])
                            }
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.arrays || t.defaults) && (r.consentables = [],
                        r.vendors = [],
                        r.stacks = [],
                        r.geoloc_ad = [],
                        r.geoloc_market = []),
                        (t.objects || t.defaults) && (r.data_categories = {}),
                        t.defaults && (r.iab_gvl = 0,
                        r.tcf_policy_version = 0,
                        r.publisher_cc = "",
                        r.publisher_restrictions = "",
                        r.google_providers = "",
                        r.consent_lifetime = 0,
                        r.remove_legintables = !1),
                        null != e.iab_gvl && e.hasOwnProperty("iab_gvl") && (r.iab_gvl = e.iab_gvl),
                        e.consentables && e.consentables.length) {
                            r.consentables = [];
                            for (var o = 0; o < e.consentables.length; ++o)
                                r.consentables[o] = i.ac.Vendorlist.Consentable.toObject(e.consentables[o], t)
                        }
                        if (e.vendors && e.vendors.length) {
                            r.vendors = [];
                            for (o = 0; o < e.vendors.length; ++o)
                                r.vendors[o] = i.ac.Vendorlist.Vendor.toObject(e.vendors[o], t)
                        }
                        if (e.stacks && e.stacks.length) {
                            r.stacks = [];
                            for (o = 0; o < e.stacks.length; ++o)
                                r.stacks[o] = i.ac.Vendorlist.Stack.toObject(e.stacks[o], t)
                        }
                        if (null != e.tcf_policy_version && e.hasOwnProperty("tcf_policy_version") && (r.tcf_policy_version = e.tcf_policy_version),
                        null != e.publisher_cc && e.hasOwnProperty("publisher_cc") && (r.publisher_cc = e.publisher_cc),
                        null != e.publisher_restrictions && e.hasOwnProperty("publisher_restrictions") && (r.publisher_restrictions = e.publisher_restrictions),
                        e.geoloc_ad && e.geoloc_ad.length) {
                            r.geoloc_ad = [];
                            for (o = 0; o < e.geoloc_ad.length; ++o)
                                r.geoloc_ad[o] = e.geoloc_ad[o]
                        }
                        if (e.geoloc_market && e.geoloc_market.length) {
                            r.geoloc_market = [];
                            for (o = 0; o < e.geoloc_market.length; ++o)
                                r.geoloc_market[o] = e.geoloc_market[o]
                        }
                        if (null != e.google_providers && e.hasOwnProperty("google_providers") && (r.google_providers = e.google_providers),
                        null != e.consent_lifetime && e.hasOwnProperty("consent_lifetime") && (r.consent_lifetime = e.consent_lifetime),
                        null != e.remove_legintables && e.hasOwnProperty("remove_legintables") && (r.remove_legintables = e.remove_legintables),
                        e.data_categories && (n = Object.keys(e.data_categories)).length) {
                            r.data_categories = {};
                            for (o = 0; o < n.length; ++o)
                                r.data_categories[n[o]] = i.ac.Vendorlist.DataCategory.toObject(e.data_categories[n[o]], t)
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e.DataCategory = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                        e.prototype.name = null,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            return t || (t = o.create()),
                            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                            null != e.name && Object.hasOwnProperty.call(e, "name") && i.ac.I18NString.encode(e.name, t.uint32(18).fork()).ldelim(),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.ac.Vendorlist.DataCategory)
                                return e;
                            var t = new i.ac.Vendorlist.DataCategory;
                            if (null != e.id && (t.id = e.id >>> 0),
                            null != e.name) {
                                if ("object" != typeof e.name)
                                    throw TypeError(".ac.Vendorlist.DataCategory.name: object expected");
                                t.name = i.ac.I18NString.fromObject(e.name)
                            }
                            return t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = 0,
                            n.name = null),
                            null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                            null != e.name && e.hasOwnProperty("name") && (n.name = i.ac.I18NString.toObject(e.name, t)),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e
                    }(),
                    e.Consentable = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                        e.prototype.iab_id = 0,
                        e.prototype.extra_id = "",
                        e.prototype.name = null,
                        e.prototype.description = null,
                        e.prototype.description_legal = null,
                        e.prototype.type = 0,
                        e.prototype.illustrations = null,
                        e.prototype.vendors_number = 0,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            return t || (t = o.create()),
                            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                            null != e.iab_id && Object.hasOwnProperty.call(e, "iab_id") && t.uint32(16).uint32(e.iab_id),
                            null != e.name && Object.hasOwnProperty.call(e, "name") && i.ac.I18NString.encode(e.name, t.uint32(26).fork()).ldelim(),
                            null != e.description && Object.hasOwnProperty.call(e, "description") && i.ac.I18NString.encode(e.description, t.uint32(34).fork()).ldelim(),
                            null != e.description_legal && Object.hasOwnProperty.call(e, "description_legal") && i.ac.I18NString.encode(e.description_legal, t.uint32(42).fork()).ldelim(),
                            null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(48).int32(e.type),
                            null != e.extra_id && Object.hasOwnProperty.call(e, "extra_id") && t.uint32(58).string(e.extra_id),
                            null != e.illustrations && Object.hasOwnProperty.call(e, "illustrations") && i.ac.I18NString.encode(e.illustrations, t.uint32(66).fork()).ldelim(),
                            null != e.vendors_number && Object.hasOwnProperty.call(e, "vendors_number") && t.uint32(72).uint32(e.vendors_number),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.ac.Vendorlist.Consentable)
                                return e;
                            var t = new i.ac.Vendorlist.Consentable;
                            if (null != e.id && (t.id = e.id >>> 0),
                            null != e.iab_id && (t.iab_id = e.iab_id >>> 0),
                            null != e.extra_id && (t.extra_id = String(e.extra_id)),
                            null != e.name) {
                                if ("object" != typeof e.name)
                                    throw TypeError(".ac.Vendorlist.Consentable.name: object expected");
                                t.name = i.ac.I18NString.fromObject(e.name)
                            }
                            if (null != e.description) {
                                if ("object" != typeof e.description)
                                    throw TypeError(".ac.Vendorlist.Consentable.description: object expected");
                                t.description = i.ac.I18NString.fromObject(e.description)
                            }
                            if (null != e.description_legal) {
                                if ("object" != typeof e.description_legal)
                                    throw TypeError(".ac.Vendorlist.Consentable.description_legal: object expected");
                                t.description_legal = i.ac.I18NString.fromObject(e.description_legal)
                            }
                            switch (e.type) {
                            case "PURPOSE":
                            case 0:
                                t.type = 0;
                                break;
                            case "FEATURE":
                            case 1:
                                t.type = 1;
                                break;
                            case "SPECIAL_FEATURE":
                            case 2:
                                t.type = 2;
                                break;
                            case "SPECIAL_PURPOSE":
                            case 3:
                                t.type = 3
                            }
                            if (null != e.illustrations) {
                                if ("object" != typeof e.illustrations)
                                    throw TypeError(".ac.Vendorlist.Consentable.illustrations: object expected");
                                t.illustrations = i.ac.I18NString.fromObject(e.illustrations)
                            }
                            return null != e.vendors_number && (t.vendors_number = e.vendors_number >>> 0),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.id = 0,
                            n.iab_id = 0,
                            n.name = null,
                            n.description = null,
                            n.description_legal = null,
                            n.type = t.enums === String ? "PURPOSE" : 0,
                            n.extra_id = "",
                            n.illustrations = null,
                            n.vendors_number = 0),
                            null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                            null != e.iab_id && e.hasOwnProperty("iab_id") && (n.iab_id = e.iab_id),
                            null != e.name && e.hasOwnProperty("name") && (n.name = i.ac.I18NString.toObject(e.name, t)),
                            null != e.description && e.hasOwnProperty("description") && (n.description = i.ac.I18NString.toObject(e.description, t)),
                            null != e.description_legal && e.hasOwnProperty("description_legal") && (n.description_legal = i.ac.I18NString.toObject(e.description_legal, t)),
                            null != e.type && e.hasOwnProperty("type") && (n.type = t.enums === String ? i.ac.Vendorlist.Consentable.EnumConsentableType[e.type] : e.type),
                            null != e.extra_id && e.hasOwnProperty("extra_id") && (n.extra_id = e.extra_id),
                            null != e.illustrations && e.hasOwnProperty("illustrations") && (n.illustrations = i.ac.I18NString.toObject(e.illustrations, t)),
                            null != e.vendors_number && e.hasOwnProperty("vendors_number") && (n.vendors_number = e.vendors_number),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e.EnumConsentableType = function() {
                            const e = {}
                              , t = Object.create(e);
                            return t[e[0] = "PURPOSE"] = 0,
                            t[e[1] = "FEATURE"] = 1,
                            t[e[2] = "SPECIAL_FEATURE"] = 2,
                            t[e[3] = "SPECIAL_PURPOSE"] = 3,
                            t
                        }(),
                        e
                    }(),
                    e.Vendor = function() {
                        function e(e) {
                            if (this.consentables = [],
                            this.legintables = [],
                            this.flexibles = [],
                            this.urls = {},
                            this.data_categories = [],
                            this.data_declaration = [],
                            e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                        e.prototype.iab_id = 0,
                        e.prototype.name = "",
                        e.prototype.policy_url = "",
                        e.prototype.extra_id = "",
                        e.prototype.google_atp_id = 0,
                        e.prototype.uses_non_cookie_access = !1,
                        e.prototype.cookie_max_age_seconds = 0,
                        e.prototype.consentables = s.emptyArray,
                        e.prototype.legintables = s.emptyArray,
                        e.prototype.flexibles = s.emptyArray,
                        e.prototype.urls = s.emptyObject,
                        e.prototype.data_retention = null,
                        e.prototype.data_categories = s.emptyArray,
                        e.prototype.data_declaration = s.emptyArray,
                        e.prototype.cookie_refresh = !1,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            if (t || (t = o.create()),
                            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                            null != e.iab_id && Object.hasOwnProperty.call(e, "iab_id") && t.uint32(16).uint32(e.iab_id),
                            null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name),
                            null != e.policy_url && Object.hasOwnProperty.call(e, "policy_url") && t.uint32(34).string(e.policy_url),
                            null != e.consentables && e.consentables.length)
                                for (var n = 0; n < e.consentables.length; ++n)
                                    t.uint32(40).uint32(e.consentables[n]);
                            if (null != e.legintables && e.legintables.length)
                                for (n = 0; n < e.legintables.length; ++n)
                                    t.uint32(48).uint32(e.legintables[n]);
                            if (null != e.extra_id && Object.hasOwnProperty.call(e, "extra_id") && t.uint32(58).string(e.extra_id),
                            null != e.uses_non_cookie_access && Object.hasOwnProperty.call(e, "uses_non_cookie_access") && t.uint32(72).bool(e.uses_non_cookie_access),
                            null != e.cookie_max_age_seconds && Object.hasOwnProperty.call(e, "cookie_max_age_seconds") && t.uint32(80).int64(e.cookie_max_age_seconds),
                            null != e.flexibles && e.flexibles.length)
                                for (n = 0; n < e.flexibles.length; ++n)
                                    t.uint32(88).uint32(e.flexibles[n]);
                            if (null != e.google_atp_id && Object.hasOwnProperty.call(e, "google_atp_id") && t.uint32(96).uint32(e.google_atp_id),
                            null != e.urls && Object.hasOwnProperty.call(e, "urls")) {
                                var r = Object.keys(e.urls);
                                for (n = 0; n < r.length; ++n)
                                    t.uint32(106).fork().uint32(10).string(r[n]),
                                    i.ac.Vendorlist.Vendor.VendorUrl.encode(e.urls[r[n]], t.uint32(18).fork()).ldelim().ldelim()
                            }
                            if (null != e.data_retention && Object.hasOwnProperty.call(e, "data_retention") && i.ac.Vendorlist.Vendor.DataRetention.encode(e.data_retention, t.uint32(114).fork()).ldelim(),
                            null != e.data_categories && e.data_categories.length)
                                for (n = 0; n < e.data_categories.length; ++n)
                                    i.ac.Vendorlist.DataCategory.encode(e.data_categories[n], t.uint32(122).fork()).ldelim();
                            if (null != e.data_declaration && e.data_declaration.length) {
                                t.uint32(130).fork();
                                for (n = 0; n < e.data_declaration.length; ++n)
                                    t.uint32(e.data_declaration[n]);
                                t.ldelim()
                            }
                            return null != e.cookie_refresh && Object.hasOwnProperty.call(e, "cookie_refresh") && t.uint32(136).bool(e.cookie_refresh),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.ac.Vendorlist.Vendor)
                                return e;
                            var t = new i.ac.Vendorlist.Vendor;
                            if (null != e.id && (t.id = e.id >>> 0),
                            null != e.iab_id && (t.iab_id = e.iab_id >>> 0),
                            null != e.name && (t.name = String(e.name)),
                            null != e.policy_url && (t.policy_url = String(e.policy_url)),
                            null != e.extra_id && (t.extra_id = String(e.extra_id)),
                            null != e.google_atp_id && (t.google_atp_id = e.google_atp_id >>> 0),
                            null != e.uses_non_cookie_access && (t.uses_non_cookie_access = Boolean(e.uses_non_cookie_access)),
                            null != e.cookie_max_age_seconds && (s.Long ? (t.cookie_max_age_seconds = s.Long.fromValue(e.cookie_max_age_seconds)).unsigned = !1 : "string" == typeof e.cookie_max_age_seconds ? t.cookie_max_age_seconds = parseInt(e.cookie_max_age_seconds, 10) : "number" == typeof e.cookie_max_age_seconds ? t.cookie_max_age_seconds = e.cookie_max_age_seconds : "object" == typeof e.cookie_max_age_seconds && (t.cookie_max_age_seconds = new s.LongBits(e.cookie_max_age_seconds.low >>> 0,e.cookie_max_age_seconds.high >>> 0).toNumber())),
                            e.consentables) {
                                if (!Array.isArray(e.consentables))
                                    throw TypeError(".ac.Vendorlist.Vendor.consentables: array expected");
                                t.consentables = [];
                                for (var n = 0; n < e.consentables.length; ++n)
                                    t.consentables[n] = e.consentables[n] >>> 0
                            }
                            if (e.legintables) {
                                if (!Array.isArray(e.legintables))
                                    throw TypeError(".ac.Vendorlist.Vendor.legintables: array expected");
                                t.legintables = [];
                                for (n = 0; n < e.legintables.length; ++n)
                                    t.legintables[n] = e.legintables[n] >>> 0
                            }
                            if (e.flexibles) {
                                if (!Array.isArray(e.flexibles))
                                    throw TypeError(".ac.Vendorlist.Vendor.flexibles: array expected");
                                t.flexibles = [];
                                for (n = 0; n < e.flexibles.length; ++n)
                                    t.flexibles[n] = e.flexibles[n] >>> 0
                            }
                            if (e.urls) {
                                if ("object" != typeof e.urls)
                                    throw TypeError(".ac.Vendorlist.Vendor.urls: object expected");
                                t.urls = {};
                                var r = Object.keys(e.urls);
                                for (n = 0; n < r.length; ++n) {
                                    if ("object" != typeof e.urls[r[n]])
                                        throw TypeError(".ac.Vendorlist.Vendor.urls: object expected");
                                    t.urls[r[n]] = i.ac.Vendorlist.Vendor.VendorUrl.fromObject(e.urls[r[n]])
                                }
                            }
                            if (null != e.data_retention) {
                                if ("object" != typeof e.data_retention)
                                    throw TypeError(".ac.Vendorlist.Vendor.data_retention: object expected");
                                t.data_retention = i.ac.Vendorlist.Vendor.DataRetention.fromObject(e.data_retention)
                            }
                            if (e.data_categories) {
                                if (!Array.isArray(e.data_categories))
                                    throw TypeError(".ac.Vendorlist.Vendor.data_categories: array expected");
                                t.data_categories = [];
                                for (n = 0; n < e.data_categories.length; ++n) {
                                    if ("object" != typeof e.data_categories[n])
                                        throw TypeError(".ac.Vendorlist.Vendor.data_categories: object expected");
                                    t.data_categories[n] = i.ac.Vendorlist.DataCategory.fromObject(e.data_categories[n])
                                }
                            }
                            if (e.data_declaration) {
                                if (!Array.isArray(e.data_declaration))
                                    throw TypeError(".ac.Vendorlist.Vendor.data_declaration: array expected");
                                t.data_declaration = [];
                                for (n = 0; n < e.data_declaration.length; ++n)
                                    t.data_declaration[n] = e.data_declaration[n] >>> 0
                            }
                            return null != e.cookie_refresh && (t.cookie_refresh = Boolean(e.cookie_refresh)),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n, r = {};
                            if ((t.arrays || t.defaults) && (r.consentables = [],
                            r.legintables = [],
                            r.flexibles = [],
                            r.data_categories = [],
                            r.data_declaration = []),
                            (t.objects || t.defaults) && (r.urls = {}),
                            t.defaults && (r.id = 0,
                            r.iab_id = 0,
                            r.name = "",
                            r.policy_url = "",
                            r.extra_id = "",
                            r.uses_non_cookie_access = !1,
                            r.cookie_max_age_seconds = 0,
                            r.google_atp_id = 0,
                            r.data_retention = null,
                            r.cookie_refresh = !1),
                            null != e.id && e.hasOwnProperty("id") && (r.id = e.id),
                            null != e.iab_id && e.hasOwnProperty("iab_id") && (r.iab_id = e.iab_id),
                            null != e.name && e.hasOwnProperty("name") && (r.name = e.name),
                            null != e.policy_url && e.hasOwnProperty("policy_url") && (r.policy_url = e.policy_url),
                            e.consentables && e.consentables.length) {
                                r.consentables = [];
                                for (var o = 0; o < e.consentables.length; ++o)
                                    r.consentables[o] = e.consentables[o]
                            }
                            if (e.legintables && e.legintables.length) {
                                r.legintables = [];
                                for (o = 0; o < e.legintables.length; ++o)
                                    r.legintables[o] = e.legintables[o]
                            }
                            if (null != e.extra_id && e.hasOwnProperty("extra_id") && (r.extra_id = e.extra_id),
                            null != e.uses_non_cookie_access && e.hasOwnProperty("uses_non_cookie_access") && (r.uses_non_cookie_access = e.uses_non_cookie_access),
                            null != e.cookie_max_age_seconds && e.hasOwnProperty("cookie_max_age_seconds") && ("number" == typeof e.cookie_max_age_seconds ? r.cookie_max_age_seconds = t.longs === String ? String(e.cookie_max_age_seconds) : e.cookie_max_age_seconds : r.cookie_max_age_seconds = t.longs === String ? s.Long.prototype.toString.call(e.cookie_max_age_seconds) : t.longs === Number ? new s.LongBits(e.cookie_max_age_seconds.low >>> 0,e.cookie_max_age_seconds.high >>> 0).toNumber() : e.cookie_max_age_seconds),
                            e.flexibles && e.flexibles.length) {
                                r.flexibles = [];
                                for (o = 0; o < e.flexibles.length; ++o)
                                    r.flexibles[o] = e.flexibles[o]
                            }
                            if (null != e.google_atp_id && e.hasOwnProperty("google_atp_id") && (r.google_atp_id = e.google_atp_id),
                            e.urls && (n = Object.keys(e.urls)).length) {
                                r.urls = {};
                                for (o = 0; o < n.length; ++o)
                                    r.urls[n[o]] = i.ac.Vendorlist.Vendor.VendorUrl.toObject(e.urls[n[o]], t)
                            }
                            if (null != e.data_retention && e.hasOwnProperty("data_retention") && (r.data_retention = i.ac.Vendorlist.Vendor.DataRetention.toObject(e.data_retention, t)),
                            e.data_categories && e.data_categories.length) {
                                r.data_categories = [];
                                for (o = 0; o < e.data_categories.length; ++o)
                                    r.data_categories[o] = i.ac.Vendorlist.DataCategory.toObject(e.data_categories[o], t)
                            }
                            if (e.data_declaration && e.data_declaration.length) {
                                r.data_declaration = [];
                                for (o = 0; o < e.data_declaration.length; ++o)
                                    r.data_declaration[o] = e.data_declaration[o]
                            }
                            return null != e.cookie_refresh && e.hasOwnProperty("cookie_refresh") && (r.cookie_refresh = e.cookie_refresh),
                            r
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e.VendorUrl = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                        null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return e.prototype.privacy = "",
                            e.prototype.legint_claim = "",
                            e.create = function(t) {
                                return new e(t)
                            }
                            ,
                            e.encode = function(e, t) {
                                return t || (t = o.create()),
                                null != e.privacy && Object.hasOwnProperty.call(e, "privacy") && t.uint32(10).string(e.privacy),
                                null != e.legint_claim && Object.hasOwnProperty.call(e, "legint_claim") && t.uint32(18).string(e.legint_claim),
                                t
                            }
                            ,
                            e.fromObject = function(e) {
                                if (e instanceof i.ac.Vendorlist.Vendor.VendorUrl)
                                    return e;
                                var t = new i.ac.Vendorlist.Vendor.VendorUrl;
                                return null != e.privacy && (t.privacy = String(e.privacy)),
                                null != e.legint_claim && (t.legint_claim = String(e.legint_claim)),
                                t
                            }
                            ,
                            e.toObject = function(e, t) {
                                t || (t = {});
                                var n = {};
                                return t.defaults && (n.privacy = "",
                                n.legint_claim = ""),
                                null != e.privacy && e.hasOwnProperty("privacy") && (n.privacy = e.privacy),
                                null != e.legint_claim && e.hasOwnProperty("legint_claim") && (n.legint_claim = e.legint_claim),
                                n
                            }
                            ,
                            e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, r.util.toJSONOptions)
                            }
                            ,
                            e
                        }(),
                        e.DataRetention = function() {
                            function e(e) {
                                if (this.purposes = {},
                                this.special_purposes = {},
                                e)
                                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                        null != e[t[n]] && (this[t[n]] = e[t[n]])
                            }
                            return e.prototype.std_retention = 0,
                            e.prototype.purposes = s.emptyObject,
                            e.prototype.special_purposes = s.emptyObject,
                            e.create = function(t) {
                                return new e(t)
                            }
                            ,
                            e.encode = function(e, t) {
                                if (t || (t = o.create()),
                                null != e.std_retention && Object.hasOwnProperty.call(e, "std_retention") && t.uint32(8).uint32(e.std_retention),
                                null != e.purposes && Object.hasOwnProperty.call(e, "purposes"))
                                    for (var n = Object.keys(e.purposes), r = 0; r < n.length; ++r)
                                        t.uint32(18).fork().uint32(10).string(n[r]).uint32(16).uint32(e.purposes[n[r]]).ldelim();
                                if (null != e.special_purposes && Object.hasOwnProperty.call(e, "special_purposes"))
                                    for (n = Object.keys(e.special_purposes),
                                    r = 0; r < n.length; ++r)
                                        t.uint32(26).fork().uint32(10).string(n[r]).uint32(16).uint32(e.special_purposes[n[r]]).ldelim();
                                return t
                            }
                            ,
                            e.fromObject = function(e) {
                                if (e instanceof i.ac.Vendorlist.Vendor.DataRetention)
                                    return e;
                                var t = new i.ac.Vendorlist.Vendor.DataRetention;
                                if (null != e.std_retention && (t.std_retention = e.std_retention >>> 0),
                                e.purposes) {
                                    if ("object" != typeof e.purposes)
                                        throw TypeError(".ac.Vendorlist.Vendor.DataRetention.purposes: object expected");
                                    t.purposes = {};
                                    for (var n = Object.keys(e.purposes), r = 0; r < n.length; ++r)
                                        t.purposes[n[r]] = e.purposes[n[r]] >>> 0
                                }
                                if (e.special_purposes) {
                                    if ("object" != typeof e.special_purposes)
                                        throw TypeError(".ac.Vendorlist.Vendor.DataRetention.special_purposes: object expected");
                                    t.special_purposes = {};
                                    for (n = Object.keys(e.special_purposes),
                                    r = 0; r < n.length; ++r)
                                        t.special_purposes[n[r]] = e.special_purposes[n[r]] >>> 0
                                }
                                return t
                            }
                            ,
                            e.toObject = function(e, t) {
                                t || (t = {});
                                var n, r = {};
                                if ((t.objects || t.defaults) && (r.purposes = {},
                                r.special_purposes = {}),
                                t.defaults && (r.std_retention = 0),
                                null != e.std_retention && e.hasOwnProperty("std_retention") && (r.std_retention = e.std_retention),
                                e.purposes && (n = Object.keys(e.purposes)).length) {
                                    r.purposes = {};
                                    for (var o = 0; o < n.length; ++o)
                                        r.purposes[n[o]] = e.purposes[n[o]]
                                }
                                if (e.special_purposes && (n = Object.keys(e.special_purposes)).length) {
                                    r.special_purposes = {};
                                    for (o = 0; o < n.length; ++o)
                                        r.special_purposes[n[o]] = e.special_purposes[n[o]]
                                }
                                return r
                            }
                            ,
                            e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, r.util.toJSONOptions)
                            }
                            ,
                            e
                        }(),
                        e
                    }(),
                    e.Stack = function() {
                        function e(e) {
                            if (this.consentables = [],
                            e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.id = 0,
                        e.prototype.iab_id = 0,
                        e.prototype.name = null,
                        e.prototype.description = null,
                        e.prototype.consentables = s.emptyArray,
                        e.prototype.vendors_number = 0,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            if (t || (t = o.create()),
                            null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id),
                            null != e.iab_id && Object.hasOwnProperty.call(e, "iab_id") && t.uint32(16).uint32(e.iab_id),
                            null != e.name && Object.hasOwnProperty.call(e, "name") && i.ac.I18NString.encode(e.name, t.uint32(26).fork()).ldelim(),
                            null != e.description && Object.hasOwnProperty.call(e, "description") && i.ac.I18NString.encode(e.description, t.uint32(34).fork()).ldelim(),
                            null != e.consentables && e.consentables.length)
                                for (var n = 0; n < e.consentables.length; ++n)
                                    t.uint32(40).uint32(e.consentables[n]);
                            return null != e.vendors_number && Object.hasOwnProperty.call(e, "vendors_number") && t.uint32(48).uint32(e.vendors_number),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.ac.Vendorlist.Stack)
                                return e;
                            var t = new i.ac.Vendorlist.Stack;
                            if (null != e.id && (t.id = e.id >>> 0),
                            null != e.iab_id && (t.iab_id = e.iab_id >>> 0),
                            null != e.name) {
                                if ("object" != typeof e.name)
                                    throw TypeError(".ac.Vendorlist.Stack.name: object expected");
                                t.name = i.ac.I18NString.fromObject(e.name)
                            }
                            if (null != e.description) {
                                if ("object" != typeof e.description)
                                    throw TypeError(".ac.Vendorlist.Stack.description: object expected");
                                t.description = i.ac.I18NString.fromObject(e.description)
                            }
                            if (e.consentables) {
                                if (!Array.isArray(e.consentables))
                                    throw TypeError(".ac.Vendorlist.Stack.consentables: array expected");
                                t.consentables = [];
                                for (var n = 0; n < e.consentables.length; ++n)
                                    t.consentables[n] = e.consentables[n] >>> 0
                            }
                            return null != e.vendors_number && (t.vendors_number = e.vendors_number >>> 0),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.consentables = []),
                            t.defaults && (n.id = 0,
                            n.iab_id = 0,
                            n.name = null,
                            n.description = null,
                            n.vendors_number = 0),
                            null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                            null != e.iab_id && e.hasOwnProperty("iab_id") && (n.iab_id = e.iab_id),
                            null != e.name && e.hasOwnProperty("name") && (n.name = i.ac.I18NString.toObject(e.name, t)),
                            null != e.description && e.hasOwnProperty("description") && (n.description = i.ac.I18NString.toObject(e.description, t)),
                            e.consentables && e.consentables.length) {
                                n.consentables = [];
                                for (var r = 0; r < e.consentables.length; ++r)
                                    n.consentables[r] = e.consentables[r]
                            }
                            return null != e.vendors_number && e.hasOwnProperty("vendors_number") && (n.vendors_number = e.vendors_number),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e
                    }(),
                    e
                }(),
                e.I18NString = function() {
                    function e(e) {
                        if (this.values = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.values = s.emptyObject,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.values && Object.hasOwnProperty.call(e, "values"))
                            for (var n = Object.keys(e.values), r = 0; r < n.length; ++r)
                                t.uint32(10).fork().uint32(10).string(n[r]).uint32(18).string(e.values[n[r]]).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.I18NString)
                            return e;
                        var t = new i.ac.I18NString;
                        if (e.values) {
                            if ("object" != typeof e.values)
                                throw TypeError(".ac.I18NString.values: object expected");
                            t.values = {};
                            for (var n = Object.keys(e.values), r = 0; r < n.length; ++r)
                                t.values[n[r]] = String(e.values[n[r]])
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.values = {}),
                        e.values && (n = Object.keys(e.values)).length) {
                            r.values = {};
                            for (var o = 0; o < n.length; ++o)
                                r.values[n[o]] = e.values[n[o]]
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Country = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.code = "",
                    e.prototype.gdpr = !1,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(10).string(e.code),
                        null != e.gdpr && Object.hasOwnProperty.call(e, "gdpr") && t.uint32(16).bool(e.gdpr),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Country)
                            return e;
                        var t = new i.ac.Country;
                        return null != e.code && (t.code = String(e.code)),
                        null != e.gdpr && (t.gdpr = Boolean(e.gdpr)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.code = "",
                        n.gdpr = !1),
                        null != e.code && e.hasOwnProperty("code") && (n.code = e.code),
                        null != e.gdpr && e.hasOwnProperty("gdpr") && (n.gdpr = e.gdpr),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ScriptsInjector = function() {
                    function e(e) {
                        if (this.scripts = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.scripts = s.emptyArray,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.scripts && e.scripts.length)
                            for (var n = 0; n < e.scripts.length; ++n)
                                i.ac.ScriptsInjector.ScriptToInject.encode(e.scripts[n], t.uint32(10).fork()).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ScriptsInjector)
                            return e;
                        var t = new i.ac.ScriptsInjector;
                        if (e.scripts) {
                            if (!Array.isArray(e.scripts))
                                throw TypeError(".ac.ScriptsInjector.scripts: array expected");
                            t.scripts = [];
                            for (var n = 0; n < e.scripts.length; ++n) {
                                if ("object" != typeof e.scripts[n])
                                    throw TypeError(".ac.ScriptsInjector.scripts: object expected");
                                t.scripts[n] = i.ac.ScriptsInjector.ScriptToInject.fromObject(e.scripts[n])
                            }
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        if ((t.arrays || t.defaults) && (n.scripts = []),
                        e.scripts && e.scripts.length) {
                            n.scripts = [];
                            for (var r = 0; r < e.scripts.length; ++r)
                                n.scripts[r] = i.ac.ScriptsInjector.ScriptToInject.toObject(e.scripts[r], t)
                        }
                        return n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e.ScriptToInject = function() {
                        function e(e) {
                            if (this.languages_conditions = [],
                            e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.path = "",
                        e.prototype.trigger_conditions = "",
                        e.prototype.languages_conditions = s.emptyArray,
                        e.prototype.percent_display = 0,
                        e.prototype.config_variable_name = "",
                        e.prototype.config_variable = "",
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            if (t || (t = o.create()),
                            null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path),
                            null != e.trigger_conditions && Object.hasOwnProperty.call(e, "trigger_conditions") && t.uint32(18).string(e.trigger_conditions),
                            null != e.languages_conditions && e.languages_conditions.length)
                                for (var n = 0; n < e.languages_conditions.length; ++n)
                                    t.uint32(26).string(e.languages_conditions[n]);
                            return null != e.percent_display && Object.hasOwnProperty.call(e, "percent_display") && t.uint32(32).uint32(e.percent_display),
                            null != e.config_variable_name && Object.hasOwnProperty.call(e, "config_variable_name") && t.uint32(42).string(e.config_variable_name),
                            null != e.config_variable && Object.hasOwnProperty.call(e, "config_variable") && t.uint32(50).string(e.config_variable),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.ac.ScriptsInjector.ScriptToInject)
                                return e;
                            var t = new i.ac.ScriptsInjector.ScriptToInject;
                            if (null != e.path && (t.path = String(e.path)),
                            null != e.trigger_conditions && (t.trigger_conditions = String(e.trigger_conditions)),
                            e.languages_conditions) {
                                if (!Array.isArray(e.languages_conditions))
                                    throw TypeError(".ac.ScriptsInjector.ScriptToInject.languages_conditions: array expected");
                                t.languages_conditions = [];
                                for (var n = 0; n < e.languages_conditions.length; ++n)
                                    t.languages_conditions[n] = String(e.languages_conditions[n])
                            }
                            return null != e.percent_display && (t.percent_display = e.percent_display >>> 0),
                            null != e.config_variable_name && (t.config_variable_name = String(e.config_variable_name)),
                            null != e.config_variable && (t.config_variable = String(e.config_variable)),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            if ((t.arrays || t.defaults) && (n.languages_conditions = []),
                            t.defaults && (n.path = "",
                            n.trigger_conditions = "",
                            n.percent_display = 0,
                            n.config_variable_name = "",
                            n.config_variable = ""),
                            null != e.path && e.hasOwnProperty("path") && (n.path = e.path),
                            null != e.trigger_conditions && e.hasOwnProperty("trigger_conditions") && (n.trigger_conditions = e.trigger_conditions),
                            e.languages_conditions && e.languages_conditions.length) {
                                n.languages_conditions = [];
                                for (var r = 0; r < e.languages_conditions.length; ++r)
                                    n.languages_conditions[r] = e.languages_conditions[r]
                            }
                            return null != e.percent_display && e.hasOwnProperty("percent_display") && (n.percent_display = e.percent_display),
                            null != e.config_variable_name && e.hasOwnProperty("config_variable_name") && (n.config_variable_name = e.config_variable_name),
                            null != e.config_variable && e.hasOwnProperty("config_variable") && (n.config_variable = e.config_variable),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e
                    }(),
                    e
                }(),
                e.ShipRequest = function() {
                    function e(e) {
                        if (this.data = {},
                        this.geoloc = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.data = s.emptyObject,
                    e.prototype.geoloc = s.emptyArray,
                    e.prototype.collected_at = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.data && Object.hasOwnProperty.call(e, "data"))
                            for (var n = Object.keys(e.data), r = 0; r < n.length; ++r)
                                t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.data[n[r]]).ldelim();
                        if (null != e.geoloc && e.geoloc.length)
                            for (r = 0; r < e.geoloc.length; ++r)
                                i.ac.Geoloc.encode(e.geoloc[r], t.uint32(34).fork()).ldelim();
                        return null != e.collected_at && Object.hasOwnProperty.call(e, "collected_at") && i.google.protobuf.Timestamp.encode(e.collected_at, t.uint32(42).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ShipRequest)
                            return e;
                        var t = new i.ac.ShipRequest;
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        e.data) {
                            if ("object" != typeof e.data)
                                throw TypeError(".ac.ShipRequest.data: object expected");
                            t.data = {};
                            for (var n = Object.keys(e.data), r = 0; r < n.length; ++r)
                                t.data[n[r]] = String(e.data[n[r]])
                        }
                        if (e.geoloc) {
                            if (!Array.isArray(e.geoloc))
                                throw TypeError(".ac.ShipRequest.geoloc: array expected");
                            t.geoloc = [];
                            for (r = 0; r < e.geoloc.length; ++r) {
                                if ("object" != typeof e.geoloc[r])
                                    throw TypeError(".ac.ShipRequest.geoloc: object expected");
                                t.geoloc[r] = i.ac.Geoloc.fromObject(e.geoloc[r])
                            }
                        }
                        if (null != e.collected_at) {
                            if ("object" != typeof e.collected_at)
                                throw TypeError(".ac.ShipRequest.collected_at: object expected");
                            t.collected_at = i.google.protobuf.Timestamp.fromObject(e.collected_at)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.arrays || t.defaults) && (r.geoloc = []),
                        (t.objects || t.defaults) && (r.data = {}),
                        t.defaults && (r.uuid = "",
                        r.app_key = "",
                        r.collected_at = null),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        e.data && (n = Object.keys(e.data)).length) {
                            r.data = {};
                            for (var o = 0; o < n.length; ++o)
                                r.data[n[o]] = e.data[n[o]]
                        }
                        if (e.geoloc && e.geoloc.length) {
                            r.geoloc = [];
                            for (o = 0; o < e.geoloc.length; ++o)
                                r.geoloc[o] = i.ac.Geoloc.toObject(e.geoloc[o], t)
                        }
                        return null != e.collected_at && e.hasOwnProperty("collected_at") && (r.collected_at = i.google.protobuf.Timestamp.toObject(e.collected_at, t)),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ShipReply = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.error = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && i.ac.ErrorResponse.encode(e.error, t.uint32(10).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ShipReply)
                            return e;
                        var t = new i.ac.ShipReply;
                        if (null != e.error) {
                            if ("object" != typeof e.error)
                                throw TypeError(".ac.ShipReply.error: object expected");
                            t.error = i.ac.ErrorResponse.fromObject(e.error)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.error = null),
                        null != e.error && e.hasOwnProperty("error") && (n.error = i.ac.ErrorResponse.toObject(e.error, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.XchangeFeederRequest = function() {
                    function e(e) {
                        if (this.data = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.data = s.emptyObject,
                    e.prototype.collected_at = null,
                    e.prototype.consent_string = "",
                    e.prototype.to_so_id = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.data && Object.hasOwnProperty.call(e, "data"))
                            for (var n = Object.keys(e.data), r = 0; r < n.length; ++r)
                                t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.data[n[r]]).ldelim();
                        return null != e.collected_at && Object.hasOwnProperty.call(e, "collected_at") && i.google.protobuf.Timestamp.encode(e.collected_at, t.uint32(34).fork()).ldelim(),
                        null != e.consent_string && Object.hasOwnProperty.call(e, "consent_string") && t.uint32(42).string(e.consent_string),
                        null != e.to_so_id && Object.hasOwnProperty.call(e, "to_so_id") && t.uint32(50).string(e.to_so_id),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.XchangeFeederRequest)
                            return e;
                        var t = new i.ac.XchangeFeederRequest;
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        e.data) {
                            if ("object" != typeof e.data)
                                throw TypeError(".ac.XchangeFeederRequest.data: object expected");
                            t.data = {};
                            for (var n = Object.keys(e.data), r = 0; r < n.length; ++r)
                                t.data[n[r]] = String(e.data[n[r]])
                        }
                        if (null != e.collected_at) {
                            if ("object" != typeof e.collected_at)
                                throw TypeError(".ac.XchangeFeederRequest.collected_at: object expected");
                            t.collected_at = i.google.protobuf.Timestamp.fromObject(e.collected_at)
                        }
                        return null != e.consent_string && (t.consent_string = String(e.consent_string)),
                        null != e.to_so_id && (t.to_so_id = String(e.to_so_id)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.data = {}),
                        t.defaults && (r.uuid = "",
                        r.app_key = "",
                        r.collected_at = null,
                        r.consent_string = "",
                        r.to_so_id = ""),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        e.data && (n = Object.keys(e.data)).length) {
                            r.data = {};
                            for (var o = 0; o < n.length; ++o)
                                r.data[n[o]] = e.data[n[o]]
                        }
                        return null != e.collected_at && e.hasOwnProperty("collected_at") && (r.collected_at = i.google.protobuf.Timestamp.toObject(e.collected_at, t)),
                        null != e.consent_string && e.hasOwnProperty("consent_string") && (r.consent_string = e.consent_string),
                        null != e.to_so_id && e.hasOwnProperty("to_so_id") && (r.to_so_id = e.to_so_id),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.XchangeMsgV2 = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    let t;
                    return e.prototype.Metadata = null,
                    e.prototype.shipRequest = null,
                    e.prototype.xchangeFeederRequest = null,
                    e.prototype.external_ids = null,
                    Object.defineProperty(e.prototype, "content", {
                        get: s.oneOfGetter(t = ["shipRequest", "xchangeFeederRequest", "external_ids"]),
                        set: s.oneOfSetter(t)
                    }),
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.Metadata && Object.hasOwnProperty.call(e, "Metadata") && i.ac.Metadata.encode(e.Metadata, t.uint32(10).fork()).ldelim(),
                        null != e.shipRequest && Object.hasOwnProperty.call(e, "shipRequest") && i.ac.ShipRequest.encode(e.shipRequest, t.uint32(18).fork()).ldelim(),
                        null != e.xchangeFeederRequest && Object.hasOwnProperty.call(e, "xchangeFeederRequest") && i.ac.XchangeFeederRequest.encode(e.xchangeFeederRequest, t.uint32(26).fork()).ldelim(),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids") && i.ac.ExternalIds.encode(e.external_ids, t.uint32(34).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.XchangeMsgV2)
                            return e;
                        var t = new i.ac.XchangeMsgV2;
                        if (null != e.Metadata) {
                            if ("object" != typeof e.Metadata)
                                throw TypeError(".ac.XchangeMsgV2.Metadata: object expected");
                            t.Metadata = i.ac.Metadata.fromObject(e.Metadata)
                        }
                        if (null != e.shipRequest) {
                            if ("object" != typeof e.shipRequest)
                                throw TypeError(".ac.XchangeMsgV2.shipRequest: object expected");
                            t.shipRequest = i.ac.ShipRequest.fromObject(e.shipRequest)
                        }
                        if (null != e.xchangeFeederRequest) {
                            if ("object" != typeof e.xchangeFeederRequest)
                                throw TypeError(".ac.XchangeMsgV2.xchangeFeederRequest: object expected");
                            t.xchangeFeederRequest = i.ac.XchangeFeederRequest.fromObject(e.xchangeFeederRequest)
                        }
                        if (null != e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.XchangeMsgV2.external_ids: object expected");
                            t.external_ids = i.ac.ExternalIds.fromObject(e.external_ids)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.Metadata = null),
                        null != e.Metadata && e.hasOwnProperty("Metadata") && (n.Metadata = i.ac.Metadata.toObject(e.Metadata, t)),
                        null != e.shipRequest && e.hasOwnProperty("shipRequest") && (n.shipRequest = i.ac.ShipRequest.toObject(e.shipRequest, t),
                        t.oneofs && (n.content = "shipRequest")),
                        null != e.xchangeFeederRequest && e.hasOwnProperty("xchangeFeederRequest") && (n.xchangeFeederRequest = i.ac.XchangeFeederRequest.toObject(e.xchangeFeederRequest, t),
                        t.oneofs && (n.content = "xchangeFeederRequest")),
                        null != e.external_ids && e.hasOwnProperty("external_ids") && (n.external_ids = i.ac.ExternalIds.toObject(e.external_ids, t),
                        t.oneofs && (n.content = "external_ids")),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.ExternalIds = function() {
                    function e(e) {
                        if (this.external_ids = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.uuid = "",
                    e.prototype.app_key = "",
                    e.prototype.external_ids = s.emptyObject,
                    e.prototype.given_at = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(10).string(e.uuid),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(18).string(e.app_key),
                        null != e.external_ids && Object.hasOwnProperty.call(e, "external_ids"))
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.uint32(26).fork().uint32(10).string(n[r]).uint32(18).string(e.external_ids[n[r]]).ldelim();
                        return null != e.given_at && Object.hasOwnProperty.call(e, "given_at") && i.google.protobuf.Timestamp.encode(e.given_at, t.uint32(34).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.ExternalIds)
                            return e;
                        var t = new i.ac.ExternalIds;
                        if (null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        e.external_ids) {
                            if ("object" != typeof e.external_ids)
                                throw TypeError(".ac.ExternalIds.external_ids: object expected");
                            t.external_ids = {};
                            for (var n = Object.keys(e.external_ids), r = 0; r < n.length; ++r)
                                t.external_ids[n[r]] = String(e.external_ids[n[r]])
                        }
                        if (null != e.given_at) {
                            if ("object" != typeof e.given_at)
                                throw TypeError(".ac.ExternalIds.given_at: object expected");
                            t.given_at = i.google.protobuf.Timestamp.fromObject(e.given_at)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.external_ids = {}),
                        t.defaults && (r.uuid = "",
                        r.app_key = "",
                        r.given_at = null),
                        null != e.uuid && e.hasOwnProperty("uuid") && (r.uuid = e.uuid),
                        null != e.app_key && e.hasOwnProperty("app_key") && (r.app_key = e.app_key),
                        e.external_ids && (n = Object.keys(e.external_ids)).length) {
                            r.external_ids = {};
                            for (var o = 0; o < n.length; ++o)
                                r.external_ids[n[o]] = e.external_ids[n[o]]
                        }
                        return null != e.given_at && e.hasOwnProperty("given_at") && (r.given_at = i.google.protobuf.Timestamp.toObject(e.given_at, t)),
                        r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Geoloc = function() {
                    function e(e) {
                        if (this.geoloc = {},
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.geoloc = s.emptyObject,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.geoloc && Object.hasOwnProperty.call(e, "geoloc"))
                            for (var n = Object.keys(e.geoloc), r = 0; r < n.length; ++r)
                                t.uint32(10).fork().uint32(10).string(n[r]).uint32(18).string(e.geoloc[n[r]]).ldelim();
                        return t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Geoloc)
                            return e;
                        var t = new i.ac.Geoloc;
                        if (e.geoloc) {
                            if ("object" != typeof e.geoloc)
                                throw TypeError(".ac.Geoloc.geoloc: object expected");
                            t.geoloc = {};
                            for (var n = Object.keys(e.geoloc), r = 0; r < n.length; ++r)
                                t.geoloc[n[r]] = String(e.geoloc[n[r]])
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n, r = {};
                        if ((t.objects || t.defaults) && (r.geoloc = {}),
                        e.geoloc && (n = Object.keys(e.geoloc)).length) {
                            r.geoloc = {};
                            for (var o = 0; o < n.length; ++o)
                                r.geoloc[n[o]] = e.geoloc[n[o]]
                        }
                        return r
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Metadata = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.action = "",
                    e.prototype.emitter = "",
                    e.prototype.topic = "",
                    e.prototype.created_at = null,
                    e.prototype.error = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(10).string(e.action),
                        null != e.emitter && Object.hasOwnProperty.call(e, "emitter") && t.uint32(18).string(e.emitter),
                        null != e.topic && Object.hasOwnProperty.call(e, "topic") && t.uint32(26).string(e.topic),
                        null != e.created_at && Object.hasOwnProperty.call(e, "created_at") && i.google.protobuf.Timestamp.encode(e.created_at, t.uint32(34).fork()).ldelim(),
                        null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(42).string(e.error),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.ac.Metadata)
                            return e;
                        var t = new i.ac.Metadata;
                        if (null != e.action && (t.action = String(e.action)),
                        null != e.emitter && (t.emitter = String(e.emitter)),
                        null != e.topic && (t.topic = String(e.topic)),
                        null != e.created_at) {
                            if ("object" != typeof e.created_at)
                                throw TypeError(".ac.Metadata.created_at: object expected");
                            t.created_at = i.google.protobuf.Timestamp.fromObject(e.created_at)
                        }
                        return null != e.error && (t.error = String(e.error)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.action = "",
                        n.emitter = "",
                        n.topic = "",
                        n.created_at = null,
                        n.error = ""),
                        null != e.action && e.hasOwnProperty("action") && (n.action = e.action),
                        null != e.emitter && e.hasOwnProperty("emitter") && (n.emitter = e.emitter),
                        null != e.topic && e.hasOwnProperty("topic") && (n.topic = e.topic),
                        null != e.created_at && e.hasOwnProperty("created_at") && (n.created_at = i.google.protobuf.Timestamp.toObject(e.created_at, t)),
                        null != e.error && e.hasOwnProperty("error") && (n.error = e.error),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e
            }
            )();
            i.google = ( () => {
                const e = {};
                return e.protobuf = function() {
                    const e = {};
                    return e.Timestamp = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.seconds = 0,
                        e.prototype.nanos = 0,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            return t || (t = o.create()),
                            null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds),
                            null != e.nanos && Object.hasOwnProperty.call(e, "nanos") && t.uint32(16).int32(e.nanos),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.google.protobuf.Timestamp)
                                return e;
                            var t = new i.google.protobuf.Timestamp;
                            return null != e.seconds && (s.Long ? (t.seconds = s.Long.fromValue(e.seconds)).unsigned = !1 : "string" == typeof e.seconds ? t.seconds = parseInt(e.seconds, 10) : "number" == typeof e.seconds ? t.seconds = e.seconds : "object" == typeof e.seconds && (t.seconds = new s.LongBits(e.seconds.low >>> 0,e.seconds.high >>> 0).toNumber())),
                            null != e.nanos && (t.nanos = 0 | e.nanos),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.seconds = 0,
                            n.nanos = 0),
                            null != e.seconds && e.hasOwnProperty("seconds") && ("number" == typeof e.seconds ? n.seconds = t.longs === String ? String(e.seconds) : e.seconds : n.seconds = t.longs === String ? s.Long.prototype.toString.call(e.seconds) : t.longs === Number ? new s.LongBits(e.seconds.low >>> 0,e.seconds.high >>> 0).toNumber() : e.seconds),
                            null != e.nanos && e.hasOwnProperty("nanos") && (n.nanos = e.nanos),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e
                    }(),
                    e.Duration = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                    null != e[t[n]] && (this[t[n]] = e[t[n]])
                        }
                        return e.prototype.seconds = 0,
                        e.prototype.nanos = 0,
                        e.create = function(t) {
                            return new e(t)
                        }
                        ,
                        e.encode = function(e, t) {
                            return t || (t = o.create()),
                            null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds),
                            null != e.nanos && Object.hasOwnProperty.call(e, "nanos") && t.uint32(16).int32(e.nanos),
                            t
                        }
                        ,
                        e.fromObject = function(e) {
                            if (e instanceof i.google.protobuf.Duration)
                                return e;
                            var t = new i.google.protobuf.Duration;
                            return null != e.seconds && (s.Long ? (t.seconds = s.Long.fromValue(e.seconds)).unsigned = !1 : "string" == typeof e.seconds ? t.seconds = parseInt(e.seconds, 10) : "number" == typeof e.seconds ? t.seconds = e.seconds : "object" == typeof e.seconds && (t.seconds = new s.LongBits(e.seconds.low >>> 0,e.seconds.high >>> 0).toNumber())),
                            null != e.nanos && (t.nanos = 0 | e.nanos),
                            t
                        }
                        ,
                        e.toObject = function(e, t) {
                            t || (t = {});
                            var n = {};
                            return t.defaults && (n.seconds = 0,
                            n.nanos = 0),
                            null != e.seconds && e.hasOwnProperty("seconds") && ("number" == typeof e.seconds ? n.seconds = t.longs === String ? String(e.seconds) : e.seconds : n.seconds = t.longs === String ? s.Long.prototype.toString.call(e.seconds) : t.longs === Number ? new s.LongBits(e.seconds.low >>> 0,e.seconds.high >>> 0).toNumber() : e.seconds),
                            null != e.nanos && e.hasOwnProperty("nanos") && (n.nanos = e.nanos),
                            n
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, r.util.toJSONOptions)
                        }
                        ,
                        e
                    }(),
                    e
                }(),
                e
            }
            )(),
            i.metric = ( () => {
                const e = {};
                return e.MetricMessage = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    let t;
                    return e.prototype.emitter = "",
                    e.prototype.created_at = null,
                    e.prototype.user_metric = null,
                    Object.defineProperty(e.prototype, "content", {
                        get: s.oneOfGetter(t = ["user_metric"]),
                        set: s.oneOfSetter(t)
                    }),
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.emitter && Object.hasOwnProperty.call(e, "emitter") && t.uint32(10).string(e.emitter),
                        null != e.created_at && Object.hasOwnProperty.call(e, "created_at") && i.google.protobuf.Timestamp.encode(e.created_at, t.uint32(18).fork()).ldelim(),
                        null != e.user_metric && Object.hasOwnProperty.call(e, "user_metric") && i.metric.UserMetric.encode(e.user_metric, t.uint32(26).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.metric.MetricMessage)
                            return e;
                        var t = new i.metric.MetricMessage;
                        if (null != e.emitter && (t.emitter = String(e.emitter)),
                        null != e.created_at) {
                            if ("object" != typeof e.created_at)
                                throw TypeError(".metric.MetricMessage.created_at: object expected");
                            t.created_at = i.google.protobuf.Timestamp.fromObject(e.created_at)
                        }
                        if (null != e.user_metric) {
                            if ("object" != typeof e.user_metric)
                                throw TypeError(".metric.MetricMessage.user_metric: object expected");
                            t.user_metric = i.metric.UserMetric.fromObject(e.user_metric)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.emitter = "",
                        n.created_at = null),
                        null != e.emitter && e.hasOwnProperty("emitter") && (n.emitter = e.emitter),
                        null != e.created_at && e.hasOwnProperty("created_at") && (n.created_at = i.google.protobuf.Timestamp.toObject(e.created_at, t)),
                        null != e.user_metric && e.hasOwnProperty("user_metric") && (n.user_metric = i.metric.UserMetric.toObject(e.user_metric, t),
                        t.oneofs && (n.content = "user_metric")),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.UserMetric = function() {
                    function e(e) {
                        if (this.events = [],
                        e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.truncated_ip = "",
                    e.prototype.user_agent = "",
                    e.prototype.saved_at = null,
                    e.prototype.events = s.emptyArray,
                    e.prototype.uuid_hash = "",
                    e.prototype.app_key = "",
                    e.prototype.cmp_hash = "",
                    e.prototype.uuid = "",
                    e.prototype.ip = "",
                    e.prototype.origin = "",
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        if (t || (t = o.create()),
                        null != e.truncated_ip && Object.hasOwnProperty.call(e, "truncated_ip") && t.uint32(10).string(e.truncated_ip),
                        null != e.user_agent && Object.hasOwnProperty.call(e, "user_agent") && t.uint32(18).string(e.user_agent),
                        null != e.saved_at && Object.hasOwnProperty.call(e, "saved_at") && i.google.protobuf.Timestamp.encode(e.saved_at, t.uint32(26).fork()).ldelim(),
                        null != e.events && e.events.length)
                            for (var n = 0; n < e.events.length; ++n)
                                i.metric.Event.encode(e.events[n], t.uint32(34).fork()).ldelim();
                        return null != e.uuid_hash && Object.hasOwnProperty.call(e, "uuid_hash") && t.uint32(42).string(e.uuid_hash),
                        null != e.app_key && Object.hasOwnProperty.call(e, "app_key") && t.uint32(50).string(e.app_key),
                        null != e.cmp_hash && Object.hasOwnProperty.call(e, "cmp_hash") && t.uint32(58).string(e.cmp_hash),
                        null != e.uuid && Object.hasOwnProperty.call(e, "uuid") && t.uint32(66).string(e.uuid),
                        null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(74).string(e.ip),
                        null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(82).string(e.origin),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.metric.UserMetric)
                            return e;
                        var t = new i.metric.UserMetric;
                        if (null != e.truncated_ip && (t.truncated_ip = String(e.truncated_ip)),
                        null != e.user_agent && (t.user_agent = String(e.user_agent)),
                        null != e.saved_at) {
                            if ("object" != typeof e.saved_at)
                                throw TypeError(".metric.UserMetric.saved_at: object expected");
                            t.saved_at = i.google.protobuf.Timestamp.fromObject(e.saved_at)
                        }
                        if (e.events) {
                            if (!Array.isArray(e.events))
                                throw TypeError(".metric.UserMetric.events: array expected");
                            t.events = [];
                            for (var n = 0; n < e.events.length; ++n) {
                                if ("object" != typeof e.events[n])
                                    throw TypeError(".metric.UserMetric.events: object expected");
                                t.events[n] = i.metric.Event.fromObject(e.events[n])
                            }
                        }
                        return null != e.uuid_hash && (t.uuid_hash = String(e.uuid_hash)),
                        null != e.app_key && (t.app_key = String(e.app_key)),
                        null != e.cmp_hash && (t.cmp_hash = String(e.cmp_hash)),
                        null != e.uuid && (t.uuid = String(e.uuid)),
                        null != e.ip && (t.ip = String(e.ip)),
                        null != e.origin && (t.origin = String(e.origin)),
                        t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        if ((t.arrays || t.defaults) && (n.events = []),
                        t.defaults && (n.truncated_ip = "",
                        n.user_agent = "",
                        n.saved_at = null,
                        n.uuid_hash = "",
                        n.app_key = "",
                        n.cmp_hash = "",
                        n.uuid = "",
                        n.ip = "",
                        n.origin = ""),
                        null != e.truncated_ip && e.hasOwnProperty("truncated_ip") && (n.truncated_ip = e.truncated_ip),
                        null != e.user_agent && e.hasOwnProperty("user_agent") && (n.user_agent = e.user_agent),
                        null != e.saved_at && e.hasOwnProperty("saved_at") && (n.saved_at = i.google.protobuf.Timestamp.toObject(e.saved_at, t)),
                        e.events && e.events.length) {
                            n.events = [];
                            for (var r = 0; r < e.events.length; ++r)
                                n.events[r] = i.metric.Event.toObject(e.events[r], t)
                        }
                        return null != e.uuid_hash && e.hasOwnProperty("uuid_hash") && (n.uuid_hash = e.uuid_hash),
                        null != e.app_key && e.hasOwnProperty("app_key") && (n.app_key = e.app_key),
                        null != e.cmp_hash && e.hasOwnProperty("cmp_hash") && (n.cmp_hash = e.cmp_hash),
                        null != e.uuid && e.hasOwnProperty("uuid") && (n.uuid = e.uuid),
                        null != e.ip && e.hasOwnProperty("ip") && (n.ip = e.ip),
                        null != e.origin && e.hasOwnProperty("origin") && (n.origin = e.origin),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e.Event = function() {
                    function e(e) {
                        if (e)
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                                null != e[t[n]] && (this[t[n]] = e[t[n]])
                    }
                    return e.prototype.name = "",
                    e.prototype.timestamp = null,
                    e.create = function(t) {
                        return new e(t)
                    }
                    ,
                    e.encode = function(e, t) {
                        return t || (t = o.create()),
                        null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name),
                        null != e.timestamp && Object.hasOwnProperty.call(e, "timestamp") && i.google.protobuf.Timestamp.encode(e.timestamp, t.uint32(18).fork()).ldelim(),
                        t
                    }
                    ,
                    e.fromObject = function(e) {
                        if (e instanceof i.metric.Event)
                            return e;
                        var t = new i.metric.Event;
                        if (null != e.name && (t.name = String(e.name)),
                        null != e.timestamp) {
                            if ("object" != typeof e.timestamp)
                                throw TypeError(".metric.Event.timestamp: object expected");
                            t.timestamp = i.google.protobuf.Timestamp.fromObject(e.timestamp)
                        }
                        return t
                    }
                    ,
                    e.toObject = function(e, t) {
                        t || (t = {});
                        var n = {};
                        return t.defaults && (n.name = "",
                        n.timestamp = null),
                        null != e.name && e.hasOwnProperty("name") && (n.name = e.name),
                        null != e.timestamp && e.hasOwnProperty("timestamp") && (n.timestamp = i.google.protobuf.Timestamp.toObject(e.timestamp, t)),
                        n
                    }
                    ,
                    e.prototype.toJSON = function() {
                        return this.constructor.toObject(this, r.util.toJSONOptions)
                    }
                    ,
                    e
                }(),
                e
            }
            )()
        },
        8030: function(e, t, n) {
            n.d(t, {
                o1: function() {
                    return nt
                },
                y$: function() {
                    return st
                },
                Tp: function() {
                    return rt
                }
            });
            var r = n(2221)
              , o = n(1176)
              , s = n(8580)
              , i = n(7183);
            var a = n(2361)
              , c = n(1845);
            function l(...e) {
                if (e.some((e => !u(e))))
                    throw new Error("deepMerge: all values should be objects");
                return e.reduce(( (e, t) => p(e, t)), {})
            }
            function u(e) {
                return e && "object" == typeof e && !Array.isArray(e)
            }
            function p(e, t) {
                return Object.keys(t).forEach((n => {
                    const r = e[n]
                      , o = t[n];
                    Array.isArray(r) && Array.isArray(o) ? e[n] = r.concat(o) : u(r) && u(o) ? e[n] = p(Object.assign({}, r), o) : e[n] = o
                }
                )),
                e
            }
            function d(e, t) {
                if (e === t)
                    return !0;
                if (null === e || "object" != typeof e || null === t || "object" != typeof t)
                    return !1;
                const n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (const r of n) {
                    if (!Object.prototype.hasOwnProperty.call(t, r))
                        return !1;
                    const n = e[r]
                      , o = t[r];
                    if ("object" == typeof n && null !== n && "object" == typeof o && null !== o) {
                        if (!d(n, o))
                            return !1
                    } else if (n !== o)
                        return !1
                }
                return !0
            }
            var h = n(8930)
              , _ = n(3769)
              , f = n(9111)
              , g = n(4795);
            const y = "iab/save"
              , b = "allowAll"
              , m = "denyAll"
              , O = "vendor/set"
              , v = "consent/set"
              , w = "consent/setExtraConsent"
              , x = "stack/set"
              , j = "store/hello"
              , S = "store/cmpVersionCacheDuration"
              , E = "store/updateHelloLastDate"
              , P = "store/mode"
              , k = "consent/reset"
              , C = "consent/setAmp"
              , A = "consent/resetWithCopy"
              , T = "gdprApplies/set"
              , I = "countryCode/set"
              , R = "adcDetected/set"
              , L = "consentProgrammatically/set"
              , N = "consent/copy"
              , V = "consent/deleteCopy"
              , {PENDING: D, ALLOWED: U, DISALLOWED: M, MIXED: F} = i.PI
              , B = [1, 3, 4, 5, 6]
              , G = s.ac.Vendorlist.Consentable.EnumConsentableType
              , H = (e, t) => {
                if (![-1, 0, 1].includes(e))
                    throw new Error("status MUST be -1, 0, or 1");
                return t
            }
              , q = {
                allowAll: e => ({
                    type: b,
                    excludedConsentables: e
                }),
                denyAll: (e, t=i.av.DENY_ALL) => ({
                    type: m,
                    excludedConsentables: e,
                    consentType: t
                }),
                reset: () => ({
                    type: k
                }),
                setVendor: (e, t, n=!1) => H(t, {
                    type: O,
                    id: e,
                    status: t,
                    legint: n
                }),
                mode: e => ({
                    type: P,
                    isServiceSpecific: e
                }),
                setConsent: (e, t, n=!1) => H(t, {
                    type: v,
                    id: e,
                    status: t,
                    legint: n
                }),
                setStack: (e, t, n=!1) => H(t, {
                    type: x,
                    id: e,
                    status: t,
                    legint: n
                }),
                setExtraConsent: (e, t) => H(t, {
                    type: w,
                    extraPurposeId: e,
                    status: t
                }),
                hello: (e, t, n) => ({
                    type: j,
                    payload: e,
                    lang: t,
                    now: n
                }),
                setCMPVersionCacheDurationMs: e => ({
                    type: S,
                    duration: e
                }),
                updateHelloLastDate: () => ({
                    type: E
                }),
                setAmpConsent: e => ({
                    type: C,
                    status: e
                }),
                resetConsentWithCopy: e => ({
                    type: A,
                    consentState: e
                })
            }
              , J = {
                consentables: [],
                vendors: [],
                stacks: [],
                dataCategories: {},
                uuid: null,
                type: null,
                enableLegintOnRefuseAll: !1,
                remove_legintables: !1,
                helloLastDate: null,
                cmpVersionCacheDurationMs: 0
            }
              , $ = (e, t) => n => Object.assign({}, n, {
                status: e,
                legintStatus: t || e,
                type: n.type || G.PURPOSE
            })
              , W = (e, t) => !(!e.remove_legintables && !B.includes(t))
              , X = (e, t) => Object.assign({}, t, {
                status: e
            })
              , z = (e, t) => Object.assign({}, t, {
                legintStatus: e
            })
              , Y = (e, t) => n => n.id === t ? X(e, n) : n
              , K = (e, t=[]) => n => t.includes(n.id) ? X(e, n) : n
              , Q = (e, t) => n => n.id === t ? z(e, n) : n
              , Z = (e, t=[]) => n => t.includes(n.id) ? z(e, n) : n
              , ee = (e, t=[]) => n => t.includes(n.id) ? X(e, n) : n
              , te = (e, t=[]) => n => t.includes(n.id) ? z(e, n) : n
              , ne = (e, t) => {
                const n = (r = e,
                o = t,
                r || (r = []),
                o || (o = []),
                [r, o].reduce((function(e, t) {
                    return e.filter((function(e) {
                        return !t.includes(e)
                    }
                    ))
                }
                ))).length;
                var r, o;
                return 0 === n ? U : n === e.length ? M : F
            }
              , re = e => {
                const t = e.filter((e => e.status !== D))
                  , n = (e, t) => e.every((e => e.status === t));
                return n(t, U) ? i.av.ACCEPT_ALL : n(t, M) ? i.av.DENY_ALL : i.av.MIXED
            }
              , oe = (e, t) => e && e.includes(t)
              , se = e => {
                const t = e.stacks.map((e => e.consentables)).reduce(( (e, t) => t.concat(e)), []);
                return e.consentables.filter((e => !t.includes(e.id)))
            }
              , ie = e => e.uuid
              , ae = e => 0 === e.consentables.filter((e => e.status !== U)).length
              , ce = e => 0 === e.consentables.filter((e => e.status !== M)).length
              , le = (e, t=!1) => {
                if (!e.cmpVersionCacheDurationMs)
                    return !0;
                if (!e.helloLastDate)
                    return !0;
                if (t) {
                    const t = 144e5;
                    return e.helloLastDate + t < Date.now()
                }
                return e.helloLastDate + e.cmpVersionCacheDurationMs < Date.now()
            }
            ;
            function ue(e=J, t) {
                switch (t.type) {
                case k:
                    return {
                        ...e,
                        stacks: e.stacks.map($(D)),
                        consentables: e.consentables.map($(D)),
                        vendors: e.vendors.map($(D)),
                        type: null
                    };
                case j:
                    {
                        const n = t.payload.vendorlist
                          , r = t.payload.consent
                          , o = t.payload.configuration
                          , s = t.now;
                        if (!r) {
                            const r = (t, n=!1) => t.map((t => $(D, n && W(e, t.id) ? M : D)(t)));
                            return {
                                consentables: n ? r(n.consentables, !0) : e.consentables,
                                vendors: n ? r(n.vendors.sort(( (e, t) => e.name.localeCompare(t.name)))) : e.vendors,
                                dataCategories: n ? n.data_categories : e.dataCategories,
                                stacks: n ? r(n.stacks) : e.stacks,
                                uuid: t.payload.uuid,
                                google_providers: n ? n.google_providers : e.google_providers,
                                enableLegintOnRefuseAll: !!(o && o.enableLegintOnRefuseAll || e.enableLegintOnRefuseAll),
                                remove_legintables: !!(n && n.remove_legintables || e.remove_legintables),
                                helloLastDate: s,
                                cmpVersionCacheDurationMs: e.cmpVersionCacheDurationMs
                            }
                        }
                        const i = n ? n.consentables.map($(M)).map(K(U, r.purposes)).map((t => Z(W(e, t.iab_id) ? M : U, r.purposes_legint)(t))) : e.consentables;
                        return {
                            consentables: i,
                            vendors: n ? n.vendors.map($(M)).sort(( (e, t) => e.name.localeCompare(t.name))).map(K(U, r.vendors)).map(Z(U, r.vendors_legint)) : e.vendors,
                            stacks: n ? n.stacks.map((e => ({
                                ...e,
                                status: ne(e.consentables, r.purposes),
                                legintStatus: ne(e.consentables, r.purposes_legint)
                            }))) : e.stacks,
                            dataCategories: n ? n.data_categories : e.dataCategories,
                            uuid: t.payload.uuid,
                            google_providers: n ? n.google_providers : e.google_providers,
                            enableLegintOnRefuseAll: !!(o && o.enableLegintOnRefuseAll || e.enableLegintOnRefuseAll),
                            remove_legintables: !!(n && n.remove_legintables || e.remove_legintables),
                            type: re(i),
                            helloLastDate: s,
                            cmpVersionCacheDurationMs: e.cmpVersionCacheDurationMs
                        }
                    }
                case S:
                    return {
                        ...e,
                        cmpVersionCacheDurationMs: t.duration ? 1e3 * t.duration : 0
                    };
                case E:
                    return {
                        ...e,
                        helloLastDate: Date.now()
                    };
                case m:
                    return {
                        ...e,
                        stacks: e.stacks.map($(M)),
                        consentables: e.consentables.map((n => oe(t.excludedConsentables, n.id) ? n : $(M, e.enableLegintOnRefuseAll && !W(e, n.iab_id) ? U : M)(n))),
                        vendors: e.vendors.map($(M, e.enableLegintOnRefuseAll && !e.remove_legintables ? U : M)),
                        type: t.consentType || i.av.DENY_ALL
                    };
                case b:
                    return {
                        ...e,
                        stacks: e.stacks.map($(U)),
                        consentables: e.consentables.map((n => oe(t.excludedConsentables, n.id) ? n : $(U, W(e, n.iab_id) ? M : U)(n))),
                        vendors: e.vendors.map($(U)),
                        type: i.av.ACCEPT_ALL
                    };
                case x:
                    {
                        const n = e.stacks.find((e => e.id === t.id));
                        if (!n)
                            return e;
                        const r = t.legint ? Q : Y
                          , o = t.legint ? z : X
                          , s = e.consentables.map((r => {
                            if (n.consentables.includes(r.iab_id)) {
                                const n = t.legint && W(e, r.iab_id) ? M : t.status;
                                return o(n, r)
                            }
                            return r
                        }
                        ));
                        return {
                            ...e,
                            stacks: e.stacks.map(r(t.status, t.id)),
                            consentables: s,
                            type: re(s)
                        }
                    }
                case O:
                    {
                        const n = t.legint ? Q : Y;
                        return {
                            ...e,
                            vendors: e.vendors.map(n(t.status, t.id)),
                            type: i.av.MIXED
                        }
                    }
                case v:
                    {
                        const n = e => {
                            const n = e.filter((e => [G.SPECIAL_PURPOSE, G.FEATURE].includes(e.type))).map((e => e.id))
                              , r = t.legint ? te : ee
                              , o = t.legint ? M : t.status;
                            return e.map(r(o, [1, ...n]))
                        }
                          , r = n => {
                            const r = t.legint ? Q : Y
                              , o = t.legint && W(e, t.id) ? M : t.status;
                            return n.map(r(o, t.id))
                        }
                          , o = 1 === t.id ? n(e.consentables) : r(e.consentables);
                        return {
                            ...e,
                            stacks: e.stacks.map((e => {
                                if (e.consentables.includes(t.id)) {
                                    const t = t => {
                                        const r = n(o, t, U);
                                        return ne(e.consentables, r)
                                    }
                                      , n = (e, t, n) => e.filter((e => e[t] === n)).map((e => e.id));
                                    return ( () => o.filter((t => e.consentables.includes(t.id))).some((e => e.status === D)))() ? {
                                        ...e
                                    } : {
                                        ...e,
                                        status: t("status"),
                                        legintStatus: t("legintStatus")
                                    }
                                }
                                return e
                            }
                            )),
                            consentables: o,
                            type: re(o)
                        }
                    }
                case C:
                    return {
                        ...e,
                        stacks: e.stacks.map($(t.status)),
                        consentables: e.consentables.map($(t.status)),
                        vendors: e.vendors.map($(t.status)),
                        type: t.status === U ? i.av.ACCEPT_ALL : i.av.DENY_ALL
                    };
                case w:
                    {
                        const n = (e, t) => n => n.extra_id === t ? Object.assign({}, n, {
                            status: e
                        }) : n;
                        return {
                            ...e,
                            consentables: e.consentables.map(n(t.status, t.extraPurposeId))
                        }
                    }
                case y:
                    return {
                        ...e,
                        vendors: e.vendors.map((e => e.status === D ? Object.assign({}, e, {
                            status: U
                        }) : e))
                    };
                case A:
                    return t.consentState;
                default:
                    return e
                }
            }
            const pe = "i18n"
              , de = j
              , he = {
                i18n: e => ({
                    type: pe,
                    obj: e
                }),
                wipe: () => ({
                    type: pe,
                    wipe: !0
                })
            }
              , _e = {
                defaultLanguage: "en",
                selectedLanguage: "en",
                usedLanguage: "en",
                messages: {}
            };
            function fe(e, t, n) {
                const r = (0,
                a.h)(e, ["fcode", "values"]) || {
                    en: "English"
                };
                return o = t,
                Object.keys(r).includes(o) ? t : n;
                var o
            }
            function ge(e=_e, t) {
                if (t.type === de) {
                    const n = (0,
                    a.h)(t.payload, ["configuration", "texts"]) || {}
                      , r = l(e.messages, n)
                      , o = t.lang || (0,
                    c.X)() || e.selectedLanguage
                      , s = (0,
                    a.h)(t.payload, ["configuration", "fallback_language"]) || e.defaultLanguage || "en";
                    return {
                        ...e,
                        selectedLanguage: o,
                        defaultLanguage: s,
                        messages: r,
                        usedLanguage: fe(r, o, s)
                    }
                }
                if (t.type === pe) {
                    if (t.wipe) {
                        const t = Object.keys(e.messages).reduce(( (t, n) => ({
                            ...t,
                            [n]: {
                                values: Object.keys(e.messages[n].values).reduce(( (e, t) => ({
                                    ...e,
                                    [t]: n
                                })), {})
                            }
                        })), {});
                        return {
                            ...e,
                            messages: t
                        }
                    }
                    return {
                        ...e,
                        messages: l(e.messages, t.obj)
                    }
                }
                return e
            }
            const {DISALLOWED: ye} = i.PI;
            function be(e, t) {
                const n = new h.jT(function(e) {
                    const t = {
                        gvlSpecificationVersion: 2,
                        vendorListVersion: e.vendorlist.iab_gvl || 0,
                        tcfPolicyVersion: e.vendorlist.tcf_policy_version || 0,
                        lastUpdated: (new Date).toISOString(),
                        purposes: {},
                        specialPurposes: {},
                        features: {},
                        specialFeatures: {},
                        vendors: {},
                        stacks: {}
                    };
                    for (const n of e.consents.consentables) {
                        const {iab_id: e, type: r} = n;
                        if (!e)
                            continue;
                        const o = {
                            id: e
                        };
                        switch (r) {
                        case 0:
                            t.purposes[e] = o;
                            break;
                        case 1:
                            t.features[e] = o;
                            break;
                        case 2:
                            t.specialFeatures[e] = o;
                            break;
                        case 3:
                            t.specialPurposes[e] = o
                        }
                    }
                    for (const n of e.consents.vendors) {
                        const {iab_id: r, consentables: o, legintables: s, flexibles: i, name: a} = n;
                        if (!r)
                            continue;
                        const c = {
                            id: r,
                            name: a,
                            purposes: [],
                            legIntPurposes: [],
                            flexiblePurposes: [],
                            specialPurposes: [],
                            features: [],
                            specialFeatures: []
                        };
                        t.vendors[r] = c;
                        for (const t of e.consents.consentables) {
                            const {id: e, iab_id: n, type: r} = t;
                            if (n) {
                                if (o.includes(e))
                                    switch (r) {
                                    case 0:
                                        c.purposes.push(n);
                                        break;
                                    case 1:
                                        c.features.push(n);
                                        break;
                                    case 2:
                                        c.specialFeatures.push(n);
                                        break;
                                    case 3:
                                        c.specialPurposes.push(n)
                                    }
                                s.includes(e) && c.legIntPurposes.push(n),
                                i && i.includes(e) && c.flexiblePurposes.push(n)
                            }
                        }
                    }
                    const n = new h.aI(t);
                    return n.lang_ = e.i18n && (e.i18n.usedLanguage || e.i18n.defaultLanguage || e.i18n.selectedLanguage) || "FR",
                    n.clone = () => new h.aI(n.getJson()),
                    n
                }(e));
                n.policyVersion = e.vendorlist.tcf_policy_version,
                n.cmpVersion = e.CMP_VERSION,
                n.isServiceSpecific = e.vendorlist.is_service_specific,
                n.cmpId = 2,
                n.lastUpdated = new Date(t.setUTCHours(0, 0, 0, 0)),
                n.created = n.lastUpdated,
                n.publisherCountryCode = "FR",
                n.setAllVendorsDisclosed();
                for (const t of e.consents.consentables) {
                    const {iab_id: e, type: r, status: o, legintStatus: s} = t;
                    if (e) {
                        if (o !== ye)
                            switch (r) {
                            case 0:
                                n.purposeConsents.set(e);
                                break;
                            case 1:
                                break;
                            case 2:
                                n.specialFeatureOptins.set(e)
                            }
                        if (s !== ye && 0 === r)
                            n.purposeLegitimateInterests.set(e)
                    }
                }
                for (const t of e.consents.vendors) {
                    const {iab_id: e, status: r, legintStatus: o} = t;
                    e && (r !== ye && n.vendorConsents.set(e),
                    o !== ye && n.vendorLegitimateInterests.set(e))
                }
                if (e.vendorlist.remove_legintables) {
                    const t = e.consents.consentables.filter((e => !!e.iab_id)).filter((e => 0 === e.type)).map((e => new h.FY(e.id,h.hS.REQUIRE_CONSENT)));
                    e.consents.vendors.forEach((e => {
                        e.iab_id && e.legintables.length > 0 && e.flexibles.length > 0 && e.flexibles.forEach((r => {
                            const o = t.find((e => e.purposeId === r));
                            o && n.publisherRestrictions.add(e.iab_id, o)
                        }
                        ))
                    }
                    ))
                }
                return h.de.encode(n)
            }
            const me = {
                save: () => ({
                    type: y
                })
            };
            const Oe = (0,
            _.v)("ui")
              , ve = "ui/hide"
              , we = "ui/show"
              , xe = "ui/pop"
              , je = "ui/setIsAmp"
              , Se = "ui/setUIConfig"
              , Ee = j
              , Pe = {
                hide: () => ({
                    type: ve
                }),
                pop: () => ({
                    type: xe
                }),
                show: (e, t={}) => ({
                    type: we,
                    scene: e,
                    props: t
                }),
                setIsAmp: e => ({
                    type: je,
                    payload: e
                }),
                setUiConfiguration: e => ({
                    type: Se,
                    payload: e
                })
            }
              , ke = (e={
                scenes: [],
                configuration: {
                    ...i.Md
                },
                isAmp: !1
            }, t) => {
                const n = e.scenes.slice();
                switch (t.type) {
                case Ee:
                    return {
                        ...e,
                        configuration: Object.assign({}, e.configuration, t.payload.configuration)
                    };
                case we:
                    {
                        if (n.length && n[n.length - 1].scene === (t.scene || i.UN.BANNER) && d(n[n.length - 1].props, t.props))
                            return e;
                        if (n.length && n[n.length - 1].scene === (t.scene || i.UN.BANNER) && !d(n[n.length - 1].props, t.props)) {
                            const r = n.slice(-1)[0];
                            return {
                                ...e,
                                scenes: [...n.slice(0, -1), {
                                    scene: r.scene,
                                    props: t.props
                                }]
                            }
                        }
                        const r = !1 !== e.configuration.useBanner ? i.UN.BANNER : i.UN.PRIVACY;
                        return !t.scene && n.length > 0 ? (Oe("Noop show"),
                        e) : (n.push({
                            scene: t.scene || r,
                            props: t.props
                        }),
                        {
                            ...e,
                            scenes: n
                        })
                    }
                case ve:
                    return {
                        ...e,
                        scenes: []
                    };
                case xe:
                    return n.pop(),
                    {
                        ...e,
                        scenes: n
                    };
                case je:
                    return {
                        ...e,
                        isAmp: t.payload
                    };
                case Se:
                    return {
                        ...e,
                        configuration: Object.assign({}, e.configuration, t.payload)
                    };
                default:
                    return e
                }
            }
              , Ce = (0,
            _.v)("vendorlist")
              , Ae = (e={
                is_service_specific: !0
            }, {type: t, payload: n, ...r}) => {
                if (t === P)
                    return {
                        ...e,
                        is_service_specific: r.isServiceSpecific
                    };
                if (t !== j)
                    return e;
                const o = {
                    ...e,
                    cmp_hash: n.cmp_hash,
                    cmp_hash_version: n.cmp_hash_version
                };
                return n && n.vendorlist && ["iab_gvl", "tcf_policy_version", "publisher_cc", "publisher_restrictions", "google_providers", "geoloc_ad", "geoloc_market", "remove_legintables"].forEach((e => {
                    o[e] = n.vendorlist[e]
                }
                )),
                o
            }
              , Te = {
                google_providers: e => {
                    if ((0,
                    f.n_)(e))
                        return null;
                    if (!(0,
                    f.Aq)(e))
                        return null;
                    const t = (0,
                    f.oK)(e)
                      , n = !!t.length
                      , r = e.vendorlist.google_providers
                      , o = (0,
                    f._V)(e);
                    return n ? (0,
                    f.mz)(t, o) : r ? o ? (0,
                    f.eT)(r, "") : (0,
                    f.eT)("", r) : (Ce("google_providers selector : Apt google providers is not set in state"),
                    null)
                }
                ,
                cmp_hash: e => e.cmp_hash,
                cmp_hash_version: e => e.cmp_hash_version
            }
              , Ie = "version/set"
              , Re = {
                setVersion: e => ({
                    type: Ie,
                    version: e
                })
            };
            function Le(e=null, t) {
                return t.type === Ie ? t.version : e
            }
            const Ne = j
              , Ve = e => e && !!e.xchange
              , De = e => e && e.custom_js
              , Ue = (e={
                custom_js: null,
                xchange: !1
            }, t) => t.type === Ne && t.payload.configuration ? {
                custom_js: t.payload.configuration.custom_js,
                xchange: t.payload.configuration.xchange
            } : e
              , Me = "event"
              , Fe = "events/reset"
              , Be = {
                track: e => ({
                    type: Me,
                    payload: e
                }),
                resetEvents: () => ({
                    type: Fe
                })
            };
            function Ge(e=[], t) {
                switch (t.type) {
                case Me:
                    return [...e, {
                        name: t.payload,
                        timestamp: (0,
                        g.l)()
                    }];
                case Fe:
                    return [];
                default:
                    return e
                }
            }
            const He = "client/setExternalIds"
              , qe = "client/setFloatingPurposes"
              , Je = "client/setFloatingPurposesConsent"
              , $e = {
                setExternalIds: e => ({
                    type: He,
                    payload: e
                }),
                setFloatingPurposes: e => ({
                    type: qe,
                    payload: e
                }),
                setFloatingPurposesConsent: e => ({
                    type: Je,
                    payload: e
                })
            }
              , We = {
                externalIds: {},
                floatingPurposes: [],
                floatingPurposesConsent: []
            }
              , Xe = e => ({
                id: e.floating_extra_id,
                version: e.floating_version
            })
              , ze = e => ({
                extra_id: e.extra_id,
                type: e.type,
                given_at: e.given_at,
                version: e.version
            })
              , Ye = (e=We, t) => {
                switch (t.type) {
                case j:
                    return {
                        ...e,
                        floatingPurposes: [Xe(t.payload)],
                        floatingPurposesConsent: [...t.payload.consent_floating_extra_purpose ? [ze(t.payload.consent_floating_extra_purpose)] : []]
                    };
                case He:
                    return {
                        ...e,
                        externalIds: {
                            ...t.payload
                        }
                    };
                case qe:
                    return {
                        ...e,
                        floatingPurposes: [Xe(t.payload)]
                    };
                case Je:
                    return {
                        ...e,
                        floatingPurposesConsent: [ze(t.payload)]
                    };
                default:
                    return e
                }
            }
              , Ke = {
                setLastStateGDPRApplies: e => ({
                    type: T,
                    gdprApplies: e
                }),
                setLastCountryCode: e => ({
                    type: I,
                    code: e
                }),
                setAdcDetected: e => ({
                    type: R,
                    adcDetected: e
                }),
                setConsentProgrammatically: (e=!0) => ({
                    type: L,
                    consentProgrammatically: e
                }),
                copyConsents: e => ({
                    type: N,
                    state: e
                }),
                deleteConsentsCopy: () => ({
                    type: V
                })
            }
              , Qe = {
                lastStateGdprApplies: !0,
                adcDetected: !1,
                consentProgrammatically: !1,
                backupConsents: null
            };
            function Ze(e=Qe, t) {
                switch (t.type) {
                case T:
                    return {
                        ...e,
                        lastStateGdprApplies: t.gdprApplies
                    };
                case I:
                    return {
                        ...e,
                        lastCountryCode: t.code
                    };
                case R:
                    return {
                        ...e,
                        adcDetected: t.adcDetected
                    };
                case L:
                    return {
                        ...e,
                        consentProgrammatically: t.consentProgrammatically
                    };
                case N:
                    return {
                        ...e,
                        backupConsents: t.state.consents
                    };
                case V:
                    return {
                        ...e,
                        backupConsents: null
                    }
                }
                return e
            }
            const et = {
                scripts: []
            };
            function tt(e=et, t) {
                return t.type === j ? {
                    ...e,
                    scripts: t.payload.script_injector && t.payload.script_injector.scripts || e.scripts || []
                } : e
            }
            const nt = {
                ...Re,
                ...q,
                ...he,
                ...me,
                ...Pe,
                ...Be,
                ...$e,
                ...Ke
            }
              , rt = {
                unstackedConsentables: e => se(e.consents),
                uuid: e => ie(e.consents),
                isAllowAll: e => ae(e.consents),
                isDisallowedAll: e => ce(e.consents),
                helloNeedsToBeCalled: (e, t) => le(e.consents, t),
                cmp_hash: e => Te.cmp_hash(e.vendorlist),
                cmp_hash_version: e => Te.cmp_hash_version(e.vendorlist),
                google_providers: Te.google_providers,
                isXchange: e => Ve(e.xchange),
                customJs: e => De(e.xchange),
                selectedLang: e => e.i18n.selectedLanguage,
                usedLang: e => e.i18n.usedLanguage
            }
              , ot = [O, v, x];
            function st(e, t, n=!1, s, i) {
                const a = (0,
                r.HY)({
                    consents: ue,
                    i18n: ge,
                    ui: ke,
                    vendorlist: Ae,
                    CMP_VERSION: Le,
                    xchange: Ue,
                    events: Ge,
                    client: Ye,
                    settings: Ze,
                    injector: tt,
                    consentstring: (e=null) => e,
                    consentstringUpdatedAt: (e=null) => e
                });
                let c;
                c = t ? ({getState: e}) => n => r => {
                    n(r),
                    t(`${r.type}`, r, e())
                }
                : () => e => t => e(t);
                const l = (0,
                r.Tw)(c)
                  , u = (0,
                o.tY)(l)
                  , p = (0,
                r.y$)(( (e, t) => {
                    n && ot.includes(t.type) && (t = q.setAmpConsent(t.status));
                    return function(e, t) {
                        return t.type === y ? {
                            ...e,
                            consentstring: be(e, new Date),
                            consentstringUpdatedAt: Date.now()
                        } : t.type === j && t.payload && t.payload.consent && t.payload.consent.iab_cs ? {
                            ...e,
                            consentstring: t.payload.consent.iab_cs,
                            consentstringUpdatedAt: Date.now()
                        } : t.type === k ? {
                            ...e,
                            consentstring: null,
                            consentstringUpdatedAt: Date.now()
                        } : e
                    }(a(e, t), t)
                }
                ), e, u);
                return p.dispatch(Re.setVersion(s)),
                p.dispatch(Pe.setIsAmp(n)),
                p.dispatch(Pe.hide()),
                p.dispatch(q.setCMPVersionCacheDurationMs(i)),
                p
            }
        },
        1595: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return p
                }
            });
            var r = n(3769)
              , o = n(7183)
              , s = n(4795)
              , i = n(8030);
            const a = (0,
            r.v)("core");
            let c = null;
            async function l(e, t, n) {
                const r = {
                    extra_id: "ADCStatus",
                    version: 1,
                    type: n ? o.BH.ACCEPT : o.BH.DENY,
                    given_at: (0,
                    s.l)()
                };
                await t.saveFloatingPurpose(i.Tp.uuid(e), e.client.externalIds, r)
            }
            function u(e) {
                e && (a("The ADC interval cleared"),
                clearInterval(e))
            }
            function p(e, t, n) {
                if ("function" != typeof window.__tcfapi)
                    return console.warn("SFBX ConsentListener: There is no __tcfapi function in the global scope to add ADC-listener");
                const r = navigator.userAgent.toLowerCase();
                r.includes("safari") && !r.includes("chrome") ? window.__tcfapi("addEventListener", 2, (async (r, o) => {
                    if ("cmpuishown" === r.eventStatus) {
                        const r = t.getState();
                        null === r.consentstring ? setTimeout((async function() {
                            a("ADC interval triggered"),
                            c = setInterval((async function() {
                                const o = await function(e) {
                                    const t = document.querySelector("body")
                                      , n = "hidden" !== window.getComputedStyle(t).overflow;
                                    return !(null !== e.consentstring) && n
                                }(r);
                                o && (a("An ADC block has been detected"),
                                r.settings.adcDetected || await l(r, n, !0),
                                t.dispatch(i.o1.setAdcDetected(!0)),
                                e.callbacks.adcDetected(),
                                u(c))
                            }
                            ), 500)
                        }
                        ), 1e3) : a("Consent has been detected, ADC detection has not been triggered")
                    }
                    if (o && ("tcloaded" === r.eventStatus || "useractioncomplete" === r.eventStatus)) {
                        u(c);
                        const r = t.getState();
                        r.settings.adcDetected && !1 === r.settings.consentProgrammatically && (a("An ADC unlock has been detected"),
                        await l(r, n, !1),
                        e.callbacks.adcUnblocked()),
                        r.settings.adcDetected && t.dispatch(i.o1.setAdcDetected(!1))
                    }
                }
                )) : a("The ADC listener has not been initialised because the Safari browser has not been detected.")
            }
        },
        223: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return i
                },
                h: function() {
                    return s
                }
            });
            const r = (0,
            n(3769).v)("amp");
            let o = !1;
            function s(e) {
                if (o) {
                    if ("accept" === e.action && !e.info)
                        return r(`ABORT postMessage ${e.type} ${e.action}`);
                    if ("reject" === e.action && !e.info)
                        return r(`ABORT postMessage ${e.type} ${e.action}`);
                    r(`postMessage ${e.type} ${e.action}`),
                    window.parent.postMessage(e, "*")
                }
            }
            function i(e) {
                if (void 0 === e)
                    return o;
                o = !!e
            }
        },
        159: function(e, t, n) {
            function r() {
                return parseInt("10.5.0".split(".")[0])
            }
            n.d(t, {
                Q: function() {
                    return r
                }
            })
        },
        4795: function(e, t, n) {
            function r(e) {
                const t = e ? new Date(e).getTime() : Date.now();
                return {
                    seconds: parseInt(t / 1e3),
                    nanos: t % 1e3 * 1e6
                }
            }
            n.d(t, {
                l: function() {
                    return r
                }
            })
        },
        9111: function(e, t, n) {
            n.d(t, {
                Aq: function() {
                    return i
                },
                _V: function() {
                    return a
                },
                eT: function() {
                    return o
                },
                mz: function() {
                    return u
                },
                n_: function() {
                    return c
                },
                oK: function() {
                    return l
                }
            });
            var r = n(7183);
            const o = (e, t) => `2~${e}${t ? `~dv.${t}` : "~dv."}`
              , s = e => e.reduce(( (e, t, n) => e + (0 === n ? t.google_atp_id : `.${t.google_atp_id}`)), "")
              , i = e => e.consents && e.consents.vendors.find((e => e.iab_id === r.nW))
              , a = e => {
                const t = i(e);
                return t && t.status === r.PI.ALLOWED
            }
              , c = e => {
                if (!e.consents)
                    return !0;
                return e.consents.consentables.find((e => 1 === e.iab_id)).status === r.PI.PENDING
            }
              , l = e => e.consents && e.consents.vendors.filter((e => !!e.google_atp_id))
              , u = (e, t) => {
                if (!t)
                    return o(s([]), s(e));
                const n = e.filter((e => e.status === r.PI.ALLOWED))
                  , i = e.filter((e => e.status === r.PI.DISALLOWED));
                return o(s(n), s(i))
            }
        },
        1845: function(e, t, n) {
            function r() {
                const e = function() {
                    if ("undefined" != typeof window) {
                        let e;
                        const t = window.navigator || {};
                        return e = t && t.languages && t.languages.length ? t.languages[0] : t.userLanguage || t.language || t.browserLanguage || "en",
                        e
                    }
                    return "fr-FR"
                }();
                return e ? "zh-TW" === e ? e : e.length > 2 ? e.slice(0, 2) : e : "en"
            }
            n.d(t, {
                X: function() {
                    return r
                }
            })
        },
        3769: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return o
                },
                y: function() {
                    return s
                }
            });
            let r = !1;
            function o(e) {
                return function(t, ...n) {
                    if (r && console.log) {
                        if (t instanceof Error && console.error)
                            return void console.error(t);
                        console.log("%c " + e + " %c " + t, "background: " + function(e) {
                            return "hsl(" + function(e) {
                                for (var t = 0, n = 0; n < e.length; n++)
                                    t = e.charCodeAt(n) + ((t << 5) - t);
                                return t
                            }(e) % 360 + ", 100%, 80%)"
                        }(e) + "; color: #000", "", ...n)
                    }
                }
            }
            function s(e) {
                if (void 0 === e)
                    return r;
                r = !!e
            }
        },
        2361: function(e, t, n) {
            function r(e, t) {
                if (t) {
                    const n = [...t]
                      , o = e[n.shift()];
                    return o && n.length > 0 ? r(o, n) : o
                }
            }
            n.d(t, {
                h: function() {
                    return r
                }
            })
        },
        5819: function(e, t, n) {
            n.d(t, {
                hB: function() {
                    return c
                },
                w3: function() {
                    return i
                }
            });
            var r = n(7183)
              , o = n(8030);
            function s(e, t) {
                var n;
                window[e] = (n = t,
                JSON.parse(n, (function(e, t) {
                    return "string" == typeof t && t.startsWith("function") ? new Function("return " + t)() : t
                }
                )))
            }
            function i(e, t, n=null, r=10, o=400) {
                const s = document.createElement("script");
                switch (s.type = "application/javascript",
                e) {
                case "innerHtml":
                    s.innerHTML = t;
                    break;
                case "url":
                    s.src = t
                }
                const i = setInterval(( () => {
                    document.body ? (document.body.appendChild(s),
                    clearInterval(i),
                    n && n("InjectScriptInDom: Script injected successfully.")) : --r <= 0 && (clearInterval(i),
                    console.error("SFBX Appconsent: InjectScriptInDom - document.body not found."))
                }
                ), o)
            }
            function a(e, t) {
                return function(e, t) {
                    switch (e) {
                    case r.Gj.ALLOW_ALL:
                        return o.Tp.isAllowAll(t);
                    case r.Gj.DISALLOW_ALL:
                        return o.Tp.isDisallowedAll(t)
                    }
                }(e.trigger_conditions, t) && function(e, t) {
                    if (!e || !e.length)
                        return !0;
                    const n = o.Tp.selectedLang(t);
                    return e.some((e => e.toLowerCase() === n.toLowerCase()))
                }(e.languages_conditions, t) && function(e, t) {
                    const n = parseInt("ffff", 16);
                    return parseInt(e.substring(0, 4), 16) / n * 100 < t
                }(t.consents.uuid, e.percent_display)
            }
            function c(e, t) {
                const n = t.getState();
                e.forEach((e => {
                    a(e, n) && (e.config_variable_name && s(e.config_variable_name, e.config_variable),
                    i("url", e.path))
                }
                ))
            }
        },
        8930: function(e, t, n) {
            n.d(t, {
                aI: function() {
                    return I
                },
                FY: function() {
                    return f
                },
                hS: function() {
                    return p
                },
                jT: function() {
                    return R
                },
                de: function() {
                    return L
                }
            });
            class r extends Error {
                constructor(e) {
                    super(e),
                    this.name = "DecodingError"
                }
            }
            class o extends Error {
                constructor(e) {
                    super(e),
                    this.name = "EncodingError"
                }
            }
            class s extends Error {
                constructor(e) {
                    super(e),
                    this.name = "GVLError"
                }
            }
            class i extends Error {
                constructor(e, t, n="") {
                    super(`invalid value ${t} passed for ${e} ${n}`),
                    this.name = "TCModelError"
                }
            }
            class a {
                static DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
                static REVERSE_DICT = new Map([["A", 0], ["B", 1], ["C", 2], ["D", 3], ["E", 4], ["F", 5], ["G", 6], ["H", 7], ["I", 8], ["J", 9], ["K", 10], ["L", 11], ["M", 12], ["N", 13], ["O", 14], ["P", 15], ["Q", 16], ["R", 17], ["S", 18], ["T", 19], ["U", 20], ["V", 21], ["W", 22], ["X", 23], ["Y", 24], ["Z", 25], ["a", 26], ["b", 27], ["c", 28], ["d", 29], ["e", 30], ["f", 31], ["g", 32], ["h", 33], ["i", 34], ["j", 35], ["k", 36], ["l", 37], ["m", 38], ["n", 39], ["o", 40], ["p", 41], ["q", 42], ["r", 43], ["s", 44], ["t", 45], ["u", 46], ["v", 47], ["w", 48], ["x", 49], ["y", 50], ["z", 51], ["0", 52], ["1", 53], ["2", 54], ["3", 55], ["4", 56], ["5", 57], ["6", 58], ["7", 59], ["8", 60], ["9", 61], ["-", 62], ["_", 63]]);
                static BASIS = 6;
                static LCM = 24;
                static encode(e) {
                    if (!/^[0-1]+$/.test(e))
                        throw new o("Invalid bitField");
                    const t = e.length % this.LCM;
                    e += t ? "0".repeat(this.LCM - t) : "";
                    let n = "";
                    for (let t = 0; t < e.length; t += this.BASIS)
                        n += this.DICT[parseInt(e.substr(t, this.BASIS), 2)];
                    return n
                }
                static decode(e) {
                    if (!/^[A-Za-z0-9\-_]+$/.test(e))
                        throw new r("Invalidly encoded Base64URL string");
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        const r = this.REVERSE_DICT.get(e[n]).toString(2);
                        t += "0".repeat(this.BASIS - r.length) + r
                    }
                    return t
                }
            }
            class c {
                static langSet = new Set(["AR", "BG", "BS", "CA", "CS", "CY", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HE", "HI", "HR", "HU", "ID", "IS", "IT", "JA", "KA", "KO", "LT", "LV", "MK", "MS", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SQ", "SR-LATN", "SR-CYRL", "SV", "SW", "TH", "TL", "TR", "UK", "VI", "ZH", "ZH-HANT"]);
                has(e) {
                    return c.langSet.has(e)
                }
                parseLanguage(e) {
                    const t = (e = e.toUpperCase()).split("-")[0];
                    if (e.length >= 2 && 2 == t.length) {
                        if (c.langSet.has(e))
                            return e;
                        if (c.langSet.has(t))
                            return t;
                        const n = t + "-" + t;
                        if (c.langSet.has(n))
                            return n;
                        for (const n of c.langSet)
                            if (-1 !== n.indexOf(e) || -1 !== n.indexOf(t))
                                return n
                    }
                    throw new Error(`unsupported language ${e}`)
                }
                forEach(e) {
                    c.langSet.forEach(e)
                }
                get size() {
                    return c.langSet.size
                }
            }
            class l {
                static cmpId = "cmpId";
                static cmpVersion = "cmpVersion";
                static consentLanguage = "consentLanguage";
                static consentScreen = "consentScreen";
                static created = "created";
                static supportOOB = "supportOOB";
                static isServiceSpecific = "isServiceSpecific";
                static lastUpdated = "lastUpdated";
                static numCustomPurposes = "numCustomPurposes";
                static policyVersion = "policyVersion";
                static publisherCountryCode = "publisherCountryCode";
                static publisherCustomConsents = "publisherCustomConsents";
                static publisherCustomLegitimateInterests = "publisherCustomLegitimateInterests";
                static publisherLegitimateInterests = "publisherLegitimateInterests";
                static publisherConsents = "publisherConsents";
                static publisherRestrictions = "publisherRestrictions";
                static purposeConsents = "purposeConsents";
                static purposeLegitimateInterests = "purposeLegitimateInterests";
                static purposeOneTreatment = "purposeOneTreatment";
                static specialFeatureOptins = "specialFeatureOptins";
                static useNonStandardTexts = "useNonStandardTexts";
                static vendorConsents = "vendorConsents";
                static vendorLegitimateInterests = "vendorLegitimateInterests";
                static vendorListVersion = "vendorListVersion";
                static vendorsAllowed = "vendorsAllowed";
                static vendorsDisclosed = "vendorsDisclosed";
                static version = "version"
            }
            class u {
                clone() {
                    const e = new this.constructor;
                    return Object.keys(this).forEach((t => {
                        const n = this.deepClone(this[t]);
                        void 0 !== n && (e[t] = n)
                    }
                    )),
                    e
                }
                deepClone(e) {
                    const t = typeof e;
                    if ("number" === t || "string" === t || "boolean" === t)
                        return e;
                    if (null !== e && "object" === t) {
                        if ("function" == typeof e.clone)
                            return e.clone();
                        if (e instanceof Date)
                            return new Date(e.getTime());
                        if (void 0 !== e[Symbol.iterator]) {
                            const t = [];
                            for (const n of e)
                                t.push(this.deepClone(n));
                            return e instanceof Array ? t : new e.constructor(t)
                        }
                        {
                            const t = {};
                            for (const n in e)
                                e.hasOwnProperty(n) && (t[n] = this.deepClone(e[n]));
                            return t
                        }
                    }
                }
            }
            var p, d, h, _;
            !function(e) {
                e[e.NOT_ALLOWED = 0] = "NOT_ALLOWED",
                e[e.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT",
                e[e.REQUIRE_LI = 2] = "REQUIRE_LI"
            }(p || (p = {}));
            class f extends u {
                static hashSeparator = "-";
                purposeId_;
                restrictionType;
                constructor(e, t) {
                    super(),
                    void 0 !== e && (this.purposeId = e),
                    void 0 !== t && (this.restrictionType = t)
                }
                static unHash(e) {
                    const t = e.split(this.hashSeparator)
                      , n = new f;
                    if (2 !== t.length)
                        throw new i("hash",e);
                    return n.purposeId = parseInt(t[0], 10),
                    n.restrictionType = parseInt(t[1], 10),
                    n
                }
                get hash() {
                    if (!this.isValid())
                        throw new Error("cannot hash invalid PurposeRestriction");
                    return `${this.purposeId}${f.hashSeparator}${this.restrictionType}`
                }
                get purposeId() {
                    return this.purposeId_
                }
                set purposeId(e) {
                    this.purposeId_ = e
                }
                isValid() {
                    return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === p.NOT_ALLOWED || this.restrictionType === p.REQUIRE_CONSENT || this.restrictionType === p.REQUIRE_LI)
                }
                isSameAs(e) {
                    return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
                }
            }
            class g extends u {
                bitLength = 0;
                map = new Map;
                gvl_;
                has(e) {
                    return this.map.has(e)
                }
                isOkToHave(e, t, n) {
                    let r = !0;
                    if (this.gvl?.vendors) {
                        const o = this.gvl.vendors[n];
                        if (o)
                            if (e === p.NOT_ALLOWED)
                                r = o.legIntPurposes.includes(t) || o.purposes.includes(t);
                            else if (o.flexiblePurposes.length)
                                switch (e) {
                                case p.REQUIRE_CONSENT:
                                    r = o.flexiblePurposes.includes(t) && o.legIntPurposes.includes(t);
                                    break;
                                case p.REQUIRE_LI:
                                    r = o.flexiblePurposes.includes(t) && o.purposes.includes(t)
                                }
                            else
                                r = !1;
                        else
                            r = !1
                    }
                    return r
                }
                add(e, t) {
                    if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                        const n = t.hash;
                        this.has(n) || (this.map.set(n, new Set),
                        this.bitLength = 0),
                        this.map.get(n).add(e)
                    }
                }
                restrictPurposeToLegalBasis(e) {
                    const t = Array.from(this.gvl.vendorIds)
                      , n = e.hash
                      , r = t[t.length - 1]
                      , o = [...Array(r).keys()].map((e => e + 1));
                    if (this.has(n))
                        for (let e = 1; e <= r; e++)
                            this.map.get(n).add(e);
                    else
                        this.map.set(n, new Set(o)),
                        this.bitLength = 0
                }
                getVendors(e) {
                    let t = [];
                    if (e) {
                        const n = e.hash;
                        this.has(n) && (t = Array.from(this.map.get(n)))
                    } else {
                        const e = new Set;
                        this.map.forEach((t => {
                            t.forEach((t => {
                                e.add(t)
                            }
                            ))
                        }
                        )),
                        t = Array.from(e)
                    }
                    return t.sort(( (e, t) => e - t))
                }
                getRestrictionType(e, t) {
                    let n;
                    return this.getRestrictions(e).forEach((e => {
                        e.purposeId === t && (void 0 === n || n > e.restrictionType) && (n = e.restrictionType)
                    }
                    )),
                    n
                }
                vendorHasRestriction(e, t) {
                    let n = !1;
                    const r = this.getRestrictions(e);
                    for (let e = 0; e < r.length && !n; e++)
                        n = t.isSameAs(r[e]);
                    return n
                }
                getMaxVendorId() {
                    let e = 0;
                    return this.map.forEach((t => {
                        e = Math.max(Array.from(t)[t.size - 1], e)
                    }
                    )),
                    e
                }
                getRestrictions(e) {
                    const t = [];
                    return this.map.forEach(( (n, r) => {
                        e ? n.has(e) && t.push(f.unHash(r)) : t.push(f.unHash(r))
                    }
                    )),
                    t
                }
                getPurposes() {
                    const e = new Set;
                    return this.map.forEach(( (t, n) => {
                        e.add(f.unHash(n).purposeId)
                    }
                    )),
                    Array.from(e)
                }
                remove(e, t) {
                    const n = t.hash
                      , r = this.map.get(n);
                    r && (r.delete(e),
                    0 == r.size && (this.map.delete(n),
                    this.bitLength = 0))
                }
                set gvl(e) {
                    this.gvl_ || (this.gvl_ = e,
                    this.map.forEach(( (e, t) => {
                        const n = f.unHash(t);
                        Array.from(e).forEach((t => {
                            this.isOkToHave(n.restrictionType, n.purposeId, t) || e.delete(t)
                        }
                        ))
                    }
                    )))
                }
                get gvl() {
                    return this.gvl_
                }
                isEmpty() {
                    return 0 === this.map.size
                }
                get numRestrictions() {
                    return this.map.size
                }
            }
            !function(e) {
                e.COOKIE = "cookie",
                e.WEB = "web",
                e.APP = "app"
            }(d || (d = {})),
            function(e) {
                e.CORE = "core",
                e.VENDORS_DISCLOSED = "vendorsDisclosed",
                e.VENDORS_ALLOWED = "vendorsAllowed",
                e.PUBLISHER_TC = "publisherTC"
            }(h || (h = {}));
            class y {
                static ID_TO_KEY = [h.CORE, h.VENDORS_DISCLOSED, h.VENDORS_ALLOWED, h.PUBLISHER_TC];
                static KEY_TO_ID = {
                    [h.CORE]: 0,
                    [h.VENDORS_DISCLOSED]: 1,
                    [h.VENDORS_ALLOWED]: 2,
                    [h.PUBLISHER_TC]: 3
                }
            }
            class b extends u {
                bitLength = 0;
                maxId_ = 0;
                set_ = new Set;
                *[Symbol.iterator]() {
                    for (let e = 1; e <= this.maxId; e++)
                        yield[e, this.has(e)]
                }
                values() {
                    return this.set_.values()
                }
                get maxId() {
                    return this.maxId_
                }
                has(e) {
                    return this.set_.has(e)
                }
                unset(e) {
                    Array.isArray(e) ? e.forEach((e => this.unset(e))) : "object" == typeof e ? this.unset(Object.keys(e).map((e => Number(e)))) : (this.set_.delete(Number(e)),
                    this.bitLength = 0,
                    e === this.maxId && (this.maxId_ = 0,
                    this.set_.forEach((e => {
                        this.maxId_ = Math.max(this.maxId, e)
                    }
                    ))))
                }
                isIntMap(e) {
                    let t = "object" == typeof e;
                    return t = t && Object.keys(e).every((t => {
                        let n = Number.isInteger(parseInt(t, 10));
                        return n = n && this.isValidNumber(e[t].id),
                        n = n && void 0 !== e[t].name,
                        n
                    }
                    )),
                    t
                }
                isValidNumber(e) {
                    return parseInt(e, 10) > 0
                }
                isSet(e) {
                    let t = !1;
                    return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)),
                    t
                }
                set(e) {
                    if (Array.isArray(e))
                        e.forEach((e => this.set(e)));
                    else if (this.isSet(e))
                        this.set(Array.from(e));
                    else if (this.isIntMap(e))
                        this.set(Object.keys(e).map((e => Number(e))));
                    else {
                        if (!this.isValidNumber(e))
                            throw new i("set()",e,"must be positive integer array, positive integer, Set<number>, or IntMap");
                        this.set_.add(e),
                        this.maxId_ = Math.max(this.maxId, e),
                        this.bitLength = 0
                    }
                }
                empty() {
                    this.set_ = new Set,
                    this.maxId_ = 0
                }
                forEach(e) {
                    for (let t = 1; t <= this.maxId; t++)
                        e(this.has(t), t)
                }
                get size() {
                    return this.set_.size
                }
                setAll(e) {
                    this.set(e)
                }
            }
            class m {
                static[l.cmpId] = 12;
                static[l.cmpVersion] = 12;
                static[l.consentLanguage] = 12;
                static[l.consentScreen] = 6;
                static[l.created] = 36;
                static[l.isServiceSpecific] = 1;
                static[l.lastUpdated] = 36;
                static[l.policyVersion] = 6;
                static[l.publisherCountryCode] = 12;
                static[l.publisherLegitimateInterests] = 24;
                static[l.publisherConsents] = 24;
                static[l.purposeConsents] = 24;
                static[l.purposeLegitimateInterests] = 24;
                static[l.purposeOneTreatment] = 1;
                static[l.specialFeatureOptins] = 12;
                static[l.useNonStandardTexts] = 1;
                static[l.vendorListVersion] = 12;
                static[l.version] = 6;
                static anyBoolean = 1;
                static encodingType = 1;
                static maxId = 16;
                static numCustomPurposes = 6;
                static numEntries = 12;
                static numRestrictions = 12;
                static purposeId = 6;
                static restrictionType = 2;
                static segmentType = 3;
                static singleOrRange = 1;
                static vendorId = 16
            }
            class O {
                static encode(e, t) {
                    let n;
                    if ("string" == typeof e && (e = parseInt(e, 10)),
                    n = e.toString(2),
                    n.length > t || e < 0)
                        throw new o(`${e} too large to encode into ${t}`);
                    return n.length < t && (n = "0".repeat(t - n.length) + n),
                    n
                }
                static decode(e, t) {
                    if (t !== e.length)
                        throw new r("invalid bit length");
                    return parseInt(e, 2)
                }
            }
            class v {
                static encode(e, t) {
                    return O.encode(Math.round(e.getTime() / 100), t)
                }
                static decode(e, t) {
                    if (t !== e.length)
                        throw new r("invalid bit length");
                    const n = new Date;
                    return n.setTime(100 * O.decode(e, t)),
                    n
                }
            }
            class w {
                static encode(e) {
                    return String(Number(e))
                }
                static decode(e) {
                    return "1" === e
                }
            }
            class x {
                static encode(e, t) {
                    let n = "";
                    for (let r = 1; r <= t; r++)
                        n += w.encode(e.has(r));
                    return n
                }
                static decode(e, t) {
                    if (e.length !== t)
                        throw new r("bitfield encoding length mismatch");
                    const n = new b;
                    for (let r = 1; r <= t; r++)
                        w.decode(e[r - 1]) && n.set(r);
                    return n.bitLength = e.length,
                    n
                }
            }
            class j {
                static encode(e, t) {
                    const n = (e = e.toUpperCase()).charCodeAt(0) - 65
                      , r = e.charCodeAt(1) - 65;
                    if (n < 0 || n > 25 || r < 0 || r > 25)
                        throw new o(`invalid language code: ${e}`);
                    if (t % 2 == 1)
                        throw new o(`numBits must be even, ${t} is not valid`);
                    t /= 2;
                    return O.encode(n, t) + O.encode(r, t)
                }
                static decode(e, t) {
                    let n;
                    if (t !== e.length || e.length % 2)
                        throw new r("invalid bit length for language");
                    {
                        const t = 65
                          , r = e.length / 2
                          , o = O.decode(e.slice(0, r), r) + t
                          , s = O.decode(e.slice(r), r) + t;
                        n = String.fromCharCode(o) + String.fromCharCode(s)
                    }
                    return n
                }
            }
            class S {
                static encode(e) {
                    let t = O.encode(e.numRestrictions, m.numRestrictions);
                    if (!e.isEmpty()) {
                        const n = (t, n) => {
                            for (let r = t + 1; r <= n; r++)
                                if (e.gvl.vendorIds.has(r))
                                    return r;
                            return t
                        }
                        ;
                        e.getRestrictions().forEach((r => {
                            t += O.encode(r.purposeId, m.purposeId),
                            t += O.encode(r.restrictionType, m.restrictionType);
                            const o = e.getVendors(r)
                              , s = o.length;
                            let i = 0
                              , a = 0
                              , c = "";
                            for (let e = 0; e < s; e++) {
                                const t = o[e];
                                if (0 === a && (i++,
                                a = t),
                                e === s - 1 || o[e + 1] > n(t, o[s - 1])) {
                                    const e = !(t === a);
                                    c += w.encode(e),
                                    c += O.encode(a, m.vendorId),
                                    e && (c += O.encode(t, m.vendorId)),
                                    a = 0
                                }
                            }
                            t += O.encode(i, m.numEntries),
                            t += c
                        }
                        ))
                    }
                    return t
                }
                static decode(e) {
                    let t = 0;
                    const n = new g
                      , o = O.decode(e.substr(t, m.numRestrictions), m.numRestrictions);
                    t += m.numRestrictions;
                    for (let s = 0; s < o; s++) {
                        const o = O.decode(e.substr(t, m.purposeId), m.purposeId);
                        t += m.purposeId;
                        const s = O.decode(e.substr(t, m.restrictionType), m.restrictionType);
                        t += m.restrictionType;
                        const i = new f(o,s)
                          , a = O.decode(e.substr(t, m.numEntries), m.numEntries);
                        t += m.numEntries;
                        for (let o = 0; o < a; o++) {
                            const o = w.decode(e.substr(t, m.anyBoolean));
                            t += m.anyBoolean;
                            const s = O.decode(e.substr(t, m.vendorId), m.vendorId);
                            if (t += m.vendorId,
                            o) {
                                const o = O.decode(e.substr(t, m.vendorId), m.vendorId);
                                if (t += m.vendorId,
                                o < s)
                                    throw new r(`Invalid RangeEntry: endVendorId ${o} is less than ${s}`);
                                for (let e = s; e <= o; e++)
                                    n.add(e, i)
                            } else
                                n.add(s, i)
                        }
                    }
                    return n.bitLength = t,
                    n
                }
            }
            !function(e) {
                e[e.FIELD = 0] = "FIELD",
                e[e.RANGE = 1] = "RANGE"
            }(_ || (_ = {}));
            class E {
                static encode(e) {
                    const t = [];
                    let n, r = [], o = O.encode(e.maxId, m.maxId), s = "";
                    const i = m.maxId + m.encodingType
                      , a = i + e.maxId
                      , c = 2 * m.vendorId + m.singleOrRange + m.numEntries;
                    let l = i + m.numEntries;
                    return e.forEach(( (o, i) => {
                        if (s += w.encode(o),
                        n = e.maxId > c && l < a,
                        n && o) {
                            e.has(i + 1) ? 0 === r.length && (r.push(i),
                            l += m.singleOrRange,
                            l += m.vendorId) : (r.push(i),
                            l += m.vendorId,
                            t.push(r),
                            r = [])
                        }
                    }
                    )),
                    n ? (o += String(_.RANGE),
                    o += this.buildRangeEncoding(t)) : (o += String(_.FIELD),
                    o += s),
                    o
                }
                static decode(e, t) {
                    let n, o = 0;
                    const s = O.decode(e.substr(o, m.maxId), m.maxId);
                    o += m.maxId;
                    const i = O.decode(e.charAt(o), m.encodingType);
                    if (o += m.encodingType,
                    i === _.RANGE) {
                        if (n = new b,
                        1 === t) {
                            if ("1" === e.substr(o, 1))
                                throw new r("Unable to decode default consent=1");
                            o++
                        }
                        const s = O.decode(e.substr(o, m.numEntries), m.numEntries);
                        o += m.numEntries;
                        for (let t = 0; t < s; t++) {
                            const t = w.decode(e.charAt(o));
                            o += m.singleOrRange;
                            const r = O.decode(e.substr(o, m.vendorId), m.vendorId);
                            if (o += m.vendorId,
                            t) {
                                const t = O.decode(e.substr(o, m.vendorId), m.vendorId);
                                o += m.vendorId;
                                for (let e = r; e <= t; e++)
                                    n.set(e)
                            } else
                                n.set(r)
                        }
                    } else {
                        const t = e.substr(o, s);
                        o += s,
                        n = x.decode(t, s)
                    }
                    return n.bitLength = o,
                    n
                }
                static buildRangeEncoding(e) {
                    const t = e.length;
                    let n = O.encode(t, m.numEntries);
                    return e.forEach((e => {
                        const t = 1 === e.length;
                        n += w.encode(!t),
                        n += O.encode(e[0], m.vendorId),
                        t || (n += O.encode(e[1], m.vendorId))
                    }
                    )),
                    n
                }
            }
            function P() {
                return {
                    [l.version]: O,
                    [l.created]: v,
                    [l.lastUpdated]: v,
                    [l.cmpId]: O,
                    [l.cmpVersion]: O,
                    [l.consentScreen]: O,
                    [l.consentLanguage]: j,
                    [l.vendorListVersion]: O,
                    [l.policyVersion]: O,
                    [l.isServiceSpecific]: w,
                    [l.useNonStandardTexts]: w,
                    [l.specialFeatureOptins]: x,
                    [l.purposeConsents]: x,
                    [l.purposeLegitimateInterests]: x,
                    [l.purposeOneTreatment]: w,
                    [l.publisherCountryCode]: j,
                    [l.vendorConsents]: E,
                    [l.vendorLegitimateInterests]: E,
                    [l.publisherRestrictions]: S,
                    segmentType: O,
                    [l.vendorsDisclosed]: E,
                    [l.vendorsAllowed]: E,
                    [l.publisherConsents]: x,
                    [l.publisherLegitimateInterests]: x,
                    [l.numCustomPurposes]: O,
                    [l.publisherCustomConsents]: x,
                    [l.publisherCustomLegitimateInterests]: x
                }
            }
            class k {
                1 = {
                    [h.CORE]: [l.version, l.created, l.lastUpdated, l.cmpId, l.cmpVersion, l.consentScreen, l.consentLanguage, l.vendorListVersion, l.purposeConsents, l.vendorConsents]
                };
                2 = {
                    [h.CORE]: [l.version, l.created, l.lastUpdated, l.cmpId, l.cmpVersion, l.consentScreen, l.consentLanguage, l.vendorListVersion, l.policyVersion, l.isServiceSpecific, l.useNonStandardTexts, l.specialFeatureOptins, l.purposeConsents, l.purposeLegitimateInterests, l.purposeOneTreatment, l.publisherCountryCode, l.vendorConsents, l.vendorLegitimateInterests, l.publisherRestrictions],
                    [h.VENDORS_DISCLOSED]: [l.vendorsDisclosed],
                    [h.PUBLISHER_TC]: [l.publisherConsents, l.publisherLegitimateInterests, l.numCustomPurposes, l.publisherCustomConsents, l.publisherCustomLegitimateInterests],
                    [h.VENDORS_ALLOWED]: [l.vendorsAllowed]
                }
            }
            class C {
                1 = [h.CORE];
                2 = [h.CORE];
                constructor(e, t) {
                    if (2 === e.version)
                        if (e.isServiceSpecific)
                            this[2].push(h.VENDORS_DISCLOSED),
                            this[2].push(h.PUBLISHER_TC);
                        else {
                            const n = !(!t || !t.isForVendors);
                            n && !0 !== e[l.supportOOB] || this[2].push(h.VENDORS_DISCLOSED),
                            n && (e[l.supportOOB] && e[l.vendorsAllowed].size > 0 && this[2].push(h.VENDORS_ALLOWED),
                            this[2].push(h.PUBLISHER_TC))
                        }
                }
            }
            class A {
                static fieldSequence = new k;
                static encode(e, t) {
                    let n;
                    try {
                        n = this.fieldSequence[String(e.version)][t]
                    } catch (n) {
                        throw new o(`Unable to encode version: ${e.version}, segment: ${t}`)
                    }
                    let r = "";
                    t !== h.CORE && (r = O.encode(y.KEY_TO_ID[t], m.segmentType));
                    const s = P();
                    return n.forEach((n => {
                        const i = e[n]
                          , a = s[n];
                        let c = m[n];
                        void 0 === c && this.isPublisherCustom(n) && (c = Number(e[l.numCustomPurposes]));
                        try {
                            r += a.encode(i, c)
                        } catch (e) {
                            throw new o(`Error encoding ${t}->${n}: ${e.message}`)
                        }
                    }
                    )),
                    a.encode(r)
                }
                static decode(e, t, n) {
                    const o = a.decode(e);
                    let s = 0;
                    n === h.CORE && (t.version = O.decode(o.substr(s, m[l.version]), m[l.version])),
                    n !== h.CORE && (s += m.segmentType);
                    const i = this.fieldSequence[String(t.version)][n]
                      , c = P();
                    return i.forEach((e => {
                        const n = c[e];
                        let i = m[e];
                        if (void 0 === i && this.isPublisherCustom(e) && (i = Number(t[l.numCustomPurposes])),
                        0 !== i) {
                            const a = o.substr(s, i);
                            if (t[e] = n === E ? n.decode(a, t.version) : n.decode(a, i),
                            Number.isInteger(i))
                                s += i;
                            else {
                                if (!Number.isInteger(t[e].bitLength))
                                    throw new r(e);
                                s += t[e].bitLength
                            }
                        }
                    }
                    )),
                    t
                }
                static isPublisherCustom(e) {
                    return 0 === e.indexOf("publisherCustom")
                }
            }
            class T {
                static processor = [e => e, (e, t) => {
                    e.publisherRestrictions.gvl = t,
                    e.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
                    const n = new Map;
                    return n.set("legIntPurposes", e.vendorLegitimateInterests),
                    n.set("purposes", e.vendorConsents),
                    n.forEach(( (n, r) => {
                        n.forEach(( (o, s) => {
                            if (o) {
                                const o = t.vendors[s];
                                if (!o || o.deletedDate)
                                    n.unset(s);
                                else if (0 === o[r].length)
                                    if ("legIntPurposes" === r && 0 === o.purposes.length && 0 === o.legIntPurposes.length && o.specialPurposes.length > 0)
                                        n.set(s);
                                    else if ("legIntPurposes" === r && o.purposes.length > 0 && 0 === o.legIntPurposes.length && o.specialPurposes.length > 0)
                                        n.set(s);
                                    else if (e.isServiceSpecific)
                                        if (0 === o.flexiblePurposes.length)
                                            n.unset(s);
                                        else {
                                            const t = e.publisherRestrictions.getRestrictions(s);
                                            let o = !1;
                                            for (let e = 0, n = t.length; e < n && !o; e++)
                                                o = t[e].restrictionType === p.REQUIRE_CONSENT && "purposes" === r || t[e].restrictionType === p.REQUIRE_LI && "legIntPurposes" === r;
                                            o || n.unset(s)
                                        }
                                    else
                                        n.unset(s)
                            }
                        }
                        ))
                    }
                    )),
                    e
                }
                ];
                static process(e, t) {
                    const n = e.gvl;
                    if (!n)
                        throw new o("Unable to encode TCModel without a GVL");
                    if (!n.isReady)
                        throw new o("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
                    (e = e.clone()).consentLanguage = n.language.slice(0, 2).toUpperCase(),
                    t?.version > 0 && t?.version <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
                    const r = e.version - 1;
                    if (!this.processor[r])
                        throw new o(`Invalid version: ${e.version}`);
                    return this.processor[r](e, n)
                }
            }
            class I extends u {
                static LANGUAGE_CACHE = new Map;
                static CACHE = new Map;
                static LATEST_CACHE_KEY = 0;
                static DEFAULT_LANGUAGE = "EN";
                static consentLanguages = new c;
                static baseUrl_;
                static set baseUrl(e) {
                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
                        throw new s("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                    e.length > 0 && "/" !== e[e.length - 1] && (e += "/"),
                    this.baseUrl_ = e
                }
                static get baseUrl() {
                    return this.baseUrl_
                }
                static latestFilename = "vendor-list.json";
                static versionedFilename = "archives/vendor-list-v[VERSION].json";
                static languageFilename = "purposes-[LANG].json";
                readyPromise;
                gvlSpecificationVersion;
                vendorListVersion;
                tcfPolicyVersion;
                lastUpdated;
                purposes;
                specialPurposes;
                features;
                specialFeatures;
                isReady_ = !1;
                vendors_;
                vendorIds;
                fullVendorList;
                byPurposeVendorMap;
                bySpecialPurposeVendorMap;
                byFeatureVendorMap;
                bySpecialFeatureVendorMap;
                stacks;
                dataCategories;
                lang_;
                cacheLang_;
                isLatest = !1;
                constructor(e, t) {
                    super();
                    let n = I.baseUrl
                      , r = t?.language;
                    if (r)
                        try {
                            r = I.consentLanguages.parseLanguage(r)
                        } catch (e) {
                            throw new s("Error during parsing the language: " + e.message)
                        }
                    if (this.lang_ = r || I.DEFAULT_LANGUAGE,
                    this.cacheLang_ = r || I.DEFAULT_LANGUAGE,
                    this.isVendorList(e))
                        this.populate(e),
                        this.readyPromise = Promise.resolve();
                    else {
                        if (!n)
                            throw new s("must specify GVL.baseUrl before loading GVL json");
                        if (e > 0) {
                            const t = e;
                            I.CACHE.has(t) ? (this.populate(I.CACHE.get(t)),
                            this.readyPromise = Promise.resolve()) : (n += I.versionedFilename.replace("[VERSION]", String(t)),
                            this.readyPromise = this.fetchJson(n))
                        } else
                            I.CACHE.has(I.LATEST_CACHE_KEY) ? (this.populate(I.CACHE.get(I.LATEST_CACHE_KEY)),
                            this.readyPromise = Promise.resolve()) : (this.isLatest = !0,
                            this.readyPromise = this.fetchJson(n + I.latestFilename))
                    }
                }
                static emptyLanguageCache(e) {
                    let t = !1;
                    return null == e && I.LANGUAGE_CACHE.size > 0 ? (I.LANGUAGE_CACHE = new Map,
                    t = !0) : "string" == typeof e && this.consentLanguages.has(e.toUpperCase()) && (I.LANGUAGE_CACHE.delete(e.toUpperCase()),
                    t = !0),
                    t
                }
                static emptyCache(e) {
                    let t = !1;
                    return Number.isInteger(e) && e >= 0 ? (I.CACHE.delete(e),
                    t = !0) : void 0 === e && (I.CACHE = new Map,
                    t = !0),
                    t
                }
                cacheLanguage() {
                    I.LANGUAGE_CACHE.has(this.cacheLang_) || I.LANGUAGE_CACHE.set(this.cacheLang_, {
                        purposes: this.purposes,
                        specialPurposes: this.specialPurposes,
                        features: this.features,
                        specialFeatures: this.specialFeatures,
                        stacks: this.stacks,
                        dataCategories: this.dataCategories
                    })
                }
                async fetchJson(e) {
                    try {
                        this.populate(await class {
                            static absCall(e, t, n, r) {
                                return new Promise(( (o, s) => {
                                    const i = new XMLHttpRequest;
                                    i.withCredentials = n,
                                    i.addEventListener("load", ( () => {
                                        if (i.readyState == XMLHttpRequest.DONE)
                                            if (i.status >= 200 && i.status < 300) {
                                                let e = i.response;
                                                if ("string" == typeof e)
                                                    try {
                                                        e = JSON.parse(e)
                                                    } catch (e) {}
                                                o(e)
                                            } else
                                                s(new Error(`HTTP Status: ${i.status} response type: ${i.responseType}`))
                                    }
                                    )),
                                    i.addEventListener("error", ( () => {
                                        s(new Error("error"))
                                    }
                                    )),
                                    i.addEventListener("abort", ( () => {
                                        s(new Error("aborted"))
                                    }
                                    )),
                                    null === t ? i.open("GET", e, !0) : i.open("POST", e, !0),
                                    i.responseType = "json",
                                    i.timeout = r,
                                    i.ontimeout = () => {
                                        s(new Error("Timeout " + r + "ms " + e))
                                    }
                                    ,
                                    i.send(t)
                                }
                                ))
                            }
                            static post(e, t, n=!1, r=0) {
                                return this.absCall(e, JSON.stringify(t), n, r)
                            }
                            static fetch(e, t=!1, n=0) {
                                return this.absCall(e, null, t, n)
                            }
                        }
                        .fetch(e))
                    } catch (e) {
                        throw new s(e.message)
                    }
                }
                getJson() {
                    return {
                        gvlSpecificationVersion: this.gvlSpecificationVersion,
                        vendorListVersion: this.vendorListVersion,
                        tcfPolicyVersion: this.tcfPolicyVersion,
                        lastUpdated: this.lastUpdated,
                        purposes: this.clonePurposes(),
                        specialPurposes: this.cloneSpecialPurposes(),
                        features: this.cloneFeatures(),
                        specialFeatures: this.cloneSpecialFeatures(),
                        stacks: this.cloneStacks(),
                        ...this.dataCategories ? {
                            dataCategories: this.cloneDataCategories()
                        } : {},
                        vendors: this.cloneVendors()
                    }
                }
                cloneSpecialFeatures() {
                    const e = {};
                    for (const t of Object.keys(this.specialFeatures))
                        e[t] = I.cloneFeature(this.specialFeatures[t]);
                    return e
                }
                cloneFeatures() {
                    const e = {};
                    for (const t of Object.keys(this.features))
                        e[t] = I.cloneFeature(this.features[t]);
                    return e
                }
                cloneStacks() {
                    const e = {};
                    for (const t of Object.keys(this.stacks))
                        e[t] = I.cloneStack(this.stacks[t]);
                    return e
                }
                cloneDataCategories() {
                    const e = {};
                    for (const t of Object.keys(this.dataCategories))
                        e[t] = I.cloneDataCategory(this.dataCategories[t]);
                    return e
                }
                cloneSpecialPurposes() {
                    const e = {};
                    for (const t of Object.keys(this.specialPurposes))
                        e[t] = I.clonePurpose(this.specialPurposes[t]);
                    return e
                }
                clonePurposes() {
                    const e = {};
                    for (const t of Object.keys(this.purposes))
                        e[t] = I.clonePurpose(this.purposes[t]);
                    return e
                }
                static clonePurpose(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        ...e.descriptionLegal ? {
                            descriptionLegal: e.descriptionLegal
                        } : {},
                        ...e.illustrations ? {
                            illustrations: Array.from(e.illustrations)
                        } : {}
                    }
                }
                static cloneFeature(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        ...e.descriptionLegal ? {
                            descriptionLegal: e.descriptionLegal
                        } : {},
                        ...e.illustrations ? {
                            illustrations: Array.from(e.illustrations)
                        } : {}
                    }
                }
                static cloneDataCategory(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description
                    }
                }
                static cloneStack(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        purposes: Array.from(e.purposes),
                        specialFeatures: Array.from(e.specialFeatures)
                    }
                }
                static cloneDataRetention(e) {
                    return {
                        ..."number" == typeof e.stdRetention ? {
                            stdRetention: e.stdRetention
                        } : {},
                        purposes: {
                            ...e.purposes
                        },
                        specialPurposes: {
                            ...e.specialPurposes
                        }
                    }
                }
                static cloneVendorUrls(e) {
                    return e.map((e => ({
                        langId: e.langId,
                        privacy: e.privacy,
                        ...e.legIntClaim ? {
                            legIntClaim: e.legIntClaim
                        } : {}
                    })))
                }
                static cloneVendor(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        purposes: Array.from(e.purposes),
                        legIntPurposes: Array.from(e.legIntPurposes),
                        flexiblePurposes: Array.from(e.flexiblePurposes),
                        specialPurposes: Array.from(e.specialPurposes),
                        features: Array.from(e.features),
                        specialFeatures: Array.from(e.specialFeatures),
                        ...e.overflow ? {
                            overflow: {
                                httpGetLimit: e.overflow.httpGetLimit
                            }
                        } : {},
                        ..."number" == typeof e.cookieMaxAgeSeconds || null === e.cookieMaxAgeSeconds ? {
                            cookieMaxAgeSeconds: e.cookieMaxAgeSeconds
                        } : {},
                        ...void 0 !== e.usesCookies ? {
                            usesCookies: e.usesCookies
                        } : {},
                        ...e.policyUrl ? {
                            policyUrl: e.policyUrl
                        } : {},
                        ...void 0 !== e.cookieRefresh ? {
                            cookieRefresh: e.cookieRefresh
                        } : {},
                        ...void 0 !== e.usesNonCookieAccess ? {
                            usesNonCookieAccess: e.usesNonCookieAccess
                        } : {},
                        ...e.dataRetention ? {
                            dataRetention: this.cloneDataRetention(e.dataRetention)
                        } : {},
                        ...e.urls ? {
                            urls: this.cloneVendorUrls(e.urls)
                        } : {},
                        ...e.dataDeclaration ? {
                            dataDeclaration: Array.from(e.dataDeclaration)
                        } : {},
                        ...e.deviceStorageDisclosureUrl ? {
                            deviceStorageDisclosureUrl: e.deviceStorageDisclosureUrl
                        } : {},
                        ...e.deletedDate ? {
                            deletedDate: e.deletedDate
                        } : {}
                    }
                }
                cloneVendors() {
                    const e = {};
                    for (const t of Object.keys(this.fullVendorList))
                        e[t] = I.cloneVendor(this.fullVendorList[t]);
                    return e
                }
                async changeLanguage(e) {
                    let t = e;
                    try {
                        t = I.consentLanguages.parseLanguage(e)
                    } catch (e) {
                        throw new s("Error during parsing the language: " + e.message)
                    }
                    const n = e.toUpperCase();
                    if ((t.toLowerCase() !== I.DEFAULT_LANGUAGE.toLowerCase() || I.LANGUAGE_CACHE.has(n)) && t !== this.lang_)
                        if (this.lang_ = t,
                        I.LANGUAGE_CACHE.has(n)) {
                            const e = I.LANGUAGE_CACHE.get(n);
                            for (const t in e)
                                e.hasOwnProperty(t) && (this[t] = e[t])
                        } else {
                            const e = I.baseUrl + I.languageFilename.replace("[LANG]", this.lang_.toLowerCase());
                            try {
                                await this.fetchJson(e),
                                this.cacheLang_ = n,
                                this.cacheLanguage()
                            } catch (e) {
                                throw new s("unable to load language: " + e.message)
                            }
                        }
                }
                get language() {
                    return this.lang_
                }
                isVendorList(e) {
                    return void 0 !== e && void 0 !== e.vendors
                }
                populate(e) {
                    this.purposes = e.purposes,
                    this.specialPurposes = e.specialPurposes,
                    this.features = e.features,
                    this.specialFeatures = e.specialFeatures,
                    this.stacks = e.stacks,
                    this.dataCategories = e.dataCategories,
                    this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion,
                    this.tcfPolicyVersion = e.tcfPolicyVersion,
                    this.vendorListVersion = e.vendorListVersion,
                    this.lastUpdated = e.lastUpdated,
                    "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)),
                    this.vendors_ = e.vendors,
                    this.fullVendorList = e.vendors,
                    this.mapVendors(),
                    this.isReady_ = !0,
                    this.isLatest && I.CACHE.set(I.LATEST_CACHE_KEY, this.getJson()),
                    I.CACHE.has(this.vendorListVersion) || I.CACHE.set(this.vendorListVersion, this.getJson())),
                    this.cacheLanguage()
                }
                mapVendors(e) {
                    this.byPurposeVendorMap = {},
                    this.bySpecialPurposeVendorMap = {},
                    this.byFeatureVendorMap = {},
                    this.bySpecialFeatureVendorMap = {},
                    Object.keys(this.purposes).forEach((e => {
                        this.byPurposeVendorMap[e] = {
                            legInt: new Set,
                            consent: new Set,
                            flexible: new Set
                        }
                    }
                    )),
                    Object.keys(this.specialPurposes).forEach((e => {
                        this.bySpecialPurposeVendorMap[e] = new Set
                    }
                    )),
                    Object.keys(this.features).forEach((e => {
                        this.byFeatureVendorMap[e] = new Set
                    }
                    )),
                    Object.keys(this.specialFeatures).forEach((e => {
                        this.bySpecialFeatureVendorMap[e] = new Set
                    }
                    )),
                    Array.isArray(e) || (e = Object.keys(this.fullVendorList).map((e => +e))),
                    this.vendorIds = new Set(e),
                    this.vendors_ = e.reduce(( (e, t) => {
                        const n = this.vendors_[String(t)];
                        return n && void 0 === n.deletedDate && (n.purposes.forEach((e => {
                            this.byPurposeVendorMap[String(e)].consent.add(t)
                        }
                        )),
                        n.specialPurposes.forEach((e => {
                            this.bySpecialPurposeVendorMap[String(e)].add(t)
                        }
                        )),
                        n.legIntPurposes.forEach((e => {
                            this.byPurposeVendorMap[String(e)].legInt.add(t)
                        }
                        )),
                        n.flexiblePurposes && n.flexiblePurposes.forEach((e => {
                            this.byPurposeVendorMap[String(e)].flexible.add(t)
                        }
                        )),
                        n.features.forEach((e => {
                            this.byFeatureVendorMap[String(e)].add(t)
                        }
                        )),
                        n.specialFeatures.forEach((e => {
                            this.bySpecialFeatureVendorMap[String(e)].add(t)
                        }
                        )),
                        e[t] = n),
                        e
                    }
                    ), {})
                }
                getFilteredVendors(e, t, n, r) {
                    const o = e.charAt(0).toUpperCase() + e.slice(1);
                    let s;
                    const i = {};
                    return s = "purpose" === e && n ? this["by" + o + "VendorMap"][String(t)][n] : this["by" + (r ? "Special" : "") + o + "VendorMap"][String(t)],
                    s.forEach((e => {
                        i[String(e)] = this.vendors[String(e)]
                    }
                    )),
                    i
                }
                getVendorsWithConsentPurpose(e) {
                    return this.getFilteredVendors("purpose", e, "consent")
                }
                getVendorsWithLegIntPurpose(e) {
                    return this.getFilteredVendors("purpose", e, "legInt")
                }
                getVendorsWithFlexiblePurpose(e) {
                    return this.getFilteredVendors("purpose", e, "flexible")
                }
                getVendorsWithSpecialPurpose(e) {
                    return this.getFilteredVendors("purpose", e, void 0, !0)
                }
                getVendorsWithFeature(e) {
                    return this.getFilteredVendors("feature", e)
                }
                getVendorsWithSpecialFeature(e) {
                    return this.getFilteredVendors("feature", e, void 0, !0)
                }
                get vendors() {
                    return this.vendors_
                }
                narrowVendorsTo(e) {
                    this.mapVendors(e)
                }
                get isReady() {
                    return this.isReady_
                }
                clone() {
                    const e = new I(this.getJson());
                    return this.lang_ !== I.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_),
                    e
                }
                static isInstanceOf(e) {
                    return "object" == typeof e && "function" == typeof e.narrowVendorsTo
                }
            }
            class R extends u {
                static consentLanguages = I.consentLanguages;
                isServiceSpecific_ = !0;
                supportOOB_ = !1;
                useNonStandardTexts_ = !1;
                purposeOneTreatment_ = !1;
                publisherCountryCode_ = "AA";
                version_ = 2;
                consentScreen_ = 0;
                policyVersion_ = 5;
                consentLanguage_ = "EN";
                cmpId_ = 0;
                cmpVersion_ = 0;
                vendorListVersion_ = 0;
                numCustomPurposes_ = 0;
                gvl_;
                created;
                lastUpdated;
                specialFeatureOptins = new b;
                purposeConsents = new b;
                purposeLegitimateInterests = new b;
                publisherConsents = new b;
                publisherLegitimateInterests = new b;
                publisherCustomConsents = new b;
                publisherCustomLegitimateInterests = new b;
                customPurposes;
                vendorConsents = new b;
                vendorLegitimateInterests = new b;
                vendorsDisclosed = new b;
                vendorsAllowed = new b;
                publisherRestrictions = new g;
                constructor(e) {
                    super(),
                    e && (this.gvl = e),
                    this.updated()
                }
                set gvl(e) {
                    I.isInstanceOf(e) || (e = new I(e)),
                    this.gvl_ = e,
                    this.publisherRestrictions.gvl = e
                }
                get gvl() {
                    return this.gvl_
                }
                set cmpId(e) {
                    if (e = Number(e),
                    !(Number.isInteger(e) && e > 1))
                        throw new i("cmpId",e);
                    this.cmpId_ = e
                }
                get cmpId() {
                    return this.cmpId_
                }
                set cmpVersion(e) {
                    if (e = Number(e),
                    !(Number.isInteger(e) && e > -1))
                        throw new i("cmpVersion",e);
                    this.cmpVersion_ = e
                }
                get cmpVersion() {
                    return this.cmpVersion_
                }
                set consentScreen(e) {
                    if (e = Number(e),
                    !(Number.isInteger(e) && e > -1))
                        throw new i("consentScreen",e);
                    this.consentScreen_ = e
                }
                get consentScreen() {
                    return this.consentScreen_
                }
                set consentLanguage(e) {
                    this.consentLanguage_ = e
                }
                get consentLanguage() {
                    return this.consentLanguage_
                }
                set publisherCountryCode(e) {
                    if (!/^([A-z]){2}$/.test(e))
                        throw new i("publisherCountryCode",e);
                    this.publisherCountryCode_ = e.toUpperCase()
                }
                get publisherCountryCode() {
                    return this.publisherCountryCode_
                }
                set vendorListVersion(e) {
                    if ((e = Number(e) >> 0) < 0)
                        throw new i("vendorListVersion",e);
                    this.vendorListVersion_ = e
                }
                get vendorListVersion() {
                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                }
                set policyVersion(e) {
                    if (this.policyVersion_ = parseInt(e, 10),
                    this.policyVersion_ < 0)
                        throw new i("policyVersion",e)
                }
                get policyVersion() {
                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                }
                set version(e) {
                    this.version_ = parseInt(e, 10)
                }
                get version() {
                    return this.version_
                }
                set isServiceSpecific(e) {
                    this.isServiceSpecific_ = e
                }
                get isServiceSpecific() {
                    return this.isServiceSpecific_
                }
                set useNonStandardTexts(e) {
                    this.useNonStandardTexts_ = e
                }
                get useNonStandardTexts() {
                    return this.useNonStandardTexts_
                }
                set supportOOB(e) {
                    this.supportOOB_ = e
                }
                get supportOOB() {
                    return this.supportOOB_
                }
                set purposeOneTreatment(e) {
                    this.purposeOneTreatment_ = e
                }
                get purposeOneTreatment() {
                    return this.purposeOneTreatment_
                }
                setAllVendorConsents() {
                    this.vendorConsents.set(this.gvl.vendors)
                }
                unsetAllVendorConsents() {
                    this.vendorConsents.empty()
                }
                setAllVendorsDisclosed() {
                    this.vendorsDisclosed.set(this.gvl.vendors)
                }
                unsetAllVendorsDisclosed() {
                    this.vendorsDisclosed.empty()
                }
                setAllVendorsAllowed() {
                    this.vendorsAllowed.set(this.gvl.vendors)
                }
                unsetAllVendorsAllowed() {
                    this.vendorsAllowed.empty()
                }
                setAllVendorLegitimateInterests() {
                    this.vendorLegitimateInterests.set(this.gvl.vendors)
                }
                unsetAllVendorLegitimateInterests() {
                    this.vendorLegitimateInterests.empty()
                }
                setAllPurposeConsents() {
                    this.purposeConsents.set(this.gvl.purposes)
                }
                unsetAllPurposeConsents() {
                    this.purposeConsents.empty()
                }
                setAllPurposeLegitimateInterests() {
                    this.purposeLegitimateInterests.set(this.gvl.purposes)
                }
                unsetAllPurposeLegitimateInterests() {
                    this.purposeLegitimateInterests.empty()
                }
                setAllSpecialFeatureOptins() {
                    this.specialFeatureOptins.set(this.gvl.specialFeatures)
                }
                unsetAllSpecialFeatureOptins() {
                    this.specialFeatureOptins.empty()
                }
                setAll() {
                    this.setAllVendorConsents(),
                    this.setAllPurposeLegitimateInterests(),
                    this.setAllSpecialFeatureOptins(),
                    this.setAllPurposeConsents(),
                    this.setAllVendorLegitimateInterests()
                }
                unsetAll() {
                    this.unsetAllVendorConsents(),
                    this.unsetAllPurposeLegitimateInterests(),
                    this.unsetAllSpecialFeatureOptins(),
                    this.unsetAllPurposeConsents(),
                    this.unsetAllVendorLegitimateInterests()
                }
                get numCustomPurposes() {
                    let e = this.numCustomPurposes_;
                    if ("object" == typeof this.customPurposes) {
                        const t = Object.keys(this.customPurposes).sort(( (e, t) => Number(e) - Number(t)));
                        e = parseInt(t.pop(), 10)
                    }
                    return e
                }
                set numCustomPurposes(e) {
                    if (this.numCustomPurposes_ = parseInt(e, 10),
                    this.numCustomPurposes_ < 0)
                        throw new i("numCustomPurposes",e)
                }
                updated() {
                    const e = new Date
                      , t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
                    this.created = t,
                    this.lastUpdated = t
                }
            }
            class L {
                static encode(e, t) {
                    let n, r = "";
                    return e = T.process(e, t),
                    n = Array.isArray(t?.segments) ? t.segments : new C(e,t)["" + e.version],
                    n.forEach(( (t, o) => {
                        let s = "";
                        o < n.length - 1 && (s = "."),
                        r += A.encode(e, t) + s
                    }
                    )),
                    r
                }
                static decode(e, t) {
                    const n = e.split(".")
                      , r = n.length;
                    t || (t = new R);
                    for (let e = 0; e < r; e++) {
                        const r = n[e]
                          , o = a.decode(r.charAt(0)).substr(0, m.segmentType)
                          , s = y.ID_TO_KEY[O.decode(o, m.segmentType).toString()];
                        A.decode(r, t, s)
                    }
                    return t
                }
            }
        }
    }, s = {};
    function i(e) {
        var t = s[e];
        if (void 0 !== t)
            return t.exports;
        var n = s[e] = {
            exports: {}
        };
        return o[e].call(n.exports, n, n.exports, i),
        n.exports
    }
    i.m = o,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    i.t = function(n, r) {
        if (1 & r && (n = this(n)),
        8 & r)
            return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule)
                return n;
            if (16 & r && "function" == typeof n.then)
                return n
        }
        var o = Object.create(null);
        i.r(o);
        var s = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
            Object.getOwnPropertyNames(a).forEach((function(e) {
                s[e] = function() {
                    return n[e]
                }
            }
            ));
        return s.default = function() {
            return n
        }
        ,
        i.d(o, s),
        o
    }
    ,
    i.d = function(e, t) {
        for (var n in t)
            i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    i.f = {},
    i.e = function(e) {
        return Promise.all(Object.keys(i.f).reduce((function(t, n) {
            return i.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    i.u = function(e) {
        return e + ".bundle.js"
    }
    ,
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n = {},
    r = "appconsent:",
    i.l = function(e, t, o, s) {
        if (n[e])
            n[e].push(t);
        else {
            var a, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                    var p = l[u];
                    if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == r + o) {
                        a = p;
                        break
                    }
                }
            a || (c = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            i.nc && a.setAttribute("nonce", i.nc),
            a.setAttribute("data-webpack", r + o),
            a.src = e),
            n[e] = [t];
            var d = function(t, r) {
                a.onerror = a.onload = null,
                clearTimeout(h);
                var o = n[e];
                if (delete n[e],
                a.parentNode && a.parentNode.removeChild(a),
                o && o.forEach((function(e) {
                    return e(r)
                }
                )),
                t)
                    return t(r)
            }
              , h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = d.bind(null, a.onerror),
            a.onload = d.bind(null, a.onload),
            c && document.head.appendChild(a)
        }
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.p = "https://cdn.appconsent.io/tcf2-clear/32.12.1/",
    function() {
        var e = {
            9114: 0
        };
        i.f.j = function(t, n) {
            var r = i.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }
                    ));
                    n.push(r[2] = o);
                    var s = i.p + i.u(t)
                      , a = new Error;
                    i.l(s, (function(n) {
                        if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , s = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")",
                            a.name = "ChunkLoadError",
                            a.type = o,
                            a.request = s,
                            r[1](a)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = function(t, n) {
            var r, o, s = n[0], a = n[1], c = n[2], l = 0;
            if (s.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in a)
                    i.o(a, r) && (i.m[r] = a[r]);
                if (c)
                    c(i)
            }
            for (t && t(n); l < s.length; l++)
                o = s[l],
                i.o(e, o) && e[o] && e[o][0](),
                e[o] = 0
        }
          , n = self.webpackChunkappconsent = self.webpackChunkappconsent || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var a = {};
    i.r(a),
    i.d(a, {
        default: function() {
            return ge
        }
    });
    var c = i(8580)
      , l = i(7183)
      , u = i(7954)
      , p = i(1845)
      , d = i(3769)
      , h = i(4795)
      , _ = i(8030)
      , f = i(223)
      , g = i(8930);
    const {DISALLOWED: y} = l.PI;
    function b(e, t) {
        const n = new g.jT(function(e) {
            const t = {
                gvlSpecificationVersion: 2,
                vendorListVersion: e.vendorlist.iab_gvl || 0,
                tcfPolicyVersion: e.vendorlist.tcf_policy_version || 0,
                lastUpdated: (new Date).toISOString(),
                purposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {},
                vendors: {},
                stacks: {}
            };
            for (const n of e.consents.consentables) {
                const {iab_id: e, type: r} = n;
                if (!e)
                    continue;
                const o = {
                    id: e
                };
                switch (r) {
                case 0:
                    t.purposes[e] = o;
                    break;
                case 1:
                    t.features[e] = o;
                    break;
                case 2:
                    t.specialFeatures[e] = o;
                    break;
                case 3:
                    t.specialPurposes[e] = o
                }
            }
            for (const n of e.consents.vendors) {
                const {iab_id: r, consentables: o, legintables: s, flexibles: i, name: a} = n;
                if (!r)
                    continue;
                const c = {
                    id: r,
                    name: a,
                    purposes: [],
                    legIntPurposes: [],
                    flexiblePurposes: [],
                    specialPurposes: [],
                    features: [],
                    specialFeatures: []
                };
                t.vendors[r] = c;
                for (const t of e.consents.consentables) {
                    const {id: e, iab_id: n, type: r} = t;
                    if (n) {
                        if (o.includes(e))
                            switch (r) {
                            case 0:
                                c.purposes.push(n);
                                break;
                            case 1:
                                c.features.push(n);
                                break;
                            case 2:
                                c.specialFeatures.push(n);
                                break;
                            case 3:
                                c.specialPurposes.push(n)
                            }
                        s.includes(e) && c.legIntPurposes.push(n),
                        i && i.includes(e) && c.flexiblePurposes.push(n)
                    }
                }
            }
            const n = new g.aI(t);
            return n.lang_ = e.i18n && (e.i18n.usedLanguage || e.i18n.defaultLanguage || e.i18n.selectedLanguage) || "FR",
            n.clone = () => new g.aI(n.getJson()),
            n
        }(e));
        n.policyVersion = e.vendorlist.tcf_policy_version,
        n.cmpVersion = e.CMP_VERSION,
        n.isServiceSpecific = e.vendorlist.is_service_specific,
        n.cmpId = 2,
        n.lastUpdated = new Date(t.setUTCHours(0, 0, 0, 0)),
        n.created = n.lastUpdated,
        n.publisherCountryCode = "FR",
        n.setAllVendorsDisclosed();
        for (const t of e.consents.consentables) {
            const {iab_id: e, type: r, status: o, legintStatus: s} = t;
            if (e) {
                if (o !== y)
                    switch (r) {
                    case 0:
                        n.purposeConsents.set(e);
                        break;
                    case 1:
                        break;
                    case 2:
                        n.specialFeatureOptins.set(e)
                    }
                if (s !== y && 0 === r)
                    n.purposeLegitimateInterests.set(e)
            }
        }
        for (const t of e.consents.vendors) {
            const {iab_id: e, status: r, legintStatus: o} = t;
            e && (r !== y && n.vendorConsents.set(e),
            o !== y && n.vendorLegitimateInterests.set(e))
        }
        if (e.vendorlist.remove_legintables) {
            const t = e.consents.consentables.filter((e => !!e.iab_id)).filter((e => 0 === e.type)).map((e => new g.FY(e.id,g.hS.REQUIRE_CONSENT)));
            e.consents.vendors.forEach((e => {
                e.iab_id && e.legintables.length > 0 && e.flexibles.length > 0 && e.flexibles.forEach((r => {
                    const o = t.find((e => e.purposeId === r));
                    o && n.publisherRestrictions.add(e.iab_id, o)
                }
                ))
            }
            ))
        }
        return g.de.encode(n)
    }
    function m(e, t, n) {
        let r = t(e.getState());
        return e.subscribe((function() {
            const o = r;
            r = t(e.getState()),
            o !== r && n(r, o)
        }
        ))
    }
    const O = () => {
        const e = window.location.search.substr(1).split("&");
        if ("" === e)
            return {};
        for (var t = {}, n = 0; n < e.length; ++n) {
            var r = e[n].split("=", 2);
            if (1 === r.length)
                t[r[0]] = "";
            else {
                var o = decodeURIComponent(r[1].replace(/\+/g, " "));
                "false" === o && (o = !1),
                "0" === o && (o = 0),
                "true" === o && (o = !0),
                "" === o && (o = null),
                t[r[0]] = o
            }
        }
        return t
    }
    ;
    var v = i(5819);
    const w = (0,
    d.v)("core");
    function x(e, t) {
        if ("function" != typeof window.__tcfapi)
            return console.warn("SFBX ConsentListener: There is no __tcfapi function in the global scope to add consent-listener");
        w("Consent Listener initialised"),
        window.dataLayer = window.dataLayer || [],
        window.adsbygoogle = window.adsbygoogle || [],
        window.gtag = function() {
            window.dataLayer.push(arguments)
        }
        ,
        window.__tcfapi("addEventListener", 2, (function(n, r) {
            !function(e, t, n, r) {
                if (w("Consent listener : addEventListener triggered", n, r),
                r && ("tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus)) {
                    if ((window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0,
                    !n.gdprApplies)
                        return S(n),
                        void j(e.thirdPartyScriptURLs);
                    S(n),
                    n.purpose.consents && n.vendor.consents && (n.purpose.consents[1] && j(e.thirdPartyScriptURLs),
                    function(e, t) {
                        if (!t.enableGCM)
                            return;
                        e.purpose.consents[1] && e.vendor.consents[755] ? (t.googleEnableBasicConsentMode && gtag("consent", "default", {
                            functionality_storage: "denied",
                            analytics_storage: "denied",
                            ad_storage: "denied",
                            personalization_storage: "denied",
                            ad_user_data: "denied",
                            ad_personalization: "denied",
                            security_storage: "granted"
                        }),
                        gtag("consent", "update", {
                            functionality_storage: "granted",
                            security_storage: "granted",
                            analytics_storage: e.purpose.consents[7] || e.purpose.consents[9] ? "granted" : "denied",
                            ad_storage: e.purpose.consents[3] ? "granted" : "denied",
                            personalization_storage: e.purpose.consents[3] ? "granted" : "denied",
                            ad_user_data: e.purpose.consents[3] ? "granted" : "denied",
                            ad_personalization: e.purpose.consents[3] || e.purpose.consents[4] ? "granted" : "denied"
                        })) : t.googleEnableBasicConsentMode || gtag("consent", "update", {
                            functionality_storage: "denied",
                            analytics_storage: "denied",
                            ad_storage: "denied",
                            personalization_storage: "denied",
                            ad_user_data: "denied",
                            ad_personalization: "denied",
                            security_storage: "granted"
                        })
                    }(n, e)),
                    function(e, t) {
                        if (!t.scriptsToInject || !t.scriptsToInject.length)
                            return;
                        (0,
                        v.hB)(t.scriptsToInject, e, w)
                    }(t, e),
                    "useractioncomplete" === n.eventStatus && window.dataLayer.push({
                        event: "new_consent_raised"
                    }),
                    e.callbacks.choiceDone(n, r)
                }
                window.dataLayer.push({
                    event: "appconsent_loaded"
                }),
                e.callbacks.listener(n, r)
            }(e, t, n, r)
        }
        ))
    }
    function j(e) {
        w("stopGuardian", e),
        e.forEach((e => {
            const t = document.createElement("script");
            t.setAttribute("src", e),
            t.setAttribute("type", "application/javascript"),
            document.head.appendChild(t)
        }
        )),
        "undefined" != typeof sfbxguardian && sfbxguardian.unblock && sfbxguardian.unblock()
    }
    function S(e) {
        !function(e) {
            if (e.purpose.consents) {
                window.dataLayer.push({
                    AppConsent_IAB_PURPOSES: e.purpose.consents
                });
                for (let t in e.purpose.consents)
                    e.purpose.consents[t] && window.dataLayer.push({
                        event: "appconsent_ctrl_" + t
                    })
            }
        }(e),
        function(e) {
            if (e.acExtraPurposes) {
                let t = {};
                e.acExtraPurposes.forEach((function(e) {
                    t[e] = !0
                }
                )),
                window.dataLayer.push({
                    AppConsent_EXTRA_PURPOSES: t
                })
            }
        }(e),
        function(e) {
            if (e.acExtraVendors) {
                let t = {};
                Object.entries(e.extraVendor.consents).map(( ([e,n]) => {
                    t[e] = n,
                    window.dataLayer.push({
                        event: `${n ? "acextravendor_granted_" : "acextravendor_denied_"}${e}`
                    })
                }
                )),
                window.dataLayer.push({
                    AppConsent_EXTRA_VENDORS: t
                })
            }
        }(e),
        window.dataLayer.push({
            event: "appconsent_choice_available"
        })
    }
    function E(e, t={}) {
        const n = String(e)
          , r = void 0 !== t.length ? t.length : 30
          , o = void 0 !== t.omission ? t.omission : "..."
          , s = t.separator;
        if (n.length <= r)
            return n;
        const i = r - o.length;
        if (i < 0)
            return o.slice(0, r);
        let a = n.slice(0, i);
        if (void 0 !== s)
            if ("string" == typeof s) {
                const e = a.lastIndexOf(s);
                -1 !== e && (a = a.slice(0, e))
            } else if (s instanceof RegExp) {
                let e, t = -1;
                const n = s.flags.includes("g") ? s.flags : s.flags + "g"
                  , r = new RegExp(s.source,n);
                for (; null !== (e = r.exec(a)); )
                    t = e.index;
                -1 !== t && (a = a.slice(0, t))
            }
        return a + o
    }
    function P(e) {
        function t(e, t) {
            return e >>> t | e << 32 - t
        }
        const n = Math.pow
          , r = n(2, 32);
        let o, s, i = "";
        const a = []
          , c = 8 * e.length
          , l = P.h = P.h || []
          , u = P.k = P.k || [];
        let p = u.length;
        const d = {};
        for (let e = 2; p < 64; e++)
            if (!d[e]) {
                for (o = 0; o < 313; o += e)
                    d[o] = e;
                l[p] = n(e, .5) * r | 0,
                u[p++] = n(e, 1 / 3) * r | 0
            }
        for (e += ""; e.length % 64 - 56; )
            e += "\0";
        for (o = 0; o < e.length; o++) {
            if (s = e.charCodeAt(o),
            s >> 8)
                throw new Error("Only ASCII strings supported");
            a[o >> 2] |= s << (3 - o) % 4 * 8
        }
        for (a[a.length] = c / r | 0,
        a[a.length] = c,
        s = 0; s < a.length; ) {
            const e = a.slice(s, s += 16)
              , n = l.slice(0);
            for (o = 0; o < 64; o++) {
                const n = e[o - 15]
                  , r = e[o - 2]
                  , s = l[0]
                  , i = l[4]
                  , a = l[7] + (t(i, 6) ^ t(i, 11) ^ t(i, 25)) + (i & l[5] ^ ~i & l[6]) + u[o] + (e[o] = o < 16 ? e[o] : e[o - 16] + (t(n, 7) ^ t(n, 18) ^ n >>> 3) + e[o - 7] + (t(r, 17) ^ t(r, 19) ^ r >>> 10) | 0)
                  , c = (t(s, 2) ^ t(s, 13) ^ t(s, 22)) + (s & l[1] ^ s & l[2] ^ l[1] & l[2]);
                l[7] = l[6],
                l[6] = l[5],
                l[5] = l[4],
                l[4] = l[3] + a | 0,
                l[3] = l[2],
                l[2] = l[1],
                l[1] = l[0],
                l[0] = a + c | 0
            }
            for (o = 0; o < 8; o++)
                l[o] = l[o] + n[o] | 0
        }
        for (o = 0; o < 8; o++)
            for (s = 3; s + 1; s--) {
                const e = l[o] >> 8 * s & 255;
                i += (e < 16 ? "0" : "") + e.toString(16)
            }
        return i
    }
    const k = e => !e || !Object.keys(e).length || !Object.keys(e.main).length && !Object.keys(e.settings).length
      , C = e => {
        if (!e || !Object.keys(e).length || "object" != typeof e)
            return {};
        const t = Object.keys(e)[0];
        return {
            "Client-Context": `${t}=${e[t]}`
        }
    }
    ;
    var A = i(1595);
    const T = {
        amp: null,
        appKey: null,
        epoch: null,
        debug: !1,
        debugI18n: !1,
        dynamicallyLoadedScripts: {},
        enableGCM: !1,
        forceGDPRApplies: !1,
        forceStatic: !1,
        gdprApplies: null,
        global: !1,
        i18n: {},
        language: null,
        optidigital: null,
        privacyWidget: {},
        static: null,
        storage: !0,
        thirdPartyScriptURLs: [],
        url: l.Ez,
        uuid: null,
        cmpVersionCacheDuration: 1800,
        urlRedirect: null,
        callbacks: {
            init: (e, t) => {}
            ,
            show: e => {}
            ,
            listener: (e, t) => {}
            ,
            choiceDone: (e, t) => {}
            ,
            adcDetected: () => {}
            ,
            adcUnblocked: () => {}
        },
        previewMode: !1,
        countriesExcludedForGCM: null,
        googleEnableBasicConsentMode: !1,
        popIn: void 0,
        isVerticalButtonBottomBanner: !1,
        verticalButtonBottomBannerPosition: "center",
        contextForDynamicCMP: {},
        excludedUrlsForDisplay: []
    }
      , I = (0,
    d.v)("amp")
      , R = 0;
    let L = null;
    function N(e, t) {
        m(e, (e => 0 !== e.ui.scenes.length), (t => {
            const n = e.getState();
            if (t)
                (0,
                f.h)({
                    type: "consent-ui",
                    action: "ready",
                    initialHeight: n && n.ui && n.ui.configuration && n.ui.configuration.bannerMode === l.Gm.MODAL ? "80vh" : "60vh"
                });
            else {
                let e = Promise.resolve();
                L && (e = L.promise),
                e.then(( () => (0,
                f.h)({
                    type: "consent-response",
                    action: "dismiss"
                })))
            }
        }
        )),
        m(e, (e => e.ui.scenes[e.ui.scenes.length - 1] && e.ui.scenes[e.ui.scenes.length - 1].scene === l.UN.PRIVACY), (e => {
            e && (0,
            f.h)({
                type: "consent-ui",
                action: "enter-fullscreen"
            })
        }
        )),
        m(e, (e => e.consentstringUpdatedAt), (async () => {
            const n = e.getState().consentstring;
            if (n) {
                const o = e.getState()
                  , s = _.Tp.google_providers(o)
                  , i = () => {
                    (0,
                    f.h)({
                        type: "consent-response",
                        action: o.consents.type === R ? "accept" : "reject",
                        info: n,
                        consentMetadata: {
                            gdprApplies: !0,
                            consentStringType: 2,
                            additionalConsent: s || void 0
                        }
                    }),
                    L && L.ok()
                }
                ;
                if (t) {
                    L = function() {
                        let e, t = new Promise(( (t, n) => {
                            e = t
                        }
                        ));
                        return {
                            ok: e,
                            promise: t
                        }
                    }(),
                    I("optidigital sync start");
                    let e, o = "https://scripts.static-od.com/js/presync.html?endpoint=optidigital&max_sync_count=5&gdpr=1&gdpr_consent=%s", s = 1e3;
                    "object" == typeof t && (t.endpoint && (o = t.endpoint),
                    t.timeout && (s = t.timeout));
                    const a = t => {
                        t.data.preSync && "complete" === t.data.preSync.status && (I("optidigital sync received"),
                        e && clearTimeout(e),
                        i())
                    }
                    ;
                    e = setTimeout(( () => {
                        I("optidigital timeout hit"),
                        window.removeEventListener("message", a),
                        i()
                    }
                    ), s),
                    window.addEventListener("message", a);
                    var r = document.createElement("iframe");
                    r.style.display = "none",
                    r.src = o.replace("%s", n),
                    document.body.appendChild(r)
                } else
                    i()
            }
        }
        ))
    }
    function V() {
        const e = l.zh + "="
          , t = document.cookie.split(";");
        for (let n = 0; n < t.length; n++) {
            const r = t[n].trim();
            if (0 === r.indexOf(e)) {
                const t = r.substring(e.length);
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    return t
                }
            }
        }
        return null
    }
    const D = (0,
    d.v)("core")
      , U = (0,
    d.v)("tcf");
    function M(e) {
        return !!(e && e.consent && e.consent.cmp_hash && e.cmp_hash && e.consent.cmp_hash !== e.cmp_hash)
    }
    function F(e, t) {
        M(t) && (D(`CMP_hash mismatch: vendorlist ${t.cmp_hash} != consent ${t.consent.cmp_hash}`),
        e.dispatch(_.o1.reset()))
    }
    class B {
        constructor(e, t, n, r, o, s, i={}) {
            const a = (e, t) => (...e) => (D(" call"),
            t.apply(this, e.slice(1)).then((t => e[0] && e[0](null, t))).catch((t => e[0] && e[0](t, null))));
            "function" != typeof __tcfapi && "function" == typeof u && u(),
            this.Api = n,
            this.Storage = o,
            this.uiProvider = r,
            this.api = null,
            this.CMP_VERSION = e,
            this.DOMTarget = s,
            this.config = {},
            this.uiConfig = i,
            this.lang = (0,
            p.X)(),
            this.storage = null,
            this.store = null,
            this.isInitialised = !1,
            this.configuration = null,
            this.gdprApplies = !0,
            this.retryShowMaxAttempt = 20,
            this.cmp = new t(2,this.CMP_VERSION,!0,{
                init: a(0, this.init).bind(this),
                show: a(0, this.show),
                no_show: a(0, this.noShow),
                accept: a(0, this.accept),
                deny: a(0, this.deny),
                fakedeny: a(0, this.fakedeny),
                presentNotice: a(0, this.show),
                setExternalIds: a(0, this.setExternalIds),
                saveExternalIds: a(0, this.saveExternalIds),
                getExternalIds: a(0, this.getExternalIds),
                checkForUpdate: this.checkForUpdate.bind(this),
                extraFloatingAllowed: this.extraFloatingAllowed.bind(this),
                isFloatingNeedUpdate: this.isFloatingNeedUpdate.bind(this),
                saveFloatingPurposes: a(0, this.saveFloatingPurposes),
                updateExtraPurpose: a(0, this.updateExtraPurpose),
                getTCData: (e, t) => {
                    try {
                        if (e && "function" == typeof e)
                            if (this.gdprApplies) {
                                let n = !1;
                                if (t && t.cmpId && this.store) {
                                    const e = this.store.getState()
                                      , r = e => e.filter((e => e.extra_id && 1 === e.status)).map((e => e.extra_id))
                                      , o = e => e.filter((e => e.extra_id)).reduce(( (e, t) => ({
                                        ...e,
                                        [t.extra_id]: 1 === t.status
                                    })), {})
                                      , s = e => {
                                        const t = e.consents.vendors.filter((e => e.extra_id))
                                          , n = e.consents.consentables;
                                        return t.reduce(( (e, t) => {
                                            const r = t.consentables.some((e => 1 === n.find((t => t.id === e)).status));
                                            return {
                                                ...e,
                                                [t.extra_id]: 1 === t.status && r
                                            }
                                        }
                                        ), {})
                                    }
                                    ;
                                    t.enableAdvertiserConsentMode = this.configuration.googleEnableAdvertiserConsentMode,
                                    t.addtlConsent = _.Tp.google_providers(e),
                                    t.acExtraPurposes = r(e.consents.consentables),
                                    t.acExtraVendors = r(e.consents.vendors),
                                    t.extraPurpose = {
                                        consents: e.consentstring ? o(e.consents.consentables) : {}
                                    },
                                    t.extraVendor = {
                                        consents: e.consentstring ? s(e) : {}
                                    },
                                    n = !0
                                }
                                try {
                                    e(t, n)
                                } catch (e) {
                                    e.message;
                                    throw new Error(` ; Stack: ${e.stack}`)
                                }
                            } else {
                                if (t && t.cmpId && this.store) {
                                    const e = this.store.getState()
                                      , n = c.ac.Vendorlist.Consentable.EnumConsentableType
                                      , r = e => e.filter((e => e.extra_id)).map((e => e.extra_id))
                                      , o = e => e.reduce(( (e, t) => ({
                                        ...e,
                                        [t]: !0
                                    })), {})
                                      , s = e => e.filter((e => e.type === n.PURPOSE && !e.extra_id)).reduce(( (e, t) => ({
                                        ...e,
                                        [t.iab_id]: !0
                                    })), {});
                                    t.enableAdvertiserConsentMode = this.configuration.googleEnableAdvertiserConsentMode,
                                    t.acExtraPurposes = r(e.consents.consentables),
                                    t.acExtraVendors = r(e.consents.vendors),
                                    t.extraPurpose = {
                                        consents: o(t.acExtraPurposes)
                                    },
                                    t.extraVendor = {
                                        consents: o(t.acExtraVendors)
                                    },
                                    t.purpose = {
                                        consents: s(e.consents.consentables)
                                    }
                                }
                                try {
                                    e(t, !0)
                                } catch (e) {
                                    e.message;
                                    throw new Error(` ; Stack: ${e.stack}`)
                                }
                            }
                        else
                            D("Callback passed to __tcfapi getTCData/addEventListener method is not a function. Please, make sure to pass valid parameters.")
                    } catch (e) {
                        console.error(`SFBX overrideTCData : ${e.message}`)
                    }
                }
                ,
                updateStatus: a(0, this.updateStatus)
            }),
            !this.gdprApplies && this.cmp && this.cmp.update(null),
            this.startCMP()
        }
        fail() {
            this.cmp.disable(),
            this.releaseGCM()
        }
        startCMP() {
            if ("undefined" == typeof configSFBXAppConsent)
                return;
            const e = e => {
                e && console.error("An error has occurred on the show method", e),
                D("show callback called"),
                this.configuration.callbacks.show(e)
            }
            ;
            __tcfapi("init", 2, ( (t, n) => {
                t && console.error("An error has occurred on the init method", t),
                D("init callback called"),
                this.configuration.callbacks.init(t, n),
                this.gdprApplies && !t && (this.store.dispatch(_.o1.track((0,
                l.Xp)().NEW_IMPLEMENTATION)),
                window.appConsentLoaderUsed && this.store.dispatch(_.o1.track((0,
                l.Xp)().LOADER_USED)),
                __tcfapi("show", 2, e, {
                    lazy: this.configuration.lazy
                }))
            }
            ), configSFBXAppConsent)
        }
        async init(e={}) {
            if (this.isInitialised)
                throw new Error("Cannot init twice");
            this.isInitialised = !0,
            console.log("CMP AppConsent version : v32.12.1"),
            "boolean" == typeof window.isGtagInitBeforeAppConsent && window.isGtagInitBeforeAppConsent && console.warn("CMP SFBX AppConsent : Google tags are loaded before CMP"),
            this.configuration = function(e) {
                const t = O()
                  , n = Object.assign({}, T, e);
                var r;
                return n.callbacks = Object.assign({}, T.callbacks, n.callbacks),
                n.url = "/" !== (r = n.url).slice(-1) ? r : r.slice(0, -1),
                t.ac_cmd && t.ac_cmd === l.uK.DEBUG && (n.debug = !0),
                void 0 === n.lazy && (n.lazy = !0),
                n
            }(e),
            (0,
            d.y)(this.configuration.debug),
            D("handleInit call"),
            D("CMP configuration", {
                ...this.configuration
            }),
            this.configuration.baseUrl && (i.p = this.configuration.baseUrl + "/");
            let t = null;
            const n = V();
            if (this.configuration.uuid) {
                const e = P(this.configuration.uuid);
                t = e.substring(0, 8) + "-" + e.substring(8, 12) + "-" + e.substring(12, 16) + "-" + e.substring(16, 20) + "-" + e.substring(20, 32),
                D("Force UUID to: " + t)
            } else
                n && (t = n);
            this.api = new this.Api({
                appKey: this.configuration.appKey,
                url: this.configuration.url,
                contextForDynamicCMP: this.configuration.contextForDynamicCMP,
                defaultUuid: t
            });
            const r = !!this.configuration.amp;
            r && ((0,
            f.W)(!0),
            this.configuration.storage && D("Cannot use storage with AMP"));
            let o = null
              , s = null;
            if (this.configuration.language && (this.lang = this.configuration.language),
            this.configuration.storage && !r) {
                this.storage || (this.storage = new this.Storage);
                const n = this.storage.get();
                if (n && (D("Recreating store from storage"),
                o = this.createACStore(n),
                t && t !== _.Tp.uuid(o.getState()) && (D(`UUID mismatch: configuration  != store ${_.Tp.uuid(o.getState())}`),
                o = null),
                o && this.isNeedHelloToBeCalledWithStore(e, o)))
                    try {
                        s = this.isNeedCompleteHello(o) ? await this.api.hello(this.lang) : await this.api.hello(this.lang, _.Tp.uuid(o.getState()), _.Tp.cmp_hash(o.getState()), _.Tp.cmp_hash_version(o.getState()), o.getState().client.externalIds),
                        s.vendorlist && s.configuration && (D("Refreshing store from API"),
                        o = this.createACStore()),
                        !s.vendorlist && o.getState().consentstring && s.consent && s.consent.iab_cs !== o.getState().consentstring && (s = await this.api.hello(this.lang)),
                        o.dispatch(_.o1.hello(s, this.lang, Date.now())),
                        F(o, s),
                        s.floating_extra_id && s.floating_version && o.dispatch(_.o1.setFloatingPurposes(s)),
                        s.consent_floating_extra_purpose && o.dispatch(_.o1.setFloatingPurposesConsent(s.consent_floating_extra_purpose)),
                        this.updateStateInStorage(o)
                    } catch (e) {
                        D(new Error("The collector doesn't answer the /hello call"))
                    }
            }
            if (o || this.configuration.forceStatic || (s = await this.api.hello(this.lang),
            D("Creating store from API"),
            o = this.createACStore(),
            o.dispatch(_.o1.hello(s, this.lang, Date.now())),
            F(o, s),
            this.updateStateInStorage(o)),
            !o && this.configuration.static) {
                const e = {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                }
                  , t = await fetch(this.configuration.static, e);
                if (t.ok) {
                    const e = await t.json();
                    D("Creating store from static"),
                    o = this.createACStore(),
                    o.dispatch(_.o1.hello(c.ac.HelloReply.fromObject(e), this.lang, Date.now()))
                }
            }
            if (this.store = o,
            D("Start consent-listener"),
            x(this.configuration, this.store),
            !this.store)
                throw this.fail(),
                new Error("Cannot instantiate store");
            if (await this.saveCodeCountryFromReply(s),
            this.actionsAfterStoreSet(),
            await this.computeGdprApplies(s),
            !this.gdprApplies)
                return;
            this.configuration.i18n && this.store.dispatch(_.o1.i18n(this.configuration.i18n)),
            this.configuration.debugI18n && (D("Wiping"),
            this.store.dispatch(_.o1.wipe())),
            this.configuration.global && this.store.dispatch(_.o1.mode(!1));
            let a = !1;
            const u = () => {
                const e = o.getState();
                if (_.Tp.isXchange(e) && _.Tp.isAllowAll(e) && !a) {
                    a = !0,
                    this.api.ship(_.Tp.uuid(e), window.location.href);
                    const t = _.Tp.customJs(e);
                    "string" == typeof t && "" !== t && ((0,
                    v.w3)("innerHtml", t, D),
                    D("xchange js injection"))
                }
            }
            ;
            if (this.store.getState().consentstring && (this.update(this.store.getState().consentstring, !1),
            u()),
            this.configuration.privacyWidget && Object.keys(this.configuration.privacyWidget).length > 0) {
                D("Creating privacy widget");
                const e = {
                    color: "clear",
                    text: "Privacy center",
                    ...this.configuration.privacyWidget
                }
                  , t = !e.target;
                e.target = e.target || document.body,
                e.position = e.position || "bottomRight";
                const n = {
                    ...e,
                    floating: t
                };
                delete n.target,
                t && !this.store.getState().consentstring ? m(this.store, (e => !!e.consentstring), (t => {
                    t && this.uiProvider().then(( ({widget: t}) => {
                        t && t.mount(o, e.target, n)
                    }
                    ))
                }
                )) : this.uiProvider().then(( ({widget: t}) => {
                    t.mount(o, e.target, n)
                }
                ))
            }
            m(this.store, (e => e.consentstringUpdatedAt), (async () => {
                const e = this.store.getState().consentstring;
                if (D("Consentstring set", e),
                e) {
                    if (this.update(e, !1),
                    u(),
                    this.configuration.global) {
                        (new Image).src = "https://appconsent.mgr.consensu.org/save?token="
                    }
                    const t = e => e.consents.consentables.find((e => 1 === e.iab_id && e.type === l.Yo.PURPOSE))
                      , n = (e, t) => {
                        if (e === l.PI.ALLOWED && t === l.PI.DISALLOWED) {
                            const e = this.store.getState();
                            if (e.ui.configuration.enable_remove_cookies_on_withdrawal_consent) {
                                const t = e.ui.configuration.keep_cookies_list_on_withdrawal_consent;
                                let n = [];
                                t && (n = t.split(",").map((e => e.trim()))),
                                function(e=[]) {
                                    const t = e.map((e => new RegExp(e)))
                                      , n = document.cookie.split(";");
                                    for (let e = 0; e < n.length; e++) {
                                        const [r] = n[e].split("=")
                                          , o = r.trim();
                                        t.some((e => e.test(o))) || (document.cookie = `${o}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,
                                        document.cookie = `${o}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`)
                                    }
                                }(n)
                            }
                            this.store.dispatch(_.o1.track((0,
                            l.Xp)().WITHDRAW_CONSENT))
                        }
                        e === l.PI.DISALLOWED && t === l.PI.ALLOWED && this.store.dispatch(_.o1.track((0,
                        l.Xp)().REACQUIRE_CONSENT))
                    }
                      , r = t(this.store.getState())
                      , o = !!this.storage && t(this.storage.get());
                    o && r && n(o.status, r.status),
                    this.configuration.previewMode || await this.api.save(this.store.getState(), e).then(( () => {
                        this.callbackAfterSave(this.store)
                    }
                    )).catch(( () => {
                        this.callbackAfterSaveFailed(this.store)
                    }
                    ))
                }
            }
            )),
            m(this.store, (e => 0 !== e.ui.scenes.length), (e => {
                this.uiProvider().then(( ({ui: t}) => {
                    if (e) {
                        const e = t.mount(this.store, this.DOMTarget || document.body, {
                            api: this.api,
                            uiConfig: this.uiConfig
                        });
                        this.uiConfig.updateUI && this.uiConfig.updateUI(e),
                        this.initIAB(),
                        this.api.display(_.Tp.uuid(this.store.getState()))
                    } else
                        t.unmount(),
                        this.uiConfig.updateUI && this.uiConfig.updateUI(null)
                }
                ))
            }
            )),
            m(this.store, (e => e.settings.adcDetected), ( () => {
                this.updateStateInStorage(this.store)
            }
            )),
            N(this.store, this.configuration.optidigital),
            (0,
            A.a)(this.configuration, this.store, this.api);
            var p = O();
            return p.ac_cmd && (D("URL Command found:" + p.ac_cmd),
            window.__tcfapi(p.ac_cmd, 2, (function() {
                D("URL Command returned:" + p.ac_cmd)
            }
            ), p)),
            this.store.getState()
        }
        async initIAB() {
            const e = this.store.getState();
            if (e.consentstring)
                return void this.update(e.consentstring, !0);
            const t = b({
                ...e,
                consents: {
                    ...e.consents,
                    consentables: [],
                    vendors: []
                }
            }, new Date);
            this.update(t, !0)
        }
        update(e, t) {
            setTimeout(( () => {
                U(`update cs(${!!e}) mode()`),
                this.cmp.update(e, t)
            }
            ), 0)
        }
        async show(e={}) {
            if (!this.gdprApplies)
                return void D("The show method has been stopped, as GDPR is not applied");
            if (!this.store)
                return void this.retryShow(e);
            const t = O();
            if (t.ac_cmd && t.ac_cmd === l.uK.NO_SHOW)
                return;
            const n = function(e=[]) {
                const t = e.map((e => new RegExp(e)))
                  , n = window.location.href;
                return t.some((e => e.test(n)))
            }(this.configuration.excludedUrlsForDisplay || e.hideRegexp || []);
            if (n)
                return void D("The show method was ignored because the URL matched a URL exclusion.");
            if (this.configuration.amp) {
                this.configuration.amp.promptTrigger;
                return D("amp mode: "),
                void this.store.dispatch(_.o1.show(l.UN.BANNER))
            }
            const r = this.store.getState();
            if (e.lazy && r.consentstring)
                return;
            const o = {};
            "privacy" === e.jumpAt && (o.fromPrivacyWidget = !0,
            this.store.dispatch(_.o1.copyConsents(r)));
            if (this.checkBrowserLangHasChanged()) {
                D("Privacy widget : The browser language has changed, /hello is called and the store is updated."),
                this.lang = (0,
                p.X)();
                const e = await this.api.hello(this.lang);
                this.store.dispatch(_.o1.hello(e, this.lang, Date.now()))
            }
            this.store.dispatch(_.o1.setConsentProgrammatically(!1)),
            this.store.dispatch(_.o1.show(e.jumpAt, o)),
            this.store.dispatch(_.o1.track((0,
            l.Xp)().DISPLAY_CMP))
        }
        async noShow(e={}) {
            await this.fakedeny(e),
            this.gdprApplies ? this.store ? this.store.dispatch(_.o1.hide()) : D("The noShow command cannot be used because the init was not done") : D("The noShow command cannot be used because rgpd is not applied ")
        }
        async accept(e={}) {
            this.configuration.previewMode || (this.gdprApplies ? this.store ? (this.store.dispatch(_.o1.track((0,
            l.Xp)().CALL_SETTER_ACCEPT)),
            null === this.store.getState().consentstring || e.force ? (this.store.dispatch(_.o1.allowAll()),
            this.store.dispatch(_.o1.setConsentProgrammatically()),
            this.store.dispatch(_.o1.save()),
            this.store.dispatch(_.o1.hide())) : this.store.dispatch(_.o1.hide())) : D("The accept command cannot be used because the init was not done") : D("The accept command cannot be used because rgpd is not applied "))
        }
        async fakedeny(e=!1) {
            if (!this.gdprApplies)
                return void D("The fakedeny command cannot be used because rgpd is not applied ");
            if (!this.store)
                return void D("The fakedeny command cannot be used because the init was not done");
            const t = this.store.getState();
            this.store.dispatch(_.o1.track((0,
            l.Xp)().CALL_SETTER_FAKE_DENY)),
            this.store.dispatch(_.o1.setConsentProgrammatically());
            const n = e => e.map((e => ({
                ...e,
                status: l.PI.DISALLOWED,
                legintStatus: l.PI.ALLOWED
            })))
              , r = b({
                ...t,
                consents: {
                    ...t.consents,
                    consentables: !0 === e ? n(t.consents.consentables) : [],
                    vendors: !0 === e ? n(t.consents.vendors) : []
                }
            }, new Date);
            this.update(r, !1)
        }
        async deny() {
            this.configuration.previewMode || (this.gdprApplies ? this.store ? (this.store.dispatch(_.o1.track((0,
            l.Xp)().CALL_SETTER_DENY)),
            this.store.dispatch(_.o1.denyAll()),
            this.store.dispatch(_.o1.setConsentProgrammatically()),
            this.store.dispatch(_.o1.save()),
            this.store.dispatch(_.o1.hide())) : D("The deny command cannot be used because the init was not done") : D("The deny command cannot be used because rgpd is not applied "))
        }
        async updateExtraPurpose(e) {
            this.gdprApplies ? this.store ? (this.store.dispatch(_.o1.setExtraConsent(e.extraPurposeId, e.status)),
            this.store.dispatch(_.o1.save())) : D("The updateExtraPurpose command cannot be used because the init was not done") : D("The updateExtraPurpose command cannot be used because rgpd is not applied ")
        }
        async checkForUpdate(e=( () => {}
        ), t=!1) {
            if (!this.gdprApplies)
                return void D("The checkForUpdate command has been skipped because rgpd is not applied");
            if (!this.store)
                return D("The checkForUpdate command cannot be used because the init was not done"),
                !1;
            const n = this.store.getState();
            let r = !1;
            if (t || !n.consentstring || _.Tp.helloNeedsToBeCalled(this.store.getState())) {
                const e = await this.api.hello(this.lang, _.Tp.uuid(n), _.Tp.cmp_hash(n), _.Tp.cmp_hash_version(n), n.client.externalIds);
                r = !e.consent || !e.consent.cmp_hash || M(e),
                r || (this.store.dispatch(_.o1.updateHelloLastDate()),
                this.updateStateInStorage(this.store))
            }
            return e(r),
            r
        }
        async setExternalIds(e) {
            this.gdprApplies ? this.store ? (this.store.dispatch(_.o1.setExternalIds(e)),
            this.updateStateInStorage(this.store)) : console.warn("The setExternalIds command cannot be performed because the init was not done") : D("The setExternalIds command cannot be performed because rgpd is not applied")
        }
        async saveExternalIds(e=( () => {}
        ), t=( () => {}
        )) {
            if (!this.gdprApplies)
                return void D("The saveExternalIds command has been skipped because rgpd is not applied");
            if (!this.store)
                return void console.warn("The saveExternalIds command cannot be performed because the init was not done");
            const n = this.store.getState();
            try {
                await this.api.saveExternalIds(_.Tp.uuid(n), n.client.externalIds),
                e()
            } catch (e) {
                t(e)
            }
        }
        async getExternalIds() {
            return this.store.getState().client.externalIds || {}
        }
        async saveFloatingPurposes(e, t=( () => {}
        ), n=( () => {}
        )) {
            const r = this.store.getState();
            try {
                const n = e => r.client.floatingPurposes.find((t => t.id === e))
                  , o = Object.entries(e).filter(( ([e]) => {
                    const t = !!n(e);
                    return t || console.error("The floating purpose  was not found on notice configuration. Please add this floating purpose to your notice on the configuration interface."),
                    t
                }
                )).map(( ([e,t]) => ({
                    extra_id: e,
                    version: n(e).version,
                    type: t ? l.BH.ACCEPT : l.BH.DENY,
                    given_at: (0,
                    h.l)()
                })));
                if (!o.length)
                    throw new Error("No floating purpose was found in the configuration. Save cancelled.  Please add a floating purpose to your notice on the configuration interface.");
                await this.api.saveFloatingPurpose(_.Tp.uuid(r), r.client.externalIds, o[0]),
                this.store.dispatch(_.o1.setFloatingPurposesConsent(o[0])),
                this.updateStateInStorage(this.store),
                t()
            } catch (e) {
                console.error("Error save floating purpose", e),
                n(e)
            }
        }
        async isFloatingNeedUpdate(e, t) {
            const {floatingPurpose: n, consent: r} = await this.selectFloatingPurposesData(t);
            if (n && r) {
                const t = n.version > r.version;
                return e(t),
                t
            }
            return e(!1),
            !1
        }
        async extraFloatingAllowed(e, t) {
            const {consent: n} = await this.selectFloatingPurposesData(t);
            if (n) {
                const t = n.type === l.PI.ALLOWED;
                return e(t),
                t
            }
            return e(!1),
            !1
        }
        retryShow(e) {
            this.retryShowMaxAttempt ? setTimeout((async () => {
                --this.retryShowMaxAttempt,
                await this.show(e)
            }
            ), 500) : D("The retryShow function was stopped after 10 sec.")
        }
        async selectFloatingPurposesData(e) {
            const t = this.store.getState()
              , n = (r = e,
            t.client.floatingPurposes.find((e => e.id === r)));
            var r;
            const o = n ? (e => t.client.floatingPurposesConsent.find((t => t.extra_id === e)))(n.id) : null;
            return {
                floatingPurpose: n,
                consent: o
            }
        }
        isNeedHelloToBeCalledWithStore(e, t) {
            if (!t)
                return !1;
            if (e.forceRefresh)
                return !0;
            t.getState().settings && void 0 !== t.getState().settings.lastStateGdprApplies || (t.getState().settings.lastStateGdprApplies = !0);
            const n = !1 === t.getState().settings.lastStateGdprApplies
              , r = n && !this.configuration.forceGDPRApplies && !this.configuration.gdprApplies && _.Tp.helloNeedsToBeCalled(t.getState(), !0)
              , o = n && (this.configuration.forceGDPRApplies || this.configuration.gdprApplies) && (!t.getState().consentstring || _.Tp.helloNeedsToBeCalled(t.getState()))
              , s = !n && (!t.getState().consentstring || _.Tp.helloNeedsToBeCalled(t.getState()));
            return D("Is need to call reply with store:\n    isNeedHelloToBeCalledLastStateGdprAppliesFalse : ,\n    isNeedHelloToBeCalledLastStateGdprAppliesFalseForced: ,\n    isNeedHelloToBeCalled: "),
            r || o || s
        }
        isNeedCompleteHello(e) {
            const t = e.getState()
              , n = !t.consents.dataCategories
              , r = this.lang !== t.i18n.selectedLanguage && this.lang !== t.i18n.defaultLanguage
              , o = n || r;
            return o && D("Is need to call hello with complete data :\n      hasNoDataCategories: \n      isLanguageChange: \n      "),
            o
        }
        checkArrayCountriesIsValid(e, t) {
            if (e && (!Array.isArray(e) || 0 === e.length))
                throw new Error("[AppConsent]  should be a non-empty array of ISO country codes.")
        }
        actionsAfterStoreSet() {
            this.completeConfigurationWithStore(),
            this.computeEnableGCM(),
            this.configureGcmProperties(),
            this.setSfbxCookie(this.store)
        }
        saveCodeCountryFromReply(e) {
            if (e && "country"in e) {
                const {code: t} = e.country;
                t && this.store.dispatch(_.o1.setLastCountryCode(t))
            }
        }
        computeGdprApplies(e) {
            if (this.configuration.forceGDPRApplies)
                return this.gdprApplies = !0,
                this.store.dispatch(_.o1.setLastStateGDPRApplies(!0)),
                void this.updateStateInStorage(this.store);
            if ("boolean" == typeof this.configuration.gdprApplies)
                this.gdprApplies = this.configuration.gdprApplies;
            else if (e && "country"in e) {
                const {code: t, gdpr: n} = e.country;
                this.gdprApplies = n
            } else {
                e && D("The country property is not present in reply of /hello, we force GDPR apply");
                const t = this.store ? this.store.getState().settings.lastStateGdprApplies : void 0;
                this.gdprApplies = void 0 === t || t
            }
            this.gdprApplies ? this.store.dispatch(_.o1.setLastStateGDPRApplies(!0)) : (D("GDPR does not apply"),
            this.cmp && this.cmp.update(null),
            this.configuration.enableGCM ? this.releaseGCM() : (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0,
            this.store.dispatch(_.o1.setLastStateGDPRApplies(!1))),
            this.updateStateInStorage(this.store)
        }
        computeEnableGCM() {
            if (this.configuration.enableGCM && ((window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1),
            !this.configuration.enableGCM || !this.configuration.countriesExcludedForGCM || !this.configuration.countriesExcludedForGCM.length)
                return;
            const e = this.store.getState().settings.lastCountryCode;
            e && (this.checkArrayCountriesIsValid(this.configuration.countriesExcludedForGCM, "countriesExcludedForGCM"),
            this.configuration.enableGCM = this.configuration.countriesExcludedForGCM.every((t => t.toLowerCase() !== e.toLowerCase())),
            this.configuration.countriesExcludedForGCM.join(","),
            D(`The countriesExcludedForGCM property has been applied to the enableGCM with :\n        enableGCM : ${this.configuration.enableGCM},\n        code: \n        countriesExcludedForGCM : `)),
            this.configuration.enableGCM || this.releaseGCM()
        }
        releaseGCM() {
            "function" == typeof gtag && (this.configuration.googleEnableBasicConsentMode && gtag("consent", "default", {
                analytics_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                functionality_storage: "denied",
                security_storage: "granted",
                personalization_storage: "denied",
                ad_storage: "denied"
            }),
            gtag("consent", "update", {
                analytics_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                functionality_storage: "granted",
                security_storage: "granted",
                personalization_storage: "granted",
                ad_storage: "granted"
            }),
            D("The GCM consent types has been release")),
            (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0
        }
        callbackAfterSave(e) {
            this.updateStateInStorage(e),
            this.doRedirectUrl(e),
            e.dispatch(_.o1.resetEvents())
        }
        callbackAfterSaveFailed(e) {
            this.updateStateInStorage(e),
            this.doRedirectUrl(e),
            e.dispatch(_.o1.resetEvents())
        }
        doRedirectUrl(e) {
            const t = e.getState();
            let n = t.events.slice().pop().name;
            const r = this.configuration.urlRedirect;
            if (k(r))
                return;
            let o = "";
            const s = t.consents.type;
            switch (n !== (0,
            l.Xp)().WITHDRAW_CONSENT && n !== (0,
            l.Xp)().REACQUIRE_CONSENT || (n = t.events.slice()[t.events.length - 2].name),
            n) {
            case (0,
            l.Xp)().denyAll(1):
                const t = r.main && (r.main.denyAll || r.main.deny_all);
                o = t || "";
                break;
            case (0,
            l.Xp)().acceptAll(1):
                const n = r.main && (r.main.acceptAll || r.main.accept_all);
                o = n || "";
                break;
            case (0,
            l.Xp)().SKIP:
                const i = r.main && (r.main.continueWithoutAccepting || r.main.continue_without_accepting);
                o = i || "";
                break;
            case (0,
            l.Xp)().SAVE:
                switch (s) {
                case l.av.DENY_ALL:
                    const e = r.settings && (r.settings.denyAll || r.settings.deny_all);
                    o = e || "";
                    break;
                case l.av.ACCEPT_ALL:
                    const t = r.settings && (r.settings.acceptAll || r.settings.accept_all);
                    o = t || ""
                }
                o && e.dispatch(_.o1.hide())
            }
            "" !== o && (window.location.href = o)
        }
        setConfiguration(e=null) {
            this.configuration = e
        }
        createACStore(e) {
            return (0,
            _.y$)(e, (0,
            d.v)("store"), this.configuration.amp, this.CMP_VERSION, this.configuration.cmpVersionCacheDuration)
        }
        updateStateInStorage(e) {
            this.storage && this.storage.set(e.getState())
        }
        completeConfigurationWithStore() {
            const e = this.store.getState()
              , t = e.ui.configuration;
            this.configuration.enableGCM = t.enable_gcm || this.configuration.enableGCM,
            this.configuration.countriesExcludedForGCM = t.countries_excluded_for_gcm || this.configuration.countriesExcludedForGCM,
            this.configuration.googleEnableAdvertiserConsentMode = !!t.google_enable_advertiser_consent_mode,
            this.configuration.googleEnableBasicConsentMode = !!t.google_enable_basic_consent_mode || this.configuration.googleEnableBasicConsentMode,
            this.configuration.scriptsToInject = e.injector.scripts,
            this.configuration.forceGDPRApplies = t.force_gdpr_applies || this.configuration.forceGDPRApplies,
            this.configuration.privacyWidget = t.privacy_widget || this.configuration.privacyWidget,
            this.configuration.urlRedirect = k(t.url_redirect) ? this.configuration.urlRedirect : t.url_redirect,
            this.configuration.excludedUrlsForDisplay = t.excluded_urls_for_display || this.configuration.excludedUrlsForDisplay,
            this.configuration.enableFirstPartyUserUuid = t.enable_first_party_user_uuid,
            this.configuration.firstPartyUuidCookieDomain = t.first_party_uuid_cookie_domain,
            this.sendBetaConfigurationPropertiesToStore(),
            D("CMP configuration updated", {
                ...this.configuration
            })
        }
        sendBetaConfigurationPropertiesToStore() {
            this.configuration.popIn = ["bottom-left", "bottom-right"].includes(this.configuration.popIn) ? this.configuration.popIn : void 0,
            this.configuration.verticalButtonBottomBannerPosition = ["center", "bottom", "top"].includes(this.configuration.verticalButtonBottomBannerPosition) ? this.configuration.verticalButtonBottomBannerPosition : "center",
            this.configuration.isVerticalButtonBottomBanner = !![!0, !1].includes(this.configuration.isVerticalButtonBottomBanner) && this.configuration.isVerticalButtonBottomBanner,
            this.store.dispatch(_.o1.setUiConfiguration({
                popInMode: this.configuration.popIn,
                verticalButtonBottomBannerPosition: this.configuration.verticalButtonBottomBannerPosition,
                isVerticalButtonBottomBanner: this.configuration.isVerticalButtonBottomBanner
            }))
        }
        configureGcmProperties() {
            const e = this.store.getState().ui.configuration;
            this.configuration.enableGCM && "function" == typeof gtag && (e.gcm_ads_data_redaction && (D(`GCM - Property ads_data_redaction set to ${e.gcm_ads_data_redaction}`),
            gtag("set", "ads_data_redaction", e.gcm_ads_data_redaction)),
            e.gcm_url_passthrough && (D(`GCM - Property gcm_url_passthrough set to ${e.gcm_url_passthrough}`),
            gtag("set", "url_passthrough", e.gcm_url_passthrough)),
            gtag("set", "developer_id.dYTM3Mj", !0))
        }
        async updateStatus(e) {
            const t = this.store.getState();
            if (!t.consentstring)
                return void console.error("[AppConsent] updateStatus method should be invoked only when there is a valid consent string");
            const n = e => "string" == typeof e
              , r = (e, t) => e.consents.consentables.find((e => e[n(t.id) ? "extra_id" : "iab_id"] === t.id && e.type === l.WV[t.t]))
              , o = (e, t) => e.consents.vendors.find((e => e[n(t.id) ? "extra_id" : "iab_id"] === t.id))
              , s = e => !0 === e ? l.PI.ALLOWED : l.PI.DISALLOWED;
            function i(e, t) {
                return e.reduce((function(e, n) {
                    return t(n) ? e[0].push(n) : e[1].push(n),
                    e
                }
                ), [[], []])
            }
            const [a,c] = i(e, (e => {
                return "boolean" == typeof e.status && ((n = e.t) && Object.values(l.b$).includes(n)) && ("string" == typeof (t = e.id) || "number" == typeof t);
                var t, n
            }
            ))
              , u = a.filter((e => {
                return t = e.t,
                [l.b$.purpose, l.b$.extraPurpose, l.b$.specialFeature].includes(t);
                var t
            }
            ))
              , [p,d] = i(u, (e => r(t, e)));
            p.forEach((e => {
                this.store.dispatch(_.o1.setConsent(r(t, e).id, s(e.status)))
            }
            ));
            const h = a.filter((e => {
                return t = e.t,
                [l.b$.iabVendor, l.b$.extraVendor].includes(t);
                var t
            }
            ))
              , [f,g] = i(h, (e => o(t, e)));
            f.forEach((e => {
                this.store.dispatch(_.o1.setVendor(o(t, e).id, s(e.status)))
            }
            )),
            c.forEach((e => console.error(`[AppConsent] An item passed to updateStatus method with invalid parameters: id = ${e.id}, t = ${e.t}, status = ${e.status}.`))),
            d.concat(g).forEach((e => console.error(`[AppConsent] No item found for provided parameters in updateStatus method: id = ${e.id}, t = ${e.t}`)));
            const y = p.every((e => e.t === l.b$.purpose));
            p.length && y && this.trackUpdateStatusEvents(this.store),
            p.concat(f).length > 0 && this.store.dispatch(_.o1.save())
        }
        trackUpdateStatusEvents(e) {
            const t = e.getState().consents.consentables.filter((e => e.type === l.Yo.PURPOSE));
            if (!t.length)
                return;
            const n = t.filter((e => e.status === l.PI.ALLOWED));
            if (t.length === n.length)
                return void e.dispatch(_.o1.track((0,
                l.Xp)().CALL_SETTER_UPDATE_ACCEPTED));
            if (!n.length)
                return void e.dispatch(_.o1.track((0,
                l.Xp)().CALL_SETTER_UPDATE_DENIED));
            const r = [1, 2, 3, 4, 8];
            n.filter((e => r.includes(e.iab_id))).length === r.length && e.dispatch(_.o1.track((0,
            l.Xp)().CALL_SETTER_UPDATE_P12348))
        }
        checkBrowserLangHasChanged() {
            if (this.configuration.language)
                return !1;
            const e = (0,
            p.X)();
            return this.lang !== e
        }
        setSfbxCookie(e) {
            if (this.configuration.enableFirstPartyUserUuid)
                !function(e, t="") {
                    const n = new Date;
                    n.setTime(n.getTime() + 31536e6);
                    const r = "expires=" + n.toUTCString();
                    let o = `${l.zh}=${e};${r};path=/`;
                    t && (o += `;domain=${t}`),
                    document.cookie = o
                }(_.Tp.uuid(e.getState()), this.configuration.firstPartyUuidCookieDomain);
            else {
                V() && (document.cookie = `${l.zh}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`)
            }
        }
    }
    const G = (0,
    d.v)("api")
      , {ALLOWED: H, DISALLOWED: q} = l.PI;
    class J {
        constructor({appKey: e, url: t, defaultUuid: n, contextForDynamicCMP: r}) {
            t || (t = l.Ez),
            G(`Setting url: ${t}`),
            this.appKey = e,
            this.url = t,
            this.defaultUuid = n,
            this.contextForDynamicCMP = r,
            this.counter = 0
        }
        hello(e, t, n, r, o) {
            t || (t = this.defaultUuid);
            const s = {
                app_key: this.appKey,
                language: e,
                uuid: t
            };
            n && (s.cmp_hash = n),
            r && (s.cmp_hash_version = r),
            o && (s.external_ids = o);
            const i = c.ac.HelloRequest.create(s)
              , a = {
                ...C(this.contextForDynamicCMP)
            };
            return this._fetch("/hello", i, c.ac.HelloRequest, c.ac.HelloReply, a)
        }
        save({vendorlist: e, consents: t, events: n, client: r}, o) {
            const s = c.ac.SaveRequest.create({
                app_key: this.appKey,
                consent: c.ac.Consent.create({
                    iab_cs: o,
                    special_features: [],
                    purposes: t.consentables.filter((e => e.status === H)).map((e => e.id)),
                    purposes_legint: t.consentables.filter((e => e.legintStatus !== q)).map((e => e.id)),
                    vendors: t.vendors.filter((e => e.status === H)).map((e => e.id)),
                    vendors_legint: t.vendors.filter((e => e.legintStatus !== q)).map((e => e.id)),
                    cmp_version: this.CMP_VERSION,
                    uuid: t.uuid,
                    type: t.type,
                    cmp_hash: e.cmp_hash,
                    cmp_hash_version: e.cmp_hash_version,
                    external_ids: r.externalIds
                }),
                uuid: t.uuid,
                events: n
            })
              , i = {
                ...C(this.contextForDynamicCMP)
            };
            return this._fetch("/save", s, c.ac.SaveRequest, c.ac.SaveReply, i)
        }
        async display(e) {
            e || (e = this.defaultUuid);
            const t = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Client-Origin": E(window.location.href, {
                        length: 128
                    }),
                    "X-Original-Referer": document.referrer || ""
                },
                credentials: "include"
            }
              , n = `${this.url}/t2.gif?a=${this.appKey}&b=${e}&n=display`;
            await fetch(n, t)
        }
        saveExternalIds(e, t={}) {
            const n = c.ac.SaveExternalRequest.create({
                app_key: this.appKey,
                uuid: e || this.defaultUuid,
                external_ids: t,
                given_at: (0,
                h.l)()
            });
            return this._fetch("/save-external", n, c.ac.SaveExternalRequest, c.ac.SaveExternalReply)
        }
        saveFloatingPurpose(e, t={}, n) {
            const r = c.ac.SaveFloatingExtraPurposeRequest.create({
                app_key: this.appKey,
                uuid: e || this.defaultUuid,
                consent_floating_extra_purpose: c.ac.ConsentFloatingExtraPurpose.create({
                    app_key: this.appKey,
                    uuid: e || this.defaultUuid,
                    given_at: n.given_at,
                    external_ids: t,
                    extra_id: n.extra_id,
                    version: n.version,
                    type: n.type
                })
            });
            return this._fetch("/save-floating-ep", r, c.ac.SaveFloatingExtraPurposeRequest, c.ac.SaveFloatingExtraPurposeReply)
        }
        async ship(e, t) {
            e || (e = this.defaultUuid);
            const n = c.ac.ShipRequest.create({
                app_key: this.appKey,
                uuid: e,
                data: {
                    url: t
                }
            });
            return this._fetch("/ship2", n, c.ac.ShipRequest, c.ac.ShipReply)
        }
        async _fetch(e, t, n, r, o={}) {
            const s = this.counter++;
            G(`${s} request ${e}`, t);
            const i = n.toObject(t)
              , a = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Client-Origin": E(window.location.href, {
                        length: 128
                    }),
                    "X-Original-Referer": document.referrer || "",
                    ...o
                },
                credentials: "include",
                body: JSON.stringify(i)
            };
            let c = await fetch(this.url + e, a);
            if (!c.ok)
                throw new Error("Response not 2xx");
            let l = await c.json();
            return G(`${s} response`, l),
            l.consent && 0 === Object.keys(l.consent).length && delete l.consent,
            r.fromObject(l)
        }
    }
    var $, W, X, z;
    !function(e) {
        e.PING = "ping",
        e.GET_TC_DATA = "getTCData",
        e.GET_IN_APP_TC_DATA = "getInAppTCData",
        e.GET_VENDOR_LIST = "getVendorList",
        e.ADD_EVENT_LISTENER = "addEventListener",
        e.REMOVE_EVENT_LISTENER = "removeEventListener"
    }($ || ($ = {})),
    function(e) {
        e.STUB = "stub",
        e.LOADING = "loading",
        e.LOADED = "loaded",
        e.ERROR = "error"
    }(W || (W = {})),
    function(e) {
        e.VISIBLE = "visible",
        e.HIDDEN = "hidden",
        e.DISABLED = "disabled"
    }(X || (X = {})),
    function(e) {
        e.TC_LOADED = "tcloaded",
        e.CMP_UI_SHOWN = "cmpuishown",
        e.USER_ACTION_COMPLETE = "useractioncomplete"
    }(z || (z = {}));
    class Y {
        listenerId;
        callback;
        next;
        param;
        success = !0;
        constructor(e, t, n, r) {
            Object.assign(this, {
                callback: e,
                listenerId: n,
                param: t,
                next: r
            });
            try {
                this.respond()
            } catch (e) {
                this.invokeCallback(null)
            }
        }
        invokeCallback(e) {
            const t = null !== e;
            "function" == typeof this.next ? this.callback(this.next, e, t) : this.callback(e, t)
        }
    }
    class K extends Y {
        respond() {
            this.throwIfParamInvalid(),
            this.invokeCallback(new ne(this.param,this.listenerId))
        }
        throwIfParamInvalid() {
            if (!(void 0 === this.param || Array.isArray(this.param) && this.param.every(Number.isInteger)))
                throw new Error("Invalid Parameter")
        }
    }
    class Q {
        eventQueue = new Map;
        queueNumber = 0;
        add(e) {
            return this.eventQueue.set(this.queueNumber, e),
            this.queueNumber++
        }
        remove(e) {
            return this.eventQueue.delete(e)
        }
        exec() {
            this.eventQueue.forEach(( (e, t) => {
                new K(e.callback,e.param,t,e.next)
            }
            ))
        }
        clear() {
            this.queueNumber = 0,
            this.eventQueue.clear()
        }
        get size() {
            return this.eventQueue.size
        }
    }
    class Z {
        static apiVersion = "2";
        static tcfPolicyVersion;
        static eventQueue = new Q;
        static cmpStatus = W.LOADING;
        static disabled = !1;
        static displayStatus = X.HIDDEN;
        static cmpId;
        static cmpVersion;
        static eventStatus;
        static gdprApplies;
        static tcModel;
        static tcString;
        static reset() {
            delete this.cmpId,
            delete this.cmpVersion,
            delete this.eventStatus,
            delete this.gdprApplies,
            delete this.tcModel,
            delete this.tcString,
            delete this.tcfPolicyVersion,
            this.cmpStatus = W.LOADING,
            this.disabled = !1,
            this.displayStatus = X.HIDDEN,
            this.eventQueue.clear()
        }
    }
    class ee {
        cmpId = Z.cmpId;
        cmpVersion = Z.cmpVersion;
        gdprApplies = Z.gdprApplies;
        tcfPolicyVersion = Z.tcfPolicyVersion
    }
    class te extends ee {
        cmpStatus = W.ERROR
    }
    class ne extends ee {
        tcString;
        listenerId;
        eventStatus;
        cmpStatus;
        isServiceSpecific;
        useNonStandardTexts;
        publisherCC;
        purposeOneTreatment;
        outOfBand;
        purpose;
        vendor;
        specialFeatureOptins;
        publisher;
        constructor(e, t) {
            if (super(),
            this.eventStatus = Z.eventStatus,
            this.cmpStatus = Z.cmpStatus,
            this.listenerId = t,
            Z.gdprApplies) {
                const t = Z.tcModel;
                this.tcString = Z.tcString,
                this.isServiceSpecific = t.isServiceSpecific,
                this.useNonStandardTexts = t.useNonStandardTexts,
                this.purposeOneTreatment = t.purposeOneTreatment,
                this.publisherCC = t.publisherCountryCode,
                !1 === this.isServiceSpecific && (this.outOfBand = {
                    allowedVendors: this.createVectorField(t.vendorsAllowed, e),
                    disclosedVendors: this.createVectorField(t.vendorsDisclosed, e)
                }),
                this.purpose = {
                    consents: this.createVectorField(t.purposeConsents),
                    legitimateInterests: this.createVectorField(t.purposeLegitimateInterests)
                },
                this.vendor = {
                    consents: this.createVectorField(t.vendorConsents, e),
                    legitimateInterests: this.createVectorField(t.vendorLegitimateInterests, e),
                    disclosedVendors: this.createVectorField(t.vendorsDisclosed, e)
                },
                this.specialFeatureOptins = this.createVectorField(t.specialFeatureOptins),
                this.publisher = {
                    consents: this.createVectorField(t.publisherConsents),
                    legitimateInterests: this.createVectorField(t.publisherLegitimateInterests),
                    customPurpose: {
                        consents: this.createVectorField(t.publisherCustomConsents),
                        legitimateInterests: this.createVectorField(t.publisherCustomLegitimateInterests)
                    },
                    restrictions: this.createRestrictions(t.publisherRestrictions)
                }
            }
        }
        createRestrictions(e) {
            const t = {};
            if (e.numRestrictions > 0) {
                const n = e.getMaxVendorId();
                for (let r = 1; r <= n; r++) {
                    const n = r.toString();
                    e.getRestrictions(r).forEach((e => {
                        const r = e.purposeId.toString();
                        t[r] || (t[r] = {}),
                        t[r][n] = e.restrictionType
                    }
                    ))
                }
            }
            return t
        }
        createVectorField(e, t) {
            return t ? t.reduce(( (t, n) => (t[String(n)] = e.has(Number(n)),
            t)), {}) : [...e].reduce(( (e, t) => (e[t[0].toString(10)] = t[1],
            e)), {})
        }
    }
    class re extends ne {
        constructor(e) {
            super(e),
            delete this.outOfBand
        }
        createVectorField(e) {
            return [...e].reduce(( (e, t) => e += t[1] ? "1" : "0"), "")
        }
        createRestrictions(e) {
            const t = {};
            if (e.numRestrictions > 0) {
                const n = e.getMaxVendorId();
                e.getRestrictions().forEach((e => {
                    t[e.purposeId.toString()] = "_".repeat(n)
                }
                ));
                for (let r = 0; r < n; r++) {
                    const n = r + 1;
                    e.getRestrictions(n).forEach((e => {
                        const n = e.restrictionType.toString()
                          , o = e.purposeId.toString()
                          , s = t[o].substr(0, r)
                          , i = t[o].substr(r + 1);
                        t[o] = s + n + i
                    }
                    ))
                }
            }
            return t
        }
    }
    class oe extends ee {
        cmpLoaded = !0;
        cmpStatus = Z.cmpStatus;
        displayStatus = Z.displayStatus;
        apiVersion = String(Z.apiVersion);
        gvlVersion;
        constructor() {
            super(),
            Z.tcModel && Z.tcModel.vendorListVersion && (this.gvlVersion = +Z.tcModel.vendorListVersion)
        }
    }
    class se extends Y {
        respond() {
            this.invokeCallback(new oe)
        }
    }
    class ie extends K {
        respond() {
            this.throwIfParamInvalid(),
            this.invokeCallback(new re(this.param))
        }
    }
    class ae extends Y {
        respond() {
            const e = Z.tcModel
              , t = e.vendorListVersion;
            let n;
            void 0 === this.param && (this.param = t),
            n = this.param === t && e.gvl ? e.gvl : new g.aI(this.param),
            n.readyPromise.then(( () => {
                this.invokeCallback(n.getJson())
            }
            ))
        }
    }
    class ce extends K {
        respond() {
            this.listenerId = Z.eventQueue.add({
                callback: this.callback,
                param: this.param,
                next: this.next
            }),
            super.respond()
        }
    }
    class le extends Y {
        respond() {
            this.invokeCallback(Z.eventQueue.remove(this.param))
        }
    }
    class ue {
        static[$.PING] = se;
        static[$.GET_TC_DATA] = K;
        static[$.GET_IN_APP_TC_DATA] = ie;
        static[$.GET_VENDOR_LIST] = ae;
        static[$.ADD_EVENT_LISTENER] = ce;
        static[$.REMOVE_EVENT_LISTENER] = le
    }
    class pe {
        static set_ = new Set([0, 2, void 0, null]);
        static has(e) {
            return "string" == typeof e && (e = Number(e)),
            this.set_.has(e)
        }
    }
    class de {
        callQueue;
        customCommands;
        constructor(e) {
            if (e) {
                let t = $.ADD_EVENT_LISTENER;
                if (e?.[t])
                    throw new Error(`Built-In Custom Commmand for ${t} not allowed: Use ${$.GET_TC_DATA} instead`);
                if (t = $.REMOVE_EVENT_LISTENER,
                e?.[t])
                    throw new Error(`Built-In Custom Commmand for ${t} not allowed`);
                e?.[$.GET_TC_DATA] && (e[$.ADD_EVENT_LISTENER] = e[$.GET_TC_DATA],
                e[$.REMOVE_EVENT_LISTENER] = e[$.GET_TC_DATA]),
                this.customCommands = e
            }
            try {
                this.callQueue = window.__tcfapi() || []
            } catch (e) {
                this.callQueue = []
            } finally {
                window.__tcfapi = this.apiCall.bind(this),
                this.purgeQueuedCalls()
            }
        }
        apiCall(e, t, n, ...r) {
            if ("string" != typeof e && "function" == typeof n)
                n(null, !1);
            else if (pe.has(t)) {
                if ("function" != typeof n)
                    throw new Error("invalid callback function");
                Z.disabled ? n(new te, !1) : this.isCustomCommand(e) || this.isBuiltInCommand(e) ? this.isCustomCommand(e) && !this.isBuiltInCommand(e) ? this.customCommands[e](n, ...r) : e === $.PING ? this.isCustomCommand(e) ? new ue[e](this.customCommands[e],r[0],null,n) : new ue[e](n,r[0]) : void 0 === Z.tcModel ? this.callQueue.push([e, t, n, ...r]) : this.isCustomCommand(e) && this.isBuiltInCommand(e) ? new ue[e](this.customCommands[e],r[0],null,n) : new ue[e](n,r[0]) : n(null, !1)
            } else
                n(null, !1)
        }
        purgeQueuedCalls() {
            const e = this.callQueue;
            this.callQueue = [],
            e.forEach((e => {
                window.__tcfapi(...e)
            }
            ))
        }
        isCustomCommand(e) {
            return this.customCommands && "function" == typeof this.customCommands[e]
        }
        isBuiltInCommand(e) {
            return void 0 !== ue[e]
        }
    }
    class he {
        callResponder;
        isServiceSpecific;
        numUpdates = 0;
        constructor(e, t, n=!0, r) {
            this.throwIfInvalidInt(e, "cmpId", 2),
            this.throwIfInvalidInt(t, "cmpVersion", 0),
            Z.cmpId = e,
            Z.cmpVersion = t,
            Z.tcfPolicyVersion = 5,
            this.isServiceSpecific = !!n,
            this.callResponder = new de(r)
        }
        throwIfInvalidInt(e, t, n) {
            if (!("number" == typeof e && Number.isInteger(e) && e >= n))
                throw new Error(`Invalid ${t}: ${e}`)
        }
        update(e, t=!1) {
            if (Z.disabled)
                throw new Error("CmpApi Disabled");
            Z.cmpStatus = W.LOADED,
            t ? (Z.displayStatus = X.VISIBLE,
            Z.eventStatus = z.CMP_UI_SHOWN) : void 0 === Z.tcModel ? (Z.displayStatus = X.DISABLED,
            Z.eventStatus = z.TC_LOADED) : (Z.displayStatus = X.HIDDEN,
            Z.eventStatus = z.USER_ACTION_COMPLETE),
            Z.gdprApplies = null !== e,
            Z.gdprApplies ? ("" === e ? (Z.tcModel = new g.jT,
            Z.tcModel.cmpId = Z.cmpId,
            Z.tcModel.cmpVersion = Z.cmpVersion) : Z.tcModel = g.de.decode(e),
            Z.tcModel.isServiceSpecific = this.isServiceSpecific,
            Z.tcfPolicyVersion = Number(Z.tcModel.policyVersion),
            Z.tcString = e) : Z.tcModel = null,
            0 === this.numUpdates ? this.callResponder.purgeQueuedCalls() : Z.eventQueue.exec(),
            this.numUpdates++
        }
        disable() {
            Z.disabled = !0,
            Z.cmpStatus = W.ERROR
        }
    }
    var _e = function() {
        function e() {
            this.key = "appconsent"
        }
        return e.prototype.get = function() {
            var e = localStorage.getItem(this.key);
            return e ? JSON.parse(e) : ""
        }
        ,
        e.prototype.set = function(e) {
            localStorage.setItem(this.key, JSON.stringify(e))
        }
        ,
        e.prototype.delete = function() {
            localStorage.removeItem(this.key)
        }
        ,
        e
    }()
      , fe = i(159)
      , ge = function(e) {
        return new B((0,
        fe.Q)(),he,J,e,_e)
    }((function() {
        return Promise.all([i.e(1284), i.e(1271)]).then(i.bind(i, 1271))
    }
    ));
    appconsent = a
}();
