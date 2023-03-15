"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[195],{7176:function(n,e,t){t.d(e,{BQ:function(){return v},Hx:function(){return p},Mc:function(){return l},PY:function(){return i},uV:function(){return f},vw:function(){return u}});var r=t(5861),c=t(7757),a=t.n(c),o="0b11624b950ea9c4284f61844023b09c",s="https://api.themoviedb.org/3/",i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"trending/all/day?api_key=").concat(o));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,console.log(t.results),n.abrupt("return",t.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"genre/movie/list?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r=t.genres.reduce((function(n,e){var t=e.id,r=e.name;return n[t]=r,n}),{}),localStorage.setItem("genresList",JSON.stringify(r)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()},8195:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,c,a,o,s,i,u,l,p,f,v,x,h=t(5861),d=t(9439),g=t(7757),m=t.n(g),Z=t(7689),w=t(2791),j=t(7176),y=t(3874),k=t(168),b=t(1087),F=t(6444),_=(0,F.ZP)(b.rU)(r||(r=(0,k.Z)(["\n    margin-top: 10px;\n    padding: 5px 10px;\n    width: 110px;\n    border-radius: 5px;\n    background-color: ",";\n    transition: transform 250ms linear, color 150ms linear;\n    &:hover,\n    &:focus {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n"])),(function(n){return n.theme.footer})),P=F.ZP.div(c||(c=(0,k.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    gap: 60px;\n    margin-top: 20px;\n\n"]))),S=F.ZP.img(a||(a=(0,k.Z)(["\n    width: 350px;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 5px;\n"]))),U=F.ZP.div(o||(o=(0,k.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 450px;\n\n"]))),O=F.ZP.h1(s||(s=(0,k.Z)(["\n\n"]))),C=F.ZP.p(i||(i=(0,k.Z)(["\n    margin-top: 20px;\n"]))),M=F.ZP.h2(u||(u=(0,k.Z)(["\n    margin-top: 20px;\n\n"]))),B=F.ZP.p(l||(l=(0,k.Z)(["\n    margin-top: 20px;\n\n"]))),D=F.ZP.h3(p||(p=(0,k.Z)(["\n    margin-top: 20px;\n\n"]))),H=F.ZP.ul(f||(f=(0,k.Z)(["\n    display: flex;\n    gap: 5px;\n    margin-top: 10px;\n\n"]))),I=F.ZP.nav(v||(v=(0,k.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    gap: 15px;\n    margin-top: 20px;\n"]))),L=(0,F.ZP)(b.OL)(x||(x=(0,k.Z)(["\n    border-radius: 5px;\n    padding: 5px 10px;\n    background-color: ",";\n    transition: transform 250ms linear, color 150ms linear;\n    &:hover,\n    &:focus {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n    &.active {\n        transform: scale(1.07);\n        color: #FFFFFF;\n    }\n"])),(function(n){return n.theme.header})),q=t(184),E=function(n){var e,t,r=n.movieDetails,c=r.poster_path,a=r.genres,o=r.original_title,s=r.overview,i=r.vote_average,u=null!==(e=null===(t=n.location.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_,{to:u,children:" Back to Movies"}),(0,q.jsxs)(P,{children:[(0,q.jsx)(S,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(c),alt:o}),(0,q.jsxs)(U,{children:[(0,q.jsx)(O,{children:o}),(0,q.jsxs)(C,{children:["Users score: ","".concat((10*i).toFixed(0),"%")]}),(0,q.jsx)(M,{children:"Overview"}),(0,q.jsx)(B,{children:s}),(0,q.jsx)(D,{children:"Genres"}),a&&(0,q.jsx)(H,{children:a.map((function(n){var e=n.name,t=n.id;return(0,q.jsx)("li",{children:e},t)}))}),(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{to:"reviews",children:"Reviews"}),(0,q.jsx)(L,{to:"cast",children:"Cast"})]})]})]}),(0,q.jsx)(w.Suspense,{fallback:(0,q.jsx)(y.$,{}),children:(0,q.jsx)(Z.j3,{})})]})},G=function(){var n=(0,Z.UO)().movieId,e=(0,w.useState)([]),t=(0,d.Z)(e,2),r=t[0],c=t[1],a=(0,Z.TH)();return console.log(r),(0,w.useEffect)((function(){var e=function(){var n=(0,h.Z)(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.Mc)(e);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[n]),(0,q.jsx)(E,{movieDetails:r,location:a})}},5861:function(n,e,t){function r(n,e,t,r,c,a,o){try{var s=n[a](o),i=s.value}catch(u){return void t(u)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var o=n.apply(e,t);function s(n){r(o,c,a,s,i,"next",n)}function i(n){r(o,c,a,s,i,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=195.24486b2f.chunk.js.map