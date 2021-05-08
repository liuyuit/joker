/*!
 * Pusher JavaScript Library v7.0.3
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Pusher = e() : t.Pusher = e()
}(window, (function () {
    return function (t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(o, r, function (e) {
                    return t[e]
                }.bind(null, r));
            return o
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 2)
    }([
        function (t, e, n) {
            "use strict";
            var o, r = this && this.__extends || (o = function (t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function (t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {
                function t(t) {
                    void 0 === t && (t = "="), this._paddingCharacter = t
                }
                return t.prototype.encodedLength = function (t) {
                    return this._paddingCharacter ? (t + 2) / 3 * 4 | 0 : (8 * t + 5) / 6 | 0
                }, t.prototype.encode = function (t) {
                    for (var e = "", n = 0; n < t.length - 2; n += 3) {
                        var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2];
                        e += this._encodeByte(o >>> 18 & 63), e += this._encodeByte(o >>> 12 & 63), e += this._encodeByte(o >>> 6 & 63), e += this._encodeByte(o >>> 0 & 63)
                    }
                    var r = t.length - n;
                    if (r > 0) {
                        o = t[n] << 16 | (2 === r ? t[n + 1] << 8 : 0);
                        e += this._encodeByte(o >>> 18 & 63), e += this._encodeByte(o >>> 12 & 63), e += 2 === r ? this._encodeByte(o >>> 6 & 63) : this._paddingCharacter || "", e += this._paddingCharacter || ""
                    }
                    return e
                }, t.prototype.maxDecodedLength = function (t) {
                    return this._paddingCharacter ? t / 4 * 3 | 0 : (6 * t + 7) / 8 | 0
                }, t.prototype.decodedLength = function (t) {
                    return this.maxDecodedLength(t.length - this._getPaddingLength(t))
                }, t.prototype.decode = function (t) {
                    if (0 === t.length) return new Uint8Array(0);
                    for (var e = this._getPaddingLength(t), n = t.length - e, o = new Uint8Array(this.maxDecodedLength(n)), r = 0, i = 0, s = 0, c = 0, a = 0, u = 0, h = 0; i < n - 4; i += 4) c = this._decodeChar(t.charCodeAt(i + 0)), a = this._decodeChar(t.charCodeAt(i + 1)), u = this._decodeChar(t.charCodeAt(i + 2)), h = this._decodeChar(t.charCodeAt(i + 3)), o[r++] = c << 2 | a >>> 4, o[r++] = a << 4 | u >>> 2, o[r++] = u << 6 | h, s |= 256 & c, s |= 256 & a, s |= 256 & u, s |= 256 & h;
                    if (i < n - 1 && (c = this._decodeChar(t.charCodeAt(i)), a = this._decodeChar(t.charCodeAt(i + 1)), o[r++] = c << 2 | a >>> 4, s |= 256 & c, s |= 256 & a), i < n - 2 && (u = this._decodeChar(t.charCodeAt(i + 2)), o[r++] = a << 4 | u >>> 2, s |= 256 & u), i < n - 3 && (h = this._decodeChar(t.charCodeAt(i + 3)), o[r++] = u << 6 | h, s |= 256 & h), 0 !== s) throw new Error("Base64Coder: incorrect characters for decoding");
                    return o
                }, t.prototype._encodeByte = function (t) {
                    var e = t;
                    return e += 65, e += 25 - t >>> 8 & 6, e += 51 - t >>> 8 & -75, e += 61 - t >>> 8 & -15, e += 62 - t >>> 8 & 3, String.fromCharCode(e)
                }, t.prototype._decodeChar = function (t) {
                    var e = 256;
                    return e += (42 - t & t - 44) >>> 8 & -256 + t - 43 + 62, e += (46 - t & t - 48) >>> 8 & -256 + t - 47 + 63, e += (47 - t & t - 58) >>> 8 & -256 + t - 48 + 52, e += (64 - t & t - 91) >>> 8 & -256 + t - 65 + 0, e += (96 - t & t - 123) >>> 8 & -256 + t - 97 + 26
                }, t.prototype._getPaddingLength = function (t) {
                    var e = 0;
                    if (this._paddingCharacter) {
                        for (var n = t.length - 1; n >= 0 && t[n] === this._paddingCharacter; n--) e++;
                        if (t.length < 4 || e > 2) throw new Error("Base64Coder: incorrect padding")
                    }
                    return e
                }, t
            }();
            e.Coder = i;
            var s = new i;
            e.encode = function (t) {
                return s.encode(t)
            }, e.decode = function (t) {
                return s.decode(t)
            };
            var c = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.prototype._encodeByte = function (t) {
                    var e = t;
                    return e += 65, e += 25 - t >>> 8 & 6, e += 51 - t >>> 8 & -75, e += 61 - t >>> 8 & -13, e += 62 - t >>> 8 & 49, String.fromCharCode(e)
                }, e.prototype._decodeChar = function (t) {
                    var e = 256;
                    return e += (44 - t & t - 46) >>> 8 & -256 + t - 45 + 62, e += (94 - t & t - 96) >>> 8 & -256 + t - 95 + 63, e += (47 - t & t - 58) >>> 8 & -256 + t - 48 + 52, e += (64 - t & t - 91) >>> 8 & -256 + t - 65 + 0, e += (96 - t & t - 123) >>> 8 & -256 + t - 97 + 26
                }, e
            }(i);
            e.URLSafeCoder = c;
            var a = new c;
            e.encodeURLSafe = function (t) {
                return a.encode(t)
            }, e.decodeURLSafe = function (t) {
                return a.decode(t)
            }, e.encodedLength = function (t) {
                return s.encodedLength(t)
            }, e.maxDecodedLength = function (t) {
                return s.maxDecodedLength(t)
            }, e.decodedLength = function (t) {
                return s.decodedLength(t)
            }
        },
        function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = "utf8: invalid source encoding";

            function r(t) {
                for (var e = 0, n = 0; n < t.length; n++) {
                    var o = t.charCodeAt(n);
                    if (o < 128) e += 1;
                    else if (o < 2048) e += 2;
                    else if (o < 55296) e += 3;
                    else {
                        if (!(o <= 57343)) throw new Error("utf8: invalid string");
                        if (n >= t.length - 1) throw new Error("utf8: invalid string");
                        n++, e += 4
                    }
                }
                return e
            }
            e.encode = function (t) {
                for (var e = new Uint8Array(r(t)), n = 0, o = 0; o < t.length; o++) {
                    var i = t.charCodeAt(o);
                    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = 192 | i >> 6, e[n++] = 128 | 63 & i) : i < 55296 ? (e[n++] = 224 | i >> 12, e[n++] = 128 | i >> 6 & 63, e[n++] = 128 | 63 & i) : (o++, i = (1023 & i) << 10, i |= 1023 & t.charCodeAt(o), i += 65536, e[n++] = 240 | i >> 18, e[n++] = 128 | i >> 12 & 63, e[n++] = 128 | i >> 6 & 63, e[n++] = 128 | 63 & i)
                }
                return e
            }, e.encodedLength = r, e.decode = function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (128 & r) {
                        var i = void 0;
                        if (r < 224) {
                            if (n >= t.length) throw new Error(o);
                            if (128 != (192 & (s = t[++n]))) throw new Error(o);
                            r = (31 & r) << 6 | 63 & s, i = 128
                        } else if (r < 240) {
                            if (n >= t.length - 1) throw new Error(o);
                            var s = t[++n],
                                c = t[++n];
                            if (128 != (192 & s) || 128 != (192 & c)) throw new Error(o);
                            r = (15 & r) << 12 | (63 & s) << 6 | 63 & c, i = 2048
                        } else {
                            if (!(r < 248)) throw new Error(o);
                            if (n >= t.length - 2) throw new Error(o);
                            s = t[++n], c = t[++n];
                            var a = t[++n];
                            if (128 != (192 & s) || 128 != (192 & c) || 128 != (192 & a)) throw new Error(o);
                            r = (15 & r) << 18 | (63 & s) << 12 | (63 & c) << 6 | 63 & a, i = 65536
                        } if (r < i || r >= 55296 && r <= 57343) throw new Error(o);
                        if (r >= 65536) {
                            if (r > 1114111) throw new Error(o);
                            r -= 65536, e.push(String.fromCharCode(55296 | r >> 10)), r = 56320 | 1023 & r
                        }
                    }
                    e.push(String.fromCharCode(r))
                }
                return e.join("")
            }
        },
        function (t, e, n) {
            t.exports = n(3).default
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var o, r = function () {
                    function t(t, e) {
                        this.lastId = 0, this.prefix = t, this.name = e
                    }
                    return t.prototype.create = function (t) {
                        this.lastId++;
                        var e = this.lastId,
                            n = this.prefix + e,
                            o = this.name + "[" + e + "]",
                            r = !1,
                            i = function () {
                                r || (t.apply(null, arguments), r = !0)
                            };
                        return this[e] = i, {
                            number: e,
                            id: n,
                            name: o,
                            callback: i
                        }
                    }, t.prototype.remove = function (t) {
                        delete this[t.number]
                    }, t
                }(),
                i = new r("_pusher_script_", "Pusher.ScriptReceivers"),
                s = {
                    VERSION: "7.0.3",
                    PROTOCOL: 7,
                    wsPort: 80,
                    wssPort: 443,
                    wsPath: "",
                    httpHost: "sockjs.pusher.com",
                    httpPort: 80,
                    httpsPort: 443,
                    httpPath: "/pusher",
                    stats_host: "stats.pusher.com",
                    authEndpoint: "/pusher/auth",
                    authTransport: "ajax",
                    activityTimeout: 12e4,
                    pongTimeout: 3e4,
                    unavailableTimeout: 1e4,
                    cluster: "mt1",
                    cdn_http: "http://js.pusher.com",
                    cdn_https: "https://js.pusher.com",
                    dependency_suffix: ""
                },
                c = function () {
                    function t(t) {
                        this.options = t, this.receivers = t.receivers || i, this.loading = {}
                    }
                    return t.prototype.load = function (t, e, n) {
                        var o = this;
                        if (o.loading[t] && o.loading[t].length > 0) o.loading[t].push(n);
                        else {
                            o.loading[t] = [n];
                            var r = _e.createScriptRequest(o.getPath(t, e)),
                                i = o.receivers.create((function (e) {
                                    if (o.receivers.remove(i), o.loading[t]) {
                                        var n = o.loading[t];
                                        delete o.loading[t];
                                        for (var s = function (t) {
                                            t || r.cleanup()
                                        }, c = 0; c < n.length; c++) n[c](e, s)
                                    }
                                }));
                            r.send(i)
                        }
                    }, t.prototype.getRoot = function (t) {
                        var e = _e.getDocument().location.protocol;
                        return (t && t.useTLS || "https:" === e ? this.options.cdn_https : this.options.cdn_http).replace(/\/*$/, "") + "/" + this.options.version
                    }, t.prototype.getPath = function (t, e) {
                        return this.getRoot(e) + "/" + t + this.options.suffix + ".js"
                    }, t
                }(),
                a = new r("_pusher_dependencies", "Pusher.DependenciesReceivers"),
                u = new c({
                    cdn_http: s.cdn_http,
                    cdn_https: s.cdn_https,
                    version: s.VERSION,
                    suffix: s.dependency_suffix,
                    receivers: a
                }),
                h = {
                    baseUrl: "https://pusher.com",
                    urls: {
                        authenticationEndpoint: {
                            path: "/docs/authenticating_users"
                        },
                        javascriptQuickStart: {
                            path: "/docs/javascript_quick_start"
                        },
                        triggeringClientEvents: {
                            path: "/docs/client_api_guide/client_events#trigger-events"
                        },
                        encryptedChannelSupport: {
                            fullUrl: "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"
                        }
                    }
                },
                p = function (t) {
                    var e, n = h.urls[t];
                    return n ? (n.fullUrl ? e = n.fullUrl : n.path && (e = h.baseUrl + n.path), e ? "See: " + e : "") : ""
                },
                l = (o = function (t, e) {
                    return (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                }, function (t, e) {
                    function n() {
                        this.constructor = t
                    }
                    o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }),
                f = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                d = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                y = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                g = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                v = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                b = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                m = function (t) {
                    function e(e) {
                        var n = this.constructor,
                            o = t.call(this, e) || this;
                        return Object.setPrototypeOf(o, n.prototype), o
                    }
                    return l(e, t), e
                }(Error),
                w = function (t) {
                    function e(e, n) {
                        var o = this.constructor,
                            r = t.call(this, n) || this;
                        return r.status = e, Object.setPrototypeOf(r, o.prototype), r
                    }
                    return l(e, t), e
                }(Error),
                _ = function (t, e, n) {
                    var o, r = this;
                    for (var i in (o = _e.createXHR()).open("POST", r.options.authEndpoint, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), this.authOptions.headers) o.setRequestHeader(i, this.authOptions.headers[i]);
                    return o.onreadystatechange = function () {
                        if (4 === o.readyState)
                            if (200 === o.status) {
                                var t = void 0,
                                    e = !1;
                                try {
                                    t = JSON.parse(o.responseText), e = !0
                                } catch (t) {
                                    n(new w(200, "JSON returned from auth endpoint was invalid, yet status code was 200. Data was: " + o.responseText), {
                                        auth: ""
                                    })
                                }
                                e && n(null, t)
                            } else {
                                var i = p("authenticationEndpoint");
                                n(new w(o.status, "Unable to retrieve auth string from auth endpoint - received status: " + o.status + " from " + r.options.authEndpoint + ". Clients must be authenticated to join private or presence channels. " + i), {
                                    auth: ""
                                })
                            }
                    }, o.send(this.composeQuery(e)), o
                };
            for (var S = String.fromCharCode, k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C = {}, T = 0, P = k.length; T < P; T++) C[k.charAt(T)] = T;
            var O = function (t) {
                    var e = t.charCodeAt(0);
                    return e < 128 ? t : e < 2048 ? S(192 | e >>> 6) + S(128 | 63 & e) : S(224 | e >>> 12 & 15) + S(128 | e >>> 6 & 63) + S(128 | 63 & e)
                },
                E = function (t) {
                    return t.replace(/[^\x00-\x7F]/g, O)
                },
                L = function (t) {
                    var e = [0, 2, 1][t.length % 3],
                        n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                    return [k.charAt(n >>> 18), k.charAt(n >>> 12 & 63), e >= 2 ? "=" : k.charAt(n >>> 6 & 63), e >= 1 ? "=" : k.charAt(63 & n)].join("")
                },
                x = window.btoa || function (t) {
                    return t.replace(/[\s\S]{1,3}/g, L)
                },
                A = function () {
                    function t(t, e, n, o) {
                        var r = this;
                        this.clear = e, this.timer = t((function () {
                            r.timer && (r.timer = o(r.timer))
                        }), n)
                    }
                    return t.prototype.isRunning = function () {
                        return null !== this.timer
                    }, t.prototype.ensureAborted = function () {
                        this.timer && (this.clear(this.timer), this.timer = null)
                    }, t
                }(),
                R = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }();

            function j(t) {
                window.clearTimeout(t)
            }

            function D(t) {
                window.clearInterval(t)
            }
            var I = function (t) {
                    function e(e, n) {
                        return t.call(this, setTimeout, j, e, (function (t) {
                            return n(), null
                        })) || this
                    }
                    return R(e, t), e
                }(A),
                N = function (t) {
                    function e(e, n) {
                        return t.call(this, setInterval, D, e, (function (t) {
                            return n(), t
                        })) || this
                    }
                    return R(e, t), e
                }(A),
                M = {
                    now: function () {
                        return Date.now ? Date.now() : (new Date).valueOf()
                    }, defer: function (t) {
                        return new I(0, t)
                    }, method: function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var o = Array.prototype.slice.call(arguments, 1);
                        return function (e) {
                            return e[t].apply(e, o.concat(arguments))
                        }
                    }
                };

            function H(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    for (var i in r) r[i] && r[i].constructor && r[i].constructor === Object ? t[i] = H(t[i] || {}, r[i]) : t[i] = r[i]
                }
                return t
            }

            function q() {
                for (var t = ["Pusher"], e = 0; e < arguments.length; e++) "string" == typeof arguments[e] ? t.push(arguments[e]) : t.push(Y(arguments[e]));
                return t.join(" : ")
            }

            function B(t, e) {
                var n = Array.prototype.indexOf;
                if (null === t) return -1;
                if (n && t.indexOf === n) return t.indexOf(e);
                for (var o = 0, r = t.length; o < r; o++)
                    if (t[o] === e) return o;
                return -1
            }

            function z(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t)
            }

            function U(t) {
                var e = [];
                return z(t, (function (t, n) {
                    e.push(n)
                })), e
            }

            function F(t, e, n) {
                for (var o = 0; o < t.length; o++) e.call(n || window, t[o], o, t)
            }

            function X(t, e) {
                for (var n = [], o = 0; o < t.length; o++) n.push(e(t[o], o, t, n));
                return n
            }

            function J(t, e) {
                e = e || function (t) {
                    return !!t
                };
                for (var n = [], o = 0; o < t.length; o++) e(t[o], o, t, n) && n.push(t[o]);
                return n
            }

            function W(t, e) {
                var n = {};
                return z(t, (function (o, r) {
                    (e && e(o, r, t, n) || Boolean(o)) && (n[r] = o)
                })), n
            }

            function G(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (e(t[n], n, t)) return !0;
                return !1
            }

            function Q(t) {
                return e = function (t) {
                    return "object" == typeof t && (t = Y(t)), encodeURIComponent((e = t.toString(), x(E(e))));
                    var e
                }, n = {}, z(t, (function (t, o) {
                    n[o] = e(t)
                })), n;
                var e, n
            }

            function V(t) {
                var e, n, o = W(t, (function (t) {
                    return void 0 !== t
                }));
                return X((e = Q(o), n = [], z(e, (function (t, e) {
                    n.push([e, t])
                })), n), M.method("join", "=")).join("&")
            }

            function Y(t) {
                try {
                    return JSON.stringify(t)
                } catch (o) {
                    return JSON.stringify((e = [], n = [], function t(o, r) {
                        var i, s, c;
                        switch (typeof o) {
                            case "object":
                                if (!o) return null;
                                for (i = 0; i < e.length; i += 1)
                                    if (e[i] === o) return {
                                        $ref: n[i]
                                    };
                                if (e.push(o), n.push(r), "[object Array]" === Object.prototype.toString.apply(o))
                                    for (c = [], i = 0; i < o.length; i += 1) c[i] = t(o[i], r + "[" + i + "]");
                                else
                                    for (s in c = {}, o) Object.prototype.hasOwnProperty.call(o, s) && (c[s] = t(o[s], r + "[" + JSON.stringify(s) + "]"));
                                return c;
                            case "number":
                            case "string":
                            case "boolean":
                                return o
                        }
                    }(t, "$")))
                }
                var e, n
            }
            var $ = new(function () {
                    function t() {
                        this.globalLog = function (t) {
                            window.console && window.console.log && window.console.log(t)
                        }
                    }
                    return t.prototype.debug = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this.log(this.globalLog, t)
                    }, t.prototype.warn = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this.log(this.globalLogWarn, t)
                    }, t.prototype.error = function () {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this.log(this.globalLogError, t)
                    }, t.prototype.globalLogWarn = function (t) {
                        window.console && window.console.warn ? window.console.warn(t) : this.globalLog(t)
                    }, t.prototype.globalLogError = function (t) {
                        window.console && window.console.error ? window.console.error(t) : this.globalLogWarn(t)
                    }, t.prototype.log = function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var o = q.apply(this, arguments);
                        if (Ie.log) Ie.log(o);
                        else if (Ie.logToConsole) {
                            var r = t.bind(this);
                            r(o)
                        }
                    }, t
                }()),
                K = function (t, e, n) {
                    void 0 !== this.authOptions.headers && $.warn("To send headers with the auth request, you must use AJAX, rather than JSONP.");
                    var o = t.nextAuthCallbackID.toString();
                    t.nextAuthCallbackID++;
                    var r = t.getDocument(),
                        i = r.createElement("script");
                    t.auth_callbacks[o] = function (t) {
                        n(null, t)
                    };
                    var s = "Pusher.auth_callbacks['" + o + "']";
                    i.src = this.options.authEndpoint + "?callback=" + encodeURIComponent(s) + "&" + this.composeQuery(e);
                    var c = r.getElementsByTagName("head")[0] || r.documentElement;
                    c.insertBefore(i, c.firstChild)
                },
                Z = function () {
                    function t(t) {
                        this.src = t
                    }
                    return t.prototype.send = function (t) {
                        var e = this,
                            n = "Error loading " + e.src;
                        e.script = document.createElement("script"), e.script.id = t.id, e.script.src = e.src, e.script.type = "text/javascript", e.script.charset = "UTF-8", e.script.addEventListener ? (e.script.onerror = function () {
                            t.callback(n)
                        }, e.script.onload = function () {
                            t.callback(null)
                        }) : e.script.onreadystatechange = function () {
                            "loaded" !== e.script.readyState && "complete" !== e.script.readyState || t.callback(null)
                        }, void 0 === e.script.async && document.attachEvent && /opera/i.test(navigator.userAgent) ? (e.errorScript = document.createElement("script"), e.errorScript.id = t.id + "_error", e.errorScript.text = t.name + "('" + n + "');", e.script.async = e.errorScript.async = !1) : e.script.async = !0;
                        var o = document.getElementsByTagName("head")[0];
                        o.insertBefore(e.script, o.firstChild), e.errorScript && o.insertBefore(e.errorScript, e.script.nextSibling)
                    }, t.prototype.cleanup = function () {
                        this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null
                    }, t
                }(),
                tt = function () {
                    function t(t, e) {
                        this.url = t, this.data = e
                    }
                    return t.prototype.send = function (t) {
                        if (!this.request) {
                            var e = V(this.data),
                                n = this.url + "/" + t.number + "?" + e;
                            this.request = _e.createScriptRequest(n), this.request.send(t)
                        }
                    }, t.prototype.cleanup = function () {
                        this.request && this.request.cleanup()
                    }, t
                }(),
                et = {
                    name: "jsonp",
                    getAgent: function (t, e) {
                        return function (n, o) {
                            var r = "http" + (e ? "s" : "") + "://" + (t.host || t.options.host) + t.options.path,
                                s = _e.createJSONPRequest(r, n),
                                c = _e.ScriptReceivers.create((function (e, n) {
                                    i.remove(c), s.cleanup(), n && n.host && (t.host = n.host), o && o(e, n)
                                }));
                            s.send(c)
                        }
                    }
                };

            function nt(t, e, n) {
                return t + (e.useTLS ? "s" : "") + "://" + (e.useTLS ? e.hostTLS : e.hostNonTLS) + n
            }

            function ot(t, e) {
                return "/app/" + t + ("?protocol=" + s.PROTOCOL + "&client=js&version=" + s.VERSION + (e ? "&" + e : ""))
            }
            var rt = {
                    getInitial: function (t, e) {
                        return nt("ws", e, (e.httpPath || "") + ot(t, "flash=false"))
                    }
                },
                it = {
                    getInitial: function (t, e) {
                        return nt("http", e, (e.httpPath || "/pusher") + ot(t))
                    }
                },
                st = {
                    getInitial: function (t, e) {
                        return nt("http", e, e.httpPath || "/pusher")
                    }, getPath: function (t, e) {
                        return ot(t)
                    }
                },
                ct = function () {
                    function t() {
                        this._callbacks = {}
                    }
                    return t.prototype.get = function (t) {
                        return this._callbacks[at(t)]
                    }, t.prototype.add = function (t, e, n) {
                        var o = at(t);
                        this._callbacks[o] = this._callbacks[o] || [], this._callbacks[o].push({
                            fn: e,
                            context: n
                        })
                    }, t.prototype.remove = function (t, e, n) {
                        if (t || e || n) {
                            var o = t ? [at(t)] : U(this._callbacks);
                            e || n ? this.removeCallback(o, e, n) : this.removeAllCallbacks(o)
                        } else this._callbacks = {}
                    }, t.prototype.removeCallback = function (t, e, n) {
                        F(t, (function (t) {
                            this._callbacks[t] = J(this._callbacks[t] || [], (function (t) {
                                return e && e !== t.fn || n && n !== t.context
                            })), 0 === this._callbacks[t].length && delete this._callbacks[t]
                        }), this)
                    }, t.prototype.removeAllCallbacks = function (t) {
                        F(t, (function (t) {
                            delete this._callbacks[t]
                        }), this)
                    }, t
                }();

            function at(t) {
                return "_" + t
            }
            var ut = function () {
                    function t(t) {
                        this.callbacks = new ct, this.global_callbacks = [], this.failThrough = t
                    }
                    return t.prototype.bind = function (t, e, n) {
                        return this.callbacks.add(t, e, n), this
                    }, t.prototype.bind_global = function (t) {
                        return this.global_callbacks.push(t), this
                    }, t.prototype.unbind = function (t, e, n) {
                        return this.callbacks.remove(t, e, n), this
                    }, t.prototype.unbind_global = function (t) {
                        return t ? (this.global_callbacks = J(this.global_callbacks || [], (function (e) {
                            return e !== t
                        })), this) : (this.global_callbacks = [], this)
                    }, t.prototype.unbind_all = function () {
                        return this.unbind(), this.unbind_global(), this
                    }, t.prototype.emit = function (t, e, n) {
                        for (var o = 0; o < this.global_callbacks.length; o++) this.global_callbacks[o](t, e);
                        var r = this.callbacks.get(t),
                            i = [];
                        if (n ? i.push(e, n) : e && i.push(e), r && r.length > 0)
                            for (o = 0; o < r.length; o++) r[o].fn.apply(r[o].context || window, i);
                        else this.failThrough && this.failThrough(t, e);
                        return this
                    }, t
                }(),
                ht = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                pt = function (t) {
                    function e(e, n, o, r, i) {
                        var s = t.call(this) || this;
                        return s.initialize = _e.transportConnectionInitializer, s.hooks = e, s.name = n, s.priority = o, s.key = r, s.options = i, s.state = "new", s.timeline = i.timeline, s.activityTimeout = i.activityTimeout, s.id = s.timeline.generateUniqueID(), s
                    }
                    return ht(e, t), e.prototype.handlesActivityChecks = function () {
                        return Boolean(this.hooks.handlesActivityChecks)
                    }, e.prototype.supportsPing = function () {
                        return Boolean(this.hooks.supportsPing)
                    }, e.prototype.connect = function () {
                        var t = this;
                        if (this.socket || "initialized" !== this.state) return !1;
                        var e = this.hooks.urls.getInitial(this.key, this.options);
                        try {
                            this.socket = this.hooks.getSocket(e, this.options)
                        } catch (e) {
                            return M.defer((function () {
                                t.onError(e), t.changeState("closed")
                            })), !1
                        }
                        return this.bindListeners(), $.debug("Connecting", {
                            transport: this.name,
                            url: e
                        }), this.changeState("connecting"), !0
                    }, e.prototype.close = function () {
                        return !!this.socket && (this.socket.close(), !0)
                    }, e.prototype.send = function (t) {
                        var e = this;
                        return "open" === this.state && (M.defer((function () {
                            e.socket && e.socket.send(t)
                        })), !0)
                    }, e.prototype.ping = function () {
                        "open" === this.state && this.supportsPing() && this.socket.ping()
                    }, e.prototype.onOpen = function () {
                        this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0
                    }, e.prototype.onError = function (t) {
                        this.emit("error", {
                            type: "WebSocketError",
                            error: t
                        }), this.timeline.error(this.buildTimelineMessage({
                            error: t.toString()
                        }))
                    }, e.prototype.onClose = function (t) {
                        t ? this.changeState("closed", {
                            code: t.code,
                            reason: t.reason,
                            wasClean: t.wasClean
                        }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0
                    }, e.prototype.onMessage = function (t) {
                        this.emit("message", t)
                    }, e.prototype.onActivity = function () {
                        this.emit("activity")
                    }, e.prototype.bindListeners = function () {
                        var t = this;
                        this.socket.onopen = function () {
                            t.onOpen()
                        }, this.socket.onerror = function (e) {
                            t.onError(e)
                        }, this.socket.onclose = function (e) {
                            t.onClose(e)
                        }, this.socket.onmessage = function (e) {
                            t.onMessage(e)
                        }, this.supportsPing() && (this.socket.onactivity = function () {
                            t.onActivity()
                        })
                    }, e.prototype.unbindListeners = function () {
                        this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0))
                    }, e.prototype.changeState = function (t, e) {
                        this.state = t, this.timeline.info(this.buildTimelineMessage({
                            state: t,
                            params: e
                        })), this.emit(t, e)
                    }, e.prototype.buildTimelineMessage = function (t) {
                        return H({
                            cid: this.id
                        }, t)
                    }, e
                }(ut),
                lt = function () {
                    function t(t) {
                        this.hooks = t
                    }
                    return t.prototype.isSupported = function (t) {
                        return this.hooks.isSupported(t)
                    }, t.prototype.createConnection = function (t, e, n, o) {
                        return new pt(this.hooks, t, e, n, o)
                    }, t
                }(),
                ft = new lt({
                    urls: rt,
                    handlesActivityChecks: !1,
                    supportsPing: !1,
                    isInitialized: function () {
                        return Boolean(_e.getWebSocketAPI())
                    }, isSupported: function () {
                        return Boolean(_e.getWebSocketAPI())
                    }, getSocket: function (t) {
                        return _e.createWebSocket(t)
                    }
                }),
                dt = {
                    urls: it,
                    handlesActivityChecks: !1,
                    supportsPing: !0,
                    isInitialized: function () {
                        return !0
                    }
                },
                yt = H({
                    getSocket: function (t) {
                        return _e.HTTPFactory.createStreamingSocket(t)
                    }
                }, dt),
                gt = H({
                    getSocket: function (t) {
                        return _e.HTTPFactory.createPollingSocket(t)
                    }
                }, dt),
                vt = {
                    isSupported: function () {
                        return _e.isXHRSupported()
                    }
                },
                bt = {
                    ws: ft,
                    xhr_streaming: new lt(H({}, yt, vt)),
                    xhr_polling: new lt(H({}, gt, vt))
                },
                mt = new lt({
                    file: "sockjs",
                    urls: st,
                    handlesActivityChecks: !0,
                    supportsPing: !1,
                    isSupported: function () {
                        return !0
                    }, isInitialized: function () {
                        return void 0 !== window.SockJS
                    }, getSocket: function (t, e) {
                        return new window.SockJS(t, null, {
                            js_path: u.getPath("sockjs", {
                                useTLS: e.useTLS
                            }),
                            ignore_null_origin: e.ignoreNullOrigin
                        })
                    }, beforeOpen: function (t, e) {
                        t.send(JSON.stringify({
                            path: e
                        }))
                    }
                }),
                wt = {
                    isSupported: function (t) {
                        return _e.isXDRSupported(t.useTLS)
                    }
                },
                _t = new lt(H({}, yt, wt)),
                St = new lt(H({}, gt, wt));
            bt.xdr_streaming = _t, bt.xdr_polling = St, bt.sockjs = mt;
            var kt = bt,
                Ct = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                Tt = new(function (t) {
                    function e() {
                        var e = t.call(this) || this,
                            n = e;
                        return void 0 !== window.addEventListener && (window.addEventListener("online", (function () {
                            n.emit("online")
                        }), !1), window.addEventListener("offline", (function () {
                            n.emit("offline")
                        }), !1)), e
                    }
                    return Ct(e, t), e.prototype.isOnline = function () {
                        return void 0 === window.navigator.onLine || window.navigator.onLine
                    }, e
                }(ut)),
                Pt = function () {
                    function t(t, e, n) {
                        this.manager = t, this.transport = e, this.minPingDelay = n.minPingDelay, this.maxPingDelay = n.maxPingDelay, this.pingDelay = void 0
                    }
                    return t.prototype.createConnection = function (t, e, n, o) {
                        var r = this;
                        o = H({}, o, {
                            activityTimeout: this.pingDelay
                        });
                        var i = this.transport.createConnection(t, e, n, o),
                            s = null,
                            c = function () {
                                i.unbind("open", c), i.bind("closed", a), s = M.now()
                            },
                            a = function (t) {
                                if (i.unbind("closed", a), 1002 === t.code || 1003 === t.code) r.manager.reportDeath();
                                else if (!t.wasClean && s) {
                                    var e = M.now() - s;
                                    e < 2 * r.maxPingDelay && (r.manager.reportDeath(), r.pingDelay = Math.max(e / 2, r.minPingDelay))
                                }
                            };
                        return i.bind("open", c), i
                    }, t.prototype.isSupported = function (t) {
                        return this.manager.isAlive() && this.transport.isSupported(t)
                    }, t
                }(),
                Ot = {
                    decodeMessage: function (t) {
                        try {
                            var e = JSON.parse(t.data),
                                n = e.data;
                            if ("string" == typeof n) try {
                                n = JSON.parse(e.data)
                            } catch (t) {}
                            var o = {
                                event: e.event,
                                channel: e.channel,
                                data: n
                            };
                            return e.user_id && (o.user_id = e.user_id), o
                        } catch (e) {
                            throw {
                                type: "MessageParseError",
                                error: e,
                                data: t.data
                            }
                        }
                    }, encodeMessage: function (t) {
                        return JSON.stringify(t)
                    }, processHandshake: function (t) {
                        var e = Ot.decodeMessage(t);
                        if ("pusher:connection_established" === e.event) {
                            if (!e.data.activity_timeout) throw "No activity timeout specified in handshake";
                            return {
                                action: "connected",
                                id: e.data.socket_id,
                                activityTimeout: 1e3 * e.data.activity_timeout
                            }
                        }
                        if ("pusher:error" === e.event) return {
                            action: this.getCloseAction(e.data),
                            error: this.getCloseError(e.data)
                        };
                        throw "Invalid handshake"
                    }, getCloseAction: function (t) {
                        return t.code < 4e3 ? t.code >= 1002 && t.code <= 1004 ? "backoff" : null : 4e3 === t.code ? "tls_only" : t.code < 4100 ? "refused" : t.code < 4200 ? "backoff" : t.code < 4300 ? "retry" : "refused"
                    }, getCloseError: function (t) {
                        return 1e3 !== t.code && 1001 !== t.code ? {
                            type: "PusherError",
                            data: {
                                code: t.code,
                                message: t.reason || t.message
                            }
                        } : null
                    }
                },
                Et = Ot,
                Lt = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                xt = function (t) {
                    function e(e, n) {
                        var o = t.call(this) || this;
                        return o.id = e, o.transport = n, o.activityTimeout = n.activityTimeout, o.bindListeners(), o
                    }
                    return Lt(e, t), e.prototype.handlesActivityChecks = function () {
                        return this.transport.handlesActivityChecks()
                    }, e.prototype.send = function (t) {
                        return this.transport.send(t)
                    }, e.prototype.send_event = function (t, e, n) {
                        var o = {
                            event: t,
                            data: e
                        };
                        return n && (o.channel = n), $.debug("Event sent", o), this.send(Et.encodeMessage(o))
                    }, e.prototype.ping = function () {
                        this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {})
                    }, e.prototype.close = function () {
                        this.transport.close()
                    }, e.prototype.bindListeners = function () {
                        var t = this,
                            e = {
                                message: function (e) {
                                    var n;
                                    try {
                                        n = Et.decodeMessage(e)
                                    } catch (n) {
                                        t.emit("error", {
                                            type: "MessageParseError",
                                            error: n,
                                            data: e.data
                                        })
                                    }
                                    if (void 0 !== n) {
                                        switch ($.debug("Event recd", n), n.event) {
                                            case "pusher:error":
                                                t.emit("error", {
                                                    type: "PusherError",
                                                    data: n.data
                                                });
                                                break;
                                            case "pusher:ping":
                                                t.emit("ping");
                                                break;
                                            case "pusher:pong":
                                                t.emit("pong")
                                        }
                                        t.emit("message", n)
                                    }
                                }, activity: function () {
                                    t.emit("activity")
                                }, error: function (e) {
                                    t.emit("error", e)
                                }, closed: function (e) {
                                    n(), e && e.code && t.handleCloseEvent(e), t.transport = null, t.emit("closed")
                                }
                            },
                            n = function () {
                                z(e, (function (e, n) {
                                    t.transport.unbind(n, e)
                                }))
                            };
                        z(e, (function (e, n) {
                            t.transport.bind(n, e)
                        }))
                    }, e.prototype.handleCloseEvent = function (t) {
                        var e = Et.getCloseAction(t),
                            n = Et.getCloseError(t);
                        n && this.emit("error", n), e && this.emit(e, {
                            action: e,
                            error: n
                        })
                    }, e
                }(ut),
                At = function () {
                    function t(t, e) {
                        this.transport = t, this.callback = e, this.bindListeners()
                    }
                    return t.prototype.close = function () {
                        this.unbindListeners(), this.transport.close()
                    }, t.prototype.bindListeners = function () {
                        var t = this;
                        this.onMessage = function (e) {
                            var n;
                            t.unbindListeners();
                            try {
                                n = Et.processHandshake(e)
                            } catch (e) {
                                return t.finish("error", {
                                    error: e
                                }), void t.transport.close()
                            }
                            "connected" === n.action ? t.finish("connected", {
                                connection: new xt(n.id, t.transport),
                                activityTimeout: n.activityTimeout
                            }) : (t.finish(n.action, {
                                error: n.error
                            }), t.transport.close())
                        }, this.onClosed = function (e) {
                            t.unbindListeners();
                            var n = Et.getCloseAction(e) || "backoff",
                                o = Et.getCloseError(e);
                            t.finish(n, {
                                error: o
                            })
                        }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed)
                    }, t.prototype.unbindListeners = function () {
                        this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed)
                    }, t.prototype.finish = function (t, e) {
                        this.callback(H({
                            transport: this.transport,
                            action: t
                        }, e))
                    }, t
                }(),
                Rt = function () {
                    function t(t, e) {
                        this.channel = t;
                        var n = e.authTransport;
                        if (void 0 === _e.getAuthorizers()[n]) throw "'" + n + "' is not a recognized auth transport";
                        this.type = n, this.options = e, this.authOptions = e.auth || {}
                    }
                    return t.prototype.composeQuery = function (t) {
                        var e = "socket_id=" + encodeURIComponent(t) + "&channel_name=" + encodeURIComponent(this.channel.name);
                        for (var n in this.authOptions.params) e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(this.authOptions.params[n]);
                        return e
                    }, t.prototype.authorize = function (e, n) {
                        t.authorizers = t.authorizers || _e.getAuthorizers(), t.authorizers[this.type].call(this, _e, e, n)
                    }, t
                }(),
                jt = function () {
                    function t(t, e) {
                        this.timeline = t, this.options = e || {}
                    }
                    return t.prototype.send = function (t, e) {
                        this.timeline.isEmpty() || this.timeline.send(_e.TimelineTransport.getAgent(this, t), e)
                    }, t
                }(),
                Dt = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                It = function (t) {
                    function e(e, n) {
                        var o = t.call(this, (function (t, n) {
                            $.debug("No callbacks on " + e + " for " + t)
                        })) || this;
                        return o.name = e, o.pusher = n, o.subscribed = !1, o.subscriptionPending = !1, o.subscriptionCancelled = !1, o
                    }
                    return Dt(e, t), e.prototype.authorize = function (t, e) {
                        return e(null, {
                            auth: ""
                        })
                    }, e.prototype.trigger = function (t, e) {
                        if (0 !== t.indexOf("client-")) throw new f("Event '" + t + "' does not start with 'client-'");
                        if (!this.subscribed) {
                            var n = p("triggeringClientEvents");
                            $.warn("Client event triggered before channel 'subscription_succeeded' event . " + n)
                        }
                        return this.pusher.send_event(t, e, this.name)
                    }, e.prototype.disconnect = function () {
                        this.subscribed = !1, this.subscriptionPending = !1
                    }, e.prototype.handleEvent = function (t) {
                        var e = t.event,
                            n = t.data;
                        if ("pusher_internal:subscription_succeeded" === e) this.handleSubscriptionSucceededEvent(t);
                        else if (0 !== e.indexOf("pusher_internal:")) {
                            this.emit(e, n, {})
                        }
                    }, e.prototype.handleSubscriptionSucceededEvent = function (t) {
                        this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data)
                    }, e.prototype.subscribe = function () {
                        var t = this;
                        this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (function (e, n) {
                            e ? (t.subscriptionPending = !1, $.error(e.toString()), t.emit("pusher:subscription_error", Object.assign({}, {
                                type: "AuthError",
                                error: e.message
                            }, e instanceof w ? {
                                status: e.status
                            } : {}))) : t.pusher.send_event("pusher:subscribe", {
                                auth: n.auth,
                                channel_data: n.channel_data,
                                channel: t.name
                            })
                        })))
                    }, e.prototype.unsubscribe = function () {
                        this.subscribed = !1, this.pusher.send_event("pusher:unsubscribe", {
                            channel: this.name
                        })
                    }, e.prototype.cancelSubscription = function () {
                        this.subscriptionCancelled = !0
                    }, e.prototype.reinstateSubscription = function () {
                        this.subscriptionCancelled = !1
                    }, e
                }(ut),
                Nt = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                Mt = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Nt(e, t), e.prototype.authorize = function (t, e) {
                        return Qt.createAuthorizer(this, this.pusher.config).authorize(t, e)
                    }, e
                }(It),
                Ht = function () {
                    function t() {
                        this.reset()
                    }
                    return t.prototype.get = function (t) {
                        return Object.prototype.hasOwnProperty.call(this.members, t) ? {
                            id: t,
                            info: this.members[t]
                        } : null
                    }, t.prototype.each = function (t) {
                        var e = this;
                        z(this.members, (function (n, o) {
                            t(e.get(o))
                        }))
                    }, t.prototype.setMyID = function (t) {
                        this.myID = t
                    }, t.prototype.onSubscription = function (t) {
                        this.members = t.presence.hash, this.count = t.presence.count, this.me = this.get(this.myID)
                    }, t.prototype.addMember = function (t) {
                        return null === this.get(t.user_id) && this.count++, this.members[t.user_id] = t.user_info, this.get(t.user_id)
                    }, t.prototype.removeMember = function (t) {
                        var e = this.get(t.user_id);
                        return e && (delete this.members[t.user_id], this.count--), e
                    }, t.prototype.reset = function () {
                        this.members = {}, this.count = 0, this.myID = null, this.me = null
                    }, t
                }(),
                qt = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                Bt = function (t) {
                    function e(e, n) {
                        var o = t.call(this, e, n) || this;
                        return o.members = new Ht, o
                    }
                    return qt(e, t), e.prototype.authorize = function (e, n) {
                        var o = this;
                        t.prototype.authorize.call(this, e, (function (t, e) {
                            if (!t) {
                                if (void 0 === (e = e).channel_data) {
                                    var r = p("authenticationEndpoint");
                                    return $.error("Invalid auth response for channel '" + o.name + "',expected 'channel_data' field. " + r), void n("Invalid auth response")
                                }
                                var i = JSON.parse(e.channel_data);
                                o.members.setMyID(i.user_id)
                            }
                            n(t, e)
                        }))
                    }, e.prototype.handleEvent = function (t) {
                        var e = t.event;
                        if (0 === e.indexOf("pusher_internal:")) this.handleInternalEvent(t);
                        else {
                            var n = t.data,
                                o = {};
                            t.user_id && (o.user_id = t.user_id), this.emit(e, n, o)
                        }
                    }, e.prototype.handleInternalEvent = function (t) {
                        var e = t.event,
                            n = t.data;
                        switch (e) {
                            case "pusher_internal:subscription_succeeded":
                                this.handleSubscriptionSucceededEvent(t);
                                break;
                            case "pusher_internal:member_added":
                                var o = this.members.addMember(n);
                                this.emit("pusher:member_added", o);
                                break;
                            case "pusher_internal:member_removed":
                                var r = this.members.removeMember(n);
                                r && this.emit("pusher:member_removed", r)
                        }
                    }, e.prototype.handleSubscriptionSucceededEvent = function (t) {
                        this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(t.data), this.emit("pusher:subscription_succeeded", this.members))
                    }, e.prototype.disconnect = function () {
                        this.members.reset(), t.prototype.disconnect.call(this)
                    }, e
                }(Mt),
                zt = n(1),
                Ut = n(0),
                Ft = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                Xt = function (t) {
                    function e(e, n, o) {
                        var r = t.call(this, e, n) || this;
                        return r.key = null, r.nacl = o, r
                    }
                    return Ft(e, t), e.prototype.authorize = function (e, n) {
                        var o = this;
                        t.prototype.authorize.call(this, e, (function (t, e) {
                            if (t) n(t, e);
                            else {
                                var r = e.shared_secret;
                                r ? (o.key = Object(Ut.decode)(r), delete e.shared_secret, n(null, e)) : n(new Error("No shared_secret key in auth payload for encrypted channel: " + o.name), null)
                            }
                        }))
                    }, e.prototype.trigger = function (t, e) {
                        throw new v("Client events are not currently supported for encrypted channels")
                    }, e.prototype.handleEvent = function (e) {
                        var n = e.event,
                            o = e.data;
                        0 !== n.indexOf("pusher_internal:") && 0 !== n.indexOf("pusher:") ? this.handleEncryptedEvent(n, o) : t.prototype.handleEvent.call(this, e)
                    }, e.prototype.handleEncryptedEvent = function (t, e) {
                        var n = this;
                        if (this.key)
                            if (e.ciphertext && e.nonce) {
                                var o = Object(Ut.decode)(e.ciphertext);
                                if (o.length < this.nacl.secretbox.overheadLength) $.error("Expected encrypted event ciphertext length to be " + this.nacl.secretbox.overheadLength + ", got: " + o.length);
                                else {
                                    var r = Object(Ut.decode)(e.nonce);
                                    if (r.length < this.nacl.secretbox.nonceLength) $.error("Expected encrypted event nonce length to be " + this.nacl.secretbox.nonceLength + ", got: " + r.length);
                                    else {
                                        var i = this.nacl.secretbox.open(o, r, this.key);
                                        if (null === i) return $.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), void this.authorize(this.pusher.connection.socket_id, (function (e, s) {
                                            e ? $.error("Failed to make a request to the authEndpoint: " + s + ". Unable to fetch new key, so dropping encrypted event") : null !== (i = n.nacl.secretbox.open(o, r, n.key)) ? n.emit(t, n.getDataToEmit(i)) : $.error("Failed to decrypt event with new key. Dropping encrypted event")
                                        }));
                                        this.emit(t, this.getDataToEmit(i))
                                    }
                                }
                            } else $.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + e);
                        else $.debug("Received encrypted event before key has been retrieved from the authEndpoint")
                    }, e.prototype.getDataToEmit = function (t) {
                        var e = Object(zt.decode)(t);
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e
                        }
                    }, e
                }(Mt),
                Jt = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                Wt = function (t) {
                    function e(e, n) {
                        var o = t.call(this) || this;
                        o.state = "initialized", o.connection = null, o.key = e, o.options = n, o.timeline = o.options.timeline, o.usingTLS = o.options.useTLS, o.errorCallbacks = o.buildErrorCallbacks(), o.connectionCallbacks = o.buildConnectionCallbacks(o.errorCallbacks), o.handshakeCallbacks = o.buildHandshakeCallbacks(o.errorCallbacks);
                        var r = _e.getNetwork();
                        return r.bind("online", (function () {
                            o.timeline.info({
                                netinfo: "online"
                            }), "connecting" !== o.state && "unavailable" !== o.state || o.retryIn(0)
                        })), r.bind("offline", (function () {
                            o.timeline.info({
                                netinfo: "offline"
                            }), o.connection && o.sendActivityCheck()
                        })), o.updateStrategy(), o
                    }
                    return Jt(e, t), e.prototype.connect = function () {
                        this.connection || this.runner || (this.strategy.isSupported() ? (this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer()) : this.updateState("failed"))
                    }, e.prototype.send = function (t) {
                        return !!this.connection && this.connection.send(t)
                    }, e.prototype.send_event = function (t, e, n) {
                        return !!this.connection && this.connection.send_event(t, e, n)
                    }, e.prototype.disconnect = function () {
                        this.disconnectInternally(), this.updateState("disconnected")
                    }, e.prototype.isUsingTLS = function () {
                        return this.usingTLS
                    }, e.prototype.startConnecting = function () {
                        var t = this,
                            e = function (n, o) {
                                n ? t.runner = t.strategy.connect(0, e) : "error" === o.action ? (t.emit("error", {
                                    type: "HandshakeError",
                                    error: o.error
                                }), t.timeline.error({
                                    handshakeError: o.error
                                })) : (t.abortConnecting(), t.handshakeCallbacks[o.action](o))
                            };
                        this.runner = this.strategy.connect(0, e)
                    }, e.prototype.abortConnecting = function () {
                        this.runner && (this.runner.abort(), this.runner = null)
                    }, e.prototype.disconnectInternally = function () {
                        (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) && this.abandonConnection().close()
                    }, e.prototype.updateStrategy = function () {
                        this.strategy = this.options.getStrategy({
                            key: this.key,
                            timeline: this.timeline,
                            useTLS: this.usingTLS
                        })
                    }, e.prototype.retryIn = function (t) {
                        var e = this;
                        this.timeline.info({
                            action: "retry",
                            delay: t
                        }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new I(t || 0, (function () {
                            e.disconnectInternally(), e.connect()
                        }))
                    }, e.prototype.clearRetryTimer = function () {
                        this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null)
                    }, e.prototype.setUnavailableTimer = function () {
                        var t = this;
                        this.unavailableTimer = new I(this.options.unavailableTimeout, (function () {
                            t.updateState("unavailable")
                        }))
                    }, e.prototype.clearUnavailableTimer = function () {
                        this.unavailableTimer && this.unavailableTimer.ensureAborted()
                    }, e.prototype.sendActivityCheck = function () {
                        var t = this;
                        this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new I(this.options.pongTimeout, (function () {
                            t.timeline.error({
                                pong_timed_out: t.options.pongTimeout
                            }), t.retryIn(0)
                        }))
                    }, e.prototype.resetActivityCheck = function () {
                        var t = this;
                        this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new I(this.activityTimeout, (function () {
                            t.sendActivityCheck()
                        })))
                    }, e.prototype.stopActivityCheck = function () {
                        this.activityTimer && this.activityTimer.ensureAborted()
                    }, e.prototype.buildConnectionCallbacks = function (t) {
                        var e = this;
                        return H({}, t, {
                            message: function (t) {
                                e.resetActivityCheck(), e.emit("message", t)
                            }, ping: function () {
                                e.send_event("pusher:pong", {})
                            }, activity: function () {
                                e.resetActivityCheck()
                            }, error: function (t) {
                                e.emit("error", t)
                            }, closed: function () {
                                e.abandonConnection(), e.shouldRetry() && e.retryIn(1e3)
                            }
                        })
                    }, e.prototype.buildHandshakeCallbacks = function (t) {
                        var e = this;
                        return H({}, t, {
                            connected: function (t) {
                                e.activityTimeout = Math.min(e.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), e.clearUnavailableTimer(), e.setConnection(t.connection), e.socket_id = e.connection.id, e.updateState("connected", {
                                    socket_id: e.socket_id
                                })
                            }
                        })
                    }, e.prototype.buildErrorCallbacks = function () {
                        var t = this,
                            e = function (e) {
                                return function (n) {
                                    n.error && t.emit("error", {
                                        type: "WebSocketError",
                                        error: n.error
                                    }), e(n)
                                }
                            };
                        return {
                            tls_only: e((function () {
                                t.usingTLS = !0, t.updateStrategy(), t.retryIn(0)
                            })),
                            refused: e((function () {
                                t.disconnect()
                            })),
                            backoff: e((function () {
                                t.retryIn(1e3)
                            })),
                            retry: e((function () {
                                t.retryIn(0)
                            }))
                        }
                    }, e.prototype.setConnection = function (t) {
                        for (var e in this.connection = t, this.connectionCallbacks) this.connection.bind(e, this.connectionCallbacks[e]);
                        this.resetActivityCheck()
                    }, e.prototype.abandonConnection = function () {
                        if (this.connection) {
                            for (var t in this.stopActivityCheck(), this.connectionCallbacks) this.connection.unbind(t, this.connectionCallbacks[t]);
                            var e = this.connection;
                            return this.connection = null, e
                        }
                    }, e.prototype.updateState = function (t, e) {
                        var n = this.state;
                        if (this.state = t, n !== t) {
                            var o = t;
                            "connected" === o && (o += " with new socket ID " + e.socket_id), $.debug("State changed", n + " -> " + o), this.timeline.info({
                                state: t,
                                params: e
                            }), this.emit("state_change", {
                                previous: n,
                                current: t
                            }), this.emit(t, e)
                        }
                    }, e.prototype.shouldRetry = function () {
                        return "connecting" === this.state || "connected" === this.state
                    }, e
                }(ut),
                Gt = function () {
                    function t() {
                        this.channels = {}
                    }
                    return t.prototype.add = function (t, e) {
                        return this.channels[t] || (this.channels[t] = function (t, e) {
                            if (0 === t.indexOf("private-encrypted-")) {
                                if (e.config.nacl) return Qt.createEncryptedChannel(t, e, e.config.nacl);
                                var n = p("encryptedChannelSupport");
                                throw new v("Tried to subscribe to a private-encrypted- channel but no nacl implementation available. " + n)
                            }
                            return 0 === t.indexOf("private-") ? Qt.createPrivateChannel(t, e) : 0 === t.indexOf("presence-") ? Qt.createPresenceChannel(t, e) : Qt.createChannel(t, e)
                        }(t, e)), this.channels[t]
                    }, t.prototype.all = function () {
                        return function (t) {
                            var e = [];
                            return z(t, (function (t) {
                                e.push(t)
                            })), e
                        }(this.channels)
                    }, t.prototype.find = function (t) {
                        return this.channels[t]
                    }, t.prototype.remove = function (t) {
                        var e = this.channels[t];
                        return delete this.channels[t], e
                    }, t.prototype.disconnect = function () {
                        z(this.channels, (function (t) {
                            t.disconnect()
                        }))
                    }, t
                }();
            var Qt = {
                    createChannels: function () {
                        return new Gt
                    }, createConnectionManager: function (t, e) {
                        return new Wt(t, e)
                    }, createChannel: function (t, e) {
                        return new It(t, e)
                    }, createPrivateChannel: function (t, e) {
                        return new Mt(t, e)
                    }, createPresenceChannel: function (t, e) {
                        return new Bt(t, e)
                    }, createEncryptedChannel: function (t, e, n) {
                        return new Xt(t, e, n)
                    }, createTimelineSender: function (t, e) {
                        return new jt(t, e)
                    }, createAuthorizer: function (t, e) {
                        return e.authorizer ? e.authorizer(t, e) : new Rt(t, e)
                    }, createHandshake: function (t, e) {
                        return new At(t, e)
                    }, createAssistantToTheTransportManager: function (t, e, n) {
                        return new Pt(t, e, n)
                    }
                },
                Vt = function () {
                    function t(t) {
                        this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0
                    }
                    return t.prototype.getAssistant = function (t) {
                        return Qt.createAssistantToTheTransportManager(this, t, {
                            minPingDelay: this.options.minPingDelay,
                            maxPingDelay: this.options.maxPingDelay
                        })
                    }, t.prototype.isAlive = function () {
                        return this.livesLeft > 0
                    }, t.prototype.reportDeath = function () {
                        this.livesLeft -= 1
                    }, t
                }(),
                Yt = function () {
                    function t(t, e) {
                        this.strategies = t, this.loop = Boolean(e.loop), this.failFast = Boolean(e.failFast), this.timeout = e.timeout, this.timeoutLimit = e.timeoutLimit
                    }
                    return t.prototype.isSupported = function () {
                        return G(this.strategies, M.method("isSupported"))
                    }, t.prototype.connect = function (t, e) {
                        var n = this,
                            o = this.strategies,
                            r = 0,
                            i = this.timeout,
                            s = null,
                            c = function (a, u) {
                                u ? e(null, u) : (r += 1, n.loop && (r %= o.length), r < o.length ? (i && (i *= 2, n.timeoutLimit && (i = Math.min(i, n.timeoutLimit))), s = n.tryStrategy(o[r], t, {
                                    timeout: i,
                                    failFast: n.failFast
                                }, c)) : e(!0))
                            };
                        return s = this.tryStrategy(o[r], t, {
                            timeout: i,
                            failFast: this.failFast
                        }, c), {
                            abort: function () {
                                s.abort()
                            }, forceMinPriority: function (e) {
                                t = e, s && s.forceMinPriority(e)
                            }
                        }
                    }, t.prototype.tryStrategy = function (t, e, n, o) {
                        var r = null,
                            i = null;
                        return n.timeout > 0 && (r = new I(n.timeout, (function () {
                            i.abort(), o(!0)
                        }))), i = t.connect(e, (function (t, e) {
                            t && r && r.isRunning() && !n.failFast || (r && r.ensureAborted(), o(t, e))
                        })), {
                            abort: function () {
                                r && r.ensureAborted(), i.abort()
                            }, forceMinPriority: function (t) {
                                i.forceMinPriority(t)
                            }
                        }
                    }, t
                }(),
                $t = function () {
                    function t(t) {
                        this.strategies = t
                    }
                    return t.prototype.isSupported = function () {
                        return G(this.strategies, M.method("isSupported"))
                    }, t.prototype.connect = function (t, e) {
                        return function (t, e, n) {
                            var o = X(t, (function (t, o, r, i) {
                                return t.connect(e, n(o, i))
                            }));
                            return {
                                abort: function () {
                                    F(o, Kt)
                                }, forceMinPriority: function (t) {
                                    F(o, (function (e) {
                                        e.forceMinPriority(t)
                                    }))
                                }
                            }
                        }(this.strategies, t, (function (t, n) {
                            return function (o, r) {
                                n[t].error = o, o ? function (t) {
                                    return function (t, e) {
                                        for (var n = 0; n < t.length; n++)
                                            if (!e(t[n], n, t)) return !1;
                                        return !0
                                    }(t, (function (t) {
                                        return Boolean(t.error)
                                    }))
                                }(n) && e(!0) : (F(n, (function (t) {
                                    t.forceMinPriority(r.transport.priority)
                                })), e(null, r))
                            }
                        }))
                    }, t
                }();

            function Kt(t) {
                t.error || t.aborted || (t.abort(), t.aborted = !0)
            }
            var Zt = function () {
                function t(t, e, n) {
                    this.strategy = t, this.transports = e, this.ttl = n.ttl || 18e5, this.usingTLS = n.useTLS, this.timeline = n.timeline
                }
                return t.prototype.isSupported = function () {
                    return this.strategy.isSupported()
                }, t.prototype.connect = function (t, e) {
                    var n = this.usingTLS,
                        o = function (t) {
                            var e = _e.getLocalStorage();
                            if (e) try {
                                var n = e[te(t)];
                                if (n) return JSON.parse(n)
                            } catch (e) {
                                ee(t)
                            }
                            return null
                        }(n),
                        r = [this.strategy];
                    if (o && o.timestamp + this.ttl >= M.now()) {
                        var i = this.transports[o.transport];
                        i && (this.timeline.info({
                            cached: !0,
                            transport: o.transport,
                            latency: o.latency
                        }), r.push(new Yt([i], {
                            timeout: 2 * o.latency + 1e3,
                            failFast: !0
                        })))
                    }
                    var s = M.now(),
                        c = r.pop().connect(t, (function o(i, a) {
                            i ? (ee(n), r.length > 0 ? (s = M.now(), c = r.pop().connect(t, o)) : e(i)) : (! function (t, e, n) {
                                var o = _e.getLocalStorage();
                                if (o) try {
                                    o[te(t)] = Y({
                                        timestamp: M.now(),
                                        transport: e,
                                        latency: n
                                    })
                                } catch (t) {}
                            }(n, a.transport.name, M.now() - s), e(null, a))
                        }));
                    return {
                        abort: function () {
                            c.abort()
                        }, forceMinPriority: function (e) {
                            t = e, c && c.forceMinPriority(e)
                        }
                    }
                }, t
            }();

            function te(t) {
                return "pusherTransport" + (t ? "TLS" : "NonTLS")
            }

            function ee(t) {
                var e = _e.getLocalStorage();
                if (e) try {
                    delete e[te(t)]
                } catch (t) {}
            }
            var ne = function () {
                    function t(t, e) {
                        var n = e.delay;
                        this.strategy = t, this.options = {
                            delay: n
                        }
                    }
                    return t.prototype.isSupported = function () {
                        return this.strategy.isSupported()
                    }, t.prototype.connect = function (t, e) {
                        var n, o = this.strategy,
                            r = new I(this.options.delay, (function () {
                                n = o.connect(t, e)
                            }));
                        return {
                            abort: function () {
                                r.ensureAborted(), n && n.abort()
                            }, forceMinPriority: function (e) {
                                t = e, n && n.forceMinPriority(e)
                            }
                        }
                    }, t
                }(),
                oe = function () {
                    function t(t, e, n) {
                        this.test = t, this.trueBranch = e, this.falseBranch = n
                    }
                    return t.prototype.isSupported = function () {
                        return (this.test() ? this.trueBranch : this.falseBranch).isSupported()
                    }, t.prototype.connect = function (t, e) {
                        return (this.test() ? this.trueBranch : this.falseBranch).connect(t, e)
                    }, t
                }(),
                re = function () {
                    function t(t) {
                        this.strategy = t
                    }
                    return t.prototype.isSupported = function () {
                        return this.strategy.isSupported()
                    }, t.prototype.connect = function (t, e) {
                        var n = this.strategy.connect(t, (function (t, o) {
                            o && n.abort(), e(t, o)
                        }));
                        return n
                    }, t
                }();

            function ie(t) {
                return function () {
                    return t.isSupported()
                }
            }
            var se, ce = function (t, e, n) {
                    var o = {};

                    function r(e, r, i, s, c) {
                        var a = n(t, e, r, i, s, c);
                        return o[e] = a, a
                    }
                    var i, s = Object.assign({}, e, {
                            hostNonTLS: t.wsHost + ":" + t.wsPort,
                            hostTLS: t.wsHost + ":" + t.wssPort,
                            httpPath: t.wsPath
                        }),
                        c = Object.assign({}, s, {
                            useTLS: !0
                        }),
                        a = Object.assign({}, e, {
                            hostNonTLS: t.httpHost + ":" + t.httpPort,
                            hostTLS: t.httpHost + ":" + t.httpsPort,
                            httpPath: t.httpPath
                        }),
                        u = {
                            loop: !0,
                            timeout: 15e3,
                            timeoutLimit: 6e4
                        },
                        h = new Vt({
                            lives: 2,
                            minPingDelay: 1e4,
                            maxPingDelay: t.activityTimeout
                        }),
                        p = new Vt({
                            lives: 2,
                            minPingDelay: 1e4,
                            maxPingDelay: t.activityTimeout
                        }),
                        l = r("ws", "ws", 3, s, h),
                        f = r("wss", "ws", 3, c, h),
                        d = r("sockjs", "sockjs", 1, a),
                        y = r("xhr_streaming", "xhr_streaming", 1, a, p),
                        g = r("xdr_streaming", "xdr_streaming", 1, a, p),
                        v = r("xhr_polling", "xhr_polling", 1, a),
                        b = r("xdr_polling", "xdr_polling", 1, a),
                        m = new Yt([l], u),
                        w = new Yt([f], u),
                        _ = new Yt([d], u),
                        S = new Yt([new oe(ie(y), y, g)], u),
                        k = new Yt([new oe(ie(v), v, b)], u),
                        C = new Yt([new oe(ie(S), new $t([S, new ne(k, {
                            delay: 4e3
                        })]), k)], u),
                        T = new oe(ie(C), C, _);
                    return i = e.useTLS ? new $t([m, new ne(T, {
                        delay: 2e3
                    })]) : new $t([m, new ne(w, {
                        delay: 2e3
                    }), new ne(T, {
                        delay: 5e3
                    })]), new Zt(new re(new oe(ie(l), i, T)), o, {
                        ttl: 18e5,
                        timeline: e.timeline,
                        useTLS: e.useTLS
                    })
                },
                ae = {
                    getRequest: function (t) {
                        var e = new window.XDomainRequest;
                        return e.ontimeout = function () {
                            t.emit("error", new d), t.close()
                        }, e.onerror = function (e) {
                            t.emit("error", e), t.close()
                        }, e.onprogress = function () {
                            e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText)
                        }, e.onload = function () {
                            e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText), t.emit("finished", 200), t.close()
                        }, e
                    }, abortRequest: function (t) {
                        t.ontimeout = t.onerror = t.onprogress = t.onload = null, t.abort()
                    }
                },
                ue = function () {
                    var t = function (e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function (e, n) {
                        function o() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                    }
                }(),
                he = function (t) {
                    function e(e, n, o) {
                        var r = t.call(this) || this;
                        return r.hooks = e, r.method = n, r.url = o, r
                    }
                    return ue(e, t), e.prototype.start = function (t) {
                        var e = this;
                        this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = function () {
                            e.close()
                        }, _e.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t)
                    }, e.prototype.close = function () {
                        this.unloader && (_e.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null)
                    }, e.prototype.onChunk = function (t, e) {
                        for (;;) {
                            var n = this.advanceBuffer(e);
                            if (!n) break;
                            this.emit("chunk", {
                                status: t,
                                data: n
                            })
                        }
                        this.isBufferTooLong(e) && this.emit("buffer_too_long")
                    }, e.prototype.advanceBuffer = function (t) {
                        var e = t.slice(this.position),
                            n = e.indexOf("\n");
                        return -1 !== n ? (this.position += n + 1, e.slice(0, n)) : null
                    }, e.prototype.isBufferTooLong = function (t) {
                        return this.position === t.length && t.length > 262144
                    }, e
                }(ut);
            ! function (t) {
                t[t.CONNECTING = 0] = "CONNECTING", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 3] = "CLOSED"
            }(se || (se = {}));
            var pe = se,
                le = 1;

            function fe(t) {
                var e = -1 === t.indexOf("?") ? "?" : "&";
                return t + e + "t=" + +new Date + "&n=" + le++
            }

            function de(t) {
                return Math.floor(Math.random() * t)
            }
            var ye, ge = function () {
                    function t(t, e) {
                        this.hooks = t, this.session = de(1e3) + "/" + function (t) {
                            for (var e = [], n = 0; n < t; n++) e.push(de(32).toString(32));
                            return e.join("")
                        }(8), this.location = function (t) {
                            var e = /([^\?]*)\/*(\??.*)/.exec(t);
                            return {
                                base: e[1],
                                queryString: e[2]
                            }
                        }(e), this.readyState = pe.CONNECTING, this.openStream()
                    }
                    return t.prototype.send = function (t) {
                        return this.sendRaw(JSON.stringify([t]))
                    }, t.prototype.ping = function () {
                        this.hooks.sendHeartbeat(this)
                    }, t.prototype.close = function (t, e) {
                        this.onClose(t, e, !0)
                    }, t.prototype.sendRaw = function (t) {
                        if (this.readyState !== pe.OPEN) return !1;
                        try {
                            return _e.createSocketRequest("POST", fe((e = this.location, n = this.session, e.base + "/" + n + "/xhr_send"))).start(t), !0
                        } catch (t) {
                            return !1
                        }
                        var e, n
                    }, t.prototype.reconnect = function () {
                        this.closeStream(), this.openStream()
                    }, t.prototype.onClose = function (t, e, n) {
                        this.closeStream(), this.readyState = pe.CLOSED, this.onclose && this.onclose({
                            code: t,
                            reason: e,
                            wasClean: n
                        })
                    }, t.prototype.onChunk = function (t) {
                        var e;
                        if (200 === t.status) switch (this.readyState === pe.OPEN && this.onActivity(), t.data.slice(0, 1)) {
                            case "o":
                                e = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(e);
                                break;
                            case "a":
                                e = JSON.parse(t.data.slice(1) || "[]");
                                for (var n = 0; n < e.length; n++) this.onEvent(e[n]);
                                break;
                            case "m":
                                e = JSON.parse(t.data.slice(1) || "null"), this.onEvent(e);
                                break;
                            case "h":
                                this.hooks.onHeartbeat(this);
                                break;
                            case "c":
                                e = JSON.parse(t.data.slice(1) || "[]"), this.onClose(e[0], e[1], !0)
                        }
                    }, t.prototype.onOpen = function (t) {
                        var e, n, o;
                        this.readyState === pe.CONNECTING ? (t && t.hostname && (this.location.base = (e = this.location.base, n = t.hostname, (o = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(e))[1] + n + o[3])), this.readyState = pe.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0)
                    }, t.prototype.onEvent = function (t) {
                        this.readyState === pe.OPEN && this.onmessage && this.onmessage({
                            data: t
                        })
                    }, t.prototype.onActivity = function () {
                        this.onactivity && this.onactivity()
                    }, t.prototype.onError = function (t) {
                        this.onerror && this.onerror(t)
                    }, t.prototype.openStream = function () {
                        var t = this;
                        this.stream = _e.createSocketRequest("POST", fe(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (function (e) {
                            t.onChunk(e)
                        })), this.stream.bind("finished", (function (e) {
                            t.hooks.onFinished(t, e)
                        })), this.stream.bind("buffer_too_long", (function () {
                            t.reconnect()
                        }));
                        try {
                            this.stream.start()
                        } catch (e) {
                            M.defer((function () {
                                t.onError(e), t.onClose(1006, "Could not start streaming", !1)
                            }))
                        }
                    }, t.prototype.closeStream = function () {
                        this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null)
                    }, t
                }(),
                ve = {
                    getReceiveURL: function (t, e) {
                        return t.base + "/" + e + "/xhr_streaming" + t.queryString
                    }, onHeartbeat: function (t) {
                        t.sendRaw("[]")
                    }, sendHeartbeat: function (t) {
                        t.sendRaw("[]")
                    }, onFinished: function (t, e) {
                        t.onClose(1006, "Connection interrupted (" + e + ")", !1)
                    }
                },
                be = {
                    getReceiveURL: function (t, e) {
                        return t.base + "/" + e + "/xhr" + t.queryString
                    }, onHeartbeat: function () {}, sendHeartbeat: function (t) {
                        t.sendRaw("[]")
                    }, onFinished: function (t, e) {
                        200 === e ? t.reconnect() : t.onClose(1006, "Connection interrupted (" + e + ")", !1)
                    }
                },
                me = {
                    getRequest: function (t) {
                        var e = new(_e.getXHRAPI());
                        return e.onreadystatechange = e.onprogress = function () {
                            switch (e.readyState) {
                                case 3:
                                    e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText);
                                    break;
                                case 4:
                                    e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText), t.emit("finished", e.status), t.close()
                            }
                        }, e
                    }, abortRequest: function (t) {
                        t.onreadystatechange = null, t.abort()
                    }
                },
                we = {
                    createStreamingSocket: function (t) {
                        return this.createSocket(ve, t)
                    }, createPollingSocket: function (t) {
                        return this.createSocket(be, t)
                    }, createSocket: function (t, e) {
                        return new ge(t, e)
                    }, createXHR: function (t, e) {
                        return this.createRequest(me, t, e)
                    }, createRequest: function (t, e, n) {
                        return new he(t, e, n)
                    }, createXDR: function (t, e) {
                        return this.createRequest(ae, t, e)
                    }
                },
                _e = {
                    nextAuthCallbackID: 1,
                    auth_callbacks: {},
                    ScriptReceivers: i,
                    DependenciesReceivers: a,
                    getDefaultStrategy: ce,
                    Transports: kt,
                    transportConnectionInitializer: function () {
                        var t = this;
                        t.timeline.info(t.buildTimelineMessage({
                            transport: t.name + (t.options.useTLS ? "s" : "")
                        })), t.hooks.isInitialized() ? t.changeState("initialized") : t.hooks.file ? (t.changeState("initializing"), u.load(t.hooks.file, {
                            useTLS: t.options.useTLS
                        }, (function (e, n) {
                            t.hooks.isInitialized() ? (t.changeState("initialized"), n(!0)) : (e && t.onError(e), t.onClose(), n(!1))
                        }))) : t.onClose()
                    }, HTTPFactory: we,
                    TimelineTransport: et,
                    getXHRAPI: function () {
                        return window.XMLHttpRequest
                    }, getWebSocketAPI: function () {
                        return window.WebSocket || window.MozWebSocket
                    }, setup: function (t) {
                        var e = this;
                        window.Pusher = t;
                        var n = function () {
                            e.onDocumentBody(t.ready)
                        };
                        window.JSON ? n() : u.load("json2", {}, n)
                    }, getDocument: function () {
                        return document
                    }, getProtocol: function () {
                        return this.getDocument().location.protocol
                    }, getAuthorizers: function () {
                        return {
                            ajax: _,
                            jsonp: K
                        }
                    }, onDocumentBody: function (t) {
                        var e = this;
                        document.body ? t() : setTimeout((function () {
                            e.onDocumentBody(t)
                        }), 0)
                    }, createJSONPRequest: function (t, e) {
                        return new tt(t, e)
                    }, createScriptRequest: function (t) {
                        return new Z(t)
                    }, getLocalStorage: function () {
                        try {
                            return window.localStorage
                        } catch (t) {
                            return
                        }
                    }, createXHR: function () {
                        return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR()
                    }, createXMLHttpRequest: function () {
                        return new(this.getXHRAPI())
                    }, createMicrosoftXHR: function () {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }, getNetwork: function () {
                        return Tt
                    }, createWebSocket: function (t) {
                        return new(this.getWebSocketAPI())(t)
                    }, createSocketRequest: function (t, e) {
                        if (this.isXHRSupported()) return this.HTTPFactory.createXHR(t, e);
                        if (this.isXDRSupported(0 === e.indexOf("https:"))) return this.HTTPFactory.createXDR(t, e);
                        throw "Cross-origin HTTP requests are not supported"
                    }, isXHRSupported: function () {
                        var t = this.getXHRAPI();
                        return Boolean(t) && void 0 !== (new t).withCredentials
                    }, isXDRSupported: function (t) {
                        var e = t ? "https:" : "http:",
                            n = this.getProtocol();
                        return Boolean(window.XDomainRequest) && n === e
                    }, addUnloadListener: function (t) {
                        void 0 !== window.addEventListener ? window.addEventListener("unload", t, !1) : void 0 !== window.attachEvent && window.attachEvent("onunload", t)
                    }, removeUnloadListener: function (t) {
                        void 0 !== window.addEventListener ? window.removeEventListener("unload", t, !1) : void 0 !== window.detachEvent && window.detachEvent("onunload", t)
                    }
                };
            ! function (t) {
                t[t.ERROR = 3] = "ERROR", t[t.INFO = 6] = "INFO", t[t.DEBUG = 7] = "DEBUG"
            }(ye || (ye = {}));
            var Se = ye,
                ke = function () {
                    function t(t, e, n) {
                        this.key = t, this.session = e, this.events = [], this.options = n || {}, this.sent = 0, this.uniqueID = 0
                    }
                    return t.prototype.log = function (t, e) {
                        t <= this.options.level && (this.events.push(H({}, e, {
                            timestamp: M.now()
                        })), this.options.limit && this.events.length > this.options.limit && this.events.shift())
                    }, t.prototype.error = function (t) {
                        this.log(Se.ERROR, t)
                    }, t.prototype.info = function (t) {
                        this.log(Se.INFO, t)
                    }, t.prototype.debug = function (t) {
                        this.log(Se.DEBUG, t)
                    }, t.prototype.isEmpty = function () {
                        return 0 === this.events.length
                    }, t.prototype.send = function (t, e) {
                        var n = this,
                            o = H({
                                session: this.session,
                                bundle: this.sent + 1,
                                key: this.key,
                                lib: "js",
                                version: this.options.version,
                                cluster: this.options.cluster,
                                features: this.options.features,
                                timeline: this.events
                            }, this.options.params);
                        return this.events = [], t(o, (function (t, o) {
                            t || n.sent++, e && e(t, o)
                        })), !0
                    }, t.prototype.generateUniqueID = function () {
                        return this.uniqueID++, this.uniqueID
                    }, t
                }(),
                Ce = function () {
                    function t(t, e, n, o) {
                        this.name = t, this.priority = e, this.transport = n, this.options = o || {}
                    }
                    return t.prototype.isSupported = function () {
                        return this.transport.isSupported({
                            useTLS: this.options.useTLS
                        })
                    }, t.prototype.connect = function (t, e) {
                        var n = this;
                        if (!this.isSupported()) return Te(new m, e);
                        if (this.priority < t) return Te(new y, e);
                        var o = !1,
                            r = this.transport.createConnection(this.name, this.priority, this.options.key, this.options),
                            i = null,
                            s = function () {
                                r.unbind("initialized", s), r.connect()
                            },
                            c = function () {
                                i = Qt.createHandshake(r, (function (t) {
                                    o = !0, h(), e(null, t)
                                }))
                            },
                            a = function (t) {
                                h(), e(t)
                            },
                            u = function () {
                                var t;
                                h(), t = Y(r), e(new g(t))
                            },
                            h = function () {
                                r.unbind("initialized", s), r.unbind("open", c), r.unbind("error", a), r.unbind("closed", u)
                            };
                        return r.bind("initialized", s), r.bind("open", c), r.bind("error", a), r.bind("closed", u), r.initialize(), {
                            abort: function () {
                                o || (h(), i ? i.close() : r.close())
                            }, forceMinPriority: function (t) {
                                o || n.priority < t && (i ? i.close() : r.close())
                            }
                        }
                    }, t
                }();

            function Te(t, e) {
                return M.defer((function () {
                    e(t)
                })), {
                    abort: function () {}, forceMinPriority: function () {}
                }
            }
            var Pe = _e.Transports,
                Oe = function (t, e, n, o, r, i) {
                    var s, c = Pe[n];
                    if (!c) throw new b(n);
                    return !(t.enabledTransports && -1 === B(t.enabledTransports, e) || t.disabledTransports && -1 !== B(t.disabledTransports, e)) ? (r = Object.assign({
                        ignoreNullOrigin: t.ignoreNullOrigin
                    }, r), s = new Ce(e, o, i ? i.getAssistant(c) : c, r)) : s = Ee, s
                },
                Ee = {
                    isSupported: function () {
                        return !1
                    }, connect: function (t, e) {
                        var n = M.defer((function () {
                            e(new m)
                        }));
                        return {
                            abort: function () {
                                n.ensureAborted()
                            }, forceMinPriority: function () {}
                        }
                    }
                };

            function Le(t) {
                return t.httpHost ? t.httpHost : t.cluster ? "sockjs-" + t.cluster + ".pusher.com" : s.httpHost
            }

            function xe(t) {
                return t.wsHost ? t.wsHost : t.cluster ? Ae(t.cluster) : Ae(s.cluster)
            }

            function Ae(t) {
                return "ws-" + t + ".pusher.com"
            }

            function Re(t) {
                return "https:" === _e.getProtocol() || !1 !== t.forceTLS
            }

            function je(t) {
                return "enableStats" in t ? t.enableStats : "disableStats" in t && !t.disableStats
            }
            var De = function () {
                    function t(e, n) {
                        var o, r, i = this;
                        if (function (t) {
                            if (null == t) throw "You must pass your app key when you instantiate Pusher."
                        }(e), !(n = n || {}).cluster && !n.wsHost && !n.httpHost) {
                            var c = p("javascriptQuickStart");
                            $.warn("You should always specify a cluster when connecting. " + c)
                        }
                        "disableStats" in n && $.warn("The disableStats option is deprecated in favor of enableStats"), this.key = e, this.config = (r = {
                            activityTimeout: (o = n).activityTimeout || s.activityTimeout,
                            authEndpoint: o.authEndpoint || s.authEndpoint,
                            authTransport: o.authTransport || s.authTransport,
                            cluster: o.cluster || s.cluster,
                            httpPath: o.httpPath || s.httpPath,
                            httpPort: o.httpPort || s.httpPort,
                            httpsPort: o.httpsPort || s.httpsPort,
                            pongTimeout: o.pongTimeout || s.pongTimeout,
                            statsHost: o.statsHost || s.stats_host,
                            unavailableTimeout: o.unavailableTimeout || s.unavailableTimeout,
                            wsPath: o.wsPath || s.wsPath,
                            wsPort: o.wsPort || s.wsPort,
                            wssPort: o.wssPort || s.wssPort,
                            enableStats: je(o),
                            httpHost: Le(o),
                            useTLS: Re(o),
                            wsHost: xe(o)
                        }, "auth" in o && (r.auth = o.auth), "authorizer" in o && (r.authorizer = o.authorizer), "disabledTransports" in o && (r.disabledTransports = o.disabledTransports), "enabledTransports" in o && (r.enabledTransports = o.enabledTransports), "ignoreNullOrigin" in o && (r.ignoreNullOrigin = o.ignoreNullOrigin), "timelineParams" in o && (r.timelineParams = o.timelineParams), "nacl" in o && (r.nacl = o.nacl), r), this.channels = Qt.createChannels(), this.global_emitter = new ut, this.sessionID = Math.floor(1e9 * Math.random()), this.timeline = new ke(this.key, this.sessionID, {
                            cluster: this.config.cluster,
                            features: t.getClientFeatures(),
                            params: this.config.timelineParams || {}, limit: 50,
                            level: Se.INFO,
                            version: s.VERSION
                        }), this.config.enableStats && (this.timelineSender = Qt.createTimelineSender(this.timeline, {
                            host: this.config.statsHost,
                            path: "/timeline/v2/" + _e.TimelineTransport.name
                        }));
                        this.connection = Qt.createConnectionManager(this.key, {
                            getStrategy: function (t) {
                                return _e.getDefaultStrategy(i.config, t, Oe)
                            }, timeline: this.timeline,
                            activityTimeout: this.config.activityTimeout,
                            pongTimeout: this.config.pongTimeout,
                            unavailableTimeout: this.config.unavailableTimeout,
                            useTLS: Boolean(this.config.useTLS)
                        }), this.connection.bind("connected", (function () {
                            i.subscribeAll(), i.timelineSender && i.timelineSender.send(i.connection.isUsingTLS())
                        })), this.connection.bind("message", (function (t) {
                            var e = 0 === t.event.indexOf("pusher_internal:");
                            if (t.channel) {
                                var n = i.channel(t.channel);
                                n && n.handleEvent(t)
                            }
                            e || i.global_emitter.emit(t.event, t.data)
                        })), this.connection.bind("connecting", (function () {
                            i.channels.disconnect()
                        })), this.connection.bind("disconnected", (function () {
                            i.channels.disconnect()
                        })), this.connection.bind("error", (function (t) {
                            $.warn(t)
                        })), t.instances.push(this), this.timeline.info({
                            instances: t.instances.length
                        }), t.isReady && this.connect()
                    }
                    return t.ready = function () {
                        t.isReady = !0;
                        for (var e = 0, n = t.instances.length; e < n; e++) t.instances[e].connect()
                    }, t.getClientFeatures = function () {
                        return U(W({
                            ws: _e.Transports.ws
                        }, (function (t) {
                            return t.isSupported({})
                        })))
                    }, t.prototype.channel = function (t) {
                        return this.channels.find(t)
                    }, t.prototype.allChannels = function () {
                        return this.channels.all()
                    }, t.prototype.connect = function () {
                        if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                            var t = this.connection.isUsingTLS(),
                                e = this.timelineSender;
                            this.timelineSenderTimer = new N(6e4, (function () {
                                e.send(t)
                            }))
                        }
                    }, t.prototype.disconnect = function () {
                        this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null)
                    }, t.prototype.bind = function (t, e, n) {
                        return this.global_emitter.bind(t, e, n), this
                    }, t.prototype.unbind = function (t, e, n) {
                        return this.global_emitter.unbind(t, e, n), this
                    }, t.prototype.bind_global = function (t) {
                        return this.global_emitter.bind_global(t), this
                    }, t.prototype.unbind_global = function (t) {
                        return this.global_emitter.unbind_global(t), this
                    }, t.prototype.unbind_all = function (t) {
                        return this.global_emitter.unbind_all(), this
                    }, t.prototype.subscribeAll = function () {
                        var t;
                        for (t in this.channels.channels) this.channels.channels.hasOwnProperty(t) && this.subscribe(t)
                    }, t.prototype.subscribe = function (t) {
                        var e = this.channels.add(t, this);
                        return e.subscriptionPending && e.subscriptionCancelled ? e.reinstateSubscription() : e.subscriptionPending || "connected" !== this.connection.state || e.subscribe(), e
                    }, t.prototype.unsubscribe = function (t) {
                        var e = this.channels.find(t);
                        e && e.subscriptionPending ? e.cancelSubscription() : (e = this.channels.remove(t)) && e.subscribed && e.unsubscribe()
                    }, t.prototype.send_event = function (t, e, n) {
                        return this.connection.send_event(t, e, n)
                    }, t.prototype.shouldUseTLS = function () {
                        return this.config.useTLS
                    }, t.instances = [], t.isReady = !1, t.logToConsole = !1, t.Runtime = _e, t.ScriptReceivers = _e.ScriptReceivers, t.DependenciesReceivers = _e.DependenciesReceivers, t.auth_callbacks = _e.auth_callbacks, t
                }(),
                Ie = e.default = De;
            _e.setup(De)
        }
    ])
}));
