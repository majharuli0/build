import{c as o}from"./index-CobdpRh7.js";function u(e){return console.log(e),o({url:`/admin/user/overViewCount?id=${e.id}`,method:"post",data:e})}function n(e){return o({url:`/admin/user/getById?userId=${e.id}`,method:"post",data:e})}function t(e){return o({url:"/admin/bill/billCount",method:"post",data:e})}function i(e){return o({url:"/admin/bill/page",method:"post",data:e})}export{u as a,t as b,i as c,n as u};