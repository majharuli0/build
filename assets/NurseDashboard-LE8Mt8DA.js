import{r as a,j as e,B as S,bq as T,br as H,I as V,a5 as D,a6 as A,aN as R,bs as W,bp as O}from"./index-BOuKYgOO.js";import{a as K}from"./index-BJACSv2h.js";import{u as k,A as Y,W as q,M as G,a as F,r as $,e as U}from"./ActiveAlertsCards-DCbIownh.js";import{M as J,u as L,P as Q,a as X,L as Z,m as d}from"./proxy-8E-tsh6y.js";import{W as ee}from"./WeeklyMonthlyPicker-2Mcpfuri.js";import{C as te}from"./CreateAndEditModal-eC_z-Uua.js";import{S as _}from"./index-CcUoITtv.js";import{D as le}from"./index-CsP08dNi.js";import{R as re}from"./AimOutlined-DLA5jPd3.js";import{R as ae}from"./HomeOutlined-DYJuhFzZ.js";import"./index-CLg4TBn_.js";import"./line-B-4O1m3q.js";import"./SwapRightOutlined-ClU-ITV2.js";import"./weekOfYear-DURA1J3u.js";import"./AlertName-DixzGC_B.js";import"./helper-DA8PoIl3.js";import"./ActionManu-CK25NDC2.js";import"./index-D-BitYsR.js";import"./SuccessModal-Ci4rHzRn.js";import"./index-C05JYFkY.js";import"./UseCustomContext-BChC4vM-.js";import"./elderlySupport-0YWzrmnA.js";import"./LargeTextViewerModal-CFc7yDo2.js";import"./slick-theme-DrBHL0bh.js";import"./index-BK23Z2dA.js";import"./AlertCloseModal-BgJKENE3.js";import"./leaflet-src-D-cz3Rbb.js";/* empty css                */import"./InfoCircleOutlined-DDI46s0b.js";import"./index-B-ppKiuL.js";import"./weekday-D-VfgnGi.js";class oe extends a.Component{getSnapshotBeforeUpdate(n){const l=this.props.childRef.current;if(l&&n.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=l.offsetHeight||0,o.width=l.offsetWidth||0,o.top=l.offsetTop,o.left=l.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function se({children:t,isPresent:n}){const l=a.useId(),o=a.useRef(null),i=a.useRef({width:0,height:0,top:0,left:0}),{nonce:b}=a.useContext(J);return a.useInsertionEffect(()=>{const{width:p,height:s,top:f,left:x}=i.current;if(n||!o.current||!p||!s)return;o.current.dataset.motionPopId=l;const c=document.createElement("style");return b&&(c.nonce=b),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${s}px !important;
            top: ${f}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[n]),e.jsx(oe,{isPresent:n,childRef:o,sizeRef:i,children:a.cloneElement(t,{ref:o})})}const ne=({children:t,initial:n,isPresent:l,onExitComplete:o,custom:i,presenceAffectsLayout:b,mode:p})=>{const s=L(ie),f=a.useId(),x=a.useCallback(m=>{s.set(m,!0);for(const r of s.values())if(!r)return;o&&o()},[s,o]),c=a.useMemo(()=>({id:f,initial:n,isPresent:l,custom:i,onExitComplete:x,register:m=>(s.set(m,!1),()=>s.delete(m))}),b?[Math.random(),x]:[l,x]);return a.useMemo(()=>{s.forEach((m,r)=>s.set(r,!1))},[l]),a.useEffect(()=>{!l&&!s.size&&o&&o()},[l]),p==="popLayout"&&(t=e.jsx(se,{isPresent:l,children:t})),e.jsx(Q.Provider,{value:c,children:t})};function ie(){return new Map}const v=t=>t.key||"";function B(t){const n=[];return a.Children.forEach(t,l=>{a.isValidElement(l)&&n.push(l)}),n}const me=({children:t,exitBeforeEnter:n,custom:l,initial:o=!0,onExitComplete:i,presenceAffectsLayout:b=!0,mode:p="sync"})=>{const s=a.useMemo(()=>B(t),[t]),f=s.map(v),x=a.useRef(!0),c=a.useRef(s),m=L(()=>new Map),[r,j]=a.useState(s),[N,E]=a.useState(s);X(()=>{x.current=!1,c.current=s;for(let h=0;h<N.length;h++){const u=v(N[h]);f.includes(u)?m.delete(u):m.get(u)!==!0&&m.set(u,!1)}},[N,f.length,f.join("-")]);const w=[];if(s!==r){let h=[...s];for(let u=0;u<N.length;u++){const g=N[u],C=v(g);f.includes(C)||(h.splice(u,0,g),w.push(g))}p==="wait"&&w.length&&(h=w),E(B(h)),j(s);return}const{forceRender:y}=a.useContext(Z);return e.jsx(e.Fragment,{children:N.map(h=>{const u=v(h),g=s===N||f.includes(u),C=()=>{if(m.has(u))m.set(u,!0);else return;let M=!0;m.forEach(z=>{z||(M=!1)}),M&&(y==null||y(),E(c.current),i&&i())};return e.jsx(ne,{isPresent:g,initial:!x.current||o?void 0:!1,custom:g?void 0:l,presenceAffectsLayout:b,mode:p,onExitComplete:g?void 0:C,children:h},u)})})};function ue(){const[t,n]=a.useState(null),[l,o]=a.useState({textColor:"text-white",bodyColor:"text-white",txtc:"#fff",bgc:"#fff"});return a.useEffect(()=>{t&&o({textColor:t.alertStatus==="normal"?"text-primary":"text-white",bodyColor:t.alertStatus==="normal"?"text-primary":"text-white",txtc:t.alertStatus==="normal"?"#fff":"#000",bgc:t.alertStatus==="normal"?"#fff":"#000"})},[t]),e.jsx(e.Fragment,{children:e.jsxs("div",{id:"NurseRoomView",className:"w-full h-full relative",children:[e.jsx("div",{className:"w-full h-full grid grid-cols-10  overflow-auto",children:P.map(i=>e.jsx(d.div,{layoutId:i.roomNumber,onClick:()=>n(i),className:`text-white text-base ${i.alertStatus==="critical"?"bg-[#FF1D1D]":i.alertStatus==="warning"?"bg-[#FF9831]":i.alertStatus==="problem"?"bg-[#6471FF]":"bg-[#F4F4F6] !text-primary"}  rounded-lg cursor-pointer flex justify-center m-2 items-center font-semibold min-w-[55px] min-h-[65px] `,children:e.jsx(d.h5,{children:i.roomNumber})},i.roomNumber))}),e.jsx(me,{children:t&&e.jsx(d.div,{className:"absolute inset-0 flex justify-center items-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(d.div,{className:"bg-black bg-opacity-50 w-full h-full flex justify-center items-center",onClick:()=>n(null),children:e.jsxs(d.div,{className:`${t.alertStatus==="critical"?"bg-[#FF1D1D]":t.alertStatus==="warning"?"bg-[#FF9831]":t.alertStatus==="problem"?"bg-[#6471FF]":"bg-[#F4F4F6]"} p-4 rounded-xl w-full h-[80%]`,style:{margin:"50px"},onClick:i=>i.stopPropagation(),layoutId:t.roomNumber,children:[e.jsxs(d.div,{className:"flex justify-between items-start",children:[" ",e.jsxs(d.div,{className:"rounded-xl flex flex-col items-start justify-start",children:[e.jsx(d.h2,{className:`leading-none font-semibold ${l.bodyColor} opacity-70`,children:"Room Number"}),e.jsx(d.h5,{className:`text-4xl font-bold leading-none ${l.textColor}`,children:t.roomNumber})]}),e.jsx(d.button,{className:"p-2 bg-black/5  hover:bg-black/10 rounded-full",onClick:()=>n(null),children:e.jsx(K,{size:24,className:l.textColor})})]}),e.jsxs(d.div,{className:"flex gap-4 h-[84%] items-center mt-2",children:[e.jsx(d.div,{className:"h-full w-[35%] rounded-xl pt-2",children:e.jsxs("div",{id:"elderly-profile",className:"flex flex-col gap-2 items-center",children:[e.jsx("div",{id:"image",className:"relative rounded-full h-[80px] w-[80px]",children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.alertStatus!=="normal"&&e.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full ${t.alertStatus==="critical"?"bg-red-50":t.alertStatus==="warning"?"bg-orange-50":t.alertStatus==="normal"?"bg-none":"bg-blue-50"} opacity-75`}),e.jsx("span",{className:`relative rounded-full h-[80px] w-[80px] ${t.alertStatus==="critical"?"bg-red-500 border-red-500":t.alertStatus==="warning"?"bg-orange-500 border-orange-500":t.alertStatus==="normal"?"bg-green-500 border-green-500 !border-0":"bg-blue-500 border-blue-500"} flex items-center justify-center overflow-hidden border-0`,children:e.jsx("img",{className:"w-full h-full object-cover overflow-hidden",src:"https://www.shutterstock.com/image-photo/elderly-hispanic-man-grey-hair-260nw-2511514837.jpg",alt:""})})]})}),e.jsxs("div",{className:"flex flex-col items-center w-full",children:[e.jsx("h2",{className:`text-xl font-bold ${l.textColor} text-center`,children:"Elderly Name"}),e.jsxs("h2",{className:`text-base font-medium ${l.textColor} opacity-80 text-center`,children:["Age: ",e.jsx("span",{children:"75"})]})]}),e.jsx(S,{theme:{components:{Button:{defaultBg:"#ffffff !important",defaultActiveBg:"#fff",defaultHoverBg:"#fff !important"}}},children:e.jsxs(T.Button,{style:{width:"100%"},className:"w-full",menu:{items:[{label:"Call Hospital",key:"1"},{label:"Call Police",key:"2"}],onClick:()=>{console.log("clicked")}},size:"large",children:[e.jsx(H,{}),"Call 911"]})}),e.jsxs("div",{id:"liveHeartAndBreathRate",className:"flex gap-2 mt-4 w-full py-4",children:[e.jsxs("div",{id:"heartRate",className:"flex flex-col items-start justify-start w-full",children:[e.jsxs("h2",{className:`text-[27px] font-bold leading-none ${l.textColor} `,children:["67 ",e.jsx("span",{className:"text-sm",children:"bpm"})]}),e.jsx("h2",{className:`text-sm font-medium ${l.textColor} opacity-80`,children:"Heart Rate"})]}),e.jsxs("div",{id:"breathRate",className:"flex flex-col items-start justify-start w-full",children:[e.jsxs("h2",{className:`text-[27px] font-bold leading-none ${l.textColor} `,children:["25 ",e.jsx("span",{className:"text-sm",children:"bpm"})]}),e.jsx("h2",{className:`text-sm font-medium ${l.textColor} opacity-80`,children:"Breath Rate"})]})]})]})}),e.jsx(d.div,{className:"h-full w-[65%] bg-white rounded-xl flex flex-col items-center justify-center",children:"room map"})]})]})})})})]})})}const P=[{roomNumber:"101",alertStatus:"normal"},{roomNumber:"102",alertStatus:"normal"},{roomNumber:"103",alertStatus:"normal"},{roomNumber:"104",alertStatus:"normal"},{roomNumber:"105",alertStatus:"normal"},{roomNumber:"106",alertStatus:"normal"},{roomNumber:"107",alertStatus:"normal"},{roomNumber:"108",alertStatus:"normal"},{roomNumber:"109",alertStatus:"normal"},{roomNumber:"110",alertStatus:"normal"},{roomNumber:"111",alertStatus:"normal"},{roomNumber:"112",alertStatus:"normal"},{roomNumber:"113",alertStatus:"normal"},{roomNumber:"114",alertStatus:"normal"},{roomNumber:"115",alertStatus:"normal"},{roomNumber:"116",alertStatus:"normal"},{roomNumber:"117",alertStatus:"normal"},{roomNumber:"118",alertStatus:"normal"},{roomNumber:"119",alertStatus:"normal"},{roomNumber:"120",alertStatus:"normal"},{roomNumber:"121",alertStatus:"normal"},{roomNumber:"122",alertStatus:"normal"},{roomNumber:"123",alertStatus:"normal"},{roomNumber:"124",alertStatus:"normal"},{roomNumber:"125",alertStatus:"normal"},{roomNumber:"126",alertStatus:"normal"},{roomNumber:"127",alertStatus:"normal"},{roomNumber:"128",alertStatus:"normal"},{roomNumber:"129",alertStatus:"normal"},{roomNumber:"130",alertStatus:"normal"},{roomNumber:"131",alertStatus:"normal"},{roomNumber:"132",alertStatus:"normal"},{roomNumber:"133",alertStatus:"normal"},{roomNumber:"134",alertStatus:"normal"},{roomNumber:"135",alertStatus:"normal"},{roomNumber:"136",alertStatus:"normal"},{roomNumber:"137",alertStatus:"normal"},{roomNumber:"138",alertStatus:"normal"},{roomNumber:"139",alertStatus:"normal"},{roomNumber:"140",alertStatus:"normal"},{roomNumber:"141",alertStatus:"normal"},{roomNumber:"142",alertStatus:"normal"},{roomNumber:"143",alertStatus:"normal"},{roomNumber:"144",alertStatus:"normal"},{roomNumber:"145",alertStatus:"normal"},{roomNumber:"146",alertStatus:"normal"},{roomNumber:"147",alertStatus:"normal"},{roomNumber:"148",alertStatus:"normal"},{roomNumber:"149",alertStatus:"normal"},{roomNumber:"150",alertStatus:"normal"},{roomNumber:"151",alertStatus:"normal"},{roomNumber:"152",alertStatus:"normal"},{roomNumber:"153",alertStatus:"normal"},{roomNumber:"154",alertStatus:"normal"},{roomNumber:"155",alertStatus:"normal"},{roomNumber:"156",alertStatus:"normal"},{roomNumber:"157",alertStatus:"normal"},{roomNumber:"158",alertStatus:"normal"},{roomNumber:"159",alertStatus:"normal"},{roomNumber:"160",alertStatus:"normal"},{roomNumber:"161",alertStatus:"normal"},{roomNumber:"162",alertStatus:"normal"},{roomNumber:"163",alertStatus:"normal"},{roomNumber:"164",alertStatus:"normal"},{roomNumber:"165",alertStatus:"normal"},{roomNumber:"166",alertStatus:"normal"},{roomNumber:"167",alertStatus:"normal"},{roomNumber:"168",alertStatus:"normal"},{roomNumber:"169",alertStatus:"normal"},{roomNumber:"170",alertStatus:"normal"}];for(let t=0;t<8;t++){const n=Math.floor(Math.random()*P.length),l=["critical","warning","problem"],o=l[Math.floor(Math.random()*l.length)];P[n].alertStatus=o}const{RangePicker:ce}=le;function We(){var x,c,m;a.useState("Map View");const[t,n]=a.useState(!1),[l,o]=a.useState([]),i=k("activeAlert"),b=k("recentlyClosedAlert"),p=k("events");function s(r){console.log(r)}const f=(r,j)=>{o(r?[j._id]:[])};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-4 flex-col pt-8 pb-8",children:[e.jsx("div",{className:"flex item-center justify-between w-full",children:e.jsxs(S,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:[e.jsx("div",{children:e.jsx(V,{className:"rounded-[10px]",size:"large",placeholder:"Search Anything",style:{height:"44px"}})}),e.jsxs("div",{className:"flex gap-4 mb-2",children:[e.jsx(ee,{style:{borderRadius:"10px"},handleChange:r=>console.log(r)}),e.jsx(ce,{showTime:!1,style:{width:"200px",borderRadius:"10px"},size:"large",placeholder:["Pick Data Range (Start)","End"],format:"YYYY-MM-DD",onChange:(r,j)=>{s(j)}}),e.jsx(D,{disabled:!1,onClick:()=>{},type:"text",children:"Download Report"})]})]})}),e.jsx("div",{className:"w-full",children:e.jsx(Y,{})}),e.jsxs("div",{className:"w-full flex gap-4 md:flex-row flex-col",children:[e.jsx("div",{className:"w-full  p-0 ",children:e.jsxs("div",{className:"bg-white  rounded-2xl  p-6 h-[600px] flex flex-col",children:[e.jsx("div",{className:"flex justify-between items-center mb-5",children:e.jsx("h1",{className:"text-2xl font-bold",children:"Room View"})}),e.jsx("div",{className:"w-full h-full overflow-y-auto rounded-xl",children:e.jsx(ue,{})})]})}),e.jsxs("div",{className:"bg-white w-full md:w-[48%] rounded-2xl p-6 h-[600px] overflow-hidden",children:[e.jsxs("div",{id:"ChartHeader",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Alerts Overview"}),e.jsx("div",{id:"chartController",className:"flex gap-4",children:e.jsx(S,{theme:{token:{fontFamily:"Baloo2",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:e.jsx(q,{handleChange:r=>console.log(r)})})})]}),e.jsx("div",{className:"w-full h-full",children:e.jsx(G,{})})]})]}),e.jsxs("div",{id:"Active_Alerts",className:"w-full flex flex-col gap-4 justify-center items-center bg-white rounded-2xl p-6",children:[e.jsxs("div",{id:"Active_Alerts_Header",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Active Alerts"}),e.jsx("div",{children:e.jsx(S,{theme:{components:{Segmented:{itemSelectedBg:"#252F67",itemSelectedColor:"#fff",fontFamily:"Baloo2"}}},children:e.jsx(_,{options:I,onChange:r=>console.log(r)})})})]}),e.jsx("div",{id:"Active_Alerts_Table",className:"w-full",children:e.jsx(A.Provider,{value:{total:(x=F)==null?void 0:x.length,page:1,limit:6,SetPage:()=>{}},children:e.jsx(R,{pageSize:6,tableData:F,columns:i})})})]}),e.jsxs("div",{id:"Recently_Closed_Alerts",className:"w-full flex flex-col gap-4 justify-center items-center bg-white rounded-2xl p-6",children:[e.jsxs("div",{id:"Recently_Closed_Alerts_Header",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Recently Closed Alerts"}),e.jsx("div",{children:e.jsx(S,{theme:{components:{Segmented:{itemSelectedBg:"#252F67",itemSelectedColor:"#fff",fontFamily:"Baloo2"}}},children:e.jsx(_,{options:I,onChange:r=>console.log(r)})})})]}),e.jsx("div",{id:"Recently_Closed_Alerts_Table",className:"w-full",children:e.jsx(A.Provider,{value:{total:(c=$)==null?void 0:c.length,page:1,limit:6,SetPage:()=>{}},children:e.jsx(R,{pageSize:6,tableData:$,columns:b})})})]}),e.jsxs("div",{id:"Events",className:"w-full flex flex-col gap-4 justify-center items-center bg-white rounded-2xl p-6",children:[e.jsxs("div",{id:"Events_Header",className:"w-full flex justify-between",children:[e.jsx("h1",{className:"text-[24px] font-bold",children:"Events"}),e.jsx("div",{children:e.jsxs(D,{onClick:()=>n(!0),className:" hidden lg:flex min-w-[80px] gap-2",children:[e.jsx(W,{})," Add New Event"]})})]}),e.jsx("div",{id:"Events_Table",className:"w-full",children:e.jsx(A.Provider,{value:{total:(m=F)==null?void 0:m.length,page:1,limit:6,SetPage:()=>{}},children:e.jsx(R,{pageSize:6,tableData:U,columns:p,expandable:{expandedRowRender:r=>e.jsx("div",{style:{margin:"0"},className:"flex gap-14 w-full items-center justify-start px-2",children:e.jsxs("div",{className:"flex w-[50vw] items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-[16px] font-semibold",children:r.hospital.name}),e.jsxs("p",{className:"text-base",children:["Phone Number:"," ",r.hospital.phone?r.hospital.phone:"Not Available"]})]}),e.jsxs("div",{className:"flex items-center gap-2 ",children:[e.jsx("a",{href:`https://www.google.com/maps?q=${r.hospital.latitude},${r.hospital.longitude}`,target:"_blank",rel:"noopener noreferrer",className:"text-base font-medium !text-blue-500",children:"View on Google Maps"}),e.jsx(O,{size:18,className:"text-blue-500"})]})]})}),rowExpandable:r=>r.elderlyName!==null,expandedRowKeys:l,onExpand:f}})})})]})]}),e.jsx(te,{modalOpen:t,setModalOpen:n,type:"event"})]})}const Oe=[{label:" Map View",value:"Map View",icon:e.jsx(re,{})},{label:"Room View",value:"Room View",icon:e.jsx(ae,{})}],I=[{label:"All Alerts",value:"All Alerts"},{label:"Critical",value:"Critical"},{label:"Warning",value:"Warning"},{label:"Informational",value:"Informational"}];export{I as activeAlertSegmentOptions,Oe as alertViewSegmentOptions,We as default};