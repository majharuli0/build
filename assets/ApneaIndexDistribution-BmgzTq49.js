import{r as t,d as m,fq as Y,j as c}from"./index-D0xmOMtE.js";import{C as b}from"./UseCustomContext-9rTaSiHK.js";import g from"./barChart-efLVugwD.js";import{T as h}from"./Template-Cnkd6J26.js";import{g as A}from"./utiles-Cy_L3y0-.js";import"./index-BxOk_HLZ.js";import"./helper-DzRZPsxz.js";import"./WeeklyMonthlyPicker-D7Iww9wY.js";import"./SwapRightOutlined-DMXrNSIw.js";import"./weekOfYear-BkhFIwP_.js";import"./index-DG0K53Xh.js";import"./weekday-yIKgASdp.js";import"./index-Brbkjnc6.js";import"./index-D3aJ0k2l.js";import"./index-CcFotKs9.js";import"./index-BFkuxmCm.js";import"./index-DKfU8aQ_.js";function H(){const{title:p,color:r,icon:d,dataAnalysis:u}=A("Apnea Index Distribution"),f=t.useContext(b),{chartToDate:o="",chartFromDate:s="",elderlyDetails:a}=f||{},[i,D]=t.useState(m().subtract(1,"day").format("YYYY-MM-DD")),[x,l]=t.useState(m().subtract(31,"day").format("YYYY-MM-DD")),[I,S]=t.useState([]),n=t.useCallback(()=>{Y({uids:a==null?void 0:a.deviceId,to_date:x,from_date:i}).then(e=>{S(e.data),console.log(e.data)}).catch(e=>{console.log(e)})},[i,a]);return t.useEffect(()=>{n()},[n]),t.useEffect(()=>{o&&s&&(D(o),l(s))},[o]),c.jsx(h,{title:p,color:r,icon:d,dataAnalysis:u,isSummaryBtn:!1,children:c.jsx(g,{data:I,color:r,dataType:"percentage",fromDate:"",toDate:"",dataUnit:" ",xUnit:"number",chartFor:"apneaIndexDistribution"})})}export{H as default};