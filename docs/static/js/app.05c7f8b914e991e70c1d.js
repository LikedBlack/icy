webpackJsonp([1],{"/9uN":function(t,n,e){"use strict";var a=e("3evy"),r=(e.n(a),e("Irlo")),i=e.n(r),s=e("CCOf"),c=(e.n(s),e("rrcz")),u=e.n(c);e("7+uW").default.use(i.a).use(u.a),n.a={data:function(){return{active:0,lineWidth:30}}}},"076A":function(t,n){},"0n8C":function(t,n){},"17KZ":function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("ik/t"),u=e("nnJ7"),o=e("dJ0F");n.a={components:{Container:c.a,Item:u.a},mounted:function(){this.fetchUpdates()},data:function(){return{title:"本周更新",items:[]}},methods:{fetchUpdates:function(){function t(){return n.apply(this,arguments)}var n=s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.fetchUpdates();case 2:this.items=t.sent;case 3:case"end":return t.stop()}},t,this)}));return t}()}}},"3lOz":function(t,n){},"5BsT":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-tabs",{staticClass:"footer-bar",attrs:{"line-width":t.lineWidth},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-tab",{attrs:{title:"STYLE"}}),t._v(" "),e("van-tab",{attrs:{title:"ICON"}}),t._v(" "),e("van-tab",{attrs:{title:"SHOP"}}),t._v(" "),e("van-tab",{attrs:{title:"ME"}})],1)},r=[]},"6MdN":function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("ik/t"),u=e("YcsR"),o=e("dJ0F");n.a={components:{Container:c.a,Item:u.a},mounted:function(){this.fetchComments()},data:function(){return{title:"大家说",items:[]}},methods:{fetchComments:function(){function t(){return n.apply(this,arguments)}var n=s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.fetchAll();case 2:this.items=t.sent;case 3:case"end":return t.stop()}},t,this)}));return t}()}}},"7YoW":function(t,n){},"9nkg":function(t,n){},DOfO:function(t,n){},ENB7:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("container",{attrs:{title:t.title,"view-more":!0}},[e("div",{attrs:{slot:"content"},slot:"content"},t._l(t.items,function(t,n){return e("div",{key:n},[e("item",{attrs:{"product-pic":t.productPic,name:t.name,comment:t.comment,time:t.time,pics:t.pics}})],1)}))])},r=[]},FeJZ:function(t,n){},"G2+E":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"common-title left"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"line"})]),t._v(" "),t.viewMore?e("div",{staticClass:"right"},[e("p",{staticClass:"more"},[t._v("查看更多")])]):t._e()]),t._v(" "),t._t("content")],2)},r=[]},HEK4:function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("Zrlr"),u=e.n(c),o=e("HZzL"),l=this,f=function t(){u()(this,t)};f.fetchImages=function(){var t=s()(r.a.mark(function t(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/swipe-images",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,l)}));return function(){return t.apply(this,arguments)}}(),n.a=f},HZzL:function(t,n,e){"use strict";e.d(n,"b",function(){return c});var a=e("mtWM"),r=e.n(a),i=e("M4fF"),s=e.n(i),c=function(){r.a.interceptors.request.use(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.a.merge(t,{url:"/api"+t.url,headers:{"Content-Type":"application/json"}}),t})};n.a=r.a},HlnN:function(t,n){},IB4o:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("img",{staticClass:"product-pic",attrs:{src:t.productPic}})]),t._v(" "),e("div",{staticClass:"right"},[e("header",[e("span",[t._v(t._s(t.name))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.time))])]),t._v(" "),e("p",{staticClass:"comment"},[t._v(t._s(t.comment))]),t._v(" "),e("footer",t._l(t.pics,function(t,n){return e("div",{key:n,staticClass:"comment-image"},[e("img",{attrs:{src:t}})])}))])])},r=[]},Isyw:function(t,n){},"KhH+":function(t,n,e){"use strict";function a(t){e("FeJZ")}var r=e("/9uN"),i=e("5BsT"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,null,null);n.a=u.exports},M93x:function(t,n,e){"use strict";function a(t){e("0n8C")}var r=e("xJD8"),i=e("rx7d"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,"data-v-795feccf",null);n.a=u.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r=e("M93x"),i=e("HZzL"),s=e("sVYa");e.n(s);Object(i.b)(),new a.default({el:"#app",render:function(t){return t(r.a)}})},RGWY:function(t,n,e){"use strict";n.a={props:{title:String,viewMore:Boolean}}},T8d2:function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("08XL"),u=(e.n(c),e("24wo")),o=e.n(u),l=e("G/J0"),f=(e.n(l),e("beN6")),d=e.n(f),v=e("ORyp"),p=(e.n(v),e("3p6b")),m=e.n(p),h=e("7+uW"),_=e("dJ0F");h.default.use(o.a).use(d.a).use(m.a),n.a={mounted:function(){this.fetchImages()},data:function(){return{images:[]}},methods:{fetchImages:function(){function t(){return n.apply(this,arguments)}var n=s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.b.fetchImages();case 2:this.images=t.sent;case 3:case"end":return t.stop()}},t,this)}));return t}()}}},U1qh:function(t,n,e){"use strict";function a(t){e("3lOz")}var r=e("tTW1"),i=e("YLmU"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,"data-v-2f2dbd7e",null);n.a=u.exports},VOpR:function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("Zrlr"),u=e.n(c),o=e("HZzL"),l=this,f=function t(){u()(this,t)};f.fetchUpdates=function(){var t=s()(r.a.mark(function t(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/week-updates",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,l)}));return function(){return t.apply(this,arguments)}}(),n.a=f},X2nH:function(t,n,e){"use strict";n.a={props:{pic:String,title:String,subTitle:String,goodsCount:Number},data:function(){return{}}}},XoV2:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t.goodsCount?e("div",{staticClass:"goods-count"},[e("p",{staticClass:"big-font"},[t._v("含"+t._s(t.goodsCount))]),t._v(" "),e("p",[t._v("件单品")])]):t._e(),t._v(" "),e("div",[e("img",{attrs:{src:t.pic}})]),t._v(" "),e("div",{staticClass:"common-word"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])])},r=[]},YLmU:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("van-nav-bar",{staticClass:"top-header",attrs:{title:"标题","left-text":"返回","left-arrow":"",fixed:"","z-index":200}},[e("van-search",{attrs:{slot:"title",placeholder:"请输入搜索关键词"},slot:"title",model:{value:t.searchValue,callback:function(n){t.searchValue=n},expression:"searchValue"}}),t._v(" "),e("van-icon",{attrs:{slot:"right",name:"shopping-cart"},slot:"right"})],1):t._e()},r=[]},YcsR:function(t,n,e){"use strict";function a(t){e("Isyw")}var r=e("sd7H"),i=e("IB4o"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,"data-v-135c8e18",null);n.a=u.exports},bGai:function(t,n,e){"use strict";var a=e("xvT9"),r=e("U1qh"),i=e("KhH+"),s=e("sdV3"),c=e("f5KQ");e.d(n,"e",function(){return s.a}),e.d(n,"a",function(){return c.a}),e.d(n,"d",function(){return a.a}),e.d(n,"c",function(){return r.a}),e.d(n,"b",function(){return i.a})},cdS4:function(t,n){},dJ0F:function(t,n,e){"use strict";var a=(e("HZzL"),e("jA/W")),r=e("VOpR"),i=e("HEK4");e.d(n,"b",function(){return i.a}),e.d(n,"a",function(){return a.a}),e.d(n,"c",function(){return r.a})},f5KQ:function(t,n,e){"use strict";var a=e("6MdN"),r=e("ENB7"),i=e("XyMi"),s=Object(i.a)(a.a,r.a,r.b,!1,null,null,null);n.a=s.exports},"ik/t":function(t,n,e){"use strict";function a(t){e("r0X0")}var r=e("RGWY"),i=e("G2+E"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,"data-v-08ce1e48",null);n.a=u.exports},"jA/W":function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),i=e("exGp"),s=e.n(i),c=e("Zrlr"),u=e.n(c),o=e("HZzL"),l=this,f=function t(){u()(this,t)};f.fetchAll=function(){var t=s()(r.a.mark(function t(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/comment-updates",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,l)}));return function(){return t.apply(this,arguments)}}(),n.a=f},k1Hi:function(t,n){},m7zo:function(t,n){},nnJ7:function(t,n,e){"use strict";function a(t){e("HlnN")}var r=e("X2nH"),i=e("XoV2"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,"data-v-383c1bea",null);n.a=u.exports},oNIr:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("container",{attrs:{title:t.title}},[e("div",{attrs:{slot:"content"},slot:"content"},t._l(t.items,function(t,n){return e("div",{key:n},[e("item",{attrs:{title:t.title,pic:t.pic,"goods-count":t.goodsCount,"sub-title":t.subTitle}})],1)}))])},r=[]},r0X0:function(t,n){},rx7d:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header-bar"),t._v(" "),e("van-list",{attrs:{finished:t.finished,loading:!1,offset:0,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[e("van-cell",[e("swipe")],1),t._v(" "),e("van-cell",[e("week-update")],1),t._v(" "),t.showComments?e("van-cell",[e("comments")],1):t._e()],1),t._v(" "),e("footer-bar"),t._v(" "),e("van-loading",{attrs:{type:"spinner",color:"white"}})],1)},r=[]},sd7H:function(t,n,e){"use strict";n.a={props:{productPic:String,name:String,comment:String,time:String,pics:Array}}},sdV3:function(t,n,e){"use strict";var a=e("17KZ"),r=e("oNIr"),i=e("XyMi"),s=Object(i.a)(a.a,r.a,r.b,!1,null,null,null);n.a=s.exports},tTW1:function(t,n,e){"use strict";var a=e("tcuZ"),r=(e.n(a),e("iMPx")),i=e.n(r),s=e("9ULi"),c=(e.n(s),e("lQdh")),u=e.n(c),o=e("jydU"),l=(e.n(o),e("WQwN")),f=e.n(l),d=e("7+uW"),v=e("M4fF"),p=e.n(v);d.default.use(i.a).use(u.a).use(f.a),n.a={mounted:function(){window.addEventListener("scroll",p.a.throttle(this.handleScroll,200))},data:function(){return{show:!0,searchValue:"连衣裙"}},methods:{handleScroll:function(){document.documentElement.scrollTop<100?this.show=!1:this.show=!0}}}},xJD8:function(t,n,e){"use strict";var a=e("Mcfu"),r=(e.n(a),e("r9aq")),i=e.n(r),s=e("cnGM"),c=(e.n(s),e("S6j6")),u=e.n(c),o=e("uTM9"),l=(e.n(o),e("Jq84")),f=e.n(l),d=e("7+uW"),v=e("bGai");d.default.use(i.a).use(u.a).use(f.a),n.a={components:{HeaderBar:v.c,WeekUpdate:v.e,Comments:v.a,Swipe:v.d,FooterBar:v.b},data:function(){return{loading:!1,finished:!1,showComments:!1}},methods:{onLoad:function(){this.loading=!1,this.finished=!0,this.showComments=!0}}}},xL5C:function(t,n){},xvT9:function(t,n,e){"use strict";function a(t){e("k1Hi")}var r=e("T8d2"),i=e("ySa3"),s=e("XyMi"),c=a,u=Object(s.a)(r.a,i.a,i.b,!1,c,null,null);n.a=u.exports},ySa3:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,function(t,n){return e("van-swipe-item",{key:n},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])}))},r=[]}},["NHnr"]);
//# sourceMappingURL=app.05c7f8b914e991e70c1d.js.map