import{r as T,$ as C,x as L,j as r,bq as D}from"./index-D0xmOMtE.js";import{E as M}from"./index-BxOk_HLZ.js";const q=({statisticalData:a=[],alarmEvents:y=[],enterBedTime:u,getupAfterTime:g})=>{const{sleepEventsType:m,sleepEventsColor:d}=T.useContext(C),o=[...a.map(e=>({name:m[e.status],startTime:new Date(e.start_time),endTime:new Date(e.end_time),color:d[m[e.status]]})),...y.map(e=>({name:m[e.event_type],startTime:new Date(e.ts),endTime:new Date(e.ts),color:d[m[e.event_type]]}))].filter(e=>e.name),l=[...new Set(o.map(e=>e.name))].filter(Boolean),[i,f]=T.useState(()=>l.reduce((e,t)=>(e[t]=!0,e),{}));L.useEffect(()=>{const e=l.filter(t=>!(t in i));e.length>0&&f(t=>({...t,...e.reduce((s,n)=>({...s,[n]:!0}),{})}))},[l,i]);const b=e=>{f(t=>({...t,[e]:!t[e]}))},E=Math.min(...o.map(e=>e.startTime.getTime())),S=Math.max(...o.map(e=>e.endTime.getTime())),w=o.map(e=>{const t=e.startTime.getTime()===e.endTime.getTime();return{name:e.name,value:[e.startTime.getTime(),e.endTime.getTime(),t?15:10],itemStyle:{color:e.color}}}).filter(e=>i[e.name]);if((a==null?void 0:a.length)===0)return r.jsx(D,{description:"No data available to show"});const j={tooltip:{trigger:"item",formatter:e=>{const t=o[e.dataIndex],s=t.startTime.getTime()===t.endTime.getTime(),n=new Date(t.startTime).toLocaleString();if(s)return`${t.name}<br/>Date & Time: ${n}`;{const c=new Date(t.endTime).toLocaleString(),$=t.endTime-t.startTime,h=Math.floor($/(1e3*60)),x=Math.floor(h/60),p=h%60,v=x>0?`${x} hour(s) ${p} minute(s)`:`${p} minute(s)`;return`<b>${t.name}</b> <br/>Start: ${n}<br/>End: ${c}<br/>Duration: ${v}`}}},grid:{left:"5%",right:"5%",bottom:"15%",containLabel:!1},xAxis:{type:"time",boundaryGap:!0,min:E,max:S,splitNumber:5,axisLabel:{formatter:e=>new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),interval:0,margin:5},axisTick:{show:!0,alignWithLabel:!0}},yAxis:{show:!1},series:[{name:"Events",type:"custom",renderItem:(e,t)=>{const s=t.coord([t.value(0),0]),n=t.coord([t.value(1),0]),c=t.size([0,t.value(2)])[1];return{type:"rect",shape:{x:s[0],y:e.coordSys.height-c+60,width:Math.max(n[0]-s[0],5),height:c},style:{fill:t.style().fill,stroke:"#fff",lineWidth:1}}},encode:{x:[0,1]},data:w}],graphic:u&&g?[{type:"text",left:"5%",bottom:"1%",style:{text:`Enter Bed ${u}`,fontSize:12}},{type:"text",right:"5%",bottom:"1%",style:{text:`Getup After ${g}`,fontSize:12}}]:[]};return r.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 w-full",children:[r.jsx("div",{id:"customLegend",className:"w-full",children:r.jsx("div",{className:"flex flex-wrap gap-4 items-center justify-center",children:l.map(e=>r.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>b(e),children:[r.jsx("div",{id:"legendColorShape",className:"size-3 rounded-[4px] border-2",style:{backgroundColor:i[e]?d[e]:"grey",borderColor:i[e]?"transparent":"#ccc",color:i[e]?"grey":"inherit"}}),r.jsx("div",{children:e})]},e))})}),r.jsx(M,{option:j,style:{height:200,width:"100%"}})]})};export{q as default};