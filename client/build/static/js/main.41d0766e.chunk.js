(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(70)},35:function(e,t,n){},36:function(e,t,n){},67:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(28),r=n.n(a),i=(n(35),n(11)),l=(n(36),n(29)),u=n.n(l);var s=function(){var e=Object(o.useState)({}),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),l=Object(i.a)(r,2),s=l[0],m=l[1];return fetch("/flower").then((function(e){return e.json()})).then((function(e){a(e)})),Object(o.useEffect)((function(){var e=u()("http://localhost:4001");return e.on("FromAPI",(function(e){m(e)})),function(){return e.disconnect()}}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,n.name),c.a.createElement("p",null,n.color),c.a.createElement("p",null,"It's ",c.a.createElement("time",{dateTime:s},s)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.41d0766e.chunk.js.map