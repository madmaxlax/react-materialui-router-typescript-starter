(this["webpackJsonptypescript-material-ui"]=this["webpackJsonptypescript-material-ui"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(141),a=n(142),o=n(0),r=n(35),i=n.n(r),s=n(27),j=(n(89),n(14));function l(){var e=Object(j.g)().pathname;return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var b=n(146),u=n(145),m=n(110),O=n(6),d=n(22),h=n(143),x=n(144),p=n(2),f=function(e){try{return new URL(e,window.location.origin).hostname===window.location.hostname}catch(t){return!1}},g=function(e){return e.disabled?Object(p.jsx)(h.a,Object(d.a)({},e)):Object(p.jsx)(x.a,Object(d.a)(Object(d.a)({},e),{},{href:f(e.to)?void 0:e.to,component:f(e.to)?s.b:"a",to:f(e.to)?e.to:"/"}))},y=Object(m.a)((function(e){return{footerRoot:{},footerContainer:{minHeight:100}}})),v=function(e){var t=e.className,n=y();return Object(p.jsx)(b.a,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",className:Object(O.a)(n.footerRoot,t),children:Object(p.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",className:n.footerContainer,children:Object(p.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(p.jsx)(g,{color:"inherit",to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})})})},w=n(39),N=function(e){var t=e.layout,n=e.component,c=e.layoutprops,a=Object(w.a)(e,["layout","component","layoutprops"]);return Object(p.jsx)(j.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return Object(p.jsx)(t,{layoutprops:c,children:Object(p.jsx)(n,Object(d.a)({},e))})}}))},C=n(10),S=n(137),F=n(13),R=n(147),k=n(149),I=n(150),E=n(151),_=n(139),B=n(75),T=n.n(B),A=Object(S.a)((function(e){return{root:{},flexGrow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},drawer:{}}})),H=function(e){var t=e.className,n=Object(w.a)(e,["className"]),c=A(),a=Object(o.useState)(!1),r=Object(F.a)(a,2),i=r[0],s=r[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(R.a,Object(d.a)(Object(d.a)({},n),{},{position:"relative",className:Object(O.a)(c.root,t),children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(I.a,{edge:"start",onClick:function(){return s(!i)},className:c.menuButton,color:"inherit","aria-label":"menu",children:Object(p.jsx)(T.a,{})}),Object(p.jsx)(u.a,{variant:"h6",className:c.title,component:"div",children:"App"}),Object(p.jsx)(E.a,{color:"inherit",children:"Button"})]})})),Object(p.jsx)(_.a,{anchor:"left",classes:{paper:c.drawer},onClose:function(){return s(!1)},open:i,variant:"temporary",children:Object(p.jsx)("div",{className:Object(O.a)(c.root,t),children:Object(p.jsx)(E.a,{children:"Example link"})})})]})},P=Object(S.a)((function(e){return{root:{},content:{paddingTop:e.spacing(10)}}})),W=function(e){var t=e.className,n=e.children,c=Object(w.a)(e,["className","children"]),a=P(),o=Object(j.h)();return console.log(o),Object(p.jsxs)("div",{className:Object(O.a)(Object(C.a)({},a.root,!0),t),children:[Object(p.jsx)(H,Object(d.a)({},c)),Object(p.jsx)(b.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsxs)("main",{className:a.content,children:[n,Object(p.jsx)(v,{})]})})]})},D=Object(m.a)((function(e){return{minimalRoot:{},main:{minHeight:"300px"},leftSide:{backgroundColor:e.palette.primary.main},content:{}}})),J=function(e){var t=e.children,n=(e.layoutprops,D());return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.a,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",className:n.minimalRoot,children:[Object(p.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",alignItems:"stretch",children:Object(p.jsxs)(b.a,{item:!0,container:!0,xs:12,justifyContent:"center",alignItems:"stretch",className:n.main,children:[Object(p.jsx)(b.a,{item:!0,xs:6,justifyContent:"center",alignItems:"center",container:!0,className:n.leftSide,children:Object(p.jsx)(u.a,{variant:"h2",children:"Appname"})}),Object(p.jsx)(b.a,{item:!0,justifyContent:"center",alignItems:"center",container:!0,xs:6,children:Object(p.jsx)("main",{className:n.content,children:t})})]})}),Object(p.jsx)(v,{})]})})},U=Object(m.a)((function(e){return{root:{}}})),L=function(){var e=U(),t=Object(j.h)();return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)("h1",{children:"Main Page!"}),Object(p.jsx)(g,{to:"/",children:"Back to minimal page"}),Object(p.jsx)("pre",{children:JSON.stringify(t)})]})},G=Object(m.a)((function(e){return{root:{}}})),K=function(){var e=G(),t=Object(j.h)();return Object(p.jsx)(b.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.root,children:Object(p.jsx)(b.a,{item:!0,children:Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)("h1",{children:"First Page!"}),Object(p.jsx)(g,{to:"/main/page-name",children:"Route: main page"}),Object(p.jsx)("br",{}),Object(p.jsx)(g,{to:"/doesntexist",children:"Route: page that doesnt exist"}),Object(p.jsx)("br",{}),Object(p.jsx)("pre",{children:JSON.stringify(t)})]})})})},M=Object(m.a)((function(e){return{root:{}}})),V=function(){var e=M(),t=Object(j.h)();return Object(p.jsx)(b.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.root,children:Object(p.jsxs)(b.a,{item:!0,children:[Object(p.jsx)("h1",{children:"Page Not Found!"}),Object(p.jsx)("br",{}),Object(p.jsx)(g,{to:"/",children:"Back Home"}),Object(p.jsx)("br",{}),Object(p.jsx)("pre",{children:JSON.stringify(t)})]})})},Y=function(){return Object(p.jsxs)(j.d,{children:[Object(p.jsx)(N,{component:K,exact:!0,layout:J,layoutprops:{},path:["/"]}),Object(p.jsx)(N,{component:L,exact:!0,layout:W,path:"/main/:pageName"}),Object(p.jsx)(N,{component:V,exact:!0,layout:J,layoutprops:{},path:"/404-not-found"}),Object(p.jsx)(j.a,{push:!0,to:{pathname:"/404-not-found",search:"?from="+encodeURIComponent(window.location.href),state:{from:window.location.href}}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(40),$=n(77),z=Object($.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:q.a.A400},background:{default:"#fff"}},components:{MuiButton:{variants:[{props:{variant:"custom"},style:{backgroundColor:"#00acee",color:"#FFFFFF","&:hover":{backgroundColor:"#007cad"}}}]}}});z.customValues={primaryFontFamily:"Roboto",secondaryFontFamily:"Arial",customColor:"green"};var Q=z;i.a.render(Object(p.jsxs)(a.a,{theme:Q,children:[Object(p.jsx)(c.a,{}),Object(p.jsxs)(s.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASE_URL||"/",children:[Object(p.jsx)(l,{}),Object(p.jsx)(Y,{})]})]}),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.efa53515.chunk.js.map