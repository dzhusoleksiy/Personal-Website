function initMobile(){console.log("is-mobile")}function initTablet(){console.log("is-tablet")}function initDesktop(){console.log("is-desktop")}function handleNavigation(){const e=document.querySelectorAll(".header__nav-item"),t=document.querySelector(".header__active-nav-item");let i=document.querySelector(".header__nav-item.active");function n(){const e=i.offsetLeft,n=i.offsetWidth;t.style.transform=`translateX(${e}px)`,t.style.width=`${n}px`}e.forEach((function(e){e.addEventListener("click",(function(){i.classList.remove("active"),this.classList.add("active"),i=this,n()}))})),window.addEventListener("resize",(function(){n()})),n()}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ssm=t()}(this,(function(){"use strict";function e(e,t){e.forEach((function(e){return e(t)}))}var t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),n=[],o=function(){},s=function(){function s(e){if(t(this,s),this.id=e.id||Math.random().toString(36).substr(2,9),this.query=e.query||"all",this.options=Object.assign({},{onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},e),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once"))return this.valid=!1,!1;this.valid=!0,this.active=!1,this.init()}return i(s,[{key:"init",value:function(){var e=this;this.test=window.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(t){var i=!1;t.matches?e.testConfigOptions("match")&&(e.enterState(),i=!0):(e.leaveState(),i=!0),i&&o()},this.test.addListener(this.listener)}},{key:"enterState",value:function(){e(this.options.onFirstRun,this.eventData("firstRun")),e(this.options.onEnter,this.eventData("enter")),this.options.onFirstRun=[],this.active=!0}},{key:"leaveState",value:function(){e(this.options.onLeave,this.eventData("leave")),this.active=!1}},{key:"resizeState",value:function(){this.testConfigOptions("resize")&&e(this.options.onResize,this.eventData("resize"))}},{key:"destroy",value:function(){this.test.removeListener(this.listener)}},{key:"attachCallback",value:function(e,t,i){switch(e){case"enter":this.options.onEnter.push(t);break;case"leave":this.options.onLeave.push(t);break;case"resize":this.options.onResize.push(t)}"enter"===e&&i&&this.active&&t(this.eventData(e))}},{key:"testConfigOptions",value:function(e){var t=this,i=!0;return n.forEach((function(n){void 0!==t.options[n.name]&&n.when===e&&!1===n.test.bind(t)()&&(i=!1)})),i}},{key:"eventData",value:function(e){return{eventType:e,state:this}}}],[{key:"addConfigOption",value:function(e){n.push(e)}},{key:"getConfigOptions",value:function(){return n}},{key:"removeConfigOption",value:function(e){n.forEach((function(t,i){t.name===e&&n.splice(i,1)}))}},{key:"setStateChangeMethod",value:function(e){if("function"!=typeof e)throw new Error("Not a function");o=e}}]),s}();return new(function(){function e(){t(this,e),this.states=[],this.resizeTimer=null,this.configOptions=[],window.addEventListener("resize",function(e){var t=this,i=void 0;return function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];i&&window.cancelAnimationFrame(i),i=window.requestAnimationFrame((function(){i=null,e.apply(t,o)}))}}(this.resizeBrowser.bind(this)),!0)}return i(e,[{key:"addState",value:function(e){var t=new s(e);return t.valid&&this.states.push(t),t}},{key:"addStates",value:function(e){var t=this;e.forEach((function(e){return t.addState(e)}))}},{key:"getState",value:function(e){return this.states.filter((function(t){return t.id===e}))[0]||!1}},{key:"isActive",value:function(e){return(this.getState(e)||{}).active||!1}},{key:"getStates",value:function(e){var t=this;return void 0===e?this.states:e.map((function(e){return t.getState(e)}))}},{key:"removeState",value:function(e){var t=this;this.states.forEach((function(i,n){i.id===e&&(i.destroy(),t.states.splice(n,1))}))}},{key:"removeStates",value:function(e){var t=this;e.forEach((function(e){return t.removeState(e)}))}},{key:"removeAllStates",value:function(){this.states.forEach((function(e){return e.destroy()})),this.states=[]}},{key:"addConfigOption",value:function(e){var t=e.name,i=void 0===t?"":t,n=e.test,o=void 0===n?null:n,r=e.when,a=void 0===r?"resize":r;""!==i&&null!==o&&s.addConfigOption({name:i,test:o,when:a})}},{key:"removeConfigOption",value:function(e){s.removeConfigOption(e)}},{key:"getConfigOptions",value:function(e){var t=s.getConfigOptions();return"string"==typeof e?t.filter((function(t){return t.name===e})):t}},{key:"resizeBrowser",value:function(){var e,t;(e=this.states,t="active",e.filter((function(e){return e[t]&&!0===e[t]}))).forEach((function(e){e.resizeState()}))}},{key:"stateChange",value:function(e){s.setStateChangeMethod(e)}}]),e}())})),ssm.addStates([{id:"mobile",query:"(max-width: 640px)",onEnter:function(){initMobile()}},{id:"tablet",query:"(min-width: 641px) and (max-width: 992px)",onEnter:function(){initTablet()}},{id:"desktop",query:"(min-width: 993px)",onEnter:function(){initDesktop()}}]),handleNavigation();const grid=document.querySelector(".grid"),personal=document.querySelector(".grid__element_personal"),cv=document.querySelector(".grid__element_cv"),gallery=document.querySelector(".grid__element_gallery"),skills=document.querySelector(".grid__element_skills"),electon=document.querySelector(".grid__element_electon"),filmCatalog=document.querySelector(".grid__element_film-catalog"),paymentForm=document.querySelector(".grid__element_payment-form"),taskList=document.querySelector(".grid__element_task-list"),personalWebsite=document.querySelector(".grid__element_personal-website"),announcement=document.querySelector(".grid__element_announcement"),linkedin=document.querySelector(".grid__element_linkedin"),github=document.querySelector(".grid__element_github"),telegram=document.querySelector(".grid__element_telegram"),everything=document.querySelector(".header__nav-item_everything");everything.addEventListener("click",(function(){grid.classList.remove("grid-projects"),grid.classList.remove("grid-contact"),personal.classList.remove("dimmed"),cv.classList.remove("dimmed"),gallery.classList.remove("dimmed"),skills.classList.remove("dimmed"),electon.classList.remove("dimmed"),filmCatalog.classList.remove("dimmed"),paymentForm.classList.remove("dimmed"),taskList.classList.remove("dimmed"),personalWebsite.classList.remove("dimmed"),announcement.classList.remove("dimmed"),linkedin.classList.remove("dimmed"),github.classList.remove("dimmed"),telegram.classList.remove("dimmed")}));const projects=document.querySelector(".header__nav-item_projects");projects.addEventListener("click",(function(){grid.classList.remove("grid-contact"),grid.classList.add("grid-projects"),personal.classList.add("dimmed"),cv.classList.add("dimmed"),gallery.classList.add("dimmed"),skills.classList.remove("dimmed"),electon.classList.remove("dimmed"),filmCatalog.classList.remove("dimmed"),paymentForm.classList.remove("dimmed"),taskList.classList.remove("dimmed"),personalWebsite.classList.remove("dimmed"),announcement.classList.remove("dimmed"),linkedin.classList.add("dimmed"),github.classList.add("dimmed"),telegram.classList.add("dimmed")}));const contact=document.querySelector(".header__nav-item_contact");contact.addEventListener("click",(function(){grid.classList.add("grid-contact"),grid.classList.remove("grid-projects"),personal.classList.add("dimmed"),cv.classList.add("dimmed"),gallery.classList.add("dimmed"),skills.classList.add("dimmed"),electon.classList.add("dimmed"),filmCatalog.classList.add("dimmed"),paymentForm.classList.add("dimmed"),taskList.classList.add("dimmed"),personalWebsite.classList.add("dimmed"),announcement.classList.add("dimmed"),linkedin.classList.remove("dimmed"),github.classList.remove("dimmed"),telegram.classList.remove("dimmed")}));const slides=document.querySelectorAll(".grid__slide"),buttonLeft=document.querySelector(".grid__slider-btn_left"),buttonRight=document.querySelector(".grid__slider-btn_right"),dotContainer=document.querySelector(".grid__slider-dots");let currentSlide=0;const maxSlide=slides.length,createDots=function(){slides.forEach((function(e,t){dotContainer.insertAdjacentHTML("beforeend",`<button  class="grid__slider-dot" data-slide="${t}" aria-label="photo-${t+1}"></button>`)}))},activeDot=function(e){document.querySelectorAll(".grid__slider-dot").forEach((e=>e.classList.remove("grid__slider-dot_active"))),document.querySelector(`.grid__slider-dot[data-slide="${e}"]`).classList.add("grid__slider-dot_active")},goToSlide=function(e){slides.forEach(((t,i)=>t.style.transform=`translateX(${100*(i-e)}%)`))},nextSlide=function(){currentSlide===maxSlide-1?currentSlide=0:currentSlide++,goToSlide(currentSlide),activeDot(currentSlide)},previousSlide=function(){0===currentSlide?currentSlide=maxSlide-1:currentSlide--,goToSlide(currentSlide),activeDot(currentSlide)},init=function(){goToSlide(0),slides.forEach((function(e,t){dotContainer.insertAdjacentHTML("beforeend",`<button  class="grid__slider-dot" data-slide="${t}" aria-label="photo-${t+1}"></button>`)})),activeDot(0)};function confirmVisit(e){return!!confirm("It's that part of my website-portfolio where I let some bits of my personality slip in. I really like this album. Do you want to visit the Spotify page of "+e+", though?")||(event.preventDefault(),!1)}goToSlide(0),slides.forEach((function(e,t){dotContainer.insertAdjacentHTML("beforeend",`<button  class="grid__slider-dot" data-slide="${t}" aria-label="photo-${t+1}"></button>`)})),activeDot(0),buttonLeft.addEventListener("click",previousSlide),buttonRight.addEventListener("click",nextSlide),dotContainer.addEventListener("click",(function(e){e.target.classList.contains("grid__slider-dot")&&(currentSlide=Number(e.target.dataset.slide),goToSlide(currentSlide),activeDot(currentSlide))})),window.addEventListener("load",(function(){navigator.userAgent.match(/chrome|chromium|crios/i)&&document.documentElement.classList.add("scrollbar")}));