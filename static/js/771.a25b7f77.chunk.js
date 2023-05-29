"use strict";(self.webpackChunkdelivery_app_test_task=self.webpackChunkdelivery_app_test_task||[]).push([[771],{771:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(439),i=e(791),o=e(689),c=e(410),p=e(65),a=e(402),d=e(184);function x(n){var t=n.getList,e=(0,i.useState)([]),x=(0,r.Z)(e,2),u=x[0],s=x[1],l=(0,i.useState)("idle"),f=(0,r.Z)(l,2),g=f[0],h=f[1],b=(0,i.useState)([]),Z=(0,r.Z)(b,2),m=Z[0],v=Z[1];(0,i.useEffect)((function(){h("pending"),(0,c.nj)().then((function(n){return n.ok?n.json():Promise.reject("Error")})).then((function(n){if(0!==n.length){s(n),h("resolved"),t(n);var e=[];n.map((function(n){return e.push(n.id)})),v(e)}else h("rejected")})).catch((function(n){h("rejected")}))}),[]);return(0,d.jsxs)("div",{children:["pending"===g&&(0,d.jsx)(a.s5,{strokeColor:"#581845",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0}),"rejected"===g&&(0,d.jsx)("h1",{children:"Something went wrong. Please, try again"}),"resolved"===g&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.xv,{children:"Welcome to Food Delivery App. Choose your favorite restaurant."}),(0,d.jsx)(p.aV,{children:u&&u.map((function(n){return(0,d.jsx)("li",{children:m.includes(n.id)?(0,d.jsx)(p.Fg,{to:"/".concat(n.id),onClick:function(){return t=n.id,void v(t);var t},children:n.name}):(0,d.jsx)(p.iB,{children:n.name})},n.id)}))}),(0,d.jsx)(o.j3,{})]})]})}},65:function(n,t,e){e.d(t,{Fg:function(){return j},II:function(){return z},J5:function(){return F},OA:function(){return _},Y9:function(){return k},aV:function(){return v},ck:function(){return y},gM:function(){return S},iB:function(){return B},l0:function(){return P},rH:function(){return C},xn:function(){return O},xv:function(){return w},zx:function(){return A}});var r,i,o,c,p,a,d,x,u,s,l,f,g,h,b=e(168),Z=e(87),m=e(444),v=m.ZP.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: baseline;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),w=m.ZP.p(i||(i=(0,b.Z)(["\n  text-align: center;\n  font-size: 18px;\n  margin: 0 0 30px;\n"]))),j=(0,m.ZP)(Z.OL)(o||(o=(0,b.Z)(["\n  border: 1px solid #c3d1c0;\n  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);\n  background-color: rgba(188, 237, 66, 0.5);\n  text-align: center;\n  font-size: 18px;\n  padding: 6px 20px;\n  border-radius: 4px;\n  &.active {\n    padding: 8px 16px;\n    color: white;\n    background-color: #581845;\n  }\n"]))),y=m.ZP.li(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #c3d1c0;\n  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);\n  background-color: rgba(188, 237, 66, 0.5);\n  width: 190px;\n  text-align: center;\n  font-size: 18px;\n"]))),k=m.ZP.div(p||(p=(0,b.Z)(["\n  display: flex;\n  gap: 60px;\n"]))),P=m.ZP.form(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=m.ZP.input(d||(d=(0,b.Z)(["\n  width: 200px;\n  padding: 2px 6px;\n  font-size: 18px;\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),_=m.ZP.p(x||(x=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n"]))),C=m.ZP.div(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #581845;\n  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);\n  height: 320px;\n  padding: 20px;\n  width: 240px;\n"]))),S=m.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #581845;\n  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);\n  min-width: 880px;\n  padding-top: 20px;\n"]))),F=m.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n  justify-content: flex-end;\n  align-items: baseline;\n  box-shadow: 0px -1px 11px 0px rgba(88, 24, 69, 1);\n  padding: 20px;\n  border-top: 1px solid #581845;\n  background-color: #daf7a6;\n"]))),O=m.ZP.p(f||(f=(0,b.Z)(["\n  margin: 0;\n  font-size: 18px;\n  font-weight: bold;\n"]))),A=m.ZP.button(g||(g=(0,b.Z)(["\n  color: white;\n  background-color: #581845;\n  font-weight: 500;\n  font-size: 18px;\n  padding: 4px 20px;\n  border-radius: 4px;\n  transition: transform 300ms;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),B=m.ZP.p(h||(h=(0,b.Z)(["\n  border: 1px solid #c3d1c0;\n  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);\n  background-color: gray;\n  text-align: center;\n  font-size: 18px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  margin: 0;\n  cursor: no-drop;\n"])))},410:function(n,t,e){e.d(t,{a_:function(){return c},nj:function(){return i},r7:function(){return o}});var r="https://643444ee1c5ed06c95935b39.mockapi.io",i=function(){return fetch("".concat(r,"/products"))},o=function(n){return fetch("".concat(r,"/products/").concat(n))},c=function(n){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch("".concat(r,"/users"),t)}}}]);
//# sourceMappingURL=771.a25b7f77.chunk.js.map