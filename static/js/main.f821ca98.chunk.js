(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),i=s(4),n=s.n(i),o=s(3),c=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE-DEV-MODE":var s=!e;return s;default:return e}},l=s(12),d=[],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE-FILTER":var s=Object(l.a)(e),a=t.payload,r=a.value,i=a.checked;return i?s.push(r):s=s.filter((function(e){return e!==r})),s;case"RESET-FILTERS":return d;default:return e}},m=Object(o.b)({devMode:c,activeFilters:j}),h=s(2),p=(s(22),s(0)),u=function(){var e=Object(h.c)((function(e){return e.devMode}));return Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)("input",{type:"checkbox",id:"menu-checkbox",className:"hide"}),Object(p.jsxs)("label",{htmlFor:"menu-checkbox",className:e?"toggle-menu dev":"toggle-menu des",children:[Object(p.jsxs)("div",{className:"btn",children:[Object(p.jsx)("i",{className:"menu-icon fas fa-bars menuBtn"}),Object(p.jsx)("i",{className:"menu-icon fas fa-times closeBtn"})]}),Object(p.jsx)("div",{className:"btn",onClick:function(){window.location.href="#home"},"data-tooltip":"Home",children:Object(p.jsx)("i",{className:"menu-icon fas fa-home"})}),Object(p.jsx)("div",{className:"btn",onClick:function(){window.location.href="#about"},"data-tooltip":"About",children:Object(p.jsx)("i",{className:"menu-icon fas fa-user"})}),Object(p.jsx)("div",{className:"btn",onClick:function(){window.location.href="#projects"},"data-tooltip":"Projects",children:Object(p.jsx)("i",{className:"menu-icon fas fa-pen"})}),Object(p.jsx)("div",{className:"btn resume",onClick:function(){var e=document.createElement("a");e.setAttribute("href","/Portfolio/assets/resume/NTielman.pdf"),e.setAttribute("download","NTielman-resume.pdf"),e.click()},"data-tooltip":"Download Resume",children:Object(p.jsx)("i",{className:"menu-icon fas fa-file"})}),Object(p.jsx)("div",{className:"btn",onClick:function(){window.location.href="#contact"},"data-tooltip":"Contact",children:Object(p.jsx)("i",{className:"menu-icon fas fa-envelope-open-text"})})]})]})},g=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.devMode}));return Object(p.jsxs)("div",{className:"toggle-bar-container",children:[Object(p.jsx)("input",{type:"checkbox",id:"toggle-checkbox",className:"hide",value:t,onChange:function(){document.body.classList.toggle("designMode"),e({type:"RESET-FILTERS"}),e({type:"TOGGLE-DEV-MODE"})}}),Object(p.jsxs)("label",{htmlFor:"toggle-checkbox",className:"toggle-bar",children:[Object(p.jsx)("i",{className:"fas fa-pencil-alt"}),Object(p.jsx)("i",{className:"fas fa-code"}),Object(p.jsx)("div",{className:"ball"})]})]})},b=function(){var e=Object(h.c)((function(e){return e.devMode})),t={x:-1,y:-1},s={x:-1,y:-1},r={x:0,y:0},i={},n=Object(a.useRef)(),o=Object(a.useRef)(),c=Object(a.useRef)();return Object(p.jsxs)("div",{className:e?"flesh-bg":"hide",onMouseMove:function(e){i=n.current.getBoundingClientRect(),t.x=e.pageX,t.y=e.pageY,s.x=t.x-75,s.y=t.y-i.y-75,n.current.style.MaskPositionX=s.x+"px",n.current.style.webkitMaskPositionX=s.x+"px",n.current.style.MaskPositionY=s.y+"px",n.current.style.webkitMaskPositionY=s.y+"px",r.x=100*t.x/window.innerWidth,r.y=100*t.y/window.innerHeight,o.current.style.left=r.x/2+"%",o.current.style.top=r.y/2+"%",o.current.style.transform="translateY(".concat(r.y,"%) translateX(").concat(r.x,"%)"),c.current.style.left=r.x/2+"%",c.current.style.top=r.y/2+"%",c.current.style.transform="translateY(".concat(r.y,"%) translateX(").concat(r.x,"%)")},children:[Object(p.jsxs)("div",{className:"eyes",children:[Object(p.jsx)("div",{className:"eye left",children:Object(p.jsx)("div",{ref:o,className:"pupil"})}),Object(p.jsx)("div",{className:"eye right",children:Object(p.jsx)("div",{ref:c,className:"pupil"})})]}),Object(p.jsx)("img",{ref:n,src:"/Portfolio/assets/images/home/dev/bone.png",alt:"x-ray background",className:"bone-bg"})]})},f=s(11),y=s.n(f),O=function(){var e=Object(h.c)((function(e){return e.devMode})),t=Object(a.useRef)(),s={background:"url(".concat("/Portfolio","/assets/images/home/design/1skyBackground.png) no-repeat"),backgroundSize:"100%"};return Object(a.useEffect)((function(){var e=new y.a(t.current,{relativeInput:!0,hoverOnly:!0});return e.enable(),function(){return e.disable()}}),[]),Object(p.jsx)("div",{className:e?"hide":"parallax-container",style:s,children:Object(p.jsxs)("ul",{ref:t,id:"scene",children:[Object(p.jsx)("li",{className:"layer tower","data-depth":"0.2",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/2waterTower.png",alt:"background tower"})}),Object(p.jsx)("li",{className:"layer trees","data-depth":"0.3",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/3treesMidground.png",alt:"background trees"})}),Object(p.jsx)("li",{className:"layer shack","data-depth":"0.4",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/4mysteryShack.png",alt:"mystery shack"})}),Object(p.jsx)("li",{className:"layer minigame","data-depth":"0.4",children:Object(p.jsx)("img",{className:"minigame-icon",src:"/Portfolio/assets/images/home/design/6minigameIcon.png",alt:"minigame icon"})}),Object(p.jsx)("li",{className:"layer floating-characters","data-depth":"1",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/5floatingCharacters.png",alt:"floating characters"})}),Object(p.jsx)("li",{className:"layer ground-characters","data-depth":"0.5",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/5groundCharacters.png",alt:"ground characters"})}),Object(p.jsx)("li",{className:"layer foreground-trees","data-depth":"0",children:Object(p.jsx)("img",{src:"/Portfolio/assets/images/home/design/7treesForeground.png",alt:"foreground trees"})})]})})},x=function(){return Object(p.jsxs)("section",{className:"home page",id:"home",children:[Object(p.jsx)(b,{}),Object(p.jsx)(O,{})]})},k=function(){var e=Object(h.c)((function(e){return e.devMode}));return Object(p.jsx)("section",{className:"about page",id:"about",children:Object(p.jsxs)("div",{className:e?"about-container dev":"about-container des",children:[Object(p.jsx)("h1",{children:"About Me"}),Object(p.jsxs)("h2",{children:["Part ",e?"Developer":"Designer"]}),Object(p.jsxs)("figure",{className:"about-image-container",children:[Object(p.jsx)("img",{className:e?"avatar dev":"avatar des",src:e?"/Portfolio/assets/images/about/devAvatar.png":"/Portfolio/assets/images/about/designAvatar.png",alt:"Avatar of Nneka"}),Object(p.jsx)("figcaption",{className:"about-caption",children:e?'Depiction of Nika "C-137" cooking up a master plan':"Depiction of Nika when in the vicinity of sushi. (you have been warned)"})]}),Object(p.jsxs)("article",{className:"about-text",children:[Object(p.jsxs)("p",{children:["My name is Nneka Tielman, (",Object(p.jsx)("em",{children:" feel free to call me Nika, as many people struggle to pronounce the name "}),"). I'm a full-stack developer with an art & design background, currently residing in The Hague."]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"I enjoy working with:"}),Object(p.jsx)("em",{children:" React, JavaScript,"})," and ",Object(p.jsx)("em",{children:"Python"}),Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Currently learning:"}),Object(p.jsx)("em",{children:" GSAP, Three.js"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"Coming from a creative background taught me to carefully consider my audience and what experience I intend for them to have through my work. The projects I'm most passionate to work on are undoubtedly front-end, especially where I get the opportunity to tell a story through UI effects, animations, and creating a dynamic user experience."}),Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Some random facts:"}),Object(p.jsx)("ul",{children:Object(p.jsxs)("em",{children:[Object(p.jsx)("li",{children:"I love to learn new skills"}),Object(p.jsxs)("li",{children:["I enjoy watching cartoons ",Object(p.jsx)("br",{})," ",Object(p.jsx)("small",{children:"(Rick & Morty and Gravity Falls are some of my favorites)"})]}),Object(p.jsx)("li",{children:"I speak 5 languages"}),Object(p.jsx)("li",{children:"I'm addicted to\xa0sushi"}),Object(p.jsx)("li",{children:"I have an awesome sense of humor"})]})}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Whether it's crafting design visuals or puzzling over coding challenges, I'm thrilled for the opportunity to create amazing work with awesome people. If you're looking for a creative, highly-motivated developer or just want to say hi, feel free to email me at ",Object(p.jsx)("strong",{children:Object(p.jsx)("a",{href:"mailto:khalienne@gmail.com",children:"khalienne@gmail.com"})}),"\xa0or message me through ",Object(p.jsx)("strong",{children:Object(p.jsx)("a",{href:"#contact",children:"one of my other socials"})})," listed below."]})]})]})})},v=function(e){var t=Object(h.b)(),s=Object(h.c)((function(e){return e.activeFilters})),r=Object(h.c)((function(e){return e.devMode})),i=Object(a.useRef)([]);return Object(p.jsx)("ul",{className:r?"filter-menu dev":"filter-menu des",children:e.filters.map((function(e,a){return Object(p.jsxs)("li",{id:a,children:[Object(p.jsx)("input",{type:"checkbox",name:"filter",className:"hide",checked:s.includes(e),onChange:function(e){return t(function(e){return{type:"TOGGLE-FILTER",payload:e}}(e.target))},id:e,value:e}),Object(p.jsxs)("label",{htmlFor:e,id:a,onMouseEnter:function(e){if(r){var t=e.target.getBoundingClientRect(),s=e.pageX-t.x,a=e.pageY-t.y,n=e.target.id;i.current[n].style.left=s+"px",i.current[n].style.top=a+"px"}},onMouseLeave:function(e){if(r){var t=e.target.getBoundingClientRect(),s=e.pageX-t.x,a=e.pageY-t.y,n=e.target.id;i.current[n].style.left=s+"px",i.current[n].style.top=a+"px"}},children:[r&&Object(p.jsx)("span",{className:"circle",id:a,ref:function(e){return i.current[a]=e}}),e]})]},e)}))})},w=function(e){return Object(p.jsx)("div",{className:"project-card dev",children:Object(p.jsxs)("div",{className:"card-content dev",children:[Object(p.jsxs)("div",{className:"card-front",children:[Object(p.jsx)("img",{src:"/Portfolio"+e.project.image,alt:"project preview"}),Object(p.jsxs)("div",{className:"front-titles",children:[Object(p.jsx)("h3",{className:"card-title dev",children:e.project.title}),Object(p.jsx)("p",{className:"card-subtitle dev",children:e.project.shortDescription})]})]}),Object(p.jsxs)("div",{className:"card-back",children:[Object(p.jsx)("p",{className:"card-description",children:e.project.longDescription}),Object(p.jsx)("ul",{className:"card-tools",children:e.project.tools.map((function(e){return Object(p.jsx)("li",{className:"card-tool",children:e},e)}))}),Object(p.jsxs)("div",{className:"card-links",children:[e.project.demoUrl?Object(p.jsxs)("a",{className:"demo-link social-btn",href:e.project.demoUrl,target:"_blank",rel:"noreferrer noopener",children:[Object(p.jsx)("i",{className:"fas fa-play"}),Object(p.jsx)("p",{className:"btn-text",children:"View live demo"})]}):null,Object(p.jsxs)("a",{className:"github-link social-btn",href:e.project.githubUrl,target:"_blank",rel:"noreferrer noopener",children:[Object(p.jsx)("i",{className:"fab fa-github"}),Object(p.jsx)("p",{className:"btn-text",children:"View on Github"})]})]})]})]})})},N=function(e){var t=Object(a.useRef)(),s=Object(a.useRef)();return Object(p.jsx)("div",{className:"card-hover-area",onMouseMove:function(e){var s=(window.innerWidth/2-e.pageX)/10,a=(window.innerHeight/2-e.pageY)/10;t.current.style.transform="rotateY(".concat(s,"deg) rotateX(").concat(a,"deg)")},onMouseEnter:function(){s.current.style.transform="translateZ(6rem)"},onMouseLeave:function(){t.current.style.transform="rotateY(0deg) rotateX(0deg)",s.current.style.transform="translateZ(0px)"},children:Object(p.jsxs)("div",{ref:t,className:"project-card des",children:[Object(p.jsx)("img",{src:"/Portfolio"+e.project.image,alt:"project preview"}),Object(p.jsxs)("div",{ref:s,className:"card-content des",children:[Object(p.jsx)("h3",{className:"card-title des",children:e.project.title}),Object(p.jsx)("p",{className:"card-subtitle des",children:e.project.description})]}),Object(p.jsxs)("a",{className:"flickr-link social-btn",href:e.project.galleryUrl,target:"_blank",rel:"noreferrer noopener",children:[Object(p.jsx)("i",{className:"fab fa-flickr"}),Object(p.jsx)("p",{className:"btn-text",children:"View Gallery"})]})]})})},P=[{title:"Grocery Helper",githubUrl:"https://github.com/NTielman/Grocery_helper",demoUrl:"https://hungry-jennings-92ae10.netlify.app",shortDescription:"A web app that keeps track of your groceries list and cart items",longDescription:"A web application that keeps track of your grocery list and the items already in your cart.",tools:["React","JavaScript","CSS","HTML"],image:"/assets/images/projects/devProjects/groceryHelper.jpg",key:0},{title:"Lil Playlist",githubUrl:"https://github.com/NTielman/Lil_Playlist",demoUrl:"https://hardcore-thompson-95495f.netlify.app",shortDescription:"A web app to organize your music",longDescription:"A single-page application (SPA) that allows you to add, sort, filter, and organize your music.",tools:["React","Redux","JavaScript","CSS","HTML"],image:"/assets/images/projects/devProjects/lilPlaylist.jpg",key:1},{title:"Student Dashboard",githubUrl:"https://github.com/NTielman/Student_Dashboard",demoUrl:"https://eloquent-darwin-440c3c.netlify.app",shortDescription:"A dashboard that displays student satisfaction numbers",longDescription:"Built a dashboard that displays how satisfied students are with the assignments they received from their university/ academy, using charts and tables to visualize the data.",tools:["React","Redux","JavaScript","CSS","HTML","Chart.js"],image:"/assets/images/projects/devProjects/dashboard.jpg",key:2},{title:"SuperPy",githubUrl:"https://github.com/NTielman/superPy",demoUrl:"",shortDescription:"A CLI tool for creating and tracking an inventory",longDescription:"Developed a command-line interface tool, using argparse, that keeps track of a (supermarket's) inventory, and is able to produce various reports (expiration report, sales report, purchases, low stock, best-selling items, etc.) for that inventory.",tools:["Python"],image:"/assets/images/projects/devProjects/superpy.jpg",key:3},{title:"Betsy",githubUrl:"https://github.com/NTielman/Betsy",demoUrl:"",shortDescription:"A multi-vendor marketplace modeled after Etsy",longDescription:"Created a multi-vendor marketplace modeled after Etsy. Using SQLite, modeled a database that stores a user's information, the products they sell, the tags and images associated with each product, and a user's transactions on the site. Implemented Peewee ORM to query and retrieve data from the database. Built a front-end for the application using Flask, and attempted to create a near-identical clone to the original Etsy site by using Bulma (CSS framework).",tools:["Python","Flask","CSS","Bulma","HTML","SQLite","Peewee"],image:"/assets/images/projects/devProjects/betsy.jpg",key:4},{title:"Boss Button",githubUrl:"https://github.com/WincAcademy/hackathon-0-hongerige-huismuizen",demoUrl:"https://unruffled-lichterman-d3e059.netlify.app/",shortDescription:'Team entry project for the "Winc - best button" hackathon',longDescription:"Participated in Winc Academy's 'best button' hackathon. Collaborated with team members by making use of VsCode's Live Share extension, which allowed us to share a live server and code simultaneously in the same files. Our team came up with the combined idea of making a button that multiplies on click, and whose 'child buttons' all have differing effects. My tasks: Wrote the user story as a guideline for how the final site experience should look and feel. Developed the 'water' and 'cat' buttons. Responsible for the site's design and fixing animations.",tools:["CSS","HTML","JavaScript"],image:"/assets/images/projects/devProjects/bestButton.jpg",key:5},{title:"Portfolio",githubUrl:"https://github.com/NTielman/Portfolio",shortDescription:"A portfolio website showcasing personal projects",longDescription:"This is the website you are viewing right now. This website was built to showcase past and current projects that i am proud to put my name on, as well as provide some general info about myself.",tools:["React","Redux","JavaScript","CSS","HTML","parallax.js"],image:"/assets/images/projects/devProjects/portfolio.png",key:6}],M=[{title:"Urban Amir",description:"Designs for client's clothing line dedicated to raising autism awareness",typeOfWork:"Clothing",galleryUrl:"https://flic.kr/s/aHsmV4ibgX",image:"/assets/images/projects/designProjects/urbanAmir.jpg",key:17},{title:"Psik\xe9",description:'Business card and logo design for child psychologist "Sue-Tayna"',typeOfWork:"Business Card",galleryUrl:"https://flic.kr/s/aHsmUEPSgt",image:"/assets/images/projects/designProjects/psike.jpg",key:1},{title:"Gitem Taylor",description:"Album art design for artist 'GitemTaylor'",typeOfWork:"Album Art",galleryUrl:"https://flic.kr/p/2kQfyJ7",image:"/assets/images/projects/designProjects/gitemtaylor.jpg",key:8},{title:"I-Twar",description:"Album art designs for UK artist 'i-twar'",typeOfWork:"Album Art",galleryUrl:"https://flic.kr/s/aHsmV4FsKW",image:"/assets/images/projects/designProjects/iTwar.jpg",key:9},{title:"March Hare",description:"Mascot design of 'The March Hare' for client",typeOfWork:"Mascot",galleryUrl:"https://flic.kr/p/2kGJP1C",image:"/assets/images/projects/designProjects/marchHare.jpg",key:10},{title:"Miranda",description:"Illustrations for client's story about a marshmallow trying to escape her fate of being eaten",typeOfWork:"Book Illustration",galleryUrl:"https://flic.kr/s/aHsmV4keYH",image:"/assets/images/projects/designProjects/miranda.jpg",key:11},{title:"Cane Corso",description:"Video project for integrating video and illustrations together",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/s/aHsmV4Ein4",image:"/assets/images/projects/designProjects/caneCorso.jpg",key:2},{title:"Chamili",description:"Mascot design for client's clothing line",typeOfWork:"Mascot",galleryUrl:"https://flic.kr/s/aHsmV4KQwd",image:"/assets/images/projects/designProjects/chamili.jpg",key:3},{title:"Cowlick",description:"Illustrations for client's story about a boy with peculiar hair",typeOfWork:"Book Illustration",galleryUrl:"https://flic.kr/s/aHsmV4vZKY",image:"/assets/images/projects/designProjects/cowlick.jpg",key:4},{title:"Where i belong",description:"Illustrations for client's story about a dog searching for where he belongs",typeOfWork:"Book Illustration",galleryUrl:"https://flic.kr/s/aHsmV4M48U",image:"/assets/images/projects/designProjects/doge.jpg",key:5},{title:"Gekeerah",description:"Illustrations for client's inclusive rewriting of Cinderella",typeOfWork:"Book Illustration",galleryUrl:"https://flic.kr/s/aHsmV4LveZ",image:"/assets/images/projects/designProjects/gekeerah.jpg",key:7},{title:"Stan Lee",description:"Tribute illustration for the late Stan Lee",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/p/2kQfyJc",image:"/assets/images/projects/designProjects/stanLee.jpg",key:12},{title:"Stephen Hawking",description:"Tribute illustration for the late Stephen Hawking",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/p/2kGJNZA",image:"/assets/images/projects/designProjects/stephenHawking.jpg",key:13},{title:"Turtle Warriors",description:"Board Game assets illustrations for client",typeOfWork:"Game",galleryUrl:"https://flic.kr/s/aHsmUESzHn",image:"/assets/images/projects/designProjects/turtleWarriors.jpg",key:16},{title:"Yakuza",description:"Video project animating with Krita",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/s/aHsmV4Einp",image:"/assets/images/projects/designProjects/yakuza.jpg",key:18},{title:"Triads",description:"Exploring different culture and subculture beauty standards 3 girls at a time",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/s/aHsmUEMurF",image:"/assets/images/projects/designProjects/triads.jpg",key:15},{title:"Emojis",description:"Project creating alternative emoji designs",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/p/2kJ8uVo",image:"/assets/images/projects/designProjects/emojis.jpg",key:6},{title:"Unsuprvsd",description:"Instagram Promo illustration for Unsuprvsd (personal clothing brand)",typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/s/aHsmV4MYRk",image:"/assets/images/projects/designProjects/unsuprvsd.jpg",key:14},{title:"Bowsette",description:'Expanding on the "Bowsette" meme, except now everyone is a Peach',typeOfWork:"Personal Project",galleryUrl:"https://flic.kr/p/2kQfyJH",image:"/assets/images/projects/designProjects/bowsette.jpg",key:0}],U=function(e,t){var s=e.filter((function(e){return e.typeOfWork&&t.includes(e.typeOfWork)})),a=e.filter((function(e){return e.tools&&e.tools.some((function(e){return t.includes(e)}))}));return s.length>0?s:a},S=function(){var e=Object(h.c)((function(e){return e.devMode})),t=Object(h.c)((function(e){return e.activeFilters}));return Object(p.jsxs)("section",{className:"projects page",id:"projects",children:[Object(p.jsx)("h1",{children:"Projects"}),Object(p.jsx)(v,{filters:e?function(){var e=[];return P.forEach((function(t){t.tools.forEach((function(t){e.includes(t)||e.push(t)}))})),e}():function(){var e=[];return M.forEach((function(t){var s=t.typeOfWork;e.includes(s)||e.push(s)})),e}()}),Object(p.jsx)("div",{className:e?"projects-container":"hide",children:function(){var e=P.map((function(e){return e}));return t.length>0&&(e=U(e,t)),e.map((function(e){return Object(p.jsx)(w,{project:e},e.key)}))}()}),Object(p.jsx)("div",{className:e?"hide":"projects-container",children:function(){var e=M.map((function(e){return e}));return t.length>0&&(e=U(e,t)),e.map((function(e){return Object(p.jsx)(N,{project:e},e.key)}))}()})]})},T=function(){var e=Object(h.c)((function(e){return e.devMode}));return Object(p.jsxs)("section",{className:e?"contact page dev":"contact page des",id:"contact",children:[Object(p.jsxs)("div",{className:"social-text-container",children:[Object(p.jsx)("h1",{children:"Contact Me"}),Object(p.jsx)("h3",{children:"Don't be a stranger!"}),Object(p.jsxs)("p",{children:["If you have any questions or just want to say hi,",Object(p.jsx)("br",{})," shoot me an email. ",Object(p.jsx)("br",{})," I'd love to hear from you!"]})]}),Object(p.jsxs)("div",{className:"social-links-container",children:[Object(p.jsx)("a",{className:"social-item linkedin",href:"https://www.linkedin.com/in/nneka-tielman/",target:"_blank",rel:"noreferrer noopener",onMouseOver:function(){console.log("link getting hovered")},children:Object(p.jsx)("i",{onMouseOver:function(){console.log("icon getting hovered")},className:"fab fa-linkedin social-icon"})}),Object(p.jsx)("a",{className:e?"social-item github":"hide",href:"https://github.com/NTielman",target:"_blank",rel:"noreferrer noopener",children:Object(p.jsx)("i",{className:"fab fa-github-square social-icon"})}),Object(p.jsx)("a",{className:e?"hide":"social-item instagram",href:"https://www.instagram.com/unsuprvsd/?hl=en",target:"_blank",rel:"noreferrer noopener",children:Object(p.jsx)("i",{className:"fab fa-instagram social-icon"})}),Object(p.jsx)("a",{href:"https://wa.me/31619168997",target:"_blank",rel:"noreferrer noopener",className:"social-item whatsapp",children:Object(p.jsx)("i",{className:"fab fa-whatsapp-square social-icon"})}),Object(p.jsx)("a",{href:"mailto:khalienne@gmail.com",className:"social-item gmail",children:Object(p.jsx)("i",{className:"fas fa-envelope-square social-icon"})})]})]})};var E=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{}),Object(p.jsx)(g,{}),Object(p.jsx)(x,{}),Object(p.jsx)(k,{}),Object(p.jsx)(S,{}),Object(p.jsx)(T,{})]})},C=Object(o.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h.a,{store:C,children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f821ca98.chunk.js.map