import{r as t,d as m,j as e}from"./index-BOuKYgOO.js";import"./mockData-cQH8-PlQ.js";import u from"./barChart-DdHitgAA.js";import{T as D}from"./Template-CpH0e2GO.js";import{g as d}from"./utiles-BrrIifxn.js";import{C as x}from"./UseCustomContext-BChC4vM-.js";import"./index-CLg4TBn_.js";import"./helper-DA8PoIl3.js";import"./WeeklyMonthlyPicker-2Mcpfuri.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./index-CsP08dNi.js";import"./weekday-D-VfgnGi.js";import"./index-D-BitYsR.js";import"./index-DbB9mY9p.js";import"./index-C05JYFkY.js";import"./index-BJACSv2h.js";import"./index-DqYOSYN3.js";import"./ElderlyProfile-BQ71XWEH.js";import"./elderly-C6Sh-tQz.js";import"./HomeOutlined-DYJuhFzZ.js";import"./PullRequestOutlined-D6_0YGJ_.js";import"./index-UqUUMglq.js";import"./PlusOutlined-0GYtJJxN.js";function N({isSummaryBtn:i=!0}){const p=t.useContext(x),{chartToDate:o="",chartFromDate:r=""}=p||{},[T,s]=t.useState(m().subtract(1,"day").format("YYYY-MM-DD")),[Y,c]=t.useState(m().subtract(31,"day").format("YYYY-MM-DD")),{title:n,color:a,icon:f,dataAnalysis:l}=d("Time to Fall Asleep");return t.useEffect(()=>{o&&r&&(s(o),c(r))},[o]),e.jsx(D,{title:n,color:a,icon:f,dataAnalysis:l,isSummaryBtn:i,children:e.jsx(u,{data:[],color:a,dataType:"number"})})}export{N as default};