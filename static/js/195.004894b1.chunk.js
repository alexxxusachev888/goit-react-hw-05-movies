"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[195],{7176:function(n,e,t){t.d(e,{BQ:function(){return h},Hx:function(){return d},Mc:function(){return l},PY:function(){return u},uV:function(){return f},vw:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),o=t(7596),i="0b11624b950ea9c4284f61844023b09c",s="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,fetch("".concat(s,"trending/all/day?api_key=").concat(i,"&page=").concat(e));case 4:return t=n.sent,n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,n.prev=1,n.next=4,fetch("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 4:return r=n.sent,n.next=7,r.json();case 7:return 0===(a=n.sent).results.length&&o.Am.warn("Nothing was found on your request"),n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"genre/movie/list?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r=t.genres.reduce((function(n,e){var t=e.id,r=e.name;return n[t]=r,n}),{}),localStorage.setItem("genresList",JSON.stringify(r)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()},8195:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,c,o,i,s,u,p,l,d,f,h,x=t(5861),v=t(9439),m=t(7757),g=t.n(m),w=t(7689),Z=t(2791),j=t(7176),y=t(3874),b=t(168),k=t(1087),F=t(6444),_=(0,F.ZP)(k.rU)(r||(r=(0,b.Z)(["\n    margin-top: 10px;\n    padding: 5px 10px;\n    width: 110px;\n    border-radius: 5px;\n    background-color: ",";\n    transition: transform 250ms linear, color 150ms linear;\n    &:hover,\n    &:focus {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n"])),(function(n){return n.theme.footer})),P=F.ZP.div(a||(a=(0,b.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 60px;\n    margin-top: 20px;\n\n    @media screen and (min-width: 320px) {\n       flex-wrap: wrap;\n    }\n\n    @media screen and (min-width: 768px) {\n        margin-top: 40px;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        margin-top: 20px;\n    }\n\n"]))),S=F.ZP.img(c||(c=(0,b.Z)(["\n    width: 350px;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 5px;\n\n    @media screen and (min-width: 768px) {\n        width: 500px;\n        height: 700px;\n     }\n     \n     @media screen and (min-width: 1280px) {\n        width: 350px;\n        height: 450px;\n     }\n"]))),U=F.ZP.div(o||(o=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 450px;\n\n    @media screen and (min-width: 320px) {\n        margin-bottom: 30px;\n     }\n\n     @media screen and (min-width: 768px) {\n        width: 500px;;\n     }\n     @media screen and (min-width: 1280px) {\n        width: 450px;\n        height: 450px;\n     }\n\n"]))),O=F.ZP.h1(i||(i=(0,b.Z)(["\n\n"]))),C=F.ZP.p(s||(s=(0,b.Z)(["\n    margin-top: 20px;\n"]))),M=F.ZP.h2(u||(u=(0,b.Z)(["\n    margin-top: 20px;\n\n"]))),q=F.ZP.p(p||(p=(0,b.Z)(["\n    margin-top: 20px;\n\n"]))),B=F.ZP.h3(l||(l=(0,b.Z)(["\n    margin-top: 20px;\n\n"]))),D=F.ZP.ul(d||(d=(0,b.Z)(["\n    display: flex;\n    gap: 5px;\n    margin-top: 10px;\n\n"]))),H=F.ZP.nav(f||(f=(0,b.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    gap: 15px;\n    margin-top: 20px;\n"]))),I=(0,F.ZP)(k.OL)(h||(h=(0,b.Z)(["\n    border-radius: 5px;\n    padding: 5px 10px;\n    background-color: ",";\n    transition: transform 250ms linear, color 150ms linear;\n    &:hover,\n    &:focus {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n    &.active {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n"])),(function(n){return n.theme.header})),L=t(184),N=function(n){var e,t,r=n.movieDetails,a=r.poster_path,c=r.genres,o=r.original_title,i=r.overview,s=r.vote_average,u=null!==(e=null===(t=n.location.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{to:u,children:" Back to Movies"}),(0,L.jsxs)(P,{children:[(0,L.jsx)(S,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(a),alt:o}),(0,L.jsxs)(U,{children:[(0,L.jsx)(O,{children:o}),(0,L.jsxs)(C,{children:["Users score: ","".concat((10*s).toFixed(0),"%")]}),(0,L.jsx)(M,{children:"Overview"}),(0,L.jsx)(q,{children:i}),(0,L.jsx)(B,{children:"Genres"}),c&&(0,L.jsx)(D,{children:c.map((function(n){var e=n.name,t=n.id;return(0,L.jsx)("li",{children:e},t)}))}),(0,L.jsxs)(H,{children:[(0,L.jsx)(I,{to:"reviews",children:"Reviews"}),(0,L.jsx)(I,{to:"cast",children:"Cast"})]})]})]}),(0,L.jsx)(Z.Suspense,{fallback:(0,L.jsx)(y.$,{}),children:(0,L.jsx)(w.j3,{})})]})},A=function(){var n=(0,w.UO)().movieId,e=(0,Z.useState)([]),t=(0,v.Z)(e,2),r=t[0],a=t[1],c=(0,w.TH)();return console.log(r),(0,Z.useEffect)((function(){var e=function(){var n=(0,x.Z)(g().mark((function n(e){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.Mc)(e);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[n]),(0,L.jsx)(N,{movieDetails:r,location:c})}},5861:function(n,e,t){function r(n,e,t,r,a,c,o){try{var i=n[c](o),s=i.value}catch(u){return void t(u)}i.done?e(s):Promise.resolve(s).then(r,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,c){var o=n.apply(e,t);function i(n){r(o,a,c,i,s,"next",n)}function s(n){r(o,a,c,i,s,"throw",n)}i(void 0)}))}}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=195.004894b1.chunk.js.map