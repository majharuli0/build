import{r as s,$ as f,fy as E,j as t}from"./index-DKKIrJkr.js";import y from"./TimelineBar-Dwph8pNP.js";import{g as C}from"./index-BkY9Nf-8.js";import{T as _}from"./Template-LPn3yNS7.js";import{k as l}from"./helper-C_2_l4sE.js";import{C as g}from"./UseCustomContext-aFWT3z3w.js";import"./index-p85IepaV.js";import"./WeeklyMonthlyPicker-DmGP_U48.js";import"./SwapRightOutlined-CCH1E9zQ.js";import"./weekOfYear-CVPDmtEy.js";import"./index-nnJyr53O.js";import"./weekday-B__MiVbj.js";import"./index-B3eKfCJC.js";function R(){const{sleepEventsType:o,sleepEventsColor:i}=s.useContext(f),{sleepData:e,elderlyDetails:m}=s.useContext(g),[c,x]=s.useState([]),d={title:"Sleep Events Summary",pickerTypes:["day","range"],chartType:"multibar_sleep_events",dataType:"time",color:"#FF725E",apisProps:{endpoint:E,query:{uids:m==null?void 0:m.deviceId}}};return s.useEffect(()=>{if(e!=null&&e.alarm_events){const n=e==null?void 0:e.alarm_events.reduce((r,u)=>{const a=o[u.event_type],p=r.find(v=>v.event_name===a);return p?p.count+=1:r.push({event_name:a,count:1,color:i[a]}),r},[]);x(n)}},[e]),t.jsx(t.Fragment,{children:t.jsxs(_,{title:"Sleep Events",color:"#FF725E",icon:t.jsx(C,{}),isDataAnalysis:!1,headerClassName:"!text-2xl",summaryProps:d,children:[t.jsx(y,{alarmEvents:e==null?void 0:e.alarm_events,enterBedTime:l(e==null?void 0:e.get_bed_idx),getupAfterTime:l(e==null?void 0:e.leave_bed_idx)}),t.jsx("div",{className:"flex flex-wrap gap-4 items-center justify-center ",children:c.map((n,r)=>t.jsx(h,{count:n.count,eventName:n.event_name,color:n.color},r))})]})})}const h=({count:o,eventName:i,color:e})=>t.jsxs("div",{className:"flex p-[4px] pr-4 items-center gap-2 rounded-xl",style:{backgroundColor:e},children:[t.jsx("span",{className:"text-[17px] p-2 py-1 font-bold bg-white rounded-[9px] text-primary",children:o}),t.jsx("span",{className:"text-[15px] font-medium text-white leading-[1.2]",children:i})]});export{R as default};