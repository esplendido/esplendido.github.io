(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0f5c":function(t,e,a){"use strict";a("3bd8")},"164d":function(t,e,a){},"3bd8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-main",[a("router-view")],1),a("BottomNavi")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-bottom-navigation",{attrs:{app:"",grow:"",color:"teal"},model:{value:t.bottomNav,callback:function(e){t.bottomNav=e},expression:"bottomNav"}},[a("v-btn",{attrs:{value:"about",text:"",to:"/"}},[a("span",[t._v("About Me")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-bird")])],1),a("v-btn",{attrs:{value:"private",text:"",to:"/private"}},[a("span",[t._v("Private")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-account-details")])],1),a("v-btn",{attrs:{value:"skill",text:"",to:"/skill"}},[a("span",[t._v("Skill")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-wrench")])],1),a("v-btn",{attrs:{value:"link",text:"",to:"/link"}},[a("span",[t._v("Link")]),a("v-icon",{attrs:{large:""}},[t._v("mdi-link-variant")])],1)],1)],1)},s=[],l={data:function(){return{bottomNav:"about"}}},c=l,u=(a("0f5c"),a("2877")),p=a("6544"),f=a.n(p),d=a("b81c"),v=a("8336"),m=a("b0af"),h=a("132d"),b=Object(u["a"])(c,o,s,!1,null,"e3483494",null),g=b.exports;f()(b,{VBottomNavigation:d["a"],VBtn:v["a"],VCard:m["a"],VIcon:h["a"]});var y={name:"App",components:{BottomNavi:g}},x=y,w=(a("034f"),a("7496")),_=a("f6c4"),V=Object(u["a"])(x,n,i,!1,null,null,null),C=V.exports;f()(V,{VApp:w["a"],VMain:_["a"]});var j=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","fill-height":"",id:"about"}},[a("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[a("span",{staticClass:"font-weight-bold title-font"},[t._v("About Me")]),a("br"),a("v-avatar",{staticStyle:{border:"3px solid #ffa500 !important"},attrs:{size:"250",color:"grey lighten-4"}},[a("img",{attrs:{src:t.avatar,alt:"avatar"}})]),a("div",{staticClass:"title font-weight-thin mt-3"},[a("span",[t._v("【")]),a("a",{attrs:{href:t.data.twitterUrl}},[t._v("Twitter:"+t._s(t.data.twitterId))]),a("span",[t._v("】")])]),a("p",{staticClass:"title font-weight-thin mt-3",domProps:{innerHTML:t._s(t.data.intro)}}),a("br"),a("a",{attrs:{href:"#percentage"}},[a("v-img",{staticClass:"hidden-sm-and-down",staticStyle:{left:"48%"},attrs:{src:"https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif",width:"5%"}}),a("v-img",{staticClass:"hidden-md-and-up",staticStyle:{left:"43%","margin-bottom":"3vh"},attrs:{src:"https://media0.giphy.com/media/WoztRT1FFeliwstmao/giphy.gif",width:"15%"}})],1)],1)],1),a("v-layout",{attrs:{"justify-center":"","fill-height":"",row:"",wrap:"",id:"percentage"}},[a("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-5":""}},[a("p",{staticClass:"simple-font font-weight-light"},[t._v("playing GAME")]),a("v-row",{staticStyle:{padding:"0px 5vw"}},t._l(t.data.games,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",sm:"6",lg:"4"}},[a("Card",{attrs:{game:t}})],1)})),1)],1)],1),a("v-divider",{staticClass:"my-5"}),a("v-layout",{staticClass:"my-5",attrs:{"align-content":"","justify-center":"","fill-height":"",row:"",wrap:"","data-aos":"fade-up"}})],1)},O=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{style:t.titleFontSize},[t._v(t._s(t.game.title))]),a("v-card-subtitle",[t._v(t._s(t.game.subtitle))]),a("v-card-text",t._l(t.game.detail,(function(e,r){return a("div",{key:r,style:t.fontSize,domProps:{innerHTML:t._s(e)}})})),0)],1)},P=[],z=(a("b0c0"),{name:"Card",props:{game:Object},computed:{titleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"font-size: inherit !important";case"sm":return"font-size: 1.2rem !important";default:return"font-size: 1.7rem !important"}},fontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"font-size: inherit !important";case"sm":return"font-size: 0.9rem !important";default:return"font-size: 1.2rem !important"}}},data:function(){return{data:{title:"Vue Router 入門",subtitle:"",text:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating."}}}}),M=z,F=(a("bdaf"),a("99d9")),T=Object(u["a"])(M,k,P,!1,null,"b3de27d8",null),$=T.exports;f()(T,{VCard:m["a"],VCardSubtitle:F["a"],VCardText:F["b"],VCardTitle:F["c"]});var E={props:["data"],components:{Card:$},data:function(){return{avatar:a("ee34")}},beforeMount:function(){}},L=E,N=a("8212"),A=a("62ad"),D=a("a523"),I=a("ce7e"),B=a("0e8f"),R=a("adda"),J=a("a722"),H=a("0fd9"),U=Object(u["a"])(L,S,O,!1,null,null,null),W=U.exports;f()(U,{VAvatar:N["a"],VCol:A["a"],VContainer:D["a"],VDivider:I["a"],VFlex:B["a"],VImg:R["a"],VLayout:J["a"],VRow:H["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","fill-height":"",id:"about"}},[a("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[a("span",{staticClass:"font-weight-bold title-font"},[t._v("Private")]),a("br")])],1),a("v-layout",{attrs:{"justify-center":"","fill-height":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-5":""}},[a("p",{staticClass:"simple-font font-weight-light"},[t._v("作成中")])])],1),a("v-divider",{staticClass:"my-5"})],1)},X=[],q={props:[],components:{},data:function(){return{}}},K=q,Q=Object(u["a"])(K,G,X,!1,null,null,null),Y=Q.exports;f()(Q,{VContainer:D["a"],VDivider:I["a"],VFlex:B["a"],VLayout:J["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","fill-height":"",id:"about"}},[a("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[a("span",{staticClass:"font-weight-bold title-font"},[t._v("Skill")]),a("br")])],1),a("v-layout",{attrs:{"justify-center":"","fill-height":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-5":""}},[a("p",{staticClass:"simple-font font-weight-light"},[t._v("作成中")])])],1),a("v-divider",{staticClass:"my-5"})],1)},tt=[],et={props:[],components:{},data:function(){return{}}},at=et,rt=Object(u["a"])(at,Z,tt,!1,null,null,null),nt=rt.exports;f()(rt,{VContainer:D["a"],VDivider:I["a"],VFlex:B["a"],VLayout:J["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","fill-height":"",id:"about"}},[a("v-flex",{attrs:{"text-xs-center":"",xs12:""}},[a("span",{staticClass:"font-weight-bold title-font"},[t._v("Link")]),a("br")])],1),a("v-layout",{attrs:{"justify-center":"","fill-height":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-5":""}},[a("p",{staticClass:"simple-font font-weight-light"},[t._v("作成中")])])],1),a("v-divider",{staticClass:"my-5"})],1)},ot=[],st={props:[],components:{},data:function(){return{}}},lt=st,ct=Object(u["a"])(lt,it,ot,!1,null,null,null),ut=ct.exports;f()(ct,{VContainer:D["a"],VDivider:I["a"],VFlex:B["a"],VLayout:J["a"]});var pt=a("cb0d");r["a"].use(j["a"]);var ft=[{path:"/",component:W,props:{data:pt}},{path:"/private",component:Y},{path:"/skill",component:nt},{path:"/link",component:ut}],dt=new j["a"]({mode:"history",routes:ft}),vt=dt,mt=a("f309");r["a"].use(mt["a"]);var ht=new mt["a"]({}),bt=a("f5af"),gt=a.n(bt);a("e829");r["a"].config.productionTip=!1,new r["a"]({router:vt,vuetify:ht,created:function(){gt.a.init()},render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,a){},bdaf:function(t,e,a){"use strict";a("164d")},cb0d:function(t){t.exports=JSON.parse('{"intro":"ゲーム大好きの社会人♂<br>","twitterId":"@esplendido_game","twitterUrl":"https://twitter.com/esplendido_game","email":"","homepage":"https://esplendido.github.io/","games":[{"title":"コンパス","subtitle":"ガチエンジョイ勢","detail":["PSなくても楽しみたい！煽られたとしても楽しみたい！そんな気持ちでガチエンジョイ勢を名乗っています。","<br>","<span style=\\"color:green\\">使用ロール</span>","◎フルカノアタッカー","◯スプリンター/ガンナー","△タンク","<br>","友達に誘われてハマってしまい、半年ほどでその子のアカウントレベルを抜くことに...","課金は一応してる。運営も呆れるほどの微課金笑","<br>","コンパス歴：2020/2〜"]},{"title":"スマブラ","detail":["スマブラDX→for3DS→スマブラSP","やり込み時間そんなに長くないエンジョイ勢。1on1も好きだけど投稿されたステージでアイテム乱闘するのも大好き。","<br>","<span style=\\"color:red\\">VIPキャラ</span>","キャプテンファルコン","リトルマック","<br>","<span style=\\"color:orange\\">その他使用キャラ</span>","クラウド,リンク,ドンキーコング,クッパ,シモン"]},{"title":"白猫プロジェクト","detail":["リリース当初からの古参勢","今はログイン率低めで最強キャラにもついていけてない","<br>","<span style=\\"color:orange\\">好きなキャラ</span>","ルウシェ","イシュプール"]}]}')},ee34:function(t,e,a){t.exports=a.p+"img/esple_icon.94c0e06b.jpeg"}});
//# sourceMappingURL=app.e192d54e.js.map