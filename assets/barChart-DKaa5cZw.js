import{r as j,j as A,bq as q}from"./index-Br_GEqdo.js";import{E as N}from"./index-CRbLI1Fq.js";import"./helper-DzRZPsxz.js";function H({data:c,dataType:d,color:x,chartType:y="Day",toDate:k,fromDate:D,xUnit:f="date",hourLimit:S=12,numberLimit:B=100,dataUnit:z="",chartFor:p=""}){const _=j.useMemo(()=>{if(!(c!=null&&c.length))return null;function I(t){const a=Array.from({length:67},(i,o)=>{const b=60+o*10,v=Math.floor(b/60),w=b%60;return w===0?`${v} hr`:`${v} hr ${w} min`}),u=new Array(a.length).fill(0);t==null||t.forEach(i=>{const o=Math.floor((i.sleep_total_time-60)/10);o>=0&&o<u.length&&u[o]++});const r=u.reduce((i,o)=>i+o,0),l=u.map(i=>r>0?(i/r*100).toFixed(0):"0");return{xaxis:a,data:l}}function E(t){const a=Array.from({length:10},(i,o)=>`${0+o*10}-${0+(o+1)*10}`),u=new Array(a.length).fill(0);t==null||t.forEach(i=>{const o=Math.floor(p!=="deepSleepPercentageDistribution"?(i==null?void 0:i.sleep_efficiency)/10:(i==null?void 0:i.sleep_quality)/10);o>=0&&o<u.length&&u[o]++});const r=t.length,l=u.map(i=>r>0?(i/r*100).toFixed(0):"0");return{xaxis:a,data:l}}function R(t){const e=Array.from({length:6},(l,i)=>`${i*5}-${(i+1)*5}`),a=new Array(e.length).fill(0);t==null||t.forEach(l=>{const i=parseFloat(l.ahi),o=Math.floor(i/5);o>=0&&o<a.length&&a[o]++});const u=t.length,r=a.map(l=>u>0?(l/u*100).toFixed(0):"0");return{xaxis:e,data:r}}function M(t){const e=Array.from({length:12},(l,i)=>`${i*10}-${(i+1)*10}`),a=new Array(e.length).fill(0);t==null||t.forEach(l=>{const i=l.totalFallAsleepDuration,o=Math.floor(i/10);o>=0&&o<a.length&&a[o]++});const u=t.length,r=a.map(l=>u>0?(l/u*100).toFixed(0):"0");return{xaxis:e,data:r}}function C(t){const n={xaxis:Array.from({length:31},(r,l)=>l+6).map(r=>r.toString()),data:Array(31).fill(0)};let e=Array(31).fill(0),a=0;t.forEach(r=>{const l=r.data_list.filter(o=>o!=="-1"&&o!=="0").map(Number);let i=Array(31).fill(0);l.forEach(o=>{if(o>=6&&o<=36){const b=o-6;i[b]++}}),i.forEach((o,b)=>{e[b]+=o})});const u=e.filter(r=>r>0);return a=u.length,n.data=e.map(r=>r>0?(console.log(a,u.reduce((l,i)=>l+i,0)/100),(r/u.reduce((l,i)=>l+i,0)*100).toFixed(2)):"0.00"),n}const h=["45-50","50-55","55-60","60-65","65-70","70-75","75-80","80-85","85-90","90-95","95-100","100-105","105-110","110-115","115-120"],O=t=>{const s=new Array(h.length).fill(0);t==null||t.forEach(a=>{a.data_list.forEach(u=>{if(u>0)for(let r=0;r<h.length;r++){const[l,i]=h[r].split("-").map(Number);if(u>=l&&u<i){s[r]+=1;break}}})});const n=t==null?void 0:t.reduce((a,u)=>a+u.data_list.filter(r=>r>0).length,0),e=s.map(a=>(a/n*100).toFixed(0));return{xaxis:h,data:e}},g=(()=>{if(f==="number"){if(p==="apneaIndexDistribution"){const{xaxis:t,data:s}=R(c);return t.map((n,e)=>({number:n,value:s[e]}))}else if(p==="heartRateDistribution"){const{xaxis:t,data:s}=O(c);return t.map((n,e)=>({number:n,value:s[e]}))}else if(p==="breathRateDistribution"){const{xaxis:t,data:s}=C(c);return t.map((n,e)=>({number:n,value:s[e]}))}}if(f==="hour")if(c&&c.length>0&&p==="durationDistribution"){const{xaxis:t,data:s}=I(c);return t.map((n,e)=>({hour:n,percentage:parseInt(n,10),value:s[e]}))}else if(c&&c.length>0&&p==="fallAsleepDurationDistribution"){const{xaxis:t,data:s}=M(c);return t.map((n,e)=>({hour:n,percentage:parseInt(n,10),value:s[e]}))}else return Array.from({length:S},(t,s)=>({hour:s,value:0,percentage:0}));else if(f==="percentage")if(p==="efficiencyDistribution"||p==="deepSleepPercentageDistribution"){const{xaxis:t,data:s}=E(c);return console.log("data===================>",c),t.map((n,e)=>({percentage:n,value:s[e]}))}else{const t=Array.from({length:11},(n,e)=>e*10),s=new Map(c.map(n=>[Math.floor(n.sleep_efficiency/10)*10,{value:n.sleep_efficiency,date:n.date}]));return t.map(n=>{var e,a;return{percentage:n,value:((e=s.get(n))==null?void 0:e.value)||0,date:((a=s.get(n))==null?void 0:a.date)||null}})}else{const s=((e,a)=>{const u=[],r=new Date(e),l=new Date(a);for(;r<=l;)u.push(new Date(r).toISOString().split("T")[0]),r.setDate(r.getDate()+1);return u})(D,k),n=new Map(c.map(e=>[e.date.split("T")[0],e.ratio||e.walk_speed||e.bed_exit_duration||e.value||e.sleep_time||e.ahi||p==="walkingStepsStatistix"&&e.walking_stpes||e.anomalyHeartRate||e.sleep_efficiency||(e.leave_bed_count&&p==="numberOfBedExitTime"?e.leave_bed_count:null)||(e.sleep_quality&&p!=="numberOfBedExitTime"&&p!=="roomInOut"&&p==="deepSleepPercentageStatistic"?e.sleep_quality:null)||(e.entry_exit_count&&p==="roomInOut"?e.entry_exit_count:null)||p==="sleedDurationStatistic"&&e.sleep_total_time||e.totalFallAsleepDuration||"--"]));return s.map(e=>({date:e,value:n.get(e)||0}))}})(),$=(t,s="axis")=>{if(f==="percentage"||d==="percentage")return`${t}%`;if(d==="duration"){const n=Math.floor(t/60),e=t%60;return n>0?`${n}h ${e}m`:`${e}m`}return t},m=t=>{if(f==="number")return t==null?void 0:t.toString();if(f==="hour")return`${t}`;if(f==="percentage")return`${t}%`;if(y==="Week"){const n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=new Date(t);return n[e.getDay()]}return new Date(t).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit"}).replace("/","-")};return{xAxis:{type:"category",data:g.map(t=>m(f==="hour"?t.hour:f==="percentage"?t.percentage:f==="number"?t.number:t.date))},grid:{top:"5%",left:"8%",bottom:"5%",right:"2%"},yAxis:{type:"value",axisLabel:{formatter:$},max:f==="percentage"||d==="percentage"?100:void 0},series:[{data:g.map(t=>t.value),type:"bar",barWidth:10,itemStyle:{color:x||"#000",borderRadius:[50,50,0,0]}}],tooltip:{trigger:"axis",formatter:t=>{if(f==="number")if(p!=="apneaIndexDistribution"){const e=g[t[0].dataIndex];return`<div style="margin-top: 4px">
              <span >${e.value}%</span>
              <br>
              <span style="font-weight: bold">${e.number} BPM</span>
              </div>`}else{const e=g[t[0].dataIndex];return`<div style="margin-top: 4px">
              <span style="font-weight: bold">${e.value}%</span>
              <br>
              <span style="font-weight: normal">${e.number}</span>
              </div>`}else if(f==="hour"){const e=g[t[0].dataIndex];return`<div style="margin-top: 4px">
                    ${e.value?`<span>${e.value}%</span>`:"--"}
                    <br>
                    <span style="font-weight: bold">${e.hour}</span>
                    </div>`}else if(f==="percentage"){const e=g[t[0].dataIndex];if(e.date){const a=new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"-");return`<div style="font-weight: bold">${e.value}%</div>
                     <div style="margin-top: 4px">${a}</div>`}return`<div style="font-weight: bold"> ${e.value}% <br/> <span style="font-weight: normal">${e.percentage}%</span></div>`}const s=g[t[0].dataIndex].date;return`<div style="font-weight: bold">${new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"-")}</div>
                  <div style="margin-top: 4px">${$(t[0].value)}${z}</div>`}}}},[c,d,x,y,D,k,f,S,B]);return!(c!=null&&c.length)||!_?A.jsx(q,{description:"No data available to show"}):A.jsx(N,{option:_,style:{height:"350px"}})}export{H as default};