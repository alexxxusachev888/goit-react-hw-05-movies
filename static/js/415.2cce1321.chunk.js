"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{7176:function(n,e,t){t.d(e,{BQ:function(){return h},Hx:function(){return f},Mc:function(){return l},PY:function(){return u},uV:function(){return g},vw:function(){return p}});var r=t(5861),a=t(7757),o=t.n(a),c=t(7596),s="0b11624b950ea9c4284f61844023b09c",i="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,fetch("".concat(i,"trending/all/day?api_key=").concat(s,"&page=").concat(e));case 4:return t=n.sent,n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,u,p=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:"",t=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2&&void 0!==p[2]&&p[2],n.prev=3,n.next=6,fetch("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 6:return a=n.sent,n.next=9,a.json();case 9:return u=n.sent,r||0!==u.results.length||c.Am.warn("Nothing was found on your request"),n.abrupt("return",u);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"genre/movie/list?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r=t.genres.reduce((function(n,e){var t=e.id,r=e.name;return n[t]=r,n}),{}),localStorage.setItem("genresList",JSON.stringify(r)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()},9777:function(n,e,t){t.d(e,{Z:function(){return P}});var r,a,o,c,s,i,u,p,l,f=function(n){var e=localStorage.getItem("genresList")?JSON.parse(localStorage.getItem("genresList")):{},t=n.map((function(n){return e[n]})).filter((function(n){return void 0!==n}));return t.length>2?t.splice(3,t.length-2).push("Others"):0===t.length&&t.push("no genres"),t},g=t(1087),h=t(5485),d=t(168),v=t(6444),x=v.ZP.ul(r||(r=(0,d.Z)(["\n    margin-top: 40px;\n    margin-bottom 40px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: minmax(300px, auto);\n    gap: 25px;\n"]))),m=v.ZP.li(a||(a=(0,d.Z)(["\n    position: relative;\n    border: 2px solid ",";\n    border-radius: 10px;\n    overflow: hidden;\n    transition: transform 250ms ease-in-out;\n\n    &:hover,\n    &:focus {\n        transform: scale(1.03);\n        box-shadow: -1px 8px 66px 6px rgba(115,149,174,0.76);\n    }\n"])),(function(n){return n.theme.accent})),b=v.ZP.div(o||(o=(0,d.Z)(["\n    padding: 10px;\n"]))),Z=v.ZP.h2(c||(c=(0,d.Z)(["\n    font-size: 22px;\n"]))),w=v.ZP.img(s||(s=(0,d.Z)(["\n    object-fit: cover;\n    object-position: left top;\n    width: 100%;\n    height: 400px;\n"]))),k=v.ZP.p(i||(i=(0,d.Z)(["\n    position: absolute; \n    top:20px;\n    left: 20px;\n    padding: 10px 7px;\n    border-radius: 5px;\n    font-weight: bold;\n    background-color: ","\n"])),(function(n){return n.theme.accent})),y=v.ZP.div(u||(u=(0,d.Z)(["\n    display: flex;\n    margin-top: 8px;\n    gap: 3px;\n"]))),j=v.ZP.p(p||(p=(0,d.Z)(["\n\n"]))),F=v.ZP.p(l||(l=(0,d.Z)(["\n\n"]))),_=t(184),P=function(n){var e=n.movieArr,t=void 0===e?[]:e,r=n.location;return(0,_.jsx)(x,{children:t.map((function(n){var e=n.id,t=n.original_title,a=n.original_name,o=n.vote_average,c=n.poster_path,s=n.genre_ids,i=n.release_date,u=n.first_air_date;return(0,_.jsx)(m,{children:(0,_.jsxs)(g.OL,{to:"movies/".concat(e),state:{from:r},children:[(0,_.jsx)(w,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(c),alt:t}),(0,_.jsxs)(b,{children:[(0,_.jsx)(Z,{children:t||a}),(0,_.jsx)(k,{children:o.toFixed(1)}),(0,_.jsxs)(y,{children:[(0,_.jsx)(j,{children:f(s).join(", ")}),(0,_.jsxs)(F,{children:["| ",(0,h.Z)(new Date(i||u))]})]})]})]})},e)}))})}},9593:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(168),o=t(6444),c=t(6048),s=t.n(c),i=(0,o.ZP)(s())(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 10px 0;\n  margin-bottom: 30px;\n  font-size: 18px;\n  \n  .selected {\n    color: ",";\n  }\n  a {\n    padding: 10px 0;\n    cursor: pointer;\n    &:hover {\n      color: blue;\n    }\n  }\n\n  .activeLink{\n    color: #FFFFFF;\n  }\n  .prev{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 35px;\n    height: 35px;\n    border-radius: 5px;\n    background-color: ",";\n    a:hover,\n    a:focus {\n        color: #FFFFFF;\n    }\n  }\n  .page{\n    min-width: 15px;\n    height: 15px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    background-color: ",";\n    a:hover,\n    a:focus {\n        color: #FFFFFF;\n    }\n    &:hover,\n    &:focus {\n        color: #FFFFFF;\n        background-color: ",";\n    }\n    \n  }\n/* .container{\n\n}\n\n.next{\n\n}\n\n.linkclass{\n\n}\n.pagebuilder{\n\n} */\n"])),(function(n){return n.theme.footer}),(function(n){return n.theme.header}),(function(n){return n.theme.header}),(function(n){return n.theme.footer})),u=t(184),p=function(n){var e=n.location,t=n.itemsPerPage,r=n.totalItems,a=n.setSearchParams,o=(n.params,function(n){return"number"===typeof n&&!isNaN(n)}),c=o(r)&&o(t)?Math.ceil(r/t):0;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i,{breakLabel:"...",nextLabel:">",onPageChange:function(n){var t=n.selected+1,r=new URLSearchParams(e.search);r.set("page",t||1),a(r)},pageRangeDisplayed:3,marginPagesDisplayed:1,pageCount:c,previousLabel:"<",renderOnZeroPageCount:null,onPageActive:window.scrollTo({top:0,behavior:"smooth"}),activeClassName:"active",activeLinkClassName:"activeLink",previousClassName:"prev",nextClassName:"prev",pageClassName:"page"})})}},5415:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),o=t(7757),c=t.n(o),s=t(2791),i=t(1087),u=t(7689),p=t(7176),l=t(9777),f=t(9593),g=t(184);e.default=function(){var n=(0,i.lr)({page:1}),e=(0,a.Z)(n,2),t=e[0],o=e[1],h=(0,s.useState)({results:[]}),d=(0,a.Z)(h,2),v=d[0],x=d[1],m=(0,u.TH)(),b=Number(t.get("page"))||1;return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.PY)(e);case 3:t=n.sent,x(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();(0,p.BQ)(),n(b)}),[b]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.Z,{movieArr:v.results,location:m}),(0,g.jsx)(f.Z,{itemsPerPage:20,totalItems:v.total_results,setSearchParams:o,params:t,location:m})]})}}}]);
//# sourceMappingURL=415.2cce1321.chunk.js.map