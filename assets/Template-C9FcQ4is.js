const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DataAnalysis-DfB__riw.js","assets/index-CobdpRh7.js","assets/index-e-hEEexW.css","assets/LargeTextViewerModal-Bh8Lv3gL.js","assets/MoonFilled-BvKmYeDF.js","assets/barChart-BzEvofQh.js","assets/index-BL57kvT-.js","assets/helper-CkPZVUc-.js","assets/multibarChart-2abF4xcr.js","assets/TimelineGraph-C7WGw7dU.js","assets/TimelineBar-DHXX6JqC.js","assets/LiveRateChart-buOtFSbd.js","assets/RateChart-DTnjzfCN.js","assets/DayRateChart-De-CiIsq.js","assets/scatterChart-BNx2laf5.js"])))=>i.map(i=>d[i]);
import{x as M,by as S,r as j,$ as ee,j as a,M as te,d as L,aF as ne,dY as le}from"./index-CobdpRh7.js";import{W as ae}from"./WeeklyMonthlyPicker-B6bZGkTo.js";import{j as O,i as ie}from"./helper-CkPZVUc-.js";import{D as G}from"./index-BizllIo4.js";const oe=()=>Array.from({length:12},(T,_)=>({date:`2023-10-${String(_*2+1).padStart(2,"0")}`,value:Math.floor(Math.random()*100)+1})),ce=()=>Array.from({length:12},(T,_)=>({date:`2023-10-${String(_*2+2).padStart(2,"0")}`,value:Math.floor(Math.random()*100)+1})),de=()=>Array.from({length:12},(T,_)=>({date:`2023-10-${String(_*2+1).padStart(2,"0")}`,value:Math.floor(Math.random()*180)+1}));oe();ce();de();function fe(T,_){return typeof T!="function"?(console.error("apiFunction is not a function or is undefined"),Promise.reject(new Error("apiFunction is not a function"))):T(_).then(E=>(console.log("API Response:",E),E)).catch(E=>{throw console.error("API Request Error:",E),E})}M.lazy(()=>S(()=>import("./DataAnalysis-DfB__riw.js"),__vite__mapDeps([0,1,2,3,4])));const he=M.lazy(()=>S(()=>import("./barChart-BzEvofQh.js"),__vite__mapDeps([5,1,2,6,7]))),H=M.lazy(()=>S(()=>import("./multibarChart-2abF4xcr.js"),__vite__mapDeps([8,1,2,6]))),re=M.lazy(()=>S(()=>import("./TimelineGraph-C7WGw7dU.js"),__vite__mapDeps([9,1,2,6]))),xe=M.lazy(()=>S(()=>import("./TimelineBar-DHXX6JqC.js"),__vite__mapDeps([10,1,2,6])));M.lazy(()=>S(()=>import("./LiveRateChart-buOtFSbd.js"),__vite__mapDeps([11,1,2,6])));const ge=M.lazy(()=>S(()=>import("./RateChart-DTnjzfCN.js"),__vite__mapDeps([12,1,2,6]))),ve=M.lazy(()=>S(()=>import("./DayRateChart-De-CiIsq.js"),__vite__mapDeps([13,1,2,6]))),_e=M.lazy(()=>S(()=>import("./scatterChart-BNx2laf5.js"),__vite__mapDeps([14,1,2,6]))),{RangePicker:ue,DatePicker:Se}=G;function De({visible:T,onClose:_,modalData:E,summaryProps:e}){var U;const[r,A]=j.useState(""),[d,k]=j.useState(""),[C,N]=j.useState(null),[g,I]=j.useState([]),[R,$]=j.useState([]),[z,B]=j.useState([]),{sleepEventsType:V,sleepEventsColor:Y}=j.useContext(ee);function J(t){A(t.end),k(t.start),N("weeklyMonthly")}function K(t,n){A(n[1]||""),k(n[0]||""),N("range")}function Q(t,n){A(null),k(n||""),N("day"),console.log("dateString =============>",R)}function s(t){return t.map(({date:n,events:l})=>{const v=l.reduce((u,{event_type:w})=>(u[w]=(u[w]||0)+1,u),{}),i=Object.entries(v).map(([u,w])=>({name:V[u],value:`${w}`,status:u,color:Y[u]}));return{date:n,data:i}})}function X(t){var l,v,i,u,w,W,p,q;let n=[];if(t||B([]),(e==null?void 0:e.title)==="Breath Rate Summary"||(e==null?void 0:e.title)==="Heart Rate Summary")!r&&((l=t[0])!=null&&l.avg)&&(n=[{name:"Avg. Breath Rate",value:(v=t[0])==null?void 0:v.avg},{name:"Min. Breath Rate",value:(i=t[0])==null?void 0:i.min},{name:"Max. Breath Rate",value:(u=t[0])==null?void 0:u.max}]);else if((e==null?void 0:e.title)==="Sleep Timeline Summary")if((w=t[0])!=null&&w.statistical_data&&d&&r==null){const x=(W=t[0])==null?void 0:W.statistical_data.reduce((f,c)=>{const o=new Date(c.start_time),b=(new Date(c.end_time)-o)/(1e3*60),h=V[c.status];return f[h]||(f[h]={duration:0}),f[h].duration+=b,f},{});n=Object.entries(x).map(([f,{duration:c}])=>{const o=Math.floor(c/60),D=Math.floor(c%60);return{name:f,value:`${o}hr ${D}m`}})}else{const x={},f=t.map(c=>({data:c.sleep_index_common_list,date:c.date}));f==null||f.forEach(c=>{var o;(o=c==null?void 0:c.data)==null||o.forEach(({name:D,value:b,status:h,ratio:P})=>{x[h]||(x[h]={name:`Avg. ${V[h]}`,totalValue:0,totalRatio:0,count:0}),x[h].totalValue+=parseInt(b),x[h].totalRatio+=P,x[h].count+=1})}),n=Object.entries(x).map(([c,o])=>{const D=Math.round(o.totalValue/o.count),b=Math.floor(D/60),h=D%60;return{name:o.name,value:`${b}hr ${h}m`,ratio:Math.round(o.totalRatio/o.count)}})}else if((e==null?void 0:e.title)==="Sleep Events Summary")if((p=t[0])!=null&&p.events&&d&&r==null){const x=(q=t[0])==null?void 0:q.events.reduce((f,c)=>{const o=V[c.event_type],D=f.find(b=>b.name===o);if(D){const b=parseInt(D.value.replace("x",""));D.value=`${b+1}x`}else f.push({name:o,value:"1x",color:Y[o]});return f},[]);console.log("alarmEventCounts =============>",x),n=x}else{const x={},f=s(t);f==null||f.forEach(c=>{var o;(o=c==null?void 0:c.data)==null||o.forEach(({name:D,value:b,status:h})=>{x[h]||(x[h]={name:`Avg. ${V[h]}`,totalValue:0,count:0}),x[h].totalValue+=parseInt(b),x[h].count+=1})}),n=Object.entries(x).map(([c,o])=>{const D=Math.round(o.totalValue/o.count);return{name:o.name,value:`${D}x`}})}return B(n),n}function Z(t){if(t||I([]),(e==null?void 0:e.title)==="Sleep Timeline Summary")if(d&&r){const n=t.map(l=>({data:l.sleep_index_common_list,date:l.date}));I(n)}else I(t[0]),console.log("chartData =============>",t);else if((e==null?void 0:e.title)==="Sleep Events Summary"){const n=s(t);I(n)}else if(((e==null?void 0:e.title)==="Breath Rate Summary"||(e==null?void 0:e.title)==="Heart Rate Summary")&&r&&d){const n={xdata:t.map(l=>l.date),maxArray:t.map(l=>l.max),minArray:t.map(l=>l.min),allAvgNumber:Math.round(t.reduce((l,v)=>l+v.avg,0)/t.length)};I(n)}return t}j.useEffect(()=>{console.log("================================ api called inti",e==null?void 0:e.title)},[e==null?void 0:e.title]),j.useEffect(()=>{async function t(){var n,l,v;if((n=e==null?void 0:e.apisProps)!=null&&n.endpoint)try{const i=await fe((l=e==null?void 0:e.apisProps)==null?void 0:l.endpoint,{...(v=e==null?void 0:e.apisProps)==null?void 0:v.query,from_date:r,to_date:d||L().subtract(31,"day").format("YYYY-MM-DD")});i&&(i!=null&&i.data)&&($(i==null?void 0:i.data),X(i==null?void 0:i.data),Z(i==null?void 0:i.data))}catch(i){console.error("Error fetching summary data:",i),$([])}}t()},[(U=e==null?void 0:e.apisProps)==null?void 0:U.endpoint,r,d]);const y=()=>{var t;return(t=e==null?void 0:e.pickerTypes)==null?void 0:t.map(n=>{switch(n){case"weeklyMonthly":return a.jsx(ae,{placeholder:"Weekly/Monthly",style:{width:"140px",borderRadius:"10px"},handleChnage:J,value:C==="weeklyMonthly"&&d&&r?{start:d,end:r}:null},"weeklyMonthly");case"range":return a.jsx(ue,{showTime:!1,style:{width:"200px",borderRadius:"10px"},size:"large",placeholder:["Pick Data Range (Start)","End"],format:"YYYY-MM-DD",onChange:(l,v)=>K(l,v),value:C==="range"&&r&&d?[L(d),L(r)]:null,allowClear:!0},"range");case"day":return a.jsx(G,{style:{width:"200px",borderRadius:"10px"},size:"large",format:"YYYY-MM-DD",onChange:(l,v)=>Q(l,v),value:C==="day"&&d?L(d):null,allowClear:!0},"day");default:return null}})},F={multibar:{default:{component:H,getProps:()=>({data:g,toDate:r,fromDate:d,valueType:e==null?void 0:e.dataType})},day:{component:re,getProps:()=>({statisticalData:g==null?void 0:g.statistical_data,enterBedTime:O(g==null?void 0:g.get_bed_idx),getupAfterTime:O(g==null?void 0:g.leave_bed_idx)})}},multibar_sleep_events:{default:{component:H,getProps:()=>({data:g,toDate:r,fromDate:d,valueType:e==null?void 0:e.dataType})},day:{component:xe,getProps:()=>{var t,n,l;return{alarmEvents:(t=R[0])==null?void 0:t.events,enterBedTime:O((n=R[0])==null?void 0:n.get_bed_idx),getupAfterTime:O((l=R[0])==null?void 0:l.leave_bed_idx)}}}},bar:{default:{component:he,getProps:()=>({data:R,dataType:e==null?void 0:e.dataType,color:e==null?void 0:e.color,xUnit:e==null?void 0:e.xUnit,toDate:e!=null&&e.isFromToDate?r:"",fromDate:e!=null&&e.isFromToDate?d:"",numberLimit:e==null?void 0:e.numberLimit,dataUnit:e==null?void 0:e.dataUnit})}},rate:{default:{component:ge,getProps:()=>({cheartInfo:g,color:e==null?void 0:e.color,dateType:"Month",fromDate:d,toDate:r})},day:{component:ve,getProps:()=>{var t,n;return{data:((t=R[0])==null?void 0:t.data_list)||[],timestamp:((n=R[0])==null?void 0:n.timestamps)||[],color:e==null?void 0:e.color,type:e==null?void 0:e.dataType}}}},scatter:{default:{component:_e,getProps:()=>({data:ie(R),colors:{gotobed:"#2EC7C9",wakeup:"#5AB1EF",getup:"#FFB980",fallasleep:"#B6A2DE"}})}}},m=()=>{var i,u;const t=e==null?void 0:e.chartType,n=((i=F[t])==null?void 0:i[C])||((u=F[t])==null?void 0:u.default);if(!n)return null;const{component:l,getProps:v}=n;return a.jsx(j.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:a.jsx(l,{...v()})})};return a.jsx(te,{open:T,onCancel:_,footer:null,width:"100%",style:{height:"100vh",padding:0,borderRadius:0,top:0},className:"!rounded-none summaryModal !h-[100vh] overflow-hidden",children:a.jsxs("div",{className:"p-4 h-[100vh]",children:[a.jsxs("div",{className:"flex flex-col justify-center items-center mb-4 gap-2",children:[a.jsx("h2",{className:"text-2xl font-bold text-primary",children:e==null?void 0:e.title}),a.jsx("div",{id:"DatePickers",className:"flex gap-4 items-center justify-center mt-4",children:y()})]}),z.length>0&&a.jsx("div",{id:"chartTotal",className:"flex w-full items-center justify-center border-b mt-12",children:z.map((t,n,l)=>a.jsx(Ee,{label:t.name,value:t.value,isFirst:n===0,isLast:n===l.length-1},n))}),a.jsx("div",{className:"report-content max-h-[350px]  w-[90%] mt-16 mx-auto",children:m()}),a.jsx("div",{className:"w-[90%] mx-auto mt-6"})]})})}const Ee=({label:T,value:_,isFirst:E,isLast:e})=>a.jsxs("div",{id:"totalItem",className:`max-w-[160px] w-full border p-1 flex items-center justify-center border-b-0 flex-col ${E&&e?"rounded-tl-xl rounded-tr-xl":E?"rounded-tl-xl":e?"rounded-tr-xl":""}`,children:[a.jsx("h1",{className:"text-2xl font-bold text-primary",children:_}),a.jsx("span",{className:"text-sm font-medium opacity-80 text-primary",children:T})]});function Re({children:T,title:_,color:E,icon:e,dataAnalysis:r,isDataAnalysis:A=!0,isSummaryBtn:d=!0,summaryProps:k,headerClassName:C}){const[N,g]=j.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-white rounded-2xl !w-full h-full ",children:[a.jsxs("div",{id:"header",className:"flex justify-between items-center w-full",children:[a.jsx("h1",{className:`text-[21px] font-bold text-primary ${C}`,children:_}),d&&a.jsx(ne,{onClick:()=>g(!0),icon:a.jsx(le,{}),size:"large",children:"Summary"})]}),T,A&&a.jsxs("div",{id:"footer",className:"flex gap-3 items-center p-2 px-3",children:[a.jsx("div",{id:"icon",style:{color:"white",fontSize:"20px",backgroundColor:E},className:"p-2 rounded-full",children:e}),a.jsx("span",{className:"text-[15px] capitalize",children:r})]})]}),a.jsx(De,{visible:N,onClose:()=>g(!1),summaryProps:{...k,color:E,icon:e}})]})}export{Re as T};