import{r as t,d as p,fq as g,j as c}from"./index-D0xmOMtE.js";import"./mockData-DnyFJQLN.js";import h from"./barChart-efLVugwD.js";import{T as A}from"./Template-Cnkd6J26.js";import{g as C}from"./utiles-Cy_L3y0-.js";import{C as T}from"./UseCustomContext-9rTaSiHK.js";import"./index-BxOk_HLZ.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-D7Iww9wY.js";import"./SwapRightOutlined-DMXrNSIw.js";import"./weekOfYear-BkhFIwP_.js";import"./index-DG0K53Xh.js";import"./weekday-yIKgASdp.js";import"./index-Brbkjnc6.js";import"./index-D3aJ0k2l.js";import"./index-CcFotKs9.js";import"./index-BFkuxmCm.js";import"./index-DKfU8aQ_.js";function K(){const{title:d,color:s,icon:f,dataAnalysis:u,summaryProps:x}=C("Apnea Index"),D=t.useContext(T),{chartToDate:e="",chartFromDate:i="",elderlyDetails:a}=D||{},[r,l]=t.useState(p().subtract(1,"day").format("YYYY-MM-DD")),[m,S]=t.useState(p().subtract(31,"day").format("YYYY-MM-DD")),[Y,I]=t.useState([]),n=t.useCallback(()=>{g({uids:a==null?void 0:a.deviceId,to_date:m,from_date:r}).then(o=>{I(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[r,a]);return t.useEffect(()=>{n()},[n]),t.useEffect(()=>{e&&i&&(l(e),S(i))},[e]),c.jsx(A,{title:d,color:s,icon:f,dataAnalysis:u,summaryProps:x,children:c.jsx(h,{data:Y,color:s,dataType:"number",fromDate:m,toDate:r})})}export{K as default};