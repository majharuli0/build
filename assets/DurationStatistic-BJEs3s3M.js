import{r as t,d as n,j as u}from"./index-CPi8G-lc.js";import{g as C}from"./ElderlyProfile-BWdCLkdX.js";import"./mockData-Bpurtgqo.js";import T from"./barChart-QAVpUF88.js";import{T as j}from"./Template-KySXtW_l.js";import{g as y}from"./utiles-D8Rp3mso.js";import{C as E}from"./UseCustomContext-CnsOb8Ii.js";import"./elderly-biEcHDM7.js";import"./HomeOutlined-CX2jPnON.js";import"./PullRequestOutlined-CV_MZFZo.js";import"./index-D8XprEYS.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-BY6G6ys7.js";import"./SwapRightOutlined-RWuKF7gJ.js";import"./weekOfYear-BIW9_wzg.js";import"./index-Ci9ot4ae.js";import"./weekday-DDj7-htS.js";import"./index-d1jc08FB.js";import"./index-Cs29MILQ.js";import"./index-Cx5QaP1Z.js";import"./index-B7WD3ICK.js";import"./index-nr-nHRoT.js";function U({isSummaryBtn:D=!0}){const{title:l,color:s,icon:d,dataAnalysis:f,summaryProps:g}=y("Duration"),i=t.useContext(E),{chartToDate:o="",chartFromDate:m="",elderlyDetails:a={}}=i||{},[e,x]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[p,S]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[Y,h]=t.useState([]),c=t.useCallback(()=>{console.log("ca;ed"),console.log(i),C({uids:a==null?void 0:a.deviceId,to_date:p,from_date:e}).then(r=>{h(r.data),console.log(r)}).catch(r=>{console.log(r)})},[e,o,a]);return t.useEffect(()=>{c()},[c]),t.useEffect(()=>{o&&m&&(x(o),S(m))},[o]),u.jsx(j,{title:l,color:s,icon:d,dataAnalysis:f,isSummaryBtn:D,summaryProps:g,children:u.jsx(T,{data:Y,dataType:"duration",color:s,toDate:e,fromDate:p,chartFor:"sleedDurationStatistic"})})}export{U as default};