import{r,d as f,j as D}from"./index-BOuKYgOO.js";import M from"./RateChart-DdTYqyI1.js";import{T as b}from"./Template-CpH0e2GO.js";import{g as A}from"./utiles-BrrIifxn.js";import{C as E}from"./UseCustomContext-BChC4vM-.js";import{h as H}from"./ElderlyProfile-BQ71XWEH.js";import"./index-CLg4TBn_.js";import"./WeeklyMonthlyPicker-2Mcpfuri.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./index-CsP08dNi.js";import"./weekday-D-VfgnGi.js";import"./helper-DA8PoIl3.js";import"./index-D-BitYsR.js";import"./index-DbB9mY9p.js";import"./index-C05JYFkY.js";import"./index-BJACSv2h.js";import"./index-DqYOSYN3.js";import"./elderly-C6Sh-tQz.js";import"./HomeOutlined-DYJuhFzZ.js";import"./PullRequestOutlined-D6_0YGJ_.js";import"./index-UqUUMglq.js";import"./PlusOutlined-0GYtJJxN.js";function $({isSummaryBtn:l=!0}){const h=r.useContext(E),[x,d]=r.useState([]),{chartToDate:a="",chartFromDate:i="",elderlyDetails:e={}}=h||{},[m,g]=r.useState(f().subtract(1,"day").format("YYYY-MM-DD")),[p,Y]=r.useState(f().subtract(7,"day").format("YYYY-MM-DD")),{title:y,color:c,icon:C,dataAnalysis:R,summaryProps:T}=A("Heart Rate"),n=r.useCallback(()=>{H({uids:e==null?void 0:e.deviceId,to_date:p,from_date:m}).then(s=>{const t=s.data,u={xdata:t==null?void 0:t.map(o=>o.date),maxArray:t==null?void 0:t.map(o=>o.max),minArray:t==null?void 0:t.map(o=>o.min),allAvgNumber:Math.round((t==null?void 0:t.reduce((o,j)=>o+j.avg,0))/t.length)};console.log(u),d(u)}).catch(s=>{console.log(s)})},[m,a,e]);return r.useEffect(()=>{n()},[n]),r.useEffect(()=>{a&&i&&(g(a),Y(i))},[a]),D.jsx(b,{title:y,color:c,icon:C,dataAnalysis:R,isSummaryBtn:l,summaryProps:T,children:D.jsx(M,{dateType:"Week",color:c,cheartInfo:x,fromDate:p,toDate:m})})}export{$ as default};