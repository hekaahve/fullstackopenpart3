(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),r=t(15),i=t.n(r),u=(t(6),t(4)),a=t(3),l=t.n(a),s="/api/persons",d=function(){return l.a.get(s).then((function(e){return e.data}))},j=function(e){return l.a.post(s,e)},b=function(e,n){return l.a.put("".concat(s,"/").concat(e),n)},f=function(e){return l.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.status}))},h=t(0),O=function(e){var n=e.person,t=e.toggleDelete;return Object(h.jsxs)("li",{children:[n.content,n.name," ",n.number,Object(h.jsx)("button",{onClick:t,children:"Delete"})]})},g=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),a=i[0],l=i[1],s=Object(c.useState)(""),g=Object(u.a)(s,2),m=g[0],p=g[1],x=Object(c.useState)(""),v=Object(u.a)(x,2),w=v[0],S=v[1],C=Object(c.useState)(null),k=Object(u.a)(C,2),y=k[0],D=k[1],F=function(e){var n=e.message;return null===n?null:Object(h.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:n})};Object(c.useEffect)((function(){d().then((function(e){o(e)}))}),[]),console.log("render",t.length,"persons");var L=t.filter((function(e){return 0===e.name.toLowerCase().indexOf(w.toLowerCase())}));return Object(h.jsxs)("div",{style:{border:"2px solid black"},children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(F,{message:y}),Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:w,onChange:function(e){S(e.target.value)}})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.map((function(e){return e.name})).includes(a),c={name:a,number:m};if(!0===n){if(window.confirm("".concat(a," is already added to phonebook, will old number replaced to new one?"))){var r=t.find((function(e){return e.name==c.name})).id;b(r,c).then((function(e){o(t.map((function(n){return n.id!==r?n:e.data}))),l(" "),p(" ")}))}}else j(c).then((function(e){o(t.concat(c)),l(" "),p(" "),D("".concat(a,"' Added")),setTimeout((function(){D(null)}),5e3)}))},children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:a,onChange:function(e){console.log(e.target.value),l(e.target.value)}})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:m,onChange:function(e){console.log(e.target.value),p(e.target.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)("ul",{children:L.map((function(e){return Object(h.jsx)(O,{person:e,toggleDelete:function(){return function(e){var n=t.find((function(n){return n.id===e})).name;window.confirm("Poistetaanko ".concat(n,"?"))&&f(e).then(o(t.filter((function(n){return n.id!==e}))))}(e.id)}},e.name)}))})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),m()},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.b3556dc4.chunk.js.map