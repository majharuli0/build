import{r as t,d as n,j as c}from"./index-CobdpRh7.js";import{e as h}from"./ElderlyProfile-BhlOb1R3.js";import"./mockData-Bpurtgqo.js";import A from"./barChart-BzEvofQh.js";import{T as C}from"./Template-C9FcQ4is.js";import{g as T}from"./utiles-C7Bk12zC.js";import{C as j}from"./UseCustomContext-B_1xq4Cd.js";import"./elderly-C-SiuZEO.js";import"./HomeOutlined-D7Qp8yxf.js";import"./PullRequestOutlined-CIp4Kky0.js";import"./index-BmWpdu5T.js";import"./PlusOutlined-C2kNC7YQ.js";import"./index-BL57kvT-.js";import"./helper-CkPZVUc-.js";import"./WeeklyMonthlyPicker-B6bZGkTo.js";import"./SwapRightOutlined-DpK6SFPb.js";import"./weekOfYear-BxizFVfv.js";import"./index-BizllIo4.js";import"./weekday-C4K6isIH.js";import"./index-cJR4ku3L.js";import"./index-BWSnoMuk.js";import"./index-Cg4k8VAP.js";import"./index-tgvtVGpc.js";import"./index-3ogvJ4lk.js";function W({isSummaryBtn:d=!0}){const{title:u,color:s,icon:f,dataAnalysis:x,summaryProps:D}=T("Apnea Index"),l=t.useContext(j),{chartToDate:e="",chartFromDate:m="",elderlyDetails:a}=l||{},[r,S]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[i,Y]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[I,g]=t.useState([]),p=t.useCallback(()=>{h({uids:a==null?void 0:a.deviceId,to_date:i,from_date:r}).then(o=>{g(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[r,a]);return t.useEffect(()=>{p()},[p]),t.useEffect(()=>{e&&m&&(S(e),Y(m))},[e]),c.jsx(C,{title:u,color:s,icon:f,dataAnalysis:x,isSummaryBtn:d,summaryProps:D,children:c.jsx(A,{data:I,color:s,dataType:"number",fromDate:i,toDate:r})})}export{W as default};