(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t){},126:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(87),c=a.n(o),i=(a(96),a(13)),u=a(14),s=a(16),l=a(15),d=a(17),h=a(88),p=a.n(h),m=(a(126),a(89)),f=(a(267),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.duration;return r.a.createElement(m.a,{data:{datasets:[{data:[],label:"PH",pointRadius:1,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",lineTension:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{}}],xAxes:[{type:"realtime",realtime:{duration:t,delay:2e3,refresh:1e3,pause:!1,onRefresh:function(t){var a={x:e.props.data.x,y:e.props.data.y};t.data.datasets.forEach(function(e){e.data.push(a)})}}}]}}})}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={value:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateValue",value:function(){this.setState(function(e,t){return{value:t.data.y}})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateValue()},1e3)}},{key:"render",value:function(){var e=this.state.value||"unknown";return r.a.createElement("div",null,e)}}]),t}(n.Component),b={chart:{height:"200px",width:"90%",position:"relative"}},y=p()("https://beer-tech-web-qa.herokuapp.com/"),j={};y.on("connect",function(){console.log("[socket]: connected")}),y.on("data-update-ph",function(e){j.y=e.value,j.x=e.timestamp});var w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"PH"),r.a.createElement(v,{data:j}),r.a.createElement("h6",null,"Last Minute"),r.a.createElement("div",{style:b.chart},r.a.createElement(f,{data:j,duration:6e5})),r.a.createElement("h6",null,"Last 2 Hours"),r.a.createElement("div",{style:b.chart},r.a.createElement(f,{data:j,duration:72e5}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(268)},96:function(e,t,a){}},[[91,2,1]]]);
//# sourceMappingURL=main.dbb87829.chunk.js.map