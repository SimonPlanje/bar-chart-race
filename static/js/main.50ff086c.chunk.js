(this["webpackJsonpbar-chart-race"]=this["webpackJsonpbar-chart-race"]||[]).push([[0],{217:function(t,n,e){},219:function(t,n,e){"use strict";e.r(n);var r=e(8),a=e(0),i=e.n(a),c=e(111),o=e.n(c),u=(e(217),e(6)),s=e.n(u),f=e(15),l=e(4),d=e(1),p=e(2),h=e(113);var g=function(){function t(){return(t=Object(f.a)(s.a.mark((function t(){var n,e,r,a,i,c,o,u,g,m,b,v,j,x,w,O,y,k,S,A,M,P,C,D,B,F,z,T,N,I,L,R,H,V,Y,E,J,G,X,K,U,q,_,Q,W,Z,$,tt,nt;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return nt=function(){return(nt=Object(f.a)(s.a.mark((function t(){var n,e,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:0,U=n,e=g.transition().duration(K).ease(p.e).on("end",(function(){n<k.length?(K=u,p.o(".controls").text("Pauzeer"),tt(n+1)):p.o(".controls").text("Afspelen")})).on("interrupt",(function(){console.log("INTERRUPTED")})),n<k.length&&(H.value(n),w.domain([0,k[n][1][0].midden]),$(k[n],e),W(k[n],e),Q(k[n],e),Z(k[n],e)),t.next=6,e.end().then((function(){})).catch((function(){}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)},tt=function(){return nt.apply(this,arguments)},_=function(){tt(U),console.log("START")},q=function(){console.log("STOP"),g.interrupt()},X=function(t){var n=t.append("g").style("font","bold 12px var(--ftm-graph)").style("font-variant-numeric","tabular-nums").attr("text-anchor","start").selectAll("text");return function(t,e){var r=Object(l.a)(t,2)[1];return n=n.data(r.slice(0,o),(function(t){return t.partij})).join((function(t){return t.append("text").attr("transform",(function(t){return"translate(".concat(w((L.get(t)||t).midden),",").concat(O((L.get(t)||t).ranking),")")})).attr("y",O.bandwidth()/2).attr("x",10).attr("dy","-0.25em").text((function(t){return t.partij})).call((function(t){return t.append("tspan").attr("fill-opacity",.7).attr("font-weight","normal").attr("x",10).attr("dy","1.15em")}))}),(function(t){return t}),(function(t){return t.transition(e).remove().attr("transform",(function(t){return"translate(".concat(w((R.get(t)||t).midden),",").concat(O((R.get(t)||t).ranking),")")})).call((function(t){return t.select("tspan").tween("text",(function(t){return G(t.midden,(R.get(t)||t).midden)}))}))})).call((function(t){return t.transition(e).attr("transform",(function(t){return"translate(".concat(w(t.midden),",").concat(O(t.ranking),")")})).call((function(t){return t.select("tspan").tween("text",(function(t){return G((L.get(t)||t).midden,t.midden)}))}))}))}},G=function(t,n){var e=p.i(t,n);return function(t){this.textContent="\u20ac"+v(e(t))}},J=function(t){var n=t.append("g").selectAll("rect");return function(t,e){var r=Object(l.a)(t,2)[1];return n=n.data(r.slice(0,o),(function(t){return t.partij})).join((function(t){return t.append("rect").attr("fill",(function(t){return E(t.partij)})).attr("height",O.bandwidth()).attr("x",w(0)).attr("y",(function(t){return O((L.get(t)||t).ranking)})).attr("width",(function(t){return w((L.get(t)||t).midden)-w(0)}))}),(function(t){return t}),(function(t){return t.transition(e).remove().attr("y",(function(t){return O((R.get(t)||t).ranking)})).attr("width",(function(t){return w((R.get(t)||t).midden)-w(0)}))})).call((function(t){return t.transition(e).attr("y",(function(t){return O(t.ranking)})).attr("width",(function(t){return w(t.midden)-w(0)}))}))}},E=function(t){var n="";switch(t){case"D66":n="#B2DF8A";break;case"Forum voor Democratie":case"FvD":n="#9C1616";break;case"VVD":n="#FA9600";break;case"GroenLinks":n="#43B825";break;case"CDA":n="#438A69";break;case"PvdA":n="#FB9B98";break;case"SP":n="#DC3230";break;case"PvdD":n="#B15929";break;case"SGP":n="#F0F025";break;case"DENK":n="#53C5C9";break;case"CU":case"Christen Unie":case"ChristenUnie":n="#1F78B4";break;case"50 Plus":case"50Plus":n="#972EBA";break;case"PVV":n="#88C6C1";break;default:n="var(--link-color)"}return n},Y=function(t){var n=t.append("text").style("font","bold 1em var(--ftm-graph)").style("font-variant-numeric","tabular-nums").attr("text-anchor","end").attr("x",a-6).attr("y",i.top+c*(o+1)).attr("dy","0.32em").text(j(k[0][0]));return function(t,e){var r=Object(l.a)(t,1)[0];e.end().then((function(){return n.text(j(r))})).catch((function(){}))}},V=function(t){var n=t.append("g").attr("transform","translate(0,".concat(i.top,")")),e=p.b(w).tickFormat(x).ticks(a/160).tickSizeOuter(0).tickSizeInner(-c*(o+O.padding()));return function(t,r){n.transition(r).call(e),n.select(".tick:first-of-type text").remove(),n.selectAll(".tick line").attr("stroke","white"),n.select(".domain").remove()}},y=function(t){var n=Array.from(e,(function(n){return{partij:n,midden:t(n)}}));n.sort((function(t,n){return p.d(t.midden,n.midden)}));for(var r=0;r<n.length;++r)n[r].ranking=Math.min(o,r);return n},x=function(t){return"\u20ac"+m.format(",d")(t)},n=JSON.parse(localStorage.getItem("data")),t.next=15,JSON.parse(localStorage.getItem("eventData"));case 15:t.sent,console.log(n),e=new Set(n.map((function(t){return t.partij}))),console.log(e),p.g(n,(function(t){return t.partij})),r=Array.from(p.l(n,(function(t){return Object(l.a)(t,1)[0].midden}),(function(t){return t.datum}),(function(t){return t.partij}))).map((function(t){var n=Object(l.a)(t,2),e=n[0],r=n[1];return[new Date(e),r]})).sort((function(t,n){var e=Object(l.a)(t,1)[0],r=Object(l.a)(n,1)[0];return p.a(e,r)})),a=750,i={top:16,right:80,bottom:65,left:5},c=37,o=13,1,u=350,g=p.o(".barchartdiv").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 500").attr("class","barchart"),m=p.f({decimal:",",thousands:".",grouping:[3],currency:["\u20ac",""]}),b=p.r({dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"]}),v=m.format(",d"),console.log(v),j=b.utcFormat("%e %B %Y"),w=p.n([0,1],[i.left,a-i.right]),O=p.m().domain(p.k(o+1)).rangeRound([i.top,i.top+c*(o+1+.1)]).padding(.1),console.log(y((function(t){return r[0][1].get(t)}))),k=[],C=Object(d.a)(p.j(r));try{for(C.s();!(D=C.n()).done;)for(B=Object(l.a)(D.value,2),F=Object(l.a)(B[0],2),S=F[0],A=F[1],z=Object(l.a)(B[1],2),M=z[0],P=z[1],T=function(t){var n=t/1;k.push([new Date(S*(1-n)+M*n),y((function(t){return(A.get(t)||0)*(1-n)+(P.get(t)||0)*n}))])},N=0;N<=1;++N)T(N)}catch(et){C.e(et)}finally{C.f()}I=p.h(k.flatMap((function(t){return Object(l.a)(t,2)[1]})),(function(t){return t.partij})),L=new Map(I.flatMap((function(t){var n=Object(l.a)(t,2)[1];return p.j(n,(function(t,n){return[n,t]}))}))),R=new Map(I.flatMap((function(t){var n=Object(l.a)(t,2)[1];return p.j(n)}))),p.o(".barchartdiv").append("button").attr("class","controlsRedButton").text("Pauzeer").on("click",(function(t){console.log(t),"Pauzeer"===this.innerHTML?(this.innerHTML="Hervat",q()):"Hervat"===this.innerHTML?(this.innerHTML="Pauzeer",_()):(this.innerHTML="Pauzeer",tt())})),H=Object(h.a)().min(0).max(k.length-1).width(a-i.right+30).step(1).fill("var(--ftm-red)").handle(p.p().type(p.q).size(250)()).on("start",(function(t){tt(t)})).on("drag",(function(t){g.interrupt(),tt(t)})),p.o(".barchartdiv").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 20").attr("class","frameslider").append("g").attr("transform","translate(32,10)").call(H),K=u,U=0,Q=J(g),W=V(g),Z=X(g),$=Y(g),tt(0);case 53:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),Object(r.jsx)("div",{className:"barchartdiv"})},m=e(89),b=e(112),v=function(t){return Object(r.jsxs)(b.a,Object(m.a)(Object(m.a)({width:200,height:200,viewBox:"0 0 200 200"},t),{},{children:[Object(r.jsx)("rect",{y:"30",x:"30",rx:"0",ry:"0",height:"25",width:"40"}),Object(r.jsx)("rect",{y:"60",x:"30",rx:"0",ry:"0",height:"25",width:"55"}),Object(r.jsx)("rect",{y:"90",x:"30",rx:"0",ry:"0",height:"25",width:"74"}),Object(r.jsx)("rect",{y:"120",x:"30",rx:"0",ry:"0",height:"25",width:"120"}),Object(r.jsx)("rect",{y:"150",x:"30",rx:"0",ry:"0",height:"25",width:"58"})]}))};v.metadata={name:"Phuong Dao",github:"dao-phuong",description:"Bar Chart",filename:"BarChart"};var j=v;function x(){return(x=Object(f.a)(s.a.mark((function t(n){var e,r,a,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.data){t.next=6;break}return console.log("all clear"),n("finished"),t.abrupt("return");case 6:c=function(){return(c=Object(f.a)(s.a.mark((function t(){var i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e);case 2:return i=t.sent,t.next=5,a(r);case 5:c=t.sent,localStorage.setItem("data",JSON.stringify(i)),localStorage.setItem("eventData",JSON.stringify(c)),n("finished"),console.log(i),console.log(c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)},i=function(){return(i=Object(f.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.c(n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},a=function(t){return i.apply(this,arguments)},e="https://docs.google.com/spreadsheets/d/e/2PACX-1vSpwttasVjXReLn69FtOXSrwWxYjKqVSKiRenwS9xU76b_-NX6-YRYfRQEwm0ipV3sLAiNPrCz3uO7D/pub?gid=161211961&single=true&output=csv",r="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ispSJft5GVxwMtalNZLqlwrk6j9Ig2azCOlGp0IGfrDbKTFBinaOpgGou1Nyz-_w2-sIqii0_DwK/pub?gid=0&single=true&output=csv",function(){return c.apply(this,arguments)}().catch((function(t){console.log(t),console.log("handled!")}));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=function(t){return x.apply(this,arguments)};var O=function(){var t=Object(a.useState)("loading"),n=Object(l.a)(t,2),e=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(i);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),"loading"===e?Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(j,{})}):"finished"===e?Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(g,{})}):void 0},y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,224)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),i(t),c(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),y()}},[[219,1,2]]]);
//# sourceMappingURL=main.50ff086c.chunk.js.map