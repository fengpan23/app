(function() {
    function t(t) {
        function e(e, n, i, o, a, s) {
            for (; a >= 0 && s > a; a += t) {
                var r = o ? o[a] : a;
                i = n(i, e[r], r, e)
            }
            return i
        }
        return function(n, i, o, a) {
            i = w(i, a, 4);
            var s = !I(n) && b.keys(n),
            r = (s || n).length,
            c = t > 0 ? 0 : r - 1;
            return arguments.length < 3 && (o = n[s ? s[c] : c], c += t),
            e(n, i, o, s, c, r)
        }
    }
    function e(t) {
        return function(e, n, i) {
            n = y(n, i);
            for (var o = E(e), a = t > 0 ? 0 : o - 1; a >= 0 && o > a; a += t) if (n(e[a], a, e)) return a;
            return - 1
        }
    }
    function n(t, e, n) {
        return function(i, o, a) {
            var s = 0,
            r = E(i);
            if ("number" == typeof a) t > 0 ? s = a >= 0 ? a: Math.max(a + r, s) : r = a >= 0 ? Math.min(a + 1, r) : a + r + 1;
            else if (n && a && r) return a = n(i, o),
            i[a] === o ? a: -1;
            if (o !== o) return a = e(d.call(i, s, r), b.isNaN),
            a >= 0 ? a + s: -1;
            for (a = t > 0 ? s: r - 1; a >= 0 && r > a; a += t) if (i[a] === o) return a;
            return - 1
        }
    }
    function i(t, e) {
        var n = O.length,
        i = t.constructor,
        o = b.isFunction(i) && i.prototype || r,
        a = "constructor";
        for (b.has(t, a) && !b.contains(e, a) && e.push(a); n--;) a = O[n],
        a in t && t[a] !== o[a] && !b.contains(e, a) && e.push(a)
    }
    var o = this,
    a = o._,
    s = Array.prototype,
    r = Object.prototype,
    c = Function.prototype,
    l = s.push,
    d = s.slice,
    u = r.toString,
    h = r.hasOwnProperty,
    p = Array.isArray,
    f = Object.keys,
    g = c.bind,
    v = Object.create,
    m = function() {},
    b = function(t) {
        return t instanceof b ? t: this instanceof b ? void(this._wrapped = t) : new b(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = b), exports._ = b) : o._ = b,
    b.VERSION = "1.8.3";
    var w = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            };
        case 3:
            return function(n, i, o) {
                return t.call(e, n, i, o)
            };
        case 4:
            return function(n, i, o, a) {
                return t.call(e, n, i, o, a)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    },
    y = function(t, e, n) {
        return null == t ? b.identity: b.isFunction(t) ? w(t, e, n) : b.isObject(t) ? b.matcher(t) : b.property(t)
    };
    b.iteratee = function(t, e) {
        return y(t, e, 1 / 0)
    };
    var k = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (2 > i || null == n) return n;
            for (var o = 1; i > o; o++) for (var a = arguments[o], s = t(a), r = s.length, c = 0; r > c; c++) {
                var l = s[c];
                e && void 0 !== n[l] || (n[l] = a[l])
            }
            return n
        }
    },
    _ = function(t) {
        if (!b.isObject(t)) return {};
        if (v) return v(t);
        m.prototype = t;
        var e = new m;
        return m.prototype = null,
        e
    },
    x = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    },
    T = Math.pow(2, 53) - 1,
    E = x("length"),
    I = function(t) {
        var e = E(t);
        return "number" == typeof e && e >= 0 && T >= e
    };
    b.each = b.forEach = function(t, e, n) {
        e = w(e, n);
        var i, o;
        if (I(t)) for (i = 0, o = t.length; o > i; i++) e(t[i], i, t);
        else {
            var a = b.keys(t);
            for (i = 0, o = a.length; o > i; i++) e(t[a[i]], a[i], t)
        }
        return t
    },
    b.map = b.collect = function(t, e, n) {
        e = y(e, n);
        for (var i = !I(t) && b.keys(t), o = (i || t).length, a = Array(o), s = 0; o > s; s++) {
            var r = i ? i[s] : s;
            a[s] = e(t[r], r, t)
        }
        return a
    },
    b.reduce = b.foldl = b.inject = t(1),
    b.reduceRight = b.foldr = t( - 1),
    b.find = b.detect = function(t, e, n) {
        var i;
        return i = I(t) ? b.findIndex(t, e, n) : b.findKey(t, e, n),
        void 0 !== i && -1 !== i ? t[i] : void 0
    },
    b.filter = b.select = function(t, e, n) {
        var i = [];
        return e = y(e, n),
        b.each(t,
        function(t, n, o) {
            e(t, n, o) && i.push(t)
        }),
        i
    },
    b.reject = function(t, e, n) {
        return b.filter(t, b.negate(y(e)), n)
    },
    b.every = b.all = function(t, e, n) {
        e = y(e, n);
        for (var i = !I(t) && b.keys(t), o = (i || t).length, a = 0; o > a; a++) {
            var s = i ? i[a] : a;
            if (!e(t[s], s, t)) return ! 1
        }
        return ! 0
    },
    b.some = b.any = function(t, e, n) {
        e = y(e, n);
        for (var i = !I(t) && b.keys(t), o = (i || t).length, a = 0; o > a; a++) {
            var s = i ? i[a] : a;
            if (e(t[s], s, t)) return ! 0
        }
        return ! 1
    },
    b.contains = b.includes = b.include = function(t, e, n, i) {
        return I(t) || (t = b.values(t)),
        ("number" != typeof n || i) && (n = 0),
        b.indexOf(t, e, n) >= 0
    },
    b.invoke = function(t, e) {
        var n = d.call(arguments, 2),
        i = b.isFunction(e);
        return b.map(t,
        function(t) {
            var o = i ? e: t[e];
            return null == o ? o: o.apply(t, n)
        })
    },
    b.pluck = function(t, e) {
        return b.map(t, b.property(e))
    },
    b.where = function(t, e) {
        return b.filter(t, b.matcher(e))
    },
    b.findWhere = function(t, e) {
        return b.find(t, b.matcher(e))
    },
    b.max = function(t, e, n) {
        var i, o, a = -(1 / 0),
        s = -(1 / 0);
        if (null == e && null != t) {
            t = I(t) ? t: b.values(t);
            for (var r = 0,
            c = t.length; c > r; r++) i = t[r],
            i > a && (a = i)
        } else e = y(e, n),
        b.each(t,
        function(t, n, i) {
            o = e(t, n, i),
            (o > s || o === -(1 / 0) && a === -(1 / 0)) && (a = t, s = o)
        });
        return a
    },
    b.min = function(t, e, n) {
        var i, o, a = 1 / 0,
        s = 1 / 0;
        if (null == e && null != t) {
            t = I(t) ? t: b.values(t);
            for (var r = 0,
            c = t.length; c > r; r++) i = t[r],
            a > i && (a = i)
        } else e = y(e, n),
        b.each(t,
        function(t, n, i) {
            o = e(t, n, i),
            (s > o || o === 1 / 0 && a === 1 / 0) && (a = t, s = o)
        });
        return a
    },
    b.shuffle = function(t) {
        for (var e, n = I(t) ? t: b.values(t), i = n.length, o = Array(i), a = 0; i > a; a++) e = b.random(0, a),
        e !== a && (o[a] = o[e]),
        o[e] = n[a];
        return o
    },
    b.sample = function(t, e, n) {
        return null == e || n ? (I(t) || (t = b.values(t)), t[b.random(t.length - 1)]) : b.shuffle(t).slice(0, Math.max(0, e))
    },
    b.sortBy = function(t, e, n) {
        return e = y(e, n),
        b.pluck(b.map(t,
        function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
            i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return - 1
            }
            return t.index - e.index
        }), "value")
    };
    var C = function(t) {
        return function(e, n, i) {
            var o = {};
            return n = y(n, i),
            b.each(e,
            function(i, a) {
                var s = n(i, a, e);
                t(o, i, s)
            }),
            o
        }
    };
    b.groupBy = C(function(t, e, n) {
        b.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    b.indexBy = C(function(t, e, n) {
        t[n] = e
    }),
    b.countBy = C(function(t, e, n) {
        b.has(t, n) ? t[n]++:t[n] = 1
    }),
    b.toArray = function(t) {
        return t ? b.isArray(t) ? d.call(t) : I(t) ? b.map(t, b.identity) : b.values(t) : []
    },
    b.size = function(t) {
        return null == t ? 0 : I(t) ? t.length: b.keys(t).length
    },
    b.partition = function(t, e, n) {
        e = y(e, n);
        var i = [],
        o = [];
        return b.each(t,
        function(t, n, a) { (e(t, n, a) ? i: o).push(t)
        }),
        [i, o]
    },
    b.first = b.head = b.take = function(t, e, n) {
        return null != t ? null == e || n ? t[0] : b.initial(t, t.length - e) : void 0
    },
    b.initial = function(t, e, n) {
        return d.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    },
    b.last = function(t, e, n) {
        return null != t ? null == e || n ? t[t.length - 1] : b.rest(t, Math.max(0, t.length - e)) : void 0
    },
    b.rest = b.tail = b.drop = function(t, e, n) {
        return d.call(t, null == e || n ? 1 : e)
    },
    b.compact = function(t) {
        return b.filter(t, b.identity)
    };
    var S = function(t, e, n, i) {
        for (var o = [], a = 0, s = i || 0, r = E(t); r > s; s++) {
            var c = t[s];
            if (I(c) && (b.isArray(c) || b.isArguments(c))) {
                e || (c = S(c, e, n));
                var l = 0,
                d = c.length;
                for (o.length += d; d > l;) o[a++] = c[l++]
            } else n || (o[a++] = c)
        }
        return o
    };
    b.flatten = function(t, e) {
        return S(t, e, !1)
    },
    b.without = function(t) {
        return b.difference(t, d.call(arguments, 1))
    },
    b.uniq = b.unique = function(t, e, n, i) {
        b.isBoolean(e) || (i = n, n = e, e = !1),
        null != n && (n = y(n, i));
        for (var o = [], a = [], s = 0, r = E(t); r > s; s++) {
            var c = t[s],
            l = n ? n(c, s, t) : c;
            e ? (s && a === l || o.push(c), a = l) : n ? b.contains(a, l) || (a.push(l), o.push(c)) : b.contains(o, c) || o.push(c)
        }
        return o
    },
    b.union = function() {
        return b.uniq(S(arguments, !0, !0))
    },
    b.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, o = E(t); o > i; i++) {
            var a = t[i];
            if (!b.contains(e, a)) {
                for (var s = 1; n > s && b.contains(arguments[s], a); s++);
                s === n && e.push(a)
            }
        }
        return e
    },
    b.difference = function(t) {
        var e = S(arguments, !0, !0, 1);
        return b.filter(t,
        function(t) {
            return ! b.contains(e, t)
        })
    },
    b.zip = function() {
        return b.unzip(arguments)
    },
    b.unzip = function(t) {
        for (var e = t && b.max(t, E).length || 0, n = Array(e), i = 0; e > i; i++) n[i] = b.pluck(t, i);
        return n
    },
    b.object = function(t, e) {
        for (var n = {},
        i = 0,
        o = E(t); o > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    },
    b.findIndex = e(1),
    b.findLastIndex = e( - 1),
    b.sortedIndex = function(t, e, n, i) {
        n = y(n, i, 1);
        for (var o = n(e), a = 0, s = E(t); s > a;) {
            var r = Math.floor((a + s) / 2);
            n(t[r]) < o ? a = r + 1 : s = r
        }
        return a
    },
    b.indexOf = n(1, b.findIndex, b.sortedIndex),
    b.lastIndexOf = n( - 1, b.findLastIndex),
    b.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0),
        n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), o = Array(i), a = 0; i > a; a++, t += n) o[a] = t;
        return o
    };
    var A = function(t, e, n, i, o) {
        if (! (i instanceof e)) return t.apply(n, o);
        var a = _(t.prototype),
        s = t.apply(a, o);
        return b.isObject(s) ? s: a
    };
    b.bind = function(t, e) {
        if (g && t.bind === g) return g.apply(t, d.call(arguments, 1));
        if (!b.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = d.call(arguments, 2),
        i = function() {
            return A(t, i, e, this, n.concat(d.call(arguments)))
        };
        return i
    },
    b.partial = function(t) {
        var e = d.call(arguments, 1),
        n = function() {
            for (var i = 0,
            o = e.length,
            a = Array(o), s = 0; o > s; s++) a[s] = e[s] === b ? arguments[i++] : e[s];
            for (; i < arguments.length;) a.push(arguments[i++]);
            return A(t, n, this, this, a)
        };
        return n
    },
    b.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (1 >= i) throw new Error("bindAll must be passed function names");
        for (e = 1; i > e; e++) n = arguments[e],
        t[n] = b.bind(t[n], t);
        return t
    },
    b.memoize = function(t, e) {
        var n = function(i) {
            var o = n.cache,
            a = "" + (e ? e.apply(this, arguments) : i);
            return b.has(o, a) || (o[a] = t.apply(this, arguments)),
            o[a]
        };
        return n.cache = {},
        n
    },
    b.delay = function(t, e) {
        var n = d.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        },
        e)
    },
    b.defer = b.partial(b.delay, b, 1),
    b.throttle = function(t, e, n) {
        var i, o, a, s = null,
        r = 0;
        n || (n = {});
        var c = function() {
            r = n.leading === !1 ? 0 : b.now(),
            s = null,
            a = t.apply(i, o),
            s || (i = o = null)
        };
        return function() {
            var l = b.now();
            r || n.leading !== !1 || (r = l);
            var d = e - (l - r);
            return i = this,
            o = arguments,
            0 >= d || d > e ? (s && (clearTimeout(s), s = null), r = l, a = t.apply(i, o), s || (i = o = null)) : s || n.trailing === !1 || (s = setTimeout(c, d)),
            a
        }
    },
    b.debounce = function(t, e, n) {
        var i, o, a, s, r, c = function() {
            var l = b.now() - s;
            e > l && l >= 0 ? i = setTimeout(c, e - l) : (i = null, n || (r = t.apply(a, o), i || (a = o = null)))
        };
        return function() {
            a = this,
            o = arguments,
            s = b.now();
            var l = n && !i;
            return i || (i = setTimeout(c, e)),
            l && (r = t.apply(a, o), a = o = null),
            r
        }
    },
    b.wrap = function(t, e) {
        return b.partial(e, t)
    },
    b.negate = function(t) {
        return function() {
            return ! t.apply(this, arguments)
        }
    },
    b.compose = function() {
        var t = arguments,
        e = t.length - 1;
        return function() {
            for (var n = e,
            i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
            return i
        }
    },
    b.after = function(t, e) {
        return function() {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    },
    b.before = function(t, e) {
        var n;
        return function() {
            return--t > 0 && (n = e.apply(this, arguments)),
            1 >= t && (e = null),
            n
        }
    },
    b.once = b.partial(b.before, 2);
    var N = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    b.keys = function(t) {
        if (!b.isObject(t)) return [];
        if (f) return f(t);
        var e = [];
        for (var n in t) b.has(t, n) && e.push(n);
        return N && i(t, e),
        e
    },
    b.allKeys = function(t) {
        if (!b.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return N && i(t, e),
        e
    },
    b.values = function(t) {
        for (var e = b.keys(t), n = e.length, i = Array(n), o = 0; n > o; o++) i[o] = t[e[o]];
        return i
    },
    b.mapObject = function(t, e, n) {
        e = y(e, n);
        for (var i, o = b.keys(t), a = o.length, s = {},
        r = 0; a > r; r++) i = o[r],
        s[i] = e(t[i], i, t);
        return s
    },
    b.pairs = function(t) {
        for (var e = b.keys(t), n = e.length, i = Array(n), o = 0; n > o; o++) i[o] = [e[o], t[e[o]]];
        return i
    },
    b.invert = function(t) {
        for (var e = {},
        n = b.keys(t), i = 0, o = n.length; o > i; i++) e[t[n[i]]] = n[i];
        return e
    },
    b.functions = b.methods = function(t) {
        var e = [];
        for (var n in t) b.isFunction(t[n]) && e.push(n);
        return e.sort()
    },
    b.extend = k(b.allKeys),
    b.extendOwn = b.assign = k(b.keys),
    b.findKey = function(t, e, n) {
        e = y(e, n);
        for (var i, o = b.keys(t), a = 0, s = o.length; s > a; a++) if (i = o[a], e(t[i], i, t)) return i
    },
    b.pick = function(t, e, n) {
        var i, o, a = {},
        s = t;
        if (null == s) return a;
        b.isFunction(e) ? (o = b.allKeys(s), i = w(e, n)) : (o = S(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n
        },
        s = Object(s));
        for (var r = 0,
        c = o.length; c > r; r++) {
            var l = o[r],
            d = s[l];
            i(d, l, s) && (a[l] = d)
        }
        return a
    },
    b.omit = function(t, e, n) {
        if (b.isFunction(e)) e = b.negate(e);
        else {
            var i = b.map(S(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return ! b.contains(i, e)
            }
        }
        return b.pick(t, e, n)
    },
    b.defaults = k(b.allKeys, !0),
    b.create = function(t, e) {
        var n = _(t);
        return e && b.extendOwn(n, e),
        n
    },
    b.clone = function(t) {
        return b.isObject(t) ? b.isArray(t) ? t.slice() : b.extend({},
        t) : t
    },
    b.tap = function(t, e) {
        return e(t),
        t
    },
    b.isMatch = function(t, e) {
        var n = b.keys(e),
        i = n.length;
        if (null == t) return ! i;
        for (var o = Object(t), a = 0; i > a; a++) {
            var s = n[a];
            if (e[s] !== o[s] || !(s in o)) return ! 1
        }
        return ! 0
    };
    var P = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof b && (t = t._wrapped),
        e instanceof b && (e = e._wrapped);
        var o = u.call(t);
        if (o !== u.call(e)) return ! 1;
        switch (o) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return + t !== +t ? +e !== +e: 0 === +t ? 1 / +t === 1 / e: +t === +e;
        case "[object Date]":
        case "[object Boolean]":
            return + t === +e
        }
        var a = "[object Array]" === o;
        if (!a) {
            if ("object" != typeof t || "object" != typeof e) return ! 1;
            var s = t.constructor,
            r = e.constructor;
            if (s !== r && !(b.isFunction(s) && s instanceof s && b.isFunction(r) && r instanceof r) && "constructor" in t && "constructor" in e) return ! 1
        }
        n = n || [],
        i = i || [];
        for (var c = n.length; c--;) if (n[c] === t) return i[c] === e;
        if (n.push(t), i.push(e), a) {
            if (c = t.length, c !== e.length) return ! 1;
            for (; c--;) if (!P(t[c], e[c], n, i)) return ! 1
        } else {
            var l, d = b.keys(t);
            if (c = d.length, b.keys(e).length !== c) return ! 1;
            for (; c--;) if (l = d[c], !b.has(e, l) || !P(t[l], e[l], n, i)) return ! 1
        }
        return n.pop(),
        i.pop(),
        !0
    };
    b.isEqual = function(t, e) {
        return P(t, e)
    },
    b.isEmpty = function(t) {
        return null == t ? !0 : I(t) && (b.isArray(t) || b.isString(t) || b.isArguments(t)) ? 0 === t.length: 0 === b.keys(t).length
    },
    b.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    b.isArray = p ||
    function(t) {
        return "[object Array]" === u.call(t)
    },
    b.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    },
    b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
    function(t) {
        b["is" + t] = function(e) {
            return u.call(e) === "[object " + t + "]"
        }
    }),
    b.isArguments(arguments) || (b.isArguments = function(t) {
        return b.has(t, "callee")
    }),
    "function" != typeof / . / &&"object" != typeof Int8Array && (b.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    b.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    b.isNaN = function(t) {
        return b.isNumber(t) && t !== +t
    },
    b.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === u.call(t)
    },
    b.isNull = function(t) {
        return null === t
    },
    b.isUndefined = function(t) {
        return void 0 === t
    },
    b.has = function(t, e) {
        return null != t && h.call(t, e)
    },
    b.noConflict = function() {
        return o._ = a,
        this
    },
    b.identity = function(t) {
        return t
    },
    b.constant = function(t) {
        return function() {
            return t
        }
    },
    b.noop = function() {},
    b.property = x,
    b.propertyOf = function(t) {
        return null == t ?
        function() {}: function(e) {
            return t[e]
        }
    },
    b.matcher = b.matches = function(t) {
        return t = b.extendOwn({},
        t),
        function(e) {
            return b.isMatch(e, t)
        }
    },
    b.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = w(e, n, 1);
        for (var o = 0; t > o; o++) i[o] = e(o);
        return i
    },
    b.random = function(t, e) {
        return null == e && (e = t, t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    },
    b.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var R = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    D = b.invert(R),
    L = function(t) {
        var e = function(e) {
            return t[e]
        },
        n = "(?:" + b.keys(t).join("|") + ")",
        i = RegExp(n),
        o = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "": "" + t,
            i.test(t) ? t.replace(o, e) : t
        }
    };
    b.escape = L(R),
    b.unescape = L(D),
    b.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n),
        b.isFunction(i) ? i.call(t) : i
    };
    var q = 0;
    b.uniqueId = function(t) {
        var e = ++q + "";
        return t ? t + e: e
    },
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var $ = /(.)^/,
    M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    F = /\\|'|\r|\n|\u2028|\u2029/g,
    B = function(t) {
        return "\\" + M[t]
    };
    b.template = function(t, e, n) { ! e && n && (e = n),
        e = b.defaults({},
        e, b.templateSettings);
        var i = RegExp([(e.escape || $).source, (e.interpolate || $).source, (e.evaluate || $).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";
        t.replace(i,
        function(e, n, i, s, r) {
            return a += t.slice(o, r).replace(F, B),
            o = r + e.length,
            n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'": s && (a += "';\n" + s + "\n__p+='"),
            e
        }),
        a += "';\n",
        e.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", a)
        } catch(r) {
            throw r.source = a,
            r
        }
        var c = function(t) {
            return s.call(this, t, b)
        },
        l = e.variable || "obj";
        return c.source = "function(" + l + "){\n" + a + "}",
        c
    },
    b.chain = function(t) {
        var e = b(t);
        return e._chain = !0,
        e
    };
    var W = function(t, e) {
        return t._chain ? b(e).chain() : e
    };
    b.mixin = function(t) {
        b.each(b.functions(t),
        function(e) {
            var n = b[e] = t[e];
            b.prototype[e] = function() {
                var t = [this._wrapped];
                return l.apply(t, arguments),
                W(this, n.apply(b, t))
            }
        })
    },
    b.mixin(b),
    b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var e = s[t];
        b.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            W(this, n)
        }
    }),
    b.each(["concat", "join", "slice"],
    function(t) {
        var e = s[t];
        b.prototype[t] = function() {
            return W(this, e.apply(this._wrapped, arguments))
        }
    }),
    b.prototype.value = function() {
        return this._wrapped
    },
    b.prototype.valueOf = b.prototype.toJSON = b.prototype.value,
    b.prototype.toString = function() {
        return "" + this._wrapped
    },
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return b
    })
}).call(this),
function() {
    "use strict";
    var t = this,
    e = t.Chart,
    n = function(t) {
        this.canvas = t.canvas,
        this.ctx = t;
        var e = function(t, e) {
            return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
        },
        n = this.width = e(t.canvas, "Width"),
        o = this.height = e(t.canvas, "Height");
        t.canvas.width = n,
        t.canvas.height = o;
        var n = this.width = t.canvas.width,
        o = this.height = t.canvas.height;
        return this.aspectRatio = this.width / this.height,
        i.retinaScale(this),
        this
    };
    n.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    },
    n.types = {};
    var i = n.helpers = {},
    o = i.each = function(t, e, n) {
        var i = Array.prototype.slice.call(arguments, 3);
        if (t) if (t.length === +t.length) {
            var o;
            for (o = 0; o < t.length; o++) e.apply(n, [t[o], o].concat(i))
        } else for (var a in t) e.apply(n, [t[a], a].concat(i))
    },
    a = i.clone = function(t) {
        var e = {};
        return o(t,
        function(n, i) {
            t.hasOwnProperty(i) && (e[i] = n)
        }),
        e
    },
    s = i.extend = function(t) {
        return o(Array.prototype.slice.call(arguments, 1),
        function(e) {
            o(e,
            function(n, i) {
                e.hasOwnProperty(i) && (t[i] = n)
            })
        }),
        t
    },
    r = i.merge = function(t, e) {
        var n = Array.prototype.slice.call(arguments, 0);
        return n.unshift({}),
        s.apply(null, n)
    },
    c = i.indexOf = function(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
        return - 1
    },
    l = (i.where = function(t, e) {
        var n = [];
        return i.each(t,
        function(t) {
            e(t) && n.push(t)
        }),
        n
    },
    i.findNextWhere = function(t, e, n) {
        n || (n = -1);
        for (var i = n + 1; i < t.length; i++) {
            var o = t[i];
            if (e(o)) return o
        }
    },
    i.findPreviousWhere = function(t, e, n) {
        n || (n = t.length);
        for (var i = n - 1; i >= 0; i--) {
            var o = t[i];
            if (e(o)) return o
        }
    },
    i.inherits = function(t) {
        var e = this,
        n = t && t.hasOwnProperty("constructor") ? t.constructor: function() {
            return e.apply(this, arguments)
        },
        i = function() {
            this.constructor = n
        };
        return i.prototype = e.prototype,
        n.prototype = new i,
        n.extend = l,
        t && s(n.prototype, t),
        n.__super__ = e.prototype,
        n
    }),
    d = i.noop = function() {},
    u = i.uid = function() {
        var t = 0;
        return function() {
            return "chart-" + t++
        }
    } (),
    h = i.warn = function(t) {
        window.console && "function" == typeof window.console.warn && void 0
    },
    p = i.amd = "function" == typeof define && define.amd,
    f = i.isNumber = function(t) {
        return ! isNaN(parseFloat(t)) && isFinite(t)
    },
    g = i.max = function(t) {
        return Math.max.apply(Math, t)
    },
    v = i.min = function(t) {
        return Math.min.apply(Math, t)
    },
    m = (i.cap = function(t, e, n) {
        if (f(e)) {
            if (t > e) return e
        } else if (f(n) && n > t) return n;
        return t
    },
    i.getDecimalPlaces = function(t) {
        return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length: 0
    }),
    b = i.radians = function(t) {
        return t * (Math.PI / 180)
    },
    w = (i.getAngleFromPoint = function(t, e) {
        var n = e.x - t.x,
        i = e.y - t.y,
        o = Math.sqrt(n * n + i * i),
        a = 2 * Math.PI + Math.atan2(i, n);
        return 0 > n && 0 > i && (a += 2 * Math.PI),
        {
            angle: a,
            distance: o
        }
    },
    i.aliasPixel = function(t) {
        return t % 2 === 0 ? 0 : .5
    }),
    y = (i.splineCurve = function(t, e, n, i) {
        var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
        a = Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2)),
        s = i * o / (o + a),
        r = i * a / (o + a);
        return {
            inner: {
                x: e.x - s * (n.x - t.x),
                y: e.y - s * (n.y - t.y)
            },
            outer: {
                x: e.x + r * (n.x - t.x),
                y: e.y + r * (n.y - t.y)
            }
        }
    },
    i.calculateOrderOfMagnitude = function(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }),
    k = (i.calculateScaleRange = function(t, e, n, i, o) {
        var a = 2,
        s = Math.floor(e / (1.5 * n)),
        r = a >= s,
        c = g(t),
        l = v(t);
        c === l && (c += .5, l >= .5 && !i ? l -= .5 : c += .5);
        for (var d = Math.abs(c - l), u = y(d), h = Math.ceil(c / (1 * Math.pow(10, u))) * Math.pow(10, u), p = i ? 0 : Math.floor(l / (1 * Math.pow(10, u))) * Math.pow(10, u), f = h - p, m = Math.pow(10, u), b = Math.round(f / m); (b > s || s > 2 * b) && !r;) if (b > s) m *= 2,
        b = Math.round(f / m),
        b % 1 !== 0 && (r = !0);
        else if (o && u >= 0) {
            if (m / 2 % 1 !== 0) break;
            m /= 2,
            b = Math.round(f / m)
        } else m /= 2,
        b = Math.round(f / m);
        return r && (b = a, m = f / b),
        {
            steps: b,
            stepValue: m,
            min: p,
            max: p + b * m
        }
    },
    i.template = function(t, e) {
        function n(t, e) {
            var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("  ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
            return e ? n(e) : n
        }
        if (t instanceof Function) return t(e);
        var i = {};
        return n(t, e)
    }),
    _ = (i.generateLabels = function(t, e, n, i) {
        var a = new Array(e);
        return labelTemplateString && o(a,
        function(e, o) {
            a[o] = k(t, {
                value: n + i * (o + 1)
            })
        }),
        a
    },
    i.easingEffects = {
        linear: function(t) {
            return t
        },
        easeInQuad: function(t) {
            return t * t
        },
        easeOutQuad: function(t) {
            return - 1 * t * (t - 2)
        },
        easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t: -.5 * (--t * (t - 2) - 1)
        },
        easeInCubic: function(t) {
            return t * t * t
        },
        easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1)
        },
        easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t: .5 * ((t -= 2) * t * t + 2)
        },
        easeInQuart: function(t) {
            return t * t * t * t
        },
        easeOutQuart: function(t) {
            return - 1 * ((t = t / 1 - 1) * t * t * t - 1)
        },
        easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t: -.5 * ((t -= 2) * t * t * t - 2)
        },
        easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t
        },
        easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
        },
        easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t: .5 * ((t -= 2) * t * t * t * t + 2)
        },
        easeInSine: function(t) {
            return - 1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(t) {
            return - .5 * (Math.cos(Math.PI * t / 1) - 1)
        },
        easeInExpo: function(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 * ( - Math.pow(2, -10 * t / 1) + 1)
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * ( - Math.pow(2, -10 * --t) + 2)
        },
        easeInCirc: function(t) {
            return t >= 1 ? t: -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
        },
        easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
        },
        easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        easeInElastic: function(t) {
            var e = 1.70158,
            n = 0,
            i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
        },
        easeOutElastic: function(t) {
            var e = 1.70158,
            n = 0,
            i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
        },
        easeInOutElastic: function(t) {
            var e = 1.70158,
            n = 0,
            i = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
        },
        easeInBack: function(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e)
        },
        easeOutBack: function(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
        },
        easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
        },
        easeInBounce: function(t) {
            return 1 - _.easeOutBounce(1 - t)
        },
        easeOutBounce: function(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        },
        easeInOutBounce: function(t) {
            return.5 > t ? .5 * _.easeInBounce(2 * t) : .5 * _.easeOutBounce(2 * t - 1) + .5
        }
    }),
    x = i.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }
    } (),
    T = i.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame ||
        function(t) {
            return window.clearTimeout(t, 1e3 / 60)
        }
    } (),
    E = (i.animationLoop = function(t, e, n, i, o, a) {
        var s = 0,
        r = _[n] || _.linear,
        c = function() {
            s++;
            var n = s / e,
            l = r(n);
            t.call(a, l, n, s),
            i.call(a, l, n),
            e > s ? a.animationFrame = x(c) : o.apply(a)
        };
        x(c)
    },
    i.getRelativePosition = function(t) {
        var e, n, i = t.originalEvent || t,
        o = t.currentTarget || t.srcElement,
        a = o.getBoundingClientRect();
        return i.touches ? (e = i.touches[0].clientX - a.left, n = i.touches[0].clientY - a.top) : (e = i.clientX - a.left, n = i.clientY - a.top),
        {
            x: e,
            y: n
        }
    },
    i.addEvent = function(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
    }),
    I = i.removeEvent = function(t, e, n) {
        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = d
    },
    C = (i.bindEvents = function(t, e, n) {
        t.events || (t.events = {}),
        o(e,
        function(e) {
            t.events[e] = function() {
                n.apply(t, arguments)
            },
            E(t.chart.canvas, e, t.events[e])
        })
    },
    i.unbindEvents = function(t, e) {
        o(e,
        function(e, n) {
            I(t.chart.canvas, n, e)
        })
    }),
    S = i.getMaximumWidth = function(t) {
        var e = t.parentNode;
        return e.clientWidth
    },
    A = i.getMaximumHeight = function(t) {
        var e = t.parentNode;
        return e.clientHeight
    },
    N = (i.getMaximumSize = i.getMaximumWidth, i.retinaScale = function(t) {
        var e = t.ctx,
        n = t.canvas.width,
        i = t.canvas.height;
        window.devicePixelRatio && (e.canvas.style.width = n + "px", e.canvas.style.height = i + "px", e.canvas.height = i * window.devicePixelRatio, e.canvas.width = n * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
    }),
    O = i.clear = function(t) {
        t.ctx.clearRect(0, 0, t.width, t.height)
    },
    P = i.fontString = function(t, e, n) {
        return e + " " + t + "px " + n
    },
    R = i.longestText = function(t, e, n) {
        t.font = e;
        var i = 0;
        return o(n,
        function(e) {
            var n = t.measureText(e).width;
            i = n > i ? n: i
        }),
        i
    },
    D = i.drawRoundedRectangle = function(t, e, n, i, o, a) {
        t.beginPath(),
        t.moveTo(e + a, n),
        t.lineTo(e + i - a, n),
        t.quadraticCurveTo(e + i, n, e + i, n + a),
        t.lineTo(e + i, n + o - a),
        t.quadraticCurveTo(e + i, n + o, e + i - a, n + o),
        t.lineTo(e + a, n + o),
        t.quadraticCurveTo(e, n + o, e, n + o - a),
        t.lineTo(e, n + a),
        t.quadraticCurveTo(e, n, e + a, n),
        t.closePath()
    };
    n.instances = {},
    n.Type = function(t, e, i) {
        this.options = e,
        this.chart = i,
        this.id = u(),
        n.instances[this.id] = this,
        e.responsive && this.resize(),
        this.initialize.call(this, t)
    },
    s(n.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return O(this.chart),
            this
        },
        stop: function() {
            return T(this.animationFrame),
            this
        },
        resize: function(t) {
            this.stop();
            var e = this.chart.canvas,
            n = S(this.chart.canvas),
            i = this.options.maintainAspectRatio ? n / this.chart.aspectRatio: A(this.chart.canvas);
            return e.width = this.chart.width = n,
            e.height = this.chart.height = i,
            N(this.chart),
            "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)),
            this
        },
        reflow: d,
        render: function(t) {
            return t && this.reflow(),
            this.options.animation && !t ? i.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)),
            this
        },
        generateLegend: function() {
            return k(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(),
            C(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width,
            t.height = this.chart.height,
            t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")),
            delete n.instances[this.id]
        },
        showTooltip: function(t, e) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var a = function(t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (o(t,
                function(t, n) {
                    t !== this.activeElements[n] && (e = !0)
                },
                this), e)
            }.call(this, t);
            if (a || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0) if (this.datasets && this.datasets.length > 1) {
                    for (var s, r, l = this.datasets.length - 1; l >= 0 && (s = this.datasets[l].points || this.datasets[l].bars || this.datasets[l].segments, r = c(s, t[0]), -1 === r); l--);
                    var d = [],
                    u = [],
                    h = function(t) {
                        var e, n, o, a, s, c = [],
                        l = [],
                        h = [];
                        return i.each(this.datasets,
                        function(t) {
                            e = t.points || t.bars || t.segments,
                            e[r] && e[r].hasValue() && c.push(e[r])
                        }),
                        i.each(c,
                        function(t) {
                            l.push(t.x),
                            h.push(t.y),
                            d.push(i.template(this.options.multiTooltipTemplate, t)),
                            u.push({
                                fill: t._saved.fillColor || t.fillColor,
                                stroke: t._saved.strokeColor || t.strokeColor
                            })
                        },
                        this),
                        s = v(h),
                        o = g(h),
                        a = v(l),
                        n = g(l),
                        {
                            x: a > this.chart.width / 2 ? a: n,
                            y: (s + o) / 2
                        }
                    }.call(this, r);
                    new n.MultiTooltip({
                        x: h.x,
                        y: h.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: d,
                        legendColors: u,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: t[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw()
                } else o(t,
                function(t) {
                    var e = t.tooltipPosition();
                    new n.Tooltip({
                        x: Math.round(e.x),
                        y: Math.round(e.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: k(this.options.tooltipTemplate, t),
                        chart: this.chart,
                        custom: this.options.customTooltips
                    }).draw()
                },
                this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }),
    n.Type.extend = function(t) {
        var e = this,
        i = function() {
            return e.apply(this, arguments)
        };
        if (i.prototype = a(e.prototype), s(i.prototype, t), i.extend = n.Type.extend, t.name || e.prototype.name) {
            var o = t.name || e.prototype.name,
            c = n.defaults[e.prototype.name] ? a(n.defaults[e.prototype.name]) : {};
            n.defaults[o] = s(c, t.defaults),
            n.types[o] = i,
            n.prototype[o] = function(t, e) {
                var a = r(n.defaults.global, n.defaults[o], e || {});
                return new i(t, a, this)
            }
        } else h("Name not provided for this chart, so it hasn't been registered");
        return e
    },
    n.Element = function(t) {
        s(this, t),
        this.initialize.apply(this, arguments),
        this.save()
    },
    s(n.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? o(t,
            function(t) {
                this[t] = this._saved[t]
            },
            this) : s(this, this._saved),
            this
        },
        save: function() {
            return this._saved = a(this),
            delete this._saved._saved,
            this
        },
        update: function(t) {
            return o(t,
            function(t, e) {
                this._saved[e] = this[e],
                this[e] = t
            },
            this),
            this
        },
        transition: function(t, e) {
            return o(t,
            function(t, n) {
                this[n] = (t - this._saved[n]) * e + this._saved[n]
            },
            this),
            this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return f(this.value)
        }
    }),
    n.Element.extend = l,
    n.Point = n.Element.extend({
        display: !0,
        inRange: function(t, e) {
            var n = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(n, 2)
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(),
                t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                t.closePath(),
                t.strokeStyle = this.strokeColor,
                t.lineWidth = this.strokeWidth,
                t.fillStyle = this.fillColor,
                t.fill(),
                t.stroke()
            }
        }
    }),
    n.Arc = n.Element.extend({
        inRange: function(t, e) {
            var n = i.getAngleFromPoint(this, {
                x: t,
                y: e
            }),
            o = n.angle >= this.startAngle && n.angle <= this.endAngle,
            a = n.distance >= this.innerRadius && n.distance <= this.outerRadius;
            return o && a
        },
        tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
            e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            }
        },
        draw: function(t) {
            var e = this.ctx;
            e.beginPath(),
            e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle),
            e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0),
            e.closePath(),
            e.strokeStyle = this.strokeColor,
            e.lineWidth = this.strokeWidth,
            e.fillStyle = this.fillColor,
            e.fill(),
            e.lineJoin = "bevel",
            this.showStroke && e.stroke()
        }
    }),
    n.Rectangle = n.Element.extend({
        draw: function() {
            var t = this.ctx,
            e = this.width / 2,
            n = this.x - e,
            i = this.x + e,
            o = this.base - (this.base - this.y),
            a = this.strokeWidth / 2;
            this.showStroke && (n += a, i -= a, o += a),
            t.beginPath(),
            t.fillStyle = this.fillColor,
            t.strokeStyle = this.strokeColor,
            t.lineWidth = this.strokeWidth,
            t.moveTo(n, this.base),
            t.lineTo(n, o),
            t.lineTo(i, o),
            t.lineTo(i, this.base),
            t.fill(),
            this.showStroke && t.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }),
    n.Tooltip = n.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = P(this.fontSize, this.fontStyle, this.fontFamily),
            this.xAlign = "center",
            this.yAlign = "above";
            var e = this.caretPadding = 2,
            n = t.measureText(this.text).width + 2 * this.xPadding,
            i = this.fontSize + 2 * this.yPadding,
            o = i + this.caretHeight + e;
            this.x + n / 2 > this.chart.width ? this.xAlign = "left": this.x - n / 2 < 0 && (this.xAlign = "right"),
            this.y - o < 0 && (this.yAlign = "below");
            var a = this.x - n / 2,
            s = this.y - o;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                case "above":
                    t.beginPath(),
                    t.moveTo(this.x, this.y - e),
                    t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)),
                    t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)),
                    t.closePath(),
                    t.fill();
                    break;
                case "below":
                    s = this.y + e + this.caretHeight,
                    t.beginPath(),
                    t.moveTo(this.x, this.y + e),
                    t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight),
                    t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight),
                    t.closePath(),
                    t.fill()
                }
                switch (this.xAlign) {
                case "left":
                    a = this.x - n + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    a = this.x - (this.cornerRadius + this.caretHeight)
                }
                D(t, a, s, n, i, this.cornerRadius),
                t.fill(),
                t.fillStyle = this.textColor,
                t.textAlign = "center",
                t.textBaseline = "middle",
                t.fillText(this.text, a + n / 2, s + i / 2)
            }
        }
    }),
    n.MultiTooltip = n.Element.extend({
        initialize: function() {
            this.font = P(this.fontSize, this.fontStyle, this.fontFamily),
            this.titleFont = P(this.titleFontSize, this.titleFontStyle, this.titleFontFamily),
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize,
            this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
            e = R(this.ctx, this.font, this.labels) + this.fontSize + 3,
            n = g([e, t]);
            this.width = n + 2 * this.xPadding;
            var i = this.height / 2;
            this.y - i < 0 ? this.y = i: this.y + i > this.chart.height && (this.y = this.chart.height - i),
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width: this.x += this.xOffset
        },
        getLineHeight: function(t) {
            var e = this.y - this.height / 2 + this.yPadding,
            n = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * n + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            if (this.custom) this.custom(this);
            else {
                D(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor,
                t.fill(),
                t.closePath(),
                t.textAlign = "left",
                t.textBaseline = "middle",
                t.fillStyle = this.titleTextColor,
                t.font = this.titleFont,
                t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)),
                t.font = this.font,
                i.each(this.labels,
                function(e, n) {
                    t.fillStyle = this.textColor,
                    t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(n + 1)),
                    t.fillStyle = this.legendColorBackground,
                    t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize),
                    t.fillStyle = this.legendColors[n].fill,
                    t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                },
                this)
            }
        }
    }),
    n.Scale = n.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = m(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(k(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? R(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(t) {
            this.xLabels.push(t),
            this.valuesCount++,
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(),
            this.valuesCount--,
            this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize: 0,
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height,
            this.startPoint += this.padding,
            this.endPoint -= this.padding;
            var t, e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint,
            t = this.yLabelWidth,
            this.calculateYRange(e),
            this.buildYLabels(),
            t < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var t, e, n = this.ctx.measureText(this.xLabels[0]).width,
            i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = n / 2 > this.yLabelWidth + 10 ? n / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var o, a = R(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = a;
                for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) o = Math.cos(b(this.xLabelRotation)),
                t = o * n,
                e = o * i,
                t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2),
                this.xScalePaddingRight = this.fontSize / 2,
                this.xLabelRotation++,
                this.xLabelWidth = o * a;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(b(this.xLabelRotation)) * a + 3)
            } else this.xLabelWidth = 0,
            this.xScalePaddingRight = this.padding,
            this.xScalePaddingLeft = this.padding
        },
        calculateYRange: d,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        },
        calculateX: function(t) {
            var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
            n = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
            i = n * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (i += n / 2),
            Math.round(i)
        },
        update: function(t) {
            i.extend(this, t),
            this.fit()
        },
        draw: function() {
            var t = this.ctx,
            e = (this.endPoint - this.startPoint) / this.steps,
            n = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels,
            function(o, a) {
                var s = this.endPoint - e * a,
                r = Math.round(s),
                c = this.showHorizontalLines;
                t.textAlign = "right",
                t.textBaseline = "middle",
                this.showLabels && t.fillText(o, n - 10, s),
                0 !== a || c || (c = !0),
                c && t.beginPath(),
                a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor),
                r += i.aliasPixel(t.lineWidth),
                c && (t.moveTo(n, r), t.lineTo(this.width, r), t.stroke(), t.closePath()),
                t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor,
                t.beginPath(),
                t.moveTo(n - 5, r),
                t.lineTo(n, r),
                t.stroke(),
                t.closePath()
            },
            this), o(this.xLabels,
            function(e, n) {
                var i = this.calculateX(n) + w(this.lineWidth),
                o = this.calculateX(n - (this.offsetGridLines ? .5 : 0)) + w(this.lineWidth),
                a = this.xLabelRotation > 0,
                s = this.showVerticalLines;
                0 !== n || s || (s = !0),
                s && t.beginPath(),
                n > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor),
                s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()),
                t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor,
                t.beginPath(),
                t.moveTo(o, this.endPoint),
                t.lineTo(o, this.endPoint + 5),
                t.stroke(),
                t.closePath(),
                t.save(),
                t.translate(i, a ? this.endPoint + 12 : this.endPoint + 8),
                t.rotate( - 1 * b(this.xLabelRotation)),
                t.font = this.font,
                t.textAlign = a ? "right": "center",
                t.textBaseline = a ? "middle": "top",
                t.fillText(e, 0, 0),
                t.restore()
            },
            this))
        }
    }),
    n.RadialScale = n.Element.extend({
        initialize: function() {
            this.size = v([this.height, this.width]),
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = m(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(k(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var t, e, n, i, o, a, s, r, c, l, d, u, h = v([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
            p = this.width,
            g = 0;
            for (this.ctx.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, h),
            n = this.ctx.measureText(k(this.templateString, {
                value: this.labels[e]
            })).width + 5,
            0 === e || e === this.valuesCount / 2 ? (i = n / 2, t.x + i > p && (p = t.x + i, o = e), t.x - i < g && (g = t.x - i, s = e)) : e < this.valuesCount / 2 ? t.x + n > p && (p = t.x + n, o = e) : e > this.valuesCount / 2 && t.x - n < g && (g = t.x - n, s = e);
            c = g,
            l = Math.ceil(p - this.width),
            a = this.getIndexAngle(o),
            r = this.getIndexAngle(s),
            d = l / Math.sin(a + Math.PI / 2),
            u = c / Math.sin(r + Math.PI / 2),
            d = f(d) ? d: 0,
            u = f(u) ? u: 0,
            this.drawingArea = h - (u + d) / 2,
            this.setCenterPoint(u, d)
        },
        setCenterPoint: function(t, e) {
            var n = this.width - e - this.drawingArea,
            i = t + this.drawingArea;
            this.xCenter = (i + n) / 2,
            this.yCenter = this.height / 2
        },
        getIndexAngle: function(t) {
            var e = 2 * Math.PI / this.valuesCount;
            return t * e - Math.PI / 2
        },
        getPointPosition: function(t, e) {
            var n = this.getIndexAngle(t);
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (o(this.yLabels,
                function(e, n) {
                    if (n > 0) {
                        var i, o = n * (this.drawingArea / this.steps),
                        a = this.yCenter - o;
                        if (this.lineWidth > 0) if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(),
                        t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke();
                        else {
                            t.beginPath();
                            for (var s = 0; s < this.valuesCount; s++) i = this.getPointPosition(s, this.calculateCenterOffset(this.min + n * this.stepValue)),
                            0 === s ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
                            t.closePath(),
                            t.stroke()
                        }
                        if (this.showLabels) {
                            if (t.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                var r = t.measureText(e).width;
                                t.fillStyle = this.backdropColor,
                                t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, a - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                            }
                            t.textAlign = "center",
                            t.textBaseline = "middle",
                            t.fillStyle = this.fontColor,
                            t.fillText(e, this.xCenter, a)
                        }
                    }
                },
                this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth,
                    t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var n = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(),
                            t.moveTo(this.xCenter, this.yCenter),
                            t.lineTo(n.x, n.y),
                            t.stroke(),
                            t.closePath()
                        }
                        var i = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
                        t.fillStyle = this.pointLabelFontColor;
                        var a = this.labels.length,
                        s = this.labels.length / 2,
                        r = s / 2,
                        c = r > e || e > a - r,
                        l = e === r || e === a - r;
                        0 === e ? t.textAlign = "center": e === s ? t.textAlign = "center": s > e ? t.textAlign = "left": t.textAlign = "right",
                        l ? t.textBaseline = "middle": c ? t.textBaseline = "bottom": t.textBaseline = "top",
                        t.fillText(this.labels[e], i.x, i.y)
                    }
                }
            }
        }
    }),
    i.addEvent(window, "resize",
    function() {
        var t;
        return function() {
            clearTimeout(t),
            t = setTimeout(function() {
                o(n.instances,
                function(t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            },
            50)
        }
    } ()),
    p ? define("chart", [],
    function() {
        return n
    }) : "object" == typeof module && module.exports && (module.exports = n),
    t.Chart = n,
    n.noConflict = function() {
        return t.Chart = e,
        n
    }
}.call(this),
function() {
    "use strict";
    var t = this,
    e = t.Chart,
    n = e.helpers,
    i = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Line",
        defaults: i,
        initialize: function(t) {
            this.PointClass = e.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(t) {
                    return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }),
            this.datasets = [],
            this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents,
            function(t) {
                var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }),
                n.each(e,
                function(t) {
                    t.fillColor = t.highlightFill,
                    t.strokeColor = t.highlightStroke
                }),
                this.showTooltip(e)
            }),
            n.each(t.datasets,
            function(e) {
                var i = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(i),
                n.each(e.data,
                function(n, o) {
                    i.points.push(new this.PointClass({
                        value: n,
                        label: t.labels[o],
                        datasetLabel: e.label,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                },
                this),
                this.buildScale(t.labels),
                this.eachPoints(function(t, e) {
                    n.extend(t, {
                        x: this.scale.calculateX(e),
                        y: this.scale.endPoint
                    }),
                    t.save()
                },
                this)
            },
            this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            n.each(this.activeElements,
            function(t) {
                t.restore(["fillColor", "strokeColor"])
            }),
            this.eachPoints(function(t) {
                t.save()
            }),
            this.render()
        },
        eachPoints: function(t) {
            n.each(this.datasets,
            function(e) {
                n.each(e.points, t, this)
            },
            this)
        },
        getPointsAtEvent: function(t) {
            var e = [],
            i = n.getRelativePosition(t);
            return n.each(this.datasets,
            function(t) {
                n.each(t.points,
                function(t) {
                    t.inRange(i.x, i.y) && e.push(t)
                })
            },
            this),
            e
        },
        buildScale: function(t) {
            var i = this,
            o = function() {
                var t = [];
                return i.eachPoints(function(e) {
                    t.push(e.value)
                }),
                t
            },
            a = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var e = n.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    n.extend(this, e)
                },
                xLabels: t,
                font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth: 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor: "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && n.extend(a, {
                calculateYRange: n.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new e.Scale(a)
        },
        addData: function(t, e) {
            n.each(t,
            function(t, n) {
                this.datasets[n].points.push(new this.PointClass({
                    value: t,
                    label: e,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[n].pointStrokeColor,
                    fillColor: this.datasets[n].pointColor
                }))
            },
            this),
            this.scale.addXLabel(e),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            n.each(this.datasets,
            function(t) {
                t.points.shift()
            },
            this),
            this.update()
        },
        reflow: function() {
            var t = n.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(t)
        },
        draw: function(t) {
            var e = t || 1;
            this.clear();
            var i = this.chart.ctx,
            o = function(t) {
                return null !== t.value
            },
            a = function(t, e, i) {
                return n.findNextWhere(e, o, i) || t
            },
            s = function(t, e, i) {
                return n.findPreviousWhere(e, o, i) || t
            };
            this.scale.draw(e),
            n.each(this.datasets,
            function(t) {
                var r = n.where(t.points, o);
                n.each(t.points,
                function(t, n) {
                    t.hasValue() && t.transition({
                        y: this.scale.calculateY(t.value),
                        x: this.scale.calculateX(n)
                    },
                    e)
                },
                this),
                this.options.bezierCurve && n.each(r,
                function(t, e) {
                    var i = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension: 0;
                    t.controlPoints = n.splineCurve(s(t, r, e), t, a(t, r, e), i),
                    t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint: t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint),
                    t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint: t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                },
                this),
                i.lineWidth = this.options.datasetStrokeWidth,
                i.strokeStyle = t.strokeColor,
                i.beginPath(),
                n.each(r,
                function(t, e) {
                    if (0 === e) i.moveTo(t.x, t.y);
                    else if (this.options.bezierCurve) {
                        var n = s(t, r, e);
                        i.bezierCurveTo(n.controlPoints.outer.x, n.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                    } else i.lineTo(t.x, t.y)
                },
                this),
                i.stroke(),
                this.options.datasetFill && r.length > 0 && (i.lineTo(r[r.length - 1].x, this.scale.endPoint), i.lineTo(r[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), i.fill()),
                n.each(r,
                function(t) {
                    t.draw()
                })
            },
            this)
        }
    })
}.call(this),
!
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define("c2h", [], t);
    else {
        var e;
        e = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: this,
        e.html2canvas = t()
    }
} (function() {
    var t;
    return function e(t, n, i) {
        function o(s, r) {
            if (!n[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!r && c) return c(s, !0);
                    if (a) return a(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var d = n[s] = {
                    exports: {}
                };
                t[s][0].call(d.exports,
                function(e) {
                    var n = t[s][1][e];
                    return o(n ? n: e)
                },
                d, d.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var a = "function" == typeof require && require,
        s = 0; s < i.length; s++) o(i[s]);
        return o
    } ({
        1 : [function(e, n, i) { (function(e) { !
                function(o) {
                    function a(t) {
                        throw new RangeError(D[t])
                    }
                    function s(t, e) {
                        for (var n = t.length,
                        i = []; n--;) i[n] = e(t[n]);
                        return i
                    }
                    function r(t, e) {
                        var n = t.split("@"),
                        i = "";
                        n.length > 1 && (i = n[0] + "@", t = n[1]),
                        t = t.replace(R, ".");
                        var o = t.split("."),
                        a = s(o, e).join(".");
                        return i + a
                    }
                    function c(t) {
                        for (var e, n, i = [], o = 0, a = t.length; a > o;) e = t.charCodeAt(o++),
                        e >= 55296 && 56319 >= e && a > o ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), o--)) : i.push(e);
                        return i
                    }
                    function l(t) {
                        return s(t,
                        function(t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += $(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t),
                            e += $(t)
                        }).join("")
                    }
                    function d(t) {
                        return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : x
                    }
                    function u(t, e) {
                        return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                    }
                    function h(t, e, n) {
                        var i = 0;
                        for (t = n ? q(t / C) : t >> 1, t += q(t / e); t > L * E >> 1; i += x) t = q(t / L);
                        return q(i + (L + 1) * t / (t + I))
                    }
                    function p(t) {
                        var e, n, i, o, s, r, c, u, p, f, g = [],
                        v = t.length,
                        m = 0,
                        b = A,
                        w = S;
                        for (n = t.lastIndexOf(N), 0 > n && (n = 0), i = 0; n > i; ++i) t.charCodeAt(i) >= 128 && a("not-basic"),
                        g.push(t.charCodeAt(i));
                        for (o = n > 0 ? n + 1 : 0; v > o;) {
                            for (s = m, r = 1, c = x; o >= v && a("invalid-input"), u = d(t.charCodeAt(o++)), (u >= x || u > q((_ - m) / r)) && a("overflow"), m += u * r, p = w >= c ? T: c >= w + E ? E: c - w, !(p > u); c += x) f = x - p,
                            r > q(_ / f) && a("overflow"),
                            r *= f;
                            e = g.length + 1,
                            w = h(m - s, e, 0 == s),
                            q(m / e) > _ - b && a("overflow"),
                            b += q(m / e),
                            m %= e,
                            g.splice(m++, 0, b)
                        }
                        return l(g)
                    }
                    function f(t) {
                        var e, n, i, o, s, r, l, d, p, f, g, v, m, b, w, y = [];
                        for (t = c(t), v = t.length, e = A, n = 0, s = S, r = 0; v > r; ++r) g = t[r],
                        128 > g && y.push($(g));
                        for (i = o = y.length, o && y.push(N); v > i;) {
                            for (l = _, r = 0; v > r; ++r) g = t[r],
                            g >= e && l > g && (l = g);
                            for (m = i + 1, l - e > q((_ - n) / m) && a("overflow"), n += (l - e) * m, e = l, r = 0; v > r; ++r) if (g = t[r], e > g && ++n > _ && a("overflow"), g == e) {
                                for (d = n, p = x; f = s >= p ? T: p >= s + E ? E: p - s, !(f > d); p += x) w = d - f,
                                b = x - f,
                                y.push($(u(f + w % b, 0))),
                                d = q(w / b);
                                y.push($(u(d, 0))),
                                s = h(n, m, i == o),
                                n = 0,
                                ++i
                            }++n,
                            ++e
                        }
                        return y.join("")
                    }
                    function g(t) {
                        return r(t,
                        function(t) {
                            return O.test(t) ? p(t.slice(4).toLowerCase()) : t
                        })
                    }
                    function v(t) {
                        return r(t,
                        function(t) {
                            return P.test(t) ? "xn--" + f(t) : t
                        })
                    }
                    var m = "object" == typeof i && i && !i.nodeType && i,
                    b = "object" == typeof n && n && !n.nodeType && n,
                    w = "object" == typeof e && e; (w.global === w || w.window === w || w.self === w) && (o = w);
                    var y, k, _ = 2147483647,
                    x = 36,
                    T = 1,
                    E = 26,
                    I = 38,
                    C = 700,
                    S = 72,
                    A = 128,
                    N = "-",
                    O = /^xn--/,
                    P = /[^\x20-\x7E]/,
                    R = /[\x2E\u3002\uFF0E\uFF61]/g,
                    D = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    L = x - T,
                    q = Math.floor,
                    $ = String.fromCharCode;
                    if (y = {
                        version: "1.3.2",
                        ucs2: {
                            decode: c,
                            encode: l
                        },
                        decode: p,
                        encode: f,
                        toASCII: v,
                        toUnicode: g
                    },
                    "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode",
                    function() {
                        return y
                    });
                    else if (m && b) if (n.exports == m) b.exports = y;
                    else for (k in y) y.hasOwnProperty(k) && (m[k] = y[k]);
                    else o.punycode = y
                } (this)
            }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
        },
        {}],
        2 : [function(t, e, n) {
            function i(t, e, n) { ! t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
            }
            function o(t, e) {
                try {
                    e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                } catch(n) {
                    r("Unable to copy canvas content from", t, n)
                }
            }
            function a(t, e) {
                for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i;)(e === !0 || 1 !== i.nodeType || "SCRIPT" !== i.nodeName) && n.appendChild(a(i, e)),
                i = i.nextSibling;
                return 1 === t.nodeType && (n._scrollTop = t.scrollTop, n._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? o(t, n) : ("TEXTAREA" === t.nodeName || "SELECT" === t.nodeName) && (n.value = t.value)),
                n
            }
            function s(t) {
                if (1 === t.nodeType) {
                    t.scrollTop = t._scrollTop,
                    t.scrollLeft = t._scrollLeft;
                    for (var e = t.firstChild; e;) s(e),
                    e = e.nextSibling
                }
            }
            var r = t("./log");
            e.exports = function(t, e, n, o, r, c, l) {
                var d = a(t.documentElement, r.javascriptEnabled),
                u = e.createElement("iframe");
                return u.className = "html2canvas-container",
                u.style.visibility = "hidden",
                u.style.position = "fixed",
                u.style.left = "-10000px",
                u.style.top = "0px",
                u.style.border = "0",
                u.width = n,
                u.height = o,
                u.scrolling = "no",
                e.body.appendChild(u),
                new Promise(function(e) {
                    var n = u.contentWindow.document;
                    u.contentWindow.onload = u.onload = function() {
                        var t = setInterval(function() {
                            n.body.childNodes.length > 0 && (s(n.documentElement), clearInterval(t), "view" === r.type && (u.contentWindow.scrollTo(c, l), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || u.contentWindow.scrollY === l && u.contentWindow.scrollX === c || (n.documentElement.style.top = -l + "px", n.documentElement.style.left = -c + "px", n.documentElement.style.position = "absolute")), e(u))
                        },
                        50)
                    },
                    n.open(),
                    n.write("<!DOCTYPE html><html></html>"),
                    i(t, c, l),
                    n.replaceChild(n.adoptNode(d), n.documentElement),
                    n.close()
                })
            }
        },
        {
            "./log": 13
        }],
        3 : [function(t, e, n) {
            function i(t) {
                this.r = 0,
                this.g = 0,
                this.b = 0,
                this.a = null,
                this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
            }
            i.prototype.darken = function(t) {
                var e = 1 - t;
                return new i([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
            },
            i.prototype.isTransparent = function() {
                return 0 === this.a
            },
            i.prototype.isBlack = function() {
                return 0 === this.r && 0 === this.g && 0 === this.b
            },
            i.prototype.fromArray = function(t) {
                return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])),
                Array.isArray(t)
            };
            var o = /^#([a-f0-9]{3})$/i;
            i.prototype.hex3 = function(t) {
                var e = null;
                return null !== (e = t.match(o)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)),
                null !== e
            };
            var a = /^#([a-f0-9]{6})$/i;
            i.prototype.hex6 = function(t) {
                var e = null;
                return null !== (e = t.match(a)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)),
                null !== e
            };
            var s = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
            i.prototype.rgb = function(t) {
                var e = null;
                return null !== (e = t.match(s)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])),
                null !== e
            };
            var r = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
            i.prototype.rgba = function(t) {
                var e = null;
                return null !== (e = t.match(r)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])),
                null !== e
            },
            i.prototype.toString = function() {
                return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")": "rgb(" + [this.r, this.g, this.b].join(",") + ")"
            },
            i.prototype.namedColor = function(t) {
                t = t.toLowerCase();
                var e = c[t];
                if (e) this.r = e[0],
                this.g = e[1],
                this.b = e[2];
                else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0,
                !0;
                return !! e
            },
            i.prototype.isColor = !0;
            var c = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            };
            e.exports = i
        },
        {}],
        4 : [function(e, n, i) {
            function o(t, e) {
                var n = x++;
                if (e = e || {},
                e.logging && (m.options.logging = !0, m.options.start = Date.now()), e.async = "undefined" == typeof e.async ? !0 : e.async, e.allowTaint = "undefined" == typeof e.allowTaint ? !1 : e.allowTaint, e.removeContainer = "undefined" == typeof e.removeContainer ? !0 : e.removeContainer, e.javascriptEnabled = "undefined" == typeof e.javascriptEnabled ? !1 : e.javascriptEnabled, e.imageTimeout = "undefined" == typeof e.imageTimeout ? 1e4: e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer: p, e.strict = !!e.strict, "string" == typeof t) {
                    if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
                    var i = null != e.width ? e.width: window.innerWidth,
                    o = null != e.height ? e.height: window.innerHeight;
                    return y(u(t), e.proxy, document, i, o, e).then(function(t) {
                        return s(t.contentWindow.document.documentElement, t, e, i, o)
                    })
                }
                var r = (void 0 === t ? [document.documentElement] : t.length ? t: [t])[0];
                return r.setAttribute(_ + n, n),
                a(r.ownerDocument, e, r.ownerDocument.defaultView.innerWidth, r.ownerDocument.defaultView.innerHeight, n).then(function(t) {
                    return "function" == typeof e.onrendered && (m("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)),
                    t
                })
            }
            function a(t, e, n, i, o) {
                return w(t, t, n, i, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(a) {
                    m("Document cloned");
                    var r = _ + o,
                    c = "[" + r + "='" + o + "']";
                    t.querySelector(c).removeAttribute(r);
                    var l = a.contentWindow,
                    d = l.document.querySelector(c),
                    u = "function" == typeof e.onclone ? Promise.resolve(e.onclone(l.document)) : Promise.resolve(!0);
                    return u.then(function() {
                        return s(d, a, e, n, i)
                    })
                })
            }
            function s(t, e, n, i, o) {
                var a = e.contentWindow,
                s = new h(a.document),
                u = new f(n, s),
                p = k(t),
                v = "view" === n.type ? i: l(a.document),
                b = "view" === n.type ? o: d(a.document),
                w = new n.renderer(v, b, u, n, document),
                y = new g(t, w, s, u, n);
                return y.ready.then(function() {
                    m("Finished rendering");
                    var i;
                    return i = "view" === n.type ? c(w.canvas, {
                        width: w.canvas.width,
                        height: w.canvas.height,
                        top: 0,
                        left: 0,
                        x: 0,
                        y: 0
                    }) : t === a.document.body || t === a.document.documentElement || null != n.canvas ? w.canvas: c(w.canvas, {
                        width: null != n.width ? n.width: p.width,
                        height: null != n.height ? n.height: p.height,
                        top: p.top,
                        left: p.left,
                        x: 0,
                        y: 0
                    }),
                    r(e, n),
                    i
                })
            }
            function r(t, e) {
                e.removeContainer && (t.parentNode.removeChild(t), m("Cleaned up container"))
            }
            function c(t, e) {
                var n = document.createElement("canvas"),
                i = Math.min(t.width - 1, Math.max(0, e.left)),
                o = Math.min(t.width, Math.max(1, e.left + e.width)),
                a = Math.min(t.height - 1, Math.max(0, e.top)),
                s = Math.min(t.height, Math.max(1, e.top + e.height));
                n.width = e.width,
                n.height = e.height;
                var r = o - i,
                c = s - a;
                return m("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", r, "height:", c),
                m("Resulting crop with width", e.width, "and height", e.height, "with x", i, "and y", a),
                n.getContext("2d").drawImage(t, i, a, r, c, e.x, e.y, r, c),
                n
            }
            function l(t) {
                return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
            }
            function d(t) {
                return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
            }
            function u(t) {
                var e = document.createElement("a");
                return e.href = t,
                e.href = e.href,
                e
            }
            var h = e("./support"),
            p = e("./renderers/canvas"),
            f = e("./imageloader"),
            g = e("./nodeparser"),
            v = e("./nodecontainer"),
            m = e("./log"),
            b = e("./utils"),
            w = e("./clone"),
            y = e("./proxy").loadUrlDocument,
            k = b.getBounds,
            _ = "data-html2canvas-node",
            x = 0;
            o.CanvasRenderer = p,
            o.NodeContainer = v,
            o.log = m,
            o.utils = b;
            var T = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ?
            function() {
                return Promise.reject("No canvas support")
            }: o;
            n.exports = T,
            "function" == typeof t && t.amd && t("c2h", [],
            function() {
                return T
            })
        },
        {
            "./clone": 2,
            "./imageloader": 11,
            "./log": 13,
            "./nodecontainer": 14,
            "./nodeparser": 15,
            "./proxy": 16,
            "./renderers/canvas": 20,
            "./support": 22,
            "./utils": 26
        }],
        5 : [function(t, e, n) {
            function i(t) {
                if (this.src = t, o("DummyImageContainer for", t), !this.promise || !this.image) {
                    o("Initiating DummyImageContainer"),
                    i.prototype.image = new Image;
                    var e = this.image;
                    i.prototype.promise = new Promise(function(t, n) {
                        e.onload = t,
                        e.onerror = n,
                        e.src = a(),
                        e.complete === !0 && t(e)
                    })
                }
            }
            var o = t("./log"),
            a = t("./utils").smallImage;
            e.exports = i
        },
        {
            "./log": 13,
            "./utils": 26
        }],
        6 : [function(t, e, n) {
            function i(t, e) {
                var n, i, a = document.createElement("div"),
                s = document.createElement("img"),
                r = document.createElement("span"),
                c = "Hidden Text";
                a.style.visibility = "hidden",
                a.style.fontFamily = t,
                a.style.fontSize = e,
                a.style.margin = 0,
                a.style.padding = 0,
                document.body.appendChild(a),
                s.src = o(),
                s.width = 1,
                s.height = 1,
                s.style.margin = 0,
                s.style.padding = 0,
                s.style.verticalAlign = "baseline",
                r.style.fontFamily = t,
                r.style.fontSize = e,
                r.style.margin = 0,
                r.style.padding = 0,
                r.appendChild(document.createTextNode(c)),
                a.appendChild(r),
                a.appendChild(s),
                n = s.offsetTop - r.offsetTop + 1,
                a.removeChild(r),
                a.appendChild(document.createTextNode(c)),
                a.style.lineHeight = "normal",
                s.style.verticalAlign = "super",
                i = s.offsetTop - a.offsetTop + 1,
                document.body.removeChild(a),
                this.baseline = n,
                this.lineWidth = 1,
                this.middle = i
            }
            var o = t("./utils").smallImage;
            e.exports = i
        },
        {
            "./utils": 26
        }],
        7 : [function(t, e, n) {
            function i() {
                this.data = {}
            }
            var o = t("./font");
            i.prototype.getMetrics = function(t, e) {
                return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new o(t, e)),
                this.data[t + "-" + e]
            },
            e.exports = i
        },
        {
            "./font": 6
        }],
        8 : [function(t, e, n) {
            function i(e, n, i) {
                this.image = null,
                this.src = e;
                var o = this,
                s = a(e);
                this.promise = (n ? new Promise(function(t) {
                    "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                        t(e)
                    }: t(e)
                }) : this.proxyLoad(i.proxy, s, i)).then(function(e) {
                    var n = t("./core");
                    return n(e.contentWindow.document.documentElement, {
                        type: "view",
                        width: e.width,
                        height: e.height,
                        proxy: i.proxy,
                        javascriptEnabled: i.javascriptEnabled,
                        removeContainer: i.removeContainer,
                        allowTaint: i.allowTaint,
                        imageTimeout: i.imageTimeout / 2
                    })
                }).then(function(t) {
                    return o.image = t
                })
            }
            var o = t("./utils"),
            a = o.getBounds,
            s = t("./proxy").loadUrlDocument;
            i.prototype.proxyLoad = function(t, e, n) {
                var i = this.src;
                return s(i.src, t, i.ownerDocument, e.width, e.height, n)
            },
            e.exports = i
        },
        {
            "./core": 4,
            "./proxy": 16,
            "./utils": 26
        }],
        9 : [function(t, e, n) {
            function i(t) {
                this.src = t.value,
                this.colorStops = [],
                this.type = null,
                this.x0 = .5,
                this.y0 = .5,
                this.x1 = .5,
                this.y1 = .5,
                this.promise = Promise.resolve(!0)
            }
            i.TYPES = {
                LINEAR: 1,
                RADIAL: 2
            },
            i.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,
            e.exports = i
        },
        {}],
        10 : [function(t, e, n) {
            function i(t, e) {
                this.src = t,
                this.image = new Image;
                var n = this;
                this.tainted = null,
                this.promise = new Promise(function(i, o) {
                    n.image.onload = i,
                    n.image.onerror = o,
                    e && (n.image.crossOrigin = "anonymous"),
                    n.image.src = t,
                    n.image.complete === !0 && i(n.image)
                })
            }
            e.exports = i
        },
        {}],
        11 : [function(t, e, n) {
            function i(t, e) {
                this.link = null,
                this.options = t,
                this.support = e,
                this.origin = this.getOrigin(window.location.href)
            }
            var o = t("./log"),
            a = t("./imagecontainer"),
            s = t("./dummyimagecontainer"),
            r = t("./proxyimagecontainer"),
            c = t("./framecontainer"),
            l = t("./svgcontainer"),
            d = t("./svgnodecontainer"),
            u = t("./lineargradientcontainer"),
            h = t("./webkitgradientcontainer"),
            p = t("./utils").bind;
            i.prototype.findImages = function(t) {
                var e = [];
                return t.reduce(function(t, e) {
                    switch (e.node.nodeName) {
                    case "IMG":
                        return t.concat([{
                            args:
                            [e.node.src],
                            method: "url"
                        }]);
                    case "svg":
                    case "IFRAME":
                        return t.concat([{
                            args:
                            [e.node],
                            method: e.node.nodeName
                        }])
                    }
                    return t
                },
                []).forEach(this.addImage(e, this.loadImage), this),
                e
            },
            i.prototype.findBackgroundImage = function(t, e) {
                return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this),
                t
            },
            i.prototype.addImage = function(t, e) {
                return function(n) {
                    n.args.forEach(function(i) {
                        this.imageExists(t, i) || (t.splice(0, 0, e.call(this, n)), o("Added image #" + t.length, "string" == typeof i ? i.substring(0, 100) : i))
                    },
                    this)
                }
            },
            i.prototype.hasImageBackground = function(t) {
                return "none" !== t.method
            },
            i.prototype.loadImage = function(t) {
                if ("url" === t.method) {
                    var e = t.args[0];
                    return ! this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new a(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new a(e, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new a(e, !0) : this.options.proxy ? new r(e, this.options.proxy) : new s(e) : new l(e)
                }
                return "linear-gradient" === t.method ? new u(t) : "gradient" === t.method ? new h(t) : "svg" === t.method ? new d(t.args[0], this.support.svg) : "IFRAME" === t.method ? new c(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new s(t)
            },
            i.prototype.isSVG = function(t) {
                return "svg" === t.substring(t.length - 3).toLowerCase() || l.prototype.isInline(t)
            },
            i.prototype.imageExists = function(t, e) {
                return t.some(function(t) {
                    return t.src === e
                })
            },
            i.prototype.isSameOrigin = function(t) {
                return this.getOrigin(t) === this.origin
            },
            i.prototype.getOrigin = function(t) {
                var e = this.link || (this.link = document.createElement("a"));
                return e.href = t,
                e.href = e.href,
                e.protocol + e.hostname + e.port
            },
            i.prototype.getPromise = function(t) {
                return this.timeout(t, this.options.imageTimeout)["catch"](function() {
                    var e = new s(t.src);
                    return e.promise.then(function(e) {
                        t.image = e
                    })
                })
            },
            i.prototype.get = function(t) {
                var e = null;
                return this.images.some(function(n) {
                    return (e = n).src === t
                }) ? e: null
            },
            i.prototype.fetch = function(t) {
                return this.images = t.reduce(p(this.findBackgroundImage, this), this.findImages(t)),
                this.images.forEach(function(t, e) {
                    t.promise.then(function() {
                        o("Succesfully loaded image #" + (e + 1), t)
                    },
                    function(n) {
                        o("Failed loading image #" + (e + 1), t, n)
                    })
                }),
                this.ready = Promise.all(this.images.map(this.getPromise, this)),
                o("Finished searching images"),
                this
            },
            i.prototype.timeout = function(t, e) {
                var n, i = Promise.race([t.promise, new Promise(function(i, a) {
                    n = setTimeout(function() {
                        o("Timed out loading image", t),
                        a(t)
                    },
                    e)
                })]).then(function(t) {
                    return clearTimeout(n),
                    t
                });
                return i["catch"](function() {
                    clearTimeout(n)
                }),
                i
            },
            e.exports = i
        },
        {
            "./dummyimagecontainer": 5,
            "./framecontainer": 8,
            "./imagecontainer": 10,
            "./lineargradientcontainer": 12,
            "./log": 13,
            "./proxyimagecontainer": 17,
            "./svgcontainer": 23,
            "./svgnodecontainer": 24,
            "./utils": 26,
            "./webkitgradientcontainer": 27
        }],
        12 : [function(t, e, n) {
            function i(t) {
                o.apply(this, arguments),
                this.type = o.TYPES.LINEAR;
                var e = i.REGEXP_DIRECTION.test(t.args[0]) || !o.REGEXP_COLORSTOP.test(t.args[0]);
                e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
                    switch (t) {
                    case "left":
                        this.x0 = 0,
                        this.x1 = 1;
                        break;
                    case "top":
                        this.y0 = 0,
                        this.y1 = 1;
                        break;
                    case "right":
                        this.x0 = 1,
                        this.x1 = 0;
                        break;
                    case "bottom":
                        this.y0 = 1,
                        this.y1 = 0;
                        break;
                    case "to":
                        var n = this.y0,
                        i = this.x0;
                        this.y0 = this.y1,
                        this.x0 = this.x1,
                        this.x1 = i,
                        this.y1 = n;
                        break;
                    case "center":
                        break;
                    default:
                        var o = .01 * parseFloat(t, 10);
                        if (isNaN(o)) break;
                        0 === e ? (this.y0 = o, this.y1 = 1 - this.y0) : (this.x0 = o, this.x1 = 1 - this.x0)
                    }
                },
                this) : (this.y0 = 0, this.y1 = 1),
                this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                    var e = t.match(o.REGEXP_COLORSTOP),
                    n = +e[2],
                    i = 0 === n ? "%": e[3];
                    return {
                        color: new a(e[1]),
                        stop: "%" === i ? n / 100 : null
                    }
                }),
                null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
                null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
                this.colorStops.forEach(function(t, e) {
                    null === t.stop && this.colorStops.slice(e).some(function(n, i) {
                        return null !== n.stop ? (t.stop = (n.stop - this.colorStops[e - 1].stop) / (i + 1) + this.colorStops[e - 1].stop, !0) : !1
                    },
                    this)
                },
                this)
            }
            var o = t("./gradientcontainer"),
            a = t("./color");
            i.prototype = Object.create(o.prototype),
            i.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,
            e.exports = i
        },
        {
            "./color": 3,
            "./gradientcontainer": 9
        }],
        13 : [function(t, e, n) {
            var i = function() {
                i.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - i.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
            };
            i.options = {
                logging: !1
            },
            e.exports = i
        },
        {}],
        14 : [function(t, e, n) {
            function i(t, e) {
                this.node = t,
                this.parent = e,
                this.stack = null,
                this.bounds = null,
                this.borders = null,
                this.clip = [],
                this.backgroundClip = [],
                this.offsetBounds = null,
                this.visible = null,
                this.computedStyles = null,
                this.colors = {},
                this.styles = {},
                this.backgroundImages = null,
                this.transformData = null,
                this.transformMatrix = null,
                this.isPseudoElement = !1,
                this.opacity = null
            }
            function o(t) {
                var e = t.options[t.selectedIndex || 0];
                return e ? e.text || "": ""
            }
            function a(t) {
                if (t && "matrix" === t[1]) return t[2].split(",").map(function(t) {
                    return parseFloat(t.trim())
                });
                if (t && "matrix3d" === t[1]) {
                    var e = t[2].split(",").map(function(t) {
                        return parseFloat(t.trim())
                    });
                    return [e[0], e[1], e[4], e[5], e[12], e[13]]
                }
            }
            function s(t) {
                return - 1 !== t.toString().indexOf("%")
            }
            function r(t) {
                return t.replace("px", "")
            }
            function c(t) {
                return parseFloat(t)
            }
            var l = t("./color"),
            d = t("./utils"),
            u = d.getBounds,
            h = d.parseBackgrounds,
            p = d.offsetBounds;
            i.prototype.cloneTo = function(t) {
                t.visible = this.visible,
                t.borders = this.borders,
                t.bounds = this.bounds,
                t.clip = this.clip,
                t.backgroundClip = this.backgroundClip,
                t.computedStyles = this.computedStyles,
                t.styles = this.styles,
                t.backgroundImages = this.backgroundImages,
                t.opacity = this.opacity
            },
            i.prototype.getOpacity = function() {
                return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
            },
            i.prototype.assignStack = function(t) {
                this.stack = t,
                t.children.push(this)
            },
            i.prototype.isElementVisible = function() {
                return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible: "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
            },
            i.prototype.css = function(t) {
                return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before": ":after") : this.computedStyle(null)),
                this.styles[t] || (this.styles[t] = this.computedStyles[t])
            },
            i.prototype.prefixedCss = function(t) {
                var e = ["webkit", "moz", "ms", "o"],
                n = this.css(t);
                return void 0 === n && e.some(function(e) {
                    return n = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)),
                    void 0 !== n
                },
                this),
                void 0 === n ? null: n
            },
            i.prototype.computedStyle = function(t) {
                return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
            },
            i.prototype.cssInt = function(t) {
                var e = parseInt(this.css(t), 10);
                return isNaN(e) ? 0 : e
            },
            i.prototype.color = function(t) {
                return this.colors[t] || (this.colors[t] = new l(this.css(t)))
            },
            i.prototype.cssFloat = function(t) {
                var e = parseFloat(this.css(t));
                return isNaN(e) ? 0 : e
            },
            i.prototype.fontWeight = function() {
                var t = this.css("fontWeight");
                switch (parseInt(t, 10)) {
                case 401:
                    t = "bold";
                    break;
                case 400:
                    t = "normal"
                }
                return t
            },
            i.prototype.parseClip = function() {
                var t = this.css("clip").match(this.CLIP);
                return t ? {
                    top: parseInt(t[1], 10),
                    right: parseInt(t[2], 10),
                    bottom: parseInt(t[3], 10),
                    left: parseInt(t[4], 10)
                }: null
            },
            i.prototype.parseBackgroundImages = function() {
                return this.backgroundImages || (this.backgroundImages = h(this.css("backgroundImage")))
            },
            i.prototype.cssList = function(t, e) {
                var n = (this.css(t) || "").split(",");
                return n = n[e || 0] || n[0] || "auto",
                n = n.trim().split(" "),
                1 === n.length && (n = [n[0], s(n[0]) ? "auto": n[0]]),
                n
            },
            i.prototype.parseBackgroundSize = function(t, e, n) {
                var i, o, a = this.cssList("backgroundSize", n);
                if (s(a[0])) i = t.width * parseFloat(a[0]) / 100;
                else {
                    if (/contain|cover/.test(a[0])) {
                        var r = t.width / t.height,
                        c = e.width / e.height;
                        return c > r ^ "contain" === a[0] ? {
                            width: t.height * c,
                            height: t.height
                        }: {
                            width: t.width,
                            height: t.width / c
                        }
                    }
                    i = parseInt(a[0], 10)
                }
                return o = "auto" === a[0] && "auto" === a[1] ? e.height: "auto" === a[1] ? i / e.width * e.height: s(a[1]) ? t.height * parseFloat(a[1]) / 100 : parseInt(a[1], 10),
                "auto" === a[0] && (i = o / e.height * e.width),
                {
                    width: i,
                    height: o
                }
            },
            i.prototype.parseBackgroundPosition = function(t, e, n, i) {
                var o, a, r = this.cssList("backgroundPosition", n);
                return o = s(r[0]) ? (t.width - (i || e).width) * (parseFloat(r[0]) / 100) : parseInt(r[0], 10),
                a = "auto" === r[1] ? o / e.width * e.height: s(r[1]) ? (t.height - (i || e).height) * parseFloat(r[1]) / 100 : parseInt(r[1], 10),
                "auto" === r[0] && (o = a / e.height * e.width),
                {
                    left: o,
                    top: a
                }
            },
            i.prototype.parseBackgroundRepeat = function(t) {
                return this.cssList("backgroundRepeat", t)[0]
            },
            i.prototype.parseTextShadows = function() {
                var t = this.css("textShadow"),
                e = [];
                if (t && "none" !== t) for (var n = t.match(this.TEXT_SHADOW_PROPERTY), i = 0; n && i < n.length; i++) {
                    var o = n[i].match(this.TEXT_SHADOW_VALUES);
                    e.push({
                        color: new l(o[0]),
                        offsetX: o[1] ? parseFloat(o[1].replace("px", "")) : 0,
                        offsetY: o[2] ? parseFloat(o[2].replace("px", "")) : 0,
                        blur: o[3] ? o[3].replace("px", "") : 0
                    })
                }
                return e
            },
            i.prototype.parseTransform = function() {
                if (!this.transformData) if (this.hasTransform()) {
                    var t = this.parseBounds(),
                    e = this.prefixedCss("transformOrigin").split(" ").map(r).map(c);
                    e[0] += t.left,
                    e[1] += t.top,
                    this.transformData = {
                        origin: e,
                        matrix: this.parseTransformMatrix()
                    }
                } else this.transformData = {
                    origin: [0, 0],
                    matrix: [1, 0, 0, 1, 0, 0]
                };
                return this.transformData
            },
            i.prototype.parseTransformMatrix = function() {
                if (!this.transformMatrix) {
                    var t = this.prefixedCss("transform"),
                    e = t ? a(t.match(this.MATRIX_PROPERTY)) : null;
                    this.transformMatrix = e ? e: [1, 0, 0, 1, 0, 0]
                }
                return this.transformMatrix
            },
            i.prototype.parseBounds = function() {
                return this.bounds || (this.bounds = this.hasTransform() ? p(this.node) : u(this.node))
            },
            i.prototype.hasTransform = function() {
                return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
            },
            i.prototype.getValue = function() {
                var t = this.node.value || "";
                return "SELECT" === this.node.tagName ? t = o(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")),
                0 === t.length ? this.node.placeholder || "": t
            },
            i.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/,
            i.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
            i.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
            i.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,
            e.exports = i
        },
        {
            "./color": 3,
            "./utils": 26
        }],
        15 : [function(t, e, n) {
            function i(t, e, n, i, o) {
                B("Starting NodeParser"),
                this.renderer = e,
                this.options = o,
                this.range = null,
                this.support = n,
                this.renderQueue = [],
                this.stack = new H(!0, 1, t.ownerDocument, null);
                var a = new U(t, null);
                if (o.background && e.rectangle(0, 0, e.width, e.height, new Q(o.background)), t === t.ownerDocument.documentElement) {
                    var s = new U(a.color("backgroundColor").isTransparent() ? t.ownerDocument.body: t.ownerDocument.documentElement, null);
                    e.rectangle(0, 0, e.width, e.height, s.color("backgroundColor"))
                }
                a.visibile = a.isElementVisible(),
                this.createPseudoHideStyles(t.ownerDocument),
                this.disableAnimations(t.ownerDocument),
                this.nodes = L([a].concat(this.getChildren(a)).filter(function(t) {
                    return t.visible = t.isElementVisible()
                }).map(this.getPseudoElements, this)),
                this.fontMetrics = new V,
                B("Fetched nodes, total:", this.nodes.length),
                B("Calculate overflow clips"),
                this.calculateOverflowClips(),
                B("Start fetching images"),
                this.images = i.fetch(this.nodes.filter(C)),
                this.ready = this.images.ready.then(j(function() {
                    return B("Images loaded, starting parsing"),
                    B("Creating stacking contexts"),
                    this.createStackingContexts(),
                    B("Sorting stacking contexts"),
                    this.sortStackingContexts(this.stack),
                    this.parse(this.stack),
                    B("Render queue created with " + this.renderQueue.length + " items"),
                    new Promise(j(function(t) {
                        o.async ? "function" == typeof o.async ? o.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
                    },
                    this))
                },
                this))
            }
            function o(t) {
                return t.parent && t.parent.clip.length
            }
            function a(t) {
                return t.replace(/(\-[a-z])/g,
                function(t) {
                    return t.toUpperCase().replace("-", "")
                })
            }
            function s() {}
            function r(t, e, n, i) {
                return t.map(function(o, a) {
                    if (o.width > 0) {
                        var s = e.left,
                        r = e.top,
                        c = e.width,
                        l = e.height - t[2].width;
                        switch (a) {
                        case 0:
                            l = t[0].width,
                            o.args = u({
                                c1: [s, r],
                                c2: [s + c, r],
                                c3: [s + c - t[1].width, r + l],
                                c4: [s + t[3].width, r + l]
                            },
                            i[0], i[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                            break;
                        case 1:
                            s = e.left + e.width - t[1].width,
                            c = t[1].width,
                            o.args = u({
                                c1: [s + c, r],
                                c2: [s + c, r + l + t[2].width],
                                c3: [s, r + l],
                                c4: [s, r + t[0].width]
                            },
                            i[1], i[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                            break;
                        case 2:
                            r = r + e.height - t[2].width,
                            l = t[2].width,
                            o.args = u({
                                c1: [s + c, r + l],
                                c2: [s, r + l],
                                c3: [s + t[3].width, r],
                                c4: [s + c - t[3].width, r]
                            },
                            i[2], i[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                            break;
                        case 3:
                            c = t[3].width,
                            o.args = u({
                                c1: [s, r + l + t[2].width],
                                c2: [s, r],
                                c3: [s + c, r + t[0].width],
                                c4: [s + c, r + l]
                            },
                            i[3], i[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                        }
                    }
                    return o
                })
            }
            function c(t, e, n, i) {
                var o = 4 * ((Math.sqrt(2) - 1) / 3),
                a = n * o,
                s = i * o,
                r = t + n,
                c = e + i;
                return {
                    topLeft: d({
                        x: t,
                        y: c
                    },
                    {
                        x: t,
                        y: c - s
                    },
                    {
                        x: r - a,
                        y: e
                    },
                    {
                        x: r,
                        y: e
                    }),
                    topRight: d({
                        x: t,
                        y: e
                    },
                    {
                        x: t + a,
                        y: e
                    },
                    {
                        x: r,
                        y: c - s
                    },
                    {
                        x: r,
                        y: c
                    }),
                    bottomRight: d({
                        x: r,
                        y: e
                    },
                    {
                        x: r,
                        y: e + s
                    },
                    {
                        x: t + a,
                        y: c
                    },
                    {
                        x: t,
                        y: c
                    }),
                    bottomLeft: d({
                        x: r,
                        y: c
                    },
                    {
                        x: r - a,
                        y: c
                    },
                    {
                        x: t,
                        y: e + s
                    },
                    {
                        x: t,
                        y: e
                    })
                }
            }
            function l(t, e, n) {
                var i = t.left,
                o = t.top,
                a = t.width,
                s = t.height,
                r = e[0][0] < a / 2 ? e[0][0] : a / 2,
                l = e[0][1] < s / 2 ? e[0][1] : s / 2,
                d = e[1][0] < a / 2 ? e[1][0] : a / 2,
                u = e[1][1] < s / 2 ? e[1][1] : s / 2,
                h = e[2][0] < a / 2 ? e[2][0] : a / 2,
                p = e[2][1] < s / 2 ? e[2][1] : s / 2,
                f = e[3][0] < a / 2 ? e[3][0] : a / 2,
                g = e[3][1] < s / 2 ? e[3][1] : s / 2,
                v = a - d,
                m = s - p,
                b = a - h,
                w = s - g;
                return {
                    topLeftOuter: c(i, o, r, l).topLeft.subdivide(.5),
                    topLeftInner: c(i + n[3].width, o + n[0].width, Math.max(0, r - n[3].width), Math.max(0, l - n[0].width)).topLeft.subdivide(.5),
                    topRightOuter: c(i + v, o, d, u).topRight.subdivide(.5),
                    topRightInner: c(i + Math.min(v, a + n[3].width), o + n[0].width, v > a + n[3].width ? 0 : d - n[3].width, u - n[0].width).topRight.subdivide(.5),
                    bottomRightOuter: c(i + b, o + m, h, p).bottomRight.subdivide(.5),
                    bottomRightInner: c(i + Math.min(b, a - n[3].width), o + Math.min(m, s + n[0].width), Math.max(0, h - n[1].width), p - n[2].width).bottomRight.subdivide(.5),
                    bottomLeftOuter: c(i, o + w, f, g).bottomLeft.subdivide(.5),
                    bottomLeftInner: c(i + n[3].width, o + w, Math.max(0, f - n[3].width), g - n[2].width).bottomLeft.subdivide(.5)
                }
            }
            function d(t, e, n, i) {
                var o = function(t, e, n) {
                    return {
                        x: t.x + (e.x - t.x) * n,
                        y: t.y + (e.y - t.y) * n
                    }
                };
                return {
                    start: t,
                    startControl: e,
                    endControl: n,
                    end: i,
                    subdivide: function(a) {
                        var s = o(t, e, a),
                        r = o(e, n, a),
                        c = o(n, i, a),
                        l = o(s, r, a),
                        u = o(r, c, a),
                        h = o(l, u, a);
                        return [d(t, s, l, h), d(h, u, c, i)]
                    },
                    curveTo: function(t) {
                        t.push(["bezierCurve", e.x, e.y, n.x, n.y, i.x, i.y])
                    },
                    curveToReversed: function(i) {
                        i.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
                    }
                }
            }
            function u(t, e, n, i, o, a, s) {
                var r = [];
                return e[0] > 0 || e[1] > 0 ? (r.push(["line", i[1].start.x, i[1].start.y]), i[1].curveTo(r)) : r.push(["line", t.c1[0], t.c1[1]]),
                n[0] > 0 || n[1] > 0 ? (r.push(["line", a[0].start.x, a[0].start.y]), a[0].curveTo(r), r.push(["line", s[0].end.x, s[0].end.y]), s[0].curveToReversed(r)) : (r.push(["line", t.c2[0], t.c2[1]]), r.push(["line", t.c3[0], t.c3[1]])),
                e[0] > 0 || e[1] > 0 ? (r.push(["line", o[1].end.x, o[1].end.y]), o[1].curveToReversed(r)) : r.push(["line", t.c4[0], t.c4[1]]),
                r
            }
            function h(t, e, n, i, o, a, s) {
                e[0] > 0 || e[1] > 0 ? (t.push(["line", i[0].start.x, i[0].start.y]), i[0].curveTo(t), i[1].curveTo(t)) : t.push(["line", a, s]),
                (n[0] > 0 || n[1] > 0) && t.push(["line", o[0].start.x, o[0].start.y])
            }
            function p(t) {
                return t.cssInt("zIndex") < 0
            }
            function f(t) {
                return t.cssInt("zIndex") > 0
            }
            function g(t) {
                return 0 === t.cssInt("zIndex")
            }
            function v(t) {
                return - 1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"))
            }
            function m(t) {
                return t instanceof H
            }
            function b(t) {
                return t.node.data.trim().length > 0
            }
            function w(t) {
                return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
            }
            function y(t) {
                return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                    var n = t.css("border" + e + "Radius"),
                    i = n.split(" ");
                    return i.length <= 1 && (i[1] = i[0]),
                    i.map(P)
                })
            }
            function k(t) {
                return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
            }
            function _(t) {
                var e = t.css("position"),
                n = -1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto";
                return "auto" !== n
            }
            function x(t) {
                return "static" !== t.css("position")
            }
            function T(t) {
                return "none" !== t.css("float")
            }
            function E(t) {
                return - 1 !== ["inline-block", "inline-table"].indexOf(t.css("display"))
            }
            function I(t) {
                var e = this;
                return function() {
                    return ! t.apply(e, arguments)
                }
            }
            function C(t) {
                return t.node.nodeType === Node.ELEMENT_NODE
            }
            function S(t) {
                return t.isPseudoElement === !0
            }
            function A(t) {
                return t.node.nodeType === Node.TEXT_NODE
            }
            function N(t) {
                return function(e, n) {
                    return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length)
                }
            }
            function O(t) {
                return t.getOpacity() < 1
            }
            function P(t) {
                return parseInt(t, 10)
            }
            function R(t) {
                return t.width
            }
            function D(t) {
                return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName)
            }
            function L(t) {
                return [].concat.apply([], t)
            }
            function q(t) {
                var e = t.substr(0, 1);
                return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
            }
            function $(t) {
                for (var e, n = [], i = 0, o = !1; t.length;) M(t[i]) === o ? (e = t.splice(0, i), e.length && n.push(W.ucs2.encode(e)), o = !o, i = 0) : i++,
                i >= t.length && (e = t.splice(0, i), e.length && n.push(W.ucs2.encode(e)));
                return n
            }
            function M(t) {
                return - 1 !== [32, 13, 10, 9, 45].indexOf(t)
            }
            function F(t) {
                return /[^\u0000-\u00ff]/.test(t)
            }
            var B = t("./log"),
            W = t("punycode"),
            U = t("./nodecontainer"),
            z = t("./textcontainer"),
            K = t("./pseudoelementcontainer"),
            V = t("./fontmetrics"),
            Q = t("./color"),
            H = t("./stackingcontext"),
            G = t("./utils"),
            j = G.bind,
            Y = G.getBounds,
            X = G.parseBackgrounds,
            Z = G.offsetBounds;
            i.prototype.calculateOverflowClips = function() {
                this.nodes.forEach(function(t) {
                    if (C(t)) {
                        S(t) && t.appendToDOM(),
                        t.borders = this.parseBorders(t);
                        var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                        n = t.parseClip();
                        n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                        t.clip = o(t) ? t.parent.clip.concat(e) : e,
                        t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip,
                        S(t) && t.cleanDOM()
                    } else A(t) && (t.clip = o(t) ? t.parent.clip: []);
                    S(t) || (t.bounds = null)
                },
                this)
            },
            i.prototype.asyncRenderer = function(t, e, n) {
                n = n || Date.now(),
                this.paint(t[this.renderIndex++]),
                t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(j(function() {
                    this.asyncRenderer(t, e)
                },
                this), 0)
            },
            i.prototype.createPseudoHideStyles = function(t) {
                this.createStyles(t, "." + K.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + K.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
            },
            i.prototype.disableAnimations = function(t) {
                this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
            },
            i.prototype.createStyles = function(t, e) {
                var n = t.createElement("style");
                n.innerHTML = e,
                t.body.appendChild(n)
            },
            i.prototype.getPseudoElements = function(t) {
                var e = [[t]];
                if (t.node.nodeType === Node.ELEMENT_NODE) {
                    var n = this.getPseudoElement(t, ":before"),
                    i = this.getPseudoElement(t, ":after");
                    n && e.push(n),
                    i && e.push(i)
                }
                return L(e)
            },
            i.prototype.getPseudoElement = function(t, e) {
                var n = t.computedStyle(e);
                if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
                for (var i = q(n.content), o = "url" === i.substr(0, 3), s = document.createElement(o ? "img": "html2canvaspseudoelement"), r = new K(s, t, e), c = n.length - 1; c >= 0; c--) {
                    var l = a(n.item(c));
                    s.style[l] = n[l]
                }
                if (s.className = K.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + K.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, o) return s.src = X(i)[0].args[0],
                [r];
                var d = document.createTextNode(i);
                return s.appendChild(d),
                [r, new z(d, r)]
            },
            i.prototype.getChildren = function(t) {
                return L([].filter.call(t.node.childNodes, k).map(function(e) {
                    var n = [e.nodeType === Node.TEXT_NODE ? new z(e, t) : new U(e, t)].filter(D);
                    return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
                },
                this))
            },
            i.prototype.newStackingContext = function(t, e) {
                var n = new H(e, t.getOpacity(), t.node, t.parent);
                t.cloneTo(n);
                var i = e ? n.getParentStack(this) : n.parent.stack;
                i.contexts.push(n),
                t.stack = n
            },
            i.prototype.createStackingContexts = function() {
                this.nodes.forEach(function(t) {
                    C(t) && (this.isRootElement(t) || O(t) || _(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : C(t) && (x(t) && g(t) || E(t) || T(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
                },
                this)
            },
            i.prototype.isBodyWithTransparentRoot = function(t) {
                return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
            },
            i.prototype.isRootElement = function(t) {
                return null === t.parent
            },
            i.prototype.sortStackingContexts = function(t) {
                t.contexts.sort(N(t.contexts.slice(0))),
                t.contexts.forEach(this.sortStackingContexts, this)
            },
            i.prototype.parseTextBounds = function(t) {
                return function(e, n, i) {
                    if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                        if (this.support.rangeBounds && !t.parent.hasTransform()) {
                            var o = i.slice(0, n).join("").length;
                            return this.getRangeBounds(t.node, o, e.length)
                        }
                        if (t.node && "string" == typeof t.node.data) {
                            var a = t.node.splitText(e.length),
                            s = this.getWrapperBounds(t.node, t.parent.hasTransform());
                            return t.node = a,
                            s
                        }
                    } else(!this.support.rangeBounds || t.parent.hasTransform()) && (t.node = t.node.splitText(e.length));
                    return {}
                }
            },
            i.prototype.getWrapperBounds = function(t, e) {
                var n = t.ownerDocument.createElement("html2canvaswrapper"),
                i = t.parentNode,
                o = t.cloneNode(!0);
                n.appendChild(t.cloneNode(!0)),
                i.replaceChild(n, t);
                var a = e ? Z(n) : Y(n);
                return i.replaceChild(o, n),
                a
            },
            i.prototype.getRangeBounds = function(t, e, n) {
                var i = this.range || (this.range = t.ownerDocument.createRange());
                return i.setStart(t, e),
                i.setEnd(t, e + n),
                i.getBoundingClientRect()
            },
            i.prototype.parse = function(t) {
                var e = t.contexts.filter(p),
                n = t.children.filter(C),
                i = n.filter(I(T)),
                o = i.filter(I(x)).filter(I(v)),
                a = n.filter(I(x)).filter(T),
                r = i.filter(I(x)).filter(v),
                c = t.contexts.concat(i.filter(x)).filter(g),
                l = t.children.filter(A).filter(b),
                d = t.contexts.filter(f);
                e.concat(o).concat(a).concat(r).concat(c).concat(l).concat(d).forEach(function(t) {
                    this.renderQueue.push(t),
                    m(t) && (this.parse(t), this.renderQueue.push(new s))
                },
                this)
            },
            i.prototype.paint = function(t) {
                try {
                    t instanceof s ? this.renderer.ctx.restore() : A(t) ? (S(t.parent) && t.parent.appendToDOM(), this.paintText(t), S(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
                } catch(e) {
                    if (B(e), this.options.strict) throw e
                }
            },
            i.prototype.paintNode = function(t) {
                m(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
                "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
            },
            i.prototype.paintElement = function(t) {
                var e = t.parseBounds();
                this.renderer.clip(t.backgroundClip,
                function() {
                    this.renderer.renderBackground(t, e, t.borders.borders.map(R))
                },
                this),
                this.renderer.clip(t.clip,
                function() {
                    this.renderer.renderBorders(t.borders.borders)
                },
                this),
                this.renderer.clip(t.backgroundClip,
                function() {
                    switch (t.node.nodeName) {
                    case "svg":
                    case "IFRAME":
                        var n = this.images.get(t.node);
                        n ? this.renderer.renderImage(t, e, t.borders, n) : B("Error loading <" + t.node.nodeName + ">", t.node);
                        break;
                    case "IMG":
                        var i = this.images.get(t.node.src);
                        i ? this.renderer.renderImage(t, e, t.borders, i) : B("Error loading <img>", t.node.src);
                        break;
                    case "CANVAS":
                        this.renderer.renderImage(t, e, t.borders, {
                            image: t.node
                        });
                        break;
                    case "SELECT":
                    case "INPUT":
                    case "TEXTAREA":
                        this.paintFormValue(t)
                    }
                },
                this)
            },
            i.prototype.paintCheckbox = function(t) {
                var e = t.parseBounds(),
                n = Math.min(e.width, e.height),
                i = {
                    width: n - 1,
                    height: n - 1,
                    top: e.top,
                    left: e.left
                },
                o = [3, 3],
                a = [o, o, o, o],
                s = [1, 1, 1, 1].map(function(t) {
                    return {
                        color: new Q("#A5A5A5"),
                        width: t
                    }
                }),
                c = l(i, a, s);
                this.renderer.clip(t.backgroundClip,
                function() {
                    this.renderer.rectangle(i.left + 1, i.top + 1, i.width - 2, i.height - 2, new Q("#DEDEDE")),
                    this.renderer.renderBorders(r(s, i, c, a)),
                    t.node.checked && (this.renderer.font(new Q("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", i.left + n / 6, i.top + n - 1))
                },
                this)
            },
            i.prototype.paintRadio = function(t) {
                var e = t.parseBounds(),
                n = Math.min(e.width, e.height) - 2;
                this.renderer.clip(t.backgroundClip,
                function() {
                    this.renderer.circleStroke(e.left + 1, e.top + 1, n, new Q("#DEDEDE"), 1, new Q("#A5A5A5")),
                    t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new Q("#424242"))
                },
                this)
            },
            i.prototype.paintFormValue = function(t) {
                var e = t.getValue();
                if (e.length > 0) {
                    var n = t.node.ownerDocument,
                    i = n.createElement("html2canvaswrapper"),
                    o = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                    o.forEach(function(e) {
                        try {
                            i.style[e] = t.css(e)
                        } catch(n) {
                            B("html2canvas: Parse: Exception caught in renderFormValue: " + n.message)
                        }
                    });
                    var a = t.parseBounds();
                    i.style.position = "fixed",
                    i.style.left = a.left + "px",
                    i.style.top = a.top + "px",
                    i.textContent = e,
                    n.body.appendChild(i),
                    this.paintText(new z(i.firstChild, t)),
                    n.body.removeChild(i)
                }
            },
            i.prototype.paintText = function(t) {
                t.applyTextTransform();
                var e = W.ucs2.decode(t.node.data),
                n = this.options.letterRendering && !w(t) || F(t.node.data) ? e.map(function(t) {
                    return W.ucs2.encode([t])
                }) : $(e),
                i = t.parent.fontWeight(),
                o = t.parent.css("fontSize"),
                a = t.parent.css("fontFamily"),
                s = t.parent.parseTextShadows();
                this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), i, o, a),
                s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(),
                this.renderer.clip(t.parent.clip,
                function() {
                    n.map(this.parseTextBounds(t), this).forEach(function(e, i) {
                        e && (this.renderer.text(n[i], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(a, o)))
                    },
                    this)
                },
                this)
            },
            i.prototype.renderTextDecoration = function(t, e, n) {
                switch (t.css("textDecoration").split(" ")[0]) {
                case "underline":
                    this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                    break;
                case "overline":
                    this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                    break;
                case "line-through":
                    this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
                }
            };
            var J = {
                inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
            };
            i.prototype.parseBorders = function(t) {
                var e = t.parseBounds(),
                n = y(t),
                i = ["Top", "Right", "Bottom", "Left"].map(function(e, n) {
                    var i = t.css("border" + e + "Style"),
                    o = t.color("border" + e + "Color");
                    "inset" === i && o.isBlack() && (o = new Q([255, 255, 255, o.a]));
                    var a = J[i] ? J[i][n] : null;
                    return {
                        width: t.cssInt("border" + e + "Width"),
                        color: a ? o[a[0]](a[1]) : o,
                        args: null
                    }
                }),
                o = l(e, n, i);
                return {
                    clip: this.parseBackgroundClip(t, o, i, n, e),
                    borders: r(i, e, o, n)
                }
            },
            i.prototype.parseBackgroundClip = function(t, e, n, i, o) {
                var a = t.css("backgroundClip"),
                s = [];
                switch (a) {
                case "content-box":
                case "padding-box":
                    h(s, i[0], i[1], e.topLeftInner, e.topRightInner, o.left + n[3].width, o.top + n[0].width),
                    h(s, i[1], i[2], e.topRightInner, e.bottomRightInner, o.left + o.width - n[1].width, o.top + n[0].width),
                    h(s, i[2], i[3], e.bottomRightInner, e.bottomLeftInner, o.left + o.width - n[1].width, o.top + o.height - n[2].width),
                    h(s, i[3], i[0], e.bottomLeftInner, e.topLeftInner, o.left + n[3].width, o.top + o.height - n[2].width);
                    break;
                default:
                    h(s, i[0], i[1], e.topLeftOuter, e.topRightOuter, o.left, o.top),
                    h(s, i[1], i[2], e.topRightOuter, e.bottomRightOuter, o.left + o.width, o.top),
                    h(s, i[2], i[3], e.bottomRightOuter, e.bottomLeftOuter, o.left + o.width, o.top + o.height),
                    h(s, i[3], i[0], e.bottomLeftOuter, e.topLeftOuter, o.left, o.top + o.height)
                }
                return s
            },
            e.exports = i
        },
        {
            "./color": 3,
            "./fontmetrics": 7,
            "./log": 13,
            "./nodecontainer": 14,
            "./pseudoelementcontainer": 18,
            "./stackingcontext": 21,
            "./textcontainer": 25,
            "./utils": 26,
            punycode: 1
        }],
        16 : [function(t, e, n) {
            function i(t, e, n) {
                var i = "withCredentials" in new XMLHttpRequest;
                if (!e) return Promise.reject("No proxy configured");
                var o = s(i),
                c = r(e, t, o);
                return i ? d(c) : a(n, c, o).then(function(t) {
                    return f(t.content)
                })
            }
            function o(t, e, n) {
                var i = "crossOrigin" in new Image,
                o = s(i),
                c = r(e, t, o);
                return i ? Promise.resolve(c) : a(n, c, o).then(function(t) {
                    return "data:" + t.type + ";base64," + t.content
                })
            }
            function a(t, e, n) {
                return new Promise(function(i, o) {
                    var a = t.createElement("script"),
                    s = function() {
                        delete window.html2canvas.proxy[n],
                        t.body.removeChild(a)
                    };
                    window.html2canvas.proxy[n] = function(t) {
                        s(),
                        i(t)
                    },
                    a.src = e,
                    a.onerror = function(t) {
                        s(),
                        o(t)
                    },
                    t.body.appendChild(a)
                })
            }
            function s(t) {
                return t ? "": "html2canvas_" + Date.now() + "_" + ++g + "_" + Math.round(1e5 * Math.random())
            }
            function r(t, e, n) {
                return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n: "")
            }
            function c(t) {
                return function(e) {
                    var n, i = new DOMParser;
                    try {
                        n = i.parseFromString(e, "text/html")
                    } catch(o) {
                        h("DOMParser not supported, falling back to createHTMLDocument"),
                        n = document.implementation.createHTMLDocument("");
                        try {
                            n.open(),
                            n.write(e),
                            n.close()
                        } catch(a) {
                            h("createHTMLDocument write not supported, falling back to document.body.innerHTML"),
                            n.body.innerHTML = e
                        }
                    }
                    var s = n.querySelector("base");
                    if (!s || !s.href.host) {
                        var r = n.createElement("base");
                        r.href = t,
                        n.head.insertBefore(r, n.head.firstChild)
                    }
                    return n
                }
            }
            function l(t, e, n, o, a, s) {
                return new i(t, e, window.document).then(c(t)).then(function(t) {
                    return p(t, n, o, a, s, 0, 0)
                })
            }
            var d = t("./xhr"),
            u = t("./utils"),
            h = t("./log"),
            p = t("./clone"),
            f = u.decode64,
            g = 0;
            n.Proxy = i,
            n.ProxyURL = o,
            n.loadUrlDocument = l
        },
        {
            "./clone": 2,
            "./log": 13,
            "./utils": 26,
            "./xhr": 28
        }],
        17 : [function(t, e, n) {
            function i(t, e) {
                var n = document.createElement("a");
                n.href = t,
                t = n.href,
                this.src = t,
                this.image = new Image;
                var i = this;
                this.promise = new Promise(function(n, a) {
                    i.image.crossOrigin = "Anonymous",
                    i.image.onload = n,
                    i.image.onerror = a,
                    new o(t, e, document).then(function(t) {
                        i.image.src = t
                    })["catch"](a)
                })
            }
            var o = t("./proxy").ProxyURL;
            e.exports = i
        },
        {
            "./proxy": 16
        }],
        18 : [function(t, e, n) {
            function i(t, e, n) {
                o.call(this, t, e),
                this.isPseudoElement = !0,
                this.before = ":before" === n
            }
            var o = t("./nodecontainer");
            i.prototype.cloneTo = function(t) {
                i.prototype.cloneTo.call(this, t),
                t.isPseudoElement = !0,
                t.before = this.before
            },
            i.prototype = Object.create(o.prototype),
            i.prototype.appendToDOM = function() {
                this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node),
                this.parent.node.className += " " + this.getHideClass()
            },
            i.prototype.cleanDOM = function() {
                this.node.parentNode.removeChild(this.node),
                this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
            },
            i.prototype.getHideClass = function() {
                return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE": "AFTER")]
            },
            i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before",
            i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after",
            e.exports = i
        },
        {
            "./nodecontainer": 14
        }],
        19 : [function(t, e, n) {
            function i(t, e, n, i, o) {
                this.width = t,
                this.height = e,
                this.images = n,
                this.options = i,
                this.document = o
            }
            var o = t("./log");
            i.prototype.renderImage = function(t, e, n, i) {
                var o = t.cssInt("paddingLeft"),
                a = t.cssInt("paddingTop"),
                s = t.cssInt("paddingRight"),
                r = t.cssInt("paddingBottom"),
                c = n.borders,
                l = e.width - (c[1].width + c[3].width + o + s),
                d = e.height - (c[0].width + c[2].width + a + r);
                this.drawImage(i, 0, 0, i.image.width || l, i.image.height || d, e.left + o + c[3].width, e.top + a + c[0].width, l, d)
            },
            i.prototype.renderBackground = function(t, e, n) {
                e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n))
            },
            i.prototype.renderBackgroundColor = function(t, e) {
                var n = t.color("backgroundColor");
                n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
            },
            i.prototype.renderBorders = function(t) {
                t.forEach(this.renderBorder, this)
            },
            i.prototype.renderBorder = function(t) {
                t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
            },
            i.prototype.renderBackgroundImage = function(t, e, n) {
                var i = t.parseBackgroundImages();
                i.reverse().forEach(function(i, a, s) {
                    switch (i.method) {
                    case "url":
                        var r = this.images.get(i.args[0]);
                        r ? this.renderBackgroundRepeating(t, e, r, s.length - (a + 1), n) : o("Error loading background-image", i.args[0]);
                        break;
                    case "linear-gradient":
                    case "gradient":
                        var c = this.images.get(i.value);
                        c ? this.renderBackgroundGradient(c, e, n) : o("Error loading background-image", i.args[0]);
                        break;
                    case "none":
                        break;
                    default:
                        o("Unknown background-image type", i.args[0])
                    }
                },
                this)
            },
            i.prototype.renderBackgroundRepeating = function(t, e, n, i, o) {
                var a = t.parseBackgroundSize(e, n.image, i),
                s = t.parseBackgroundPosition(e, n.image, i, a),
                r = t.parseBackgroundRepeat(i);
                switch (r) {
                case "repeat-x":
                case "repeat no-repeat":
                    this.backgroundRepeatShape(n, s, a, e, e.left + o[3], e.top + s.top + o[0], 99999, a.height, o);
                    break;
                case "repeat-y":
                case "no-repeat repeat":
                    this.backgroundRepeatShape(n, s, a, e, e.left + s.left + o[3], e.top + o[0], a.width, 99999, o);
                    break;
                case "no-repeat":
                    this.backgroundRepeatShape(n, s, a, e, e.left + s.left + o[3], e.top + s.top + o[0], a.width, a.height, o);
                    break;
                default:
                    this.renderBackgroundRepeat(n, s, a, {
                        top: e.top,
                        left: e.left
                    },
                    o[3], o[0])
                }
            },
            e.exports = i
        },
        {
            "./log": 13
        }],
        20 : [function(t, e, n) {
            function i(t, e) {
                a.apply(this, arguments),
                this.canvas = this.options.canvas || this.document.createElement("canvas"),
                this.options.canvas || (this.canvas.width = t, this.canvas.height = e),
                this.canvas.width = 3 * this.canvas.width,
                this.canvas.height = 3 * this.canvas.height,
                this.ctx = this.canvas.getContext("2d"),
                this.ctx.scale(3, 3),
                this.ctx.translate(0, -30),
                this.taintCtx = this.document.createElement("canvas").getContext("2d"),
                this.taintCtx.scale(3, 3),
                this.ctx.textBaseline = "bottom",
                this.variables = {},
                r("Initialized CanvasRenderer with size", t, "x", e)
            }
            function o(t) {
                return t.length > 0
            }
            var a = t("../renderer"),
            s = t("../lineargradientcontainer"),
            r = t("../log");
            i.prototype = Object.create(a.prototype),
            i.prototype.setFillStyle = function(t) {
                return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t,
                this.ctx
            },
            i.prototype.rectangle = function(t, e, n, i, o) {
                this.setFillStyle(o).fillRect(t, e, n, i)
            },
            i.prototype.circle = function(t, e, n, i) {
                this.setFillStyle(i),
                this.ctx.beginPath(),
                this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0),
                this.ctx.closePath(),
                this.ctx.fill()
            },
            i.prototype.circleStroke = function(t, e, n, i, o, a) {
                this.circle(t, e, n, i),
                this.ctx.strokeStyle = a.toString(),
                this.ctx.stroke()
            },
            i.prototype.drawShape = function(t, e) {
                this.shape(t),
                this.setFillStyle(e).fill()
            },
            i.prototype.taints = function(t) {
                if (null === t.tainted) {
                    this.taintCtx.drawImage(t.image, 0, 0);
                    try {
                        this.taintCtx.getImageData(0, 0, 1, 1),
                        t.tainted = !1
                    } catch(e) {
                        this.taintCtx = document.createElement("canvas").getContext("2d"),
                        t.tainted = !0
                    }
                }
                return t.tainted
            },
            i.prototype.drawImage = function(t, e, n, i, o, a, s, r, c) { (!this.taints(t) || this.options.allowTaint) && this.ctx.drawImage(t.image, e, n, i, o, a, s, r, c)
            },
            i.prototype.clip = function(t, e, n) {
                this.ctx.save(),
                t.filter(o).forEach(function(t) {
                    this.shape(t).clip()
                },
                this),
                e.call(n),
                this.ctx.restore()
            },
            i.prototype.shape = function(t) {
                return this.ctx.beginPath(),
                t.forEach(function(t, e) {
                    "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo": t[0] + "To"].apply(this.ctx, t.slice(1))
                },
                this),
                this.ctx.closePath(),
                this.ctx
            },
            i.prototype.font = function(t, e, n, i, o, a) {
                this.setFillStyle(t).font = [e, n, i, o, a].join(" ").split(",")[0]
            },
            i.prototype.fontShadow = function(t, e, n, i) {
                this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", i)
            },
            i.prototype.clearShadow = function() {
                this.setVariable("shadowColor", "rgba(0,0,0,0)")
            },
            i.prototype.setOpacity = function(t) {
                this.ctx.globalAlpha = t
            },
            i.prototype.setTransform = function(t) {
                this.ctx.translate(t.origin[0], t.origin[1]),
                this.ctx.transform.apply(this.ctx, t.matrix),
                this.ctx.translate( - t.origin[0], -t.origin[1])
            },
            i.prototype.setVariable = function(t, e) {
                return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e),
                this
            },
            i.prototype.text = function(t, e, n) {
                this.ctx.fillText(t, e, n)
            },
            i.prototype.backgroundRepeatShape = function(t, e, n, i, o, a, s, r, c) {
                var l = [["line", Math.round(o), Math.round(a)], ["line", Math.round(o + s), Math.round(a)], ["line", Math.round(o + s), Math.round(r + a)], ["line", Math.round(o), Math.round(r + a)]];
                this.clip([l],
                function() {
                    this.renderBackgroundRepeat(t, e, n, i, c[3], c[0])
                },
                this)
            },
            i.prototype.renderBackgroundRepeat = function(t, e, n, i, o, a) {
                var s = Math.round(i.left + e.left + o),
                r = Math.round(i.top + e.top + a);
                this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")),
                this.ctx.translate(s, r),
                this.ctx.fill(),
                this.ctx.translate( - s, -r)
            },
            i.prototype.renderBackgroundGradient = function(t, e) {
                if (t instanceof s) {
                    var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                    t.colorStops.forEach(function(t) {
                        n.addColorStop(t.stop, t.color.toString())
                    }),
                    this.rectangle(e.left, e.top, e.width, e.height, n)
                }
            },
            i.prototype.resizeImage = function(t, e) {
                var n = t.image;
                if (n.width === e.width && n.height === e.height) return n;
                var i, o = document.createElement("canvas");
                return o.width = e.width,
                o.height = e.height,
                i = o.getContext("2d"),
                i.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height),
                o
            },
            e.exports = i
        },
        {
            "../lineargradientcontainer": 12,
            "../log": 13,
            "../renderer": 19
        }],
        21 : [function(t, e, n) {
            function i(t, e, n, i) {
                o.call(this, n, i),
                this.ownStacking = t,
                this.contexts = [],
                this.children = [],
                this.opacity = (this.parent ? this.parent.stack.opacity: 1) * e
            }
            var o = t("./nodecontainer");
            i.prototype = Object.create(o.prototype),
            i.prototype.getParentStack = function(t) {
                var e = this.parent ? this.parent.stack: null;
                return e ? e.ownStacking ? e: e.getParentStack(t) : t.stack
            },
            e.exports = i
        },
        {
            "./nodecontainer": 14
        }],
        22 : [function(t, e, n) {
            function i(t) {
                this.rangeBounds = this.testRangeBounds(t),
                this.cors = this.testCORS(),
                this.svg = this.testSVG()
            }
            i.prototype.testRangeBounds = function(t) {
                var e, n, i, o, a = !1;
                return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (n = t.createElement("boundtest"), n.style.height = "123px", n.style.display = "block", t.body.appendChild(n), e.selectNode(n), i = e.getBoundingClientRect(), o = i.height, 123 === o && (a = !0), t.body.removeChild(n))),
                a
            },
            i.prototype.testCORS = function() {
                return "undefined" != typeof(new Image).crossOrigin
            },
            i.prototype.testSVG = function() {
                var t = new Image,
                e = document.createElement("canvas"),
                n = e.getContext("2d");
                t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                    n.drawImage(t, 0, 0),
                    e.toDataURL()
                } catch(i) {
                    return ! 1
                }
                return ! 0
            },
            e.exports = i
        },
        {}],
        23 : [function(t, e, n) {
            function i(t) {
                this.src = t,
                this.image = null;
                var e = this;
                this.promise = this.hasFabric().then(function() {
                    return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : o(t)
                }).then(function(t) {
                    return new Promise(function(n) {
                        window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
                    })
                })
            }
            var o = t("./xhr"),
            a = t("./utils").decode64;
            i.prototype.hasFabric = function() {
                return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
            },
            i.prototype.inlineFormatting = function(t) {
                return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
            },
            i.prototype.removeContentType = function(t) {
                return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
            },
            i.prototype.isInline = function(t) {
                return /^data:image\/svg\+xml/i.test(t)
            },
            i.prototype.createCanvas = function(t) {
                var e = this;
                return function(n, i) {
                    var o = new window.html2canvas.svg.fabric.StaticCanvas("c");
                    e.image = o.lowerCanvasEl,
                    o.setWidth(i.width).setHeight(i.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, i)).renderAll(),
                    t(o.lowerCanvasEl)
                }
            },
            i.prototype.decode64 = function(t) {
                return "function" == typeof window.atob ? window.atob(t) : a(t)
            },
            e.exports = i
        },
        {
            "./utils": 26,
            "./xhr": 28
        }],
        24 : [function(t, e, n) {
            function i(t, e) {
                this.src = t,
                this.image = null;
                var n = this;
                this.promise = e ? new Promise(function(e, i) {
                    n.image = new Image,
                    n.image.onload = e,
                    n.image.onerror = i,
                    n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t),
                    n.image.complete === !0 && e(n.image)
                }) : this.hasFabric().then(function() {
                    return new Promise(function(e) {
                        window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
                    })
                })
            }
            var o = t("./svgcontainer");
            i.prototype = Object.create(o.prototype),
            e.exports = i
        },
        {
            "./svgcontainer": 23
        }],
        25 : [function(t, e, n) {
            function i(t, e) {
                a.call(this, t, e)
            }
            function o(t, e, n) {
                return t.length > 0 ? e + n.toUpperCase() : void 0
            }
            var a = t("./nodecontainer");
            i.prototype = Object.create(a.prototype),
            i.prototype.applyTextTransform = function() {
                this.node.data = this.transform(this.parent.css("textTransform"))
            },
            i.prototype.transform = function(t) {
                var e = this.node.data;
                switch (t) {
                case "lowercase":
                    return e.toLowerCase();
                case "capitalize":
                    return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, o);
                case "uppercase":
                    return e.toUpperCase();
                default:
                    return e
                }
            },
            e.exports = i
        },
        {
            "./nodecontainer": 14
        }],
        26 : [function(t, e, n) {
            n.smallImage = function() {
                return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            },
            n.bind = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            n.decode64 = function(t) {
                var e, n, i, o, a, s, r, c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                d = t.length,
                u = "";
                for (e = 0; d > e; e += 4) n = l.indexOf(t[e]),
                i = l.indexOf(t[e + 1]),
                o = l.indexOf(t[e + 2]),
                a = l.indexOf(t[e + 3]),
                s = n << 2 | i >> 4,
                r = (15 & i) << 4 | o >> 2,
                c = (3 & o) << 6 | a,
                u += 64 === o ? String.fromCharCode(s) : 64 === a || -1 === a ? String.fromCharCode(s, r) : String.fromCharCode(s, r, c);
                return u
            },
            n.getBounds = function(t) {
                if (t.getBoundingClientRect) {
                    var e = t.getBoundingClientRect(),
                    n = null == t.offsetWidth ? e.width: t.offsetWidth;
                    return {
                        top: e.top,
                        bottom: e.bottom || e.top + e.height,
                        right: e.left + n,
                        left: e.left,
                        width: n,
                        height: null == t.offsetHeight ? e.height: t.offsetHeight
                    }
                }
                return {}
            },
            n.offsetBounds = function(t) {
                var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.offsetTop + e.top,
                    bottom: t.offsetTop + t.offsetHeight + e.top,
                    right: t.offsetLeft + e.left + t.offsetWidth,
                    left: t.offsetLeft + e.left,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            },
            n.parseBackgrounds = function(t) {
                var e, n, i, o, a, s, r, c = " \r\n ",
                l = [],
                d = 0,
                u = 0,
                h = function() {
                    e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)), n && r.push(n), "-" === e.substr(0, 1) && (o = e.indexOf("-", 1) + 1) > 0 && (i = e.substr(0, o), e = e.substr(o)), l.push({
                        prefix: i,
                        method: e.toLowerCase(),
                        value: a,
                        args: r,
                        image: null
                    })),
                    r = [],
                    e = i = n = a = ""
                };
                return r = [],
                e = i = n = a = "",
                t.split("").forEach(function(t) {
                    if (! (0 === d && c.indexOf(t) > -1)) {
                        switch (t) {
                        case '"':
                            s ? s === t && (s = null) : s = t;
                            break;
                        case "(":
                            if (s) break;
                            if (0 === d) return d = 1,
                            void(a += t);
                            u++;
                            break;
                        case ")":
                            if (s) break;
                            if (1 === d) {
                                if (0 === u) return d = 0,
                                a += t,
                                void h();
                                u--
                            }
                            break;
                        case ",":
                            if (s) break;
                            if (0 === d) return void h();
                            if (1 === d && 0 === u && !e.match(/^url$/i)) return r.push(n),
                            n = "",
                            void(a += t)
                        }
                        a += t,
                        0 === d ? e += t: n += t
                    }
                }),
                h(),
                l
            }
        },
        {}],
        27 : [function(t, e, n) {
            function i(t) {
                o.apply(this, arguments),
                this.type = "linear" === t.args[0] ? o.TYPES.LINEAR: o.TYPES.RADIAL
            }
            var o = t("./gradientcontainer");
            i.prototype = Object.create(o.prototype),
            e.exports = i
        },
        {
            "./gradientcontainer": 9
        }],
        28 : [function(t, e, n) {
            function i(t) {
                return new Promise(function(e, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t),
                    i.onload = function() {
                        200 === i.status ? e(i.responseText) : n(new Error(i.statusText))
                    },
                    i.onerror = function() {
                        n(new Error("Network Error"))
                    },
                    i.send()
                })
            }
            e.exports = i
        },
        {}]
    },
    {},
    [4])(4)
}),
define("templates/qk", [],
function() {
    var t = {};
    return t.dashboard = '<ion-view view-title="钱咖"><ion-nav-buttons side="right"><button class="button button-clear qk-nav-button-right" ng-click="refresh()"><img ng-src="{{ refreshButtonIcon }}"></button></ion-nav-buttons><ion-content class="qk-dashboard"><div class="assertive-bg qk-dashboard-user margin-bottom-sm"><div class="today-income"><div class="income-text">今日收益<span class="yuan">（元）</span></div><div class="income-balance" ng-bind="today_income" ng-class="{\'no-income-balance\': isNoIncomeToday}"></div></div><div class="user-info" ng-click="go({link: \'qk.my\'})"><img class="avatar" ng-src="{{ avatar }}"><div style="float: left"><div class="account-balance">账户余额<span ng-bind="balance"></span></div><div class="total-income">总共收益<span ng-bind="total_income"></span></div></div><img ng-src="{{ arrowRightRed }}" class="arrow-right-red"> <span class="user-my" ng-bind="convert_num == 0 ? \'提现中心\' : convert_num + \' 笔提现中\'"></span> <img ng-if="convert_num == 0" ng-src="{{ withdrawCenterIcon }}" class="img-withdraw-center" width="12" height="12"></div></div><div class="row row-no-padding light-bg thin-border-top entrance-row"><div class="col col-25 thin-border-right" ng-click="go(entrances[0])"><img ng-if="entrances[0].icon" ng-src="{{ entrances[0].icon }}"><div class="font-11">{{ entrances[0].name }}</div><div ng-if="entrances[0].tag" class="tag" ng-class="{\'tag-highlight\': entrances[0].tag.highlight}"><div class="font-9" ng-bind="entrances[0].tag.text"></div></div></div><div class="col col-25 thin-border-right" ng-click="go(entrances[1])"><img ng-if="entrances[1].icon" ng-src="{{ entrances[1].icon }}"><div class="font-11">{{ entrances[1].name }}</div><div ng-if="entrances[1].tag" class="tag" ng-class="{\'tag-highlight\': entrances[1].tag.highlight}"><div class="font-9" ng-bind="entrances[1].tag.text"></div></div></div><div class="col col-25 thin-border-right" ng-click="go(entrances[2])"><img ng-if="entrances[2].icon" ng-src="{{ entrances[2].icon }}"><div class="font-11">{{ entrances[2].name }}</div><div ng-if="entrances[2].tag" class="tag" ng-class="{\'tag-highlight\': entrances[2].tag.highlight}"><div class="font-9" ng-bind="entrances[2].tag.text"></div></div></div><div class="col col-25" ng-click="go(entrances[3])"><img ng-if="entrances[3].icon" ng-src="{{ entrances[3].icon }}"><div class="font-11">{{ entrances[3].name }}</div><div ng-if="entrances[3].tag" class="tag" ng-class="{\'tag-highlight\': entrances[3].tag.highlight}"><div class="font-9" ng-bind="entrances[3].tag.text"></div></div></div></div><div class="row row-no-padding light-bg thin-border-top-bottom entrance-row margin-bottom-sm"><div class="col col-25 thin-border-right" ng-click="go(entrances[4])"><img ng-if="entrances[4].icon" ng-src="{{ entrances[4].icon }}"><div class="font-11">{{ entrances[4].name }}</div><div ng-if="entrances[4].tag" class="tag" ng-class="{\'tag-highlight\': entrances[4].tag.highlight}"><div class="font-9" ng-bind="entrances[4].tag.text"></div></div></div><div class="col col-25 thin-border-right" ng-click="go(entrances[5])"><img ng-if="entrances[5].icon" ng-src="{{ entrances[5].icon }}"><div class="font-11">{{ entrances[5].name }}</div><div ng-if="entrances[5].tag" class="tag" ng-class="{\'tag-highlight\': entrances[5].tag.highlight}"><div class="font-9" ng-bind="entrances[5].tag.text"></div></div></div><div class="col col-25 thin-border-right" ng-click="go(entrances[6])"><img ng-if="entrances[6].icon" ng-src="{{ entrances[6].icon }}"><div class="font-11">{{ entrances[6].name }}</div><div ng-if="entrances[6].tag" class="tag" ng-class="{\'tag-highlight\': entrances[6].tag.highlight}"><div class="font-9" ng-bind="entrances[6].tag.text"></div></div></div><div class="col col-25 thin-border-right" ng-click="go(entrances[7])"><img ng-if="entrances[7].icon" ng-src="{{ entrances[7].icon }}"><div class="font-11">{{ entrances[7].name }}</div><div ng-if="entrances[7].tag" class="tag" ng-class="{\'tag-highlight\': entrances[7].tag.highlight}"><div class="font-9" ng-bind="entrances[7].tag.text"></div></div></div></div><div ng-if="show_xinshou" class="item item-icon-right thin-border-top-bottom item-activity" ng-click="novice()"><img src="//qianka.b0.upaiyun.com/images/47589cd72775b70a8b46127078614fd8.png" width="24" height="32" style="position: absolute; top: 14px; left: 29px"><div style="font-size: 12px; line-height: 12px; margin-bottom: 7px; color: #666; margin-top: 1px">新人福利</div><div style="font-size: 12px; line-height: 12px; color: #aaa;\n            transform: scale(.91666666); -webkit-transform: scale(0.91666666); margin-left: -10px; margin-top: -2px">完善个人资料 领取钱咖币</div><img class="qk-right-arrow" ng-src="{{ arrowRightIcon }}"></div><div class="item item-icon-right thin-border-top-bottom item-activity" ng-click="transcript()"><img src="//qianka.b0.upaiyun.com/images/5d5f24a1b1ad97b0327ad862a518a14f.png" width="24" height="32" style="position: absolute; top: 14px; left: 29px"><div style="font-size: 12px; line-height: 12px; margin-bottom: 7px; color: #666; margin-top: 1px">晒单收徒</div><div style="font-size: 12px; line-height: 12px; color: #aaa;\n            transform: scale(.91666666); -webkit-transform: scale(0.91666666); margin-left: -10px; margin-top: -2px">晒一晒自己在钱咖的成绩单</div><img class="qk-right-arrow" ng-src="{{ arrowRightIcon }}"></div><qk-footer footer-type="footerType"></qk-footer></ion-content></ion-view>',
    t.fanxian_buy_popup = '<div class="title">恭喜抢到购买资格</div><div class="tips">请在15分钟内完成支付<br>超时无法获得返现! 需要重新抢购</div><div class="pay-info"><div>先支付</div><div ng-bind="fanxian_item.price + \' 元\'"></div></div><div class="rebate-info"><div>后返现</div><div ng-bind="fanxian_item.rebate_amount + \' 元\'"></div></div><div class="skip-text" ng-bind="openFanxianPageCountDownText"></div>',
    t.fanxian_popup = '<div class="fanxian-item-head thin-border-bottom"><img ng-src="{{ fanxian_item.pic }}"><div class="title" ng-bind="fanxian_item.title"></div><div class="desc" style="margin-bottom: 6px"><div class="tag" ng-repeat="tag in fanxian_item.tags" ng-bind="tag"></div></div><button class="button-icon ion-android-close btn-close" ng-click="closeFanxianPopup()"></button></div><div class="fanxian-item-body thin-border-bottom"><div class="fanxian-item-body-left"><img src="//qianka.b0.upaiyun.com/images/d73689346c532de02f24319ace837a48.png" alt="" class="img-cheap"><div class="price-wrapper"><div class="price" ng-bind="fanxian_item.actual_price_str"></div><div class="font-9 yuan">元</div></div><div class="amount pay"><div class="dark-grey">支付</div><div class="assertive" ng-bind="fanxian_item.price.toFixed(2)"></div></div><div class="amount rebate"><div class="dark-grey"><span style="margin-right: 4px">-</span>返现</div><div class="assertive" ng-bind="fanxian_item.rebate_amount.toFixed(2)"></div></div><div class="divider thin-border-top" style="width: 50%; height: 1px; margin-top: 1px; margin-bottom: 4px; margin-left: 25%"></div><div class="amount actual" style="margin-bottom: 5px"><div class="dark-grey">到手价</div><div class="assertive" ng-bind="fanxian_item.actual_price.toFixed(2)"></div></div><div class="assertive" style="text-decoration: underline; font-size: 9px" ng-click="showFanxianRule()">查看返现规则</div></div><div class="fanxian-item-body-right"><div class="price-box"><div class="price"><img src="//qianka.b0.upaiyun.com/images/24d274e5b8fa3496ae66981c13cd87f9.png"><div class="amount assertive">{{ fanxian_item.actual_price.toFixed(2) }}<div class="font-9">元</div></div></div><div class="price"><img src="//qianka.b0.upaiyun.com/images/f78f6abb8c2ece8a8cb6b30343bfbe08.png"><div class="amount">{{ fanxian_item.market_price.toFixed(2) }}<div class="font-9">元</div></div></div><div class="price" ng-repeat="mall in fanxian_item.malls"><img ng-src="{{ mall.icon }}"><div class="amount">{{ mall.price.toFixed(2) }}<div class="font-9">元</div></div></div><div class="price-label font-9 dark-grey">价格信息更新于1小时前</div></div></div></div><div class="fanxian-item-footer"><button class="button button-assertive button-block" ng-class="{\'button-disable\': fanxian_item.stock_residue == 0}" ng-click="buyFanxianItem(fanxian_item)" ng-bind="fanxian_item.stock_residue > 0 ? \'立即抢购（限购一件）\' : \'已抢光\'"></button></div>',
    t.fanxian_rule_modal = '<ion-modal-view class="qk-agreement-modal"><ion-header-bar class="bar-dark"><div class="title" style="font-size: 16px!important; font-weight: normal">返现规则</div><div class="buttons"><button class="button button-small button-clear button-icon ion-ios-close-empty" ng-click="hideFanxianRule()"></button></div></ion-header-bar><ion-content style="padding-top: 10px"><div class="thin-border-top-bottom qk-agreement"><div class="desc" style="margin-bottom: 0">1、必须通过钱咖返现去完成下单并成功付款的订单才享有返现资格。<br><br>2、每个在售活动商品每人限购一件，多买的商品件数或订单不计入返现。<br><br>3、获得商品抢购资格后请在15分钟内去完成下单并成功付款，超时完成付款订单不计入返现。<br><br>4、订单确认收货后将在1-5个工作日内结算返现，双休日和节假日除外。<br><br>5、购物返现直接以钱咖币的形式发放到你的钱咖账户。<br><br>6、维权退货退款订单（含部分退款或退货）将扣除已发放的返现。<br><br>7、返现最终解释权归钱咖返现所有。</div></div></ion-content></ion-modal-view>',
    t.find_key_back = '<button class="button-icon ion-android-close" ng-click="closeFindKeyBackGuide()" style="position: absolute; top: 2px; right: 2px; color: #ccc; font-size: 16px"></button><ion-slide-box class="qk-install-guide"><ion-slide class="slide-1 slide-find-key-back"></ion-slide><ion-slide class="slide-2 slide-find-key-back"><img ng-src="{{ finKeyBackIcon }}" alt="" class="logo"> <img ng-src="{{ finKeyBackIcon }}" alt="" class="logo-sm"><div class="logo-sm-mask"></div></ion-slide></ion-slide-box>',
    t.gift = '<button class="button-icon ion-android-close" ng-click="closeGiftPopup()" style="position: absolute; top: -7px; right: 2px; color: #ffa391; font-size: 16px"></button><div class="text-center"><img ng-src="{{ giftIcon }}" width="96" height="96" style="margin: 0 auto 22px auto"><div style="color: #ffa391; font-size: 16px; line-height: 16px; margin-bottom: 25px">新人福利&nbsp;&nbsp;立即领取</div><button class="button button-assertive button-block" ng-click="switchGiftPopup(2)">有邀请ID</button> <button class="button button-assertive button-block" ng-click="getGift()" style="margin-bottom: 18px">无邀请ID</button><div class="font-11 agreement-link" style="margin-bottom: 10px" ng-click="openAgreement()">用户注册协议</div></div>',
    t.gift_forward = ' <button class="button-icon ion-android-close" ng-click="closeGiftPopup()" style="position: absolute; top: -7px; right: 2px; color: #ffa391; font-size: 16px"></button><div class="text-center"><img ng-src="{{ giftIcon }}" width="96" height="96" style="margin: 0 auto 22px auto"><div style="color: #ffa391; font-size: 16px; line-height: 16px; margin-bottom: 25px">新人福利&nbsp;&nbsp;立即领取</div><div style="padding: 0 0 10px 0; width: 100%"><input type="tel" placeholder="填写手机号码" class="input-mobile" ng-model="mobile"></div><div class="row row-no-padding" style="margin-bottom: 0"><div style="padding: 0 10px 0 0; width: 140px!important"><input type="tel" placeholder="填写验证码" class="input-voice-code" ng-model="code"></div><div style="padding: 0; width: 130px!important"><button class="button button-assertive button-block" style="margin: 0" ng-bind="coldDown == 0 ? \'语音验证码\' : coldDown + \' 秒\'" ng-click="sendVerifyCode(mobile)"></button></div></div><button class="button button-assertive button-block" ng-click="getReferredGift(mobile, code)" style="margin-bottom: 18px">确认</button><div class="font-11 agreement-link" style="margin-bottom: 10px" ng-click="openAgreement()">用户注册协议</div></div>',
    t.gift_master = '<button class="button-icon ion-android-close" ng-click="closeGiftPopup()" style="position: absolute; top: -7px; right: 2px; color: #ffa391; font-size: 16px"></button><div class="text-center"><img ng-src="{{ giftIcon }}" width="96" height="96" style="margin: 0 auto 22px auto"><div style="color: #ffa391; font-size: 16px; line-height: 16px; margin-bottom: 25px">新人福利&nbsp;&nbsp;立即领取</div><div class="row row-no-padding" style="margin-bottom: 0"><div style="padding: 0 10px 0 0; width: 170px!important"><input type="tel" placeholder="填写邀请ID" class="input-master-id" ng-model="masterId"></div><div style="padding: 0; width: 90px!important"><button class="button button-assertive button-block" style="margin: 0" ng-click="getGift(masterId)">确 认</button></div></div><button class="button button-assertive button-block" ng-click="getGift()" style="margin-bottom: 18px">无邀请ID</button><div class="font-11 agreement-link" style="margin-bottom: 10px" ng-click="openAgreement()">用户注册协议</div></div>',
    t.gift_success = '<div class="text-center"><img ng-src="{{ giftSuccessIcon }}" width="55" height="55" style="margin: 15px auto 40px auto"><div style="color: #fff; font-size: 16px; line-height: 16px; margin-bottom: 16px">恭喜！获得现金{{ giftReward }}元！</div><div style="color: #ffa391; font-size: 13px; line-height: 17px; margin-bottom: 63px">别急,这紧紧是开始...<br>今天还有N多现金任务等你来领～</div><button class="button button-assertive button-block" ng-click="closeGiftSuccessPopup()" style="margin-bottom: 0">开始赚钱</button></div>',
    t.install_activator = '<ion-view view-title="钱咖"><ion-content class="content-480"><div ng-if="tpl==\'ios9\'" class="qk-install-key" ng-style="paddingTop"><div class="tips">您的激活助手是</div><img ng-src="{{ appIcon }}" class="app-icon"><div class="app-name" ng-bind="appName"></div><div class="btn btn-download" id="btn-download" ng-class="{\'active\': step>=1}" ng-click="downloadActivator()"></div><div class="arrow-down"></div><div class="btn btn-setting" ng-class="{\'active\': step>=2}" ng-click="showGuide()"></div><div class="arrow-down"></div><div class="step" ng-class="{\'active\': step>=3}">去桌面打开</div><div class="step" style="position: absolute; bottom: 30px; text-decoration: underline; left: 50%; margin-left: -24px; width: 48px" ng-click="goToQA(2)">遇到问题</div></div><div ng-if="tpl==\'normal\'" class="qk-install-key" style="padding-top: 50px"><div class="tips">您的激活助手是</div><img ng-src="{{ appIcon }}" class="app-icon"><div class="app-name" ng-bind="appName"></div><div class="btn btn-download" id="btn-download" ng-class="{\'active\': step>=1}" ng-click="downloadActivator()"></div><div class="arrow-down"></div><div class="step" ng-class="{\'active\': step>=2}">去桌面打开</div><div class="step" style="position: absolute; bottom: 30px; text-decoration: underline; left: 50%; margin-left: -24px; width: 48px" ng-click="goToQA(2)">遇到问题</div></div></ion-content></ion-view>',
    t.install_key_guide = '<button class="button-icon ion-android-close" ng-click="closeGuide()" style="position: absolute; top: 2px; right: 2px; color: #ccc; font-size: 16px"></button><ion-slide-box class="qk-install-guide"><ion-slide class="slide-1"></ion-slide><ion-slide class="slide-2"></ion-slide><ion-slide class="slide-3"></ion-slide><ion-slide class="slide-4"><p style="margin-top: 75px; margin-bottom: 15px; text-align: center; font-size: 14px; line-height: 19px; color: #aaa">iOS 9 用户按上述步骤操作后<br>即可进入钱咖</p><p class="assertive" style="text-align: center; font-size: 12px; line-height: 12px; margin: 0 0 70px 0">新用户还有现金红包拿</p><button class="button button-positive" style="width: 258px; margin: 0 11px" ng-click="goIOSSetting()">前往设置</button></ion-slide></ion-slide-box>',
    t.prentice = '<ion-view view-title="收徒任务"><ion-nav-buttons side="left"><button class="button button-clear qk-nav-button-left" ng-click="back()"><img ng-src="{{ backButtonIcon }}"></button></ion-nav-buttons><ion-content class="qk-prentice"><div class="prentice-tips">本期：徒弟完成iOS限时任务，您可获100%等额奖励 (安卓为20%)，每个徒弟最高10元！</div><div class="padding-horizontal" style="margin-bottom: 10px"><div class="row row-no-padding prentice-summary"><div class="col col-50"><div class="num" ng-bind="total_prentice_reward"></div><div class="font-11 desc" style="margin-left: -.45em">累计学徒奖励</div></div><div class="col col-50 thin-border-left" ng-click="myPrenticeList()"><div class="num" ng-bind="prentice_count"></div><div class="font-11 desc" style="margin-left: -.4em">徒弟数量</div></div></div><div class="row row-no-padding today-summary thin-border-top" style="margin-top: 0"><img ng-src="{{ todayPrenticeIncrementIcon }}" style="height: 11px; width: auto; float: left; margin-left: 12px; margin-top: 9px"><div class="font-11 today-summary-text" ng-bind-html="today_summary" style="float: left; margin-top: 9px"></div></div></div><div class="padding-horizontal" style="margin-bottom: 10px"><div class="current-level"><div class="item-level" style="height: 55px; padding-top: 8px"><img class="img-text" ng-src="{{ currentLevelText }}"><div class="lv" ng-bind="\'Lv\' + current_level.level"></div><img class="img-level" ng-src="{{ current_level.img }}" style="margin-right: 12px"></div><div ng-if="current_level.level < 10" class="item-level thin-border-top" style="height: 45px"><img class="img-text" ng-src="{{ nextLevelText }}" style="margin-top: 14px"><div class="level-progress"><div class="progress-label">学徒奖励</div><div class="progress-value"><span style="color: #ee5b5b" ng-bind="total_prentice_reward"></span> / <span ng-bind="current_level.nextTarget"></span></div><div class="progress-bar"><div class="progress-bar-value" ng-style="progressValue"></div></div></div></div><div ng-if="current_level.level < 10" class="item-level thin-border-top" style="height: 45px"><img class="img-text" ng-src="{{ levelAdviceText }}" style="margin-top: 14px"><div class="level-advice" ng-bind="current_level.tips"></div></div></div></div><div class="padding-horizontal" style="margin-bottom: 10px" ng-repeat="lv in levels"><div class="item item-borderless border-radius-4 item-level"><img class="img-text" ng-src="{{ memberLevelText }}"><div class="lv" ng-bind="\'Lv\' + lv.level"></div><img class="img-level" ng-src="{{ levelQuestionIcon }}"></div></div><div style="height: 50px"></div></ion-content><ion-footer-bar class="bar-light" style="height: 70px; padding: 0 12px"><button class="button button-block button-assertive" style="height: 50px; font-size: 16px" ng-click="shoutu()">立即收徒</button></ion-footer-bar></ion-view>',
    t.prentice_popup = '<button class="button-icon ion-android-close" ng-click="closePrenticePopup()" style="position: absolute; top: -7px; right: 2px; color: #ccc; font-size: 16px"></button><div class="text-center"><img ng-src="{{ prenticePopupIcon }}" width="55" height="55" style="margin: 25px auto 25px auto"><div class="row row-no-padding"><div class="col col-50" style="padding-right: 5px"><button class="button button-positive button-block" ng-click="showPrenticeTranscript()" style="margin-bottom:5px"><img ng-src="{{ transcriptmarkIcon }}" width="25" height="25" style="position: absolute;top: 0px;right:0px;width: 22px;height: 22px;border-top-right-radius: 4px;z-index: 1000"> <img ng-src="{{ prenticetranscriptIcon }}" width="14" height="14" style="display:inline-block; position:relative; top:2px; right:3px"> <span>晒单收徒</span></button></div><div class="col col-50" style="padding-left: 5px"><button class="button button-positive button-block" ng-click="openShareAssistant()" style="margin-bottom:5px"><img ng-src="{{ prenticeshareIcon }}" width="14" height="14" style="display:inline-block; position:relative; top:2px; right:3px"> 分享收徒</button></div></div><div class="row row-no-padding"><div class="col col-50" style="padding-right: 5px"><button class="button button-positive button-block" ng-click="showPrenticeQrcode()"><img ng-src="{{ prenticeqrcodebuttonIcon }}" width="14" height="13" style="display:inline-block; position:relative; top:2px; right:3px"> 扫码收徒</button></div><div class="col col-50" style="padding-left: 5px"><button class="button button-positive button-block" ng-click="showPrenticeLink()"><img ng-src="{{ prenticelinkbuttonIcon }}" width="14" height="14" style="display:inline-block; position:relative; top:2px; right:3px"> 收徒链接</button></div></div><div class="positive" style="margin-bottom: 10px; text-decoration: underline" ng-click="showPrenticeGuide()">收徒攻略</div></div>',
    t.pub_task_list = '<ion-view view-title="下载APP试玩赚钱"><ion-nav-buttons side="left"><button class="button button-clear qk-nav-button-left" ng-click="back()"><img ng-src="{{ backButtonIcon }}"></button></ion-nav-buttons><ion-nav-buttons side="right"><button class="button button-clear qk-nav-button-right" ng-click="refresh()"><img ng-src="{{ refreshButtonIcon }}"></button></ion-nav-buttons><ion-content style="padding-top: 15px"><div class="padding-horizontal"><div class="list task-list over-loading"><div class="img-face"><img ng-src="{{ faceImg }}"></div><div class="item item-t" style="border: none; border-width: 0; border-radius: 4px; background-color: #ec4949"><div class="title" style="color: #fff">钱咖累计已发放 <span ng-bind="total_reward" style="color: yellow"></span> 元现金</div><div class="desc" style="color: #fff; padding-left: 8px">每天有超过百万用户登录钱咖疯狂赚钱，你还在犹<br>豫什么？立即加入钱咖，开启钱咖之旅！</div></div></div><div class="coming-task-tips">以下任务正在进行，总计 <span ng-bind="taskTotalReward" class="ff-77 assertive"></span> 元，准时来抢！</div><div class="item item-thumbnail-left item-t" ng-repeat="task in tasks" style="background: #fff" ng-click="showTips()"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.reward"></div><div class="yuan font-10">元</div></div></div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div ng-show="comingTaskTotalReward > 0" class="coming-task-tips">任务即将开始，总计 <span ng-bind="comingTaskTotalReward" class="ff-77 assertive"></span> 元，准时来抢！</div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div class="item item-thumbnail-left item-t" ng-repeat="task in coming_tasks" style="background: #fff" ng-click="showTips()"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div class="desc"><div class="tag"><div class="font-10">{{ task.start_date }}</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div></div><div class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.reward"></div><div class="yuan font-10">元</div></div></div><div style="width: 100%; height: 70px"></div></div></ion-content><ion-footer-bar class="bar-light" style="height: 70px; padding: 0 12px"><button class="button button-block button-assertive" style="height: 50px; font-size: 16px" ng-click="install()">立即安装激活助手，开始赚钱</button></ion-footer-bar></ion-view>',
    t.qk = '<ion-view id="ion-view"><ion-nav-bar class="bar-dark" id="ion-nav-bar"><qk-message></qk-message><qk-ajax-progress></qk-ajax-progress></ion-nav-bar><ion-nav-view></ion-nav-view></ion-view>',
    t.qk_ajax_progress = '<div class="qk-ajax-progress"><div class="progress" ng-class="{\'qkProgressAnimated qkProgress20\': readyState == 2, \'qkProgressAnimated qkProgress100\': readyState == 4}"></div></div>',
    t.qk_footer = '<div class="qk-footer"><img ng-src="{{ image }}"></div>',
    t.qk_message = '<div id="qk-message" class="qk-message animated" ng-class="{\'slideInDown\': showMessage, \'slideOutUp\': hideMessage }"><i class="ion-android-volume-up" style="margin-right: 5px"></i><p class="content" ng-bind-html="message.content"></p><button ng-if="keeyMessageTop" class="button button-clear button-icon ion-ios-arrow-right btn-close-message" ng-click="go(message.link)"></button> <button ng-if="!keeyMessageTop" class="button button-clear button-icon ion-ios-close-empty btn-close-message" ng-click="close()"></button></div>',
    t.qk_withdraw_amounts = '<div class="qk-withdraw-card list thin-border-top-bottom"><div class="item" ng-click="pickAmount(0)"><div class="item-content thin-border-bottom"><div class="title" ng-hide="type ==\'duobao\'" ng-bind="amounts[0][0] + \'元\'"></div><div class="title" ng-show="type == \'duobao\'" ng-bind="amounts[0][0] + \'个\'"></div><div ng-show="type !== \'alipay\' && amounts[0][0] > amounts[0][1]" class="discount"><div class="font-10" ng-bind="amounts[0][2] + \' 钱咖币\'"></div></div><div ng-show="type == \'alipay\'" class="font-12" ng-bind="\'需\' + (amounts[0][1] - amounts[0][0]) + \'元手续费\'"></div><img class="select" ng-hide="amountIndex == 0" ng-src="{{ unselected }}"> <img class="select" ng-show="amountIndex == 0" ng-src="{{ selected }}"></div></div><div class="item" ng-click="pickAmount(1)"><div class="item-content thin-border-bottom"><div class="title" ng-hide="type ==\'duobao\'" ng-bind="amounts[1][0] + \'元\'"></div><div class="title" ng-show="type == \'duobao\'" ng-bind="amounts[1][0] + \'个\'"></div><div ng-show="type !== \'alipay\'" class="discount"><div class="font-10" ng-bind="amounts[1][2] + \' 钱咖币\'"></div></div><div ng-show="type == \'alipay\'" class="font-12" ng-bind="\'需\' + (amounts[1][1] - amounts[1][0]) + \'元手续费\'"></div><img class="select" ng-hide="amountIndex == 1" ng-src="{{ unselected }}"> <img class="select" ng-show="amountIndex == 1" ng-src="{{ selected }}"></div></div><div class="item" ng-click="pickAmount(2)"><div class="item-content" ng-class="{\'thin-border-bottom\': type !== \'wechat_large\' }"><div class="title" ng-hide="type ==\'duobao\'" ng-bind="amounts[2][0] + \'元\'"></div><div class="title" ng-show="type == \'duobao\'" ng-bind="amounts[2][0] + \'个\'"></div><div ng-show="type !== \'alipay\'" class="discount"><div class="font-10" ng-bind="amounts[2][2] + \' 钱咖币\'"></div></div><div ng-show="type == \'alipay\'" class="font-12" ng-bind="\'需\' + (amounts[2][1] - amounts[2][0]) + \'元手续费\'"></div><img class="select" ng-hide="amountIndex == 2" ng-src="{{ unselected }}"> <img class="select" ng-show="amountIndex == 2" ng-src="{{ selected }}"></div></div><div class="item" ng-hide="type == \'wechat_large\'" ng-click="pickAmount(3)"><div class="item-content"><div class="title" ng-hide="type ==\'duobao\'" ng-bind="amounts[3][0] + \'元\'"></div><div class="title" ng-show="type == \'duobao\'" ng-bind="amounts[3][0] + \'个\'"></div><div ng-show="type !== \'alipay\'" class="discount"><div class="font-10" ng-bind="amounts[3][2] + \' 钱咖币\'"></div></div><div ng-show="type == \'alipay\'" class="font-12" ng-bind="\'需\' + (amounts[3][1] - amounts[3][0]) + \'元手续费\'"></div><img class="select" ng-hide="amountIndex == 3" ng-src="{{ unselected }}"> <img class="select" ng-show="amountIndex == 3" ng-src="{{ selected }}"></div></div></div><div class="qk-withdraw-amounts-pay">实际支出 <span ng-bind="amounts[amountIndex][1]"></span> 元 （余额 <span ng-bind="balance"></span> 元）</div>',
    t.rongyuka_find = '<button class="button-icon ion-android-close" id="btn-close-rongyuka-slide-box" style="position: absolute; top: -7px; right: 2px; color: #ccc; font-size: 16px; z-index: 1000"></button><ion-slide-box class="qk-open-rongyuka-guide-slide-box"><ion-slide class="slide-1"></ion-slide><ion-slide class="slide-2"></ion-slide></ion-slide-box>',
    t.rongyuka_open = '<div class="title text-center">您已安装过荣誉咖<br>荣誉咖是您使用钱咖的唯一方法</div><div class="content text-center"><img src="//qianka.b0.upaiyun.com/images/ad4acf34b2a6f175d96208606268d575.png" width="66" height="66"></div><button class="button button-assertive button-block" id="btn-open-rongyuka">打开荣誉咖</button><div class="bottom-link font-11 text-center">不小心删了荣誉咖？<span class="link" id="btn-find-rongyuka">点此找回</span></div>',
    t.task_double_list = '<ion-view view-title="双倍任务"><ion-nav-buttons side="left"><button class="button button-clear qk-nav-button-left" ng-click="back()"><img ng-src="{{ backButtonIcon }}"></button></ion-nav-buttons><ion-nav-buttons side="right"><button class="button button-clear qk-nav-button-right" ng-click="refresh()"><img ng-src="{{ refreshButtonIcon }}"></button></ion-nav-buttons><ion-content style="padding-top: 15px"><div ng-if="!fetched" class="sand-glass-wrapper"><img ng-src="{{ sandGlassImg }}" alt="hold on, dude~"><p>一大波用户正在同时涌入<br>请耐心等待或稍后刷新</p></div><div ng-if="fetched" class="padding-horizontal"><div ng-if="over_loading" class="list task-list over-loading"><div class="img-face"><img ng-src="{{ overLoadingFace }}"></div><div class="item item-t" style="background: #fff"><div class="title">服务器繁忙，请稍后再试</div><div class="desc">一大波用户正在同时涌入，此时抢任务就要看肤色<br>拼身高了~ 建议大家洗把脸深呼吸，重新打开钱咖</div></div></div><div class="top-tips" style="text-align: left">还可以做 <span class="ff-77 assertive" ng-bind="card_num"></span> 次双倍任务<span class="positive" style="text-decoration: underline; float: right" ng-click="doubleQuota()">领取更多</span></div><div class="item item-thumbnail-left item-t" ng-repeat="task in availableSubTasks" style="background: #fff" ng-click="applyForTask(task)"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div ng-if="task.status==1" class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div><div ng-if="task.status==2" class="task-ongoing" ng-bind="\'进行中\'"></div></div><div class="item item-thumbnail-left item-t" ng-repeat="task in zeroQtySubTasks" style="background: #fff" ng-click="applyForTask(task)"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div ng-if="task.status==1" class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div><div ng-if="task.status==2" class="task-ongoing" ng-bind="\'进行中\'"></div></div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div ng-show="comingTaskTotalReward > 0" class="coming-task-tips">任务即将开始，总计 <span ng-bind="comingTaskTotalReward" class="ff-77 assertive"></span> 元，准时来抢！</div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div class="item item-thumbnail-left item-t" ng-repeat="task in taskNotices" style="background: #fff" ng-click="showNoticeModal()"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div class="desc"><div class="tag"><div class="font-10">{{ task.start_date }}</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div></div><div class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div></div><div style="width: 100%; height: 10px"></div><div class="item item-thumbnail-left item-t mask" ng-repeat="task in unavailableSubTasks" style="background: #fff"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div class="task-finished">已完成</div></div></div></ion-content></ion-view>',
    t.task_timed_detail = '<ion-view view-title="{{ viewTitle }}"><ion-nav-buttons side="left"><button class="button button-clear qk-nav-button-left" ng-click="abandonTask()"><img ng-src="{{ backButtonIcon }}"></button></ion-nav-buttons><ion-nav-buttons side="right"><button class="button button-clear qk-nav-button-right" ng-click="refresh()"><img ng-src="{{ refreshButtonIcon }}"></button></ion-nav-buttons><ion-content class="qk-timed-detail"><div ng-if="reward_tips" class="reward-tips-wrapper"><div class="reward-tips" ng-bind-html="reward_tips"></div></div><div class="list-a" style="margin-bottom: 10px"><div class="item item-a"><div class="item-content item-content-task"><img class="task-icon" ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title task-title" ng-bind="task.title"></div><div class="app-size font-11" ng-bind="\'大小 \' + task.app_size + \'M\'"></div><div class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.reward"></div><div class="yuan">元</div></div></div></div><div class="item item-a"><div class="item-content" style="padding-bottom: 6px"><div class="title" style="width: 180px">任务步骤&nbsp;<div class="count-down font-11" ng-bind-html="countDownText"></div></div><p class="task-steps" ng-bind-html="task.steps"></p></div></div><div class="item item-a"><div class="item-content" style="padding-top: 5px; padding-bottom: 5px"><button class="button button-positive button-block" ng-click="copyKeyword(task)" ng-bind-html="startTaskButtonText"></button> <button class="button button-assertive button-block" ng-click="checkTaskStatus()" ng-bind-html="\'完成后点此领钱\'"></button></div></div></div><div ng-if="exclusive_tasks.length > 0" class="list-a"><div class="item item-a"><div class="item-content" style="padding: 15px 20px 15px 0"><div class="title">专属任务</div><p class="task-steps" style="margin-bottom: 6px; width: 280px; color: #aaa">完成上面限时任务后将解锁下列专属任务：</p><p class="task-steps" style="margin-bottom: 6px; width: 280px" ng-bind-html="exclusive_tasks"></p></div></div></div><div class="fake-footer"></div></ion-content></ion-view>',
    t.task_timed_list = '<ion-view view-title="限时任务"><ion-nav-buttons side="left"><button class="button button-clear qk-nav-button-left" ng-click="back()"><img ng-src="{{ backButtonIcon }}"></button></ion-nav-buttons><ion-nav-buttons side="right"><button class="button button-clear qk-nav-button-right" ng-click="refresh()"><img ng-src="{{ refreshButtonIcon }}"></button></ion-nav-buttons><ion-content style="padding-top: 15px"><div ng-if="!fetched" class="sand-glass-wrapper"><img ng-src="{{ sandGlassImg }}" alt="hold on, dude~"><p>一大波用户正在同时涌入<br>请耐心等待或稍后刷新</p></div><div ng-if="fetched" class="padding-horizontal"><div ng-if="over_loading" class="list task-list over-loading"><div class="img-face"><img ng-src="{{ overLoadingFace }}"></div><div class="item item-t" style="background: #fff"><div class="title">服务器繁忙，请稍后再试</div><div class="desc">一大波用户正在同时涌入，此时抢任务就要看肤色<br>拼身高了~ 建议大家洗把脸深呼吸，重新打开钱咖</div></div></div><div class="item item-thumbnail-left item-t" ng-repeat="task in availableSubTasks" style="background: #fff" ng-click="applyForTask(task)"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div ng-if="task.status==1" class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div><div ng-if="task.status==2" class="task-ongoing" ng-bind="\'进行中\'"></div></div><div class="list task-list" ng-click="enterDuobao()"><img src="{{ duobaoEnterCornerMarker }}" class="task-item-corner-marker"><div class="item item-thumbnail-left item-duobao"><img ng-src="{{ duobaoLogo }}" style="border-radius: 4px;top: 4px !important;left: 6px !important"><div class="title royal">夺宝咖 <small>(钱咖夺宝APP)</small></div><div class="desc"><div class="tag"><div class="font-10">免费</div></div><div class="tag highlight"><div class="font-10">全场1元</div></div></div><div class="reward"><div class="red-bags font-10">红包</div><div class="money">20</div><div class="yuan font-10">元</div><img ng-src="{{ duobaoEnterRewardTag }}" class="reward-tag"></div></div></div><div class="list task-list" ng-repeat="product in fanglibangPromotions"><img ng-src="{{ fanliCornerMarker }}" class="task-item-corner-marker"><div class="item item-thumbnail-left item-t" style="background: #fff" ng-click="openUrl(product.link, product.bundle_id)"><img ng-src="{{ product.icon }}" style="border-radius: 4px"><div class="title royal">{{ product.title }}</div><div class="desc"><div class="tag"><div class="ff-77 font-10">某宝价{{ product.price }}元</div></div><div class="tag highlight"><div class="ff-77 font-10" ng-bind-html="\'返\' + product.fanli + \'元\'"></div></div></div><div class="reward"><div class="money">{{ product.discount }}</div><div class="yuan font-10">折</div></div></div></div><div class="item item-thumbnail-left item-t" style="background: #fff" ng-click="invite()"><img ng-src="{{ prenticeTaskIcon }}" style="border-radius: 4px"><div class="title royal">邀请好友</div><div class="desc"><div class="tag"><div class="font-10">超高奖励</div></div><div class="tag"><div class="font-10">上不封顶</div></div></div><div class="reward"><div class="plus font-10">+</div><div class="money">100</div><div class="yuan font-10">%</div></div></div><div class="item item-thumbnail-left item-t" ng-repeat="task in zeroQtySubTasks" style="background: #fff" ng-click="applyForTask(task)"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div ng-if="task.status==1" class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div><div ng-if="task.status==2" class="task-ongoing" ng-bind="\'进行中\'"></div></div><div ng-if="fanxian && fanxian.length > 0" class="fanxian-banner"><img src="//qianka.b0.upaiyun.com/images/c6ad751ee32090d3809b302ea482b3a6.png"></div><div class="list fanxian-list" ng-repeat="item in fanxian"><img src="//qianka.b0.upaiyun.com/images/19f7d517987f3c0235dc745b43b97d5f.png" class="fanxian-item-corner-marker"><div class="fanxian-discount" ng-bind="item.discount + \'折\'" style="min-width: 24px"></div><div class="item item-thumbnail-left item-fanxian" style="background: #fff" ng-click="openFanxianPopup(item)"><img ng-src="{{ item.pic }}" style="border-radius: 4px"><div class="title royal">{{ item.title }}</div><div class="desc" style="margin-bottom: 4px"><div class="tag" ng-repeat="tag in item.tags" ng-bind="tag"></div></div><div class="desc"><div class="tag tag-clock"><div><img src="//qianka.b0.upaiyun.com/images/3688dbe000c9399bb0e5cb3634602ea5.png"></div><span class="fanxian-item-time-label">00:00:00</span></div><div class="tag"><span ng-bind="\'剩\' + item.stock_residue + \'份\'"></span></div></div><div class="price"><div class="top"><div class="top-wrapper"><div class="text-suf font-10">元</div><div class="money" ng-bind="item.actual_price_str"></div><div class="text-pre font-10">到手</div></div></div><div class="bottom"><div class="text-fanxian" ng-bind="\'返现\' + item.rebate_amount.toFixed(2) + \'元\'"></div></div></div></div></div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div ng-show="comingTaskTotalReward > 0" class="coming-task-tips">任务即将开始，总计 <span ng-bind="comingTaskTotalReward" class="ff-77 assertive"></span> 元，准时来抢！</div><div ng-show="comingTaskTotalReward > 0" style="width: 100%; height: 5px"></div><div class="item item-thumbnail-left item-t" ng-repeat="task in taskNotices" style="background: #fff" ng-click="showNoticeModal()"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal">{{ task.title }}</div><div class="desc"><div class="desc"><div class="tag"><div class="font-10">{{ task.start_date }}</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div></div><div class="reward"><div class="plus font-10">+</div><div class="money" ng-bind="task.total_reward"></div><div class="yuan font-10">元</div></div></div><div style="width: 100%; height: 10px"></div><div class="item item-thumbnail-left item-t mask" ng-repeat="task in unavailableSubTasks" style="background: #fff"><img ng-src="{{ task.icon }}" style="border-radius: 4px"><div class="title royal" ng-bind="task.title"></div><div class="desc"><div ng-if="task.tags[0]==1" class="tag"><div class="font-10">免费</div></div><div ng-if="task.tags[1]==1" class="tag"><div class="font-10"><sup>+</sup>购买</div></div><div ng-if="task.tags[2]==1" class="tag"><div class="font-10">有专属</div></div><div class="tag" ng-class="{\'highlight\': task.qty < 100}"><div class="font-10" ng-bind-html="\'剩\' + task.qty + \'份\'"></div></div></div><div class="task-finished">已完成</div></div></div><div class="fake-footer" style="height: 50px"></div></ion-content></ion-view>',
    t.welcome = '<ion-view view-title="钱咖"><ion-content class="content-480"><div class="qk-welcome text-center"><div ng-show="showMasterInfo" class="master-info"><img class="avatar" ng-src="{{ master.avatar }}"><div class="brief" ng-bind-html="master.brief"></div></div><img class="qianka-logo" ng-src="//qianka.b0.upaiyun.com/images/157e608bbbf958e245873886fe68f967.png" width="106" height="44" style="margin-bottom: 113px"><div ng-if="app_context==\'web\'" class="btn-start-qianka" ng-click="install()"></div><div ng-if="app_context==\'app\'" class="btn-start-qianka" ng-click="dashboard()"></div><div class="what-is-qianka" ng-click="whatIsQianka()">钱咖是什么</div></div></ion-content></ion-view>',
    t
}),
define("common/stub", [],
function() {
    function t(t) {
        return t in o ? o[t] : null
    }
    function e(t, e) {
        return o[t] = e,
        !0
    }
    function n(t) {
        var e = t in o;
        return e ? delete o[t] : !1
    }
    function i() {
        return o = {},
        !0
    }
    var o = {};
    return {
        getItem: t,
        setItem: e,
        removeItem: n,
        clear: i
    }
}),
define("common/tracking", [],
function() {
    function t() {
        o.addEventListener ? o.addEventListener("storage", e, !1) : o.attachEvent ? o.attachEvent("onstorage", e) : o.onstorage = e
    }
    function e(t) {
        function e(e) {
            e(JSON.parse(t.newValue), JSON.parse(t.oldValue), t.url || t.uri)
        }
        t || (t = o.event);
        var n = a[t.key];
        n && n.forEach(e)
    }
    function n(e, n) {
        a[e] ? a[e].push(n) : a[e] = [n],
        s === !1 && t()
    }
    function i(t, e) {
        var n = a[t];
        n.length > 1 ? n.splice(n.indexOf(e), 1) : a[t] = []
    }
    var o = window,
    a = {},
    s = !1;
    return {
        on: n,
        off: i
    }
}),
define("common/storage", ["common/stub", "common/tracking"],
function(t, e) {
    function n(t) {
        var e = t;
        if (e) {
            var n = "__" + Math.round(1e7 * Math.random());
            try {
                t.setItem(n, n),
                t.removeItem(n)
            } catch(i) {
                e = !1
            }
        }
        return e
    }
    function i(t, e) {
        return 1 === arguments.length ? o(t) : a(t, e)
    }
    function o(t) {
        try {
            return JSON.parse(l.getItem(t))
        } catch(e) {
            return l.getItem(t)
        }
    }
    function a(t, e) {
        try {
            return l.setItem(t, JSON.stringify(e)),
            !0
        } catch(n) {
            return ! 1
        }
    }
    function s(t) {
        return l.removeItem(t)
    }
    function r() {
        return l.clear()
    }
    var c = window,
    l = "localStorage" in c && c.localStorage ? c.localStorage: t;
    return n(l) || (l = t),
    i.set = a,
    i.get = o,
    i.remove = s,
    i.clear = r,
    i.on = e.on,
    i.off = e.off,
    i
}),
function() {
    function t(t, e, n) {
        var i = e && n || 0,
        o = 0;
        for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g,
        function(t) {
            16 > o && (e[i + o++] = h[t])
        }); 16 > o;) e[i + o++] = 0;
        return e
    }
    function e(t, e) {
        var n = e || 0,
        i = u;
        return i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]]
    }
    function n(t, n, i) {
        var o = n && i || 0,
        a = n || [];
        t = t || {};
        var s = null != t.clockseq ? t.clockseq: v,
        r = null != t.msecs ? t.msecs: (new Date).getTime(),
        c = null != t.nsecs ? t.nsecs: b + 1,
        l = r - m + (c - b) / 1e4;
        if (0 > l && null == t.clockseq && (s = s + 1 & 16383), (0 > l || r > m) && null == t.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        m = r,
        b = c,
        v = s,
        r += 122192928e5;
        var d = (1e4 * (268435455 & r) + c) % 4294967296;
        a[o++] = d >>> 24 & 255,
        a[o++] = d >>> 16 & 255,
        a[o++] = d >>> 8 & 255,
        a[o++] = 255 & d;
        var u = r / 4294967296 * 1e4 & 268435455;
        a[o++] = u >>> 8 & 255,
        a[o++] = 255 & u,
        a[o++] = u >>> 24 & 15 | 16,
        a[o++] = u >>> 16 & 255,
        a[o++] = s >>> 8 | 128,
        a[o++] = 255 & s;
        for (var h = t.node || g,
        p = 0; 6 > p; p++) a[o + p] = h[p];
        return n ? n: e(a)
    }
    function i(t, n, i) {
        var a = n && i || 0;
        "string" == typeof t && (n = "binary" == t ? new d(16) : null, t = null),
        t = t || {};
        var s = t.random || (t.rng || o)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, n) for (var r = 0; 16 > r; r++) n[a + r] = s[r];
        return n || e(s)
    }
    var o, a = this;
    if ("function" == typeof a.require) try {
        var s = a.require("crypto").randomBytes;
        o = s &&
        function() {
            return s(16)
        }
    } catch(r) {}
    if (!o && a.crypto && crypto.getRandomValues) {
        var c = new Uint8Array(16);
        o = function() {
            return crypto.getRandomValues(c),
            c
        }
    }
    if (!o) {
        var l = new Array(16);
        o = function() {
            for (var t, e = 0; 16 > e; e++) 0 === (3 & e) && (t = 4294967296 * Math.random()),
            l[e] = t >>> ((3 & e) << 3) & 255;
            return l
        }
    }
    for (var d = "function" == typeof a.Buffer ? a.Buffer: Array, u = [], h = {},
    p = 0; 256 > p; p++) u[p] = (p + 256).toString(16).substr(1),
    h[u[p]] = p;
    var f = o(),
    g = [1 | f[0], f[1], f[2], f[3], f[4], f[5]],
    v = 16383 & (f[6] << 8 | f[7]),
    m = 0,
    b = 0,
    w = i;
    if (w.v1 = n, w.v4 = i, w.parse = t, w.unparse = e, w.BufferClass = d, "function" == typeof define && define.amd) define("common/uuid", [],
    function() {
        return w
    });
    else if ("undefined" != typeof module && module.exports) module.exports = w;
    else {
        var y = a.uuid;
        w.noConflict = function() {
            return a.uuid = y,
            w
        },
        a.uuid = w
    }
}.call(this),
define("common/clone", [],
function() {
    var t = function() {
        "use strict";
        function t(e, n, i, o) {
            function s(e, i) {
                if (null === e) return null;
                if (0 === i) return e;
                var r, u;
                if ("object" != typeof e) return e;
                if (t.__isArray(e)) r = [];
                else if (t.__isRegExp(e)) r = new RegExp(e.source, a(e)),
                e.lastIndex && (r.lastIndex = e.lastIndex);
                else if (t.__isDate(e)) r = new Date(e.getTime());
                else {
                    if (d && Buffer.isBuffer(e)) return r = new Buffer(e.length),
                    e.copy(r),
                    r;
                    "undefined" == typeof o ? (u = Object.getPrototypeOf(e), r = Object.create(u)) : (r = Object.create(o), u = o)
                }
                if (n) {
                    var h = c.indexOf(e);
                    if ( - 1 != h) return l[h];
                    c.push(e),
                    l.push(r)
                }
                for (var p in e) {
                    var f;
                    u && (f = Object.getOwnPropertyDescriptor(u, p)),
                    f && null == f.set || (r[p] = s(e[p], i - 1))
                }
                return r
            }
            var r;
            "object" == typeof n && (i = n.depth, o = n.prototype, r = n.filter, n = n.circular);
            var c = [],
            l = [],
            d = "undefined" != typeof Buffer;
            return "undefined" == typeof n && (n = !0),
            "undefined" == typeof i && (i = 1 / 0),
            s(e, i)
        }
        function e(t) {
            return Object.prototype.toString.call(t)
        }
        function n(t) {
            return "object" == typeof t && "[object Date]" === e(t)
        }
        function i(t) {
            return "object" == typeof t && "[object Array]" === e(t)
        }
        function o(t) {
            return "object" == typeof t && "[object RegExp]" === e(t)
        }
        function a(t) {
            var e = "";
            return t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            e
        }
        return t.clonePrototype = function(t) {
            if (null === t) return null;
            var e = function() {};
            return e.prototype = t,
            new e
        },
        t.__objToStr = e,
        t.__isDate = n,
        t.__isArray = i,
        t.__isRegExp = o,
        t.__getRegExpFlags = a,
        t
    } ();
    return t
}),
define("common/util", ["underscore"],
function() {
    function t() {
        return (new Date).getTime()
    }
    function e() {
        var t = window.navigator.userAgent.toLocaleLowerCase(),
        e = t.match(/\biPhone.*Mobile|\biPod|\biPad/i);
        return e ? !0 : !1
    }
    function n() {
        var t = /OS ((\d{1,2})_\d{1,2}||(\d{1,2})_\d{1,2}_\d{1,2}) like Mac OS X/i,
        e = t.exec(window.navigator.userAgent),
        n = e && e[1] && e[1].substr(0, 1);
        return 9 == n
    }
    function i(t, e) {
        var n = t.getFullYear(),
        i = (t.getMonth() + 101 + "").slice(1),
        o = (t.getDate() + 100 + "").slice(1),
        a = (t.getHours() + 100 + "").slice(1),
        s = (t.getMinutes() + 100 + "").slice(1),
        r = (t.getSeconds() + 100 + "").slice(1);
        return "yyyy-MM-dd" == e ? n + "-" + i + "-" + o: "yyyy-MM-dd_zh" == e ? n + "年" + i + "月" + o + "日": n + "-" + i + "-" + o + " " + a + ":" + s + ":" + r
    }
    function o(t) {
        var e = parseInt(t.getTime() / 1e3) - parseInt((new Date).getTime() / 1e3),
        n = parseInt(e / 86400);
        if (n > 4) return "约" + n + "天";
        var i = parseInt(e % 864e5),
        o = (parseInt(i / 3600) + 100 + "").slice(1),
        a = (parseInt(i % 3600 / 60) + 100 + "").slice(1),
        s = (parseInt(i % 3600 % 60) + 100 + "").slice(1);
        return o + ":" + a + ":" + s
    }
    function a() {
        return window.screen.availHeight
    }
    function s() {
        ua = window.navigator.userAgent;
        var t = /^.*appLabel\/(.*)$/;
        return t.test(ua) ? "app": "web"
    }
    function r() {
        var t = window.navigator.userAgent,
        e = /appVersion\/([^\s]+)/,
        n = e.exec(t);
        return n ? e.exec(t)[1] : !1
    }
    function c() {
        var t = window.navigator.userAgent,
        e = /appLabel\/([^\s]+)/,
        n = e.exec(t);
        return n && "hbdrqm" == n[1]
    }
    function l() {
        var t = window.navigator.userAgent,
        e = /appScheme\/([^\s]+)/,
        n = e.exec(t);
        return n ? e.exec(t)[1] : !1
    }
    function d(t) {
        var e = new Date,
        n = parseInt(t.substr(0, 4)),
        i = parseInt(t.substr(5, 2)) - 1,
        o = parseInt(t.substr(8, 2)),
        a = parseInt(t.substr(11, 2)),
        s = parseInt(t.substr(14, 2)),
        r = parseInt(t.substr(17, 2));
        return e.setFullYear(n, i, o),
        e.setHours(a),
        e.setMinutes(s),
        e.setSeconds(r),
        e
    }
    return window.getTimestamp = t,
    window.isIOS = e,
    window.isIOS9 = n,
    {
        dateFormat: i,
        isIOS: e,
        isIOS9: n,
        getScreenHeight: a,
        isStandalone: function() {
            return window.navigator.standalone
        },
        getAppContext: s,
        getAppVer: r,
        getAppScheme: l,
        isRongyuka: c,
        strToDate: d,
        getTimeCountDown: o
    }
}),
define("common/cookie", [],
function() {
    function t(t, e) {
        var n = 365,
        i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
        document.cookie = t + "=" + escape(e) + ";path=/;expires=" + i.toGMTString()
    }
    function e(t) {
        var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
        return (e = document.cookie.match(n)) ? unescape(e[2]) : null
    }
    return {
        set: t,
        get: e
    }
}),
define("common.services", ["underscore", "chart", "c2h", "ionic", "common/storage", "common/uuid", "common/clone", "common/util", "common/cookie"],
function(t, e, n, i, o, a, s, r, c) {
    return ionic.keyboard.disable(),
    angular.module("commonServices", ["ui.router", "ionic"]).factory("$storage", [function() {
        return o
    }]).factory("$uuid", [function() {
        return a
    }]).factory("$clone", [function() {
        return s
    }]).factory("$util", [function() {
        return r
    }]).factory("$cookie", [function() {
        return c
    }]).factory("$ss", [function() {
        return n
    }])
}),
define("service/img", [],
function() {
    var t = {
        BACK_BUTTON_ICON: "163866bc10c94544e29bfc509229aff6.png",
        REFRESH_BUTTON_ICON: "2783f8f4c209cfd94f61d0618d340afb.png",
        ARROW_RIGHT_ICON: "534045b53a0ce64846813ec33ef73588.png",
        QIANKA_LOGO: "b3cf63a32db07b38e268070e3005aaf1.png",
        WELCOME_TO_QIANKA: "c15f8fe2b93034d49dd23841da6c1c5c.png",
        DEFAULT_USER_AVATAR: "d750995328248d4a2f596ff283c359d8.png",
        DEFAULT_ALERT_ICON: "7e868c18849502b7832dcd4db52bf247.png",
        DEFAULT_CONFIRM_ICON: "7e868c18849502b7832dcd4db52bf247.png",
        ALERT_OK: "e441de17c9f8d6e13501100f88025efb.png",
        FOOTER_PRODUCTION: "0ab38afa61fa2a482be88b5fc36727a9.png",
        FOOTER_TIMED_TASK: "e3fd8189dc045a60c1a7675fa9efb918.png",
        FOOTER_EXCLUSIVE_TASK: "d956fe225ab408345e2bd4081dd0ef00.png",
        FOOTER_NOVICE_TASK: "02188199b22ce710ab59ec5faf4caeaf.png",
        FOOTER_SHARE_TASK: "552971fa3e7ceca8a340c5a45c3248c8.png",
        MENU_DOUBLE: "62751efbe33bc3c01bad9e4ae3d684dc.png",
        MENU_XIANSHI: "e21f1fc7c59056e697b0862d4e6a14f0.png",
        MENU_ZHUANSHU: "327d354418f544289bf38fd4e3c0b2ec.png",
        MENU_ZHUANFA: "3c052b023cad9a10d48060758d2194f9.png",
        MENU_SHOUTU: "60311a224ecdb3d0795915bfaa0fe010.png",
        MENU_DUOBAO: "9acc9a9c5484962492f26bdc096a97c8.png",
        MENU_FANLI: "780439b32100ea91cdb8897ddbd1cebc.png",
        MENU_FANXIAN: "3c63bbfe52c8cf636b4981c5abc83812.png",
        MENU_XINSHOU: "9d79751dac576d71e832a415b17eca17.png",
        ACTIVITY_ICON: "47589cd72775b70a8b46127078614fd8.png",
        ARROW_RIGHT_RED: "ed8181af4bd273ff287dc3f4b955fb86.png",
        WITHDRAW_CENTER_ICON: "851f8f642e6c76f58ad19256eb0a1547.png",
        BET_TASK_ICON: "8cbcb3b47117de3a2ba95b479efe076c.png",
        PRENTICE_TASK_ICON: "c049e3ccf561075731640fd20feb4513.png",
        PRENTICE_TASK_ICON_NEW: "cb263d3fa0cbe8e6b6f83ca7dafe5e06.png",
        TASK_NOTICE_ICON_1: "7b98e7e199f0ac53d9496f43b39eb706.png",
        TASK_NOTICE_ICON_2: "b0600c4b5b10aae6cfca63bd452dce51.png",
        TASK_NOTICE_ICON_3: "31154ad11fb1bc5cddb95822f23ef7b7.png",
        TASK_NOTICE_ICON_4: "8adca01a5a85343f43ac7b3b707efe5a.png",
        TASK_NOTICE_ICON_5: "852c3a800768d1f9fe0891000e7d1225.png",
        GIFT_ICON: "66b0eed8b5db0778a496ac876b250ce0.png",
        GIFT_SUCCESS_ICON: "f56f377bc3267663be5ef679b21f1f24.png",
        CLOCK_ICON: "5c2e5835329a67ca177a475f4d96de8a.png",
        COPY_KEYWORD_SUCCESS: "549cf0a387f6761b10966ed0167a840a.png",
        TASK_FANGLIBANG_MAI: "f42ecdc8dd324a2590be02e5ab1bb02d.png",
        TASK_DUOBAO_QIANG: "67440cd2409a4c1d20a70c75333d667a.png",
        TASK_DUOBAO_LOGO: "ab6f2e603fa40cf88cc09c927274d049.png",
        TASK_DUOBAO_ENTER_CORNER_MARKER: "f90a1b1e9a57987188f2c39e6ac5fae2.png",
        TASK_DUOBAO_ENTER_REWARD_TAG: "eb822fed9aa422881bc25defe286935f.png",
        TASK_TRANSCRIPT: "470b69e4abe96aa825633d8ef6d75e98.png",
        TASK_TRANSCRIPT_MARKER: "bbb844016e52abc861caae3800c65c38.png",
        EXCLUSIVE_GREY: "7e744adadfc1d738de4a6e0554d8e674.png",
        SAND_GLASS: "e3802d2d76d9de1348a7fc79dd8af6bd.png",
        INSTALL_KEY_TIPS_ICON: "97a720e4cddabdea8f4d4d50a855e88a.png",
        PHOTO: "340a2530afb2489e52475e8d86bdcb6b.png",
        INSTALL_KEY_MONEY: "78a30cd80cf040d1097f0192e1d14a00.png",
        MP_QRCODE: "21cd3860ec2bf4fb49c267bb5b3a51e9.jpeg",
        BIND_MOBILE_SUCCESS: "986c7cdca1a3b7f311ef61cc4aaa2a1d.png",
        BIND_WEIXIN_SUCCESS: "e3f3bb25e1ee3a09c6594e00faa29473.png",
        SEND_CODE_TIPS_ICON: "c87eb612de248fa0a1449a31b39aa423.png",
        BLACK_ARROW_UP: "d8009bad9df5e5d3ffc73c6bdf3596f8.png",
        WITHDRAW_ALIPAY_ICON: "cb9a4fe439e672ad938762cb799c2a1e.png",
        WITHDRAW_MOBILE_ICON: "9b2c4990393737473d972d876b45d9f2.png",
        WITHDRAW_WEIXIN_ICON: "f6516675bc2b1ec5926e7cd3ebbef50a.png",
        WITHDRAW_DUOBAO_ICON: "5c5fcb667f2d3176d5e39d6ac9b4f9fb.png",
        WITHDRAW_LARGE_ICON: "f8706046295169e8a9cb3bfb7a2c7358.png",
        WITHDRAW_CORNER_A: "161cae9a2e4f21058d5220905ea84890.png",
        WITHDRAW_CORNER_B: "1ba8f50f9718ef2b4e8a004a2e69ee07.png",
        WITHDRAW_CORNER_C: "6423c13c85676e164075974a56d8c269.png",
        WITHDRAW_CORNER_D: "f107aeb9eef0221d8e4ceed301c0fb26.png",
        WITHDRAW_CORNER_SELECTED: "ac77c95909e8b88d70a7b06e4e00e57e.png",
        WITHDRAW_SUCCESS_MOBILE: "986c7cdca1a3b7f311ef61cc4aaa2a1d.png",
        WITHDRAW_SUCCESS_WECHAT: "e3f3bb25e1ee3a09c6594e00faa29473.png",
        WITHDRAW_SUCCESS_DUOBAO: "68c6bb4c278e0873992c1984748e675b.png",
        WITHDRAW_SUCCESS_ALIPAY: "221f5442072dbfb2ce0a5f5c3f29dacc.png",
        PLEASE_BIND_WEIXIN: "5c8b09ec72c254052d15623fab8f6d21.png",
        UNSELECTED: "122a47fe8694632ec162121181e2a5c9.png",
        SELECTED: "a1a5b13a8747203d5f15dc57e98c0249.png",
        NOVICE_SHORTCUT: "e4bb66e1193da3ca0e70a54cf73a92ca.png",
        NOVICE_PROFILE: "17c2a3493021b3351d1c2e0804fa645a.png",
        NOVICE_MOBILE: "ebaa0e8b6ad22a3a6b3677f805dd0765.png",
        LEVEL_0: "7ffadfe30b383de8dc33af88cc5df2d6.png",
        LEVEL_1: "0b7b72a663c3c977569c27598dadcfd7.png",
        LEVEL_2: "cd419bf9a4383ce9436217ec9ec28a8a.png",
        LEVEL_3: "ce7f37ccb1ef505af0d5c181e64dda46.png",
        LEVEL_4: "0feab9c5a485957f7ffb89047b539e8b.png",
        LEVEL_5: "e2ae4083d5b9bb4bbcb6193e23219255.png",
        LEVEL_6: "5962449dcf1e081642cbf43d4d5b47bb.png",
        LEVEL_7: "c690ee8432a5855f58742eaed5acd7b5.png",
        LEVEL_8: "ea5dd02e9007b4596370cee82d3c82d6.png",
        LEVEL_9: "d8163aa9131430b65fb81642a6f70d4f.png",
        LEVEL_10: "6e0f5716b06473de00e67175cde059d2.png",
        LEVEL_QUESTION: "386f5df986d40a94f6f793125a851402.png",
        LEVEL_ADVICE_TEXT: "c223581b9f1fb095c2fbe73fed2a0a73.png",
        CURRENT_LEVEL_TEXT: "f8b75c4d42bb86f82163d5bb76b66328.png",
        NEXT_LEVEL_TEXT: "089ff5f151c8862b2812e18393c3410f.png",
        MEMBER_LEVEL_TEXT: "c7cca49be73a27a67ae21b4b0fbaa980.png",
        TODAY_PRENTICE_INCREMENT_ICON: "fb1c5ef7287cd690367e0fcac24881e4.png",
        PRENTICE_POPUP_ICON: "09099c3156f02c87bbd5578284559624.png",
        PRENTICE_QRCODE_ICON: "3d837fb453fc468f7db920833052c727.png",
        PRENTICE_LINK_ICON: "888bda96e65fd4e0bc7c37bfa5893313.png",
        PRENTICE_TRANSCRIPT_ICON: "6643a890459a5620ff67f7e0204fbd1e.png",
        PRENTICE_SHARE_ICON: "e6aec4de5ebbc0b1c548bebd41bb6b0b.png",
        PRENTICE_QRCODE_BUTTON_ICON: "70e78325b83124a2ca1ccd32d2f216da.png",
        PRENTICE_LINK_BUTTON_ICON: "db1f72f6762d0d6fcd96f98e5e18d2d1.png",
        PRENTICE_MARK_ICON: "bdf56e2ebb563f3f4f0ff9f00ae676f4.png",
        QIANKA_KEY: "07452d4e9a79d84c9826cd65ec7a9534.png",
        KEY_UPDATE_FORCE: "59993f8a51c56de841c968e36b5680c6.png",
        NO_KEY_DETECTED: "5aa20fd1ae46f06c6dfa819ac290c9dd.png",
        INTEGRAL_SAMPLE_MOBILE: "c0c6ce5ff6f977aad4968ecf7779d961.png",
        INTEGRAL_SAMPLE_PC: "44e1d3ad30c831087bb9ed677912ed8d.png",
        ACCOUNT_NORMAL: "bd8342d4a9f171374d5f4b5bdab1b212.png",
        ACCOUNT_FROZEN: "2c51a6c5406f83b294612a13ad4f23a6.png",
        UNFREEZE_STEP_1: "7f80212d67c5cc8773dcead82dee984b.png",
        UNFREEZE_STEP_2: "5c66d3474905f1bbbbeea873d302d82f.png",
        UNFREEZE_STEP_3: "3e3fa8dcab882ebe79690030899a7bc4.png",
        UNFREEZE_STEP_2_GREY: "97e37d6851f1cdac8690df3428c97eed.png",
        UNFREEZE_STEP_3_GREY: "083a78ed357cbf730a632b8e2dc55f4e.png",
        UNFREEZE_STEP_GUTTER: "de8e6089223e17f078bfc28bc070c544.png",
        UNFREEZE_WAITING: "a2bdeeba7090052b246899018c5d8875.png",
        SHIFT_ACCOUNT_ICON: "7b3efe4d80409fb0d5d5923235f8a4e8.png",
        SAMPLE_PURCHASED: "7df7aa1ff228d50e9b5c6c4bd04f2c33.jpeg",
        SAMPLE_RECEIPT: "b6f01ede67cd1567b67258ab5a8b1a77.png",
        QK_BIZ_ICON: "953572b82a5791ad6a7a28db039f45f4.png",
        DOUBLE_TICKET_FANLI: "47a88fe4235f8cfe3cf24c83ca421ce3.png",
        DOUBLE_TICKET_SMALL: "cf1e67fe62f461efb54152d3ada20515.png",
        RMB_WHITE: "c8f48ce0e81fb7c33a33f11d045791ef.png",
        YUAN: "bc8e3c26ee450e2cd9d3d0f1106aeb70.png",
        TRANSCRIPT_TITLE: "f4eb9dd6895bfecfa04bbe604c5d5d2f.png",
        DOWNLOAD_XIAOKA: "2786ada7ea4fde95afaa0d68c4060a94.png",
        OVER_LOADING_FACE: "347fca6e228c5a198ed21e7ab3222978.png",
        QQ_ICON: "74503e0cd48f0db48cb6d261fecf2163.png",
        FANLI_INTRO: "3b7035bddff242f862b716c51ab46864.png",
        RONGYUKA_VIP: "a5f5402fed409b65a3e456c5856f8f1b.png",
        QUOTA_TIPS_GUIDE: "6b5b00677db9891ca4b2ada2edd1823e.png",
        DEFAULT_APP_ICON: "5e680b10afbe3cec5ba4c4a1121f6d47.png",
        LEKA_ICON: "a44aa95505ea9e96889ffee4e9439094.png",
        RONGYUKA_WELCOME: "c6b57d2454328a67429bc97cc582e51d.png"
    };
    return {
        get: function(e) {
            return window.ASSETS_CDN + t[e]
        }
    }
}),
define("service/plist", [],
function() {
    function t(t) {
        this.$http = t[0],
        this.$q = t[1]
    }
    var e = "key/enterprise.plist.json?timestamp=" + (new Date).getTime();
    return t.prototype.get = function(t) {
        var n, i, o, a, s, r = this.$http,
        c = this.$q,
        l = c.defer();
        return r.get(window.WS_ENDPOINT + e).then(function(e) {
            l.resolve();
            var r = e.data;
            if (r && r.payload && "ok" == r.status) {
                if (a = r.payload.appstore_url, s = r.payload.is_appstore, 1 == s && a) return void(t ? t.attributes["data-url"] = a: (window.location.href = a, window.location.reload()));
                i = r.payload.appid,
                n = r.payload.hash,
                o = (new Date).getTime(),
                url = "itms-services://?action=download-manifest&url=https://qianka.com/key/enterprise-" + o + "-" + n + "-" + i + ".plist",
                t ? t.attributes["data-url"] = url: window.location.href = url
            }
        },
        function() {
            l.resolve()
        }),
        l.promise
    },
    t
}),
define("service/loading", [],
function() {
    function t(t, e) {
        return "Loading" == t ? '<ion-spinner icon="ios" class="spinner-light"></ion-spinner><p style="margin: 5px 0 0 0; font-size: 12px; line-height: 12px; min-width: 70px;">' + e + "</p>": "Toast" == t ? '<p style="margin: 0; font-size: 12px; line-height: 16px; min-width: 80px; max-width: 216px; padding: 8px 0;">' + e + "</p>": void 0
    }
    function e(t, e) {
        this._ionicLoading = t[0],
        this._timeout = t[1],
        this.templateName = e
    }
    var n = 1500;
    return e.prototype.show = function() {
        var e, i = this._ionicLoading,
        o = this._timeout,
        a = this.templateName;
        "string" == typeof arguments[0] ? (e = arguments[1] || n, i.show({
            template: t(a, arguments[0])
        }), o(function() {
            i.hide()
        },
        e)) : "object" == typeof arguments[0] && (e = arguments[0].duration || n, i.show({
            template: t(a, arguments[0].message)
        }), o(function() {
            i.hide()
        },
        e))
    },
    e.prototype.hide = function() {
        this._ionicLoading.hide()
    },
    e
}),
define("common/base", [],
function() {
    var t = function() {};
    return t.extend = function(e, n) {
        var i = t.prototype.extend;
        t._prototyping = !0;
        var o = new this;
        i.call(o, e),
        o.base = function() {},
        delete t._prototyping;
        var a = o.constructor,
        s = o.constructor = function() {
            if (!t._prototyping) if (this._constructing || this.constructor == s) this._constructing = !0,
            a.apply(this, arguments),
            delete this._constructing;
            else if (null != arguments[0]) return (arguments[0].extend || i).call(arguments[0], o)
        };
        return s.ancestor = this,
        s.extend = this.extend,
        s.forEach = this.forEach,
        s.implement = this.implement,
        s.prototype = o,
        s.toString = this.toString,
        s.valueOf = function(t) {
            return "object" == t ? s: a.valueOf()
        },
        i.call(s, n),
        "function" == typeof s.init && s.init(),
        s
    },
    t.prototype = {
        extend: function(e, n) {
            if (arguments.length > 1) {
                var i = this[e];
                if (i && "function" == typeof n && (!i.valueOf || i.valueOf() != n.valueOf()) && /\bbase\b/.test(n)) {
                    var o = n.valueOf();
                    n = function() {
                        var e = this.base || t.prototype.base;
                        this.base = i;
                        var n = o.apply(this, arguments);
                        return this.base = e,
                        n
                    },
                    n.valueOf = function(t) {
                        return "object" == t ? n: o
                    },
                    n.toString = t.toString
                }
                this[e] = n
            } else if (e) {
                var a = t.prototype.extend;
                t._prototyping || "function" == typeof this || (a = this.extend || a);
                for (var s = {
                    toSource: null
                },
                r = ["constructor", "toString", "valueOf"], c = t._prototyping ? 0 : 1; l = r[c++];) e[l] != s[l] && a.call(this, l, e[l]);
                for (var l in e) s[l] || a.call(this, l, e[l])
            }
            return this
        }
    },
    t = t.extend({
        constructor: function() {
            this.extend(arguments[0])
        }
    },
    {
        ancestor: Object,
        version: "1.1",
        forEach: function(t, e, n) {
            for (var i in t) void 0 === this.prototype[i] && e.call(n, t[i], i, t)
        },
        implement: function() {
            for (var t = 0; t < arguments.length; t++)"function" == typeof arguments[t] ? arguments[t](this.prototype) : this.prototype.extend(arguments[t]);
            return this
        },
        toString: function() {
            return String(this.valueOf())
        }
    })
}),
define("common/base.dialog", ["common/base"],
function(t) {
    return t.extend({
        constructor: function(t) {
            this._ionicPopup = t[0],
            this._img = t[1],
            this._uuid = t[2],
            this._lock = 0
        },
        alert: function() {
            var t, e, n = this,
            i = "alert",
            o = n._img.get("DEFAULT_ALERT_ICON"),
            a = 1500,
            s = {
                cssClass: "popup-alert",
                title: '<img src="' + o + '" />',
                okText: "知道了",
                okType: "button-positive"
            };
            if ("string" == typeof arguments[0]) s.subTitle = arguments[0];
            else if ("object" == typeof arguments[0]) {
                var r = arguments[0];
                r.cssClass && (s.cssClass = r.cssClass),
                s.title = '<img src="' + (r.icon || o) + '"/>',
                r.title ? r.hideIcon ? s.title = '<div class="title margin-top-15">' + r.title + "</div>": s.title += '<div class="title">' + r.title + "</div>": r.hideIcon && (s.title = ""),
                r.showClose && (t = n._uuid.v4(), s.title += '<i class="ion-android-close calm btn-close-alert btn-close-alert-' + t + '" ></i>'),
                s.subTitle = r.message || "",
                r.hideButton ? i = "show": (s.okText = r.btnText, s.okType = r.btnTheme ? "button-" + r.btnTheme: "button-positive"),
                e = r.autoClose
            }
            var c = n._ionicPopup[i](s);
            if (t && setTimeout(function() {
                var e = document.getElementsByClassName("btn-close-alert-" + t);
                e[0].onclick = function() {
                    c.close()
                }
            },
            10), e) {
                var l = "number" == typeof r.autoClose ? r.autoClose: a;
                setTimeout(function() {
                    c.close()
                },
                l)
            }
            return c
        },
        confirm: function() {
            var t = this,
            e = t._img.get("DEFAULT_CONFIRM_ICON"),
            n = {
                title: '<img src="' + e + '" />',
                okText: "确定",
                okType: "button-positive",
                cancelText: "取消",
                cancelType: "button-calm button-outline"
            };
            if ("string" == typeof arguments[0]) n.subTitle = arguments[0];
            else if ("object" == typeof arguments[0]) {
                var i = arguments[0];
                i.cssClass && (n.cssClass = i.cssClass),
                n.title = '<img class="border-radius-4" src="' + (i.icon || e) + '"/>',
                i.title ? i.hideIcon ? n.title = '<div class="title margin-top-15">' + i.title + "</div>": n.title += '<div class="title">' + i.title + "</div>": i.hideIcon && (n.title = ""),
                n.subTitle = i.message || "",
                n.okText = i.btnYesText || "确定",
                n.cancelText = i.btnNoText || "取消",
                n.okType = i.btnTheme ? "button-" + i.btnTheme: "button-positive"
            }
            return t._ionicPopup.confirm(n)
        },
        confirm2: function() {
            var t, e = this,
            n = e._img.get("DEFAULT_CONFIRM_ICON"),
            i = {
                cssClass: "popup-alert",
                title: '<img src="' + n + '" />',
                buttons: [{
                    text: "确定",
                    type: "button-positive",
                    onTap: function() {
                        t = !0
                    }
                }]
            };
            if ("string" == typeof arguments[0]) i.subTitle = arguments[0];
            else if ("object" == typeof arguments[0]) {
                var o = arguments[0];
                o.cssClass && (i.cssClass += " " + o.cssClass),
                i.title = '<img class="border-radius-4" src="' + (o.icon || n) + '"/>',
                o.title ? o.hideIcon ? i.title = '<div class="title margin-top-15">' + o.title + "</div>": i.title += '<div class="title">' + o.title + "</div>": o.hideIcon && (i.title = ""),
                i.subTitle = o.message || "",
                i.buttons[0].text = o.btnYesText || "确定",
                i.buttons[0].type = o.btnTheme ? "button-" + o.btnTheme: "button-positive"
            }
            var a = e._uuid.v4();
            i.title += '<i class="ion-android-close calm btn-close-alert btn-close-alert-' + a + '" ></i>';
            var s = e._q.defer(),
            r = e._ionicPopup.show(i);
            return setTimeout(function() {
                var t = document.getElementsByClassName("btn-close-alert-" + a);
                t[0].onclick = function() {
                    r.close()
                }
            },
            10),
            r.then(function() {
                s.resolve( !! t)
            }),
            s.promise
        }
    })
}),
define("service/biz.dialog", ["common/base.dialog", "templates/qk"],
function(t, e) {
    return t.extend({
        constructor: function(t) {
            this.base(t),
            this._util = t[3],
            this._ionicViewSwitcher = t[4],
            this._state = t[5],
            this._http = t[6],
            this._storage = t[7],
            this._cookie = t[8],
            this._plist = t[9],
            this._q = t[10],
            this._rootScope = t[11]
        },
        alert: function() {
            return this.base(arguments[0])
        },
        confirm: function() {
            return this.base(arguments[0])
        },
        confirm2: function() {
            return this.base(arguments[0])
        },
        KEY_UPDATE_FORCE: function(t) {
            var e, n = this;
            if (100 == t.type) {
                var i = 2 == t.app_type ? t.app_name: "激活助手";
                e = {
                    icon: t.icon || n._img.get("KEY_UPDATE_FORCE"),
                    message: i + "太旧了，需立即更新",
                    btnText: "立即更新",
                    btnTheme: "assertive"
                }
            } else {
                var o = "您的助手已失效<br>请删除该助手重新下载最新版";
                2 == t.type && (o = "您的" + t.app_name + "已失效<br>请删除该" + t.app_name + "重新下载最新版"),
                e = {
                    icon: t.icon || n._img.get("KEY_UPDATE_FORCE"),
                    message: o,
                    btnText: "去下载",
                    btnTheme: "assertive"
                }
            }
            var a = n.alert(e);
            a.then(function() {
                return "app" == n._util.getAppContext() ? void(window.location.href = t.download_url) : void(window.location.href = "/key/update")
            })
        },
        KEY_NEW_VERSION: function(t) {
            var e = this,
            n = (new Date).getTime(),
            i = e._storage.get("qk:biz:show_new_version_alert");
            if (!i || n - i > 864e5) {
                var o = 2 == t.app_type ? "发现您的" + t.app_name + "有新版本<br>是否需要立即更新？": "发现您的激活助手有新版本<br>是否需要立即更新？",
                a = e.confirm({
                    icon: t.icon,
                    message: o,
                    btnYesText: "立即更新",
                    btnNoText: "下次再说",
                    btnTheme: "assertive"
                });
                a.then(function(n) {
                    n ? window.location.href = t.download_url: e._storage.set("qk:biz:show_new_version_alert", (new Date).getTime())
                })
            }
        },
        NO_KEY_DETECTED: function(t) {
            function e() {
                setTimeout(function() {
                    d.get(window.QK_ENDPOINT + "services/users.getInfo").success(function(t) {
                        var e = t.payload && t.payload.app_scheme;
                        e && o._storage.set("qk:app:scheme", e),
                        window.location.reload(!0)
                    }).error(function() {
                        e()
                    })
                },
                1e3)
            }
            var n, i, o = this,
            a = t || o._img.get("NO_KEY_DETECTED"),
            s = {
                title: '<img src="' + a + '" />'
            };
            s.subTitle = "未检测到激活助手，请打开助手",
            n = o._uuid.v4(),
            i = o._uuid.v4();
            var r = '<button class="button button-assertive button-block btn-close-alert-' + n + '" >打开助手</button>',
            c = '<p class="text-center grey">如遇问题，请 <span class="underline positive btn-download-' + i + '">下载最新激活助手</span></p>';
            s.template = r + c;
            var l = o._ionicPopup.show(s);
            n && setTimeout(function() {
                var t = document.getElementsByClassName("btn-close-alert-" + n);
                t[0].onclick = function() {
                    var t = window.QK_SCHEME;
                    window.location.href = t + "://openURL?type=outside&url=" + encodeURIComponent(window.location.href),
                    l.close()
                };
                var e = document.getElementsByClassName("btn-download-" + i);
                e[0].onclick = function() {
                    l.close(),
                    o._ionicViewSwitcher.nextDirection("forward"),
                    o._state.go("install")
                }
            },
            10);
            var d = o._http;
            return e(),
            l
        },
        NO_KEY_DETECTED_WITH_GUIDE: function(t) {
            function n() {
                window.STOP_KEY_POLLING = !0,
                setTimeout(function() {
                    p.get(window.QK_ENDPOINT + "services/users.getInfo").success(function(t) {
                        var e = t.payload && t.payload.app_scheme;
                        e && a._storage.set("qk:app:scheme", e),
                        window.location.reload(!0)
                    }).error(function() {
                        n()
                    })
                },
                1e3)
            }
            var i, o, a = this,
            s = t || a._img.get("NO_KEY_DETECTED"),
            r = a._ionicPopup,
            c = a._rootScope,
            l = {
                title: '<img src="' + s + '" />'
            };
            l.subTitle = "未检测到激活助手，请打开助手",
            i = a._uuid.v4(),
            o = a._uuid.v4();
            var d = '<button class="button button-assertive button-block btn-close-alert-' + i + '" >打开助手</button>',
            u = '<p class="text-center grey">不小心删除激活助手，<span class="underline positive btn-download-' + o + '">点此找回</span></p>';
            l.template = d + u;
            var h = a._ionicPopup.show(l);
            i && setTimeout(function() {
                var t = document.getElementsByClassName("btn-close-alert-" + i);
                t[0].onclick = function() {
                    var t = window.QK_SCHEME;
                    window.location.href = t + "://openURL?type=outside&url=" + encodeURIComponent(window.location.href),
                    h.close()
                };
                var n = document.getElementsByClassName("btn-download-" + o);
                n[0].onclick = function() {
                    h.close(),
                    _.delay(function() {
                        c.findKeyBackIcon = s,
                        c.findKeyBackPopup = r.show({
                            cssClass: "install-key-guide-popup",
                            template: e.find_key_back,
                            scope: c
                        })
                    },
                    300)
                }
            },
            10);
            var p = a._http;
            return window.STOP_KEY_POLLING ? void 0 : (n(), h)
        },
        REWARD_ALERT: function(t) {
            var e = this,
            n = e._ionicViewSwitcher,
            i = e._state,
            o = {};
            o.btnText = "很好，继续赚钱",
            o.btnTheme = "assertive",
            t.title && (o.title = '<div class="assertive text-center">' + t.title + "</div>"),
            t.content && (o.message = t.content + '<div class="divider-20"></div><div class="assertive margin-bottom"><div class="width-32 text-right margin-top-3">+</div><div class="width-33 fs-40 ff-35 text-center">' + parseFloat(t.reward).toFixed(1) + '</div><div class="width-33 text-left margin-top-3">元</div></div><div class="divider-5"></div>'),
            o.hideIcon = !0;
            var a = e.alert(o);
            a.then(function() {
                3 == t.type && "qk.timedDetail" == i.current.name && (n.nextDirection("back"), _.delay(function() {
                    i.go("qk.timedList")
                },
                300)),
                4 == t.type && "qk.exclusiveDetail" == i.current.name && (n.nextDirection("back"), _.delay(function() {
                    i.go("qk.exclusiveList")
                },
                300)),
                6 == t.type && "qk.doubleDetail" == i.current.name && (n.nextDirection("back"), _.delay(function() {
                    i.go("qk.doubleList")
                },
                300))
            })
        },
        RONGYUKA: function(t) {
            var e = this;
            window.rongyuka_showed = !0,
            e._ionicPopup.show({
                cssClass: "popup-rongyuka-vip",
                buttons: [{
                    text: '<img src="//qianka.b0.upaiyun.com/images/ff0bef961952d0d462dd572ceceeab63.png" width="10" height="12">&nbsp;立即下载荣誉咖',
                    type: "button-assertive button-block",
                    onTap: function(e) {
                        e.preventDefault(),
                        window.open(t)
                    }
                }]
            })
        },
        OPEN_RONGYUKA: function() {
            function t() {
                var t = n._ionicPopup.show({
                    cssClass: "qk-open-rongyuka-guide",
                    template: e.rongyuka_find
                });
                setTimeout(function() {
                    var e = document.getElementById("btn-close-rongyuka-slide-box");
                    e.onclick = function() {
                        t.close()
                    }
                },
                i)
            }
            var n = this,
            i = 300;
            n._ionicPopup.show({
                cssClass: "popup-open-rongyuka",
                template: e.rongyuka_open
            }),
            setTimeout(function() {
                var e = document.getElementById("btn-open-rongyuka"),
                n = document.getElementById("btn-find-rongyuka");
                e.onclick = function() {
                    window.location.href = "com.HQmai.app://"
                },
                n.onclick = function() {
                    t()
                }
            },
            i)
        },
        RONGYUKA_WELCOME: function() {
            var t = this,
            e = "qk:biz:rongyuka_welcome_time",
            n = (new Date).getTime(); (!t._storage.get(e) || n - t._storage.get(e) > 864e5) && t.confirm({
                icon: t._img.get("RONGYUKA_WELCOME"),
                message: "荣誉咖将作为您唯一使用钱咖的方法<br>无需助手，建议删除激活助手",
                btnYesText: "知道了",
                btnNoText: "不再提示"
            }).then(function(n) {
                t._storage.set(e, n ? (new Date).getTime() : (new Date).getTime() + 31536e6)
            })
        },
        USER_EXPERIENCE_CENTER: function() {
            var t = this,
            e = "527960060";
            t.alert({
                title: "钱咖官方体验QQ群开放",
                message: "感谢您对钱咖的支持，钱咖现开放官方体验群，期待您的加入和建议能帮我们完善产品，名额有限，加满为止！",
                btnText: "一键复制QQ群：527960060"
            }).then(function() {
                t._http.get(window.QK_ENDPOINT + "keyServices/copy.string?value=" + encodeURIComponent(e)).then(function() {
                    t.confirm({
                        icon: t._img.get("QQ_ICON"),
                        title: "复制成功",
                        message: "已复制 QQ 号到剪切版<br>立即打开 QQ 加群",
                        btnYesText: "确定",
                        btnNoText: "取消"
                    }).then(function(t) {
                        if (t) {
                            var e = window.QK_SCHEME;
                            window.location.href = e + "://openApp?bid=" + encodeURIComponent("com.tencent.mqq")
                        }
                    })
                })
            })
        },
        DOUBLE_TASK_ONLINE: function() {
            var t = this,
            e = t._ionicViewSwitcher,
            n = t._state;
            t.alert({
                title: "任务双倍奖励开启！",
                message: "钱咖疯了！做一个任务拿双份奖金！<br />钱咖送钱送到腿软！<br />小伙伴抢钱抢到手软！",
                btnText: "立刻围观"
            }).then(function() {
                e.nextDirection("forward"),
                n.go("qk.doubleList")
            })
        },
        PLEASE_OPEN_NOTIFICATION: function() {
            var t = this,
            e = t._storage.get("qk:biz:key_notification_disable"),
            n = t._storage.get("qk:biz:key_notification_setting_clicked"),
            i = (new Date).getTime(),
            o = "激活助手";
            t._util.isRongyuka() && (o = "荣誉咖"),
            (!n || i - n > 6e4) && (!e || i - e > 864e5) && t.confirm({
                icon: t._img.get("NO_KEY_DETECTED"),
                title: "您尚未开启" + o + "推送",
                message: "开启" + o + "推送能提高30%任务完成速度，之后还可为您自动抢任务",
                btnYesText: "立即设置",
                btnNoText: "下次再说",
                btnTheme: "assertive"
            }).then(function(e) {
                e ? (window.location.href = "prefs://", t._storage.set("qk:biz:key_notification_setting_clicked", (new Date).getTime())) : t._storage.set("qk:biz:key_notification_disable", (new Date).getTime())
            })
        },
        alertMessages: function(t, e) {
            var n = this;
            if (e || (e = n._q.defer()), 0 == t.length) return void e.resolve();
            var i = t.pop(),
            o = {
                btnText: "知道了"
            };
            i.title && (o.title = i.title),
            i.content && (o.message = i.content),
            i.btn_text && (o.btnText = i.btn_text),
            n.alert(o).then(function() {
                n.alertMessages(t, e)
            })
        }
    })
}),
define("api/base.api", ["underscore", "common/base"],
function(t, e) {
    return e.extend({
        constructor: function(t) {
            this.q = t[0],
            this.storage = t[1],
            this.toast = t[2],
            this.dialog = t[3],
            this.rootScope = t[4],
            this.plist = t[5],
            this.state = t[6],
            this.http = t[7],
            this.ionicViewSwitcher = t[8],
            this.loading = t[9],
            this.util = t[10]
        },
        get: function(t) {
            return t.method = "GET",
            this.storage.set("qk:app:block_ajax_loading", !!window.rongyuka_showed),
            this.storage.set("qk:app:last_ajax_req", t),
            this.ajax(t)
        },
        post: function(t) {
            return t.method = "POST",
            this.storage.set("qk:app:block_ajax_loading", !!window.rongyuka_showed),
            this.storage.set("qk:app:last_ajax_req", t),
            this.ajax(t)
        },
        recall: function() {
            return req = this.storage.get("qk:app:last_ajax_req"),
            this.ajax(req)
        },
        ajax: function(e) {
            var n = this;
            if (!e.uri) throw "参数错误：req.uri Undefined!";
            var i = n.q,
            o = n.rootScope,
            a = n.loading,
            s = n.toast,
            r = n.dialog,
            c = n.storage,
            l = n.util,
            d = n.http,
            u = i.defer(),
            h = new XMLHttpRequest;
            if (o.$broadcast("xhrReadyStateChanged", {
                readyState: 2
            }), "POST" == e.method.toUpperCase()) h.open("POST", e.uri, !0);
            else {
                var p = "";
                e.params && t.each(e.params,
                function(t, e) {
                    p ? p += "&" + e + "=" + t: p = "?" + e + "=" + t
                }),
                h.open("GET", e.uri + p, !0)
            }
            if (h.onabort = function(t) {
                s.show("当前人数过多，请稍后重试")
            },
            h.onerror = function(e) {
                c.set("qk:app:block_ajax_loading", !0),
                a.hide(),
                d.get("/key/status").then(function(e) {
                    var n = e.data && e.data.payload;
                    return n && 1 == n.app_type && t.indexOf([2, 3], n.app_status) > -1 ? void r.NO_KEY_DETECTED_WITH_GUIDE(n && n.icon) : void r.NO_KEY_DETECTED(n && n.icon)
                },
                function() {})
            },
            h.onreadystatechange = function(e) {
                if (t.indexOf([2, 4], h.readyState) > -1 && o.$broadcast("xhrReadyStateChanged", {
                    readyState: h.readyState
                }), 4 == h.readyState) {
                    if (h.status < 200) return ! 1;
                    var i;
                    if (200 == h.status) {
                        i = angular.fromJson(h.responseText);
                        var a = i.is_rongyuka_user;
                        if (a && "web" == l.getAppContext()) return window.is_rongyuka_user = a,
                        void(1 == a ? r.RONGYUKA(i.rongyuka_download_url) : r.OPEN_RONGYUKA());
                        o.over_loading = i.over_loading || 0,
                        n.processMessages(i.messages),
                        u.resolve(i.payload)
                    } else {
                        i = {};
                        try {
                            i = angular.fromJson(h.responseText),
                            u.reject(i)
                        } catch(e) {} finally {
                            n.processApiError(h.status, i)
                        }
                    }
                }
            },
            "POST" == e.method.toUpperCase()) {
                h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var f = "";
                e.data && t.each(e.data,
                function(t, e) {
                    f ? f += "&" + e + "=" + t: f = e + "=" + t
                }),
                f ? h.send(f) : h.send()
            } else h.send();
            return setTimeout(function() {
                4 != h.readyState && h.abort()
            },
            2e4),
            u.promise
        },
        processApiError: function(e, n) {
            var i = this,
            o = i.storage,
            a = i.toast,
            s = i.dialog,
            r = "当前人数过多，请稍后重试",
            c = "服务不可用";
            o.set("qk:app:block_ajax_loading", !0);
            var l = n.error;
            400 == e ? -1 == t.indexOf([40099], l.code) && a.show(l && l.message || r) : 403 == e ? s.KEY_UPDATE_FORCE(l.message) : 404 == e ? a.show(c) : e >= 500 ? a.show(r) : window.location.reload()
        },
        processMessages: function(e) {
            var n = this,
            i = n.q,
            o = n.dialog,
            a = n.storage,
            s = t.find(e,
            function(t) {
                return 101 == t.type || 102 == t.type
            }),
            r = t.filter(e,
            function(t) {
                return 2 == t.type
            }),
            c = t.find(e,
            function(e) {
                return t.indexOf([3, 4, 5, 6, 300, 500], e.type) > -1
            }),
            l = t.filter(e,
            function(t, e) {
                return 1 == t.type || 200 == t.type
            });
            if (s) return void o.KEY_NEW_VERSION(s);
            var d = i.defer();
            o.alertMessages(r, d),
            d.promise.then(function() {
                a.set("qk:biz:qk_messages", l),
                c && (t.indexOf([3, 4, 5, 6], c.type) > -1 && o.REWARD_ALERT(c), 300 == c.type && o.USER_EXPERIENCE_CENTER(msg), 500 == c.type && _util.isRongyuka() && o.RONGYUKA_WELCOME(), 600 == c.type && o.DOUBLE_TASK_ONLINE())
            })
        }
    })
}),
define("api/qk.api", ["api/base.api"],
function(t) {
    return t.extend({
        constructor: function(t) {
            this.base(t)
        },
        post: function(t) {
            return this.base(t)
        },
        get: function(t) {
            return this.base(t)
        },
        ajax: function(t) {
            return this.base(t)
        },
        pubTasks: function() {
            var t = {
                uri: "/marketing/pubtasks"
            };
            return this.get(t)
        },
        dashboard: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/pages.dashboard"
            };
            return this.get(t)
        },
        getGift: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/users.sendGift"
            };
            return t && (e.data = {
                master_id: t
            }),
            this.post(e)
        },
        getReferredGift: function(t, e) {
            var n = {
                uri: window.QK_ENDPOINT + "services/gift.hongbao",
                data: {
                    mobile: t,
                    code: e
                }
            };
            return this.post(n)
        },
        timedList: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/subtasks.getList"
            };
            return this.get(t)
        },
        timedStart: function(t, e) {
            var n = {
                task_id: t
            };
            e && (n.card_type = e);
            var i = {
                uri: window.QK_ENDPOINT + "services/subtasks.start",
                data: n
            };
            return this.post(i)
        },
        timedDetail: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/subtasks.getInfo?task_id=" + t.taskId
            };
            return this.get(e)
        },
        abandonTimedTask: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/subtasks.giveup",
                data: {
                    task_id: t
                }
            };
            return this.post(e)
        },
        pushNotify: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/users.messages.push_notify"
            };
            return this.get(t)
        },
        timedState: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/subtasks.checkState?task_id=" + t
            };
            return this.get(e)
        },
        exclusiveList: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/zs_tasks.getList"
            };
            return this.get(t)
        },
        exclusiveDetail: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/zs_tasks.getInfo?zs_task_id=" + t.taskId
            };
            return this.get(e)
        },
        checkExclusiveStatus: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/zs_tasks.checkState?zs_task_id=" + t.taskId
            };
            return this.get(e)
        },
        startExclusiveTask: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/zs_tasks.start",
                data: {
                    zs_task_id: t
                }
            };
            return this.post(e)
        },
        abandonExclusiveTask: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/zs_tasks.giveup",
                data: {
                    zs_task_id: t
                }
            };
            return this.post(e)
        },
        copyKeyword: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "keyServices/copy.string?value=" + encodeURIComponent(t)
            };
            return this.get(e)
        },
        saveToAlbum: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "keyServices/saveImage?url=" + encodeURIComponent(t)
            };
            return this.get(e)
        },
        getAppInfo: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "keyServices/app.getInfo?bundle_id=" + t
            };
            return this.get(e)
        },
        shareTaskList: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/sharetasks.getList"
            };
            return this.get(t)
        },
        getInfo: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/users.apprentices.getInfo"
            };
            return this.get(t)
        },
        getList: function(t) {
            t || (t = {
                offset: 0,
                limit: 10
            });
            var e = {
                uri: window.QK_ENDPOINT + "services/users.apprentices.getList",
                params: t
            };
            return this.get(e)
        },
        other: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/pages.users.other"
            })
        },
        news: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/others.notices"
            })
        },
        integralAppeal: function(t, e, n, i, o) {
            var a = {
                uri: window.QK_ENDPOINT + "services/others.cs.subtask_problem",
                data: {
                    task_name: t,
                    task_date: e,
                    nick_name: n,
                    itunes_email: i,
                    image: encodeURIComponent(o)
                }
            };
            return this.post(a)
        },
        unfreezeInfo: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/others.cs.unfreeze.info"
            })
        },
        unfreezeValidate: function(t, e) {
            return this.post({
                uri: window.QK_ENDPOINT + "services/others.cs.unfreeze.validate",
                data: {
                    mobile: t,
                    code: e
                }
            })
        },
        unfreezeSubmit: function(t, e, n) {
            var i = {
                image1: t
            };
            return e && (i.image1 = e),
            n && (i.comment = n),
            this.post({
                uri: window.QK_ENDPOINT + "services/others.cs.unfreeze.submit",
                data: i
            })
        },
        shiftAccount: function(t, e) {
            var n = window.QK_ENDPOINT + "services/users.switch";
            return this.post({
                uri: n,
                data: {
                    mobile: t,
                    code: e
                }
            })
        },
        getTasks: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/newbie_tasks.getList"
            })
        },
        getShortcutURL: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/users.getShortcutURL"
            })
        },
        userInfo: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/users.getInfo"
            };
            return this.get(t)
        },
        fetchUpdateKeyUserInfoUrl: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/keys.fetchUpdateUserInfoUrl"
            };
            return this.get(t)
        },
        my: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/pages.my"
            };
            return this.get(t)
        },
        userAccountDetail: function(t) {
            var e = 0;
            t.offset && (e = t.offset);
            var n = t.active,
            i = t.limit,
            o = window.QK_ENDPOINT + "services/users.accounts.getDetail?active=" + n + "&offset=" + e + "&limit=" + i;
            return this.get({
                uri: o
            })
        },
        getUserProfile: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/users.profiles.getInfo"
            };
            return this.get(t)
        },
        saveUserProfile: function(t) {
            var e = window.QK_ENDPOINT + "services/users.profiles.setInfo";
            return this.post({
                uri: e,
                data: t
            })
        },
        bindMobile: function(t) {
            var e = window.QK_ENDPOINT + "services/users.profiles.bindMobile";
            return this.post({
                uri: e,
                data: t
            })
        },
        unbindWeixin: function() {
            var t = window.QK_ENDPOINT + "services/users.profiles.wxUnbind";
            return this.post({
                uri: t
            })
        },
        bindWeixin: function(t) {
            var e = window.QK_ENDPOINT + "services/users.profiles.wxBind";
            return this.post({
                uri: e,
                data: t
            })
        },
        getMasterInfo: function(t) {
            var e = window.WS_ENDPOINT + "marketing/shared/" + t + "?type=json";
            return this.get({
                uri: e
            })
        },
        copyKeywords: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "keyServices/copy.string?value=" + encodeURIComponent(t)
            };
            return this.get(e)
        },
        withdraw: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/pages.withdrawList"
            };
            return this.get(t)
        },
        withdrawToAlipay: function(t, e, n) {
            var i = {
                uri: window.QK_ENDPOINT + "services/users.withdraw.alipay",
                data: {
                    account: t,
                    real_name: e,
                    price: n
                }
            };
            return this.post(i)
        },
        withdrawToDuobao: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/users.withdraw.duobao",
                data: {
                    price: t
                }
            };
            return this.post(e)
        },
        withdrawToMobile: function(t, e) {
            var n = {
                uri: window.QK_ENDPOINT + "services/users.withdraw.mobile",
                data: {
                    mobile: t,
                    price: e
                }
            };
            return this.post(n)
        },
        withdrawToWechat: function(t, e) {
            var n = {
                uri: window.QK_ENDPOINT + "services/users.withdraw.wxpay",
                data: {
                    real_name: t,
                    price: e
                }
            };
            return this.post(n)
        },
        sendVerifyCode: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/verify_codes.send",
                data: {
                    phone: t
                }
            };
            return this.post(e)
        },
        doubleList: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/subtasks.getDoubleList"
            };
            return this.get(t)
        },
        doubleQuota: function() {
            var t = {
                uri: window.QK_ENDPOINT + "services/double.chanceList"
            };
            return this.get(t)
        },
        doubleUseQuota: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "services/double.fetchChance",
                data: {
                    chance_id: t
                }
            };
            return this.post(e)
        },
        transcript: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/pages.users.cjd"
            })
        },
        saveImageToAlbum: function(t) {
            var e = {
                uri: window.QK_ENDPOINT + "keyServices/saveImage",
                data: {
                    url: t
                }
            };
            return this.post(e)
        },
        getQiankaFanliBundleId: function() {
            return this.get({
                uri: window.QK_ENDPOINT + "services/double.getFanliBundleId"
            })
        },
        fanxianRushBuy: function(t) {
            return this.get({
                uri: window.QK_ENDPOINT + "services/fanxian.rushbuy?product_id=" + t
            })
        }
    })
}),
define("service/dispatcher", [],
function() {
    function t(t) {
        this.state = t[0],
        this.q = t[1],
        this.http = t[2],
        this.timeout = t[3],
        this.img = t[4],
        this.loading = t[5],
        this.dialog = t[6],
        this.storage = t[7],
        this.cookie = t[8],
        this.qkApi = t[9],
        this.ionicViewSwither = t[10],
        this.rootScope = t[11]
    }
    var e = 1,
    n = 1e3,
    i = {
        "qk.timedList": {
            version: 1,
            duration: 500
        },
        "qk.timedDetail": {
            version: 1,
            duration: 500
        },
        "qk.exclusiveDetail": {
            version: 1,
            duration: 500
        },
        "qk.userAccountDetail": {
            version: 1,
            duration: 30
        },
        "qk.doubleList": {
            version: 1,
            duration: 500
        },
        "qk.doubleDetail": {
            version: 1,
            duration: 500
        }
    };
    t.prototype.fetch = function(t, o) {
        function a(o) {
            var a = {
                payload: o,
                timestamp: (new Date).getTime()
            };
            _.extend(a, i[t] || {
                version: e,
                duration: n
            }),
            r.set("qk:route:" + t, a),
            c.resolve()
        }
        function s(t) {
            t.then(a)
        }
        var r = this.storage,
        c = this.q.defer();
        return "qk.pubTasks" == t && s(this.qkApi.pubTasks()),
        "qk.dashboard" == t && s(this.qkApi.dashboard()),
        "qk.userQrcode" == t && s(this.qkApi.userInfo()),
        "qk.my" == t && s(this.qkApi.my()),
        "qk.userProfile" == t && s(this.qkApi.getUserProfile()),
        "qk.userAccountDetail" == t && s(this.qkApi.userAccountDetail(o)),
        "qk.timedList" == t && s(this.qkApi.timedList()),
        "qk.timedDetail" == t && s(this.qkApi.timedDetail(o)),
        "qk.exclusiveList" == t && s(this.qkApi.exclusiveList()),
        "qk.exclusiveDetail" == t && s(this.qkApi.exclusiveDetail(o)),
        ("qk.prentice" == t || "qk.prenticeWechat" == t) && s(this.qkApi.getInfo()),
        "qk.prenticeList" == t && s(this.qkApi.getList(o)),
        "qk.share" == t && s(this.qkApi.shareTaskList()),
        "qk.novice" == t && s(this.qkApi.getTasks()),
        "qk.other" == t && s(this.qkApi.other()),
        "qk.news" == t && s(this.qkApi.news()),
        "qk.withdraw" == t && s(this.qkApi.withdraw()),
        _.indexOf(["qk.withdrawForm", "qk.withdrawMobile", "qk.withdrawWechat", "qk.withdrawDuobao", "qk.withdrawAlipay", "qk.withdrawWechatLarge"], t) > -1 && s(this.qkApi.withdraw()),
        "qk.unfreezeAccount" == t && s(this.qkApi.unfreezeInfo()),
        "qk.doubleList" == t && s(this.qkApi.doubleList()),
        "qk.doubleDetail" == t && s(this.qkApi.timedDetail(o)),
        "qk.doubleQuota" == t && s(this.qkApi.doubleQuota()),
        "qk.transcript" == t && s(this.qkApi.transcript()),
        c.promise
    },
    t.prototype.forward = function(t, o) {
        var a = this.state,
        s = this.q,
        r = this.storage,
        c = i[t],
        l = c ? c.version: e,
        d = c ? i.duration: n,
        u = r.get("qk:route:" + t),
        h = (new Date).getTime(),
        p = s.defer();
        if (u && u.version == l && h - u.timestamp < d) p.resolve(r.get("qk:route:" + t));
        else {
            var f = this.timeout,
            g = this.loading,
            v = this.fetch(t, o),
            m = !0;
            f(function() { ! m || r.get("qk:app:block_ajax_loading") || window.is_rongyuka_user || g.show("正在加载..", 2e4)
            },
            1500),
            v.then(function() {
                m && (m = !1, g.hide()),
                p.resolve(r.get("qk:route:" + t))
            })
        }
        p.promise.then(function() {
            a.go(t, o)
        })
    },
    t.prototype.reload = function(t) {
        var o = this.state,
        a = this.q,
        s = this.storage,
        r = o.current && o.current.name,
        c = i[r] || {
            version: e,
            duration: n
        },
        l = s.get("qk:route:" + r),
        d = (new Date).getTime(),
        u = a.defer(),
        h = !0;
        if (l ? (l.version != c.version && (h = !1), l.version == c.version && d - l.timestamp > c.duration && (h = !1)) : h = !1, h) u.resolve(s.get("qk:route:" + r));
        else {
            var p = this.timeout,
            f = this.loading,
            g = this.fetch(r, t),
            v = !0;
            p(function() { ! v || s.get("qk:app:block_ajax_loading") || window.is_rongyuka_user || f.show("正在刷新..", 2e4)
            },
            1500),
            g.then(function() {
                v && (v = !1, f.hide()),
                u.resolve(s.get("qk:route:" + r))
            })
        }
        return u.promise
    };
    var o = "services/users.getInfo",
    a = "qk.dashboard";
    return t.prototype.autoLogin = function(t) {
        var e = this,
        n = e.q,
        i = e.http,
        s = e.timeout,
        r = e.dialog,
        c = e.img,
        l = e.storage,
        d = e.cookie,
        u = e.ionicViewSwither,
        h = [];
        t && t.popups && (h = _.values(t.popups)),
        i.get(window.QK_ENDPOINT + o).success(function(t) {
            e.rootScope.dashboard_preventGuidePopup = !0;
            var i = t.payload;
            l.set("qk:biz:uid", i.uid),
            d.set("uid", i.uid);
            var o = i && i.app_scheme;
            o && l.set("qk:app:scheme", o);
            var p, f = n.defer();
            h && h.length > 0 ? _.each(h,
            function(t, e) {
                t && t.close(),
                e == h.length - 1 && _.delay(function() {
                    f.resolve()
                },
                500)
            }) : f.resolve(),
            f.promise.then(function() {
                p = r.alert({
                    icon: c.get("ALERT_OK"),
                    title: "正在自动登录...",
                    message: "系统已检测到激活助手<br>请保持激活助手打开状态，以免出错",
                    hideButton: !0
                }),
                p.then(function() {
                    s(function() {
                        u.nextDirection("forward"),
                        e.forward(a)
                    },
                    350)
                }),
                s(function() {
                    p.close()
                },
                1250)
            })
        }).error(function(n, i) {
            s(function() {
                e.autoLogin(t)
            },
            2e3)
        })
    },
    t.prototype.appLogin = function() {
        var t = this,
        e = t.http,
        n = t.storage,
        i = t.cookie,
        s = t.ionicViewSwither,
        r = t.dialog;
        e.get(window.QK_ENDPOINT + o).success(function(e) {
            var o = e.payload;
            n.set("qk:biz:uid", o.uid),
            i.set("uid", o.uid),
            s.nextDirection("forward"),
            t.forward(a)
        }).error(function(t, e) {
            r.alert({
                title: "验证用户身份失败",
                message: "请尝试重启应用",
                hideButton: !0,
                autoClose: 2e3
            })
        })
    },
    t
}),
define("service/file.upload", [],
function() {
    function t(t) {
        this.UPLOAD_URL = "http://qianka.com/services/assets.uploadImage",
        this.q = t[0]
    }
    return t.prototype.upload = function(t) {
        var e = this,
        n = /OS ((\d_\d)||(\d_\d_\d{1,2})) like Mac OS X/i,
        i = n.exec(window.navigator.userAgent);
        if (i && i[1] && ("8_0" == i[1] || "8_0_1" == i[1])) return window.alert("您当前的ios版本存在bug，这会导致上传文件失败，请升级iOS到其他稳定版本后重试"),
        !1;
        for (var o = e.q.defer(), a = o.promise, s = new FormData, r = 0; r < t.files.length; r++) s.append(r, t.files[r]);
        var c = new XMLHttpRequest,
        l = e.UPLOAD_URL;
        return c.open("POST", l, !0),
        c.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        c.onerror = function(t) {
            o.reject({
                error: "上传失败, 服务不可用"
            })
        },
        c.onreadystatechange = function() {
            if (200 == c.status && 4 == c.readyState) {
                var t = {
                    data: JSON.parse(c.responseText),
                    status: c.status
                };
                o.resolve(t)
            } else c.status >= 300 && o.reject({
                error: "上传失败, Status: " + c.status,
                status: c.status
            })
        },
        c.send(s),
        a.success = function(t) {
            return a.then(function(e) {
                t(e.data, e.status)
            }),
            a
        },
        a.error = function(t) {
            return a.then(null,
            function(e) {
                t(e.error, e.status)
            }),
            a
        },
        a
    },
    t
}),
define("service/native", [],
function() {
    function t(t, e) {
        var n = "";
        return _.each(e,
        function(t, e) {
            n += n ? "&" + e + "=" + encodeURIComponent(t) : "?" + e + "=" + encodeURIComponent(t)
        }),
        window.QK_ENDPOINT + t + n
    }
    function e(t) {
        this.$http = t[0],
        this.$q = t[1]
    }
    return e.prototype.openUrl = function(e) {
        var n = t("keyServices/open.url", e);
        return this.$http.get(n)
    },
    e.prototype.getAppInfo = function(e) {
        var n = t("keyServices/app.getInfo", {
            bundle_id: e
        });
        return this.$http.get(n)
    },
    e.prototype.newWebView = function(e, n, i, o, a) {
        var s = t("keyServices/subpage", {
            url: e,
            animate: a || 1,
            domID: n || "qkview",
            goBackKey: i || "link",
            bgColorKey: o || "bg-color"
        });
        return this.$http.get(s)
    },
    e.prototype.fanxianHome = function(e) {
        var n = t("keyServices/fx.home", e);
        return this.$http.get(n)
    },
    e.prototype.fanxianProductDetail = function(e) {
        var n = t("keyServices/fx.productDetail", e);
        return this.$http.get(n)
    },
    e.prototype.getNotificationSetting = function() {
        var e = t("keyServices/notification.enabled");
        return this.$http.get(e)
    },
    e.prototype.fxNewWebView = function(e) {
        var n = t("keyServices/fx.openUrl", {
            url: e
        });
        return this.$http.get(n)
    },
    e
}),
define("qk.services", ["common.services", "service/img", "service/plist", "service/loading", "service/biz.dialog", "api/qk.api", "service/dispatcher", "service/file.upload", "service/native"],
function(t, e, n, i, o, a, s, r, c) {
    return angular.module("qkServices", ["commonServices"]).factory("$img", [function() {
        return e
    }]).factory("$plist", ["$http", "$q",
    function(t, e) {
        return new n([t, e])
    }]).factory("$loading", ["$ionicLoading", "$timeout",
    function(t, e) {
        return new i([t, e], "Loading")
    }]).factory("$toast", ["$ionicLoading", "$timeout",
    function(t, e) {
        return new i([t, e], "Toast")
    }]).factory("$dialog", ["$ionicPopup", "$img", "$uuid", "$util", "$ionicViewSwitcher", "$state", "$http", "$storage", "$cookie", "$plist", "$q", "$rootScope",
    function(t, e, n, i, a, s, r, c, l, d, u, h) {
        return new o([t, e, n, i, a, s, r, c, l, d, u, h])
    }]).factory("$qkApi", ["$q", "$storage", "$toast", "$dialog", "$rootScope", "$plist", "$state", "$http", "$ionicViewSwitcher", "$loading", "$util",
    function(t, e, n, i, o, s, r, c, l, d, u) {
        return new a([t, e, n, i, o, s, r, c, l, d, u])
    }]).factory("$dispatcher", ["$state", "$q", "$http", "$timeout", "$img", "$loading", "$dialog", "$storage", "$cookie", "$qkApi", "$ionicViewSwitcher", "$rootScope",
    function(t, e, n, i, o, a, r, c, l, d, u, h) {
        return new s([t, e, n, i, o, a, r, c, l, d, u, h])
    }]).factory("$fileUpload", ["$q",
    function(t) {
        return new r([t])
    }]).factory("$native", ["$http", "$q",
    function(t, e) {
        return new c([t, e])
    }])
}),
define("qk.directives", ["templates/qk", "qk.services"],
function(t) {
    return angular.module("qkDirectives", ["qkServices"]).directive("qkFooter", ["$img",
    function(e) {
        return {
            restrict: "AE",
            scope: {
                footerType: "=footerType"
            },
            link: function(t, n) {
                "production" == t.footerType && (t.image = e.get("FOOTER_PRODUCTION")),
                "timedTask" == t.footerType && (t.image = e.get("FOOTER_TIMED_TASK")),
                "exclusiveTask" == t.footerType && (t.image = e.get("FOOTER_EXCLUSIVE_TASK")),
                "noviceTask" == t.footerType && (t.image = e.get("FOOTER_NOVICE_TASK")),
                "shareTask" == t.footerType && (t.image = e.get("FOOTER_SHARE_TASK"))
            },
            template: t.qk_footer
        }
    }]).directive("qkMessage", ["$storage", "$timeout", "$state", "$util",
    function(e, n, i, o) {
        function a(t, i, a) {
            function s() {
                n(function() {
                    c.length > 0 ? (0 == d && r(), s()) : t.hideMessage = !0
                },
                1e4)
            }
            function r() {
                return 0 == c.length ? !1 : (d = !0, t.message = c.pop(), t.keeyMessageTop = 0 == c.length && t.message.link, void n(function() {
                    t.showMessage = void 0 != t.message,
                    d = !1,
                    s()
                },
                150))
            }
            var c = e.get("qk:biz:qk_messages");
            if (!c) return ! 1;
            e.remove("qk:biz:qk_messages");
            var l = _.find(c,
            function(t, e) {
                return 100 == t.type
            }),
            d = !1;
            l || ("app" == o.getAppContext() && (c = _.filter(c,
            function(t) {
                return 200 != t.type
            })), c = _.sortBy(c, "type").reverse(), r(), t.close = function() {
                return t.hideMessage = !0,
                0 == c.length ? !1 : void n(function() {
                    t.hideMessage = !1,
                    t.showMessage = !1,
                    r()
                },
                250)
            },
            t.go = function(t) {
                window.location.href = t
            })
        }
        return {
            restrict: "AE",
            scope: {
                messages: "=messages"
            },
            link: a,
            template: t.qk_message
        }
    }]).directive("qkAjaxProgress", ["$rootScope", "$timeout",
    function(e, n) {
        function i(t, i, o) {
            e.$on("xhrReadyStateChanged",
            function(e, i) {
                t.readyState = i.readyState,
                4 == i.readyState && n(function() {
                    t.readyState = 0
                },
                1e3)
            })
        }
        return {
            restrict: "AE",
            link: i,
            template: t.qk_ajax_progress
        }
    }]).directive("qkWithdrawAmounts", ["$img",
    function(e) {
        function n(t, n, i) {
            t.cornerA = e.get("WITHDRAW_CORNER_A"),
            t.cornerB = e.get("WITHDRAW_CORNER_B"),
            t.cornerC = e.get("WITHDRAW_CORNER_C"),
            t.cornerD = e.get("WITHDRAW_CORNER_D"),
            t.cornerSelected = e.get("WITHDRAW_CORNER_SELECTED"),
            t.unselected = e.get("UNSELECTED"),
            t.selected = e.get("SELECTED"),
            t.pickAmount = function(e) {
                t.amountIndex = e
            }
        }
        return {
            restrict: "AE",
            scope: {
                amounts: "=amounts",
                amountIndex: "=amountIndex",
                type: "=type",
                balance: "=balance"
            },
            link: n,
            template: t.qk_withdraw_amounts
        }
    }])
}),
define("qk.controllers", ["qk.directives"],
function() {
    return angular.module("qkControllers", ["qkDirectives"])
}),
define("controller/dashboard", ["qk.controllers", "templates/qk"],
function(t, e) {
    function n(t, e) {
        t.autoLogin(e)
    }
    t.controller("WelcomeCtrl", ["$scope", "$qkApi", "$storage", "$rootScope", "$dispatcher", "$timeout", "$util", "$ionicViewSwitcher", "$state", "$img", "$dialog",
    function(t, e, n, i, o, a, s, r, c, l, d) {
        function u() {
            r.nextDirection("forward"),
            c.go("install")
        }
        function h() {
            g || (g = !0, o.appLogin(), a(function() {
                g = !1
            },
            1e3))
        }
        t.app_context = i.app_context;
        var p = function() {
            var t = {},
            e = location.href.split("?");
            if (e.length > 1) for (var n = e[1].split("&"), i = 0; i < n.length; i++) {
                var o = n[i].split("=");
                t[o[0]] = o[1]
            }
            return t
        } (),
        f = p.u;
        f && "0" != f && (t.showMasterInfo = !0, e.getMasterInfo(f).then(function(e) {
            t.master = e.master
        }), n.set("qk:biz:master_id", f)),
        t.install = function() {
            u()
        },
        t.whatIsQianka = function() {
            window.location.href = "/marketing/intro"
        };
        var g = !1;
        t.dashboard = h
    }]).controller("InstallActivatorCtrl", ["$scope", "$rootScope", "$ionicViewSwitcher", "$state", "$dialog", "$img", "$ionicPopup", "$q", "$timeout", "$dispatcher", "$util", "$plist", "$cookie", "$http",
    function(t, i, o, a, s, r, c, l, d, u, h, p, f, g) {
        t.appName = "",
        t.appIcon = "",
        t.step = 1,
        t.appid = f.get("appid"),
        t.is_ios_9 = h.isIOS9(),
        t.tpl = "normal",
        g.get("/key/status").then(function(e) {
            var i = e.data && e.data.payload;
            t.appType = i.app_type,
            t.appName = i.app_name,
            t.appIcon = i.app_icon,
            t.download_url = i.download_url,
            3 == i.app_type && t.is_ios_9 && (t.tpl = "ios9"),
            3 == t.appType && t.is_ios_9 ? n(u, t) : n(u)
        },
        function() {});
        var v = "50px";
        h.getScreenHeight() <= 480 && (v = "20px"),
        t.paddingTop = {
            "padding-top": v
        };
        var m, b;
        t.popups = {},
        t.downloadActivator = function() {
            if (3 == t.appType && t.is_ios_9) {
                if (i.dashboard_preventGuidePopup = !1, t.step >= 2) return ! 1;
                t.step = 2,
                m = s.alert({
                    icon: r.get("INSTALL_KEY_TIPS_ICON"),
                    title: "致 iOS 9 用户",
                    message: "钱咖是一款企业级应用，iOS 9 用户务必按照第二步进行设置才能进入钱咖",
                    btnText: "查看设置步骤"
                }),
                t.popups.guideTipsAlert = m,
                m.then(function() {
                    delete t.popups.guideTipsAlert;
                    var n = l.defer();
                    d(function() {
                        n.resolve()
                    },
                    400),
                    n.promise.then(function() {
                        i.dashboard_preventGuidePopup || (b = c.show({
                            cssClass: "install-key-guide-popup",
                            template: e.install_key_guide,
                            scope: t
                        }), t.popups.guidePopup = b)
                    })
                })
            } else t.step = 2;
            window.location.href = t.download_url
        },
        t.goToQA = function(t) {
            o.nextDirection("forward"),
            a.go("qk.qa", {
                page: 4
            })
        },
        t.showGuide = function() {
            t.step = 3,
            b = c.show({
                cssClass: "install-key-guide-popup",
                template: e.install_key_guide,
                scope: t
            }),
            t.popups.guidePopup = b
        },
        t.closeGuide = function() {
            b.close(),
            delete t.popups.guidePopup
        },
        t.goIOSSetting = function() {
            window.location.href = "prefs:root=General&path=ManagedConfigurationList"
        },
        t.$on("$destroy",
        function() {
            m && m.close(),
            b && b.close()
        })
    }]).controller("DashboardCtrl", ["$scope", "$state", "$timeout", "$img", "$dispatcher", "$ionicViewSwitcher", "$ionicPopup", "$ionicModal", "$qkApi", "$toast", "$storage", "$util", "$native", "$q", "$dialog", "$cookie",
    function(t, n, i, o, a, s, r, c, l, d, u, h, p, f, g, v) {
        function m(t) {
            var e = document.getElementsByClassName("income-balance"),
            n = "in" == t ? "addClass": "removeClass";
            angular.element(e[0])[n]("animated fadeIn")
        }
        function b(t) {
            u.set(L, {
                amount: t,
                date: h.dateFormat(new Date, "yyyy-MM-dd")
            })
        }
        function w() {
            var t = u.get(L),
            e = h.dateFormat(new Date, "yyyy-MM-dd");
            return t && t.date == e ? parseFloat(t.amount) : 0
        }
        function y() {
            return $ ? !1 : ($ = !0, m("out"), a.reload().then(function(e) {
                x(e),
                N(e.payload && parseFloat(e.payload.total_income)),
                D > 0 || 0 > D ? (i(function() {
                    t.today_income = w().toFixed(2),
                    m("in")
                },
                100), D != w() && i(function() {
                    k()
                },
                300)) : i(function() {
                    t.today_income = "竟然没有",
                    t.isNoIncomeToday = !0,
                    i(function() {
                        m("in")
                    },
                    100)
                },
                100),
                i(function() {
                    T()
                },
                500)
            }), void i(function() {
                $ = !1
            },
            1e3))
        }
        function k() {
            var e = w();
            D != e && b(D);
            var n = e,
            o = D,
            a = 15;
            n > o && (n = 0);
            var s = (o - n) / 100,
            r = setInterval(function() {
                return n >= o ? (clearInterval(r), t.today_income = parseFloat(D).toFixed(2), i(function() {
                    t.$digest()
                }), !1) : (n += s, t.today_income = n.toFixed(2), void i(function() {
                    t.$digest()
                }))
            },
            a)
        }
        function x(e) {
            var n = e && e.payload;
            D = n.today_income,
            n.today_income = w(),
            n.balance = parseFloat(n.balance).toFixed(2),
            n.total_income = parseFloat(n.total_income).toFixed(2),
            n.menus = _.filter(n.menus,
            function(t) {
                return "web" == h.getAppContext() || h.getAppVer() ? !0 : "zhuanfa" != t.id
            });
            var i = [{
                id: "xianshi",
                icon: o.get("MENU_XIANSHI"),
                link: "qk.timedList"
            },
            {
                id: "double",
                icon: o.get("MENU_DOUBLE"),
                link: "qk.doubleList"
            },
            {
                id: "zhuanshu",
                icon: o.get("MENU_ZHUANSHU"),
                link: "qk.exclusiveList"
            },
            {
                id: "shoutu",
                icon: o.get("MENU_SHOUTU"),
                link: "qk.prentice"
            },
            {
                id: "zhuanfa",
                icon: o.get("MENU_ZHUANFA"),
                link: "qk.share"
            },
            {
                id: "xinshou",
                icon: o.get("MENU_XINSHOU"),
                link: "qk.novice"
            },
            {
                id: "duobao",
                icon: o.get("MENU_DUOBAO"),
                link: ""
            },
            {
                id: "fanli",
                icon: o.get("MENU_FANLI"),
                link: "http://oss.fanlibang.com/h5_qianka_index.html?fanli_install="
            },
            {
                id: "fanxian",
                icon: o.get("MENU_FANXIAN"),
                link: ""
            }],
            a = [];
            _.each(n.menus,
            function(t, e) {
                var n = _.find(i,
                function(e) {
                    return e.id == t.id
                });
                t.icon = n.icon,
                "duobao" != t.id && "fanxian" != t.id && (t.link = n.link),
                a.push(t)
            });
            for (var s = 8 - a.length,
            r = 0; s > r; r++) a.push({});
            var c = n.zs_tag;
            c && 0 != c.qty && _.each(a,
            function(t) {
                "zhuanshu" == t.id && (t.tag = {
                    text: c.qty,
                    highlight: c.highlight
                })
            }),
            n.entrances = a,
            _.extend(t, n),
            u.set("qk:biz:uid", n.uid),
            v.set("uid", n.uid)
        }
        function T() {
            if (0 != t.gift.type) {
                var n, i = u.get("qk:biz:referred_code");
                if (i) n = 3;
                else if (n = 1, 1 == t.gift.type && "" != t.masterId) n = 2;
                else if (3 == t.gift.type) return void l.getGift().then(function(t) {
                    I(t)
                });
                return 2 == n ? void l.getGift(t.masterId).then(function(t) {
                    I(t)
                }) : void(t.giftPopup = r.show({
                    cssClass: "popup-gift",
                    template: 1 == n ? e.gift: 2 == n ? e.gift_master: e.gift_forward,
                    scope: t
                }))
            }
        }
        function E(n) {
            t.giftPopup && t.giftPopup.close(),
            i(function() {
                t.giftPopup = r.show({
                    cssClass: "popup-gift",
                    template: 1 == n ? e.gift: 2 == n ? e.gift_master: e.gift_forward,
                    scope: t
                })
            },
            300)
        }
        function I(n) {
            t.giftReward = n.reward,
            t.giftSuccessPopup = r.show({
                cssClass: "popup-gift",
                template: e.gift_success,
                scope: t
            }),
            t.giftSuccessPopup.then(function() {
                A(n)
            })
        }
        function C(e) {
            l.sendVerifyCode(e).then(function(e) {
                d.show(e.message),
                t.coldDown = M,
                S()
            })
        }
        function S() {
            return 0 == t.coldDown ? !1 : (t.coldDown--, void i(function() {
                S()
            },
            1e3))
        }
        function A(e) {
            t.today_income = parseFloat(e.today_income).toFixed(2),
            t.total_income = parseFloat(e.total_income).toFixed(2),
            t.balance = parseFloat(e.balance).toFixed(2),
            D = e.today_income.toFixed(2),
            parseFloat(D) > (parseFloat(u.get("qk:biz:today_income")) || 0) ? i(function() {
                k()
            },
            300) : i(function() {
                t.today_income = "竟然没有",
                t.isNoIncomeToday = !0
            },
            100)
        }
        function N(t) {
            u.set(q, {
                amount: t,
                date: h.dateFormat(new Date, "yyyy-MM-dd")
            })
        }
        var O = "qk:biz:user_activity",
        P = u.get(O);
        P || (P = []);
        var R = h.dateFormat(new Date, "yyyy-MM-dd"); - 1 == _.indexOf(P, R) && (P.length >= 10 && P.splice(0, 1), P.push(R), u.set(O, P));
        var D, L = "qk:biz:today_income",
        q = "qk:biz:total_income",
        $ = !1;
        t.isNoIncomeToday = !1,
        t.footerType = "production",
        t.avatar = o.get("DEFAULT_USER_AVATAR"),
        t.arrowRightRed = o.get("ARROW_RIGHT_RED"),
        t.withdrawCenterIcon = o.get("WITHDRAW_CENTER_ICON"),
        y(),
        t.refresh = function() {
            y()
        },
        t.go = function(t) {
            if (t.link) if ("duobao" == t.id)"web" == h.getAppContext() ? window.location.href = t.link: h.getAppVer() ? p.newWebView(t.link) : p.openUrl({
                url: t.link,
                type: "outside"
            });
            else if ("fanxian" == t.id)"web" == h.getAppContext() ? window.location.href = t.link: p.fanxianHome();
            else if ("fanli" == t.id) {
                var e = t.bundle_id,
                n = f.defer();
                p.getAppInfo(e).then(function(e) {
                    var i = e.data && e.data.payload;
                    return i && i.bundle_id ? void n.resolve(t.link + "1") : void n.resolve(t.link + "0")
                },
                function() {
                    n.resolve(t.link + "0")
                }),
                n.promise.then(function(t) {
                    "web" == h.getAppContext() ? window.location.href = t: h.getAppVer() ? p.newWebView(t) : p.openUrl({
                        url: t,
                        type: "outside"
                    })
                })
            } else s.nextDirection("forward"),
            a.forward(t.link)
        },
        t.transcript = function() {
            s.nextDirection("forward"),
            a.forward("qk.transcript", {
                from: 1
            })
        },
        t.novice = function() {
            s.nextDirection("forward"),
            a.forward("qk.novice")
        },
        t.giftIcon = o.get("GIFT_ICON"),
        t.giftSuccessIcon = o.get("GIFT_SUCCESS_ICON"),
        t.masterId = "",
        u.get("qk:biz:master_id") && (t.masterId = parseInt(u.get("qk:biz:master_id"))),
        t.switchGiftPopup = function(t) {
            E(t)
        },
        t.closeGiftPopup = function() {
            t.giftPopup && t.giftPopup.close()
        },
        t.getGift = function(e) {
            l.getGift(e).then(function(e) {
                t.giftPopup && t.giftPopup.close(),
                i(function() {
                    I(e)
                },
                300)
            },
            function(e) {
                t.giftPopup && t.giftPopup.close(),
                i(function() {
                    d.show(e.error && e.error.message)
                },
                300)
            })
        },
        t.closeGiftSuccessPopup = function() {
            t.giftSuccessPopup && t.giftSuccessPopup.close()
        },
        t.openAgreement = function() {
            t.giftPopup.close(),
            i(function() {
                c.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/agreement_modal.html", {
                    scope: t,
                    animation: "slide-in-up"
                }).then(function(e) {
                    t.agreementModal = e,
                    t.agreementModal.show()
                })
            },
            200)
        },
        t.closeAgreement = function() {
            t.agreementModal.hide(),
            i(function() {
                T()
            },
            150)
        },
        t.sendVerifyCode = function(t) {
            C(t)
        };
        var M = 59;
        t.coldDown = 0,
        t.getReferredGift = function(e, n) {
            l.getReferredGift(e, n).then(function(e) {
                t.giftPopup && t.giftPopup.close(),
                i(function() {
                    I(e)
                },
                300),
                u.remove("qk:biz:referred_code")
            },
            function(t) {
                var e = t.error;
                e && 40005 == e.code && u.remove("qk:biz:referred_code")
            })
        },
        t.$on("$destroy",
        function() {
            t.giftPopup && t.giftPopup.close(),
            t.giftSuccessPopup && t.giftSuccessPopup.close(),
            t.agreementModal && t.agreementModal.remove()
        })
    }]).controller("PubTasksCtrl", ["$scope", "$state", "$ionicViewSwitcher", "$dispatcher", "$img", "$dialog", "$util", "$cookie",
    function(t, e, n, i, o, a, s, r) {
        function c() {
            i.reload().then(function(e) {
                var n = e.payload;
                n.taskTotalReward = 0,
                n.comingTaskTotalReward = 0,
                _.each(n.tasks,
                function(t) {
                    var e = t.reward + t.zs_reward;
                    n.taskTotalReward += e,
                    t.reward = e.toFixed(2)
                }),
                n.taskTotalReward = n.taskTotalReward.toFixed(1),
                _.each(n.coming_tasks,
                function(t, e) {
                    var i = t.reward + t.zs_reward;
                    t.reward = i.toFixed(2),
                    n.comingTaskTotalReward += i;
                    var a = e % 5 + 1;
                    t.icon = o.get("TASK_NOTICE_ICON_" + a)
                }),
                n.comingTaskTotalReward = n.comingTaskTotalReward.toFixed(1),
                n.total_reward = l(n.total_reward),
                _.extend(t, n)
            })
        }
        function l(t) {
            var e = (t.toString().length - 1) / 3;
            e = parseInt(e) + 1;
            for (var n = "",
            i = parseInt(t), o = 0; e > o; o++) i = (i / 1e3).toFixed(3),
            divoth_str = i.toString(),
            i = parseInt(i),
            section = divoth_str.substring(divoth_str.indexOf(".") + 1),
            o == e - 1 && o > 0 ? (section = parseInt(section).toString(), n = section + "," + n) : n = o > 0 ? section + "," + n: section;
            return n
        }
        function d() {
            n.nextDirection("forward"),
            e.go("install")
        }
        t.back = function() {
            n.nextDirection("back"),
            e.go("welcome")
        },
        t.faceImg = o.get("OVER_LOADING_FACE"),
        c(),
        t.refresh = function() {
            c()
        },
        t.showTips = function() {
            a.alert({
                icon: o.get("INSTALL_KEY_MONEY"),
                message: "安装激活助手<br>立即开启赚钱之旅",
                btnText: "去下载（送现金红包）",
                btnTheme: "assertive"
            }).then(function() {
                d()
            })
        },
        t.install = function() {
            d()
        }
    }])
}),
define("controller/user", ["qk.controllers"],
function(t) {
    t.controller("UserMyCtrl", ["$scope", "$img", "$dispatcher", "$ionicViewSwitcher", "$util", "$native",
    function(t, e, n, i, o, a) {
        function s() {
            n.reload().then(function(e) {
                var n = e.payload;
                n.qiankabi.balance = parseFloat(n.qiankabi.balance).toFixed(2),
                n.duobao.duobaobi = parseInt(n.duobao.duobaobi),
                _.extend(t, n),
                r(t.profit_trend)
            })
        }
        function r(t) {
            var e = document.getElementById("line-chart").getContext("2d"),
            n = [];
            _.each(_.map(t, "label"),
            function(t) {
                var e = t.substr(5).split("-"),
                i = e[0],
                o = e[1],
                a = parseInt(i) + "." + parseInt(o);
                0 == n.length ? n.push("") : n.push(a)
            });
            var i = _.map(t, "value");
            i = _.map(i, parseFloat);
            var o = 2 * _.max(i) / 4,
            a = {
                labels: n,
                datasets: [{
                    label: _.map(t, "label"),
                    fillColor: "rgba(236,73,73,.1)",
                    strokeColor: "rgba(236,73,73,1)",
                    pointColor: "#fff",
                    pointStrokeColor: "#ec4949",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ec4949",
                    data: i
                }]
            },
            s = {
                scaleOverride: !0,
                scaleSteps: 4,
                scaleStepWidth: o,
                scaleStartValue: 0,
                scaleFontSize: 11,
                scaleFontColor: "#ccc",
                scaleLabel: '<%=""%>',
                bezierCurve: !1,
                pointDot: !1,
                pointDotRadius: 3,
                pointDotStrokeWidth: 2,
                pointHitDetectionRadius: 10,
                customTooltips: !1,
                tooltipFillColor: "rgba(236,73,73,1)",
                tooltipFontSize: 12,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipYPadding: 4,
                tooltipXPadding: 6,
                tooltipCaretSize: 4,
                tooltipCornerRadius: 2,
                tooltipXOffset: 10,
                tooltipTemplate: "<%= value %>元"
            },
            r = new Chart(e).Line(a, s);
            e.onclick = function(t) {
                r.getPointsAtEvent(t)
            }
        }
        t.showDuobaoEntrance = !0,
        t.back = function() {
            i.nextDirection("back"),
            n.forward("qk.dashboard")
        },
        t.footerType = "production",
        t.avatar = e.DEFAULT_USER_AVATAR,
        "web" == o.getAppContext() && (t.showDuobaoEntrance = !0),
        s(),
        t.refresh = function() {
            s()
        },
        t.go = function(t, e) {
            return "http" == t.substring(0, 4) ? void("web" == o.getAppContext() ? window.location.href = t: o.getAppVer() ? a.newWebView(t) : a.openUrl({
                url: t,
                type: "outside"
            })) : (i.nextDirection("forward"), void n.forward(t, e))
        }
    }]).controller("UserAccountDetailCtrl", ["$scope", "$dispatcher", "$img", "$timeout", "$ionicViewSwitcher", "$ionicScrollDelegate",
    function(t, e, n, i, o, a) {
        function s(n) {
            e.reload(n).then(function(e) {
                var o = e.payload,
                a = {
                    active: n.active,
                    details: o
                };
                _.extend(t, a),
                i(function() {
                    t.hasMoreData = o.length >= r
                },
                1e3)
            })
        }
        t.back = function() {
            o.nextDirection("back"),
            e.forward("qk.my")
        };
        var r = 40;
        t.active = 1,
        t.hasMoreData = !1,
        s({
            active: 1,
            limit: r
        }),
        t.refresh = function(t) {
            s(t)
        },
        t.tabClicked = function(t) {
            a.scrollTop(),
            s({
                active: t,
                limit: r,
                offset: 0
            })
        },
        t.loadMore = function() {
            var n = {
                active: t.active,
                offset: 0 == t.details.length ? 0 : _.last(t.details).id,
                limit: r
            };
            e.reload(n).then(function(e) {
                var n = e.payload;
                t.details = t.details.concat(n),
                t.$broadcast("scroll.infiniteScrollComplete"),
                i(function() {
                    t.hasMoreData = n.length >= r
                },
                1e3)
            })
        }
    }]).controller("UserQrcodeCtrl", ["$scope", "$dispatcher", "$img", "$qkApi", "$dialog", "$ionicActionSheet", "$util",
    function(t, e, n, i, o, a, s) {
        t.avatar = n.get("DEFAULT_USER_AVATAR"),
        t.copyKeywords = function(t) {
            t && i.copyKeywords(t).then(function(t) {
                o.alert({
                    icon: n.get("ALERT_OK"),
                    message: "复制网址成功",
                    btnText: "知道了"
                })
            })
        },
        e.reload().then(function(e) {
            var n = e.payload;
            n.qrcode = window.WS_ENDPOINT + "user/" + n.uid + "/qrcode.png",
            n.forward_url = window.WS_ENDPOINT + "shoutu?u=" + n.uid,
            _.extend(t, n)
        })
    }]).controller("UserProfileCtrl", ["$scope", "$fileUpload", "$img", "$toast", "$dispatcher", "$loading", "$qkApi", "$util", "$timeout", "$stateParams",
    function(t, e, n, i, o, a, s, r, c, l) {
        function d() {
            o.reload().then(function(e) {
                var n = e.payload;
                _.extend(t, n)
            })
        }
        var u = 0;
        t.backRoute = "qk.my",
        t.bindMobileRoute = "qk.userBindMobile",
        1 == l.from && (t.backRoute = "qk.novice", t.bindMobileRoute = "qk.userBindMobile({ from: 1 })", t.hideBottomLinks = !0),
        t.avatar_url = n.get("PHOTO");
        var h = document.getElementById("user-avatar");
        h.onchange = function() {
            a.show("上传中..", 31536e6),
            e.upload(h).success(function(e, n) {
                var o = e.payload.files[0],
                a = e.payload.uri_prefix;
                t.avatar = o.hash + "." + o.ext,
                t.avatar_url = a + "/" + o.hash + "." + o.ext,
                u = 1,
                i.show("上传成功")
            }).error(function(t, e) {
                i.show(t)
            })
        },
        t.gender = "",
        t.birthday = "";
        var p = document.getElementById("birthday");
        p.onchange = function() {
            "" != p.value ? t.birthday = r.dateFormat(new Date(p.value), "yyyy-MM-dd") : t.birthday = "",
            c(function() {
                t.$digest()
            })
        },
        t.careers = ["学生", "教师", "上班族", "老板", "公务员", "自由", "退休", "其他"],
        t.nickname = "",
        t.mobile_bind = 0,
        t.wx_bind = 0,
        d(),
        t.saveUserProfile = function(t, e, n, o, a) {
            var r = {
                nickname: t,
                avatar: e,
                gender: n,
                birthday: o,
                profession: a,
                avatar_updated: u
            };
            s.saveUserProfile(r).then(function(t) {
                i.show("保存成功"),
                c(function() {
                    d()
                },
                1500)
            })
        }
    }]).controller("BindMobileCtrl", ["$scope", "$qkApi", "$dialog", "$toast", "$img", "$ionicViewSwitcher", "$timeout", "$stateParams", "$dispatcher",
    function(t, e, n, i, o, a, s, r, c) {
        function l(n) {
            e.sendVerifyCode(n).then(function(e) {
                i.show(e.message),
                t.coldDown = h,
                d()
            })
        }
        function d() {
            return 0 == t.coldDown ? !1 : (t.coldDown--, void s(function() {
                d()
            },
            1e3))
        }
        function u(t, e) {
            var n = /^1[3456789]\d{9}$/;
            return n.test(t) ? "": "请输入正确的手机号"
        }
        t.backToFanxian = function() {
            var t = function() {
                var t = {},
                e = location.href.split("?");
                if (e.length > 1) for (var n = e[1].split("&"), i = 0; i < n.length; i++) {
                    var o = n[i].split("=");
                    t[o[0]] = o[1]
                }
                return t
            } ();
            window.location.href = decodeURIComponent(t.url)
        },
        t.backRoute = "qk.userProfile",
        1 == r.from && (t.backRoute = "qk.novice"),
        t.showCodeTips = function(e) {
            if (t.coldDown > 0) return ! 1;
            var a = /^1[3456789]\d{9}$/;
            return a.test(e) ? void n.alert({
                icon: o.get("SEND_CODE_TIPS_ICON"),
                message: "您将收到一条免费语音来电<br>内容为语音验证码",
                btnText: "知道了"
            }).then(function() {
                l(e)
            }) : (i.show("请输入正确的手机号"), !1)
        };
        var h = 59;
        t.coldDown = 0,
        t.bindMobile = function(t, r) {
            var l = u(t, r);
            "" == l ? e.bindMobile({
                mobile: t,
                code: r
            }).then(function(t) {
                var e = 1500;
                n.alert({
                    icon: o.get("BIND_MOBILE_SUCCESS"),
                    message: "绑定手机成功",
                    hideButton: !0,
                    autoClose: e
                }),
                s(function() {
                    a.nextDirection("back"),
                    c.forward("qk.userProfile")
                },
                e)
            }) : i.show(l)
        }
    }]).controller("BindWeixinCtrl", ["$scope", "$img", "$dialog", "$qkApi", "$stateParams", "$ionicViewSwitcher", "$dispatcher", "$state", "$ionicActionSheet", "$toast", "$util",
    function(t, e, n, i, o, a, s, r, c, l, d) {
        function u() {
            a.nextDirection("back"),
            s.forward(p)
        }
        var h = o.from,
        p = "qk.userProfile";
        1 == h || 2 == h ? p = "qk.withdraw": 3 == h ? p = "qk.withdrawMobile": 4 == h && (p = "qk.withdrawAlipay"),
        t.back = function() {
            u()
        },
        t.mpQrcode = e.get("MP_QRCODE"),
        t.blackArrowUp = e.get("BLACK_ARROW_UP"),
        t.bindWeixin = function(t) {
            var o = /^\d{6}$/;
            return o.test(t) ? void i.bindWeixin({
                code: t
            }).then(function() {
                n.alert({
                    icon: e.get("BIND_WEIXIN_SUCCESS"),
                    message: "绑定微信成功",
                    hideButton: !0,
                    autoClose: 1500
                }).then(function() {
                    1 == h ? (a.nextDirection("forward"), i.withdraw().then(function(t) {
                        t.wechat && 2 == t.wechat.is_enabled ? r.go("qk.withdraw") : r.go("qk.withdrawWechatActivation")
                    })) : u()
                })
            }) : void l.show("验证码不正确")
        };
        var f;
        t.showActionSheet = function() {
            f = c.show({
                buttons: [{
                    text: '<span class="font-16">好 的</span>'
                }],
                titleText: '<span class="font-16">保存我的二维码到相册</span>',
                cancelText: '<span class="font-16">一会再说</span>',
                cancel: function() {},
                buttonClicked: function(t) {
                    0 == t && i.saveToAlbum(e.get("MP_QRCODE")).then(function() {
                        n.alert({
                            icon: e.get("ALERT_OK"),
                            message: "保存图片成功",
                            btnText: "知道了"
                        })
                    }),
                    f()
                }
            })
        }
    }]).controller("UnbindWeixinCtrl", ["$scope", "$toast", "$qkApi", "$ionicHistory",
    function(t, e, n, i) {
        n.getUserProfile().then(function(e) {
            t.wx_nickname = e.wx_nickname
        }),
        t.unbindWeixin = function() {
            n.unbindWeixin().then(function() {
                e.show("解绑微信成功"),
                i.goBack( - 1)
            })
        }
    }])
}),
define("controller/task", ["qk.controllers", "templates/qk"],
function(t, e) {
    t.controller("TimedListCtrl", ["$scope", "$dispatcher", "$img", "$qkApi", "$ionicViewSwitcher", "$ionicModal", "$dialog", "$timeout", "$toast", "$loading", "$q", "$rootScope", "$util", "$native", "$storage", "$ionicPopup",
    function(t, n, i, o, a, s, r, c, l, d, u, h, p, f, g, v) {
        function m(t) {
            return t.replace(".00", "").replace(".10", ".1").replace(".20", ".2").replace(".30", ".3").replace(".40", ".4").replace(".50", ".5").replace(".60", ".6").replace(".70", ".7").replace(".80", ".8").replace(".90", ".9")
        }
        function b() {
            n.reload().then(function(e) {
                var n = e.payload;
                n.transcriptIcon = i.get("TASK_TRANSCRIPT"),
                n.transcriptMarker = i.get("TASK_TRANSCRIPT_MARKER");
                var a = 0;
                _.each(n.subtasks,
                function(t) {
                    if (1 == t.type || 4 == t.type) {
                        var e = t.reward + t.zs_reward;
                        t.total_reward = e.toFixed(2),
                        a += 4 == t.type ? e: 0
                    }
                }),
                n.comingTaskTotalReward = a.toFixed(1),
                n.availableSubTasks = _.filter(n.subtasks,
                function(t) {
                    return 1 == t.type && (1 == t.status && t.qty > 0 || 2 == t.status)
                }),
                n.prenticeTaskIcon = i.get("PRENTICE_TASK_ICON_NEW"),
                n.zeroQtySubTasks = _.filter(n.subtasks,
                function(t) {
                    return 1 == t.type && 1 == t.status && 0 == t.qty
                }),
                n.duobaoPromotions = _.filter(n.subtasks,
                function(t) {
                    return 100 == t.type
                }),
                n.duobaoCornerMarker = i.get("TASK_DUOBAO_QIANG"),
                n.fanliCornerMarker = i.get("TASK_FANGLIBANG_MAI"),
                t.duobaoLogo = i.get("TASK_DUOBAO_LOGO"),
                t.duobaoEnterCornerMarker = i.get("TASK_DUOBAO_ENTER_CORNER_MARKER"),
                t.duobaoEnterRewardTag = i.get("TASK_DUOBAO_ENTER_REWARD_TAG"),
                t.enterDuobao = function() {
                    o.getAppInfo("com.qk.qkduobao").then(function(t) {
                        t.bundle_id ? window.location.href = "comqkdbapp://": window.location.href = window.WS_ENDPOINT + "services/downloads.DUOBAO_DOWNLOAD_URL"
                    })
                },
                n.fanglibangPromotions = _.filter(n.subtasks,
                function(t) {
                    return 101 == t.type
                }),
                n.taskNotices = _.filter(n.subtasks,
                function(t) {
                    return 4 == t.type
                }),
                _.each(n.taskNotices,
                function(t, e) {
                    var n = e % 5 + 1;
                    t.icon = i.get("TASK_NOTICE_ICON_" + n)
                }),
                n.unavailableSubTasks = _.filter(n.subtasks,
                function(t) {
                    return 1 == t.type && (0 == t.status || 3 == t.status)
                }),
                n.hasTaskOnGoing = n.ongoing,
                _.each(n.fanxian,
                function(t, e) {
                    t.tags = t.tags.split(";"),
                    t.price = parseFloat(t.price),
                    t.rebate_amount = parseFloat(t.rebate_amount),
                    t.actual_price = t.price - t.rebate_amount,
                    t.actual_price_str = m(t.actual_price.toFixed(2)),
                    t.market_price = parseFloat(t.market_price),
                    t.malls = _.filter(t.malls,
                    function(t) {
                        return "QIANKA" != t.type && "MARKET" != t.type && "YHD" != t.type
                    }),
                    _.each(t.malls,
                    function(t) {
                        t.price = parseFloat(t.price)
                    })
                }),
                _.extend(t, n),
                t.fetched = !0,
                t.over_loading = h.over_loading,
                c(function() {
                    T()
                },
                1e3)
            })
        }
        function w(t, e) {
            var i = t.id;
            return e && d.show(e, 31536e6),
            P ? void(P = !1) : (O = !0, void o.timedStart(i).then(function(e) {
                if (O = !1, N++, 1 == e.type) 2 == N && (d.hide(), S = r.alert({
                    message: e.message,
                    btnText: "不等了，抢别的任务试试"
                }), S.then(function() {
                    P = !0
                })),
                c(function() {
                    w(t)
                },
                A);
                else if (2 == e.type) {
                    var o = u.defer();
                    o.promise.then(function() {
                        l.show("抢到任务，正在跳转.."),
                        c(function() {
                            a.nextDirection("forward"),
                            n.forward("qk.timedDetail", {
                                taskId: i
                            })
                        },
                        1e3)
                    });
                    var s = S ? 300 : 0;
                    S && S.close(),
                    c(function() {
                        o.resolve()
                    },
                    s)
                } else {
                    d.hide();
                    var s = S ? 300 : 0;
                    S && S.close(),
                    "没有剩余" == e.message && (t.qty = 0),
                    c(function() {
                        r.alert({
                            message: e.message,
                            hideButton: !0,
                            autoClose: !0
                        })
                    },
                    s)
                }
            }))
        }
        function y() {
            t.fanxianPopup = v.show({
                cssClass: "popup-fanxian",
                template: e.fanxian_popup,
                scope: t
            })
        }
        function k() {
            t.fanxianBuyPopup = v.show({
                cssClass: "popup-fanxian-buy",
                template: e.fanxian_buy_popup,
                scope: t
            }),
            x(3)
        }
        function x(e) {
            if (0 >= e) {
                var n = {
                    mall: t.fanxian_item.mall_code,
                    num_iid: t.fanxian_item.num_iid,
                    task_id: t.fanxian_item.task_id
                };
                return p.isRongyuka() || (n.back_safari = 1, n.back_safari_url = WS_ENDPOINT + "qk/dashboard"),
                f.fanxianProductDetail(n),
                void t.fanxianBuyPopup.close()
            }
            t.openFanxianPageCountDownText = "正在为您跳转..." + e--,
            c(function() {
                x(e)
            },
            1e3)
        }
        function T() {
            var e = document.getElementsByClassName("fanxian-item-time-label");
            _.each(e,
            function(e, n) {
                e.innerHTML = p.getTimeCountDown(p.strToDate(t.fanxian[n].end_time))
            }),
            _.delay(function() {
                T()
            },
            1e3)
        }
        var E = "qk:biz:user_activity",
        I = g.get(E);
        I || (I = []);
        var C = p.dateFormat(new Date, "yyyy-MM-dd"); - 1 == _.indexOf(I, C) && (I.length >= 10 && I.splice(0, 1), I.push(C), g.set(E, I)),
        t.footerType = "timedTask",
        t.fetched = !1,
        t.sandGlassImg = i.get("SAND_GLASS"),
        t.overLoadingFace = i.get("OVER_LOADING_FACE"),
        t.back = function() {
            a.nextDirection("back"),
            n.forward("qk.dashboard")
        },
        b(),
        t.refresh = function() {
            b()
        };
        var S, A = 2e3,
        N = 0,
        O = !1,
        P = !1;
        t.applyForTask = function(e) {
            if (A = 2e3, N = 0, O = !1, P = !1, 2 == e.status) return a.nextDirection("forward"),
            void n.forward("qk.timedDetail", {
                taskId: e.id
            });
            if (t.hasTaskOnGoing > 0) {
                var i = 1 == t.hasTaskOnGoing ? "不能同时抢多个任务哦！要放弃上个任务并接取该任务吗？": "你有一个双倍任务正在进行中！要放弃并接取该限时任务吗？";
                return void r.confirm({
                    message: i,
                    btnYesText: "确定",
                    btnNoText: "取消",
                    btnTheme: "positive"
                }).then(function(t) {
                    t && w(e, "拼命争抢任务中..")
                })
            }
            w(e, "拼命争抢任务中..")
        },
        t.showNoticeModal = function() {
            r.alert({
                icon: i.get("CLOCK_ICON"),
                message: "大咖别急<br>该任务还没有开始哦~",
                hideButton: !0,
                autoClose: 1500
            })
        },
        t.invite = function() {
            a.nextDirection("forward"),
            n.forward("qk.prentice", {
                from: 1
            })
        },
        t.transcript = function() {
            a.nextDirection("forward"),
            n.forward("qk.transcript", {
                from: 2
            })
        },
        t.openUrl = function(t, e) {
            var n = u.defer();
            e ? f.getAppInfo(e).then(function(e) {
                var i = e.data && e.data.payload;
                return i && i.bundle_id ? void n.resolve(t + "&fanli_install=1") : void n.resolve(t + "&fanli_install=0")
            },
            function() {
                n.resolve(t + "&fanli_install=0")
            }) : n.resolve(t),
            n.promise.then(function(t) {
                t && ("web" == p.getAppContext() ? window.location.href = t: p.getAppVer() ? f.newWebView(t) : f.openUrl({
                    url: t,
                    type: "outside"
                }))
            })
        },
        t.openFanxianPopup = function(e) {
            function n() {
                r.confirm2({
                    message: "该商品需要通过钱咖返现购买",
                    btnTheme: "assertive",
                    showClose: !0,
                    btnYesText: "立即下载"
                }).then(function(t) {
                    t && (window.location.href = "https://itunes.apple.com/cn/app/ka-gou-100yuan-yi-xia-bao/id1109287385?mt=8")
                })
            }
            if (t.fanxian_item = e, !t.fanxian_switcher) return void y();
            var i = "com.kagou.app";
            f.getAppInfo(i).then(function(t) {
                var i = t.data && t.data.payload;
                i && i.bundle_id ? o.fanxianRushBuy(e.id).then(function(t) {
                    window.location.href = t.kagou_url
                }) : n()
            },
            function() {
                n()
            })
        },
        t.closeFanxianPopup = function() {
            t.fanxianPopup.close()
        },
        t.buyFanxianItem = function(e) {
            0 != e.stock_residue && (d.show("抢购中..."), o.fanxianRushBuy(e.id).then(function(e) {
                d.hide(),
                t.fanxianPopup.close(),
                c(function() {
                    1 == e.rush_state ? (t.fanxian_item.task_id = e.task_id, t.fanxian_item.num_iid = e.num_iid, k()) : 2 == e.rush_state ? "web" == p.getAppContext() ? window.location.href = e.link: p.getAppVer() ? f.fxNewWebView(e.link) : f.openUrl({
                        url: e.link,
                        type: "outside"
                    }) : r.alert({
                        message: e.message || "商品已被抢光...",
                        hideButton: !0,
                        autoClose: !0
                    })
                },
                300)
            },
            function() {
                l.show("抢购失败"),
                t.fanxianPopup.close()
            }))
        },
        t.fanxianRuleModal = s.fromTemplate(e.fanxian_rule_modal, {
            scope: t,
            animation: "slide-in-up"
        }),
        t.showFanxianRule = function() {
            t.fanxianPopup.close(),
            c(function() {
                t.fanxianRuleModal.show()
            },
            300)
        },
        t.hideFanxianRule = function() {
            t.fanxianRuleModal.hide(),
            c(function() {
                y()
            },
            300)
        },
        t.$on("$destroy",
        function() {
            t.fanxianPopup && t.fanxianPopup.close(),
            t.fanxianBuyPopup && t.fanxianBuyPopup.close(),
            t.fanxianRuleModal && t.fanxianRuleModal.remove()
        })
    }]).controller("TimedDetailCtrl", ["$scope", "$state", "$stateParams", "$dispatcher", "$ionicViewSwitcher", "$qkApi", "$dialog", "$timeout", "$img", "$storage", "$http", "$util",
    function(t, e, n, i, o, a, s, r, c, l, d, u) {
        function h() {
            i.reload({
                taskId: v
            }).then(function(t) {
                var e = t.payload;
                return m = e.deadline,
                2 != e.status ? void(3 == e.status ? (o.nextDirection("back"), i.forward(w)) : s.alert({
                    message: "请先领取任务",
                    btnText: "返回任务列表"
                }).then(function() {
                    o.nextDirection("back"),
                    i.forward(w)
                })) : void p(e)
            })
        }
        function p(e) {
            e.exclusive_reward > 0 && (t.reward_tips = '任务总金额：<span class="num">' + e.reward.toFixed(2) + '</span>元限时 + <span class="num">' + e.exclusive_reward.toFixed(2) + '</span>元专属 = <span class="num">' + (parseFloat(e.reward) + parseFloat(e.exclusive_reward)).toFixed(2) + "</span>元"),
            e.reward = e.reward.toFixed(2);
            var n = "";
            e.exclusive_tasks.length > 0 && (n = '<div class="step exclusive">', _.each(e.exclusive_tasks,
            function(t) {
                n += t.desc + '</div><div class="step exclusive">'
            }), n += "</div>"),
            t.exclusive_tasks = n,
            t.task = e,
            t.startTaskButtonText = e.keyword ? "复制关键字：" + f(e.keyword, 16, !0) : "去 App Store 下载"
        }
        function f(t, e, n) {
            for (var i = 0,
            o = "",
            a = /[^\x00-\xff]/g,
            s = "",
            r = t.replace(a, "**").length, c = 0; r > c && (s = t.charAt(c).toString(), null != s.match(a) ? i += 2 : i++, !(i > e)); c++) o += s;
            return n && r > e && (o += "..."),
            o
        }
        function g() {
            var e = parseInt((new Date).getTime() / 1e3),
            n = m - e;
            if (n > 0) {
                var i = parseInt(n / 60),
                o = (100 + parseInt(n % 60) + "").substring(1);
                t.countDownText = '（剩余时间：<span class="time">' + i + ":" + o + "</span>）"
            }
            r(function() {
                g()
            },
            1e3)
        }
        t.footerType = "timedTask";
        var v = n.taskId,
        m = -1,
        b = e.current.name,
        w = "qk.timedList";
        t.viewTitle = "限时任务详情",
        "qk.doubleDetail" == b && (w = "qk.doubleList", t.viewTitle = "双倍任务详情"),
        a.pushNotify().then(function(t) {
            1 == t.status && s.PLEASE_OPEN_NOTIFICATION()
        }),
        t.startTaskButtonText = "",
        h(),
        d.get(window.QK_ENDPOINT + "keyServices/updateState.once"),
        t.refresh = function() {
            h()
        },
        t.copyKeyword = function(t) {
            return t.keyword ? void a.copyKeyword(t.keyword).then(function() {
                return 1 == l.get("qk:biz:show_copy_keyword_success_modal") ? void(window.location.href = t.app_url) : void s.confirm({
                    cssClass: "popup-copy-keyword-success",
                    hideIcon: !0,
                    message: '<img class="img-responsive" src="' + c.get("COPY_KEYWORD_SUCCESS") + '">',
                    btnYesText: "知道了",
                    btnNoText: "不再提示"
                }).then(function(e) {
                    e || l.set("qk:biz:show_copy_keyword_success_modal", 1),
                    window.location.href = t.app_url
                })
            }) : void(window.location.href = t.app_url)
        };
        var y = !1;
        t.checkTaskStatus = function() {
            y || (y = !0, d.get(window.QK_ENDPOINT + "keyServices/updateState.once"), a.timedState(v).then(function(t) {
                2 == t.status && s.alert({
                    title: "任务进行中",
                    message: "若无法完成，请手动重启" + ("web" == u.getAppContext() ? "钥匙": "应用") + "后提交",
                    btnText: "知道了"
                }),
                3 == t.status && (o.nextDirection("back"), i.forward(w))
            }), r(function() {
                y = !1
            },
            1e3))
        },
        t.abandonTask = function() {
            s.confirm({
                message: "确定要放弃当前任务？",
                btnYesText: "放弃任务",
                btnNoText: "取 消",
                btnTheme: "positive"
            }).then(function(t) {
                t && a.abandonTimedTask(v).then(function(t) {
                    o.nextDirection("back"),
                    i.forward(w)
                })
            })
        },
        t.countDownText = '（剩余时间：<span class="time">计算中..</span>）',
        g()
    }]).controller("ExclusiveListCtrl", ["$scope", "$img", "$dispatcher", "$ionicViewSwitcher",
    function(t, e, n, i) {
        function o() {
            n.reload().then(function(e) {
                var n = {};
                n.taskGroups = e.payload,
                _.each(n.taskGroups,
                function(t) {
                    _.each(t.zs_tasks,
                    function(t) {
                        t.money = t.money.toFixed(2)
                    })
                }),
                _.extend(t, n)
            })
        }
        t.footerType = "exclusiveTask",
        t.exclusiveIcon = e.get("EXCLUSIVE_GREY"),
        t.back = function() {
            i.nextDirection("back"),
            n.forward("qk.dashboard")
        },
        o(),
        t.refresh = function() {
            o()
        },
        t.goTaskDetail = function(t, e) {
            t || (i.nextDirection("forward"), n.forward("qk.exclusiveDetail", {
                taskId: e
            }))
        }
    }]).controller("ExclusiveDetailCtrl", ["$scope", "$dispatcher", "$stateParams", "$qkApi", "$toast", "$dialog", "$ionicViewSwitcher", "$timeout", "$http", "$util",
    function(t, e, n, i, o, a, s, r, c, l) {
        function d() {
            e.reload({
                taskId: u
            }).then(function(e) {
                var n = e.payload;
                t.taskDetail = n,
                t.btnStatus = 2 == n.status ? 1 : 0
            })
        }
        t.footerType = "exclusiveTask";
        var u = n.taskId;
        i.pushNotify().then(function(t) {
            1 == t.status && a.PLEASE_OPEN_NOTIFICATION()
        }),
        t.btnStatus = 0,
        d(),
        t.refresh = function() {
            d()
        },
        t.startTask = function() {
            return 1 == t.btnStatus ? !1 : (c.get(window.QK_ENDPOINT + "keyServices/updateState.once"), void i.startExclusiveTask(u).then(function(e) {
                o.show("成功开始任务"),
                t.btnStatus = 1,
                t.taskDetail.status = 2,
                i.getAppInfo(t.taskDetail.bundle_id).then(function(e) {
                    e.bundle_id ? window.location.href = t.taskDetail.open_app_url: window.location.href = t.taskDetail.appstore_url
                })
            }))
        };
        var h = !1;
        t.checkTaskStatus = function() {
            return 0 == t.btnStatus ? !1 : void(h || (h = !0, c.get(window.QK_ENDPOINT + "keyServices/updateState.once"), i.checkExclusiveStatus({
                taskId: u
            }).then(function(t) {
                var n = t;
                1 == n.status && (s.nextDirection("back"), e.forward("qk.exclusiveList")),
                2 == n.status && a.alert({
                    title: "任务进行中",
                    message: "若无法完成，请手动重启" + ("web" == l.getAppContext() ? "钥匙": "应用") + "后提交",
                    btnText: "知道了"
                }),
                (0 == n.status || 3 == n.status) && a.alert({
                    message: 0 == n.status ? "任务未开始": "任务已作废",
                    btnText: "返回任务列表"
                }).then(function() {
                    s.nextDirection("back"),
                    e.forward("qk.exclusiveList")
                })
            }), r(function() {
                h = !1
            },
            1e3)))
        },
        t.back = function() {
            return 2 != t.taskDetail.status ? (s.nextDirection("back"), void e.forward("qk.exclusiveList")) : void a.confirm({
                message: "确定要放弃当前任务？",
                btnYesText: "放弃任务",
                btnNoText: "取 消",
                btnTheme: "positive"
            }).then(function(t) {
                t && i.abandonExclusiveTask(u).then(function(t) {
                    s.nextDirection("back"),
                    e.forward("qk.exclusiveList")
                })
            })
        }
    }]).controller("ShareTaskCtrl", ["$scope", "$dispatcher", "$ionicViewSwitcher", "$http", "$util", "$native",
    function(t, e, n, i, o, a) {
        t.footerType = "shareTask",
        t.back = function() {
            n.nextDirection("back"),
            e.forward("qk.dashboard")
        },
        e.reload().then(function(e) {
            t.shareTaskList = e.payload.share_tasks
        }),
        t.share = function(t, e, n) {
            return i.get(window.QK_ENDPOINT + "services/sharetask.click?tid=" + e),
            "app" == o.getAppContext() ? void a.newWebView(n) : void(window.location.href = t)
        }
    }]).controller("DoubleListCtrl", ["$scope", "$dispatcher", "$img", "$qkApi", "$ionicViewSwitcher", "$dialog", "$timeout", "$toast", "$loading", "$q", "$state", "$native", "$rootScope", "$util",
    function(t, e, n, i, o, a, s, r, c, l, d, u, h, p) {
        function f() {
            e.reload().then(function(e) {
                var i = e.payload,
                o = 0;
                _.each(i.subtasks,
                function(t) {
                    if (1 == t.type || 4 == t.type) {
                        var e = t.reward + t.zs_reward;
                        t.total_reward = e.toFixed(2),
                        o += 4 == t.type ? e: 0
                    }
                }),
                i.comingTaskTotalReward = o.toFixed(1),
                i.availableSubTasks = _.filter(i.subtasks,
                function(t) {
                    return 1 == t.type && (1 == t.status && t.qty > 0 || 2 == t.status)
                }),
                i.zeroQtySubTasks = _.filter(i.subtasks,
                function(t) {
                    return 1 == t.type && 1 == t.status && 0 == t.qty
                }),
                i.taskNotices = _.filter(i.subtasks,
                function(t) {
                    return 4 == t.type
                }),
                _.each(i.taskNotices,
                function(t, e) {
                    var i = e % 5 + 1;
                    t.icon = n.get("TASK_NOTICE_ICON_" + i)
                }),
                i.unavailableSubTasks = _.filter(i.subtasks,
                function(t) {
                    return 1 == t.type && (0 == t.status || 3 == t.status)
                }),
                i.hasTaskOnGoing = i.ongoing,
                _.extend(t, i),
                t.fetched = !0
            })
        }
        function g(t, n) {
            var d = t.id;
            return n && c.show(n, 31536e6),
            k ? void(k = !1) : (y = !0, void i.timedStart(d, 1).then(function(n) {
                if (y = !1, w++, 1 == n.type) 2 == w && (c.hide(), m = a.alert({
                    message: n.message,
                    btnText: "不等了，抢别的任务试试"
                }), m.then(function() {
                    k = !0
                })),
                s(function() {
                    g(t)
                },
                b);
                else if (2 == n.type) {
                    var i = l.defer();
                    i.promise.then(function() {
                        r.show("抢到任务，正在跳转.."),
                        s(function() {
                            o.nextDirection("forward"),
                            e.forward("qk.doubleDetail", {
                                taskId: d
                            })
                        },
                        1e3)
                    });
                    var u = m ? 300 : 0;
                    m && m.close(),
                    s(function() {
                        i.resolve()
                    },
                    u)
                } else {
                    c.hide();
                    var u = m ? 300 : 0;
                    m && m.close(),
                    "没有剩余" == n.message && (t.qty = 0),
                    s(function() {
                        a.alert({
                            message: n.message,
                            hideButton: !0,
                            autoClose: !0
                        })
                    },
                    u)
                }
            }))
        }
        var v = "http://oss.fanlibang.com/h5_qianka_index.html?fanli_install=";
        t.footerType = "timedTask",
        t.fetched = !1,
        t.sandGlassImg = n.get("SAND_GLASS"),
        t.overLoadingFace = n.get("OVER_LOADING_FACE"),
        t.back = function() {
            o.nextDirection("back"),
            e.forward("qk.dashboard")
        },
        f(),
        t.refresh = function() {
            f()
        };
        var m, b = 2e3,
        w = 0,
        y = !1,
        k = !1;
        t.applyForTask = function(n) {
            if (0 == t.card_num) return t.chance_num ? (r.show("请使用双倍券后<br>领取双倍任务"), void s(function() {
                o.nextDirection("forward"),
                e.forward("qk.doubleQuota")
            },
            1500)) : void a.alert({
                title: "您暂无双倍任务次数",
                message: "通过首页的淘宝返利购买商品<br />且单笔订单大于10元并支付成功，<br />即送双倍任务奖励券!",
                btnText: "去逛逛"
            }).then(function() {
                u.getAppInfo(t.fanli_bundle_id).then(function(t) {
                    var e = t.data && t.data.payload,
                    n = v + (e.bundle_id ? "1": "0");
                    "web" == h.app_context ? window.location.href = n: p.getAppVer() ? u.newWebView(n) : u.openUrl({
                        url: n,
                        type: "outside"
                    })
                },
                function() {
                    "web" == h.app_context ? window.location.href = v + "0": p.getAppVer() ? u.newWebView(v + "0") : u.openUrl({
                        url: v + "0",
                        type: "outside"
                    })
                })
            });
            if (b = 2e3, w = 0, y = !1, k = !1, 2 == n.status) return o.nextDirection("forward"),
            void e.forward("qk.doubleDetail", {
                taskId: n.id
            });
            if (t.hasTaskOnGoing > 0) {
                var i = 2 == t.hasTaskOnGoing ? "不能同时抢多个任务哦！要放弃上个任务并接取该任务吗？": "你有一个限时任务正在进行中！要放弃并接取该双倍任务吗？";
                return void a.confirm({
                    message: i,
                    btnYesText: "确定",
                    btnNoText: "取消",
                    btnTheme: "positive"
                }).then(function(t) {
                    t && g(n, "拼命争抢任务中..")
                })
            }
            g(n, "拼命争抢任务中..")
        },
        t.showNoticeModal = function() {
            a.alert({
                icon: n.get("CLOCK_ICON"),
                message: "大咖别急<br>该任务还没有开始哦~",
                hideButton: !0,
                autoClose: 1500
            })
        },
        t.doubleQuota = function() {
            o.nextDirection("forward"),
            d.go("qk.doubleQuota")
        }
    }]).controller("DoubleQuotaCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$img", "$timeout", "$qkApi", "$toast", "$util", "$dialog", "$q", "$ionicModal", "$native",
    function(t, e, n, i, o, a, s, r, c, l, d, u) {
        function h() {
            n.reload().then(function(e) {
                var n = e.payload;
                _.each(n.chances,
                function(t) {
                    1 == t.type && (t.desc = " 返利购物满10元", t.time = t.pay_time, t.order_no = "订单号 " + t.order_number)
                }),
                n.quotas = n.chances,
                _.extend(t, n)
            })
        }
        t.fanliTicket = i.get("DOUBLE_TICKET_FANLI"),
        t.fanliTicketSmall = i.get("DOUBLE_TICKET_SMALL"),
        t.back = function() {
            e.nextDirection("back"),
            n.forward("qk.doubleList")
        },
        h(),
        t.refresh = function() {
            h()
        },
        t.useQuota = function(i, s) {
            a.doubleUseQuota(s).then(function(a) {
                t.quotas[i].animated = !0;
                var s = l.defer();
                _.each(t.quotas,
                function(t, e) {
                    e >= i && (t.animated = e == i ? 1 : 2)
                }),
                o(function() {
                    s.resolve()
                },
                600),
                s.promise.then(function() {
                    c.alert({
                        cssClass: "alert-double-success",
                        title: "<div>获得双倍任务次数</div>",
                        message: '<div class="divider-20"></div><div class="assertive margin-bottom"><div class="width-47 text-right margin-top-3">+</div><div class="width-52 right fs-40 ff-35 text-left">' + a.card_num + '</div></div><div class="divider-5"></div>',
                        btnText: "立即做任务",
                        btnTheme: "assertive",
                        hideIcon: !0
                    }).then(function() {
                        e.nextDirection("back"),
                        n.forward("qk.doubleList")
                    })
                })
            })
        },
        t.fanliIntroImg = i.get("FANLI_INTRO"),
        d.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/double_go_fanli_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.goFanliModal = e
        }),
        t.openGoFanliModal = function() {
            t.goFanliModal.show()
        },
        t.closeGoFanliModal = function() {
            t.goFanliModal.hide()
        },
        t.quotaTipsGuideImg = i.get("QUOTA_TIPS_GUIDE"),
        t.openQiankaFanli = function() {
            a.getQiankaFanliBundleId().then(function(t) {
                function e() {
                    var t = "http://itunes.apple.com/cn/app/id993121297";
                    "web" == r.getAppContext() ? (window.location.href = t, window.reload()) : u.openUrl({
                        url: t,
                        type: "outside"
                    })
                }
                var n = t.bundle_id;
                u.getAppInfo(n).then(function(t) {
                    var i = t.data && t.data.payload;
                    if (i && i.bundle_id) if ("web" == r.getAppContext()) window.location.href = n + "://";
                    else {
                        var o = window.QK_SCHEME;
                        window.location.href = o + "://openApp?bid=" + encodeURIComponent(n)
                    } else e()
                },
                function() {
                    e()
                })
            })
        },
        d.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/double_quota_tips_guide_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.doubleQuotaTipsGuideModal = e
        }),
        t.openDoubleQuotaTipsModal = function() {
            t.doubleQuotaTipsGuideModal.show()
        },
        t.closeDoubleQuotaTipsGuideModal = function() {
            t.doubleQuotaTipsGuideModal.hide()
        },
        t.$on("$destroy",
        function() {
            t.goFanliModal && t.goFanliModal.remove(),
            t.doubleQuotaTipsGuideModal && t.doubleQuotaTipsGuideModal.remove()
        }),
        t.cardNumTips = function() {
            c.alert("退货会扣除对应的双倍券<br>若当前可用双倍券为0，则进行预扣<br>此时双倍券显示为负数")
        }
    }]).controller("DoubleRuleCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$state",
    function(t, e, n, i) {
        t.back = function() {
            e.nextDirection("back"),
            i.go("qk.doubleQuota")
        }
    }])
}),
define("controller/withdraw", ["qk.controllers"],
function(t) {
    function e(t, e) {
        t[0].back = function() {
            t[1].nextDirection("back"),
            t[2].forward("qk.withdraw")
        },
        t[0].title = "mobile" == e ? "手机充值": "wechat" == e ? "微信提现": "duobao" == e ? "夺宝币兑换": "alipay" == e ? "支付宝提现": "大额提现（微信)",
        t[0].type = "duobao" == e ? "duobao": "wechat" == e ? "wechat": "mobile" == e ? "mobile": "alipay" == e ? "alipay": "wechat_large",
        t[0].balance = 0,
        t[0].amounts = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        t[0].amountIndex = 0,
        t[2].reload().then(function(n) {
            var i = n.payload,
            o = i[e];
            _.each(o.amounts,
            function(t) {
                var e = t[0] - t[1];
                t.push(((0 > e ? "加": "省") + (0 == e || e >= 1 ? e + "元": (10 * e).toPrecision(1) + "角")).replace("-", "")),
                t.push(e)
            }),
            t[0].amounts = o.amounts,
            t[0].balance = i.balance.toFixed(2),
            "duobao" == e && (t[0].duobaoUrl = o.link),
            "mobile" == e && o.mobile_number && (t[0].mobile = parseInt(o.mobile_number)),
            "alipay" == e && (t[0].alipayName = o.alipay_username, t[0].alipayAccount = o.alipay_account),
            "wechat" == e && (t[0].wechatName = o.wechat_real_name),
            "wechat_large" == e && (t[0].wechatName = o.wechat_real_name),
            t[0].payload = i
        })
    }
    t.controller("WithdrawCtrl", ["$scope", "$img", "$dispatcher", "$ionicViewSwitcher", "$state",
    function(t, e, n, i, o) {
        t.withdrawMobileIcon = e.get("WITHDRAW_MOBILE_ICON"),
        t.withdrawWeixinIcon = e.get("WITHDRAW_WEIXIN_ICON"),
        t.withdrawDuobaoIcon = e.get("WITHDRAW_DUOBAO_ICON"),
        t.withdrawAlipayIcon = e.get("WITHDRAW_ALIPAY_ICON"),
        t.withdrawLargeIcon = e.get("WITHDRAW_LARGE_ICON"),
        t.showAlipay = 1,
        t.showWechat = 1,
        t.showDuobao = 1,
        t.showMobile = 1,
        t.showLarge = 1;
        var a = 2;
        n.reload().then(function(e) {
            var n = e.payload;
            t.showAlipay = n.alipay.display,
            t.showWechat = n.wechat.display,
            t.showDuobao = n.duobao.display,
            t.showMobile = n.mobile.display,
            t.showLarge = n.wechat_large.display,
            a = n.wechat.is_enabled
        }),
        t.go = function(t) {
            if (i.nextDirection("forward"), "qk.withdrawMobile" == t && 0 == a) return void o.go("qk.userBindWeixin", {
                from: 2
            });
            if ("qk.withdrawAlipay" == t && 0 == a) return void o.go("qk.userBindWeixin", {
                from: 2
            });
            if ("qk.withdrawWechat" == t) {
                if (0 == a) return void o.go("qk.userBindWeixin", {
                    from: 1
                });
                if (1 == a) return void o.go("qk.withdrawWechatActivation")
            }
            if ("qk.withdrawWechatLarge" == t) {
                if (0 == a) return void o.go("qk.userBindWeixin", {
                    from: 1
                });
                if (1 == a) return void o.go("qk.withdrawWechatActivation")
            }
            n.forward(t)
        }
    }]).controller("WithdrawMobileCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$toast", "$dialog", "$img", "$state",
    function(t, n, i, o, a, s, r, c) {
        e([t, n, i], "mobile"),
        t.withdrawToMobile = function(e, i) {
            var l = /^1[3456789]\d{9}$/;
            if (!l.test(e)) return void a.show("请填写正确的手机号");
            var d = t.amounts[i][0];
            o.withdrawToMobile(e, d).then(function(t) {
                s.alert({
                    icon: r.get("WITHDRAW_SUCCESS_MOBILE"),
                    title: "充值提交成功！",
                    message: t.message,
                    hideButton: !0,
                    autoClose: 1500
                })
            },
            function(t) {
                var e = t.error;
                40099 == e.code && s.alert({
                    icon: r.get("PLEASE_BIND_WEIXIN"),
                    title: "绑定微信后才能提现哦！",
                    message: "已有1000000名用户成功绑定并提现",
                    btnText: "立即绑定"
                }).then(function() {
                    n.nextDirection("forward"),
                    c.go("qk.userBindWeixin", {
                        from: 3
                    })
                })
            })
        }
    }]).controller("WithdrawWechatCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$toast", "$dialog", "$img",
    function(t, n, i, o, a, s, r) {
        e([t, n, i], "wechat"),
        t.withdrawToWechat = function(e, n) {
            var i = t.amounts[n][0];
            o.withdrawToWechat(e, i).then(function(t) {
                s.alert({
                    icon: r.get("WITHDRAW_SUCCESS_WECHAT"),
                    title: "微信提现提交成功！",
                    message: t.message,
                    hideButton: !0,
                    autoClose: 1500
                })
            })
        }
    }]).controller("WithdrawWechatLargeCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$toast", "$dialog", "$img",
    function(t, n, i, o, a, s, r) {
        e([t, n, i], "wechat_large"),
        t.withdrawToWechatLarge = function(e, n) {
            var i = t.amounts[n][0];
            o.withdrawToWechat(e, i).then(function(t) {
                s.alert({
                    icon: r.get("WITHDRAW_SUCCESS_WECHAT"),
                    title: "微信提现提交成功！",
                    message: t.message,
                    hideButton: !0,
                    autoClose: 1500
                })
            })
        }
    }]).controller("WithdrawDuobaoCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$toast", "$dialog", "$img", "$util", "$native",
    function(t, n, i, o, a, s, r, c, l) {
        e([t, n, i], "duobao"),
        t.goDuobao = function() {
            "web" == c.getAppContext() ? window.location.href = t.duobaoUrl: c.getAppVer() ? l.newWebView(t.duobaoUrl) : l.openUrl({
                url: t.duobaoUrl,
                type: "outside"
            })
        },
        t.withdrawToDuobao = function(e) {
            var n = t.amounts[e][0];
            o.withdrawToDuobao(n).then(function(t) {
                s.alert({
                    icon: r.get("WITHDRAW_SUCCESS_DUOBAO"),
                    title: "充值提交成功！",
                    message: t.message,
                    hideButton: !0,
                    autoClose: 1500
                })
            })
        }
    }]).controller("WithdrawAlipayCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$toast", "$dialog", "$img", "$state",
    function(t, n, i, o, a, s, r, c) {
        e([t, n, i], "alipay"),
        t.goWechatPay = function() {
            var e = t.payload && t.payload.wechat && t.payload.wechat.is_enabled;
            return n.nextDirection("forward"),
            0 == e ? void c.go("qk.userBindWeixin", {
                from: 4
            }) : void i.forward("qk.withdrawWechat")
        },
        t.withdrawToAlipay = function(e, i, a) {
            var l = t.amounts[a][0];
            o.withdrawToAlipay(e, i, l).then(function(t) {
                s.alert({
                    icon: r.get("WITHDRAW_SUCCESS_ALIPAY"),
                    title: "支付宝提现提交成功！",
                    message: t.message,
                    hideButton: !0,
                    autoClose: 1500
                })
            },
            function(t) {
                var e = t.error;
                40099 == e.code && s.alert({
                    icon: r.get("PLEASE_BIND_WEIXIN"),
                    title: "绑定微信后才能提现哦！",
                    message: "已有1000000名用户成功绑定并提现",
                    btnText: "立即绑定"
                }).then(function() {
                    n.nextDirection("forward"),
                    c.go("qk.userBindWeixin", {
                        from: 1
                    })
                })
            })
        }
    }]).controller("WithdrawWechatActivationCtrl", ["$scope", "$img", "$dispatcher", "$ionicViewSwitcher", "$qkApi", "$timeout", "$state", "$stateParams",
    function(t, e, n, i, o, a, s, r) {
        function c() {
            l || o.withdraw().then(function(t) {
                t.wechat && 2 == t.wechat.is_enabled && (l = !0, i.nextDirection("back"), n.forward("qk.withdraw")),
                a(function() {
                    c()
                },
                1e3)
            })
        }
        r.from;
        t.alertIcon = e.get("DEFAULT_ALERT_ICON"),
        t.back = function() {
            i.nextDirection("back"),
            n.forward("qk.withdraw")
        },
        t.skipToWechat = function() {
            window.location.href = "weixin://"
        };
        var l = !1;
        c(),
        t.$on("$destroy",
        function() {
            l = !0
        })
    }])
}),
define("controller/novice", ["qk.controllers"],
function(t) {
    t.controller("NoviceCtrl", ["$scope", "$img", "$dispatcher", "$ionicViewSwitcher", "$util",
    function(t, e, n, i, o) {
        t.footerType = "noviceTask",
        t.profileRoute = "qk.userProfile",
        t.mobileRoute = "qk.userBindMobile",
        t.back = function() {
            i.nextDirection("back"),
            n.forward("qk.dashboard")
        },
        n.reload().then(function(n) {
            var i = n.payload;
            t.tasks = _.filter(i,
            function(t) {
                return t.price = t.price.toFixed(2),
                "Shortcut" == t.icon ? t.icon_url = e.get("NOVICE_SHORTCUT") : "Profile" == t.icon ? t.icon_url = e.get("NOVICE_PROFILE") : "Mobile" == t.icon && (t.icon_url = e.get("NOVICE_MOBILE")),
                "web" == o.getAppContext() ? !0 : "Shortcut" != t.icon
            })
        })
    }]).controller("NoviceShortcutCtrl", ["$scope", "$img", "$qkApi", "$ionicViewSwitcher", "$dispatcher",
    function(t, e, n, i, o) {
        t.footerType = "noviceTask",
        t.noviceShortcutIcon = e.get("NOVICE_SHORTCUT"),
        t.back = function() {
            i.nextDirection("back"),
            o.forward("qk.novice")
        },
        t.getShortCut = function() {
            n.getShortcutURL().then(function(t) {
                window.location.href = t.desktop_url
            })
        }
    }])
}),
define("controller/prentice", ["qk.controllers", "templates/qk"],
function(t, e) {
    t.controller("PrenticeCtrl", ["$scope", "$img", "$qkApi", "$timeout", "$dispatcher", "$ionicPopup", "$ionicModal", "$state", "$util", "$ionicViewSwitcher", "$stateParams", "$dialog", "$ionicActionSheet", "$native", "$toast", "$ionicScrollDelegate", "$ss",
    function(t, n, i, o, a, s, r, c, l, d, u, h, p, f, g, v, m) {
        function b() {
            t.shoutuPopup = s.show({
                cssClass: "popup-prentice",
                template: e.prentice_popup,
                scope: t
            })
        }
        var w = u.from;
        t.back = function() {
            var t = w ? "qk.timedList": "qk.dashboard";
            d.nextDirection("back"),
            a.forward(t)
        };
        var y = c.current.name,
        k = [0, 10, 30, 50, 100, 150, 250, 400, 600, 800, 1e3, 999999999],
        x = ["用“扫码收徒”给身边的朋友扫一扫", "亲口告诉亲朋好友“钱咖能赚钱”", "利用学习工作环境推荐给身边的人", "使用“分享收徒”转发给微信好友", "不要停，每个微信好友都发一遍", "转发到微信朋友圈，两天一次", "多加微信群，转发到微信群", "QQ好友、空间、微博都转发起来", "去热门的贴吧、论坛转发", "所有方法都用起来，冲刺！"];
        t.levelQuestionIcon = n.get("LEVEL_QUESTION"),
        t.levelAdviceText = n.get("LEVEL_ADVICE_TEXT"),
        t.currentLevelText = n.get("CURRENT_LEVEL_TEXT"),
        t.nextLevelText = n.get("NEXT_LEVEL_TEXT"),
        t.memberLevelText = n.get("MEMBER_LEVEL_TEXT"),
        t.todayPrenticeIncrementIcon = n.get("TODAY_PRENTICE_INCREMENT_ICON"),
        a.reload().then(function(e) {
            var i = e.payload;
            i.total_prentice_reward = i.prentice_reward.toFixed(1),
            i.today_summary = '今日收徒 <span class="assertive">' + i.today_increment + '</span> 名，合计奖励 <span class="assertive">' + i.today_reward + "</span> 元";
            for (var o = [], a = 0; 11 > a; a++) o.push({
                level: a,
                target: k[a],
                nextTarget: k[a + 1],
                tips: x[a] || "",
                img: n.get("LEVEL_" + a)
            });
            i.current_level = _.find(o,
            function(t) {
                return t.target <= i.prentice_reward && i.prentice_reward < t.nextTarget
            }),
            i.levels = _.filter(o,
            function(t) {
                return t.target > i.prentice_reward
            }),
            i.progressValue = {
                width: parseFloat(100 * i.prentice_reward / i.current_level.nextTarget).toFixed(1) + "%"
            },
            _.extend(i, i.transcript),
            i.total_income = i.total_income.toFixed(2),
            i.task_income_str = "<span class=num>" + i.task_income.toFixed(2) + "</span>元",
            i.apprentice_income_str = "<span class=num>" + i.apprentice_income.toFixed(2) + "</span>元",
            i.apprentice_num_str = "<span class=num>" + i.apprentice_num.toFixed(0) + "</span>人",
            _.extend(t, i),
            "qk.prenticeWechat" == y && b()
        }),
        t.prenticePopupIcon = n.get("PRENTICE_POPUP_ICON"),
        t.prenticeQrcodeIcon = n.get("PRENTICE_QRCODE_ICON"),
        t.prenticeLinkIcon = n.get("PRENTICE_LINK_ICON"),
        t.prenticetranscriptIcon = n.get("PRENTICE_TRANSCRIPT_ICON"),
        t.prenticeshareIcon = n.get("PRENTICE_SHARE_ICON"),
        t.prenticeqrcodebuttonIcon = n.get("PRENTICE_QRCODE_BUTTON_ICON"),
        t.prenticelinkbuttonIcon = n.get("PRENTICE_LINK_BUTTON_ICON"),
        t.transcriptmarkIcon = n.get("PRENTICE_MARK_ICON"),
        t.shoutu = function() {
            b()
        };
        var T;
        t.showActionSheet = function() {
            T = p.show({
                buttons: [{
                    text: '<span class="font-16">好 的</span>'
                }],
                titleText: '<span class="font-16">保存我的二维码到相册</span>',
                cancelText: '<span class="font-16">一会再说</span>',
                cancel: function() {},
                buttonClicked: function(e) {
                    0 == e && i.saveToAlbum(t.qrcode_url).then(function(t) {
                        h.alert({
                            icon: n.get("ALERT_OK"),
                            message: "保存图片成功",
                            btnText: "知道了"
                        })
                    }),
                    T()
                }
            })
        },
        t.copyKeywords = function(t) {
            t && i.copyKeyword(t).then(function(t) {
                var e = h.alert({
                    icon: n.get("ALERT_OK"),
                    message: "复制网址成功",
                    btnText: "知道了"
                });
                e.then(function() {})
            })
        },
        t.closePrenticePopup = function() {
            t.shoutuPopup.close()
        },
        r.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/prentice_transcript_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.prenticeTranscriptModal = e
        }),
        t.openShareAssistant = function() {
            if ("web" == l.getAppContext()) window.location.href = t.share_assistant_url;
            else {
                var e = l.getAppVer();
                if (e) return void(e >= "3.0.2016030301" ? f.newWebView(t.share_url, "qkview", "link", "bg-color", 2) : f.newWebView(t.share_url, "qkview", "link", "bg-color", 1));
                var n = t.share_assistant_url,
                i = function() {
                    var t = {},
                    e = n.split("?");
                    if (e.length > 1) for (var i = e[1].split("&"), o = 0; o < i.length; o++) {
                        var a = i[o].split("=");
                        t[a[0]] = a[1]
                    }
                    return t
                } ();
                window.location.href = decodeURIComponent(i.url) + "?show_header=1"
            }
        },
        r.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/prentice_qrcode_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.prenticeQrcodeModal = e
        }),
        r.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/prentice_link_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.prenticeLinkModal = e
        }),
        r.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/prentice_guide_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.prenticeGuideModal = e
        }),
        t.showPrenticeTranscript = function() {
            t.shoutuPopup.close(),
            o(function() {
                t.prenticeTranscriptModal.show()
            },
            200)
        },
        t.closePrenticeTranscript = function() {
            t.prenticeTranscriptModal.hide(),
            o(function() {
                b()
            },
            200)
        },
        t.showPrenticeQrcode = function() {
            t.shoutuPopup.close(),
            o(function() {
                t.prenticeQrcodeModal.show()
            },
            200)
        },
        t.closePrenticeQrcode = function() {
            t.prenticeQrcodeModal.hide(),
            o(function() {
                b()
            },
            200)
        },
        t.showPrenticeLink = function() {
            t.shoutuPopup.close(),
            o(function() {
                t.prenticeLinkModal.show()
            },
            200)
        },
        t.closePrenticeLink = function() {
            t.prenticeLinkModal.hide(),
            o(function() {
                b()
            },
            200)
        },
        t.showPrenticeGuide = function() {
            t.shoutuPopup.close(),
            o(function() {
                t.prenticeGuideModal.show()
            },
            200)
        },
        t.closePrenticeGuide = function() {
            t.prenticeGuideModal.hide(),
            o(function() {
                b()
            },
            200)
        },
        t.$on("$destroy",
        function() {
            var e = [t.shoutuPopup, t.prenticeTranscriptModal, t.prenticeLinkModal, t.prenticeQrcodeModal, t.prenticeGuideModal];
            _.each(e,
            function(t, e) {
                t && (0 == e ? t.close() : t.remove())
            })
        });
        var E = !1;
        t.getImageFromServer = function() {
            E || (E = !0, v.scrollTop(), o(function() {
                var t = document.getElementById("my-transcript"),
                e = window.screen.height <= 480 ? !0 : !1;
                if (e) {
                    var a = document.getElementById("ion-nav-bar"),
                    s = document.getElementById("ion-view");
                    a.style.display = "none",
                    s.style.top = "-45px",
                    s.style.height = "150%"
                }
                try {
                    m(t, {
                        width: 960,
                        height: 1290
                    }).then(function(t) {
                        function r() {
                            e && (a.style.display = "", s.style.top = "0px", s.style.height = "100%"),
                            o(function() {
                                E = !1
                            },
                            1e3)
                        }
                        var c = t.toDataURL("image/png");
                        i.saveImageToAlbum(encodeURIComponent(c)).then(function() {
                            r(),
                            h.confirm({
                                icon: n.get("PLEASE_BIND_WEIXIN"),
                                title: "分享到微信",
                                message: "图片已保存。请打开微信，从相册中选择图片进行分享。",
                                btnYesText: "确定",
                                btnNoText: "取消"
                            }).then(function(t) {
                                t && (window.location.href = "weixin://")
                            })
                        },
                        function() {
                            r()
                        })
                    })
                } catch(r) {
                    h.alert({
                        title: "保存图片失败",
                        message: "iOS版本过低，请更新至8.4以上"
                    }),
                    resetLock()
                }
            },
            300))
        },
        t.myPrenticeList = function() {
            d.nextDirection("forward"),
            a.forward("qk.prenticeList")
        }
    }]).controller("PrenticeListCtrl", ["$scope", "$dispatcher", "$ionicViewSwitcher", "$timeout",
    function(t, e, n, i) {
        t.tips = "太高冷了吧，一个徒弟都没有";
        var o = 10,
        a = 0;
        e.reload({
            offset: a,
            limit: o
        }).then(function(e) {
            var n = e.payload,
            s = _.last(n);
            a = s ? s.uid: 0,
            t.prentices = n,
            i(function() {
                t.hasMoreData = n.length >= o
            },
            1e3)
        }),
        t.loadMore = function() {
            e.reload({
                offset: a,
                limit: o
            }).then(function(e) {
                t.$broadcast("scroll.infiniteScrollComplete");
                var n = e.payload,
                s = _.last(n);
                a = s ? s.uid: 0,
                t.prentices = t.prentices.concat(n),
                i(function() {
                    t.hasMoreData = n.length >= o
                },
                1e3)
            })
        },
        t.back = function() {
            n.nextDirection("back"),
            e.forward("qk.prentice")
        }
    }]).controller("TranscriptCtrl", ["$scope", "$img", "$ionicViewSwitcher", "$dispatcher", "$qkApi", "$ss", "$ionicScrollDelegate", "$timeout", "$dialog", "$stateParams",
    function(t, e, n, i, o, a, s, r, c, l) {
        function d() {
            i.reload().then(function(e) {
                var n = e.payload;
                n.total_income = n.total_income.toFixed(2),
                n.task_income_str = "<span class=num>" + n.task_income.toFixed(2) + "</span>元",
                n.apprentice_income_str = "<span class=num>" + n.apprentice_income.toFixed(2) + "</span>元",
                n.apprentice_num_str = "<span class=num>" + n.apprentice_num.toFixed(0) + "</span>人",
                _.extend(t, n)
            })
        }
        t.rmbIcon = e.get("RMB_WHITE"),
        t.yuan = e.get("YUAN"),
        t.transcriptTitle = e.get("TRANSCRIPT_TITLE");
        var u = l.from;
        t.back = function() {
            n.nextDirection("back"),
            2 == u ? i.forward("qk.timedList") : i.forward("qk.dashboard")
        },
        d();
        var h = !1;
        t.getImageFromServer = function() {
            h || (h = !0, s.scrollTop(), r(function() {
                var t = document.getElementById("my-transcript"),
                n = window.screen.height <= 480 ? !0 : !1;
                if (n) {
                    var i = document.getElementById("ion-nav-bar"),
                    s = document.getElementById("ion-view");
                    i.style.display = "none",
                    s.style.top = "-45px",
                    s.style.height = "150%"
                }
                try {
                    a(t, {
                        width: 960,
                        height: 1290
                    }).then(function(t) {
                        function a() {
                            n && (i.style.display = "", s.style.top = "0px", s.style.height = "100%"),
                            r(function() {
                                h = !1
                            },
                            1e3)
                        }
                        var l = t.toDataURL("image/png");
                        o.saveImageToAlbum(encodeURIComponent(l)).then(function() {
                            a(),
                            c.confirm({
                                icon: e.get("PLEASE_BIND_WEIXIN"),
                                title: "分享到微信",
                                message: "图片已保存。请打开微信，从相册中选择图片进行分享。",
                                btnYesText: "确定",
                                btnNoText: "取消"
                            }).then(function(t) {
                                t && (window.location.href = "weixin://")
                            })
                        },
                        function() {
                            a()
                        })
                    })
                } catch(l) {
                    c.alert({
                        title: "保存图片失败",
                        message: "iOS版本过低，请更新至8.4以上"
                    }),
                    resetLock()
                }
            },
            300))
        }
    }])
}),
define("controller/other", ["qk.controllers"],
function(t) {
    t.controller("OtherCtrl", ["$scope", "$img", "$dispatcher", "$dialog", "$state", "$ionicViewSwitcher", "$util",
    function(t, e, n, i, o, a, s) {
        t.back = function() {
            a.nextDirection("back"),
            n.forward("qk.my")
        };
        var r = !1;
        n.reload().then(function(e) {
            var n = e.payload;
            t.hasNews = n.news,
            t.shortcut_url = n.desktop_url,
            r = n.new_key
        }),
        t.viewNews = function(t) {
            a.nextDirection("forward"),
            n.forward("qk.news")
        },
        t.showShortCutInstallLink = "web" == s.getAppContext(),
        t.getShortCut = function(t) {
            window.location.href = t
        },
        t.shiftAccount = function() {
            i.confirm({
                icon: e.get("SHIFT_ACCOUNT_ICON"),
                message: "切换账号后，现有未绑定手机的账号将被清空，真的要继续吗？"
            }).then(function(t) {
                t && (a.nextDirection("forward"), o.go("qk.shiftAccount"))
            })
        }
    }]).controller("CSCtrl", ["$scope", "$img",
    function(t, e) {}]).controller("QACtrl", ["$scope", "$stateParams", "$img", "$ionicViewSwitcher", "$state", "$ionicActionSheet", "$qkApi", "$dialog", "$util",
    function(t, e, n, i, o, a, s, r, c) {
        var l = e.page;
        t.title = 1 == l ? "常见问题": "微信客服",
        t.page = l,
        t.back = function() {
            return i.nextDirection("back"),
            3 == l ? void o.go("qk.unfreezeAccountStep", {
                step: 2
            }) : 4 == l ? void o.go("install") : void o.go("qk.cs")
        },
        t.mpQrcode = n.get("MP_QRCODE");
        var d;
        t.showActionSheet = function() {
            d = a.show({
                buttons: [{
                    text: '<span class="font-16">好 的</span>'
                }],
                titleText: '<span class="font-16">保存我的二维码到相册</span>',
                cancelText: '<span class="font-16">一会再说</span>',
                cancel: function() {},
                buttonClicked: function(t) {
                    0 == t && s.saveToAlbum(n.get("MP_QRCODE")).then(function() {
                        r.alert({
                            icon: n.get("ALERT_OK"),
                            message: "保存图片成功",
                            btnText: "知道了"
                        })
                    }),
                    d()
                }
            })
        }
    }]).controller("UnfreezeAccountCtrl", ["$scope", "$img", "$dispatcher",
    function(t, e, n) {
        t.accountNormalIcon = e.get("ACCOUNT_NORMAL"),
        t.accountFrozenIcon = e.get("ACCOUNT_FROZEN"),
        n.reload().then(function(e) {
            var n = e.payload;
            _.each(n.unfreeze_histories,
            function(t) {
                t.dateText = t.date.substr(0, 10),
                t.statusText = t.status > 0 ? t.status > 1 ? t.status > 2 ? "处理中": "失败": "成功": "未处理",
                t.reasonText = "失败原因：" + (t.reason || "请联系客服")
            }),
            _.extend(t, n)
        })
    }]).controller("UnfreezeAccountStepCtrl", ["$scope", "$ionicViewSwitcher", "$dispatcher", "$timeout", "$ionicModal", "$state", "$stateParams", "$img", "$qkApi", "$toast", "$fileUpload", "$loading", "$ionicSlideBoxDelegate", "$util", "$dialog",
    function(t, e, n, i, o, a, s, r, c, l, d, u, h, p, f) {
        function g(e) {
            t.step_1_icon = r.get("UNFREEZE_STEP_1"),
            t.step_2_icon = e > 1 ? r.get("UNFREEZE_STEP_2") : r.get("UNFREEZE_STEP_2_GREY"),
            t.step_3_icon = e > 2 ? r.get("UNFREEZE_STEP_3") : r.get("UNFREEZE_STEP_3_GREY"),
            t.step_gutter = r.get("UNFREEZE_STEP_GUTTER"),
            t.step = e,
            i(function() {
                t.$digest()
            })
        }
        function v(e) {
            c.sendVerifyCode(e).then(function(e) {
                l.show(e.message),
                t.coldDown = y,
                m()
            })
        }
        function m() {
            return 0 == t.coldDown ? !1 : (t.coldDown--, void i(function() {
                m()
            },
            1e3))
        }
        function b(t, e) {
            return 5 == e.length ? void l.show("最多上传5张图片") : (u.show("正在上传..", 31536e6), void d.upload(t).success(function(t, n) {
                var i = t.payload,
                o = i.uri_prefix,
                a = i.files[0];
                e.push({
                    url: o + "/" + a.hash + "." + a.ext,
                    style: a.width >= a.height ? x[0] : x[1]
                }),
                l.show("上传成功"),
                a.value = ""
            }).error(function(t, e) {
                l.show(t)
            }))
        }
        t.back = function() {
            e.nextDirection("back"),
            n.forward("qk.unfreezeAccount")
        };
        var w = s.step;
        g(w),
        t.showCodeTips = function(e) {
            if (t.coldDown > 0) return ! 1;
            var n = /^1[3456789]\d{9}$/;
            return n.test(e) ? void f.alert({
                icon: r.get("SEND_CODE_TIPS_ICON"),
                message: "您将收到一条免费语音来电<br>内容为语音验证码",
                btnText: "知道了"
            }).then(function() {
                v(e)
            }) : (l.show("请输入正确的手机号"), !1)
        };
        var y = 59;
        t.coldDown = 0,
        t.validate = function(t, n) {
            c.unfreezeValidate(t, n).then(function(t) {
                l.show(t.message),
                e.nextDirection("forward"),
                a.go("qk.unfreezeAccountStep", {
                    step: 2
                })
            })
        },
        t.imageList = [],
        t.imageList2 = [],
        i(function() {
            var e = document.getElementById("evidence");
            e.onchange = function() {
                b(this, t.imageList)
            };
            var n = document.getElementById("evidence-2");
            n.onchange = function() {
                b(this, t.imageList2)
            }
        },
        1e3);
        var k, x = [{
            width: "100%",
            height: "auto"
        },
        {
            width: "auto",
            height: p.getScreenHeight() - 114 + "px"
        }];
        o.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/gallery_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(t) {
            k = t
        });
        var T = 0;
        t.galleryTitle = "已上传图片",
        t.openGalley = function(e, n) {
            t.galleryImages = e,
            k.show(),
            T = 0,
            i(function() {
                var t = h.$getByHandle("gallery-slide-box");
                t.update(),
                i(function() {
                    t.slide(n)
                },
                50)
            },
            600)
        },
        t.closeGalley = function() {
            k.hide()
        },
        t.onSlideChanged = function(t) {
            T = t
        },
        t.deleteGalleryImage = function() {
            f.confirm({
                message: "确定删除该图片？",
                btnTheme: "assertive"
            }).then(function(e) {
                e && (t.galleryImages.splice(T, 1), i(function() {
                    var t = h.$getByHandle("gallery-slide-box");
                    t.update(),
                    i(function() {
                        t.slide(0)
                    },
                    50)
                },
                600))
            })
        };
        var E = "";
        t.commentChanged = function(t) {
            E = t
        },
        t.submit = function(t, n) {
            var i = "",
            o = "";
            return _.each(t,
            function(e, n) {
                i += n == t.length - 1 ? e.url: e.url + ";"
            }),
            _.each(n,
            function(t, e) {
                o += e == n.length - 1 ? t.url: t.url + ";"
            }),
            "" == i ? void l.show("请先上传截图") : void c.unfreezeSubmit(i, o, E).then(function(t) {
                l.show(t.message),
                e.nextDirection("forward"),
                a.go("qk.unfreezeAccountStep", {
                    step: 3
                })
            })
        };
        var I;
        o.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/other_integral_example_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(t) {
            I = t
        }),
        t.showSampleModal = function(e) {
            "purchased" == e ? (t.modalTitle = "样张 - 已购", t.modalImg = r.get("SAMPLE_PURCHASED")) : (t.modalTitle = "样张 - 收据", t.modalImg = r.get("SAMPLE_RECEIPT")),
            I.show()
        },
        t.closeModal = function() {
            I.hide()
        },
        t.$on("$destroy",
        function() {
            k.remove(),
            I && I.hide()
        }),
        t.unfreezeWaitingIcon = r.get("UNFREEZE_WAITING")
    }]).controller("IntegralCtrl", ["$scope", "$img",
    function(t, e) {}]).controller("IntegralSubtaskCtrl", ["$scope", "$img", "$ionicModal", "$fileUpload", "$loading", "$toast", "$qkApi", "$storage", "$util", "$timeout", "$ionicViewSwitcher", "$state",
    function(t, e, n, i, o, a, s, r, c, l, d, u) {
        function h() {
            t.uid = r.get("qk:biz:uid"),
            t.task_name = "",
            t.task_date = c.dateFormat(new Date, "yyyy-MM-dd"),
            t.nick_name = "",
            t.itunes_email = "",
            t.image_url = ""
        }
        function p(t, e, n, i, o) {
            return t ? e ? n ? i ? o ? void 0 : "请先上传图片": "iTunes Email 不能为空": "iTunes 账号姓名不能为空": "任务日期不能位空": "任务名称不能为空"
        }
        h(),
        t.updateTaskDate = function(e) {
            t.task_date = c.dateFormat(e, "yyyy-MM-dd")
        },
        n.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/other_integral_example_modal.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(e) {
            t.modal = e
        }),
        t.showModal = function(n) {
            "mobile" == n ? (t.modalTitle = "样张 - 手机版", t.modalImg = e.get("INTEGRAL_SAMPLE_MOBILE")) : (t.modalTitle = "样张 - 电脑版", t.modalImg = e.get("INTEGRAL_SAMPLE_PC")),
            t.modal.show()
        },
        t.closeModal = function() {
            t.modal.hide()
        };
        var f = document.getElementById("attachment");
        f.onchange = function() {
            o.show("正在上传..", 31536e6),
            i.upload(f).success(function(e, n) {
                var i = e.payload,
                o = i.uri_prefix,
                s = i.files[0];
                t.image_url = o + "/" + s.hash + "." + s.ext,
                a.show("上传成功"),
                f.value = ""
            }).error(function(t, e) {
                a.show(t)
            })
        };
        var g;
        n.fromTemplateUrl("diadem/view-1.0.0-dev-76b4a98/img_viewer.html", {
            scope: t,
            animation: "slide-in-up"
        }).then(function(t) {
            g = t
        }),
        t.viewImage = function(e) {
            t.image_url = e,
            g.show()
        },
        t.closeImageViewer = function() {
            g.hide()
        },
        t.deleteImageInViewer = function() {
            g.hide(),
            t.image_url = ""
        },
        t.submit = function(t, e, n, i, o) {
            var r = p(t, e, n, i, o);
            return r ? void a.show(r) : void s.integralAppeal(t, e, n, i, o).then(function(t) {
                a.show("提交成功！"),
                l(function() {
                    d.nextDirection("back"),
                    u.go("qk.integral")
                },
                1500)
            })
        },
        t.$on("$destroy",
        function() {
            t.modal && t.modal.hide(),
            g && g.hide()
        })
    }]).controller("NewsCtrl", ["$scope", "$dispatcher", "$ionicViewSwitcher",
    function(t, e, n) {
        t.back = function() {
            n.nextDirection("back"),
            e.forward("qk.other")
        },
        e.reload().then(function(e) {
            t.news = e.payload
        })
    }]).controller("ShiftAccountCtrl", ["$scope", "$dispatcher", "$ionicViewSwitcher", "$toast", "$dialog", "$timeout", "$img", "$qkApi", "$storage",
    function(t, e, n, i, o, a, s, r, c) {
        function l(e) {
            r.sendVerifyCode(e).then(function(e) {
                i.show(e.message),
                t.coldDown = h,
                d()
            })
        }
        function d() {
            return 0 == t.coldDown ? !1 : (t.coldDown--, void a(function() {
                d()
            },
            1e3))
        }
        function u(t, e) {
            var n = /^1[3456789]\d{9}$/;
            return n.test(t) ? "": "请输入正确的手机号"
        }
        t.back = function() {
            n.nextDirection("back"),
            e.forward("qk.other")
        },
        t.showCodeTips = function(e) {
            if (t.coldDown > 0) return ! 1;
            var n = /^1[3456789]\d{9}$/;
            return n.test(e) ? void o.alert({
                icon: s.get("SEND_CODE_TIPS_ICON"),
                message: "您将收到一条免费语音来电<br>内容为语音验证码",
                btnText: "知道了"
            }).then(function() {
                l(e)
            }) : (i.show("请输入正确的手机号"), !1)
        };
        var h = 59;
        t.coldDown = 0,
        t.doShift = function(t, o) {
            var a = u(t, o);
            "" == a ? (r.fetchUpdateKeyUserInfoUrl().then(function(t) {
                url = t,
                r.get({
                    uri: url
                }).then(function(t) {})
            }), r.shiftAccount(t, o).then(function(t) {
                i.show(t.message),
                n.nextDirection("forward"),
                e.forward("qk.dashboard"),
                c.clear()
            })) : i.show(a)
        }
    }])
}),
define("qk.app", ["templates/qk", "controller/dashboard", "controller/user", "controller/task", "controller/withdraw", "controller/novice", "controller/prentice", "controller/other"],
function(t) {
    var e = "diadem/view-1.0.0-dev-76b4a98/",
    n = angular.module("qkApp", ["qkControllers"]);
    return n.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", "$ionicConfigProvider", "$compileProvider", "$sceDelegateProvider",
    function(n, i, o, a, s, r, c) {
        n.decorator("views",
        function(t, n) {
            var i = {},
            o = n(t);
            return _.each(o,
            function(t, n) {
                t.templateName && (t.templateUrl = function() {
                    return e + t.templateName + ".html"
                }),
                i[n] = t
            }),
            i
        }).state("welcome", {
            url: "/welcome",
            controller: "WelcomeCtrl",
            template: t.welcome
        }).state("install", {
            url: "/install",
            controller: "InstallActivatorCtrl",
            template: t.install_activator
        }).state("qk", {
            url: "/qk",
            "abstract": !0,
            template: t.qk
        }).state("qk.pubTasks", {
            url: "/pubTasks",
            controller: "PubTasksCtrl",
            templateName: "pub_task_list"
        }).state("qk.dashboard", {
            url: "/dashboard",
            controller: "DashboardCtrl",
            template: t.dashboard
        }).state("qk.my", {
            url: "/user/my",
            controller: "UserMyCtrl",
            templateName: "user_my"
        }).state("qk.userAccountDetail", {
            url: "/user/accountDetail",
            controller: "UserAccountDetailCtrl",
            templateName: "user_account_detail"
        }).state("qk.userProfile", {
            url: "/user/profile/{from}",
            controller: "UserProfileCtrl",
            templateName: "user_profile"
        }).state("qk.userBindMobile", {
            url: "/user/bindMobile/{from}",
            controller: "BindMobileCtrl",
            templateName: "user_bind_mobile"
        }).state("qk.fxUserBindMobile", {
            url: "/user/fxBindMobile",
            controller: "BindMobileCtrl",
            templateName: "user_bind_mobile_fanxian"
        }).state("qk.userBindWeixin", {
            url: "/user/bindWexin/{from}",
            controller: "BindWeixinCtrl",
            templateName: "user_bind_weixin"
        }).state("qk.userUnbindWeixin", {
            url: "/user/unbindWexin",
            controller: "UnbindWeixinCtrl",
            templateName: "user_unbind_weixin"
        }).state("qk.userQrcode", {
            url: "/user/qrcode",
            controller: "UserQrcodeCtrl",
            templateName: "user_qrcode"
        }).state("qk.timedList", {
            url: "/task/timedList",
            controller: "TimedListCtrl",
            template: t.task_timed_list
        }).state("qk.timedDetail", {
            url: "/task/timedDetail/{taskId}",
            controller: "TimedDetailCtrl",
            template: t.task_timed_detail
        }).state("qk.doubleList", {
            url: "/task/doubleList",
            controller: "DoubleListCtrl",
            template: t.task_double_list
        }).state("qk.doubleDetail", {
            url: "/task/doubleDetail/{taskId}",
            controller: "TimedDetailCtrl",
            template: t.task_timed_detail
        }).state("qk.doubleQuota", {
            url: "/doubleQuota",
            controller: "DoubleQuotaCtrl",
            templateName: "double_quota"
        }).state("qk.doubleRule", {
            url: "/doubleRule",
            controller: "DoubleRuleCtrl",
            templateName: "double_rule"
        }).state("qk.exclusiveList", {
            url: "/task/exclusiveList",
            controller: "ExclusiveListCtrl",
            templateName: "task_exclusive_list"
        }).state("qk.exclusiveDetail", {
            url: "/task/exclusiveDetail/{taskId}",
            controller: "ExclusiveDetailCtrl",
            templateName: "task_exclusive_detail"
        }).state("qk.share", {
            url: "/task/share",
            controller: "ShareTaskCtrl",
            templateName: "task_share"
        }).state("qk.novice", {
            url: "/novice",
            controller: "NoviceCtrl",
            templateName: "novice"
        }).state("qk.noviceShortcut", {
            url: "/noviceShortcut",
            controller: "NoviceShortcutCtrl",
            templateName: "novice_shortcut"
        }).state("qk.prentice", {
            url: "/prentice/{from}",
            controller: "PrenticeCtrl",
            template: t.prentice
        }).state("qk.prenticeWechat", {
            url: "/prenticeWechat/{from}",
            controller: "PrenticeCtrl",
            template: t.prentice
        }).state("qk.prenticeList", {
            url: "/prenticeList",
            controller: "PrenticeListCtrl",
            templateName: "prentice_list"
        }).state("qk.transcript", {
            url: "/transcript/{from}",
            controller: "TranscriptCtrl",
            templateName: "transcript"
        }).state("qk.withdraw", {
            url: "/withdraw",
            controller: "WithdrawCtrl",
            templateName: "withdraw"
        }).state("qk.withdrawMobile", {
            url: "/withdrawMobile",
            controller: "WithdrawMobileCtrl",
            templateName: "withdraw_mobile"
        }).state("qk.withdrawWechat", {
            url: "/withdrawWechat",
            controller: "WithdrawWechatCtrl",
            templateName: "withdraw_wechat"
        }).state("qk.withdrawWechatLarge", {
            url: "/withdrawWechatLarge",
            controller: "WithdrawWechatLargeCtrl",
            templateName: "withdraw_wechat_large"
        }).state("qk.withdrawWechatActivation", {
            url: "/withdrawWechatActivation",
            controller: "WithdrawWechatActivationCtrl",
            templateName: "withdraw_wechat_activation"
        }).state("qk.withdrawDuobao", {
            url: "/withdrawDuobao",
            controller: "WithdrawDuobaoCtrl",
            templateName: "withdraw_duobao"
        }).state("qk.withdrawAlipay", {
            url: "/withdrawAlipay",
            controller: "WithdrawAlipayCtrl",
            templateName: "withdraw_alipay"
        }).state("qk.other", {
            url: "/other",
            controller: "OtherCtrl",
            templateName: "other"
        }).state("qk.cs", {
            url: "/other/cs",
            controller: "CSCtrl",
            templateName: "other_cs"
        }).state("qk.news", {
            url: "/other/news",
            controller: "NewsCtrl",
            templateName: "other_news"
        }).state("qk.qa", {
            url: "/other/qa/{page}",
            controller: "QACtrl",
            templateName: "other_qa"
        }).state("qk.shiftAccount", {
            url: "/other/shiftAccount",
            controller: "ShiftAccountCtrl",
            templateName: "other_shift_account"
        }).state("qk.biz", {
            url: "/other/biz",
            templateName: "other_biz"
        }).state("qk.unfreezeAccount", {
            url: "/other/unfreezeAccount",
            controller: "UnfreezeAccountCtrl",
            templateName: "other_unfreeze_account"
        }).state("qk.unfreezeAccountStep", {
            url: "/other/unfreezeAccount/{step}",
            controller: "UnfreezeAccountStepCtrl",
            templateName: "other_unfreeze_account_step"
        }).state("qk.integral", {
            url: "/other/integral",
            controller: "IntegralCtrl",
            templateName: "other_integral"
        }).state("qk.integralSubtask", {
            url: "/other/integralSubtask",
            controller: "IntegralSubtaskCtrl",
            templateName: "other_integral_subtask"
        }),
        i.otherwise(window.DEFAULT_ROUTE),
        o.html5Mode(!0),
        a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded",
        a.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded",
        s.views.maxCache(0),
        r.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|content|data):/)
    }]),
    n.run(["$rootScope", "$util", "$storage", "$state", "$img", "$window", "$http", "$qkApi", "$q",
    function(t, e, n, i, o, a, s, r, c) {
        t.refreshButtonIcon = o.get("REFRESH_BUTTON_ICON"),
        t.backButtonIcon = o.get("BACK_BUTTON_ICON"),
        t.arrowRightIcon = o.get("ARROW_RIGHT_ICON"),
        t.qkBizIcon = o.get("QK_BIZ_ICON"),
        t.loaded = !0,
        t.$on("$stateChangeStart",
        function(t, o, a, r, c) {
            if (e.isRongyuka()) {
                var l = "qk:app:next_state_after_reload",
                d = "qk:app:diadem_info",
                u = n.get(l);
                u && (t.preventDefault(), n.remove(l), i.go(u.state, u.params));
                var h = (new Date).getTime(),
                p = n.get(d); (!p || h - p.timestamp > 3e5) && s.get(window.WS_ENDPOINT + "diadem/info.json").then(function(t) {
                    var e = t.data;
                    p && e.version == p.version || (n.set(l, {
                        state: o.name,
                        params: a,
                        time: (new Date).getTime()
                    }), e.timestamp = h, n.set(d, e), location.reload())
                })
            }
        }),
        window.__TIMERS__ = {},
        t.$on("$stateChangeSuccess",
        function(t, e, n, i, o) {
            a.route_history || (a.route_history = []),
            a.route_history.length >= 10 && a.route_history.splice(0, 1),
            a.route_history.push({
                state: e,
                params: n,
                time: (new Date).getTime()
            }),
            _.each(window.__TIMERS__,
            function(t, e) {
                clearInterval(t)
            })
        }),
        t.app_context = e.getAppContext(),
        t.closeFindKeyBackGuide = function() {
            var e = t.findKeyBackPopup;
            e && e.close(),
            _.delay(function() {
                r.recall()
            },
            300)
        }
    }]),
    n
});
var libBase = "http://qkcdn.com/diadem/lib/",
paths = {
    underscore: libBase + "underscore/1.8.3/underscore.min",
    ionic: libBase + "ionic/0.3.0/js/ionic.bundle.min",
    chart: libBase + "chart/0.2.0/chart.min",
    css: libBase + "require/1.0.1/require.min",
    c2h: libBase + "c2h/0.5.5/c2h.min"
},
styleSheets = ["css!http://qkcdn.com/diadem/lib/ionic/0.3.0/css/ionic.min.css", "css!http://qkcdn.com/diadem/css/qk-1.0.0-dev-76b4a98.css"],
ua = window.navigator.userAgent,
re = /^.*appLabel\/(.*)$/;
re.test(ua) && styleSheets.push("css!http://qkcdn.com/diadem/css/qk-wv-1.0.0-dev-76b4a98.css"),
require.config({
    baseUrl: "diadem/js",
    paths: paths,
    map: {
        "*": {
            css: "css"
        }
    },
    shim: {
        ionic: {
            deps: styleSheets,
            exports: "ionic"
        },
        underscore: {
            exports: "_"
        },
        chart: {
            exports: "chart"
        },
        c2h: {
            exports: "c2h"
        },
        "qk.app": {
            deps: ["ionic", "chart", "underscore", "c2h"],
            exports: "qk.app"
        }
    }
}),
require(["ionic", "underscore", "chart", "c2h", "qk.app", "common/util"],
function() {
/*<qk-app-context
        data-qk-endpoint="http://127.0.0.1:8888"
        data-ws-endpoint="http://qianka.com"
        data-assets-cdn="http://assets.qkcdn.com/images"
        data-qk-scheme="com.heijiaoyinyue.app"
        data-default-route="/welcome"
        data-no-key-available="0"
        data-qk-version="76b4a98">
</qk-app-context>*/

    var t = document.getElementsByTagName("qk-app-context"),
    e = t[0].attributes;
    try {
        window.QK_ENDPOINT = e["data-qk-endpoint"].value + "/",
        window.WS_ENDPOINT = e["data-ws-endpoint"].value + "/",
        window.ASSETS_CDN = e["data-assets-cdn"].value + "/",
        window.QK_SCHEME = e["data-qk-scheme"].value,
        window.DEFAULT_ROUTE = e["data-default-route"].value,
        window.NO_KEY_AVAILABLE = parseInt(e["data-no-key-available"] && e["data-no-key-available"].value),
        window.LEKA_APPID = 58,
        window.DEFAULT_APP_SCHEME = "comsbkapp"
    } catch(n) {
        throw "Error: 环境变量注入有误 " + n
    }
    angular.bootstrap(window.document, ["qkApp"])
}),
define("qk",
function() {});