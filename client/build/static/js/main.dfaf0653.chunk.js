(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){e.exports=a(509)},187:function(e,t,a){},214:function(e,t){},263:function(e,t,a){},509:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),i=(a(187),a(30)),s=a(34),c=a(31),u=a(22),d=a(33),m=a(170),h=a.n(m),p=a(171),E=a.n(p),b=a(75),f=a(172),g=a.n(f),v=a(511),y=a(512),k=a(513),C=a(98),M=a(77),O=a.n(M),w=a(53),H=a.n(w),R=(a(263),a(52)),j=a(173),L=(a(402),{title:{color:"white",fontSize:"16px",marginBottom:"15px"},loader:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapper:{border:"1px solid black",height:"240px",width:"auto",position:"relative",padding:"15px",paddingBottom:"40px",marginBottom:"20px"}}),T=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,error:!1};var n=Object(R.a)(Object(R.a)(a));return setInterval(function(){n.checkLoaded()},1e3),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"checkLoaded",value:function(){!1===this.props.isLoading&&this.setState({loading:!1})}}]),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.duration,a=this.props.refresh,n=this.props.dataHistorical,l=r.a.createElement("div",{style:L.loader},r.a.createElement(b.MoonLoader,{size:30,color:"#36D7B7"})),o=r.a.createElement(j.a,{data:{datasets:[{data:n,label:"PH",pointRadius:1,borderColor:this.props.borderColor,backgroundColor:this.props.backgroundColor,lineTension:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{}}],xAxes:[{type:"realtime",realtime:{duration:t,delay:2e3,refresh:a,pause:!1,onRefresh:function(t){var a={x:e.props.dataRealTime.x,y:e.props.dataRealTime.y};t.data.datasets.forEach(function(e){e.data.push(a)})}}}]}}});return r.a.createElement("div",{style:L.wrapper},r.a.createElement("div",{style:L.title},this.props.title),this.state.loading?l:o)}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={value:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateValue",value:function(){this.setState(function(e,t){return{value:t.dataRealTime.y}})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updateValue()},1e3)}},{key:"render",value:function(){var e=this.state.value||"unknown";return r.a.createElement("div",null,e)}}]),t}(n.Component),D=a(76),S=a.n(D),A=a(176),I=a.n(A),P=a(180),B=a.n(P),N=a(178),W=a.n(N),V=a(179),J=a.n(V),K=a(177),z=a.n(K),U={buttonClose:{margin:"auto",padding:"15px"}},q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleClickOpen=function(){this.setState({open:!0})},a.handleClose=function(){this.setState({open:!1})},a.state={open:!1,scroll:"paper"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen.bind(this)},"Help"),r.a.createElement(I.a,{open:this.state.open,onClose:this.handleClose.bind(this),scroll:this.state.scroll,"aria-labelledby":"scroll-dialog-title"},r.a.createElement(z.a,{id:"scroll-dialog-title"},"Help"),r.a.createElement(W.a,null,r.a.createElement(J.a,null,r.a.createElement("h4",null,"Connecting to Wifi"),r.a.createElement("ol",null,r.a.createElement("li",null,"On mobile device or computer connect to wifi \u201cWifi Connect\u201d"),r.a.createElement("li",null,"You should be auto-redirected to wifi setup"),r.a.createElement("li",null,"Choose wifi network and enter password"),r.a.createElement("li",null,"Device will try to connect. If it\u2019s successful you won\u2019t see the \u201cWifi Connect\u201d network anymore, and the device will be ready to use")),r.a.createElement("h4",null,"Readings Are Innacurate and Jumping All Over The Place"),"Disconnect & reconnect the usb cable that's accessable from the top of the larger computer",r.a.createElement("h4",null,"Ensuring Accurate Readings"),r.a.createElement("ul",null,r.a.createElement("li",null,"READINGS WILL BE SUPER RANDOM IF THE SENSOR BOX IS MOVED"),r.a.createElement("li",null,"Electrode reference solution is the 3NKCL solution"),r.a.createElement("li",null,"The electrode used for the first or long set without re-use, the electrode bulb and the sand core, immersed in the 3NKCL solution activated eight hours"),r.a.createElement("li",null,"The electrode plug should be kept clean and dry"),r.a.createElement("li",null,"Measurement should be avoided staggered pollution between solutions, so as not to affect the accuracy of measurement"),r.a.createElement("li",null,"The electrode should not be long-term immersed in acid chloride solution"),r.a.createElement("li",null,"Electrode when in use, the ceramic sand core and liquid outlet rubber ring should be removed, in order to make salt bridge solution to maintain a certain velocity")),r.a.createElement("h4",null,"PH Sensor"),r.a.createElement("ul",null,r.a.createElement("li",null,"Model: SEN0169"),r.a.createElement("li",null,"Measuring Range: 0-14PH"),r.a.createElement("li",null,"Measuring Temperature: 0-60 C"),r.a.createElement("li",null,"Accuracy: \xb1 0.2pH @ 25 C")))),r.a.createElement(B.a,{style:U.buttonClose},r.a.createElement(S.a,{variant:"contained",color:"secondary",onClick:this.handleClose.bind(this)},"Close"))))}}]),t}(n.Component),F="https://beer-tech-web-prod.herokuapp.com",G=Object(C.createMuiTheme)({palette:{primary:{light:O.a[300],main:O.a[500],dark:O.a[700]},secondary:{light:H.a[300],main:H.a[500],dark:H.a[700]}},typography:{useNextVariants:!0}}),X=h()(F);X.on("connect",function(){}),X.on("data-update",function(e){"PH"===e.sensor?(Q.ph.y=e.value,Q.ph.x=e.timestamp):"TEMP"===e.sensor&&(Q.temp.y=e.value,Q.temp.x=e.timestamp)});var Y={content:{width:"80%",padding:20}},$={ph:[{name:"Last Minute",durationMs:6e4,sampleRateMs:500,dataHistorical:[]},{name:"Last 2 Hours",durationMs:72e5,sampleRateMs:3e4,dataHistorical:[]},{name:"Last 24 Hours",durationMs:864e5,sampleRateMs:3e5,dataHistorical:[]}],temp:[{name:"Last Minute",durationMs:6e4,sampleRateMs:500,dataHistorical:[]},{name:"Last 2 Hours",durationMs:72e5,sampleRateMs:3e4,dataHistorical:[]},{name:"Last 24 Hours",durationMs:864e5,sampleRateMs:3e5,dataHistorical:[]}]},Q={ph:{},temp:{}},Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,serverError:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"mapChartData",value:function(e){var t={value:"y",timestamp:"x"};return e.dataHistorical=e.dataHistorical.map(function(e){return g.a.mapKeys(e,function(e,a){return t[a]})}),e}},{key:"getChartData",value:function(e,t){var a=this;return E.a.get(F+"/historicals?sensor="+t+"&duration="+e.durationMs+"&samplerate="+e.sampleRateMs).then(function(t){return t.data&&(0===t.data.length||(e.dataHistorical=t.data,e=a.mapChartData(e))),{chart:e}}).catch(function(e){return console.log({err:e}),e})}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1}),$.ph.forEach(function(t){t.isLoading=!0,e.getChartData(t,"ph").then(function(a){t.isLoading=!1,e.setState({updateData:!0}),a.err?t.isError=!0:t=a.chart})}),$.temp.forEach(function(t){t.isLoading=!0,e.getChartData(t,"temp").then(function(a){t.isLoading=!1,e.setState({updateData:!0}),a.err?t.isError=!0:t=a.chart})})},1e3)}},{key:"render",value:function(){var e;if(!0===this.state.loading)e=r.a.createElement("div",null,r.a.createElement(b.MoonLoader,{color:"#36D7B7"}));else if(!0===this.state.serverError)e=r.a.createElement("div",null,"Server Unreachable",r.a.createElement("br",null),r.a.createElement("br",null),"Try Reloading App");else{var t=$.ph.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(T,{isLoading:e.isLoading,isError:e.isError,title:e.name,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",dataHistorical:e.dataHistorical,dataRealTime:Q.ph,duration:e.durationMs,refresh:e.sampleRateMs}))}),a=$.temp.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(T,{isLoading:e.isLoading,isError:e.isError,title:e.name,borderColor:"rgb(152, 255, 152)",backgroundColor:"rgba(152, 255, 152, 0.5)",dataHistorical:e.dataHistorical,dataRealTime:Q.temp,duration:e.durationMs,refresh:e.sampleRateMs}))});e=r.a.createElement("div",{style:Y.content},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{sm:6},r.a.createElement("h2",null,"PH"),r.a.createElement(x,{dataRealTime:Q.ph}),r.a.createElement("br",null),t),r.a.createElement(k.a,{sm:6},r.a.createElement("h2",null,"TEMP"),r.a.createElement(x,{dataRealTime:Q.temp}),r.a.createElement("br",null),a))),r.a.createElement("br",null),r.a.createElement(q,null),r.a.createElement("br",null))}return r.a.createElement(C.MuiThemeProvider,{theme:G},r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"App-main"},e)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[182,2,1]]]);
//# sourceMappingURL=main.dfaf0653.chunk.js.map