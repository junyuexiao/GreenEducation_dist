(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e8ea3d"],{1656:function(t,e,i){"use strict";i("9858")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),n=i("5899"),a="["+n+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),r=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},7156:function(t,e,i){var s=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==i&&s(o=a.prototype)&&o!==i.prototype&&n(t,o),t}},9858:function(t,e,i){},a9e3:function(t,e,i){"use strict";var s=i("83ab"),n=i("da84"),a=i("94ca"),o=i("6eeb"),c=i("5135"),r=i("c6b6"),l=i("7156"),u=i("c04e"),f=i("d039"),d=i("7c73"),g=i("241c").f,m=i("06cf").f,p=i("9bf2").f,v=i("58a8").trim,h="Number",b=n[h],x=b.prototype,k=r(d(x))==h,_=function(t){var e,i,s,n,a,o,c,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+l}for(a=l.slice(2),o=a.length,c=0;c<o;c++)if(r=a.charCodeAt(c),r<48||r>n)return NaN;return parseInt(a,s)}return+l};if(a(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var N,C=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof C&&(k?f((function(){x.valueOf.call(i)})):r(i)!=h)?l(new b(_(e)),i,C):_(e)},I=s?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)c(b,N=I[w])&&!c(C,N)&&p(C,N,m(b,N));C.prototype=x,x.constructor=C,o(n,h,C)}},d280:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"gameapp"}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"game-content"},t._l(t.checkpointlist,(function(e,s){return i("div",{key:s,staticClass:"game-contents"},[i("div",{staticClass:"checkpoint",class:{islock:e.id>t.lockflag},on:{click:function(i){return t.toPuzzles(e.id)}}},[e.id<=t.lockflag?i("span",{staticClass:"point_title"},[t._v(t._s(e.tiem))]):t._e(),e.id>t.lockflag?i("span",{staticClass:"point_title"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","lock"]}})],1):t._e()])])})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.boxflag,expression:"boxflag"}],staticClass:"msg-content"},[i("div",{staticClass:"msg"},[i("div",{staticClass:"title"},[t._v("This level is locked")]),i("div",{staticClass:"content"},[t._v("Please pass the perivous level to unlock more level")]),i("div",{staticClass:"btn",on:{click:t.msgBox}},[t._v("Confirm "),i("span",[t._v("→")])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.boxflags,expression:"boxflags"}],staticClass:"msg-content"},[i("div",{staticClass:"msg"},[i("div",{staticClass:"title"},[t._v("Sign in")]),i("div",{staticClass:"content"},[t._v("You need sign in to start your game. ")]),i("div",{staticClass:"btn",on:{click:function(e){return t.Tologin()}}},[t._v("confirm "),i("span",[t._v("→")])])])])])])},n=[],a=(i("a9e3"),i("96cf"),i("1da1")),o={name:"Game",data:function(){return{checkpointlist:[{id:"01",tiem:1},{id:"03",tiem:2},{id:"05",tiem:3},{id:"08",tiem:4},{id:"08",tiem:5},{id:"08",tiem:6},{id:"08",tiem:7},{id:"08",tiem:8},{id:"09",tiem:9},{id:"10",tiem:10},{id:"11",tiem:11},{id:"12",tiem:12}],lockflag:Number(sessionStorage.getItem("lockflagvalue")),boxflag:!1,itemNum:4,boxflags:!1}},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{toPuzzles:function(t){console.log(sessionStorage.getItem("userinfo").length,"lemgtj"),sessionStorage.getItem("userinfo").length<2?this.boxflags=!this.boxflags:(this.lockflag>4&&(this.lockflag=4),t<=this.lockflag?this.$router.push("/index/puzzles?id=".concat(t)):this.boxflag=!this.boxflag)},Tologin:function(){this.$router.push("/index/login")},msgBox:function(){this.boxflag=!this.boxflag}}},c=o,r=(i("1656"),i("2877")),l=Object(r["a"])(c,s,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-75e8ea3d.726fdbaa.js.map