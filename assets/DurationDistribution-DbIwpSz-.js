import{r as o,d as h,fn as E,j as b}from"./index-DKKIrJkr.js";import"./mockData-Bpurtgqo.js";import j from"./barChart-Z4iitIeT.js";import{T as M}from"./Template-LPn3yNS7.js";import{g as B}from"./utiles-CwN2Rny6.js";import{C as F}from"./UseCustomContext-aFWT3z3w.js";import"./index-p85IepaV.js";import"./helper-C_2_l4sE.js";import"./WeeklyMonthlyPicker-DmGP_U48.js";import"./SwapRightOutlined-CCH1E9zQ.js";import"./weekOfYear-CVPDmtEy.js";import"./index-nnJyr53O.js";import"./weekday-B__MiVbj.js";import"./index-B3eKfCJC.js";import"./index-BIADAzPj.js";import"./index-CNMB-R86.js";import"./index-BkY9Nf-8.js";import"./index-DHZ_F7Jt.js";import"./index-CaJV5Al1.js";function X({isSummaryBtn:A=!0}){const{title:d,color:n,icon:g,dataAnalysis:x,summaryProps:_}=B("Duration Distribution"),S=o.useContext(F),{chartToDate:i="",chartFromDate:m="",elderlyDetails:e}=S||{},[a,y]=o.useState(h().subtract(1,"day").format("YYYY-MM-DD")),[u,Y]=o.useState(h().subtract(31,"day").format("YYYY-MM-DD")),[C,p]=o.useState([]),c=o.useCallback(()=>{console.log("fromDate Todate ",u,a),E({uids:e==null?void 0:e.deviceId,to_date:u,from_date:a}).then(t=>{T(t==null?void 0:t.data),p(t==null?void 0:t.data)}).catch(t=>{console.log(t)})},[a,e]);o.useEffect(()=>{c()},[c]),o.useEffect(()=>{i&&m&&(y(i),Y(m))},[i]);function T(t){const D=Array(12).fill(0);t==null||t.forEach(s=>{const r=Math.round(s.sleepDuration);r>=1&&r<=12&&(D[r-1]+=1)});const l=(t==null?void 0:t.length)||0,f=D.map((s,r)=>({hour:r+1,percentage:l>0?s/l*100:0}));p(f),console.log(f)}return b.jsx(M,{title:d,color:n,icon:g,dataAnalysis:x,isSummaryBtn:!1,children:b.jsx(j,{data:C,dataType:"percentage",xUnit:"hour",chartFor:"durationDistribution",color:n,toDate:"",fromDate:""})})}export{X as default};