import{j as e,r as s,X as Me,Z as He,W as ze,V as Te,Y as Ve,aK as Re,aL as W,a6 as ce,B as w,a0 as v,aM as We,aN as Ge,aO as Ke,l as G,a9 as ie,aP as Ue}from"./index-DKKIrJkr.js";import{E as k}from"./index-p85IepaV.js";import"./line-CS4l8Wmc.js";import{F as re}from"./lines-ZIhfuKc3.js";import"./bar-DYGRkP1B.js";import{b as $e,c as Qe,d as Ye,e as Xe,f as Ze,h as E,i as qe,g as Je}from"./Dashboard-BnuaGM0z.js";import"./FileSaver.min-kL9j1RUD.js";import{I as el}from"./index-DHZ_F7Jt.js";import{B as ll}from"./index-CNMB-R86.js";/* empty css                */import{R as tl}from"./ReportActionModal-D4VWjBVC.js";import{W as sl}from"./WeeklyMonthlyPicker-DmGP_U48.js";import{D as al}from"./index-nnJyr53O.js";import"./SwapRightOutlined-CCH1E9zQ.js";import"./weekOfYear-CVPDmtEy.js";import"./weekday-B__MiVbj.js";function nl({data:t=[]}){const a=t.map(o=>o._id),n=t.map(o=>o.total_orders),r={tooltip:{trigger:"axis"},grid:{left:"0%",right:"0%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:a},yAxis:{type:"value"},series:[{data:n,type:"line",symbol:"circle",symbolSize:10,itemStyle:{color:"#4379EE"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(67, 121, 238, 0.5)"},{offset:1,color:"rgba(255, 255, 255, 0) "}]}},lineStyle:{color:"#4379EE"}}],graphic:n.length===0?{type:"text",left:"center",top:"middle",style:{text:"No Data Available",fontSize:20,fontWeight:"bold",fill:"#999"}}:null};return e.jsx(k,{notMerge:!0,option:r,style:{width:"100%",height:"100%"}})}function de({data:t=[],chartFor:a=""}){const n=t.reduce((f,h)=>f+h.total_orders,0),[r,o]=s.useState({}),u={completed:"Completed",pending:"In Progress",cancelled:"Cancelled",not_started:"Not Started"};s.useEffect(()=>{a==="totalSales"?o({completed:"#4379EE",pending:"#F1963A",cancelled:"#D90000"}):a==="totalInstallations"&&o({completed:"#36b610",pending:"#833af1",not_started:"#5d5d5d"})},[a]);const d={tooltip:{trigger:"item"},grid:{left:"0%",right:"0%",bottom:"0%",top:"0%",containLabel:!0},series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!1}},labelLine:{show:!0},data:t.map(f=>({value:f.total_orders,name:u[f.property_name]||"Unknown Status",itemStyle:{color:r[f.property_name]}}))}],graphic:{elements:[{type:"text",id:"center-total-text",left:"center",top:"53%",style:{text:"Total",textAlign:"center",fill:"#333",fontSize:16}},{type:"text",id:"center-value-text",left:"center",top:"45%",style:{text:n,textAlign:"center",fill:"#333",fontSize:22,fontWeight:"bold"},position:[0,50]}]}};return e.jsx(k,{notMerge:!0,option:d,style:{width:"340px",height:"340px"}})}function I({data:t=[],graphTitle:a}){const n=t.map(u=>u.property_name||"Unknown"),r=t.map(u=>u.total_orders),o={xAxis:{max:"dataMax"},tooltip:{},grid:{left:"0%",right:"0%",bottom:"10%",top:"5%",containLabel:!0},yAxis:{type:"category",data:n,inverse:!0,animationDuration:300,animationDurationUpdate:300},dataZoom:[{type:"inside",yAxisIndex:0,start:0,end:100}],series:[{name:a,type:"bar",data:r,itemStyle:{color:"#4379EE"},label:{show:!0,valueAnimation:!0},barWidth:r.length<5?30:"auto"}],label:{show:!0},legend:{show:!1},graphic:r.length===0?{type:"text",left:"center",top:"middle",style:{text:"No Data Available",fontSize:20,fontWeight:"bold",fill:"#999"}}:null};return e.jsx(k,{notMerge:!0,option:o,style:{width:"100%",height:"100%"}})}function F({data:t=[],chartFor:a}){let n=t.map(d=>d._id);const r=[{name:"Male",type:"bar",color:"#357AF6",data:t.map(d=>d.male_count)},{name:"Female",type:"bar",color:"#5CC8BE",data:t.map(d=>d.female_count)}],[o,u]=s.useState({title:{},tooltip:{},legend:{show:!1},grid:{left:"0%",right:"2%",bottom:"8%",top:"8%",containLabel:!0},xAxis:{},yAxis:{},series:[],graphic:t.length===0?{type:"text",left:"center",top:"middle",style:{text:"No Data Available",fontSize:20,fontWeight:"bold",fill:"#999"}}:null});return s.useEffect(()=>{const d={...o};a==="age"?(d.xAxis={type:"category",data:n},d.yAxis={type:"value",boundaryGap:[0,.01]},d.series=r):a==="diseases"&&(d.yAxis={type:"category",data:n},d.xAxis={type:"value",boundaryGap:[0,.01]},d.series=r),u(d)},[a]),e.jsx(k,{notMerge:!0,option:o,style:{width:"100%",height:"100%"}})}function K({data:t=[],chartFor:a}){const[n,r]=s.useState([]);s.useEffect(()=>{let d=t==null?void 0:t.map(f=>{if(a==="device"){console.log(t);const h={completed:"#08A1F7",pending:"#922BF2",not_started:"#FF3B11"},S=t.map(p=>h[p._id]),c={...o,color:S};u(c);const b={not_started:"Not Started",completed:"Completed",pending:"Pending"};return{value:f.count,name:b[f._id]||f._id}}else return{value:f.male_count+f.female_count,name:f._id==="male"?"Male":f._id==="fe-male"?"Female":null}});r(d)},[t]);const[o,u]=s.useState({title:{},tooltip:{trigger:"item"},legend:{show:!1},labelLine:{show:!1},color:["#4379EE","#5CC8BE","#243642","#BC7C7C"]});return s.useEffect(()=>{const d={...o};a=="gender"?d.series=[{type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]:a=="device"&&(d.series=[{type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]),u(d)},[a,n]),e.jsx(k,{notMerge:!0,option:o,style:{width:"340px",height:"340px"}})}const ol=[{role:"monitoring_station",label:"Monitoring Station",color:"#EA5A92",icon:Me,rolesAllowed:["sales_agent","distributor","office"]},{role:"supports_agent",label:"Support Agent",color:"#17C3A5",icon:He,rolesAllowed:["supports_agent","monitoring_station"]},{role:"nursing_home",label:"Nursing Home",color:"#5096F6",icon:ze,rolesAllowed:["sales_agent","distributor","office"]},{role:"distributor",label:"Distributor",color:"#FA8035",icon:el,rolesAllowed:[]},{role:"sales_agent",label:"Sales Agent",color:"#D188E1",icon:Te,rolesAllowed:["sales_agent","distributor","office"]},{role:"end_user",label:"End User",color:"#7DBBE2",icon:re,rolesAllowed:["sales_agent","distributor","office"]},{role:"installer",label:"Installer",color:"#7695FF",icon:re,rolesAllowed:["monitoring_station","office","sales_agent"]},{role:"elderly",label:"Elderly",color:"#FF885B",icon:Ve,rolesAllowed:["monitoring_station"]},{role:"office",label:"Office",color:"#FF885B",icon:Re,rolesAllowed:[""]},{role:"device",label:"Device",color:"#FF885B",icon:ll,rolesAllowed:["distributor"]}];function il(){const t=[],a=t.reduce((r,o)=>r+o.value,0),n={tooltip:{trigger:"item"},grid:{left:"0%",right:"0%",bottom:"0%",top:"0%",containLabel:!0},color:["#4379EE","#F1963A","#D90000"],series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!1}},labelLine:{show:!0},data:t}],graphic:{elements:[{type:"text",id:"center-total-text",left:"center",top:"53%",style:{text:"Total",textAlign:"center",fill:"#333",fontSize:16}},{type:"text",id:"center-value-text",left:"center",top:"45%",style:{text:a,textAlign:"center",fill:"#333",fontSize:22,fontWeight:"bold"},position:[0,50]}]}};return e.jsx(k,{notMerge:!0,option:n,style:{width:"340px",height:"340px"}})}function rl({count:t}){const[a,n]=s.useState([]),[r,o]=s.useState([]),[u,d]=s.useState([]),f=s.useCallback(()=>{$e().then(c=>{console.log(c),n(c.data)}).catch(c=>{console.log(c)})},[]),h=s.useCallback(()=>{Qe().then(c=>{console.log(c),o(c.data)}).catch(c=>{console.log(c)})},[]),S=s.useCallback(()=>{Ye().then(c=>{console.log(c),d(c.data)}).catch(c=>{console.log(c)})},[]);return s.useEffect(()=>{f(),h(),S()},[]),e.jsxs("div",{className:"w-full flex flex-col gap-6 pt-6",children:[e.jsxs("div",{className:"flex gap-6 lg:flex-row flex-col h-fit",children:[e.jsxs("div",{className:"rounded-2xl lg:w-[75%] w-full flex flex-col gap-6 h-full",children:[e.jsx("div",{id:"Reports",className:"w-full rounded-2xl flex flex-col gap-6",children:e.jsx("div",{id:"Cards",className:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:t==null?void 0:t.map((c,b)=>{let p=c.icon;return e.jsxs("div",{id:"Card",style:{backgroundColor:c==null?void 0:c.color},className:"cursor-pointer group flex w-full items-center p-4 py-6 text-white gap-3 rounded-[12px] relative overflow-hidden",children:[e.jsx("div",{id:"circle",className:"w-[100px] h-[100px] bg-white/20 absolute -right-11 -top-14 rounded-full group-hover:-right-5 group-hover:-top-[75px] transition-all duration-200 ease-in-out"}),e.jsx("div",{id:"circle",className:"w-[100px] h-[100px] bg-white/10 absolute -right-3 -top-[70px] rounded-full group-hover:-right-[50px] group-hover:-top-[45px] transition-all duration-200 ease-in-out"}),e.jsx("div",{className:"bg-opacity-10 h-fit rounded-[8px] p-2 bg-black/20",children:p&&e.jsx(p,{color:"#fff",size:20})}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("h1",{className:"text-[26px] font-semibold leading-none",children:c.count||0}),e.jsx("span",{className:"text-[14px] font-medium text-white/70 leading-none",children:c.label})]})]},b)})})}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px] flex-grow",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Ages"})}),e.jsx(F,{data:r,chartFor:"age"})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px] flex-grow",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Diseases"})}),e.jsx(F,{data:u,chartFor:"diseases"})]})]}),e.jsxs("div",{className:"rounded-2xl lg:w-[35%] w-full flex flex-col gap-6 h-full",children:[e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full flex flex-col h-[496px] justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Gender"})}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(K,{data:a,chartFor:"gender"})})]}),e.jsxs("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:[e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-text-primary rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Total"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#4379EE] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Male"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#5CC8BE] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Female"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]})]})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full flex flex-col h-[496px] justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Alerts"}),e.jsx("div",{id:"chartController",className:"flex gap-4"})]}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(il,{})})]}),e.jsxs("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:[e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#4379EE] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Problem"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#F1963A] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Warning"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#D90000] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Critical"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"0"})]})]})]})]})]}),e.jsxs("div",{className:"w-full flex gap-6 xl:flex-row flex-col h-[500px] justify-between",children:[e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px]",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Most Alerts"})}),e.jsx(I,{})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px]",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Alerts Count"})}),e.jsx(I,{})]})]})]})}function dl({row:t}){const a=s.useContext(ce),[n,r]=s.useState(t==null?void 0:t.installation_status),[o,u]=s.useState(!1),d=f=>{r(f),u(!0),We(t==null?void 0:t._id,{installation_status:f}).then(h=>{console.log(h),a.getInstallationList.getCompletedandToBeInstalled(),a.getInstallationList.getDeviceSalesCounts(),h&&r(f)}).catch(h=>{console.log(h),r(t==null?void 0:t.installation_status)}).finally(()=>{u(!1)})};return s.useEffect(()=>{r(t==null?void 0:t.installation_status)},[t==null?void 0:t.installation_status]),e.jsxs("div",{className:"flex items-center space-x-2 mr-0 ",children:[e.jsx("span",{className:`w-3 h-3 rounded-full relative -right-2 ${n==="completed"?"bg-[#1EB564]":n==="pending"?"bg-yellow-500":"bg-red-500"}`}),e.jsx(w,{theme:{token:{colorText:"#707EAE",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:e.jsx(v,{value:n,variant:"borderless",onChange:d,loading:o,optionSelectedColor:"#8086AC",className:"w-fit !text-red-100",options:[{value:"completed",label:e.jsx("span",{children:"Complete"})},{value:"pending",label:e.jsx("span",{children:"Pending"})},{value:"not_started",label:e.jsx("span",{children:"Not Started"})}]})})]})}const cl=[{title:"Installation Status",render:t=>e.jsx(dl,{row:t})},{title:"Report",render:t=>e.jsx("div",{className:"flex justify-center",children:e.jsx(tl,{report:t})})},{title:"Product Name",render:t=>e.jsx("button",{children:e.jsx("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary flex  gap-2",children:t.products.filter((a,n,r)=>{const o=a.type==="Seenyor Kit"&&r.findIndex(u=>u.type==="Seenyor Kit")===n;return!/^AI Sensor/.test(a.type)&&(a.type!=="Seenyor Kit"||o)}).map((a,n)=>{const r=a.type==="Seenyor Kit"?"blue":a.type==="Installation"?"orange":"default";return e.jsx(W,{color:r,children:a.type==="Seenyor Kit"?"Package":a.type},n)})})})},{title:"Product Price",render:t=>e.jsx("button",{children:e.jsxs("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary",children:["$",t.products.filter(a=>["Seenyor Kit","Installation","AI Monitoring"].includes(a.type)).reduce((a,n)=>a+n.price,0).toFixed(2)]})})},{title:"Addon Name",render:t=>e.jsx("button",{children:e.jsx("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary flex gap-2",children:t.products.filter(a=>!["Seenyor Kit","Installation","AI Monitoring"].includes(a.type)).map((a,n)=>e.jsx(W,{children:a.type},n)).length===0?e.jsx("span",{children:"--"}):t.products.filter(a=>!["Seenyor Kit","Installation","AI Monitoring"].includes(a.type)).map((a,n)=>e.jsx(W,{children:a.type},n))})})},{title:"Addon Price",render:t=>e.jsx("button",{children:e.jsx("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary text-nowrap",children:t.products.map((a,n)=>["Seenyor Kit","Installation","AI Monitoring"].includes(a.type)?null:e.jsxs("span",{children:["$",a.price.toFixed(2)]},n)).filter(Boolean).length===0?e.jsx("span",{children:"--"}):t.products.map((a,n)=>["Seenyor Kit","Installation","AI Monitoring"].includes(a.type)?null:e.jsxs("span",{children:["$",a.price.toFixed(2)]},n))})})},{title:"Total Price",render:t=>e.jsx("button",{children:e.jsxs("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary text-nowrap",children:["$",t.total]})})},{title:"Date of Sales",render:t=>{const a=new Date(t.created_at).toLocaleDateString("en-CA");return e.jsx("button",{children:e.jsx("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary text-nowrap",children:a})})}},{title:"Location",render:t=>{var a,n,r,o,u,d;return e.jsx("button",{children:e.jsxs("span",{className:"text-[14px] xl:text-base font-normal text-text-secondary text-nowrap",children:[(a=t.address)==null?void 0:a.line1,","," ",(n=t.address)!=null&&n.line2?((r=t.address)==null?void 0:r.line2)+", ":"",","," ",(o=t.address)==null?void 0:o.city,", ",(u=t.address)==null?void 0:u.state,","," ",t.address?t.address.postal_code:" ",", ",(d=t.address)==null?void 0:d.country]})})}},{title:"Payment Status",dataIndex:"payment_status",key:"payment_status",filters:[{text:"Completed",value:"completed"},{text:"Pending",value:"pending"},{text:"Cancelled",value:"cancelled"}],filterMultiple:!0,onFilter:(t,a)=>a.payment_status.includes(t),render:t=>{let a="";switch(t){case"completed":a="green";break;case"pending":a="orange";break;case"cancelled":a="red";break;default:a="black"}return e.jsx("span",{style:{backgroundColor:a,color:"white",padding:"4px 8px",borderRadius:"4px",fontWeight:500,textTransform:"capitalize"},children:t})}}];function xl(){const[t,a]=s.useState(!1),[n,r]=s.useState(1),[o,u]=s.useState(0),[d,f]=s.useState([]);s.useState([]);const[h,S]=s.useState([]);function c(j){a(!0),Ke(j).then(y=>{f(y.data),u(y.total)}).catch(y=>{console.log(y)}).finally(()=>{a(!1)})}const b=s.useCallback(()=>{Xe().then(j=>{S(j.data),console.log(j.data)}).catch(j=>{console.log(j)})},[n]),p=s.useCallback(()=>{c({installation_status:"completed",ne:!0,page:n})},[n]);return s.useEffect(()=>{p()},[p]),s.useEffect(()=>{b()},[b]),e.jsx("div",{className:"flex flex-col gap-6 pt-6",children:e.jsxs("div",{className:"w-full flex  gap-6 lg:flex-row flex-col",children:[e.jsxs("div",{id:"NewInstallation",className:"p-[25px] rounded-2xl  bg-white lg:w-[65%] w-full  h-full",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between mb-8",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"To Be Installed"}),e.jsx("div",{id:"chartController",className:"flex gap-4"})]}),e.jsx(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:e.jsx(ce.Provider,{value:{getInstallationList:{getCompletedandToBeInstalled:p,getDeviceSalesCounts:b},total:o,page:n,SetPage:r},children:e.jsx(Ge,{loading:t,scroll:{x:750},columns:cl,tableData:d})})})]}),e.jsxs("div",{className:" p-[25px] rounded-2xl  bg-white lg:w-[35%] w-full",children:[e.jsxs("div",{children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Device Installed"})}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(K,{data:h,chartFor:"device"})})]}),e.jsx("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:["completed","pending","not_started"].map((j,y)=>{const N=h.find(C=>C._id===j)||{_id:j,count:0};return e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:`w-[12px] h-[12px] ${N._id==="completed"?"bg-[#08A1F7]":N._id==="pending"?"bg-[#922BF2]":"bg-[#FF3B11]"} rounded-full`}),e.jsx("span",{className:"text-lg font-medium capitalize",children:N._id==="completed"?"Completed":N._id==="pending"?"Pending":"Not Started"})]}),e.jsx("span",{className:"text-lg font-semibold",children:N.count})]},y)})})]})]})})}const{RangePicker:ul}=al,fl=t=>{console.log("onOk: ",t)},_=t=>{console.log("search:",t)},Fl=()=>{s.useState(!1),s.useState("Overview"),s.useState(""),s.useState(""),s.useState(!1),s.useState([]),s.useState({current:"1",size:"10"});const[t,a]=s.useState({page:1,limit:10}),[n,r]=s.useState(!1),[o,u]=s.useState(G.get("user")),[d,f]=s.useState(G.get("role")),[h,S]=s.useState(G.get("mainRole")),[c,b]=s.useState(null),[p,j]=s.useState(null),[y,N]=s.useState(null),[C,U]=s.useState("all"),[P,xe]=s.useState(null),[O,ue]=s.useState(null),[M,fe]=s.useState(null),[H,$]=s.useState(null),[z,Q]=s.useState(null),[T,Y]=s.useState(null),[V,pl]=s.useState(null),[R,hl]=s.useState(null),[X,pe]=s.useState([]),[B,he]=s.useState([]),[D,me]=s.useState(null),[L,ge]=s.useState([]),[je,be]=s.useState([]),[ye,ve]=s.useState([]),[we,Ne]=s.useState([]),[Z,Se]=s.useState([]),[q,Ce]=s.useState([]),[ml,Ae]=s.useState([]),[m,J]=s.useState({}),[_e,gl]=s.useState({});s.useState([]),s.useState([]),s.useState([]);const[Ie,ke]=s.useState([]);function Be(){Je().then(l=>{const i=ol.map(g=>{var oe;const A=(oe=l.data)==null?void 0:oe.find(Oe=>Oe.role===g.role);return{...g,count:A?A.count:0}}).filter(g=>g.rolesAllowed.includes(o.role));ge(i)}).catch(l=>{console.log(l)})}const ee=s.useCallback((l,x)=>{Ze({office_id:m.office_id,agent_id:l,payment_status:x,from_date:c,to_date:p}).then(i=>{console.log("sales Overview",i),be(i.data)}).catch(i=>{console.log(i)})},[C,y,m.office_id,p]),le=s.useCallback((l,x)=>{E({...m,total_sales_by:"agent_name",city:l,payment_status:x,from_date:c,to_date:p}).then(i=>{ve(i.data)}).catch(i=>{console.log(i)})},[O,P,m.office_id,p]),te=s.useCallback((l,x)=>{E({...m,total_sales_by:"location",payment_status:x,agent_id:l,from_date:c,to_date:p}).then(i=>{Ne(i.data),console.log(i)}).catch(i=>{console.log(i)})},[H,M,m.office_id,p]),se=s.useCallback(l=>{E({...m,total_sales_by:"payment_status",agent_id:l,from_date:c,to_date:p}).then(x=>{Se(x.data),console.log(x)}).catch(x=>{console.log(x)})},[z,m.office_id,p]),ae=s.useCallback(l=>{E({...m,total_sales_by:"installation_status",agent_id:l,from_date:c,to_date:p}).then(x=>{Ce(x.data),console.log(x)}).catch(x=>{console.log(x)})},[T,m.office_id,p]),ne=s.useCallback((l,x)=>{r(!0),qe({...t,...m,agent_id:l,payment_status:x,from_date:c,to_date:p}).then(i=>{console.log(i),Ae(i),r(!1)}).catch(i=>{console.log(i)})},[V,R,m.office_id,p,t]);s.useEffect(()=>{ee(C==="all"?null:C,y==="all"?null:y)},[ee]),s.useEffect(()=>{le(O==="all"?null:O,P==="all"?null:P)},[le]),s.useEffect(()=>{te(H==="all"?null:H,M==="all"?null:M)},[te]),s.useEffect(()=>{se(z==="all"?null:z)},[se]),s.useEffect(()=>{ae(T==="all"?null:T)},[ae]),s.useEffect(()=>{ne(R==="all"?null:R,V==="all"?null:V)},[ne]),s.useEffect(()=>{if(D)if(D==="all"){if(m.office_id){const l={...m};delete l.office_id,J(l)}}else J(l=>({...l,office_id:D})),Q("all"),Y("all"),$("all"),U("all")},[D]);function De(l){console.log(l),b(l.start),j(l.end)}function Le(l){b(l[0]),j(l[1])}function Ee(){ie({role:"office"}).then(l=>{pe(l.data)}).catch(l=>{console.log(l)})}function Fe(){console.log("called agent get list!",_e),ie({...m,role:"sales_agent"}).then(l=>{he(l.data)}).catch(l=>{console.log(l)})}function Pe(){Ue({...m}).then(l=>{ke(l.data)}).catch(l=>{console.log(l)})}return s.useEffect(()=>{Be(),Ee()},[]),s.useEffect(()=>{Fe(),Pe()},[m]),e.jsxs("div",{className:"",children:[(o.role=="distributor"||o.role=="office"||o.role=="sales_agent")&&e.jsxs("div",{className:"pt-[29px] flex flex-col w-full gap-6 pb-10",children:[e.jsx("div",{id:"Distributor_Dash_Top",className:"flex justify-between w-full mb-5 flex-wrap gap-5",children:e.jsxs(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[o.role=="office"?e.jsx("div",{className:"p-2 px-4 rounded-lg text-[36px] font-bold  text-primary",children:o.office}):o.role=="sales_agent"?null:e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>me(l.value),onSearch:_,defaultValue:"all",size:"large",className:"custom-select",labelInValue:!0,options:[{value:"all",label:e.jsxs(e.Fragment,{children:["All Offices"," ",e.jsx("span",{className:"highlighted-number",children:X.length})]})},...X.map(l=>({value:l._id,label:l.name}))]}),e.jsxs("div",{id:"DatePickers",className:"flex gap-4 items-center",children:[e.jsx(sl,{placeholder:"Weekly/Monthly",style:{width:"140px",borderRadius:"10px"},handleChnage:De}),e.jsx(ul,{showTime:!1,style:{width:"200px",borderRadius:"10px"},size:"large",placeholder:["Pick Data Range (Start)","End"],format:"YYYY-MM-DD",onChange:(l,x)=>{Le(x)},onOk:fl})]})]})}),e.jsx("div",{id:"Reports",className:"w-full rounded-2xl bg-transparent flex flex-col gap-6",children:e.jsx("div",{id:"Cards",className:"grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",children:L==null?void 0:L.map((l,x)=>{let i=l.icon;return e.jsxs("div",{id:"Card",className:"cursor-pointer group flex w-full items-center p-4 py-6 bg-[#fff] text-white gap-3 rounded-[12px] relative overflow-hidden",children:[e.jsx("div",{id:"circle",style:{backgroundColor:l.color,opacity:"0.9"},className:"w-[100px] h-[100px] absolute -right-11 -top-14 rounded-full group-hover:-right-5 group-hover:-top-[75px] transition-all duration-200 ease-in-out"}),e.jsx("div",{id:"circle",style:{backgroundColor:l.color,opacity:"0.2"},className:"w-[100px] h-[100px] absolute -right-3 -top-[70px] rounded-full group-hover:-right-[50px] group-hover:-top-[45px] transition-all duration-200 ease-in-out"}),e.jsx("div",{style:{backgroundColor:`${l.color}15`},className:"h-fit rounded-[8px] p-2",children:i&&e.jsx(i,{style:{color:l==null?void 0:l.color},size:20})}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("h1",{className:"text-[26px] font-semibold leading-none text-text-primary",children:l.count}),e.jsx("span",{className:"text-[14px] font-medium text-text-primary/70 leading-none",children:l.label})]})]},x)})})}),e.jsxs("div",{id:"SalesOverview&Total",className:"w-full flex  gap-6 flex-col",children:[e.jsxs("div",{className:"w-full flex gap-6",children:[e.jsxs("div",{className:" p-[25px] rounded-2xl  bg-white lg:w-[50%] w-full  h-[445px]",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Total Sales"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:h!=="sales_agent"?e.jsx(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>Q(l.value),onSearch:_,defaultValue:"all",size:"large",style:{maxWidth:150,zIndex:"400"},labelInValue:!0,options:[{value:"all",label:"All Agents"},...B.map(l=>({value:l._id,label:l.name+" "+l.last_name}))]})}):null})]}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(de,{data:Z,chartFor:"totalSales"})}),e.jsx("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:["completed","pending","cancelled"].map(l=>{const x=Z.find(A=>A.property_name===l)||{property_name:l,total_orders:0};let i,g;switch(x.property_name){case"completed":i="#4379EE",g="Completed";break;case"pending":i="#F1963A",g="Pending";break;case"cancelled":i="#D90000",g="Cancelled";break;default:i="#000000",g="Unknown"}return e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] rounded-full",style:{backgroundColor:i}}),e.jsx("span",{className:"text-lg font-medium",children:g})]}),e.jsx("span",{className:"text-lg font-semibold",children:x.total_orders})]},x.property_name)})})]}),e.jsxs("div",{className:" p-[25px] rounded-2xl  bg-white lg:w-[50%] w-full  h-[445px]",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Total Installations"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:h!=="sales_agent"?e.jsx(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>Y(l.value),onSearch:_,defaultValue:"all",size:"large",style:{maxWidth:150,zIndex:"400"},labelInValue:!0,options:[{value:"all",label:"All Agents"},...B.map(l=>({value:l._id,label:l.name+" "+l.last_name}))]})}):null})]}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(de,{data:q,chartFor:"totalInstallations"})}),e.jsx("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:["completed","pending","not_started"].map(l=>{const x=q.find(A=>A.property_name===l)||{property_name:l,total_orders:0};let i,g;switch(x.property_name){case"completed":i="#36b610",g="Completed";break;case"pending":i="#833af1",g="In Progress";break;case"not_started":i="#5d5d5d",g="Not Started";break;default:i="#000000",g="Unknown"}return e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] rounded-full",style:{backgroundColor:i}}),e.jsx("span",{className:"text-lg font-medium",children:g})]}),e.jsx("span",{className:"text-lg font-semibold",children:x.total_orders})]},x.property_name)})})]})]}),e.jsxs("div",{className:" p-[25px] rounded-2xl  bg-white lg:w-[100%] w-full  h-[445px]",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Sales Overview"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:e.jsxs(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[e.jsx(v,{optionFilterProp:"label",onChange:l=>N(l.value),defaultValue:"all",size:"large",labelInValue:!0,options:[{value:"all",label:"All Sales"},{value:"completed",label:"Completed"},{value:"pending",label:"Pending"},{value:"cancelled",label:"Cancelled"}]}),h!=="sales_agent"?e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>U(l.value),onSearch:_,value:C,defaultValue:"all",size:"large",style:{maxWidth:150,zIndex:"400"},labelInValue:!0,options:[{value:"all",label:"All Agents"},...B.map(l=>({value:l._id,label:l.name+" "+l.last_name}))]}):null]})})]}),e.jsx(nl,{data:je})]})]}),e.jsxs("div",{id:"SalesByLucation&Agents",className:"w-full flex gap-6 xl:flex-row flex-col",children:[o.role=="sales_agent"?null:e.jsxs("div",{className:" p-[25px] rounded-2xl  bg-white w-full h-[445px]",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:" Sales by Agent"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:e.jsxs(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[e.jsx(v,{optionFilterProp:"label",onChange:l=>xe(l.value),defaultValue:"all",size:"large",labelInValue:!0,options:[{value:"all",label:"All Sales"},{value:"completed",label:"Completed"},{value:"pending",label:"Pending"},{value:"cancelled",label:"Cancelled"}]}),e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>ue(l.value),onSearch:_,defaultValue:"all",size:"large",labelInValue:!0,options:[{value:"all",label:"All Locations"},...Ie.map(l=>({value:l.city_name,label:l.city_name}))]})]})})]}),e.jsx(I,{data:ye,graphTitle:"Sales by Agent"})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl  bg-white w-full h-[445px]",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Sales by Location"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:e.jsxs(w,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[e.jsx(v,{optionFilterProp:"label",onChange:l=>fe(l.value),defaultValue:"all",size:"large",labelInValue:!0,options:[{value:"all",label:"All Sales"},{value:"completed",label:"Completed"},{value:"pending",label:"Pending"},{value:"cancelled",label:"Cancelled"}]}),h!=="sales_agent"?e.jsx(v,{showSearch:!0,optionFilterProp:"label",onChange:l=>$(l.value),onSearch:_,defaultValue:"all",size:"large",labelInValue:!0,options:[{value:"all",label:"All Agents"},...B.map(l=>({value:l._id,label:l.name+" "+l.last_name}))]}):null]})})]}),e.jsx(I,{data:we,graphTitle:"Sales by Location"})]})]})]}),o.role=="monitoring_station"?e.jsx(rl,{count:L}):null,d=="installer"?e.jsx(xl,{}):null,o.role=="nursing_home"?e.jsxs("div",{className:"w-full flex flex-col gap-6 pt-6",children:[e.jsxs("div",{className:"w-full flex gap-6 xl:flex-row flex-col h-fit justify-between",children:[e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px]",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Most Alerts"})}),e.jsx(I,{})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px]",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Alerts Count"})}),e.jsx(I,{})]})]}),e.jsxs("div",{className:"flex gap-6 lg:flex-row flex-col h-fit",children:[e.jsxs("div",{className:"rounded-2xl lg:w-[75%] w-full flex flex-col gap-6 h-full",children:[e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px] flex-grow",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Ages"})}),e.jsx(F,{chartFor:"age"})]}),e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full h-[445px] flex-grow",children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Diseases"})}),e.jsx(F,{chartFor:"diseases"})]})]}),e.jsx("div",{className:"rounded-2xl lg:w-[35%] w-full flex flex-col gap-6 h-full",children:e.jsxs("div",{className:"p-[25px] rounded-2xl bg-white w-full flex flex-col h-[496px] justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{id:"ChartHeader",className:"w-full flex justify-between",children:e.jsx("h1",{className:"text-[24px] font-bold",children:"Gender"})}),e.jsx("div",{className:"h-[260px] my-0 mx-auto flex items-center justify-center",children:e.jsx(K,{data:[],chartFor:"gender"})})]}),e.jsxs("div",{id:"ChartInfo",className:"w-full flex flex-col gap-2",children:[e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-text-primary rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Total"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"400"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#4379EE] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Male"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"150"})]}),e.jsxs("div",{id:"InfoItem",className:"w-full flex justify-between",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-[12px] h-[12px] bg-[#5CC8BE] rounded-full"}),e.jsx("span",{className:"text-lg font-medium",children:"Female"})]}),e.jsx("span",{className:"text-lg font-semibold",children:"250"})]})]})]})})]})]}):null]})};export{Fl as default};