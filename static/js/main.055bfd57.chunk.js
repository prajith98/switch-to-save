(this["webpackJsonpswitch-to-save"]=this["webpackJsonpswitch-to-save"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r),s=(a(12),a(3)),c=a(4),u=a(6),i=a(5),m=(a(13),a(14)),h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleNum1Change=function(e){if(""!==e.target.value){n.setState({n1:Number(e.target.value.replace(/,/g,""))});var t=parseInt(e.target.value.replace(/,/g,"")).toLocaleString("en-IN");n.setState({num1:t})}else n.setState({n1:0,num1:""})},n.handleNum2Change=function(e){if(""!==e.target.value){n.setState({n2:Number(e.target.value.replace(/,/g,""))});var t=parseInt(e.target.value.replace(/,/g,"")).toLocaleString("en-IN");n.setState({num2:t})}else n.setState({n2:0,num2:""})},n.addAction=function(e){var t=n.state.n1+n.state.n2;n.setState({result:"Total: "+t.toLocaleString("en-IN")}),n.setState({total:t})},n.resetAction=function(e){n.setState({result:"Total: ",n1:0,n2:0,num1:"",num2:"",total:0})},n.state={result:"Total: ",n1:0,n2:0,num1:"",num2:"",total:0},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:this.handleNum1Change,value:this.state.num1,name:"num1"}),l.a.createElement("h5",null,m.toWords(this.state.n1)),l.a.createElement("h1",null,"+"),l.a.createElement("input",{type:"text",onChange:this.handleNum2Change,value:this.state.num2,name:"num2"}),l.a.createElement("h5",null,m.toWords(this.state.n2)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"Calc",onClick:this.addAction},"Calculate"),l.a.createElement("button",{className:"Res",onClick:this.resetAction},"Reset"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"total",type:"text",value:this.state.result,readOnly:!0}),l.a.createElement("h5",null,m.toWords(this.state.total)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.055bfd57.chunk.js.map