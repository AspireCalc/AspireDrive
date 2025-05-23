module.exports = {

"[project]/node_modules/node-fetch-native-with-agent/dist/chunks/multipart-parser.cjs [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var y = Object.defineProperty;
var c = (R, o)=>y(R, "name", {
        value: o,
        configurable: !0
    });
__turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)"), __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const node = __turbopack_context__.r("[project]/node_modules/node-fetch-native-with-agent/dist/node.cjs [app-rsc] (ecmascript)");
__turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)"), __turbopack_context__.r("[externals]/node:https [external] (node:https, cjs)"), __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)"), __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)"), __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)"), __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)"), __turbopack_context__.r("[project]/node_modules/node-fetch-native-with-agent/dist/shared/node-fetch-native-with-agent.61758d11.cjs [app-rsc] (ecmascript)"), __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)"), __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
let s = 0;
const S = {
    START_BOUNDARY: s++,
    HEADER_FIELD_START: s++,
    HEADER_FIELD: s++,
    HEADER_VALUE_START: s++,
    HEADER_VALUE: s++,
    HEADER_VALUE_ALMOST_DONE: s++,
    HEADERS_ALMOST_DONE: s++,
    PART_DATA_START: s++,
    PART_DATA: s++,
    END: s++
};
let f = 1;
const F = {
    PART_BOUNDARY: f,
    LAST_BOUNDARY: f *= 2
}, LF = 10, CR = 13, SPACE = 32, HYPHEN = 45, COLON = 58, A = 97, Z = 122, lower = c((R)=>R | 32, "lower"), noop = c(()=>{}, "noop"), O = class O {
    constructor(o){
        this.index = 0, this.flags = 0, this.onHeaderEnd = noop, this.onHeaderField = noop, this.onHeadersEnd = noop, this.onHeaderValue = noop, this.onPartBegin = noop, this.onPartData = noop, this.onPartEnd = noop, this.boundaryChars = {}, o = `\r
--` + o;
        const t = new Uint8Array(o.length);
        for(let n = 0; n < o.length; n++)t[n] = o.charCodeAt(n), this.boundaryChars[t[n]] = !0;
        this.boundary = t, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = S.START_BOUNDARY;
    }
    write(o) {
        let t = 0;
        const n = o.length;
        let E = this.index, { lookbehind: l, boundary: h, boundaryChars: H, index: e, state: a, flags: d } = this;
        const b = this.boundary.length, g = b - 1, m = o.length;
        let r, P;
        const u = c((D)=>{
            this[D + "Mark"] = t;
        }, "mark"), i = c((D)=>{
            delete this[D + "Mark"];
        }, "clear"), T = c((D, p, _, N)=>{
            (p === void 0 || p !== _) && this[D](N && N.subarray(p, _));
        }, "callback"), L = c((D, p)=>{
            const _ = D + "Mark";
            _ in this && (p ? (T(D, this[_], t, o), delete this[_]) : (T(D, this[_], o.length, o), this[_] = 0));
        }, "dataCallback");
        for(t = 0; t < n; t++)switch(r = o[t], a){
            case S.START_BOUNDARY:
                if (e === h.length - 2) {
                    if (r === HYPHEN) d |= F.LAST_BOUNDARY;
                    else if (r !== CR) return;
                    e++;
                    break;
                } else if (e - 1 === h.length - 2) {
                    if (d & F.LAST_BOUNDARY && r === HYPHEN) a = S.END, d = 0;
                    else if (!(d & F.LAST_BOUNDARY) && r === LF) e = 0, T("onPartBegin"), a = S.HEADER_FIELD_START;
                    else return;
                    break;
                }
                r !== h[e + 2] && (e = -2), r === h[e + 2] && e++;
                break;
            case S.HEADER_FIELD_START:
                a = S.HEADER_FIELD, u("onHeaderField"), e = 0;
            case S.HEADER_FIELD:
                if (r === CR) {
                    i("onHeaderField"), a = S.HEADERS_ALMOST_DONE;
                    break;
                }
                if (e++, r === HYPHEN) break;
                if (r === COLON) {
                    if (e === 1) return;
                    L("onHeaderField", !0), a = S.HEADER_VALUE_START;
                    break;
                }
                if (P = lower(r), P < A || P > Z) return;
                break;
            case S.HEADER_VALUE_START:
                if (r === SPACE) break;
                u("onHeaderValue"), a = S.HEADER_VALUE;
            case S.HEADER_VALUE:
                r === CR && (L("onHeaderValue", !0), T("onHeaderEnd"), a = S.HEADER_VALUE_ALMOST_DONE);
                break;
            case S.HEADER_VALUE_ALMOST_DONE:
                if (r !== LF) return;
                a = S.HEADER_FIELD_START;
                break;
            case S.HEADERS_ALMOST_DONE:
                if (r !== LF) return;
                T("onHeadersEnd"), a = S.PART_DATA_START;
                break;
            case S.PART_DATA_START:
                a = S.PART_DATA, u("onPartData");
            case S.PART_DATA:
                if (E = e, e === 0) {
                    for(t += g; t < m && !(o[t] in H);)t += b;
                    t -= g, r = o[t];
                }
                if (e < h.length) h[e] === r ? (e === 0 && L("onPartData", !0), e++) : e = 0;
                else if (e === h.length) e++, r === CR ? d |= F.PART_BOUNDARY : r === HYPHEN ? d |= F.LAST_BOUNDARY : e = 0;
                else if (e - 1 === h.length) if (d & F.PART_BOUNDARY) {
                    if (e = 0, r === LF) {
                        d &= ~F.PART_BOUNDARY, T("onPartEnd"), T("onPartBegin"), a = S.HEADER_FIELD_START;
                        break;
                    }
                } else d & F.LAST_BOUNDARY && r === HYPHEN ? (T("onPartEnd"), a = S.END, d = 0) : e = 0;
                if (e > 0) l[e - 1] = r;
                else if (E > 0) {
                    const D = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
                    T("onPartData", 0, E, D), E = 0, u("onPartData"), t--;
                }
                break;
            case S.END:
                break;
            default:
                throw new Error(`Unexpected state entered: ${a}`);
        }
        L("onHeaderField"), L("onHeaderValue"), L("onPartData"), this.index = e, this.state = a, this.flags = d;
    }
    end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) this.onPartEnd();
        else if (this.state !== S.END) throw new Error("MultipartParser.end(): stream ended unexpectedly");
    }
};
c(O, "MultipartParser");
let MultipartParser = O;
function _fileName(R) {
    const o = R.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
    if (!o) return;
    const t = o[2] || o[3] || "";
    let n = t.slice(t.lastIndexOf("\\") + 1);
    return n = n.replace(/%22/g, '"'), n = n.replace(/&#(\d{4});/g, (E, l)=>String.fromCharCode(l)), n;
}
c(_fileName, "_fileName");
async function toFormData(R, o) {
    if (!/multipart/i.test(o)) throw new TypeError("Failed to fetch");
    const t = o.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
    if (!t) throw new TypeError("no or bad content-type header, no multipart boundary");
    const n = new MultipartParser(t[1] || t[2]);
    let E, l, h, H, e, a;
    const d = [], b = new node.FormData, g = c((i)=>{
        h += u.decode(i, {
            stream: !0
        });
    }, "onPartData"), m = c((i)=>{
        d.push(i);
    }, "appendToFile"), r = c(()=>{
        const i = new node.File(d, a, {
            type: e
        });
        b.append(H, i);
    }, "appendFileToFormData"), P = c(()=>{
        b.append(H, h);
    }, "appendEntryToFormData"), u = new TextDecoder("utf-8");
    u.decode(), n.onPartBegin = function() {
        n.onPartData = g, n.onPartEnd = P, E = "", l = "", h = "", H = "", e = "", a = null, d.length = 0;
    }, n.onHeaderField = function(i) {
        E += u.decode(i, {
            stream: !0
        });
    }, n.onHeaderValue = function(i) {
        l += u.decode(i, {
            stream: !0
        });
    }, n.onHeaderEnd = function() {
        if (l += u.decode(), E = E.toLowerCase(), E === "content-disposition") {
            const i = l.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
            i && (H = i[2] || i[3] || ""), a = _fileName(l), a && (n.onPartData = m, n.onPartEnd = r);
        } else E === "content-type" && (e = l);
        l = "", E = "";
    };
    for await (const i of R)n.write(i);
    return n.end(), b;
}
c(toFormData, "toFormData"), exports.toFormData = toFormData;
}}),

};

//# sourceMappingURL=dd92d_modules_node-fetch-native-with-agent_dist_chunks_multipart-parser_cjs_83222092._.js.map