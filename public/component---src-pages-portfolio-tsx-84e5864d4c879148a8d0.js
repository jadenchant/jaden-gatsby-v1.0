/*! For license information please see component---src-pages-portfolio-tsx-84e5864d4c879148a8d0.js.LICENSE.txt */
(self.webpackChunkjaden_v1_0=self.webpackChunkjaden_v1_0||[]).push([[341],{8816:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),o=a(59);o.default.registerVersion("firebase","8.3.3","app"),o.default.apps.length||o.default.initializeApp({apiKey:"AIzaSyBQRKpOd7Bc42BZ9mxLxFXjB1xpNaphiFw",authDomain:"jaden-chant-v1.firebaseapp.com",databaseURL:"https://jaden-chant-v1-default-rtdb.firebaseio.com",projectId:"jaden-chant-v1",storageBucket:"jaden-chant-v1.appspot.com",messagingSenderId:"1096005807730",appId:"1:1096005807730:web:db565b007d62fcb9a65ceb",measurementId:void 0});var c=o.default,r=a(797),l=a(1969),i=a(6428),s=function(){var e=(0,n.useState)(null),t=e[0],a=e[1],o=(0,n.useState)(""),s=(o[0],o[1]);(0,n.useEffect)((function(){t||c.database().ref("pages/portfolio").once("value").then((function(e){a(e.val())})).catch((function(e){return s("Data Not Found: "+e)}))}),[]);var d,u=n.createElement(r.Z,{title:"Portfolio",description:"portfolio projects",kewords:"portfolio projects"});return d=t?n.createElement("div",{className:"info"},n.createElement("div",null,t.data[0].name)):n.createElement("div",{className:"noInfo"},n.createElement("div",null,"No Info")),n.createElement("main",{className:"portfolio"},u,n.createElement(l.Z,null),n.createElement("section",{className:"content"},d,n.createElement(i.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-tsx-84e5864d4c879148a8d0.js.map