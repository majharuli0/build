import{r as t,d as c,l as Y,j as p}from"./index-BOuKYgOO.js";import{c as h}from"./ElderlyProfile-BQ71XWEH.js";import"./mockData-cQH8-PlQ.js";import C from"./barChart-DdHitgAA.js";import{T as S}from"./Template-CpH0e2GO.js";import{g as T}from"./utiles-BrrIifxn.js";import{C as j}from"./UseCustomContext-BChC4vM-.js";import"./elderly-C6Sh-tQz.js";import"./HomeOutlined-DYJuhFzZ.js";import"./PullRequestOutlined-D6_0YGJ_.js";import"./index-UqUUMglq.js";import"./PlusOutlined-0GYtJJxN.js";import"./index-CLg4TBn_.js";import"./helper-DA8PoIl3.js";import"./WeeklyMonthlyPicker-2Mcpfuri.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./index-CsP08dNi.js";import"./weekday-D-VfgnGi.js";import"./index-D-BitYsR.js";import"./index-DbB9mY9p.js";import"./index-C05JYFkY.js";import"./index-BJACSv2h.js";import"./index-DqYOSYN3.js";function X({isSummaryBtn:n=!0}){const{title:f,color:a,icon:u,dataAnalysis:D,summaryProps:l}=T("Efficiency Distribution"),d=t.useContext(j),{chartToDate:i="",chartFromDate:r="",elderlyDetails:o}=d||{},[s,y]=t.useState(c().subtract(1,"day").format("YYYY-MM-DD")),[x,E]=t.useState(c().subtract(31,"day").format("YYYY-MM-DD"));Y.get("elderly_details");const[b,g]=t.useState([]),m=t.useCallback(()=>{h({uids:o==null?void 0:o.deviceId,to_date:x,from_date:s}).then(e=>{g(e.data),console.log(e.data)}).catch(e=>{console.log(e)})},[s,o]);return t.useEffect(()=>{m()},[m]),t.useEffect(()=>{i&&r&&(y(i),E(r))},[i]),p.jsx(S,{title:f,color:a,icon:u,dataAnalysis:D,isSummaryBtn:n,summaryProps:l,children:p.jsx(C,{data:b,color:a,dataType:"percentage",fromDate:"",toDate:"",xUnit:"percentage"})})}export{X as default};