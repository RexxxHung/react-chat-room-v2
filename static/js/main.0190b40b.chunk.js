(this["webpackJsonpchat-room-v2"]=this["webpackJsonpchat-room-v2"]||[]).push([[0],{161:function(e,n,t){},205:function(e,n,t){},207:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(52),i=t.n(c),s=t(14),r=t(12),l=t(92),d=t(15),u=t.p+"static/media/logo.6ce24c58.svg",j=(t(161),t(260)),b=t(271),m=t(252),x=t(265),p=t(263),h=t(1);var f,O,v=function(){var e,n=Object(d.g)(),t=Object(a.useContext)(fe),o=Object(a.useState)(!1),c=Object(r.a)(o,2),i=c[0],l=c[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsxs)(m.a,{spacing:3,children:[Object(h.jsx)(j.a,{id:"name",label:"\u60a8\u7684\u5927\u540d",variant:"standard",placeholder:"\u8f38\u5165\u540d\u7a31\u9032\u5165\u804a\u5929",helperText:""===(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.name)?"\u540d\u7a31\u70ba\u5fc5\u586b":"",error:""===(null===t||void 0===t?void 0:t.state.name),onChange:function(e){null===t||void 0===t||t.setState((function(n){return Object(s.a)(Object(s.a)({},n),{},{name:e.target.value})}))}}),Object(h.jsxs)(m.a,{spacing:1,children:[Object(h.jsx)(b.a,{variant:"contained",onClick:function(){(null===t||void 0===t?void 0:t.state.name)&&n.push("/lobby")},children:"\u9032\u5165\u804a\u5929\u5ba4"}),Object(h.jsx)(b.a,{style:{backgroundColor:"#00c300"},variant:"contained",onClick:function(){l(!0)},children:"Line Login"}),Object(h.jsx)(b.a,{style:{backgroundColor:"#1877f2"},variant:"contained",onClick:function(){l(!0)},children:"Facebook Login"})]})]})]}),Object(h.jsx)(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,onClose:function(){return l(!1)},autoHideDuration:2e3,children:Object(h.jsx)(p.a,{onClose:function(){return l(!1)},severity:"info",sx:{width:"100%"},children:"\u529f\u80fd\u5c1a\u672a\u958b\u653e!"})},0)]})},g=t(48),w=t(126),y=t(264),C=t(274),N=t(273),_=t(266),k=t(275),R=t(276),S=t(278),B=t(129),D=t.n(B),I=t(130),z=t.n(I),F=t(128),L=t.n(F),T=t(127),M=t.n(T),H=function(e){var n=e.toggleDrawer,t=e.userNumber,o=e.openCreateModalHandler,c=Object(a.useContext)(fe),i=Object(d.g)();return Object(h.jsx)(C.a,{role:"presentation",onClick:function(){return n()},onKeyDown:function(){return n()},children:Object(h.jsxs)(N.a,{children:[Object(h.jsxs)(_.a,{button:!0,children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(M.a,{})}),Object(h.jsx)(R.a,{primary:"\u76ee\u524d\u7dda\u4e0a\u4eba\u6578\uff1a".concat(t)})]},0),Object(h.jsxs)(_.a,{button:!0,children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(L.a,{})}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(h.jsx)(R.a,{primary:null===c||void 0===c?void 0:c.state.name}),Object(h.jsx)("span",{style:{fontSize:"12px"},children:"id\uff1a".concat(null===c||void 0===c?void 0:c.state.id)})]})]},1),Object(h.jsx)(S.a,{}),Object(h.jsxs)(_.a,{button:!0,children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(D.a,{})}),Object(h.jsx)(R.a,{primary:"\u65b0\u589e\u804a\u5929\u5ba4",onClick:function(){return o()}})]},2),Object(h.jsxs)(_.a,{button:!0,onClick:function(){null===c||void 0===c||c.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{ws:void 0,isLogout:!0})}))},children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(z.a,{})}),Object(h.jsx)(R.a,{primary:"\u96e2\u958b\u804a\u5929\u5ba4",onClick:function(){(null===c||void 0===c?void 0:c.state.ws)&&c.state.selectChatRoom&&c.state.ws.emit("disconnectLobby",{id:c.state.id,name:c.state.name}),i.push("/")}})]},3)]})})},A=t(269),E=t(270),P=t(279),Y=t(280),U=t(281),J=t(282),K=t(133),W=t.n(K),q=t(78),G=q.a.div(f||(f=Object(g.a)(["\n  .header {\n    position: relative;\n    background-color: #00d8ff;\n    color: #fff;\n    text-align: center;\n    padding: 10px;\n    letter-spacing: 5px;\n    width: 80%;\n    margin: 0 auto;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    .addIcon {\n      position: absolute;\n      right: 10px;\n      text-align: center;\n      top: 8px;\n      cursor: pointer;\n    }\n  }\n\n  .body {\n    width: 80%;\n    margin: 0 auto;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    .chatRoom {\n      min-width: 200px;\n      margin: 5px;\n      border: 1.5px solid #000;\n      border-radius: 10px;\n      transition: all 0.3s ease-in-out;\n      cursor: pointer;\n      animation: borderChange 0.3s linear;\n      @media (max-width: 530px) {\n        width: 100%;\n      }\n      h3 {\n        text-align: center;\n        margin: 5px;\n        border-bottom: 1.5px solid #000;\n      }\n      .desc {\n        padding: 5px;\n        font-size: 12px;\n        margin: 0;\n      }\n      &:hover {\n        background-color: #e8e8e8;\n      }\n      &:active {\n        transform: scale(0.9);\n      }\n    }\n  }\n"]))),Q=function(){var e=Object(d.g)(),n=Object(a.useContext)(fe),t=Object(a.useState)(!1),o=Object(r.a)(t,2),c=o[0],i=o[1],l=Object(a.useState)({open:!1,severity:"info"}),u=Object(r.a)(l,2),m=u[0],f=u[1],O=Object(a.useState)(!1),v=Object(r.a)(O,2),g=v[0],C=v[1],N=Object(a.useState)(0),_=Object(r.a)(N,2),k=_[0],R=_[1],S=Object(a.useState)([]),B=Object(r.a)(S,2),D=B[0],I=B[1],z=Object(a.useState)(!1),F=Object(r.a)(z,2),L=F[0],T=F[1],M=Object(a.useState)(),K=Object(r.a)(M,2),q=K[0],Q=K[1];Object(a.useEffect)((function(){if(null===n||void 0===n?void 0:n.state.name)if((null===n||void 0===n?void 0:n.state.ws)||(null===n||void 0===n?void 0:n.state.selectChatRoom))n.state.ws&&n.state.name&&n.state.ws.emit("updateInfo");else{C((function(e){return!0}));var t=Object(w.io)("https://react-chat-room-v2.herokuapp.com/",{transports:["websocket"]});(null===n||void 0===n?void 0:n.setState)&&n.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{ws:t,id:Object(y.a)()})}))}else e.push("/")}),[]),Object(a.useEffect)((function(){return(null===n||void 0===n?void 0:n.state.ws)&&(console.log("success connect!"),V()),function(){(null===n||void 0===n?void 0:n.state.ws)&&(null===n||void 0===n?void 0:n.state.isLogout)&&(C((function(e){return!0})),n.state.ws.emit("logout",{id:null===n||void 0===n?void 0:n.state.id,name:null===n||void 0===n?void 0:n.state.name}),null===n||void 0===n||n.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{name:null,id:void 0})})),f((function(e){return{open:!0,severity:"info",message:"\u767b\u51fa\u6210\u529f"}})),setTimeout((function(){f((function(e){return Object(s.a)(Object(s.a)({},e),{},{open:!1})}))}),2e3),setTimeout((function(){C((function(e){return!1})),e.push("/")}),1e3))}}),[null===n||void 0===n?void 0:n.state.ws]);var V=Object(a.useCallback)((function(){null===n||void 0===n||n.setState((function(e){return Object(s.a)({},e)})),(null===n||void 0===n?void 0:n.state.ws)&&(n.state.selectChatRoom||n.state.ws.emit("login",{id:null===n||void 0===n?void 0:n.state.id,name:null===n||void 0===n?void 0:n.state.name}),n.state.ws.once("connectionSuccess",(function(e){f((function(n){return{open:!0,severity:"success",message:e.message}})),setTimeout((function(){f((function(e){return Object(s.a)(Object(s.a)({},e),{},{open:!1})}))}),2e3),C((function(e){return!1}))})),n.state.ws.once("connectionFail",(function(n){f((function(e){return{open:!0,severity:"error",message:n.message}})),setTimeout((function(){e.push("/")}),1e3)})),n.state.ws.on("updateInfo",(function(e){R(e.userNumber),I(e.chatRooms)})),n.state.ws.on("personalAnnouncement",(function(e){var n=e.data;f((function(e){return{open:!0,severity:"\u65b0\u589e\u6210\u529f"===n.text?"success":"\u65b0\u589e\u5931\u6557"===n.text?"error":"info",message:n.text}})),setTimeout((function(){f((function(e){return Object(s.a)(Object(s.a)({},e),{},{open:!1})}))}),2e3)})))}),[null===n||void 0===n?void 0:n.state.ws]),X=function(){i((function(e){return!e}))},Z=function(){T(!L),Q({name:void 0,desc:void 0})};return Object(h.jsxs)(G,{children:[g?Object(h.jsx)(h.Fragment,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("label",{className:"title",children:"Lobby"}),Object(h.jsx)(W.a,{className:"addIcon",onClick:function(){return X()}}),Object(h.jsx)(A.a,{anchor:"bottom",open:c,onClose:function(){return X()},children:Object(h.jsx)(H,{toggleDrawer:X,userNumber:k,openCreateModalHandler:function(){return Z()}})}),Object(h.jsxs)(E.a,{open:L,onClose:function(){return Z()},children:[Object(h.jsx)(P.a,{children:"\u65b0\u589e\u804a\u5929\u5ba4"}),Object(h.jsxs)(Y.a,{children:[Object(h.jsx)(U.a,{children:"\u8acb\u9075\u5b88\u4e0d\u72af\u6cd5\uff0c\u4e0d\u8272\u60c5\uff0c\u4e14\u76e1\u60c5\u5730\u804a\u5929\u5427\uff01"}),Object(h.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"chatRoomName",label:"\u804a\u5929\u5ba4\u540d\u7a31",type:"chatRoomName",fullWidth:!0,variant:"standard",onChange:function(e){Q((function(n){return Object(s.a)(Object(s.a)({},n),{},{name:e.target.value})}))}}),Object(h.jsx)(j.a,{margin:"dense",id:"chatRoomDesc",label:"\u804a\u5929\u5ba4\u6558\u8ff0",type:"chatRoomDesc",fullWidth:!0,variant:"standard",onChange:function(e){Q((function(n){return Object(s.a)(Object(s.a)({},n),{},{desc:e.target.value})}))}})]}),Object(h.jsxs)(J.a,{children:[Object(h.jsx)(b.a,{onClick:function(){return Z()},children:"\u53d6\u6d88"}),Object(h.jsx)(b.a,{onClick:function(){((null===n||void 0===n?void 0:n.state.id)||(null===q||void 0===q?void 0:q.name))&&((null===n||void 0===n?void 0:n.state.ws)&&n.state.ws.emit("createNewChatRoom",Object(s.a)({userId:n.state.id},q)),Z())},children:"\u5275\u5efa"})]})]})]}),Object(h.jsx)("section",{className:"body",children:D.map((function(t,a){return Object(h.jsx)("div",{className:"chatRoom",onClick:function(){return function(t){null===n||void 0===n||n.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{selectChatRoom:t})})),e.push({pathname:"/chat-room/".concat(t.id)})}(t)},children:Object(h.jsxs)("div",{className:"chatRoom__content",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("p",{className:"desc",children:t.desc})]})},a)}))})]}),Object(h.jsx)(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:m.open,onClose:function(){return f((function(e){return Object(s.a)(Object(s.a)({},e),{},{open:!1})}))},autoHideDuration:2e3,children:Object(h.jsx)(p.a,{onClose:function(){return f((function(e){return Object(s.a)(Object(s.a)({},e),{},{open:!1})}))},severity:m.severity,sx:{width:"100%"},children:m.message})},0)]})},V=t(17),X=t(134),Z=t.n(X),$=t(136),ee=t.n($),ne=t(135),te=t.n(ne),ae=t(137),oe=t.n(ae),ce=t(138),ie=t.n(ce),se=t(139),re=t.n(se),le=t(141),de=t.n(le),ue=t(140),je=t.n(ue),be=t.p+"static/media/bg.658d320a.png",me=t.p+"static/media/defaultUser.b55ae646.png",xe=q.a.div(O||(O=Object(g.a)(["\n  display: grid;\n  grid-template-rows: 60px auto 50px;\n  height: 100vh;\n  .header {\n    width: 100%;\n    height: 60px;\n    color: #fff;\n    background-color: rgb(34, 42, 62);\n    position: fixed;\n    top: 0;\n    display: grid;\n    grid-template-columns: 80px 1fr 80px;\n    z-index: 2;\n    .title {\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    &__icon {\n      display: flex;\n      align-items: center;\n      &:last-child {\n        justify-content: space-around;\n      }\n    }\n  }\n  .body {\n    position: relative;\n    height: calc(100vh - 110px);\n    padding: 60px 0 50px 0;\n    background-image: url(",');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    overflow-y: auto;\n    overscroll-behavior: none;\n    .msgBox {\n      &__ul {\n        display: flex;\n        padding: 10px;\n        list-style: none;\n        margin: 0;\n      }\n      &__profile {\n        margin: 2px;\n        width: 50px;\n        height: 50px;\n        background-color: #fff;\n        border-radius: 50%;\n        overflow: hidden;\n        .img {\n          width: 100%;\n          height: 100%;\n          display: inline-block;\n          object-fit: cover;\n        }\n      }\n      &__body {\n        position: relative;\n        padding-left: 5px;\n        flex-shrink: 100;\n        .name {\n          font-size: 12px;\n          color: #fff;\n          margin-bottom: 4px;\n        }\n        .msg {\n          background-color: #fff;\n          border-radius: 10px;\n          padding: 5px;\n          font-size: 14px;\n          margin-left: 8px;\n          position: relative;\n          &:after {\n            content: "";\n            display: inline-block;\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-style: solid;\n            border-width: 6.5px 12px 6.5px 0;\n            border-color: transparent #fff transparent transparent;\n            left: -10px;\n            top: 12px;\n          }\n        }\n      }\n      &__date {\n        font-size: 12px;\n        display: flex;\n        align-items: flex-end;\n        padding-left: 5px;\n        color: #fff;\n        flex-shrink: 40;\n      }\n      &-user {\n        ul {\n          flex-direction: row-reverse;\n        }\n        .msgBox__body {\n          padding-right: 5px;\n          .name {\n            text-align: right;\n          }\n          .msg {\n            margin-right: 8px;\n            background-color: rgb(134, 217, 123);\n            &:after {\n              border-width: 6.5px 0 6.5px 12px;\n              border-color: transparent transparent transparent\n                rgb(134, 217, 123);\n              left: auto;\n              right: -10px;\n              top: 12px;\n            }\n          }\n        }\n      }\n      &-announcement {\n        text-align: center;\n        padding: 5px;\n        color: #fff;\n        > div {\n          padding: 10px;\n          background-color: #00000030;\n          display: inline-block;\n          border-radius: 50px;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n  .footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    background-color: #fff;\n    z-index: 2;\n    display: grid;\n    grid-template-columns: 100px 1fr 40px;\n    padding: 5px 0;\n    &__icon {\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      color: #807777;\n    }\n    .input {\n      border: none;\n      background-color: #eeeeee;\n      border-radius: 20px;\n      padding: 0 10px;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n'])),be),pe=[{path:"/",component:v,exact:!0},{path:"/lobby",component:Q,exact:!0},{path:"/chat-room/:id",component:function(){var e=Object(d.g)(),n=Object(a.useContext)(fe),o=t(203),c=Object(a.useState)(""),i=Object(r.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)([]),j=Object(r.a)(u,2),b=j[0],m=j[1],x=Object(a.useState)(!1)[0];Object(a.useEffect)((function(){return(null===n||void 0===n?void 0:n.state.id)&&(null===n||void 0===n?void 0:n.state.name)&&(null===n||void 0===n?void 0:n.state.selectChatRoom)||e.push("/lobby"),(null===n||void 0===n?void 0:n.state.ws)&&(null===n||void 0===n?void 0:n.state.selectChatRoom)&&(n.state.ws.emit("joinChatRoom",{id:n.state.id,name:n.state.name,roomId:n.state.selectChatRoom.id}),p()),function(){f()}}),[]);var p=function(){(null===n||void 0===n?void 0:n.state.ws)&&(null===n||void 0===n?void 0:n.state.selectChatRoom)&&(n.state.ws.on("roomMsgEmit",(function(e){var n=e.id,t=e.name,a=e.data,o=e.create_at;m((function(e){return[].concat(Object(V.a)(e),[{id:n,name:t,data:a,create_at:o}])}))})),n.state.ws.on("announcement",(function(e){var n=e.id,t=e.name,a=e.data,o=e.create_at;m((function(e){return[].concat(Object(V.a)(e),[{id:n,name:t,data:a,create_at:o}])}))})))},f=function(){(null===n||void 0===n?void 0:n.state.ws)&&n.state.selectChatRoom&&n.state.ws.emit("disconnectChatRoom",{id:n.state.id,name:n.state.name,roomId:n.state.selectChatRoom.id})},O=function(e){switch(e.data.type){case"text":return Object(h.jsxs)("ul",{className:"msgBox__ul",children:[Object(h.jsx)("li",{className:"msgBox__profile",children:Object(h.jsx)("img",{className:"img",src:me,alt:"User Profile"})}),Object(h.jsxs)("li",{className:"msgBox__body",children:[Object(h.jsx)("div",{className:"name",children:e.name}),Object(h.jsx)("div",{className:"msg",children:e.data.text})]}),Object(h.jsx)("li",{className:"msgBox__date",children:e.create_at})]});case"image":case"voice":return Object(h.jsxs)("ul",{className:"msgBox__ul",children:[Object(h.jsx)("li",{className:"msgBox__profile",children:Object(h.jsx)("img",{className:"img",src:me,alt:"User Profile"})}),Object(h.jsxs)("li",{className:"msgBox__body",children:[Object(h.jsx)("div",{className:"name",children:e.name}),Object(h.jsx)("div",{className:"msg",children:"\u5c1a\u672a\u652f\u63f4\u5716\u7247"})]}),Object(h.jsx)("li",{className:"msgBox__date",children:e.create_at})]});default:return Object(h.jsx)(h.Fragment,{})}};return Object(h.jsxs)(xe,{children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("span",{className:"header__icon",children:Object(h.jsx)(Z.a,{className:"cursor-pointer",onClick:function(){e.push("/lobby")}})}),Object(h.jsx)("span",{className:"title",children:(null===n||void 0===n?void 0:n.state.selectChatRoom)?null===n||void 0===n?void 0:n.state.selectChatRoom.name:"unKnow Room Name"}),Object(h.jsxs)("div",{className:"header__icon",children:[Object(h.jsx)(te.a,{className:"cursor-pointer"}),Object(h.jsx)(ee.a,{className:"cursor-pointer"})]})]}),Object(h.jsx)("section",{className:"body",children:b.map((function(e,t){return"announcement"===e.id?Object(h.jsx)("div",{className:"msgBox-announcement",children:Object(h.jsx)("div",{children:"text"===e.data.type?e.data.text:"TODO: \u516c\u544a\u73fe\u5728\u53ea\u652f\u63f4\u6587\u5b57"})},e.id+t):Object(h.jsx)("div",{className:"".concat(e.id===(null===n||void 0===n?void 0:n.state.id)?"msgBox-user":"msgBox-others"," msgBox"),children:O(e)},t)}))}),Object(h.jsxs)("section",{className:"footer",children:[Object(h.jsxs)("div",{className:"footer__icon",children:[Object(h.jsx)(oe.a,{className:"cursor-pointer"}),Object(h.jsx)(ie.a,{className:"cursor-pointer"}),Object(h.jsx)(re.a,{className:"cursor-pointer"})]}),Object(h.jsx)("input",{type:"text",className:"input",placeholder:"Aa",onChange:function(e){l((function(n){return e.target.value}))},value:s}),Object(h.jsx)("div",{className:"footer__icon",children:s?Object(h.jsx)(je.a,{className:"cursor-pointer",style:{color:"#6682ec"},onClick:function(){s&&!x&&((null===n||void 0===n?void 0:n.state.ws)&&n.state.selectChatRoom&&n.state.ws.emit("clientSendMessage",{id:n.state.id,name:n.state.name,data:{type:"text",text:s},create_at:o().format("YYYY-MM-DD HH:mm:ss"),modeInfo:{mode:"room",roomId:n.state.selectChatRoom.id}}),l((function(e){return""})))}}):Object(h.jsx)(de.a,{className:"cursor-pointer"})})]})]})},exact:!0}],he=function(e){return Object(h.jsx)(d.b,Object(s.a)(Object(s.a)({},e),{},{path:e.path,render:function(n){return Object(h.jsx)(e.component,Object(s.a)(Object(s.a)({},n),{},{routes:e.routes}))}}))},fe=Object(a.createContext)(null),Oe=function(){var e=Object(a.useState)({name:null,chatRoomInfo:[],isLogout:!1}),n=Object(r.a)(e,2),t=n[0],o=n[1];return Object(h.jsx)(fe.Provider,{value:{state:t,setState:o},children:Object(h.jsx)(l.a,{basename:"/Socketio-Client",children:Object(h.jsxs)(d.d,{children:[pe.map((function(e,n){return Object(h.jsx)(he,Object(s.a)({},e),n)})),Object(h.jsx)(d.a,{to:"/"})]})})})},ve=(t(205),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,283)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),c(e),i(e)}))});i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(Oe,{})}),document.getElementById("root")),ve()}},[[207,1,2]]]);
//# sourceMappingURL=main.0190b40b.chunk.js.map