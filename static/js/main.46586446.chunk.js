(this["webpackJsonpmonopoly-e-wallet"]=this["webpackJsonpmonopoly-e-wallet"]||[]).push([[0],{94:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c,a,o,r,s=n(1),i=n(29),l=n.n(i),u=n(7),j=n(0),d=function(e){var t=e.text,n=e.color,c=e.action,a=e.size;return Object(j.jsx)("button",{className:"button is-".concat(n," is-").concat(a),onClick:c,children:t})},m=n.p+"static/media/logo.35edb2b5.png",b=function(e){var t=e.mb;return Object(j.jsx)("figure",{className:"image container mb-".concat(t," has-ratio"),width:"400",style:{marginTop:"-2rem"},children:Object(j.jsx)("img",{alt:"Logo de Monopoly",src:m})})},h=function(e){var t=e.name,n=e.onTextChange;return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"is-white is-size-4",style:{letterSpacing:"2px"},children:["Jugador:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",value:t,onChange:function(e){return n(e)}})]})})},O=n.p+"static/media/marvel.568d8c62.png",x=n.p+"static/media/kuro.cbe4521a.png",f=function(){return Object(j.jsxs)("div",{className:"level has-text-centered is-mobile mt-6",children:[Object(j.jsx)("div",{className:"level-left mt-6",children:Object(j.jsx)("div",{className:"level-item",children:Object(j.jsx)("img",{src:O,alt:"Logo de MARVEL",className:"image has-ratio",width:"125"})})}),Object(j.jsx)("div",{className:"level-right mt-6",children:Object(j.jsx)("div",{className:"level-item",children:Object(j.jsx)("img",{src:x,alt:"Logo de KuroDev",className:"image has-ratio",width:"67"})})})]})},v=n(2),g=n.n(v),p=n(4),N=n(19),B=n.n(N),S=function(){var e,t,n=Object(s.useState)(""),a=Object(u.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(1),l=Object(u.a)(i,2),m=l[0],O=l[1],x=Object(s.useState)(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):void 0),v=Object(u.a)(x,2),N=(v[0],v[1]),S=Object(p.f)();(null===(e=JSON.parse(localStorage.getItem("user")))||void 0===e?void 0:e.room.init)&&"bank"===JSON.parse(localStorage.getItem("user")).avatar?S.push("/bank"):(null===(t=JSON.parse(localStorage.getItem("user")))||void 0===t?void 0:t.room.init)&&S.push("/game"),Object(s.useEffect)((function(){return c=B()("http://192.168.43.241:5000"),function(){c.off()}}),[]),Object(s.useEffect)((function(){c.on("person-join-left",(function(e){O(e.quantity),g.a.getHtmlContainer()&&(e.quantity>=3&&g.a.enableButtons(),g.a.getHtmlContainer().innerHTML="Esperando jugadores. ".concat(e.quantity," persona").concat(1!==e.quantity?"s":""," se ha").concat(1!==e.quantity?"n":""," unido."))}))}),[]),Object(s.useEffect)((function(){c.on("room-deleted",(function(){g.a.fire({title:"Se ha cerrado la sala.",confirmButtonText:"Aceptar"}),localStorage.removeItem("user"),N(void 0),O(1)}))}),[]),Object(s.useEffect)((function(){c.on("game-begun",(function(){var e=JSON.parse(localStorage.getItem("user"));e.room.init=!0,localStorage.setItem("user",JSON.stringify(e)),g.a.close(),S.push("bank"===JSON.parse(localStorage.getItem("user")).avatar?"/bank":"/game")}))}),[]);var w=function(){return""!==o||(g.a.fire({title:"\xa1Debes introducir un nombre!",confirmButtonText:"Aceptar"}),!1)};return Object(j.jsxs)("section",{className:"section is-centered has-background-danger",style:{height:"100%"},children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{mb:"6"}),Object(j.jsx)(h,{name:o,onTextChange:function(e){return r(e.target.value)}}),Object(j.jsxs)("div",{className:"buttons is-centered mt-6 mb-6",children:[Object(j.jsx)(d,{text:"Crear",color:"primary",action:function(){O(1),w()&&(localStorage.getItem("user")&&alert("borrar mi sala"),c.emit("create-room",o,(function(e){localStorage.setItem("user",JSON.stringify(e)),N(e),g.a.fire({title:"El c\xf3digo de la sala es: ".concat(e.room._id),text:"Esperando jugadores. ".concat(m," persona").concat(1!==m?"s":""," se ha").concat(1!==m?"n":""," unido."),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"Comenzar",cancelButtonText:"Cancelar",showCancelButton:!0,showConfirmButton:!0}).then((function(e){e.isConfirmed?g.a.fire({title:"\xbfEst\xe1 seguro que desea comenzar la partida?",confirmButtonColor:"#71945B",denyButtonColor:"#B85B28",confirmButtonText:"S\xed",denyButtonText:"No",showDenyButton:!0}).then((function(e){e.isConfirmed&&c.emit("begin-game",JSON.parse(localStorage.getItem("user")).room._id,(function(e){e&&g.a.fire({title:"Error: ".concat(e),icon:"warning"})}))})):e.isDismissed&&JSON.parse(localStorage.getItem("user"))&&c.emit("delete-room",JSON.parse(localStorage.getItem("user")).room._id)})),g.a.showLoading(g.a.getDenyButton())})))},size:"large"}),Object(j.jsx)(d,{text:"Unirse",color:"link",action:function(){w()&&g.a.fire({title:"Introduzca el c\xf3digo de la sala: ",input:"text",inputAttributes:{value:"ldkj"}}).then((function(e){6!==e.value.length?g.a.fire({title:"Debe introducir un c\xf3digo v\xe1lido",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}):c.emit("join",{username:o,room_id:e.value},(function(t){var n=t.error,a=t.user,o=t.quantity;n?g.a.fire({title:"Error: ".concat(n),confirmButtonText:"Aceptar",icon:"warning"}):(N(a),O(o),localStorage.setItem("user",JSON.stringify(a)),g.a.fire({title:"El c\xf3digo de la sala es: ".concat(e.value),text:"Esperando jugadores. ".concat(o," persona").concat(1!==o?"s":""," se ha").concat(1!==o?"n":""," unido."),denyButtonColor:"#B85B28",denyButtonText:"Cancelar",showDenyButton:!0,showConfirmButton:!1}).then((function(e){e.isDenied&&c.emit("delete-user",a._id,(function(e){localStorage.removeItem("user"),N(void 0),O(1)}))})),g.a.showLoading())}))}))},size:"large"})]}),Object(j.jsx)(f,{})]}),Object(j.jsx)("div",{className:"hero has-background-danger",children:Object(j.jsx)("div",{className:"hero-body"})})]})},w=(n(94),n(10)),k=n(6),y=function(e){var t=e.username,n=e.avatar,c=e.amount,a=e.action,o=e.gameover,r=e.winner,s=e.winnerScreen;return Object(j.jsxs)("div",{onClick:a,className:"card has-text-centered ".concat(!r&&s?"tint":void 0),style:o?{borderStyle:"solid",borderColor:"#C70000",borderWidth:"1em"}:r?{boxShadow:"0 0 0 0.75rem #f9ee23"}:void 0,children:[Object(j.jsx)("header",{className:"card-header is-size-3",children:Object(j.jsx)("div",{className:"card-header-title is-centered",children:Object(j.jsx)("div",{className:"has-background-warning pl-5 pr-5 pt-1 has-text-white",style:{borderRadius:"5px"},children:t})})}),Object(j.jsx)("div",{className:"card-image is-128x128 has-text-black is-size-4",children:n}),Object(j.jsx)("footer",{className:"card-footer",children:Object(j.jsx)("p",{className:"card-footer-item has-text-black is-centered",children:"null"!==c?"\u20a9 ".concat(c):void 0})})]})},C=function(e){var t=e.players,n=e.winner;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"columns is-mobile is-centered has-text-centered mt-1",children:t.map((function(e,t){return n?1===t||2===t?Object(j.jsx)("div",{className:"column is-6",children:Object(j.jsx)(y,Object(k.a)(Object(k.a)({},e),{},{winner:n===e.username?n:void 0,winnerScreen:!0}))},t):void 0:1===t||2===t?Object(j.jsx)("div",{className:"column is-6",children:Object(j.jsx)(y,Object(k.a)({},e))},t):Object(j.jsx)("div",{})}))}),Object(j.jsx)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:t.map((function(e,t){return n?3===t||4===t?Object(j.jsx)("div",{className:"column is-6",children:Object(j.jsx)(y,Object(k.a)(Object(k.a)({},e),{},{winner:n===e.username?n:void 0,winnerScreen:!0}))},t):void 0:3===t||4===t?Object(j.jsx)("div",{className:"column is-6",children:Object(j.jsx)(y,Object(k.a)({},e))},t):Object(j.jsx)("div",{})}))})]})},A=function(){var e=Object(p.f)(),t=JSON.parse(localStorage.getItem("user")),n=Object(s.useState)([]),c=Object(u.a)(n,2),o=c[0],r=c[1];t?"bank"===t.avatar&&e.push("/bank"):e.push("/monopoly-e-wallet"),Object(s.useEffect)((function(){return a=B()("http://192.168.43.241:5000"),function(){a.off()}}),[]),Object(s.useEffect)((function(){a.emit("get-users",t.room._id,(function(e){e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:JSON.parse(localStorage.getItem("user")).username===e.username?i:function(){return l(e.username)}}})),r(e)}))}),[]),Object(s.useEffect)((function(){a.emit("transaction",(function(e){console.log(e)}))}),[]),Object(s.useEffect)((function(){a.on("users-list",(function(e){console.log(e),e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:JSON.parse(localStorage.getItem("user")).username===e.username?i:function(){return l(e.username)}}})),r(e)}))}),[]);var i=function(){g.a.fire({title:"Su saldo es \u20a91.000",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"})},l=function(t){e.push("/send/".concat(t))};return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),Object(j.jsx)(C,{players:o},"0"),Object(j.jsx)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:Object(j.jsx)("div",{className:"column is-12",children:Object(j.jsx)(w.b,{to:"/bankrupt/",children:Object(j.jsx)("div",{className:"box has-text-danger",children:"chao cheo"})})})})]})})},I=function(e){var t=e.number,n=e.action;return Object(j.jsx)("div",{className:"column is-4",children:Object(j.jsx)("div",{onClick:function(e){return n(e)},className:"button is-large has-background-warning has-text-white",value:t,children:t})})},E=function(e){var t=e.onKeyPress;return Object(j.jsx)("div",{className:"columns is-mobile is-3 is-centered has-text-centered",children:Object(j.jsxs)("div",{className:"box has-background-success is-centered has-text-centered is-6",children:[Object(j.jsxs)("div",{className:"columns is-mobile  is-centered",children:[Object(j.jsx)(I,{number:"1",action:function(e,n){return t(e,"1")}}),Object(j.jsx)(I,{number:"2",action:function(e,n){return t(e,"2")}}),Object(j.jsx)(I,{number:"3",action:function(e,n){return t(e,"3")}})]}),Object(j.jsxs)("div",{className:"columns is-mobile  ",children:[Object(j.jsx)(I,{number:"4",action:function(e,n){return t(e,"4")}}),Object(j.jsx)(I,{number:"5",action:function(e,n){return t(e,"5")}}),Object(j.jsx)(I,{number:"6",action:function(e,n){return t(e,"6")}})]}),Object(j.jsxs)("div",{className:"columns is-mobile  ",children:[Object(j.jsx)(I,{number:"7",action:function(e,n){return t(e,"7")}}),Object(j.jsx)(I,{number:"8",action:function(e,n){return t(e,"8")}}),Object(j.jsx)(I,{number:"9",action:function(e,n){return t(e,"9")}})]}),Object(j.jsxs)("div",{className:"columns is-mobile  ",children:[Object(j.jsx)(I,{number:".",action:function(e,n){return t(e,".")}}),Object(j.jsx)(I,{number:"0",action:function(e,n){return t(e,"0")}}),Object(j.jsx)(I,{number:"x",action:function(e,n){return t(e,"x")}})]})]})})},J=function(e){var t=e.leftButton,n=e.rightButton;return Object(j.jsxs)("div",{className:"level is-mobile has-text-black mt-4",children:[Object(j.jsx)("div",{className:"level-item",children:t?Object(j.jsx)("div",{className:"level-left",children:Object(j.jsx)(d,{text:t.text,color:"warning",size:"large",action:t.action})}):void 0}),n?Object(j.jsx)("div",{className:"level-item",children:Object(j.jsx)("div",{className:"level-right",children:Object(j.jsx)(d,{text:n.text,color:"link",size:"large",action:n.action})})}):void 0]})},T=n(22),z=(n(54),function(){var e=Object(p.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet"),Object(s.useEffect)((function(){return o=Object(N.io)("http://192.168.43.241:5000"),function(){o.off()}}),[]);var t=Object(p.g)(),n=t.user,c=t.bank,a=Object(s.useState)(""),r=Object(u.a)(a,2),i=r[0],l=r[1],d=Object(s.useState)(!1),m=Object(u.a)(d,2),h=m[0],O=m[1],x=Object(s.useState)(0),f=Object(u.a)(x,2),v=f[0],B=f[1],S=function(e){var t="".concat(i).concat(e);l(t)},w=function(e,t){switch(t){case".":0!==i.length||h?h||(S("."),O(!0)):(S("0."),O(!0));break;case"x":l(""),O(!1),B(0);break;default:h?v<2&&(S(t),B(v+1)):S(t)}},y=function(){return e.push(c?"/bank":"/game")},C={leftButton:{text:"Atr\xe1s",action:y},rightButton:{text:"Enviar",action:function(){!c&&i>JSON.parse(localStorage.getItem("user")).amount?g.a.fire("te falta cobre"):0!==i.length?g.a.fire({title:"\xbfEnviarle \u20a9".concat(i," a ").concat(n,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(e){e.isConfirmed&&(o.emit("send-transaction",{user_id:JSON.parse(localStorage.getItem("user"))._id,amount:i,room_id:JSON.parse(localStorage.getItem("user")).room._id,to_user:n}),g.a.fire({title:"Enviaste \u20a9".concat(i," a ").concat(n),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),y())})):T.b.error("Introduzca el monto a enviar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{mb:"1"}),Object(j.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(j.jsx)("div",{className:"level-item",children:Object(j.jsxs)("div",{className:"level-left",children:[Object(j.jsx)("strong",{className:"mr-2",children:"Enviando a:"})," ",n]})}),Object(j.jsx)("div",{className:"level-item",children:Object(j.jsxs)("div",{className:"level-right",children:[Object(j.jsx)("strong",{className:"mr-2",children:c?"Saldo de ".concat(n,":"):"Tu saldo es:"})," ","\u20a9","1.000"]})})]}),Object(j.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(j.jsx)("div",{className:"column is-two-thirds",children:Object(j.jsx)("input",{className:"input is-size-2",value:"\u20a9 ".concat(i),readOnly:!0})})}),Object(j.jsx)(E,{onKeyPress:function(e,t){return w(0,t)}}),Object(j.jsx)(J,Object(k.a)({},C))]})})}),L=function(){var e=Object(p.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet");var t=function(t){g.a.fire({title:"\xbfEst\xe1s seguro que te quebr\xf3 ".concat(t,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&e.push("/gameover")}))},n=[{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",action:function(){return t("ANYI")}},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"null",action:function(){return t("AJAV06")}},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"null",action:function(){return t("JONABB")}},{playerName:"BANCO",token:"http://placekitten.com/128/127",amount:"null",action:function(){return t("BANCO")}}];return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container has-text-black has-text-centered",children:[Object(j.jsx)(b,{mb:"2"}),Object(j.jsx)("h1",{class:"title is-3",style:{marginBottom:"-0.5rem"},children:"\xbfQui\xe9n te llev\xf3 a la bancarrota?"}),Object(j.jsx)(C,{players:n}),Object(j.jsx)(J,Object(k.a)({},{leftButton:{link:"game",text:"Atr\xe1s"}}))]})})},q=n(16),D=n(17),_=function(){var e=Object(p.f)(),t=JSON.parse(localStorage.getItem("user"));t?"bank"!==t.avatar&&e.push("/game"):e.push("/monopoly-e-wallet");var n=Object(s.useState)([]),c=Object(u.a)(n,2),a=c[0],o=c[1];Object(s.useEffect)((function(){return r=Object(N.io)("http://192.168.43.241:5000"),function(){r.off()}}),[]),Object(s.useEffect)((function(){r.emit("get-users",t.room._id,(function(e){e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:function(){return i(e.username)}}})),o(e)}))}),[]);var i=function(t){e.push("/send/".concat(t,"/t"))},l={leftButton:{text:Object(j.jsx)(q.a,{icon:D.a}),action:function(){e.push("/history/")}},rightButton:{text:Object(j.jsx)(q.a,{icon:D.e}),action:function(){g.a.fire({title:"\xbfEst\xe1s seguro de que quieres finalizar?",confirmButtonColor:"green",confirmButtonText:"S\xed",cancelButtonColor:"red",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&g.a.fire({title:"Esperando confirmaci\xf3n.",confirmButtonColor:"green",confirmButtonText:"S\xed",cancelButtonColor:"red",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed?(g.a.fire({title:"Partida finalizada con \xe9xito",confirmButtonColor:"green",confirmButtonText:"Aceptar"}),e.push("/winner")):t.isDismissed&&g.a.fire({title:"\xa1Han rechazado el fin del juego!",confirmButtonColor:"green",confirmButtonText:"Aceptar"})}))}))}}};return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),Object(j.jsx)(C,{players:a}),Object(j.jsx)(J,Object(k.a)({},l))]})})},Y=function(){var e=Object(p.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet");return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(j.jsx)(b,{mb:"2"}),Object(j.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(j.jsx)("h1",{className:"title is-3",children:"Te quebr\xf3 ANYI"}),Object(j.jsx)(y,{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",gameover:!0}),Object(j.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet/")},children:Object(j.jsx)("span",{className:"icon is-medium",children:Object(j.jsx)(q.a,{icon:D.d})})})]})})},W=function(){var e=Object(p.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet");return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(j.jsx)(b,{mb:"2"}),Object(j.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(j.jsx)("h1",{className:"title is-3",children:"ANYI es el ganador"}),Object(j.jsx)(C,{players:[{playerName:"GABOX",token:"http://placekitten.com/128/128",amount:"1000"},{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"~2000"},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"~1000"},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"~2000"}],winner:"ANYI"}),Object(j.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet/")},children:Object(j.jsx)("span",{className:"icon is-medium",children:Object(j.jsx)(q.a,{icon:D.d})})})]})})},P=function(){var e=Object(p.f)(),t=Object(s.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(!1),r=Object(u.a)(o,2),i=r[0],l=r[1],d=Object(s.useState)(0),m=Object(u.a)(d,2),h=m[0],O=m[1];JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet");var x=Object(p.g)().user,f=function(e){var t="".concat(c).concat(e);a(t)},v=function(e,t){switch(t){case".":0!==c.length||i?i||(f("."),l(!0)):(f("0."),l(!0));break;case"x":a(""),l(!1),O(0);break;default:i?h<2&&(f(t),O(h+1)):f(t)}},N={leftButton:{text:"Atr\xe1s",action:function(){return e.push("/bank")}},rightButton:{text:"Cobrar",action:function(){0!==c.length?g.a.fire({title:"\xbfCobrarle \u20a9".concat(c," a ").concat(x,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&(g.a.fire({title:"Cobraste \u20a9".concat(c," a ").concat(x),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),e.push("/bank"))})):T.b.error("Introduzca el monto a cobrar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{mb:"1"}),Object(j.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(j.jsx)("div",{className:"level-item",children:Object(j.jsxs)("div",{className:"level-left",children:[Object(j.jsx)("strong",{className:"mr-2",children:"Cobrando a:"})," ",x]})}),Object(j.jsx)("div",{className:"level-item",children:Object(j.jsxs)("div",{className:"level-right",children:[Object(j.jsxs)("strong",{className:"mr-2",children:["Saldo de ",x,":"]}),"  \u20a9","1.000"]})})]}),Object(j.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(j.jsx)("div",{className:"column is-two-thirds",children:Object(j.jsx)("input",{className:"input is-size-2 has-text-centered",value:"\u20a9 ".concat(c),readOnly:!0})})}),Object(j.jsx)(E,{onKeyPress:function(e,t){return v(0,t)}}),Object(j.jsx)(J,Object(k.a)({},N))]})})},H=function(e){var t=e.transactions;return Object(j.jsxs)("table",{className:"table is-small",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nro"}),Object(j.jsx)("th",{children:"Envi\xf3"}),Object(j.jsx)("th",{children:"Recibi\xf3"}),Object(j.jsx)("th",{children:"Monto"}),Object(j.jsx)("th",{children:"Hora"})]})}),Object(j.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.index}),Object(j.jsx)("td",{children:e.sender}),Object(j.jsx)("td",{children:e.receiver}),Object(j.jsxs)("td",{children:["\u20a9",e.amount]}),Object(j.jsx)("td",{children:e.hour})]})}))})]})},U=function(){var e=Object(p.f)(),t=JSON.parse(localStorage.getItem("user"));t?"bank"!==t.avatar&&e.push("/game"):e.push("/monopoly-e-wallet");var n={leftButton:{text:Object(j.jsx)(q.a,{icon:D.c}),action:function(){return e.push("/bank")}},rightButton:{text:Object(j.jsx)(q.a,{icon:D.b}),action:function(){return g.a.fire("AUXILIO ME DESMAYO CALLESE VIEJO LESBIANO")}}};return Object(j.jsx)("section",{className:"section is-centered",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{mb:"0"}),Object(j.jsx)(J,Object(k.a)({},n)),Object(j.jsx)(H,{transactions:[{index:"4",sender:"ANYI",receiver:"GABOX",amount:"1000",hour:"04:44 p.m."},{index:"3",sender:"AJAV06",receiver:"GABOX",amount:"125",hour:"04:42 p.m."},{index:"2",sender:"JONABB",receiver:"AJAV06",amount:"2500",hour:"04:38 p.m."},{index:"1",sender:"GABOX",receiver:"ANYI",amount:"37",hour:"04:34 p.m."}]})]})})};var V=function(){return Object(j.jsxs)(w.a,{children:[Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/monopoly-e-wallet/",exact:!0,children:Object(j.jsx)(S,{})}),Object(j.jsx)(p.a,{path:"/game/",exact:!0,children:Object(j.jsx)(A,{})}),Object(j.jsx)(p.a,{path:"/send/:user/:bank?",children:Object(j.jsx)(z,{})}),Object(j.jsx)(p.a,{path:"/bankrupt/",exact:!0,children:Object(j.jsx)(L,{})}),Object(j.jsx)(p.a,{path:"/bank/",exact:!0,children:Object(j.jsx)(_,{})}),Object(j.jsx)(p.a,{path:"/gameover/",exact:!0,children:Object(j.jsx)(Y,{})}),Object(j.jsx)(p.a,{path:"/winner/",exact:!0,children:Object(j.jsx)(W,{})}),Object(j.jsx)(p.a,{path:"/withdraw/:user",exact:!0,children:Object(j.jsx)(P,{})}),Object(j.jsx)(p.a,{path:"/history/",exact:!0,children:Object(j.jsx)(U,{})})]}),Object(j.jsx)(T.a,{})]})},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(j.jsx)(V,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monopoly-e-wallet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/monopoly-e-wallet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(t,e)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.46586446.chunk.js.map