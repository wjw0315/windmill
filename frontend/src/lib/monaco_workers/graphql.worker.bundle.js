'use strict'
;(() => {
	var t4 = Object.create
	var Ju = Object.defineProperty
	var n4 = Object.getOwnPropertyDescriptor
	var r4 = Object.getOwnPropertyNames
	var i4 = Object.getPrototypeOf,
		s4 = Object.prototype.hasOwnProperty
	var Ff = ((e) =>
		typeof require < 'u'
			? require
			: typeof Proxy < 'u'
			? new Proxy(e, { get: (t, n) => (typeof require < 'u' ? require : t)[n] })
			: e)(function (e) {
		if (typeof require < 'u') return require.apply(this, arguments)
		throw Error('Dynamic require of "' + e + '" is not supported')
	})
	var o4 = (e, t) => () => (e && (t = e((e = 0))), t)
	var Kn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
		a4 = (e, t) => {
			for (var n in t) Ju(e, n, { get: t[n], enumerable: !0 })
		},
		u4 = (e, t, n, r) => {
			if ((t && typeof t == 'object') || typeof t == 'function')
				for (let i of r4(t))
					!s4.call(e, i) &&
						i !== n &&
						Ju(e, i, { get: () => t[i], enumerable: !(r = n4(t, i)) || r.enumerable })
			return e
		}
	var Xu = (e, t, n) => (
		(n = e != null ? t4(i4(e)) : {}),
		u4(t || !e || !e.__esModule ? Ju(n, 'default', { value: e, enumerable: !0 }) : n, e)
	)
	var Z0 = Kn((yI, Du) => {
		'use strict'
		function K0(e, t) {
			if (e != null) return e
			var n = new Error(t !== void 0 ? t : 'Got unexpected ' + e)
			throw ((n.framesToPop = 1), n)
		}
		Du.exports = K0
		Du.exports.default = K0
		Object.defineProperty(Du.exports, '__esModule', { value: !0 })
	})
	var go = Kn((bR, lm) => {
		'use strict'
		var Tn = '\\\\/',
			sm = `[^${Tn}]`,
			qn = '\\.',
			uD = '\\+',
			lD = '\\?',
			Au = '\\/',
			cD = '(?=.)',
			om = '[^/]',
			b1 = `(?:${Au}|$)`,
			am = `(?:^|${Au})`,
			E1 = `${qn}{1,2}${b1}`,
			fD = `(?!${qn})`,
			dD = `(?!${am}${E1})`,
			pD = `(?!${qn}{0,1}${b1})`,
			hD = `(?!${E1})`,
			mD = `[^.${Au}]`,
			gD = `${om}*?`,
			DD = '/',
			um = {
				DOT_LITERAL: qn,
				PLUS_LITERAL: uD,
				QMARK_LITERAL: lD,
				SLASH_LITERAL: Au,
				ONE_CHAR: cD,
				QMARK: om,
				END_ANCHOR: b1,
				DOTS_SLASH: E1,
				NO_DOT: fD,
				NO_DOTS: dD,
				NO_DOT_SLASH: pD,
				NO_DOTS_SLASH: hD,
				QMARK_NO_DOT: mD,
				STAR: gD,
				START_ANCHOR: am,
				SEP: DD
			},
			vD = {
				...um,
				SLASH_LITERAL: `[${Tn}]`,
				QMARK: sm,
				STAR: `${sm}*?`,
				DOTS_SLASH: `${qn}{1,2}(?:[${Tn}]|$)`,
				NO_DOT: `(?!${qn})`,
				NO_DOTS: `(?!(?:^|[${Tn}])${qn}{1,2}(?:[${Tn}]|$))`,
				NO_DOT_SLASH: `(?!${qn}{0,1}(?:[${Tn}]|$))`,
				NO_DOTS_SLASH: `(?!${qn}{1,2}(?:[${Tn}]|$))`,
				QMARK_NO_DOT: `[^.${Tn}]`,
				START_ANCHOR: `(?:^|[${Tn}])`,
				END_ANCHOR: `(?:[${Tn}]|$)`,
				SEP: '\\'
			},
			bD = {
				alnum: 'a-zA-Z0-9',
				alpha: 'a-zA-Z',
				ascii: '\\x00-\\x7F',
				blank: ' \\t',
				cntrl: '\\x00-\\x1F\\x7F',
				digit: '0-9',
				graph: '\\x21-\\x7E',
				lower: 'a-z',
				print: '\\x20-\\x7E ',
				punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
				space: ' \\t\\r\\n\\v\\f',
				upper: 'A-Z',
				word: 'A-Za-z0-9_',
				xdigit: 'A-Fa-f0-9'
			}
		lm.exports = {
			MAX_LENGTH: 1024 * 64,
			POSIX_REGEX_SOURCE: bD,
			REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
			REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
			REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
			REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
			REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
			REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
			REPLACEMENTS: { '***': '*', '**/**': '**', '**/**/**': '**' },
			CHAR_0: 48,
			CHAR_9: 57,
			CHAR_UPPERCASE_A: 65,
			CHAR_LOWERCASE_A: 97,
			CHAR_UPPERCASE_Z: 90,
			CHAR_LOWERCASE_Z: 122,
			CHAR_LEFT_PARENTHESES: 40,
			CHAR_RIGHT_PARENTHESES: 41,
			CHAR_ASTERISK: 42,
			CHAR_AMPERSAND: 38,
			CHAR_AT: 64,
			CHAR_BACKWARD_SLASH: 92,
			CHAR_CARRIAGE_RETURN: 13,
			CHAR_CIRCUMFLEX_ACCENT: 94,
			CHAR_COLON: 58,
			CHAR_COMMA: 44,
			CHAR_DOT: 46,
			CHAR_DOUBLE_QUOTE: 34,
			CHAR_EQUAL: 61,
			CHAR_EXCLAMATION_MARK: 33,
			CHAR_FORM_FEED: 12,
			CHAR_FORWARD_SLASH: 47,
			CHAR_GRAVE_ACCENT: 96,
			CHAR_HASH: 35,
			CHAR_HYPHEN_MINUS: 45,
			CHAR_LEFT_ANGLE_BRACKET: 60,
			CHAR_LEFT_CURLY_BRACE: 123,
			CHAR_LEFT_SQUARE_BRACKET: 91,
			CHAR_LINE_FEED: 10,
			CHAR_NO_BREAK_SPACE: 160,
			CHAR_PERCENT: 37,
			CHAR_PLUS: 43,
			CHAR_QUESTION_MARK: 63,
			CHAR_RIGHT_ANGLE_BRACKET: 62,
			CHAR_RIGHT_CURLY_BRACE: 125,
			CHAR_RIGHT_SQUARE_BRACKET: 93,
			CHAR_SEMICOLON: 59,
			CHAR_SINGLE_QUOTE: 39,
			CHAR_SPACE: 32,
			CHAR_TAB: 9,
			CHAR_UNDERSCORE: 95,
			CHAR_VERTICAL_LINE: 124,
			CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
			extglobChars(e) {
				return {
					'!': { type: 'negate', open: '(?:(?!(?:', close: `))${e.STAR})` },
					'?': { type: 'qmark', open: '(?:', close: ')?' },
					'+': { type: 'plus', open: '(?:', close: ')+' },
					'*': { type: 'star', open: '(?:', close: ')*' },
					'@': { type: 'at', open: '(?:', close: ')' }
				}
			},
			globChars(e) {
				return e === !0 ? vD : um
			}
		}
	})
	var Fu = Kn((Vt) => {
		'use strict'
		var {
			REGEX_BACKSLASH: ED,
			REGEX_REMOVE_BACKSLASH: yD,
			REGEX_SPECIAL_CHARS: xD,
			REGEX_SPECIAL_CHARS_GLOBAL: _D
		} = go()
		Vt.isObject = (e) => e !== null && typeof e == 'object' && !Array.isArray(e)
		Vt.hasRegexChars = (e) => xD.test(e)
		Vt.isRegexChar = (e) => e.length === 1 && Vt.hasRegexChars(e)
		Vt.escapeRegex = (e) => e.replace(_D, '\\$1')
		Vt.toPosixSlashes = (e) => e.replace(ED, '/')
		Vt.removeBackslashes = (e) => e.replace(yD, (t) => (t === '\\' ? '' : t))
		Vt.supportsLookbehinds = () => {
			let e = process.version.slice(1).split('.').map(Number)
			return (e.length === 3 && e[0] >= 9) || (e[0] === 8 && e[1] >= 10)
		}
		Vt.escapeLast = (e, t, n) => {
			let r = e.lastIndexOf(t, n)
			return r === -1
				? e
				: e[r - 1] === '\\'
				? Vt.escapeLast(e, t, r - 1)
				: `${e.slice(0, r)}\\${e.slice(r)}`
		}
		Vt.removePrefix = (e, t = {}) => {
			let n = e
			return n.startsWith('./') && ((n = n.slice(2)), (t.prefix = './')), n
		}
		Vt.wrapOutput = (e, t = {}, n = {}) => {
			let r = n.contains ? '' : '^',
				i = n.contains ? '' : '$',
				s = `${r}(?:${e})${i}`
			return t.negated === !0 && (s = `(?:^(?!${s}).*$)`), s
		}
		Vt.basename = (e, { windows: t } = {}) =>
			t ? e.replace(/[\\/]$/, '').replace(/.*[\\/]/, '') : e.replace(/\/$/, '').replace(/.*\//, '')
	})
	var vm = Kn((yR, Dm) => {
		'use strict'
		var cm = Fu(),
			{
				CHAR_ASTERISK: y1,
				CHAR_AT: ND,
				CHAR_BACKWARD_SLASH: Do,
				CHAR_COMMA: TD,
				CHAR_DOT: x1,
				CHAR_EXCLAMATION_MARK: fm,
				CHAR_FORWARD_SLASH: gm,
				CHAR_LEFT_CURLY_BRACE: _1,
				CHAR_LEFT_PARENTHESES: N1,
				CHAR_LEFT_SQUARE_BRACKET: SD,
				CHAR_PLUS: AD,
				CHAR_QUESTION_MARK: dm,
				CHAR_RIGHT_CURLY_BRACE: FD,
				CHAR_RIGHT_PARENTHESES: pm,
				CHAR_RIGHT_SQUARE_BRACKET: wD
			} = go(),
			hm = (e) => e === gm || e === Do,
			mm = (e) => {
				e.isPrefix !== !0 && (e.depth = e.isGlobstar ? 1 / 0 : 1)
			},
			LD = (e, t) => {
				let n = t || {},
					r = e.length - 1,
					i = n.parts === !0 || n.scanToEnd === !0,
					s = [],
					o = [],
					a = [],
					u = e,
					l = -1,
					c = 0,
					d = 0,
					h = !1,
					m = !1,
					g = !1,
					v = !1,
					N = !1,
					_ = !1,
					w = !1,
					C = !1,
					S = !1,
					k = 0,
					M,
					I,
					B = { value: '', depth: 0, isGlob: !1 },
					L = () => l >= r,
					A = () => u.charCodeAt(l + 1),
					X = () => ((M = I), u.charCodeAt(++l))
				for (; l < r; ) {
					I = X()
					let Q
					if (I === Do) {
						;(w = B.backslashes = !0), (I = X()), I === _1 && (_ = !0)
						continue
					}
					if (_ === !0 || I === _1) {
						for (k++; L() !== !0 && (I = X()); ) {
							if (I === Do) {
								;(w = B.backslashes = !0), X()
								continue
							}
							if (I === _1) {
								k++
								continue
							}
							if (_ !== !0 && I === x1 && (I = X()) === x1) {
								if (((h = B.isBrace = !0), (g = B.isGlob = !0), (S = !0), i === !0)) continue
								break
							}
							if (_ !== !0 && I === TD) {
								if (((h = B.isBrace = !0), (g = B.isGlob = !0), (S = !0), i === !0)) continue
								break
							}
							if (I === FD && (k--, k === 0)) {
								;(_ = !1), (h = B.isBrace = !0), (S = !0)
								break
							}
						}
						if (i === !0) continue
						break
					}
					if (I === gm) {
						if ((s.push(l), o.push(B), (B = { value: '', depth: 0, isGlob: !1 }), S === !0))
							continue
						if (M === x1 && l === c + 1) {
							c += 2
							continue
						}
						d = l + 1
						continue
					}
					if (
						n.noext !== !0 &&
						(I === AD || I === ND || I === y1 || I === dm || I === fm) === !0 &&
						A() === N1
					) {
						if (((g = B.isGlob = !0), (v = B.isExtglob = !0), (S = !0), i === !0)) {
							for (; L() !== !0 && (I = X()); ) {
								if (I === Do) {
									;(w = B.backslashes = !0), (I = X())
									continue
								}
								if (I === pm) {
									;(g = B.isGlob = !0), (S = !0)
									break
								}
							}
							continue
						}
						break
					}
					if (I === y1) {
						if ((M === y1 && (N = B.isGlobstar = !0), (g = B.isGlob = !0), (S = !0), i === !0))
							continue
						break
					}
					if (I === dm) {
						if (((g = B.isGlob = !0), (S = !0), i === !0)) continue
						break
					}
					if (I === SD)
						for (; L() !== !0 && (Q = X()); ) {
							if (Q === Do) {
								;(w = B.backslashes = !0), X()
								continue
							}
							if (Q === wD) {
								if (((m = B.isBracket = !0), (g = B.isGlob = !0), (S = !0), i === !0)) continue
								break
							}
						}
					if (n.nonegate !== !0 && I === fm && l === c) {
						;(C = B.negated = !0), c++
						continue
					}
					if (n.noparen !== !0 && I === N1) {
						if (((g = B.isGlob = !0), i === !0)) {
							for (; L() !== !0 && (I = X()); ) {
								if (I === N1) {
									;(w = B.backslashes = !0), (I = X())
									continue
								}
								if (I === pm) {
									S = !0
									break
								}
							}
							continue
						}
						break
					}
					if (g === !0) {
						if (((S = !0), i === !0)) continue
						break
					}
				}
				n.noext === !0 && ((v = !1), (g = !1))
				let z = u,
					fe = '',
					F = ''
				c > 0 && ((fe = u.slice(0, c)), (u = u.slice(c)), (d -= c)),
					z && g === !0 && d > 0
						? ((z = u.slice(0, d)), (F = u.slice(d)))
						: g === !0
						? ((z = ''), (F = u))
						: (z = u),
					z &&
						z !== '' &&
						z !== '/' &&
						z !== u &&
						hm(z.charCodeAt(z.length - 1)) &&
						(z = z.slice(0, -1)),
					n.unescape === !0 &&
						(F && (F = cm.removeBackslashes(F)), z && w === !0 && (z = cm.removeBackslashes(z)))
				let T = {
					prefix: fe,
					input: e,
					start: c,
					base: z,
					glob: F,
					isBrace: h,
					isBracket: m,
					isGlob: g,
					isExtglob: v,
					isGlobstar: N,
					negated: C
				}
				if (
					(n.tokens === !0 && ((T.maxDepth = 0), hm(I) || o.push(B), (T.tokens = o)),
					n.parts === !0 || n.tokens === !0)
				) {
					let Q
					for (let $ = 0; $ < s.length; $++) {
						let ee = Q ? Q + 1 : c,
							ne = s[$],
							se = e.slice(ee, ne)
						n.tokens &&
							($ === 0 && c !== 0 ? ((o[$].isPrefix = !0), (o[$].value = fe)) : (o[$].value = se),
							mm(o[$]),
							(T.maxDepth += o[$].depth)),
							($ !== 0 || se !== '') && a.push(se),
							(Q = ne)
					}
					if (Q && Q + 1 < e.length) {
						let $ = e.slice(Q + 1)
						a.push($),
							n.tokens &&
								((o[o.length - 1].value = $),
								mm(o[o.length - 1]),
								(T.maxDepth += o[o.length - 1].depth))
					}
					;(T.slashes = s), (T.parts = a)
				}
				return T
			}
		Dm.exports = LD
	})
	var xm = Kn((xR, ym) => {
		'use strict'
		var wu = go(),
			cn = Fu(),
			{
				MAX_LENGTH: Lu,
				POSIX_REGEX_SOURCE: CD,
				REGEX_NON_SPECIAL_CHARS: ID,
				REGEX_SPECIAL_CHARS_BACKREF: RD,
				REPLACEMENTS: bm
			} = wu,
			kD = (e, t) => {
				if (typeof t.expandRange == 'function') return t.expandRange(...e, t)
				e.sort()
				let n = `[${e.join('-')}]`
				try {
					new RegExp(n)
				} catch {
					return e.map((i) => cn.escapeRegex(i)).join('..')
				}
				return n
			},
			is = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,
			Em = (e, t) => {
				if (typeof e != 'string') throw new TypeError('Expected a string')
				e = bm[e] || e
				let n = { ...t },
					r = typeof n.maxLength == 'number' ? Math.min(Lu, n.maxLength) : Lu,
					i = e.length
				if (i > r) throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${r}`)
				let s = { type: 'bos', value: '', output: n.prepend || '' },
					o = [s],
					a = n.capture ? '' : '?:',
					u = wu.globChars(n.windows),
					l = wu.extglobChars(u),
					{
						DOT_LITERAL: c,
						PLUS_LITERAL: d,
						SLASH_LITERAL: h,
						ONE_CHAR: m,
						DOTS_SLASH: g,
						NO_DOT: v,
						NO_DOT_SLASH: N,
						NO_DOTS_SLASH: _,
						QMARK: w,
						QMARK_NO_DOT: C,
						STAR: S,
						START_ANCHOR: k
					} = u,
					M = (H) => `(${a}(?:(?!${k}${H.dot ? g : c}).)*?)`,
					I = n.dot ? '' : v,
					B = n.dot ? w : C,
					L = n.bash === !0 ? M(n) : S
				n.capture && (L = `(${L})`), typeof n.noext == 'boolean' && (n.noextglob = n.noext)
				let A = {
					input: e,
					index: -1,
					start: 0,
					dot: n.dot === !0,
					consumed: '',
					output: '',
					prefix: '',
					backtrack: !1,
					negated: !1,
					brackets: 0,
					braces: 0,
					parens: 0,
					quotes: 0,
					globstar: !1,
					tokens: o
				}
				;(e = cn.removePrefix(e, A)), (i = e.length)
				let X = [],
					z = [],
					fe = [],
					F = s,
					T,
					Q = () => A.index === i - 1,
					$ = (A.peek = (H = 1) => e[A.index + H]),
					ee = (A.advance = () => e[++A.index]),
					ne = () => e.slice(A.index + 1),
					se = (H = '', Ne = 0) => {
						;(A.consumed += H), (A.index += Ne)
					},
					Ie = (H) => {
						;(A.output += H.output != null ? H.output : H.value), se(H.value)
					},
					P = () => {
						let H = 1
						for (; $() === '!' && ($(2) !== '(' || $(3) === '?'); ) ee(), A.start++, H++
						return H % 2 === 0 ? !1 : ((A.negated = !0), A.start++, !0)
					},
					Z = (H) => {
						A[H]++, fe.push(H)
					},
					J = (H) => {
						A[H]--, fe.pop()
					},
					G = (H) => {
						if (F.type === 'globstar') {
							let Ne = A.braces > 0 && (H.type === 'comma' || H.type === 'brace'),
								Y = H.extglob === !0 || (X.length && (H.type === 'pipe' || H.type === 'paren'))
							H.type !== 'slash' &&
								H.type !== 'paren' &&
								!Ne &&
								!Y &&
								((A.output = A.output.slice(0, -F.output.length)),
								(F.type = 'star'),
								(F.value = '*'),
								(F.output = L),
								(A.output += F.output))
						}
						if (
							(X.length && H.type !== 'paren' && !l[H.value] && (X[X.length - 1].inner += H.value),
							(H.value || H.output) && Ie(H),
							F && F.type === 'text' && H.type === 'text')
						) {
							;(F.value += H.value), (F.output = (F.output || '') + H.value)
							return
						}
						;(H.prev = F), o.push(H), (F = H)
					},
					_e = (H, Ne) => {
						let Y = { ...l[Ne], conditions: 1, inner: '' }
						;(Y.prev = F), (Y.parens = A.parens), (Y.output = A.output)
						let de = (n.capture ? '(' : '') + Y.open
						Z('parens'),
							G({ type: H, value: Ne, output: A.output ? '' : m }),
							G({ type: 'paren', extglob: !0, value: ee(), output: de }),
							X.push(Y)
					},
					Re = (H) => {
						let Ne = H.close + (n.capture ? ')' : '')
						if (H.type === 'negate') {
							let Y = L
							H.inner && H.inner.length > 1 && H.inner.includes('/') && (Y = M(n)),
								(Y !== L || Q() || /^\)+$/.test(ne())) && (Ne = H.close = `)$))${Y}`),
								H.prev.type === 'bos' && Q() && (A.negatedExtglob = !0)
						}
						G({ type: 'paren', extglob: !0, value: T, output: Ne }), J('parens')
					}
				if (n.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
					let H = !1,
						Ne = e.replace(RD, (Y, de, Te, Dt, Ye, ds) =>
							Dt === '\\'
								? ((H = !0), Y)
								: Dt === '?'
								? de
									? de + Dt + (Ye ? w.repeat(Ye.length) : '')
									: ds === 0
									? B + (Ye ? w.repeat(Ye.length) : '')
									: w.repeat(Te.length)
								: Dt === '.'
								? c.repeat(Te.length)
								: Dt === '*'
								? de
									? de + Dt + (Ye ? L : '')
									: L
								: de
								? Y
								: `\\${Y}`
						)
					return (
						H === !0 &&
							(n.unescape === !0
								? (Ne = Ne.replace(/\\/g, ''))
								: (Ne = Ne.replace(/\\+/g, (Y) => (Y.length % 2 === 0 ? '\\\\' : Y ? '\\' : '')))),
						Ne === e && n.contains === !0
							? ((A.output = e), A)
							: ((A.output = cn.wrapOutput(Ne, A, t)), A)
					)
				}
				for (; !Q(); ) {
					if (((T = ee()), T === '\0')) continue
					if (T === '\\') {
						let Y = $()
						if ((Y === '/' && n.bash !== !0) || Y === '.' || Y === ';') continue
						if (!Y) {
							;(T += '\\'), G({ type: 'text', value: T })
							continue
						}
						let de = /^\\+/.exec(ne()),
							Te = 0
						if (
							(de &&
								de[0].length > 2 &&
								((Te = de[0].length), (A.index += Te), Te % 2 !== 0 && (T += '\\')),
							n.unescape === !0 ? (T = ee() || '') : (T += ee() || ''),
							A.brackets === 0)
						) {
							G({ type: 'text', value: T })
							continue
						}
					}
					if (A.brackets > 0 && (T !== ']' || F.value === '[' || F.value === '[^')) {
						if (n.posix !== !1 && T === ':') {
							let Y = F.value.slice(1)
							if (Y.includes('[') && ((F.posix = !0), Y.includes(':'))) {
								let de = F.value.lastIndexOf('['),
									Te = F.value.slice(0, de),
									Dt = F.value.slice(de + 2),
									Ye = CD[Dt]
								if (Ye) {
									;(F.value = Te + Ye),
										(A.backtrack = !0),
										ee(),
										!s.output && o.indexOf(F) === 1 && (s.output = m)
									continue
								}
							}
						}
						;((T === '[' && $() !== ':') || (T === '-' && $() === ']')) && (T = `\\${T}`),
							T === ']' && (F.value === '[' || F.value === '[^') && (T = `\\${T}`),
							n.posix === !0 && T === '!' && F.value === '[' && (T = '^'),
							(F.value += T),
							Ie({ value: T })
						continue
					}
					if (A.quotes === 1 && T !== '"') {
						;(T = cn.escapeRegex(T)), (F.value += T), Ie({ value: T })
						continue
					}
					if (T === '"') {
						;(A.quotes = A.quotes === 1 ? 0 : 1),
							n.keepQuotes === !0 && G({ type: 'text', value: T })
						continue
					}
					if (T === '(') {
						Z('parens'), G({ type: 'paren', value: T })
						continue
					}
					if (T === ')') {
						if (A.parens === 0 && n.strictBrackets === !0) throw new SyntaxError(is('opening', '('))
						let Y = X[X.length - 1]
						if (Y && A.parens === Y.parens + 1) {
							Re(X.pop())
							continue
						}
						G({ type: 'paren', value: T, output: A.parens ? ')' : '\\)' }), J('parens')
						continue
					}
					if (T === '[') {
						if (n.nobracket === !0 || !ne().includes(']')) {
							if (n.nobracket !== !0 && n.strictBrackets === !0)
								throw new SyntaxError(is('closing', ']'))
							T = `\\${T}`
						} else Z('brackets')
						G({ type: 'bracket', value: T })
						continue
					}
					if (T === ']') {
						if (n.nobracket === !0 || (F && F.type === 'bracket' && F.value.length === 1)) {
							G({ type: 'text', value: T, output: `\\${T}` })
							continue
						}
						if (A.brackets === 0) {
							if (n.strictBrackets === !0) throw new SyntaxError(is('opening', '['))
							G({ type: 'text', value: T, output: `\\${T}` })
							continue
						}
						J('brackets')
						let Y = F.value.slice(1)
						if (
							(F.posix !== !0 && Y[0] === '^' && !Y.includes('/') && (T = `/${T}`),
							(F.value += T),
							Ie({ value: T }),
							n.literalBrackets === !1 || cn.hasRegexChars(Y))
						)
							continue
						let de = cn.escapeRegex(F.value)
						if (((A.output = A.output.slice(0, -F.value.length)), n.literalBrackets === !0)) {
							;(A.output += de), (F.value = de)
							continue
						}
						;(F.value = `(${a}${de}|${F.value})`), (A.output += F.value)
						continue
					}
					if (T === '{' && n.nobrace !== !0) {
						Z('braces')
						let Y = {
							type: 'brace',
							value: T,
							output: '(',
							outputIndex: A.output.length,
							tokensIndex: A.tokens.length
						}
						z.push(Y), G(Y)
						continue
					}
					if (T === '}') {
						let Y = z[z.length - 1]
						if (n.nobrace === !0 || !Y) {
							G({ type: 'text', value: T, output: T })
							continue
						}
						let de = ')'
						if (Y.dots === !0) {
							let Te = o.slice(),
								Dt = []
							for (let Ye = Te.length - 1; Ye >= 0 && (o.pop(), Te[Ye].type !== 'brace'); Ye--)
								Te[Ye].type !== 'dots' && Dt.unshift(Te[Ye].value)
							;(de = kD(Dt, n)), (A.backtrack = !0)
						}
						if (Y.comma !== !0 && Y.dots !== !0) {
							let Te = A.output.slice(0, Y.outputIndex),
								Dt = A.tokens.slice(Y.tokensIndex)
							;(Y.value = Y.output = '\\{'), (T = de = '\\}'), (A.output = Te)
							for (let Ye of Dt) A.output += Ye.output || Ye.value
						}
						G({ type: 'brace', value: T, output: de }), J('braces'), z.pop()
						continue
					}
					if (T === '|') {
						X.length > 0 && X[X.length - 1].conditions++, G({ type: 'text', value: T })
						continue
					}
					if (T === ',') {
						let Y = T,
							de = z[z.length - 1]
						de && fe[fe.length - 1] === 'braces' && ((de.comma = !0), (Y = '|')),
							G({ type: 'comma', value: T, output: Y })
						continue
					}
					if (T === '/') {
						if (F.type === 'dot' && A.index === A.start + 1) {
							;(A.start = A.index + 1), (A.consumed = ''), (A.output = ''), o.pop(), (F = s)
							continue
						}
						G({ type: 'slash', value: T, output: h })
						continue
					}
					if (T === '.') {
						if (A.braces > 0 && F.type === 'dot') {
							F.value === '.' && (F.output = c)
							let Y = z[z.length - 1]
							;(F.type = 'dots'), (F.output += T), (F.value += T), (Y.dots = !0)
							continue
						}
						if (A.braces + A.parens === 0 && F.type !== 'bos' && F.type !== 'slash') {
							G({ type: 'text', value: T, output: c })
							continue
						}
						G({ type: 'dot', value: T, output: c })
						continue
					}
					if (T === '?') {
						if (!(F && F.value === '(') && n.noextglob !== !0 && $() === '(' && $(2) !== '?') {
							_e('qmark', T)
							continue
						}
						if (F && F.type === 'paren') {
							let de = $(),
								Te = T
							if (de === '<' && !cn.supportsLookbehinds())
								throw new Error('Node.js v10 or higher is required for regex lookbehinds')
							;((F.value === '(' && !/[!=<:]/.test(de)) ||
								(de === '<' && !/<([!=]|\w+>)/.test(ne()))) &&
								(Te = `\\${T}`),
								G({ type: 'text', value: T, output: Te })
							continue
						}
						if (n.dot !== !0 && (F.type === 'slash' || F.type === 'bos')) {
							G({ type: 'qmark', value: T, output: C })
							continue
						}
						G({ type: 'qmark', value: T, output: w })
						continue
					}
					if (T === '!') {
						if (n.noextglob !== !0 && $() === '(' && ($(2) !== '?' || !/[!=<:]/.test($(3)))) {
							_e('negate', T)
							continue
						}
						if (n.nonegate !== !0 && A.index === 0) {
							P()
							continue
						}
					}
					if (T === '+') {
						if (n.noextglob !== !0 && $() === '(' && $(2) !== '?') {
							_e('plus', T)
							continue
						}
						if ((F && F.value === '(') || n.regex === !1) {
							G({ type: 'plus', value: T, output: d })
							continue
						}
						if (
							(F && (F.type === 'bracket' || F.type === 'paren' || F.type === 'brace')) ||
							A.parens > 0
						) {
							G({ type: 'plus', value: T })
							continue
						}
						G({ type: 'plus', value: d })
						continue
					}
					if (T === '@') {
						if (n.noextglob !== !0 && $() === '(' && $(2) !== '?') {
							G({ type: 'at', extglob: !0, value: T, output: '' })
							continue
						}
						G({ type: 'text', value: T })
						continue
					}
					if (T !== '*') {
						;(T === '$' || T === '^') && (T = `\\${T}`)
						let Y = ID.exec(ne())
						Y && ((T += Y[0]), (A.index += Y[0].length)), G({ type: 'text', value: T })
						continue
					}
					if (F && (F.type === 'globstar' || F.star === !0)) {
						;(F.type = 'star'),
							(F.star = !0),
							(F.value += T),
							(F.output = L),
							(A.backtrack = !0),
							(A.globstar = !0),
							se(T)
						continue
					}
					let H = ne()
					if (n.noextglob !== !0 && /^\([^?]/.test(H)) {
						_e('star', T)
						continue
					}
					if (F.type === 'star') {
						if (n.noglobstar === !0) {
							se(T)
							continue
						}
						let Y = F.prev,
							de = Y.prev,
							Te = Y.type === 'slash' || Y.type === 'bos',
							Dt = de && (de.type === 'star' || de.type === 'globstar')
						if (n.bash === !0 && (!Te || (H[0] && H[0] !== '/'))) {
							G({ type: 'star', value: T, output: '' })
							continue
						}
						let Ye = A.braces > 0 && (Y.type === 'comma' || Y.type === 'brace'),
							ds = X.length && (Y.type === 'pipe' || Y.type === 'paren')
						if (!Te && Y.type !== 'paren' && !Ye && !ds) {
							G({ type: 'star', value: T, output: '' })
							continue
						}
						for (; H.slice(0, 3) === '/**'; ) {
							let Zr = e[A.index + 4]
							if (Zr && Zr !== '/') break
							;(H = H.slice(3)), se('/**', 3)
						}
						if (Y.type === 'bos' && Q()) {
							;(F.type = 'globstar'),
								(F.value += T),
								(F.output = M(n)),
								(A.output = F.output),
								(A.globstar = !0),
								se(T)
							continue
						}
						if (Y.type === 'slash' && Y.prev.type !== 'bos' && !Dt && Q()) {
							;(A.output = A.output.slice(0, -(Y.output + F.output).length)),
								(Y.output = `(?:${Y.output}`),
								(F.type = 'globstar'),
								(F.output = M(n) + (n.strictSlashes ? ')' : '|$)')),
								(F.value += T),
								(A.globstar = !0),
								(A.output += Y.output + F.output),
								se(T)
							continue
						}
						if (Y.type === 'slash' && Y.prev.type !== 'bos' && H[0] === '/') {
							let Zr = H[1] !== void 0 ? '|$' : ''
							;(A.output = A.output.slice(0, -(Y.output + F.output).length)),
								(Y.output = `(?:${Y.output}`),
								(F.type = 'globstar'),
								(F.output = `${M(n)}${h}|${h}${Zr})`),
								(F.value += T),
								(A.output += Y.output + F.output),
								(A.globstar = !0),
								se(T + ee()),
								G({ type: 'slash', value: '/', output: '' })
							continue
						}
						if (Y.type === 'bos' && H[0] === '/') {
							;(F.type = 'globstar'),
								(F.value += T),
								(F.output = `(?:^|${h}|${M(n)}${h})`),
								(A.output = F.output),
								(A.globstar = !0),
								se(T + ee()),
								G({ type: 'slash', value: '/', output: '' })
							continue
						}
						;(A.output = A.output.slice(0, -F.output.length)),
							(F.type = 'globstar'),
							(F.output = M(n)),
							(F.value += T),
							(A.output += F.output),
							(A.globstar = !0),
							se(T)
						continue
					}
					let Ne = { type: 'star', value: T, output: L }
					if (n.bash === !0) {
						;(Ne.output = '.*?'),
							(F.type === 'bos' || F.type === 'slash') && (Ne.output = I + Ne.output),
							G(Ne)
						continue
					}
					if (F && (F.type === 'bracket' || F.type === 'paren') && n.regex === !0) {
						;(Ne.output = T), G(Ne)
						continue
					}
					;(A.index === A.start || F.type === 'slash' || F.type === 'dot') &&
						(F.type === 'dot'
							? ((A.output += N), (F.output += N))
							: n.dot === !0
							? ((A.output += _), (F.output += _))
							: ((A.output += I), (F.output += I)),
						$() !== '*' && ((A.output += m), (F.output += m))),
						G(Ne)
				}
				for (; A.brackets > 0; ) {
					if (n.strictBrackets === !0) throw new SyntaxError(is('closing', ']'))
					;(A.output = cn.escapeLast(A.output, '[')), J('brackets')
				}
				for (; A.parens > 0; ) {
					if (n.strictBrackets === !0) throw new SyntaxError(is('closing', ')'))
					;(A.output = cn.escapeLast(A.output, '(')), J('parens')
				}
				for (; A.braces > 0; ) {
					if (n.strictBrackets === !0) throw new SyntaxError(is('closing', '}'))
					;(A.output = cn.escapeLast(A.output, '{')), J('braces')
				}
				if (
					(n.strictSlashes !== !0 &&
						(F.type === 'star' || F.type === 'bracket') &&
						G({ type: 'maybe_slash', value: '', output: `${h}?` }),
					A.backtrack === !0)
				) {
					A.output = ''
					for (let H of A.tokens)
						(A.output += H.output != null ? H.output : H.value), H.suffix && (A.output += H.suffix)
				}
				return A
			}
		Em.fastpaths = (e, t) => {
			let n = { ...t },
				r = typeof n.maxLength == 'number' ? Math.min(Lu, n.maxLength) : Lu,
				i = e.length
			if (i > r) throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${r}`)
			e = bm[e] || e
			let {
					DOT_LITERAL: s,
					SLASH_LITERAL: o,
					ONE_CHAR: a,
					DOTS_SLASH: u,
					NO_DOT: l,
					NO_DOTS: c,
					NO_DOTS_SLASH: d,
					STAR: h,
					START_ANCHOR: m
				} = wu.globChars(n.windows),
				g = n.dot ? c : l,
				v = n.dot ? d : l,
				N = n.capture ? '' : '?:',
				_ = { negated: !1, prefix: '' },
				w = n.bash === !0 ? '.*?' : h
			n.capture && (w = `(${w})`)
			let C = (I) => (I.noglobstar === !0 ? w : `(${N}(?:(?!${m}${I.dot ? u : s}).)*?)`),
				S = (I) => {
					switch (I) {
						case '*':
							return `${g}${a}${w}`
						case '.*':
							return `${s}${a}${w}`
						case '*.*':
							return `${g}${w}${s}${a}${w}`
						case '*/*':
							return `${g}${w}${o}${a}${v}${w}`
						case '**':
							return g + C(n)
						case '**/*':
							return `(?:${g}${C(n)}${o})?${v}${a}${w}`
						case '**/*.*':
							return `(?:${g}${C(n)}${o})?${v}${w}${s}${a}${w}`
						case '**/.*':
							return `(?:${g}${C(n)}${o})?${s}${a}${w}`
						default: {
							let B = /^(.*?)\.(\w+)$/.exec(I)
							if (!B) return
							let L = S(B[1])
							return L ? L + s + B[2] : void 0
						}
					}
				},
				k = cn.removePrefix(e, _),
				M = S(k)
			return M && n.strictSlashes !== !0 && (M += `${o}?`), M
		}
		ym.exports = Em
	})
	var Tm = Kn((_R, Nm) => {
		'use strict'
		var OD = vm(),
			T1 = xm(),
			_m = Fu(),
			MD = go(),
			PD = (e) => e && typeof e == 'object' && !Array.isArray(e),
			nt = (e, t, n = !1) => {
				if (Array.isArray(e)) {
					let c = e.map((h) => nt(h, t, n))
					return (h) => {
						for (let m of c) {
							let g = m(h)
							if (g) return g
						}
						return !1
					}
				}
				let r = PD(e) && e.tokens && e.input
				if (e === '' || (typeof e != 'string' && !r))
					throw new TypeError('Expected pattern to be a non-empty string')
				let i = t || {},
					s = i.windows,
					o = r ? nt.compileRe(e, t) : nt.makeRe(e, t, !1, !0),
					a = o.state
				delete o.state
				let u = () => !1
				if (i.ignore) {
					let c = { ...t, ignore: null, onMatch: null, onResult: null }
					u = nt(i.ignore, c, n)
				}
				let l = (c, d = !1) => {
					let { isMatch: h, match: m, output: g } = nt.test(c, o, t, { glob: e, posix: s }),
						v = { glob: e, state: a, regex: o, posix: s, input: c, output: g, match: m, isMatch: h }
					return (
						typeof i.onResult == 'function' && i.onResult(v),
						h === !1
							? ((v.isMatch = !1), d ? v : !1)
							: u(c)
							? (typeof i.onIgnore == 'function' && i.onIgnore(v), (v.isMatch = !1), d ? v : !1)
							: (typeof i.onMatch == 'function' && i.onMatch(v), d ? v : !0)
					)
				}
				return n && (l.state = a), l
			}
		nt.test = (e, t, n, { glob: r, posix: i } = {}) => {
			if (typeof e != 'string') throw new TypeError('Expected input to be a string')
			if (e === '') return { isMatch: !1, output: '' }
			let s = n || {},
				o = s.format || (i ? _m.toPosixSlashes : null),
				a = e === r,
				u = a && o ? o(e) : e
			return (
				a === !1 && ((u = o ? o(e) : e), (a = u === r)),
				(a === !1 || s.capture === !0) &&
					(s.matchBase === !0 || s.basename === !0
						? (a = nt.matchBase(e, t, n, i))
						: (a = t.exec(u))),
				{ isMatch: !!a, match: a, output: u }
			)
		}
		nt.matchBase = (e, t, n) => (t instanceof RegExp ? t : nt.makeRe(t, n)).test(_m.basename(e))
		nt.isMatch = (e, t, n) => nt(t, n)(e)
		nt.parse = (e, t) =>
			Array.isArray(e) ? e.map((n) => nt.parse(n, t)) : T1(e, { ...t, fastpaths: !1 })
		nt.scan = (e, t) => OD(e, t)
		nt.compileRe = (e, t, n = !1, r = !1) => {
			if (n === !0) return e.output
			let i = t || {},
				s = i.contains ? '' : '^',
				o = i.contains ? '' : '$',
				a = `${s}(?:${e.output})${o}`
			e && e.negated === !0 && (a = `^(?!${a}).*$`)
			let u = nt.toRegex(a, t)
			return r === !0 && (u.state = e), u
		}
		nt.makeRe = (e, t, n = !1, r = !1) => {
			if (!e || typeof e != 'string') throw new TypeError('Expected a non-empty string')
			let i = t || {},
				s = { negated: !1, fastpaths: !0 },
				o = '',
				a
			return (
				e.startsWith('./') && ((e = e.slice(2)), (o = s.prefix = './')),
				i.fastpaths !== !1 && (e[0] === '.' || e[0] === '*') && (a = T1.fastpaths(e, t)),
				a === void 0 ? ((s = T1(e, t)), (s.prefix = o + (s.prefix || ''))) : (s.output = a),
				nt.compileRe(s, t, n, r)
			)
		}
		nt.toRegex = (e, t) => {
			try {
				let n = t || {}
				return new RegExp(e, n.flags || (n.nocase ? 'i' : ''))
			} catch (n) {
				if (t && t.debug === !0) throw n
				return /$^/
			}
		}
		nt.constants = MD
		Nm.exports = nt
	})
	var Am = Kn((NR, Sm) => {
		'use strict'
		Sm.exports = Tm()
	})
	var J2 = {}
	a4(J2, {
		__debug: () => Y2,
		check: () => Q2,
		default: () => Hb,
		doc: () => ef,
		format: () => uf,
		formatWithCursor: () => af,
		getSupportInfo: () => z2,
		util: () => tf,
		version: () => W2
	})
	function t8(e) {
		let t = e.indexOf('\r')
		return t >= 0
			? e.charAt(t + 1) ===
			  `
`
				? 'crlf'
				: 'cr'
			: 'lf'
	}
	function G1(e) {
		switch (e) {
			case 'cr':
				return '\r'
			case 'crlf':
				return `\r
`
			default:
				return `
`
		}
	}
	function u2(e, t) {
		let n
		switch (t) {
			case `
`:
				n = /\n/g
				break
			case '\r':
				n = /\r/g
				break
			case `\r
`:
				n = /\r\n/g
				break
			default:
				throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
		}
		let r = e.match(n)
		return r ? r.length : 0
	}
	function n8(e) {
		return Bu(
			!1,
			e,
			/\r\n?/g,
			`
`
		)
	}
	function r8(e) {
		if (typeof e == 'string') return Jr
		if (Array.isArray(e)) return Hn
		if (!e) return
		let { type: t } = e
		if (l2.has(t)) return t
	}
	function s8(e) {
		let t = e === null ? 'null' : typeof e
		if (t !== 'string' && t !== 'object')
			return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`
		if (Kr(e)) throw new Error('doc is valid.')
		let n = Object.prototype.toString.call(e)
		if (n !== '[object Object]') return `Unexpected doc '${n}'.`
		let r = i8([...l2].map((i) => `'${i}'`))
		return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`
	}
	function a8(e, t, n, r) {
		let i = [e]
		for (; i.length > 0; ) {
			let s = i.pop()
			if (s === Cm) {
				n(i.pop())
				continue
			}
			n && i.push(s, Cm)
			let o = Kr(s)
			if (!o) throw new ls(s)
			if (t?.(s) !== !1)
				switch (o) {
					case Hn:
					case Fn: {
						let a = o === Hn ? s : s.parts
						for (let u = a.length, l = u - 1; l >= 0; --l) i.push(a[l])
						break
					}
					case Jt:
						i.push(s.flatContents, s.breakContents)
						break
					case $t:
						if (r && s.expandedStates)
							for (let a = s.expandedStates.length, u = a - 1; u >= 0; --u)
								i.push(s.expandedStates[u])
						else i.push(s.contents)
						break
					case Qn:
					case Wn:
					case Yn:
					case wn:
					case Jn:
						i.push(s.contents)
						break
					case Jr:
					case Xr:
					case zn:
					case Xn:
					case yt:
					case nn:
						break
					default:
						throw new ls(s)
				}
		}
	}
	function Ou(e) {
		return An(e), { type: Wn, contents: e }
	}
	function cs(e, t) {
		return An(t), { type: Qn, contents: t, n: e }
	}
	function f2(e, t = {}) {
		return (
			An(e),
			W1(t.expandedStates, !0),
			{ type: $t, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates }
		)
	}
	function u8(e) {
		return cs(Number.NEGATIVE_INFINITY, e)
	}
	function l8(e) {
		return cs({ type: 'root' }, e)
	}
	function c8(e) {
		return cs(-1, e)
	}
	function f8(e, t) {
		return f2(e[0], { ...t, expandedStates: e })
	}
	function d2(e) {
		return W1(e), { type: Fn, parts: e }
	}
	function d8(e, t = '', n = {}) {
		return (
			An(e), t !== '' && An(t), { type: Jt, breakContents: e, flatContents: t, groupId: n.groupId }
		)
	}
	function p8(e, t) {
		return An(e), { type: Yn, contents: e, groupId: t.groupId, negate: t.negate }
	}
	function O1(e) {
		return An(e), { type: Jn, contents: e }
	}
	function g2(e, t) {
		An(e), W1(t)
		let n = []
		for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r])
		return n
	}
	function D2(e, t, n) {
		An(e)
		let r = e
		if (t > 0) {
			for (let i = 0; i < Math.floor(t / n); ++i) r = Ou(r)
			;(r = cs(t % n, r)), (r = cs(Number.NEGATIVE_INFINITY, r))
		}
		return r
	}
	function D8(e, t) {
		return An(t), e ? { type: wn, label: e, contents: t } : t
	}
	function Gn(e) {
		var t
		if (!e) return ''
		if (Array.isArray(e)) {
			let n = []
			for (let r of e)
				if (Array.isArray(r)) n.push(...Gn(r))
				else {
					let i = Gn(r)
					i !== '' && n.push(i)
				}
			return n
		}
		return e.type === Jt
			? { ...e, breakContents: Gn(e.breakContents), flatContents: Gn(e.flatContents) }
			: e.type === $t
			? {
					...e,
					contents: Gn(e.contents),
					expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(Gn)
			  }
			: e.type === Fn
			? { type: 'fill', parts: e.parts.map(Gn) }
			: e.contents
			? { ...e, contents: Gn(e.contents) }
			: e
	}
	function v8(e) {
		let t = Object.create(null),
			n = new Set()
		return r(Gn(e))
		function r(s, o, a) {
			var u, l
			if (typeof s == 'string') return JSON.stringify(s)
			if (Array.isArray(s)) {
				let c = s.map(r).filter(Boolean)
				return c.length === 1 ? c[0] : `[${c.join(', ')}]`
			}
			if (s.type === yt) {
				let c = ((u = a?.[o + 1]) == null ? void 0 : u.type) === nn
				return s.literal
					? c
						? 'literalline'
						: 'literallineWithoutBreakParent'
					: s.hard
					? c
						? 'hardline'
						: 'hardlineWithoutBreakParent'
					: s.soft
					? 'softline'
					: 'line'
			}
			if (s.type === nn)
				return ((l = a?.[o - 1]) == null ? void 0 : l.type) === yt && a[o - 1].hard
					? void 0
					: 'breakParent'
			if (s.type === zn) return 'trim'
			if (s.type === Wn) return 'indent(' + r(s.contents) + ')'
			if (s.type === Qn)
				return s.n === Number.NEGATIVE_INFINITY
					? 'dedentToRoot(' + r(s.contents) + ')'
					: s.n < 0
					? 'dedent(' + r(s.contents) + ')'
					: s.n.type === 'root'
					? 'markAsRoot(' + r(s.contents) + ')'
					: 'align(' + JSON.stringify(s.n) + ', ' + r(s.contents) + ')'
			if (s.type === Jt)
				return (
					'ifBreak(' +
					r(s.breakContents) +
					(s.flatContents ? ', ' + r(s.flatContents) : '') +
					(s.groupId ? (s.flatContents ? '' : ', ""') + `, { groupId: ${i(s.groupId)} }` : '') +
					')'
				)
			if (s.type === Yn) {
				let c = []
				s.negate && c.push('negate: true'), s.groupId && c.push(`groupId: ${i(s.groupId)}`)
				let d = c.length > 0 ? `, { ${c.join(', ')} }` : ''
				return `indentIfBreak(${r(s.contents)}${d})`
			}
			if (s.type === $t) {
				let c = []
				s.break && s.break !== 'propagated' && c.push('shouldBreak: true'),
					s.id && c.push(`id: ${i(s.id)}`)
				let d = c.length > 0 ? `, { ${c.join(', ')} }` : ''
				return s.expandedStates
					? `conditionalGroup([${s.expandedStates.map((h) => r(h)).join(',')}]${d})`
					: `group(${r(s.contents)}${d})`
			}
			if (s.type === Fn) return `fill([${s.parts.map((c) => r(c)).join(', ')}])`
			if (s.type === Jn) return 'lineSuffix(' + r(s.contents) + ')'
			if (s.type === Xn) return 'lineSuffixBoundary'
			if (s.type === wn) return `label(${JSON.stringify(s.label)}, ${r(s.contents)})`
			throw new Error('Unknown doc type ' + s.type)
		}
		function i(s) {
			if (typeof s != 'symbol') return JSON.stringify(String(s))
			if (s in t) return t[s]
			let o = s.description || 'symbol'
			for (let a = 0; ; a++) {
				let u = o + (a > 0 ? ` #${a}` : '')
				if (!n.has(u)) return n.add(u), (t[s] = `Symbol.for(${JSON.stringify(u)})`)
			}
		}
	}
	function y8(e) {
		return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510)
	}
	function x8(e) {
		return (
			(e >= 4352 && e <= 4447) ||
			e === 8986 ||
			e === 8987 ||
			e === 9001 ||
			e === 9002 ||
			(e >= 9193 && e <= 9196) ||
			e === 9200 ||
			e === 9203 ||
			e === 9725 ||
			e === 9726 ||
			e === 9748 ||
			e === 9749 ||
			(e >= 9800 && e <= 9811) ||
			e === 9855 ||
			e === 9875 ||
			e === 9889 ||
			e === 9898 ||
			e === 9899 ||
			e === 9917 ||
			e === 9918 ||
			e === 9924 ||
			e === 9925 ||
			e === 9934 ||
			e === 9940 ||
			e === 9962 ||
			e === 9970 ||
			e === 9971 ||
			e === 9973 ||
			e === 9978 ||
			e === 9981 ||
			e === 9989 ||
			e === 9994 ||
			e === 9995 ||
			e === 10024 ||
			e === 10060 ||
			e === 10062 ||
			(e >= 10067 && e <= 10069) ||
			e === 10071 ||
			(e >= 10133 && e <= 10135) ||
			e === 10160 ||
			e === 10175 ||
			e === 11035 ||
			e === 11036 ||
			e === 11088 ||
			e === 11093 ||
			(e >= 11904 && e <= 11929) ||
			(e >= 11931 && e <= 12019) ||
			(e >= 12032 && e <= 12245) ||
			(e >= 12272 && e <= 12287) ||
			(e >= 12289 && e <= 12350) ||
			(e >= 12353 && e <= 12438) ||
			(e >= 12441 && e <= 12543) ||
			(e >= 12549 && e <= 12591) ||
			(e >= 12593 && e <= 12686) ||
			(e >= 12688 && e <= 12771) ||
			(e >= 12783 && e <= 12830) ||
			(e >= 12832 && e <= 12871) ||
			(e >= 12880 && e <= 19903) ||
			(e >= 19968 && e <= 42124) ||
			(e >= 42128 && e <= 42182) ||
			(e >= 43360 && e <= 43388) ||
			(e >= 44032 && e <= 55203) ||
			(e >= 63744 && e <= 64255) ||
			(e >= 65040 && e <= 65049) ||
			(e >= 65072 && e <= 65106) ||
			(e >= 65108 && e <= 65126) ||
			(e >= 65128 && e <= 65131) ||
			(e >= 94176 && e <= 94180) ||
			e === 94192 ||
			e === 94193 ||
			(e >= 94208 && e <= 100343) ||
			(e >= 100352 && e <= 101589) ||
			(e >= 101632 && e <= 101640) ||
			(e >= 110576 && e <= 110579) ||
			(e >= 110581 && e <= 110587) ||
			e === 110589 ||
			e === 110590 ||
			(e >= 110592 && e <= 110882) ||
			e === 110898 ||
			(e >= 110928 && e <= 110930) ||
			e === 110933 ||
			(e >= 110948 && e <= 110951) ||
			(e >= 110960 && e <= 111355) ||
			e === 126980 ||
			e === 127183 ||
			e === 127374 ||
			(e >= 127377 && e <= 127386) ||
			(e >= 127488 && e <= 127490) ||
			(e >= 127504 && e <= 127547) ||
			(e >= 127552 && e <= 127560) ||
			e === 127568 ||
			e === 127569 ||
			(e >= 127584 && e <= 127589) ||
			(e >= 127744 && e <= 127776) ||
			(e >= 127789 && e <= 127797) ||
			(e >= 127799 && e <= 127868) ||
			(e >= 127870 && e <= 127891) ||
			(e >= 127904 && e <= 127946) ||
			(e >= 127951 && e <= 127955) ||
			(e >= 127968 && e <= 127984) ||
			e === 127988 ||
			(e >= 127992 && e <= 128062) ||
			e === 128064 ||
			(e >= 128066 && e <= 128252) ||
			(e >= 128255 && e <= 128317) ||
			(e >= 128331 && e <= 128334) ||
			(e >= 128336 && e <= 128359) ||
			e === 128378 ||
			e === 128405 ||
			e === 128406 ||
			e === 128420 ||
			(e >= 128507 && e <= 128591) ||
			(e >= 128640 && e <= 128709) ||
			e === 128716 ||
			(e >= 128720 && e <= 128722) ||
			(e >= 128725 && e <= 128727) ||
			(e >= 128732 && e <= 128735) ||
			e === 128747 ||
			e === 128748 ||
			(e >= 128756 && e <= 128764) ||
			(e >= 128992 && e <= 129003) ||
			e === 129008 ||
			(e >= 129292 && e <= 129338) ||
			(e >= 129340 && e <= 129349) ||
			(e >= 129351 && e <= 129535) ||
			(e >= 129648 && e <= 129660) ||
			(e >= 129664 && e <= 129672) ||
			(e >= 129680 && e <= 129725) ||
			(e >= 129727 && e <= 129733) ||
			(e >= 129742 && e <= 129755) ||
			(e >= 129760 && e <= 129768) ||
			(e >= 129776 && e <= 129784) ||
			(e >= 131072 && e <= 196605) ||
			(e >= 196608 && e <= 262141)
		)
	}
	function T8(e) {
		if (!e) return 0
		if (!N8.test(e)) return e.length
		e = e.replace(E8(), '  ')
		let t = 0
		for (let n of e) {
			let r = n.codePointAt(0)
			r <= 31 || (r >= 127 && r <= 159) || (r >= 768 && r <= 879) || (t += _8(r) ? 1 : 2)
		}
		return t
	}
	function Uu(e, t) {
		if (typeof e == 'string') return t(e)
		let n = new Map()
		return r(e)
		function r(s) {
			if (n.has(s)) return n.get(s)
			let o = i(s)
			return n.set(s, o), o
		}
		function i(s) {
			switch (Kr(s)) {
				case Hn:
					return t(s.map(r))
				case Fn:
					return t({ ...s, parts: s.parts.map(r) })
				case Jt:
					return t({ ...s, breakContents: r(s.breakContents), flatContents: r(s.flatContents) })
				case $t: {
					let { expandedStates: o, contents: a } = s
					return (
						o ? ((o = o.map(r)), (a = o[0])) : (a = r(a)),
						t({ ...s, contents: a, expandedStates: o })
					)
				}
				case Qn:
				case Wn:
				case Yn:
				case wn:
				case Jn:
					return t({ ...s, contents: r(s.contents) })
				case Jr:
				case Xr:
				case zn:
				case Xn:
				case yt:
				case nn:
					return t(s)
				default:
					throw new ls(s)
			}
		}
	}
	function Y1(e, t, n) {
		let r = n,
			i = !1
		function s(o) {
			if (i) return !1
			let a = t(o)
			a !== void 0 && ((i = !0), (r = a))
		}
		return H1(e, s), r
	}
	function S8(e) {
		if ((e.type === $t && e.break) || (e.type === yt && e.hard) || e.type === nn) return !0
	}
	function A8(e) {
		return Y1(e, S8, !1)
	}
	function Im(e) {
		if (e.length > 0) {
			let t = gt(!1, e, -1)
			!t.expandedStates && !t.break && (t.break = 'propagated')
		}
		return null
	}
	function F8(e) {
		let t = new Set(),
			n = []
		function r(s) {
			if ((s.type === nn && Im(n), s.type === $t)) {
				if ((n.push(s), t.has(s))) return !1
				t.add(s)
			}
		}
		function i(s) {
			s.type === $t && n.pop().break && Im(n)
		}
		H1(e, r, i, !0)
	}
	function w8(e) {
		return e.type === yt && !e.hard ? (e.soft ? '' : ' ') : e.type === Jt ? e.flatContents : e
	}
	function L8(e) {
		return Uu(e, w8)
	}
	function Rm(e) {
		for (e = [...e]; e.length >= 2 && gt(!1, e, -2).type === yt && gt(!1, e, -1).type === nn; )
			e.length -= 2
		if (e.length > 0) {
			let t = bo(gt(!1, e, -1))
			e[e.length - 1] = t
		}
		return e
	}
	function bo(e) {
		switch (Kr(e)) {
			case Wn:
			case Yn:
			case $t:
			case Jn:
			case wn: {
				let t = bo(e.contents)
				return { ...e, contents: t }
			}
			case Jt:
				return { ...e, breakContents: bo(e.breakContents), flatContents: bo(e.flatContents) }
			case Fn:
				return { ...e, parts: Rm(e.parts) }
			case Hn:
				return Rm(e)
			case Jr:
				return e.replace(/[\n\r]*$/, '')
			case Qn:
			case Xr:
			case zn:
			case Xn:
			case yt:
			case nn:
				break
			default:
				throw new ls(e)
		}
		return e
	}
	function v2(e) {
		return bo(I8(e))
	}
	function C8(e) {
		switch (Kr(e)) {
			case Fn:
				if (e.parts.every((t) => t === '')) return ''
				break
			case $t:
				if (!e.contents && !e.id && !e.break && !e.expandedStates) return ''
				if (
					e.contents.type === $t &&
					e.contents.id === e.id &&
					e.contents.break === e.break &&
					e.contents.expandedStates === e.expandedStates
				)
					return e.contents
				break
			case Qn:
			case Wn:
			case Yn:
			case Jn:
				if (!e.contents) return ''
				break
			case Jt:
				if (!e.flatContents && !e.breakContents) return ''
				break
			case Hn: {
				let t = []
				for (let n of e) {
					if (!n) continue
					let [r, ...i] = Array.isArray(n) ? n : [n]
					typeof r == 'string' && typeof gt(!1, t, -1) == 'string'
						? (t[t.length - 1] += r)
						: t.push(r),
						t.push(...i)
				}
				return t.length === 0 ? '' : t.length === 1 ? t[0] : t
			}
			case Jr:
			case Xr:
			case zn:
			case Xn:
			case yt:
			case wn:
			case nn:
				break
			default:
				throw new ls(e)
		}
		return e
	}
	function I8(e) {
		return Uu(e, (t) => C8(t))
	}
	function R8(e, t = m2) {
		return Uu(e, (n) =>
			typeof n == 'string'
				? g2(
						t,
						n.split(`
`)
				  )
				: n
		)
	}
	function k8(e) {
		if (e.type === yt) return !0
	}
	function O8(e) {
		return Y1(e, k8, !1)
	}
	function b2(e, t) {
		return e.type === wn ? { ...e, contents: t(e.contents) } : t(e)
	}
	function E2() {
		return { value: '', length: 0, queue: [] }
	}
	function M8(e, t) {
		return P1(e, { type: 'indent' }, t)
	}
	function P8(e, t, n) {
		return t === Number.NEGATIVE_INFINITY
			? e.root || E2()
			: t < 0
			? P1(e, { type: 'dedent' }, n)
			: t
			? t.type === 'root'
				? { ...e, root: e }
				: P1(e, { type: typeof t == 'string' ? 'stringAlign' : 'numberAlign', n: t }, n)
			: e
	}
	function P1(e, t, n) {
		let r = t.type === 'dedent' ? e.queue.slice(0, -1) : [...e.queue, t],
			i = '',
			s = 0,
			o = 0,
			a = 0
		for (let g of r)
			switch (g.type) {
				case 'indent':
					c(), n.useTabs ? u(1) : l(n.tabWidth)
					break
				case 'stringAlign':
					c(), (i += g.n), (s += g.n.length)
					break
				case 'numberAlign':
					;(o += 1), (a += g.n)
					break
				default:
					throw new Error(`Unexpected type '${g.type}'`)
			}
		return h(), { ...e, value: i, length: s, queue: r }
		function u(g) {
			;(i += '	'.repeat(g)), (s += n.tabWidth * g)
		}
		function l(g) {
			;(i += ' '.repeat(g)), (s += g)
		}
		function c() {
			n.useTabs ? d() : h()
		}
		function d() {
			o > 0 && u(o), m()
		}
		function h() {
			a > 0 && l(a), m()
		}
		function m() {
			;(o = 0), (a = 0)
		}
	}
	function B1(e) {
		let t = 0,
			n = 0,
			r = e.length
		e: for (; r--; ) {
			let i = e[r]
			if (i === Eo) {
				n++
				continue
			}
			for (let s = i.length - 1; s >= 0; s--) {
				let o = i[s]
				if (o === ' ' || o === '	') t++
				else {
					e[r] = i.slice(0, s + 1)
					break e
				}
			}
		}
		if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Eo)
		return t
	}
	function Iu(e, t, n, r, i, s) {
		if (n === Number.POSITIVE_INFINITY) return !0
		let o = t.length,
			a = [e],
			u = []
		for (; n >= 0; ) {
			if (a.length === 0) {
				if (o === 0) return !0
				a.push(t[--o])
				continue
			}
			let { mode: l, doc: c } = a.pop(),
				d = Kr(c)
			switch (d) {
				case Jr:
					u.push(c), (n -= z1(c))
					break
				case Hn:
				case Fn: {
					let h = d === Hn ? c : c.parts
					for (let m = h.length - 1; m >= 0; m--) a.push({ mode: l, doc: h[m] })
					break
				}
				case Wn:
				case Qn:
				case Yn:
				case wn:
					a.push({ mode: l, doc: c.contents })
					break
				case zn:
					n += B1(u)
					break
				case $t: {
					if (s && c.break) return !1
					let h = c.break ? Ut : l,
						m = c.expandedStates && h === Ut ? gt(!1, c.expandedStates, -1) : c.contents
					a.push({ mode: h, doc: m })
					break
				}
				case Jt: {
					let h = (c.groupId ? i[c.groupId] || Sn : l) === Ut ? c.breakContents : c.flatContents
					h && a.push({ mode: l, doc: h })
					break
				}
				case yt:
					if (l === Ut || c.hard) return !0
					c.soft || (u.push(' '), n--)
					break
				case Jn:
					r = !0
					break
				case Xn:
					if (r) return !1
					break
			}
		}
		return !1
	}
	function $u(e, t) {
		let n = {},
			r = t.printWidth,
			i = G1(t.endOfLine),
			s = 0,
			o = [{ ind: E2(), mode: Ut, doc: e }],
			a = [],
			u = !1,
			l = [],
			c = 0
		for (F8(e); o.length > 0; ) {
			let { ind: h, mode: m, doc: g } = o.pop()
			switch (Kr(g)) {
				case Jr: {
					let v =
						i !==
						`
`
							? Bu(
									!1,
									g,
									`
`,
									i
							  )
							: g
					a.push(v), o.length > 0 && (s += z1(v))
					break
				}
				case Hn:
					for (let v = g.length - 1; v >= 0; v--) o.push({ ind: h, mode: m, doc: g[v] })
					break
				case Xr:
					if (c >= 2) throw new Error("There are too many 'cursor' in doc.")
					a.push(Eo), c++
					break
				case Wn:
					o.push({ ind: M8(h, t), mode: m, doc: g.contents })
					break
				case Qn:
					o.push({ ind: P8(h, g.n, t), mode: m, doc: g.contents })
					break
				case zn:
					s -= B1(a)
					break
				case $t:
					switch (m) {
						case Sn:
							if (!u) {
								o.push({ ind: h, mode: g.break ? Ut : Sn, doc: g.contents })
								break
							}
						case Ut: {
							u = !1
							let v = { ind: h, mode: Sn, doc: g.contents },
								N = r - s,
								_ = l.length > 0
							if (!g.break && Iu(v, o, N, _, n)) o.push(v)
							else if (g.expandedStates) {
								let w = gt(!1, g.expandedStates, -1)
								if (g.break) {
									o.push({ ind: h, mode: Ut, doc: w })
									break
								} else
									for (let C = 1; C < g.expandedStates.length + 1; C++)
										if (C >= g.expandedStates.length) {
											o.push({ ind: h, mode: Ut, doc: w })
											break
										} else {
											let S = g.expandedStates[C],
												k = { ind: h, mode: Sn, doc: S }
											if (Iu(k, o, N, _, n)) {
												o.push(k)
												break
											}
										}
							} else o.push({ ind: h, mode: Ut, doc: g.contents })
							break
						}
					}
					g.id && (n[g.id] = gt(!1, o, -1).mode)
					break
				case Fn: {
					let v = r - s,
						{ parts: N } = g
					if (N.length === 0) break
					let [_, w] = N,
						C = { ind: h, mode: Sn, doc: _ },
						S = { ind: h, mode: Ut, doc: _ },
						k = Iu(C, [], v, l.length > 0, n, !0)
					if (N.length === 1) {
						k ? o.push(C) : o.push(S)
						break
					}
					let M = { ind: h, mode: Sn, doc: w },
						I = { ind: h, mode: Ut, doc: w }
					if (N.length === 2) {
						k ? o.push(M, C) : o.push(I, S)
						break
					}
					N.splice(0, 2)
					let B = { ind: h, mode: m, doc: d2(N) },
						L = N[0]
					Iu({ ind: h, mode: Sn, doc: [_, w, L] }, [], v, l.length > 0, n, !0)
						? o.push(B, M, C)
						: k
						? o.push(B, I, C)
						: o.push(B, I, S)
					break
				}
				case Jt:
				case Yn: {
					let v = g.groupId ? n[g.groupId] : m
					if (v === Ut) {
						let N = g.type === Jt ? g.breakContents : g.negate ? g.contents : Ou(g.contents)
						N && o.push({ ind: h, mode: m, doc: N })
					}
					if (v === Sn) {
						let N = g.type === Jt ? g.flatContents : g.negate ? Ou(g.contents) : g.contents
						N && o.push({ ind: h, mode: m, doc: N })
					}
					break
				}
				case Jn:
					l.push({ ind: h, mode: m, doc: g.contents })
					break
				case Xn:
					l.length > 0 && o.push({ ind: h, mode: m, doc: Q1 })
					break
				case yt:
					switch (m) {
						case Sn:
							if (g.hard) u = !0
							else {
								g.soft || (a.push(' '), (s += 1))
								break
							}
						case Ut:
							if (l.length > 0) {
								o.push({ ind: h, mode: m, doc: g }, ...l.reverse()), (l.length = 0)
								break
							}
							g.literal
								? h.root
									? (a.push(i, h.root.value), (s = h.root.length))
									: (a.push(i), (s = 0))
								: ((s -= B1(a)), a.push(i + h.value), (s = h.length))
							break
					}
					break
				case wn:
					o.push({ ind: h, mode: m, doc: g.contents })
					break
				case nn:
					break
				default:
					throw new ls(g)
			}
			o.length === 0 && l.length > 0 && (o.push(...l.reverse()), (l.length = 0))
		}
		let d = a.indexOf(Eo)
		if (d !== -1) {
			let h = a.indexOf(Eo, d + 1),
				m = a.slice(0, d).join(''),
				g = a.slice(d + 1, h).join(''),
				v = a.slice(h + 1).join('')
			return { formatted: m + g + v, cursorNodeStart: m.length, cursorNodeText: g }
		}
		return { formatted: a.join('') }
	}
	function B8(e, t, n = 0) {
		let r = 0
		for (let i = n; i < e.length; ++i) e[i] === '	' ? (r = r + t - (r % t)) : r++
		return r
	}
	function $8(e) {
		return e !== null && typeof e == 'object'
	}
	function* x2(e, t) {
		let { getVisitorKeys: n, filter: r = () => !0 } = t,
			i = (s) => j8(s) && r(s)
		for (let s of n(e)) {
			let o = e[s]
			if (Array.isArray(o)) for (let a of o) i(a) && (yield a)
			else i(o) && (yield o)
		}
	}
	function* q8(e, t) {
		let n = [e]
		for (let r = 0; r < n.length; r++) {
			let i = n[r]
			for (let s of x2(i, t)) yield s, n.push(s)
		}
	}
	function _o(e) {
		return (t, n, r) => {
			let i = !!(r != null && r.backwards)
			if (n === !1) return !1
			let { length: s } = t,
				o = n
			for (; o >= 0 && o < s; ) {
				let a = t.charAt(o)
				if (e instanceof RegExp) {
					if (!e.test(a)) return o
				} else if (!e.includes(a)) return o
				i ? o-- : o++
			}
			return o === -1 || o === s ? o : !1
		}
	}
	function H8(e, t, n) {
		let r = !!(n != null && n.backwards)
		if (t === !1) return !1
		let i = e.charAt(t)
		if (r) {
			if (
				e.charAt(t - 1) === '\r' &&
				i ===
					`
`
			)
				return t - 2
			if (
				i ===
					`
` ||
				i === '\r' ||
				i === '\u2028' ||
				i === '\u2029'
			)
				return t - 1
		} else {
			if (
				i === '\r' &&
				e.charAt(t + 1) ===
					`
`
			)
				return t + 2
			if (
				i ===
					`
` ||
				i === '\r' ||
				i === '\u2028' ||
				i === '\u2029'
			)
				return t + 1
		}
		return t
	}
	function W8(e, t, n = {}) {
		let r = vr(e, n.backwards ? t - 1 : t, n),
			i = Yr(e, r, n)
		return r !== i
	}
	function Q8(e) {
		return Array.isArray(e) && e.length > 0
	}
	function J8(e) {
		return e ? (t) => e(t, T2) : Y8
	}
	function X8(e) {
		let t = e.type || e.kind || '(unknown type)',
			n = String(
				e.name ||
					(e.id && (typeof e.id == 'object' ? e.id.name : e.id)) ||
					(e.key && (typeof e.key == 'object' ? e.key.name : e.key)) ||
					(e.value && (typeof e.value == 'object' ? '' : String(e.value))) ||
					e.operator ||
					''
			)
		return n.length > 20 && (n = n.slice(0, 19) + '\u2026'), t + (n ? ' ' + n : '')
	}
	function X1(e, t) {
		;(e.comments ?? (e.comments = [])).push(t), (t.printed = !1), (t.nodeDescription = X8(e))
	}
	function ss(e, t) {
		;(t.leading = !0), (t.trailing = !1), X1(e, t)
	}
	function Wr(e, t, n) {
		;(t.leading = !1), (t.trailing = !1), n && (t.marker = n), X1(e, t)
	}
	function os(e, t) {
		;(t.leading = !1), (t.trailing = !0), X1(e, t)
	}
	function K1(e, t) {
		if (w1.has(e)) return w1.get(e)
		let {
			printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i },
			locStart: s,
			locEnd: o
		} = t
		if (!r) return []
		let a = (n?.(e, t) ?? [...x2(e, { getVisitorKeys: ju(i) })]).flatMap((u) =>
			r(u) ? [u] : K1(u, t)
		)
		return a.sort((u, l) => s(u) - s(l) || o(u) - o(l)), w1.set(e, a), a
	}
	function S2(e, t, n, r) {
		let { locStart: i, locEnd: s } = n,
			o = i(t),
			a = s(t),
			u = K1(e, n),
			l,
			c,
			d = 0,
			h = u.length
		for (; d < h; ) {
			let m = (d + h) >> 1,
				g = u[m],
				v = i(g),
				N = s(g)
			if (v <= o && a <= N) return S2(g, t, n, g)
			if (N <= o) {
				;(l = g), (d = m + 1)
				continue
			}
			if (a <= v) {
				;(c = g), (h = m)
				continue
			}
			throw new Error('Comment location overlaps with node location')
		}
		if (r?.type === 'TemplateLiteral') {
			let { quasis: m } = r,
				g = C1(m, t, n)
			l && C1(m, l, n) !== g && (l = null), c && C1(m, c, n) !== g && (c = null)
		}
		return { enclosingNode: r, precedingNode: l, followingNode: c }
	}
	function K8(e, t) {
		let { comments: n } = e
		if ((delete e.comments, !z8(n) || !t.printer.canAttachComment)) return
		let r = [],
			{
				locStart: i,
				locEnd: s,
				printer: {
					experimentalFeatures: { avoidAstMutation: o = !1 } = {},
					handleComments: a = {}
				},
				originalText: u
			} = t,
			{ ownLine: l = L1, endOfLine: c = L1, remaining: d = L1 } = a,
			h = n.map((m, g) => ({
				...S2(e, m, t),
				comment: m,
				text: u,
				options: t,
				ast: e,
				isLastComment: n.length - 1 === g
			}))
		for (let [m, g] of h.entries()) {
			let {
				comment: v,
				precedingNode: N,
				enclosingNode: _,
				followingNode: w,
				text: C,
				options: S,
				ast: k,
				isLastComment: M
			} = g
			if (
				S.parser === 'json' ||
				S.parser === 'json5' ||
				S.parser === 'jsonc' ||
				S.parser === '__js_expression' ||
				S.parser === '__ts_expression' ||
				S.parser === '__vue_expression' ||
				S.parser === '__vue_ts_expression'
			) {
				if (i(v) - i(k) <= 0) {
					ss(k, v)
					continue
				}
				if (s(v) - s(k) >= 0) {
					os(k, v)
					continue
				}
			}
			let I
			if (
				(o
					? (I = [g])
					: ((v.enclosingNode = _),
					  (v.precedingNode = N),
					  (v.followingNode = w),
					  (I = [v, C, S, k, M])),
				Z8(C, S, h, m))
			)
				(v.placement = 'ownLine'), l(...I) || (w ? ss(w, v) : N ? os(N, v) : Wr(_ || k, v))
			else if (ev(C, S, h, m))
				(v.placement = 'endOfLine'), c(...I) || (N ? os(N, v) : w ? ss(w, v) : Wr(_ || k, v))
			else if (((v.placement = 'remaining'), !d(...I)))
				if (N && w) {
					let B = r.length
					B > 0 && r[B - 1].followingNode !== w && km(r, S), r.push(g)
				} else N ? os(N, v) : w ? ss(w, v) : Wr(_ || k, v)
		}
		if ((km(r, t), !o))
			for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode
	}
	function Z8(e, t, n, r) {
		let { comment: i, precedingNode: s } = n[r],
			{ locStart: o, locEnd: a } = t,
			u = o(i)
		if (s)
			for (let l = r - 1; l >= 0; l--) {
				let { comment: c, precedingNode: d } = n[l]
				if (d !== s || !A2(e.slice(a(c), u))) break
				u = o(c)
			}
		return Dr(e, u, { backwards: !0 })
	}
	function ev(e, t, n, r) {
		let { comment: i, followingNode: s } = n[r],
			{ locStart: o, locEnd: a } = t,
			u = a(i)
		if (s)
			for (let l = r + 1; l < n.length; l++) {
				let { comment: c, followingNode: d } = n[l]
				if (d !== s || !A2(e.slice(u, o(c)))) break
				u = a(c)
			}
		return Dr(e, u)
	}
	function km(e, t) {
		var n, r
		let i = e.length
		if (i === 0) return
		let { precedingNode: s, followingNode: o } = e[0],
			a = t.locStart(o),
			u
		for (u = i; u > 0; --u) {
			let { comment: l, precedingNode: c, followingNode: d } = e[u - 1]
			U1.strictEqual(c, s), U1.strictEqual(d, o)
			let h = t.originalText.slice(t.locEnd(l), a)
			if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, h, t)) ?? /^[\s(]*$/.test(h))
				a = t.locStart(l)
			else break
		}
		for (let [l, { comment: c }] of e.entries()) l < u ? os(s, c) : ss(o, c)
		for (let l of [s, o])
			l.comments &&
				l.comments.length > 1 &&
				l.comments.sort((c, d) => t.locStart(c) - t.locStart(d))
		e.length = 0
	}
	function C1(e, t, n) {
		let r = n.locStart(t) - 1
		for (let i = 1; i < e.length; ++i) if (r < n.locStart(e[i])) return i - 1
		return 0
	}
	function tv(e, t) {
		let n = t - 1
		;(n = vr(e, n, { backwards: !0 })),
			(n = Yr(e, n, { backwards: !0 })),
			(n = vr(e, n, { backwards: !0 }))
		let r = Yr(e, n, { backwards: !0 })
		return n !== r
	}
	function F2(e, t) {
		let n = e.node
		return (n.printed = !0), t.printer.printComment(e, t)
	}
	function nv(e, t) {
		var n
		let r = e.node,
			i = [F2(e, t)],
			{ printer: s, originalText: o, locStart: a, locEnd: u } = t
		if ((n = s.isBlockComment) != null && n.call(s, r)) {
			let c = Dr(o, u(r)) ? (Dr(o, a(r), { backwards: !0 }) ? zr : h2) : ' '
			i.push(c)
		} else i.push(zr)
		let l = Yr(o, vr(o, u(r)))
		return l !== !1 && Dr(o, l) && i.push(zr), i
	}
	function rv(e, t, n) {
		var r
		let i = e.node,
			s = F2(e, t),
			{ printer: o, originalText: a, locStart: u } = t,
			l = (r = o.isBlockComment) == null ? void 0 : r.call(o, i)
		if (
			(n != null && n.hasLineSuffix && !(n != null && n.isBlock)) ||
			Dr(a, u(i), { backwards: !0 })
		) {
			let c = Z1(a, u(i))
			return { doc: O1([zr, c ? zr : '', s]), isBlock: l, hasLineSuffix: !0 }
		}
		return !l || (n != null && n.hasLineSuffix)
			? { doc: [O1([' ', s]), Vu], isBlock: l, hasLineSuffix: !0 }
			: { doc: [' ', s], isBlock: l, hasLineSuffix: !1 }
	}
	function iv(e, t) {
		let n = e.node
		if (!n) return {}
		let r = t[Symbol.for('printedComments')]
		if ((n.comments || []).filter((a) => !r.has(a)).length === 0)
			return { leading: '', trailing: '' }
		let i = [],
			s = [],
			o
		return (
			e.each(() => {
				let a = e.node
				if (r != null && r.has(a)) return
				let { leading: u, trailing: l } = a
				u ? i.push(nv(e, t)) : l && ((o = rv(e, t, o)), s.push(o.doc))
			}, 'comments'),
			{ leading: i, trailing: s }
		)
	}
	function sv(e, t, n) {
		let { leading: r, trailing: i } = iv(e, n)
		return !r && !i ? t : b2(t, (s) => [r, s, i])
	}
	function ov(e) {
		let { [Symbol.for('comments')]: t, [Symbol.for('printedComments')]: n } = e
		for (let r of t) {
			if (!r.printed && !n.has(r))
				throw new Error(
					'Comment "' + r.value.trim() + '" was not printed. Please report this error!'
				)
			delete r.printed
		}
	}
	function av(e) {
		return () => {}
	}
	function L2({ plugins: e = [], showDeprecated: t = !1 } = {}) {
		let n = e.flatMap((i) => i.languages ?? []),
			r = []
		for (let i of fv(Object.assign({}, ...e.map(({ options: s }) => s), lv)))
			(!t && i.deprecated) ||
				(Array.isArray(i.choices) &&
					(t || (i.choices = i.choices.filter((s) => !s.deprecated)),
					i.name === 'parser' && (i.choices = [...i.choices, ...cv(i.choices, n, e)])),
				(i.pluginDefaults = Object.fromEntries(
					e
						.filter((s) => {
							var o
							return ((o = s.defaultOptions) == null ? void 0 : o[i.name]) !== void 0
						})
						.map((s) => [s.name, s.defaultOptions[i.name]])
				)),
				r.push(i))
		return { languages: n, options: r }
	}
	function* cv(e, t, n) {
		let r = new Set(e.map((i) => i.value))
		for (let i of t)
			if (i.parsers) {
				for (let s of i.parsers)
					if (!r.has(s)) {
						r.add(s)
						let o = n.find((u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, s)),
							a = i.name
						o != null && o.name && (a += ` (plugin: ${o.name})`), yield { value: s, description: a }
					}
			}
	}
	function fv(e) {
		let t = []
		for (let [n, r] of Object.entries(e)) {
			let i = { name: n, ...r }
			Array.isArray(i.default) && (i.default = gt(!1, i.default, -1).value), t.push(i)
		}
		return t
	}
	function Mm(e, t) {
		if (!t) return
		let n = dv(t).toLowerCase()
		return (
			e.find(({ filenames: r }) => r?.some((i) => i.toLowerCase() === n)) ??
			e.find(({ extensions: r }) => r?.some((i) => n.endsWith(i)))
		)
	}
	function pv(e, t) {
		if (t)
			return (
				e.find(({ name: n }) => n.toLowerCase() === t) ??
				e.find(({ aliases: n }) => n?.includes(t)) ??
				e.find(({ extensions: n }) => n?.includes(`.${t}`))
			)
	}
	function hv(e, t) {
		let n = e.plugins.flatMap((i) => i.languages ?? []),
			r = pv(n, t.language) ?? Mm(n, t.physicalFile) ?? Mm(n, t.file) ?? (t.physicalFile, void 0)
		return r?.parsers[0]
	}
	function Vm(e, t, n, r) {
		return [
			`Invalid ${us.default.red(r.key(e))} value.`,
			`Expected ${us.default.blue(n)},`,
			`but received ${t === C2 ? us.default.gray('nothing') : us.default.red(r.value(t))}.`
		].join(' ')
	}
	function I2({ text: e, list: t }, n) {
		let r = []
		return (
			e && r.push(`- ${us.default.blue(e)}`),
			t &&
				r.push(
					[`- ${us.default.blue(t.title)}:`].concat(
						t.values.map((i) => I2(i, n - Bm.length).replace(/^|\n/g, `$&${Bm}`))
					).join(`
`)
				),
			R2(r, n)
		)
	}
	function R2(e, t) {
		if (e.length === 1) return e[0]
		let [n, r] = e,
			[i, s] = e.map(
				(o) =>
					o.split(
						`
`,
						1
					)[0].length
			)
		return i > t && i > s ? r : n
	}
	function vv(e, t) {
		if (e === t) return 0
		let n = e
		e.length > t.length && ((e = t), (t = n))
		let r = e.length,
			i = t.length
		for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i); ) r--, i--
		let s = 0
		for (; s < r && e.charCodeAt(s) === t.charCodeAt(s); ) s++
		if (((r -= s), (i -= s), r === 0)) return i
		let o,
			a,
			u,
			l,
			c = 0,
			d = 0
		for (; c < r; ) ($m[c] = e.charCodeAt(s + c)), (I1[c] = ++c)
		for (; d < i; )
			for (o = t.charCodeAt(s + d), u = d++, a = d, c = 0; c < r; c++)
				(l = o === $m[c] ? u : u + 1),
					(u = I1[c]),
					(a = I1[c] = u > a ? (l > a ? a + 1 : l) : l > u ? u + 1 : l)
		return a
	}
	function Ev(e, t) {
		let n = new e(t),
			r = Object.create(n)
		for (let i of bv) i in t && (r[i] = yv(t[i], n, br.prototype[i].length))
		return r
	}
	function yv(e, t, n) {
		return typeof e == 'function'
			? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1))
			: () => e
	}
	function jm({ from: e, to: t }) {
		return { from: [e], to: t }
	}
	function Sv(e, t) {
		let n = Object.create(null)
		for (let r of e) {
			let i = r[t]
			if (n[i]) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`)
			n[i] = r
		}
		return n
	}
	function Av(e, t) {
		let n = new Map()
		for (let r of e) {
			let i = r[t]
			if (n.has(i)) throw new Error(`Duplicate ${t} ${JSON.stringify(i)}`)
			n.set(i, r)
		}
		return n
	}
	function Fv() {
		let e = Object.create(null)
		return (t) => {
			let n = JSON.stringify(t)
			return e[n] ? !0 : ((e[n] = !0), !1)
		}
	}
	function wv(e, t) {
		let n = [],
			r = []
		for (let i of e) t(i) ? n.push(i) : r.push(i)
		return [n, r]
	}
	function Lv(e) {
		return e === Math.floor(e)
	}
	function Cv(e, t) {
		if (e === t) return 0
		let n = typeof e,
			r = typeof t,
			i = ['undefined', 'object', 'boolean', 'number', 'string']
		return n !== r
			? i.indexOf(n) - i.indexOf(r)
			: n !== 'string'
			? Number(e) - Number(t)
			: e.localeCompare(t)
	}
	function Iv(e) {
		return (...t) => {
			let n = e(...t)
			return typeof n == 'string' ? new Error(n) : n
		}
	}
	function qm(e) {
		return e === void 0 ? {} : e
	}
	function O2(e) {
		if (typeof e == 'string') return { text: e }
		let { text: t, list: n } = e
		return (
			Rv((t || n) !== void 0, 'Unexpected `expected` result, there should be at least one field.'),
			n ? { text: t, list: { title: n.title, values: n.values.map(O2) } } : { text: t }
		)
	}
	function Gm(e, t) {
		return e === !0 ? !0 : e === !1 ? { value: t } : e
	}
	function Hm(e, t, n = !1) {
		return e === !1
			? !1
			: e === !0
			? n
				? !0
				: [{ value: t }]
			: 'value' in e
			? [e]
			: e.length === 0
			? !1
			: e
	}
	function Wm(e, t) {
		return typeof e == 'string' || 'key' in e
			? { from: t, to: e }
			: 'from' in e
			? { from: e.from, to: e.to }
			: { from: t, to: e.to }
	}
	function $1(e, t) {
		return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => Wm(n, t)) : [Wm(e, t)]
	}
	function Qm(e, t) {
		let n = $1(typeof e == 'object' && 'redirect' in e ? e.redirect : e, t)
		return n.length === 0
			? { remain: t, redirect: n }
			: typeof e == 'object' && 'remain' in e
			? { remain: e.remain, redirect: n }
			: { redirect: n }
	}
	function Rv(e, t) {
		if (!e) throw new Error(t)
	}
	function jv(
		e,
		t,
		{ logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: s, descriptor: o } = {}
	) {
		if (r) {
			if (!s) throw new Error("'FlagSchema' option is required.")
			if (!o) throw new Error("'descriptor' option is required.")
		} else o = as
		let a = i
				? Array.isArray(i)
					? (h, m) => (i.includes(h) ? { [h]: m } : void 0)
					: (h, m) => ({ [h]: m })
				: (h, m, g) => {
						let { _: v, ...N } = g.schemas
						return k2(h, m, { ...g, schemas: N })
				  },
			u = qv(t, { isCLI: r, FlagSchema: s }),
			l = new $v(u, { logger: n, unknown: a, descriptor: o }),
			c = n !== !1
		c && R1 && (l._hasDeprecationWarned = R1)
		let d = l.normalize(e)
		return c && (R1 = l._hasDeprecationWarned), d
	}
	function qv(e, { isCLI: t, FlagSchema: n }) {
		let r = []
		t && r.push(_v.create({ name: '_' }))
		for (let i of e)
			r.push(Gv(i, { isCLI: t, optionInfos: e, FlagSchema: n })),
				i.alias && t && r.push(xv.create({ name: i.alias, sourceName: i.name }))
		return r
	}
	function Gv(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
		let { name: i } = e,
			s = { name: i },
			o,
			a = {}
		switch (e.type) {
			case 'int':
				;(o = Mv), t && (s.preprocess = Number)
				break
			case 'string':
				o = zm
				break
			case 'choice':
				;(o = kv),
					(s.choices = e.choices.map((u) =>
						u != null && u.redirect
							? { ...u, redirect: { to: { key: e.name, value: u.redirect } } }
							: u
					))
				break
			case 'boolean':
				o = Tv
				break
			case 'flag':
				;(o = r),
					(s.flags = n.flatMap((u) =>
						[u.alias, u.description && u.name, u.oppositeDescription && `no-${u.name}`].filter(
							Boolean
						)
					))
				break
			case 'path':
				o = zm
				break
			default:
				throw new Error(`Unexpected type ${e.type}`)
		}
		if (
			(e.exception
				? (s.validate = (u, l, c) => e.exception(u) || l.validate(u, c))
				: (s.validate = (u, l, c) => u === void 0 || l.validate(u, c)),
			e.redirect &&
				(a.redirect = (u) =>
					u
						? {
								to:
									typeof e.redirect == 'string'
										? e.redirect
										: { key: e.redirect.option, value: e.redirect.value }
						  }
						: void 0),
			e.deprecated && (a.deprecated = !0),
			t && !e.array)
		) {
			let u = s.preprocess || ((l) => l)
			s.preprocess = (l, c, d) => c.preprocess(u(Array.isArray(l) ? gt(!1, l, -1) : l), d)
		}
		return e.array
			? Nv.create({
					...(t ? { preprocess: (u) => (Array.isArray(u) ? u : [u]) } : {}),
					...a,
					valueSchema: o.create(s)
			  })
			: o.create({ ...s, ...a })
	}
	function P2(e, t) {
		if (!t) throw new Error('parserName is required.')
		let n = M2(!1, e, (i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, t))
		if (n) return n
		let r = `Couldn't resolve parser "${t}".`
		throw ((r += ' Plugins must be explicitly added to the standalone bundle.'), new w2(r))
	}
	function Qv(e, t) {
		if (!t) throw new Error('astFormat is required.')
		let n = M2(!1, e, (i) => i.printers && Object.prototype.hasOwnProperty.call(i.printers, t))
		if (n) return n
		let r = `Couldn't find plugin for AST format "${t}".`
		throw ((r += ' Plugins must be explicitly added to the standalone bundle.'), new w2(r))
	}
	function B2({ plugins: e, parser: t }) {
		let n = P2(e, t)
		return V2(n, t)
	}
	function V2(e, t) {
		let n = e.parsers[t]
		return typeof n == 'function' ? n() : n
	}
	function zv(e, t) {
		let n = e.printers[t]
		return typeof n == 'function' ? n() : n
	}
	async function Yv(e, t = {}) {
		var n
		let r = { ...e }
		if (!r.parser)
			if (r.filepath) {
				if (((r.parser = mv(r, { physicalFile: r.filepath })), !r.parser))
					throw new Om(`No parser could be inferred for file "${r.filepath}".`)
			} else throw new Om("No parser and no file path given, couldn't infer a parser.")
		let i = L2({ plugins: e.plugins, showDeprecated: !0 }).options,
			s = {
				...Ym,
				...Object.fromEntries(i.filter((h) => h.default !== void 0).map((h) => [h.name, h.default]))
			},
			o = P2(r.plugins, r.parser),
			a = await V2(o, r.parser)
		;(r.astFormat = a.astFormat), (r.locEnd = a.locEnd), (r.locStart = a.locStart)
		let u = (n = o.printers) != null && n[a.astFormat] ? o : Qv(r.plugins, a.astFormat),
			l = await zv(u, a.astFormat)
		r.printer = l
		let c = u.defaultOptions
				? Object.fromEntries(Object.entries(u.defaultOptions).filter(([, h]) => h !== void 0))
				: {},
			d = { ...s, ...c }
		for (let [h, m] of Object.entries(d)) (r[h] === null || r[h] === void 0) && (r[h] = m)
		return (
			r.parser === 'json' && (r.trailingComma = 'none'),
			Hv(r, i, { passThrough: Object.keys(Ym), ...t })
		)
	}
	async function Xv(e, t) {
		let n = await B2(t),
			r = n.preprocess ? n.preprocess(e, t) : e
		t.originalText = r
		let i
		try {
			i = await n.parse(r, t, t)
		} catch (s) {
			Kv(s, e)
		}
		return { text: r, ast: i }
	}
	function Kv(e, t) {
		let { loc: n } = e
		if (n) {
			let r = (0, Jv.codeFrameColumns)(t, n, { highlightCode: !0 })
			throw (
				((e.message +=
					`
` + r),
				(e.codeFrame = r),
				e)
			)
		}
		throw e
	}
	async function Zv(e, t, n, r, i) {
		let {
			embeddedLanguageFormatting: s,
			printer: { embed: o, hasPrettierIgnore: a = () => !1, getVisitorKeys: u }
		} = n
		if (!o || s !== 'auto') return
		if (o.length > 2)
			throw new Error(
				'printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed'
			)
		let l = ju(o.getVisitorKeys ?? u),
			c = []
		m()
		let d = e.stack
		for (let { print: g, node: v, pathStack: N } of c)
			try {
				e.stack = N
				let _ = await g(h, t, e, n)
				_ && i.set(v, _)
			} catch (_) {
				if (globalThis.PRETTIER_DEBUG) throw _
			}
		e.stack = d
		function h(g, v) {
			return eb(g, v, n, r)
		}
		function m() {
			let { node: g } = e
			if (g === null || typeof g != 'object' || a(e)) return
			for (let N of l(g)) Array.isArray(g[N]) ? e.each(m, N) : e.call(m, N)
			let v = o(e, n)
			if (v) {
				if (typeof v == 'function') {
					c.push({ print: v, node: g, pathStack: [...e.stack] })
					return
				}
				i.set(g, v)
			}
		}
	}
	async function eb(e, t, n, r) {
		let i = await fs({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }),
			{ ast: s } = await No(e, i),
			o = await r(s, i)
		return v2(o)
	}
	function tb(e, t) {
		let {
				originalText: n,
				[Symbol.for('comments')]: r,
				locStart: i,
				locEnd: s,
				[Symbol.for('printedComments')]: o
			} = t,
			{ node: a } = e,
			u = i(a),
			l = s(a)
		for (let c of r) i(c) >= u && s(c) <= l && o.add(c)
		return n.slice(u, l)
	}
	async function qu(e, t) {
		;({ ast: e } = await U2(e, t))
		let n = new Map(),
			r = new U8(e),
			i = uv(t),
			s = new Map()
		await Zv(r, a, t, qu, s)
		let o = await Jm(r, t, a, void 0, s)
		return ov(t), o
		function a(l, c) {
			return l === void 0 || l === r
				? u(c)
				: Array.isArray(l)
				? r.call(() => u(c), ...l)
				: r.call(() => u(c), l)
		}
		function u(l) {
			i(r)
			let c = r.node
			if (c == null) return ''
			let d = c && typeof c == 'object' && l === void 0
			if (d && n.has(c)) return n.get(c)
			let h = Jm(r, t, a, l, s)
			return d && n.set(c, h), h
		}
	}
	function Jm(e, t, n, r, i) {
		var s
		let { node: o } = e,
			{ printer: a } = t,
			u
		return (
			(s = a.hasPrettierIgnore) != null && s.call(a, e)
				? (u = nb(e, t))
				: i.has(o)
				? (u = i.get(o))
				: (u = a.print(e, t, n, r)),
			o === t.cursorNode && (u = b2(u, (l) => [M1, l, M1])),
			a.printComment &&
				(!a.willPrintOwnComments || !a.willPrintOwnComments(e, t)) &&
				(u = sv(e, u, t)),
			u
		)
	}
	async function U2(e, t) {
		let n = e.comments ?? []
		;(t[Symbol.for('comments')] = n),
			(t[Symbol.for('tokens')] = e.tokens ?? []),
			(t[Symbol.for('printedComments')] = new Set()),
			K8(e, t)
		let {
			printer: { preprocess: r }
		} = t
		return (e = r ? await r(e, t) : e), { ast: e, comments: n }
	}
	function rb(e, t) {
		let { cursorOffset: n, locStart: r, locEnd: i } = t,
			s = ju(t.printer.getVisitorKeys),
			o = (u) => r(u) <= n && i(u) >= n,
			a = e
		for (let u of q8(e, { getVisitorKeys: s, filter: o })) a = u
		return a
	}
	function sb(e, t) {
		let {
			printer: { massageAstNode: n, getVisitorKeys: r }
		} = t
		if (!n) return e
		let i = ju(r),
			s = n.ignoredProperties ?? new Set()
		return o(e)
		function o(a, u) {
			if (!(a !== null && typeof a == 'object')) return a
			if (Array.isArray(a)) return a.map((h) => o(h, u)).filter(Boolean)
			let l = {},
				c = new Set(i(a))
			for (let h in a)
				!Object.prototype.hasOwnProperty.call(a, h) ||
					s.has(h) ||
					(c.has(h) ? (l[h] = o(a[h], a)) : (l[h] = a[h]))
			let d = n(a, l, u)
			if (d !== null) return d ?? l
		}
	}
	function ub(e, t) {
		let n = [e.node, ...e.parentNodes],
			r = new Set([t.node, ...t.parentNodes])
		return n.find((i) => $2.has(i.type) && r.has(i))
	}
	function Xm(e) {
		let t = e.length - 1
		for (;;) {
			let n = e[t]
			if (n?.type === 'Program' || n?.type === 'File') t--
			else break
		}
		return e.slice(0, t + 1)
	}
	function lb(e, t, { locStart: n, locEnd: r }) {
		let i = e.node,
			s = t.node
		if (i === s) return { startNode: i, endNode: s }
		let o = n(e.node)
		for (let u of Xm(t.parentNodes))
			if (n(u) >= o) s = u
			else break
		let a = r(t.node)
		for (let u of Xm(e.parentNodes)) {
			if (r(u) <= a) i = u
			else break
			if (i === s) break
		}
		return { startNode: i, endNode: s }
	}
	function j1(e, t, n, r, i = [], s) {
		let { locStart: o, locEnd: a } = n,
			u = o(e),
			l = a(e)
		if (!(t > l || t < u || (s === 'rangeEnd' && t === u) || (s === 'rangeStart' && t === l))) {
			for (let c of K1(e, n)) {
				let d = j1(c, t, n, r, [e, ...i], s)
				if (d) return d
			}
			if (!r || r(e, i[0])) return { node: e, parentNodes: i }
		}
	}
	function cb(e, t) {
		return (
			t !== 'DeclareExportDeclaration' &&
			e !== 'TypeParameterDeclaration' &&
			(e === 'Directive' ||
				e === 'TypeAlias' ||
				e === 'TSExportAssignment' ||
				e.startsWith('Declare') ||
				e.startsWith('TSDeclare') ||
				e.endsWith('Statement') ||
				e.endsWith('Declaration'))
		)
	}
	function Km(e, t, n) {
		if (!t) return !1
		switch (e.parser) {
			case 'flow':
			case 'babel':
			case 'babel-flow':
			case 'babel-ts':
			case 'typescript':
			case 'acorn':
			case 'espree':
			case 'meriyah':
			case '__babel_estree':
				return cb(t.type, n?.type)
			case 'json':
			case 'json5':
			case 'jsonc':
			case 'json-stringify':
				return $2.has(t.type)
			case 'graphql':
				return fb.has(t.kind)
			case 'vue':
				return t.tag !== 'root'
		}
		return !1
	}
	function db(e, t, n) {
		let { rangeStart: r, rangeEnd: i, locStart: s, locEnd: o } = t
		U1.ok(i > r)
		let a = e.slice(r, i).search(/\S/),
			u = a === -1
		if (!u) for (r += a; i > r && !/\S/.test(e[i - 1]); --i);
		let l = j1(n, r, t, (m, g) => Km(t, m, g), [], 'rangeStart'),
			c = u ? l : j1(n, i, t, (m) => Km(t, m), [], 'rangeEnd')
		if (!l || !c) return { rangeStart: 0, rangeEnd: 0 }
		let d, h
		if (ab(t)) {
			let m = ub(l, c)
			;(d = m), (h = m)
		} else ({ startNode: d, endNode: h } = lb(l, c, t))
		return { rangeStart: Math.min(s(d), s(h)), rangeEnd: Math.max(o(d), o(h)) }
	}
	async function q2(e, t, n = 0) {
		if (!e || e.trim().length === 0) return { formatted: '', cursorOffset: -1, comments: [] }
		let { ast: r, text: i } = await No(e, t)
		t.cursorOffset >= 0 && (t.cursorNode = ib(r, t))
		let s = await qu(r, t, n)
		n > 0 && (s = D2([zr, s], n, t.tabWidth))
		let o = $u(s, t)
		if (n > 0) {
			let u = o.formatted.trim()
			o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(u)),
				(o.formatted = u + G1(t.endOfLine))
		}
		let a = t[Symbol.for('comments')]
		if (t.cursorOffset >= 0) {
			let u, l, c, d, h
			if (
				(t.cursorNode && o.cursorNodeText
					? ((u = t.locStart(t.cursorNode)),
					  (l = i.slice(u, t.locEnd(t.cursorNode))),
					  (c = t.cursorOffset - u),
					  (d = o.cursorNodeStart),
					  (h = o.cursorNodeText))
					: ((u = 0), (l = i), (c = t.cursorOffset), (d = 0), (h = o.formatted)),
				l === h)
			)
				return { formatted: o.formatted, cursorOffset: d + c, comments: a }
			let m = l.split('')
			m.splice(c, 0, Zm)
			let g = h.split(''),
				v = (0, e8.diffArrays)(m, g),
				N = d
			for (let _ of v)
				if (_.removed) {
					if (_.value.includes(Zm)) break
				} else N += _.count
			return { formatted: o.formatted, cursorOffset: N, comments: a }
		}
		return { formatted: o.formatted, cursorOffset: -1, comments: a }
	}
	async function pb(e, t) {
		let { ast: n, text: r } = await No(e, t),
			{ rangeStart: i, rangeEnd: s } = db(r, t, n),
			o = r.slice(i, s),
			a = Math.min(
				i,
				r.lastIndexOf(
					`
`,
					i
				) + 1
			),
			u = r.slice(a, i).match(/^\s*/)[0],
			l = J1(u, t.tabWidth),
			c = await q2(
				o,
				{
					...t,
					rangeStart: 0,
					rangeEnd: Number.POSITIVE_INFINITY,
					cursorOffset: t.cursorOffset > i && t.cursorOffset <= s ? t.cursorOffset - i : -1,
					endOfLine: 'lf'
				},
				l
			),
			d = c.formatted.trimEnd(),
			{ cursorOffset: h } = t
		h > s ? (h += d.length - o.length) : c.cursorOffset >= 0 && (h = c.cursorOffset + i)
		let m = r.slice(0, i) + d + r.slice(s)
		if (t.endOfLine !== 'lf') {
			let g = G1(t.endOfLine)
			h >= 0 &&
				g ===
					`\r
` &&
				(h += u2(
					m.slice(0, h),
					`
`
				)),
				(m = Bu(
					!1,
					m,
					`
`,
					g
				))
		}
		return { formatted: m, cursorOffset: h, comments: c.comments }
	}
	function k1(e, t, n) {
		return typeof t != 'number' || Number.isNaN(t) || t < 0 || t > e.length ? n : t
	}
	function e2(e, t) {
		let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t
		return (
			(n = k1(e, n, -1)),
			(r = k1(e, r, 0)),
			(i = k1(e, i, e.length)),
			{ ...t, cursorOffset: n, rangeStart: r, rangeEnd: i }
		)
	}
	function G2(e, t) {
		let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: s } = e2(e, t),
			o = e.charAt(0) === j2
		if ((o && ((e = e.slice(1)), n--, r--, i--), s === 'auto' && (s = t8(e)), e.includes('\r'))) {
			let a = (u) =>
				u2(
					e.slice(0, Math.max(u, 0)),
					`\r
`
				)
			;(n -= a(n)), (r -= a(r)), (i -= a(i)), (e = n8(e))
		}
		return {
			hasBOM: o,
			text: e,
			options: e2(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: s })
		}
	}
	async function t2(e, t) {
		let n = await B2(t)
		return !n.hasPragma || n.hasPragma(e)
	}
	async function H2(e, t) {
		let { hasBOM: n, text: r, options: i } = G2(e, await fs(t))
		if ((i.rangeStart >= i.rangeEnd && r !== '') || (i.requirePragma && !(await t2(r, i))))
			return { formatted: e, cursorOffset: t.cursorOffset, comments: [] }
		let s
		return (
			i.rangeStart > 0 || i.rangeEnd < r.length
				? (s = await pb(r, i))
				: (!i.requirePragma &&
						i.insertPragma &&
						i.printer.insertPragma &&
						!(await t2(r, i)) &&
						(r = i.printer.insertPragma(r)),
				  (s = await q2(r, i))),
			n && ((s.formatted = j2 + s.formatted), s.cursorOffset >= 0 && s.cursorOffset++),
			s
		)
	}
	async function hb(e, t, n) {
		let { text: r, options: i } = G2(e, await fs(t)),
			s = await No(r, i)
		return (
			n &&
				(n.preprocessForPrint && (s.ast = await U2(s.ast, i)), n.massage && (s.ast = ob(s.ast, i))),
			s
		)
	}
	async function mb(e, t) {
		t = await fs(t)
		let n = await qu(e, t)
		return $u(n, t)
	}
	async function gb(e, t) {
		let n = v8(e),
			{ formatted: r } = await H2(n, { ...t, parser: '__js_expression' })
		return r
	}
	async function Db(e, t) {
		t = await fs(t)
		let { ast: n } = await No(e, t)
		return qu(n, t)
	}
	async function vb(e, t) {
		return $u(e, await fs(t))
	}
	function xb(e, t) {
		if (t === !1) return !1
		if (e.charAt(t) === '/' && e.charAt(t + 1) === '*') {
			for (let n = t + 2; n < e.length; ++n)
				if (e.charAt(n) === '*' && e.charAt(n + 1) === '/') return n + 2
		}
		return t
	}
	function _b(e, t) {
		return t === !1 ? !1 : e.charAt(t) === '/' && e.charAt(t + 1) === '/' ? N2(e, t) : t
	}
	function Nb(e, t) {
		let n = null,
			r = t
		for (; r !== n; ) (n = r), (r = vr(e, r)), (r = nf(e, r)), (r = rf(e, r)), (r = Yr(e, r))
		return r
	}
	function Tb(e, t) {
		let n = null,
			r = t
		for (; r !== n; ) (n = r), (r = _2(e, r)), (r = nf(e, r)), (r = vr(e, r))
		return (r = rf(e, r)), (r = Yr(e, r)), r !== !1 && Dr(e, r)
	}
	function Sb(e, t) {
		let n = e.lastIndexOf(`
`)
		return n === -1 ? 0 : J1(e.slice(n + 1).match(/^[\t ]*/)[0], t)
	}
	function Fb(e) {
		if (typeof e != 'string') throw new TypeError('Expected a string')
		return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
	}
	function wb(e, t) {
		let n = e.match(new RegExp(`(${Fb(t)})+`, 'g'))
		return n === null ? 0 : n.reduce((r, i) => Math.max(r, i.length / t.length), 0)
	}
	function Cb(e, t) {
		let n = sf(e, t)
		return n === !1 ? '' : e.charAt(n)
	}
	function Rb(e, t, n) {
		for (let r = t; r < n; ++r)
			if (
				e.charAt(r) ===
				`
`
			)
				return !0
		return !1
	}
	function Ob(e, t, n = {}) {
		return vr(e, n.backwards ? t - 1 : t, n) !== t
	}
	function Pb(e, t, n) {
		let r = t === '"' ? "'" : '"',
			i = Bu(!1, e, /\\(.)|(["'])/gs, (s, o, a) =>
				o === r
					? o
					: a === t
					? '\\' + a
					: a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(o) ? o : '\\' + o)
			)
		return t + i + t
	}
	function Vb(e, t, n) {
		return sf(e, n(t))
	}
	function Ub(e, t) {
		return arguments.length === 2 || typeof t == 'number' ? sf(e, t) : Vb(...arguments)
	}
	function $b(e, t, n) {
		return Z1(e, n(t))
	}
	function jb(e, t) {
		return arguments.length === 2 || typeof t == 'number' ? Z1(e, t) : $b(...arguments)
	}
	function qb(e, t, n) {
		return of(e, n(t))
	}
	function Gb(e, t) {
		return arguments.length === 2 || typeof t == 'number' ? of(e, t) : qb(...arguments)
	}
	function Qr(e, t = 1) {
		return async (...n) => {
			let r = n[t] ?? {},
				i = r.plugins ?? []
			return (n[t] = { ...r, plugins: Array.isArray(i) ? i : Object.values(i) }), e(...n)
		}
	}
	async function uf(e, t) {
		let { formatted: n } = await af(e, { ...t, cursorOffset: -1 })
		return n
	}
	async function Q2(e, t) {
		return (await uf(e, t)) === e
	}
	var VD,
		Mu,
		UD,
		$D,
		jD,
		qD,
		n2,
		GD,
		yo,
		Pu,
		r2,
		xo,
		HD,
		WD,
		QD,
		vo,
		zD,
		YD,
		q1,
		i2,
		s2,
		o2,
		JD,
		XD,
		KD,
		a2,
		ZD,
		Bu,
		e8,
		Jr,
		Hn,
		Xr,
		Wn,
		Qn,
		zn,
		$t,
		Fn,
		Jt,
		Yn,
		Jn,
		Xn,
		yt,
		wn,
		nn,
		l2,
		Kr,
		i8,
		o8,
		ls,
		Cm,
		H1,
		c2,
		An,
		W1,
		h8,
		Vu,
		m8,
		Q1,
		p2,
		h2,
		g8,
		zr,
		m2,
		M1,
		b8,
		gt,
		E8,
		_8,
		N8,
		z1,
		Ut,
		Sn,
		Eo,
		J1,
		Hr,
		V1,
		Ru,
		V8,
		U8,
		y2,
		U1,
		j8,
		G8,
		vr,
		_2,
		N2,
		Yr,
		Dr,
		z8,
		T2,
		Y8,
		ju,
		w1,
		L1,
		A2,
		Z1,
		uv,
		w2,
		Om,
		lv,
		dv,
		mv,
		as,
		Pm,
		gv,
		us,
		C2,
		ku,
		Bm,
		Dv,
		Um,
		I1,
		$m,
		k2,
		bv,
		br,
		xv,
		_v,
		Nv,
		Tv,
		kv,
		Ov,
		Mv,
		zm,
		Pv,
		Bv,
		Vv,
		Uv,
		$v,
		R1,
		Hv,
		Wv,
		M2,
		Ym,
		fs,
		Jv,
		No,
		nb,
		ib,
		ob,
		ab,
		$2,
		fb,
		j2,
		Zm,
		ef,
		bb,
		Eb,
		yb,
		W2,
		tf,
		nf,
		rf,
		sf,
		of,
		Ab,
		Lb,
		Ib,
		kb,
		Mb,
		Bb,
		af,
		z2,
		Y2,
		Hb,
		X2 = o4(() => {
			;(VD = Object.create),
				(Mu = Object.defineProperty),
				(UD = Object.getOwnPropertyDescriptor),
				($D = Object.getOwnPropertyNames),
				(jD = Object.getPrototypeOf),
				(qD = Object.prototype.hasOwnProperty),
				(n2 = (e) => {
					throw TypeError(e)
				}),
				(GD = (e, t) => () => (e && (t = e((e = 0))), t)),
				(yo = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports)),
				(Pu = (e, t) => {
					for (var n in t) Mu(e, n, { get: t[n], enumerable: !0 })
				}),
				(r2 = (e, t, n, r) => {
					if ((t && typeof t == 'object') || typeof t == 'function')
						for (let i of $D(t))
							!qD.call(e, i) &&
								i !== n &&
								Mu(e, i, { get: () => t[i], enumerable: !(r = UD(t, i)) || r.enumerable })
					return e
				}),
				(xo = (e, t, n) => (
					(n = e != null ? VD(jD(e)) : {}),
					r2(t || !e || !e.__esModule ? Mu(n, 'default', { value: e, enumerable: !0 }) : n, e)
				)),
				(HD = (e) => r2(Mu({}, '__esModule', { value: !0 }), e)),
				(WD = (e, t, n) => t.has(e) || n2('Cannot ' + n)),
				(QD = (e, t, n) =>
					t.has(e)
						? n2('Cannot add the same private member more than once')
						: t instanceof WeakSet
						? t.add(e)
						: t.set(e, n)),
				(vo = (e, t, n) => (WD(e, t, 'access private method'), n)),
				(zD = yo((e) => {
					'use strict'
					Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t)
					function t() {}
					t.prototype = {
						diff: function (r, i) {
							var s,
								o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
								a = o.callback
							typeof o == 'function' && ((a = o), (o = {})), (this.options = o)
							var u = this
							function l(M) {
								return a
									? (setTimeout(function () {
											a(void 0, M)
									  }, 0),
									  !0)
									: M
							}
							;(r = this.castInput(r)),
								(i = this.castInput(i)),
								(r = this.removeEmpty(this.tokenize(r))),
								(i = this.removeEmpty(this.tokenize(i)))
							var c = i.length,
								d = r.length,
								h = 1,
								m = c + d
							o.maxEditLength && (m = Math.min(m, o.maxEditLength))
							var g = (s = o.timeout) !== null && s !== void 0 ? s : 1 / 0,
								v = Date.now() + g,
								N = [{ oldPos: -1, lastComponent: void 0 }],
								_ = this.extractCommon(N[0], i, r, 0)
							if (N[0].oldPos + 1 >= d && _ + 1 >= c)
								return l([{ value: this.join(i), count: i.length }])
							var w = -1 / 0,
								C = 1 / 0
							function S() {
								for (var M = Math.max(w, -h); M <= Math.min(C, h); M += 2) {
									var I = void 0,
										B = N[M - 1],
										L = N[M + 1]
									B && (N[M - 1] = void 0)
									var A = !1
									if (L) {
										var X = L.oldPos - M
										A = L && 0 <= X && X < c
									}
									var z = B && B.oldPos + 1 < d
									if (!A && !z) {
										N[M] = void 0
										continue
									}
									if (
										(!z || (A && B.oldPos + 1 < L.oldPos)
											? (I = u.addToPath(L, !0, void 0, 0))
											: (I = u.addToPath(B, void 0, !0, 1)),
										(_ = u.extractCommon(I, i, r, M)),
										I.oldPos + 1 >= d && _ + 1 >= c)
									)
										return l(n(u, I.lastComponent, i, r, u.useLongestToken))
									;(N[M] = I),
										I.oldPos + 1 >= d && (C = Math.min(C, M - 1)),
										_ + 1 >= c && (w = Math.max(w, M + 1))
								}
								h++
							}
							if (a)
								(function M() {
									setTimeout(function () {
										if (h > m || Date.now() > v) return a()
										S() || M()
									}, 0)
								})()
							else
								for (; h <= m && Date.now() <= v; ) {
									var k = S()
									if (k) return k
								}
						},
						addToPath: function (r, i, s, o) {
							var a = r.lastComponent
							return a && a.added === i && a.removed === s
								? {
										oldPos: r.oldPos + o,
										lastComponent: {
											count: a.count + 1,
											added: i,
											removed: s,
											previousComponent: a.previousComponent
										}
								  }
								: {
										oldPos: r.oldPos + o,
										lastComponent: { count: 1, added: i, removed: s, previousComponent: a }
								  }
						},
						extractCommon: function (r, i, s, o) {
							for (
								var a = i.length, u = s.length, l = r.oldPos, c = l - o, d = 0;
								c + 1 < a && l + 1 < u && this.equals(i[c + 1], s[l + 1]);

							)
								c++, l++, d++
							return (
								d && (r.lastComponent = { count: d, previousComponent: r.lastComponent }),
								(r.oldPos = l),
								c
							)
						},
						equals: function (r, i) {
							return this.options.comparator
								? this.options.comparator(r, i)
								: r === i || (this.options.ignoreCase && r.toLowerCase() === i.toLowerCase())
						},
						removeEmpty: function (r) {
							for (var i = [], s = 0; s < r.length; s++) r[s] && i.push(r[s])
							return i
						},
						castInput: function (r) {
							return r
						},
						tokenize: function (r) {
							return r.split('')
						},
						join: function (r) {
							return r.join('')
						}
					}
					function n(r, i, s, o, a) {
						for (var u = [], l; i; )
							u.push(i), (l = i.previousComponent), delete i.previousComponent, (i = l)
						u.reverse()
						for (var c = 0, d = u.length, h = 0, m = 0; c < d; c++) {
							var g = u[c]
							if (g.removed) {
								if (
									((g.value = r.join(o.slice(m, m + g.count))), (m += g.count), c && u[c - 1].added)
								) {
									var v = u[c - 1]
									;(u[c - 1] = u[c]), (u[c] = v)
								}
							} else {
								if (!g.added && a) {
									var N = s.slice(h, h + g.count)
									;(N = N.map(function (w, C) {
										var S = o[m + C]
										return S.length > w.length ? S : w
									})),
										(g.value = r.join(N))
								} else g.value = r.join(s.slice(h, h + g.count))
								;(h += g.count), g.added || (m += g.count)
							}
						}
						var _ = u[d - 1]
						return (
							d > 1 &&
								typeof _.value == 'string' &&
								(_.added || _.removed) &&
								r.equals('', _.value) &&
								((u[d - 2].value += _.value), u.pop()),
							u
						)
					}
				})),
				(YD = yo((e) => {
					'use strict'
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.diffArrays = i),
						(e.arrayDiff = void 0)
					var t = n(zD())
					function n(s) {
						return s && s.__esModule ? s : { default: s }
					}
					var r = new t.default()
					;(e.arrayDiff = r),
						(r.tokenize = function (s) {
							return s.slice()
						}),
						(r.join = r.removeEmpty =
							function (s) {
								return s
							})
					function i(s, o, a) {
						return r.diff(s, o, a)
					}
				})),
				(q1 = yo((e, t) => {
					'use strict'
					var n = new Proxy(String, { get: () => n })
					t.exports = n
				})),
				(i2 = {})
			Pu(i2, { default: () => o2, shouldHighlight: () => s2 })
			;(JD = GD(() => {
				;(s2 = () => !1), (o2 = String)
			})),
				(XD = yo((e, t) => {
					var n = String,
						r = function () {
							return {
								isColorSupported: !1,
								reset: n,
								bold: n,
								dim: n,
								italic: n,
								underline: n,
								inverse: n,
								hidden: n,
								strikethrough: n,
								black: n,
								red: n,
								green: n,
								yellow: n,
								blue: n,
								magenta: n,
								cyan: n,
								white: n,
								gray: n,
								bgBlack: n,
								bgRed: n,
								bgGreen: n,
								bgYellow: n,
								bgBlue: n,
								bgMagenta: n,
								bgCyan: n,
								bgWhite: n
							}
						}
					;(t.exports = r()), (t.exports.createColors = r)
				})),
				(KD = yo((e) => {
					'use strict'
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.codeFrameColumns = m),
						(e.default = g)
					var t = (JD(), HD(i2)),
						n = i(XD(), !0)
					function r(v) {
						if (typeof WeakMap != 'function') return null
						var N = new WeakMap(),
							_ = new WeakMap()
						return (r = function (w) {
							return w ? _ : N
						})(v)
					}
					function i(v, N) {
						if (!N && v && v.__esModule) return v
						if (v === null || (typeof v != 'object' && typeof v != 'function'))
							return { default: v }
						var _ = r(N)
						if (_ && _.has(v)) return _.get(v)
						var w = { __proto__: null },
							C = Object.defineProperty && Object.getOwnPropertyDescriptor
						for (var S in v)
							if (S !== 'default' && {}.hasOwnProperty.call(v, S)) {
								var k = C ? Object.getOwnPropertyDescriptor(v, S) : null
								k && (k.get || k.set) ? Object.defineProperty(w, S, k) : (w[S] = v[S])
							}
						return (w.default = v), _ && _.set(v, w), w
					}
					var s = n.default,
						o = (v, N) => (_) => v(N(_)),
						a
					function u(v) {
						if (v) {
							var N
							return (N = a) != null || (a = (0, n.createColors)(!0)), a
						}
						return s
					}
					var l = !1
					function c(v) {
						return { gutter: v.gray, marker: o(v.red, v.bold), message: o(v.red, v.bold) }
					}
					var d = /\r\n|[\n\r\u2028\u2029]/
					function h(v, N, _) {
						let w = Object.assign({ column: 0, line: -1 }, v.start),
							C = Object.assign({}, w, v.end),
							{ linesAbove: S = 2, linesBelow: k = 3 } = _ || {},
							M = w.line,
							I = w.column,
							B = C.line,
							L = C.column,
							A = Math.max(M - (S + 1), 0),
							X = Math.min(N.length, B + k)
						M === -1 && (A = 0), B === -1 && (X = N.length)
						let z = B - M,
							fe = {}
						if (z)
							for (let F = 0; F <= z; F++) {
								let T = F + M
								if (!I) fe[T] = !0
								else if (F === 0) {
									let Q = N[T - 1].length
									fe[T] = [I, Q - I + 1]
								} else if (F === z) fe[T] = [0, L]
								else {
									let Q = N[T - F].length
									fe[T] = [0, Q]
								}
							}
						else I === L ? (I ? (fe[M] = [I, 0]) : (fe[M] = !0)) : (fe[M] = [I, L - I])
						return { start: A, end: X, markerLines: fe }
					}
					function m(v, N, _ = {}) {
						let w = (_.highlightCode || _.forceColor) && (0, t.shouldHighlight)(_),
							C = u(_.forceColor),
							S = c(C),
							k = (fe, F) => (w ? fe(F) : F),
							M = v.split(d),
							{ start: I, end: B, markerLines: L } = h(N, M, _),
							A = N.start && typeof N.start.column == 'number',
							X = String(B).length,
							z = (w ? (0, t.default)(v, _) : v)
								.split(d, B)
								.slice(I, B)
								.map((fe, F) => {
									let T = I + 1 + F,
										Q = ` ${` ${T}`.slice(-X)} |`,
										$ = L[T],
										ee = !L[T + 1]
									if ($) {
										let ne = ''
										if (Array.isArray($)) {
											let se = fe.slice(0, Math.max($[0] - 1, 0)).replace(/[^\t]/g, ' '),
												Ie = $[1] || 1
											;(ne = [
												`
 `,
												k(S.gutter, Q.replace(/\d/g, ' ')),
												' ',
												se,
												k(S.marker, '^').repeat(Ie)
											].join('')),
												ee && _.message && (ne += ' ' + k(S.message, _.message))
										}
										return [
											k(S.marker, '>'),
											k(S.gutter, Q),
											fe.length > 0 ? ` ${fe}` : '',
											ne
										].join('')
									} else return ` ${k(S.gutter, Q)}${fe.length > 0 ? ` ${fe}` : ''}`
								}).join(`
`)
						return (
							_.message &&
								!A &&
								(z = `${' '.repeat(X + 1)}${_.message}
${z}`),
							w ? C.reset(z) : z
						)
					}
					function g(v, N, _, w = {}) {
						if (!l) {
							l = !0
							let C =
								'Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.'
							{
								let S = new Error(C)
								;(S.name = 'DeprecationWarning'), console.warn(new Error(C))
							}
						}
						return (_ = Math.max(_, 0)), m(v, { start: { column: _, line: N } }, w)
					}
				})),
				(a2 = {})
			Pu(a2, {
				__debug: () => Y2,
				check: () => Q2,
				doc: () => ef,
				format: () => uf,
				formatWithCursor: () => af,
				getSupportInfo: () => z2,
				util: () => tf,
				version: () => W2
			})
			;(ZD = (e, t, n, r) => {
				if (!(e && t == null))
					return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r)
			}),
				(Bu = ZD),
				(e8 = xo(YD(), 1))
			;(Jr = 'string'),
				(Hn = 'array'),
				(Xr = 'cursor'),
				(Wn = 'indent'),
				(Qn = 'align'),
				(zn = 'trim'),
				($t = 'group'),
				(Fn = 'fill'),
				(Jt = 'if-break'),
				(Yn = 'indent-if-break'),
				(Jn = 'line-suffix'),
				(Xn = 'line-suffix-boundary'),
				(yt = 'line'),
				(wn = 'label'),
				(nn = 'break-parent'),
				(l2 = new Set([Xr, Wn, Qn, zn, $t, Fn, Jt, Yn, Jn, Xn, yt, wn, nn]))
			;(Kr = r8), (i8 = (e) => new Intl.ListFormat('en-US', { type: 'disjunction' }).format(e))
			;(o8 = class extends Error {
				name = 'InvalidDocError'
				constructor(e) {
					super(s8(e)), (this.doc = e)
				}
			}),
				(ls = o8),
				(Cm = {})
			;(H1 = a8), (c2 = () => {}), (An = c2), (W1 = c2)
			;(h8 = { type: Xn }),
				(Vu = { type: nn }),
				(m8 = { type: zn }),
				(Q1 = { type: yt, hard: !0 }),
				(p2 = { type: yt, hard: !0, literal: !0 }),
				(h2 = { type: yt }),
				(g8 = { type: yt, soft: !0 }),
				(zr = [Q1, Vu]),
				(m2 = [p2, Vu]),
				(M1 = { type: Xr })
			;(b8 = (e, t, n) => {
				if (!(e && t == null))
					return Array.isArray(t) || typeof t == 'string' ? t[n < 0 ? t.length + n : n] : t.at(n)
			}),
				(gt = b8),
				(E8 = () =>
					/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g)
			;(_8 = (e) => !(y8(e) || x8(e))), (N8 = /[^\x20-\x7F]/)
			z1 = T8
			;(Ut = Symbol('MODE_BREAK')), (Sn = Symbol('MODE_FLAT')), (Eo = Symbol('cursor'))
			;(J1 = B8),
				(V8 = class {
					constructor(e) {
						QD(this, Hr), (this.stack = [e])
					}
					get key() {
						let { stack: e, siblings: t } = this
						return gt(!1, e, t === null ? -2 : -4) ?? null
					}
					get index() {
						return this.siblings === null ? null : gt(!1, this.stack, -2)
					}
					get node() {
						return gt(!1, this.stack, -1)
					}
					get parent() {
						return this.getNode(1)
					}
					get grandparent() {
						return this.getNode(2)
					}
					get isInArray() {
						return this.siblings !== null
					}
					get siblings() {
						let { stack: e } = this,
							t = gt(!1, e, -3)
						return Array.isArray(t) ? t : null
					}
					get next() {
						let { siblings: e } = this
						return e === null ? null : e[this.index + 1]
					}
					get previous() {
						let { siblings: e } = this
						return e === null ? null : e[this.index - 1]
					}
					get isFirst() {
						return this.index === 0
					}
					get isLast() {
						let { siblings: e, index: t } = this
						return e !== null && t === e.length - 1
					}
					get isRoot() {
						return this.stack.length === 1
					}
					get root() {
						return this.stack[0]
					}
					get ancestors() {
						return [...vo(this, Hr, Ru).call(this)]
					}
					getName() {
						let { stack: e } = this,
							{ length: t } = e
						return t > 1 ? gt(!1, e, -2) : null
					}
					getValue() {
						return gt(!1, this.stack, -1)
					}
					getNode(e = 0) {
						let t = vo(this, Hr, V1).call(this, e)
						return t === -1 ? null : this.stack[t]
					}
					getParentNode(e = 0) {
						return this.getNode(e + 1)
					}
					call(e, ...t) {
						let { stack: n } = this,
							{ length: r } = n,
							i = gt(!1, n, -1)
						for (let s of t) (i = i[s]), n.push(s, i)
						try {
							return e(this)
						} finally {
							n.length = r
						}
					}
					callParent(e, t = 0) {
						let n = vo(this, Hr, V1).call(this, t + 1),
							r = this.stack.splice(n + 1)
						try {
							return e(this)
						} finally {
							this.stack.push(...r)
						}
					}
					each(e, ...t) {
						let { stack: n } = this,
							{ length: r } = n,
							i = gt(!1, n, -1)
						for (let s of t) (i = i[s]), n.push(s, i)
						try {
							for (let s = 0; s < i.length; ++s) n.push(s, i[s]), e(this, s, i), (n.length -= 2)
						} finally {
							n.length = r
						}
					}
					map(e, ...t) {
						let n = []
						return (
							this.each((r, i, s) => {
								n[i] = e(r, i, s)
							}, ...t),
							n
						)
					}
					match(...e) {
						let t = this.stack.length - 1,
							n = null,
							r = this.stack[t--]
						for (let i of e) {
							if (r === void 0) return !1
							let s = null
							if (
								(typeof n == 'number' && ((s = n), (n = this.stack[t--]), (r = this.stack[t--])),
								i && !i(r, n, s))
							)
								return !1
							;(n = this.stack[t--]), (r = this.stack[t--])
						}
						return !0
					}
					findAncestor(e) {
						for (let t of vo(this, Hr, Ru).call(this)) if (e(t)) return t
					}
					hasAncestor(e) {
						for (let t of vo(this, Hr, Ru).call(this)) if (e(t)) return !0
						return !1
					}
				})
			;(Hr = new WeakSet()),
				(V1 = function (e) {
					let { stack: t } = this
					for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n
					return -1
				}),
				(Ru = function* () {
					let { stack: e } = this
					for (let t = e.length - 3; t >= 0; t -= 2) {
						let n = e[t]
						Array.isArray(n) || (yield n)
					}
				})
			;(U8 = V8), (y2 = new Proxy(() => {}, { get: () => y2 })), (U1 = y2)
			j8 = $8
			;(G8 = _o(/\s/)), (vr = _o(' 	')), (_2 = _o(',; 	')), (N2 = _o(/[^\n\r]/))
			Yr = H8
			Dr = W8
			;(z8 = Q8),
				(T2 = new Set([
					'tokens',
					'comments',
					'parent',
					'enclosingNode',
					'precedingNode',
					'followingNode'
				])),
				(Y8 = (e) => Object.keys(e).filter((t) => !T2.has(t)))
			ju = J8
			w1 = new WeakMap()
			L1 = () => !1
			A2 = (e) => !/[\S\n\u2028\u2029]/.test(e)
			Z1 = tv
			;(uv = av),
				(w2 = class extends Error {
					name = 'ConfigError'
				}),
				(Om = class extends Error {
					name = 'UndefinedParserError'
				}),
				(lv = {
					cursorOffset: {
						category: 'Special',
						type: 'int',
						default: -1,
						range: { start: -1, end: 1 / 0, step: 1 },
						description:
							'Print (to stderr) where a cursor at the given position would move to after formatting.',
						cliCategory: 'Editor'
					},
					endOfLine: {
						category: 'Global',
						type: 'choice',
						default: 'lf',
						description: 'Which end of line characters to apply.',
						choices: [
							{
								value: 'lf',
								description:
									'Line Feed only (\\n), common on Linux and macOS as well as inside git repos'
							},
							{
								value: 'crlf',
								description: 'Carriage Return + Line Feed characters (\\r\\n), common on Windows'
							},
							{
								value: 'cr',
								description: 'Carriage Return character only (\\r), used very rarely'
							},
							{
								value: 'auto',
								description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
							}
						]
					},
					filepath: {
						category: 'Special',
						type: 'path',
						description: 'Specify the input filepath. This will be used to do parser inference.',
						cliName: 'stdin-filepath',
						cliCategory: 'Other',
						cliDescription: 'Path to the file to pretend that stdin comes from.'
					},
					insertPragma: {
						category: 'Special',
						type: 'boolean',
						default: !1,
						description: "Insert @format pragma into file's first docblock comment.",
						cliCategory: 'Other'
					},
					parser: {
						category: 'Global',
						type: 'choice',
						default: void 0,
						description: 'Which parser to use.',
						exception: (e) => typeof e == 'string' || typeof e == 'function',
						choices: [
							{ value: 'flow', description: 'Flow' },
							{ value: 'babel', description: 'JavaScript' },
							{ value: 'babel-flow', description: 'Flow' },
							{ value: 'babel-ts', description: 'TypeScript' },
							{ value: 'typescript', description: 'TypeScript' },
							{ value: 'acorn', description: 'JavaScript' },
							{ value: 'espree', description: 'JavaScript' },
							{ value: 'meriyah', description: 'JavaScript' },
							{ value: 'css', description: 'CSS' },
							{ value: 'less', description: 'Less' },
							{ value: 'scss', description: 'SCSS' },
							{ value: 'json', description: 'JSON' },
							{ value: 'json5', description: 'JSON5' },
							{ value: 'jsonc', description: 'JSON with Comments' },
							{ value: 'json-stringify', description: 'JSON.stringify' },
							{ value: 'graphql', description: 'GraphQL' },
							{ value: 'markdown', description: 'Markdown' },
							{ value: 'mdx', description: 'MDX' },
							{ value: 'vue', description: 'Vue' },
							{ value: 'yaml', description: 'YAML' },
							{ value: 'glimmer', description: 'Ember / Handlebars' },
							{ value: 'html', description: 'HTML' },
							{ value: 'angular', description: 'Angular' },
							{ value: 'lwc', description: 'Lightning Web Components' }
						]
					},
					plugins: {
						type: 'path',
						array: !0,
						default: [{ value: [] }],
						category: 'Global',
						description: 'Add a plugin. Multiple plugins can be passed as separate `--plugin`s.',
						exception: (e) => typeof e == 'string' || typeof e == 'object',
						cliName: 'plugin',
						cliCategory: 'Config'
					},
					printWidth: {
						category: 'Global',
						type: 'int',
						default: 80,
						description: 'The line length where Prettier will try wrap.',
						range: { start: 0, end: 1 / 0, step: 1 }
					},
					rangeEnd: {
						category: 'Special',
						type: 'int',
						default: 1 / 0,
						range: { start: 0, end: 1 / 0, step: 1 },
						description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
						cliCategory: 'Editor'
					},
					rangeStart: {
						category: 'Special',
						type: 'int',
						default: 0,
						range: { start: 0, end: 1 / 0, step: 1 },
						description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
						cliCategory: 'Editor'
					},
					requirePragma: {
						category: 'Special',
						type: 'boolean',
						default: !1,
						description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
						cliCategory: 'Other'
					},
					tabWidth: {
						type: 'int',
						category: 'Global',
						default: 2,
						description: 'Number of spaces per indentation level.',
						range: { start: 0, end: 1 / 0, step: 1 }
					},
					useTabs: {
						category: 'Global',
						type: 'boolean',
						default: !1,
						description: 'Indent with tabs instead of spaces.'
					},
					embeddedLanguageFormatting: {
						category: 'Global',
						type: 'choice',
						default: 'auto',
						description: 'Control how Prettier formats quoted code embedded in the file.',
						choices: [
							{
								value: 'auto',
								description: 'Format embedded code if Prettier can automatically identify it.'
							},
							{ value: 'off', description: 'Never automatically format embedded code.' }
						]
					}
				})
			dv = (e) => String(e).split(/[/\\]/).pop()
			;(mv = hv),
				(as = {
					key: (e) => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e)),
					value(e) {
						if (e === null || typeof e != 'object') return JSON.stringify(e)
						if (Array.isArray(e)) return `[${e.map((n) => as.value(n)).join(', ')}]`
						let t = Object.keys(e)
						return t.length === 0
							? '{}'
							: `{ ${t.map((n) => `${as.key(n)}: ${as.value(e[n])}`).join(', ')} }`
					},
					pair: ({ key: e, value: t }) => as.value({ [e]: t })
				}),
				(Pm = xo(q1(), 1)),
				(gv = (e, t, { descriptor: n }) => {
					let r = [
						`${Pm.default.yellow(typeof e == 'string' ? n.key(e) : n.pair(e))} is deprecated`
					]
					return (
						t &&
							r.push(
								`we now treat it as ${Pm.default.blue(typeof t == 'string' ? n.key(t) : n.pair(t))}`
							),
						r.join('; ') + '.'
					)
				}),
				(us = xo(q1(), 1)),
				(C2 = Symbol.for('vnopts.VALUE_NOT_EXIST')),
				(ku = Symbol.for('vnopts.VALUE_UNCHANGED')),
				(Bm = ' '.repeat(2)),
				(Dv = (e, t, n) => {
					let { text: r, list: i } = n.normalizeExpectedResult(n.schemas[e].expected(n)),
						s = []
					return (
						r && s.push(Vm(e, t, r, n.descriptor)),
						i &&
							s.push(
								[Vm(e, t, i.title, n.descriptor)].concat(
									i.values.map((o) => I2(o, n.loggerPrintWidth))
								).join(`
`)
							),
						R2(s, n.loggerPrintWidth)
					)
				})
			;(Um = xo(q1(), 1)), (I1 = []), ($m = [])
			;(k2 = (e, t, { descriptor: n, logger: r, schemas: i }) => {
				let s = [`Ignored unknown option ${Um.default.yellow(n.pair({ key: e, value: t }))}.`],
					o = Object.keys(i)
						.sort()
						.find((a) => vv(e, a) < 3)
				o && s.push(`Did you mean ${Um.default.blue(n.key(o))}?`), r.warn(s.join(' '))
			}),
				(bv = [
					'default',
					'expected',
					'validate',
					'deprecated',
					'forward',
					'redirect',
					'overlap',
					'preprocess',
					'postprocess'
				])
			br = class {
				static create(e) {
					return Ev(this, e)
				}
				constructor(e) {
					this.name = e.name
				}
				default(e) {}
				expected(e) {
					return 'nothing'
				}
				validate(e, t) {
					return !1
				}
				deprecated(e, t) {
					return !1
				}
				forward(e, t) {}
				redirect(e, t) {}
				overlap(e, t, n) {
					return e
				}
				preprocess(e, t) {
					return e
				}
				postprocess(e, t) {
					return ku
				}
			}
			;(xv = class extends br {
				constructor(e) {
					super(e), (this._sourceName = e.sourceName)
				}
				expected(e) {
					return e.schemas[this._sourceName].expected(e)
				}
				validate(e, t) {
					return t.schemas[this._sourceName].validate(e, t)
				}
				redirect(e, t) {
					return this._sourceName
				}
			}),
				(_v = class extends br {
					expected() {
						return 'anything'
					}
					validate() {
						return !0
					}
				}),
				(Nv = class extends br {
					constructor({ valueSchema: e, name: t = e.name, ...n }) {
						super({ ...n, name: t }), (this._valueSchema = e)
					}
					expected(e) {
						let { text: t, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e))
						return {
							text: t && `an array of ${t}`,
							list: n && { title: 'an array of the following values', values: [{ list: n }] }
						}
					}
					validate(e, t) {
						if (!Array.isArray(e)) return !1
						let n = []
						for (let r of e) {
							let i = t.normalizeValidateResult(this._valueSchema.validate(r, t), r)
							i !== !0 && n.push(i.value)
						}
						return n.length === 0 ? !0 : { value: n }
					}
					deprecated(e, t) {
						let n = []
						for (let r of e) {
							let i = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r)
							i !== !1 && n.push(...i.map(({ value: s }) => ({ value: [s] })))
						}
						return n
					}
					forward(e, t) {
						let n = []
						for (let r of e) {
							let i = t.normalizeForwardResult(this._valueSchema.forward(r, t), r)
							n.push(...i.map(jm))
						}
						return n
					}
					redirect(e, t) {
						let n = [],
							r = []
						for (let i of e) {
							let s = t.normalizeRedirectResult(this._valueSchema.redirect(i, t), i)
							'remain' in s && n.push(s.remain), r.push(...s.redirect.map(jm))
						}
						return n.length === 0 ? { redirect: r } : { redirect: r, remain: n }
					}
					overlap(e, t) {
						return e.concat(t)
					}
				})
			Tv = class extends br {
				expected() {
					return 'true or false'
				}
				validate(e) {
					return typeof e == 'boolean'
				}
			}
			;(kv = class extends br {
				constructor(e) {
					super(e),
						(this._choices = Av(
							e.choices.map((t) => (t && typeof t == 'object' ? t : { value: t })),
							'value'
						))
				}
				expected({ descriptor: e }) {
					let t = Array.from(this._choices.keys())
							.map((i) => this._choices.get(i))
							.filter(({ hidden: i }) => !i)
							.map((i) => i.value)
							.sort(Cv)
							.map(e.value),
						n = t.slice(0, -2),
						r = t.slice(-2)
					return {
						text: n.concat(r.join(' or ')).join(', '),
						list: { title: 'one of the following values', values: t }
					}
				}
				validate(e) {
					return this._choices.has(e)
				}
				deprecated(e) {
					let t = this._choices.get(e)
					return t && t.deprecated ? { value: e } : !1
				}
				forward(e) {
					let t = this._choices.get(e)
					return t ? t.forward : void 0
				}
				redirect(e) {
					let t = this._choices.get(e)
					return t ? t.redirect : void 0
				}
			}),
				(Ov = class extends br {
					expected() {
						return 'a number'
					}
					validate(e, t) {
						return typeof e == 'number'
					}
				}),
				(Mv = class extends Ov {
					expected() {
						return 'an integer'
					}
					validate(e, t) {
						return t.normalizeValidateResult(super.validate(e, t), e) === !0 && Lv(e)
					}
				}),
				(zm = class extends br {
					expected() {
						return 'a string'
					}
					validate(e) {
						return typeof e == 'string'
					}
				}),
				(Pv = as),
				(Bv = k2),
				(Vv = Dv),
				(Uv = gv),
				($v = class {
					constructor(e, t) {
						let {
							logger: n = console,
							loggerPrintWidth: r = 80,
							descriptor: i = Pv,
							unknown: s = Bv,
							invalid: o = Vv,
							deprecated: a = Uv,
							missing: u = () => !1,
							required: l = () => !1,
							preprocess: c = (h) => h,
							postprocess: d = () => ku
						} = t || {}
						;(this._utils = {
							descriptor: i,
							logger: n || { warn: () => {} },
							loggerPrintWidth: r,
							schemas: Sv(e, 'name'),
							normalizeDefaultResult: qm,
							normalizeExpectedResult: O2,
							normalizeDeprecatedResult: Hm,
							normalizeForwardResult: $1,
							normalizeRedirectResult: Qm,
							normalizeValidateResult: Gm
						}),
							(this._unknownHandler = s),
							(this._invalidHandler = Iv(o)),
							(this._deprecatedHandler = a),
							(this._identifyMissing = (h, m) => !(h in m) || u(h, m)),
							(this._identifyRequired = l),
							(this._preprocess = c),
							(this._postprocess = d),
							this.cleanHistory()
					}
					cleanHistory() {
						this._hasDeprecationWarned = Fv()
					}
					normalize(e) {
						let t = {},
							n = [this._preprocess(e, this._utils)],
							r = () => {
								for (; n.length !== 0; ) {
									let i = n.shift(),
										s = this._applyNormalization(i, t)
									n.push(...s)
								}
							}
						r()
						for (let i of Object.keys(this._utils.schemas)) {
							let s = this._utils.schemas[i]
							if (!(i in t)) {
								let o = qm(s.default(this._utils))
								'value' in o && n.push({ [i]: o.value })
							}
						}
						r()
						for (let i of Object.keys(this._utils.schemas)) {
							if (!(i in t)) continue
							let s = this._utils.schemas[i],
								o = t[i],
								a = s.postprocess(o, this._utils)
							a !== ku && (this._applyValidation(a, i, s), (t[i] = a))
						}
						return this._applyPostprocess(t), this._applyRequiredCheck(t), t
					}
					_applyNormalization(e, t) {
						let n = [],
							{ knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(e)
						for (let s of r) {
							let o = this._utils.schemas[s],
								a = o.preprocess(e[s], this._utils)
							this._applyValidation(a, s, o)
							let u = ({ from: d, to: h }) => {
									n.push(typeof h == 'string' ? { [h]: d } : { [h.key]: h.value })
								},
								l = ({ value: d, redirectTo: h }) => {
									let m = Hm(o.deprecated(d, this._utils), a, !0)
									if (m !== !1)
										if (m === !0)
											this._hasDeprecationWarned(s) ||
												this._utils.logger.warn(this._deprecatedHandler(s, h, this._utils))
										else
											for (let { value: g } of m) {
												let v = { key: s, value: g }
												if (!this._hasDeprecationWarned(v)) {
													let N = typeof h == 'string' ? { key: h, value: g } : h
													this._utils.logger.warn(this._deprecatedHandler(v, N, this._utils))
												}
											}
								}
							$1(o.forward(a, this._utils), a).forEach(u)
							let c = Qm(o.redirect(a, this._utils), a)
							if ((c.redirect.forEach(u), 'remain' in c)) {
								let d = c.remain
								;(t[s] = s in t ? o.overlap(t[s], d, this._utils) : d), l({ value: d })
							}
							for (let { from: d, to: h } of c.redirect) l({ value: d, redirectTo: h })
						}
						for (let s of i) {
							let o = e[s]
							this._applyUnknownHandler(s, o, t, (a, u) => {
								n.push({ [a]: u })
							})
						}
						return n
					}
					_applyRequiredCheck(e) {
						for (let t of Object.keys(this._utils.schemas))
							if (this._identifyMissing(t, e) && this._identifyRequired(t))
								throw this._invalidHandler(t, C2, this._utils)
					}
					_partitionOptionKeys(e) {
						let [t, n] = wv(
							Object.keys(e).filter((r) => !this._identifyMissing(r, e)),
							(r) => r in this._utils.schemas
						)
						return { knownKeys: t, unknownKeys: n }
					}
					_applyValidation(e, t, n) {
						let r = Gm(n.validate(e, this._utils), e)
						if (r !== !0) throw this._invalidHandler(t, r.value, this._utils)
					}
					_applyUnknownHandler(e, t, n, r) {
						let i = this._unknownHandler(e, t, this._utils)
						if (i)
							for (let s of Object.keys(i)) {
								if (this._identifyMissing(s, i)) continue
								let o = i[s]
								s in this._utils.schemas ? r(s, o) : (n[s] = o)
							}
					}
					_applyPostprocess(e) {
						let t = this._postprocess(e, this._utils)
						if (t !== ku) {
							if (t.delete) for (let n of t.delete) delete e[n]
							if (t.override) {
								let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override)
								for (let i of n) {
									let s = t.override[i]
									this._applyValidation(s, i, this._utils.schemas[i]), (e[i] = s)
								}
								for (let i of r) {
									let s = t.override[i]
									this._applyUnknownHandler(i, s, e, (o, a) => {
										let u = this._utils.schemas[o]
										this._applyValidation(a, o, u), (e[o] = a)
									})
								}
							}
						}
					}
				})
			;(Hv = jv),
				(Wv = (e, t, n) => {
					if (!(e && t == null)) {
						if (t.findLast) return t.findLast(n)
						for (let r = t.length - 1; r >= 0; r--) {
							let i = t[r]
							if (n(i, r, t)) return i
						}
					}
				}),
				(M2 = Wv)
			Ym = { astFormat: 'estree', printer: {}, originalText: void 0, locStart: null, locEnd: null }
			;(fs = Yv), (Jv = xo(KD(), 1))
			No = Xv
			nb = tb
			ib = rb
			;(ob = sb),
				(ab = ({ parser: e }) =>
					e === 'json' || e === 'json5' || e === 'jsonc' || e === 'json-stringify')
			;($2 = new Set([
				'JsonRoot',
				'ObjectExpression',
				'ArrayExpression',
				'StringLiteral',
				'NumericLiteral',
				'BooleanLiteral',
				'NullLiteral',
				'UnaryExpression',
				'TemplateLiteral'
			])),
				(fb = new Set([
					'OperationDefinition',
					'FragmentDefinition',
					'VariableDefinition',
					'TypeExtensionDefinition',
					'ObjectTypeDefinition',
					'FieldDefinition',
					'DirectiveDefinition',
					'EnumTypeDefinition',
					'EnumValueDefinition',
					'InputValueDefinition',
					'InputObjectTypeDefinition',
					'SchemaDefinition',
					'OperationTypeDefinition',
					'InterfaceTypeDefinition',
					'UnionTypeDefinition',
					'ScalarTypeDefinition'
				]))
			;(j2 = '\uFEFF'), (Zm = Symbol('cursor'))
			ef = {}
			Pu(ef, { builders: () => bb, printer: () => Eb, utils: () => yb })
			;(bb = {
				join: g2,
				line: h2,
				softline: g8,
				hardline: zr,
				literalline: m2,
				group: f2,
				conditionalGroup: f8,
				fill: d2,
				lineSuffix: O1,
				lineSuffixBoundary: h8,
				cursor: M1,
				breakParent: Vu,
				ifBreak: d8,
				trim: m8,
				indent: Ou,
				indentIfBreak: p8,
				align: cs,
				addAlignmentToDoc: D2,
				markAsRoot: l8,
				dedentToRoot: u8,
				dedent: c8,
				hardlineWithoutBreakParent: Q1,
				literallineWithoutBreakParent: p2,
				label: D8,
				concat: (e) => e
			}),
				(Eb = { printDocToString: $u }),
				(yb = {
					willBreak: A8,
					traverseDoc: H1,
					findInDoc: Y1,
					mapDoc: Uu,
					removeLines: L8,
					stripTrailingHardline: v2,
					replaceEndOfLine: R8,
					canBreak: O8
				}),
				(W2 = '3.3.2'),
				(tf = {})
			Pu(tf, {
				addDanglingComment: () => Wr,
				addLeadingComment: () => ss,
				addTrailingComment: () => os,
				getAlignmentSize: () => J1,
				getIndentSize: () => Ab,
				getMaxContinuousCount: () => Lb,
				getNextNonSpaceNonCommentCharacter: () => Ib,
				getNextNonSpaceNonCommentCharacterIndex: () => Ub,
				getStringWidth: () => z1,
				hasNewline: () => Dr,
				hasNewlineInRange: () => kb,
				hasSpaces: () => Mb,
				isNextLineEmpty: () => Gb,
				isNextLineEmptyAfterIndex: () => of,
				isPreviousLineEmpty: () => jb,
				makeString: () => Bb,
				skip: () => _o,
				skipEverythingButNewLine: () => N2,
				skipInlineComment: () => nf,
				skipNewline: () => Yr,
				skipSpaces: () => vr,
				skipToLineEnd: () => _2,
				skipTrailingComment: () => rf,
				skipWhitespace: () => G8
			})
			nf = xb
			rf = _b
			sf = Nb
			of = Tb
			Ab = Sb
			Lb = wb
			Ib = Cb
			kb = Rb
			Mb = Ob
			Bb = Pb
			af = Qr(H2)
			;(z2 = Qr(L2, 0)),
				(Y2 = {
					parse: Qr(hb),
					formatAST: Qr(mb),
					formatDoc: Qr(gb),
					printToDoc: Qr(Db),
					printDocToString: Qr(vb)
				}),
				(Hb = a2)
		})
	var eg = Kn((Z2, lf) => {
		;(function (e) {
			function t() {
				var r = e()
				return r.default || r
			}
			if (typeof Z2 == 'object' && typeof lf == 'object') lf.exports = t()
			else if (typeof define == 'function' && define.amd) define(t)
			else {
				var n =
					typeof globalThis < 'u'
						? globalThis
						: typeof global < 'u'
						? global
						: typeof self < 'u'
						? self
						: this || {}
				;(n.prettierPlugins = n.prettierPlugins || {}), (n.prettierPlugins.graphql = t())
			}
		})(function () {
			'use strict'
			var e = Object.defineProperty,
				t = Object.getOwnPropertyDescriptor,
				n = Object.getOwnPropertyNames,
				r = Object.prototype.hasOwnProperty,
				i = (f, D) => {
					for (var b in D) e(f, b, { get: D[b], enumerable: !0 })
				},
				s = (f, D, b, x) => {
					if ((D && typeof D == 'object') || typeof D == 'function')
						for (let y of n(D))
							!r.call(f, y) &&
								y !== b &&
								e(f, y, { get: () => D[y], enumerable: !(x = t(D, y)) || x.enumerable })
					return f
				},
				o = (f) => s(e({}, '__esModule', { value: !0 }), f),
				a = {}
			i(a, { languages: () => pg, options: () => gg, parsers: () => gf, printers: () => e4 })
			var u = (f, D, b, x) => {
					if (!(f && D == null))
						return D.replaceAll
							? D.replaceAll(b, x)
							: b.global
							? D.replace(b, x)
							: D.split(b).join(x)
				},
				l = u,
				c = 'indent',
				d = 'group',
				h = 'if-break',
				m = 'line',
				g = 'break-parent',
				v = () => {},
				N = v,
				_ = v
			function w(f) {
				return N(f), { type: c, contents: f }
			}
			function C(f, D = {}) {
				return (
					N(f),
					_(D.expandedStates, !0),
					{
						type: d,
						id: D.id,
						contents: f,
						break: !!D.shouldBreak,
						expandedStates: D.expandedStates
					}
				)
			}
			function S(f, D = '', b = {}) {
				return (
					N(f), D !== '' && N(D), { type: h, breakContents: f, flatContents: D, groupId: b.groupId }
				)
			}
			var k = { type: g },
				M = { type: m, hard: !0 },
				I = { type: m },
				B = { type: m, soft: !0 },
				L = [M, k]
			function A(f, D) {
				N(f), _(D)
				let b = []
				for (let x = 0; x < D.length; x++) x !== 0 && b.push(f), b.push(D[x])
				return b
			}
			function X(f) {
				return (D, b, x) => {
					let y = !!(x != null && x.backwards)
					if (b === !1) return !1
					let { length: V } = D,
						ie = b
					for (; ie >= 0 && ie < V; ) {
						let Ae = D.charAt(ie)
						if (f instanceof RegExp) {
							if (!f.test(Ae)) return ie
						} else if (!f.includes(Ae)) return ie
						y ? ie-- : ie++
					}
					return ie === -1 || ie === V ? ie : !1
				}
			}
			var z = X(/\s/),
				fe = X(' 	'),
				F = X(',; 	'),
				T = X(/[^\n\r]/)
			function Q(f, D, b) {
				let x = !!(b != null && b.backwards)
				if (D === !1) return !1
				let y = f.charAt(D)
				if (x) {
					if (
						f.charAt(D - 1) === '\r' &&
						y ===
							`
`
					)
						return D - 2
					if (
						y ===
							`
` ||
						y === '\r' ||
						y === '\u2028' ||
						y === '\u2029'
					)
						return D - 1
				} else {
					if (
						y === '\r' &&
						f.charAt(D + 1) ===
							`
`
					)
						return D + 2
					if (
						y ===
							`
` ||
						y === '\r' ||
						y === '\u2028' ||
						y === '\u2029'
					)
						return D + 1
				}
				return D
			}
			var $ = Q
			function ee(f, D, b = {}) {
				let x = fe(f, b.backwards ? D - 1 : D, b),
					y = $(f, x, b)
				return x !== y
			}
			var ne = ee
			function se(f, D) {
				if (D === !1) return !1
				if (f.charAt(D) === '/' && f.charAt(D + 1) === '*') {
					for (let b = D + 2; b < f.length; ++b)
						if (f.charAt(b) === '*' && f.charAt(b + 1) === '/') return b + 2
				}
				return D
			}
			var Ie = se
			function P(f, D) {
				return D === !1 ? !1 : f.charAt(D) === '/' && f.charAt(D + 1) === '/' ? T(f, D) : D
			}
			var Z = P
			function J(f, D) {
				let b = null,
					x = D
				for (; x !== b; ) (b = x), (x = F(f, x)), (x = Ie(f, x)), (x = fe(f, x))
				return (x = Z(f, x)), (x = $(f, x)), x !== !1 && ne(f, x)
			}
			var G = J
			function _e(f) {
				return Array.isArray(f) && f.length > 0
			}
			var Re = _e,
				H = class extends Error {
					name = 'UnexpectedNodeError'
					constructor(f, D, b = 'type') {
						super(`Unexpected ${D} node ${b}: ${JSON.stringify(f[b])}.`), (this.node = f)
					}
				},
				Ne = H,
				Y = null
			function de(f) {
				if (Y !== null && typeof Y.property) {
					let D = Y
					return (Y = de.prototype = null), D
				}
				return (Y = de.prototype = f ?? Object.create(null)), new de()
			}
			var Te = 10
			for (let f = 0; f <= Te; f++) de()
			function Dt(f) {
				return de(f)
			}
			function Ye(f, D = 'type') {
				Dt(f)
				function b(x) {
					let y = x[D],
						V = f[y]
					if (!Array.isArray(V))
						throw Object.assign(new Error(`Missing visitor keys for '${y}'.`), { node: x })
					return V
				}
				return b
			}
			var ds = Ye,
				Zr = class {
					constructor(f, D, b) {
						;(this.start = f.start),
							(this.end = D.end),
							(this.startToken = f),
							(this.endToken = D),
							(this.source = b)
					}
					get [Symbol.toStringTag]() {
						return 'Location'
					}
					toJSON() {
						return { start: this.start, end: this.end }
					}
				},
				cf = class {
					constructor(f, D, b, x, y, V) {
						;(this.kind = f),
							(this.start = D),
							(this.end = b),
							(this.line = x),
							(this.column = y),
							(this.value = V),
							(this.prev = null),
							(this.next = null)
					}
					get [Symbol.toStringTag]() {
						return 'Token'
					}
					toJSON() {
						return { kind: this.kind, value: this.value, line: this.line, column: this.column }
					}
				},
				ff = {
					Name: [],
					Document: ['definitions'],
					OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
					VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
					Variable: ['name'],
					SelectionSet: ['selections'],
					Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
					Argument: ['name', 'value'],
					FragmentSpread: ['name', 'directives'],
					InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
					FragmentDefinition: [
						'name',
						'variableDefinitions',
						'typeCondition',
						'directives',
						'selectionSet'
					],
					IntValue: [],
					FloatValue: [],
					StringValue: [],
					BooleanValue: [],
					NullValue: [],
					EnumValue: [],
					ListValue: ['values'],
					ObjectValue: ['fields'],
					ObjectField: ['name', 'value'],
					Directive: ['name', 'arguments'],
					NamedType: ['name'],
					ListType: ['type'],
					NonNullType: ['type'],
					SchemaDefinition: ['description', 'directives', 'operationTypes'],
					OperationTypeDefinition: ['type'],
					ScalarTypeDefinition: ['description', 'name', 'directives'],
					ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
					FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
					InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
					InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
					UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
					EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
					EnumValueDefinition: ['description', 'name', 'directives'],
					InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
					DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
					SchemaExtension: ['directives', 'operationTypes'],
					ScalarTypeExtension: ['name', 'directives'],
					ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
					InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
					UnionTypeExtension: ['name', 'directives', 'types'],
					EnumTypeExtension: ['name', 'directives', 'values'],
					InputObjectTypeExtension: ['name', 'directives', 'fields']
				},
				Wb = new Set(Object.keys(ff)),
				ei
			;(function (f) {
				;(f.QUERY = 'query'), (f.MUTATION = 'mutation'), (f.SUBSCRIPTION = 'subscription')
			})(ei || (ei = {}))
			var tg = ds(ff, 'kind'),
				ng = tg
			function df(f) {
				return f.loc.start
			}
			function pf(f) {
				return f.loc.end
			}
			function rg(f) {
				return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(f)
			}
			function ig(f) {
				return (
					`# @format

` + f
				)
			}
			function sg(f, D, b) {
				let { node: x } = f
				if (!x.description) return ''
				let y = [b('description')]
				return x.kind === 'InputValueDefinition' && !x.description.block ? y.push(I) : y.push(L), y
			}
			var Ln = sg
			function og(f, D, b) {
				let { node: x } = f
				switch (x.kind) {
					case 'Document':
						return [...A(L, fn(f, D, b, 'definitions')), L]
					case 'OperationDefinition': {
						let y = D.originalText[df(x)] !== '{',
							V = !!x.name
						return [
							y ? x.operation : '',
							y && V ? [' ', b('name')] : '',
							y && !V && Re(x.variableDefinitions) ? ' ' : '',
							hf(f, b),
							Ft(f, b, x),
							!y && !V ? '' : ' ',
							b('selectionSet')
						]
					}
					case 'FragmentDefinition':
						return [
							'fragment ',
							b('name'),
							hf(f, b),
							' on ',
							b('typeCondition'),
							Ft(f, b, x),
							' ',
							b('selectionSet')
						]
					case 'SelectionSet':
						return ['{', w([L, A(L, fn(f, D, b, 'selections'))]), L, '}']
					case 'Field':
						return C([
							x.alias ? [b('alias'), ': '] : '',
							b('name'),
							x.arguments.length > 0
								? C(['(', w([B, A([S('', ', '), B], fn(f, D, b, 'arguments'))]), B, ')'])
								: '',
							Ft(f, b, x),
							x.selectionSet ? ' ' : '',
							b('selectionSet')
						])
					case 'Name':
						return x.value
					case 'StringValue':
						if (x.block) {
							let y = l(!1, x.value, '"""', String.raw`\"""`).split(`
`)
							return (
								y.length === 1 && (y[0] = y[0].trim()),
								y.every((V) => V === '') && (y.length = 0),
								A(L, ['"""', ...y, '"""'])
							)
						}
						return [
							'"',
							l(
								!1,
								l(!1, x.value, /["\\]/g, String.raw`\$&`),
								`
`,
								String.raw`\n`
							),
							'"'
						]
					case 'IntValue':
					case 'FloatValue':
					case 'EnumValue':
						return x.value
					case 'BooleanValue':
						return x.value ? 'true' : 'false'
					case 'NullValue':
						return 'null'
					case 'Variable':
						return ['$', b('name')]
					case 'ListValue':
						return C(['[', w([B, A([S('', ', '), B], f.map(b, 'values'))]), B, ']'])
					case 'ObjectValue': {
						let y = D.bracketSpacing && x.fields.length > 0 ? ' ' : ''
						return C(['{', y, w([B, A([S('', ', '), B], f.map(b, 'fields'))]), B, S('', y), '}'])
					}
					case 'ObjectField':
					case 'Argument':
						return [b('name'), ': ', b('value')]
					case 'Directive':
						return [
							'@',
							b('name'),
							x.arguments.length > 0
								? C(['(', w([B, A([S('', ', '), B], fn(f, D, b, 'arguments'))]), B, ')'])
								: ''
						]
					case 'NamedType':
						return b('name')
					case 'VariableDefinition':
						return [
							b('variable'),
							': ',
							b('type'),
							x.defaultValue ? [' = ', b('defaultValue')] : '',
							Ft(f, b, x)
						]
					case 'ObjectTypeExtension':
					case 'ObjectTypeDefinition':
					case 'InputObjectTypeExtension':
					case 'InputObjectTypeDefinition':
					case 'InterfaceTypeExtension':
					case 'InterfaceTypeDefinition': {
						let { kind: y } = x,
							V = []
						return (
							y.endsWith('TypeDefinition') ? V.push(Ln(f, D, b)) : V.push('extend '),
							y.startsWith('ObjectType')
								? V.push('type')
								: y.startsWith('InputObjectType')
								? V.push('input')
								: V.push('interface'),
							V.push(' ', b('name')),
							!y.startsWith('InputObjectType') &&
								x.interfaces.length > 0 &&
								V.push(' implements ', ...lg(f, D, b)),
							V.push(Ft(f, b, x)),
							x.fields.length > 0 && V.push([' {', w([L, A(L, fn(f, D, b, 'fields'))]), L, '}']),
							V
						)
					}
					case 'FieldDefinition':
						return [
							Ln(f, D, b),
							b('name'),
							x.arguments.length > 0
								? C(['(', w([B, A([S('', ', '), B], fn(f, D, b, 'arguments'))]), B, ')'])
								: '',
							': ',
							b('type'),
							Ft(f, b, x)
						]
					case 'DirectiveDefinition':
						return [
							Ln(f, D, b),
							'directive ',
							'@',
							b('name'),
							x.arguments.length > 0
								? C(['(', w([B, A([S('', ', '), B], fn(f, D, b, 'arguments'))]), B, ')'])
								: '',
							x.repeatable ? ' repeatable' : '',
							' on ',
							...A(' | ', f.map(b, 'locations'))
						]
					case 'EnumTypeExtension':
					case 'EnumTypeDefinition':
						return [
							Ln(f, D, b),
							x.kind === 'EnumTypeExtension' ? 'extend ' : '',
							'enum ',
							b('name'),
							Ft(f, b, x),
							x.values.length > 0 ? [' {', w([L, A(L, fn(f, D, b, 'values'))]), L, '}'] : ''
						]
					case 'EnumValueDefinition':
						return [Ln(f, D, b), b('name'), Ft(f, b, x)]
					case 'InputValueDefinition':
						return [
							Ln(f, D, b),
							b('name'),
							': ',
							b('type'),
							x.defaultValue ? [' = ', b('defaultValue')] : '',
							Ft(f, b, x)
						]
					case 'SchemaExtension':
						return [
							'extend schema',
							Ft(f, b, x),
							...(x.operationTypes.length > 0
								? [' {', w([L, A(L, fn(f, D, b, 'operationTypes'))]), L, '}']
								: [])
						]
					case 'SchemaDefinition':
						return [
							Ln(f, D, b),
							'schema',
							Ft(f, b, x),
							' {',
							x.operationTypes.length > 0 ? w([L, A(L, fn(f, D, b, 'operationTypes'))]) : '',
							L,
							'}'
						]
					case 'OperationTypeDefinition':
						return [x.operation, ': ', b('type')]
					case 'FragmentSpread':
						return ['...', b('name'), Ft(f, b, x)]
					case 'InlineFragment':
						return [
							'...',
							x.typeCondition ? [' on ', b('typeCondition')] : '',
							Ft(f, b, x),
							' ',
							b('selectionSet')
						]
					case 'UnionTypeExtension':
					case 'UnionTypeDefinition':
						return C([
							Ln(f, D, b),
							C([
								x.kind === 'UnionTypeExtension' ? 'extend ' : '',
								'union ',
								b('name'),
								Ft(f, b, x),
								x.types.length > 0
									? [' =', S('', ' '), w([S([I, '| ']), A([I, '| '], f.map(b, 'types'))])]
									: ''
							])
						])
					case 'ScalarTypeExtension':
					case 'ScalarTypeDefinition':
						return [
							Ln(f, D, b),
							x.kind === 'ScalarTypeExtension' ? 'extend ' : '',
							'scalar ',
							b('name'),
							Ft(f, b, x)
						]
					case 'NonNullType':
						return [b('type'), '!']
					case 'ListType':
						return ['[', b('type'), ']']
					default:
						throw new Ne(x, 'Graphql', 'kind')
				}
			}
			function Ft(f, D, b) {
				if (b.directives.length === 0) return ''
				let x = A(I, f.map(D, 'directives'))
				return b.kind === 'FragmentDefinition' || b.kind === 'OperationDefinition'
					? C([I, x])
					: [' ', C(w([B, x]))]
			}
			function fn(f, D, b, x) {
				return f.map(({ isLast: y, node: V }) => {
					let ie = b()
					return !y && G(D.originalText, pf(V)) ? [ie, L] : ie
				}, x)
			}
			function ag(f) {
				return f.kind !== 'Comment'
			}
			function ug(f) {
				let D = f.node
				if (D.kind === 'Comment') return '#' + D.value.trimEnd()
				throw new Error('Not a comment: ' + JSON.stringify(D))
			}
			function lg(f, D, b) {
				let { node: x } = f,
					y = [],
					{ interfaces: V } = x,
					ie = f.map(b, 'interfaces')
				for (let Ae = 0; Ae < V.length; Ae++) {
					let Qe = V[Ae]
					y.push(ie[Ae])
					let Rt = V[Ae + 1]
					if (Rt) {
						let xt = D.originalText.slice(Qe.loc.end, Rt.loc.start).includes('#')
						y.push(' &', xt ? I : ' ')
					}
				}
				return y
			}
			function hf(f, D) {
				let { node: b } = f
				return Re(b.variableDefinitions)
					? C(['(', w([B, A([S('', ', '), B], f.map(D, 'variableDefinitions'))]), B, ')'])
					: ''
			}
			function mf(f, D) {
				f.kind === 'StringValue' &&
					f.block &&
					!f.value.includes(`
`) &&
					(D.value = f.value.trim())
			}
			mf.ignoredProperties = new Set(['loc', 'comments'])
			function cg(f) {
				var D
				let { node: b } = f
				return (D = b?.comments) == null
					? void 0
					: D.some((x) => x.value.trim() === 'prettier-ignore')
			}
			var fg = {
					print: og,
					massageAstNode: mf,
					hasPrettierIgnore: cg,
					insertPragma: ig,
					printComment: ug,
					canAttachComment: ag,
					getVisitorKeys: ng
				},
				dg = fg,
				pg = [
					{
						linguistLanguageId: 139,
						name: 'GraphQL',
						type: 'data',
						color: '#e10098',
						extensions: ['.graphql', '.gql', '.graphqls'],
						tmScope: 'source.graphql',
						aceMode: 'text',
						parsers: ['graphql'],
						vscodeLanguageIds: ['graphql']
					}
				],
				hg = {
					bracketSpacing: {
						category: 'Common',
						type: 'boolean',
						default: !0,
						description: 'Print spaces between brackets.',
						oppositeDescription: 'Do not print spaces between brackets.'
					},
					singleQuote: {
						category: 'Common',
						type: 'boolean',
						default: !1,
						description: 'Use single quotes instead of double quotes.'
					},
					proseWrap: {
						category: 'Common',
						type: 'choice',
						default: 'preserve',
						description: 'How to wrap prose.',
						choices: [
							{ value: 'always', description: 'Wrap prose if it exceeds the print width.' },
							{ value: 'never', description: 'Do not wrap prose.' },
							{ value: 'preserve', description: 'Wrap prose as-is.' }
						]
					},
					bracketSameLine: {
						category: 'Common',
						type: 'boolean',
						default: !1,
						description: 'Put > of opening tags on the last line instead of on a new line.'
					},
					singleAttributePerLine: {
						category: 'Common',
						type: 'boolean',
						default: !1,
						description: 'Enforce single attribute per line in HTML, Vue and JSX.'
					}
				},
				mg = { bracketSpacing: hg.bracketSpacing },
				gg = mg,
				gf = {}
			i(gf, { graphql: () => Zg })
			function Dg(f) {
				return typeof f == 'object' && f !== null
			}
			function vg(f, D) {
				if (!f) throw new Error(D ?? 'Unexpected invariant triggered.')
			}
			var bg = /\r\n|[\n\r]/g
			function Hu(f, D) {
				let b = 0,
					x = 1
				for (let y of f.body.matchAll(bg)) {
					if ((typeof y.index == 'number' || vg(!1), y.index >= D)) break
					;(b = y.index + y[0].length), (x += 1)
				}
				return { line: x, column: D + 1 - b }
			}
			function Eg(f) {
				return Df(f.source, Hu(f.source, f.start))
			}
			function Df(f, D) {
				let b = f.locationOffset.column - 1,
					x = ''.padStart(b) + f.body,
					y = D.line - 1,
					V = f.locationOffset.line - 1,
					ie = D.line + V,
					Ae = D.line === 1 ? b : 0,
					Qe = D.column + Ae,
					Rt = `${f.name}:${ie}:${Qe}
`,
					xt = x.split(/\r\n|[\n\r]/g),
					ni = xt[y]
				if (ni.length > 120) {
					let Cn = Math.floor(Qe / 80),
						Yu = Qe % 80,
						wt = []
					for (let ri = 0; ri < ni.length; ri += 80) wt.push(ni.slice(ri, ri + 80))
					return (
						Rt +
						vf([
							[`${ie} |`, wt[0]],
							...wt.slice(1, Cn + 1).map((ri) => ['|', ri]),
							['|', '^'.padStart(Yu)],
							['|', wt[Cn + 1]]
						])
					)
				}
				return (
					Rt +
					vf([
						[`${ie - 1} |`, xt[y - 1]],
						[`${ie} |`, ni],
						['|', '^'.padStart(Qe)],
						[`${ie + 1} |`, xt[y + 1]]
					])
				)
			}
			function vf(f) {
				let D = f.filter(([x, y]) => y !== void 0),
					b = Math.max(...D.map(([x]) => x.length))
				return D.map(([x, y]) => x.padStart(b) + (y ? ' ' + y : '')).join(`
`)
			}
			function yg(f) {
				let D = f[0]
				return D == null || 'kind' in D || 'length' in D
					? {
							nodes: D,
							source: f[1],
							positions: f[2],
							path: f[3],
							originalError: f[4],
							extensions: f[5]
					  }
					: D
			}
			var xg = class K2 extends Error {
				constructor(D, ...b) {
					var x, y, V
					let {
						nodes: ie,
						source: Ae,
						positions: Qe,
						path: Rt,
						originalError: xt,
						extensions: ni
					} = yg(b)
					super(D),
						(this.name = 'GraphQLError'),
						(this.path = Rt ?? void 0),
						(this.originalError = xt ?? void 0),
						(this.nodes = bf(Array.isArray(ie) ? ie : ie ? [ie] : void 0))
					let Cn = bf(
						(x = this.nodes) === null || x === void 0
							? void 0
							: x.map((wt) => wt.loc).filter((wt) => wt != null)
					)
					;(this.source =
						Ae ?? (Cn == null || (y = Cn[0]) === null || y === void 0 ? void 0 : y.source)),
						(this.positions = Qe ?? Cn?.map((wt) => wt.start)),
						(this.locations =
							Qe && Ae ? Qe.map((wt) => Hu(Ae, wt)) : Cn?.map((wt) => Hu(wt.source, wt.start)))
					let Yu = Dg(xt?.extensions) ? xt?.extensions : void 0
					;(this.extensions = (V = ni ?? Yu) !== null && V !== void 0 ? V : Object.create(null)),
						Object.defineProperties(this, {
							message: { writable: !0, enumerable: !0 },
							name: { enumerable: !1 },
							nodes: { enumerable: !1 },
							source: { enumerable: !1 },
							positions: { enumerable: !1 },
							originalError: { enumerable: !1 }
						}),
						xt != null && xt.stack
							? Object.defineProperty(this, 'stack', {
									value: xt.stack,
									writable: !0,
									configurable: !0
							  })
							: Error.captureStackTrace
							? Error.captureStackTrace(this, K2)
							: Object.defineProperty(this, 'stack', {
									value: Error().stack,
									writable: !0,
									configurable: !0
							  })
				}
				get [Symbol.toStringTag]() {
					return 'GraphQLError'
				}
				toString() {
					let D = this.message
					if (this.nodes)
						for (let b of this.nodes)
							b.loc &&
								(D +=
									`

` + Eg(b.loc))
					else if (this.source && this.locations)
						for (let b of this.locations)
							D +=
								`

` + Df(this.source, b)
					return D
				}
				toJSON() {
					let D = { message: this.message }
					return (
						this.locations != null && (D.locations = this.locations),
						this.path != null && (D.path = this.path),
						this.extensions != null &&
							Object.keys(this.extensions).length > 0 &&
							(D.extensions = this.extensions),
						D
					)
				}
			}
			function bf(f) {
				return f === void 0 || f.length === 0 ? void 0 : f
			}
			function ft(f, D, b) {
				return new xg(`Syntax Error: ${b}`, { source: f, positions: [D] })
			}
			var Wu
			;(function (f) {
				;(f.QUERY = 'QUERY'),
					(f.MUTATION = 'MUTATION'),
					(f.SUBSCRIPTION = 'SUBSCRIPTION'),
					(f.FIELD = 'FIELD'),
					(f.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
					(f.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
					(f.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
					(f.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
					(f.SCHEMA = 'SCHEMA'),
					(f.SCALAR = 'SCALAR'),
					(f.OBJECT = 'OBJECT'),
					(f.FIELD_DEFINITION = 'FIELD_DEFINITION'),
					(f.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
					(f.INTERFACE = 'INTERFACE'),
					(f.UNION = 'UNION'),
					(f.ENUM = 'ENUM'),
					(f.ENUM_VALUE = 'ENUM_VALUE'),
					(f.INPUT_OBJECT = 'INPUT_OBJECT'),
					(f.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION')
			})(Wu || (Wu = {}))
			var ue
			;(function (f) {
				;(f.NAME = 'Name'),
					(f.DOCUMENT = 'Document'),
					(f.OPERATION_DEFINITION = 'OperationDefinition'),
					(f.VARIABLE_DEFINITION = 'VariableDefinition'),
					(f.SELECTION_SET = 'SelectionSet'),
					(f.FIELD = 'Field'),
					(f.ARGUMENT = 'Argument'),
					(f.FRAGMENT_SPREAD = 'FragmentSpread'),
					(f.INLINE_FRAGMENT = 'InlineFragment'),
					(f.FRAGMENT_DEFINITION = 'FragmentDefinition'),
					(f.VARIABLE = 'Variable'),
					(f.INT = 'IntValue'),
					(f.FLOAT = 'FloatValue'),
					(f.STRING = 'StringValue'),
					(f.BOOLEAN = 'BooleanValue'),
					(f.NULL = 'NullValue'),
					(f.ENUM = 'EnumValue'),
					(f.LIST = 'ListValue'),
					(f.OBJECT = 'ObjectValue'),
					(f.OBJECT_FIELD = 'ObjectField'),
					(f.DIRECTIVE = 'Directive'),
					(f.NAMED_TYPE = 'NamedType'),
					(f.LIST_TYPE = 'ListType'),
					(f.NON_NULL_TYPE = 'NonNullType'),
					(f.SCHEMA_DEFINITION = 'SchemaDefinition'),
					(f.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
					(f.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
					(f.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
					(f.FIELD_DEFINITION = 'FieldDefinition'),
					(f.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
					(f.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
					(f.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
					(f.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
					(f.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
					(f.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
					(f.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
					(f.SCHEMA_EXTENSION = 'SchemaExtension'),
					(f.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
					(f.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
					(f.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
					(f.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
					(f.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
					(f.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension')
			})(ue || (ue = {}))
			function _g(f) {
				return f === 9 || f === 32
			}
			function ps(f) {
				return f >= 48 && f <= 57
			}
			function Ef(f) {
				return (f >= 97 && f <= 122) || (f >= 65 && f <= 90)
			}
			function yf(f) {
				return Ef(f) || f === 95
			}
			function Ng(f) {
				return Ef(f) || ps(f) || f === 95
			}
			function Tg(f) {
				var D
				let b = Number.MAX_SAFE_INTEGER,
					x = null,
					y = -1
				for (let ie = 0; ie < f.length; ++ie) {
					var V
					let Ae = f[ie],
						Qe = Sg(Ae)
					Qe !== Ae.length &&
						((x = (V = x) !== null && V !== void 0 ? V : ie),
						(y = ie),
						ie !== 0 && Qe < b && (b = Qe))
				}
				return f
					.map((ie, Ae) => (Ae === 0 ? ie : ie.slice(b)))
					.slice((D = x) !== null && D !== void 0 ? D : 0, y + 1)
			}
			function Sg(f) {
				let D = 0
				for (; D < f.length && _g(f.charCodeAt(D)); ) ++D
				return D
			}
			var j
			;(function (f) {
				;(f.SOF = '<SOF>'),
					(f.EOF = '<EOF>'),
					(f.BANG = '!'),
					(f.DOLLAR = '$'),
					(f.AMP = '&'),
					(f.PAREN_L = '('),
					(f.PAREN_R = ')'),
					(f.SPREAD = '...'),
					(f.COLON = ':'),
					(f.EQUALS = '='),
					(f.AT = '@'),
					(f.BRACKET_L = '['),
					(f.BRACKET_R = ']'),
					(f.BRACE_L = '{'),
					(f.PIPE = '|'),
					(f.BRACE_R = '}'),
					(f.NAME = 'Name'),
					(f.INT = 'Int'),
					(f.FLOAT = 'Float'),
					(f.STRING = 'String'),
					(f.BLOCK_STRING = 'BlockString'),
					(f.COMMENT = 'Comment')
			})(j || (j = {}))
			var Ag = class {
				constructor(f) {
					let D = new cf(j.SOF, 0, 0, 0, 0)
					;(this.source = f),
						(this.lastToken = D),
						(this.token = D),
						(this.line = 1),
						(this.lineStart = 0)
				}
				get [Symbol.toStringTag]() {
					return 'Lexer'
				}
				advance() {
					return (this.lastToken = this.token), (this.token = this.lookahead())
				}
				lookahead() {
					let f = this.token
					if (f.kind !== j.EOF)
						do
							if (f.next) f = f.next
							else {
								let D = wg(this, f.end)
								;(f.next = D), (D.prev = f), (f = D)
							}
						while (f.kind === j.COMMENT)
					return f
				}
			}
			function Fg(f) {
				return (
					f === j.BANG ||
					f === j.DOLLAR ||
					f === j.AMP ||
					f === j.PAREN_L ||
					f === j.PAREN_R ||
					f === j.SPREAD ||
					f === j.COLON ||
					f === j.EQUALS ||
					f === j.AT ||
					f === j.BRACKET_L ||
					f === j.BRACKET_R ||
					f === j.BRACE_L ||
					f === j.PIPE ||
					f === j.BRACE_R
				)
			}
			function ti(f) {
				return (f >= 0 && f <= 55295) || (f >= 57344 && f <= 1114111)
			}
			function To(f, D) {
				return xf(f.charCodeAt(D)) && _f(f.charCodeAt(D + 1))
			}
			function xf(f) {
				return f >= 55296 && f <= 56319
			}
			function _f(f) {
				return f >= 56320 && f <= 57343
			}
			function Er(f, D) {
				let b = f.source.body.codePointAt(D)
				if (b === void 0) return j.EOF
				if (b >= 32 && b <= 126) {
					let x = String.fromCodePoint(b)
					return x === '"' ? `'"'` : `"${x}"`
				}
				return 'U+' + b.toString(16).toUpperCase().padStart(4, '0')
			}
			function rt(f, D, b, x, y) {
				let V = f.line,
					ie = 1 + b - f.lineStart
				return new cf(D, b, x, V, ie, y)
			}
			function wg(f, D) {
				let b = f.source.body,
					x = b.length,
					y = D
				for (; y < x; ) {
					let V = b.charCodeAt(y)
					switch (V) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++y
							continue
						case 10:
							++y, ++f.line, (f.lineStart = y)
							continue
						case 13:
							b.charCodeAt(y + 1) === 10 ? (y += 2) : ++y, ++f.line, (f.lineStart = y)
							continue
						case 35:
							return Lg(f, y)
						case 33:
							return rt(f, j.BANG, y, y + 1)
						case 36:
							return rt(f, j.DOLLAR, y, y + 1)
						case 38:
							return rt(f, j.AMP, y, y + 1)
						case 40:
							return rt(f, j.PAREN_L, y, y + 1)
						case 41:
							return rt(f, j.PAREN_R, y, y + 1)
						case 46:
							if (b.charCodeAt(y + 1) === 46 && b.charCodeAt(y + 2) === 46)
								return rt(f, j.SPREAD, y, y + 3)
							break
						case 58:
							return rt(f, j.COLON, y, y + 1)
						case 61:
							return rt(f, j.EQUALS, y, y + 1)
						case 64:
							return rt(f, j.AT, y, y + 1)
						case 91:
							return rt(f, j.BRACKET_L, y, y + 1)
						case 93:
							return rt(f, j.BRACKET_R, y, y + 1)
						case 123:
							return rt(f, j.BRACE_L, y, y + 1)
						case 124:
							return rt(f, j.PIPE, y, y + 1)
						case 125:
							return rt(f, j.BRACE_R, y, y + 1)
						case 34:
							return b.charCodeAt(y + 1) === 34 && b.charCodeAt(y + 2) === 34 ? Mg(f, y) : Ig(f, y)
					}
					if (ps(V) || V === 45) return Cg(f, y, V)
					if (yf(V)) return Pg(f, y)
					throw ft(
						f.source,
						y,
						V === 39
							? `Unexpected single quote character ('), did you mean to use a double quote (")?`
							: ti(V) || To(b, y)
							? `Unexpected character: ${Er(f, y)}.`
							: `Invalid character: ${Er(f, y)}.`
					)
				}
				return rt(f, j.EOF, x, x)
			}
			function Lg(f, D) {
				let b = f.source.body,
					x = b.length,
					y = D + 1
				for (; y < x; ) {
					let V = b.charCodeAt(y)
					if (V === 10 || V === 13) break
					if (ti(V)) ++y
					else if (To(b, y)) y += 2
					else break
				}
				return rt(f, j.COMMENT, D, y, b.slice(D + 1, y))
			}
			function Cg(f, D, b) {
				let x = f.source.body,
					y = D,
					V = b,
					ie = !1
				if ((V === 45 && (V = x.charCodeAt(++y)), V === 48)) {
					if (((V = x.charCodeAt(++y)), ps(V)))
						throw ft(f.source, y, `Invalid number, unexpected digit after 0: ${Er(f, y)}.`)
				} else (y = Qu(f, y, V)), (V = x.charCodeAt(y))
				if (
					(V === 46 &&
						((ie = !0), (V = x.charCodeAt(++y)), (y = Qu(f, y, V)), (V = x.charCodeAt(y))),
					(V === 69 || V === 101) &&
						((ie = !0),
						(V = x.charCodeAt(++y)),
						(V === 43 || V === 45) && (V = x.charCodeAt(++y)),
						(y = Qu(f, y, V)),
						(V = x.charCodeAt(y))),
					V === 46 || yf(V))
				)
					throw ft(f.source, y, `Invalid number, expected digit but got: ${Er(f, y)}.`)
				return rt(f, ie ? j.FLOAT : j.INT, D, y, x.slice(D, y))
			}
			function Qu(f, D, b) {
				if (!ps(b)) throw ft(f.source, D, `Invalid number, expected digit but got: ${Er(f, D)}.`)
				let x = f.source.body,
					y = D + 1
				for (; ps(x.charCodeAt(y)); ) ++y
				return y
			}
			function Ig(f, D) {
				let b = f.source.body,
					x = b.length,
					y = D + 1,
					V = y,
					ie = ''
				for (; y < x; ) {
					let Ae = b.charCodeAt(y)
					if (Ae === 34) return (ie += b.slice(V, y)), rt(f, j.STRING, D, y + 1, ie)
					if (Ae === 92) {
						ie += b.slice(V, y)
						let Qe =
							b.charCodeAt(y + 1) === 117
								? b.charCodeAt(y + 2) === 123
									? Rg(f, y)
									: kg(f, y)
								: Og(f, y)
						;(ie += Qe.value), (y += Qe.size), (V = y)
						continue
					}
					if (Ae === 10 || Ae === 13) break
					if (ti(Ae)) ++y
					else if (To(b, y)) y += 2
					else throw ft(f.source, y, `Invalid character within String: ${Er(f, y)}.`)
				}
				throw ft(f.source, y, 'Unterminated string.')
			}
			function Rg(f, D) {
				let b = f.source.body,
					x = 0,
					y = 3
				for (; y < 12; ) {
					let V = b.charCodeAt(D + y++)
					if (V === 125) {
						if (y < 5 || !ti(x)) break
						return { value: String.fromCodePoint(x), size: y }
					}
					if (((x = (x << 4) | hs(V)), x < 0)) break
				}
				throw ft(f.source, D, `Invalid Unicode escape sequence: "${b.slice(D, D + y)}".`)
			}
			function kg(f, D) {
				let b = f.source.body,
					x = Nf(b, D + 2)
				if (ti(x)) return { value: String.fromCodePoint(x), size: 6 }
				if (xf(x) && b.charCodeAt(D + 6) === 92 && b.charCodeAt(D + 7) === 117) {
					let y = Nf(b, D + 8)
					if (_f(y)) return { value: String.fromCodePoint(x, y), size: 12 }
				}
				throw ft(f.source, D, `Invalid Unicode escape sequence: "${b.slice(D, D + 6)}".`)
			}
			function Nf(f, D) {
				return (
					(hs(f.charCodeAt(D)) << 12) |
					(hs(f.charCodeAt(D + 1)) << 8) |
					(hs(f.charCodeAt(D + 2)) << 4) |
					hs(f.charCodeAt(D + 3))
				)
			}
			function hs(f) {
				return f >= 48 && f <= 57
					? f - 48
					: f >= 65 && f <= 70
					? f - 55
					: f >= 97 && f <= 102
					? f - 87
					: -1
			}
			function Og(f, D) {
				let b = f.source.body
				switch (b.charCodeAt(D + 1)) {
					case 34:
						return { value: '"', size: 2 }
					case 92:
						return { value: '\\', size: 2 }
					case 47:
						return { value: '/', size: 2 }
					case 98:
						return { value: '\b', size: 2 }
					case 102:
						return { value: '\f', size: 2 }
					case 110:
						return {
							value: `
`,
							size: 2
						}
					case 114:
						return { value: '\r', size: 2 }
					case 116:
						return { value: '	', size: 2 }
				}
				throw ft(f.source, D, `Invalid character escape sequence: "${b.slice(D, D + 2)}".`)
			}
			function Mg(f, D) {
				let b = f.source.body,
					x = b.length,
					y = f.lineStart,
					V = D + 3,
					ie = V,
					Ae = '',
					Qe = []
				for (; V < x; ) {
					let Rt = b.charCodeAt(V)
					if (Rt === 34 && b.charCodeAt(V + 1) === 34 && b.charCodeAt(V + 2) === 34) {
						;(Ae += b.slice(ie, V)), Qe.push(Ae)
						let xt = rt(
							f,
							j.BLOCK_STRING,
							D,
							V + 3,
							Tg(Qe).join(`
`)
						)
						return (f.line += Qe.length - 1), (f.lineStart = y), xt
					}
					if (
						Rt === 92 &&
						b.charCodeAt(V + 1) === 34 &&
						b.charCodeAt(V + 2) === 34 &&
						b.charCodeAt(V + 3) === 34
					) {
						;(Ae += b.slice(ie, V)), (ie = V + 1), (V += 4)
						continue
					}
					if (Rt === 10 || Rt === 13) {
						;(Ae += b.slice(ie, V)),
							Qe.push(Ae),
							Rt === 13 && b.charCodeAt(V + 1) === 10 ? (V += 2) : ++V,
							(Ae = ''),
							(ie = V),
							(y = V)
						continue
					}
					if (ti(Rt)) ++V
					else if (To(b, V)) V += 2
					else throw ft(f.source, V, `Invalid character within String: ${Er(f, V)}.`)
				}
				throw ft(f.source, V, 'Unterminated string.')
			}
			function Pg(f, D) {
				let b = f.source.body,
					x = b.length,
					y = D + 1
				for (; y < x; ) {
					let V = b.charCodeAt(y)
					if (Ng(V)) ++y
					else break
				}
				return rt(f, j.NAME, D, y, b.slice(D, y))
			}
			function zu(f, D) {
				if (!f) throw new Error(D)
			}
			function Tf(f) {
				return So(f, [])
			}
			function So(f, D) {
				switch (typeof f) {
					case 'string':
						return JSON.stringify(f)
					case 'function':
						return f.name ? `[function ${f.name}]` : '[function]'
					case 'object':
						return Bg(f, D)
					default:
						return String(f)
				}
			}
			function Bg(f, D) {
				if (f === null) return 'null'
				if (D.includes(f)) return '[Circular]'
				let b = [...D, f]
				if (Vg(f)) {
					let x = f.toJSON()
					if (x !== f) return typeof x == 'string' ? x : So(x, b)
				} else if (Array.isArray(f)) return $g(f, b)
				return Ug(f, b)
			}
			function Vg(f) {
				return typeof f.toJSON == 'function'
			}
			function Ug(f, D) {
				let b = Object.entries(f)
				return b.length === 0
					? '{}'
					: D.length > 2
					? '[' + jg(f) + ']'
					: '{ ' + b.map(([x, y]) => x + ': ' + So(y, D)).join(', ') + ' }'
			}
			function $g(f, D) {
				if (f.length === 0) return '[]'
				if (D.length > 2) return '[Array]'
				let b = Math.min(10, f.length),
					x = f.length - b,
					y = []
				for (let V = 0; V < b; ++V) y.push(So(f[V], D))
				return (
					x === 1 ? y.push('... 1 more item') : x > 1 && y.push(`... ${x} more items`),
					'[' + y.join(', ') + ']'
				)
			}
			function jg(f) {
				let D = Object.prototype.toString
					.call(f)
					.replace(/^\[object /, '')
					.replace(/]$/, '')
				if (D === 'Object' && typeof f.constructor == 'function') {
					let b = f.constructor.name
					if (typeof b == 'string' && b !== '') return b
				}
				return D
			}
			var qg =
					globalThis.process && globalThis.process.env.NODE_ENV === 'production'
						? function (f, D) {
								return f instanceof D
						  }
						: function (f, D) {
								if (f instanceof D) return !0
								if (typeof f == 'object' && f !== null) {
									var b
									let x = D.prototype[Symbol.toStringTag],
										y =
											Symbol.toStringTag in f
												? f[Symbol.toStringTag]
												: (b = f.constructor) === null || b === void 0
												? void 0
												: b.name
									if (x === y) {
										let V = Tf(f)
										throw new Error(`Cannot use ${x} "${V}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)
									}
								}
								return !1
						  },
				Sf = class {
					constructor(f, D = 'GraphQL request', b = { line: 1, column: 1 }) {
						typeof f == 'string' || zu(!1, `Body must be a string. Received: ${Tf(f)}.`),
							(this.body = f),
							(this.name = D),
							(this.locationOffset = b),
							this.locationOffset.line > 0 ||
								zu(!1, 'line in locationOffset is 1-indexed and must be positive.'),
							this.locationOffset.column > 0 ||
								zu(!1, 'column in locationOffset is 1-indexed and must be positive.')
					}
					get [Symbol.toStringTag]() {
						return 'Source'
					}
				}
			function Gg(f) {
				return qg(f, Sf)
			}
			function Hg(f, D) {
				return new Wg(f, D).parseDocument()
			}
			var Wg = class {
				constructor(f, D = {}) {
					let b = Gg(f) ? f : new Sf(f)
					;(this._lexer = new Ag(b)), (this._options = D), (this._tokenCounter = 0)
				}
				parseName() {
					let f = this.expectToken(j.NAME)
					return this.node(f, { kind: ue.NAME, value: f.value })
				}
				parseDocument() {
					return this.node(this._lexer.token, {
						kind: ue.DOCUMENT,
						definitions: this.many(j.SOF, this.parseDefinition, j.EOF)
					})
				}
				parseDefinition() {
					if (this.peek(j.BRACE_L)) return this.parseOperationDefinition()
					let f = this.peekDescription(),
						D = f ? this._lexer.lookahead() : this._lexer.token
					if (D.kind === j.NAME) {
						switch (D.value) {
							case 'schema':
								return this.parseSchemaDefinition()
							case 'scalar':
								return this.parseScalarTypeDefinition()
							case 'type':
								return this.parseObjectTypeDefinition()
							case 'interface':
								return this.parseInterfaceTypeDefinition()
							case 'union':
								return this.parseUnionTypeDefinition()
							case 'enum':
								return this.parseEnumTypeDefinition()
							case 'input':
								return this.parseInputObjectTypeDefinition()
							case 'directive':
								return this.parseDirectiveDefinition()
						}
						if (f)
							throw ft(
								this._lexer.source,
								this._lexer.token.start,
								'Unexpected description, descriptions are supported only on type definitions.'
							)
						switch (D.value) {
							case 'query':
							case 'mutation':
							case 'subscription':
								return this.parseOperationDefinition()
							case 'fragment':
								return this.parseFragmentDefinition()
							case 'extend':
								return this.parseTypeSystemExtension()
						}
					}
					throw this.unexpected(D)
				}
				parseOperationDefinition() {
					let f = this._lexer.token
					if (this.peek(j.BRACE_L))
						return this.node(f, {
							kind: ue.OPERATION_DEFINITION,
							operation: ei.QUERY,
							name: void 0,
							variableDefinitions: [],
							directives: [],
							selectionSet: this.parseSelectionSet()
						})
					let D = this.parseOperationType(),
						b
					return (
						this.peek(j.NAME) && (b = this.parseName()),
						this.node(f, {
							kind: ue.OPERATION_DEFINITION,
							operation: D,
							name: b,
							variableDefinitions: this.parseVariableDefinitions(),
							directives: this.parseDirectives(!1),
							selectionSet: this.parseSelectionSet()
						})
					)
				}
				parseOperationType() {
					let f = this.expectToken(j.NAME)
					switch (f.value) {
						case 'query':
							return ei.QUERY
						case 'mutation':
							return ei.MUTATION
						case 'subscription':
							return ei.SUBSCRIPTION
					}
					throw this.unexpected(f)
				}
				parseVariableDefinitions() {
					return this.optionalMany(j.PAREN_L, this.parseVariableDefinition, j.PAREN_R)
				}
				parseVariableDefinition() {
					return this.node(this._lexer.token, {
						kind: ue.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(j.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(j.EQUALS)
							? this.parseConstValueLiteral()
							: void 0,
						directives: this.parseConstDirectives()
					})
				}
				parseVariable() {
					let f = this._lexer.token
					return (
						this.expectToken(j.DOLLAR), this.node(f, { kind: ue.VARIABLE, name: this.parseName() })
					)
				}
				parseSelectionSet() {
					return this.node(this._lexer.token, {
						kind: ue.SELECTION_SET,
						selections: this.many(j.BRACE_L, this.parseSelection, j.BRACE_R)
					})
				}
				parseSelection() {
					return this.peek(j.SPREAD) ? this.parseFragment() : this.parseField()
				}
				parseField() {
					let f = this._lexer.token,
						D = this.parseName(),
						b,
						x
					return (
						this.expectOptionalToken(j.COLON) ? ((b = D), (x = this.parseName())) : (x = D),
						this.node(f, {
							kind: ue.FIELD,
							alias: b,
							name: x,
							arguments: this.parseArguments(!1),
							directives: this.parseDirectives(!1),
							selectionSet: this.peek(j.BRACE_L) ? this.parseSelectionSet() : void 0
						})
					)
				}
				parseArguments(f) {
					let D = f ? this.parseConstArgument : this.parseArgument
					return this.optionalMany(j.PAREN_L, D, j.PAREN_R)
				}
				parseArgument(f = !1) {
					let D = this._lexer.token,
						b = this.parseName()
					return (
						this.expectToken(j.COLON),
						this.node(D, { kind: ue.ARGUMENT, name: b, value: this.parseValueLiteral(f) })
					)
				}
				parseConstArgument() {
					return this.parseArgument(!0)
				}
				parseFragment() {
					let f = this._lexer.token
					this.expectToken(j.SPREAD)
					let D = this.expectOptionalKeyword('on')
					return !D && this.peek(j.NAME)
						? this.node(f, {
								kind: ue.FRAGMENT_SPREAD,
								name: this.parseFragmentName(),
								directives: this.parseDirectives(!1)
						  })
						: this.node(f, {
								kind: ue.INLINE_FRAGMENT,
								typeCondition: D ? this.parseNamedType() : void 0,
								directives: this.parseDirectives(!1),
								selectionSet: this.parseSelectionSet()
						  })
				}
				parseFragmentDefinition() {
					let f = this._lexer.token
					return (
						this.expectKeyword('fragment'),
						this._options.allowLegacyFragmentVariables === !0
							? this.node(f, {
									kind: ue.FRAGMENT_DEFINITION,
									name: this.parseFragmentName(),
									variableDefinitions: this.parseVariableDefinitions(),
									typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
									directives: this.parseDirectives(!1),
									selectionSet: this.parseSelectionSet()
							  })
							: this.node(f, {
									kind: ue.FRAGMENT_DEFINITION,
									name: this.parseFragmentName(),
									typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
									directives: this.parseDirectives(!1),
									selectionSet: this.parseSelectionSet()
							  })
					)
				}
				parseFragmentName() {
					if (this._lexer.token.value === 'on') throw this.unexpected()
					return this.parseName()
				}
				parseValueLiteral(f) {
					let D = this._lexer.token
					switch (D.kind) {
						case j.BRACKET_L:
							return this.parseList(f)
						case j.BRACE_L:
							return this.parseObject(f)
						case j.INT:
							return this.advanceLexer(), this.node(D, { kind: ue.INT, value: D.value })
						case j.FLOAT:
							return this.advanceLexer(), this.node(D, { kind: ue.FLOAT, value: D.value })
						case j.STRING:
						case j.BLOCK_STRING:
							return this.parseStringLiteral()
						case j.NAME:
							switch ((this.advanceLexer(), D.value)) {
								case 'true':
									return this.node(D, { kind: ue.BOOLEAN, value: !0 })
								case 'false':
									return this.node(D, { kind: ue.BOOLEAN, value: !1 })
								case 'null':
									return this.node(D, { kind: ue.NULL })
								default:
									return this.node(D, { kind: ue.ENUM, value: D.value })
							}
						case j.DOLLAR:
							if (f)
								if ((this.expectToken(j.DOLLAR), this._lexer.token.kind === j.NAME)) {
									let b = this._lexer.token.value
									throw ft(
										this._lexer.source,
										D.start,
										`Unexpected variable "$${b}" in constant value.`
									)
								} else throw this.unexpected(D)
							return this.parseVariable()
						default:
							throw this.unexpected()
					}
				}
				parseConstValueLiteral() {
					return this.parseValueLiteral(!0)
				}
				parseStringLiteral() {
					let f = this._lexer.token
					return (
						this.advanceLexer(),
						this.node(f, { kind: ue.STRING, value: f.value, block: f.kind === j.BLOCK_STRING })
					)
				}
				parseList(f) {
					let D = () => this.parseValueLiteral(f)
					return this.node(this._lexer.token, {
						kind: ue.LIST,
						values: this.any(j.BRACKET_L, D, j.BRACKET_R)
					})
				}
				parseObject(f) {
					let D = () => this.parseObjectField(f)
					return this.node(this._lexer.token, {
						kind: ue.OBJECT,
						fields: this.any(j.BRACE_L, D, j.BRACE_R)
					})
				}
				parseObjectField(f) {
					let D = this._lexer.token,
						b = this.parseName()
					return (
						this.expectToken(j.COLON),
						this.node(D, { kind: ue.OBJECT_FIELD, name: b, value: this.parseValueLiteral(f) })
					)
				}
				parseDirectives(f) {
					let D = []
					for (; this.peek(j.AT); ) D.push(this.parseDirective(f))
					return D
				}
				parseConstDirectives() {
					return this.parseDirectives(!0)
				}
				parseDirective(f) {
					let D = this._lexer.token
					return (
						this.expectToken(j.AT),
						this.node(D, {
							kind: ue.DIRECTIVE,
							name: this.parseName(),
							arguments: this.parseArguments(f)
						})
					)
				}
				parseTypeReference() {
					let f = this._lexer.token,
						D
					if (this.expectOptionalToken(j.BRACKET_L)) {
						let b = this.parseTypeReference()
						this.expectToken(j.BRACKET_R), (D = this.node(f, { kind: ue.LIST_TYPE, type: b }))
					} else D = this.parseNamedType()
					return this.expectOptionalToken(j.BANG)
						? this.node(f, { kind: ue.NON_NULL_TYPE, type: D })
						: D
				}
				parseNamedType() {
					return this.node(this._lexer.token, { kind: ue.NAMED_TYPE, name: this.parseName() })
				}
				peekDescription() {
					return this.peek(j.STRING) || this.peek(j.BLOCK_STRING)
				}
				parseDescription() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}
				parseSchemaDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('schema')
					let b = this.parseConstDirectives(),
						x = this.many(j.BRACE_L, this.parseOperationTypeDefinition, j.BRACE_R)
					return this.node(f, {
						kind: ue.SCHEMA_DEFINITION,
						description: D,
						directives: b,
						operationTypes: x
					})
				}
				parseOperationTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseOperationType()
					this.expectToken(j.COLON)
					let b = this.parseNamedType()
					return this.node(f, { kind: ue.OPERATION_TYPE_DEFINITION, operation: D, type: b })
				}
				parseScalarTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('scalar')
					let b = this.parseName(),
						x = this.parseConstDirectives()
					return this.node(f, {
						kind: ue.SCALAR_TYPE_DEFINITION,
						description: D,
						name: b,
						directives: x
					})
				}
				parseObjectTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('type')
					let b = this.parseName(),
						x = this.parseImplementsInterfaces(),
						y = this.parseConstDirectives(),
						V = this.parseFieldsDefinition()
					return this.node(f, {
						kind: ue.OBJECT_TYPE_DEFINITION,
						description: D,
						name: b,
						interfaces: x,
						directives: y,
						fields: V
					})
				}
				parseImplementsInterfaces() {
					return this.expectOptionalKeyword('implements')
						? this.delimitedMany(j.AMP, this.parseNamedType)
						: []
				}
				parseFieldsDefinition() {
					return this.optionalMany(j.BRACE_L, this.parseFieldDefinition, j.BRACE_R)
				}
				parseFieldDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription(),
						b = this.parseName(),
						x = this.parseArgumentDefs()
					this.expectToken(j.COLON)
					let y = this.parseTypeReference(),
						V = this.parseConstDirectives()
					return this.node(f, {
						kind: ue.FIELD_DEFINITION,
						description: D,
						name: b,
						arguments: x,
						type: y,
						directives: V
					})
				}
				parseArgumentDefs() {
					return this.optionalMany(j.PAREN_L, this.parseInputValueDef, j.PAREN_R)
				}
				parseInputValueDef() {
					let f = this._lexer.token,
						D = this.parseDescription(),
						b = this.parseName()
					this.expectToken(j.COLON)
					let x = this.parseTypeReference(),
						y
					this.expectOptionalToken(j.EQUALS) && (y = this.parseConstValueLiteral())
					let V = this.parseConstDirectives()
					return this.node(f, {
						kind: ue.INPUT_VALUE_DEFINITION,
						description: D,
						name: b,
						type: x,
						defaultValue: y,
						directives: V
					})
				}
				parseInterfaceTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('interface')
					let b = this.parseName(),
						x = this.parseImplementsInterfaces(),
						y = this.parseConstDirectives(),
						V = this.parseFieldsDefinition()
					return this.node(f, {
						kind: ue.INTERFACE_TYPE_DEFINITION,
						description: D,
						name: b,
						interfaces: x,
						directives: y,
						fields: V
					})
				}
				parseUnionTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('union')
					let b = this.parseName(),
						x = this.parseConstDirectives(),
						y = this.parseUnionMemberTypes()
					return this.node(f, {
						kind: ue.UNION_TYPE_DEFINITION,
						description: D,
						name: b,
						directives: x,
						types: y
					})
				}
				parseUnionMemberTypes() {
					return this.expectOptionalToken(j.EQUALS)
						? this.delimitedMany(j.PIPE, this.parseNamedType)
						: []
				}
				parseEnumTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('enum')
					let b = this.parseName(),
						x = this.parseConstDirectives(),
						y = this.parseEnumValuesDefinition()
					return this.node(f, {
						kind: ue.ENUM_TYPE_DEFINITION,
						description: D,
						name: b,
						directives: x,
						values: y
					})
				}
				parseEnumValuesDefinition() {
					return this.optionalMany(j.BRACE_L, this.parseEnumValueDefinition, j.BRACE_R)
				}
				parseEnumValueDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription(),
						b = this.parseEnumValueName(),
						x = this.parseConstDirectives()
					return this.node(f, {
						kind: ue.ENUM_VALUE_DEFINITION,
						description: D,
						name: b,
						directives: x
					})
				}
				parseEnumValueName() {
					if (
						this._lexer.token.value === 'true' ||
						this._lexer.token.value === 'false' ||
						this._lexer.token.value === 'null'
					)
						throw ft(
							this._lexer.source,
							this._lexer.token.start,
							`${Ao(this._lexer.token)} is reserved and cannot be used for an enum value.`
						)
					return this.parseName()
				}
				parseInputObjectTypeDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('input')
					let b = this.parseName(),
						x = this.parseConstDirectives(),
						y = this.parseInputFieldsDefinition()
					return this.node(f, {
						kind: ue.INPUT_OBJECT_TYPE_DEFINITION,
						description: D,
						name: b,
						directives: x,
						fields: y
					})
				}
				parseInputFieldsDefinition() {
					return this.optionalMany(j.BRACE_L, this.parseInputValueDef, j.BRACE_R)
				}
				parseTypeSystemExtension() {
					let f = this._lexer.lookahead()
					if (f.kind === j.NAME)
						switch (f.value) {
							case 'schema':
								return this.parseSchemaExtension()
							case 'scalar':
								return this.parseScalarTypeExtension()
							case 'type':
								return this.parseObjectTypeExtension()
							case 'interface':
								return this.parseInterfaceTypeExtension()
							case 'union':
								return this.parseUnionTypeExtension()
							case 'enum':
								return this.parseEnumTypeExtension()
							case 'input':
								return this.parseInputObjectTypeExtension()
						}
					throw this.unexpected(f)
				}
				parseSchemaExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('schema')
					let D = this.parseConstDirectives(),
						b = this.optionalMany(j.BRACE_L, this.parseOperationTypeDefinition, j.BRACE_R)
					if (D.length === 0 && b.length === 0) throw this.unexpected()
					return this.node(f, { kind: ue.SCHEMA_EXTENSION, directives: D, operationTypes: b })
				}
				parseScalarTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('scalar')
					let D = this.parseName(),
						b = this.parseConstDirectives()
					if (b.length === 0) throw this.unexpected()
					return this.node(f, { kind: ue.SCALAR_TYPE_EXTENSION, name: D, directives: b })
				}
				parseObjectTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('type')
					let D = this.parseName(),
						b = this.parseImplementsInterfaces(),
						x = this.parseConstDirectives(),
						y = this.parseFieldsDefinition()
					if (b.length === 0 && x.length === 0 && y.length === 0) throw this.unexpected()
					return this.node(f, {
						kind: ue.OBJECT_TYPE_EXTENSION,
						name: D,
						interfaces: b,
						directives: x,
						fields: y
					})
				}
				parseInterfaceTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('interface')
					let D = this.parseName(),
						b = this.parseImplementsInterfaces(),
						x = this.parseConstDirectives(),
						y = this.parseFieldsDefinition()
					if (b.length === 0 && x.length === 0 && y.length === 0) throw this.unexpected()
					return this.node(f, {
						kind: ue.INTERFACE_TYPE_EXTENSION,
						name: D,
						interfaces: b,
						directives: x,
						fields: y
					})
				}
				parseUnionTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('union')
					let D = this.parseName(),
						b = this.parseConstDirectives(),
						x = this.parseUnionMemberTypes()
					if (b.length === 0 && x.length === 0) throw this.unexpected()
					return this.node(f, { kind: ue.UNION_TYPE_EXTENSION, name: D, directives: b, types: x })
				}
				parseEnumTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('enum')
					let D = this.parseName(),
						b = this.parseConstDirectives(),
						x = this.parseEnumValuesDefinition()
					if (b.length === 0 && x.length === 0) throw this.unexpected()
					return this.node(f, { kind: ue.ENUM_TYPE_EXTENSION, name: D, directives: b, values: x })
				}
				parseInputObjectTypeExtension() {
					let f = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('input')
					let D = this.parseName(),
						b = this.parseConstDirectives(),
						x = this.parseInputFieldsDefinition()
					if (b.length === 0 && x.length === 0) throw this.unexpected()
					return this.node(f, {
						kind: ue.INPUT_OBJECT_TYPE_EXTENSION,
						name: D,
						directives: b,
						fields: x
					})
				}
				parseDirectiveDefinition() {
					let f = this._lexer.token,
						D = this.parseDescription()
					this.expectKeyword('directive'), this.expectToken(j.AT)
					let b = this.parseName(),
						x = this.parseArgumentDefs(),
						y = this.expectOptionalKeyword('repeatable')
					this.expectKeyword('on')
					let V = this.parseDirectiveLocations()
					return this.node(f, {
						kind: ue.DIRECTIVE_DEFINITION,
						description: D,
						name: b,
						arguments: x,
						repeatable: y,
						locations: V
					})
				}
				parseDirectiveLocations() {
					return this.delimitedMany(j.PIPE, this.parseDirectiveLocation)
				}
				parseDirectiveLocation() {
					let f = this._lexer.token,
						D = this.parseName()
					if (Object.prototype.hasOwnProperty.call(Wu, D.value)) return D
					throw this.unexpected(f)
				}
				node(f, D) {
					return (
						this._options.noLocation !== !0 &&
							(D.loc = new Zr(f, this._lexer.lastToken, this._lexer.source)),
						D
					)
				}
				peek(f) {
					return this._lexer.token.kind === f
				}
				expectToken(f) {
					let D = this._lexer.token
					if (D.kind === f) return this.advanceLexer(), D
					throw ft(this._lexer.source, D.start, `Expected ${Af(f)}, found ${Ao(D)}.`)
				}
				expectOptionalToken(f) {
					return this._lexer.token.kind === f ? (this.advanceLexer(), !0) : !1
				}
				expectKeyword(f) {
					let D = this._lexer.token
					if (D.kind === j.NAME && D.value === f) this.advanceLexer()
					else throw ft(this._lexer.source, D.start, `Expected "${f}", found ${Ao(D)}.`)
				}
				expectOptionalKeyword(f) {
					let D = this._lexer.token
					return D.kind === j.NAME && D.value === f ? (this.advanceLexer(), !0) : !1
				}
				unexpected(f) {
					let D = f ?? this._lexer.token
					return ft(this._lexer.source, D.start, `Unexpected ${Ao(D)}.`)
				}
				any(f, D, b) {
					this.expectToken(f)
					let x = []
					for (; !this.expectOptionalToken(b); ) x.push(D.call(this))
					return x
				}
				optionalMany(f, D, b) {
					if (this.expectOptionalToken(f)) {
						let x = []
						do x.push(D.call(this))
						while (!this.expectOptionalToken(b))
						return x
					}
					return []
				}
				many(f, D, b) {
					this.expectToken(f)
					let x = []
					do x.push(D.call(this))
					while (!this.expectOptionalToken(b))
					return x
				}
				delimitedMany(f, D) {
					this.expectOptionalToken(f)
					let b = []
					do b.push(D.call(this))
					while (this.expectOptionalToken(f))
					return b
				}
				advanceLexer() {
					let { maxTokens: f } = this._options,
						D = this._lexer.advance()
					if (f !== void 0 && D.kind !== j.EOF && (++this._tokenCounter, this._tokenCounter > f))
						throw ft(
							this._lexer.source,
							D.start,
							`Document contains more that ${f} tokens. Parsing aborted.`
						)
				}
			}
			function Ao(f) {
				let D = f.value
				return Af(f.kind) + (D != null ? ` "${D}"` : '')
			}
			function Af(f) {
				return Fg(f) ? `"${f}"` : f
			}
			function Qg(f, D) {
				let b = new SyntaxError(f + ' (' + D.loc.start.line + ':' + D.loc.start.column + ')')
				return Object.assign(b, D)
			}
			var zg = Qg
			function Yg(f) {
				let D = [],
					{ startToken: b, endToken: x } = f.loc
				for (let y = b; y !== x; y = y.next)
					y.kind === 'Comment' && D.push({ ...y, loc: { start: y.start, end: y.end } })
				return D
			}
			var Jg = { allowLegacyFragmentVariables: !0 }
			function Xg(f) {
				if (f?.name === 'GraphQLError') {
					let {
						message: D,
						locations: [b]
					} = f
					return zg(D, { loc: { start: b }, cause: f })
				}
				return f
			}
			function Kg(f) {
				let D
				try {
					D = Hg(f, Jg)
				} catch (b) {
					throw Xg(b)
				}
				return (D.comments = Yg(D)), D
			}
			var Zg = { parse: Kg, astFormat: 'graphql', hasPragma: rg, locStart: df, locEnd: pf },
				e4 = { graphql: dg }
			return o(a)
		})
	})
	var Ku = class {
			constructor() {
				;(this.listeners = []),
					(this.unexpectedErrorHandler = function (t) {
						setTimeout(() => {
							throw t.stack
								? ms.isErrorNoTelemetry(t)
									? new ms(
											t.message +
												`

` +
												t.stack
									  )
									: new Error(
											t.message +
												`

` +
												t.stack
									  )
								: t
						}, 0)
					})
			}
			emit(t) {
				this.listeners.forEach((n) => {
					n(t)
				})
			}
			onUnexpectedError(t) {
				this.unexpectedErrorHandler(t), this.emit(t)
			}
			onUnexpectedExternalError(t) {
				this.unexpectedErrorHandler(t)
			}
		},
		l4 = new Ku()
	function In(e) {
		c4(e) || l4.onUnexpectedError(e)
	}
	function el(e) {
		if (e instanceof Error) {
			let { name: t, message: n } = e,
				r = e.stacktrace || e.stack
			return { $isError: !0, name: t, message: n, stack: r, noTelemetry: ms.isErrorNoTelemetry(e) }
		}
		return e
	}
	var Zu = 'Canceled'
	function c4(e) {
		return e instanceof Fo ? !0 : e instanceof Error && e.name === Zu && e.message === Zu
	}
	var Fo = class extends Error {
		constructor() {
			super(Zu), (this.name = this.message)
		}
	}
	var ms = class e extends Error {
			constructor(t) {
				super(t), (this.name = 'CodeExpectedError')
			}
			static fromError(t) {
				if (t instanceof e) return t
				let n = new e()
				return (n.message = t.message), (n.stack = t.stack), n
			}
			static isErrorNoTelemetry(t) {
				return t.name === 'CodeExpectedError'
			}
		},
		it = class e extends Error {
			constructor(t) {
				super(t || 'An unexpected bug occurred.'), Object.setPrototypeOf(this, e.prototype)
			}
		}
	function tl(e, t) {
		let n = this,
			r = !1,
			i
		return function () {
			if (r) return i
			if (((r = !0), t))
				try {
					i = e.apply(n, arguments)
				} finally {
					t()
				}
			else i = e.apply(n, arguments)
			return i
		}
	}
	var ii
	;(function (e) {
		function t(S) {
			return S && typeof S == 'object' && typeof S[Symbol.iterator] == 'function'
		}
		e.is = t
		let n = Object.freeze([])
		function r() {
			return n
		}
		e.empty = r
		function* i(S) {
			yield S
		}
		e.single = i
		function s(S) {
			return t(S) ? S : i(S)
		}
		e.wrap = s
		function o(S) {
			return S || n
		}
		e.from = o
		function* a(S) {
			for (let k = S.length - 1; k >= 0; k--) yield S[k]
		}
		e.reverse = a
		function u(S) {
			return !S || S[Symbol.iterator]().next().done === !0
		}
		e.isEmpty = u
		function l(S) {
			return S[Symbol.iterator]().next().value
		}
		e.first = l
		function c(S, k) {
			let M = 0
			for (let I of S) if (k(I, M++)) return !0
			return !1
		}
		e.some = c
		function d(S, k) {
			for (let M of S) if (k(M)) return M
		}
		e.find = d
		function* h(S, k) {
			for (let M of S) k(M) && (yield M)
		}
		e.filter = h
		function* m(S, k) {
			let M = 0
			for (let I of S) yield k(I, M++)
		}
		e.map = m
		function* g(S, k) {
			let M = 0
			for (let I of S) yield* k(I, M++)
		}
		e.flatMap = g
		function* v(...S) {
			for (let k of S) yield* k
		}
		e.concat = v
		function N(S, k, M) {
			let I = M
			for (let B of S) I = k(I, B)
			return I
		}
		e.reduce = N
		function* _(S, k, M = S.length) {
			for (
				k < 0 && (k += S.length), M < 0 ? (M += S.length) : M > S.length && (M = S.length);
				k < M;
				k++
			)
				yield S[k]
		}
		e.slice = _
		function w(S, k = Number.POSITIVE_INFINITY) {
			let M = []
			if (k === 0) return [M, S]
			let I = S[Symbol.iterator]()
			for (let B = 0; B < k; B++) {
				let L = I.next()
				if (L.done) return [M, e.empty()]
				M.push(L.value)
			}
			return [
				M,
				{
					[Symbol.iterator]() {
						return I
					}
				}
			]
		}
		e.consume = w
		async function C(S) {
			let k = []
			for await (let M of S) k.push(M)
			return Promise.resolve(k)
		}
		e.asyncToArray = C
	})(ii || (ii = {}))
	var d4 = !1,
		si = null
	function p4(e) {
		si = e
	}
	if (d4) {
		let e = '__is_disposable_tracked__'
		p4(
			new (class {
				trackDisposable(t) {
					let n = new Error('Potentially leaked disposable').stack
					setTimeout(() => {
						t[e] || console.log(n)
					}, 3e3)
				}
				setParent(t, n) {
					if (t && t !== Xt.None)
						try {
							t[e] = !0
						} catch {}
				}
				markAsDisposed(t) {
					if (t && t !== Xt.None)
						try {
							t[e] = !0
						} catch {}
				}
				markAsSingleton(t) {}
			})()
		)
	}
	function wo(e) {
		return si?.trackDisposable(e), e
	}
	function Lo(e) {
		si?.markAsDisposed(e)
	}
	function nl(e, t) {
		si?.setParent(e, t)
	}
	function h4(e, t) {
		if (si) for (let n of e) si.setParent(n, t)
	}
	function Co(e) {
		if (ii.is(e)) {
			let t = []
			for (let n of e)
				if (n)
					try {
						n.dispose()
					} catch (r) {
						t.push(r)
					}
			if (t.length === 1) throw t[0]
			if (t.length > 1) throw new AggregateError(t, 'Encountered errors while disposing of store')
			return Array.isArray(e) ? [] : e
		} else if (e) return e.dispose(), e
	}
	function Lf(...e) {
		let t = Zn(() => Co(e))
		return h4(e, t), t
	}
	function Zn(e) {
		let t = wo({
			dispose: tl(() => {
				Lo(t), e()
			})
		})
		return t
	}
	var yr = class e {
			static {
				this.DISABLE_DISPOSED_WARNING = !1
			}
			constructor() {
				;(this._toDispose = new Set()), (this._isDisposed = !1), wo(this)
			}
			dispose() {
				this._isDisposed || (Lo(this), (this._isDisposed = !0), this.clear())
			}
			get isDisposed() {
				return this._isDisposed
			}
			clear() {
				if (this._toDispose.size !== 0)
					try {
						Co(this._toDispose)
					} finally {
						this._toDispose.clear()
					}
			}
			add(t) {
				if (!t) return t
				if (t === this) throw new Error('Cannot register a disposable on itself!')
				return (
					nl(t, this),
					this._isDisposed
						? e.DISABLE_DISPOSED_WARNING ||
						  console.warn(
								new Error(
									'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
								).stack
						  )
						: this._toDispose.add(t),
					t
				)
			}
			deleteAndLeak(t) {
				t && this._toDispose.has(t) && (this._toDispose.delete(t), nl(t, null))
			}
		},
		Xt = class {
			static {
				this.None = Object.freeze({ dispose() {} })
			}
			constructor() {
				;(this._store = new yr()), wo(this), nl(this._store, this)
			}
			dispose() {
				Lo(this), this._store.dispose()
			}
			_register(t) {
				if (t === this) throw new Error('Cannot register a disposable on itself!')
				return this._store.add(t)
			}
		}
	var wf = class {
		constructor() {
			;(this._store = new Map()), (this._isDisposed = !1), wo(this)
		}
		dispose() {
			Lo(this), (this._isDisposed = !0), this.clearAndDisposeAll()
		}
		clearAndDisposeAll() {
			if (this._store.size)
				try {
					Co(this._store.values())
				} finally {
					this._store.clear()
				}
		}
		get(t) {
			return this._store.get(t)
		}
		set(t, n, r = !1) {
			this._isDisposed &&
				console.warn(
					new Error(
						'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!'
					).stack
				),
				r || this._store.get(t)?.dispose(),
				this._store.set(t, n)
		}
		deleteAndDispose(t) {
			this._store.get(t)?.dispose(), this._store.delete(t)
		}
		[Symbol.iterator]() {
			return this._store[Symbol.iterator]()
		}
	}
	var $e = class e {
			static {
				this.Undefined = new e(void 0)
			}
			constructor(t) {
				;(this.element = t), (this.next = e.Undefined), (this.prev = e.Undefined)
			}
		},
		gs = class {
			constructor() {
				;(this._first = $e.Undefined), (this._last = $e.Undefined), (this._size = 0)
			}
			get size() {
				return this._size
			}
			isEmpty() {
				return this._first === $e.Undefined
			}
			clear() {
				let t = this._first
				for (; t !== $e.Undefined; ) {
					let n = t.next
					;(t.prev = $e.Undefined), (t.next = $e.Undefined), (t = n)
				}
				;(this._first = $e.Undefined), (this._last = $e.Undefined), (this._size = 0)
			}
			unshift(t) {
				return this._insert(t, !1)
			}
			push(t) {
				return this._insert(t, !0)
			}
			_insert(t, n) {
				let r = new $e(t)
				if (this._first === $e.Undefined) (this._first = r), (this._last = r)
				else if (n) {
					let s = this._last
					;(this._last = r), (r.prev = s), (s.next = r)
				} else {
					let s = this._first
					;(this._first = r), (r.next = s), (s.prev = r)
				}
				this._size += 1
				let i = !1
				return () => {
					i || ((i = !0), this._remove(r))
				}
			}
			shift() {
				if (this._first !== $e.Undefined) {
					let t = this._first.element
					return this._remove(this._first), t
				}
			}
			pop() {
				if (this._last !== $e.Undefined) {
					let t = this._last.element
					return this._remove(this._last), t
				}
			}
			_remove(t) {
				if (t.prev !== $e.Undefined && t.next !== $e.Undefined) {
					let n = t.prev
					;(n.next = t.next), (t.next.prev = n)
				} else
					t.prev === $e.Undefined && t.next === $e.Undefined
						? ((this._first = $e.Undefined), (this._last = $e.Undefined))
						: t.next === $e.Undefined
						? ((this._last = this._last.prev), (this._last.next = $e.Undefined))
						: t.prev === $e.Undefined &&
						  ((this._first = this._first.next), (this._first.prev = $e.Undefined))
				this._size -= 1
			}
			*[Symbol.iterator]() {
				let t = this._first
				for (; t !== $e.Undefined; ) yield t.element, (t = t.next)
			}
		}
	var m4 = globalThis.performance && typeof globalThis.performance.now == 'function',
		oi = class e {
			static create(t) {
				return new e(t)
			}
			constructor(t) {
				;(this._now =
					m4 && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
					(this._startTime = this._now()),
					(this._stopTime = -1)
			}
			stop() {
				this._stopTime = this._now()
			}
			reset() {
				;(this._startTime = this._now()), (this._stopTime = -1)
			}
			elapsed() {
				return this._stopTime !== -1
					? this._stopTime - this._startTime
					: this._now() - this._startTime
			}
		}
	var g4 = !1,
		Cf = !1,
		D4 = !1,
		ui
	;(function (e) {
		e.None = () => Xt.None
		function t(F) {
			if (D4) {
				let { onDidAddListener: T } = F,
					Q = Ds.create(),
					$ = 0
				F.onDidAddListener = () => {
					++$ === 2 &&
						(console.warn(
							'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here'
						),
						Q.print()),
						T?.()
				}
			}
		}
		function n(F, T) {
			return m(F, () => {}, 0, void 0, !0, void 0, T)
		}
		e.defer = n
		function r(F) {
			return (T, Q = null, $) => {
				let ee = !1,
					ne
				return (
					(ne = F(
						(se) => {
							if (!ee) return ne ? ne.dispose() : (ee = !0), T.call(Q, se)
						},
						null,
						$
					)),
					ee && ne.dispose(),
					ne
				)
			}
		}
		e.once = r
		function i(F, T) {
			return e.once(e.filter(F, T))
		}
		e.onceIf = i
		function s(F, T, Q) {
			return d(($, ee = null, ne) => F((se) => $.call(ee, T(se)), null, ne), Q)
		}
		e.map = s
		function o(F, T, Q) {
			return d(
				($, ee = null, ne) =>
					F(
						(se) => {
							T(se), $.call(ee, se)
						},
						null,
						ne
					),
				Q
			)
		}
		e.forEach = o
		function a(F, T, Q) {
			return d(($, ee = null, ne) => F((se) => T(se) && $.call(ee, se), null, ne), Q)
		}
		e.filter = a
		function u(F) {
			return F
		}
		e.signal = u
		function l(...F) {
			return (T, Q = null, $) => {
				let ee = Lf(...F.map((ne) => ne((se) => T.call(Q, se))))
				return h(ee, $)
			}
		}
		e.any = l
		function c(F, T, Q, $) {
			let ee = Q
			return s(F, (ne) => ((ee = T(ee, ne)), ee), $)
		}
		e.reduce = c
		function d(F, T) {
			let Q,
				$ = {
					onWillAddFirstListener() {
						Q = F(ee.fire, ee)
					},
					onDidRemoveLastListener() {
						Q?.dispose()
					}
				}
			T || t($)
			let ee = new lt($)
			return T?.add(ee), ee.event
		}
		function h(F, T) {
			return T instanceof Array ? T.push(F) : T && T.add(F), F
		}
		function m(F, T, Q = 100, $ = !1, ee = !1, ne, se) {
			let Ie,
				P,
				Z,
				J = 0,
				G,
				_e = {
					leakWarningThreshold: ne,
					onWillAddFirstListener() {
						Ie = F((H) => {
							J++,
								(P = T(P, H)),
								$ && !Z && (Re.fire(P), (P = void 0)),
								(G = () => {
									let Ne = P
									;(P = void 0), (Z = void 0), (!$ || J > 1) && Re.fire(Ne), (J = 0)
								}),
								typeof Q == 'number'
									? (clearTimeout(Z), (Z = setTimeout(G, Q)))
									: Z === void 0 && ((Z = 0), queueMicrotask(G))
						})
					},
					onWillRemoveListener() {
						ee && J > 0 && G?.()
					},
					onDidRemoveLastListener() {
						;(G = void 0), Ie.dispose()
					}
				}
			se || t(_e)
			let Re = new lt(_e)
			return se?.add(Re), Re.event
		}
		e.debounce = m
		function g(F, T = 0, Q) {
			return e.debounce(F, ($, ee) => ($ ? ($.push(ee), $) : [ee]), T, void 0, !0, void 0, Q)
		}
		e.accumulate = g
		function v(F, T = ($, ee) => $ === ee, Q) {
			let $ = !0,
				ee
			return a(
				F,
				(ne) => {
					let se = $ || !T(ne, ee)
					return ($ = !1), (ee = ne), se
				},
				Q
			)
		}
		e.latch = v
		function N(F, T, Q) {
			return [e.filter(F, T, Q), e.filter(F, ($) => !T($), Q)]
		}
		e.split = N
		function _(F, T = !1, Q = [], $) {
			let ee = Q.slice(),
				ne = F((P) => {
					ee ? ee.push(P) : Ie.fire(P)
				})
			$ && $.add(ne)
			let se = () => {
					ee?.forEach((P) => Ie.fire(P)), (ee = null)
				},
				Ie = new lt({
					onWillAddFirstListener() {
						ne || ((ne = F((P) => Ie.fire(P))), $ && $.add(ne))
					},
					onDidAddFirstListener() {
						ee && (T ? setTimeout(se) : se())
					},
					onDidRemoveLastListener() {
						ne && ne.dispose(), (ne = null)
					}
				})
			return $ && $.add(Ie), Ie.event
		}
		e.buffer = _
		function w(F, T) {
			return ($, ee, ne) => {
				let se = T(new S())
				return F(
					function (Ie) {
						let P = se.evaluate(Ie)
						P !== C && $.call(ee, P)
					},
					void 0,
					ne
				)
			}
		}
		e.chain = w
		let C = Symbol('HaltChainable')
		class S {
			constructor() {
				this.steps = []
			}
			map(T) {
				return this.steps.push(T), this
			}
			forEach(T) {
				return this.steps.push((Q) => (T(Q), Q)), this
			}
			filter(T) {
				return this.steps.push((Q) => (T(Q) ? Q : C)), this
			}
			reduce(T, Q) {
				let $ = Q
				return this.steps.push((ee) => (($ = T($, ee)), $)), this
			}
			latch(T = (Q, $) => Q === $) {
				let Q = !0,
					$
				return (
					this.steps.push((ee) => {
						let ne = Q || !T(ee, $)
						return (Q = !1), ($ = ee), ne ? ee : C
					}),
					this
				)
			}
			evaluate(T) {
				for (let Q of this.steps) if (((T = Q(T)), T === C)) break
				return T
			}
		}
		function k(F, T, Q = ($) => $) {
			let $ = (...Ie) => se.fire(Q(...Ie)),
				ee = () => F.on(T, $),
				ne = () => F.removeListener(T, $),
				se = new lt({ onWillAddFirstListener: ee, onDidRemoveLastListener: ne })
			return se.event
		}
		e.fromNodeEventEmitter = k
		function M(F, T, Q = ($) => $) {
			let $ = (...Ie) => se.fire(Q(...Ie)),
				ee = () => F.addEventListener(T, $),
				ne = () => F.removeEventListener(T, $),
				se = new lt({ onWillAddFirstListener: ee, onDidRemoveLastListener: ne })
			return se.event
		}
		e.fromDOMEventEmitter = M
		function I(F) {
			return new Promise((T) => r(F)(T))
		}
		e.toPromise = I
		function B(F) {
			let T = new lt()
			return (
				F.then(
					(Q) => {
						T.fire(Q)
					},
					() => {
						T.fire(void 0)
					}
				).finally(() => {
					T.dispose()
				}),
				T.event
			)
		}
		e.fromPromise = B
		function L(F, T) {
			return F((Q) => T.fire(Q))
		}
		e.forward = L
		function A(F, T, Q) {
			return T(Q), F(($) => T($))
		}
		e.runAndSubscribe = A
		class X {
			constructor(T, Q) {
				;(this._observable = T), (this._counter = 0), (this._hasChanged = !1)
				let $ = {
					onWillAddFirstListener: () => {
						T.addObserver(this), this._observable.reportChanges()
					},
					onDidRemoveLastListener: () => {
						T.removeObserver(this)
					}
				}
				Q || t($), (this.emitter = new lt($)), Q && Q.add(this.emitter)
			}
			beginUpdate(T) {
				this._counter++
			}
			handlePossibleChange(T) {}
			handleChange(T, Q) {
				this._hasChanged = !0
			}
			endUpdate(T) {
				this._counter--,
					this._counter === 0 &&
						(this._observable.reportChanges(),
						this._hasChanged &&
							((this._hasChanged = !1), this.emitter.fire(this._observable.get())))
			}
		}
		function z(F, T) {
			return new X(F, T).emitter.event
		}
		e.fromObservable = z
		function fe(F) {
			return (T, Q, $) => {
				let ee = 0,
					ne = !1,
					se = {
						beginUpdate() {
							ee++
						},
						endUpdate() {
							ee--, ee === 0 && (F.reportChanges(), ne && ((ne = !1), T.call(Q)))
						},
						handlePossibleChange() {},
						handleChange() {
							ne = !0
						}
					}
				F.addObserver(se), F.reportChanges()
				let Ie = {
					dispose() {
						F.removeObserver(se)
					}
				}
				return $ instanceof yr ? $.add(Ie) : Array.isArray($) && $.push(Ie), Ie
			}
		}
		e.fromObservableLight = fe
	})(ui || (ui = {}))
	var rl = class e {
			static {
				this.all = new Set()
			}
			static {
				this._idPool = 0
			}
			constructor(t) {
				;(this.listenerCount = 0),
					(this.invocationCount = 0),
					(this.elapsedOverall = 0),
					(this.durations = []),
					(this.name = `${t}_${e._idPool++}`),
					e.all.add(this)
			}
			start(t) {
				;(this._stopWatch = new oi()), (this.listenerCount = t)
			}
			stop() {
				if (this._stopWatch) {
					let t = this._stopWatch.elapsed()
					this.durations.push(t),
						(this.elapsedOverall += t),
						(this.invocationCount += 1),
						(this._stopWatch = void 0)
				}
			}
		},
		If = -1,
		il = class e {
			static {
				this._idPool = 1
			}
			constructor(t, n, r = (e._idPool++).toString(16).padStart(3, '0')) {
				;(this._errorHandler = t), (this.threshold = n), (this.name = r), (this._warnCountdown = 0)
			}
			dispose() {
				this._stacks?.clear()
			}
			check(t, n) {
				let r = this.threshold
				if (r <= 0 || n < r) return
				this._stacks || (this._stacks = new Map())
				let i = this._stacks.get(t.value) || 0
				if (
					(this._stacks.set(t.value, i + 1), (this._warnCountdown -= 1), this._warnCountdown <= 0)
				) {
					this._warnCountdown = r * 0.5
					let [s, o] = this.getMostFrequentStack(),
						a = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${o}):`
					console.warn(a), console.warn(s)
					let u = new sl(a, s)
					this._errorHandler(u)
				}
				return () => {
					let s = this._stacks.get(t.value) || 0
					this._stacks.set(t.value, s - 1)
				}
			}
			getMostFrequentStack() {
				if (!this._stacks) return
				let t,
					n = 0
				for (let [r, i] of this._stacks) (!t || n < i) && ((t = [r, i]), (n = i))
				return t
			}
		},
		Ds = class e {
			static create() {
				let t = new Error()
				return new e(t.stack ?? '')
			}
			constructor(t) {
				this.value = t
			}
			print() {
				console.warn(
					this.value
						.split(
							`
`
						)
						.slice(2).join(`
`)
				)
			}
		},
		sl = class extends Error {
			constructor(t, n) {
				super(t), (this.name = 'ListenerLeakError'), (this.stack = n)
			}
		},
		ol = class extends Error {
			constructor(t, n) {
				super(t), (this.name = 'ListenerRefusalError'), (this.stack = n)
			}
		},
		ai = class {
			constructor(t) {
				this.value = t
			}
		},
		v4 = 2,
		b4 = (e, t) => {
			if (e instanceof ai) t(e)
			else
				for (let n = 0; n < e.length; n++) {
					let r = e[n]
					r && t(r)
				}
		},
		Io
	if (g4) {
		let e = []
		setInterval(() => {
			e.length !== 0 &&
				(console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
				console.warn(
					e.join(`
`)
				),
				(e.length = 0))
		}, 3e3),
			(Io = new FinalizationRegistry((t) => {
				typeof t == 'string' && e.push(t)
			}))
	}
	var lt = class {
		constructor(t) {
			;(this._size = 0),
				(this._options = t),
				(this._leakageMon =
					If > 0 || this._options?.leakWarningThreshold
						? new il(t?.onListenerError ?? In, this._options?.leakWarningThreshold ?? If)
						: void 0),
				(this._perfMon = this._options?._profName ? new rl(this._options._profName) : void 0),
				(this._deliveryQueue = this._options?.deliveryQueue)
		}
		dispose() {
			if (!this._disposed) {
				if (
					((this._disposed = !0),
					this._deliveryQueue?.current === this && this._deliveryQueue.reset(),
					this._listeners)
				) {
					if (Cf) {
						let t = this._listeners
						queueMicrotask(() => {
							b4(t, (n) => n.stack?.print())
						})
					}
					;(this._listeners = void 0), (this._size = 0)
				}
				this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose()
			}
		}
		get event() {
			return (
				(this._event ??= (t, n, r) => {
					if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
						let u = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`
						console.warn(u)
						let l = this._leakageMon.getMostFrequentStack() ?? ['UNKNOWN stack', -1],
							c = new ol(`${u}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0])
						return (this._options?.onListenerError || In)(c), Xt.None
					}
					if (this._disposed) return Xt.None
					n && (t = t.bind(n))
					let i = new ai(t),
						s,
						o
					this._leakageMon &&
						this._size >= Math.ceil(this._leakageMon.threshold * 0.2) &&
						((i.stack = Ds.create()), (s = this._leakageMon.check(i.stack, this._size + 1))),
						Cf && (i.stack = o ?? Ds.create()),
						this._listeners
							? this._listeners instanceof ai
								? ((this._deliveryQueue ??= new al()), (this._listeners = [this._listeners, i]))
								: this._listeners.push(i)
							: (this._options?.onWillAddFirstListener?.(this),
							  (this._listeners = i),
							  this._options?.onDidAddFirstListener?.(this)),
						this._size++
					let a = Zn(() => {
						Io?.unregister(a), s?.(), this._removeListener(i)
					})
					if ((r instanceof yr ? r.add(a) : Array.isArray(r) && r.push(a), Io)) {
						let u = new Error().stack
								.split(
									`
`
								)
								.slice(2, 3)
								.join(
									`
`
								)
								.trim(),
							l = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(u)
						Io.register(a, l?.[2] ?? u, a)
					}
					return a
				}),
				this._event
			)
		}
		_removeListener(t) {
			if ((this._options?.onWillRemoveListener?.(this), !this._listeners)) return
			if (this._size === 1) {
				;(this._listeners = void 0),
					this._options?.onDidRemoveLastListener?.(this),
					(this._size = 0)
				return
			}
			let n = this._listeners,
				r = n.indexOf(t)
			if (r === -1)
				throw (
					(console.log('disposed?', this._disposed),
					console.log('size?', this._size),
					console.log('arr?', JSON.stringify(this._listeners)),
					new Error('Attempted to dispose unknown listener'))
				)
			this._size--, (n[r] = void 0)
			let i = this._deliveryQueue.current === this
			if (this._size * v4 <= n.length) {
				let s = 0
				for (let o = 0; o < n.length; o++)
					n[o]
						? (n[s++] = n[o])
						: i && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--)
				n.length = s
			}
		}
		_deliver(t, n) {
			if (!t) return
			let r = this._options?.onListenerError || In
			if (!r) {
				t.value(n)
				return
			}
			try {
				t.value(n)
			} catch (i) {
				r(i)
			}
		}
		_deliverQueue(t) {
			let n = t.current._listeners
			for (; t.i < t.end; ) this._deliver(n[t.i++], t.value)
			t.reset()
		}
		fire(t) {
			if (
				(this._deliveryQueue?.current &&
					(this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()),
				this._perfMon?.start(this._size),
				this._listeners)
			)
				if (this._listeners instanceof ai) this._deliver(this._listeners, t)
				else {
					let n = this._deliveryQueue
					n.enqueue(this, t, this._listeners.length), this._deliverQueue(n)
				}
			this._perfMon?.stop()
		}
		hasListeners() {
			return this._size > 0
		}
	}
	var al = class {
		constructor() {
			;(this.i = -1), (this.end = 0)
		}
		enqueue(t, n, r) {
			;(this.i = 0), (this.end = r), (this.current = t), (this.value = n)
		}
		reset() {
			;(this.i = this.end), (this.current = void 0), (this.value = void 0)
		}
	}
	function ul() {
		return globalThis._VSCODE_NLS_MESSAGES
	}
	function vs() {
		return globalThis._VSCODE_NLS_LANGUAGE
	}
	var E4 =
		vs() === 'pseudo' ||
		(typeof document < 'u' &&
			document.location &&
			document.location.hash.indexOf('pseudo=true') >= 0)
	function Rf(e, t) {
		let n
		return (
			t.length === 0
				? (n = e)
				: (n = e.replace(/\{(\d+)\}/g, (r, i) => {
						let s = i[0],
							o = t[s],
							a = r
						return (
							typeof o == 'string'
								? (a = o)
								: (typeof o == 'number' || typeof o == 'boolean' || o === void 0 || o === null) &&
								  (a = String(o)),
							a
						)
				  })),
			E4 && (n = '\uFF3B' + n.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
			n
		)
	}
	function ke(e, t, ...n) {
		return Rf(typeof e == 'number' ? y4(e, t) : t, n)
	}
	function y4(e, t) {
		let n = ul()?.[e]
		if (typeof n != 'string') {
			if (typeof t == 'string') return t
			throw new Error(`!!! NLS MISSING: ${e} !!!`)
		}
		return n
	}
	var li = 'en',
		Oo = !1,
		Mo = !1,
		ko = !1,
		_4 = !1,
		Of = !1,
		fl = !1,
		N4 = !1,
		T4 = !1,
		S4 = !1,
		A4 = !1,
		Ro,
		ll = li,
		kf = li,
		F4,
		Rn,
		kn = globalThis,
		jt
	typeof kn.vscode < 'u' && typeof kn.vscode.process < 'u'
		? (jt = kn.vscode.process)
		: typeof process < 'u' && typeof process?.versions?.node == 'string' && (jt = process)
	var Mf = typeof jt?.versions?.electron == 'string',
		w4 = Mf && jt?.type === 'renderer'
	if (typeof jt == 'object') {
		;(Oo = jt.platform === 'win32'),
			(Mo = jt.platform === 'darwin'),
			(ko = jt.platform === 'linux'),
			(_4 = ko && !!jt.env.SNAP && !!jt.env.SNAP_REVISION),
			(N4 = Mf),
			(S4 = !!jt.env.CI || !!jt.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
			(Ro = li),
			(ll = li)
		let e = jt.env.VSCODE_NLS_CONFIG
		if (e)
			try {
				let t = JSON.parse(e)
				;(Ro = t.userLocale),
					(kf = t.osLocale),
					(ll = t.resolvedLanguage || li),
					(F4 = t.languagePack?.translationsConfigFile)
			} catch {}
		Of = !0
	} else
		typeof navigator == 'object' && !w4
			? ((Rn = navigator.userAgent),
			  (Oo = Rn.indexOf('Windows') >= 0),
			  (Mo = Rn.indexOf('Macintosh') >= 0),
			  (T4 =
					(Rn.indexOf('Macintosh') >= 0 || Rn.indexOf('iPad') >= 0 || Rn.indexOf('iPhone') >= 0) &&
					!!navigator.maxTouchPoints &&
					navigator.maxTouchPoints > 0),
			  (ko = Rn.indexOf('Linux') >= 0),
			  (A4 = Rn?.indexOf('Mobi') >= 0),
			  (fl = !0),
			  (ll = vs() || li),
			  (Ro = navigator.language.toLowerCase()),
			  (kf = Ro))
			: console.error('Unable to resolve platform.')
	var cl = 0
	Mo ? (cl = 1) : Oo ? (cl = 3) : ko && (cl = 2)
	var xr = Oo,
		Pf = Mo
	var Bf = Of,
		dl = fl,
		L4 = fl && typeof kn.importScripts == 'function',
		Vf = L4 ? kn.origin : void 0
	var dn = Rn
	var C4 = typeof kn.postMessage == 'function' && !kn.importScripts,
		Uf = (() => {
			if (C4) {
				let e = []
				kn.addEventListener('message', (n) => {
					if (n.data && n.data.vscodeScheduleAsyncWork)
						for (let r = 0, i = e.length; r < i; r++) {
							let s = e[r]
							if (s.id === n.data.vscodeScheduleAsyncWork) {
								e.splice(r, 1), s.callback()
								return
							}
						}
				})
				let t = 0
				return (n) => {
					let r = ++t
					e.push({ id: r, callback: n }), kn.postMessage({ vscodeScheduleAsyncWork: r }, '*')
				}
			}
			return (e) => setTimeout(e)
		})()
	var I4 = !!(dn && dn.indexOf('Chrome') >= 0),
		fE = !!(dn && dn.indexOf('Firefox') >= 0),
		dE = !!(!I4 && dn && dn.indexOf('Safari') >= 0),
		pE = !!(dn && dn.indexOf('Edg/') >= 0),
		hE = !!(dn && dn.indexOf('Android') >= 0)
	function k4(e) {
		return e
	}
	var Po = class {
		constructor(t, n) {
			;(this.lastCache = void 0),
				(this.lastArgKey = void 0),
				typeof t == 'function'
					? ((this._fn = t), (this._computeKey = k4))
					: ((this._fn = n), (this._computeKey = t.getCacheKey))
		}
		get(t) {
			let n = this._computeKey(t)
			return (
				this.lastArgKey !== n && ((this.lastArgKey = n), (this.lastCache = this._fn(t))),
				this.lastCache
			)
		}
	}
	var bs = class {
		constructor(t) {
			;(this.executor = t), (this._didRun = !1)
		}
		get value() {
			if (!this._didRun)
				try {
					this._value = this.executor()
				} catch (t) {
					this._error = t
				} finally {
					this._didRun = !0
				}
			if (this._error) throw this._error
			return this._value
		}
		get rawValue() {
			return this._value
		}
	}
	function jf(e) {
		return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&')
	}
	function qf(e) {
		return e.split(/\r\n|\r|\n/)
	}
	function Gf(e) {
		for (let t = 0, n = e.length; t < n; t++) {
			let r = e.charCodeAt(t)
			if (r !== 32 && r !== 9) return t
		}
		return -1
	}
	function Hf(e, t = e.length - 1) {
		for (let n = t; n >= 0; n--) {
			let r = e.charCodeAt(n)
			if (r !== 32 && r !== 9) return n
		}
		return -1
	}
	function pl(e) {
		return e >= 65 && e <= 90
	}
	function di(e) {
		return 55296 <= e && e <= 56319
	}
	function Bo(e) {
		return 56320 <= e && e <= 57343
	}
	function hl(e, t) {
		return ((e - 55296) << 10) + (t - 56320) + 65536
	}
	function Wf(e, t, n) {
		let r = e.charCodeAt(n)
		if (di(r) && n + 1 < t) {
			let i = e.charCodeAt(n + 1)
			if (Bo(i)) return hl(r, i)
		}
		return r
	}
	var O4 = /^[\t\n\r\x20-\x7E]*$/
	function Qf(e) {
		return O4.test(e)
	}
	var bE = String.fromCharCode(65279)
	var $f = class e {
		static {
			this._INSTANCE = null
		}
		static getInstance() {
			return e._INSTANCE || (e._INSTANCE = new e()), e._INSTANCE
		}
		constructor() {
			this._data = M4()
		}
		getGraphemeBreakType(t) {
			if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4
			if (t < 127) return 0
			let n = this._data,
				r = n.length / 3,
				i = 1
			for (; i <= r; )
				if (t < n[3 * i]) i = 2 * i
				else if (t > n[3 * i + 1]) i = 2 * i + 1
				else return n[3 * i + 2]
			return 0
		}
	}
	function M4() {
		return JSON.parse(
			'[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]'
		)
	}
	var ci = class e {
			static {
				this.ambiguousCharacterData = new bs(() =>
					JSON.parse(
						'{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'
					)
				)
			}
			static {
				this.cache = new Po({ getCacheKey: JSON.stringify }, (t) => {
					function n(c) {
						let d = new Map()
						for (let h = 0; h < c.length; h += 2) d.set(c[h], c[h + 1])
						return d
					}
					function r(c, d) {
						let h = new Map(c)
						for (let [m, g] of d) h.set(m, g)
						return h
					}
					function i(c, d) {
						if (!c) return d
						let h = new Map()
						for (let [m, g] of c) d.has(m) && h.set(m, g)
						return h
					}
					let s = this.ambiguousCharacterData.value,
						o = t.filter((c) => !c.startsWith('_') && c in s)
					o.length === 0 && (o = ['_default'])
					let a
					for (let c of o) {
						let d = n(s[c])
						a = i(a, d)
					}
					let u = n(s._common),
						l = r(u, a)
					return new e(l)
				})
			}
			static getInstance(t) {
				return e.cache.get(Array.from(t))
			}
			static {
				this._locales = new bs(() =>
					Object.keys(e.ambiguousCharacterData.value).filter((t) => !t.startsWith('_'))
				)
			}
			static getLocales() {
				return e._locales.value
			}
			constructor(t) {
				this.confusableDictionary = t
			}
			isAmbiguous(t) {
				return this.confusableDictionary.has(t)
			}
			getPrimaryConfusable(t) {
				return this.confusableDictionary.get(t)
			}
			getConfusableCodePoints() {
				return new Set(this.confusableDictionary.keys())
			}
		},
		fi = class e {
			static getRawData() {
				return JSON.parse(
					'[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]'
				)
			}
			static {
				this._data = void 0
			}
			static getData() {
				return this._data || (this._data = new Set(e.getRawData())), this._data
			}
			static isInvisibleCharacter(t) {
				return e.getData().has(t)
			}
			static get codePoints() {
				return e.getData()
			}
		}
	var pi,
		ml = globalThis.vscode
	if (typeof ml < 'u' && typeof ml.process < 'u') {
		let e = ml.process
		pi = {
			get platform() {
				return e.platform
			},
			get arch() {
				return e.arch
			},
			get env() {
				return e.env
			},
			cwd() {
				return e.cwd()
			}
		}
	} else
		typeof process < 'u' && typeof process?.versions?.node == 'string'
			? (pi = {
					get platform() {
						return process.platform
					},
					get arch() {
						return process.arch
					},
					get env() {
						return process.env
					},
					cwd() {
						return process.env.VSCODE_CWD || process.cwd()
					}
			  })
			: (pi = {
					get platform() {
						return xr ? 'win32' : Pf ? 'darwin' : 'linux'
					},
					get arch() {},
					get env() {
						return {}
					},
					cwd() {
						return '/'
					}
			  })
	var ys = pi.cwd,
		zf = pi.env,
		Yf = pi.platform
	var B4 = 65,
		V4 = 97,
		U4 = 90,
		$4 = 122,
		nr = 46,
		dt = 47,
		kt = 92,
		er = 58,
		j4 = 63,
		Vo = class extends Error {
			constructor(t, n, r) {
				let i
				typeof n == 'string' && n.indexOf('not ') === 0
					? ((i = 'must not be'), (n = n.replace(/^not /, '')))
					: (i = 'must be')
				let s = t.indexOf('.') !== -1 ? 'property' : 'argument',
					o = `The "${t}" ${s} ${i} of type ${n}`
				;(o += `. Received type ${typeof r}`), super(o), (this.code = 'ERR_INVALID_ARG_TYPE')
			}
		}
	function q4(e, t) {
		if (e === null || typeof e != 'object') throw new Vo(t, 'Object', e)
	}
	function ze(e, t) {
		if (typeof e != 'string') throw new Vo(t, 'string', e)
	}
	var On = Yf === 'win32'
	function he(e) {
		return e === dt || e === kt
	}
	function gl(e) {
		return e === dt
	}
	function tr(e) {
		return (e >= B4 && e <= U4) || (e >= V4 && e <= $4)
	}
	function Uo(e, t, n, r) {
		let i = '',
			s = 0,
			o = -1,
			a = 0,
			u = 0
		for (let l = 0; l <= e.length; ++l) {
			if (l < e.length) u = e.charCodeAt(l)
			else {
				if (r(u)) break
				u = dt
			}
			if (r(u)) {
				if (!(o === l - 1 || a === 1))
					if (a === 2) {
						if (
							i.length < 2 ||
							s !== 2 ||
							i.charCodeAt(i.length - 1) !== nr ||
							i.charCodeAt(i.length - 2) !== nr
						) {
							if (i.length > 2) {
								let c = i.lastIndexOf(n)
								c === -1
									? ((i = ''), (s = 0))
									: ((i = i.slice(0, c)), (s = i.length - 1 - i.lastIndexOf(n))),
									(o = l),
									(a = 0)
								continue
							} else if (i.length !== 0) {
								;(i = ''), (s = 0), (o = l), (a = 0)
								continue
							}
						}
						t && ((i += i.length > 0 ? `${n}..` : '..'), (s = 2))
					} else
						i.length > 0 ? (i += `${n}${e.slice(o + 1, l)}`) : (i = e.slice(o + 1, l)),
							(s = l - o - 1)
				;(o = l), (a = 0)
			} else u === nr && a !== -1 ? ++a : (a = -1)
		}
		return i
	}
	function G4(e) {
		return e ? `${e[0] === '.' ? '' : '.'}${e}` : ''
	}
	function Jf(e, t) {
		q4(t, 'pathObject')
		let n = t.dir || t.root,
			r = t.base || `${t.name || ''}${G4(t.ext)}`
		return n ? (n === t.root ? `${n}${r}` : `${n}${e}${r}`) : r
	}
	var vt = {
			resolve(...e) {
				let t = '',
					n = '',
					r = !1
				for (let i = e.length - 1; i >= -1; i--) {
					let s
					if (i >= 0) {
						if (((s = e[i]), ze(s, `paths[${i}]`), s.length === 0)) continue
					} else
						t.length === 0
							? (s = ys())
							: ((s = zf[`=${t}`] || ys()),
							  (s === void 0 ||
									(s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === kt)) &&
									(s = `${t}\\`))
					let o = s.length,
						a = 0,
						u = '',
						l = !1,
						c = s.charCodeAt(0)
					if (o === 1) he(c) && ((a = 1), (l = !0))
					else if (he(c))
						if (((l = !0), he(s.charCodeAt(1)))) {
							let d = 2,
								h = d
							for (; d < o && !he(s.charCodeAt(d)); ) d++
							if (d < o && d !== h) {
								let m = s.slice(h, d)
								for (h = d; d < o && he(s.charCodeAt(d)); ) d++
								if (d < o && d !== h) {
									for (h = d; d < o && !he(s.charCodeAt(d)); ) d++
									;(d === o || d !== h) && ((u = `\\\\${m}\\${s.slice(h, d)}`), (a = d))
								}
							}
						} else a = 1
					else
						tr(c) &&
							s.charCodeAt(1) === er &&
							((u = s.slice(0, 2)), (a = 2), o > 2 && he(s.charCodeAt(2)) && ((l = !0), (a = 3)))
					if (u.length > 0)
						if (t.length > 0) {
							if (u.toLowerCase() !== t.toLowerCase()) continue
						} else t = u
					if (r) {
						if (t.length > 0) break
					} else if (((n = `${s.slice(a)}\\${n}`), (r = l), l && t.length > 0)) break
				}
				return (n = Uo(n, !r, '\\', he)), r ? `${t}\\${n}` : `${t}${n}` || '.'
			},
			normalize(e) {
				ze(e, 'path')
				let t = e.length
				if (t === 0) return '.'
				let n = 0,
					r,
					i = !1,
					s = e.charCodeAt(0)
				if (t === 1) return gl(s) ? '\\' : e
				if (he(s))
					if (((i = !0), he(e.charCodeAt(1)))) {
						let a = 2,
							u = a
						for (; a < t && !he(e.charCodeAt(a)); ) a++
						if (a < t && a !== u) {
							let l = e.slice(u, a)
							for (u = a; a < t && he(e.charCodeAt(a)); ) a++
							if (a < t && a !== u) {
								for (u = a; a < t && !he(e.charCodeAt(a)); ) a++
								if (a === t) return `\\\\${l}\\${e.slice(u)}\\`
								a !== u && ((r = `\\\\${l}\\${e.slice(u, a)}`), (n = a))
							}
						}
					} else n = 1
				else
					tr(s) &&
						e.charCodeAt(1) === er &&
						((r = e.slice(0, 2)), (n = 2), t > 2 && he(e.charCodeAt(2)) && ((i = !0), (n = 3)))
				let o = n < t ? Uo(e.slice(n), !i, '\\', he) : ''
				return (
					o.length === 0 && !i && (o = '.'),
					o.length > 0 && he(e.charCodeAt(t - 1)) && (o += '\\'),
					r === void 0 ? (i ? `\\${o}` : o) : i ? `${r}\\${o}` : `${r}${o}`
				)
			},
			isAbsolute(e) {
				ze(e, 'path')
				let t = e.length
				if (t === 0) return !1
				let n = e.charCodeAt(0)
				return he(n) || (t > 2 && tr(n) && e.charCodeAt(1) === er && he(e.charCodeAt(2)))
			},
			join(...e) {
				if (e.length === 0) return '.'
				let t, n
				for (let s = 0; s < e.length; ++s) {
					let o = e[s]
					ze(o, 'path'), o.length > 0 && (t === void 0 ? (t = n = o) : (t += `\\${o}`))
				}
				if (t === void 0) return '.'
				let r = !0,
					i = 0
				if (typeof n == 'string' && he(n.charCodeAt(0))) {
					++i
					let s = n.length
					s > 1 && he(n.charCodeAt(1)) && (++i, s > 2 && (he(n.charCodeAt(2)) ? ++i : (r = !1)))
				}
				if (r) {
					for (; i < t.length && he(t.charCodeAt(i)); ) i++
					i >= 2 && (t = `\\${t.slice(i)}`)
				}
				return vt.normalize(t)
			},
			relative(e, t) {
				if ((ze(e, 'from'), ze(t, 'to'), e === t)) return ''
				let n = vt.resolve(e),
					r = vt.resolve(t)
				if (n === r || ((e = n.toLowerCase()), (t = r.toLowerCase()), e === t)) return ''
				let i = 0
				for (; i < e.length && e.charCodeAt(i) === kt; ) i++
				let s = e.length
				for (; s - 1 > i && e.charCodeAt(s - 1) === kt; ) s--
				let o = s - i,
					a = 0
				for (; a < t.length && t.charCodeAt(a) === kt; ) a++
				let u = t.length
				for (; u - 1 > a && t.charCodeAt(u - 1) === kt; ) u--
				let l = u - a,
					c = o < l ? o : l,
					d = -1,
					h = 0
				for (; h < c; h++) {
					let g = e.charCodeAt(i + h)
					if (g !== t.charCodeAt(a + h)) break
					g === kt && (d = h)
				}
				if (h !== c) {
					if (d === -1) return r
				} else {
					if (l > c) {
						if (t.charCodeAt(a + h) === kt) return r.slice(a + h + 1)
						if (h === 2) return r.slice(a + h)
					}
					o > c && (e.charCodeAt(i + h) === kt ? (d = h) : h === 2 && (d = 3)), d === -1 && (d = 0)
				}
				let m = ''
				for (h = i + d + 1; h <= s; ++h)
					(h === s || e.charCodeAt(h) === kt) && (m += m.length === 0 ? '..' : '\\..')
				return (
					(a += d),
					m.length > 0 ? `${m}${r.slice(a, u)}` : (r.charCodeAt(a) === kt && ++a, r.slice(a, u))
				)
			},
			toNamespacedPath(e) {
				if (typeof e != 'string' || e.length === 0) return e
				let t = vt.resolve(e)
				if (t.length <= 2) return e
				if (t.charCodeAt(0) === kt) {
					if (t.charCodeAt(1) === kt) {
						let n = t.charCodeAt(2)
						if (n !== j4 && n !== nr) return `\\\\?\\UNC\\${t.slice(2)}`
					}
				} else if (tr(t.charCodeAt(0)) && t.charCodeAt(1) === er && t.charCodeAt(2) === kt)
					return `\\\\?\\${t}`
				return e
			},
			dirname(e) {
				ze(e, 'path')
				let t = e.length
				if (t === 0) return '.'
				let n = -1,
					r = 0,
					i = e.charCodeAt(0)
				if (t === 1) return he(i) ? e : '.'
				if (he(i)) {
					if (((n = r = 1), he(e.charCodeAt(1)))) {
						let a = 2,
							u = a
						for (; a < t && !he(e.charCodeAt(a)); ) a++
						if (a < t && a !== u) {
							for (u = a; a < t && he(e.charCodeAt(a)); ) a++
							if (a < t && a !== u) {
								for (u = a; a < t && !he(e.charCodeAt(a)); ) a++
								if (a === t) return e
								a !== u && (n = r = a + 1)
							}
						}
					}
				} else
					tr(i) && e.charCodeAt(1) === er && ((n = t > 2 && he(e.charCodeAt(2)) ? 3 : 2), (r = n))
				let s = -1,
					o = !0
				for (let a = t - 1; a >= r; --a)
					if (he(e.charCodeAt(a))) {
						if (!o) {
							s = a
							break
						}
					} else o = !1
				if (s === -1) {
					if (n === -1) return '.'
					s = n
				}
				return e.slice(0, s)
			},
			basename(e, t) {
				t !== void 0 && ze(t, 'suffix'), ze(e, 'path')
				let n = 0,
					r = -1,
					i = !0,
					s
				if (
					(e.length >= 2 && tr(e.charCodeAt(0)) && e.charCodeAt(1) === er && (n = 2),
					t !== void 0 && t.length > 0 && t.length <= e.length)
				) {
					if (t === e) return ''
					let o = t.length - 1,
						a = -1
					for (s = e.length - 1; s >= n; --s) {
						let u = e.charCodeAt(s)
						if (he(u)) {
							if (!i) {
								n = s + 1
								break
							}
						} else
							a === -1 && ((i = !1), (a = s + 1)),
								o >= 0 && (u === t.charCodeAt(o) ? --o === -1 && (r = s) : ((o = -1), (r = a)))
					}
					return n === r ? (r = a) : r === -1 && (r = e.length), e.slice(n, r)
				}
				for (s = e.length - 1; s >= n; --s)
					if (he(e.charCodeAt(s))) {
						if (!i) {
							n = s + 1
							break
						}
					} else r === -1 && ((i = !1), (r = s + 1))
				return r === -1 ? '' : e.slice(n, r)
			},
			extname(e) {
				ze(e, 'path')
				let t = 0,
					n = -1,
					r = 0,
					i = -1,
					s = !0,
					o = 0
				e.length >= 2 && e.charCodeAt(1) === er && tr(e.charCodeAt(0)) && (t = r = 2)
				for (let a = e.length - 1; a >= t; --a) {
					let u = e.charCodeAt(a)
					if (he(u)) {
						if (!s) {
							r = a + 1
							break
						}
						continue
					}
					i === -1 && ((s = !1), (i = a + 1)),
						u === nr ? (n === -1 ? (n = a) : o !== 1 && (o = 1)) : n !== -1 && (o = -1)
				}
				return n === -1 || i === -1 || o === 0 || (o === 1 && n === i - 1 && n === r + 1)
					? ''
					: e.slice(n, i)
			},
			format: Jf.bind(null, '\\'),
			parse(e) {
				ze(e, 'path')
				let t = { root: '', dir: '', base: '', ext: '', name: '' }
				if (e.length === 0) return t
				let n = e.length,
					r = 0,
					i = e.charCodeAt(0)
				if (n === 1) return he(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t)
				if (he(i)) {
					if (((r = 1), he(e.charCodeAt(1)))) {
						let d = 2,
							h = d
						for (; d < n && !he(e.charCodeAt(d)); ) d++
						if (d < n && d !== h) {
							for (h = d; d < n && he(e.charCodeAt(d)); ) d++
							if (d < n && d !== h) {
								for (h = d; d < n && !he(e.charCodeAt(d)); ) d++
								d === n ? (r = d) : d !== h && (r = d + 1)
							}
						}
					}
				} else if (tr(i) && e.charCodeAt(1) === er) {
					if (n <= 2) return (t.root = t.dir = e), t
					if (((r = 2), he(e.charCodeAt(2)))) {
						if (n === 3) return (t.root = t.dir = e), t
						r = 3
					}
				}
				r > 0 && (t.root = e.slice(0, r))
				let s = -1,
					o = r,
					a = -1,
					u = !0,
					l = e.length - 1,
					c = 0
				for (; l >= r; --l) {
					if (((i = e.charCodeAt(l)), he(i))) {
						if (!u) {
							o = l + 1
							break
						}
						continue
					}
					a === -1 && ((u = !1), (a = l + 1)),
						i === nr ? (s === -1 ? (s = l) : c !== 1 && (c = 1)) : s !== -1 && (c = -1)
				}
				return (
					a !== -1 &&
						(s === -1 || c === 0 || (c === 1 && s === a - 1 && s === o + 1)
							? (t.base = t.name = e.slice(o, a))
							: ((t.name = e.slice(o, s)), (t.base = e.slice(o, a)), (t.ext = e.slice(s, a)))),
					o > 0 && o !== r ? (t.dir = e.slice(0, o - 1)) : (t.dir = t.root),
					t
				)
			},
			sep: '\\',
			delimiter: ';',
			win32: null,
			posix: null
		},
		H4 = (() => {
			if (On) {
				let e = /\\/g
				return () => {
					let t = ys().replace(e, '/')
					return t.slice(t.indexOf('/'))
				}
			}
			return () => ys()
		})(),
		pt = {
			resolve(...e) {
				let t = '',
					n = !1
				for (let r = e.length - 1; r >= -1 && !n; r--) {
					let i = r >= 0 ? e[r] : H4()
					ze(i, `paths[${r}]`), i.length !== 0 && ((t = `${i}/${t}`), (n = i.charCodeAt(0) === dt))
				}
				return (t = Uo(t, !n, '/', gl)), n ? `/${t}` : t.length > 0 ? t : '.'
			},
			normalize(e) {
				if ((ze(e, 'path'), e.length === 0)) return '.'
				let t = e.charCodeAt(0) === dt,
					n = e.charCodeAt(e.length - 1) === dt
				return (
					(e = Uo(e, !t, '/', gl)),
					e.length === 0 ? (t ? '/' : n ? './' : '.') : (n && (e += '/'), t ? `/${e}` : e)
				)
			},
			isAbsolute(e) {
				return ze(e, 'path'), e.length > 0 && e.charCodeAt(0) === dt
			},
			join(...e) {
				if (e.length === 0) return '.'
				let t
				for (let n = 0; n < e.length; ++n) {
					let r = e[n]
					ze(r, 'path'), r.length > 0 && (t === void 0 ? (t = r) : (t += `/${r}`))
				}
				return t === void 0 ? '.' : pt.normalize(t)
			},
			relative(e, t) {
				if (
					(ze(e, 'from'),
					ze(t, 'to'),
					e === t || ((e = pt.resolve(e)), (t = pt.resolve(t)), e === t))
				)
					return ''
				let n = 1,
					r = e.length,
					i = r - n,
					s = 1,
					o = t.length - s,
					a = i < o ? i : o,
					u = -1,
					l = 0
				for (; l < a; l++) {
					let d = e.charCodeAt(n + l)
					if (d !== t.charCodeAt(s + l)) break
					d === dt && (u = l)
				}
				if (l === a)
					if (o > a) {
						if (t.charCodeAt(s + l) === dt) return t.slice(s + l + 1)
						if (l === 0) return t.slice(s + l)
					} else i > a && (e.charCodeAt(n + l) === dt ? (u = l) : l === 0 && (u = 0))
				let c = ''
				for (l = n + u + 1; l <= r; ++l)
					(l === r || e.charCodeAt(l) === dt) && (c += c.length === 0 ? '..' : '/..')
				return `${c}${t.slice(s + u)}`
			},
			toNamespacedPath(e) {
				return e
			},
			dirname(e) {
				if ((ze(e, 'path'), e.length === 0)) return '.'
				let t = e.charCodeAt(0) === dt,
					n = -1,
					r = !0
				for (let i = e.length - 1; i >= 1; --i)
					if (e.charCodeAt(i) === dt) {
						if (!r) {
							n = i
							break
						}
					} else r = !1
				return n === -1 ? (t ? '/' : '.') : t && n === 1 ? '//' : e.slice(0, n)
			},
			basename(e, t) {
				t !== void 0 && ze(t, 'ext'), ze(e, 'path')
				let n = 0,
					r = -1,
					i = !0,
					s
				if (t !== void 0 && t.length > 0 && t.length <= e.length) {
					if (t === e) return ''
					let o = t.length - 1,
						a = -1
					for (s = e.length - 1; s >= 0; --s) {
						let u = e.charCodeAt(s)
						if (u === dt) {
							if (!i) {
								n = s + 1
								break
							}
						} else
							a === -1 && ((i = !1), (a = s + 1)),
								o >= 0 && (u === t.charCodeAt(o) ? --o === -1 && (r = s) : ((o = -1), (r = a)))
					}
					return n === r ? (r = a) : r === -1 && (r = e.length), e.slice(n, r)
				}
				for (s = e.length - 1; s >= 0; --s)
					if (e.charCodeAt(s) === dt) {
						if (!i) {
							n = s + 1
							break
						}
					} else r === -1 && ((i = !1), (r = s + 1))
				return r === -1 ? '' : e.slice(n, r)
			},
			extname(e) {
				ze(e, 'path')
				let t = -1,
					n = 0,
					r = -1,
					i = !0,
					s = 0
				for (let o = e.length - 1; o >= 0; --o) {
					let a = e.charCodeAt(o)
					if (a === dt) {
						if (!i) {
							n = o + 1
							break
						}
						continue
					}
					r === -1 && ((i = !1), (r = o + 1)),
						a === nr ? (t === -1 ? (t = o) : s !== 1 && (s = 1)) : t !== -1 && (s = -1)
				}
				return t === -1 || r === -1 || s === 0 || (s === 1 && t === r - 1 && t === n + 1)
					? ''
					: e.slice(t, r)
			},
			format: Jf.bind(null, '/'),
			parse(e) {
				ze(e, 'path')
				let t = { root: '', dir: '', base: '', ext: '', name: '' }
				if (e.length === 0) return t
				let n = e.charCodeAt(0) === dt,
					r
				n ? ((t.root = '/'), (r = 1)) : (r = 0)
				let i = -1,
					s = 0,
					o = -1,
					a = !0,
					u = e.length - 1,
					l = 0
				for (; u >= r; --u) {
					let c = e.charCodeAt(u)
					if (c === dt) {
						if (!a) {
							s = u + 1
							break
						}
						continue
					}
					o === -1 && ((a = !1), (o = u + 1)),
						c === nr ? (i === -1 ? (i = u) : l !== 1 && (l = 1)) : i !== -1 && (l = -1)
				}
				if (o !== -1) {
					let c = s === 0 && n ? 1 : s
					i === -1 || l === 0 || (l === 1 && i === o - 1 && i === s + 1)
						? (t.base = t.name = e.slice(c, o))
						: ((t.name = e.slice(c, i)), (t.base = e.slice(c, o)), (t.ext = e.slice(i, o)))
				}
				return s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = '/'), t
			},
			sep: '/',
			delimiter: ':',
			win32: null,
			posix: null
		}
	pt.win32 = vt.win32 = vt
	pt.posix = vt.posix = pt
	var yE = On ? vt.normalize : pt.normalize,
		Xf = On ? vt.join : pt.join,
		xE = On ? vt.resolve : pt.resolve,
		_E = On ? vt.relative : pt.relative,
		NE = On ? vt.dirname : pt.dirname,
		TE = On ? vt.basename : pt.basename,
		SE = On ? vt.extname : pt.extname,
		AE = On ? vt.sep : pt.sep
	var W4 = /^\w[\w\d+.-]*$/,
		Q4 = /^\//,
		z4 = /^\/\//
	function Y4(e, t) {
		if (!e.scheme && t)
			throw new Error(
				`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
			)
		if (e.scheme && !W4.test(e.scheme))
			throw new Error('[UriError]: Scheme contains illegal characters.')
		if (e.path) {
			if (e.authority) {
				if (!Q4.test(e.path))
					throw new Error(
						'[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
					)
			} else if (z4.test(e.path))
				throw new Error(
					'[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
				)
		}
	}
	function J4(e, t) {
		return !e && !t ? 'file' : e
	}
	function X4(e, t) {
		switch (e) {
			case 'https':
			case 'http':
			case 'file':
				t ? t[0] !== rn && (t = rn + t) : (t = rn)
				break
		}
		return t
	}
	var Oe = '',
		rn = '/',
		K4 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
		_t = class e {
			static isUri(t) {
				return t instanceof e
					? !0
					: t
					? typeof t.authority == 'string' &&
					  typeof t.fragment == 'string' &&
					  typeof t.path == 'string' &&
					  typeof t.query == 'string' &&
					  typeof t.scheme == 'string' &&
					  typeof t.fsPath == 'string' &&
					  typeof t.with == 'function' &&
					  typeof t.toString == 'function'
					: !1
			}
			constructor(t, n, r, i, s, o = !1) {
				typeof t == 'object'
					? ((this.scheme = t.scheme || Oe),
					  (this.authority = t.authority || Oe),
					  (this.path = t.path || Oe),
					  (this.query = t.query || Oe),
					  (this.fragment = t.fragment || Oe))
					: ((this.scheme = J4(t, o)),
					  (this.authority = n || Oe),
					  (this.path = X4(this.scheme, r || Oe)),
					  (this.query = i || Oe),
					  (this.fragment = s || Oe),
					  Y4(this, o))
			}
			get fsPath() {
				return Dl(this, !1)
			}
			with(t) {
				if (!t) return this
				let { scheme: n, authority: r, path: i, query: s, fragment: o } = t
				return (
					n === void 0 ? (n = this.scheme) : n === null && (n = Oe),
					r === void 0 ? (r = this.authority) : r === null && (r = Oe),
					i === void 0 ? (i = this.path) : i === null && (i = Oe),
					s === void 0 ? (s = this.query) : s === null && (s = Oe),
					o === void 0 ? (o = this.fragment) : o === null && (o = Oe),
					n === this.scheme &&
					r === this.authority &&
					i === this.path &&
					s === this.query &&
					o === this.fragment
						? this
						: new rr(n, r, i, s, o)
				)
			}
			static parse(t, n = !1) {
				let r = K4.exec(t)
				return r
					? new rr(r[2] || Oe, $o(r[4] || Oe), $o(r[5] || Oe), $o(r[7] || Oe), $o(r[9] || Oe), n)
					: new rr(Oe, Oe, Oe, Oe, Oe)
			}
			static file(t) {
				let n = Oe
				if ((xr && (t = t.replace(/\\/g, rn)), t[0] === rn && t[1] === rn)) {
					let r = t.indexOf(rn, 2)
					r === -1
						? ((n = t.substring(2)), (t = rn))
						: ((n = t.substring(2, r)), (t = t.substring(r) || rn))
				}
				return new rr('file', n, t, Oe, Oe)
			}
			static from(t, n) {
				return new rr(t.scheme, t.authority, t.path, t.query, t.fragment, n)
			}
			static joinPath(t, ...n) {
				if (!t.path) throw new Error('[UriError]: cannot call joinPath on URI without path')
				let r
				return (
					xr && t.scheme === 'file'
						? (r = e.file(vt.join(Dl(t, !0), ...n)).path)
						: (r = pt.join(t.path, ...n)),
					t.with({ path: r })
				)
			}
			toString(t = !1) {
				return vl(this, t)
			}
			toJSON() {
				return this
			}
			static revive(t) {
				if (t) {
					if (t instanceof e) return t
					{
						let n = new rr(t)
						return (
							(n._formatted = t.external ?? null),
							(n._fsPath = t._sep === td ? t.fsPath ?? null : null),
							n
						)
					}
				} else return t
			}
		},
		td = xr ? 1 : void 0,
		rr = class extends _t {
			constructor() {
				super(...arguments), (this._formatted = null), (this._fsPath = null)
			}
			get fsPath() {
				return this._fsPath || (this._fsPath = Dl(this, !1)), this._fsPath
			}
			toString(t = !1) {
				return t
					? vl(this, !0)
					: (this._formatted || (this._formatted = vl(this, !1)), this._formatted)
			}
			toJSON() {
				let t = { $mid: 1 }
				return (
					this._fsPath && ((t.fsPath = this._fsPath), (t._sep = td)),
					this._formatted && (t.external = this._formatted),
					this.path && (t.path = this.path),
					this.scheme && (t.scheme = this.scheme),
					this.authority && (t.authority = this.authority),
					this.query && (t.query = this.query),
					this.fragment && (t.fragment = this.fragment),
					t
				)
			}
		},
		nd = {
			58: '%3A',
			47: '%2F',
			63: '%3F',
			35: '%23',
			91: '%5B',
			93: '%5D',
			64: '%40',
			33: '%21',
			36: '%24',
			38: '%26',
			39: '%27',
			40: '%28',
			41: '%29',
			42: '%2A',
			43: '%2B',
			44: '%2C',
			59: '%3B',
			61: '%3D',
			32: '%20'
		}
	function Zf(e, t, n) {
		let r,
			i = -1
		for (let s = 0; s < e.length; s++) {
			let o = e.charCodeAt(s)
			if (
				(o >= 97 && o <= 122) ||
				(o >= 65 && o <= 90) ||
				(o >= 48 && o <= 57) ||
				o === 45 ||
				o === 46 ||
				o === 95 ||
				o === 126 ||
				(t && o === 47) ||
				(n && o === 91) ||
				(n && o === 93) ||
				(n && o === 58)
			)
				i !== -1 && ((r += encodeURIComponent(e.substring(i, s))), (i = -1)),
					r !== void 0 && (r += e.charAt(s))
			else {
				r === void 0 && (r = e.substr(0, s))
				let a = nd[o]
				a !== void 0
					? (i !== -1 && ((r += encodeURIComponent(e.substring(i, s))), (i = -1)), (r += a))
					: i === -1 && (i = s)
			}
		}
		return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e
	}
	function Z4(e) {
		let t
		for (let n = 0; n < e.length; n++) {
			let r = e.charCodeAt(n)
			r === 35 || r === 63
				? (t === void 0 && (t = e.substr(0, n)), (t += nd[r]))
				: t !== void 0 && (t += e[n])
		}
		return t !== void 0 ? t : e
	}
	function Dl(e, t) {
		let n
		return (
			e.authority && e.path.length > 1 && e.scheme === 'file'
				? (n = `//${e.authority}${e.path}`)
				: e.path.charCodeAt(0) === 47 &&
				  ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
						(e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
				  e.path.charCodeAt(2) === 58
				? t
					? (n = e.path.substr(1))
					: (n = e.path[1].toLowerCase() + e.path.substr(2))
				: (n = e.path),
			xr && (n = n.replace(/\//g, '\\')),
			n
		)
	}
	function vl(e, t) {
		let n = t ? Z4 : Zf,
			r = '',
			{ scheme: i, authority: s, path: o, query: a, fragment: u } = e
		if ((i && ((r += i), (r += ':')), (s || i === 'file') && ((r += rn), (r += rn)), s)) {
			let l = s.indexOf('@')
			if (l !== -1) {
				let c = s.substr(0, l)
				;(s = s.substr(l + 1)),
					(l = c.lastIndexOf(':')),
					l === -1
						? (r += n(c, !1, !1))
						: ((r += n(c.substr(0, l), !1, !1)), (r += ':'), (r += n(c.substr(l + 1), !1, !0))),
					(r += '@')
			}
			;(s = s.toLowerCase()),
				(l = s.lastIndexOf(':')),
				l === -1 ? (r += n(s, !1, !0)) : ((r += n(s.substr(0, l), !1, !0)), (r += s.substr(l)))
		}
		if (o) {
			if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
				let l = o.charCodeAt(1)
				l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`)
			} else if (o.length >= 2 && o.charCodeAt(1) === 58) {
				let l = o.charCodeAt(0)
				l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`)
			}
			r += n(o, !0, !1)
		}
		return (
			a && ((r += '?'), (r += n(a, !1, !1))), u && ((r += '#'), (r += t ? u : Zf(u, !1, !1))), r
		)
	}
	function rd(e) {
		try {
			return decodeURIComponent(e)
		} catch {
			return e.length > 3 ? e.substr(0, 3) + rd(e.substr(3)) : e
		}
	}
	var ed = /(%[0-9A-Za-z][0-9A-Za-z])+/g
	function $o(e) {
		return e.match(ed) ? e.replace(ed, (t) => rd(t)) : e
	}
	var ir
	;(function (e) {
		;(e.inMemory = 'inmemory'),
			(e.vscode = 'vscode'),
			(e.internal = 'private'),
			(e.walkThrough = 'walkThrough'),
			(e.walkThroughSnippet = 'walkThroughSnippet'),
			(e.http = 'http'),
			(e.https = 'https'),
			(e.file = 'file'),
			(e.mailto = 'mailto'),
			(e.untitled = 'untitled'),
			(e.data = 'data'),
			(e.command = 'command'),
			(e.vscodeRemote = 'vscode-remote'),
			(e.vscodeRemoteResource = 'vscode-remote-resource'),
			(e.vscodeManagedRemoteResource = 'vscode-managed-remote-resource'),
			(e.vscodeUserData = 'vscode-userdata'),
			(e.vscodeCustomEditor = 'vscode-custom-editor'),
			(e.vscodeNotebookCell = 'vscode-notebook-cell'),
			(e.vscodeNotebookCellMetadata = 'vscode-notebook-cell-metadata'),
			(e.vscodeNotebookCellMetadataDiff = 'vscode-notebook-cell-metadata-diff'),
			(e.vscodeNotebookCellOutput = 'vscode-notebook-cell-output'),
			(e.vscodeNotebookCellOutputDiff = 'vscode-notebook-cell-output-diff'),
			(e.vscodeNotebookMetadata = 'vscode-notebook-metadata'),
			(e.vscodeInteractiveInput = 'vscode-interactive-input'),
			(e.vscodeSettings = 'vscode-settings'),
			(e.vscodeWorkspaceTrust = 'vscode-workspace-trust'),
			(e.vscodeTerminal = 'vscode-terminal'),
			(e.vscodeChatCodeBlock = 'vscode-chat-code-block'),
			(e.vscodeChatCodeCompareBlock = 'vscode-chat-code-compare-block'),
			(e.vscodeChatSesssion = 'vscode-chat-editor'),
			(e.webviewPanel = 'webview-panel'),
			(e.vscodeWebview = 'vscode-webview'),
			(e.extension = 'extension'),
			(e.vscodeFileResource = 'vscode-file'),
			(e.tmp = 'tmp'),
			(e.vsls = 'vsls'),
			(e.vscodeSourceControl = 'vscode-scm'),
			(e.commentsInput = 'comment'),
			(e.codeSetting = 'code-setting'),
			(e.outputChannel = 'output')
	})(ir || (ir = {}))
	var e5 = 'tkn',
		bl = class {
			constructor() {
				;(this._hosts = Object.create(null)),
					(this._ports = Object.create(null)),
					(this._connectionTokens = Object.create(null)),
					(this._preferredWebSchema = 'http'),
					(this._delegate = null),
					(this._serverRootPath = '/')
			}
			setPreferredWebSchema(t) {
				this._preferredWebSchema = t
			}
			get _remoteResourcesPath() {
				return pt.join(this._serverRootPath, ir.vscodeRemoteResource)
			}
			rewrite(t) {
				if (this._delegate)
					try {
						return this._delegate(t)
					} catch (a) {
						return In(a), t
					}
				let n = t.authority,
					r = this._hosts[n]
				r && r.indexOf(':') !== -1 && r.indexOf('[') === -1 && (r = `[${r}]`)
				let i = this._ports[n],
					s = this._connectionTokens[n],
					o = `path=${encodeURIComponent(t.path)}`
				return (
					typeof s == 'string' && (o += `&${e5}=${encodeURIComponent(s)}`),
					_t.from({
						scheme: dl ? this._preferredWebSchema : ir.vscodeRemoteResource,
						authority: `${r}:${i}`,
						path: this._remoteResourcesPath,
						query: o
					})
				)
			}
		},
		t5 = new bl(),
		n5 = 'vscode-app',
		El = class e {
			static {
				this.FALLBACK_AUTHORITY = n5
			}
			asBrowserUri(t) {
				let n = this.toUri(t)
				return this.uriToBrowserUri(n)
			}
			uriToBrowserUri(t) {
				return t.scheme === ir.vscodeRemote
					? t5.rewrite(t)
					: t.scheme === ir.file &&
					  (Bf || Vf === `${ir.vscodeFileResource}://${e.FALLBACK_AUTHORITY}`)
					? t.with({
							scheme: ir.vscodeFileResource,
							authority: t.authority || e.FALLBACK_AUTHORITY,
							query: null,
							fragment: null
					  })
					: t
			}
			toUri(t, n) {
				if (_t.isUri(t)) return t
				if (globalThis._VSCODE_FILE_ROOT) {
					let r = globalThis._VSCODE_FILE_ROOT
					if (/^\w[\w\d+.-]*:\/\//.test(r)) return _t.joinPath(_t.parse(r, !0), t)
					let i = Xf(r, t)
					return _t.file(i)
				}
				return _t.parse(n.toUrl(t))
			}
		},
		jo = new El(),
		id
	;(function (e) {
		let t = new Map([
			['1', { 'Cross-Origin-Opener-Policy': 'same-origin' }],
			['2', { 'Cross-Origin-Embedder-Policy': 'require-corp' }],
			[
				'3',
				{
					'Cross-Origin-Opener-Policy': 'same-origin',
					'Cross-Origin-Embedder-Policy': 'require-corp'
				}
			]
		])
		e.CoopAndCoep = Object.freeze(t.get('3'))
		let n = 'vscode-coi'
		function r(s) {
			let o
			typeof s == 'string'
				? (o = new URL(s).searchParams)
				: s instanceof URL
				? (o = s.searchParams)
				: _t.isUri(s) && (o = new URL(s.toString(!0)).searchParams)
			let a = o?.get(n)
			if (a) return t.get(a)
		}
		e.getHeadersFromQuery = r
		function i(s, o, a) {
			if (!globalThis.crossOriginIsolated) return
			let u = o && a ? '3' : a ? '2' : '1'
			s instanceof URLSearchParams ? s.set(n, u) : (s[n] = u)
		}
		e.addSearchParam = i
	})(id || (id = {}))
	var r5 = !0,
		yl = 'default',
		i5 = '$initialize'
	var xl = class {
			constructor(t, n, r, i, s) {
				;(this.vsWorker = t),
					(this.req = n),
					(this.channel = r),
					(this.method = i),
					(this.args = s),
					(this.type = 0)
			}
		},
		qo = class {
			constructor(t, n, r, i) {
				;(this.vsWorker = t), (this.seq = n), (this.res = r), (this.err = i), (this.type = 1)
			}
		},
		_l = class {
			constructor(t, n, r, i, s) {
				;(this.vsWorker = t),
					(this.req = n),
					(this.channel = r),
					(this.eventName = i),
					(this.arg = s),
					(this.type = 2)
			}
		},
		Nl = class {
			constructor(t, n, r) {
				;(this.vsWorker = t), (this.req = n), (this.event = r), (this.type = 3)
			}
		},
		Tl = class {
			constructor(t, n) {
				;(this.vsWorker = t), (this.req = n), (this.type = 4)
			}
		},
		Sl = class {
			constructor(t) {
				;(this._workerId = -1),
					(this._handler = t),
					(this._lastSentReq = 0),
					(this._pendingReplies = Object.create(null)),
					(this._pendingEmitters = new Map()),
					(this._pendingEvents = new Map())
			}
			setWorkerId(t) {
				this._workerId = t
			}
			sendMessage(t, n, r) {
				let i = String(++this._lastSentReq)
				return new Promise((s, o) => {
					;(this._pendingReplies[i] = { resolve: s, reject: o }),
						this._send(new xl(this._workerId, i, t, n, r))
				})
			}
			listen(t, n, r) {
				let i = null,
					s = new lt({
						onWillAddFirstListener: () => {
							;(i = String(++this._lastSentReq)),
								this._pendingEmitters.set(i, s),
								this._send(new _l(this._workerId, i, t, n, r))
						},
						onDidRemoveLastListener: () => {
							this._pendingEmitters.delete(i), this._send(new Tl(this._workerId, i)), (i = null)
						}
					})
				return s.event
			}
			handleMessage(t) {
				!t ||
					!t.vsWorker ||
					(this._workerId !== -1 && t.vsWorker !== this._workerId) ||
					this._handleMessage(t)
			}
			createProxyToRemoteChannel(t, n) {
				let r = {
					get: (i, s) => (
						typeof s == 'string' &&
							!i[s] &&
							(od(s)
								? (i[s] = (o) => this.listen(t, s, o))
								: sd(s)
								? (i[s] = this.listen(t, s, void 0))
								: s.charCodeAt(0) === 36 &&
								  (i[s] = async (...o) => (await n?.(), this.sendMessage(t, s, o)))),
						i[s]
					)
				}
				return new Proxy(Object.create(null), r)
			}
			_handleMessage(t) {
				switch (t.type) {
					case 1:
						return this._handleReplyMessage(t)
					case 0:
						return this._handleRequestMessage(t)
					case 2:
						return this._handleSubscribeEventMessage(t)
					case 3:
						return this._handleEventMessage(t)
					case 4:
						return this._handleUnsubscribeEventMessage(t)
				}
			}
			_handleReplyMessage(t) {
				if (!this._pendingReplies[t.seq]) {
					console.warn('Got reply to unknown seq')
					return
				}
				let n = this._pendingReplies[t.seq]
				if ((delete this._pendingReplies[t.seq], t.err)) {
					let r = t.err
					t.err.$isError &&
						((r = new Error()),
						(r.name = t.err.name),
						(r.message = t.err.message),
						(r.stack = t.err.stack)),
						n.reject(r)
					return
				}
				n.resolve(t.res)
			}
			_handleRequestMessage(t) {
				let n = t.req
				this._handler.handleMessage(t.channel, t.method, t.args).then(
					(i) => {
						this._send(new qo(this._workerId, n, i, void 0))
					},
					(i) => {
						i.detail instanceof Error && (i.detail = el(i.detail)),
							this._send(new qo(this._workerId, n, void 0, el(i)))
					}
				)
			}
			_handleSubscribeEventMessage(t) {
				let n = t.req,
					r = this._handler.handleEvent(
						t.channel,
						t.eventName,
						t.arg
					)((i) => {
						this._send(new Nl(this._workerId, n, i))
					})
				this._pendingEvents.set(n, r)
			}
			_handleEventMessage(t) {
				if (!this._pendingEmitters.has(t.req)) {
					console.warn('Got event for unknown req')
					return
				}
				this._pendingEmitters.get(t.req).fire(t.event)
			}
			_handleUnsubscribeEventMessage(t) {
				if (!this._pendingEvents.has(t.req)) {
					console.warn('Got unsubscribe for unknown req')
					return
				}
				this._pendingEvents.get(t.req).dispose(), this._pendingEvents.delete(t.req)
			}
			_send(t) {
				let n = []
				if (t.type === 0)
					for (let r = 0; r < t.args.length; r++)
						t.args[r] instanceof ArrayBuffer && n.push(t.args[r])
				else t.type === 1 && t.res instanceof ArrayBuffer && n.push(t.res)
				this._handler.sendMessage(t, n)
			}
		}
	function sd(e) {
		return e[0] === 'o' && e[1] === 'n' && pl(e.charCodeAt(2))
	}
	function od(e) {
		return /^onDynamic/.test(e) && pl(e.charCodeAt(9))
	}
	var Go = class {
		constructor(t, n) {
			;(this._localChannels = new Map()),
				(this._remoteChannels = new Map()),
				(this._requestHandlerFactory = n),
				(this._requestHandler = null),
				(this._protocol = new Sl({
					sendMessage: (r, i) => {
						t(r, i)
					},
					handleMessage: (r, i, s) => this._handleMessage(r, i, s),
					handleEvent: (r, i, s) => this._handleEvent(r, i, s)
				}))
		}
		onmessage(t) {
			this._protocol.handleMessage(t)
		}
		_handleMessage(t, n, r) {
			if (t === yl && n === i5) return this.initialize(r[0], r[1], r[2])
			let i = t === yl ? this._requestHandler : this._localChannels.get(t)
			if (!i) return Promise.reject(new Error(`Missing channel ${t} on worker thread`))
			if (typeof i[n] != 'function')
				return Promise.reject(new Error(`Missing method ${n} on worker thread channel ${t}`))
			try {
				return Promise.resolve(i[n].apply(i, r))
			} catch (s) {
				return Promise.reject(s)
			}
		}
		_handleEvent(t, n, r) {
			let i = t === yl ? this._requestHandler : this._localChannels.get(t)
			if (!i) throw new Error(`Missing channel ${t} on worker thread`)
			if (od(n)) {
				let s = i[n].call(i, r)
				if (typeof s != 'function')
					throw new Error(`Missing dynamic event ${n} on request handler.`)
				return s
			}
			if (sd(n)) {
				let s = i[n]
				if (typeof s != 'function') throw new Error(`Missing event ${n} on request handler.`)
				return s
			}
			throw new Error(`Malformed event name ${n}`)
		}
		getChannel(t) {
			if (!this._remoteChannels.has(t)) {
				let n = this._protocol.createProxyToRemoteChannel(t)
				this._remoteChannels.set(t, n)
			}
			return this._remoteChannels.get(t)
		}
		async initialize(t, n, r) {
			if ((this._protocol.setWorkerId(t), this._requestHandlerFactory)) {
				this._requestHandler = this._requestHandlerFactory(this)
				return
			}
			return (
				n &&
					(typeof n.baseUrl < 'u' && delete n.baseUrl,
					typeof n.paths < 'u' && typeof n.paths.vs < 'u' && delete n.paths.vs,
					typeof n.trustedTypesPolicy < 'u' && delete n.trustedTypesPolicy,
					(n.catchError = !0),
					globalThis.require.config(n)),
				r5
					? import(`${jo.asBrowserUri(`${r}.js`).toString(!0)}`).then((s) => {
							if (((this._requestHandler = s.create(this)), !this._requestHandler))
								throw new Error('No RequestHandler!')
					  })
					: new Promise((i, s) => {
							let o = globalThis.require
							o(
								[r],
								(a) => {
									if (((this._requestHandler = a.create(this)), !this._requestHandler)) {
										s(new Error('No RequestHandler!'))
										return
									}
									i()
								},
								s
							)
					  })
			)
		}
	}
	var sn = class {
		constructor(t, n, r, i) {
			;(this.originalStart = t),
				(this.originalLength = n),
				(this.modifiedStart = r),
				(this.modifiedLength = i)
		}
		getOriginalEnd() {
			return this.originalStart + this.originalLength
		}
		getModifiedEnd() {
			return this.modifiedStart + this.modifiedLength
		}
	}
	function ad(e, t) {
		return ((t << 5) - t + e) | 0
	}
	function cd(e, t) {
		t = ad(149417, t)
		for (let n = 0, r = e.length; n < r; n++) t = ad(e.charCodeAt(n), t)
		return t
	}
	function Al(e, t, n = 32) {
		let r = n - t,
			i = ~((1 << r) - 1)
		return ((e << t) | ((i & e) >>> r)) >>> 0
	}
	function ud(e, t = 0, n = e.byteLength, r = 0) {
		for (let i = 0; i < n; i++) e[t + i] = r
	}
	function s5(e, t, n = '0') {
		for (; e.length < t; ) e = n + e
		return e
	}
	function xs(e, t = 32) {
		return e instanceof ArrayBuffer
			? Array.from(new Uint8Array(e))
					.map((n) => n.toString(16).padStart(2, '0'))
					.join('')
			: s5((e >>> 0).toString(16), t / 4)
	}
	var ld = class e {
		static {
			this._bigBlock32 = new DataView(new ArrayBuffer(320))
		}
		constructor() {
			;(this._h0 = 1732584193),
				(this._h1 = 4023233417),
				(this._h2 = 2562383102),
				(this._h3 = 271733878),
				(this._h4 = 3285377520),
				(this._buff = new Uint8Array(64 + 3)),
				(this._buffDV = new DataView(this._buff.buffer)),
				(this._buffLen = 0),
				(this._totalLen = 0),
				(this._leftoverHighSurrogate = 0),
				(this._finished = !1)
		}
		update(t) {
			let n = t.length
			if (n === 0) return
			let r = this._buff,
				i = this._buffLen,
				s = this._leftoverHighSurrogate,
				o,
				a
			for (s !== 0 ? ((o = s), (a = -1), (s = 0)) : ((o = t.charCodeAt(0)), (a = 0)); ; ) {
				let u = o
				if (di(o))
					if (a + 1 < n) {
						let l = t.charCodeAt(a + 1)
						Bo(l) ? (a++, (u = hl(o, l))) : (u = 65533)
					} else {
						s = o
						break
					}
				else Bo(o) && (u = 65533)
				if (((i = this._push(r, i, u)), a++, a < n)) o = t.charCodeAt(a)
				else break
			}
			;(this._buffLen = i), (this._leftoverHighSurrogate = s)
		}
		_push(t, n, r) {
			return (
				r < 128
					? (t[n++] = r)
					: r < 2048
					? ((t[n++] = 192 | ((r & 1984) >>> 6)), (t[n++] = 128 | ((r & 63) >>> 0)))
					: r < 65536
					? ((t[n++] = 224 | ((r & 61440) >>> 12)),
					  (t[n++] = 128 | ((r & 4032) >>> 6)),
					  (t[n++] = 128 | ((r & 63) >>> 0)))
					: ((t[n++] = 240 | ((r & 1835008) >>> 18)),
					  (t[n++] = 128 | ((r & 258048) >>> 12)),
					  (t[n++] = 128 | ((r & 4032) >>> 6)),
					  (t[n++] = 128 | ((r & 63) >>> 0))),
				n >= 64 &&
					(this._step(),
					(n -= 64),
					(this._totalLen += 64),
					(t[0] = t[64 + 0]),
					(t[1] = t[64 + 1]),
					(t[2] = t[64 + 2])),
				n
			)
		}
		digest() {
			return (
				this._finished ||
					((this._finished = !0),
					this._leftoverHighSurrogate &&
						((this._leftoverHighSurrogate = 0),
						(this._buffLen = this._push(this._buff, this._buffLen, 65533))),
					(this._totalLen += this._buffLen),
					this._wrapUp()),
				xs(this._h0) + xs(this._h1) + xs(this._h2) + xs(this._h3) + xs(this._h4)
			)
		}
		_wrapUp() {
			;(this._buff[this._buffLen++] = 128),
				ud(this._buff, this._buffLen),
				this._buffLen > 56 && (this._step(), ud(this._buff))
			let t = 8 * this._totalLen
			this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1),
				this._buffDV.setUint32(60, t % 4294967296, !1),
				this._step()
		}
		_step() {
			let t = e._bigBlock32,
				n = this._buffDV
			for (let d = 0; d < 64; d += 4) t.setUint32(d, n.getUint32(d, !1), !1)
			for (let d = 64; d < 320; d += 4)
				t.setUint32(
					d,
					Al(
						t.getUint32(d - 12, !1) ^
							t.getUint32(d - 32, !1) ^
							t.getUint32(d - 56, !1) ^
							t.getUint32(d - 64, !1),
						1
					),
					!1
				)
			let r = this._h0,
				i = this._h1,
				s = this._h2,
				o = this._h3,
				a = this._h4,
				u,
				l,
				c
			for (let d = 0; d < 80; d++)
				d < 20
					? ((u = (i & s) | (~i & o)), (l = 1518500249))
					: d < 40
					? ((u = i ^ s ^ o), (l = 1859775393))
					: d < 60
					? ((u = (i & s) | (i & o) | (s & o)), (l = 2400959708))
					: ((u = i ^ s ^ o), (l = 3395469782)),
					(c = (Al(r, 5) + u + a + l + t.getUint32(d * 4, !1)) & 4294967295),
					(a = o),
					(o = s),
					(s = Al(i, 30)),
					(i = r),
					(r = c)
			;(this._h0 = (this._h0 + r) & 4294967295),
				(this._h1 = (this._h1 + i) & 4294967295),
				(this._h2 = (this._h2 + s) & 4294967295),
				(this._h3 = (this._h3 + o) & 4294967295),
				(this._h4 = (this._h4 + a) & 4294967295)
		}
	}
	var Ho = class {
		constructor(t) {
			this.source = t
		}
		getElements() {
			let t = this.source,
				n = new Int32Array(t.length)
			for (let r = 0, i = t.length; r < i; r++) n[r] = t.charCodeAt(r)
			return n
		}
	}
	function fd(e, t, n) {
		return new _s(new Ho(e), new Ho(t)).ComputeDiff(n).changes
	}
	var sr = class {
			static Assert(t, n) {
				if (!t) throw new Error(n)
			}
		},
		or = class {
			static Copy(t, n, r, i, s) {
				for (let o = 0; o < s; o++) r[i + o] = t[n + o]
			}
			static Copy2(t, n, r, i, s) {
				for (let o = 0; o < s; o++) r[i + o] = t[n + o]
			}
		},
		Wo = class {
			constructor() {
				;(this.m_changes = []),
					(this.m_originalStart = 1073741824),
					(this.m_modifiedStart = 1073741824),
					(this.m_originalCount = 0),
					(this.m_modifiedCount = 0)
			}
			MarkNextChange() {
				;(this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
					this.m_changes.push(
						new sn(
							this.m_originalStart,
							this.m_originalCount,
							this.m_modifiedStart,
							this.m_modifiedCount
						)
					),
					(this.m_originalCount = 0),
					(this.m_modifiedCount = 0),
					(this.m_originalStart = 1073741824),
					(this.m_modifiedStart = 1073741824)
			}
			AddOriginalElement(t, n) {
				;(this.m_originalStart = Math.min(this.m_originalStart, t)),
					(this.m_modifiedStart = Math.min(this.m_modifiedStart, n)),
					this.m_originalCount++
			}
			AddModifiedElement(t, n) {
				;(this.m_originalStart = Math.min(this.m_originalStart, t)),
					(this.m_modifiedStart = Math.min(this.m_modifiedStart, n)),
					this.m_modifiedCount++
			}
			getChanges() {
				return (
					(this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
					this.m_changes
				)
			}
			getReverseChanges() {
				return (
					(this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
					this.m_changes.reverse(),
					this.m_changes
				)
			}
		},
		_s = class e {
			constructor(t, n, r = null) {
				;(this.ContinueProcessingPredicate = r),
					(this._originalSequence = t),
					(this._modifiedSequence = n)
				let [i, s, o] = e._getElements(t),
					[a, u, l] = e._getElements(n)
				;(this._hasStrings = o && l),
					(this._originalStringElements = i),
					(this._originalElementsOrHash = s),
					(this._modifiedStringElements = a),
					(this._modifiedElementsOrHash = u),
					(this.m_forwardHistory = []),
					(this.m_reverseHistory = [])
			}
			static _isStringArray(t) {
				return t.length > 0 && typeof t[0] == 'string'
			}
			static _getElements(t) {
				let n = t.getElements()
				if (e._isStringArray(n)) {
					let r = new Int32Array(n.length)
					for (let i = 0, s = n.length; i < s; i++) r[i] = cd(n[i], 0)
					return [n, r, !0]
				}
				return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1]
			}
			ElementsAreEqual(t, n) {
				return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n]
					? !1
					: this._hasStrings
					? this._originalStringElements[t] === this._modifiedStringElements[n]
					: !0
			}
			ElementsAreStrictEqual(t, n) {
				if (!this.ElementsAreEqual(t, n)) return !1
				let r = e._getStrictElement(this._originalSequence, t),
					i = e._getStrictElement(this._modifiedSequence, n)
				return r === i
			}
			static _getStrictElement(t, n) {
				return typeof t.getStrictElement == 'function' ? t.getStrictElement(n) : null
			}
			OriginalElementsAreEqual(t, n) {
				return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n]
					? !1
					: this._hasStrings
					? this._originalStringElements[t] === this._originalStringElements[n]
					: !0
			}
			ModifiedElementsAreEqual(t, n) {
				return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n]
					? !1
					: this._hasStrings
					? this._modifiedStringElements[t] === this._modifiedStringElements[n]
					: !0
			}
			ComputeDiff(t) {
				return this._ComputeDiff(
					0,
					this._originalElementsOrHash.length - 1,
					0,
					this._modifiedElementsOrHash.length - 1,
					t
				)
			}
			_ComputeDiff(t, n, r, i, s) {
				let o = [!1],
					a = this.ComputeDiffRecursive(t, n, r, i, o)
				return s && (a = this.PrettifyChanges(a)), { quitEarly: o[0], changes: a }
			}
			ComputeDiffRecursive(t, n, r, i, s) {
				for (s[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); ) t++, r++
				for (; n >= t && i >= r && this.ElementsAreEqual(n, i); ) n--, i--
				if (t > n || r > i) {
					let d
					return (
						r <= i
							? (sr.Assert(t === n + 1, 'originalStart should only be one more than originalEnd'),
							  (d = [new sn(t, 0, r, i - r + 1)]))
							: t <= n
							? (sr.Assert(r === i + 1, 'modifiedStart should only be one more than modifiedEnd'),
							  (d = [new sn(t, n - t + 1, r, 0)]))
							: (sr.Assert(t === n + 1, 'originalStart should only be one more than originalEnd'),
							  sr.Assert(r === i + 1, 'modifiedStart should only be one more than modifiedEnd'),
							  (d = [])),
						d
					)
				}
				let o = [0],
					a = [0],
					u = this.ComputeRecursionPoint(t, n, r, i, o, a, s),
					l = o[0],
					c = a[0]
				if (u !== null) return u
				if (!s[0]) {
					let d = this.ComputeDiffRecursive(t, l, r, c, s),
						h = []
					return (
						s[0]
							? (h = [new sn(l + 1, n - (l + 1) + 1, c + 1, i - (c + 1) + 1)])
							: (h = this.ComputeDiffRecursive(l + 1, n, c + 1, i, s)),
						this.ConcatenateChanges(d, h)
					)
				}
				return [new sn(t, n - t + 1, r, i - r + 1)]
			}
			WALKTRACE(t, n, r, i, s, o, a, u, l, c, d, h, m, g, v, N, _, w) {
				let C = null,
					S = null,
					k = new Wo(),
					M = n,
					I = r,
					B = m[0] - N[0] - i,
					L = -1073741824,
					A = this.m_forwardHistory.length - 1
				do {
					let X = B + t
					X === M || (X < I && l[X - 1] < l[X + 1])
						? ((d = l[X + 1]),
						  (g = d - B - i),
						  d < L && k.MarkNextChange(),
						  (L = d),
						  k.AddModifiedElement(d + 1, g),
						  (B = X + 1 - t))
						: ((d = l[X - 1] + 1),
						  (g = d - B - i),
						  d < L && k.MarkNextChange(),
						  (L = d - 1),
						  k.AddOriginalElement(d, g + 1),
						  (B = X - 1 - t)),
						A >= 0 && ((l = this.m_forwardHistory[A]), (t = l[0]), (M = 1), (I = l.length - 1))
				} while (--A >= -1)
				if (((C = k.getReverseChanges()), w[0])) {
					let X = m[0] + 1,
						z = N[0] + 1
					if (C !== null && C.length > 0) {
						let fe = C[C.length - 1]
						;(X = Math.max(X, fe.getOriginalEnd())), (z = Math.max(z, fe.getModifiedEnd()))
					}
					S = [new sn(X, h - X + 1, z, v - z + 1)]
				} else {
					;(k = new Wo()),
						(M = o),
						(I = a),
						(B = m[0] - N[0] - u),
						(L = 1073741824),
						(A = _ ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2)
					do {
						let X = B + s
						X === M || (X < I && c[X - 1] >= c[X + 1])
							? ((d = c[X + 1] - 1),
							  (g = d - B - u),
							  d > L && k.MarkNextChange(),
							  (L = d + 1),
							  k.AddOriginalElement(d + 1, g + 1),
							  (B = X + 1 - s))
							: ((d = c[X - 1]),
							  (g = d - B - u),
							  d > L && k.MarkNextChange(),
							  (L = d),
							  k.AddModifiedElement(d + 1, g + 1),
							  (B = X - 1 - s)),
							A >= 0 && ((c = this.m_reverseHistory[A]), (s = c[0]), (M = 1), (I = c.length - 1))
					} while (--A >= -1)
					S = k.getChanges()
				}
				return this.ConcatenateChanges(C, S)
			}
			ComputeRecursionPoint(t, n, r, i, s, o, a) {
				let u = 0,
					l = 0,
					c = 0,
					d = 0,
					h = 0,
					m = 0
				t--, r--, (s[0] = 0), (o[0] = 0), (this.m_forwardHistory = []), (this.m_reverseHistory = [])
				let g = n - t + (i - r),
					v = g + 1,
					N = new Int32Array(v),
					_ = new Int32Array(v),
					w = i - r,
					C = n - t,
					S = t - r,
					k = n - i,
					I = (C - w) % 2 === 0
				;(N[w] = t), (_[C] = n), (a[0] = !1)
				for (let B = 1; B <= g / 2 + 1; B++) {
					let L = 0,
						A = 0
					;(c = this.ClipDiagonalBound(w - B, B, w, v)),
						(d = this.ClipDiagonalBound(w + B, B, w, v))
					for (let z = c; z <= d; z += 2) {
						z === c || (z < d && N[z - 1] < N[z + 1]) ? (u = N[z + 1]) : (u = N[z - 1] + 1),
							(l = u - (z - w) - S)
						let fe = u
						for (; u < n && l < i && this.ElementsAreEqual(u + 1, l + 1); ) u++, l++
						if (
							((N[z] = u),
							u + l > L + A && ((L = u), (A = l)),
							!I && Math.abs(z - C) <= B - 1 && u >= _[z])
						)
							return (
								(s[0] = u),
								(o[0] = l),
								fe <= _[z] && 1447 > 0 && B <= 1447 + 1
									? this.WALKTRACE(w, c, d, S, C, h, m, k, N, _, u, n, s, l, i, o, I, a)
									: null
							)
					}
					let X = (L - t + (A - r) - B) / 2
					if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(L, X))
						return (
							(a[0] = !0),
							(s[0] = L),
							(o[0] = A),
							X > 0 && 1447 > 0 && B <= 1447 + 1
								? this.WALKTRACE(w, c, d, S, C, h, m, k, N, _, u, n, s, l, i, o, I, a)
								: (t++, r++, [new sn(t, n - t + 1, r, i - r + 1)])
						)
					;(h = this.ClipDiagonalBound(C - B, B, C, v)),
						(m = this.ClipDiagonalBound(C + B, B, C, v))
					for (let z = h; z <= m; z += 2) {
						z === h || (z < m && _[z - 1] >= _[z + 1]) ? (u = _[z + 1] - 1) : (u = _[z - 1]),
							(l = u - (z - C) - k)
						let fe = u
						for (; u > t && l > r && this.ElementsAreEqual(u, l); ) u--, l--
						if (((_[z] = u), I && Math.abs(z - w) <= B && u <= N[z]))
							return (
								(s[0] = u),
								(o[0] = l),
								fe >= N[z] && 1447 > 0 && B <= 1447 + 1
									? this.WALKTRACE(w, c, d, S, C, h, m, k, N, _, u, n, s, l, i, o, I, a)
									: null
							)
					}
					if (B <= 1447) {
						let z = new Int32Array(d - c + 2)
						;(z[0] = w - c + 1),
							or.Copy2(N, c, z, 1, d - c + 1),
							this.m_forwardHistory.push(z),
							(z = new Int32Array(m - h + 2)),
							(z[0] = C - h + 1),
							or.Copy2(_, h, z, 1, m - h + 1),
							this.m_reverseHistory.push(z)
					}
				}
				return this.WALKTRACE(w, c, d, S, C, h, m, k, N, _, u, n, s, l, i, o, I, a)
			}
			PrettifyChanges(t) {
				for (let n = 0; n < t.length; n++) {
					let r = t[n],
						i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length,
						s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length,
						o = r.originalLength > 0,
						a = r.modifiedLength > 0
					for (
						;
						r.originalStart + r.originalLength < i &&
						r.modifiedStart + r.modifiedLength < s &&
						(!o ||
							this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) &&
						(!a ||
							this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));

					) {
						let l = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart)
						if (
							this.ElementsAreStrictEqual(
								r.originalStart + r.originalLength,
								r.modifiedStart + r.modifiedLength
							) &&
							!l
						)
							break
						r.originalStart++, r.modifiedStart++
					}
					let u = [null]
					if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], u)) {
						;(t[n] = u[0]), t.splice(n + 1, 1), n--
						continue
					}
				}
				for (let n = t.length - 1; n >= 0; n--) {
					let r = t[n],
						i = 0,
						s = 0
					if (n > 0) {
						let d = t[n - 1]
						;(i = d.originalStart + d.originalLength), (s = d.modifiedStart + d.modifiedLength)
					}
					let o = r.originalLength > 0,
						a = r.modifiedLength > 0,
						u = 0,
						l = this._boundaryScore(
							r.originalStart,
							r.originalLength,
							r.modifiedStart,
							r.modifiedLength
						)
					for (let d = 1; ; d++) {
						let h = r.originalStart - d,
							m = r.modifiedStart - d
						if (
							h < i ||
							m < s ||
							(o && !this.OriginalElementsAreEqual(h, h + r.originalLength)) ||
							(a && !this.ModifiedElementsAreEqual(m, m + r.modifiedLength))
						)
							break
						let v =
							(h === i && m === s ? 5 : 0) +
							this._boundaryScore(h, r.originalLength, m, r.modifiedLength)
						v > l && ((l = v), (u = d))
					}
					;(r.originalStart -= u), (r.modifiedStart -= u)
					let c = [null]
					if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], c)) {
						;(t[n - 1] = c[0]), t.splice(n, 1), n++
						continue
					}
				}
				if (this._hasStrings)
					for (let n = 1, r = t.length; n < r; n++) {
						let i = t[n - 1],
							s = t[n],
							o = s.originalStart - i.originalStart - i.originalLength,
							a = i.originalStart,
							u = s.originalStart + s.originalLength,
							l = u - a,
							c = i.modifiedStart,
							d = s.modifiedStart + s.modifiedLength,
							h = d - c
						if (o < 5 && l < 20 && h < 20) {
							let m = this._findBetterContiguousSequence(a, l, c, h, o)
							if (m) {
								let [g, v] = m
								;(g !== i.originalStart + i.originalLength ||
									v !== i.modifiedStart + i.modifiedLength) &&
									((i.originalLength = g - i.originalStart),
									(i.modifiedLength = v - i.modifiedStart),
									(s.originalStart = g + o),
									(s.modifiedStart = v + o),
									(s.originalLength = u - s.originalStart),
									(s.modifiedLength = d - s.modifiedStart))
							}
						}
					}
				return t
			}
			_findBetterContiguousSequence(t, n, r, i, s) {
				if (n < s || i < s) return null
				let o = t + n - s + 1,
					a = r + i - s + 1,
					u = 0,
					l = 0,
					c = 0
				for (let d = t; d < o; d++)
					for (let h = r; h < a; h++) {
						let m = this._contiguousSequenceScore(d, h, s)
						m > 0 && m > u && ((u = m), (l = d), (c = h))
					}
				return u > 0 ? [l, c] : null
			}
			_contiguousSequenceScore(t, n, r) {
				let i = 0
				for (let s = 0; s < r; s++) {
					if (!this.ElementsAreEqual(t + s, n + s)) return 0
					i += this._originalStringElements[t + s].length
				}
				return i
			}
			_OriginalIsBoundary(t) {
				return t <= 0 || t >= this._originalElementsOrHash.length - 1
					? !0
					: this._hasStrings && /^\s*$/.test(this._originalStringElements[t])
			}
			_OriginalRegionIsBoundary(t, n) {
				if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return !0
				if (n > 0) {
					let r = t + n
					if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r)) return !0
				}
				return !1
			}
			_ModifiedIsBoundary(t) {
				return t <= 0 || t >= this._modifiedElementsOrHash.length - 1
					? !0
					: this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t])
			}
			_ModifiedRegionIsBoundary(t, n) {
				if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return !0
				if (n > 0) {
					let r = t + n
					if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r)) return !0
				}
				return !1
			}
			_boundaryScore(t, n, r, i) {
				let s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0,
					o = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0
				return s + o
			}
			ConcatenateChanges(t, n) {
				let r = []
				if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t
				if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
					let i = new Array(t.length + n.length - 1)
					return (
						or.Copy(t, 0, i, 0, t.length - 1),
						(i[t.length - 1] = r[0]),
						or.Copy(n, 1, i, t.length, n.length - 1),
						i
					)
				} else {
					let i = new Array(t.length + n.length)
					return or.Copy(t, 0, i, 0, t.length), or.Copy(n, 0, i, t.length, n.length), i
				}
			}
			ChangesOverlap(t, n, r) {
				if (
					(sr.Assert(
						t.originalStart <= n.originalStart,
						'Left change is not less than or equal to right change'
					),
					sr.Assert(
						t.modifiedStart <= n.modifiedStart,
						'Left change is not less than or equal to right change'
					),
					t.originalStart + t.originalLength >= n.originalStart ||
						t.modifiedStart + t.modifiedLength >= n.modifiedStart)
				) {
					let i = t.originalStart,
						s = t.originalLength,
						o = t.modifiedStart,
						a = t.modifiedLength
					return (
						t.originalStart + t.originalLength >= n.originalStart &&
							(s = n.originalStart + n.originalLength - t.originalStart),
						t.modifiedStart + t.modifiedLength >= n.modifiedStart &&
							(a = n.modifiedStart + n.modifiedLength - t.modifiedStart),
						(r[0] = new sn(i, s, o, a)),
						!0
					)
				} else return (r[0] = null), !1
			}
			ClipDiagonalBound(t, n, r, i) {
				if (t >= 0 && t < i) return t
				let s = r,
					o = i - r - 1,
					a = n % 2 === 0
				if (t < 0) {
					let u = s % 2 === 0
					return a === u ? 0 : 1
				} else {
					let u = o % 2 === 0
					return a === u ? i - 1 : i - 2
				}
			}
		}
	var Se = class e {
		constructor(t, n) {
			;(this.lineNumber = t), (this.column = n)
		}
		with(t = this.lineNumber, n = this.column) {
			return t === this.lineNumber && n === this.column ? this : new e(t, n)
		}
		delta(t = 0, n = 0) {
			return this.with(this.lineNumber + t, this.column + n)
		}
		equals(t) {
			return e.equals(this, t)
		}
		static equals(t, n) {
			return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column
		}
		isBefore(t) {
			return e.isBefore(this, t)
		}
		static isBefore(t, n) {
			return t.lineNumber < n.lineNumber
				? !0
				: n.lineNumber < t.lineNumber
				? !1
				: t.column < n.column
		}
		isBeforeOrEqual(t) {
			return e.isBeforeOrEqual(this, t)
		}
		static isBeforeOrEqual(t, n) {
			return t.lineNumber < n.lineNumber
				? !0
				: n.lineNumber < t.lineNumber
				? !1
				: t.column <= n.column
		}
		static compare(t, n) {
			let r = t.lineNumber | 0,
				i = n.lineNumber | 0
			if (r === i) {
				let s = t.column | 0,
					o = n.column | 0
				return s - o
			}
			return r - i
		}
		clone() {
			return new e(this.lineNumber, this.column)
		}
		toString() {
			return '(' + this.lineNumber + ',' + this.column + ')'
		}
		static lift(t) {
			return new e(t.lineNumber, t.column)
		}
		static isIPosition(t) {
			return t && typeof t.lineNumber == 'number' && typeof t.column == 'number'
		}
		toJSON() {
			return { lineNumber: this.lineNumber, column: this.column }
		}
	}
	var oe = class e {
		constructor(t, n, r, i) {
			t > r || (t === r && n > i)
				? ((this.startLineNumber = r),
				  (this.startColumn = i),
				  (this.endLineNumber = t),
				  (this.endColumn = n))
				: ((this.startLineNumber = t),
				  (this.startColumn = n),
				  (this.endLineNumber = r),
				  (this.endColumn = i))
		}
		isEmpty() {
			return e.isEmpty(this)
		}
		static isEmpty(t) {
			return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
		}
		containsPosition(t) {
			return e.containsPosition(this, t)
		}
		static containsPosition(t, n) {
			return !(
				n.lineNumber < t.startLineNumber ||
				n.lineNumber > t.endLineNumber ||
				(n.lineNumber === t.startLineNumber && n.column < t.startColumn) ||
				(n.lineNumber === t.endLineNumber && n.column > t.endColumn)
			)
		}
		static strictContainsPosition(t, n) {
			return !(
				n.lineNumber < t.startLineNumber ||
				n.lineNumber > t.endLineNumber ||
				(n.lineNumber === t.startLineNumber && n.column <= t.startColumn) ||
				(n.lineNumber === t.endLineNumber && n.column >= t.endColumn)
			)
		}
		containsRange(t) {
			return e.containsRange(this, t)
		}
		static containsRange(t, n) {
			return !(
				n.startLineNumber < t.startLineNumber ||
				n.endLineNumber < t.startLineNumber ||
				n.startLineNumber > t.endLineNumber ||
				n.endLineNumber > t.endLineNumber ||
				(n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn) ||
				(n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn)
			)
		}
		strictContainsRange(t) {
			return e.strictContainsRange(this, t)
		}
		static strictContainsRange(t, n) {
			return !(
				n.startLineNumber < t.startLineNumber ||
				n.endLineNumber < t.startLineNumber ||
				n.startLineNumber > t.endLineNumber ||
				n.endLineNumber > t.endLineNumber ||
				(n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn) ||
				(n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn)
			)
		}
		plusRange(t) {
			return e.plusRange(this, t)
		}
		static plusRange(t, n) {
			let r, i, s, o
			return (
				n.startLineNumber < t.startLineNumber
					? ((r = n.startLineNumber), (i = n.startColumn))
					: n.startLineNumber === t.startLineNumber
					? ((r = n.startLineNumber), (i = Math.min(n.startColumn, t.startColumn)))
					: ((r = t.startLineNumber), (i = t.startColumn)),
				n.endLineNumber > t.endLineNumber
					? ((s = n.endLineNumber), (o = n.endColumn))
					: n.endLineNumber === t.endLineNumber
					? ((s = n.endLineNumber), (o = Math.max(n.endColumn, t.endColumn)))
					: ((s = t.endLineNumber), (o = t.endColumn)),
				new e(r, i, s, o)
			)
		}
		intersectRanges(t) {
			return e.intersectRanges(this, t)
		}
		static intersectRanges(t, n) {
			let r = t.startLineNumber,
				i = t.startColumn,
				s = t.endLineNumber,
				o = t.endColumn,
				a = n.startLineNumber,
				u = n.startColumn,
				l = n.endLineNumber,
				c = n.endColumn
			return (
				r < a ? ((r = a), (i = u)) : r === a && (i = Math.max(i, u)),
				s > l ? ((s = l), (o = c)) : s === l && (o = Math.min(o, c)),
				r > s || (r === s && i > o) ? null : new e(r, i, s, o)
			)
		}
		equalsRange(t) {
			return e.equalsRange(this, t)
		}
		static equalsRange(t, n) {
			return !t && !n
				? !0
				: !!t &&
						!!n &&
						t.startLineNumber === n.startLineNumber &&
						t.startColumn === n.startColumn &&
						t.endLineNumber === n.endLineNumber &&
						t.endColumn === n.endColumn
		}
		getEndPosition() {
			return e.getEndPosition(this)
		}
		static getEndPosition(t) {
			return new Se(t.endLineNumber, t.endColumn)
		}
		getStartPosition() {
			return e.getStartPosition(this)
		}
		static getStartPosition(t) {
			return new Se(t.startLineNumber, t.startColumn)
		}
		toString() {
			return (
				'[' +
				this.startLineNumber +
				',' +
				this.startColumn +
				' -> ' +
				this.endLineNumber +
				',' +
				this.endColumn +
				']'
			)
		}
		setEndPosition(t, n) {
			return new e(this.startLineNumber, this.startColumn, t, n)
		}
		setStartPosition(t, n) {
			return new e(t, n, this.endLineNumber, this.endColumn)
		}
		collapseToStart() {
			return e.collapseToStart(this)
		}
		static collapseToStart(t) {
			return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn)
		}
		collapseToEnd() {
			return e.collapseToEnd(this)
		}
		static collapseToEnd(t) {
			return new e(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn)
		}
		delta(t) {
			return new e(
				this.startLineNumber + t,
				this.startColumn,
				this.endLineNumber + t,
				this.endColumn
			)
		}
		static fromPositions(t, n = t) {
			return new e(t.lineNumber, t.column, n.lineNumber, n.column)
		}
		static lift(t) {
			return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null
		}
		static isIRange(t) {
			return (
				t &&
				typeof t.startLineNumber == 'number' &&
				typeof t.startColumn == 'number' &&
				typeof t.endLineNumber == 'number' &&
				typeof t.endColumn == 'number'
			)
		}
		static areIntersectingOrTouching(t, n) {
			return !(
				t.endLineNumber < n.startLineNumber ||
				(t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn) ||
				n.endLineNumber < t.startLineNumber ||
				(n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn)
			)
		}
		static areIntersecting(t, n) {
			return !(
				t.endLineNumber < n.startLineNumber ||
				(t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn) ||
				n.endLineNumber < t.startLineNumber ||
				(n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn)
			)
		}
		static compareRangesUsingStarts(t, n) {
			if (t && n) {
				let s = t.startLineNumber | 0,
					o = n.startLineNumber | 0
				if (s === o) {
					let a = t.startColumn | 0,
						u = n.startColumn | 0
					if (a === u) {
						let l = t.endLineNumber | 0,
							c = n.endLineNumber | 0
						if (l === c) {
							let d = t.endColumn | 0,
								h = n.endColumn | 0
							return d - h
						}
						return l - c
					}
					return a - u
				}
				return s - o
			}
			return (t ? 1 : 0) - (n ? 1 : 0)
		}
		static compareRangesUsingEnds(t, n) {
			return t.endLineNumber === n.endLineNumber
				? t.endColumn === n.endColumn
					? t.startLineNumber === n.startLineNumber
						? t.startColumn - n.startColumn
						: t.startLineNumber - n.startLineNumber
					: t.endColumn - n.endColumn
				: t.endLineNumber - n.endLineNumber
		}
		static spansMultipleLines(t) {
			return t.endLineNumber > t.startLineNumber
		}
		toJSON() {
			return this
		}
	}
	function Fl(e) {
		return e < 0 ? 0 : e > 255 ? 255 : e | 0
	}
	function _r(e) {
		return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0
	}
	var Ns = class e {
		constructor(t) {
			let n = Fl(t)
			;(this._defaultValue = n), (this._asciiMap = e._createAsciiMap(n)), (this._map = new Map())
		}
		static _createAsciiMap(t) {
			let n = new Uint8Array(256)
			return n.fill(t), n
		}
		set(t, n) {
			let r = Fl(n)
			t >= 0 && t < 256 ? (this._asciiMap[t] = r) : this._map.set(t, r)
		}
		get(t) {
			return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue
		}
		clear() {
			this._asciiMap.fill(this._defaultValue), this._map.clear()
		}
	}
	var Ll = class {
			constructor(t, n, r) {
				let i = new Uint8Array(t * n)
				for (let s = 0, o = t * n; s < o; s++) i[s] = r
				;(this._data = i), (this.rows = t), (this.cols = n)
			}
			get(t, n) {
				return this._data[t * this.cols + n]
			}
			set(t, n, r) {
				this._data[t * this.cols + n] = r
			}
		},
		Cl = class {
			constructor(t) {
				let n = 0,
					r = 0
				for (let s = 0, o = t.length; s < o; s++) {
					let [a, u, l] = t[s]
					u > n && (n = u), a > r && (r = a), l > r && (r = l)
				}
				n++, r++
				let i = new Ll(r, n, 0)
				for (let s = 0, o = t.length; s < o; s++) {
					let [a, u, l] = t[s]
					i.set(a, u, l)
				}
				;(this._states = i), (this._maxCharCode = n)
			}
			nextState(t, n) {
				return n < 0 || n >= this._maxCharCode ? 0 : this._states.get(t, n)
			}
		},
		wl = null
	function o5() {
		return (
			wl === null &&
				(wl = new Cl([
					[1, 104, 2],
					[1, 72, 2],
					[1, 102, 6],
					[1, 70, 6],
					[2, 116, 3],
					[2, 84, 3],
					[3, 116, 4],
					[3, 84, 4],
					[4, 112, 5],
					[4, 80, 5],
					[5, 115, 9],
					[5, 83, 9],
					[5, 58, 10],
					[6, 105, 7],
					[6, 73, 7],
					[7, 108, 8],
					[7, 76, 8],
					[8, 101, 9],
					[8, 69, 9],
					[9, 58, 10],
					[10, 47, 11],
					[11, 47, 12]
				])),
			wl
		)
	}
	var Ts = null
	function a5() {
		if (Ts === null) {
			Ts = new Ns(0)
			let e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`
			for (let n = 0; n < e.length; n++) Ts.set(e.charCodeAt(n), 1)
			let t = '.,;:'
			for (let n = 0; n < t.length; n++) Ts.set(t.charCodeAt(n), 2)
		}
		return Ts
	}
	var Il = class e {
		static _createLink(t, n, r, i, s) {
			let o = s - 1
			do {
				let a = n.charCodeAt(o)
				if (t.get(a) !== 2) break
				o--
			} while (o > i)
			if (i > 0) {
				let a = n.charCodeAt(i - 1),
					u = n.charCodeAt(o)
				;((a === 40 && u === 41) || (a === 91 && u === 93) || (a === 123 && u === 125)) && o--
			}
			return {
				range: { startLineNumber: r, startColumn: i + 1, endLineNumber: r, endColumn: o + 2 },
				url: n.substring(i, o + 1)
			}
		}
		static computeLinks(t, n = o5()) {
			let r = a5(),
				i = []
			for (let s = 1, o = t.getLineCount(); s <= o; s++) {
				let a = t.getLineContent(s),
					u = a.length,
					l = 0,
					c = 0,
					d = 0,
					h = 1,
					m = !1,
					g = !1,
					v = !1,
					N = !1
				for (; l < u; ) {
					let _ = !1,
						w = a.charCodeAt(l)
					if (h === 13) {
						let C
						switch (w) {
							case 40:
								;(m = !0), (C = 0)
								break
							case 41:
								C = m ? 0 : 1
								break
							case 91:
								;(v = !0), (g = !0), (C = 0)
								break
							case 93:
								;(v = !1), (C = g ? 0 : 1)
								break
							case 123:
								;(N = !0), (C = 0)
								break
							case 125:
								C = N ? 0 : 1
								break
							case 39:
							case 34:
							case 96:
								d === w ? (C = 1) : d === 39 || d === 34 || d === 96 ? (C = 0) : (C = 1)
								break
							case 42:
								C = d === 42 ? 1 : 0
								break
							case 124:
								C = d === 124 ? 1 : 0
								break
							case 32:
								C = v ? 0 : 1
								break
							default:
								C = r.get(w)
						}
						C === 1 && (i.push(e._createLink(r, a, s, c, l)), (_ = !0))
					} else if (h === 12) {
						let C
						w === 91 ? ((g = !0), (C = 0)) : (C = r.get(w)), C === 1 ? (_ = !0) : (h = 13)
					} else (h = n.nextState(h, w)), h === 0 && (_ = !0)
					_ && ((h = 1), (m = !1), (g = !1), (N = !1), (c = l + 1), (d = w)), l++
				}
				h === 13 && i.push(e._createLink(r, a, s, c, u))
			}
			return i
		}
	}
	function dd(e) {
		return !e || typeof e.getLineCount != 'function' || typeof e.getLineContent != 'function'
			? []
			: Il.computeLinks(e)
	}
	var Qo = class e {
		constructor() {
			this._defaultValueSet = [
				['true', 'false'],
				['True', 'False'],
				['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
				['public', 'protected', 'private']
			]
		}
		static {
			this.INSTANCE = new e()
		}
		navigateValueSet(t, n, r, i, s) {
			if (t && n) {
				let o = this.doNavigateValueSet(n, s)
				if (o) return { range: t, value: o }
			}
			if (r && i) {
				let o = this.doNavigateValueSet(i, s)
				if (o) return { range: r, value: o }
			}
			return null
		}
		doNavigateValueSet(t, n) {
			let r = this.numberReplace(t, n)
			return r !== null ? r : this.textReplace(t, n)
		}
		numberReplace(t, n) {
			let r = Math.pow(10, t.length - (t.lastIndexOf('.') + 1)),
				i = Number(t),
				s = parseFloat(t)
			return !isNaN(i) && !isNaN(s) && i === s
				? i === 0 && !n
					? null
					: ((i = Math.floor(i * r)), (i += n ? r : -r), String(i / r))
				: null
		}
		textReplace(t, n) {
			return this.valueSetsReplace(this._defaultValueSet, t, n)
		}
		valueSetsReplace(t, n, r) {
			let i = null
			for (let s = 0, o = t.length; i === null && s < o; s++) i = this.valueSetReplace(t[s], n, r)
			return i
		}
		valueSetReplace(t, n, r) {
			let i = t.indexOf(n)
			return i >= 0 ? ((i += r ? 1 : -1), i < 0 ? (i = t.length - 1) : (i %= t.length), t[i]) : null
		}
	}
	var pd = Object.freeze(function (e, t) {
			let n = setTimeout(e.bind(t), 0)
			return {
				dispose() {
					clearTimeout(n)
				}
			}
		}),
		zo
	;(function (e) {
		function t(n) {
			return n === e.None || n === e.Cancelled || n instanceof hi
				? !0
				: !n || typeof n != 'object'
				? !1
				: typeof n.isCancellationRequested == 'boolean' &&
				  typeof n.onCancellationRequested == 'function'
		}
		;(e.isCancellationToken = t),
			(e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: ui.None })),
			(e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: pd }))
	})(zo || (zo = {}))
	var hi = class {
			constructor() {
				;(this._isCancelled = !1), (this._emitter = null)
			}
			cancel() {
				this._isCancelled ||
					((this._isCancelled = !0), this._emitter && (this._emitter.fire(void 0), this.dispose()))
			}
			get isCancellationRequested() {
				return this._isCancelled
			}
			get onCancellationRequested() {
				return this._isCancelled
					? pd
					: (this._emitter || (this._emitter = new lt()), this._emitter.event)
			}
			dispose() {
				this._emitter && (this._emitter.dispose(), (this._emitter = null))
			}
		},
		Ss = class {
			constructor(t) {
				;(this._token = void 0),
					(this._parentListener = void 0),
					(this._parentListener = t && t.onCancellationRequested(this.cancel, this))
			}
			get token() {
				return this._token || (this._token = new hi()), this._token
			}
			cancel() {
				this._token
					? this._token instanceof hi && this._token.cancel()
					: (this._token = zo.Cancelled)
			}
			dispose(t = !1) {
				t && this.cancel(),
					this._parentListener?.dispose(),
					this._token ? this._token instanceof hi && this._token.dispose() : (this._token = zo.None)
			}
		}
	var As = class {
			constructor() {
				;(this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null))
			}
			define(t, n) {
				;(this._keyCodeToStr[t] = n), (this._strToKeyCode[n.toLowerCase()] = t)
			}
			keyCodeToStr(t) {
				return this._keyCodeToStr[t]
			}
			strToKeyCode(t) {
				return this._strToKeyCode[t.toLowerCase()] || 0
			}
		},
		Yo = new As(),
		Rl = new As(),
		kl = new As(),
		u5 = new Array(230),
		l5 = {},
		c5 = [],
		f5 = Object.create(null),
		d5 = Object.create(null),
		md = [],
		Ol = []
	for (let e = 0; e <= 193; e++) md[e] = -1
	for (let e = 0; e <= 132; e++) Ol[e] = -1
	;(function () {
		let e = '',
			t = [
				[1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
				[1, 1, 'Hyper', 0, e, 0, e, e, e],
				[1, 2, 'Super', 0, e, 0, e, e, e],
				[1, 3, 'Fn', 0, e, 0, e, e, e],
				[1, 4, 'FnLock', 0, e, 0, e, e, e],
				[1, 5, 'Suspend', 0, e, 0, e, e, e],
				[1, 6, 'Resume', 0, e, 0, e, e, e],
				[1, 7, 'Turbo', 0, e, 0, e, e, e],
				[1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
				[1, 9, 'WakeUp', 0, e, 0, e, e, e],
				[0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
				[0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
				[0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
				[0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
				[0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
				[0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
				[0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
				[0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
				[0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
				[0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
				[0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
				[0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
				[0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
				[0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
				[0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
				[0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
				[0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
				[0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
				[0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
				[0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
				[0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
				[0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
				[0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
				[0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
				[0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
				[0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
				[0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
				[0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
				[0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
				[0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
				[0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
				[0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
				[0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
				[0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
				[0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
				[0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
				[1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
				[1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
				[1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
				[1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
				[1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
				[0, 51, 'Minus', 88, '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'],
				[0, 52, 'Equal', 86, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
				[0, 53, 'BracketLeft', 92, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
				[0, 54, 'BracketRight', 94, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
				[0, 55, 'Backslash', 93, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
				[0, 56, 'IntlHash', 0, e, 0, e, e, e],
				[0, 57, 'Semicolon', 85, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
				[0, 58, 'Quote', 95, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
				[0, 59, 'Backquote', 91, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
				[0, 60, 'Comma', 87, ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'],
				[0, 61, 'Period', 89, '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'],
				[0, 62, 'Slash', 90, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
				[1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
				[1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
				[1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
				[1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
				[1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
				[1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
				[1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
				[1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
				[1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
				[1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
				[1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
				[1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
				[1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
				[1, 76, 'PrintScreen', 0, e, 0, e, e, e],
				[1, 77, 'ScrollLock', 84, 'ScrollLock', 145, 'VK_SCROLL', e, e],
				[1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
				[1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
				[1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
				[1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
				[1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
				[1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
				[1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
				[1, 85, 'ArrowRight', 17, 'RightArrow', 39, 'VK_RIGHT', 'Right', e],
				[1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
				[1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
				[1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
				[1, 89, 'NumLock', 83, 'NumLock', 144, 'VK_NUMLOCK', e, e],
				[1, 90, 'NumpadDivide', 113, 'NumPad_Divide', 111, 'VK_DIVIDE', e, e],
				[1, 91, 'NumpadMultiply', 108, 'NumPad_Multiply', 106, 'VK_MULTIPLY', e, e],
				[1, 92, 'NumpadSubtract', 111, 'NumPad_Subtract', 109, 'VK_SUBTRACT', e, e],
				[1, 93, 'NumpadAdd', 109, 'NumPad_Add', 107, 'VK_ADD', e, e],
				[1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
				[1, 95, 'Numpad1', 99, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
				[1, 96, 'Numpad2', 100, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
				[1, 97, 'Numpad3', 101, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
				[1, 98, 'Numpad4', 102, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
				[1, 99, 'Numpad5', 103, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
				[1, 100, 'Numpad6', 104, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
				[1, 101, 'Numpad7', 105, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
				[1, 102, 'Numpad8', 106, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
				[1, 103, 'Numpad9', 107, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
				[1, 104, 'Numpad0', 98, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
				[1, 105, 'NumpadDecimal', 112, 'NumPad_Decimal', 110, 'VK_DECIMAL', e, e],
				[0, 106, 'IntlBackslash', 97, 'OEM_102', 226, 'VK_OEM_102', e, e],
				[1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
				[1, 108, 'Power', 0, e, 0, e, e, e],
				[1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
				[1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
				[1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
				[1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
				[1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
				[1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
				[1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
				[1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
				[1, 117, 'F20', 78, 'F20', 131, 'VK_F20', e, e],
				[1, 118, 'F21', 79, 'F21', 132, 'VK_F21', e, e],
				[1, 119, 'F22', 80, 'F22', 133, 'VK_F22', e, e],
				[1, 120, 'F23', 81, 'F23', 134, 'VK_F23', e, e],
				[1, 121, 'F24', 82, 'F24', 135, 'VK_F24', e, e],
				[1, 122, 'Open', 0, e, 0, e, e, e],
				[1, 123, 'Help', 0, e, 0, e, e, e],
				[1, 124, 'Select', 0, e, 0, e, e, e],
				[1, 125, 'Again', 0, e, 0, e, e, e],
				[1, 126, 'Undo', 0, e, 0, e, e, e],
				[1, 127, 'Cut', 0, e, 0, e, e, e],
				[1, 128, 'Copy', 0, e, 0, e, e, e],
				[1, 129, 'Paste', 0, e, 0, e, e, e],
				[1, 130, 'Find', 0, e, 0, e, e, e],
				[1, 131, 'AudioVolumeMute', 117, 'AudioVolumeMute', 173, 'VK_VOLUME_MUTE', e, e],
				[1, 132, 'AudioVolumeUp', 118, 'AudioVolumeUp', 175, 'VK_VOLUME_UP', e, e],
				[1, 133, 'AudioVolumeDown', 119, 'AudioVolumeDown', 174, 'VK_VOLUME_DOWN', e, e],
				[1, 134, 'NumpadComma', 110, 'NumPad_Separator', 108, 'VK_SEPARATOR', e, e],
				[0, 135, 'IntlRo', 115, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
				[1, 136, 'KanaMode', 0, e, 0, e, e, e],
				[0, 137, 'IntlYen', 0, e, 0, e, e, e],
				[1, 138, 'Convert', 0, e, 0, e, e, e],
				[1, 139, 'NonConvert', 0, e, 0, e, e, e],
				[1, 140, 'Lang1', 0, e, 0, e, e, e],
				[1, 141, 'Lang2', 0, e, 0, e, e, e],
				[1, 142, 'Lang3', 0, e, 0, e, e, e],
				[1, 143, 'Lang4', 0, e, 0, e, e, e],
				[1, 144, 'Lang5', 0, e, 0, e, e, e],
				[1, 145, 'Abort', 0, e, 0, e, e, e],
				[1, 146, 'Props', 0, e, 0, e, e, e],
				[1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
				[1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
				[1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
				[1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
				[1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
				[1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
				[1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
				[1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
				[1, 155, 'NumpadClear', 131, 'Clear', 12, 'VK_CLEAR', e, e],
				[1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
				[1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
				[1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
				[1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
				[1, 0, e, 57, 'Meta', 91, 'VK_COMMAND', e, e],
				[1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
				[1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
				[1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
				[1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
				[1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
				[1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
				[1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
				[1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
				[1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
				[1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
				[1, 167, 'MediaPlay', 0, e, 0, e, e, e],
				[1, 168, 'MediaRecord', 0, e, 0, e, e, e],
				[1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
				[1, 170, 'MediaRewind', 0, e, 0, e, e, e],
				[1, 171, 'MediaTrackNext', 124, 'MediaTrackNext', 176, 'VK_MEDIA_NEXT_TRACK', e, e],
				[1, 172, 'MediaTrackPrevious', 125, 'MediaTrackPrevious', 177, 'VK_MEDIA_PREV_TRACK', e, e],
				[1, 173, 'MediaStop', 126, 'MediaStop', 178, 'VK_MEDIA_STOP', e, e],
				[1, 174, 'Eject', 0, e, 0, e, e, e],
				[1, 175, 'MediaPlayPause', 127, 'MediaPlayPause', 179, 'VK_MEDIA_PLAY_PAUSE', e, e],
				[
					1,
					176,
					'MediaSelect',
					128,
					'LaunchMediaPlayer',
					181,
					'VK_MEDIA_LAUNCH_MEDIA_SELECT',
					e,
					e
				],
				[1, 177, 'LaunchMail', 129, 'LaunchMail', 180, 'VK_MEDIA_LAUNCH_MAIL', e, e],
				[1, 178, 'LaunchApp2', 130, 'LaunchApp2', 183, 'VK_MEDIA_LAUNCH_APP2', e, e],
				[1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
				[1, 180, 'SelectTask', 0, e, 0, e, e, e],
				[1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
				[1, 182, 'BrowserSearch', 120, 'BrowserSearch', 170, 'VK_BROWSER_SEARCH', e, e],
				[1, 183, 'BrowserHome', 121, 'BrowserHome', 172, 'VK_BROWSER_HOME', e, e],
				[1, 184, 'BrowserBack', 122, 'BrowserBack', 166, 'VK_BROWSER_BACK', e, e],
				[1, 185, 'BrowserForward', 123, 'BrowserForward', 167, 'VK_BROWSER_FORWARD', e, e],
				[1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
				[1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
				[1, 188, 'BrowserFavorites', 0, e, 0, 'VK_BROWSER_FAVORITES', e, e],
				[1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
				[1, 190, 'MailReply', 0, e, 0, e, e, e],
				[1, 191, 'MailForward', 0, e, 0, e, e, e],
				[1, 192, 'MailSend', 0, e, 0, e, e, e],
				[1, 0, e, 114, 'KeyInComposition', 229, e, e, e],
				[1, 0, e, 116, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
				[1, 0, e, 96, 'OEM_8', 223, 'VK_OEM_8', e, e],
				[1, 0, e, 0, e, 0, 'VK_KANA', e, e],
				[1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
				[1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
				[1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
				[1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
				[1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
				[1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
				[1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
				[1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
				[1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
				[1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
				[1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
				[1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
				[1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
				[1, 0, e, 0, e, 0, 'VK_HELP', e, e],
				[1, 0, e, 0, e, 0, 'VK_APPS', e, e],
				[1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
				[1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
				[1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
				[1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
				[1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
				[1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
				[1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
				[1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
				[1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
				[1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
				[1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
				[1, 0, e, 0, e, 0, 'VK_PA1', e, e],
				[1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e]
			],
			n = [],
			r = []
		for (let i of t) {
			let [s, o, a, u, l, c, d, h, m] = i
			if (
				(r[o] ||
					((r[o] = !0),
					(c5[o] = a),
					(f5[a] = o),
					(d5[a.toLowerCase()] = o),
					s &&
						((md[o] = u),
						u !== 0 && u !== 3 && u !== 5 && u !== 4 && u !== 6 && u !== 57 && (Ol[u] = o))),
				!n[u])
			) {
				if (((n[u] = !0), !l))
					throw new Error(`String representation missing for key code ${u} around scan code ${a}`)
				Yo.define(u, l), Rl.define(u, h || l), kl.define(u, m || h || l)
			}
			c && (u5[c] = u), d && (l5[d] = u)
		}
		Ol[3] = 46
	})()
	var hd
	;(function (e) {
		function t(a) {
			return Yo.keyCodeToStr(a)
		}
		e.toString = t
		function n(a) {
			return Yo.strToKeyCode(a)
		}
		e.fromString = n
		function r(a) {
			return Rl.keyCodeToStr(a)
		}
		e.toUserSettingsUS = r
		function i(a) {
			return kl.keyCodeToStr(a)
		}
		e.toUserSettingsGeneral = i
		function s(a) {
			return Rl.strToKeyCode(a) || kl.strToKeyCode(a)
		}
		e.fromUserSettings = s
		function o(a) {
			if (a >= 98 && a <= 113) return null
			switch (a) {
				case 16:
					return 'Up'
				case 18:
					return 'Down'
				case 15:
					return 'Left'
				case 17:
					return 'Right'
			}
			return Yo.keyCodeToStr(a)
		}
		e.toElectronAccelerator = o
	})(hd || (hd = {}))
	function gd(e, t) {
		let n = ((t & 65535) << 16) >>> 0
		return (e | n) >>> 0
	}
	var Jo = class e extends oe {
		constructor(t, n, r, i) {
			super(t, n, r, i),
				(this.selectionStartLineNumber = t),
				(this.selectionStartColumn = n),
				(this.positionLineNumber = r),
				(this.positionColumn = i)
		}
		toString() {
			return (
				'[' +
				this.selectionStartLineNumber +
				',' +
				this.selectionStartColumn +
				' -> ' +
				this.positionLineNumber +
				',' +
				this.positionColumn +
				']'
			)
		}
		equalsSelection(t) {
			return e.selectionsEqual(this, t)
		}
		static selectionsEqual(t, n) {
			return (
				t.selectionStartLineNumber === n.selectionStartLineNumber &&
				t.selectionStartColumn === n.selectionStartColumn &&
				t.positionLineNumber === n.positionLineNumber &&
				t.positionColumn === n.positionColumn
			)
		}
		getDirection() {
			return this.selectionStartLineNumber === this.startLineNumber &&
				this.selectionStartColumn === this.startColumn
				? 0
				: 1
		}
		setEndPosition(t, n) {
			return this.getDirection() === 0
				? new e(this.startLineNumber, this.startColumn, t, n)
				: new e(t, n, this.startLineNumber, this.startColumn)
		}
		getPosition() {
			return new Se(this.positionLineNumber, this.positionColumn)
		}
		getSelectionStart() {
			return new Se(this.selectionStartLineNumber, this.selectionStartColumn)
		}
		setStartPosition(t, n) {
			return this.getDirection() === 0
				? new e(t, n, this.endLineNumber, this.endColumn)
				: new e(this.endLineNumber, this.endColumn, t, n)
		}
		static fromPositions(t, n = t) {
			return new e(t.lineNumber, t.column, n.lineNumber, n.column)
		}
		static fromRange(t, n) {
			return n === 0
				? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn)
				: new e(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn)
		}
		static liftSelection(t) {
			return new e(
				t.selectionStartLineNumber,
				t.selectionStartColumn,
				t.positionLineNumber,
				t.positionColumn
			)
		}
		static selectionsArrEqual(t, n) {
			if ((t && !n) || (!t && n)) return !1
			if (!t && !n) return !0
			if (t.length !== n.length) return !1
			for (let r = 0, i = t.length; r < i; r++) if (!this.selectionsEqual(t[r], n[r])) return !1
			return !0
		}
		static isISelection(t) {
			return (
				t &&
				typeof t.selectionStartLineNumber == 'number' &&
				typeof t.selectionStartColumn == 'number' &&
				typeof t.positionLineNumber == 'number' &&
				typeof t.positionColumn == 'number'
			)
		}
		static createWithDirection(t, n, r, i, s) {
			return s === 0 ? new e(t, n, r, i) : new e(r, i, t, n)
		}
	}
	function Dd(e) {
		return typeof e == 'string'
	}
	var vd = Object.create(null)
	function p(e, t) {
		if (Dd(t)) {
			let n = vd[t]
			if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`)
			t = n
		}
		return (vd[e] = t), { id: e }
	}
	var bd = {
		add: p('add', 6e4),
		plus: p('plus', 6e4),
		gistNew: p('gist-new', 6e4),
		repoCreate: p('repo-create', 6e4),
		lightbulb: p('lightbulb', 60001),
		lightBulb: p('light-bulb', 60001),
		repo: p('repo', 60002),
		repoDelete: p('repo-delete', 60002),
		gistFork: p('gist-fork', 60003),
		repoForked: p('repo-forked', 60003),
		gitPullRequest: p('git-pull-request', 60004),
		gitPullRequestAbandoned: p('git-pull-request-abandoned', 60004),
		recordKeys: p('record-keys', 60005),
		keyboard: p('keyboard', 60005),
		tag: p('tag', 60006),
		gitPullRequestLabel: p('git-pull-request-label', 60006),
		tagAdd: p('tag-add', 60006),
		tagRemove: p('tag-remove', 60006),
		person: p('person', 60007),
		personFollow: p('person-follow', 60007),
		personOutline: p('person-outline', 60007),
		personFilled: p('person-filled', 60007),
		gitBranch: p('git-branch', 60008),
		gitBranchCreate: p('git-branch-create', 60008),
		gitBranchDelete: p('git-branch-delete', 60008),
		sourceControl: p('source-control', 60008),
		mirror: p('mirror', 60009),
		mirrorPublic: p('mirror-public', 60009),
		star: p('star', 60010),
		starAdd: p('star-add', 60010),
		starDelete: p('star-delete', 60010),
		starEmpty: p('star-empty', 60010),
		comment: p('comment', 60011),
		commentAdd: p('comment-add', 60011),
		alert: p('alert', 60012),
		warning: p('warning', 60012),
		search: p('search', 60013),
		searchSave: p('search-save', 60013),
		logOut: p('log-out', 60014),
		signOut: p('sign-out', 60014),
		logIn: p('log-in', 60015),
		signIn: p('sign-in', 60015),
		eye: p('eye', 60016),
		eyeUnwatch: p('eye-unwatch', 60016),
		eyeWatch: p('eye-watch', 60016),
		circleFilled: p('circle-filled', 60017),
		primitiveDot: p('primitive-dot', 60017),
		closeDirty: p('close-dirty', 60017),
		debugBreakpoint: p('debug-breakpoint', 60017),
		debugBreakpointDisabled: p('debug-breakpoint-disabled', 60017),
		debugHint: p('debug-hint', 60017),
		terminalDecorationSuccess: p('terminal-decoration-success', 60017),
		primitiveSquare: p('primitive-square', 60018),
		edit: p('edit', 60019),
		pencil: p('pencil', 60019),
		info: p('info', 60020),
		issueOpened: p('issue-opened', 60020),
		gistPrivate: p('gist-private', 60021),
		gitForkPrivate: p('git-fork-private', 60021),
		lock: p('lock', 60021),
		mirrorPrivate: p('mirror-private', 60021),
		close: p('close', 60022),
		removeClose: p('remove-close', 60022),
		x: p('x', 60022),
		repoSync: p('repo-sync', 60023),
		sync: p('sync', 60023),
		clone: p('clone', 60024),
		desktopDownload: p('desktop-download', 60024),
		beaker: p('beaker', 60025),
		microscope: p('microscope', 60025),
		vm: p('vm', 60026),
		deviceDesktop: p('device-desktop', 60026),
		file: p('file', 60027),
		fileText: p('file-text', 60027),
		more: p('more', 60028),
		ellipsis: p('ellipsis', 60028),
		kebabHorizontal: p('kebab-horizontal', 60028),
		mailReply: p('mail-reply', 60029),
		reply: p('reply', 60029),
		organization: p('organization', 60030),
		organizationFilled: p('organization-filled', 60030),
		organizationOutline: p('organization-outline', 60030),
		newFile: p('new-file', 60031),
		fileAdd: p('file-add', 60031),
		newFolder: p('new-folder', 60032),
		fileDirectoryCreate: p('file-directory-create', 60032),
		trash: p('trash', 60033),
		trashcan: p('trashcan', 60033),
		history: p('history', 60034),
		clock: p('clock', 60034),
		folder: p('folder', 60035),
		fileDirectory: p('file-directory', 60035),
		symbolFolder: p('symbol-folder', 60035),
		logoGithub: p('logo-github', 60036),
		markGithub: p('mark-github', 60036),
		github: p('github', 60036),
		terminal: p('terminal', 60037),
		console: p('console', 60037),
		repl: p('repl', 60037),
		zap: p('zap', 60038),
		symbolEvent: p('symbol-event', 60038),
		error: p('error', 60039),
		stop: p('stop', 60039),
		variable: p('variable', 60040),
		symbolVariable: p('symbol-variable', 60040),
		array: p('array', 60042),
		symbolArray: p('symbol-array', 60042),
		symbolModule: p('symbol-module', 60043),
		symbolPackage: p('symbol-package', 60043),
		symbolNamespace: p('symbol-namespace', 60043),
		symbolObject: p('symbol-object', 60043),
		symbolMethod: p('symbol-method', 60044),
		symbolFunction: p('symbol-function', 60044),
		symbolConstructor: p('symbol-constructor', 60044),
		symbolBoolean: p('symbol-boolean', 60047),
		symbolNull: p('symbol-null', 60047),
		symbolNumeric: p('symbol-numeric', 60048),
		symbolNumber: p('symbol-number', 60048),
		symbolStructure: p('symbol-structure', 60049),
		symbolStruct: p('symbol-struct', 60049),
		symbolParameter: p('symbol-parameter', 60050),
		symbolTypeParameter: p('symbol-type-parameter', 60050),
		symbolKey: p('symbol-key', 60051),
		symbolText: p('symbol-text', 60051),
		symbolReference: p('symbol-reference', 60052),
		goToFile: p('go-to-file', 60052),
		symbolEnum: p('symbol-enum', 60053),
		symbolValue: p('symbol-value', 60053),
		symbolRuler: p('symbol-ruler', 60054),
		symbolUnit: p('symbol-unit', 60054),
		activateBreakpoints: p('activate-breakpoints', 60055),
		archive: p('archive', 60056),
		arrowBoth: p('arrow-both', 60057),
		arrowDown: p('arrow-down', 60058),
		arrowLeft: p('arrow-left', 60059),
		arrowRight: p('arrow-right', 60060),
		arrowSmallDown: p('arrow-small-down', 60061),
		arrowSmallLeft: p('arrow-small-left', 60062),
		arrowSmallRight: p('arrow-small-right', 60063),
		arrowSmallUp: p('arrow-small-up', 60064),
		arrowUp: p('arrow-up', 60065),
		bell: p('bell', 60066),
		bold: p('bold', 60067),
		book: p('book', 60068),
		bookmark: p('bookmark', 60069),
		debugBreakpointConditionalUnverified: p('debug-breakpoint-conditional-unverified', 60070),
		debugBreakpointConditional: p('debug-breakpoint-conditional', 60071),
		debugBreakpointConditionalDisabled: p('debug-breakpoint-conditional-disabled', 60071),
		debugBreakpointDataUnverified: p('debug-breakpoint-data-unverified', 60072),
		debugBreakpointData: p('debug-breakpoint-data', 60073),
		debugBreakpointDataDisabled: p('debug-breakpoint-data-disabled', 60073),
		debugBreakpointLogUnverified: p('debug-breakpoint-log-unverified', 60074),
		debugBreakpointLog: p('debug-breakpoint-log', 60075),
		debugBreakpointLogDisabled: p('debug-breakpoint-log-disabled', 60075),
		briefcase: p('briefcase', 60076),
		broadcast: p('broadcast', 60077),
		browser: p('browser', 60078),
		bug: p('bug', 60079),
		calendar: p('calendar', 60080),
		caseSensitive: p('case-sensitive', 60081),
		check: p('check', 60082),
		checklist: p('checklist', 60083),
		chevronDown: p('chevron-down', 60084),
		chevronLeft: p('chevron-left', 60085),
		chevronRight: p('chevron-right', 60086),
		chevronUp: p('chevron-up', 60087),
		chromeClose: p('chrome-close', 60088),
		chromeMaximize: p('chrome-maximize', 60089),
		chromeMinimize: p('chrome-minimize', 60090),
		chromeRestore: p('chrome-restore', 60091),
		circleOutline: p('circle-outline', 60092),
		circle: p('circle', 60092),
		debugBreakpointUnverified: p('debug-breakpoint-unverified', 60092),
		terminalDecorationIncomplete: p('terminal-decoration-incomplete', 60092),
		circleSlash: p('circle-slash', 60093),
		circuitBoard: p('circuit-board', 60094),
		clearAll: p('clear-all', 60095),
		clippy: p('clippy', 60096),
		closeAll: p('close-all', 60097),
		cloudDownload: p('cloud-download', 60098),
		cloudUpload: p('cloud-upload', 60099),
		code: p('code', 60100),
		collapseAll: p('collapse-all', 60101),
		colorMode: p('color-mode', 60102),
		commentDiscussion: p('comment-discussion', 60103),
		creditCard: p('credit-card', 60105),
		dash: p('dash', 60108),
		dashboard: p('dashboard', 60109),
		database: p('database', 60110),
		debugContinue: p('debug-continue', 60111),
		debugDisconnect: p('debug-disconnect', 60112),
		debugPause: p('debug-pause', 60113),
		debugRestart: p('debug-restart', 60114),
		debugStart: p('debug-start', 60115),
		debugStepInto: p('debug-step-into', 60116),
		debugStepOut: p('debug-step-out', 60117),
		debugStepOver: p('debug-step-over', 60118),
		debugStop: p('debug-stop', 60119),
		debug: p('debug', 60120),
		deviceCameraVideo: p('device-camera-video', 60121),
		deviceCamera: p('device-camera', 60122),
		deviceMobile: p('device-mobile', 60123),
		diffAdded: p('diff-added', 60124),
		diffIgnored: p('diff-ignored', 60125),
		diffModified: p('diff-modified', 60126),
		diffRemoved: p('diff-removed', 60127),
		diffRenamed: p('diff-renamed', 60128),
		diff: p('diff', 60129),
		diffSidebyside: p('diff-sidebyside', 60129),
		discard: p('discard', 60130),
		editorLayout: p('editor-layout', 60131),
		emptyWindow: p('empty-window', 60132),
		exclude: p('exclude', 60133),
		extensions: p('extensions', 60134),
		eyeClosed: p('eye-closed', 60135),
		fileBinary: p('file-binary', 60136),
		fileCode: p('file-code', 60137),
		fileMedia: p('file-media', 60138),
		filePdf: p('file-pdf', 60139),
		fileSubmodule: p('file-submodule', 60140),
		fileSymlinkDirectory: p('file-symlink-directory', 60141),
		fileSymlinkFile: p('file-symlink-file', 60142),
		fileZip: p('file-zip', 60143),
		files: p('files', 60144),
		filter: p('filter', 60145),
		flame: p('flame', 60146),
		foldDown: p('fold-down', 60147),
		foldUp: p('fold-up', 60148),
		fold: p('fold', 60149),
		folderActive: p('folder-active', 60150),
		folderOpened: p('folder-opened', 60151),
		gear: p('gear', 60152),
		gift: p('gift', 60153),
		gistSecret: p('gist-secret', 60154),
		gist: p('gist', 60155),
		gitCommit: p('git-commit', 60156),
		gitCompare: p('git-compare', 60157),
		compareChanges: p('compare-changes', 60157),
		gitMerge: p('git-merge', 60158),
		githubAction: p('github-action', 60159),
		githubAlt: p('github-alt', 60160),
		globe: p('globe', 60161),
		grabber: p('grabber', 60162),
		graph: p('graph', 60163),
		gripper: p('gripper', 60164),
		heart: p('heart', 60165),
		home: p('home', 60166),
		horizontalRule: p('horizontal-rule', 60167),
		hubot: p('hubot', 60168),
		inbox: p('inbox', 60169),
		issueReopened: p('issue-reopened', 60171),
		issues: p('issues', 60172),
		italic: p('italic', 60173),
		jersey: p('jersey', 60174),
		json: p('json', 60175),
		kebabVertical: p('kebab-vertical', 60176),
		key: p('key', 60177),
		law: p('law', 60178),
		lightbulbAutofix: p('lightbulb-autofix', 60179),
		linkExternal: p('link-external', 60180),
		link: p('link', 60181),
		listOrdered: p('list-ordered', 60182),
		listUnordered: p('list-unordered', 60183),
		liveShare: p('live-share', 60184),
		loading: p('loading', 60185),
		location: p('location', 60186),
		mailRead: p('mail-read', 60187),
		mail: p('mail', 60188),
		markdown: p('markdown', 60189),
		megaphone: p('megaphone', 60190),
		mention: p('mention', 60191),
		milestone: p('milestone', 60192),
		gitPullRequestMilestone: p('git-pull-request-milestone', 60192),
		mortarBoard: p('mortar-board', 60193),
		move: p('move', 60194),
		multipleWindows: p('multiple-windows', 60195),
		mute: p('mute', 60196),
		noNewline: p('no-newline', 60197),
		note: p('note', 60198),
		octoface: p('octoface', 60199),
		openPreview: p('open-preview', 60200),
		package: p('package', 60201),
		paintcan: p('paintcan', 60202),
		pin: p('pin', 60203),
		play: p('play', 60204),
		run: p('run', 60204),
		plug: p('plug', 60205),
		preserveCase: p('preserve-case', 60206),
		preview: p('preview', 60207),
		project: p('project', 60208),
		pulse: p('pulse', 60209),
		question: p('question', 60210),
		quote: p('quote', 60211),
		radioTower: p('radio-tower', 60212),
		reactions: p('reactions', 60213),
		references: p('references', 60214),
		refresh: p('refresh', 60215),
		regex: p('regex', 60216),
		remoteExplorer: p('remote-explorer', 60217),
		remote: p('remote', 60218),
		remove: p('remove', 60219),
		replaceAll: p('replace-all', 60220),
		replace: p('replace', 60221),
		repoClone: p('repo-clone', 60222),
		repoForcePush: p('repo-force-push', 60223),
		repoPull: p('repo-pull', 60224),
		repoPush: p('repo-push', 60225),
		report: p('report', 60226),
		requestChanges: p('request-changes', 60227),
		rocket: p('rocket', 60228),
		rootFolderOpened: p('root-folder-opened', 60229),
		rootFolder: p('root-folder', 60230),
		rss: p('rss', 60231),
		ruby: p('ruby', 60232),
		saveAll: p('save-all', 60233),
		saveAs: p('save-as', 60234),
		save: p('save', 60235),
		screenFull: p('screen-full', 60236),
		screenNormal: p('screen-normal', 60237),
		searchStop: p('search-stop', 60238),
		server: p('server', 60240),
		settingsGear: p('settings-gear', 60241),
		settings: p('settings', 60242),
		shield: p('shield', 60243),
		smiley: p('smiley', 60244),
		sortPrecedence: p('sort-precedence', 60245),
		splitHorizontal: p('split-horizontal', 60246),
		splitVertical: p('split-vertical', 60247),
		squirrel: p('squirrel', 60248),
		starFull: p('star-full', 60249),
		starHalf: p('star-half', 60250),
		symbolClass: p('symbol-class', 60251),
		symbolColor: p('symbol-color', 60252),
		symbolConstant: p('symbol-constant', 60253),
		symbolEnumMember: p('symbol-enum-member', 60254),
		symbolField: p('symbol-field', 60255),
		symbolFile: p('symbol-file', 60256),
		symbolInterface: p('symbol-interface', 60257),
		symbolKeyword: p('symbol-keyword', 60258),
		symbolMisc: p('symbol-misc', 60259),
		symbolOperator: p('symbol-operator', 60260),
		symbolProperty: p('symbol-property', 60261),
		wrench: p('wrench', 60261),
		wrenchSubaction: p('wrench-subaction', 60261),
		symbolSnippet: p('symbol-snippet', 60262),
		tasklist: p('tasklist', 60263),
		telescope: p('telescope', 60264),
		textSize: p('text-size', 60265),
		threeBars: p('three-bars', 60266),
		thumbsdown: p('thumbsdown', 60267),
		thumbsup: p('thumbsup', 60268),
		tools: p('tools', 60269),
		triangleDown: p('triangle-down', 60270),
		triangleLeft: p('triangle-left', 60271),
		triangleRight: p('triangle-right', 60272),
		triangleUp: p('triangle-up', 60273),
		twitter: p('twitter', 60274),
		unfold: p('unfold', 60275),
		unlock: p('unlock', 60276),
		unmute: p('unmute', 60277),
		unverified: p('unverified', 60278),
		verified: p('verified', 60279),
		versions: p('versions', 60280),
		vmActive: p('vm-active', 60281),
		vmOutline: p('vm-outline', 60282),
		vmRunning: p('vm-running', 60283),
		watch: p('watch', 60284),
		whitespace: p('whitespace', 60285),
		wholeWord: p('whole-word', 60286),
		window: p('window', 60287),
		wordWrap: p('word-wrap', 60288),
		zoomIn: p('zoom-in', 60289),
		zoomOut: p('zoom-out', 60290),
		listFilter: p('list-filter', 60291),
		listFlat: p('list-flat', 60292),
		listSelection: p('list-selection', 60293),
		selection: p('selection', 60293),
		listTree: p('list-tree', 60294),
		debugBreakpointFunctionUnverified: p('debug-breakpoint-function-unverified', 60295),
		debugBreakpointFunction: p('debug-breakpoint-function', 60296),
		debugBreakpointFunctionDisabled: p('debug-breakpoint-function-disabled', 60296),
		debugStackframeActive: p('debug-stackframe-active', 60297),
		circleSmallFilled: p('circle-small-filled', 60298),
		debugStackframeDot: p('debug-stackframe-dot', 60298),
		terminalDecorationMark: p('terminal-decoration-mark', 60298),
		debugStackframe: p('debug-stackframe', 60299),
		debugStackframeFocused: p('debug-stackframe-focused', 60299),
		debugBreakpointUnsupported: p('debug-breakpoint-unsupported', 60300),
		symbolString: p('symbol-string', 60301),
		debugReverseContinue: p('debug-reverse-continue', 60302),
		debugStepBack: p('debug-step-back', 60303),
		debugRestartFrame: p('debug-restart-frame', 60304),
		debugAlt: p('debug-alt', 60305),
		callIncoming: p('call-incoming', 60306),
		callOutgoing: p('call-outgoing', 60307),
		menu: p('menu', 60308),
		expandAll: p('expand-all', 60309),
		feedback: p('feedback', 60310),
		gitPullRequestReviewer: p('git-pull-request-reviewer', 60310),
		groupByRefType: p('group-by-ref-type', 60311),
		ungroupByRefType: p('ungroup-by-ref-type', 60312),
		account: p('account', 60313),
		gitPullRequestAssignee: p('git-pull-request-assignee', 60313),
		bellDot: p('bell-dot', 60314),
		debugConsole: p('debug-console', 60315),
		library: p('library', 60316),
		output: p('output', 60317),
		runAll: p('run-all', 60318),
		syncIgnored: p('sync-ignored', 60319),
		pinned: p('pinned', 60320),
		githubInverted: p('github-inverted', 60321),
		serverProcess: p('server-process', 60322),
		serverEnvironment: p('server-environment', 60323),
		pass: p('pass', 60324),
		issueClosed: p('issue-closed', 60324),
		stopCircle: p('stop-circle', 60325),
		playCircle: p('play-circle', 60326),
		record: p('record', 60327),
		debugAltSmall: p('debug-alt-small', 60328),
		vmConnect: p('vm-connect', 60329),
		cloud: p('cloud', 60330),
		merge: p('merge', 60331),
		export: p('export', 60332),
		graphLeft: p('graph-left', 60333),
		magnet: p('magnet', 60334),
		notebook: p('notebook', 60335),
		redo: p('redo', 60336),
		checkAll: p('check-all', 60337),
		pinnedDirty: p('pinned-dirty', 60338),
		passFilled: p('pass-filled', 60339),
		circleLargeFilled: p('circle-large-filled', 60340),
		circleLarge: p('circle-large', 60341),
		circleLargeOutline: p('circle-large-outline', 60341),
		combine: p('combine', 60342),
		gather: p('gather', 60342),
		table: p('table', 60343),
		variableGroup: p('variable-group', 60344),
		typeHierarchy: p('type-hierarchy', 60345),
		typeHierarchySub: p('type-hierarchy-sub', 60346),
		typeHierarchySuper: p('type-hierarchy-super', 60347),
		gitPullRequestCreate: p('git-pull-request-create', 60348),
		runAbove: p('run-above', 60349),
		runBelow: p('run-below', 60350),
		notebookTemplate: p('notebook-template', 60351),
		debugRerun: p('debug-rerun', 60352),
		workspaceTrusted: p('workspace-trusted', 60353),
		workspaceUntrusted: p('workspace-untrusted', 60354),
		workspaceUnknown: p('workspace-unknown', 60355),
		terminalCmd: p('terminal-cmd', 60356),
		terminalDebian: p('terminal-debian', 60357),
		terminalLinux: p('terminal-linux', 60358),
		terminalPowershell: p('terminal-powershell', 60359),
		terminalTmux: p('terminal-tmux', 60360),
		terminalUbuntu: p('terminal-ubuntu', 60361),
		terminalBash: p('terminal-bash', 60362),
		arrowSwap: p('arrow-swap', 60363),
		copy: p('copy', 60364),
		personAdd: p('person-add', 60365),
		filterFilled: p('filter-filled', 60366),
		wand: p('wand', 60367),
		debugLineByLine: p('debug-line-by-line', 60368),
		inspect: p('inspect', 60369),
		layers: p('layers', 60370),
		layersDot: p('layers-dot', 60371),
		layersActive: p('layers-active', 60372),
		compass: p('compass', 60373),
		compassDot: p('compass-dot', 60374),
		compassActive: p('compass-active', 60375),
		azure: p('azure', 60376),
		issueDraft: p('issue-draft', 60377),
		gitPullRequestClosed: p('git-pull-request-closed', 60378),
		gitPullRequestDraft: p('git-pull-request-draft', 60379),
		debugAll: p('debug-all', 60380),
		debugCoverage: p('debug-coverage', 60381),
		runErrors: p('run-errors', 60382),
		folderLibrary: p('folder-library', 60383),
		debugContinueSmall: p('debug-continue-small', 60384),
		beakerStop: p('beaker-stop', 60385),
		graphLine: p('graph-line', 60386),
		graphScatter: p('graph-scatter', 60387),
		pieChart: p('pie-chart', 60388),
		bracket: p('bracket', 60175),
		bracketDot: p('bracket-dot', 60389),
		bracketError: p('bracket-error', 60390),
		lockSmall: p('lock-small', 60391),
		azureDevops: p('azure-devops', 60392),
		verifiedFilled: p('verified-filled', 60393),
		newline: p('newline', 60394),
		layout: p('layout', 60395),
		layoutActivitybarLeft: p('layout-activitybar-left', 60396),
		layoutActivitybarRight: p('layout-activitybar-right', 60397),
		layoutPanelLeft: p('layout-panel-left', 60398),
		layoutPanelCenter: p('layout-panel-center', 60399),
		layoutPanelJustify: p('layout-panel-justify', 60400),
		layoutPanelRight: p('layout-panel-right', 60401),
		layoutPanel: p('layout-panel', 60402),
		layoutSidebarLeft: p('layout-sidebar-left', 60403),
		layoutSidebarRight: p('layout-sidebar-right', 60404),
		layoutStatusbar: p('layout-statusbar', 60405),
		layoutMenubar: p('layout-menubar', 60406),
		layoutCentered: p('layout-centered', 60407),
		target: p('target', 60408),
		indent: p('indent', 60409),
		recordSmall: p('record-small', 60410),
		errorSmall: p('error-small', 60411),
		terminalDecorationError: p('terminal-decoration-error', 60411),
		arrowCircleDown: p('arrow-circle-down', 60412),
		arrowCircleLeft: p('arrow-circle-left', 60413),
		arrowCircleRight: p('arrow-circle-right', 60414),
		arrowCircleUp: p('arrow-circle-up', 60415),
		layoutSidebarRightOff: p('layout-sidebar-right-off', 60416),
		layoutPanelOff: p('layout-panel-off', 60417),
		layoutSidebarLeftOff: p('layout-sidebar-left-off', 60418),
		blank: p('blank', 60419),
		heartFilled: p('heart-filled', 60420),
		map: p('map', 60421),
		mapHorizontal: p('map-horizontal', 60421),
		foldHorizontal: p('fold-horizontal', 60421),
		mapFilled: p('map-filled', 60422),
		mapHorizontalFilled: p('map-horizontal-filled', 60422),
		foldHorizontalFilled: p('fold-horizontal-filled', 60422),
		circleSmall: p('circle-small', 60423),
		bellSlash: p('bell-slash', 60424),
		bellSlashDot: p('bell-slash-dot', 60425),
		commentUnresolved: p('comment-unresolved', 60426),
		gitPullRequestGoToChanges: p('git-pull-request-go-to-changes', 60427),
		gitPullRequestNewChanges: p('git-pull-request-new-changes', 60428),
		searchFuzzy: p('search-fuzzy', 60429),
		commentDraft: p('comment-draft', 60430),
		send: p('send', 60431),
		sparkle: p('sparkle', 60432),
		insert: p('insert', 60433),
		mic: p('mic', 60434),
		thumbsdownFilled: p('thumbsdown-filled', 60435),
		thumbsupFilled: p('thumbsup-filled', 60436),
		coffee: p('coffee', 60437),
		snake: p('snake', 60438),
		game: p('game', 60439),
		vr: p('vr', 60440),
		chip: p('chip', 60441),
		piano: p('piano', 60442),
		music: p('music', 60443),
		micFilled: p('mic-filled', 60444),
		repoFetch: p('repo-fetch', 60445),
		copilot: p('copilot', 60446),
		lightbulbSparkle: p('lightbulb-sparkle', 60447),
		robot: p('robot', 60448),
		sparkleFilled: p('sparkle-filled', 60449),
		diffSingle: p('diff-single', 60450),
		diffMultiple: p('diff-multiple', 60451),
		surroundWith: p('surround-with', 60452),
		share: p('share', 60453),
		gitStash: p('git-stash', 60454),
		gitStashApply: p('git-stash-apply', 60455),
		gitStashPop: p('git-stash-pop', 60456),
		vscode: p('vscode', 60457),
		vscodeInsiders: p('vscode-insiders', 60458),
		codeOss: p('code-oss', 60459),
		runCoverage: p('run-coverage', 60460),
		runAllCoverage: p('run-all-coverage', 60461),
		coverage: p('coverage', 60462),
		githubProject: p('github-project', 60463),
		mapVertical: p('map-vertical', 60464),
		foldVertical: p('fold-vertical', 60464),
		mapVerticalFilled: p('map-vertical-filled', 60465),
		foldVerticalFilled: p('fold-vertical-filled', 60465),
		goToSearch: p('go-to-search', 60466),
		percentage: p('percentage', 60467),
		sortPercentage: p('sort-percentage', 60467),
		attach: p('attach', 60468)
	}
	var p5 = {
			dialogError: p('dialog-error', 'error'),
			dialogWarning: p('dialog-warning', 'warning'),
			dialogInfo: p('dialog-info', 'info'),
			dialogClose: p('dialog-close', 'close'),
			treeItemExpanded: p('tree-item-expanded', 'chevron-down'),
			treeFilterOnTypeOn: p('tree-filter-on-type-on', 'list-filter'),
			treeFilterOnTypeOff: p('tree-filter-on-type-off', 'list-selection'),
			treeFilterClear: p('tree-filter-clear', 'close'),
			treeItemLoading: p('tree-item-loading', 'loading'),
			menuSelection: p('menu-selection', 'check'),
			menuSubmenu: p('menu-submenu', 'chevron-right'),
			menuBarMore: p('menubar-more', 'more'),
			scrollbarButtonLeft: p('scrollbar-button-left', 'triangle-left'),
			scrollbarButtonRight: p('scrollbar-button-right', 'triangle-right'),
			scrollbarButtonUp: p('scrollbar-button-up', 'triangle-up'),
			scrollbarButtonDown: p('scrollbar-button-down', 'triangle-down'),
			toolBarMore: p('toolbar-more', 'more'),
			quickInputBack: p('quick-input-back', 'arrow-left'),
			dropDownButton: p('drop-down-button', 60084),
			symbolCustomColor: p('symbol-customcolor', 60252),
			exportIcon: p('export', 60332),
			workspaceUnspecified: p('workspace-unspecified', 60355),
			newLine: p('newline', 60394),
			thumbsDownFilled: p('thumbsdown-filled', 60435),
			thumbsUpFilled: p('thumbsup-filled', 60436),
			gitFetch: p('git-fetch', 60445),
			lightbulbSparkleAutofix: p('lightbulb-sparkle-autofix', 60447),
			debugBreakpointPending: p('debug-breakpoint-pending', 60377)
		},
		re = { ...bd, ...p5 }
	var Fs = class {
			constructor() {
				;(this._tokenizationSupports = new Map()),
					(this._factories = new Map()),
					(this._onDidChange = new lt()),
					(this.onDidChange = this._onDidChange.event),
					(this._colorMap = null)
			}
			handleChange(t) {
				this._onDidChange.fire({ changedLanguages: t, changedColorMap: !1 })
			}
			register(t, n) {
				return (
					this._tokenizationSupports.set(t, n),
					this.handleChange([t]),
					Zn(() => {
						this._tokenizationSupports.get(t) === n &&
							(this._tokenizationSupports.delete(t), this.handleChange([t]))
					})
				)
			}
			get(t) {
				return this._tokenizationSupports.get(t) || null
			}
			registerFactory(t, n) {
				this._factories.get(t)?.dispose()
				let r = new Ml(this, t, n)
				return (
					this._factories.set(t, r),
					Zn(() => {
						let i = this._factories.get(t)
						!i || i !== r || (this._factories.delete(t), i.dispose())
					})
				)
			}
			async getOrCreate(t) {
				let n = this.get(t)
				if (n) return n
				let r = this._factories.get(t)
				return !r || r.isResolved ? null : (await r.resolve(), this.get(t))
			}
			isResolved(t) {
				if (this.get(t)) return !0
				let r = this._factories.get(t)
				return !!(!r || r.isResolved)
			}
			setColorMap(t) {
				;(this._colorMap = t),
					this._onDidChange.fire({
						changedLanguages: Array.from(this._tokenizationSupports.keys()),
						changedColorMap: !0
					})
			}
			getColorMap() {
				return this._colorMap
			}
			getDefaultBackground() {
				return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null
			}
		},
		Ml = class extends Xt {
			get isResolved() {
				return this._isResolved
			}
			constructor(t, n, r) {
				super(),
					(this._registry = t),
					(this._languageId = n),
					(this._factory = r),
					(this._isDisposed = !1),
					(this._resolvePromise = null),
					(this._isResolved = !1)
			}
			dispose() {
				;(this._isDisposed = !0), super.dispose()
			}
			async resolve() {
				return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise
			}
			async _create() {
				let t = await this._factory.tokenizationSupport
				;(this._isResolved = !0),
					t && !this._isDisposed && this._register(this._registry.register(this._languageId, t))
			}
		}
	var Xo = class {
		constructor(t, n, r) {
			;(this.offset = t), (this.type = n), (this.language = r), (this._tokenBrand = void 0)
		}
		toString() {
			return '(' + this.offset + ', ' + this.type + ')'
		}
	}
	var Ed
	;(function (e) {
		;(e[(e.Increase = 0)] = 'Increase'), (e[(e.Decrease = 1)] = 'Decrease')
	})(Ed || (Ed = {}))
	var yd
	;(function (e) {
		let t = new Map()
		t.set(0, re.symbolMethod),
			t.set(1, re.symbolFunction),
			t.set(2, re.symbolConstructor),
			t.set(3, re.symbolField),
			t.set(4, re.symbolVariable),
			t.set(5, re.symbolClass),
			t.set(6, re.symbolStruct),
			t.set(7, re.symbolInterface),
			t.set(8, re.symbolModule),
			t.set(9, re.symbolProperty),
			t.set(10, re.symbolEvent),
			t.set(11, re.symbolOperator),
			t.set(12, re.symbolUnit),
			t.set(13, re.symbolValue),
			t.set(15, re.symbolEnum),
			t.set(14, re.symbolConstant),
			t.set(15, re.symbolEnum),
			t.set(16, re.symbolEnumMember),
			t.set(17, re.symbolKeyword),
			t.set(27, re.symbolSnippet),
			t.set(18, re.symbolText),
			t.set(19, re.symbolColor),
			t.set(20, re.symbolFile),
			t.set(21, re.symbolReference),
			t.set(22, re.symbolCustomColor),
			t.set(23, re.symbolFolder),
			t.set(24, re.symbolTypeParameter),
			t.set(25, re.account),
			t.set(26, re.issues)
		function n(s) {
			let o = t.get(s)
			return (
				o ||
					(console.info('No codicon found for CompletionItemKind ' + s), (o = re.symbolProperty)),
				o
			)
		}
		e.toIcon = n
		let r = new Map()
		r.set('method', 0),
			r.set('function', 1),
			r.set('constructor', 2),
			r.set('field', 3),
			r.set('variable', 4),
			r.set('class', 5),
			r.set('struct', 6),
			r.set('interface', 7),
			r.set('module', 8),
			r.set('property', 9),
			r.set('event', 10),
			r.set('operator', 11),
			r.set('unit', 12),
			r.set('value', 13),
			r.set('constant', 14),
			r.set('enum', 15),
			r.set('enum-member', 16),
			r.set('enumMember', 16),
			r.set('keyword', 17),
			r.set('snippet', 27),
			r.set('text', 18),
			r.set('color', 19),
			r.set('file', 20),
			r.set('reference', 21),
			r.set('customcolor', 22),
			r.set('folder', 23),
			r.set('type-parameter', 24),
			r.set('typeParameter', 24),
			r.set('account', 25),
			r.set('issue', 26)
		function i(s, o) {
			let a = r.get(s)
			return typeof a > 'u' && !o && (a = 9), a
		}
		e.fromString = i
	})(yd || (yd = {}))
	var xd
	;(function (e) {
		;(e[(e.Automatic = 0)] = 'Automatic'), (e[(e.Explicit = 1)] = 'Explicit')
	})(xd || (xd = {}))
	var _d
	;(function (e) {
		;(e[(e.Automatic = 0)] = 'Automatic'), (e[(e.PasteAs = 1)] = 'PasteAs')
	})(_d || (_d = {}))
	var Nd
	;(function (e) {
		;(e[(e.Invoke = 1)] = 'Invoke'),
			(e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
			(e[(e.ContentChange = 3)] = 'ContentChange')
	})(Nd || (Nd = {}))
	var Td
	;(function (e) {
		;(e[(e.Text = 0)] = 'Text'), (e[(e.Read = 1)] = 'Read'), (e[(e.Write = 2)] = 'Write')
	})(Td || (Td = {}))
	var _6 = {
		17: ke('Array', 'array'),
		16: ke('Boolean', 'boolean'),
		4: ke('Class', 'class'),
		13: ke('Constant', 'constant'),
		8: ke('Constructor', 'constructor'),
		9: ke('Enum', 'enumeration'),
		21: ke('EnumMember', 'enumeration member'),
		23: ke('Event', 'event'),
		7: ke('Field', 'field'),
		0: ke('File', 'file'),
		11: ke('Function', 'function'),
		10: ke('Interface', 'interface'),
		19: ke('Key', 'key'),
		5: ke('Method', 'method'),
		1: ke('Module', 'module'),
		2: ke('Namespace', 'namespace'),
		20: ke('Null', 'null'),
		15: ke('Number', 'number'),
		18: ke('Object', 'object'),
		24: ke('Operator', 'operator'),
		3: ke('Package', 'package'),
		6: ke('Property', 'property'),
		14: ke('String', 'string'),
		22: ke('Struct', 'struct'),
		25: ke('TypeParameter', 'type parameter'),
		12: ke('Variable', 'variable')
	}
	var Sd
	;(function (e) {
		let t = new Map()
		t.set(0, re.symbolFile),
			t.set(1, re.symbolModule),
			t.set(2, re.symbolNamespace),
			t.set(3, re.symbolPackage),
			t.set(4, re.symbolClass),
			t.set(5, re.symbolMethod),
			t.set(6, re.symbolProperty),
			t.set(7, re.symbolField),
			t.set(8, re.symbolConstructor),
			t.set(9, re.symbolEnum),
			t.set(10, re.symbolInterface),
			t.set(11, re.symbolFunction),
			t.set(12, re.symbolVariable),
			t.set(13, re.symbolConstant),
			t.set(14, re.symbolString),
			t.set(15, re.symbolNumber),
			t.set(16, re.symbolBoolean),
			t.set(17, re.symbolArray),
			t.set(18, re.symbolObject),
			t.set(19, re.symbolKey),
			t.set(20, re.symbolNull),
			t.set(21, re.symbolEnumMember),
			t.set(22, re.symbolStruct),
			t.set(23, re.symbolEvent),
			t.set(24, re.symbolOperator),
			t.set(25, re.symbolTypeParameter)
		function n(r) {
			let i = t.get(r)
			return i || (console.info('No codicon found for SymbolKind ' + r), (i = re.symbolProperty)), i
		}
		e.toIcon = n
	})(Sd || (Sd = {}))
	var Ad = class e {
			static {
				this.Comment = new e('comment')
			}
			static {
				this.Imports = new e('imports')
			}
			static {
				this.Region = new e('region')
			}
			static fromValue(t) {
				switch (t) {
					case 'comment':
						return e.Comment
					case 'imports':
						return e.Imports
					case 'region':
						return e.Region
				}
				return new e(t)
			}
			constructor(t) {
				this.value = t
			}
		},
		Fd
	;(function (e) {
		e[(e.AIGenerated = 1)] = 'AIGenerated'
	})(Fd || (Fd = {}))
	var wd
	;(function (e) {
		;(e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic')
	})(wd || (wd = {}))
	var Ld
	;(function (e) {
		function t(n) {
			return !n || typeof n != 'object' ? !1 : typeof n.id == 'string' && typeof n.title == 'string'
		}
		e.is = t
	})(Ld || (Ld = {}))
	var Cd
	;(function (e) {
		;(e[(e.Type = 1)] = 'Type'), (e[(e.Parameter = 2)] = 'Parameter')
	})(Cd || (Cd = {}))
	var N6 = new Fs(),
		T6 = new Fs(),
		Id
	;(function (e) {
		;(e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic')
	})(Id || (Id = {}))
	var Rd
	;(function (e) {
		;(e[(e.Unknown = 0)] = 'Unknown'),
			(e[(e.Disabled = 1)] = 'Disabled'),
			(e[(e.Enabled = 2)] = 'Enabled')
	})(Rd || (Rd = {}))
	var kd
	;(function (e) {
		;(e[(e.Invoke = 1)] = 'Invoke'), (e[(e.Auto = 2)] = 'Auto')
	})(kd || (kd = {}))
	var Od
	;(function (e) {
		;(e[(e.None = 0)] = 'None'),
			(e[(e.KeepWhitespace = 1)] = 'KeepWhitespace'),
			(e[(e.InsertAsSnippet = 4)] = 'InsertAsSnippet')
	})(Od || (Od = {}))
	var Md
	;(function (e) {
		;(e[(e.Method = 0)] = 'Method'),
			(e[(e.Function = 1)] = 'Function'),
			(e[(e.Constructor = 2)] = 'Constructor'),
			(e[(e.Field = 3)] = 'Field'),
			(e[(e.Variable = 4)] = 'Variable'),
			(e[(e.Class = 5)] = 'Class'),
			(e[(e.Struct = 6)] = 'Struct'),
			(e[(e.Interface = 7)] = 'Interface'),
			(e[(e.Module = 8)] = 'Module'),
			(e[(e.Property = 9)] = 'Property'),
			(e[(e.Event = 10)] = 'Event'),
			(e[(e.Operator = 11)] = 'Operator'),
			(e[(e.Unit = 12)] = 'Unit'),
			(e[(e.Value = 13)] = 'Value'),
			(e[(e.Constant = 14)] = 'Constant'),
			(e[(e.Enum = 15)] = 'Enum'),
			(e[(e.EnumMember = 16)] = 'EnumMember'),
			(e[(e.Keyword = 17)] = 'Keyword'),
			(e[(e.Text = 18)] = 'Text'),
			(e[(e.Color = 19)] = 'Color'),
			(e[(e.File = 20)] = 'File'),
			(e[(e.Reference = 21)] = 'Reference'),
			(e[(e.Customcolor = 22)] = 'Customcolor'),
			(e[(e.Folder = 23)] = 'Folder'),
			(e[(e.TypeParameter = 24)] = 'TypeParameter'),
			(e[(e.User = 25)] = 'User'),
			(e[(e.Issue = 26)] = 'Issue'),
			(e[(e.Snippet = 27)] = 'Snippet')
	})(Md || (Md = {}))
	var Pd
	;(function (e) {
		e[(e.Deprecated = 1)] = 'Deprecated'
	})(Pd || (Pd = {}))
	var Bd
	;(function (e) {
		;(e[(e.Invoke = 0)] = 'Invoke'),
			(e[(e.TriggerCharacter = 1)] = 'TriggerCharacter'),
			(e[(e.TriggerForIncompleteCompletions = 2)] = 'TriggerForIncompleteCompletions')
	})(Bd || (Bd = {}))
	var Vd
	;(function (e) {
		;(e[(e.EXACT = 0)] = 'EXACT'), (e[(e.ABOVE = 1)] = 'ABOVE'), (e[(e.BELOW = 2)] = 'BELOW')
	})(Vd || (Vd = {}))
	var Ud
	;(function (e) {
		;(e[(e.NotSet = 0)] = 'NotSet'),
			(e[(e.ContentFlush = 1)] = 'ContentFlush'),
			(e[(e.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
			(e[(e.Explicit = 3)] = 'Explicit'),
			(e[(e.Paste = 4)] = 'Paste'),
			(e[(e.Undo = 5)] = 'Undo'),
			(e[(e.Redo = 6)] = 'Redo')
	})(Ud || (Ud = {}))
	var $d
	;(function (e) {
		;(e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF')
	})($d || ($d = {}))
	var jd
	;(function (e) {
		;(e[(e.Text = 0)] = 'Text'), (e[(e.Read = 1)] = 'Read'), (e[(e.Write = 2)] = 'Write')
	})(jd || (jd = {}))
	var qd
	;(function (e) {
		;(e[(e.None = 0)] = 'None'),
			(e[(e.Keep = 1)] = 'Keep'),
			(e[(e.Brackets = 2)] = 'Brackets'),
			(e[(e.Advanced = 3)] = 'Advanced'),
			(e[(e.Full = 4)] = 'Full')
	})(qd || (qd = {}))
	var Gd
	;(function (e) {
		;(e[(e.acceptSuggestionOnCommitCharacter = 0)] = 'acceptSuggestionOnCommitCharacter'),
			(e[(e.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
			(e[(e.accessibilitySupport = 2)] = 'accessibilitySupport'),
			(e[(e.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
			(e[(e.ariaLabel = 4)] = 'ariaLabel'),
			(e[(e.ariaRequired = 5)] = 'ariaRequired'),
			(e[(e.autoClosingBrackets = 6)] = 'autoClosingBrackets'),
			(e[(e.autoClosingComments = 7)] = 'autoClosingComments'),
			(e[(e.screenReaderAnnounceInlineSuggestion = 8)] = 'screenReaderAnnounceInlineSuggestion'),
			(e[(e.autoClosingDelete = 9)] = 'autoClosingDelete'),
			(e[(e.autoClosingOvertype = 10)] = 'autoClosingOvertype'),
			(e[(e.autoClosingQuotes = 11)] = 'autoClosingQuotes'),
			(e[(e.autoIndent = 12)] = 'autoIndent'),
			(e[(e.automaticLayout = 13)] = 'automaticLayout'),
			(e[(e.autoSurround = 14)] = 'autoSurround'),
			(e[(e.bracketPairColorization = 15)] = 'bracketPairColorization'),
			(e[(e.guides = 16)] = 'guides'),
			(e[(e.codeLens = 17)] = 'codeLens'),
			(e[(e.codeLensFontFamily = 18)] = 'codeLensFontFamily'),
			(e[(e.codeLensFontSize = 19)] = 'codeLensFontSize'),
			(e[(e.colorDecorators = 20)] = 'colorDecorators'),
			(e[(e.colorDecoratorsLimit = 21)] = 'colorDecoratorsLimit'),
			(e[(e.columnSelection = 22)] = 'columnSelection'),
			(e[(e.comments = 23)] = 'comments'),
			(e[(e.contextmenu = 24)] = 'contextmenu'),
			(e[(e.copyWithSyntaxHighlighting = 25)] = 'copyWithSyntaxHighlighting'),
			(e[(e.cursorBlinking = 26)] = 'cursorBlinking'),
			(e[(e.cursorSmoothCaretAnimation = 27)] = 'cursorSmoothCaretAnimation'),
			(e[(e.cursorStyle = 28)] = 'cursorStyle'),
			(e[(e.cursorSurroundingLines = 29)] = 'cursorSurroundingLines'),
			(e[(e.cursorSurroundingLinesStyle = 30)] = 'cursorSurroundingLinesStyle'),
			(e[(e.cursorWidth = 31)] = 'cursorWidth'),
			(e[(e.disableLayerHinting = 32)] = 'disableLayerHinting'),
			(e[(e.disableMonospaceOptimizations = 33)] = 'disableMonospaceOptimizations'),
			(e[(e.domReadOnly = 34)] = 'domReadOnly'),
			(e[(e.dragAndDrop = 35)] = 'dragAndDrop'),
			(e[(e.dropIntoEditor = 36)] = 'dropIntoEditor'),
			(e[(e.emptySelectionClipboard = 37)] = 'emptySelectionClipboard'),
			(e[(e.experimentalWhitespaceRendering = 38)] = 'experimentalWhitespaceRendering'),
			(e[(e.extraEditorClassName = 39)] = 'extraEditorClassName'),
			(e[(e.fastScrollSensitivity = 40)] = 'fastScrollSensitivity'),
			(e[(e.find = 41)] = 'find'),
			(e[(e.fixedOverflowWidgets = 42)] = 'fixedOverflowWidgets'),
			(e[(e.folding = 43)] = 'folding'),
			(e[(e.foldingStrategy = 44)] = 'foldingStrategy'),
			(e[(e.foldingHighlight = 45)] = 'foldingHighlight'),
			(e[(e.foldingImportsByDefault = 46)] = 'foldingImportsByDefault'),
			(e[(e.foldingMaximumRegions = 47)] = 'foldingMaximumRegions'),
			(e[(e.unfoldOnClickAfterEndOfLine = 48)] = 'unfoldOnClickAfterEndOfLine'),
			(e[(e.fontFamily = 49)] = 'fontFamily'),
			(e[(e.fontInfo = 50)] = 'fontInfo'),
			(e[(e.fontLigatures = 51)] = 'fontLigatures'),
			(e[(e.fontSize = 52)] = 'fontSize'),
			(e[(e.fontWeight = 53)] = 'fontWeight'),
			(e[(e.fontVariations = 54)] = 'fontVariations'),
			(e[(e.formatOnPaste = 55)] = 'formatOnPaste'),
			(e[(e.formatOnType = 56)] = 'formatOnType'),
			(e[(e.glyphMargin = 57)] = 'glyphMargin'),
			(e[(e.gotoLocation = 58)] = 'gotoLocation'),
			(e[(e.hideCursorInOverviewRuler = 59)] = 'hideCursorInOverviewRuler'),
			(e[(e.hover = 60)] = 'hover'),
			(e[(e.inDiffEditor = 61)] = 'inDiffEditor'),
			(e[(e.inlineSuggest = 62)] = 'inlineSuggest'),
			(e[(e.inlineEdit = 63)] = 'inlineEdit'),
			(e[(e.letterSpacing = 64)] = 'letterSpacing'),
			(e[(e.lightbulb = 65)] = 'lightbulb'),
			(e[(e.lineDecorationsWidth = 66)] = 'lineDecorationsWidth'),
			(e[(e.lineHeight = 67)] = 'lineHeight'),
			(e[(e.lineNumbers = 68)] = 'lineNumbers'),
			(e[(e.lineNumbersMinChars = 69)] = 'lineNumbersMinChars'),
			(e[(e.linkedEditing = 70)] = 'linkedEditing'),
			(e[(e.links = 71)] = 'links'),
			(e[(e.matchBrackets = 72)] = 'matchBrackets'),
			(e[(e.minimap = 73)] = 'minimap'),
			(e[(e.mouseStyle = 74)] = 'mouseStyle'),
			(e[(e.mouseWheelScrollSensitivity = 75)] = 'mouseWheelScrollSensitivity'),
			(e[(e.mouseWheelZoom = 76)] = 'mouseWheelZoom'),
			(e[(e.multiCursorMergeOverlapping = 77)] = 'multiCursorMergeOverlapping'),
			(e[(e.multiCursorModifier = 78)] = 'multiCursorModifier'),
			(e[(e.multiCursorPaste = 79)] = 'multiCursorPaste'),
			(e[(e.multiCursorLimit = 80)] = 'multiCursorLimit'),
			(e[(e.occurrencesHighlight = 81)] = 'occurrencesHighlight'),
			(e[(e.overviewRulerBorder = 82)] = 'overviewRulerBorder'),
			(e[(e.overviewRulerLanes = 83)] = 'overviewRulerLanes'),
			(e[(e.padding = 84)] = 'padding'),
			(e[(e.pasteAs = 85)] = 'pasteAs'),
			(e[(e.parameterHints = 86)] = 'parameterHints'),
			(e[(e.peekWidgetDefaultFocus = 87)] = 'peekWidgetDefaultFocus'),
			(e[(e.placeholder = 88)] = 'placeholder'),
			(e[(e.definitionLinkOpensInPeek = 89)] = 'definitionLinkOpensInPeek'),
			(e[(e.quickSuggestions = 90)] = 'quickSuggestions'),
			(e[(e.quickSuggestionsDelay = 91)] = 'quickSuggestionsDelay'),
			(e[(e.readOnly = 92)] = 'readOnly'),
			(e[(e.readOnlyMessage = 93)] = 'readOnlyMessage'),
			(e[(e.renameOnType = 94)] = 'renameOnType'),
			(e[(e.renderControlCharacters = 95)] = 'renderControlCharacters'),
			(e[(e.renderFinalNewline = 96)] = 'renderFinalNewline'),
			(e[(e.renderLineHighlight = 97)] = 'renderLineHighlight'),
			(e[(e.renderLineHighlightOnlyWhenFocus = 98)] = 'renderLineHighlightOnlyWhenFocus'),
			(e[(e.renderValidationDecorations = 99)] = 'renderValidationDecorations'),
			(e[(e.renderWhitespace = 100)] = 'renderWhitespace'),
			(e[(e.revealHorizontalRightPadding = 101)] = 'revealHorizontalRightPadding'),
			(e[(e.roundedSelection = 102)] = 'roundedSelection'),
			(e[(e.rulers = 103)] = 'rulers'),
			(e[(e.scrollbar = 104)] = 'scrollbar'),
			(e[(e.scrollBeyondLastColumn = 105)] = 'scrollBeyondLastColumn'),
			(e[(e.scrollBeyondLastLine = 106)] = 'scrollBeyondLastLine'),
			(e[(e.scrollPredominantAxis = 107)] = 'scrollPredominantAxis'),
			(e[(e.selectionClipboard = 108)] = 'selectionClipboard'),
			(e[(e.selectionHighlight = 109)] = 'selectionHighlight'),
			(e[(e.selectOnLineNumbers = 110)] = 'selectOnLineNumbers'),
			(e[(e.showFoldingControls = 111)] = 'showFoldingControls'),
			(e[(e.showUnused = 112)] = 'showUnused'),
			(e[(e.snippetSuggestions = 113)] = 'snippetSuggestions'),
			(e[(e.smartSelect = 114)] = 'smartSelect'),
			(e[(e.smoothScrolling = 115)] = 'smoothScrolling'),
			(e[(e.stickyScroll = 116)] = 'stickyScroll'),
			(e[(e.stickyTabStops = 117)] = 'stickyTabStops'),
			(e[(e.stopRenderingLineAfter = 118)] = 'stopRenderingLineAfter'),
			(e[(e.suggest = 119)] = 'suggest'),
			(e[(e.suggestFontSize = 120)] = 'suggestFontSize'),
			(e[(e.suggestLineHeight = 121)] = 'suggestLineHeight'),
			(e[(e.suggestOnTriggerCharacters = 122)] = 'suggestOnTriggerCharacters'),
			(e[(e.suggestSelection = 123)] = 'suggestSelection'),
			(e[(e.tabCompletion = 124)] = 'tabCompletion'),
			(e[(e.tabIndex = 125)] = 'tabIndex'),
			(e[(e.unicodeHighlighting = 126)] = 'unicodeHighlighting'),
			(e[(e.unusualLineTerminators = 127)] = 'unusualLineTerminators'),
			(e[(e.useShadowDOM = 128)] = 'useShadowDOM'),
			(e[(e.useTabStops = 129)] = 'useTabStops'),
			(e[(e.wordBreak = 130)] = 'wordBreak'),
			(e[(e.wordSegmenterLocales = 131)] = 'wordSegmenterLocales'),
			(e[(e.wordSeparators = 132)] = 'wordSeparators'),
			(e[(e.wordWrap = 133)] = 'wordWrap'),
			(e[(e.wordWrapBreakAfterCharacters = 134)] = 'wordWrapBreakAfterCharacters'),
			(e[(e.wordWrapBreakBeforeCharacters = 135)] = 'wordWrapBreakBeforeCharacters'),
			(e[(e.wordWrapColumn = 136)] = 'wordWrapColumn'),
			(e[(e.wordWrapOverride1 = 137)] = 'wordWrapOverride1'),
			(e[(e.wordWrapOverride2 = 138)] = 'wordWrapOverride2'),
			(e[(e.wrappingIndent = 139)] = 'wrappingIndent'),
			(e[(e.wrappingStrategy = 140)] = 'wrappingStrategy'),
			(e[(e.showDeprecated = 141)] = 'showDeprecated'),
			(e[(e.inlayHints = 142)] = 'inlayHints'),
			(e[(e.editorClassName = 143)] = 'editorClassName'),
			(e[(e.pixelRatio = 144)] = 'pixelRatio'),
			(e[(e.tabFocusMode = 145)] = 'tabFocusMode'),
			(e[(e.layoutInfo = 146)] = 'layoutInfo'),
			(e[(e.wrappingInfo = 147)] = 'wrappingInfo'),
			(e[(e.defaultColorDecorators = 148)] = 'defaultColorDecorators'),
			(e[(e.colorDecoratorsActivatedOn = 149)] = 'colorDecoratorsActivatedOn'),
			(e[(e.inlineCompletionsAccessibilityVerbose = 150)] = 'inlineCompletionsAccessibilityVerbose')
	})(Gd || (Gd = {}))
	var Hd
	;(function (e) {
		;(e[(e.TextDefined = 0)] = 'TextDefined'), (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF')
	})(Hd || (Hd = {}))
	var Wd
	;(function (e) {
		;(e[(e.LF = 0)] = 'LF'), (e[(e.CRLF = 1)] = 'CRLF')
	})(Wd || (Wd = {}))
	var Qd
	;(function (e) {
		;(e[(e.Left = 1)] = 'Left'), (e[(e.Center = 2)] = 'Center'), (e[(e.Right = 3)] = 'Right')
	})(Qd || (Qd = {}))
	var zd
	;(function (e) {
		;(e[(e.Increase = 0)] = 'Increase'), (e[(e.Decrease = 1)] = 'Decrease')
	})(zd || (zd = {}))
	var Yd
	;(function (e) {
		;(e[(e.None = 0)] = 'None'),
			(e[(e.Indent = 1)] = 'Indent'),
			(e[(e.IndentOutdent = 2)] = 'IndentOutdent'),
			(e[(e.Outdent = 3)] = 'Outdent')
	})(Yd || (Yd = {}))
	var Jd
	;(function (e) {
		;(e[(e.Both = 0)] = 'Both'),
			(e[(e.Right = 1)] = 'Right'),
			(e[(e.Left = 2)] = 'Left'),
			(e[(e.None = 3)] = 'None')
	})(Jd || (Jd = {}))
	var Xd
	;(function (e) {
		;(e[(e.Type = 1)] = 'Type'), (e[(e.Parameter = 2)] = 'Parameter')
	})(Xd || (Xd = {}))
	var Kd
	;(function (e) {
		;(e[(e.Automatic = 0)] = 'Automatic'), (e[(e.Explicit = 1)] = 'Explicit')
	})(Kd || (Kd = {}))
	var Zd
	;(function (e) {
		;(e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic')
	})(Zd || (Zd = {}))
	var Ko
	;(function (e) {
		;(e[(e.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
			(e[(e.Unknown = 0)] = 'Unknown'),
			(e[(e.Backspace = 1)] = 'Backspace'),
			(e[(e.Tab = 2)] = 'Tab'),
			(e[(e.Enter = 3)] = 'Enter'),
			(e[(e.Shift = 4)] = 'Shift'),
			(e[(e.Ctrl = 5)] = 'Ctrl'),
			(e[(e.Alt = 6)] = 'Alt'),
			(e[(e.PauseBreak = 7)] = 'PauseBreak'),
			(e[(e.CapsLock = 8)] = 'CapsLock'),
			(e[(e.Escape = 9)] = 'Escape'),
			(e[(e.Space = 10)] = 'Space'),
			(e[(e.PageUp = 11)] = 'PageUp'),
			(e[(e.PageDown = 12)] = 'PageDown'),
			(e[(e.End = 13)] = 'End'),
			(e[(e.Home = 14)] = 'Home'),
			(e[(e.LeftArrow = 15)] = 'LeftArrow'),
			(e[(e.UpArrow = 16)] = 'UpArrow'),
			(e[(e.RightArrow = 17)] = 'RightArrow'),
			(e[(e.DownArrow = 18)] = 'DownArrow'),
			(e[(e.Insert = 19)] = 'Insert'),
			(e[(e.Delete = 20)] = 'Delete'),
			(e[(e.Digit0 = 21)] = 'Digit0'),
			(e[(e.Digit1 = 22)] = 'Digit1'),
			(e[(e.Digit2 = 23)] = 'Digit2'),
			(e[(e.Digit3 = 24)] = 'Digit3'),
			(e[(e.Digit4 = 25)] = 'Digit4'),
			(e[(e.Digit5 = 26)] = 'Digit5'),
			(e[(e.Digit6 = 27)] = 'Digit6'),
			(e[(e.Digit7 = 28)] = 'Digit7'),
			(e[(e.Digit8 = 29)] = 'Digit8'),
			(e[(e.Digit9 = 30)] = 'Digit9'),
			(e[(e.KeyA = 31)] = 'KeyA'),
			(e[(e.KeyB = 32)] = 'KeyB'),
			(e[(e.KeyC = 33)] = 'KeyC'),
			(e[(e.KeyD = 34)] = 'KeyD'),
			(e[(e.KeyE = 35)] = 'KeyE'),
			(e[(e.KeyF = 36)] = 'KeyF'),
			(e[(e.KeyG = 37)] = 'KeyG'),
			(e[(e.KeyH = 38)] = 'KeyH'),
			(e[(e.KeyI = 39)] = 'KeyI'),
			(e[(e.KeyJ = 40)] = 'KeyJ'),
			(e[(e.KeyK = 41)] = 'KeyK'),
			(e[(e.KeyL = 42)] = 'KeyL'),
			(e[(e.KeyM = 43)] = 'KeyM'),
			(e[(e.KeyN = 44)] = 'KeyN'),
			(e[(e.KeyO = 45)] = 'KeyO'),
			(e[(e.KeyP = 46)] = 'KeyP'),
			(e[(e.KeyQ = 47)] = 'KeyQ'),
			(e[(e.KeyR = 48)] = 'KeyR'),
			(e[(e.KeyS = 49)] = 'KeyS'),
			(e[(e.KeyT = 50)] = 'KeyT'),
			(e[(e.KeyU = 51)] = 'KeyU'),
			(e[(e.KeyV = 52)] = 'KeyV'),
			(e[(e.KeyW = 53)] = 'KeyW'),
			(e[(e.KeyX = 54)] = 'KeyX'),
			(e[(e.KeyY = 55)] = 'KeyY'),
			(e[(e.KeyZ = 56)] = 'KeyZ'),
			(e[(e.Meta = 57)] = 'Meta'),
			(e[(e.ContextMenu = 58)] = 'ContextMenu'),
			(e[(e.F1 = 59)] = 'F1'),
			(e[(e.F2 = 60)] = 'F2'),
			(e[(e.F3 = 61)] = 'F3'),
			(e[(e.F4 = 62)] = 'F4'),
			(e[(e.F5 = 63)] = 'F5'),
			(e[(e.F6 = 64)] = 'F6'),
			(e[(e.F7 = 65)] = 'F7'),
			(e[(e.F8 = 66)] = 'F8'),
			(e[(e.F9 = 67)] = 'F9'),
			(e[(e.F10 = 68)] = 'F10'),
			(e[(e.F11 = 69)] = 'F11'),
			(e[(e.F12 = 70)] = 'F12'),
			(e[(e.F13 = 71)] = 'F13'),
			(e[(e.F14 = 72)] = 'F14'),
			(e[(e.F15 = 73)] = 'F15'),
			(e[(e.F16 = 74)] = 'F16'),
			(e[(e.F17 = 75)] = 'F17'),
			(e[(e.F18 = 76)] = 'F18'),
			(e[(e.F19 = 77)] = 'F19'),
			(e[(e.F20 = 78)] = 'F20'),
			(e[(e.F21 = 79)] = 'F21'),
			(e[(e.F22 = 80)] = 'F22'),
			(e[(e.F23 = 81)] = 'F23'),
			(e[(e.F24 = 82)] = 'F24'),
			(e[(e.NumLock = 83)] = 'NumLock'),
			(e[(e.ScrollLock = 84)] = 'ScrollLock'),
			(e[(e.Semicolon = 85)] = 'Semicolon'),
			(e[(e.Equal = 86)] = 'Equal'),
			(e[(e.Comma = 87)] = 'Comma'),
			(e[(e.Minus = 88)] = 'Minus'),
			(e[(e.Period = 89)] = 'Period'),
			(e[(e.Slash = 90)] = 'Slash'),
			(e[(e.Backquote = 91)] = 'Backquote'),
			(e[(e.BracketLeft = 92)] = 'BracketLeft'),
			(e[(e.Backslash = 93)] = 'Backslash'),
			(e[(e.BracketRight = 94)] = 'BracketRight'),
			(e[(e.Quote = 95)] = 'Quote'),
			(e[(e.OEM_8 = 96)] = 'OEM_8'),
			(e[(e.IntlBackslash = 97)] = 'IntlBackslash'),
			(e[(e.Numpad0 = 98)] = 'Numpad0'),
			(e[(e.Numpad1 = 99)] = 'Numpad1'),
			(e[(e.Numpad2 = 100)] = 'Numpad2'),
			(e[(e.Numpad3 = 101)] = 'Numpad3'),
			(e[(e.Numpad4 = 102)] = 'Numpad4'),
			(e[(e.Numpad5 = 103)] = 'Numpad5'),
			(e[(e.Numpad6 = 104)] = 'Numpad6'),
			(e[(e.Numpad7 = 105)] = 'Numpad7'),
			(e[(e.Numpad8 = 106)] = 'Numpad8'),
			(e[(e.Numpad9 = 107)] = 'Numpad9'),
			(e[(e.NumpadMultiply = 108)] = 'NumpadMultiply'),
			(e[(e.NumpadAdd = 109)] = 'NumpadAdd'),
			(e[(e.NUMPAD_SEPARATOR = 110)] = 'NUMPAD_SEPARATOR'),
			(e[(e.NumpadSubtract = 111)] = 'NumpadSubtract'),
			(e[(e.NumpadDecimal = 112)] = 'NumpadDecimal'),
			(e[(e.NumpadDivide = 113)] = 'NumpadDivide'),
			(e[(e.KEY_IN_COMPOSITION = 114)] = 'KEY_IN_COMPOSITION'),
			(e[(e.ABNT_C1 = 115)] = 'ABNT_C1'),
			(e[(e.ABNT_C2 = 116)] = 'ABNT_C2'),
			(e[(e.AudioVolumeMute = 117)] = 'AudioVolumeMute'),
			(e[(e.AudioVolumeUp = 118)] = 'AudioVolumeUp'),
			(e[(e.AudioVolumeDown = 119)] = 'AudioVolumeDown'),
			(e[(e.BrowserSearch = 120)] = 'BrowserSearch'),
			(e[(e.BrowserHome = 121)] = 'BrowserHome'),
			(e[(e.BrowserBack = 122)] = 'BrowserBack'),
			(e[(e.BrowserForward = 123)] = 'BrowserForward'),
			(e[(e.MediaTrackNext = 124)] = 'MediaTrackNext'),
			(e[(e.MediaTrackPrevious = 125)] = 'MediaTrackPrevious'),
			(e[(e.MediaStop = 126)] = 'MediaStop'),
			(e[(e.MediaPlayPause = 127)] = 'MediaPlayPause'),
			(e[(e.LaunchMediaPlayer = 128)] = 'LaunchMediaPlayer'),
			(e[(e.LaunchMail = 129)] = 'LaunchMail'),
			(e[(e.LaunchApp2 = 130)] = 'LaunchApp2'),
			(e[(e.Clear = 131)] = 'Clear'),
			(e[(e.MAX_VALUE = 132)] = 'MAX_VALUE')
	})(Ko || (Ko = {}))
	var Zo
	;(function (e) {
		;(e[(e.Hint = 1)] = 'Hint'),
			(e[(e.Info = 2)] = 'Info'),
			(e[(e.Warning = 4)] = 'Warning'),
			(e[(e.Error = 8)] = 'Error')
	})(Zo || (Zo = {}))
	var ea
	;(function (e) {
		;(e[(e.Unnecessary = 1)] = 'Unnecessary'), (e[(e.Deprecated = 2)] = 'Deprecated')
	})(ea || (ea = {}))
	var ep
	;(function (e) {
		;(e[(e.Inline = 1)] = 'Inline'), (e[(e.Gutter = 2)] = 'Gutter')
	})(ep || (ep = {}))
	var tp
	;(function (e) {
		;(e[(e.Normal = 1)] = 'Normal'), (e[(e.Underlined = 2)] = 'Underlined')
	})(tp || (tp = {}))
	var np
	;(function (e) {
		;(e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
			(e[(e.TEXTAREA = 1)] = 'TEXTAREA'),
			(e[(e.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
			(e[(e.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
			(e[(e.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
			(e[(e.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
			(e[(e.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
			(e[(e.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
			(e[(e.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
			(e[(e.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
			(e[(e.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
			(e[(e.SCROLLBAR = 11)] = 'SCROLLBAR'),
			(e[(e.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
			(e[(e.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR')
	})(np || (np = {}))
	var rp
	;(function (e) {
		e[(e.AIGenerated = 1)] = 'AIGenerated'
	})(rp || (rp = {}))
	var ip
	;(function (e) {
		;(e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic')
	})(ip || (ip = {}))
	var sp
	;(function (e) {
		;(e[(e.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
			(e[(e.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
			(e[(e.TOP_CENTER = 2)] = 'TOP_CENTER')
	})(sp || (sp = {}))
	var op
	;(function (e) {
		;(e[(e.Left = 1)] = 'Left'),
			(e[(e.Center = 2)] = 'Center'),
			(e[(e.Right = 4)] = 'Right'),
			(e[(e.Full = 7)] = 'Full')
	})(op || (op = {}))
	var ap
	;(function (e) {
		;(e[(e.Word = 0)] = 'Word'), (e[(e.Line = 1)] = 'Line'), (e[(e.Suggest = 2)] = 'Suggest')
	})(ap || (ap = {}))
	var up
	;(function (e) {
		;(e[(e.Left = 0)] = 'Left'),
			(e[(e.Right = 1)] = 'Right'),
			(e[(e.None = 2)] = 'None'),
			(e[(e.LeftOfInjectedText = 3)] = 'LeftOfInjectedText'),
			(e[(e.RightOfInjectedText = 4)] = 'RightOfInjectedText')
	})(up || (up = {}))
	var lp
	;(function (e) {
		;(e[(e.Off = 0)] = 'Off'),
			(e[(e.On = 1)] = 'On'),
			(e[(e.Relative = 2)] = 'Relative'),
			(e[(e.Interval = 3)] = 'Interval'),
			(e[(e.Custom = 4)] = 'Custom')
	})(lp || (lp = {}))
	var cp
	;(function (e) {
		;(e[(e.None = 0)] = 'None'), (e[(e.Text = 1)] = 'Text'), (e[(e.Blocks = 2)] = 'Blocks')
	})(cp || (cp = {}))
	var fp
	;(function (e) {
		;(e[(e.Smooth = 0)] = 'Smooth'), (e[(e.Immediate = 1)] = 'Immediate')
	})(fp || (fp = {}))
	var dp
	;(function (e) {
		;(e[(e.Auto = 1)] = 'Auto'), (e[(e.Hidden = 2)] = 'Hidden'), (e[(e.Visible = 3)] = 'Visible')
	})(dp || (dp = {}))
	var ta
	;(function (e) {
		;(e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL')
	})(ta || (ta = {}))
	var pp
	;(function (e) {
		;(e.Off = 'off'), (e.OnCode = 'onCode'), (e.On = 'on')
	})(pp || (pp = {}))
	var hp
	;(function (e) {
		;(e[(e.Invoke = 1)] = 'Invoke'),
			(e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
			(e[(e.ContentChange = 3)] = 'ContentChange')
	})(hp || (hp = {}))
	var mp
	;(function (e) {
		;(e[(e.File = 0)] = 'File'),
			(e[(e.Module = 1)] = 'Module'),
			(e[(e.Namespace = 2)] = 'Namespace'),
			(e[(e.Package = 3)] = 'Package'),
			(e[(e.Class = 4)] = 'Class'),
			(e[(e.Method = 5)] = 'Method'),
			(e[(e.Property = 6)] = 'Property'),
			(e[(e.Field = 7)] = 'Field'),
			(e[(e.Constructor = 8)] = 'Constructor'),
			(e[(e.Enum = 9)] = 'Enum'),
			(e[(e.Interface = 10)] = 'Interface'),
			(e[(e.Function = 11)] = 'Function'),
			(e[(e.Variable = 12)] = 'Variable'),
			(e[(e.Constant = 13)] = 'Constant'),
			(e[(e.String = 14)] = 'String'),
			(e[(e.Number = 15)] = 'Number'),
			(e[(e.Boolean = 16)] = 'Boolean'),
			(e[(e.Array = 17)] = 'Array'),
			(e[(e.Object = 18)] = 'Object'),
			(e[(e.Key = 19)] = 'Key'),
			(e[(e.Null = 20)] = 'Null'),
			(e[(e.EnumMember = 21)] = 'EnumMember'),
			(e[(e.Struct = 22)] = 'Struct'),
			(e[(e.Event = 23)] = 'Event'),
			(e[(e.Operator = 24)] = 'Operator'),
			(e[(e.TypeParameter = 25)] = 'TypeParameter')
	})(mp || (mp = {}))
	var gp
	;(function (e) {
		e[(e.Deprecated = 1)] = 'Deprecated'
	})(gp || (gp = {}))
	var Dp
	;(function (e) {
		;(e[(e.Hidden = 0)] = 'Hidden'),
			(e[(e.Blink = 1)] = 'Blink'),
			(e[(e.Smooth = 2)] = 'Smooth'),
			(e[(e.Phase = 3)] = 'Phase'),
			(e[(e.Expand = 4)] = 'Expand'),
			(e[(e.Solid = 5)] = 'Solid')
	})(Dp || (Dp = {}))
	var vp
	;(function (e) {
		;(e[(e.Line = 1)] = 'Line'),
			(e[(e.Block = 2)] = 'Block'),
			(e[(e.Underline = 3)] = 'Underline'),
			(e[(e.LineThin = 4)] = 'LineThin'),
			(e[(e.BlockOutline = 5)] = 'BlockOutline'),
			(e[(e.UnderlineThin = 6)] = 'UnderlineThin')
	})(vp || (vp = {}))
	var bp
	;(function (e) {
		;(e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
			(e[(e.NeverGrowsWhenTypingAtEdges = 1)] = 'NeverGrowsWhenTypingAtEdges'),
			(e[(e.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
			(e[(e.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter')
	})(bp || (bp = {}))
	var Ep
	;(function (e) {
		;(e[(e.None = 0)] = 'None'),
			(e[(e.Same = 1)] = 'Same'),
			(e[(e.Indent = 2)] = 'Indent'),
			(e[(e.DeepIndent = 3)] = 'DeepIndent')
	})(Ep || (Ep = {}))
	var Pl = class {
		static {
			this.CtrlCmd = 2048
		}
		static {
			this.Shift = 1024
		}
		static {
			this.Alt = 512
		}
		static {
			this.WinCtrl = 256
		}
		static chord(t, n) {
			return gd(t, n)
		}
	}
	function yp() {
		return {
			editor: void 0,
			languages: void 0,
			CancellationTokenSource: Ss,
			Emitter: lt,
			KeyCode: Ko,
			KeyMod: Pl,
			Position: Se,
			Range: oe,
			Selection: Jo,
			SelectionDirection: ta,
			MarkerSeverity: Zo,
			MarkerTag: ea,
			Uri: _t,
			Token: Xo
		}
	}
	var ws = class e {
		static {
			this.CHANNEL_NAME = 'editorWorkerHost'
		}
		static getChannel(t) {
			return t.getChannel(e.CHANNEL_NAME)
		}
		static setChannel(t, n) {
			t.setChannel(e.CHANNEL_NAME, n)
		}
	}
	var xp,
		_p,
		Bl = class {
			constructor(t, n) {
				;(this.uri = t), (this.value = n)
			}
		}
	function m5(e) {
		return Array.isArray(e)
	}
	var Np = class e {
			static {
				this.defaultToKey = (t) => t.toString()
			}
			constructor(t, n) {
				if (((this[xp] = 'ResourceMap'), t instanceof e))
					(this.map = new Map(t.map)), (this.toKey = n ?? e.defaultToKey)
				else if (m5(t)) {
					;(this.map = new Map()), (this.toKey = n ?? e.defaultToKey)
					for (let [r, i] of t) this.set(r, i)
				} else (this.map = new Map()), (this.toKey = t ?? e.defaultToKey)
			}
			set(t, n) {
				return this.map.set(this.toKey(t), new Bl(t, n)), this
			}
			get(t) {
				return this.map.get(this.toKey(t))?.value
			}
			has(t) {
				return this.map.has(this.toKey(t))
			}
			get size() {
				return this.map.size
			}
			clear() {
				this.map.clear()
			}
			delete(t) {
				return this.map.delete(this.toKey(t))
			}
			forEach(t, n) {
				typeof n < 'u' && (t = t.bind(n))
				for (let [r, i] of this.map) t(i.value, i.uri, this)
			}
			*values() {
				for (let t of this.map.values()) yield t.value
			}
			*keys() {
				for (let t of this.map.values()) yield t.uri
			}
			*entries() {
				for (let t of this.map.values()) yield [t.uri, t.value]
			}
			*[((xp = Symbol.toStringTag), Symbol.iterator)]() {
				for (let [, t] of this.map) yield [t.uri, t.value]
			}
		},
		Vl = class {
			constructor() {
				;(this[_p] = 'LinkedMap'),
					(this._map = new Map()),
					(this._head = void 0),
					(this._tail = void 0),
					(this._size = 0),
					(this._state = 0)
			}
			clear() {
				this._map.clear(),
					(this._head = void 0),
					(this._tail = void 0),
					(this._size = 0),
					this._state++
			}
			isEmpty() {
				return !this._head && !this._tail
			}
			get size() {
				return this._size
			}
			get first() {
				return this._head?.value
			}
			get last() {
				return this._tail?.value
			}
			has(t) {
				return this._map.has(t)
			}
			get(t, n = 0) {
				let r = this._map.get(t)
				if (r) return n !== 0 && this.touch(r, n), r.value
			}
			set(t, n, r = 0) {
				let i = this._map.get(t)
				if (i) (i.value = n), r !== 0 && this.touch(i, r)
				else {
					switch (((i = { key: t, value: n, next: void 0, previous: void 0 }), r)) {
						case 0:
							this.addItemLast(i)
							break
						case 1:
							this.addItemFirst(i)
							break
						case 2:
							this.addItemLast(i)
							break
						default:
							this.addItemLast(i)
							break
					}
					this._map.set(t, i), this._size++
				}
				return this
			}
			delete(t) {
				return !!this.remove(t)
			}
			remove(t) {
				let n = this._map.get(t)
				if (n) return this._map.delete(t), this.removeItem(n), this._size--, n.value
			}
			shift() {
				if (!this._head && !this._tail) return
				if (!this._head || !this._tail) throw new Error('Invalid list')
				let t = this._head
				return this._map.delete(t.key), this.removeItem(t), this._size--, t.value
			}
			forEach(t, n) {
				let r = this._state,
					i = this._head
				for (; i; ) {
					if ((n ? t.bind(n)(i.value, i.key, this) : t(i.value, i.key, this), this._state !== r))
						throw new Error('LinkedMap got modified during iteration.')
					i = i.next
				}
			}
			keys() {
				let t = this,
					n = this._state,
					r = this._head,
					i = {
						[Symbol.iterator]() {
							return i
						},
						next() {
							if (t._state !== n) throw new Error('LinkedMap got modified during iteration.')
							if (r) {
								let s = { value: r.key, done: !1 }
								return (r = r.next), s
							} else return { value: void 0, done: !0 }
						}
					}
				return i
			}
			values() {
				let t = this,
					n = this._state,
					r = this._head,
					i = {
						[Symbol.iterator]() {
							return i
						},
						next() {
							if (t._state !== n) throw new Error('LinkedMap got modified during iteration.')
							if (r) {
								let s = { value: r.value, done: !1 }
								return (r = r.next), s
							} else return { value: void 0, done: !0 }
						}
					}
				return i
			}
			entries() {
				let t = this,
					n = this._state,
					r = this._head,
					i = {
						[Symbol.iterator]() {
							return i
						},
						next() {
							if (t._state !== n) throw new Error('LinkedMap got modified during iteration.')
							if (r) {
								let s = { value: [r.key, r.value], done: !1 }
								return (r = r.next), s
							} else return { value: void 0, done: !0 }
						}
					}
				return i
			}
			[((_p = Symbol.toStringTag), Symbol.iterator)]() {
				return this.entries()
			}
			trimOld(t) {
				if (t >= this.size) return
				if (t === 0) {
					this.clear()
					return
				}
				let n = this._head,
					r = this.size
				for (; n && r > t; ) this._map.delete(n.key), (n = n.next), r--
				;(this._head = n), (this._size = r), n && (n.previous = void 0), this._state++
			}
			trimNew(t) {
				if (t >= this.size) return
				if (t === 0) {
					this.clear()
					return
				}
				let n = this._tail,
					r = this.size
				for (; n && r > t; ) this._map.delete(n.key), (n = n.previous), r--
				;(this._tail = n), (this._size = r), n && (n.next = void 0), this._state++
			}
			addItemFirst(t) {
				if (!this._head && !this._tail) this._tail = t
				else if (this._head) (t.next = this._head), (this._head.previous = t)
				else throw new Error('Invalid list')
				;(this._head = t), this._state++
			}
			addItemLast(t) {
				if (!this._head && !this._tail) this._head = t
				else if (this._tail) (t.previous = this._tail), (this._tail.next = t)
				else throw new Error('Invalid list')
				;(this._tail = t), this._state++
			}
			removeItem(t) {
				if (t === this._head && t === this._tail) (this._head = void 0), (this._tail = void 0)
				else if (t === this._head) {
					if (!t.next) throw new Error('Invalid list')
					;(t.next.previous = void 0), (this._head = t.next)
				} else if (t === this._tail) {
					if (!t.previous) throw new Error('Invalid list')
					;(t.previous.next = void 0), (this._tail = t.previous)
				} else {
					let n = t.next,
						r = t.previous
					if (!n || !r) throw new Error('Invalid list')
					;(n.previous = r), (r.next = n)
				}
				;(t.next = void 0), (t.previous = void 0), this._state++
			}
			touch(t, n) {
				if (!this._head || !this._tail) throw new Error('Invalid list')
				if (!(n !== 1 && n !== 2)) {
					if (n === 1) {
						if (t === this._head) return
						let r = t.next,
							i = t.previous
						t === this._tail
							? ((i.next = void 0), (this._tail = i))
							: ((r.previous = i), (i.next = r)),
							(t.previous = void 0),
							(t.next = this._head),
							(this._head.previous = t),
							(this._head = t),
							this._state++
					} else if (n === 2) {
						if (t === this._tail) return
						let r = t.next,
							i = t.previous
						t === this._head
							? ((r.previous = void 0), (this._head = r))
							: ((r.previous = i), (i.next = r)),
							(t.next = void 0),
							(t.previous = this._tail),
							(this._tail.next = t),
							(this._tail = t),
							this._state++
					}
				}
			}
			toJSON() {
				let t = []
				return (
					this.forEach((n, r) => {
						t.push([r, n])
					}),
					t
				)
			}
			fromJSON(t) {
				this.clear()
				for (let [n, r] of t) this.set(n, r)
			}
		},
		Ul = class extends Vl {
			constructor(t, n = 1) {
				super(), (this._limit = t), (this._ratio = Math.min(Math.max(0, n), 1))
			}
			get limit() {
				return this._limit
			}
			set limit(t) {
				;(this._limit = t), this.checkTrim()
			}
			get(t, n = 2) {
				return super.get(t, n)
			}
			peek(t) {
				return super.get(t, 0)
			}
			set(t, n) {
				return super.set(t, n, 2), this
			}
			checkTrim() {
				this.size > this._limit && this.trim(Math.round(this._limit * this._ratio))
			}
		},
		na = class extends Ul {
			constructor(t, n = 1) {
				super(t, n)
			}
			trim(t) {
				this.trimOld(t)
			}
			set(t, n) {
				return super.set(t, n), this.checkTrim(), this
			}
		}
	var ra = class {
		constructor() {
			this.map = new Map()
		}
		add(t, n) {
			let r = this.map.get(t)
			r || ((r = new Set()), this.map.set(t, r)), r.add(n)
		}
		delete(t, n) {
			let r = this.map.get(t)
			r && (r.delete(n), r.size === 0 && this.map.delete(t))
		}
		forEach(t, n) {
			let r = this.map.get(t)
			r && r.forEach(n)
		}
		get(t) {
			let n = this.map.get(t)
			return n || new Set()
		}
	}
	var U6 = new na(10)
	function g5(e) {
		let t = []
		for (; Object.prototype !== e; )
			(t = t.concat(Object.getOwnPropertyNames(e))), (e = Object.getPrototypeOf(e))
		return t
	}
	function $l(e) {
		let t = []
		for (let n of g5(e)) typeof e[n] == 'function' && t.push(n)
		return t
	}
	function Tp(e, t) {
		let n = (i) =>
				function () {
					let s = Array.prototype.slice.call(arguments, 0)
					return t(i, s)
				},
			r = {}
		for (let i of e) r[i] = n(i)
		return r
	}
	var Sp
	;(function (e) {
		;(e[(e.Left = 1)] = 'Left'),
			(e[(e.Center = 2)] = 'Center'),
			(e[(e.Right = 4)] = 'Right'),
			(e[(e.Full = 7)] = 'Full')
	})(Sp || (Sp = {}))
	var Ap
	;(function (e) {
		;(e[(e.Left = 1)] = 'Left'), (e[(e.Center = 2)] = 'Center'), (e[(e.Right = 3)] = 'Right')
	})(Ap || (Ap = {}))
	var Fp
	;(function (e) {
		;(e[(e.Both = 0)] = 'Both'),
			(e[(e.Right = 1)] = 'Right'),
			(e[(e.Left = 2)] = 'Left'),
			(e[(e.None = 3)] = 'None')
	})(Fp || (Fp = {}))
	function D5(e, t, n, r, i) {
		if (r === 0) return !0
		let s = t.charCodeAt(r - 1)
		if (e.get(s) !== 0 || s === 13 || s === 10) return !0
		if (i > 0) {
			let o = t.charCodeAt(r)
			if (e.get(o) !== 0) return !0
		}
		return !1
	}
	function v5(e, t, n, r, i) {
		if (r + i === n) return !0
		let s = t.charCodeAt(r + i)
		if (e.get(s) !== 0 || s === 13 || s === 10) return !0
		if (i > 0) {
			let o = t.charCodeAt(r + i - 1)
			if (e.get(o) !== 0) return !0
		}
		return !1
	}
	function b5(e, t, n, r, i) {
		return D5(e, t, n, r, i) && v5(e, t, n, r, i)
	}
	var ia = class {
		constructor(t, n) {
			;(this._wordSeparators = t),
				(this._searchRegex = n),
				(this._prevMatchStartIndex = -1),
				(this._prevMatchLength = 0)
		}
		reset(t) {
			;(this._searchRegex.lastIndex = t),
				(this._prevMatchStartIndex = -1),
				(this._prevMatchLength = 0)
		}
		next(t) {
			let n = t.length,
				r
			do {
				if (
					this._prevMatchStartIndex + this._prevMatchLength === n ||
					((r = this._searchRegex.exec(t)), !r)
				)
					return null
				let i = r.index,
					s = r[0].length
				if (i === this._prevMatchStartIndex && s === this._prevMatchLength) {
					if (s === 0) {
						Wf(t, n, this._searchRegex.lastIndex) > 65535
							? (this._searchRegex.lastIndex += 2)
							: (this._searchRegex.lastIndex += 1)
						continue
					}
					return null
				}
				if (
					((this._prevMatchStartIndex = i),
					(this._prevMatchLength = s),
					!this._wordSeparators || b5(this._wordSeparators, t, n, i, s))
				)
					return r
			} while (r)
			return null
		}
	}
	function wp(e, t = 'Unreachable') {
		throw new Error(t)
	}
	function Nr(e) {
		if (!e()) {
			debugger
			e(), In(new it('Assertion Failed'))
		}
	}
	function Ls(e, t) {
		let n = 0
		for (; n < e.length - 1; ) {
			let r = e[n],
				i = e[n + 1]
			if (!t(r, i)) return !1
			n++
		}
		return !0
	}
	var E5 = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'
	function y5(e = '') {
		let t = '(-?\\d*\\.\\d\\w*)|([^'
		for (let n of E5) e.indexOf(n) >= 0 || (t += '\\' + n)
		return (t += '\\s]+)'), new RegExp(t, 'g')
	}
	var jl = y5()
	function ql(e) {
		let t = jl
		if (e && e instanceof RegExp)
			if (e.global) t = e
			else {
				let n = 'g'
				e.ignoreCase && (n += 'i'),
					e.multiline && (n += 'm'),
					e.unicode && (n += 'u'),
					(t = new RegExp(e.source, n))
			}
		return (t.lastIndex = 0), t
	}
	var Lp = new gs()
	Lp.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 })
	function Cs(e, t, n, r, i) {
		if (((t = ql(t)), i || (i = ii.first(Lp)), n.length > i.maxLen)) {
			let l = e - i.maxLen / 2
			return l < 0 ? (l = 0) : (r += l), (n = n.substring(l, e + i.maxLen / 2)), Cs(e, t, n, r, i)
		}
		let s = Date.now(),
			o = e - 1 - r,
			a = -1,
			u = null
		for (let l = 1; !(Date.now() - s >= i.timeBudget); l++) {
			let c = o - i.windowSize * l
			t.lastIndex = Math.max(0, c)
			let d = x5(t, n, o, a)
			if ((!d && u) || ((u = d), c <= 0)) break
			a = c
		}
		if (u) {
			let l = { word: u[0], startColumn: r + 1 + u.index, endColumn: r + 1 + u.index + u[0].length }
			return (t.lastIndex = 0), l
		}
		return null
	}
	function x5(e, t, n, r) {
		let i
		for (; (i = e.exec(t)); ) {
			let s = i.index || 0
			if (s <= n && e.lastIndex >= n) return i
			if (r > 0 && s > r) return null
		}
		return null
	}
	var sa = class {
		static computeUnicodeHighlights(t, n, r) {
			let i = r ? r.startLineNumber : 1,
				s = r ? r.endLineNumber : t.getLineCount(),
				o = new oa(n),
				a = o.getCandidateCodePoints(),
				u
			a === 'allNonBasicAscii'
				? (u = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g'))
				: (u = new RegExp(`${_5(Array.from(a))}`, 'g'))
			let l = new ia(null, u),
				c = [],
				d = !1,
				h,
				m = 0,
				g = 0,
				v = 0
			e: for (let N = i, _ = s; N <= _; N++) {
				let w = t.getLineContent(N),
					C = w.length
				l.reset(0)
				do
					if (((h = l.next(w)), h)) {
						let S = h.index,
							k = h.index + h[0].length
						if (S > 0) {
							let L = w.charCodeAt(S - 1)
							di(L) && S--
						}
						if (k + 1 < C) {
							let L = w.charCodeAt(k - 1)
							di(L) && k++
						}
						let M = w.substring(S, k),
							I = Cs(S + 1, jl, w, 0)
						I && I.endColumn <= S + 1 && (I = null)
						let B = o.shouldHighlightNonBasicASCII(M, I ? I.word : null)
						if (B !== 0) {
							B === 3 ? m++ : B === 2 ? g++ : B === 1 ? v++ : wp(B)
							let L = 1e3
							if (c.length >= L) {
								d = !0
								break e
							}
							c.push(new oe(N, S + 1, N, k + 1))
						}
					}
				while (h)
			}
			return {
				ranges: c,
				hasMore: d,
				ambiguousCharacterCount: m,
				invisibleCharacterCount: g,
				nonBasicAsciiCharacterCount: v
			}
		}
		static computeUnicodeHighlightReason(t, n) {
			let r = new oa(n)
			switch (r.shouldHighlightNonBasicASCII(t, null)) {
				case 0:
					return null
				case 2:
					return { kind: 1 }
				case 3: {
					let s = t.codePointAt(0),
						o = r.ambiguousCharacters.getPrimaryConfusable(s),
						a = ci
							.getLocales()
							.filter((u) => !ci.getInstance(new Set([...n.allowedLocales, u])).isAmbiguous(s))
					return { kind: 0, confusableWith: String.fromCodePoint(o), notAmbiguousInLocales: a }
				}
				case 1:
					return { kind: 2 }
			}
		}
	}
	function _5(e, t) {
		return `[${jf(e.map((r) => String.fromCodePoint(r)).join(''))}]`
	}
	var oa = class {
		constructor(t) {
			;(this.options = t),
				(this.allowedCodePoints = new Set(t.allowedCodePoints)),
				(this.ambiguousCharacters = ci.getInstance(new Set(t.allowedLocales)))
		}
		getCandidateCodePoints() {
			if (this.options.nonBasicASCII) return 'allNonBasicAscii'
			let t = new Set()
			if (this.options.invisibleCharacters)
				for (let n of fi.codePoints) Cp(String.fromCodePoint(n)) || t.add(n)
			if (this.options.ambiguousCharacters)
				for (let n of this.ambiguousCharacters.getConfusableCodePoints()) t.add(n)
			for (let n of this.allowedCodePoints) t.delete(n)
			return t
		}
		shouldHighlightNonBasicASCII(t, n) {
			let r = t.codePointAt(0)
			if (this.allowedCodePoints.has(r)) return 0
			if (this.options.nonBasicASCII) return 1
			let i = !1,
				s = !1
			if (n)
				for (let o of n) {
					let a = o.codePointAt(0),
						u = Qf(o)
					;(i = i || u),
						!u &&
							!this.ambiguousCharacters.isAmbiguous(a) &&
							!fi.isInvisibleCharacter(a) &&
							(s = !0)
				}
			return !i && s
				? 0
				: this.options.invisibleCharacters && !Cp(t) && fi.isInvisibleCharacter(r)
				? 2
				: this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(r)
				? 3
				: 0
		}
	}
	function Cp(e) {
		return (
			e === ' ' ||
			e ===
				`
` ||
			e === '	'
		)
	}
	var ar = class {
			constructor(t, n, r) {
				;(this.changes = t), (this.moves = n), (this.hitTimeout = r)
			}
		},
		aa = class {
			constructor(t, n) {
				;(this.lineRangeMapping = t), (this.changes = n)
			}
		}
	var Ee = class e {
		static addRange(t, n) {
			let r = 0
			for (; r < n.length && n[r].endExclusive < t.start; ) r++
			let i = r
			for (; i < n.length && n[i].start <= t.endExclusive; ) i++
			if (r === i) n.splice(r, 0, t)
			else {
				let s = Math.min(t.start, n[r].start),
					o = Math.max(t.endExclusive, n[i - 1].endExclusive)
				n.splice(r, i - r, new e(s, o))
			}
		}
		static tryCreate(t, n) {
			if (!(t > n)) return new e(t, n)
		}
		static ofLength(t) {
			return new e(0, t)
		}
		static ofStartAndLength(t, n) {
			return new e(t, t + n)
		}
		constructor(t, n) {
			if (((this.start = t), (this.endExclusive = n), t > n))
				throw new it(`Invalid range: ${this.toString()}`)
		}
		get isEmpty() {
			return this.start === this.endExclusive
		}
		delta(t) {
			return new e(this.start + t, this.endExclusive + t)
		}
		deltaStart(t) {
			return new e(this.start + t, this.endExclusive)
		}
		deltaEnd(t) {
			return new e(this.start, this.endExclusive + t)
		}
		get length() {
			return this.endExclusive - this.start
		}
		toString() {
			return `[${this.start}, ${this.endExclusive})`
		}
		contains(t) {
			return this.start <= t && t < this.endExclusive
		}
		join(t) {
			return new e(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive))
		}
		intersect(t) {
			let n = Math.max(this.start, t.start),
				r = Math.min(this.endExclusive, t.endExclusive)
			if (n <= r) return new e(n, r)
		}
		intersects(t) {
			let n = Math.max(this.start, t.start),
				r = Math.min(this.endExclusive, t.endExclusive)
			return n < r
		}
		isBefore(t) {
			return this.endExclusive <= t.start
		}
		isAfter(t) {
			return this.start >= t.endExclusive
		}
		slice(t) {
			return t.slice(this.start, this.endExclusive)
		}
		substring(t) {
			return t.substring(this.start, this.endExclusive)
		}
		clip(t) {
			if (this.isEmpty) throw new it(`Invalid clipping range: ${this.toString()}`)
			return Math.max(this.start, Math.min(this.endExclusive - 1, t))
		}
		clipCyclic(t) {
			if (this.isEmpty) throw new it(`Invalid clipping range: ${this.toString()}`)
			return t < this.start
				? this.endExclusive - ((this.start - t) % this.length)
				: t >= this.endExclusive
				? this.start + ((t - this.start) % this.length)
				: t
		}
		forEach(t) {
			for (let n = this.start; n < this.endExclusive; n++) t(n)
		}
	}
	function Mn(e, t) {
		let n = Tr(e, t)
		return n === -1 ? void 0 : e[n]
	}
	function Tr(e, t, n = 0, r = e.length) {
		let i = n,
			s = r
		for (; i < s; ) {
			let o = Math.floor((i + s) / 2)
			t(e[o]) ? (i = o + 1) : (s = o)
		}
		return i - 1
	}
	function Ip(e, t) {
		let n = ua(e, t)
		return n === e.length ? void 0 : e[n]
	}
	function ua(e, t, n = 0, r = e.length) {
		let i = n,
			s = r
		for (; i < s; ) {
			let o = Math.floor((i + s) / 2)
			t(e[o]) ? (s = o) : (i = o + 1)
		}
		return i
	}
	var Is = class e {
		static {
			this.assertInvariants = !1
		}
		constructor(t) {
			;(this._array = t), (this._findLastMonotonousLastIdx = 0)
		}
		findLastMonotonous(t) {
			if (e.assertInvariants) {
				if (this._prevFindLastPredicate) {
					for (let r of this._array)
						if (this._prevFindLastPredicate(r) && !t(r))
							throw new Error(
								'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.'
							)
				}
				this._prevFindLastPredicate = t
			}
			let n = Tr(this._array, t, this._findLastMonotonousLastIdx)
			return (this._findLastMonotonousLastIdx = n + 1), n === -1 ? void 0 : this._array[n]
		}
	}
	var ge = class e {
			static fromRangeInclusive(t) {
				return new e(t.startLineNumber, t.endLineNumber + 1)
			}
			static joinMany(t) {
				if (t.length === 0) return []
				let n = new Sr(t[0].slice())
				for (let r = 1; r < t.length; r++) n = n.getUnion(new Sr(t[r].slice()))
				return n.ranges
			}
			static join(t) {
				if (t.length === 0) throw new it('lineRanges cannot be empty')
				let n = t[0].startLineNumber,
					r = t[0].endLineNumberExclusive
				for (let i = 1; i < t.length; i++)
					(n = Math.min(n, t[i].startLineNumber)), (r = Math.max(r, t[i].endLineNumberExclusive))
				return new e(n, r)
			}
			static ofLength(t, n) {
				return new e(t, t + n)
			}
			static deserialize(t) {
				return new e(t[0], t[1])
			}
			constructor(t, n) {
				if (t > n) throw new it(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`)
				;(this.startLineNumber = t), (this.endLineNumberExclusive = n)
			}
			contains(t) {
				return this.startLineNumber <= t && t < this.endLineNumberExclusive
			}
			get isEmpty() {
				return this.startLineNumber === this.endLineNumberExclusive
			}
			delta(t) {
				return new e(this.startLineNumber + t, this.endLineNumberExclusive + t)
			}
			deltaLength(t) {
				return new e(this.startLineNumber, this.endLineNumberExclusive + t)
			}
			get length() {
				return this.endLineNumberExclusive - this.startLineNumber
			}
			join(t) {
				return new e(
					Math.min(this.startLineNumber, t.startLineNumber),
					Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive)
				)
			}
			toString() {
				return `[${this.startLineNumber},${this.endLineNumberExclusive})`
			}
			intersect(t) {
				let n = Math.max(this.startLineNumber, t.startLineNumber),
					r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive)
				if (n <= r) return new e(n, r)
			}
			intersectsStrict(t) {
				return (
					this.startLineNumber < t.endLineNumberExclusive &&
					t.startLineNumber < this.endLineNumberExclusive
				)
			}
			overlapOrTouch(t) {
				return (
					this.startLineNumber <= t.endLineNumberExclusive &&
					t.startLineNumber <= this.endLineNumberExclusive
				)
			}
			equals(t) {
				return (
					this.startLineNumber === t.startLineNumber &&
					this.endLineNumberExclusive === t.endLineNumberExclusive
				)
			}
			toInclusiveRange() {
				return this.isEmpty
					? null
					: new oe(
							this.startLineNumber,
							1,
							this.endLineNumberExclusive - 1,
							Number.MAX_SAFE_INTEGER
					  )
			}
			toExclusiveRange() {
				return new oe(this.startLineNumber, 1, this.endLineNumberExclusive, 1)
			}
			mapToLineArray(t) {
				let n = []
				for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++) n.push(t(r))
				return n
			}
			forEach(t) {
				for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) t(n)
			}
			serialize() {
				return [this.startLineNumber, this.endLineNumberExclusive]
			}
			includes(t) {
				return this.startLineNumber <= t && t < this.endLineNumberExclusive
			}
			toOffsetRange() {
				return new Ee(this.startLineNumber - 1, this.endLineNumberExclusive - 1)
			}
		},
		Sr = class e {
			constructor(t = []) {
				this._normalizedRanges = t
			}
			get ranges() {
				return this._normalizedRanges
			}
			addRange(t) {
				if (t.length === 0) return
				let n = ua(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber),
					r = Tr(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1
				if (n === r) this._normalizedRanges.splice(n, 0, t)
				else if (n === r - 1) {
					let i = this._normalizedRanges[n]
					this._normalizedRanges[n] = i.join(t)
				} else {
					let i = this._normalizedRanges[n].join(this._normalizedRanges[r - 1]).join(t)
					this._normalizedRanges.splice(n, r - n, i)
				}
			}
			contains(t) {
				let n = Mn(this._normalizedRanges, (r) => r.startLineNumber <= t)
				return !!n && n.endLineNumberExclusive > t
			}
			intersects(t) {
				let n = Mn(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive)
				return !!n && n.endLineNumberExclusive > t.startLineNumber
			}
			getUnion(t) {
				if (this._normalizedRanges.length === 0) return t
				if (t._normalizedRanges.length === 0) return this
				let n = [],
					r = 0,
					i = 0,
					s = null
				for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length; ) {
					let o = null
					if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
						let a = this._normalizedRanges[r],
							u = t._normalizedRanges[i]
						a.startLineNumber < u.startLineNumber ? ((o = a), r++) : ((o = u), i++)
					} else
						r < this._normalizedRanges.length
							? ((o = this._normalizedRanges[r]), r++)
							: ((o = t._normalizedRanges[i]), i++)
					s === null
						? (s = o)
						: s.endLineNumberExclusive >= o.startLineNumber
						? (s = new ge(
								s.startLineNumber,
								Math.max(s.endLineNumberExclusive, o.endLineNumberExclusive)
						  ))
						: (n.push(s), (s = o))
				}
				return s !== null && n.push(s), new e(n)
			}
			subtractFrom(t) {
				let n = ua(this._normalizedRanges, (o) => o.endLineNumberExclusive >= t.startLineNumber),
					r = Tr(this._normalizedRanges, (o) => o.startLineNumber <= t.endLineNumberExclusive) + 1
				if (n === r) return new e([t])
				let i = [],
					s = t.startLineNumber
				for (let o = n; o < r; o++) {
					let a = this._normalizedRanges[o]
					a.startLineNumber > s && i.push(new ge(s, a.startLineNumber)),
						(s = a.endLineNumberExclusive)
				}
				return s < t.endLineNumberExclusive && i.push(new ge(s, t.endLineNumberExclusive)), new e(i)
			}
			toString() {
				return this._normalizedRanges.map((t) => t.toString()).join(', ')
			}
			getIntersection(t) {
				let n = [],
					r = 0,
					i = 0
				for (; r < this._normalizedRanges.length && i < t._normalizedRanges.length; ) {
					let s = this._normalizedRanges[r],
						o = t._normalizedRanges[i],
						a = s.intersect(o)
					a && !a.isEmpty && n.push(a),
						s.endLineNumberExclusive < o.endLineNumberExclusive ? r++ : i++
				}
				return new e(n)
			}
			getWithDelta(t) {
				return new e(this._normalizedRanges.map((n) => n.delta(t)))
			}
		}
	var la = class e {
		static {
			this.zero = new e(0, 0)
		}
		static betweenPositions(t, n) {
			return t.lineNumber === n.lineNumber
				? new e(0, n.column - t.column)
				: new e(n.lineNumber - t.lineNumber, n.column - 1)
		}
		static ofRange(t) {
			return e.betweenPositions(t.getStartPosition(), t.getEndPosition())
		}
		static ofText(t) {
			let n = 0,
				r = 0
			for (let i of t)
				i ===
				`
`
					? (n++, (r = 0))
					: r++
			return new e(n, r)
		}
		constructor(t, n) {
			;(this.lineCount = t), (this.columnCount = n)
		}
		isGreaterThanOrEqualTo(t) {
			return this.lineCount !== t.lineCount
				? this.lineCount > t.lineCount
				: this.columnCount >= t.columnCount
		}
		createRange(t) {
			return this.lineCount === 0
				? new oe(t.lineNumber, t.column, t.lineNumber, t.column + this.columnCount)
				: new oe(t.lineNumber, t.column, t.lineNumber + this.lineCount, this.columnCount + 1)
		}
		addToPosition(t) {
			return this.lineCount === 0
				? new Se(t.lineNumber, t.column + this.columnCount)
				: new Se(t.lineNumber + this.lineCount, this.columnCount + 1)
		}
		toString() {
			return `${this.lineCount},${this.columnCount}`
		}
	}
	var ca = class {
		constructor(t, n) {
			;(this.range = t), (this.text = n)
		}
		toSingleEditOperation() {
			return { range: this.range, text: this.text }
		}
	}
	var pn = class e {
		static inverse(t, n, r) {
			let i = [],
				s = 1,
				o = 1
			for (let u of t) {
				let l = new e(new ge(s, u.original.startLineNumber), new ge(o, u.modified.startLineNumber))
				l.modified.isEmpty || i.push(l),
					(s = u.original.endLineNumberExclusive),
					(o = u.modified.endLineNumberExclusive)
			}
			let a = new e(new ge(s, n + 1), new ge(o, r + 1))
			return a.modified.isEmpty || i.push(a), i
		}
		static clip(t, n, r) {
			let i = []
			for (let s of t) {
				let o = s.original.intersect(n),
					a = s.modified.intersect(r)
				o && !o.isEmpty && a && !a.isEmpty && i.push(new e(o, a))
			}
			return i
		}
		constructor(t, n) {
			;(this.original = t), (this.modified = n)
		}
		toString() {
			return `{${this.original.toString()}->${this.modified.toString()}}`
		}
		flip() {
			return new e(this.modified, this.original)
		}
		join(t) {
			return new e(this.original.join(t.original), this.modified.join(t.modified))
		}
		toRangeMapping() {
			let t = this.original.toInclusiveRange(),
				n = this.modified.toInclusiveRange()
			if (t && n) return new Ot(t, n)
			if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
				if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
					throw new it('not a valid diff')
				return new Ot(
					new oe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1),
					new oe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1)
				)
			} else
				return new Ot(
					new oe(
						this.original.startLineNumber - 1,
						Number.MAX_SAFE_INTEGER,
						this.original.endLineNumberExclusive - 1,
						Number.MAX_SAFE_INTEGER
					),
					new oe(
						this.modified.startLineNumber - 1,
						Number.MAX_SAFE_INTEGER,
						this.modified.endLineNumberExclusive - 1,
						Number.MAX_SAFE_INTEGER
					)
				)
		}
		toRangeMapping2(t, n) {
			if (
				Rp(this.original.endLineNumberExclusive, t) &&
				Rp(this.modified.endLineNumberExclusive, n)
			)
				return new Ot(
					new oe(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1),
					new oe(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1)
				)
			if (!this.original.isEmpty && !this.modified.isEmpty)
				return new Ot(
					oe.fromPositions(
						new Se(this.original.startLineNumber, 1),
						mi(new Se(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)
					),
					oe.fromPositions(
						new Se(this.modified.startLineNumber, 1),
						mi(new Se(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)
					)
				)
			if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
				return new Ot(
					oe.fromPositions(
						mi(new Se(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t),
						mi(new Se(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)
					),
					oe.fromPositions(
						mi(new Se(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n),
						mi(new Se(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)
					)
				)
			throw new it()
		}
	}
	function mi(e, t) {
		if (e.lineNumber < 1) return new Se(1, 1)
		if (e.lineNumber > t.length) return new Se(t.length, t[t.length - 1].length + 1)
		let n = t[e.lineNumber - 1]
		return e.column > n.length + 1 ? new Se(e.lineNumber, n.length + 1) : e
	}
	function Rp(e, t) {
		return e >= 1 && e <= t.length
	}
	var Pn = class e extends pn {
			static fromRangeMappings(t) {
				let n = ge.join(t.map((i) => ge.fromRangeInclusive(i.originalRange))),
					r = ge.join(t.map((i) => ge.fromRangeInclusive(i.modifiedRange)))
				return new e(n, r, t)
			}
			constructor(t, n, r) {
				super(t, n), (this.innerChanges = r)
			}
			flip() {
				return new e(
					this.modified,
					this.original,
					this.innerChanges?.map((t) => t.flip())
				)
			}
			withInnerChangesFromLineRanges() {
				return new e(this.original, this.modified, [this.toRangeMapping()])
			}
		},
		Ot = class e {
			static assertSorted(t) {
				for (let n = 1; n < t.length; n++) {
					let r = t[n - 1],
						i = t[n]
					if (
						!(
							r.originalRange
								.getEndPosition()
								.isBeforeOrEqual(i.originalRange.getStartPosition()) &&
							r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition())
						)
					)
						throw new it('Range mappings must be sorted')
				}
			}
			constructor(t, n) {
				;(this.originalRange = t), (this.modifiedRange = n)
			}
			toString() {
				return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`
			}
			flip() {
				return new e(this.modifiedRange, this.originalRange)
			}
			toTextEdit(t) {
				let n = t.getValueOfRange(this.modifiedRange)
				return new ca(this.originalRange, n)
			}
		}
	var N5 = 3,
		fa = class {
			computeDiff(t, n, r) {
				let s = new Hl(t, n, {
						maxComputationTime: r.maxComputationTimeMs,
						shouldIgnoreTrimWhitespace: r.ignoreTrimWhitespace,
						shouldComputeCharChanges: !0,
						shouldMakePrettyDiff: !0,
						shouldPostProcessCharChanges: !0
					}).computeDiff(),
					o = [],
					a = null
				for (let u of s.changes) {
					let l
					u.originalEndLineNumber === 0
						? (l = new ge(u.originalStartLineNumber + 1, u.originalStartLineNumber + 1))
						: (l = new ge(u.originalStartLineNumber, u.originalEndLineNumber + 1))
					let c
					u.modifiedEndLineNumber === 0
						? (c = new ge(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1))
						: (c = new ge(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1))
					let d = new Pn(
						l,
						c,
						u.charChanges?.map(
							(h) =>
								new Ot(
									new oe(
										h.originalStartLineNumber,
										h.originalStartColumn,
										h.originalEndLineNumber,
										h.originalEndColumn
									),
									new oe(
										h.modifiedStartLineNumber,
										h.modifiedStartColumn,
										h.modifiedEndLineNumber,
										h.modifiedEndColumn
									)
								)
						)
					)
					a &&
						(a.modified.endLineNumberExclusive === d.modified.startLineNumber ||
							a.original.endLineNumberExclusive === d.original.startLineNumber) &&
						((d = new Pn(
							a.original.join(d.original),
							a.modified.join(d.modified),
							a.innerChanges && d.innerChanges ? a.innerChanges.concat(d.innerChanges) : void 0
						)),
						o.pop()),
						o.push(d),
						(a = d)
				}
				return (
					Nr(() =>
						Ls(
							o,
							(u, l) =>
								l.original.startLineNumber - u.original.endLineNumberExclusive ===
									l.modified.startLineNumber - u.modified.endLineNumberExclusive &&
								u.original.endLineNumberExclusive < l.original.startLineNumber &&
								u.modified.endLineNumberExclusive < l.modified.startLineNumber
						)
					),
					new ar(o, [], s.quitEarly)
				)
			}
		}
	function Op(e, t, n, r) {
		return new _s(e, t, n).ComputeDiff(r)
	}
	var da = class {
			constructor(t) {
				let n = [],
					r = []
				for (let i = 0, s = t.length; i < s; i++) (n[i] = Wl(t[i], 1)), (r[i] = Ql(t[i], 1))
				;(this.lines = t), (this._startColumns = n), (this._endColumns = r)
			}
			getElements() {
				let t = []
				for (let n = 0, r = this.lines.length; n < r; n++)
					t[n] = this.lines[n].substring(this._startColumns[n] - 1, this._endColumns[n] - 1)
				return t
			}
			getStrictElement(t) {
				return this.lines[t]
			}
			getStartLineNumber(t) {
				return t + 1
			}
			getEndLineNumber(t) {
				return t + 1
			}
			createCharSequence(t, n, r) {
				let i = [],
					s = [],
					o = [],
					a = 0
				for (let u = n; u <= r; u++) {
					let l = this.lines[u],
						c = t ? this._startColumns[u] : 1,
						d = t ? this._endColumns[u] : l.length + 1
					for (let h = c; h < d; h++) (i[a] = l.charCodeAt(h - 1)), (s[a] = u + 1), (o[a] = h), a++
					!t && u < r && ((i[a] = 10), (s[a] = u + 1), (o[a] = l.length + 1), a++)
				}
				return new Gl(i, s, o)
			}
		},
		Gl = class {
			constructor(t, n, r) {
				;(this._charCodes = t), (this._lineNumbers = n), (this._columns = r)
			}
			toString() {
				return (
					'[' +
					this._charCodes
						.map(
							(t, n) =>
								(t === 10 ? '\\n' : String.fromCharCode(t)) +
								`-(${this._lineNumbers[n]},${this._columns[n]})`
						)
						.join(', ') +
					']'
				)
			}
			_assertIndex(t, n) {
				if (t < 0 || t >= n.length) throw new Error('Illegal index')
			}
			getElements() {
				return this._charCodes
			}
			getStartLineNumber(t) {
				return t > 0 && t === this._lineNumbers.length
					? this.getEndLineNumber(t - 1)
					: (this._assertIndex(t, this._lineNumbers), this._lineNumbers[t])
			}
			getEndLineNumber(t) {
				return t === -1
					? this.getStartLineNumber(t + 1)
					: (this._assertIndex(t, this._lineNumbers),
					  this._charCodes[t] === 10 ? this._lineNumbers[t] + 1 : this._lineNumbers[t])
			}
			getStartColumn(t) {
				return t > 0 && t === this._columns.length
					? this.getEndColumn(t - 1)
					: (this._assertIndex(t, this._columns), this._columns[t])
			}
			getEndColumn(t) {
				return t === -1
					? this.getStartColumn(t + 1)
					: (this._assertIndex(t, this._columns),
					  this._charCodes[t] === 10 ? 1 : this._columns[t] + 1)
			}
		},
		gi = class e {
			constructor(t, n, r, i, s, o, a, u) {
				;(this.originalStartLineNumber = t),
					(this.originalStartColumn = n),
					(this.originalEndLineNumber = r),
					(this.originalEndColumn = i),
					(this.modifiedStartLineNumber = s),
					(this.modifiedStartColumn = o),
					(this.modifiedEndLineNumber = a),
					(this.modifiedEndColumn = u)
			}
			static createFromDiffChange(t, n, r) {
				let i = n.getStartLineNumber(t.originalStart),
					s = n.getStartColumn(t.originalStart),
					o = n.getEndLineNumber(t.originalStart + t.originalLength - 1),
					a = n.getEndColumn(t.originalStart + t.originalLength - 1),
					u = r.getStartLineNumber(t.modifiedStart),
					l = r.getStartColumn(t.modifiedStart),
					c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
					d = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)
				return new e(i, s, o, a, u, l, c, d)
			}
		}
	function T5(e) {
		if (e.length <= 1) return e
		let t = [e[0]],
			n = t[0]
		for (let r = 1, i = e.length; r < i; r++) {
			let s = e[r],
				o = s.originalStart - (n.originalStart + n.originalLength),
				a = s.modifiedStart - (n.modifiedStart + n.modifiedLength)
			Math.min(o, a) < N5
				? ((n.originalLength = s.originalStart + s.originalLength - n.originalStart),
				  (n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart))
				: (t.push(s), (n = s))
		}
		return t
	}
	var Rs = class e {
			constructor(t, n, r, i, s) {
				;(this.originalStartLineNumber = t),
					(this.originalEndLineNumber = n),
					(this.modifiedStartLineNumber = r),
					(this.modifiedEndLineNumber = i),
					(this.charChanges = s)
			}
			static createFromDiffResult(t, n, r, i, s, o, a) {
				let u, l, c, d, h
				if (
					(n.originalLength === 0
						? ((u = r.getStartLineNumber(n.originalStart) - 1), (l = 0))
						: ((u = r.getStartLineNumber(n.originalStart)),
						  (l = r.getEndLineNumber(n.originalStart + n.originalLength - 1))),
					n.modifiedLength === 0
						? ((c = i.getStartLineNumber(n.modifiedStart) - 1), (d = 0))
						: ((c = i.getStartLineNumber(n.modifiedStart)),
						  (d = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1))),
					o &&
						n.originalLength > 0 &&
						n.originalLength < 20 &&
						n.modifiedLength > 0 &&
						n.modifiedLength < 20 &&
						s())
				) {
					let m = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
						g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1)
					if (m.getElements().length > 0 && g.getElements().length > 0) {
						let v = Op(m, g, s, !0).changes
						a && (v = T5(v)), (h = [])
						for (let N = 0, _ = v.length; N < _; N++) h.push(gi.createFromDiffChange(v[N], m, g))
					}
				}
				return new e(u, l, c, d, h)
			}
		},
		Hl = class {
			constructor(t, n, r) {
				;(this.shouldComputeCharChanges = r.shouldComputeCharChanges),
					(this.shouldPostProcessCharChanges = r.shouldPostProcessCharChanges),
					(this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace),
					(this.shouldMakePrettyDiff = r.shouldMakePrettyDiff),
					(this.originalLines = t),
					(this.modifiedLines = n),
					(this.original = new da(t)),
					(this.modified = new da(n)),
					(this.continueLineDiff = kp(r.maxComputationTime)),
					(this.continueCharDiff = kp(
						r.maxComputationTime === 0 ? 0 : Math.min(r.maxComputationTime, 5e3)
					))
			}
			computeDiff() {
				if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
					return this.modified.lines.length === 1 && this.modified.lines[0].length === 0
						? { quitEarly: !1, changes: [] }
						: {
								quitEarly: !1,
								changes: [
									{
										originalStartLineNumber: 1,
										originalEndLineNumber: 1,
										modifiedStartLineNumber: 1,
										modifiedEndLineNumber: this.modified.lines.length,
										charChanges: void 0
									}
								]
						  }
				if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
					return {
						quitEarly: !1,
						changes: [
							{
								originalStartLineNumber: 1,
								originalEndLineNumber: this.original.lines.length,
								modifiedStartLineNumber: 1,
								modifiedEndLineNumber: 1,
								charChanges: void 0
							}
						]
					}
				let t = Op(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff),
					n = t.changes,
					r = t.quitEarly
				if (this.shouldIgnoreTrimWhitespace) {
					let a = []
					for (let u = 0, l = n.length; u < l; u++)
						a.push(
							Rs.createFromDiffResult(
								this.shouldIgnoreTrimWhitespace,
								n[u],
								this.original,
								this.modified,
								this.continueCharDiff,
								this.shouldComputeCharChanges,
								this.shouldPostProcessCharChanges
							)
						)
					return { quitEarly: r, changes: a }
				}
				let i = [],
					s = 0,
					o = 0
				for (let a = -1, u = n.length; a < u; a++) {
					let l = a + 1 < u ? n[a + 1] : null,
						c = l ? l.originalStart : this.originalLines.length,
						d = l ? l.modifiedStart : this.modifiedLines.length
					for (; s < c && o < d; ) {
						let h = this.originalLines[s],
							m = this.modifiedLines[o]
						if (h !== m) {
							{
								let g = Wl(h, 1),
									v = Wl(m, 1)
								for (; g > 1 && v > 1; ) {
									let N = h.charCodeAt(g - 2),
										_ = m.charCodeAt(v - 2)
									if (N !== _) break
									g--, v--
								}
								;(g > 1 || v > 1) && this._pushTrimWhitespaceCharChange(i, s + 1, 1, g, o + 1, 1, v)
							}
							{
								let g = Ql(h, 1),
									v = Ql(m, 1),
									N = h.length + 1,
									_ = m.length + 1
								for (; g < N && v < _; ) {
									let w = h.charCodeAt(g - 1),
										C = h.charCodeAt(v - 1)
									if (w !== C) break
									g++, v++
								}
								;(g < N || v < _) && this._pushTrimWhitespaceCharChange(i, s + 1, g, N, o + 1, v, _)
							}
						}
						s++, o++
					}
					l &&
						(i.push(
							Rs.createFromDiffResult(
								this.shouldIgnoreTrimWhitespace,
								l,
								this.original,
								this.modified,
								this.continueCharDiff,
								this.shouldComputeCharChanges,
								this.shouldPostProcessCharChanges
							)
						),
						(s += l.originalLength),
						(o += l.modifiedLength))
				}
				return { quitEarly: r, changes: i }
			}
			_pushTrimWhitespaceCharChange(t, n, r, i, s, o, a) {
				if (this._mergeTrimWhitespaceCharChange(t, n, r, i, s, o, a)) return
				let u
				this.shouldComputeCharChanges && (u = [new gi(n, r, n, i, s, o, s, a)]),
					t.push(new Rs(n, n, s, s, u))
			}
			_mergeTrimWhitespaceCharChange(t, n, r, i, s, o, a) {
				let u = t.length
				if (u === 0) return !1
				let l = t[u - 1]
				return l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0
					? !1
					: l.originalEndLineNumber === n && l.modifiedEndLineNumber === s
					? (this.shouldComputeCharChanges &&
							l.charChanges &&
							l.charChanges.push(new gi(n, r, n, i, s, o, s, a)),
					  !0)
					: l.originalEndLineNumber + 1 === n && l.modifiedEndLineNumber + 1 === s
					? ((l.originalEndLineNumber = n),
					  (l.modifiedEndLineNumber = s),
					  this.shouldComputeCharChanges &&
							l.charChanges &&
							l.charChanges.push(new gi(n, r, n, i, s, o, s, a)),
					  !0)
					: !1
			}
		}
	function Wl(e, t) {
		let n = Gf(e)
		return n === -1 ? t : n + 1
	}
	function Ql(e, t) {
		let n = Hf(e)
		return n === -1 ? t : n + 2
	}
	function kp(e) {
		if (e === 0) return () => !0
		let t = Date.now()
		return () => Date.now() - t < e
	}
	function Pp(e, t, n = (r, i) => r === i) {
		if (e === t) return !0
		if (!e || !t || e.length !== t.length) return !1
		for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1
		return !0
	}
	function* Bp(e, t) {
		let n, r
		for (let i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), (n = [i])), (r = i)
		n && (yield n)
	}
	function Vp(e, t) {
		for (let n = 0; n <= e.length; n++)
			t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n])
	}
	function Up(e, t) {
		for (let n = 0; n < e.length; n++)
			t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1])
	}
	function $p(e, t) {
		for (let n of t) e.push(n)
	}
	var zl
	;(function (e) {
		function t(s) {
			return s < 0
		}
		e.isLessThan = t
		function n(s) {
			return s <= 0
		}
		e.isLessThanOrEqual = n
		function r(s) {
			return s > 0
		}
		e.isGreaterThan = r
		function i(s) {
			return s === 0
		}
		;(e.isNeitherLessOrGreaterThan = i),
			(e.greaterThan = 1),
			(e.lessThan = -1),
			(e.neitherLessOrGreaterThan = 0)
	})(zl || (zl = {}))
	function ks(e, t) {
		return (n, r) => t(e(n), e(r))
	}
	var Os = (e, t) => e - t
	function jp(e) {
		return (t, n) => -e(t, n)
	}
	var Mp = class e {
		static {
			this.empty = new e((t) => {})
		}
		constructor(t) {
			this.iterate = t
		}
		toArray() {
			let t = []
			return this.iterate((n) => (t.push(n), !0)), t
		}
		filter(t) {
			return new e((n) => this.iterate((r) => (t(r) ? n(r) : !0)))
		}
		map(t) {
			return new e((n) => this.iterate((r) => n(t(r))))
		}
		findLast(t) {
			let n
			return this.iterate((r) => (t(r) && (n = r), !0)), n
		}
		findLastMaxBy(t) {
			let n,
				r = !0
			return this.iterate((i) => ((r || zl.isGreaterThan(t(i, n))) && ((r = !1), (n = i)), !0)), n
		}
	}
	var mn = class e {
			static trivial(t, n) {
				return new e([new Pe(Ee.ofLength(t.length), Ee.ofLength(n.length))], !1)
			}
			static trivialTimedOut(t, n) {
				return new e([new Pe(Ee.ofLength(t.length), Ee.ofLength(n.length))], !0)
			}
			constructor(t, n) {
				;(this.diffs = t), (this.hitTimeout = n)
			}
		},
		Pe = class e {
			static invert(t, n) {
				let r = []
				return (
					Vp(t, (i, s) => {
						r.push(
							e.fromOffsetPairs(
								i ? i.getEndExclusives() : hn.zero,
								s
									? s.getStarts()
									: new hn(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)
							)
						)
					}),
					r
				)
			}
			static fromOffsetPairs(t, n) {
				return new e(new Ee(t.offset1, n.offset1), new Ee(t.offset2, n.offset2))
			}
			static assertSorted(t) {
				let n
				for (let r of t) {
					if (
						n &&
						!(
							n.seq1Range.endExclusive <= r.seq1Range.start &&
							n.seq2Range.endExclusive <= r.seq2Range.start
						)
					)
						throw new it('Sequence diffs must be sorted')
					n = r
				}
			}
			constructor(t, n) {
				;(this.seq1Range = t), (this.seq2Range = n)
			}
			swap() {
				return new e(this.seq2Range, this.seq1Range)
			}
			toString() {
				return `${this.seq1Range} <-> ${this.seq2Range}`
			}
			join(t) {
				return new e(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range))
			}
			delta(t) {
				return t === 0 ? this : new e(this.seq1Range.delta(t), this.seq2Range.delta(t))
			}
			deltaStart(t) {
				return t === 0 ? this : new e(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t))
			}
			deltaEnd(t) {
				return t === 0 ? this : new e(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t))
			}
			intersect(t) {
				let n = this.seq1Range.intersect(t.seq1Range),
					r = this.seq2Range.intersect(t.seq2Range)
				if (!(!n || !r)) return new e(n, r)
			}
			getStarts() {
				return new hn(this.seq1Range.start, this.seq2Range.start)
			}
			getEndExclusives() {
				return new hn(this.seq1Range.endExclusive, this.seq2Range.endExclusive)
			}
		},
		hn = class e {
			static {
				this.zero = new e(0, 0)
			}
			static {
				this.max = new e(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
			}
			constructor(t, n) {
				;(this.offset1 = t), (this.offset2 = n)
			}
			toString() {
				return `${this.offset1} <-> ${this.offset2}`
			}
			delta(t) {
				return t === 0 ? this : new e(this.offset1 + t, this.offset2 + t)
			}
			equals(t) {
				return this.offset1 === t.offset1 && this.offset2 === t.offset2
			}
		},
		ur = class e {
			static {
				this.instance = new e()
			}
			isValid() {
				return !0
			}
		},
		pa = class {
			constructor(t) {
				if (((this.timeout = t), (this.startTime = Date.now()), (this.valid = !0), t <= 0))
					throw new it('timeout must be positive')
			}
			isValid() {
				if (!(Date.now() - this.startTime < this.timeout) && this.valid) {
					this.valid = !1
					debugger
				}
				return this.valid
			}
		}
	var Di = class {
		constructor(t, n) {
			;(this.width = t), (this.height = n), (this.array = []), (this.array = new Array(t * n))
		}
		get(t, n) {
			return this.array[t + n * this.width]
		}
		set(t, n, r) {
			this.array[t + n * this.width] = r
		}
	}
	function Ps(e) {
		return e === 32 || e === 9
	}
	var Ms = class e {
		static {
			this.chrKeys = new Map()
		}
		static getKey(t) {
			let n = this.chrKeys.get(t)
			return n === void 0 && ((n = this.chrKeys.size), this.chrKeys.set(t, n)), n
		}
		constructor(t, n, r) {
			;(this.range = t), (this.lines = n), (this.source = r), (this.histogram = [])
			let i = 0
			for (let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++) {
				let o = n[s]
				for (let u = 0; u < o.length; u++) {
					i++
					let l = o[u],
						c = e.getKey(l)
					this.histogram[c] = (this.histogram[c] || 0) + 1
				}
				i++
				let a = e.getKey(`
`)
				this.histogram[a] = (this.histogram[a] || 0) + 1
			}
			this.totalCount = i
		}
		computeSimilarity(t) {
			let n = 0,
				r = Math.max(this.histogram.length, t.histogram.length)
			for (let i = 0; i < r; i++) n += Math.abs((this.histogram[i] ?? 0) - (t.histogram[i] ?? 0))
			return 1 - n / (this.totalCount + t.totalCount)
		}
	}
	var ha = class {
		compute(t, n, r = ur.instance, i) {
			if (t.length === 0 || n.length === 0) return mn.trivial(t, n)
			let s = new Di(t.length, n.length),
				o = new Di(t.length, n.length),
				a = new Di(t.length, n.length)
			for (let g = 0; g < t.length; g++)
				for (let v = 0; v < n.length; v++) {
					if (!r.isValid()) return mn.trivialTimedOut(t, n)
					let N = g === 0 ? 0 : s.get(g - 1, v),
						_ = v === 0 ? 0 : s.get(g, v - 1),
						w
					t.getElement(g) === n.getElement(v)
						? (g === 0 || v === 0 ? (w = 0) : (w = s.get(g - 1, v - 1)),
						  g > 0 && v > 0 && o.get(g - 1, v - 1) === 3 && (w += a.get(g - 1, v - 1)),
						  (w += i ? i(g, v) : 1))
						: (w = -1)
					let C = Math.max(N, _, w)
					if (C === w) {
						let S = g > 0 && v > 0 ? a.get(g - 1, v - 1) : 0
						a.set(g, v, S + 1), o.set(g, v, 3)
					} else
						C === N ? (a.set(g, v, 0), o.set(g, v, 1)) : C === _ && (a.set(g, v, 0), o.set(g, v, 2))
					s.set(g, v, C)
				}
			let u = [],
				l = t.length,
				c = n.length
			function d(g, v) {
				;(g + 1 !== l || v + 1 !== c) && u.push(new Pe(new Ee(g + 1, l), new Ee(v + 1, c))),
					(l = g),
					(c = v)
			}
			let h = t.length - 1,
				m = n.length - 1
			for (; h >= 0 && m >= 0; )
				o.get(h, m) === 3 ? (d(h, m), h--, m--) : o.get(h, m) === 1 ? h-- : m--
			return d(-1, -1), u.reverse(), new mn(u, !1)
		}
	}
	var vi = class {
			compute(t, n, r = ur.instance) {
				if (t.length === 0 || n.length === 0) return mn.trivial(t, n)
				let i = t,
					s = n
				function o(v, N) {
					for (; v < i.length && N < s.length && i.getElement(v) === s.getElement(N); ) v++, N++
					return v
				}
				let a = 0,
					u = new Yl()
				u.set(0, o(0, 0))
				let l = new Jl()
				l.set(0, u.get(0) === 0 ? null : new ma(null, 0, 0, u.get(0)))
				let c = 0
				e: for (;;) {
					if ((a++, !r.isValid())) return mn.trivialTimedOut(i, s)
					let v = -Math.min(a, s.length + (a % 2)),
						N = Math.min(a, i.length + (a % 2))
					for (c = v; c <= N; c += 2) {
						let _ = 0,
							w = c === N ? -1 : u.get(c + 1),
							C = c === v ? -1 : u.get(c - 1) + 1
						_++
						let S = Math.min(Math.max(w, C), i.length),
							k = S - c
						if ((_++, S > i.length || k > s.length)) continue
						let M = o(S, k)
						u.set(c, M)
						let I = S === w ? l.get(c + 1) : l.get(c - 1)
						if (
							(l.set(c, M !== S ? new ma(I, S, k, M - S) : I),
							u.get(c) === i.length && u.get(c) - c === s.length)
						)
							break e
					}
				}
				let d = l.get(c),
					h = [],
					m = i.length,
					g = s.length
				for (;;) {
					let v = d ? d.x + d.length : 0,
						N = d ? d.y + d.length : 0
					if (((v !== m || N !== g) && h.push(new Pe(new Ee(v, m), new Ee(N, g))), !d)) break
					;(m = d.x), (g = d.y), (d = d.prev)
				}
				return h.reverse(), new mn(h, !1)
			}
		},
		ma = class {
			constructor(t, n, r, i) {
				;(this.prev = t), (this.x = n), (this.y = r), (this.length = i)
			}
		},
		Yl = class {
			constructor() {
				;(this.positiveArr = new Int32Array(10)), (this.negativeArr = new Int32Array(10))
			}
			get(t) {
				return t < 0 ? ((t = -t - 1), this.negativeArr[t]) : this.positiveArr[t]
			}
			set(t, n) {
				if (t < 0) {
					if (((t = -t - 1), t >= this.negativeArr.length)) {
						let r = this.negativeArr
						;(this.negativeArr = new Int32Array(r.length * 2)), this.negativeArr.set(r)
					}
					this.negativeArr[t] = n
				} else {
					if (t >= this.positiveArr.length) {
						let r = this.positiveArr
						;(this.positiveArr = new Int32Array(r.length * 2)), this.positiveArr.set(r)
					}
					this.positiveArr[t] = n
				}
			}
		},
		Jl = class {
			constructor() {
				;(this.positiveArr = []), (this.negativeArr = [])
			}
			get(t) {
				return t < 0 ? ((t = -t - 1), this.negativeArr[t]) : this.positiveArr[t]
			}
			set(t, n) {
				t < 0 ? ((t = -t - 1), (this.negativeArr[t] = n)) : (this.positiveArr[t] = n)
			}
		}
	var lr = class {
		constructor(t, n, r) {
			;(this.lines = t),
				(this.range = n),
				(this.considerWhitespaceChanges = r),
				(this.elements = []),
				(this.firstElementOffsetByLineIdx = []),
				(this.lineStartOffsets = []),
				(this.trimmedWsLengthsByLineIdx = []),
				this.firstElementOffsetByLineIdx.push(0)
			for (let i = this.range.startLineNumber; i <= this.range.endLineNumber; i++) {
				let s = t[i - 1],
					o = 0
				i === this.range.startLineNumber &&
					this.range.startColumn > 1 &&
					((o = this.range.startColumn - 1), (s = s.substring(o))),
					this.lineStartOffsets.push(o)
				let a = 0
				if (!r) {
					let l = s.trimStart()
					;(a = s.length - l.length), (s = l.trimEnd())
				}
				this.trimmedWsLengthsByLineIdx.push(a)
				let u =
					i === this.range.endLineNumber
						? Math.min(this.range.endColumn - 1 - o - a, s.length)
						: s.length
				for (let l = 0; l < u; l++) this.elements.push(s.charCodeAt(l))
				i < this.range.endLineNumber &&
					(this.elements.push(
						`
`.charCodeAt(0)
					),
					this.firstElementOffsetByLineIdx.push(this.elements.length))
			}
		}
		toString() {
			return `Slice: "${this.text}"`
		}
		get text() {
			return this.getText(new Ee(0, this.length))
		}
		getText(t) {
			return this.elements
				.slice(t.start, t.endExclusive)
				.map((n) => String.fromCharCode(n))
				.join('')
		}
		getElement(t) {
			return this.elements[t]
		}
		get length() {
			return this.elements.length
		}
		getBoundaryScore(t) {
			let n = Gp(t > 0 ? this.elements[t - 1] : -1),
				r = Gp(t < this.elements.length ? this.elements[t] : -1)
			if (n === 7 && r === 8) return 0
			if (n === 8) return 150
			let i = 0
			return n !== r && ((i += 10), n === 0 && r === 1 && (i += 1)), (i += qp(n)), (i += qp(r)), i
		}
		translateOffset(t, n = 'right') {
			let r = Tr(this.firstElementOffsetByLineIdx, (s) => s <= t),
				i = t - this.firstElementOffsetByLineIdx[r]
			return new Se(
				this.range.startLineNumber + r,
				1 +
					this.lineStartOffsets[r] +
					i +
					(i === 0 && n === 'left' ? 0 : this.trimmedWsLengthsByLineIdx[r])
			)
		}
		translateRange(t) {
			let n = this.translateOffset(t.start, 'right'),
				r = this.translateOffset(t.endExclusive, 'left')
			return r.isBefore(n) ? oe.fromPositions(r, r) : oe.fromPositions(n, r)
		}
		findWordContaining(t) {
			if (t < 0 || t >= this.elements.length || !Xl(this.elements[t])) return
			let n = t
			for (; n > 0 && Xl(this.elements[n - 1]); ) n--
			let r = t
			for (; r < this.elements.length && Xl(this.elements[r]); ) r++
			return new Ee(n, r)
		}
		countLinesIn(t) {
			return (
				this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber
			)
		}
		isStronglyEqual(t, n) {
			return this.elements[t] === this.elements[n]
		}
		extendToFullLines(t) {
			let n = Mn(this.firstElementOffsetByLineIdx, (i) => i <= t.start) ?? 0,
				r = Ip(this.firstElementOffsetByLineIdx, (i) => t.endExclusive <= i) ?? this.elements.length
			return new Ee(n, r)
		}
	}
	function Xl(e) {
		return (e >= 97 && e <= 122) || (e >= 65 && e <= 90) || (e >= 48 && e <= 57)
	}
	var S5 = { 0: 0, 1: 0, 2: 0, 3: 10, 4: 2, 5: 30, 6: 3, 7: 10, 8: 10 }
	function qp(e) {
		return S5[e]
	}
	function Gp(e) {
		return e === 10
			? 8
			: e === 13
			? 7
			: Ps(e)
			? 6
			: e >= 97 && e <= 122
			? 0
			: e >= 65 && e <= 90
			? 1
			: e >= 48 && e <= 57
			? 2
			: e === -1
			? 3
			: e === 44 || e === 59
			? 5
			: 4
	}
	function Wp(e, t, n, r, i, s) {
		let { moves: o, excludedChanges: a } = F5(e, t, n, s)
		if (!s.isValid()) return []
		let u = e.filter((c) => !a.has(c)),
			l = w5(u, r, i, t, n, s)
		return (
			$p(o, l),
			(o = L5(o)),
			(o = o.filter((c) => {
				let d = c.original
					.toOffsetRange()
					.slice(t)
					.map((m) => m.trim())
				return (
					d.join(`
`).length >= 15 && A5(d, (m) => m.length >= 2) >= 2
				)
			})),
			(o = C5(e, o)),
			o
		)
	}
	function A5(e, t) {
		let n = 0
		for (let r of e) t(r) && n++
		return n
	}
	function F5(e, t, n, r) {
		let i = [],
			s = e
				.filter((u) => u.modified.isEmpty && u.original.length >= 3)
				.map((u) => new Ms(u.original, t, u)),
			o = new Set(
				e
					.filter((u) => u.original.isEmpty && u.modified.length >= 3)
					.map((u) => new Ms(u.modified, n, u))
			),
			a = new Set()
		for (let u of s) {
			let l = -1,
				c
			for (let d of o) {
				let h = u.computeSimilarity(d)
				h > l && ((l = h), (c = d))
			}
			if (
				(l > 0.9 &&
					c &&
					(o.delete(c), i.push(new pn(u.range, c.range)), a.add(u.source), a.add(c.source)),
				!r.isValid())
			)
				return { moves: i, excludedChanges: a }
		}
		return { moves: i, excludedChanges: a }
	}
	function w5(e, t, n, r, i, s) {
		let o = [],
			a = new ra()
		for (let h of e)
			for (let m = h.original.startLineNumber; m < h.original.endLineNumberExclusive - 2; m++) {
				let g = `${t[m - 1]}:${t[m + 1 - 1]}:${t[m + 2 - 1]}`
				a.add(g, { range: new ge(m, m + 3) })
			}
		let u = []
		e.sort(ks((h) => h.modified.startLineNumber, Os))
		for (let h of e) {
			let m = []
			for (let g = h.modified.startLineNumber; g < h.modified.endLineNumberExclusive - 2; g++) {
				let v = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`,
					N = new ge(g, g + 3),
					_ = []
				a.forEach(v, ({ range: w }) => {
					for (let S of m)
						if (
							S.originalLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive &&
							S.modifiedLineRange.endLineNumberExclusive + 1 === N.endLineNumberExclusive
						) {
							;(S.originalLineRange = new ge(
								S.originalLineRange.startLineNumber,
								w.endLineNumberExclusive
							)),
								(S.modifiedLineRange = new ge(
									S.modifiedLineRange.startLineNumber,
									N.endLineNumberExclusive
								)),
								_.push(S)
							return
						}
					let C = { modifiedLineRange: N, originalLineRange: w }
					u.push(C), _.push(C)
				}),
					(m = _)
			}
			if (!s.isValid()) return []
		}
		u.sort(jp(ks((h) => h.modifiedLineRange.length, Os)))
		let l = new Sr(),
			c = new Sr()
		for (let h of u) {
			let m = h.modifiedLineRange.startLineNumber - h.originalLineRange.startLineNumber,
				g = l.subtractFrom(h.modifiedLineRange),
				v = c.subtractFrom(h.originalLineRange).getWithDelta(m),
				N = g.getIntersection(v)
			for (let _ of N.ranges) {
				if (_.length < 3) continue
				let w = _,
					C = _.delta(-m)
				o.push(new pn(C, w)), l.addRange(w), c.addRange(C)
			}
		}
		o.sort(ks((h) => h.original.startLineNumber, Os))
		let d = new Is(e)
		for (let h = 0; h < o.length; h++) {
			let m = o[h],
				g = d.findLastMonotonous((M) => M.original.startLineNumber <= m.original.startLineNumber),
				v = Mn(e, (M) => M.modified.startLineNumber <= m.modified.startLineNumber),
				N = Math.max(
					m.original.startLineNumber - g.original.startLineNumber,
					m.modified.startLineNumber - v.modified.startLineNumber
				),
				_ = d.findLastMonotonous(
					(M) => M.original.startLineNumber < m.original.endLineNumberExclusive
				),
				w = Mn(e, (M) => M.modified.startLineNumber < m.modified.endLineNumberExclusive),
				C = Math.max(
					_.original.endLineNumberExclusive - m.original.endLineNumberExclusive,
					w.modified.endLineNumberExclusive - m.modified.endLineNumberExclusive
				),
				S
			for (S = 0; S < N; S++) {
				let M = m.original.startLineNumber - S - 1,
					I = m.modified.startLineNumber - S - 1
				if (
					M > r.length ||
					I > i.length ||
					l.contains(I) ||
					c.contains(M) ||
					!Hp(r[M - 1], i[I - 1], s)
				)
					break
			}
			S > 0 &&
				(c.addRange(new ge(m.original.startLineNumber - S, m.original.startLineNumber)),
				l.addRange(new ge(m.modified.startLineNumber - S, m.modified.startLineNumber)))
			let k
			for (k = 0; k < C; k++) {
				let M = m.original.endLineNumberExclusive + k,
					I = m.modified.endLineNumberExclusive + k
				if (
					M > r.length ||
					I > i.length ||
					l.contains(I) ||
					c.contains(M) ||
					!Hp(r[M - 1], i[I - 1], s)
				)
					break
			}
			k > 0 &&
				(c.addRange(
					new ge(m.original.endLineNumberExclusive, m.original.endLineNumberExclusive + k)
				),
				l.addRange(
					new ge(m.modified.endLineNumberExclusive, m.modified.endLineNumberExclusive + k)
				)),
				(S > 0 || k > 0) &&
					(o[h] = new pn(
						new ge(m.original.startLineNumber - S, m.original.endLineNumberExclusive + k),
						new ge(m.modified.startLineNumber - S, m.modified.endLineNumberExclusive + k)
					))
		}
		return o
	}
	function Hp(e, t, n) {
		if (e.trim() === t.trim()) return !0
		if (e.length > 300 && t.length > 300) return !1
		let i = new vi().compute(
				new lr([e], new oe(1, 1, 1, e.length), !1),
				new lr([t], new oe(1, 1, 1, t.length), !1),
				n
			),
			s = 0,
			o = Pe.invert(i.diffs, e.length)
		for (let c of o)
			c.seq1Range.forEach((d) => {
				Ps(e.charCodeAt(d)) || s++
			})
		function a(c) {
			let d = 0
			for (let h = 0; h < e.length; h++) Ps(c.charCodeAt(h)) || d++
			return d
		}
		let u = a(e.length > t.length ? e : t)
		return s / u > 0.6 && u > 10
	}
	function L5(e) {
		if (e.length === 0) return e
		e.sort(ks((n) => n.original.startLineNumber, Os))
		let t = [e[0]]
		for (let n = 1; n < e.length; n++) {
			let r = t[t.length - 1],
				i = e[n],
				s = i.original.startLineNumber - r.original.endLineNumberExclusive,
				o = i.modified.startLineNumber - r.modified.endLineNumberExclusive
			if (s >= 0 && o >= 0 && s + o <= 2) {
				t[t.length - 1] = r.join(i)
				continue
			}
			t.push(i)
		}
		return t
	}
	function C5(e, t) {
		let n = new Is(e)
		return (
			(t = t.filter((r) => {
				let i =
						n.findLastMonotonous(
							(a) => a.original.startLineNumber < r.original.endLineNumberExclusive
						) || new pn(new ge(1, 1), new ge(1, 1)),
					s = Mn(e, (a) => a.modified.startLineNumber < r.modified.endLineNumberExclusive)
				return i !== s
			})),
			t
		)
	}
	function Kl(e, t, n) {
		let r = n
		return (r = Qp(e, t, r)), (r = Qp(e, t, r)), (r = I5(e, t, r)), r
	}
	function Qp(e, t, n) {
		if (n.length === 0) return n
		let r = []
		r.push(n[0])
		for (let s = 1; s < n.length; s++) {
			let o = r[r.length - 1],
				a = n[s]
			if (a.seq1Range.isEmpty || a.seq2Range.isEmpty) {
				let u = a.seq1Range.start - o.seq1Range.endExclusive,
					l
				for (
					l = 1;
					l <= u &&
					!(
						e.getElement(a.seq1Range.start - l) !== e.getElement(a.seq1Range.endExclusive - l) ||
						t.getElement(a.seq2Range.start - l) !== t.getElement(a.seq2Range.endExclusive - l)
					);
					l++
				);
				if ((l--, l === u)) {
					r[r.length - 1] = new Pe(
						new Ee(o.seq1Range.start, a.seq1Range.endExclusive - u),
						new Ee(o.seq2Range.start, a.seq2Range.endExclusive - u)
					)
					continue
				}
				a = a.delta(-l)
			}
			r.push(a)
		}
		let i = []
		for (let s = 0; s < r.length - 1; s++) {
			let o = r[s + 1],
				a = r[s]
			if (a.seq1Range.isEmpty || a.seq2Range.isEmpty) {
				let u = o.seq1Range.start - a.seq1Range.endExclusive,
					l
				for (
					l = 0;
					l < u &&
					!(
						!e.isStronglyEqual(a.seq1Range.start + l, a.seq1Range.endExclusive + l) ||
						!t.isStronglyEqual(a.seq2Range.start + l, a.seq2Range.endExclusive + l)
					);
					l++
				);
				if (l === u) {
					r[s + 1] = new Pe(
						new Ee(a.seq1Range.start + u, o.seq1Range.endExclusive),
						new Ee(a.seq2Range.start + u, o.seq2Range.endExclusive)
					)
					continue
				}
				l > 0 && (a = a.delta(l))
			}
			i.push(a)
		}
		return r.length > 0 && i.push(r[r.length - 1]), i
	}
	function I5(e, t, n) {
		if (!e.getBoundaryScore || !t.getBoundaryScore) return n
		for (let r = 0; r < n.length; r++) {
			let i = r > 0 ? n[r - 1] : void 0,
				s = n[r],
				o = r + 1 < n.length ? n[r + 1] : void 0,
				a = new Ee(i ? i.seq1Range.endExclusive + 1 : 0, o ? o.seq1Range.start - 1 : e.length),
				u = new Ee(i ? i.seq2Range.endExclusive + 1 : 0, o ? o.seq2Range.start - 1 : t.length)
			s.seq1Range.isEmpty
				? (n[r] = zp(s, e, t, a, u))
				: s.seq2Range.isEmpty && (n[r] = zp(s.swap(), t, e, u, a).swap())
		}
		return n
	}
	function zp(e, t, n, r, i) {
		let o = 1
		for (
			;
			e.seq1Range.start - o >= r.start &&
			e.seq2Range.start - o >= i.start &&
			n.isStronglyEqual(e.seq2Range.start - o, e.seq2Range.endExclusive - o) &&
			o < 100;

		)
			o++
		o--
		let a = 0
		for (
			;
			e.seq1Range.start + a < r.endExclusive &&
			e.seq2Range.endExclusive + a < i.endExclusive &&
			n.isStronglyEqual(e.seq2Range.start + a, e.seq2Range.endExclusive + a) &&
			a < 100;

		)
			a++
		if (o === 0 && a === 0) return e
		let u = 0,
			l = -1
		for (let c = -o; c <= a; c++) {
			let d = e.seq2Range.start + c,
				h = e.seq2Range.endExclusive + c,
				m = e.seq1Range.start + c,
				g = t.getBoundaryScore(m) + n.getBoundaryScore(d) + n.getBoundaryScore(h)
			g > l && ((l = g), (u = c))
		}
		return e.delta(u)
	}
	function Yp(e, t, n) {
		let r = []
		for (let i of n) {
			let s = r[r.length - 1]
			if (!s) {
				r.push(i)
				continue
			}
			i.seq1Range.start - s.seq1Range.endExclusive <= 2 ||
			i.seq2Range.start - s.seq2Range.endExclusive <= 2
				? (r[r.length - 1] = new Pe(s.seq1Range.join(i.seq1Range), s.seq2Range.join(i.seq2Range)))
				: r.push(i)
		}
		return r
	}
	function Jp(e, t, n) {
		let r = Pe.invert(n, e.length),
			i = [],
			s = new hn(0, 0)
		function o(u, l) {
			if (u.offset1 < s.offset1 || u.offset2 < s.offset2) return
			let c = e.findWordContaining(u.offset1),
				d = t.findWordContaining(u.offset2)
			if (!c || !d) return
			let h = new Pe(c, d),
				m = h.intersect(l),
				g = m.seq1Range.length,
				v = m.seq2Range.length
			for (; r.length > 0; ) {
				let N = r[0]
				if (!(N.seq1Range.intersects(h.seq1Range) || N.seq2Range.intersects(h.seq2Range))) break
				let w = e.findWordContaining(N.seq1Range.start),
					C = t.findWordContaining(N.seq2Range.start),
					S = new Pe(w, C),
					k = S.intersect(N)
				if (
					((g += k.seq1Range.length),
					(v += k.seq2Range.length),
					(h = h.join(S)),
					h.seq1Range.endExclusive >= N.seq1Range.endExclusive)
				)
					r.shift()
				else break
			}
			g + v < ((h.seq1Range.length + h.seq2Range.length) * 2) / 3 && i.push(h),
				(s = h.getEndExclusives())
		}
		for (; r.length > 0; ) {
			let u = r.shift()
			u.seq1Range.isEmpty || (o(u.getStarts(), u), o(u.getEndExclusives().delta(-1), u))
		}
		return R5(n, i)
	}
	function R5(e, t) {
		let n = []
		for (; e.length > 0 || t.length > 0; ) {
			let r = e[0],
				i = t[0],
				s
			r && (!i || r.seq1Range.start < i.seq1Range.start) ? (s = e.shift()) : (s = t.shift()),
				n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start
					? (n[n.length - 1] = n[n.length - 1].join(s))
					: n.push(s)
		}
		return n
	}
	function Xp(e, t, n) {
		let r = n
		if (r.length === 0) return r
		let i = 0,
			s
		do {
			s = !1
			let o = [r[0]]
			for (let a = 1; a < r.length; a++) {
				let c = function (h, m) {
						let g = new Ee(l.seq1Range.endExclusive, u.seq1Range.start)
						return (
							e.getText(g).replace(/\s/g, '').length <= 4 &&
							(h.seq1Range.length + h.seq2Range.length > 5 ||
								m.seq1Range.length + m.seq2Range.length > 5)
						)
					},
					u = r[a],
					l = o[o.length - 1]
				c(l, u) ? ((s = !0), (o[o.length - 1] = o[o.length - 1].join(u))) : o.push(u)
			}
			r = o
		} while (i++ < 10 && s)
		return r
	}
	function Kp(e, t, n) {
		let r = n
		if (r.length === 0) return r
		let i = 0,
			s
		do {
			s = !1
			let a = [r[0]]
			for (let u = 1; u < r.length; u++) {
				let d = function (m, g) {
						let v = new Ee(c.seq1Range.endExclusive, l.seq1Range.start)
						if (e.countLinesIn(v) > 5 || v.length > 500) return !1
						let _ = e.getText(v).trim()
						if (_.length > 20 || _.split(/\r\n|\r|\n/).length > 1) return !1
						let w = e.countLinesIn(m.seq1Range),
							C = m.seq1Range.length,
							S = t.countLinesIn(m.seq2Range),
							k = m.seq2Range.length,
							M = e.countLinesIn(g.seq1Range),
							I = g.seq1Range.length,
							B = t.countLinesIn(g.seq2Range),
							L = g.seq2Range.length,
							A = 2 * 40 + 50
						function X(z) {
							return Math.min(z, A)
						}
						return (
							Math.pow(Math.pow(X(w * 40 + C), 1.5) + Math.pow(X(S * 40 + k), 1.5), 1.5) +
								Math.pow(Math.pow(X(M * 40 + I), 1.5) + Math.pow(X(B * 40 + L), 1.5), 1.5) >
							(A ** 1.5) ** 1.5 * 1.3
						)
					},
					l = r[u],
					c = a[a.length - 1]
				d(c, l) ? ((s = !0), (a[a.length - 1] = a[a.length - 1].join(l))) : a.push(l)
			}
			r = a
		} while (i++ < 10 && s)
		let o = []
		return (
			Up(r, (a, u, l) => {
				let c = u
				function d(_) {
					return (
						_.length > 0 && _.trim().length <= 3 && u.seq1Range.length + u.seq2Range.length > 100
					)
				}
				let h = e.extendToFullLines(u.seq1Range),
					m = e.getText(new Ee(h.start, u.seq1Range.start))
				d(m) && (c = c.deltaStart(-m.length))
				let g = e.getText(new Ee(u.seq1Range.endExclusive, h.endExclusive))
				d(g) && (c = c.deltaEnd(g.length))
				let v = Pe.fromOffsetPairs(a ? a.getEndExclusives() : hn.zero, l ? l.getStarts() : hn.max),
					N = c.intersect(v)
				o.length > 0 && N.getStarts().equals(o[o.length - 1].getEndExclusives())
					? (o[o.length - 1] = o[o.length - 1].join(N))
					: o.push(N)
			}),
			o
		)
	}
	var Bs = class {
		constructor(t, n) {
			;(this.trimmedHash = t), (this.lines = n)
		}
		getElement(t) {
			return this.trimmedHash[t]
		}
		get length() {
			return this.trimmedHash.length
		}
		getBoundaryScore(t) {
			let n = t === 0 ? 0 : Zp(this.lines[t - 1]),
				r = t === this.lines.length ? 0 : Zp(this.lines[t])
			return 1e3 - (n + r)
		}
		getText(t) {
			return this.lines.slice(t.start, t.endExclusive).join(`
`)
		}
		isStronglyEqual(t, n) {
			return this.lines[t] === this.lines[n]
		}
	}
	function Zp(e) {
		let t = 0
		for (; t < e.length && (e.charCodeAt(t) === 32 || e.charCodeAt(t) === 9); ) t++
		return t
	}
	var ga = class {
		constructor() {
			;(this.dynamicProgrammingDiffing = new ha()), (this.myersDiffingAlgorithm = new vi())
		}
		computeDiff(t, n, r) {
			if (t.length <= 1 && Pp(t, n, (k, M) => k === M)) return new ar([], [], !1)
			if ((t.length === 1 && t[0].length === 0) || (n.length === 1 && n[0].length === 0))
				return new ar(
					[
						new Pn(new ge(1, t.length + 1), new ge(1, n.length + 1), [
							new Ot(
								new oe(1, 1, t.length, t[t.length - 1].length + 1),
								new oe(1, 1, n.length, n[n.length - 1].length + 1)
							)
						])
					],
					[],
					!1
				)
			let i = r.maxComputationTimeMs === 0 ? ur.instance : new pa(r.maxComputationTimeMs),
				s = !r.ignoreTrimWhitespace,
				o = new Map()
			function a(k) {
				let M = o.get(k)
				return M === void 0 && ((M = o.size), o.set(k, M)), M
			}
			let u = t.map((k) => a(k.trim())),
				l = n.map((k) => a(k.trim())),
				c = new Bs(u, t),
				d = new Bs(l, n),
				h = (() =>
					c.length + d.length < 1700
						? this.dynamicProgrammingDiffing.compute(c, d, i, (k, M) =>
								t[k] === n[M] ? (n[M].length === 0 ? 0.1 : 1 + Math.log(1 + n[M].length)) : 0.99
						  )
						: this.myersDiffingAlgorithm.compute(c, d, i))(),
				m = h.diffs,
				g = h.hitTimeout
			;(m = Kl(c, d, m)), (m = Xp(c, d, m))
			let v = [],
				N = (k) => {
					if (s)
						for (let M = 0; M < k; M++) {
							let I = _ + M,
								B = w + M
							if (t[I] !== n[B]) {
								let L = this.refineDiff(t, n, new Pe(new Ee(I, I + 1), new Ee(B, B + 1)), i, s)
								for (let A of L.mappings) v.push(A)
								L.hitTimeout && (g = !0)
							}
						}
				},
				_ = 0,
				w = 0
			for (let k of m) {
				Nr(() => k.seq1Range.start - _ === k.seq2Range.start - w)
				let M = k.seq1Range.start - _
				N(M), (_ = k.seq1Range.endExclusive), (w = k.seq2Range.endExclusive)
				let I = this.refineDiff(t, n, k, i, s)
				I.hitTimeout && (g = !0)
				for (let B of I.mappings) v.push(B)
			}
			N(t.length - _)
			let C = eh(v, t, n),
				S = []
			return (
				r.computeMoves && (S = this.computeMoves(C, t, n, u, l, i, s)),
				Nr(() => {
					function k(I, B) {
						if (I.lineNumber < 1 || I.lineNumber > B.length) return !1
						let L = B[I.lineNumber - 1]
						return !(I.column < 1 || I.column > L.length + 1)
					}
					function M(I, B) {
						return !(
							I.startLineNumber < 1 ||
							I.startLineNumber > B.length + 1 ||
							I.endLineNumberExclusive < 1 ||
							I.endLineNumberExclusive > B.length + 1
						)
					}
					for (let I of C) {
						if (!I.innerChanges) return !1
						for (let B of I.innerChanges)
							if (
								!(
									k(B.modifiedRange.getStartPosition(), n) &&
									k(B.modifiedRange.getEndPosition(), n) &&
									k(B.originalRange.getStartPosition(), t) &&
									k(B.originalRange.getEndPosition(), t)
								)
							)
								return !1
						if (!M(I.modified, n) || !M(I.original, t)) return !1
					}
					return !0
				}),
				new ar(C, S, g)
			)
		}
		computeMoves(t, n, r, i, s, o, a) {
			return Wp(t, n, r, i, s, o).map((c) => {
				let d = this.refineDiff(
						n,
						r,
						new Pe(c.original.toOffsetRange(), c.modified.toOffsetRange()),
						o,
						a
					),
					h = eh(d.mappings, n, r, !0)
				return new aa(c, h)
			})
		}
		refineDiff(t, n, r, i, s) {
			let a = O5(r).toRangeMapping2(t, n),
				u = new lr(t, a.originalRange, s),
				l = new lr(n, a.modifiedRange, s),
				c =
					u.length + l.length < 500
						? this.dynamicProgrammingDiffing.compute(u, l, i)
						: this.myersDiffingAlgorithm.compute(u, l, i),
				d = !1,
				h = c.diffs
			d && Pe.assertSorted(h),
				(h = Kl(u, l, h)),
				d && Pe.assertSorted(h),
				(h = Jp(u, l, h)),
				d && Pe.assertSorted(h),
				(h = Yp(u, l, h)),
				d && Pe.assertSorted(h),
				(h = Kp(u, l, h)),
				d && Pe.assertSorted(h)
			let m = h.map((g) => new Ot(u.translateRange(g.seq1Range), l.translateRange(g.seq2Range)))
			return d && Ot.assertSorted(m), { mappings: m, hitTimeout: c.hitTimeout }
		}
	}
	function eh(e, t, n, r = !1) {
		let i = []
		for (let s of Bp(
			e.map((o) => k5(o, t, n)),
			(o, a) => o.original.overlapOrTouch(a.original) || o.modified.overlapOrTouch(a.modified)
		)) {
			let o = s[0],
				a = s[s.length - 1]
			i.push(
				new Pn(
					o.original.join(a.original),
					o.modified.join(a.modified),
					s.map((u) => u.innerChanges[0])
				)
			)
		}
		return (
			Nr(() =>
				!r &&
				i.length > 0 &&
				(i[0].modified.startLineNumber !== i[0].original.startLineNumber ||
					n.length - i[i.length - 1].modified.endLineNumberExclusive !==
						t.length - i[i.length - 1].original.endLineNumberExclusive)
					? !1
					: Ls(
							i,
							(s, o) =>
								o.original.startLineNumber - s.original.endLineNumberExclusive ===
									o.modified.startLineNumber - s.modified.endLineNumberExclusive &&
								s.original.endLineNumberExclusive < o.original.startLineNumber &&
								s.modified.endLineNumberExclusive < o.modified.startLineNumber
					  )
			),
			i
		)
	}
	function k5(e, t, n) {
		let r = 0,
			i = 0
		e.modifiedRange.endColumn === 1 &&
			e.originalRange.endColumn === 1 &&
			e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber &&
			e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber &&
			(i = -1),
			e.modifiedRange.startColumn - 1 >= n[e.modifiedRange.startLineNumber - 1].length &&
				e.originalRange.startColumn - 1 >= t[e.originalRange.startLineNumber - 1].length &&
				e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i &&
				e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i &&
				(r = 1)
		let s = new ge(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i),
			o = new ge(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i)
		return new Pn(s, o, [e])
	}
	function O5(e) {
		return new pn(
			new ge(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1),
			new ge(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1)
		)
	}
	var Zl = { getLegacy: () => new fa(), getDefault: () => new ga() }
	function cr(e, t) {
		let n = Math.pow(10, t)
		return Math.round(e * n) / n
	}
	var Je = class {
			constructor(t, n, r, i = 1) {
				;(this._rgbaBrand = void 0),
					(this.r = Math.min(255, Math.max(0, t)) | 0),
					(this.g = Math.min(255, Math.max(0, n)) | 0),
					(this.b = Math.min(255, Math.max(0, r)) | 0),
					(this.a = cr(Math.max(Math.min(1, i), 0), 3))
			}
			static equals(t, n) {
				return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a
			}
		},
		gn = class e {
			constructor(t, n, r, i) {
				;(this._hslaBrand = void 0),
					(this.h = Math.max(Math.min(360, t), 0) | 0),
					(this.s = cr(Math.max(Math.min(1, n), 0), 3)),
					(this.l = cr(Math.max(Math.min(1, r), 0), 3)),
					(this.a = cr(Math.max(Math.min(1, i), 0), 3))
			}
			static equals(t, n) {
				return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a
			}
			static fromRGBA(t) {
				let n = t.r / 255,
					r = t.g / 255,
					i = t.b / 255,
					s = t.a,
					o = Math.max(n, r, i),
					a = Math.min(n, r, i),
					u = 0,
					l = 0,
					c = (a + o) / 2,
					d = o - a
				if (d > 0) {
					switch (((l = Math.min(c <= 0.5 ? d / (2 * c) : d / (2 - 2 * c), 1)), o)) {
						case n:
							u = (r - i) / d + (r < i ? 6 : 0)
							break
						case r:
							u = (i - n) / d + 2
							break
						case i:
							u = (n - r) / d + 4
							break
					}
					;(u *= 60), (u = Math.round(u))
				}
				return new e(u, l, c, s)
			}
			static _hue2rgb(t, n, r) {
				return (
					r < 0 && (r += 1),
					r > 1 && (r -= 1),
					r < 1 / 6
						? t + (n - t) * 6 * r
						: r < 1 / 2
						? n
						: r < 2 / 3
						? t + (n - t) * (2 / 3 - r) * 6
						: t
				)
			}
			static toRGBA(t) {
				let n = t.h / 360,
					{ s: r, l: i, a: s } = t,
					o,
					a,
					u
				if (r === 0) o = a = u = i
				else {
					let l = i < 0.5 ? i * (1 + r) : i + r - i * r,
						c = 2 * i - l
					;(o = e._hue2rgb(c, l, n + 1 / 3)),
						(a = e._hue2rgb(c, l, n)),
						(u = e._hue2rgb(c, l, n - 1 / 3))
				}
				return new Je(Math.round(o * 255), Math.round(a * 255), Math.round(u * 255), s)
			}
		},
		bi = class e {
			constructor(t, n, r, i) {
				;(this._hsvaBrand = void 0),
					(this.h = Math.max(Math.min(360, t), 0) | 0),
					(this.s = cr(Math.max(Math.min(1, n), 0), 3)),
					(this.v = cr(Math.max(Math.min(1, r), 0), 3)),
					(this.a = cr(Math.max(Math.min(1, i), 0), 3))
			}
			static equals(t, n) {
				return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a
			}
			static fromRGBA(t) {
				let n = t.r / 255,
					r = t.g / 255,
					i = t.b / 255,
					s = Math.max(n, r, i),
					o = Math.min(n, r, i),
					a = s - o,
					u = s === 0 ? 0 : a / s,
					l
				return (
					a === 0
						? (l = 0)
						: s === n
						? (l = ((((r - i) / a) % 6) + 6) % 6)
						: s === r
						? (l = (i - n) / a + 2)
						: (l = (n - r) / a + 4),
					new e(Math.round(l * 60), u, s, t.a)
				)
			}
			static toRGBA(t) {
				let { h: n, s: r, v: i, a: s } = t,
					o = i * r,
					a = o * (1 - Math.abs(((n / 60) % 2) - 1)),
					u = i - o,
					[l, c, d] = [0, 0, 0]
				return (
					n < 60
						? ((l = o), (c = a))
						: n < 120
						? ((l = a), (c = o))
						: n < 180
						? ((c = o), (d = a))
						: n < 240
						? ((c = a), (d = o))
						: n < 300
						? ((l = a), (d = o))
						: n <= 360 && ((l = o), (d = a)),
					(l = Math.round((l + u) * 255)),
					(c = Math.round((c + u) * 255)),
					(d = Math.round((d + u) * 255)),
					new Je(l, c, d, s)
				)
			}
		},
		Ar = class e {
			static fromHex(t) {
				return e.Format.CSS.parseHex(t) || e.red
			}
			static equals(t, n) {
				return !t && !n ? !0 : !t || !n ? !1 : t.equals(n)
			}
			get hsla() {
				return this._hsla ? this._hsla : gn.fromRGBA(this.rgba)
			}
			get hsva() {
				return this._hsva ? this._hsva : bi.fromRGBA(this.rgba)
			}
			constructor(t) {
				if (t)
					if (t instanceof Je) this.rgba = t
					else if (t instanceof gn) (this._hsla = t), (this.rgba = gn.toRGBA(t))
					else if (t instanceof bi) (this._hsva = t), (this.rgba = bi.toRGBA(t))
					else throw new Error('Invalid color ctor argument')
				else throw new Error('Color needs a value')
			}
			equals(t) {
				return (
					!!t &&
					Je.equals(this.rgba, t.rgba) &&
					gn.equals(this.hsla, t.hsla) &&
					bi.equals(this.hsva, t.hsva)
				)
			}
			getRelativeLuminance() {
				let t = e._relativeLuminanceForComponent(this.rgba.r),
					n = e._relativeLuminanceForComponent(this.rgba.g),
					r = e._relativeLuminanceForComponent(this.rgba.b),
					i = 0.2126 * t + 0.7152 * n + 0.0722 * r
				return cr(i, 4)
			}
			static _relativeLuminanceForComponent(t) {
				let n = t / 255
				return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
			}
			isLighter() {
				return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128
			}
			isLighterThan(t) {
				let n = this.getRelativeLuminance(),
					r = t.getRelativeLuminance()
				return n > r
			}
			isDarkerThan(t) {
				let n = this.getRelativeLuminance(),
					r = t.getRelativeLuminance()
				return n < r
			}
			lighten(t) {
				return new e(new gn(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a))
			}
			darken(t) {
				return new e(new gn(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a))
			}
			transparent(t) {
				let { r: n, g: r, b: i, a: s } = this.rgba
				return new e(new Je(n, r, i, s * t))
			}
			isTransparent() {
				return this.rgba.a === 0
			}
			isOpaque() {
				return this.rgba.a === 1
			}
			opposite() {
				return new e(new Je(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a))
			}
			makeOpaque(t) {
				if (this.isOpaque() || t.rgba.a !== 1) return this
				let { r: n, g: r, b: i, a: s } = this.rgba
				return new e(
					new Je(
						t.rgba.r - s * (t.rgba.r - n),
						t.rgba.g - s * (t.rgba.g - r),
						t.rgba.b - s * (t.rgba.b - i),
						1
					)
				)
			}
			toString() {
				return this._toString || (this._toString = e.Format.CSS.format(this)), this._toString
			}
			static getLighterColor(t, n, r) {
				if (t.isLighterThan(n)) return t
				r = r || 0.5
				let i = t.getRelativeLuminance(),
					s = n.getRelativeLuminance()
				return (r = (r * (s - i)) / s), t.lighten(r)
			}
			static getDarkerColor(t, n, r) {
				if (t.isDarkerThan(n)) return t
				r = r || 0.5
				let i = t.getRelativeLuminance(),
					s = n.getRelativeLuminance()
				return (r = (r * (i - s)) / i), t.darken(r)
			}
			static {
				this.white = new e(new Je(255, 255, 255, 1))
			}
			static {
				this.black = new e(new Je(0, 0, 0, 1))
			}
			static {
				this.red = new e(new Je(255, 0, 0, 1))
			}
			static {
				this.blue = new e(new Je(0, 0, 255, 1))
			}
			static {
				this.green = new e(new Je(0, 255, 0, 1))
			}
			static {
				this.cyan = new e(new Je(0, 255, 255, 1))
			}
			static {
				this.lightgrey = new e(new Je(211, 211, 211, 1))
			}
			static {
				this.transparent = new e(new Je(0, 0, 0, 0))
			}
		}
	;(function (e) {
		let t
		;(function (n) {
			let r
			;(function (i) {
				function s(v) {
					return v.rgba.a === 1
						? `rgb(${v.rgba.r}, ${v.rgba.g}, ${v.rgba.b})`
						: e.Format.CSS.formatRGBA(v)
				}
				i.formatRGB = s
				function o(v) {
					return `rgba(${v.rgba.r}, ${v.rgba.g}, ${v.rgba.b}, ${+v.rgba.a.toFixed(2)})`
				}
				i.formatRGBA = o
				function a(v) {
					return v.hsla.a === 1
						? `hsl(${v.hsla.h}, ${(v.hsla.s * 100).toFixed(2)}%, ${(v.hsla.l * 100).toFixed(2)}%)`
						: e.Format.CSS.formatHSLA(v)
				}
				i.formatHSL = a
				function u(v) {
					return `hsla(${v.hsla.h}, ${(v.hsla.s * 100).toFixed(2)}%, ${(v.hsla.l * 100).toFixed(
						2
					)}%, ${v.hsla.a.toFixed(2)})`
				}
				i.formatHSLA = u
				function l(v) {
					let N = v.toString(16)
					return N.length !== 2 ? '0' + N : N
				}
				function c(v) {
					return `#${l(v.rgba.r)}${l(v.rgba.g)}${l(v.rgba.b)}`
				}
				i.formatHex = c
				function d(v, N = !1) {
					return N && v.rgba.a === 1
						? e.Format.CSS.formatHex(v)
						: `#${l(v.rgba.r)}${l(v.rgba.g)}${l(v.rgba.b)}${l(Math.round(v.rgba.a * 255))}`
				}
				i.formatHexA = d
				function h(v) {
					return v.isOpaque() ? e.Format.CSS.formatHex(v) : e.Format.CSS.formatRGBA(v)
				}
				i.format = h
				function m(v) {
					let N = v.length
					if (N === 0 || v.charCodeAt(0) !== 35) return null
					if (N === 7) {
						let _ = 16 * g(v.charCodeAt(1)) + g(v.charCodeAt(2)),
							w = 16 * g(v.charCodeAt(3)) + g(v.charCodeAt(4)),
							C = 16 * g(v.charCodeAt(5)) + g(v.charCodeAt(6))
						return new e(new Je(_, w, C, 1))
					}
					if (N === 9) {
						let _ = 16 * g(v.charCodeAt(1)) + g(v.charCodeAt(2)),
							w = 16 * g(v.charCodeAt(3)) + g(v.charCodeAt(4)),
							C = 16 * g(v.charCodeAt(5)) + g(v.charCodeAt(6)),
							S = 16 * g(v.charCodeAt(7)) + g(v.charCodeAt(8))
						return new e(new Je(_, w, C, S / 255))
					}
					if (N === 4) {
						let _ = g(v.charCodeAt(1)),
							w = g(v.charCodeAt(2)),
							C = g(v.charCodeAt(3))
						return new e(new Je(16 * _ + _, 16 * w + w, 16 * C + C))
					}
					if (N === 5) {
						let _ = g(v.charCodeAt(1)),
							w = g(v.charCodeAt(2)),
							C = g(v.charCodeAt(3)),
							S = g(v.charCodeAt(4))
						return new e(new Je(16 * _ + _, 16 * w + w, 16 * C + C, (16 * S + S) / 255))
					}
					return null
				}
				i.parseHex = m
				function g(v) {
					switch (v) {
						case 48:
							return 0
						case 49:
							return 1
						case 50:
							return 2
						case 51:
							return 3
						case 52:
							return 4
						case 53:
							return 5
						case 54:
							return 6
						case 55:
							return 7
						case 56:
							return 8
						case 57:
							return 9
						case 97:
							return 10
						case 65:
							return 10
						case 98:
							return 11
						case 66:
							return 11
						case 99:
							return 12
						case 67:
							return 12
						case 100:
							return 13
						case 68:
							return 13
						case 101:
							return 14
						case 69:
							return 14
						case 102:
							return 15
						case 70:
							return 15
					}
					return 0
				}
			})((r = n.CSS || (n.CSS = {})))
		})((t = e.Format || (e.Format = {})))
	})(Ar || (Ar = {}))
	function rh(e) {
		let t = []
		for (let n of e) {
			let r = Number(n)
			;(r || (r === 0 && n.replace(/\s/g, '') !== '')) && t.push(r)
		}
		return t
	}
	function ec(e, t, n, r) {
		return { red: e / 255, blue: n / 255, green: t / 255, alpha: r }
	}
	function Vs(e, t) {
		let n = t.index,
			r = t[0].length
		if (!n) return
		let i = e.positionAt(n)
		return {
			startLineNumber: i.lineNumber,
			startColumn: i.column,
			endLineNumber: i.lineNumber,
			endColumn: i.column + r
		}
	}
	function M5(e, t) {
		if (!e) return
		let n = Ar.Format.CSS.parseHex(t)
		if (n) return { range: e, color: ec(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) }
	}
	function th(e, t, n) {
		if (!e || t.length !== 1) return
		let i = t[0].values(),
			s = rh(i)
		return { range: e, color: ec(s[0], s[1], s[2], n ? s[3] : 1) }
	}
	function nh(e, t, n) {
		if (!e || t.length !== 1) return
		let i = t[0].values(),
			s = rh(i),
			o = new Ar(new gn(s[0], s[1] / 100, s[2] / 100, n ? s[3] : 1))
		return { range: e, color: ec(o.rgba.r, o.rgba.g, o.rgba.b, o.rgba.a) }
	}
	function Us(e, t) {
		return typeof e == 'string' ? [...e.matchAll(t)] : e.findMatches(t)
	}
	function P5(e) {
		let t = [],
			r = Us(
				e,
				/\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm
			)
		if (r.length > 0)
			for (let i of r) {
				let s = i.filter((l) => l !== void 0),
					o = s[1],
					a = s[2]
				if (!a) continue
				let u
				if (o === 'rgb') {
					let l =
						/^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm
					u = th(Vs(e, i), Us(a, l), !1)
				} else if (o === 'rgba') {
					let l =
						/^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm
					u = th(Vs(e, i), Us(a, l), !0)
				} else if (o === 'hsl') {
					let l =
						/^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm
					u = nh(Vs(e, i), Us(a, l), !1)
				} else if (o === 'hsla') {
					let l =
						/^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm
					u = nh(Vs(e, i), Us(a, l), !0)
				} else o === '#' && (u = M5(Vs(e, i), o + a))
				u && t.push(u)
			}
		return t
	}
	function ih(e) {
		return !e || typeof e.getValue != 'function' || typeof e.positionAt != 'function' ? [] : P5(e)
	}
	var sh = new RegExp('\\bMARK:\\s*(.*)$', 'd'),
		B5 = /^-+|-+$/g
	function oh(e, t) {
		let n = []
		if (t.findRegionSectionHeaders && t.foldingRules?.markers) {
			let r = V5(e, t)
			n = n.concat(r)
		}
		if (t.findMarkSectionHeaders) {
			let r = U5(e)
			n = n.concat(r)
		}
		return n
	}
	function V5(e, t) {
		let n = [],
			r = e.getLineCount()
		for (let i = 1; i <= r; i++) {
			let s = e.getLineContent(i),
				o = s.match(t.foldingRules.markers.start)
			if (o) {
				let a = {
					startLineNumber: i,
					startColumn: o[0].length + 1,
					endLineNumber: i,
					endColumn: s.length + 1
				}
				if (a.endColumn > a.startColumn) {
					let u = { range: a, ...ah(s.substring(o[0].length)), shouldBeInComments: !1 }
					;(u.text || u.hasSeparatorLine) && n.push(u)
				}
			}
		}
		return n
	}
	function U5(e) {
		let t = [],
			n = e.getLineCount()
		for (let r = 1; r <= n; r++) {
			let i = e.getLineContent(r)
			$5(i, r, t)
		}
		return t
	}
	function $5(e, t, n) {
		sh.lastIndex = 0
		let r = sh.exec(e)
		if (r) {
			let i = r.indices[1][0] + 1,
				s = r.indices[1][1] + 1,
				o = { startLineNumber: t, startColumn: i, endLineNumber: t, endColumn: s }
			if (o.endColumn > o.startColumn) {
				let a = { range: o, ...ah(r[1]), shouldBeInComments: !0 }
				;(a.text || a.hasSeparatorLine) && n.push(a)
			}
		}
	}
	function ah(e) {
		e = e.trim()
		let t = e.startsWith('-')
		return (e = e.replace(B5, '')), { text: e, hasSeparatorLine: t }
	}
	var j5 = Symbol('MicrotaskDelay')
	var q5, tc
	;(function () {
		typeof globalThis.requestIdleCallback != 'function' ||
		typeof globalThis.cancelIdleCallback != 'function'
			? (tc = (e, t) => {
					Uf(() => {
						if (n) return
						let r = Date.now() + 15
						t(
							Object.freeze({
								didTimeout: !0,
								timeRemaining() {
									return Math.max(0, r - Date.now())
								}
							})
						)
					})
					let n = !1
					return {
						dispose() {
							n || (n = !0)
						}
					}
			  })
			: (tc = (e, t, n) => {
					let r = e.requestIdleCallback(t, typeof n == 'number' ? { timeout: n } : void 0),
						i = !1
					return {
						dispose() {
							i || ((i = !0), e.cancelIdleCallback(r))
						}
					}
			  }),
			(q5 = (e) => tc(globalThis, e))
	})()
	var uh
	;(function (e) {
		async function t(r) {
			let i,
				s = await Promise.all(
					r.map((o) =>
						o.then(
							(a) => a,
							(a) => {
								i || (i = a)
							}
						)
					)
				)
			if (typeof i < 'u') throw i
			return s
		}
		e.settled = t
		function n(r) {
			return new Promise(async (i, s) => {
				try {
					await r(i, s)
				} catch (o) {
					s(o)
				}
			})
		}
		e.withAsyncBody = n
	})(uh || (uh = {}))
	var lh = class e {
		static fromArray(t) {
			return new e((n) => {
				n.emitMany(t)
			})
		}
		static fromPromise(t) {
			return new e(async (n) => {
				n.emitMany(await t)
			})
		}
		static fromPromises(t) {
			return new e(async (n) => {
				await Promise.all(t.map(async (r) => n.emitOne(await r)))
			})
		}
		static merge(t) {
			return new e(async (n) => {
				await Promise.all(
					t.map(async (r) => {
						for await (let i of r) n.emitOne(i)
					})
				)
			})
		}
		static {
			this.EMPTY = e.fromArray([])
		}
		constructor(t, n) {
			;(this._state = 0),
				(this._results = []),
				(this._error = null),
				(this._onReturn = n),
				(this._onStateChanged = new lt()),
				queueMicrotask(async () => {
					let r = {
						emitOne: (i) => this.emitOne(i),
						emitMany: (i) => this.emitMany(i),
						reject: (i) => this.reject(i)
					}
					try {
						await Promise.resolve(t(r)), this.resolve()
					} catch (i) {
						this.reject(i)
					} finally {
						;(r.emitOne = void 0), (r.emitMany = void 0), (r.reject = void 0)
					}
				})
		}
		[Symbol.asyncIterator]() {
			let t = 0
			return {
				next: async () => {
					do {
						if (this._state === 2) throw this._error
						if (t < this._results.length) return { done: !1, value: this._results[t++] }
						if (this._state === 1) return { done: !0, value: void 0 }
						await ui.toPromise(this._onStateChanged.event)
					} while (!0)
				},
				return: async () => (this._onReturn?.(), { done: !0, value: void 0 })
			}
		}
		static map(t, n) {
			return new e(async (r) => {
				for await (let i of t) r.emitOne(n(i))
			})
		}
		map(t) {
			return e.map(this, t)
		}
		static filter(t, n) {
			return new e(async (r) => {
				for await (let i of t) n(i) && r.emitOne(i)
			})
		}
		filter(t) {
			return e.filter(this, t)
		}
		static coalesce(t) {
			return e.filter(t, (n) => !!n)
		}
		coalesce() {
			return e.coalesce(this)
		}
		static async toPromise(t) {
			let n = []
			for await (let r of t) n.push(r)
			return n
		}
		toPromise() {
			return e.toPromise(this)
		}
		emitOne(t) {
			this._state === 0 && (this._results.push(t), this._onStateChanged.fire())
		}
		emitMany(t) {
			this._state === 0 && ((this._results = this._results.concat(t)), this._onStateChanged.fire())
		}
		resolve() {
			this._state === 0 && ((this._state = 1), this._onStateChanged.fire())
		}
		reject(t) {
			this._state === 0 && ((this._state = 2), (this._error = t), this._onStateChanged.fire())
		}
	}
	var Da = class {
		constructor(t) {
			;(this.values = t),
				(this.prefixSum = new Uint32Array(t.length)),
				(this.prefixSumValidIndex = new Int32Array(1)),
				(this.prefixSumValidIndex[0] = -1)
		}
		insertValues(t, n) {
			t = _r(t)
			let r = this.values,
				i = this.prefixSum,
				s = n.length
			return s === 0
				? !1
				: ((this.values = new Uint32Array(r.length + s)),
				  this.values.set(r.subarray(0, t), 0),
				  this.values.set(r.subarray(t), t + s),
				  this.values.set(n, t),
				  t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
				  (this.prefixSum = new Uint32Array(this.values.length)),
				  this.prefixSumValidIndex[0] >= 0 &&
						this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
				  !0)
		}
		setValue(t, n) {
			return (
				(t = _r(t)),
				(n = _r(n)),
				this.values[t] === n
					? !1
					: ((this.values[t] = n),
					  t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
					  !0)
			)
		}
		removeValues(t, n) {
			;(t = _r(t)), (n = _r(n))
			let r = this.values,
				i = this.prefixSum
			if (t >= r.length) return !1
			let s = r.length - t
			return (
				n >= s && (n = s),
				n === 0
					? !1
					: ((this.values = new Uint32Array(r.length - n)),
					  this.values.set(r.subarray(0, t), 0),
					  this.values.set(r.subarray(t + n), t),
					  (this.prefixSum = new Uint32Array(this.values.length)),
					  t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1),
					  this.prefixSumValidIndex[0] >= 0 &&
							this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
					  !0)
			)
		}
		getTotalSum() {
			return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
		}
		getPrefixSum(t) {
			return t < 0 ? 0 : ((t = _r(t)), this._getPrefixSum(t))
		}
		_getPrefixSum(t) {
			if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t]
			let n = this.prefixSumValidIndex[0] + 1
			n === 0 && ((this.prefixSum[0] = this.values[0]), n++),
				t >= this.values.length && (t = this.values.length - 1)
			for (let r = n; r <= t; r++) this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r]
			return (
				(this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t)), this.prefixSum[t]
			)
		}
		getIndexOf(t) {
			;(t = Math.floor(t)), this.getTotalSum()
			let n = 0,
				r = this.values.length - 1,
				i = 0,
				s = 0,
				o = 0
			for (; n <= r; )
				if (((i = (n + (r - n) / 2) | 0), (s = this.prefixSum[i]), (o = s - this.values[i]), t < o))
					r = i - 1
				else if (t >= s) n = i + 1
				else break
			return new nc(i, t - o)
		}
	}
	var nc = class {
		constructor(t, n) {
			;(this.index = t),
				(this.remainder = n),
				(this._prefixSumIndexOfResultBrand = void 0),
				(this.index = t),
				(this.remainder = n)
		}
	}
	var va = class {
		constructor(t, n, r, i) {
			;(this._uri = t),
				(this._lines = n),
				(this._eol = r),
				(this._versionId = i),
				(this._lineStarts = null),
				(this._cachedTextValue = null)
		}
		dispose() {
			this._lines.length = 0
		}
		get version() {
			return this._versionId
		}
		getText() {
			return (
				this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)),
				this._cachedTextValue
			)
		}
		onEvents(t) {
			t.eol && t.eol !== this._eol && ((this._eol = t.eol), (this._lineStarts = null))
			let n = t.changes
			for (let r of n)
				this._acceptDeleteRange(r.range),
					this._acceptInsertText(new Se(r.range.startLineNumber, r.range.startColumn), r.text)
			;(this._versionId = t.versionId), (this._cachedTextValue = null)
		}
		_ensureLineStarts() {
			if (!this._lineStarts) {
				let t = this._eol.length,
					n = this._lines.length,
					r = new Uint32Array(n)
				for (let i = 0; i < n; i++) r[i] = this._lines[i].length + t
				this._lineStarts = new Da(r)
			}
		}
		_setLineText(t, n) {
			;(this._lines[t] = n),
				this._lineStarts && this._lineStarts.setValue(t, this._lines[t].length + this._eol.length)
		}
		_acceptDeleteRange(t) {
			if (t.startLineNumber === t.endLineNumber) {
				if (t.startColumn === t.endColumn) return
				this._setLineText(
					t.startLineNumber - 1,
					this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) +
						this._lines[t.startLineNumber - 1].substring(t.endColumn - 1)
				)
				return
			}
			this._setLineText(
				t.startLineNumber - 1,
				this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) +
					this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)
			),
				this._lines.splice(t.startLineNumber, t.endLineNumber - t.startLineNumber),
				this._lineStarts &&
					this._lineStarts.removeValues(t.startLineNumber, t.endLineNumber - t.startLineNumber)
		}
		_acceptInsertText(t, n) {
			if (n.length === 0) return
			let r = qf(n)
			if (r.length === 1) {
				this._setLineText(
					t.lineNumber - 1,
					this._lines[t.lineNumber - 1].substring(0, t.column - 1) +
						r[0] +
						this._lines[t.lineNumber - 1].substring(t.column - 1)
				)
				return
			}
			;(r[r.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1)),
				this._setLineText(
					t.lineNumber - 1,
					this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0]
				)
			let i = new Uint32Array(r.length - 1)
			for (let s = 1; s < r.length; s++)
				this._lines.splice(t.lineNumber + s - 1, 0, r[s]),
					(i[s - 1] = r[s].length + this._eol.length)
			this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i)
		}
	}
	var Nx = 60 * 1e3
	var ba = class {
			constructor() {
				this._models = Object.create(null)
			}
			getModel(t) {
				return this._models[t]
			}
			getModels() {
				let t = []
				return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t
			}
			$acceptNewModel(t) {
				this._models[t.url] = new rc(_t.parse(t.url), t.lines, t.EOL, t.versionId)
			}
			$acceptModelChanged(t, n) {
				if (!this._models[t]) return
				this._models[t].onEvents(n)
			}
			$acceptRemovedModel(t) {
				this._models[t] && delete this._models[t]
			}
		},
		rc = class extends va {
			get uri() {
				return this._uri
			}
			get eol() {
				return this._eol
			}
			getValue() {
				return this.getText()
			}
			findMatches(t) {
				let n = []
				for (let r = 0; r < this._lines.length; r++) {
					let i = this._lines[r],
						s = this.offsetAt(new Se(r + 1, 1)),
						o = i.matchAll(t)
					for (let a of o) (a.index || a.index === 0) && (a.index = a.index + s), n.push(a)
				}
				return n
			}
			getLinesContent() {
				return this._lines.slice(0)
			}
			getLineCount() {
				return this._lines.length
			}
			getLineContent(t) {
				return this._lines[t - 1]
			}
			getWordAtPosition(t, n) {
				let r = Cs(t.column, ql(n), this._lines[t.lineNumber - 1], 0)
				return r ? new oe(t.lineNumber, r.startColumn, t.lineNumber, r.endColumn) : null
			}
			words(t) {
				let n = this._lines,
					r = this._wordenize.bind(this),
					i = 0,
					s = '',
					o = 0,
					a = []
				return {
					*[Symbol.iterator]() {
						for (;;)
							if (o < a.length) {
								let u = s.substring(a[o].start, a[o].end)
								;(o += 1), yield u
							} else if (i < n.length) (s = n[i]), (a = r(s, t)), (o = 0), (i += 1)
							else break
					}
				}
			}
			getLineWords(t, n) {
				let r = this._lines[t - 1],
					i = this._wordenize(r, n),
					s = []
				for (let o of i)
					s.push({
						word: r.substring(o.start, o.end),
						startColumn: o.start + 1,
						endColumn: o.end + 1
					})
				return s
			}
			_wordenize(t, n) {
				let r = [],
					i
				for (n.lastIndex = 0; (i = n.exec(t)) && i[0].length !== 0; )
					r.push({ start: i.index, end: i.index + i[0].length })
				return r
			}
			getValueInRange(t) {
				if (((t = this._validateRange(t)), t.startLineNumber === t.endLineNumber))
					return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1)
				let n = this._eol,
					r = t.startLineNumber - 1,
					i = t.endLineNumber - 1,
					s = []
				s.push(this._lines[r].substring(t.startColumn - 1))
				for (let o = r + 1; o < i; o++) s.push(this._lines[o])
				return s.push(this._lines[i].substring(0, t.endColumn - 1)), s.join(n)
			}
			offsetAt(t) {
				return (
					(t = this._validatePosition(t)),
					this._ensureLineStarts(),
					this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1)
				)
			}
			positionAt(t) {
				;(t = Math.floor(t)), (t = Math.max(0, t)), this._ensureLineStarts()
				let n = this._lineStarts.getIndexOf(t),
					r = this._lines[n.index].length
				return { lineNumber: 1 + n.index, column: 1 + Math.min(n.remainder, r) }
			}
			_validateRange(t) {
				let n = this._validatePosition({ lineNumber: t.startLineNumber, column: t.startColumn }),
					r = this._validatePosition({ lineNumber: t.endLineNumber, column: t.endColumn })
				return n.lineNumber !== t.startLineNumber ||
					n.column !== t.startColumn ||
					r.lineNumber !== t.endLineNumber ||
					r.column !== t.endColumn
					? {
							startLineNumber: n.lineNumber,
							startColumn: n.column,
							endLineNumber: r.lineNumber,
							endColumn: r.column
					  }
					: t
			}
			_validatePosition(t) {
				if (!Se.isIPosition(t)) throw new Error('bad position')
				let { lineNumber: n, column: r } = t,
					i = !1
				if (n < 1) (n = 1), (r = 1), (i = !0)
				else if (n > this._lines.length)
					(n = this._lines.length), (r = this._lines[n - 1].length + 1), (i = !0)
				else {
					let s = this._lines[n - 1].length + 1
					r < 1 ? ((r = 1), (i = !0)) : r > s && ((r = s), (i = !0))
				}
				return i ? { lineNumber: n, column: r } : t
			}
		}
	var G5 = !0,
		ic = class {
			constructor() {
				this._workerTextModelSyncServer = new ba()
			}
			dispose() {}
			_getModel(t) {
				return this._workerTextModelSyncServer.getModel(t)
			}
			_getModels() {
				return this._workerTextModelSyncServer.getModels()
			}
			$acceptNewModel(t) {
				this._workerTextModelSyncServer.$acceptNewModel(t)
			}
			$acceptModelChanged(t, n) {
				this._workerTextModelSyncServer.$acceptModelChanged(t, n)
			}
			$acceptRemovedModel(t) {
				this._workerTextModelSyncServer.$acceptRemovedModel(t)
			}
			async $computeUnicodeHighlights(t, n, r) {
				let i = this._getModel(t)
				return i
					? sa.computeUnicodeHighlights(i, n, r)
					: {
							ranges: [],
							hasMore: !1,
							ambiguousCharacterCount: 0,
							invisibleCharacterCount: 0,
							nonBasicAsciiCharacterCount: 0
					  }
			}
			async $findSectionHeaders(t, n) {
				let r = this._getModel(t)
				return r ? oh(r, n) : []
			}
			async $computeDiff(t, n, r, i) {
				let s = this._getModel(t),
					o = this._getModel(n)
				return !s || !o ? null : Fr.computeDiff(s, o, r, i)
			}
			static computeDiff(t, n, r, i) {
				let s = i === 'advanced' ? Zl.getDefault() : Zl.getLegacy(),
					o = t.getLinesContent(),
					a = n.getLinesContent(),
					u = s.computeDiff(o, a, r),
					l = u.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n)
				function c(d) {
					return d.map((h) => [
						h.original.startLineNumber,
						h.original.endLineNumberExclusive,
						h.modified.startLineNumber,
						h.modified.endLineNumberExclusive,
						h.innerChanges?.map((m) => [
							m.originalRange.startLineNumber,
							m.originalRange.startColumn,
							m.originalRange.endLineNumber,
							m.originalRange.endColumn,
							m.modifiedRange.startLineNumber,
							m.modifiedRange.startColumn,
							m.modifiedRange.endLineNumber,
							m.modifiedRange.endColumn
						])
					])
				}
				return {
					identical: l,
					quitEarly: u.hitTimeout,
					changes: c(u.changes),
					moves: u.moves.map((d) => [
						d.lineRangeMapping.original.startLineNumber,
						d.lineRangeMapping.original.endLineNumberExclusive,
						d.lineRangeMapping.modified.startLineNumber,
						d.lineRangeMapping.modified.endLineNumberExclusive,
						c(d.changes)
					])
				}
			}
			static _modelsAreIdentical(t, n) {
				let r = t.getLineCount(),
					i = n.getLineCount()
				if (r !== i) return !1
				for (let s = 1; s <= r; s++) {
					let o = t.getLineContent(s),
						a = n.getLineContent(s)
					if (o !== a) return !1
				}
				return !0
			}
			static {
				this._diffLimit = 1e5
			}
			async $computeMoreMinimalEdits(t, n, r) {
				let i = this._getModel(t)
				if (!i) return n
				let s = [],
					o
				n = n.slice(0).sort((u, l) => {
					if (u.range && l.range) return oe.compareRangesUsingStarts(u.range, l.range)
					let c = u.range ? 0 : 1,
						d = l.range ? 0 : 1
					return c - d
				})
				let a = 0
				for (let u = 1; u < n.length; u++)
					oe.getEndPosition(n[a].range).equals(oe.getStartPosition(n[u].range))
						? ((n[a].range = oe.fromPositions(
								oe.getStartPosition(n[a].range),
								oe.getEndPosition(n[u].range)
						  )),
						  (n[a].text += n[u].text))
						: (a++, (n[a] = n[u]))
				n.length = a + 1
				for (let { range: u, text: l, eol: c } of n) {
					if ((typeof c == 'number' && (o = c), oe.isEmpty(u) && !l)) continue
					let d = i.getValueInRange(u)
					if (((l = l.replace(/\r\n|\n|\r/g, i.eol)), d === l)) continue
					if (Math.max(l.length, d.length) > Fr._diffLimit) {
						s.push({ range: u, text: l })
						continue
					}
					let h = fd(d, l, r),
						m = i.offsetAt(oe.lift(u).getStartPosition())
					for (let g of h) {
						let v = i.positionAt(m + g.originalStart),
							N = i.positionAt(m + g.originalStart + g.originalLength),
							_ = {
								text: l.substr(g.modifiedStart, g.modifiedLength),
								range: {
									startLineNumber: v.lineNumber,
									startColumn: v.column,
									endLineNumber: N.lineNumber,
									endColumn: N.column
								}
							}
						i.getValueInRange(_.range) !== _.text && s.push(_)
					}
				}
				return (
					typeof o == 'number' &&
						s.push({
							eol: o,
							text: '',
							range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 }
						}),
					s
				)
			}
			async $computeLinks(t) {
				let n = this._getModel(t)
				return n ? dd(n) : null
			}
			async $computeDefaultDocumentColors(t) {
				let n = this._getModel(t)
				return n ? ih(n) : null
			}
			static {
				this._suggestionsLimit = 1e4
			}
			async $textualSuggest(t, n, r, i) {
				let s = new oi(),
					o = new RegExp(r, i),
					a = new Set()
				e: for (let u of t) {
					let l = this._getModel(u)
					if (l) {
						for (let c of l.words(o))
							if (!(c === n || !isNaN(Number(c))) && (a.add(c), a.size > Fr._suggestionsLimit))
								break e
					}
				}
				return { words: Array.from(a), duration: s.elapsed() }
			}
			async $computeWordRanges(t, n, r, i) {
				let s = this._getModel(t)
				if (!s) return Object.create(null)
				let o = new RegExp(r, i),
					a = Object.create(null)
				for (let u = n.startLineNumber; u < n.endLineNumber; u++) {
					let l = s.getLineWords(u, o)
					for (let c of l) {
						if (!isNaN(Number(c.word))) continue
						let d = a[c.word]
						d || ((d = []), (a[c.word] = d)),
							d.push({
								startLineNumber: u,
								startColumn: c.startColumn,
								endLineNumber: u,
								endColumn: c.endColumn
							})
					}
				}
				return a
			}
			async $navigateValueSet(t, n, r, i, s) {
				let o = this._getModel(t)
				if (!o) return null
				let a = new RegExp(i, s)
				n.startColumn === n.endColumn &&
					(n = {
						startLineNumber: n.startLineNumber,
						startColumn: n.startColumn,
						endLineNumber: n.endLineNumber,
						endColumn: n.endColumn + 1
					})
				let u = o.getValueInRange(n),
					l = o.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, a)
				if (!l) return null
				let c = o.getValueInRange(l)
				return Qo.INSTANCE.navigateValueSet(n, u, l, c, r)
			}
		},
		Fr = class extends ic {
			constructor(t, n) {
				super(), (this._host = t), (this._foreignModuleFactory = n), (this._foreignModule = null)
			}
			async $ping() {
				return 'pong'
			}
			$loadForeignModule(t, n, r) {
				let o = {
					host: Tp(r, (a, u) => this._host.$fhr(a, u)),
					getMirrorModels: () => this._getModels()
				}
				return this._foreignModuleFactory
					? ((this._foreignModule = this._foreignModuleFactory(o, n)),
					  Promise.resolve($l(this._foreignModule)))
					: new Promise((a, u) => {
							let l = (c) => {
								;(this._foreignModule = c.create(o, n)), a($l(this._foreignModule))
							}
							G5
								? import(`${jo.asBrowserUri(`${t}.js`).toString(!0)}`)
										.then(l)
										.catch(u)
								: Ff([`${t}`], l, u)
					  })
			}
			$fmr(t, n) {
				if (!this._foreignModule || typeof this._foreignModule[t] != 'function')
					return Promise.reject(new Error('Missing requestHandler or method: ' + t))
				try {
					return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n))
				} catch (r) {
					return Promise.reject(r)
				}
			}
		}
	typeof importScripts == 'function' && (globalThis.monaco = yp())
	var sc = !1
	function oc(e) {
		if (sc) return
		sc = !0
		let t = new Go(
			(n) => {
				globalThis.postMessage(n)
			},
			(n) => new Fr(ws.getChannel(n), e)
		)
		globalThis.onmessage = (n) => {
			t.onmessage(n.data)
		}
	}
	globalThis.onmessage = (e) => {
		sc || oc(null)
	}
	function pe(e, t) {
		if (!!!e) throw new Error(t)
	}
	function Nt(e) {
		return typeof e == 'object' && e !== null
	}
	function Ge(e, t) {
		if (!!!e) throw new Error(t ?? 'Unexpected invariant triggered.')
	}
	var H5 = /\r\n|[\n\r]/g
	function Ei(e, t) {
		let n = 0,
			r = 1
		for (let i of e.body.matchAll(H5)) {
			if ((typeof i.index == 'number' || Ge(!1), i.index >= t)) break
			;(n = i.index + i[0].length), (r += 1)
		}
		return { line: r, column: t + 1 - n }
	}
	function ac(e) {
		return Ea(e.source, Ei(e.source, e.start))
	}
	function Ea(e, t) {
		let n = e.locationOffset.column - 1,
			r = ''.padStart(n) + e.body,
			i = t.line - 1,
			s = e.locationOffset.line - 1,
			o = t.line + s,
			a = t.line === 1 ? n : 0,
			u = t.column + a,
			l = `${e.name}:${o}:${u}
`,
			c = r.split(/\r\n|[\n\r]/g),
			d = c[i]
		if (d.length > 120) {
			let h = Math.floor(u / 80),
				m = u % 80,
				g = []
			for (let v = 0; v < d.length; v += 80) g.push(d.slice(v, v + 80))
			return (
				l +
				ch([
					[`${o} |`, g[0]],
					...g.slice(1, h + 1).map((v) => ['|', v]),
					['|', '^'.padStart(m)],
					['|', g[h + 1]]
				])
			)
		}
		return (
			l +
			ch([
				[`${o - 1} |`, c[i - 1]],
				[`${o} |`, d],
				['|', '^'.padStart(u)],
				[`${o + 1} |`, c[i + 1]]
			])
		)
	}
	function ch(e) {
		let t = e.filter(([r, i]) => i !== void 0),
			n = Math.max(...t.map(([r]) => r.length))
		return t.map(([r, i]) => r.padStart(n) + (i ? ' ' + i : '')).join(`
`)
	}
	function W5(e) {
		let t = e[0]
		return t == null || 'kind' in t || 'length' in t
			? {
					nodes: t,
					source: e[1],
					positions: e[2],
					path: e[3],
					originalError: e[4],
					extensions: e[5]
			  }
			: t
	}
	var O = class e extends Error {
		constructor(t, ...n) {
			var r, i, s
			let { nodes: o, source: a, positions: u, path: l, originalError: c, extensions: d } = W5(n)
			super(t),
				(this.name = 'GraphQLError'),
				(this.path = l ?? void 0),
				(this.originalError = c ?? void 0),
				(this.nodes = fh(Array.isArray(o) ? o : o ? [o] : void 0))
			let h = fh(
				(r = this.nodes) === null || r === void 0
					? void 0
					: r.map((g) => g.loc).filter((g) => g != null)
			)
			;(this.source = a ?? (h == null || (i = h[0]) === null || i === void 0 ? void 0 : i.source)),
				(this.positions = u ?? h?.map((g) => g.start)),
				(this.locations = u && a ? u.map((g) => Ei(a, g)) : h?.map((g) => Ei(g.source, g.start)))
			let m = Nt(c?.extensions) ? c?.extensions : void 0
			;(this.extensions = (s = d ?? m) !== null && s !== void 0 ? s : Object.create(null)),
				Object.defineProperties(this, {
					message: { writable: !0, enumerable: !0 },
					name: { enumerable: !1 },
					nodes: { enumerable: !1 },
					source: { enumerable: !1 },
					positions: { enumerable: !1 },
					originalError: { enumerable: !1 }
				}),
				c != null && c.stack
					? Object.defineProperty(this, 'stack', { value: c.stack, writable: !0, configurable: !0 })
					: Error.captureStackTrace
					? Error.captureStackTrace(this, e)
					: Object.defineProperty(this, 'stack', {
							value: Error().stack,
							writable: !0,
							configurable: !0
					  })
		}
		get [Symbol.toStringTag]() {
			return 'GraphQLError'
		}
		toString() {
			let t = this.message
			if (this.nodes)
				for (let n of this.nodes)
					n.loc &&
						(t +=
							`

` + ac(n.loc))
			else if (this.source && this.locations)
				for (let n of this.locations)
					t +=
						`

` + Ea(this.source, n)
			return t
		}
		toJSON() {
			let t = { message: this.message }
			return (
				this.locations != null && (t.locations = this.locations),
				this.path != null && (t.path = this.path),
				this.extensions != null &&
					Object.keys(this.extensions).length > 0 &&
					(t.extensions = this.extensions),
				t
			)
		}
	}
	function fh(e) {
		return e === void 0 || e.length === 0 ? void 0 : e
	}
	function Xe(e, t, n) {
		return new O(`Syntax Error: ${n}`, { source: e, positions: [t] })
	}
	var $s = class {
			constructor(t, n, r) {
				;(this.start = t.start),
					(this.end = n.end),
					(this.startToken = t),
					(this.endToken = n),
					(this.source = r)
			}
			get [Symbol.toStringTag]() {
				return 'Location'
			}
			toJSON() {
				return { start: this.start, end: this.end }
			}
		},
		yi = class {
			constructor(t, n, r, i, s, o) {
				;(this.kind = t),
					(this.start = n),
					(this.end = r),
					(this.line = i),
					(this.column = s),
					(this.value = o),
					(this.prev = null),
					(this.next = null)
			}
			get [Symbol.toStringTag]() {
				return 'Token'
			}
			toJSON() {
				return { kind: this.kind, value: this.value, line: this.line, column: this.column }
			}
		},
		uc = {
			Name: [],
			Document: ['definitions'],
			OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
			VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
			Variable: ['name'],
			SelectionSet: ['selections'],
			Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
			Argument: ['name', 'value'],
			FragmentSpread: ['name', 'directives'],
			InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
			FragmentDefinition: [
				'name',
				'variableDefinitions',
				'typeCondition',
				'directives',
				'selectionSet'
			],
			IntValue: [],
			FloatValue: [],
			StringValue: [],
			BooleanValue: [],
			NullValue: [],
			EnumValue: [],
			ListValue: ['values'],
			ObjectValue: ['fields'],
			ObjectField: ['name', 'value'],
			Directive: ['name', 'arguments'],
			NamedType: ['name'],
			ListType: ['type'],
			NonNullType: ['type'],
			SchemaDefinition: ['description', 'directives', 'operationTypes'],
			OperationTypeDefinition: ['type'],
			ScalarTypeDefinition: ['description', 'name', 'directives'],
			ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
			FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
			InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
			InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
			UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
			EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
			EnumValueDefinition: ['description', 'name', 'directives'],
			InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
			DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
			SchemaExtension: ['directives', 'operationTypes'],
			ScalarTypeExtension: ['name', 'directives'],
			ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
			InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
			UnionTypeExtension: ['name', 'directives', 'types'],
			EnumTypeExtension: ['name', 'directives', 'values'],
			InputObjectTypeExtension: ['name', 'directives', 'fields']
		},
		Q5 = new Set(Object.keys(uc))
	function js(e) {
		let t = e?.kind
		return typeof t == 'string' && Q5.has(t)
	}
	var st
	;(function (e) {
		;(e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription')
	})(st || (st = {}))
	var K
	;(function (e) {
		;(e.QUERY = 'QUERY'),
			(e.MUTATION = 'MUTATION'),
			(e.SUBSCRIPTION = 'SUBSCRIPTION'),
			(e.FIELD = 'FIELD'),
			(e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
			(e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
			(e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
			(e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
			(e.SCHEMA = 'SCHEMA'),
			(e.SCALAR = 'SCALAR'),
			(e.OBJECT = 'OBJECT'),
			(e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
			(e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
			(e.INTERFACE = 'INTERFACE'),
			(e.UNION = 'UNION'),
			(e.ENUM = 'ENUM'),
			(e.ENUM_VALUE = 'ENUM_VALUE'),
			(e.INPUT_OBJECT = 'INPUT_OBJECT'),
			(e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION')
	})(K || (K = {}))
	var E
	;(function (e) {
		;(e.NAME = 'Name'),
			(e.DOCUMENT = 'Document'),
			(e.OPERATION_DEFINITION = 'OperationDefinition'),
			(e.VARIABLE_DEFINITION = 'VariableDefinition'),
			(e.SELECTION_SET = 'SelectionSet'),
			(e.FIELD = 'Field'),
			(e.ARGUMENT = 'Argument'),
			(e.FRAGMENT_SPREAD = 'FragmentSpread'),
			(e.INLINE_FRAGMENT = 'InlineFragment'),
			(e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
			(e.VARIABLE = 'Variable'),
			(e.INT = 'IntValue'),
			(e.FLOAT = 'FloatValue'),
			(e.STRING = 'StringValue'),
			(e.BOOLEAN = 'BooleanValue'),
			(e.NULL = 'NullValue'),
			(e.ENUM = 'EnumValue'),
			(e.LIST = 'ListValue'),
			(e.OBJECT = 'ObjectValue'),
			(e.OBJECT_FIELD = 'ObjectField'),
			(e.DIRECTIVE = 'Directive'),
			(e.NAMED_TYPE = 'NamedType'),
			(e.LIST_TYPE = 'ListType'),
			(e.NON_NULL_TYPE = 'NonNullType'),
			(e.SCHEMA_DEFINITION = 'SchemaDefinition'),
			(e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
			(e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
			(e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
			(e.FIELD_DEFINITION = 'FieldDefinition'),
			(e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
			(e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
			(e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
			(e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
			(e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
			(e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
			(e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
			(e.SCHEMA_EXTENSION = 'SchemaExtension'),
			(e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
			(e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
			(e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
			(e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
			(e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
			(e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension')
	})(E || (E = {}))
	function ya(e) {
		return e === 9 || e === 32
	}
	function xi(e) {
		return e >= 48 && e <= 57
	}
	function dh(e) {
		return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
	}
	function qs(e) {
		return dh(e) || e === 95
	}
	function xa(e) {
		return dh(e) || xi(e) || e === 95
	}
	function ph(e) {
		var t
		let n = Number.MAX_SAFE_INTEGER,
			r = null,
			i = -1
		for (let o = 0; o < e.length; ++o) {
			var s
			let a = e[o],
				u = z5(a)
			u !== a.length &&
				((r = (s = r) !== null && s !== void 0 ? s : o), (i = o), o !== 0 && u < n && (n = u))
		}
		return e
			.map((o, a) => (a === 0 ? o : o.slice(n)))
			.slice((t = r) !== null && t !== void 0 ? t : 0, i + 1)
	}
	function z5(e) {
		let t = 0
		for (; t < e.length && ya(e.charCodeAt(t)); ) ++t
		return t
	}
	function hh(e, t) {
		let n = e.replace(/"""/g, '\\"""'),
			r = n.split(/\r\n|[\n\r]/g),
			i = r.length === 1,
			s = r.length > 1 && r.slice(1).every((m) => m.length === 0 || ya(m.charCodeAt(0))),
			o = n.endsWith('\\"""'),
			a = e.endsWith('"') && !o,
			u = e.endsWith('\\'),
			l = a || u,
			c = !(t != null && t.minimize) && (!i || e.length > 70 || l || s || o),
			d = '',
			h = i && ya(e.charCodeAt(0))
		return (
			((c && !h) || s) &&
				(d += `
`),
			(d += n),
			(c || l) &&
				(d += `
`),
			'"""' + d + '"""'
		)
	}
	var U
	;(function (e) {
		;(e.SOF = '<SOF>'),
			(e.EOF = '<EOF>'),
			(e.BANG = '!'),
			(e.DOLLAR = '$'),
			(e.AMP = '&'),
			(e.PAREN_L = '('),
			(e.PAREN_R = ')'),
			(e.SPREAD = '...'),
			(e.COLON = ':'),
			(e.EQUALS = '='),
			(e.AT = '@'),
			(e.BRACKET_L = '['),
			(e.BRACKET_R = ']'),
			(e.BRACE_L = '{'),
			(e.PIPE = '|'),
			(e.BRACE_R = '}'),
			(e.NAME = 'Name'),
			(e.INT = 'Int'),
			(e.FLOAT = 'Float'),
			(e.STRING = 'String'),
			(e.BLOCK_STRING = 'BlockString'),
			(e.COMMENT = 'Comment')
	})(U || (U = {}))
	var Hs = class {
		constructor(t) {
			let n = new yi(U.SOF, 0, 0, 0, 0)
			;(this.source = t),
				(this.lastToken = n),
				(this.token = n),
				(this.line = 1),
				(this.lineStart = 0)
		}
		get [Symbol.toStringTag]() {
			return 'Lexer'
		}
		advance() {
			return (this.lastToken = this.token), (this.token = this.lookahead())
		}
		lookahead() {
			let t = this.token
			if (t.kind !== U.EOF)
				do
					if (t.next) t = t.next
					else {
						let n = Y5(this, t.end)
						;(t.next = n), (n.prev = t), (t = n)
					}
				while (t.kind === U.COMMENT)
			return t
		}
	}
	function gh(e) {
		return (
			e === U.BANG ||
			e === U.DOLLAR ||
			e === U.AMP ||
			e === U.PAREN_L ||
			e === U.PAREN_R ||
			e === U.SPREAD ||
			e === U.COLON ||
			e === U.EQUALS ||
			e === U.AT ||
			e === U.BRACKET_L ||
			e === U.BRACKET_R ||
			e === U.BRACE_L ||
			e === U.PIPE ||
			e === U.BRACE_R
		)
	}
	function _i(e) {
		return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111)
	}
	function _a(e, t) {
		return Dh(e.charCodeAt(t)) && vh(e.charCodeAt(t + 1))
	}
	function Dh(e) {
		return e >= 55296 && e <= 56319
	}
	function vh(e) {
		return e >= 56320 && e <= 57343
	}
	function wr(e, t) {
		let n = e.source.body.codePointAt(t)
		if (n === void 0) return U.EOF
		if (n >= 32 && n <= 126) {
			let r = String.fromCodePoint(n)
			return r === '"' ? `'"'` : `"${r}"`
		}
		return 'U+' + n.toString(16).toUpperCase().padStart(4, '0')
	}
	function ot(e, t, n, r, i) {
		let s = e.line,
			o = 1 + n - e.lineStart
		return new yi(t, n, r, s, o, i)
	}
	function Y5(e, t) {
		let n = e.source.body,
			r = n.length,
			i = t
		for (; i < r; ) {
			let s = n.charCodeAt(i)
			switch (s) {
				case 65279:
				case 9:
				case 32:
				case 44:
					++i
					continue
				case 10:
					++i, ++e.line, (e.lineStart = i)
					continue
				case 13:
					n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i, ++e.line, (e.lineStart = i)
					continue
				case 35:
					return J5(e, i)
				case 33:
					return ot(e, U.BANG, i, i + 1)
				case 36:
					return ot(e, U.DOLLAR, i, i + 1)
				case 38:
					return ot(e, U.AMP, i, i + 1)
				case 40:
					return ot(e, U.PAREN_L, i, i + 1)
				case 41:
					return ot(e, U.PAREN_R, i, i + 1)
				case 46:
					if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
						return ot(e, U.SPREAD, i, i + 3)
					break
				case 58:
					return ot(e, U.COLON, i, i + 1)
				case 61:
					return ot(e, U.EQUALS, i, i + 1)
				case 64:
					return ot(e, U.AT, i, i + 1)
				case 91:
					return ot(e, U.BRACKET_L, i, i + 1)
				case 93:
					return ot(e, U.BRACKET_R, i, i + 1)
				case 123:
					return ot(e, U.BRACE_L, i, i + 1)
				case 124:
					return ot(e, U.PIPE, i, i + 1)
				case 125:
					return ot(e, U.BRACE_R, i, i + 1)
				case 34:
					return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? n7(e, i) : K5(e, i)
			}
			if (xi(s) || s === 45) return X5(e, i, s)
			if (qs(s)) return r7(e, i)
			throw Xe(
				e.source,
				i,
				s === 39
					? `Unexpected single quote character ('), did you mean to use a double quote (")?`
					: _i(s) || _a(n, i)
					? `Unexpected character: ${wr(e, i)}.`
					: `Invalid character: ${wr(e, i)}.`
			)
		}
		return ot(e, U.EOF, r, r)
	}
	function J5(e, t) {
		let n = e.source.body,
			r = n.length,
			i = t + 1
		for (; i < r; ) {
			let s = n.charCodeAt(i)
			if (s === 10 || s === 13) break
			if (_i(s)) ++i
			else if (_a(n, i)) i += 2
			else break
		}
		return ot(e, U.COMMENT, t, i, n.slice(t + 1, i))
	}
	function X5(e, t, n) {
		let r = e.source.body,
			i = t,
			s = n,
			o = !1
		if ((s === 45 && (s = r.charCodeAt(++i)), s === 48)) {
			if (((s = r.charCodeAt(++i)), xi(s)))
				throw Xe(e.source, i, `Invalid number, unexpected digit after 0: ${wr(e, i)}.`)
		} else (i = lc(e, i, s)), (s = r.charCodeAt(i))
		if (
			(s === 46 && ((o = !0), (s = r.charCodeAt(++i)), (i = lc(e, i, s)), (s = r.charCodeAt(i))),
			(s === 69 || s === 101) &&
				((o = !0),
				(s = r.charCodeAt(++i)),
				(s === 43 || s === 45) && (s = r.charCodeAt(++i)),
				(i = lc(e, i, s)),
				(s = r.charCodeAt(i))),
			s === 46 || qs(s))
		)
			throw Xe(e.source, i, `Invalid number, expected digit but got: ${wr(e, i)}.`)
		return ot(e, o ? U.FLOAT : U.INT, t, i, r.slice(t, i))
	}
	function lc(e, t, n) {
		if (!xi(n)) throw Xe(e.source, t, `Invalid number, expected digit but got: ${wr(e, t)}.`)
		let r = e.source.body,
			i = t + 1
		for (; xi(r.charCodeAt(i)); ) ++i
		return i
	}
	function K5(e, t) {
		let n = e.source.body,
			r = n.length,
			i = t + 1,
			s = i,
			o = ''
		for (; i < r; ) {
			let a = n.charCodeAt(i)
			if (a === 34) return (o += n.slice(s, i)), ot(e, U.STRING, t, i + 1, o)
			if (a === 92) {
				o += n.slice(s, i)
				let u =
					n.charCodeAt(i + 1) === 117
						? n.charCodeAt(i + 2) === 123
							? Z5(e, i)
							: e7(e, i)
						: t7(e, i)
				;(o += u.value), (i += u.size), (s = i)
				continue
			}
			if (a === 10 || a === 13) break
			if (_i(a)) ++i
			else if (_a(n, i)) i += 2
			else throw Xe(e.source, i, `Invalid character within String: ${wr(e, i)}.`)
		}
		throw Xe(e.source, i, 'Unterminated string.')
	}
	function Z5(e, t) {
		let n = e.source.body,
			r = 0,
			i = 3
		for (; i < 12; ) {
			let s = n.charCodeAt(t + i++)
			if (s === 125) {
				if (i < 5 || !_i(r)) break
				return { value: String.fromCodePoint(r), size: i }
			}
			if (((r = (r << 4) | Gs(s)), r < 0)) break
		}
		throw Xe(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`)
	}
	function e7(e, t) {
		let n = e.source.body,
			r = mh(n, t + 2)
		if (_i(r)) return { value: String.fromCodePoint(r), size: 6 }
		if (Dh(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
			let i = mh(n, t + 8)
			if (vh(i)) return { value: String.fromCodePoint(r, i), size: 12 }
		}
		throw Xe(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
	}
	function mh(e, t) {
		return (
			(Gs(e.charCodeAt(t)) << 12) |
			(Gs(e.charCodeAt(t + 1)) << 8) |
			(Gs(e.charCodeAt(t + 2)) << 4) |
			Gs(e.charCodeAt(t + 3))
		)
	}
	function Gs(e) {
		return e >= 48 && e <= 57
			? e - 48
			: e >= 65 && e <= 70
			? e - 55
			: e >= 97 && e <= 102
			? e - 87
			: -1
	}
	function t7(e, t) {
		let n = e.source.body
		switch (n.charCodeAt(t + 1)) {
			case 34:
				return { value: '"', size: 2 }
			case 92:
				return { value: '\\', size: 2 }
			case 47:
				return { value: '/', size: 2 }
			case 98:
				return { value: '\b', size: 2 }
			case 102:
				return { value: '\f', size: 2 }
			case 110:
				return {
					value: `
`,
					size: 2
				}
			case 114:
				return { value: '\r', size: 2 }
			case 116:
				return { value: '	', size: 2 }
		}
		throw Xe(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
	}
	function n7(e, t) {
		let n = e.source.body,
			r = n.length,
			i = e.lineStart,
			s = t + 3,
			o = s,
			a = '',
			u = []
		for (; s < r; ) {
			let l = n.charCodeAt(s)
			if (l === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
				;(a += n.slice(o, s)), u.push(a)
				let c = ot(
					e,
					U.BLOCK_STRING,
					t,
					s + 3,
					ph(u).join(`
`)
				)
				return (e.line += u.length - 1), (e.lineStart = i), c
			}
			if (
				l === 92 &&
				n.charCodeAt(s + 1) === 34 &&
				n.charCodeAt(s + 2) === 34 &&
				n.charCodeAt(s + 3) === 34
			) {
				;(a += n.slice(o, s)), (o = s + 1), (s += 4)
				continue
			}
			if (l === 10 || l === 13) {
				;(a += n.slice(o, s)),
					u.push(a),
					l === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s,
					(a = ''),
					(o = s),
					(i = s)
				continue
			}
			if (_i(l)) ++s
			else if (_a(n, s)) s += 2
			else throw Xe(e.source, s, `Invalid character within String: ${wr(e, s)}.`)
		}
		throw Xe(e.source, s, 'Unterminated string.')
	}
	function r7(e, t) {
		let n = e.source.body,
			r = n.length,
			i = t + 1
		for (; i < r; ) {
			let s = n.charCodeAt(i)
			if (xa(s)) ++i
			else break
		}
		return ot(e, U.NAME, t, i, n.slice(t, i))
	}
	function q(e) {
		return Na(e, [])
	}
	function Na(e, t) {
		switch (typeof e) {
			case 'string':
				return JSON.stringify(e)
			case 'function':
				return e.name ? `[function ${e.name}]` : '[function]'
			case 'object':
				return i7(e, t)
			default:
				return String(e)
		}
	}
	function i7(e, t) {
		if (e === null) return 'null'
		if (t.includes(e)) return '[Circular]'
		let n = [...t, e]
		if (s7(e)) {
			let r = e.toJSON()
			if (r !== e) return typeof r == 'string' ? r : Na(r, n)
		} else if (Array.isArray(e)) return a7(e, n)
		return o7(e, n)
	}
	function s7(e) {
		return typeof e.toJSON == 'function'
	}
	function o7(e, t) {
		let n = Object.entries(e)
		return n.length === 0
			? '{}'
			: t.length > 2
			? '[' + u7(e) + ']'
			: '{ ' + n.map(([i, s]) => i + ': ' + Na(s, t)).join(', ') + ' }'
	}
	function a7(e, t) {
		if (e.length === 0) return '[]'
		if (t.length > 2) return '[Array]'
		let n = Math.min(10, e.length),
			r = e.length - n,
			i = []
		for (let s = 0; s < n; ++s) i.push(Na(e[s], t))
		return (
			r === 1 ? i.push('... 1 more item') : r > 1 && i.push(`... ${r} more items`),
			'[' + i.join(', ') + ']'
		)
	}
	function u7(e) {
		let t = Object.prototype.toString
			.call(e)
			.replace(/^\[object /, '')
			.replace(/]$/, '')
		if (t === 'Object' && typeof e.constructor == 'function') {
			let n = e.constructor.name
			if (typeof n == 'string' && n !== '') return n
		}
		return t
	}
	var l7 = globalThis.process && !0,
		Lt = l7
			? function (t, n) {
					return t instanceof n
			  }
			: function (t, n) {
					if (t instanceof n) return !0
					if (typeof t == 'object' && t !== null) {
						var r
						let i = n.prototype[Symbol.toStringTag],
							s =
								Symbol.toStringTag in t
									? t[Symbol.toStringTag]
									: (r = t.constructor) === null || r === void 0
									? void 0
									: r.name
						if (i === s) {
							let o = q(t)
							throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)
						}
					}
					return !1
			  }
	var Ni = class {
		constructor(t, n = 'GraphQL request', r = { line: 1, column: 1 }) {
			typeof t == 'string' || pe(!1, `Body must be a string. Received: ${q(t)}.`),
				(this.body = t),
				(this.name = n),
				(this.locationOffset = r),
				this.locationOffset.line > 0 ||
					pe(!1, 'line in locationOffset is 1-indexed and must be positive.'),
				this.locationOffset.column > 0 ||
					pe(!1, 'column in locationOffset is 1-indexed and must be positive.')
		}
		get [Symbol.toStringTag]() {
			return 'Source'
		}
	}
	function bh(e) {
		return Lt(e, Ni)
	}
	function Kt(e, t) {
		return new Sa(e, t).parseDocument()
	}
	function Aa(e, t) {
		let n = new Sa(e, t)
		n.expectToken(U.SOF)
		let r = n.parseValueLiteral(!1)
		return n.expectToken(U.EOF), r
	}
	var Sa = class {
		constructor(t, n = {}) {
			let r = bh(t) ? t : new Ni(t)
			;(this._lexer = new Hs(r)), (this._options = n), (this._tokenCounter = 0)
		}
		parseName() {
			let t = this.expectToken(U.NAME)
			return this.node(t, { kind: E.NAME, value: t.value })
		}
		parseDocument() {
			return this.node(this._lexer.token, {
				kind: E.DOCUMENT,
				definitions: this.many(U.SOF, this.parseDefinition, U.EOF)
			})
		}
		parseDefinition() {
			if (this.peek(U.BRACE_L)) return this.parseOperationDefinition()
			let t = this.peekDescription(),
				n = t ? this._lexer.lookahead() : this._lexer.token
			if (n.kind === U.NAME) {
				switch (n.value) {
					case 'schema':
						return this.parseSchemaDefinition()
					case 'scalar':
						return this.parseScalarTypeDefinition()
					case 'type':
						return this.parseObjectTypeDefinition()
					case 'interface':
						return this.parseInterfaceTypeDefinition()
					case 'union':
						return this.parseUnionTypeDefinition()
					case 'enum':
						return this.parseEnumTypeDefinition()
					case 'input':
						return this.parseInputObjectTypeDefinition()
					case 'directive':
						return this.parseDirectiveDefinition()
				}
				if (t)
					throw Xe(
						this._lexer.source,
						this._lexer.token.start,
						'Unexpected description, descriptions are supported only on type definitions.'
					)
				switch (n.value) {
					case 'query':
					case 'mutation':
					case 'subscription':
						return this.parseOperationDefinition()
					case 'fragment':
						return this.parseFragmentDefinition()
					case 'extend':
						return this.parseTypeSystemExtension()
				}
			}
			throw this.unexpected(n)
		}
		parseOperationDefinition() {
			let t = this._lexer.token
			if (this.peek(U.BRACE_L))
				return this.node(t, {
					kind: E.OPERATION_DEFINITION,
					operation: st.QUERY,
					name: void 0,
					variableDefinitions: [],
					directives: [],
					selectionSet: this.parseSelectionSet()
				})
			let n = this.parseOperationType(),
				r
			return (
				this.peek(U.NAME) && (r = this.parseName()),
				this.node(t, {
					kind: E.OPERATION_DEFINITION,
					operation: n,
					name: r,
					variableDefinitions: this.parseVariableDefinitions(),
					directives: this.parseDirectives(!1),
					selectionSet: this.parseSelectionSet()
				})
			)
		}
		parseOperationType() {
			let t = this.expectToken(U.NAME)
			switch (t.value) {
				case 'query':
					return st.QUERY
				case 'mutation':
					return st.MUTATION
				case 'subscription':
					return st.SUBSCRIPTION
			}
			throw this.unexpected(t)
		}
		parseVariableDefinitions() {
			return this.optionalMany(U.PAREN_L, this.parseVariableDefinition, U.PAREN_R)
		}
		parseVariableDefinition() {
			return this.node(this._lexer.token, {
				kind: E.VARIABLE_DEFINITION,
				variable: this.parseVariable(),
				type: (this.expectToken(U.COLON), this.parseTypeReference()),
				defaultValue: this.expectOptionalToken(U.EQUALS) ? this.parseConstValueLiteral() : void 0,
				directives: this.parseConstDirectives()
			})
		}
		parseVariable() {
			let t = this._lexer.token
			return this.expectToken(U.DOLLAR), this.node(t, { kind: E.VARIABLE, name: this.parseName() })
		}
		parseSelectionSet() {
			return this.node(this._lexer.token, {
				kind: E.SELECTION_SET,
				selections: this.many(U.BRACE_L, this.parseSelection, U.BRACE_R)
			})
		}
		parseSelection() {
			return this.peek(U.SPREAD) ? this.parseFragment() : this.parseField()
		}
		parseField() {
			let t = this._lexer.token,
				n = this.parseName(),
				r,
				i
			return (
				this.expectOptionalToken(U.COLON) ? ((r = n), (i = this.parseName())) : (i = n),
				this.node(t, {
					kind: E.FIELD,
					alias: r,
					name: i,
					arguments: this.parseArguments(!1),
					directives: this.parseDirectives(!1),
					selectionSet: this.peek(U.BRACE_L) ? this.parseSelectionSet() : void 0
				})
			)
		}
		parseArguments(t) {
			let n = t ? this.parseConstArgument : this.parseArgument
			return this.optionalMany(U.PAREN_L, n, U.PAREN_R)
		}
		parseArgument(t = !1) {
			let n = this._lexer.token,
				r = this.parseName()
			return (
				this.expectToken(U.COLON),
				this.node(n, { kind: E.ARGUMENT, name: r, value: this.parseValueLiteral(t) })
			)
		}
		parseConstArgument() {
			return this.parseArgument(!0)
		}
		parseFragment() {
			let t = this._lexer.token
			this.expectToken(U.SPREAD)
			let n = this.expectOptionalKeyword('on')
			return !n && this.peek(U.NAME)
				? this.node(t, {
						kind: E.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1)
				  })
				: this.node(t, {
						kind: E.INLINE_FRAGMENT,
						typeCondition: n ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
				  })
		}
		parseFragmentDefinition() {
			let t = this._lexer.token
			return (
				this.expectKeyword('fragment'),
				this._options.allowLegacyFragmentVariables === !0
					? this.node(t, {
							kind: E.FRAGMENT_DEFINITION,
							name: this.parseFragmentName(),
							variableDefinitions: this.parseVariableDefinitions(),
							typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
							directives: this.parseDirectives(!1),
							selectionSet: this.parseSelectionSet()
					  })
					: this.node(t, {
							kind: E.FRAGMENT_DEFINITION,
							name: this.parseFragmentName(),
							typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
							directives: this.parseDirectives(!1),
							selectionSet: this.parseSelectionSet()
					  })
			)
		}
		parseFragmentName() {
			if (this._lexer.token.value === 'on') throw this.unexpected()
			return this.parseName()
		}
		parseValueLiteral(t) {
			let n = this._lexer.token
			switch (n.kind) {
				case U.BRACKET_L:
					return this.parseList(t)
				case U.BRACE_L:
					return this.parseObject(t)
				case U.INT:
					return this.advanceLexer(), this.node(n, { kind: E.INT, value: n.value })
				case U.FLOAT:
					return this.advanceLexer(), this.node(n, { kind: E.FLOAT, value: n.value })
				case U.STRING:
				case U.BLOCK_STRING:
					return this.parseStringLiteral()
				case U.NAME:
					switch ((this.advanceLexer(), n.value)) {
						case 'true':
							return this.node(n, { kind: E.BOOLEAN, value: !0 })
						case 'false':
							return this.node(n, { kind: E.BOOLEAN, value: !1 })
						case 'null':
							return this.node(n, { kind: E.NULL })
						default:
							return this.node(n, { kind: E.ENUM, value: n.value })
					}
				case U.DOLLAR:
					if (t)
						if ((this.expectToken(U.DOLLAR), this._lexer.token.kind === U.NAME)) {
							let r = this._lexer.token.value
							throw Xe(
								this._lexer.source,
								n.start,
								`Unexpected variable "$${r}" in constant value.`
							)
						} else throw this.unexpected(n)
					return this.parseVariable()
				default:
					throw this.unexpected()
			}
		}
		parseConstValueLiteral() {
			return this.parseValueLiteral(!0)
		}
		parseStringLiteral() {
			let t = this._lexer.token
			return (
				this.advanceLexer(),
				this.node(t, { kind: E.STRING, value: t.value, block: t.kind === U.BLOCK_STRING })
			)
		}
		parseList(t) {
			let n = () => this.parseValueLiteral(t)
			return this.node(this._lexer.token, {
				kind: E.LIST,
				values: this.any(U.BRACKET_L, n, U.BRACKET_R)
			})
		}
		parseObject(t) {
			let n = () => this.parseObjectField(t)
			return this.node(this._lexer.token, {
				kind: E.OBJECT,
				fields: this.any(U.BRACE_L, n, U.BRACE_R)
			})
		}
		parseObjectField(t) {
			let n = this._lexer.token,
				r = this.parseName()
			return (
				this.expectToken(U.COLON),
				this.node(n, { kind: E.OBJECT_FIELD, name: r, value: this.parseValueLiteral(t) })
			)
		}
		parseDirectives(t) {
			let n = []
			for (; this.peek(U.AT); ) n.push(this.parseDirective(t))
			return n
		}
		parseConstDirectives() {
			return this.parseDirectives(!0)
		}
		parseDirective(t) {
			let n = this._lexer.token
			return (
				this.expectToken(U.AT),
				this.node(n, {
					kind: E.DIRECTIVE,
					name: this.parseName(),
					arguments: this.parseArguments(t)
				})
			)
		}
		parseTypeReference() {
			let t = this._lexer.token,
				n
			if (this.expectOptionalToken(U.BRACKET_L)) {
				let r = this.parseTypeReference()
				this.expectToken(U.BRACKET_R), (n = this.node(t, { kind: E.LIST_TYPE, type: r }))
			} else n = this.parseNamedType()
			return this.expectOptionalToken(U.BANG) ? this.node(t, { kind: E.NON_NULL_TYPE, type: n }) : n
		}
		parseNamedType() {
			return this.node(this._lexer.token, { kind: E.NAMED_TYPE, name: this.parseName() })
		}
		peekDescription() {
			return this.peek(U.STRING) || this.peek(U.BLOCK_STRING)
		}
		parseDescription() {
			if (this.peekDescription()) return this.parseStringLiteral()
		}
		parseSchemaDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('schema')
			let r = this.parseConstDirectives(),
				i = this.many(U.BRACE_L, this.parseOperationTypeDefinition, U.BRACE_R)
			return this.node(t, {
				kind: E.SCHEMA_DEFINITION,
				description: n,
				directives: r,
				operationTypes: i
			})
		}
		parseOperationTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseOperationType()
			this.expectToken(U.COLON)
			let r = this.parseNamedType()
			return this.node(t, { kind: E.OPERATION_TYPE_DEFINITION, operation: n, type: r })
		}
		parseScalarTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('scalar')
			let r = this.parseName(),
				i = this.parseConstDirectives()
			return this.node(t, {
				kind: E.SCALAR_TYPE_DEFINITION,
				description: n,
				name: r,
				directives: i
			})
		}
		parseObjectTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('type')
			let r = this.parseName(),
				i = this.parseImplementsInterfaces(),
				s = this.parseConstDirectives(),
				o = this.parseFieldsDefinition()
			return this.node(t, {
				kind: E.OBJECT_TYPE_DEFINITION,
				description: n,
				name: r,
				interfaces: i,
				directives: s,
				fields: o
			})
		}
		parseImplementsInterfaces() {
			return this.expectOptionalKeyword('implements')
				? this.delimitedMany(U.AMP, this.parseNamedType)
				: []
		}
		parseFieldsDefinition() {
			return this.optionalMany(U.BRACE_L, this.parseFieldDefinition, U.BRACE_R)
		}
		parseFieldDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription(),
				r = this.parseName(),
				i = this.parseArgumentDefs()
			this.expectToken(U.COLON)
			let s = this.parseTypeReference(),
				o = this.parseConstDirectives()
			return this.node(t, {
				kind: E.FIELD_DEFINITION,
				description: n,
				name: r,
				arguments: i,
				type: s,
				directives: o
			})
		}
		parseArgumentDefs() {
			return this.optionalMany(U.PAREN_L, this.parseInputValueDef, U.PAREN_R)
		}
		parseInputValueDef() {
			let t = this._lexer.token,
				n = this.parseDescription(),
				r = this.parseName()
			this.expectToken(U.COLON)
			let i = this.parseTypeReference(),
				s
			this.expectOptionalToken(U.EQUALS) && (s = this.parseConstValueLiteral())
			let o = this.parseConstDirectives()
			return this.node(t, {
				kind: E.INPUT_VALUE_DEFINITION,
				description: n,
				name: r,
				type: i,
				defaultValue: s,
				directives: o
			})
		}
		parseInterfaceTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('interface')
			let r = this.parseName(),
				i = this.parseImplementsInterfaces(),
				s = this.parseConstDirectives(),
				o = this.parseFieldsDefinition()
			return this.node(t, {
				kind: E.INTERFACE_TYPE_DEFINITION,
				description: n,
				name: r,
				interfaces: i,
				directives: s,
				fields: o
			})
		}
		parseUnionTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('union')
			let r = this.parseName(),
				i = this.parseConstDirectives(),
				s = this.parseUnionMemberTypes()
			return this.node(t, {
				kind: E.UNION_TYPE_DEFINITION,
				description: n,
				name: r,
				directives: i,
				types: s
			})
		}
		parseUnionMemberTypes() {
			return this.expectOptionalToken(U.EQUALS)
				? this.delimitedMany(U.PIPE, this.parseNamedType)
				: []
		}
		parseEnumTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('enum')
			let r = this.parseName(),
				i = this.parseConstDirectives(),
				s = this.parseEnumValuesDefinition()
			return this.node(t, {
				kind: E.ENUM_TYPE_DEFINITION,
				description: n,
				name: r,
				directives: i,
				values: s
			})
		}
		parseEnumValuesDefinition() {
			return this.optionalMany(U.BRACE_L, this.parseEnumValueDefinition, U.BRACE_R)
		}
		parseEnumValueDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription(),
				r = this.parseEnumValueName(),
				i = this.parseConstDirectives()
			return this.node(t, { kind: E.ENUM_VALUE_DEFINITION, description: n, name: r, directives: i })
		}
		parseEnumValueName() {
			if (
				this._lexer.token.value === 'true' ||
				this._lexer.token.value === 'false' ||
				this._lexer.token.value === 'null'
			)
				throw Xe(
					this._lexer.source,
					this._lexer.token.start,
					`${Ta(this._lexer.token)} is reserved and cannot be used for an enum value.`
				)
			return this.parseName()
		}
		parseInputObjectTypeDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('input')
			let r = this.parseName(),
				i = this.parseConstDirectives(),
				s = this.parseInputFieldsDefinition()
			return this.node(t, {
				kind: E.INPUT_OBJECT_TYPE_DEFINITION,
				description: n,
				name: r,
				directives: i,
				fields: s
			})
		}
		parseInputFieldsDefinition() {
			return this.optionalMany(U.BRACE_L, this.parseInputValueDef, U.BRACE_R)
		}
		parseTypeSystemExtension() {
			let t = this._lexer.lookahead()
			if (t.kind === U.NAME)
				switch (t.value) {
					case 'schema':
						return this.parseSchemaExtension()
					case 'scalar':
						return this.parseScalarTypeExtension()
					case 'type':
						return this.parseObjectTypeExtension()
					case 'interface':
						return this.parseInterfaceTypeExtension()
					case 'union':
						return this.parseUnionTypeExtension()
					case 'enum':
						return this.parseEnumTypeExtension()
					case 'input':
						return this.parseInputObjectTypeExtension()
				}
			throw this.unexpected(t)
		}
		parseSchemaExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('schema')
			let n = this.parseConstDirectives(),
				r = this.optionalMany(U.BRACE_L, this.parseOperationTypeDefinition, U.BRACE_R)
			if (n.length === 0 && r.length === 0) throw this.unexpected()
			return this.node(t, { kind: E.SCHEMA_EXTENSION, directives: n, operationTypes: r })
		}
		parseScalarTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('scalar')
			let n = this.parseName(),
				r = this.parseConstDirectives()
			if (r.length === 0) throw this.unexpected()
			return this.node(t, { kind: E.SCALAR_TYPE_EXTENSION, name: n, directives: r })
		}
		parseObjectTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('type')
			let n = this.parseName(),
				r = this.parseImplementsInterfaces(),
				i = this.parseConstDirectives(),
				s = this.parseFieldsDefinition()
			if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected()
			return this.node(t, {
				kind: E.OBJECT_TYPE_EXTENSION,
				name: n,
				interfaces: r,
				directives: i,
				fields: s
			})
		}
		parseInterfaceTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('interface')
			let n = this.parseName(),
				r = this.parseImplementsInterfaces(),
				i = this.parseConstDirectives(),
				s = this.parseFieldsDefinition()
			if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected()
			return this.node(t, {
				kind: E.INTERFACE_TYPE_EXTENSION,
				name: n,
				interfaces: r,
				directives: i,
				fields: s
			})
		}
		parseUnionTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('union')
			let n = this.parseName(),
				r = this.parseConstDirectives(),
				i = this.parseUnionMemberTypes()
			if (r.length === 0 && i.length === 0) throw this.unexpected()
			return this.node(t, { kind: E.UNION_TYPE_EXTENSION, name: n, directives: r, types: i })
		}
		parseEnumTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('enum')
			let n = this.parseName(),
				r = this.parseConstDirectives(),
				i = this.parseEnumValuesDefinition()
			if (r.length === 0 && i.length === 0) throw this.unexpected()
			return this.node(t, { kind: E.ENUM_TYPE_EXTENSION, name: n, directives: r, values: i })
		}
		parseInputObjectTypeExtension() {
			let t = this._lexer.token
			this.expectKeyword('extend'), this.expectKeyword('input')
			let n = this.parseName(),
				r = this.parseConstDirectives(),
				i = this.parseInputFieldsDefinition()
			if (r.length === 0 && i.length === 0) throw this.unexpected()
			return this.node(t, {
				kind: E.INPUT_OBJECT_TYPE_EXTENSION,
				name: n,
				directives: r,
				fields: i
			})
		}
		parseDirectiveDefinition() {
			let t = this._lexer.token,
				n = this.parseDescription()
			this.expectKeyword('directive'), this.expectToken(U.AT)
			let r = this.parseName(),
				i = this.parseArgumentDefs(),
				s = this.expectOptionalKeyword('repeatable')
			this.expectKeyword('on')
			let o = this.parseDirectiveLocations()
			return this.node(t, {
				kind: E.DIRECTIVE_DEFINITION,
				description: n,
				name: r,
				arguments: i,
				repeatable: s,
				locations: o
			})
		}
		parseDirectiveLocations() {
			return this.delimitedMany(U.PIPE, this.parseDirectiveLocation)
		}
		parseDirectiveLocation() {
			let t = this._lexer.token,
				n = this.parseName()
			if (Object.prototype.hasOwnProperty.call(K, n.value)) return n
			throw this.unexpected(t)
		}
		node(t, n) {
			return (
				this._options.noLocation !== !0 &&
					(n.loc = new $s(t, this._lexer.lastToken, this._lexer.source)),
				n
			)
		}
		peek(t) {
			return this._lexer.token.kind === t
		}
		expectToken(t) {
			let n = this._lexer.token
			if (n.kind === t) return this.advanceLexer(), n
			throw Xe(this._lexer.source, n.start, `Expected ${Eh(t)}, found ${Ta(n)}.`)
		}
		expectOptionalToken(t) {
			return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1
		}
		expectKeyword(t) {
			let n = this._lexer.token
			if (n.kind === U.NAME && n.value === t) this.advanceLexer()
			else throw Xe(this._lexer.source, n.start, `Expected "${t}", found ${Ta(n)}.`)
		}
		expectOptionalKeyword(t) {
			let n = this._lexer.token
			return n.kind === U.NAME && n.value === t ? (this.advanceLexer(), !0) : !1
		}
		unexpected(t) {
			let n = t ?? this._lexer.token
			return Xe(this._lexer.source, n.start, `Unexpected ${Ta(n)}.`)
		}
		any(t, n, r) {
			this.expectToken(t)
			let i = []
			for (; !this.expectOptionalToken(r); ) i.push(n.call(this))
			return i
		}
		optionalMany(t, n, r) {
			if (this.expectOptionalToken(t)) {
				let i = []
				do i.push(n.call(this))
				while (!this.expectOptionalToken(r))
				return i
			}
			return []
		}
		many(t, n, r) {
			this.expectToken(t)
			let i = []
			do i.push(n.call(this))
			while (!this.expectOptionalToken(r))
			return i
		}
		delimitedMany(t, n) {
			this.expectOptionalToken(t)
			let r = []
			do r.push(n.call(this))
			while (this.expectOptionalToken(t))
			return r
		}
		advanceLexer() {
			let { maxTokens: t } = this._options,
				n = this._lexer.advance()
			if (t !== void 0 && n.kind !== U.EOF && (++this._tokenCounter, this._tokenCounter > t))
				throw Xe(
					this._lexer.source,
					n.start,
					`Document contains more that ${t} tokens. Parsing aborted.`
				)
		}
	}
	function Ta(e) {
		let t = e.value
		return Eh(e.kind) + (t != null ? ` "${t}"` : '')
	}
	function Eh(e) {
		return gh(e) ? `"${e}"` : e
	}
	function Mt(e, t) {
		let [n, r] = t ? [e, t] : [void 0, e],
			i = ' Did you mean '
		n && (i += n + ' ')
		let s = r.map((u) => `"${u}"`)
		switch (s.length) {
			case 0:
				return ''
			case 1:
				return i + s[0] + '?'
			case 2:
				return i + s[0] + ' or ' + s[1] + '?'
		}
		let o = s.slice(0, 5),
			a = o.pop()
		return i + o.join(', ') + ', or ' + a + '?'
	}
	function cc(e) {
		return e
	}
	function qt(e, t) {
		let n = Object.create(null)
		for (let r of e) n[t(r)] = r
		return n
	}
	function Dn(e, t, n) {
		let r = Object.create(null)
		for (let i of e) r[t(i)] = n(i)
		return r
	}
	function on(e, t) {
		let n = Object.create(null)
		for (let r of Object.keys(e)) n[r] = t(e[r], r)
		return n
	}
	function Ti(e, t) {
		let n = 0,
			r = 0
		for (; n < e.length && r < t.length; ) {
			let i = e.charCodeAt(n),
				s = t.charCodeAt(r)
			if (Fa(i) && Fa(s)) {
				let o = 0
				do ++n, (o = o * 10 + i - fc), (i = e.charCodeAt(n))
				while (Fa(i) && o > 0)
				let a = 0
				do ++r, (a = a * 10 + s - fc), (s = t.charCodeAt(r))
				while (Fa(s) && a > 0)
				if (o < a) return -1
				if (o > a) return 1
			} else {
				if (i < s) return -1
				if (i > s) return 1
				++n, ++r
			}
		}
		return e.length - t.length
	}
	var fc = 48,
		c7 = 57
	function Fa(e) {
		return !isNaN(e) && fc <= e && e <= c7
	}
	function Gt(e, t) {
		let n = Object.create(null),
			r = new dc(e),
			i = Math.floor(e.length * 0.4) + 1
		for (let s of t) {
			let o = r.measure(s, i)
			o !== void 0 && (n[s] = o)
		}
		return Object.keys(n).sort((s, o) => {
			let a = n[s] - n[o]
			return a !== 0 ? a : Ti(s, o)
		})
	}
	var dc = class {
		constructor(t) {
			;(this._input = t),
				(this._inputLowerCase = t.toLowerCase()),
				(this._inputArray = yh(this._inputLowerCase)),
				(this._rows = [
					new Array(t.length + 1).fill(0),
					new Array(t.length + 1).fill(0),
					new Array(t.length + 1).fill(0)
				])
		}
		measure(t, n) {
			if (this._input === t) return 0
			let r = t.toLowerCase()
			if (this._inputLowerCase === r) return 1
			let i = yh(r),
				s = this._inputArray
			if (i.length < s.length) {
				let c = i
				;(i = s), (s = c)
			}
			let o = i.length,
				a = s.length
			if (o - a > n) return
			let u = this._rows
			for (let c = 0; c <= a; c++) u[0][c] = c
			for (let c = 1; c <= o; c++) {
				let d = u[(c - 1) % 3],
					h = u[c % 3],
					m = (h[0] = c)
				for (let g = 1; g <= a; g++) {
					let v = i[c - 1] === s[g - 1] ? 0 : 1,
						N = Math.min(d[g] + 1, h[g - 1] + 1, d[g - 1] + v)
					if (c > 1 && g > 1 && i[c - 1] === s[g - 2] && i[c - 2] === s[g - 1]) {
						let _ = u[(c - 2) % 3][g - 2]
						N = Math.min(N, _ + 1)
					}
					N < m && (m = N), (h[g] = N)
				}
				if (m > n) return
			}
			let l = u[o % 3][a]
			return l <= n ? l : void 0
		}
	}
	function yh(e) {
		let t = e.length,
			n = new Array(t)
		for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r)
		return n
	}
	function Ct(e) {
		if (e == null) return Object.create(null)
		if (Object.getPrototypeOf(e) === null) return e
		let t = Object.create(null)
		for (let [n, r] of Object.entries(e)) t[n] = r
		return t
	}
	function xh(e) {
		return `"${e.replace(f7, d7)}"`
	}
	var f7 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
	function d7(e) {
		return p7[e.charCodeAt(0)]
	}
	var p7 = [
		'\\u0000',
		'\\u0001',
		'\\u0002',
		'\\u0003',
		'\\u0004',
		'\\u0005',
		'\\u0006',
		'\\u0007',
		'\\b',
		'\\t',
		'\\n',
		'\\u000B',
		'\\f',
		'\\r',
		'\\u000E',
		'\\u000F',
		'\\u0010',
		'\\u0011',
		'\\u0012',
		'\\u0013',
		'\\u0014',
		'\\u0015',
		'\\u0016',
		'\\u0017',
		'\\u0018',
		'\\u0019',
		'\\u001A',
		'\\u001B',
		'\\u001C',
		'\\u001D',
		'\\u001E',
		'\\u001F',
		'',
		'',
		'\\"',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'\\\\',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'\\u007F',
		'\\u0080',
		'\\u0081',
		'\\u0082',
		'\\u0083',
		'\\u0084',
		'\\u0085',
		'\\u0086',
		'\\u0087',
		'\\u0088',
		'\\u0089',
		'\\u008A',
		'\\u008B',
		'\\u008C',
		'\\u008D',
		'\\u008E',
		'\\u008F',
		'\\u0090',
		'\\u0091',
		'\\u0092',
		'\\u0093',
		'\\u0094',
		'\\u0095',
		'\\u0096',
		'\\u0097',
		'\\u0098',
		'\\u0099',
		'\\u009A',
		'\\u009B',
		'\\u009C',
		'\\u009D',
		'\\u009E',
		'\\u009F'
	]
	var Bn = Object.freeze({})
	function ht(e, t, n = uc) {
		let r = new Map()
		for (let _ of Object.values(E)) r.set(_, Lr(t, _))
		let i,
			s = Array.isArray(e),
			o = [e],
			a = -1,
			u = [],
			l = e,
			c,
			d,
			h = [],
			m = []
		do {
			a++
			let _ = a === o.length,
				w = _ && u.length !== 0
			if (_) {
				if (((c = m.length === 0 ? void 0 : h[h.length - 1]), (l = d), (d = m.pop()), w))
					if (s) {
						l = l.slice()
						let S = 0
						for (let [k, M] of u) {
							let I = k - S
							M === null ? (l.splice(I, 1), S++) : (l[I] = M)
						}
					} else {
						l = Object.defineProperties({}, Object.getOwnPropertyDescriptors(l))
						for (let [S, k] of u) l[S] = k
					}
				;(a = i.index), (o = i.keys), (u = i.edits), (s = i.inArray), (i = i.prev)
			} else if (d) {
				if (((c = s ? a : o[a]), (l = d[c]), l == null)) continue
				h.push(c)
			}
			let C
			if (!Array.isArray(l)) {
				var g, v
				js(l) || pe(!1, `Invalid AST Node: ${q(l)}.`)
				let S = _
					? (g = r.get(l.kind)) === null || g === void 0
						? void 0
						: g.leave
					: (v = r.get(l.kind)) === null || v === void 0
					? void 0
					: v.enter
				if (((C = S?.call(t, l, c, d, h, m)), C === Bn)) break
				if (C === !1) {
					if (!_) {
						h.pop()
						continue
					}
				} else if (C !== void 0 && (u.push([c, C]), !_))
					if (js(C)) l = C
					else {
						h.pop()
						continue
					}
			}
			if ((C === void 0 && w && u.push([c, l]), _)) h.pop()
			else {
				var N
				;(i = { inArray: s, index: a, keys: o, edits: u, prev: i }),
					(s = Array.isArray(l)),
					(o = s ? l : (N = n[l.kind]) !== null && N !== void 0 ? N : []),
					(a = -1),
					(u = []),
					d && m.push(d),
					(d = l)
			}
		} while (i !== void 0)
		return u.length !== 0 ? u[u.length - 1][1] : e
	}
	function Ws(e) {
		let t = new Array(e.length).fill(null),
			n = Object.create(null)
		for (let r of Object.values(E)) {
			let i = !1,
				s = new Array(e.length).fill(void 0),
				o = new Array(e.length).fill(void 0)
			for (let u = 0; u < e.length; ++u) {
				let { enter: l, leave: c } = Lr(e[u], r)
				i || (i = l != null || c != null), (s[u] = l), (o[u] = c)
			}
			if (!i) continue
			let a = {
				enter(...u) {
					let l = u[0]
					for (let d = 0; d < e.length; d++)
						if (t[d] === null) {
							var c
							let h = (c = s[d]) === null || c === void 0 ? void 0 : c.apply(e[d], u)
							if (h === !1) t[d] = l
							else if (h === Bn) t[d] = Bn
							else if (h !== void 0) return h
						}
				},
				leave(...u) {
					let l = u[0]
					for (let d = 0; d < e.length; d++)
						if (t[d] === null) {
							var c
							let h = (c = o[d]) === null || c === void 0 ? void 0 : c.apply(e[d], u)
							if (h === Bn) t[d] = Bn
							else if (h !== void 0 && h !== !1) return h
						} else t[d] === l && (t[d] = null)
				}
			}
			n[r] = a
		}
		return n
	}
	function Lr(e, t) {
		let n = e[t]
		return typeof n == 'object'
			? n
			: typeof n == 'function'
			? { enter: n, leave: void 0 }
			: { enter: e.enter, leave: e.leave }
	}
	function Le(e) {
		return ht(e, m7)
	}
	var h7 = 80,
		m7 = {
			Name: { leave: (e) => e.value },
			Variable: { leave: (e) => '$' + e.name },
			Document: {
				leave: (e) =>
					te(
						e.definitions,
						`

`
					)
			},
			OperationDefinition: {
				leave(e) {
					let t = ye('(', te(e.variableDefinitions, ', '), ')'),
						n = te([e.operation, te([e.name, t]), te(e.directives, ' ')], ' ')
					return (n === 'query' ? '' : n + ' ') + e.selectionSet
				}
			},
			VariableDefinition: {
				leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
					e + ': ' + t + ye(' = ', n) + ye(' ', te(r, ' '))
			},
			SelectionSet: { leave: ({ selections: e }) => an(e) },
			Field: {
				leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
					let s = ye('', e, ': ') + t,
						o = s + ye('(', te(n, ', '), ')')
					return (
						o.length > h7 &&
							(o =
								s +
								ye(
									`(
`,
									wa(
										te(
											n,
											`
`
										)
									),
									`
)`
								)),
						te([o, te(r, ' '), i], ' ')
					)
				}
			},
			Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
			FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + ye(' ', te(t, ' ')) },
			InlineFragment: {
				leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
					te(['...', ye('on ', e), te(t, ' '), n], ' ')
			},
			FragmentDefinition: {
				leave: ({
					name: e,
					typeCondition: t,
					variableDefinitions: n,
					directives: r,
					selectionSet: i
				}) => `fragment ${e}${ye('(', te(n, ', '), ')')} on ${t} ${ye('', te(r, ' '), ' ')}` + i
			},
			IntValue: { leave: ({ value: e }) => e },
			FloatValue: { leave: ({ value: e }) => e },
			StringValue: { leave: ({ value: e, block: t }) => (t ? hh(e) : xh(e)) },
			BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
			NullValue: { leave: () => 'null' },
			EnumValue: { leave: ({ value: e }) => e },
			ListValue: { leave: ({ values: e }) => '[' + te(e, ', ') + ']' },
			ObjectValue: { leave: ({ fields: e }) => '{' + te(e, ', ') + '}' },
			ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
			Directive: { leave: ({ name: e, arguments: t }) => '@' + e + ye('(', te(t, ', '), ')') },
			NamedType: { leave: ({ name: e }) => e },
			ListType: { leave: ({ type: e }) => '[' + e + ']' },
			NonNullType: { leave: ({ type: e }) => e + '!' },
			SchemaDefinition: {
				leave: ({ description: e, directives: t, operationTypes: n }) =>
					ye(
						'',
						e,
						`
`
					) + te(['schema', te(t, ' '), an(n)], ' ')
			},
			OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
			ScalarTypeDefinition: {
				leave: ({ description: e, name: t, directives: n }) =>
					ye(
						'',
						e,
						`
`
					) + te(['scalar', t, te(n, ' ')], ' ')
			},
			ObjectTypeDefinition: {
				leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
					ye(
						'',
						e,
						`
`
					) + te(['type', t, ye('implements ', te(n, ' & ')), te(r, ' '), an(i)], ' ')
			},
			FieldDefinition: {
				leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) =>
					ye(
						'',
						e,
						`
`
					) +
					t +
					(_h(n)
						? ye(
								`(
`,
								wa(
									te(
										n,
										`
`
									)
								),
								`
)`
						  )
						: ye('(', te(n, ', '), ')')) +
					': ' +
					r +
					ye(' ', te(i, ' '))
			},
			InputValueDefinition: {
				leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) =>
					ye(
						'',
						e,
						`
`
					) + te([t + ': ' + n, ye('= ', r), te(i, ' ')], ' ')
			},
			InterfaceTypeDefinition: {
				leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
					ye(
						'',
						e,
						`
`
					) + te(['interface', t, ye('implements ', te(n, ' & ')), te(r, ' '), an(i)], ' ')
			},
			UnionTypeDefinition: {
				leave: ({ description: e, name: t, directives: n, types: r }) =>
					ye(
						'',
						e,
						`
`
					) + te(['union', t, te(n, ' '), ye('= ', te(r, ' | '))], ' ')
			},
			EnumTypeDefinition: {
				leave: ({ description: e, name: t, directives: n, values: r }) =>
					ye(
						'',
						e,
						`
`
					) + te(['enum', t, te(n, ' '), an(r)], ' ')
			},
			EnumValueDefinition: {
				leave: ({ description: e, name: t, directives: n }) =>
					ye(
						'',
						e,
						`
`
					) + te([t, te(n, ' ')], ' ')
			},
			InputObjectTypeDefinition: {
				leave: ({ description: e, name: t, directives: n, fields: r }) =>
					ye(
						'',
						e,
						`
`
					) + te(['input', t, te(n, ' '), an(r)], ' ')
			},
			DirectiveDefinition: {
				leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) =>
					ye(
						'',
						e,
						`
`
					) +
					'directive @' +
					t +
					(_h(n)
						? ye(
								`(
`,
								wa(
									te(
										n,
										`
`
									)
								),
								`
)`
						  )
						: ye('(', te(n, ', '), ')')) +
					(r ? ' repeatable' : '') +
					' on ' +
					te(i, ' | ')
			},
			SchemaExtension: {
				leave: ({ directives: e, operationTypes: t }) =>
					te(['extend schema', te(e, ' '), an(t)], ' ')
			},
			ScalarTypeExtension: {
				leave: ({ name: e, directives: t }) => te(['extend scalar', e, te(t, ' ')], ' ')
			},
			ObjectTypeExtension: {
				leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
					te(['extend type', e, ye('implements ', te(t, ' & ')), te(n, ' '), an(r)], ' ')
			},
			InterfaceTypeExtension: {
				leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
					te(['extend interface', e, ye('implements ', te(t, ' & ')), te(n, ' '), an(r)], ' ')
			},
			UnionTypeExtension: {
				leave: ({ name: e, directives: t, types: n }) =>
					te(['extend union', e, te(t, ' '), ye('= ', te(n, ' | '))], ' ')
			},
			EnumTypeExtension: {
				leave: ({ name: e, directives: t, values: n }) =>
					te(['extend enum', e, te(t, ' '), an(n)], ' ')
			},
			InputObjectTypeExtension: {
				leave: ({ name: e, directives: t, fields: n }) =>
					te(['extend input', e, te(t, ' '), an(n)], ' ')
			}
		}
	function te(e, t = '') {
		var n
		return (n = e?.filter((r) => r).join(t)) !== null && n !== void 0 ? n : ''
	}
	function an(e) {
		return ye(
			`{
`,
			wa(
				te(
					e,
					`
`
				)
			),
			`
}`
		)
	}
	function ye(e, t, n = '') {
		return t != null && t !== '' ? e + t + n : ''
	}
	function wa(e) {
		return ye(
			'  ',
			e.replace(
				/\n/g,
				`
  `
			)
		)
	}
	function _h(e) {
		var t
		return (t = e?.some((n) =>
			n.includes(`
`)
		)) !== null && t !== void 0
			? t
			: !1
	}
	function Qs(e, t) {
		switch (e.kind) {
			case E.NULL:
				return null
			case E.INT:
				return parseInt(e.value, 10)
			case E.FLOAT:
				return parseFloat(e.value)
			case E.STRING:
			case E.ENUM:
			case E.BOOLEAN:
				return e.value
			case E.LIST:
				return e.values.map((n) => Qs(n, t))
			case E.OBJECT:
				return Dn(
					e.fields,
					(n) => n.name.value,
					(n) => Qs(n.value, t)
				)
			case E.VARIABLE:
				return t?.[e.name.value]
		}
	}
	function Pt(e) {
		if (
			(e != null || pe(!1, 'Must provide name.'),
			typeof e == 'string' || pe(!1, 'Expected name to be a string.'),
			e.length === 0)
		)
			throw new O('Expected name to be a non-empty string.')
		for (let t = 1; t < e.length; ++t)
			if (!xa(e.charCodeAt(t)))
				throw new O(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`)
		if (!qs(e.charCodeAt(0))) throw new O(`Names must start with [_a-zA-Z] but "${e}" does not.`)
		return e
	}
	function pc(e) {
		if (e === 'true' || e === 'false' || e === 'null')
			throw new O(`Enum values cannot be named: ${e}`)
		return Pt(e)
	}
	function Ai(e) {
		return ct(e) || me(e) || De(e) || Ze(e) || Be(e) || be(e) || Fe(e) || ce(e)
	}
	function ct(e) {
		return Lt(e, Tt)
	}
	function me(e) {
		return Lt(e, Ke)
	}
	function Ca(e) {
		if (!me(e)) throw new Error(`Expected ${q(e)} to be a GraphQL Object type.`)
		return e
	}
	function De(e) {
		return Lt(e, St)
	}
	function Ia(e) {
		if (!De(e)) throw new Error(`Expected ${q(e)} to be a GraphQL Interface type.`)
		return e
	}
	function Ze(e) {
		return Lt(e, vn)
	}
	function Be(e) {
		return Lt(e, bt)
	}
	function be(e) {
		return Lt(e, Zt)
	}
	function Fe(e) {
		return Lt(e, Me)
	}
	function ce(e) {
		return Lt(e, ae)
	}
	function et(e) {
		return ct(e) || Be(e) || be(e) || (zs(e) && et(e.ofType))
	}
	function Ht(e) {
		return ct(e) || me(e) || De(e) || Ze(e) || Be(e) || (zs(e) && Ht(e.ofType))
	}
	function Wt(e) {
		return ct(e) || Be(e)
	}
	function at(e) {
		return me(e) || De(e) || Ze(e)
	}
	function mt(e) {
		return De(e) || Ze(e)
	}
	function Ra(e) {
		if (!mt(e)) throw new Error(`Expected ${q(e)} to be a GraphQL abstract type.`)
		return e
	}
	var Me = class {
			constructor(t) {
				Ai(t) || pe(!1, `Expected ${q(t)} to be a GraphQL type.`), (this.ofType = t)
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLList'
			}
			toString() {
				return '[' + String(this.ofType) + ']'
			}
			toJSON() {
				return this.toString()
			}
		},
		ae = class {
			constructor(t) {
				ka(t) || pe(!1, `Expected ${q(t)} to be a GraphQL nullable type.`), (this.ofType = t)
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLNonNull'
			}
			toString() {
				return String(this.ofType) + '!'
			}
			toJSON() {
				return this.toString()
			}
		}
	function zs(e) {
		return Fe(e) || ce(e)
	}
	function ka(e) {
		return Ai(e) && !ce(e)
	}
	function Oa(e) {
		if (!ka(e)) throw new Error(`Expected ${q(e)} to be a GraphQL nullable type.`)
		return e
	}
	function fr(e) {
		if (e) return ce(e) ? e.ofType : e
	}
	function Ma(e) {
		return ct(e) || me(e) || De(e) || Ze(e) || Be(e) || be(e)
	}
	function we(e) {
		if (e) {
			let t = e
			for (; zs(t); ) t = t.ofType
			return t
		}
	}
	function Pa(e) {
		return typeof e == 'function' ? e() : e
	}
	function Ba(e) {
		return typeof e == 'function' ? e() : e
	}
	var Tt = class {
			constructor(t) {
				var n, r, i, s
				let o = (n = t.parseValue) !== null && n !== void 0 ? n : cc
				;(this.name = Pt(t.name)),
					(this.description = t.description),
					(this.specifiedByURL = t.specifiedByURL),
					(this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : cc),
					(this.parseValue = o),
					(this.parseLiteral =
						(i = t.parseLiteral) !== null && i !== void 0 ? i : (a, u) => o(Qs(a, u))),
					(this.extensions = Ct(t.extensions)),
					(this.astNode = t.astNode),
					(this.extensionASTNodes = (s = t.extensionASTNodes) !== null && s !== void 0 ? s : []),
					t.specifiedByURL == null ||
						typeof t.specifiedByURL == 'string' ||
						pe(
							!1,
							`${this.name} must provide "specifiedByURL" as a string, but got: ${q(
								t.specifiedByURL
							)}.`
						),
					t.serialize == null ||
						typeof t.serialize == 'function' ||
						pe(
							!1,
							`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
						),
					t.parseLiteral &&
						((typeof t.parseValue == 'function' && typeof t.parseLiteral == 'function') ||
							pe(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLScalarType'
			}
			toConfig() {
				return {
					name: this.name,
					description: this.description,
					specifiedByURL: this.specifiedByURL,
					serialize: this.serialize,
					parseValue: this.parseValue,
					parseLiteral: this.parseLiteral,
					extensions: this.extensions,
					astNode: this.astNode,
					extensionASTNodes: this.extensionASTNodes
				}
			}
			toString() {
				return this.name
			}
			toJSON() {
				return this.toString()
			}
		},
		Ke = class {
			constructor(t) {
				var n
				;(this.name = Pt(t.name)),
					(this.description = t.description),
					(this.isTypeOf = t.isTypeOf),
					(this.extensions = Ct(t.extensions)),
					(this.astNode = t.astNode),
					(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
					(this._fields = () => Sh(t)),
					(this._interfaces = () => Th(t)),
					t.isTypeOf == null ||
						typeof t.isTypeOf == 'function' ||
						pe(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${q(t.isTypeOf)}.`)
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLObjectType'
			}
			getFields() {
				return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
			}
			getInterfaces() {
				return (
					typeof this._interfaces == 'function' && (this._interfaces = this._interfaces()),
					this._interfaces
				)
			}
			toConfig() {
				return {
					name: this.name,
					description: this.description,
					interfaces: this.getInterfaces(),
					fields: Ah(this.getFields()),
					isTypeOf: this.isTypeOf,
					extensions: this.extensions,
					astNode: this.astNode,
					extensionASTNodes: this.extensionASTNodes
				}
			}
			toString() {
				return this.name
			}
			toJSON() {
				return this.toString()
			}
		}
	function Th(e) {
		var t
		let n = Pa((t = e.interfaces) !== null && t !== void 0 ? t : [])
		return (
			Array.isArray(n) ||
				pe(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`),
			n
		)
	}
	function Sh(e) {
		let t = Ba(e.fields)
		return (
			Si(t) ||
				pe(
					!1,
					`${e.name} fields must be an object with field names as keys or a function which returns such an object.`
				),
			on(t, (n, r) => {
				var i
				Si(n) || pe(!1, `${e.name}.${r} field config must be an object.`),
					n.resolve == null ||
						typeof n.resolve == 'function' ||
						pe(
							!1,
							`${e.name}.${r} field resolver must be a function if provided, but got: ${q(
								n.resolve
							)}.`
						)
				let s = (i = n.args) !== null && i !== void 0 ? i : {}
				return (
					Si(s) || pe(!1, `${e.name}.${r} args must be an object with argument names as keys.`),
					{
						name: Pt(r),
						description: n.description,
						type: n.type,
						args: hc(s),
						resolve: n.resolve,
						subscribe: n.subscribe,
						deprecationReason: n.deprecationReason,
						extensions: Ct(n.extensions),
						astNode: n.astNode
					}
				)
			})
		)
	}
	function hc(e) {
		return Object.entries(e).map(([t, n]) => ({
			name: Pt(t),
			description: n.description,
			type: n.type,
			defaultValue: n.defaultValue,
			deprecationReason: n.deprecationReason,
			extensions: Ct(n.extensions),
			astNode: n.astNode
		}))
	}
	function Si(e) {
		return Nt(e) && !Array.isArray(e)
	}
	function Ah(e) {
		return on(e, (t) => ({
			description: t.description,
			type: t.type,
			args: mc(t.args),
			resolve: t.resolve,
			subscribe: t.subscribe,
			deprecationReason: t.deprecationReason,
			extensions: t.extensions,
			astNode: t.astNode
		}))
	}
	function mc(e) {
		return Dn(
			e,
			(t) => t.name,
			(t) => ({
				description: t.description,
				type: t.type,
				defaultValue: t.defaultValue,
				deprecationReason: t.deprecationReason,
				extensions: t.extensions,
				astNode: t.astNode
			})
		)
	}
	function Vn(e) {
		return ce(e.type) && e.defaultValue === void 0
	}
	var St = class {
			constructor(t) {
				var n
				;(this.name = Pt(t.name)),
					(this.description = t.description),
					(this.resolveType = t.resolveType),
					(this.extensions = Ct(t.extensions)),
					(this.astNode = t.astNode),
					(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
					(this._fields = Sh.bind(void 0, t)),
					(this._interfaces = Th.bind(void 0, t)),
					t.resolveType == null ||
						typeof t.resolveType == 'function' ||
						pe(
							!1,
							`${this.name} must provide "resolveType" as a function, but got: ${q(t.resolveType)}.`
						)
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLInterfaceType'
			}
			getFields() {
				return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
			}
			getInterfaces() {
				return (
					typeof this._interfaces == 'function' && (this._interfaces = this._interfaces()),
					this._interfaces
				)
			}
			toConfig() {
				return {
					name: this.name,
					description: this.description,
					interfaces: this.getInterfaces(),
					fields: Ah(this.getFields()),
					resolveType: this.resolveType,
					extensions: this.extensions,
					astNode: this.astNode,
					extensionASTNodes: this.extensionASTNodes
				}
			}
			toString() {
				return this.name
			}
			toJSON() {
				return this.toString()
			}
		},
		vn = class {
			constructor(t) {
				var n
				;(this.name = Pt(t.name)),
					(this.description = t.description),
					(this.resolveType = t.resolveType),
					(this.extensions = Ct(t.extensions)),
					(this.astNode = t.astNode),
					(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
					(this._types = g7.bind(void 0, t)),
					t.resolveType == null ||
						typeof t.resolveType == 'function' ||
						pe(
							!1,
							`${this.name} must provide "resolveType" as a function, but got: ${q(t.resolveType)}.`
						)
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLUnionType'
			}
			getTypes() {
				return typeof this._types == 'function' && (this._types = this._types()), this._types
			}
			toConfig() {
				return {
					name: this.name,
					description: this.description,
					types: this.getTypes(),
					resolveType: this.resolveType,
					extensions: this.extensions,
					astNode: this.astNode,
					extensionASTNodes: this.extensionASTNodes
				}
			}
			toString() {
				return this.name
			}
			toJSON() {
				return this.toString()
			}
		}
	function g7(e) {
		let t = Pa(e.types)
		return (
			Array.isArray(t) ||
				pe(
					!1,
					`Must provide Array of types or a function which returns such an array for Union ${e.name}.`
				),
			t
		)
	}
	var bt = class {
		constructor(t) {
			var n
			;(this.name = Pt(t.name)),
				(this.description = t.description),
				(this.extensions = Ct(t.extensions)),
				(this.astNode = t.astNode),
				(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
				(this._values = typeof t.values == 'function' ? t.values : Nh(this.name, t.values)),
				(this._valueLookup = null),
				(this._nameLookup = null)
		}
		get [Symbol.toStringTag]() {
			return 'GraphQLEnumType'
		}
		getValues() {
			return (
				typeof this._values == 'function' && (this._values = Nh(this.name, this._values())),
				this._values
			)
		}
		getValue(t) {
			return (
				this._nameLookup === null && (this._nameLookup = qt(this.getValues(), (n) => n.name)),
				this._nameLookup[t]
			)
		}
		serialize(t) {
			this._valueLookup === null &&
				(this._valueLookup = new Map(this.getValues().map((r) => [r.value, r])))
			let n = this._valueLookup.get(t)
			if (n === void 0) throw new O(`Enum "${this.name}" cannot represent value: ${q(t)}`)
			return n.name
		}
		parseValue(t) {
			if (typeof t != 'string') {
				let r = q(t)
				throw new O(`Enum "${this.name}" cannot represent non-string value: ${r}.` + La(this, r))
			}
			let n = this.getValue(t)
			if (n == null)
				throw new O(`Value "${t}" does not exist in "${this.name}" enum.` + La(this, t))
			return n.value
		}
		parseLiteral(t, n) {
			if (t.kind !== E.ENUM) {
				let i = Le(t)
				throw new O(`Enum "${this.name}" cannot represent non-enum value: ${i}.` + La(this, i), {
					nodes: t
				})
			}
			let r = this.getValue(t.value)
			if (r == null) {
				let i = Le(t)
				throw new O(`Value "${i}" does not exist in "${this.name}" enum.` + La(this, i), {
					nodes: t
				})
			}
			return r.value
		}
		toConfig() {
			let t = Dn(
				this.getValues(),
				(n) => n.name,
				(n) => ({
					description: n.description,
					value: n.value,
					deprecationReason: n.deprecationReason,
					extensions: n.extensions,
					astNode: n.astNode
				})
			)
			return {
				name: this.name,
				description: this.description,
				values: t,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes
			}
		}
		toString() {
			return this.name
		}
		toJSON() {
			return this.toString()
		}
	}
	function La(e, t) {
		let n = e.getValues().map((i) => i.name),
			r = Gt(t, n)
		return Mt('the enum value', r)
	}
	function Nh(e, t) {
		return (
			Si(t) || pe(!1, `${e} values must be an object with value names as keys.`),
			Object.entries(t).map(
				([n, r]) => (
					Si(r) ||
						pe(
							!1,
							`${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${q(
								r
							)}.`
						),
					{
						name: pc(n),
						description: r.description,
						value: r.value !== void 0 ? r.value : n,
						deprecationReason: r.deprecationReason,
						extensions: Ct(r.extensions),
						astNode: r.astNode
					}
				)
			)
		)
	}
	var Zt = class {
		constructor(t) {
			var n, r
			;(this.name = Pt(t.name)),
				(this.description = t.description),
				(this.extensions = Ct(t.extensions)),
				(this.astNode = t.astNode),
				(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
				(this.isOneOf = (r = t.isOneOf) !== null && r !== void 0 ? r : !1),
				(this._fields = D7.bind(void 0, t))
		}
		get [Symbol.toStringTag]() {
			return 'GraphQLInputObjectType'
		}
		getFields() {
			return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
		}
		toConfig() {
			let t = on(this.getFields(), (n) => ({
				description: n.description,
				type: n.type,
				defaultValue: n.defaultValue,
				deprecationReason: n.deprecationReason,
				extensions: n.extensions,
				astNode: n.astNode
			}))
			return {
				name: this.name,
				description: this.description,
				fields: t,
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes,
				isOneOf: this.isOneOf
			}
		}
		toString() {
			return this.name
		}
		toJSON() {
			return this.toString()
		}
	}
	function D7(e) {
		let t = Ba(e.fields)
		return (
			Si(t) ||
				pe(
					!1,
					`${e.name} fields must be an object with field names as keys or a function which returns such an object.`
				),
			on(
				t,
				(n, r) => (
					!('resolve' in n) ||
						pe(
							!1,
							`${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
						),
					{
						name: Pt(r),
						description: n.description,
						type: n.type,
						defaultValue: n.defaultValue,
						deprecationReason: n.deprecationReason,
						extensions: Ct(n.extensions),
						astNode: n.astNode
					}
				)
			)
		)
	}
	function Fi(e) {
		return ce(e.type) && e.defaultValue === void 0
	}
	function wi(e, t) {
		return e === t ? !0 : (ce(e) && ce(t)) || (Fe(e) && Fe(t)) ? wi(e.ofType, t.ofType) : !1
	}
	function bn(e, t, n) {
		return t === n
			? !0
			: ce(n)
			? ce(t)
				? bn(e, t.ofType, n.ofType)
				: !1
			: ce(t)
			? bn(e, t.ofType, n)
			: Fe(n)
			? Fe(t)
				? bn(e, t.ofType, n.ofType)
				: !1
			: Fe(t)
			? !1
			: mt(n) && (De(t) || me(t)) && e.isSubType(n, t)
	}
	function Cr(e, t, n) {
		return t === n
			? !0
			: mt(t)
			? mt(n)
				? e.getPossibleTypes(t).some((r) => e.isSubType(n, r))
				: e.isSubType(t, n)
			: mt(n)
			? e.isSubType(n, t)
			: !1
	}
	var Ys = 2147483647,
		Js = -2147483648,
		gc = new Tt({
			name: 'Int',
			description:
				'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
			serialize(e) {
				let t = Zs(e)
				if (typeof t == 'boolean') return t ? 1 : 0
				let n = t
				if (
					(typeof t == 'string' && t !== '' && (n = Number(t)),
					typeof n != 'number' || !Number.isInteger(n))
				)
					throw new O(`Int cannot represent non-integer value: ${q(t)}`)
				if (n > Ys || n < Js)
					throw new O('Int cannot represent non 32-bit signed integer value: ' + q(t))
				return n
			},
			parseValue(e) {
				if (typeof e != 'number' || !Number.isInteger(e))
					throw new O(`Int cannot represent non-integer value: ${q(e)}`)
				if (e > Ys || e < Js)
					throw new O(`Int cannot represent non 32-bit signed integer value: ${e}`)
				return e
			},
			parseLiteral(e) {
				if (e.kind !== E.INT)
					throw new O(`Int cannot represent non-integer value: ${Le(e)}`, { nodes: e })
				let t = parseInt(e.value, 10)
				if (t > Ys || t < Js)
					throw new O(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {
						nodes: e
					})
				return t
			}
		}),
		Xs = new Tt({
			name: 'Float',
			description:
				'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
			serialize(e) {
				let t = Zs(e)
				if (typeof t == 'boolean') return t ? 1 : 0
				let n = t
				if (
					(typeof t == 'string' && t !== '' && (n = Number(t)),
					typeof n != 'number' || !Number.isFinite(n))
				)
					throw new O(`Float cannot represent non numeric value: ${q(t)}`)
				return n
			},
			parseValue(e) {
				if (typeof e != 'number' || !Number.isFinite(e))
					throw new O(`Float cannot represent non numeric value: ${q(e)}`)
				return e
			},
			parseLiteral(e) {
				if (e.kind !== E.FLOAT && e.kind !== E.INT)
					throw new O(`Float cannot represent non numeric value: ${Le(e)}`, e)
				return parseFloat(e.value)
			}
		}),
		je = new Tt({
			name: 'String',
			description:
				'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
			serialize(e) {
				let t = Zs(e)
				if (typeof t == 'string') return t
				if (typeof t == 'boolean') return t ? 'true' : 'false'
				if (typeof t == 'number' && Number.isFinite(t)) return t.toString()
				throw new O(`String cannot represent value: ${q(e)}`)
			},
			parseValue(e) {
				if (typeof e != 'string') throw new O(`String cannot represent a non string value: ${q(e)}`)
				return e
			},
			parseLiteral(e) {
				if (e.kind !== E.STRING)
					throw new O(`String cannot represent a non string value: ${Le(e)}`, { nodes: e })
				return e.value
			}
		}),
		He = new Tt({
			name: 'Boolean',
			description: 'The `Boolean` scalar type represents `true` or `false`.',
			serialize(e) {
				let t = Zs(e)
				if (typeof t == 'boolean') return t
				if (Number.isFinite(t)) return t !== 0
				throw new O(`Boolean cannot represent a non boolean value: ${q(t)}`)
			},
			parseValue(e) {
				if (typeof e != 'boolean')
					throw new O(`Boolean cannot represent a non boolean value: ${q(e)}`)
				return e
			},
			parseLiteral(e) {
				if (e.kind !== E.BOOLEAN)
					throw new O(`Boolean cannot represent a non boolean value: ${Le(e)}`, { nodes: e })
				return e.value
			}
		}),
		Ks = new Tt({
			name: 'ID',
			description:
				'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
			serialize(e) {
				let t = Zs(e)
				if (typeof t == 'string') return t
				if (Number.isInteger(t)) return String(t)
				throw new O(`ID cannot represent value: ${q(e)}`)
			},
			parseValue(e) {
				if (typeof e == 'string') return e
				if (typeof e == 'number' && Number.isInteger(e)) return e.toString()
				throw new O(`ID cannot represent value: ${q(e)}`)
			},
			parseLiteral(e) {
				if (e.kind !== E.STRING && e.kind !== E.INT)
					throw new O('ID cannot represent a non-string and non-integer value: ' + Le(e), {
						nodes: e
					})
				return e.value
			}
		}),
		Un = Object.freeze([je, gc, Xs, He, Ks])
	function Va(e) {
		return Un.some(({ name: t }) => e.name === t)
	}
	function Zs(e) {
		if (Nt(e)) {
			if (typeof e.valueOf == 'function') {
				let t = e.valueOf()
				if (!Nt(t)) return t
			}
			if (typeof e.toJSON == 'function') return e.toJSON()
		}
		return e
	}
	function eo(e) {
		return Lt(e, Bt)
	}
	var Bt = class {
			constructor(t) {
				var n, r
				;(this.name = Pt(t.name)),
					(this.description = t.description),
					(this.locations = t.locations),
					(this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1),
					(this.extensions = Ct(t.extensions)),
					(this.astNode = t.astNode),
					Array.isArray(t.locations) || pe(!1, `@${t.name} locations must be an Array.`)
				let i = (r = t.args) !== null && r !== void 0 ? r : {}
				;(Nt(i) && !Array.isArray(i)) ||
					pe(!1, `@${t.name} args must be an object with argument names as keys.`),
					(this.args = hc(i))
			}
			get [Symbol.toStringTag]() {
				return 'GraphQLDirective'
			}
			toConfig() {
				return {
					name: this.name,
					description: this.description,
					locations: this.locations,
					args: mc(this.args),
					isRepeatable: this.isRepeatable,
					extensions: this.extensions,
					astNode: this.astNode
				}
			}
			toString() {
				return '@' + this.name
			}
			toJSON() {
				return this.toString()
			}
		},
		Ua = new Bt({
			name: 'include',
			description:
				'Directs the executor to include this field or fragment only when the `if` argument is true.',
			locations: [K.FIELD, K.FRAGMENT_SPREAD, K.INLINE_FRAGMENT],
			args: { if: { type: new ae(He), description: 'Included when true.' } }
		}),
		$a = new Bt({
			name: 'skip',
			description:
				'Directs the executor to skip this field or fragment when the `if` argument is true.',
			locations: [K.FIELD, K.FRAGMENT_SPREAD, K.INLINE_FRAGMENT],
			args: { if: { type: new ae(He), description: 'Skipped when true.' } }
		}),
		Fh = 'No longer supported',
		Li = new Bt({
			name: 'deprecated',
			description: 'Marks an element of a GraphQL schema as no longer supported.',
			locations: [
				K.FIELD_DEFINITION,
				K.ARGUMENT_DEFINITION,
				K.INPUT_FIELD_DEFINITION,
				K.ENUM_VALUE
			],
			args: {
				reason: {
					type: je,
					description:
						'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
					defaultValue: Fh
				}
			}
		}),
		ja = new Bt({
			name: 'specifiedBy',
			description: 'Exposes a URL that specifies the behavior of this scalar.',
			locations: [K.SCALAR],
			args: {
				url: {
					type: new ae(je),
					description: 'The URL that specifies the behavior of this scalar.'
				}
			}
		}),
		qa = new Bt({
			name: 'oneOf',
			description:
				'Indicates exactly one field must be supplied and this field must not be `null`.',
			locations: [K.INPUT_OBJECT],
			args: {}
		}),
		Qt = Object.freeze([Ua, $a, Li, ja, qa])
	function wh(e) {
		return typeof e == 'object' && typeof e?.[Symbol.iterator] == 'function'
	}
	function Ir(e, t) {
		if (ce(t)) {
			let n = Ir(e, t.ofType)
			return n?.kind === E.NULL ? null : n
		}
		if (e === null) return { kind: E.NULL }
		if (e === void 0) return null
		if (Fe(t)) {
			let n = t.ofType
			if (wh(e)) {
				let r = []
				for (let i of e) {
					let s = Ir(i, n)
					s != null && r.push(s)
				}
				return { kind: E.LIST, values: r }
			}
			return Ir(e, n)
		}
		if (be(t)) {
			if (!Nt(e)) return null
			let n = []
			for (let r of Object.values(t.getFields())) {
				let i = Ir(e[r.name], r.type)
				i && n.push({ kind: E.OBJECT_FIELD, name: { kind: E.NAME, value: r.name }, value: i })
			}
			return { kind: E.OBJECT, fields: n }
		}
		if (Wt(t)) {
			let n = t.serialize(e)
			if (n == null) return null
			if (typeof n == 'boolean') return { kind: E.BOOLEAN, value: n }
			if (typeof n == 'number' && Number.isFinite(n)) {
				let r = String(n)
				return Lh.test(r) ? { kind: E.INT, value: r } : { kind: E.FLOAT, value: r }
			}
			if (typeof n == 'string')
				return Be(t)
					? { kind: E.ENUM, value: n }
					: t === Ks && Lh.test(n)
					? { kind: E.INT, value: n }
					: { kind: E.STRING, value: n }
			throw new TypeError(`Cannot convert value to AST: ${q(n)}.`)
		}
		Ge(!1, 'Unexpected input type: ' + q(t))
	}
	var Lh = /^-?(?:0|[1-9][0-9]*)$/
	var Ci = new Ke({
			name: '__Schema',
			description:
				'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
			fields: () => ({
				description: { type: je, resolve: (e) => e.description },
				types: {
					description: 'A list of all types supported by this server.',
					type: new ae(new Me(new ae(zt))),
					resolve(e) {
						return Object.values(e.getTypeMap())
					}
				},
				queryType: {
					description: 'The type that query operations will be rooted at.',
					type: new ae(zt),
					resolve: (e) => e.getQueryType()
				},
				mutationType: {
					description:
						'If this server supports mutation, the type that mutation operations will be rooted at.',
					type: zt,
					resolve: (e) => e.getMutationType()
				},
				subscriptionType: {
					description:
						'If this server support subscription, the type that subscription operations will be rooted at.',
					type: zt,
					resolve: (e) => e.getSubscriptionType()
				},
				directives: {
					description: 'A list of all directives supported by this server.',
					type: new ae(new Me(new ae(Ga))),
					resolve: (e) => e.getDirectives()
				}
			})
		}),
		Ga = new Ke({
			name: '__Directive',
			description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
			fields: () => ({
				name: { type: new ae(je), resolve: (e) => e.name },
				description: { type: je, resolve: (e) => e.description },
				isRepeatable: { type: new ae(He), resolve: (e) => e.isRepeatable },
				locations: { type: new ae(new Me(new ae(Ha))), resolve: (e) => e.locations },
				args: {
					type: new ae(new Me(new ae(Ii))),
					args: { includeDeprecated: { type: He, defaultValue: !1 } },
					resolve(e, { includeDeprecated: t }) {
						return t ? e.args : e.args.filter((n) => n.deprecationReason == null)
					}
				}
			})
		}),
		Ha = new bt({
			name: '__DirectiveLocation',
			description:
				'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
			values: {
				QUERY: { value: K.QUERY, description: 'Location adjacent to a query operation.' },
				MUTATION: { value: K.MUTATION, description: 'Location adjacent to a mutation operation.' },
				SUBSCRIPTION: {
					value: K.SUBSCRIPTION,
					description: 'Location adjacent to a subscription operation.'
				},
				FIELD: { value: K.FIELD, description: 'Location adjacent to a field.' },
				FRAGMENT_DEFINITION: {
					value: K.FRAGMENT_DEFINITION,
					description: 'Location adjacent to a fragment definition.'
				},
				FRAGMENT_SPREAD: {
					value: K.FRAGMENT_SPREAD,
					description: 'Location adjacent to a fragment spread.'
				},
				INLINE_FRAGMENT: {
					value: K.INLINE_FRAGMENT,
					description: 'Location adjacent to an inline fragment.'
				},
				VARIABLE_DEFINITION: {
					value: K.VARIABLE_DEFINITION,
					description: 'Location adjacent to a variable definition.'
				},
				SCHEMA: { value: K.SCHEMA, description: 'Location adjacent to a schema definition.' },
				SCALAR: { value: K.SCALAR, description: 'Location adjacent to a scalar definition.' },
				OBJECT: { value: K.OBJECT, description: 'Location adjacent to an object type definition.' },
				FIELD_DEFINITION: {
					value: K.FIELD_DEFINITION,
					description: 'Location adjacent to a field definition.'
				},
				ARGUMENT_DEFINITION: {
					value: K.ARGUMENT_DEFINITION,
					description: 'Location adjacent to an argument definition.'
				},
				INTERFACE: {
					value: K.INTERFACE,
					description: 'Location adjacent to an interface definition.'
				},
				UNION: { value: K.UNION, description: 'Location adjacent to a union definition.' },
				ENUM: { value: K.ENUM, description: 'Location adjacent to an enum definition.' },
				ENUM_VALUE: {
					value: K.ENUM_VALUE,
					description: 'Location adjacent to an enum value definition.'
				},
				INPUT_OBJECT: {
					value: K.INPUT_OBJECT,
					description: 'Location adjacent to an input object type definition.'
				},
				INPUT_FIELD_DEFINITION: {
					value: K.INPUT_FIELD_DEFINITION,
					description: 'Location adjacent to an input object field definition.'
				}
			}
		}),
		zt = new Ke({
			name: '__Type',
			description:
				'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
			fields: () => ({
				kind: {
					type: new ae(za),
					resolve(e) {
						if (ct(e)) return Ce.SCALAR
						if (me(e)) return Ce.OBJECT
						if (De(e)) return Ce.INTERFACE
						if (Ze(e)) return Ce.UNION
						if (Be(e)) return Ce.ENUM
						if (be(e)) return Ce.INPUT_OBJECT
						if (Fe(e)) return Ce.LIST
						if (ce(e)) return Ce.NON_NULL
						Ge(!1, `Unexpected type: "${q(e)}".`)
					}
				},
				name: { type: je, resolve: (e) => ('name' in e ? e.name : void 0) },
				description: { type: je, resolve: (e) => ('description' in e ? e.description : void 0) },
				specifiedByURL: {
					type: je,
					resolve: (e) => ('specifiedByURL' in e ? e.specifiedByURL : void 0)
				},
				fields: {
					type: new Me(new ae(Wa)),
					args: { includeDeprecated: { type: He, defaultValue: !1 } },
					resolve(e, { includeDeprecated: t }) {
						if (me(e) || De(e)) {
							let n = Object.values(e.getFields())
							return t ? n : n.filter((r) => r.deprecationReason == null)
						}
					}
				},
				interfaces: {
					type: new Me(new ae(zt)),
					resolve(e) {
						if (me(e) || De(e)) return e.getInterfaces()
					}
				},
				possibleTypes: {
					type: new Me(new ae(zt)),
					resolve(e, t, n, { schema: r }) {
						if (mt(e)) return r.getPossibleTypes(e)
					}
				},
				enumValues: {
					type: new Me(new ae(Qa)),
					args: { includeDeprecated: { type: He, defaultValue: !1 } },
					resolve(e, { includeDeprecated: t }) {
						if (Be(e)) {
							let n = e.getValues()
							return t ? n : n.filter((r) => r.deprecationReason == null)
						}
					}
				},
				inputFields: {
					type: new Me(new ae(Ii)),
					args: { includeDeprecated: { type: He, defaultValue: !1 } },
					resolve(e, { includeDeprecated: t }) {
						if (be(e)) {
							let n = Object.values(e.getFields())
							return t ? n : n.filter((r) => r.deprecationReason == null)
						}
					}
				},
				ofType: { type: zt, resolve: (e) => ('ofType' in e ? e.ofType : void 0) },
				isOneOf: {
					type: He,
					resolve: (e) => {
						if (be(e)) return e.isOneOf
					}
				}
			})
		}),
		Wa = new Ke({
			name: '__Field',
			description:
				'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
			fields: () => ({
				name: { type: new ae(je), resolve: (e) => e.name },
				description: { type: je, resolve: (e) => e.description },
				args: {
					type: new ae(new Me(new ae(Ii))),
					args: { includeDeprecated: { type: He, defaultValue: !1 } },
					resolve(e, { includeDeprecated: t }) {
						return t ? e.args : e.args.filter((n) => n.deprecationReason == null)
					}
				},
				type: { type: new ae(zt), resolve: (e) => e.type },
				isDeprecated: { type: new ae(He), resolve: (e) => e.deprecationReason != null },
				deprecationReason: { type: je, resolve: (e) => e.deprecationReason }
			})
		}),
		Ii = new Ke({
			name: '__InputValue',
			description:
				'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
			fields: () => ({
				name: { type: new ae(je), resolve: (e) => e.name },
				description: { type: je, resolve: (e) => e.description },
				type: { type: new ae(zt), resolve: (e) => e.type },
				defaultValue: {
					type: je,
					description:
						'A GraphQL-formatted string representing the default value for this input value.',
					resolve(e) {
						let { type: t, defaultValue: n } = e,
							r = Ir(n, t)
						return r ? Le(r) : null
					}
				},
				isDeprecated: { type: new ae(He), resolve: (e) => e.deprecationReason != null },
				deprecationReason: { type: je, resolve: (e) => e.deprecationReason }
			})
		}),
		Qa = new Ke({
			name: '__EnumValue',
			description:
				'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
			fields: () => ({
				name: { type: new ae(je), resolve: (e) => e.name },
				description: { type: je, resolve: (e) => e.description },
				isDeprecated: { type: new ae(He), resolve: (e) => e.deprecationReason != null },
				deprecationReason: { type: je, resolve: (e) => e.deprecationReason }
			})
		}),
		Ce
	;(function (e) {
		;(e.SCALAR = 'SCALAR'),
			(e.OBJECT = 'OBJECT'),
			(e.INTERFACE = 'INTERFACE'),
			(e.UNION = 'UNION'),
			(e.ENUM = 'ENUM'),
			(e.INPUT_OBJECT = 'INPUT_OBJECT'),
			(e.LIST = 'LIST'),
			(e.NON_NULL = 'NON_NULL')
	})(Ce || (Ce = {}))
	var za = new bt({
			name: '__TypeKind',
			description: 'An enum describing what kind of type a given `__Type` is.',
			values: {
				SCALAR: { value: Ce.SCALAR, description: 'Indicates this type is a scalar.' },
				OBJECT: {
					value: Ce.OBJECT,
					description:
						'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
				},
				INTERFACE: {
					value: Ce.INTERFACE,
					description:
						'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
				},
				UNION: {
					value: Ce.UNION,
					description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
				},
				ENUM: {
					value: Ce.ENUM,
					description: 'Indicates this type is an enum. `enumValues` is a valid field.'
				},
				INPUT_OBJECT: {
					value: Ce.INPUT_OBJECT,
					description: 'Indicates this type is an input object. `inputFields` is a valid field.'
				},
				LIST: {
					value: Ce.LIST,
					description: 'Indicates this type is a list. `ofType` is a valid field.'
				},
				NON_NULL: {
					value: Ce.NON_NULL,
					description: 'Indicates this type is a non-null. `ofType` is a valid field.'
				}
			}
		}),
		En = {
			name: '__schema',
			type: new ae(Ci),
			description: 'Access the current type schema of this server.',
			args: [],
			resolve: (e, t, n, { schema: r }) => r,
			deprecationReason: void 0,
			extensions: Object.create(null),
			astNode: void 0
		},
		yn = {
			name: '__type',
			type: zt,
			description: 'Request the type information of a single type.',
			args: [
				{
					name: 'name',
					description: void 0,
					type: new ae(je),
					defaultValue: void 0,
					deprecationReason: void 0,
					extensions: Object.create(null),
					astNode: void 0
				}
			],
			resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
			deprecationReason: void 0,
			extensions: Object.create(null),
			astNode: void 0
		},
		xn = {
			name: '__typename',
			type: new ae(je),
			description: 'The name of the current Object type at runtime.',
			args: [],
			resolve: (e, t, n, { parentType: r }) => r.name,
			deprecationReason: void 0,
			extensions: Object.create(null),
			astNode: void 0
		},
		$n = Object.freeze([Ci, Ga, Ha, zt, Wa, Ii, Qa, za])
	function Ri(e) {
		return $n.some(({ name: t }) => e.name === t)
	}
	function Ch(e) {
		return Lt(e, dr)
	}
	function Dc(e) {
		if (!Ch(e)) throw new Error(`Expected ${q(e)} to be a GraphQL schema.`)
		return e
	}
	var dr = class {
		constructor(t) {
			var n, r
			;(this.__validationErrors = t.assumeValid === !0 ? [] : void 0),
				Nt(t) || pe(!1, 'Must provide configuration object.'),
				!t.types ||
					Array.isArray(t.types) ||
					pe(!1, `"types" must be Array if provided but got: ${q(t.types)}.`),
				!t.directives ||
					Array.isArray(t.directives) ||
					pe(!1, `"directives" must be Array if provided but got: ${q(t.directives)}.`),
				(this.description = t.description),
				(this.extensions = Ct(t.extensions)),
				(this.astNode = t.astNode),
				(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
				(this._queryType = t.query),
				(this._mutationType = t.mutation),
				(this._subscriptionType = t.subscription),
				(this._directives = (r = t.directives) !== null && r !== void 0 ? r : Qt)
			let i = new Set(t.types)
			if (t.types != null) for (let s of t.types) i.delete(s), un(s, i)
			this._queryType != null && un(this._queryType, i),
				this._mutationType != null && un(this._mutationType, i),
				this._subscriptionType != null && un(this._subscriptionType, i)
			for (let s of this._directives) if (eo(s)) for (let o of s.args) un(o.type, i)
			un(Ci, i),
				(this._typeMap = Object.create(null)),
				(this._subTypeMap = Object.create(null)),
				(this._implementationsMap = Object.create(null))
			for (let s of i) {
				if (s == null) continue
				let o = s.name
				if (
					(o || pe(!1, 'One of the provided types for building the Schema is missing a name.'),
					this._typeMap[o] !== void 0)
				)
					throw new Error(
						`Schema must contain uniquely named types but contains multiple types named "${o}".`
					)
				if (((this._typeMap[o] = s), De(s))) {
					for (let a of s.getInterfaces())
						if (De(a)) {
							let u = this._implementationsMap[a.name]
							u === void 0 &&
								(u = this._implementationsMap[a.name] = { objects: [], interfaces: [] }),
								u.interfaces.push(s)
						}
				} else if (me(s)) {
					for (let a of s.getInterfaces())
						if (De(a)) {
							let u = this._implementationsMap[a.name]
							u === void 0 &&
								(u = this._implementationsMap[a.name] = { objects: [], interfaces: [] }),
								u.objects.push(s)
						}
				}
			}
		}
		get [Symbol.toStringTag]() {
			return 'GraphQLSchema'
		}
		getQueryType() {
			return this._queryType
		}
		getMutationType() {
			return this._mutationType
		}
		getSubscriptionType() {
			return this._subscriptionType
		}
		getRootType(t) {
			switch (t) {
				case st.QUERY:
					return this.getQueryType()
				case st.MUTATION:
					return this.getMutationType()
				case st.SUBSCRIPTION:
					return this.getSubscriptionType()
			}
		}
		getTypeMap() {
			return this._typeMap
		}
		getType(t) {
			return this.getTypeMap()[t]
		}
		getPossibleTypes(t) {
			return Ze(t) ? t.getTypes() : this.getImplementations(t).objects
		}
		getImplementations(t) {
			let n = this._implementationsMap[t.name]
			return n ?? { objects: [], interfaces: [] }
		}
		isSubType(t, n) {
			let r = this._subTypeMap[t.name]
			if (r === void 0) {
				if (((r = Object.create(null)), Ze(t))) for (let i of t.getTypes()) r[i.name] = !0
				else {
					let i = this.getImplementations(t)
					for (let s of i.objects) r[s.name] = !0
					for (let s of i.interfaces) r[s.name] = !0
				}
				this._subTypeMap[t.name] = r
			}
			return r[n.name] !== void 0
		}
		getDirectives() {
			return this._directives
		}
		getDirective(t) {
			return this.getDirectives().find((n) => n.name === t)
		}
		toConfig() {
			return {
				description: this.description,
				query: this.getQueryType(),
				mutation: this.getMutationType(),
				subscription: this.getSubscriptionType(),
				types: Object.values(this.getTypeMap()),
				directives: this.getDirectives(),
				extensions: this.extensions,
				astNode: this.astNode,
				extensionASTNodes: this.extensionASTNodes,
				assumeValid: this.__validationErrors !== void 0
			}
		}
	}
	function un(e, t) {
		let n = we(e)
		if (!t.has(n)) {
			if ((t.add(n), Ze(n))) for (let r of n.getTypes()) un(r, t)
			else if (me(n) || De(n)) {
				for (let r of n.getInterfaces()) un(r, t)
				for (let r of Object.values(n.getFields())) {
					un(r.type, t)
					for (let i of r.args) un(i.type, t)
				}
			} else if (be(n)) for (let r of Object.values(n.getFields())) un(r.type, t)
		}
		return t
	}
	function Oh(e) {
		if ((Dc(e), e.__validationErrors)) return e.__validationErrors
		let t = new bc(e)
		v7(t), b7(t), E7(t)
		let n = t.getErrors()
		return (e.__validationErrors = n), n
	}
	function Ec(e) {
		let t = Oh(e)
		if (t.length !== 0)
			throw new Error(
				t.map((n) => n.message).join(`

`)
			)
	}
	var bc = class {
		constructor(t) {
			;(this._errors = []), (this.schema = t)
		}
		reportError(t, n) {
			let r = Array.isArray(n) ? n.filter(Boolean) : n
			this._errors.push(new O(t, { nodes: r }))
		}
		getErrors() {
			return this._errors
		}
	}
	function v7(e) {
		let t = e.schema,
			n = t.getQueryType()
		if (!n) e.reportError('Query root type must be provided.', t.astNode)
		else if (!me(n)) {
			var r
			e.reportError(
				`Query root type must be Object type, it cannot be ${q(n)}.`,
				(r = vc(t, st.QUERY)) !== null && r !== void 0 ? r : n.astNode
			)
		}
		let i = t.getMutationType()
		if (i && !me(i)) {
			var s
			e.reportError(
				`Mutation root type must be Object type if provided, it cannot be ${q(i)}.`,
				(s = vc(t, st.MUTATION)) !== null && s !== void 0 ? s : i.astNode
			)
		}
		let o = t.getSubscriptionType()
		if (o && !me(o)) {
			var a
			e.reportError(
				`Subscription root type must be Object type if provided, it cannot be ${q(o)}.`,
				(a = vc(t, st.SUBSCRIPTION)) !== null && a !== void 0 ? a : o.astNode
			)
		}
	}
	function vc(e, t) {
		var n
		return (n = [e.astNode, ...e.extensionASTNodes]
			.flatMap((r) => {
				var i
				return (i = r?.operationTypes) !== null && i !== void 0 ? i : []
			})
			.find((r) => r.operation === t)) === null || n === void 0
			? void 0
			: n.type
	}
	function b7(e) {
		for (let n of e.schema.getDirectives()) {
			if (!eo(n)) {
				e.reportError(`Expected directive but got: ${q(n)}.`, n?.astNode)
				continue
			}
			Rr(e, n)
			for (let r of n.args)
				if (
					(Rr(e, r),
					et(r.type) ||
						e.reportError(
							`The type of @${n.name}(${r.name}:) must be Input Type but got: ${q(r.type)}.`,
							r.astNode
						),
					Vn(r) && r.deprecationReason != null)
				) {
					var t
					e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [
						yc(r.astNode),
						(t = r.astNode) === null || t === void 0 ? void 0 : t.type
					])
				}
		}
	}
	function Rr(e, t) {
		t.name.startsWith('__') &&
			e.reportError(
				`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
				t.astNode
			)
	}
	function E7(e) {
		let t = A7(e),
			n = e.schema.getTypeMap()
		for (let r of Object.values(n)) {
			if (!Ma(r)) {
				e.reportError(`Expected GraphQL named type but got: ${q(r)}.`, r.astNode)
				continue
			}
			Ri(r) || Rr(e, r),
				me(r) || De(r)
					? (Ih(e, r), Rh(e, r))
					: Ze(r)
					? _7(e, r)
					: Be(r)
					? N7(e, r)
					: be(r) && (T7(e, r), t(r))
		}
	}
	function Ih(e, t) {
		let n = Object.values(t.getFields())
		n.length === 0 &&
			e.reportError(`Type ${t.name} must define one or more fields.`, [
				t.astNode,
				...t.extensionASTNodes
			])
		for (let o of n) {
			if ((Rr(e, o), !Ht(o.type))) {
				var r
				e.reportError(
					`The type of ${t.name}.${o.name} must be Output Type but got: ${q(o.type)}.`,
					(r = o.astNode) === null || r === void 0 ? void 0 : r.type
				)
			}
			for (let a of o.args) {
				let u = a.name
				if ((Rr(e, a), !et(a.type))) {
					var i
					e.reportError(
						`The type of ${t.name}.${o.name}(${u}:) must be Input Type but got: ${q(a.type)}.`,
						(i = a.astNode) === null || i === void 0 ? void 0 : i.type
					)
				}
				if (Vn(a) && a.deprecationReason != null) {
					var s
					e.reportError(`Required argument ${t.name}.${o.name}(${u}:) cannot be deprecated.`, [
						yc(a.astNode),
						(s = a.astNode) === null || s === void 0 ? void 0 : s.type
					])
				}
			}
		}
	}
	function Rh(e, t) {
		let n = Object.create(null)
		for (let r of t.getInterfaces()) {
			if (!De(r)) {
				e.reportError(
					`Type ${q(t)} must only implement Interface types, it cannot implement ${q(r)}.`,
					to(t, r)
				)
				continue
			}
			if (t === r) {
				e.reportError(
					`Type ${t.name} cannot implement itself because it would create a circular reference.`,
					to(t, r)
				)
				continue
			}
			if (n[r.name]) {
				e.reportError(`Type ${t.name} can only implement ${r.name} once.`, to(t, r))
				continue
			}
			;(n[r.name] = !0), x7(e, t, r), y7(e, t, r)
		}
	}
	function y7(e, t, n) {
		let r = t.getFields()
		for (let u of Object.values(n.getFields())) {
			let l = u.name,
				c = r[l]
			if (!c) {
				e.reportError(
					`Interface field ${n.name}.${l} expected but ${t.name} does not provide it.`,
					[u.astNode, t.astNode, ...t.extensionASTNodes]
				)
				continue
			}
			if (!bn(e.schema, c.type, u.type)) {
				var i, s
				e.reportError(
					`Interface field ${n.name}.${l} expects type ${q(u.type)} but ${t.name}.${l} is type ${q(
						c.type
					)}.`,
					[
						(i = u.astNode) === null || i === void 0 ? void 0 : i.type,
						(s = c.astNode) === null || s === void 0 ? void 0 : s.type
					]
				)
			}
			for (let d of u.args) {
				let h = d.name,
					m = c.args.find((g) => g.name === h)
				if (!m) {
					e.reportError(
						`Interface field argument ${n.name}.${l}(${h}:) expected but ${t.name}.${l} does not provide it.`,
						[d.astNode, c.astNode]
					)
					continue
				}
				if (!wi(d.type, m.type)) {
					var o, a
					e.reportError(
						`Interface field argument ${n.name}.${l}(${h}:) expects type ${q(d.type)} but ${
							t.name
						}.${l}(${h}:) is type ${q(m.type)}.`,
						[
							(o = d.astNode) === null || o === void 0 ? void 0 : o.type,
							(a = m.astNode) === null || a === void 0 ? void 0 : a.type
						]
					)
				}
			}
			for (let d of c.args) {
				let h = d.name
				!u.args.find((g) => g.name === h) &&
					Vn(d) &&
					e.reportError(
						`Object field ${t.name}.${l} includes required argument ${h} that is missing from the Interface field ${n.name}.${l}.`,
						[d.astNode, u.astNode]
					)
			}
		}
	}
	function x7(e, t, n) {
		let r = t.getInterfaces()
		for (let i of n.getInterfaces())
			r.includes(i) ||
				e.reportError(
					i === t
						? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.`
						: `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`,
					[...to(n, i), ...to(t, n)]
				)
	}
	function _7(e, t) {
		let n = t.getTypes()
		n.length === 0 &&
			e.reportError(`Union type ${t.name} must define one or more member types.`, [
				t.astNode,
				...t.extensionASTNodes
			])
		let r = Object.create(null)
		for (let i of n) {
			if (r[i.name]) {
				e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, kh(t, i.name))
				continue
			}
			;(r[i.name] = !0),
				me(i) ||
					e.reportError(
						`Union type ${t.name} can only include Object types, it cannot include ${q(i)}.`,
						kh(t, String(i))
					)
		}
	}
	function N7(e, t) {
		let n = t.getValues()
		n.length === 0 &&
			e.reportError(`Enum type ${t.name} must define one or more values.`, [
				t.astNode,
				...t.extensionASTNodes
			])
		for (let r of n) Rr(e, r)
	}
	function T7(e, t) {
		let n = Object.values(t.getFields())
		n.length === 0 &&
			e.reportError(`Input Object type ${t.name} must define one or more fields.`, [
				t.astNode,
				...t.extensionASTNodes
			])
		for (let s of n) {
			if ((Rr(e, s), !et(s.type))) {
				var r
				e.reportError(
					`The type of ${t.name}.${s.name} must be Input Type but got: ${q(s.type)}.`,
					(r = s.astNode) === null || r === void 0 ? void 0 : r.type
				)
			}
			if (Fi(s) && s.deprecationReason != null) {
				var i
				e.reportError(`Required input field ${t.name}.${s.name} cannot be deprecated.`, [
					yc(s.astNode),
					(i = s.astNode) === null || i === void 0 ? void 0 : i.type
				])
			}
			t.isOneOf && S7(t, s, e)
		}
	}
	function S7(e, t, n) {
		if (ce(t.type)) {
			var r
			n.reportError(
				`OneOf input field ${e.name}.${t.name} must be nullable.`,
				(r = t.astNode) === null || r === void 0 ? void 0 : r.type
			)
		}
		t.defaultValue !== void 0 &&
			n.reportError(`OneOf input field ${e.name}.${t.name} cannot have a default value.`, t.astNode)
	}
	function A7(e) {
		let t = Object.create(null),
			n = [],
			r = Object.create(null)
		return i
		function i(s) {
			if (t[s.name]) return
			;(t[s.name] = !0), (r[s.name] = n.length)
			let o = Object.values(s.getFields())
			for (let a of o)
				if (ce(a.type) && be(a.type.ofType)) {
					let u = a.type.ofType,
						l = r[u.name]
					if ((n.push(a), l === void 0)) i(u)
					else {
						let c = n.slice(l),
							d = c.map((h) => h.name).join('.')
						e.reportError(
							`Cannot reference Input Object "${u.name}" within itself through a series of non-null fields: "${d}".`,
							c.map((h) => h.astNode)
						)
					}
					n.pop()
				}
			r[s.name] = void 0
		}
	}
	function to(e, t) {
		let { astNode: n, extensionASTNodes: r } = e
		return (n != null ? [n, ...r] : r)
			.flatMap((s) => {
				var o
				return (o = s.interfaces) !== null && o !== void 0 ? o : []
			})
			.filter((s) => s.name.value === t.name)
	}
	function kh(e, t) {
		let { astNode: n, extensionASTNodes: r } = e
		return (n != null ? [n, ...r] : r)
			.flatMap((s) => {
				var o
				return (o = s.types) !== null && o !== void 0 ? o : []
			})
			.filter((s) => s.name.value === t)
	}
	function yc(e) {
		var t
		return e == null || (t = e.directives) === null || t === void 0
			? void 0
			: t.find((n) => n.name.value === Li.name)
	}
	function We(e, t) {
		switch (t.kind) {
			case E.LIST_TYPE: {
				let n = We(e, t.type)
				return n && new Me(n)
			}
			case E.NON_NULL_TYPE: {
				let n = We(e, t.type)
				return n && new ae(n)
			}
			case E.NAMED_TYPE:
				return e.getType(t.name.value)
		}
	}
	var kr = class {
		constructor(t, n, r) {
			;(this._schema = t),
				(this._typeStack = []),
				(this._parentTypeStack = []),
				(this._inputTypeStack = []),
				(this._fieldDefStack = []),
				(this._defaultValueStack = []),
				(this._directive = null),
				(this._argument = null),
				(this._enumValue = null),
				(this._getFieldDef = r ?? F7),
				n &&
					(et(n) && this._inputTypeStack.push(n),
					at(n) && this._parentTypeStack.push(n),
					Ht(n) && this._typeStack.push(n))
		}
		get [Symbol.toStringTag]() {
			return 'TypeInfo'
		}
		getType() {
			if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1]
		}
		getParentType() {
			if (this._parentTypeStack.length > 0)
				return this._parentTypeStack[this._parentTypeStack.length - 1]
		}
		getInputType() {
			if (this._inputTypeStack.length > 0)
				return this._inputTypeStack[this._inputTypeStack.length - 1]
		}
		getParentInputType() {
			if (this._inputTypeStack.length > 1)
				return this._inputTypeStack[this._inputTypeStack.length - 2]
		}
		getFieldDef() {
			if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1]
		}
		getDefaultValue() {
			if (this._defaultValueStack.length > 0)
				return this._defaultValueStack[this._defaultValueStack.length - 1]
		}
		getDirective() {
			return this._directive
		}
		getArgument() {
			return this._argument
		}
		getEnumValue() {
			return this._enumValue
		}
		enter(t) {
			let n = this._schema
			switch (t.kind) {
				case E.SELECTION_SET: {
					let i = we(this.getType())
					this._parentTypeStack.push(at(i) ? i : void 0)
					break
				}
				case E.FIELD: {
					let i = this.getParentType(),
						s,
						o
					i && ((s = this._getFieldDef(n, i, t)), s && (o = s.type)),
						this._fieldDefStack.push(s),
						this._typeStack.push(Ht(o) ? o : void 0)
					break
				}
				case E.DIRECTIVE:
					this._directive = n.getDirective(t.name.value)
					break
				case E.OPERATION_DEFINITION: {
					let i = n.getRootType(t.operation)
					this._typeStack.push(me(i) ? i : void 0)
					break
				}
				case E.INLINE_FRAGMENT:
				case E.FRAGMENT_DEFINITION: {
					let i = t.typeCondition,
						s = i ? We(n, i) : we(this.getType())
					this._typeStack.push(Ht(s) ? s : void 0)
					break
				}
				case E.VARIABLE_DEFINITION: {
					let i = We(n, t.type)
					this._inputTypeStack.push(et(i) ? i : void 0)
					break
				}
				case E.ARGUMENT: {
					var r
					let i,
						s,
						o = (r = this.getDirective()) !== null && r !== void 0 ? r : this.getFieldDef()
					o && ((i = o.args.find((a) => a.name === t.name.value)), i && (s = i.type)),
						(this._argument = i),
						this._defaultValueStack.push(i ? i.defaultValue : void 0),
						this._inputTypeStack.push(et(s) ? s : void 0)
					break
				}
				case E.LIST: {
					let i = fr(this.getInputType()),
						s = Fe(i) ? i.ofType : i
					this._defaultValueStack.push(void 0), this._inputTypeStack.push(et(s) ? s : void 0)
					break
				}
				case E.OBJECT_FIELD: {
					let i = we(this.getInputType()),
						s,
						o
					be(i) && ((o = i.getFields()[t.name.value]), o && (s = o.type)),
						this._defaultValueStack.push(o ? o.defaultValue : void 0),
						this._inputTypeStack.push(et(s) ? s : void 0)
					break
				}
				case E.ENUM: {
					let i = we(this.getInputType()),
						s
					Be(i) && (s = i.getValue(t.value)), (this._enumValue = s)
					break
				}
				default:
			}
		}
		leave(t) {
			switch (t.kind) {
				case E.SELECTION_SET:
					this._parentTypeStack.pop()
					break
				case E.FIELD:
					this._fieldDefStack.pop(), this._typeStack.pop()
					break
				case E.DIRECTIVE:
					this._directive = null
					break
				case E.OPERATION_DEFINITION:
				case E.INLINE_FRAGMENT:
				case E.FRAGMENT_DEFINITION:
					this._typeStack.pop()
					break
				case E.VARIABLE_DEFINITION:
					this._inputTypeStack.pop()
					break
				case E.ARGUMENT:
					;(this._argument = null), this._defaultValueStack.pop(), this._inputTypeStack.pop()
					break
				case E.LIST:
				case E.OBJECT_FIELD:
					this._defaultValueStack.pop(), this._inputTypeStack.pop()
					break
				case E.ENUM:
					this._enumValue = null
					break
				default:
			}
		}
	}
	function F7(e, t, n) {
		let r = n.name.value
		if (r === En.name && e.getQueryType() === t) return En
		if (r === yn.name && e.getQueryType() === t) return yn
		if (r === xn.name && at(t)) return xn
		if (me(t) || De(t)) return t.getFields()[r]
	}
	function no(e, t) {
		return {
			enter(...n) {
				let r = n[0]
				e.enter(r)
				let i = Lr(t, r.kind).enter
				if (i) {
					let s = i.apply(t, n)
					return s !== void 0 && (e.leave(r), js(s) && e.enter(s)), s
				}
			},
			leave(...n) {
				let r = n[0],
					i = Lr(t, r.kind).leave,
					s
				return i && (s = i.apply(t, n)), e.leave(r), s
			}
		}
	}
	function xc(e) {
		return e.kind === E.OPERATION_DEFINITION || e.kind === E.FRAGMENT_DEFINITION
	}
	function _c(e) {
		return e.kind === E.SCHEMA_DEFINITION || _n(e) || e.kind === E.DIRECTIVE_DEFINITION
	}
	function _n(e) {
		return (
			e.kind === E.SCALAR_TYPE_DEFINITION ||
			e.kind === E.OBJECT_TYPE_DEFINITION ||
			e.kind === E.INTERFACE_TYPE_DEFINITION ||
			e.kind === E.UNION_TYPE_DEFINITION ||
			e.kind === E.ENUM_TYPE_DEFINITION ||
			e.kind === E.INPUT_OBJECT_TYPE_DEFINITION
		)
	}
	function Nc(e) {
		return e.kind === E.SCHEMA_EXTENSION || ki(e)
	}
	function ki(e) {
		return (
			e.kind === E.SCALAR_TYPE_EXTENSION ||
			e.kind === E.OBJECT_TYPE_EXTENSION ||
			e.kind === E.INTERFACE_TYPE_EXTENSION ||
			e.kind === E.UNION_TYPE_EXTENSION ||
			e.kind === E.ENUM_TYPE_EXTENSION ||
			e.kind === E.INPUT_OBJECT_TYPE_EXTENSION
		)
	}
	function Oi(e) {
		return {
			Document(t) {
				for (let n of t.definitions)
					if (!xc(n)) {
						let r =
							n.kind === E.SCHEMA_DEFINITION || n.kind === E.SCHEMA_EXTENSION
								? 'schema'
								: '"' + n.name.value + '"'
						e.reportError(new O(`The ${r} definition is not executable.`, { nodes: n }))
					}
				return !1
			}
		}
	}
	function Tc(e) {
		return {
			Field(t) {
				let n = e.getParentType()
				if (n && !e.getFieldDef()) {
					let i = e.getSchema(),
						s = t.name.value,
						o = Mt('to use an inline fragment on', w7(i, n, s))
					o === '' && (o = Mt(L7(n, s))),
						e.reportError(new O(`Cannot query field "${s}" on type "${n.name}".` + o, { nodes: t }))
				}
			}
		}
	}
	function w7(e, t, n) {
		if (!mt(t)) return []
		let r = new Set(),
			i = Object.create(null)
		for (let o of e.getPossibleTypes(t))
			if (o.getFields()[n]) {
				r.add(o), (i[o.name] = 1)
				for (let a of o.getInterfaces()) {
					var s
					a.getFields()[n] &&
						(r.add(a), (i[a.name] = ((s = i[a.name]) !== null && s !== void 0 ? s : 0) + 1))
				}
			}
		return [...r]
			.sort((o, a) => {
				let u = i[a.name] - i[o.name]
				return u !== 0
					? u
					: De(o) && e.isSubType(o, a)
					? -1
					: De(a) && e.isSubType(a, o)
					? 1
					: Ti(o.name, a.name)
			})
			.map((o) => o.name)
	}
	function L7(e, t) {
		if (me(e) || De(e)) {
			let n = Object.keys(e.getFields())
			return Gt(t, n)
		}
		return []
	}
	function Mi(e) {
		return {
			InlineFragment(t) {
				let n = t.typeCondition
				if (n) {
					let r = We(e.getSchema(), n)
					if (r && !at(r)) {
						let i = Le(n)
						e.reportError(
							new O(`Fragment cannot condition on non composite type "${i}".`, { nodes: n })
						)
					}
				}
			},
			FragmentDefinition(t) {
				let n = We(e.getSchema(), t.typeCondition)
				if (n && !at(n)) {
					let r = Le(t.typeCondition)
					e.reportError(
						new O(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, {
							nodes: t.typeCondition
						})
					)
				}
			}
		}
	}
	function Sc(e) {
		return {
			...Ac(e),
			Argument(t) {
				let n = e.getArgument(),
					r = e.getFieldDef(),
					i = e.getParentType()
				if (!n && r && i) {
					let s = t.name.value,
						o = r.args.map((u) => u.name),
						a = Gt(s, o)
					e.reportError(
						new O(`Unknown argument "${s}" on field "${i.name}.${r.name}".` + Mt(a), { nodes: t })
					)
				}
			}
		}
	}
	function Ac(e) {
		let t = Object.create(null),
			n = e.getSchema(),
			r = n ? n.getDirectives() : Qt
		for (let o of r) t[o.name] = o.args.map((a) => a.name)
		let i = e.getDocument().definitions
		for (let o of i)
			if (o.kind === E.DIRECTIVE_DEFINITION) {
				var s
				let a = (s = o.arguments) !== null && s !== void 0 ? s : []
				t[o.name.value] = a.map((u) => u.name.value)
			}
		return {
			Directive(o) {
				let a = o.name.value,
					u = t[a]
				if (o.arguments && u)
					for (let l of o.arguments) {
						let c = l.name.value
						if (!u.includes(c)) {
							let d = Gt(c, u)
							e.reportError(
								new O(`Unknown argument "${c}" on directive "@${a}".` + Mt(d), { nodes: l })
							)
						}
					}
				return !1
			}
		}
	}
	function Or(e) {
		let t = Object.create(null),
			n = e.getSchema(),
			r = n ? n.getDirectives() : Qt
		for (let s of r) t[s.name] = s.locations
		let i = e.getDocument().definitions
		for (let s of i)
			s.kind === E.DIRECTIVE_DEFINITION && (t[s.name.value] = s.locations.map((o) => o.value))
		return {
			Directive(s, o, a, u, l) {
				let c = s.name.value,
					d = t[c]
				if (!d) {
					e.reportError(new O(`Unknown directive "@${c}".`, { nodes: s }))
					return
				}
				let h = C7(l)
				h &&
					!d.includes(h) &&
					e.reportError(new O(`Directive "@${c}" may not be used on ${h}.`, { nodes: s }))
			}
		}
	}
	function C7(e) {
		let t = e[e.length - 1]
		switch (('kind' in t || Ge(!1), t.kind)) {
			case E.OPERATION_DEFINITION:
				return I7(t.operation)
			case E.FIELD:
				return K.FIELD
			case E.FRAGMENT_SPREAD:
				return K.FRAGMENT_SPREAD
			case E.INLINE_FRAGMENT:
				return K.INLINE_FRAGMENT
			case E.FRAGMENT_DEFINITION:
				return K.FRAGMENT_DEFINITION
			case E.VARIABLE_DEFINITION:
				return K.VARIABLE_DEFINITION
			case E.SCHEMA_DEFINITION:
			case E.SCHEMA_EXTENSION:
				return K.SCHEMA
			case E.SCALAR_TYPE_DEFINITION:
			case E.SCALAR_TYPE_EXTENSION:
				return K.SCALAR
			case E.OBJECT_TYPE_DEFINITION:
			case E.OBJECT_TYPE_EXTENSION:
				return K.OBJECT
			case E.FIELD_DEFINITION:
				return K.FIELD_DEFINITION
			case E.INTERFACE_TYPE_DEFINITION:
			case E.INTERFACE_TYPE_EXTENSION:
				return K.INTERFACE
			case E.UNION_TYPE_DEFINITION:
			case E.UNION_TYPE_EXTENSION:
				return K.UNION
			case E.ENUM_TYPE_DEFINITION:
			case E.ENUM_TYPE_EXTENSION:
				return K.ENUM
			case E.ENUM_VALUE_DEFINITION:
				return K.ENUM_VALUE
			case E.INPUT_OBJECT_TYPE_DEFINITION:
			case E.INPUT_OBJECT_TYPE_EXTENSION:
				return K.INPUT_OBJECT
			case E.INPUT_VALUE_DEFINITION: {
				let n = e[e.length - 3]
				return (
					'kind' in n || Ge(!1),
					n.kind === E.INPUT_OBJECT_TYPE_DEFINITION
						? K.INPUT_FIELD_DEFINITION
						: K.ARGUMENT_DEFINITION
				)
			}
			default:
				Ge(!1, 'Unexpected kind: ' + q(t.kind))
		}
	}
	function I7(e) {
		switch (e) {
			case st.QUERY:
				return K.QUERY
			case st.MUTATION:
				return K.MUTATION
			case st.SUBSCRIPTION:
				return K.SUBSCRIPTION
		}
	}
	function Pi(e) {
		return {
			FragmentSpread(t) {
				let n = t.name.value
				e.getFragment(n) || e.reportError(new O(`Unknown fragment "${n}".`, { nodes: t.name }))
			}
		}
	}
	function Mr(e) {
		let t = e.getSchema(),
			n = t ? t.getTypeMap() : Object.create(null),
			r = Object.create(null)
		for (let s of e.getDocument().definitions) _n(s) && (r[s.name.value] = !0)
		let i = [...Object.keys(n), ...Object.keys(r)]
		return {
			NamedType(s, o, a, u, l) {
				let c = s.name.value
				if (!n[c] && !r[c]) {
					var d
					let h = (d = l[2]) !== null && d !== void 0 ? d : a,
						m = h != null && R7(h)
					if (m && Mh.includes(c)) return
					let g = Gt(c, m ? Mh.concat(i) : i)
					e.reportError(new O(`Unknown type "${c}".` + Mt(g), { nodes: s }))
				}
			}
		}
	}
	var Mh = [...Un, ...$n].map((e) => e.name)
	function R7(e) {
		return 'kind' in e && (_c(e) || Nc(e))
	}
	function Fc(e) {
		let t = 0
		return {
			Document(n) {
				t = n.definitions.filter((r) => r.kind === E.OPERATION_DEFINITION).length
			},
			OperationDefinition(n) {
				!n.name &&
					t > 1 &&
					e.reportError(
						new O('This anonymous operation must be the only defined operation.', { nodes: n })
					)
			}
		}
	}
	function Bi(e) {
		var t, n, r
		let i = e.getSchema(),
			s =
				(t =
					(n = (r = i?.astNode) !== null && r !== void 0 ? r : i?.getQueryType()) !== null &&
					n !== void 0
						? n
						: i?.getMutationType()) !== null && t !== void 0
					? t
					: i?.getSubscriptionType(),
			o = 0
		return {
			SchemaDefinition(a) {
				if (s) {
					e.reportError(
						new O('Cannot define a new schema within a schema extension.', { nodes: a })
					)
					return
				}
				o > 0 && e.reportError(new O('Must provide only one schema definition.', { nodes: a })), ++o
			}
		}
	}
	var k7 = 3
	function wc(e) {
		function t(n, r = Object.create(null), i = 0) {
			if (n.kind === E.FRAGMENT_SPREAD) {
				let s = n.name.value
				if (r[s] === !0) return !1
				let o = e.getFragment(s)
				if (!o) return !1
				try {
					return (r[s] = !0), t(o, r, i)
				} finally {
					r[s] = void 0
				}
			}
			if (
				n.kind === E.FIELD &&
				(n.name.value === 'fields' ||
					n.name.value === 'interfaces' ||
					n.name.value === 'possibleTypes' ||
					n.name.value === 'inputFields') &&
				(i++, i >= k7)
			)
				return !0
			if ('selectionSet' in n && n.selectionSet) {
				for (let s of n.selectionSet.selections) if (t(s, r, i)) return !0
			}
			return !1
		}
		return {
			Field(n) {
				if ((n.name.value === '__schema' || n.name.value === '__type') && t(n))
					return e.reportError(new O('Maximum introspection depth exceeded', { nodes: [n] })), !1
			}
		}
	}
	function Lc(e) {
		let t = Object.create(null),
			n = [],
			r = Object.create(null)
		return {
			OperationDefinition: () => !1,
			FragmentDefinition(s) {
				return i(s), !1
			}
		}
		function i(s) {
			if (t[s.name.value]) return
			let o = s.name.value
			t[o] = !0
			let a = e.getFragmentSpreads(s.selectionSet)
			if (a.length !== 0) {
				r[o] = n.length
				for (let u of a) {
					let l = u.name.value,
						c = r[l]
					if ((n.push(u), c === void 0)) {
						let d = e.getFragment(l)
						d && i(d)
					} else {
						let d = n.slice(c),
							h = d
								.slice(0, -1)
								.map((m) => '"' + m.name.value + '"')
								.join(', ')
						e.reportError(
							new O(
								`Cannot spread fragment "${l}" within itself` + (h !== '' ? ` via ${h}.` : '.'),
								{ nodes: d }
							)
						)
					}
					n.pop()
				}
				r[o] = void 0
			}
		}
	}
	function Cc(e) {
		let t = Object.create(null)
		return {
			OperationDefinition: {
				enter() {
					t = Object.create(null)
				},
				leave(n) {
					let r = e.getRecursiveVariableUsages(n)
					for (let { node: i } of r) {
						let s = i.name.value
						t[s] !== !0 &&
							e.reportError(
								new O(
									n.name
										? `Variable "$${s}" is not defined by operation "${n.name.value}".`
										: `Variable "$${s}" is not defined.`,
									{ nodes: [i, n] }
								)
							)
					}
				}
			},
			VariableDefinition(n) {
				t[n.variable.name.value] = !0
			}
		}
	}
	function Vi(e) {
		let t = [],
			n = []
		return {
			OperationDefinition(r) {
				return t.push(r), !1
			},
			FragmentDefinition(r) {
				return n.push(r), !1
			},
			Document: {
				leave() {
					let r = Object.create(null)
					for (let i of t)
						for (let s of e.getRecursivelyReferencedFragments(i)) r[s.name.value] = !0
					for (let i of n) {
						let s = i.name.value
						r[s] !== !0 && e.reportError(new O(`Fragment "${s}" is never used.`, { nodes: i }))
					}
				}
			}
		}
	}
	function Ic(e) {
		let t = []
		return {
			OperationDefinition: {
				enter() {
					t = []
				},
				leave(n) {
					let r = Object.create(null),
						i = e.getRecursiveVariableUsages(n)
					for (let { node: s } of i) r[s.name.value] = !0
					for (let s of t) {
						let o = s.variable.name.value
						r[o] !== !0 &&
							e.reportError(
								new O(
									n.name
										? `Variable "$${o}" is never used in operation "${n.name.value}".`
										: `Variable "$${o}" is never used.`,
									{ nodes: s }
								)
							)
					}
				}
			},
			VariableDefinition(n) {
				t.push(n)
			}
		}
	}
	function Ya(e) {
		switch (e.kind) {
			case E.OBJECT:
				return { ...e, fields: O7(e.fields) }
			case E.LIST:
				return { ...e, values: e.values.map(Ya) }
			case E.INT:
			case E.FLOAT:
			case E.STRING:
			case E.BOOLEAN:
			case E.NULL:
			case E.ENUM:
			case E.VARIABLE:
				return e
		}
	}
	function O7(e) {
		return e
			.map((t) => ({ ...t, value: Ya(t.value) }))
			.sort((t, n) => Ti(t.name.value, n.name.value))
	}
	function Bh(e) {
		return Array.isArray(e)
			? e.map(([t, n]) => `subfields "${t}" conflict because ` + Bh(n)).join(' and ')
			: e
	}
	function Mc(e) {
		let t = new Oc(),
			n = new Map()
		return {
			SelectionSet(r) {
				let i = M7(e, n, t, e.getParentType(), r)
				for (let [[s, o], a, u] of i) {
					let l = Bh(o)
					e.reportError(
						new O(
							`Fields "${s}" conflict because ${l}. Use different aliases on the fields to fetch both if this was intentional.`,
							{ nodes: a.concat(u) }
						)
					)
				}
			}
		}
	}
	function M7(e, t, n, r, i) {
		let s = [],
			[o, a] = Ka(e, t, r, i)
		if ((B7(e, s, t, n, o), a.length !== 0))
			for (let u = 0; u < a.length; u++) {
				Ja(e, s, t, n, !1, o, a[u])
				for (let l = u + 1; l < a.length; l++) Xa(e, s, t, n, !1, a[u], a[l])
			}
		return s
	}
	function Ja(e, t, n, r, i, s, o) {
		let a = e.getFragment(o)
		if (!a) return
		let [u, l] = kc(e, n, a)
		if (s !== u) {
			Pc(e, t, n, r, i, s, u)
			for (let c of l) r.has(c, o, i) || (r.add(c, o, i), Ja(e, t, n, r, i, s, c))
		}
	}
	function Xa(e, t, n, r, i, s, o) {
		if (s === o || r.has(s, o, i)) return
		r.add(s, o, i)
		let a = e.getFragment(s),
			u = e.getFragment(o)
		if (!a || !u) return
		let [l, c] = kc(e, n, a),
			[d, h] = kc(e, n, u)
		Pc(e, t, n, r, i, l, d)
		for (let m of h) Xa(e, t, n, r, i, s, m)
		for (let m of c) Xa(e, t, n, r, i, m, o)
	}
	function P7(e, t, n, r, i, s, o, a) {
		let u = [],
			[l, c] = Ka(e, t, i, s),
			[d, h] = Ka(e, t, o, a)
		Pc(e, u, t, n, r, l, d)
		for (let m of h) Ja(e, u, t, n, r, l, m)
		for (let m of c) Ja(e, u, t, n, r, d, m)
		for (let m of c) for (let g of h) Xa(e, u, t, n, r, m, g)
		return u
	}
	function B7(e, t, n, r, i) {
		for (let [s, o] of Object.entries(i))
			if (o.length > 1)
				for (let a = 0; a < o.length; a++)
					for (let u = a + 1; u < o.length; u++) {
						let l = Vh(e, n, r, !1, s, o[a], o[u])
						l && t.push(l)
					}
	}
	function Pc(e, t, n, r, i, s, o) {
		for (let [a, u] of Object.entries(s)) {
			let l = o[a]
			if (l)
				for (let c of u)
					for (let d of l) {
						let h = Vh(e, n, r, i, a, c, d)
						h && t.push(h)
					}
		}
	}
	function Vh(e, t, n, r, i, s, o) {
		let [a, u, l] = s,
			[c, d, h] = o,
			m = r || (a !== c && me(a) && me(c))
		if (!m) {
			let w = u.name.value,
				C = d.name.value
			if (w !== C) return [[i, `"${w}" and "${C}" are different fields`], [u], [d]]
			if (!V7(u, d)) return [[i, 'they have differing arguments'], [u], [d]]
		}
		let g = l?.type,
			v = h?.type
		if (g && v && Rc(g, v))
			return [[i, `they return conflicting types "${q(g)}" and "${q(v)}"`], [u], [d]]
		let N = u.selectionSet,
			_ = d.selectionSet
		if (N && _) {
			let w = P7(e, t, n, m, we(g), N, we(v), _)
			return U7(w, i, u, d)
		}
	}
	function V7(e, t) {
		let n = e.arguments,
			r = t.arguments
		if (n === void 0 || n.length === 0) return r === void 0 || r.length === 0
		if (r === void 0 || r.length === 0 || n.length !== r.length) return !1
		let i = new Map(r.map(({ name: s, value: o }) => [s.value, o]))
		return n.every((s) => {
			let o = s.value,
				a = i.get(s.name.value)
			return a === void 0 ? !1 : Ph(o) === Ph(a)
		})
	}
	function Ph(e) {
		return Le(Ya(e))
	}
	function Rc(e, t) {
		return Fe(e)
			? Fe(t)
				? Rc(e.ofType, t.ofType)
				: !0
			: Fe(t)
			? !0
			: ce(e)
			? ce(t)
				? Rc(e.ofType, t.ofType)
				: !0
			: ce(t)
			? !0
			: Wt(e) || Wt(t)
			? e !== t
			: !1
	}
	function Ka(e, t, n, r) {
		let i = t.get(r)
		if (i) return i
		let s = Object.create(null),
			o = Object.create(null)
		Uh(e, n, r, s, o)
		let a = [s, Object.keys(o)]
		return t.set(r, a), a
	}
	function kc(e, t, n) {
		let r = t.get(n.selectionSet)
		if (r) return r
		let i = We(e.getSchema(), n.typeCondition)
		return Ka(e, t, i, n.selectionSet)
	}
	function Uh(e, t, n, r, i) {
		for (let s of n.selections)
			switch (s.kind) {
				case E.FIELD: {
					let o = s.name.value,
						a
					;(me(t) || De(t)) && (a = t.getFields()[o])
					let u = s.alias ? s.alias.value : o
					r[u] || (r[u] = []), r[u].push([t, s, a])
					break
				}
				case E.FRAGMENT_SPREAD:
					i[s.name.value] = !0
					break
				case E.INLINE_FRAGMENT: {
					let o = s.typeCondition,
						a = o ? We(e.getSchema(), o) : t
					Uh(e, a, s.selectionSet, r, i)
					break
				}
			}
	}
	function U7(e, t, n, r) {
		if (e.length > 0)
			return [
				[t, e.map(([i]) => i)],
				[n, ...e.map(([, i]) => i).flat()],
				[r, ...e.map(([, , i]) => i).flat()]
			]
	}
	var Oc = class {
		constructor() {
			this._data = new Map()
		}
		has(t, n, r) {
			var i
			let [s, o] = t < n ? [t, n] : [n, t],
				a = (i = this._data.get(s)) === null || i === void 0 ? void 0 : i.get(o)
			return a === void 0 ? !1 : r ? !0 : r === a
		}
		add(t, n, r) {
			let [i, s] = t < n ? [t, n] : [n, t],
				o = this._data.get(i)
			o === void 0 ? this._data.set(i, new Map([[s, r]])) : o.set(s, r)
		}
	}
	function Bc(e) {
		return {
			InlineFragment(t) {
				let n = e.getType(),
					r = e.getParentType()
				if (at(n) && at(r) && !Cr(e.getSchema(), n, r)) {
					let i = q(r),
						s = q(n)
					e.reportError(
						new O(
							`Fragment cannot be spread here as objects of type "${i}" can never be of type "${s}".`,
							{ nodes: t }
						)
					)
				}
			},
			FragmentSpread(t) {
				let n = t.name.value,
					r = $7(e, n),
					i = e.getParentType()
				if (r && i && !Cr(e.getSchema(), r, i)) {
					let s = q(i),
						o = q(r)
					e.reportError(
						new O(
							`Fragment "${n}" cannot be spread here as objects of type "${s}" can never be of type "${o}".`,
							{ nodes: t }
						)
					)
				}
			}
		}
	}
	function $7(e, t) {
		let n = e.getFragment(t)
		if (n) {
			let r = We(e.getSchema(), n.typeCondition)
			if (at(r)) return r
		}
	}
	function Ui(e) {
		let t = e.getSchema(),
			n = Object.create(null)
		for (let i of e.getDocument().definitions) _n(i) && (n[i.name.value] = i)
		return {
			ScalarTypeExtension: r,
			ObjectTypeExtension: r,
			InterfaceTypeExtension: r,
			UnionTypeExtension: r,
			EnumTypeExtension: r,
			InputObjectTypeExtension: r
		}
		function r(i) {
			let s = i.name.value,
				o = n[s],
				a = t?.getType(s),
				u
			if ((o ? (u = j7[o.kind]) : a && (u = q7(a)), u)) {
				if (u !== i.kind) {
					let l = G7(i.kind)
					e.reportError(new O(`Cannot extend non-${l} type "${s}".`, { nodes: o ? [o, i] : i }))
				}
			} else {
				let l = Object.keys({ ...n, ...t?.getTypeMap() }),
					c = Gt(s, l)
				e.reportError(
					new O(`Cannot extend type "${s}" because it is not defined.` + Mt(c), { nodes: i.name })
				)
			}
		}
	}
	var j7 = {
		[E.SCALAR_TYPE_DEFINITION]: E.SCALAR_TYPE_EXTENSION,
		[E.OBJECT_TYPE_DEFINITION]: E.OBJECT_TYPE_EXTENSION,
		[E.INTERFACE_TYPE_DEFINITION]: E.INTERFACE_TYPE_EXTENSION,
		[E.UNION_TYPE_DEFINITION]: E.UNION_TYPE_EXTENSION,
		[E.ENUM_TYPE_DEFINITION]: E.ENUM_TYPE_EXTENSION,
		[E.INPUT_OBJECT_TYPE_DEFINITION]: E.INPUT_OBJECT_TYPE_EXTENSION
	}
	function q7(e) {
		if (ct(e)) return E.SCALAR_TYPE_EXTENSION
		if (me(e)) return E.OBJECT_TYPE_EXTENSION
		if (De(e)) return E.INTERFACE_TYPE_EXTENSION
		if (Ze(e)) return E.UNION_TYPE_EXTENSION
		if (Be(e)) return E.ENUM_TYPE_EXTENSION
		if (be(e)) return E.INPUT_OBJECT_TYPE_EXTENSION
		Ge(!1, 'Unexpected type: ' + q(e))
	}
	function G7(e) {
		switch (e) {
			case E.SCALAR_TYPE_EXTENSION:
				return 'scalar'
			case E.OBJECT_TYPE_EXTENSION:
				return 'object'
			case E.INTERFACE_TYPE_EXTENSION:
				return 'interface'
			case E.UNION_TYPE_EXTENSION:
				return 'union'
			case E.ENUM_TYPE_EXTENSION:
				return 'enum'
			case E.INPUT_OBJECT_TYPE_EXTENSION:
				return 'input object'
			default:
				Ge(!1, 'Unexpected kind: ' + q(e))
		}
	}
	function $i(e) {
		return {
			...Vc(e),
			Field: {
				leave(t) {
					var n
					let r = e.getFieldDef()
					if (!r) return !1
					let i = new Set(
						(n = t.arguments) === null || n === void 0 ? void 0 : n.map((s) => s.name.value)
					)
					for (let s of r.args)
						if (!i.has(s.name) && Vn(s)) {
							let o = q(s.type)
							e.reportError(
								new O(
									`Field "${r.name}" argument "${s.name}" of type "${o}" is required, but it was not provided.`,
									{ nodes: t }
								)
							)
						}
				}
			}
		}
	}
	function Vc(e) {
		var t
		let n = Object.create(null),
			r = e.getSchema(),
			i = (t = r?.getDirectives()) !== null && t !== void 0 ? t : Qt
		for (let a of i) n[a.name] = qt(a.args.filter(Vn), (u) => u.name)
		let s = e.getDocument().definitions
		for (let a of s)
			if (a.kind === E.DIRECTIVE_DEFINITION) {
				var o
				let u = (o = a.arguments) !== null && o !== void 0 ? o : []
				n[a.name.value] = qt(u.filter(H7), (l) => l.name.value)
			}
		return {
			Directive: {
				leave(a) {
					let u = a.name.value,
						l = n[u]
					if (l) {
						var c
						let d = (c = a.arguments) !== null && c !== void 0 ? c : [],
							h = new Set(d.map((m) => m.name.value))
						for (let [m, g] of Object.entries(l))
							if (!h.has(m)) {
								let v = Ai(g.type) ? q(g.type) : Le(g.type)
								e.reportError(
									new O(
										`Directive "@${u}" argument "${m}" of type "${v}" is required, but it was not provided.`,
										{ nodes: a }
									)
								)
							}
					}
				}
			}
		}
	}
	function H7(e) {
		return e.type.kind === E.NON_NULL_TYPE && e.defaultValue == null
	}
	function Uc(e) {
		return {
			Field(t) {
				let n = e.getType(),
					r = t.selectionSet
				if (n) {
					if (Wt(we(n))) {
						if (r) {
							let i = t.name.value,
								s = q(n)
							e.reportError(
								new O(
									`Field "${i}" must not have a selection since type "${s}" has no subfields.`,
									{ nodes: r }
								)
							)
						}
					} else if (!r) {
						let i = t.name.value,
							s = q(n)
						e.reportError(
							new O(
								`Field "${i}" of type "${s}" must have a selection of subfields. Did you mean "${i} { ... }"?`,
								{ nodes: t }
							)
						)
					}
				}
			}
		}
	}
	function en(e, t, n) {
		if (e) {
			if (e.kind === E.VARIABLE) {
				let r = e.name.value
				if (n == null || n[r] === void 0) return
				let i = n[r]
				return i === null && ce(t) ? void 0 : i
			}
			if (ce(t)) return e.kind === E.NULL ? void 0 : en(e, t.ofType, n)
			if (e.kind === E.NULL) return null
			if (Fe(t)) {
				let r = t.ofType
				if (e.kind === E.LIST) {
					let s = []
					for (let o of e.values)
						if ($h(o, n)) {
							if (ce(r)) return
							s.push(null)
						} else {
							let a = en(o, r, n)
							if (a === void 0) return
							s.push(a)
						}
					return s
				}
				let i = en(e, r, n)
				return i === void 0 ? void 0 : [i]
			}
			if (be(t)) {
				if (e.kind !== E.OBJECT) return
				let r = Object.create(null),
					i = qt(e.fields, (s) => s.name.value)
				for (let s of Object.values(t.getFields())) {
					let o = i[s.name]
					if (!o || $h(o.value, n)) {
						if (s.defaultValue !== void 0) r[s.name] = s.defaultValue
						else if (ce(s.type)) return
						continue
					}
					let a = en(o.value, s.type, n)
					if (a === void 0) return
					r[s.name] = a
				}
				if (t.isOneOf) {
					let s = Object.keys(r)
					if (s.length !== 1 || r[s[0]] === null) return
				}
				return r
			}
			if (Wt(t)) {
				let r
				try {
					r = t.parseLiteral(e, n)
				} catch {
					return
				}
				return r === void 0 ? void 0 : r
			}
			Ge(!1, 'Unexpected input type: ' + q(t))
		}
	}
	function $h(e, t) {
		return e.kind === E.VARIABLE && (t == null || t[e.name.value] === void 0)
	}
	function W7(e, t, n) {
		var r
		let i = {},
			s = (r = t.arguments) !== null && r !== void 0 ? r : [],
			o = qt(s, (a) => a.name.value)
		for (let a of e.args) {
			let u = a.name,
				l = a.type,
				c = o[u]
			if (!c) {
				if (a.defaultValue !== void 0) i[u] = a.defaultValue
				else if (ce(l))
					throw new O(`Argument "${u}" of required type "${q(l)}" was not provided.`, { nodes: t })
				continue
			}
			let d = c.value,
				h = d.kind === E.NULL
			if (d.kind === E.VARIABLE) {
				let g = d.name.value
				if (n == null || !Q7(n, g)) {
					if (a.defaultValue !== void 0) i[u] = a.defaultValue
					else if (ce(l))
						throw new O(
							`Argument "${u}" of required type "${q(
								l
							)}" was provided the variable "$${g}" which was not provided a runtime value.`,
							{ nodes: d }
						)
					continue
				}
				h = n[g] == null
			}
			if (h && ce(l))
				throw new O(`Argument "${u}" of non-null type "${q(l)}" must not be null.`, { nodes: d })
			let m = en(d, l, n)
			if (m === void 0) throw new O(`Argument "${u}" has invalid value ${Le(d)}.`, { nodes: d })
			i[u] = m
		}
		return i
	}
	function Pr(e, t, n) {
		var r
		let i =
			(r = t.directives) === null || r === void 0 ? void 0 : r.find((s) => s.name.value === e.name)
		if (i) return W7(e, i, n)
	}
	function Q7(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}
	function qh(e, t, n, r, i) {
		let s = new Map()
		return jc(e, t, n, r, i, s, new Set()), s
	}
	function jc(e, t, n, r, i, s, o) {
		for (let a of i.selections)
			switch (a.kind) {
				case E.FIELD: {
					if (!$c(n, a)) continue
					let u = z7(a),
						l = s.get(u)
					l !== void 0 ? l.push(a) : s.set(u, [a])
					break
				}
				case E.INLINE_FRAGMENT: {
					if (!$c(n, a) || !jh(e, a, r)) continue
					jc(e, t, n, r, a.selectionSet, s, o)
					break
				}
				case E.FRAGMENT_SPREAD: {
					let u = a.name.value
					if (o.has(u) || !$c(n, a)) continue
					o.add(u)
					let l = t[u]
					if (!l || !jh(e, l, r)) continue
					jc(e, t, n, r, l.selectionSet, s, o)
					break
				}
			}
	}
	function $c(e, t) {
		let n = Pr($a, t, e)
		if (n?.if === !0) return !1
		let r = Pr(Ua, t, e)
		return r?.if !== !1
	}
	function jh(e, t, n) {
		let r = t.typeCondition
		if (!r) return !0
		let i = We(e, r)
		return i === n ? !0 : mt(i) ? e.isSubType(i, n) : !1
	}
	function z7(e) {
		return e.alias ? e.alias.value : e.name.value
	}
	function qc(e) {
		return {
			OperationDefinition(t) {
				if (t.operation === 'subscription') {
					let n = e.getSchema(),
						r = n.getSubscriptionType()
					if (r) {
						let i = t.name ? t.name.value : null,
							s = Object.create(null),
							o = e.getDocument(),
							a = Object.create(null)
						for (let l of o.definitions) l.kind === E.FRAGMENT_DEFINITION && (a[l.name.value] = l)
						let u = qh(n, a, s, r, t.selectionSet)
						if (u.size > 1) {
							let d = [...u.values()].slice(1).flat()
							e.reportError(
								new O(
									i != null
										? `Subscription "${i}" must select only one top level field.`
										: 'Anonymous Subscription must select only one top level field.',
									{ nodes: d }
								)
							)
						}
						for (let l of u.values())
							l[0].name.value.startsWith('__') &&
								e.reportError(
									new O(
										i != null
											? `Subscription "${i}" must not select an introspection top level field.`
											: 'Anonymous Subscription must not select an introspection top level field.',
										{ nodes: l }
									)
								)
					}
				}
			}
		}
	}
	function ji(e, t) {
		let n = new Map()
		for (let r of e) {
			let i = t(r),
				s = n.get(i)
			s === void 0 ? n.set(i, [r]) : s.push(r)
		}
		return n
	}
	function Gc(e) {
		return {
			DirectiveDefinition(r) {
				var i
				let s = (i = r.arguments) !== null && i !== void 0 ? i : []
				return n(`@${r.name.value}`, s)
			},
			InterfaceTypeDefinition: t,
			InterfaceTypeExtension: t,
			ObjectTypeDefinition: t,
			ObjectTypeExtension: t
		}
		function t(r) {
			var i
			let s = r.name.value,
				o = (i = r.fields) !== null && i !== void 0 ? i : []
			for (let u of o) {
				var a
				let l = u.name.value,
					c = (a = u.arguments) !== null && a !== void 0 ? a : []
				n(`${s}.${l}`, c)
			}
			return !1
		}
		function n(r, i) {
			let s = ji(i, (o) => o.name.value)
			for (let [o, a] of s)
				a.length > 1 &&
					e.reportError(
						new O(`Argument "${r}(${o}:)" can only be defined once.`, {
							nodes: a.map((u) => u.name)
						})
					)
			return !1
		}
	}
	function Br(e) {
		return { Field: t, Directive: t }
		function t(n) {
			var r
			let i = (r = n.arguments) !== null && r !== void 0 ? r : [],
				s = ji(i, (o) => o.name.value)
			for (let [o, a] of s)
				a.length > 1 &&
					e.reportError(
						new O(`There can be only one argument named "${o}".`, { nodes: a.map((u) => u.name) })
					)
		}
	}
	function qi(e) {
		let t = Object.create(null),
			n = e.getSchema()
		return {
			DirectiveDefinition(r) {
				let i = r.name.value
				if (n != null && n.getDirective(i)) {
					e.reportError(
						new O(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, {
							nodes: r.name
						})
					)
					return
				}
				return (
					t[i]
						? e.reportError(
								new O(`There can be only one directive named "@${i}".`, { nodes: [t[i], r.name] })
						  )
						: (t[i] = r.name),
					!1
				)
			}
		}
	}
	function Vr(e) {
		let t = Object.create(null),
			n = e.getSchema(),
			r = n ? n.getDirectives() : Qt
		for (let a of r) t[a.name] = !a.isRepeatable
		let i = e.getDocument().definitions
		for (let a of i) a.kind === E.DIRECTIVE_DEFINITION && (t[a.name.value] = !a.repeatable)
		let s = Object.create(null),
			o = Object.create(null)
		return {
			enter(a) {
				if (!('directives' in a) || !a.directives) return
				let u
				if (a.kind === E.SCHEMA_DEFINITION || a.kind === E.SCHEMA_EXTENSION) u = s
				else if (_n(a) || ki(a)) {
					let l = a.name.value
					;(u = o[l]), u === void 0 && (o[l] = u = Object.create(null))
				} else u = Object.create(null)
				for (let l of a.directives) {
					let c = l.name.value
					t[c] &&
						(u[c]
							? e.reportError(
									new O(`The directive "@${c}" can only be used once at this location.`, {
										nodes: [u[c], l]
									})
							  )
							: (u[c] = l))
				}
			}
		}
	}
	function Gi(e) {
		let t = e.getSchema(),
			n = t ? t.getTypeMap() : Object.create(null),
			r = Object.create(null)
		return { EnumTypeDefinition: i, EnumTypeExtension: i }
		function i(s) {
			var o
			let a = s.name.value
			r[a] || (r[a] = Object.create(null))
			let u = (o = s.values) !== null && o !== void 0 ? o : [],
				l = r[a]
			for (let c of u) {
				let d = c.name.value,
					h = n[a]
				Be(h) && h.getValue(d)
					? e.reportError(
							new O(
								`Enum value "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`,
								{ nodes: c.name }
							)
					  )
					: l[d]
					? e.reportError(
							new O(`Enum value "${a}.${d}" can only be defined once.`, { nodes: [l[d], c.name] })
					  )
					: (l[d] = c.name)
			}
			return !1
		}
	}
	function Hi(e) {
		let t = e.getSchema(),
			n = t ? t.getTypeMap() : Object.create(null),
			r = Object.create(null)
		return {
			InputObjectTypeDefinition: i,
			InputObjectTypeExtension: i,
			InterfaceTypeDefinition: i,
			InterfaceTypeExtension: i,
			ObjectTypeDefinition: i,
			ObjectTypeExtension: i
		}
		function i(s) {
			var o
			let a = s.name.value
			r[a] || (r[a] = Object.create(null))
			let u = (o = s.fields) !== null && o !== void 0 ? o : [],
				l = r[a]
			for (let c of u) {
				let d = c.name.value
				Y7(n[a], d)
					? e.reportError(
							new O(
								`Field "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`,
								{ nodes: c.name }
							)
					  )
					: l[d]
					? e.reportError(
							new O(`Field "${a}.${d}" can only be defined once.`, { nodes: [l[d], c.name] })
					  )
					: (l[d] = c.name)
			}
			return !1
		}
	}
	function Y7(e, t) {
		return me(e) || De(e) || be(e) ? e.getFields()[t] != null : !1
	}
	function Hc(e) {
		let t = Object.create(null)
		return {
			OperationDefinition: () => !1,
			FragmentDefinition(n) {
				let r = n.name.value
				return (
					t[r]
						? e.reportError(
								new O(`There can be only one fragment named "${r}".`, { nodes: [t[r], n.name] })
						  )
						: (t[r] = n.name),
					!1
				)
			}
		}
	}
	function Ur(e) {
		let t = [],
			n = Object.create(null)
		return {
			ObjectValue: {
				enter() {
					t.push(n), (n = Object.create(null))
				},
				leave() {
					let r = t.pop()
					r || Ge(!1), (n = r)
				}
			},
			ObjectField(r) {
				let i = r.name.value
				n[i]
					? e.reportError(
							new O(`There can be only one input field named "${i}".`, { nodes: [n[i], r.name] })
					  )
					: (n[i] = r.name)
			}
		}
	}
	function Wc(e) {
		let t = Object.create(null)
		return {
			OperationDefinition(n) {
				let r = n.name
				return (
					r &&
						(t[r.value]
							? e.reportError(
									new O(`There can be only one operation named "${r.value}".`, {
										nodes: [t[r.value], r]
									})
							  )
							: (t[r.value] = r)),
					!1
				)
			},
			FragmentDefinition: () => !1
		}
	}
	function Wi(e) {
		let t = e.getSchema(),
			n = Object.create(null),
			r = t
				? {
						query: t.getQueryType(),
						mutation: t.getMutationType(),
						subscription: t.getSubscriptionType()
				  }
				: {}
		return { SchemaDefinition: i, SchemaExtension: i }
		function i(s) {
			var o
			let a = (o = s.operationTypes) !== null && o !== void 0 ? o : []
			for (let u of a) {
				let l = u.operation,
					c = n[l]
				r[l]
					? e.reportError(
							new O(`Type for ${l} already defined in the schema. It cannot be redefined.`, {
								nodes: u
							})
					  )
					: c
					? e.reportError(new O(`There can be only one ${l} type in schema.`, { nodes: [c, u] }))
					: (n[l] = u)
			}
			return !1
		}
	}
	function Qi(e) {
		let t = Object.create(null),
			n = e.getSchema()
		return {
			ScalarTypeDefinition: r,
			ObjectTypeDefinition: r,
			InterfaceTypeDefinition: r,
			UnionTypeDefinition: r,
			EnumTypeDefinition: r,
			InputObjectTypeDefinition: r
		}
		function r(i) {
			let s = i.name.value
			if (n != null && n.getType(s)) {
				e.reportError(
					new O(
						`Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,
						{ nodes: i.name }
					)
				)
				return
			}
			return (
				t[s]
					? e.reportError(
							new O(`There can be only one type named "${s}".`, { nodes: [t[s], i.name] })
					  )
					: (t[s] = i.name),
				!1
			)
		}
	}
	function zi(e) {
		return {
			OperationDefinition(t) {
				var n
				let r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [],
					i = ji(r, (s) => s.variable.name.value)
				for (let [s, o] of i)
					o.length > 1 &&
						e.reportError(
							new O(`There can be only one variable named "$${s}".`, {
								nodes: o.map((a) => a.variable.name)
							})
						)
			}
		}
	}
	function Qc(e) {
		let t = {}
		return {
			OperationDefinition: {
				enter() {
					t = {}
				}
			},
			VariableDefinition(n) {
				t[n.variable.name.value] = n
			},
			ListValue(n) {
				let r = fr(e.getParentInputType())
				if (!Fe(r)) return $r(e, n), !1
			},
			ObjectValue(n) {
				let r = we(e.getInputType())
				if (!be(r)) return $r(e, n), !1
				let i = qt(n.fields, (s) => s.name.value)
				for (let s of Object.values(r.getFields()))
					if (!i[s.name] && Fi(s)) {
						let a = q(s.type)
						e.reportError(
							new O(`Field "${r.name}.${s.name}" of required type "${a}" was not provided.`, {
								nodes: n
							})
						)
					}
				r.isOneOf && J7(e, n, r, i, t)
			},
			ObjectField(n) {
				let r = we(e.getParentInputType())
				if (!e.getInputType() && be(r)) {
					let s = Gt(n.name.value, Object.keys(r.getFields()))
					e.reportError(
						new O(`Field "${n.name.value}" is not defined by type "${r.name}".` + Mt(s), {
							nodes: n
						})
					)
				}
			},
			NullValue(n) {
				let r = e.getInputType()
				ce(r) &&
					e.reportError(new O(`Expected value of type "${q(r)}", found ${Le(n)}.`, { nodes: n }))
			},
			EnumValue: (n) => $r(e, n),
			IntValue: (n) => $r(e, n),
			FloatValue: (n) => $r(e, n),
			StringValue: (n) => $r(e, n),
			BooleanValue: (n) => $r(e, n)
		}
	}
	function $r(e, t) {
		let n = e.getInputType()
		if (!n) return
		let r = we(n)
		if (!Wt(r)) {
			let i = q(n)
			e.reportError(new O(`Expected value of type "${i}", found ${Le(t)}.`, { nodes: t }))
			return
		}
		try {
			if (r.parseLiteral(t, void 0) === void 0) {
				let s = q(n)
				e.reportError(new O(`Expected value of type "${s}", found ${Le(t)}.`, { nodes: t }))
			}
		} catch (i) {
			let s = q(n)
			i instanceof O
				? e.reportError(i)
				: e.reportError(
						new O(`Expected value of type "${s}", found ${Le(t)}; ` + i.message, {
							nodes: t,
							originalError: i
						})
				  )
		}
	}
	function J7(e, t, n, r, i) {
		var s
		let o = Object.keys(r)
		if (o.length !== 1) {
			e.reportError(
				new O(`OneOf Input Object "${n.name}" must specify exactly one key.`, { nodes: [t] })
			)
			return
		}
		let u = (s = r[o[0]]) === null || s === void 0 ? void 0 : s.value,
			l = !u || u.kind === E.NULL,
			c = u?.kind === E.VARIABLE
		if (l) {
			e.reportError(new O(`Field "${n.name}.${o[0]}" must be non-null.`, { nodes: [t] }))
			return
		}
		if (c) {
			let d = u.name.value
			i[d].type.kind !== E.NON_NULL_TYPE &&
				e.reportError(
					new O(
						`Variable "${d}" must be non-nullable to be used for OneOf Input Object "${n.name}".`,
						{ nodes: [t] }
					)
				)
		}
	}
	function zc(e) {
		return {
			VariableDefinition(t) {
				let n = We(e.getSchema(), t.type)
				if (n !== void 0 && !et(n)) {
					let r = t.variable.name.value,
						i = Le(t.type)
					e.reportError(
						new O(`Variable "$${r}" cannot be non-input type "${i}".`, { nodes: t.type })
					)
				}
			}
		}
	}
	function Yc(e) {
		let t = Object.create(null)
		return {
			OperationDefinition: {
				enter() {
					t = Object.create(null)
				},
				leave(n) {
					let r = e.getRecursiveVariableUsages(n)
					for (let { node: i, type: s, defaultValue: o } of r) {
						let a = i.name.value,
							u = t[a]
						if (u && s) {
							let l = e.getSchema(),
								c = We(l, u.type)
							if (c && !X7(l, c, u.defaultValue, s, o)) {
								let d = q(c),
									h = q(s)
								e.reportError(
									new O(`Variable "$${a}" of type "${d}" used in position expecting type "${h}".`, {
										nodes: [u, i]
									})
								)
							}
						}
					}
				}
			},
			VariableDefinition(n) {
				t[n.variable.name.value] = n
			}
		}
	}
	function X7(e, t, n, r, i) {
		if (ce(r) && !ce(t)) {
			if (!(n != null && n.kind !== E.NULL) && !(i !== void 0)) return !1
			let a = r.ofType
			return bn(e, t, a)
		}
		return bn(e, t, r)
	}
	var Jc = Object.freeze([wc]),
		Yi = Object.freeze([
			Oi,
			Wc,
			Fc,
			qc,
			Mr,
			Mi,
			zc,
			Uc,
			Tc,
			Hc,
			Pi,
			Vi,
			Bc,
			Lc,
			zi,
			Cc,
			Ic,
			Or,
			Vr,
			Sc,
			Br,
			Qc,
			$i,
			Yc,
			Mc,
			Ur,
			...Jc
		]),
		Gh = Object.freeze([Bi, Wi, Qi, Gi, Hi, Gc, qi, Mr, Or, Vr, Ui, Ac, Br, Ur, Vc])
	var Za = class {
			constructor(t, n) {
				;(this._ast = t),
					(this._fragments = void 0),
					(this._fragmentSpreads = new Map()),
					(this._recursivelyReferencedFragments = new Map()),
					(this._onError = n)
			}
			get [Symbol.toStringTag]() {
				return 'ASTValidationContext'
			}
			reportError(t) {
				this._onError(t)
			}
			getDocument() {
				return this._ast
			}
			getFragment(t) {
				let n
				if (this._fragments) n = this._fragments
				else {
					n = Object.create(null)
					for (let r of this.getDocument().definitions)
						r.kind === E.FRAGMENT_DEFINITION && (n[r.name.value] = r)
					this._fragments = n
				}
				return n[t]
			}
			getFragmentSpreads(t) {
				let n = this._fragmentSpreads.get(t)
				if (!n) {
					n = []
					let r = [t],
						i
					for (; (i = r.pop()); )
						for (let s of i.selections)
							s.kind === E.FRAGMENT_SPREAD ? n.push(s) : s.selectionSet && r.push(s.selectionSet)
					this._fragmentSpreads.set(t, n)
				}
				return n
			}
			getRecursivelyReferencedFragments(t) {
				let n = this._recursivelyReferencedFragments.get(t)
				if (!n) {
					n = []
					let r = Object.create(null),
						i = [t.selectionSet],
						s
					for (; (s = i.pop()); )
						for (let o of this.getFragmentSpreads(s)) {
							let a = o.name.value
							if (r[a] !== !0) {
								r[a] = !0
								let u = this.getFragment(a)
								u && (n.push(u), i.push(u.selectionSet))
							}
						}
					this._recursivelyReferencedFragments.set(t, n)
				}
				return n
			}
		},
		eu = class extends Za {
			constructor(t, n, r) {
				super(t, r), (this._schema = n)
			}
			get [Symbol.toStringTag]() {
				return 'SDLValidationContext'
			}
			getSchema() {
				return this._schema
			}
		},
		ro = class extends Za {
			constructor(t, n, r, i) {
				super(n, i),
					(this._schema = t),
					(this._typeInfo = r),
					(this._variableUsages = new Map()),
					(this._recursiveVariableUsages = new Map())
			}
			get [Symbol.toStringTag]() {
				return 'ValidationContext'
			}
			getSchema() {
				return this._schema
			}
			getVariableUsages(t) {
				let n = this._variableUsages.get(t)
				if (!n) {
					let r = [],
						i = new kr(this._schema)
					ht(
						t,
						no(i, {
							VariableDefinition: () => !1,
							Variable(s) {
								r.push({ node: s, type: i.getInputType(), defaultValue: i.getDefaultValue() })
							}
						})
					),
						(n = r),
						this._variableUsages.set(t, n)
				}
				return n
			}
			getRecursiveVariableUsages(t) {
				let n = this._recursiveVariableUsages.get(t)
				if (!n) {
					n = this.getVariableUsages(t)
					for (let r of this.getRecursivelyReferencedFragments(t))
						n = n.concat(this.getVariableUsages(r))
					this._recursiveVariableUsages.set(t, n)
				}
				return n
			}
			getType() {
				return this._typeInfo.getType()
			}
			getParentType() {
				return this._typeInfo.getParentType()
			}
			getInputType() {
				return this._typeInfo.getInputType()
			}
			getParentInputType() {
				return this._typeInfo.getParentInputType()
			}
			getFieldDef() {
				return this._typeInfo.getFieldDef()
			}
			getDirective() {
				return this._typeInfo.getDirective()
			}
			getArgument() {
				return this._typeInfo.getArgument()
			}
			getEnumValue() {
				return this._typeInfo.getEnumValue()
			}
		}
	function Ji(e, t, n = Yi, r, i = new kr(e)) {
		var s
		let o = (s = r?.maxErrors) !== null && s !== void 0 ? s : 100
		t || pe(!1, 'Must provide document.'), Ec(e)
		let a = Object.freeze({}),
			u = [],
			l = new ro(e, t, i, (d) => {
				if (u.length >= o)
					throw (
						(u.push(new O('Too many validation errors, error limit reached. Validation aborted.')),
						a)
					)
				u.push(d)
			}),
			c = Ws(n.map((d) => d(l)))
		try {
			ht(t, no(i, c))
		} catch (d) {
			if (d !== a) throw d
		}
		return u
	}
	function K7(e, t, n = Gh) {
		let r = [],
			i = new eu(e, t, (o) => {
				r.push(o)
			}),
			s = n.map((o) => o(i))
		return ht(e, Ws(s)), r
	}
	function Hh(e) {
		let t = K7(e)
		if (t.length !== 0)
			throw new Error(
				t.map((n) => n.message).join(`

`)
			)
	}
	function tu(e) {
		return {
			Field(t) {
				let n = e.getFieldDef(),
					r = n?.deprecationReason
				if (n && r != null) {
					let i = e.getParentType()
					i != null || Ge(!1),
						e.reportError(new O(`The field ${i.name}.${n.name} is deprecated. ${r}`, { nodes: t }))
				}
			},
			Argument(t) {
				let n = e.getArgument(),
					r = n?.deprecationReason
				if (n && r != null) {
					let i = e.getDirective()
					if (i != null)
						e.reportError(
							new O(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, { nodes: t })
						)
					else {
						let s = e.getParentType(),
							o = e.getFieldDef()
						;(s != null && o != null) || Ge(!1),
							e.reportError(
								new O(`Field "${s.name}.${o.name}" argument "${n.name}" is deprecated. ${r}`, {
									nodes: t
								})
							)
					}
				}
			},
			ObjectField(t) {
				let n = we(e.getParentInputType())
				if (be(n)) {
					let r = n.getFields()[t.name.value],
						i = r?.deprecationReason
					i != null &&
						e.reportError(
							new O(`The input field ${n.name}.${r.name} is deprecated. ${i}`, { nodes: t })
						)
				}
			},
			EnumValue(t) {
				let n = e.getEnumValue(),
					r = n?.deprecationReason
				if (n && r != null) {
					let i = we(e.getInputType())
					i != null || Ge(!1),
						e.reportError(
							new O(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, { nodes: t })
						)
				}
			}
		}
	}
	function io(e, t) {
		;(Nt(e) && Nt(e.__schema)) ||
			pe(
				!1,
				`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${q(
					e
				)}.`
			)
		let n = e.__schema,
			r = Dn(
				n.types,
				(L) => L.name,
				(L) => h(L)
			)
		for (let L of [...Un, ...$n]) r[L.name] && (r[L.name] = L)
		let i = n.queryType ? c(n.queryType) : null,
			s = n.mutationType ? c(n.mutationType) : null,
			o = n.subscriptionType ? c(n.subscriptionType) : null,
			a = n.directives ? n.directives.map(B) : []
		return new dr({
			description: n.description,
			query: i,
			mutation: s,
			subscription: o,
			types: Object.values(r),
			directives: a,
			assumeValid: t?.assumeValid
		})
		function u(L) {
			if (L.kind === Ce.LIST) {
				let A = L.ofType
				if (!A) throw new Error('Decorated type deeper than introspection query.')
				return new Me(u(A))
			}
			if (L.kind === Ce.NON_NULL) {
				let A = L.ofType
				if (!A) throw new Error('Decorated type deeper than introspection query.')
				let X = u(A)
				return new ae(Oa(X))
			}
			return l(L)
		}
		function l(L) {
			let A = L.name
			if (!A) throw new Error(`Unknown type reference: ${q(L)}.`)
			let X = r[A]
			if (!X)
				throw new Error(
					`Invalid or incomplete schema, unknown type: ${A}. Ensure that a full introspection query is used in order to build a client schema.`
				)
			return X
		}
		function c(L) {
			return Ca(l(L))
		}
		function d(L) {
			return Ia(l(L))
		}
		function h(L) {
			if (L != null && L.name != null && L.kind != null)
				switch (L.kind) {
					case Ce.SCALAR:
						return m(L)
					case Ce.OBJECT:
						return v(L)
					case Ce.INTERFACE:
						return N(L)
					case Ce.UNION:
						return _(L)
					case Ce.ENUM:
						return w(L)
					case Ce.INPUT_OBJECT:
						return C(L)
				}
			let A = q(L)
			throw new Error(
				`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${A}.`
			)
		}
		function m(L) {
			return new Tt({ name: L.name, description: L.description, specifiedByURL: L.specifiedByURL })
		}
		function g(L) {
			if (L.interfaces === null && L.kind === Ce.INTERFACE) return []
			if (!L.interfaces) {
				let A = q(L)
				throw new Error(`Introspection result missing interfaces: ${A}.`)
			}
			return L.interfaces.map(d)
		}
		function v(L) {
			return new Ke({
				name: L.name,
				description: L.description,
				interfaces: () => g(L),
				fields: () => S(L)
			})
		}
		function N(L) {
			return new St({
				name: L.name,
				description: L.description,
				interfaces: () => g(L),
				fields: () => S(L)
			})
		}
		function _(L) {
			if (!L.possibleTypes) {
				let A = q(L)
				throw new Error(`Introspection result missing possibleTypes: ${A}.`)
			}
			return new vn({
				name: L.name,
				description: L.description,
				types: () => L.possibleTypes.map(c)
			})
		}
		function w(L) {
			if (!L.enumValues) {
				let A = q(L)
				throw new Error(`Introspection result missing enumValues: ${A}.`)
			}
			return new bt({
				name: L.name,
				description: L.description,
				values: Dn(
					L.enumValues,
					(A) => A.name,
					(A) => ({ description: A.description, deprecationReason: A.deprecationReason })
				)
			})
		}
		function C(L) {
			if (!L.inputFields) {
				let A = q(L)
				throw new Error(`Introspection result missing inputFields: ${A}.`)
			}
			return new Zt({
				name: L.name,
				description: L.description,
				fields: () => M(L.inputFields),
				isOneOf: L.isOneOf
			})
		}
		function S(L) {
			if (!L.fields) throw new Error(`Introspection result missing fields: ${q(L)}.`)
			return Dn(L.fields, (A) => A.name, k)
		}
		function k(L) {
			let A = u(L.type)
			if (!Ht(A)) {
				let X = q(A)
				throw new Error(`Introspection must provide output type for fields, but received: ${X}.`)
			}
			if (!L.args) {
				let X = q(L)
				throw new Error(`Introspection result missing field args: ${X}.`)
			}
			return {
				description: L.description,
				deprecationReason: L.deprecationReason,
				type: A,
				args: M(L.args)
			}
		}
		function M(L) {
			return Dn(L, (A) => A.name, I)
		}
		function I(L) {
			let A = u(L.type)
			if (!et(A)) {
				let z = q(A)
				throw new Error(`Introspection must provide input type for arguments, but received: ${z}.`)
			}
			let X = L.defaultValue != null ? en(Aa(L.defaultValue), A) : void 0
			return {
				description: L.description,
				type: A,
				defaultValue: X,
				deprecationReason: L.deprecationReason
			}
		}
		function B(L) {
			if (!L.args) {
				let A = q(L)
				throw new Error(`Introspection result missing directive args: ${A}.`)
			}
			if (!L.locations) {
				let A = q(L)
				throw new Error(`Introspection result missing directive locations: ${A}.`)
			}
			return new Bt({
				name: L.name,
				description: L.description,
				isRepeatable: L.isRepeatable,
				locations: L.locations.slice(),
				args: M(L.args)
			})
		}
	}
	function zh(e, t, n) {
		var r, i, s, o
		let a = [],
			u = Object.create(null),
			l = [],
			c,
			d = []
		for (let P of t.definitions)
			if (P.kind === E.SCHEMA_DEFINITION) c = P
			else if (P.kind === E.SCHEMA_EXTENSION) d.push(P)
			else if (_n(P)) a.push(P)
			else if (ki(P)) {
				let Z = P.name.value,
					J = u[Z]
				u[Z] = J ? J.concat([P]) : [P]
			} else P.kind === E.DIRECTIVE_DEFINITION && l.push(P)
		if (
			Object.keys(u).length === 0 &&
			a.length === 0 &&
			l.length === 0 &&
			d.length === 0 &&
			c == null
		)
			return e
		let h = Object.create(null)
		for (let P of e.types) h[P.name] = w(P)
		for (let P of a) {
			var m
			let Z = P.name.value
			h[Z] = (m = Wh[Z]) !== null && m !== void 0 ? m : Ie(P)
		}
		let g = {
			query: e.query && N(e.query),
			mutation: e.mutation && N(e.mutation),
			subscription: e.subscription && N(e.subscription),
			...(c && X([c])),
			...X(d)
		}
		return {
			description:
				(r = c) === null || r === void 0 || (i = r.description) === null || i === void 0
					? void 0
					: i.value,
			...g,
			types: Object.values(h),
			directives: [...e.directives.map(_), ...l.map(F)],
			extensions: Object.create(null),
			astNode: (s = c) !== null && s !== void 0 ? s : e.astNode,
			extensionASTNodes: e.extensionASTNodes.concat(d),
			assumeValid: (o = n?.assumeValid) !== null && o !== void 0 ? o : !1
		}
		function v(P) {
			return Fe(P) ? new Me(v(P.ofType)) : ce(P) ? new ae(v(P.ofType)) : N(P)
		}
		function N(P) {
			return h[P.name]
		}
		function _(P) {
			let Z = P.toConfig()
			return new Bt({ ...Z, args: on(Z.args, A) })
		}
		function w(P) {
			if (Ri(P) || Va(P)) return P
			if (ct(P)) return k(P)
			if (me(P)) return M(P)
			if (De(P)) return I(P)
			if (Ze(P)) return B(P)
			if (Be(P)) return S(P)
			if (be(P)) return C(P)
			Ge(!1, 'Unexpected type: ' + q(P))
		}
		function C(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[J.name]) !== null && Z !== void 0 ? Z : []
			return new Zt({
				...J,
				fields: () => ({ ...on(J.fields, (_e) => ({ ..._e, type: v(_e.type) })), ...$(G) }),
				extensionASTNodes: J.extensionASTNodes.concat(G)
			})
		}
		function S(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[P.name]) !== null && Z !== void 0 ? Z : []
			return new bt({
				...J,
				values: { ...J.values, ...ee(G) },
				extensionASTNodes: J.extensionASTNodes.concat(G)
			})
		}
		function k(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[J.name]) !== null && Z !== void 0 ? Z : [],
				_e = J.specifiedByURL
			for (let H of G) {
				var Re
				_e = (Re = Qh(H)) !== null && Re !== void 0 ? Re : _e
			}
			return new Tt({ ...J, specifiedByURL: _e, extensionASTNodes: J.extensionASTNodes.concat(G) })
		}
		function M(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[J.name]) !== null && Z !== void 0 ? Z : []
			return new Ke({
				...J,
				interfaces: () => [...P.getInterfaces().map(N), ...ne(G)],
				fields: () => ({ ...on(J.fields, L), ...T(G) }),
				extensionASTNodes: J.extensionASTNodes.concat(G)
			})
		}
		function I(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[J.name]) !== null && Z !== void 0 ? Z : []
			return new St({
				...J,
				interfaces: () => [...P.getInterfaces().map(N), ...ne(G)],
				fields: () => ({ ...on(J.fields, L), ...T(G) }),
				extensionASTNodes: J.extensionASTNodes.concat(G)
			})
		}
		function B(P) {
			var Z
			let J = P.toConfig(),
				G = (Z = u[J.name]) !== null && Z !== void 0 ? Z : []
			return new vn({
				...J,
				types: () => [...P.getTypes().map(N), ...se(G)],
				extensionASTNodes: J.extensionASTNodes.concat(G)
			})
		}
		function L(P) {
			return { ...P, type: v(P.type), args: P.args && on(P.args, A) }
		}
		function A(P) {
			return { ...P, type: v(P.type) }
		}
		function X(P) {
			let Z = {}
			for (let G of P) {
				var J
				let _e = (J = G.operationTypes) !== null && J !== void 0 ? J : []
				for (let Re of _e) Z[Re.operation] = z(Re.type)
			}
			return Z
		}
		function z(P) {
			var Z
			let J = P.name.value,
				G = (Z = Wh[J]) !== null && Z !== void 0 ? Z : h[J]
			if (G === void 0) throw new Error(`Unknown type: "${J}".`)
			return G
		}
		function fe(P) {
			return P.kind === E.LIST_TYPE
				? new Me(fe(P.type))
				: P.kind === E.NON_NULL_TYPE
				? new ae(fe(P.type))
				: z(P)
		}
		function F(P) {
			var Z
			return new Bt({
				name: P.name.value,
				description: (Z = P.description) === null || Z === void 0 ? void 0 : Z.value,
				locations: P.locations.map(({ value: J }) => J),
				isRepeatable: P.repeatable,
				args: Q(P.arguments),
				astNode: P
			})
		}
		function T(P) {
			let Z = Object.create(null)
			for (let _e of P) {
				var J
				let Re = (J = _e.fields) !== null && J !== void 0 ? J : []
				for (let H of Re) {
					var G
					Z[H.name.value] = {
						type: fe(H.type),
						description: (G = H.description) === null || G === void 0 ? void 0 : G.value,
						args: Q(H.arguments),
						deprecationReason: nu(H),
						astNode: H
					}
				}
			}
			return Z
		}
		function Q(P) {
			let Z = P ?? [],
				J = Object.create(null)
			for (let _e of Z) {
				var G
				let Re = fe(_e.type)
				J[_e.name.value] = {
					type: Re,
					description: (G = _e.description) === null || G === void 0 ? void 0 : G.value,
					defaultValue: en(_e.defaultValue, Re),
					deprecationReason: nu(_e),
					astNode: _e
				}
			}
			return J
		}
		function $(P) {
			let Z = Object.create(null)
			for (let _e of P) {
				var J
				let Re = (J = _e.fields) !== null && J !== void 0 ? J : []
				for (let H of Re) {
					var G
					let Ne = fe(H.type)
					Z[H.name.value] = {
						type: Ne,
						description: (G = H.description) === null || G === void 0 ? void 0 : G.value,
						defaultValue: en(H.defaultValue, Ne),
						deprecationReason: nu(H),
						astNode: H
					}
				}
			}
			return Z
		}
		function ee(P) {
			let Z = Object.create(null)
			for (let _e of P) {
				var J
				let Re = (J = _e.values) !== null && J !== void 0 ? J : []
				for (let H of Re) {
					var G
					Z[H.name.value] = {
						description: (G = H.description) === null || G === void 0 ? void 0 : G.value,
						deprecationReason: nu(H),
						astNode: H
					}
				}
			}
			return Z
		}
		function ne(P) {
			return P.flatMap((Z) => {
				var J, G
				return (J = (G = Z.interfaces) === null || G === void 0 ? void 0 : G.map(z)) !== null &&
					J !== void 0
					? J
					: []
			})
		}
		function se(P) {
			return P.flatMap((Z) => {
				var J, G
				return (J = (G = Z.types) === null || G === void 0 ? void 0 : G.map(z)) !== null &&
					J !== void 0
					? J
					: []
			})
		}
		function Ie(P) {
			var Z
			let J = P.name.value,
				G = (Z = u[J]) !== null && Z !== void 0 ? Z : []
			switch (P.kind) {
				case E.OBJECT_TYPE_DEFINITION: {
					var _e
					let Te = [P, ...G]
					return new Ke({
						name: J,
						description: (_e = P.description) === null || _e === void 0 ? void 0 : _e.value,
						interfaces: () => ne(Te),
						fields: () => T(Te),
						astNode: P,
						extensionASTNodes: G
					})
				}
				case E.INTERFACE_TYPE_DEFINITION: {
					var Re
					let Te = [P, ...G]
					return new St({
						name: J,
						description: (Re = P.description) === null || Re === void 0 ? void 0 : Re.value,
						interfaces: () => ne(Te),
						fields: () => T(Te),
						astNode: P,
						extensionASTNodes: G
					})
				}
				case E.ENUM_TYPE_DEFINITION: {
					var H
					let Te = [P, ...G]
					return new bt({
						name: J,
						description: (H = P.description) === null || H === void 0 ? void 0 : H.value,
						values: ee(Te),
						astNode: P,
						extensionASTNodes: G
					})
				}
				case E.UNION_TYPE_DEFINITION: {
					var Ne
					let Te = [P, ...G]
					return new vn({
						name: J,
						description: (Ne = P.description) === null || Ne === void 0 ? void 0 : Ne.value,
						types: () => se(Te),
						astNode: P,
						extensionASTNodes: G
					})
				}
				case E.SCALAR_TYPE_DEFINITION: {
					var Y
					return new Tt({
						name: J,
						description: (Y = P.description) === null || Y === void 0 ? void 0 : Y.value,
						specifiedByURL: Qh(P),
						astNode: P,
						extensionASTNodes: G
					})
				}
				case E.INPUT_OBJECT_TYPE_DEFINITION: {
					var de
					let Te = [P, ...G]
					return new Zt({
						name: J,
						description: (de = P.description) === null || de === void 0 ? void 0 : de.value,
						fields: () => $(Te),
						astNode: P,
						extensionASTNodes: G,
						isOneOf: D9(P)
					})
				}
			}
		}
	}
	var Wh = qt([...Un, ...$n], (e) => e.name)
	function nu(e) {
		let t = Pr(Li, e)
		return t?.reason
	}
	function Qh(e) {
		let t = Pr(ja, e)
		return t?.url
	}
	function D9(e) {
		return !!Pr(qa, e)
	}
	function so(e, t) {
		;(e != null && e.kind === E.DOCUMENT) || pe(!1, 'Must provide valid Document AST.'),
			t?.assumeValid !== !0 && t?.assumeValidSDL !== !0 && Hh(e)
		let r = zh(
			{
				description: void 0,
				types: [],
				directives: [],
				extensions: Object.create(null),
				extensionASTNodes: [],
				assumeValid: !1
			},
			e,
			t
		)
		if (r.astNode == null)
			for (let s of r.types)
				switch (s.name) {
					case 'Query':
						r.query = s
						break
					case 'Mutation':
						r.mutation = s
						break
					case 'Subscription':
						r.subscription = s
						break
				}
		let i = [...r.directives, ...Qt.filter((s) => r.directives.every((o) => o.name !== s.name))]
		return new dr({ ...r, directives: i })
	}
	function pr(e) {
		let t = Object.keys(e),
			n = t.length,
			r = new Array(n)
		for (let i = 0; i < n; ++i) r[i] = e[t[i]]
		return r
	}
	function Ve(e, t) {
		return b9(t, Yh(e.string))
	}
	function b9(e, t) {
		if (!t || t.trim() === '' || t.trim() === ':' || t.trim() === '{')
			return Xc(e, (r) => !r.isDeprecated)
		let n = e.map((r) => ({ proximity: E9(Yh(r.label), t), entry: r }))
		return Xc(
			Xc(n, (r) => r.proximity <= 2),
			(r) => !r.entry.isDeprecated
		)
			.sort(
				(r, i) =>
					(r.entry.isDeprecated ? 1 : 0) - (i.entry.isDeprecated ? 1 : 0) ||
					r.proximity - i.proximity ||
					r.entry.label.length - i.entry.label.length
			)
			.map((r) => r.entry)
	}
	function Xc(e, t) {
		let n = e.filter(t)
		return n.length === 0 ? e : n
	}
	function Yh(e) {
		return e.toLowerCase().replaceAll(/\W/g, '')
	}
	function E9(e, t) {
		let n = y9(t, e)
		return (
			e.length > t.length && ((n -= e.length - t.length - 1), (n += e.indexOf(t) === 0 ? 0 : 0.5)),
			n
		)
	}
	function y9(e, t) {
		let n,
			r,
			i = [],
			s = e.length,
			o = t.length
		for (n = 0; n <= s; n++) i[n] = [n]
		for (r = 1; r <= o; r++) i[0][r] = r
		for (n = 1; n <= s; n++)
			for (r = 1; r <= o; r++) {
				let a = e[n - 1] === t[r - 1] ? 0 : 1
				;(i[n][r] = Math.min(i[n - 1][r] + 1, i[n][r - 1] + 1, i[n - 1][r - 1] + a)),
					n > 1 &&
						r > 1 &&
						e[n - 1] === t[r - 2] &&
						e[n - 2] === t[r - 1] &&
						(i[n][r] = Math.min(i[n][r], i[n - 2][r - 2] + a))
			}
		return i[s][o]
	}
	var x9 = (e) => ` {
   $${e ?? 1}
}`,
		oo = (e, t, n) => {
			if (!t) return n ?? e
			let r = we(t)
			return me(r) || be(r) || Fe(r) || mt(r) ? e + x9() : n ?? e
		},
		Kc = (e, t, n) => {
			if (Fe(t)) {
				let r = we(t.ofType)
				return e + `[${oo('', r, '$1')}]`
			}
			return oo(e, t, n)
		},
		Jh = (e) => {
			let t = e.args.filter((n) => n.type.toString().endsWith('!'))
			if (t.length)
				return (
					e.name +
					`(${t.map((n, r) => `${n.name}: $${r + 1}`)}) ${oo(
						'',
						e.type,
						`
`
					)}`
				)
		}
	var Xh
	;(function (e) {
		function t(n) {
			return typeof n == 'string'
		}
		e.is = t
	})(Xh || (Xh = {}))
	var Zc
	;(function (e) {
		function t(n) {
			return typeof n == 'string'
		}
		e.is = t
	})(Zc || (Zc = {}))
	var Kh
	;(function (e) {
		;(e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647)
		function t(n) {
			return typeof n == 'number' && e.MIN_VALUE <= n && n <= e.MAX_VALUE
		}
		e.is = t
	})(Kh || (Kh = {}))
	var iu
	;(function (e) {
		;(e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647)
		function t(n) {
			return typeof n == 'number' && e.MIN_VALUE <= n && n <= e.MAX_VALUE
		}
		e.is = t
	})(iu || (iu = {}))
	var ln
	;(function (e) {
		function t(r, i) {
			return (
				r === Number.MAX_VALUE && (r = iu.MAX_VALUE),
				i === Number.MAX_VALUE && (i = iu.MAX_VALUE),
				{ line: r, character: i }
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return R.objectLiteral(i) && R.uinteger(i.line) && R.uinteger(i.character)
		}
		e.is = n
	})(ln || (ln = {}))
	var tt
	;(function (e) {
		function t(r, i, s, o) {
			if (R.uinteger(r) && R.uinteger(i) && R.uinteger(s) && R.uinteger(o))
				return { start: ln.create(r, i), end: ln.create(s, o) }
			if (ln.is(r) && ln.is(i)) return { start: r, end: i }
			throw new Error(
				'Range#create called with invalid arguments['
					.concat(r, ', ')
					.concat(i, ', ')
					.concat(s, ', ')
					.concat(o, ']')
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return R.objectLiteral(i) && ln.is(i.start) && ln.is(i.end)
		}
		e.is = n
	})(tt || (tt = {}))
	var su
	;(function (e) {
		function t(r, i) {
			return { uri: r, range: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.objectLiteral(i) && tt.is(i.range) && (R.string(i.uri) || R.undefined(i.uri))
		}
		e.is = n
	})(su || (su = {}))
	var Zh
	;(function (e) {
		function t(r, i, s, o) {
			return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: o }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				tt.is(i.targetRange) &&
				R.string(i.targetUri) &&
				tt.is(i.targetSelectionRange) &&
				(tt.is(i.originSelectionRange) || R.undefined(i.originSelectionRange))
			)
		}
		e.is = n
	})(Zh || (Zh = {}))
	var e1
	;(function (e) {
		function t(r, i, s, o) {
			return { red: r, green: i, blue: s, alpha: o }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				R.numberRange(i.red, 0, 1) &&
				R.numberRange(i.green, 0, 1) &&
				R.numberRange(i.blue, 0, 1) &&
				R.numberRange(i.alpha, 0, 1)
			)
		}
		e.is = n
	})(e1 || (e1 = {}))
	var e0
	;(function (e) {
		function t(r, i) {
			return { range: r, color: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.objectLiteral(i) && tt.is(i.range) && e1.is(i.color)
		}
		e.is = n
	})(e0 || (e0 = {}))
	var t0
	;(function (e) {
		function t(r, i, s) {
			return { label: r, textEdit: i, additionalTextEdits: s }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				R.string(i.label) &&
				(R.undefined(i.textEdit) || jn.is(i)) &&
				(R.undefined(i.additionalTextEdits) || R.typedArray(i.additionalTextEdits, jn.is))
			)
		}
		e.is = n
	})(t0 || (t0 = {}))
	var n0
	;(function (e) {
		;(e.Comment = 'comment'), (e.Imports = 'imports'), (e.Region = 'region')
	})(n0 || (n0 = {}))
	var r0
	;(function (e) {
		function t(r, i, s, o, a, u) {
			var l = { startLine: r, endLine: i }
			return (
				R.defined(s) && (l.startCharacter = s),
				R.defined(o) && (l.endCharacter = o),
				R.defined(a) && (l.kind = a),
				R.defined(u) && (l.collapsedText = u),
				l
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				R.uinteger(i.startLine) &&
				R.uinteger(i.startLine) &&
				(R.undefined(i.startCharacter) || R.uinteger(i.startCharacter)) &&
				(R.undefined(i.endCharacter) || R.uinteger(i.endCharacter)) &&
				(R.undefined(i.kind) || R.string(i.kind))
			)
		}
		e.is = n
	})(r0 || (r0 = {}))
	var t1
	;(function (e) {
		function t(r, i) {
			return { location: r, message: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && su.is(i.location) && R.string(i.message)
		}
		e.is = n
	})(t1 || (t1 = {}))
	var i0
	;(function (e) {
		;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
	})(i0 || (i0 = {}))
	var s0
	;(function (e) {
		;(e.Unnecessary = 1), (e.Deprecated = 2)
	})(s0 || (s0 = {}))
	var o0
	;(function (e) {
		function t(n) {
			var r = n
			return R.objectLiteral(r) && R.string(r.href)
		}
		e.is = t
	})(o0 || (o0 = {}))
	var ou
	;(function (e) {
		function t(r, i, s, o, a, u) {
			var l = { range: r, message: i }
			return (
				R.defined(s) && (l.severity = s),
				R.defined(o) && (l.code = o),
				R.defined(a) && (l.source = a),
				R.defined(u) && (l.relatedInformation = u),
				l
			)
		}
		e.create = t
		function n(r) {
			var i,
				s = r
			return (
				R.defined(s) &&
				tt.is(s.range) &&
				R.string(s.message) &&
				(R.number(s.severity) || R.undefined(s.severity)) &&
				(R.integer(s.code) || R.string(s.code) || R.undefined(s.code)) &&
				(R.undefined(s.codeDescription) ||
					R.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) &&
				(R.string(s.source) || R.undefined(s.source)) &&
				(R.undefined(s.relatedInformation) || R.typedArray(s.relatedInformation, t1.is))
			)
		}
		e.is = n
	})(ou || (ou = {}))
	var Ki
	;(function (e) {
		function t(r, i) {
			for (var s = [], o = 2; o < arguments.length; o++) s[o - 2] = arguments[o]
			var a = { title: r, command: i }
			return R.defined(s) && s.length > 0 && (a.arguments = s), a
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && R.string(i.title) && R.string(i.command)
		}
		e.is = n
	})(Ki || (Ki = {}))
	var jn
	;(function (e) {
		function t(s, o) {
			return { range: s, newText: o }
		}
		e.replace = t
		function n(s, o) {
			return { range: { start: s, end: s }, newText: o }
		}
		e.insert = n
		function r(s) {
			return { range: s, newText: '' }
		}
		e.del = r
		function i(s) {
			var o = s
			return R.objectLiteral(o) && R.string(o.newText) && tt.is(o.range)
		}
		e.is = i
	})(jn || (jn = {}))
	var Xi
	;(function (e) {
		function t(r, i, s) {
			var o = { label: r }
			return i !== void 0 && (o.needsConfirmation = i), s !== void 0 && (o.description = s), o
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				R.string(i.label) &&
				(R.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) &&
				(R.string(i.description) || i.description === void 0)
			)
		}
		e.is = n
	})(Xi || (Xi = {}))
	var At
	;(function (e) {
		function t(n) {
			var r = n
			return R.string(r)
		}
		e.is = t
	})(At || (At = {}))
	var hr
	;(function (e) {
		function t(s, o, a) {
			return { range: s, newText: o, annotationId: a }
		}
		e.replace = t
		function n(s, o, a) {
			return { range: { start: s, end: s }, newText: o, annotationId: a }
		}
		e.insert = n
		function r(s, o) {
			return { range: s, newText: '', annotationId: o }
		}
		e.del = r
		function i(s) {
			var o = s
			return jn.is(o) && (Xi.is(o.annotationId) || At.is(o.annotationId))
		}
		e.is = i
	})(hr || (hr = {}))
	var au
	;(function (e) {
		function t(r, i) {
			return { textDocument: r, edits: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && uu.is(i.textDocument) && Array.isArray(i.edits)
		}
		e.is = n
	})(au || (au = {}))
	var ao
	;(function (e) {
		function t(r, i, s) {
			var o = { kind: 'create', uri: r }
			return (
				i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i),
				s !== void 0 && (o.annotationId = s),
				o
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i &&
				i.kind === 'create' &&
				R.string(i.uri) &&
				(i.options === void 0 ||
					((i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) &&
						(i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists)))) &&
				(i.annotationId === void 0 || At.is(i.annotationId))
			)
		}
		e.is = n
	})(ao || (ao = {}))
	var uo
	;(function (e) {
		function t(r, i, s, o) {
			var a = { kind: 'rename', oldUri: r, newUri: i }
			return (
				s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (a.options = s),
				o !== void 0 && (a.annotationId = o),
				a
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i &&
				i.kind === 'rename' &&
				R.string(i.oldUri) &&
				R.string(i.newUri) &&
				(i.options === void 0 ||
					((i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) &&
						(i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists)))) &&
				(i.annotationId === void 0 || At.is(i.annotationId))
			)
		}
		e.is = n
	})(uo || (uo = {}))
	var lo
	;(function (e) {
		function t(r, i, s) {
			var o = { kind: 'delete', uri: r }
			return (
				i !== void 0 &&
					(i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) &&
					(o.options = i),
				s !== void 0 && (o.annotationId = s),
				o
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i &&
				i.kind === 'delete' &&
				R.string(i.uri) &&
				(i.options === void 0 ||
					((i.options.recursive === void 0 || R.boolean(i.options.recursive)) &&
						(i.options.ignoreIfNotExists === void 0 || R.boolean(i.options.ignoreIfNotExists)))) &&
				(i.annotationId === void 0 || At.is(i.annotationId))
			)
		}
		e.is = n
	})(lo || (lo = {}))
	var n1
	;(function (e) {
		function t(n) {
			var r = n
			return (
				r &&
				(r.changes !== void 0 || r.documentChanges !== void 0) &&
				(r.documentChanges === void 0 ||
					r.documentChanges.every(function (i) {
						return R.string(i.kind) ? ao.is(i) || uo.is(i) || lo.is(i) : au.is(i)
					}))
			)
		}
		e.is = t
	})(n1 || (n1 = {}))
	var ru = (function () {
			function e(t, n) {
				;(this.edits = t), (this.changeAnnotations = n)
			}
			return (
				(e.prototype.insert = function (t, n, r) {
					var i, s
					if (
						(r === void 0
							? (i = jn.insert(t, n))
							: At.is(r)
							? ((s = r), (i = hr.insert(t, n, r)))
							: (this.assertChangeAnnotations(this.changeAnnotations),
							  (s = this.changeAnnotations.manage(r)),
							  (i = hr.insert(t, n, s))),
						this.edits.push(i),
						s !== void 0)
					)
						return s
				}),
				(e.prototype.replace = function (t, n, r) {
					var i, s
					if (
						(r === void 0
							? (i = jn.replace(t, n))
							: At.is(r)
							? ((s = r), (i = hr.replace(t, n, r)))
							: (this.assertChangeAnnotations(this.changeAnnotations),
							  (s = this.changeAnnotations.manage(r)),
							  (i = hr.replace(t, n, s))),
						this.edits.push(i),
						s !== void 0)
					)
						return s
				}),
				(e.prototype.delete = function (t, n) {
					var r, i
					if (
						(n === void 0
							? (r = jn.del(t))
							: At.is(n)
							? ((i = n), (r = hr.del(t, n)))
							: (this.assertChangeAnnotations(this.changeAnnotations),
							  (i = this.changeAnnotations.manage(n)),
							  (r = hr.del(t, i))),
						this.edits.push(r),
						i !== void 0)
					)
						return i
				}),
				(e.prototype.add = function (t) {
					this.edits.push(t)
				}),
				(e.prototype.all = function () {
					return this.edits
				}),
				(e.prototype.clear = function () {
					this.edits.splice(0, this.edits.length)
				}),
				(e.prototype.assertChangeAnnotations = function (t) {
					if (t === void 0)
						throw new Error('Text edit change is not configured to manage change annotations.')
				}),
				e
			)
		})(),
		a0 = (function () {
			function e(t) {
				;(this._annotations = t === void 0 ? Object.create(null) : t),
					(this._counter = 0),
					(this._size = 0)
			}
			return (
				(e.prototype.all = function () {
					return this._annotations
				}),
				Object.defineProperty(e.prototype, 'size', {
					get: function () {
						return this._size
					},
					enumerable: !1,
					configurable: !0
				}),
				(e.prototype.manage = function (t, n) {
					var r
					if (
						(At.is(t) ? (r = t) : ((r = this.nextId()), (n = t)), this._annotations[r] !== void 0)
					)
						throw new Error('Id '.concat(r, ' is already in use.'))
					if (n === void 0) throw new Error('No annotation provided for id '.concat(r))
					return (this._annotations[r] = n), this._size++, r
				}),
				(e.prototype.nextId = function () {
					return this._counter++, this._counter.toString()
				}),
				e
			)
		})(),
		UC = (function () {
			function e(t) {
				var n = this
				;(this._textEditChanges = Object.create(null)),
					t !== void 0
						? ((this._workspaceEdit = t),
						  t.documentChanges
								? ((this._changeAnnotations = new a0(t.changeAnnotations)),
								  (t.changeAnnotations = this._changeAnnotations.all()),
								  t.documentChanges.forEach(function (r) {
										if (au.is(r)) {
											var i = new ru(r.edits, n._changeAnnotations)
											n._textEditChanges[r.textDocument.uri] = i
										}
								  }))
								: t.changes &&
								  Object.keys(t.changes).forEach(function (r) {
										var i = new ru(t.changes[r])
										n._textEditChanges[r] = i
								  }))
						: (this._workspaceEdit = {})
			}
			return (
				Object.defineProperty(e.prototype, 'edit', {
					get: function () {
						return (
							this.initDocumentChanges(),
							this._changeAnnotations !== void 0 &&
								(this._changeAnnotations.size === 0
									? (this._workspaceEdit.changeAnnotations = void 0)
									: (this._workspaceEdit.changeAnnotations = this._changeAnnotations.all())),
							this._workspaceEdit
						)
					},
					enumerable: !1,
					configurable: !0
				}),
				(e.prototype.getTextEditChange = function (t) {
					if (uu.is(t)) {
						if ((this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0))
							throw new Error('Workspace edit is not configured for document changes.')
						var n = { uri: t.uri, version: t.version },
							r = this._textEditChanges[n.uri]
						if (!r) {
							var i = [],
								s = { textDocument: n, edits: i }
							this._workspaceEdit.documentChanges.push(s),
								(r = new ru(i, this._changeAnnotations)),
								(this._textEditChanges[n.uri] = r)
						}
						return r
					} else {
						if ((this.initChanges(), this._workspaceEdit.changes === void 0))
							throw new Error('Workspace edit is not configured for normal text edit changes.')
						var r = this._textEditChanges[t]
						if (!r) {
							var i = []
							;(this._workspaceEdit.changes[t] = i), (r = new ru(i)), (this._textEditChanges[t] = r)
						}
						return r
					}
				}),
				(e.prototype.initDocumentChanges = function () {
					this._workspaceEdit.documentChanges === void 0 &&
						this._workspaceEdit.changes === void 0 &&
						((this._changeAnnotations = new a0()),
						(this._workspaceEdit.documentChanges = []),
						(this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()))
				}),
				(e.prototype.initChanges = function () {
					this._workspaceEdit.documentChanges === void 0 &&
						this._workspaceEdit.changes === void 0 &&
						(this._workspaceEdit.changes = Object.create(null))
				}),
				(e.prototype.createFile = function (t, n, r) {
					if ((this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0))
						throw new Error('Workspace edit is not configured for document changes.')
					var i
					Xi.is(n) || At.is(n) ? (i = n) : (r = n)
					var s, o
					if (
						(i === void 0
							? (s = ao.create(t, r))
							: ((o = At.is(i) ? i : this._changeAnnotations.manage(i)), (s = ao.create(t, r, o))),
						this._workspaceEdit.documentChanges.push(s),
						o !== void 0)
					)
						return o
				}),
				(e.prototype.renameFile = function (t, n, r, i) {
					if ((this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0))
						throw new Error('Workspace edit is not configured for document changes.')
					var s
					Xi.is(r) || At.is(r) ? (s = r) : (i = r)
					var o, a
					if (
						(s === void 0
							? (o = uo.create(t, n, i))
							: ((a = At.is(s) ? s : this._changeAnnotations.manage(s)),
							  (o = uo.create(t, n, i, a))),
						this._workspaceEdit.documentChanges.push(o),
						a !== void 0)
					)
						return a
				}),
				(e.prototype.deleteFile = function (t, n, r) {
					if ((this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0))
						throw new Error('Workspace edit is not configured for document changes.')
					var i
					Xi.is(n) || At.is(n) ? (i = n) : (r = n)
					var s, o
					if (
						(i === void 0
							? (s = lo.create(t, r))
							: ((o = At.is(i) ? i : this._changeAnnotations.manage(i)), (s = lo.create(t, r, o))),
						this._workspaceEdit.documentChanges.push(s),
						o !== void 0)
					)
						return o
				}),
				e
			)
		})()
	var u0
	;(function (e) {
		function t(r) {
			return { uri: r }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && R.string(i.uri)
		}
		e.is = n
	})(u0 || (u0 = {}))
	var l0
	;(function (e) {
		function t(r, i) {
			return { uri: r, version: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && R.string(i.uri) && R.integer(i.version)
		}
		e.is = n
	})(l0 || (l0 = {}))
	var uu
	;(function (e) {
		function t(r, i) {
			return { uri: r, version: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && R.string(i.uri) && (i.version === null || R.integer(i.version))
		}
		e.is = n
	})(uu || (uu = {}))
	var c0
	;(function (e) {
		function t(r, i, s, o) {
			return { uri: r, languageId: i, version: s, text: o }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.defined(i) &&
				R.string(i.uri) &&
				R.string(i.languageId) &&
				R.integer(i.version) &&
				R.string(i.text)
			)
		}
		e.is = n
	})(c0 || (c0 = {}))
	var r1
	;(function (e) {
		;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
		function t(n) {
			var r = n
			return r === e.PlainText || r === e.Markdown
		}
		e.is = t
	})(r1 || (r1 = {}))
	var co
	;(function (e) {
		function t(n) {
			var r = n
			return R.objectLiteral(n) && r1.is(r.kind) && R.string(r.value)
		}
		e.is = t
	})(co || (co = {}))
	var f0
	;(function (e) {
		;(e.Text = 1),
			(e.Method = 2),
			(e.Function = 3),
			(e.Constructor = 4),
			(e.Field = 5),
			(e.Variable = 6),
			(e.Class = 7),
			(e.Interface = 8),
			(e.Module = 9),
			(e.Property = 10),
			(e.Unit = 11),
			(e.Value = 12),
			(e.Enum = 13),
			(e.Keyword = 14),
			(e.Snippet = 15),
			(e.Color = 16),
			(e.File = 17),
			(e.Reference = 18),
			(e.Folder = 19),
			(e.EnumMember = 20),
			(e.Constant = 21),
			(e.Struct = 22),
			(e.Event = 23),
			(e.Operator = 24),
			(e.TypeParameter = 25)
	})(f0 || (f0 = {}))
	var mr
	;(function (e) {
		;(e.PlainText = 1), (e.Snippet = 2)
	})(mr || (mr = {}))
	var d0
	;(function (e) {
		e.Deprecated = 1
	})(d0 || (d0 = {}))
	var p0
	;(function (e) {
		function t(r, i, s) {
			return { newText: r, insert: i, replace: s }
		}
		e.create = t
		function n(r) {
			var i = r
			return i && R.string(i.newText) && tt.is(i.insert) && tt.is(i.replace)
		}
		e.is = n
	})(p0 || (p0 = {}))
	var gr
	;(function (e) {
		;(e.asIs = 1), (e.adjustIndentation = 2)
	})(gr || (gr = {}))
	var h0
	;(function (e) {
		function t(n) {
			var r = n
			return (
				r &&
				(R.string(r.detail) || r.detail === void 0) &&
				(R.string(r.description) || r.description === void 0)
			)
		}
		e.is = t
	})(h0 || (h0 = {}))
	var m0
	;(function (e) {
		function t(n) {
			return { label: n }
		}
		e.create = t
	})(m0 || (m0 = {}))
	var g0
	;(function (e) {
		function t(n, r) {
			return { items: n || [], isIncomplete: !!r }
		}
		e.create = t
	})(g0 || (g0 = {}))
	var lu
	;(function (e) {
		function t(r) {
			return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
		}
		e.fromPlainText = t
		function n(r) {
			var i = r
			return R.string(i) || (R.objectLiteral(i) && R.string(i.language) && R.string(i.value))
		}
		e.is = n
	})(lu || (lu = {}))
	var D0
	;(function (e) {
		function t(n) {
			var r = n
			return (
				!!r &&
				R.objectLiteral(r) &&
				(co.is(r.contents) || lu.is(r.contents) || R.typedArray(r.contents, lu.is)) &&
				(n.range === void 0 || tt.is(n.range))
			)
		}
		e.is = t
	})(D0 || (D0 = {}))
	var v0
	;(function (e) {
		function t(n, r) {
			return r ? { label: n, documentation: r } : { label: n }
		}
		e.create = t
	})(v0 || (v0 = {}))
	var b0
	;(function (e) {
		function t(n, r) {
			for (var i = [], s = 2; s < arguments.length; s++) i[s - 2] = arguments[s]
			var o = { label: n }
			return (
				R.defined(r) && (o.documentation = r),
				R.defined(i) ? (o.parameters = i) : (o.parameters = []),
				o
			)
		}
		e.create = t
	})(b0 || (b0 = {}))
	var E0
	;(function (e) {
		;(e.Text = 1), (e.Read = 2), (e.Write = 3)
	})(E0 || (E0 = {}))
	var y0
	;(function (e) {
		function t(n, r) {
			var i = { range: n }
			return R.number(r) && (i.kind = r), i
		}
		e.create = t
	})(y0 || (y0 = {}))
	var x0
	;(function (e) {
		;(e.File = 1),
			(e.Module = 2),
			(e.Namespace = 3),
			(e.Package = 4),
			(e.Class = 5),
			(e.Method = 6),
			(e.Property = 7),
			(e.Field = 8),
			(e.Constructor = 9),
			(e.Enum = 10),
			(e.Interface = 11),
			(e.Function = 12),
			(e.Variable = 13),
			(e.Constant = 14),
			(e.String = 15),
			(e.Number = 16),
			(e.Boolean = 17),
			(e.Array = 18),
			(e.Object = 19),
			(e.Key = 20),
			(e.Null = 21),
			(e.EnumMember = 22),
			(e.Struct = 23),
			(e.Event = 24),
			(e.Operator = 25),
			(e.TypeParameter = 26)
	})(x0 || (x0 = {}))
	var _0
	;(function (e) {
		e.Deprecated = 1
	})(_0 || (_0 = {}))
	var N0
	;(function (e) {
		function t(n, r, i, s, o) {
			var a = { name: n, kind: r, location: { uri: s, range: i } }
			return o && (a.containerName = o), a
		}
		e.create = t
	})(N0 || (N0 = {}))
	var T0
	;(function (e) {
		function t(n, r, i, s) {
			return s !== void 0
				? { name: n, kind: r, location: { uri: i, range: s } }
				: { name: n, kind: r, location: { uri: i } }
		}
		e.create = t
	})(T0 || (T0 = {}))
	var S0
	;(function (e) {
		function t(r, i, s, o, a, u) {
			var l = { name: r, detail: i, kind: s, range: o, selectionRange: a }
			return u !== void 0 && (l.children = u), l
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i &&
				R.string(i.name) &&
				R.number(i.kind) &&
				tt.is(i.range) &&
				tt.is(i.selectionRange) &&
				(i.detail === void 0 || R.string(i.detail)) &&
				(i.deprecated === void 0 || R.boolean(i.deprecated)) &&
				(i.children === void 0 || Array.isArray(i.children)) &&
				(i.tags === void 0 || Array.isArray(i.tags))
			)
		}
		e.is = n
	})(S0 || (S0 = {}))
	var A0
	;(function (e) {
		;(e.Empty = ''),
			(e.QuickFix = 'quickfix'),
			(e.Refactor = 'refactor'),
			(e.RefactorExtract = 'refactor.extract'),
			(e.RefactorInline = 'refactor.inline'),
			(e.RefactorRewrite = 'refactor.rewrite'),
			(e.Source = 'source'),
			(e.SourceOrganizeImports = 'source.organizeImports'),
			(e.SourceFixAll = 'source.fixAll')
	})(A0 || (A0 = {}))
	var cu
	;(function (e) {
		;(e.Invoked = 1), (e.Automatic = 2)
	})(cu || (cu = {}))
	var F0
	;(function (e) {
		function t(r, i, s) {
			var o = { diagnostics: r }
			return i != null && (o.only = i), s != null && (o.triggerKind = s), o
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.defined(i) &&
				R.typedArray(i.diagnostics, ou.is) &&
				(i.only === void 0 || R.typedArray(i.only, R.string)) &&
				(i.triggerKind === void 0 || i.triggerKind === cu.Invoked || i.triggerKind === cu.Automatic)
			)
		}
		e.is = n
	})(F0 || (F0 = {}))
	var w0
	;(function (e) {
		function t(r, i, s) {
			var o = { title: r },
				a = !0
			return (
				typeof i == 'string' ? ((a = !1), (o.kind = i)) : Ki.is(i) ? (o.command = i) : (o.edit = i),
				a && s !== void 0 && (o.kind = s),
				o
			)
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i &&
				R.string(i.title) &&
				(i.diagnostics === void 0 || R.typedArray(i.diagnostics, ou.is)) &&
				(i.kind === void 0 || R.string(i.kind)) &&
				(i.edit !== void 0 || i.command !== void 0) &&
				(i.command === void 0 || Ki.is(i.command)) &&
				(i.isPreferred === void 0 || R.boolean(i.isPreferred)) &&
				(i.edit === void 0 || n1.is(i.edit))
			)
		}
		e.is = n
	})(w0 || (w0 = {}))
	var L0
	;(function (e) {
		function t(r, i) {
			var s = { range: r }
			return R.defined(i) && (s.data = i), s
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && tt.is(i.range) && (R.undefined(i.command) || Ki.is(i.command))
		}
		e.is = n
	})(L0 || (L0 = {}))
	var C0
	;(function (e) {
		function t(r, i) {
			return { tabSize: r, insertSpaces: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && R.uinteger(i.tabSize) && R.boolean(i.insertSpaces)
		}
		e.is = n
	})(C0 || (C0 = {}))
	var I0
	;(function (e) {
		function t(r, i, s) {
			return { range: r, target: i, data: s }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && tt.is(i.range) && (R.undefined(i.target) || R.string(i.target))
		}
		e.is = n
	})(I0 || (I0 = {}))
	var R0
	;(function (e) {
		function t(r, i) {
			return { range: r, parent: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.objectLiteral(i) && tt.is(i.range) && (i.parent === void 0 || e.is(i.parent))
		}
		e.is = n
	})(R0 || (R0 = {}))
	var k0
	;(function (e) {
		;(e.namespace = 'namespace'),
			(e.type = 'type'),
			(e.class = 'class'),
			(e.enum = 'enum'),
			(e.interface = 'interface'),
			(e.struct = 'struct'),
			(e.typeParameter = 'typeParameter'),
			(e.parameter = 'parameter'),
			(e.variable = 'variable'),
			(e.property = 'property'),
			(e.enumMember = 'enumMember'),
			(e.event = 'event'),
			(e.function = 'function'),
			(e.method = 'method'),
			(e.macro = 'macro'),
			(e.keyword = 'keyword'),
			(e.modifier = 'modifier'),
			(e.comment = 'comment'),
			(e.string = 'string'),
			(e.number = 'number'),
			(e.regexp = 'regexp'),
			(e.operator = 'operator'),
			(e.decorator = 'decorator')
	})(k0 || (k0 = {}))
	var O0
	;(function (e) {
		;(e.declaration = 'declaration'),
			(e.definition = 'definition'),
			(e.readonly = 'readonly'),
			(e.static = 'static'),
			(e.deprecated = 'deprecated'),
			(e.abstract = 'abstract'),
			(e.async = 'async'),
			(e.modification = 'modification'),
			(e.documentation = 'documentation'),
			(e.defaultLibrary = 'defaultLibrary')
	})(O0 || (O0 = {}))
	var M0
	;(function (e) {
		function t(n) {
			var r = n
			return (
				R.objectLiteral(r) &&
				(r.resultId === void 0 || typeof r.resultId == 'string') &&
				Array.isArray(r.data) &&
				(r.data.length === 0 || typeof r.data[0] == 'number')
			)
		}
		e.is = t
	})(M0 || (M0 = {}))
	var P0
	;(function (e) {
		function t(r, i) {
			return { range: r, text: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return i != null && tt.is(i.range) && R.string(i.text)
		}
		e.is = n
	})(P0 || (P0 = {}))
	var B0
	;(function (e) {
		function t(r, i, s) {
			return { range: r, variableName: i, caseSensitiveLookup: s }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				i != null &&
				tt.is(i.range) &&
				R.boolean(i.caseSensitiveLookup) &&
				(R.string(i.variableName) || i.variableName === void 0)
			)
		}
		e.is = n
	})(B0 || (B0 = {}))
	var V0
	;(function (e) {
		function t(r, i) {
			return { range: r, expression: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return i != null && tt.is(i.range) && (R.string(i.expression) || i.expression === void 0)
		}
		e.is = n
	})(V0 || (V0 = {}))
	var U0
	;(function (e) {
		function t(r, i) {
			return { frameId: r, stoppedLocation: i }
		}
		e.create = t
		function n(r) {
			var i = r
			return R.defined(i) && tt.is(r.stoppedLocation)
		}
		e.is = n
	})(U0 || (U0 = {}))
	var i1
	;(function (e) {
		;(e.Type = 1), (e.Parameter = 2)
		function t(n) {
			return n === 1 || n === 2
		}
		e.is = t
	})(i1 || (i1 = {}))
	var s1
	;(function (e) {
		function t(r) {
			return { value: r }
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				R.objectLiteral(i) &&
				(i.tooltip === void 0 || R.string(i.tooltip) || co.is(i.tooltip)) &&
				(i.location === void 0 || su.is(i.location)) &&
				(i.command === void 0 || Ki.is(i.command))
			)
		}
		e.is = n
	})(s1 || (s1 = {}))
	var $0
	;(function (e) {
		function t(r, i, s) {
			var o = { position: r, label: i }
			return s !== void 0 && (o.kind = s), o
		}
		e.create = t
		function n(r) {
			var i = r
			return (
				(R.objectLiteral(i) &&
					ln.is(i.position) &&
					(R.string(i.label) || R.typedArray(i.label, s1.is)) &&
					(i.kind === void 0 || i1.is(i.kind)) &&
					i.textEdits === void 0) ||
				(R.typedArray(i.textEdits, jn.is) &&
					(i.tooltip === void 0 || R.string(i.tooltip) || co.is(i.tooltip)) &&
					(i.paddingLeft === void 0 || R.boolean(i.paddingLeft)) &&
					(i.paddingRight === void 0 || R.boolean(i.paddingRight)))
			)
		}
		e.is = n
	})($0 || ($0 = {}))
	var j0
	;(function (e) {
		function t(n) {
			var r = n
			return R.objectLiteral(r) && Zc.is(r.uri) && R.string(r.name)
		}
		e.is = t
	})(j0 || (j0 = {}))
	var q0
	;(function (e) {
		function t(s, o, a, u) {
			return new _9(s, o, a, u)
		}
		e.create = t
		function n(s) {
			var o = s
			return !!(
				R.defined(o) &&
				R.string(o.uri) &&
				(R.undefined(o.languageId) || R.string(o.languageId)) &&
				R.uinteger(o.lineCount) &&
				R.func(o.getText) &&
				R.func(o.positionAt) &&
				R.func(o.offsetAt)
			)
		}
		e.is = n
		function r(s, o) {
			for (
				var a = s.getText(),
					u = i(o, function (g, v) {
						var N = g.range.start.line - v.range.start.line
						return N === 0 ? g.range.start.character - v.range.start.character : N
					}),
					l = a.length,
					c = u.length - 1;
				c >= 0;
				c--
			) {
				var d = u[c],
					h = s.offsetAt(d.range.start),
					m = s.offsetAt(d.range.end)
				if (m <= l) a = a.substring(0, h) + d.newText + a.substring(m, a.length)
				else throw new Error('Overlapping edit')
				l = h
			}
			return a
		}
		e.applyEdits = r
		function i(s, o) {
			if (s.length <= 1) return s
			var a = (s.length / 2) | 0,
				u = s.slice(0, a),
				l = s.slice(a)
			i(u, o), i(l, o)
			for (var c = 0, d = 0, h = 0; c < u.length && d < l.length; ) {
				var m = o(u[c], l[d])
				m <= 0 ? (s[h++] = u[c++]) : (s[h++] = l[d++])
			}
			for (; c < u.length; ) s[h++] = u[c++]
			for (; d < l.length; ) s[h++] = l[d++]
			return s
		}
	})(q0 || (q0 = {}))
	var _9 = (function () {
			function e(t, n, r, i) {
				;(this._uri = t),
					(this._languageId = n),
					(this._version = r),
					(this._content = i),
					(this._lineOffsets = void 0)
			}
			return (
				Object.defineProperty(e.prototype, 'uri', {
					get: function () {
						return this._uri
					},
					enumerable: !1,
					configurable: !0
				}),
				Object.defineProperty(e.prototype, 'languageId', {
					get: function () {
						return this._languageId
					},
					enumerable: !1,
					configurable: !0
				}),
				Object.defineProperty(e.prototype, 'version', {
					get: function () {
						return this._version
					},
					enumerable: !1,
					configurable: !0
				}),
				(e.prototype.getText = function (t) {
					if (t) {
						var n = this.offsetAt(t.start),
							r = this.offsetAt(t.end)
						return this._content.substring(n, r)
					}
					return this._content
				}),
				(e.prototype.update = function (t, n) {
					;(this._content = t.text), (this._version = n), (this._lineOffsets = void 0)
				}),
				(e.prototype.getLineOffsets = function () {
					if (this._lineOffsets === void 0) {
						for (var t = [], n = this._content, r = !0, i = 0; i < n.length; i++) {
							r && (t.push(i), (r = !1))
							var s = n.charAt(i)
							;(r =
								s === '\r' ||
								s ===
									`
`),
								s === '\r' &&
									i + 1 < n.length &&
									n.charAt(i + 1) ===
										`
` &&
									i++
						}
						r && n.length > 0 && t.push(n.length), (this._lineOffsets = t)
					}
					return this._lineOffsets
				}),
				(e.prototype.positionAt = function (t) {
					t = Math.max(Math.min(t, this._content.length), 0)
					var n = this.getLineOffsets(),
						r = 0,
						i = n.length
					if (i === 0) return ln.create(0, t)
					for (; r < i; ) {
						var s = Math.floor((r + i) / 2)
						n[s] > t ? (i = s) : (r = s + 1)
					}
					var o = r - 1
					return ln.create(o, t - n[o])
				}),
				(e.prototype.offsetAt = function (t) {
					var n = this.getLineOffsets()
					if (t.line >= n.length) return this._content.length
					if (t.line < 0) return 0
					var r = n[t.line],
						i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length
					return Math.max(Math.min(r + t.character, i), r)
				}),
				Object.defineProperty(e.prototype, 'lineCount', {
					get: function () {
						return this.getLineOffsets().length
					},
					enumerable: !1,
					configurable: !0
				}),
				e
			)
		})(),
		R
	;(function (e) {
		var t = Object.prototype.toString
		function n(m) {
			return typeof m < 'u'
		}
		e.defined = n
		function r(m) {
			return typeof m > 'u'
		}
		e.undefined = r
		function i(m) {
			return m === !0 || m === !1
		}
		e.boolean = i
		function s(m) {
			return t.call(m) === '[object String]'
		}
		e.string = s
		function o(m) {
			return t.call(m) === '[object Number]'
		}
		e.number = o
		function a(m, g, v) {
			return t.call(m) === '[object Number]' && g <= m && m <= v
		}
		e.numberRange = a
		function u(m) {
			return t.call(m) === '[object Number]' && -2147483648 <= m && m <= 2147483647
		}
		e.integer = u
		function l(m) {
			return t.call(m) === '[object Number]' && 0 <= m && m <= 2147483647
		}
		e.uinteger = l
		function c(m) {
			return t.call(m) === '[object Function]'
		}
		e.func = c
		function d(m) {
			return m !== null && typeof m == 'object'
		}
		e.objectLiteral = d
		function h(m, g) {
			return Array.isArray(m) && m.every(g)
		}
		e.typedArray = h
	})(R || (R = {}))
	var Nn = class {
		constructor(t) {
			;(this._start = 0),
				(this._pos = 0),
				(this.getStartOfToken = () => this._start),
				(this.getCurrentPosition = () => this._pos),
				(this.eol = () => this._sourceText.length === this._pos),
				(this.sol = () => this._pos === 0),
				(this.peek = () => this._sourceText.charAt(this._pos) || null),
				(this.next = () => {
					let n = this._sourceText.charAt(this._pos)
					return this._pos++, n
				}),
				(this.eat = (n) => {
					if (this._testNextCharacter(n))
						return (this._start = this._pos), this._pos++, this._sourceText.charAt(this._pos - 1)
				}),
				(this.eatWhile = (n) => {
					let r = this._testNextCharacter(n),
						i = !1
					for (r && ((i = r), (this._start = this._pos)); r; )
						this._pos++, (r = this._testNextCharacter(n)), (i = !0)
					return i
				}),
				(this.eatSpace = () => this.eatWhile(/[\s\u00a0]/)),
				(this.skipToEnd = () => {
					this._pos = this._sourceText.length
				}),
				(this.skipTo = (n) => {
					this._pos = n
				}),
				(this.match = (n, r = !0, i = !1) => {
					let s = null,
						o = null
					return (
						typeof n == 'string'
							? ((o = new RegExp(n, i ? 'i' : 'g').test(
									this._sourceText.slice(this._pos, this._pos + n.length)
							  )),
							  (s = n))
							: n instanceof RegExp &&
							  ((o = this._sourceText.slice(this._pos).match(n)), (s = o?.[0])),
						o != null &&
						(typeof n == 'string' ||
							(o instanceof Array && this._sourceText.startsWith(o[0], this._pos)))
							? (r && ((this._start = this._pos), s && s.length && (this._pos += s.length)), o)
							: !1
					)
				}),
				(this.backUp = (n) => {
					this._pos -= n
				}),
				(this.column = () => this._pos),
				(this.indentation = () => {
					let n = this._sourceText.match(/\s*/),
						r = 0
					if (n && n.length !== 0) {
						let i = n[0],
							s = 0
						for (; i.length > s; ) i.charCodeAt(s) === 9 ? (r += 2) : r++, s++
					}
					return r
				}),
				(this.current = () => this._sourceText.slice(this._start, this._pos)),
				(this._sourceText = t)
		}
		_testNextCharacter(t) {
			let n = this._sourceText.charAt(this._pos),
				r = !1
			return typeof t == 'string' ? (r = n === t) : (r = t instanceof RegExp ? t.test(n) : t(n)), r
		}
	}
	function qe(e) {
		return { ofRule: e }
	}
	function xe(e, t) {
		return { ofRule: e, isList: !0, separator: t }
	}
	function o1(e, t) {
		let n = e.match
		return (
			(e.match = (r) => {
				let i = !1
				return n && (i = n(r)), i && t.every((s) => s.match && !s.match(r))
			}),
			e
		)
	}
	function Zi(e, t) {
		return { style: t, match: (n) => n.kind === e }
	}
	function le(e, t) {
		return { style: t || 'punctuation', match: (n) => n.kind === 'Punctuation' && n.value === e }
	}
	var fu = (e) =>
			e === ' ' ||
			e === '	' ||
			e === ',' ||
			e ===
				`
` ||
			e === '\r' ||
			e === '\uFEFF' ||
			e === '\xA0',
		du = {
			Name: /^[_A-Za-z][_0-9A-Za-z]*/,
			Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|&|@|\[|]|\{|\||\})/,
			Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
			String:
				/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,
			Comment: /^#.*/
		},
		pu = {
			Document: [xe('Definition')],
			Definition(e) {
				switch (e.value) {
					case '{':
						return 'ShortQuery'
					case 'query':
						return 'Query'
					case 'mutation':
						return 'Mutation'
					case 'subscription':
						return 'Subscription'
					case 'fragment':
						return E.FRAGMENT_DEFINITION
					case 'schema':
						return 'SchemaDef'
					case 'scalar':
						return 'ScalarDef'
					case 'type':
						return 'ObjectTypeDef'
					case 'interface':
						return 'InterfaceDef'
					case 'union':
						return 'UnionDef'
					case 'enum':
						return 'EnumDef'
					case 'input':
						return 'InputDef'
					case 'extend':
						return 'ExtendDef'
					case 'directive':
						return 'DirectiveDef'
				}
			},
			ShortQuery: ['SelectionSet'],
			Query: [
				Et('query'),
				qe(Ue('def')),
				qe('VariableDefinitions'),
				xe('Directive'),
				'SelectionSet'
			],
			Mutation: [
				Et('mutation'),
				qe(Ue('def')),
				qe('VariableDefinitions'),
				xe('Directive'),
				'SelectionSet'
			],
			Subscription: [
				Et('subscription'),
				qe(Ue('def')),
				qe('VariableDefinitions'),
				xe('Directive'),
				'SelectionSet'
			],
			VariableDefinitions: [le('('), xe('VariableDefinition'), le(')')],
			VariableDefinition: ['Variable', le(':'), 'Type', qe('DefaultValue')],
			Variable: [le('$', 'variable'), Ue('variable')],
			DefaultValue: [le('='), 'Value'],
			SelectionSet: [le('{'), xe('Selection'), le('}')],
			Selection(e, t) {
				return e.value === '...'
					? t.match(/[\s\u00a0,]*(on\b|@|{)/, !1)
						? 'InlineFragment'
						: 'FragmentSpread'
					: t.match(/[\s\u00a0,]*:/, !1)
					? 'AliasedField'
					: 'Field'
			},
			AliasedField: [
				Ue('property'),
				le(':'),
				Ue('qualifier'),
				qe('Arguments'),
				xe('Directive'),
				qe('SelectionSet')
			],
			Field: [Ue('property'), qe('Arguments'), xe('Directive'), qe('SelectionSet')],
			Arguments: [le('('), xe('Argument'), le(')')],
			Argument: [Ue('attribute'), le(':'), 'Value'],
			FragmentSpread: [le('...'), Ue('def'), xe('Directive')],
			InlineFragment: [le('...'), qe('TypeCondition'), xe('Directive'), 'SelectionSet'],
			FragmentDefinition: [
				Et('fragment'),
				qe(o1(Ue('def'), [Et('on')])),
				'TypeCondition',
				xe('Directive'),
				'SelectionSet'
			],
			TypeCondition: [Et('on'), 'NamedType'],
			Value(e) {
				switch (e.kind) {
					case 'Number':
						return 'NumberValue'
					case 'String':
						return 'StringValue'
					case 'Punctuation':
						switch (e.value) {
							case '[':
								return 'ListValue'
							case '{':
								return 'ObjectValue'
							case '$':
								return 'Variable'
							case '&':
								return 'NamedType'
						}
						return null
					case 'Name':
						switch (e.value) {
							case 'true':
							case 'false':
								return 'BooleanValue'
						}
						return e.value === 'null' ? 'NullValue' : 'EnumValue'
				}
			},
			NumberValue: [Zi('Number', 'number')],
			StringValue: [
				{
					style: 'string',
					match: (e) => e.kind === 'String',
					update(e, t) {
						t.value.startsWith('"""') && (e.inBlockstring = !t.value.slice(3).endsWith('"""'))
					}
				}
			],
			BooleanValue: [Zi('Name', 'builtin')],
			NullValue: [Zi('Name', 'keyword')],
			EnumValue: [Ue('string-2')],
			ListValue: [le('['), xe('Value'), le(']')],
			ObjectValue: [le('{'), xe('ObjectField'), le('}')],
			ObjectField: [Ue('attribute'), le(':'), 'Value'],
			Type(e) {
				return e.value === '[' ? 'ListType' : 'NonNullType'
			},
			ListType: [le('['), 'Type', le(']'), qe(le('!'))],
			NonNullType: ['NamedType', qe(le('!'))],
			NamedType: [N9('atom')],
			Directive: [le('@', 'meta'), Ue('meta'), qe('Arguments')],
			DirectiveDef: [
				Et('directive'),
				le('@', 'meta'),
				Ue('meta'),
				qe('ArgumentsDef'),
				Et('on'),
				xe('DirectiveLocation', le('|'))
			],
			InterfaceDef: [
				Et('interface'),
				Ue('atom'),
				qe('Implements'),
				xe('Directive'),
				le('{'),
				xe('FieldDef'),
				le('}')
			],
			Implements: [Et('implements'), xe('NamedType', le('&'))],
			DirectiveLocation: [Ue('string-2')],
			SchemaDef: [Et('schema'), xe('Directive'), le('{'), xe('OperationTypeDef'), le('}')],
			OperationTypeDef: [Ue('keyword'), le(':'), Ue('atom')],
			ScalarDef: [Et('scalar'), Ue('atom'), xe('Directive')],
			ObjectTypeDef: [
				Et('type'),
				Ue('atom'),
				qe('Implements'),
				xe('Directive'),
				le('{'),
				xe('FieldDef'),
				le('}')
			],
			FieldDef: [Ue('property'), qe('ArgumentsDef'), le(':'), 'Type', xe('Directive')],
			ArgumentsDef: [le('('), xe('InputValueDef'), le(')')],
			InputValueDef: [Ue('attribute'), le(':'), 'Type', qe('DefaultValue'), xe('Directive')],
			UnionDef: [Et('union'), Ue('atom'), xe('Directive'), le('='), xe('UnionMember', le('|'))],
			UnionMember: ['NamedType'],
			EnumDef: [Et('enum'), Ue('atom'), xe('Directive'), le('{'), xe('EnumValueDef'), le('}')],
			EnumValueDef: [Ue('string-2'), xe('Directive')],
			InputDef: [Et('input'), Ue('atom'), xe('Directive'), le('{'), xe('InputValueDef'), le('}')],
			ExtendDef: [Et('extend'), 'ExtensionDefinition'],
			ExtensionDefinition(e) {
				switch (e.value) {
					case 'schema':
						return E.SCHEMA_EXTENSION
					case 'scalar':
						return E.SCALAR_TYPE_EXTENSION
					case 'type':
						return E.OBJECT_TYPE_EXTENSION
					case 'interface':
						return E.INTERFACE_TYPE_EXTENSION
					case 'union':
						return E.UNION_TYPE_EXTENSION
					case 'enum':
						return E.ENUM_TYPE_EXTENSION
					case 'input':
						return E.INPUT_OBJECT_TYPE_EXTENSION
				}
			},
			[E.SCHEMA_EXTENSION]: ['SchemaDef'],
			[E.SCALAR_TYPE_EXTENSION]: ['ScalarDef'],
			[E.OBJECT_TYPE_EXTENSION]: ['ObjectTypeDef'],
			[E.INTERFACE_TYPE_EXTENSION]: ['InterfaceDef'],
			[E.UNION_TYPE_EXTENSION]: ['UnionDef'],
			[E.ENUM_TYPE_EXTENSION]: ['EnumDef'],
			[E.INPUT_OBJECT_TYPE_EXTENSION]: ['InputDef']
		}
	function Et(e) {
		return { style: 'keyword', match: (t) => t.kind === 'Name' && t.value === e }
	}
	function Ue(e) {
		return {
			style: e,
			match: (t) => t.kind === 'Name',
			update(t, n) {
				t.name = n.value
			}
		}
	}
	function N9(e) {
		return {
			style: e,
			match: (t) => t.kind === 'Name',
			update(t, n) {
				var r
				!((r = t.prevState) === null || r === void 0) &&
					r.prevState &&
					((t.name = n.value), (t.prevState.prevState.type = n.value))
			}
		}
	}
	function jr(
		e = { eatWhitespace: (t) => t.eatWhile(fu), lexRules: du, parseRules: pu, editorConfig: {} }
	) {
		return {
			startState() {
				let t = {
					level: 0,
					step: 0,
					name: null,
					kind: null,
					type: null,
					rule: null,
					needsSeparator: !1,
					prevState: null
				}
				return fo(e.parseRules, t, E.DOCUMENT), t
			},
			token(t, n) {
				return T9(t, n, e)
			}
		}
	}
	function T9(e, t, n) {
		var r
		if (t.inBlockstring)
			return e.match(/.*"""/) ? ((t.inBlockstring = !1), 'string') : (e.skipToEnd(), 'string')
		let { lexRules: i, parseRules: s, eatWhitespace: o, editorConfig: a } = n
		if (
			(t.rule && t.rule.length === 0 ? l1(t) : t.needsAdvance && ((t.needsAdvance = !1), u1(t, !0)),
			e.sol())
		) {
			let c = a?.tabSize || 2
			t.indentLevel = Math.floor(e.indentation() / c)
		}
		if (o(e)) return 'ws'
		let u = A9(i, e)
		if (!u) return e.match(/\S+/) || e.match(/\s/), fo(a1, t, 'Invalid'), 'invalidchar'
		if (u.kind === 'Comment') return fo(a1, t, 'Comment'), 'comment'
		let l = G0({}, t)
		if (u.kind === 'Punctuation') {
			if (/^[{([]/.test(u.value))
				t.indentLevel !== void 0 && (t.levels = (t.levels || []).concat(t.indentLevel + 1))
			else if (/^[})\]]/.test(u.value)) {
				let c = (t.levels = (t.levels || []).slice(0, -1))
				t.indentLevel && c.length > 0 && c.at(-1) < t.indentLevel && (t.indentLevel = c.at(-1))
			}
		}
		for (; t.rule; ) {
			let c = typeof t.rule == 'function' ? (t.step === 0 ? t.rule(u, e) : null) : t.rule[t.step]
			if ((t.needsSeparator && (c = c?.separator), c)) {
				if ((c.ofRule && (c = c.ofRule), typeof c == 'string')) {
					fo(s, t, c)
					continue
				}
				if (!((r = c.match) === null || r === void 0) && r.call(c, u))
					return (
						c.update && c.update(t, u),
						u.kind === 'Punctuation' ? u1(t, !0) : (t.needsAdvance = !0),
						c.style
					)
			}
			S9(t)
		}
		return G0(t, l), fo(a1, t, 'Invalid'), 'invalidchar'
	}
	function G0(e, t) {
		let n = Object.keys(t)
		for (let r = 0; r < n.length; r++) e[n[r]] = t[n[r]]
		return e
	}
	var a1 = { Invalid: [], Comment: [] }
	function fo(e, t, n) {
		if (!e[n]) throw new TypeError('Unknown rule: ' + n)
		;(t.prevState = Object.assign({}, t)),
			(t.kind = n),
			(t.name = null),
			(t.type = null),
			(t.rule = e[n]),
			(t.step = 0),
			(t.needsSeparator = !1)
	}
	function l1(e) {
		e.prevState &&
			((e.kind = e.prevState.kind),
			(e.name = e.prevState.name),
			(e.type = e.prevState.type),
			(e.rule = e.prevState.rule),
			(e.step = e.prevState.step),
			(e.needsSeparator = e.prevState.needsSeparator),
			(e.prevState = e.prevState.prevState))
	}
	function u1(e, t) {
		var n
		if (H0(e) && e.rule) {
			let r = e.rule[e.step]
			if (r.separator) {
				let { separator: i } = r
				if (((e.needsSeparator = !e.needsSeparator), !e.needsSeparator && i.ofRule)) return
			}
			if (t) return
		}
		for (
			e.needsSeparator = !1, e.step++;
			e.rule && !(Array.isArray(e.rule) && e.step < e.rule.length);

		)
			l1(e),
				e.rule &&
					(H0(e)
						? !((n = e.rule) === null || n === void 0) &&
						  n[e.step].separator &&
						  (e.needsSeparator = !e.needsSeparator)
						: ((e.needsSeparator = !1), e.step++))
	}
	function H0(e) {
		let t = Array.isArray(e.rule) && typeof e.rule[e.step] != 'string' && e.rule[e.step]
		return t && t.isList
	}
	function S9(e) {
		for (; e.rule && !(Array.isArray(e.rule) && e.rule[e.step].ofRule); ) l1(e)
		e.rule && u1(e, !1)
	}
	function A9(e, t) {
		let n = Object.keys(e)
		for (let r = 0; r < n.length; r++) {
			let i = t.match(e[n[r]])
			if (i && i instanceof Array) return { kind: n[r], value: i[0] }
		}
	}
	function es(e, t) {
		let n = e.split(`
`),
			r = jr(),
			i = r.startState(),
			s = '',
			o = new Nn('')
		for (let a = 0; a < n.length; a++) {
			for (o = new Nn(n[a]); !o.eol() && ((s = r.token(o, i)), t(o, i, s, a) !== 'BREAK'); );
			t(o, i, s, a), i.kind || (i = r.startState())
		}
		return {
			start: o.getStartOfToken(),
			end: o.getCurrentPosition(),
			string: o.current(),
			state: i,
			style: s
		}
	}
	var tn
	;(function (e) {
		;(e.TYPE_SYSTEM = 'TYPE_SYSTEM'), (e.EXECUTABLE = 'EXECUTABLE'), (e.UNKNOWN = 'UNKNOWN')
	})(tn || (tn = {}))
	var F9 = [
			E.SCHEMA_DEFINITION,
			E.OPERATION_TYPE_DEFINITION,
			E.SCALAR_TYPE_DEFINITION,
			E.OBJECT_TYPE_DEFINITION,
			E.INTERFACE_TYPE_DEFINITION,
			E.UNION_TYPE_DEFINITION,
			E.ENUM_TYPE_DEFINITION,
			E.INPUT_OBJECT_TYPE_DEFINITION,
			E.DIRECTIVE_DEFINITION,
			E.SCHEMA_EXTENSION,
			E.SCALAR_TYPE_EXTENSION,
			E.OBJECT_TYPE_EXTENSION,
			E.INTERFACE_TYPE_EXTENSION,
			E.UNION_TYPE_EXTENSION,
			E.ENUM_TYPE_EXTENSION,
			E.INPUT_OBJECT_TYPE_EXTENSION
		],
		w9 = (e) => {
			let t = tn.UNKNOWN
			if (e)
				try {
					ht(Kt(e), {
						enter(n) {
							if (n.kind === 'Document') {
								t = tn.EXECUTABLE
								return
							}
							return F9.includes(n.kind) ? ((t = tn.TYPE_SYSTEM), Bn) : !1
						}
					})
				} catch {
					return t
				}
			return t
		}
	function W0(e, t) {
		return t?.endsWith('.graphqls') ? tn.TYPE_SYSTEM : w9(e)
	}
	function c1(e, t, n = 0) {
		let r = null,
			i = null,
			s = null,
			o = es(e, (a, u, l, c) => {
				if (!(c !== t.line || a.getCurrentPosition() + n < t.character + 1))
					return (r = l), (i = Object.assign({}, u)), (s = a.current()), 'BREAK'
			})
		return {
			start: o.start,
			end: o.end,
			string: s || o.string,
			state: i || o.state,
			style: r || o.style
		}
	}
	function po(e, t, n, r, i) {
		let s = r || c1(e, t, 1)
		if (!s) return null
		let o = s.state.kind === 'Invalid' ? s.state.prevState : s.state
		if (!o) return null
		let a = ho(n, s.state),
			u = i?.mode || W0(e, i?.uri)
		return { token: s, state: o, typeInfo: a, mode: u }
	}
	function hu(e, t, n) {
		return n === En.name && e.getQueryType() === t
			? En
			: n === yn.name && e.getQueryType() === t
			? yn
			: n === xn.name && at(t)
			? xn
			: 'getFields' in t
			? t.getFields()[n]
			: null
	}
	function Q0(e, t) {
		let n = [],
			r = e
		for (; r?.kind; ) n.push(r), (r = r.prevState)
		for (let i = n.length - 1; i >= 0; i--) t(n[i])
	}
	function mu(e) {
		let t
		return (
			Q0(e, (n) => {
				switch (n.kind) {
					case 'Query':
					case 'ShortQuery':
					case 'Mutation':
					case 'Subscription':
					case 'FragmentDefinition':
						t = n
						break
				}
			}),
			t
		)
	}
	function ho(e, t) {
		let n, r, i, s, o, a, u, l, c, d, h
		return (
			Q0(t, (m) => {
				var g
				switch (m.kind) {
					case W.QUERY:
					case 'ShortQuery':
						d = e.getQueryType()
						break
					case W.MUTATION:
						d = e.getMutationType()
						break
					case W.SUBSCRIPTION:
						d = e.getSubscriptionType()
						break
					case W.INLINE_FRAGMENT:
					case W.FRAGMENT_DEFINITION:
						m.type && (d = e.getType(m.type))
						break
					case W.FIELD:
					case W.ALIASED_FIELD: {
						!d || !m.name
							? (o = null)
							: ((o = c ? hu(e, c, m.name) : null), (d = o ? o.type : null))
						break
					}
					case W.SELECTION_SET:
						c = we(d)
						break
					case W.DIRECTIVE:
						i = m.name ? e.getDirective(m.name) : null
						break
					case W.INTERFACE_DEF:
						m.name && ((u = null), (h = new St({ name: m.name, interfaces: [], fields: {} })))
						break
					case W.OBJECT_TYPE_DEF:
						m.name && ((h = null), (u = new Ke({ name: m.name, interfaces: [], fields: {} })))
						break
					case W.ARGUMENTS: {
						if (m.prevState)
							switch (m.prevState.kind) {
								case W.FIELD:
									r = o && o.args
									break
								case W.DIRECTIVE:
									r = i && i.args
									break
								case W.ALIASED_FIELD: {
									let C = (g = m.prevState) === null || g === void 0 ? void 0 : g.name
									if (!C) {
										r = null
										break
									}
									let S = c ? hu(e, c, C) : null
									if (!S) {
										r = null
										break
									}
									r = S.args
									break
								}
								default:
									r = null
									break
							}
						else r = null
						break
					}
					case W.ARGUMENT:
						if (r) {
							for (let C = 0; C < r.length; C++)
								if (r[C].name === m.name) {
									n = r[C]
									break
								}
						}
						a = n?.type
						break
					case W.VARIABLE_DEFINITION:
					case W.VARIABLE:
						d = a
						break
					case W.ENUM_VALUE:
						let v = we(a)
						s = v instanceof bt ? v.getValues().find((C) => C.value === m.name) : null
						break
					case W.LIST_VALUE:
						let N = fr(a)
						a = N instanceof Me ? N.ofType : null
						break
					case W.OBJECT_VALUE:
						let _ = we(a)
						l = _ instanceof Zt ? _.getFields() : null
						break
					case W.OBJECT_FIELD:
						let w = m.name && l ? l[m.name] : null
						;(a = w?.type), (o = w), (d = o ? o.type : null)
						break
					case W.NAMED_TYPE:
						m.name && (d = e.getType(m.name))
						break
				}
			}),
			{
				argDef: n,
				argDefs: r,
				directiveDef: i,
				enumValue: s,
				fieldDef: o,
				inputType: a,
				objectFieldDefs: l,
				parentType: c,
				type: d,
				interfaceDef: h,
				objectTypeDef: u
			}
		)
	}
	var L9 = {
			ALIASED_FIELD: 'AliasedField',
			ARGUMENTS: 'Arguments',
			SHORT_QUERY: 'ShortQuery',
			QUERY: 'Query',
			MUTATION: 'Mutation',
			SUBSCRIPTION: 'Subscription',
			TYPE_CONDITION: 'TypeCondition',
			INVALID: 'Invalid',
			COMMENT: 'Comment',
			SCHEMA_DEF: 'SchemaDef',
			SCALAR_DEF: 'ScalarDef',
			OBJECT_TYPE_DEF: 'ObjectTypeDef',
			OBJECT_VALUE: 'ObjectValue',
			LIST_VALUE: 'ListValue',
			INTERFACE_DEF: 'InterfaceDef',
			UNION_DEF: 'UnionDef',
			ENUM_DEF: 'EnumDef',
			ENUM_VALUE: 'EnumValue',
			FIELD_DEF: 'FieldDef',
			INPUT_DEF: 'InputDef',
			INPUT_VALUE_DEF: 'InputValueDef',
			ARGUMENTS_DEF: 'ArgumentsDef',
			EXTEND_DEF: 'ExtendDef',
			EXTENSION_DEFINITION: 'ExtensionDefinition',
			DIRECTIVE_DEF: 'DirectiveDef',
			IMPLEMENTS: 'Implements',
			VARIABLE_DEFINITIONS: 'VariableDefinitions',
			TYPE: 'Type',
			VARIABLE: 'Variable'
		},
		W = Object.assign(Object.assign({}, E), L9)
	var ve
	;(function (e) {
		;(e.Text = 1),
			(e.Method = 2),
			(e.Function = 3),
			(e.Constructor = 4),
			(e.Field = 5),
			(e.Variable = 6),
			(e.Class = 7),
			(e.Interface = 8),
			(e.Module = 9),
			(e.Property = 10),
			(e.Unit = 11),
			(e.Value = 12),
			(e.Enum = 13),
			(e.Keyword = 14),
			(e.Snippet = 15),
			(e.Color = 16),
			(e.File = 17),
			(e.Reference = 18),
			(e.Folder = 19),
			(e.EnumMember = 20),
			(e.Constant = 21),
			(e.Struct = 22),
			(e.Event = 23),
			(e.Operator = 24),
			(e.TypeParameter = 25)
	})(ve || (ve = {}))
	var gu = { command: 'editor.action.triggerSuggest', title: 'Suggestions' },
		C9 = (e) => {
			let t = []
			if (e)
				try {
					ht(Kt(e), {
						FragmentDefinition(n) {
							t.push(n)
						}
					})
				} catch {
					return []
				}
			return t
		}
	function f1(e, t, n, r, i, s) {
		var o
		let a = Object.assign(Object.assign({}, s), { schema: e }),
			u = po(t, n, e, r, s)
		if (!u) return []
		let { state: l, typeInfo: c, mode: d, token: h } = u,
			{ kind: m, step: g, prevState: v } = l
		if (m === W.DOCUMENT) return d === tn.TYPE_SYSTEM ? I9(h) : d === tn.EXECUTABLE ? R9(h) : k9(h)
		if (m === W.EXTEND_DEF) return O9(h)
		if (
			((o = v?.prevState) === null || o === void 0 ? void 0 : o.kind) === W.EXTENSION_DEFINITION &&
			l.name
		)
			return Ve(h, [])
		if (v?.kind === E.SCALAR_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter(ct)
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (v?.kind === E.OBJECT_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter((_) => me(_) && !_.name.startsWith('__'))
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (v?.kind === E.INTERFACE_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter(De)
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (v?.kind === E.UNION_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter(Ze)
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (v?.kind === E.ENUM_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter((_) => Be(_) && !_.name.startsWith('__'))
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (v?.kind === E.INPUT_OBJECT_TYPE_EXTENSION)
			return Ve(
				h,
				Object.values(e.getTypeMap())
					.filter(be)
					.map((_) => ({ label: _.name, kind: ve.Function }))
			)
		if (m === W.IMPLEMENTS || (m === W.NAMED_TYPE && v?.kind === W.IMPLEMENTS))
			return B9(h, l, e, t, c)
		if (m === W.SELECTION_SET || m === W.FIELD || m === W.ALIASED_FIELD) return M9(h, c, a)
		if (m === W.ARGUMENTS || (m === W.ARGUMENT && g === 0)) {
			let { argDefs: _ } = c
			if (_)
				return Ve(
					h,
					_.map((w) => {
						var C
						return {
							label: w.name,
							insertText: Kc(w.name + ': ', w.type),
							insertTextMode: gr.adjustIndentation,
							insertTextFormat: mr.Snippet,
							command: gu,
							labelDetails: { detail: ' ' + String(w.type) },
							documentation: (C = w.description) !== null && C !== void 0 ? C : void 0,
							kind: ve.Variable,
							type: w.type
						}
					})
				)
		}
		if ((m === W.OBJECT_VALUE || (m === W.OBJECT_FIELD && g === 0)) && c.objectFieldDefs) {
			let _ = pr(c.objectFieldDefs),
				w = m === W.OBJECT_VALUE ? ve.Value : ve.Field
			return Ve(
				h,
				_.map((C) => {
					var S
					return {
						label: C.name,
						detail: String(C.type),
						documentation: (S = C?.description) !== null && S !== void 0 ? S : void 0,
						kind: w,
						type: C.type,
						insertText: Kc(C.name + ': ', C.type),
						insertTextMode: gr.adjustIndentation,
						insertTextFormat: mr.Snippet,
						command: gu
					}
				})
			)
		}
		if (
			m === W.ENUM_VALUE ||
			(m === W.LIST_VALUE && g === 1) ||
			(m === W.OBJECT_FIELD && g === 2) ||
			(m === W.ARGUMENT && g === 2)
		)
			return P9(h, c, t, e)
		if (m === W.VARIABLE && g === 1) {
			let _ = we(c.inputType),
				w = p1(t, e, h)
			return Ve(
				h,
				w.filter((C) => C.detail === _?.name)
			)
		}
		if (
			(m === W.TYPE_CONDITION && g === 1) ||
			(m === W.NAMED_TYPE && v != null && v.kind === W.TYPE_CONDITION)
		)
			return V9(h, c, e, m)
		if (m === W.FRAGMENT_SPREAD && g === 1) return U9(h, c, e, t, Array.isArray(i) ? i : C9(i))
		let N = X0(l)
		return N.kind === W.FIELD_DEF
			? Ve(
					h,
					Object.values(e.getTypeMap())
						.filter((_) => Ht(_) && !_.name.startsWith('__'))
						.map((_) => ({
							label: _.name,
							kind: ve.Function,
							insertText: s?.fillLeafsOnComplete
								? _.name +
								  `
`
								: _.name,
							insertTextMode: gr.adjustIndentation
						}))
			  )
			: N.kind === W.INPUT_VALUE_DEF && g === 2
			? Ve(
					h,
					Object.values(e.getTypeMap())
						.filter((_) => et(_) && !_.name.startsWith('__'))
						.map((_) => ({
							label: _.name,
							kind: ve.Function,
							insertText: s?.fillLeafsOnComplete
								? _.name +
								  `
$1`
								: _.name,
							insertTextMode: gr.adjustIndentation,
							insertTextFormat: mr.Snippet
						}))
			  )
			: (m === W.VARIABLE_DEFINITION && g === 2) ||
			  (m === W.LIST_TYPE && g === 1) ||
			  (m === W.NAMED_TYPE &&
					v &&
					(v.kind === W.VARIABLE_DEFINITION ||
						v.kind === W.LIST_TYPE ||
						v.kind === W.NON_NULL_TYPE))
			? j9(h, e, m)
			: m === W.DIRECTIVE
			? q9(h, l, e, m)
			: m === W.DIRECTIVE_DEF
			? G9(h, l, e, m)
			: []
	}
	var d1 = [
			{ label: 'type', kind: ve.Function },
			{ label: 'interface', kind: ve.Function },
			{ label: 'union', kind: ve.Function },
			{ label: 'input', kind: ve.Function },
			{ label: 'scalar', kind: ve.Function },
			{ label: 'schema', kind: ve.Function }
		],
		z0 = [
			{ label: 'query', kind: ve.Function },
			{ label: 'mutation', kind: ve.Function },
			{ label: 'subscription', kind: ve.Function },
			{ label: 'fragment', kind: ve.Function },
			{ label: '{', kind: ve.Constructor }
		]
	function I9(e) {
		return Ve(e, [{ label: 'extend', kind: ve.Function }, ...d1])
	}
	function R9(e) {
		return Ve(e, z0)
	}
	function k9(e) {
		return Ve(e, [{ label: 'extend', kind: ve.Function }, ...z0, ...d1])
	}
	function O9(e) {
		return Ve(e, d1)
	}
	function M9(e, t, n) {
		var r
		if (t.parentType) {
			let { parentType: i } = t,
				s = []
			return (
				'getFields' in i && (s = pr(i.getFields())),
				at(i) && s.push(xn),
				i === ((r = n?.schema) === null || r === void 0 ? void 0 : r.getQueryType()) &&
					s.push(En, yn),
				Ve(
					e,
					s.map((o, a) => {
						var u
						let l = {
							sortText: String(a) + o.name,
							label: o.name,
							detail: String(o.type),
							documentation: (u = o.description) !== null && u !== void 0 ? u : void 0,
							deprecated: !!o.deprecationReason,
							isDeprecated: !!o.deprecationReason,
							deprecationReason: o.deprecationReason,
							kind: ve.Field,
							labelDetails: { detail: ' ' + o.type.toString() },
							type: o.type
						}
						return (
							n?.fillLeafsOnComplete &&
								((l.insertText = Jh(o)),
								l.insertText ||
									(l.insertText = oo(
										o.name,
										o.type,
										o.name +
											(e.state.needsAdvance
												? ''
												: `
`)
									)),
								l.insertText &&
									((l.insertTextFormat = mr.Snippet),
									(l.insertTextMode = gr.adjustIndentation),
									(l.command = gu))),
							l
						)
					})
				)
			)
		}
		return []
	}
	function P9(e, t, n, r) {
		let i = we(t.inputType),
			s = p1(n, r, e).filter((o) => o.detail === i?.name)
		if (i instanceof bt) {
			let o = i.getValues()
			return Ve(
				e,
				o
					.map((a) => {
						var u
						return {
							label: a.name,
							detail: String(i),
							documentation: (u = a.description) !== null && u !== void 0 ? u : void 0,
							deprecated: !!a.deprecationReason,
							isDeprecated: !!a.deprecationReason,
							deprecationReason: a.deprecationReason,
							kind: ve.EnumMember,
							type: i
						}
					})
					.concat(s)
			)
		}
		return i === He
			? Ve(
					e,
					s.concat([
						{
							label: 'true',
							detail: String(He),
							documentation: 'Not false.',
							kind: ve.Variable,
							type: He
						},
						{
							label: 'false',
							detail: String(He),
							documentation: 'Not true.',
							kind: ve.Variable,
							type: He
						}
					])
			  )
			: s
	}
	function B9(e, t, n, r, i) {
		if (t.needsSeparator) return []
		let s = n.getTypeMap(),
			o = pr(s).filter(De),
			a = o.map(({ name: m }) => m),
			u = new Set()
		es(r, (m, g) => {
			var v, N, _, w, C
			if (
				g.name &&
				(g.kind === W.INTERFACE_DEF && !a.includes(g.name) && u.add(g.name),
				g.kind === W.NAMED_TYPE &&
					((v = g.prevState) === null || v === void 0 ? void 0 : v.kind) === W.IMPLEMENTS)
			) {
				if (i.interfaceDef) {
					if (
						(N = i.interfaceDef) === null || N === void 0
							? void 0
							: N.getInterfaces().find(({ name: I }) => I === g.name)
					)
						return
					let k = n.getType(g.name),
						M = (_ = i.interfaceDef) === null || _ === void 0 ? void 0 : _.toConfig()
					i.interfaceDef = new St(
						Object.assign(Object.assign({}, M), {
							interfaces: [...M.interfaces, k || new St({ name: g.name, fields: {} })]
						})
					)
				} else if (i.objectTypeDef) {
					if (
						(w = i.objectTypeDef) === null || w === void 0
							? void 0
							: w.getInterfaces().find(({ name: I }) => I === g.name)
					)
						return
					let k = n.getType(g.name),
						M = (C = i.objectTypeDef) === null || C === void 0 ? void 0 : C.toConfig()
					i.objectTypeDef = new Ke(
						Object.assign(Object.assign({}, M), {
							interfaces: [...M.interfaces, k || new St({ name: g.name, fields: {} })]
						})
					)
				}
			}
		})
		let l = i.interfaceDef || i.objectTypeDef,
			d = (l?.getInterfaces() || []).map(({ name: m }) => m),
			h = o
				.concat([...u].map((m) => ({ name: m })))
				.filter(({ name: m }) => m !== l?.name && !d.includes(m))
		return Ve(
			e,
			h.map((m) => {
				let g = { label: m.name, kind: ve.Interface, type: m }
				return m?.description && (g.documentation = m.description), g
			})
		)
	}
	function V9(e, t, n, r) {
		let i
		if (t.parentType)
			if (mt(t.parentType)) {
				let s = Ra(t.parentType),
					o = n.getPossibleTypes(s),
					a = Object.create(null)
				for (let u of o) for (let l of u.getInterfaces()) a[l.name] = l
				i = o.concat(pr(a))
			} else i = [t.parentType]
		else {
			let s = n.getTypeMap()
			i = pr(s).filter((o) => at(o) && !o.name.startsWith('__'))
		}
		return Ve(
			e,
			i.map((s) => {
				let o = we(s)
				return { label: String(s), documentation: o?.description || '', kind: ve.Field }
			})
		)
	}
	function U9(e, t, n, r, i) {
		if (!r) return []
		let s = n.getTypeMap(),
			o = mu(e.state),
			a = Y0(r)
		i && i.length > 0 && a.push(...i)
		let u = a.filter(
			(l) =>
				s[l.typeCondition.name.value] &&
				!(o && o.kind === W.FRAGMENT_DEFINITION && o.name === l.name.value) &&
				at(t.parentType) &&
				at(s[l.typeCondition.name.value]) &&
				Cr(n, t.parentType, s[l.typeCondition.name.value])
		)
		return Ve(
			e,
			u.map((l) => ({
				label: l.name.value,
				detail: String(s[l.typeCondition.name.value]),
				documentation: `fragment ${l.name.value} on ${l.typeCondition.name.value}`,
				labelDetails: { detail: `fragment ${l.name.value} on ${l.typeCondition.name.value}` },
				kind: ve.Field,
				type: s[l.typeCondition.name.value]
			}))
		)
	}
	var $9 = (e, t) => {
		var n, r, i, s, o, a, u, l, c, d
		if (((n = e.prevState) === null || n === void 0 ? void 0 : n.kind) === t) return e.prevState
		if (
			((i = (r = e.prevState) === null || r === void 0 ? void 0 : r.prevState) === null ||
			i === void 0
				? void 0
				: i.kind) === t
		)
			return e.prevState.prevState
		if (
			((a =
				(o = (s = e.prevState) === null || s === void 0 ? void 0 : s.prevState) === null ||
				o === void 0
					? void 0
					: o.prevState) === null || a === void 0
				? void 0
				: a.kind) === t
		)
			return e.prevState.prevState.prevState
		if (
			((d =
				(c =
					(l = (u = e.prevState) === null || u === void 0 ? void 0 : u.prevState) === null ||
					l === void 0
						? void 0
						: l.prevState) === null || c === void 0
					? void 0
					: c.prevState) === null || d === void 0
				? void 0
				: d.kind) === t
		)
			return e.prevState.prevState.prevState.prevState
	}
	function p1(e, t, n) {
		let r = null,
			i,
			s = Object.create({})
		return (
			es(e, (o, a) => {
				var u
				if ((a?.kind === W.VARIABLE && a.name && (r = a.name), a?.kind === W.NAMED_TYPE && r)) {
					let l = $9(a, W.TYPE)
					l?.type && (i = t.getType(l?.type))
				}
				if (r && i && !s[r]) {
					let l =
						n.string === '$' ||
						((u = n?.state) === null || u === void 0 ? void 0 : u.kind) === 'Variable'
							? r
							: '$' + r
					;(s[r] = {
						detail: i.toString(),
						insertText: l,
						label: '$' + r,
						rawInsert: l,
						type: i,
						kind: ve.Variable
					}),
						(r = null),
						(i = null)
				}
			}),
			pr(s)
		)
	}
	function Y0(e) {
		let t = []
		return (
			es(e, (n, r) => {
				r.kind === W.FRAGMENT_DEFINITION &&
					r.name &&
					r.type &&
					t.push({
						kind: W.FRAGMENT_DEFINITION,
						name: { kind: E.NAME, value: r.name },
						selectionSet: { kind: W.SELECTION_SET, selections: [] },
						typeCondition: { kind: W.NAMED_TYPE, name: { kind: E.NAME, value: r.type } }
					})
			}),
			t
		)
	}
	function j9(e, t, n) {
		let r = t.getTypeMap(),
			i = pr(r).filter(et)
		return Ve(
			e,
			i.map((s) => ({ label: s.name, documentation: s?.description || '', kind: ve.Variable }))
		)
	}
	function q9(e, t, n, r) {
		var i
		if (!((i = t.prevState) === null || i === void 0) && i.kind) {
			let s = n.getDirectives().filter((o) => J0(t.prevState, o))
			return Ve(
				e,
				s.map((o) => ({ label: o.name, documentation: o?.description || '', kind: ve.Function }))
			)
		}
		return []
	}
	function G9(e, t, n, r) {
		let i = n.getDirectives().find((s) => s.name === t.name)
		return Ve(
			e,
			i?.args.map((s) => ({ label: s.name, documentation: s.description || '', kind: ve.Field })) ||
				[]
		)
	}
	function J0(e, t) {
		if (!e?.kind) return !1
		let { kind: n, prevState: r } = e,
			{ locations: i } = t
		switch (n) {
			case W.QUERY:
				return i.includes(K.QUERY)
			case W.MUTATION:
				return i.includes(K.MUTATION)
			case W.SUBSCRIPTION:
				return i.includes(K.SUBSCRIPTION)
			case W.FIELD:
			case W.ALIASED_FIELD:
				return i.includes(K.FIELD)
			case W.FRAGMENT_DEFINITION:
				return i.includes(K.FRAGMENT_DEFINITION)
			case W.FRAGMENT_SPREAD:
				return i.includes(K.FRAGMENT_SPREAD)
			case W.INLINE_FRAGMENT:
				return i.includes(K.INLINE_FRAGMENT)
			case W.SCHEMA_DEF:
				return i.includes(K.SCHEMA)
			case W.SCALAR_DEF:
				return i.includes(K.SCALAR)
			case W.OBJECT_TYPE_DEF:
				return i.includes(K.OBJECT)
			case W.FIELD_DEF:
				return i.includes(K.FIELD_DEFINITION)
			case W.INTERFACE_DEF:
				return i.includes(K.INTERFACE)
			case W.UNION_DEF:
				return i.includes(K.UNION)
			case W.ENUM_DEF:
				return i.includes(K.ENUM)
			case W.ENUM_VALUE:
				return i.includes(K.ENUM_VALUE)
			case W.INPUT_DEF:
				return i.includes(K.INPUT_OBJECT)
			case W.INPUT_VALUE_DEF:
				switch (r?.kind) {
					case W.ARGUMENTS_DEF:
						return i.includes(K.ARGUMENT_DEFINITION)
					case W.INPUT_DEF:
						return i.includes(K.INPUT_FIELD_DEFINITION)
				}
		}
		return !1
	}
	function X0(e) {
		return e.prevState &&
			e.kind &&
			[W.NAMED_TYPE, W.LIST_TYPE, W.TYPE, W.NON_NULL_TYPE].includes(e.kind)
			? X0(e.prevState)
			: e
	}
	var H9 = Xu(Z0())
	function It(e, t) {
		e.push(t)
	}
	function h1(e, t) {
		ce(t)
			? (h1(e, t.ofType), It(e, '!'))
			: Fe(t)
			? (It(e, '['), h1(e, t.ofType), It(e, ']'))
			: It(e, t.name)
	}
	function vu(e, t, n) {
		let r = [],
			i = 'type' in e ? e.type : e
		return (
			'type' in e &&
				e.description &&
				(It(r, e.description),
				It(
					r,
					`

`
				)),
			It(r, W9(i, t)),
			n
				? (It(
						r,
						`
`
				  ),
				  It(r, n))
				: !ct(i) && 'description' in i && i.description
				? (It(
						r,
						`
`
				  ),
				  It(r, i.description))
				: 'ofType' in i &&
				  !ct(i.ofType) &&
				  'description' in i.ofType &&
				  i.ofType.description &&
				  (It(
						r,
						`
`
				  ),
				  It(r, i.ofType.description)),
			r.join('')
		)
	}
	function W9(e, t) {
		let n = []
		return t && It(n, '```graphql\n'), h1(n, e), t && It(n, '\n```'), n.join('')
	}
	var Q9 = {
			Int: { type: 'integer' },
			String: { type: 'string' },
			Float: { type: 'number' },
			ID: { type: 'string' },
			Boolean: { type: 'boolean' },
			DateTime: { type: 'string' }
		},
		m1 = class {
			constructor() {
				this.set = new Set()
			}
			mark(t) {
				return this.set.has(t) ? !1 : (this.set.add(t), !0)
			}
		}
	function g1(e, t) {
		var n, r
		let i = Object.create(null),
			s = Object.create(null),
			a = 'type' in e ? e.type : e,
			u = ce(a) ? a.ofType : a,
			l = ce(a)
		if (ct(u))
			!((n = t?.scalarSchemas) === null || n === void 0) && n[u.name]
				? (i = JSON.parse(JSON.stringify(t.scalarSchemas[u.name])))
				: (i.type = ['string', 'number', 'boolean', 'integer']),
				l ||
					(Array.isArray(i.type)
						? i.type.push('null')
						: i.type
						? (i.type = [i.type, 'null'])
						: i.enum
						? i.enum.push(null)
						: i.oneOf
						? i.oneOf.push({ type: 'null' })
						: (i = { oneOf: [i, { type: 'null' }] }))
		else if (Be(u)) (i.enum = u.getValues().map((d) => d.name)), l || i.enum.push(null)
		else if (Fe(u)) {
			l ? (i.type = 'array') : (i.type = ['array', 'null'])
			let { definition: d, definitions: h } = g1(u.ofType, t)
			if (((i.items = d), h)) for (let m of Object.keys(h)) s[m] = h[m]
		} else if (
			be(u) &&
			(l
				? (i.$ref = `#/definitions/${u.name}`)
				: (i.oneOf = [{ $ref: `#/definitions/${u.name}` }, { type: 'null' }]),
			!((r = t?.definitionMarker) === null || r === void 0) && r.mark(u.name))
		) {
			let d = u.getFields(),
				h = { type: 'object', properties: {}, required: [] }
			;(h.description = vu(u)), t?.useMarkdownDescription && (h.markdownDescription = vu(u, !0))
			for (let m of Object.keys(d)) {
				let g = d[m],
					{ required: v, definition: N, definitions: _ } = g1(g, t)
				if (((h.properties[m] = N), v && h.required.push(m), _))
					for (let [w, C] of Object.entries(_)) s[w] = C
			}
			s[u.name] = h
		}
		'defaultValue' in e && e.defaultValue !== void 0 && (i.default = e.defaultValue)
		let { description: c } = i
		return (
			(i.description = vu(e, !1, c)),
			t?.useMarkdownDescription && (i.markdownDescription = vu(e, !0, c)),
			{ required: l, definition: i, definitions: s }
		)
	}
	function bu(e, t) {
		var n
		let r = {
				$schema: 'http://json-schema.org/draft-04/schema',
				type: 'object',
				properties: {},
				required: []
			},
			i = Object.assign(Object.assign({}, t), {
				definitionMarker: new m1(),
				scalarSchemas: Object.assign(Object.assign({}, Q9), t?.scalarSchemas)
			})
		if (e)
			for (let [s, o] of Object.entries(e)) {
				let { definition: a, required: u, definitions: l } = g1(o, i)
				;(r.properties[s] = a),
					u && ((n = r.required) === null || n === void 0 || n.push(s)),
					l && (r.definitions = Object.assign(Object.assign({}, r?.definitions), l))
			}
		return r
	}
	var qr = class {
			constructor(t, n) {
				;(this.containsPosition = (r) =>
					this.start.line === r.line
						? this.start.character <= r.character
						: this.end.line === r.line
						? this.end.character >= r.character
						: this.start.line <= r.line && this.end.line >= r.line),
					(this.start = t),
					(this.end = n)
			}
			setStart(t, n) {
				this.start = new Yt(t, n)
			}
			setEnd(t, n) {
				this.end = new Yt(t, n)
			}
		},
		Yt = class {
			constructor(t, n) {
				;(this.lessThanOrEqualTo = (r) =>
					this.line < r.line || (this.line === r.line && this.character <= r.character)),
					(this.line = t),
					(this.character = n)
			}
			setLine(t) {
				this.line = t
			}
			setCharacter(t) {
				this.character = t
			}
		}
	var z9 = [Bi, Wi, Qi, Gi, Hi, qi, Mr, Or, Vr, Ui, Br, Ur, zi, Mi, $i]
	function Eu(e, t, n, r, i) {
		let s = Yi.filter((a) => !(a === Vi || a === Oi || (r && a === Pi)))
		return (
			n && Array.prototype.push.apply(s, n),
			i && Array.prototype.push.apply(s, z9),
			Ji(e, t, s).filter((a) => {
				if (a.message.includes('Unknown directive') && a.nodes) {
					let u = a.nodes[0]
					if (u && u.kind === E.DIRECTIVE) {
						let l = u.name.value
						if (l === 'arguments' || l === 'argumentDefinitions') return !1
					}
				}
				return !0
			})
		)
	}
	function yu(e, t) {
		let n = Object.create(null)
		for (let r of t.definitions)
			if (r.kind === 'OperationDefinition') {
				let { variableDefinitions: i } = r
				if (i)
					for (let { variable: s, type: o } of i) {
						let a = We(e, o)
						a
							? (n[s.name.value] = a)
							: o.kind === E.NAMED_TYPE && o.name.value === 'Float' && (n[s.name.value] = Xs)
					}
			}
		return n
	}
	function xu(e, t) {
		let n = t ? yu(t, e) : void 0,
			r = []
		return (
			ht(e, {
				OperationDefinition(i) {
					r.push(i)
				}
			}),
			{ variableToType: n, operations: r }
		)
	}
	var mo = { Error: 'Error', Warning: 'Warning', Information: 'Information', Hint: 'Hint' },
		_u = { [mo.Error]: 1, [mo.Warning]: 2, [mo.Information]: 3, [mo.Hint]: 4 },
		Nu = (e, t) => {
			if (!e) throw new Error(t)
		}
	function v1(e, t = null, n, r, i) {
		var s, o
		let a = null,
			u = ''
		i &&
			(u =
				typeof i == 'string'
					? i
					: i.reduce(
							(c, d) =>
								c +
								Le(d) +
								`

`,
							''
					  ))
		let l = u
			? `${e}

${u}`
			: e
		try {
			a = Kt(l)
		} catch (c) {
			if (c instanceof O) {
				let d = Tu(
					(o = (s = c.locations) === null || s === void 0 ? void 0 : s[0]) !== null && o !== void 0
						? o
						: { line: 0, column: 0 },
					l
				)
				return [{ severity: _u.Error, message: c.message, source: 'GraphQL: Syntax', range: d }]
			}
			throw c
		}
		return tm(a, t, n, r)
	}
	function tm(e, t = null, n, r) {
		if (!t) return []
		let i = Eu(t, e, n, r).flatMap((o) => em(o, _u.Error, 'Validation')),
			s = Ji(t, e, [tu]).flatMap((o) => em(o, _u.Warning, 'Deprecation'))
		return i.concat(s)
	}
	function em(e, t, n) {
		if (!e.nodes) return []
		let r = []
		for (let [i, s] of e.nodes.entries()) {
			let o =
				s.kind !== 'Variable' && 'name' in s && s.name !== void 0
					? s.name
					: 'variable' in s && s.variable !== void 0
					? s.variable
					: s
			if (o) {
				Nu(e.locations, 'GraphQL validation error requires locations.')
				let a = e.locations[i],
					u = nD(o),
					l = a.column + (u.end - u.start)
				r.push({
					source: `GraphQL: ${n}`,
					message: e.message,
					severity: t,
					range: new qr(new Yt(a.line - 1, a.column - 1), new Yt(a.line - 1, l))
				})
			}
		}
		return r
	}
	function Tu(e, t) {
		let n = jr(),
			r = n.startState(),
			i = t.split(`
`)
		Nu(i.length >= e.line, 'Query text must have more lines than where the error happened')
		let s = null
		for (let l = 0; l < e.line; l++)
			for (s = new Nn(i[l]); !s.eol() && n.token(s, r) !== 'invalidchar'; );
		Nu(s, 'Expected Parser stream to be available.')
		let o = e.line - 1,
			a = s.getStartOfToken(),
			u = s.getCurrentPosition()
		return new qr(new Yt(o, a), new Yt(o, u))
	}
	function nD(e) {
		let n = e.loc
		return Nu(n, 'Expected ASTNode to have a location.'), n
	}
	var { INLINE_FRAGMENT: JI } = E
	function Su(e, t, n, r, i) {
		let s = Object.assign(Object.assign({}, i), { schema: e }),
			o = po(t, n, e, r)
		if (!o) return ''
		let { typeInfo: a, token: u } = o,
			{ kind: l, step: c } = u.state
		if (
			(l === 'Field' && c === 0 && a.fieldDef) ||
			(l === 'AliasedField' && c === 2 && a.fieldDef) ||
			(l === 'ObjectField' && c === 0 && a.fieldDef)
		) {
			let d = []
			return ts(d, s), rD(d, a, s), ns(d, s), rs(d, s, a.fieldDef), d.join('').trim()
		}
		if (l === 'Directive' && c === 1 && a.directiveDef) {
			let d = []
			return ts(d, s), rm(d, a, s), ns(d, s), rs(d, s, a.directiveDef), d.join('').trim()
		}
		if (l === 'Variable' && a.type) {
			let d = []
			return ts(d, s), Gr(d, a, s, a.type), ns(d, s), rs(d, s, a.type), d.join('').trim()
		}
		if (l === 'Argument' && c === 0 && a.argDef) {
			let d = []
			return ts(d, s), iD(d, a, s), ns(d, s), rs(d, s, a.argDef), d.join('').trim()
		}
		if (l === 'EnumValue' && a.enumValue && 'description' in a.enumValue) {
			let d = []
			return ts(d, s), sD(d, a, s), ns(d, s), rs(d, s, a.enumValue), d.join('').trim()
		}
		if (l === 'NamedType' && a.type && 'description' in a.type) {
			let d = []
			return ts(d, s), Gr(d, a, s, a.type), ns(d, s), rs(d, s, a.type), d.join('').trim()
		}
		return ''
	}
	function ts(e, t) {
		t.useMarkdown && ut(e, '```graphql\n')
	}
	function ns(e, t) {
		t.useMarkdown && ut(e, '\n```')
	}
	function rD(e, t, n) {
		nm(e, t, n), im(e, t, n, t.type)
	}
	function nm(e, t, n) {
		if (!t.fieldDef) return
		let r = t.fieldDef.name
		r.slice(0, 2) !== '__' && (Gr(e, t, n, t.parentType), ut(e, '.')), ut(e, r)
	}
	function rm(e, t, n) {
		if (!t.directiveDef) return
		let r = '@' + t.directiveDef.name
		ut(e, r)
	}
	function iD(e, t, n) {
		if ((t.directiveDef ? rm(e, t, n) : t.fieldDef && nm(e, t, n), !t.argDef)) return
		let { name: r } = t.argDef
		ut(e, '('), ut(e, r), im(e, t, n, t.inputType), ut(e, ')')
	}
	function im(e, t, n, r) {
		ut(e, ': '), Gr(e, t, n, r)
	}
	function sD(e, t, n) {
		if (!t.enumValue) return
		let { name: r } = t.enumValue
		Gr(e, t, n, t.inputType), ut(e, '.'), ut(e, r)
	}
	function Gr(e, t, n, r) {
		r &&
			(r instanceof ae
				? (Gr(e, t, n, r.ofType), ut(e, '!'))
				: r instanceof Me
				? (ut(e, '['), Gr(e, t, n, r.ofType), ut(e, ']'))
				: ut(e, r.name))
	}
	function rs(e, t, n) {
		if (!n) return
		let r = typeof n.description == 'string' ? n.description : null
		r &&
			(ut(
				e,
				`

`
			),
			ut(e, r)),
			oD(e, t, n)
	}
	function oD(e, t, n) {
		if (!n) return
		let r = n.deprecationReason || null
		r &&
			(ut(
				e,
				`

`
			),
			ut(e, 'Deprecated: '),
			ut(e, r))
	}
	function ut(e, t) {
		e.push(t)
	}
	var Fm = Xu(Am())
	var S1 = (e, t) => {
		let {
			schema: n,
			documentAST: r,
			introspectionJSON: i,
			introspectionJSONString: s,
			buildSchemaOptions: o,
			documentString: a
		} = e
		if (n) return n
		if (s) {
			let u = JSON.parse(s)
			return io(u, o)
		}
		if (a && t) {
			let u = t(a)
			return so(u, o)
		}
		if (i) return io(i, o)
		if (r) return so(r, o)
		throw new Error('no schema supplied')
	}
	var BD = new Map(),
		Cu = class {
			_parser = Kt
			_schemas = []
			_schemaCache = BD
			_schemaLoader = S1
			_parseOptions = void 0
			_customValidationRules = void 0
			_externalFragmentDefinitionNodes = null
			_externalFragmentDefinitionsString = null
			_completionSettings
			constructor({
				parser: t,
				schemas: n,
				parseOptions: r,
				externalFragmentDefinitions: i,
				customValidationRules: s,
				fillLeafsOnComplete: o,
				completionSettings: a
			}) {
				;(this._schemaLoader = S1),
					n && ((this._schemas = n), this._cacheSchemas()),
					t && (this._parser = t),
					(this._completionSettings = { ...a, fillLeafsOnComplete: a?.fillLeafsOnComplete ?? o }),
					r && (this._parseOptions = r),
					s && (this._customValidationRules = s),
					i &&
						(Array.isArray(i)
							? (this._externalFragmentDefinitionNodes = i)
							: (this._externalFragmentDefinitionsString = i))
			}
			_cacheSchemas() {
				for (let t of this._schemas) this._cacheSchema(t)
			}
			_cacheSchema(t) {
				let n = this._schemaLoader(t, this.parse.bind(this))
				return this._schemaCache.set(t.uri, { ...t, schema: n })
			}
			getSchemaForFile(t) {
				if (!this._schemas?.length) return
				if (this._schemas.length === 1) return this._schemaCache.get(this._schemas[0].uri)
				let n = this._schemas.find((r) =>
					r.fileMatch ? r.fileMatch.some((i) => (0, Fm.default)(i)(t)) : !1
				)
				if (n) {
					let r = this._schemaCache.get(n.uri)
					return r || this._cacheSchema(n).get(n.uri)
				}
			}
			getExternalFragmentDefinitions() {
				if (!this._externalFragmentDefinitionNodes && this._externalFragmentDefinitionsString) {
					let t = []
					try {
						ht(this._parser(this._externalFragmentDefinitionsString), {
							FragmentDefinition(n) {
								t.push(n)
							}
						})
					} catch {
						throw new Error(`Failed parsing externalFragmentDefinitions string:
${this._externalFragmentDefinitionsString}`)
					}
					this._externalFragmentDefinitionNodes = t
				}
				return this._externalFragmentDefinitionNodes
			}
			async updateSchemas(t) {
				;(this._schemas = t), this._cacheSchemas()
			}
			updateSchema(t) {
				let n = this._schemas.findIndex((r) => r.uri === t.uri)
				if (n < 0) {
					console.warn('updateSchema could not find a schema in your config by that URI', t.uri)
					return
				}
				;(this._schemas[n] = t), this._cacheSchema(t)
			}
			addSchema(t) {
				this._schemas.push(t), this._cacheSchema(t)
			}
			parse(t, n) {
				return this._parser(t, n || this._parseOptions)
			}
			getCompletion = (t, n, r) => {
				let i = this.getSchemaForFile(t)
				return !n || n.length < 1 || !i?.schema
					? []
					: f1(i.schema, n, r, void 0, this.getExternalFragmentDefinitions(), {
							uri: t,
							...this._completionSettings
					  })
			}
			getDiagnostics = (t, n, r) => {
				let i = this.getSchemaForFile(t)
				return !n || n.trim().length < 2 || !i?.schema
					? []
					: v1(
							n,
							i.schema,
							r ?? this._customValidationRules,
							!1,
							this.getExternalFragmentDefinitions()
					  )
			}
			getHover = (t, n, r, i) => {
				let s = this.getSchemaForFile(t)
				if (s && n?.length > 3) return Su(s.schema, n, r, void 0, { useMarkdown: !0, ...i })
			}
			getVariablesJSONSchema = (t, n, r) => {
				let i = this.getSchemaForFile(t)
				if (i && n.length > 3)
					try {
						let s = this.parse(n),
							o = xu(s, i.schema)
						if (o?.variableToType)
							return bu(o.variableToType, { ...r, scalarSchemas: i.customScalarSchemas })
					} catch {}
				return null
			}
		}
	function A1(e) {
		return {
			startLineNumber: e.start.line + 1,
			startColumn: e.start.character + 1,
			endLineNumber: e.end.line + 1,
			endColumn: e.end.character + 1
		}
	}
	function F1(e) {
		return new Yt(e.lineNumber - 1, e.column - 1)
	}
	function wm(e, t) {
		let n = {
			label: e.label,
			insertText: e?.insertText,
			sortText: e.sortText,
			filterText: e?.filterText,
			documentation: e.documentation,
			detail: e.detail,
			range: t ? A1(t) : void 0,
			kind: e.kind
		}
		return (
			e.insertTextFormat && (n.insertTextFormat = e.insertTextFormat),
			e.insertTextMode && (n.insertTextMode = e.insertTextMode),
			e.command && (n.command = { ...e.command, id: e.command.command }),
			e.labelDetails && (n.labelDetails = e.labelDetails),
			n
		)
	}
	function Lm(e) {
		return {
			startLineNumber: e.range.start.line + 1,
			endLineNumber: e.range.end.line + 1,
			startColumn: e.range.start.character + 1,
			endColumn: e.range.end.character,
			message: e.message,
			severity: 5,
			code: e.code || void 0
		}
	}
	var Gu = class {
		_ctx
		_languageService
		_formattingOptions
		constructor(t, n) {
			;(this._ctx = t),
				(this._languageService = new Cu(n.languageConfig)),
				(this._formattingOptions = n.formattingOptions)
		}
		async doValidation(t) {
			try {
				let r = this._getTextModel(t)?.getValue()
				return r ? this._languageService.getDiagnostics(t, r).map(Lm) : []
			} catch (n) {
				return console.error(n), []
			}
		}
		async doComplete(t, n) {
			try {
				let i = this._getTextModel(t)?.getValue()
				if (!i) return []
				let s = F1(n)
				return this._languageService.getCompletion(t, i, s).map((a) => wm(a))
			} catch (r) {
				return console.error(r), []
			}
		}
		async doHover(t, n) {
			try {
				let i = this._getTextModel(t)?.getValue()
				if (!i) return null
				let s = F1(n)
				return {
					content: this._languageService.getHover(t, i, s),
					range: A1(Tu({ column: s.character, line: s.line }, i))
				}
			} catch (r) {
				return console.error(r), null
			}
		}
		async doGetVariablesJSONSchema(t) {
			let n = this._getTextModel(t),
				r = n?.getValue()
			if (!n || !r) return null
			let i = this._languageService.getVariablesJSONSchema(t, r, { useMarkdownDescription: !0 })
			return i
				? ((i.$id = 'monaco://variables-schema.json'), (i.title = 'GraphQL Variables'), i)
				: null
		}
		async doFormat(t) {
			let n = this._getTextModel(t),
				r = n?.getValue()
			if (!n || !r) return null
			let i = await Promise.resolve().then(() => (X2(), J2)),
				s = await Promise.resolve().then(() => Xu(eg()))
			return i.format(r, {
				parser: 'graphql',
				plugins: [s],
				...this._formattingOptions?.prettierConfig
			})
		}
		_getTextModel(t) {
			let n = this._ctx.getMirrorModels()
			for (let r of n) if (r.uri.toString() === t) return r
			return null
		}
		doUpdateSchema(t) {
			return this._languageService.updateSchema(t)
		}
		doUpdateSchemas(t) {
			return this._languageService.updateSchemas(t)
		}
	}
	self.onmessage = () => {
		oc((e, t) => new Gu(e, t))
	}
})()
