import{r as t,d as n,j as u}from"./index-DQy7c-QQ.js";import{g as C}from"./ElderlyProfile-DMkSVaY6.js";import"./mockData-Bpurtgqo.js";import T from"./barChart-C-wsZNLz.js";import{T as j}from"./Template-Ez0msNvo.js";import{g as y}from"./utiles-DA6XUz8A.js";import{C as E}from"./UseCustomContext-Bv9JlKpe.js";import"./elderly-DcxWQ7Ec.js";import"./HomeOutlined-BaKS-L7T.js";import"./PullRequestOutlined-BQwPCrOF.js";import"./index-B778KYfo.js";import"./PlusOutlined-C-ym2-MA.js";import"./index-DHtzzFS9.js";import"./helper-BBch2RZo.js";import"./WeeklyMonthlyPicker-DbHgGDkD.js";import"./SwapRightOutlined-BA0wviLa.js";import"./weekOfYear-CBuXdiWG.js";import"./index-DahbhpYv.js";import"./weekday-Dp8kpFJs.js";import"./index-CrMkKcXz.js";import"./index-XOwfKSDA.js";import"./index-C1cvzJY4.js";import"./index-D5yKkHoY.js";import"./index-C9-oocVi.js";function W({isSummaryBtn:D=!0}){const{title:l,color:s,icon:f,dataAnalysis:d,summaryProps:g}=y("Duration"),i=t.useContext(E),{chartToDate:o="",chartFromDate:m="",elderlyDetails:a={}}=i||{},[e,x]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[p,S]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[Y,h]=t.useState([]),c=t.useCallback(()=>{console.log("ca;ed"),console.log(i),C({uids:a==null?void 0:a.deviceId,to_date:p,from_date:e}).then(r=>{h(r.data),console.log(r)}).catch(r=>{console.log(r)})},[e,o,a]);return t.useEffect(()=>{c()},[c]),t.useEffect(()=>{o&&m&&(x(o),S(m))},[o]),u.jsx(j,{title:l,color:s,icon:f,dataAnalysis:d,isSummaryBtn:D,summaryProps:g,children:u.jsx(T,{data:Y,dataType:"duration",color:s,toDate:e,fromDate:p})})}export{W as default};