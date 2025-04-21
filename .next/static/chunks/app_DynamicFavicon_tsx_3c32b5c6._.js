(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/DynamicFavicon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const DynamicFavicon = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicFavicon.useEffect": ()=>{
            const favicon = document.getElementById('favicon');
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            // Function to update favicon based on theme
            const setFavicon = {
                "DynamicFavicon.useEffect.setFavicon": ()=>{
                    if (darkModeMediaQuery.matches) {
                        favicon.href = '/assets/dark-theme-icon/favicon.ico'; // Dark mode favicon
                    } else {
                        favicon.href = '/assets/light-theme-icon/favicon.ico'; // Light mode favicon
                    }
                }
            }["DynamicFavicon.useEffect.setFavicon"];
            // Set initial favicon based on current theme
            setFavicon();
            // Listen for theme changes
            darkModeMediaQuery.addEventListener('change', setFavicon);
            // Cleanup listener on component unmount
            return ({
                "DynamicFavicon.useEffect": ()=>{
                    darkModeMediaQuery.removeEventListener('change', setFavicon);
                }
            })["DynamicFavicon.useEffect"];
        }
    }["DynamicFavicon.useEffect"], []);
    return null; // This component doesn't need to render anything
};
_s(DynamicFavicon, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DynamicFavicon;
const __TURBOPACK__default__export__ = DynamicFavicon;
var _c;
__turbopack_context__.k.register(_c, "DynamicFavicon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_DynamicFavicon_tsx_3c32b5c6._.js.map