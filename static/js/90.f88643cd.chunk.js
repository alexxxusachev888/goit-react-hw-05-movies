"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[90],{129:function(e,n,t){t.d(n,{Hx:function(){return v},Mc:function(){return l},PY:function(){return s},uV:function(){return p},vw:function(){return i}});var r=t(861),c=t(757),a=t.n(c),o="0b11624b950ea9c4284f61844023b09c",u="https://api.themoviedb.org/3/",s=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"trending/all/day?api_key=").concat(o));case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.cast);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},90:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(861),c=t(439),a=t(757),o=t.n(a),u=t(689),s=t(791),i=t(129),l=t(87),v=t(184),p=function(e){var n,t,r=e.movieId,c=e.movieDetails,a=null!==(n=null===(t=e.location.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.rU,{to:a,children:" Back to Movies"}),(0,v.jsx)("h1",{children:"Movies Details Page"}),(0,v.jsx)("p",{children:c.original_title}),(0,v.jsx)("p",{children:c.popularity}),(0,v.jsx)("p",{children:c.overview}),(0,v.jsxs)("nav",{children:[(0,v.jsx)(l.rU,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"}),(0,v.jsx)(l.rU,{to:"/movies/".concat(r,"/cast"),children:"Cast"})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading subpage..."}),children:(0,v.jsx)(u.j3,{})})]})},f=function(){var e=(0,u.UO)().movieId,n=(0,s.useState)([]),t=(0,c.Z)(n,2),a=t[0],l=t[1],f=(0,u.TH)();return(0,s.useEffect)((function(){var n=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Mc)(n);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();n(e)}),[e]),(0,v.jsx)(p,{movieId:e,movieDetails:a,location:f})}},861:function(e,n,t){function r(e,n,t,r,c,a,o){try{var u=e[a](o),s=u.value}catch(i){return void t(i)}u.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var o=e.apply(n,t);function u(e){r(o,c,a,u,s,"next",e)}function s(e){r(o,c,a,u,s,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=90.f88643cd.chunk.js.map