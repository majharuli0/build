const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DailyRoutineDistribution-BkvF8bMI.js","assets/index-UQ13cnrG.js","assets/index-DAS_o6EV.css","assets/ElderlyProfile-BuowLKj8.js","assets/elderly-DUD3fbLF.js","assets/UseCustomContext-YZiP-Acn.js","assets/HomeOutlined-cuOta3Lv.js","assets/PullRequestOutlined-BSUyEauj.js","assets/index-0QdKJWxP.js","assets/PlusOutlined-Bl0h4CJz.js","assets/ElderlyProfile-gQkhuvxC.css","assets/Template-DiCaZTO0.js","assets/WeeklyMonthlyPicker-CyIvqs-5.js","assets/SwapRightOutlined-6Ft0KZML.js","assets/weekOfYear-CN2T6EFp.js","assets/index-qQRupt2q.js","assets/weekday-DQQ4aUoV.js","assets/helper-DA8PoIl3.js","assets/Template-Dw5gRxQo.css","assets/utiles-C6G3NZFr.js","assets/index-D41kzS3d.js","assets/index-C0KNKpxp.js","assets/index-B8fdfobz.js","assets/index-DcfBKLYE.js","assets/index-Bvq9nbky.js","assets/BodyMovementIndexStatistic-DdM9ux30.js","assets/mockData-DnyFJQLN.js","assets/barChart-BJ9Zu8cL.js","assets/index-CEvMgjFi.js","assets/WalkStepsStatistic-CFqpQHC2.js","assets/DurationSpentInRoom-CE1FQE21.js","assets/multibarChart-C-qRyt8Y.js","assets/NumberOfRoomEntriesAndExit-ItV7tF1-.js","assets/WalkSpeedStatistic-BAEgm_zZ.js","assets/BodyMovementIndexDistribution-DuAUMO3B.js"])))=>i.map(i=>d[i]);
import{r as l,l as p,j as e,fu as h,fv as g,d as j,fw as b,bz as n}from"./index-UQ13cnrG.js";import{C as m}from"./UseCustomContext-YZiP-Acn.js";import{c as v,d as N,F as _}from"./index-B8fdfobz.js";import{b as y,G as w}from"./index-Bvq9nbky.js";import{l as A}from"./ElderlyProfile-BuowLKj8.js";import{W as S,G as E}from"./get-up-C5mLunBb.js";import{c}from"./helper-DA8PoIl3.js";import{m as x}from"./proxy-B8yPLYcc.js";import{S as I}from"./slick-theme-C_hUAKm5.js";import"./elderly-DUD3fbLF.js";import"./HomeOutlined-cuOta3Lv.js";import"./PullRequestOutlined-BSUyEauj.js";import"./index-0QdKJWxP.js";import"./PlusOutlined-Bl0h4CJz.js";import"./index-BnQH4tXZ.js";function k(){const[i,a]=l.useState([]);p.get("elderly_details");const{elderlyDetails:s}=l.useContext(m);function o(){A({uids:s==null?void 0:s.deviceId,to_date:j().subtract(1,"day").format("YYYY-MM-DD")}).then(r=>{a(r.data[0]),console.log(r)}).catch(r=>{console.log(r)})}return l.useEffect(()=>{o()},[]),e.jsxs("div",{className:"flex justify-between gap-4 w-full",children:[e.jsx("div",{id:"indoorDuration",className:"flex justify-between gap-1 items-center bg-white rounded-2xl p-4 w-full",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#26C0C0] rounded-md",children:e.jsx(h,{className:"text-[#fff] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-semibold text-primary/80",children:"Indoor Duration"}),e.jsx("div",{className:"text-2xl font-bold text-primary",children:i!=null&&i.indoor?i==null?void 0:i.indoor:"--"})]})]})}),e.jsx("div",{id:"walking",className:"flex justify-between  gap-1 items-center bg-white rounded-2xl p-4 w-full",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#7F87FC] rounded-md",children:e.jsx(v,{className:"text-[#fff] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-semibold text-primary/80",children:"Walking"}),e.jsxs("div",{className:"text-2xl font-bold text-primary",children:[i!=null&&i.walking_stpes?i==null?void 0:i.walking_stpes:"--"," ","steps"]})]})]})}),e.jsx("div",{id:"stillTime",className:"flex justify-between  gap-1 items-center bg-white rounded-2xl p-4 w-full",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#F1B812] rounded-md",children:e.jsx(g,{className:"text-[#fff] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-semibold text-primary/80",children:"Still Time"}),e.jsx("div",{className:"text-2xl font-bold text-primary",children:i!=null&&i.still_time?i==null?void 0:i.still_time:"--"})]})]})}),e.jsx("div",{id:"speed",className:"flex justify-between  gap-1 items-center bg-white rounded-2xl p-4 w-full",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#a02adf] rounded-md",children:e.jsx(N,{className:"text-[#fff] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-semibold text-primary/80",children:"Speed"}),e.jsxs("div",{className:"text-2xl font-bold text-primary",children:[i!=null&&i.walking_speed?i==null?void 0:i.walking_speed:"--","m/min"]})]})]})}),e.jsx("div",{id:"roomEntryExit",className:"flex justify-between  gap-1 items-center bg-white rounded-2xl p-4 w-full",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{id:"icon",className:"p-3 bg-[#82cb24] rounded-md",children:e.jsx(y,{className:"text-[#fff] text-[24px]"})}),e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("div",{className:"text-base font-semibold text-primary/80",children:"Room Entry/Exit"}),e.jsxs("div",{className:"text-2xl font-bold text-primary",children:[i!=null&&i.entry_exits?i==null?void 0:i.entry_exits:"--","x"]})]})]})})]})}const T=i=>e.jsx("img",{src:S,alt:"wake-up",width:i,height:i}),C=i=>e.jsx("img",{src:E,alt:"get-up",width:i,height:i});function F(){const{sleepData:i}=l.useContext(m),a=[{label:"Go To Bed",color:"#35CECE",value:c(i==null?void 0:i.get_bed_idx),icon:e.jsx(_,{size:20,color:"#35CECE"}),initial:{x:-50,y:-50},delay:.2},{label:"Fall Asleep",color:"#FF6734",value:c(i==null?void 0:i.sleep_st_idx),icon:e.jsx(w,{size:20,color:"#FF6734"}),initial:{x:50,y:-50},delay:.2},{label:"Wake Up",color:"#8088FD",value:"After "+c(i==null?void 0:i.sleep_ed_idx),icon:T(20),initial:{x:-50,y:50},delay:.2},{label:"Get Up",color:"#ecb81c",value:"After "+c(i==null?void 0:i.leave_bed_idx),icon:C(20),initial:{x:50,y:50},delay:.2}];return e.jsxs("div",{className:"bg-white rounded-2xl p-6 h-full flex flex-col gap-4",children:[e.jsx("h1",{className:"text-[21px] font-bold text-primary",children:"Average Routine Time"}),e.jsxs("div",{className:"relative w-full grid grid-cols-2 grid-rows-2 gap-4 h-full",children:[e.jsx(x.div,{className:"absolute h-0.5 w-full top-1/2 left-0",style:{background:"linear-gradient(to right, #ffffff, #D1D1D1, #ffffff)"},initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.9}}),e.jsx(x.div,{className:"absolute w-0.5 h-full left-1/2 top-0",style:{background:"linear-gradient(to bottom, #ffffff, #D1D1D1, #ffffff)"},initial:{scaleY:0},animate:{scaleY:1},transition:{duration:.9}}),a.map((s,o)=>e.jsxs(x.div,{className:"flex flex-col items-center justify-center h-full gap-2",initial:{opacity:0,...s.initial},animate:{opacity:1,x:0,y:0},transition:{duration:.5,delay:s.delay,ease:"linear"},children:[e.jsx("div",{id:"icon",className:"w-10 h-10 flex items-center justify-center rounded-lg",style:{backgroundColor:`${s.color}27`},children:s.icon}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-2xl font-bold text-primary",children:s.value}),e.jsx("div",{className:"text-sm font-medium text-primary",children:s.label})]})]},o))]})]})}function R(){const{sleepData:i}=l.useContext(m),a={dots:Object.keys((i==null?void 0:i.evaluation)||{}).length>=2,infinite:Object.keys((i==null?void 0:i.evaluation)||{}).length>2,speed:500,slidesToShow:1,slidesToScroll:1,draggable:!0,arrows:!1,centerMode:!0,centerPadding:"20px",appendDots:t=>e.jsx("div",{style:{backgroundColor:"transparent",borderRadius:"10px",padding:"2px"},children:e.jsx("ul",{id:"dots",style:{margin:"0px"},children:t})})},s={sleep_deep_ratio_evaluation:"Sleep Deep Ratio",sleep_leave_bed_evaluation:"Sleep Leave Bed",sleep_start_time_evaluation:"Sleep Start Time",sleep_duration_evaluation:"Sleep Duration",unqualified_evaluation:"Unqualified Evaluation",ahi_unqualified_evaluation:"AHI Unqualified",sleep_ahi_evaluation:"Sleep AHI",sleep_analysis_evaluation:"Sleep Analysis"},o={合格:"Qualified",不合格:"Unqualified","您的AHI指数是0.77 （正常）<br/>AHI指数小于5是正常和良好的呼吸":"Your AHI index is 0.77 (Normal). AHI below 5 is considered normal and healthy breathing.","您的睡眠时长5小时44分钟，深睡时长占比26%<br/>你的睡眠时间偏少<br/>建议早睡早起，增加睡眠时间，养成良好作息，好的睡眠让您一整天活力满满！":"Your sleep duration is 5 hours and 44 minutes, with 26% in deep sleep.<br/>You are sleeping less than recommended.<br/>We suggest going to bed early, waking up early, and increasing sleep time for a healthier routine. Good sleep will keep you energized throughout the day."},r=t=>o[t]||"No Analysis Available For It.";return e.jsxs(e.Fragment,{children:[(i==null?void 0:i.evaluation)&&Object.keys(i==null?void 0:i.evaluation).length>0&&e.jsx("div",{id:"dataAnalysisSlider",className:"w-full mb-2 transition-all duration-300",children:e.jsx(I,{...a,className:"w-full transition-all duration-300",children:Object.keys(i==null?void 0:i.evaluation).filter(t=>s[t]).map(t=>{const f=s[t],u=r(i==null?void 0:i.evaluation[t]);return e.jsxs("div",{id:"dataAnalysisItem",className:"rounded-2xl overflow-hidden bg-[#7F87FC] p-4 !flex justify-between items-center min-h-[200px] mx-auto  !w-[99%]",children:[e.jsx("div",{id:"leftSide",className:"z-50",children:e.jsx("div",{id:"dataAnalysisItemHeader",children:e.jsxs("div",{id:"dataAnalysisItemTitleAndDescription",className:"flex flex-col gap-1.5",children:[e.jsxs("span",{className:"text-white/80 text-2xl font-bold leading-none",children:[f," "]}),e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h1",{className:" text-[18px] font-semibold text-white m-0",dangerouslySetInnerHTML:{__html:u}})})]})})}),e.jsxs("div",{id:"rightSide",className:"z-50 flex-col gap-2 items-end hidden md:flex lg:flex",children:[e.jsx("p",{className:"text-white text-[22px] font-semibold leading-none opacity-40",children:"Data Analysis"}),e.jsx(b,{className:"text-white text-[75px] opacity-60"})]}),e.jsx("div",{id:"circleShapeWithLinearWhiteGurdianColor",className:"absolute -bottom-36 -left-10 size-60 opacity-10 rounded-full bg-gradient-to-b from-white to-transparent"}),e.jsx("div",{id:"circleShapeWithLinearWhiteGurdianColor",className:"absolute -top-36 -right-10 size-60 opacity-35 rounded-full bg-gradient-to-b from-white to-transparent"})]},t)})})}),!(i!=null&&i.evaluation)&&e.jsx("div",{className:"flex justify-center items-center w-full !min-h-[280px] bg-primary/10 rounded-2xl",children:e.jsx("p",{className:"text-primary text-[22px] font-semibold leading-none opacity-40",children:"No Data Analysis Available"})})]})}const L=l.lazy(()=>n(()=>import("./DailyRoutineDistribution-BkvF8bMI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]))),O=l.lazy(()=>n(()=>import("./BodyMovementIndexStatistic-DdM9ux30.js"),__vite__mapDeps([25,1,2,26,27,28,17,11,12,13,14,15,16,18,19,20,21,22,23,24,3,4,5,6,7,8,9,10]))),W=l.lazy(()=>n(()=>import("./WalkStepsStatistic-CFqpQHC2.js"),__vite__mapDeps([29,1,2,26,27,28,17,11,12,13,14,15,16,18,19,20,21,22,23,24,3,4,5,6,7,8,9,10]))),z=l.lazy(()=>n(()=>import("./DurationSpentInRoom-CE1FQE21.js"),__vite__mapDeps([30,1,2,26,11,12,13,14,15,16,17,18,19,20,21,22,23,24,3,4,5,6,7,8,9,10,31,28]))),P=l.lazy(()=>n(()=>import("./NumberOfRoomEntriesAndExit-ItV7tF1-.js"),__vite__mapDeps([32,1,2,26,27,28,17,11,12,13,14,15,16,18,19,20,21,22,23,24,3,4,5,6,7,8,9,10]))),M=l.lazy(()=>n(()=>import("./WalkSpeedStatistic-BAEgm_zZ.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,26,27,28,17,11,12,13,14,15,16,18,19,20,21,22,23,24]))),G=l.lazy(()=>n(()=>import("./BodyMovementIndexDistribution-DuAUMO3B.js"),__vite__mapDeps([34,1,2,26,27,28,17,11,12,13,14,15,16,18,19,20,21,22,23,24,3,4,5,6,7,8,9,10])));function d({height:i=480,children:a,className:s}){return e.jsx("div",{className:`h-[${i}px] ${s} w-full`,children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:a})})}function se(){return e.jsxs("div",{className:"flex flex-col gap-6 mt-6 w-full",children:[e.jsx(k,{}),e.jsxs("div",{className:"flex gap-6 w-full h-[330px]",children:[e.jsx("div",{className:"w-[67%] h-full",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"h-full",children:"Loading..."}),children:e.jsx(L,{})})}),e.jsx("div",{className:"w-[33%] h-full",children:e.jsx(F,{})})]}),e.jsx(R,{}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full",children:[e.jsx(d,{className:"col-span-2",children:e.jsx(z,{})}),e.jsx(d,{children:e.jsx(O,{})}),e.jsx(d,{children:e.jsx(W,{})}),e.jsx(d,{children:e.jsx(P,{})}),e.jsx(d,{children:e.jsx(M,{})}),e.jsx(d,{children:e.jsx(G,{})})]})]})}export{se as default};