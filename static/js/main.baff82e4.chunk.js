(this["webpackJsonpmonopoly-e-wallet"]=this["webpackJsonpmonopoly-e-wallet"]||[]).push([[0],{94:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var o,c,a,r,s,i,l=n(1),u=n(29),m=n.n(u),j=n(9),d=n(0),b=function(e){var t=e.text,n=e.color,o=e.action,c=e.size;return Object(d.jsx)("button",{className:"button is-".concat(n," is-").concat(c),onClick:o,children:t})},f=n.p+"static/media/logo.35edb2b5.png",O=function(e){var t=e.mb;return Object(d.jsx)("figure",{className:"image container mb-".concat(t," has-ratio"),width:"400",style:{marginTop:"-2rem"},children:Object(d.jsx)("img",{alt:"Logo de Monopoly",src:f})})},h=function(e){var t=e.name,n=e.onTextChange;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{className:"is-white is-size-4",style:{letterSpacing:"2px"},children:["Jugador:",Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:"input",value:t,onChange:function(e){return n(e)}})]})})},x=n.p+"static/media/marvel.568d8c62.png",p=n.p+"static/media/kuro.cbe4521a.png",g=function(){return Object(d.jsxs)("div",{className:"level has-text-centered is-mobile mt-6",children:[Object(d.jsx)("div",{className:"level-left mt-6",children:Object(d.jsx)("div",{className:"level-item",children:Object(d.jsx)("img",{src:x,alt:"Logo de MARVEL",className:"image has-ratio",width:"125"})})}),Object(d.jsx)("div",{className:"level-right mt-6",children:Object(d.jsx)("div",{className:"level-item",children:Object(d.jsx)("img",{src:p,alt:"Logo de KuroDev",className:"image has-ratio",width:"67"})})})]})},v=n(2),N=n.n(v),B=n(5),w=n(13),S=n.n(w),y={ENDPOINT:"https://e-wallet-monopoly.herokuapp.com"},k=function(){var e,t,n=Object(l.useState)(Math.random().toString(36).substr(2,4)),c=Object(j.a)(n,2),a=c[0],r=c[1],s=Object(B.f)();(null===(e=JSON.parse(localStorage.getItem("user")))||void 0===e?void 0:e.room.init)&&"bank"===JSON.parse(localStorage.getItem("user")).avatar?s.push("/monopoly-e-wallet/bank"):(null===(t=JSON.parse(localStorage.getItem("user")))||void 0===t?void 0:t.room.init)&&s.push("/monopoly-e-wallet/game"),Object(l.useEffect)((function(){return o=S()(y.ENDPOINT),function(){o.off()}}),[]),Object(l.useEffect)((function(){o.on("joined",(function(e){N.a.getHtmlContainer()&&(e.quantity>=3&&N.a.enableButtons(),N.a.getHtmlContainer().innerHTML="Esperando jugadores. ".concat(e.quantity," persona").concat(1!==e.quantity?"s":""," se ha").concat(1!==e.quantity?"n":""," unido."))}))}),[]),Object(l.useEffect)((function(){o.on("person-join-left",(function(e){N.a.getHtmlContainer()&&(e.quantity>=3&&N.a.enableButtons(),N.a.getHtmlContainer().innerHTML="Esperando jugadores. ".concat(e.quantity," persona").concat(1!==e.quantity?"s":""," se ha").concat(1!==e.quantity?"n":""," unido."))}))}),[]),Object(l.useEffect)((function(){o.on("room-deleted",(function(){N.a.fire({title:"Se ha cerrado la sala.",confirmButtonText:"Aceptar"}),localStorage.removeItem("user")}))}),[]),Object(l.useEffect)((function(){o.on("game-begun",(function(){var e=JSON.parse(localStorage.getItem("user"));e.room.init=!0,localStorage.setItem("user",JSON.stringify(e)),N.a.close(),s.push("bank"===JSON.parse(localStorage.getItem("user")).avatar?"/bank":"/game")}))}),[]);var i=function(){return""!==a||(N.a.fire({title:"\xa1Debes introducir un nombre!",confirmButtonText:"Aceptar"}),!1)};return Object(d.jsxs)("section",{className:"section is-centered has-background-danger",style:{height:"100%"},children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{mb:"6"}),Object(d.jsx)(h,{name:a,onTextChange:function(e){return r(e.target.value)}}),Object(d.jsxs)("div",{className:"buttons is-centered mt-6 mb-6",children:[Object(d.jsx)(b,{text:"Crear",color:"primary",action:function(){i()&&o.emit("create-room",a,(function(e){var t=e.user;e.quantity,e.error;localStorage.setItem("user",JSON.stringify(t)),N.a.fire({title:"El c\xf3digo de la sala es: ".concat(t.room._id),text:"Esperando jugadores. 1 persona se ha unido.",confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"Comenzar",cancelButtonText:"Cancelar",showCancelButton:!0,showConfirmButton:!0}).then((function(e){e.isConfirmed?N.a.fire({title:"\xbfEst\xe1 seguro que desea comenzar la partida?",confirmButtonColor:"#71945B",denyButtonColor:"#B85B28",confirmButtonText:"S\xed",denyButtonText:"No",showDenyButton:!0}).then((function(e){e.isConfirmed&&o.emit("begin-game",JSON.parse(localStorage.getItem("user")).room._id,(function(e){e&&N.a.fire({title:"Error: ".concat(e),icon:"warning"})}))})):e.isDismissed&&JSON.parse(localStorage.getItem("user"))})),N.a.showLoading(N.a.getDenyButton())}))},size:"large"}),Object(d.jsx)(b,{text:"Unirse",color:"link",action:function(){i()&&N.a.fire({title:"Introduzca el c\xf3digo de la sala: ",input:"text",inputAttributes:{value:"ldkj"}}).then((function(e){3!==e.value.length?N.a.fire({title:"Debe introducir un c\xf3digo v\xe1lido",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}):o.emit("join",{username:a,room_id:e.value},(function(t){var n=t.error,c=t.user,a=t.quantity;n?N.a.fire({title:"Error: ".concat(n),confirmButtonText:"Aceptar",icon:"warning"}):(localStorage.setItem("user",JSON.stringify(c)),N.a.fire({title:"El c\xf3digo de la sala es: ".concat(e.value.toUpperCase()),text:"Esperando jugadores. ".concat(a," persona").concat(1!==a?"s":""," se ha").concat(1!==a?"n":""," unido."),denyButtonColor:"#B85B28",denyButtonText:"Cancelar",showDenyButton:!0,showConfirmButton:!1}).then((function(e){e.isDenied&&o.emit("delete-user",c._id,(function(e){localStorage.removeItem("user")}))})),N.a.showLoading())}))}))},size:"large"})]}),Object(d.jsx)(g,{})]}),Object(d.jsx)("div",{className:"hero has-background-danger",children:Object(d.jsx)("div",{className:"hero-body"})})]})},I=(n(94),n(12)),C=n(8),A=n(4),E=n(6).FontAwesomeIcon,J=function(e){var t,n=e.username,o=e.avatar,c=e.amount,a=e.action,r=e.gameover,s=e.winner,i=e.winnerScreen;switch(o){case"bank":t=A.j;break;case"cat":t=A.e;break;case"dog":t=A.f;break;case"ship":t=A.o;break;case"car":t=A.d;break;default:t=A.k}return Object(d.jsxs)("div",{onClick:a,className:"card has-text-centered ".concat(!s&&i?"tint":void 0),style:r?{borderStyle:"solid",borderColor:"#C70000",borderWidth:"1em"}:s?{boxShadow:"0 0 0 0.75rem #f9ee23"}:void 0,children:[Object(d.jsx)("header",{className:"card-header is-size-3",children:Object(d.jsx)("div",{className:"card-header-title is-centered",children:Object(d.jsx)("div",{className:"has-background-warning pl-5 pr-5 pt-1 has-text-white",style:{borderRadius:"5px"},children:n})})}),Object(d.jsx)("div",{className:"card-image is-128x128 has-text-black is-size-1",children:Object(d.jsx)(E,{icon:t})}),Object(d.jsx)("footer",{className:"card-footer",children:Object(d.jsx)("p",{className:"card-footer-item has-text-black is-centered",children:"null"!==c?"\u20a9 ".concat(c):void 0})})]})},T=function(e){var t=e.players,n=e.winner;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"columns is-mobile is-centered has-text-centered mt-1",children:t.map((function(e,t){return n?1===t||2===t?Object(d.jsx)("div",{className:"column is-6",children:Object(d.jsx)(J,Object(C.a)(Object(C.a)({},e),{},{winner:n===e.username?n:void 0,winnerScreen:!0}))},t):void 0:1===t||2===t?Object(d.jsx)("div",{className:"column is-6",children:Object(d.jsx)(J,Object(C.a)({},e))},t):Object(d.jsx)("div",{})}))}),Object(d.jsx)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:t.map((function(e,t){return n?3===t||4===t?Object(d.jsx)("div",{className:"column is-6",children:Object(d.jsx)(J,Object(C.a)(Object(C.a)({},e),{},{winner:n===e.username?n:void 0,winnerScreen:!0}))},t):void 0:3===t||4===t?Object(d.jsx)("div",{className:"column is-6",children:Object(d.jsx)(J,Object(C.a)({},e))},t):Object(d.jsx)("div",{})}))})]})},_=n(6),D=n(15),q=function(){var e=Object(B.f)(),t=JSON.parse(localStorage.getItem("user")),n=Object(l.useState)([]),o=Object(j.a)(n,2),a=o[0],r=o[1];t?"bank"===t.avatar&&e.push("/monopoly-e-wallet/bank"):e.push("/monopoly-e-wallet/"),Object(l.useEffect)((function(){c=S()(y.ENDPOINT);var e=JSON.parse(localStorage.getItem("user"));return c.emit("join",{username:e.username,room_id:e.room._id},(function(e){e.error;var t=e.user;e.quantity;t&&localStorage.setItem("user",JSON.stringify(t))})),function(){c.off()}}),[]),Object(l.useEffect)((function(){var e;c.emit("get-users",null===(e=t)||void 0===e?void 0:e.room._id,(function(e){e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:JSON.parse(localStorage.getItem("user")).username===e.username?s:function(){return i(e.username)}}})),r(e)}))}),[]),Object(l.useEffect)((function(){c.on("transaction",(function(e){var t=JSON.parse(localStorage.getItem("user"));e.to_user===t.username&&D.b.dark("".concat(e.username," te ha enviado \u20a9").concat(e.amount))}))}),[]),Object(l.useEffect)((function(){c.on("debit",(function(e){var t=JSON.parse(localStorage.getItem("user"));e.to_user===t.username&&D.b.dark("El banco te ha cobrado \u20a9".concat(e.amount))}))}),[]),Object(l.useEffect)((function(){c.on("users-list",(function(e){console.log(e),t=e.find((function(e){return e._id==JSON.parse(localStorage.getItem("user"))._id})),localStorage.setItem("user",JSON.stringify(t)),e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:JSON.parse(localStorage.getItem("user")).username===e.username?s:function(){return i(e.username)}}})),r(e)}))}),[]);var s=function(){N.a.fire({title:"Su saldo es \u20a9".concat(t.amount),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"})},i=function(t){e.push("/send/".concat(t))};return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{}),Object(d.jsx)(T,{players:a},"0"),Object(d.jsxs)("div",{className:"columns is-mobile is-half is-centered has-text-centered",children:[Object(d.jsx)(b,{action:function(){localStorage.removeItem("user"),e.push("/monopoly-e-wallet//")},text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.b})}),Object(d.jsx)("div",{className:"column is-12",children:Object(d.jsx)(I.b,{to:"/bankrupt/",children:Object(d.jsx)("div",{className:"box is-size-1 has-text-black",children:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.m})})})})]})]})})},z=function(e){var t=e.number,n=e.action;return Object(d.jsx)("div",{className:"column is-4",children:Object(d.jsx)("div",{onClick:function(e){return n(e)},className:"button is-large has-background-warning has-text-white",value:t,children:t})})},P=function(e){var t=e.onKeyPress;return Object(d.jsx)("div",{className:"columns is-mobile is-3 is-centered has-text-centered",children:Object(d.jsxs)("div",{className:"box has-background-success is-centered has-text-centered is-6",children:[Object(d.jsxs)("div",{className:"columns is-mobile  is-centered",children:[Object(d.jsx)(z,{number:"1",action:function(e,n){return t(e,"1")}}),Object(d.jsx)(z,{number:"2",action:function(e,n){return t(e,"2")}}),Object(d.jsx)(z,{number:"3",action:function(e,n){return t(e,"3")}})]}),Object(d.jsxs)("div",{className:"columns is-mobile  ",children:[Object(d.jsx)(z,{number:"4",action:function(e,n){return t(e,"4")}}),Object(d.jsx)(z,{number:"5",action:function(e,n){return t(e,"5")}}),Object(d.jsx)(z,{number:"6",action:function(e,n){return t(e,"6")}})]}),Object(d.jsxs)("div",{className:"columns is-mobile  ",children:[Object(d.jsx)(z,{number:"7",action:function(e,n){return t(e,"7")}}),Object(d.jsx)(z,{number:"8",action:function(e,n){return t(e,"8")}}),Object(d.jsx)(z,{number:"9",action:function(e,n){return t(e,"9")}})]}),Object(d.jsxs)("div",{className:"columns is-mobile  ",children:[Object(d.jsx)(z,{number:".",action:function(e,n){return t(e,".")}}),Object(d.jsx)(z,{number:"0",action:function(e,n){return t(e,"0")}}),Object(d.jsx)(z,{number:"x",action:function(e,n){return t(e,"x")}})]})]})})},F=function(e){var t=e.leftButton,n=e.rightButton;return Object(d.jsxs)("div",{className:"level is-mobile has-text-black mt-4",children:[Object(d.jsx)("div",{className:"level-item",children:t?Object(d.jsx)("div",{className:"level-left",children:Object(d.jsx)(b,{text:t.text,color:"warning",size:"large",action:t.action})}):void 0}),n?Object(d.jsx)("div",{className:"level-item",children:Object(d.jsx)("div",{className:"level-right",children:Object(d.jsx)(b,{text:n.text,color:"link",size:"large",action:n.action})})}):void 0]})},L=(n(54),function(){var e=Object(B.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet/"),Object(l.useEffect)((function(){return a=Object(w.io)(y.ENDPOINT),function(){a.off()}}),[]);var t=Object(B.g)(),n=t.user,o=t.bank,c=Object(l.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],u=Object(l.useState)(!1),m=Object(j.a)(u,2),b=m[0],f=m[1],h=Object(l.useState)(0),x=Object(j.a)(h,2),p=x[0],g=x[1],v=function(e){var t="".concat(s).concat(e);i(t)},S=function(e,t){switch(t){case".":0!==s.length||b?b||(v("."),f(!0)):(v("0."),f(!0));break;case"x":i(""),f(!1),g(0);break;default:b?p<2&&(v(t),g(p+1)):v(t)}},k=function(){return e.push(o?"/bank":"/game")},I={leftButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.c}),action:k},rightButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.g}),action:function(){!o&&s>JSON.parse(localStorage.getItem("user")).amount?N.a.fire("te falta cobre"):0!==s.length?N.a.fire({title:"\xbfEnviarle \u20a9".concat(s," a ").concat(n,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(e){e.isConfirmed&&(a.emit("send-transaction",{user_id:JSON.parse(localStorage.getItem("user"))._id,amount:s,room_id:JSON.parse(localStorage.getItem("user")).room._id,to_user:n}),N.a.fire({title:"Enviaste \u20a9".concat(s," a ").concat(n),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),setTimeout((function(){return k()}),500))})):D.b.error("Introduzca el monto a enviar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{mb:"1"}),Object(d.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(d.jsx)("div",{className:"level-item",children:Object(d.jsxs)("div",{className:"level-left",children:[Object(d.jsx)("strong",{className:"mr-2",children:"Enviando a:"})," ",n]})}),Object(d.jsx)("div",{className:"level-item",children:Object(d.jsxs)("div",{className:"level-right",children:[Object(d.jsx)("strong",{className:"mr-2",children:o?"Saldo de ".concat(n,":"):"Tu saldo es:"})," ","\u20a9","1.000"]})})]}),Object(d.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(d.jsx)("div",{className:"column is-two-thirds",children:Object(d.jsx)("input",{className:"input is-size-2",value:"\u20a9 ".concat(s),readOnly:!0})})}),Object(d.jsx)(P,{onKeyPress:function(e,t){return S(0,t)}}),Object(d.jsx)(F,Object(C.a)({},I))]})})}),H=function(){var e=Object(B.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet/");var t=function(t){N.a.fire({title:"\xbfEst\xe1s seguro que te quebr\xf3 ".concat(t,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&e.push("/monopoly-e-wallet/gameover")}))},n=[{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",action:function(){return t("ANYI")}},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"null",action:function(){return t("AJAV06")}},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"null",action:function(){return t("JONABB")}},{playerName:"BANCO",token:"http://placekitten.com/128/127",amount:"null",action:function(){return t("BANCO")}}];return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container has-text-black has-text-centered",children:[Object(d.jsx)(O,{mb:"2"}),Object(d.jsx)("h1",{class:"title is-3",style:{marginBottom:"-0.5rem"},children:"\xbfQui\xe9n te llev\xf3 a la bancarrota?"}),Object(d.jsx)(T,{players:n}),Object(d.jsx)(F,Object(C.a)({},{leftButton:{link:"game",text:"Atr\xe1s"}}))]})})},W=function(){var e=Object(B.f)(),t=JSON.parse(localStorage.getItem("user"));t?"bank"!==t.avatar&&e.push("/monopoly-e-wallet/game"):e.push("/monopoly-e-wallet/");var n=Object(l.useState)([]),o=Object(j.a)(n,2),c=o[0],a=o[1];Object(l.useEffect)((function(){r=Object(w.io)(y.ENDPOINT);var e=JSON.parse(localStorage.getItem("user"));return r.emit("join",{username:e.username,room_id:e.room._id},(function(e){e.error;var t=e.user;e.quantity;t&&localStorage.setItem("user",JSON.stringify(t))})),function(){r.off()}}),[]),Object(l.useEffect)((function(){r.on("transaction",(function(e){D.b.dark("".concat(e.username," le ha enviado \u20a9").concat(e.amount," a ").concat(e.to_user))}))}),[]);var s=function(){r.emit("get-users",null===t||void 0===t?void 0:t.room._id,(function(e){e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:function(){return i(e.username)}}})),a(e)}))};Object(l.useEffect)((function(){s()}),[]),Object(l.useEffect)((function(){r.on("users-list",(function(e){console.log(e),e=e.map((function(e){return{username:e.username,avatar:e.avatar,amount:e.amount,action:function(){return i(e.username)}}})),a(e)}))}),[]);var i=function(e){N.a.fire({title:"\xbfQue quieres hacer?",showCloseButton:!0,showDenyButton:!0,showCancelButton:!0,denyButtonColor:"#B85B28",confirmButtonText:"Pass Go",denyButtonText:"Cobrar",cancelButtonText:"Pagar"}).then((function(t){t.isConfirmed?(r.emit("send-transaction",{user_id:JSON.parse(localStorage.getItem("user"))._id,amount:200,room_id:JSON.parse(localStorage.getItem("user")).room._id,to_user:e}),N.a.fire({title:"Pass Go enviado a ".concat(e),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),s()):t.isDenied?u(e):t.isDismissed&&m(e)}))},u=function(t){e.push("/withdraw/".concat(t))},m=function(t){e.push("/send/".concat(t,"/t"))},f={leftButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.a}),action:function(){e.push("/monopoly-e-wallet/history/")}},rightButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.i}),action:function(){N.a.fire({title:"\xbfEst\xe1s seguro de que quieres finalizar?",confirmButtonColor:"#71945B",confirmButtonText:"S\xed",cancelButtonColor:"#B85B28",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed&&N.a.fire({title:"Esperando confirmaci\xf3n.",confirmButtonColor:"#71945B",confirmButtonText:"S\xed",cancelButtonColor:"#B85B28",cancelButtonText:"No",showCancelButton:!0}).then((function(t){t.isConfirmed?(N.a.fire({title:"Partida finalizada con \xe9xito",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),e.push("/monopoly-e-wallet/winner")):t.isDismissed&&N.a.fire({title:"\xa1Han rechazado el fin del juego!",confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"})}))}))}}};return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{}),Object(d.jsx)(b,{action:function(){localStorage.removeItem("user"),e.push("/monopoly-e-wallet//")},text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.b})}),Object(d.jsx)(T,{players:c}),Object(d.jsx)(F,Object(C.a)({},f))]})})},U=function(){var e=Object(B.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet/");return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(d.jsx)(O,{mb:"2"}),Object(d.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(d.jsx)("h1",{className:"title is-3",children:"Te quebr\xf3 ANYI"}),Object(d.jsx)(J,{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"null",gameover:!0}),Object(d.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet//")},children:Object(d.jsx)("span",{className:"icon is-medium",children:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.h})})})]})})},M=function(){var e=Object(B.f)();JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet/");return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container is-centered has-text-centered",children:[Object(d.jsx)(O,{mb:"2"}),Object(d.jsx)("h1",{className:"title is-2",children:"FIN DEL JUEGO"}),Object(d.jsx)("h1",{className:"title is-3",children:"ANYI es el ganador"}),Object(d.jsx)(T,{players:[{playerName:"GABOX",token:"http://placekitten.com/128/128",amount:"1000"},{playerName:"ANYI",token:"http://placekitten.com/128/129",amount:"~2000"},{playerName:"AJAV06",token:"http://placekitten.com/129/128",amount:"~1000"},{playerName:"JONABB",token:"http://placekitten.com/127/128",amount:"~2000"}],winner:"ANYI"}),Object(d.jsx)("button",{className:"button is-rounded is-large mt-5",onClick:function(){e.push("/monopoly-e-wallet//")},children:Object(d.jsx)("span",{className:"icon is-medium",children:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.h})})})]})})},R=function(){var e=Object(B.f)(),t=Object(l.useState)(""),n=Object(j.a)(t,2),o=n[0],c=n[1],a=Object(l.useState)(!1),r=Object(j.a)(a,2),i=r[0],u=r[1],m=Object(l.useState)(0),b=Object(j.a)(m,2),f=b[0],h=b[1];JSON.parse(localStorage.getItem("user"))||e.push("/monopoly-e-wallet/"),Object(l.useEffect)((function(){s=Object(w.io)(y.ENDPOINT);var e=JSON.parse(localStorage.getItem("user"));return s.emit("join",{username:e.username,room_id:e.room._id},(function(e){e.error;var t=e.user;e.quantity;t&&localStorage.setItem("user",JSON.stringify(t))})),function(){s.off()}}),[]);var x=Object(B.g)().user,p=function(e){var t="".concat(o).concat(e);c(t)},g=function(e,t){switch(t){case".":0!==o.length||i?i||(p("."),u(!0)):(p("0."),u(!0));break;case"x":c(""),u(!1),h(0);break;default:i?f<2&&(p(t),h(f+1)):p(t)}},v=function(){return e.push("/monopoly-e-wallet/bank")},S={leftButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.c}),action:v},rightButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.n}),action:function(){0!==o.length?N.a.fire({title:"\xbfCobrarle \u20a9".concat(o," a ").concat(x,"?"),confirmButtonColor:"#71945B",cancelButtonColor:"#B85B28",confirmButtonText:"S\xed",cancelButtonText:"No",showCancelButton:!0}).then((function(e){e.isConfirmed&&(s.emit("bank-debit",{user_id:JSON.parse(localStorage.getItem("user"))._id,amount:o,room_id:JSON.parse(localStorage.getItem("user")).room._id,to_user:x}),N.a.fire({title:"Cobraste \u20a9".concat(o," a ").concat(x),confirmButtonColor:"#71945B",confirmButtonText:"Aceptar"}),setTimeout((function(){return v()}),500),v())})):D.b.error("Introduzca el monto a cobrar",{position:"top-right",autoClose:3500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}}};return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{mb:"1"}),Object(d.jsxs)("div",{className:"level is-mobile has-text-black",children:[Object(d.jsx)("div",{className:"level-item",children:Object(d.jsxs)("div",{className:"level-left",children:[Object(d.jsx)("strong",{className:"mr-2",children:"Cobrando a:"})," ",x]})}),Object(d.jsx)("div",{className:"level-item",children:Object(d.jsxs)("div",{className:"level-right",children:[Object(d.jsxs)("strong",{className:"mr-2",children:["Saldo de ",x,":"]})," \u20a9","1.000"]})})]}),Object(d.jsx)("div",{className:"columns is-mobile is-centered is-half mb-3",children:Object(d.jsx)("div",{className:"column is-two-thirds",children:Object(d.jsx)("input",{className:"input is-size-2 has-text-centered",value:"\u20a9 ".concat(o),readOnly:!0})})}),Object(d.jsx)(P,{onKeyPress:function(e,t){return g(0,t)}}),Object(d.jsx)(F,Object(C.a)({},S))]})})},Y=function(e){var t=e.transactions;return Object(d.jsxs)("table",{className:"table is-small",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Tipo"}),Object(d.jsx)("th",{children:"Envi\xf3"}),Object(d.jsx)("th",{children:"Recibi\xf3"}),Object(d.jsx)("th",{children:"Monto"}),Object(d.jsx)("th",{children:"Hora"})]})}),Object(d.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.sender}),Object(d.jsx)("td",{children:e.receiver}),Object(d.jsxs)("td",{children:["\u20a9",e.amount]}),Object(d.jsx)("td",{children:e.hour})]})}))})]})},G=function(){var e=Object(B.f)(),t=Object(l.useState)([]),n=Object(j.a)(t,2),o=n[0],c=n[1],a=JSON.parse(localStorage.getItem("user"));a?"bank"!==a.avatar&&e.push("/monopoly-e-wallet/game"):e.push("/monopoly-e-wallet/"),Object(l.useEffect)((function(){i=Object(w.io)(y.ENDPOINT);var e=JSON.parse(localStorage.getItem("user"));return i.emit("join",{username:e.username,room_id:e.room._id},(function(e){e.error;var t=e.user;e.quantity;t&&localStorage.setItem("user",JSON.stringify(t))})),function(){i.off()}}),[]),Object(l.useEffect)((function(){i.emit("get-transactions",a.room._id,(function(e){e=e.map((function(e,t){return{type:"e"===e.type?"Env\xedo":"Cobro",sender:e.username,receiver:e.to_user,amount:e.amount,hour:e.createdAt}})),c(e)}))}),[]);var r={leftButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.c}),action:function(){return e.push("/monopoly-e-wallet/bank")}},rightButton:{text:Object(d.jsx)(_.FontAwesomeIcon,{icon:A.l}),action:function(){return N.a.fire({title:"Hecho por Team MARVEL para el 1er reto interno de KURODev",text:"Albert Acevedo, Gabriel Roa, Jonathan Calles",icon:"success"})}}};return Object(d.jsx)("section",{className:"section is-centered",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{mb:"0"}),Object(d.jsx)(F,Object(C.a)({},r)),Object(d.jsx)(Y,{transactions:o})]})})};var K=function(){return Object(d.jsxs)(I.a,{children:[Object(d.jsxs)(B.c,{children:[Object(d.jsx)(B.a,{path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/",exact:!0,children:Object(d.jsx)(k,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/game/",exact:!0,children:Object(d.jsx)(q,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/send/:user/:bank?",children:Object(d.jsx)(L,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/bankrupt/",exact:!0,children:Object(d.jsx)(H,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/bank/",exact:!0,children:Object(d.jsx)(W,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/gameover/",exact:!0,children:Object(d.jsx)(U,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/winner/",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/withdraw/:user",exact:!0,children:Object(d.jsx)(R,{})}),Object(d.jsx)(B.a,{path:"/monopoly-e-wallet/history/",exact:!0,children:Object(d.jsx)(G,{})})]}),Object(d.jsx)(D.a,{})]})},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}m.a.render(Object(d.jsx)(K,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monopoly-e-wallet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/monopoly-e-wallet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.baff82e4.chunk.js.map