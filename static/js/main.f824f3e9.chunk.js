(this["webpackJsonpbar-chart-race"]=this["webpackJsonpbar-chart-race"]||[]).push([[0],{217:function(t,n,e){},219:function(t,n,e){"use strict";e.r(n);var r=e(8),a=e(0),i=e.n(a),c=e(111),o=e.n(c),u=(e(217),e(6)),s=e.n(u),f=e(15),d=e(4),l=e(1),p=e(2),h=e(113);var g=function(){function t(){return(t=Object(f.a)(s.a.mark((function t(){var n,e,r,a,i,c,o,u,g,m,b,j,v,x,w,O,y,k,S,P,C,D,A,M,F,z,B,T,N,I,L,R,H,V,E,J,G,X,Y,K,U,q,_,Q,W,Z,$,tt,nt,et,rt;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return rt=function(){return(rt=Object(f.a)(s.a.mark((function t(){var n,e,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:0,_=n,e=b.transition().duration(q).ease(p.e).on("end",(function(){n<P.length?(q=g,p.o(".controls").text("Pauzeer"),et(n+1)):p.o(".controls").text("Afspelen")})).on("interrupt",(function(){console.log("INTERRUPTED")})),n<P.length&&(E.value(n),y.domain([0,P[n][1][0].midden]),nt(P[n],e),$(P[n],e),Z(P[n],e),tt(P[n],e)),t.next=6,e.end().then((function(){})).catch((function(){}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)},et=function(){return rt.apply(this,arguments)},W=function(){et(_),console.log("START")},Q=function(){console.log("STOP"),b.interrupt()},U=function(t){var n=t.append("g").style("font","bold 12px var(--ftm-graph)").style("font-variant-numeric","tabular-nums").attr("text-anchor","start").selectAll("text");return function(t,e){var r=Object(d.a)(t,2)[1];return n=n.data(r.slice(0,u),(function(t){return t.partij})).join((function(t){return t.append("text").attr("transform",(function(t){return"translate(".concat(y((H.get(t)||t).midden),",").concat(k((H.get(t)||t).ranking),")")})).attr("y",k.bandwidth()/2).attr("x",10).attr("dy","-0.25em").text((function(t){return t.partij})).call((function(t){return t.append("tspan").attr("fill-opacity",.7).attr("font-weight","normal").attr("x",10).attr("dy","1.15em")}))}),(function(t){return t}),(function(t){return t.transition(e).remove().attr("transform",(function(t){return"translate(".concat(y((V.get(t)||t).midden),",").concat(k((V.get(t)||t).ranking),")")})).call((function(t){return t.select("tspan").tween("text",(function(t){return K(t.midden,(V.get(t)||t).midden)}))}))})).call((function(t){return t.transition(e).attr("transform",(function(t){return"translate(".concat(y(t.midden),",").concat(k(t.ranking),")")})).call((function(t){return t.select("tspan").tween("text",(function(t){return K((H.get(t)||t).midden,t.midden)}))}))}))}},K=function(t,n){var e=p.i(t,n);return function(t){this.textContent="\u20ac"+x(e(t))}},Y=function(t){var n=t.append("g").selectAll("rect");return function(t,e){var r=Object(d.a)(t,2)[1];return n=n.data(r.slice(0,u),(function(t){return t.partij})).join((function(t){return t.append("rect").attr("fill",(function(t){return X(t.partij)})).attr("height",k.bandwidth()).attr("x",y(0)).attr("y",(function(t){return k((H.get(t)||t).ranking)})).attr("width",(function(t){return y((H.get(t)||t).midden)-y(0)}))}),(function(t){return t}),(function(t){return t.transition(e).remove().attr("y",(function(t){return k((V.get(t)||t).ranking)})).attr("width",(function(t){return y((V.get(t)||t).midden)-y(0)}))})).call((function(t){return t.transition(e).attr("y",(function(t){return k(t.ranking)})).attr("width",(function(t){return y(t.midden)-y(0)}))}))}},X=function(t){var n="";switch(t){case"D66":n="#B2DF8A";break;case"Forum voor Democratie":case"FvD":n="#9C1616";break;case"VVD":n="#FA9600";break;case"GroenLinks":n="#43B825";break;case"CDA":n="#438A69";break;case"PvdA":n="#FB9B98";break;case"SP":n="#DC3230";break;case"PvdD":n="#B15929";break;case"SGP":n="#F0F025";break;case"DENK":n="#53C5C9";break;case"CU":case"Christen Unie":case"ChristenUnie":n="#1F78B4";break;case"50 Plus":case"50Plus":n="#972EBA";break;case"PVV":n="#88C6C1";break;default:n="var(--link-color)"}return n},G=function(t){var n=t.append("text").style("font","bold 1em var(--ftm-red)").attr("text-anchor","end").attr("x",i-6).attr("y",c.top+o*(u+1)).attr("dy","0.32em").text(w(P[0][0]));return function(t,e){var r=Object(d.a)(t,1)[0];e.end().then((function(){return n.text(w(r))})).catch((function(){}))}},J=function(t){var n=t.append("g").attr("transform","translate(0,".concat(c.top,")")),e=p.b(y).tickFormat(O).ticks(i/160).tickSizeOuter(0).tickSizeInner(-o*(u+k.padding()));return function(t,r){n.transition(r).call(e),n.select(".tick:first-of-type text").remove(),n.selectAll(".tick line").attr("stroke","white"),n.select(".domain").remove()}},S=function(t){var n=Array.from(r,(function(n){return{partij:n,midden:t(n)}}));n.sort((function(t,n){return p.d(t.midden,n.midden)}));for(var e=0;e<n.length;++e)n[e].ranking=Math.min(u,e);return n},O=function(t){return"\u20ac"+j.format(",d")(t)},n=JSON.parse(localStorage.getItem("data")),e=n.filter((function(t){return"0"!==t.partij})),t.next=16,JSON.parse(localStorage.getItem("eventData"));case 16:t.sent,console.log(e),r=new Set(e.map((function(t){return t.partij}))),console.log(r),p.g(e,(function(t){return t.partij})),a=Array.from(p.l(e,(function(t){return Object(d.a)(t,1)[0].midden}),(function(t){return t.datum}),(function(t){return t.partij}))).map((function(t){var n=Object(d.a)(t,2),e=n[0],r=n[1];return[new Date(e),r]})).sort((function(t,n){var e=Object(d.a)(t,1)[0],r=Object(d.a)(n,1)[0];return p.a(e,r)})),i=750,1,g=350,m=(c={top:16,right:80,bottom:65,left:5}).top+(o=37)*(u=13)+c.bottom,b=p.o(".barchartdiv").append("svg").attr("width",i).attr("height",m).attr("class","barchart"),j=p.f({decimal:",",thousands:".",grouping:[3],currency:["\u20ac",""]}),v=p.r({dateTime:"%a %b %e %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"]}),x=j.format(",d"),console.log(x),w=v.utcFormat("%e %B %Y"),y=p.n([0,1],[c.left,i-c.right]),k=p.m().domain(p.k(u+1)).rangeRound([c.top,c.top+o*(u+1+.1)]).padding(.1),console.log(S((function(t){return a[0][1].get(t)}))),P=[],F=Object(l.a)(p.j(a));try{for(F.s();!(z=F.n()).done;)for(B=Object(d.a)(z.value,2),T=Object(d.a)(B[0],2),C=T[0],D=T[1],N=Object(d.a)(B[1],2),A=N[0],M=N[1],I=function(t){var n=t/1;P.push([new Date(C*(1-n)+A*n),S((function(t){return(D.get(t)||0)*(1-n)+(M.get(t)||0)*n}))])},L=0;L<=1;++L)I(L)}catch(at){F.e(at)}finally{F.f()}R=p.h(P.flatMap((function(t){return Object(d.a)(t,2)[1]})),(function(t){return t.partij})),H=new Map(R.flatMap((function(t){var n=Object(d.a)(t,2)[1];return p.j(n,(function(t,n){return[n,t]}))}))),V=new Map(R.flatMap((function(t){var n=Object(d.a)(t,2)[1];return p.j(n)}))),p.o(".barchartdiv").append("button").attr("class","controlsRedButton").text("Pauzeer").on("click",(function(t){console.log(t),"Pauzeer"===this.innerHTML?(this.innerHTML="Hervat",Q()):"Hervat"===this.innerHTML?(this.innerHTML="Pauzeer",W()):(this.innerHTML="Pauzeer",et())})),E=Object(h.a)().min(0).max(P.length-1).width(i-c.right+30).step(1).fill("var(--ftm-red)").handle(p.p().type(p.q).size(250)()).on("start",(function(t){et(t)})).on("drag",(function(t){b.interrupt(),et(t)})),p.o(".barchartdiv").append("svg").attr("width",i).attr("height",m).attr("class","frameslider").append("g").attr("transform","translate(32,10)").call(E),q=g,_=0,Z=Y(b),$=J(b),tt=U(b),nt=G(b),et(0);case 55:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),Object(r.jsx)("div",{className:"barchartdiv"})},m=e(89),b=e(112),j=function(t){return Object(r.jsxs)(b.a,Object(m.a)(Object(m.a)({width:200,height:200,viewBox:"0 0 200 200"},t),{},{children:[Object(r.jsx)("rect",{y:"30",x:"30",rx:"0",ry:"0",height:"25",width:"40"}),Object(r.jsx)("rect",{y:"60",x:"30",rx:"0",ry:"0",height:"25",width:"55"}),Object(r.jsx)("rect",{y:"90",x:"30",rx:"0",ry:"0",height:"25",width:"74"}),Object(r.jsx)("rect",{y:"120",x:"30",rx:"0",ry:"0",height:"25",width:"120"}),Object(r.jsx)("rect",{y:"150",x:"30",rx:"0",ry:"0",height:"25",width:"58"})]}))};j.metadata={name:"Phuong Dao",github:"dao-phuong",description:"Bar Chart",filename:"BarChart"};var v=j;function x(){return(x=Object(f.a)(s.a.mark((function t(n){var e,r,a,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.data){t.next=6;break}return console.log("all clear"),n("finished"),t.abrupt("return");case 6:c=function(){return(c=Object(f.a)(s.a.mark((function t(){var i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e);case 2:return i=t.sent,t.next=5,a(r);case 5:c=t.sent,localStorage.setItem("data",JSON.stringify(i)),localStorage.setItem("eventData",JSON.stringify(c)),n("finished"),console.log(i),console.log(c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)},i=function(){return(i=Object(f.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.c(n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},a=function(t){return i.apply(this,arguments)},e="https://docs.google.com/spreadsheets/d/e/2PACX-1vSpwttasVjXReLn69FtOXSrwWxYjKqVSKiRenwS9xU76b_-NX6-YRYfRQEwm0ipV3sLAiNPrCz3uO7D/pub?gid=161211961&single=true&output=csv",r="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ispSJft5GVxwMtalNZLqlwrk6j9Ig2azCOlGp0IGfrDbKTFBinaOpgGou1Nyz-_w2-sIqii0_DwK/pub?gid=0&single=true&output=csv",function(){return c.apply(this,arguments)}().catch((function(t){console.log(t),console.log("handled!")}));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=function(t){return x.apply(this,arguments)};var O=function(){var t=Object(a.useState)("loading"),n=Object(d.a)(t,2),e=n[0],i=n[1];return Object(a.useEffect)((function(){function t(){return(t=Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(i);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),"loading"===e?Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(v,{})}):"finished"===e?Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(g,{})}):void 0},y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,224)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),i(t),c(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),y()}},[[219,1,2]]]);
//# sourceMappingURL=main.f824f3e9.chunk.js.map