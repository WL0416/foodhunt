(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){e.exports=t.p+"static/media/logo.1dd10b18.png"},123:function(e,a,t){e.exports=t.p+"static/media/slide1.ec54f1ab.jpg"},124:function(e,a,t){e.exports=t.p+"static/media/slide2.52bb4587.jpg"},125:function(e,a,t){e.exports=t.p+"static/media/slide3.170fbc69.jpg"},135:function(e,a){},146:function(e,a,t){e.exports=t(301)},155:function(e,a,t){},176:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(32),r=t.n(c),s=(t(151),t(152),t(153),t(22)),i=t(23),m=t(25),o=t(24),u=t(26),d=t(34),E=t(33),p=(t(154),t(155),t(79)),v=t.n(p),N=t(118),f=t(119),b=t.n(f),h=l.a.createContext(),y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={specials:[],specialsPrice:[],specialsRate:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(N.a)(v.a.mark(function e(){var a,t,n,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://my-json-server.typicode.com/wl0416/JSONapi/specials/");case 2:a=e.sent,t=a.data,console.log(t),n=t.sort(function(e,a){return e.date-a.date}),console.log(n.reverse()),l=t.sort(function(e,a){return e.rate-a.rate}),console.log(l),this.setState({specials:a.data,specialsPrice:n,specialsRate:l});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),g=h.Consumer,k=(t(176),t(120)),j=t.n(k),w=function(e){var a=e.branding;return l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-0 py-0"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/",className:"navbar-brand"},l.a.createElement("img",{src:j.a,width:"75",height:"75",alt:""}),a),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"TODAY")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"VENUES")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/AddSpecial",className:"nav-link"},"ADD SPECIAL")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"NEARBY NOW"))))))};w.defaultProps={branding:"Food Hunt"};var x=w,O=function(e){var a=e.copyright;return l.a.createElement("footer",{className:"page-footer font-small danger-color pt-4 mt-5"},l.a.createElement("div",{className:"container-fluid text-center text-md-left"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-md-0 mt-3"},l.a.createElement("h5",{className:"text-uppercase text-center"},"Footer Content"),l.a.createElement("p",{className:"text-center"},"aksoajdijoiwajdijawijdioaj")),l.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),l.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},l.a.createElement("h5",{className:"text-uppercase"},"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 3")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 4")))),l.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},l.a.createElement("h5",{className:"text-uppercase"},"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 1")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 2")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 3")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Link 4")))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},a))};O.defaultProps={copyright:" \xa9 2019 Copyright: FoodHunt Pty Ltd"};var S=O,A=t(123),C=t.n(A),L=t(124),F=t.n(L),I=t(125),P=t.n(I),D=(t(185),t(186),function(e){var a=e.information;return l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h1",null,a),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"button",className:"btn-block btn-success"},"Get Info")),l.a.createElement("div",{className:"col"},l.a.createElement("button",{type:"button",className:"btn-block btn-danger"},"Hunt Now")),l.a.createElement("div",{className:"col"})))});D.defaultProps={information:"Need information here."};var H=D,R=function(e){return l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:C.a,alt:"First Slide",className:"d-block w-100"})),l.a.createElement(H,{information:"Street Food Arriving!"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:F.a,alt:"Second Slide",className:"d-block w-100"})),l.a.createElement(H,{information:"Free Indian Food!"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:P.a,alt:"Third Slide",className:"d-block w-100"})),l.a.createElement(H,{information:"Free Food Again!!!"}))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))},T=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"search-banner py-3 form-arka-plan",id:"search-banner"},l.a.createElement("div",{className:"container py-5 my-5"},l.a.createElement("div",{className:"row text-center pb-4"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",{className:"text-dark siyad-cerceve"},"Search Your Food Right Now!"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card acik-renk-form"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"h-100 input-group-prepend"},l.a.createElement("label",{htmlFor:"inputGroupSelect01",className:"input-group-text"},"WHEN"),l.a.createElement("select",{name:"",id:"inputGroupSelect01",className:"h-100 custom-select"},l.a.createElement("option",{value:"",selected:!0},"Any particular day?"),l.a.createElement("option",{value:"1"},"Monday"),l.a.createElement("option",{value:"2"},"Tuesday"),l.a.createElement("option",{value:"3"},"Wednesday"),l.a.createElement("option",{value:"4"},"Thurday"),l.a.createElement("option",{value:"5"},"Friday"),l.a.createElement("option",{value:"6"},"Saturday"),l.a.createElement("option",{value:"7"},"Sunday")))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"h-100 input-group-prepend"},l.a.createElement("label",{htmlFor:"inputGroupSelect02",className:"input-group-text"},"WHERE"),l.a.createElement("input",{id:"inputGroupSelect02",type:"text",className:"h-100 form-control"}))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{className:"btn btn-danger",type:"button"},"Search!"))))))))))}}]),a}(n.Component),W=t(305),G=t(306),Y=t(307),B=t(308),J=(t(187),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.special,a=e.address,t=e.name,n=e.price,c=e.suburb,r=e.postcode;return l.a.createElement("a",{className:"speciala",href:"/"},l.a.createElement(B.a.Item,null,l.a.createElement(W.a,null,l.a.createElement(G.a,null,l.a.createElement(Y.a,{md:2,className:"specialcol"},l.a.createElement(B.a.Content,null,"$",n)),l.a.createElement(Y.a,{md:10},l.a.createElement(B.a.Content,null,l.a.createElement(B.a.Header,null,t),l.a.createElement(B.a.Description,null,a," ",c," ",r)))))))}}]),a}(n.Component)),M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={weekday:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=(new Date).toLocaleDateString("default",{weekday:"long"}).toUpperCase();this.setState({weekday:e})}},{key:"render",value:function(){var e=this.state.weekday;return l.a.createElement(g,null,function(a){var t=a.specialsPrice;return l.a.createElement(W.a,null,l.a.createElement(G.a,null,l.a.createElement(Y.a,null,l.a.createElement("h5",null,"RECENTLY ADDED ",e," SPECIALS"),l.a.createElement(B.a,{selection:!0,verticalAlign:"middle"},t.map(function(e){return l.a.createElement(J,{key:e.id,special:e})}))),l.a.createElement(Y.a,null,l.a.createElement("h5",null,"TOP RATE SPECIALS"),l.a.createElement(B.a,{selection:!0,verticalAlign:"middle"},t.map(function(e){return l.a.createElement(J,{key:e.id,special:e})})))))})}}]),a}(n.Component),U=function(e){return l.a.createElement("span",null,l.a.createElement(R,null),l.a.createElement(T,null),l.a.createElement(M,null))},$=t(135),V=t.n($),q=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(x,{branding:"Food Hunt"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:U}),l.a.createElement(E.a,{exact:!0,path:"./AddSpecial",component:V.a}))),l.a.createElement(S,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.a4a89a76.chunk.js.map