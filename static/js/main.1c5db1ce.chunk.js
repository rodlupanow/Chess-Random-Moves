(this.webpackJsonpchessro2=this.webpackJsonpchessro2||[]).push([[0],{11:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),u=(a(11),a(1)),o=a(2),b=a.n(o),h=function(){for(var e=[],t=["a","b","c","d","e","f","g","h"],a=["1","2","3","4","5","6","7","8"],n=0;n<t.length;n++)for(var r=0;r<a.length;r++)e.push(t[n]+a[r]);return e},m=function(){for(var e=[],t=[],a=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(["R","r","q","Q","B","b","n","N","R","r","q","B","N","b","n"]),n=h(),r=function(e){return Math.floor(Math.random()*e.length)},c=["a","b","c","d","e","f","g","h"],l=["1","2","3","4","5","6","7","8"],u=Number(r(l)),o=Number(r(c)),b=Number(r(l)),m=Number(r(c)),f=0;f<Math.floor(Math.random()*a.length);f++){for(var i=0;i<n.length;i++)n[i]===c[o]+l[u]&&(n.splice(i,1),n.splice(0,1)),n[i]===c[m]+l[b]&&(n.splice(i,1),n.splice(n.length-1,1));for(var s=n[Math.floor(Math.random()*n.length)],d=0;d<n.length;d++)n[d]===s&&n.splice(d,1);e.push(a[f]+"@"+s)}return function(){for(var a=0;a<e.length;a++){var n=e[a];t.push(n.substr(2))}"TRUE"===function(){if(u===b||u===b+1||u===b-1)return"TRUE"}()&&"TRUE"===function(){if(o===m||o===m+1||o===m-1)return"TRUE"}()?(console.log("kings were too close, so sent to opposite corners"),e.push("K@a1","k@h8")):e.push("K@"+c[o]+l[u],"k@"+c[m]+l[b])}(),console.log(e),e},f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(e){c(m())}},"Create"),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:a,allowMoves:!1}))},i=function(){var e=Object(n.useState)(["e"]),t=Object(u.a)(e,1)[0],a=Object(n.useState)([2]),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)(["P@"]),m=Object(u.a)(h,2),f=m[0],i=m[1],s=Object(n.useState)([f+t+l]),d=Object(u.a)(s,2),g=d[0],v=d[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return e.target.value,2===Number(l)?o(Number(l)+2):o(Number(l)+1),Number(l)>=7&&(i("Q@"),Number(l)>=8&&(i("P@"),o(2))),void v([f+t+l])}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:g,allowMoves:!1}))},s=function(){var e=["a","b","c","d","e","f","g","h"],t=Object(n.useState)(["b"]),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(Number(1)),h=Object(u.a)(o,2),m=h[0],f=h[1],i=Object(n.useState)(["K@"]),s=Object(u.a)(i,1)[0],d=Object(n.useState)(Number(1)),g=Object(u.a)(d,2),v=g[0],E=g[1],O=Object(n.useState)(["K@a1"]),j=Object(u.a)(O,2),M=j[0],N=j[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return t.target.value,Number(Math.random())>.49?f(Number(m)+1):(Number(Math.random())>.49?E(v+1):E(v-1),f(Number(m)-1)),Number(m)>=8&&f(Number(m)-1),Number(m<=1)&&f(Number(m)+1),Number(v)>=7&&E(Number(v)-1),Number(v)<=0&&E(Number(v)+1),l(e[Number(v)]),N([s+c+m]),void console.log(M)}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:M,allowMoves:!1}))},d=function(){var e=["a","b","c","d","e","f","g","h"],t=["1","2","3","4","5","6","7","8"],a=Object(n.useState)(["b"]),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)(1),m=Object(u.a)(h,2),f=m[0],i=m[1],s=Object(n.useState)(["R@"]),d=Object(u.a)(s,1)[0],g=Object(n.useState)(["R@a1"]),v=Object(u.a)(g,2),E=v[0],O=v[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(a){return a.target.value,function(){var a=Math.floor(Math.random()*t.length);Number(Math.random())>.49?i(t[a]):o(e[a])}(),void O([d+l+f])}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:E,allowMoves:!1}))},g=function(){var e=["a","b","c","d","e","f","g","h"],t=["1","2","3","4","5","6","7","8"],a=Object(n.useState)(Number(4)),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)(Number(4)),m=Object(u.a)(h,2),f=m[0],i=m[1],s=Object(n.useState)(["N@"]),d=Object(u.a)(s,1)[0],g=Object(n.useState)([d+e[l]+t[f]]),v=Object(u.a)(g,2),E=v[0],O=v[1],j=function(){i(f+2),o(l+1)},M=function(){i(f+1),o(l+2)},N=function(){i(f+2),o(l-1)},p=function(){i(f+1),o(l-2)},S=function(){i(f-2),o(l+1)},k=function(){i(f-2),o(l-1)},B=function(){i(f-1),o(l+2)},w=function(){i(f-1),o(l-2)},R=[],C=[];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(a){return function(){var a=[j,M,N,p,S,k,B,w],n=Math.floor(Math.random()*a.length);f<6&&f>2&&l<6&&l>2?(a[Number(n)](),R.push(f),C.push(l),console.log(R,C)):(o(Number(4)),i(Number(4)),console.log("handleBoard2",E,e[l],f,l)),O([d+e[l]+t[f]]),console.log(R,C)}(a.target.value)}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:E,allowMoves:!1}))},v=function(){var e=Object(n.useState)(["B@"]),t=Object(u.a)(e,1)[0],a=Object(n.useState)(["B@e5"]),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)(["e5"]),m=Object(u.a)(h,2),f=m[0],i=m[1],s=[["a1"],["a3","b2","c1"],["a5","b4","c3","d2","e1"],["a7","b6","c5","d4","e3","f2","g1"],["b8","c7","d6","e5","f4","g3","Bh2"],["d8","e7","f6","g5","h4"],["f8","g7","h6"],["h8"]],d=[["g1","h2"],["e1","f2","g3","h4"],["c1","d2","e3","f4","g5","h6"],["a1","b2","c3","d4","e5","f6","g7","h8"],["a3","b4","c5","d6","e7","f8"],["a5","b6","c7","d8"],["a7","b8"]],g=function(e){for(var t=function(t){if(!0===f.some((function(a){return-1!==e[t].indexOf(a)}))){var a=e[t],n=Math.floor(Math.random()*a.length);i([a[n]])}},a=0;a<e.length;a++)t(a)};return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return e.target.value,Number(Math.random())>.49?g(d):g(s),o([t+f]),void console.log(l,f)}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:l,allowMoves:!1}))},E=function(){var e=Object(n.useState)(["B@"]),t=Object(u.a)(e,1)[0],a=Object(n.useState)(["B@e4"]),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)(["e4"]),m=Object(u.a)(h,2),f=m[0],i=m[1],s=[["a8"],["a6","b7","c8"],["a4","b5","c6","d7","e8"],["a2","b3","c4","d4","e6","f7","g8"],["b1","c2","d3","e4","f5","g6","h7"],["d1","e2","f3","g4","h5"],["f1","g2","h3"],["h1"]],d=[["g8","h7"],["e8","f7","g6","h5"],["c8","d7","e6","f5","g4","h3"],["a8","b7","c6","d5","e4","f3","g2","h1"],["a6","b5","c4","d3","e2","f1"],["a4","b3","c2","d1"],["a2","b1"]],g=function(e){for(var t=function(t){if(!0===f.some((function(a){return-1!==e[t].indexOf(a)}))){var a=e[t],n=Math.floor(Math.random()*a.length);i([a[n]])}},a=0;a<e.length;a++)t(a)};return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return e.target.value,Number(Math.random())>.49?g(d):g(s),o([t+f]),void console.log(l,f)}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:l,allowMoves:!1}))},O=[["a1"],["a3","b2","c1"],["a5","b4","c3","d2","e1"],["a7","b6","c5","d4","e3","f2","g1"],["b8","c7","d6","e5","f4","g3","Bh2"],["d8","e7","f6","g5","h4"],["f8","g7","h6"],["h8"],["g1","h2"],["e1","f2","g3","h4"],["c1","d2","e3","f4","g5","h6"],["a1","b2","c3","d4","e5","f6","g7","h8"],["a3","b4","c5","d6","e7","f8"],["a5","b6","c7","d8"],["a7","b8"],["a8"],["a6","b7","c8"],["a4","b5","c6","d7","e8"],["a2","b3","c4","d4","e6","f7","g8"],["b1","c2","d3","e4","f5","g6","h7"],["d1","e2","f3","g4","h5"],["f1","g2","h3"],["h1"],["g8","h7"],["e8","f7","g6","h5"],["c8","d7","e6","f5","g4","h3"],["a8","b7","c6","d5","e4","f3","g2","h1"],["a6","b5","c4","d3","e2","f1"],["a4","b3","c2","d1"],["a2","b1"]],j=function(){var e=["a","b","c","d","e","f","g","h"],t=["1","2","3","4","5","6","7","8"],a=Object(n.useState)("a"),c=Object(u.a)(a,2),l=c[0],o=c[1],h=Object(n.useState)("1"),m=Object(u.a)(h,2),f=m[0],i=m[1],s=Object(n.useState)(["Q@"]),d=Object(u.a)(s,1)[0],g=Object(n.useState)(["Q@a1"]),v=Object(u.a)(g,2),E=v[0],j=v[1],M=function(e){return Math.floor(Math.random()*e.length)};return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(a){return function(){var a=[l+f];if(Number(Math.random())>.499)Number(Math.random())>.499?i(t[M(t)]):o(e[M(e)]);else for(var n=function(e){if(!0===a.some((function(t){return-1!==O[e].indexOf(t)}))){var t=O[e],n=t[Math.floor(Math.random()*t.length)].split().toString();return o(n[0]),i(n[1]),console.log(E,l,f,"caso2",n),"break"}},r=0;r<O.length;r++){if("break"===n(r))break}j([d+l+f])}(a.target.value)}}," Move "),r.a.createElement("hr",null),r.a.createElement(b.a,{pieces:E,allowMoves:!1}))};var M=function(){return r.a.createElement("div",{className:"ChessBoard"},r.a.createElement("h5",null," Chess Random Moves Generator, by Ro "),r.a.createElement("h5",null,"Random Positions"),r.a.createElement(f,null),r.a.createElement("br",null),r.a.createElement("h5",null,"King"),r.a.createElement(s,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Rook"),r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Dark square Bishop"),r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Light Square Bishop"),r.a.createElement(E,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Knight"),r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Pawn"),r.a.createElement(i,null),r.a.createElement("br",null),r.a.createElement("h5",null,"Queen Moves"),r.a.createElement(j,null),r.a.createElement("br",null))};l.a.render(r.a.createElement(M,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(32)}},[[6,1,2]]]);
//# sourceMappingURL=main.1c5db1ce.chunk.js.map