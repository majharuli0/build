const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ApneaIndexStatistic-C0jRf7Ub.js","assets/index-yUIdt1TH.js","assets/index-D4W-JKYT.css","assets/mockData-DnyFJQLN.js","assets/barChart-C2Makwm1.js","assets/index-BYau0tQU.js","assets/helper-DzRZPsxz.js","assets/Template-Dl3K5DK0.js","assets/WeeklyMonthlyPicker-9aLUOns9.js","assets/SwapRightOutlined-Cx56ly23.js","assets/weekOfYear-Duzu8HiS.js","assets/index-BlzC4Sng.js","assets/weekday-Do8F8RSx.js","assets/Template-Dw5gRxQo.css","assets/utiles--wHmcics.js","assets/index-DGQ5pdzr.js","assets/index-D24XFRaO.js","assets/index-Dj2R1OBZ.js","assets/index-DcuyU_LR.js","assets/index-Cxx0iq4l.js","assets/UseCustomContext-4nhXzkBx.js","assets/ApneaIndexDistribution-GopkblRi.js","assets/RespiratoryRate-D3ZaoVS_.js","assets/RateChart-BVYx7HDb.js","assets/HeartRate-o2LblHP1.js","assets/HeartRateAnnomalyStatistic-BdymIZr-.js","assets/HeartRateDistribution-BjG9fqun.js","assets/BreathRateDistribution-CdsqC9wa.js","assets/BioVitalDataAnalysis-BwkQQq7g.js","assets/DataAnalysis-CBDkyE10.js","assets/LargeTextViewerModal--TL09qtb.js","assets/MoonFilled-uM1jj11J.js","assets/HealthEvent-oInWNxjD.js","assets/TimelineBar-DmofXVWy.js","assets/LiveHeartRate-DAxhzxAP.js","assets/LiveRateChart-Brg7TfVD.js","assets/LiveBreathRate-CjWeAbfQ.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,fz as f,aY as g,bB as a}from"./index-yUIdt1TH.js";import{c as _}from"./index-DcuyU_LR.js";import{C as y}from"./UseCustomContext-4nhXzkBx.js";function w(){var n,d;const{sleepData:t}=o.useContext(y);return o.useState([]),e.jsxs("div",{className:"flex justify-between gap-6 w-full",children:[e.jsx(b,{heartRate:(n=t==null?void 0:t.heart_rate_vo)==null?void 0:n.avg}),e.jsx(v,{breathingRate:((d=t==null?void 0:t.breath_rate_vo)==null?void 0:d.avg)||"--"}),e.jsx(N,{eventData:t==null?void 0:t.alarm_events})]})}const b=({heartRate:t})=>{const n=s=>s<50?{zone:"Low",color:"text-red-500",tooltip:"Heart rate is abnormally low (bradycardia). Consult a doctor if persistent.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0}:s>=50&&s<=65?{zone:"Normal",color:"text-text-primary",tooltip:"This heart rate is within the normal range. Keep up the good work!",showDot:!1}:s>65&&s<=85?{zone:"Elevated",color:"text-yellow-500",tooltip:"Heart rate is slightly elevated. Consider monitoring and reducing stress.",dotColor:"bg-yellow-400",dotPing:"bg-yellow-500",showDot:!0}:{zone:"High",color:"text-red-500",tooltip:"Heart rate is high. Consult a doctor if this persists.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0},{zone:d,color:x,tooltip:r,showDot:m,dotColor:i,dotPing:l}=n(t);return e.jsxs("div",{id:"avgHeartRate",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#D76C82]/10 rounded-md",children:e.jsx(f,{className:"text-[#D76C82] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Avg. Heart Rate"}),e.jsx("div",{className:`text-2xl font-bold ${t?x:"text-primary"}`,children:t?d:"--"})]})]}),e.jsx(g,{title:t?r:null,children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[t&&m&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${i} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${l}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${t?x:"text-primary"}`,children:[t||"--"," ",e.jsx("span",{className:"text-[17px]",children:"/bpm"})]})]})})]})},v=({breathingRate:t})=>{const n=s=>s<12?{zone:"Low",color:"text-blue-500",tooltip:"Breathing rate is abnormally low (Bradypnea). Consult a doctor if persistent.",dotColor:"bg-blue-400",dotPing:"bg-blue-500",showDot:!0}:s>=12&&s<=20?{zone:"Normal",color:"text-primary",tooltip:"This breathing rate is within the normal range. Keep up the good work!",showDot:!1}:s>20&&s<=25?{zone:"Elevated",color:"text-yellow-500",tooltip:"Breathing rate is slightly elevated. Consider monitoring for signs of stress or infection.",dotColor:"bg-yellow-400",dotPing:"bg-yellow-500",showDot:!0}:{zone:"High",color:"text-red-500",tooltip:"Breathing rate is high (Tachypnea). Immediate medical attention is advised.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0},{zone:d,color:x,tooltip:r,showDot:m,dotColor:i,dotPing:l}=n(t);return e.jsxs("div",{id:"avgBreathingRate",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#FFA54D]/10 rounded-md",children:e.jsx(f,{className:"text-[#FFA54D] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Avg. Breathing Rate"}),e.jsx("div",{className:`text-2xl font-bold ${t>=0?x:"text-primary"}`,children:t>=0?d:"--"})]})]}),e.jsx(g,{title:t>=0?r:null,children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[t>=0&&m&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${i} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${l}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${t>=0?x:"text-primary"}`,children:[t," ",e.jsx("span",{className:"text-[17px]",children:"/min"})]})]})})]})},h={11:{name:"Hyperpnea",category:"Warning",priority:2},12:{name:"Hypopnea",category:"Warning",priority:2},13:{name:"Apnea",category:"Normal",priority:3},14:{name:"High Heart Rate",category:"Critical",priority:1},15:{name:"Low Heart Rate",category:"Critical",priority:1}},N=({eventData:t=[]})=>{var m;const n=t==null?void 0:t.reduce((i,l)=>(i[l==null?void 0:l.event_type]=(i[l==null?void 0:l.event_type]||0)+1,i),{}),d=(m=Object==null?void 0:Object.values(n||[]))==null?void 0:m.reduce((i,l)=>i+l,0),r=(()=>{if(!h||!n)return console.error("eventTypes or eventCounts are undefined"),"Unknown";let i=0,l=0,s=0;return Object.entries(h).forEach(([j,{priority:u}])=>{const p=n[j]||0;u===1?l+=p:u===2?s+=p:u===3&&(i+=p)}),l>=5?"Critical":i>=16?"Abnormal":s>=25?"Warning":"Normal"})();return e.jsxs("div",{id:"healthEvents",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#772ADF]/10 rounded-md",children:e.jsx(_,{className:"text-[#772ADF] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Health Events"}),e.jsx("div",{className:`text-2xl font-bold ${r==="Critical"?"text-red-500":r==="Warning"?"text-yellow-500":"text-primary"}`,children:(t==null?void 0:t.length)>0?r:"--"})," "]})]}),e.jsx(g,{title:Object.entries(h).map(([i,l])=>{const s=n[i]||0;return`${l.name}: ${s}x`}).join(" | "),children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[(t==null?void 0:t.length)!==0&&r!=="Normal"&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${r==="Warning"?"bg-yellow-500":r==="Critical"?"bg-red-500":""} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${r==="Warning"?"bg-yellow-500":r==="Critical"?"bg-red-500":""}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${r==="Critical"?"text-red-500":r==="Warning"?"text-yellow-500":"text-primary"}`,children:[(t==null?void 0:t.length)>0?d:"--",(t==null?void 0:t.length)>0?"x":""]})," "]})})]})},C=o.lazy(()=>a(()=>import("./ApneaIndexStatistic-C0jRf7Ub.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),E=o.lazy(()=>a(()=>import("./ApneaIndexDistribution-GopkblRi.js"),__vite__mapDeps([21,1,2,20,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),z=o.lazy(()=>a(()=>import("./RespiratoryRate-D3ZaoVS_.js"),__vite__mapDeps([22,1,2,23,5,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20]))),A=o.lazy(()=>a(()=>import("./HeartRate-o2LblHP1.js"),__vite__mapDeps([24,1,2,23,5,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20]))),H=o.lazy(()=>a(()=>import("./HeartRateAnnomalyStatistic-BdymIZr-.js"),__vite__mapDeps([25,1,2,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20,3,4,5]))),P=o.lazy(()=>a(()=>import("./HeartRateDistribution-BjG9fqun.js"),__vite__mapDeps([26,1,2,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20,3,4,5]))),R=o.lazy(()=>a(()=>import("./BreathRateDistribution-CdsqC9wa.js"),__vite__mapDeps([27,1,2,7,8,9,10,11,12,6,13,4,5,14,15,16,17,18,19,20,3])));o.lazy(()=>a(()=>import("./BioVitalDataAnalysis-BwkQQq7g.js"),__vite__mapDeps([28,1,2,29,30,31,17])));o.lazy(()=>a(()=>import("./HealthEvent-oInWNxjD.js"),__vite__mapDeps([32,1,2,33,5])));const T=o.lazy(()=>a(()=>import("./LiveHeartRate-DAxhzxAP.js"),__vite__mapDeps([34,1,2,35,5,20,6]))),L=o.lazy(()=>a(()=>import("./LiveBreathRate-CjWeAbfQ.js"),__vite__mapDeps([36,1,2,35,5,20,6])));function c({children:t,height:n="480px",width:d="100%"}){return e.jsx("div",{className:`w-[${d}] h-[${n}]`,children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:t})})}function B(){return e.jsxs("div",{className:"flex flex-col gap-6 mt-6 w-full",children:[e.jsx(w,{}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{height:"auto",children:e.jsx(T,{})}),e.jsx(c,{height:"auto",children:e.jsx(L,{})})]}),e.jsx(c,{children:e.jsx(z,{})}),e.jsx(c,{children:e.jsx(A,{})}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(C,{})}),e.jsx(c,{children:e.jsx(E,{})})]}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(H,{})}),e.jsx(c,{children:e.jsx(P,{})})]}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(R,{})}),e.jsx(c,{})]})]})}export{B as default};