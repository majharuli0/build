import{r as s}from"./index-Br78m9MR.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4355967-ad72-4fb7-8f31-b3acd698ba60",e._sentryDebugIdIdentifier="sentry-dbid-c4355967-ad72-4fb7-8f31-b3acd698ba60")}catch{}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),c=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},d=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim(),g=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:l,...i},f)=>s.createElement("svg",{ref:f,...m,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:d("lucide",n),...!a&&!g(i)&&{"aria-hidden":"true"},...i},[...l.map(([u,b])=>s.createElement(u,b)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const r=s.forwardRef(({className:o,...n},a)=>s.createElement(y,{ref:a,iconNode:t,className:d(`lucide-${p(c(e))}`,`lucide-${e}`,o),...n}));return r.displayName=c(e),r};export{C as c};
//# sourceMappingURL=createLucideIcon-YdAcexKe.js.map
