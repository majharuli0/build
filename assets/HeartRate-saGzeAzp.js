import{r as e,d as f,fx as M,j as D}from"./index-DKKIrJkr.js";import b from"./RateChart-B1A8IdlV.js";import{T as A}from"./Template-LPn3yNS7.js";import{g as E}from"./utiles-CwN2Rny6.js";import{C as H}from"./UseCustomContext-aFWT3z3w.js";import"./index-p85IepaV.js";import"./WeeklyMonthlyPicker-DmGP_U48.js";import"./SwapRightOutlined-CCH1E9zQ.js";import"./weekOfYear-CVPDmtEy.js";import"./index-nnJyr53O.js";import"./weekday-B__MiVbj.js";import"./helper-C_2_l4sE.js";import"./index-B3eKfCJC.js";import"./index-BIADAzPj.js";import"./index-CNMB-R86.js";import"./index-BkY9Nf-8.js";import"./index-DHZ_F7Jt.js";import"./index-CaJV5Al1.js";function Q({isSummaryBtn:l=!0}){const x=e.useContext(H),[d,h]=e.useState([]),{chartToDate:o="",chartFromDate:c="",elderlyDetails:r={}}=x||{},[m,g]=e.useState(f().subtract(1,"day").format("YYYY-MM-DD")),[i,Y]=e.useState(f().subtract(7,"day").format("YYYY-MM-DD")),{title:y,color:n,icon:C,dataAnalysis:R,summaryProps:T}=E("Heart Rate"),p=e.useCallback(()=>{M({uids:r==null?void 0:r.deviceId,to_date:i,from_date:m}).then(s=>{const t=s.data,u={xdata:t==null?void 0:t.map(a=>a.date),maxArray:t==null?void 0:t.map(a=>a.max),minArray:t==null?void 0:t.map(a=>a.min),allAvgNumber:Math.round((t==null?void 0:t.reduce((a,j)=>a+j.avg,0))/t.length)};console.log(u),h(u)}).catch(s=>{console.log(s)})},[m,o,r]);return e.useEffect(()=>{p()},[p]),e.useEffect(()=>{o&&c&&(g(o),Y(c))},[o]),D.jsx(A,{title:y,color:n,icon:C,dataAnalysis:R,isSummaryBtn:l,summaryProps:T,children:D.jsx(b,{dateType:"Week",color:n,cheartInfo:d,fromDate:i,toDate:m})})}export{Q as default};