import{bZ as D,fa as ce,b$ as de,fb as z,fc as ue,fd as me,fe,ab as G,ct as Z,ff as xe,fg as he,fh as X,fi as ge,z as be,r as d,aw as Ce,_ as b,j as o,E,aA as y,ay as je,B as U,aL as O,a0 as pe,I as Q,aF as Se}from"./index-CPi8G-lc.js";import{u as Te,d as ve,c as Be}from"./elderly-biEcHDM7.js";import{C as ze}from"./UseCustomContext-CnsOb8Ii.js";import{R as ke}from"./PullRequestOutlined-CV_MZFZo.js";const Ae=s=>{const t=s!=null&&s.algorithm?D(s.algorithm):D(z),r=Object.assign(Object.assign({},ce),s==null?void 0:s.token);return de(r,{override:s==null?void 0:s.token},t,ue)};function Ee(s){const{sizeUnit:t,sizeStep:r}=s,a=r-2;return{sizeXXL:t*(a+10),sizeXL:t*(a+6),sizeLG:t*(a+2),sizeMD:t*(a+2),sizeMS:t*(a+1),size:t*a,sizeSM:t*a,sizeXS:t*(a-1),sizeXXS:t*(a-1)}}const ye=(s,t)=>{const r=t??z(s),a=r.fontSizeSM,m=r.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},r),Ee(t??s)),me(a)),{controlHeight:m}),fe(Object.assign(Object.assign({},r),{controlHeight:m})))},u=(s,t)=>new G(s).setAlpha(t).toRgbString(),C=(s,t)=>new G(s).lighten(t).toHexString(),Oe=s=>{const t=Z(s,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},we=(s,t)=>{const r=s||"#000",a=t||"#fff";return{colorBgBase:r,colorTextBase:a,colorText:u(a,.85),colorTextSecondary:u(a,.65),colorTextTertiary:u(a,.45),colorTextQuaternary:u(a,.25),colorFill:u(a,.18),colorFillSecondary:u(a,.12),colorFillTertiary:u(a,.08),colorFillQuaternary:u(a,.04),colorBgSolid:u(a,.95),colorBgSolidHover:u(a,1),colorBgSolidActive:u(a,.9),colorBgElevated:C(r,12),colorBgContainer:C(r,8),colorBgLayout:C(r,0),colorBgSpotlight:C(r,26),colorBgBlur:u(a,.04),colorBorder:C(r,26),colorBorderSecondary:C(r,19)}},Ie=(s,t)=>{const r=Object.keys(xe).map(m=>{const h=Z(s[m],{theme:"dark"});return new Array(10).fill(1).reduce((j,c,x)=>(j[`${m}-${x+1}`]=h[x],j[`${m}${x+1}`]=h[x],j),{})}).reduce((m,h)=>(m=Object.assign(Object.assign({},m),h),m),{}),a=t??z(s);return Object.assign(Object.assign(Object.assign({},a),r),he(s,{generateColorPalettes:Oe,generateNeutralColorPalettes:we}))};function Ne(){const[s,t,r]=be();return{theme:s,token:t,hashId:r}}const Me={defaultSeed:X.token,useToken:Ne,defaultAlgorithm:z,darkAlgorithm:Ie,compactAlgorithm:ye,getDesignToken:Ae,defaultConfig:X,_internalContext:ge};function Xe({setModalOpen:s,modalOpen:t,mode:r="create",diseases:a,custom_condition:m=[],elderly_id:h}){const{token:j}=Me.useToken(),{elderlyDetails:c,getElderlyDetails:x}=d.useContext(ze),[w,I]=d.useState((c==null?void 0:c.diseases)||[]);d.useRef((c==null?void 0:c.diseases)||[]);const[g,v]=d.useState(null),[k,q]=d.useState(!1),[N,Re]=d.useState(!1),[J,W]=d.useState("");d.useState("");const[p,M]=d.useState(""),[B,R]=d.useState(""),[F,P]=d.useState(""),$=d.useRef(null),Y=d.useRef(null),V=d.useRef(null);d.useEffect(()=>{t||v([]),I(c==null?void 0:c.diseases),v(_(c==null?void 0:c.comments))},[t]),d.useEffect(()=>{v(_(c==null?void 0:c.comments))},[c]);const{register:Fe,handleSubmit:K,reset:ee,formState:{errors:Pe}}=Ce(),te=e=>{console.log("data==============>",e),console.log({...e,diseaseText:w,customText:g})},H=d.useCallback(e=>{Te({id:c==null?void 0:c._id,data:{diseases:e}}).then(()=>{b.custom(n=>o.jsx(E,{t:n,text:"Diseases have been updated!"})),x()}).catch(n=>{b.custom(l=>o.jsx(y,{t:l,title:"Error",text:n.message}))})},[c]),se=()=>r==="create"?"Create Health Condition":"Update Health Condition";d.useEffect(()=>{var e,n;k&&((e=$.current)==null||e.focus()),N&&((n=Y.current)==null||n.focus())},[k,N]);const oe=(e,n,l)=>{n(e.filter(i=>i!==l)),console.log(e.filter(i=>i!==l)),H(e.filter(i=>i!==l))},ne=(e,n,l)=>{n(e.filter(i=>i._id!==l._id)),ve({id:h,data:e,commentId:l._id}).then(i=>{b.custom(f=>o.jsx(E,{t:f,text:"Comment has been deleted!"})),x()}).catch(i=>{b.custom(f=>o.jsx(y,{t:f,title:"Error",text:i.message}))})},ae=(e,n)=>{n(e.target.value)};function re(){p&&B?(P(""),Be({id:h,data:{category:p,comment:B}}).then(e=>{b.custom(n=>o.jsx(E,{t:n,text:"Comment has been added!"})),x()}).catch(e=>{b.custom(n=>o.jsx(y,{t:n,title:"Error",text:e.message}))}),M(""),R("")):P("Please select category and write comment."),console.log(p,B)}const L=(e,n,l,i,f)=>{l&&e.indexOf(l)===-1&&n([...e,l]),H([...e,l]),i(!1),f("")},_=e=>{const n={};return e==null||e.forEach(l=>{const{category:i}=l;n[i]||(n[i]=[]),n[i].push(l)}),n},le=(e,n,l,i,f,S,A,ie="")=>o.jsx("div",{className:"w-fit flex flex-wrap gap-1 h-auto",children:o.jsxs(U,{theme:{token:{colorPrimary:"#8086AC",fontSize:"15px"}},children:[e==null?void 0:e.map((T,$e)=>o.jsx(O,{closable:!0,color:"#7E60BF",onClose:()=>oe(e,n,T),children:T},T)),l?o.jsx(Q,{ref:f,type:"text",size:"small",style:{width:120,marginTop:8,paddingLeft:"10px"},value:S,onChange:T=>ae(T,A),onBlur:()=>L(e,n,S,i,A),onPressEnter:()=>L(e,n,S,i,A)}):ie!=="customText"&&o.jsxs(O,{onClick:()=>i(!0),style:{background:j.colorBgContainer,borderStyle:"dashed",marginTop:8},children:[o.jsx(ke,{})," Create New"]})]})});return o.jsx(je,{handleSubmit:K(te),modalOPen:t,setModalOpen:s,title:se(),buttonText:r==="create"?"Create":"Update",isBottomButtomShow:!1,onclose:()=>{ee()},children:o.jsxs("div",{children:[o.jsxs("div",{className:"mb-4 flex flex-col gap-2",children:[o.jsxs("p",{className:"text-base font-semibold text-[#7E60BF] leading-none flex items-center gap-2",children:[o.jsx("div",{id:"dot",className:"w-2 h-2 bg-[#7E60BF] rounded-full"})," ","Diseases"]}),le(w||[],I,k,q,$,J,W,"diseaseText")]}),g&&Object.keys(g).map((e,n)=>o.jsxs("div",{className:"mb-4",children:[o.jsxs("p",{className:`text-base font-semibold ${e==="Allergies"?"text-[#4ca6cf]":e==="Disabilities"?"text-[#f37f13]":"text-[#0a0a2b]"}  leading-none flex items-center gap-2 mb-2`,children:[o.jsx("div",{id:"dot",className:`w-2 h-2 ${e==="Allergies"?"bg-[#4ca6cf]":e==="Disabilities"?"bg-[#f37f13]":"bg-[#0a0a2b]"}  rounded-full`})," ",e]}),Array.isArray(g[e])?g[e].map((l,i)=>o.jsx(U,{theme:{token:{colorPrimary:"#8086AC",fontSize:"15px"}},children:o.jsx(O,{closable:!0,color:l.category==="Allergies"?"#4ca6cf":l.category==="Disabilities"?"#f37f13":"#0a0a2b",onClose:()=>ne(g[e],f=>{v(S=>({...S,[e]:f}))},l),children:l.comment})},i)):o.jsx("p",{children:"No items available for this category"})]},n)),o.jsxs("div",{className:"mb-4 flex flex-col gap-1",children:[o.jsx("h3",{children:"Add New Comments"}),o.jsx(pe,{placeholder:"Select a category",style:{width:"100%"},size:"large",onChange:M,value:p||null,options:[{value:"Allergy",label:"Allergy"},{value:"Disability",label:"Disability"},{value:"Custom Text",label:"Custom Text"}]}),o.jsxs("div",{className:"flex mb-2",children:[o.jsx(Q,{ref:V,value:B,onChange:e=>R(e.target.value),placeholder:"Enter comment",style:{flex:1,paddingLeft:"10px"}}),o.jsx(Se,{onClick:re,type:"primary",style:{marginLeft:8,backgroundColor:"#252f67",width:"100px"},children:"Add"})]}),F&&o.jsx("p",{className:"text-red-500",children:F})]})]})})}export{Xe as H};