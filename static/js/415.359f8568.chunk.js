"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{129:function(n,e,t){t.d(e,{Hx:function(){return f},Mc:function(){return p},PY:function(){return s},uV:function(){return l},vw:function(){return i}});var r=t(861),c=t(757),a=t.n(c),u="0b11624b950ea9c4284f61844023b09c",o="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"trending/all/day?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"search/movie?api_key=").concat(u,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},126:function(n,e,t){var r=t(87),c=t(184);e.Z=function(n){var e=n.movieArr,t=n.location;return(0,c.jsx)("ul",{children:e.map((function(n){var e=n.id,a=n.title,u=n.vote_average,o=n.backdrop_path,s=n.genre_ids,i=n.release_date;return(0,c.jsxs)("li",{children:[(0,c.jsx)(r.OL,{to:"/movies/".concat(e),state:{from:t},children:(0,c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(o),alt:a})}),(0,c.jsx)("h2",{children:a}),(0,c.jsx)("p",{children:u}),(0,c.jsx)("p",{children:s}),(0,c.jsx)("p",{children:i})]},e)}))})}},415:function(n,e,t){t.r(e);var r=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),s=t(129),i=t(126),p=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],a=e[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.PY)();case 3:e=n.sent,a(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Home Page"}),(0,p.jsx)(i.Z,{movieArr:t})]})}},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var o=n[a](u),s=o.value}catch(i){return void t(i)}o.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function o(n){r(u,c,a,o,s,"next",n)}function s(n){r(u,c,a,o,s,"throw",n)}o(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.359f8568.chunk.js.map