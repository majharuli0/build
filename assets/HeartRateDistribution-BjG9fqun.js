import{r as t,d as n,fw as R,j as c}from"./index-yUIdt1TH.js";import{T as Y}from"./Template-Dl3K5DK0.js";import{g}from"./utiles--wHmcics.js";import"./mockData-DnyFJQLN.js";import y from"./barChart-C2Makwm1.js";import{C}from"./UseCustomContext-4nhXzkBx.js";import"./WeeklyMonthlyPicker-9aLUOns9.js";import"./SwapRightOutlined-Cx56ly23.js";import"./weekOfYear-Duzu8HiS.js";import"./index-BlzC4Sng.js";import"./weekday-Do8F8RSx.js";import"./helper-DzRZPsxz.js";import"./index-DGQ5pdzr.js";import"./index-D24XFRaO.js";import"./index-Dj2R1OBZ.js";import"./index-DcuyU_LR.js";import"./index-Cxx0iq4l.js";import"./index-BYau0tQU.js";function K({isSummaryBtn:T=!0}){const{title:p,color:e,icon:u,dataAnalysis:D,summaryProps:j}=g("Heart Rate Distribution"),f=t.useContext(C),{chartToDate:r="",chartFromDate:s="",elderlyDetails:a}=f||{},[i,d]=t.useState(n().subtract(1,"day").format("YYYY-MM-DD")),[l,b]=t.useState(n().subtract(31,"day").format("YYYY-MM-DD")),[x,h]=t.useState([]);t.useEffect(()=>{r&&s&&(d(r),b(s))},[r]);const m=t.useCallback(()=>{R({uids:a==null?void 0:a.deviceId,to_date:l,from_date:i}).then(o=>{h(o.data),console.log(o.data)}).catch(o=>{console.log(o)})},[i,a]);return t.useEffect(()=>{m()},[m]),c.jsx(Y,{title:p,color:e,icon:u,dataAnalysis:D,isSummaryBtn:!1,children:c.jsx(y,{color:e,dataType:"percentage",data:x,chartFor:"heartRateDistribution",xUnit:"number"})})}export{K as default};