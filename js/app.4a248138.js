(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-265cc804":"2579b9a8","chunk-2d212f57":"241797a2","chunk-2d22188d":"40ac05d2","chunk-2d22205f":"f88e96ad","chunk-0ab6b84e":"c54d8f75","chunk-2713d34c":"8e6e1b2c","chunk-32657764":"496c954c","chunk-4f235d0b":"89c5e8f3","chunk-5b6d2218":"f5919664","chunk-5d967075":"2f7e6465","chunk-75e8ea3d":"a788bbbf"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-265cc804":1,"chunk-0ab6b84e":1,"chunk-2713d34c":1,"chunk-32657764":1,"chunk-4f235d0b":1,"chunk-5b6d2218":1,"chunk-5d967075":1,"chunk-75e8ea3d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-265cc804":"5a385e34","chunk-2d212f57":"31d6cfe0","chunk-2d22188d":"31d6cfe0","chunk-2d22205f":"31d6cfe0","chunk-0ab6b84e":"0a91a52a","chunk-2713d34c":"bff4c09d","chunk-32657764":"edb3f31f","chunk-4f235d0b":"0cf5eee4","chunk-5b6d2218":"c0d9235d","chunk-5d967075":"7101d82c","chunk-75e8ea3d":"54dc6450"}[e]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],h.parentNode.removeChild(h),n(r)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"mx-auto"},[n("v-skeleton-loader",{attrs:{type:"list-item-avatar, divider, list-item-three-line, card-heading, image, actions"}})],1),n("transition",{attrs:{name:e.direction}},[n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"appView"})],1)],1)},i=[],r=(n("ac1f"),n("1276"),n("96cf"),n("1da1")),c={name:"App",data:function(){return{loading:!0,show:!1,direction:"slide-right"}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,setTimeout((function(){e.loading=!e.loading,e.show=!e.show}),2e3);case 2:sessionStorage.setItem("lockflagvalue",JSON.stringify(1)),sessionStorage.setItem("userinfo",JSON.stringify(1));case 4:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;"/"==e.path?this.direction="slide-right":"/"==t.path?this.direction="slide-left":this.direction=n<a?"slide-right":"slide-left"}}},s=c,u=(n("7c55"),n("2877")),l=Object(u["a"])(s,o,i,!1,null,null,null),d=l.exports,h=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Controler")},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-header_container"},[n("div",{staticClass:"index-header_nav"},[n("span",{staticClass:"index-header-logo_img"}),n("span",{staticClass:"index-header-logo_text"},[e._v("GRENN EDUCTION")]),n("ul",{staticClass:"index-header_control"},e._l(e.tabbars,(function(t,a){return n("li",{key:a,on:{click:function(n){return e.tab(a,t.path)}}},[n("font-awesome-icon",{staticClass:"index-control_container_aside_li_icon",attrs:{icon:t.icon}}),e._v(" "+e._s(t.name)+" ")],1)})),0),n("div",{staticClass:"index-header_icon"},[n("a",{staticClass:"span",attrs:{href:"https://www.google.com.au",target:"_blank"}},[n("font-awesome-icon",{staticClass:"index-control_container_aside_li_icon",attrs:{icon:["fas","search"]}})],1),n("span",{staticClass:"span",on:{click:e.toUser}},[n("font-awesome-icon",{staticClass:"index-control_container_aside_li_icon",attrs:{icon:["fas","user"]}})],1)]),e.fs?n("div",{staticClass:"topsy"},[n("div",{on:{click:function(t){return e.alertmessage()}}}),n("div",{on:{click:function(t){return e.alertmessages()}}})]):e._e()]),n("div",{staticClass:"index-header_menu"},[n("button",{staticClass:"index-header_btn",class:{open:e.isToggle},on:{click:function(t){return e.toggle()}}},[n("span"),n("span"),n("span")])]),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isToggle,expression:"isToggle"}],staticClass:"index-header_menuList",attrs:{transiton:"fade"}},[n("div",{staticClass:"index-header_subtitle"},[e._v(" Grenn Education ")]),n("ul",[e._l(e.tabbars,(function(t,a){return n("li",{key:a,staticClass:"li",on:{click:function(n){return e.tab(a,t.path)}}},[n("font-awesome-icon",{staticClass:"index-header_mobile-icon",attrs:{icon:t.icon}}),e._v(" "+e._s(t.name)+" ")],1)})),n("li",{staticClass:"li",on:{click:e.toUser}},[n("font-awesome-icon",{staticClass:"index-header_mobile-icon",attrs:{icon:["fas","user"]}}),e._v(" Account ")],1),n("a",{staticClass:"li",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.google.com.au",target:"_blank"}},[n("font-awesome-icon",{staticClass:"index-header_mobile-icon",attrs:{icon:["fas","search"]}}),e._v(" Search ")],1)],2)])]),n("div",{staticClass:"main"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)},g=[],b={name:"Controler",data:function(){return{tabbars:[{name:"Home",path:"/index/home",icon:["fas","home"]},{name:"Game",path:"/index/game",icon:["fas","gamepad"]},{name:"Puzzle",path:"/index/puzzle",icon:["fas","puzzle-piece"]},{name:"About us",path:"/index/aboutus",icon:["fas","info-circle"]}],isToggle:!1,fs:!1}},methods:{toggle:function(){this.isToggle=!this.isToggle},tab:function(e,t){this.current=e,t!=this.$route.path&&(this.$router.push(t),this.toggle())},toUser:function(){var e;e=sessionStorage.getItem("userinfo").length>2?"/index/userhome":"/index/login",e!=this.$route.path&&(this.$router.push(e),this.toggle())},toSearch:function(){var e="/index/search";e!=this.$route.path&&(this.$router.push(e),this.toggle())},alertmessage:function(){this.$router.push({path:"/index/userhome"}),this.fs=!1},alertmessages:function(){this.fs=!1}},watch:{$route:function(){this.userId=this.$route.query.ids,console.log("11111",this.userId),void 0!=this.userId&&(this.fs=!0)}}},v=b,k=(n("7fd3"),Object(u["a"])(v,m,g,!1,null,null,null)),w=k.exports,_={name:"Index",components:{Controler:w}},x=_,C=Object(u["a"])(x,f,p,!1,null,null,null),y=C.exports,S=function(){return Promise.all([n.e("chunk-2d22205f"),n.e("chunk-0ab6b84e")]).then(n.bind(null,"1c62"))},V=function(){return n.e("chunk-75e8ea3d").then(n.bind(null,"d280"))},A=function(){return n.e("chunk-4f235d0b").then(n.bind(null,"0ef4"))},O=function(){return Promise.all([n.e("chunk-2d22205f"),n.e("chunk-2713d34c")]).then(n.bind(null,"d88a"))},T=function(){return n.e("chunk-5d967075").then(n.bind(null,"1f64"))},$=function(){return n.e("chunk-5b6d2218").then(n.bind(null,"7101"))},j=function(){return n.e("chunk-2d212f57").then(n.bind(null,"ab44"))},E=function(){return n.e("chunk-2d22188d").then(n.bind(null,"cb80"))},N=function(){return n.e("chunk-32657764").then(n.bind(null,"a21a"))},P=function(){return n.e("chunk-265cc804").then(n.bind(null,"a08e"))};a["default"].use(h["a"]);var z=[{path:"/",redirect:"/index"},{path:"/index",component:y,children:[{path:"/index",redirect:"/index/home",meta:{keepAlive:!0}},{path:"home",component:S,meta:{keepAlive:!0}},{path:"game",component:V},{path:"puzzles",component:A},{path:"puzzle",component:O,meta:{keepAlive:!0}},{path:"aboutus",component:T,meta:{keepAlive:!0}},{path:"login",component:$,meta:{keepAlive:!0}},{path:"sign",component:j,meta:{keepAlive:!0}},{path:"search",component:E,meta:{keepAlive:!0}},{path:"userhome",component:N},{path:"puzzleintro",component:P}]}],I=h["a"].prototype.push;h["a"].prototype.push=function(e){return I.call(this,e).catch((function(e){return e}))};var L=new h["a"]({routes:z}),R=L,q=n("2f62");a["default"].use(q["a"]);var G=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=(n("fa6d"),n("ecee")),B=n("c074"),J=n("b702"),M=n("f2d1"),D=n("ad3d");U["c"].add(B["a"],J["a"],M["a"]),a["default"].component("font-awesome-icon",D["a"]),a["default"].component("font-awesome-layers",D["b"]),a["default"].component("font-awesome-layers-text",D["c"]);n("bf40");var F=n("5607"),H=n("f309"),K=n("7496"),Q=n("8336"),W=n("4bd4"),X=n("8654"),Y=n("b974"),Z=n("ac7c"),ee=n("b0af"),te=n("71d9"),ne=n("a523"),ae=n("0fd9"),oe=n("62ad"),ie=n("3129"),re=n("67b6"),ce=n("43a6"),se=n("e516"),ue=n("56a4"),le=n("7e85"),de=n("9c54"),he=n("132d");a["default"].use(H["a"],{components:{VApp:K["a"],VBtn:Q["a"],VForm:W["a"],VTextField:X["a"],VSelect:Y["a"],VCheckbox:Z["a"],VCard:ee["a"],VToolbar:te["a"],VContainer:ne["a"],VRow:ae["a"],VCol:oe["a"],VSkeletonLoader:ie["a"],VRadio:re["a"],VRadioGroup:ce["a"],VStepperContent:se["a"],VStepperStep:ue["a"],VStepper:le["a"],VStepperHeader:de["a"],VStepperItems:de["b"],VIcon:he["a"]},directives:{Ripple:F["a"]}});var fe=new H["a"],pe={question:"/GreenEducation_dist/static/quesion.json",url:window.location.origin+window.location.pathname},me=pe,ge=n("bc3a"),be=n.n(ge),ve=n("76a0");a["default"].prototype.localConfig=me,a["default"].prototype.$http=be.a,a["default"].component(ve["Checklist"].name,ve["Checklist"]),a["default"].component(ve["Radio"].name,ve["Radio"]),a["default"].component(ve["Loadmore"].name,ve["Loadmore"]),a["default"].component(ve["Spinner"].name,ve["Spinner"]),a["default"].component(ve["Checklist"].name,ve["Checklist"]),a["default"].component(ve["Cell"].name,ve["Cell"]),a["default"].config.productionTip=!1,new a["default"]({Vuetify:fe,router:R,store:G,render:function(e){return e(d)}}).$mount("#app")},"6c6d":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},"7fd3":function(e,t,n){"use strict";n("6c6d")}});
//# sourceMappingURL=app.4a248138.js.map