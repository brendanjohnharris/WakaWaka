module.exports = (function(e, t) {
  'use strict'
  var r = {***REMOVED***
  function __webpack_require__(t) {
    if (r[t]) {
      return r[t].exports
    ***REMOVED***
    var n = (r[t] = { i: t, l: false, exports: {***REMOVED*** ***REMOVED***)
    e[t].call(n.exports, n, n.exports, __webpack_require__)
    n.l = true
    return n.exports
  ***REMOVED***
  __webpack_require__.ab = __dirname + '/'
  function startup() {
    return __webpack_require__(104)
  ***REMOVED***
  return startup()
***REMOVED***)({
  0: function(e, t, r) {
    const { requestLog: n ***REMOVED*** = r(916)
    const { restEndpointMethods: i ***REMOVED*** = r(842)
    const s = r(316)
    const o = [r(190), r(19), n, r(148), i, r(430), r(850)]
    const a = s.plugin(o)
    function DeprecatedOctokit(e) {
      const t = e && e.log && e.log.warn ? e.log.warn : console.warn
      t(
        '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit ***REMOVED*** = require("@octokit/rest")` instead'
    ***REMOVED***
      return new a(e)
    ***REMOVED***
    const u = Object.assign(DeprecatedOctokit, { Octokit: a ***REMOVED***)
    Object.keys(a).forEach(e => {
      if (a.hasOwnProperty(e)) {
        u[e] = a[e]
      ***REMOVED***
    ***REMOVED***)
    e.exports = u
  ***REMOVED***,
  2: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(118)
    const s = r(49)
    const o = (e, t) => {
      if (!e && t) {
        throw new Error("You can't specify a `release` without specifying `platform`")
      ***REMOVED***
      e = e || n.platform()
      let r
      if (e === 'darwin') {
        if (!t && n.platform() === 'darwin') {
          t = n.release()
        ***REMOVED***
        const e = t ? (Number(t.split('.')[0]) > 15 ? 'macOS' : 'OS X') : 'macOS'
        r = t ? i(t).name : ''
        return e + (r ? ' ' + r : '')
      ***REMOVED***
      if (e === 'linux') {
        if (!t && n.platform() === 'linux') {
          t = n.release()
        ***REMOVED***
        r = t ? t.replace(/^(\d+\.\d+).*/, '$1') : ''
        return 'Linux' + (r ? ' ' + r : '')
      ***REMOVED***
      if (e === 'win32') {
        if (!t && n.platform() === 'win32') {
          t = n.release()
        ***REMOVED***
        r = t ? s(t) : ''
        return 'Windows' + (r ? ' ' + r : '')
      ***REMOVED***
      return e
    ***REMOVED***
    e.exports = o
  ***REMOVED***,
  9: function(e, t, r) {
    var n = r(969)
    var i = function() {***REMOVED***
    var s = function(e) {
      return e.setHeader && typeof e.abort === 'function'
    ***REMOVED***
    var o = function(e) {
      return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3
    ***REMOVED***
    var a = function(e, t, r) {
      if (typeof t === 'function') return a(e, null, t)
      if (!t) t = {***REMOVED***
      r = n(r || i)
      var u = e._writableState
      var p = e._readableState
      var c = t.readable || (t.readable !== false && e.readable)
      var d = t.writable || (t.writable !== false && e.writable)
      var l = false
      var m = function() {
        if (!e.writable) g()
      ***REMOVED***
      var g = function() {
        d = false
        if (!c) r.call(e)
      ***REMOVED***
      var h = function() {
        c = false
        if (!d) r.call(e)
      ***REMOVED***
      var y = function(t) {
        r.call(e, t ? new Error('exited with error code: ' + t) : null)
      ***REMOVED***
      var f = function(t) {
        r.call(e, t)
      ***REMOVED***
      var b = function() {
        process.nextTick(_)
      ***REMOVED***
      var _ = function() {
        if (l) return
        if (c && !(p && p.ended && !p.destroyed)) return r.call(e, new Error('premature close'))
        if (d && !(u && u.ended && !u.destroyed)) return r.call(e, new Error('premature close'))
      ***REMOVED***
      var v = function() {
        e.req.on('finish', g)
      ***REMOVED***
      if (s(e)) {
        e.on('complete', g)
        e.on('abort', b)
        if (e.req) v()
        else e.on('request', v)
      ***REMOVED*** else if (d && !u) {
        e.on('end', m)
        e.on('close', m)
      ***REMOVED***
      if (o(e)) e.on('exit', y)
      e.on('end', h)
      e.on('finish', g)
      if (t.error !== false) e.on('error', f)
      e.on('close', b)
      return function() {
        l = true
        e.removeListener('complete', g)
        e.removeListener('abort', b)
        e.removeListener('request', v)
        if (e.req) e.req.removeListener('finish', g)
        e.removeListener('end', m)
        e.removeListener('close', m)
        e.removeListener('finish', g)
        e.removeListener('exit', y)
        e.removeListener('end', h)
        e.removeListener('error', f)
        e.removeListener('close', b)
      ***REMOVED***
    ***REMOVED***
    e.exports = a
  ***REMOVED***,
  11: function(e) {
    e.exports = wrappy
    function wrappy(e, t) {
      if (e && t) return wrappy(e)(t)
      if (typeof e !== 'function') throw new TypeError('need wrapper function')
      Object.keys(e).forEach(function(t) {
        wrapper[t] = e[t]
      ***REMOVED***)
      return wrapper
      function wrapper() {
        var t = new Array(arguments.length)
        for (var r = 0; r < t.length; r++) {
          t[r] = arguments[r]
        ***REMOVED***
        var n = e.apply(this, t)
        var i = t[t.length - 1]
        if (typeof n === 'function' && n !== i) {
          Object.keys(i).forEach(function(e) {
            n[e] = i[e]
          ***REMOVED***)
        ***REMOVED***
        return n
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  18: function() {
    eval('require')('encoding')
  ***REMOVED***,
  19: function(e, t, r) {
    e.exports = authenticationPlugin
    const { Deprecation: n ***REMOVED*** = r(692)
    const i = r(969)
    const s = i((e, t) => e.warn(t))
    const o = r(674)
    const a = r(471)
    const u = r(349)
    function authenticationPlugin(e, t) {
      if (t.auth) {
        e.authenticate = () => {
          s(
            e.log,
            new n(
              '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
          ***REMOVED***
        ***REMOVED***
        ***REMOVED***
        return
      ***REMOVED***
      const r = { octokit: e, auth: false ***REMOVED***
      e.authenticate = o.bind(null, r)
      e.hook.before('request', a.bind(null, r))
      e.hook.error('request', u.bind(null, r))
    ***REMOVED***
  ***REMOVED***,
  20: function(e, t, r) {
    'use strict'
    const n = r(129)
    const i = r(568)
    const s = r(881)
    function spawn(e, t, r) {
      const o = i(e, t, r)
      const a = n.spawn(o.command, o.args, o.options)
      s.hookChildProcess(a, o)
      return a
    ***REMOVED***
    function spawnSync(e, t, r) {
      const o = i(e, t, r)
      const a = n.spawnSync(o.command, o.args, o.options)
      a.error = a.error || s.verifyENOENTSync(a.status, o)
      return a
    ***REMOVED***
    e.exports = spawn
    e.exports.spawn = spawn
    e.exports.sync = spawnSync
    e.exports._parse = i
    e.exports._enoent = s
  ***REMOVED***,
  25: function(e, t, r) {
    t = e.exports = createDebug.debug = createDebug['default'] = createDebug
    t.coerce = coerce
    t.disable = disable
    t.enable = enable
    t.enabled = enabled
    t.humanize = r(761)
    t.instances = []
    t.names = []
    t.skips = []
    t.formatters = {***REMOVED***
    function selectColor(e) {
      var r = 0,
        n
      for (n in e) {
        r = (r << 5) - r + e.charCodeAt(n)
        r |= 0
      ***REMOVED***
      return t.colors[Math.abs(r) % t.colors.length]
    ***REMOVED***
    function createDebug(e) {
      var r
      function debug() {
        if (!debug.enabled) return
        var e = debug
        var n = +new Date()
        var i = n - (r || n)
        e.diff = i
        e.prev = r
        e.curr = n
        r = n
        var s = new Array(arguments.length)
        for (var o = 0; o < s.length; o++) {
          s[o] = arguments[o]
        ***REMOVED***
        s[0] = t.coerce(s[0])
        if ('string' !== typeof s[0]) {
          s.unshift('%O')
        ***REMOVED***
        var a = 0
        s[0] = s[0].replace(/%([a-zA-Z%])/g, function(r, n) {
          if (r === '%%') return r
          a++
          var i = t.formatters[n]
          if ('function' === typeof i) {
            var o = s[a]
            r = i.call(e, o)
            s.splice(a, 1)
            a--
          ***REMOVED***
          return r
        ***REMOVED***)
        t.formatArgs.call(e, s)
        var u = debug.log || t.log || console.log.bind(console)
        u.apply(e, s)
      ***REMOVED***
      debug.namespace = e
      debug.enabled = t.enabled(e)
      debug.useColors = t.useColors()
      debug.color = selectColor(e)
      debug.destroy = destroy
      if ('function' === typeof t.init) {
        t.init(debug)
      ***REMOVED***
      t.instances.push(debug)
      return debug
    ***REMOVED***
    function destroy() {
      var e = t.instances.indexOf(this)
      if (e !== -1) {
        t.instances.splice(e, 1)
        return true
      ***REMOVED*** else {
        return false
      ***REMOVED***
    ***REMOVED***
    function enable(e) {
      t.save(e)
      t.names = []
      t.skips = []
      var r
      var n = (typeof e === 'string' ? e : '').split(/[\s,]+/)
      var i = n.length
      for (r = 0; r < i; r++) {
        if (!n[r]) continue
        e = n[r].replace(/\*/g, '.*?')
        if (e[0] === '-') {
          t.skips.push(new RegExp('^' + e.substr(1) + '$'))
        ***REMOVED*** else {
          t.names.push(new RegExp('^' + e + '$'))
        ***REMOVED***
      ***REMOVED***
      for (r = 0; r < t.instances.length; r++) {
        var s = t.instances[r]
        s.enabled = t.enabled(s.namespace)
      ***REMOVED***
    ***REMOVED***
    function disable() {
      t.enable('')
    ***REMOVED***
    function enabled(e) {
      if (e[e.length - 1] === '*') {
        return true
      ***REMOVED***
      var r, n
      for (r = 0, n = t.skips.length; r < n; r++) {
        if (t.skips[r].test(e)) {
          return false
        ***REMOVED***
      ***REMOVED***
      for (r = 0, n = t.names.length; r < n; r++) {
        if (t.names[r].test(e)) {
          return true
        ***REMOVED***
      ***REMOVED***
      return false
    ***REMOVED***
    function coerce(e) {
      if (e instanceof Error) return e.stack || e.message
      return e
    ***REMOVED***
  ***REMOVED***,
  26: function(e, t, r) {
    'use strict'
    var n = r(369)
    e.exports = function createError(e, t, r, i, s) {
      var o = new Error(e)
      return n(o, t, r, i, s)
    ***REMOVED***
  ***REMOVED***,
  35: function(e, t, r) {
    'use strict'
    var n = r(727)
    var i = r(812)
    var s = Object.prototype.toString
    function isArray(e) {
      return s.call(e) === '[object Array]'
    ***REMOVED***
    function isArrayBuffer(e) {
      return s.call(e) === '[object ArrayBuffer]'
    ***REMOVED***
    function isFormData(e) {
      return typeof FormData !== 'undefined' && e instanceof FormData
    ***REMOVED***
    function isArrayBufferView(e) {
      var t
      if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        t = ArrayBuffer.isView(e)
      ***REMOVED*** else {
        t = e && e.buffer && e.buffer instanceof ArrayBuffer
      ***REMOVED***
      return t
    ***REMOVED***
    function isString(e) {
      return typeof e === 'string'
    ***REMOVED***
    function isNumber(e) {
      return typeof e === 'number'
    ***REMOVED***
    function isUndefined(e) {
      return typeof e === 'undefined'
    ***REMOVED***
    function isObject(e) {
      return e !== null && typeof e === 'object'
    ***REMOVED***
    function isDate(e) {
      return s.call(e) === '[object Date]'
    ***REMOVED***
    function isFile(e) {
      return s.call(e) === '[object File]'
    ***REMOVED***
    function isBlob(e) {
      return s.call(e) === '[object Blob]'
    ***REMOVED***
    function isFunction(e) {
      return s.call(e) === '[object Function]'
    ***REMOVED***
    function isStream(e) {
      return isObject(e) && isFunction(e.pipe)
    ***REMOVED***
    function isURLSearchParams(e) {
      return typeof URLSearchParams !== 'undefined' && e instanceof URLSearchParams
    ***REMOVED***
    function trim(e) {
      return e.replace(/^\s*/, '').replace(/\s*$/, '')
    ***REMOVED***
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
        return false
      ***REMOVED***
      return typeof window !== 'undefined' && typeof document !== 'undefined'
    ***REMOVED***
    function forEach(e, t) {
      if (e === null || typeof e === 'undefined') {
        return
      ***REMOVED***
      if (typeof e !== 'object') {
        e = [e]
      ***REMOVED***
      if (isArray(e)) {
        for (var r = 0, n = e.length; r < n; r++) {
          t.call(null, e[r], r, e)
        ***REMOVED***
      ***REMOVED*** else {
        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t.call(null, e[i], i, e)
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    function merge() {
      var e = {***REMOVED***
      function assignValue(t, r) {
        if (typeof e[r] === 'object' && typeof t === 'object') {
          e[r] = merge(e[r], t)
        ***REMOVED*** else {
          e[r] = t
        ***REMOVED***
      ***REMOVED***
      for (var t = 0, r = arguments.length; t < r; t++) {
        forEach(arguments[t], assignValue)
      ***REMOVED***
      return e
    ***REMOVED***
    function extend(e, t, r) {
      forEach(t, function assignValue(t, i) {
        if (r && typeof t === 'function') {
          e[i] = n(t, r)
        ***REMOVED*** else {
          e[i] = t
        ***REMOVED***
      ***REMOVED***)
      return e
    ***REMOVED***
    e.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: i,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim
    ***REMOVED***
  ***REMOVED***,
  39: function(e) {
    'use strict'
    e.exports = e => {
      e = e || {***REMOVED***
      const t = e.env || process.env
      const r = e.platform || process.platform
      if (r !== 'win32') {
        return 'PATH'
      ***REMOVED***
      return Object.keys(t).find(e => e.toUpperCase() === 'PATH') || 'Path'
    ***REMOVED***
  ***REMOVED***,
  47: function(e, t, r) {
    e.exports = factory
    const n = r(402)
    const i = r(855)
    function factory(e) {
      const t = n.bind(null, e || [])
      t.plugin = i.bind(null, e || [])
      return t
    ***REMOVED***
  ***REMOVED***,
  49: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(955)
    const s = new Map([
      ['10.0', '10'],
      ['6.3', '8.1'],
      ['6.2', '8'],
      ['6.1', '7'],
      ['6.0', 'Vista'],
      ['5.2', 'Server 2003'],
      ['5.1', 'XP'],
      ['5.0', '2000'],
      ['4.9', 'ME'],
      ['4.1', '98'],
      ['4.0', '95']
    ])
    const o = e => {
      const t = /\d+\.\d/.exec(e || n.release())
      if (e && !t) {
        throw new Error("`release` argument doesn't match `n.n`")
      ***REMOVED***
      const r = (t || [])[0]
      if ((!e || e === n.release()) && ['6.1', '6.2', '6.3', '10.0'].includes(r)) {
        const e = i.sync('wmic', ['os', 'get', 'Caption']).stdout || ''
        const t = (e.match(/2008|2012|2016/) || [])[0]
        if (t) {
          return `Server ${t***REMOVED***`
        ***REMOVED***
      ***REMOVED***
      return s.get(r)
    ***REMOVED***
    e.exports = o
  ***REMOVED***,
  53: function(e, t, r) {
    e.exports = r(352)
  ***REMOVED***,
  63: function(e, t, r) {
    const n = r(747)
    const i = r(622)
    function log(e) {
      console.log(`[dotenv][DEBUG] ${e***REMOVED***`)
    ***REMOVED***
    const s = '\n'
    const o = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
    const a = /\\n/g
    function parse(e, t) {
      const r = Boolean(t && t.debug)
      const n = {***REMOVED***
      e.toString()
        .split(s)
        .forEach(function(e, t) {
          const i = e.match(o)
          if (i != null) {
            const e = i[1]
            let t = i[2] || ''
            const r = t.length - 1
            const o = t[0] === '"' && t[r] === '"'
            const u = t[0] === "'" && t[r] === "'"
            if (u || o) {
              t = t.substring(1, r)
              if (o) {
                t = t.replace(a, s)
              ***REMOVED***
            ***REMOVED*** else {
              t = t.trim()
            ***REMOVED***
            n[e] = t
          ***REMOVED*** else if (r) {
            log(`did not match key and value when parsing line ${t + 1***REMOVED***: ${e***REMOVED***`)
          ***REMOVED***
        ***REMOVED***)
      return n
    ***REMOVED***
    function config(e) {
      let t = i.resolve(process.cwd(), '.env')
      let r = 'utf8'
      let s = false
      if (e) {
        if (e.path != null) {
          t = e.path
        ***REMOVED***
        if (e.encoding != null) {
          r = e.encoding
        ***REMOVED***
        if (e.debug != null) {
          s = true
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
        const e = parse(n.readFileSync(t, { encoding: r ***REMOVED***), { debug: s ***REMOVED***)
        Object.keys(e).forEach(function(t) {
          if (!process.env.hasOwnProperty(t)) {
            process.env[t] = e[t]
          ***REMOVED*** else if (s) {
            log(`"${t***REMOVED***" is already defined in \`process.env\` and will not be overwritten`)
          ***REMOVED***
        ***REMOVED***)
        return { parsed: e ***REMOVED***
      ***REMOVED*** catch (e) {
        return { error: e ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    e.exports.config = config
    e.exports.parse = parse
  ***REMOVED***,
  81: function(e, t, r) {
    var n = r(867)
    var i = r(669)
    t = e.exports = r(25)
    t.init = init
    t.log = log
    t.formatArgs = formatArgs
    t.save = save
    t.load = load
    t.useColors = useColors
    t.colors = [6, 2, 3, 4, 5, 1]
  ***REMOVED***
      var s = r(247)
      if (s && s.level >= 2) {
        t.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ]
      ***REMOVED***
    ***REMOVED*** catch (e) {***REMOVED***
    t.inspectOpts = Object.keys(process.env)
      .filter(function(e) {
        return /^debug_/i.test(e)
      ***REMOVED***)
      .reduce(function(e, t) {
        var r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, function(e, t) {
            return t.toUpperCase()
          ***REMOVED***)
        var n = process.env[t]
        if (/^(yes|on|true|enabled)$/i.test(n)) n = true
        else if (/^(no|off|false|disabled)$/i.test(n)) n = false
        else if (n === 'null') n = null
        else n = Number(n)
        e[r] = n
        return e
      ***REMOVED***, {***REMOVED***)
    function useColors() {
      return 'colors' in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd)
    ***REMOVED***
    t.formatters.o = function(e) {
      this.inspectOpts.colors = this.useColors
      return i
        .inspect(e, this.inspectOpts)
        .split('\n')
        .map(function(e) {
          return e.trim()
        ***REMOVED***)
        .join(' ')
    ***REMOVED***
    t.formatters.O = function(e) {
      this.inspectOpts.colors = this.useColors
      return i.inspect(e, this.inspectOpts)
    ***REMOVED***
    function formatArgs(e) {
      var r = this.namespace
      var n = this.useColors
      if (n) {
        var i = this.color
        var s = '[3' + (i < 8 ? i : '8;5;' + i)
        var o = '  ' + s + ';1m' + r + ' ' + '[0m'
        e[0] = o + e[0].split('\n').join('\n' + o)
        e.push(s + 'm+' + t.humanize(this.diff) + '[0m')
      ***REMOVED*** else {
        e[0] = getDate() + r + ' ' + e[0]
      ***REMOVED***
    ***REMOVED***
    function getDate() {
      if (t.inspectOpts.hideDate) {
        return ''
      ***REMOVED*** else {
        return new Date().toISOString() + ' '
      ***REMOVED***
    ***REMOVED***
    function log() {
      return process.stderr.write(i.format.apply(i, arguments) + '\n')
    ***REMOVED***
    function save(e) {
      if (null == e) {
        delete process.env.DEBUG
      ***REMOVED*** else {
        process.env.DEBUG = e
      ***REMOVED***
    ***REMOVED***
    function load() {
      return process.env.DEBUG
    ***REMOVED***
    function init(e) {
      e.inspectOpts = {***REMOVED***
      var r = Object.keys(t.inspectOpts)
      for (var n = 0; n < r.length; n++) {
        e.inspectOpts[r[n]] = t.inspectOpts[r[n]]
      ***REMOVED***
    ***REMOVED***
    t.enable(load())
  ***REMOVED***,
  87: function(e) {
    e.exports = require('os')
  ***REMOVED***,
  104: function(e, t, r) {
    r(63).config()
    const { WakaTimeClient: n, RANGE: i ***REMOVED*** = r(650)
    const s = r(629)
    const { Octokit: o ***REMOVED*** = r(0)
    const a = r(53)
    const { WAKATIME_API_KEY: u, GH_TOKEN: p, GIST_ID: c, SCU_KEY: d ***REMOVED*** = process.env
    const l = 'https://wakatime.com/api/v1'
    const m = `${l***REMOVED***/users/current/summaries`
    const g = `https://sc.ftqq.com/`
    const h = new n(u)
    const y = new o({ auth: `token ${p***REMOVED***` ***REMOVED***)
    ***REMOVED***
      const e = s()
        .subtract(1, 'day')
        .format('YYYY-MM-DD')
    ***REMOVED***
        const t = await getMySummary(e)
        await updateGist(e, t.data)
        await sendMessageToWechat(`[${e***REMOVED***]wakatime data update successfully!`)
        console.log(`[${e***REMOVED***]wakatime data update successfully!`)
      ***REMOVED*** catch (t) {
        console.error(`Unable to fetch wakatime summary\n ${t***REMOVED*** `)
        await sendMessageToWechat(`[${e***REMOVED***]failed to update wakatime data!`)
      ***REMOVED***
    ***REMOVED***
    function getMySummary(e) {
      return a.get(m, { params: { start: e, end: e, api_key: u ***REMOVED*** ***REMOVED***).then(e => e.data)
    ***REMOVED***
    async function updateGist(e, t) {
      const r = ''
    ***REMOVED***
        await y.gists.update({
          gist_id: c,
          files: { [`summaries_${e***REMOVED***.json`]: { content: JSON.stringify(t) ***REMOVED*** ***REMOVED***
        ***REMOVED***)
      ***REMOVED*** catch (e) {
        console.error(`Unable to update gist \n ${e***REMOVED***`)
      ***REMOVED***
    ***REMOVED***
    async function sendMessageToWechat(e, t) {
      if (typeof d !== 'undefined') {
        return a.get(`${g***REMOVED***${d***REMOVED***.send`, { params: { text: e, desp: t ***REMOVED*** ***REMOVED***).then(e => e.data)
      ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  118: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = new Map([
      [19, 'Catalina'],
      [18, 'Mojave'],
      [17, 'High Sierra'],
      [16, 'Sierra'],
      [15, 'El Capitan'],
      [14, 'Yosemite'],
      [13, 'Mavericks'],
      [12, 'Mountain Lion'],
      [11, 'Lion'],
      [10, 'Snow Leopard'],
      [9, 'Leopard'],
      [8, 'Tiger'],
      [7, 'Panther'],
      [6, 'Jaguar'],
      [5, 'Puma']
    ])
    const s = e => {
      e = Number((e || n.release()).split('.')[0])
      return { name: i.get(e), version: '10.' + (e - 4) ***REMOVED***
    ***REMOVED***
    e.exports = s
    e.exports.default = s
  ***REMOVED***,
  126: function(e) {
    var t = 200
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0
    var i = '[object Function]',
      s = '[object GeneratorFunction]'
    var o = /[\\^$.*+?()[\]{***REMOVED***|]/g
    var a = /^\[object .+?Constructor\]$/
    var u = typeof global == 'object' && global && global.Object === Object && global
    var p = typeof self == 'object' && self && self.Object === Object && self
    var c = u || p || Function('return this')()
    function arrayIncludes(e, t) {
      var r = e ? e.length : 0
      return !!r && baseIndexOf(e, t, 0) > -1
    ***REMOVED***
    function arrayIncludesWith(e, t, r) {
      var n = -1,
        i = e ? e.length : 0
      while (++n < i) {
        if (r(t, e[n])) {
          return true
        ***REMOVED***
      ***REMOVED***
      return false
    ***REMOVED***
    function baseFindIndex(e, t, r, n) {
      var i = e.length,
        s = r + (n ? 1 : -1)
      while (n ? s-- : ++s < i) {
        if (t(e[s], s, e)) {
          return s
        ***REMOVED***
      ***REMOVED***
      return -1
    ***REMOVED***
    function baseIndexOf(e, t, r) {
      if (t !== t) {
        return baseFindIndex(e, baseIsNaN, r)
      ***REMOVED***
      var n = r - 1,
        i = e.length
      while (++n < i) {
        if (e[n] === t) {
          return n
        ***REMOVED***
      ***REMOVED***
      return -1
    ***REMOVED***
    function baseIsNaN(e) {
      return e !== e
    ***REMOVED***
    function cacheHas(e, t) {
      return e.has(t)
    ***REMOVED***
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    ***REMOVED***
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
      ***REMOVED***
          t = !!(e + '')
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return t
    ***REMOVED***
    function setToArray(e) {
      var t = -1,
        r = Array(e.size)
      e.forEach(function(e) {
        r[++t] = e
      ***REMOVED***)
      return r
    ***REMOVED***
    var d = Array.prototype,
      l = Function.prototype,
      m = Object.prototype
    var g = c['__core-js_shared__']
    var h = (function() {
      var e = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    ***REMOVED***)()
    var y = l.toString
    var f = m.hasOwnProperty
    var b = m.toString
    var _ = RegExp(
      '^' +
        y
          .call(f)
          .replace(o, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
  ***REMOVED***
    var v = d.splice
    var q = getNative(c, 'Map'),
      w = getNative(c, 'Set'),
      E = getNative(Object, 'create')
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function hashClear() {
      this.__data__ = E ? E(null) : {***REMOVED***
    ***REMOVED***
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    ***REMOVED***
    function hashGet(e) {
      var t = this.__data__
      if (E) {
        var n = t[e]
        return n === r ? undefined : n
      ***REMOVED***
      return f.call(t, e) ? t[e] : undefined
    ***REMOVED***
    function hashHas(e) {
      var t = this.__data__
      return E ? t[e] !== undefined : f.call(t, e)
    ***REMOVED***
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = E && t === undefined ? r : t
      return this
    ***REMOVED***
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function listCacheClear() {
      this.__data__ = []
    ***REMOVED***
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      ***REMOVED***
      var n = t.length - 1
      if (r == n) {
        t.pop()
      ***REMOVED*** else {
        v.call(t, r, 1)
      ***REMOVED***
      return true
    ***REMOVED***
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    ***REMOVED***
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    ***REMOVED***
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      ***REMOVED*** else {
        r[n][1] = t
      ***REMOVED***
      return this
    ***REMOVED***
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (q || ListCache)(), string: new Hash() ***REMOVED***
    ***REMOVED***
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    ***REMOVED***
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    ***REMOVED***
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    ***REMOVED***
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    ***REMOVED***
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function SetCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.__data__ = new MapCache()
      while (++t < r) {
        this.add(e[t])
      ***REMOVED***
    ***REMOVED***
    function setCacheAdd(e) {
      this.__data__.set(e, r)
      return this
    ***REMOVED***
    function setCacheHas(e) {
      return this.__data__.has(e)
    ***REMOVED***
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
    SetCache.prototype.has = setCacheHas
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        ***REMOVED***
      ***REMOVED***
      return -1
    ***REMOVED***
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      ***REMOVED***
      var t = isFunction(e) || isHostObject(e) ? _ : a
      return t.test(toSource(e))
    ***REMOVED***
    function baseUniq(e, r, n) {
      var i = -1,
        s = arrayIncludes,
        o = e.length,
        a = true,
        u = [],
        p = u
      if (n) {
        a = false
        s = arrayIncludesWith
      ***REMOVED*** else if (o >= t) {
        var c = r ? null : T(e)
        if (c) {
          return setToArray(c)
        ***REMOVED***
        a = false
        s = cacheHas
        p = new SetCache()
      ***REMOVED*** else {
        p = r ? [] : u
      ***REMOVED***
      e: while (++i < o) {
        var d = e[i],
          l = r ? r(d) : d
        d = n || d !== 0 ? d : 0
        if (a && l === l) {
          var m = p.length
          while (m--) {
            if (p[m] === l) {
              continue e
            ***REMOVED***
          ***REMOVED***
          if (r) {
            p.push(l)
          ***REMOVED***
          u.push(d)
        ***REMOVED*** else if (!s(p, l, n)) {
          if (p !== u) {
            p.push(l)
          ***REMOVED***
          u.push(d)
        ***REMOVED***
      ***REMOVED***
      return u
    ***REMOVED***
    var T = !(w && 1 / setToArray(new w([, -0]))[1] == n)
      ? noop
      : function(e) {
          return new w(e)
        ***REMOVED***
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    ***REMOVED***
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    ***REMOVED***
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    ***REMOVED***
    function isMasked(e) {
      return !!h && h in e
    ***REMOVED***
    function toSource(e) {
      if (e != null) {
      ***REMOVED***
          return y.call(e)
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
          return e + ''
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return ''
    ***REMOVED***
    function uniq(e) {
      return e && e.length ? baseUniq(e) : []
    ***REMOVED***
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    ***REMOVED***
    function isFunction(e) {
      var t = isObject(e) ? b.call(e) : ''
      return t == i || t == s
    ***REMOVED***
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    ***REMOVED***
    function noop() {***REMOVED***
    e.exports = uniq
  ***REMOVED***,
  129: function(e) {
    e.exports = require('child_process')
  ***REMOVED***,
  133: function(e, t, r) {
    'use strict'
    var n = r(35)
    function encode(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    ***REMOVED***
    e.exports = function buildURL(e, t, r) {
      if (!t) {
        return e
      ***REMOVED***
      var i
      if (r) {
        i = r(t)
      ***REMOVED*** else if (n.isURLSearchParams(t)) {
        i = t.toString()
      ***REMOVED*** else {
        var s = []
        n.forEach(t, function serialize(e, t) {
          if (e === null || typeof e === 'undefined') {
            return
          ***REMOVED***
          if (n.isArray(e)) {
            t = t + '[]'
          ***REMOVED*** else {
            e = [e]
          ***REMOVED***
          n.forEach(e, function parseValue(e) {
            if (n.isDate(e)) {
              e = e.toISOString()
            ***REMOVED*** else if (n.isObject(e)) {
              e = JSON.stringify(e)
            ***REMOVED***
            s.push(encode(t) + '=' + encode(e))
          ***REMOVED***)
        ***REMOVED***)
        i = s.join('&')
      ***REMOVED***
      if (i) {
        e += (e.indexOf('?') === -1 ? '?' : '&') + i
      ***REMOVED***
      return e
    ***REMOVED***
  ***REMOVED***,
  137: function(e, t, r) {
    'use strict'
    var n = r(826)
    function CancelToken(e) {
      if (typeof e !== 'function') {
        throw new TypeError('executor must be a function.')
      ***REMOVED***
      var t
      this.promise = new Promise(function promiseExecutor(e) {
        t = e
      ***REMOVED***)
      var r = this
      e(function cancel(e) {
        if (r.reason) {
          return
        ***REMOVED***
        r.reason = new n(e)
        t(r.reason)
      ***REMOVED***)
    ***REMOVED***
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason
      ***REMOVED***
    ***REMOVED***
    CancelToken.source = function source() {
      var e
      var t = new CancelToken(function executor(t) {
        e = t
      ***REMOVED***)
      return { token: t, cancel: e ***REMOVED***
    ***REMOVED***
    e.exports = CancelToken
  ***REMOVED***,
  143: function(e, t, r) {
    e.exports = withAuthorizationPrefix
    const n = r(368)
    const i = /^[\w-]+:/
    function withAuthorizationPrefix(e) {
      if (/^(basic|bearer|token) /i.test(e)) {
        return e
      ***REMOVED***
    ***REMOVED***
        if (i.test(n(e))) {
          return `basic ${e***REMOVED***`
        ***REMOVED***
      ***REMOVED*** catch (e) {***REMOVED***
      if (e.split(/\./).length === 3) {
        return `bearer ${e***REMOVED***`
      ***REMOVED***
      return `token ${e***REMOVED***`
    ***REMOVED***
  ***REMOVED***,
  145: function(e, t, r) {
    'use strict'
    const n = r(453)
    const i = r(966)
    class MaxBufferError extends Error {
      constructor() {
        super('maxBuffer exceeded')
        this.name = 'MaxBufferError'
      ***REMOVED***
    ***REMOVED***
    function getStream(e, t) {
      if (!e) {
        return Promise.reject(new Error('Expected a stream'))
      ***REMOVED***
      t = Object.assign({ maxBuffer: Infinity ***REMOVED***, t)
      const { maxBuffer: r ***REMOVED*** = t
      let s
      return new Promise((o, a) => {
        const u = e => {
          if (e) {
            e.bufferedData = s.getBufferedValue()
          ***REMOVED***
          a(e)
        ***REMOVED***
        s = n(e, i(t), e => {
          if (e) {
            u(e)
            return
          ***REMOVED***
          o()
        ***REMOVED***)
        s.on('data', () => {
          if (s.getBufferedLength() > r) {
            u(new MaxBufferError())
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***).then(() => s.getBufferedValue())
    ***REMOVED***
    e.exports = getStream
    e.exports.buffer = (e, t) => getStream(e, Object.assign({***REMOVED***, t, { encoding: 'buffer' ***REMOVED***))
    e.exports.array = (e, t) => getStream(e, Object.assign({***REMOVED***, t, { array: true ***REMOVED***))
    e.exports.MaxBufferError = MaxBufferError
  ***REMOVED***,
  148: function(e, t, r) {
    e.exports = paginatePlugin
    const { paginateRest: n ***REMOVED*** = r(299)
    function paginatePlugin(e) {
      Object.assign(e, n(e))
    ***REMOVED***
  ***REMOVED***,
  168: function(e) {
    'use strict'
    const t = ['stdin', 'stdout', 'stderr']
    const r = e => t.some(t => Boolean(e[t]))
    e.exports = e => {
      if (!e) {
    ***REMOVED***
      ***REMOVED***
      if (e.stdio && r(e)) {
        throw new Error(
          `It's not possible to provide \`stdio\` in combination with one of ${t
            .map(e => `\`${e***REMOVED***\``)
            .join(', ')***REMOVED***`
      ***REMOVED***
      ***REMOVED***
      if (typeof e.stdio === 'string') {
        return e.stdio
      ***REMOVED***
      const n = e.stdio || []
      if (!Array.isArray(n)) {
        throw new TypeError(
          `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n***REMOVED***\``
      ***REMOVED***
      ***REMOVED***
      const i = []
      const s = Math.max(n.length, t.length)
      for (let r = 0; r < s; r++) {
        let s = null
        if (n[r] !== undefined) {
          s = n[r]
        ***REMOVED*** else if (e[t[r]] !== undefined) {
          s = e[t[r]]
        ***REMOVED***
        i[r] = s
      ***REMOVED***
      return i
    ***REMOVED***
  ***REMOVED***,
  190: function(e, t, r) {
    e.exports = authenticationPlugin
    const { createTokenAuth: n ***REMOVED*** = r(813)
    const { Deprecation: i ***REMOVED*** = r(692)
    const s = r(969)
    const o = r(863)
    const a = r(293)
    const u = r(954)
    const p = r(143)
    const c = s((e, t) => e.warn(t))
    const d = s((e, t) => e.warn(t))
    function authenticationPlugin(e, t) {
      if (t.authStrategy) {
        const r = t.authStrategy(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      ***REMOVED***
      if (!t.auth) {
        e.auth = () => Promise.resolve({ type: 'unauthenticated' ***REMOVED***)
        return
      ***REMOVED***
      const r = typeof t.auth === 'string' && /^basic/.test(p(t.auth))
      if (typeof t.auth === 'string' && !r) {
        const r = n(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      ***REMOVED***
      const [s, l] = r
        ? [
            c,
            'Setting the "new Octokit({ auth ***REMOVED***)" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)'
          ]
        : [
            d,
            'Setting the "new Octokit({ auth ***REMOVED***)" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
          ]
      s(e.log, new i('[@octokit/rest] ' + l))
      e.auth = () => Promise.resolve({ type: 'deprecated', message: l ***REMOVED***)
      u(t.auth)
      const m = { octokit: e, auth: t.auth ***REMOVED***
      e.hook.before('request', o.bind(null, m))
      e.hook.error('request', a.bind(null, m))
    ***REMOVED***
  ***REMOVED***,
  197: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var n = r(747)
    function isexe(e, t, r) {
      n.stat(e, function(e, n) {
        r(e, e ? false : checkStat(n, t))
      ***REMOVED***)
    ***REMOVED***
    function sync(e, t) {
      return checkStat(n.statSync(e), t)
    ***REMOVED***
    function checkStat(e, t) {
      return e.isFile() && checkMode(e, t)
    ***REMOVED***
    function checkMode(e, t) {
      var r = e.mode
      var n = e.uid
      var i = e.gid
      var s = t.uid !== undefined ? t.uid : process.getuid && process.getuid()
      var o = t.gid !== undefined ? t.gid : process.getgid && process.getgid()
      var a = parseInt('100', 8)
      var u = parseInt('010', 8)
      var p = parseInt('001', 8)
      var c = a | u
      var d = r & p || (r & u && i === o) || (r & a && n === s) || (r & c && s === 0)
      return d
    ***REMOVED***
  ***REMOVED***,
  211: function(e) {
    e.exports = require('https')
  ***REMOVED***,
  215: function(e) {
    e.exports = {
      _from: '@octokit/rest@16.43.1',
      _id: '@octokit/rest@16.43.1',
      _inBundle: false,
      _integrity:
        'sha512-gfFKwRT/wFxq5qlNjnW2dh+qh74XgTQ2B179UX5K1HYCluioWj8Ndbgqw2PVqa1NnVJkGHp2ovMpVn/DImlmkw==',
      _location: '/@octokit/rest',
      _phantomChildren: {***REMOVED***,
      _requested: {
        type: 'version',
        registry: true,
        raw: '@octokit/rest@16.43.1',
        name: '@octokit/rest',
        escapedName: '@octokit%2frest',
        scope: '@octokit',
        rawSpec: '16.43.1',
        saveSpec: null,
        fetchSpec: '16.43.1'
      ***REMOVED***,
      _requiredBy: ['/'],
      _resolved: 'https://npm.hypers.cc/@octokit%2frest/-/rest-16.43.1.tgz',
      _shasum: '3b11e7d1b1ac2bbeeb23b08a17df0b20947eda6b',
      _spec: '@octokit/rest@16.43.1',
      _where: '/Users/yons/Developer/projects/wakatime-sync',
      author: { name: 'Gregor Martynus', url: 'https://github.com/gr2m' ***REMOVED***,
      bugs: { url: 'https://github.com/octokit/rest.js/issues' ***REMOVED***,
      bundleDependencies: false,
      bundlesize: [{ path: './dist/octokit-rest.min.js.gz', maxSize: '33 kB' ***REMOVED***],
      contributors: [
        { name: 'Mike de Boer', email: 'info@mikedeboer.nl' ***REMOVED***,
        { name: 'Fabian Jakobs', email: 'fabian@c9.io' ***REMOVED***,
        { name: 'Joe Gallo', email: 'joe@brassafrax.com' ***REMOVED***,
        { name: 'Gregor Martynus', url: 'https://github.com/gr2m' ***REMOVED***
      ],
      dependencies: {
        '@octokit/auth-token': '^2.4.0',
        '@octokit/plugin-paginate-rest': '^1.1.1',
        '@octokit/plugin-request-log': '^1.0.0',
        '@octokit/plugin-rest-endpoint-methods': '2.4.0',
        '@octokit/request': '^5.2.0',
        '@octokit/request-error': '^1.0.2',
        'atob-lite': '^2.0.0',
        'before-after-hook': '^2.0.0',
        'btoa-lite': '^1.0.0',
        deprecation: '^2.0.0',
        'lodash.get': '^4.4.2',
        'lodash.set': '^4.3.2',
        'lodash.uniq': '^4.5.0',
        'octokit-pagination-methods': '^1.1.0',
        once: '^1.4.0',
        'universal-user-agent': '^4.0.0'
      ***REMOVED***,
      deprecated: false,
      description: 'GitHub REST API client for Node.js',
      devDependencies: {
        '@gimenete/type-writer': '^0.1.3',
        '@octokit/auth': '^1.1.1',
        '@octokit/fixtures-server': '^5.0.6',
        '@octokit/graphql': '^4.2.0',
        '@types/node': '^13.1.0',
        bundlesize: '^0.18.0',
        chai: '^4.1.2',
        'compression-webpack-plugin': '^3.1.0',
        cypress: '^3.0.0',
        glob: '^7.1.2',
        'http-proxy-agent': '^4.0.0',
        'lodash.camelcase': '^4.3.0',
        'lodash.merge': '^4.6.1',
        'lodash.upperfirst': '^4.3.1',
        lolex: '^5.1.2',
        mkdirp: '^1.0.0',
        mocha: '^7.0.1',
        mustache: '^4.0.0',
        nock: '^11.3.3',
        'npm-run-all': '^4.1.2',
        nyc: '^15.0.0',
        prettier: '^1.14.2',
        proxy: '^1.0.0',
        'semantic-release': '^17.0.0',
        sinon: '^8.0.0',
        'sinon-chai': '^3.0.0',
        'sort-keys': '^4.0.0',
        'string-to-arraybuffer': '^1.0.0',
        'string-to-jsdoc-comment': '^1.0.0',
        typescript: '^3.3.1',
        webpack: '^4.0.0',
        'webpack-bundle-analyzer': '^3.0.0',
        'webpack-cli': '^3.0.0'
      ***REMOVED***,
      files: ['index.js', 'index.d.ts', 'lib', 'plugins'],
      homepage: 'https://github.com/octokit/rest.js#readme',
      keywords: ['octokit', 'github', 'rest', 'api-client'],
      license: 'MIT',
      name: '@octokit/rest',
      nyc: { ignore: ['test'] ***REMOVED***,
      publishConfig: { access: 'public' ***REMOVED***,
      release: {
        publish: [
          '@semantic-release/npm',
          { path: '@semantic-release/github', assets: ['dist/*', '!dist/*.map.gz'] ***REMOVED***
        ]
      ***REMOVED***,
      repository: { type: 'git', url: 'git+https://github.com/octokit/rest.js.git' ***REMOVED***,
      scripts: {
        build: 'npm-run-all build:*',
        'build:browser': 'npm-run-all build:browser:*',
        'build:browser:development':
          'webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json',
        'build:browser:production':
          'webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map',
        'build:ts': 'npm run -s update-endpoints:typescript',
        coverage: 'nyc report --reporter=html && open coverage/index.html',
        'generate-bundle-report':
          'webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html',
        lint:
          "prettier --check '{lib,plugins,scripts,test***REMOVED***/**/*.{js,json,ts***REMOVED***' 'docs/*.{js,json***REMOVED***' 'docs/src/**/*' index.js README.md package.json",
        'lint:fix':
          "prettier --write '{lib,plugins,scripts,test***REMOVED***/**/*.{js,json,ts***REMOVED***' 'docs/*.{js,json***REMOVED***' 'docs/src/**/*' index.js README.md package.json",
        'postvalidate:ts': 'tsc --noEmit --target es6 test/typescript-validate.ts',
        'prebuild:browser': 'mkdirp dist/',
        pretest: 'npm run -s lint',
        'prevalidate:ts': 'npm run -s build:ts',
        'start-fixtures-server': 'octokit-fixtures-server',
        test: 'nyc mocha test/mocha-node-setup.js "test/*/**/*-test.js"',
        'test:browser': 'cypress run --browser chrome',
        'update-endpoints': 'npm-run-all update-endpoints:*',
        'update-endpoints:fetch-json': 'node scripts/update-endpoints/fetch-json',
        'update-endpoints:typescript': 'node scripts/update-endpoints/typescript',
        'validate:ts': 'tsc --target es6 --noImplicitAny index.d.ts'
      ***REMOVED***,
      types: 'index.d.ts',
      version: '16.43.1'
    ***REMOVED***
  ***REMOVED***,
  219: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(564)
    var s = r(133)
    var o = r(631)
    var a = r(688)
    var u = r(26)
    e.exports = function xhrAdapter(e) {
      return new Promise(function dispatchXhrRequest(t, p) {
        var c = e.data
        var d = e.headers
        if (n.isFormData(c)) {
          delete d['Content-Type']
        ***REMOVED***
        var l = new XMLHttpRequest()
        if (e.auth) {
          var m = e.auth.username || ''
          var g = e.auth.password || ''
          d.Authorization = 'Basic ' + btoa(m + ':' + g)
        ***REMOVED***
        l.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), true)
        l.timeout = e.timeout
        l.onreadystatechange = function handleLoad() {
          if (!l || l.readyState !== 4) {
            return
          ***REMOVED***
          if (l.status === 0 && !(l.responseURL && l.responseURL.indexOf('file:') === 0)) {
            return
          ***REMOVED***
          var r = 'getAllResponseHeaders' in l ? o(l.getAllResponseHeaders()) : null
          var n = !e.responseType || e.responseType === 'text' ? l.responseText : l.response
          var s = {
            data: n,
            status: l.status,
            statusText: l.statusText,
            headers: r,
            config: e,
            request: l
          ***REMOVED***
          i(t, p, s)
          l = null
        ***REMOVED***
        l.onerror = function handleError() {
          p(u('Network Error', e, null, l))
          l = null
        ***REMOVED***
        l.ontimeout = function handleTimeout() {
          p(u('timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', l))
          l = null
        ***REMOVED***
        if (n.isStandardBrowserEnv()) {
          var h = r(864)
          var y =
            (e.withCredentials || a(e.url)) && e.xsrfCookieName
              ? h.read(e.xsrfCookieName)
              : undefined
          if (y) {
            d[e.xsrfHeaderName] = y
          ***REMOVED***
        ***REMOVED***
        if ('setRequestHeader' in l) {
          n.forEach(d, function setRequestHeader(e, t) {
            if (typeof c === 'undefined' && t.toLowerCase() === 'content-type') {
              delete d[t]
            ***REMOVED*** else {
              l.setRequestHeader(t, e)
            ***REMOVED***
          ***REMOVED***)
        ***REMOVED***
        if (e.withCredentials) {
          l.withCredentials = true
        ***REMOVED***
        if (e.responseType) {
        ***REMOVED***
            l.responseType = e.responseType
          ***REMOVED*** catch (t) {
            if (e.responseType !== 'json') {
              throw t
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        if (typeof e.onDownloadProgress === 'function') {
          l.addEventListener('progress', e.onDownloadProgress)
        ***REMOVED***
        if (typeof e.onUploadProgress === 'function' && l.upload) {
          l.upload.addEventListener('progress', e.onUploadProgress)
        ***REMOVED***
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (!l) {
              return
            ***REMOVED***
            l.abort()
            p(e)
            l = null
          ***REMOVED***)
        ***REMOVED***
        if (c === undefined) {
          c = null
        ***REMOVED***
        l.send(c)
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  247: function(e, t, r) {
    'use strict'
    const n = r(87)
    const i = r(364)
    const s = process.env
    let o
    if (i('no-color') || i('no-colors') || i('color=false')) {
      o = false
    ***REMOVED*** else if (i('color') || i('colors') || i('color=true') || i('color=always')) {
      o = true
    ***REMOVED***
    if ('FORCE_COLOR' in s) {
      o = s.FORCE_COLOR.length === 0 || parseInt(s.FORCE_COLOR, 10) !== 0
    ***REMOVED***
    function translateLevel(e) {
      if (e === 0) {
        return false
      ***REMOVED***
      return { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 ***REMOVED***
    ***REMOVED***
    function supportsColor(e) {
      if (o === false) {
        return 0
      ***REMOVED***
      if (i('color=16m') || i('color=full') || i('color=truecolor')) {
        return 3
      ***REMOVED***
      if (i('color=256')) {
        return 2
      ***REMOVED***
      if (e && !e.isTTY && o !== true) {
        return 0
      ***REMOVED***
      const t = o ? 1 : 0
      if (process.platform === 'win32') {
        const e = n.release().split('.')
        if (
          Number(process.versions.node.split('.')[0]) >= 8 &&
          Number(e[0]) >= 10 &&
          Number(e[2]) >= 10586
      ***REMOVED*** {
          return Number(e[2]) >= 14931 ? 3 : 2
        ***REMOVED***
        return 1
      ***REMOVED***
      if ('CI' in s) {
        if (
          ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(e => e in s) ||
          s.CI_NAME === 'codeship'
      ***REMOVED*** {
          return 1
        ***REMOVED***
        return t
      ***REMOVED***
      if ('TEAMCITY_VERSION' in s) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,***REMOVED***\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0
      ***REMOVED***
      if (s.COLORTERM === 'truecolor') {
        return 3
      ***REMOVED***
      if ('TERM_PROGRAM' in s) {
        const e = parseInt((s.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
        switch (s.TERM_PROGRAM) {
          case 'iTerm.app':
            return e >= 3 ? 3 : 2
          case 'Apple_Terminal':
            return 2
        ***REMOVED***
      ***REMOVED***
      if (/-256(color)?$/i.test(s.TERM)) {
        return 2
      ***REMOVED***
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)) {
        return 1
      ***REMOVED***
      if ('COLORTERM' in s) {
        return 1
      ***REMOVED***
      if (s.TERM === 'dumb') {
        return t
      ***REMOVED***
      return t
    ***REMOVED***
    function getSupportLevel(e) {
      const t = supportsColor(e)
      return translateLevel(t)
    ***REMOVED***
    e.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    ***REMOVED***
  ***REMOVED***,
  260: function(e, t, r) {
    var n = r(357)
    var i = r(654)
    var s = r(614)
    if (typeof s !== 'function') {
      s = s.EventEmitter
    ***REMOVED***
    var o
    if (process.__signal_exit_emitter__) {
      o = process.__signal_exit_emitter__
    ***REMOVED*** else {
      o = process.__signal_exit_emitter__ = new s()
      o.count = 0
      o.emitted = {***REMOVED***
    ***REMOVED***
    if (!o.infinite) {
      o.setMaxListeners(Infinity)
      o.infinite = true
    ***REMOVED***
    e.exports = function(e, t) {
      n.equal(typeof e, 'function', 'a callback must be provided for exit handler')
      if (u === false) {
        load()
      ***REMOVED***
      var r = 'exit'
      if (t && t.alwaysLast) {
        r = 'afterexit'
      ***REMOVED***
      var i = function() {
        o.removeListener(r, e)
        if (o.listeners('exit').length === 0 && o.listeners('afterexit').length === 0) {
          unload()
        ***REMOVED***
      ***REMOVED***
      o.on(r, e)
      return i
    ***REMOVED***
    e.exports.unload = unload
    function unload() {
      if (!u) {
        return
      ***REMOVED***
      u = false
      i.forEach(function(e) {
      ***REMOVED***
          process.removeListener(e, a[e])
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***)
      process.emit = c
      process.reallyExit = p
      o.count -= 1
    ***REMOVED***
    function emit(e, t, r) {
      if (o.emitted[e]) {
        return
      ***REMOVED***
      o.emitted[e] = true
      o.emit(e, t, r)
    ***REMOVED***
    var a = {***REMOVED***
    i.forEach(function(e) {
      a[e] = function listener() {
        var t = process.listeners(e)
        if (t.length === o.count) {
          unload()
          emit('exit', null, e)
          emit('afterexit', null, e)
          process.kill(process.pid, e)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***)
    e.exports.signals = function() {
      return i
    ***REMOVED***
    e.exports.load = load
    var u = false
    function load() {
      if (u) {
        return
      ***REMOVED***
      u = true
      o.count += 1
      i = i.filter(function(e) {
      ***REMOVED***
          process.on(e, a[e])
          return true
        ***REMOVED*** catch (e) {
          return false
        ***REMOVED***
      ***REMOVED***)
      process.emit = processEmit
      process.reallyExit = processReallyExit
    ***REMOVED***
    var p = process.reallyExit
    function processReallyExit(e) {
      process.exitCode = e || 0
      emit('exit', process.exitCode, null)
      emit('afterexit', process.exitCode, null)
      p.call(process, process.exitCode)
    ***REMOVED***
    var c = process.emit
    function processEmit(e, t) {
      if (e === 'exit') {
        if (t !== undefined) {
          process.exitCode = t
        ***REMOVED***
        var r = c.apply(this, arguments)
        emit('exit', process.exitCode, null)
        emit('afterexit', process.exitCode, null)
        return r
      ***REMOVED*** else {
        return c.apply(this, arguments)
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  265: function(e, t, r) {
    e.exports = getPage
    const n = r(370)
    const i = r(577)
    const s = r(297)
    function getPage(e, t, r, o) {
      n(
        `octokit.get${r.charAt(0).toUpperCase() +
          r.slice(
            1
        ***REMOVED******REMOVED***Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
    ***REMOVED***
      const a = i(t)[r]
      if (!a) {
        const e = new s(`No ${r***REMOVED*** page found`, 404)
        return Promise.reject(e)
      ***REMOVED***
      const u = { url: a, headers: applyAcceptHeader(t, o) ***REMOVED***
      const p = e.request(u)
      return p
    ***REMOVED***
    function applyAcceptHeader(e, t) {
      const r = e.headers && e.headers['x-github-media-type']
      if (!r || (t && t.accept)) {
        return t
      ***REMOVED***
      t = t || {***REMOVED***
      t.accept = 'application/vnd.' + r.replace('; param=', '.').replace('; format=', '+')
      return t
    ***REMOVED***
  ***REMOVED***,
  280: function(e, t) {
    t = e.exports = SemVer
    var r
    if (
      typeof process === 'object' &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
  ***REMOVED*** {
      r = function() {
        var e = Array.prototype.slice.call(arguments, 0)
        e.unshift('SEMVER')
        console.log.apply(console, e)
      ***REMOVED***
    ***REMOVED*** else {
      r = function() {***REMOVED***
    ***REMOVED***
    t.SEMVER_SPEC_VERSION = '2.0.0'
    var n = 256
    var i = Number.MAX_SAFE_INTEGER || 9007199254740991
    var s = 16
    var o = (t.re = [])
    var a = (t.src = [])
    var u = 0
    var p = u++
    a[p] = '0|[1-9]\\d*'
    var c = u++
    a[c] = '[0-9]+'
    var d = u++
    a[d] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'
    var l = u++
    a[l] = '(' + a[p] + ')\\.' + '(' + a[p] + ')\\.' + '(' + a[p] + ')'
    var m = u++
    a[m] = '(' + a[c] + ')\\.' + '(' + a[c] + ')\\.' + '(' + a[c] + ')'
    var g = u++
    a[g] = '(?:' + a[p] + '|' + a[d] + ')'
    var h = u++
    a[h] = '(?:' + a[c] + '|' + a[d] + ')'
    var y = u++
    a[y] = '(?:-(' + a[g] + '(?:\\.' + a[g] + ')*))'
    var f = u++
    a[f] = '(?:-?(' + a[h] + '(?:\\.' + a[h] + ')*))'
    var b = u++
    a[b] = '[0-9A-Za-z-]+'
    var _ = u++
    a[_] = '(?:\\+(' + a[b] + '(?:\\.' + a[b] + ')*))'
    var v = u++
    var q = 'v?' + a[l] + a[y] + '?' + a[_] + '?'
    a[v] = '^' + q + '$'
    var w = '[v=\\s]*' + a[m] + a[f] + '?' + a[_] + '?'
    var E = u++
    a[E] = '^' + w + '$'
    var T = u++
    a[T] = '((?:<|>)?=?)'
    var k = u++
    a[k] = a[c] + '|x|X|\\*'
    var C = u++
    a[C] = a[p] + '|x|X|\\*'
    var j = u++
    a[j] =
      '[v=\\s]*(' +
      a[C] +
      ')' +
      '(?:\\.(' +
      a[C] +
      ')' +
      '(?:\\.(' +
      a[C] +
      ')' +
      '(?:' +
      a[y] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var S = u++
    a[S] =
      '[v=\\s]*(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:' +
      a[f] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var O = u++
    a[O] = '^' + a[T] + '\\s*' + a[j] + '$'
    var x = u++
    a[x] = '^' + a[T] + '\\s*' + a[S] + '$'
    var P = u++
    a[P] =
      '(?:^|[^\\d])' +
      '(\\d{1,' +
      s +
      '***REMOVED***)' +
      '(?:\\.(\\d{1,' +
      s +
      '***REMOVED***))?' +
      '(?:\\.(\\d{1,' +
      s +
      '***REMOVED***))?' +
      '(?:$|[^\\d])'
    var R = u++
    a[R] = '(?:~>?)'
    var A = u++
    a[A] = '(\\s*)' + a[R] + '\\s+'
    o[A] = new RegExp(a[A], 'g')
    var G = '$1~'
    var D = u++
    a[D] = '^' + a[R] + a[j] + '$'
    var L = u++
    a[L] = '^' + a[R] + a[S] + '$'
    var F = u++
    a[F] = '(?:\\^)'
    var I = u++
    a[I] = '(\\s*)' + a[F] + '\\s+'
    o[I] = new RegExp(a[I], 'g')
    var $ = '$1^'
    var M = u++
    a[M] = '^' + a[F] + a[j] + '$'
    var U = u++
    a[U] = '^' + a[F] + a[S] + '$'
    var B = u++
    a[B] = '^' + a[T] + '\\s*(' + w + ')$|^$'
    var H = u++
    a[H] = '^' + a[T] + '\\s*(' + q + ')$|^$'
    var z = u++
    a[z] = '(\\s*)' + a[T] + '\\s*(' + w + '|' + a[j] + ')'
    o[z] = new RegExp(a[z], 'g')
    var N = '$1$2$3'
    var V = u++
    a[V] = '^\\s*(' + a[j] + ')' + '\\s+-\\s+' + '(' + a[j] + ')' + '\\s*$'
    var W = u++
    a[W] = '^\\s*(' + a[S] + ')' + '\\s+-\\s+' + '(' + a[S] + ')' + '\\s*$'
    var K = u++
    a[K] = '(<|>)?=?\\s*\\*'
    for (var Y = 0; Y < u; Y++) {
      r(Y, a[Y])
      if (!o[Y]) {
        o[Y] = new RegExp(a[Y])
      ***REMOVED***
    ***REMOVED***
    t.parse = parse
    function parse(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false ***REMOVED***
      ***REMOVED***
      if (e instanceof SemVer) {
        return e
      ***REMOVED***
      if (typeof e !== 'string') {
    ***REMOVED***
      ***REMOVED***
      if (e.length > n) {
    ***REMOVED***
      ***REMOVED***
      var r = t.loose ? o[E] : o[v]
      if (!r.test(e)) {
    ***REMOVED***
      ***REMOVED***
    ***REMOVED***
        return new SemVer(e, t)
      ***REMOVED*** catch (e) {
    ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    t.valid = valid
    function valid(e, t) {
      var r = parse(e, t)
      return r ? r.version : null
    ***REMOVED***
    t.clean = clean
    function clean(e, t) {
      var r = parse(e.trim().replace(/^[=v]+/, ''), t)
      return r ? r.version : null
    ***REMOVED***
    t.SemVer = SemVer
    function SemVer(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false ***REMOVED***
      ***REMOVED***
      if (e instanceof SemVer) {
        if (e.loose === t.loose) {
          return e
        ***REMOVED*** else {
          e = e.version
        ***REMOVED***
      ***REMOVED*** else if (typeof e !== 'string') {
        throw new TypeError('Invalid Version: ' + e)
      ***REMOVED***
      if (e.length > n) {
        throw new TypeError('version is longer than ' + n + ' characters')
      ***REMOVED***
      if (!(this instanceof SemVer)) {
        return new SemVer(e, t)
      ***REMOVED***
      r('SemVer', e, t)
      this.options = t
      this.loose = !!t.loose
      var s = e.trim().match(t.loose ? o[E] : o[v])
      if (!s) {
        throw new TypeError('Invalid Version: ' + e)
      ***REMOVED***
      this.raw = e
      this.major = +s[1]
      this.minor = +s[2]
      this.patch = +s[3]
      if (this.major > i || this.major < 0) {
        throw new TypeError('Invalid major version')
      ***REMOVED***
      if (this.minor > i || this.minor < 0) {
        throw new TypeError('Invalid minor version')
      ***REMOVED***
      if (this.patch > i || this.patch < 0) {
        throw new TypeError('Invalid patch version')
      ***REMOVED***
      if (!s[4]) {
        this.prerelease = []
      ***REMOVED*** else {
        this.prerelease = s[4].split('.').map(function(e) {
          if (/^[0-9]+$/.test(e)) {
            var t = +e
            if (t >= 0 && t < i) {
              return t
            ***REMOVED***
          ***REMOVED***
          return e
        ***REMOVED***)
      ***REMOVED***
      this.build = s[5] ? s[5].split('.') : []
      this.format()
    ***REMOVED***
    SemVer.prototype.format = function() {
      this.version = this.major + '.' + this.minor + '.' + this.patch
      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.')
      ***REMOVED***
      return this.version
    ***REMOVED***
    SemVer.prototype.toString = function() {
      return this.version
    ***REMOVED***
    SemVer.prototype.compare = function(e) {
      r('SemVer.compare', this.version, this.options, e)
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      ***REMOVED***
      return this.compareMain(e) || this.comparePre(e)
    ***REMOVED***
    SemVer.prototype.compareMain = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      ***REMOVED***
      return (
        compareIdentifiers(this.major, e.major) ||
        compareIdentifiers(this.minor, e.minor) ||
        compareIdentifiers(this.patch, e.patch)
    ***REMOVED***
    ***REMOVED***
    SemVer.prototype.comparePre = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      ***REMOVED***
      if (this.prerelease.length && !e.prerelease.length) {
        return -1
      ***REMOVED*** else if (!this.prerelease.length && e.prerelease.length) {
        return 1
      ***REMOVED*** else if (!this.prerelease.length && !e.prerelease.length) {
        return 0
      ***REMOVED***
      var t = 0
      do {
        var n = this.prerelease[t]
        var i = e.prerelease[t]
        r('prerelease compare', t, n, i)
        if (n === undefined && i === undefined) {
          return 0
        ***REMOVED*** else if (i === undefined) {
          return 1
        ***REMOVED*** else if (n === undefined) {
          return -1
        ***REMOVED*** else if (n === i) {
          continue
        ***REMOVED*** else {
          return compareIdentifiers(n, i)
        ***REMOVED***
      ***REMOVED*** while (++t)
    ***REMOVED***
    SemVer.prototype.inc = function(e, t) {
      switch (e) {
        case 'premajor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor = 0
          this.major++
          this.inc('pre', t)
          break
        case 'preminor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor++
          this.inc('pre', t)
          break
        case 'prepatch':
          this.prerelease.length = 0
          this.inc('patch', t)
          this.inc('pre', t)
          break
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', t)
          ***REMOVED***
          this.inc('pre', t)
          break
        case 'major':
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++
          ***REMOVED***
          this.minor = 0
          this.patch = 0
          this.prerelease = []
          break
        case 'minor':
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++
          ***REMOVED***
          this.patch = 0
          this.prerelease = []
          break
        case 'patch':
          if (this.prerelease.length === 0) {
            this.patch++
          ***REMOVED***
          this.prerelease = []
          break
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0]
          ***REMOVED*** else {
            var r = this.prerelease.length
            while (--r >= 0) {
              if (typeof this.prerelease[r] === 'number') {
                this.prerelease[r]++
                r = -2
              ***REMOVED***
            ***REMOVED***
            if (r === -1) {
              this.prerelease.push(0)
            ***REMOVED***
          ***REMOVED***
          if (t) {
            if (this.prerelease[0] === t) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [t, 0]
              ***REMOVED***
            ***REMOVED*** else {
              this.prerelease = [t, 0]
            ***REMOVED***
          ***REMOVED***
          break
        default:
          throw new Error('invalid increment argument: ' + e)
      ***REMOVED***
      this.format()
      this.raw = this.version
      return this
    ***REMOVED***
    t.inc = inc
    function inc(e, t, r, n) {
      if (typeof r === 'string') {
        n = r
        r = undefined
      ***REMOVED***
    ***REMOVED***
        return new SemVer(e, r).inc(t, n).version
      ***REMOVED*** catch (e) {
    ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    t.diff = diff
    function diff(e, t) {
      if (eq(e, t)) {
    ***REMOVED***
      ***REMOVED*** else {
        var r = parse(e)
        var n = parse(t)
        var i = ''
        if (r.prerelease.length || n.prerelease.length) {
          i = 'pre'
          var s = 'prerelease'
        ***REMOVED***
        for (var o in r) {
          if (o === 'major' || o === 'minor' || o === 'patch') {
            if (r[o] !== n[o]) {
              return i + o
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        return s
      ***REMOVED***
    ***REMOVED***
    t.compareIdentifiers = compareIdentifiers
    var X = /^[0-9]+$/
    function compareIdentifiers(e, t) {
      var r = X.test(e)
      var n = X.test(t)
      if (r && n) {
        e = +e
        t = +t
      ***REMOVED***
      return e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    ***REMOVED***
    t.rcompareIdentifiers = rcompareIdentifiers
    function rcompareIdentifiers(e, t) {
      return compareIdentifiers(t, e)
    ***REMOVED***
    t.major = major
    function major(e, t) {
      return new SemVer(e, t).major
    ***REMOVED***
    t.minor = minor
    function minor(e, t) {
      return new SemVer(e, t).minor
    ***REMOVED***
    t.patch = patch
    function patch(e, t) {
      return new SemVer(e, t).patch
    ***REMOVED***
    t.compare = compare
    function compare(e, t, r) {
      return new SemVer(e, r).compare(new SemVer(t, r))
    ***REMOVED***
    t.compareLoose = compareLoose
    function compareLoose(e, t) {
      return compare(e, t, true)
    ***REMOVED***
    t.rcompare = rcompare
    function rcompare(e, t, r) {
      return compare(t, e, r)
    ***REMOVED***
    t.sort = sort
    function sort(e, r) {
      return e.sort(function(e, n) {
        return t.compare(e, n, r)
      ***REMOVED***)
    ***REMOVED***
    t.rsort = rsort
    function rsort(e, r) {
      return e.sort(function(e, n) {
        return t.rcompare(e, n, r)
      ***REMOVED***)
    ***REMOVED***
    t.gt = gt
    function gt(e, t, r) {
      return compare(e, t, r) > 0
    ***REMOVED***
    t.lt = lt
    function lt(e, t, r) {
      return compare(e, t, r) < 0
    ***REMOVED***
    t.eq = eq
    function eq(e, t, r) {
      return compare(e, t, r) === 0
    ***REMOVED***
    t.neq = neq
    function neq(e, t, r) {
      return compare(e, t, r) !== 0
    ***REMOVED***
    t.gte = gte
    function gte(e, t, r) {
      return compare(e, t, r) >= 0
    ***REMOVED***
    t.lte = lte
    function lte(e, t, r) {
      return compare(e, t, r) <= 0
    ***REMOVED***
    t.cmp = cmp
    function cmp(e, t, r, n) {
      switch (t) {
        case '===':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e === r
        case '!==':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e !== r
        case '':
        case '=':
        case '==':
          return eq(e, r, n)
        case '!=':
          return neq(e, r, n)
        case '>':
          return gt(e, r, n)
        case '>=':
          return gte(e, r, n)
        case '<':
          return lt(e, r, n)
        case '<=':
          return lte(e, r, n)
        default:
          throw new TypeError('Invalid operator: ' + t)
      ***REMOVED***
    ***REMOVED***
    t.Comparator = Comparator
    function Comparator(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false ***REMOVED***
      ***REMOVED***
      if (e instanceof Comparator) {
        if (e.loose === !!t.loose) {
          return e
        ***REMOVED*** else {
          e = e.value
        ***REMOVED***
      ***REMOVED***
      if (!(this instanceof Comparator)) {
        return new Comparator(e, t)
      ***REMOVED***
      r('comparator', e, t)
      this.options = t
      this.loose = !!t.loose
      this.parse(e)
      if (this.semver === J) {
        this.value = ''
      ***REMOVED*** else {
        this.value = this.operator + this.semver.version
      ***REMOVED***
      r('comp', this)
    ***REMOVED***
    var J = {***REMOVED***
    Comparator.prototype.parse = function(e) {
      var t = this.options.loose ? o[B] : o[H]
      var r = e.match(t)
      if (!r) {
        throw new TypeError('Invalid comparator: ' + e)
      ***REMOVED***
      this.operator = r[1]
      if (this.operator === '=') {
        this.operator = ''
      ***REMOVED***
      if (!r[2]) {
        this.semver = J
      ***REMOVED*** else {
        this.semver = new SemVer(r[2], this.options.loose)
      ***REMOVED***
    ***REMOVED***
    Comparator.prototype.toString = function() {
      return this.value
    ***REMOVED***
    Comparator.prototype.test = function(e) {
      r('Comparator.test', e, this.options.loose)
      if (this.semver === J) {
        return true
      ***REMOVED***
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      ***REMOVED***
      return cmp(e, this.operator, this.semver, this.options)
    ***REMOVED***
    Comparator.prototype.intersects = function(e, t) {
      if (!(e instanceof Comparator)) {
        throw new TypeError('a Comparator is required')
      ***REMOVED***
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false ***REMOVED***
      ***REMOVED***
      var r
      if (this.operator === '') {
        r = new Range(e.value, t)
        return satisfies(this.value, r, t)
      ***REMOVED*** else if (e.operator === '') {
        r = new Range(this.value, t)
        return satisfies(e.semver, r, t)
      ***REMOVED***
      var n =
        (this.operator === '>=' || this.operator === '>') &&
        (e.operator === '>=' || e.operator === '>')
      var i =
        (this.operator === '<=' || this.operator === '<') &&
        (e.operator === '<=' || e.operator === '<')
      var s = this.semver.version === e.semver.version
      var o =
        (this.operator === '>=' || this.operator === '<=') &&
        (e.operator === '>=' || e.operator === '<=')
      var a =
        cmp(this.semver, '<', e.semver, t) &&
        (this.operator === '>=' || this.operator === '>') &&
          (e.operator === '<=' || e.operator === '<')
      var u =
        cmp(this.semver, '>', e.semver, t) &&
        (this.operator === '<=' || this.operator === '<') &&
          (e.operator === '>=' || e.operator === '>')
      return n || i || (s && o) || a || u
    ***REMOVED***
    t.Range = Range
    function Range(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false ***REMOVED***
      ***REMOVED***
      if (e instanceof Range) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
          return e
        ***REMOVED*** else {
          return new Range(e.raw, t)
        ***REMOVED***
      ***REMOVED***
      if (e instanceof Comparator) {
        return new Range(e.value, t)
      ***REMOVED***
      if (!(this instanceof Range)) {
        return new Range(e, t)
      ***REMOVED***
      this.options = t
      this.loose = !!t.loose
      this.includePrerelease = !!t.includePrerelease
      this.raw = e
      this.set = e
        .split(/\s*\|\|\s*/)
        .map(function(e) {
          return this.parseRange(e.trim())
        ***REMOVED***, this)
        .filter(function(e) {
          return e.length
        ***REMOVED***)
      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + e)
      ***REMOVED***
      this.format()
    ***REMOVED***
    Range.prototype.format = function() {
      this.range = this.set
        .map(function(e) {
          return e.join(' ').trim()
        ***REMOVED***)
        .join('||')
        .trim()
      return this.range
    ***REMOVED***
    Range.prototype.toString = function() {
      return this.range
    ***REMOVED***
    Range.prototype.parseRange = function(e) {
      var t = this.options.loose
      e = e.trim()
      var n = t ? o[W] : o[V]
      e = e.replace(n, hyphenReplace)
      r('hyphen replace', e)
      e = e.replace(o[z], N)
      r('comparator trim', e, o[z])
      e = e.replace(o[A], G)
      e = e.replace(o[I], $)
      e = e.split(/\s+/).join(' ')
      var i = t ? o[B] : o[H]
      var s = e
        .split(' ')
        .map(function(e) {
          return parseComparator(e, this.options)
        ***REMOVED***, this)
        .join(' ')
        .split(/\s+/)
      if (this.options.loose) {
        s = s.filter(function(e) {
          return !!e.match(i)
        ***REMOVED***)
      ***REMOVED***
      s = s.map(function(e) {
        return new Comparator(e, this.options)
      ***REMOVED***, this)
      return s
    ***REMOVED***
    Range.prototype.intersects = function(e, t) {
      if (!(e instanceof Range)) {
        throw new TypeError('a Range is required')
      ***REMOVED***
      return this.set.some(function(r) {
        return r.every(function(r) {
          return e.set.some(function(e) {
            return e.every(function(e) {
              return r.intersects(e, t)
            ***REMOVED***)
          ***REMOVED***)
        ***REMOVED***)
      ***REMOVED***)
    ***REMOVED***
    t.toComparators = toComparators
    function toComparators(e, t) {
      return new Range(e, t).set.map(function(e) {
        return e
          .map(function(e) {
            return e.value
          ***REMOVED***)
          .join(' ')
          .trim()
          .split(' ')
      ***REMOVED***)
    ***REMOVED***
    function parseComparator(e, t) {
      r('comp', e, t)
      e = replaceCarets(e, t)
      r('caret', e)
      e = replaceTildes(e, t)
      r('tildes', e)
      e = replaceXRanges(e, t)
      r('xrange', e)
      e = replaceStars(e, t)
      r('stars', e)
      return e
    ***REMOVED***
    function isX(e) {
      return !e || e.toLowerCase() === 'x' || e === '*'
    ***REMOVED***
    function replaceTildes(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceTilde(e, t)
        ***REMOVED***)
        .join(' ')
    ***REMOVED***
    function replaceTilde(e, t) {
      var n = t.loose ? o[L] : o[D]
      return e.replace(n, function(t, n, i, s, o) {
        r('tilde', e, t, n, i, s, o)
        var a
        if (isX(n)) {
          a = ''
        ***REMOVED*** else if (isX(i)) {
          a = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0'
        ***REMOVED*** else if (isX(s)) {
          a = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0'
        ***REMOVED*** else if (o) {
          r('replaceTilde pr', o)
          a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + (+i + 1) + '.0'
        ***REMOVED*** else {
          a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + (+i + 1) + '.0'
        ***REMOVED***
        r('tilde return', a)
        return a
      ***REMOVED***)
    ***REMOVED***
    function replaceCarets(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceCaret(e, t)
        ***REMOVED***)
        .join(' ')
    ***REMOVED***
    function replaceCaret(e, t) {
      r('caret', e, t)
      var n = t.loose ? o[U] : o[M]
      return e.replace(n, function(t, n, i, s, o) {
        r('caret', e, t, n, i, s, o)
        var a
        if (isX(n)) {
          a = ''
        ***REMOVED*** else if (isX(i)) {
          a = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0'
        ***REMOVED*** else if (isX(s)) {
          if (n === '0') {
            a = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0'
          ***REMOVED*** else {
            a = '>=' + n + '.' + i + '.0 <' + (+n + 1) + '.0.0'
          ***REMOVED***
        ***REMOVED*** else if (o) {
          r('replaceCaret pr', o)
          if (n === '0') {
            if (i === '0') {
              a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + i + '.' + (+s + 1)
            ***REMOVED*** else {
              a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + n + '.' + (+i + 1) + '.0'
            ***REMOVED***
          ***REMOVED*** else {
            a = '>=' + n + '.' + i + '.' + s + '-' + o + ' <' + (+n + 1) + '.0.0'
          ***REMOVED***
        ***REMOVED*** else {
          r('no pr')
          if (n === '0') {
            if (i === '0') {
              a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + i + '.' + (+s + 1)
            ***REMOVED*** else {
              a = '>=' + n + '.' + i + '.' + s + ' <' + n + '.' + (+i + 1) + '.0'
            ***REMOVED***
          ***REMOVED*** else {
            a = '>=' + n + '.' + i + '.' + s + ' <' + (+n + 1) + '.0.0'
          ***REMOVED***
        ***REMOVED***
        r('caret return', a)
        return a
      ***REMOVED***)
    ***REMOVED***
    function replaceXRanges(e, t) {
      r('replaceXRanges', e, t)
      return e
        .split(/\s+/)
        .map(function(e) {
          return replaceXRange(e, t)
        ***REMOVED***)
        .join(' ')
    ***REMOVED***
    function replaceXRange(e, t) {
      e = e.trim()
      var n = t.loose ? o[x] : o[O]
      return e.replace(n, function(t, n, i, s, o, a) {
        r('xRange', e, t, n, i, s, o, a)
        var u = isX(i)
        var p = u || isX(s)
        var c = p || isX(o)
        var d = c
        if (n === '=' && d) {
          n = ''
        ***REMOVED***
        if (u) {
          if (n === '>' || n === '<') {
            t = '<0.0.0'
          ***REMOVED*** else {
            t = '*'
          ***REMOVED***
        ***REMOVED*** else if (n && d) {
          if (p) {
            s = 0
          ***REMOVED***
          o = 0
          if (n === '>') {
            n = '>='
            if (p) {
              i = +i + 1
              s = 0
              o = 0
            ***REMOVED*** else {
              s = +s + 1
              o = 0
            ***REMOVED***
          ***REMOVED*** else if (n === '<=') {
            n = '<'
            if (p) {
              i = +i + 1
            ***REMOVED*** else {
              s = +s + 1
            ***REMOVED***
          ***REMOVED***
          t = n + i + '.' + s + '.' + o
        ***REMOVED*** else if (p) {
          t = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0'
        ***REMOVED*** else if (c) {
          t = '>=' + i + '.' + s + '.0 <' + i + '.' + (+s + 1) + '.0'
        ***REMOVED***
        r('xRange return', t)
        return t
      ***REMOVED***)
    ***REMOVED***
    function replaceStars(e, t) {
      r('replaceStars', e, t)
      return e.trim().replace(o[K], '')
    ***REMOVED***
    function hyphenReplace(e, t, r, n, i, s, o, a, u, p, c, d, l) {
      if (isX(r)) {
        t = ''
      ***REMOVED*** else if (isX(n)) {
        t = '>=' + r + '.0.0'
      ***REMOVED*** else if (isX(i)) {
        t = '>=' + r + '.' + n + '.0'
      ***REMOVED*** else {
        t = '>=' + t
      ***REMOVED***
      if (isX(u)) {
        a = ''
      ***REMOVED*** else if (isX(p)) {
        a = '<' + (+u + 1) + '.0.0'
      ***REMOVED*** else if (isX(c)) {
        a = '<' + u + '.' + (+p + 1) + '.0'
      ***REMOVED*** else if (d) {
        a = '<=' + u + '.' + p + '.' + c + '-' + d
      ***REMOVED*** else {
        a = '<=' + a
      ***REMOVED***
      return (t + ' ' + a).trim()
    ***REMOVED***
    Range.prototype.test = function(e) {
      if (!e) {
        return false
      ***REMOVED***
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      ***REMOVED***
      for (var t = 0; t < this.set.length; t++) {
        if (testSet(this.set[t], e, this.options)) {
          return true
        ***REMOVED***
      ***REMOVED***
      return false
    ***REMOVED***
    function testSet(e, t, n) {
      for (var i = 0; i < e.length; i++) {
        if (!e[i].test(t)) {
          return false
        ***REMOVED***
      ***REMOVED***
      if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++) {
          r(e[i].semver)
          if (e[i].semver === J) {
            continue
          ***REMOVED***
          if (e[i].semver.prerelease.length > 0) {
            var s = e[i].semver
            if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) {
              return true
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        return false
      ***REMOVED***
      return true
    ***REMOVED***
    t.satisfies = satisfies
    function satisfies(e, t, r) {
    ***REMOVED***
        t = new Range(t, r)
      ***REMOVED*** catch (e) {
        return false
      ***REMOVED***
      return t.test(e)
    ***REMOVED***
    t.maxSatisfying = maxSatisfying
    function maxSatisfying(e, t, r) {
      var n = null
      var i = null
    ***REMOVED***
        var s = new Range(t, r)
      ***REMOVED*** catch (e) {
    ***REMOVED***
      ***REMOVED***
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!n || i.compare(e) === -1) {
            n = e
            i = new SemVer(n, r)
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***)
      return n
    ***REMOVED***
    t.minSatisfying = minSatisfying
    function minSatisfying(e, t, r) {
      var n = null
      var i = null
    ***REMOVED***
        var s = new Range(t, r)
      ***REMOVED*** catch (e) {
    ***REMOVED***
      ***REMOVED***
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!n || i.compare(e) === 1) {
            n = e
            i = new SemVer(n, r)
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***)
      return n
    ***REMOVED***
    t.minVersion = minVersion
    function minVersion(e, t) {
      e = new Range(e, t)
      var r = new SemVer('0.0.0')
      if (e.test(r)) {
        return r
      ***REMOVED***
      r = new SemVer('0.0.0-0')
      if (e.test(r)) {
        return r
      ***REMOVED***
      r = null
      for (var n = 0; n < e.set.length; ++n) {
        var i = e.set[n]
        i.forEach(function(e) {
          var t = new SemVer(e.semver.version)
          switch (e.operator) {
            case '>':
              if (t.prerelease.length === 0) {
                t.patch++
              ***REMOVED*** else {
                t.prerelease.push(0)
              ***REMOVED***
              t.raw = t.format()
            case '':
            case '>=':
              if (!r || gt(r, t)) {
                r = t
              ***REMOVED***
              break
            case '<':
            case '<=':
              break
            default:
              throw new Error('Unexpected operation: ' + e.operator)
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***
      if (r && e.test(r)) {
        return r
      ***REMOVED***
  ***REMOVED***
    ***REMOVED***
    t.validRange = validRange
    function validRange(e, t) {
    ***REMOVED***
        return new Range(e, t).range || '*'
      ***REMOVED*** catch (e) {
    ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    t.ltr = ltr
    function ltr(e, t, r) {
      return outside(e, t, '<', r)
    ***REMOVED***
    t.gtr = gtr
    function gtr(e, t, r) {
      return outside(e, t, '>', r)
    ***REMOVED***
    t.outside = outside
    function outside(e, t, r, n) {
      e = new SemVer(e, n)
      t = new Range(t, n)
      var i, s, o, a, u
      switch (r) {
        case '>':
          i = gt
          s = lte
          o = lt
          a = '>'
          u = '>='
          break
        case '<':
          i = lt
          s = gte
          o = gt
          a = '<'
          u = '<='
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      ***REMOVED***
      if (satisfies(e, t, n)) {
        return false
      ***REMOVED***
      for (var p = 0; p < t.set.length; ++p) {
        var c = t.set[p]
        var d = null
        var l = null
        c.forEach(function(e) {
          if (e.semver === J) {
            e = new Comparator('>=0.0.0')
          ***REMOVED***
          d = d || e
          l = l || e
          if (i(e.semver, d.semver, n)) {
            d = e
          ***REMOVED*** else if (o(e.semver, l.semver, n)) {
            l = e
          ***REMOVED***
        ***REMOVED***)
        if (d.operator === a || d.operator === u) {
          return false
        ***REMOVED***
        if ((!l.operator || l.operator === a) && s(e, l.semver)) {
          return false
        ***REMOVED*** else if (l.operator === u && o(e, l.semver)) {
          return false
        ***REMOVED***
      ***REMOVED***
      return true
    ***REMOVED***
    t.prerelease = prerelease
    function prerelease(e, t) {
      var r = parse(e, t)
      return r && r.prerelease.length ? r.prerelease : null
    ***REMOVED***
    t.intersects = intersects
    function intersects(e, t, r) {
      e = new Range(e, r)
      t = new Range(t, r)
      return e.intersects(t)
    ***REMOVED***
    t.coerce = coerce
    function coerce(e) {
      if (e instanceof SemVer) {
        return e
      ***REMOVED***
      if (typeof e !== 'string') {
    ***REMOVED***
      ***REMOVED***
      var t = e.match(o[P])
      if (t == null) {
    ***REMOVED***
      ***REMOVED***
      return parse(t[1] + '.' + (t[2] || '0') + '.' + (t[3] || '0'))
    ***REMOVED***
  ***REMOVED***,
  283: function(e, t, r) {
    'use strict'
    var n = r(35)
    function InterceptorManager() {
      this.handlers = []
    ***REMOVED***
    InterceptorManager.prototype.use = function use(e, t) {
      this.handlers.push({ fulfilled: e, rejected: t ***REMOVED***)
      return this.handlers.length - 1
    ***REMOVED***
    InterceptorManager.prototype.eject = function eject(e) {
      if (this.handlers[e]) {
        this.handlers[e] = null
      ***REMOVED***
    ***REMOVED***
    InterceptorManager.prototype.forEach = function forEach(e) {
      n.forEach(this.handlers, function forEachHandler(t) {
        if (t !== null) {
          e(t)
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
    e.exports = InterceptorManager
  ***REMOVED***,
  293: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: n ***REMOVED*** = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const i = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !i) {
        throw t
      ***REMOVED***
      if (t.status === 401 && i && t.request && t.request.headers['x-github-otp']) {
        if (e.otp) {
          delete e.otp
        ***REMOVED*** else {
          throw new n('Invalid one-time password for two-factor authentication', 401, {
            headers: t.headers,
            request: r
          ***REMOVED***)
        ***REMOVED***
      ***REMOVED***
      if (typeof e.auth.on2fa !== 'function') {
        throw new n(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        ***REMOVED***)
        .then(t => {
          const n = Object.assign(r, { headers: Object.assign(r.headers, { 'x-github-otp': t ***REMOVED***) ***REMOVED***)
          return e.octokit.request(n).then(r => {
            e.otp = t
            return r
          ***REMOVED***)
        ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  294: function(e, t, r) {
    e.exports = parseOptions
    const { Deprecation: n ***REMOVED*** = r(692)
    const { getUserAgent: i ***REMOVED*** = r(796)
    const s = r(969)
    const o = r(215)
    const a = s((e, t) => e.warn(t))
    const u = s((e, t) => e.warn(t))
    const p = s((e, t) => e.warn(t))
    function parseOptions(e, t, r) {
      if (e.headers) {
        e.headers = Object.keys(e.headers).reduce((t, r) => {
          t[r.toLowerCase()] = e.headers[r]
          return t
        ***REMOVED***, {***REMOVED***)
      ***REMOVED***
      const s = {
        headers: e.headers || {***REMOVED***,
        request: e.request || {***REMOVED***,
        mediaType: { previews: [], format: '' ***REMOVED***
      ***REMOVED***
      if (e.baseUrl) {
        s.baseUrl = e.baseUrl
      ***REMOVED***
      if (e.userAgent) {
        s.headers['user-agent'] = e.userAgent
      ***REMOVED***
      if (e.previews) {
        s.mediaType.previews = e.previews
      ***REMOVED***
      if (e.timeZone) {
        s.headers['time-zone'] = e.timeZone
      ***REMOVED***
      if (e.timeout) {
        a(
          t,
          new n(
            '[@octokit/rest] new Octokit({timeout***REMOVED***) is deprecated. Use {request: {timeout***REMOVED******REMOVED*** instead. See https://github.com/octokit/request.js#request'
        ***REMOVED***
      ***REMOVED***
        s.request.timeout = e.timeout
      ***REMOVED***
      if (e.agent) {
        u(
          t,
          new n(
            '[@octokit/rest] new Octokit({agent***REMOVED***) is deprecated. Use {request: {agent***REMOVED******REMOVED*** instead. See https://github.com/octokit/request.js#request'
        ***REMOVED***
      ***REMOVED***
        s.request.agent = e.agent
      ***REMOVED***
      if (e.headers) {
        p(
          t,
          new n(
            '[@octokit/rest] new Octokit({headers***REMOVED***) is deprecated. Use {userAgent, previews***REMOVED*** instead. See https://github.com/octokit/request.js#request'
        ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      const c = s.headers['user-agent']
      const d = `octokit.js/${o.version***REMOVED*** ${i()***REMOVED***`
      s.headers['user-agent'] = [c, d].filter(Boolean).join(' ')
      s.request.hook = r.bind(null, 'request')
      return s
    ***REMOVED***
  ***REMOVED***,
  297: function(e) {
    e.exports = class HttpError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        ***REMOVED***
        this.name = 'HttpError'
        this.code = t
        this.headers = r
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  299: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    const r = '1.1.2'
    const n = [
      /^\/search\//,
      /^\/repos\/[^\/]+\/[^\/]+\/commits\/[^\/]+\/(check-runs|check-suites)([^\/]|$)/,
      /^\/installation\/repositories([^\/]|$)/,
      /^\/user\/installations([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/secrets([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/workflows(\/[^\/]+\/runs)?([^\/]|$)/,
      /^\/repos\/[^\/]+\/[^\/]+\/actions\/runs(\/[^\/]+\/(artifacts|jobs))?([^\/]|$)/
    ]
    function normalizePaginatedListResponse(e, t, r) {
      const i = t.replace(e.request.endpoint.DEFAULTS.baseUrl, '')
      const s = n.find(e => e.test(i))
      if (!s) return
      const o = r.data.incomplete_results
      const a = r.data.repository_selection
      const u = r.data.total_count
      delete r.data.incomplete_results
      delete r.data.repository_selection
      delete r.data.total_count
      const p = Object.keys(r.data)[0]
      const c = r.data[p]
      r.data = c
      if (typeof o !== 'undefined') {
        r.data.incomplete_results = o
      ***REMOVED***
      if (typeof a !== 'undefined') {
        r.data.repository_selection = a
      ***REMOVED***
      r.data.total_count = u
      Object.defineProperty(r.data, p, {
        get() {
          e.log.warn(
            `[@octokit/paginate-rest] "response.data.${p***REMOVED***" is deprecated for "GET ${i***REMOVED***". Get the results directly from "response.data"`
        ***REMOVED***
          return Array.from(c)
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
    function iterator(e, t, r) {
      const n = e.request.endpoint(t, r)
      const i = n.method
      const s = n.headers
      let o = n.url
      return {
        [Symbol.asyncIterator]: () => ({
          next() {
            if (!o) {
              return Promise.resolve({ done: true ***REMOVED***)
            ***REMOVED***
            return e.request({ method: i, url: o, headers: s ***REMOVED***).then(t => {
              normalizePaginatedListResponse(e, o, t)
              o = ((t.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1]
              return { value: t ***REMOVED***
            ***REMOVED***)
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***
    ***REMOVED***
    function paginate(e, t, r, n) {
      if (typeof r === 'function') {
        n = r
        r = undefined
      ***REMOVED***
      return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), n)
    ***REMOVED***
    function gather(e, t, r, n) {
      return r.next().then(i => {
        if (i.done) {
          return t
        ***REMOVED***
        let s = false
        function done() {
          s = true
        ***REMOVED***
        t = t.concat(n ? n(i.value, done) : i.value.data)
        if (s) {
          return t
        ***REMOVED***
        return gather(e, t, r, n)
      ***REMOVED***)
    ***REMOVED***
    function paginateRest(e) {
      return {
        paginate: Object.assign(paginate.bind(null, e), { iterator: iterator.bind(null, e) ***REMOVED***)
      ***REMOVED***
    ***REMOVED***
    paginateRest.VERSION = r
    t.paginateRest = paginateRest
  ***REMOVED***,
  316: function(e, t, r) {
    const n = r(47)
    e.exports = n()
  ***REMOVED***,
  323: function(e) {
    'use strict'
    var t = (e.exports = function(e) {
      return e !== null && typeof e === 'object' && typeof e.pipe === 'function'
    ***REMOVED***)
    t.writable = function(e) {
      return (
        t(e) &&
        e.writable !== false &&
        typeof e._write === 'function' &&
        typeof e._writableState === 'object'
    ***REMOVED***
    ***REMOVED***
    t.readable = function(e) {
      return (
        t(e) &&
        e.readable !== false &&
        typeof e._read === 'function' &&
        typeof e._readableState === 'object'
    ***REMOVED***
    ***REMOVED***
    t.duplex = function(e) {
      return t.writable(e) && t.readable(e)
    ***REMOVED***
    t.transform = function(e) {
      return (
        t.duplex(e) && typeof e._transform === 'function' && typeof e._transformState === 'object'
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  336: function(e, t, r) {
    e.exports = hasLastPage
    const n = r(370)
    const i = r(577)
    function hasLastPage(e) {
      n(
        `octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
    ***REMOVED***
      return i(e).last
    ***REMOVED***
  ***REMOVED***,
  348: function(e, t, r) {
    'use strict'
    e.exports = validate
    const { RequestError: n ***REMOVED*** = r(463)
    const i = r(854)
    const s = r(883)
    function validate(e, t) {
      if (!t.request.validate) {
        return
      ***REMOVED***
      const { validate: r ***REMOVED*** = t.request
      Object.keys(r).forEach(e => {
        const o = i(r, e)
        const a = o.type
        let u
        let p
        let c = true
        let d = false
        if (/\./.test(e)) {
          u = e.replace(/\.[^.]+$/, '')
          d = u.slice(-2) === '[]'
          if (d) {
            u = u.slice(0, -2)
          ***REMOVED***
          p = i(t, u)
          c = u === 'headers' || (typeof p === 'object' && p !== null)
        ***REMOVED***
        const l = d ? (i(t, u) || []).map(t => t[e.split(/\./).pop()]) : [i(t, e)]
        l.forEach((r, i) => {
          const u = typeof r !== 'undefined'
          const p = r === null
          const l = d ? e.replace(/\[\]/, `[${i***REMOVED***]`) : e
          if (!o.required && !u) {
            return
          ***REMOVED***
          if (!c) {
            return
          ***REMOVED***
          if (o.allowNull && p) {
            return
          ***REMOVED***
          if (!o.allowNull && p) {
            throw new n(`'${l***REMOVED***' cannot be null`, 400, { request: t ***REMOVED***)
          ***REMOVED***
          if (o.required && !u) {
            throw new n(`Empty value for parameter '${l***REMOVED***': ${JSON.stringify(r)***REMOVED***`, 400, {
              request: t
            ***REMOVED***)
          ***REMOVED***
          if (a === 'integer') {
            const e = r
            r = parseInt(r, 10)
            if (isNaN(r)) {
              throw new n(`Invalid value for parameter '${l***REMOVED***': ${JSON.stringify(e)***REMOVED*** is NaN`, 400, {
                request: t
              ***REMOVED***)
            ***REMOVED***
          ***REMOVED***
          if (o.enum && o.enum.indexOf(String(r)) === -1) {
            throw new n(`Invalid value for parameter '${l***REMOVED***': ${JSON.stringify(r)***REMOVED***`, 400, {
              request: t
            ***REMOVED***)
          ***REMOVED***
          if (o.validation) {
            const e = new RegExp(o.validation)
            if (!e.test(r)) {
              throw new n(`Invalid value for parameter '${l***REMOVED***': ${JSON.stringify(r)***REMOVED***`, 400, {
                request: t
              ***REMOVED***)
            ***REMOVED***
          ***REMOVED***
          if (a === 'object' && typeof r === 'string') {
          ***REMOVED***
              r = JSON.parse(r)
            ***REMOVED*** catch (e) {
              throw new n(
                `JSON parse error of value for parameter '${l***REMOVED***': ${JSON.stringify(r)***REMOVED***`,
                400,
                { request: t ***REMOVED***
            ***REMOVED***
            ***REMOVED***
          ***REMOVED***
          s(t, o.mapTo || l, r)
        ***REMOVED***)
      ***REMOVED***)
      return t
    ***REMOVED***
  ***REMOVED***,
  349: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: n ***REMOVED*** = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const i = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !i) {
        throw t
      ***REMOVED***
      if (t.status === 401 && i && t.request && t.request.headers['x-github-otp']) {
        throw new n('Invalid one-time password for two-factor authentication', 401, {
          headers: t.headers,
          request: r
        ***REMOVED***)
      ***REMOVED***
      if (typeof e.auth.on2fa !== 'function') {
        throw new n(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        ***REMOVED***)
        .then(t => {
          const n = Object.assign(r, { headers: Object.assign({ 'x-github-otp': t ***REMOVED***, r.headers) ***REMOVED***)
          return e.octokit.request(n)
        ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  352: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(727)
    var s = r(779)
    var o = r(529)
    function createInstance(e) {
      var t = new s(e)
      var r = i(s.prototype.request, t)
      n.extend(r, s.prototype, t)
      n.extend(r, t)
      return r
    ***REMOVED***
    var a = createInstance(o)
    a.Axios = s
    a.create = function create(e) {
      return createInstance(n.merge(o, e))
    ***REMOVED***
    a.Cancel = r(826)
    a.CancelToken = r(137)
    a.isCancel = r(732)
    a.all = function all(e) {
      return Promise.all(e)
    ***REMOVED***
    a.spread = r(825)
    e.exports = a
    e.exports.default = a
  ***REMOVED***,
  357: function(e) {
    e.exports = require('assert')
  ***REMOVED***,
  361: function(e) {
    e.exports = {
      _from: 'axios@0.18.1',
      _id: 'axios@0.18.1',
      _inBundle: false,
      _integrity:
        'sha512-0BfJq4NSfQXd+SkFdrvFbG7addhYSBA2mQwISr46pD6E5iqkWg02RAs8vyTT/j0RTnoYmeXauBuSv1qKwR179g==',
      _location: '/axios',
      _phantomChildren: {***REMOVED***,
      _requested: {
        type: 'version',
        registry: true,
        raw: 'axios@0.18.1',
        name: 'axios',
        escapedName: 'axios',
        rawSpec: '0.18.1',
        saveSpec: null,
        fetchSpec: '0.18.1'
      ***REMOVED***,
      _requiredBy: ['/'],
      _resolved: 'https://npm.hypers.cc/axios/-/axios-0.18.1.tgz',
      _shasum: 'ff3f0de2e7b5d180e757ad98000f1081b87bcea3',
      _spec: 'axios@0.18.1',
      _where: '/Users/yons/Developer/projects/wakatime-sync',
      author: { name: 'Matt Zabriskie' ***REMOVED***,
      browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' ***REMOVED***,
      bugs: { url: 'https://github.com/axios/axios/issues' ***REMOVED***,
      bundleDependencies: false,
      bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' ***REMOVED***],
      dependencies: { 'follow-redirects': '1.5.10', 'is-buffer': '^2.0.2' ***REMOVED***,
      deprecated: false,
      description: 'Promise based HTTP client for the browser and node.js',
      devDependencies: {
        bundlesize: '^0.5.7',
        coveralls: '^2.11.9',
        'es6-promise': '^4.0.5',
        grunt: '^1.0.1',
        'grunt-banner': '^0.6.0',
        'grunt-cli': '^1.2.0',
        'grunt-contrib-clean': '^1.0.0',
        'grunt-contrib-nodeunit': '^1.0.0',
        'grunt-contrib-watch': '^1.0.0',
        'grunt-eslint': '^19.0.0',
        'grunt-karma': '^2.0.0',
        'grunt-ts': '^6.0.0-beta.3',
        'grunt-webpack': '^1.0.18',
        'istanbul-instrumenter-loader': '^1.0.0',
        'jasmine-core': '^2.4.1',
        karma: '^1.3.0',
        'karma-chrome-launcher': '^2.0.0',
        'karma-coverage': '^1.0.0',
        'karma-firefox-launcher': '^1.0.0',
        'karma-jasmine': '^1.0.2',
        'karma-jasmine-ajax': '^0.1.13',
        'karma-opera-launcher': '^1.0.0',
        'karma-safari-launcher': '^1.0.0',
        'karma-sauce-launcher': '^1.1.0',
        'karma-sinon': '^1.0.5',
        'karma-sourcemap-loader': '^0.3.7',
        'karma-webpack': '^1.7.0',
        'load-grunt-tasks': '^3.5.2',
        minimist: '^1.2.0',
        sinon: '^1.17.4',
        typescript: '^2.0.3',
        'url-search-params': '^0.6.1',
        webpack: '^1.13.1',
        'webpack-dev-server': '^1.14.1'
      ***REMOVED***,
      homepage: 'https://github.com/axios/axios',
      keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
      license: 'MIT',
      main: 'index.js',
      name: 'axios',
      repository: { type: 'git', url: 'git+https://github.com/axios/axios.git' ***REMOVED***,
      scripts: {
        build: 'NODE_ENV=production grunt build',
        coveralls: 'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
        examples: 'node ./examples/server.js',
        postversion: 'git push && git push --tags',
        preversion: 'npm test',
        start: 'node ./sandbox/server.js',
        test: 'grunt test && bundlesize',
        version:
          'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json'
      ***REMOVED***,
      typings: './index.d.ts',
      version: '0.18.1'
    ***REMOVED***
  ***REMOVED***,
  363: function(e) {
    e.exports = register
    function register(e, t, r, n) {
      if (typeof r !== 'function') {
        throw new Error('method for before hook must be a function')
      ***REMOVED***
      if (!n) {
        n = {***REMOVED***
      ***REMOVED***
      if (Array.isArray(t)) {
        return t.reverse().reduce(function(t, r) {
          return register.bind(null, e, r, t, n)
        ***REMOVED***, r)()
      ***REMOVED***
      return Promise.resolve().then(function() {
        if (!e.registry[t]) {
          return r(n)
        ***REMOVED***
        return e.registry[t].reduce(function(e, t) {
          return t.hook.bind(null, e, n)
        ***REMOVED***, r)()
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  364: function(e) {
    'use strict'
    e.exports = (e, t) => {
      t = t || process.argv
      const r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--'
      const n = t.indexOf(r + e)
      const i = t.indexOf('--')
      return n !== -1 && (i === -1 ? true : n < i)
    ***REMOVED***
  ***REMOVED***,
  368: function(e) {
    e.exports = function atob(e) {
      return Buffer.from(e, 'base64').toString('binary')
    ***REMOVED***
  ***REMOVED***,
  369: function(e) {
    'use strict'
    e.exports = function enhanceError(e, t, r, n, i) {
      e.config = t
      if (r) {
        e.code = r
      ***REMOVED***
      e.request = n
      e.response = i
      return e
    ***REMOVED***
  ***REMOVED***,
  370: function(e) {
    e.exports = deprecate
    const t = {***REMOVED***
    function deprecate(e) {
      if (t[e]) {
        return
      ***REMOVED***
      console.warn(`DEPRECATED (@octokit/rest): ${e***REMOVED***`)
      t[e] = 1
    ***REMOVED***
  ***REMOVED***,
  385: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    ***REMOVED***
    var n = _interopDefault(r(696))
    var i = r(796)
    function lowercaseKeys(e) {
      if (!e) {
        return {***REMOVED***
      ***REMOVED***
      return Object.keys(e).reduce((t, r) => {
        t[r.toLowerCase()] = e[r]
        return t
      ***REMOVED***, {***REMOVED***)
    ***REMOVED***
    function mergeDeep(e, t) {
      const r = Object.assign({***REMOVED***, e)
      Object.keys(t).forEach(i => {
        if (n(t[i])) {
          if (!(i in e)) Object.assign(r, { [i]: t[i] ***REMOVED***)
          else r[i] = mergeDeep(e[i], t[i])
        ***REMOVED*** else {
          Object.assign(r, { [i]: t[i] ***REMOVED***)
        ***REMOVED***
      ***REMOVED***)
      return r
    ***REMOVED***
    function merge(e, t, r) {
      if (typeof t === 'string') {
        let [e, n] = t.split(' ')
        r = Object.assign(n ? { method: e, url: n ***REMOVED*** : { url: e ***REMOVED***, r)
      ***REMOVED*** else {
        r = Object.assign({***REMOVED***, t)
      ***REMOVED***
      r.headers = lowercaseKeys(r.headers)
      const n = mergeDeep(e || {***REMOVED***, r)
      if (e && e.mediaType.previews.length) {
        n.mediaType.previews = e.mediaType.previews
          .filter(e => !n.mediaType.previews.includes(e))
          .concat(n.mediaType.previews)
      ***REMOVED***
      n.mediaType.previews = n.mediaType.previews.map(e => e.replace(/-preview/, ''))
      return n
    ***REMOVED***
    function addQueryParameters(e, t) {
      const r = /\?/.test(e) ? '&' : '?'
      const n = Object.keys(t)
      if (n.length === 0) {
        return e
      ***REMOVED***
      return (
        e +
        r +
        n
          .map(e => {
            if (e === 'q') {
              return (
                'q=' +
                t.q
                  .split('+')
                  .map(encodeURIComponent)
                  .join('+')
            ***REMOVED***
            ***REMOVED***
            return `${e***REMOVED***=${encodeURIComponent(t[e])***REMOVED***`
          ***REMOVED***)
          .join('&')
    ***REMOVED***
    ***REMOVED***
    const s = /\{[^***REMOVED***]+\***REMOVED***/g
    function removeNonChars(e) {
      return e.replace(/^\W+|\W+$/g, '').split(/,/)
    ***REMOVED***
    function extractUrlVariableNames(e) {
      const t = e.match(s)
      if (!t) {
        return []
      ***REMOVED***
      return t.map(removeNonChars).reduce((e, t) => e.concat(t), [])
    ***REMOVED***
    function omit(e, t) {
      return Object.keys(e)
        .filter(e => !t.includes(e))
        .reduce((t, r) => {
          t[r] = e[r]
          return t
        ***REMOVED***, {***REMOVED***)
    ***REMOVED***
    function encodeReserved(e) {
      return e
        .split(/(%[0-9A-Fa-f]{2***REMOVED***)/g)
        .map(function(e) {
          if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e)
              .replace(/%5B/g, '[')
              .replace(/%5D/g, ']')
          ***REMOVED***
          return e
        ***REMOVED***)
        .join('')
    ***REMOVED***
    function encodeUnreserved(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return (
          '%' +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
      ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
    function encodeValue(e, t, r) {
      t = e === '+' || e === '#' ? encodeReserved(t) : encodeUnreserved(t)
      if (r) {
        return encodeUnreserved(r) + '=' + t
      ***REMOVED*** else {
        return t
      ***REMOVED***
    ***REMOVED***
    function isDefined(e) {
      return e !== undefined && e !== null
    ***REMOVED***
    function isKeyOperator(e) {
      return e === ';' || e === '&' || e === '?'
    ***REMOVED***
    function getValues(e, t, r, n) {
      var i = e[r],
        s = []
      if (isDefined(i) && i !== '') {
        if (typeof i === 'string' || typeof i === 'number' || typeof i === 'boolean') {
          i = i.toString()
          if (n && n !== '*') {
            i = i.substring(0, parseInt(n, 10))
          ***REMOVED***
          s.push(encodeValue(t, i, isKeyOperator(t) ? r : ''))
        ***REMOVED*** else {
          if (n === '*') {
            if (Array.isArray(i)) {
              i.filter(isDefined).forEach(function(e) {
                s.push(encodeValue(t, e, isKeyOperator(t) ? r : ''))
              ***REMOVED***)
            ***REMOVED*** else {
              Object.keys(i).forEach(function(e) {
                if (isDefined(i[e])) {
                  s.push(encodeValue(t, i[e], e))
                ***REMOVED***
              ***REMOVED***)
            ***REMOVED***
          ***REMOVED*** else {
            const e = []
            if (Array.isArray(i)) {
              i.filter(isDefined).forEach(function(r) {
                e.push(encodeValue(t, r))
              ***REMOVED***)
            ***REMOVED*** else {
              Object.keys(i).forEach(function(r) {
                if (isDefined(i[r])) {
                  e.push(encodeUnreserved(r))
                  e.push(encodeValue(t, i[r].toString()))
                ***REMOVED***
              ***REMOVED***)
            ***REMOVED***
            if (isKeyOperator(t)) {
              s.push(encodeUnreserved(r) + '=' + e.join(','))
            ***REMOVED*** else if (e.length !== 0) {
              s.push(e.join(','))
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else {
        if (t === ';') {
          if (isDefined(i)) {
            s.push(encodeUnreserved(r))
          ***REMOVED***
        ***REMOVED*** else if (i === '' && (t === '&' || t === '?')) {
          s.push(encodeUnreserved(r) + '=')
        ***REMOVED*** else if (i === '') {
          s.push('')
        ***REMOVED***
      ***REMOVED***
      return s
    ***REMOVED***
    function parseUrl(e) {
      return { expand: expand.bind(null, e) ***REMOVED***
    ***REMOVED***
    function expand(e, t) {
      var r = ['+', '#', '.', '/', ';', '?', '&']
      return e.replace(/\{([^\{\***REMOVED***]+)\***REMOVED***|([^\{\***REMOVED***]+)/g, function(e, n, i) {
        if (n) {
          let e = ''
          const i = []
          if (r.indexOf(n.charAt(0)) !== -1) {
            e = n.charAt(0)
            n = n.substr(1)
          ***REMOVED***
          n.split(/,/g).forEach(function(r) {
            var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r)
            i.push(getValues(t, e, n[1], n[2] || n[3]))
          ***REMOVED***)
          if (e && e !== '+') {
            var s = ','
            if (e === '?') {
              s = '&'
            ***REMOVED*** else if (e !== '#') {
              s = e
            ***REMOVED***
            return (i.length !== 0 ? e : '') + i.join(s)
          ***REMOVED*** else {
            return i.join(',')
          ***REMOVED***
        ***REMOVED*** else {
          return encodeReserved(i)
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
    function parse(e) {
      let t = e.method.toUpperCase()
      let r = (e.url || '/').replace(/:([a-z]\w+)/g, '{+$1***REMOVED***')
      let n = Object.assign({***REMOVED***, e.headers)
      let i
      let s = omit(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType'])
      const o = extractUrlVariableNames(r)
      r = parseUrl(r).expand(s)
      if (!/^http/.test(r)) {
        r = e.baseUrl + r
      ***REMOVED***
      const a = Object.keys(e)
        .filter(e => o.includes(e))
        .concat('baseUrl')
      const u = omit(s, a)
      const p = /application\/octet-stream/i.test(n.accept)
      if (!p) {
        if (e.mediaType.format) {
          n.accept = n.accept
            .split(/,/)
            .map(t =>
              t.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${e.mediaType.format***REMOVED***`
            ***REMOVED***
          ***REMOVED***
            .join(',')
        ***REMOVED***
        if (e.mediaType.previews.length) {
          const t = n.accept.match(/[\w-]+(?=-preview)/g) || []
          n.accept = t
            .concat(e.mediaType.previews)
            .map(t => {
              const r = e.mediaType.format ? `.${e.mediaType.format***REMOVED***` : '+json'
              return `application/vnd.github.${t***REMOVED***-preview${r***REMOVED***`
            ***REMOVED***)
            .join(',')
        ***REMOVED***
      ***REMOVED***
      if (['GET', 'HEAD'].includes(t)) {
        r = addQueryParameters(r, u)
      ***REMOVED*** else {
        if ('data' in u) {
          i = u.data
        ***REMOVED*** else {
          if (Object.keys(u).length) {
            i = u
          ***REMOVED*** else {
            n['content-length'] = 0
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
      if (!n['content-type'] && typeof i !== 'undefined') {
        n['content-type'] = 'application/json; charset=utf-8'
      ***REMOVED***
      if (['PATCH', 'PUT'].includes(t) && typeof i === 'undefined') {
        i = ''
      ***REMOVED***
      return Object.assign(
        { method: t, url: r, headers: n ***REMOVED***,
        typeof i !== 'undefined' ? { body: i ***REMOVED*** : null,
        e.request ? { request: e.request ***REMOVED*** : null
    ***REMOVED***
    ***REMOVED***
    function endpointWithDefaults(e, t, r) {
      return parse(merge(e, t, r))
    ***REMOVED***
    function withDefaults(e, t) {
      const r = merge(e, t)
      const n = endpointWithDefaults.bind(null, r)
      return Object.assign(n, {
        DEFAULTS: r,
        defaults: withDefaults.bind(null, r),
        merge: merge.bind(null, r),
        parse: parse
      ***REMOVED***)
    ***REMOVED***
    const o = '5.5.2'
    const a = `octokit-endpoint.js/${o***REMOVED*** ${i.getUserAgent()***REMOVED***`
    const u = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: { accept: 'application/vnd.github.v3+json', 'user-agent': a ***REMOVED***,
      mediaType: { format: '', previews: [] ***REMOVED***
    ***REMOVED***
    const p = withDefaults(null, u)
    t.endpoint = p
  ***REMOVED***,
  389: function(e, t, r) {
    'use strict'
    const n = r(747)
    const i = r(866)
    function readShebang(e) {
      const t = 150
      let r
      if (Buffer.alloc) {
        r = Buffer.alloc(t)
      ***REMOVED*** else {
        r = new Buffer(t)
        r.fill(0)
      ***REMOVED***
      let s
    ***REMOVED***
        s = n.openSync(e, 'r')
        n.readSync(s, r, 0, t, 0)
        n.closeSync(s)
      ***REMOVED*** catch (e) {***REMOVED***
      return i(r.toString())
    ***REMOVED***
    e.exports = readShebang
  ***REMOVED***,
  402: function(e, t, r) {
    e.exports = Octokit
    const { request: n ***REMOVED*** = r(753)
    const i = r(523)
    const s = r(294)
    function Octokit(e, t) {
      t = t || {***REMOVED***
      const r = new i.Collection()
      const o = Object.assign(
        { debug: () => {***REMOVED***, info: () => {***REMOVED***, warn: console.warn, error: console.error ***REMOVED***,
        t && t.log
    ***REMOVED***
      const a = { hook: r, log: o, request: n.defaults(s(t, o, r)) ***REMOVED***
      e.forEach(e => e(a, t))
      return a
    ***REMOVED***
  ***REMOVED***,
  411: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = function normalizeHeaderName(e, t) {
      n.forEach(e, function processHeader(r, n) {
        if (n !== t && n.toUpperCase() === t.toUpperCase()) {
          e[t] = r
          delete e[n]
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  413: function(e) {
    e.exports = require('stream')
  ***REMOVED***,
  427: function(e, t, r) {
    'use strict'
    const n = r(669)
    let i
    if (typeof n.getSystemErrorName === 'function') {
      e.exports = n.getSystemErrorName
    ***REMOVED*** else {
    ***REMOVED***
        i = process.binding('uv')
        if (typeof i.errname !== 'function') {
          throw new TypeError('uv.errname is not a function')
        ***REMOVED***
      ***REMOVED*** catch (e) {
        console.error("execa/lib/errname: unable to establish process.binding('uv')", e)
        i = null
      ***REMOVED***
      e.exports = e => errname(i, e)
    ***REMOVED***
    e.exports.__test__ = errname
    function errname(e, t) {
      if (e) {
        return e.errname(t)
      ***REMOVED***
      if (!(t < 0)) {
        throw new Error('err >= 0')
      ***REMOVED***
      return `Unknown system error ${t***REMOVED***`
    ***REMOVED***
  ***REMOVED***,
  430: function(e, t, r) {
    e.exports = octokitValidate
    const n = r(348)
    function octokitValidate(e) {
      e.hook.before('request', n.bind(null, e))
    ***REMOVED***
  ***REMOVED***,
  453: function(e, t, r) {
    var n = r(969)
    var i = r(9)
    var s = r(747)
    var o = function() {***REMOVED***
    var a = /^v?\.0/.test(process.version)
    var u = function(e) {
      return typeof e === 'function'
    ***REMOVED***
    var p = function(e) {
      if (!a) return false
      if (!s) return false
      return (e instanceof (s.ReadStream || o) || e instanceof (s.WriteStream || o)) && u(e.close)
    ***REMOVED***
    var c = function(e) {
      return e.setHeader && u(e.abort)
    ***REMOVED***
    var d = function(e, t, r, s) {
      s = n(s)
      var a = false
      e.on('close', function() {
        a = true
      ***REMOVED***)
      i(e, { readable: t, writable: r ***REMOVED***, function(e) {
        if (e) return s(e)
        a = true
        s()
      ***REMOVED***)
      var d = false
      return function(t) {
        if (a) return
        if (d) return
        d = true
        if (p(e)) return e.close(o)
        if (c(e)) return e.abort()
        if (u(e.destroy)) return e.destroy()
        s(t || new Error('stream was destroyed'))
      ***REMOVED***
    ***REMOVED***
    var l = function(e) {
      e()
    ***REMOVED***
    var m = function(e, t) {
      return e.pipe(t)
    ***REMOVED***
    var g = function() {
      var e = Array.prototype.slice.call(arguments)
      var t = (u(e[e.length - 1] || o) && e.pop()) || o
      if (Array.isArray(e[0])) e = e[0]
      if (e.length < 2) throw new Error('pump requires two streams per minimum')
      var r
      var n = e.map(function(i, s) {
        var o = s < e.length - 1
        var a = s > 0
        return d(i, o, a, function(e) {
          if (!r) r = e
          if (e) n.forEach(l)
          if (o) return
          n.forEach(l)
          t(r)
        ***REMOVED***)
      ***REMOVED***)
      return e.reduce(m)
    ***REMOVED***
    e.exports = g
  ***REMOVED***,
  454: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    ***REMOVED***
    var n = _interopDefault(r(413))
    var i = _interopDefault(r(605))
    var s = _interopDefault(r(835))
    var o = _interopDefault(r(211))
    var a = _interopDefault(r(903))
    const u = n.Readable
    const p = Symbol('buffer')
    const c = Symbol('type')
    class Blob {
      constructor() {
        this[c] = ''
        const e = arguments[0]
        const t = arguments[1]
        const r = []
        let n = 0
        if (e) {
          const t = e
          const i = Number(t.length)
          for (let e = 0; e < i; e++) {
            const i = t[e]
            let s
            if (i instanceof Buffer) {
              s = i
            ***REMOVED*** else if (ArrayBuffer.isView(i)) {
              s = Buffer.from(i.buffer, i.byteOffset, i.byteLength)
            ***REMOVED*** else if (i instanceof ArrayBuffer) {
              s = Buffer.from(i)
            ***REMOVED*** else if (i instanceof Blob) {
              s = i[p]
            ***REMOVED*** else {
              s = Buffer.from(typeof i === 'string' ? i : String(i))
            ***REMOVED***
            n += s.length
            r.push(s)
          ***REMOVED***
        ***REMOVED***
        this[p] = Buffer.concat(r)
        let i = t && t.type !== undefined && String(t.type).toLowerCase()
        if (i && !/[^\u0020-\u007E]/.test(i)) {
          this[c] = i
        ***REMOVED***
      ***REMOVED***
      get size() {
        return this[p].length
      ***REMOVED***
      get type() {
        return this[c]
      ***REMOVED***
      text() {
        return Promise.resolve(this[p].toString())
      ***REMOVED***
      arrayBuffer() {
        const e = this[p]
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        return Promise.resolve(t)
      ***REMOVED***
      stream() {
        const e = new u()
        e._read = function() {***REMOVED***
        e.push(this[p])
        e.push(null)
        return e
      ***REMOVED***
      toString() {
        return '[object Blob]'
      ***REMOVED***
      slice() {
        const e = this.size
        const t = arguments[0]
        const r = arguments[1]
        let n, i
        if (t === undefined) {
          n = 0
        ***REMOVED*** else if (t < 0) {
          n = Math.max(e + t, 0)
        ***REMOVED*** else {
          n = Math.min(t, e)
        ***REMOVED***
        if (r === undefined) {
          i = e
        ***REMOVED*** else if (r < 0) {
          i = Math.max(e + r, 0)
        ***REMOVED*** else {
          i = Math.min(r, e)
        ***REMOVED***
        const s = Math.max(i - n, 0)
        const o = this[p]
        const a = o.slice(n, n + s)
        const u = new Blob([], { type: arguments[2] ***REMOVED***)
        u[p] = a
        return u
      ***REMOVED***
    ***REMOVED***
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true ***REMOVED***,
      type: { enumerable: true ***REMOVED***,
      slice: { enumerable: true ***REMOVED***
    ***REMOVED***)
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true
    ***REMOVED***)
    function FetchError(e, t, r) {
      Error.call(this, e)
      this.message = e
      this.type = t
      if (r) {
        this.code = this.errno = r.code
      ***REMOVED***
      Error.captureStackTrace(this, this.constructor)
    ***REMOVED***
    FetchError.prototype = Object.create(Error.prototype)
    FetchError.prototype.constructor = FetchError
    FetchError.prototype.name = 'FetchError'
    let d
  ***REMOVED***
      d = r(18).convert
    ***REMOVED*** catch (e) {***REMOVED***
    const l = Symbol('Body internals')
    const m = n.PassThrough
    function Body(e) {
      var t = this
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***,
        i = r.size
      let s = i === undefined ? 0 : i
      var o = r.timeout
      let a = o === undefined ? 0 : o
      if (e == null) {
        e = null
      ***REMOVED*** else if (isURLSearchParams(e)) {
        e = Buffer.from(e.toString())
      ***REMOVED*** else if (isBlob(e));
      else if (Buffer.isBuffer(e));
      else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        e = Buffer.from(e)
      ***REMOVED*** else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)
      ***REMOVED*** else if (e instanceof n);
      else {
        e = Buffer.from(String(e))
      ***REMOVED***
      this[l] = { body: e, disturbed: false, error: null ***REMOVED***
      this.size = s
      this.timeout = a
      if (e instanceof n) {
        e.on('error', function(e) {
          const r =
            e.name === 'AbortError'
              ? e
              : new FetchError(
                  `Invalid response body while trying to fetch ${t.url***REMOVED***: ${e.message***REMOVED***`,
                  'system',
                  e
              ***REMOVED***
          t[l].error = r
        ***REMOVED***)
      ***REMOVED***
    ***REMOVED***
    Body.prototype = {
      get body() {
        return this[l].body
      ***REMOVED***,
      get bodyUsed() {
        return this[l].disturbed
      ***REMOVED***,
      arrayBuffer() {
        return consumeBody.call(this).then(function(e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        ***REMOVED***)
      ***REMOVED***,
      blob() {
        let e = (this.headers && this.headers.get('content-type')) || ''
        return consumeBody.call(this).then(function(t) {
          return Object.assign(new Blob([], { type: e.toLowerCase() ***REMOVED***), { [p]: t ***REMOVED***)
        ***REMOVED***)
      ***REMOVED***,
      json() {
        var e = this
        return consumeBody.call(this).then(function(t) {
        ***REMOVED***
            return JSON.parse(t.toString())
          ***REMOVED*** catch (t) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${e.url***REMOVED*** reason: ${t.message***REMOVED***`,
                'invalid-json'
            ***REMOVED***
          ***REMOVED***
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***,
      text() {
        return consumeBody.call(this).then(function(e) {
          return e.toString()
        ***REMOVED***)
      ***REMOVED***,
      buffer() {
        return consumeBody.call(this)
      ***REMOVED***,
      textConverted() {
        var e = this
        return consumeBody.call(this).then(function(t) {
          return convertBody(t, e.headers)
        ***REMOVED***)
      ***REMOVED***
    ***REMOVED***
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true ***REMOVED***,
      bodyUsed: { enumerable: true ***REMOVED***,
      arrayBuffer: { enumerable: true ***REMOVED***,
      blob: { enumerable: true ***REMOVED***,
      json: { enumerable: true ***REMOVED***,
      text: { enumerable: true ***REMOVED***
    ***REMOVED***)
    Body.mixIn = function(e) {
      for (const t of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(t in e)) {
          const r = Object.getOwnPropertyDescriptor(Body.prototype, t)
          Object.defineProperty(e, t, r)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    function consumeBody() {
      var e = this
      if (this[l].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url***REMOVED***`))
      ***REMOVED***
      this[l].disturbed = true
      if (this[l].error) {
        return Body.Promise.reject(this[l].error)
      ***REMOVED***
      let t = this.body
      if (t === null) {
        return Body.Promise.resolve(Buffer.alloc(0))
      ***REMOVED***
      if (isBlob(t)) {
        t = t.stream()
      ***REMOVED***
      if (Buffer.isBuffer(t)) {
        return Body.Promise.resolve(t)
      ***REMOVED***
      if (!(t instanceof n)) {
        return Body.Promise.resolve(Buffer.alloc(0))
      ***REMOVED***
      let r = []
      let i = 0
      let s = false
      return new Body.Promise(function(n, o) {
        let a
        if (e.timeout) {
          a = setTimeout(function() {
            s = true
            o(
              new FetchError(
                `Response timeout while trying to fetch ${e.url***REMOVED*** (over ${e.timeout***REMOVED***ms)`,
                'body-timeout'
            ***REMOVED***
          ***REMOVED***
          ***REMOVED***, e.timeout)
        ***REMOVED***
        t.on('error', function(t) {
          if (t.name === 'AbortError') {
            s = true
            o(t)
          ***REMOVED*** else {
            o(
              new FetchError(
                `Invalid response body while trying to fetch ${e.url***REMOVED***: ${t.message***REMOVED***`,
                'system',
                t
            ***REMOVED***
          ***REMOVED***
          ***REMOVED***
        ***REMOVED***)
        t.on('data', function(t) {
          if (s || t === null) {
            return
          ***REMOVED***
          if (e.size && i + t.length > e.size) {
            s = true
            o(new FetchError(`content size at ${e.url***REMOVED*** over limit: ${e.size***REMOVED***`, 'max-size'))
            return
          ***REMOVED***
          i += t.length
          r.push(t)
        ***REMOVED***)
        t.on('end', function() {
          if (s) {
            return
          ***REMOVED***
          clearTimeout(a)
        ***REMOVED***
            n(Buffer.concat(r, i))
          ***REMOVED*** catch (t) {
            o(
              new FetchError(
                `Could not create Buffer from response body for ${e.url***REMOVED***: ${t.message***REMOVED***`,
                'system',
                t
            ***REMOVED***
          ***REMOVED***
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***)
    ***REMOVED***
    function convertBody(e, t) {
      if (typeof d !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function'
      ***REMOVED***
      ***REMOVED***
      const r = t.get('content-type')
      let n = 'utf-8'
      let i, s
      if (r) {
        i = /charset=([^;]*)/i.exec(r)
      ***REMOVED***
      s = e.slice(0, 1024).toString()
      if (!i && s) {
        i = /<meta.+?charset=(['"])(.+?)\1/i.exec(s)
      ***REMOVED***
      if (!i && s) {
        i = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(s)
        if (i) {
          i = /charset=(.*)/i.exec(i.pop())
        ***REMOVED***
      ***REMOVED***
      if (!i && s) {
        i = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(s)
      ***REMOVED***
      if (i) {
        n = i.pop()
        if (n === 'gb2312' || n === 'gbk') {
          n = 'gb18030'
        ***REMOVED***
      ***REMOVED***
      return d(e, 'UTF-8', n).toString()
    ***REMOVED***
    function isURLSearchParams(e) {
      if (
        typeof e !== 'object' ||
        typeof e.append !== 'function' ||
        typeof e.delete !== 'function' ||
        typeof e.get !== 'function' ||
        typeof e.getAll !== 'function' ||
        typeof e.has !== 'function' ||
        typeof e.set !== 'function'
    ***REMOVED*** {
        return false
      ***REMOVED***
      return (
        e.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(e) === '[object URLSearchParams]' ||
        typeof e.sort === 'function'
    ***REMOVED***
    ***REMOVED***
    function isBlob(e) {
      return (
        typeof e === 'object' &&
        typeof e.arrayBuffer === 'function' &&
        typeof e.type === 'string' &&
        typeof e.stream === 'function' &&
        typeof e.constructor === 'function' &&
        typeof e.constructor.name === 'string' &&
        /^(Blob|File)$/.test(e.constructor.name) &&
        /^(Blob|File)$/.test(e[Symbol.toStringTag])
    ***REMOVED***
    ***REMOVED***
    function clone(e) {
      let t, r
      let i = e.body
      if (e.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      ***REMOVED***
      if (i instanceof n && typeof i.getBoundary !== 'function') {
        t = new m()
        r = new m()
        i.pipe(t)
        i.pipe(r)
        e[l].body = t
        i = r
      ***REMOVED***
      return i
    ***REMOVED***
    function extractContentType(e) {
      if (e === null) {
    ***REMOVED***
      ***REMOVED*** else if (typeof e === 'string') {
        return 'text/plain;charset=UTF-8'
      ***REMOVED*** else if (isURLSearchParams(e)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      ***REMOVED*** else if (isBlob(e)) {
        return e.type || null
      ***REMOVED*** else if (Buffer.isBuffer(e)) {
    ***REMOVED***
      ***REMOVED*** else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
    ***REMOVED***
      ***REMOVED*** else if (ArrayBuffer.isView(e)) {
    ***REMOVED***
      ***REMOVED*** else if (typeof e.getBoundary === 'function') {
        return `multipart/form-data;boundary=${e.getBoundary()***REMOVED***`
      ***REMOVED*** else if (e instanceof n) {
    ***REMOVED***
      ***REMOVED*** else {
        return 'text/plain;charset=UTF-8'
      ***REMOVED***
    ***REMOVED***
    function getTotalBytes(e) {
      const t = e.body
      if (t === null) {
        return 0
      ***REMOVED*** else if (isBlob(t)) {
        return t.size
      ***REMOVED*** else if (Buffer.isBuffer(t)) {
        return t.length
      ***REMOVED*** else if (t && typeof t.getLengthSync === 'function') {
        if (
          (t._lengthRetrievers && t._lengthRetrievers.length == 0) ||
          (t.hasKnownLength && t.hasKnownLength())
      ***REMOVED*** {
          return t.getLengthSync()
        ***REMOVED***
    ***REMOVED***
      ***REMOVED*** else {
    ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    function writeToStream(e, t) {
      const r = t.body
      if (r === null) {
        e.end()
      ***REMOVED*** else if (isBlob(r)) {
        r.stream().pipe(e)
      ***REMOVED*** else if (Buffer.isBuffer(r)) {
        e.write(r)
        e.end()
      ***REMOVED*** else {
        r.pipe(e)
      ***REMOVED***
    ***REMOVED***
    Body.Promise = global.Promise
    const g = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
    const h = /[^\t\x20-\x7e\x80-\xff]/
    function validateName(e) {
      e = `${e***REMOVED***`
      if (g.test(e) || e === '') {
        throw new TypeError(`${e***REMOVED*** is not a legal HTTP header name`)
      ***REMOVED***
    ***REMOVED***
    function validateValue(e) {
      e = `${e***REMOVED***`
      if (h.test(e)) {
        throw new TypeError(`${e***REMOVED*** is not a legal HTTP header value`)
      ***REMOVED***
    ***REMOVED***
    function find(e, t) {
      t = t.toLowerCase()
      for (const r in e) {
        if (r.toLowerCase() === t) {
          return r
        ***REMOVED***
      ***REMOVED***
      return undefined
    ***REMOVED***
    const y = Symbol('map')
    class Headers {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined
        this[y] = Object.create(null)
        if (e instanceof Headers) {
          const t = e.raw()
          const r = Object.keys(t)
          for (const e of r) {
            for (const r of t[e]) {
              this.append(e, r)
            ***REMOVED***
          ***REMOVED***
          return
        ***REMOVED***
        if (e == null);
        else if (typeof e === 'object') {
          const t = e[Symbol.iterator]
          if (t != null) {
            if (typeof t !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            ***REMOVED***
            const r = []
            for (const t of e) {
              if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') {
                throw new TypeError('Each header pair must be iterable')
              ***REMOVED***
              r.push(Array.from(t))
            ***REMOVED***
            for (const e of r) {
              if (e.length !== 2) {
                throw new TypeError('Each header pair must be a name/value tuple')
              ***REMOVED***
              this.append(e[0], e[1])
            ***REMOVED***
          ***REMOVED*** else {
            for (const t of Object.keys(e)) {
              const r = e[t]
              this.append(t, r)
            ***REMOVED***
          ***REMOVED***
        ***REMOVED*** else {
          throw new TypeError('Provided initializer must be an object')
        ***REMOVED***
      ***REMOVED***
      get(e) {
        e = `${e***REMOVED***`
        validateName(e)
        const t = find(this[y], e)
        if (t === undefined) {
      ***REMOVED***
        ***REMOVED***
        return this[y][t].join(', ')
      ***REMOVED***
      forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined
        let r = getHeaders(this)
        let n = 0
        while (n < r.length) {
          var i = r[n]
          const s = i[0],
            o = i[1]
          e.call(t, o, s, this)
          r = getHeaders(this)
          n++
        ***REMOVED***
      ***REMOVED***
      set(e, t) {
        e = `${e***REMOVED***`
        t = `${t***REMOVED***`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        this[y][r !== undefined ? r : e] = [t]
      ***REMOVED***
      append(e, t) {
        e = `${e***REMOVED***`
        t = `${t***REMOVED***`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        if (r !== undefined) {
          this[y][r].push(t)
        ***REMOVED*** else {
          this[y][e] = [t]
        ***REMOVED***
      ***REMOVED***
      has(e) {
        e = `${e***REMOVED***`
        validateName(e)
        return find(this[y], e) !== undefined
      ***REMOVED***
      delete(e) {
        e = `${e***REMOVED***`
        validateName(e)
        const t = find(this[y], e)
        if (t !== undefined) {
          delete this[y][t]
        ***REMOVED***
      ***REMOVED***
      raw() {
        return this[y]
      ***REMOVED***
      keys() {
        return createHeadersIterator(this, 'key')
      ***REMOVED***
      values() {
        return createHeadersIterator(this, 'value')
      ***REMOVED***
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value')
      ***REMOVED***
    ***REMOVED***
    Headers.prototype.entries = Headers.prototype[Symbol.iterator]
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true
    ***REMOVED***)
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true ***REMOVED***,
      forEach: { enumerable: true ***REMOVED***,
      set: { enumerable: true ***REMOVED***,
      append: { enumerable: true ***REMOVED***,
      has: { enumerable: true ***REMOVED***,
      delete: { enumerable: true ***REMOVED***,
      keys: { enumerable: true ***REMOVED***,
      values: { enumerable: true ***REMOVED***,
      entries: { enumerable: true ***REMOVED***
    ***REMOVED***)
    function getHeaders(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value'
      const r = Object.keys(e[y]).sort()
      return r.map(
        t === 'key'
          ? function(e) {
              return e.toLowerCase()
            ***REMOVED***
          : t === 'value'
          ? function(t) {
              return e[y][t].join(', ')
            ***REMOVED***
          : function(t) {
              return [t.toLowerCase(), e[y][t].join(', ')]
            ***REMOVED***
    ***REMOVED***
    ***REMOVED***
    const f = Symbol('internal')
    function createHeadersIterator(e, t) {
      const r = Object.create(b)
      r[f] = { target: e, kind: t, index: 0 ***REMOVED***
      return r
    ***REMOVED***
    const b = Object.setPrototypeOf(
      {
        next() {
          if (!this || Object.getPrototypeOf(this) !== b) {
            throw new TypeError('Value of `this` is not a HeadersIterator')
          ***REMOVED***
          var e = this[f]
          const t = e.target,
            r = e.kind,
            n = e.index
          const i = getHeaders(t, r)
          const s = i.length
          if (n >= s) {
            return { value: undefined, done: true ***REMOVED***
          ***REMOVED***
          this[f].index = n + 1
          return { value: i[n], done: false ***REMOVED***
        ***REMOVED***
      ***REMOVED***,
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
  ***REMOVED***
    Object.defineProperty(b, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true
    ***REMOVED***)
    function exportNodeCompatibleHeaders(e) {
      const t = Object.assign({ __proto__: null ***REMOVED***, e[y])
      const r = find(e[y], 'Host')
      if (r !== undefined) {
        t[r] = t[r][0]
      ***REMOVED***
      return t
    ***REMOVED***
    function createHeadersLenient(e) {
      const t = new Headers()
      for (const r of Object.keys(e)) {
        if (g.test(r)) {
          continue
        ***REMOVED***
        if (Array.isArray(e[r])) {
          for (const n of e[r]) {
            if (h.test(n)) {
              continue
            ***REMOVED***
            if (t[y][r] === undefined) {
              t[y][r] = [n]
            ***REMOVED*** else {
              t[y][r].push(n)
            ***REMOVED***
          ***REMOVED***
        ***REMOVED*** else if (!h.test(e[r])) {
          t[y][r] = [e[r]]
        ***REMOVED***
      ***REMOVED***
      return t
    ***REMOVED***
    const _ = Symbol('Response internals')
    const v = i.STATUS_CODES
    class Response {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***
        Body.call(this, e, t)
        const r = t.status || 200
        const n = new Headers(t.headers)
        if (e != null && !n.has('Content-Type')) {
          const t = extractContentType(e)
          if (t) {
            n.append('Content-Type', t)
          ***REMOVED***
        ***REMOVED***
        this[_] = {
          url: t.url,
          status: r,
          statusText: t.statusText || v[r],
          headers: n,
          counter: t.counter
        ***REMOVED***
      ***REMOVED***
      get url() {
        return this[_].url || ''
      ***REMOVED***
      get status() {
        return this[_].status
      ***REMOVED***
      get ok() {
        return this[_].status >= 200 && this[_].status < 300
      ***REMOVED***
      get redirected() {
        return this[_].counter > 0
      ***REMOVED***
      get statusText() {
        return this[_].statusText
      ***REMOVED***
      get headers() {
        return this[_].headers
      ***REMOVED***
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        ***REMOVED***)
      ***REMOVED***
    ***REMOVED***
    Body.mixIn(Response.prototype)
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true ***REMOVED***,
      status: { enumerable: true ***REMOVED***,
      ok: { enumerable: true ***REMOVED***,
      redirected: { enumerable: true ***REMOVED***,
      statusText: { enumerable: true ***REMOVED***,
      headers: { enumerable: true ***REMOVED***,
      clone: { enumerable: true ***REMOVED***
    ***REMOVED***)
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true
    ***REMOVED***)
    const q = Symbol('Request internals')
    const w = s.parse
    const E = s.format
    const T = 'destroy' in n.Readable.prototype
    function isRequest(e) {
      return typeof e === 'object' && typeof e[q] === 'object'
    ***REMOVED***
    function isAbortSignal(e) {
      const t = e && typeof e === 'object' && Object.getPrototypeOf(e)
      return !!(t && t.constructor.name === 'AbortSignal')
    ***REMOVED***
    class Request {
      constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {***REMOVED***
        let r
        if (!isRequest(e)) {
          if (e && e.href) {
            r = w(e.href)
          ***REMOVED*** else {
            r = w(`${e***REMOVED***`)
          ***REMOVED***
          e = {***REMOVED***
        ***REMOVED*** else {
          r = w(e.url)
        ***REMOVED***
        let n = t.method || e.method || 'GET'
        n = n.toUpperCase()
        if (
          (t.body != null || (isRequest(e) && e.body !== null)) &&
          (n === 'GET' || n === 'HEAD')
      ***REMOVED*** {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        ***REMOVED***
        let i = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null
        Body.call(this, i, { timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0 ***REMOVED***)
        const s = new Headers(t.headers || e.headers || {***REMOVED***)
        if (i != null && !s.has('Content-Type')) {
          const e = extractContentType(i)
          if (e) {
            s.append('Content-Type', e)
          ***REMOVED***
        ***REMOVED***
        let o = isRequest(e) ? e.signal : null
        if ('signal' in t) o = t.signal
        if (o != null && !isAbortSignal(o)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal')
        ***REMOVED***
        this[q] = {
          method: n,
          redirect: t.redirect || e.redirect || 'follow',
          headers: s,
          parsedURL: r,
          signal: o
        ***REMOVED***
        this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20
        this.compress =
          t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true
        this.counter = t.counter || e.counter || 0
        this.agent = t.agent || e.agent
      ***REMOVED***
      get method() {
        return this[q].method
      ***REMOVED***
      get url() {
        return E(this[q].parsedURL)
      ***REMOVED***
      get headers() {
        return this[q].headers
      ***REMOVED***
      get redirect() {
        return this[q].redirect
      ***REMOVED***
      get signal() {
        return this[q].signal
      ***REMOVED***
      clone() {
        return new Request(this)
      ***REMOVED***
    ***REMOVED***
    Body.mixIn(Request.prototype)
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true
    ***REMOVED***)
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true ***REMOVED***,
      url: { enumerable: true ***REMOVED***,
      headers: { enumerable: true ***REMOVED***,
      redirect: { enumerable: true ***REMOVED***,
      clone: { enumerable: true ***REMOVED***,
      signal: { enumerable: true ***REMOVED***
    ***REMOVED***)
    function getNodeRequestOptions(e) {
      const t = e[q].parsedURL
      const r = new Headers(e[q].headers)
      if (!r.has('Accept')) {
        r.set('Accept', '*/*')
      ***REMOVED***
      if (!t.protocol || !t.hostname) {
        throw new TypeError('Only absolute URLs are supported')
      ***REMOVED***
      if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported')
      ***REMOVED***
      if (e.signal && e.body instanceof n.Readable && !T) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
      ***REMOVED***
      ***REMOVED***
      let i = null
      if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        i = '0'
      ***REMOVED***
      if (e.body != null) {
        const t = getTotalBytes(e)
        if (typeof t === 'number') {
          i = String(t)
        ***REMOVED***
      ***REMOVED***
      if (i) {
        r.set('Content-Length', i)
      ***REMOVED***
      if (!r.has('User-Agent')) {
        r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)')
      ***REMOVED***
      if (e.compress && !r.has('Accept-Encoding')) {
        r.set('Accept-Encoding', 'gzip,deflate')
      ***REMOVED***
      let s = e.agent
      if (typeof s === 'function') {
        s = s(t)
      ***REMOVED***
      if (!r.has('Connection') && !s) {
        r.set('Connection', 'close')
      ***REMOVED***
      return Object.assign({***REMOVED***, t, {
        method: e.method,
        headers: exportNodeCompatibleHeaders(r),
        agent: s
      ***REMOVED***)
    ***REMOVED***
    function AbortError(e) {
      Error.call(this, e)
      this.type = 'aborted'
      this.message = e
      Error.captureStackTrace(this, this.constructor)
    ***REMOVED***
    AbortError.prototype = Object.create(Error.prototype)
    AbortError.prototype.constructor = AbortError
    AbortError.prototype.name = 'AbortError'
    const k = n.PassThrough
    const C = s.resolve
    function fetch(e, t) {
      if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative')
      ***REMOVED***
      Body.Promise = fetch.Promise
      return new fetch.Promise(function(r, s) {
        const u = new Request(e, t)
        const p = getNodeRequestOptions(u)
        const c = (p.protocol === 'https:' ? o : i).request
        const d = u.signal
        let l = null
        const m = function abort() {
          let e = new AbortError('The user aborted a request.')
          s(e)
          if (u.body && u.body instanceof n.Readable) {
            u.body.destroy(e)
          ***REMOVED***
          if (!l || !l.body) return
          l.body.emit('error', e)
        ***REMOVED***
        if (d && d.aborted) {
          m()
          return
        ***REMOVED***
        const g = function abortAndFinalize() {
          m()
          finalize()
        ***REMOVED***
        const h = c(p)
        let y
        if (d) {
          d.addEventListener('abort', g)
        ***REMOVED***
        function finalize() {
          h.abort()
          if (d) d.removeEventListener('abort', g)
          clearTimeout(y)
        ***REMOVED***
        if (u.timeout) {
          h.once('socket', function(e) {
            y = setTimeout(function() {
              s(new FetchError(`network timeout at: ${u.url***REMOVED***`, 'request-timeout'))
              finalize()
            ***REMOVED***, u.timeout)
          ***REMOVED***)
        ***REMOVED***
        h.on('error', function(e) {
          s(new FetchError(`request to ${u.url***REMOVED*** failed, reason: ${e.message***REMOVED***`, 'system', e))
          finalize()
        ***REMOVED***)
        h.on('response', function(e) {
          clearTimeout(y)
          const t = createHeadersLenient(e.headers)
          if (fetch.isRedirect(e.statusCode)) {
            const n = t.get('Location')
            const i = n === null ? null : C(u.url, n)
            switch (u.redirect) {
              case 'error':
                s(new FetchError(`redirect mode is set to error: ${u.url***REMOVED***`, 'no-redirect'))
                finalize()
                return
              case 'manual':
                if (i !== null) {
                ***REMOVED***
                    t.set('Location', i)
                  ***REMOVED*** catch (e) {
                    s(e)
                  ***REMOVED***
                ***REMOVED***
                break
              case 'follow':
                if (i === null) {
                  break
                ***REMOVED***
                if (u.counter >= u.follow) {
                  s(new FetchError(`maximum redirect reached at: ${u.url***REMOVED***`, 'max-redirect'))
                  finalize()
                  return
                ***REMOVED***
                const n = {
                  headers: new Headers(u.headers),
                  follow: u.follow,
                  counter: u.counter + 1,
                  agent: u.agent,
                  compress: u.compress,
                  method: u.method,
                  body: u.body,
                  signal: u.signal,
                  timeout: u.timeout
                ***REMOVED***
                if (e.statusCode !== 303 && u.body && getTotalBytes(u) === null) {
                  s(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                  ***REMOVED***
                ***REMOVED***
                  finalize()
                  return
                ***REMOVED***
                if (
                  e.statusCode === 303 ||
                  ((e.statusCode === 301 || e.statusCode === 302) && u.method === 'POST')
              ***REMOVED*** {
                  n.method = 'GET'
                  n.body = undefined
                  n.headers.delete('content-length')
                ***REMOVED***
                r(fetch(new Request(i, n)))
                finalize()
                return
            ***REMOVED***
          ***REMOVED***
          e.once('end', function() {
            if (d) d.removeEventListener('abort', g)
          ***REMOVED***)
          let n = e.pipe(new k())
          const i = {
            url: u.url,
            status: e.statusCode,
            statusText: e.statusMessage,
            headers: t,
            size: u.size,
            timeout: u.timeout,
            counter: u.counter
          ***REMOVED***
          const o = t.get('Content-Encoding')
          if (
            !u.compress ||
            u.method === 'HEAD' ||
            o === null ||
            e.statusCode === 204 ||
            e.statusCode === 304
        ***REMOVED*** {
            l = new Response(n, i)
            r(l)
            return
          ***REMOVED***
          const p = { flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH ***REMOVED***
          if (o == 'gzip' || o == 'x-gzip') {
            n = n.pipe(a.createGunzip(p))
            l = new Response(n, i)
            r(l)
            return
          ***REMOVED***
          if (o == 'deflate' || o == 'x-deflate') {
            const t = e.pipe(new k())
            t.once('data', function(e) {
              if ((e[0] & 15) === 8) {
                n = n.pipe(a.createInflate())
              ***REMOVED*** else {
                n = n.pipe(a.createInflateRaw())
              ***REMOVED***
              l = new Response(n, i)
              r(l)
            ***REMOVED***)
            return
          ***REMOVED***
          if (o == 'br' && typeof a.createBrotliDecompress === 'function') {
            n = n.pipe(a.createBrotliDecompress())
            l = new Response(n, i)
            r(l)
            return
          ***REMOVED***
          l = new Response(n, i)
          r(l)
        ***REMOVED***)
        writeToStream(h, u)
      ***REMOVED***)
    ***REMOVED***
    fetch.isRedirect = function(e) {
      return e === 301 || e === 302 || e === 303 || e === 307 || e === 308
    ***REMOVED***
    fetch.Promise = global.Promise
    e.exports = t = fetch
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    t.default = t
    t.Headers = Headers
    t.Request = Request
    t.Response = Response
    t.FetchError = FetchError
  ***REMOVED***,
  462: function(e) {
    'use strict'
    const t = /([()\][%!^"`<>&|;, *?])/g
    function escapeCommand(e) {
      e = e.replace(t, '^$1')
      return e
    ***REMOVED***
    function escapeArgument(e, r) {
      e = `${e***REMOVED***`
      e = e.replace(/(\\*)"/g, '$1$1\\"')
      e = e.replace(/(\\*)$/, '$1$1')
      e = `"${e***REMOVED***"`
      e = e.replace(t, '^$1')
      if (r) {
        e = e.replace(t, '^$1')
      ***REMOVED***
      return e
    ***REMOVED***
    e.exports.command = escapeCommand
    e.exports.argument = escapeArgument
  ***REMOVED***,
  463: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    ***REMOVED***
    var n = r(692)
    var i = _interopDefault(r(969))
    const s = i(e => console.warn(e))
    class RequestError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        ***REMOVED***
        this.name = 'HttpError'
        this.status = t
        Object.defineProperty(this, 'code', {
          get() {
            s(
              new n.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
            ***REMOVED***
          ***REMOVED***
            return t
          ***REMOVED***
        ***REMOVED***)
        this.headers = r.headers || {***REMOVED***
        const i = Object.assign({***REMOVED***, r.request)
        if (r.request.headers.authorization) {
          i.headers = Object.assign({***REMOVED***, r.request.headers, {
            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]')
          ***REMOVED***)
        ***REMOVED***
        i.url = i.url
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = i
      ***REMOVED***
    ***REMOVED***
    t.RequestError = RequestError
  ***REMOVED***,
  471: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const n = r(675)
    const i = r(126)
    function authenticationBeforeRequest(e, t) {
      if (!e.auth.type) {
        return
      ***REMOVED***
      if (e.auth.type === 'basic') {
        const r = n(`${e.auth.username***REMOVED***:${e.auth.password***REMOVED***`)
        t.headers.authorization = `Basic ${r***REMOVED***`
        return
      ***REMOVED***
      if (e.auth.type === 'token') {
        t.headers.authorization = `token ${e.auth.token***REMOVED***`
        return
      ***REMOVED***
      if (e.auth.type === 'app') {
        t.headers.authorization = `Bearer ${e.auth.token***REMOVED***`
        const r = t.headers.accept
          .split(',')
          .concat('application/vnd.github.machine-man-preview+json')
        t.headers.accept = i(r)
          .filter(Boolean)
          .join(',')
        return
      ***REMOVED***
      t.url += t.url.indexOf('?') === -1 ? '?' : '&'
      if (e.auth.token) {
        t.url += `access_token=${encodeURIComponent(e.auth.token)***REMOVED***`
        return
      ***REMOVED***
      const r = encodeURIComponent(e.auth.key)
      const s = encodeURIComponent(e.auth.secret)
      t.url += `client_id=${r***REMOVED***&client_secret=${s***REMOVED***`
    ***REMOVED***
  ***REMOVED***,
  489: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(814)
    const s = r(39)()
    function resolveCommandAttempt(e, t) {
      const r = process.cwd()
      const o = e.options.cwd != null
      if (o) {
      ***REMOVED***
          process.chdir(e.options.cwd)
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      let a
    ***REMOVED***
        a = i.sync(e.command, {
          path: (e.options.env || process.env)[s],
          pathExt: t ? n.delimiter : undefined
        ***REMOVED***)
      ***REMOVED*** catch (e) {
      ***REMOVED*** finally {
        process.chdir(r)
      ***REMOVED***
      if (a) {
        a = n.resolve(o ? e.options.cwd : '', a)
      ***REMOVED***
      return a
    ***REMOVED***
    function resolveCommand(e) {
      return resolveCommandAttempt(e) || resolveCommandAttempt(e, true)
    ***REMOVED***
    e.exports = resolveCommand
  ***REMOVED***,
  510: function(e) {
    e.exports = addHook
    function addHook(e, t, r, n) {
      var i = n
      if (!e.registry[r]) {
        e.registry[r] = []
      ***REMOVED***
      if (t === 'before') {
        n = function(e, t) {
          return Promise.resolve()
            .then(i.bind(null, t))
            .then(e.bind(null, t))
        ***REMOVED***
      ***REMOVED***
      if (t === 'after') {
        n = function(e, t) {
          var r
          return Promise.resolve()
            .then(e.bind(null, t))
            .then(function(e) {
              r = e
              return i(r, t)
            ***REMOVED***)
            .then(function() {
              return r
            ***REMOVED***)
        ***REMOVED***
      ***REMOVED***
      if (t === 'error') {
        n = function(e, t) {
          return Promise.resolve()
            .then(e.bind(null, t))
            .catch(function(e) {
              return i(e, t)
            ***REMOVED***)
        ***REMOVED***
      ***REMOVED***
      e.registry[r].push({ hook: n, orig: i ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  523: function(e, t, r) {
    var n = r(363)
    var i = r(510)
    var s = r(763)
    var o = Function.bind
    var a = o.bind(o)
    function bindApi(e, t, r) {
      var n = a(s, null).apply(null, r ? [t, r] : [t])
      e.api = { remove: n ***REMOVED***
      e.remove = n
      ;['before', 'error', 'after', 'wrap'].forEach(function(n) {
        var s = r ? [t, n, r] : [t, n]
        e[n] = e.api[n] = a(i, null).apply(null, s)
      ***REMOVED***)
    ***REMOVED***
    function HookSingular() {
      var e = 'h'
      var t = { registry: {***REMOVED*** ***REMOVED***
      var r = n.bind(null, t, e)
      bindApi(r, t, e)
      return r
    ***REMOVED***
    function HookCollection() {
      var e = { registry: {***REMOVED*** ***REMOVED***
      var t = n.bind(null, e)
      bindApi(t, e)
      return t
    ***REMOVED***
    var u = false
    function Hook() {
      if (!u) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
      ***REMOVED***
        u = true
      ***REMOVED***
      return HookCollection()
    ***REMOVED***
    Hook.Singular = HookSingular.bind()
    Hook.Collection = HookCollection.bind()
    e.exports = Hook
    e.exports.Hook = Hook
    e.exports.Singular = Hook.Singular
    e.exports.Collection = Hook.Collection
  ***REMOVED***,
  529: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(411)
    var s = { 'Content-Type': 'application/x-www-form-urlencoded' ***REMOVED***
    function setContentTypeIfUnset(e, t) {
      if (!n.isUndefined(e) && n.isUndefined(e['Content-Type'])) {
        e['Content-Type'] = t
      ***REMOVED***
    ***REMOVED***
    function getDefaultAdapter() {
      var e
      if (typeof XMLHttpRequest !== 'undefined') {
        e = r(219)
      ***REMOVED*** else if (typeof process !== 'undefined') {
        e = r(670)
      ***REMOVED***
      return e
    ***REMOVED***
    var o = {
      adapter: getDefaultAdapter(),
      transformRequest: [
        function transformRequest(e, t) {
          i(t, 'Content-Type')
          if (
            n.isFormData(e) ||
            n.isArrayBuffer(e) ||
            n.isBuffer(e) ||
            n.isStream(e) ||
            n.isFile(e) ||
            n.isBlob(e)
        ***REMOVED*** {
            return e
          ***REMOVED***
          if (n.isArrayBufferView(e)) {
            return e.buffer
          ***REMOVED***
          if (n.isURLSearchParams(e)) {
            setContentTypeIfUnset(t, 'application/x-www-form-urlencoded;charset=utf-8')
            return e.toString()
          ***REMOVED***
          if (n.isObject(e)) {
            setContentTypeIfUnset(t, 'application/json;charset=utf-8')
            return JSON.stringify(e)
          ***REMOVED***
          return e
        ***REMOVED***
      ],
      transformResponse: [
        function transformResponse(e) {
          if (typeof e === 'string') {
          ***REMOVED***
              e = JSON.parse(e)
            ***REMOVED*** catch (e) {***REMOVED***
          ***REMOVED***
          return e
        ***REMOVED***
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300
      ***REMOVED***
    ***REMOVED***
    o.headers = { common: { Accept: 'application/json, text/plain, */*' ***REMOVED*** ***REMOVED***
    n.forEach(['delete', 'get', 'head'], function forEachMethodNoData(e) {
      o.headers[e] = {***REMOVED***
    ***REMOVED***)
    n.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      o.headers[e] = n.merge(s)
    ***REMOVED***)
    e.exports = o
  ***REMOVED***,
  536: function(e, t, r) {
    e.exports = hasFirstPage
    const n = r(370)
    const i = r(577)
    function hasFirstPage(e) {
      n(
        `octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
    ***REMOVED***
      return i(e).first
    ***REMOVED***
  ***REMOVED***,
  549: function(e, t, r) {
    var n = r(835)
    var i = r(605)
    var s = r(211)
    var o = r(357)
    var a = r(413).Writable
    var u = r(784)('follow-redirects')
    var p = { GET: true, HEAD: true, OPTIONS: true, TRACE: true ***REMOVED***
    var c = Object.create(null)
    ;['abort', 'aborted', 'error', 'socket', 'timeout'].forEach(function(e) {
      c[e] = function(t) {
        this._redirectable.emit(e, t)
      ***REMOVED***
    ***REMOVED***)
    function RedirectableRequest(e, t) {
      a.call(this)
      e.headers = e.headers || {***REMOVED***
      this._options = e
      this._redirectCount = 0
      this._redirects = []
      this._requestBodyLength = 0
      this._requestBodyBuffers = []
      if (e.host) {
        if (!e.hostname) {
          e.hostname = e.host
        ***REMOVED***
        delete e.host
      ***REMOVED***
      if (t) {
        this.on('response', t)
      ***REMOVED***
      var r = this
      this._onNativeResponse = function(e) {
        r._processResponse(e)
      ***REMOVED***
      if (!e.pathname && e.path) {
        var n = e.path.indexOf('?')
        if (n < 0) {
          e.pathname = e.path
        ***REMOVED*** else {
          e.pathname = e.path.substring(0, n)
          e.search = e.path.substring(n)
        ***REMOVED***
      ***REMOVED***
      this._performRequest()
    ***REMOVED***
    RedirectableRequest.prototype = Object.create(a.prototype)
    RedirectableRequest.prototype.write = function(e, t, r) {
      if (!(typeof e === 'string' || (typeof e === 'object' && 'length' in e))) {
        throw new Error('data should be a string, Buffer or Uint8Array')
      ***REMOVED***
      if (typeof t === 'function') {
        r = t
        t = null
      ***REMOVED***
      if (e.length === 0) {
        if (r) {
          r()
        ***REMOVED***
        return
      ***REMOVED***
      if (this._requestBodyLength + e.length <= this._options.maxBodyLength) {
        this._requestBodyLength += e.length
        this._requestBodyBuffers.push({ data: e, encoding: t ***REMOVED***)
        this._currentRequest.write(e, t, r)
      ***REMOVED*** else {
        this.emit('error', new Error('Request body larger than maxBodyLength limit'))
        this.abort()
      ***REMOVED***
    ***REMOVED***
    RedirectableRequest.prototype.end = function(e, t, r) {
      if (typeof e === 'function') {
        r = e
        e = t = null
      ***REMOVED*** else if (typeof t === 'function') {
        r = t
        t = null
      ***REMOVED***
      var n = this._currentRequest
      this.write(e || '', t, function() {
        n.end(null, null, r)
      ***REMOVED***)
    ***REMOVED***
    RedirectableRequest.prototype.setHeader = function(e, t) {
      this._options.headers[e] = t
      this._currentRequest.setHeader(e, t)
    ***REMOVED***
    RedirectableRequest.prototype.removeHeader = function(e) {
      delete this._options.headers[e]
      this._currentRequest.removeHeader(e)
    ***REMOVED***
    ;[
      'abort',
      'flushHeaders',
      'getHeader',
      'setNoDelay',
      'setSocketKeepAlive',
      'setTimeout'
    ].forEach(function(e) {
      RedirectableRequest.prototype[e] = function(t, r) {
        return this._currentRequest[e](t, r)
      ***REMOVED***
    ***REMOVED***)
    ;['aborted', 'connection', 'socket'].forEach(function(e) {
      Object.defineProperty(RedirectableRequest.prototype, e, {
        get: function() {
          return this._currentRequest[e]
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***)
    RedirectableRequest.prototype._performRequest = function() {
      var e = this._options.protocol
      var t = this._options.nativeProtocols[e]
      if (!t) {
        this.emit('error', new Error('Unsupported protocol ' + e))
        return
      ***REMOVED***
      if (this._options.agents) {
        var r = e.substr(0, e.length - 1)
        this._options.agent = this._options.agents[r]
      ***REMOVED***
      var i = (this._currentRequest = t.request(this._options, this._onNativeResponse))
      this._currentUrl = n.format(this._options)
      i._redirectable = this
      for (var s in c) {
        if (s) {
          i.on(s, c[s])
        ***REMOVED***
      ***REMOVED***
      if (this._isRedirect) {
        var o = 0
        var a = this._requestBodyBuffers
        ;(function writeNext() {
          if (o < a.length) {
            var e = a[o++]
            i.write(e.data, e.encoding, writeNext)
          ***REMOVED*** else {
            i.end()
          ***REMOVED***
        ***REMOVED***)()
      ***REMOVED***
    ***REMOVED***
    RedirectableRequest.prototype._processResponse = function(e) {
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: e.headers,
          statusCode: e.statusCode
        ***REMOVED***)
      ***REMOVED***
      var t = e.headers.location
      if (
        t &&
        this._options.followRedirects !== false &&
        e.statusCode >= 300 &&
        e.statusCode < 400
    ***REMOVED*** {
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit('error', new Error('Max redirects exceeded.'))
          return
        ***REMOVED***
        var r
        var i = this._options.headers
        if (e.statusCode !== 307 && !(this._options.method in p)) {
          this._options.method = 'GET'
          this._requestBodyBuffers = []
          for (r in i) {
            if (/^content-/i.test(r)) {
              delete i[r]
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        if (!this._isRedirect) {
          for (r in i) {
            if (/^host$/i.test(r)) {
              delete i[r]
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        var s = n.resolve(this._currentUrl, t)
        u('redirecting to', s)
        Object.assign(this._options, n.parse(s))
        this._isRedirect = true
        this._performRequest()
        e.destroy()
      ***REMOVED*** else {
        e.responseUrl = this._currentUrl
        e.redirects = this._redirects
        this.emit('response', e)
        this._requestBodyBuffers = []
      ***REMOVED***
    ***REMOVED***
    function wrap(e) {
      var t = { maxRedirects: 21, maxBodyLength: 10 * 1024 * 1024 ***REMOVED***
      var r = {***REMOVED***
      Object.keys(e).forEach(function(i) {
        var s = i + ':'
        var a = (r[s] = e[i])
        var p = (t[i] = Object.create(a))
        p.request = function(e, i) {
          if (typeof e === 'string') {
            e = n.parse(e)
            e.maxRedirects = t.maxRedirects
          ***REMOVED*** else {
            e = Object.assign(
              { protocol: s, maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength ***REMOVED***,
              e
          ***REMOVED***
          ***REMOVED***
          e.nativeProtocols = r
          o.equal(e.protocol, s, 'protocol mismatch')
          u('options', e)
          return new RedirectableRequest(e, i)
        ***REMOVED***
        p.get = function(e, t) {
          var r = p.request(e, t)
          r.end()
          return r
        ***REMOVED***
      ***REMOVED***)
      return t
    ***REMOVED***
    e.exports = wrap({ http: i, https: s ***REMOVED***)
    e.exports.wrap = wrap
  ***REMOVED***,
  550: function(e, t, r) {
    e.exports = getNextPage
    const n = r(265)
    function getNextPage(e, t, r) {
      return n(e, t, 'next', r)
    ***REMOVED***
  ***REMOVED***,
  558: function(e, t, r) {
    e.exports = hasPreviousPage
    const n = r(370)
    const i = r(577)
    function hasPreviousPage(e) {
      n(
        `octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
    ***REMOVED***
      return i(e).prev
    ***REMOVED***
  ***REMOVED***,
  563: function(e, t, r) {
    e.exports = getPreviousPage
    const n = r(265)
    function getPreviousPage(e, t, r) {
      return n(e, t, 'prev', r)
    ***REMOVED***
  ***REMOVED***,
  564: function(e, t, r) {
    'use strict'
    var n = r(26)
    e.exports = function settle(e, t, r) {
      var i = r.config.validateStatus
      if (!r.status || !i || i(r.status)) {
        e(r)
      ***REMOVED*** else {
        t(n('Request failed with status code ' + r.status, r.config, null, r.request, r))
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  568: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(948)
    const s = r(489)
    const o = r(462)
    const a = r(389)
    const u = r(280)
    const p = process.platform === 'win32'
    const c = /\.(?:com|exe)$/i
    const d = /node_modules[\\\/].bin[\\\/][^\\\/]+\.cmd$/i
    const l = i(() => u.satisfies(process.version, '^4.8.0 || ^5.7.0 || >= 6.0.0', true)) || false
    function detectShebang(e) {
      e.file = s(e)
      const t = e.file && a(e.file)
      if (t) {
        e.args.unshift(e.file)
        e.command = t
        return s(e)
      ***REMOVED***
      return e.file
    ***REMOVED***
    function parseNonShell(e) {
      if (!p) {
        return e
      ***REMOVED***
      const t = detectShebang(e)
      const r = !c.test(t)
      if (e.options.forceShell || r) {
        const r = d.test(t)
        e.command = n.normalize(e.command)
        e.command = o.command(e.command)
        e.args = e.args.map(e => o.argument(e, r))
        const i = [e.command].concat(e.args).join(' ')
        e.args = ['/d', '/s', '/c', `"${i***REMOVED***"`]
        e.command = process.env.comspec || 'cmd.exe'
        e.options.windowsVerbatimArguments = true
      ***REMOVED***
      return e
    ***REMOVED***
    function parseShell(e) {
      if (l) {
        return e
      ***REMOVED***
      const t = [e.command].concat(e.args).join(' ')
      if (p) {
        e.command =
          typeof e.options.shell === 'string' ? e.options.shell : process.env.comspec || 'cmd.exe'
        e.args = ['/d', '/s', '/c', `"${t***REMOVED***"`]
        e.options.windowsVerbatimArguments = true
      ***REMOVED*** else {
        if (typeof e.options.shell === 'string') {
          e.command = e.options.shell
        ***REMOVED*** else if (process.platform === 'android') {
          e.command = '/system/bin/sh'
        ***REMOVED*** else {
          e.command = '/bin/sh'
        ***REMOVED***
        e.args = ['-c', t]
      ***REMOVED***
      return e
    ***REMOVED***
    function parse(e, t, r) {
      if (t && !Array.isArray(t)) {
        r = t
        t = null
      ***REMOVED***
      t = t ? t.slice(0) : []
      r = Object.assign({***REMOVED***, r)
      const n = {
        command: e,
        args: t,
        options: r,
        file: undefined,
        original: { command: e, args: t ***REMOVED***
      ***REMOVED***
      return r.shell ? parseShell(n) : parseNonShell(n)
    ***REMOVED***
    e.exports = parse
  ***REMOVED***,
  577: function(e) {
    e.exports = getPageLinks
    function getPageLinks(e) {
      e = e.link || e.headers.link || ''
      const t = {***REMOVED***
      e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (e, r, n) => {
        t[n] = r
      ***REMOVED***)
      return t
    ***REMOVED***
  ***REMOVED***,
  589: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = function transformData(e, t, r) {
      n.forEach(r, function transform(r) {
        e = r(e, t)
      ***REMOVED***)
      return e
    ***REMOVED***
  ***REMOVED***,
  590: function(e) {
    'use strict'
    e.exports = function isAbsoluteURL(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    ***REMOVED***
  ***REMOVED***,
  605: function(e) {
    e.exports = require('http')
  ***REMOVED***,
  614: function(e) {
    e.exports = require('events')
  ***REMOVED***,
  621: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(39)
    e.exports = e => {
      e = Object.assign({ cwd: process.cwd(), path: process.env[i()] ***REMOVED***, e)
      let t
      let r = n.resolve(e.cwd)
      const s = []
      while (t !== r) {
        s.push(n.join(r, 'node_modules/.bin'))
        t = r
        r = n.resolve(r, '..')
      ***REMOVED***
      s.push(n.dirname(process.execPath))
      return s.concat(e.path).join(n.delimiter)
    ***REMOVED***
    e.exports.env = t => {
      t = Object.assign({ env: process.env ***REMOVED***, t)
      const r = Object.assign({***REMOVED***, t.env)
      const n = i({ env: r ***REMOVED***)
      t.path = r[n]
      r[n] = e.exports(t)
      return r
    ***REMOVED***
  ***REMOVED***,
  622: function(e) {
    e.exports = require('path')
  ***REMOVED***,
  629: function(e) {
    !(function(t, r) {
      true ? (e.exports = r()) : undefined
    ***REMOVED***)(this, function() {
      'use strict'
      var e = 'millisecond',
        t = 'second',
        r = 'minute',
        n = 'hour',
        i = 'day',
        s = 'week',
        o = 'month',
        a = 'quarter',
        u = 'year',
        p = /^(\d{4***REMOVED***)-?(\d{1,2***REMOVED***)-?(\d{0,2***REMOVED***)[^0-9]*(\d{1,2***REMOVED***)?:?(\d{1,2***REMOVED***)?:?(\d{1,2***REMOVED***)?.?(\d{1,3***REMOVED***)?$/,
        d = /\[([^\]]+)]|Y{2,4***REMOVED***|M{1,4***REMOVED***|D{1,2***REMOVED***|d{1,4***REMOVED***|H{1,2***REMOVED***|h{1,2***REMOVED***|a|A|m{1,2***REMOVED***|s{1,2***REMOVED***|Z{1,2***REMOVED***|SSS/g,
        l = function(e, t, r) {
          var n = String(e)
          return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(r) + e
        ***REMOVED***,
        m = {
          s: l,
          z: function(e) {
            var t = -e.utcOffset(),
              r = Math.abs(t),
              n = Math.floor(r / 60),
              i = r % 60
            return (t <= 0 ? '+' : '-') + l(n, 2, '0') + ':' + l(i, 2, '0')
          ***REMOVED***,
          m: function(e, t) {
            var r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              n = e.clone().add(r, o),
              i = t - n < 0,
              s = e.clone().add(r + (i ? -1 : 1), o)
            return Number(-(r + (t - n) / (i ? n - s : s - n)) || 0)
          ***REMOVED***,
          a: function(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          ***REMOVED***,
          p: function(p) {
            return (
              { M: o, y: u, w: s, d: i, h: n, m: r, s: t, ms: e, Q: a ***REMOVED***[p] ||
              String(p || '')
                .toLowerCase()
                .replace(/s$/, '')
          ***REMOVED***
          ***REMOVED***,
          u: function(e) {
            return void 0 === e
          ***REMOVED***
        ***REMOVED***,
        g = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ***REMOVED***
        ***REMOVED***,
        h = 'en',
        y = {***REMOVED***
      y[h] = g
      var f = function(e) {
          return e instanceof q
        ***REMOVED***,
        b = function(e, t, r) {
          var n
          if (!e) return h
          if ('string' == typeof e) y[e] && (n = e), t && ((y[e] = t), (n = e))
          else {
            var i = e.name
            ;(y[i] = e), (n = i)
          ***REMOVED***
          return r || (h = n), n
        ***REMOVED***,
        _ = function(e, t, r) {
          if (f(e)) return e.clone()
          var n = t ? ('string' == typeof t ? { format: t, pl: r ***REMOVED*** : t) : {***REMOVED***
          return (n.date = e), new q(n)
        ***REMOVED***,
        v = m
      ;(v.l = b),
        (v.i = f),
        (v.w = function(e, t) {
          return _(e, { locale: t.$L, utc: t.$u, $offset: t.$offset ***REMOVED***)
        ***REMOVED***)
      var q = (function() {
        function c(e) {
          ;(this.$L = this.$L || b(e.locale, null, !0)), this.parse(e)
        ***REMOVED***
        var l = c.prototype
        return (
          (l.parse = function(e) {
            ;(this.$d = (function(e) {
              var t = e.date,
                r = e.utc
              if (null === t) return new Date(NaN)
              if (v.u(t)) return new Date()
              if (t instanceof Date) return new Date(t)
              if ('string' == typeof t && !/Z$/i.test(t)) {
                var n = t.match(p)
                if (n)
                  return r
                    ? new Date(
                        Date.UTC(
                          n[1],
                          n[2] - 1,
                          n[3] || 1,
                          n[4] || 0,
                          n[5] || 0,
                          n[6] || 0,
                          n[7] || 0
                      ***REMOVED***
                    ***REMOVED***
                    : new Date(
                        n[1],
                        n[2] - 1,
                        n[3] || 1,
                        n[4] || 0,
                        n[5] || 0,
                        n[6] || 0,
                        n[7] || 0
                    ***REMOVED***
              ***REMOVED***
              return new Date(t)
            ***REMOVED***)(e)),
              this.init()
          ***REMOVED***),
          (l.init = function() {
            var e = this.$d
            ;(this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds())
          ***REMOVED***),
          (l.$utils = function() {
            return v
          ***REMOVED***),
          (l.isValid = function() {
            return !('Invalid Date' === this.$d.toString())
          ***REMOVED***),
          (l.isSame = function(e, t) {
            var r = _(e)
            return this.startOf(t) <= r && r <= this.endOf(t)
          ***REMOVED***),
          (l.isAfter = function(e, t) {
            return _(e) < this.startOf(t)
          ***REMOVED***),
          (l.isBefore = function(e, t) {
            return this.endOf(t) < _(e)
          ***REMOVED***),
          (l.$g = function(e, t, r) {
            return v.u(e) ? this[t] : this.set(r, e)
          ***REMOVED***),
          (l.year = function(e) {
            return this.$g(e, '$y', u)
          ***REMOVED***),
          (l.month = function(e) {
            return this.$g(e, '$M', o)
          ***REMOVED***),
          (l.day = function(e) {
            return this.$g(e, '$W', i)
          ***REMOVED***),
          (l.date = function(e) {
            return this.$g(e, '$D', 'date')
          ***REMOVED***),
          (l.hour = function(e) {
            return this.$g(e, '$H', n)
          ***REMOVED***),
          (l.minute = function(e) {
            return this.$g(e, '$m', r)
          ***REMOVED***),
          (l.second = function(e) {
            return this.$g(e, '$s', t)
          ***REMOVED***),
          (l.millisecond = function(t) {
            return this.$g(t, '$ms', e)
          ***REMOVED***),
          (l.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
          ***REMOVED***),
          (l.valueOf = function() {
            return this.$d.getTime()
          ***REMOVED***),
          (l.startOf = function(e, a) {
            var p = this,
              c = !!v.u(a) || a,
              d = v.p(e),
              l = function(e, t) {
                var r = v.w(p.$u ? Date.UTC(p.$y, t, e) : new Date(p.$y, t, e), p)
                return c ? r : r.endOf(i)
              ***REMOVED***,
              m = function(e, t) {
                return v.w(
                  p.toDate()[e].apply(p.toDate(), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                  p
              ***REMOVED***
              ***REMOVED***,
              g = this.$W,
              h = this.$M,
              y = this.$D,
              f = 'set' + (this.$u ? 'UTC' : '')
            switch (d) {
              case u:
                return c ? l(1, 0) : l(31, 11)
              case o:
                return c ? l(1, h) : l(0, h + 1)
              case s:
                var b = this.$locale().weekStart || 0,
                  _ = (g < b ? g + 7 : g) - b
                return l(c ? y - _ : y + (6 - _), h)
              case i:
              case 'date':
                return m(f + 'Hours', 0)
              case n:
                return m(f + 'Minutes', 1)
              case r:
                return m(f + 'Seconds', 2)
              case t:
                return m(f + 'Milliseconds', 3)
              default:
                return this.clone()
            ***REMOVED***
          ***REMOVED***),
          (l.endOf = function(e) {
            return this.startOf(e, !1)
          ***REMOVED***),
          (l.$set = function(s, a) {
            var p,
              c = v.p(s),
              d = 'set' + (this.$u ? 'UTC' : ''),
              l = ((p = {***REMOVED***),
              (p[i] = d + 'Date'),
              (p.date = d + 'Date'),
              (p[o] = d + 'Month'),
              (p[u] = d + 'FullYear'),
              (p[n] = d + 'Hours'),
              (p[r] = d + 'Minutes'),
              (p[t] = d + 'Seconds'),
              (p[e] = d + 'Milliseconds'),
              p)[c],
              m = c === i ? this.$D + (a - this.$W) : a
            if (c === o || c === u) {
              var g = this.clone().set('date', 1)
              g.$d[l](m),
                g.init(),
                (this.$d = g.set('date', Math.min(this.$D, g.daysInMonth())).toDate())
            ***REMOVED*** else l && this.$d[l](m)
            return this.init(), this
          ***REMOVED***),
          (l.set = function(e, t) {
            return this.clone().$set(e, t)
          ***REMOVED***),
          (l.get = function(e) {
            return this[v.p(e)]()
          ***REMOVED***),
          (l.add = function(e, a) {
            var p,
              c = this
            e = Number(e)
            var d = v.p(a),
              l = function(t) {
                var r = _(c)
                return v.w(r.date(r.date() + Math.round(t * e)), c)
              ***REMOVED***
            if (d === o) return this.set(o, this.$M + e)
            if (d === u) return this.set(u, this.$y + e)
            if (d === i) return l(1)
            if (d === s) return l(7)
            var m = ((p = {***REMOVED***), (p[r] = 6e4), (p[n] = 36e5), (p[t] = 1e3), p)[d] || 1,
              g = this.$d.getTime() + e * m
            return v.w(g, this)
          ***REMOVED***),
          (l.subtract = function(e, t) {
            return this.add(-1 * e, t)
          ***REMOVED***),
          (l.format = function(e) {
            var t = this
            if (!this.isValid()) return 'Invalid Date'
            var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
              n = v.z(this),
              i = this.$locale(),
              s = this.$H,
              o = this.$m,
              a = this.$M,
              u = i.weekdays,
              p = i.months,
              c = function(e, n, i, s) {
                return (e && (e[n] || e(t, r))) || i[n].substr(0, s)
              ***REMOVED***,
              l = function(e) {
                return v.s(s % 12 || 12, e, '0')
              ***REMOVED***,
              m =
                i.meridiem ||
                function(e, t, r) {
                  var n = e < 12 ? 'AM' : 'PM'
                  return r ? n.toLowerCase() : n
                ***REMOVED***,
              g = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: v.s(a + 1, 2, '0'),
                MMM: c(i.monthsShort, a, p, 3),
                MMMM: p[a] || p(this, r),
                D: this.$D,
                DD: v.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: c(i.weekdaysMin, this.$W, u, 2),
                ddd: c(i.weekdaysShort, this.$W, u, 3),
                dddd: u[this.$W],
                H: String(s),
                HH: v.s(s, 2, '0'),
                h: l(1),
                hh: l(2),
                a: m(s, o, !0),
                A: m(s, o, !1),
                m: String(o),
                mm: v.s(o, 2, '0'),
                s: String(this.$s),
                ss: v.s(this.$s, 2, '0'),
                SSS: v.s(this.$ms, 3, '0'),
                Z: n
              ***REMOVED***
            return r.replace(d, function(e, t) {
              return t || g[e] || n.replace(':', '')
            ***REMOVED***)
          ***REMOVED***),
          (l.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          ***REMOVED***),
          (l.diff = function(e, p, c) {
            var d,
              l = v.p(p),
              m = _(e),
              g = 6e4 * (m.utcOffset() - this.utcOffset()),
              h = this - m,
              y = v.m(this, m)
            return (
              (y =
                ((d = {***REMOVED***),
                (d[u] = y / 12),
                (d[o] = y),
                (d[a] = y / 3),
                (d[s] = (h - g) / 6048e5),
                (d[i] = (h - g) / 864e5),
                (d[n] = h / 36e5),
                (d[r] = h / 6e4),
                (d[t] = h / 1e3),
                d)[l] || h),
              c ? y : v.a(y)
          ***REMOVED***
          ***REMOVED***),
          (l.daysInMonth = function() {
            return this.endOf(o).$D
          ***REMOVED***),
          (l.$locale = function() {
            return y[this.$L]
          ***REMOVED***),
          (l.locale = function(e, t) {
            if (!e) return this.$L
            var r = this.clone(),
              n = b(e, t, !0)
            return n && (r.$L = n), r
          ***REMOVED***),
          (l.clone = function() {
            return v.w(this.$d, this)
          ***REMOVED***),
          (l.toDate = function() {
            return new Date(this.valueOf())
          ***REMOVED***),
          (l.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
          ***REMOVED***),
          (l.toISOString = function() {
            return this.$d.toISOString()
          ***REMOVED***),
          (l.toString = function() {
            return this.$d.toUTCString()
          ***REMOVED***),
          c
      ***REMOVED***
      ***REMOVED***)()
      return (
        (_.prototype = q.prototype),
        (_.extend = function(e, t) {
          return e(t, q, _), _
        ***REMOVED***),
        (_.locale = b),
        (_.isDayjs = f),
        (_.unix = function(e) {
          return _(1e3 * e)
        ***REMOVED***),
        (_.en = y[h]),
        (_.Ls = y),
        _
    ***REMOVED***
    ***REMOVED***)
  ***REMOVED***,
  631: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent'
    ]
    e.exports = function parseHeaders(e) {
      var t = {***REMOVED***
      var r
      var s
      var o
      if (!e) {
        return t
      ***REMOVED***
      n.forEach(e.split('\n'), function parser(e) {
        o = e.indexOf(':')
        r = n.trim(e.substr(0, o)).toLowerCase()
        s = n.trim(e.substr(o + 1))
        if (r) {
          if (t[r] && i.indexOf(r) >= 0) {
            return
          ***REMOVED***
          if (r === 'set-cookie') {
            t[r] = (t[r] ? t[r] : []).concat([s])
          ***REMOVED*** else {
            t[r] = t[r] ? t[r] + ', ' + s : s
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***)
      return t
    ***REMOVED***
  ***REMOVED***,
  649: function(e, t, r) {
    e.exports = getLastPage
    const n = r(265)
    function getLastPage(e, t, r) {
      return n(e, t, 'last', r)
    ***REMOVED***
  ***REMOVED***,
  650: function(e, i, s) {
    'use strict'
    Object.defineProperty(i, '__esModule', { value: !0 ***REMOVED***)
    var u,
      p = (u = s(53)) && 'object' == typeof u && 'default' in u ? u.default : u
    function n(e, t) {
      for (var r, n = 0; n < t.length; n++)
        ((r = t[n]).enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
    ***REMOVED***
    function r(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            ***REMOVED***)
          : (e[t] = r),
        e
    ***REMOVED***
    ***REMOVED***
    function a() {
      return (a =
        Object.assign ||
        function(e) {
          for (var t, r = 1; r < arguments.length; r++)
            for (var n in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          return e
        ***REMOVED***).apply(this, arguments)
    ***REMOVED***
    function o(e, t) {
      if (null == e) return {***REMOVED***
      var r,
        n,
        i = (function(e, t) {
          if (null == e) return {***REMOVED***
          var r,
            n,
            i = {***REMOVED***,
            s = Object.keys(e)
          for (n = 0; n < s.length; n++) (r = s[n]), 0 <= t.indexOf(r) || (i[r] = e[r])
          return i
        ***REMOVED***)(e, t)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        for (n = 0; n < s.length; n++)
          (r = s[n]),
            !(0 <= t.indexOf(r)) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r])
      ***REMOVED***
      return i
    ***REMOVED***
    var c,
      d = Object.freeze({
        LAST_7_DAYS: 'LAST_7_DAYS',
        LAST_30_DAYS: 'LAST_30_DAYS',
        LAST_6_MONTHS: 'LAST_6_MONTHS',
        LAST_YEAR: 'LAST_YEAR'
      ***REMOVED***),
      l = function(e) {
        var t = e.dateRange,
          r = e.projectName,
          n = void 0 === r ? null : r,
          i = e.branchNames,
          s = void 0 === i ? [] : i
        return { start: t.startDate, end: t.endDate, project: n, branches: s.join(',') ***REMOVED***
      ***REMOVED***,
      m = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {***REMOVED***,
          t = e.timeout,
          r = void 0 === t ? null : t,
          n = e.useWritesOnly,
          i = void 0 === n ? null : n,
          s = e.projectName,
          o = void 0 === s ? null : s
        return { timeout: r, writes_only: i, project: o ***REMOVED***
      ***REMOVED***,
      g = function(e) {
        var t = e.date,
          r = e.projectName,
          n = void 0 === r ? null : r,
          i = e.branchNames
        return { date: t, project: n, branches: (void 0 === i ? [] : i).join(',') ***REMOVED***
      ***REMOVED***,
      h = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {***REMOVED***,
          t = e.authorUsername,
          r = void 0 === t ? null : t,
          n = e.pageNumber,
          i = void 0 === n ? null : n
        return { author: r, page: i ***REMOVED***
      ***REMOVED***,
      y = Object.freeze(
        (r((c = {***REMOVED***), d.LAST_7_DAYS, 'last_7_days'),
        r(c, d.LAST_30_DAYS, 'last_30_days'),
        r(c, d.LAST_6_MONTHS, 'last_6_months'),
        r(c, d.LAST_YEAR, 'last_year'),
        c)
    ***REMOVED***,
      f = (function() {
        function t(e) {
          ;(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          ***REMOVED***)(this, t),
            (this.apiKey = e),
            (this.axiosConfiguration = p.create({
              baseURL: 'https://wakatime.com/api/v1/',
              headers: {
                Authorization: 'Basic '.concat(Buffer.from(this.apiKey).toString('base64'))
              ***REMOVED***
            ***REMOVED***))
        ***REMOVED***
        return (
          (function(e, t, r) {
            t && n(e.prototype, t), r && n(e, r)
          ***REMOVED***)(t, [
            {
              key: 'getUser',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e)).then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMe',
              value: function() {
                return this.axiosConfiguration.get('users/current').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getTeams',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/teams')).then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyTeams',
              value: function() {
                return this.axiosConfiguration.get('users/current/teams').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getUserAgents',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/'.concat(e, '/user_agents'))
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyUserAgents',
              value: function() {
                return this.axiosConfiguration.get('users/current/user_agents').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getTeamMembers',
              value: function(e) {
                var t = e.userId,
                  r = e.teamId
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/teams/').concat(r, '/members'))
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyTeamMembers',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/current/teams/'.concat(e, '/members'))
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getTeamMemberSummary',
              value: function(e) {
                var t = e.userId,
                  r = e.teamId,
                  n = e.teamMemberId,
                  i = o(e, ['userId', 'teamId', 'teamMemberId'])
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/teams/')
                      .concat(r, '/members/')
                      .concat(n, '/summaries'),
                    { params: l(i) ***REMOVED***
                ***REMOVED***
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyTeamMemberSummary',
              value: function(e) {
                var t = e.teamId,
                  r = e.teamMemberId,
                  n = o(e, ['teamId', 'teamMemberId'])
                return this.axiosConfiguration
                  .get('users/current/teams/'.concat(t, '/members/').concat(r, '/summaries'), {
                    params: l(n)
                  ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getUserSummary',
              value: function(e) {
                var t = e.userId,
                  r = o(e, ['userId'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/summaries'), { params: l(r) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMySummary',
              value: function(e) {
                var t = a({***REMOVED***, e)
                return this.axiosConfiguration
                  .get('users/current/summaries', { params: l(t) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getUserStats',
              value: function(e) {
                var t = e.userId,
                  r = e.range,
                  n = o(e, ['userId', 'range'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/stats/').concat(y[r]), { params: m(n) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyStats',
              value: function(e) {
                var t = e.range,
                  r = o(e, ['range'])
                return this.axiosConfiguration
                  .get('users/current/stats/'.concat(y[t]), { params: m(r) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getProjects',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/'.concat(e, '/projects'))
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyProjects',
              value: function() {
                return this.axiosConfiguration.get('users/current/projects').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getLeaders',
              value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {***REMOVED***,
                  t = e.language,
                  r = void 0 === t ? null : t,
                  n = e.pageNumber,
                  i = void 0 === n ? null : n
                return this.axiosConfiguration
                  .get('leaders', { params: { language: r, page: i ***REMOVED*** ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getHeartbeats',
              value: function(e) {
                var t = e.userId,
                  r = e.date
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/heartbeats'), { params: { date: r ***REMOVED*** ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyHeartbeats',
              value: function(e) {
                return this.axiosConfiguration
                  .get('users/current/heartbeats', { params: { date: e ***REMOVED*** ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getGoals',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/goals')).then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyGoals',
              value: function() {
                return this.axiosConfiguration.get('users/current/goals').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getDurations',
              value: function(e) {
                var t = e.userId,
                  r = o(e, ['userId'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/durations'), { params: g(r) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyDurations',
              value: function(e) {
                var t = a({***REMOVED***, e)
                return this.axiosConfiguration
                  .get('users/current/durations', { params: g(t) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getCommits',
              value: function(e) {
                var t = e.userId,
                  r = e.projectName,
                  n = o(e, ['userId', 'projectName'])
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/projects/').concat(r, '/commits'), { params: h(n) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyCommits',
              value: function(e) {
                var t = e.projectName,
                  r = o(e, ['projectName'])
                return this.axiosConfiguration
                  .get('users/current/projects/'.concat(t, '/commits'), { params: h(r) ***REMOVED***)
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMetadata',
              value: function() {
                return this.axiosConfiguration.get('meta')
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getOrganizations',
              value: function(e) {
                return this.axiosConfiguration.get('users/'.concat(e, '/orgs')).then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyOrganizations',
              value: function() {
                return this.axiosConfiguration.get('users/current/orgs').then(function(e) {
                  return e.data
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getOrganizationDashboards',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId
                return this.axiosConfiguration
                  .get('users/'.concat(t, '/orgs/').concat(r))
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyOrganizationDashboards',
              value: function(e) {
                return this.getOrganizationDashboards({ userId: 'current', organizationId: e ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getOrganizationDashboardMembers',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId,
                  n = e.dashboardId
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/orgs/')
                      .concat(r, '/dashboards/')
                      .concat(n, '/members')
                ***REMOVED***
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyOrganizationDashboardMembers',
              value: function(e) {
                var t = e.organizationId,
                  r = e.dashboardId
                return this.getOrganizationDashboardMembers({
                  userId: 'current',
                  organizationId: t,
                  dashboardId: r
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getOrganizationDashboardMemberSummaries',
              value: function(e) {
                var t = e.userId,
                  r = e.organizationId,
                  n = e.dashboardId,
                  i = e.memberId
                return this.axiosConfiguration
                  .get(
                    'users/'
                      .concat(t, '/orgs/')
                      .concat(r, '/dashboards/')
                      .concat(n, '/members/')
                      .concat(i, '/summaries')
                ***REMOVED***
                  .then(function(e) {
                    return e.data
                  ***REMOVED***)
              ***REMOVED***
            ***REMOVED***,
            {
              key: 'getMyOrganizationDashboardMemberSummaries',
              value: function(e) {
                var t = e.organizationId,
                  r = e.dashboardId,
                  n = e.memberId
                return this.getOrganizationDashboardMemberSummaries({
                  userId: 'current',
                  organizationId: t,
                  dashboardId: r,
                  memberId: n
                ***REMOVED***)
              ***REMOVED***
            ***REMOVED***
          ]),
          t
      ***REMOVED***
      ***REMOVED***)()
    ;(i.RANGE = d), (i.WakaTimeClient = f)
  ***REMOVED***,
  654: function(e) {
    e.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']
    if (process.platform !== 'win32') {
      e.exports.push(
        'SIGVTALRM',
        'SIGXCPU',
        'SIGXFSZ',
        'SIGUSR2',
        'SIGTRAP',
        'SIGSYS',
        'SIGQUIT',
        'SIGIOT'
    ***REMOVED***
    ***REMOVED***
    if (process.platform === 'linux') {
      e.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED')
    ***REMOVED***
  ***REMOVED***,
  669: function(e) {
    e.exports = require('util')
  ***REMOVED***,
  670: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(564)
    var s = r(133)
    var o = r(605)
    var a = r(211)
    var u = r(549).http
    var p = r(549).https
    var c = r(835)
    var d = r(903)
    var l = r(361)
    var m = r(26)
    var g = r(369)
    e.exports = function httpAdapter(e) {
      return new Promise(function dispatchHttpRequest(t, r) {
        var h = e.data
        var y = e.headers
        var f
        if (!y['User-Agent'] && !y['user-agent']) {
          y['User-Agent'] = 'axios/' + l.version
        ***REMOVED***
        if (h && !n.isStream(h)) {
          if (Buffer.isBuffer(h)) {
          ***REMOVED*** else if (n.isArrayBuffer(h)) {
            h = new Buffer(new Uint8Array(h))
          ***REMOVED*** else if (n.isString(h)) {
            h = new Buffer(h, 'utf-8')
          ***REMOVED*** else {
            return r(
              m(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
            ***REMOVED***
          ***REMOVED***
          ***REMOVED***
          y['Content-Length'] = h.length
        ***REMOVED***
        var b = undefined
        if (e.auth) {
          var _ = e.auth.username || ''
          var v = e.auth.password || ''
          b = _ + ':' + v
        ***REMOVED***
        var q = c.parse(e.url)
        var w = q.protocol || 'http:'
        if (!b && q.auth) {
          var E = q.auth.split(':')
          var T = E[0] || ''
          var k = E[1] || ''
          b = T + ':' + k
        ***REMOVED***
        if (b) {
          delete y.Authorization
        ***REMOVED***
        var C = w === 'https:'
        var j = C ? e.httpsAgent : e.httpAgent
        var S = {
          path: s(q.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method,
          headers: y,
          agent: j,
          auth: b
        ***REMOVED***
        if (e.socketPath) {
          S.socketPath = e.socketPath
        ***REMOVED*** else {
          S.hostname = q.hostname
          S.port = q.port
        ***REMOVED***
        var O = e.proxy
        if (!O && O !== false) {
          var x = w.slice(0, -1) + '_proxy'
          var P = process.env[x] || process.env[x.toUpperCase()]
          if (P) {
            var R = c.parse(P)
            O = { host: R.hostname, port: R.port ***REMOVED***
            if (R.auth) {
              var A = R.auth.split(':')
              O.auth = { username: A[0], password: A[1] ***REMOVED***
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
        if (O) {
          S.hostname = O.host
          S.host = O.host
          S.headers.host = q.hostname + (q.port ? ':' + q.port : '')
          S.port = O.port
          S.path = w + '//' + q.hostname + (q.port ? ':' + q.port : '') + S.path
          if (O.auth) {
            var G = new Buffer(O.auth.username + ':' + O.auth.password, 'utf8').toString('base64')
            S.headers['Proxy-Authorization'] = 'Basic ' + G
          ***REMOVED***
        ***REMOVED***
        var D
        if (e.transport) {
          D = e.transport
        ***REMOVED*** else if (e.maxRedirects === 0) {
          D = C ? a : o
        ***REMOVED*** else {
          if (e.maxRedirects) {
            S.maxRedirects = e.maxRedirects
          ***REMOVED***
          D = C ? p : u
        ***REMOVED***
        if (e.maxContentLength && e.maxContentLength > -1) {
          S.maxBodyLength = e.maxContentLength
        ***REMOVED***
        var L = D.request(S, function handleResponse(n) {
          if (L.aborted) return
          clearTimeout(f)
          f = null
          var s = n
          switch (n.headers['content-encoding']) {
            case 'gzip':
            case 'compress':
            case 'deflate':
              s = s.pipe(d.createUnzip())
              delete n.headers['content-encoding']
              break
          ***REMOVED***
          var o = n.req || L
          var a = {
            status: n.statusCode,
            statusText: n.statusMessage,
            headers: n.headers,
            config: e,
            request: o
          ***REMOVED***
          if (e.responseType === 'stream') {
            a.data = s
            i(t, r, a)
          ***REMOVED*** else {
            var u = []
            s.on('data', function handleStreamData(t) {
              u.push(t)
              if (e.maxContentLength > -1 && Buffer.concat(u).length > e.maxContentLength) {
                s.destroy()
                r(m('maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, o))
              ***REMOVED***
            ***REMOVED***)
            s.on('error', function handleStreamError(t) {
              if (L.aborted) return
              r(g(t, e, null, o))
            ***REMOVED***)
            s.on('end', function handleStreamEnd() {
              var n = Buffer.concat(u)
              if (e.responseType !== 'arraybuffer') {
                n = n.toString('utf8')
              ***REMOVED***
              a.data = n
              i(t, r, a)
            ***REMOVED***)
          ***REMOVED***
        ***REMOVED***)
        L.on('error', function handleRequestError(t) {
          if (L.aborted) return
          r(g(t, e, null, L))
        ***REMOVED***)
        if (e.timeout && !f) {
          f = setTimeout(function handleRequestTimeout() {
            L.abort()
            r(m('timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', L))
          ***REMOVED***, e.timeout)
        ***REMOVED***
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (L.aborted) return
            L.abort()
            r(e)
          ***REMOVED***)
        ***REMOVED***
        if (n.isStream(h)) {
          h.pipe(L)
        ***REMOVED*** else {
          L.end(h)
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  674: function(e, t, r) {
    e.exports = authenticate
    const { Deprecation: n ***REMOVED*** = r(692)
    const i = r(969)
    const s = i((e, t) => e.warn(t))
    function authenticate(e, t) {
      s(
        e.octokit.log,
        new n(
          '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
      ***REMOVED***
    ***REMOVED***
      if (!t) {
        e.auth = false
        return
      ***REMOVED***
      switch (t.type) {
        case 'basic':
          if (!t.username || !t.password) {
            throw new Error('Basic authentication requires both a username and password to be set')
          ***REMOVED***
          break
        case 'oauth':
          if (!t.token && !(t.key && t.secret)) {
            throw new Error('OAuth2 authentication requires a token or key & secret to be set')
          ***REMOVED***
          break
        case 'token':
        case 'app':
          if (!t.token) {
            throw new Error('Token authentication requires a token to be set')
          ***REMOVED***
          break
        default:
          throw new Error("Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'")
      ***REMOVED***
      e.auth = t
    ***REMOVED***
  ***REMOVED***,
  675: function(e) {
    e.exports = function btoa(e) {
      return new Buffer(e).toString('base64')
    ***REMOVED***
  ***REMOVED***,
  688: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = n.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          var e = /(msie|trident)/i.test(navigator.userAgent)
          var t = document.createElement('a')
          var r
          function resolveURL(r) {
            var n = r
            if (e) {
              t.setAttribute('href', n)
              n = t.href
            ***REMOVED***
            t.setAttribute('href', n)
            return {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname: t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname
            ***REMOVED***
          ***REMOVED***
          r = resolveURL(window.location.href)
          return function isURLSameOrigin(e) {
            var t = n.isString(e) ? resolveURL(e) : e
            return t.protocol === r.protocol && t.host === r.host
          ***REMOVED***
        ***REMOVED***)()
      : (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true
          ***REMOVED***
        ***REMOVED***)()
  ***REMOVED***,
  692: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    class Deprecation extends Error {
      constructor(e) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        ***REMOVED***
        this.name = 'Deprecation'
      ***REMOVED***
    ***REMOVED***
    t.Deprecation = Deprecation
  ***REMOVED***,
  696: function(e) {
    'use strict'
    function isObject(e) {
      return e != null && typeof e === 'object' && Array.isArray(e) === false
    ***REMOVED***
    function isObjectObject(e) {
      return isObject(e) === true && Object.prototype.toString.call(e) === '[object Object]'
    ***REMOVED***
    function isPlainObject(e) {
      var t, r
      if (isObjectObject(e) === false) return false
      t = e.constructor
      if (typeof t !== 'function') return false
      r = t.prototype
      if (isObjectObject(r) === false) return false
      if (r.hasOwnProperty('isPrototypeOf') === false) {
        return false
      ***REMOVED***
      return true
    ***REMOVED***
    e.exports = isPlainObject
  ***REMOVED***,
  697: function(e) {
    'use strict'
    e.exports = (e, t) => {
      t = t || (() => {***REMOVED***)
      return e.then(
        e =>
          new Promise(e => {
            e(t())
          ***REMOVED***).then(() => e),
        e =>
          new Promise(e => {
            e(t())
          ***REMOVED***).then(() => {
            throw e
          ***REMOVED***)
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  727: function(e) {
    'use strict'
    e.exports = function bind(e, t) {
      return function wrap() {
        var r = new Array(arguments.length)
        for (var n = 0; n < r.length; n++) {
          r[n] = arguments[n]
        ***REMOVED***
        return e.apply(t, r)
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  732: function(e) {
    'use strict'
    e.exports = function isCancel(e) {
      return !!(e && e.__CANCEL__)
    ***REMOVED***
  ***REMOVED***,
  742: function(e, t, r) {
    var n = r(747)
    var i
    if (process.platform === 'win32' || global.TESTING_WINDOWS) {
      i = r(818)
    ***REMOVED*** else {
      i = r(197)
    ***REMOVED***
    e.exports = isexe
    isexe.sync = sync
    function isexe(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {***REMOVED***
      ***REMOVED***
      if (!r) {
        if (typeof Promise !== 'function') {
          throw new TypeError('callback not provided')
        ***REMOVED***
        return new Promise(function(r, n) {
          isexe(e, t || {***REMOVED***, function(e, t) {
            if (e) {
              n(e)
            ***REMOVED*** else {
              r(t)
            ***REMOVED***
          ***REMOVED***)
        ***REMOVED***)
      ***REMOVED***
      i(e, t || {***REMOVED***, function(e, n) {
        if (e) {
          if (e.code === 'EACCES' || (t && t.ignoreErrors)) {
            e = null
            n = false
          ***REMOVED***
        ***REMOVED***
        r(e, n)
      ***REMOVED***)
    ***REMOVED***
    function sync(e, t) {
    ***REMOVED***
        return i.sync(e, t || {***REMOVED***)
      ***REMOVED*** catch (e) {
        if ((t && t.ignoreErrors) || e.code === 'EACCES') {
          return false
        ***REMOVED*** else {
          throw e
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  747: function(e) {
    e.exports = require('fs')
  ***REMOVED***,
  753: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    ***REMOVED***
    var n = r(385)
    var i = r(796)
    var s = _interopDefault(r(696))
    var o = _interopDefault(r(454))
    var a = r(463)
    const u = '5.3.1'
    function getBufferResponse(e) {
      return e.arrayBuffer()
    ***REMOVED***
    function fetchWrapper(e) {
      if (s(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body)
      ***REMOVED***
      let t = {***REMOVED***
      let r
      let n
      const i = (e.request && e.request.fetch) || o
      return i(
        e.url,
        Object.assign(
          { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect ***REMOVED***,
          e.request
      ***REMOVED***
    ***REMOVED***
        .then(i => {
          n = i.url
          r = i.status
          for (const e of i.headers) {
            t[e[0]] = e[1]
          ***REMOVED***
          if (r === 204 || r === 205) {
            return
          ***REMOVED***
          if (e.method === 'HEAD') {
            if (r < 400) {
              return
            ***REMOVED***
            throw new a.RequestError(i.statusText, r, { headers: t, request: e ***REMOVED***)
          ***REMOVED***
          if (r === 304) {
            throw new a.RequestError('Not modified', r, { headers: t, request: e ***REMOVED***)
          ***REMOVED***
          if (r >= 400) {
            return i.text().then(n => {
              const i = new a.RequestError(n, r, { headers: t, request: e ***REMOVED***)
            ***REMOVED***
                let e = JSON.parse(i.message)
                Object.assign(i, e)
                let t = e.errors
                i.message = i.message + ': ' + t.map(JSON.stringify).join(', ')
              ***REMOVED*** catch (e) {***REMOVED***
              throw i
            ***REMOVED***)
          ***REMOVED***
          const s = i.headers.get('content-type')
          if (/application\/json/.test(s)) {
            return i.json()
          ***REMOVED***
          if (!s || /^text\/|charset=utf-8$/.test(s)) {
            return i.text()
          ***REMOVED***
          return getBufferResponse(i)
        ***REMOVED***)
        .then(e => {
          return { status: r, url: n, headers: t, data: e ***REMOVED***
        ***REMOVED***)
        .catch(r => {
          if (r instanceof a.RequestError) {
            throw r
          ***REMOVED***
          throw new a.RequestError(r.message, 500, { headers: t, request: e ***REMOVED***)
        ***REMOVED***)
    ***REMOVED***
    function withDefaults(e, t) {
      const r = e.defaults(t)
      const n = function(e, t) {
        const n = r.merge(e, t)
        if (!n.request || !n.request.hook) {
          return fetchWrapper(r.parse(n))
        ***REMOVED***
        const i = (e, t) => {
          return fetchWrapper(r.parse(r.merge(e, t)))
        ***REMOVED***
        Object.assign(i, { endpoint: r, defaults: withDefaults.bind(null, r) ***REMOVED***)
        return n.request.hook(i, n)
      ***REMOVED***
      return Object.assign(n, { endpoint: r, defaults: withDefaults.bind(null, r) ***REMOVED***)
    ***REMOVED***
    const p = withDefaults(n.endpoint, {
      headers: { 'user-agent': `octokit-request.js/${u***REMOVED*** ${i.getUserAgent()***REMOVED***` ***REMOVED***
    ***REMOVED***)
    t.request = p
  ***REMOVED***,
  761: function(e) {
    var t = 1e3
    var r = t * 60
    var n = r * 60
    var i = n * 24
    var s = i * 365.25
    e.exports = function(e, t) {
      t = t || {***REMOVED***
      var r = typeof e
      if (r === 'string' && e.length > 0) {
        return parse(e)
      ***REMOVED*** else if (r === 'number' && isNaN(e) === false) {
        return t.long ? fmtLong(e) : fmtShort(e)
      ***REMOVED***
      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e))
    ***REMOVED***
    function parse(e) {
      e = String(e)
      if (e.length > 100) {
        return
      ***REMOVED***
      var o = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
    ***REMOVED***
      if (!o) {
        return
      ***REMOVED***
      var a = parseFloat(o[1])
      var u = (o[2] || 'ms').toLowerCase()
      switch (u) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return a * s
        case 'days':
        case 'day':
        case 'd':
          return a * i
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return a * n
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return a * r
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return a * t
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return a
        default:
          return undefined
      ***REMOVED***
    ***REMOVED***
    function fmtShort(e) {
      if (e >= i) {
        return Math.round(e / i) + 'd'
      ***REMOVED***
      if (e >= n) {
        return Math.round(e / n) + 'h'
      ***REMOVED***
      if (e >= r) {
        return Math.round(e / r) + 'm'
      ***REMOVED***
      if (e >= t) {
        return Math.round(e / t) + 's'
      ***REMOVED***
      return e + 'ms'
    ***REMOVED***
    function fmtLong(e) {
      return (
        plural(e, i, 'day') ||
        plural(e, n, 'hour') ||
        plural(e, r, 'minute') ||
        plural(e, t, 'second') ||
        e + ' ms'
    ***REMOVED***
    ***REMOVED***
    function plural(e, t, r) {
      if (e < t) {
        return
      ***REMOVED***
      if (e < t * 1.5) {
        return Math.floor(e / t) + ' ' + r
      ***REMOVED***
      return Math.ceil(e / t) + ' ' + r + 's'
    ***REMOVED***
  ***REMOVED***,
  763: function(e) {
    e.exports = removeHook
    function removeHook(e, t, r) {
      if (!e.registry[t]) {
        return
      ***REMOVED***
      var n = e.registry[t]
        .map(function(e) {
          return e.orig
        ***REMOVED***)
        .indexOf(r)
      if (n === -1) {
        return
      ***REMOVED***
      e.registry[t].splice(n, 1)
    ***REMOVED***
  ***REMOVED***,
  768: function(e) {
    'use strict'
    e.exports = function(e) {
      var t = typeof e === 'string' ? '\n' : '\n'.charCodeAt()
      var r = typeof e === 'string' ? '\r' : '\r'.charCodeAt()
      if (e[e.length - 1] === t) {
        e = e.slice(0, e.length - 1)
      ***REMOVED***
      if (e[e.length - 1] === r) {
        e = e.slice(0, e.length - 1)
      ***REMOVED***
      return e
    ***REMOVED***
  ***REMOVED***,
  777: function(e, t, r) {
    e.exports = getFirstPage
    const n = r(265)
    function getFirstPage(e, t, r) {
      return n(e, t, 'first', r)
    ***REMOVED***
  ***REMOVED***,
  779: function(e, t, r) {
    'use strict'
    var n = r(529)
    var i = r(35)
    var s = r(283)
    var o = r(946)
    function Axios(e) {
      this.defaults = e
      this.interceptors = { request: new s(), response: new s() ***REMOVED***
    ***REMOVED***
    Axios.prototype.request = function request(e) {
      if (typeof e === 'string') {
        e = i.merge({ url: arguments[0] ***REMOVED***, arguments[1])
      ***REMOVED***
      e = i.merge(n, { method: 'get' ***REMOVED***, this.defaults, e)
      e.method = e.method.toLowerCase()
      var t = [o, undefined]
      var r = Promise.resolve(e)
      this.interceptors.request.forEach(function unshiftRequestInterceptors(e) {
        t.unshift(e.fulfilled, e.rejected)
      ***REMOVED***)
      this.interceptors.response.forEach(function pushResponseInterceptors(e) {
        t.push(e.fulfilled, e.rejected)
      ***REMOVED***)
      while (t.length) {
        r = r.then(t.shift(), t.shift())
      ***REMOVED***
      return r
    ***REMOVED***
    i.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(e) {
      Axios.prototype[e] = function(t, r) {
        return this.request(i.merge(r || {***REMOVED***, { method: e, url: t ***REMOVED***))
      ***REMOVED***
    ***REMOVED***)
    i.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      Axios.prototype[e] = function(t, r, n) {
        return this.request(i.merge(n || {***REMOVED***, { method: e, url: t, data: r ***REMOVED***))
      ***REMOVED***
    ***REMOVED***)
    e.exports = Axios
  ***REMOVED***,
  784: function(e, t, r) {
    if (typeof process === 'undefined' || process.type === 'renderer') {
      e.exports = r(794)
    ***REMOVED*** else {
      e.exports = r(81)
    ***REMOVED***
  ***REMOVED***,
  794: function(e, t, r) {
    t = e.exports = r(25)
    t.log = log
    t.formatArgs = formatArgs
    t.save = save
    t.load = load
    t.useColors = useColors
    t.storage =
      'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
        ? chrome.storage.local
        : localstorage()
    t.colors = [
      '#0000CC',
      '#0000FF',
      '#0033CC',
      '#0033FF',
      '#0066CC',
      '#0066FF',
      '#0099CC',
      '#0099FF',
      '#00CC00',
      '#00CC33',
      '#00CC66',
      '#00CC99',
      '#00CCCC',
      '#00CCFF',
      '#3300CC',
      '#3300FF',
      '#3333CC',
      '#3333FF',
      '#3366CC',
      '#3366FF',
      '#3399CC',
      '#3399FF',
      '#33CC00',
      '#33CC33',
      '#33CC66',
      '#33CC99',
      '#33CCCC',
      '#33CCFF',
      '#6600CC',
      '#6600FF',
      '#6633CC',
      '#6633FF',
      '#66CC00',
      '#66CC33',
      '#9900CC',
      '#9900FF',
      '#9933CC',
      '#9933FF',
      '#99CC00',
      '#99CC33',
      '#CC0000',
      '#CC0033',
      '#CC0066',
      '#CC0099',
      '#CC00CC',
      '#CC00FF',
      '#CC3300',
      '#CC3333',
      '#CC3366',
      '#CC3399',
      '#CC33CC',
      '#CC33FF',
      '#CC6600',
      '#CC6633',
      '#CC9900',
      '#CC9933',
      '#CCCC00',
      '#CCCC33',
      '#FF0000',
      '#FF0033',
      '#FF0066',
      '#FF0099',
      '#FF00CC',
      '#FF00FF',
      '#FF3300',
      '#FF3333',
      '#FF3366',
      '#FF3399',
      '#FF33CC',
      '#FF33FF',
      '#FF6600',
      '#FF6633',
      '#FF9900',
      '#FF9933',
      '#FFCC00',
      '#FFCC33'
    ]
    function useColors() {
      if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true
      ***REMOVED***
      if (
        typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
    ***REMOVED*** {
        return false
      ***REMOVED***
      return (
        (typeof document !== 'undefined' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window !== 'undefined' &&
          window.console &&
          (window.console.firebug || (window.console.exception && window.console.table))) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    ***REMOVED***
    ***REMOVED***
    t.formatters.j = function(e) {
    ***REMOVED***
        return JSON.stringify(e)
      ***REMOVED*** catch (e) {
        return '[UnexpectedJSONParseError]: ' + e.message
      ***REMOVED***
    ***REMOVED***
    function formatArgs(e) {
      var r = this.useColors
      e[0] =
        (r ? '%c' : '') +
        this.namespace +
        (r ? ' %c' : ' ') +
        e[0] +
        (r ? '%c ' : ' ') +
        '+' +
        t.humanize(this.diff)
      if (!r) return
      var n = 'color: ' + this.color
      e.splice(1, 0, n, 'color: inherit')
      var i = 0
      var s = 0
      e[0].replace(/%[a-zA-Z%]/g, function(e) {
        if ('%%' === e) return
        i++
        if ('%c' === e) {
          s = i
        ***REMOVED***
      ***REMOVED***)
      e.splice(s, 0, n)
    ***REMOVED***
    function log() {
      return (
        'object' === typeof console &&
        console.log &&
        Function.prototype.apply.call(console.log, console, arguments)
    ***REMOVED***
    ***REMOVED***
    function save(e) {
    ***REMOVED***
        if (null == e) {
          t.storage.removeItem('debug')
        ***REMOVED*** else {
          t.storage.debug = e
        ***REMOVED***
      ***REMOVED*** catch (e) {***REMOVED***
    ***REMOVED***
    function load() {
      var e
    ***REMOVED***
        e = t.storage.debug
      ***REMOVED*** catch (e) {***REMOVED***
      if (!e && typeof process !== 'undefined' && 'env' in process) {
        e = process.env.DEBUG
      ***REMOVED***
      return e
    ***REMOVED***
    t.enable(load())
    function localstorage() {
    ***REMOVED***
        return window.localStorage
      ***REMOVED*** catch (e) {***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  796: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    ***REMOVED***
    var n = _interopDefault(r(2))
    function getUserAgent() {
    ***REMOVED***
        return `Node.js/${process.version.substr(1)***REMOVED*** (${n()***REMOVED***; ${process.arch***REMOVED***)`
      ***REMOVED*** catch (e) {
        if (/wmic os get Caption/.test(e.message)) {
          return 'Windows <version undetectable>'
        ***REMOVED***
        throw e
      ***REMOVED***
    ***REMOVED***
    t.getUserAgent = getUserAgent
  ***REMOVED***,
  812: function(e) {
    e.exports = function isBuffer(e) {
      return (
        e != null &&
        e.constructor != null &&
        typeof e.constructor.isBuffer === 'function' &&
        e.constructor.isBuffer(e)
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  813: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    async function auth(e) {
      const t = e.split(/\./).length === 3 ? 'app' : /^v\d+\./.test(e) ? 'installation' : 'oauth'
      return { type: 'token', token: e, tokenType: t ***REMOVED***
    ***REMOVED***
    function withAuthorizationPrefix(e) {
      if (e.split(/\./).length === 3) {
        return `bearer ${e***REMOVED***`
      ***REMOVED***
      return `token ${e***REMOVED***`
    ***REMOVED***
    async function hook(e, t, r, n) {
      const i = t.endpoint.merge(r, n)
      i.headers.authorization = withAuthorizationPrefix(e)
      return t(i)
    ***REMOVED***
    const r = function createTokenAuth(e) {
      if (!e) {
        throw new Error('[@octokit/auth-token] No token passed to createTokenAuth')
      ***REMOVED***
      if (typeof e !== 'string') {
        throw new Error('[@octokit/auth-token] Token passed to createTokenAuth is not a string')
      ***REMOVED***
      e = e.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, e), { hook: hook.bind(null, e) ***REMOVED***)
    ***REMOVED***
    t.createTokenAuth = r
  ***REMOVED***,
  814: function(e, t, r) {
    e.exports = which
    which.sync = whichSync
    var n =
      process.platform === 'win32' ||
      process.env.OSTYPE === 'cygwin' ||
      process.env.OSTYPE === 'msys'
    var i = r(622)
    var s = n ? ';' : ':'
    var o = r(742)
    function getNotFoundError(e) {
      var t = new Error('not found: ' + e)
      t.code = 'ENOENT'
      return t
    ***REMOVED***
    function getPathInfo(e, t) {
      var r = t.colon || s
      var i = t.path || process.env.PATH || ''
      var o = ['']
      i = i.split(r)
      var a = ''
      if (n) {
        i.unshift(process.cwd())
        a = t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
        o = a.split(r)
        if (e.indexOf('.') !== -1 && o[0] !== '') o.unshift('')
      ***REMOVED***
      if (e.match(/\//) || (n && e.match(/\\/))) i = ['']
      return { env: i, ext: o, extExe: a ***REMOVED***
    ***REMOVED***
    function which(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {***REMOVED***
      ***REMOVED***
      var n = getPathInfo(e, t)
      var s = n.env
      var a = n.ext
      var u = n.extExe
      var p = []
      ;(function F(n, c) {
        if (n === c) {
          if (t.all && p.length) return r(null, p)
          else return r(getNotFoundError(e))
        ***REMOVED***
        var d = s[n]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = i.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        ***REMOVED***
        ;(function E(e, i) {
          if (e === i) return F(n + 1, c)
          var s = a[e]
          o(l + s, { pathExt: u ***REMOVED***, function(n, o) {
            if (!n && o) {
              if (t.all) p.push(l + s)
              else return r(null, l + s)
            ***REMOVED***
            return E(e + 1, i)
          ***REMOVED***)
        ***REMOVED***)(0, a.length)
      ***REMOVED***)(0, s.length)
    ***REMOVED***
    function whichSync(e, t) {
      t = t || {***REMOVED***
      var r = getPathInfo(e, t)
      var n = r.env
      var s = r.ext
      var a = r.extExe
      var u = []
      for (var p = 0, c = n.length; p < c; p++) {
        var d = n[p]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = i.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        ***REMOVED***
        for (var m = 0, g = s.length; m < g; m++) {
          var h = l + s[m]
          var y
        ***REMOVED***
            y = o.sync(h, { pathExt: a ***REMOVED***)
            if (y) {
              if (t.all) u.push(h)
              else return h
            ***REMOVED***
          ***REMOVED*** catch (e) {***REMOVED***
        ***REMOVED***
      ***REMOVED***
      if (t.all && u.length) return u
      if (t.nothrow) return null
      throw getNotFoundError(e)
    ***REMOVED***
  ***REMOVED***,
  816: function(e) {
    'use strict'
    e.exports = /^#!.*/
  ***REMOVED***,
  818: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var n = r(747)
    function checkPathExt(e, t) {
      var r = t.pathExt !== undefined ? t.pathExt : process.env.PATHEXT
      if (!r) {
        return true
      ***REMOVED***
      r = r.split(';')
      if (r.indexOf('') !== -1) {
        return true
      ***REMOVED***
      for (var n = 0; n < r.length; n++) {
        var i = r[n].toLowerCase()
        if (i && e.substr(-i.length).toLowerCase() === i) {
          return true
        ***REMOVED***
      ***REMOVED***
      return false
    ***REMOVED***
    function checkStat(e, t, r) {
      if (!e.isSymbolicLink() && !e.isFile()) {
        return false
      ***REMOVED***
      return checkPathExt(t, r)
    ***REMOVED***
    function isexe(e, t, r) {
      n.stat(e, function(n, i) {
        r(n, n ? false : checkStat(i, e, t))
      ***REMOVED***)
    ***REMOVED***
    function sync(e, t) {
      return checkStat(n.statSync(e), e, t)
    ***REMOVED***
  ***REMOVED***,
  825: function(e) {
    'use strict'
    e.exports = function spread(e) {
      return function wrap(t) {
        return e.apply(null, t)
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  826: function(e) {
    'use strict'
    function Cancel(e) {
      this.message = e
    ***REMOVED***
    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    ***REMOVED***
    Cancel.prototype.__CANCEL__ = true
    e.exports = Cancel
  ***REMOVED***,
  835: function(e) {
    e.exports = require('url')
  ***REMOVED***,
  842: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    var n = r(692)
    var i = {
      actions: {
        cancelWorkflowRun: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id/cancel'
        ***REMOVED***,
        createOrUpdateSecretForRepo: {
          method: 'PUT',
          params: {
            encrypted_value: { type: 'string' ***REMOVED***,
            key_id: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/secrets/:name'
        ***REMOVED***,
        createRegistrationToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners/registration-token'
        ***REMOVED***,
        createRemoveToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners/remove-token'
        ***REMOVED***,
        deleteArtifact: {
          method: 'DELETE',
          params: {
            artifact_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        ***REMOVED***,
        deleteSecretFromRepo: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/secrets/:name'
        ***REMOVED***,
        downloadArtifact: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' ***REMOVED***,
            artifact_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format'
        ***REMOVED***,
        getArtifact: {
          method: 'GET',
          params: {
            artifact_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        ***REMOVED***,
        getPublicKey: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/secrets/public-key'
        ***REMOVED***,
        getSecret: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/secrets/:name'
        ***REMOVED***,
        getSelfHostedRunner: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            runner_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        ***REMOVED***,
        getWorkflow: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            workflow_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id'
        ***REMOVED***,
        getWorkflowJob: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/jobs/:job_id'
        ***REMOVED***,
        getWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id'
        ***REMOVED***,
        listDownloadsForSelfHostedRunnerApplication: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners/downloads'
        ***REMOVED***,
        listJobsForWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id/jobs'
        ***REMOVED***,
        listRepoWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            event: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs'
        ***REMOVED***,
        listRepoWorkflows: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/workflows'
        ***REMOVED***,
        listSecretsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/secrets'
        ***REMOVED***,
        listSelfHostedRunnersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners'
        ***REMOVED***,
        listWorkflowJobLogs: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/jobs/:job_id/logs'
        ***REMOVED***,
        listWorkflowRunArtifacts: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id/artifacts'
        ***REMOVED***,
        listWorkflowRunLogs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id/logs'
        ***REMOVED***,
        listWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            event: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' ***REMOVED***,
            workflow_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id/runs'
        ***REMOVED***,
        reRunWorkflow: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            run_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runs/:run_id/rerun'
        ***REMOVED***,
        removeSelfHostedRunner: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            runner_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        ***REMOVED***
      ***REMOVED***,
      activity: {
        checkStarringRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/starred/:owner/:repo'
        ***REMOVED***,
        deleteRepoSubscription: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/subscription'
        ***REMOVED***,
        deleteThreadSubscription: {
          method: 'DELETE',
          params: { thread_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/notifications/threads/:thread_id/subscription'
        ***REMOVED***,
        getRepoSubscription: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/subscription'
        ***REMOVED***,
        getThread: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/notifications/threads/:thread_id'
        ***REMOVED***,
        getThreadSubscription: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/notifications/threads/:thread_id/subscription'
        ***REMOVED***,
        listEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/events/orgs/:org'
        ***REMOVED***,
        listEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/events'
        ***REMOVED***,
        listFeeds: { method: 'GET', params: {***REMOVED***, url: '/feeds' ***REMOVED***,
        listNotifications: {
          method: 'GET',
          params: {
            all: { type: 'boolean' ***REMOVED***,
            before: { type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            participating: { type: 'boolean' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/notifications'
        ***REMOVED***,
        listNotificationsForRepo: {
          method: 'GET',
          params: {
            all: { type: 'boolean' ***REMOVED***,
            before: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            participating: { type: 'boolean' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/notifications'
        ***REMOVED***,
        listPublicEvents: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/events'
        ***REMOVED***,
        listPublicEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/events'
        ***REMOVED***,
        listPublicEventsForRepoNetwork: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/networks/:owner/:repo/events'
        ***REMOVED***,
        listPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/events/public'
        ***REMOVED***,
        listReceivedEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/received_events'
        ***REMOVED***,
        listReceivedPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/received_events/public'
        ***REMOVED***,
        listRepoEvents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/events'
        ***REMOVED***,
        listReposStarredByAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/starred'
        ***REMOVED***,
        listReposStarredByUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/starred'
        ***REMOVED***,
        listReposWatchedByUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/subscriptions'
        ***REMOVED***,
        listStargazersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stargazers'
        ***REMOVED***,
        listWatchedReposForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/subscriptions'
        ***REMOVED***,
        listWatchersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/subscribers'
        ***REMOVED***,
        markAsRead: {
          method: 'PUT',
          params: { last_read_at: { type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/notifications'
        ***REMOVED***,
        markNotificationsAsReadForRepo: {
          method: 'PUT',
          params: {
            last_read_at: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/notifications'
        ***REMOVED***,
        markThreadAsRead: {
          method: 'PATCH',
          params: { thread_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/notifications/threads/:thread_id'
        ***REMOVED***,
        setRepoSubscription: {
          method: 'PUT',
          params: {
            ignored: { type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            subscribed: { type: 'boolean' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/subscription'
        ***REMOVED***,
        setThreadSubscription: {
          method: 'PUT',
          params: { ignored: { type: 'boolean' ***REMOVED***, thread_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/notifications/threads/:thread_id/subscription'
        ***REMOVED***,
        starRepo: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/starred/:owner/:repo'
        ***REMOVED***,
        unstarRepo: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/starred/:owner/:repo'
        ***REMOVED***
      ***REMOVED***,
      apps: {
        addRepoToInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            installation_id: { required: true, type: 'integer' ***REMOVED***,
            repository_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/user/installations/:installation_id/repositories/:repository_id'
        ***REMOVED***,
        checkAccountIsAssociatedWithAny: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/marketplace_listing/accounts/:account_id'
        ***REMOVED***,
        checkAccountIsAssociatedWithAnyStubbed: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/marketplace_listing/stubbed/accounts/:account_id'
        ***REMOVED***,
        checkAuthorization: {
          deprecated:
            'octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        checkToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            access_token: { type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/token'
        ***REMOVED***,
        createContentAttachment: {
          headers: { accept: 'application/vnd.github.corsair-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            content_reference_id: { required: true, type: 'integer' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/content_references/:content_reference_id/attachments'
        ***REMOVED***,
        createFromManifest: {
          headers: { accept: 'application/vnd.github.fury-preview+json' ***REMOVED***,
          method: 'POST',
          params: { code: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/app-manifests/:code/conversions'
        ***REMOVED***,
        createInstallationToken: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            installation_id: { required: true, type: 'integer' ***REMOVED***,
            permissions: { type: 'object' ***REMOVED***,
            repository_ids: { type: 'integer[]' ***REMOVED***
          ***REMOVED***,
          url: '/app/installations/:installation_id/access_tokens'
        ***REMOVED***,
        deleteAuthorization: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            access_token: { type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/grant'
        ***REMOVED***,
        deleteInstallation: {
          headers: {
            accept:
              'application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json'
          ***REMOVED***,
          method: 'DELETE',
          params: { installation_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/app/installations/:installation_id'
        ***REMOVED***,
        deleteToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            access_token: { type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/token'
        ***REMOVED***,
        findOrgInstallation: {
          deprecated:
            'octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org/installation'
        ***REMOVED***,
        findRepoInstallation: {
          deprecated:
            'octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/installation'
        ***REMOVED***,
        findUserInstallation: {
          deprecated:
            'octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/users/:username/installation'
        ***REMOVED***,
        getAuthenticated: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: {***REMOVED***,
          url: '/app'
        ***REMOVED***,
        getBySlug: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { app_slug: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/apps/:app_slug'
        ***REMOVED***,
        getInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { installation_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/app/installations/:installation_id'
        ***REMOVED***,
        getOrgInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org/installation'
        ***REMOVED***,
        getRepoInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/installation'
        ***REMOVED***,
        getUserInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/users/:username/installation'
        ***REMOVED***,
        listAccountsUserOrOrgOnPlan: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            plan_id: { required: true, type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/marketplace_listing/plans/:plan_id/accounts'
        ***REMOVED***,
        listAccountsUserOrOrgOnPlanStubbed: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            plan_id: { required: true, type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/marketplace_listing/stubbed/plans/:plan_id/accounts'
        ***REMOVED***,
        listInstallationReposForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            installation_id: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/user/installations/:installation_id/repositories'
        ***REMOVED***,
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/app/installations'
        ***REMOVED***,
        listInstallationsForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/installations'
        ***REMOVED***,
        listMarketplacePurchasesForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/marketplace_purchases'
        ***REMOVED***,
        listMarketplacePurchasesForAuthenticatedUserStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/marketplace_purchases/stubbed'
        ***REMOVED***,
        listPlans: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/marketplace_listing/plans'
        ***REMOVED***,
        listPlansStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/marketplace_listing/stubbed/plans'
        ***REMOVED***,
        listRepos: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/installation/repositories'
        ***REMOVED***,
        removeRepoFromInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            installation_id: { required: true, type: 'integer' ***REMOVED***,
            repository_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/user/installations/:installation_id/repositories/:repository_id'
        ***REMOVED***,
        resetAuthorization: {
          deprecated:
            'octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        resetToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            access_token: { type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/token'
        ***REMOVED***,
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        revokeGrantForApplication: {
          deprecated:
            'octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/grants/:access_token'
        ***REMOVED***,
        revokeInstallationToken: {
          headers: { accept: 'application/vnd.github.gambit-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {***REMOVED***,
          url: '/installation/token'
        ***REMOVED***
      ***REMOVED***,
      checks: {
        create: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            actions: { type: 'object[]' ***REMOVED***,
            'actions[].description': { required: true, type: 'string' ***REMOVED***,
            'actions[].identifier': { required: true, type: 'string' ***REMOVED***,
            'actions[].label': { required: true, type: 'string' ***REMOVED***,
            completed_at: { type: 'string' ***REMOVED***,
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            ***REMOVED***,
            details_url: { type: 'string' ***REMOVED***,
            external_id: { type: 'string' ***REMOVED***,
            head_sha: { required: true, type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            output: { type: 'object' ***REMOVED***,
            'output.annotations': { type: 'object[]' ***REMOVED***,
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            ***REMOVED***,
            'output.annotations[].end_column': { type: 'integer' ***REMOVED***,
            'output.annotations[].end_line': { required: true, type: 'integer' ***REMOVED***,
            'output.annotations[].message': { required: true, type: 'string' ***REMOVED***,
            'output.annotations[].path': { required: true, type: 'string' ***REMOVED***,
            'output.annotations[].raw_details': { type: 'string' ***REMOVED***,
            'output.annotations[].start_column': { type: 'integer' ***REMOVED***,
            'output.annotations[].start_line': { required: true, type: 'integer' ***REMOVED***,
            'output.annotations[].title': { type: 'string' ***REMOVED***,
            'output.images': { type: 'object[]' ***REMOVED***,
            'output.images[].alt': { required: true, type: 'string' ***REMOVED***,
            'output.images[].caption': { type: 'string' ***REMOVED***,
            'output.images[].image_url': { required: true, type: 'string' ***REMOVED***,
            'output.summary': { required: true, type: 'string' ***REMOVED***,
            'output.text': { type: 'string' ***REMOVED***,
            'output.title': { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            started_at: { type: 'string' ***REMOVED***,
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-runs'
        ***REMOVED***,
        createSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            head_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-suites'
        ***REMOVED***,
        get: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        ***REMOVED***,
        getSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            check_suite_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-suites/:check_suite_id'
        ***REMOVED***,
        listAnnotations: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-runs/:check_run_id/annotations'
        ***REMOVED***,
        listForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            check_name: { type: 'string' ***REMOVED***,
            filter: { enum: ['latest', 'all'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref/check-runs'
        ***REMOVED***,
        listForSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            check_name: { type: 'string' ***REMOVED***,
            check_suite_id: { required: true, type: 'integer' ***REMOVED***,
            filter: { enum: ['latest', 'all'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/check-runs'
        ***REMOVED***,
        listSuitesForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            app_id: { type: 'integer' ***REMOVED***,
            check_name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref/check-suites'
        ***REMOVED***,
        rerequestSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            check_suite_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/rerequest'
        ***REMOVED***,
        setSuitesPreferences: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            auto_trigger_checks: { type: 'object[]' ***REMOVED***,
            'auto_trigger_checks[].app_id': { required: true, type: 'integer' ***REMOVED***,
            'auto_trigger_checks[].setting': { required: true, type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-suites/preferences'
        ***REMOVED***,
        update: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            actions: { type: 'object[]' ***REMOVED***,
            'actions[].description': { required: true, type: 'string' ***REMOVED***,
            'actions[].identifier': { required: true, type: 'string' ***REMOVED***,
            'actions[].label': { required: true, type: 'string' ***REMOVED***,
            check_run_id: { required: true, type: 'integer' ***REMOVED***,
            completed_at: { type: 'string' ***REMOVED***,
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            ***REMOVED***,
            details_url: { type: 'string' ***REMOVED***,
            external_id: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            output: { type: 'object' ***REMOVED***,
            'output.annotations': { type: 'object[]' ***REMOVED***,
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            ***REMOVED***,
            'output.annotations[].end_column': { type: 'integer' ***REMOVED***,
            'output.annotations[].end_line': { required: true, type: 'integer' ***REMOVED***,
            'output.annotations[].message': { required: true, type: 'string' ***REMOVED***,
            'output.annotations[].path': { required: true, type: 'string' ***REMOVED***,
            'output.annotations[].raw_details': { type: 'string' ***REMOVED***,
            'output.annotations[].start_column': { type: 'integer' ***REMOVED***,
            'output.annotations[].start_line': { required: true, type: 'integer' ***REMOVED***,
            'output.annotations[].title': { type: 'string' ***REMOVED***,
            'output.images': { type: 'object[]' ***REMOVED***,
            'output.images[].alt': { required: true, type: 'string' ***REMOVED***,
            'output.images[].caption': { type: 'string' ***REMOVED***,
            'output.images[].image_url': { required: true, type: 'string' ***REMOVED***,
            'output.summary': { required: true, type: 'string' ***REMOVED***,
            'output.text': { type: 'string' ***REMOVED***,
            'output.title': { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            started_at: { type: 'string' ***REMOVED***,
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        ***REMOVED***
      ***REMOVED***,
      codesOfConduct: {
        getConductCode: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' ***REMOVED***,
          method: 'GET',
          params: { key: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/codes_of_conduct/:key'
        ***REMOVED***,
        getForRepo: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/community/code_of_conduct'
        ***REMOVED***,
        listConductCodes: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' ***REMOVED***,
          method: 'GET',
          params: {***REMOVED***,
          url: '/codes_of_conduct'
        ***REMOVED***
      ***REMOVED***,
      emojis: { get: { method: 'GET', params: {***REMOVED***, url: '/emojis' ***REMOVED*** ***REMOVED***,
      gists: {
        checkIsStarred: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id/star'
        ***REMOVED***,
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' ***REMOVED***,
            files: { required: true, type: 'object' ***REMOVED***,
            'files.content': { type: 'string' ***REMOVED***,
            public: { type: 'boolean' ***REMOVED***
          ***REMOVED***,
          url: '/gists'
        ***REMOVED***,
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            gist_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/comments'
        ***REMOVED***,
        delete: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id'
        ***REMOVED***,
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            gist_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/comments/:comment_id'
        ***REMOVED***,
        fork: {
          method: 'POST',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id/forks'
        ***REMOVED***,
        get: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id'
        ***REMOVED***,
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            gist_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/comments/:comment_id'
        ***REMOVED***,
        getRevision: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' ***REMOVED***,
            sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/:sha'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists'
        ***REMOVED***,
        listComments: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/comments'
        ***REMOVED***,
        listCommits: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/commits'
        ***REMOVED***,
        listForks: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/forks'
        ***REMOVED***,
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/public'
        ***REMOVED***,
        listPublicForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/gists'
        ***REMOVED***,
        listStarred: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/starred'
        ***REMOVED***,
        star: {
          method: 'PUT',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id/star'
        ***REMOVED***,
        unstar: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gists/:gist_id/star'
        ***REMOVED***,
        update: {
          method: 'PATCH',
          params: {
            description: { type: 'string' ***REMOVED***,
            files: { type: 'object' ***REMOVED***,
            'files.content': { type: 'string' ***REMOVED***,
            'files.filename': { type: 'string' ***REMOVED***,
            gist_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id'
        ***REMOVED***,
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            gist_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/gists/:gist_id/comments/:comment_id'
        ***REMOVED***
      ***REMOVED***,
      git: {
        createBlob: {
          method: 'POST',
          params: {
            content: { required: true, type: 'string' ***REMOVED***,
            encoding: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/blobs'
        ***REMOVED***,
        createCommit: {
          method: 'POST',
          params: {
            author: { type: 'object' ***REMOVED***,
            'author.date': { type: 'string' ***REMOVED***,
            'author.email': { type: 'string' ***REMOVED***,
            'author.name': { type: 'string' ***REMOVED***,
            committer: { type: 'object' ***REMOVED***,
            'committer.date': { type: 'string' ***REMOVED***,
            'committer.email': { type: 'string' ***REMOVED***,
            'committer.name': { type: 'string' ***REMOVED***,
            message: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            parents: { required: true, type: 'string[]' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            signature: { type: 'string' ***REMOVED***,
            tree: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/commits'
        ***REMOVED***,
        createRef: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/refs'
        ***REMOVED***,
        createTag: {
          method: 'POST',
          params: {
            message: { required: true, type: 'string' ***REMOVED***,
            object: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tag: { required: true, type: 'string' ***REMOVED***,
            tagger: { type: 'object' ***REMOVED***,
            'tagger.date': { type: 'string' ***REMOVED***,
            'tagger.email': { type: 'string' ***REMOVED***,
            'tagger.name': { type: 'string' ***REMOVED***,
            type: { enum: ['commit', 'tree', 'blob'], required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/tags'
        ***REMOVED***,
        createTree: {
          method: 'POST',
          params: {
            base_tree: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tree: { required: true, type: 'object[]' ***REMOVED***,
            'tree[].content': { type: 'string' ***REMOVED***,
            'tree[].mode': {
              enum: ['100644', '100755', '040000', '160000', '120000'],
              type: 'string'
            ***REMOVED***,
            'tree[].path': { type: 'string' ***REMOVED***,
            'tree[].sha': { allowNull: true, type: 'string' ***REMOVED***,
            'tree[].type': { enum: ['blob', 'tree', 'commit'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/trees'
        ***REMOVED***,
        deleteRef: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/refs/:ref'
        ***REMOVED***,
        getBlob: {
          method: 'GET',
          params: {
            file_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/blobs/:file_sha'
        ***REMOVED***,
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/commits/:commit_sha'
        ***REMOVED***,
        getRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/ref/:ref'
        ***REMOVED***,
        getTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tag_sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/tags/:tag_sha'
        ***REMOVED***,
        getTree: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            recursive: { enum: ['1'], type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tree_sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/trees/:tree_sha'
        ***REMOVED***,
        listMatchingRefs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/matching-refs/:ref'
        ***REMOVED***,
        listRefs: {
          method: 'GET',
          params: {
            namespace: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/refs/:namespace'
        ***REMOVED***,
        updateRef: {
          method: 'PATCH',
          params: {
            force: { type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/git/refs/:ref'
        ***REMOVED***
      ***REMOVED***,
      gitignore: {
        getTemplate: {
          method: 'GET',
          params: { name: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/gitignore/templates/:name'
        ***REMOVED***,
        listTemplates: { method: 'GET', params: {***REMOVED***, url: '/gitignore/templates' ***REMOVED***
      ***REMOVED***,
      interactions: {
        addOrUpdateRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/interaction-limits'
        ***REMOVED***,
        addOrUpdateRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/interaction-limits'
        ***REMOVED***,
        getRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org/interaction-limits'
        ***REMOVED***,
        getRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/interaction-limits'
        ***REMOVED***,
        removeRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org/interaction-limits'
        ***REMOVED***,
        removeRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/interaction-limits'
        ***REMOVED***
      ***REMOVED***,
      issues: {
        addAssignees: {
          method: 'POST',
          params: {
            assignees: { type: 'string[]' ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        ***REMOVED***,
        addLabels: {
          method: 'POST',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            labels: { required: true, type: 'string[]' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        ***REMOVED***,
        checkAssignee: {
          method: 'GET',
          params: {
            assignee: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/assignees/:assignee'
        ***REMOVED***,
        create: {
          method: 'POST',
          params: {
            assignee: { type: 'string' ***REMOVED***,
            assignees: { type: 'string[]' ***REMOVED***,
            body: { type: 'string' ***REMOVED***,
            labels: { type: 'string[]' ***REMOVED***,
            milestone: { type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues'
        ***REMOVED***,
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        ***REMOVED***,
        createLabel: {
          method: 'POST',
          params: {
            color: { required: true, type: 'string' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/labels'
        ***REMOVED***,
        createMilestone: {
          method: 'POST',
          params: {
            description: { type: 'string' ***REMOVED***,
            due_on: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed'], type: 'string' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones'
        ***REMOVED***,
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        ***REMOVED***,
        deleteLabel: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/labels/:name'
        ***REMOVED***,
        deleteMilestone: {
          method: 'DELETE',
          params: {
            milestone_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        ***REMOVED***,
        get: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number'
        ***REMOVED***,
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        ***REMOVED***,
        getEvent: {
          method: 'GET',
          params: {
            event_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/events/:event_id'
        ***REMOVED***,
        getLabel: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/labels/:name'
        ***REMOVED***,
        getMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            ***REMOVED***,
            labels: { type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/issues'
        ***REMOVED***,
        listAssignees: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/assignees'
        ***REMOVED***,
        listComments: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        ***REMOVED***,
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments'
        ***REMOVED***,
        listEvents: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/events'
        ***REMOVED***,
        listEventsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/events'
        ***REMOVED***,
        listEventsForTimeline: {
          headers: { accept: 'application/vnd.github.mockingbird-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/timeline'
        ***REMOVED***,
        listForAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            ***REMOVED***,
            labels: { type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/issues'
        ***REMOVED***,
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            ***REMOVED***,
            labels: { type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/issues'
        ***REMOVED***,
        listForRepo: {
          method: 'GET',
          params: {
            assignee: { type: 'string' ***REMOVED***,
            creator: { type: 'string' ***REMOVED***,
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            labels: { type: 'string' ***REMOVED***,
            mentioned: { type: 'string' ***REMOVED***,
            milestone: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues'
        ***REMOVED***,
        listLabelsForMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones/:milestone_number/labels'
        ***REMOVED***,
        listLabelsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/labels'
        ***REMOVED***,
        listLabelsOnIssue: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        ***REMOVED***,
        listMilestonesForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['due_on', 'completeness'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones'
        ***REMOVED***,
        lock: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            lock_reason: { enum: ['off-topic', 'too heated', 'resolved', 'spam'], type: 'string' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        ***REMOVED***,
        removeAssignees: {
          method: 'DELETE',
          params: {
            assignees: { type: 'string[]' ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        ***REMOVED***,
        removeLabel: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/labels/:name'
        ***REMOVED***,
        removeLabels: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        ***REMOVED***,
        replaceLabels: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            labels: { type: 'string[]' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        ***REMOVED***,
        unlock: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        ***REMOVED***,
        update: {
          method: 'PATCH',
          params: {
            assignee: { type: 'string' ***REMOVED***,
            assignees: { type: 'string[]' ***REMOVED***,
            body: { type: 'string' ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            labels: { type: 'string[]' ***REMOVED***,
            milestone: { allowNull: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed'], type: 'string' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number'
        ***REMOVED***,
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        ***REMOVED***,
        updateLabel: {
          method: 'PATCH',
          params: {
            color: { type: 'string' ***REMOVED***,
            current_name: { required: true, type: 'string' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/labels/:current_name'
        ***REMOVED***,
        updateMilestone: {
          method: 'PATCH',
          params: {
            description: { type: 'string' ***REMOVED***,
            due_on: { type: 'string' ***REMOVED***,
            milestone_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed'], type: 'string' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        ***REMOVED***
      ***REMOVED***,
      licenses: {
        get: {
          method: 'GET',
          params: { license: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/licenses/:license'
        ***REMOVED***,
        getForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/license'
        ***REMOVED***,
        list: {
          deprecated:
            'octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)',
          method: 'GET',
          params: {***REMOVED***,
          url: '/licenses'
        ***REMOVED***,
        listCommonlyUsed: { method: 'GET', params: {***REMOVED***, url: '/licenses' ***REMOVED***
      ***REMOVED***,
      markdown: {
        render: {
          method: 'POST',
          params: {
            context: { type: 'string' ***REMOVED***,
            mode: { enum: ['markdown', 'gfm'], type: 'string' ***REMOVED***,
            text: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/markdown'
        ***REMOVED***,
        renderRaw: {
          headers: { 'content-type': 'text/plain; charset=utf-8' ***REMOVED***,
          method: 'POST',
          params: { data: { mapTo: 'data', required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/markdown/raw'
        ***REMOVED***
      ***REMOVED***,
      meta: { get: { method: 'GET', params: {***REMOVED***, url: '/meta' ***REMOVED*** ***REMOVED***,
      migrations: {
        cancelImport: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import'
        ***REMOVED***,
        deleteArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { migration_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/migrations/:migration_id/archive'
        ***REMOVED***,
        deleteArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id/archive'
        ***REMOVED***,
        downloadArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id/archive'
        ***REMOVED***,
        getArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/migrations/:migration_id/archive'
        ***REMOVED***,
        getArchiveForOrg: {
          deprecated:
            'octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)',
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id/archive'
        ***REMOVED***,
        getCommitAuthors: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import/authors'
        ***REMOVED***,
        getImportProgress: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import'
        ***REMOVED***,
        getLargeFiles: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import/large_files'
        ***REMOVED***,
        getStatusForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/migrations/:migration_id'
        ***REMOVED***,
        getStatusForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id'
        ***REMOVED***,
        listForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/migrations'
        ***REMOVED***,
        listForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations'
        ***REMOVED***,
        listReposForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id/repositories'
        ***REMOVED***,
        listReposForUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/user/:migration_id/repositories'
        ***REMOVED***,
        mapCommitAuthor: {
          method: 'PATCH',
          params: {
            author_id: { required: true, type: 'integer' ***REMOVED***,
            email: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import/authors/:author_id'
        ***REMOVED***,
        setLfsPreference: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            use_lfs: { enum: ['opt_in', 'opt_out'], required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import/lfs'
        ***REMOVED***,
        startForAuthenticatedUser: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' ***REMOVED***,
            lock_repositories: { type: 'boolean' ***REMOVED***,
            repositories: { required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/user/migrations'
        ***REMOVED***,
        startForOrg: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' ***REMOVED***,
            lock_repositories: { type: 'boolean' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            repositories: { required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations'
        ***REMOVED***,
        startImport: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tfvc_project: { type: 'string' ***REMOVED***,
            vcs: { enum: ['subversion', 'git', 'mercurial', 'tfvc'], type: 'string' ***REMOVED***,
            vcs_password: { type: 'string' ***REMOVED***,
            vcs_url: { required: true, type: 'string' ***REMOVED***,
            vcs_username: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import'
        ***REMOVED***,
        unlockRepoForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            repo_name: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/migrations/:migration_id/repos/:repo_name/lock'
        ***REMOVED***,
        unlockRepoForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            repo_name: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/migrations/:migration_id/repos/:repo_name/lock'
        ***REMOVED***,
        updateImport: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            vcs_password: { type: 'string' ***REMOVED***,
            vcs_username: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/import'
        ***REMOVED***
      ***REMOVED***,
      oauthAuthorizations: {
        checkAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        createAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization',
          method: 'POST',
          params: {
            client_id: { type: 'string' ***REMOVED***,
            client_secret: { type: 'string' ***REMOVED***,
            fingerprint: { type: 'string' ***REMOVED***,
            note: { required: true, type: 'string' ***REMOVED***,
            note_url: { type: 'string' ***REMOVED***,
            scopes: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/authorizations'
        ***REMOVED***,
        deleteAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization',
          method: 'DELETE',
          params: { authorization_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/authorizations/:authorization_id'
        ***REMOVED***,
        deleteGrant: {
          deprecated:
            'octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant',
          method: 'DELETE',
          params: { grant_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/applications/grants/:grant_id'
        ***REMOVED***,
        getAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization',
          method: 'GET',
          params: { authorization_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/authorizations/:authorization_id'
        ***REMOVED***,
        getGrant: {
          deprecated:
            'octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant',
          method: 'GET',
          params: { grant_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/applications/grants/:grant_id'
        ***REMOVED***,
        getOrCreateAuthorizationForApp: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' ***REMOVED***,
            client_secret: { required: true, type: 'string' ***REMOVED***,
            fingerprint: { type: 'string' ***REMOVED***,
            note: { type: 'string' ***REMOVED***,
            note_url: { type: 'string' ***REMOVED***,
            scopes: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/authorizations/clients/:client_id'
        ***REMOVED***,
        getOrCreateAuthorizationForAppAndFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' ***REMOVED***,
            client_secret: { required: true, type: 'string' ***REMOVED***,
            fingerprint: { required: true, type: 'string' ***REMOVED***,
            note: { type: 'string' ***REMOVED***,
            note_url: { type: 'string' ***REMOVED***,
            scopes: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/authorizations/clients/:client_id/:fingerprint'
        ***REMOVED***,
        getOrCreateAuthorizationForAppFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' ***REMOVED***,
            client_secret: { required: true, type: 'string' ***REMOVED***,
            fingerprint: { required: true, type: 'string' ***REMOVED***,
            note: { type: 'string' ***REMOVED***,
            note_url: { type: 'string' ***REMOVED***,
            scopes: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/authorizations/clients/:client_id/:fingerprint'
        ***REMOVED***,
        listAuthorizations: {
          deprecated:
            'octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations',
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/authorizations'
        ***REMOVED***,
        listGrants: {
          deprecated:
            'octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants',
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/applications/grants'
        ***REMOVED***,
        resetAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/tokens/:access_token'
        ***REMOVED***,
        revokeGrantForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' ***REMOVED***,
            client_id: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/applications/:client_id/grants/:access_token'
        ***REMOVED***,
        updateAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization',
          method: 'PATCH',
          params: {
            add_scopes: { type: 'string[]' ***REMOVED***,
            authorization_id: { required: true, type: 'integer' ***REMOVED***,
            fingerprint: { type: 'string' ***REMOVED***,
            note: { type: 'string' ***REMOVED***,
            note_url: { type: 'string' ***REMOVED***,
            remove_scopes: { type: 'string[]' ***REMOVED***,
            scopes: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/authorizations/:authorization_id'
        ***REMOVED***
      ***REMOVED***,
      orgs: {
        addOrUpdateMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            role: { enum: ['admin', 'member'], type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/memberships/:username'
        ***REMOVED***,
        blockUser: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/blocks/:username'
        ***REMOVED***,
        checkBlockedUser: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/blocks/:username'
        ***REMOVED***,
        checkMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/members/:username'
        ***REMOVED***,
        checkPublicMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/public_members/:username'
        ***REMOVED***,
        concealMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/public_members/:username'
        ***REMOVED***,
        convertMemberToOutsideCollaborator: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/outside_collaborators/:username'
        ***REMOVED***,
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' ***REMOVED***,
            config: { required: true, type: 'object' ***REMOVED***,
            'config.content_type': { type: 'string' ***REMOVED***,
            'config.insecure_ssl': { type: 'string' ***REMOVED***,
            'config.secret': { type: 'string' ***REMOVED***,
            'config.url': { required: true, type: 'string' ***REMOVED***,
            events: { type: 'string[]' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks'
        ***REMOVED***,
        createInvitation: {
          method: 'POST',
          params: {
            email: { type: 'string' ***REMOVED***,
            invitee_id: { type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            role: { enum: ['admin', 'direct_member', 'billing_manager'], type: 'string' ***REMOVED***,
            team_ids: { type: 'integer[]' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/invitations'
        ***REMOVED***,
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks/:hook_id'
        ***REMOVED***,
        get: {
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org'
        ***REMOVED***,
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks/:hook_id'
        ***REMOVED***,
        getMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/memberships/:username'
        ***REMOVED***,
        getMembershipForAuthenticatedUser: {
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/memberships/orgs/:org'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/organizations'
        ***REMOVED***,
        listBlockedUsers: {
          method: 'GET',
          params: { org: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/orgs/:org/blocks'
        ***REMOVED***,
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/orgs'
        ***REMOVED***,
        listForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/orgs'
        ***REMOVED***,
        listHooks: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks'
        ***REMOVED***,
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/installations'
        ***REMOVED***,
        listInvitationTeams: {
          method: 'GET',
          params: {
            invitation_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/invitations/:invitation_id/teams'
        ***REMOVED***,
        listMembers: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            role: { enum: ['all', 'admin', 'member'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/members'
        ***REMOVED***,
        listMemberships: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            state: { enum: ['active', 'pending'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/memberships/orgs'
        ***REMOVED***,
        listOutsideCollaborators: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/outside_collaborators'
        ***REMOVED***,
        listPendingInvitations: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/invitations'
        ***REMOVED***,
        listPublicMembers: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/public_members'
        ***REMOVED***,
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks/:hook_id/pings'
        ***REMOVED***,
        publicizeMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/public_members/:username'
        ***REMOVED***,
        removeMember: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/members/:username'
        ***REMOVED***,
        removeMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/memberships/:username'
        ***REMOVED***,
        removeOutsideCollaborator: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/outside_collaborators/:username'
        ***REMOVED***,
        unblockUser: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/blocks/:username'
        ***REMOVED***,
        update: {
          method: 'PATCH',
          params: {
            billing_email: { type: 'string' ***REMOVED***,
            company: { type: 'string' ***REMOVED***,
            default_repository_permission: {
              enum: ['read', 'write', 'admin', 'none'],
              type: 'string'
            ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            email: { type: 'string' ***REMOVED***,
            has_organization_projects: { type: 'boolean' ***REMOVED***,
            has_repository_projects: { type: 'boolean' ***REMOVED***,
            location: { type: 'string' ***REMOVED***,
            members_allowed_repository_creation_type: {
              enum: ['all', 'private', 'none'],
              type: 'string'
            ***REMOVED***,
            members_can_create_internal_repositories: { type: 'boolean' ***REMOVED***,
            members_can_create_private_repositories: { type: 'boolean' ***REMOVED***,
            members_can_create_public_repositories: { type: 'boolean' ***REMOVED***,
            members_can_create_repositories: { type: 'boolean' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org'
        ***REMOVED***,
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' ***REMOVED***,
            config: { type: 'object' ***REMOVED***,
            'config.content_type': { type: 'string' ***REMOVED***,
            'config.insecure_ssl': { type: 'string' ***REMOVED***,
            'config.secret': { type: 'string' ***REMOVED***,
            'config.url': { required: true, type: 'string' ***REMOVED***,
            events: { type: 'string[]' ***REMOVED***,
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/hooks/:hook_id'
        ***REMOVED***,
        updateMembership: {
          method: 'PATCH',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['active'], required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/memberships/orgs/:org'
        ***REMOVED***
      ***REMOVED***,
      projects: {
        addCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/collaborators/:username'
        ***REMOVED***,
        createCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' ***REMOVED***,
            content_id: { type: 'integer' ***REMOVED***,
            content_type: { type: 'string' ***REMOVED***,
            note: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/:column_id/cards'
        ***REMOVED***,
        createColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            name: { required: true, type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/columns'
        ***REMOVED***,
        createForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: { body: { type: 'string' ***REMOVED***, name: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/projects'
        ***REMOVED***,
        createForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            body: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/projects'
        ***REMOVED***,
        createForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            body: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/projects'
        ***REMOVED***,
        delete: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { project_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/:project_id'
        ***REMOVED***,
        deleteCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { card_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/columns/cards/:card_id'
        ***REMOVED***,
        deleteColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { column_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/columns/:column_id'
        ***REMOVED***,
        get: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: { project_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/:project_id'
        ***REMOVED***,
        getCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: { card_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/columns/cards/:card_id'
        ***REMOVED***,
        getColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: { column_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/projects/columns/:column_id'
        ***REMOVED***,
        listCards: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            archived_state: { enum: ['all', 'archived', 'not_archived'], type: 'string' ***REMOVED***,
            column_id: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/:column_id/cards'
        ***REMOVED***,
        listCollaborators: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/collaborators'
        ***REMOVED***,
        listColumns: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/columns'
        ***REMOVED***,
        listForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/projects'
        ***REMOVED***,
        listForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/projects'
        ***REMOVED***,
        listForUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/projects'
        ***REMOVED***,
        moveCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            card_id: { required: true, type: 'integer' ***REMOVED***,
            column_id: { type: 'integer' ***REMOVED***,
            position: { required: true, type: 'string', validation: '^(top|bottom|after:\\d+)$' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/cards/:card_id/moves'
        ***REMOVED***,
        moveColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' ***REMOVED***,
            position: { required: true, type: 'string', validation: '^(first|last|after:\\d+)$' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/:column_id/moves'
        ***REMOVED***,
        removeCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/collaborators/:username'
        ***REMOVED***,
        reviewUserPermissionLevel: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id/collaborators/:username/permission'
        ***REMOVED***,
        update: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            body: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            organization_permission: { type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            state: { enum: ['open', 'closed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/:project_id'
        ***REMOVED***,
        updateCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            archived: { type: 'boolean' ***REMOVED***,
            card_id: { required: true, type: 'integer' ***REMOVED***,
            note: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/cards/:card_id'
        ***REMOVED***,
        updateColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PATCH',
          params: {
            column_id: { required: true, type: 'integer' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/projects/columns/:column_id'
        ***REMOVED***
      ***REMOVED***,
      pulls: {
        checkIfMerged: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        ***REMOVED***,
        create: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' ***REMOVED***,
            body: { type: 'string' ***REMOVED***,
            draft: { type: 'boolean' ***REMOVED***,
            head: { required: true, type: 'string' ***REMOVED***,
            maintainer_can_modify: { type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls'
        ***REMOVED***,
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            commit_id: { required: true, type: 'string' ***REMOVED***,
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            ***REMOVED***,
            line: { type: 'integer' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            position: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' ***REMOVED***,
            start_line: { type: 'integer' ***REMOVED***,
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        ***REMOVED***,
        createCommentReply: {
          deprecated:
            'octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            commit_id: { required: true, type: 'string' ***REMOVED***,
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            ***REMOVED***,
            line: { type: 'integer' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            position: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' ***REMOVED***,
            start_line: { type: 'integer' ***REMOVED***,
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        ***REMOVED***,
        createFromIssue: {
          deprecated:
            'octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request',
          method: 'POST',
          params: {
            base: { required: true, type: 'string' ***REMOVED***,
            draft: { type: 'boolean' ***REMOVED***,
            head: { required: true, type: 'string' ***REMOVED***,
            issue: { required: true, type: 'integer' ***REMOVED***,
            maintainer_can_modify: { type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls'
        ***REMOVED***,
        createReview: {
          method: 'POST',
          params: {
            body: { type: 'string' ***REMOVED***,
            comments: { type: 'object[]' ***REMOVED***,
            'comments[].body': { required: true, type: 'string' ***REMOVED***,
            'comments[].path': { required: true, type: 'string' ***REMOVED***,
            'comments[].position': { required: true, type: 'integer' ***REMOVED***,
            commit_id: { type: 'string' ***REMOVED***,
            event: { enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'], type: 'string' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        ***REMOVED***,
        createReviewCommentReply: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies'
        ***REMOVED***,
        createReviewRequest: {
          method: 'POST',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            reviewers: { type: 'string[]' ***REMOVED***,
            team_reviewers: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        ***REMOVED***,
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        ***REMOVED***,
        deletePendingReview: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        ***REMOVED***,
        deleteReviewRequest: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            reviewers: { type: 'string[]' ***REMOVED***,
            team_reviewers: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        ***REMOVED***,
        dismissReview: {
          method: 'PUT',
          params: {
            message: { required: true, type: 'string' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals'
        ***REMOVED***,
        get: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number'
        ***REMOVED***,
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        ***REMOVED***,
        getCommentsForReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments'
        ***REMOVED***,
        getReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            base: { type: 'string' ***REMOVED***,
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            head: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'popularity', 'long-running'], type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed', 'all'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls'
        ***REMOVED***,
        listComments: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        ***REMOVED***,
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments'
        ***REMOVED***,
        listCommits: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/commits'
        ***REMOVED***,
        listFiles: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/files'
        ***REMOVED***,
        listReviewRequests: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        ***REMOVED***,
        listReviews: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        ***REMOVED***,
        merge: {
          method: 'PUT',
          params: {
            commit_message: { type: 'string' ***REMOVED***,
            commit_title: { type: 'string' ***REMOVED***,
            merge_method: { enum: ['merge', 'squash', 'rebase'], type: 'string' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        ***REMOVED***,
        submitReview: {
          method: 'POST',
          params: {
            body: { type: 'string' ***REMOVED***,
            event: {
              enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'],
              required: true,
              type: 'string'
            ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events'
        ***REMOVED***,
        update: {
          method: 'PATCH',
          params: {
            base: { type: 'string' ***REMOVED***,
            body: { type: 'string' ***REMOVED***,
            maintainer_can_modify: { type: 'boolean' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: { enum: ['open', 'closed'], type: 'string' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number'
        ***REMOVED***,
        updateBranch: {
          headers: { accept: 'application/vnd.github.lydian-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            expected_head_sha: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/update-branch'
        ***REMOVED***,
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        ***REMOVED***,
        updateReview: {
          method: 'PUT',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            number: { alias: 'pull_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            pull_number: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            review_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        ***REMOVED***
      ***REMOVED***,
      rateLimit: { get: { method: 'GET', params: {***REMOVED***, url: '/rate_limit' ***REMOVED*** ***REMOVED***,
      reactions: {
        createForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        ***REMOVED***,
        createForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        ***REMOVED***,
        createForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        ***REMOVED***,
        createForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        ***REMOVED***,
        createForTeamDiscussion: {
          deprecated:
            'octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        ***REMOVED***,
        createForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        createForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        createForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        createForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        ***REMOVED***,
        createForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        ***REMOVED***,
        delete: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: { reaction_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/reactions/:reaction_id'
        ***REMOVED***,
        listForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        ***REMOVED***,
        listForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            issue_number: { required: true, type: 'integer' ***REMOVED***,
            number: { alias: 'issue_number', deprecated: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        ***REMOVED***,
        listForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        ***REMOVED***,
        listForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        ***REMOVED***,
        listForTeamDiscussion: {
          deprecated:
            'octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        ***REMOVED***,
        listForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        listForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        listForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        ***REMOVED***,
        listForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        ***REMOVED***,
        listForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        ***REMOVED***
      ***REMOVED***,
      repos: {
        acceptInvitation: {
          method: 'PATCH',
          params: { invitation_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/repository_invitations/:invitation_id'
        ***REMOVED***,
        addCollaborator: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/collaborators/:username'
        ***REMOVED***,
        addDeployKey: {
          method: 'POST',
          params: {
            key: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            read_only: { type: 'boolean' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/keys'
        ***REMOVED***,
        addProtectedBranchAdminEnforcement: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        ***REMOVED***,
        addProtectedBranchAppRestrictions: {
          method: 'POST',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        ***REMOVED***,
        addProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        ***REMOVED***,
        addProtectedBranchRequiredStatusChecksContexts: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            contexts: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        ***REMOVED***,
        addProtectedBranchTeamRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            teams: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        addProtectedBranchUserRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            users: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        checkCollaborator: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/collaborators/:username'
        ***REMOVED***,
        checkVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/vulnerability-alerts'
        ***REMOVED***,
        compareCommits: {
          method: 'GET',
          params: {
            base: { required: true, type: 'string' ***REMOVED***,
            head: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/compare/:base...:head'
        ***REMOVED***,
        createCommitComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            commit_sha: { required: true, type: 'string' ***REMOVED***,
            line: { type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { type: 'string' ***REMOVED***,
            position: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { alias: 'commit_sha', deprecated: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        ***REMOVED***,
        createDeployment: {
          method: 'POST',
          params: {
            auto_merge: { type: 'boolean' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            environment: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            payload: { type: 'string' ***REMOVED***,
            production_environment: { type: 'boolean' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            required_contexts: { type: 'string[]' ***REMOVED***,
            task: { type: 'string' ***REMOVED***,
            transient_environment: { type: 'boolean' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments'
        ***REMOVED***,
        createDeploymentStatus: {
          method: 'POST',
          params: {
            auto_inactive: { type: 'boolean' ***REMOVED***,
            deployment_id: { required: true, type: 'integer' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            environment: { enum: ['production', 'staging', 'qa'], type: 'string' ***REMOVED***,
            environment_url: { type: 'string' ***REMOVED***,
            log_url: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            state: {
              enum: ['error', 'failure', 'inactive', 'in_progress', 'queued', 'pending', 'success'],
              required: true,
              type: 'string'
            ***REMOVED***,
            target_url: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        ***REMOVED***,
        createDispatchEvent: {
          method: 'POST',
          params: {
            client_payload: { type: 'object' ***REMOVED***,
            event_type: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/dispatches'
        ***REMOVED***,
        createFile: {
          deprecated:
            'octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' ***REMOVED***,
            'author.email': { required: true, type: 'string' ***REMOVED***,
            'author.name': { required: true, type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            committer: { type: 'object' ***REMOVED***,
            'committer.email': { required: true, type: 'string' ***REMOVED***,
            'committer.name': { required: true, type: 'string' ***REMOVED***,
            content: { required: true, type: 'string' ***REMOVED***,
            message: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contents/:path'
        ***REMOVED***,
        createForAuthenticatedUser: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' ***REMOVED***,
            allow_rebase_merge: { type: 'boolean' ***REMOVED***,
            allow_squash_merge: { type: 'boolean' ***REMOVED***,
            auto_init: { type: 'boolean' ***REMOVED***,
            delete_branch_on_merge: { type: 'boolean' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            gitignore_template: { type: 'string' ***REMOVED***,
            has_issues: { type: 'boolean' ***REMOVED***,
            has_projects: { type: 'boolean' ***REMOVED***,
            has_wiki: { type: 'boolean' ***REMOVED***,
            homepage: { type: 'string' ***REMOVED***,
            is_template: { type: 'boolean' ***REMOVED***,
            license_template: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            team_id: { type: 'integer' ***REMOVED***,
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/repos'
        ***REMOVED***,
        createFork: {
          method: 'POST',
          params: {
            organization: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/forks'
        ***REMOVED***,
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' ***REMOVED***,
            config: { required: true, type: 'object' ***REMOVED***,
            'config.content_type': { type: 'string' ***REMOVED***,
            'config.insecure_ssl': { type: 'string' ***REMOVED***,
            'config.secret': { type: 'string' ***REMOVED***,
            'config.url': { required: true, type: 'string' ***REMOVED***,
            events: { type: 'string[]' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks'
        ***REMOVED***,
        createInOrg: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' ***REMOVED***,
            allow_rebase_merge: { type: 'boolean' ***REMOVED***,
            allow_squash_merge: { type: 'boolean' ***REMOVED***,
            auto_init: { type: 'boolean' ***REMOVED***,
            delete_branch_on_merge: { type: 'boolean' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            gitignore_template: { type: 'string' ***REMOVED***,
            has_issues: { type: 'boolean' ***REMOVED***,
            has_projects: { type: 'boolean' ***REMOVED***,
            has_wiki: { type: 'boolean' ***REMOVED***,
            homepage: { type: 'string' ***REMOVED***,
            is_template: { type: 'boolean' ***REMOVED***,
            license_template: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            team_id: { type: 'integer' ***REMOVED***,
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/repos'
        ***REMOVED***,
        createOrUpdateFile: {
          method: 'PUT',
          params: {
            author: { type: 'object' ***REMOVED***,
            'author.email': { required: true, type: 'string' ***REMOVED***,
            'author.name': { required: true, type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            committer: { type: 'object' ***REMOVED***,
            'committer.email': { required: true, type: 'string' ***REMOVED***,
            'committer.name': { required: true, type: 'string' ***REMOVED***,
            content: { required: true, type: 'string' ***REMOVED***,
            message: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contents/:path'
        ***REMOVED***,
        createRelease: {
          method: 'POST',
          params: {
            body: { type: 'string' ***REMOVED***,
            draft: { type: 'boolean' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            prerelease: { type: 'boolean' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tag_name: { required: true, type: 'string' ***REMOVED***,
            target_commitish: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases'
        ***REMOVED***,
        createStatus: {
          method: 'POST',
          params: {
            context: { type: 'string' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { required: true, type: 'string' ***REMOVED***,
            state: {
              enum: ['error', 'failure', 'pending', 'success'],
              required: true,
              type: 'string'
            ***REMOVED***,
            target_url: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/statuses/:sha'
        ***REMOVED***,
        createUsingTemplate: {
          headers: { accept: 'application/vnd.github.baptiste-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            description: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            owner: { type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            template_owner: { required: true, type: 'string' ***REMOVED***,
            template_repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:template_owner/:template_repo/generate'
        ***REMOVED***,
        declineInvitation: {
          method: 'DELETE',
          params: { invitation_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/repository_invitations/:invitation_id'
        ***REMOVED***,
        delete: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo'
        ***REMOVED***,
        deleteCommitComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments/:comment_id'
        ***REMOVED***,
        deleteDownload: {
          method: 'DELETE',
          params: {
            download_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/downloads/:download_id'
        ***REMOVED***,
        deleteFile: {
          method: 'DELETE',
          params: {
            author: { type: 'object' ***REMOVED***,
            'author.email': { type: 'string' ***REMOVED***,
            'author.name': { type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            committer: { type: 'object' ***REMOVED***,
            'committer.email': { type: 'string' ***REMOVED***,
            'committer.name': { type: 'string' ***REMOVED***,
            message: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contents/:path'
        ***REMOVED***,
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks/:hook_id'
        ***REMOVED***,
        deleteInvitation: {
          method: 'DELETE',
          params: {
            invitation_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        ***REMOVED***,
        deleteRelease: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            release_id: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/:release_id'
        ***REMOVED***,
        deleteReleaseAsset: {
          method: 'DELETE',
          params: {
            asset_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        ***REMOVED***,
        disableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/automated-security-fixes'
        ***REMOVED***,
        disablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages'
        ***REMOVED***,
        disableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/vulnerability-alerts'
        ***REMOVED***,
        enableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/automated-security-fixes'
        ***REMOVED***,
        enablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' ***REMOVED***,
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            source: { type: 'object' ***REMOVED***,
            'source.branch': { enum: ['master', 'gh-pages'], type: 'string' ***REMOVED***,
            'source.path': { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages'
        ***REMOVED***,
        enableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/vulnerability-alerts'
        ***REMOVED***,
        get: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo'
        ***REMOVED***,
        getAppsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        ***REMOVED***,
        getArchiveLink: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/:archive_format/:ref'
        ***REMOVED***,
        getBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch'
        ***REMOVED***,
        getBranchProtection: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection'
        ***REMOVED***,
        getClones: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            per: { enum: ['day', 'week'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/traffic/clones'
        ***REMOVED***,
        getCodeFrequencyStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stats/code_frequency'
        ***REMOVED***,
        getCollaboratorPermissionLevel: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/collaborators/:username/permission'
        ***REMOVED***,
        getCombinedStatusForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref/status'
        ***REMOVED***,
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { alias: 'ref', deprecated: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { alias: 'ref', deprecated: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref'
        ***REMOVED***,
        getCommitActivityStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stats/commit_activity'
        ***REMOVED***,
        getCommitComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments/:comment_id'
        ***REMOVED***,
        getCommitRefSha: {
          deprecated:
            'octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit',
          headers: { accept: 'application/vnd.github.v3.sha' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref'
        ***REMOVED***,
        getContents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            ref: { type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contents/:path'
        ***REMOVED***,
        getContributorsStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stats/contributors'
        ***REMOVED***,
        getDeployKey: {
          method: 'GET',
          params: {
            key_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/keys/:key_id'
        ***REMOVED***,
        getDeployment: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments/:deployment_id'
        ***REMOVED***,
        getDeploymentStatus: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            status_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id'
        ***REMOVED***,
        getDownload: {
          method: 'GET',
          params: {
            download_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/downloads/:download_id'
        ***REMOVED***,
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks/:hook_id'
        ***REMOVED***,
        getLatestPagesBuild: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages/builds/latest'
        ***REMOVED***,
        getLatestRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/latest'
        ***REMOVED***,
        getPages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages'
        ***REMOVED***,
        getPagesBuild: {
          method: 'GET',
          params: {
            build_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages/builds/:build_id'
        ***REMOVED***,
        getParticipationStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stats/participation'
        ***REMOVED***,
        getProtectedBranchAdminEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        ***REMOVED***,
        getProtectedBranchPullRequestReviewEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        ***REMOVED***,
        getProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        ***REMOVED***,
        getProtectedBranchRequiredStatusChecks: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        ***REMOVED***,
        getProtectedBranchRestrictions: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        ***REMOVED***,
        getPunchCardStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/stats/punch_card'
        ***REMOVED***,
        getReadme: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            ref: { type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/readme'
        ***REMOVED***,
        getRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            release_id: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/:release_id'
        ***REMOVED***,
        getReleaseAsset: {
          method: 'GET',
          params: {
            asset_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        ***REMOVED***,
        getReleaseByTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tag: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/tags/:tag'
        ***REMOVED***,
        getTeamsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        getTopPaths: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/traffic/popular/paths'
        ***REMOVED***,
        getTopReferrers: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/traffic/popular/referrers'
        ***REMOVED***,
        getUsersWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        getViews: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            per: { enum: ['day', 'week'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/traffic/views'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            affiliation: { type: 'string' ***REMOVED***,
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' ***REMOVED***,
            type: { enum: ['all', 'owner', 'public', 'private', 'member'], type: 'string' ***REMOVED***,
            visibility: { enum: ['all', 'public', 'private'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/repos'
        ***REMOVED***,
        listAppsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        ***REMOVED***,
        listAssetsForRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            release_id: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/:release_id/assets'
        ***REMOVED***,
        listBranches: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            protected: { type: 'boolean' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches'
        ***REMOVED***,
        listBranchesForHeadCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:commit_sha/branches-where-head'
        ***REMOVED***,
        listCollaborators: {
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/collaborators'
        ***REMOVED***,
        listCommentsForCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { alias: 'commit_sha', deprecated: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        ***REMOVED***,
        listCommitComments: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments'
        ***REMOVED***,
        listCommits: {
          method: 'GET',
          params: {
            author: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            path: { type: 'string' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***,
            since: { type: 'string' ***REMOVED***,
            until: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits'
        ***REMOVED***,
        listContributors: {
          method: 'GET',
          params: {
            anon: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contributors'
        ***REMOVED***,
        listDeployKeys: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/keys'
        ***REMOVED***,
        listDeploymentStatuses: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        ***REMOVED***,
        listDeployments: {
          method: 'GET',
          params: {
            environment: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***,
            task: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/deployments'
        ***REMOVED***,
        listDownloads: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/downloads'
        ***REMOVED***,
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' ***REMOVED***,
            type: {
              enum: ['all', 'public', 'private', 'forks', 'sources', 'member', 'internal'],
              type: 'string'
            ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/repos'
        ***REMOVED***,
        listForUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' ***REMOVED***,
            type: { enum: ['all', 'owner', 'member'], type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/repos'
        ***REMOVED***,
        listForks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['newest', 'oldest', 'stargazers'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/forks'
        ***REMOVED***,
        listHooks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks'
        ***REMOVED***,
        listInvitations: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/invitations'
        ***REMOVED***,
        listInvitationsForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/repository_invitations'
        ***REMOVED***,
        listLanguages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/languages'
        ***REMOVED***,
        listPagesBuilds: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages/builds'
        ***REMOVED***,
        listProtectedBranchRequiredStatusChecksContexts: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        ***REMOVED***,
        listProtectedBranchTeamRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        listProtectedBranchUserRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repositories'
        ***REMOVED***,
        listPullRequestsAssociatedWithCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:commit_sha/pulls'
        ***REMOVED***,
        listReleases: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases'
        ***REMOVED***,
        listStatusesForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            ref: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/commits/:ref/statuses'
        ***REMOVED***,
        listTags: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/tags'
        ***REMOVED***,
        listTeams: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/teams'
        ***REMOVED***,
        listTeamsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        listTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/topics'
        ***REMOVED***,
        listUsersWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        merge: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' ***REMOVED***,
            commit_message: { type: 'string' ***REMOVED***,
            head: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/merges'
        ***REMOVED***,
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks/:hook_id/pings'
        ***REMOVED***,
        removeBranchProtection: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection'
        ***REMOVED***,
        removeCollaborator: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/collaborators/:username'
        ***REMOVED***,
        removeDeployKey: {
          method: 'DELETE',
          params: {
            key_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/keys/:key_id'
        ***REMOVED***,
        removeProtectedBranchAdminEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        ***REMOVED***,
        removeProtectedBranchAppRestrictions: {
          method: 'DELETE',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        ***REMOVED***,
        removeProtectedBranchPullRequestReviewEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        ***REMOVED***,
        removeProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' ***REMOVED***,
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        ***REMOVED***,
        removeProtectedBranchRequiredStatusChecks: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        ***REMOVED***,
        removeProtectedBranchRequiredStatusChecksContexts: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            contexts: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        ***REMOVED***,
        removeProtectedBranchRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        ***REMOVED***,
        removeProtectedBranchTeamRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            teams: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        removeProtectedBranchUserRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            users: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        replaceProtectedBranchAppRestrictions: {
          method: 'PUT',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        ***REMOVED***,
        replaceProtectedBranchRequiredStatusChecksContexts: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            contexts: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        ***REMOVED***,
        replaceProtectedBranchTeamRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            teams: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        ***REMOVED***,
        replaceProtectedBranchUserRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            users: { mapTo: 'data', required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        ***REMOVED***,
        replaceTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            names: { required: true, type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/topics'
        ***REMOVED***,
        requestPageBuild: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages/builds'
        ***REMOVED***,
        retrieveCommunityProfileMetrics: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/community/profile'
        ***REMOVED***,
        testPushHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks/:hook_id/tests'
        ***REMOVED***,
        transfer: {
          method: 'POST',
          params: {
            new_owner: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_ids: { type: 'integer[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/transfer'
        ***REMOVED***,
        update: {
          method: 'PATCH',
          params: {
            allow_merge_commit: { type: 'boolean' ***REMOVED***,
            allow_rebase_merge: { type: 'boolean' ***REMOVED***,
            allow_squash_merge: { type: 'boolean' ***REMOVED***,
            archived: { type: 'boolean' ***REMOVED***,
            default_branch: { type: 'string' ***REMOVED***,
            delete_branch_on_merge: { type: 'boolean' ***REMOVED***,
            description: { type: 'string' ***REMOVED***,
            has_issues: { type: 'boolean' ***REMOVED***,
            has_projects: { type: 'boolean' ***REMOVED***,
            has_wiki: { type: 'boolean' ***REMOVED***,
            homepage: { type: 'string' ***REMOVED***,
            is_template: { type: 'boolean' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo'
        ***REMOVED***,
        updateBranchProtection: {
          method: 'PUT',
          params: {
            allow_deletions: { type: 'boolean' ***REMOVED***,
            allow_force_pushes: { allowNull: true, type: 'boolean' ***REMOVED***,
            branch: { required: true, type: 'string' ***REMOVED***,
            enforce_admins: { allowNull: true, required: true, type: 'boolean' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            required_linear_history: { type: 'boolean' ***REMOVED***,
            required_pull_request_reviews: { allowNull: true, required: true, type: 'object' ***REMOVED***,
            'required_pull_request_reviews.dismiss_stale_reviews': { type: 'boolean' ***REMOVED***,
            'required_pull_request_reviews.dismissal_restrictions': { type: 'object' ***REMOVED***,
            'required_pull_request_reviews.dismissal_restrictions.teams': { type: 'string[]' ***REMOVED***,
            'required_pull_request_reviews.dismissal_restrictions.users': { type: 'string[]' ***REMOVED***,
            'required_pull_request_reviews.require_code_owner_reviews': { type: 'boolean' ***REMOVED***,
            'required_pull_request_reviews.required_approving_review_count': { type: 'integer' ***REMOVED***,
            required_status_checks: { allowNull: true, required: true, type: 'object' ***REMOVED***,
            'required_status_checks.contexts': { required: true, type: 'string[]' ***REMOVED***,
            'required_status_checks.strict': { required: true, type: 'boolean' ***REMOVED***,
            restrictions: { allowNull: true, required: true, type: 'object' ***REMOVED***,
            'restrictions.apps': { type: 'string[]' ***REMOVED***,
            'restrictions.teams': { required: true, type: 'string[]' ***REMOVED***,
            'restrictions.users': { required: true, type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection'
        ***REMOVED***,
        updateCommitComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/comments/:comment_id'
        ***REMOVED***,
        updateFile: {
          deprecated:
            'octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' ***REMOVED***,
            'author.email': { required: true, type: 'string' ***REMOVED***,
            'author.name': { required: true, type: 'string' ***REMOVED***,
            branch: { type: 'string' ***REMOVED***,
            committer: { type: 'object' ***REMOVED***,
            'committer.email': { required: true, type: 'string' ***REMOVED***,
            'committer.name': { required: true, type: 'string' ***REMOVED***,
            content: { required: true, type: 'string' ***REMOVED***,
            message: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            path: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            sha: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/contents/:path'
        ***REMOVED***,
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' ***REMOVED***,
            add_events: { type: 'string[]' ***REMOVED***,
            config: { type: 'object' ***REMOVED***,
            'config.content_type': { type: 'string' ***REMOVED***,
            'config.insecure_ssl': { type: 'string' ***REMOVED***,
            'config.secret': { type: 'string' ***REMOVED***,
            'config.url': { required: true, type: 'string' ***REMOVED***,
            events: { type: 'string[]' ***REMOVED***,
            hook_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            remove_events: { type: 'string[]' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/hooks/:hook_id'
        ***REMOVED***,
        updateInformationAboutPagesSite: {
          method: 'PUT',
          params: {
            cname: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            source: { enum: ['"gh-pages"', '"master"', '"master /docs"'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/pages'
        ***REMOVED***,
        updateInvitation: {
          method: 'PATCH',
          params: {
            invitation_id: { required: true, type: 'integer' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            permissions: { enum: ['read', 'write', 'admin'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        ***REMOVED***,
        updateProtectedBranchPullRequestReviewEnforcement: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            dismiss_stale_reviews: { type: 'boolean' ***REMOVED***,
            dismissal_restrictions: { type: 'object' ***REMOVED***,
            'dismissal_restrictions.teams': { type: 'string[]' ***REMOVED***,
            'dismissal_restrictions.users': { type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            require_code_owner_reviews: { type: 'boolean' ***REMOVED***,
            required_approving_review_count: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        ***REMOVED***,
        updateProtectedBranchRequiredStatusChecks: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' ***REMOVED***,
            contexts: { type: 'string[]' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            strict: { type: 'boolean' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        ***REMOVED***,
        updateRelease: {
          method: 'PATCH',
          params: {
            body: { type: 'string' ***REMOVED***,
            draft: { type: 'boolean' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            prerelease: { type: 'boolean' ***REMOVED***,
            release_id: { required: true, type: 'integer' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            tag_name: { type: 'string' ***REMOVED***,
            target_commitish: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/:release_id'
        ***REMOVED***,
        updateReleaseAsset: {
          method: 'PATCH',
          params: {
            asset_id: { required: true, type: 'integer' ***REMOVED***,
            label: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        ***REMOVED***,
        uploadReleaseAsset: {
          method: 'POST',
          params: {
            data: { mapTo: 'data', required: true, type: 'string | object' ***REMOVED***,
            file: { alias: 'data', deprecated: true, type: 'string | object' ***REMOVED***,
            headers: { required: true, type: 'object' ***REMOVED***,
            'headers.content-length': { required: true, type: 'integer' ***REMOVED***,
            'headers.content-type': { required: true, type: 'string' ***REMOVED***,
            label: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            url: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: ':url'
        ***REMOVED***
      ***REMOVED***,
      search: {
        code: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['indexed'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/search/code'
        ***REMOVED***,
        commits: {
          headers: { accept: 'application/vnd.github.cloak-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['author-date', 'committer-date'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/search/commits'
        ***REMOVED***,
        issues: {
          deprecated:
            'octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)',
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            ***REMOVED***
          ***REMOVED***,
          url: '/search/issues'
        ***REMOVED***,
        issuesAndPullRequests: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            ***REMOVED***
          ***REMOVED***,
          url: '/search/issues'
        ***REMOVED***,
        labels: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            repository_id: { required: true, type: 'integer' ***REMOVED***,
            sort: { enum: ['created', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/search/labels'
        ***REMOVED***,
        repos: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['stars', 'forks', 'help-wanted-issues', 'updated'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/search/repositories'
        ***REMOVED***,
        topics: {
          method: 'GET',
          params: { q: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/search/topics'
        ***REMOVED***,
        users: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            q: { required: true, type: 'string' ***REMOVED***,
            sort: { enum: ['followers', 'repositories', 'joined'], type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/search/users'
        ***REMOVED***
      ***REMOVED***,
      teams: {
        addMember: {
          deprecated:
            'octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        addMemberLegacy: {
          deprecated:
            'octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        addOrUpdateMembership: {
          deprecated:
            'octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        addOrUpdateMembershipInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            role: { enum: ['member', 'maintainer'], type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        ***REMOVED***,
        addOrUpdateMembershipLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        addOrUpdateProject: {
          deprecated:
            'octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        addOrUpdateProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            permission: { enum: ['read', 'write', 'admin'], type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        ***REMOVED***,
        addOrUpdateProjectLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        addOrUpdateRepo: {
          deprecated:
            'octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        addOrUpdateRepoInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        ***REMOVED***,
        addOrUpdateRepoLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        checkManagesRepo: {
          deprecated:
            'octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        checkManagesRepoInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        ***REMOVED***,
        checkManagesRepoLegacy: {
          deprecated:
            'octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' ***REMOVED***,
            maintainers: { type: 'string[]' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            parent_team_id: { type: 'integer' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            privacy: { enum: ['secret', 'closed'], type: 'string' ***REMOVED***,
            repo_names: { type: 'string[]' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams'
        ***REMOVED***,
        createDiscussion: {
          deprecated:
            'octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions'
        ***REMOVED***,
        createDiscussionComment: {
          deprecated:
            'octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        ***REMOVED***,
        createDiscussionCommentInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        ***REMOVED***,
        createDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        ***REMOVED***,
        createDiscussionInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions'
        ***REMOVED***,
        createDiscussionLegacy: {
          deprecated:
            'octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            private: { type: 'boolean' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            title: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions'
        ***REMOVED***,
        delete: {
          deprecated:
            'octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***,
        deleteDiscussion: {
          deprecated:
            'octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        deleteDiscussionComment: {
          deprecated:
            'octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        deleteDiscussionCommentInOrg: {
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        deleteDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        deleteDiscussionInOrg: {
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        ***REMOVED***,
        deleteDiscussionLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        deleteInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug'
        ***REMOVED***,
        deleteLegacy: {
          deprecated:
            'octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***,
        get: {
          deprecated:
            'octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***,
        getByName: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug'
        ***REMOVED***,
        getDiscussion: {
          deprecated:
            'octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        getDiscussionComment: {
          deprecated:
            'octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        getDiscussionCommentInOrg: {
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        getDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        getDiscussionInOrg: {
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        ***REMOVED***,
        getDiscussionLegacy: {
          deprecated:
            'octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        getLegacy: {
          deprecated:
            'octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***,
        getMember: {
          deprecated:
            'octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        getMemberLegacy: {
          deprecated:
            'octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        getMembership: {
          deprecated:
            'octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        getMembershipInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        ***REMOVED***,
        getMembershipLegacy: {
          deprecated:
            'octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams'
        ***REMOVED***,
        listChild: {
          deprecated:
            'octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/teams'
        ***REMOVED***,
        listChildInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/teams'
        ***REMOVED***,
        listChildLegacy: {
          deprecated:
            'octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/teams'
        ***REMOVED***,
        listDiscussionComments: {
          deprecated:
            'octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        ***REMOVED***,
        listDiscussionCommentsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        ***REMOVED***,
        listDiscussionCommentsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        ***REMOVED***,
        listDiscussions: {
          deprecated:
            'octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions'
        ***REMOVED***,
        listDiscussionsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions'
        ***REMOVED***,
        listDiscussionsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions'
        ***REMOVED***,
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/teams'
        ***REMOVED***,
        listMembers: {
          deprecated:
            'octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members'
        ***REMOVED***,
        listMembersInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/members'
        ***REMOVED***,
        listMembersLegacy: {
          deprecated:
            'octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members'
        ***REMOVED***,
        listPendingInvitations: {
          deprecated:
            'octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/invitations'
        ***REMOVED***,
        listPendingInvitationsInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/invitations'
        ***REMOVED***,
        listPendingInvitationsLegacy: {
          deprecated:
            'octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/invitations'
        ***REMOVED***,
        listProjects: {
          deprecated:
            'octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects'
        ***REMOVED***,
        listProjectsInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/projects'
        ***REMOVED***,
        listProjectsLegacy: {
          deprecated:
            'octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects'
        ***REMOVED***,
        listRepos: {
          deprecated:
            'octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos'
        ***REMOVED***,
        listReposInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/repos'
        ***REMOVED***,
        listReposLegacy: {
          deprecated:
            'octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos'
        ***REMOVED***,
        removeMember: {
          deprecated:
            'octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        removeMemberLegacy: {
          deprecated:
            'octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/members/:username'
        ***REMOVED***,
        removeMembership: {
          deprecated:
            'octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        removeMembershipInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        ***REMOVED***,
        removeMembershipLegacy: {
          deprecated:
            'octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/memberships/:username'
        ***REMOVED***,
        removeProject: {
          deprecated:
            'octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        removeProjectInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        ***REMOVED***,
        removeProjectLegacy: {
          deprecated:
            'octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        removeRepo: {
          deprecated:
            'octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        removeRepoInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        ***REMOVED***,
        removeRepoLegacy: {
          deprecated:
            'octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' ***REMOVED***,
            repo: { required: true, type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/repos/:owner/:repo'
        ***REMOVED***,
        reviewProject: {
          deprecated:
            'octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        reviewProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            org: { required: true, type: 'string' ***REMOVED***,
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        ***REMOVED***,
        reviewProjectLegacy: {
          deprecated:
            'octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' ***REMOVED***,
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/projects/:project_id'
        ***REMOVED***,
        update: {
          deprecated:
            'octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            description: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            parent_team_id: { type: 'integer' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            privacy: { enum: ['secret', 'closed'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***,
        updateDiscussion: {
          deprecated:
            'octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        updateDiscussionComment: {
          deprecated:
            'octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        updateDiscussionCommentInOrg: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        updateDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' ***REMOVED***,
            comment_number: { required: true, type: 'integer' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        ***REMOVED***,
        updateDiscussionInOrg: {
          method: 'PATCH',
          params: {
            body: { type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        ***REMOVED***,
        updateDiscussionLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy',
          method: 'PATCH',
          params: {
            body: { type: 'string' ***REMOVED***,
            discussion_number: { required: true, type: 'integer' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***,
            title: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id/discussions/:discussion_number'
        ***REMOVED***,
        updateInOrg: {
          method: 'PATCH',
          params: {
            description: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            org: { required: true, type: 'string' ***REMOVED***,
            parent_team_id: { type: 'integer' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            privacy: { enum: ['secret', 'closed'], type: 'string' ***REMOVED***,
            team_slug: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/orgs/:org/teams/:team_slug'
        ***REMOVED***,
        updateLegacy: {
          deprecated:
            'octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy',
          method: 'PATCH',
          params: {
            description: { type: 'string' ***REMOVED***,
            name: { required: true, type: 'string' ***REMOVED***,
            parent_team_id: { type: 'integer' ***REMOVED***,
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' ***REMOVED***,
            privacy: { enum: ['secret', 'closed'], type: 'string' ***REMOVED***,
            team_id: { required: true, type: 'integer' ***REMOVED***
          ***REMOVED***,
          url: '/teams/:team_id'
        ***REMOVED***
      ***REMOVED***,
      users: {
        addEmails: {
          method: 'POST',
          params: { emails: { required: true, type: 'string[]' ***REMOVED*** ***REMOVED***,
          url: '/user/emails'
        ***REMOVED***,
        block: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/blocks/:username'
        ***REMOVED***,
        checkBlocked: {
          method: 'GET',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/blocks/:username'
        ***REMOVED***,
        checkFollowing: {
          method: 'GET',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/following/:username'
        ***REMOVED***,
        checkFollowingForUser: {
          method: 'GET',
          params: {
            target_user: { required: true, type: 'string' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/following/:target_user'
        ***REMOVED***,
        createGpgKey: {
          method: 'POST',
          params: { armored_public_key: { type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/gpg_keys'
        ***REMOVED***,
        createPublicKey: {
          method: 'POST',
          params: { key: { type: 'string' ***REMOVED***, title: { type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/keys'
        ***REMOVED***,
        deleteEmails: {
          method: 'DELETE',
          params: { emails: { required: true, type: 'string[]' ***REMOVED*** ***REMOVED***,
          url: '/user/emails'
        ***REMOVED***,
        deleteGpgKey: {
          method: 'DELETE',
          params: { gpg_key_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/gpg_keys/:gpg_key_id'
        ***REMOVED***,
        deletePublicKey: {
          method: 'DELETE',
          params: { key_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/keys/:key_id'
        ***REMOVED***,
        follow: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/following/:username'
        ***REMOVED***,
        getAuthenticated: { method: 'GET', params: {***REMOVED***, url: '/user' ***REMOVED***,
        getByUsername: {
          method: 'GET',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/users/:username'
        ***REMOVED***,
        getContextForUser: {
          method: 'GET',
          params: {
            subject_id: { type: 'string' ***REMOVED***,
            subject_type: {
              enum: ['organization', 'repository', 'issue', 'pull_request'],
              type: 'string'
            ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/hovercard'
        ***REMOVED***,
        getGpgKey: {
          method: 'GET',
          params: { gpg_key_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/gpg_keys/:gpg_key_id'
        ***REMOVED***,
        getPublicKey: {
          method: 'GET',
          params: { key_id: { required: true, type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/keys/:key_id'
        ***REMOVED***,
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            since: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users'
        ***REMOVED***,
        listBlocked: { method: 'GET', params: {***REMOVED***, url: '/user/blocks' ***REMOVED***,
        listEmails: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/emails'
        ***REMOVED***,
        listFollowersForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/followers'
        ***REMOVED***,
        listFollowersForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/followers'
        ***REMOVED***,
        listFollowingForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/following'
        ***REMOVED***,
        listFollowingForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/following'
        ***REMOVED***,
        listGpgKeys: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/gpg_keys'
        ***REMOVED***,
        listGpgKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/gpg_keys'
        ***REMOVED***,
        listPublicEmails: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/public_emails'
        ***REMOVED***,
        listPublicKeys: {
          method: 'GET',
          params: { page: { type: 'integer' ***REMOVED***, per_page: { type: 'integer' ***REMOVED*** ***REMOVED***,
          url: '/user/keys'
        ***REMOVED***,
        listPublicKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' ***REMOVED***,
            per_page: { type: 'integer' ***REMOVED***,
            username: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/users/:username/keys'
        ***REMOVED***,
        togglePrimaryEmailVisibility: {
          method: 'PATCH',
          params: {
            email: { required: true, type: 'string' ***REMOVED***,
            visibility: { required: true, type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user/email/visibility'
        ***REMOVED***,
        unblock: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/blocks/:username'
        ***REMOVED***,
        unfollow: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' ***REMOVED*** ***REMOVED***,
          url: '/user/following/:username'
        ***REMOVED***,
        updateAuthenticated: {
          method: 'PATCH',
          params: {
            bio: { type: 'string' ***REMOVED***,
            blog: { type: 'string' ***REMOVED***,
            company: { type: 'string' ***REMOVED***,
            email: { type: 'string' ***REMOVED***,
            hireable: { type: 'boolean' ***REMOVED***,
            location: { type: 'string' ***REMOVED***,
            name: { type: 'string' ***REMOVED***
          ***REMOVED***,
          url: '/user'
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    const s = '2.4.0'
    function registerEndpoints(e, t) {
      Object.keys(t).forEach(r => {
        if (!e[r]) {
          e[r] = {***REMOVED***
        ***REMOVED***
        Object.keys(t[r]).forEach(i => {
          const s = t[r][i]
          const o = ['method', 'url', 'headers'].reduce((e, t) => {
            if (typeof s[t] !== 'undefined') {
              e[t] = s[t]
            ***REMOVED***
            return e
          ***REMOVED***, {***REMOVED***)
          o.request = { validate: s.params ***REMOVED***
          let a = e.request.defaults(o)
          const u = Object.keys(s.params || {***REMOVED***).find(e => s.params[e].deprecated)
          if (u) {
            const t = patchForDeprecation.bind(null, e, s)
            a = t(e.request.defaults(o), `.${r***REMOVED***.${i***REMOVED***()`)
            a.endpoint = t(a.endpoint, `.${r***REMOVED***.${i***REMOVED***.endpoint()`)
            a.endpoint.merge = t(a.endpoint.merge, `.${r***REMOVED***.${i***REMOVED***.endpoint.merge()`)
          ***REMOVED***
          if (s.deprecated) {
            e[r][i] = Object.assign(function deprecatedEndpointMethod() {
              e.log.warn(new n.Deprecation(`[@octokit/rest] ${s.deprecated***REMOVED***`))
              e[r][i] = a
              return a.apply(null, arguments)
            ***REMOVED***, a)
            return
          ***REMOVED***
          e[r][i] = a
        ***REMOVED***)
      ***REMOVED***)
    ***REMOVED***
    function patchForDeprecation(e, t, r, i) {
      const s = s => {
        s = Object.assign({***REMOVED***, s)
        Object.keys(s).forEach(r => {
          if (t.params[r] && t.params[r].deprecated) {
            const o = t.params[r].alias
            e.log.warn(
              new n.Deprecation(
                `[@octokit/rest] "${r***REMOVED***" parameter is deprecated for "${i***REMOVED***". Use "${o***REMOVED***" instead`
            ***REMOVED***
          ***REMOVED***
            if (!(o in s)) {
              s[o] = s[r]
            ***REMOVED***
            delete s[r]
          ***REMOVED***
        ***REMOVED***)
        return r(s)
      ***REMOVED***
      Object.keys(r).forEach(e => {
        s[e] = r[e]
      ***REMOVED***)
      return s
    ***REMOVED***
    function restEndpointMethods(e) {
      e.registerEndpoints = registerEndpoints.bind(null, e)
      registerEndpoints(e, i)
      ;[
        ['gitdata', 'git'],
        ['authorization', 'oauthAuthorizations'],
        ['pullRequests', 'pulls']
      ].forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            e.log.warn(
              new n.Deprecation(
                `[@octokit/plugin-rest-endpoint-methods] "octokit.${t***REMOVED***.*" methods are deprecated, use "octokit.${r***REMOVED***.*" instead`
            ***REMOVED***
          ***REMOVED***
            return e[r]
          ***REMOVED***
        ***REMOVED***)
      ***REMOVED***)
      return {***REMOVED***
    ***REMOVED***
    restEndpointMethods.VERSION = s
    t.restEndpointMethods = restEndpointMethods
  ***REMOVED***,
  850: function(e, t, r) {
    e.exports = paginationMethodsPlugin
    function paginationMethodsPlugin(e) {
      e.getFirstPage = r(777).bind(null, e)
      e.getLastPage = r(649).bind(null, e)
      e.getNextPage = r(550).bind(null, e)
      e.getPreviousPage = r(563).bind(null, e)
      e.hasFirstPage = r(536)
      e.hasLastPage = r(336)
      e.hasNextPage = r(929)
      e.hasPreviousPage = r(558)
    ***REMOVED***
  ***REMOVED***,
  854: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0
    var i = '[object Function]',
      s = '[object GeneratorFunction]',
      o = '[object Symbol]'
    var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      u = /^\w*$/,
      p = /^\./,
      c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var d = /[\\^$.*+?()[\]{***REMOVED***|]/g
    var l = /\\(\\)?/g
    var m = /^\[object .+?Constructor\]$/
    var g = typeof global == 'object' && global && global.Object === Object && global
    var h = typeof self == 'object' && self && self.Object === Object && self
    var y = g || h || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    ***REMOVED***
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
      ***REMOVED***
          t = !!(e + '')
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return t
    ***REMOVED***
    var f = Array.prototype,
      b = Function.prototype,
      _ = Object.prototype
    var v = y['__core-js_shared__']
    var q = (function() {
      var e = /[^.]+$/.exec((v && v.keys && v.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    ***REMOVED***)()
    var w = b.toString
    var E = _.hasOwnProperty
    var T = _.toString
    var k = RegExp(
      '^' +
        w
          .call(E)
          .replace(d, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
  ***REMOVED***
    var C = y.Symbol,
      j = f.splice
    var S = getNative(y, 'Map'),
      O = getNative(Object, 'create')
    var x = C ? C.prototype : undefined,
      P = x ? x.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function hashClear() {
      this.__data__ = O ? O(null) : {***REMOVED***
    ***REMOVED***
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    ***REMOVED***
    function hashGet(e) {
      var t = this.__data__
      if (O) {
        var n = t[e]
        return n === r ? undefined : n
      ***REMOVED***
      return E.call(t, e) ? t[e] : undefined
    ***REMOVED***
    function hashHas(e) {
      var t = this.__data__
      return O ? t[e] !== undefined : E.call(t, e)
    ***REMOVED***
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = O && t === undefined ? r : t
      return this
    ***REMOVED***
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function listCacheClear() {
      this.__data__ = []
    ***REMOVED***
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      ***REMOVED***
      var n = t.length - 1
      if (r == n) {
        t.pop()
      ***REMOVED*** else {
        j.call(t, r, 1)
      ***REMOVED***
      return true
    ***REMOVED***
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    ***REMOVED***
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    ***REMOVED***
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      ***REMOVED*** else {
        r[n][1] = t
      ***REMOVED***
      return this
    ***REMOVED***
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (S || ListCache)(), string: new Hash() ***REMOVED***
    ***REMOVED***
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    ***REMOVED***
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    ***REMOVED***
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    ***REMOVED***
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    ***REMOVED***
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        ***REMOVED***
      ***REMOVED***
      return -1
    ***REMOVED***
    function baseGet(e, t) {
      t = isKey(t, e) ? [t] : castPath(t)
      var r = 0,
        n = t.length
      while (e != null && r < n) {
        e = e[toKey(t[r++])]
      ***REMOVED***
      return r && r == n ? e : undefined
    ***REMOVED***
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      ***REMOVED***
      var t = isFunction(e) || isHostObject(e) ? k : m
      return t.test(toSource(e))
    ***REMOVED***
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      ***REMOVED***
      if (isSymbol(e)) {
        return P ? P.call(e) : ''
      ***REMOVED***
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    ***REMOVED***
    function castPath(e) {
      return A(e) ? e : R(e)
    ***REMOVED***
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    ***REMOVED***
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    ***REMOVED***
    function isKey(e, t) {
      if (A(e)) {
        return false
      ***REMOVED***
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      ***REMOVED***
      return u.test(e) || !a.test(e) || (t != null && e in Object(t))
    ***REMOVED***
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    ***REMOVED***
    function isMasked(e) {
      return !!q && q in e
    ***REMOVED***
    var R = memoize(function(e) {
      e = toString(e)
      var t = []
      if (p.test(e)) {
        t.push('')
      ***REMOVED***
      e.replace(c, function(e, r, n, i) {
        t.push(n ? i.replace(l, '$1') : r || e)
      ***REMOVED***)
      return t
    ***REMOVED***)
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      ***REMOVED***
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    ***REMOVED***
    function toSource(e) {
      if (e != null) {
      ***REMOVED***
          return w.call(e)
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
          return e + ''
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return ''
    ***REMOVED***
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      ***REMOVED***
      var n = function() {
        var t = arguments,
          i = r ? r.apply(this, t) : t[0],
          s = n.cache
        if (s.has(i)) {
          return s.get(i)
        ***REMOVED***
        var o = e.apply(this, t)
        n.cache = s.set(i, o)
        return o
      ***REMOVED***
      n.cache = new (memoize.Cache || MapCache)()
      return n
    ***REMOVED***
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    ***REMOVED***
    var A = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? T.call(e) : ''
      return t == i || t == s
    ***REMOVED***
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    ***REMOVED***
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    ***REMOVED***
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && T.call(e) == o)
    ***REMOVED***
    function toString(e) {
      return e == null ? '' : baseToString(e)
    ***REMOVED***
    function get(e, t, r) {
      var n = e == null ? undefined : baseGet(e, t)
      return n === undefined ? r : n
    ***REMOVED***
    e.exports = get
  ***REMOVED***,
  855: function(e, t, r) {
    e.exports = registerPlugin
    const n = r(47)
    function registerPlugin(e, t) {
      return n(e.includes(t) ? e : e.concat(t))
    ***REMOVED***
  ***REMOVED***,
  863: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const n = r(675)
    const i = r(143)
    function authenticationBeforeRequest(e, t) {
      if (typeof e.auth === 'string') {
        t.headers.authorization = i(e.auth)
        return
      ***REMOVED***
      if (e.auth.username) {
        const r = n(`${e.auth.username***REMOVED***:${e.auth.password***REMOVED***`)
        t.headers.authorization = `Basic ${r***REMOVED***`
        if (e.otp) {
          t.headers['x-github-otp'] = e.otp
        ***REMOVED***
        return
      ***REMOVED***
      if (e.auth.clientId) {
        if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
          const r = n(`${e.auth.clientId***REMOVED***:${e.auth.clientSecret***REMOVED***`)
          t.headers.authorization = `Basic ${r***REMOVED***`
          return
        ***REMOVED***
        t.url += t.url.indexOf('?') === -1 ? '?' : '&'
        t.url += `client_id=${e.auth.clientId***REMOVED***&client_secret=${e.auth.clientSecret***REMOVED***`
        return
      ***REMOVED***
      return Promise.resolve()
        .then(() => {
          return e.auth()
        ***REMOVED***)
        .then(e => {
          t.headers.authorization = i(e)
        ***REMOVED***)
    ***REMOVED***
  ***REMOVED***,
  864: function(e, t, r) {
    'use strict'
    var n = r(35)
    e.exports = n.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          return {
            write: function write(e, t, r, i, s, o) {
              var a = []
              a.push(e + '=' + encodeURIComponent(t))
              if (n.isNumber(r)) {
                a.push('expires=' + new Date(r).toGMTString())
              ***REMOVED***
              if (n.isString(i)) {
                a.push('path=' + i)
              ***REMOVED***
              if (n.isString(s)) {
                a.push('domain=' + s)
              ***REMOVED***
              if (o === true) {
                a.push('secure')
              ***REMOVED***
              document.cookie = a.join('; ')
            ***REMOVED***,
            read: function read(e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
              return t ? decodeURIComponent(t[3]) : null
            ***REMOVED***,
            remove: function remove(e) {
              this.write(e, '', Date.now() - 864e5)
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***)()
      : (function nonStandardBrowserEnv() {
          return {
            write: function write() {***REMOVED***,
            read: function read() {
          ***REMOVED***
            ***REMOVED***,
            remove: function remove() {***REMOVED***
          ***REMOVED***
        ***REMOVED***)()
  ***REMOVED***,
  866: function(e, t, r) {
    'use strict'
    var n = r(816)
    e.exports = function(e) {
      var t = e.match(n)
      if (!t) {
    ***REMOVED***
      ***REMOVED***
      var r = t[0].replace(/#! ?/, '').split(' ')
      var i = r[0].split('/').pop()
      var s = r[1]
      return i === 'env' ? s : i + (s ? ' ' + s : '')
    ***REMOVED***
  ***REMOVED***,
  867: function(e) {
    e.exports = require('tty')
  ***REMOVED***,
  881: function(e) {
    'use strict'
    const t = process.platform === 'win32'
    function notFoundError(e, t) {
      return Object.assign(new Error(`${t***REMOVED*** ${e.command***REMOVED*** ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${t***REMOVED*** ${e.command***REMOVED***`,
        path: e.command,
        spawnargs: e.args
      ***REMOVED***)
    ***REMOVED***
    function hookChildProcess(e, r) {
      if (!t) {
        return
      ***REMOVED***
      const n = e.emit
      e.emit = function(t, i) {
        if (t === 'exit') {
          const t = verifyENOENT(i, r, 'spawn')
          if (t) {
            return n.call(e, 'error', t)
          ***REMOVED***
        ***REMOVED***
        return n.apply(e, arguments)
      ***REMOVED***
    ***REMOVED***
    function verifyENOENT(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawn')
      ***REMOVED***
  ***REMOVED***
    ***REMOVED***
    function verifyENOENTSync(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawnSync')
      ***REMOVED***
  ***REMOVED***
    ***REMOVED***
    e.exports = {
      hookChildProcess: hookChildProcess,
      verifyENOENT: verifyENOENT,
      verifyENOENTSync: verifyENOENTSync,
      notFoundError: notFoundError
    ***REMOVED***
  ***REMOVED***,
  883: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var n = 1 / 0,
      i = 9007199254740991
    var s = '[object Function]',
      o = '[object GeneratorFunction]',
      a = '[object Symbol]'
    var u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      p = /^\w*$/,
      c = /^\./,
      d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var l = /[\\^$.*+?()[\]{***REMOVED***|]/g
    var m = /\\(\\)?/g
    var g = /^\[object .+?Constructor\]$/
    var h = /^(?:0|[1-9]\d*)$/
    var y = typeof global == 'object' && global && global.Object === Object && global
    var f = typeof self == 'object' && self && self.Object === Object && self
    var b = y || f || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    ***REMOVED***
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
      ***REMOVED***
          t = !!(e + '')
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return t
    ***REMOVED***
    var _ = Array.prototype,
      v = Function.prototype,
      q = Object.prototype
    var w = b['__core-js_shared__']
    var E = (function() {
      var e = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    ***REMOVED***)()
    var T = v.toString
    var k = q.hasOwnProperty
    var C = q.toString
    var j = RegExp(
      '^' +
        T.call(k)
          .replace(l, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
  ***REMOVED***
    var S = b.Symbol,
      O = _.splice
    var x = getNative(b, 'Map'),
      P = getNative(Object, 'create')
    var R = S ? S.prototype : undefined,
      A = R ? R.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function hashClear() {
      this.__data__ = P ? P(null) : {***REMOVED***
    ***REMOVED***
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    ***REMOVED***
    function hashGet(e) {
      var t = this.__data__
      if (P) {
        var n = t[e]
        return n === r ? undefined : n
      ***REMOVED***
      return k.call(t, e) ? t[e] : undefined
    ***REMOVED***
    function hashHas(e) {
      var t = this.__data__
      return P ? t[e] !== undefined : k.call(t, e)
    ***REMOVED***
    function hashSet(e, t) {
      var n = this.__data__
      n[e] = P && t === undefined ? r : t
      return this
    ***REMOVED***
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function listCacheClear() {
      this.__data__ = []
    ***REMOVED***
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      ***REMOVED***
      var n = t.length - 1
      if (r == n) {
        t.pop()
      ***REMOVED*** else {
        O.call(t, r, 1)
      ***REMOVED***
      return true
    ***REMOVED***
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    ***REMOVED***
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    ***REMOVED***
    function listCacheSet(e, t) {
      var r = this.__data__,
        n = assocIndexOf(r, e)
      if (n < 0) {
        r.push([e, t])
      ***REMOVED*** else {
        r[n][1] = t
      ***REMOVED***
      return this
    ***REMOVED***
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var n = e[t]
        this.set(n[0], n[1])
      ***REMOVED***
    ***REMOVED***
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (x || ListCache)(), string: new Hash() ***REMOVED***
    ***REMOVED***
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    ***REMOVED***
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    ***REMOVED***
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    ***REMOVED***
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    ***REMOVED***
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assignValue(e, t, r) {
      var n = e[t]
      if (!(k.call(e, t) && eq(n, r)) || (r === undefined && !(t in e))) {
        e[t] = r
      ***REMOVED***
    ***REMOVED***
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        ***REMOVED***
      ***REMOVED***
      return -1
    ***REMOVED***
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      ***REMOVED***
      var t = isFunction(e) || isHostObject(e) ? j : g
      return t.test(toSource(e))
    ***REMOVED***
    function baseSet(e, t, r, n) {
      if (!isObject(e)) {
        return e
      ***REMOVED***
      t = isKey(t, e) ? [t] : castPath(t)
      var i = -1,
        s = t.length,
        o = s - 1,
        a = e
      while (a != null && ++i < s) {
        var u = toKey(t[i]),
          p = r
        if (i != o) {
          var c = a[u]
          p = n ? n(c, u, a) : undefined
          if (p === undefined) {
            p = isObject(c) ? c : isIndex(t[i + 1]) ? [] : {***REMOVED***
          ***REMOVED***
        ***REMOVED***
        assignValue(a, u, p)
        a = a[u]
      ***REMOVED***
      return e
    ***REMOVED***
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      ***REMOVED***
      if (isSymbol(e)) {
        return A ? A.call(e) : ''
      ***REMOVED***
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    ***REMOVED***
    function castPath(e) {
      return D(e) ? e : G(e)
    ***REMOVED***
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    ***REMOVED***
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    ***REMOVED***
    function isIndex(e, t) {
      t = t == null ? i : t
      return !!t && (typeof e == 'number' || h.test(e)) && e > -1 && e % 1 == 0 && e < t
    ***REMOVED***
    function isKey(e, t) {
      if (D(e)) {
        return false
      ***REMOVED***
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      ***REMOVED***
      return p.test(e) || !u.test(e) || (t != null && e in Object(t))
    ***REMOVED***
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    ***REMOVED***
    function isMasked(e) {
      return !!E && E in e
    ***REMOVED***
    var G = memoize(function(e) {
      e = toString(e)
      var t = []
      if (c.test(e)) {
        t.push('')
      ***REMOVED***
      e.replace(d, function(e, r, n, i) {
        t.push(n ? i.replace(m, '$1') : r || e)
      ***REMOVED***)
      return t
    ***REMOVED***)
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      ***REMOVED***
      var t = e + ''
      return t == '0' && 1 / e == -n ? '-0' : t
    ***REMOVED***
    function toSource(e) {
      if (e != null) {
      ***REMOVED***
          return T.call(e)
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
          return e + ''
        ***REMOVED*** catch (e) {***REMOVED***
      ***REMOVED***
      return ''
    ***REMOVED***
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      ***REMOVED***
      var n = function() {
        var t = arguments,
          i = r ? r.apply(this, t) : t[0],
          s = n.cache
        if (s.has(i)) {
          return s.get(i)
        ***REMOVED***
        var o = e.apply(this, t)
        n.cache = s.set(i, o)
        return o
      ***REMOVED***
      n.cache = new (memoize.Cache || MapCache)()
      return n
    ***REMOVED***
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    ***REMOVED***
    var D = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? C.call(e) : ''
      return t == s || t == o
    ***REMOVED***
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    ***REMOVED***
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    ***REMOVED***
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && C.call(e) == a)
    ***REMOVED***
    function toString(e) {
      return e == null ? '' : baseToString(e)
    ***REMOVED***
    function set(e, t, r) {
      return e == null ? e : baseSet(e, t, r)
    ***REMOVED***
    e.exports = set
  ***REMOVED***,
  887: function(e) {
    'use strict'
    e.exports = function combineURLs(e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    ***REMOVED***
  ***REMOVED***,
  903: function(e) {
    e.exports = require('zlib')
  ***REMOVED***,
  916: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true ***REMOVED***)
    const r = '1.0.0'
    function requestLog(e) {
      e.hook.wrap('request', (t, r) => {
        e.log.debug('request', r)
        const n = Date.now()
        const i = e.request.endpoint.parse(r)
        const s = i.url.replace(r.baseUrl, '')
        return t(r)
          .then(t => {
            e.log.info(`${i.method***REMOVED*** ${s***REMOVED*** - ${t.status***REMOVED*** in ${Date.now() - n***REMOVED***ms`)
            return t
          ***REMOVED***)
          .catch(t => {
            e.log.info(`${i.method***REMOVED*** ${s***REMOVED*** - ${t.status***REMOVED*** in ${Date.now() - n***REMOVED***ms`)
            throw t
          ***REMOVED***)
      ***REMOVED***)
    ***REMOVED***
    requestLog.VERSION = r
    t.requestLog = requestLog
  ***REMOVED***,
  929: function(e, t, r) {
    e.exports = hasNextPage
    const n = r(370)
    const i = r(577)
    function hasNextPage(e) {
      n(
        `octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
    ***REMOVED***
      return i(e).next
    ***REMOVED***
  ***REMOVED***,
  946: function(e, t, r) {
    'use strict'
    var n = r(35)
    var i = r(589)
    var s = r(732)
    var o = r(529)
    var a = r(590)
    var u = r(887)
    function throwIfCancellationRequested(e) {
      if (e.cancelToken) {
        e.cancelToken.throwIfRequested()
      ***REMOVED***
    ***REMOVED***
    e.exports = function dispatchRequest(e) {
      throwIfCancellationRequested(e)
      if (e.baseURL && !a(e.url)) {
        e.url = u(e.baseURL, e.url)
      ***REMOVED***
      e.headers = e.headers || {***REMOVED***
      e.data = i(e.data, e.headers, e.transformRequest)
      e.headers = n.merge(e.headers.common || {***REMOVED***, e.headers[e.method] || {***REMOVED***, e.headers || {***REMOVED***)
      n.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(t) {
          delete e.headers[t]
        ***REMOVED***
    ***REMOVED***
      var t = e.adapter || o.adapter
      return t(e).then(
        function onAdapterResolution(t) {
          throwIfCancellationRequested(e)
          t.data = i(t.data, t.headers, e.transformResponse)
          return t
        ***REMOVED***,
        function onAdapterRejection(t) {
          if (!s(t)) {
            throwIfCancellationRequested(e)
            if (t && t.response) {
              t.response.data = i(t.response.data, t.response.headers, e.transformResponse)
            ***REMOVED***
          ***REMOVED***
          return Promise.reject(t)
        ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  948: function(e) {
    'use strict'
    e.exports = function(e) {
    ***REMOVED***
        return e()
      ***REMOVED*** catch (e) {***REMOVED***
    ***REMOVED***
  ***REMOVED***,
  954: function(e) {
    e.exports = validateAuth
    function validateAuth(e) {
      if (typeof e === 'string') {
        return
      ***REMOVED***
      if (typeof e === 'function') {
        return
      ***REMOVED***
      if (e.username && e.password) {
        return
      ***REMOVED***
      if (e.clientId && e.clientSecret) {
        return
      ***REMOVED***
      throw new Error(`Invalid "auth" option: ${JSON.stringify(e)***REMOVED***`)
    ***REMOVED***
  ***REMOVED***,
  955: function(e, t, r) {
    'use strict'
    const n = r(622)
    const i = r(129)
    const s = r(20)
    const o = r(768)
    const a = r(621)
    const u = r(323)
    const p = r(145)
    const c = r(697)
    const d = r(260)
    const l = r(427)
    const m = r(168)
    const g = 1e3 * 1e3 * 10
    function handleArgs(e, t, r) {
      let i
      r = Object.assign({ extendEnv: true, env: {***REMOVED*** ***REMOVED***, r)
      if (r.extendEnv) {
        r.env = Object.assign({***REMOVED***, process.env, r.env)
      ***REMOVED***
      if (r.__winShell === true) {
        delete r.__winShell
        i = { command: e, args: t, options: r, file: e, original: { cmd: e, args: t ***REMOVED*** ***REMOVED***
      ***REMOVED*** else {
        i = s._parse(e, t, r)
      ***REMOVED***
      r = Object.assign(
        {
          maxBuffer: g,
          buffer: true,
          stripEof: true,
          preferLocal: true,
          localDir: i.options.cwd || process.cwd(),
          encoding: 'utf8',
          reject: true,
          cleanup: true
        ***REMOVED***,
        i.options
    ***REMOVED***
      r.stdio = m(r)
      if (r.preferLocal) {
        r.env = a.env(Object.assign({***REMOVED***, r, { cwd: r.localDir ***REMOVED***))
      ***REMOVED***
      if (r.detached) {
        r.cleanup = false
      ***REMOVED***
      if (process.platform === 'win32' && n.basename(i.command) === 'cmd.exe') {
        i.args.unshift('/q')
      ***REMOVED***
      return { cmd: i.command, args: i.args, opts: r, parsed: i ***REMOVED***
    ***REMOVED***
    function handleInput(e, t) {
      if (t === null || t === undefined) {
        return
      ***REMOVED***
      if (u(t)) {
        t.pipe(e.stdin)
      ***REMOVED*** else {
        e.stdin.end(t)
      ***REMOVED***
    ***REMOVED***
    function handleOutput(e, t) {
      if (t && e.stripEof) {
        t = o(t)
      ***REMOVED***
      return t
    ***REMOVED***
    function handleShell(e, t, r) {
      let n = '/bin/sh'
      let i = ['-c', t]
      r = Object.assign({***REMOVED***, r)
      if (process.platform === 'win32') {
        r.__winShell = true
        n = process.env.comspec || 'cmd.exe'
        i = ['/s', '/c', `"${t***REMOVED***"`]
        r.windowsVerbatimArguments = true
      ***REMOVED***
      if (r.shell) {
        n = r.shell
        delete r.shell
      ***REMOVED***
      return e(n, i, r)
    ***REMOVED***
    function getStream(e, t, { encoding: r, buffer: n, maxBuffer: i ***REMOVED***) {
      if (!e[t]) {
    ***REMOVED***
      ***REMOVED***
      let s
      if (!n) {
        s = new Promise((r, n) => {
          e[t].once('end', r).once('error', n)
        ***REMOVED***)
      ***REMOVED*** else if (r) {
        s = p(e[t], { encoding: r, maxBuffer: i ***REMOVED***)
      ***REMOVED*** else {
        s = p.buffer(e[t], { maxBuffer: i ***REMOVED***)
      ***REMOVED***
      return s.catch(e => {
        e.stream = t
        e.message = `${t***REMOVED*** ${e.message***REMOVED***`
        throw e
      ***REMOVED***)
    ***REMOVED***
    function makeError(e, t) {
      const { stdout: r, stderr: n ***REMOVED*** = e
      let i = e.error
      const { code: s, signal: o ***REMOVED*** = e
      const { parsed: a, joinedCmd: u ***REMOVED*** = t
      const p = t.timedOut || false
      if (!i) {
        let e = ''
        if (Array.isArray(a.opts.stdio)) {
          if (a.opts.stdio[2] !== 'inherit') {
            e += e.length > 0 ? n : `\n${n***REMOVED***`
          ***REMOVED***
          if (a.opts.stdio[1] !== 'inherit') {
            e += `\n${r***REMOVED***`
          ***REMOVED***
        ***REMOVED*** else if (a.opts.stdio !== 'inherit') {
          e = `\n${n***REMOVED***${r***REMOVED***`
        ***REMOVED***
        i = new Error(`Command failed: ${u***REMOVED***${e***REMOVED***`)
        i.code = s < 0 ? l(s) : s
      ***REMOVED***
      i.stdout = r
      i.stderr = n
      i.failed = true
      i.signal = o || null
      i.cmd = u
      i.timedOut = p
      return i
    ***REMOVED***
    function joinCmd(e, t) {
      let r = e
      if (Array.isArray(t) && t.length > 0) {
        r += ' ' + t.join(' ')
      ***REMOVED***
      return r
    ***REMOVED***
    e.exports = (e, t, r) => {
      const n = handleArgs(e, t, r)
      const { encoding: o, buffer: a, maxBuffer: u ***REMOVED*** = n.opts
      const p = joinCmd(e, t)
      let l
    ***REMOVED***
        l = i.spawn(n.cmd, n.args, n.opts)
      ***REMOVED*** catch (e) {
        return Promise.reject(e)
      ***REMOVED***
      let m
      if (n.opts.cleanup) {
        m = d(() => {
          l.kill()
        ***REMOVED***)
      ***REMOVED***
      let g = null
      let h = false
      const y = () => {
        if (g) {
          clearTimeout(g)
          g = null
        ***REMOVED***
        if (m) {
          m()
        ***REMOVED***
      ***REMOVED***
      if (n.opts.timeout > 0) {
        g = setTimeout(() => {
          g = null
          h = true
          l.kill(n.opts.killSignal)
        ***REMOVED***, n.opts.timeout)
      ***REMOVED***
      const f = new Promise(e => {
        l.on('exit', (t, r) => {
          y()
          e({ code: t, signal: r ***REMOVED***)
        ***REMOVED***)
        l.on('error', t => {
          y()
          e({ error: t ***REMOVED***)
        ***REMOVED***)
        if (l.stdin) {
          l.stdin.on('error', t => {
            y()
            e({ error: t ***REMOVED***)
          ***REMOVED***)
        ***REMOVED***
      ***REMOVED***)
      function destroy() {
        if (l.stdout) {
          l.stdout.destroy()
        ***REMOVED***
        if (l.stderr) {
          l.stderr.destroy()
        ***REMOVED***
      ***REMOVED***
      const b = () =>
        c(
          Promise.all([
            f,
            getStream(l, 'stdout', { encoding: o, buffer: a, maxBuffer: u ***REMOVED***),
            getStream(l, 'stderr', { encoding: o, buffer: a, maxBuffer: u ***REMOVED***)
          ]).then(e => {
            const t = e[0]
            t.stdout = e[1]
            t.stderr = e[2]
            if (t.error || t.code !== 0 || t.signal !== null) {
              const e = makeError(t, { joinedCmd: p, parsed: n, timedOut: h ***REMOVED***)
              e.killed = e.killed || l.killed
              if (!n.opts.reject) {
                return e
              ***REMOVED***
              throw e
            ***REMOVED***
            return {
              stdout: handleOutput(n.opts, t.stdout),
              stderr: handleOutput(n.opts, t.stderr),
              code: 0,
              failed: false,
              killed: false,
              signal: null,
              cmd: p,
              timedOut: false
            ***REMOVED***
          ***REMOVED***),
          destroy
      ***REMOVED***
      s._enoent.hookChildProcess(l, n.parsed)
      handleInput(l, n.opts.input)
      l.then = (e, t) => b().then(e, t)
      l.catch = e => b().catch(e)
      return l
    ***REMOVED***
    e.exports.stdout = (...t) => e.exports(...t).then(e => e.stdout)
    e.exports.stderr = (...t) => e.exports(...t).then(e => e.stderr)
    e.exports.shell = (t, r) => handleShell(e.exports, t, r)
    e.exports.sync = (e, t, r) => {
      const n = handleArgs(e, t, r)
      const s = joinCmd(e, t)
      if (u(n.opts.input)) {
        throw new TypeError('The `input` option cannot be a stream in sync mode')
      ***REMOVED***
      const o = i.spawnSync(n.cmd, n.args, n.opts)
      o.code = o.status
      if (o.error || o.status !== 0 || o.signal !== null) {
        const e = makeError(o, { joinedCmd: s, parsed: n ***REMOVED***)
        if (!n.opts.reject) {
          return e
        ***REMOVED***
        throw e
      ***REMOVED***
      return {
        stdout: handleOutput(n.opts, o.stdout),
        stderr: handleOutput(n.opts, o.stderr),
        code: 0,
        failed: false,
        signal: null,
        cmd: s,
        timedOut: false
      ***REMOVED***
    ***REMOVED***
    e.exports.shellSync = (t, r) => handleShell(e.exports.sync, t, r)
  ***REMOVED***,
  966: function(e, t, r) {
    'use strict'
    const { PassThrough: n ***REMOVED*** = r(413)
    e.exports = e => {
      e = Object.assign({***REMOVED***, e)
      const { array: t ***REMOVED*** = e
      let { encoding: r ***REMOVED*** = e
      const i = r === 'buffer'
      let s = false
      if (t) {
        s = !(r || i)
      ***REMOVED*** else {
        r = r || 'utf8'
      ***REMOVED***
      if (i) {
        r = null
      ***REMOVED***
      let o = 0
      const a = []
      const u = new n({ objectMode: s ***REMOVED***)
      if (r) {
        u.setEncoding(r)
      ***REMOVED***
      u.on('data', e => {
        a.push(e)
        if (s) {
          o = a.length
        ***REMOVED*** else {
          o += e.length
        ***REMOVED***
      ***REMOVED***)
      u.getBufferedValue = () => {
        if (t) {
          return a
        ***REMOVED***
        return i ? Buffer.concat(a, o) : a.join('')
      ***REMOVED***
      u.getBufferedLength = () => o
      return u
    ***REMOVED***
  ***REMOVED***,
  969: function(e, t, r) {
    var n = r(11)
    e.exports = n(once)
    e.exports.strict = n(onceStrict)
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, 'once', {
        value: function() {
          return once(this)
        ***REMOVED***,
        configurable: true
      ***REMOVED***)
      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
          return onceStrict(this)
        ***REMOVED***,
        configurable: true
      ***REMOVED***)
    ***REMOVED***)
    function once(e) {
      var t = function() {
        if (t.called) return t.value
        t.called = true
        return (t.value = e.apply(this, arguments))
      ***REMOVED***
      t.called = false
      return t
    ***REMOVED***
    function onceStrict(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError)
        t.called = true
        return (t.value = e.apply(this, arguments))
      ***REMOVED***
      var r = e.name || 'Function wrapped with `once`'
      t.onceError = r + " shouldn't be called more than once"
      t.called = false
      return t
    ***REMOVED***
  ***REMOVED***
***REMOVED***)
