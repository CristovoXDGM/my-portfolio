(this["webpackJsonpmeu-portfolio-xdgm"]=this["webpackJsonpmeu-portfolio-xdgm"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/git.76d344f0.svg"},21:function(e,t,n){e.exports=n(41)},26:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(10),r=n.n(l),c=(n(26),n(27),n(28),n(2)),s=n(3),i=n(5),m=n(4),u=n(6),v=n(1),d=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){v.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),v.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"scrollToTop",value:function(){v.animateScroll.scrollToTop()}},{key:"componentWillUnmount",value:function(){v.Events.scrollEvent.remove("begin"),v.Events.scrollEvent.remove("end")}},{key:"scrollToWithContainer",value:function(){new Promise((function(e,t){v.Events.scrollEvent.register("end",(function(){e(),v.Events.scrollEvent.remove("end")})),v.scroller.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})})).then((function(){return v.scroller.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})}))}},{key:"scrollTo",value:function(e){v.scroller.scrollTo(e,{duration:1500,delay:100,smooth:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top py-3",id:"mainNav"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand js-scroll-trigger text-black font-weight-bold",href:"#",onClick:function(){return e.scrollToTop()}},"CRISTOV\xc3O"),o.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},o.a.createElement("ul",{className:"navbar-nav ml-auto my-2 my-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{href:"#",className:"nav-link js-scroll-trigger text-black",onClick:function(){return e.scrollTo("about")}},"About-me")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link js-scroll-trigger text-black",href:"#contact",title:"work in progress"},"Contacts"))))))}}]),t}(a.Component),g=(n(39),n(19),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){v.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),v.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"scrollToTop",value:function(){v.animateScroll.scrollToTop()}},{key:"componentWillUnmount",value:function(){v.Events.scrollEvent.remove("begin"),v.Events.scrollEvent.remove("end")}},{key:"scrollToWithContainer",value:function(){new Promise((function(e,t){v.Events.scrollEvent.register("end",(function(){e(),v.Events.scrollEvent.remove("end")})),v.scroller.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})})).then((function(){return v.scroller.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})}))}},{key:"scrollTo",value:function(e){v.scroller.scrollTo(e,{duration:1500,delay:100,smooth:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement("header",{className:"Master animated fadeIn"},o.a.createElement("div",{className:"TEstando h-100"},o.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},o.a.createElement("div",{className:"col-lg-10 align-self-end"},o.a.createElement("h1",{className:"text-uppercase text-black font-weight-bold"},"Hello!!!"),o.a.createElement("br",null),o.a.createElement("h1",{className:"text-uppercase text-black font-weight-normal"},"I am CRISTOV\xc3O FARIAS"),o.a.createElement("hr",{className:"divider my-4"})),o.a.createElement("div",{className:"col-lg-8 align-self-baseline"},o.a.createElement("p",{className:"text-black font-weight mb-5"},"I'm a young Brazilian guy, who loves programming, solve problems through technolgy, play and make VideoGames. "),o.a.createElement("p",null,"Living in the state of Alagoas, at the capital in Macei\xf3. My passion for  technology started with my father, he loved to teach about computers, but for him it's was justa hobby, not for me, is more than a hobby. I'm actually working as a programmer at CESMAC Univesity in the Robotics Research Core. I'm open to offers too..."),o.a.createElement("button",{className:"btn button btn-xl js-scroll-trigger text-white",onClick:function(){return e.scrollTo("about")}},"More About me")))))}}]),t}(a.Component)),b=(n(40),n(20)),h=n.n(b),f=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(v.Element,{id:this.props.id,name:this.props.name},o.a.createElement("section",{className:"page-section   animated fadeIn"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-lg-8 text-center"},o.a.createElement("h2",{className:"text-black mt-0"},"My Skills..."),o.a.createElement("hr",{className:"divider light my-4"}),o.a.createElement("p",{className:"text-black-50 mb-4"},"Flutter especialist, React Native, React.Js, Firebase, Mysql, Unity ,Learn a new technology..."),o.a.createElement("hr",{className:"divider light my-4"}),o.a.createElement("div",{className:" justify-content-center "},o.a.createElement("a",{href:" https://github.com/CristovoXDGM"},o.a.createElement("img",{className:"col-1",src:h.a}))))))))}}]),t}(a.Component);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("body",{className:!0,id:"page-top"},o.a.createElement(d,null),o.a.createElement(g,null),o.a.createElement(f,{id:"about",name:"about"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a55b025c.chunk.js.map