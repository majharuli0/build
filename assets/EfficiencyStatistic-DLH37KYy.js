import{r as t,d as p,fn as g,j as f}from"./index-yUIdt1TH.js";import"./mockData-Bpurtgqo.js";import h from"./barChart-C2Makwm1.js";import{T as C}from"./Template-Dl3K5DK0.js";import{g as T}from"./utiles--wHmcics.js";import{C as j}from"./UseCustomContext-4nhXzkBx.js";import"./index-BYau0tQU.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-9aLUOns9.js";import"./SwapRightOutlined-Cx56ly23.js";import"./weekOfYear-Duzu8HiS.js";import"./index-BlzC4Sng.js";import"./weekday-Do8F8RSx.js";import"./index-DGQ5pdzr.js";import"./index-D24XFRaO.js";import"./index-Dj2R1OBZ.js";import"./index-DcuyU_LR.js";import"./index-Cxx0iq4l.js";function K({isSummaryBtn:n=!0}){const{title:u,color:i,icon:d,dataAnalysis:l,summaryProps:D}=T("Efficiency"),y=t.useContext(j),{chartToDate:o="",chartFromDate:r="",elderlyDetails:a}=y||{},[s,S]=t.useState(p().subtract(1,"day").format("YYYY-MM-DD")),[c,x]=t.useState(p().subtract(31,"day").format("YYYY-MM-DD")),[E,Y]=t.useState([]),m=t.useCallback(()=>{g({uids:a==null?void 0:a.deviceId,status:"3",to_date:c,from_date:s}).then(e=>{Y(e.data),console.log(e.data)}).catch(e=>{console.log(e)})},[s,a]);return t.useEffect(()=>{m()},[m]),t.useEffect(()=>{o&&r&&(S(o),x(r))},[o]),f.jsx(C,{title:u,color:i,icon:d,dataAnalysis:l,isSummaryBtn:n,summaryProps:D,children:f.jsx(h,{data:E,color:i,dataType:"percentage",fromDate:c,toDate:s,xUnit:"date"})})}export{K as default};