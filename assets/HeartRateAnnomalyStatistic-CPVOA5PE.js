import{r as a,d as h,j as D}from"./index-DJP8L-_P.js";import{T as A}from"./Template-yrT3Wjkm.js";import{g as b}from"./utiles-BMdFEO6p.js";import"./mockData-DnyFJQLN.js";import M from"./barChart-YiRLZeKf.js";import{C as _}from"./UseCustomContext-_pUCiEHd.js";import{m as F}from"./ElderlyProfile-XQvfrXGD.js";import"./WeeklyMonthlyPicker-sYAcXxBX.js";import"./SwapRightOutlined-axsAMpfn.js";import"./weekOfYear-DlUauCwy.js";import"./index-1Wbw6vCp.js";import"./weekday-Ck-UiTBD.js";import"./helper-DzRZPsxz.js";import"./index-BW-98AEZ.js";import"./index-Bfw4jCdn.js";import"./index-yEfGuoQB.js";import"./index-CclUTnrq.js";import"./index-thaok9JV.js";import"./index-RporuO4d.js";import"./elderly-vQEzljel.js";import"./HomeOutlined-CkzxRX6N.js";import"./PullRequestOutlined-EOq1n7wi.js";function ot({isSummaryBtn:x=!0}){const{title:R,color:s,icon:E,dataAnalysis:Y,summaryProps:g}=b("Heart Rate Anomaly Statistic"),C=a.useContext(_),{chartToDate:r="",chartFromDate:i="",elderlyDetails:o}=C||{},[m,H]=a.useState(h().subtract(1,"day").format("YYYY-MM-DD")),[c,S]=a.useState(h().subtract(31,"day").format("YYYY-MM-DD")),[T,j]=a.useState([]),p=a.useCallback(()=>{F({uids:o==null?void 0:o.deviceId,to_date:c,from_date:m}).then(t=>{console.log(t==null?void 0:t.data),f(t==null?void 0:t.data),j(f(t==null?void 0:t.data))}).catch(t=>{console.log(t)})},[m,o]);a.useEffect(()=>{p()},[p]),a.useEffect(()=>{r&&i&&(H(r),S(i))},[r]);function f(t){const n=[];return t==null||t.forEach(e=>{var l;const u=e.date;(l=e==null?void 0:e.events)==null||l.forEach(d=>{if(d.event_type===14||d.event_type===15){const y=n.find(v=>v.date===u);y?y.anomalyHeartRate+=1:n.push({date:u,anomalyHeartRate:1})}})}),n}return D.jsx(A,{title:R,color:s,icon:E,dataAnalysis:Y,isSummaryBtn:x,summaryProps:g,children:D.jsx(M,{data:T,color:s,dataType:"number",fromDate:c,toDate:m,chartFor:"heartRateAnomaly"})})}export{ot as default};