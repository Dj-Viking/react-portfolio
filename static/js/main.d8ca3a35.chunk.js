(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/ME.bc25cff4.jpg"},function(e,a,t){e.exports=t.p+"static/media/anders-resume.53b406b0.pdf"},,,,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){var n={"./ME.jpg":6,"./anders-resume.pdf":7,"./cube-wave.gif":18,"./fft-audio-gif.gif":19,"./meet-the-replacements.jpg":20,"./mountains-resized.jpg":21,"./nomadica-img.png":22,"./open-road-resized.jpg":23};function o(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=17},function(e,a,t){e.exports=t.p+"static/media/cube-wave.8cb9993a.gif"},function(e,a,t){e.exports=t.p+"static/media/fft-audio-gif.8266d056.gif"},function(e,a,t){e.exports=t.p+"static/media/meet-the-replacements.d442f942.jpg"},function(e,a,t){e.exports=t.p+"static/media/mountains-resized.150addc3.jpg"},function(e,a,t){e.exports=t.p+"static/media/nomadica-img.370cbfdb.png"},function(e,a,t){e.exports=t.p+"static/media/open-road-resized.f18e9761.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),s=t.n(r),c=(t(5),t(1));var i=function(e){var a=e.currentTab,t=e.setTab;return o.a.createElement("header",null,o.a.createElement("h1",null,"Anders Ackerman"),o.a.createElement("nav",null," ",o.a.createElement("ul",null,["Home","About","Projects","Resume","Contact"].map((function(e){return o.a.createElement("li",{key:e},"Resume"===e?o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/document/d/1qbMSl29EXZBkvwZH6blgTdRlpMsVLCYwTo5eT0pKOQc/edit",rel:"noreferrer noopener"}," ",e):o.a.createElement("a",{href:"#"+e.toLowerCase(),onClick:function(){return t(e)},className:a===e?"nav-link active":"nav-link"}," ",e))})))),o.a.createElement("div",{className:"secondary-background"}))},l=t(9),m=t(10),u=t(11),d=t.n(u);var p=function(){var e=[];return o.a.createElement("div",null,o.a.createElement("section",{className:"hero-flex"},o.a.createElement("section",{className:"hero"},o.a.createElement("div",{className:"hero-title"},o.a.createElement("div",{id:"canvas-div"},o.a.createElement("div",{id:"canvas-anchor"},o.a.createElement(d.a,{setup:function(a){var t=document.querySelector("#canvas-anchor"),n=document.querySelector("#canvas-div"),o=n.offsetWidth-15,r=n.offsetHeight+100;a.createCanvas(o,r).parent("canvas-div"),n.appendChild(t);for(var s=Math.floor(window.innerWidth/50),c=function(){function e(){Object(l.a)(this,e),this.pos=a.createVector(a.random(o),a.random(r)),this.vel=a.createVector(a.random(-2,2),a.random(-2,2)),this.size=10}return Object(m.a)(e,[{key:"update",value:function(){this.pos.add(this.vel),this.edges()}},{key:"draw",value:function(){a.noStroke(),a.fill("rgba(255, 100, 255, .5)"),a.circle(this.pos.x,this.pos.y,this.size)}},{key:"edges",value:function(){(this.pos.x<0||this.pos.x>o)&&(this.vel.x*=-1),(this.pos.y<0||this.pos.y>r)&&(this.vel.y*=-1)}},{key:"checkParticles",value:function(e){var t=this;e.forEach((function(e){a.dist(t.pos.x,t.pos.y,e.pos.x,e.pos.y)<120&&(a.stroke("rgba(66, 255, 200, .5)"),a.line(t.pos.x,t.pos.y,e.pos.x,e.pos.y))}))}}]),e}(),i=0;i<s;i++)e.push(new c)},draw:function(a){a.background("rgba(66, 146, 206, .2)"),e.forEach((function(a,t){a.update(),a.draw(),a.checkParticles(e.slice(t))}))}}))),o.a.createElement("h2",null,"Anders Ackerman's"),o.a.createElement("h3",null,"Web & Software Development Portfolio")))))};var g=function(){return o.a.createElement("section",{className:"about-me"},o.a.createElement("div",{className:"about-me-flex-row"},o.a.createElement("h2",null,"About Me"),o.a.createElement("img",{className:"me-picture",src:t(6),alt:"recent snapshot of me"}),o.a.createElement("div",{className:"border-right"})),o.a.createElement("p",{className:"about-p"},"Anders has adventurous ambitions which include a deep passion for Software Development, Music Production, and the Audio Visual Arts."),o.a.createElement("div",{className:"border-bottom"}),o.a.createElement("p",{className:"about-p"},"Always looking to experience a new adventure in the world of programming."),o.a.createElement("div",{className:"border-bottom"}),o.a.createElement("p",{className:"about-p"},"Utilizing JavaScript to build dynamic web applications from back-end to front-end."),o.a.createElement("div",{className:"border-bottom"}),o.a.createElement("p",{className:"about-p"},"Including the use of the MERN stack, MongoDB, Express.js, React.js, Node.js, Heroku, CSS3, HTML5, Handlebars.js, MySQL, Sequelize, p5.js and much more"),o.a.createElement("div",{className:"border-bottom"}))},h={red:"ff0000",blue:"0000ff",green:"00872b",purple:"6600ff",yellow:"d9c709",orange:"d98609",darkBlue:"0f0080",deepPurple:"480087",teal:"008783",hotPink:"ff36ee"};var f=function(){var e=[{name:"Cube Wave",description:"p5.js sketch of an animated 3D cube.",imageSrc:"cube-wave.gif",technologyBadges:["https://img.shields.io/badge/p5.JS-".concat(h.blue,".svg"),"https://img.shields.io/badge/HTML_Canvas-".concat(h.orange,".svg"),"https://img.shields.io/badge/JavaScript-".concat(h.yellow,".svg")],githubLink:"https://github.com/dj-viking/cube-wave",deployLink:"https://dj-viking.github.io/cube-wave/"},{name:"Nomadica",description:"Front-End Application to Search for Job Salaries by Country Name.",imageSrc:"nomadica-img.png",technologyBadges:["https://img.shields.io/badge/Teleport_API-".concat(h.orange,".svg"),"https://img.shields.io/badge/Rates_API-".concat(h.orange,".svg"),"https://img.shields.io/badge/Country_Flags_API-".concat(h.orange,".svg"),"https://img.shields.io/badge/Tailwind_CSS-".concat(h.purple,".svg")],githubLink:"https://github.com/Dj-Viking/Nomadica",deployLink:"https://dj-viking.github.io/Nomadica/"},{name:"FFT Audio Visualizer",description:"p5.js sketch also using p5.sound.js library to create a JavaScript based audio visualizer that runs in the browser from a node instance localhost.",imageSrc:"fft-audio-gif.gif",technologyBadges:["https://img.shields.io/badge/Node_JS-".concat(h.green,".svg"),"https://img.shields.io/badge/Express_JS-".concat(h.blue,".svg"),"https://img.shields.io/badge/p5_JS-".concat(h.purple,".svg"),"https://img.shields.io/badge/p5.sound_JS-".concat(h.deepPurple,".svg")],githubLink:"https://github.com/Dj-Viking/fft-audio-visualizer"},{name:"Meet The Replacements",description:"Meet The Replacements Orlando Fringe 2018 theatre show LED set piece.",imageSrc:"meet-the-replacements.jpg",technologyBadges:["https://img.shields.io/badge/Arduino-".concat(h.orange,".svg"),"https://img.shields.io/badge/C-".concat(h.purple,".svg"),"https://img.shields.io/badge/C++-".concat(h.deepPurple,".svg")],githubLink:"https://github.com/Dj-Viking/meetTheReplacements"}];return o.a.createElement("div",{className:"project-flex-column"},e.map((function(e){return o.a.createElement("section",{className:"project-section",key:e.name}," ",o.a.createElement("div",{className:"card-title"},o.a.createElement("h2",{className:"card-header"},e.name),o.a.createElement("img",{className:"work-img",src:t(17)("./".concat(e.imageSrc)),alt:"project snapshot"})),o.a.createElement("div",{className:"card-description"},o.a.createElement("p",{className:"project-description"},e.description),o.a.createElement("div",{className:"border-bottom2"}),o.a.createElement("div",{className:"tech-used"},"Built using:"),e.technologyBadges&&e.technologyBadges.map((function(e){return o.a.createElement("img",{alt:"project badge",src:e,className:"project-badge"})})),o.a.createElement("div",{className:"project-button-container"},o.a.createElement("a",{target:"_blank",href:e.githubLink,rel:"noopener noreferrer"}," ",o.a.createElement("button",{className:"project-btn"}," GitHub Repository")),e.deployLink&&o.a.createElement("a",{target:"_blank",href:e.deployLink,rel:"noopener noreferrer"}," ",o.a.createElement("button",{className:"project-btn"}," Deployed App Page")))))})),o.a.createElement("a",{href:"https://github.com/dj-viking/repositories",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement("button",{class:"project-btn"},"See More Projects")))};var b=function(){return o.a.createElement("div",null,o.a.createElement("iframe",{src:t(7),width:"1000px",height:"500px",title:"resume"}))};var v=function(){return o.a.createElement("div",{className:"footer"},"Footer")},E=t(2),k=t(3);function j(e){return/^[a-zA-Z0-9]{1,15}?\.?[a-zA-Z0-9]{1,15}@[a-z]{3,15}\.[a-z]{3,8}$/g.test(String(e).toLowerCase())}var N=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(c.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),l=i[0],m=i[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),p=d[0],g=d[1],h=t.name,f=t.email,b=t.message;function v(e){m(""),g(""),console.log(e.target.name),console.log(e.target.value),r(Object(k.a)(Object(k.a)({},t),{},Object(E.a)({},e.target.name,e.target.value)))}return console.log(t),o.a.createElement("div",{className:"contact-container"},o.a.createElement("section",{className:"form-card"},o.a.createElement("h1",{"data-testid":"contact"},"Contact Me"),o.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(t),console.log(t.name),console.log(t.email),console.log(t.message),t.name||!1!==j(t.email)||t.message?t.name&&!1===j(t.email)&&!t.message?(m("Please enter a valid email address and message."),setTimeout((function(){m("")}),3e3)):t.name&&!0===j(t.email)&&!t.message?(m("Please enter a message."),setTimeout((function(){m("")}),3e3)):t.name||!0!==j(t.email)||t.message?!t.name&&!0===j(t.email)&&t.message?(m("Please enter a name."),setTimeout((function(){m("")}),3e3)):t.name&&!1===j(t.email)&&t.message?(m("Please enter a valid email address."),setTimeout((function(){m("")}),3e3)):!t.name&&!1===j(t.email)&&t.message?(m("Please enter a name and a valid email address."),setTimeout((function(){m("")}),3e3)):t.name&&!0===j(t.email)&&t.message&&(g("Thank you for submission!"),setTimeout((function(){g("")}),3e3)):(m("Please enter a name and message."),setTimeout((function(){m("")}),3e3)):(m("Invalid entries in the form."),setTimeout((function(){m("")}),3e3))}},o.a.createElement("div",{className:"form-name"},o.a.createElement("label",{htmlFor:"name"},"Name:")," ",o.a.createElement("input",{autoComplete:"off",type:"text",name:"name",defaultValue:h,onBlur:v})),o.a.createElement("div",{className:"form-email"},o.a.createElement("label",{htmlFor:"email"},"Email Address:"),o.a.createElement("input",{autoComplete:"off",type:"email",name:"email",defaultValue:f,onBlur:v})),o.a.createElement("div",{className:"form-message"},o.a.createElement("label",{htmlFor:"message"},"Message:"),o.a.createElement("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:v,className:"form-textarea"})),o.a.createElement("button",{className:"form-button",type:"submit"},"Submit"),l&&o.a.createElement("div",null,o.a.createElement("p",{className:"form-error"},l)),p&&o.a.createElement("div",null,o.a.createElement("p",{className:"form-success"},p)))))};var y=function(){var e=Object(n.useState)("Home"),a=Object(c.a)(e,2),t=a[0],r=a[1];return o.a.createElement("div",{className:"App"},o.a.createElement(i,{currentTab:t,setTab:r}),o.a.createElement("main",null,function(){switch(t){case"About":return o.a.createElement(g,null);case"Projects":return o.a.createElement(f,null);case"Resume":return o.a.createElement(b,null);case"Contact":return o.a.createElement(N,null);default:return o.a.createElement(p,null)}}()),o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.d8ca3a35.chunk.js.map