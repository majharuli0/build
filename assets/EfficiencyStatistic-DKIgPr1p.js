import{r as t,d as p,j as f}from"./index-BOuKYgOO.js";import{b as g}from"./ElderlyProfile-BQ71XWEH.js";import"./mockData-cQH8-PlQ.js";import h from"./barChart-DdHitgAA.js";import{T as C}from"./Template-CpH0e2GO.js";import{g as T}from"./utiles-BrrIifxn.js";import{C as j}from"./UseCustomContext-BChC4vM-.js";import"./elderly-C6Sh-tQz.js";import"./HomeOutlined-DYJuhFzZ.js";import"./PullRequestOutlined-D6_0YGJ_.js";import"./index-UqUUMglq.js";import"./PlusOutlined-0GYtJJxN.js";import"./index-CLg4TBn_.js";import"./helper-DA8PoIl3.js";import"./WeeklyMonthlyPicker-2Mcpfuri.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./index-CsP08dNi.js";import"./weekday-D-VfgnGi.js";import"./index-D-BitYsR.js";import"./index-DbB9mY9p.js";import"./index-C05JYFkY.js";import"./index-BJACSv2h.js";import"./index-DqYOSYN3.js";function W({isSummaryBtn:n=!0}){const{title:u,color:r,icon:d,dataAnalysis:l,summaryProps:D}=T("Efficiency"),y=t.useContext(j),{chartToDate:e="",chartFromDate:s="",elderlyDetails:o}=y||{},[i,S]=t.useState(p().subtract(1,"day").format("YYYY-MM-DD")),[c,E]=t.useState(p().subtract(31,"day").format("YYYY-MM-DD")),[x,Y]=t.useState([]),m=t.useCallback(()=>{g({uids:o==null?void 0:o.deviceId,status:"3",to_date:c,from_date:i}).then(a=>{Y(a.data),console.log(a.data)}).catch(a=>{console.log(a)})},[i,o]);return t.useEffect(()=>{m()},[m]),t.useEffect(()=>{e&&s&&(S(e),E(s))},[e]),f.jsx(C,{title:u,color:r,icon:d,dataAnalysis:l,isSummaryBtn:n,summaryProps:D,children:f.jsx(h,{data:x,color:r,dataType:"percentage",fromDate:c,toDate:i})})}export{W as default};