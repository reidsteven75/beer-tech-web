(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t){},126:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(87),c=a.n(r),i=(a(96),a(13)),u=a(14),s=a(16),l=a(15),d=a(17),p=a(88),h=a.n(p),m=(a(126),a(89)),f=(a(267),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.duration;return o.a.createElement(m.a,{data:{datasets:[{data:[],label:"PH",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",lineTension:0}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{min:0,max:14}}],xAxes:[{type:"realtime",realtime:{duration:t,delay:2e3,refresh:1e3,pause:!1,onRefresh:function(t){var a={x:e.props.data.x,y:e.props.data.y};t.data.datasets.forEach(function(e){e.data.push(a)})}}}]}}})}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={value:"N/A"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateValue",value:function(){this.setState(function(e,t){return{value:t.data.y}})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateValue()},1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.value)}}]),t}(n.Component),v=h()("http://localhost:3001"),y={};v.on("connect",function(){console.log("[socket]: connected")}),v.on("data-update-ph",function(e){y.y=e.value,y.x=e.timestamp});var j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(b,{data:y}),o.a.createElement("br",null),o.a.createElement(f,{data:y,duration:2e4}),o.a.createElement("br",null),o.a.createElement(f,{data:y,duration:1e6})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(268)},96:function(e,t,a){}},[[91,2,1]]]);
//# sourceMappingURL=main.90323753.chunk.js.map