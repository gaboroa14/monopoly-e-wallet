(this["webpackJsonpmonopoly-e-wallet"]=this["webpackJsonpmonopoly-e-wallet"]||[]).push([[0],{35:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),s=n.n(a),i=n(13),r=n(0),o=function(e){var t=e.text,n=e.color,c=e.action,a=e.size;return Object(r.jsx)("button",{className:"button is-".concat(n," is-").concat(a),onClick:c,children:t})},l=n.p+"static/media/logo.35edb2b5.png",j=function(e){var t=e.mb;return Object(r.jsx)("figure",{className:"image container mb-".concat(t," has-ratio"),width:"400",style:{marginTop:"-2rem"},children:Object(r.jsx)("img",{alt:"Logo de Monopoly",src:l})})},u=function(e){var t=e.name,n=e.onTextChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("label",{className:"is-white is-size-4",style:{"letter-spacing":"2px"},children:["Jugador:",Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"input",value:t,onChange:function(e){return n(e)}})]})})},d=n.p+"static/media/marvel.568d8c62.png",b=n.p+"static/media/kuro.cbe4521a.png",m=function(){return Object(r.jsxs)("div",{className:"level has-text-centered is-mobile mt-6",children:[Object(r.jsx)("div",{className:"level-left mt-6",children:Object(r.jsx)("div",{className:"level-item",children:Object(r.jsx)("img",{src:d,alt:"Logo de MARVEL",className:"image has-ratio",width:"125"})})}),Object(r.jsx)("div",{className:"level-right mt-6",children:Object(r.jsx)("div",{className:"level-item",children:Object(r.jsx)("img",{src:b,alt:"Logo de KuroDev",className:"image has-ratio",width:"67"})})})]})},h=n(3),x=n.n(h),O=n(4),f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(O.f)(),l=function(){return""!==n||(x.a.fire("chacho marico mete un nombre"),!1)};return Object(r.jsxs)("section",{className:"section is-centered has-background-danger",style:{height:"100%"},children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{mb:"6"}),Object(r.jsx)(u,{name:n,onTextChange:function(e){return a(e.target.value)}}),Object(r.jsxs)("div",{className:"buttons is-centered mt-6 mb-6",children:[Object(r.jsx)(o,{text:"Crear",color:"primary",action:function(){l()&&x.a.fire({title:"El c\xf3digo de la sala es: AJSK2",text:"Esperando jugadores",confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"Comenzar",cancelButtonText:"Cancelar",showCancelButton:!0}).then((function(e){e.isConfirmed&&x.a.fire({title:"\xbfEst\xe1 seguro que desea comenzar la partida?",confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(e){e.isConfirmed&&s.push("/bank")}))}))},size:"large"}),Object(r.jsx)(o,{text:"Unirse",color:"link",action:function(){l()&&x.a.fire({title:"Introduzca el c\xf3digo de la sala: ",input:"text",inputAttributes:{value:"ldkj"}}).then((function(e){0===e.value.length?x.a.fire({title:"Debe introducir un c\xf3digo v\xe1lido",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}):x.a.fire({title:"El c\xf3digo de la sala es: AJSK2",text:"Esperando jugadores",confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",cancelButtonText:"Cancelar",showCancelButton:!0}).then((function(e){e.isDenied||e.isConfirmed&&s.push("/game")}))}))},size:"large"})]}),Object(r.jsx)(m,{})]}),Object(r.jsx)("div",{className:"hero has-background-danger",children:Object(r.jsx)("div",{className:"hero-body"})})]})},p=(n(35),n(9)),v=n(6),N=function(e){var t=e.playerName,n=e.token,c=e.amount,a=e.action,s=e.gameover,i=e.winner,o=e.winnerScreen;return Object(r.jsxs)("div",{onClick:a,className:"card has-text-centered ".concat(!i&&o?"tint":void 0),style:s?{borderStyle:"solid",borderColor:"#C70000",borderWidth:"1em"}:i?{boxShadow:"0 0 0 0.75rem #f9ee23"}:void 0,children:[Object(r.jsx)("header",{className:"card-header ",children:Object(r.jsx)("div",{className:"card-header-title is-centered",children:Object(r.jsx)("div",{className:"has-background-warning pl-5 pr-5 pt-1 has-text-white",style:{borderRadius:"5px"},children:t})})}),Object(r.jsx)("div",{className:"card-image is-128x128",children:Object(r.jsx)("figure",{className:"image is-4by3 tint",children:Object(r.jsx)("img",{src:n,alt:"token"})})}),Object(r.jsx)("footer",{className:"card-footer",children:Object(r.jsx)("p",{className:"card-footer-item has-text-black is-centered",children:"null"!==c?"\u20a9 ".concat(c):void 0})})]})},B=function(e){var t=e.players,n=e.winner;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"columns is-mobile is-centered has-text-centered mt-1",children:t.map((function(e,t){return n?0===t||1===t?Object(r.jsx)("div",{className:"column is-6",children:Object(r.jsx)(N,Object(v.a)(Object(v.a)({},e),{},{winner:n===e.playerName?n:void 0,winnerScreen:!0}))},t):void 0:0===t||1===t?Object(r.jsx)("div",{className:"column is-6",children:Object(r.jsx)(N,Object(v.a)({},e))},t):Object(r.jsx)("div",{})}))}),Object(r.jsx)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:t.map((function(e,t){return n?2===t||3===t?Object(r.jsx)("div",{className:"column is-6",children:Object(r.jsx)(N,Object(v.a)(Object(v.a)({},e),{},{winner:n===e.playerName?n:void 0,winnerScreen:!0}))},t):void 0:2===t||3===t?Object(r.jsx)("div",{className:"column is-6",children:Object(r.jsx)(N,Object(v.a)({},e))},t):Object(r.jsx)("div",{})}))})]})},g=function(){var e=Object(O.f)(),t=function(t){e.push("/send/".concat(t))},n=[{playerName:"GABOX",token:"http://placekitten.com/128/128",amount:"1000",action:function(){x.a.fire({title:"Su saldo es \u20a91.000",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"})}},{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"~2000",action:function(){return t("ANYI")}},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"~1000",action:function(){return t("AJAV06")}},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"~2000",action:function(){return t("JONABB")}}];return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)(B,{players:n}),Object(r.jsx)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:Object(r.jsx)("div",{className:"column is-12",children:Object(r.jsx)(p.b,{to:"/bankrupt/",children:Object(r.jsx)("div",{className:"box has-text-danger",children:"chao cheo"})})})})]})})},k=function(e){var t=e.number,n=e.action;return Object(r.jsx)("div",{className:"column is-4",children:Object(r.jsx)("div",{onClick:function(e){return n(e)},className:"button is-large has-background-warning has-text-white",value:t,children:t})})},C=function(e){var t=e.onKeyPress;return Object(r.jsx)("div",{className:"columns is-mobile is-3 is-centered has-text-centered",children:Object(r.jsxs)("div",{className:"box has-background-success is-centered has-text-centered is-6",children:[Object(r.jsxs)("div",{className:"columns is-mobile  is-centered",children:[Object(r.jsx)(k,{number:"1",action:function(e,n){return t(e,"1")}}),Object(r.jsx)(k,{number:"2",action:function(e,n){return t(e,"2")}}),Object(r.jsx)(k,{number:"3",action:function(e,n){return t(e,"3")}})]}),Object(r.jsxs)("div",{className:"columns is-mobile  ",children:[Object(r.jsx)(k,{number:"4",action:function(e,n){return t(e,"4")}}),Object(r.jsx)(k,{number:"5",action:function(e,n){return t(e,"5")}}),Object(r.jsx)(k,{number:"6",action:function(e,n){return t(e,"6")}})]}),Object(r.jsxs)("div",{className:"columns is-mobile  ",children:[Object(r.jsx)(k,{number:"7",action:function(e,n){return t(e,"7")}}),Object(r.jsx)(k,{number:"8",action:function(e,n){return t(e,"8")}}),Object(r.jsx)(k,{number:"9",action:function(e,n){return t(e,"9")}})]}),Object(r.jsxs)("div",{className:"columns is-mobile  ",children:[Object(r.jsx)(k,{number:".",action:function(e,n){return t(e,".")}}),Object(r.jsx)(k,{number:"0",action:function(e,n){return t(e,"0")}}),Object(r.jsx)(k,{number:"x",action:function(e,n){return t(e,"x")}})]})]})})},A=function(e){var t=e.leftButton,n=e.rightButton;return Object(r.jsxs)("div",{className:"level is-mobile has-text-black mt-4",children:[Object(r.jsx)("div",{className:"level-item",children:t?Object(r.jsx)("div",{className:"level-left",children:Object(r.jsx)(o,{text:t.text,color:"warning",size:"large",action:t.action})}):void 0}),n?Object(r.jsx)("div",{className:"level-item",children:Object(r.jsx)("div",{className:"level-right",children:Object(r.jsx)(o,{text:n.text,color:"link",size:"large",action:n.action})})}):void 0]})},y=n(15),w=(n(24),function(){var e=Object(O.f)(),t=Object(O.g)(),n=t.user,a=t.bank,s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),m=b[0],h=b[1],f=Object(c.useState)(0),p=Object(i.a)(f,2),N=p[0],B=p[1],g=function(e){var t="".concat(l).concat(e);u(t)},k=function(e,t){switch(t){case".":0!==l.length||m?m||(g("."),h(!0)):(g("0."),h(!0));break;case"x":u(""),h(!1),B(0);break;default:m?N<2&&(g(t),B(N+1)):g(t)}},w=function(){return e.push(a?"/bank":"/game")},T={leftButton:{text:"Atr\xe1s",action:w},rightButton:{text:"Enviar",action:function(){0!==l.length?x.a.fire({title:"\xbfEnviarle \u20a9".concat(l," a ").concat(n,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(e){e.isConfirmed&&(x.a.fire({title:"Enviaste \u20a9".concat(l," a ").concat(n),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),w())})):y.b.error("Introduzca el monto a enviar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{mb:"1"}),Object(r.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(r.jsx)("div",{className:"level-item",children:Object(r.jsxs)("div",{className:"level-left",children:[Object(r.jsx)("strong",{className:"mr-2",children:"Enviando a:"})," ",n]})}),Object(r.jsx)("div",{className:"level-item",children:Object(r.jsxs)("div",{className:"level-right",children:[Object(r.jsx)("strong",{className:"mr-2",children:a?"Saldo de ".concat(n,":"):"Tu saldo es:"})," \u20a9","1.000"]})})]}),Object(r.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(r.jsx)("div",{className:"column is-two-thirds",children:Object(r.jsx)("input",{className:"input is-size-2",value:"\u20a9 ".concat(l),readOnly:!0})})}),Object(r.jsx)(C,{onKeyPress:function(e,t){return k(0,t)}}),Object(r.jsx)(A,Object(v.a)({},T))]})})}),T=function(){var e=Object(O.f)(),t=function(t){x.a.fire({title:"\xbfEst\xe1s seguro que te quebr\xf3 ".concat(t,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&e.push("/gameover")}))},n=[{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",action:function(){return t("ANYI")}},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"null",action:function(){return t("AJAV06")}},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"null",action:function(){return t("JONABB")}},{playerName:"BANCO",token:"http://placekitten.com/128/127",amount:"null",action:function(){return t("BANCO")}}];return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container has-text-black has-text-centered",children:[Object(r.jsx)(j,{mb:"2"}),Object(r.jsx)("h1",{class:"title is-3",style:{marginBottom:"-0.5rem"},children:"\xbfQui\xe9n te llev\xf3 a la bancarrota?"}),Object(r.jsx)(B,{players:n}),Object(r.jsx)(A,Object(v.a)({},{leftButton:{link:"game",text:"Atr\xe1s"}}))]})})},S=n(11),E=n(12),J=function(){var e=Object(O.f)(),t=function(e){x.a.fire({title:"\xbfQue quieres hacer?",showCloseButton:!0,showDenyButton:!0,showCancelButton:!0,denyButtonColor:"green",confirmButtonText:"Pass Go",denyButtonText:"Cobrar",cancelButtonText:"Pagar"}).then((function(t){t.isConfirmed?x.a.fire("Pagado!","","success"):t.isDenied?n(e):t.isDismissed&&c(e)}))},n=function(t){e.push("/withdraw/".concat(t))},c=function(t){e.push("/send/".concat(t,"/t"))},a=[{playerName:"GABOX",token:"http://placekitten.com/128/128",amount:"1000",action:function(){return t("GABOX")}},{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"2000",action:function(){return t("ANYI")}},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"1000",action:function(){return t("AJAV06")}},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"2000",action:function(){return t("JONABB")}}],s={leftButton:{text:Object(r.jsx)(S.a,{icon:E.a}),action:function(){e.push("/history/")}},rightButton:{text:Object(r.jsx)(S.a,{icon:E.e}),action:function(){x.a.fire({title:"\xbfEst\xe1s seguro de que quieres finalizar?",confirmButtonColor:"green",confirmButtonText:"S\xed",cancelButtonColor:"red",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&x.a.fire({title:"Esperando confirmaci\xf3n.",confirmButtonColor:"green",confirmButtonText:"S\xed",cancelButtonColor:"red",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed?(x.a.fire({title:"Partida finalizada con \xe9xito",confirmButtonColor:"green",confirmButtonText:"Aceptar"}),e.push("/winner")):t.isDismissed&&x.a.fire({title:"\xa1Han rechazado el fin del juego!",confirmButtonColor:"green",confirmButtonText:"Aceptar"})}))}))}}};return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)(B,{players:a}),Object(r.jsx)(A,Object(v.a)({},s))]})})},I=function(){var e=Object(O.f)();return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(r.jsx)(j,{mb:"2"}),Object(r.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(r.jsx)("h1",{className:"title is-3",children:"Te quebr\xf3 ANYI"}),Object(r.jsx)(N,{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",gameover:!0}),Object(r.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet/")},children:Object(r.jsx)("span",{className:"icon is-medium",children:Object(r.jsx)(S.a,{icon:E.d})})})]})})},z=function(){var e=Object(O.f)();return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(r.jsx)(j,{mb:"2"}),Object(r.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(r.jsx)("h1",{className:"title is-3",children:"ANYI es el ganador"}),Object(r.jsx)(B,{players:[{playerName:"GABOX",token:"http://placekitten.com/128/128",amount:"1000"},{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"~2000"},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"~1000"},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"~2000"}],winner:"ANYI"}),Object(r.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet/")},children:Object(r.jsx)("span",{className:"icon is-medium",children:Object(r.jsx)(S.a,{icon:E.d})})})]})})},Y=function(){var e=Object(O.f)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),u=l[0],d=l[1],b=Object(c.useState)(0),m=Object(i.a)(b,2),h=m[0],f=m[1],p=Object(O.g)().user,N=function(e){var t="".concat(a).concat(e);s(t)},B=function(e,t){switch(t){case".":0!==a.length||u?u||(N("."),d(!0)):(N("0."),d(!0));break;case"x":s(""),d(!1),f(0);break;default:u?h<2&&(N(t),f(h+1)):N(t)}},g={leftButton:{text:"Atr\xe1s",action:function(){return e.push("/bank")}},rightButton:{text:"Cobrar",action:function(){0!==a.length?x.a.fire({title:"\xbfCobrarle \u20a9".concat(a," a ").concat(p,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&(x.a.fire({title:"Cobraste \u20a9".concat(a," a ").concat(p),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),e.push("/bank"))})):y.b.error("Introduzca el monto a cobrar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{mb:"1"}),Object(r.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(r.jsx)("div",{className:"level-item",children:Object(r.jsxs)("div",{className:"level-left",children:[Object(r.jsx)("strong",{className:"mr-2",children:"Cobrando a:"})," ",p]})}),Object(r.jsx)("div",{className:"level-item",children:Object(r.jsxs)("div",{className:"level-right",children:[Object(r.jsxs)("strong",{className:"mr-2",children:["Saldo de ",p,":"]}),"  \u20a9","1.000"]})})]}),Object(r.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(r.jsx)("div",{className:"column is-two-thirds",children:Object(r.jsx)("input",{className:"input is-size-2 has-text-centered",value:"\u20a9 ".concat(a),readOnly:!0})})}),Object(r.jsx)(C,{onKeyPress:function(e,t){return B(0,t)}}),Object(r.jsx)(A,Object(v.a)({},g))]})})},V=function(e){var t=e.transactions;return Object(r.jsxs)("table",{className:"table is-small",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Nro"}),Object(r.jsx)("th",{children:"Envi\xf3"}),Object(r.jsx)("th",{children:"Recibi\xf3"}),Object(r.jsx)("th",{children:"Monto"}),Object(r.jsx)("th",{children:"Hora"})]})}),Object(r.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.index}),Object(r.jsx)("td",{children:e.sender}),Object(r.jsx)("td",{children:e.receiver}),Object(r.jsxs)("td",{children:["\u20a9",e.amount]}),Object(r.jsx)("td",{children:e.hour})]})}))})]})},D=function(){var e=Object(O.f)(),t={leftButton:{text:Object(r.jsx)(S.a,{icon:E.c}),action:function(){return e.push("/bank")}},rightButton:{text:Object(r.jsx)(S.a,{icon:E.b}),action:function(){return x.a.fire("AUXILIO ME DESMAYO CALLESE VIEJO LESBIANO")}}};return Object(r.jsx)("section",{className:"section is-centered",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{mb:"0"}),Object(r.jsx)(A,Object(v.a)({},t)),Object(r.jsx)(V,{transactions:[{index:"4",sender:"ANYI",receiver:"GABOX",amount:"1000",hour:"04:44 p.m."},{index:"3",sender:"AJAV06",receiver:"GABOX",amount:"125",hour:"04:42 p.m."},{index:"2",sender:"JONABB",receiver:"AJAV06",amount:"2500",hour:"04:38 p.m."},{index:"1",sender:"GABOX",receiver:"ANYI",amount:"37",hour:"04:34 p.m."}]})]})})};var G=function(){return Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(O.c,{children:[Object(r.jsx)(O.a,{path:"/monopoly-e-wallet/",exact:!0,children:Object(r.jsx)(f,{})}),Object(r.jsx)(O.a,{path:"/game/",exact:!0,children:Object(r.jsx)(g,{})}),Object(r.jsx)(O.a,{path:"/send/:user/:bank?",children:Object(r.jsx)(w,{})}),Object(r.jsx)(O.a,{path:"/bankrupt/",exact:!0,children:Object(r.jsx)(T,{})}),Object(r.jsx)(O.a,{path:"/bank/",exact:!0,children:Object(r.jsx)(J,{})}),Object(r.jsx)(O.a,{path:"/gameover/",exact:!0,children:Object(r.jsx)(I,{})}),Object(r.jsx)(O.a,{path:"/winner/",exact:!0,children:Object(r.jsx)(z,{})}),Object(r.jsx)(O.a,{path:"/withdraw/:user",exact:!0,children:Object(r.jsx)(Y,{})}),Object(r.jsx)(O.a,{path:"/history/",exact:!0,children:Object(r.jsx)(D,{})})]}),Object(r.jsx)(y.a,{})]})};s.a.render(Object(r.jsx)(G,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7b5dafee.chunk.js.map