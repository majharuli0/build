const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scatterChart-gRZBQa49.js","assets/index-DKEPlPMw.js","assets/index-BOwnDLW5.css","assets/index-C88mHCLz.js"])))=>i.map(i=>d[i]);
import{r as t,d as m,j as n,bA as _}from"./index-DKEPlPMw.js";import{j as g}from"./ElderlyProfile-BC3PuKrd.js";import{T as C}from"./Template-Cw_oAlpT.js";import{g as Y}from"./utiles-Cjwxbjlp.js";import{j as b}from"./helper-DzRZPsxz.js";import{C as j}from"./UseCustomContext-DF6VB58j.js";import"./elderly-fnALsJad.js";import"./HomeOutlined-CNgJfFmX.js";import"./PullRequestOutlined-zSVGBxYf.js";import"./WeeklyMonthlyPicker-DIsZmpnl.js";import"./SwapRightOutlined-BDoH_om6.js";import"./weekOfYear-BCMUTNDi.js";import"./index-B9-ofjPq.js";import"./weekday-FwHoDaUK.js";import"./index-Bp4H7YC8.js";import"./index-DeLHTZKo.js";import"./index-CZoxq-lL.js";import"./index-BuUnu2EE.js";import"./index-BlmXYDhK.js";const h=t.lazy(()=>_(()=>import("./scatterChart-gRZBQa49.js"),__vite__mapDeps([0,1,2,3])));function K(){const{title:p,color:c,icon:u,dataAnalysis:l,summaryProps:D}=Y("Distribution of Daily Routine"),f=t.useContext(j),{chartToDate:e="",chartFromDate:r="",elderlyDetails:o}=f||{},[i,d]=t.useState(m().subtract(1,"day").format("YYYY-MM-DD")),[y,x]=t.useState(m().subtract(31,"day").format("YYYY-MM-DD")),[E,R]=t.useState([]),s=t.useCallback(()=>{g({uids:o==null?void 0:o.deviceId,to_date:y,from_date:i}).then(a=>{R(b(a.data)),console.log(a.data)}).catch(a=>{console.log(a)})},[i,o]);return t.useEffect(()=>{s()},[s]),t.useEffect(()=>{e&&r&&(d(e),x(r))},[e]),n.jsx(C,{title:p,color:c,icon:u,isDataAnalysis:!1,dataAnalysis:l,summaryProps:D,children:n.jsx(h,{data:E,colors:{gotobed:"#2EC7C9",wakeup:"#5AB1EF",getup:"#FFB980",fallasleep:"#B6A2DE"}})})}export{K as default};