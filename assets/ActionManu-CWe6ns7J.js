import{r as a,j as e,aB as h,aC as j,_ as d,E as v,aA as g}from"./index-DQy7c-QQ.js";import{H as E}from"./index-CrMkKcXz.js";import{S as k,b as C}from"./SuccessModal-9xXBwm8d.js";import{a as M}from"./index-C1cvzJY4.js";import"./UseCustomContext-Bv9JlKpe.js";import{u as S}from"./elderlySupport-CnK57CVs.js";function T({row:s}){const[u,n]=a.useState(!1),[p,r]=a.useState(!1),[m,l]=a.useState(!1),x=t=>{n(t)},c=t=>{S({id:t.id,data:{event_status:t.event_status}}).then(i=>{d.custom(o=>e.jsx(v,{t:o,text:"Event Added Successfully!"}))}).catch(i=>{d.custom(o=>e.jsx(g,{t:o,title:"Error",text:i.message}))})},f=e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-1 flex-col m-2",children:[e.jsxs("span",{onClick:()=>l(!0),className:"flex items-center gap-2 justify-start p-2 px-4 w-full mt-2 rounded-md hover:bg-[#008000]/10 cursor-pointer",children:[e.jsx(C,{color:"green"})," Mark As Done"]}),e.jsxs("span",{onClick:()=>r(!0),className:"flex items-center gap-2 justify-start p-2 px-4 mb-2 w-full rounded-md hover:bg-red-500/10 cursor-pointer",children:[e.jsx(M,{color:"red"}),"Close Event"]})]})});return e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{onClick:()=>n(!0),className:"cursor-pointer p-2 hover:bg-[#E8E9EE] rounded-full",children:e.jsx(E,{className:"cursor-pointer"})}),e.jsx(h,{open:u,onOpenChange:x,content:f,placement:"leftTop",trigger:"click"}),e.jsx(j,{onDelete:()=>c({id:s==null?void 0:s._id,event_status:"closed"}),modalOPen:p,setModalOpen:r,title:"Are you sure to close this event?",title2:"This process cannot be undo.",okText:"Close Event"}),e.jsx(k,{modalOPen:m,setModalOpen:l,onOk:()=>c({id:s==null?void 0:s._id,event_status:"open"}),title:"Are you sure to mark this event as done?",title2:"This process cannot be undo."})]})}export{T as A};