(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[4],{24:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(26),c=t(27),r=t(40),l=t(39),i=t(0),s=t.n(i),o={rain:"rain",clear:"clear",clouds:"cloudy",unknown:"unknown"},u=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this.props.weatherType;return s.a.createElement("i",{className:"wu wu-solid-white wu-".concat(this.iconSize," wu-").concat((e=a,o[e||"unknown"]))})}},{key:"iconSize",get:function(){return{small:"32",medium:"64",large:"128"}[this.props.size||"small"]}}]),t}(s.a.Component)},51:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(5),l=t(3),i=t(0),s=t.n(i),o=t(24),u=t(2),d=t(29),m=t.n(d),p=t(28),h=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,37))}));a.default=function(e){var a,t=Object(i.useState)(),n=Object(l.a)(t,2),d=n[0],f=n[1],v=Object(p.a)();console.log("WeatherCard -> geolocation",v);var w=v.latitude,b=v.longitude;Object(i.useEffect)((function(){f(e.weather)}),[e]);var E=function(){var e=Object(r.a)(c.a.mark((function e(){var a,t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(w,"&lon=").concat(b,"&appid=").concat(u.a),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,f(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=!!(null===v||void 0===v?void 0:v.accuracy),O=null===d||void 0===d?void 0:d.list[0],y=null===O||void 0===O||null===(a=O.temp)||void 0===a?void 0:a.day;return s.a.createElement("div",{className:"weatherCardLEftSide"},O&&s.a.createElement("section",{className:"weatherCardLEftSide__inner"},s.a.createElement("div",{className:"topLine"},s.a.createElement("div",{className:"topLine__leftSide"},s.a.createElement("h1",null,Object(u.b)(O.dt,"dddd")," \xa0",Object(u.b)(O.dt,"D")),s.a.createElement("span",null,Object(u.b)(O.dt,"MMMM"))),s.a.createElement("div",{className:"cityName"},s.a.createElement("span",null,d.city.name),j&&s.a.createElement("div",{className:"locationBtn",onClick:E},s.a.createElement(m.a,null)))),s.a.createElement("div",{className:"curentTemperature"},s.a.createElement("span",null,Object(u.c)(y),"\xb0"),s.a.createElement("span",{className:"mainIcon"},s.a.createElement(o.a,{size:"large",weatherType:O.weather[0].main.toLowerCase()})))),s.a.createElement(i.Suspense,{fallback:"Loading..."},s.a.createElement(h,{weather:d})))}}}]);
//# sourceMappingURL=4.15c14235.chunk.js.map