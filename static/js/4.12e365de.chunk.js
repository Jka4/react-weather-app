(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[4],{24:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(26),c=a(27),r=a(40),l=a(38),i=a(0),o=a.n(i),u={rain:"rain",clear:"clear",clouds:"cloudy",unknown:"unknown"},s=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this.props.weatherType;return o.a.createElement("i",{className:"wu wu-solid-white wu-".concat(this.iconSize," wu-").concat((e=t,u[e||"unknown"]))})}},{key:"iconSize",get:function(){return{small:"32",medium:"64",large:"128"}[this.props.size||"small"]}}]),a}(o.a.Component)},52:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(5),l=a(3),i=a(0),o=a.n(i),u=a(24),s=a(2),d=a(29),m=a.n(d),p=a(28),f=a(39),v=Object(i.lazy)((function(){return a.e(5).then(a.bind(null,51))}));t.default=function(e){var t,a=Object(i.useState)(),n=Object(l.a)(a,2),d=n[0],b=n[1],h=Object(p.a)(),w=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(null),r=Object(l.a)(c,2),o=r[0],u=r[1],s=function(e){var t=e.coords;n({latitude:t.latitude,longitude:t.longitude})},d=function(e){u(e.message)};return Object(i.useEffect)((function(){var e=navigator.geolocation;if(e){var t=e.watchPosition(s,d);return function(){return e.clearWatch(t)}}u("Geolocation is not supported")}),[]),Object(f.a)(Object(f.a)({},a),{},{error:o})}(),E=w.latitude,j=w.longitude,O=w.error;console.log("latitude, longitude, error",E,j,O);var g=h.latitude,y=h.longitude;Object(i.useEffect)((function(){b(e.weather)}),[e]);var k=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(g,"&lon=").concat(y,"&appid=").concat(s.a),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,b(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=!!(null===h||void 0===h?void 0:h.accuracy),S=null===d||void 0===d?void 0:d.list[0],C=null===S||void 0===S||null===(t=S.temp)||void 0===t?void 0:t.day;return o.a.createElement("div",{className:"weatherCardLEftSide"},S&&o.a.createElement("section",{className:"weatherCardLEftSide__inner"},o.a.createElement("div",{className:"topLine"},o.a.createElement("div",{className:"topLine__leftSide"},o.a.createElement("h1",null,Object(s.b)(S.dt,"dddd")," \xa0",Object(s.b)(S.dt,"D")),o.a.createElement("span",null,Object(s.b)(S.dt,"MMMM"))),o.a.createElement("div",{className:"cityName"},o.a.createElement("span",null,d.city.name),N&&o.a.createElement("div",{className:"locationBtn",onClick:k},o.a.createElement(m.a,null)),o.a.createElement("div",{style:{background:"red"},className:"locationBtn",onClick:k},o.a.createElement(m.a,null)))),o.a.createElement("div",{className:"curentTemperature"},o.a.createElement("span",null,Object(s.c)(C),"\xb0"),o.a.createElement("span",{className:"mainIcon"},o.a.createElement(u.a,{size:"large",weatherType:S.weather[0].main.toLowerCase()})))),o.a.createElement(i.Suspense,{fallback:"Loading..."},o.a.createElement(v,{weather:d})))}}}]);
//# sourceMappingURL=4.12e365de.chunk.js.map