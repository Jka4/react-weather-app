(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[4],{24:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(26),c=a(27),r=a(39),i=a(37),o=a(0),l=a.n(o),s={rain:"rain",clear:"clear",clouds:"cloudy",unknown:"unknown"},u=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this.props.weatherType;return l.a.createElement("i",{className:"wu wu-solid-white wu-".concat(this.iconSize," wu-").concat((e=t,s[e||"unknown"]))})}},{key:"iconSize",get:function(){return{small:"32",medium:"64",large:"128"}[this.props.size||"small"]}}]),a}(l.a.Component)},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),i=a(3),o=a(0),l=a.n(o),s=a(24),u=a(2),d=a(28),m=a.n(d),p=a(38),f=a(6),b=a.n(f),h=(a(9),Object(o.lazy)((function(){return a.e(5).then(a.bind(null,50))})));t.default=function(e){var t,a=Object(o.useState)(),n=Object(i.a)(a,2),d=n[0],f=n[1],v=function(){var e=Object(o.useState)({}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(o.useState)(null),r=Object(i.a)(c,2),l=r[0],s=r[1],u=function(e){var t=e.coords;n({lat:t.latitude,lon:t.longitude})},d=function(e){s(e.message)};return Object(o.useEffect)((function(){var e=navigator.geolocation;if(e){var t=e.watchPosition(u,d);return function(){return e.clearWatch(t)}}s("Geolocation is not supported")}),[]),Object(p.a)(Object(p.a)({},a),{},{error:l})}(),w=v.lat,E=v.lon;v.error;Object(o.useEffect)((function(){f(e.weather)}),[e]),Object(o.useEffect)((function(){w&&(b.a.init(),j())}),[w]);var j=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(w,"&lon=").concat(E,"&appid=").concat(u.a),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,f(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=null===d||void 0===d?void 0:d.list[0],y=null===O||void 0===O||null===(t=O.temp)||void 0===t?void 0:t.day;return l.a.createElement("div",{className:"weatherCardLEftSide"},O&&l.a.createElement("section",{className:"weatherCardLEftSide__inner"},l.a.createElement("div",{className:"topLine"},l.a.createElement("div",{className:"topLine__leftSide"},l.a.createElement("h1",null,Object(u.b)(O.dt,"dddd")," \xa0",Object(u.b)(O.dt,"D")),l.a.createElement("span",null,Object(u.b)(O.dt,"MMMM"))),l.a.createElement("div",{className:"cityName"},l.a.createElement("span",null,d.city.name),w?l.a.createElement("div",{className:"locationBtn","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"100","data-aos-delay":"500"},l.a.createElement(m.a,null)):l.a.createElement("div",{className:"locationBtn"}," "))),l.a.createElement("div",{className:"curentTemperature"},l.a.createElement("span",null,Object(u.c)(y),"\xb0"),l.a.createElement("span",{className:"mainIcon"},l.a.createElement(s.a,{size:"large",weatherType:O.weather[0].main.toLowerCase()})))),l.a.createElement(o.Suspense,{fallback:"Loading..."},l.a.createElement(h,{weather:d})))}}}]);
//# sourceMappingURL=4.ce921659.chunk.js.map