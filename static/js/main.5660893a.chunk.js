(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/ME.bc25cff4.jpg"},function(e,a,t){e.exports=t.p+"static/media/anders-resume.53b406b0.pdf"},,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){var n={"./ME.jpg":6,"./anders-resume.pdf":7,"./cube-wave.gif":18,"./mountains-resized.jpg":19,"./nomadica-img.png":20,"./open-road-resized.jpg":21};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=17},function(e,a,t){e.exports=t.p+"static/media/cube-wave.8cb9993a.gif"},function(e,a,t){e.exports=t.p+"static/media/mountains-resized.150addc3.jpg"},function(e,a,t){e.exports=t.p+"static/media/nomadica-img.370cbfdb.png"},function(e,a,t){e.exports=t.p+"static/media/open-road-resized.f18e9761.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),s=t.n(o),c=(t(5),t(1));var l=function(e){var a=e.currentTab,t=e.setTab;return r.a.createElement("header",null,r.a.createElement("h1",null,"Anders Ackerman"),r.a.createElement("nav",null," ",r.a.createElement("ul",null,["Home","About","Projects","Resume","Contact"].map((function(e){return r.a.createElement("li",{key:e},"Resume"===e?r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/document/d/1qbMSl29EXZBkvwZH6blgTdRlpMsVLCYwTo5eT0pKOQc/edit",rel:"noreferrer noopener"}," ",e):r.a.createElement("a",{href:"#"+e.toLowerCase(),onClick:function(){return t(e)},className:a===e?"nav-link active":"nav-link"}," ",e))})))),r.a.createElement("div",{className:"secondary-background"}))},i=t(9),m=t(10),u=t(11),d=t.n(u);var p=function(){var e=[];return r.a.createElement("div",null,r.a.createElement("section",{className:"hero-flex"},r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-title"},r.a.createElement("div",{id:"canvas-div"},r.a.createElement("div",{id:"canvas-anchor"},r.a.createElement(d.a,{setup:function(a){var t=document.querySelector("#canvas-anchor"),n=document.querySelector("#canvas-div"),r=n.offsetWidth-15,o=n.offsetHeight+100;a.createCanvas(r,o).parent("canvas-div"),n.appendChild(t);for(var s=Math.floor(window.innerWidth/50),c=function(){function e(){Object(i.a)(this,e),this.pos=a.createVector(a.random(r),a.random(o)),this.vel=a.createVector(a.random(-2,2),a.random(-2,2)),this.size=10}return Object(m.a)(e,[{key:"update",value:function(){this.pos.add(this.vel),this.edges()}},{key:"draw",value:function(){a.noStroke(),a.fill("rgba(255, 100, 255, .5)"),a.circle(this.pos.x,this.pos.y,this.size)}},{key:"edges",value:function(){(this.pos.x<0||this.pos.x>r)&&(this.vel.x*=-1),(this.pos.y<0||this.pos.y>o)&&(this.vel.y*=-1)}},{key:"checkParticles",value:function(e){var t=this;e.forEach((function(e){a.dist(t.pos.x,t.pos.y,e.pos.x,e.pos.y)<120&&(a.stroke("rgba(66, 255, 200, .5)"),a.line(t.pos.x,t.pos.y,e.pos.x,e.pos.y))}))}}]),e}(),l=0;l<s;l++)e.push(new c)},draw:function(a){a.background("rgba(66, 146, 206, .2)"),e.forEach((function(a,t){a.update(),a.draw(),a.checkParticles(e.slice(t))}))}}))),r.a.createElement("h2",null,"Anders Ackerman's"),r.a.createElement("h3",null,"Web & Software Development Portfolio")))))};var g=function(){return r.a.createElement("section",{className:"about-me"},r.a.createElement("div",{className:"about-me-flex-row"},r.a.createElement("h2",null,"About Me"),r.a.createElement("img",{className:"me-picture",src:t(6),alt:"recent snapshot of me"}),r.a.createElement("div",{className:"border-right"})),r.a.createElement("p",{className:"about-p"},"Anders has adventurous ambitions which include a deep passion for Software Development, Music Production, and the Audio Visual Arts."),r.a.createElement("div",{className:"border-bottom"}),r.a.createElement("p",{className:"about-p"},"Always looking to experience a new adventure in the world of programming."),r.a.createElement("div",{className:"border-bottom"}),r.a.createElement("p",{className:"about-p"},"Utilizing JavaScript to build dynamic web applications from back-end to front-end."),r.a.createElement("div",{className:"border-bottom"}),r.a.createElement("p",{className:"about-p"},"Including the use of the MERN stack, MongoDB, Express.js, React.js, Node.js, Heroku, CSS3, HTML5, Handlebars.js, MySQL, Sequelize, p5.js and much more"),r.a.createElement("div",{className:"border-bottom"}))},f={red:"ff0000",blue:"0000ff",green:"00872b",purple:"6600ff",yellow:"d9c709",orange:"d98609",darkBlue:"0f0080",deepPurple:"480087",teal:"008783",hotPink:"ff36ee"};var h=function(){var e=[{name:"Cube Wave",description:"p5.js sketch of an animated 3D cube",imageSrc:"cube-wave.gif",technologyBadges:["https://img.shields.io/badge/p5.JS-".concat(f.blue,".svg"),"https://img.shields.io/badge/HTML_Canvas-".concat(f.orange,".svg"),"https://img.shields.io/badge/JavaScript-".concat(f.yellow,".svg")],githubLink:"https://github.com/dj-viking/cube-wave",deployLink:"https://dj-viking.github.io/cube-wave/"},{name:"Nomadica",description:"Front-End Application to Search for Job Salaries by Country Name.",imageSrc:"nomadica-img.png",technologyBadges:["https://img.shields.io/badge/Teleport_API-00872b.svg","https://img.shields.io/badge/Rates_API-00872b.svg","https://img.shields.io/badge/Country_Flags_API-00872b.svg"],githubLink:"https://github.com/Dj-Viking/Nomadica",deployLink:"https://dj-viking.github.io/Nomadica/"}];return r.a.createElement("div",{className:"project-flex-column"},e.map((function(e){return r.a.createElement("section",{className:"project-section",key:e.name}," ",r.a.createElement("div",{className:"card-title"},r.a.createElement("h2",{className:"card-header"},e.name),r.a.createElement("img",{className:"work-img",src:t(17)("./".concat(e.imageSrc)),alt:"project snapshot"})),r.a.createElement("div",{className:"card-description"},r.a.createElement("p",{className:"project-description"},e.description),r.a.createElement("div",{className:"border-bottom2"}),r.a.createElement("div",{className:"tech-used"},"Technologies used:"),e.technologyBadges&&e.technologyBadges.map((function(e){return r.a.createElement("img",{alt:"project badge",src:e,className:"project-badge"})})),r.a.createElement("div",{className:"project-button-container"},r.a.createElement("a",{target:"_blank",href:e.githubLink,rel:"noopener noreferrer"}," ",r.a.createElement("button",{className:"project-btn"}," GitHub Repository")),r.a.createElement("a",{target:"_blank",href:e.deployLink,rel:"noopener noreferrer"}," ",r.a.createElement("button",{className:"project-btn"}," Deployed App Page")))))})))};var b=function(){return r.a.createElement("div",null,r.a.createElement("iframe",{src:t(7),width:"1000px",height:"500px",title:"resume"}))};var v=function(){return r.a.createElement("div",{className:"footer"},"Footer")},E=t(2),N=t(3);function k(e){return/^[a-zA-Z0-9]{1,15}?\.?[a-zA-Z0-9]{1,15}@[a-z]{3,15}\.[a-z]{3,8}$/g.test(String(e).toLowerCase())}var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(c.a)(e,2),t=a[0],o=a[1],s=Object(n.useState)(""),l=Object(c.a)(s,2),i=l[0],m=l[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),p=d[0],g=d[1],f=t.name,h=t.email,b=t.message;function v(e){m(""),g(""),console.log(e.target.name),console.log(e.target.value),o(Object(N.a)(Object(N.a)({},t),{},Object(E.a)({},e.target.name,e.target.value)))}return console.log(t),r.a.createElement("div",{className:"contact-container"},r.a.createElement("section",{className:"form-card"},r.a.createElement("h1",{"data-testid":"contact"},"Contact Me"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(t),console.log(t.name),console.log(t.email),console.log(t.message),t.name||!1!==k(t.email)||t.message?t.name&&!1===k(t.email)&&!t.message?(m("Please enter a valid email address and message."),setTimeout((function(){m("")}),3e3)):t.name&&!0===k(t.email)&&!t.message?(m("Please enter a message."),setTimeout((function(){m("")}),3e3)):t.name||!0!==k(t.email)||t.message?!t.name&&!0===k(t.email)&&t.message?(m("Please enter a name."),setTimeout((function(){m("")}),3e3)):t.name&&!1===k(t.email)&&t.message?(m("Please enter a valid email address."),setTimeout((function(){m("")}),3e3)):!t.name&&!1===k(t.email)&&t.message?(m("Please enter a name and a valid email address."),setTimeout((function(){m("")}),3e3)):t.name&&!0===k(t.email)&&t.message&&(g("Thank you for submission!"),setTimeout((function(){g("")}),3e3)):(m("Please enter a name and message."),setTimeout((function(){m("")}),3e3)):(m("Invalid entries in the form."),setTimeout((function(){m("")}),3e3))}},r.a.createElement("div",{className:"form-name"},r.a.createElement("label",{htmlFor:"name"},"Name:")," ",r.a.createElement("input",{autoComplete:"off",type:"text",name:"name",defaultValue:f,onBlur:v})),r.a.createElement("div",{className:"form-email"},r.a.createElement("label",{htmlFor:"email"},"Email Address:"),r.a.createElement("input",{autoComplete:"off",type:"email",name:"email",defaultValue:h,onBlur:v})),r.a.createElement("div",{className:"form-message"},r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:v,className:"form-textarea"})),r.a.createElement("button",{className:"form-button",type:"submit"},"Submit"),i&&r.a.createElement("div",null,r.a.createElement("p",{className:"form-error"},i)),p&&r.a.createElement("div",null,r.a.createElement("p",{className:"form-success"},p)))))};var j=function(){var e=Object(n.useState)("Home"),a=Object(c.a)(e,2),t=a[0],o=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(l,{currentTab:t,setTab:o}),r.a.createElement("main",null,function(){switch(t){case"About":return r.a.createElement(g,null);case"Projects":return r.a.createElement(h,null);case"Resume":return r.a.createElement(b,null);case"Contact":return r.a.createElement(y,null);default:return r.a.createElement(p,null)}}()),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5660893a.chunk.js.map