import{r as t,d as p,j as c}from"./index-CobdpRh7.js";import"./mockData-BQb1j9bt.js";import Y from"./barChart-BzEvofQh.js";import{T as h}from"./Template-C9FcQ4is.js";import{g as R}from"./utiles-C7Bk12zC.js";import{C as T}from"./UseCustomContext-B_1xq4Cd.js";import{r as g}from"./ElderlyProfile-BhlOb1R3.js";import"./index-BL57kvT-.js";import"./helper-CkPZVUc-.js";import"./WeeklyMonthlyPicker-B6bZGkTo.js";import"./SwapRightOutlined-DpK6SFPb.js";import"./weekOfYear-BxizFVfv.js";import"./index-BizllIo4.js";import"./weekday-C4K6isIH.js";import"./index-cJR4ku3L.js";import"./index-BWSnoMuk.js";import"./index-Cg4k8VAP.js";import"./index-tgvtVGpc.js";import"./index-3ogvJ4lk.js";import"./elderly-C-SiuZEO.js";import"./HomeOutlined-D7Qp8yxf.js";import"./PullRequestOutlined-CIp4Kky0.js";import"./index-BmWpdu5T.js";import"./PlusOutlined-C2kNC7YQ.js";function Q(){const{title:f,color:a,icon:u,dataAnalysis:d}=R("Number of Room Entries and Exits"),E=t.useContext(T),{chartToDate:e="",chartFromDate:i="",elderlyDetails:o}=E||{},[m,x]=t.useState(p().subtract(1,"day").format("YYYY-MM-DD")),[s,b]=t.useState(p().subtract(31,"day").format("YYYY-MM-DD")),[l,D]=t.useState([]),n=t.useCallback(()=>{g({uids:o==null?void 0:o.deviceId,to_date:s,from_date:m}).then(r=>{D(r.data),console.log(r.data)}).catch(r=>{console.log(r)})},[m,o]);return t.useEffect(()=>{n()},[n]),t.useEffect(()=>{e&&i&&(x(e),b(i))},[e]),c.jsx(h,{title:f,color:a,icon:u,dataAnalysis:d,children:c.jsx(Y,{data:l,color:a,dataType:"number",fromDate:s,toDate:m,chartFor:"roomInOut",dataUnit:" times"})})}export{Q as default};