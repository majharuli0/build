import{r,d as g,j as e,B as O,eO as F,eP as x}from"./index-CPi8G-lc.js";import{h as d,E as H}from"./html2canvas.esm-B2HDjXwa.js";import"./FileSaver.min-C-u5LsHi.js";import N from"./DurationStatistic-BJEs3s3M.js";import L from"./DurationDistribution-CBW7HECg.js";import I from"./EfficiencyStatistic-BmwJzDUB.js";import U from"./DeepSleepPercentageDistribution-QoWaqc6g.js";import V from"./DeepSleepPercentageStatistic-BgH0txEO.js";import G from"./EfficiencyDistribution-CH_qPEhU.js";import $ from"./ApneaIndexStatistic-C4rvzf0C.js";import z from"./NumberOfBedExitStatistic-CCzhK5z9.js";import Y from"./DistributionOfBedExitTimes-C4Ks0DaZ.js";import M from"./TimeToFallAsleepStatistic-Br5V020p.js";import K from"./DistributionOfTimeToFallAsleep-Di0BHDEv.js";import _ from"./DistributionOfDailyRoutine-CzuCkErk.js";import q from"./RespiratoryRate-Djm0nM7V.js";import J from"./HeartRate-DD4M4_Mn.js";import Q from"./HeartRateAnnomalyStatistic-BzHTNLoP.js";import X from"./HeartRateDistribution-C1RuouVS.js";import Z from"./BreathRateDistribution-B3iqlsog.js";import{C as b}from"./UseCustomContext-CnsOb8Ii.js";import{C as S}from"./index-B5B1Fdqu.js";import{C as y}from"./Collapse-CdfpSDw8.js";import{D as ee}from"./index-Ci9ot4ae.js";import"./ElderlyProfile-BWdCLkdX.js";import"./elderly-biEcHDM7.js";import"./HomeOutlined-CX2jPnON.js";import"./PullRequestOutlined-CV_MZFZo.js";import"./mockData-Bpurtgqo.js";import"./barChart-QAVpUF88.js";import"./index-D8XprEYS.js";import"./helper-DzRZPsxz.js";import"./Template-KySXtW_l.js";import"./WeeklyMonthlyPicker-BY6G6ys7.js";import"./SwapRightOutlined-RWuKF7gJ.js";import"./weekOfYear-BIW9_wzg.js";import"./utiles-D8Rp3mso.js";import"./index-d1jc08FB.js";import"./index-Cs29MILQ.js";import"./index-Cx5QaP1Z.js";import"./index-B7WD3ICK.js";import"./index-nr-nHRoT.js";import"./scatterChart-7YErksdo.js";import"./RateChart-DQGtC-6R.js";import"./mockData-DnyFJQLN.js";import"./Cascader-DKFLVC72.js";import"./index-DnUHnvcN.js";import"./weekday-DDj7-htS.js";const{RangePicker:te}=ee,{Panel:ie}=y,{SHOW_CHILD:ae}=S;function et(){const[oe,D]=r.useState([]),[f,v]=r.useState(g().subtract(1,"day")),[h,j]=r.useState(g().subtract(31,"day")),[p,R]=r.useState([]),o=r.useRef(null),B=r.useContext(b),[C,l]=r.useState(!1),w=t=>{D(t),j(t[0]),v(t[1]),console.log(f,h)},k=async()=>{if(o.current){l(!0);try{const t=await d(o.current),i=document.createElement("a");i.href=t.toDataURL("image/png"),i.download="reports.png",i.click()}catch(t){console.error("Error exporting as image:",t)}finally{l(!1)}}},A=async()=>{if(o.current){l(!0);try{const t=await d(o.current,{scale:2,useCORS:!0}),i=t.toDataURL("image/png"),a=`
          <svg xmlns="http://www.w3.org/2000/svg" width="${t.width}" height="${t.height}">
            <image href="${i}" width="${t.width}" height="${t.height}" />
          </svg>
        `,c=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(c),s=document.createElement("a");s.href=n,s.download="reports.svg",s.click(),URL.revokeObjectURL(n)}catch(t){console.error("Error exporting as SVG:",t)}finally{l(!1)}}},P=async()=>{if(o.current){l(!0);try{const t=await d(o.current,{scale:2,useCORS:!0}),i=t.toDataURL("image/png"),a=new H("p","mm","a4"),c=a.internal.pageSize.getWidth(),n=a.internal.pageSize.getHeight(),s=c,u=t.height*s/t.width;let m=0;for(;m<u;)a.addImage(i,"PNG",0,m?-m:0,s,u),m+=n,m<u&&a.addPage();a.save("reports.pdf")}catch(t){console.error("Error exporting as PDF:",t)}finally{l(!1)}}},E=[{value:"sleep",label:"Sleep",children:[{label:"Sleep Duration Statistic",value:"sleepDurationStatistic"},{label:"Sleep Duration Distribution",value:"sleepDurationDistribution"},{label:"Efficiency Statistic",value:"efficiencyStatistic"},{label:"Deep Sleep Percentage Distribution",value:"deepSleepPercentageDistribution"},{label:"Deep Sleep Percentage Statistic",value:"deepSleepPercentageStatistic"},{label:"Efficiency Distribution",value:"efficiencyDistribution"},{label:"Apnea Index Statistic",value:"apneaIndexStatistic"},{label:"Apnea Index Distribution",value:"apneaIndexDistribution"},{label:"Distribution of bed exit times",value:"distributionOfBedExitTimes"},{label:"Number of Bed Exit Statistic",value:"numberOfBedExitStatistic"},{label:"Distribution of time to fall asleep",value:"distributionOfTimeToFallAsleep"},{label:"Time to Fall Asleep Statistic",value:"timeToFallAsleepStatistic"},{label:"Distribution of daily routine",value:"distributionOfDailyRoutine"}]},{value:"health",label:"Health",children:[{label:"Breath Rate",value:"respiratoryRate"},{label:"Heart Rate",value:"heartRate"},{label:"Heart Rate Anomaly Statistic",value:"heartRateAnnomalyStatistic"},{label:"Heart Rate Distribution",value:"heartRateDistribution"},{label:"Breath Rate Distribution",value:"breathRateDistribution"}]}],W=t=>{const i=t.map(a=>a[a.length-1]);console.log("Flattened selected values:",i),R(i)},T=t=>{if(p.length===0)return!0;const i=p.includes(t);return console.log(`Checking if ${t} is selected:`,i),i};return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"reports",className:"flex flex-col gap-4 mt-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Reports"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs(O,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[e.jsx(te,{showTime:!1,style:{width:"200px",borderRadius:"10px"},size:"large",placeholder:["Pick Data Range (Start)","End"],format:"YYYY-MM-DD",onChange:(t,i)=>{w(i)}}),e.jsx(S,{style:{width:"300px"},options:E,placeholder:"Select Specific Analysis",multiple:!0,maxTagCount:"responsive",size:"large",showCheckedStrategy:ae,onChange:W,defaultValue:p})]}),e.jsxs(F.Button,{size:"large",style:{backgroundColor:"#fff",width:"fit-content",borderRadius:"10px"},loading:C,menu:{items:[{label:"Export as SVG",key:"1"},{label:"Export as PDF",key:"2"}],onClick:t=>{t.key==="1"?A():t.key==="2"&&P()},icon:e.jsx(x,{})},onClick:k,children:[e.jsx(x,{}),"Export Reports"]})]})]}),e.jsx(b.Provider,{value:{...B,chartFromDate:h,chartToDate:f},children:e.jsx("div",{id:"reports",ref:o,children:e.jsx(y,{defaultActiveKey:["0"],expandIconPosition:"right",children:se.map((t,i)=>e.jsx(ie,{style:{backgroundColor:"transparent"},header:e.jsxs("div",{className:"flex items-center justify-between",style:{border:"none",padding:0},children:[e.jsx("span",{children:t.groupName||"Unnamed Group"}),e.jsx("div",{className:"flex-grow mx-2",style:{borderBottom:"none"}})]}),children:e.jsx("div",{className:"gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2",children:t.components.map(({id:a,component:c,fullWidth:n},s)=>T(a)&&e.jsx("div",{className:n?"col-span-2":"",children:c},s))})},i))})})})]})})}const se=[{groupName:"Sleep",components:[{id:"sleepDurationStatistic",component:e.jsx(N,{isSummaryBtn:!1}),fullWidth:!1},{id:"sleepDurationDistribution",component:e.jsx(L,{isSummaryBtn:!1}),fullWidth:!1},{id:"efficiencyStatistic",component:e.jsx(I,{isSummaryBtn:!1}),fullWidth:!1},{id:"deepSleepPercentageDistribution",component:e.jsx(U,{isSummaryBtn:!1}),fullWidth:!1},{id:"deepSleepPercentageStatistic",component:e.jsx(V,{isSummaryBtn:!1}),fullWidth:!1},{id:"efficiencyDistribution",component:e.jsx(G,{isSummaryBtn:!1}),fullWidth:!1},{id:"apneaIndexStatistic",component:e.jsx($,{isSummaryBtn:!1}),fullWidth:!1},{id:"numberOfBedExitStatistic",component:e.jsx(z,{isSummaryBtn:!1}),fullWidth:!1},{id:"distributionOfBedExitTimes",component:e.jsx(Y,{isSummaryBtn:!1}),fullWidth:!0},{id:"timeToFallAsleepStatistic",component:e.jsx(M,{isSummaryBtn:!1}),fullWidth:!1},{id:"distributionOfTimeToFallAsleep",component:e.jsx(K,{isSummaryBtn:!1}),fullWidth:!1},{id:"distributionOfDailyRoutine",component:e.jsx(_,{isSummaryBtn:!1}),fullWidth:!0}]},{groupName:"Health",components:[{id:"respiratoryRate",component:e.jsx(q,{isSummaryBtn:!1}),fullWidth:!0},{id:"heartRate",component:e.jsx(J,{isSummaryBtn:!1}),fullWidth:!0},{id:"heartRateAnnomalyStatistic",component:e.jsx(Q,{isSummaryBtn:!1}),fullWidth:!1},{id:"heartRateDistribution",component:e.jsx(X,{isSummaryBtn:!1}),fullWidth:!1},{id:"breathRateDistribution",component:e.jsx(Z,{isSummaryBtn:!1}),fullWidth:!1}]}];export{et as default};