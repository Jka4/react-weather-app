(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[4],{24:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(26),r=a(27),c=a(39),o=a(37),l=a(0),i=a.n(l),s={rain:"rain",clear:"clear",clouds:"cloudy",unknown:"unknown"},u=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this.props.weatherType;return i.a.createElement("i",{className:"wu wu-solid-white wu-".concat(this.iconSize," wu-").concat((e=t,s[e||"unknown"]))})}},{key:"iconSize",get:function(){return{small:"32",medium:"64",large:"128"}[this.props.size||"small"]}}]),a}(i.a.Component)},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(5),o=a(3),l=a(0),i=a.n(l),s=a(24),u=a(2),d=a(28),m=a.n(d),p=a(38),f=a(6),b=a.n(f),h=(a(9),Object(l.lazy)((function(){return a.e(5).then(a.bind(null,50))})));t.default=function(e){var t,a=Object(l.useState)(),n=Object(o.a)(a,2),d=n[0],f=n[1],v=function(){var e=Object(l.useState)({}),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(null),c=Object(o.a)(r,2),i=c[0],s=c[1],u=function(e){var t=e.coords;n({lat:t.latitude,lon:t.longitude})},d=function(e){s(e.message)};return Object(l.useEffect)((function(){var e=navigator.geolocation;if(e){var t=e.watchPosition(u,d);return function(){return e.clearWatch(t)}}s("Geolocation is not supported")}),[]),Object(p.a)(Object(p.a)({},a),{},{error:i})}(),w=v.lat,E=v.lon,j=v.error;console.log("lat, lon, error ",w,E,j),j&&console.error("error: ",j),b.a.init(),Object(l.useEffect)((function(){f(e.weather)}),[e]);var O=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(w,"&lon=").concat(E,"&appid=").concat(u.a),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,f(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=null===d||void 0===d?void 0:d.list[0],g=null===y||void 0===y||null===(t=y.temp)||void 0===t?void 0:t.day;return i.a.createElement("div",{className:"weatherCardLEftSide"},y&&i.a.createElement("section",{className:"weatherCardLEftSide__inner"},i.a.createElement("div",{className:"topLine"},i.a.createElement("div",{className:"topLine__leftSide"},i.a.createElement("h1",null,Object(u.b)(y.dt,"dddd")," \xa0",Object(u.b)(y.dt,"D")),i.a.createElement("span",null,Object(u.b)(y.dt,"MMMM"))),i.a.createElement("div",{className:"cityName"},i.a.createElement("span",null,d.city.name),w?i.a.createElement("div",{className:"locationBtn","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"100",onClick:O},i.a.createElement(m.a,null)):i.a.createElement("div",{className:"locationBtn solo"}," "))),i.a.createElement("div",{className:"curentTemperature"},i.a.createElement("span",null,Object(u.c)(g),"\xb0"),i.a.createElement("span",{className:"mainIcon"},i.a.createElement(s.a,{size:"large",weatherType:y.weather[0].main.toLowerCase()})))),i.a.createElement(l.Suspense,{fallback:"Loading..."},i.a.createElement(h,{weather:d})))}}}]);
//# sourceMappingURL=4.24e2ce74.chunk.js.map