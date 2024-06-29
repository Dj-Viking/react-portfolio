(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),c=a(7),o=a.n(c),r=(a(6),a(2));var l=function(e){var t=e.currentTab,a=e.setTab;return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{style:{marginTop:"2px"},children:"Anders Ackerman"}),Object(s.jsxs)("nav",{children:[" ",Object(s.jsx)("ul",{children:["Home","About","Projects","Resume"].map((function(e){return Object(s.jsx)("li",{children:"Resume"===e?Object(s.jsxs)("a",{target:"_blank",href:"https://docs.google.com/document/d/1qbMSl29EXZBkvwZH6blgTdRlpMsVLCYwTo5eT0pKOQc/edit?usp=sharing",rel:"noreferrer noopener",children:[" ",e]}):Object(s.jsxs)("a",{href:"#"+e.toLowerCase(),onClick:function(){return a(e)},className:t===e?"nav-link active":"nav-link",children:[" ",e]})},e)}))})]}),Object(s.jsx)("div",{className:"secondary-background"})]})},d=a(8),m=a(9),h=a(10),j=a.n(h);var g=function(){var e=[];return Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"hero-flex",children:Object(s.jsx)("section",{className:"hero",children:Object(s.jsxs)("div",{className:"hero-title",children:[Object(s.jsx)("div",{id:"canvas-div",children:Object(s.jsx)("div",{id:"canvas-anchor",children:Object(s.jsx)(j.a,{setup:function(t){var a=document.querySelector("#canvas-anchor"),s=document.querySelector("#canvas-div"),n=s.offsetWidth-15,i=s.offsetHeight+100;t.createCanvas(n,i).parent("canvas-div"),s.appendChild(a);for(var c=Math.floor(window.innerWidth/50),o=function(){function e(){Object(d.a)(this,e),this.pos=t.createVector(t.random(n),t.random(i)),this.vel=t.createVector(t.random(-2,2),t.random(-2,2)),this.size=10}return Object(m.a)(e,[{key:"update",value:function(){this.pos.add(this.vel),this.edgeCheck(),this.mouseCheck()}},{key:"draw",value:function(){t.noStroke(),t.fill("rgba(255, 100, 255, .5)"),t.circle(this.pos.x,this.pos.y,this.size)}},{key:"edgeCheck",value:function(){(this.pos.x<0||this.pos.x>n)&&(this.vel.x*=-1),(this.pos.y<0||this.pos.y>i)&&(this.vel.y*=-1)}},{key:"mouseCheck",value:function(){var e=document.querySelector("#defaultCanvas0").getBoundingClientRect();t.mouseX>=0&&t.mouseX<=e.width&&(t.mouseX<this.pos.x&&(this.vel.x*=-1),t.mouseY<this.pos.y&&(this.vel.y*=-1))}},{key:"checkParticles",value:function(e){var a=this;e.forEach((function(e){t.dist(a.pos.x,a.pos.y,e.pos.x,e.pos.y)<120&&(t.stroke("rgba(66, 255, 200, .5)"),t.line(a.pos.x,a.pos.y,e.pos.x,e.pos.y))}))}}]),e}(),r=0;r<c;r++)e.push(new o)},draw:function(t){t.background("rgba(66, 146, 206, .2)"),e.forEach((function(t,a){t.update(),t.draw(),t.checkParticles(e.slice(a))}))}})})}),Object(s.jsx)("h3",{children:"Web & Software Development Portfolio"})]})})})})},b=a.p+"static/media/ME.95aa7270.jpg";var u=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("section",{className:"about-me",children:[Object(s.jsxs)("div",{className:"about-me-flex-row",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsx)("img",{className:"me-picture",src:b,alt:"recent snapshot of me"})]}),Object(s.jsx)("p",{className:"about-p",children:"Anders has adventurous ambitions which include a deep passion for Software Development, Music Production, and the Audio Visual Arts."}),Object(s.jsx)("div",{className:"border-bottom"}),Object(s.jsx)("p",{className:"about-p",children:"Always looking to experience a new adventure in the world of programming."}),Object(s.jsx)("div",{className:"border-bottom"}),Object(s.jsx)("p",{className:"about-p",children:"Utilizing JavaScript to build dynamic web applications from back-end to front-end."}),Object(s.jsx)("div",{className:"border-bottom"}),Object(s.jsx)("p",{className:"about-p",children:"Including the use of the MERN stack, MongoDB, Express.js, React.js, Node.js, Heroku, CSS3, HTML5, Handlebars.js, MySQL, Sequelize, p5.js and much more"}),Object(s.jsx)("div",{className:"border-bottom"})]})})},p=a.p+"static/media/github.16a9304e.svg",f={red:"ff0000",blue:"0000ff",green:"00872b",purple:"6600ff",yellow:"d9c709",orange:"d98609",darkBlue:"0f0080",deepPurple:"480087",teal:"008783",vueGreen:"42b883",hotPink:"ff36ee"},v=a.p+"static/media/nomad-lang.c341f604.png",x=a.p+"static/media/fft-audio-gif.bb95660d.gif",O=a.p+"static/media/nomadica-img.5aa8563d.png",k=a.p+"static/media/meet-the-replacements.9a07be19.jpg",N=[{name:"LED Art Matrix",description:"MERN-stack application LED Matrix emulator build with React, \n        html Canvas API rendering rectangles, MIDI Controls change visuals supporting XONEK2 and TouchOSC (more to come)",imageSrc:a.p+"static/media/led-matrix-gif.72cdb580.gif",technologyBadges:[{isLink:!0,link:"https://app.codecov.io/gh/Dj-Viking/LED-Art-matrix",src:"https://codecov.io/gh/Dj-Viking/LED-Art-matrix/branch/main/graph/badge.svg?token=6KIXEPI5DA"},{isLink:!1,src:"https://img.shields.io/badge/React.js-".concat(f.teal,".svg")},{isLink:!1,src:"https://img.shields.io/badge/TypeScript-".concat(f.blue,".svg")}],githubLink:"https://github.com/Dj-Viking/LED-Art-matrix",deployLink:"https://led-matrices.onrender.com/"},{name:"Nomad Lang",description:"Flash card app for foreign language learning. User customizable cards.",imageSrc:v,technologyBadges:[{isLink:!0,link:"https://vuejs.org/guide/introduction.html",src:"https://img.shields.io/badge/Vue3-".concat(f.vueGreen,".svg")},{isLink:!1,src:"https://img.shields.io/badge/TypeScript-".concat(f.blue,".svg")},{isLink:!1,src:"https://img.shields.io/badge/MongoDB:TypeGoose-".concat(f.green,".svg")},{isLink:!0,link:"https://app.codecov.io/gh/Dj-Viking/nomad-lang",src:"https://codecov.io/gh/Dj-Viking/Nomad-Lang/branch/main/graph/badge.svg?token=X4CXPYZE2O"}],githubLink:"https://github.com/dj-viking/nomad-lang",deployLink:"https://nomad-lang.onrender.com"},{name:"Nomadica",description:"Front-End Application to Search for Job Salaries by Country Name.",imageSrc:O,technologyBadges:[{isLink:!1,src:"https://img.shields.io/badge/Teleport_API-".concat(f.orange,".svg")},{isLink:!1,src:"https://img.shields.io/badge/Rates_API-".concat(f.orange,".svg")},{isLink:!1,src:"https://img.shields.io/badge/Tailwind_CSS-".concat(f.purple,".svg")}],githubLink:"https://github.com/Dj-Viking/Nomadica",deployLink:"https://nomadica.onrender.com/"},{name:"FFT Audio Visualizer",description:"p5.js sketch also using p5.sound.js library to create a JavaScript based audio visualizer that runs in the browser from a node instance localhost.",imageSrc:x,technologyBadges:[{isLink:!1,src:"https://img.shields.io/badge/Node_JS-".concat(f.green,".svg")},{isLink:!1,src:"https://img.shields.io/badge/Express_JS-".concat(f.blue,".svg")},{isLink:!1,src:"https://img.shields.io/badge/p5_JS-".concat(f.purple,".svg")},{isLink:!1,src:"https://img.shields.io/badge/p5.sound_JS-".concat(f.deepPurple,".svg")}],githubLink:"https://github.com/Dj-Viking/fft-audio-visualizer"},{name:"Meet The Replacements",description:"Meet The Replacements Orlando Fringe 2018 theatre show LED set piece.",imageSrc:k,technologyBadges:[{isLink:!1,src:"https://img.shields.io/badge/Arduino-".concat(f.teal,".svg")},{isLink:!1,src:"https://img.shields.io/badge/C-".concat(f.purple,".svg")},{isLink:!1,src:"https://img.shields.io/badge/C++-".concat(f.deepPurple,".svg")}],githubLink:"https://github.com/Dj-Viking/meetTheReplacements"}];var y=function(){var e={marginRight:"10px",marginLeft:"10px"};return Object(s.jsxs)("div",{className:"project-flex-column",children:[N.map((function(t){return Object(s.jsxs)("section",{className:"project-section",id:(1e4*Math.random()).toString()+"dkfjkdfjkd",children:[Object(s.jsxs)("div",{className:"card-title",children:[Object(s.jsx)("h2",{className:"card-header",children:Object(s.jsx)("span",{children:t.name})}),Object(s.jsx)("img",{className:"work-img",src:"".concat(t.imageSrc),alt:"project snapshot"})]}),Object(s.jsxs)("div",{className:"card-description",children:[Object(s.jsx)("p",{className:"project-description",children:t.description}),Object(s.jsx)("div",{className:"border-bottom2"}),Object(s.jsx)("div",{className:"tech-used",children:Object(s.jsx)("span",{children:"Built using:"})}),t.technologyBadges&&t.technologyBadges.map((function(e){return e.isLink?Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("img",{alt:"project badge",src:e.src,className:"project badge",id:(102032*Math.random()).toString()+"h5rstwnssbnthberst"},(1e4*Math.random()).toString()+"q3y46rsw4hjaew4w4")},(1e4*Math.random()).toString()+" wegpr[idkjl;'fvga"):Object(s.jsx)("img",{alt:"project badge",src:e.src,className:"project-badge",id:(1029329*Math.random()).toString()+"jqw3hu5aersw435ejntaejnstwa"},(1029329*Math.random()).toString()+"qy34hyw53nsaben")})),Object(s.jsxs)("div",{className:"project-button-container",children:[Object(s.jsx)("a",{target:"_blank",href:t.githubLink,rel:"noopener noreferrer",children:Object(s.jsx)("button",{className:"project-btn",style:e,children:Object(s.jsx)("span",{children:"GitHub Repository"})})}),t.deployLink&&Object(s.jsx)("a",{target:"_blank",href:t.deployLink,rel:"noopener noreferrer",children:Object(s.jsx)("button",{className:"project-btn",style:e,children:"Deployed App Page"})})]})]})]},(1e4*Math.random()).toString()+"dkfjkdfjkd")})),Object(s.jsx)("div",{className:"project-button-container",children:Object(s.jsx)("a",{href:"https://github.com/Dj-Viking",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsxs)("button",{className:"project-btn",children:[Object(s.jsx)("img",{src:p,height:"16",width:"16",alt:"icon",className:"github-icon"}),Object(s.jsx)("span",{children:"See More Projects"}),Object(s.jsx)("img",{src:p,height:"16",width:"16",alt:"icon",className:"github-icon"})]})})})]},(1e4*Math.random()).toString()+"dkfjkdfjkd")},w=a.p+"static/media/linkedin.03f1d164.svg",S=a.p+"static/media/gmail.ab6acc4d.svg",L=a.p+"static/media/twitch.6414f22f.svg";var M=function(){var e=[{name:"GitHub",src:p,link:"https://github.com/dj-viking"},{name:"LinkedIn",src:w,link:"https://www.linkedin.com/in/anders-ackerman-b1055061/"},{name:"Email",src:S,link:"mailto:anders.swedishviking@gmail.com"},{name:"Twitch",src:L,link:"https://twitch.tv/djvikingsintheroad"}],t={textDecoration:"none"},a={margin:"auto"};return Object(s.jsx)("div",{className:"footer",children:e.map((function(e,n){return Object(s.jsx)("div",{className:"footer-button-container",children:Object(s.jsx)("a",{href:"".concat(e.link),target:"_blank",rel:"noreferrer noopener",id:e.name,style:t,children:Object(s.jsx)("button",{className:"footer-btn",children:Object(s.jsx)("img",{src:e.src,height:"24",width:"24",alt:e.name,className:"footer-icon-style",style:a},"".concat(e.name).concat(n))})},"".concat(e.name).concat(n+1))},"".concat(e.name).concat(n+2))}))})},T=a(3),A=a(4);function C(e){return/^[a-zA-Z0-9]{1,15}?\.?[a-zA-Z0-9]{1,15}@[a-z]{3,15}\.[a-z]{3,8}$/g.test(String(e).toLowerCase())}var D=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),o=Object(r.a)(c,2),l=o[0],d=o[1],m=Object(n.useState)(""),h=Object(r.a)(m,2),j=h[0],g=h[1],b=a.name,u=a.email,p=a.message;function f(e){d(""),g(""),console.log(e.target.name),console.log(e.target.value),i(Object(A.a)(Object(A.a)({},a),{},Object(T.a)({},e.target.name,e.target.value)))}return console.log(a),Object(s.jsx)("div",{className:"contact-container",children:Object(s.jsxs)("section",{className:"form-card",children:[Object(s.jsx)("h1",{"data-testid":"contact",children:"Contact Me"}),Object(s.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a),console.log(a.name),console.log(a.email),console.log(a.message),a.name||!1!==C(a.email)||a.message?a.name&&!1===C(a.email)&&!a.message?(d("Please enter a valid email address and message."),setTimeout((function(){d("")}),3e3)):a.name&&!0===C(a.email)&&!a.message?(d("Please enter a message."),setTimeout((function(){d("")}),3e3)):a.name||!0!==C(a.email)||a.message?!a.name&&!0===C(a.email)&&a.message?(d("Please enter a name."),setTimeout((function(){d("")}),3e3)):a.name&&!1===C(a.email)&&a.message?(d("Please enter a valid email address."),setTimeout((function(){d("")}),3e3)):!a.name&&!1===C(a.email)&&a.message?(d("Please enter a name and a valid email address."),setTimeout((function(){d("")}),3e3)):a.name&&!0===C(a.email)&&a.message&&(g("Thank you for your submission!"),setTimeout((function(){g("")}),3e3)):(d("Please enter a name and message."),setTimeout((function(){d("")}),3e3)):(d("Invalid entries in the form."),setTimeout((function(){d("")}),3e3))},children:[Object(s.jsxs)("div",{className:"form-name",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"})," ",Object(s.jsx)("input",{autoComplete:"off",type:"text",name:"name",defaultValue:b,onBlur:f})]}),Object(s.jsxs)("div",{className:"form-email",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(s.jsx)("input",{autoComplete:"off",type:"email",name:"email",defaultValue:u,onBlur:f})]}),Object(s.jsxs)("div",{className:"form-message",children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:f,className:"form-textarea"})]}),Object(s.jsx)("div",{className:"form-button-container",children:Object(s.jsx)("button",{className:"form-btn",type:"submit",children:"Submit"})}),l&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"form-error",children:l})}),j&&Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"form-success",children:j})})]})]})})};var P=function(){var e=Object(n.useState)("Home"),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{currentTab:a,setTab:i}),Object(s.jsx)("main",{children:function(){switch(a){case"About":return Object(s.jsx)(u,{});case"Projects":return Object(s.jsx)(y,{});case"Contact":return Object(s.jsx)(D,{});default:return Object(s.jsx)(g,{})}}()}),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(M,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.05f288a6.chunk.js.map