import{r as a,l as w,a as z,u as M,j as s,a1 as J,B as R,a0 as K,a2 as I,b as L,T as W,a3 as X,a4 as Y,a5 as ee,a6 as te,a7 as se,a8 as ne,a9 as ae}from"./index-DJP8L-_P.js";import{D as oe}from"./index-CKDGDlX3.js";import{A as re}from"./AdminSupportAgentTableAction-DcVYBiUa.js";import{S as le}from"./index-im9lQdhU.js";import"./index-Bfw4jCdn.js";import"./index-DEhmA4sL.js";function ce({row:n}){const[l,f]=a.useState(n==null?void 0:n.status),[_,c]=a.useState(!1),p=d=>{c(!0),I(n==null?void 0:n._id,{status:d}).then(u=>{var i;console.log(u),u&&f((i=u==null?void 0:u.user)==null?void 0:i.status)}).finally(()=>{c(!1)})};return a.useEffect(()=>{f(n==null?void 0:n.status)},[n]),s.jsx(R,{theme:{token:{colorText:"#707EAE",colorPrimary:"#06A44F",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:s.jsx(le,{loading:_,onChange:p,handleBg:"#00000",className:"bg-slate-200",value:l})})}function ie({row:n}){const[l,f]=a.useState(n==null?void 0:n.status),[_,c]=a.useState(!1),p=d=>{c(!0),I(n==null?void 0:n._id,{status:d}).then(u=>{var i;console.log(u),u&&f((i=u==null?void 0:u.user)==null?void 0:i.status)}).finally(()=>{c(!1)})};return a.useEffect(()=>{f(n==null?void 0:n.status)},[n]),s.jsxs("div",{className:"flex items-center space-x-2 mr-0 ",children:[s.jsx("span",{className:`w-3 h-3 rounded-full relative -right-2 ${l==!0?"bg-[#1EB564]":"bg-red-500"}`}),s.jsx(R,{theme:{token:{colorText:"#707EAE",colorPrimary:"#8086AC",colorLinkActive:"#8086AC",colorLinkHover:"#8086AC",colorLink:"#8086AC"}},children:s.jsx(K,{value:l,variant:"borderless",onChange:p,loading:_,optionSelectedColor:"#8086AC",className:"w-fit !text-red-100",options:[{value:!1,label:s.jsx("span",{children:"Disable"})},{value:!0,label:s.jsx("span",{children:"Active"})}]})})]})}const ue=n=>{const[l,f]=a.useState(w.get("mainRole"));console.log(n);const[_,c]=a.useState(void 0),{setUserDetil:p}=z(),d=M(),u=(t,S)=>{p(t),d(`/super-admin/user/${t._id}`,{state:{role:t.role}})},i={super_admin:{distributor:["name","address","contact_person","contact_number","office_count","seles_agent_count","nursing_home_count","monitoring_company_count","end_user_count","device_count","avg_sales","action"],office:["name","distributor_name","address","contact_person","contact_number","seles_agent_count","nursing_home_count","monitoring_company_count","end_user_count","device_count","action"],sales_agent:["name","office_name","address","contact_number","agent_id","nursing_home_count","monitoring_company_count","end_user_count","device_count","avg_sales","action"],nursing_home:["name","distributor_name","address","contact_person","contact_number","elderly_count","device_count","alert_count","assigned_nurse_count","action"],monitoring_station:["name","distributor_name","address","contact_person","contact_number","elderly_count","device_count","action"],support_agent:["name","distributor_name","address","contact_number","monitoring_company_count","alert_count","action"],installer:["name","distributor_name","office_name","address","contact_number","elderly_count","device_count","action"],super_admin:["name","contact_number","action"],end_user:["name","distributor_name","office_name","sales_agent_name","address","contact_number","subscription_status","elderly_count","device_count","alert_count","action"],elderly:["name","age","distributor_name","office_name","sales_agent_name","installer_name","alert_count","device_count"],nurse:["name","contact_number","action"]}},m={name:{title:t=>{switch(t){case"office":return"Office";case"nurse":return"Nurse Name";case"distributor":return"Distributor Name";case"sales_agent":return"Sales Agent Name";case"nursing_home":return"Nursing Home";case"end_user":return"End User";case"monitoring_station":return"Monitoring Station";case"support_agent":return"Support Agent";case"installer":return"Installer";case"elderly":return"Elderly";default:return"Name"}},key:"id",onCell:(t,S)=>({onClick:g=>{u(t)}}),render:t=>(t==null?void 0:t.role)=="elderly"?s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.name})}):s.jsx("button",{children:s.jsx(J,{data:t})})},address:{title:"Address",render:t=>s.jsx("button",{style:{width:"200px",textAlign:"left"},children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.address})})},email:{title:"Email Address",render:t=>s.jsx("button",{style:{width:"150px",textAlign:"left"},children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.email})})},contact_number:{title:"Contact Number",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.contact_number})})},contact_person:{title:"Contact Person",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.contact_person})})},date:{title:"Date of Sales",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.date})})},age:{title:"Age",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.age})})},external_id:{title:"External ID",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.external_id})})},products:{title:"Products",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.products})})},products_price:{title:"Products Price",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.products_price})})},addons:{title:"Addons",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.addons})})},addons_price:{title:"Addons Price",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.addon_price})})},total_price:{title:"Total Price",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.total})})},avg_sales:{title:"Average Sales",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.aleravg_salest_count})})},alert_count:{title:"Alert Count",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.alert_count})})},device_count:{title:"Device Count",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.device_count})})},sales_agent_count:{title:"Sales Agents",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.sales_agent})})},end_user_count:{title:"End Users",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.end_user})})},nursing_home_count:{title:"Nursing Homes",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.nursing_home})})},monitoring_company_count:{title:"Monitoring Stations",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.monitoring_station})})},office_count:{title:"Offices",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.office})})},elderly_count:{title:"Elderly",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.elderly})})},assigned_nurse_count:{title:"Assigned Nurse",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.nurse})})},office_name:{title:"Office Name",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.office_name})})},distributor_name:{title:"Distributor Name",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.distributor_name})})},sales_agent_name:{title:"Sales Agent Name",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.sales_agent_name})})},installer:{title:"Installer Name",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.installer_name})})},agent_id:{title:"Agent ID",render:t=>s.jsx("button",{children:s.jsx("span",{className:" text-[14px] xl:text-base  font-normal text-text-secondary",children:t.agent_id})})},status:{title:"Status",render:t=>(t==null?void 0:t.role)=="sales_agent"?s.jsx(ce,{row:t}):s.jsx(ie,{row:t})},action:{title:"",key:"id",width:100,render:t=>s.jsx(re,{data:t})}};return a.useEffect(()=>{var t,S,g,C,y,j,v,E,N,h,T;if(console.log(n),n=="Super Admins"){const r=(((t=i[l])==null?void 0:t.super_admin)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("super_admin"):e==null?void 0:e.title}});c(r)}else if(n=="Support Agents"){const r=(((S=i[l])==null?void 0:S.support_agent)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("support_agent"):e==null?void 0:e.title}});c(r)}else if(n=="Distributors"){const r=(((g=i[l])==null?void 0:g.distributor)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("distributor"):e==null?void 0:e.title}});c(r)}else if(n=="Offices"){const r=(((C=i[l])==null?void 0:C.office)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("office"):e==null?void 0:e.title}});c(r)}else if(n=="Nursing Homes"){const r=(((y=i[l])==null?void 0:y.nursing_home)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("nursing_home"):e==null?void 0:e.title}});c(r)}else if(n=="Sales Agents"){const r=(((j=i[l])==null?void 0:j.sales_agent)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("sales_agent"):e==null?void 0:e.title}});c(r)}else if(n=="End Users"){const r=(((v=i[l])==null?void 0:v.end_user)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("end_user"):e==null?void 0:e.title}});c(r)}else if(n=="Installers"){const r=(((E=i[l])==null?void 0:E.installer)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("installer"):e==null?void 0:e.title}});c(r)}else if(n=="Monitoring Stations"){const r=(((N=i[l])==null?void 0:N.monitoring_station)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("monitoring_station"):e==null?void 0:e.title}});c(r)}else if(n=="Nurses"){console.log(n);const r=(((h=i[l])==null?void 0:h.nurse)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("nurse"):e==null?void 0:e.title}});c(r)}else if(n=="Elderly"){const r=(((T=i[l])==null?void 0:T.elderly)||[]).map(o=>{const e=m[o];return{...e,title:e&&typeof e.title=="function"?e.title("nurse"):e==null?void 0:e.title}});c(r)}},[n]),_},de=n=>{const l=a.useRef(null),[f,_]=a.useState(null),[c,p]=a.useState(!1),[d,u]=a.useState(null),i=a.useCallback(async(m={})=>{p(!0),u(null),l.current&&l.current.cancel("Previous request canceled!"),l.current=L.CancelToken.source();try{const t=await n({...m,cancelToken:l.current.token});_(t)}catch(t){L.isCancel(t)?console.log("Request canceled:",t.message):(console.error("Fetch error:",t),u(t))}finally{p(!1)}},[n]);return a.useEffect(()=>()=>{l.current&&l.current.cancel("Component unmounted, request canceled!")},[]),{response:f,loading:c,error:d,makeRequest:i}},be=()=>{const{response:n,loading:l,error:f,makeRequest:_}=de(ae),c=W(),p=M(),[d,u]=a.useState("");a.useState(!1);const[i,m]=a.useState({}),[t,S]=a.useState(""),[g,C]=a.useState("Distributors");a.useState(w.get("mainRole"));const[y]=a.useState([{bo:!0,warring:!1,text:"Distributors"},{bo:!0,warring:!1,text:"Offices"},{bo:!0,warring:!1,text:"Sales Agents"},{bo:!0,warring:!1,text:"Nursing Homes"},{bo:!0,warring:!1,text:"Monitoring Stations"},{bo:!0,warring:!1,text:"Support Agents"},{bo:!0,warring:!1,text:"Installers"},{bo:!0,warring:!1,text:"End Users"},{bo:!0,warring:!1,text:"Elderly"}]);a.useState(w.get("user"));const[j,v]=a.useState(""),[E,N]=a.useState(!1),[h,T]=a.useState("Time"),[x,r]=a.useState({}),[o,e]=a.useState({}),[xe,O]=a.useState([]);a.useState(0);const[U,B]=a.useState([]),q={Distributors:"Distributor","Nursing Homes":"Nursing Home","Sales Agents":"Sales Agent","Support Agents":"Support Agent","Super Admins":"Super Admin",Elderly:"Elderly",Installers:"Installer","Monitoring Stations":"Monitoring Station",Offices:"Office","End Users":"End User",Nurses:"Nurse"},V={Distributors:"distributor","Nursing Homes":"nursing_home","Sales Agents":"sales_agent","Support Agents":"supports_agent","Monitoring Stations":"monitoring_station",Installers:"installer","End Users":"end_user",Offices:"office","Super Admins":"super_admin",Elderly:"elderly",Nurses:"nurse"},$=["Time","Name"],D=ue(d);a.useEffect(()=>{D&&B(D)},[D,d]),a.useEffect(()=>{const k=new URLSearchParams(c.search).get("tab");y.map(Z=>Z.text).includes(k)?u(k):u("Distributors")},[]);const F=()=>{N(!0)},Q=b=>{r({page:1}),u(b.name)},A=a.useCallback(async()=>{O([]);let b={...x,...o};const k=q[d];C(k),b.role=V[d],S(b.role),console.log(b);try{await _({...b})}catch(H){console.log(H)}p(`/super-admin/users?tab=${d}`)},[o,d,x]);a.useEffect(()=>{A()},[A]);const P=a.useRef(!1);a.useEffect(()=>{P.current?h&&o.orderType!==h&&(delete o.sort_by_created_at,delete o.sort_by_name,e({...o,...h==="Name"?{sort_by_name:-1}:{sort_by_created_at:-1}}),r({...x,page:1})):P.current=!0},[h]);const G=()=>{e({...o,search:j.trim()}),r({...x,page:1})};return s.jsxs("div",{className:"",children:[s.jsx("div",{className:"pt-[20px] pb-[10px] flex",children:s.jsx(oe,{menus:y,activeTab:d,setActiveTab:!1,handleChange:Q})}),s.jsxs("div",{className:" bg-white rounded-2xl overflow-hidden",children:[s.jsxs("div",{className:" px-[22px] py-6 flex items-start flex-col lg:flex-row justify-between gap-2",children:[s.jsx("div",{className:" flex items-center justify-between w-full",children:s.jsx("h2",{className:" text-2xl font-bold text-text-primary",children:d})}),s.jsxs("div",{className:" flex items-center justify-end gap-5 w-full",children:[s.jsx(X,{search:j,setSearch:v,handBlurchange:G,placeholder:`Search ${g}`}),s.jsx(Y,{query:o,setQuery:e,selected:h,setSelected:T,data:$}),s.jsxs(ee,{onClick:()=>F(),className:" hidden lg:flex min-w-[80px]",style:{display:g=="Elderly"?"none":"flex"},children:[s.jsx("div",{className:"mr-1",dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none">
                <path d="M10.0941 5.54102C10.0941 5.2131 9.82824 4.94727 9.50033 4.94727C9.17241 4.94727 8.90658 5.2131 8.90658 5.54102V8.9056H5.54199C5.21407 8.9056 4.94824 9.17143 4.94824 9.49935C4.94824 9.82727 5.21407 10.0931 5.54199 10.0931H8.90658V13.4577C8.90658 13.7856 9.17241 14.0514 9.50033 14.0514C9.82824 14.0514 10.0941 13.7856 10.0941 13.4577V10.0931H13.4587C13.7866 10.0931 14.0524 9.82727 14.0524 9.49935C14.0524 9.17143 13.7866 8.9056 13.4587 8.9056H10.0941V5.54102Z" fill="white"/>
                </svg>`}}),"Add New ",g]})]})]}),s.jsx("div",{className:" grid grid-cols-1",children:s.jsx(te.Provider,{value:{getlist:A,query:o,total:(n==null?void 0:n.total)||[],page:x,SetPage:r,role:t},children:s.jsx(se,{loading:l,tableData:n==null?void 0:n.data,getlist:A,columns:U})})})]}),s.jsx("div",{className:"mt-[38px] ",children:s.jsx("div",{className:"font-semibold"})}),s.jsx(ne,{changeParams:i,item:{},getlist:A,role:t,modalOPen:E,setModalOpen:N})]})};export{be as default};