const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ApneaIndexStatistic-BQc82bCz.js","assets/index-D0xmOMtE.js","assets/index-D4W-JKYT.css","assets/mockData-DnyFJQLN.js","assets/barChart-efLVugwD.js","assets/index-BxOk_HLZ.js","assets/helper-DzRZPsxz.js","assets/Template-Cnkd6J26.js","assets/WeeklyMonthlyPicker-D7Iww9wY.js","assets/SwapRightOutlined-DMXrNSIw.js","assets/weekOfYear-BkhFIwP_.js","assets/index-DG0K53Xh.js","assets/weekday-yIKgASdp.js","assets/Template-Dw5gRxQo.css","assets/utiles-Cy_L3y0-.js","assets/index-Brbkjnc6.js","assets/index-D3aJ0k2l.js","assets/index-CcFotKs9.js","assets/index-BFkuxmCm.js","assets/index-DKfU8aQ_.js","assets/UseCustomContext-9rTaSiHK.js","assets/ApneaIndexDistribution-BmgzTq49.js","assets/RespiratoryRate-CqXYax_j.js","assets/RateChart-Fv-bfRfG.js","assets/HeartRate-Cp7f_1Zl.js","assets/HeartRateAnnomalyStatistic-CeqG-3ih.js","assets/HeartRateDistribution-iTWTd5hN.js","assets/BreathRateDistribution-2r7FH2gy.js","assets/BioVitalDataAnalysis-BUgBfihV.js","assets/DataAnalysis-DGkysWJW.js","assets/LargeTextViewerModal-DQFAE8dO.js","assets/MoonFilled-B04wqYM-.js","assets/HealthEvent-CJOjIULP.js","assets/TimelineBar-C3eQtnh-.js","assets/LiveHeartRate-QT2fZ0j4.js","assets/LiveRateChart-BS0HNnHG.js","assets/LiveBreathRate-MSAu69Wk.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,fz as f,aY as g,bB as a}from"./index-D0xmOMtE.js";import{c as _}from"./index-BFkuxmCm.js";import{C as y}from"./UseCustomContext-9rTaSiHK.js";function w(){var n,d;const{sleepData:t}=o.useContext(y);return o.useState([]),e.jsxs("div",{className:"flex justify-between gap-6 w-full",children:[e.jsx(b,{heartRate:(n=t==null?void 0:t.heart_rate_vo)==null?void 0:n.avg}),e.jsx(v,{breathingRate:((d=t==null?void 0:t.breath_rate_vo)==null?void 0:d.avg)||"--"}),e.jsx(N,{eventData:t==null?void 0:t.alarm_events})]})}const b=({heartRate:t})=>{const n=s=>s<50?{zone:"Low",color:"text-red-500",tooltip:"Heart rate is abnormally low (bradycardia). Consult a doctor if persistent.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0}:s>=50&&s<=65?{zone:"Normal",color:"text-text-primary",tooltip:"This heart rate is within the normal range. Keep up the good work!",showDot:!1}:s>65&&s<=85?{zone:"Elevated",color:"text-yellow-500",tooltip:"Heart rate is slightly elevated. Consider monitoring and reducing stress.",dotColor:"bg-yellow-400",dotPing:"bg-yellow-500",showDot:!0}:{zone:"High",color:"text-red-500",tooltip:"Heart rate is high. Consult a doctor if this persists.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0},{zone:d,color:x,tooltip:r,showDot:m,dotColor:i,dotPing:l}=n(t);return e.jsxs("div",{id:"avgHeartRate",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#D76C82]/10 rounded-md",children:e.jsx(f,{className:"text-[#D76C82] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Avg. Heart Rate"}),e.jsx("div",{className:`text-2xl font-bold ${t?x:"text-primary"}`,children:t?d:"--"})]})]}),e.jsx(g,{title:t?r:null,children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[t&&m&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${i} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${l}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${t?x:"text-primary"}`,children:[t||"--"," ",e.jsx("span",{className:"text-[17px]",children:"/bpm"})]})]})})]})},v=({breathingRate:t})=>{const n=s=>s<12?{zone:"Low",color:"text-blue-500",tooltip:"Breathing rate is abnormally low (Bradypnea). Consult a doctor if persistent.",dotColor:"bg-blue-400",dotPing:"bg-blue-500",showDot:!0}:s>=12&&s<=20?{zone:"Normal",color:"text-primary",tooltip:"This breathing rate is within the normal range. Keep up the good work!",showDot:!1}:s>20&&s<=25?{zone:"Elevated",color:"text-yellow-500",tooltip:"Breathing rate is slightly elevated. Consider monitoring for signs of stress or infection.",dotColor:"bg-yellow-400",dotPing:"bg-yellow-500",showDot:!0}:{zone:"High",color:"text-red-500",tooltip:"Breathing rate is high (Tachypnea). Immediate medical attention is advised.",dotColor:"bg-red-400",dotPing:"bg-red-500",showDot:!0},{zone:d,color:x,tooltip:r,showDot:m,dotColor:i,dotPing:l}=n(t);return e.jsxs("div",{id:"avgBreathingRate",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#FFA54D]/10 rounded-md",children:e.jsx(f,{className:"text-[#FFA54D] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Avg. Breathing Rate"}),e.jsx("div",{className:`text-2xl font-bold ${t>=0?x:"text-primary"}`,children:t>=0?d:"--"})]})]}),e.jsx(g,{title:t>=0?r:null,children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[t>=0&&m&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${i} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${l}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${t>=0?x:"text-primary"}`,children:[t," ",e.jsx("span",{className:"text-[17px]",children:"/min"})]})]})})]})},h={11:{name:"Hyperpnea",category:"Warning",priority:2},12:{name:"Hypopnea",category:"Warning",priority:2},13:{name:"Apnea",category:"Normal",priority:3},14:{name:"High Heart Rate",category:"Critical",priority:1},15:{name:"Low Heart Rate",category:"Critical",priority:1}},N=({eventData:t=[]})=>{var m;const n=t==null?void 0:t.reduce((i,l)=>(i[l==null?void 0:l.event_type]=(i[l==null?void 0:l.event_type]||0)+1,i),{}),d=(m=Object==null?void 0:Object.values(n||[]))==null?void 0:m.reduce((i,l)=>i+l,0),r=(()=>{if(!h||!n)return console.error("eventTypes or eventCounts are undefined"),"Unknown";let i=0,l=0,s=0;return Object.entries(h).forEach(([j,{priority:u}])=>{const p=n[j]||0;u===1?l+=p:u===2?s+=p:u===3&&(i+=p)}),l>=5?"Critical":i>=16?"Abnormal":s>=25?"Warning":"Normal"})();return e.jsxs("div",{id:"healthEvents",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-6 w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#772ADF]/10 rounded-md",children:e.jsx(_,{className:"text-[#772ADF] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-bold text-primary/80",children:"Health Events"}),e.jsx("div",{className:`text-2xl font-bold ${r==="Critical"?"text-red-500":r==="Warning"?"text-yellow-500":"text-primary"}`,children:(t==null?void 0:t.length)>0?r:"--"})," "]})]}),e.jsx(g,{title:Object.entries(h).map(([i,l])=>{const s=n[i]||0;return`${l.name}: ${s}x`}).join(" | "),children:e.jsxs("div",{className:"flex gap-2 items-center relative cursor-pointer",children:[(t==null?void 0:t.length)!==0&&r!=="Normal"&&e.jsxs("span",{className:"relative flex h-4 w-4",children:[e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${r==="Warning"?"bg-yellow-500":r==="Critical"?"bg-red-500":""} opacity-75`}),e.jsx("span",{className:`relative inline-flex rounded-full h-4 w-4 ${r==="Warning"?"bg-yellow-500":r==="Critical"?"bg-red-500":""}`})]}),e.jsxs("div",{className:`text-4xl font-bold ${r==="Critical"?"text-red-500":r==="Warning"?"text-yellow-500":"text-primary"}`,children:[(t==null?void 0:t.length)>0?d:"--",(t==null?void 0:t.length)>0?"x":""]})," "]})})]})},C=o.lazy(()=>a(()=>import("./ApneaIndexStatistic-BQc82bCz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),E=o.lazy(()=>a(()=>import("./ApneaIndexDistribution-BmgzTq49.js"),__vite__mapDeps([21,1,2,20,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),z=o.lazy(()=>a(()=>import("./RespiratoryRate-CqXYax_j.js"),__vite__mapDeps([22,1,2,23,5,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20]))),A=o.lazy(()=>a(()=>import("./HeartRate-Cp7f_1Zl.js"),__vite__mapDeps([24,1,2,23,5,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20]))),H=o.lazy(()=>a(()=>import("./HeartRateAnnomalyStatistic-CeqG-3ih.js"),__vite__mapDeps([25,1,2,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20,3,4,5]))),P=o.lazy(()=>a(()=>import("./HeartRateDistribution-iTWTd5hN.js"),__vite__mapDeps([26,1,2,7,8,9,10,11,12,6,13,14,15,16,17,18,19,20,3,4,5]))),R=o.lazy(()=>a(()=>import("./BreathRateDistribution-2r7FH2gy.js"),__vite__mapDeps([27,1,2,7,8,9,10,11,12,6,13,4,5,14,15,16,17,18,19,20,3])));o.lazy(()=>a(()=>import("./BioVitalDataAnalysis-BUgBfihV.js"),__vite__mapDeps([28,1,2,29,30,31,17])));o.lazy(()=>a(()=>import("./HealthEvent-CJOjIULP.js"),__vite__mapDeps([32,1,2,33,5])));const T=o.lazy(()=>a(()=>import("./LiveHeartRate-QT2fZ0j4.js"),__vite__mapDeps([34,1,2,35,5,20,6]))),L=o.lazy(()=>a(()=>import("./LiveBreathRate-MSAu69Wk.js"),__vite__mapDeps([36,1,2,35,5,20,6])));function c({children:t,height:n="480px",width:d="100%"}){return e.jsx("div",{className:`w-[${d}] h-[${n}]`,children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:t})})}function B(){return e.jsxs("div",{className:"flex flex-col gap-6 mt-6 w-full",children:[e.jsx(w,{}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{height:"auto",children:e.jsx(T,{})}),e.jsx(c,{height:"auto",children:e.jsx(L,{})})]}),e.jsx(c,{children:e.jsx(z,{})}),e.jsx(c,{children:e.jsx(A,{})}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(C,{})}),e.jsx(c,{children:e.jsx(E,{})})]}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(H,{})}),e.jsx(c,{children:e.jsx(P,{})})]}),e.jsxs("div",{className:"flex gap-6 w-full",children:[e.jsx(c,{children:e.jsx(R,{})}),e.jsx(c,{})]})]})}export{B as default};