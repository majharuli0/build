import{r as t,d as n,j as c}from"./index-Br_GEqdo.js";import{e as g}from"./ElderlyProfile-B6V8c33t.js";import"./mockData-DnyFJQLN.js";import h from"./barChart-DKaa5cZw.js";import{T as A}from"./Template-BAXMacal.js";import{g as C}from"./utiles-YgzOmVfp.js";import{C as T}from"./UseCustomContext-CViCX-HO.js";import"./elderly-CKiohUCZ.js";import"./HomeOutlined-hcIBy_LE.js";import"./PullRequestOutlined-BRHQQ4wy.js";import"./index-CRbLI1Fq.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-PvGft6NO.js";import"./SwapRightOutlined-CrSe5jtl.js";import"./weekOfYear-n-0uo8J2.js";import"./index-BgZw8iPK.js";import"./weekday-BFwzlRaD.js";import"./index-DSRFHE-c.js";import"./index-DPNdkmhK.js";import"./index-ceZKZtjc.js";import"./index-BY34WRD1.js";import"./index-Bw6T5mVA.js";function Q(){const{title:d,color:s,icon:f,dataAnalysis:u,summaryProps:x}=C("Apnea Index"),D=t.useContext(T),{chartToDate:e="",chartFromDate:m="",elderlyDetails:a}=D||{},[r,l]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[i,S]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[Y,I]=t.useState([]),p=t.useCallback(()=>{g({uids:a==null?void 0:a.deviceId,to_date:i,from_date:r}).then(o=>{I(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[r,a]);return t.useEffect(()=>{p()},[p]),t.useEffect(()=>{e&&m&&(l(e),S(m))},[e]),c.jsx(A,{title:d,color:s,icon:f,dataAnalysis:u,summaryProps:x,children:c.jsx(h,{data:Y,color:s,dataType:"number",fromDate:i,toDate:r})})}export{Q as default};