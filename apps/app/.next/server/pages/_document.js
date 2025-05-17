const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/08b5e__pnpm_1ead31._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e237d7._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.1.4_@babel+core@7.27.1_@playwright+test@1.52.0_react-dom@19.0.0_react@19.0.0/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
