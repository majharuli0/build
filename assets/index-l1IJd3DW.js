import{r as c,ds as P,b4 as T,bV as j,p as O,bQ as m,d5 as R,dx as p}from"./index-yUIdt1TH.js";var V=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=c.forwardRef(function(e,f){var d,C=e.prefixCls,n=C===void 0?"rc-switch":C,g=e.className,b=e.checked,w=e.defaultChecked,t=e.disabled,y=e.loadingIcon,N=e.checkedChildren,x=e.unCheckedChildren,o=e.onClick,i=e.onChange,r=e.onKeyDown,S=P(e,V),I=T(!1,{value:b,defaultValue:w}),k=j(I,2),l=k[0],E=k[1];function h(a,u){var s=l;return t||(s=a,E(s),i==null||i(s,u)),s}function K(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),r==null||r(a)}function D(a){var u=h(!l,a);o==null||o(u,a)}var M=O(n,g,(d={},m(d,"".concat(n,"-checked"),l),m(d,"".concat(n,"-disabled"),t),d));return c.createElement("button",R({},S,{type:"button",role:"switch","aria-checked":l,disabled:t,className:M,ref:f,onKeyDown:K,onClick:D}),y,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},x)))});v.displayName="Switch";const z=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as S,z as e};