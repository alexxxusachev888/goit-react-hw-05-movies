"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{7176:function(n,e,t){t.d(e,{BQ:function(){return d},Hx:function(){return l},Mc:function(){return p},PY:function(){return u},uV:function(){return f},vw:function(){return i}});var r=t(5861),o=t(7757),a=t.n(o),c="0b11624b950ea9c4284f61844023b09c",s="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"trending/all/day?api_key=").concat(c));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,console.log(t.results),n.abrupt("return",t.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"genre/movie/list?api_key=").concat(c,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r=t.genres.reduce((function(n,e){var t=e.id,r=e.name;return n[t]=r,n}),{}),localStorage.setItem("genresList",JSON.stringify(r)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()},9777:function(n,e,t){t.d(e,{Z:function(){return P}});var r,o,a,c,s,u,i,p,l,f=t(1087),d=t(5485),g=t(168),v=t(6444),h=v.ZP.ul(r||(r=(0,g.Z)(["\n    margin-top: 40px;\n    margin-bottom 40px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: minmax(300px, auto);\n    gap: 25px;\n"]))),m=v.ZP.li(o||(o=(0,g.Z)(["\n    position: relative;\n    border: 2px solid ",";\n    border-radius: 10px;\n    overflow: hidden;\n    transition: transform 250ms ease-in-out;\n\n    &:hover,\n    &:focus {\n        transform: scale(1.03);\n        box-shadow: -1px 8px 66px 6px rgba(115,149,174,0.76);\n    }\n"])),(function(n){return n.theme.accent})),x=v.ZP.div(a||(a=(0,g.Z)(["\n    padding: 10px;\n"]))),b=v.ZP.h2(c||(c=(0,g.Z)(["\n    font-size: 22px;\n"]))),y=v.ZP.img(s||(s=(0,g.Z)(["\n    object-fit: cover;\n    object-position: left top;\n    width: 100%;\n    height: 400px;\n"]))),w=v.ZP.p(u||(u=(0,g.Z)(["\n    position: absolute; \n    top:20px;\n    left: 20px;\n    padding: 10px 7px;\n    border-radius: 5px;\n    font-weight: bold;\n    background-color: ","\n"])),(function(n){return n.theme.accent})),Z=v.ZP.div(i||(i=(0,g.Z)(["\n    display: flex;\n    margin-top: 8px;\n    gap: 3px;\n"]))),j=v.ZP.p(p||(p=(0,g.Z)(["\n\n"]))),_=v.ZP.p(l||(l=(0,g.Z)(["\n\n"]))),k=function(n){var e=JSON.parse(localStorage.getItem("genresList")),t=n.map((function(n){return e[n]})).filter((function(n){return void 0!==n}));return t.length>2?t.splice(3,t.length-2).push("Others"):0===t.length&&t.push("no genres"),t},S=t(184),P=function(n){var e=n.movieArr,t=n.location;return(0,S.jsx)(h,{children:e.map((function(n){var e=n.id,r=n.original_title,o=n.original_name,a=n.vote_average,c=n.poster_path,s=n.genre_ids,u=n.release_date,i=n.first_air_date;return(0,S.jsx)(m,{children:(0,S.jsxs)(f.OL,{to:"/movies/".concat(e),state:{from:t},children:[(0,S.jsx)(y,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(c),alt:r}),(0,S.jsxs)(x,{children:[(0,S.jsx)(b,{children:r||o}),(0,S.jsx)(w,{children:a.toFixed(1)}),(0,S.jsxs)(Z,{children:[(0,S.jsx)(j,{children:k(s).join(", ")}),(0,S.jsxs)(_,{children:["| ",(0,d.Z)(new Date(u||i))]})]})]})]})},e)}))})}},5415:function(n,e,t){t.r(e);var r=t(5861),o=t(9439),a=t(7757),c=t.n(a),s=t(2791),u=t(7689),i=t(7176),p=t(9777),l=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],a=e[1],f=(0,u.TH)();return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.PY)();case 3:e=n.sent,a(e),(0,i.BQ)(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Z,{movieArr:t,location:f})})}},5485:function(n,e,t){function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function o(n){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function a(n){r(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===o(n)&&"[object Date]"===e?new Date(n.getTime()):"number"===typeof n||"[object Number]"===e?new Date(n):("string"!==typeof n&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(n){return r(1,arguments),a(n).getFullYear()}t.d(e,{Z:function(){return c}})},5861:function(n,e,t){function r(n,e,t,r,o,a,c){try{var s=n[a](c),u=s.value}catch(i){return void t(i)}s.done?e(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var c=n.apply(e,t);function s(n){r(c,o,a,s,u,"next",n)}function u(n){r(c,o,a,s,u,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=415.c44c5806.chunk.js.map