(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10,11,14],{1172:function(t,e,r){"use strict";r.r(e);r(110),r(43),r(45),r(15),r(87),r(33),r(88);var n=r(34),o=r(10),d=(r(60),r(304),r(47),r(50),r(147),r(378)),l=r(333),c=r(297),f=r.n(c),m=r(337),h=r(379);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(t,e){for(var r,i,n=t.length;n;)i=Math.floor(y(e)*n--),r=t[n],t[n]=t[i],t[i]=r,++e}function y(t){var e=1e4*Math.sin(t++);return e-Math.floor(e)}var k,_={components:{comment:d.a,stars:l.a,EarthLink:h.a},head:{meta:[{name:"theme-color",content:"black"}]},data:function(){return{sortedPages:Array(130).fill({title:"",desc:"",avg:0,page:"",numRatings:0}),pages:{},latestComments:[]}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},created:(k=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(m.a,"/getPages"),{}).then();case 2:e=t.sent,this.pages=e.data,this.sortedPages=Object.keys(this.pages).map((function(t){return x({},r.pages[t])})),w(this.sortedPages,localStorage.getItem("er-seed")||Math.random());case 6:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)}),methods:{onScroll:function(){var t=window.innerWidth<600?35:45,e=Math.max(t-window.scrollY/5,0);this.$refs.grid.style="background-size: 100% ".concat(e,"px")}},beforeRouteEnter:function(t,e,r){e.path.startsWith("/earth-reviews")||localStorage.setItem("er-seed",Math.random()),r()}},C=_,S=(r(936),r(28)),component=Object(S.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"site-link",attrs:{to:"/"}},[e("logo",{attrs:{color:"white"}})],1),t._v(" "),e("div",{staticClass:"container-inner"},[e("img",{staticClass:"title",attrs:{src:"/earth-reviews/title.svg"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{ref:"grid",staticClass:"grid"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"pages"},t._l(t.sortedPages,(function(t,i){return e("earth-link",{key:"".concat(i,"-").concat(t.page),attrs:{page:t}})})),1)])]),t._v(" "),e("Footer",{attrs:{bg:"none",color:"white"}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tagline"},[e("img",{staticClass:"tagline-alert",attrs:{src:"/earth-reviews/alert.svg"}}),t._v("It turns\n        out "),e("b",[t._v("Earth")]),t._v(" is just a "),e("br",{staticClass:"mobile-only"}),e("i",[t._v("simulation")]),t._v(". Luckily, the creators are looking for feedback.\n      ")])}],!1,null,"239cf979",null);e.default=component.exports;installComponents(component,{Logo:r(288).default,Footer:r(295).default})},276:function(t,e,r){"use strict";var n=r(2),o=r(19),d=r(9),l=r(6),path=r(203),c=r(4),f=r(109),m=r(12),h=r(201),v=r(39),x=r(81),w=r(202),y=r(3),k=r(80).f,_=r(29).f,C=r(21).f,S=r(281),z=r(282).trim,j="Number",O=l[j],A=path[j],E=O.prototype,I=l.TypeError,M=c("".slice),N=c("".charCodeAt),R=function(t){var e=w(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,n,o,d,l,c,code,f=w(t,"number");if(x(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=z(f),43===(e=N(f,0))||45===e){if(88===(r=N(f,2))||120===r)return NaN}else if(48===e){switch(N(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(d=M(f,2)).length,c=0;c<l;c++)if((code=N(d,c))<48||code>o)return NaN;return parseInt(d,n)}return+f},P=f(j,!O(" 0o1")||!O("0b1")||O("+0x1")),W=function(t){return v(E,t)&&y((function(){S(t)}))},$=function(t){var e=arguments.length<1?0:O(R(t));return W(this)?h(Object(e),this,$):e};$.prototype=E,P&&!o&&(E.constructor=$),n({global:!0,constructor:!0,wrap:!0,forced:P},{Number:$});var F=function(t,source){for(var e,r=d?k(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0;r.length>n;n++)m(source,e=r[n])&&!m(t,e)&&C(t,e,_(source,e))};o&&A&&F(path[j],A),(P||o)&&F(path[j],O)},277:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("f68e4eaa",content,!0,{sourceMap:!1})},278:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("db35a8f0",content,!0,{sourceMap:!1})},279:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("c9434642",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r.r(e);r(276);var n={props:{slotId:{type:String,required:!0},adFormat:{type:String,required:!0},isResponsive:{type:Boolean,required:!1,default:!1},adStyle:{type:String,required:!0},minWidth:{type:Number,required:!1,default:-1},maxWidth:{type:Number,required:!1,default:-1}},data:function(){return{hideAd:!1,shouldShow:this.shouldShowAd()}},mounted:function(){var t=this;this.createAds(),this.$addEventListener("resize",(function(){t.hideAd=!t.shouldShowAd()}))},watch:{$route:function(){this.firstLoad=!1,this.createAds()}},methods:{createAds:function(){var t=this;this.$nextTick((function(){t.shouldShowAd()&&(window.adsbygoogle=window.adsbygoogle||[],adsbygoogle.push({}))}))},shouldShowAd:function(){return(-1===this.minWidth||window.innerWidth>=this.minWidth)&&(-1===this.maxWidth||window.innerWidth<this.maxWidth)}},beforeDestroy:function(){window.top.__vm_remove=window.top.__vm_remove||[],window.top.__vm_remove.push(this.$refs.adPlacement)}},o=(r(284),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[t.shouldShow?e("ins",{staticClass:"adsbygoogle",class:{hide:t.hideAd},style:t.adStyle,attrs:{"data-ad-client":"ca-pub-4556406968269041","data-ad-slot":t.slotId,"data-ad-format":t.adFormat,"data-full-width-responsive":t.isResponsive}}):e("div")])}),[],!1,null,"8af1cc2e",null);e.default=component.exports},281:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},282:function(t,e,r){var n=r(4),o=r(24),d=r(13),l=r(283),c=n("".replace),f=RegExp("^["+l+"]+"),m=RegExp("(^|[^"+l+"])["+l+"]+$"),h=function(t){return function(e){var r=d(o(e));return 1&t&&(r=c(r,f,"")),2&t&&(r=c(r,m,"$1")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},283:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},284:function(t,e,r){"use strict";r(277)},285:function(t,e,r){var n=r(107)(!1);n.push([t.i,".hide[data-v-8af1cc2e]{display:none!important}",""]),t.exports=n},286:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(111);var o=r(137),d=r(82);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},287:function(t,e,r){t.exports=r.p+"fonts/RobotoCondensed-Light.f982e4a.woff2"},289:function(t,e,r){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!n.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},290:function(t,e,r){"use strict";r(278)},291:function(t,e,r){var n=r(107)(!1);n.push([t.i,".link{border-radius:19px;aspect-ratio:391/145;display:block;position:relative;z-index:2}.link-img{max-width:100%;cursor:pointer;transition:transform .07s linear,filter .1s ease-out,opacity .15s linear;opacity:0}.link-img:hover{transform:scale(1.02);filter:drop-shadow(3px 3px 5px rgba(0,0,0,.17))}",""]),t.exports=n},292:function(t,e,r){"use strict";r.r(e);var n={props:{title:{required:!0,type:String},path:{required:!0,type:String},preload:{required:!1,type:Boolean,default:!1}},data:function(){return{imageLoaded:!1}}},o=(r(290),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"link",style:{background:t.imageLoaded?"none":"#f1f2f6"},attrs:{prefetch:t.preload,to:"/".concat(t.path,"/")}},[e("img",{staticClass:"link-img",style:{opacity:t.imageLoaded?1:0},attrs:{onload:t.imageLoaded=!0,alt:t.title,src:"/link-images/".concat(t.path,".svg"),loading:"lazy"}})])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r(279)},294:function(t,e,r){var n=r(107),o=r(200),d=r(287),l=n(!1),c=o(d);l.push([t.i,"@font-face{font-family:RobotoCondensedLight;src:url("+c+")}.footer-wrapper[data-v-2b1aca38]{margin-top:15px;padding:30px 20px 45px;text-align:center;font-size:22px;font-family:RobotoCondensedLight,sans-serif}.related-text[data-v-2b1aca38]{font-size:22px}.site-title[data-v-2b1aca38]{margin-top:18px;max-width:140px}.related-posts[data-v-2b1aca38],.site-title[data-v-2b1aca38]{margin-left:auto;margin-right:auto}.related-posts[data-v-2b1aca38]{display:grid;max-width:870px;grid-template-columns:repeat(2,1fr);grid-gap:16px 18px;margin-top:15px;font-size:0}.made-by[data-v-2b1aca38]{font-size:16px;margin-top:15px;opacity:.6;display:none}.made-by a[data-v-2b1aca38]{color:#000}.heart[data-v-2b1aca38]{width:17px;height:17px;position:relative;top:4px}.site-title-logo[data-v-2b1aca38]{height:25px}.newsletter-text[data-v-2b1aca38]{font-size:19px;margin-bottom:8px}.newsletter-img[data-v-2b1aca38]{height:16px;position:relative;top:3px;margin-right:7px}.newsletter-input[data-v-2b1aca38]{font-size:17px;padding:7px 5px 7px 40px;border-radius:5px;border:1px solid #000;max-width:220px;width:100%;background-color:#fff;background-image:url(/general/mail.svg);background-repeat:no-repeat;background-size:auto 15px;background-position:10px;font-family:RobotoCondensedLight;outline:none;color:#000}.newsletter-input[data-v-2b1aca38]::-moz-placeholder{color:rgba(0,0,0,.8)}.newsletter-input[data-v-2b1aca38]::placeholder{color:rgba(0,0,0,.8)}.newsletter-subscribe[data-v-2b1aca38]{background:#fff5d9;font-size:17px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:1px solid #000;border-radius:5px;padding:7px 12px;margin-left:5px;height:100%;cursor:pointer;color:#000;font-family:RobotoCondensedLight}.newsletter-subscribe[data-v-2b1aca38]:hover{transform:scale(1.03)}.newsletter-box[data-v-2b1aca38]{padding:20px 10px;border-radius:5px;margin-left:auto;margin-right:auto;margin-top:10px}.newsletter-inner[data-v-2b1aca38]{display:flex;justify-content:center;height:42px}@media only screen and (max-width:700px){.footer-wrapper[data-v-2b1aca38]{padding-left:12px;padding-right:12px}.related-posts[data-v-2b1aca38]{grid-template-columns:repeat(1,1fr)}.site-title[data-v-2b1aca38]{max-width:145px;margin-top:25px}}",""]),t.exports=l},295:function(t,e,r){"use strict";r.r(e);var n,o=r(286),d=r(10),l=(r(45),r(15),r(204),r(60),r(297)),c=r.n(l),f=r(289),m={props:{color:{type:String,required:!1,default:"black"},bg:{type:String,required:!1,default:"white"}},data:function(){return{related:[],submittedEmail:!1,email:""}},mounted:function(){this.getRelated()},computed:{isValidEmail:function(){return f.validate(this.email)}},methods:{onEmailSubmit:(n=Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isValidEmail){t.next=4;break}return this.submittedEmail=!0,t.next=4,c()({url:"https://neal.fun/api/newsletter/subscribe",method:"POST",data:{email:this.email}});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),getRelated:function(){var t=window.innerWidth>500?4:3,e=Object(o.a)(this.$store.state.posts),r=this.$route.path;e=e.filter((function(t){return"/".concat(t.path,"/")!==r&&!t.hidden&&!t.hideInRecommended}));for(var n=[],d=0;d<t;d++){var l=Math.floor(Math.random()*e.length);n.push(e[l]),e.splice(l,1)}this.related=n}}},h=m,v=(r(293),r(28)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; max-width: min(970px, calc(100% - 60px)); margin-top: 15px;",adFormat:"auto",isResponsive:!0,minWidth:800}}),t._v(" "),e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; margin-top: 15px;",adFormat:"auto",isResponsive:!0,maxWidth:800}}),t._v(" "),e("div",{staticClass:"footer-wrapper",style:{color:t.color,background:t.bg}},[e("div",{staticClass:"related-text"},[t._v("You may also like")]),t._v(" "),e("div",{staticClass:"related-posts"},t._l(t.related,(function(t){return e("page-link",{key:t.title,attrs:{bg:"#f1f2f6",path:t.path,title:t.title,preload:t.preload}})})),1),t._v(" "),e("div",{staticClass:"newsletter-box"},[e("div",{staticClass:"newsletter-text"},[t._v("\n        "+t._s(t.submittedEmail?"Thanks for subscribing :)":"Get new posts!")+"\n      ")]),t._v(" "),t.submittedEmail?t._e():e("form",{staticClass:"newsletter-inner",on:{submit:function(e){return e.preventDefault(),t.onEmailSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"newsletter-input",attrs:{type:"email",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("button",{staticClass:"newsletter-subscribe"},[t._v("Subscribe")])])]),t._v(" "),e("div",{staticClass:"made-by"},[t._v("\n      Made with\n      "),e("svg",{staticClass:"heart",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.001 512","xml:space":"preserve"}},[e("g",[e("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",fill:t.color,"data-original":"#000000"}})])]),t._v("\n      by Neal Agarwal\n    ")]),t._v(" "),e("div",{staticClass:"site-title"},[e("nuxt-link",{attrs:{to:"/"}},[e("logo",{attrs:{color:t.color}})],1)],1)])],1)}),[],!1,null,"2b1aca38",null);e.default=component.exports;installComponents(component,{Ad:r(280).default,PageLink:r(292).default,Logo:r(288).default})},304:function(t,e,r){var n=r(2),o=r(305),d=r(113);n({target:"Array",proto:!0},{fill:o}),d("fill")},305:function(t,e,r){"use strict";var n=r(25),o=r(84),d=r(31);t.exports=function(t){for(var e=n(this),r=d(e),l=arguments.length,c=o(l>1?arguments[1]:void 0,r),f=l>2?arguments[2]:void 0,m=void 0===f?r:o(f,r);m>c;)e[c++]=t;return e}},333:function(t,e,r){"use strict";r(276);var n={props:{rating:{type:Number,required:!0}},computed:{width:function(){return Math.round(this.rating/5*100)}}},o=(r(362),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("img",{staticClass:"stars",attrs:{src:"/earth-reviews/stars.svg"}}),t._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"top-inner",style:{width:"".concat(Math.round(t.width),"%")}})])])}),[],!1,null,"388d7d13",null);e.a=component.exports},337:function(t,e,r){"use strict";e.a="https://earth-reviews-wi4zf.ondigitalocean.app"},343:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("20d2b514",content,!0,{sourceMap:!1})},344:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("3fc28e6a",content,!0,{sourceMap:!1})},345:function(t,e,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("262de74e",content,!0,{sourceMap:!1})},362:function(t,e,r){"use strict";r(343)},363:function(t,e,r){var n=r(107)(!1);n.push([t.i,".wrapper[data-v-388d7d13]{position:relative}.top[data-v-388d7d13]{-webkit-mask-image:url(/earth-reviews/stars.svg);mask-image:url(/earth-reviews/stars.svg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.top[data-v-388d7d13],.top-inner[data-v-388d7d13]{position:absolute;top:0;left:0;width:100%;height:100%}.top-inner[data-v-388d7d13]{background:#ffae00}.stars[data-v-388d7d13]{width:100%}",""]),t.exports=n},364:function(t,e,r){"use strict";r(344)},365:function(t,e,r){var n=r(107)(!1);n.push([t.i,".comment[data-v-5d6c855c]{padding:15px 23px 15px 19px;font-size:19px;width:100%;border:2px solid #fff;margin:20px auto;color:#fff;background:#000;max-width:550px}.from[data-v-5d6c855c]{opacity:.5;margin-bottom:8px;font-size:17px}.comment-bottom[data-v-5d6c855c]{display:flex;justify-content:space-between;margin-top:10px;font-size:18px}.stars[data-v-5d6c855c]{max-width:115px}.text[data-v-5d6c855c]{line-height:1.39em;white-space:pre-wrap}.on[data-v-5d6c855c]{position:absolute;top:25px;right:15px;font-size:16px}.from-icon[data-v-5d6c855c]{height:18px}.rating[data-v-5d6c855c]{width:107px}.heart[data-v-5d6c855c]{height:17px;position:relative;top:3px;cursor:pointer}.heart-liked[data-v-5d6c855c]{animation:heartbeat-5d6c855c .3s linear forwards}.heart-liked path[data-v-5d6c855c]{fill:#fff;transition:fill .3s linear}@keyframes heartbeat-5d6c855c{50%{transform:scale(1.18)}to{transform:scale(1)}}@media only screen and (max-width:600px){.comment[data-v-5d6c855c]{border:1px solid #fff;padding:12px 17px 11px 15px;margin:15px 0;font-size:18px}.comment-bottom[data-v-5d6c855c],.from[data-v-5d6c855c]{font-size:17px}.rating[data-v-5d6c855c]{width:107px}.heart[data-v-5d6c855c]{height:17px}.from[data-v-5d6c855c]{margin-bottom:7px}}",""]),t.exports=n},366:function(t,e,r){"use strict";r(345)},367:function(t,e,r){var n=r(107)(!1);n.push([t.i,".page-link[data-v-1e377822]{transform-style:preserve-3d;display:flex;margin:0 auto;font-size:18px;color:#fff;padding:20px;text-decoration:none;align-items:center;text-align:center;border:2px solid #fff;background:#000;justify-content:center;width:100%;position:relative;transition:transform .04s linear}.page-link[data-v-1e377822]:hover{transform:scale(1.03)}.page-link-inner[data-v-1e377822]{pointer-events:none}.page-icon[data-v-1e377822]{height:85px;width:85px;-o-object-fit:cover;object-fit:cover;position:relative;top:4px;display:block;margin:0 auto 14px;border-radius:100%;border:2px solid #fff}.page-rating[data-v-1e377822]{margin-top:4px;width:105px;height:24px;margin-left:auto;margin-right:auto}.page-title[data-v-1e377822]{text-align:center;font-size:22px;margin-top:30px}.page-title-loading[data-v-1e377822]{height:19px;width:100%;background:hsla(0,0%,100%,.15);margin:15px auto 10px}.page-num-ratings[data-v-1e377822]{font-size:12px;margin-top:0;opacity:.6}@keyframes border-dance-1e377822{0%{background-position:0 0,100% 100%,0 100%,100% 0}to{background-position:left 90px top,right 90px bottom,left bottom 90px,right top 90px}}@media only screen and (max-width:600px){.page-link[data-v-1e377822]{border-width:1px}.page-rating[data-v-1e377822]{width:103px}.page-num-ratings[data-v-1e377822]{font-size:14px;margin-top:-2px}}",""]),t.exports=n},368:function(t,e,r){t.exports=r.p+"fonts/RobotoCondensed-Regular.425cbf8.woff2"},378:function(t,e,r){"use strict";r(30),r(276);var n=r(333),o=r(297),d=r.n(o),l=r(337),c={components:{stars:n.a},data:function(){return{liked:!1}},mounted:function(){localStorage.getItem("er-".concat(this.id))&&(this.liked=!0)},methods:{onHeartClick:function(){this.liked?this.unlikeComment():this.likeComment()},unlikeComment:function(){d()({method:"post",url:"".concat(l.a,"/unlikeComment"),data:{id:this.id}}),localStorage.removeItem("er-".concat(this.id)),this.liked=!1},likeComment:function(){d()({method:"post",url:"".concat(l.a,"/likeComment"),data:{id:this.id}}),localStorage.setItem("er-".concat(this.id),!0),this.liked=!0}},props:{name:{type:String,required:!0},id:{type:String,required:!0},text:{type:String,required:!0},likes:{type:Number,required:!0},rating:{type:Number,required:!0}}},f=(r(364),r(28)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment"},[e("div",{staticClass:"from"},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),e("div",{staticClass:"comment-bottom"},[e("stars",{staticClass:"rating",attrs:{rating:t.rating}}),t._v(" "),e("div",{staticClass:"heart-wrapper"},[e("svg",{staticClass:"heart",class:{"heart-liked":t.liked},attrs:{"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 82 78",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.onHeartClick}},[e("path",{attrs:{d:"m376 43.839c-60.645 0-99.609 39.683-120 75.337-20.391-35.654-59.355-75.337-120-75.337-76.963 0-136 58.945-136 137.124 0 84.771 73.964 142.5 184.413 229.907 54.082 42.761 57.557 46.011 71.587 57.29 11.45-9.205 17.787-14.751 71.587-57.29 110.449-87.407 184.413-145.136 184.413-229.907 0-78.178-59.037-137.124-136-137.124z",fill:"none",stroke:"#fff","stroke-width":"18.21",transform:"matrix(.152993 0 0 .175659 1.5 -6.201)"}})]),t._v("\n      "+t._s(t.likes+(t.liked?1:0))+"\n    ")])],1)])}),[],!1,null,"5d6c855c",null);e.a=component.exports},379:function(t,e,r){"use strict";r(110);var n={components:{stars:r(333).a},props:{page:{type:Object,required:!0}},methods:{onHover:function(t){var e=t.target.offsetWidth,r=t.target.offsetHeight,n=(t.offsetX-e/2)/e*-7,o=(t.offsetY-r/2)/r*7;this.$refs.wrapper.style="transform: perspective(".concat(e,"px)\n        rotateX(").concat(o,"deg)\n        rotateY(").concat(n,"deg)\n        scale3d(1, 1, 1);")},onLeave:function(){this.$refs.wrapper.style="transition: transform .3s linear;"}}},o=(r(366),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("NuxtLink",{staticClass:"page-link",attrs:{to:"/earth-reviews/".concat(t.page.page,"/")}},[e("div",{staticClass:"page-link-inner"},[""!==t.page.page?e("picture",[e("source",{attrs:{srcset:"/earth-reviews/icons/webp/".concat(t.page.page,".webp")}}),t._v(" "),e("img",{staticClass:"page-icon",attrs:{loading:"lazy",src:"/earth-reviews/icons/jpg/".concat(t.page.page,".jpg"),alt:""}})]):e("div",{staticClass:"page-icon"}),t._v(" "),""!==t.page.title?e("span",{staticClass:"page-title"},[t._v(t._s(t.page.title))]):e("div",{staticClass:"page-title-loading"}),t._v(" "),e("stars",{staticClass:"page-rating",attrs:{rating:t.page.avg}}),t._v(" "),e("div",{staticClass:"page-num-ratings"},[t._v("\n      "+t._s(t.page.numRatings.toLocaleString())+" ratings\n    ")])],1)])}),[],!1,null,"1e377822",null);e.a=component.exports},501:function(t,e,r){var content=r(937);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("0e2ca858",content,!0,{sourceMap:!1})},936:function(t,e,r){"use strict";r(501)},937:function(t,e,r){var n=r(107),o=r(200),d=r(368),l=n(!1),c=o(d);l.push([t.i,"@font-face{font-family:RobotoCondensed;src:url("+c+")}.container[data-v-239cf979]{background-color:#000;min-height:100vh;background-image:url(/earth-reviews/bg.svg),url(/earth-reviews/grid-page.svg);background-size:300px auto,33px 33px;background-repeat:repeat,repeat;color:#fff;font-family:RobotoCondensed}.container-inner[data-v-239cf979]{padding:20px 20px 0}.content[data-v-239cf979]{margin-left:auto;margin-right:auto}.tagline[data-v-239cf979]{font-size:22px;margin:0 auto;line-height:1.3em;text-align:center;border:2px solid #fff;padding:13px;max-width:1200px;background:#000}.tagline-alert[data-v-239cf979]{height:22px;position:relative;top:3px;margin-right:8px}.title[data-v-239cf979]{height:150px;display:block;margin:50px auto 40px;z-index:2}.grid[data-v-239cf979],.title[data-v-239cf979]{position:relative}.grid[data-v-239cf979]{height:50px;background:url(/earth-reviews/grid.svg);background-size:100% 45px;background-repeat:repeat-x;background-position:0 bottom;width:100%;margin:-20px auto -3px;border-bottom:1px solid #fff}.grid[data-v-239cf979],.pages[data-v-239cf979]{max-width:1200px}.pages[data-v-239cf979]{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));margin:15px auto 20px;grid-gap:15px 15px;min-height:100vh}.review-on[data-v-239cf979]{font-size:18px;margin-bottom:-14px}.review-on-icon[data-v-239cf979]{height:18px;position:relative;top:2px;left:1px}.mobile-only[data-v-239cf979]{display:none}.site-link[data-v-239cf979]{position:absolute;top:15px;left:15px;max-width:140px;color:#fff;text-decoration:none}.title-loading[data-v-239cf979]{height:19px;width:50%;background:#fff}@media only screen and (max-width:500px){.container-inner[data-v-239cf979]{padding-left:10px;padding-right:10px}.title[data-v-239cf979]{margin-top:30px;margin-bottom:16px;max-width:84%;height:auto}.grass[data-v-239cf979]{background-size:100% 35px}.tagline[data-v-239cf979]{font-size:19px;margin-top:0;margin-bottom:0;line-height:1.23em;padding:11px 20px 9px;display:block;border:1px solid #fff}.pages[data-v-239cf979]{grid-template-columns:repeat(2,1fr);grid-gap:11px 10px;margin-top:11px}.mobile-only[data-v-239cf979]{display:block}.site-link[data-v-239cf979]{display:none}.tagline-alert[data-v-239cf979]{height:19px;margin-right:7px}.grid[data-v-239cf979]{background-size:100% 35px}}",""]),t.exports=l}}]);