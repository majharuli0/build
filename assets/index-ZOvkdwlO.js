import{r,j as e}from"./index-CobdpRh7.js";import{B as g}from"./index-B5jJ3ewG.js";const C=({handBlurchange:o,placeholder:l})=>{const[t,i]=r.useState(!1),[n,a]=r.useState(""),c=s=>{s.key=="Enter"&&o(n)},x=s=>{console.log("我触发了"),i(!t),t&&o("")};return e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{onClick:()=>{x()},className:"mr-[10px]",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M16.7567 15.5735L12.8125 11.6129C13.8266 10.449 14.3823 8.98455 14.3823 7.45999C14.3823 3.89801 11.3806 1 7.69113 1C4.0017 1 1 3.89801 1 7.45999C1 11.022 4.0017 13.92 7.69113 13.92C9.07619 13.92 10.3961 13.5167 11.5246 12.751L15.4988 16.7416C15.6649 16.9082 15.8883 17 16.1278 17C16.3544 17 16.5694 16.9166 16.7326 16.7649C17.0794 16.4428 17.0904 15.9085 16.7567 15.5735ZM7.69113 2.68522C10.4182 2.68522 12.6367 4.82713 12.6367 7.45999C12.6367 10.0929 10.4182 12.2348 7.69113 12.2348C4.96406 12.2348 2.74551 10.0929 2.74551 7.45999C2.74551 4.82713 4.96406 2.68522 7.69113 2.68522Z" fill="white"/>
</svg>`}})}),t&&e.jsx("input",{value:n,onChange:s=>{a(s.target.value)},onKeyPress:c,placeholder:l,className:" placeholder-custom pl-[20px] text-[#fff] outline-none   bg-[rgba(0,0,0,0)] focus:border-none"})]})})})};export{C as B};