import{r as t,d as m,fo as b,j as p}from"./index-yUIdt1TH.js";import"./mockData-Bpurtgqo.js";import Y from"./barChart-C2Makwm1.js";import{T as h}from"./Template-Dl3K5DK0.js";import{g as y}from"./utiles--wHmcics.js";import{C}from"./UseCustomContext-4nhXzkBx.js";import"./index-BYau0tQU.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-9aLUOns9.js";import"./SwapRightOutlined-Cx56ly23.js";import"./weekOfYear-Duzu8HiS.js";import"./index-BlzC4Sng.js";import"./weekday-Do8F8RSx.js";import"./index-DGQ5pdzr.js";import"./index-D24XFRaO.js";import"./index-Dj2R1OBZ.js";import"./index-DcuyU_LR.js";import"./index-Cxx0iq4l.js";function J({isSummaryBtn:P=!0}){const{title:n,color:r,icon:u,dataAnalysis:D}=y("Deep Sleep Percentage Distribution"),f=t.useContext(C),{chartToDate:o="",chartFromDate:i="",elderlyDetails:e}=f||{},[s,d]=t.useState(m().subtract(1,"day").format("YYYY-MM-DD")),[l,g]=t.useState(m().subtract(31,"day").format("YYYY-MM-DD")),[S,x]=t.useState([]),c=t.useCallback(()=>{b({uids:e==null?void 0:e.deviceId,to_date:l,from_date:s}).then(a=>{x(a.data),console.log(a.data)}).catch(a=>{console.log(a)})},[s,e]);return t.useEffect(()=>{c()},[c]),t.useEffect(()=>{o&&i&&(d(o),g(i))},[o]),p.jsx(h,{title:n,color:r,icon:u,dataAnalysis:D,isSummaryBtn:!1,children:p.jsx(Y,{data:S,color:r,dataType:"percentage",fromDate:"",toDate:"",chartFor:"deepSleepPercentageDistribution",xUnit:"percentage"})})}export{J as default};