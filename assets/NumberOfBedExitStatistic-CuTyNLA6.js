import{r as t,d as a,j as m}from"./index-BOuKYgOO.js";import{n as D}from"./mockData-cQH8-PlQ.js";import d from"./barChart-DdHitgAA.js";import{T as x}from"./Template-CpH0e2GO.js";import{g as Y}from"./utiles-BrrIifxn.js";import{C as l}from"./UseCustomContext-BChC4vM-.js";import"./index-CLg4TBn_.js";import"./helper-DA8PoIl3.js";import"./WeeklyMonthlyPicker-2Mcpfuri.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./index-CsP08dNi.js";import"./weekday-D-VfgnGi.js";import"./index-D-BitYsR.js";import"./index-DbB9mY9p.js";import"./index-C05JYFkY.js";import"./index-BJACSv2h.js";import"./index-DqYOSYN3.js";import"./ElderlyProfile-BQ71XWEH.js";import"./elderly-C6Sh-tQz.js";import"./HomeOutlined-DYJuhFzZ.js";import"./PullRequestOutlined-D6_0YGJ_.js";import"./index-UqUUMglq.js";import"./PlusOutlined-0GYtJJxN.js";function L({isSummaryBtn:e=!0}){const i=t.useContext(l),{chartToDate:o="",chartFromDate:s=""}=i||{},[b,p]=t.useState(a().subtract(1,"day").format("YYYY-MM-DD")),[T,n]=t.useState(a().subtract(31,"day").format("YYYY-MM-DD")),{title:c,color:r,icon:u,dataAnalysis:f}=Y("Number of Bed Exit");return t.useEffect(()=>{p(o),n(s)},[o]),m.jsx(x,{title:c,color:r,icon:u,dataAnalysis:f,isSummaryBtn:e,children:m.jsx(d,{data:D,color:r,dataType:"number"})})}export{L as default};