(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a(504)},182:function(e,t,a){},209:function(e,t){},258:function(e,t,a){},504:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),i=a.n(l),o=(a(182),a(29)),c=a(31),s=a(30),u=a(22),d=a(32),m=a(166),h=a.n(m),p=a(167),E=a.n(p),f=a(71),b=a(168),v=a.n(b),g=a(94),y=a(73),O=a.n(y),k=a(49),w=a.n(k),C=(a(258),a(48)),j=a(169),M=(a(397),{title:{color:"white",fontSize:"16px",marginBottom:"15px"},loader:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapper:{border:"1px solid black",height:"240px",width:"auto",position:"relative",padding:"15px",paddingBottom:"40px",marginBottom:"20px"}}),R=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={loading:!0,error:!1};var n=Object(C.a)(Object(C.a)(a));return setInterval(function(){n.checkLoaded()},1e3),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"checkLoaded",value:function(){!1===this.props.isLoading&&this.setState({loading:!1})}}]),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.duration,a=this.props.refresh,n=this.props.dataHistorical,l=r.a.createElement("div",{style:M.loader},r.a.createElement(f.MoonLoader,{size:30,color:"#36D7B7"})),i=r.a.createElement(j.a,{data:{datasets:[{data:n,label:"PH",pointRadius:1,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",lineTension:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{}}],xAxes:[{type:"realtime",realtime:{duration:t,delay:2e3,refresh:a,pause:!1,onRefresh:function(t){var a={x:e.props.dataRealTime.x,y:e.props.dataRealTime.y};t.data.datasets.forEach(function(e){e.data.push(a)})}}}]}}});return r.a.createElement("div",{style:M.wrapper},r.a.createElement("div",{style:M.title},this.props.title),this.state.loading?l:i)}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={value:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateValue",value:function(){this.setState(function(e,t){return{value:t.dataRealTime.y}})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateValue()},1e3)}},{key:"render",value:function(){var e=this.state.value||"unknown";return r.a.createElement("div",null,e)}}]),t}(n.Component),x=a(72),L=a.n(x),T=a(172),D=a.n(T),S=a(176),A=a.n(S),I=a(174),B=a.n(I),N=a(175),P=a.n(N),W=a(173),V=a.n(W),J={buttonClose:{margin:"auto",padding:"15px"}},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleClickOpen=function(){this.setState({open:!0})},a.handleClose=function(){this.setState({open:!1})},a.state={open:!1,scroll:"paper"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen.bind(this)},"Help"),r.a.createElement(D.a,{open:this.state.open,onClose:this.handleClose.bind(this),scroll:this.state.scroll,"aria-labelledby":"scroll-dialog-title"},r.a.createElement(V.a,{id:"scroll-dialog-title"},"Help"),r.a.createElement(B.a,null,r.a.createElement(P.a,null,r.a.createElement("h4",null,"Connecting to Wifi"),r.a.createElement("ol",null,r.a.createElement("li",null,"On mobile device or computer connect to wifi \u201cWifi Connect\u201d"),r.a.createElement("li",null,"You should be auto-redirected to wifi setup"),r.a.createElement("li",null,"Choose wifi network and enter password"),r.a.createElement("li",null,"Device will try to connect. If it\u2019s successful you won\u2019t see the \u201cWifi Connect\u201d network anymore, and the device will be ready to use")),r.a.createElement("h4",null,"Readings Are Innacurate and Jumping All Over The Place"),"Disconnect & reconnect the usb cable that's accessable from the top of the larger computer",r.a.createElement("h4",null,"Ensuring Accurate Readings"),r.a.createElement("ul",null,r.a.createElement("li",null,"READINGS WILL BE SUPER RANDOM IF THE SENSOR BOX IS MOVED"),r.a.createElement("li",null,"Electrode reference solution is the 3NKCL solution"),r.a.createElement("li",null,"The electrode used for the first or long set without re-use, the electrode bulb and the sand core, immersed in the 3NKCL solution activated eight hours"),r.a.createElement("li",null,"The electrode plug should be kept clean and dry"),r.a.createElement("li",null,"Measurement should be avoided staggered pollution between solutions, so as not to affect the accuracy of measurement"),r.a.createElement("li",null,"The electrode should not be long-term immersed in acid chloride solution"),r.a.createElement("li",null,"Electrode when in use, the ceramic sand core and liquid outlet rubber ring should be removed, in order to make salt bridge solution to maintain a certain velocity")),r.a.createElement("h4",null,"PH Sensor"),r.a.createElement("ul",null,r.a.createElement("li",null,"Model: SEN0169"),r.a.createElement("li",null,"Measuring Range: 0-14PH"),r.a.createElement("li",null,"Measuring Temperature: 0-60 C"),r.a.createElement("li",null,"Accuracy: \xb1 0.2pH @ 25 C")))),r.a.createElement(A.a,{style:J.buttonClose},r.a.createElement(L.a,{variant:"contained",color:"secondary",onClick:this.handleClose.bind(this)},"Close"))))}}]),t}(n.Component),z="https://beer-tech-web-prod.herokuapp.com",U=Object(g.createMuiTheme)({palette:{primary:{light:O.a[300],main:O.a[500],dark:O.a[700]},secondary:{light:w.a[300],main:w.a[500],dark:w.a[700]}},typography:{useNextVariants:!0}}),q=h()(z);q.on("connect",function(){}),q.on("data-update-ph",function(e){X.y=e.value,X.x=e.timestamp});var F={content:{width:"80%",padding:20}},G=[{name:"Last Minute",durationMs:6e4,sampleRateMs:500,dataHistorical:[]},{name:"Last 2 Hours",durationMs:72e5,sampleRateMs:3e4,dataHistorical:[]},{name:"Last 24 Hours",durationMs:864e5,sampleRateMs:3e5,dataHistorical:[]}],X={},Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={loading:!0,serverError:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"mapChartData",value:function(e){var t={value:"y",timestamp:"x"};return e.dataHistorical=e.dataHistorical.map(function(e){return v.a.mapKeys(e,function(e,a){return t[a]})}),e}},{key:"getChartData",value:function(e){var t=this;return E.a.get(z+"/historicals/ph?duration="+e.durationMs+"&samplerate="+e.sampleRateMs).then(function(a){return a.data&&(0===a.data.length||(e.dataHistorical=a.data,e=t.mapChartData(e))),{chart:e}}).catch(function(e){return console.log({err:e}),e})}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1}),G.forEach(function(t){t.isLoading=!0,e.getChartData(t).then(function(a){t.isLoading=!1,e.setState({updateData:!0}),a.err?t.isError=!0:t=a.chart})})},1e3)}},{key:"render",value:function(){var e;if(!0===this.state.loading)e=r.a.createElement("div",null,r.a.createElement(f.MoonLoader,{color:"#36D7B7"}));else if(!0===this.state.serverError)e=r.a.createElement("div",null,"Server Unreachable",r.a.createElement("br",null),r.a.createElement("br",null),"Try Reloading App");else{var t=G.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(R,{isLoading:e.isLoading,isError:e.isError,title:e.name,dataHistorical:e.dataHistorical,dataRealTime:X,duration:e.durationMs,refresh:e.sampleRateMs}))});e=r.a.createElement("div",{style:F.content},r.a.createElement("h2",null,"PH"),r.a.createElement(H,{dataRealTime:X}),r.a.createElement("br",null),t,r.a.createElement("br",null),r.a.createElement(K,null),r.a.createElement("br",null))}return r.a.createElement(g.MuiThemeProvider,{theme:U},r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"App-main"},e)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,2,1]]]);
//# sourceMappingURL=main.0def33a8.chunk.js.map