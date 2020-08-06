(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=(a(18),a(19),a(6)),l=a.n(s),o=a(9),u=a(1),m=a(2),d=a(4),h=a(3),p=a(5),f={rain:"rain",clear:"clear",clouds:"cloudy",unknown:"unknown"},v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.weatherType;return r.a.createElement("i",{className:"wu wu-solid-white wu-".concat(this.iconSize," wu-").concat((e=t,f[e||"unknown"]))})}},{key:"iconSize",get:function(){return{small:"32",medium:"64",large:"128"}[this.props.size||"small"]}}]),t}(r.a.Component),w=a(10),E=a.n(w),b=function(e,t){return E()(1e3*e).format(t)},y=function(e){return(e+="").substring(0,2)},j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={weather:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.weather.list;return r.a.createElement("div",{className:"weekHistoryCards"},e.map(function(t,a){return r.a.createElement("div",{key:t.dt.toString(),className:"historyCard"},r.a.createElement("h4",null,b(e[a].dt,"MM")),r.a.createElement(v,{size:"small",weatherType:e[a].weather[0].main.toLowerCase()}),r.a.createElement("h5",null,y(e[a].temp.day),"\xb0"))}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.weather;if(!e.list)return null;var t=e.list[0],a=t.temp.day;return r.a.createElement("div",{className:"weatherCardLEftSide"},r.a.createElement("section",{className:"weatherCardLEftSide__inner"},r.a.createElement("div",{className:"topLine"},r.a.createElement("div",{className:"topLine__leftSide"},r.a.createElement("h1",null,b(t.dt,"dddd")," \xa0",b(t.dt,"D")),r.a.createElement("span",null,b(t.dt,"MMMM"))),r.a.createElement("div",{className:"cityName"},e.city.name)),r.a.createElement("div",{className:"curentTemperature"},r.a.createElement("span",null,y(a),"\xb0"),r.a.createElement("span",{className:"mainIcon"},r.a.createElement(v,{size:"large",weatherType:t.weather[0].main.toLowerCase()})))),r.a.createElement(j,{weather:e}))}}]),t}(r.a.Component),k=(a(22),a(11)),N=a.n(k),g=(a(23),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={weather:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchWeatherData(),N.a.init()}},{key:"fetchWeatherData",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Odessa&units=metric&cnt=7&appid=".concat("47fe20af59af3bbf2a3b306a18fdb1d7"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({weather:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.weather,t=Object.keys(e).length>0;return r.a.createElement("div",{className:"base"},t?r.a.createElement("main",{className:"content","data-aos":"zoom-out","data-aos-easing":"ease-in-out"},r.a.createElement(O,{weather:this.state.weather}),r.a.createElement("div",{className:"weatherCardRightSide"},r.a.createElement("div",{className:"video__background"},r.a.createElement("video",{className:"video_content",autoPlay:!0,muted:!0,loop:!0},r.a.createElement("source",{src:"./video/wind2.webm",type:"video/webm"}),r.a.createElement("source",{src:"./video/wind2.mp4",type:"video/mp4"}))))):r.a.createElement(C,null))}}]),t}(r.a.Component)),C=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null)))))))};i.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9f4f6446.chunk.js.map