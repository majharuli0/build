import{r,d as u,fv as j,j as f}from"./index-yUIdt1TH.js";import M from"./RateChart-BVYx7HDb.js";import{T as b}from"./Template-Dl3K5DK0.js";import{g as v}from"./utiles--wHmcics.js";import{C as A}from"./UseCustomContext-4nhXzkBx.js";import"./index-BYau0tQU.js";import"./WeeklyMonthlyPicker-9aLUOns9.js";import"./SwapRightOutlined-Cx56ly23.js";import"./weekOfYear-Duzu8HiS.js";import"./index-BlzC4Sng.js";import"./weekday-Do8F8RSx.js";import"./helper-DzRZPsxz.js";import"./index-DGQ5pdzr.js";import"./index-D24XFRaO.js";import"./index-Dj2R1OBZ.js";import"./index-DcuyU_LR.js";import"./index-Cxx0iq4l.js";function O({isSummaryBtn:E=!0}){const D=r.useContext(A),[h,x]=r.useState([]),{chartToDate:e="",chartFromDate:i="",elderlyDetails:o={}}=D||{},[m,d]=r.useState(u().subtract(1,"day").format("YYYY-MM-DD")),[c,l]=r.useState(u().subtract(7,"day").format("YYYY-MM-DD")),{title:y,color:p,icon:g,dataAnalysis:R,summaryProps:Y}=v("Respiratory Rate"),n=r.useCallback(()=>{j({uids:o==null?void 0:o.deviceId,to_date:c,from_date:m}).then(s=>{const t=s.data,C={xdata:t==null?void 0:t.map(a=>a.date),maxArray:t==null?void 0:t.map(a=>a.max),minArray:t==null?void 0:t.map(a=>a.min),allAvgNumber:Math.round((t==null?void 0:t.reduce((a,T)=>a+T.avg,0))/t.length)};x(C)}).catch(s=>{console.log(s)})},[m,e,o]);return r.useEffect(()=>{n()},[n]),r.useEffect(()=>{e&&i&&(d(e),l(i))},[e]),f.jsx(b,{title:y,color:p,icon:g,dataAnalysis:R,summaryProps:Y,children:f.jsx(M,{dateType:"Week",color:p,cheartInfo:h,fromDate:c,toDate:m})})}export{O as default};