import{r as t,d as p,j as f}from"./index-DQy7c-QQ.js";import{b as g}from"./ElderlyProfile-DMkSVaY6.js";import"./mockData-Bpurtgqo.js";import h from"./barChart-C-wsZNLz.js";import{T as C}from"./Template-Ez0msNvo.js";import{g as T}from"./utiles-DA6XUz8A.js";import{C as j}from"./UseCustomContext-Bv9JlKpe.js";import"./elderly-DcxWQ7Ec.js";import"./HomeOutlined-BaKS-L7T.js";import"./PullRequestOutlined-BQwPCrOF.js";import"./index-B778KYfo.js";import"./PlusOutlined-C-ym2-MA.js";import"./index-DHtzzFS9.js";import"./helper-BBch2RZo.js";import"./WeeklyMonthlyPicker-DbHgGDkD.js";import"./SwapRightOutlined-BA0wviLa.js";import"./weekOfYear-CBuXdiWG.js";import"./index-DahbhpYv.js";import"./weekday-Dp8kpFJs.js";import"./index-CrMkKcXz.js";import"./index-XOwfKSDA.js";import"./index-C1cvzJY4.js";import"./index-D5yKkHoY.js";import"./index-C9-oocVi.js";function W({isSummaryBtn:n=!0}){const{title:u,color:r,icon:d,dataAnalysis:l,summaryProps:D}=T("Efficiency"),y=t.useContext(j),{chartToDate:e="",chartFromDate:s="",elderlyDetails:o}=y||{},[i,S]=t.useState(p().subtract(1,"day").format("YYYY-MM-DD")),[c,x]=t.useState(p().subtract(31,"day").format("YYYY-MM-DD")),[E,Y]=t.useState([]),m=t.useCallback(()=>{g({uids:o==null?void 0:o.deviceId,status:"3",to_date:c,from_date:i}).then(a=>{Y(a.data),console.log(a.data)}).catch(a=>{console.log(a)})},[i,o]);return t.useEffect(()=>{m()},[m]),t.useEffect(()=>{e&&s&&(S(e),x(s))},[e]),f.jsx(C,{title:u,color:r,icon:d,dataAnalysis:l,isSummaryBtn:n,summaryProps:D,children:f.jsx(h,{data:E,color:r,dataType:"percentage",fromDate:c,toDate:i,xUnit:"date"})})}export{W as default};