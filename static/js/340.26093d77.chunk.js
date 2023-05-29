"use strict";(self.webpackChunkdelivery_app_test_task=self.webpackChunkdelivery_app_test_task||[]).push([[340],{340:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r=t(142);function i(n,e,t){return(e=(0,r.Z)(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var a,p,d,u=t(439),s=t(168),l=t(444),x=l.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: baseline;\n  margin: 0 auto;\n  gap: 8px;\n"]))),f=l.ZP.img(p||(p=(0,s.Z)(["\n  margin-bottom: 10px;\n"]))),g=l.ZP.p(d||(d=(0,s.Z)(["\n  margin: 0 0 10px;\n"]))),h=t(184);function b(n){var e=n.id,t=n.image,r=n.product,i=n.price,o=n.quantity,c=n.increaseProduct,a=n.decreaseProduct,p=o*i;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{src:t,alt:r,width:"200",height:"132"}),(0,h.jsx)(g,{children:r}),(0,h.jsxs)(g,{children:[i," \u20b4"]}),(0,h.jsxs)(x,{children:[(0,h.jsx)("button",{type:"button",onClick:function(){a({id:e,image:t,product:r,price:i,quantity:1})},children:"-"}),(0,h.jsxs)(g,{children:[o," pcs"]}),(0,h.jsx)("button",{type:"button",onClick:function(){c({id:e,image:t,product:r,price:i,quantity:1})},children:"+"})]}),(0,h.jsxs)(g,{children:["Total: ",p," \u20b4"]})]})}var m=t(791),j=t(410),y=t(65),Z={name:"",email:"",phone:"",address:""};function P(n){var e=n.total,t=n.addedProducts,r=n.increaseProduct,o=n.decreaseProduct,a=(0,m.useState)(Z),p=(0,u.Z)(a,2),d=p[0],s=p[1],l=function(n){var e=n.currentTarget;s(c(c({},d),{},i({},e.name,e.value)))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(y.Y9,{children:[(0,h.jsxs)(y.rH,{children:[(0,h.jsx)(y.OA,{children:"Add your delivery information:"}),(0,h.jsxs)(y.l0,{children:[(0,h.jsx)(y.II,{type:"text",name:"name",placeholder:"Name",onChange:l}),(0,h.jsx)(y.II,{type:"email",name:"email",placeholder:"Email",onChange:l}),(0,h.jsx)(y.II,{type:"tel",name:"phone",placeholder:"Phone",onChange:l}),(0,h.jsx)(y.II,{type:"text",name:"address",placeholder:"Address",onChange:l})]})]}),(0,h.jsxs)(y.gM,{children:[t&&(0,h.jsx)(y.aV,{children:t&&t.map((function(n){return(0,h.jsx)(y.ck,{children:(0,h.jsx)(b,{id:n.id,image:n.image,product:n.product,price:n.price,quantity:n.quantity,increaseProduct:r,decreaseProduct:o})},n.id)}))}),(0,h.jsxs)(y.J5,{children:[(0,h.jsxs)(y.xn,{children:["Total order: ",e," \u20b4"]}),(0,h.jsx)(y.zx,{type:"submit",onClick:function(n){n.preventDefault();var r={user:d,order:t,total:e};console.log(r),(0,j.a_)(r)},children:"Submit"})]})]})]})})}},65:function(n,e,t){t.d(e,{Fg:function(){return v},H9:function(){return P},II:function(){return C},J5:function(){return S},OA:function(){return I},Y9:function(){return O},aV:function(){return y},ck:function(){return w},gM:function(){return _},l0:function(){return k},rH:function(){return z},xn:function(){return q},xv:function(){return Z},zx:function(){return D}});var r,i,o,c,a,p,d,u,s,l,x,f,g,h,b=t(168),m=t(87),j=t(444),y=j.ZP.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  margin: 0;\n  padding: 20px;\n"]))),Z=j.ZP.p(i||(i=(0,b.Z)(["\n  text-align: center;\n  font-size: 18px;\n  margin: 0 0 30px;\n"]))),P=j.ZP.li(o||(o=(0,b.Z)(["\n  margin-bottom: 30px;\n"]))),v=(0,j.ZP)(m.OL)(c||(c=(0,b.Z)(["\n  border: 1px solid #c3d1c0;\n  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);\n  background-color: rgba(188, 237, 66, 0.5);\n  text-align: center;\n  font-size: 18px;\n  padding: 6px 20px;\n  &.active {\n    padding: 8px 16px;\n    color: white;\n    background-color: #581845;\n    border-radius: 4px;\n  }\n"]))),w=j.ZP.li(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #c3d1c0;\n  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);\n  background-color: rgba(188, 237, 66, 0.5);\n  width: 190px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),O=j.ZP.div(p||(p=(0,b.Z)(["\n  display: flex;\n  gap: 60px;\n"]))),k=j.ZP.form(d||(d=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=j.ZP.input(u||(u=(0,b.Z)(["\n  width: 200px;\n  padding: 2px 6px;\n  font-size: 18px;\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),I=j.ZP.p(s||(s=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n"]))),z=j.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #581845;\n  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);\n  height: 60vh;\n  padding: 20px;\n  width: 240px;\n"]))),_=j.ZP.div(x||(x=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #581845;\n  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);\n  min-width: 880px;\n"]))),S=j.ZP.div(f||(f=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n  justify-content: flex-end;\n  align-items: baseline;\n  box-shadow: 0px -1px 11px 0px rgba(88, 24, 69, 1);\n  padding: 20px;\n  border-top: 1px solid #581845;\n  background-color: #daf7a6;\n"]))),q=j.ZP.p(g||(g=(0,b.Z)(["\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n"]))),D=j.ZP.button(h||(h=(0,b.Z)(["\n  color: white;\n  background-color: #581845;\n  font-weight: 500;\n  font-size: 18px;\n  padding: 4px 20px;\n  border-radius: 4px;\n  transition: transform 300ms;\n  &:hover {\n    transform: scale(1.1);\n  }\n"])))},410:function(n,e,t){t.d(e,{a_:function(){return c},nj:function(){return i},r7:function(){return o}});var r="https://643444ee1c5ed06c95935b39.mockapi.io",i=function(){return fetch("".concat(r,"/products"))},o=function(n){return fetch("".concat(r,"/products/").concat(n))},c=function(n){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch("".concat(r,"/users"),e)}}}]);
//# sourceMappingURL=340.26093d77.chunk.js.map