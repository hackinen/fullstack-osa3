(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(15),a=t.n(r),o=t(6),u=t(3),i=t(4),s=t.n(i),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},f=function(e){return s.a.post(d,e).then((function(e){return e.data}))},j=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=(t(38),t(0)),m=function(e){var n=e.text,t=e.val,c=e.handle;return Object(h.jsxs)("div",{children:[n," ",Object(h.jsx)("input",{value:t,onChange:c})]})},O=function(e){var n=e.persons,t=e.deletePerson;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(v,{person:e,deleteThisPerson:function(){return t(e)}},e.name)}))})},v=function(e){var n=e.person,t=e.deleteThisPerson;return Object(h.jsxs)("div",{children:[n.name+" ",n.number,Object(h.jsx)("button",{onClick:t,children:"delete"})]})},p=function(e){var n=e.message,t=e.messageType;return null===n?null:Object(h.jsx)("div",{className:t,children:n})},x=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),s=i[0],d=i[1],v=Object(c.useState)(""),x=Object(u.a)(v,2),w=x[0],g=x[1],y=Object(c.useState)(""),S=Object(u.a)(y,2),k=S[0],P=S[1],T=Object(c.useState)(null),I=Object(u.a)(T,2),C=I[0],D=I[1],E=Object(c.useState)("notification"),J=Object(u.a)(E,2),N=J[0],A=J[1],B=t.filter((function(e){return e.name.includes(k)}));Object(c.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var U=function(e,n){A(n),D(e),setTimeout((function(){D(null)}),5e3)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(p,{message:C,messageType:N}),Object(h.jsx)(m,{text:"filter shown with ",val:k,handle:function(e){P(e.target.value)}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:s,number:w};if(t.map((function(e){return e.name})).includes(s)){var c=window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?")),a=t.find((function(e){return e.name==s})),u=Object(o.a)(Object(o.a)({},a),{},{number:w});c&&(j(u.id,u).then((function(e){l().then((function(e){return r(e)})),U("Updated the number of ".concat(u.name),"notification")})),U("Information of ".concat(u.name," has already been removed from server"),"error"))}else f(n).then((function(e){r(t.concat(e))})),U("Added ".concat(n.name),"notification");d(""),g("")},children:[Object(h.jsx)(m,{text:"name: ",val:s,handle:function(e){d(e.target.value)}}),Object(h.jsx)(m,{text:"number: ",val:w,handle:function(e){g(e.target.value)}}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(O,{persons:B,deletePerson:function(e){window.confirm("Delete ".concat(e.name))&&b(e.id).then((function(n){l().then((function(e){return r(e)})),U("".concat(e.name," removed succesfully"),"notification")})).catch((function(n){U("Information of ".concat(e.name," has already been removed from server"),"error")}))}})]})};a.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0cf2e138.chunk.js.map