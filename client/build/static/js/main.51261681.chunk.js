(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,a){t.exports=a(328)},112:function(t,e,a){},139:function(t,e){},188:function(t,e,a){},328:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(101),o=a.n(i),s=(a(112),a(18)),c=a(20),l=a(19),u=a(13),d=a(21),m=a(102),p=a.n(m),h=a(103),f=a.n(h),v=a(104),b=a(31),y=a.n(b),E=a(14),g=(a(188),a(105)),H=(a(327),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.duration,a=this.props.refresh,n=this.props.dataHistorical;return r.a.createElement(g.a,{data:{datasets:[{data:n,label:"PH",pointRadius:1,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",lineTension:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{}}],xAxes:[{type:"realtime",realtime:{duration:e,delay:2e3,refresh:a,pause:!1,onRefresh:function(e){var a={x:t.props.dataRealTime.x,y:t.props.dataRealTime.y};e.data.datasets.forEach(function(t){t.data.push(a)})}}}]}}})}}]),e}(n.Component)),O=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={value:null},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"updateValue",value:function(){this.setState(function(t,e){return{value:e.dataRealTime.y}})}},{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.updateValue()},1e3)}},{key:"render",value:function(){var t=this.state.value||"unknown";return r.a.createElement("div",null,t)}}]),e}(n.Component),j="https://beer-tech-web-prod.herokuapp.com",k=p()(j);k.on("connect",function(){}),k.on("data-update-ph",function(t){R.y=t.value,R.x=t.timestamp});var w={chart:{height:"200px",width:"auto",position:"relative"},content:{width:"80%",padding:20}},M=[{name:"Last Minute",durationMs:6e4,sampleRateMs:500,dataHistorical:[]},{name:"Last 2 Hours",durationMs:72e5,sampleRateMs:3e4,dataHistorical:[]},{name:"Last 24 Hours",durationMs:864e5,sampleRateMs:3e5,dataHistorical:[]}],R={},x=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).state={loading:!0,serverError:!1},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"parseChartData",value:function(t,e){var a={value:"y",timestamp:"x"};t.dataHistorical=y.a.filter(e,function(e){return E(e.timestamp).isAfter(E().subtract(t.durationMs,"milliseconds"))}),t.dataHistorical=y.a.sortBy(t.dataHistorical,["timestamp"]);var n=t.dataHistorical[0].timestamp;return t.dataHistorical=y.a.filter(t.dataHistorical,function(e){return!!E(e.timestamp).isSameOrAfter(E(n))&&(n+=t.sampleRateMs,!0)}),t.dataHistorical=t.dataHistorical.map(function(t){return y.a.mapKeys(t,function(t,e){return a[e]})}),t}}]),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;f.a.get(j+"/historicals/ph").then(function(e){var a=e.data;return a&&(0===a.length||M.forEach(function(e){e=t.parseChartData(e,a)})),t.setState({loading:!1})}).catch(function(e){return console.log(e),t.setState({serverError:!0}),t.setState({loading:!1})})}},{key:"render",value:function(){var t;if(!0===this.state.loading)t=r.a.createElement("div",null,r.a.createElement(v.MoonLoader,{color:"#36D7B7"}));else if(!0===this.state.serverError)t=r.a.createElement("div",null,"Server Unreachable",r.a.createElement("br",null),r.a.createElement("br",null),"Try Reloading App");else{var e=M.map(function(t){return r.a.createElement("div",{key:t.name},r.a.createElement("h6",null,t.name),r.a.createElement("div",{style:w.chart},r.a.createElement(H,{dataHistorical:t.dataHistorical,dataRealTime:R,duration:t.durationMs,refresh:t.sampleRateMs})))});t=r.a.createElement("div",{style:w.content},r.a.createElement("h2",null,"PH"),r.a.createElement(O,{dataRealTime:R}),e)}return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"App-main"},t))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[107,2,1]]]);
//# sourceMappingURL=main.51261681.chunk.js.map