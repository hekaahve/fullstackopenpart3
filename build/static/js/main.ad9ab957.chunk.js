(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(15),i=n.n(r),u=(n(6),n(3)),a=n(4),l=n.n(a),s="/api/persons",d=function(){return l.a.get(s).then((function(e){return e.data}))},j=function(e){return l.a.post(s,e)},b=function(e,t){return l.a.put("".concat(s,"/").concat(e),t)},f=function(e){return l.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.status}))},h=n(0),O=function(e){var t=e.person,n=e.toggleDelete;return Object(h.jsxs)("li",{children:[t.content,t.name," ",t.number,Object(h.jsx)("button",{onClick:n,children:"Delete"})]})},g=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),a=i[0],l=i[1],s=Object(c.useState)(""),g=Object(u.a)(s,2),p=g[0],m=g[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),w=v[0],S=v[1],C=Object(c.useState)(null),k=Object(u.a)(C,2),y=k[0],D=k[1],F=function(e){var t=e.message;return null===t?null:Object(h.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:t})};Object(c.useEffect)((function(){d().then((function(e){o(e)}))}),[]);var L=n.filter((function(e){return 0===e.name.toLowerCase().indexOf(w.toLowerCase())}));return Object(h.jsxs)("div",{style:{border:"2px solid black"},children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(F,{message:y}),Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:w,onChange:function(e){S(e.target.value)}})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.map((function(e){return e.name})).includes(a),c={name:a,number:p};if(!0===t){if(window.confirm("".concat(a," is already added to phonebook, will old number replaced to new one?"))){var r=n.find((function(e){return e.name==c.name})).id;b(r,c).then((function(e){o(n.map((function(t){return t.id!==r?t:e.data}))),l(" "),m(" ")}))}}else j(c).then((function(e){o(n.concat(c)),l(" "),m(" "),D("".concat(a,"' Added")),setTimeout((function(){D(null)}),5e3)})).catch((function(e){console.log(e.response.data),D(e.response.data.error.toString()),setTimeout((function(){D(null)}),5e3)}))},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:a,onChange:function(e){console.log(e.target.value),l(e.target.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:p,onChange:function(e){console.log(e.target.value),m(e.target.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)("ul",{children:L.map((function(e){return Object(h.jsx)(O,{person:e,toggleDelete:function(){return function(e){var t=n.find((function(t){return t.id===e})).name;window.confirm("Poistetaanko ".concat(t,"?"))&&f(e).then(o(n.filter((function(t){return t.id!==e}))))}(e.id)}},e.id)}))})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),p()},6:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.ad9ab957.chunk.js.map