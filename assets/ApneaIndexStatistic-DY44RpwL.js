import{r as t,d as n,j as c}from"./index-DQy7c-QQ.js";import{e as h}from"./ElderlyProfile-DMkSVaY6.js";import"./mockData-Bpurtgqo.js";import A from"./barChart-C-wsZNLz.js";import{T as C}from"./Template-Ez0msNvo.js";import{g as T}from"./utiles-DA6XUz8A.js";import{C as j}from"./UseCustomContext-Bv9JlKpe.js";import"./elderly-DcxWQ7Ec.js";import"./HomeOutlined-BaKS-L7T.js";import"./PullRequestOutlined-BQwPCrOF.js";import"./index-B778KYfo.js";import"./PlusOutlined-C-ym2-MA.js";import"./index-DHtzzFS9.js";import"./helper-BBch2RZo.js";import"./WeeklyMonthlyPicker-DbHgGDkD.js";import"./SwapRightOutlined-BA0wviLa.js";import"./weekOfYear-CBuXdiWG.js";import"./index-DahbhpYv.js";import"./weekday-Dp8kpFJs.js";import"./index-CrMkKcXz.js";import"./index-XOwfKSDA.js";import"./index-C1cvzJY4.js";import"./index-D5yKkHoY.js";import"./index-C9-oocVi.js";function W({isSummaryBtn:d=!0}){const{title:u,color:s,icon:f,dataAnalysis:x,summaryProps:D}=T("Apnea Index"),l=t.useContext(j),{chartToDate:e="",chartFromDate:m="",elderlyDetails:a}=l||{},[r,S]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[i,Y]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[I,g]=t.useState([]),p=t.useCallback(()=>{h({uids:a==null?void 0:a.deviceId,to_date:i,from_date:r}).then(o=>{g(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[r,a]);return t.useEffect(()=>{p()},[p]),t.useEffect(()=>{e&&m&&(S(e),Y(m))},[e]),c.jsx(C,{title:u,color:s,icon:f,dataAnalysis:x,isSummaryBtn:d,summaryProps:D,children:c.jsx(A,{data:I,color:s,dataType:"number",fromDate:i,toDate:r})})}export{W as default};