import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ColPmU5X.mjs';
import { manifest } from './manifest_BVZVrho5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/store/_slug_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/store/[slug].ts", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/[...slug].astro", _page3]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "479148b4-fe06-401d-a8fc-bce23d46160b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
