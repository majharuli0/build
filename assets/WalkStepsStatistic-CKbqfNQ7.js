import{r as t,d as c,j as n}from"./index-Br_GEqdo.js";import{s as Y}from"./ElderlyProfile-B6V8c33t.js";import g from"./barChart-DKaa5cZw.js";import{T as h}from"./Template-BAXMacal.js";import{g as C}from"./utiles-YgzOmVfp.js";import{C as T}from"./UseCustomContext-CViCX-HO.js";import"./elderly-CKiohUCZ.js";import"./HomeOutlined-hcIBy_LE.js";import"./PullRequestOutlined-BRHQQ4wy.js";import"./index-CRbLI1Fq.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-PvGft6NO.js";import"./SwapRightOutlined-CrSe5jtl.js";import"./weekOfYear-n-0uo8J2.js";import"./index-BgZw8iPK.js";import"./weekday-BFwzlRaD.js";import"./index-DSRFHE-c.js";import"./index-DPNdkmhK.js";import"./index-ceZKZtjc.js";import"./index-BY34WRD1.js";import"./index-Bw6T5mVA.js";function N(){const{title:f,color:r,icon:l,dataAnalysis:S}=C("Walk Steps Statistic"),d=t.useContext(T),{chartToDate:s="",chartFromDate:i="",elderlyDetails:a}=d||{},[e,u]=t.useState(c().subtract(1,"day").format("YYYY-MM-DD")),[m,D]=t.useState(c().subtract(31,"day").format("YYYY-MM-DD")),[x,k]=t.useState([]),p=t.useCallback(()=>{Y({uids:a==null?void 0:a.deviceId,to_date:m,from_date:e}).then(o=>{k(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[e,a]);return t.useEffect(()=>{p()},[p]),t.useEffect(()=>{s&&i&&(u(s),D(i))},[s]),n.jsx(h,{title:f,color:r,icon:l,dataAnalysis:S,children:n.jsx(g,{data:x,color:r,dataType:"number",fromDate:m,toDate:e,chartFor:"walkingStepsStatistix"})})}export{N as default};