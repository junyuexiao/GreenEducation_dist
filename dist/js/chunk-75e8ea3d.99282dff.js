(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e8ea3d"],{1656:function(t,e,s){"use strict";s("9858")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var n=s("1d80"),i=s("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),c=function(t){return function(e){var s=String(n(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var n=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==s&&n(o=a.prototype)&&o!==s.prototype&&i(t,o),t}},9858:function(t,e,s){},a9e3:function(t,e,s){"use strict";var n=s("83ab"),i=s("da84"),a=s("94ca"),o=s("6eeb"),r=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),f=s("d039"),d=s("7c73"),g=s("241c").f,p=s("06cf").f,v=s("9bf2").f,h=s("58a8").trim,m="Number",x=i[m],b=x.prototype,_=c(d(b))==m,k=function(t){var e,s,n,i,a,o,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+l}for(a=l.slice(2),o=a.length,r=0;r<o;r++)if(c=a.charCodeAt(r),c<48||c>i)return NaN;return parseInt(a,n)}return+l};if(a(m,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,I=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof I&&(_?f((function(){b.valueOf.call(s)})):c(s)!=m)?l(new x(k(e)),s,I):k(e)},C=n?g(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)r(x,N=C[w])&&!r(I,N)&&v(I,N,p(x,N));I.prototype=b,b.constructor=I,o(i,m,I)}},d280:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"gameapp"}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"game-content"},t._l(t.checkpointlist,(function(e,n){return s("div",{key:n,staticClass:"checkpoint",class:{islock:e.id>t.lockflag},style:{transform:e.id<=3?"translateX("+100*e.id+"px) translateY("+e.id+"px)":"translateX("+100*e.id+"px) translateY(-"+130*e.id+"px)"},on:{click:function(s){return t.toPuzzles(e.id)}}},[e.id<=t.lockflag?s("span",{staticClass:"point_title"},[t._v(t._s(e.id))]):t._e(),e.id>t.lockflag?s("span",{staticClass:"point_title"},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","lock"]}})],1):t._e()])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.boxflag,expression:"boxflag"}],staticClass:"msg-content"},[s("div",{staticClass:"msg"},[s("div",{staticClass:"title"},[t._v("This level is locked")]),s("div",{staticClass:"content"},[t._v("Please pass the perivous level to unlock more level")]),s("div",{staticClass:"btn",on:{click:t.msgBox}},[t._v("Confirm "),s("span",[t._v("→")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.boxflags,expression:"boxflags"}],staticClass:"msg-content"},[s("div",{staticClass:"msg"},[s("div",{staticClass:"title"},[t._v("Sign in")]),s("div",{staticClass:"content"},[t._v("You need sign in to start your game. ")]),s("div",{staticClass:"btn",on:{click:function(e){return t.Tologin()}}},[t._v("confirm "),s("span",[t._v("→")])])])])])])},i=[],a=(s("a9e3"),s("96cf"),s("1da1")),o={name:"Game",data:function(){return{checkpointlist:[{id:"01"},{id:"02"},{id:"03"},{id:"04"}],lockflag:Number(sessionStorage.getItem("lockflagvalue")),boxflag:!1,itemNum:4,boxflags:!1}},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{toPuzzles:function(t){console.log(sessionStorage.getItem("userinfo").length,"lemgtj"),sessionStorage.getItem("userinfo").length<2?this.boxflags=!this.boxflags:t<=this.lockflag?this.$router.push("/index/puzzles?id=".concat(t)):this.boxflag=!this.boxflag},Tologin:function(){this.$router.push("/index/login")},msgBox:function(){this.boxflag=!this.boxflag}}},r=o,c=(s("1656"),s("2877")),l=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-75e8ea3d.99282dff.js.map